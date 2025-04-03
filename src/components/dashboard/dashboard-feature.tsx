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
    "4etotAwAzpvvKMwxLaYtsirMb2oe841jbVjHCDKQPJjSVN6hqLaUUgzSpiJcbwEmTMJVzhfV48PygADA2eqLCJRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1MG29HS37cK4v6erzWoKosLEpgKaBagUXUcRy6P4tmN5a8hBwKP3vDc2aFrqYfNpMg9Fxmp6dTVoCgc2vEpFDJ",
  "key1": "2Xoi46MKRaDKGvrXDNycH66MWwAg6v1ad745LgX62KV5SRZubyxzPZugFRdF35734nnFYETpeETWfANruqf65LKz",
  "key2": "4P96236zFas9LTT8nA3Laxxhn91w3ZdyMXK8BoUXqkAvjaFSeh9Why3TAyvXuFYBkzffS4UKZTvgG2KqhJBZ9jon",
  "key3": "uQmefLxknq1GKSwXDRHsjMdA9ubYomSmzCP4nHcDmrRxH8mqMaZxGw16LLSL1BuvfRzKKMFgDQggU5TqCFdNqR4",
  "key4": "P3s9Z6ZiMio8h73TR8QjARcT4FvnULvvURoGFsyQ25PH55hHi7jiE84RkEyPz6kPiysoWCXAvTsfbrdr2n4XWEz",
  "key5": "5gMBn9ALGdy3sCzF7WuWwUzkJWjfUMeVL6XRJw1CT1TLQvnD4m19CuewdjeeLXbw9PqjjSKoNQYEfwPMFw3hc16K",
  "key6": "5BM4Wr4Kz3QV2oSZE9swvd6v1Nz49Pi4HXJ3TJXUdKLmKcEYeaopmcKNztE8KbYPWA323MonxfPgnjqPxYu8wsLr",
  "key7": "2MhBu7uYboy6Z86nFDA2RUbtuHcmpKTH2VTkSEshpYHKgd3wK2KtoZ3QaeKohsxWzx1sjaogJb1gXALjUnPUeWB2",
  "key8": "4J6FgCXgWC438QjziP75R6Fb1arJm2BH1Ney6gXt8PfVeyNFgmVBQQY3UnSnwRSzEmV7k4x7BghqtzEGEThscAbe",
  "key9": "7JJgKg17J8k8ZCUaZNCYn2wSK7xuZCtMdDHNNYJ6r8PWwmhy4S3FGRb8Zg1Z1LTMbR7Dto9C8RHwA64CUzTteUJ",
  "key10": "5mVALHduJKpVMc422xb8LGc7gsiZGqfoqztFfUxvYyZmGPjk5uFBhb1q7ZuHYA1S8v87HEHo4pSofGCpyL4QZQih",
  "key11": "3CR7Ce4a6GvDQoQVaCz5UnjrmkXiJTs8XeN59oV9sWrx4511o8w9LSFNrBPj4nQeajbeVwosGiYtTdjTrnes4n2W",
  "key12": "4AWx9maXsdrCURawbHAvXGNXroVpF7hVCGKrtFJX2hY1KsADqCBi7EPqbqDZAAbsnHTm5o1iskSierXVbNJb58gG",
  "key13": "3tbQcbgDjZLDf1QanxKxcJeP6ut3L1FJQrtCamZ4g3otiUcr33Q1iX5j1CZAUj2Y4gXV7zBjPgsPfhjUxGJw7tGs",
  "key14": "5sfKSKRfFs2wQdaBgYCnqXT7DbJds23URgEvMUrgXNhCnX8A2JtGM9MsxoDMCGgC9cuWknpwV9JxQSTnL6tb1o9",
  "key15": "h6gMLJaQzrriKPiwUfSmJ9RTZNRC3nW4GsJrsT321CNAgxLciSpCYatENTAzErSfe2FkxwZTF72d5sNpSYK5F2b",
  "key16": "4vkMckcymCbumt1HAZu8E3hfYWUYpPfLz9DDPwtqvV9awdsnPHCSSkLzKvAQWgwSTJGPc6AeLFnmRXmLKxBbfyQn",
  "key17": "3AJzgePRanYz1EPdXSXyeAEkaDkdCN5WN79YK1fNbR7yrCfpfoYAUCyvGxN2p1Z3myLQbqXTz4HTmcA4uyA1764b",
  "key18": "4G8GaUv8FGaSrTRABtcyhnrvH29otTb6uBugLReUi1o9Hrzzhd9tweBXKCoJ3Q57uJS84vDCpghYdK87MGbSpce6",
  "key19": "5hvXw7jAKFp9msxGd9dxWXZLh2ksKeCKMb2sSQtehgV19CXWLpff13zzY3QgEuPG9kcTR7GpfQ4NmVAZP1uaaQDJ",
  "key20": "2PxsVwucEC6mTHTEYiB8w1vP9Aa8D1HPTiD3ovjHBBYf2VNZcW8pfz3DP7mWxcLimQMcMXvJo2YcJMkFF3npnZmd",
  "key21": "33GjsU5UxNW57X8J2C2N2R2GUrcBrZLtbcgfp9adSSPcTfLkzX9Xc59GAbDC76mFg8vG2cRDErE2ofYShFfoMZPU",
  "key22": "2WnGfh5jtoUpWBTvh5PS47WcmWfSfZnt7K2tFfWKiTut7qdyMm2ruxTdG4Rki97a4fsG9H7ZGme8uK1xEA4qjaU4",
  "key23": "2cKmL59REWmuehkLg6KdnDW2dXCQk1BDn3BEY3q37jfrFzHDAGSV3WeseYzg5UPWWtvY3qi3iD8tb1r9eXEWhC72",
  "key24": "z4b4NBfw2HLcvu2NmcSR5KFZ66HPr5rmpiG4v947venNde157JWbmrxTFBn6mi2oFNTzErP4QS1tQgohTWLQTm4"
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
