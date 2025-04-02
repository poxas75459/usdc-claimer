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
    "3jS6hgZq3byhsfWHTXDBXkCRXqrLpYUEUcDDWJn3Jc67h2GYouVivcgAWgRoHMwWLxmkZ3qNR7nQBuvBeaoPAiGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tC7LNaQ3AjwMbBsEajbCxQfYaSJFEWG1BcXCahVKpqo7995sRkqCtftuHcpHwid3Y4JZTkC1AebA14uhVoiH5d5",
  "key1": "4jFX14YgUTkWSgqP2cnhP3Hgd3Kx5vS1wXg4JdReXaEx6PWv5fmvUJjqajdnZ4RnC3tR3cPeJrS3Np1nPTw19Wv5",
  "key2": "5yE2cxHQt7ZNdTro1FZzsATkFvVfh72ppWsM6skgpo2LkHKZBXoXWfAmBhfTc2csLumtB8ZKxqZke8HZaSdSNNsL",
  "key3": "A9iLuHgn7UzetFAmf4HaBAMFFvcgmZTV8c169uCozeE2kg5upF3UivS51BxKjMLGqTvPbkUryDEk9UGkRrabKoo",
  "key4": "LJZd3iCDHGCXoJacLr2XocWBRVzst3kBRTDtgTu54pDLqT2cbrXtrqfza4P55cj2QbgHjEAdZmkLhTo2XuBWKTB",
  "key5": "WH1XEPV4CsNxhyCEA6zCDBtugjahdAYjronE1RFoV1mMphNa4NV2fGftWujCNBdYwoXnC8zTAtcHtpiaAQ8N1Z3",
  "key6": "2E17SQfzZrDFp6wuigU3NXLHKc932ieTT2rZgkgGCS2TPZD7354AnPE1HapLqyVowpToJ8uGTgr93o7MD6fUUQet",
  "key7": "3b7GdwCnPK8NZGD1GVQgJA7L6T4GfELyg3GVJ7nhiRwDEHVRMK5zWr6BwCn6VR2vgtT8EjwgB2YqEP54qapUtBM9",
  "key8": "4arL6qdjeeoCyutvb9H4fGHTmjpGBiEToeg9cWBzyhHSVVHrXY2hBhG8MWrkBPeyXMU1mgpiKDpeXkKMYyfgyu9v",
  "key9": "Zxp7w2mrGo8duwPJbxGxct7rEJMpN6vutmKLzbqgMs6JTHQ3U88Ptv2KNC7MDipwD3XcB9YstaffBK9Gj9mxoqu",
  "key10": "5WMPCLBb497fmRN2f3HjgKchqouHPNcxdVnqY6xUBtKDQfQ8kHRFBBYVktCaBP7H9h4WhHyXCmT1V68ZwP1ok7rw",
  "key11": "eWV7tUKmR9ZZBkAgjwpL2mL3Fc296spQWfwupwi6zgAueUcYxMqdd1m4XBCEPwmEaumnvdSr6tmWzvgRGCNw6G9",
  "key12": "4HW89qVeqf5CT2NmFHrLgAA6dojRDRMchEuYzoCnbzibr7LDDtVwsLwHRavKYYBZKJcQ8MRXRbA7D2ZLiF9UYoZ4",
  "key13": "4vVXM1Jvg3GYToxrfNXWsdKv1fCTnXRAryHJrADt7F8EPGpGdWfQ6JzYwRLrfW1iKkdxKDiUGNdwvuQJe4hxe5UN",
  "key14": "5RPtHjjxsCnnU3538bx5bpVSqgpPg3vtoZUHBSS6T54z1okT7UBwBSBAUWJANZFvWwV1TpFqL2DJrwQmY2QT4VLB",
  "key15": "2WzJwhK3HXHx7z4MibRaCXTdaBr194JDmQhd5ZJK9CVkQmQwiF7NRtEeYAQsYQBRDnAd1LBQ5W1dmdSLGTnybzeu",
  "key16": "5cdA6Zi2jK5rD4dkuK7ChryJHdTPXLdt6P3VH9aVQG88oHw7wCWGQB9RjFbMNeVZU1DDR7Kjfp7yxQiaVw6kCaUT",
  "key17": "5BAnozmB3kNGBtQKRNjB35WRcWAa4FX6xGA9wUsYweMgsDdW6Cdhovoh3f2u6rnCxB7Uo8TWqXDdngXUuciVeMxj",
  "key18": "5wo1u3k4S465ysVVAh4YWCwKtdWvFYZeAAunFJF6BK4g62ZjAageh6ihWcS84cm8fs2zwo5evF3xUnS6LRaDqgF5",
  "key19": "3uSvM5GcHEFZvqU9DY9p3Z8cMC4U14B5NWE86c9S9kwvdRaN1khiqAEkqv9bgx7eJkAd2EiXimKirducecj7vCUg",
  "key20": "3BaAkBjYohPYw6q5cFGD8YFm1bbJWHTZAjMeHhVnnDW4ShVsqDhEesoECg9zpknwqYhPhroEeeaSCggWEUbsrMQ3",
  "key21": "4ziTfYFjgHNTHENWVDRkGfJ6vsS8dcbPm2R6GEiXyDuoTm4ze58vTJMiM4F4N3jF7Lcrh5mogWvxt65WSYhCfqqw",
  "key22": "4HFfWjhKWurrX59PY3Q3vqkFAMHLeQLjY5GeuRLnsogUueZU7ikiY2Lw8Nh4XVC7SSLjCkgXkwNEoE4eiaSWdCyY",
  "key23": "5sEaFgBiU2Mk8rmhPq241N16eBWXkvg6zAPsXpY6jQp8ZTv8xA4arcg8vTPiZ9BjuasFk4BorF5w9JCjytFNa9ow",
  "key24": "2b24TW5z5QSeEtuHRxMwu3YakiX44XWDVCBsPMXE6HJCcrJw4Zi79Pe7LgpFEcAyNbddoZMaWHMJxtSmCbrqYPvc",
  "key25": "5yAFuUB4FQ8XWuvKZLSEZHTJdmHS3qY2EeZDD81KC3Kd7Zs19mr55tHxTSBpR1FmKa5UmHXx1yeMSFZ9rqBvD1VP",
  "key26": "2jrnQC1tYf9jr4ke8XMCvAUMEH1finLDYCt4YHuZR9TQEUQ8eMbuAhfnhJVwzA3b5yExG63wgvxw7xFLjdXgH9t",
  "key27": "4w27qQXN8REQFHSMryxajPY8fGN53i3SLbppTamLPQwRRP1FkZqK74YxPeqcFBAihQgn6xxKSWn8P7tV6bAfe22b",
  "key28": "3BmaiEYjgecVQ2JMdrUe7Z9pUtrXS525RyK1iGwn7LEeiANttf6YoSFNnC6rPJRS2wLVKDuxdNbR3hjTdnxTBZrv",
  "key29": "4j54koNdPXFifohBa7sKT1uKoJcANmwZYeuAAwzC6VH5Ui49QyMbYWbbDZJsxQ9SGEhRWrj9tSD3UfCychRpkP92",
  "key30": "4RgkJ8RDawoFNKZErtXPsaptzxCk86Uif2LbW9qZyer9Zh4ixoQLZR6T3Rod2SAc3Mnf7XmF54ZU2TLCzq5PcrgM",
  "key31": "4ctM6A7ZqAxN5WzhXcyfbtCX6aty6tqFmLnJvStAGjQKHf8VYPhZCFSUXJ9WofyqafPXrUsXcfyLhnKjaoK6PCkb",
  "key32": "49GCEkLCsf9jKkKkWLyLfVQijfZZntKQGoXQkYY6zEBhv4pJiUNReRWgG4QXBijVQeXGi7guPa1oRLM9GQAp7EcS",
  "key33": "66nHdKoDs7McXe2s5HAGM1a1eUBeY3M53xwGrW38L2XxonMwmPM6i8j1o95St1JCH5qVnwMHT6Hk8XLV1g2wg5h6",
  "key34": "3R5rMYaJkw1ruW1YbxyDzkJNBuFDNGy5dJUnQqxcnZdnBTXpKq6kytKr3zsZLJ2REpbgMQyio6sgvqtETQvPSkNq",
  "key35": "31EhDaqkeHWsFXbwcqX3HqJkJJi5wRxJGjqMDPu8XPghskkEj1icdujgSnAUajppxARq7tqj7yzmf4atenxpMEov",
  "key36": "5XmvrwMF7xgCKHVNME13Mp9AAyryXLRoLUxN86bqLsGVUJGKz2wyuPN9kokPuyYH9mVNYgj2cvqN85SeaLQEMudo",
  "key37": "3kWeLoNLEKrBBbKrYqbRHkjcP8kxyW4G3nutYxP2daAuU3Ch7NHUoGC89TJaRdPaF34ApyfQToAzFrtLdLFuK4qz",
  "key38": "4R51MwPtUKvQYpoLxYTFusD9XrBDea3834aAYZb4K8ZHA98sAWhnN1STw9S7DerbXvc7MgjJinYMnBgALxQtwo1M",
  "key39": "2rxSDJKZgALVibg7FcoYfnwUpQQESuLmLptTNzWikPMefFpqpA9mfwjRcXR6JFWjkdEEYHzsi7oaUWSPJJBdsa8B",
  "key40": "5vcumWGfmAQaxpHJ6Pb8dUJFp9BfvmrHJHSg8NEteDPGP93tpbxVNrDbYkH2pap7CeLiAzqzosnsbKcqB9EjdYAq"
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
