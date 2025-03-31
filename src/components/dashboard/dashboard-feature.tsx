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
    "4X6SxcstjaT8EH3DT4N6UX9YnqjfAxjqa5wvdG2voNEs434wHVyB7duhFYxFzsyYE4RwprygSdTgJUQsrP1KYeT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6yvwTiH8WgxZVgEnEcH8ci59jKim5bXubq5iSW1wobGPnLQ5qh4VH9H8uRzdmHKwk1Z6r9RLXCsVDZftaUUqNWK",
  "key1": "z42iRfaYdux75hXvrKFpvj7HWfQ4QaNJ1DiygKbnfpDv3y1fraoaJqEVYY2LP5wf1MpPfm6nKfTa7gS1UxdTZ2c",
  "key2": "4UwyhDtQayqfXSa4a38p9HcHDWroAMYtkQbA14hvRB7UKVJf9wKpNEJeUAkeZYmNjMeoMmfjz8SHwSFCwygvpJxS",
  "key3": "aFP5jpsYxhyhXA2d9qBsv5VExnxZhjTz6ECuWkM1ntw2bpnV7ihuu7WLTZipB9SBwCc3AS5bUg1aMDkTV14yTSu",
  "key4": "5k5UfpsYXPFZfE2JCSDL5NwAJpfUbwbqqy91hQSc7U8MQK3YPrYrwzWCRMQhn8B6iNGvzVwtXe24Qs41MKQGd5kg",
  "key5": "2w49PWwV8Q7FzfL3wmHfmLFR1tFqnb3sumq4L5YCATHuRNA1SDjP8yv1mmTtVJPTVYnUKaZHR4Z91jRKUbY38gDU",
  "key6": "3w8aYhEQyZ4nzX7UfwHSm9UUU39n4AywNAX1dkdZWpWA3stywNwWc5LMEzHVygNsTUqBzSDwcZCFAajjUDB6HYbR",
  "key7": "3yGn7fFbgsZCytxqeMLTx5tLuTWtv5ctJ3gwg8ezMrihyCUnkZb8e5bWAcYUz44S2aFq4SMzvxdKWLGiLHZGmE7w",
  "key8": "2W4MJexCsdPwDDL6QtsbBbLqB8gSujzfiporSNabywAjAifUUpRTBjiTYUNuzzRcawPvZcs5M9KL27Pf5Jb1Bbr",
  "key9": "4pnjUXypW43JCRS5cKfx1xTZ19QTbHmGQQ14z4kTDgsvD9r6ebhFoQLzZkwR9MPn7ghSSrqcZAGgDFLYwq3AhGYs",
  "key10": "2zb46AMYuneUi485KUfEtvzGShFaZ9VJRdndBxeAHFpuxwoy5LU4FbKZ2fsMgT9iAZsw2obJ7qC7bQYwzg66aRov",
  "key11": "3WDVCgaaopQaqSGw8Y9iXotHpbD46K4a7t8Fgfb6WJtKUnHvwyTVaZTcDnn7KnrZX3DTgnXhoTDRP65EQtHUD2kb",
  "key12": "2ekydwFumM4dj2m3nZPDoKfdYKen1ASwL7cGTtFZVb6FyNWqg1y8QRmRMKGvw14qDiijmJDPCgTsWms3u7WKBiyx",
  "key13": "4HHXTjWmN2MjPYnMnE31PajvJXjodarpzB51xaSChfCDqwoDkKRVsaY3e652NnSyDGF9NUzVbohFS3r9Pia3wHKM",
  "key14": "321YLNossA6MCB4vUpdRYv3DE8Ft5Yic5ULEiXgwurUuEEe32cWHYPv4QWyNVoVZVj1dGxA8sc7JBqhVidRyPXzF",
  "key15": "s8iDDvaLDHBUUKe4442p4egE7hsXYUyKmP21Xp5U3QdcfZqTSaRez9gU2evb9XhAdYi31tC6kBhH12f23ebWZnp",
  "key16": "3nVFrQFSmL82Vmc113ApQYwFB6uHA2i5B4kXYuw4neWgJpXSpcvGp7yVHqhUi6SsvrdAh1Wy2dpRTty9eE54tp8A",
  "key17": "2uCnnGWcMm7RwyzNFj9pRQdDkaKx4J3YdDjhmCC7Q8oqYhgWiHkBddqogdFnhjt3aq92HMzz5nqiSZ2vAxZ88f85",
  "key18": "4rYz5LE9YJkkmt3bKcecRG7aGQqFv1LRVfTpWrpNeo4rUmR7xg1yF9Woxy3VWUVNnTPT2dkVF8nGQny7jHMHErzS",
  "key19": "2qdxjPV1W2DoE7j9cV7W4yadGyUEP6FSA4Rw4Mq6GZuTksZikyfYcgsKSqsBY7q5HS7aZVGpe9ifYF2fcnfSp7M5",
  "key20": "RkhZt9PVwEu8Pdmhpzp4mT36ir54huVxMmP9Gb1iHsyeaCpCioSvCcA46HMAv6aEqgmJzwk7s5jv4AaekZmD1ie",
  "key21": "4R6UZiJFFjYcGTKJfJtUXtUUXsYsxXf1vYmTYZbfGALq84yxAvEQEzhLg82sMNxTJCSz5ZUL4P9Dp8FfKXWHJCA3",
  "key22": "5jBKo4ygJeRYixnZcUXQWkJpV49vVJuh2bWtmxpg28p6VGE5CwTzKtSAZ5mTyYkAJ6GzRNbVTGis8UtM3DTNMz4b",
  "key23": "2bfN9fRNQeZV5AsnyG9JDzw3zUNRBF9WmHysEkJ2W6LvEW1PHhGVUWoBNdQCRkLAJprDkjVFpdWBGnPNap3rsQnx",
  "key24": "4i9s4EwbkKBhjCqFKJFBnUGgt1R4MgiNAEohh4B1oaDZpyJMYtr5aSFLd7iwNvxVFAHtMCiU6TsS7MjGuqpiXEUW",
  "key25": "2mBmkVBVZCky2Zyhg4akJMcD8AvFccxTjdFn9wZAPYbqqFbCQXXLz4bjSbqUajPHtGpaFyb4HXEPNbvfipK1rspD",
  "key26": "GfeY7mypdWqQ2gEKtb9CydpUeKsBW4KFdW54FyeFAUMm62oBw9QmkCYW7sKX1nJE8pkcWkYB91q45GsCjWveq8Q",
  "key27": "3oH2K4Jkx9P4a9wxj5VXHW5yF1SGaASAP592dhoAV5ye4r8ba7mJvzCCG58rLXNcueM57HTsx7dMVkLYD7YtQgTq",
  "key28": "5PPkqQEbCUcDvBzzHURAdvEz6kCUcrPJdemkAHjdFeQ2tBriACqiyQgnLad14RboB3kS7VP6yg2rNJm4KemQjwmJ",
  "key29": "54jrSudE56wJtDd6ZkEJ8QHBcktFc25iTBC4KWWhDnJ3zwU3DJwvo2fsX8PkMPpTf9txj8juWigQdNao3Ap93bqi",
  "key30": "3PZ1JVMNRTg54tT5CAHpgmBcDXEXc1EzYKFpfKcqWjM8LvTw3UfS2mg6RnuQnqZr3ixMuNoq336J9cX7kzSVdfr3",
  "key31": "2PqGphbAtmo9BYw4XYyaGvuwbVscUpUmz6LKi9focVHK56DPvrQnvp5hYiD2Jn7Gco8P5oF4Mfvzuv84CWZ46fHQ",
  "key32": "4jJFjC6FfroHG8KdTi2hMoV7ssCNjiCzp6QsokTuUkQNVeY3trhLkwUE9J2U6dDzuK4qSdbiWipr1BXU5iDrsqh7",
  "key33": "4xTU9XGGnLS4gQ87JSaxcJ8ENBjdFgYkT6hmNH4Ck5j1ks4i4mxwu2C2rqLyp6zRQT673QtrhMbmcAGX4jpF7RjY",
  "key34": "3faFvRrReKiHNokNMa9eqS7BqoaDR61RP4kxu2yAQXJcFEwXRX2XxnLgjaWY8JdwKCpQ6rwx9SyDh5ndj4NM4C3a",
  "key35": "5QxQa8kacUVt8mL9KNXwT9CrrG71returdukFRzPeaVHgyd9KBcGA8FgceDkeghvUwr96w32zrWjtEtsyftJsYrJ",
  "key36": "5ggxC9FBXmqrGaNC6TMmQcAW1yrZG328M2ADPJmwyqecbCkEwrshMRWnJDnRZZGhBrn9UAd14TaXqzb7nBm4R9Lv",
  "key37": "3PXVnBbQE1RCuXHaTbvZzAxdzfpzFPNhZPrvBWkoLnhd8RtxnXGgWjNVz2RBm5W3qnbmTiDALCPaD8xvvfn6EeJz",
  "key38": "28aJWo1NcGeyPCMd1sfjPYhm11bBKoGQ2UxHLt2jJbL8J63t2r9KsYftzUx8THY9JBWnPtxmtjDzqSYFjUoJ59M7",
  "key39": "5VVroh8j24L69csW6uaMjG52XkehwvZzTpAu4aWdAwSQHtEevW3JHc8MUMUo2CPgaJqBXFSjwfxdfm9rxPm1EQmn"
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
