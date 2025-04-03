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
    "4qxk8ZGttDDoru2rCbYUKg5tSxWzNwskHCuGRZus7fwg6mKmasSAnwDvdynLUbhPWzGUkTJhKBRs9XgpZTqKPfas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQf7VCVLC2b5RENevnLNkGRqj32xTZm31CHjGQjtQPCX5WELsnaiuZ3UAvNBh2g3Qd2zVZRz29VFAYmVGXn6mRi",
  "key1": "5Vv3s5itBvwYBM4D7mveWnipS6d5CpEPtHicE3fr4CxJqBvCkMJNJbHbo838jqu4oqapcigvna3oh1WsMVeGmqTW",
  "key2": "61G6ws6UGJUy8rGHaapoW9t6vWShbJqnVB7yvNotyBbEnciynL18vgVCGJYwneDQ6wARgH6EiAJz5moS6pwkUYvo",
  "key3": "56TykHAKoQTVrEQZ626ub1GbdN4Htt7HxwYzFP9Gxo82Z48Zkg2nz2uaYaejK22WV32zbeZeEbGekgLfTAY7UsBs",
  "key4": "NHVweqp99kPweBbaPXt75XvjfjKkL948oopmz1ogeLTSK3v8ATP33uHG9iFdqhAxAh5WHNHJ1amuiL9TmGYnseA",
  "key5": "c1YU4uEyNANrsZpcr4u1NGdt13QkEmFhtyvGcetqr9NpC18buygpyTjg5oj91kA3QYjNDwQ1fmkYwTjBF4dhfHo",
  "key6": "2252bQ2B5nDPtyzQY4Zvsmzwpua7XNzKXw5S4C5DZgiybpYkuv3KzMZg7ipXnHhoYXxCm9SvFNByqcU8h4B2Jm9F",
  "key7": "2ycXxwi7oT8QzaEtu1itK2e51c3XQUiVWMp7meKFQ6RDMKsLwx2zF5CkshzBiKwK542vtXwufxFE39CSHx6CRRXb",
  "key8": "2B1iCJp7sMb6KVtH61uLZx9XfRMKbq1BU3DzD7wRwB7iJE4NcyPUh6iHdhThuhRGdXZUW6PfRgDR7qwtTntpBaf6",
  "key9": "2tRNvLrKr22Gp9x56gATnE19SU6X1RrDesP34jjvEGSivm1gvQkPTPqHutL8uBkS9M9NJ8Tv8JVKQ6pR7QRV3Hwn",
  "key10": "4TCAtWL9TeY824R7t4nxeqcSUtqFYfaSppjoJfYvtFefBZ7DyNTB5NoNVV6JXUKBi2ZbBY9vLHeTXDxG38vdFGPV",
  "key11": "3cK6L2hdGDb7hKrmWiuTAD7W89SAmyb7RGz6js9DNWD8D8PSm46Rbj72RYuuMcHN7pCCHiPhk5eGhdrcqj36JRKK",
  "key12": "3ZYMMoEF7NBDF8CYWTi3QVQFh95houeFAUKi3xm9noC6RRuJMU9Ys7eGhSmJCutgpiYWV4Zc3W9snoBWb1zm62Fm",
  "key13": "4ugGnjb3iucmv14qLLdj8XzWAboiZ8Evs4yXyRrcsHAM4YNesS5d9jotSJhiEuGJAzcrEi31McdHWGUuy8fXoGxF",
  "key14": "33ePdVxDk2Q4DTrznv2MCcVCduvzahTcUaYrzyHMXzGYZTQxi6YwKxyrphji2xubCpLAR8oocBLLrFHb9omnHqa5",
  "key15": "SYz64nFZD3KKbKkoPYxCsqgb1hrUqngCQkybM2hFdDMSRiuyi7TeWMo2RKu1hFY6ZzgWmJwdpdt8UyzKKe5SBsB",
  "key16": "5byFUxTaxyGT61rmKfQQfUruNZwkGQWxUrxCEf2jyuNZHcwqxMzNj5SkHvqiPzftGbG1yyfV6AyXdKzNm15cb1Lu",
  "key17": "4cihPZfJnUoR4Ug1Z4u8fUs8cmhwjBAPkM6iuVfYQmU9LabdPWMQqukjoA5iKZhKixWV1v1Nt35BNpYCYkr156Su",
  "key18": "5XjwPRhJGx4LSCcvVX4cy9ubeGVyNMeJdKHdgRimc1153knBdGerYqngfYpRgNPq9kZYQSS9kXReaceKUwonWGLD",
  "key19": "5E6gnyV6732pvpqcYu2fHzDy47zhkUv1SGy5gUdbELuX6yC33hPD2Zr7bXHiyJcvFH7ZPDSkMp31eiuehebBYfde",
  "key20": "4W1tY84fyChnQ7MNfF9dukhdyb4SEVihEL22mFbRnR3jAzZH3hSjY3xtZ4cy52nJQQaeqPXV8ndvNiVTSkQoe2Q8",
  "key21": "4CNVECVkLhewif1HuAWvzW49bT5X7jif2BqRrX8MRPJWDs8pWcYThGGdpcA3ww8iUTpVnnDCJubhuhwzwQn6WJwB",
  "key22": "4n9PMC6kDR6CRGzXNggdpGDQNNUdryny2Vy7hJ6js4MgTgc54JGrYvTtsBWh8YyvzhEoQA25wvb5f4SQqrQwoGT3",
  "key23": "3ahMM5Tn9r6tBWhcdDFGgEgv1kpws6MRQNumu7SnNFFW6PZMfHtGmj9p2BSzAwZQg7DLf7JatuFyqUMkyx34iuUC",
  "key24": "63M4kuZSCtXvHuAvUPXWPUipRp27W2K72UBKyajyCVZEcLbyxuEMpxeTgpzSdFTW36iWy1fp6uS81MK8WdmD8BTP",
  "key25": "3pJbChuBBvte4ntL1uPjCtsq97RYJCAMCj2zsgQQmuvm1KQrKsa8hNCgGFA3LtY5nrCaHYbUHx8eqPUdTYTpWNty",
  "key26": "4AY4Y8Jg3pZ4RLoSmmbvQwUTjwkZiuq4pszss7ykq8EXEEvpGoSSyEZN9oydYgQvp8TKY5tk1LzFU6U86AoK93V1",
  "key27": "3EeSbW5Hi4YTCrS8cFEnN8FGPz71XZVK1phpsKRAk1VLsetSPBFyK3616WwKaLuQjMJWVArpzvLWJ8VP8tTwgGPx",
  "key28": "4QeVq48FmryAcgvmfLmjFd8PwNhusFTw58wzJSjcW91g9e7MoB3kU4DePYNW3pguJVVmNWchR1MNgxfhv65DjuAp",
  "key29": "2WS7RPdMhhP3hQbyc2931TXGZVQJ1XjB6KCL51kCYHyQEhJxTkUT6wKtTdibSKbHpFdT8Wqo2sS9BotEBoiho719",
  "key30": "2HZBduSKg2cfjP7en497weQtFeDb5z2od5xixw7SuboXkqtL3KHvQ6A2bsUS1eD3M6hPTnxtxwxGmkYhEVt1pEuN",
  "key31": "5RcudftuwgW5DFF7PENKo5aTzWPasF9N13xnxzzQre4a8TSnVtPxrGCxuW7jxSPE6cZr9bzNUqdy5uE3gprRtV3K",
  "key32": "53XLtas4epZu3Dg8rxtH3KkH4XCe6vX1qHFtpeRTgq156DVxxXe9fuwoB9iBvisyWrFKzehtXeer55BenqLakAvd",
  "key33": "amsVvEs63RhVQAub27D8nZMkmy7KytTAuebof8MaejcfgaErV3azoHje57kdgV7Bx3rZgcYxphJgqqMcAmHQjCW",
  "key34": "3KFpxa1Sf8gSnDjywpGjXQde5jCpd8SBMGMGs5yTxxA4Ex9SYtnPTpfmk15unD9SwwCkPP5vwtEj4q5sDBX8soxb",
  "key35": "3EK6BhMZAEyqM721viB4FhjEvqX9MojyeChDp1aNyt8b7bEeLfJ48eUMayqZtqP7MK4ib2iofn9h13rx48YH7o54",
  "key36": "3tEiKKnJaUL2zJRqXScWVmyiWueNGA5iGRJLF3sjkot3TDZfhnoixXrsUHvHRLUk1v4ttQWJrtMohUKnfvbpSzoC",
  "key37": "4xZUr1xeqQL9JYR7eSk7xKJGxGiZtCfGBBcuRgbaeqEDDBEJzouHeKuUFNenQmsSyfSwG34YktFCQ3jNWuaivKM3",
  "key38": "2jkGHyCyiUf8SUCVFfWQzV3BiCJEZqE9TjV3BqvmFHxEUpFJKcBSTs8GBFyExrGEkxL9Wz9c81Z1PZc3HPuztULx"
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
