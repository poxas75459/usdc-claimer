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
    "65UJ4gQabs9Ca4js4GmFSoDUTaz85ebq8catHaeN7McAj3yNMpjTh9seBNj3NhEhzvMQYNNB9cn1uFpMocAc863H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPM1m2L5L4irYdLBYsZ425iq423h6gQiYnQgu46N6ESwR2kfEwBGPsLjhGQK4XvwW5Gga6E9HNnqmNxDYNUWHoa",
  "key1": "351ovpiqgXtK3QevdnL7NUUCMtJFnTJsqsNWrL8ZjdWuQkWcdFjTHJAZBGmjSs76gTzw9Qsj5hfMrbrbaeJfCxCb",
  "key2": "4XztGKVYvdfkCEFuDzG4o72XgnELNpQW4jozgQoNPhraoWNdfWzsZusWUTzBVDm8rou3ER4j3jvtHZFi77E5NAUN",
  "key3": "5XmaYA66ViUCkUN2Xr6nxt4Zzyj6q4NrNHcqAFAV8nDSTj1YivGcQKA9LuHMUkP75fcfqBygdvqt6ZVEToe8W9ZB",
  "key4": "5F2jTmX2uqe8iDbfiSYeJMQbVcve2iceLNwzy4iWY7QoFsRyzXMksGXjqQfS8AsHsef6QpCgKMAEXN2274niDQwQ",
  "key5": "5QZ4AiE2sWCLjnEjEqCzWtVBvVK127y7o7RPKXEmefxZWF1Y6RPfq9Ydw99vietQi7fBk6FLTbeYrguRKTAFPwfg",
  "key6": "5992Mr2i93C5YPoPjde1M4kt74C1HZU81WG3t6cUKQm8JVd3D8HiSFeqqNZ4546w9tW2TXLSqC5ciQjrdbBxfK29",
  "key7": "5yM4VUX2n7nykWGK81y3q4B8VnG3Jo3ZnHxFSHBehngYyMZrm934zcfR6AUJozrWrwzzThRqvaWQXpCCm6S1xKxS",
  "key8": "4whXgu3sLsnxQtPUkMkKMQMPsA48NgWtZL9fE1WJ1AShN9ifSXDRFbv12XzNmMEdoC7ATqZ6vZ7MzEKBweCvxc8P",
  "key9": "4VciPja4m8Dmo53MXrUxV6aWAWmeacMkV9NkZ2F3xVgAE8KKcnwkhX4N7DVwJbA14CgD9uD386GfSbGqWs8x9jhm",
  "key10": "4FeHFk5MgDMBjKLRn7RsCPcNxp61Vaqi1Myb5CkW2e64Hgau2zvnenFXH53VkajqjDihj7XDLLEPz2sZhCwhXajy",
  "key11": "4xAxpJjbdZRcxsVst1pmKS5codXayb97C35hfHD4g6SPJP9UZcVFzejUfb6Xsa7NXHfQJ1nmu2MCwtiuxku9wwwR",
  "key12": "5UVT9Q1foomgWQZ1F6rmLP6e8oa5i9yAaLNvksxBqiz1xDVWMZmEHthdvL6JksVFekiDLNR69i1iURRtYE3BjTHH",
  "key13": "5VVMubihL3S9AeZm7X3fRo3FBtnYSQ6BuahcQsosdrdX1DHF7TfmgVQD2b9Jq693WX6h2zHvwRC48D6oyWAom6bz",
  "key14": "2NjwZE1t2VHqffTjjhZZTbCwks92C8QQa8dLLR5W3hnEqFecvwevtqXbBk2f6LSP3wZ2pksEThWpwo7PSXdeKNvS",
  "key15": "44aX3wJcj9YmkUEApU7ras5bLyuyqoqFwyzJCdmEdxZvuWCkvgqk7L7tgt7YEj1JMJ7BUeqPqHtqLeK8RPdC7Rgf",
  "key16": "uxzXPQHEocgDB768bzetKLDEocRCe8y1kxiusALvzCwshsbDjdQeuS85LZtf8DBkmk8W1wdzbWzBYAxd2Lj7jxG",
  "key17": "2zCHrJXvL6tsNodvxuq2RgxAj1msXn1jsQ2PAAaRqDpWGURgubYLnGU9dBd7zyDSipmak8rxFWEMovN4nauViFQq",
  "key18": "naKyXunzcx4xyLr7qGK1fLHTG6KtZtM8ENTPaAhr1Q1dan94zQUJ3jA81pbrK98sEqTWhNfprNNfudWZA51NJmG",
  "key19": "4ytApN4mZMuYoSmwjkAa5gWenNetjBZRwcBC5Z8H3wE2MtuJuGNMPkHmt44puzWkFMJ1dRMze6JH7LuSWQBLCsJ1",
  "key20": "41qxFbFh33uYcuYQCnWJSE6j6umyr6uTKk1z3fA9inEWMcMwj2PAk8GKfJUMWm8N3fERKC7MzDcFNSjE4jKTHHTp",
  "key21": "5MSgMAKGbw9nvSmucJX81mAEJWwzScnXCb6A8Mx2qmDJtdCx2mqgs5BPtCj4YiqNFSqQCgEZSdRX5H2GdAMWnYkH",
  "key22": "2pqsp9j2rECpQhcXxaCvAcEk6vuUtn5EQ4K7k3GQL9BN3f5uwB1YRwvH7i7J9Ppj5xN28nWp2xRTbqy8EzoNqgcT",
  "key23": "52g3hwCu8g5VqucYPkRuPtJ7LhkcBmYZo8wzKBmQByNwbpCBBLFV8VYy4ehWKrDz2EVwzu8MszsYVGLdpJ2CJ8RH",
  "key24": "YeVpydbtSQQ1RRYFvmFHCjHbPrW4ibc7fvSLfyWYrNWGi4DXta86dCHoeve2eVnbZrBYjR9jCMUYacRt9dYBnsk",
  "key25": "5ARnQM2JSA48MzxTmM4dCHKGC6GE6YNUhN8u4nXXnkykVUuGoUDaJL7KZBfZhhAp1z2TGmYxHfDsA4ehQTxQyhEz",
  "key26": "2xgGFixA2tM6ivaZTywE1ZrwwpQBMKTa4hDbRRftoqduCSWuxqCxaC9pN3qUTb3CerCNt3mdakmVfrB12LJrUKfj",
  "key27": "K29wNJmy2oeKb6Z334PE9hxAPK8dhxgHya5TjarQGT4TzHKsWo1UncyhpnfWzbKudwGmcM6CS7YMjBhZyiP75dN",
  "key28": "65Sq3Jhad8QCPRJir92erXtsJ1EpcoftShPyYH6a6dnMsovszAXgKcGvwmaGWNwkczis5g1aQLMUzLxTukKotZ97"
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
