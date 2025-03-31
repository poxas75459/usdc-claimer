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
    "GDAqtb3VJ6GaVUTY8qFtFvKcziMnYDwiC3eP7UNxWGHchytypTkjp7WmsKyvLtGXt51XNSUejKTUoTe4dLAf3pp"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2Zhv8nT1Nn5fvU9zsvdN8qUTiPAQU1D3a7YiXDHECN6WPFs5hjYx2Jko9oKSwCmZmRHhot8hCNu2UMGgBBDQaxgq",
  "decoyKey1": "2ewSSUyJs32uWnyXep8WNyG2MutbA4SmKrH1HwRXYgAXNDaZFbFr68J4By3j6xExXHhWKLrDrJfekot8nU2v1UAP",
  "decoyKey2": "YgvWtRXtaYiCAjh7A9LrVCHEMKYYH9KUAgAqaLJbXBSS5mHKHj8aUXrVqk65GAqT474foGTgTx2nvp74o29pF7P",
  "decoyKey3": "4ov9AfWoH9kLUXkjmwf4orzMosq3hrRLVZgHUfc1SkenkA9zbHLkGNJTuW6rE8ozawkPNJT5ruavXM9XeWmFVKDj",
  "decoyKey4": "3sQiiC1xsDvxCuvxY4teAentMfctx6XFC6RPFqsmYyykiKiikiQuTfNWvDXrHkaqetuJDhdxXj8KKiib4MgfWMY1",
  "decoyKey5": "5DiBThr8ccGGUuaSrvhwiwjJkmiSrKAwwdNQN7ot3U9nsCPoTGRA3ZQBpZJXMd8SLUJWNf6xuE2XA8iF7JJdq76z",
  "decoyKey6": "25sA8Em9eEkyhkTx7YX8EikToAZDJJQKV2M9UPC1iCDZdCGoHXbZKwEvSc5Nyk2w3KvGdn9RDiAEJx7YFR19XWt6",
  "decoyKey7": "5BHCzXsqbTFnZWJkDPeVCKGhPM8kBg7rcGWszjKb4VLGo8as3LoMySHM99Be2mYE99u5G8xKaox6WepbpJ6aqLcc",
  "decoyKey8": "31L2448q9aQDLsXrBcbohrGZVbqpG2VZcppXsL9eWthTPG7zbm6X9WVNyDFsWJPC3sHMxGZ1S9zBinGawGgVKpBe",
  "decoyKey9": "4XHzCMgFtCwZ3nuviqqbNCk4oockZ3PXbB9ERHBVyhC8Hp2fdAAKWbkuCEFe1oSNeQvnsKAaCGw91SdVW14mgBNp",
  "decoyKey10": "5ikG1DDeadVygrC6veYs5mthVKrBc8CHaZPS31iRPsYxZrQ3zYp8eKjDYxgbqSECHCycxML97iSkZRTxWUdusMjd",
  "decoyKey11": "36xXE7JgvAZeyuHJ7p4rGcqoSc2vcKLm96fKnJvdCT6eLzwjDbaZawwHbwqthrS25nCrPiV5H6rXzymgLwGWcics",
  "decoyKey12": "3MfxVHCHAGeheGLoKokBZ1npzRXk6mD6aUdGd5StnniCYYv7Qo9kUg2DKHX6mhLLP1vmFoKJKGRYeBM39L3qf2hP",
  "decoyKey13": "B2Y6ChZgb8UVyvg5q961WqkQ6sPx9YkqeBoxaZDfxu4sVv3cMs6VbLEp8FhX7ib6nsEG1jjTRYn9fngPv1AWFyC",
  "decoyKey14": "4VcHFup8btXJen7qHshbzr31yVAUd34Uzqkv1dsSCvJQsRLjRTBuW4xHQZg89vNYiHQVPnv8WS93YWfK3TibHoBZ",
  "decoyKey15": "2rraw93Mmozj9Pt1HmtPdWof1u62PUJCHnHEgL6rtY4jVjHjzGWe2YFyrvrQoXaiuuAQpvxKUsQmYcApBkzVe2GQ",
  "decoyKey16": "2yxRRtoJdPHfKQZj7SxS921iU7WSjHZVix1s2JvDNGLVgsa7faajEeFvndQxzJVXXDgCcGWiakQCH1S615ucHs92",
  "decoyKey17": "5aWbaegKZatDQg9sbc8LqQD8qvU8dPHpSDPMugzCSjzB4nY6iq5R8kkakqA9RBktyRJoCYcZswYSNdD1nTjgmdnf",
  "decoyKey18": "2SuUECMpWBKtdwHyDpT7KwtmUxim2u82X4jWKacF8tzom2TS1uoipReoo4YEai4wxTGaYUkbs3ntg9uACrnUz92h",
  "decoyKey19": "py2jPPAdS7FFH3yYFvsU4Lpv8g6xLu8tWE4ZTZzP4ywZ7FwbxESepsziomBoQE2yiQJtibBovqhh9QdiBj8jax1",
  "decoyKey20": "4z4H7RW7dNfTquSLYtDAM8F4MYi7y3HX9jhLJDz11dMEs95zgD6YejGqkWgMksAa6uy9BVjqrhryUAjhzJGHMWbT",
  "decoyKey21": "oFh5yfkyUwM8N142ELE4GaL1hb95ckfRQxMEqmjMQCH23Xunq4QYfBArGTMRtpDyDnQEkovGgU8JHrXQ5KMrQBu",
  "decoyKey22": "56EuMKvdtBiYAiuuXZEG8QnAdXRwsCrN4L3APn9bZrUqnYsxuAyeBbtJZmC7QBD4qERh7E3u4RjbFZctoeuGn2a2",
  "decoyKey23": "2FuMR2AtPEL7sTFwSMaSjrD8vcvHAU2nyCYVhVW7pVbYns6tDrGzohGTUcsB8wmuCyVizJeeW4UbTtdftLEGpska",
  "decoyKey24": "43piQazM2R8FMo6BhMLdYdPaRvbnh6TEcnq5AcmR1rqRVP1LosFHxCmaXsDBeT1Ao3UuisNoGSpfAYF4zGEgA7DM",
  "decoyKey25": "4Tpb1gUUX4Awu7W1Uhk6KJu6ea1GkxWEDK4b2CWW5cKtVEd388yctosxr5kRWvxwsUudENRD6XHapYgddBHs4hAk",
  "decoyKey26": "28xD5sF8qwZ9cfFDcPxUDkiB3A1geUps3xw25poWdPSDiE1pduHDi8m8q95Yk3eku7WRvNvqL8PP6xdzqZmEadqq",
  "decoyKey27": "5hhaPse95JBCpJzBiYHx3iJtans9DsvEYmMUkTztqX2JXqPe5ykkcUz1CBU7mYDmPmV9MxZdD4zKRuEUxnQP99DP",
  "decoyKey28": "3sg7dUtW87x8vxb13kz8RaN8P3s2x6XNCLXfyJxaFBaucprBYDjV4pCKUq4akDDG3NtvPz2Mo2fHjN6nMHaeWDNy",
  "decoyKey29": "4KJszJ45ivTtfRKCrFdijkQQjcpUPtXAzTpRQKEfXAN5JuhMZY7d6Hdiky229AGiTcB936xBuN9VgpW3kV5DUMAE",
  "decoyKey30": "9ijVWpyzg9PoBWXXPbcz62hE91Ft3TvXhxeYkQgRJfo4rtiTwtpxyr6U8E2bJ8xQ1n7gzK8kEgttzTxtCexKy4a",
  "decoyKey31": "2awjQvVvj1WXEYaNZtGrdi2MMx5E2JvwTFbsYApVjvrdhAX3CPn1uW8WhdBQBudFaD4pEsh2T39YD5bcGFnPhGEA",
  "decoyKey32": "3DNQbDLzvH4QabCtQs8a3yGvJWfmmvrbBs1jUtSS8BAKmr9eoYZmNvjcSytRuWNCKqBERr6QZZFc1hiWpuFfYRTa",
  "decoyKey33": "3EQcwYekHogK97o3nbctoywXFXqhwrbGdhpThqqAuFhr1DyMyMiMiGVESAz86yZYHYovu65Bnsa4xfcu15eFAitk"
};
// DECOY_KEYS_END
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