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
    "3U8xxgUFdhur41ri79HYSXBb3vq75iy5FwoKKTxD1SZXrNiP8QpgJvy3Bw8EZB3rUTRvbf4D98GHPzDu8hby9rH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iMpWepHsHjsdYVDqxMaJYvMAnF92FMvX77iCZxmoqK4qbBEx1xna1NVxrHB6HTBdnCXiXzYzBzd1fxQBUj97Ez4",
  "key1": "3Z4FU1roFhtsCDmrEvYvL1Et1d17JeEdNq5BLLNjspYQYAfyKCwpGmT6AtsdpSLDJJr2Shvm1byTK5wCwLrSQAwj",
  "key2": "NUkXdheXS1TqVtBrf2qphE8sAqYDBayKUJJoDg8zVZDauMBcPgnn3D2qHHv7rDTGhikP8tXGJn83VLfRjZCCcMX",
  "key3": "458msLTfYkMMDUN7ziLCoShwBURjtm4dQCUWcaVHVTB29nELSWyqko7MtHu4f3ZV79aK8vGfWRriQv1fAqHrznwL",
  "key4": "3xp1VSnyKbECCBKAwEGXN8Tzrosxpw42wPCiWg5ar9NNJctya4YwzoC8boAPf965MjHjNtFP1Fy9rxKnypWzYfae",
  "key5": "divZB5E3dmDQavNqqvUC8Ehiygq3sVaXvibMmRakzsfaEiuFUvV1U41BryLo8pjWPuVuWS2jfR13QrbUiThfzt3",
  "key6": "3jYspp4rW9g8JzY9mYuneHSJ8KsCXcnYMbbgboHazfVhvG24844U3xUE3Hcw89si3RjW3qVeEHfhiq386WSb9QfK",
  "key7": "5idu8tpLkmB3bNiL9eUAaXogtECATbiP7BbPadiTBtDHjMJGY8koRFa4VM7M94m79fGREGzjey9Pr2T85CK9DmEd",
  "key8": "63u3jeNYYCXzemFhBS9YdG5YEZS16GmjTs5CFmj9torjnUCociEgomWfFHV7kgWaRMARPiE7HESz7o3c354R4peX",
  "key9": "2yD9CrZssUhMHHj5tNKUDBcS6YTWEUK9dZnoDjgLU6zdzjVH27Am7b2s6mTmWEMCUcbtFjyvDLEqPqkQd2zMMLjR",
  "key10": "5oMM1bAaG62du7rrH7UBFHfWFMy91gyASyRnaUFJd6Nh33hKUJHyhzgK9p121N6sTEmtCWtSm68uJZPA84LRmbN6",
  "key11": "27wi8YtajjirUD2FJtazQBJ7K6dMU19CAvB1Xi2FSib5fdx3ahM8Bro28i3yY3XfZFi5qaJy5fXpCB6izNM7aNkf",
  "key12": "56YsbputByUW3n2r2SVCzvjYxd95t4X1TboeB7FJGHsC3EBh7zNy1bdu1wAnFbZDZ54tUqwY9pM5qtfe9EVHkq7P",
  "key13": "3YsXouGmpcXUT3sUrbjEZgj33hD9vEzfvpMKqT5cfCqH8Qv8sWMGAgMyxbcXVUGGRTDtN1qmNGyzs7uY2hyGUzoi",
  "key14": "2hf8bnwK9SYRK5CCsffP6bkYPYdBDmr2zhZSmxDGErksL8fwhV8MgTjt8G4a5znqaZm9MiWCAkkTFFtCEiBAghwc",
  "key15": "3mUHs1oG6BHbNdQpBLqmh6V9dzE3GJnjqN3467kjQirkSf7qvfUmUGiA4ajEQ4vQb9P9nnJBDXm6cXrXvk5PRMe4",
  "key16": "5g3rSsPASNT3K9VFbKZLnj12vYGZvGkXx7AEu7SXWMEAJjjCYDFS6zQ4JhSFK6rdo1QeLRfYyZyykj9jyiGAJSGE",
  "key17": "4zrxHyR8QbgCHMBARqpuD4i7HqNxoL2dmB8jJHtkjcXsSoTDwcdPSqv5UeayHXY955pbvt9YB3tQZFB1PxDF2QR1",
  "key18": "46JNRiG1NhQRWA33kusN5Dn48EeohrCgYCGYU2igvrFNy9Bf33vnGhLmWS1yzkjj11JP2j5dnS8geiSZw6GxKaig",
  "key19": "3vnD7P2m6nzKAgJkmPX4dS4oQNXTzydSnkhQL6GndeNNf98p9e9THMWWwUi8gpKZUB1kss18knhjLPC5zhMHfZmN",
  "key20": "2mgCsVhrr3xWetcD7rdD31FM9yMYdbz3Di8R3ZBCTupARQKmxrD5y9hkgEv5ovno5hYK17fKFNx4dmQHcsV2cjX1",
  "key21": "3RSNpnLrZCTjSZp95Rqr9sicEq8Ff51YRxRWgXoSfgYEnusoPqbHPtY8SB9Ckum3jQ9DMTQ314SeopgtWbG2GML7",
  "key22": "2QM9WDofPGdhs2EHW3e32NoruHombSZdzGN6y5coTwtLn45fD7CFhsR5UFFSAm4TuM4HWu7xS8WwNz2YnHSVmjTi",
  "key23": "3S8jL599UnCRdwqeebKfKoyN858vAtQJrvrT6hkczyPX5WXsGWPUeMFnEcvRZFjghKL8LAXmpD2DYTh4QqWfgoh5",
  "key24": "63LfT3YvgRskLAg7qzFAzvAwgY3zSbk7DDn55mhYQxh7GmjUvgEBBXf3HcrYCyqFciQq8hgAwgitj4XWApXUv8qM",
  "key25": "QTQ1fW9H53VS3jhHsCwxcDNZtHd2iJ9BDAswhhogvuBJ9TtBq3DMMkxbgunxkbQERGNGB1BKVQWL5pvNXjkbutG",
  "key26": "3My7GgkSHqGAqj1MRoS4TyJ2ZK9qH5UZmhYg9yDpi9SawX9NepTvt8BrBvTNnMvxuaSdfeaLQWGRm7Rj5HdmdBWK",
  "key27": "fVL99FJt21CUyTY4BLq4GCu5UoiBe6ECZErCm3knhB5fh52aJrgua1X1vrdNax4MfWmhWwRuEFrw1ea57mQtTFk",
  "key28": "2FnUQXhY9H7jMFEQmjVqMXfkwhyERwKvDF71RKvYAnVf2mAthM2GR5VZi7zsJENMuygpBbLjzP4Z7XjxoTmtL1dw"
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
