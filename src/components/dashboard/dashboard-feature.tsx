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
    "53ytTMuC2HFwyP3RDp3AApLZ2irTxsaTksQkiniCH1NogThwQyi1k3d8K441U2HcYbVTchutNuNZSArSRPL9Uggm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RejPyLdfd725CHp9Fh6TGSP5Dg9dnUFyFGPQb5vuoV6GJqKKkc9iat6yw9zythLzRFwJwSBMkSF9YwrALpLpw4L",
  "key1": "31imzJWS2C95VnUDr5p5yqDqsAxAivZUkzyzCaHWtNHyMJhhbnnrm7gs7JLYci21nJnZF9LCQHjxYJYCAsyPq4jC",
  "key2": "5SvydAVvbpgsdSEaD3gESNfYViF6D7HZCJ5ySYBKJWDuFS2tuEifn5xhAZsTKMvWx2Ya9ukzKoiqNhF34uv2vS4a",
  "key3": "4LuA1kTNyp2qaXvbfrY3WS8bb6mhtj1E4QpRLt7sWq6xwVyaAnoAXZCLovyjVhREvXP5sHa8Jh6vfUHGeFoVZSWQ",
  "key4": "qNWQQnbfwLKC31dDEeUcAvxrokQPvjUGQbJUvgCXp1p4wkcyrDtF5FKE4hQWRAhEfXF7KtTSntqSmJQgLgxSAqS",
  "key5": "61L1TVJUVf71s1d4SKe8BtvHZwzwpydsxPZRrSDinqn1o6gQw9NuNKFTWvCQG9NdmonAtrErfXQhNDkj8mPAuKyD",
  "key6": "v6z7m4nsVSYaXSo7WZEF5PmS62jBT8xkw2c2HiLV4WXZF94C2jZ4V11WN962dejK8tZrWLV7GEAWi7b9WuDtq6n",
  "key7": "4hZaDGG2MRitmhJr2NVx4WhWojsjg71ZSk2qZz4eb8KM2biBwyJLhG1ALCoFjoGnjF6sV69JD1SCT38JKUyv1M39",
  "key8": "2EH3cTAZL1nh8s9YGuDCKEAEdVga15ghubdRPg8nzQf94mouFeuY3MBdV7EM3TLxSkwNPGpFw5LCDFBFS3FHVBzX",
  "key9": "4nKZGn5pDVXrgfHSKTKpocdXkr2dfQqf47NZ8XuPg1jenHafGanunZ2hUFk5VhcFkB8cAyk1pDs2yz7dCCDp7aPg",
  "key10": "3P4wcFtdTDJf2j82Qzc3aiAj83JKBBoRn5FXM6ajoDtEwdJSYCdWAre8hGSGSa9eKE6j1A9kNrKEhGdQX9sk8Jgg",
  "key11": "2afyzRKSMLw84e7EPgTd9buodFUgYPoLmdFCncchYwJyg9qe1naUmLsW1mvA9S9i2pVtcibdfKKFzFhNzRsPxnTV",
  "key12": "44nb2zKuV7QRwwZaq5e35dcTqJJu9zxEkQKsRfvTTaHG4va6tUBFzpyxgQECuoAbsADPG53gpPoNw743o3MsSLUr",
  "key13": "5pdNHNXK2jW14WjigKXaEcRe4EjpDvzBncJF9Ys23k8YAj574PDxTnfPV7An3DQ5GAqPAmhwqBhNSCLEeVnvEaPL",
  "key14": "54seAcdPYueeVCBeKpSC227xoSaCcL1WJ6ALkgua6SAwuNQWKJnSQpzpiPh2zWoHyZH1Kt9e2uL919Nx2wpPRJ7M",
  "key15": "5br5MjYAmFCjEDF59Pe2K41rCeV9ZPmJPPJ6y6B4fTSotgsNmqwgiqRMBydeEnMozxL5XaZCsDBdtQ7xUaN6vjma",
  "key16": "3b8x4gnbG6AuwNxg73zZe5BHjrnpJRtnycD1QVT317AT4ex1iLi2yB9J6en98g22HgXiJxgUCGtpvHZpATmnNEes",
  "key17": "2u7tqvczCQvP2ZRa8qnNCHPachAXQgw2cgkKMQKYViB915GeDBte1zN9gESj1QLfvX7twzRnsABwH8RG77DRzDb1",
  "key18": "BtDyVxAGFbE5wFe4MHfQojxSm23nqJUYHN6m4RwxFPicGdGpTEiPYiKFvw4AgntYhQFwULNJsxQTRDkaRt92ggU",
  "key19": "B1a8w86wmPmVQgQ7jSCpXGtaD3tss91Y6dJtQYXr8hk3eRLueXT3P8ckEw3mfZEwbgXFMMxWktghAvAr13q8TTM",
  "key20": "V3Bx7tFxHKmpudg3f5ho63QYBVJJky67k4rDbM74hcnRb5tYTvy2VDYUuVAntrkwrqGFnoiozZf8Jf4wmgr2S4i",
  "key21": "rD4dKSDRRBEj3ryjtkFAukKewX9B4Rk4M1zWtKS7K6586XjGFoGu99WB91VMStKmSu1mJehoWUBpYkaurScM9pC",
  "key22": "2tBn5HrYsW7fKbhdu3rf9izDt9XespzTa1LumUMbnw9RigSAn9g2WJxCbCmwgSRXdd6ZmpNogeCtSGsWBS8d7U4T",
  "key23": "4cy8sVxkyEKP58vZuhMepGGoCLMWgoSNY8qG1BqVxJo7X2DJ4qdHTRMTG3z7Wg11et4Q7DQbx3HzfoDFiyNt2JKk",
  "key24": "5o9gMhzAMdvKmqrmzXGH1GZb9JpQVcYNc7FtxmnK4mjEbE6E1irsfDbTa5d9qKnyGBgRm3mUxjipkPo74ZZdCmaw",
  "key25": "rx8BUzogLrXJevfj8BPJk5Jojybu65yaeHGEWYpbgjjT7P4pWxfRzRAaNLZs5RUjUi6koEYhd7s5xZdVJzvCAjy"
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
