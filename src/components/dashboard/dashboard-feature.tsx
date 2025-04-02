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
    "2YhQa5BS6HbCn3ZDUMJvVN9QGQoDYMxbR6pFizDGx2AaNCyvUb2aStRCF3iMQFdZQmauweewxc5ocs7Ej9jPMghM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPTa9X5AwiDpPNG5QZQ261ed39RB6BZg2mqFUVqNFPZZnyVHCySyUcxPpGhHo7SErCapxgzthwMCUJrDND5Bdea",
  "key1": "2Xt1u3dz6E4y4JRcFMBfu28UcGLsexkYQbn2jxQMDsqtbPUHGHFT9CH4Qjz7CfkSVQ4HNqH3VpxTrJ8Pt6zUN1Ez",
  "key2": "2CuJoiKpsX7Hhjw72uYDeFXHZYaquWdBM4JXtAivyWzDD71afbjZcc3Xgz617d4rnBQu8jqkk8uvdFvSoTctHPka",
  "key3": "9DLtcDqQorXDsN8YGwAWMujeB3x5k2tJ7j6hd6eF7B3YK1rff3Vjv3oiXRucXH9vNGzvrtDHeu8gxzcnF1dHFwy",
  "key4": "2Q7HopyHaefJVZ3HQbft7XmUFmvSoHL3hT5GarbcHyyVjfmiZXGG4KkHU3GcLJJLagYu6z1r1gvB3o21s75TfJs1",
  "key5": "5uMjaBgX5AQwtsPC9GdAcsdc7vJySP8eW3HFCHUzRgjTD2bp8T5G1YwzLZLoPR6qnPgWcihxz9fxH7aCBz8BVtkG",
  "key6": "39sBikC31ED29hdyPkcgzeykefocghF4vKUnmmPwdbuUiyBdhubQavJV74nKajEewwKBv1UUpm1471gBJiirPsCi",
  "key7": "sdyRfJnN2kday9NzYzsgaVpa1VD2rJTUutKLDa7SFFAmfuN7oD9KwyYEDL2kLt6GH3AWuu6Fp551UnMP2ebqB1D",
  "key8": "vkCxQgVgvkeChANSRso3n4nHvzANYVnDasKjZwbqrJT6j69BKzPmepF9MuYEcm8B48LwFhoBfH7K7RDj3qyCFoN",
  "key9": "4bEkmA6TgPrXvzK9Dy46b9HKrurvck5qJRKDWW3WmJ7eAHRfhatcs912TXuc4q4d26p1AVd25h23o8m6uuTDTh13",
  "key10": "4ZF1JGJWNBL49o3TpUKzBBmNnAYTTQn5E7jeTNfPBHyN4Gur7KXhGMmuFY63qvsRHioKAeTcGdGZqgbrpoFKu5Mr",
  "key11": "axXGN8jV5EBiM2w2dwn5C7XuoX4uDazGRBzG353AjDv3DCQnSBUxweXR9XcZf6Rrcumfxr5t9PGJjUN1cY8jCei",
  "key12": "4fSxSR8LYJhfGVGzuffCMnv8kn7dGprySVZaGqCYvbRxtqK4GGjsNkN7jPGbKST6BG4h77Jwg9CuYPtMFy5QWo9V",
  "key13": "3oyzFYKkBRJgvTDoPP6R7Fqx5xmfx4o5sb3Js6bN6cXtNBHzzzus5fwGyTKvt3Ck54Zk8jrqYcq7rqaD7i1mcRnA",
  "key14": "22qXeUb7kEoqBNPH8qpHrvqHJcrtznEMh1gJ3CmZY5xRaNqq3EKf2qPeaQo5E8gCcMVpVf81ZHaGLMTGi42k2Lin",
  "key15": "5fXSzNoJQFxaWAMbh1W5MnMGJXH8Z4MHtxD192NbECh9KYcYAGtbVrCPNZyCtr7LVaz6ntBW3ddbrC661GoPfkeM",
  "key16": "KxrDBmTcXihPryzKPQvHUzS6isEwkc7jxJTbAzjJXu2rN4iKeBKk2dZK9rVy7bM3NYobmGBv9yoQmgMRbD47Ruf",
  "key17": "3K7HL2EsaEMhvXs3zxzuGZdeKxEGyeFoF6xwQrvytqqacSiyxRJHmuLewCg5hG8TdS8urdyoegCdGY9R9fgPB4Vj",
  "key18": "35PKemebSDwAKcZeCxhxDhpumUCcp8w6mFNaDcx9Rc2FUGzFkVsbiMfByKnULmcfWVXQMvhYZNjoLAp84RsZKAqf",
  "key19": "44ZqB1ZP4bY5UVL4vQ8yVbtQ5b1jd1gJB2dH4Ah5fteKogtRph891dBv99eXtJxTKbT3fb9X6a3cZGK7RFgJrEbn",
  "key20": "uY2cwYLCH9fYaQDSjEzmFNW4wWmJxnSsDTVL4pHz9Q78x4yy35CvtaJhFuYSFpkMsmVbNZYFGBoiCaPUQqdSjLc",
  "key21": "U1r44RAeBZKJ9wCZ3rvknKiN1jn46T1FEYC1vMVLRLpkNEM4jrQg7qTUwjpAhyJ7ncw4DsVgXhUbokD7S7RxW1m",
  "key22": "LjYeUp7HnfPBNXPZwD9Wk6pzoiPSAYXK2tYyoBC1pMedaRE744ZUwNA8UEvTzsSeA2G1DoSfML9BkYudD5cF2Uh",
  "key23": "6528ZY4yevWwwpaGpDd7iswWus6CNXcV4XwUiX61VxUqHs7cJ4womWwtfaJFLXkjm5fHhwNiPNqLFhzfcJch1sPo",
  "key24": "rDLbhRxUR6tuXx29km1Tp92vmTYe59VYLT1NVnG99EBSAAK4PBPA9YSNzX9VzZmFYFRd7ZZizYTFZ5VYC6f2RgF",
  "key25": "BN2PuPVd5hD3865uwrP73bPEPzekt6MdnqHMiaFweoH5hLbD4Y1SaPhrK3PwSFsPA2AnLURH719rRS7BNMpSMcT"
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
