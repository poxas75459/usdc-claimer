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
    "3J25TS9RrWGoAKUu2NgKie9ieBeYAxkuHb9Uzc3Z9rVsXhQD3dWH78SuTAbTWWK8syExhKW4ZePSMN1bbTTdSc4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvTY8mWuHVExUDqfmURNxNVKj8LPuNiMiaAaQGHczFBgjgd3XWy76PB3SvMF8vmnKxDo6k9NCWF3Pj7p7S18SN8",
  "key1": "33ffZtwX8KwEsnYjMsdQLu7676bbzoQuEtG7Bv8Hv8ajdVBrmXSrXeyBDsyJZXq97EzvMXskuDNp4xMCngSdFkwW",
  "key2": "dQ4YpRNRPQNdikUAFuH4Wn8xkmjCcVCMMqjXUFqtS1QpX2SQyAC6ZHJYHcxNj48nPDNv4CkuoYwTd32NXmFuNdQ",
  "key3": "3ksgTc3iqy9KC8aJtgubYtp8c7ytVuvicoyKNUEgzjHvbGvvuBsjLdiKmXiPSbBs19Hgi1rCvy1YGeUp6PvMrVuy",
  "key4": "46eD2VHXPUnsTF7X9F2PLeKmjhnJufRF25dz91cZjQ1uHwUQtj2KeyTW8gYdXUjTboehxrVLBZqSxGRJfWa3cn9y",
  "key5": "4oDr6fmU9Xm5nqC8MvLsVRLDyhAySQygcWnXcfkz9fEpu2WhgHnUGsquQRKzwoiHghEZinRvC1Gh2fva2Mi5Vqgb",
  "key6": "25ksYWXi3raK3S9fr9b1K1MPTNpchY5o3FyXv1M5M5cUgLtj2EzHqzSQVfbfmxGETgY9Cz2GTvxaceGQmoU6x5G3",
  "key7": "4v9rcAJ4vevC2adBiCpiEXDKAPdjGGXcFurmbSfjZd6oD1cFKaQDYRhe3WeFkALEzyNbVBa563q1EES2TwyXDh6k",
  "key8": "3Y5Ny2FcHM5n3H1w9BLLnuL8rgNCLwrtWUeRMvPBsaXs6tyAAgqYUjNXLcrYFxaLxCfDF25ZYWy8kVK75wHwy425",
  "key9": "25HYKhPX8tLa4ZtUo5at9GxxBu7eDBFpiFpPcRZC4i6HVTJt3RyxpyHWb5jxHvseFapTERLY7LVNHx55no78gkLc",
  "key10": "5rvjxpxcAE2C96VYFX79puRqxGvutJgDdfy2z2bPw21WXbZkmM1GgBfPZxa1d8mQ5FiKcA2MMieaqKrNXq66G7xy",
  "key11": "4jrjAC1sL3KgnKnNdtkzHvs16A5sFHsxXXWbmpjxosP6Lbhpup2qMtFqaeA6P2JjQAp9jm17gQwT4uedsbort6EZ",
  "key12": "2jKSBu3fEnADyeEnc9EAAYCn57W2td2yWZ2XUiU9zRFDNjuanHfLccoPr8xPnh5mE2VtK2mXBZgRufT9CyARzvDd",
  "key13": "4goid2pdabo64vv5X3rhqrZA9fLeT9U1WZykKmeg4cG392or5PtFceTxA2PMEEoHm15Co47PgasaY2jRooyXhzbN",
  "key14": "7s1cNeiVFQLXxvqQY4HLPpsL3C7qff8RDhftnn7mTmBSxzUn1TitHoh5m6LrG3s7ho2uL7HSdzEy2RdNdb37kGG",
  "key15": "3bmFGcvziZfqJ7Eii9dZbsa3XMAN5AfUyF5dPcjvunEWbSEyKGvk3KUhYG2nwaHRPohoNY8Tqo7znv7D9Xxte3xX",
  "key16": "5eTe6fTaaQrUC2MirpbBudZAz6NrHyeh7rYQG5d7pLL82sct1JATBauCxcz19VsKas1h2k2KbNXf4oEPXvi7dUX",
  "key17": "3PpDYnSnQmV9ZFVGgjM4KPt7nAChSaCrcTdJbcgPgz4hxS8mrfGzY8rF6J78G8wABAbjcvo1DZFiiWpqcQszZ89f",
  "key18": "Z9jFHKw3AzetUQdb3JwXKg92TWGLJTyrVXcDDzo8xHMwYUsJmydid2qhJk3ZPwRYEXhL5Be9wdGBQtJx2QLvYYw",
  "key19": "3tzYd1vqxx7ERhwv7yxpr7A2Q81kc9k7NrNqSB6SwGYk5Rn5oqCoSxnrjiDS9sDAuMF4bw7FNPGVtaFS4yxE1rNP",
  "key20": "tWaVCMjVgGbvRw162MABmdP4b1zgHrMLbiLhq3t7hUWsewcvGDzSyYiR9KToKfxmqJ4DWoraRigds84Wbw5yyg6",
  "key21": "32D4FNUpvRCtBhZDDodkUVebccuWAtmpTZSPKmeyNKVXkYi1bbY9HboedxmuH5LvyT1WYwZAKwZ2nG4vHcEAhRjL",
  "key22": "25nv8UdRd6LAvyqHeZtm1xKiaSYD5Lb5q73BGjjW9JnXCt4479E7DngrQioxejsefyM8vqhsPKZLDUbbTdXFKH1N",
  "key23": "4zRKL9YyCJ2vmzTFXDxoiz5WD9DmKxoW5Y4KkhDqadth8LwNwegtvsb1m3r3PcqGzL5SLG1nfxHgny8duLm8VTZ5",
  "key24": "yrvat4shaibrYaBprq8at4VZTNGEfEhwM59gWhBhUGUgsTDh8qjCR2HWyjXL3dDzt6EGYvrwLju9bzHTUQgMpKX",
  "key25": "3wQ5csG4JjozpxVEb9VHAPrKv8HBPebtZzBRjxxz9sq8n6hTk3MUsxP76jYvVfz5RTPhr5kFVegduZohwwtUXiZo",
  "key26": "QuzXdG1sap5PksAJokcJQ3sPAvCuzemi2t1KAEwVFGTTKVA4Jy15iY1iSSq1pZoYXgBB71QWTb9H9RZTaANBmnt",
  "key27": "34KUWccZBEJSyLEDo1Mmd7a6UC3ztGM4YzKX9yM5QxdsbCRvn4dPRJe6MK46U8HeBkAkVWNjCK31u8CDELMbrJHt",
  "key28": "5W5van7tTJDwpzg6WFiUKqdfErkSUgWZADJDdNHF8mQum7GEw3cW39zrvSGBLUWxAxpe3k9217CZX7mMZ8uVbPZ",
  "key29": "3YeErKjDX4VusJvh3FyagUwNv2Z2KW8EYoPapWokYmStoGK5N8Sq7UT9pTTVXfitMK21QzSCah6bMqGkmTjXrWfV"
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
