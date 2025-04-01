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
    "2Khq4H3jAcuDwJZPYLsMNQwFM3or6KeHAbH3AtPt6EukpTiWaAFpBJb3oVM5CTsLUPn6G9ov5u3xETapNNgCsvjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jY5rvhBsrZ9xumVq5BKL7kD4Vvsk3wAQq8iHgfPwv5Vjq19S3num21GNVKzsNdSaivumMUobDRLzYQERYH3SKPs",
  "key1": "2LWxt3ARSSntt6LUgG4DjXc3fQsLL2zL6x73Lbkfh8hnt7h1kPvUqXnH79jqtni8QUZcW7KBsnUZzALjrrRfLH5q",
  "key2": "3RnpJeMpcz78yoC2y93DNiQZJEYzLGU8tAtVWqcgi51WpA4A15ajq5HM1nvBaJa3NjK7Vinvatpevg3nVH6pTgbs",
  "key3": "5sjMgeCeWH8etUs4nujcBcufnQwSiQuoMRe883P4oG4Q5jjXQjmYzN15zYXiuPn8kSCuWSv89dzsPNhYBujJCwP1",
  "key4": "5NJTb3LKFfZ7XSyUn71nx4KGKDeyS3pjWQ34bugpEUbAhRdNdL4HZ7t2eu5VYoMLAoXMm4SvquLyAnMWayENjNrx",
  "key5": "2NQuEyMbHtE9cUikS8KoLJA751Vuj3sfABdyiExPbkT6WtZG8FQ7FwumXZieoCwGaYfq8wQ75nuN3DKQULrNN26B",
  "key6": "3oT4gQR6Fd5vKvsny2RGXQbg9mmeEnVP4QBV6WC3aCoUp2ZvGSFpqocDVwpLchSpmaqbruaMdjF6aUydsLWU9TN8",
  "key7": "3Qc78KoG44ZS8Asdwr7Aw6QoWvoVuq4cUqGJGf8bbVkm2XCxPYWMKZyD9NQ67yyST3iauJ2CoUqUwaDMk4TovoKv",
  "key8": "pEDgPoeCa7dhSxJoWJUs9FSiKUtGjLfqGqdiU87mmSxmkeLJyQFijVaFhJ9xD36w9XP8RqXTuJ7ACEV7KD4SVvx",
  "key9": "Xxk1Gm9cUWFy721Y5WfXmUtpa7YNsYWmxq2Rw7nSiXpqf22U4o14KVF5C2ty3ERDB2YvfBE2N47kk81jS9A9xek",
  "key10": "3ekxu1FxDeubvXv14hUFitdPKK4fSoMKrwt8JjhbT2G5ztjkBTSQBDvraXiZCELTRMFXfZUVkzUebBFR6TqKZrv6",
  "key11": "2rFFJ7ubtzEvVuD1iiuvcm3rp8q28Y3RnPgyeAADfaPBnd5wRtnhTioZn1wgtmADQK7fr375fyCpkp8qPZjPRJiE",
  "key12": "4nXGbpdP5bkoQK637GZqKkEQMQR88iCTKGx2hj3k7s1fX9jiiEB6DzJxbw89AdjPqsP32BTSFhNAMXTBse5qtTBV",
  "key13": "2K2ETRaQdayunxNDRAb5wUx4rzSAxHxscwbnPgPjgvRNJk12ovsQZ1WvAJxAPZBdPY3ynU35mwuyFDCiPeNmoPY4",
  "key14": "2sDhacceRi1rMKfzdMZtWYbSDZwvwatsQqsqhHLPEYGZaGmUwuQAJ7Ne53YMKCKwJNFXovWjoLBq7vzGuZGtt3MK",
  "key15": "iZD21zkBw9Tb9LGNdjuhEFFNuyuGJPfqWpJx6oJNtCZ4XZSuTKuAUQWj5JarfeaFVKEikwcaggkeqzdWMiX1dmE",
  "key16": "4fbCoypSZVuCrnXAdNqneqNzECsaPkxCkhJa7rxTwtg9aPA6zX7jnSpju4iaZk7wnms68nJ4pBitmA72fgaMq3Yu",
  "key17": "22zod7n6A1awXzKpDuMcrZH93sK9Y4Xputj4wRLNVPPzz6nakeUi7Y6ir8dGmnvbNFQV47HppgUa8bqruDNfWZXz",
  "key18": "2v8RLaMXDnFo4vyFxv28QsqrSSVPbUi5v9ebtepK4NJUESG2Fh2yBxQhoNe5MaJ1hg69CBW6rMZRHbSJuG2yddD",
  "key19": "5zQZthW8TdF9Rc8XGWXFsu2hqEfyjETWFydKL3iJEs8ETn6JxdmyvCR3xZ1aDHmWyx6BzWgA54qCT4FDmrp4XSMZ",
  "key20": "4AarjGxciyGph3dXCRhcZh2cnunEwTFarCWiYHUnd22NUQ4vJwndcigGaEXegdQSraaNG6o7zXGeN9K1We15CMYW",
  "key21": "2DZUN33cPk55N6vi5XFt6VkQHPMYhZYcNAPvfvPzDwwm5a8ozKgHeU8jeAKsFpHUf2WHo8ZpWUak5vUbnE5erNoC",
  "key22": "4fzvKMCszu59U3Xt952nFnXYJy2tjqgAFva1QrzBAognCowdEswLcJTyTS9WamcWrcGzRSifwmJbi2tg7YazTvQg",
  "key23": "63zjWtRXcrV4hvAsCqQygeiLwj1d7fVNEH1qVpCtZRgUcKrfwtFAGJrwE8yZ48GH5wRVj77rCd5tUhrkAytRPXYF",
  "key24": "4WwfsHJW7Y9qnkmZQbQ71HVM45gQrJiofZbGuU9q4o8xMMB3ZcsKVs3uSywTjFYNWoENATc4iLwp5veZNjXprPrn",
  "key25": "5JS6cR5ZTM2hLsPMtKaYu3LLtAmjMaxnKz2LmLvDmcRVy7pXmMM4sQugnrupzSd5CgqN9tTNgSnzMUVGpMxk9xaE"
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
