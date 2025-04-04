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
    "NfvDBuChANmaT1xcszZtcS9bfYxXsgFSYYJsMbdGTR6n4nk6uMubtNPTsfNjw8yBZLJ4J4fbBJkg5vj2TcLe52f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WT3V8Nn1BETzTXWgn1kCrUe8Z3Ey6EyxpcwQw88VUTZYA51BiHVWM3GDEiSX7sys5PnxpGZi9kbZYfqfos2fHmM",
  "key1": "ED5TgDtxbU1mmk4iPHPMJcyLaYxRyfGjhRTjFFSZFEaJ2XJGyfBe566g6TVL3iWTAyawhercQbmoM7VPTiDnRwQ",
  "key2": "31PCA5a9K3cSsXr5YV9EMT9fDEgqVBeLpqiaAmgZc6kHpkibuMVNjjzPZySTXz83SaunMxNXYCmqKEGXB6h3eDif",
  "key3": "5Av6rsTAW7BHTEWvoyeQajiyWV2em1pkfyep3YNELCqTpQVcw2XQyo6hSooHUbUcan74iMVGZZvn22rAY6Kt4gae",
  "key4": "3dUcfTp4GogMoU5chWg9NzA6Znp68smnRbKL4mUHKwGLg7psN7osSMcRSSxUurF37UnEMVAX6a9rCJAHpwNUAKEV",
  "key5": "34f8qNkaRgN2G6rBzmgARFFdTph2ecjUbxN5fGWbfLuCRmgKN87BYFeqseRU2YJxFk7ijk5PqHtTzb1xMgJ4JZrN",
  "key6": "5oyzit8gYuzEBtX6KJS2WN5vmjYMtBW5DwxR3q4TfCMX4eAH3k6GWadQc6YcPDQK4aPTbduiSRSeisZZ6KJ23AYY",
  "key7": "35CKxdBQfnmwsH9yxGnThvJeDxdZDh1ucXuabwnHDg18Fjz2HQtiowX5gnpNvh6kAoJpgsUzZ2nNAog3EP7JHPLY",
  "key8": "y1XXeGcdZDdA7RuHYVh3hKXhpcYxmukUt6n14kPwnWEM9uXtPB81oGxJXZdpVBNUyceoLNsPvCEVWHMSrAPu4AA",
  "key9": "H8mWHM31zT5b4cLnZMXKTsfnkVcKnWCkQWteVH7MBDHuSR1Ui2KeE2JsivVtWLbJ7w29p7be9RbxpUEQwqf6ZP9",
  "key10": "ervs8MEg7yBBMdRfaKGzXNrVg43ZJ6EBoaeJzbshu84Sv4KttBWs6DUDTehGaJRwWYBP6CoihH8WVhFYDoKThvJ",
  "key11": "5tnU2U6vY5ieaUPsH6GxD8PEPgMpb2pAvWyiFFr6rjF7Zn77GVMapcotR1Rga9fK54smRCrRrjPxShKwJqkXsRaJ",
  "key12": "pxLSZjMZXz1CjydSjfWsVM6Cij83Lxesn8PSM1spuj9sowCszxnmruJyARcQbhgGeQvqjZyWMie2TZeJUg4PtUP",
  "key13": "u9FjesLXjxsaCqykw4ViYhQdTWvRNgxNov1VrU3JS9bQmwo7iiJJA6BGTcfTUTDRxiNyku4vzn3b5rM5XPAsftd",
  "key14": "5d5k2PBsRAJSFiZzUYNztRv2giEVNgr1NCHno3wbBQPDc9WrpdfLg9cGnAfvLdvqaRFWuzEc6d3RmXpxZQ1PYSqL",
  "key15": "21WbbnjMz2Qscqc8jPkwtEd8qZEmpwL2661pizdiRq41aG1SDzxvrfVfzwaZLvKbHMevTYGeTkkVQqEKQ8jahYQn",
  "key16": "3hW3VgJRd3ZnMgHGhR45aXobGbvFW94z5URC3MN36AwitKPJFbFMTuZ2TH7unXq4mxZXKM7Ugh2obFYmajpQR1bs",
  "key17": "R7h2D7CKWzpyAC9v3YbkVzTvGYHpyJLnZb8YMiAJjwPLqPFHoQuUdoaCocp29UaMDjCzZMLi3NWxSLWJUaBxRje",
  "key18": "uMLNBRjDtNtFNSRyAe66NkCyPdQAMYaJbP9TVvEx3jV2zEPf6VGqcT14DCS7hhH3Uw2BUXArfUYsiiayaFW1FcT",
  "key19": "kBuyh67MNbnH5Het4eN1SK35x1AgbRMGD463Xjx7xq9NNbt6CnogcdiScNPid5v8z3ZQEhTBtGPwdvDdzcUQQyT",
  "key20": "4UGrdzeKkaBLvABiSzixdkpUQ51yyk2jeY1XJ2HttWYF12Mkb4ZpJnWzgR8fPEdkFDmawPKnQtAQGnF6YoDA4QGz",
  "key21": "4WSosYZ2pyEibKGT1HkWDsnCXQBL3eVPypczzQAEd1mFRa4ppwrnTAcCT4iWJWM6DRBFtrdacFpv9CsDDBtmuvBS",
  "key22": "4MhpntpxAgsE4kDGBBmVaMUe9GnfS1RQH4AR8Tm1oCiqihWheZuxxFYCFRXYwbSGLbgHgWramWn8WACjjBSWkqiw",
  "key23": "3pdcC9dek9TVNdV8ggUGPry2vqoDYzSFxZoW1mD11SfQ3gU73uA2k4SSqwHsYbHEge18aTwM63vuLunBoMvn5kp",
  "key24": "5ZdzYrZFvmNExpX3sTvuZioE9ib1H7s5iePxLrvZTbrQWZX3qRGtPYTL5Aof89nSyyX8rQ4326jeC4eC3KveM6kB",
  "key25": "4w764SsPUVFNpXDexXNADL8UNgKqGUL944U3jgBZ3RMuYCjSxcvkf74R62E6dqaXAUKx1HcfpCPBHcjBXsP2vHKA",
  "key26": "fXBsCnfud4xEZspsxBK2BJAnyGhLFc4rBqyRtxJWFERcVwLKycVE3g6otbRVxs4UGqY6ub45p2cs78Gs5iM9erF",
  "key27": "4BpBJTaS53zt1f5AjEHBYAy2kUtnP2xF7G4e4yqWgFjAqSLc4VDfe6qhoEacEnSsiEJRGAqRQE4jeZwUKdrFMbVg",
  "key28": "21ZB7ZYQ9KwysPfBy27jYFM5WcYG8zZHNAUGQb11u7GX4TYVAEgx2oTmMdzTe7cZ97vMyxWZSFqZxWfbxYCZ9XMm",
  "key29": "3zfQWdJkpFyDdEb6hH8GDBngQhymUdHgwZiRcrmmLbCVoobANwWpRV7R6JTuBNzAgs1EwZYLpNc7FkwgcaQBYUuu",
  "key30": "2fby1rsYUvrPZaukay8bJLaCuDfMqyntRbCjoKD9xpSQRkr5J6XV7w2ebqe4xDngxMpHDNYENJw17BL4EjbTuige",
  "key31": "3EG9tcwg7jR9hicMrD6tRfoVAGWvYfYanQSyuP3o81aRhLXRCuaZAVadvFERf4igTCA8eQWczXWcgYr66sEKw7Un",
  "key32": "2UujC9ntzGxmMDHJ1PPihBeXh4ZS55cComjxqehpTCrJGjpLj4WqK3Twij8pTqcTkw1epu2BdL4uZVNNwLkZA6ss",
  "key33": "oFFqzHD7naEVbu3WiFCNENro7FnPq36wxUmXV7Qc4kyX9QfidjNo2FUtMdKnp76m6kfEGd9yng8JqAVGuW2ZvnJ",
  "key34": "63E9RkcsZdWwqNqZm8TWMWof1CRVauLYZ6xGggFTqP7rdFbWFkomatyu8CMLfbxqBBtMt8pPd9E2WGX5ZCBfuaXu",
  "key35": "4AdHogeu8Rzucg3VKJBUDMaNTNnZLk4CtXfZXSu2ZhmhUzRavXNc6aoYmtBEoZyhL9is88TtVXxkGxmM382V1yZf",
  "key36": "3tT3HYoZv22xj3AYRZWkjvzJNHeJXwXWXK5Q77Lr9duPYteV9z5gTtCNbnBnmmrZHa6FXth2BdFdiLRtmUyDWfoF",
  "key37": "fuYwEryw8vSTbv8z6PtPtLQGN4m3DBKAqoGFi5XLTZPDwDbYLrk44wTCVtBmUyLtJ4cBt4tf9vGHbdM4scZgf3W",
  "key38": "tqQh6ftKVYBFiLYH592r1rLa81PLgcsFi44uG7Yh9AtuQXQSWXpkaxYHsyTko9vU3dLExRjyMxrr1nzuqnsBSUb",
  "key39": "3xpQfTVXyNkAsjgC44CgsfTGMbwpxustCisPEE6jj2nMh1gfa64fAJCamyXom2yJreBYcgLTwUVUTCQTSRew2oFN",
  "key40": "4DNkQ6RMUBihvByMcZEpZLRUxL27EuDN46yDSTyrGZ7SrzA3Niw5Uyo7DB99BfijXyvJxkqUoaTDbZRTfs1LHbFy",
  "key41": "4kTkHtekzPqZdVAzG9GrbjUG8R9shtPzZW86HPDp9ZdvmYNZ7yaxk4Wrq9hMsbV6mg9HveeyuraRHwCuL9jBFonu",
  "key42": "oEFMzNs13GXkwiz6FW3Z93Mmp3tSnejjW6aBb7D6knMhX3jx32dmjGZmNdwZuokhS6n4dfg95XR8bxssrE19vgs",
  "key43": "33WRJftTPh554q922TzWXTFK1X9EEYFffsteivkBLsj62qr11h1bRPo2bT41j6wgvr6AJ9iAA2PHNvKjFq796dgT",
  "key44": "2PQtMipYfGmsSnDumQeoXhfkki6JVRdNyjPvQwXnCoCveRUQaANNYxLAG1oJPvvLsG79xxYYXWbUPangMQB9r7UU",
  "key45": "3SX6pAiJ2LaTZd4AodtTi5svt5eEj4ZxSE2zebJu7FDQsdcCi7nNWQbC6J7SfXSfsda3Pq8hvANmTrQetCbhCuiD"
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
