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
    "49mGQB6Cyy1pUCSG4mPBjutfFf4Lp1rGwNP3geAs3QvZhDWwwhBVQkf4FwRZUo9YUqG8T4zuxtsxY85Jp5tqKg9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jqFEfvY21PoShKxygjfvo6GqHAGPyiSfL6R9CRvCJ9T4cyWz7cBrHGuiTyBmvaS5LByMzi2wzvdEN9SZeS5Ztps",
  "key1": "6xKNzGaWAC1oJSzQExXP7yRLsozQADrZYuGNwzZaRJi394iMi9siFvqgfDbYTUyZ9zyUizLAnKzyuqafBsEA7Nx",
  "key2": "2ycHEKEbxBPCJd8ic9zBRHgiP7grAPt2gjqVjP9NHMP5SNQfb81gXwvgqixpQQCVzWN2fwjoouZb7coFmLrppQeX",
  "key3": "4qY7yk9JhMYYrnjgwvYD88FomhNmBhAaB8bCCmjaeqpQTWqxjNddmmX9wL3fAhRmnJFBpbPd6F2AY9aa9FrEk8z5",
  "key4": "4XGAqx4EQZE2RgdfYhLkiZzxpFVB9zGsZ3RdsvEJkV4KFfhh4YHFAVGAgLdvFNRgyPTc4S9iphSLZXrSEqFRxSn9",
  "key5": "FQ17Sr95pr2CGzoyqoUSzmmjMHDpbJgGJ4Y8CvM2TYGMcSWjd2PMqX1yuNh5HnEnf2VSGsPXiumPgDFRnXpyqt4",
  "key6": "453PYUJgWobVjXVbWESd3bxGVmFRSjc5sYSCwr6ToFCr7bS4M33xZhjuFXpcAPBaH2CRK8pWreh38Tj6PTt1Q2fk",
  "key7": "5H9Euu3ntxAqzk1ni88MqL8WoXsg6xrv9T3nQNpiNcumNNsZr7uDYTkGEQtCNAefPChpQKTvc8qfmBuc6Sakd3u2",
  "key8": "FryLuoRe9iWmdHaRFj5wBD2fZpnGYVEnWpbreJxGM3mf5dKah2Zu8nvY5QbnzavvKsTbAv4gSbgqKim2rnLMpkT",
  "key9": "5zimekoe27kTsQTJ1uzbbHoDvQAXQcmpeaVs4SCSjnjgeAAxJ1kU4pmraBUcnrgZpQD9HF1GNhT2AB3RziP5FEAJ",
  "key10": "2hvhES8bdHXMWJpsSuC3ZT9b6DmjW7ayJC1h63fjT3Q7EBWFtDL4VgWfFj9zsqvZyJUYhqMevjzqXLP85BfMx5Py",
  "key11": "2stBVv7UrcLNsS2QdAPuWkbLxXNeRcafowcHDtw2FDQUK2Qzmqae1t4RewaJDn7XyyCT6QWEPMt2uyKKmB5smBGB",
  "key12": "4AzvfARUJU1RyDBDhaz6uCb5KfdF6sxRwFeaeZPvPQoBBQiZy1CGgfKyFXdyyrVfwQeJhRYh7dVkhmiibkiJjqGH",
  "key13": "3wEN6ETmmZvLnbjKJ2QPAW4dE7BLMDujDuizrwLQNLWeJTXVG3xE4r8uxPtKTxD9936HHxpLmEHboadbHLzxjB6h",
  "key14": "459m3eaqfEc7Lu9nk27iNuzse7VCyhKPdtsYkTP5yuWrGBx5UdaR8goxZVUcm7ANsCg7BC2xrQRz5DFURZ2v7TJK",
  "key15": "4Wk8fnKKrsbeH5t6etvFp6arDakDNBbTXper75RMvLPejBw6KnGnxrgfKCcTQ4NHYMK8MxcGjXdqL6pT3sTgJDD7",
  "key16": "5cu6HhkaMNcXERsigs2WxeoWsZChy7pTxEGk1Wnk28qNfE8TiZ5Pa4QXhvRtEH98RPWxjW3KGp8PDg3cJBafqtYa",
  "key17": "5FCiSGULtZKMMTcCLrYHDqDyGLgt418jvJ56MgyCo5YWwVLyqFGDeGAPzNgreLJ5BDB7HNfPz6iLPq3yvTCneiNC",
  "key18": "4Nxdevc3iCenagwVtoKjNy3JTiEpDNnjvsJRsBnKeUqsTxmTnLgeipTnkE3ED1PtAPiQMucG9tVtE3j3eQUByQ8B",
  "key19": "5J3EZRiru3dmtFNhRdbu5HNM4zeotTrgsv32HopHkhz1mPXTC7XTwNHGfHAWbcZcV1bC3GRjvv2JdJMNF9NBavbp",
  "key20": "4yfLqQiTk2neUV7DQyfajLB7YScckc1FgXUsAFfqWXnqeLHF3uBAujtLpmsRCs8FwY3RkoafNzgeWHZCsbP3GFi7",
  "key21": "4BJugEHZkAp9q4FgCiPmDKrfd2mKPMPNGMXBAcrn66k8qL969GX5tLzLnGhdim7zna1MJAjABm55Ek1MFusFTB2x",
  "key22": "62m8Qu6pW1z3hNcGST8oU4utR6B4EDqqqfbmxPdVGCgYGCGMm58pbDNCCiG1eE7b9yQxoDkvThT3u7oV7LvsBstB",
  "key23": "5b9X7BxweA6g1V8sx5cfgw1fbQpDKMmDaUgvtywdgZ7BJ6DunkbfUPCeUsoVg4K4Sv2TzdAFhHDsNniJgQMNhR8K",
  "key24": "5ArReeidTZUPjmmvk6p6gRn5sMuDv32u8MxGLDhDZv4ysPYXQVD319nSwBtSr8dkECcQB6bmDGLmDghTrnaaGY3",
  "key25": "anMVEJ1JLYqzfycqRK5QEAqeJcvZDo8JSES3c4ax27TQ1oMZnSJS5e75UhLrwSbfm1V6EjbNEpGkVVt2sbNxExQ",
  "key26": "2G5i1LPKkyu4DCAxLeYYk7upPZNyqPACyi297ySQZ6JcuKA5F7kF7G6YdpDG1Sa2V2nBXAjtvWUmPnXtPcDffqaE",
  "key27": "5Moyxro1EaYFQZBb2A49mznnq2PFfXVTdQ3xeMhbrPCiUTjJGjWsZFiN4rdBZe1VRmExMyGtcgDxCRUhKzbBE138",
  "key28": "3WiWBd7XCyARvgYQ75fXmmMxoJor72N6ET5ELjrDSdNhBAe7TjrWWypEBcjTPMe4hmn8dptVQ6jQqfy4QA1ZikQm",
  "key29": "3WDB8agctS1P7QcDLSPQ5EYejZnXZueNnmcyvcuWWj2rLdsaWXRCyzX8CQ8KEADEx9561zFHXpzFUeBfGVANFKNw",
  "key30": "53k5Pdo1kQJVx6EHn9avvBvwV4U8nqyJ5HRtJjtHSwFn953JzabvdCgdhAo8x4RNPPx2inh8PzXKyRKEF1sYjjN6",
  "key31": "2ZcHqcJPqdYTu2c8gCSq1E784DZEJuaKM9hfYXSwjAsQA3urWBnMaeFRJYRwjenUzDYZkVVvB5dmGqpqNrs82nAx",
  "key32": "32F3Ah5sLDy2boAmvNqv6XJBoLGji4Tn4kgr6qPAGDvVxnqAxoTFWABYxk7k92m8rTC2xdL8A7rt97L3u5Vix1Z7",
  "key33": "5bZnc2di7ZLF9W2X11Xo1wYcD2fPmxe1Leo7zpxFifBkR5i4ZVFETaGHhVwECKRJXCqx5g9Gi9HLU1XAZVo8xpJh",
  "key34": "58P2yprKMQvQDhPn2LVDDpocHpHqZ27c66M86CBd5ApkaesetBusVNz4qXwN5BUE1FX1wQZXb4ZJGZhubv2ZqvEH",
  "key35": "dME4n1ZHteCWSCbca6MvmPiFWGmdCiGv43vAE79trhMKBJtjqsQWDdxJ9wiSYySibLLC5MAGASmCWrDWX1C2oVQ",
  "key36": "2fE9avUbasqyRZk9NrwbxcniXr5MYRjpDM7rCavvWhzUgxfTX3MdKYKTvoPZiPVcSEHaEqFB12kGP1Qa1KKQYvK",
  "key37": "eqvSu5PZUvadDyQM86VDzzbM1JSRQtAUF3J8Bkk3Ps35ESxjqU9YWdVdYvr9YdSsj3GUrAJQPNGF6JwAXp8uQKd",
  "key38": "4obWWRNhHQNnTqMr6V9v7XmkammGigFQTVKAcmFLxL6zyoohu4e2ohb4Utzy75m1ZCtGBmuFUSLQ64Kv21FDDak8",
  "key39": "2txyxSdjHSSKNFnZywLNDmA5x9VyKLEmXg4brLJgz7CfKLt3P3UboXeS17kJmCji5KiUbY3KMLWskYNu7agzsZNh",
  "key40": "3MWsfxVgYdvUE7dqgAqp3ykmByVEi9bgWxeVdiWnQMeurxE39BxjgU1LVxrtC5gY68DxD4TsRSbFjhWv2DswqiQq",
  "key41": "2kPrNCARkQXZKVSoDdmUN61m2qdsNLmbEphAePd9VhFtyviSrWEUcmzEK4vF1jqEoqZLRbc8Q5puS2BnZ3w2zLjB",
  "key42": "5JJFfPSmjcfGcakBU9seXBEHU6CHmSa9M89e6PJhvHnUK1uxq5X7hqDE2hsZ5M4Ybp5GzJnjs1kCo7V6HLggbbD1",
  "key43": "5QmjG7bRZbTFd4Yfd7k3Xpp22W8mcW2PZGxuVFCoNnoyUXcaYYppnzCV3iYZowPdQdumQ9FbqYCQPCgic3vn1ZdP",
  "key44": "wpStaWJ1aEyAbaq7fYU44sDStoNz5L1a4PPkdVVpz5y6downigm23Q8zvs1x6Y7NqP67T5gSJfs3ULyZDCNRQA1",
  "key45": "2nSq3RiVUojEd3k3ZqJyMQZj3mBLMAMgDhFVWJ7Q65mRz7G1zpviKzpBMrDLGGDSFwREsw3r3TVBHeFA4kemkBEo",
  "key46": "3bBVGSNY76xBJ1YTDbwKnuriBhUciyVzVmM9KFZjUrXZf7z3pcDvSJgnvw8QBnAD6SB5YChA4BpibVhjGT4pMaTm"
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
