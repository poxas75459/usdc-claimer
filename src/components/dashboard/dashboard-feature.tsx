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
    "5tqG9RKMMbXk2aj1ULYWDrzhPaAh3gZD8sz6L3B3WWdZTsFStj2iHqRdbLVzhnEMZCUmDjP7i4a2QkbxZvoPMiam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MHVkEuyhdVDMVwjeoSh2jXSa7bqyaREBTbMve1YR9vYoTwamtcLddAu3NQUs9vdinJ6RcLymk5Hd9wj2tXaCERX",
  "key1": "2oCW6PLSFTVyHoGma3Led8qo1DxMQodAvYqT5tvkSx991HL1PUxUp5hekTfMLMe6oZaoVGkthMuz1wkjGW8ti3r4",
  "key2": "V7PocanrP98xynsK64hcyMnuXMfanNcdDD1yV4c5Ws2gxdjDBhDZtXCdyTeSn5Sz7guDWXbv2zkEWeFKbkeW6Vb",
  "key3": "2XQ5EpjsTk92N49tTvmRMkFYyh2zE2GVw6Jo3MBkxzyRokwci2ZNaiY8gVG3Q3cHvkshMKgNhDmaDnKJVVBiaRAN",
  "key4": "45zjfy4CzeuyFG2z5AhUCceP6vJLjR4PZhtNgmN2nrDsFJyAjaeaGg4YNt854ztDRfjpi9R5sdRYNhxWsz63cvwR",
  "key5": "3WMbAepAjXZf8JivjDtyXWcpL5weou6LNzySVADWTFjQckoYybZqZftf8nS4Rvv56m72eH5fDvDG7sDQpjD4PMGg",
  "key6": "29ZMJLyj1FNTP2REnnvmmr6cqkmShHbdJFJfrXKpswjDGgQDApzGdJTqqsGjJQcAsWfjyP6rNpRgwdB5ZF3Ftzt6",
  "key7": "3wC77wzLsZDNRvPsKKDRjWwpkgkppSw8PGAc4s9GRuWcgjx33KdkpAPTtrPqvwywaErSQGcviC69StxtXdStkgHT",
  "key8": "5sHwkkUgrZEoS5ERm4EuBsY9Fnr7De2GFZftdahoZBfPnPC1znC5s43qPcG2z1DREwynMT9oy31pt3h1z1FbvN8c",
  "key9": "3zwNpD8cVWfoCbZ8WP2EpwYYNh1JWvSVPeKGdybEQKy8mv9oYv95pW7xEwHaskmbNSpLPFnpcFmbSxXNHFvfxjYT",
  "key10": "4pZHewFs9o5qgx4C7PeEbeJRZGTz7MBEDa6oTFeFiinE6DjZzbhdb9WspUQxp6hwPrKMfTJADNeBZayYRSttDt5V",
  "key11": "42du29jCBzX7yg6CVScyajf3QVgh2kU8sYrnXC51tjcxZbjXW6tqiC3kWsMTqyANxi9owftjy7zZ4SCQ2hou1PX9",
  "key12": "21R7Sy9mJsoaX6H9U9DhYBdX2b5cFFayu9Mq5jXis7V51wAX1KPPwNZtpucWpxgbM8fcB5Bhi9nRKm11SuSE8k7K",
  "key13": "2bR5YvX2ZYcghiHBbdp3kg52JhCyCwMm5BUVYwj87aqX87ThhNrddN23ms9rdjfhcdqzFq6Jxx2CDtbH53fFYsUC",
  "key14": "4e6CCA5BYVxEUAfont73ACzZNMET8ThB8e2Rxssje8dUAU8biHfvfp4QW43HUHNxzTNjv7NBRAmbAEk6oc5oeJcT",
  "key15": "4RyrzQAH75rVJkcjaZTppxt4fNQaMsXRQXSeUnLhPSVMLV5U9ReZjRdKSXFPZCJN4zJYeMiMtGsHmDU2TzVfAAAv",
  "key16": "2shKN7jYBv6U4NEVJA7C6N9EYRvEidUsm3vWs8VoWpvXvKGqXbf2MzdjX814Bx3EhHpCddbqtu5R2TzWpzmYofA7",
  "key17": "2bYa8ynsrTDxeCwJKrkPnf3JZDY8U8kn3RcyVDrqmkc1RQTY6shyJ15BvGYC8NkDRr214kj42KabrLRJiqokZRQD",
  "key18": "DMvxBQkjdXSjUp84Q4unYMrzUMYQaGbX958FEUrdnhccFDXkQYrUHi9inurBEn8Qga55cuEVZNmbHpzVqhtTaWf",
  "key19": "bEik8dJjxS5V7uPDNq3TDpdtZN2sXq8sKKvWBzqJFBVnGCC26jtZMmzDiyM5KCkGGqwX24EYWNMpPxQECzDRxHA",
  "key20": "5mi4qcWunLdJChSA2oscuDcg8PMN2MvJuLqGFS5jioRB8eF1gHhBPd1F2ZhURcAameHQAzymWufQdFgho1MLwKRW",
  "key21": "3QJBNNSYZWQznncws1dpvaQpZqyJyga27RpjGoPeUT1Zc61aQP3ZJ37FheHmcNEnmccbpPWFTUqqjpSrFEmDxKna",
  "key22": "4Z4k5nYTjJqiXcLPYaQBBV2LZyPHvzsmcjSNnR8H8nX4C4Jc3aWvdNyD33zK9Jn2rfJHE1YgurxLp7CbHw3prDqn",
  "key23": "5RZrYyWWGCfDZNftoC4FqwhWRUC2W1kF7Gt6HMYbCWN78jU62xKpiG8C4vLES9S2GFKx6hFxeWLiQYqR69yAsQwC",
  "key24": "2ZygHPfio6rqaATtfT3djqZ3N27TshFCVZWPCnSyAZX6KNxfNWAENenKTZcTLidDfhNfqpmc9jo56fTATymKVjMZ",
  "key25": "4Wg3tukGHjajiumJcJ4xgNy1sgr3emALmK4z3f5uo1aQLDhYWPmTWdpWA82J1ZE5ZDx6KgmLx8tX81UBiWpDToAE",
  "key26": "38tyBTxGuPL3AJfaahDRGXMp94kMBtUw2DS52dbYP84XtCwjZBKnwbT8tvEdja8arVV7mBZuE4BmsTcgnHb2EsMS",
  "key27": "2z1JEK6kanw4RNTUgkPjUnnWTNa8K77nYe23ThXXMnaRs3DYz4B1PVbahSxou3CdVd8R47xrLM4dE9ntfTDqr6ra",
  "key28": "3HBwR1poRYckvpbVMesjDJKLgFEFZXj4pXmfdSSrbTyyMmhzY7bxt2E1njSPvvfjHy2CtTDu9cmnwgWuLKdfh67A",
  "key29": "vsYgoyFqSaju9USnREnWZc77xyaDaNBZyNkz89gSSpCo1Myyws3EgLtb3z4NQ6BgBrKPnqmN8BYAGq9KoYNz8g6",
  "key30": "RqjCF4DGVwU9cQiJD94MkkUdbq6oKZ9Y6SEXExdNKfDUM2KgHi3zHUEv3mEj4r2dV87Q8nnuWgkF9g7KvfkMmrc",
  "key31": "4WNr7wX35aBhTpL75MpGiGttzqkPvBgYcgMKpe8vEwmF4eDfRdu6eWfU2Lw2YPoG1hdv5Uvbozr6fqUs2nPimrG8",
  "key32": "2vKVspDtxrNvMcnHbzaZsZxLYj9FPNoPkng3AfLT4YCoo3PD27mE6PE5qT4gdWheYXh4QVedyvqY3d1L1z6MWbVv",
  "key33": "4NZbRzymayHVYefwu79pJTZNYevVQgYh2C3YvnjgY2abYvVjW88FAtctN1mR1CGMcUs64iByZ1vURR6fgsknUg5W",
  "key34": "2SzZiuZWY6PEcKMuvpceYySkm6z88z5yBxA2RVk3x7k3zH2VVrnG92ZxsJ4Xxgj8YT9rViXucF5wBsz5mo4Yn6aH",
  "key35": "5X3Y6Ub8bu56VDhYW5xg244pnkUAM6Tf41MwqPmjZffJUiyGVUqTER4igiBrhSiJxAiU81D6hwvBcGZ9ZCKs9J6Y",
  "key36": "5wmRV95sds4ycS7kafCr6VdmWnEUAKRhpSaMeuLwAZgzc23xEtG24C5dntKTRMq2XJfh362yD6Cd3Yn82LgxRQCT",
  "key37": "49pPD8t4m6duqGdCo9NxJfPcbskWLNDMi7k9LAorhBLgyW8XX8vZySpvrntWFi9WnmzTPdZqhSMpYFn8s8EfZtRm",
  "key38": "DNQ3Xf6C3pyajT6cXmfMYrpAYAHFHjzpFAckGgEACDm4HHi7HCGRSVxSact3xxUZMjd7xrkKd46NNyRtrMrNmkQ"
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
