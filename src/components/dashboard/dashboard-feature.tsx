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
    "5JbVDeH3es6Dihu7ytBruBB5Cqe2qeMYHfJvAGFF3iUXKuAunmWUDncPYCxgLHuT3mfeGFk8Q3hNwA53Tjggq2mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3izmeMAUfPMwDybvmawmQ8eyhewPJSeir9dzPQ1zjDM8MFpU1vZvWxB7HdNmvK86StzEkDh5S3z7crXo5LRzZ1QW",
  "key1": "3GYEaViiJFSby4DGP3xNERrsEaNQMuZVd5jTAMyvyN8TRYdbtBJooe1cjGYj3vr5ah3XCFRrfUwwfQCW8LXz29cq",
  "key2": "3mtMwc7JXqPHs25dmefPsrXvZK7pVB5MH99GGPPPcqkgik4gbsxxSS5CM4HtfcD6HfxJc9PDPo7prvW9hWJCLMdJ",
  "key3": "2NKZ7nfjuUiqrzozyJ9u9xMRGatEDs9eTZrH35WdXDcDU6sNv6wGx6jjuG6uizPm98KbyFJt7FzUC4so2RF9qkSJ",
  "key4": "5Kuhk19j8m4Q2eVc8umW1oQ55bbqC3nBcJsr8hhpVg9xKzXrj9PuBsD7RzhA43d45qdNHjHNQbzPmvsj9kMjzG8B",
  "key5": "4MsMNC6oJY1pvs31wbaZZxPXXEfiDJMm69o1jHp5HGdttxeMMjQTbYbwTMLqTGra7WXKJdV41pYBdEoYGaGpqGxN",
  "key6": "NCmuyvoh9sB5mz1N3j3qMmqQzk1aJryfT3FnASY9hQnNdppYPp924M39SjrzQHaoAoaBF1QXf3UDDjHW7hMNnfP",
  "key7": "663B7yFcUaUU9w9pmu1TBELCKX1q5jSgHYD4ze4s5464eGLxk3vDqJhRgsnuFgLhDVDoy9qYKMQTtq42zFv1LKiT",
  "key8": "3KY5vQDbhXTkXcE6mEvN9ZjvbsFgjz7YGcdWiXiRrzxGMAPekhXZNKA1s4miqV6n3yh1E4ySDawcbsbvgLifRNGN",
  "key9": "4yz5DUwk6vjrthqNhHtYBSCwYvKWD51zFaGb3eav99KyzGEu8qT2VDRdGUdFymXyXk9X9zJGKkkRvg4XKaoYbETd",
  "key10": "4ng7DSsjH7ePDbmtzmVb9cmvdXdFbNeUJun1ckDJ9ZmAoobaMRes4vNc7nqV3iRcCajJHtsmmhMTSWjYf9Bg3QCu",
  "key11": "5EdEJrBBxRVUARQZ14jjSWRYaz3Sz6TqwfUzHScLNbv7awLAEJ7jWcT2NVpus48XmNTtrHNsouSbhZuYB3UtvkB7",
  "key12": "3qwTyiaknqyFa2oFuxcSfQnBziKQvfCyx9WcY56wNvqEN2YvbQsVk2C2p9PDNZ2C9yXKvFbnRjCEGBjyF2DZarcQ",
  "key13": "3hRbGhT1hBLchYGaX44cEKxEEkobQMurkYbLo51y5XcwWP15hX8GqaLHcvj4Rb2U3CaaRALb8Spc6KBMBFEyozL3",
  "key14": "2MmimbTDg366CFq2f3fEm8P3BTCftwoSZ3yPyZr53ySbUuRmQ2xHX268xyRAZqQSK9RJQ8wdUZ2whiSr6F4aZYSW",
  "key15": "Z6UtC55XvmwYQTpadkMq15Be9bjpHHciU5zMjCo9CxFAWNZNXm1djEqGjtUPaAudG8z4WwTHb9yeT5rK1qy1Qxm",
  "key16": "45Ge8tyJrBbq5Tb7kXQaPZZ4M2Stk1pWiUkkbo8XNsXVtDyJF626cjigcCWXNhqq8nqP1eb5vfYEKByRVybxg99i",
  "key17": "PfyQEPmVz5EF1tj6FMxe5ocbCQHQmFSTePfpZgDiwu1tDfUcwQQ8RKtYaTufyeMA3fQ5PB63erZ585nVjc25cTQ",
  "key18": "81WBni6aWBnMgJTukYhinNt5hXaT1Zkbxnroefef1hspMfweT2wo356JoNaXC3jnf2rz7R25UpAVcFaKwpu17qj",
  "key19": "NxKHgvZTZTtTbymGjuTJrauZvsu4TV5xjv56A51Ui782b6BqDupjT8xdP5VFj5fJEsgNZAfU9ycBVSHo6ciAZqz",
  "key20": "3nrcbQiPB9b438N2ae7fUUCnz2kdsGXkvfQ6f6SnQBGdaktDyqjTediF5GKi8oW7u8cUz9vK7suhf8GTQ3QLPqzY",
  "key21": "LvzHH8fkuVQN1pvPgbKDVZ859UwuJSWntPgrE4ssPyBPxLbqz117TM1ohURnMpig1e23Hic4JNeKLQYWhuthwfN",
  "key22": "GcsAnh8KigeJKRrUh5mPsXV4ZK1oJ4XdXie62P3qMdDiTQTLXoQEqaoDndT5JUPwyhyG4XyXV5hkQw18Qu26atc",
  "key23": "3gF1Ru9qndfMtCGNy6NkHJm3LfcCqL9DHC3yCwfaPV5KUNe81FJoEc8zfbCsfVNnDir7V7EGqbKaPPa4g91TB5aT",
  "key24": "4UqtBf1iusF5WRXupu8VnZMUs65Cy4eQn9JHKza6NYQHHStP2p3EHPyy37EGnYCGnEMuH5SMRcfpqsSRejKR1aV3",
  "key25": "5VN827MMR9VNqxJfWAgFUYfAasBFsNnEERCBjRmcbFd9s4uSesnieEWFEPE4dFcJYQhhLcqiPrw2a4VBDWEdTrtB",
  "key26": "2KtdFgDJzcCFT3SvPKjtJ4Ly7fCCV6kjT9A2JaUeVudeAfyKxREPkJCqBb8Dq1rPgBKHRffXz4EA4RvYQR1R5JtX",
  "key27": "5gnS22SBuomGfuh8zAckm5T9tiM9HrtPtp35rL6uZjPZm4cVmPRixES9aLCyrwkTz7KtT6CdM8wJuq1gsMBHmvbj",
  "key28": "wfyyKiyE5ybBSufHKDZNu6drKwaiDf2uo1jU5Tgdq3Et7YWjmDiiN2jQ9FXWf7ojy8FtLgHpdyLQmkbaXNjgZ2p",
  "key29": "3MsYpcK5miJszLvWVsmZDYJPvTgrzj9dkTfKSXWxFAx4iWi131DaVo7LCUnKZUtLGRH5SrgfDZ8Z9UGU8BekhAtb",
  "key30": "3Z9dkJBkTA786CwxxmYSFixSeVrVMf1QapmeDZdRuMqbbv5reCCtTUzRPPWZCCfgQ3yTQEPV7pZsJue95X7cv2MK",
  "key31": "4K9Yvd3TjU81qV5crnGKynPSmneS89Goo2PNWHoHUMv99jFez2Q58TjtHj1UcoMuQqBtNvYGpt1MnqMJfZTVZkGH",
  "key32": "3kwdEjuGumgpFesRTejAZVxeiLZCFsRMhcGWDiswUHhjiZq4qvdufoqWpKinsw35UkdAhTH6eh83h1kVcFkHJRtn",
  "key33": "qFnaf4mfqtYJkBNbjogeL3zx1HqbVuVpktLtquGCz3EpwEV7em143rh8cBv6nHyaMYUc5sgVUbjS5PFSiyZ9Jyv",
  "key34": "3ow91x5V6uyAJyHFPxtKGCwun56Tp2gC6fPYghiVBV6kV2mjepWHJc3cqwVR4J1yomwNcXgZKJzxYznSqyxeuzyq",
  "key35": "mnkTj1p5UdUVFpZyj46wxbiKVFeRGHLJ8o3pnFFEEpDTj2EhGkzfok4T4tjjbjZNSv1rfE1nvRm681wVdny7XGX",
  "key36": "227peu7xGxyYsvhvAH3BoGjHPmAPDQBgxEoaEhCFKxPZ8o2BxZ7fEMPbZdTMed9tqdnmvqP9rw4TDtUsFm9tQbvb",
  "key37": "3mdiVHGRejkFnzzzcEKAn7Hq6giES2Dot4LVZvV6w3WmjrC9itMY4oFoCjpMtTHA4qWQuAcqs6NQEAyDLxJ7j5zS",
  "key38": "2axeeiHddg3jjPnW93qpxqvdBg8EEuBB1Zd9tFrRWXA4dEkPrmFP7wSpDB1C31CPjWqpt6hNuV9yvYWEths6hRBs",
  "key39": "44fEuagmykThrzGyZJK1Kr7jxSX2jE1byuju9TwCyEK2Ypr9FdUocJagviVaEBebuEEiLzaGLf5PnYpod6MVvJGv",
  "key40": "qcmPk3xZepoc9SVKKfzKM2g5aX47gyqJGV8hHhWHHtCKrv1ozWit3x6ekgEF7h6Bkpc7XAru9hcDxFVQDnP3d2a",
  "key41": "2Fh9ogJVw87vPJGxuY44fku9rrsi5PYhqkKy4a1Tn5wdLnBKfphWhQpimtQPqpFgJuc4tQdGAH6uTheYLbqnNUAv",
  "key42": "5hrbrp33jmMhBvueCdYs1VkAv85U9mw4WsajBZPGwHaFAiQK9ViPzjopEi9xHF8XngFKH3CB2U8v8e7Mg5RgRV68",
  "key43": "5N4ZwgRsGWpamd48f6q96u5zpcVB36NRQChXYdrn5Gn5EWHaou5jELDTjrGSAvXudtc8Wj5JeMeKvBtsNGkUEmSs",
  "key44": "Qhp5GcHRQxqdRg3nK7HVqJnx8495ub9fX26WkEkvWr5bmJdwRkdYp5U6aAaeN3LsY5y2aD2so8r2XwrYJMPu52g",
  "key45": "32nrap3jWDApKEprnDcsDU3Cw5LVgXXPVGnaSLmWsGfng2PdhaWk3e3B2JoVLKkm8hUEFC6APRif4KkWpu81Yb4o",
  "key46": "24jFkJ5ezCGH81NquRrybdcMbqaVipL3JAcM29dq3jtoht3mt7dvA7TExzjHGAKf5C5F9PLUoUpYezppuaavF77J",
  "key47": "2oarxHcPNxgKDaVSpMSomLQdyU2oLs8c6RzGjaVjodpWDrorhaZ6xKBtMUtKN2gAGLrUxbydXAfcLvgsZmeudvbQ",
  "key48": "3gu5X4ZfCrgsMRVx2U9JWZWZ9ETJRhUVFsBNQg7pdWko6unM2orwUxBQQ6bpKYsbTM3ZxcEQg6D6big9PXQ3vLiG"
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
