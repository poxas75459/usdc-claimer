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
    "5maBYFNXZvB1UubEdkz6SE7hYqTF3858FsgSd7RLVLr6hW21eoxEDvobdrJ4TYsBLPdgK4tELpnyUm1eiWpNywMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooeMVKnhJXu5Px7jpZE8D9gJk7x4DGDvq57MfWDwN85wPbF3fCsrzfme6iFvuRahZdKRJJ2LuFATSCL3yZvFbMd",
  "key1": "3MeQjGctqtK7G9KqCStjrhHuzjPpW5suvM9JknwCNLB2eeD54yPfSK5iPjbMKtFJ1n7M3xLZUXbysKtH1vgZPMzT",
  "key2": "rwwQST1Tcbb16mRW3SUtkcJXc9wzR68orCNYnhzhHNUxKhWEE4gLw6qYuPcfAH2S6eYUknmMiwfiyZUjqmynW8Z",
  "key3": "4WJXdQbyHuab1g9PHNK11nfoSUyxuKfCebwzmkWa6zKkXqw6BdRV53bZqYxhyCTiVUKgLkpVLnu9JG5WrKsyuDAd",
  "key4": "5i2SzDuHiPDJXuguXmepkCgc1Y8cYAfHtXzESAWWohhqUt4gptxH8ou68FzcUC719ecss2Qp55NA2JcFHN1WBfZo",
  "key5": "4iSzhx18ofZTkRw9ux7Lu2y9chZ2tyKGifjogeqSDwXXRyv4PwSMQnVJJmGjG1xtYofHbSQZELVTDaLgFBTUXPuf",
  "key6": "55iRjS1oM6GNZFgyAGHjGMschVB2XSkphZ9vLbbUoofsRf5j1JczyTnmJTG8AbYvohE5gR4KZkBoJKXps7gfZ7sc",
  "key7": "5wC64PYUxna947Fz434tXf6pBpEY81DqUxPxKJUNobuVrQzHZbf3vP3Eim1unVpE5ZpQSk1xKUBYjHXzVWGmjtxS",
  "key8": "DkmKMWAnTTUke7CPVjanE297yL3UjWdtsQw89TAVcN2561HN9UZZXv4g9sa3jFwPNqPJq5wVGyrayCVs6de2QJm",
  "key9": "3KrhPa1eW9AtMykfQ2i2Bp6HzCmSofmuketQdopxH7sEhc7pmage9AGbvhMAt156LTWb9aymnLKDXjCsPqVAjADB",
  "key10": "5sjrL9anKGhTHiG16uKUyFMDQAkpyjq2mvWEa47fa9sdo1evHBXZ3wyAXddnqFCM78tb1skPtb39jgkcvh7YCWKJ",
  "key11": "3yTSyuuEtyT6bL3Hwdv4F2XAvXLiNTtP14jGXYQ44LgSYyCcWc4onH6NoDxPG6bvgdJ486o9AH4vL6FgE1QQKNGh",
  "key12": "49p8ye81U1LZyLDbXLgWjFVPmSdpgYni6D7dbVMvRaZ4U2Uq8Een5DJbsL1Fx2GcKX5iiHVZrJXaRZ9bHXPUP8HY",
  "key13": "4xCeSNqJYTuqKnAsJjyKbT2ybTkfx2hPtBnyiKZE1QtyZ3xMdGBmj8qNmXVpwgKSVXKw5Kifyx81MDKNmWC1qNVs",
  "key14": "5z1p7vhY4RBgHon3ELgUpug8zPY46hv3c994WbMuQZiWyrNpuwfp5AeNLMjTGZp92LmMQkm2zTtwjc7v5aDV5WVB",
  "key15": "5N9dLcJJvB6FzgSToUjY2T6KQSMDEL64SWFiVftdsGovKSp6j8fypaoPAgTNva6WVjFX6qtFL4XXvMt6seNdxdHu",
  "key16": "54L4xYuZRaREjvPGPeuJqGQqfv5Ri4GNGpjaE9XT5cErJEsDRsSNHR7gPZGdRHQmrmPZu1Q7NUixpRsBoy7EqA7L",
  "key17": "5kQNWfrUqzj53qnHq32jPhDxFDPW6LzysNKAY11HwaToNv5m1EXg7K8ffFpp9FDyXGYZJV8wpEwj6ch5Xtaz8eWW",
  "key18": "3DPqiMUSSM9gaFrhXLKVHjAAsSYhtBWj51ABQEELoeXByea7J22GSxhrnkw8yW9n4F7CEJUcd8tLx1oNXrqhKamX",
  "key19": "3sT9ztrjmyW2436GwpdY6enj9QvGoiE2owCcd1piFyyRw384LqCVpvQyn588EatyvxJWvzHJcDWfaScmK8JDRVxS",
  "key20": "27K1FqkwL51Ws67Jsak1Vujp9VVeNdJLwnLCU1mhimHXESq8LqfaSo6aXaJEnxg6MpCHxYC4akiREpYWaMBF1hZ8",
  "key21": "3ov1eAtdThSUupe3kUed8GfbBuMjJ4cpq6hSV46X6ihLx5HjbdPRfN6Q62CJSZr3XmsU8TepbsMhRHAhQjvNYqSa",
  "key22": "3k7atc6E9jz8efyawQaiQtcLAzzirM1vnSVitXRz3MyCjggi6mDbWsVEGyvNTzagK5mRDLx4fjMfET6U9SoovQZw",
  "key23": "3iybg9JyFsAG1LJs4wzrC53KuBXcY1H3DXVjMVwHU8jxip81YQxLFc1dRy6v8CGceGjW3e1m3Hnu1aqaD2T9R5ko",
  "key24": "4AE65EEmjAbBbds2DDPShxJXGAEk7Mt9kApoaA49Jv8sANwHKn6yogLBxcLdzuEhXUyDWvL96yB9WA5jrj749tcQ",
  "key25": "4n5yTprtf2RZPAEjvzWe5zL8nUgVzn3a9RfxpZB9UzWEQKMk1P1dshoGhjnhGzamcxCXJ1tAb5gENwDnrXEADdvm",
  "key26": "4GJPSFoyPu46JRLa5FE79dZMEafDyF5vyTELQVTAAq3kFxWkxUKmCDFCbzvymiyvLU6xWB8r7jJQLfDubkcjxVpF",
  "key27": "4rCKTnpVNUAC5oLB2Kx2i6rP52KWLN1oZF8TVD7mEdjLQXZuRjfXfGpAcyKsJU9QezEfc5F5CWzTYBEAbwZN7Hi",
  "key28": "5tBaZLnQyWjuurTr3xcwdMT6fnVftBJM1kXVmaNQACDxPDkxNuhFQMksY3RyDjVBYDA8X9iX8ZG8qzMiyjd7Lpvu",
  "key29": "3b2onPMrF5xSketaF7FfCCF976NAaSJQiEMVg7TFJV7iUDpftDmLTNDn7JroBTv6zpELycTRiWxSXon7ZjA9Fpf1"
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
