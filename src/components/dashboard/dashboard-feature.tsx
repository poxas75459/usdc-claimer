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
    "3jtD5oyD31NyGHmhcGJXAWZACbkrmKmi3MuYVtYF4A8kh2puJV8cX1nM15z6NHoKHvJgRHQ3asUf1KvLrM75fRBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNmbVVT9Ys7132LeYrvruR75UU7Vhyude8RNiyScAiETLq5xtL8H1ZjMd9iA7rcjqV47G24NCCUS6rJzzWFjnx3",
  "key1": "2EUHafvd3siniRe1Pxq8GGZDJhKjSnGNLm6MeFh4Yhm9ufdLAQzHrXEnjjzHXNqUMzZpNerPXvuGhTdqX5neb4YS",
  "key2": "X3swtHTv3iQBXQjJR1U2SSXdqaGN6r1niZQinxbxYokJn2r69NNzQQaQDv2hu4H4Wwji7gT2rdv4fQYsfamTrzg",
  "key3": "3YcBEBJVheVgbHs5KwmRqhCvxz4EskqVfBnwyeaoSquThV3A9xrrmAodYNp5sdyhPaGUGyP2z7uXHhgKZDJTjmPX",
  "key4": "2UggTKxemKJoNGwEUDz43c9UgsiSk4UFnbhATX5ifEednwj5ywBgzpXAMT2WjvDqo31dXVC86R97gyQgnmFLxKT6",
  "key5": "3AYN54cWrRf56gdiektSxBF6Jh6eAeSJzTdx9RT8M7urqG4oiBdQKX13fET4Uwz6eiNmzRzdct1weA7rwHiA1qih",
  "key6": "5Bb5qwADEjNToSM8u9YL4hHJnYnFeaMe371ysS1u8GSXAumhG27Q7BmMLsEV7BvbGrXWwL8rdVi4Sz2h8qxBbGZE",
  "key7": "2hixFsjyDN4wzbCA6sKAjg9T8BmFdjokYb2D2FiMxTF7ZRPgs3t1P3QaTYkq3cd8JnTYiftDhHjKKtdUCFRgX8W4",
  "key8": "2kTCz51nC6EbvGR9feTXZsukeA2v9eoD6P2UhQurJc3kAdfyDHxSNdSb6iTW4HmBvuR55EkVe1H19gRq1A7hjF6f",
  "key9": "42225fGpMNt196FpBUHLyhtvqMsejgVTEy9Fb4Vc4bEZKtyDqi3Nw8XzsZ3iak6mXW2GNKbuG9ZPcWa4pFy4jxN",
  "key10": "4M39zfXAHdaP96TJg4uig2aA3XUD5CWGvTYumMPuFFNNDvmBMGvmQFShEdBREVxAhDHXXLwu8nYQ2ss4RFPWAqSe",
  "key11": "4d4tTUH7D9kCr3n8hLxxzUKvwuh6n5GAmMWYkgDxhJ8oH1CGAcN171xKfuwWCjPxupBBZzYveEPn7fPeEV9USYn2",
  "key12": "2n4WJ5krawcroXgxrYSYA6eZiidT2SPJGH5DU1nRxufPW2wv6GyA4rSTzGqPfNHoeF4EnFAF7qqgaEZPPuNBFA2F",
  "key13": "4y7j4x3Ew3cQUSi3Y5735MhtH8wwMRFajj8ZkfY9h1yZp3GZc5LDZXvCiEgWbbfg52FC65njm9h5EYxmTMSKMjbA",
  "key14": "5KNubuwbrhQBJHmCDmeUsJFQj1sRvQjnem8ZLQnUVLs8i2w6Vd3Z127xd5YEZ8zPwttJCziCurn2g9Ew7h2EKYoV",
  "key15": "g9GgP8Yk51mipmbteHZGZFijXKtB1xqiQrGB2HpRqivMrqzonLTSRysbjbT4spcYJ9LJBkie4BVhk7FS5vqCYfT",
  "key16": "5iz2QBoui1keumgKF8Kt8M61c8JqceBGjGD3Z8g523X33mfQGEqkujdkZJCAd73f9A5GzfcFBpdu8FWp7zMSp3c5",
  "key17": "4CJuoKjL1yFyrnC5TT4aeJ1n8f1Um1jvqHW176EXbjHvQmFncvQ7BWSqKWZVF4wZGyCBSGK6FCgU1m72sNVnH6iX",
  "key18": "2FierYdJfJca7wT7PmV8FkwNyZYxw1R7GqYnTEB3WFfXnGsmTgpTrdp2axtvy9p7QLTLoF4VPcBUcGEn6dXcpLkL",
  "key19": "3bLqw2W6gBuKbguZ6i1xEGjGqdecR3tA8xLzKWNPaQe2ZN4Ns4wkExGjWrcBaLEax53KuYEJVBzxyCzmVyPZfPqe",
  "key20": "2zHb4zq2HzHXGb8wi5E8YxqfYwiebk9YPxfq2p3wpAHndzaErhR4trYHadWJDuQJX22YvS187Endz3nmVPo7QB63",
  "key21": "4q21YPwzeaNTy2ijdPrnAMmqtUeMB96s4rnaCFMTb6mYWy5UVCMaAbgRdxbFc6GZBXR53hZiVvrr2Bsg1j4AeB1P",
  "key22": "2uZiwWjJtDqnQjgzKRMmg1iqkSPGqSHwxh7qyBvN4WqH8YpraHrB77ivwXtjnsVn7bwXfNkNEnb7A5Nvh4eLmZ4T",
  "key23": "2AvMKv5H8T3ZQs6B5mexvDH4bEdXjWjLstuZaSQSnL1dGDY1pgudzK3iqTo8TQk6nzaSQC4isvCqnaHHGhje2hg9",
  "key24": "5x4ff9mH2MA32QXu2K9jcS2iUDsQNhm7Brap1isZzjk3QRkCvEayhtSqy47MriB3v7RdmkXGpbWpUrv7XWhED7wF",
  "key25": "2FvMDudJh1rQjWhSDkr68MNZgLi9ECSEDTSJnngiCRrUTc2ZQGmAPQC3AN5273Ax4wqwE4jfesbpCKoTCNPrtXm9",
  "key26": "tFhcnXT8f23btZv49MEnYruwv3ZNq1GDm5pQ9So8W79YH41gZkjt3JMMNGz1qREFyqxvwmgFhEkUuLE3VYsveQh",
  "key27": "QGtQcQQkPcg7nVizWKZY5MZVK3gH8XgZNZiyWCW5wm2q1o5tbbVNpwVBy2iruGLKo4Ap18nGF1AhqUaoj1hkXww",
  "key28": "zp7YWBah9n756p4AN2NQ2AiWsmWEKMTmcgJkGmjQQ4siNF63KJAcYZrgfYao2W3Cs4JsmPeUiZAiSPGnWTpFubs",
  "key29": "4mdg86nnxyZnq4pH7xHT8hXiLFuxT4sGpwqpMD8LTcCmBa8R6H9p8tVYknPzzHtRTyWCwHoCwp8pnCPGknCev1eL",
  "key30": "4fwEda4rRdbaSEtiVAYGbVkW2P62s21dfUSVT2FYdsgoZoBpUcv5ctF4oSsFL9WJiZU1qwa1r8P5JsSi2GxvVK5U",
  "key31": "3vUUF2kiMV7rCoUZZcybb3yEB6oES9mscQ1x9iwQva7ogKRSLc87C7V8HPLSUbvR4ab9GnYrBFDQW2Wh8mGgVm5x",
  "key32": "48WXR1VWpDS7GatfkbmsexvqxdMt1AjDPHGYC6oDCvmgT3mHfbEvDGYw8omxuvxAEm19dwqiCkMNVx4GjRX3Yg7T",
  "key33": "328rBZe7Ppp4TeGVkmj29RKp8xmQ65STnPZBSUFqqWmcmA9SNvrogYqpbqYxx5BJ661AFB9WcGYTTpsso4mzb47J",
  "key34": "5vxcVihfgQLetRGDpuwJqq9zT33gZUdq2FV3x4ZMxxYFx5qcyuSENwtVAQ78HGTkcQXgzoTEXVWNPCR4dHN4Cke",
  "key35": "5qwUjCib65YgiJXNkix5yg6tc2y4Wwze3qMhc83BgW1qbGibHKxSWtqvHKrkzXuwQA1DCAb9BGqNgBGxkdqG9HaQ",
  "key36": "3YAqfSXZeeSHeKDxr4pcGnJM57qsw9TcQsjkUf9M8i7tJwa51P8TxJTNn2qqfp39jnkwAuGY2tT9u9n7dPUhQCRF",
  "key37": "4WnAbvSmafP9P2funfLiaMC5tNorTBQzHu6KPM8sHW9aPBGM9rRzFTXeaU6DA8eRjS44HU5Jiq4jx1HY2tywuh62",
  "key38": "25raM76NJ4Bn4G5Hjn4ktN1a2cea5JCy5XbdfYL8M4rcAUVccji1cfqchcT9roYr4KHueeU3N4NhgMC4KoekXLta",
  "key39": "4VQM8xUEdX76yjXnXLFYWXCoV8J8NPD1vuBpcagNWAHmnbpYnbsmNkiTuJFRSjqSpXnPJsciKapJNr9W8VWBwj8e",
  "key40": "5Pr9yD2o39cxHmJjnYp7mJJPfo6zFzJf76RYcngcGwoeaMaBwNMvs3C97ot9hRSPfmHijF8ZJgtvqAep7ZpYF5Si",
  "key41": "27JUdn6nivFoSeyZtNYzCbeKENPRmDf3sDCE8FSTGne4mFw3f3dtiA6Hy3Us9sGR6gnEwkG7FzgxogpUSAtVuHxi",
  "key42": "2Yn87tReLavx4bPrAbCu75GACiNfp2LRpg7X1bmWHYEQW8zJv9H99vexsyJr4EeKm6Lb3WJD4taWJiXEyhPBpk5a",
  "key43": "33KgnoVA8rPKA9ParCxsxPizKyHEf5M3cPPhGGqVPDh3HjvAXioTcK3FBEwwB6QenHGwuNTFQhs5scoRzeow8sNQ"
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
