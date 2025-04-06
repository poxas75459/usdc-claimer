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
    "4mLTA4Exi8ReQrRNHXuRzZ7FUvXazrWUTtPAt9bT2fqD78RjyJ6kCk6RZ1fe1jUTEc5RPfmianch8L3WZ4ZjYmHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmqHk9WzCfzdJZQ4CU1mpeQvvDtpNCyvVUEATZYx4Xb8bNrsyP4LPo6NfJ17grGfofuZQEdLgYinYfhxWqeTxE4",
  "key1": "3ZdavWTwwxhj8vtd4V69u2JKrdt5nQK3G8yTw7wDwBi9pzkcapqeyFYYYTHrsSUe4dz7Qzh2nYVgMFsG4XvZxvoY",
  "key2": "BbqLsgP9G3sA9tsQm5M9CrQQxT3pzgJKFi8EBdzPmVVtBuaskjkiFrGPUjtXsjFmxt6Fhcj21py6mujeyVnGcDe",
  "key3": "3zt6FWM12LkHSn4pYhsZdQeNbURqVecBJyz1zEFuANveEgeYuVbUicPyKCDEBadS9aArdCHGrtCgmjvY3tTfywCt",
  "key4": "eD94Ut9c2Ft6CmhyHzoX6xiHtgXDm4wiRL1fhdbQNf16toPdwX7R4H5Bn9g1WQnn4mWsV9WNWyCWXSZRaDh9x5Q",
  "key5": "3G6ks6vmHykwr8tq37HPTNBYsPXVTrixs6DgstabPSk8U59ZKgBsoVUijo6CHMXFN59wWEAAqGcyQXTniRwsGVM3",
  "key6": "2JdmaR7PqUkFnPbqtNtU5Br3TmbBd4zsyiKTVQaW3jtdbthHgRcyEACudByMHjtfQgYQbBdGuGxH8KczrLXXckEG",
  "key7": "58frtSWV4rsKUdv1Vg7UkaaSBn6w1mfzCpvNuDDzb4XrxAetaTJrCDJhk2woogVR4THjpugQxob2kpjrJdG2tnJ5",
  "key8": "27sUJnKxwNNGTSnBqVBJhhhXhvvvbTGrAzwhQU6zAidJ4ZgdByyoGHwYokzf81UKQAiTeaPdg7fMTL5rELNvpo6h",
  "key9": "3AmAbje2fSEV97bg8h9kYCFnJsQbAcHnKv5sqFSaYXPuvbHHmyqSUFtoBc5wJoAfkC93V2xdpUvtjV62XwCraQqX",
  "key10": "2MHM8B5ncV47oarvUHyAzUiKCoEsFXKkeYZq4Fy6vqJXP3BjHmD77stGUNK6YNewJ3DV4X7pokTZ1wV6Rw2XDd3B",
  "key11": "Nss8ZUvDmowyd7U76HXmoju3Jhs9wUB8ie1ouaoXCHM9XddF247RqrapXq4gPFTCm8UXCUBwuoJaDqkXZcbq6Zb",
  "key12": "5EEHHH6fi4ZyrYCkdtJ1DT3MJNYAZhz4rpx2NQExm1m5ftoqXCJViomJkZnEGPX4dLEHGJaDmBqLcn9kUtxVjyEu",
  "key13": "5Sda8s7rabRyhZT18mHp6mAtQHDT1xbDjzSfZ7zgN8RsFamS8zLCPLwLuyp4JD2JQ9KhbbGKFZK1SzNQiBcdHSej",
  "key14": "5zfc82qh1MAsgAiDxm4fhtDBFVpJ1F8Et9bCbamCTB3sts9EFVEbjtsNBDNaB52PMX4c5Gj6gbrMULkRNbLvykKF",
  "key15": "4XW4i81VPWYXEBErbCsUmdx3potf7UGPC1RZdq6RLkC7dSm1jYz4VNN1KKwT7T8LRGoeA93HA7UubYXiaAPbvqgQ",
  "key16": "4jRzYzhKt854T3EaXXYnTFSUnPvWbncm79XhSGscFD3pKdfy28diE3mr2Svq2hrE2RtQeV4EhmMnM4ojfVGxvxMa",
  "key17": "zHUXzuvo97SAY4YbPeYHuHJ6S4hhqrXBNxXzjMD5Bc6z2oBfpJDyfcXgKNaYH2QPg5apKxo3Qc8WjyugRErmyaW",
  "key18": "fP5Yuzv4d9qfZSj7J3eCMXhpGPMSJNdAwrF6jTuC1HoN5t8tgf8Bjk7HBYKk4ZdGG7aS5ALn3vYfWxxsDdYfjMc",
  "key19": "4SczqSuCqiM58qwNVy1o6ATcnTXTP1PrDWVY72S22NGHcKxaqCUUv1G4k5YUmneRQTN5Zv8XEUfx5fA4W3u4NEKh",
  "key20": "5Dvvdx88HQCZo35tBzbMSCyjnuLaAia45qesnanfW9Sb2MpaQijA8CSk2PBx1UWrQLCEy6Au2bKt5gKz427GLLrx",
  "key21": "3D6QmKDhetEBP58PyoGLhqKYQhUcRtY8VCG4MSYoZ7LyQRPq89kxXWj2q7mvrtqKgye6gXeHN9a5u8c7itLmFVKX",
  "key22": "3AHpJJL3yb6GiM4sURWEhuyMAm7z1eBQaXV6QB2VXYWqZDgEAgYHgjwHRKukNYa9JzHujAAfYU3ZjqwpBfab2shS",
  "key23": "7mRKKAnqjMzNsjPJgTiCA8h7wHZXNs3DPpR8JB93ASPB9We12TqppiRApyrTT3JUa2kzHk4qheJzfmRCz4vuLC8",
  "key24": "EVxXJdVJM1fiHT35spv5JWP9wp4Pg8oT1HR3FNwuCdM8my6j9Wowq76ddwAnpeDrzPP4MFz7YqQSAVPMB1qHvM7",
  "key25": "3A1HkVYrCsTBcUx472YyaG5TtitFpEimXUcsbeyKqt6LLBrD14CQZhCbq5WbgAL6Dg5jQBG2yv5FbEQf6ZgLPgES",
  "key26": "2F4kf45BXXCAEDNP32XMxrTdWfPhQnHjhukB91GwWztmfoCWVzESyhY6SkCG7v7xxzqKRJPUY3pW7tisgm8VTZjc",
  "key27": "2yQdkFwUwHTh4M4WvzXCUbJ92RRnndN2HYtdJYUYYFeiX6DpSGxNxwKyf7LfNkzmmNV2t7b26sgwCExV3nZS76Ke"
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
