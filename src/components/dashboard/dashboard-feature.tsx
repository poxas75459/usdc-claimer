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
    "5BzVSMUXgLrajD699GXEabBM1LAoZtZFSpezpNkGqAuwnMTABzcdAKDoRcWgdJW1tR7co1xEVb9ow31Kszb6y8SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWKnpCd2MwK3YC2vJvh1sw4G8zZRvGYoBf3x3Wfa8j1TdRQL6pMt1K6qf2Eu7G4LMpms8mn6pfPMxnDZJioamaU",
  "key1": "2XvsG2ovKgqn4TihSMkGq2EgMMv9EZKfbVawHXGrqhkv1GQ2umnxnTKTsEEyFwLeqRkXW9q1hXiUy4DauVVZoymV",
  "key2": "5jWeWaFQkYrW67CLTRFVA1hLiPjVdjvxmLDL53f5Lg661cqvJhT8sSaK53VA9ETSArmRNF1vi3Wi44da7v6FeCk5",
  "key3": "4oNv2ucqrMpx6R8swt2UoTZDcQ9f6YHetpSURc1ggXw6bCy248SLqSwJL3Vg7AGcQDivLsgJ4dKxgBMrbX1W9Gou",
  "key4": "4C327jg1yS2hWwFYnZ6VmTxj2vG2A5KdjCnyDhEppSAbHXmsRmA9ioZEhME2FyK5spZVCP7rm7GV7tuyPfb4Co3Z",
  "key5": "3muZwsDGNueAyoGGG2F7GUFwounZgLK96JghB83NYo9F4qgLPMDAdNPkbCtsihny1is9cGC5QXNnHwTPhiRh99fy",
  "key6": "EBaErMkrt8UHxasAJKavDWFdxJi5kzfuCsvyzac4TUm4aQZd3TNzn2x4hW1UX3jJeeioWfqRG567w2LRLcPhoEk",
  "key7": "4JB6rQ1kRhrwCsXFwo1NAH4YFibjFKdAx6KKKbzMo94uLgtQE6FWcK5npQHf6tvRMu9FXgtRBi3f7meTEJ1oTdTE",
  "key8": "4QJSQUPfSYuLvh7janunJCDDmyPhyDx8BqaWEFAFDqcJZKqenkuVmceVE9ZGDMkkT75TD8HWGng7f6BN2XXRnKyE",
  "key9": "5aTA6mvKqGDPJHEPQ2DjdyMrkmc6h2SrCEv4Gq9yoiLkmvBSt2tr7rGemx9MPgsy6efBKX3L7r4nEyM4HmVv9nfb",
  "key10": "fZyrqDPBTFQK5Qn9tnHLTjSSC7XfEMv2j6uxP1UoogGfw4a2ovdhEdnEdQ2hP6hS4kmjHdm3DBJRMFJaxUEzCKE",
  "key11": "2AVaSmSV7xCr9prGvYuC1fpzezUumjTdqqy8cr4nEi8PGZjzo3Gq95yHxnykF5A3r8yqp9hmGCYz5V8bc6fGgaSn",
  "key12": "2gj2WmaQv9r9AL585dC6VX9z8b5aPTJBDVWV6vkjLLiDB3vWGgDxrThUKBuvxgjUmhyeSXGnYh5nKgbFAkhc4cNV",
  "key13": "27zuP9NB5Z76BKDVYY7AS7ppsKQhf5zwo6Q82zEcBYyqsN3753c1NaR11nw5FrxwR6srek2yvG1aXNd7Df94PWEu",
  "key14": "3srnzan3fDRfRhFseW3bDutRxAWk1Ep6LN1KcQwa88Dbtu1u4F3uM3KaHTtonpcSeCTHfp88MQbVeSKknb455qWH",
  "key15": "3q3CSknMwE2pbj2wJLMDZJQS3DBrJ48o1qYR87C2r4Wj5VG1YJYWpBgqC5cQKN5xWjDJVYhaUjvFYsxv89FPqTPR",
  "key16": "kCjBtf3TQJwRZrRESzvMBrJs5XtDFtotFaunAPQN8uM7vNRRCi8QUwedYitE29yxVC7JL9jN6XHSnu18cuj7V64",
  "key17": "5ZwigUegEzj4gcw6ddbKLzozhEqs8ykjdpWKrWQVQuhJicARm6rwF2H8gxTDGCZQ32MgtSvqndtRCyrQ4h1trtuN",
  "key18": "67gDBbMDhgrXvYctCGuAqCvosoXdJPi74UDVMouu9p4zGFBfA3kjsbT1m4V13R21B7mKBQuj5PXpoB2suUnWsin9",
  "key19": "5TFcTefZumFjM3Gzf6jGVu7JVb8PzF79GV5wRztNroPHvW9Ak2AZa63gfUdVjUqyyyacuFThZRj5HBQqhE6JhmRg",
  "key20": "5HYKH1VkFxYqgboUrNqJq3LWqUoMV92YAEyxU2RNai4dFFvNPZ2qDncrGhaPPYNDiBxdFwKjeXYpN29VTyPvmjsL",
  "key21": "g6L2qnNegE6N82Q5J58b2UtaFaWLe3fDRbbiZBDdZ6u1i3p666BFG4hFRHze2ekorYyFeizF97so2or6qxeVzVX",
  "key22": "4csEWQKykKAgSzMkrvbzMByXzruKCcq5JWJk1N6fWQitPNVBPZceK1zE658ZvPPmeMAuykue7zFmz6mH94uTfmkJ",
  "key23": "5T5rdEr59osqjWe6oE9sHdXUYgUxcDpNPqHHgE8vRVGRuincmmzJkkXtdbNqdLoqA11Ehi6xz2zCRZ38ogcBFMhT",
  "key24": "3c82coWDLaYXyvds3b6oGxvmgoiXQcC6UTKVL1wzsJ3zUU9Mm6cAEMntSDWZho2CThxKbckiQUT5zDEPLawYMhFk",
  "key25": "35DcDAthNZirSQ9qaNwuoDkYKh7UH8wNAZhJPb6J1DaX298P7ezWX89vKfYs9dfVquHE49Ak1apXtyGEFnxfjn9f",
  "key26": "2SL2PViULEAdWAJyvLg3AWaBFhfsKEcDYvB6kGQVyBBC17UdQmBb8D6wicGsrpitn7YqY5CNo4htptExyb7D4oqX",
  "key27": "2H6Z4nNYCKF8x1iC9ksHfenaPy3xh5HNvC7A5rkunnJmPCctPKpSjmjN4FRdyZ3DyVnsDJfVa6iViaRYgixBDmEU",
  "key28": "2oTvohMNDkDgtqFkzh9d3qs7SLjLqu3wHXXTNkjasDkaW2yes5mA3hcsLaryvh3i5GiS8FjL34wm4jorxh5TN6VB",
  "key29": "4c9yMX67LCVeztd7uockE7Af6pBDswNyudRDAi8MB6xt5ov4gUj6zL6ZbceBnijDDsWG2hBR1z6kLBNGw2SPHoDs",
  "key30": "4ZzEzkBoU3ZfWxUXx4zA8cQqumN3HCEKhFmebxsWcWX9aNyFSunAzWNGs3BFCrzXmeNzmdxezbwUjC5WFrs6ifU2",
  "key31": "4KykogaMXrDUvtEw8TZZtFQqtpxE3CtPjSYnRZTpauiKrcEPS2w4zKWzcahshjMKH8G4qLSET3vruCAf4w2RcHbg",
  "key32": "ywRGHHgxfn4FbBrAxWMsM5SSXc8n1qW5HgeTWiJYC8H4XeBEW7niFcGV4WeZvgq2ik8fSkucQBs4TeUrRerjPdr",
  "key33": "3eoYkkLbL6gkEc6Z1n73S6Sapci2KhdSydRdLDERqjBEbvhpd8vPRas6ekcyjvCZXx7L5ZGV74XXESj1uVLagxvJ",
  "key34": "4my9kpc1mfj8eZPyFHDjhmJkQsdGC5en93U6tDnwE2FqnQfAv8XgJszM9h8hLAKMw7xe6DLQvNQAArqiT22HNgTY",
  "key35": "4WhhWtHiZC2K4y46pJhgoGSikVbZTPGkhKmHMnPyCo8VRVyspH3iQ7u5cj4WoaE9TjoMsAhNfifGGSYSVLADzM8G",
  "key36": "47yHhpc4YAabDmnExzJdABk8qeS6SMFZN1B5q9zhUXa5vhZpG3HALqcTzhJWUGLjFMW4YLqNAFFAkBdB6Nwm7N16",
  "key37": "3HGnLURKoqyyzN93x7Gk5ChiDhqEexvxBL4L2ihMqYygDGvPSMtH78FcdPzA76ZiCY1zfARj14B2RzCUG2vYXKqq",
  "key38": "5nT7QHg7U8b8w1vEY9T9vE3sSt4PkFp2eY9VLbmoKBkrGw7mCjhMxYLgXV1qiWtuPLAiL1K5LygS3TedrbVEEBMj",
  "key39": "2aPsbSiDmw3ziDQ9KWitGJsNF8ps5zBBu5xhwsH6qLnECtAnpTiGYg7ViXVFxn24v2rHJSkTf6oXFVB8VbKmnsnW",
  "key40": "QJxZCAjx3zZ2anMKB4Kw3jQA6dec6775mSVj776KkngGPS2E3m832GMe5FJo8XPpAAfWvJL46qRUBnnkjBLsU7b",
  "key41": "2sZ7GXQVBKDibRwvrQF994tnFAsgu5mjDvwzY5g5vADb5gxZvuJ5fb9bGkmEnAu78xua6KtcheCjM3wkhY88iKVJ",
  "key42": "2jEkc8SgS4X4gLsNq7hcvSxZBTA33SB2bxgXJcQQyQDHNuuWEm9F1mua2rUUyiET8P9CAyHpvuUVhChxBEGVTbvj",
  "key43": "5aMd7Kqot9zEUHZZMS1kM82oGgKX8dxmP5d38qH8axt1rmTAPzYpoFagiP4MoFT65GfDDzHMtwSxwHQDZ8Z1ozHx",
  "key44": "3UgYEeFPeUR7fTXSAxPauv3neZkREub7ipbKngtUyGKfbCKHBtqvozjVcXi1Je9n7rYb9QxP55MrxPb28cxDQUEP",
  "key45": "2Wa81RZR3QTqH3jWkjqsAN7eNhWvCiqLSx5gt349qDPx1T5yudb3mDx4GE7RcsscPF7jdUm4brNEDHt5shuEV6nd",
  "key46": "4QjqAfoSPm4zKcT57E7HmsF57q9BqLsvmKM99vubLDGy9EAcQPkjTbGRFX1etRkwa9LpcZfepzMbvD51VCKfZusW",
  "key47": "5kVVp9SrHJ6yrPk3C26GmhGhWN22kjtrVZswh2oCUSxJMNX4pVPBnsVpMmLKqghgBCgKKVu5FfGktQBGnZmPDp3z",
  "key48": "fbEDCsthxi8WzeQHFviZ8Wx8v8tVWYSJivHA1b2bTbYk17TYKFTdJvjECahJ1SVWjHoC5KkbcyA6NKTiQpWvfNc"
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
