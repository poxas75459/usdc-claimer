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
    "EJNN9d46LEfcGnbpJUGA8UBYVbfVkoLy6qJZB8nPwmrbjf2GYr5WrAjMBq1tLZRzqhSLPy2aY6Esr2pranTe3rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7fevRkzjqumwco9W8e5Zq5sv7KyvD1fZ4f3U8qX57o5LDo3gneySszsFprabksYtQrr2MBZ9tRCS8R21VXwHFj",
  "key1": "wK3YTJxT6LwfB144Mxgi4owjRGoeEBnpGivxqonf4DXnf99uYqQ9PzQfo9anNTS1tMzNH7h1Hjz8xaSDkUPo2RW",
  "key2": "3q5m1syF5fwPBQXru2XfvJMBAs7eh6jQXQ4kYhAFV9XJtmyjgu8VJXW7EC4SVPVcmuMwi9e4aJfjcDqr8DrSCxfn",
  "key3": "4vFEPhoLcNkna4UMegJxFrrPvE7NkQ1nup89pX51h1aG9kkn78s6P2id79gSA2CbqDqDApWj4kk7tHFf7Fkmy6K6",
  "key4": "3qKQMAn7LRi5PMYN9o14QuS7svsi5vRrB2YChqZezSnZzC7r8w7LmmQEyos3LJwfgBNgzUbuYVqniWjEnfw8jYK6",
  "key5": "2gFhfpKH5q5Xy1mTEXEzdPtzFEMSgg9yw6ELqozhGWL3rrLfVWazGNyHBG4L5EyMn5WajG5GpSjpGGWvc1rbqroG",
  "key6": "2ZUndxwj976bkSxXdgB1RmQBQ24h7jSBVjhbRACnaoeCUd4pEnL797Ua6APEtgEUPjTLrHAfikU1P2uNim6GycJ9",
  "key7": "34a5aCdxUtFP2HGYWaDrjF3GmJNZ34PY6ELNq8Ho3VK11gph3oC4MJ7zHzwk13JY7zKmfKmsGBVaFdQdQ1ecWmVr",
  "key8": "5SLj47ghFKtwt66GNAhezym8nabZcLYQS4de1DnNZL7BSK26tiPW54h4sy7avUxe5Z76RUivWhM461R7BeC7Adjm",
  "key9": "4M1G9hQgvWEFHUZU9fdYHYiiwEoDxHpvbc25wCJkwjYAGbXd5CV8huo8xxcnzwhoHSSjwZa8phSpEPKn4k24fpbC",
  "key10": "4pdkZnci69vSJH5MJuLNL1W3GztsCEv6jXRjKTT4e9f4xTh8NKE8pxnKiqcMT3BKfo9NBENaM1xaiRmT6mhfT7Bh",
  "key11": "3KCuECCaRKGWvxiJ3ThZum3TEFWkGkDgzcSmgjvQB4xrmDZsVnkr6SYGrBKzaGCSFp2CRgGcLEn7mPVLhP1RBWav",
  "key12": "natGiMCqJLFGKJw7tybeVhet1jbaVukFD4KYz8aVdFS9Tzk5tTtkdL5paMqHVSaofYtiEZndfezJQEDRtFjsAR7",
  "key13": "4HFLH8ssSwDPK8DUGFBQCVn7uWny56pHJ8ogJLCJh4BUxgumRCfCqq7GrWkvzzEvDgVd2iLCPG5Sn6vSUBGNyPeB",
  "key14": "HRRi15hQeuse4TArqmesAXFPpS5oY59D63hk8cvvv73hsmNNcBHfM6uECBR1bVosB4z4mUmQVRi881K3BDDca4G",
  "key15": "2s1gbUqESWXN82k8UUbtsfjm7jfnBQacKSGTzt8GYTduYRPL6G7cPJKEA8c524uDpiCEgF9R5kcDnidCmZ5sgx8f",
  "key16": "wefAPai8w2WtbGGrztwzcayz95c6Y2ZwHDXw7MTRgus28dhE2B9SAJj64ye28h2oPpayYKxQGdDd7Qg72SFyUpP",
  "key17": "3ZSW92mnGheBDXpifZjGPNNvoHF7y8G19dhVNaPL4iEzZ1Wga1oWMY5TQHKtMaxYFApvnWkBLWqspk4NYnmVmobb",
  "key18": "dxGffSwceJ686SXfYm465u8zj15zYbZUY7BwYuZJ6nomcKxyrGXCiDdcL8F8osioCknWwYzKCQsWNQ4cD2Z88BC",
  "key19": "5wEC2JiXxqgynWM5VburH5oFXCqNyR3NxxrfsusU9J68g8tSyHoYhBhYpWqQEKansZb1LmUmM9j7vSCmDgYjMapV",
  "key20": "4yvvuWGmRcQnnUP6gt9HVMBH2Uv4UKV9e1hEECSbAhDvCfyYu3TJak8tLTxkMDGbpbmpEo8UDBzJhdNXtRBE3cqZ",
  "key21": "2ZSWtf9V42rhnxhDsEXF9xJ6YRy4aRo3C64YdLYejo6muW7PCSiA8bJmKU8ZyuU5Wt4WQJreko2kJc3ag25NCZUS",
  "key22": "4449ezQgMEAo7iXgad36Ro7GqQBgw6RpPepUSztHqhba4Vv7RPoBQCJ7TLPJFZB3V6hsoAHzEiNgJD3S4ETuzH45",
  "key23": "67nCoDmXzzB3RK6waTqSVkuxbzwEREQNbQPgVBCdi2zx9RpBGaP1tsKGBZWY2AuyKz7Fe7BBktNoA7TBqsFdG75H",
  "key24": "35Z2hUhGKtiMFh8JoepfFgRcZUvY3fPz9PTdYkHwWuwp8fgdcGhuTXsmUSgghLqsSQsAcLRhzyZAuq4n7hyYyT46",
  "key25": "2mFnCAURrHDc5tB28gR8BraGqQwzVzQWsLiqR7odrdukV5816ANwkCfyWXvzg2faTdXtwPuF8iWnDgTj5cDF312X",
  "key26": "2fGkCAWGrWct5jgxqak3TTYXsUM4VXg1h2dTESWQESDosoQam7QSQ2xhSZM3bJ35Ta9pgdrP5sunDSViVERVZRF2",
  "key27": "2rawdCqUbAawsdH6QU8zrnJAtz7JnkcSG4o9H6Mv7u4so52cymrS6Gg5PV1Gjop5vq7uqzrxwvydWasYCzwt9cu6",
  "key28": "LRNRsm31VRYTc6hXbX46VUuxV2ePusLtXciK5fUmFzjWf4bko8Jb6GMef6GaUBRXNGz4yTcruVzgn9NsBEZ3wqd",
  "key29": "3meiz41M4k6mEbo6pbPBisG2jgYfZdP6cMFz9VNiUQcLdLmeZfmmZTUfofWZARiTsd5jXxdPRHCqaLVrPyLRu8Ks",
  "key30": "LbGLJLPP8ePV4BQiZTYNuPdnZ7ovymm7i2WvhaB6PJ4yziqPVt46RMYaQruB4ffSNXwe6sdzQhiYmf2XUuh8Sxu",
  "key31": "3GovZ5NdTjom82J9iAnQiYAUabcLGScAdayyRrziBa4pKjciwcAPFHDtEN97319vs3pbJPCYWP5NrbMtRqt4y92K",
  "key32": "463w8wa53vVu7BG3HmQzaxmY2rRkkgrWVGCoXCx1W8jtmVLyWnHM8kW8Xypyj5oYpLa99FfhFv2w7KK4WAckBPRJ",
  "key33": "5t7gnUUUrM98DRPFgWCuYqULx5fBvD2NqhJtKGBN1zpGdB6Ron1tMeweVSmqQEoi6LqN9o8AEBJC4RBc3mJ1ov5z",
  "key34": "5tdiUsmXThGLBdHJS9YuEXw2ssKknLjntojGsHNfYrdojmJQMSFFNGEVMf9VujVni6cgPEFU3eaTDjQiy3LgiYhn",
  "key35": "2qV8yhxd3u3eHkwXeBk3uQSNxS316ex21d4tMagcKxurvJ22ci2RZboKcH8pTmLJAj4zn2AFZPuMFJJYVwtrVoLt",
  "key36": "31wnkQhw9pkFPhrPZg1qxiXQyATiG6737xNC9hyncE6NZiUUdWvdRtWxFwGSp5H3tTduppxHJH955YnFpfbdX7Rz",
  "key37": "YoZBDyDt5qKro3FmuszFZSMkk2SUfFYX8zedx714arGHJgsRPWef9cAVAGEpyX5ecrb2gqo2qiofTGfiiUcrXNR",
  "key38": "2zuBEvjBW1bckCvPdsa4A5W8Awuud7CMstN2ftdjeNj74kFzmYdXEpoQMbBRDfK7KUU7QqC85Px8Ht5jaHZtws67",
  "key39": "3Seh8MtQpzjzJ2o7R6XNFrxs1D5AmEandhtdARCRBhPMAVUbi7pY5RCNzjPX1ccVRiVUXjhyT5giF9sAWf2iHoPf",
  "key40": "5dWnmT7QznuB2nzrnjo9H5mRSfsy8oqwZvxaov7qnVvkPQchY5aeBY9djvac1kY7U3wR1YGNEhKFWZVBADJ2hWvb",
  "key41": "2yj4wK6NyN6nZ3difErUsC9P3aCRHwvKtQhvNhtgJw7KnmtkzzqBdT2x4rEs8k8acXBSSpATHuUmRmK48sCg9Hj5",
  "key42": "22UfWu2CL3X7MtAVuz38cP2PcGbazXkznmzQfunzVTi8VKjvyXqmfYpDjxsHG9qpntu16wf9yNCdi8AjPspNxLid",
  "key43": "63z9DJqDu4Gx6jo5GACuJ1EwgoLCocBQ2RcHzP5hXDb736aYvjdg5SWfLFdq3tqnm1kbt9Asg5wR1CUtrkERzdjz",
  "key44": "3AQZcy6wYM9XvuptEvTfhceX4vr6akUZH9xLLiR4LPAfSRj68gcFW4Mv6cM46VjrPGLY1uBeS53MYz1r3vUK1hea",
  "key45": "2KUcGsCQoQ2AwrrjGpJ3ybsPr7bchw2k9qyWR2wCse6LYMmfcBxjniZnJdir3MFz3hYHZ9UuvVSBto1XfFGEbbx9"
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
