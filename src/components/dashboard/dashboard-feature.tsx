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
    "4G6LDyktTCBwXkiidS1y5XrvRTL4sBb5yGduyNztbmEJff9opYPDXY8KzcyqxyaRdq4EjEEdHvBG5Y8PvFZKrDWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyVs38L9xwRDrRg8Kdinozp6PSGznagJpwwC7e9pHJPViWQEajDED7nhTDdvTkCyRn2u3sV93veejab3tg8eLx6",
  "key1": "3W9niD2Spb7jUne3HrtwrUqJNmRx4oey4ZaCPhWYD743bYr8gRDJomzeAYR27w5z7984DJD4VTkMGA9DyPj655V8",
  "key2": "4yxxoGwP5bMwgW3tkLiB5t3BNPpzAmGBdZKRLyL7nXeUduLkiYYuaG8JCrXQadxAf5Kdc5JthqcXnu7sFPJdDuJ7",
  "key3": "4zpmDVqNn2EnPLHsVFc4Ph6Tvs1K7d7LZfaDujtHbYte18BpmauEo53eUQoW9WJcsdbcvaQwW1aLhgMQd8EH4M3M",
  "key4": "3D4naMG5vj95VGKixrxn2N4ziJ6pFBpy1U5Sd7vPYrZCuR7re2R7RYPLTEpEqDrXoR8RtRvEPR8pPNqpyh1Peykg",
  "key5": "2pC4M7TFF91tBMKtMQrNug5bqt3UZnS3w1nAyWTHfcEYvzRw2Xb5NWLFJW8RmJSUwGJo4JVMQoSYSE8vKCWtzi4G",
  "key6": "4VGDTNkyUmBVPs6RN5GN3Sm6XLwbUQ1TayMYx4nqbQev81QEdRvsQEtuZej9Aze41nC5JSgH7tMiquQxgHiaodMB",
  "key7": "2SfJFLdxQtWckSw2itMTq67sWtcyYJcL6hVdMboyiong6AcPn7HP8tLiG7zLeH99ouKGr5rpJLLtmtrpV5G528yv",
  "key8": "3Wo8niNeE4FF4asZppUKcRx7RCWTAx861JR9ZemNvhNuYZQbxJkLYRFFQQVPG53uW1Cfhbrw5LKrb1Jj6hj1hvbK",
  "key9": "5huFXKWJ95LAuRpMH6yG2EX6qu86aFPjpRJ2LvS71fG5E8NXYvqBPYgk5QAxiRmg7AaP5HKnj86nBXu9RPhkhnUM",
  "key10": "3SXZTKCLqjErv8tHNCCHCHkHzs4oYTQKv7wf6QX3ZErg6rskJjxa35FpSVGgEmu3aoe3T6H36RxyqAUZE3a1SSqB",
  "key11": "4avx9dFTocP8YCkK95UtEj1r4toPBx3JijxDRubT9ybRZpv5shg7PiVi8pN5cZ4vVGztsRDsEUceKS6oHPU8PnpL",
  "key12": "3sycdMkL8fCpWJXbqiyeaQr66BN2phcLE6SaCoBAicrFSLJUQiC7ppEbrkZq3nyf7nWXnVufn6s3vJ7Z4ee1et8h",
  "key13": "5Koq4Mb7wL6LYv8oPZnxJn1pp51Y2ojvNqesJs54JZEAFUuBmWZi4k6WE8Ptq9TwF5mWLpAtWHhiukxMeZWHXDsD",
  "key14": "41Psy4FAw2ivU3PR6Fczb1pY9qKvCXy5quiBdEUbV9ivdTpGPKc6UtgosUWhqpQu8Tqzndtyos3WHvNhX31uviRc",
  "key15": "3u3AN7Yp51PACiLV9u4Yw9whv6smKygguiHnUzBszepC9YjKqkrdms9xTjgk8y9hJCQzcxK9Z9XQRgs3Yxee8vEd",
  "key16": "5FWZrNcSbabrc5m9MFAgvtVKjKqwy3bQWV7GmTztsx9zgFau5L9w1fN2TSBNS7FUBAqoGSn6noomEzFHC1pLMTp4",
  "key17": "5J6rFh9k7jYvptQZ6aMMoJh7yFJGZD66aAtji7MtmUuLh7teVee5hVxeUbo9Li9ynvyHVBFJ99sueiwY6Zvy2yuK",
  "key18": "1cgGbzyRrpF9LGP6w1kvMLU6X7WKmmMEuW3BrS7am5vr6rjsg1Kq77uMAnZ9De1VbhpnQjAYgrLBhXZ8jzTAdhx",
  "key19": "25t92T5so2JftumdsczFpAT4FJ137r2L95N52yZG3PaCQZUZK9gT87LFT4BMvaZRfhNyqweDzVxSZqNTwSGSXr48",
  "key20": "43mX6egLEbW9qbdrwJfHNyTN8SdGRbL3w6XPVn3iL66bRgCwpUGgi8esvLn7mKNwoYXMVM2yLUq6AuADGQJhGKbU",
  "key21": "4EKnXHb3GnjSRqiiPnoxgWE6MDDgYYV7jk3wcUE48tsHYwvoN8Lra9PdyhYhHNE1sBUDSJ8guKWSZ5hQV2cPuLEn",
  "key22": "3ufFTrPjukdhSkLUv23EYQ7bAoA3D9mxJK3sDLTvx68eKcVkFBZb4TzvoNPe9QHQhGXunf1x3L37wYTGC8AxicQD",
  "key23": "4tGbEXBeQstLwiGLmHasndCCWqMd6dQQATHyjxQ3yyFjzpJVEHicLXB6YTwXAfwznjPbUmgjZanHJgLJpVhsVwvs",
  "key24": "2CsqhMH4DakFnP5nntqTBNDFvPQcg5Vvcy4bVdMpP2HBrkwwqLK7DG2r9mcEoGnSWEYrtK6PYG584EM689AxGhYT",
  "key25": "4Swtg6HBHjqr4zBdz7AfB9cxgys1HoxMp9AJ14THVfx2MQAhax7dCbknzYD9bGoYeVY7S9HZvMXSQD68HfW4eMUx",
  "key26": "3cUdrQxjAu9nbKh6sLJh8kmq2sTGitZYTGAhLzco26oEmRv628yy7Vq2S6VTz7ZX5YombPdPyta1xijEvneF7P99"
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
