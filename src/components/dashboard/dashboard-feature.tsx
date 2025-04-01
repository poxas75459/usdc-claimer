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
    "4Y35JGCYepcmMQZqTTFSeStixBfwWM12fvMXPCYAurQmSzDzvJu6Fqz6gjTnZSdnc84K6d2tYN6kXVCcpWPB7DvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6KAiRLDUbqjYfgijwf3fJqg4xPQYkpCWn62DeBtERTRRQWmWECAXCzL2hWFELy9kdd3R7MUfEkRBX6pamiwgav",
  "key1": "43iRVfm8w6Z5wJ5Pb2PUSbuqTLYiMBfXjRJaZ3F2Fwh79mhdV7J86cMDJAAzukDoZHhiyHtJgmfvtbVXJXp4raM5",
  "key2": "69kwkr1ok9yCb3ccd5zmp6Xt2DjQ3T7hQvUvk678SfWjJetsx8eS3yw6EKLndC6HW8Jy335W971aXYVU38oYutg",
  "key3": "3Mq7PN4SMRbo863mxqqHwiTFm7Q6qmVK4Qfs4wkn2r6SHvgiMVVEfvhcaazmQNDQ4HobNfbAuaoxhwR9CweFGBxM",
  "key4": "4BAnmAKimBh8nQ18R5B97zU9pi925xFdx8D5BbcmMEF6VA6Vh1Yr18gn13mQuqvUnAjbty5CjtfYxg6WBGAqTpuq",
  "key5": "5B6DZ1BWwYi4UNUT9KAG5cZd4bthDMs1dRvUAseBRuBzmmstaHvg7QSpLUvuHh6i5BMiePGR5sm8MfuxHEAUWqov",
  "key6": "4dKyMRJy2TtA9fXWN4KJFJjQAMLCNwayedQgeHPEZPSNSVZvmw8pKV2ShS7whLVwHvniZ7ELKqyogQhbfXe91G1f",
  "key7": "7LvDKfVmNpfHM94C4fpSNuc8ePiv1vtiaDQ37rEL8heGNRvLsuzR3p1VJYPfgUBuKWX3iGopkoPnwKp5g32ZCCt",
  "key8": "585DWsaBCYMh2HBCWJ6JDypbYyj5pN2rRjZTfhSC9eQiUH6nEZ33ET5FqAzvwrxt5xugUkceENDh8A23i9s5Qj9m",
  "key9": "3oYLAYn5qhFtw8TKVEkhtc7MbGAgNJrCyxB1G2U5HRguLzRrGRDrCJKikv9LNGapGW5oJiMnohR7nzD5cZSH6M5Y",
  "key10": "1EcgJFCk9YqCy8ezp6AiEi5SyEDkcWegum3gFMrzawbv5LNFZpiXHE9uJtcXr9LpmoNDxxPcVPTWoBRvHShLBBc",
  "key11": "2msAbs5KD6f6UPAQ8S69EY4oaTJUA6z87DnxvCnoF3KmLHACQ9vpd9g2WRXDibQUYtXFALzoGJvaFaFGNaDQmYBg",
  "key12": "4TZuufijxVdZNmT1yDXvo3kMcmmGPHPtoTyDbwhvZcbXvVX52he4J39wDjcy4VeAK2pmZGfASbN8jFi2EFqRMuVj",
  "key13": "aSJaZbY3m7i3adH2tk5UZaBZkWb7vDFRvEUTTQjTJfumaRYH7nY3b2vzR7bmxwq6tsbXiLSs61PXWBiaTaCVKuB",
  "key14": "4ecpLyBdpBgHTRsnu7DkStCWWX8KkqcweW3odgDWjD62XpAhgLEG5fi5mWuok9fYQ9yW3dUKeB8zcLPET5EbccFB",
  "key15": "Tc8oNpDCrhDYcpR56mthufCw5nMuEZUB4MNNAKFkNsT5m8nq2fDeTUh34DZRFeqBsR5aGTEuUTN3GEVC2sEmLG4",
  "key16": "DkuMpE63vtp3v1o7ighXUQi7AQEczyNzX6Ma7SwjoRvKZCcqhv26gAt2Y8595g8wgkT6mhDzUTGjrMf4CBpHHN8",
  "key17": "4C7iqd21ubBnN751u6N5zkXdihByNukavxX1dZTtqc6Pq17xfSQp9Mg6eFrpGaLBqLGGWzHqn2Npn7B3WYEYwZPi",
  "key18": "ZQGmvvvBoaQhB5LAuEmRYZ72yzEcWpgFrie2Yx7xfYBVZEKxn7hi2y3XznUvMoCEmswP1ZkE7ph4hNKFN2kimkm",
  "key19": "8qzMDa6cd7s3dPhFQxiiheV5ca2jMrLUobcMmvFvVWJfwDFyzan9e9xDmkwopB5khKKX3NDqNk9YCXK4kETQHj8",
  "key20": "3iCmRd8VuPWo8Ur3yG5mCbQfMSbP1rJy71WnwuVkdSjjNu9ciNbyGfsHX4fKgWCUcU521pk1nxsRSXMYzTh4kn2Z",
  "key21": "Se4zNc4akyGQET5nyT9Z6NRyGkKazxtXy62NEoJxWuRYCfiYuBvv53NyYJWSZzaPccFDTPtiaUfYotJTyNqw1ZX",
  "key22": "3MERfJCXwtXczmjuTqFzmG2XZrLEozgyVL2YsoLVRsYJtdJNmwx4b5MQ6zgSuirrdVTuytMSxGdyU1okjiX4iC64",
  "key23": "4Ji2Mg6Q5SBh1RhD1WGRpv2be19qt3UHri9JrAPVRmw2JnyP8sacFBSKNBeVkhUNiSdi97u1LnFX2vDWQAvwjWG",
  "key24": "MXDdQLHA1et4ua7ZdiqzXfEaKmVa7AexzYsDgvG9k3ChrdcHJNYnWkk4f8P2K9ckvdZsAjMXeGK5d3varzUBEBJ",
  "key25": "4r2eST9ScQ6YFAsy2auGmJrdT4DCJ2YcW5PHtq78Y2EcaHtmaCky1aKSQPSY1k2HCeRT4hZQKmE39QyNArLCk9iR",
  "key26": "3EWWPWcCi62AMEuFXMs8GwzVABrco3uoXCPGm3WkZp9hEXPEAj5tyFxVpgz1UPDHw3SUDcYtfyoqjucFfPgwKAg2",
  "key27": "62TJrcvjmxvHsERbe6aagqJmGtRvCjQUJGpFKqoGkM4WFmwnZkXZVk4yXznsWXshvDd6VGqMzPfhcP9NxgoJXwBk",
  "key28": "xdZxVm8du2oiyMx28tvaUwzz9QyW375SPBWhWoqLQHStkFjKyAADQubESkiYmEEVuti9p8XfaKeYMdPzNDUqzdg",
  "key29": "mTi9PakqmzMUMfKkMEDz9nARvm6MqzZ463FcPZKMovLaeh3zhxftovh4UNHFVZZPxVnDqymc3Lbhsigr9Bhn7QG",
  "key30": "VXjgqJ7kTh9zi73HE6ByCyuMj6UFpiVBY8o81hkBhYhDrnMr4jiCCmeVsVCxWrvMjge6Yi8fGm4RcFmTyoHxpmP",
  "key31": "iCtaK8n48ZLCXC7TNEoADfrzzzZwRbYHx7TtJ853FuiB4naetXy5NVEuBBpdRZdDvBNDj8kZfwHz4VW8GLxhVNg",
  "key32": "5MzQCPQUU3czgC3iZ27dRSDvRQb7zrpEY66D6zD1XFkcRGJx1RuMefYcNJDYXshKMsoqmefd9BYptXpe6tz6yTss"
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
