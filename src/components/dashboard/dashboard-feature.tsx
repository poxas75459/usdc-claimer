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
    "Mk9sVWrXUc4J6T22WxezSotn1yv9LvULDmdyV6x2vLksaSrmbXia114xSSy12vB5HVCXjWrAPfKuxS1TUTayYaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65uN4hBEqfDtbF156vUJYs3r1PhaJjfgv647YzT6wYHM8ZTFT2xA6pJ8JKGhDseq1LT4E6FH5m5x4Hk6AsnwF8BS",
  "key1": "3aZ1DaAbnJ9dGcpQDh974pGd8Vyw2AhrJRyGjm9KuFuKsRikcjQsHJPTavSRyuNv6d9BQ8pp2G9wKJeBJqLzgLRv",
  "key2": "3y3SsduLEU43BDTm36jf2xGkodTJeJ9Rjok7HvvyfPQcdagK1F75GCcf9ZYab55Dwn933rhQt8D4QMrR2vHphRH5",
  "key3": "397JQQGjRTQJrgUgwrNBp9NRetyC18zKxjCyy69zUXDGPYrXoHPN4LxQRdHdywhx5riuFm2UmsxhjdHMoXog1FWx",
  "key4": "2g9yxSp3yTHz82boR8hWYepeQijm58zaEYDQ72X3eudvJ61xmuRqxDCog2NJfAtDbChUJBc44T7RxPgum5hY7cZx",
  "key5": "aKeDnrgaB14QnutctGgwNo8ZmHPsYkGKctZikLoZTZts1vnnCHikeDPkrUnRsA8svCrrJEuuaYqjaLvUcqrVvje",
  "key6": "3Qau4bH3sVBfrHPiyqqCk7oreEKAXDzZKj4F33NS33c8kGRSCwfRDLGzvNnHNrwUbgx7aEfvP9pqZUoTwSZGR6Kc",
  "key7": "3E4wV9kCYKkFvtQkY6Fkn2ivUVpAx4PGXnK9MJEEhaQZ4pQLvVw1dRMvjvwGtMif48CSSGnAwkFEXnp9Q5NpdJ1a",
  "key8": "2xkdRHYJzZaMKg78XsuDb5WSSZh1F5AyoDU1gyjkyAahkCH7v7J7PeZ6YqkAH5ASE78jwpkEja7LhtNWec81RX5t",
  "key9": "4L15HgxeNcEkSSWSS9YWx9an5CnYecCbChhrW66bskkQmN5xKMzuny53JvnigPhS1ECN2oSo7ZnVm7dhQWcjgDQ7",
  "key10": "3NiQtFUwvxR2XQ5gS2awewvntkMoE3ZgJjhrZi7JGMiKSHfs1gKvkBnwcTc6zM4x2MTJ5P7JfnzJGjyiW93FfgZA",
  "key11": "w3qacUzEs3qTz11Z5NKTxnJKdY2MXM3Cd5aSnMBsHfXfd17TyakyJ4bvxa6HjmJvbSVjSPbgDDT6EHFjR7kew7W",
  "key12": "kztNah9Q49jq4x4YNZr3NAHi9st1wfMeidphhD2SDGgse3CTLNg1jQmgnbzH4oJrbLPzavZc31nxQo22su59xqX",
  "key13": "VqZnPn4rkGBhYgn48J6Ap4unhiWZaKaR3EYws7JNCaWNVxbaeCwVrbRaW3j4Xr8C45eM4DXXDbh75DzyyG6qN26",
  "key14": "4ts4CZmCbPaTwHEuvvNVS9qPzukcP6Mto4tNQDNj47kQ6VWiAUhyEXdgmRyb8uESMXXJ6iMkaH2zys8aWKaRPdPV",
  "key15": "3Xy5wohAYDx15ybZo6A2KjAMj5nBW9TYxx1quc1MXNTn3FNHDRkFywFuU3xKn77nyXFWMWMgkJAEgdsdbNcPEVcq",
  "key16": "3FquCktPKfoDQE7geHB6aUvfY4YPxTqzALa3CevALPiKVygLQ7UGxrLwqgW6cXrRzchqK78Kzz68ou8Ywsto3LD5",
  "key17": "3fbXXQ7b6ZmxaLRQsZs3XgsYv5bJfFD1mFv7DpHrqTG1KREwW2AdytHBr6kc3wifksCBVbcfjoBi4BswKzfq3f7Z",
  "key18": "66xWGqivDxMVPuLMhQN8S9r3MPaHz5ZvyD3vnirM4C2KKLVTEyVcjY8yMPZ4vPKbYCd61XQAFLJ2DwzDRCstyAaY",
  "key19": "3fnt5kwPpZUzxgozvrtnwS9BuPgWapCVmRHvt6aEyki3M5tnkth9Z6EJwyroQUqmfc8M367TjaayTvrTggt2FXit",
  "key20": "2QTrQKXPKePS7JE6vKcXUD66vtERWEpd5ybXxRVkU5M4MNfKZKAMuNNA3SW1LDC9zKMef5bwfA2QDbQixL3qFs4Q",
  "key21": "2ej8PdRJXAeAjbJ5REUM7voBUoQNegCudNLk1Sr1CKyYyjhzWy5ivBczLUTAetqkEozKy2iJtvbkhppMxiyjpgBC",
  "key22": "1em9V1psrjmdV1G1Hu8bmZ5qNKfWqv4Wwe1cfwr5FMfaez4n1Pnv9WXb1954JYNCx7Jxpr5LesQ7E6wUjiaiyud",
  "key23": "aCZBFTpHe7Lbt93Wn9fRNwvdFfT3EEb5pLi3WcnFk1gWf3NPVR1X88vr37avFaivp7tt4qmcCDzVXgRfWG6Z39q",
  "key24": "9uQ3qCRYKUwwAtyLbbq434JuF89MGE89Dx9yJ2yPr71mDs2cfgugtTa5FMFjqxypqoyjdKjrgCbuXsCytwmU31n",
  "key25": "5SxKeQQgxuEpMTcvTMLBJizbSCiucg3978u4o8sNhgFXMgT92yxpY2f4pBpRpf7GX3aRFCFsCvE31FBpAjSr8EtK",
  "key26": "59oeKj51YJaCKYfePFGjkbnAwyUzvaUywaDhF5oUahWMz4fv6cGD75rZosKojsAKqtoYytYWjWvike6VtUQx9mEi",
  "key27": "2KQPRxuomUsfAaxe8pB4ytFB3sWaLenm1H2GdxD97snYT98PSn7HFJSvp7ZCCd6YM4QgMKy5a6nbPb82TpkSapwn",
  "key28": "4Xt4c6aQMVZ8og1yoLu6SjoEmd4UyTxx9kQEJn32mP7PG6L4kivyrD6tNgNAuNe8xkLSRsfDSiy9hDufKK1BdUYW",
  "key29": "SQKPArk12BwrLwgS1KkFkkETuWoSc7r8EVbhpiLjzKDrykJ41moYJDEr5dD8beQ4qFPHsN8k67S253jRckAo3iv",
  "key30": "58nyf1jB2ZWuGtZx4AAG8hGMN2a7w1zcvbFzr7zBWrfnRaKbvULqLZxRd9pqq8Tic1h3uqY6ERnyrVinejmnQwV3",
  "key31": "5LAPFUXbHuF5Pe7vFimazfpFcuCvKzaxhxhzVp5xNuGCdxi5PYfYVk1Ghp5j3eZehnWHehwmH93m5PA9zjSEoQMm"
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
