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
    "5d49a7KKdvPnvm3cwR4niHMppgwt2R36dnpBgi3udPZTMNxhEcr2vaamtbKVSMerCdcE9x3cVsdEvavq6g1PjL3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hNW9YHZTHQ61oFpVo14Ggnf7WCXR8oUvjMQtgp77V8TjjT9YmSUU1U492fVqJXr8p9LxSRJnHfu9edxEHEdRSY",
  "key1": "51mBXFLyTMuxie8QCUY9gpu37D6CgsndeN53FxoSs5mWLZ5wnv38tvCgEFRTmrtH8Xxn1qTDU853CoTEUS9vPRS1",
  "key2": "v38Xxhe23c291Ar6JDZPUpgHohvRBtjo2Jp9gzuoDFCCmQDizvFwzdvyF5RXx8YvuDhSu1Yhb7Tgrsv6fH38hVk",
  "key3": "22JhFqeZ27Jrf3rfm64aqA8sidAR9qbM6S8oKXWxS4t5q6NFYFNGHMLDefztJXqtva5uSCmcpwRbSPpuGNi6S7HY",
  "key4": "5c1JVCzpxJcVuKSVvWSzXaUa654nj8a2HDNte1a13shfpwqU643oeJLdDzwdmLcehGdHDthenKCHVuMTNrMMz4W9",
  "key5": "3cJY9tCxgiXUYMJzG8UxGJpUmCTRsF1qYQLc5taAvH5e5jCZx4kG6EkSPWRPC12vh1iVSj1KsHZFPzaueUuPpDXf",
  "key6": "4gcVMWFxDMWvy9kEsUrzEuTz7v95c4eCbtDfSKx5b2R437XCDdAXoCP15ZdyLBnPfA7ZjRFpP8uBG4JE8nTH6Eqs",
  "key7": "eXgZGVjbcV59NoW8rbLCuhPiBfR4cedYbZFfES3WBnz5LcoTWL7aySmBedjcoiNjXD1t9pqdJjgTPbN7vPCoCNU",
  "key8": "5QbNVWXAmrr7UGjDGXTRNXRtBRo6JSC5xr6dFZx9VEW8rRXj3zhAzmCddg1HpDmcV9tUoxK6zCTmeVtEjBV5WQ5U",
  "key9": "3H4qtJzvdcvw5i2r3WFRn2ucj3PGfhJ5dmc574WYMNpdT3DKMwiCFdriY7sziGsPZpT6SW4jS8kxUD2EG1S13KoH",
  "key10": "3EDoe2pYw7S7jZqG1fF5CknP1um5tzubAcKKuKnoQZWXyXPmdh4wWwAiYsh7peTMLUo97bc6ypATfYagzYuPqncV",
  "key11": "2nocnJVedghUvBKUSyG5qH7hAh3Qi1rhXPgoTXmbKu3oMgkpUUVjVqinj1nVQubjyTbXdtyco3BwQKcDsYoaWXiz",
  "key12": "35aEzatecf7W9S8UaPMAFCnKLLG2bvmKVxXTqtBxBJSZScCrgwzh36r1AUUnMMMY1v6QhheHFxW12CfbCQTTQX5D",
  "key13": "2K1mEYQW73nnLzYJVgfMo2hXqhtqnE5FWcrEYpzMHiAR9Z2RaLKKDkPUELCRUEg5Vf2Jnt5WPPiUw3tU1TAkDdEH",
  "key14": "54nQw4MhvhrMM3vGyZkrHSqQLJBRagBJRthdX2vfWsYagWBuHzANckr2Xu83BCASot5iftp8iic7bC591gEE2QMb",
  "key15": "3nsk4EHnfgGipMPUrjygLXUraBUtQuY4uYbL6KGmEeD8yLibGDKUofPmN5kayGwBHxiBh3KdUXSJq5oiWDN8d38X",
  "key16": "thuxiT3KmaPt1P6sjTxwKdU1BJGNY9DoxiZcL69SjHjiuygq6rjSqr2uny229GpWZ5CUBQ4SZbXP4qiXmgK6Ke6",
  "key17": "2EU4n4c2Qr5cC1jffmDJxyuUwSr5sHMMf1QuTZLczbxGSgE2mQTifYX9mo29nBgS98Mvw9Tx87hR5Y8sWPzzV5aQ",
  "key18": "3MV7vV12W5eTPE6zj43M4VyuPafDk4ZxDJ3jZFLwHQ5VYgL9H6QRUx7C3aPQWTqFfqWmTTmiXqww6C5Gwi62XaR6",
  "key19": "4foDDKh7xL4HhdoUgPyTfVoFtdi4nJkrbuqX2beHRaPWeQzva2UxqdA4BJ99QLomdzCoGwdvCti8FicYDGYgfZTn",
  "key20": "4GSUDVoc3vrEvzonkHeatPhuTfoj822FmtERkWcEkF3GE3RQENaRyTxGcHjU6inpaC87yQikzQrSTJibKw42gyxR",
  "key21": "35jkGzhyikiHBoiBGCoYo9iCULLFPJN7RuqXxEsMG7GRRsN5ZnG7Vn7FskgLww9a52HvySXJgpkF9hRY5L6ruHRy",
  "key22": "3JKKbMi2jan189gWAQJAYvD8BY32zqUz2CZsMvVxabrsdiSZJ21XzNTgmMiDfwjQuopgpEZ9JT1E8CSmneWSrK2",
  "key23": "cNNkPgSD7c4dNhY95FEiNFWd17R6jh47DZiWJToypzJE9RjbPGZb621h56hCcAuRVdnC1mASDuBvcuzQhiv1Yxa",
  "key24": "3MX6E5LYqbCHU4zzaVBSLyRwBENA6u5Vkx4XA3ZTJZDPHdKBK4A1QwvGongCxawh3FgCEpcbS3QN9MGTAxkSgmok",
  "key25": "2xVybVd97ReTP92tk8s4mmeE9NcHYZVC9kEWehXxbSs4XHEwR9oGEJn4yTK5AsZy13vJ88fN6WKxXAPKGeA3fKxa",
  "key26": "vQP2YN4Zy1SWEL3iuZzBh4hycQGp5fSmNGr6RYQ5exG8LDAsgrVZGX2Z7GaK9VXUV741vM1cttT3ZTeWVhvsYtB",
  "key27": "5HR6PkVCb6J3XR8TmJ17qEsitRe4189fSRveVgQvuihE1VJFyVfoekcc49dFemrDAEXQ9AANLWBbPCsJ5VLcn6k2",
  "key28": "4HJ1U33o5YqFT8VguDNqXrep3Zt4UE9JwtFY5h2athx1HUzbvhHrFGukYB1GfpBPiF3CJVConPyZMeGcC21zrGPo",
  "key29": "66BH22Q8qVxg5yKcHqZasQ6vWTAvB2RePpHXNXuAv1tg3Q2D6DxSuHTHbRQUd5EvNZdeLNk5n7Me35rgpZy9GuGM",
  "key30": "5JJpqapddtmCp61kKdHpwSH1Cw2kzv3JzAPqtJ1KzxpQDaJ6EM6wPaQqwXLHE6jewS1ba22dVfiDkuGnWY33e2xx",
  "key31": "4qJDMR8iFAtRTogmWTFG9GiSNzxZheHyb268obDHUyQ8b4ddudnrmqBEFCF7apsUHW4LZjngVJz4EYr6ptdpCeDC",
  "key32": "3v3p79F5Sp78im8fQinXarivyBf8ARAFDak2yvYB2AHKoXvTKRDKqM7kuXnB2MrXenVpj7djS7dWFsXm7pWNMwx6",
  "key33": "4z5feNEeHbTYy8jVj4LZqsexEbw4NC3nXGdBwzURv9k6e3UJ5LE6T4uWa2DbAbAxqQpaZmLp1SusYk6wburvFYWL",
  "key34": "4ATEqctKn17SAvAS5F12ieU1uPy3Eb2DeWzFKK3TaqwPDjg3ZGy9YKLVBhR9K399Zwm1Gi4xzyenSdeYcrWp89j5",
  "key35": "4kDFe5hX5D2a35wWtCK5UHQkDCosLJfqLu5wYhijMiWXQV1BwndZY4wLD9m5hQyfDjNX4mm5JES5hvRdE28dpMuW"
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
