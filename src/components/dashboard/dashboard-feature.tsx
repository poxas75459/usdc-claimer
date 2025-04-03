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
    "3HdiJFAC11RW2cvkDmhtQ6Kh2F5kudBLC7d3qiXHQ1iCZPHMuNhAyhnRXc3E2sw6Cv1kfZ5D4CgyGXigo6yH4k9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EUqn4gqZ2KVAd5WQZvFYAE2yrRoXoncLJtP9sFAM4j2RczQVGcQbMtVkXrJHpFvF3AExzPfvrLo5kXmPu9LWcu",
  "key1": "5KxRmrGHLSvyGLVBbtVEz5w3yU8d2jkTQyScXjRmQWbp5XgEd2K64jZeaYHsZa4UJw9pnYN3E1wQJLKVGB4aNRGn",
  "key2": "3VTprvh5zrg5vP2w7ciRUiXkGUVxZK5phrBQXNYnAxYXofGBMPXagg3fWkjRvcScNCSFmUjX5HdJbx4ARpuYXyA5",
  "key3": "3C8n2q1uFGBfspXmoJr8PVksxWRNiZx4poCBMgSm39U9jhibt5Y1ZGoTVcZXA7JmyXMidWQwMxLgThACxs6Be1ZQ",
  "key4": "5oPL9WYokFy2Bv3rKwdPykdkmp8dWN9gQ2jeeEund6HKbDkEYcfitLcfFcHtFWui8MjhNXeX6y2pxf48dKx81CDH",
  "key5": "5ZHVUopJoqJYJCgPktVkhmxdJffofP82bMptQDn2BAwBt2G5hiBBw9vEWCDmgYuybhQkkVaz9pmejioN3iwXr3Uf",
  "key6": "2zJoCzNT3hnW1wjKBTiRTobyqUSyy5HUkcFzJ3snXda76RYtYF5vFxh5j1F84nSyumsvtoFjfQSQvudwwD7RQgui",
  "key7": "3vEy49ygvTyoA7bFzWBDXDqtFBrFBaMSSZNmTSFXjbyqMipeuyTMvLzj73V8fAXG9sXV8M87G6BnQfL8aZvzLGnu",
  "key8": "NN4uLJ471ja9cmnupnxVANqrhKRGqHrWqHAKaDJhuxkiC2tk698SNJp16RxAm4oRkJbEwewGFzQ4rJ91NmYbNq6",
  "key9": "5hroCShZXS1ERpKDQYXT5mtVAScsmzc6hnY1oaF6PXbGcmrLZ5nK8hYyHWfF9sSWAGHzEx7em2W15dCMi5fCrzbR",
  "key10": "5zMVgstBSMq3Va4UKz1hrGLS8bfUMwcjoRi3uPxmjZkySePEvu5Y4iDnHiHvzSweXrk3LdWpZ3a4FKdRnyr4wwEC",
  "key11": "2M6tRAz1LbdWfQZaMQoQDoihkQmEYcdbPDTT3oq4hhvGFYmF7p3igeChyQgvCrPiAPpJ2nrYjcgSnfAYgPYsoHEs",
  "key12": "2YXbhLj3dZVSiK3FkN7R8ixjbtvx3FaMn8LuXT9WF7YEKg9B9jTqaZSGerh3nsSebnYPftnU57ts8YJRcMAJWnaX",
  "key13": "6rM6qDjhAqZkYArNEWCxd549zchY1ry7yz9pzVRBLKAhNtuoTKuGhkJGhzMBUBqbtEAzfp6mV2qWahZkcfV7hyt",
  "key14": "2dGUrzXgqXiNeuR4QqryRgik1P6NViDwpC8oPfi3PpcqRV9mTdRTnvQ5fbmS5GTsfUUZrXWEvTPAKCbYGZsBpccG",
  "key15": "21Ci8niFPF2zoNXL6cwwvaohhAFQLeKGgqH5dDnLapLo8Dr4FiVLWj2x4mw1T7ZiAeY8X4nDL5YmvhxpftzHgcUW",
  "key16": "4eddK5k9SqSuy1NoEcLjKYtYuyAQXU3X3jooQE3Nm9RNXL3uXjaZqsBj9uUomd96QmYgkWbWBhB5X7XxZCEvyJQC",
  "key17": "42PU3VyUUunEtbs5BELWoJ4LKk3zgF7rF62NXpXLQPg6bctKdYN8WhafVU8Uxqemi9aFXhxRaGFfbkMka58FG9bj",
  "key18": "329qe79JfLGYWfEjQeH6PZZowkWCXCkXAZKHrq8ZaZbU1PJUStf4xKHXcn3JKaojHRU7UeBHf1JcxC97sEz6bs6A",
  "key19": "4u1VkSjbpMLuugMmPAxyRQG6DesJVLciZu2jTU6p1VLiVVeQpf2tLX1xPzc7wzPuwA3r3TVVtmz7tqEAqjSwmMX1",
  "key20": "un887YgHPS2Z4VrdqJpdB8Ebn7hYUMaf5ZKNb8mFAAw9a9iz44tPzUD2LjK7gQPYc1ydTktLYLFVZDPADYMh3dg",
  "key21": "ofmeZr4ZuYpRg2pttKPhwhzETEsK8PyUJ78QuHAKwFPpUMwjeEczk89kzuj1PKg9Vy5T1bNrFnGSYnvN26dcB5Y",
  "key22": "66g65yDp7YE2NA5ZViBAaXCjXctPXiBijeM5BAFfDc9AA5aYaxGbSBetpydBKzc5XyjZa1k9P6nBQMoEAcYVz6nk",
  "key23": "4aJeF517vskZ2iTYMvNaKDUSrssEMTVJU2WaKxB2ScKhCPdMy5fHYe9mKk3Gu3NPKV7C3AoH82rV574fPPvmzXS1",
  "key24": "2PgYSr7oisMF4L3mQjez4wmDBHAFEoeDVXU9ykETcwg1ChS2SPRzMoasWqLo42SRcd3SUcXCe5USRdaB7Acwvg3d",
  "key25": "5apWtErvKXfRpVQ9cTDYh91XwbReksvTvGJqLVvDTb36bntvsfVGUodudvyUNkqw6gNb5MGWGLQLzMdjWRdzUVJw",
  "key26": "2tjh5LReUBF69wkJNy7g8NEh1c9AnBdYTscsmAPDc82gyJmMQ6bmzKEK7mPDPPgxrxLSDR4yq778EqF2UdoUYkqY",
  "key27": "49Si6f5wtK1zx3eB72hdWxHzAh95VPZxXBahkTUYjdN7cxA3xgZ545EHBwnwo7nVU1RZgv1xNYRwuU3bMGhi9eNY",
  "key28": "BbEjCnsPKpTkQDgazLePfsAtT9tytqpTdn8vRY76SSAUVVfD8zAn42SYeyarQMwdpfn69cuF9HWWAsva3uwZuXj",
  "key29": "2zivkxiYVJbj19b36Dix25VFRHb4a9HDb1i86iFxv7mWwLGEbVeMxe3PpmvhGj2aLLEd1KGBE2QR2Ty6WDsEBu3K",
  "key30": "3NKbttSkaCAYNRzHZrnYdZGmFgGz9h7jHNYKTugvE8JLM114UXq3q4S4uiimkVMMDD8tz9eDLvjaW4a3rEkAZ2nC",
  "key31": "3R17JxpxUr1k1DAxPUEy6UPDY8p13jgQ9L61G7aUag6qJuwH9MKjd9LgF4oRL9YhBATyxPGwckzP5NndKWVx34T3",
  "key32": "4x3CTZuTQtvwWtbHiXbHXkEE9i1e6pUirZ6qfZwW4DjFm1MSYUxvCHJhkNkCSsXUHDhJTAfZ7KFpUACxJhqJDLhw"
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
