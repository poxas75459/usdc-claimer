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
    "49PDgofad9a16JGoC9LQrUfzwkQyLmMqLTmp7Y6SCrmXEKxZxPT6UKbKScQwx4A2Q7NQCKP2QVSA6Z51R6L1twTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5USRyfbiRc89VTktqzcA3YDzdUgJdGL6AnmUQzKkv1kZGcD3Fd96BQc8udqVPjp57EvYE2PD9n9N4BMMk17i6ebs",
  "key1": "56yUEc1UgRhgt1DQDyg7z3gtauqMpyKe3uoBHU1G9Sn2YB47gCSVN5QLUt6ptxaqopD1XV3dp5HbS7sJvrZTNifo",
  "key2": "593d4jowjBY7cV9MBhgagg36WqMJxTWFjzperim4GUHdspbgThAYftw1SaCyTXgCpY292iPQ6L4bdJZneo3hDdwT",
  "key3": "3cL94hUuvUBJCZo4MJ6gCE4B9jDHvhJVLwuUqYxi6okXS6JC7qGRnTL2HXCc9AotSEnoscUULisdScm8Q7vUPt44",
  "key4": "49Bsugfhdw9gVcSor1JnwHP6GNmud6BwKGnakgSdV5YXz6iYkj4fQmqSJRxfsQfpBafBaStEyGDg28ArntrJ7Myu",
  "key5": "JE8DupELfXQ454FZSvZMHUK2wB4BX9pvQamJYDbTNMkLWkjF8f7PPYbF5cpZVid6BjNg9vcBBBj5qaTwHh9dmi9",
  "key6": "hLWb4RSBxkZGEk9dYHWZ4bT8NPD8GjJaYS87sMjYMswpFTSt6MceN4EwaFacW6hRXuYKbn2ubMjnAPPNvBWRg2H",
  "key7": "4ypcTqCRJ7NmVUEStg9XEVhCsoyhwzhaTkrJgwrmL3DpB1ikd4iZMLbLbAWeLWBmZgC4ULxjkDJ1rgyTFc4WWt21",
  "key8": "2erLrm87ywfZcFL1P4JQregA1ALwYy5WvLdqMyJnxBSBcJ4AcJ5uMsNBFXbR9ZZxdBX7DA7a1h6UGM6uuBJM7wDt",
  "key9": "7sbsByAWahuFe9uSzgZdZx1FPqTjymCS1onXAaM5V3PZjM3mFBM26rdrHpNcBBWiuBxZiGQ6XsM5CzPnRHMxTPK",
  "key10": "5iv7a3wHekfScBPbt9KoDn7AHjFxx3EA3Czq2KHgEYcbPHzKZX9rHS64MajtMxKGFa8GhMrjnB8uNAiwgLr85LNT",
  "key11": "2HwXDnvjop41EFDYPCvyqqGq1RFUqDLLFaFmZCTYCbY268wwVBfWFsrDBB7JqQq9SD92tiTKfwc2EGbkYgDLHMJK",
  "key12": "4dP9ghh8h6d6msqY9Qaz7ohiyaGFoAkMwra2WqExHAPEd5hpq4JryCrLtFWUSUaNMGH9gptzbkk4kWVe7SjEXvRi",
  "key13": "539XSQo4oh2wjEQnetreoZFUEFuLhxXBdkgDJ3m7wJJdcGnYtWkUVnv5B8DmwSRqHxu3Ntyb22k6V3uEwVGVVYqX",
  "key14": "2Czvxq4oiGgT3xVrtFnpwPnfAALWE2ZqifgnKMi4XbUDX9ZBVgt2pQ6fK1bX2oQedvQmDze1B2FmcsHhvS7a1QNL",
  "key15": "4UnwwkZS9TdosFpGyvUR1RpZPwJhoN8xT37fPf7QaTZ8Dawt3naPEkhZsGmkaG1HCPXBuTz6FP6Z9b61veoTFKtK",
  "key16": "3fgp2H8CUWRPaz56ySVV31FVWSdqD3UB7V4Lr9G4fHtmoJXPyEnSvwGX4uFPMTfmx89hgKYqDXmYXyPVd8o4VGbQ",
  "key17": "5MzbNGeMVfU1TyaVcL3AG6MQjYDRP3q2PUaQyQKGjnZ2xX4yifgrPATGeokQW4JUk3jtNWg63rg3PupeMZNG4DV1",
  "key18": "3sfuo6G2VXJq4iAMEYZ7NbMi2GBXLELgZg4SaY7GmNifKv5RCuGb2BRsqnuRuKvUVuL3RKBhCjwtHqUQqPJWJvuR",
  "key19": "3dAUmjYmjt6qkLRv5uEvEB8yxnMrUmnyUGyKsru4N3rqSypxEN4Mpj4BxhLuzYhLZBXC83voLNMj11uiiopfKbBZ",
  "key20": "4kNSW3GimVUuCjs1QbiWTA1v9mWLNwVmr2UTRbNjDekakMpZzAqBgwW2JKUo83fGwktdKvPibtT9UdLYb12hjVpr",
  "key21": "RNdMPd2qF2wSgm8wQyejamKCyY4HynKvgErNkiUDGdseSZG8brUrLiMgjUDW5kX514YGbUdaKMdPZ682EmwWZiD",
  "key22": "YPCEhvmhdofJ73nDAJLYGwFfDQrrVqZm8Snmkrqd7m4dPKxWR1aaCBPBtW7MbAviFC5gDT3qNpFKMaoTA1auUSc",
  "key23": "2r3nafzfTeBCpX87N9Wm5mttqyMkwJhmdD275JppTLZHVFR6cFYhZKMjaxvvqzndi3QZd3SXQzPnsnMHVC3kxh9u",
  "key24": "4HDYcUtPaRGUwSP6DrJkqtQ3pt4AURdNN4JQbGBN45ffFRdVQAB9xLUbCKTud3tTvaztAHVWXgjXYpe36snMx6Ao",
  "key25": "49Lmkm2jGLvnrDJbMcJgUwv7nQ2ExmaEbPGh6WXWjxXy11vGbjkn7yisJTBjQp7WvEsDwNWH6ZckjGYN19VWxkct",
  "key26": "2CC6F1caBmdmAe3DjLvoGNZUXjq1U2pYQvKF1ThTsuaGK7estov5xhjaUPdS1XrjBKPA5g3NwusegaDeKrr4b8BR",
  "key27": "35aDovzu5HcQS7VVfkCSmEjRjeFV8LTKmdUm38FdYhWPqRtJvssUitdrDRQma9zTziWY3zYAzR7QQMYyG161yiAU",
  "key28": "2PyXJvRBvcLXK7wEh1MFdpoY3H4pggPsvVsGPDDktV8XZff6p6Um3Wc6JLjVN8aeUu6ks4A1oW9nXAPMUd286cA7",
  "key29": "bVTMr7FHjJqWRmA2PuhHJEKgsv6QufQvj6stqQvB3zmm8UzsbMHxLgTw5R1S1BX4qEhbkithUDiyvqKaJ72v5YM",
  "key30": "4HwMCa6eDSnXtDt9NpNHychjB6udz8Ra1hgGUrfcWJGLRtbtrtVsHDDPDiYsK9EEfhFT8LqgMSLaeEr3zERjNhh7",
  "key31": "5p1ePgmjdeLgAZS3q2YAVsVMiBkQSwtGPg5K3p2kdn3bq18PQZXtorPj1qkMXZe9igTmYSk2MKG5CUhLjjFQHRrj",
  "key32": "4dT7WeJgbLSt2hD3y4ztr6xW1RahZSme7pqVBz7ZxbGVJrQT1tXTU1Xv7i4to3GU2v7yqXxXnMVMwXTuVKvLs1x7",
  "key33": "1HVF4WG75r2eC3bQEJydB1SSytkDuAPdhsuCt6iWL955SrzEDjbQvyNzp12UkTSDv6EtpvyBf68Cv3pykKYNF1K",
  "key34": "5MeWazvRmbV2yhoDpq65ukEFR976aTX3VgQd1Hkj5EbJUTgqQLnGFmVUk2xfVABE71fCvDSqU3RVXVSczW3Cjp6B",
  "key35": "5u5aqqKt4CPJet3SsRAkVXNBR4z9yKmgvQoTf63B4ck5BaABvwSyzr2YostqG9G2aQUGQRWbYY5n3WL8Jfrdrqkt",
  "key36": "42izEEC1mPe2Rj62yMMuQgZQPZSUczdba33K2vNbXo1tGM4ptDHxdbGQJsHdXQsdJL6BfNCyWYgSyTtuFhTX3fFP",
  "key37": "5nH4pijep4135DtiCMFEC2YG86QhuNSygoMPZsReFRQia19rQZ2DrA515DE8wyWd9eBC96ELXLAtcBufP1snxNaH",
  "key38": "4jwGf9uDN2BARQeggYTrop9J7J2w6EwF6tq2oqhfXNYfwbftDeSKh6T37iEjCrQkuemCfAG4JpfLYXSkkwwH5U9Q",
  "key39": "KBqhHufWTUNXEox8cMdLZmjt7d6Mbg8JMmQwqtnq5zSshNcWG9477BUZo7kQiK4cPMRykP1smaQXktuTUt9S3FF",
  "key40": "2bhMyRtR9ZsdApSHsjUHJFyJEiD5b2jRYPuPNN8W7v4b7AzYW4E8STyFFwZNsbHkcpi91DCRwv14xakbN8EAgCxR",
  "key41": "5bpKunnQ2GSxzqMSF1WWTkzsnkain6bYukVCj5xTBwuDMC4BynWQ5vjmiXNnCsY4AYnvFwd3SXu7vw8Li25jnPAB",
  "key42": "5VGmqBKZFvL66EzjiLYVy8x5vYJpsYMC5ubcEtBxZ3K5YAhkmVseG6d5TwVjMB2FGcAM98DY4JsaaVbSAA8qbKVe",
  "key43": "1q1YZUqGudi8ojPxCBbogPfF9cBrhqb5kdmKYsE2tb8t7G9FM7vi8xsEEeJwv4rHpeaF6FMA2ezX1xJfLwCUrdj",
  "key44": "5ADHeEuTn4g8gDvCYFdycB8EkfZFTVBaaGJ5rgbo2GfHybnmHKQw7ZLdpjK84TFteEmgvyvgNqigizmYqWpzvHLT",
  "key45": "4TrVWMp1k8bC7HqDmQ22c7TWXbwhxHs9DLQjQEL5xwH2Z4CBmuxe2tbtU1d8SRPm1Gv2KW3ko32XUwiNo5he7o6a",
  "key46": "3x5AtE87qFMHK8hKERNxLDjG1vkY5wW3qSwq2TzZBcywkQC4LpXUfwm6t4Q5eYsJcEj3vm7VpQuMgf2gzPzFzpFH",
  "key47": "76wcwsZrLCBrKsHj8nWHicSxBghpQPjPdLy2tNdSQpXw4zuX8BXRwHhqujeUrtei5VKKZVz6JASRgwPvAp3Kt6F"
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
