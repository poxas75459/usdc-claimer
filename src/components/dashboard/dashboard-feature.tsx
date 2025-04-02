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
    "eCgQoWYYmbDR2Q7ahZGrzwAfVZk7SWMS7r6Cr1YAk1Nu5JG3NjShgLUdiRhnBLvJhBgMLA8eKQ6hSTb3N6wpXK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLfZqpkkvcYZZeYDyP5DfbTJ6WTvq26qRKyqxQwWp5ni61R3kbihN6qTNz9AhNvasuVFzw65ghBKsHtUS9a2yYD",
  "key1": "54J7MXKtnUdbGSsztTPKWbX9GT5LxaRMJZkYwosQaAEWxqnjYGCbd2BMu5bvruMtXErcxvyZki2UiK8uQQZtDqbu",
  "key2": "3jBvHERDfxv6TH5VS6gp8LGfQuS57s45SuB2CkfnPsKxWtnh2SZ89eRCmvem547T82cLasyqe4Ks8T8qe4wAUk3W",
  "key3": "HhxKrGnuWKrnmbPxZYzQz9A6WsWVHhQA2fqv5vUvwPFeKnGWr1GsVcXsU123owqNQRFV65VEtvNLLTZhPGLfrSa",
  "key4": "4Wdbrn7jSmwM9XQmxWkGjGLPUb6KFDHXSua6iEgGUkx1PVh2992Y8Ar7XMU9tjwjZ99NN79UNYpo8pkJhUhgi9mf",
  "key5": "AK3kkQLsJKzP9RzkqNWcmWPy5aMbWshxaGEE1CKVkRCaBw7ciPynBqbjsVJ7htTonPBDhtTNPJ72CoC9C2HVsa3",
  "key6": "29NAiG6kRChQPFUuy6FPpVGx9Eta59BdMKn4RSvvDeVCditQciNf69i8GePZG3phWmv417vA2VmBWxjKsyLvx8L3",
  "key7": "447JHmKXEopSjtFKQjHBQvnS65rrPjr1FWAwiB8dJ7vXi3BsFxgya9e7D5jpKd2C9cHpJEwzAf8epFhNkxbjA3co",
  "key8": "wBwDPx6XBH529B5nd7ZGShGHQWvPfqFVYtyqv4MN1z1UK98dJrDdwaKxt7iwNa5JRCbHdvbREBj9we5QMD2qKEw",
  "key9": "2gkMhm5JFrtt7UcvDeVcGLgSxWU6WAypiTnU99KKwyLWe6dXErgTwtHDvTYitQAVDh3nYW5x2R5aQwv1xy752axX",
  "key10": "4UUsqHUT1NUhJ4zZvxw2cvBuKSi1dKzFQ6WfU56SVUdjorpgGT92TyWR8kJjR5RSoCnXvKMyU1rmVFdUPnMvSqvw",
  "key11": "26yDTAjuQzixgyFyTQRnKJ1u9ET7k1mmSrgWSpqEUUrTPZcN8LUnJygm3RzHcuwB9UXqMMdUBYVVECqZKJmwYa1T",
  "key12": "rjc44wfTfz28wDhx6FTHLTdXdhZFR8nYFc2JX6k3qDfLmDJof2Jt23HY8BbZ9pTG59RSHSp3TYyj8Aqdv9xha8a",
  "key13": "4xHeuYK7BZ1SEKbgyVVQpiZmNuSbnLM5zMBt3bBgRfb6deu9awR7hWbSno9T66zqWq2VgiLr5sMNx9Dbvk74zjED",
  "key14": "G5jKanNZvw8iY5s5RMKQh5CTVEPHuDmNCEBPEZHvRNrw7vBnzJjqnyMUiYtqwtdns8HxhPoDaSzrJcsjugyJG4P",
  "key15": "2N5YK1hRhyi7WrXsGRCYwCBzn1wxtEUtRRPE8p6aZ5EV1QoKJ6SZf5KYVXLw4Bpvxm4GYWBwfLXTxyCTT85ygBRT",
  "key16": "5Hu3NJW51UuT5XHw6FQ8nVKqpFA6aRHzGom36C4WgutzE7B4HCW9RRvBdEpCN2wta6c9CPyVrVbRmKkFVKGmWJe9",
  "key17": "5rWZcFG82WroyDvqHLnL7oBcqUzuv6e3WLKQ8HvCLTD4YvWF5nyQ8guaXnNxVQ5R5uocXoe3mydGBRdPGMBm3baV",
  "key18": "36RKbe76ro2xt7BXcHM1EQH9drdW68TtHr2fVB2XkfWeVtjtDNQoCkVPkXGEdHWEaYWZo1APuV1ihMieMUgCrZCs",
  "key19": "52aY3ZJdVDSKrehmHBxpTEna5Czsnd1smtyCWuVQCgFy4KQnNYcbFF7Mxd7srmxMCosKHpZnr16D7SEsZmLps84R",
  "key20": "2UGcWLsx9TaoJRZEv5EdP7dKwSW8STuoFPk4cPx3FDbbJCJyN78swqsDwaZRGdZBga4syB2pwZmKJamY1tXB8g6y",
  "key21": "5t3U2fqaA4bjaArHyy5FAeNq96kwvEpK6JFHWu3rBUWwWqDpise85QphaLizxx8ofVvQEKP7ikHeUpLH69hfrrJj",
  "key22": "34Z9SoXNPcxBqb32z3TR8XRdxETjJtGTS4GHrCGvKjm2MYx4zCzbChZwqT3MdbgHzW77acwUXpqRpGUA3wL5Kutw",
  "key23": "3tYyEWByTQqrcdcsbzK7Neooz2tEteTdrZWdyaQpoCd5DnXGxmgMtSUePxYTzQdzkB4H4JnWn7n1Hx9f2nXhgDYc",
  "key24": "3ymbE9yWsAqNY5HT4WmHpfjQ3tHnZrcA49x9C2qF4fGfLW8DNU2fKN33x45wLwLvjRN37KepJCsqgxDo6EXeZHhv",
  "key25": "5TSCN8GCyPcA7z2SLnGXURESoHvpcDxNi2Rm3jfUKcwXRZVq5BKga4E2ZL93kFAznY1jw3Sw66cv59Ttw6w5umY3",
  "key26": "3RX5UgB8r2Wp53c1VhYGYdFWs6pHRb7AhAYdNxBth8NhLof1cCYjVGS6ThCxN4PTbJfv541qcdVDM6sBMogpXa2w",
  "key27": "5CqWoo3EiyTxPcBttb6ZConJXb9EHUCUFYxM3n8TL5cjbfJjyeEXLBbFyw5zMKTy32RRA7x3L4rUScZPCxuohUHS"
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
