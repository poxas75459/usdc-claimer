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
    "4eYXfKFUzGHjqXJNUnvirxuYoJeQYboiUrNvzpNn4EmbyMZpSDVXmA8kR2tU29obDn379C4VX1GmdQ44qw7sDKde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnueTHMLzq5nYhb4eqvVzZLJqNgrgCkGhk45nkHfHVcV3vY9Vnv9b9buekyCoMvnuG2LLEe9gXkuEuBGHMbFmTj",
  "key1": "5PrXNsR8EeFayqmdXuPTKxHbVpjDDaq4uhdYozVsnxVRkLjwFQJVZP4WyvZbqKoGu87BR8tMCFwzYHkes69voYR8",
  "key2": "39oKuUiKufrEFfD86D9Uxqe1b49tCn8EDzAiCmaafPLXmUtPVgs7UsDMxHkHcXVP6XqLXSQ1ocJp9FPqsYK7NaTU",
  "key3": "5J8Rj5qPG7BzRdskoVPqC5Ba653jW6Xsaxi1d8o6Luuatun8jNXji1h1Bp32pqqkCmucdT24MEMdbavVjZxv9vh4",
  "key4": "3gpjgfViPMw2qmwC1HwvoiDFRtz51oBK1731Y2jxVxcL2WoxFgnmm9zh3YhW1BUrdpp2sZxcAJMDskioG2s2B53c",
  "key5": "2hWbQXMu9prXMvzknKpoBuGUvEy7sNkEVEDGkvtADpjvaECSWBgdja68tWBTst4K7R5aQbiL3AF7hCZKsKnrPnGA",
  "key6": "4juDtZACfUFmQcKK2R23AtGwVKvSGfSy7Qz23JkUJiSMhYKA8h8odHEnS2o7Yp5kX7fiv5CYNnqRLr1p9fDpMSq3",
  "key7": "5161ijbZ2jPMv2rCos28C9RDrg1Ex89vAxPsR5aiMehJ9onrpB2XgqsaSV1L1Ube7ENrn1ToBohRAXQ5g3sXsQ6a",
  "key8": "2cfYnW5WqVqzgFwADvrNFBFRECuiEUVKkjiXMMQimGSC9d6VFb3KGYJXNCobMLoiYn4dwrNRsF8H7dEgdMQqTM43",
  "key9": "BMMvRttLTTgqcUKUzD1LeDSwaSQfFbawfhJJSk1s6uZGv3QGtxvTMD4jXQoVkrcPLUz4ncYwqyWkw4fceNUC87X",
  "key10": "4LC97zV8TMVbNyFbr4T3Yxn6mBcwjwcHhSTytegmMyHZMDSCkNoiKvRiFnciHJ4VUo6veZf1qKQraSYw2aL5ytxy",
  "key11": "Pq3GW1nR7NpzhaGCEWZXoVmDCUYVBoouW9oSgPsTs2zvoGb9o5Six8HkWUZUh89Wu5qSDEZWCPNjD11cFUvzLm7",
  "key12": "2SYGUZLEpUvw4jy9epNpvMhSzpFGzDQnUfxbnVsfAgDRZzkdW2Mz6e4ZSzNkMYHDNLoPx7boki4jHMe5ZVpKmQZy",
  "key13": "EkYSvzh67SoXMFFf28ahUEevsLY1uL2hsKxrS5uB9DS7KRWBR1ct6XeC2ZRfJuFYmKBFveQvB2PLrBo75A9nsSq",
  "key14": "5NFpCXpPPGdaXMtvjpFKyWF8GT7A476Q739ZdLFonoKDn2bo4vdnk6KoANtoV9GYH4uVVpUYNQYJR5SRm6H4GnX8",
  "key15": "3NuBfivWcFbPDoSrrVs1g91J8ziguwv46SAbA9fvctoDzLmPyxrcBtjjV4goiUco5YfaQgjT4svqfNgtDnCF3h43",
  "key16": "4VYhakq4Y4VZspSvTX5JEbBW2afv9yffmeK25P1Wpgnn1UeP7wABnunpfUnXYuxjKsKkFYyJ5VGof4rwKrfhwYvv",
  "key17": "cjMWZuerqT7QNDe2UXicuieJ3tt22oHr5J2i6zdNcni5BxNobKhWvkEFkJT1VJoF8MjwBybUXQRFiYi5DTGRJct",
  "key18": "U13FaMSKbSkmTwo39CRK1914MsEKt73Pmy2E4oD6oXJMGQ19ZoJtHbc3xE7FhTViJemWTTiFxhYHNiHgfF6MzDF",
  "key19": "5Ud7d2huvcRgSrTnkDe8hVifnMPNN5Vcdu4eDyXatjvcwJWmQbm9qmGwFbFj2ApS1e1wRLy8LB5RCFoykZW6qufw",
  "key20": "3rZJCAJPZw9724jJAht4SVPprjU1PKYFSStTvUeBq3H3fZtMngpyZqN47nqgUQXwd9GKLPW46cq87YMve5yyfUSk",
  "key21": "3ZN1YVQDQUdhax3W6LwBHtbzyhbiNBqvHW3gDYvwRSdaBddStmTogmsG99bFgXPNrK1wwAVJ539hbzVxwrJKkXpT",
  "key22": "2Zmvn778vtxJQtzSZi17tYZzdYx6fNyLVJ1Brft3gvPE6dieHzBHtwsCSoHKwfMMwRyaat9eofZ2Px5m3UFzdASU",
  "key23": "2TWZN34HL2o15hs2QaLPT2dHouMLzXjbbviHpym1QFMttkaP3oKJZmQiWxsHhETpmiS91bYiFQyL31uUCSSS6rLh",
  "key24": "2QLTvvkkuWb4HDu9LdeTajVqHwHDyMy6oRhyCYz3LGJwpWZMz2EYLpzBJbeqsLs7hJeWzYNFj27Vcgw8oqYD8QDP",
  "key25": "b136r6Bj2NR5hhy1KJ8baB3MQi9d22Zs5iUaQUYaR1QQ8PLhLFX46YiK13Ab6mQfdBNC7zYyENiaXJtJ58ZYPuG",
  "key26": "Qz349hkcBF7zvuEdvsHLX7PG7QeQ8Y4vXrraSVzP6Jznt9na6gacNjWc3THfvvWyrwoK31hJ39omZDhUBanTQn1",
  "key27": "5rE9eXwjvSz4rWpGNvXQdWirVrHvwwyNrehQvRMkZZpMSZBgqjHgX4rWve82dv39wZzzY7TBtVKHT11Dvsvh8X95",
  "key28": "8GogjZ4tedvNxowverh1TCS2mngXhoNGVzBksLbqh4KVJvwfktJTbjqnmve313LgkBqRiHPxvHGZdZcnnjncC6j",
  "key29": "5Uvdav3JEge4ogSBA4VADpQmQ8TosxgFrL4cxzLA31kWVGLgwSBUnBTt4StmrFh7WUYsXwcVB6DZZPTDuAJTiyqY",
  "key30": "35wCywqr5u2Tb32hghLv2fnoY6H7Az7cM51A15Vjy59CrmY1LH17K55sDA83JePySbkRHNueNBqxz1YZRwiEPcXX",
  "key31": "4JCoWvkMYgDCr9wA6LhRcYe9zTtke4z1mwSceMT19xbX2dvsS7LYoQjSZques3U8wudeSajBaFsoxytibwNn4c9p",
  "key32": "2UYXHzui5ZmoVunqg8LiTA2pwRR1zweg8FWRFefWSoor2j8AG4T2e2nSWH7RWVLYL9aSe1Z7XXnFaXY7EJHB3dLa",
  "key33": "4VupUWCvBKLSb9YKUCiKE9ERrk3LKNQVmJnDjZPnSVqZt8rs13TK21XNd96FzguMBWXfR4WQegtfTAva72nRNJ1C"
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
