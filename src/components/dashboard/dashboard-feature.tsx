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
    "2fkxeUEtMTeEnvM1f6B3Bo5zUfo54kQffA9JczSFn1BxmSvkdhhHgNRxn7HJiNKoHJ4e3AsyhnKtWxxXeML32K2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAQX44yxPGDXNDS71ftXyET6ZWc1pcQLckc7KsuyEGdu5JfLcKXZQnwFQQLTHefwscRpezJCw442jS42QxmkPVk",
  "key1": "3nC92pyfkehXw4cYNZuRB9mtdxRcDJyjuopbFr9n9kSqU1dhkMk2JsBei9W1j74RaR3uj4KqsMacBs3g7HgheoNz",
  "key2": "83sQMHADxYBqptZ8CfcMi5RfnQCHQaUrD9TQifnJ58CP97xcAJgADQkk4Qv7CvkpgDZnXXZoRLatBT9p7nhBhmV",
  "key3": "5AhPkS7uc9Y4hpbPuWH7J6z4s4ZgSfkYQphctnyCRrffuqymMLReaBdTueWvmjeVFUwYdA7eaAsJvCzh4QtYYAMB",
  "key4": "jPHgEoXdXYFEgRb6kYeunh8dQto7Kn9SS7r5XD9Juc3qVnhWTvy496Z7fZrqmonn1dB9awHMkHARcyDgXNCGQx3",
  "key5": "2RG75XZf2snfLzxDSEvwiLCRFqwPVRCQQDVUDccNcMbwP34cHuB4TssLeCgioKGkufA6SkTTccwcZkQ9T28LrQo7",
  "key6": "5SeysqefKwjw4i1TNwEYFF7PwwWcu6QA5gGFu1FNbDHMY1PuqkVy1LXby8LRXaYFDPn5ddw1tNNx2wn13ya9xANM",
  "key7": "jHn1MFkRXwp4Ms4oYPjUrjKtbHxdwr6SFJFbRLPPpRLHSnsJLihSVode2G2qJhqYRucthXwwJqyNSHAd4WaLzwn",
  "key8": "24oETfJRm7UqwaiiZ5mhHZ8Z2SPQwvvQ4MiUg5Z9uppMi2LuzyUhH3VeBXPBFepo9w8j3efAPdEZf9tFJA6uMnxG",
  "key9": "38PdtpFtCt9cUtpQjhNYZcfJ1NigeuCnkbUSVK8ydeyXqm81k3BPSbdG7sypVWgKyXdKqX3VAceocdkQ5QCZfmK7",
  "key10": "3MH2MhXv7USx9pfE6Ei2HFLse8X9msnMED2MizP3Bh2ACpBkDqtTCxjtcHQB2fiKZqttkKXDoRJShzaPGGuwoZ5Q",
  "key11": "acoyiZ42A2PmYe5hjwjD3P92AsTUUe8WzszyEf4VEsHF9BcZDXJm9yEax5dTgd6akVbsBfGCHW9hnNjxDYbgpWV",
  "key12": "58v1sQkqiX5swvKmGTKMfv4CMRJcLvHXQuysYKLAoXTBTjeLPbCZMF2ADRaxp1G6wDEfMsZk2ZtgtNG3GwAxDmyN",
  "key13": "7EnR7kaxMn7HXwrBYYNg477pW2z419xniu1cV2xrebzRoCqkjzwupBrCHm9nS5uhCZz68nTMUnXrzBSwWYWEAK8",
  "key14": "473o4dFpf5z6tMgKcBet2PwVEhWm8PmwkkSbq7aeyAgiKMPpjYmZ25aeQMvgPYBroMciRQFh36pYAXjCk4JYHLqB",
  "key15": "9NpiG4umVDWVPBwZYp1v5czpVYb1DSC1B8nGsAhZ4fuQLzkoYMtrLupgRvFqLso51TMJrQz7pc1ZjD1TAA7sM2r",
  "key16": "66PXqqc8aTq78RTH5vXgq1XqdY4qmAUdFfworrz4a1oFYaL1vU1DWC3hC5CWuEwQztnwouVqafTUYt5pv7iSjyaU",
  "key17": "3mt9KTbVS6seipjo7E9YtWJVN9gpXCNAZNk2TiugdxgamrB21U32ac9QAG6P95UQsgSnWPkEQqJpF95wDmt4RcQ8",
  "key18": "3vtqR3peb6mTKuWz9F5nniav2E2ePjzWEeYBJw3rT1c3MHcvZkepzHoDd832c8sFPULdaEfC9KH8AXcuJAeVVweA",
  "key19": "XyehPrUQSCRQBC7PvZ3CVJQ8zpcSAsF7eJNxsDVNzyy6PnfBiAPHMzj2M7upFT4DKgw5TQvynB7RGmjghYSvXU4",
  "key20": "2hMtCqx4j9VecjyVNcUxjqJY52jn6RsaCJLhjSknf2wwHWs4JhBopF1ReUGnD4uhGjjJQu99m6iUrDHcXxq5nEg8",
  "key21": "2VjEntUfNboau713bo1J5WcFHWWZei7cWqwhrU6ZqTJ9fKpRwqhJLjv6jHXcLRgV5s6eL2jQqa6gC1uA4gWYWWgZ",
  "key22": "qpwuf2p8zAdQ2Hj1iqKJGkn3hRYYTHiniphKwaTgbYQf1trJWJwEyLCFmnon5PQRUJqTaW6Qhe44hgdSpZcvwqu",
  "key23": "2TQEKFUdoDcSGMnKGRhAhVPfaPJTHzz3iWge646bCjywSzTN1HuH79S2ghXYqJwHaX3JgmNfsRhM7ffdbm36o2Xz",
  "key24": "5p74XyhrxunqodUMk1pjcqkTMkJwbWkZKNZGcLoS13wpdLEG6A16DYF53NFCACUTyGDu16QdfNjsSSdCiSGg8BRC",
  "key25": "5MvBVtQv7MP2Vvndw1gndC3P59mEZABcTV1CaBvns4jnB8VoDa2VcTwBDV9WgH3XnUURoQjkQYXGjmL4jxdUbgDb",
  "key26": "5KvL9fnN2Dy7kYgbdFKHifvw6YSympDaKQKnSurfPJJcNCceWn8c8Ef5qxghRDB9GHv1iXuwVzVfyL1g9EV42GKH",
  "key27": "5q2MEZGH4Cm6XjhCNKD5UqRtFPvzNwoEYwtRKuugYA94VbNhFkgf4Mat4wAJxDrstNYAx2TZTdiWzQmFX1fe78nM",
  "key28": "4GEL2C9qUKvbxdJK7nHf4d6Gn2iLn6Wu8N8GYSo5aB2aJZcVs985Hgx7xJgfdW78WNfG3NiEhFrqaBiut3ZRoJv8",
  "key29": "yE2dGedvta7FM2Fo4QwyocXYAYoU6NZPh9EtMRQKHPuztwoSet6w6F26BZ8taa8yJjBoYFrVGTajKERWiQ6p3sT",
  "key30": "2AhybwAdqcoTd6F1rwA5DYze1APPN6EWVJ9VG3PkUwxJTceuP4cSVdXRkTgE3hPU5bJ762mHz2N4iVXCUiRHy6C7",
  "key31": "W2eN42DaovtHbwj4zHysybqZErPoGz5rYYKBHQARgd135iSkL7cEQcW54v3iwcYySMUNDsJwfnwBEyLLULobv8R",
  "key32": "5JJNWYpK5HTXDcDD8oq8Wdop8auaD2F82axTp9AhPCsa8zCo7W25KFfNayzD3HuvUNXmypTLMHaynapVJuaPe5dk",
  "key33": "fL9ZGkpQZkB1MWHsubXTLdJ9MyRWSS2RM1URZxKrvpVoPKp6x37TaSkgQUs3jnApw7ZziZJrL9XkeANu6RHUKh6",
  "key34": "484ESxJy5FmoaV1d8yUqHZskadcoXEYAVxmSVqduk9wUADx4RoZKFT5Qa2GpYuRzzdTdEuc9i8dmYSyFWPWtUjjZ",
  "key35": "so9kwGN5EWK3SEWtfVrua7ztJv7anfDNcRU4LXhvxV9Z3TuGtARaAcaGKX9SXJ1ArfjtCaAZxhqg63w9E6gGefP",
  "key36": "3vbsumpwnLhPvvhng5vCX9UgxLgTs3mvnDFhwYbzvZ3kH4z36Y15VNx8WfVq9W1Yn2vqQyqAbr3EYgK5N67cL985",
  "key37": "5JxekQZtc6x2EJ6hBhTesNvWmkofL5bLGyMpfJxGXSw4aYL49wpYfsKxtY39UTon3xVG4wAHmRuPKCyEePcN1ZfY",
  "key38": "5PdmE45fg7Mq9ixWR2c5mWv9Sm8PjSKPDiS4pYTfyiDvaUng3cRWCj5EqvfQqPn3EoDp2s5ao49iLvJa34MpuL2W",
  "key39": "42zxNyxWeyUmcFSkhjGDwdsH9eyxFYfrVKREKpEoL96ewLoGqAk2DGMwydPpgEP91YPvUmjXShQSgaQbXtjWzyaM",
  "key40": "T2ZppVTxCYMZkK89RzxXgtKT6XFV63VUQXF837D26DCz1sUUJpm7TJk5NRnXhnsSerCoJoFpoLdrbwx3bveqCKS",
  "key41": "2dSopTBMqW1j8YMjbpjsKSFvPM5npNWyTwCFYVWrKyeptoya92oNZAaoF449d5bCqXcHttxoGEkCzsU9PFLK75Qf",
  "key42": "4GeRZRsWkfDLrxTydg2cMujf3SbN5FZs3gscuKiwRCYdAFSkapBQBVg9Qmx1fXwVL2wXW3xWEuuw3bUS6yQ1wCER",
  "key43": "4c1jpxC4MUZhWxoqLjaU72vqokSZwdboH9JQGJ7ZTbwRZgYkjJjiyy75LmeRJMvLWs1m8d3ppmV9y4qndQC82ja7",
  "key44": "5Xd7HzmmhFx3fJQWoqnwjCvmnerhGCfGX9PPqgu6w3KfbtTQvxRXWX9HqNW62NFEUCGdgmtJhLK23us37nFZt2Sj",
  "key45": "2ycWcbeyHX4gU6oYSLuHU8dt57noptNZFNGnQeJRkyEvrWUZyyYfWU1zQ7aF8hptHamL5aA53t3rS3fVwwLuK94N",
  "key46": "3wQcAyfqRvpVZyfXsuwxV84kUTdS5GsEAGSFU7a5WyyriPYqKnNXRfVBUjL1Bjf7yD8DQGdntw8DL6mKneq6HZD7"
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
