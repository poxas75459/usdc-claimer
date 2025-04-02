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
    "64M6X9XKLXvHG8JkFqUVBe8nMxWx2K3SPsFJwmtzLGJKpCkDr9PUoGosyPxwfgn8x2ebpAaJaQoPzDdys8j8EsFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b6YheWSeMJBxFp8E9MvA6dhbCYBfzi2eMszFi8vgQxe45FCpZdXGPKycpUHckUV9Sym13NzukDLpTmAiJZ6TwRm",
  "key1": "2YgPKvA4oMvx4bqhuGT39N6bdpf8xdKFQTGma6TG9o6K4TMzoQkt5F9dBwL6Wzvbt9dMSS7RskWvnaBV3gN3rsNh",
  "key2": "sZyKcBtZ1tHZ82C6qTq6AkSqeMm5wSk3Gbnz8rAyBg3EceuXoF8UFMK6aqhsF8o529nPrPu7XaFRibyF6mqRYwd",
  "key3": "2mUfb1rg9U5TDoYVHDnMeBFMUpvEPu7bujL6U567aFfsC4PYp95pTmM477KHVNTBWENBRo1siwt4rWgx6Q2MQp3v",
  "key4": "5ZbKch935tNh4GhN3PJHJL7zqmJB8yZkF2zSkLbPg7VhXrp5tWVoAZq5M1KhoGToe1bmrCuU5obZGJQ7bRTN614e",
  "key5": "5CecPusUdgLrN6i1DrGt525zF9acVKvNx4r7DdyyRpb4znn4rqiU4yxCmNeLHXRXtFGXSBZiL4foyKCaFNHyPGk7",
  "key6": "2QLzyS83kuYne141D9kEszAzSB4iqbmFPoPVSNGJUFeDNe4A2hq6JcanXZJTuAF741mLDtdcEGFAVJwCX9yfg7Yd",
  "key7": "4wVZ4JHDq2543MkF8bs6MYinYsp1sypUXhgCBQpGYa5988zzU5GSmLb12DzkrSb2qc5wjK6hD7th4DfhUqPX4Ey",
  "key8": "5NjWCHr6L8FawDNZpzsXvvUi6N9kn6gizQjXBfb7JGHDvaR2qVW4Bns3hXFrr6xCX2Wb8z1oREELP3eMEaFUhRZJ",
  "key9": "cLchwKMNjYvryyHvdm5JQN3BFsdtWEu1xRCfzB3M2sNLPT1hULMCUoHFcBbSeZsc6E8cPz1LoGn94LhbUfpHqqp",
  "key10": "3P8FLvoQ5u6nGD2U7gPepKswDjeAsAwArBn7JSvsK2pad9ToNbLqXyA1efU9hcZFsJ9tUbXkmza8vFKbM93EKxEg",
  "key11": "53cQ1DuQnAkX4z1omBnM9BvN6GSL7tBt4dBwbnWi8Vq5iVHQLPXCFVjCUZzgJS3iQrTs4FjcSmDDJqZgqzP3yvWX",
  "key12": "2fjdMJWsb59LUVtS6p61uadShGB59fMw1mn6idtVdusky46cLemhG6uuXpfrg1PJVFvit81kG96r1G7uDF8QTLN8",
  "key13": "3YgvUTao4bAsCVHtJwgMDJVJDjwUPkAsCqb1SKNQsYSieqgfBQdEf2zNcbpTsarNfrG1Yfy5oThga2EuMHH3diV",
  "key14": "5mZZg8gPk48CRvj5vUZK79uksa8HMzzZjJNpEaCpHfKb1uJZLbmwiJzfksPC7iC3hcYGor5WsqYmETo5NjLSiDSW",
  "key15": "45VuSYQETCGzkTBCextKkyZ72Lrvcpfqu7pcnJ61DJFS6hxbbahtuU6bXLTCeYa6c3A2YDC6bYBNYLLdEU66iWuq",
  "key16": "itPxhkLfMnnkxfUSZCQ4r6exZSp5FRNSDHX9t3WadwMTRtXbfS2DQeaXEgHPuSKs6MZPGCAZd9TdmubnGimw78f",
  "key17": "2PbpFaJu7VN2XE2AR3mJXG5yieX49PQQduxB3EiNbswv2gx8FuD2LLEXigKA1xwZmp7prQwYdazpteTamgnpvbBx",
  "key18": "29mQ8xhqok49uXA8xbvJ4AMC4JJm8229e8mAJ3PusAwf9idH7tHBH5a78nstWzYWxAX3scJbHYHfQckqq5TzRvfQ",
  "key19": "3CudEunxtcaB9YFLk1Rv75B9Zwfrqd3u4Xfcgx5KSNd4qs1jWCtRVQryWzPDPNQPe3qp9STNAhz5uFZCCvU5n1tR",
  "key20": "4XoYMnDqDHvQT6B4WvWmYoCiXsWS2SuRhtJWTT9tWiz4ydJdGV1eaebFCsrnYQyJpHczTXppQh9reeQvHyJTMuoh",
  "key21": "2zF1XfAwgVemzRGeA42Tp7L8Wc3xxcKxMAUBWrGCdeCCcgy7yGyHCn5EUtFyeBAfpuDha216U2GHrfJvUcDU9Avg",
  "key22": "27XopPRy7hwLV1VWQcLQZwwLoQ1XZWZXBNWXSTpmuPjC4yq55CwN4ESjC2ib3RxZ4k3xhhxsDgxj6ZAJo4Lb4Sfg",
  "key23": "36YaXswu5g6Zn2dSSbBGCHf5vyeXnfzXuvNFryhSzdtQDSQv69F6jRctFfTNxFRMpvE6p5eHcUZm9xGDANWdAG9Q",
  "key24": "4rRyDAmBNQNNrmgQZzEn5sSjArk9msgxSyiAyJhTEDPRfux4ZPHzZWxAFQBgN8kTCwfQD7tCGCBzFBLUbmUo3wqV",
  "key25": "25vgMbjWceR6zjuY7s6gnk8S2oht3GgrakJxAgZF8P2hvdNKBDdEkzXT64vhsf24eyVFiCnq7p7HXjUeytgmMQBQ",
  "key26": "2zC5yrJsscBEqTpeeEkwsZaU33UMubgwGwjRaqzL4ZUTtC3KP39DEUu5Zoq7zufozq1gC9Mk76w4MuMV3iJWkrgn",
  "key27": "5wndwZDF2MDyWfeCbk7CFvfg82buneNEzcJGBtTxhjnBYpUgsEWuFCfCejiRSwkgXU3sB2DJrLrWe8Y1VYCVtHEo",
  "key28": "4rZaVrM43uqsmC7DX8MtPNXmsCt657DDgB5DrC22s14h1toZEqm2Dr8F7UsUmXpNFdWVLi8J7mLQs48hUHc65M8g",
  "key29": "38KDn9uSCeAbEKZJKEdukxnKbfGzSgj4eN9b5ij5FPUNKRRRQ8TZrzfZErcj7WK2Erh7WFUeRG73hirfkg43eEDr",
  "key30": "5PKaAw8XTkD2gqrTSiomWh2jcL66Ye7Jji7r7tMZE79LuLybt2QHZmCpSCLy9FGiWAcnwbY2UxA3VUZ8quqKAcvC",
  "key31": "4YhKwBkMmbFozaiuB71AfmLBirWMp4GPvqfNnCZ43Pm2R8pYAPQpBK3ikoTdK5dHmSx8axB4AXw8T6CUgFj2FnKe",
  "key32": "4mdEdUpyqEMwoLjuX7UCpsTtBZCFbYg1AaQ6H5eJcT1MeLAs5LsaHpsmB9FFw1vMu3vQ2YPRhj5DqgU5xcz4zX8K",
  "key33": "61F5mah53apR9B8yJMMA99hRLhvBwphJVoy7hDVFGi8yPaabF6XBU2MP7woufGwQQu18QpCJadFauimy1qXdpE3d",
  "key34": "2DLeWuYaZPNZJttbFTgNhxodFRfJVKfufcraEnMDZbwgdKZL5wdvmN9cJAUzxPwfMqgt2ouvQGS75Xwsx4eLyvux",
  "key35": "5ZJygdjrg65Nzuv2rWvP59X6gq3U14LXQB6mWh4dtkz5e16PhLFYCS2hEuapZ2bc75hTrKexoo6dN8w57cxjBhZf"
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
