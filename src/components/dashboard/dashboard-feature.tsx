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
    "gwHn3xLHNVRkshDffv5FoB1Bk3eQLwFCyXpE7SUsve1fNNuG9PaGtx7V5s6h4XzSqWq9rees1VgLcqVzNCgdUfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emU2THtujBRubyUfbdE7unUDhMqDidfNmfSeKMAfUngJPPYJYnHvSC6AAnroZt5YGUe1bJ8xjtZTEtd6Lvu5VbZ",
  "key1": "5hsuYMxyK9PoTA3Q82ngsUmYy8x8tAB1ERFnB5E7eBNekgFiS4HQ8HvyV6aKHyyAGVgxL5bL8qXYvJQRyxWKSBK7",
  "key2": "5M6KPL65yEMfEtvGJComGivBiw91xj5zidzoh8nt9HxMW8TkWsw1xv22EdHvLJwnhLDhKGa4Ae1mKgBQpWq1igcS",
  "key3": "JUEYBJGgRrk9vPkNcuuMk5GHNLDpre7VWCq8VWweBF9VgrxP94craUKCT4j4GLkBQgQycXanUhhmoeW1dv3s8hi",
  "key4": "Ay1eufinsT319nPvdfMTayj3hXen2sA991AtZM6rfnE9ByqzhWkPCvVwhgFcPv75JcC1tiVZj53hk7E2irY5dt7",
  "key5": "5FPpXfgw8Axg21Fed6tUiu4y5Yric5hkbYnGn8T1nC5h4CzUHbYWbCimNx635kXzKn6Y7bWDvugZDruiBjviuEea",
  "key6": "5mqN4SW85rFD8imwyaRVGjAnkbB2z8knmsSvgfnn1VrBAdbou947AXwa2c18fvoRcQqYp6cuXdugLucwrtYxgEd1",
  "key7": "3XkJK7iEaB4k6r6rYUneoQ352ZonLTFXBHpcJ9gj4ERvja36jX5a81z7uzey6i1o6E2bYZmi5SKfaHNGzT9csDpS",
  "key8": "4c1BHxeWZ8CSacMSBYh7PLDD9cufnCz4po31JEZQjL7PKumbc1vKVsGNcxEsrSJYoF4Lhk7YLLLTjNxcKk1SFj6a",
  "key9": "62zkDH3MmrYEf9TSKyLZAnmgDzrHkN7QHyvMA5PLk4buZ8Fn5DFoSEuM8tyGB24X81qxiosRjqWgrf2vxcG9oJ2",
  "key10": "66VJYcv5gb3jzmq4f77fu8PsqgxhDadCoLmjr3JuWz4zmYeaUA2k4X3VeMLvVC2uZZFpRox4Uhd1mq1HJwqRdVUL",
  "key11": "KGLe41F9ENNanqfvxsrUgEZp56pX1xFk1YHWiSvWTj3DftVdVPduCAyoQ5W3y119sbr6uH9FnJjKFGWRosc284P",
  "key12": "2n7jDZcE17egwARARniexGkkYwkQ8AVoFn7qcW6wKYmnaKXzV2y7AMUKq2z2QJtQ2cheYBkmwp52UDZmXeFHaB98",
  "key13": "5RHuAXUJFqTdB4BZmcbmzDG687R7XjQxsnyVEviL5VHUQrmR527Q1WuVaJmdkkz2z9uvr3cJi2wScXcLBpWH53V6",
  "key14": "27KgkeDNs5RR72LSHjW2HPJuQ4oC8UKFZg9JJYz9Y5UzD2aqnZprzcke9w31wxVasjWB7GywvFgQDnn1kk8qMHku",
  "key15": "3j7Yzhg5ntJUvQL1NENrN67bz2K7g7M8vnAJZHPqQPsptW2KjfrSakq3upJnVBZejLgFgWFbqrSh13dL9YZ4QGyd",
  "key16": "5GcE2W8wVLTCV8wvBGARvJKMXgz6YaMrt8HLJkaHf5aEuU77bYeSjDFVybBbemcxGpE1tkn2gQxRNLiFA5nCsBnA",
  "key17": "5qQhu5EUK2dxNnc6XFh5mAYFhZNt3uqj31XNKvyjppJenJhU7ccswNLpBERzyT9jvMp41UWXqEDpGgL2enWHmwT",
  "key18": "iespPLSekjVaBTT9DtbaNrRdQ6LYZPQEvgcTiFhN276a7T3B3u8dhvrxjPTLPtxF5Asg33aoesod7Muc2xY69Xc",
  "key19": "3bMJCcMA775g6bnVoSCx3kjfC1v8Z48YcxnavfSAKfbhF86LdX79voHYGSw2bArVBJormSyGvPFr9FE9kMyqcBpx",
  "key20": "36tFZhoyEWf2AYsN4rWEjY7wKEwbfTPAbRYKmkpEUY9A6cQudRN3zdgKXf7cY7zeKxcojKuvXJKWVj2HqvtjeKSy",
  "key21": "2hVELb3BKMrvpEmtNXSLnBhtVM9MiybcT8HVJxDe23XxQE3ELC6pn4mYhpEacfjJ1MZgN88wZoGi2eEQv9QEY7Xq",
  "key22": "3cunqbZQc6B1AYEh1WXGLiu3QShsxK6gLPsdYZYxX4DRJkYbRcu8k58jPKwCZMw5mAnFDTomC3Hwt146kjJcHFbE",
  "key23": "N5sWFNaUTSA1ukQGwsTPbw3oHW2WjjDXWitNg8vmwJXX6q4NYs6aVUsWNiEyktheHMc54HT41Bihug8D1Etnxao",
  "key24": "5rfX2UqcqfPyWXeFfcKJA5xCgKNhAgK7mxG5HB7g54wYJ627jLVTm17g8SvFZvsAqYGBdEJ6t2XFoCQRS58rKqNW",
  "key25": "5WK8yD6vUqQpZa2gGnBw3ZNq4UTmymyGM6joZ9ATevmwwrqgZkEFHu4A7jMtHP1qPrqBYhErMMfT26XZTqxG1JN8",
  "key26": "3HdM69cQdYSWVze1jguSs9dseFUCTsGaNxbBPT3jD8RLbYmj8h31YNMy5GsmWyiLfQdMuMEAEhhAszHiv6GwzrVM",
  "key27": "3yNK2t4cV9uWoCK2QN6h8P4kRDDfocoyrAN82sWLM7dhBMQTy7VwTDSivbRqCtt2wDpQAjw7v1kFePcHHUHAVBki",
  "key28": "5syo6pBdAtWQ8U8uksVTwxWjwTfM9B41oeNo8wo7hwRZUH23KnUq9N1vjyu2sYfPnq5RyMTH2LwTxh7syVre3jGx",
  "key29": "z4m26F3hccxGoygpxVsBnUHtUTw9Rg6gvxGKBwbiJGfgFh7cH4ZfNrdJFqBupNrtKSthGmQvX8VJiPebmSVzo1K",
  "key30": "2esy4Sn5uy8J7FLsVVQb7G4XQjwt33MSLRgKh1rWnimoeF8dFkq59Wh9fBDgkCBBpoT3nef4CPiZNfFd9gRvsCB3",
  "key31": "SHHG2XTdEYkqyiK9pJ8Qn8RKXUsUgHqzRqHQQbjUt1rEBJGPQCi3vE8BFhWDTEfsZcMPRefqvrERaNiwKZBpCrn",
  "key32": "TDkqzftaTDcTinF4biUhZMWWbeLkgWN2RDWkKXQ7wcHbXam85ucAoLZLaU8cgZeyeZbFthG5sdUVWFcduegQXuS",
  "key33": "5eZpHmyHPccmd2PqjBt1HBM2sZwHjxBtFr8QbSBhtinDgh2fjuetM6wZ173Vsx9TVzo63kFBwuU6jgWEV5BMwVzS",
  "key34": "3ipQRdMKmzWf7Lz9zsCpXet6uGaaAiEDE6Ftc8ZPu8hjVaNTQpSwVaTfjhRZds1PqwTDJTxKz98Xjja3YazMtyvP",
  "key35": "5nDB5ViTjBfYAf8es2SRpxkC34tteA8jKV61TidLZtKvBxcQSTRxLU2oVXD7JATq8ygWfnAf9WZMFu832UxrJBRp",
  "key36": "2bapWAmdSTUChxQCqZqmz2Kiur5KMn4t7uQe8wvEffg4AkND6HjuQy5kuRmHGzdDKmbAag9VjCy1DLVknYQJX9DR",
  "key37": "5rgjHCsAAqRZqJ6umq1rkGf5j5XsKXYYCMGs3GbMzFTyRMmQ7kv6wNeWiQP3KTkWTzzwdRhsWvUwL6Eb1fERHUWo",
  "key38": "4qkGnM5kqkMKduMMJv5tfNRPg5RsGR43urAF33YQBUKG2JpL5dwLX1QCenE1toHfPpY485PkGXvYFzpwJN1Gbevd",
  "key39": "3Fx6ytW2JghwwtdhpxF6RzLvxv8DEqhUsx3WNvkp7N6VcdhjV8ag2y92sdy1R2QxiKS1XUWom182HVUUpBMhT8Y8",
  "key40": "3D2F2UTAknmkVbv9UFrFLfF2pBAQGRcznnfxPqX2Q5YbsCDeKj6e7Hhw2hrLGZzsAJvusy4Qegufn1erVi7Yswmp"
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
