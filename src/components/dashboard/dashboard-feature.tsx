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
    "wiUpFWvyySHX9jSGRBPVo7ZkF4Qy5xqeuBaSoXS3WVx5Fco62RuFDeD4wUGvS9iums4HKXZqzqaUQcdSu3HV1u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obbpFD3Az34QD7oxbPxiGfQe2yh6Atjjo2UmKr6uWFASw8f4CVcZpezAEULPj77dqsnqhGqeN5GhLZcSCvT8ozM",
  "key1": "VBPrC3W1T8xJKGPshjb6dYE67prnqUXegA4xgzuJvsqBWxr5Nbs3j7u7GHjuFavkUderSjnqhYKXeMJm5VxYHKy",
  "key2": "64UnfVUzZqv7Nek7tUde2iq4HwPDQS1U9eirWcL92qFCELsDydNQYM2XTKvQHoXxzY9t2qnfk5yrupR9JXCvEQ1G",
  "key3": "4XDVfd6PFoxpuPgd9T6Saxv8GHNvf1zA48WT5PWoTnq3xks3q6AUyaiofaJfB9PAVekqF7mYRxE5F2xFLA6378K4",
  "key4": "58koRy9N9qgjdPFcapqhKNoZZWvTPaH32j5dd8i6gMvUSGdNdST2mnKAYgdc5Rns4UY7bS4vUgzsaZ76pddGBqjy",
  "key5": "4sMY1RnAa8uFrjx66StBBC5foKjbCwgixT5RiVUwi7bzLf3C2Z4gdvr6AGDLAkGadWVX69GR6jEjnFEGXup3Vw8m",
  "key6": "A6u3Rei415PNjGpSMAW5DdpL35HRwVB37Qb8ke1nvXSyQgXMWa3omvGZaELTT8btDYDg9JTfxrKzPuptCuxwqRF",
  "key7": "3GewhxX5oDo3BsTRnVcBEjyacXzKf9BxiTnS5sCdKE8QqJENANJuXL7og1RwJHZZwLKv9eVsikjQ9DYK7A4LKTmv",
  "key8": "wKJsSjPmFaYbZMVr5CmPiK1LzCjuGVyHNVbiSNYBbGvhyfs7bRczZBUDQdB9VSjftcrmi4iQMVTsroDdHHBba8r",
  "key9": "4vSzDSAEZvbS98RnhwAsBdApZpw32WG7qiff9YF4Wo38JcywuJprwNHWvojrPzbGYYEqTdj4UuzKuEkunH3ZXrjN",
  "key10": "4a4CV929JPFmpsrspsuJRYu5J9BEjhP1pAjP2ZTLzqxQ68iD3nPgvuhyt4VJHRtJ9iqEHeQxiLunGz7mW8Mk26yZ",
  "key11": "4JZgzWtboN6A4b9Njs3a3BkbmotJuugoWiDbWWDHQAFn6j72GJnyVTsX4Nrs357SfT4r4q7kwqJEJ8ktPD3Q54BV",
  "key12": "5kmtTxBgRsosKV7Y5wfy4MnogGr91KwJMdPWQphsrwzfWXwH4749JqLW25RF3VYXuSQa8eLFqJQfaY4MR8tWdBev",
  "key13": "5oNoDTH8pdR7cQQeiTKDK4QcmXuBuADtKj2TgW5pYEPrkFiS5k6huL3r6Prb4tzUVv1Ky88KArs9kbGVzbNcKFVg",
  "key14": "2dZksZ5MrCqWXt8xe6JnD1RyCuKkngH3tzoYGmULGHyGoMKsX7hjnym4ur5zsZPPEQTgZXjLU5AsMbTSEybaDeMo",
  "key15": "4j1mPVLFVFMVBVrbzG1MFz5MQ5uygjPnBGELuxMQzBPBERefezDJCVo5j3rinqDBas6vatTXLBEDCPxhGkSQQAbH",
  "key16": "wv3QFmZVUL9exMcchaDa18mhgbGbG1QMey7LVHQJZgHn3ZQcphep575k9YoeH6YtHWETLfbLAY8u41g9TZkwRMY",
  "key17": "3kLpdBwAs623njMUJNtAfrqHqfsiTJtGUzPpuVpLN76HoUX7sBZAXrWZcHPofrGGgm8LuQUDJSsH4sSKN19HmJhC",
  "key18": "4C112WGiTe7FhPX3CnvM2iFFkJ5LmeEeaQkqDdGRavdPHjf6zzeEUEy69UuNXsoG7uhUvnBqGMMonMJLkUvMDXrE",
  "key19": "3cLUHLQaWH3d51Jd9zVh8ySzLJKK4trDqgAUUJLqsRWQamWnELumWnJoXkRPuKGnasSPH4xNHRaP9KaygsRjdFRL",
  "key20": "WKaQb4E5rfKtHnkJ3jPQU7BXCAc9VUapfzvSeYzv3AP2iYvCN94mPkQkusBoTzZHkCxU2Ao7zd8rGax1GKkmTEs",
  "key21": "4DtP65KjVeDNG9tnKyR6yGZHe1RQBnjN9vhPfMAQWXLAMSf8PzvkFBR4rPgPCz2vrXx7nstgk6AUikFC8MrBsGeL",
  "key22": "2BXM4qegg3LJ1WCJ41ebGKmRfBcoyrFsBTTpRvGNVKJJUEGCGAVA6AdUdrRZbgbcDinuNswCr7weKWDoD9yzE4W9",
  "key23": "4o1ZJMYkW4YoaAh9JfEmfszzpP6URYMcGFNFrXRQNPy7Jy1NuDjDCwsXLVHoyRrfMnRnPBH2FEvGuvmHCAjMoHRe",
  "key24": "2DxNPowqi59CLsMgZ76YQGALuVFFsrUk39JEFSB5rSfmukKJroui8ApJxxQJDZY1dfZXG6CcBr4X6cAWL84MLP8n"
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
