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
    "VEqFTgZZj127iabTzbbRtb744kdpBqwerp1uuPQ8FZ961f8sjxv9i7HGZfVH2Yeopr1kCMCUg8mnqdQnFtHD92W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pboabcJ8TNXAPkhacLBqEf94VXojguHSJ3yZu8UFANirwCqr9JumNdCQqgxBsewiNhUL3E7qpjZ3PkLS2KkyznN",
  "key1": "4r45PjiDMTngTw32esjpKMFLgi3aKrFodBUBWstbikFQ6Jz1vrWJBWNtdqFxrog7PW28P4VmdipEefn8ckAVaxvb",
  "key2": "3RoRTVfz4Fg4o9wdk82hCiSQhMYMcTk87Xe7sUNPkx59F23ct3FwRGFjYT6KPrLDfD1ByvE4LPnEv2AZPWQFksHz",
  "key3": "2KiUNbeCWRojBerL1P6cesFiz2RPqcDXEQpEpWDNZ7ssDdY9jrzwsRrsnmdg7xWLZPmqaPkRT1gXhCTvVdBh9ofP",
  "key4": "4uot1LNscWah5jcvfSjayhBbTq5pVRYMk9Gqi4Ve1hjrCzRVGqmWNf2qExLiFKEGoMFgoaeqMyrJrPvj6NrtEw1D",
  "key5": "2ihiPLPM6r121p5vpahauRrFMqyWhrc1BNDF4W5SKE4bJAB5VKRXgftAjwJBiyGtVYxLMxj7C3FpvddEY7iadfPF",
  "key6": "59aATujeEtyGFM2snTWJ3HezVtF5jJJJKJGvuSQNpDLAdV2knvM7z8C64Jq9vCU1Wmt47fhEatxc97eT4xikT5B5",
  "key7": "3AYZHAzhPbvR5eRENdUN3sk1YTMVmF2opxvgKSxTgJVmVso7eRbG4EfkT4F5DZkjDTUrnFvrP1VdCXBzSLnWBRMX",
  "key8": "4HUW8rEV1uMy972vbX5wP88hjyNAwHWp8Fhou5TUtZMrJ5m1Smh4P6ovL2E3WnBch8YXAdv2TrwefvcoCXNe4tBE",
  "key9": "4xmyNi3FnahLDT65VkGigW8ASEEN3MYS2w4wXDqozdiLjTTNHU2dXoGYK7mY6ct7zqJxask4tuGLg8v18yDeDQ6m",
  "key10": "4jNK9dwEDfwXAr8iCCtJWZ9ZwmcvBddd5j8buv6wLmcem3vyRELxdejDjaZnsoBPtybZKgHMMeonVrgzGpSNeTTD",
  "key11": "4PLAS6AjCBt6kdGjdUC9svDqYCv67Z5G6rXhB3yjWAJfqY1Pf85C2iXRqgKCTfuCumUBDzVfGXmgF3hnYssJA88y",
  "key12": "2Zpkd35wKTYCZRM3zLU8mq5Yiqq7TRFfZGsjHWgHEg8p4Q5KLbBTZ9UafdPm1UVj7eA4VLXYUzPUwooV14heVpg3",
  "key13": "4EMyUW2eqiFUsqxG6KZtKAo1wxDWagS1rhXj2umhVjzEea9AhHJsERwuie81bpePvoj3g28Vf2K6jv32ebW25ryz",
  "key14": "4eAgp1n2L7TtVivkVSjS26NWWqNEtnCxRYJkCjAYmKDjxUy4c9pKQAyzS9TgrpiTuRbC2fBKj2vgNg1ik77mB2E4",
  "key15": "3WYxZ2SA7ZSMADi4mqdeci7LMjcwR2Lmhe25bix1uLGx58pBpg6qjYxn7S6y1VGY3Eu4RgqYstLs4Awm2Ut932Ua",
  "key16": "2of9nCToAhxsmf2wvP2xNgwHd4PYnkZNuDfkAh9NkGLLABs89JhSKQDqY1s2pvesZjiGLXjYyWYaoPzyjFxH8kZ2",
  "key17": "5nNdFH73BNhXnHRuH6BZZHXdLjKdJzq91rj6Qp24egvFiGSsFjMzQvZfMWrnnst34m5mnfMvyVrAMpFVsEH4nbMx",
  "key18": "4kPT5UQgWZtWpDjoh6sc5rRKX4ejynS6z1vW5W982sTsSYneJDQcJLNYcQE1CQTmcTLx4aSmhUVxMjuiGvtGP8gi",
  "key19": "43mrHki39zx4WMywURQdXFPPQ8SNuFtf1NCnwakwLJFtDdQ5Dus7mnZboaDwUHrNTXUNQJiibkGcj4XfGxyqDi5S",
  "key20": "2iK2dkCbf7Kj1bMAGRjDz1Wky21b7ERpJ3JbfWqG9n3KfRHxAE1ZiLh81sZh3QZVxw9GxkuXxX59FjBY9NToXk4i",
  "key21": "2NWJx8EmDyyZrLRuj5rBMHtfSg5S9XALXRqNbcwMEDyMQhz17UNtqcghiKoFjRWrXFm2V5juqJExDjLAh8YNmfoH",
  "key22": "3zR2sdyECozjYWX1BPWXvi98VLnoanZhDCFHhHbtzZDwKcXqZehXhWTMYyd6mq1kcqa8xr83gwdwNvXVCVMAY9L4",
  "key23": "5aH9MG5FQnvJN9mVGKcuKBeJMQqmYYj2AdMWS74rN87ZFxy9V1jUWC2J8ws9JQj9HnA78uwxNrRufcPXtiBbpsNq",
  "key24": "5iLVgNMVua8NcBHVdjdSvo9mJEudSKxFuKDVroTceb9MEGuYP8i1MM6T9Q5MdwnUNN2L1ADdoRvCEAgKcr5a9L4t",
  "key25": "36AcyPZbcxE1Mtj2pkkjTPAToZxtqafFjgGeR1NLrmKWGw7RYCkKxSMbKTtFuRhiMFvzk5p9HCgUGuZc1Z8uFUs8",
  "key26": "36NcqVv1cGt9eXJWLsfJ3GCNTkxf9JYraSyjNSnuVUT5K2Zhv9xyg51RyCfv9jMejJ2oeeadbQosZJB1WR4CAM6L",
  "key27": "KAF9reQW7sfixnsHZqUjc2NZPyt8Qpe3dYtyodSTR61fpr91dErobapm73oTVY2Q3nTPYdAMkz2jvJL6RgtFTFc",
  "key28": "2apVVgA3gbjSDBXQCMVTb9E79EoyAqQ1JTF9coMh7YsPYJnUiWy5BMH8W7aFY5npjfgrCWo7pTHTsCobvwvWgAbx",
  "key29": "5osCEZkw7tTK72V65B62PqnHhGRmTUTQSc5AkPcKc1cxmTKPoVp27Hk4m7SBSQktfJYQrgUULVpRhpJuFwp4tcpa",
  "key30": "2bL2GGHbcVavEWCUrSWcXZpt9CSngMxfpaFogFXQMG6iRRNRbtrVeGoP1FtT6RhvCSey8b35aQFPcoydMszjZW3Z",
  "key31": "5brCfcxyfwoa2Tc2JVX4hZnWp1TX1HuNF9mnxF7DNdUmTXAgLA867unJYPzsFjCV8R2txfS2hdJqkN3inUKxd72d",
  "key32": "8h514P6QMMUToh69s2NNBxCfpPsErTvBXvwTw1sBvT2j4jWBdGajSXuWYKGxrrJiQ577o9NwoFgBf5jzdsjUiYc",
  "key33": "2e2JN2NYGu8dA4pR5zLogCkpPhafphFetyhwk2dSo5fHHJh4LBGkqMg12WTmqkoxDshxegWhs4xgDH3moTnULM5D",
  "key34": "3HrvEt4yRZxbCawYQfE4qvHMdPCHEanetN3QsLPCRUfVtX18Vc4kbWQpSwteWk57VgQhE57SR4Pk2ji7hwsSPiVR",
  "key35": "bwfkbbMFzd7peLDigGJRZ1fx4uMFkrgYZ4THXH5yyouQBurMeKAz4bW8EuoymdCF82k8YbcUJowxsrrbuN915em",
  "key36": "3LfPuRgZwMHu1T8ugZzzUvci17pVsCMuYTv7ZBTuiSFapbXopAubMgFRWAjeyxX7qbDah2K2uWRNjNbiaZwPofRR",
  "key37": "3WEMW31QqaghLDDRXB5KBKAjfhFaGX3TbsRtjNJS5bUnPnKxfLTfPKUWYuAZXgqV3uV3BSXBRMJHFVFkcAncT3YU",
  "key38": "Q4asfunNPV3zoVGi4nhwjmAzhEsvyKYcVeZLjtZ58b6oKwGuwaLj6gwd77sRXvYYnC5RkLC7Po9LeP64wagyQ2o"
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
