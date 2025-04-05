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
    "3cudkr7yMZefnVokUGGnSqGdeBqa9YPB1v7hU4HxBGCDVHeS8cPhJ5Xtyeysmc1WTmYbz4TFCcqyYB6h8ta7BTmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjFK9n4j3pwL3HCMtG2WTFzyeaqPCpELW8hUAa3htHMjGTDfYCQHMSzacihPJSSggj6kwLMchD3ZC93VFwR3eRa",
  "key1": "4kE7KXizBPXScP7m7yYYzoCUqm8BGgC2FP8B5Z8UbzXBKzssySbVMq7KeFZUb4tPYmpZ46c8bP1T3UTQ3Lb7CEia",
  "key2": "Pi1ebEoq2NSfFuUqEnNGfquKm5BmpMPMwacdYHF6zvzu75GSVv9RLWx6QFNbgjXQ2Him5jXUcPRqwpFJc8us987",
  "key3": "Eavno4qrxX3q9PgpqoZHeXzLJfSyNEf49HfSmmUUdRDZPTf1rmsXEvwSPmSahjX5nTTX28QnFuxotb3JgZfGbBZ",
  "key4": "3WxvhUQQ2pStiJYxdzWsvRJNufCpngt4nnbvhfGXSRA5pHmLebDm7FT3fJa9hUocTrHBUAVhyiai8AHw1yDog33b",
  "key5": "3N2XE2m5DCwXDXirei9sw9ZViR1TiWfa51CJxDUhnkVhhYB4MxhJquSQDcftLetkrEas995yUN7N6w6mywT8EYRs",
  "key6": "52Cq5D6KDNGsYtsJ6GePGTHptKSwUDoTeXgch5xTUqGW94phDah1A8BA3nQZH3KyinW5gjk2UcB9bQVoBegkxNoi",
  "key7": "2BCcFEfpFEr6KEZhgkRk4rZFqFZFKGLGjpUgmbMWikNSqQ9g3Q4gkg32ZQ8XCFviBwbpJg3NjDVbrzLXEtADd3mm",
  "key8": "33Urajm2o5UHkg9zs61Unp8NW58RkdxgixS1XwcxvshLHqWcrVgDDWBNwxGrofMFx37zupjGQ7wQS5HJLyvuB4vN",
  "key9": "5Z82xy7BqHefWqpu9JYVJWgGJPANWnLRhE4bJSVT23LKALWigUgqqeSQgSZS6yUpnw6D22Hqf9xzzMFd4M7VXuSi",
  "key10": "4hRnLAYu68FbRz3GFF2xqRLrCWnLJYW819YhbVYewLHgr9EhUKJdL4gDRX2KaK4N4tyGxpkP98qYrori8YppdTVS",
  "key11": "LR2rZr6WFNi29GA4UBMxsM9eXj1HBf1URSTWr7kewqxzFtBp5WHxTVMFoZx2tfTZJoPzkjGrcxxGycGTHDMrThi",
  "key12": "2GMgyAeDYB2jFRo7NKirsa9Yh1DjSTpQNKHrg11J5zCEFJe3VpQoZigkGhmHCnJeEAcbPb8hvMZWhEDfvXJwbo5L",
  "key13": "2wo2RMB82CYYi8cLisGQ3cRehEHcWpPKZByUaApmRhBaiLS47EZtTowiWAyUfiSu6zMXXVsas45nGTskMEd9Kqn7",
  "key14": "5FSMxECqnCmZrP5mAcaXmQieiXXBhUB7aoWkwiah8XLxvSrmvTsVubFhQkqAMfbeLgHDjoYLszk2YeyrLbAyaHHh",
  "key15": "gaHCP4jHkU4sRWS2RxV4ETpEUpVvPnhxL8ZDHQtQxq34r94aEUGPRncdjAD33F57VxuxhKZgjVaCEvB94XzFJyP",
  "key16": "67Watd5iymAd9Bob3AnagaUxsqAPTRAdW63urTEEVKox5k5dqvd56k21yCgtCvLC5YocEYcgxMTsCDRtyf8dNRiz",
  "key17": "5KjhYRUXpDgFNBLFyHnGgHoKFNTkk8bUx8RK22Bam8mHphLS5D1rhX1x8UbtdftmmCNefVHNv75yc97Cw1s9XuXZ",
  "key18": "3jdZax1SG7FjB3VR4CiM8oNK1xVBzvBm5vvAXi1iBTZrbPPi9CDaG3YhiyCXQNQrUJ2dFSBa72QsGhDVZ7BunRa3",
  "key19": "3ZntbybudyeHrkYNsyCfpswYkYt1p9KoCwS8he8o54AbZWXYYhHZiLptTY2iStdPKMDMtAh2gX1nqjontpbyhCU3",
  "key20": "5ii1PxKkgdjmwD1ysK9h3HaE3qX9e6obfZHeXpDu8MAJrTsK4ohUTvJKRg8haZqZibhicGak8gZ6vQqQDnBYoXjb",
  "key21": "k19cuZdntVsPEFRxiK85ZXXvwYUMXWyfuta88YqNq4G37GsAkzQ5QSikvk133UXxyFfxXNyYeE68HuS6GW1GQzW",
  "key22": "3aUfV4KUFu6bXqD8M8CTH4zKNBPQUthS1AJD9bp4nMDzhe9ziQyVCrDd6amp68nDEWUzgcobv2tEfxpYyEPtmJu2",
  "key23": "3on24Y6VhnwPRApkiuxg9JNKZeb4SKjbzHZ5ZZ5CAdzDHuc5zmNUFiMiaESAMcxjhWgRJKvmiKzG65tRPjQYG86k",
  "key24": "3zYFYQKLkrYtEw25xM4hViFa3BjJ1PLnaMnSwuVTSzPEtNXYSur96xngUFxma9EZoM3QfXymaDyYraugzyGq8N7j",
  "key25": "2yACpVeAD4WYXkcwASMnkLTjZmYGoNmbLTk35jbazUbBGn6AJ23QUjqvP7e4JHkVh1C4otyCpo7kViuZxBYA7cB",
  "key26": "5NF4ULz7WfnrmW4NJEVp5gQfkY8Fa5o7w1Fvq1AWsWDY5G93jgDvt9Pf2LqCyyqJkML2VBSvqVb6TwWUtb6fPVin",
  "key27": "31zmsAG6hiRo9xeNxMKzsLEvnBbyWvEzUibQvt2GzEEbd338bebLx4cVDdGt52Cgv5xc1fcg4YZAMqDaRo6tSNRj",
  "key28": "5EyifseXMdsX1TVZzKtAQy4myufMdJD9pVsj2YkLwapJmJSRJbzfGczE2g59qcsJNvWnaV2gf2hLn55sffA79AN2",
  "key29": "2ETucDz35rrfKMtBygyM8gHrz7DJp69fwQNuxKRQW7KP4VBbtTSU2cJYk7RtaWXNva3HybUuWbMoAoN764XYcP2X",
  "key30": "GRaLZUDbKBN16QL52zLFmP5t1n1m54gTX3qfD45MQ1xkSxARtxeEn4TNBQzje48iprVZjEELrWj2t28QB7ZWhae",
  "key31": "4MZAV4CSFiR5rxHDRQAGA6MHPDhzoHViMBx7Hrok2xiBByUTHxeX2dH9fS8VPGrHvDk3sE5F7oZPf6XbqeknwHVv",
  "key32": "5HJc3WbMjjCv9LTFdqrjqzuA4wfGc9F7qWQVzJXvV6uhfx9CmEnQ9sGPQN1vkw9AhK1h4dLhLchqzpcvcQ5KKTq3",
  "key33": "2yRAaFmv54eRGkjDSf7F5s9QTeVvMuCyn1TnwCcb4ypTCjvFR6TMhgiszziDAoD43yt1c7rRrRHW8d7vcwywmeKW"
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
