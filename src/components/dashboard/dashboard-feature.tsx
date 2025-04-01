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
    "4iCqddRB26eQPkVAJMESfepRmdCEPoUrPfdT54nVzwT9PPvN39ujTtCf6C5eeoGjAzmfouTn5PSMGCn45pf7Z2pV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jw5o9NtMggWWZ5egS55GkzZMWGz3ayXBMyLbsEAyzuZLK3YBsYUjuCcDTrmcbs4Sf8okxF5ytUj9UzZYury1kRs",
  "key1": "A15FiqPaiuddqq39YXSTt2YQVdgYmTKMpUTha7uY2AX66C8TTBa1nSLwEbgmZ44S9BRhaZdzASJMtBeRArbv3q6",
  "key2": "5RJGSQ6eb7p1bqxoEdHiGECsPXnTpK3KNQzuA5Czj2q448gjN8gCrM5U8r1XcGZMUVgQQo91UiGj5Liy2JBf6MPe",
  "key3": "3DqAjijax4B6p62G3TYntBiTyJs6u1mc9mREkbw8DCPFHwkr3W9FV12Th4q9UqoJr6rL6HhGNoCqLaoQxouNMHY1",
  "key4": "4sA2wUscj3Q3JXG2juPwjpzu5Pt2Pq98dfLP9KbPg6Fan2C8TqZACRK18qbdCgeSbZpGk4K6pdKGvrcydGzNMe48",
  "key5": "3sS5BZH6yN9cR3m681KAgTD7Fex8pKyfF2gy4BbR9bmodHkNQBkVS7mL48Z72TVSSQEUFgid48CF1AYv5ymNJBoj",
  "key6": "2vkbdfyhBJKC9c3s7AX3jXqcU6xDfddokgELgzgXPpz9EHgWvYefRG9PLyUpY8KhPFdMUYLGQ6vEKyfwCD9R5m4b",
  "key7": "3tkbyANQDnCNptzzATmSrKo5h1rhL1SqtB6eNAv1eahfoAvuszGYkTMsggZobKeP9dudkWVdX5p4K6G65epEComD",
  "key8": "3Mv1pmKeLN5cdnk9b9389wG5H4VydBrWZLh9mSzj8qj95xwjsJdvJVVHQ9KcrAwg7vJApeHD54f46Zq2XUzWRpk2",
  "key9": "3fjysPQ5AELQw5XxbAgRBF96X3ne4tD1JtgTDJaZJbUsXFeRfYheW4oMsx1g5FQy7awyoKX7EWd7FL2iaGZpEti",
  "key10": "2dmdcDy9hXq6vmxpLR7jd3gzo3ABA76XzKiYK4LbVVsmPoBuF24ns57X873JeAgbCLmjgHsqRfa7JE7JiGaYEBbC",
  "key11": "2snLkPJAiDe53baN6qj6yDczRm5pVeD5op813WjTgkK9yRdnPJ5JJhWLFZ36vVtFAMxQc29eMVzTUyKo22R7Q1Ed",
  "key12": "q6axPYWHs3BUhoiH11LFyArmzmpBpufQgZf7MmJCEsy8LuD1nHsDmPmLif4qArjKZ8sxYMiQP6z963k3PPhd7yS",
  "key13": "5yhjsrECBty5Gn67rkWXamfQkePEKfo7S9YHVY34sMQHmBcxg5EyUSw5aWj7bz5T73VqTixwUR56sYzw2f6eh3BF",
  "key14": "2rtYh2h5ZeWfiQvJEMdAx3VrWgzjX73JKh1TAMSUwPQkeB2zwhazUpiP2F8PRnfMGNzWsjFM1XECQTQg2BVUgMQQ",
  "key15": "FnpbiLUSf8RXjzBn9xj1tij1fMbBakkzSvTugfvJYnZNMqK7LnHxwSmGZsbxA5zt7P33VLVqpfnAbbyEtijVi3h",
  "key16": "5o6ykr9ee9Nrenm5WgPLD8XWoad5iVBrQe5715PrRqC9PAZui7DT87LvZM7H6cRju7F4CNa2HR4WsSPqHEGgRsWc",
  "key17": "D37oZLguSaAgWSZ3w9WyhEgQKBW6suHauyzgrVQ58eXGuLsuWWtNVZifWcj86CvvUusqBH1utodhCCxxwVELsPH",
  "key18": "Rt8BVh5h6TmfLcMCK7v4osY3q6hDrEdfL3Mt1q9iSu5rVZoAHB7Xd1Aza1dZWKioSDTSKpqGXNUDXbyitEpbBQh",
  "key19": "2nTnYY953NNoh9CX2LQXSaCuVdaRTxqDWJ1qMiKQVkDEurSL29PzYAmkcLYAPC1pUAC8jkzpCTtD7qmyEZD4yzFS",
  "key20": "3srCswv5PLUXra8nH97XM1s4Ehb4jyZn2kjWKALWLQgigv2VEtcha4QjeMWoLLgtbzyKTEjKyHoaNLERin5UAjdi",
  "key21": "3W4S4aySZ3jbpE3XhoEGhUja69FfjisMCQGZoJqXs4G38ERqPyH7gYenHBE8znCUXSCzSePrPHz6uxN7dvjB5xg4",
  "key22": "28cjiCtURHkMThsDPoHQmHgAEd9ahQTEKHptowFP4RvLmZW6CcZuuQG7CnSnCoNhECMbAH5nA6QoenUDpVUncpPR",
  "key23": "2T9NAZDMP1R2cvukxBpaSV9mrAYgjP2GSq8WJ5qNGqoFX43ToKyj6X384GKuv3hRpMxHXAMbE8MR3nGh3vVKa8c4",
  "key24": "5jiZk16GvpBq3uhUnCjE9qVx4WmZrLEggAyoDQDcJN6HZdNhNqSH6Kth7J38fHESiZcNp19ftqW9FLv2LTBqDsgo",
  "key25": "4CNQ7f6j2wr1BvFLh5ScXBrSDuQaLZXsG5qpsBXs4384TKxXnncWqCtgSTApm9XBoUdWcbxR9nxngRjaqGh1P8Lr",
  "key26": "5HYSn5cFV5eJogjUx8aN9qtzHdvWXiXoN8MMQBPZAEJM4APYL6vr4BPHaPAa7p4MdvbCQXBjmL3yN6dWVvG5rmas",
  "key27": "jrYfLs9YBHGGtMY3HCgCxtGp3ghMP7Kbc2VQzJyBjyUvFpGmf1ZAVSsr4Hn45L41PcXjtS27fRiXusV76En6MSC",
  "key28": "4RFxzg1UsE7souX3bdSuMLyw2rT7JRkH2zFrqsgPC83Wtand3ap1tcgEZhw5vYiHZwkjxdmUQZZDX8HbCHNdeoJi",
  "key29": "5BFrxrsT3gKCnudCKBNGFUnXskNNwqbUMftRVyFAR5UvWXBKWGsQPpCvSZmhDeT6p9SaJwWeeqXLutUWbmvGb1qP",
  "key30": "4t5ca9j6HMGnHECgG8CaGNw4za7ibeDDG4oqarxmp9vb22x8oTZGvmUEfL86hjEU2MGda8HKckyQe2PmDpJ9dWLN",
  "key31": "5rfyEdJt9pjngTsAnuuxDTQQV8mTjBQubvtv3ndGGUw9XYHNE6jtKohbBUTVsgwzYC78viByL8mx2zCU7mmcJ74K",
  "key32": "5tW6Dm9G6p4eysoSLKFd3tfCzziWDRkRyPWRMyB24j74oVyFDv2uBbH87Y8saimZRiqwcsjSwKR4Kr3S9T1bFJbc",
  "key33": "8XzbuGEr2gaeKTq7MeJ9fr5M7g65rbS1BzRa4VgiuXBDRWQ432msupLNdehjNEwvYmKAPrY7h5CLTxp7gSYUnss",
  "key34": "35JoK6bCukMEr8P4L1gjVfmxx1gfeT7eW497qcVR8VYNHyRxYGaXfN9VP1Wf3vUaPxfHmAwuHQ5cVA9xeJxLPTC6",
  "key35": "rmFb2zBwVGqsazdviRxu3SaYGb4fx8pt499ickM3mD6r1TDsHZDaSHTVV1j8BtLskmNDAQ2A2Gn3dvyLLNJSa4x",
  "key36": "3r8De2E6AcYyMfYPocsPWaTNwpSwwCRi3FDKopD1QitabXbSYaM6z3zHywkArePpvEoT2idEsBAKfhdvHadwqcaG",
  "key37": "2rvdx3ePLUn2BqsV6ggm4UEttXRF2tNgy7A8HgcTXBSQpQrfZhqjomUamcVRUrYEqYa3xeiNwdGPYizjqRxPufXF",
  "key38": "6KtUzCuHNqmQUdHc83Q3x1mfedhrnoKKBrtf4Tq6S88xFURpi5V2RAfkKM8vQ16LqmeT6Q6YpGYtHotgRfJzEwG",
  "key39": "PR8a1Wn5VG5cRAUTojqJfE73jxFK7e89w5nexTK6noHp44kcAnn8u65JuCBt5YEPeXdzFpvXP57cGQzxJKeHTC1",
  "key40": "g5pzoTeQrKVigPamAJ7wQhm7eNVtxkoEmew91ds4nk1XJ5xdpDTWTxHbWv194THdp9fh8zVAu5KfP2rH3ozSSUT",
  "key41": "3uYA5BvdzUMg8J9Pk5mNvFPAg56D1YKEZjPY4kYn3AgK74KEvmkyii3QQ73Nt7eKzmGfN2uBvCzQp4UPfys2V1L6",
  "key42": "4CT64Z9idm5US24CFjJ3mMfzBDYCbY6XAmQMUzoF9KnN7GcD8JGVZPUwQtQ8FF9M64VN9dUMAbPLXw8QVfEVsF3M",
  "key43": "4ZqNU9T12JhJEfhg4ydNL2tivuzQooTLyQ3zE64jpHf9pPXmLSYx2AQC2GEh5dnZoMEvfvWhHjfdmybcbfo3bDSY",
  "key44": "5mBARPxB7xNqedpJbDqKHmbRq44dfYc2LsBnmuq9K4aKfV2tQNj9aRJFe7HLWpghLtirrUqg8V29jN87dPeMoFiU",
  "key45": "3pn3dePFYHRUyjE7DKSdggANmmMJ3WeZTpL9jG3T3ib1deKSNpC8FjgytxD3QfMZZXsQuDfi3yTGEQhbiYdqDq1w"
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
