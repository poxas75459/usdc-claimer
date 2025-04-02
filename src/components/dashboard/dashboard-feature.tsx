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
    "5tM2aMyubcW7agSRkLmKDw5Ew7UjLx1DfbijKrqCCVBesf37SM3whMHuEAtK3TvL86kJUu6tSQxbJMdgd24oXkdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsWGUQwuyZX53fMubsrtzP4VnZNX2jyoP9kSjDuxXetS5ghqYzg9EstTfhQyQt8tMaiJ3CbsPEygswvGTMGAREu",
  "key1": "5DyYDutMswwjAy9pKxMFy78LejsQJD2WiDJknGNnVAnuaGMWtuLYJMJtqahvy1r7PM97V7DB9tBfYTPzNTUvwJth",
  "key2": "2rFRRtt7Bpi17NYoUs83Hgo8J2eAzBUSAnFvc6ZBDis5UmrQtkSxtjdA6a7qAte5TptjJX91cV2juc6kj2bLPy8K",
  "key3": "4ycaZCLy2owqRvvi4XKXSFSuhuSQvQndaYzkG5RCrvKBU8m4o9TWtqUgbUc9uBYAdkiZ9UEY52sxC4FUfB6uwxpH",
  "key4": "2YcswdCgfYuYRPqEU1QvvmiJVQEk539qAWdYmypauBK2B6XZKBtRHvrEiX69nB7ktChuReMpGAoLxDtHXkNfGmg5",
  "key5": "amZ7BeLzNq4rt57mqCbfMuSQTdF113DVLVVU7pC4UW93uot2cY58PT9cH9mrZng9UsN7bB8CFxzDqiwMqkcvLjr",
  "key6": "2L6qEavgCGWcLDaDyhc1B3RSkiLch2ES5y4bZp8yPUuv7dLwfb92jG3ZmHFgpweVyvdJWzJTANMhUruAeQzrxrw7",
  "key7": "5uGUJ4pHKkHSqA52R9p21xRdVxH4rkWNMZqjAf6ctYQ3HzHVsDmN8npyKHUL2tn6irLGpBvcLKgiz7mf6PrxVrqT",
  "key8": "53VRikZXC3aZgEXvEZwVZRpfqqZAMsXtUwMmGqJApz6R3YZ5r8oDsX29rdXom1qqZoWBEPTTDQgkxTDTtVytgqSi",
  "key9": "2V4meqF7LdRQTPWuLW6qDfW38uM6J21vgJBRk7CSTurJaokdo9NaQmEtCwDS7oJyVbXYr7oDPFMgowoERmwmw2L6",
  "key10": "jmDiYPmDNvE5f18Eiddf3XeUVCL6nyu8EhJ6WXsLaGaCtaSjEERBWYx5MVxyhbQX2kjyg7N3VE5J4E9qzpgCrAA",
  "key11": "4UujMmZPwa5vhrsaeAXJVxCkVuPhU3ZfmrWctdMj5y87gk6RwqRCVG9DhVb6P4dEa67uhYn6mNHXQPyo21HqF7oj",
  "key12": "61mWQFnCzMWBiT1596uM8xvyGyWY3HJo5D43exjueQ4t9quWLVXkjNhEnQFJuaSBG4Bn2hmBnaVwPC5L8NiEfAQS",
  "key13": "wyqVJYmgoTfENQVPoSovVHj3TVwjdpNjp899unDuLznyM1F1ESqSoJKMbXA9ubNnWaXWRBzPZhC1n7HdeVj8kvd",
  "key14": "GCRoUUqURLfgEF4EGSY5G8M4y4mbw2xJ4vyaabRexEshPutnxCofAs4H5BtLRYZj3m3iWftGsJqrpKxqQUxpwzW",
  "key15": "482Q9WrSjEdxPwJ2CnafGhrsdz4x4BLAu6ZKYpgLJo4ExrvtbiPwXb5GLBMZFeDnkvG9UbmfxE8sEYzUtR1HE22X",
  "key16": "4n7rpuMDGtbfbQ7z6iqzdf3eDzeXXhvdsWc7rLdjwv1mFJST4QdmD5h1TJdRNSCQZXxUkcudFFfzs6urhyuN2Vt1",
  "key17": "4p4RZbN4bJkwK5CzBGnFeZUKradg8dKQR6UqKrgFDsvKVBAvin6yyqrpnHHRDFEF7aGugJmQfaLSLZUTETDF43zM",
  "key18": "pvjAtZoycPX4gTjwBYrZPy4zAGUV2dGmKgLP7Hs26RdfEd8WdLT8Qj4RDB4HS8j1PWfWV9r4RPEdDezZNi7orvQ",
  "key19": "3pmDhzua1PzgVrfRKaUNxmyEzrmqNCeKRwXxuz51qs52sAmLGm91a8dbf89rYhxnRENPZDqg5pbv1yTcbN24i8XF",
  "key20": "K6Vhvcmu9nLwgjNjqY5f5Y6CoVFpuoDX1Pk5CFL6fBn2qGWmNsPL8pND6ZGA2euqC17ncKw2GXzKqMeZ9wR2hyq",
  "key21": "5y8Dz2Sjk6RFz2ZdP1Xb2NCqpC2iqCqAEkPx87rmbxftiX1WiKvuLG4nB4vXY53rsfP1H8jGQUTGNiTcLSJ5MhZR",
  "key22": "4DxDEfL3PkpYXodhpzuZez7SPVvFCQYm2eBcXLhhx4v2ck6RB2L7XWkMyv6w34jjBTGvsdCbbPw1Zj4JcAPnTqT6",
  "key23": "5LVP53uY9A3SQJQbXh6Ur9v6kvRk9YBLo6o2MXHsEsrjSrqd5UDhom49mC9Kr1W254YKAQaFKKsvJh54Xi6UR7Fj",
  "key24": "4ie7zAZxwSAWXzqwN3jUACnp13nay2L3wu4VzxA7yARTqGuWdqxyRmrfFL9F5xK43uN92iCK2uu8e83Y6qsateXA",
  "key25": "4Yd4kutum9jCzZiEHYDCRGtVRfiwMMQUHyACbD9nq3MA5EoR5E8M2YhucnykbkYPRQdCF87VJXhNysv1jYfcNSj",
  "key26": "58evQ1Swkg1HLdH6TdfBzXfov4f6fs47RcPfGgeCeG27ibBP9AHnrzhPGCiaDPJ7XRq5CyKt7oCM6FuCBDRQb7A6",
  "key27": "4mwPKrKdNJrRwSizewi1HDjoQ4uLCDsYxgZRjXhr8rBYk519VXP8p3gvVGoviqMbFrW9kRqW98uDbHwT9etDSkGT",
  "key28": "3DcMsbDXk48Fy6eZ77K1gE5bW2HRVSWVb2Lf7CUhWp7Zd3xegQUs5gXxuRgyPxzHhpvqx3FrRTATchM9SKSMqAit",
  "key29": "3zRLkM4JAk4PFUL7JSct3DBarUgLQfwgqt7TzvkihCAFbB5VajPwjJzcKaUpLGRMvzPBSdqjFYjF3vn9yd8ctYh4",
  "key30": "5dwi8JeQ4WUPbLnPMDnQRswm9y1CXSqrrfLMqLBfUpcipW1BWh5ipiopJ7sLrQinUmvvPhZzYMm4RxjJK2G8QEmi",
  "key31": "3qJzu9i8N4hjMx3iVvuLncZCuKaMYfjMSV1s6BMvgnbebYMsfhjAS5yL4MJ5LfiAfhFAkNZ9J35t9UyX6CQZN7Rv",
  "key32": "3wncR3z4ZsyjJMSnkjwUV6Jj1AgjHA4R1fG1dyehMkUnLFDvJeXVffp929UzJ2f1w8ZeQJVWsCPMuronA2QMLgpv",
  "key33": "529uiaZTwGst49ZcuZs8raEbxv6nunM2cBZ4R3AED2DmnqbvUJr228uwmDyc1xZLkpqmuWDAyEs9akVVqSdHBcXf",
  "key34": "2421HWQmzZwdg7o976jwLhrsNeGz85gCwGJHzRx7QAHFjezdgLYHFQx3WSDd5w4hxLLoMAFarg3rhuYi4Ztf3rMt",
  "key35": "4f8uZvJtG5eZMS1SkzsooosBoe7CtQx7WQ1gNXBjUyd4kG756838ayutB5qvX5JVRXEesYr7UZYVMj7JfpuzietA",
  "key36": "3C83884bMWWRs55pgwbrqCd6YKdNxgtdUVxGFw96gRFLemXUESWjeNeknn8LUBGudbavNYZtJqgkCJcQC6bXSZZ2",
  "key37": "5xnofepL1Bx1DM8eqMzHN6nuQToWwWsJN6CxAWZVfAkSBwMc2D8KEEa2VXX4wc7kAunq72qpPN573eN6yNMs1bdk",
  "key38": "cjj9EtVwxUnjWQG1R6ApeS1fjQV7aFhFYWT6VAeSqVX727HC7msMuU3oVLBokhaqKAZEWNEm6ZnTM9kJS3pYeR6"
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
