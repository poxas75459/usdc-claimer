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
    "UX5aNX84mMvJX4yp2s261fbuRKL4nggjpUs5wg9q16hjcskgTJvJng3CxPbQ25ZK7PT4GxSiHaZCxscwNdvWQKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDX4uB6oHtCDpJjuUtG14Saq7j86wNMsj8WEq8Xp7bECTVWFz1Wq67R9F993Wk1H29in2nSLQ7KaR7CuDScXbdT",
  "key1": "4aAfuWFmew6Dv7NPMVKn1Bw7rZruTyoWntb4c2wgG1vWBsR6WQoyBrot7fnVdJLoB8bnVi6gq2DXDC3og81QxjhE",
  "key2": "s5eTp3eNerrwJwohwD3bVKE7c8XK2rfex61UdT9BuxYuEAszaccaFyUtnpfiLH7u9fqDWAEcXmWpCXbyZsgrcsn",
  "key3": "5CTeGVTtbcUtPscc5LqZujDBdEYJet6dnvjYGKAkbWTsmHdrZ4y4d7hK5Tt3LsH2p8t45pgrBKr9vBfTJPjqf2UG",
  "key4": "4Mo6nUjGiXuhGbuwDmzWZAY319hsQag7PGURe9cfi3w58JQJCrDXU8cRyiQEe4wsmaH8Eaj5ByAsymL7swmPQc7q",
  "key5": "4v6zrjk3RtRGSvxGATZJBFBTRRb7auZ6nww5smMSYZzphdqKpwy91PCmjcXh8c54jfv2g7JiV9HWpdyBRZqSVoUQ",
  "key6": "4vJixPsSrRTxmxet3wptjm28ENBgi8K1iL4ozxrSKWhuvDz5oG7fyV5Bs7Rx29dAtBoUYacGqbNhf7QZy8ia24jV",
  "key7": "4dwUH8874VyaZBbpjzsCnKEgqSXPtPKd5Seu8D3X8rwrB82U7sKDX3WHsnDSsJ2xzxKnSscGQW83HhK2D5j5nqUY",
  "key8": "2MxuRSTCfU1aTHCpY2EqHDaaZkjXM3LFKiAaa4gt6SKtamrubXLH5ELH6P1eacy6PATwboj1y921WAffzBJwVg3c",
  "key9": "iUFUV43Zat8c64WqUmwX3TE6TCZyzEVYjvM8ZA2czXedwPkL7MquYkwKnGHw59bay88iSvFuvbULtwRnvcgcgwj",
  "key10": "5DgrBozbz5pW3JesxncoVikXyFgELBEPFxTH4Tq7F9E1DsdmU8Kdpce524Qwj5o4Mx3vSwJcx1xD63kxXF2EuMdk",
  "key11": "2jvb2ogn9AKS5YriZtTbkyJMFsrVL3nDTrGaKNwHd8FUnp4FxPwdrVxCjNjEq73cwHjbX1kxMTqtjzYXoSeJiGBy",
  "key12": "2HSQDEJxNhedPMcEpmGt3Ku8FEkD8Ua5qYVgigkPS62BWKpNcjjMmvV28ikkdXc18zQd6dvYHR76yhRNrjpEbeof",
  "key13": "2ZApPt6MCNFFfzVNoBsxEpD7oR1XWRaCuLVGyza7agcW2Jm9nidGKj8X6GgMEgP9qnVRzAwc5GwWCbXCsU6Hikpz",
  "key14": "wxjueFRDUMWEQXRNiCmsQoqQaKeYBJDtrhkYCbx71KRxEuHpLWBhSdByQpHjTnHBymh25Dcnigyh8wv3jBQgQPP",
  "key15": "JAVNTLpXrj2mbHgCkMknADZNXLnMJa99aNhzaBZi9cWSqAWTQSCCvnesdwKhGpsEGc3hQxkaadW4ZUhfEwqkH2z",
  "key16": "5ZUDSvLnTWTQZeh9HXfBUMkE6s7Mc94gbdx3LHS25BEQkajKnU6p3bCW8cf7yifXT4mcKXjJDvT3zxfKoXS2jWAg",
  "key17": "bzucBQKsLr2XsJUcjHTxBgeJF7UZM2Mjps9wxgApTofFoVKKumQ4Z8atxd3yHruaJAyBmZVrhWXu3t2DQWkNb6v",
  "key18": "3kvFfhK2sCTY8QZDoB2bURutAhNE6jqQbHxrDw8pSB3d4GhJNoXVMa9aZms1UAbynLSXpdFSt8mWufr4w5w6HqJa",
  "key19": "4MH7TrKk14iQKB2fRceSCSrspGoQKM52oCyYUAJbrUNNrpShke9oN2KqfWk4czhwssojuvtUqzQnTtq84krCF66A",
  "key20": "3VZQrKFKE7E9NJHurKq6Ggb2gv1YpyquDm93BKd5hBrEi8YtDC5PHrTq9hmkDLdGkQhWArLuyBiaRhF4QdDNCScJ",
  "key21": "5rcFaA7668eXv1HunjB8tFC2BxCYeNB11i7UBRBx6xZnnw7x5rHxJMejEvRyrGhVFs23arJsCLw3XibjdQJQBuJS",
  "key22": "58VKXYqcVLrW7P2yfs7YbSg1ssEHKGkVVshFWHaNCooc3aj8DJZpXNTBXSKkxpSmEDtkjCmxg1WXnxgwEVBx96qn",
  "key23": "4ZNPC4NAmhcSKCq595mXLRwXmYrKVmWfQiAZra6qmuN1pnkzxmJDVxTT9zTG5dPTVFSLzEwnVmGokJyeJR7MYv7T",
  "key24": "BDdMZkKSNqugpsZFf6Y1GCoURGW79CkU4gv2R94g89d53bpYnHt31HmbdXqLi6V3ToYVeTBcqFgvdcyAYdwNyKD",
  "key25": "32oUxVj4hkTW9GAnUAwGotp3UUMrKA6gQc7cPRUvpbVyBtLEUHRrjx5Ab23JAQYwrs1cYrHFduoJXY4faCDutaoj",
  "key26": "2E8WH7fmKyx3CGnzYQVRo9pzywWRoGFvYMXcHgHfG8NP1nEnEfTFL4JbCiAi9nJTBrRbAz1Vep6bL3z5mCLeZCnp",
  "key27": "TnTBRft4HHgt89WttqqpqZbDpPnpeBYGq3CbYLaoZfjXRt3A4hSe3tXnCJtJDVNN6yc3xuZpE1Ubcs3Uif5rT7h",
  "key28": "4sssnQNf9Qv7urjDbaw6B36VAZZkaFKXCS2uEQd7UbYBMrP6iPLqqGWhT1iwTVXBpw3DZW7HgKDoc1DFfjp5NSPK",
  "key29": "3KxRr26b6DxoHQb1NRp3ncUceKr4Ue7r3DhawScHt82RszVUXzX1LDmcG19uY3AHe4EJtQoqtCdCzpYNnN51WbZ4",
  "key30": "o8o2jHgNVk2SPetdTmxGKYhXGBte7PKgYfNV92ST5PcX4KZe6YqDnzx2jq9cuWJyWjEHjaC9mKkaxTPjRfsBP8W",
  "key31": "4L2WhcAsntTnmJeqGNFfq2eKdpwHmYYWRw6Rjg1kUFsvL9PhdWUY4P82XuiZQhpHfhAgKcabe4Na4PRSTvW2UjxD",
  "key32": "5e9PfFP3pv1LLxAkkjMHLbHH9oaYCfkywuCR1XDDd1btvjQTKnEsWBFXV7Q1qqS6p6XxWjxqu1pYcrRtCon9Xxgx",
  "key33": "5SauSDm2NSZMrjyETJYEacMB44RxbuBtqpujHJ7PNGdBaUtGHCqdDQ2mvwQxANYwEAjxtF7jxwfDZPR2fdrG3VNH",
  "key34": "5JEPEhJi672iecaNNYwaNLqXqBVQT1RkywTpfjig6EhKePezP7Ns7ReughRfhtt4aYDotprAhPUAnfPN1xx2hs96",
  "key35": "3y75ZKVeWCGdsaUByg8YYaMQ5MDQArFJqnXNDEUL8yuz28a5acW8DY3jhDWYJkAH5PgPXbSZz9PwVw558zF2KHeL",
  "key36": "26J1C5stxcxa7Tn4MnAKDyPexYtjsHEnPZpvHW8YGGHJ2Q5tFRUi7TzkdZsHR4vvHNjhSNje9qxkXXjHpQxpJaBq",
  "key37": "4YBqmAHocr7E33YpYycdHtQtEcAXCeGahdcUGjjvQUAGRH8nc8E7eobBRHEMd5yt8QydwzTc7iATQ31VpK7vvdik",
  "key38": "25TfqzXbK1c5DneE3ufcajwf8zTvDwoPqZhVufaw8Wxvwi6GH3anep4efwgAe9Ce78dUxWbazmfCxXTTc8qYiZ1n",
  "key39": "2dmHQBCfdPVrkum8wbooneE81irrHyoF1F2KTeZVMab6dq3zHTJAz3bxSZPh7Tx1a8HMpd4XzuemagBHuvYNz9ca",
  "key40": "4Dg5ArEABT7UXxiuwjWtF1GNecFgRPBpv58ZCUuT69r31AKExeByCWVWanANBeYgbJ2PerrvFFVzAdyDqSExLU8S",
  "key41": "5RF9EMqvrg7ajJ6mGYvHDiT44vWK5cVpmkJ3y8ihQ9bqC5HZSpMgmyfNPTXuVnFgBgQQebSHNnsoswUG1p6P7jGM",
  "key42": "3cdg1HfKsAkPZVh6V3MfA7VheesNY6Y1hk3FDmYjtDmgzMgAWjx9Zk5pZYmSnsc4ho2LURTD6wzB2GQdKsK3tmSS"
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
