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
    "4MTvnYrhB1nAuqC1rhfBZDUi5mwv7HqkgLMDSGDaxa8BsCoexHxqpnkEsxpUmDiJtvdqMD6hNy1Bxj7RGDK9arTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51K1X37z2ooLwKnxHZCtMds2gbkFYnvjSorDMSaNn9NxjtRaeZHSwQ1jC4N3pgxdzNZeLEz7qePdudH3YycJbp8T",
  "key1": "CjgesA11KqjBRKNCseRh4HhHZ4phhw8BJB6986ZkD5bMuDJQZKZyQ14PF2qUphhhgGk3WQMNmkv37GW6wRSTQR2",
  "key2": "x6iqfS1HpzzNaUjFBgiHWJcbJ4ppCe2VrohuKyDgFDAzJmGVLBMwoBQfy7JkeWcMbPX5qgHvHMZfX5eMStJySzc",
  "key3": "QcTgBme31i9GvnXZztLRcdhErV3ZLxGLTNw4o3HDbtgscKvKL6xTmnrTQk46cyHqjWRvZPtD8rjWBcDbbGZ1nLh",
  "key4": "5ys88oMZHvBSPmpe6Shjq6SxVE49cAWWtBoFscAZPJgYiprzGu1fhrDviPLMK5TE5J2HXQ4LJUtWwHSEmKqAt7Qi",
  "key5": "4U5TRnmY8fmHhSy5q6dSGj5thfECWF6pFv52zJ9N8H6oNc2ugAyfZPzs5WbKBVYauUJewYsVLJpMbvygWL6CrNqa",
  "key6": "4fP6sRxt22Z1JweTVny5zVFuJ4vG1Mqpc3mbozy7oHph7H8Ui39fHxmJZMgWnAGvwSHdRJeogNHADeZ4Fdq4g5ao",
  "key7": "4Gx5AeihEUdVgfx8Wi9jjoW4MyXU7v3NQyEHzPpwwqFM3pHxUdU27p9e1UKNvQ6UFerRaVyJWAhu8JzXXnNbSwfs",
  "key8": "ZKds2WowHdCjjqkxfGeKCnoqUzhNGKMSYzV4Gz7L3vj9izhTh1sGGFygN7V19qNhZx8X1ZoF1ZCkV852R9W1jZt",
  "key9": "2UNcWjir2rHF9JVfBWLXo9pjfzr99AMp9N3diScKEGK68viDp2qix43KDYL1MPfpkQSXSoTmZe44pQSvGRncwsLE",
  "key10": "mRfxJXHuGYsiZWZwZb3hToG6icF35ZXU2vuChXHMvBCsa6jBN4yPZkJaL8fGoRvbRxMZpz6Tzsc85wussGSY3Mr",
  "key11": "5E8QKjriaguMujeowtx5PRAQEXHpwqH7ZQ69qNZLsrGD3nyynoTJE9n1zGfQPqGugQ4RyDT4NDdzsvPtAYDVw4VG",
  "key12": "vPNd8rnkzEqX46AAeogbdTwrEMoJFAWgX8cauMjQ7WG8bCz3HcM9ybhDd6vxkz6vTCfJBeVyREe7v5VtxVDS73r",
  "key13": "4oBUxmXR2SX2vfvtCC8iyjyjBiQBMSCPHtmSxRNiNRyL54aww7jbnCd84K7z27fQTpzsoQz4ekqMWCwyjAzmv1eG",
  "key14": "3G6NbVaYTW298CyUCFj3eDjLgV5zedi9vfbbyRvvzSdZB79hiwzNyFZxSrp8AfiKvAJqHQ9RJeDLd29FqoE7DLhw",
  "key15": "4KRybvdwMsVqVSGSjEJiW5qMExL5S7Us2LpqwSLNyg7C2nah6Zu68R2TqnXXbQnJNoCiKfzs13Jsw5TXMht8XYrG",
  "key16": "Y9XeeAPT88VCJnoQEg9zGUbozjgzEytYKzyWZE5Lsx4CodPe1DnWozshS3AQdwqPqsP2VXgocH17SRFFewu2A7c",
  "key17": "XaeGeWr5aWZCiwKqsHmBCn9swZQ27GTeqGv4wGj4kp5wiEuJemjgBngCasUdnugd2WgwDiRLyHr4zVD15FfrmYv",
  "key18": "49ZEGFPyEX5ev1ZGB6oXDr688bf5wwA7Kr5P9YpRHzyxqfJ3vDU7C1FMPY8hNnkoshRDrD4PeftHhpPTK4azyRME",
  "key19": "4umDBEmRcHvYbddCJAsn3q1kvMry5JvKFDHaSAtQZWaygxsEdh1oyQusgLzGLf1ZhT4f5RMqxXfWzSXcikGLa9sk",
  "key20": "8AkCY9dZ9nbtdGATC828UPUqq3TF6gBVW459trSfXdqBFi3aq3rXqm1cmgoZTwBKEzeXvDc8ucrim1ZomDghdGn",
  "key21": "5dg66xoRzG6nHEvHLDd6dHqeanCUp6QY8hz6pbGb3V2bh6obkTW4yQYE8A2cHC1jEqdpu7ksukyR1UfzhPwfdTUE",
  "key22": "XaRMVApedi7QCCEMsQagWEDgySYBVpV61ZeJCepvCUY8dhtVVvz1nqUvFKPRVCngjkkvn1BU4PFNDnWfQG6XBB2",
  "key23": "2qeWVEZUdEQYXV3q4jTvddgmmjMaYEFRwQfLbsRQW5HkWGmmLWtgdNZyDJehhBxhmSX3uGzBKE1HNWtsEsiMXKFP",
  "key24": "4AxogyBif83gJLgSC4xUCBMKo8mj3oFzR7WsKRrqopZ99XKe3GKGgr9cGQoQok3mh8zqW9mhQcJHzgUgXQbpn4cS",
  "key25": "5YADeceW1qyFmehrcgyFjg1usL9D9w4yusAxTzZoCXhMP4jBiWBTAnevv1ZteoZM9tCBJtecBi8A21u3A7JvEMbG",
  "key26": "jUa45nrRZJjpZ6MMjv8B19Q3jpbTQaBCpCDbSfcKKTnHhQcuS7P5fMhp5wFUZtN7beESWSsEiow6yPBCTu1bAkB",
  "key27": "64Gf1Axk7uuAcg7E6K3FRv3yUwv7x6CjdGHWb2WfLSajqc8mM9iiMSFtc8bTwaJS4vdcBP1SgQnaDwybSt4SjUra",
  "key28": "2VeD3XL9RU4ktuj951jNLHtUmDpNv7CCoUngNgiG6xERyhHPyGngXMpqD8vKkv2ydrw5wLixTk4Edi8QoZ5VH6MT",
  "key29": "4r5FtDLdu5yYngLbDLHoyJwzcrT1wmZ5K9kqtaEWou3Hy8DmqxmLZXzkRz4zEobD4hLCQQpezBSzkdMB4HduGcq7",
  "key30": "23U14CD3ARMdg7vJToauyJuTcfTD8rYt6dtPBjcngcEBSi9xhA5TSfLatr9xD2JGfGAy5yHUJcyRLy6tf4xwhxzj",
  "key31": "2YEq9jpHL6ztdZujDhVYM3KTYxuu5sxGXkHRTJKyCxD6Pw1vVhMR2RFzVmoeKg72Lb7iKLZHtqCWGQf2ugia4avY",
  "key32": "5zqRwmE7FE5NLrrkTHpX725QxWLj1AVk2ddi1L4sXQUZN6bs3gwNjbeYk6D44kiDWUtjXjgqECwrbMFZ5zJeC7eW",
  "key33": "yfFBKVkKRZfaMQEFiLKYWUgS7hF6RBJRDU3KTea5FF8XVGYunBvbKoM2SKxWJdjSXPGrigxn9PWXCyfdngghW3t",
  "key34": "5C8TSE9si8CXWNCHjG4fnDvkybrbL9kJFfB2CYt9reySnDxz1YJ9o2BGX33X8znJGFG4ugVVU5h3LXTnFANtrwiz",
  "key35": "31wLkoZhKBLM9c9po7eHToMipDLyFCzP5hbM8wVwmTq5hgKXtQSMv3j5qBXJ4b8j5XSZUCNoJRjFDCcuPtYQoF2H",
  "key36": "5NjUY28nwUvfnBgp3xM2NQg2QNT6evV1ghv3cukv9mxMDB146EkvQ8kSWoQU1ivFYjDs5LRFKGPF7v5cqoLviyg1",
  "key37": "DW9VriXChVnNGVi8PKcLPy9GvLd1NaZJsQxQcSvM5Fc4CnAQyXyVHJ8vDzuQ783PbnLxt7DJkSrnqQugokVQH9W",
  "key38": "WgFLqAgrhJ1nkws5f3SxGJgVjXA8pv9HAiJih9vkNXbb8gmBeA6KHmN8x86isWZV98Q3chkdH5m6dZJwG36fR4a",
  "key39": "5bmADRBqxH63nrodkdHq3mra4hpbm8sbnqQbuMzj9ycdKa5NNWygJqCGRUn1vaMRhCksNRrNxYyaC2wV5MKKnkpQ",
  "key40": "5hbcjnQxaovDgRbCdvarFdBJfakqPqxvUpbjMuyXwUnqsgQVXbpfMci2664XT48mG8peZfSPDmJ9VBJTMd4U6VnW",
  "key41": "dzpBB9b6TciGHmrhiZjHndjQvufQFAAvt54m9dzHZ89A33vqPRjmn5wmnCneS9TMCXCprwB6bXeDBr7AgNK7Lc2",
  "key42": "sVum9HHJUZ4oPuMMBdoGbaM79MsuCgbAzb7RsSeqLBwG6i2qzkXqCvyhPJn6V1ypGEXLggRhAo2oYGhYZ3td1bH",
  "key43": "266aX6XcqSFFpnsHcoZJuuu6vHVkui3hEJ4k7XHpRyP8ZwZnLed4HRePw6uzngHRXY6TyaVwufVGVqA9VmbygFgM",
  "key44": "2aEaxw5JZnEDyrf5QBdgzLVgM4wJjhnt155wCgmm8PnJqh4ZsB1n8Lgra3Dbsr3gAwYFuLT7QCRnBHi9wxNpsmkQ",
  "key45": "5XTrprLdDadxMTfSkAo8W2L8V9viw2K6K5giPHcPmRB7ghzitEiMaXmLzHMmBiHFgL9HhZmvzfTDCH6KXP67UCu8",
  "key46": "25hMzemV5pg1b5ESQfLwVXvwLfbmRRMgy7fmCPQLieT7MFQQYMKfqesAeACtkdZkj7QWWEZiabSd4b57oWDCewuu",
  "key47": "3xsYzUa5aPR6ar7dQ1ghPmrZYkWfBC5dudd9hCt88CywpWoxayQ962gwyWuQv66LY2bGLva19GmK3eNjfMqEELui"
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
