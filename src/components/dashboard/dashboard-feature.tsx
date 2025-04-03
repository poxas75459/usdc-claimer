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
    "3HsK231BbhWk6rzCKAFjSX7BqCMmrr7gPg2Af1JXEwwcoqYZiddFYFrgexAHZ9WMN7NK8b2cNHug6HvF6ymFEWUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xk5K3URUKVrFeWKjhPhzFiYiJV7CGFBgxMarxQkmXj3jhCC6K7fqZ8PK83vz9tXXWgz5KNTSJXP3uXJVKdEtgPb",
  "key1": "42VVx4p2rB2SwLsx5MtDjjot44vLrYSPRzevUZxf9r2av7Tqk54wyvgd2M5NQj9QCYLmcT55ZW1Xto3UcrviS7sx",
  "key2": "GnYxyCLRUWoCorVHt83WYLGGzUh4ScLfZxBTK88ZxtYPNZMjavCafedkMdh2REqzA3Zu7BTuW8daBMrWNpqE8gd",
  "key3": "3Cr9sLW4Edh2aWUJB9LF3RfD2gw6tydW3ww1g2dqe2RisDE9bix7yxzdcmDsSGZmM5C1WwcFqbkkP3GKGkL5LoD3",
  "key4": "5bUHYSYwPwrYiVchcytvcWH5qGjNWySCwmuPCW4iSihBi6QyFCJvKN9WYAMhyzDaEqBrJCTRt4ZaBGeH8xwJY6M2",
  "key5": "37bjFf1zBERwmeGhpGDhNMKXCc3jjx9VXaZUXNfPA5Be39zWpQNBbTbbwKAYGLYEojt7Ur1RSAz7SVng8HDgQm5E",
  "key6": "2bxvKXMBABiEZSY7o7pydeDLK6mq39ebwU6snk24FwpaxzGMrZsAqz95FG4fbt4kiyFKXqbpTqRBpA1QMDM2ic8k",
  "key7": "5iJWseNYs5p5KCLCi4y2FsbydC1jmjF3igrYa2D9tsfHmXnU29qCHq2J1jZmSgUDbwjiSQJmcTCFgv5uuSJWz1MZ",
  "key8": "5k7gqj3WhT5eQKitaks7jd56imcALYrLzE17inADJjbPnh6kdGQuSm1xQyYJYqndzRsSBd1PSTo4cWUd5rdjN6Sa",
  "key9": "4hue8vu5Z9nZTtNJLsjbVZVdoND7MAfmMCg8SFWpEnU3AK1UjJMzbJmMNyGmWEz7toySzVWeTFLDAjNhzidG9djQ",
  "key10": "2BgGJP4qKGcEyrLRTnyacQgQXvgDrvbU1kgdYf3C4qHutsAd75nVjnyuJ2KEZXWUVLGVExASJkbD2eR6Kh8umNui",
  "key11": "BNYSdBFzHj8NTKHMGDyPVrHUyEJudSGJiP8xHJf1vA7rkpmk2ekhvTN1sQzv79giSwULz6h4RXLGU4HRNtkvMrF",
  "key12": "3CPUSUXeqFUVdr7Bfz5ciUcSw1SfFnLkmtLN245Lw4uYP2VRf8LcByYKywLP4dcvBeLfHAwRZCP6UEKtnYGawkSq",
  "key13": "zHuvU3g9Dh1AgpNRtsj3T4wYNrrcTSYqFhpBdys9ajE6sa14d8Ude24VxiemK4BropKGQrWpYmUnmLtBQ9C2Qe2",
  "key14": "2Guh2M3GSVyospnFEn7mD9JNsKYmWcYdoHeHewzQQyGB5xFu8a4GwahFooHha5SvWHFtbqRDPa2nAynLWfZVxnn5",
  "key15": "3z1kuhZcxG1DbU6ujPVtTDHZDo7VswSyEyvu1zAWG1mDYgw8Ys25goW4ej2xAGoHu8WdmMmKMFvXqYC8Dyt7epVk",
  "key16": "2uXXGspEPAfkb7hnnLFn1pmDdEyiKbU4KH796x6vaSbLgyU8jJ4oEhWKALGRHfKWvLavn4TUrXrqbST3GYii7NxE",
  "key17": "3YeWoHkdwudHmfXRMos7LHk4F9nspwQLFWpcCrGXjKRopzKa3feWpd451PyHQ5Kj8yVXGqXnL46po1fHTJPpFyWn",
  "key18": "dGQnEUFsHK4uvsT6HjR6Zhqp49PB7upNufNqxYRwYie6G8q5EpWdFjx4y6Czm9UTwR15d4wM3DZY4Dqk5JNKmX3",
  "key19": "483FLnEC6RVTRABeSESHcE5uGo9UBQ91ocum9BkYMFkmhQmtNKx2yEbSF4Pm42RTTZ4xfhf2G1iT9AcehtSHj951",
  "key20": "45iSwKwYcXpK9ACC6FBDy9PzYxGZGH2E2ucP8sYYxCqzhUayxn3FfmFChqTwrKZUCNjh7zAviQP97NegFNY1vA1y",
  "key21": "3jiresFZQenJBZieCwHsDZFmiRpZTvqQ1wNA5rWfj27CJL2jBL8bay1buL3shEFSwAZ3ry8jCqxizFBBtLRxwfBn",
  "key22": "4LzNftvxJFqwDVHiBdsEPDdg8awmY64m5ct55AuCdVSy3KsovSR1o19YF6TkvFhMcufiU6gkbM7rnh4Ge6J1P8mu",
  "key23": "3g1SoU2daWRXZATa3n9McT7K2RhHk6fut4HkVDCopoM1ZaSu9taKRrHN6WGwLDjz5HopidG8k5sCiWKuC9t7eyeV",
  "key24": "Z3PQPSjhRqHb6psMCAs18mFn9gnqTBF9ttqmJ8PxiwudBz2wLkj7QqzvezffC6rnNohNhLcs7MQx6qzVBZKFbgP",
  "key25": "3H5SbRjvm6xEz75Z5J3YgrVGi4jtxXfCZ5QKvLViTWPP7FfUkVDXu9LPgpcJR4ou3p58pDCf9ixvyNdiKrAprG2J",
  "key26": "nCsenjMyUfubAY9EAhqP2ZuyxN7N8AVRp2AmXJoAyZHLdRioU9HBvuwiFzryLm8VfN87YKDYgUpZD2Dn55wo6Wz",
  "key27": "krAxyR7iSWDjA7j58hzKWcrz2Y6zfFHrSQ9RuRuPhhGshKsVDrC4WtLU6fPGqm7ZyZkGn2B7pHSyxRoLqSyXWDe",
  "key28": "3UXQe7H6r16qiHh8L84tEgfSHTtBZ3D3bfVGTWFo9LkWbXqb58XYVzvvkQ15JjEqAiMy66NSoF24kqC4FVBKLjdq",
  "key29": "55RtDPUFce9reqEL2XM6Fkn5ah8aY8hcLNwKr1qjY1RWtJPsiJNmvvMaGR8FfYFENV3ihJwLsLKB8Su9QWUyib4Y",
  "key30": "TgGqVXRqbCQK9u8v5AgCnrVM47u7fV7hjFKDJK2Lp9jhSs8nFEuHdXohp1jS48ypwrZqfp8Jdxbswex3hMwpTDG",
  "key31": "3XjeuJGsBL5KVqs7Pf2a7ngtTpFeHJDW3ojpWnxrBp4YfaqQCe2kFXTxvhqX3F6wPc3cpXjyQkNkG8t3gQJ3tF1q",
  "key32": "4JEdmsoEhqcDMcPNXhiS2pHnartrqguRutryBWYKMwZed1cAQknqKFFbRXKYnNsepNYnqCRRCQjii3Me8nhCJz87",
  "key33": "3xN6cZ4DGthnXVRHRRGy5ga33DR3UA39BvXz1GGsRogrw7JURzEtotZGZ8GXMkeuh2JueoEapUzYZhC9cEG7gfYP",
  "key34": "5YKXCgfCVb3mPb5e2N4oopJmq7Dg8qfMb44F9S5Y6wFPRnJaoRQCzZvSrAz4SZexFibgpAvFFmbwdNr4Dqfy8eJn",
  "key35": "4mEXFUGriVLHJcNnENDcQn2Jvqf2bxbd7JPWoVRRgtgwt2ksNemF4JV86tZR2CfWRwyKng1aWsd6h3BRNVDCCsdf",
  "key36": "21K8KAJhreA1SNe3nPkiQiD8saFqaf3DFg6GtokYEAMbedgsxfKwHsX7zNPoB5cBag3JkxRDNEQuEJ3A7CECwAHY",
  "key37": "HVxTRTA3iQhAFyiCq16Rdq6jt4wDpbm2WgoRz9j3zYAoqmPdrWJECtzLi8rhcaZRyUfW3mzD6WC31zmoceWnPnx",
  "key38": "39gfXYRZZ7nfLHejecr2fuPGfdbpDTsGhN6APtrnNf8PpoTpoAzYKNPd45yYowdoyFp14meqhUFWobHxtAgPPmdV",
  "key39": "PVsqdaAXypYZtDTa3DVX3w9jcGanxyTdpWRKCbpviNBuHcaUQ77Kwe21U1oeLVWWq1fD2DtjgTHZ9HkmrAgz8Jh"
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
