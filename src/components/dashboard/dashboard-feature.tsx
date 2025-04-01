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
    "4aoY2BnqnAnmps9d5fDbHxCmnTh76755TdMYdpBuRMo7cd1Z1dPk7J3mNrMozKmJPPt8NQhSJFhWnsb4jKTFQrDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L6JPnFAqJftdGfiftrCFy8LZcDyvFzafbNh1zD6hnVAc5dE2uKTFivMc1x3iTdh7MPJf84mXELwaPG1qiFE7Zrv",
  "key1": "2A3GaDGezfeidimavpbYdD3dxdkxy3jMxYRBq5p6kGJPtsp9TseL1KMmFm7gD9MADMBecm2kfUQJASD6hrzrNZgB",
  "key2": "2Tr8zuaGgtu5NAeUpnzwCVyUJvTP7oU4Qytkr7z8rwFznrp9ubxaLBzexFZdm7yy59NbLXwyRJMzZkHkqBH3X9NN",
  "key3": "3KRM9cFivPzRtnCEJD5BsV2FNCjfSF7CBhpAnDiQtiTTxaC5ey9jymszxfMVUTNk5QEHn3Yyuf9q4PTf8LYnwFt3",
  "key4": "3v6Umhwn2rYLMMnxDHmedB3itmymmqJkNwxP8Y1NPTNpXMXMcJza6itBQYR3ah1QPMyPbKaVZ7iJMEQ2Rh98kGzW",
  "key5": "3827J3kPNxW4Me4rEq1FaCEWT5w9KGShEQg3hVFJ5nL3xTVgtz2jjZU8Yxa76GHWF5hYYGd3hYjtN3qdUwYd77yM",
  "key6": "Kn134HtH2Eiv6m6Y53JuSwWfgX25MAERxQT4SrKcVMxPg94yKjtU13j1VSwt51YKdY7B7ZwhNxGLL3TRHW4H35M",
  "key7": "3bPrpKwXUWnRcMNEYpRHpiqVecDv6KQuBQJKDTwTieFvS14WKx9kbx25J6F6PEz7FhB1Sc4zYJLy9CCX7MwsCena",
  "key8": "3G14ouSZoUazJkbYYxcPo6jgoGQzcKwe6mSmr3WNd2eb4LFhsgFG1T4Qe3BLbDLDj7rMwpgXmo5Cmr4TmJ9JxTsL",
  "key9": "2NgrjQMjdUbrbeYYPZwvAf2vM3NvaA4fJyVttKiKv4qu8si9jNpeB8wDx1sEJvsqcc3e452SNApb7XDYjDkVGR2E",
  "key10": "4rRLC7SCV6oD4PWBwC4fR7uNvLid73i56jWWW495uVQhnNo7cFC74D9r21pgNPkPaErTwZhBUx7yyo28ryWji7gu",
  "key11": "5ndNqbc1fkyfBJkWbfcaTJJbhhEamiDQcRb8VjfFcH4rEc1QJMfoPhijKPjDT1tBzEBwa2kTdBxwDsnabNdbhh1e",
  "key12": "3FUoMnnFgmP8cJvMK4HhsdSEiuJzgur3H4s3u71VutDAvPAnZnKZLBf7Svjm362SrmDxmekeqnT86DbBZEbW7DTC",
  "key13": "4DdNQwC7PiSBo1EEb1TowEZi3rXj6WcBsA7twC5yfALRgyrwnRvidwdVYz52B5AKYwV3jzrXC2RvXYfNaxWqoZLc",
  "key14": "3gFjjT277N6MuFFQRSgtE6wFHuC64XbuV7G7m6d2etp5MPkN4qLqKNkohjAgu3dDH8UcCdspM15cn5TW7xN7kduT",
  "key15": "5pkGQtkjNNKZTbPiNnNWMGxcPjTjKSKQiLfmw5FCkmQ7zGv3oUa5zeC61sWT3JCH4FW3pFaPcBZBYWFHE1dABcKA",
  "key16": "Q3wJ1itkyuHN7EmunhhpSxuT1oeE2vnjHttd2yt2yJ3Ts9YjrXaJDnHVHyPKcDHpWDPzxDAgn9M4hgQ826sjGa6",
  "key17": "nAFGxyA8o9YwLrtwh4B7wfxzArNxmtd2xmAko3CFYMupER26pVDSFLNwMwc3ZRamPmb4JFRfqfdu4E2DPaRLtCi",
  "key18": "5Q6vx1oVMbUmh6PkxFRPfEQ4DkksozV9YxSXujcWdWBbTC4xRaLMYnEXA4oLLaP9JHQoN2ENTW8miizk1vReZTQn",
  "key19": "41a8n5XEBr9TWnLvUDZu8LVLLHcANuQjtk73aZmYrqnktJttCB5LJyvoyQtEZ4mixaUAyvG7dztasHWKr69RdK1f",
  "key20": "5fzmdc2GFBT6g95Aem41NA4943c6hWyvjuiE9RryWhyNyZYHSdXrtiDVfLwL66hzqtn9H2CKLmwPbYYsA2BZyr2k",
  "key21": "2EJySTEubMsP6KADJeiiRyS1TmgbSDxgMjKBTvGMxFCFaGT9AuQfYrrPd3NWPPKk53E5nKRFB6nzbffYn5eUjtLD",
  "key22": "46WBer3qbK4pAyzxz4VSYr1SbPSaFYcHhYuL1rzwCAxh49CG1FwPndj3UeugrZxj5Xf33gxyPJm9efyePk6puUP1",
  "key23": "4VEyXRoZLiZFZcgPhXewSFjJFntQdLLdbxyekjPPgcERJ4Mfk5YvatM31PUbZWak3TQWbxVDQa27K7J1bWGuuceH",
  "key24": "3xEbSme1baHRH5c4jhSDQCrMavzwd9QyKQhz4FeVekeByaSJs7T5TueHSgkvi1qagrUpMgj4Sqhx9tCMcTjtWS7G"
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
