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
    "41zSYcj4vssGaoH7HWhF5Zgs1G7egvRTR6j2XPhM7nWf7PgjtMhFYHJLvgQKvDfnjdnJ95NENRYtxgoTvh5uH1XX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZsWF3nUebg9EanzTcF7AznGrZewC15U8E1fbse7U4BRbDE5zzrwMELfnhHKmN7214iw93v7yYU8kZ3pBbiHpqMC",
  "key1": "3hQtxWfB2ugMAupVj1unkStBkWLM5euy5rXB12iWGv32i2uydYLSgiXM9FNgGCbm7f8G83gsy9zVzNhkuSbMorA4",
  "key2": "2nfKLx3bnJxjJQgjeiezspHu2cxWiiHsRVaaJWhuReUwPG8X45BXmyjr8pJ4giRShn4oceqeuUHACviyhiDvK6yp",
  "key3": "FwXDhYA5J4pJPxeNvr7WeovGWHgsfvPJKhMFSfd877B8GrcwCkjzfmLbrqEpr8jeamJJQWRWdSSmwqary7fKSbT",
  "key4": "QneRgPRTr52wt8CYK3zTq9X87wFFn3A1tZHyD9rbrfpdYzcrTvbMyF2SY6qunKqmMjUKWse2Q6qwKCGoijWm9cv",
  "key5": "5gHS1Rmyd6mbAWtDcNBvVRHUPxDP5g3Ag9t6Np6LJy6vXHDVvJABuKUYwA39twTNhkgeLYbjD9ZrifU6qehvnFN",
  "key6": "QZ1bL7zfjfcd3bWos3S41Ddf7GGyZ3RiqQ5dNCCSH2CQt6gco2KbjM4gVPdu3ysbhdQToUY53bSHDR7jBNkaCLk",
  "key7": "59JQi9NafKovEUForciD7jSGbnQkZu4TgHTAeA7UzV4vLFhu2PjKzufbB8ZbyANY9Uz2xRgATgqJ3Rn5L7DRfyHC",
  "key8": "3mEFsFixavtPSojsmgV9B6ayLUPTmRbGCf8D8qVg2bK7rRrBKJFgxiKikpVHKu6mFyFzd14pmPRCFEp8C5tbEGZ5",
  "key9": "63GnENnKZkoTLW8koa2kmfwEiaVcd33KkhCELKhZJDTrRtqGiZNffUe7bQTbeBbzkdWQsGJTQHUM1LF9f8STdMsS",
  "key10": "34LzpZcU7hVrvsXxfFdN5X2n9hVZ9WXS7v8ESr37Au5xaXZsDjJyb2oobs7FAGboRzCY3LHKH3NCqMrMmJzrsPS6",
  "key11": "4epTFb8CK26zCH3HjtZHHsRjMwS5GeNKoxBHphZN93E6RWScZAGf9vPBfnqCTmxQmomK32BapsHFGXzhYv53pxVX",
  "key12": "5EPVFWZfDr7LRQZnkjWt2YRFVHn5sHPaHyVu9EVA5gcKhkiZAMXAaQqbdvNJkUZGjaccBdGTuirYYYvcNWbWbaw8",
  "key13": "4HNtjbB2FVqWxjZkLzpM2etPDMgexm55AKXhz4xtaUpw89GNNNYGyJbFn5ZHdhFbKHGmmz13sQqBerPCRKk8C35E",
  "key14": "5H2LorXg5RzoE6B2c5pArvMT7eeVVmaXgfwh4y4sxqwjT4zkmr4PS5wcrsQqV1VtATJXjpF8gQoRRKbpsvEitUsq",
  "key15": "pEWDfGduKAePRryWyAC38NJ9wDPJAKQWoJjRnn4SVhUbYjbkSumKp5PeGF2XRXBZhsdg21Y3LzwaDv8BomfpTqm",
  "key16": "65r2EmdjP8MnDxRc8y9mCULqAFdrTArrfwM7ab2v77PbpuGvqeXmwgpYBtnGbiinDnqx8AJKPC4kBqvVTXLUX1iH",
  "key17": "FLGBXHHpnZjZNHMY8Law3xR31Xu3TK6AR8EgRb3N2Q6M3nFgZHYddPdAMKN7jBWF8iJAVAbNWU6sTUc1u4uXQxd",
  "key18": "41ZSMN7de5Hrxvju7Dsn3adLn3MZcyoeWbZ3jbSyCcvRUtnwHP7f6E5MaZQ9Q9ddjbFPNwaayJvNfMXazKjGDSar",
  "key19": "5hQHmmsHZfkJ8CcmEDgdVasWh7KF8U2SLwHV2DXKxrn9Hp3qP9PtkQh8NHGv3QLpqPoCdZ5Lemhh3Bq6DhhHxrgb",
  "key20": "t4Mn6Z8xMJZxBw5475jGbbX4TsPrjBUgiLGMUvFVJohr1BWFVCFDVXQRxd9fppHqgTCCzTB7hScAQarte7xqHPM",
  "key21": "249aJ1nWpWYKGWG62wKn5wyhbZv4efZwGxVLdKDqm7oKvm1Q73SngDAXJnvrNR25QmjTzfHaWuJ7ySP6ud62MeVb",
  "key22": "4JAgnrsuePBdE4KdJAnkoqJwFgAp36mKyqXk6HgaARFJuxfcHzXM2FK4RyWMfgDKWQZ3YYqzH52fyFh7ybW2AAvK",
  "key23": "24KRx6TnposJFXNkNukfCYwgocVExjn3x23J6CT9EhoACgA6Jnh1NZbumf973fQPsvnvaMuKKn7hojPQdgCbforb",
  "key24": "2r35spy9pwFH8Ua4Y6Q3VgnBPsjagdHTtayvrTm6C7CdDbumLA9AJXLfzctmp9Lt9wt7KWcmh7h59DPF8P73uh6s",
  "key25": "LbqaCHejoBHYFAA94TXiG643BT9nZJREuK4iA6vCnMdjt1yRzeW2giA1wri2hEMkhGLSzUCd77sjzSSNdAtx3uX"
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
