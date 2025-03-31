/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4iCo3HiC7aHbPKUgWjj4U4kppM7KWaJ8BJwSvmf4B694U56LYRSk7WZfoEAKaTWd9Sfvpp7YcP9US7E9MAozUvdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgLEwg85z1HEivZncCw7fzg6p4RWDW194FPbBTqPh5CJGhv9GjiARifUvMAGjinuJQG8w26ZnsB5JL41Gwows7P",
  "key1": "41TvMc1vmLDkCk2MZeyyCQuPRabKBLNaiPfcEu8XmdKMyoW2q6KSh3mpGUHgCpwsoBCuzD2RfKJ6hpCDBJUUvfc2",
  "key2": "5LunDWVbZF7YnaN3Y2hQq8cDc4Xph1VL8GNDbrMcZkvW93hFtFyRhebTEQZSvfD77hBy6sB8uRZQGGqBSrohTyUq",
  "key3": "2U4rKxcnY8tC4bgqJ4FfMQRnQuZRAaw9x6tXEV47daWwaf3HrkFVqWJPwrWUVqsN7geJkwGq7cYxYq6HMkAzgqZf",
  "key4": "GUDFK6HxTXBXh3mPf621wRCj1eYoBHNzJR12nH7RewPzaixG1gUEriJRUJN9Fu4gMG8QXrGegbCoHkoZTCvHGTH",
  "key5": "61wEQMAVrw6pTrumefXBhJUpLDHWu7E2gQTGggcfqn6G9WK765KXEy1hxGQrurWCAaNk6cyFkGWAz94gjMkp7Uzv",
  "key6": "2JZfh9Myu9J3q1VXQvhr3TKtYH1xSQQU2Rh1HEB4UJ8QJ5ugwoCdmBNaJKFDZxPtHGVYGhhKUZv96tqKnmWKTSZB",
  "key7": "3xAfgiqnNodzeBDTZVybjZxbkoT4MgGNwA9ui8XJj28qgQRwj8m8HB4h1KHTgjhhL78UQ9HPwJjXhPAbZDN81AiN",
  "key8": "2Bvr6zxxd3XJ36FWT1RsLeqaSGghwbVmz5vo62rh7MpjoM91rcpmhndnjyFqUg3owonNnUK6xBvzUZ1zKC8Ab5v7",
  "key9": "4sjDRAqW1NsfqqGTfZ4NHurEuMNagWtN3dppk8LS3GGAY9Xa4K68EgKT7LFxxEvjqrvBEbPM61UeE5uLRdSDyikb",
  "key10": "RwUjg9R5EqdTqSpgVVFE4o4yhwPhSYc3dwVPdChP75URJwqPmc729YRfpYbFXJZXisNunHuon2c895ufaAMJbKR",
  "key11": "JUTWGunovkLvsEdjtNH3orPNrwx9rWMrrX4DGZNJ9GsQXAUcWYL74VAQQomW9UFoLFASxTU923ANwv6cRuZ2oPN",
  "key12": "23j2LZJZ47AvgboHgWcFDvNaKMMnaEf4MUMfsVyHsKiPGjnJ1gKPjgMDZ1m89FUSUEYbXbDaXkJ5Fc5NAkshEMRH",
  "key13": "3Z7URaySUDFwikmHDNyvkbKvq6SL6iUTswaqzBHXXPtiWMHbEj5KYqZcM3cwSou6t5jPzEurzjDcDGmRpYkVB7F6",
  "key14": "WB6QxwPnbdCL3EKJeMoiyytuTMoZ9LZFPD5bsaEmFVvp7gdryZkwmZaPxhytKCpy47DbMG35Lt7ooqFWCCw2YXW",
  "key15": "4F9NegasePae5fCnV4xDMBUuUaXnnFcDMNCmNgFN3ufdqG3XjLCXtEapcGFFWcwM9PARNcrFduuiMgdNrhAPkzK4",
  "key16": "43hb78seSBRTB9nRAbqedwxVpLzLTUnFaA5rVSy71KdxEEUPbMwnYzDTru4fjKz5daGi19AyY6UbBKC29uKmnTo3",
  "key17": "3UqAFWKCW4RYKbuh736MG6Tc73CbV6KxKRzyDuHJH8w2nbyGfeg6yEKzUWTTdtvJFVUdWEnW3LdXtFjmPEPeSeH9",
  "key18": "49aNKPqz3ZctA43bDkQ46dDWdrTEXE5djJTDaWES3H8Ai4paDyqFCHeGZd3tKxSHBvbNBbfWr82gain8KDZLUMc3",
  "key19": "5ejv2fCJoTpuEBsdJxSJwdCZfmnvnvLYd83ZGdF5K4behKzhg3KSAxudsuSKg4958sPTgPshXSyrf6xQn5VtLyN3",
  "key20": "5YxJysTUhrjZVsJzhtbejMepL9XtbPYkZ1QzXKxJ5SfJ3HmZhvzFhaJ5DAxgwSyaS85SQscPdnMapozy2kCFRU4X",
  "key21": "4wu3oWs3aQyp8TCFVA5Rtzyqp6GrisnUgQzn4gKpj5ttuX9BtL9ud1fycYi7RnNi9KAWfKueexF3kP5Dnb9KKAnx",
  "key22": "4L4rJWsB2o3boCAk79S38ox3JUAuyQpCZ7nitDv5uJwCneDNZcWQ1ouZ79DjCrfvHhRZLfLt3wumv3hGT8bWvtoz",
  "key23": "5vbpH6pKJ6WGfssdH3vPzgjzYE1E2TDMBdxuHsUEo9U9kugkmuogXov6J66XNMoXMZ7eT3vY66dyXNtJPLvyRiHK",
  "key24": "3o2c4b3u7LPgbXqpNYewNV2pHaKdxQzoDhMRXkGe9YqKDh4ytjAQbVQyvu1BqsRcvd87ph8V3mSnWK5m2zDo7o46",
  "key25": "3Xgaavfg4EtGzgjfjMyqrxeSrdYj2u725qMPjKjNs29phLSQ4YibQ5z4xUot6Nz1KK7q9FxsZMbGVRCdG4jVDHUr",
  "key26": "5dkkRwq3mtbdP9L6JU299FqChRazTj3pDh6TfG6Gv1sbXHJr1ZMUp96MLzPs7sXkigth98MZndHJkorMXMh8Gg4b",
  "key27": "3io7FNm8b5ZH6VvVzaps6d9vRGATHmDG7uCMXfdb3h3YjaTSe81b9yqdrcsX1WUU91bqSNtSZrzeehsXbPN9QjmZ",
  "key28": "5EqsdT81pARXExqcHvJyMHeGWa3Runk5d4G9JTrpeHf1daYDC3fpJN8u41TtX11i2MFAn5J8BLfK6gkvoRBgRZJB",
  "key29": "5277pkUCAqDAK7N6BsXNDKe54mcJc9mRzafynD4Eu9FkRq3ZdLE4ziwnYvUFaJxxLvMDG5H9uTt1gZ41EmCQcr6o",
  "key30": "3rCPNiEkQWK7vbjpUhCgnjr1VmWVMiqdWj458xgpVHpeQwdQCNHhMLMKmyHMWFJWTrU68a5AKtju5C2tF7TAgXLd",
  "key31": "4bekPKa6DHaMDVWwfVbm5AT5c6Nqr9rri1YZwvwjQgfgEyZR2k2woeey4GdK1sYVeRuLDNYWE8CPxtoX174sZ8U3",
  "key32": "QQ8QGUpHcgRHFnb2BcMDHqnx6hcCAKLXkdH4f9dPw1vSmeM42vnHKwf5ZRDYXwwf5zmq4C5mrNeH9wcRUzJstAN",
  "key33": "4HkAduU3jvxxbtjdTRP679CwUryGnPxhaxmr6VejQTKkChTfgLfw1jckEtebqUqBDgizXGU8qjYucGkhgF3zYTC6",
  "key34": "2dMy3Ncjq1A2yUV6kD8EHtMz7pTPagyn943ZV57VvYwh3bUhfWJzUf6qmKtEmX55tAYYJ8AmU7Fyiqn5Dqmqq21Y",
  "key35": "66UWXFmS7x5B1rXAnhREusWLeqLtEQQZpr1LJd96asfSsyQT9RAZNcng9fn5PHda1sBNuKyJ6tZ6oAmo1VLSUKkx",
  "key36": "2U2uQW1291x6a6vb4tQ2wHkSDPwZ6RdW5KSfdsjuEPoCjFo9C78Qgr2fSPg4XNW1efUmypZuy8SbgdYrfzyBRSeG",
  "key37": "5gUvQbsHPcmyq4MuHSRYcXZe27cSBiUhBHBhZ4CFzNEZd3dh5fth3tTRc1DJqF2WHWfyWVkPFCMQZzaDDTeqzXY7",
  "key38": "2UBr6mSa9Pd94ntAjZKDenGpxw4t6qYVYJ5FwgG5daeWpWbaeFHRwUPUuZ9x27WJdKdzvRoR7qoMCP3F3CAETjaX",
  "key39": "27qdLCyhGeXwwbF3MrEERuPiNq7qygxYZfm4fLgASSaPfwMVEW3KupmnZ5qKcfRiavWuCLTPeqjKZPPAUWuWBVjN",
  "key40": "3NBr2AWs1bzhSoT4vK24yTyckev69yGT2zxycu6R7BUKZptEb3G7fSTASTTvohqTprRX4NggBjxtnZre1SezNEBH",
  "key41": "5sL2nAtff7akiJtssAhTC5sGoBSV41CPSSbooUDzSc4uGiTWYmZ2LF3kZ68TjCsgZRFUrqgezBKcqLkgP5b4VoWA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
