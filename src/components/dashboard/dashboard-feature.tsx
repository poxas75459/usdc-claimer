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
    "3sNe73vW87f7XHRCbAAFA86idnAiy1tR7X5eG2r3AkMuss8iN6R6j1KNPWBHvXRmaaN6FPbzAVMYmk2zV37ztrUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2pgGYJ77Yu9CSB3gEjgcM9Lg2Ha3eLxV6zf7xKiE7E3LsMkH5ieEGD8CVm4yFaaCHUSbCPpXnnPa7AvZjRdWA9",
  "key1": "6m12DD6Zi3hpG2kU8D2ZFhhc3Jwh3owHMHKtLArJYVs5KnMbY3iHSsf1S3EEYGoK8Ts2Z36Hh3oop1A4hJ61TVw",
  "key2": "2zT4trjjc8R9vfCVAho9a6oY7Ggfd2bYftiVxCQiqecgPHcH7KCgbtUa6EuP5bF3wSuDSxHPiiUuBgVfT7SmqDya",
  "key3": "5gAn37izmPRFGDYkNHxB2SBUj9VxkAh7W7aUg9oPJJJnTCWFQB45x7dYgZEr5tF4SkhEejDZh92FGe3pkxDL8StQ",
  "key4": "2zM4boSpNkMpnB4PGtWuHTTRZH9MKKVF6sXZ3kRXTZdVQXm7TEF2B1z83HVkkekAgqpHrYxwnA37UnHuJSvW7zXC",
  "key5": "2N7N9RZuzyPSs3espyDE5PUCKGPtC55mpJBoCdNqrUKFDK8szx4hCgjSmd1XUZJCFKJdhdqAzzyk4ChpmDZDZH4z",
  "key6": "3CyCqYx26anNiFvwKGXXpcFA8dSVX99Tvd1vheLQ4Q9VMJBWhDE1wR4FmFAuqmwFMXFtqk76aMnNiugsCUoYYn2n",
  "key7": "5U42vGRkthvnUsbX257xcpVZNZFGZzovEXabtH6hTz17s6vX81c8o37CZFfbJpwDK67VEwnEKvrZMAZpRErtCVGu",
  "key8": "4KTcu9AeVMed6G8Gu9mND7veSZNKAQjVzjnDwYjF7W2g7XR32pnqNok81UCuNWixEiZA93H77NzbnUqxSEiXN5dj",
  "key9": "VJDF8kRq8RNwkw2VeRMpCqAQxcBm2tdo4Q2X4bcDwfZ3iY8wEtU2bG9WqownAsBVux7bQQ3HQLM7mojjedZEFpa",
  "key10": "zYptHhJ8n6pa4vXYGJwDYbCHe1TZemG3vZsFLEeSm4RX6P3WtDgmT6DpGRtN17DX4RafPNNFvXv8NPvcrP5e6SU",
  "key11": "3c5c7UAfDx8FX6VhzvWS8cSvD4XVbBafhvg7M6d7bQFM3aCaeLsMnJQ1ApY6mdtgpFsK1hSPiAp3fBHNX1EhSdFG",
  "key12": "HJm2Q73nokDxhxEN1HgudedH3yE9GqUV7uoSg476yqDVd86ThW51DgKfGxfDAy5k7K5aUPmGA1uWti427eMb77X",
  "key13": "3qjCenGqEvSBdNnH9GSsjBZE4dxp9g53wacDKLgoEnApMqvhRiQ3tUV8CnzJ7Q1qFYgRLQkQCU8agjxzjYo74Sb2",
  "key14": "4c7XsDoogZRMbgjAs9CR3jLKwmfev9YZDLFxea1iuYRZAHmQZZ4rr87casGjfNrGBCC5CD4C2wYdgiRWgi2kQKV4",
  "key15": "wg7hpbAFavRZ9SiQtyTU9BWwh6NPsjdMVWLKkoRojUgdDnKAoAxNYqKJyaAXqAzpJ5ZVT6wgbQ1KFBXWobxMnGZ",
  "key16": "2LdiDdvKrNpSHXT3MdVd7X9YriaPTuo6RxypvkdNC7BbmvBUQpNgqEwAm3qtPKU2Wp9iDzoNyQZxZeurCUjn6rUJ",
  "key17": "11FtdSvcS7HgVzd4UAuGcVUnKv7f9uQwuqmRhdnRGSwjCG2U3E1TkwQ1hYV1tEBoA9ZGS6kJHaGpApyR4nRDKfE",
  "key18": "eZqvqoHUyevPo9jywhCkXibg7fuv9rPLCbiLpmrGwFWwmMH4aTg1UJc5R7esQ1hcA1NnqsAfd9iPnN4x7PMjRWD",
  "key19": "3xsFWngvsQDp1gfkqtaHfMt4HdZHf9eKT43zEfxZpjA6EB28JaXN6oSouY3FXdZb2MMkKLNNkhozfga7QukorCfY",
  "key20": "5PwWUC34ytnfJvGWbpVAsGkHQ3fdGecBseNXphDLPXx1y2zeYHacK6Un3HvDqnBoEHQAUpjCbdt51QNm1nEhAawj",
  "key21": "3WzoR3TRbTDuWz7FLVo95sexe5JdVezVbgxyd8zcxpQVGnvtFwGWYoQ5dB2ukhruTd6akKBG3jC8553K4LBHiuc2",
  "key22": "44s5qrRhxSwpYww9ZjCZVtVbbhbGbUoK84My5JXP8PVruGUz2qFryfFGaf2bbZPdQshwCQnTVWsiV5fN9XiFANxu",
  "key23": "4UVd6AFm8JPPtJw9ynY2s4ZbtTSw3AgRMhuHe4N7UvH8YLSKyFX5gCmEMJWoH737Rt1xjHP5xt8JjGb5S2MMNLEY",
  "key24": "64J1w4YJC14qprCbGkALmTYj2pYxVMtr1LNCSxHz2y27tm53jngL2XNMaBzs7e7fVQpxcezGSVX9poZKoC8AMKBy"
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
