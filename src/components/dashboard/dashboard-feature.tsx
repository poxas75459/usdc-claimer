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
    "5ACsLrnJbiL1U3CuWznfvPbZvdfjnzunR79JKgkQJ4og5nfs4BiGXuUWJzgjUgvsVtsC29FWy5zbtXVRFb1wGsMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SYDntwzyEUpVS9d9qMYsZqMBRHidtezKKDEJCEYQmYzgkFXmJ3rLcbWXMVrFaFG6kdeQZ2EUR3JiqzKQecu1GB7",
  "key1": "5vhTdd6ZStRpEDJbt31YZo5KmJyQBvCmkajU6hUkUbsbLt94JkNbboUY4Q3v784gbXhJk21Wbtz9mJk3xY3Fs216",
  "key2": "3HKx524ga1mpxWchZq2cVaxmoRDwvjB5gDNnEozPFk7wnKS57KYkjh1FQg5Ub5rzJYW3j2BnszmhmFByy2YTaoy7",
  "key3": "5MYF4Nqe33HGSDBUa4CTrnSVCweeXa9gHWVpAA1gCGNyXfpYh7VtKEXiwacCob6ekZvmrpRnM6uHaLGdTM6Me2be",
  "key4": "4AWFefW5eW22tvT7r3r3mFbUYbkzc1XmQtmDC7QiYD8UZ7uVeCZStEJKc7BcndVCZsajnTqJmaRDS5mxhyUY3HT8",
  "key5": "3kGHtNndTcyQAd5x2pj1wUMzg6b1FBBHWe3iREa1hoBtxY7mmWwHdmpkZt3XJDh4AEYLAbiJ4vaQJF8N3essWLP2",
  "key6": "63tTRaapQKoyD7vv2GrjAQRDwU4SrhR1WyootCv3C4ZCJzDhAkezfru79A1JsK2sZ5SzKGkjZFipKmgywCX4P5ks",
  "key7": "4kkWdXxdLMPFivG4ci4cUwJ7nKNJ1yG7RKeqyVHyP3FmdZpJ9GoWH6SfhL38jjUUkydJ4CSEXNVPEzwHVrx5AA9a",
  "key8": "fLz4jXrUthoL5WhJozjFknMAWFeyNU6QFraHgwPAR9PWgYrpHK9po4qbfQAhVoRcQdbPHrUJeg53KQ4Nq8gmswT",
  "key9": "eaaHTWJaCmBJwdnP7SNR545PpLxBbqw4MqExJmZVBrk1oyFmoCJgk9kpGoCYf17YL7HRPpTka8v4TVhSuWQy8SL",
  "key10": "5dJCyXtEB6AJ3XyiYZzdbuGBWDjJS3hADVrWP2h7isK9xz6Ks1HiTMKxLk5TuLVqVfjrPDNSepHNDan5fojAK6ZR",
  "key11": "5F1kyQdDmuqmiRFVNDH76BYFNbR2PnbAawgwkZkPDzyVgFCbeKGnhVcnT3veU1QDfKCQhx8nZJ1AtEZSDSi5gdi",
  "key12": "2Z5AGYaqk9b2rTdSsZEPNbwZVNKmVDm2APzzDTSjVAFLzKGATecW4Hcs4i2vkThHQACp7QCo3J4LNJWvtdie4TW3",
  "key13": "4hWqHQgipQCB9mxqkpoMF5D2Scb5DpFpvaZyYK1wcLWSwWDELeEzBpgX9byieTWfNvP4TuJ14ajUkHRtPFGXGLuN",
  "key14": "5LRuuKzzq6NtSrpdYbXm96AZ2Z37JUwaHGJxTjsHPxqT3k1KgM1jBJK8RzU2EFCZtKjvxdU25pueAuAEvsXhGdx9",
  "key15": "2x4jGty67i6f9ggZ28SUpLwXVUjJ2MdSYDGLaLRaRoHmebyjwJTP3WUmZ4DcpMpNkQJyPJTWHFY69LSZHz7nTW4Q",
  "key16": "4isLzEyXvrWdpWt8QhX5QMU8E91EAtRF5ncKDAGC3tU7qRyBHERvK7JKdn9BG62V1uGpySbJHcbfRBZHTUM5Vznb",
  "key17": "3hPbhrix732UbLagW77gLUCfAMSBfENqduPY4ukpMrRSUFm7t5gxYUh4MyXjLVX6kFifJNWzBQ3r68PhNLb7vPTp",
  "key18": "5u3Zuka8hGrntSTAsHCE7hfqpjWUXkkwv2WGLXLTied3FimrR5hktjJbpVVznBPhmudXber4vUYiagTmbjV9uVaq",
  "key19": "2gWwiSD7z9XsSrQiNz4ZX7gnR31DPEPrScQcihm9mm1VpU5SeDEUzqz6nxR9JUNHM2eAnU3xtfCE5jGXmM6HNqoF",
  "key20": "4TEJr5uQLDTzHVfSoeHccmxnNZgVhWxkrPZnQvvcVDHNixX36TgkouzDJGXRm24pR1CfVAjvw2rZaxaEueWWyg9C",
  "key21": "25MUKT7sjqW7NE7ZEF8yJ1bK8aRGmDxtZ8yyefhgYP9rq6PuoMQkbxV9KpmfNbbocdE5FvPTNeW6VZkrbRxSKKWp",
  "key22": "31Mxknwms8hAGZUwQgWvS3JkavzsESwRApbnnokY9qkz8FjToX91v17Lwb5miWv8pGFGNML1keUmRKjAfQ7pZn7E",
  "key23": "2T9pD7n8H5t4kdcAvwFgLYLJh3fuS5ZzTBddKJ28M34p5TGFGRNgNKi53CBgEdaPTdLFwMnGbftPbjvtKBe3fj1",
  "key24": "2Fz6QRCVEqdZkWNTWVfZZg5bUZLbGugGem8jPHTtFjQUKtRUNnAJ5NLKGQyK9ssTde6EV5dS9E7XWxmyQtMxQc4V"
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
