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
    "58cNd631iQFWW78wrMH174MAzifp52bzLtt2afuPDJbevao8HvhDBwSGReeGH5KBnmf6oUfxqLMXNeQEtdGY49Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZAf7rJt8S5Lh24aMw9bQbZP7idKsSjanSnz1rqMfhywULSjiJUBVTsrNASdeapNgaPZr1uRNHuw7c2qbZrdwjB",
  "key1": "2Cz1oW2BpDHCvZYXtx7FpgyuvmijhNjSSyHfYe8UBwwtd62h9dM9mHzEV11rzRdXGPNR2bkxJyWTpkAEjiqNT5Lj",
  "key2": "5sAcDbPsnm1aSRmWykZwX5cAE5oKX7pZQpBsDzaFGvZJZP7eW1tMUBz1tYTFD2thXkXYEN8Et8Vbt4FY2r155Jtb",
  "key3": "3eEcEnLpjz91hcrd3DyfjTPGv3NZdc9pNdeup3LsqNmk22YCFCRTi8GHRakg96uW2bXU5yFrQoFigtDV4TaRBa9Z",
  "key4": "w4ZPKm29BQFGJZ3BC63S2wMfxHcwpxS6T2enZ7w15mDLkC9yXHx8eSrJCSQmaoufu3H8NdyzoXfySJPttFt24rM",
  "key5": "4GjT2BxTuh94Br5Z2JynCZEv9rmATkSSbYJ5SAiwYYHEzjsyhtrrQ1gXfUFR7p3ECDPVJXiJpgT6UZS6mf6ftyMY",
  "key6": "4t88ZSy9MCXVXXYTLv7nfubNix9N9fXJSX6R44ZXi2jC3ehgwqryrYEvJj2JYdwcKAWeSnCM9hM6sUDazb83rDhe",
  "key7": "64cKAoVvAYZf3TuTZyq5J7SPRULodgDgHSWosXWy9bRcQUocCLgQqdNCNFouDWzUuvZmQuoM2S7b4ZkEMok6S6ix",
  "key8": "2Y2oBjUJKtEz5G7HatomJssx5qGdRdrMQ2ebst23SukCBUdYYMpKG3jZvsqDmyeoX5SPgbP1oNfrdThALcH6tUVR",
  "key9": "5o4cLL2eQ9MSiNK7Y28e9WVUqVrMCYby46qVsW9xZc6JdZfJGv7iVvUVzgpe2mgdNoje8nDf1dW6H5wg69AwSSx2",
  "key10": "4ZnFbLSvi1S97yzRqbJ5YmRMVyBHPZjmuaA1EDrmYXCYWsdNsLgT92rUvgbyepgAggnCekCSF6SCTm3CSDeaTZkN",
  "key11": "51BdCGQYfkfhRUyfK8gLoc86Qudgt1VJSE4H87K1aNgkioYUiuJRGeBLM5smB5Vs4GMD7oWLcs6fYo4njWRvWc5g",
  "key12": "4UUVRPK1AhxBMuC5uzWZu8VXUnGrpuZz6QpaBhG5W1pAYGFmoUtwdnQMYjFkvy2is9Hwi5edGhnsKU7uwEeo62bm",
  "key13": "5rSqDddM83fk8eZAewWb4ToY9xSj2v5donwyZNLKsNPvkNBNTCSyWaWUMM69aHBtzK26nDqCVtvC9rsshkrAgxq2",
  "key14": "35V1hcpPZp4jtRVXRXYtZ3GyrcKDbuxpabTUdSoaV1qMz3m1TjyxcZTqaGXDesmb2GiJ38xghJM1ZajtfB2T8PhB",
  "key15": "4egVw74TUFphjRw2XxSoLjqsbB4GofDi1QTfCSQjZr3dxyWETYJP5JFJBZgLJBpbWuHL48XxAodfCpDDYBC3vmew",
  "key16": "2b8ZZWiaomNZQM8ruD2Xaxp6JrqFtncqf9ubf4NrSg5cYW7hWeRpTDzU3TEXMjaB7GW3brDZkm3TV8MC9idfWQqf",
  "key17": "5uaxmunRy2tdWyK2Cn2EjRHQLiCbDoSgZD8a3P8aUoWnBiGtaGi7GMULX8tYSyitUqB25FybFEjk7JXLAChL8wGj",
  "key18": "3Dbf2KedAUTvRwV8TaLyTWgBHwm6joT2EkUpUDzmFZL5LBMoBrvPEUt1knJLCrztJDN5kUtjp4avYdHvKMvLYh4z",
  "key19": "5eQLNJNaGhYtDnrcgSzLBz96Cy8MvqW6mFufPTXw3YsagFeKU7b7eU38pHMkn6nTAYKxL5cz7MTeh3mAZE3yPBxZ",
  "key20": "29qTZDapNfxZtWXnDxtgeTrEz6P5JgTxybfrTNn7WnSUCa55NGeJFv59Bi2XwRQAxSaLgMmogcxYVCZ71axb6LAv",
  "key21": "gseSV6Rrsu37EkUWdyMzAvWjWTUcYo9VuWwi4amRoAiD66VCLB9WPXxMJJ8c8sXixNGrMMCvHpgfYm4qHYCbFYk",
  "key22": "epKrpfv3eXAPJ73tN1umsPQtYMrYMfudEwQjTCi2MAUkucEbFE9FEsME53KuvT45sCDNuXHEZSeu2d7U1TTeKgi",
  "key23": "4Gm4ShXfGSi8EMXtACmpvvZsz2aZzGhhLKXrsWFKnoUXCnQiDqNfp4ce3u34gSJ6PxVTcD5jUgGwoSakPp1V5bfx",
  "key24": "3YNGryY9r774JncPrcJgNdJNqYMtWBqJg31DEWKwjKQqBKC27TEHuYpBkA7vXU55CuUn1gDXX4uKrs4cwUgbEkfk",
  "key25": "2ShmP7FLhcVYBVB4SPm9uNK6tQjRmzrNmisTHBMK18q4f3Mu1G5WDkoYsZh6kevYTdM47pFkGUeL5hWN8imWtCFq",
  "key26": "3NPAbc47N3ry6F8pMxQ6Sm1T5nnLJWAvSA7wrnRaTiwu7TQdgtx2vDogKH98hSMFV5QDiw46eWKp1ohqQ6caaoJ3"
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
