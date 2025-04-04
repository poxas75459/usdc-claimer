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
    "2LJS33EWPGykbKNZZoDSVpAeP4xYjDSRTH5UN84j3UuPQjrYPHiDXNv35cD8wQZVVMWeriV2WNVMXzh5t3XXU8LG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGr5ZtAsqDCxFXsPdTJvWemuz1i8begW6gfSVszBDYbcvSYawvWMt6Zszj1MTwU6tQsALQx1rTh2UmvP5BMvuFE",
  "key1": "Ky8WXeZWTm6Rpkd2BDc7pePk5CFyF8wpm7bRv6nBsUUUPSec81Q4uttN13EusFAiUc5fdCCkX1dDNJUzBoX75Kz",
  "key2": "5urCzNLj7gLWQW5Y7NhwjFJyULgRQDppUbUc1nXHfqa2yp9CAo4nSuTpbSiPjDuSQrqyCHZ9FvkYPeEBAy9vckpw",
  "key3": "3rgsg9ivfPF92nYZuMpUKvtMM3sNkbgn2nuDJgtKyzMJozSFXcKTRXSnigMGkfbvGeM85DQPzQQXGcDPXruAtCxk",
  "key4": "kcGgnu3qnxs9g2JofEQKCCuDmRAQHm2xP93PjLQmJYt3mrCZ1mtzvV6q1sc8qRZkp6WP1VQZQsSn5ZQaJhVJSny",
  "key5": "4Ts4jN1amT9dEyEbxfeY455WsER8QtJG4UwciowYchm4Bxodc2mY8C3KQUcA3QP2f3MXNDVkSkFqBnxLUfHeTKKJ",
  "key6": "2A4xSbBvFjmsxEpnXZjpxKA78mVqc7ENtoiyeAKGKStpdDCzFxsDMFbtbCeFNcXhvQX5sf9EY2sVEJbxud4QXynv",
  "key7": "KECVi49rG2WowF8EhgqeDNRg9vniGgG1pUsdoGtdQLYbaLvBZXYWc793WWT5AxjZrnRyXboho1g9uFP86ZFaUMX",
  "key8": "5NvPNTiCGp44cSXyeAkP4pP21eZUAMoGTta91kWAG5r1mTWM3BYbbwSKUBd7voPBoTd3VKPrHPGCMLp6cvf1GEvu",
  "key9": "3MmJ39Ss7zgfoYppkiiDFZKqRdTfVuX7ZNW4cqHswvjxE292HUf9msZN5UubHaeCSEKnyVWGZhM2afUAeuvX4m5A",
  "key10": "niwDvv3AdricJ4qMT5JNayYXv1kSLP9vF6Vp8n2VUxS9DkGrworXyfV8gd6UvFceKyBXusYL3eiisgtedpHgFpr",
  "key11": "4AG7fdjYiJje1tBDXqG189PEVx7jjQ13uxhDy6LPRUoYCjCZjKPWuKwbvARMuJMjZGwx5x3uktccntjgcqFfjqfm",
  "key12": "4uixkjZusXYpa7DPYekaktztdChkfwHUQZGHuz1PkNwZJJsMR7L4Jj22hYKiThApuPgSneDhexrT7aR3R8R5mv6T",
  "key13": "2tQrbeRMCX8bf1DoSwWaKUa2WxW59LmNPgqiMScj41xbutLDxJZnxZ8xmGjoZNVZ6oDnpxAo3zYC3n5oPEZqpAJ3",
  "key14": "3ALWUKD1orpXLmNRz8wu3pVuXD7NqXRsKPz4YKqv8Tw3XfCv724K1UwGhhSVyjThNxS83RuhAjQX2TpZ9g7VKQot",
  "key15": "4DWjV43wyK9GGik6XW927WtyfLAZgYgKbifBW4NKzXSv9xiKkRw3pansPqRP479kgU7nMC6s6nDdE764HmPANRbe",
  "key16": "2V26H2WjdboshTU1XCc9V5ueGvubj8UrDkrazXPrWsiPbhEwppPQCRzjQQAj2nuFRs3NbHv387X4xKmiDJVVHcU",
  "key17": "5Y97219tHgnTgrMeDmXub3vYaKBN4bZSrizMRuLznXuK8eHdLztP7YGmZACVGSkJjn9KzuEAvYdwGYWisrmyu68o",
  "key18": "4BxoMNajR9FZ5kYQKejWAic9xT2QKv1Z6bKzUd5gR1CtuXDRu2W5XqMoe3zZcEgJUsuaeDJjrrvMcStCK888HN4B",
  "key19": "3cMCXNcJoArzv12zezuSuroV8w4V5BjQ8c1yfjwgR4NBcUsgYJ2AcnxL7aqDZoUsRVtKXo71jB8eCxwcm6ue11YG",
  "key20": "4b3Fn7cnkBEYWPE3RgKacpJ4jGHdQdiCxzNZzx9F7HRE2MMQcCEenjvjJiGaqTsH6V1zJBvDV7LyEvPZ4fpnhWWi",
  "key21": "CJ7ymi3syQ8WxJUrXrtFBBHzywDj9a8xTyHUY7TTfdVxt8TuZ4V9rz4GpAcYYzqSr88igNnFcS3mdTkpv2yWZjG",
  "key22": "h37JqttTWzRYqczY1wsf2xv4M8neVL6YrXm6FFd44m3hq72R5Q93z6aAyd41gAwG1wAwfb1aC7dFL8w9DDnSxZh",
  "key23": "2dvwavhdoQV9XyHMzanaeu3jPx4StenRQaJNhpjBccAPnT19NXzvAvgPgEWrAALEYitX2ofaw5PNd5LRhrTj8koK",
  "key24": "5z3CJDtrqBaaSEUi7QEbaq3F7hmj597H4AGqaaJJNkzaAycrjmnXaze6sQNHY4h5tbrMx7dRP3Yd8drJ2TyyucW3",
  "key25": "56vG3K6dhfuz85ApPSH8SPCqGQJMfsuZxCTA9isdShjnZyKcUiYuvPFBsLf45YvaD7Z5cPS9naWnr5vqCA5bsPUR",
  "key26": "5AqyQExzwuhivHDzFXuWx71CfaChoWW8tDSSuuNQi4rBtqbqSnAhjg9deL6FBX4f3FYMvhfzXXjivjv9iDR5ds9V",
  "key27": "nBVeQWQEdfcpxwU6dTv75RaTt3HfufxAoQaJfzDuDueCBXW8icAJCdExN5BS5aEfhFjSgpr2QzLsHgon5waeG7r",
  "key28": "WQvUXqWgoks7ZG1i6hLPKMQakzXJWmgzvGFo7Hqo1DZdmh4ojZwMkJhY8UG1J59ooWptaFBg1xSYyuFrKDXuU7e",
  "key29": "uXVbQKm3hp3XS9pmH5F92gGbNYag7SQFCGM5s9GkSDAtG3JpaycwhXePMzeqthEUP793CrE4DKb6rNgEvii39q5",
  "key30": "Yx8AYysH85bXJoMaVeBknWJ3ToKRMxKu1nuz5wophNwwLBfWBDhctH49JNGQs3RWpxNQZb9aN4SzsTij1HMyZ8N",
  "key31": "5XuD4zxkdoWimUmGiSM5H85sD18LVhYzw3FNASFBFAVS4XbxQJyrPHwkEc9SSKRe9v4UhDMZ4mPKbXKaYUUQGLEo",
  "key32": "2Zydbw8pYZXz1Uy4yhjyqGK876tgfxN6RTKR9XeHrynnG3zJtAtPzHfv8PXWhc86H1gUyP4VvmJdLAFrF4sYN7qY",
  "key33": "5qTmSQYzJeH44Rd4Wc6gbkRGF14N4WtJBBpFoTGz1RbBY5s5TVLZGVBq4neyfbxi5gpzMZqd5nkyAiY7Ppn7N5B",
  "key34": "5fFB1B2K128mPK8syb9Abvz7ZLSXuPGz6rb1Nqt6RNT5VsXxSFRnXsXVTqKQUZKx3Uob5K7Ja8NMfSxjxVcCYk8p",
  "key35": "4sYrUkJpikswT7nQewQUMtxWLaDP1M28cDMucY8s4fyeGCBhdbSTK65ddbfrgMd43co2Adid4hTJymfwdM5W1aZn",
  "key36": "wdbTSba3JTekksZgeq7KMCZVQMMmf9JkUiyngVYiCqkZZsWGqPgVL2dbhk29M2QpCaAkfmjsGT3TyUBfa3Ekwph",
  "key37": "596sRCArZchfj7G7HBGcXDJaE1WcybEb3YcRrLn3fBLfVrMSzQcvoqmkMcmkSboGQRGSNFz6DEH8er9HzRZs1a5c",
  "key38": "4azPzSCAakW4TWxNirNjb88nQaJPKiQu1H8HEwKB2A6XprM1YueVyDMgAvujxrUxxa3GvzYGkzUKf4QtCbN5prw7",
  "key39": "4SjRqerXFkd4WVvRTgTH9SRQKHQmXCxdFtcYf3UWrqQcsm2i9EBk3QmS5KsHft3UUmWqcipFSVSS3Zj75Qeo3Bev",
  "key40": "4NVdUUofHrp8Jg7vWyWRQ2o1JzsLnKzugLqZH3jtjR1hZ2PQ5eLdARhJtgVLiChHhZU3MW5CPw59jhRSMawyURA5",
  "key41": "3VMcynbHiU3AwLnYMKdTB6Agyczoz1N1ynhUa4bV79NA7ShhN7N6rTFpzeF6QD3TWJmfUxupFRjAh4Y1VwHtAEb8",
  "key42": "38xQ5VtryDme1o68ChUTDVnLwxnWPt2URZAVMRkh5WzT8EST5dJLjw5RAubF9vhFMAweP8uLMshrMFtWDzP8zRm5"
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
