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
    "5PvEpPTVp8EkXZQAmQqNbNVfo7a9yxX7wutvriREqvGAcDXoVHw5nusvMKsNmLGCpqPzRKofu5j5ThPXqzUC7oak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y68QDLYZLbfUFD46dVw4EGCZcDLYGoj6YntDYstsM3JLkX83JWxUvwaxEYAxRYAERgJbuBMacG2bCUJutdZWuVY",
  "key1": "2Z8fWhLko5dXm5U8XT31pHUijtXQ9UoV1FHXnhDKyZebCs4bcuSa9QcJS5oaVFV5uHbcwsdpDvmz5aHYcfmR6MsE",
  "key2": "C2V9gXxycCk2fS6SgDLSS7b927snkuMMGiua73VWHQZfEoFRG3M2FCmdxWCY2Y6nZUAZbjVATkjQg8ZgiZ5pyzP",
  "key3": "MYuLmrtqS67KsAW9XUjptQEkZJc4MwehqePehxyAE7xFByfN76T9UFCzLpd3NAKA7ooeanREd9qpTrKuEqbQyZ8",
  "key4": "rZ94HDKMrwBzioaSuhZ6MRzLTx1vpKzSmW2V5KkZcMGH8DJ88yMpcxcuCZbxMLHpPEAiFpSc2Ao6aoXbZGcdUeQ",
  "key5": "XYfSmHg364ThPh81HCVadGwEncXkePQ6pBWvBbJMkVAygXmj8X6uKj78m9n6jZbWcYEx6cDtgRhHfgnBXqqKepW",
  "key6": "3n8m5f9qtPtwyKCmyRuJjh9SsjBU3KGrPDqfC2AZ4fXstzq9nA1YFDYkNEy8JKTC8W8wS8aZYtv6bYg41fdsW45L",
  "key7": "3Rtzd63ADXndbaoWtD2zavRGg9G5Jwpyx9DgSvPG6f64kX87mHetmrwmJzGYLCVvHi1gDX169nx63HbQRPua8poh",
  "key8": "4brF1B5Rk7oGkgi2xcV3VBwECvjs7izhs3EcjTz8XZf41cZospv5RVHvdUy3kPyj5z5UXFnx86TYs45sMzcizQXH",
  "key9": "3QkGVJLqQUbmbMgEieQgVdu383pCPpSqzejQS4TiYVqs6BBy6ZWcos2dUsLHvwFLgtv7sfrQvtbySsZGu3C2J5mC",
  "key10": "5eFeRtydaRMjBk4DALGeLGeFjM6AoEo95ZK3gkZfmxX5uvp7pnffAb1fwpyh5rjERTEg2EcLo7RnZwhaDe12Vzna",
  "key11": "5LMbHiES1ngcxGuKqaTGHLqod5ip6y16pLX8Fp7uwEAYhZvo8ukyT4wJjhjRBE9T3GJbQk5xtcYETwXF66qtPX8p",
  "key12": "4n5vJDKs6UArtNx8sbELKgwwqBntZQm2eUrgTFXpagV97ykcAxuJ9njiVS7MQJBzZyUfecMWzVBXyBFDJVRgNNBs",
  "key13": "2Fv7nx8doiyDEb7AQj6qU1YDKKbbctqN6Cbfwv4ayGy2DxB9B782ZYagLcvf1ELbCvzzRsSRptfbnsUDkQsyDZSM",
  "key14": "8EegGg5jodAarfbzKCtkSG5ocV3oQSmFgLeryCLPxocBCPspfXoajZ3YtLKTNkidGy8pVw9fGgLATX8c46jfodv",
  "key15": "4C8oxJcU3BkULUQqmjSmEKjzncCE6fnuJA415tJvdhQ1stN3XhQwAVd3FmGLjRUfYUdbzvWkb8af46UxKTBesnnX",
  "key16": "5FjJsLeEB4weajwvcFWV6ZaDwptLNK3R8cmD1CzbuKdL9GFyTDnFbV4Jq2nZt7CdrQKhKvueGjnbfys1FLPfzG7U",
  "key17": "5Q9A97cuHyQmTLNTnNhRtnLmdMHR28khVxp3wgW8GZ3wEwXbWbCd5dgZg8gLraX67uzyU7yR4feyAeQ6he9ebFKn",
  "key18": "5QLwqwWjaBpKKWHtsZmXWUEqAgNRXkX1Gx57YnTnp4BCNRGKtoYCbBjPCEwEG8WPUoE2VWJnsX4UYFJHXxZex8dQ",
  "key19": "3rVonpkmqFRCa71ftH6Qympw66rCXF3Bu72gyWaHJijY84RM6c7wqGStQVV2Zkw3hNJ7Ew3vDqgcMbt3JFU9KP8n",
  "key20": "3Q8F87AG3US3NjKPr69VUeDyS14gV4qtczZdQUCB5bhfux3aX4sDWagAouzh8gJMQDKrGQaJfU5Ub6ttMW71Eni4",
  "key21": "3eAuZ8hXh3UtssjSiaoPNrRnJaeP18fNifv5eUyijeUkw7YgBsTWzXQTstnSUtGEEMp48eLrL5KZifzrQgxzNxPu",
  "key22": "9cYfuXHiL8VgKWqtTm7TkiMTz1c3zg72KQyXBqcZCdtWR2Y3thk75KPo5bxew7hjbFCKzDmrkSPi5bEA36k6Ysd",
  "key23": "5qhg6qCewRjSKvmAvJ6rLGWzp3YE5L1v6Jf3rAfV5a5pigTYo8JLT9kJavYnQMmpX7r7TXdjSFop1vvC8TtREryP",
  "key24": "4ajohRPpgERMnD7CQhvJHEy6jv2FSiiN3fVm7AyeqEKmbqnDrSpsyGjPdkLqwns4NinFfCbtzrMZzeN23XuUSpZa",
  "key25": "4jfg17guUcZRYcZdFJWf1DijMTP1Sg74PdY71d7dVd7gkMriYgLKwQXwLsPKoA2NsJhNtkZ3ThS2mqekpJimGdu8",
  "key26": "3uP3fAoymyrfwBbXP1vdsguLv5KtJ26crjhKRWCCsCdjrqaqdbvRgmWNEdFqCQBN1a6cpazKme8PixociqXsJSKJ",
  "key27": "3gHnn4sb3PSx1v9dALGaZjKWjWT8CKqGsafrmUCKzy7QwMQ3KLaoLJdsSqPkrUkowGsBeQ8cPKa4SZZAYwmg33Md",
  "key28": "3KAGH2K8c3ZPEQdbGLH1LhYrgUHiCq4GgwTAZ5ZDFSE43pf3hEZj9GTgCFX2mYs2imJHbatyBpQHcCWRizDVUfBa",
  "key29": "4KbyArHCyYxSPLskmNGCYd4fcGZAbLozemHfSox7MGTfpNDpi1CE26xivY5r6V4Mg62SgYCtMbaKZBhwVUZAY37S",
  "key30": "458TWzeoayS5fXMvhPx1GtnYpxjqjtWSugXjLPLCMxbsT4dyhLFTD2YXr3edVFU8srbJn8mxfB6AEpWDTUUUZNoq",
  "key31": "5EfZe77AnyNgc2j6BFZ5B7UMoBTue2Ur7CnhDCkExKPCtr3FD8jFiwDthXPzW1PzUomED7ajN7zvrLyG36y3GzwV",
  "key32": "4RDEwNCKh9Wpb4GwLbHyhijC4fj86QYECeu4TJsgvUTPPfZSmEGx3SSTSPFJkd5A2nxtkf7yXKHz9zG4WVVHecrQ",
  "key33": "URMtg3VGTyZjXepvWra3DU4tbHjZdnGuUxMeunq9zE7uyKmjH69FqQ4jxYqV5Dhzg6XSkobUe6tLswDVtu9xbEc"
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
