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
    "4PTujHCY79hDwx26RiHiiPn48Dhq8VqERG4WZPKAX9fCG2wErJr8Da6h6ahqK1w4Cmu6uJLYLk3JK2DcunW56Zmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJM7THWyqxwC7aiDPTAGB3HBiXJ4sqipnwLgYhgSQK4U5M271RjVegvhm74fAHJ5M36ELcXX8LAYHFJAxLcDEGB",
  "key1": "4gQGi4bxt6oiixK9JPwV1UgJ2UmEpVgAFRunzVQk8ZF868X7r3zjJ7YmDEtkgMuVEGZ7HiFaDaYoo5wCQC8DHQLn",
  "key2": "tyamT1jAuicVbiaqQESsHQxTyT8MVyu9uedNifAwZ4rA3kjY14N6xBJRenB5j8rU6JxCeRi6cgLPbRvXYtqkWsV",
  "key3": "2afQWpcg2P5n4ez4wnj2wj3NHz6UUQzeq6RX41E3b5d1ocXbW55rnJQd7adbemrsSWKioPGGP4q2fmMiJpie4mdu",
  "key4": "3sfebQS5hmFWDQHDHubWVwDutpGDSAhaWFr5zgXx5fEYN1omzRSHthni5mZjjUy5uv7fmTRGaV1yjbPBp2ELYuYN",
  "key5": "4nKDQdh4x46vzAbiahTeGAVrK2EXT3pgxJxDoRTV2LsrAZyAg9FXvdaR3kb12PRsckyqLdJ7kijpuAqnzMKS9Co2",
  "key6": "3LpabRVgxAtn8S1yuzKquJEULbvA9GrU9b4ohFjqSTrUYoT8XVhmnuoSDsutoiuzbKThpgVpHJgV9qjiBoCZ6NzF",
  "key7": "3ubW4ctaPXPKWK7pPpEbCytsJ5722fZDaWQ2f3iw6kfqAVs9kzv67dEjAvxX2X599j8RxTXoXUwWfkdXXzEVv7Zi",
  "key8": "3fEvV7eyCR2akH9H3kwzmxCqd6Pp9RikuqQpmhYE9Ho3vxHUZ36XiZGG6PPQiMzGsSnt1R7Y3xNs8Kbe633FnCa2",
  "key9": "2JHHZ4nEfrT5ssGeBheCJPzXx4Jyvpnd1XEqar8B1MryZTVQsJfJU9C55CoFVRgv6wwvYEaZ4bGWcDgqCvZd97ve",
  "key10": "4qhrn1HBcPZ5rKvL8FYdk4LcoyPgqQnecLJPDCUjk78WpA66XqdcBLpZGxCNgsogHiQfPkzNJ17aZFQkHy3jBWSX",
  "key11": "5QrJDK7ngmNg2729Ac7BENstn4zZM5bridnSM4TCev6HnYjyEQUSqtWGgD2DSyLSvo7wyrMi78gW2mC4zxFGehYT",
  "key12": "33xXjnKouTo3cxXg1NufAaxxeDGFhwx8zEi6qZDUAUyasK6hV9PjeE64LDHc2Sbe2ypKxBNv5YfGd6gKgZsXEoFL",
  "key13": "43JTmxQmBPsnDK66cEr7bgvyp448YMLFGT5vmLnT3xYtR1jBwtQji7uGLdEWZuk9Bxhh8oE8bPdDsyBcxqfCY8fw",
  "key14": "2nHMJBWfDQPNToH6utiF81cmWQPpWeSfSBJFTGQCvtEBsenZBRWrTJeRV7UZHahZFMEC1ejpMXcEy7DYermoJbSf",
  "key15": "2PXj2Re39VcHbY3TRZqkSnjQ8Hk5owmQGH4beg7xoRhuNdw6VJPBz8pFsYCcC5g3s4qvr7W8cLcTqsewdyVZh7ga",
  "key16": "3EdkxxZbv1ViUErLDm9UG98xnUc2aH1sP6Bup2bdV13BNsq8419tDz641nNvgchgcBtmSfegoRcLXeJTPTNJHtqm",
  "key17": "283TWUzdrv989VyyGcM6AheuENQpoVxMSkfi7xVUqjLN4GVxBi3pqDtC87HKWqLMXkXHj5QaypVBtnH65Wo8bw94",
  "key18": "WNBsZjMxmh6oq44cKeVP8PvVn5dQBGiqQ4q4EfwoLrzE7AcV5s3b7AibekzQG2b3GzhhnfEVHPF2rjR5A5U6s8W",
  "key19": "5GdwT9aRBZLbqJw7sXK9W6ws9sTCsckYpKEYZGKDax4ezo9kuARi9XiauTnuNFEXRuhVBN9T3taLkkhj3vbanBxA",
  "key20": "2WjkCSoj4k3RbmJtPtznJn3RH7fPrP4DXaekLPjxEdtgov1RNZzKXwckWQsoakLuQzXZfa4UbBc5pCPsfCMQSULH",
  "key21": "5Vt5wyeST1c7ES2NrtBX4Cpmb42Dqyp215X2Y5nUzD6s8tbkpmMRh3gJ5VNcyun729hHUbqjghPLEhxpKGvtSPCy",
  "key22": "yhfL3b7WtXr6J8a5dnsdmJEjpNFqVe3hTTMVhKS56GNrTtUcy8BSqELq6DSk8s41HRJpGMtgi3mbAoT9dvBv6JV",
  "key23": "4JC3mGHv3iHwAoBfZ9GwE6JianST8mAx2uSZVZ23kTvJ6XF5kE2WxWP1rQA4X6rDLKtxRGeErJyxY3aBP3sTX3pZ",
  "key24": "ek7Q6CwzbypFWD6tkNtTDLs5tc9FJD6KrgChNr5E4UEJYoSPxpLMPfpQ4jpWhQFwC3QL4RGq7CFTR2drSAw7Gp8"
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
