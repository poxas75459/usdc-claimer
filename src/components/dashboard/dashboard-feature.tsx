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
    "5Bpqu7X1zHHF5aNjpxycr2HMatCpHek8eHVcyZ7vX8iVaVVYBecbygX8TopVPF85kQMC4iLomAjm5jW4AB43mHTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAvSEr1aZzAtnAdFTSgWCQSTVrWNVm2rKegc4QHerWU7yTLPx2pmfQhA6NC1zVaxy6KuiGsdTRAVL1j9VfgSVn9",
  "key1": "4hQQpQyBdWxAHwraCaoCe5SaN8FgzbnjN2WwRS1R9sRZYSWam1sNpxt43zYrpHXvczJrUpEp3h1Kza3b7B4skzsS",
  "key2": "3WtgT98d9FStM2WXKyFM1pcUETyKS8i1wcU9Wn2yeNSc8mgMmq9dsK9c3jFpQVFzqqAmv3FbVqyju8fYXABY1ycj",
  "key3": "4cVZcb4dr23Hbuj44Pr5uaQfkVVVbJL9jGzaohiRu6G7CUR3GV7hj8Q6xFPTRiis3uik7NeBeFzL1aakvyWPFRdA",
  "key4": "3goamhayjmB6bz8LVGH2quqiVk4NeuMWKP1JRcXrVp7aaUtFi7AmC8KKQAuLu59e6BVqhUMicYpp1KwdfWQQ2A2S",
  "key5": "44fK3RyHii9nA1SqkgyXonwZ691zJVsYvrChezxbxvSmfFC2mRyTMw68F4CMvtZr7GLJjGG9yRw1QyRagnCC9hqg",
  "key6": "2Cex64T8PXVxb5mjRJmzCUP1LCtoiCdf7t9knffCtQxh9vHNDsv5QeKCWsnEA3aMugSNEW44tyNdkrdHDBdWdJLE",
  "key7": "5mqdDNJtKkN8ZJ9eFpQyQqGqC4VW7E72Umsizqw3d38K4y46zWxXdvfkvAbdjyENgB5aWcZHX9mSCianAvMraW2q",
  "key8": "j5dsTsKcFeHGxrSxWHo6dbSXuMy3hLrE295WbjF8duhnTvWew6DMsFtkA2LboAQ6JdCrS42i3BAfZDDD7B9M71P",
  "key9": "2r9ZjrCYEBYnYGmKQMQzxeZetcCNKTBzT3i8zUwXdc8U2nKmG6Z3kF3VGdDuDeta1rhikEjBt4qWQJHeqBkzMrEA",
  "key10": "34unf36NedojKLM7WHfkeeNz6opbCuEPujXGXKCYByRT9WDoQc9fE8222MDS8yQVjrxh17j5FbF99TEgchniYg7H",
  "key11": "2sof6rJFPWbzP3yQJ9M9vUffrLAGM3wFn9vwKjUZot3bL2ef1vibjDXi2tNeiycoQR7auSaj1tK7dz3LfBZ4TJFy",
  "key12": "2HUmuQPneZCn21DMvs6CqfbKr5449LimWBquto7WLWe9goj9BMW3fybpMKuoo4XLZteyqgoMgpJ6idYAvLm3bgFG",
  "key13": "ot6d145SfJCxUYih7ewGwR21wBvVemWXuMWvgRVU3mdyBbTmHaxtBoSoiks9HzCbeMaAvEDbLydvHpXVytXpyJR",
  "key14": "23Vd9j2UGS3y7T1kB3tahqRFTQp53FkkcJ1FCBRavok7d2DcFEJUVFkhUKFra7xH1niD5f3cxiEbQD37SDK4m3Eu",
  "key15": "oC8PYmvZgCCXhYA135JETzRzgzZ3bmxMLViHE3TQP2QdYV4b4M5AWbAjRdyZm8nghr8wTXciixzE2bjr6ZdJDuj",
  "key16": "2BYBGb8wTV2BS9ACssW71Hzf2KdDRYCsnXr1u6bx5XpWUdmMnmdfY78eGxMtD9FSNTkRuw3kT1tn5a3krH2BcHTt",
  "key17": "5WA4jtf4vWqQYv22SW4jtRaQApQZYdFsnseKj83HJ72HF8GKeCLqA95o9aEQwBw7XeahwJF9rujhx8wsXst5f884",
  "key18": "3timNVPxkzoE6hXR8ugZZLDuMVnSVXMfgZsbsmtQBXUpDtGMbfTsa3KsGbxYfLndkUUynG4kFB6Hy7tf6p6QYTi",
  "key19": "FFQsnTLhxBwCyR3CRmFGxZEcn6pucvVEv2DCBMmD1v1s8k81ZDsGxwwxTUjfLYQyNZ2o3jKG1KTSzPMrexGSAbf",
  "key20": "3G4cPpriLbETEobYAjynAh32QjrAnvjj9RKwkRNBD1usKpguhkhSGXfUr7cWCJhnAcBkAr12wApfGsUSSqgADkN2",
  "key21": "iS2Fit1omq4z5akxdG2CSkLMHkyDNpxXrq9jDL8xcj16XZihzXT5jxXeNPQLFavVqiuzhdYB2FuhQFxGLGdc9C6",
  "key22": "65UEj9JurpBjNAeDE4vrfE6cxnhQNrS17gPvr4YZozVgCGByv8o2MUN2hYNKjgs35VroGPcJjiniC8kUwPEQzu7W",
  "key23": "2StwyCU5vqBrhNXw9CiMEh5WfxjNacfRNng5xzKP6yZuD3gMtWHyJWVHuBPDGn4fq7jfQJ1Ls84se3YTJsN3dpGe",
  "key24": "38TvfKseBz7xg9n9RHozjD7Hqf5MaTvfPbToyMX5NTvEMHFWe1ThP3PHYWYvvZqUKFTSbqz4XXSN5WSkFP9yFkf6"
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
