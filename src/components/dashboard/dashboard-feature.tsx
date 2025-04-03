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
    "3pdjLsgj2QgPrKFQ8Ljc9ZXvE8RebLniYJb1wKVFM5CUs76svmK7DomX9YXAcKE4NLSbQzVngD4nhPupi8k8PcHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oFRvGAfHD829P5CWcKEvaHQuXFMXzLX2ucvZ584TqA4TW8BNfvRZA4XRaocLU4pdE2YFEbT6eerXwS5EXktawK",
  "key1": "587cBKYiWAWRtotyeBLHdJzhsgmu4D1gkoRsgFAKLQHksqCZfaELA7HYnkoujST216fqUDcwjAFSTvjRmUZN9vx2",
  "key2": "wFTX8TjVt3QtQxcwDERR39GwUfmLbgoSVPQrKwy7NjRZawCkx2rTdinFeqYACV7zU94RRAxUHzXzreomW2wVSN8",
  "key3": "sXtzb2R9t9UkiyYkRqZAHXofFuzcN8KTGc2Fs8oRRSksBqmrDxHrjQgMdoGMVPPQeqCnu7VJC1DafDoGfTso1YJ",
  "key4": "4UGpQAmiGZLZsi6RVHxbGtf7YSjHPRAPAVPxAQHX3FrU351tBz9NauptFK5sHnucMbB5gkbSdYVg9S5QCUbGHwjB",
  "key5": "3UUFsE58YTac6PzKPaeisvGUNcQE8jeaeQu1Jh4j6HNVLftbrDC3zvkoH5aVa5QM5VAbgVeo3u5NahiUgepbnsw6",
  "key6": "61SaisKm95BcKb55StzwXHNVppEyMab1N9aBGtGERigsBwdKDCsyRX3TFRPWu4s4FA8L2u4AT1s88etrWGk85yGq",
  "key7": "2YG7x8yaT3sbKuoeY2XCGUJ98f8MFyjdDMR11s9VLVKof5mFexfiVXQYM4ijd5HyhA45A8xucKvGMTM2e2Du5nKc",
  "key8": "5Ea86bYC5bceFiUhkaMWZuZbdvzFBCfsg9s4H6ZYbqVHrqaNnhFbw6MVCABrCFXW3XFA36JXYXYt8HxWdgNxURFY",
  "key9": "2oSbYhY6pMMhBntySPU3nLF7Cq7prstg2wEAZD7vepgHLR5i7zBPduJUoPgXWVVneSHe5KAtZVmj5V5LDr7XdRkK",
  "key10": "4CC3NuSipYE8WnEoeccygZMVQtkXAgpSardturbajQZhxpvFyqDNeqa99Qo31gz1fm3ToX62ExFaGU9DkqMFb2DU",
  "key11": "4CWWzLtZc5sqDFkhu6ZeFa7WCYFgwSAGyVvqS7Q8rituT26AFXeP3m5px54NSsWfy1Sva34rFyT7ZpH5xnZszpqY",
  "key12": "5nnq2uEQn6mRt6NagQ6jwqM9qbSSQxztiD1RFz4s6qzxjktURRUdkqLz7YscgC9nvkakAKUMgMrnGhK7Joo6xNAV",
  "key13": "QwRAwV3dprRNhXKPj7oDFSko3AFTwGgbPSiH4iTNaTVbckn4h7My1wXpZJWWrNo9BegF7NWgAfrdxXCr6h9CdER",
  "key14": "5Gk3neK2FKwTA92rgtSc7q1FiNQNqkGX7B4xPfzvBqt5KJvgmKQydiHSANF7RXJcJdjSQMbhCfTwf3aFyZyiUHqV",
  "key15": "ezb7sFZrYQAd991VC8CifB3zCNzhqSLyvmbTAo8shDRGB72Sbsp7int71CUWhDXjW5jo8vDv2h9aKXych8mJqJ8",
  "key16": "58ZVzsjjYpTgn9nHgD9ucbs2JGBFPvkdmbeWFSD3vJBMB2ZViBDdffKeqMSLpcjo2Da7LMZXcJtXRDM9ccxGVTd4",
  "key17": "TURvgLm2Fg35AL8bCsi8R9yQ5WDdAhoEKiNA1b5WGKM4cdotEsALLK1oUvWF7g2QyjE1p7afAATTjvwmN2Vkekn",
  "key18": "2LW1eLZGQaDfmo3U8ypnzTpeFv2s1ehJhaEHkF7WekpVcsUu3GH12h3gMp9fzJ5vBbdsrvPcLHhQ8p2eqgpdpUZ4",
  "key19": "2uYdPWyQ5a2KWs544k2F47tWkUbiQedcaQN2vYybu5tVp81NYwRgYWfW4GpzxwJjjSPV4iVd9aTqRtQ7y9h6z5g",
  "key20": "2BZ3BFLnsV1WPg2guBR8qjw3z37rmmSnVKkdmSYknPdvpLcA8WWvVUDuLUqViCfBNeJNvQ8tTpuhQjaH8RnUBYCT",
  "key21": "5VAHB8EH5bj4LJdqRQes7vkWvVs1KTJEM4SfgmdyAJqUbkEsSo39qdLhqQyHRMkwBJqCNaLBSxBLLPYJ6ErTjYhM",
  "key22": "3PoJ4Am99MNtmu3jW9nMSBJmpbgjVFd16p7N1reSKwGzzwJnFuEFPUNUJLr8rFryu95U4u5kqq1KQxcxYyUuuW5x",
  "key23": "4B9AKi3ScoBFeCNGYvxFCwDfj3LHFipYp9JMoqpfEDqy14sHSWAFxMG7a7Mjr5svTEaRLDh9YoqNz8z5Sq98tj4z",
  "key24": "3TrwafasncdsF8YLJpWix2ms5tQaim63zmVbEFR2TB8qyE7Xop1BURjQKvQbZZsw7rtYUCscf4B2feQUPw5AwiHf",
  "key25": "ThF4JGteNAuNFTKdhF6UtvMEUju91tTsphYVskJiVTgumr8DQd5URDS1cMGmt1mjnzEWwXNZE9jejBBEmMNHP7x",
  "key26": "45gaEcfe1hrYdLYCVfJkaShABsiajYAUnpn5xDwqN9fAegCmEs7BydYtADFCA6EMaVgzSZBQKisKNWm6drcPvCim",
  "key27": "411fwZbeiQGKvmMJvkwBVY3cx8i28KfL7KJMpPw4StcKyVzTUABtgu3VsNqSVDfb15bSQ2VDwDR9JGsLgua9iNiv",
  "key28": "542nTZJe56RYDWQAZkaVRoQi9ahs8kuqGmX6YxJnaJEpSsLD8s9qAVZHpQcFumPhU94B7VMnncRYP7ktzWZ9bVxp",
  "key29": "2BKTLCwCYqB8ZXW6xJT1nFWhdokWvDzrYWpa13gHagSbhGNxtEhQXPLVcmyaizTgshFirc2prEUXDj8yNaxSN1Bn",
  "key30": "5TL4zs41WM8mAK4upiGt2dTmwWoPiM2u3AwQkbUeRYsmPboDZtALdZnsj6tpjf7R7Xbb4wPY7dSoV87hoXGGvkwe",
  "key31": "31jTTj4nbLvwyFrCMfmdmZ2nohst1qkLtam1YBaCCu3jj3vg8os4d3pWe6dUYu1BZY7JZCt5DY3NK7Fzy1mmeVzP",
  "key32": "4aRZRDd9fTEhtKvgHL8oHUUjW2YAXiUmjEuMDdE7pRGZcWRKo3sc1QrvTV4t6sdRgUG541XJWZqqtnXmLPp1Bx7W",
  "key33": "4G7bKGYrrPMxWDEC1hPqf1aZYGaZbCXjkFmCZwfaYP7xr4mw2QKBCP5e2C2uMxbiMzsMD6C1PUQEG337aTdKABGC"
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
