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
    "5bFW69qYaKvbakT2KLE9frEwbpacbowhe8skorVcSX4GmfRLZScQ3NgbzBbHHq2gZBMkTsboxgVKNCC5XqA8xhHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxPmtunrFqD2dwZ7C9hiiXHnnWf84azWTDnP5QyQKiverZ3Ak3GAv9wydvFDzn3eQYQGnj2oMqTiaUvrcDhn5Sj",
  "key1": "5iKLkqCxRmVrYbqkH3xK9tet21YHgHHTCjdwnBVPUrQkemBiq8KD6e2vjeNUHEtPTUJLz925hxfaC6DytEiLcBFd",
  "key2": "36rx3S6aRvdTCVkX1snPQgbzyNRTMqc1F76pXZzaeHtcC9MDWvsu9WZzjDqr3i9qE24Aw1nPXZUiRVWE6VsRGWmv",
  "key3": "GcHK7ePcbFcpEM3uuviUt1YcCeL9fuh5z9vpMVwndSRF47NNVv7i1RGRNjLti5JTcf3vt6ux21hoLeDPtnST1hU",
  "key4": "2gjZhjUph7kP9XJLJeU1cHtHdE7NA3zm7yWWQJdfu59epHtAwnWxbYBPS3gV9zarvrizE3A2MWYdEMTwixtSV4bL",
  "key5": "a9EvtXhsQvXJuuaVVvqfsJFm2sLifA1jm1qzvTsP6GpHRYw4s1ErWuND3MEyHDrjFL74FTaP3T4nGxVoVmh52oy",
  "key6": "5Lc5BM1mutsij1neMZMgvmwV41udJ5mGeY48DxvMUkCnriSiTuk4BXrmEjdSLjGTkKQTbZFfq4tYpkQTundY49ng",
  "key7": "3WA4ibC7wZpeJdAGZF5FiVAoPDToacTVozvmVcpUcnkCducR674BPKUkQrvanB9ggRLcHQuPNi7pvTYP6ZqYSQYi",
  "key8": "4p59R7TyM56cDRTLDq8XvB7gzLKJM3ACkwU2WCcK9oGEkK13sK2a4M3k9D6cNWVGuC543dtVw9tFScpRLcz8uods",
  "key9": "64iuwBmkrD75kfQoynRKAFUiVUz3GAPFGrM6oT5CYZMB2Bwp2u7Yd371HXZeSoTGKnPBLFyrMGSPGf21M6CbeU96",
  "key10": "3ndtmLo4Hu6QVxvhawmCYbVTcFX2AkWRLm7vLgsha5hVsYCrxEJ5MYNyebpE6H14CvZWgD1YxX2qH6mEZG2v2ast",
  "key11": "BrvJ71anHYbtz3QEc1Jb5yJVx6e6YGT91YL7LGKuwo5M3kyYCy1xDt9WB4vdUM5sQtZFRR6adE9eToRR6uuzP3k",
  "key12": "5DNdLqnETnAYD1nWRzKRC7vubBphhA6gm9NgrzqYEu1SGqV3Bn9RvgSbWVD38dvwRqDgUJ4tbTuj4d6Z9sY6qyMj",
  "key13": "5UCBsCeB3fi9Dn3S4gem4EcpPpNYnFQmAwHky57jarqdHHwdY5hDWqoNSoTiarazGYS86yVfe9z6svJmnmgV8f6N",
  "key14": "2yfnXSnqSfyKNv9WJ9BEkEGUX4CK4soHCvXft49HR6MRmU1APJ4ULXvYJzivryRXPgT83fmpAR6966HiWxHEhUvt",
  "key15": "3P5PTig7Xa3MGdkEV97s7KsqWDTKD3Ym3vRK9Nv2vmEYR8f9f63brgCsC2wpt2mUxy49RmeRVov2nZiL8sXcX1Ru",
  "key16": "5DgToqE37nUJ2qBNwRGwdgYE9uaX11UCq4c6JE8XnR6DAaLqN2RitsDPx8cHCcqsyUDzbRYhSpFPsAF1uVXAnNsv",
  "key17": "65tanzkzGbDtcrcn8jdHKx57cNu6aJU4dbwaBCreTLCB5ttfNr597R3HHP8X1kSHRYuBnp4sbKVABDsgLwPZmViQ",
  "key18": "23Kp769qa3iJZu3kke84ykhHkAaP3ZbJ6nt6HyowrVTuGWRi7UPpeNSmeBMWypQCoYvbZbiPS3SXwZHUgKxYJKsP",
  "key19": "5A61S3riBjvodK9RDpCkWap9hvfpSRBMRSATBWKa52iNYYL1kdi6DTCSQ5MNwVoAeoAEHiB5X5hMiUWdskj6yv6Y",
  "key20": "2oddidGn8So2cTQCrfFjegcQj8TErwGCBbG5dNjMwN5EXjsEsxJhQUrr3JmU6vca3J6HyVHBhtYo1dpsMdPx2pS7",
  "key21": "4NSpY1CVcgDLCLR4mEnFeRfXtafYbuvTdjwd3LW9x3xw6iRUkczEumqtT4YUnGqfwJt6wTi6iXHrXTsptzi3NUGf",
  "key22": "Mzm3NuPpSsLNShAck6PZj9LT6bfh9KZqDgLHtQf23WMxU3uFSaoNEFQrwiXM39jRBFuCZzodgQ49qT4QZWkHNrQ",
  "key23": "k1MSsdmKLTe7pVSUsCwXvZW3S8o3Gt2SpDeiqbhYZX2E8eR3VfWP2f5B2YXF1CZNbgJW8sHE1Lxpf6aGD9REenT",
  "key24": "2N8of6Zk4vhuPqofrQxhWB1yNNDJM1exfpYaA1A54WEqcNbCxnnuu7gr3j33zsoVG729NXkEN3ToiVeXUh26U58j",
  "key25": "3MPT5VBbwEuPe9JZaxihRjwRBZxttsW47TujUCBgLvnUSc69tQK4CyTp6taLhToiH6Aim6QEcv87Y9buE9gzKRM3",
  "key26": "3vqw2FdUPX7aLPEHPHUm5NngNRTsyaTQgAV2WKC4JgERG3AepF73jKhr7Mik9dQJPC94tmrvt8Xt7p9EbcMdszTK"
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
