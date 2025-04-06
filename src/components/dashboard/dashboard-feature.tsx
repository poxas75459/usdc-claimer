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
    "65bD2WZPFjefVtMApEmTUNxcmX4F9bcddGoSfrc4Hq5hr8bqmQacyjaKYErdQMq433yhLAyYCQ8ckWTaPMWjyN87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyYRVQt9VGXLQE3AVyDSPGcyUKq8Fkv6pcPKzK8W3JHLTnZ9SEQNz4tzKb1LojqG2f89EBpBFTaJ8xqvi8sp26d",
  "key1": "5dqmy6FbhbwfwtbrUnkYosTaciMUhiubDzVWTi8pzGQH71CqUiyar1dxKgqchgKtbkuu4C7rt71MGLQcBL2KLyqG",
  "key2": "v4weXfKUbj38ASm7gB2N7kZGb5FVbGzc7fSG4L15KuZeCDmb73fBrXrprJ6XCtX6UjH3EZG2jHJzB15zmbwfJcZ",
  "key3": "3dXUq7N7RQD91M7LVuqbR8F2d4QHSqXyKTxeUsUjYHReMkC4tcJjGEXH1EhkrXy1ep419mM6myNpqgccz8yyTXMW",
  "key4": "5Z38w1TydEBacsVvek5fArA47F8d7UcWr6VTQpZjFVhy78mQiD52ARnVTQ2H9LmBjwVMsyDpvLCGibhso3fCd87d",
  "key5": "3XjEKnFBsQw6EGoBnCGvMPqwE9GUV42iLEfe3ZJmzsPUktcnLpQd4UYc8ZyGp6b5vteG3nyk7C7iGDQRseBpf5cx",
  "key6": "4PCz3vK3qp8qo8LZ1unARiqMzV1tKPf1mkaoAWM58n6Zyt8HcPswMQRoGuDpcYbaAVKPAJjGncTsoEcHNBVfmmQx",
  "key7": "2bzgfR9LkBDxnduc9Hk224qLxV3mAL1ixRTQ5bvVih7HYrwoRZwvPH58JMhXdHVwvWQcufsMViVrEhALes9PcLKc",
  "key8": "4M9kwUMhFD8bccrs7T9ZG3h2D3qkraLbQ9b39pESTGRUHMbJcEXibYjYNau8aW1dR12LebrHNWJ7dKhgrHpDBc5B",
  "key9": "3Lh2inJpPWBf4HGp2DbnWQGUikEEYedv4mHQNWSgkegDzbqn8Z6gPqu58mP8XonetVKt9niqv7vi25qKc9g8ed6n",
  "key10": "yvtRTHS5KaBjHGYPk9YZ5eHw9M5ErscvqpFNKXUGDs9ArWvWtWkvwsDWjR6sesXXfW7Dj8aKSfzRzRVNj2Zvzv8",
  "key11": "3a6XJaxB6K53mmQWVAxWkAuLGNbNcyjvmoCqqQzWxDR9Wm4ixWLi7r1YPKU3jgFRnV8ZdLCiXd6CfzmVTfsUhLuJ",
  "key12": "4AQwzmjMu8rTAiivXWZT6jPe46t5qQNi9iN9T8TuXGgHUi1Gi1mbfkaMrWLEciqSLUW7ofKzxte7QiWaPwMQwjin",
  "key13": "3qTZ7ZVtku4akkL1x3BdrNX31sfgj5qSN295wTQ4bTHH6f5afuAc7voZ7B69rrEAwvuKpgv7hgy3TJBGf2MzitmJ",
  "key14": "4BXpFTsQJtkNQLknE8XGNKtKXmydd8RGK7waWuPBadyTeuxUHme4N4EpQH9hZucFsx5toCk7oLShNTRwTjnfraCV",
  "key15": "3WwRzN8kFj7UPiT3MGaUbcYQMHwvxZgSPU6TeYhDgDZYYkjiCqz2hn46nZYLgtVVYPyCWoMjj22SEm5UGVyE7SN2",
  "key16": "498GxNTA83Qm3T48LcUgLALUbS288Ab4oKtFvYY76L1sqneKRbvkCH89AmaxNWkmsC7zqyQRr8RyKjVU3ecz9fmW",
  "key17": "3o8ukcGXgCVBUNa8kBRf6L7D33FeHyjNDGtKAQdEyRKFV3EcfUAGZUY1D5K46jhaEs8myKBNZtYwT7995DUd5o2s",
  "key18": "4Dk8B9RbacX3sGeoJKQFbt5Rpz4mgPgFrFjxm2Fj1d175aLyDN52P3dNcqfySg1uDJVft8dkfrd8X17irRYU9siu",
  "key19": "49k2jj6cer1SMWgXxsweScv5DUhG5nNhJAyt2DqW5tx6rF8M4SRtDPZjqbRHkXQogHHWwbG1NanHKC4E75W6mKZw",
  "key20": "bpCMc7B6HAe49dZAhRxZfB3JWsHqVjLNcUysQVJin1nRe3UDMAeFQYofsGHyxUqniakTXnmJZBJUFssvsNSVick",
  "key21": "QRP7xfJEPxytZLNdy191hpqk9N7k65zrsAh1uQjRSdGAgTySJfwdsVZ6EL38uSKa31AG4YdQ6CZEErd3h46wbGP",
  "key22": "QbLKsY5AuXgTLYy6hZLhqAXZTB4u7Yi1c8hXuo8zF7wmFCE4nC7ZDNeoUQNyoX3W9Fg5Y7DJkZXoNkwphHKQzKw",
  "key23": "5XJHKYknD9ckvYzRBW657qzbtp7Dm1y4c1cAFZw4AoTyN8p3Q5ydCfhgvwUsXGD5CBH4SWS2f5y2xCn8uhA5FPuz",
  "key24": "2pK4LCpQ4NSVs2WNiiN5B33r9gMdBhDGb53wPhTiWEUjfj93PhxdFW8DTcFEFZYwTYGVC5ASQvKq6eLXuaJF6Z3P",
  "key25": "ZKr8W1PTWrYpqzk7bMwQrBsWJW9QVZ5vbthTfZNYMojgANDiD8MdCcFTgTi7W8P5uQr3FobTS5pWT3kmN2Pwaz6",
  "key26": "2T7vzJ22MMHzXihTWEczXwwuQ2pqJjMsBgfooqHnrDe8RvQD3zDK2S8JF2obzYhhwMrDdNZ8Q7YVfEN4hshbqPvm",
  "key27": "38FqCtrLoq6qMCJfud9ttuxQTugWJ37CjG4waNFtu4DRGcLf3BPoq5Q1ZFXRtPefG2MAfpKs4vJCDG1FRQE3oGes",
  "key28": "2DLTVHVMhbJNVkaYt99fjxKeyXW6LiEFxHfK4RwAk51RWNXeCTytLBHovcKCWBhok57z14eojgnQUJmT6yaeyS1g",
  "key29": "51cPBSA5rejA4TchxH2yZJoPtfY2bXwPL3ZGAyS8VTSpdb9f63TNVsQpu3kXmfrcYSC8u6eWYCaa8Lmc1Ym32nw4",
  "key30": "e9Ddcwu7UJFjB7c8my1gZdcbCpjUGZ87FgPgDrMtwFTyMK5gx764mGnC75DAaS3v1ah3iyb6VoPKbAQhLyC4USC",
  "key31": "2h97L7JCgfdSQPLojafqsXvB1UWW9wLFwtQjEQpVdTuiekcyPq38KAWkPX1nEYGULG7d4VsjsXtffVxxyoveMkur",
  "key32": "CrTUmaDMf9SLZNHuoGfMSCX7Un8FGMVgv7VyGyvGvn2jeogYUvavoJyaC3LC8mBvUmJBQhq3dMvzjSCFaBZRX5G",
  "key33": "VAvJwc5Gv1NUi2HfTetRCNH91a2V4xxfJhSZ5Dgow4BBxmEMHUkqtC6BbAf7s3qKqFvmhKwH5YbJwtpbMCaoEYb",
  "key34": "4QwhhV2QRmUXF8oSefkFvepG6jFVvoE79B3B6YEc8G2vM6hxnukLTcKoHgdueCAtVFLaeCkaDzdpUjqmCuVTQYEH",
  "key35": "5RkGAv8pcXBWd2i2U3bC62DDVHyc6wAg1ZRJTtvXpgq66qLhqkSpMrAKVpwzMqt4pYbxERQ9BqgDLonALBRHwVs5",
  "key36": "3HaLzfBUPrYu9wsR1d3mHYMwRiSkR2nWytvBycvSssSshxnScq4xtismaMzjX2tC82VBqBb1oKYdM8Nmo6skCwz6",
  "key37": "66qVghs8VWiLr3hDLicgH7H8UNWDk4nSTp1jjGE57XKiASieS9j71aQMi4FJLC9Dh8Nkv6iCPcDycm8qi9B21zyw",
  "key38": "CicjtAhFMPSAyTRZNoHEZhpXozsAz81VSxJ852dz4PAmY9Qg8H4RpH9oLvEeV5venQAQYdgHWjbHT1XfzWPT6CW",
  "key39": "2N37MrX6knPaTXEdPq8J9iejQsqTkAW5X6JXnhVvCcnXgTh4dEh4DZ6GQ8mpDYb2NWCc9BNigJkeRnMN5x5j5ZLi",
  "key40": "4QACF5X8xih73BoxgxT2P2XgFvAZkwjsWtq6UTGwictnkASmiY4vneacNcTbRwW9LoiMhFKLQ14j9VrfgDggRcb1",
  "key41": "3mRueB65eFCnoSA6WwzndsKeUrhc1RGpWRT2dnWtnv3fjtpvsigr3KnHJaLU6CXn4amVEpkMLbdZHxb3LeMFa69b",
  "key42": "3T7ypY1jKxTNaVCt2RsxEzuNriUPQfd9YVwzv1HSfy3WesJmsVVE4edomYALxMSNb3d5mjn7KtYCt9Vebqu4fWiy",
  "key43": "H6pb9W1xwnkTBEM29WsAW7xqMomCswpjNgxuJJwRWWPZfKKyrzcJ4SuYsu1AuDTobNhWjPxDUCMLcza7mwBVoVi",
  "key44": "2pZxQawtAjVZLK5QdhPg7K8BGhbCaEoGjt8Yk8a43K4r5V6nvqNPHfyUTtUz29qCJUwQdg8HKoCRhQQ8TPox6qZu"
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
