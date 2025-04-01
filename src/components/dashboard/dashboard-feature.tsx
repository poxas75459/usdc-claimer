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
    "3BV1mQnnsvdVTJZCgkaTGUNJNTFZfHzijMLDZiGe86XzFifwHSy8AYivpPuYLY9EVdjQzTeajjEd4vqPzwaodSVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3NKPuvqV1c8zRsFGiE2h4KyxCs9aQTmycHruFpbSe6N8DvZynBsg2sXSQ8itvgxGmjnxw2mtP13n4dRQrJALBx",
  "key1": "WGP7bs6H14PbzFgot2rCpoJLMovTSR1vWsMMryyqj8xdqscXR4nfkrWeBLDR2RBW86pAmffKYyZDYi7E9aLv2Cc",
  "key2": "EtSm5ySzqRGvm7my5FKRpqpRQMbrXnEMRHyNmfcw22ukfA5JQ6HQj358iRmw8THz72Z4Vg1o9GV67g5rbC4SFbU",
  "key3": "3cQ73mjgosgso3fLjjXZjd9X5NxcKVS6UcZnHeyJy5zGE2UbpeG7HEThMdsHd8sNP1bHZ5HM4Ht6CMYEwzz3ubzX",
  "key4": "4dwR1Vo33n3fRREBQoLAbpAPq4L89riA67aYhUgGtmcG4kaP9KFepRT3VAyQSBdrPaaGYVQTseLsNyxWUjavP86R",
  "key5": "2JNi9CU8CCNGAtHvAt74h4NbT4C4s5ErELyNKsGTkK9h8xLX9D52B3qArePBiSBtmjNxZC36XM6wVw9LYGTWPxJu",
  "key6": "5G8hoAXGmPBugbJ3FpT3E1Wo7qtdYMksReqgagUhwMx5s29NAdK3akxsYGChRgXyMVD9kyQznKBCoDmmPaPvVGsG",
  "key7": "3Jgc83FzsfgpZzLomo31BqSgCv8HxZZrUQYWquKxe9msNfR2LyThrDihufVYCWN3XtQ74TUATWpnQmiM7kL8qf6S",
  "key8": "2oJ7KZDndYHKTWB9j8UNoNtyHg1eLMmcf1JJBvmra7H5cYSoirkhNhf6i7D2ZNsPPJ9U5shiPZnCd1gvHE454m4k",
  "key9": "4Rf5maNDM6kLkLBMMozK2ECpooAqwd1RZ98PrZ49utGAUBea1cDjSxRduu5m4DQCzxqjrfxvc6dwWzgUEnVotyAZ",
  "key10": "TKtkjtUEi3AepNJx69t2nw9k3AptPtvZpptbQKUwQC8hRihVwg7x1YroZeBmiHZe5ABoFHG1ffp3nyCAbovX1wb",
  "key11": "9wXNzQg6K3bJRjZs2hz4PtCQ1CBQ3ut9cSv2kbGfdkRW9PsYR1oZpggJ9RFuVUxKFS5EZDYBWGxKJdY8o6az7Pf",
  "key12": "636XyhSyWCvCGhKp1CfdMsfKdEsgAhryPtZQ7sHFPUcPiu9vPfBR7b3peaZJUh2FWjpmCRaLJkAbiWj4vNSr92y",
  "key13": "2TchBSPR1GJTHTECvbiPgJaBWLryXj3pZX1Y78gt7yP3UNtq6mqtHLp6ebaddqBcyP4UoYF3Z7ciW348dEz2X29Z",
  "key14": "2NnipdcYiu7uJkVddtCzgDecm3t2B8ULSQs6365Q1omL5xoDYZuYFrou9SkHzpARUTpWQDG1L3xogNXMyMWvLiGQ",
  "key15": "5JVKXFpJ5toAZ7EQYUhM3CHaiAyDagJGvecyTUY3CJWjHJqSBrJTTFgdxiSFaZ6Akrkis5t1wTao76bYFr6NZjfr",
  "key16": "57RExcSNXUXRX9ggcTYosSis1A8tmMcuwGUCHUA39mB8EYtQoh6NHcbHocerTmEQ8gZCV1pW1aYL9TeBRwaSJPWB",
  "key17": "3KJ11a8QXziF725mTJnaEwxJ77TkQcWiFMWnq8S2vuSJYC6VjrNWkEyYbFTPiLwXLHYypGUQvZKLaS5BJJp59FNh",
  "key18": "4iP6CWPdLX5wd8vzMYNZ1ytpmYv5vomB8pcEvyinjvkEN4i3KdZx6YXrawbmdi3streehCVE5HvPkwiibDgAbT1H",
  "key19": "3T2tEskPUEMkp39mC31Qy8MJYfqeFJngoCSAJzKvtyhCKs4scV1GLMvBbpLzeJp4eHPVHLp3PxqVcPK4FQzNXUM9",
  "key20": "662rUnNrra9GqUHqqknGF3gN7Rcwm3TVq881Fmw6PgsHH4JeENFm1ESEiFutnsHMBH6avTNHFMa2CqGbfetYara1",
  "key21": "2wkVU2RzDTRcS9NLRb5XbLrjVTq3GCREWKaGvnha1wA3JsVrgqXfRVEv1z8XStVPF3ZpYnR87iDTwCtrTfbfJWvR",
  "key22": "5ic3Vdgy6BhnhcfdWikctdUj6eeDBgPTuyLfN8gb6eip3AkeZHFh2PrY6Do98ih6rTw9GqCLktehe6qYouYeBUyp",
  "key23": "51bXuPxFLkpQRgM2f3di8mTbNeLCbUAhiPp7hwo4Gb2QE6qcmJVdffN3E2jPTJv13zu8owEq2Rb9HpktX2N9NLh9",
  "key24": "2qMdBG5EhsDXZd9Da8y9d4u964YrJ1pkkyxTUAE1tbAJpUK6DNezm5e74obym741tbZCpyVShPiG8MfqHLcxHWK6",
  "key25": "4Z6g2WT5xttDj95zWcCV91TM2ZYkereaf5Ytmpi8gcDc5u6btWeyhfR1ZSEVabCenvFVxN6ko1pykfbfwc6pFkAP",
  "key26": "1BXHGTKzVkN8pqNWmF2uHSrzniqc59mca5Cno8gTHWEW1KzcLwDvreAGVdY4WuJnJzAjVrh11AW4hD5QvAKs3wT",
  "key27": "64n1WXMJWdVLwyQWsgEBEVw7WPiTWgKCPo9HqQB3gH3XKvGQenWETEc5zG7rQPwJti4goMRrzwsYEoA6QEkPquU4",
  "key28": "afyVXvnecM6GXvHpgttT2bGXb9BajwAaaEAF9gh5HmJXbRQQRkDKT6TafFSCPa9dNbdvr3huirifu27w9A7JfuB",
  "key29": "3N3XA58BjETbxhTjbyvRf1MLjEYdA2Jbq2MGiyQKcUWpKetVBFx116YzRbzMSa1r5fJehNTMGkLYu6a1eVB4Jpsp",
  "key30": "5jBHVrrxi4Jh6Ldpb7B5mTVNsWocHQHWowNZbkGZyLZjPXQCEnymLdfVjJSzgfC1cyhq6pHoQFH2brSX66n1n49w",
  "key31": "4zUrG6fAkDgSWrVUHxsfq4CgbnVTL2WcmGckegquVDcxrK6Wn6aE3vGwEH3icxn5UQTvU8w9SyxD4jJziaw4PbEg",
  "key32": "5o8pSRTzVYCpP2S39S5hyv5biqDmAWQiZJ4SvGCK2KYbBjrcw1aZkaSAbRzyEvkZvftLCXr6TuYetN9XgtBByG6n",
  "key33": "445eN8a5W9FYgDrhVn6JaNsQncfuEb9osV8rXAfinPH1DVnvhsNpZQvUnSiWEEAUMjFcsHaVWg4aGFf2AKAmEiMr",
  "key34": "4UG8gMFVNebCFY2Pj8W5tUzvtBixZkgZvTDwTohvEHfQb6nZvPcTb93typnGgSSnaZcqZejSRgmULbJfJQ2T5d4D",
  "key35": "3iUE6vhywew391Kz6HT8rCpgeLFSWbBtwHF5S13kiVQudHQf2wfbMaJPvjHNauLGdyY2jcWQkdzWafe6NssTyRDW",
  "key36": "5ECcW8Et1yDzsEcwhr5EyRxxBp8mhA3tbr69emd312f7BrbYCvdkaSVB2RnvNEjuN1wA7ve4vkGDaVYB46qHHRyG",
  "key37": "4WMkoYuPAbFjQCY2gj3W7pKffxLmaGRDvnpdY5FmZ8mzSFrp1KVX748sjuyLvVePwQs165DYncKwqfo7524Lk21U",
  "key38": "5umc4XfJ8SXqbqMmvfyMPJWY9juoUwQXLUSu36z7FAmNFzdfkskfByf1Mk4axJ9iujcoYNtEBEVWobjX8DcfwrFA",
  "key39": "5UyAmebdAZVmVMEH39fJM8U3Cv9tNTkE9LxsGnrLWe9HYVnf7N6YTM4KMNsTxzgTNs2LnyjvkBEm5cxFhJifuk2j",
  "key40": "3gCghQwfgB5NbrwFHGFfL6prWU1ieMC7Yu6gojrv3rjPgDQabF2ghVwJwkJ3yNkP1L9eZvLiehsbT75cdMP2XxNp"
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
