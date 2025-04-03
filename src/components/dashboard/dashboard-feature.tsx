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
    "4iKGEd1AFhFtfMbPTHLmvkqRV35WyZzEHrPmDKNzPTHgeQfaeuWgxYsgHt7FXWUZfdUiHaRrWtZx3xdN9c1SDWEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TgWxreRvZvdqHvAbkDMtKwXKTodHGmZgPNnmLs8WzNGmVK5ejA2Hdm8W8EPH6ZQxheSEt2t8Yx6doHxkB1BcpT",
  "key1": "2gQTG6cP5qM5ccGz4utBnPdQaWpAJewijFEgjYssp1dTWYg8ht9NBKkQU3zucNEHcxXqcmWQoWgkH1cYSRhBbepF",
  "key2": "4rYt31YjspJLJG1QarWkz13ZVs7Xkw6QWS1teixKGcDNrNuZyfZgV2RzLhBUUeRdvVJikVyEDTn5r24bqviMuK1F",
  "key3": "28gaPPAu5K51DgVTPcD3QfBHd1hdZDkdo7sF1iZSjo8gpuas9cdJsDp8is1uyRKR4Y5184EJapCPV8HCJ96by5P7",
  "key4": "4m39jggL1ttrxF7z3Yushkx1C2jdASn9nXRAN8xCWWy8TCVX15YCVsMxeuTdzL6CAYrEvPionDJ9hEFBbVcQnBbG",
  "key5": "Xrm2JNuUpBoREFrYBFykqkekytVLQV5rcngsQ8xPuV2kynLQ1UoHFmQph4LL8K64tsPaUoo5UWpBPFGGbHMNphQ",
  "key6": "5fuaaVo2arGxqVJmK4YULAredWb23d8qVs3WAoNmXELMr2jKQcDB98adrVZdn6FYFaifuLPk1B29HDxdXkHPBb7C",
  "key7": "2szwBrWnsbY53u5ZM6pJYiQPDRBhgbqZzc35Bei8yk75e67jtKEqmoGJtrmaze4J5JPLN6TQZDecoTGQJUWUjwfV",
  "key8": "5tVhtG3hzPWT1afb9Agr6snqt15ncqVSZkWVTRKQCyad8HZAJJtCsaosUChGWkv4HGXJQd5HzpA1QuN4jTQEGJeS",
  "key9": "5LBgTN8KwaJHoR4jUWxcChLf24LzonRsaWeBEtiMmb9b1NZvj5n8Re9yfPLAJVTQcGqMrG6uFgwcGNHyhgQ5kDkk",
  "key10": "3nzM8oKJy7dd99xVB3HgXNoJFdzTcHAUjCTKCjpbmXDePSRMzcQEgmDE7KixrJVCLPpr2ovjyH2BKfQNdxcCEP5U",
  "key11": "CkDrUjWatmFgDVaYY59jmvJ8bPXv3Phxg22iNWz35kS2TNx72kzJj58mdS3BRYS9bERTwbiXFTvsyXQZn42ebqm",
  "key12": "5Jt3GjWRGdEkrtyJYgrJKiJicQdqrCNeP7XTwUBEEr9owMQQBrSg1qZiCFSsAhNG1AwxEJ5YTDSQDTrvpzajJBNz",
  "key13": "XjDuCBtXk8x91of2LevRvmrUvUTsFUtkm7PvwZXrco4rfSw86y32o1QqvKQT62HKkfWv48CEiLDiGkXmhwJxBmn",
  "key14": "jBqCUesQ1kHNFxYB9me6da6hRtgTFYD8KFhqawNVnzuyaTDarErEDy7hekJEog2zLFeNGTFisTHc8DC3DNhNrr5",
  "key15": "2wGbTAEKipypBekUvPebDsgbFGma39n76r9DtxR6T7qKifpxgqVsZd9UR6MGD8F15gXxNFSrR95te7L6t58aSyV1",
  "key16": "35UVycUFH8Q6ogthUFRsWZ2VpHnL8eMHHzAGPg3ZXQ8BW7R5WppcwFAVk39HkU5a5eJJp1xJeDtFzHT8Qzab7SVf",
  "key17": "5LvvQMHDQbM71Aow6z5dycKwuZCgk7UKxhDBx39xNK4eRuWR29HtfbmYD7fir3nb55Ad8qYV7mJGrxDVDW6wGUVD",
  "key18": "2LS63YRBzdNBWSLzVYbhGZtd98AFurBZGpjQeGJMZDhLrLaMoi7FfTkUTsFdVssq6twe1ZtoV1EBdbGB3gGmvggn",
  "key19": "2MWBGLKvzytmCmb8r5aU35aVuGw5cks2g6Wrv3GgECpj7bHoZ9uXoZt6uqAUKJz64vSc9MvCWjNHpKRRRwgmwKbQ",
  "key20": "4GUCrHSvg83ohq4NBxD2fNnDjs9RHwfB2FcrnfWyNQMGEak5tjyRhWYdX7tHGePkui64zZh2XWZ8kcc7Sym7vgrV",
  "key21": "3nv48Vos33KVhYam1QiYWcBN6vgNdM6HHUyryErSiHWAmaBqADAaXRenZR59C63LJjTKyjtmryL4odhJuDbcWxAU",
  "key22": "5o9a1euvGrKvoCYJSSyBa9sQrQAhpbFnFyNtfHAPkWDta8rXNqxiR4MkJ2iFg3mnbZpKTh2cnsmxAZiVVDkYeBio",
  "key23": "MwVJFhtBEGC4a6igZ8YrKqDUjAcgMWn4BYsnLHKihcA9fjxPKPY8vZ4uDVpHuRsPEFxshRNq5GHLKAG2XKaKarc",
  "key24": "5ygwCLsqRoonECmwWPYE7Qp5zN5MMvv4iwos2KEPw31wjsPs8feD926G4UuEgtuJQs63Pr5fgVuUmAQZigxBsskm",
  "key25": "2sKM52Mjy3LhxhPGVxG1fi6ykiBZedsmadiKBNwXuVcJzGpou16y57JGezPeeVF23WEB6W6Y31ci8LFbmQefCnFg",
  "key26": "2jzqU3FdupuvB5j5E2KRiVAks5RWEF1PtajwZxudKp2Fwf8XaDCYVPmdHL5dyxmrM8fwBAaogUDNUTYRxbzbxQmQ",
  "key27": "kyJjYGSbQw9QZBXifP7bKRRwQL25FtLZcYynqMKj74z33DANVN1MHWKLRQimBWGNmDGTWEoYUaMkjuTY7YhrM5c",
  "key28": "34NKtfr1r3HxZjhquTyzzWiKQEe31L22uD7vsCe3VkVjjSp9ZFtwyxz6FkufwUcmSvC4mc5ujmhPMsoVyBbZtxzY",
  "key29": "3NxyMriHnMJDYVb8sPMtdEfvAoZu4K4DyNip76wgjvh7xyfPcQKe49wJRiP6h2s55dBGhvLoHu6gdZAGZz1j3PJ3",
  "key30": "3auXczjaNhM71NdeqbSRfMdQKGvex7jJsSeoUY59Kj5ZU8exUDoPTDTzwNaiFt8DQRGphkBMv9Ux3WgFkMqdB5VR",
  "key31": "4s1UgF6Ppj73J1zZziVqszzwuRZjJCzBg2x9WQUa28CAPx1FwLG5sC5mC4ZzbRHy779tv7R8UgXrRMQAJFNDYta8",
  "key32": "5k6TUsHnHfuhj6rjDLLde6brDTPM8tpe3LDbWu3wyNuG84F9YPucjYuXCY8r4ZWfctUww6RcD2ezVnR738KTeWgJ"
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
