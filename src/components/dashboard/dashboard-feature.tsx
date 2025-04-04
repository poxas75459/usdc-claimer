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
    "4gyQHZLU5orCyVtcdDLUKmaV2JHUv7LSjbHyidNWKbJeUqg4ZvY8GJt8LKcsi5DWvESSgbjL5FSV17pzuoqg8UCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yjoyW5BWrsumQiR8MVc8u6jzWg7rvrvrxPtE1nJVtX1JDr6fqysyaFdjNXYSaLPptF9JCU6Z6LPZR2PTpsxgurr",
  "key1": "5Li3GDNtvCoKwS7vRcPb1KcVbKwmpUC1aGvPQ4BcEhmHTKWgUcUAjTmjoPw67GtgesRdsFS5TUGY4UzyYVYyj1bR",
  "key2": "yAG6AKHfiScaMtbPyu2wcSQsJRzkxJQ8r5TWEQ3ssGEcsHLh5FK2kKdyyyoCMXLWdKWSY9ZUXmCtQDX1LApu1Zo",
  "key3": "4akzTpoN7qdX2PBAEBJ78jL8tBs8za5yQrRcuTuVuvbceTxPg16mUib2BSfBaWZu1Sc5LM8Q3ktibLNJZSAm6BYp",
  "key4": "3KYX3NHGcHdqExXnEhy6MywCJHGeqh8NHPs19LuwBBocVVZ1W9nzYRzAbxGhRrkft5m31UC2fXFibCWh3p3U8My4",
  "key5": "3kDWhyR4EJsJ6aaTKTT2LoM8Z21ZnfbTN8JZcnHEmpEjgj6f69h7RaKGJWUcA3FckmzsQUU764AM2DtZiDk8iJ6a",
  "key6": "VKGpNyynRgMzN3Li2C6hhagScAj6d7nyqtoGoy4ZSEX3VUDHY4nAPwZaAaqGHgXu6WFssJj4PXSJbYq3wHtSXee",
  "key7": "HNvQch423W89hpgVSzhwbtxHY9Rpmd6zxNXhCRzMqKMoJgfHgJcnrWqyGiXYbtcaE3C8xjHo49GvhNDtxjb6dhs",
  "key8": "3CV5gR8QSyjzS9RTConbvq2t4uVMnscWdwADZ3yUBwHTpnor2zWpJRxrzFoWHbpgdLo4xe4t7nVjSubQc4ZhEzJP",
  "key9": "5G6d1Jk2f2HtBc9nLhkTZUX6oNfgXtXYeGRTXfS6quPnyfAZ6ZkfQ8hUev9jvpKKHBw9fgDxW9Q7jWejC1YBVoa8",
  "key10": "Cqkg9RCCrjXVmGYcVd2jbfP3efxb6HZoJfs9JmRejbZUZer1rkxLcjriD3qHt3rLkcfwDLsE3yZ9b8uNX3YWMy3",
  "key11": "4fuZaNsY6UtGArRpbotTfXKWj3Lwcpuy48qS253uLhJhSAbrgvZrAT41TjALJkXYLYMqHQhHXLheZjqTnAx6nNRQ",
  "key12": "5GSNQBzje6nQaM6XSYJay4CQiXeoD4nQ2N9oAuJin3GoRfTkfACYAiCpAxr8nu9A9mhXDVhRY9Hw66BBoRW6HRrc",
  "key13": "4xGMCFcbmAL2b8z6yPMjFKptpJJvVtaH8vxPJYkMK5xmuKw9vEjgoRdWwRy5mqx9HAxYNzmCR5EmFo89ZC4JM2Qt",
  "key14": "3RHijPuPoutwaYrtuKF5sUahC1uYmu13GJyK8UNEPgXepHZeLX3Cn7S5E75iYii34crgF6NPF2QWQ7AMuCQmEbYA",
  "key15": "5LVscLNtJPcrJeuZqS32wgbGsKbexZPPP3p443tMSqbqP4pn6VDcMr9DkrcvDn7dzLpUUfJLxLq25He9JCsZzTZf",
  "key16": "2EpxPM4op1QJTLt6EaDMPZxBH3BCN6mDgqEdzkK3XLy24JFPUzeMLXkbxMyyRCkBntrEKV2DU9vStkJvHXGHbFxv",
  "key17": "3796afMEmz7TWVPzAmo9zXod758TQiGkAgCrwvBvBsSi2oNSf5ij6Cn1h4Tmj66WzZoz1CK33mkqnpQ8JBzec6La",
  "key18": "4y2zMe8wNmfsqwNxW8AgFm2kk34g1Lm9pN814kLcHUQVi5LbxA88shE1sL6h1xYiCGYQvhhEDi9XRqcGiWbJbwic",
  "key19": "5NNikaec5d1xFzQyRgxxB74QUtEhyUFYyrRwUEtpBpNiEW9PSGK4549QbSi2bP1JH4KAMKjNHfnS2b3Znc8p4W3q",
  "key20": "282V8T7h1WbA1uZhDPnx61XD73G1CqXsAyjGMS56To3uFJVirPgE9iNkpPHDLtx64RQ1YgjoEKafAgEAsp6KnMmH",
  "key21": "2cRj5QX75ZzHUEwH4AEwbKJX13oKJj7yyJRSqdibc5Qy7Gawn8xDBnHBMSsubadZQ2yHcRJ8ysBmVUJz7HhbNgV7",
  "key22": "3tzEMivH8Bhkfbs3wS11XjsTu1tjvTz3f4owR7A2ZKRPqKDFh4dXAGhiEaoPMWmZAngXLhwkneD4x5MGLECUy2P4",
  "key23": "4zVoa9P2pF2cTePKz7NER9zfVXuacfAyGtUxonEy31ra8XeiSRVTtdpT4nX1UqmU6tNTG2hsy3Lr5JcZTBvsGuim",
  "key24": "4bSVe1YMFUPKSw4zKYfywZFdVzqaLkJAMucoCnYRSqRDDXvNefjokc1J4towDctA9dTKQvggydPnNYyhJppfVyrc",
  "key25": "3TGyEKkZs6eaagQkdTf4eZy39zVZrf7fi8Pei6wpbmWeUrE9DNYdtUu4TbE6HjQ1ph9fUkK5Qhc94ebTQhcEBzLg",
  "key26": "2Z3Ws9926NvgLsvbWyvZU52N7Kxy9YVo7gvLWMn8uUK4C1W4ZrGMBb7skjwRZzRBL5ZYfxLBrqop5EdyiMd3uv9H",
  "key27": "fr8PuwrstKYDcBnf5cs8ekAq4Tqnyr9q9BbTK8Rgwyja4giXrQNx9suitb16nBvhyJ7Y4Atev88PBpt8qth1GW6",
  "key28": "f5hkAu1TxHpBUsrLRJQc2d5vmPhn5DkzCSYf7MKMPwAiapcqeDu2V9j2dd23fqJVwMvd7Nw2a2tgABRHLHpVRdf",
  "key29": "3SpgWCPdYZvn8FPhd6j6AxFxHhLw19ySjYh5vzfWvTmaDEkaNcU6YC8mSw3mAqztb6XYFLbF5ChPDxKSPhqg5Z5T",
  "key30": "QRbvRZn2oRpLi2ho1SvKAo9GyKMWm7rUNLcppZuXsRDxy6YRHnDGftNGQeXQv2gTaVYLK9jx4MstqvDruAq2Pez",
  "key31": "5xmvxzNws5MK95QY7fU64XF1bXuPq9CoDu9EVzUPnMJHiwCr5DEzz6gJKZks7XvLtaCtsEr37DwHDcTUuSRfMLpG"
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
