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
    "4bvSL1JdGS75DzWHAidGa21fzSMPXM6t5YVNQN2itbYLAXpGJzEDDazaW8er2ChzTdaLDsgQoLF8YwRf9hfczR4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CfDHYfhnW6rpgZeuAGMsY4hZ77AS5CLy9FNHq3dpBvzqg7bDvqvnpEcnKN4reJi3Z9ZxBEEjLi7ckrn6QCfh62",
  "key1": "uR2ELz18guVt7NMhfoy9jocyVvdC7wS6SB6jdwq1nKUxEsEsN6MNz2MZeutkE4LMRxipCnzUMNJutzwkLvHpBPm",
  "key2": "66ms3WbrkWfPAPRtvTsBwA1JGkUKSfmXxXa2nQNNsKihmWAP5TLeEcL2ARgQFPJEy2HEs7BDSyvE3YS1D72ab8Es",
  "key3": "5VwuAKoKcjQug3qeiY8kvm4RVriTnoGLHnorCtH2oNk7gW3SXeHxEY2kQd6ZcugKhGEMWsyFRxBQxVGr2DTJnTqb",
  "key4": "5qTrTwBNti2amZPLTPb7z8ub1zaPd3ribuAUggimbzeT1XGSLuWYktzwmWkXm1TxomYMFrvUWDJz1APzPiEuYsLs",
  "key5": "5B4SqUPFY21Fx8mPYm1m7UCeLgcgtdFfaXBCnit7LhAL2hvR3Mq77F5spYEJ6nkHsiR5GJW5Emf7wS9Yc29M7h3w",
  "key6": "4Cv7pp5is8DZyCvRxu6bn3HEsiSRCBx7vRHJZf4x25yaUWZxmRgckF6Ktgh4x5oSQ4jJ722V1D8BBwC3BVtWCEPh",
  "key7": "2Vu7USgBqcU1Tj7kcMVsyK5QVuQks2SzRq2CZbCwVrMPG595pjNHzQyHGGcZ1NTGaxpcSxmsT9tFFGMB7a4mj6f3",
  "key8": "39h34B6srjBiGertuyv2TPRRLUSXnevNU9iNUH9QUepfH3KLRAHTpiMzvfEzJZ98V72ujGa418kz99ZiGxeVc8fy",
  "key9": "633UiUkTKHDgLensUGt3v9tTgGUzQqC4fQJuRBc8aktDV2HsiB3L9RD8QJie8CMomWMJaL6PcjRuQx7yUG4ce1J6",
  "key10": "56jne816YcNiUwBeP42yQ32Ax2p3grZFgYyGcNbppWnsikiHQKsDnzePaTCafuEdBFGBqLjsJ6u5LWras24VsQjP",
  "key11": "2m3S1buvVK6pFPp7c7hEXCgwWBtT62w9YfSHXKis1SnbySoGN1ywujZGduSaJ2dynLShS2ETJk7m9YNKY7pgumps",
  "key12": "2kPHVC4UKbMKZhZi9Yc2ih8Uoz4B2TKhgBCFwiUkmy4LfxKhcjNgvgAteuV26JgEbNKuFrf96XnCYUWT4JCEisjN",
  "key13": "4EbkzFnfWX1UAqgxkVodM1e9QTjdKy9MJLMunZDtqBRNb2xhgZSfXXiPvUqLu44SYoK7iZAeds5naF7rVV1t52Vb",
  "key14": "3fX1CwstSCwkdcPdzeZQKhZHwDHjRy7PYx8uEfeBopsWi29KvkFYKpDyEQfCFk7qqgAsPAT6hYEPgDgFqCyJDF1w",
  "key15": "2566wZ5tmkXZXUoyLHhD2pDJmRGRTKJ7p4h5HCNEwuXWsRAa1BgqQzoVGX7rZpbnUPf8MGzHqYDrYowuA2xKi65L",
  "key16": "6jkCvCB1VyCkpn1QgPWVdBbMGtPeWLbJxHCkJQJEPa6CmJSpXSgi7G7qSvCSoj2tdAshvzGFxb4PtQxnUcQHZuQ",
  "key17": "2byJHnWEHqNSCDFNTr7CeHa8ThZz2i8tX4mAnTCn1PoKCY8qDNCN4HHLnXa5e9SB4g247D2EBuCy6nNcKTBYyRAa",
  "key18": "5pdwZGoUSmDpWnrQwK1hX9ADekKhq9piy1N4dgfoHX5R8TRaQkjMtWCFaMU38qLbQ4ESvUsFp9u451NALJQR4DqW",
  "key19": "fMGK8HENP8ZQ77CeMsH2cmzvbNrJU9AjrBAxd2FmyWjvHdvgVcyApgLEntUV2tEWLFpiW7ekjwniYAXehWSoMnq",
  "key20": "zgQpjnQK6GchojHLjitYhTK4oVKeukHa5a9k8kjnp811SyTwjEnDnH1rtL9XN3D7QGbdmYmX3qNQi2cL25t2zXu",
  "key21": "UESifmzpFpg5aEkk6YpkrDWi51XtzYxNYUmMeNW37Hs1do1LsmgrkuqVyMFpgf5K2N5J3RQnz65A71eLTHQjKcN",
  "key22": "2RuY5LTyF1pXAv7a2S3VNscw34nQC6ShTEa3hCT1xpPVUkZkbQZ7DFCMBfyWNaS4w49RkLHyMMY5hgBZ4pxw75kY",
  "key23": "2JaHGvMqK6JFniDfQ4AXXzkfLYfCTXPp3LmoEFchw3cSWoiWBFy4j9XCtd9zV8T4PPZKjyiSzxjhyuRfJjYkhMCw",
  "key24": "3VNi2kkHq8VdTw2Bi9C1yLp7nyUVrFntHVbWf9Ko7UMG2iaNmbUMp9zZTLuXQJ5eZHMcDB3BKgt247b3PR3WbMQ2",
  "key25": "354pu6SYumFc8bhBUEMABFU1aYu7eBH5epJ2n4hPUtJuZgGUigEd1dKpVG17FMXYHjD9WAKaa26iBSq8qMW4NRWR",
  "key26": "5MukhyvsTThRDEUfBE3gBZzfP2SGPzwAzATBGNyGpsYJKmpHHYdPYs85bBgUj81MWp6Rb9KFQUo5uHMrZfD9Hy2Y",
  "key27": "3PV2C3NfPdRhAvrAN6kv2oo4oiMRkpXvoTwBhVc1SjowCJAaq1rBtqTuweiuTzwzPEJEZFmWamtvUq3FsRiZ4hZ4",
  "key28": "3nGULbSRVjUnTnW7DTbyJimYrVLSUtgjbw8Twsay9n9mP1y6gjyTwqsVPqfDUcxpVGMmRKd9G56YqsMNAR9HaQSq",
  "key29": "2ohbrR1GRLGn5SDDDPQdgh84zKQM8F4PEnvD5bAT8TM9MhwSHYsLuFr3y8tVDJqdjxvYQJH7TGDRFCYVVxN32xqZ",
  "key30": "277L7wHDxWoCUZST6hsCGZoRws4GaAw2asRcTPXWT6B3jeUWivMQyGMNeWNvS89eLieHzt3eNvdC3Qvo99JX76Xf",
  "key31": "2LBHhA2KonC5rEg4Fo6ZnciRCuSnwaELVdfHBgJUFNdzcAoT31uMdqX2DR3pdfpCmYjGULjdjaEHwYtPvkyt1dBB",
  "key32": "5JNY163jNnr6giA2SPD9NPvsQDhjVMuRzGEhJ3MWYmysXV5f3rPhbZMnUxnd9vzUnWEh59Tmx6wEoo8Tv2fN3HPv",
  "key33": "5FzfDjFs8dk3EuDCUR3qVTPvSBeyPU18Nd5uxr3mfiRrizLHL6WbPgTPo7LWQRszd7fEKmac28w68zmWZMWgZKC5",
  "key34": "4Yix2VLdPsNthNayX8XLFEBR7cC2LwEV7Su3G8BQgB8P1234NtUsJQwsUAoCid5Fq9i3EjjrBwD6aJ4YnZ3xZy2F",
  "key35": "3SDMyJqAdhWwohr7kzzTHFXxeYcNdsQEJt8xAwieBKEh8hL1ZncWU7zBqCYcVstwcQSLWaZetTC4C4pZ6Z3ZGtM4",
  "key36": "3hrtYuBSxjGCCg74h9zBrTETMXkDgS1LJkdTBj4oFESPdGWut5uVZ6iWec8iLH88RvVkwxgXKrDxBtN4X8pfFgKT",
  "key37": "Gptzqve55fmz4MAtiZvhLdynxL1ibuHJNeUFLuNYzpYkencQhXTxbwURmpsLRtdPHLQ125Dow9D5sEw2okgw92o",
  "key38": "5CC8791L3Av2jzYPaHzAUyLMNgVBkYCp16qpkdvfprvzzuUbs7uUEk94pQV4LzWoeeDNDM62M61pGDrmwNuzkjUJ",
  "key39": "2RyUbBig6UDnrqwGtVesANa45hm2uYeNCM3UWruNhuDoY3H9egawg8qUVtF3ntaz8tPR98i3tb1Q2HHj8HXFupgN",
  "key40": "G8hheLazGVfBegAjfbuPGz6Sfz27mUYPD5Wef2feCPATWFQqXR5sc1GVMDUo5QRupJBWKHb7tKvBQCfzRh6p4JF"
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
