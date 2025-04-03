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
    "27RYcYDpmeW6Log8mR7JHQbyRxWt1qnAKtLo3LJc24CkxAKwzuNevbCQtft4ab7G8JWC5aGPJRcibnzy3NcUHfR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24syFRwiT9mTzbZFPKhJj2KY7ctmfnGWbQwEaTXrr25TkmeNiAuySgXgzvaFFtB2rMEgsgy4dHXR2aAqcB8WJXEg",
  "key1": "5zDg82sZ8hNeLBKPViofA9fTtti8NsX2vP9FESHQzrD2R3jf3eNMhLMtGdaMrUDkCBmxcKFN93Z9qSzL9kSwhiii",
  "key2": "4UN5yQz59Wjec6cRiUzVsofRikP8rjekNBcP8N5Hgt7YvRS23TBrnKELeGyFLRZMfP8msDXkruoZA6XqgsTwLUyE",
  "key3": "4YrLSiBELhnthnGijniBbLQKUGAVYWRCahWKzHun7QHzWAm2DjLfLjxqgi7yzAbAnwVnJjt88QwgdTPVtcC9y527",
  "key4": "4TGnDBsKd8jaX5s6g13uTxoFjUkGWTVYPogDVfMSKMYkRUCwDWQhgBn11jz9fFCeaewuv6fTiAHZwKcUust6B6k2",
  "key5": "4q4seh8ydeRUHsJd426rLGWU99H5bYhNwr3bTVcsU6TVfC4fxzGkfcwxbQjKkhy3on1bvtLYFS2Y4PrDTvKY1uJ3",
  "key6": "rkrW9pBMD6uzwdUEsJ7eWdF45kgSPJD2vftN59p5J5pSyCYVW3V53aNsj3GYprjyQH9jqj764zyg9JYKgSV1QhG",
  "key7": "2LwHEcrc8aBRxzCjd66fbaTea4u7D484BVD97cPrR47APrJ8kKFEdxckUUeEpjKso1XhMSf7nwMTE6JxL2v77sNT",
  "key8": "3Ln93L6dYLwWcezRevhxYv1yRcSmVYvAomwoSggRVYtF1JemNLXKDpkdRC8eRCQpsn42Xo5n8xQryxiAs95yNFHP",
  "key9": "2scyKe3QYZeVpWr3X67KZNq2WGKGB3yWUurRqZZBPYAUUrVZhpwurK3ruscpMQFuh9TJBaM5G6RygPQY1kcKLsMT",
  "key10": "5Hx7fkGzHZUed7p8n8E7ntB3BWVycorww6i62NtLAJ4QEbR3je4o4rykbLj7cKmFywmJ1Ufk5bvkWCwTN7u7GPMU",
  "key11": "3A1p9iqtkA5obWon7PJQCpWmpTjBbPzW2WMBZ8eHMrSTymd6pQoRsftpB9BfxEGCttVcCnhfWHUShZ62sYuEM8Nm",
  "key12": "3eU2umev6dYfgvAKSE2MskB53PhaFBM6iGq7jzW5W29LaRw2N4L71v8He9bWqRw5nwXRvaQAYFyQrAdyK2KVxvTc",
  "key13": "RnhU55PXKNcYbztcRcq21ZXk4jBkvWr8RCfBevW89Ydgr6Z1von7Z5o3VUWQx5wyDiyVD1xuhFHna5dgtqdeKQ7",
  "key14": "4143Kh3nnytf8t6rGHe3iUwx475BxZ4Pe5dZj8NVBzJJK487eem1Dcibm1BrFq6jjV3xxEdHBosbjnMnYyyDSJti",
  "key15": "2iMVXdw9QF5p9eaUBNb1vtpR85M5Tgv3dMK6qM4a9iJboxgRu1b2VBGxWRgjLWa7YRQBsvhznTwm9wscVGRXC2UY",
  "key16": "2SQd2pZyvsvtM9Woo4fcvan7MhZgFXd9MUXRRe59m7RWVWtTF5EUMyY5RFaQJsChQR8ossjL6o4fYtqp4gi578nW",
  "key17": "4thKpaQhjXoWqMkHaQt1WY7XdNoGEuh7Bmo43C3KV1CyuD18jPaFy4cBKzjDsnaqjHW7axuYQogypHdU7kENeoG4",
  "key18": "2Y6nxzCNZCzi62MUQ3hB21bWaQnXHtBKqmHPmTvsjskQFHjZfytG5AWgKmsCHoV3PoBNjeyPDoagNruTpWHentBF",
  "key19": "5bV7J1xDACmdVqkJuV5FZsQTxbPdmFiPyheqgRxRjdeoxM6A3xtdZcgGQGri8z3bJ9cjVLoq4iyP78JwJFqgnt9U",
  "key20": "2BdcrFiaQNKBanzVcv1HpWsugKQqGMUpRrZTvQFkgM9t6wRL2sjd1zKVKFMsaeiGs4D6sayYUGPvmivzPwHR3JC",
  "key21": "2ntJpjf3UXyEVXTThuvmUpxfX9PYGdKGM5CNNbBKNsWSfkUk6aupjGazyevVBbNX6gdFXQoLqps7Jp5kd44AWVPP",
  "key22": "4jo8UmsCtt8LGDPyzFVpoSrrJtUoG9Wuuod6AcSbQBmBAZL5Mpsu9Ufyo4hKoUhjKF4AEcgBmC3LWJSVjspu91YQ",
  "key23": "67cu1ZXeeGHA7o95JeThUeiBmh1wn4YE8hufWmnWEbLM5UqLEstB5ygRVVuq6fme359Fe1Qd28tGEdWPXjFUo6pp",
  "key24": "2F5X3rNebK8DB9SUHKUw6vwm6tZgdgRcipHacsKWD1ZB5VzAu6fP32otdBXBe6QHTyVQ9U4qc8vXu84v7v5TgEsr"
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
