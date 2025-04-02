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
    "p1DHbq8Ngp6obh6t9fkXX8EKkNtoZrrjvxssWwZwHjxGB4qPUXyXuNxXskEvaUVfpgNvhmSK1YiiYM26wiCxFGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WmvjVAZE5A4n3HWyNtUhjsMQDXCerEaxzaaKv1fJyLQu6bUncxaxFBKYc36jRuZy3K8qGr6MNbKcisvQhSt4VQi",
  "key1": "4u5FqjWbMt7frYeqfnZ94i5KX4QbuCzEKsE972HGW3jNa6G2wFfGhnUrT1JAYowe8FQZ65h5mYb1Q1VvF4tuQEfC",
  "key2": "3A3aWmB2EKQs269WuWgGkuTNTNpompHdKYtsJ3rW3w8PT6wMjVXbema1LMe1mFS99Na8aaEYoMx8He4iWq9Yw958",
  "key3": "38dMbEZ5W2vcqhXWQ8Tgkuwoy667e2dUrAJJhZYPEwfrCTGAjHnGj5GZvn79UfMnqvBSxGNF36GVL2A7xHMt7fyT",
  "key4": "49Z7QoZEkx4EDoimv5a4bVdv2wVeLQomyxiYuYFStYu13xYZ3C3e7zm3FoxQ5xvgY2oWFGnweJBZo7DxzWuSUU1b",
  "key5": "3rV8FSd4LsQCbkdEQbpwsHPgjwnVrC8rCh1XWwHXyPTvLRbtxqX3HcwDKyRNj6ZaF8rLwzpdvHd6wqSDczaoqBdR",
  "key6": "2Q5QmBPZmWYRqfjSGfbk3v6u6wvy1WyBKsqTReR5MopdbqrHnDXKPyK2uAkDr5RJ5rtBhRbS1KmEGpVReNoUGjiU",
  "key7": "2MMhMzQecF3gdohSDP7TveUA4nQaYKr87TLK8URPebHCCHRBnh8cNA9LBnFvxfSPhr5AVXY5o44Hx2MBzjKTKEdB",
  "key8": "nFKfWBbssgzxoBs3z4uMWrMTmiFggkUGyh54L9axMXgd42UkjaARRZfQCBvZsWaEh7grYyZzn52pHs4Ytsw4CYk",
  "key9": "3PGZxSntw4aBWtijqNmFaTnfHzjpppsxW6V55Un7FLJ3tKwsoRwNj7QfKHMbJrJ78x6TBjvdi4ukZHWUKByr6bC3",
  "key10": "23BnrYs6PYxMyYFxk1pSXMV7t2qQLTzELePjMBSchi9UiKxaB76E7FbTnTJUr4zqZyKf3vbCrAcxeVeBc7hU2j39",
  "key11": "pYGuSYichuQhHvPoXUDUovsX3dfH4fqo8e522yFPJRpHq4mWKfgrsbipvt8V3N6oeeWczrRrpmiVYRqTaGWt6q8",
  "key12": "2RGWT33Lu5Ev6uUwHsmEiGqk1t3i5EKRMBzigFMsNiK1om9kb1uEFVXhz1jSLLVASAS3vUZgxP8uWUahghDhMxBs",
  "key13": "2U1GwnFAeWFotsnso5RfcV4Zq9DBWNJtbNAj6h4voM6DbGjWzSY5dqcMaHzcGQooBFFBfJ4G6s47RujGa45F2961",
  "key14": "3dCntFuLGE3EyLRGWUqHFyqSRvjtVmcXkEMtYiJm8BhfgE9ea37DGEGFz5RJ6bFgMkEKLXPTY2seS1jV57oxzXXM",
  "key15": "4orDtVFouNBMcUCivu251XmyS3JJBZD4SXsMMiNpSJx8gPcrzn8x9EU5SrWZaRX9iGDpdpyu4g93yPRvszriJMW5",
  "key16": "5cduJeNeWj5EUXbDdc5NH8NZgLXrBB3zu9NezKpnrz8Q3U1nuTLktc3c3yTT7oPPRwZYJYKNzntTzkuGhuCEyt7H",
  "key17": "PbtQv4gMKBDEUoSXeNzcYZmTcPveiX5bSuPY97dRaZbD4L6cs3u6cLGf9zzbCoehAfo64r4qfqr7QC7Pvpmk2ML",
  "key18": "524ArSsJ99iGuMwKcvRJ3SrPKLv7TXsLnn2gKNo675VEawzyNKgphAocXf7XicY6JbDnAgxvbg3FYUkUtadqt1xB",
  "key19": "rAJtREJxKnJxezvoaPy8eoRHLzzPUgvKbarc1v9gZ6iLF5LKfNWtRBYExY3QshXeFm5mivmtwboaEYuCUK4frdv",
  "key20": "4ZYmSUWW5f5SY88VVjt8MPzGcChnSF7Xb9WaZFtUpod7vtFF55HkdpAYDsH76nprioFVkavrB8coCN3QUEoGhsN5",
  "key21": "45GvEMXiYTmtd5XMrhH8C7RHtnW7YatHHWTJV1q4B2b6HCDV6KSfe5DkpByVUNAJ8noKiB4AZ4saxrgk4yS33oAo",
  "key22": "5FWgDGDHJj3jqvFtq5GveHfgcsE5ZjhAAdSkWg74mS3gmGeoBfgA3KnDiZfKVnxcWhUCpJPtSkSaktbhAEnaZLv",
  "key23": "5ywkfU9sMrXBeCjQ61ydAuuMRFqGKnyMmMJuikZj7ZCJpM43B6oXZhVwNPq7erbK6a5MGyokq4PcECRdQX5FgUkG",
  "key24": "3iPzqtP8mQDNTGuTa4sUNdPptRt14QHEd9enTwaJWruDdX2qq1WdvmeCpaNM8xhef362Q2Ldisd9S4XxsUm2Jj9B",
  "key25": "KTeocDXM4eykhYX1vULofcoS99qQV2sMQBm4VCYHct8oXmrAjciBxMuivGhU5uGKM8Xc8SnXoRgNAT9Pw3NEaiz",
  "key26": "48Nyw2vx1LAenaCK37GxiQYTM5dnPtSNG2sD8Udt86hXQ1r4UfBtwQTkXVs9uJe8Ur7hfj6MMiC1TJHAs3MYAFb5",
  "key27": "3ifJ2nWp7kzjAV8PXHo3JM8ktuhu72usz9Qr8VUjiKeBJEEu7rhevNVCa1MXHA5SXpqWvSoGL7JCwt87UVQNzJdA",
  "key28": "5GXqpDmNN2983qcEkMRLThwcnW6VbpHXtVgs14fEccvKwHqxTNCCLoS2Vh1YdFK3Xy3aYULYquaCqhdF4PVMkSzo",
  "key29": "4vK5tew3xwv8DbJRdtVWhg8kuKHqsbRpfo1XpL8sBzLG9RBgEmduhmTgP6q7GSFaS4bq3UDsBAmaaoHSQ3YRLsnE",
  "key30": "o7m1mYYmnGWzvyaEFPoHg8V5tZ42ANRctiX4M3sWho8vGDahZ7Whiq3GizXc1yj4EDJGLHJfgR57xi3L7z8eZk7",
  "key31": "BnZW229AtWB4NgBBeAkWNY5uMCaNcqgT23JQguwHA34xQrxiNUe6nQKvd8AauTdicTcFLJaZ2BbUhBM8FnCZuDv",
  "key32": "4mExFivCKtkqtE2gxYaCe93xeVceBQFmfNEzssVxzmxLp9KLH2Axn6cp9rRoqp7YtZoqyRZh3kw7zZsina6LfMBs",
  "key33": "JT4svCj95htS8ZQiyuz1jWMkqijjH2dKg75BUz9kWjdD71T9VMsYegHBh4YPP6wZpYGWkEtHLzcD4MChSJKs2Uu",
  "key34": "3X8R2LdQcw4KHTrepb2kzuPgguPAN7ufbXkN6NdvXDisdkm8f39NrBcnVQG5ik9E139HiEa3eA7hofVafoqNGK7p",
  "key35": "5xsrb4fwyyD2EWNLMRXtFgqDdY3cmfRLHh6UHHR2Em5u7czhxq2jTtWikTYN9ZAKX2oUW197zGrF8SYpThxJc6Mh",
  "key36": "5fKSu2zYhY3RX4s2crjU7951ht99jL2or7KhxkNFEeXvD9Rp5DRp3Nbr97vUEXMrsFEH44bVzNSEYXUikvi22XGa",
  "key37": "4cxWbumsWQJDWLNtLk4s1cR1jDHqLCG9R5r27SNK3KL357zj75ofRfm84FXsR5LGxbZfKskKBuJu6Kayr84YNdbX",
  "key38": "5nKbdWRJJw6pMWJnvcyGUF8CUYMmEq42d6qdtYLiFgWZu1YZ8QWWNW8NjHLsVaayg7qsk2rmTSFmcqyfzVY2KEJC",
  "key39": "3T7RYCaiug1okQGgRJ8SgxskDKLCV8CUeLivis5gGFENCxjhj9MdkV5FhuaTUeHSSvm6S4QLKRamxgHnHmGCJ4z2",
  "key40": "5fy5LBWDB2SQdcUo2rFQ5ZBDesrp5Fc5xbFTasD8z82Ppn3bGpRHPXMEEi6R3cqpiGk1KkhhQeENLFMt2sTkj5c2",
  "key41": "LHndoMuMiwvNwv2xCzypRRpSTY43dJGJxtd8eRScaPzZoZBLVcKDjRzyT9UfKyTX5jaC1tQW3AGzPmQ6BaJ2ZJm",
  "key42": "2bsjyGhHf7tb28NBn23iEfuqsP5wzSkSU6QRqrW3ieSumLE26a55R9M9zPXcYLQuxgyCVVcjgzmPwof7CnwEJ3mP",
  "key43": "22CaUHyFjEi8WFJEKUptTJ2kbc11iyRTkVeScBmt9vzgv1goBMN6mTJBxRiXw3HLzntpW9Bzwti2zg3q5SJZLwJ6",
  "key44": "5cZLYuFhD8XzthkTiNZ63m7J91WFQiVFrvdJLniiYccZ4vRfijEmnYsKjfeE5LxC47HV75s3nsBZ3YxXM3acet6A",
  "key45": "2xV1eXhdLn3bQs81aSfsvvawYQzeNnRs8KEoBsYyDhevRfsiUnVvSv34NeifESCss1ay7mNTDhEfaEqqGFMNuRWA",
  "key46": "3YfB5KcHtXmuHvWhv5maQegU67gwyugTucmRxj51oNMsnWMvKVAHARUtzgc8RqbywndWetUNmYxu9A78BETe3UBs",
  "key47": "5VpCFN5QjE5qJYtQEis4JfMeGNbQmm2a5eTXB7cLqvSA3u4iQftDJdgnS55kKy75FZpnDn8mkmuvNZ6rBZ1qHMyv",
  "key48": "53hmbCx1AREc8EWyVZgK2QZA5rVjdncw3t6VvHz9c8SVcLDdv1yAnWnvVb1njRXwUPxqQEQ2DxipGm7AeZGFqe6s",
  "key49": "BqEh1u1qCiEWAbhzniEdSRz8GV5gg9pzFGX8kJw4UbKsBMvX4hJqJfaexWP47a6TSph3dmkCkLaginK2V6ykpuW"
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
