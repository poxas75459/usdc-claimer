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
    "4TqCu3qq1Ey9UsMDCXFtPYxDBQZdNNSJRt8hkW1FTyYFYwfb9zaSZWDxRSX86KDesrKyfonAiHkyyLiWtBBG2bth"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4g3tPx7NZDZHT6rPaDXfJ8yYTBfabMg7c65u8TQ9kycgznXiyEvw4V9NsfCsBAkSn1N6asgR4S1TEe4p7bSEabRu",
  "decoyKey1": "3deeMEBb4nsjNPX5tCZspEST9nARDQAVqfUG2RRT1SqgLKKjLyxxW7oAjtGX1tapf7Y5GMA1vQeELtkQnqRZKJYG",
  "decoyKey2": "3VDkVtT9JmJNJjKUEkvCqXviyN5fUB3SSCFhwqW3GDjVGhP7LXYyQV5oA6gjhKg725mQqT5MNWvFBwEiYq5rtsJv",
  "decoyKey3": "3AqW2drv4qz8Kz1n9ustDYBv2vZZsRUSdvngYDvDD4LgHV87LpFYSSE8kKDM6s62n7aWRaXKRJQxpV7sfSdnr6uf",
  "decoyKey4": "3XUMvqjinhN7tCk1ULdcRjjZS7L5st6AwCBSLaZQfSNuj1KfKHYmszFYVAGMbyr6tGaVsgbPtJC14nwm7cL3a3Nw",
  "decoyKey5": "vmHhvnQGxoX9JdEdHFbJFV8Pz7qdTXQaUEfLHPqM36YDxCqn6GDdiXyJVuNC1jFsfF35CW5oVMNcqQERdKUpdez",
  "decoyKey6": "4xLNNzkZP2D1muhRkHhQjViz6C6NqUrpUNbZpa7PEnDrfug4wktqyieeqhaU9jXoUyFtCir7mQGyUgyZkVdo8B22",
  "decoyKey7": "5cs5HHFVBxyKCpM7N1U8bReUC5tbstxSZzhq7vEkV9GtmiNL73MEiaCsrkHknCiBykMb9AWPWbE2dKYgn3r6eKpR",
  "decoyKey8": "2bDkFgmBjuYaBU6E6itreC1nobKzoNyetsjRdeyVUjQRtJgnntJdsM4FAA99uZ4KxgEvPz6b4NQ7vj5aXmNXRhY",
  "decoyKey9": "3bAi8Nx4LuG8brXkrLkjAh5Jp3zQeeUKfNG4EnnqZ6c65E5KBM3YgY7UJKMmBYU1JvM5wAWEyTiqU4s8cmQZmYZX",
  "decoyKey10": "3gvTYQEw3CuuiH5peLZjvgDu7Wu8f5cA2NJQRyKG1FUrxv9Ud6b3ueoacTcBm6DzoQ5r2pw9fqSdB1Jhub69r5gg",
  "decoyKey11": "489o9YTVywRaRgD7DPHyPpRpLgG8ZDgsT5BXSmhSGCHRtAWHpDUkFwj4fnmLVp7zuC9uP48MkWfRuGCpYkFMqZUb",
  "decoyKey12": "TErgaFJBvtEdCppQVfGjGb9iuVwK5F4crrntYbZsjwzhgB1WyFyXGZKGRJSGRx88jUMXfXif1VtBPaxcxyeyN5f",
  "decoyKey13": "2UFCa85sL95euC5o9Mv5nRj4Uajxv1fPfkv4CDEieSDyaGyhtnFGad5eFrh8jV6dycGG4dJzqyv51BtcWJ689Z4q",
  "decoyKey14": "2NjeraBv5TnqxcaSJ71x36N4taMM6gEqqp3zuWgyLsCpwLe656JeYX55tfZRZXY7Yq5nLuUsfozUiMGnsqCNahen",
  "decoyKey15": "4VxwpUhRN4W9j9oUzfNrQ8ySYTXcRgUR1QhnpBb1AnrtkGEkzWVt99eBV6em4oqZUoRVhUibpmpfe3N1Jk3n1Zc6",
  "decoyKey16": "5pqkAazi3mhGpAXaWzJFKWavLVtyZDDyVfzYQ8VaMQAYyNNBnp9eBeH4eh2BZR74nRnyx9c7VSJ62ELXty5B3Uw6",
  "decoyKey17": "2NBUYUSxF6zGbL2vd4z7SpddRAn2xM6WsQXaZ2F22gnaVhzpvqTph7HDZCqswCdzX69xsxRoC2EFjj2toxn3M7vG",
  "decoyKey18": "5c4WbUv5kRt6gUnybKtGbTuZJLA8uPxUQDLhgPR7zA8fCD3e9hKyM41k3y9a7LsDHf8M9f8dvBdKHAvNkrBnqwvs",
  "decoyKey19": "nxRseCTYZWKzp2JTXkKHZCS276N2f2cRjMryqXc2W1aSEfESqFnqFYVgAstZr24RCwFWmRtxWw3ZPm1JfV3Cv6V",
  "decoyKey20": "4LyjEdR4KhD4S892rDj8Qi5wf42gxHvx53Bioog83SPGD95TaGLTNDnYpcxUYREhUP2JszdiLPq3URfHviKZr5US",
  "decoyKey21": "3iAfy45SXTteiR53ffnaRANUjQP3ScqT5a9gGS8y2rhddfZr5Bbk1wDkCbfAe885Nok8HnM8qVMYfaoogaMG37PS",
  "decoyKey22": "2zT8Z6zvfh1Q74EtWtSfnyTtTeZJp7n7XL9Ppp76k7W568zFc1FK5Qj8EKLNCmRedgUQxRssmdJiDvYwEBvCFDEi",
  "decoyKey23": "2vCF6nBQCFYkXYYfMXttyX91dSoPy7QNrJVHvtbNiimEscSHAmStZNKvkCVZ7oBt732vYiFqNjAYKs7jjdMazmJR",
  "decoyKey24": "5u3dRWcdSNUsK2W2gTymGiHem6WW7HpwfZSvWQFcBVJEFW55isQKxYYg5srTbbyc2pezF4bH3pbCWW1mcefPKzBQ",
  "decoyKey25": "5qeRsFmxbqqNVsKp2orJTsvDrXic8ENHb1vNwA2i9iwtncLKWikYjRxK6cYz22Hprob3Ktot3M1zGm86oQJQboGJ",
  "decoyKey26": "raDhW9cqCjkin9LuEgjyH2gwL1Dajt8zRWwyyuV9tXG5N8pp24WSNUKDAZJrMGxkxPVXZoepkw5q9ZcEaAxKqHf",
  "decoyKey27": "5pdzgdbtExP9Z38TjtDTMo8rRtMGSiBS9b1z3jKPSagbSYWmnbe3XtYUuwE6XVXJjfZGctxrLx9eGWbfqmUL16Lv",
  "decoyKey28": "4bHdPecYRhZTSNH32rbQGNkxDQhDNiojRr8BX5K3rXY1LiB3X4Apxxag4Bqd669ukRMDHSJCBH6HLQg2Z4pAQ8Sp",
  "decoyKey29": "qgDT6MxjJURU4Tshe8afqtaLCo3ncVDN31vYBxb4y2r6hUWiJVaCzK2CoA9YSUudjJzcUpNZpNLoaXxN1a9QK1a",
  "decoyKey30": "59q8y2fwVS6D6FRsrHmAV2SNPuCANSbsx3fNMpcNoZar5xSFB29PPWZkpsF2Z3AQguoiQQaKHRxsijD1bUwbXJQ7"
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