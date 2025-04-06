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
    "5HPumgF1V6MnFMPXrtkasLnzWXqptDSuS7nwbhvoQTNfKAQS9zoebTbmpNM6xGdCv1xTbshxZo6b7HVP9nDRAWkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAXVzrCx3ngWPSdsZ8zfpZcRHb8T1uMgMojm3pper1Zgj9a3R36gi88rzcz5E67DMzVFv6tCMm7FdgbrnqDdoEG",
  "key1": "2SpQVYaCK4fSZbc1qkuTf3dsm1GKfcL9oS7xR9jFWeBWfdk6qUVLMNeEtd9Uo5gJutDAS83gVe3CB6cPJVyAEZzo",
  "key2": "5kGbXdj6v4dAVRW2ocxq721pdZVQK7X6kWFmY6KJ3e4e9DzuziD2v3kcpnLUH9mpTyiNU4yd5eCbp7CxNHp826AH",
  "key3": "f46MQuMAGc7jRZ1huj6UvnrqNBgij73LHK8myUvGWphjkkYWvNUG5SGcTWapagd9pVY4VqSe5YczCAbCh4gf7Mj",
  "key4": "5cxuYSR1JCEJLvpXu5CVJBzmKAnUVnGGAtqLNvWTQMUFNwcfnt2qSUyjNToeKDXyb1qpuSpvPveUukzoyHY99HWR",
  "key5": "4oBEHX47daCq631RkBbwVjmQJP5PJrfzTqCvDCPT29g3dteuDpV7pS3CFWF6EZ9Gxisq84y7Z3TC5JgnQer6DZNb",
  "key6": "5Nfis7iB67heGcmxhwdXoJfSRWCcHYUxK2ZNyh2RBmnTu4CX3PG2rGcAzAjqfEYzujgdTPDPonxcnMK2XQNvZ4pw",
  "key7": "38fhdDXz526r35NgbPJ9TKGDAyrWdEdLouhuPt2aQKnSWFxYevCMLqfkjLp9X3o4kv7kEK7yerVfDXzNJ9nPEarK",
  "key8": "3Udqd673ubshNJcp5g62DBdmo1WpzomrV2BdhsWNGf6veZcUB4Vf4ffzhsXgNPFGbWcJ1FLjEvunVCWYjcX8T2iW",
  "key9": "5tyvyE6nPCk45kshRozLQRzuYEJmycMDKFo5NJzBWUxh7C8YXihAkpZ2YLbLQpiyTBrBXsSGcgFqC5ZULtQogH5E",
  "key10": "2sNw6Y2YM8NQ8Nq8fAsW2LFPWpyioEGAkkvvRM88iPSPzdcoA3m2kUJ5JVxtFHTijojrP2LBiyVJtfLLcu9f5KGV",
  "key11": "4j1gKRRVHtAK9FiYSSzhj5keQSbWDivXroVcZcFosbv5BN3pNG2SiLRKbxDGoCDaiauHSe74LFLN71SBTpJPor8M",
  "key12": "zgqGWN7fhUKfsSp4URUvTtdAruxKKv8x5tRHoqJrQvraRjhhtCDFwV5Ecqy9LLKYpryAgp5amhYZPkqK3MrwV6g",
  "key13": "P8GmXiAwqfrPT5xCSvkArKdmyJ453AzkdUuyhMHp6W83btCEZxGxnowYHa5A8W4eNvw24ZHqjyqPgu54DusGFdZ",
  "key14": "4N1aQDjZjVXQpA3LVqrR5TbYTKtZxmUjPiciYfp7oe6SEDYUwThMLxbM9rez16MwYykFQyRBe5LBcBnkXdZUJXfd",
  "key15": "wtVLdGNZVEdpdNzdHQpXFhLdT6aTCxzzXg1bvb6zcGS1MJsR4E77RSNgZcL2jps7FC2ZA9oTd87H9qbcR3xVNHV",
  "key16": "2KPM2YgVtwnu3mLcnUoZ97NYffG39RJbHTe78vScCkdWhcNbsCJcZnFy7nkp1PuJWn4NExX7yrEe8zfDGbSq6Pnk",
  "key17": "5nha3E3CHCBQWwEYNAoEy4egC1B1iLXhMmFFiq75dLkYfjaD4S9nZf6sGkxFQYEKbpdDsWYbkwJXkwpCwiRSFGay",
  "key18": "43VC7MNmpZXJvjPpx4iVvrxt69eijKjGqZcsLL5mTDG5o8G767PcqakcrfozhAqTiUemVBx3a4kqPGXBa7psohAf",
  "key19": "tg3QiaCGsrrSAoqYZkC3R7rHHqy5But3778sB1J3pegwXkZxM9Q1xoZcLFwUJZhvTjGiMEUfa55U689gXqmJxhm",
  "key20": "2uqPqPGTddT5Q4fXUagjTP3ViPTcE2r8aVVzZvGsyMeDWH4uxnzHCE97cvPeR3B3Y7jRuQQJ1TrSDBDJvth7uY8i",
  "key21": "zF3xJPsrpJ7NNcR3XbvuoXQPew4y6HBZtvcovvkFAVNsUDan7GCugzbLvqdq3RxLCfzNUX46mYo33VGLFdhg6QW",
  "key22": "3zJFcA7XYAqQayL7WHJEyTVWYU6pJXCtntZVD6Cvwp7eskbYPBfDgRSekqzw2CRGnqnCvXWLeeV6qh5HNFGPdSMz",
  "key23": "3nytottFDfruhP8xv96JmY8XJ1GBeKHC2W9CxNJJm8wbtswk38UW93dQFY7tayXdQJpDhyFij7FHuZ2qjt98yjJx",
  "key24": "XcKBnL1pLSjifUrMceEkfgWW99DqLFie3Y4fCq2J2HFvC6SMSqzXR6WCdS6QGd9nU6XSfHFWWEDJcZWBS3J6PbJ",
  "key25": "5ohdQjGx1Hz3v9sM6PodvuL6zJwEshZoKkopmT6mNfTEDPSaeVzEXLkQiuBZgmXERGfVWWzKKrNGbTuDBjjNMeEH",
  "key26": "5Xoo1PqEpn2G8eF94wQS2wEsVTvhCQWZomfUXm7uHD8TxGD9ohDExE2GQBqwGvkUJXv5ox7GCizfPW3VuaFmgjRh",
  "key27": "4bmcmMUNkVZYjYjPrCiWEWNHaR7VHrAFmwFRiynfwmzJnF7GWMoy5Pf66ktGbqqL26yo3MNgV4jy4aqhqyG2dT1j",
  "key28": "nJ5AZWfiM8uTYA3ua9CCyndDfZRD2BxCw8YW2BBpFzP3UPr2pEzdXw8tZxSYMzVEQdFu1ZizevKoCe5Uc8hQ8dw",
  "key29": "2K7SHa7tWD2jwob3KW1gZxx6ses2PcnRQLyGZmbAH3fw1TfkEyU3EZwrcf7QwBAkL17LS5rgyxGUjVL2jwSm1uZ8"
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
