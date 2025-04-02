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
    "4NdCzaZnwDJddcKXLJo2G4Rt3UwEenY1fTLD5oJHCpzx6H7v6RrpUMguM2rEtScJkkLfWx3HdbUQvjuupNuKcMHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5qnvGzZXny6Js6ivJ56HyztjNMMM8XFJhTpEh5LHGSVhXshUwxDpg33e14bwJFnS6V7MNr4AbfLCkwLFAnaWMr",
  "key1": "5FRG24jRM8JPKRTSX6Y3Z447Aujr6aq3veoZiQrmnw6FDLuFCEvmFumtEzcLWtM6ueNXr26tsDH3PaRfhf2cynar",
  "key2": "54AYYgYnLho3kJuz9U2kXKa8JUGstAY6LHz4CkAdQ9yf6uisdKyBHKebdqZPrPhnGBUfCmFEicxHsysWC99ZGajZ",
  "key3": "3W3rH5FmgbswcaYqbfbBxRZYUMuvLFkmzLW4qspg6W7MQizp8XXHTTKw9vcKkxLriLDVtyKRhXabeVR861U2LYoD",
  "key4": "4Py5BjKXUAyXQqL4XFUhQeHfxFJqYtZTuwzkn15aat7to1dQtwK3q5KfuCK63DyND5SuDNbgrj2cqHNLTnktzpC3",
  "key5": "4QywEVFx6yD6yhzGyvE7YAQ67i6cfoBaWvAoWji37HcCYtgKCN5aTeLqS4EMNZR2eRmmWDH1CocGPr75ysWeRZUm",
  "key6": "25fM1u5LXLdv8Tm1oei4c3vMfFtepPiCgDGyLQnai6NeN5Vbt8bXAnbQtvK2RUXCgjDoTeC41pWuKCVTRNpszfHo",
  "key7": "4uoMna1GEogm9RGRRBmuNciqKcPG6x9HEzNo6bzXwkvRHTbuDgwW1uGkFW6gdTnW4REWZE3hYmczvMnJtXPusGWK",
  "key8": "D7dh2NF5K4NMPyCCAouHUNUfuCEJJywjHZcE5va5ry5mAg2mn6NVoxmaeLpEgW11ShE3SgaqxdjgmL5k52ZoEFJ",
  "key9": "2uKWzwfUdEuKTjpBDFmtoErVEZuh6sBuFCegmx36iZnXNtxYXaD4X67GU2w4kmqrqib5idPZ4uPHYD2KeSaHmWGP",
  "key10": "3kSgX9W9N4eCW4eSj8rDUGkF6zvj3nc5f2LFgoPB6rcHyP4Xwu7zgCtfjtwNTf2LpxpJDDrcWyjqc7ke6jtGGeSg",
  "key11": "NwneB88M6oX4s9yfwSqujwP168u8pcJeA7ZfB2dwCMJJ7R8pHexPx7eRWshRUv66cgf3XkzXboxLAEhuQ9rAJHU",
  "key12": "cTHsBf5iphx7av2cJZH6WgD7CrLwSe2jUhh3Q4WJCMVDvS7wP5JLxXwob4jzrWKikzUjfv5MV9ZL6VQpZma7xQu",
  "key13": "5zg2P91poTz5v4BY9U38G5EURHhfCr634hfCKVhZcf1p4YTXxqxTBs3jVZRuK9C9yDBYPgfHecswWdpv1DGh8wBA",
  "key14": "eVGC3ASL9D8NJdymkj6ChrwVMdaxzq1t6rJgZv4esc39HoSxeALKpSx3ZqgK1MSW2ZqYqmRQPFLpKdKsNqKfxt6",
  "key15": "oqLDrpy5UFmb3h6n4Gv5wq6SxxLvsBW4vcT91jWqXVFFRzahRJHAGctHQMpcWL8Y5FD17iVQMhVcT2Xdnn8WACp",
  "key16": "4Yf3aCZ43gMV7uGA1iudmCx5b82xVjG8oiQiuL6GR2EkHaPVHxj4MAWCKhPZ9r3XgxHza4nDC2kSmrLfQfNKXTzk",
  "key17": "2VW7AX2rz4izY2Fxh43Tr6pgp46oyNnrJZro1NqSLLjRvwUu2HJKXdX8Q9AtobfiCLk2zPekgNTKfMwXemj2qbvD",
  "key18": "4bkoCNVF8C3w3hMt9vFgntKDY5ymbGsvENqx8gN3hiPQKNLT1Yt2TVkYkHBqvyr118Kf1uXj6j2f9RBLHeYxh1wY",
  "key19": "4p4jgk2x54Mp26DjLytGzxam47E4aEPHU9YwWqjpMgNf6ndCTdAz89MWMgzc8uzkviGmnZHk76BwvSzCo5ZekYPA",
  "key20": "59dpGrR8NJQpw8i3bmghZaBwHr2NMdqPGrZEB1nChrs99Eo3BhKy8qLbuv6ZwomL4AmAmZ8W97VQN8wGgEsPXMvN",
  "key21": "w4RFzkgMnmmbozqj2iDthnYgdQA6rVNmy3H6zvXbGPB2qZcuKTu1S41L7oQe2NqbiH58MMSbpPyqmga7QcUYQWw",
  "key22": "3QbK9XqBy7XwV6wzcj8519shGugdofo3FspWeVAPsrUa1BVtUuZjycywEB5u9Ff4uod4QbShwnPTW8erC5Y2o1gq",
  "key23": "4yVNeJZ9dn9uetosWFoGQCeA9tXsDz8K7mZ2cyG3Jx5Ym9YMRCnDHMzKqM7CC87HHiLFac3mXK9NxVU2crUBhvTX",
  "key24": "2iAPCur1H58n6SJCV6dsAisbS5Ax5ceTKwY5e33ht154nmBbKvPH4p6S5LommJy3UgaqRagaHJSzgG6RdvD63J7S",
  "key25": "3Zu2F3dRtuVgvMZjaoW4xgEtHgtYAibR5UwREx3dkUHPxRV7PfvUvWHn1Ng8b1vDnSmsGgcpvFxfMxgVekrhj1NA",
  "key26": "423A9eoMgGG7vveRxtMqX3CgWDsLWn1RurJxapEeEWpz9Hnbph8scvAcBrVPJEznUJgu8CXHJ5V3dhwzMVvHH9yS"
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
