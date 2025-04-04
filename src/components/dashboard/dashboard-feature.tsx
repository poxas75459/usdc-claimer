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
    "xs6fX9xnD8xeAu5NDHRTSAQe7SFcqEXmcN9zNrGEcyA8HNqTv9EL1tfGyGvF6B9CHbwH5FZ64WWBNGcQY3ExuSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUVhqRwMsD7rp7kz4fisA68KQDsLErkknGN1ENgJ9eZfxvppJZboq4KRyXRQSAQbBgzcp5nM9yuXAHBtiFAYK5P",
  "key1": "4vwRAUMpYKN1i5cM8hsJVx9BeXn8cgxsTQZHUaUEqjppfrStfnzXm2Yw7VD87mFLCsvBEBZoQS6CS27zACnDercA",
  "key2": "vsXT4z2EbLp2KVMchWdTkQ2NKBGwzXYdickEKEXYRLRPCqMiNirpgmSnVUXJnGajkwc6uTAn4rQNFxuTfi42tSQ",
  "key3": "3LNk4CC5ZW5ELFkqXdrbK1t4yqXRDqg79eEQ3HLBat4EVYj4k25phDtG7VsGsyw5hx16nNc1dTyZqJvqt5A9JfgR",
  "key4": "4aTLV1xcaXznVFxf34Pped944egrQwpJGqXUHxWew3xDfeTRyUp4xRkg6H9kS5cf1fbXB6MbMMTHoiZdbLJyyycr",
  "key5": "2JtZRQQ5RTPn14FcgMLYU6NA2fvaujK8fpvStFSfbABDm5Fe91ihYMXE7rUpVNccwYAP5ca4EhQJkZ54i1YeZVs1",
  "key6": "2XavFpcL9gAHxGXq2wr1CoRcspn7TdsDhYRtMjjEmMigy8gTYTpNv8Rp9LG94MhDFQiEokz2vgQ8qB2CSNmtDmLx",
  "key7": "2971aetLhjHeuixMUkBx9sMZqMxsvGVXQfAtErK5wP9tPFmgEne7bLPWX7wnNi2UEezu3ks3P5ZyYnCEgY2oMW1w",
  "key8": "3kbP6isCVEqnbgGV8emtLaqmDBtBZK6UR1YxYaSuxJbpDEFjNRXKfs3rk3u1sN58RKvPr1EMW5FMRuUZkQqm33jp",
  "key9": "vReUnk9TfFDgnsF25EbrjJfKoxvEFCtRZsDXJrQ38RQNtJBxK9HMF2b3wi61r3H3Ef1BiW9z4Jg7D9r6WRig5UU",
  "key10": "4c6hYbfquUcAuKQWUBs76hnZwWJ9VKFko5tMrzxbfuqyxxyiLSMtBFiBVbMBJ5JcEaUp6nCFM4dG1PY47jxZtk4Q",
  "key11": "3HAM18CyhVy3Fwh9eW3vFdfEGptauHyQjoSBTWWJAXXsLQNh95JQFCKR1voFJ4ceXKcwFEenTdQLDQXehooMQn98",
  "key12": "2VJmhshYaxdNxb6M8E1S2SxWJRyePqVSynhwj7zdesXggKHsECuXo31kNCa1h435gQZvuenPPyEV6Y5k7dWQWU1z",
  "key13": "3RLMaMza3x6rLvPMesZB757PD7kmRQaud7nPJ26zNS6fQy74vDQeqC1ZBPDoRVigbCsNy3sffznJzUvDh8FASXWi",
  "key14": "5Y3V8vPUvaVmkC46s1NHNsJ2u59PV6ryLQKSRHtw3bAkNMNFVpGEPt4YNw54gGsoty5HfeVb2y2ifuKPQ5zXR3o",
  "key15": "4tysD6NBMWjN3bmmEi9DvoP7fq8FAnVAunQdo4GEXh1ft2JvAMxkw1nJ48Emt8iUHUAqF5n6BtAEy6GzPrJqiYgT",
  "key16": "4Nmw2ftAe8hS2yts2Paz39nYwDtSjrDegWZceg4C6PHkUjJEwUgiJn7vzBz8Dtnz37wnNoXhbfGmVC9Z5ypzJCVP",
  "key17": "KXEeXd83NBnZUWj3dYzWJbQgLvXekfwiEjbcm3cbmBXK8fLpjXdnowY3M5m1AW8whBXW9NZ9pgMAkLutEjRwPSt",
  "key18": "qc4oMkmDRtPjYKzSTChAKEf53VZHchC2KrJCwpBKQhQ4gvpre3HpbEP6mkyPmGV5UuoPTDot85ASNjwH8ePPhye",
  "key19": "2aTjuxT2sdX6m3X6TuhGA31advssGS88KuhfwBa7dnDRicog9NxVbbJurbhfgUbQa8NFHFTQ1LsWsPHdZGyMZeJk",
  "key20": "t3vXP9hQ59QqzuEce9dSkaQ7RAS5gaQiawM6A9tMjKRMFri7dMLNr9En5DMNzJC7MzBRFMMyxRb8zGnmVf1UWsJ",
  "key21": "4W1s18ePvL5S44ubwUbZyhDddY6k2bgs5HKEqeKG2o9c8CSFM4a5MoVgvsdyW5RiHASEWzeMZ1CqjMAiKnH7B34n",
  "key22": "2WVc8zMRQRKEG7M67u4MfYGqkR5jgfzDYG4nxN7WjyfMHjbvEwEUnbdw3YCsJarVR32o66WKVNLGcNSdYDTqpUTd",
  "key23": "5HyEcrkNvEaZbEEgwnZnfMCnyyQvBcF5KAVCfTNmVLeCyEMus27HAXv74YgDStzX9PDXxsh54yUAisHhqwdJw2c9",
  "key24": "3dsdLTNmqZxBAm3quguBXmqCQWd94jgyAehG4ksMqgFm5KzG19STRwSuUrX77zA1ETiHcCVsDARDYQb78MM4uHST",
  "key25": "5nkSoYccfXo1h1Gw9LF8FAMc1RpyQcLgprv7UPyB2LdW73yzufXcUcw8FG3h88YNjEcr3z2nTr8rTzpLo9emMaQ3",
  "key26": "qCZWcqkyfEt2Ke2ExEvv58n7tY1Hit9Xy4AN6DUDJHcESf5C7BakyfpbF9q9Hmt2x954yhwqVqTu5SngLyazLTt",
  "key27": "4whTE7FRMKcmL9amWdStJi1QXie3iQjvrXuYUhAcZ8MmMs7g2pwW8en3Pr496qFtrjYdxxX4uN1oYGNSToamavDR"
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
