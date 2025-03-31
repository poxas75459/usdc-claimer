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
    "5xdiqtT4kBpmkTBBptypVWhggeYv987XJCcLSYwZ6gKHg8XYBWe6Ux7biLCVJzxXzQ3ekQHrs7RzNuCQFXoYPZV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYy6KX96GsCiDMhyCKz7Fqe4rnWguoCpnkeNc9k5GvLTV78hnqKyAdXifxosPvDuYuXyKUPf8138intov7tDbT8",
  "key1": "ykezT9K3a1Zvwo2tThBXEpfUJZ3BdE3t89EAcDgFeJooztLgdr5QGus3iJBSmbPcSsYHqHVN2JAso8v2KNwXR15",
  "key2": "3Qr9Yeo9MYRPBrez5oPv3bmQw4JTUtTQ7wYVYu3KtBNRtdzib1aHSumeZzFGoxQjwJdBXSSA6Ciipypfg1nGAmoM",
  "key3": "DZbqYB4Qmr6su6t9GT9XcmCP9zBtA9m6QWL12YBFAEGnXsrKmDDYD3xMAUGQXmLEyD8xM7CwdGbj5VpjDkhpTsL",
  "key4": "3irnmBRwYTJFLdYoDQgd6rH1FFxDrKtoSC4gf2dak8eP9QgVrfVrWVoBNaS6XVgJjzUaFyEJNsxZqf3fimrp7pPx",
  "key5": "3vRvArunEHwhu4ejQsTPXFaaB9rXp9xVfPYNHB6kWvLWjRyyCUaUGJdnBGbfGCXr5KdedQtEnfEMR27wtGMny6HV",
  "key6": "cGGCsjJK44h3nZYpBJieFYpzXNpfTFi2f71X2muHLm3tpchmQm1j6orLVESZjz9kStFdHk2g5gX8eyumScXLBTy",
  "key7": "vzabDc7UsW8aFB5LxAbmbTCUyL4xk3KSUtTrMMJsMTE2p9pGip7mLexjxFcjxhZR4GwM59K8umJcqgqdbWTkMiR",
  "key8": "2X9fvRmpsL5pHqXHPCd3oLNoAgrzPhM9RsfPzFQt2cGyzLC58SRfKvkTAL71vZVMbFpwY7GAzuDg8G9X1pZe2abu",
  "key9": "5zN5tSaQssh9S2nSLP7b5tintxvHBWWGGmwdrVW5oYFxxfa356kArowWW6KNHpzJH3fw1UooKFQe91cSDwtwoUgA",
  "key10": "4NYrrGz7GJNip9HnJ8VjFBPGpYYiDgfsa8FVjoTT1BEM1A76g2RRpWyiXhVp5JwjkBTPGt9PciwdDYjGMTqbSki",
  "key11": "3YzTabmzu3WzkafTYJoKuuywF4GJGMnsmCGTdwzySRrEbovWV6SfdZ2CiLh8mK6j876iyCgHmd8uKrMGfJmbUrGs",
  "key12": "2Z7nZPvZ63fH44thmuYdEGUKFo8jyHXBzUYdBw3YKNWw1fJRWaCC4qUupgnpvBWVo9m4872kRbGhTtA2a5434kZZ",
  "key13": "ABZFmkm3GKbzeFZxx79kvbuGCutfVpr95XW3Ka9mtdbaKakadkQ4fC7WxF3XwcqgD5r1ULs9LQTeakHGrLFEk7B",
  "key14": "3abXWzYLoFP37wNrsT8a2pxQsundrZtkGtQ2SpF2s1WDyJiNN16Yw114pnfmLeuUwhBFkC8oTZryFBg881TYMyAC",
  "key15": "4QJq64hwoPXyA57CzN6JzBA49YdcdqsYeYEDTrg5qaWLyEZhmuEvZ2B9ZEGYfV4FJTXdGqCE3ShYLgsXRgcv9Ty7",
  "key16": "5941grBELgQ4H8hutg7ZwCoTykgpbnzrnJ1wjv2iDh2x1QekS7uUbw3EMTKro8BMaoxYZDrYYjvqjQBXmYHdDR21",
  "key17": "29DcKAaouhk3NPs6DLby6aZh3DZ9QxXRwexv4ok3tbBaNtJ8LYqhqC4qfSzNyvZ2xsg1xLwXk2SMWem12dAweFmY",
  "key18": "4An76u1XjePUJFRguZjV9HgEQC3AwBz4j5yvj5Nw2kXJ7tRrsaRNhvR6LhjuzkDy5iR6daasE7E3rbbiHqT9hQPQ",
  "key19": "2YejgKDXwxEHhWqozV3BMcpredcTiHjh7MsE6e3wmzpxrUvuxheg5Montrp7GE6E4da9UCLaQxfgN9s2TXXJF7S8",
  "key20": "2vLWZGf44D7xuFjrviozPAKSU4sK9epxYaXRHFmYsxuq5W79d47DXV1tq6s9umkKLfioMAQTm9V9ytWYqDwwEEZw",
  "key21": "3AMRQ2EwxRbe1yRLs5dQwk8CLLuFzouJ6UVEEY1A6UHKUeDDksS6PjnCupcqiPYxotSWvikRfs3UeJYJ1teyN7nj",
  "key22": "3rFLnGzzinQBiKx2MQiay7dLSRfktSWJ6oqjGHiTg4dvdzgE1u425M1N9YhHh7FBX7iz9Fx1E3y8C5HFmYbEsZKE",
  "key23": "2f6GEzt7miZ32zCf147Xj5vfHM1QAikgjUWmxuAa4JwMJg66eZoC67qvXjgbzKUeqCE6XcRMMV668khLCWV5qj6Z",
  "key24": "3rfNwAmk5k4ynby3rrnGk5VZaS3Anxa9aRpASYo2La1ePqWpeMxQqoj4oJ2bcksoY4nE9f7Wkttj2wMgGhxfSpSD",
  "key25": "2WvY1GATKqN8zaqobaEnLWYpCSrga7tM44WPPNJe6aGBKVGDitRWKdXDzJ4DPyXdd1x3aov47SkT7LUpbLojLEye",
  "key26": "5mMEwy5FdiN9DBw5mJE8eoWV3DKJREL7EmqYEwSFYdEuq7tQRMFbhirtUPmTrKiziwXSk8J5J8LnDQZtk4Mwxk9k",
  "key27": "3oiYv1kMR6mHcfef16SoC8T9pYC6c2Fq8v5Qi15jN7xxqbZyGy2qbiUPLKsFyubBAXivq7mnDoLsCUzSCB5rMKPM",
  "key28": "3P4v92RVT5TuzFVpEFpp6oxrDTdLKoojpj8nXKPpCQec9xa9NWNSYmnNGHQpFeFexT5EBiKH6JmYJwNSZFytrNuR",
  "key29": "5DL7k1jWu1qhdD8iQFk7WsAmp2cGrpYCb7hbyWGYYf3HDm9W2eNricj1i4RwDMdmNY4sc9eefqnpLzZQDpippi17",
  "key30": "5rmWUZiT4A1ynkK1rA5W5jpsf26ak6vgn84kwJLUdxLiUJwMNMSY2Vq6LbciCX6FpbmPrCPc9LoAhVjy5QHy9TwN",
  "key31": "s44Tb44gKKRiJr8Kac5d86QNR7Dchd4Y99V4vfbQUUoRQDx2iA7BVHxQwSDnwoNFcxTpVAembnXGvcco2JxVhJd",
  "key32": "2v3BNd57FYAJNZ3bDXfVMsJZB8DGZP35LD1xHrKNnLqbVxfa26SiDVfDEmHPkksVKSkbmDqzaXHmPEyPkDveH7tf",
  "key33": "4VyesPPmqabjBGtEz6Bx6GSU7uQbwAArhyPJBuh4oz9edmi4R6SCcr2mgwQPMMwbQSDuyUan3Zueuau8xY6FtBQh",
  "key34": "4dkrEWJbshUSdWZ9Wc7JpZMWkrJFavZi7zKYDhBUSw2QsgnYAtqofGxMmCMrdsXnmbb1PSmAoqhmeszTJNXcHvJF",
  "key35": "2B3ymz6nBFq5CkZsD5f83UdRxtrGGGpoZQoxGfCQ8vBFgPqKCERP7tAnVx1oK6cPmSWWsQM2nNHaEgZU5UFrRHZR",
  "key36": "3GzsxnsmR9JFQNVfrYvtXd46WtsNGVEfxFZVcrkMUmFTfat76hUhHZ2Nsgmr5saFsCzRFGNrkbexnhjwCPL87qjX",
  "key37": "4aUcY7JBSgvFAZX1d9q2ekTDxUF7zA3TEA18Afh6Lu7Kkpe5PL2bDCJ36bdA3NMBYWiB2YxgDHasP5HSQEo2GFLw",
  "key38": "kxHaYKysLoJ2bTcQQ61jtD4TjYPxqHN9v3etCbTXjDrEjtKiHj5EZUUw4mWk1L7modAWK8DhNVHzVhgiSmmGpDe",
  "key39": "k3yExFpJxFSbBX2CjKKzDsZKaJbtwg3vurFce7JV8G5go9CQpu288drURQxo3DKeFUCv1zgHjHSTTXpqPT94tQ7",
  "key40": "5u7wjVxLVNRNxBuomukZMx4jptJbtRCYiCjEZaSktgNdniak6N9mSvbuy6mBbU3vqE4gkJM6qUoaPgBbrYb1eKhq",
  "key41": "3msrANphTUVEANZwYZHk3pXsvFRWoisLiJYGWzWjJbTLUCTrNLX9FLyHcQxJycrhUGrGjX8EecmbzC5z7q48NMWm",
  "key42": "5Y3aJhcdgtnzE2AMQJ7SDrMCG5JZYYp1RPUWAcSxVoznUMK4SVQbSyeQcxAt6xHctx69Ni5Rgn1d61egdruXXVqC"
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
