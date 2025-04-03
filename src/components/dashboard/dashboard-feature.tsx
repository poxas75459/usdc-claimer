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
    "2Q54zn3Yr64g5vESZpKnQiPzLnnS8w4A11KKFsqpHcD4KVfkNWab273Pgh8HwF2tMapNvmLvstyhnhNRbtkrGCMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q456BAZ3QKDmRRj8JtRSyJWLXmSC9ncbr3VYbtKTMdbFjWZkEYbNt8ruNDjGdQju7ni94rZApKrQQwLNx3S2Mbz",
  "key1": "3mrAgWH1XQWiejTY2Po15yS3ER5v1YMKYcuSGRyvgpbsXzJrgsCwxmqFR5EKqwhsvfDd2NTE4ugoTvZjJtiHmTia",
  "key2": "5yiESqRxR65YHooE6PtrQDAkuBxs3b6BD45K4qcaybe3LpL9trvL8c6v168PKjhvmSkiuCLHrDMqap8QRejGchRm",
  "key3": "5zdZiCUoX3iV8TL9cDJpZKasGVUkw7PLz8WrJWBCZNh47mxFGfPMjgnGP1ACEYh8tRjfJFg2pT9MM9Nu2qUghUwW",
  "key4": "4p5bGFch3XYgXTd6J7RnXjXqE8BEAXsvkjQW4BPifiRXC3s9uxWXRevwvkurCUZdEZZqZiuu3QLd25H5uYasHWsb",
  "key5": "56ALHJdFfvPoDVqXtrRgsejX8dC3e7EkVrL4EtYurWHb4MYbNnBvjU4kXrvg57kKXhRK9ayDhzJVQcTLLYWhQc7E",
  "key6": "2ar1bntPRniZQrB9WTEawqXfFZS67RRCsZp2dMiFavmAMGWaAjtGccyQKktGE82AHje48n27n3zBXJFcLzSwarKz",
  "key7": "3TAwnkbcRdBEtsXG4swfckRL2aBD4WtgGxPpeXpfjPQLy7bCH5w4AWyKoqFLBKro6uMTdvGxWTQNEvudG8Bg7ACd",
  "key8": "4BAqPAwRk6Tzhf7EU8Dzk6AoKNDGFjN6JGyg95H8n2C87DsepPgZyMNKxMZuLD79WdewpNFbMQpjGJES9D6W2T68",
  "key9": "3zajFxfEMfGnnBTwuG1h8ZjGNqf8qHFFx2gdSRQ8D32qbthFaAMMdmkKv89P9ppdwwXemgQNWgifUFXWptktEEPp",
  "key10": "63biDC1yX9xU5oP12nKx6XC8eMYKLUYfZ1TVQ6zV1SgBA15vhu2XwuptGXJgpkbfDcaGaMBYVWst1yiLaZdE2LU9",
  "key11": "4e7Z5FDgsuYEB1WohEm2adDrgWDjHv3bJwX5wMdCmPDWSdk5ccrRUHWPPecP2Lkzx2sJmJeMEsaWQQ4isvkD6W4k",
  "key12": "aW4UiHwSeri6DwfkHfhVJmkhZFZiB7udiu4GZoSwY2zkdPu9jJT3XfvtBABoAokxUGdjEVcJW8Tb7tXZdimHgqf",
  "key13": "4QkqgNGFPsa6SouPjh8XhK5PaDMYevg6MEMskGz3tTTBh7zUwrkhNXWhVbnWhkFrSDYqYsV1MXtFTLZjcNJ2zRvw",
  "key14": "3Boo95yPqXMAmyz1Arsz9W1saM4tcFe3GMfQKDntoNftHgVMS4iqvoK9NoyKCEbJFBvXZ1KAJgP29n2Vhj2si8N8",
  "key15": "4ESYAyoN3spE7WKc8n6j6hAWq6pFsMCy99Uh1WZhQb9Wuq6pyw1kD4WfRqydD5yGmmu1yfwSQnQiYGYRTAraX4gR",
  "key16": "5qK2hyuS5pbXXURx7CJa7kib3nvNh8e1W4XipgpKVsFd1Wk53vEz8qh8M1kpLG3g9fWRZwPnSSZJMbJdEqC2maCG",
  "key17": "E8TbRUBbsqGSL7Ru42qNPr2kXwQqPpa2BQ5kNkFQkHQGVWtoUDq9PjyLZAYgCUyhNDozX6FJe2VSmUxr51TYbyw",
  "key18": "23xMowaHihse58Rwr3ZQxZ93HcQKxqvWRFVWVQSTrya47RarecA6U5v4R9etMvYhkqALtbjU66buwm57oWiN1DAe",
  "key19": "UVT3hvhhqVt56dZ97SELN23pDGFpCT2AuVQEHnWo2wcqh7DhgQZqMYTMVP9eKAHRNJaNRMe3J4LW9o5QM9ASr9i",
  "key20": "331AvWWiWwTBq7h5ggAsxFaDDXamjTBuHwcFjZJNEo7qwY77quP9fNx8PompFgTxjLxvbtLNPoPXyYsoeJaD6Hgy",
  "key21": "4qV4NyNT63wYUDQAoeENukSpamrefCwWCxeRJRu1DZkxheK6zN4AUAdTcHZK7e6QYUCm7fgxGsW7S824PYFkdVKV",
  "key22": "3cwUiaTXwRHzKViavBW65J1Kfq52VXoFgKyjrXw3hZegdJY9dE2LH2LVtYMYk2eSu3owVZWSNXsmtAqrsWZHD8Ps",
  "key23": "2BGo7CN2KW2HEKnC4xTh1Dz32fLdhYz46GympfPsJU5MY4GYxP8fzkpopMiFRNCqUQ5WeyaxQKGp5jxQQ9aAEvEJ",
  "key24": "3q5qnmF8kP81tNrfdpqBdLFdZkY4zq4inK1498yqT7n67ZA1ZVZjQPYCcwN2aEP1Moi1gXQ5baRi8DjHVZsMxZvs",
  "key25": "4H4BVEYJTHDPRssFime7t9XYiqTR2zzpAdfsjjQbD3s1hK4q88Gkmsa2kVxwbKZNqUYBsTinouFzvaSiTFRTnGg",
  "key26": "3TJS3Mrri1mXdd8yG4vf4xfuGfY1iZURt6VL6FeHciaoX1yzdeJZT4ASbdatAruFhMhXHe1jhmcmtxz65hFxhpRk",
  "key27": "ZEnwAizRbqDA6KhZkqGj3jdgB1HUUWXPRXbJwCsRjzF77vQJ7vgvhM5oPdvadm6nUtjbjc9NF53sPJuV4HQrxWG",
  "key28": "3nyaRmsRpUMj9eELCMye2o3DeoQyDaSpedu2fNG5R5ujVHnhDrPCHYGMS55gK9WBEAUjVf6EswcLnFkAgUJiuTKD",
  "key29": "4GNgfKYyVEfn7yeEd7doixFKeWc6fRac5sq7BHCGmzERMhq19Mb2r2D7co1RtVc1ziCpburLDtsCM1bAKiZcHbq7",
  "key30": "2H2RrHJrcSJm7L9FkRH44ZvQ6S5yKFg36G9HZL59Lh18g7WSr1pXL3HAS5oMGCRqgi6Xsih9qiA6t2n6fkcnkekP",
  "key31": "3wnLg4ihnvfc7MgVKSrDKkZNgxxuqYmvv6QedCzZ5Y54zbCHHv3znriCHBixkwXXdonU3TFTKWmYmwpQ5GvfhaSK"
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
