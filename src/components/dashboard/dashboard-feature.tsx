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
    "2UGHA4G3VZcJQcdcBwYVWsPJDcTpTvRtRXqjwrsPbMnG7hN35YZwmMWrjhwqZpnep9QU2g2UsE38GSqAx84Rw8YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcNFN5ZjqbYEzqJ5e34twzrFMopbR3eRkcMXjWqzDLvvKQGxTmjLrW4ThVDnJwV7ui9n181VVjEfz7kh7bcXCTs",
  "key1": "5G1G6yeH9FrnDzptnMZpgsTeTe9dhvwF7sTvTqLvxcJ8V7ipXeBbq9FNqLCQWC1VU7pxcsAmvXeSyEKRfWnDUgRB",
  "key2": "3kVon4KvLyN912D1VNCbqKB15T6KVCSMDcAuXV8nySmJm6kjfMm4ZLowfN6HbrjKJkUSAXSXagSjGVCRWner4s3V",
  "key3": "2cCcTD8wsi93vi1spc1GWzvy2rTkxHZaSGvmAhzJY65jGGcFMBgpc2WXVD4HMXcPRj28UknbVYnA6eoXhvcZeUHN",
  "key4": "3ALZ6VqAo5c9eWXeYHuz4mbgZhpzmYd1ZTduGKZzmVqro7EqGBiMRqLVynRk5uJEiQUZrVtJeYcHDKvfWLdKM55C",
  "key5": "3Xc6fr5eEAH2hHEL3tdXSo3SywZBva7DJKYVFPJhhUEVnvrHq8BAPEtTT6Gg5HzXiE45dv7QRbsFRPm5wiiQs6SM",
  "key6": "5mn59Kagm7kGEzTk98v4pEsjc71C48QpfXQb2DjCkZ8qomnjWBiHcg7bSABcciiAj7zST5X6FmwEaC6Y6V5T9S3Z",
  "key7": "2f2qHC7of7tgy96hoYQVQWL7VBaEKrN2yoGByrhfeMNqfw6KwizQ22Q2tDBWwNREhAP34htRruJtGgKdtTjCoCE6",
  "key8": "5Tkf7NQ3wdoXYbfiqmjEfudUBdK4ftfNA9G4esJ9dPSpLUt4idf5aKYeC4XhRzS9tye49s7yMMZ8kLxvYnxQjs1N",
  "key9": "5k9VJeNKcKhEzr8nUZLTYSu8JLYLcwSefxqBLTzYrSv57mwQh3o815fJ26TeuVdABCCMDtpwAYF4C3vsVrb6MPXt",
  "key10": "25wzkg3nr3HsUgh8mnp2AMHXuckUvvAXzmoFEeu1oTenP7rTKeXBJTBW1T3bqd4voBivKdkuhgbr1zjoA5MiJvTn",
  "key11": "4XuusDma2b4PuYiNrFthJcF4msYoVoqNvokmYyp8dNamXa8hF3h1eaC8fqErP9MzMWXaM645odrsbkDqpaHbDjBE",
  "key12": "5VQKs2P7QdKjCbJuHpwC2FgAFtyb6YWrbAR85KWFVQjy4jTBQjfrPUrgvd87d4UU6HG8UtykcNcPYDQg2zaMtcea",
  "key13": "5WhivyaLTBV23Uji9ebRX6MV42Gf2pUniKQgAxdrnW1pXqEXG39KeHJqUnBP17AkSaXYm8y5ngUnwPydJB3xZF1u",
  "key14": "5DJSLM3qFJjdEBBexv2JrVVNXWx8pcDFa69TYDERSpYL1N4cWJu7zv6WCrNzAUARb4xToJzMPjD5gWLLAwP8UcFe",
  "key15": "bd4z1RmTwwHcWy9cGry6qa2mMewzD4QSVGpzKhZgwdqfn9zdYPpicT1SZqmPzX89aDYraVgHwRaM2hg9mpPPbYq",
  "key16": "3t7W4ApRFMkBmwcXrhe51nASEckkRyhenDnmDcvWZUcdmSyBpMv6PYCvrKd7e36BWsGfMSaDmd5aqWnxDHvtNVFZ",
  "key17": "5TGVs1ZhAYgvz8vJxvbGRjA7MHuLrHBMkGEq519CZjtN3JLyhjSm267fFh5jgMFvV54SK15abJvHFK5dVADp2AUb",
  "key18": "So4m98v3wkwB25FyPGvKmks943N1k6KfHHUfYL8kCH1r5LExDc2dVDwWPz94HYHR3ovsHytsrtfP1G5wdGZ5VP9",
  "key19": "xTJJvM7Y3Hwu3dzQnTAumxhgjA4oucPBAp3uiGUtkwwEYFDqaxRs2QdV3SgywmG6fkojh9831fFWJvuBy671xPb",
  "key20": "wcrVYoJGVrtN8aC6Dn1RQfsqdFWkv9yo4VnksMa8tAB8dcfVNYJpwVJs5L5j7jRUUMvHn1JrMNYNEbJFRZ2qQEU",
  "key21": "5nANsVG4u5rqQVMKyv5ZhGr4Gvf5sbKBtKqKXfiWneq1e6KaGRR9xuFkDTC8WMk9crYtfVaLENWZbuM6AU4gbUPa",
  "key22": "eoqD6pHdQDW2zR1QeNrssoF4La9J8TsLW9RXzoyKhaCEWNAz2AgcaPmzPQTW7G2Frow8dUuerqX7V2aPYHkNWLC",
  "key23": "QZAYZcZvWtAKYRSS5TYGS1BNQuoaNGwCw7hVHRnEjNEyVVfXwRfy5UUcFCb6A7BGTRokSspWSUYxWfLzQDHaedC",
  "key24": "4SAmiRoqo9fokDbd2V4KXowd4zwf6zHpGuZ24xidi61qXQ55ktEpgYJ1dmHHAgRek7Exi98oBcR8afXayxzgWZXP",
  "key25": "3aenQ56twxqZCrhcQoc6qoMPRHfBEYwVULYM4SKyAKeUTLhcHiEr3ki5cWJXRCTeq2JSFRyNVX1hkA6geYmUFRR8",
  "key26": "3F6EFtP2X6NESYaKakABzgnMMgCoxuanYgEvqsf2K7oj6acw7eMiVYnSH41mcZWJseNWdZNR7wk6HV58eXaV3Gaf",
  "key27": "2xPmb1kCi8Aw5ko63LyvZjLrowDWvZkyga8Ama2hzhnn1Fw7RZp2768dZh4PiqVxprpL5bfK8KFRaaa654YL6Uiw",
  "key28": "Y18hGgZniWtK8v1SRUZM94GqEGHozoAowKsY4fjB5kSwQeSzz9GtFtTjgtKd3xsRJwjKbpZR8J9TvKyeVygqRr1",
  "key29": "3jbzp2q4GJ8vqZ6oaBm3F9CLjqucWLgcHshYCnqsTpnWBhiChptFiKvfutfgRzody5gsESZ8juvixFdwar5dfErH",
  "key30": "627JJusD89bkfcoq7GTUwq77zWfzeohNg8MuW12htsxSt8B5APvsBmkg5v6KZeqJjUYZwZuc2DhbXfLw2sWdKPNF",
  "key31": "EGSEde3emiqWEVBjeMjxTPjZZXn3KpUP5YXqSkEE8fjWUzy4fu8sU9SEPvppdVw8Ro1KwqTvosMSSiBsajvWj8N",
  "key32": "5JBboEUo5kroGD9bA1BH12py3VrpEFRmf8rRFGdA1c3yAEbfw5VT6hvDJSEUgRE6K8to9gaydqTeccHHVwtmsj4G",
  "key33": "3FxiHrKoXtgva1C4uwsYDZWgdCVYDtBRDNuN7X8QqQ3ZP9NKLeZtqnbwBW7r75mN1XB6stprjFUxuRwBhQecWZj2",
  "key34": "5DiD8fS6Q66rVfHRoQqSAJxeJrBXP5ZBH16YcxG3RUdBPYrAL6zMtU2biF1RKi2X8U6WL5JsTAg4vEfEuyW2yD1u",
  "key35": "5q92bDJfZPk1vLmSVoA1cbH9g52hUyLCoJ4VUnok9A8c5cGNqjUxwkVWvVjyvNgHCkn89Tx2cMcsu4oHSf3Sx3gW",
  "key36": "61ojy6ZdFuTGZrsEWAtHFQksstPjPV7nsgd5DybxuA9kJJi35aNcfJRJRcwiz7erWiHvKSuvwxZJ7ejLFdu7BEPL",
  "key37": "54MfJY3oowEYQ9d9XgcedWGtDFZnaDPRKmQh2UUkG6NwUAGTcnKaPmRh2Y6od2cRcVGiS3NhcNpsMessUSLmjkfB",
  "key38": "3nLWnk454UwrMfzL8kasuMAbQsargFKiyZbpBsmMYuNvjaAEeLMBDbB8t3QxPx8S32eJ9sXkvKtnUmWEArsBYjoS",
  "key39": "5aqSd68NtmKyBVU6JLzPifFFm3ELH61oxNfLrGKhmhmWJXPdojkPp5FhCoGD6JF66vfLbcDYQ7DLFuP4yxfmop7b",
  "key40": "26XQNbYubJax55aw1vtmveq1Bmz9BRru22HU22k5WaWk5FUwZwtziQ983tthL7PepV4Hbi2ahGcLdCPW58ntVPfS",
  "key41": "5XEkEtqGUMvA4Sp52Es5KKUdUTRV4yqNgkhurqxyX3gGufizTgvLa8BWyrSMJdsgLv7dYGgkwfxCHtwYni1LAVoJ",
  "key42": "4kMTkg15gqtwBKNQrGdf9vhiwmfNYf4RZyBmKGSJQ5KCSw4xZBacZhcLeh6F4sf1aSV9TEr4KPJhMRjj2s7y65Dv",
  "key43": "5AR5CC2rxVoyZfU7qw7CeCGygcMcD6jAk66BnUK4u3NKfcyzAFtThTikPdi46wQZ1Q7iNRomXjmLuA9oquKnKvHX",
  "key44": "ymVo5VuDTepVzmCQemTxBg82RTBwB3Arhqi7mPCGxFBoTrZ4UbzVqU9nV22WmbPdmDcQxyutp1wy7EpxPiaBrim",
  "key45": "HvgXAr1smLL1T8oPv1dbvsGiDBcdbtED6M3LGLCmzsw3dtwFdnx7pwUcWBTNFHxqarcFKcZJTJKKBN2D5eKBsBd",
  "key46": "3vqNfmnq8YVjp6piNPZqCkMF42vsTU6RjtQyNCeT1zNUEQ2cG18T1NgyeC2UT9AtQG6gTAy3zD4bNWwVXEpHxMK6",
  "key47": "3vUKV4wJC5EgS7nkFpTao6w3uWexShkVUnzKSNtXbjou46bgPUvBEjjVimV7AN9cMBZwt7CJgk6XduDTCFW2PeGB",
  "key48": "4jnThUYqyj3SAUyq5EkEwpP71j9S11hB3S32zXTZtRcDWYgVLFH9UNKWU3UTqrET6wq51DYUZ9k6iG54hcpaqTam"
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
