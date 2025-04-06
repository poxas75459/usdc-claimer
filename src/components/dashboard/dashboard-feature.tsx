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
    "i1oCYBixwJrn7tq8mLuMMC9RCVT8qDm91D82BxgQBuzAqU9YEbkBqvQzb6iyQpVev76LfhH9QojEGoCYfDFWXHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37bAgQdo9xi9USwdurifjCjjtPb1JtnuxNoRST4x8cyDVnWaSQY6mZZqo4f8bEKq8k8vZZoSrAo8vZQhwfG6gzq",
  "key1": "LPM4UQVEtw9XMtktv8B2TNvAZfhJNDQJzsgwuq2jmMGvCVWR3hrhajHhFLDpP6CsbEDFWDxxZE4qW68dJk9r9m5",
  "key2": "2723neD4pwP86Yw9MWXWpN6ghznq4WLW1WywbhL9rXghJcWJMy7LGMUfCx4scKgendYnJ7Sub2SKYH2aByhWGLNg",
  "key3": "oxcQTLha9jkkLCAgcmgwPrWhU6jQE3KUdfPFWejqZ5oFcYPiqNajYMhkcAhqNPpHRbUL4MFHNVqeRRJ1PuFZ5Uk",
  "key4": "4RHHynfQKuzUuYDTsb3YRFntUZ75YgZcYQU2Acn4tKNPJFXXH1TwAGpqnftPyeqrTyZpV9sXHMWzTz3wuwapHx8W",
  "key5": "GBS3dBmoqMeJ5TPrHtuPhKTrYLtFUhHyppxYbyk7uRhckGMpH3aguprxFB6EbovuJJQPcGkF53YMMQgpnpdZm4z",
  "key6": "NugQ9ZdqdCNDT5XofjYs7hsNvvrqKu1nSDBm6Ndb4ptWNXhC7JaQz7Nnx2bB9C2mwVeswZope8mpjB8uik3MZ1Q",
  "key7": "2ATs2JSW7ve758xh2C5TRCfq1iwK1NywZh9pVd4fiaPRhvjyknabhTRehgGkJoDJBnXSG88wcZDF193zEjxXjhMu",
  "key8": "26QpGnUhnscPdA9FcicjMwfZoGc9uqycjCq9PPzoytX6V5FMxCfindhJWcxreDyGqzABMiYPj2GFc7eKwZPrXty5",
  "key9": "4F4xHLQ7QKxbkJjHHbLjaTHR3phBou4jExkTxfL5exsq2CqBCDKg5nm5s29jD6U5qNQFczrTB4hEef3oPX1DwgHD",
  "key10": "t7w4DJd8nkvqyttBWG6QaJeXd9ENgTGMA7LM2qgAK8WXmCWPwoVF4pPCyg5U8zjphPuA7xNeA7MHktxQobJESTF",
  "key11": "2qxkSBhinz6Wd2Bb5NtqwoytTWiqbJpyg4UMNDaXa3qN4busQGh2A3MsbmZSd52qp1Ze6rgCKm5FR2d6312EpmHJ",
  "key12": "2N8E2S5VdvkEvLB6kXvDVX3qUZ9NjPnngwMNK5W2BSArp9xzFgK9xYtU6sz2n6rQ9sfoRee69qtcunhGGMQuQpxJ",
  "key13": "5UFw6S5eKmK1MZQxaBFmE8hLy7VGnyQHTqPC7JUx6PrvNYCas3DewfYezNYnM5UmZhvthDFrA9MBv3BJFkrb44Gy",
  "key14": "4RXRyu4pDrMYKxJPyw7EjmnYpvmbKvif5CEJ9sYeaSTgWioJKZSm71tuunJb4snMDrRoSEfSHq6uroSKnpXDXBFL",
  "key15": "4PRtWKFwD6d2K8kr7hBnW5LGmXdHBgfDz1M3JzVhyJytxWp4X69VQHKmF4eteNVJ8tZ1UqYYSTD3YRfUxhRstL3G",
  "key16": "9qNzYF9SYquUxZcD1QdBfc7edrPU4ju2n3wHycr5TEmcBQuz171agVpaRH13TBLFbwb4iH9gFiKhWvmSFJYUv8e",
  "key17": "4hMmtuvT4bL2TsM9sf4iM5xhefw8DiQQgLR2GzcLQ13B4a3SgCr1QEb2fv3DTQt4g2rCni5BzgqwEBPxoFwxAt2e",
  "key18": "2ApdNNrC1fBQ5kW1UmZvKrsCA93z6344YACA7fN6TRCwtAGYtGE8NVRpQew1zZtM9tcEpsuyckSLxL8h7QNQVHr5",
  "key19": "3NnuKTwgWqhJPQbXfpwLGHEP1b3QAYiGEyTUK7WjK6j1JU7R4ASUYnaK1HR4Wdfoifg8HEhThnGmMbKRKFxQKY8h",
  "key20": "2FMwnaJBPZUGSV5hAkFGxPj91q6cEkSDhNWeuHoLNML6GtV56NFjUYzU1PTRhGgNgFTf6NRtNU1G9PzBqTgLV3XM",
  "key21": "4G6hZR3b2CeMTyLQ23FqUTR8JWEjdWPdC4PMGEgFU5hfVNi34FtKuw2h7RVgL99qNL24HbsvDwUkiKVCr3inAMA1",
  "key22": "2e6bk8eb7xzqYoEUtB3BMj9YtuFb2X3yKxcFC4yPVZMD8PjYsfjLVtihmtfoERtWAnvvm4opv6tf1Gfew5r5cG1h",
  "key23": "5BakqAaEAJ1c857yBYbT5CbzTGZhC6YeaHKhjbmgFDXeTjU8XmGNobM6x1CTKanrab7UY3D2VSk37xv48uvJ9YUM",
  "key24": "5BGJr4YPdC2iBdrbjKzqNRFUViLKFq1yJHUxomyrtXz9JEUWYEgkbrwDkFTS1jD8DGxhbW2pGibaz2jQKRC1MJfc"
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
