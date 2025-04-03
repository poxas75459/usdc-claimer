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
    "2U6fq46MEB1hpEN7sXq2cD6tTFXupU8ZQfYE5LWMjd5NEn8gQjFsvuzfVDoK8jUercaSJcmgusfFrkcjgnBs5mfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHCgPZeWHTiNxEoAcArdQ25YceXERq4pnAw8a3LWn4jVvE3xHaSaw4BbwV5RtMactxYMNccbPf9aEnkKxyH9KLD",
  "key1": "2iLiGAXGZmPnGZE6Vhgx7xzFpcYQAsJ2yFWD5zsaX5R6tqS9a8veU1ZwKU24q8gXSivTone9Vm2n8PyBfNM71PFu",
  "key2": "3fi2TDAYKYJL8k52UfzgdKhuu6dj8TgRWtP3xsuMRC6a2vTf7yMx64P17gsAMsiHSE44WtncBrpYy3D585DJFXs1",
  "key3": "J3VvQUvXGYLDEkJMs5LYjnedHDVDfN9PWeeCgnhoUq32QsAnTzq9dP8Lcg2VSA9u9RiEqtmDAC1ZPbU1uJRrFFU",
  "key4": "4mKQJfuck31SBQR5dtra4vyyB84UjoKnXh1S125ynnvS1AvGVafd7z1DZaQP8ysfLiTcGEd2jLMRNqixpXhiT4DC",
  "key5": "4kVAiVpfeC46rFnhdPBPtRX4tn25ob8ZPLZ61TUHMw3mzYdCKH7aS3gjwdVQAAU52LP6qafk1PJvyA5WjVUhHcm",
  "key6": "3dneF7oEcXsQsFyLGqw1WNh7M5gjsczSJooXp6EnFYC94mTBvkLzaCzDMBdPEbMKs1sjQfDpnPYdNZrr7bphWZWw",
  "key7": "3cxJgr64ytmiPRAiSdc1L3nuFmtRvnyCFXi1MbRiz7bt8rMJTkZKvQZTP3oWK5iQK6SFYF6CMuYgWoQsyYb4Egoi",
  "key8": "2DAwbfuaUPoEZpT6YKsXBM3fTD2btNQb8Q4XbibvU2hBhSbpB3aRrHJAWLY26gWcXcpyo7ivDnxuZD32VDhFkyoY",
  "key9": "n6URtT4MJCYdBnmRFdJprZZbw6RC4EJ3V3AtoSDYwuW1s36g1EovB22aawYy1X1WgP3vgQSFDtUMf5K7F8te9hw",
  "key10": "2t35AKWuo9vYjExa3eikHaPxaBRRbCuq2XztuVizhjEXrNneUKV34hWFwPapDdrT9iN1jtHsqSBYuandtoZnrcF9",
  "key11": "5MbNV4REjgEvzemxtdh2zPQqgLDnaF4jjc3PgbRpL6tMUAr45eJ9oL3FaH6U2ktL3sUAFMKssiDXEwjfA7qPNNm3",
  "key12": "5Lmck8xem3wcQp2zAAT8YTsGFaq48YmXpP4uqfo1q6sq3bsmHQYbgRALaqDYKXvGiB5bvxU2UpmAYBpDPKMggMyu",
  "key13": "2tWWDsBjHNv3HNGHCusVD5azBkjVQYnv6Ufvdy5HMdjGHewNMnxZGFwsr87zz3UtquBdUhPViHguCDmYZV5dTuVy",
  "key14": "4xmZxRMdwCDnAPKaMLARmwnZEp8dERYqNu5h27puVucq9Qmac2bbVSv4fQQY7PGtN9TKoNftBgZJho35UvU4iucC",
  "key15": "2u7mREjWq2nHnMHeJnAm3FYYbB775qcQVm7eFXZ4G32r6FVqf3w59yQDtHffwrqnExjkKRctN6GQhDujWvMW3Re7",
  "key16": "45xkzWjDVUcynrBQa7AKyGWWZyh1hz6LHsS1cchBnBdRe4z4U4i5hvmScek2KYdUKqTMEEJyHViUsdTHKhh5fqem",
  "key17": "33BBg7u1Y3AvXuM9VTNm1uBszp7bcynvLpWcPueEhCBySz9najRKStr45YdDiVFtJ2qi5ofxhgXutZKysy4g58Sx",
  "key18": "58raAbAK3XTDdXiPuKDpUuVg5hHwMWipQJKgTwQY9QBHTPykiW7igRnPNUFqJHemhEK4uTaPYnzcGComukhR5bFF",
  "key19": "EjyYCiuFr9a5vnyFXdxTmuYc4hk41LQfzbJtWCFtkaqRB7csmZv3L1xeQrchJnjGc8ZVKyGEHtxi8katnwKcfgP",
  "key20": "3dXgL476xBeo8zEUqteuRQnyHKvkpArGymydULEdxEDtfLG5TvMaFsSZw2rZcxiuQUAwPe7cXCetRz3ni9oUWjrX",
  "key21": "3MZeEooKmV3i4f9z73rNWPXLJjPZLQYrvw2Xe3KMouAHBVkMX2SnB13oRiFSinsHUoChq9vF1DoVPS9PMXf3tAFa",
  "key22": "49sUPyeVY8TP7GwuVzhfGS6t2fZcoaSa7YhiMD3KjfSW6gmAnPPuU7S5k1vBrDCSpeAJ7gad7oTQBUVLdQnYQ2K4",
  "key23": "7moSAvAd9e3c5v51h82Kjq4cbq7tJYcufaFKFRWtKHTtveXr9FDZHPCcFMc8FkfMVSWbxp2HcD95gQYSSRd7AhN",
  "key24": "3t6wmaksEK7qr1mkrB9ctw8UwpjCYY3ytF95X4KBDhiuSQqWPqv7sg6xZXWwPTaBs6LQsdxQSNaB8pbRVF66jLR9",
  "key25": "dAswP8KStmY9NHeZ2oJCkm5dnaziGnEAgaQTH3ZHV36MAuGQceDZfoMZADt2K3k7eYCTGNeLVuJNmKMvpMM1NDp",
  "key26": "RAjjaemQATXxGNCMNpTK93vLGVsy96rbbkadKz49r6YmuZ2MiVRWYXPaBUQ1p1ZFJobpYSrUsCt4RMSomwkkRs9",
  "key27": "32AAWnnfTgbqsZ85NLU916J19Y6m1PV8EfEHHEwhp9oyT8n4gf7nUyEWyE8D3Wqkcemri3tkYwLtVQejm2QMFeTc",
  "key28": "5hsM4KJeW7KyHBgFYsyQPbjyBDbo7hfQgX4RkiXKp8gk3oxyvzdm5YshBCMLt7FVcy6LefACXnFDK4qqug4F6DkL",
  "key29": "4q3XhieGnQp7nf8zHiDaJuHZKNNyNCb1LeLUyhqyYjhatEXZJQcFxCA1YTiPyVHJFS44sircCjGtZXq8zmM4CnA1",
  "key30": "FjU2FWBPRPVny4jwWF5Q8zphzKHjZ6qdY8mUPxt3KgSpQ9Fx29XR2BrwaiQWZep27C3ZgYS8rZoATMruR9Ys6MQ",
  "key31": "2DinYvAKij2eSVM65UbPcnjMGtTbwFgZhq6C2U9hcNt4TpzVAiEq3ifzfKJ4PtNhDft1aM1zy6CsnVur2bFqtLSz",
  "key32": "53SjSDay4oBtXDMKmq3pmh7RfB6tNRaYnrNDAmGYivrNS3YqQAjo1vgVAvXHDKAAUhdnMcwkFJWvh18mwmBiQV19",
  "key33": "2BFPhdb4wYd8px6EZKAYdwW8xeBfVSwxzGupsx9GMaNSihtSFgFD6QNkgkHMN9bLd4mJxEgZGKh2MkuMxeUzNcTj",
  "key34": "4jxbkSQotM2oiQt8kE24c9pN4M2HMp7nEBAjVvBZnFVe4B3Se4tWL2USj4hDdWx9Z4E6MZ8ShfCxLPkdkWesewVB",
  "key35": "3jYNoHVfgog1rxrQbjcqBbFa6Z3GTARSQCmLEoN33fVvG8GEDT6EeyeL9N8cWRXzxPqhJiPquymrbfsyZthk7xVN",
  "key36": "2FwEhPgYcViWDNoiiErNS4QdAe63DMDekTCe2dgfnAGERbCZkBQP3yQGXFAcQ6aDkDeDTNnnVHYEZVp2yL495o86",
  "key37": "4vbcaCpUQ7L2NEChvsJ7v9RaWGoLNzht2pV2btM99hiVR4LBoq1m4EkJiG7hAX7vF3PPh9gKacQmtHh7EXXmgr4T",
  "key38": "61unAHitAffzSa6B6BDu68WQpPjJsCc4MYoLc8y17osTwKCKqGvn4cqLZwzR5C8XCtJdGDbrVFDwuNkzvbYMFJso",
  "key39": "XzrBcVmabuTdZVc2fTZe4ByVB5CYJi1SK4XYthRPaTX7g1QbdmexNDGppvKxzo8x1oavJBnw2YNgSF71u4MCDkr",
  "key40": "3XUNLjC37DXDnoW1LMACVom3rRu3QAQKHvGeQKo816awHwJUV3qdRLHjrSENe8GA2ocWoiE4aqa7XkuBvTxgygwf",
  "key41": "Q2C2ZDUag2bRHsozpkwPxc1ubYbkiJVW7i4cssvYbNKNCUEuW9ThK5GxLAJXwMg1pnjc9EBJygdd8AJfDtBJeKW",
  "key42": "4T8GAbQ12bs691T217mDSCuc2P6ro9u1cSWWsdFL5JAFeHEeG3QovdPU7isryMYeLN8HbKWabhSsdTqaGV1rSvPt",
  "key43": "3QTG3MMymbctFJ66wo6sFWSXbMQ4UZ8TyRFzbBT3Z9meEQtP4Vpcuf7ZntoDQdcFYjfdr8qKBHcbHe6mYTGaFyBN",
  "key44": "3wjuutcBkmKa2Fx5i1SdshPmSRdNVd7iDGGvH781UGbchZWWtcuMMx19wDHDmpGTvdsVEsBTjnVnbeTZ83ggtikZ",
  "key45": "jLbGAr1CkDPNo8C8ofzRz8woXT5b9uqi7ek2UCXFhoPbYd29tkQE5jgYucD6qCx5oNDS7HkCobN9zGSjZmFyWsQ",
  "key46": "2h8acwUuWXNRb31n4uSSJBPjHCjfXQ3GUHFENgXg9XUA8ZCr2jBZ2tEQtXB9Yka6VzVVWG24ehm5HvanCqrtMS2C",
  "key47": "37cKbjg4ToeN8hNMvAzCa2Tvb6seGtnYt3HjLc3dSrQDMuBPQNPTWHHP8zY9F9mGj9ivcwQ6oyMd5d45EfeEGNED"
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
