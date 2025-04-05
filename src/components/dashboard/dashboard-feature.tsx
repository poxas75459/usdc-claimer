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
    "3jutxEKY2SNvaofRJe9yksvuxQRa26bbBSnuDMcGQYX6zLi7e7b43RjYeFLyziGXvHNxEg3yzyGk8vkghBANANck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYi6jcPeGyDWKnSZAsa4xZ3TWx9K3LEDEPE84q6m1qrKQSbNyvKLtwAbtChCXxxZWTcc5wiU3PfXnNwig2v97wH",
  "key1": "XWUJWLEruYVknBRUAGCP82ikzbcPsuUjsFm6w6dZun76qFAnhqk8gqveyNptMrVWheTuXAL5tZyCUtwuAuX72Pf",
  "key2": "3bUzT8N5uJEKNoezfvc5mmJHfBuQLXkxW3SxyhGyAQS9zTZrfX5m7gUPfyNB8gNwr4XcEKyW1bhCZBdLBtmdVkg1",
  "key3": "4RrRsb83LQgimvH9bf1UZ6SxF6GUDrQiCz8jNdNQgboNLQVfcVYvKLnpc79Zr4Eysse8ozutV7YpWHKU2x5gtHP3",
  "key4": "i2MfmpUibLkAUv5dGdZ1rT96yfpR5XGXbgBH2vwju8Y4SRGZ8cSCYDnGapSjLiVXmc9JRYSv1ko1FzeYvm84oY4",
  "key5": "25N9gKHXu5fhvXDEPerdPtp1tak9VQvSPPxwurXCY3go6S2smi3v4UnjJKqYrBJJvmmmWdXbDWnU9qyMpSFvpSaG",
  "key6": "3dae17j22jr8u24eF1WXi74zP2jZ5sW9MmYkuRpoFr27KxGvJrAkz6HZUdi9SPokXTCxv2bEasBYayqAncrxqGMg",
  "key7": "5rmjF9tcrj366W95NRLGJAKJsVY6RmrgMFtxaik1Z7ZEuVMtxgLHr9Wro1XKsYRSvrxrhqUXUqyTUjdjB3Fi6YC",
  "key8": "4j8Cy9tMH2H6UJxvycACGpsUQDM35g4kNVsZBSZz2nSKAXPWsDhXtDE61YNLjyjvrjch58xdMZBACPpMpXqQrR5y",
  "key9": "5jHA2X26x8eg8wTQHTdBrNtByb1xaUp9AjTfDEpRYmLny6jPuhA78fHxNegoihX8cUfEBq4kvFuFoj3xjKHAhqkq",
  "key10": "4Wby36exT9iSJ5HLE5VNeNnjXJgWWXphSycJhMTqhUPPy9tNzyjZaBTD1SHWLAneoXmKeWiN5KPLKzGRbg9Szngc",
  "key11": "q5FiatwFPhf7fSmGfnS3GKqTYh3P1wivtmjffN6bMtm1Doza5VLQVVaSg7K32a2WA6v65pSegKTBMCnCpC9cEfb",
  "key12": "ZV2vF4KxgKjC5rTpAxn7VRqsrvipcMkPpfBeWJn8Vrctx9Guz2AH1FWEqo2sBj1t6K1cRZpTf3pmr6vHpLMFFrB",
  "key13": "5JAG7W7dZWSVFBoo5pgcJ3FY6SnVKbu72ExJHXWhKQZ9pcap1E85wvtuzPWsPs1rxm4bnF2F9s7A6HarskQVXvhp",
  "key14": "5C8jsTDZZyCvfoZivY3MptFFmAwbeCLZEoKV7ADGGyRW27HBvsgQTX9Pf64c4J8mFw6PCzfvGokJt3fajTyuQ48L",
  "key15": "4qC9q4TS4yRq945BwTi1bowdW7WbFW9uVrBCiUeuncRyfbB1jmEcXsZZt1FNh2RTiWHRWy86EzbZQof6Ki2NNWkM",
  "key16": "fM57DBirw8wxbDRhQiU22PG7THBDZdFfunpiNS6hVgCrJcxHsRxyvSVJDjppUfA2YVtafoBKNNVaAuwSF6LHDDc",
  "key17": "9z53R6eZN5FeA4qQtuc6b43ceb1Wxaaizfx6b9wMvjD7nSbzaFpXhio8oUGiwT1eZ6L7s1JwnoY54myB2j6JZ6L",
  "key18": "63X9DuLRZoEFZ6YymRw4V7FfbKJheNbSFeScsqi3GgB5ace6AUHTKXxhxvTsAWTKF6v45LuhVeNne7LivNvfGCXv",
  "key19": "2Qm3mUMZrL6qaMB6oi4q9hbtf6oYWF8MqzzvgvFMm1kBnWR7yTakRSQhTpuaQLfst1ybmNqeBi4TZ1ZLDzTKSEzk",
  "key20": "2CGE1UPLkU2ZHBNLX3tnRq1aKVU6F4r3KLBycjBkrhVMkTTYf8hdV6vgQLFWXbYS3PXk1TUDUMUjBWn4Dvdj8yDV",
  "key21": "jKdd2G3fCHhvk1TCVrV84XgcDYf7ZrkGnbRk5tHikkXTctrCZMJX6Z8FLQoB4YyhrpPuPqK6mnqfwXc1f33Xn2s",
  "key22": "4Kc9acZAJvXbxzWXuUrhUTvtKcNSEuBuMAkvdfj1K5kvVqGPLmpkZko1utaXHETrDVzCycVrgS3NGPFNkyoZTj6F",
  "key23": "iF3u6fvJ3oDuw8QnrreByLsaBeLtQZjGxw3fnDysE6tmTaRkXUBYzifKdLxn4eYwLTqQyfeZNJqBdAbWNTZZ7b9",
  "key24": "Mq2VCWpvmLCAXYJmhj7wrGJ43ujMHNBW9vVcQAPr7PeC3h9rS53ZEWmGuP55j6UadM76cpa8AY9hyyeqfXx4kcv",
  "key25": "5qKDRBdaLW72J7jCTSLNjBDfwJHr48rbw2CEZXLh9sDTzNxvBZ4ASB5S8MyRA8dKihypkZuBxYdhLYYoVtkefk29",
  "key26": "3sFdBFdkXCTNSiCbgdNvvsifZNhnDtNPmeGcbjTcjnrHG71fZhDdM2CbtbKbbDTsUzPpqx8xsKSyZH2H4MR8sak8"
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
