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
    "XoG67ycLChMQU2fwxoPKRQ8fSy9kUgnZtQQypjJyk59dbYm7RDb2k1dbZFEZmX79QFv8CUkospeyXUR3V8ZWSBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xbtQHE4fFxGM43gQudS3sdRRRHXwFgJoWKh9UXeAVT7Q4Sk423ZViJDoGFCaM4WSan94YrLfU2mePivgQpJiLpD",
  "key1": "4JbrYqL6b94vUbNa882ZeY118ZHrVLogYSULVqJs6VMUUCUFVhDf9xNonTD2T3QDtCB3kTKp6dKnkrQmmTGAMzQb",
  "key2": "Z8NDdqhh2YbCAaBCeifi8vbGqHUA5asPqEmnKkorfrj7SupxbB5ATHZznNe3uh2vYXKQuLVGjGknbfrBsVvuUkj",
  "key3": "4t4L1jCddbXYURqem9G8boP8jscCRyJ76iJnb4VYwxckRLsU4VhN5vjPqXencTesXaxw3ZYxiX3pMkQitGLAptbj",
  "key4": "3HVo56G7n9v3xJCdQ9GZcj5jtVY2aY5UFBhnMaWT1cty78vHJcQQZzvvWDLkZk1qdMhZjaSJEbBJ7FPbkbkWgs1X",
  "key5": "5o77anRVfDjYvkhsnyfdNBpdXSyqtguagiSLki7dEdgQkzBkqPhh1YHrtgkk2dNUeqsFNaTArjEW7TSDoijd5S2m",
  "key6": "5ycWP13YMLG4tcTbywgbex7xXnJnisifnQbh2aLULm8ojotty9AHjGPdbvQoQsw1UrRiSTavdXcMwa6wYZb9YMz5",
  "key7": "5GsdzmfCguimwgqeMZfgPwozHwhKSc5tuqMXRtx6eiGC8Rc8rEADj9BdvcinNEsLHHdrQVipH8wTdiNBZ8ngiduU",
  "key8": "4xRZjnpBUUNsh2kaGYM2DvrnTxHsw6tiCZPMhSR276SnLp6fqJBrMjzQosiZdfmpkz3vX9ZReMPgDmtV1GHYBsuY",
  "key9": "3DCrk6x5usEaQLPkYDeFtxZdR6STmHdsb2dD29EB8m3Sw8USQVpR7b1oKkEGc2xEbj1DCNbiV6kFGmTQGnpp5Ni3",
  "key10": "63hDc8objmBMv683rmK3zYSvdXWECYaXjBekeGSuXgJqRLRmeMqMMa9WR7GTHaWqcXCzUHwVTDBBp9gPkQn2vVq6",
  "key11": "28tvPVmP6UByAtMq7q7Mk6wtVgMJk18okJTv8cs9PDSHhH5ZdTduXHdGExSiY9BhPTXaqFwE9XwFvPFK9Z5ZkgsV",
  "key12": "1ZWff1WpLUfNajocWvk4T3ncTWgwBiqn5h4aqwQC69rYSEY2mjUN5aXzPx7UhMNyr58aP4pHcXuCvxS3KMMLFEd",
  "key13": "3AtsTdfDg1cfsPiMCVf7HtTYohbA29mT8Begx4pe8PNU7jAq5ffmAa651T2qH69a7n4u5KdjTPTL33JxYVwzMspW",
  "key14": "5y8ZJHHJJcbFooeYZkCJzd6npQ5m6pyjamHhRCxL11cfD1eGwDvyUpRBDJpzqehFPTCVoisvoSMsfn4qwroC1Swr",
  "key15": "4kC8uFvF3zF9s1gKDdy9QVvA2YxcZ4aSTWHQvDRApteiHigy7oDpbyc8KjxXihbchghLUYWSrDPWp2Eq7skEnNkW",
  "key16": "26QMKUZUiW1ezmM2bm5NErmjptd4SheJvwzNmGdqVQ952qYHt3L6BSzFLGW9GmDWReiJcqwQwrZBBLtzD8pB2EW8",
  "key17": "4u2EkqXXH8CPaRFdwd9Q7L3vAv83WUKj9BZ7UNxAawJPb4jwujj9tipihsCBaRBrqV7vyAtoEGvPmVooimGh4i1a",
  "key18": "2eAbhAQprkbyPX5gBnsoZsMHjAFfU9wXBitkHm8uCqoyUZC54bU6wxYzsd6kRxQaDqhv4gcLhDAJquTwAeBnLJcc",
  "key19": "61qSYJujhSzqdp1aUfGEV4DdUqCkMQMZg6ENPLYyfqgjBh4SUNhqQTwvuTwY6rsdKtosKBAJ2Qdev7QHukdrWakY",
  "key20": "3YtxeXAYmzi25dCCybMDnAKK5vShGQdpFDeQnUJZhKnmqyrLRZwVh9Rx7SVaG8BXRPpWZvp1iZcKvtmZqp1RgPyo",
  "key21": "iB9REiUyq9Dg5ra3THL65LXYws1ca7x7c6L3r6UFGKLnjJanQkexUrJZzsDL5fdFndWbgdwuq3Hnimfiy6sY78E",
  "key22": "4p7quCwx4SBW5dWeG8BjMEYuHTvzMfPogcinUNyzPM1D4QdQdVqn8Bi4NssUmH3T6CXNx7nyXsPH6ZqgpbKqsZYm",
  "key23": "4KaiAd8xUUST1yHDdjsRWNFAwDPTxcTYY7kZ7H51hGCQxX7aejZPr43YEsJJwvVU5XNA3dJmBx7KZ7dZKBw9obVx",
  "key24": "3Z85kfqBoe4YmHqfVN4M7kUXejuAD2Wi8PfmqrxaN1e3JEGgdaACgz8HFEQB32zuhZ4FeXVtGCQKsJw5x4sv6Agt",
  "key25": "5gTuduVW5wkLVKDVpdk7mGti1yUkg1dC35PftUaEHtvAxxKNZ9zS95fTZ1biw1D1EYnbctLWyhdpAgt6L7PbVQuh",
  "key26": "T3WcgSSaLCVVeKmYc9MLW5Xpsr5i7i9KvqABAqG8gBwn5S9rswQVDDjX5hvq4CiTQ1Jf9Wh1LySyMucA47FW9t3",
  "key27": "2NpLEA8Kx1x2KWnMnmnJTxBGLds7g3kUUzvADmfaRSDFQERKuPaWMzk9G88uvAgftXoJaYDx1aS3WCkYmUw46TqF",
  "key28": "4KFxUVvVC9z4RJ1ihMvS6kJm9oJkuEwSoUs9YnqgoaHY5B4cfEBPnBsJivYyS8f5RLD7BoFYwZLZLKRRPeckeRkx",
  "key29": "3unssQMmAnED48rc8H7Qw4aGP6jNcBYMQt8o7uq5Y2w4F1UXHUKCDXW9vKSpnmpcQPH8rxWahbyuzhUJAgo2mXXZ",
  "key30": "238sQawG6kcBUbRyaVQnsX4VyBtvcioqmjkfvWjzCAEE68fMXfGCTHMbn6JT7htsWe3PXCwdf99RP4uovqF52aHA",
  "key31": "3vrofUYo5AUjZ6LD7dy2ZJRe4qNHXZw3LSaE8oni1NWRDXHYppPSos6MzSjUB2PKpDCHne6jxMH97RoXU8QeL4fi",
  "key32": "CBhw2zs16oJbJLYtjXdeoj5oLvkW8CouwmyuyBPSbo3wVq4ApqRLnrj1hXKWdsACtvM4CTuorBJtSLapYjAv7s7",
  "key33": "3Tsxhk2Fs44hY9zhSAw7ygZ2dZczZtticLcf81SpBsVZnG7dvPUqerDPK2uFVQUmPnTkTjPZQhEEQYpBzFsdHzJ1",
  "key34": "5jKHR7kKDJQnzSdC44MoyhLdpQRCE4Jy3CXfdKaKA4a5NkETDoWB7FqupGkvZ7wzubeSjCAi6j5CUoT4ipSrX6UU",
  "key35": "62gC7kLTnLgbZGW8DLB7FbDCuAMqd3om8HUg1yRsg3UvS41Nf8xRFsUiasWinyPdHe4Hhk24Wd95gQ8kL27RMDw",
  "key36": "3YTwxHVJuEfx6Uxes4tzLM1ZrJs7F3sXAxJW3hfhEYxAaRMUhR4zWESgfEQSZKo84KxcAtK4NRmSGy2k24JJLy8q",
  "key37": "5qRqBd4VH5ymSuVRDpBEomLJ4bw3Wrcut1j2EwMh59rGCeanAEpxzN3wAspZ6uEHkZm3m2py1dMUiEjMqSqQnQb6",
  "key38": "551JmXWPLtA1PDN52EsDKqj5UTNGvQaDGLD72pyyguu74HP62ZSiDsqV6ApVuQ38Qs4v8qrw471BfEnANakuUF9e"
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
