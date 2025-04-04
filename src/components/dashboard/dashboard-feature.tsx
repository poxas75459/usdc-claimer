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
    "vRvgxbkNM4ms1dzZMiFqXVYp7zCM33T6mpyFVyRYqcaKqu1nRfaMeyLgvuwhEAvcSeCYS5BvESuXP9QXNVZ2KWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7AsMhdoQmZNeDmjKe8f83a3n1GXpzbttg2uDiyGc2wxWHLvE1bCTiR69gUjXzWWNpMPvdniBgGgLHfzT7vHmNv",
  "key1": "2xnB911KhWhSknvniVvCtjMKXNm2ftQZaruuChhASWpMnGHmE7ik7ieX2CfrpJ1YGPuEEfDHGvDejkDUuuqk7bTz",
  "key2": "sbdsyMim6hWMxWUfSHJU3CZwXWMLkybmF9AwDE9iFpz2MUuqmh57noshDKD1sk34S9VvM8aKTstT69iP2gC6cQp",
  "key3": "5xhGLmQpiK1ATxqczERAAH4HQVPUq5Gn91nw1fL5bvyrtBbT4X7iyTf7XGuYXkH2ZxTfxrtRG4pP7pioLETMgXpx",
  "key4": "2HuXgyX6L1mMiJuV3RYsZzsXhcrJNPDi5kAeEtCNc6gqJNJ266KeKHjgoZQqpr39EGo4bUPXHEufvL3bPx8kQ7UN",
  "key5": "5GAgqfii9cpa5Bz14rW3QyFKdTQCGCB9ciDPCx461Dsz2NrpQTvqmbUHjT5j7WNysFmY1GJ6Qk3W9FziZV9UBWqT",
  "key6": "2DATjgCKqX7SsChkYwHztBsAvWN4A4HGqPoVp3cMqC6hCFeNpNgJPTLkQgihEo1gvJbLSnJCF3gxKajwDonMKBH3",
  "key7": "3hAKgsZytNkZEbEjtd6x3GFB1caVSAF49NJWCnnkN5fVVUsN2kjme38zRFJ9PBT3QkavLAZnwsUA3kdou7Py4grD",
  "key8": "2TtmDz4srjVWd5bb4dzGqgiPa4XujT1bCqdYGRQwS7wcKfw9ap6a1QsZrq83aEkwGfrkTBTvt2YMUY9tCYPWKDvy",
  "key9": "3Vb4WmhdNJr8RJTyivS8ZmQv2rT4NDrRDFjXP59iXhVbnxe4GdfJQGDQma8PrYPgW2xdirRFwBs1KxhGFM462BLQ",
  "key10": "2rNjdAEs7fASjTB7tKmo2kHeJKhJZfewUdRqhz8P3QgPRaAsbpEj8JE9LixpZsW3B5DCopzKLWc8umZ4pwwaY2bu",
  "key11": "4xHufXitFP4XGmFUzMduPjkDpN65v1gNQwETewbkMRpZTqFLtspX2wjpD4Kekf1mgjf2nWgcPfY8CwoXeaeJmC32",
  "key12": "4D2kMuwbuRqNpcvi8gkrYkF7XwVBSTCFSCuPMtQ4tqs6FX1KHqmeuycNwUsznqvdTaj6LQXbX5pURtYRWZYqLQU1",
  "key13": "42dwFdg2MU9LDCXHMuuE6yfG4MN2mxkcV9KtpMRQujzxdw9N5W81hauRy2nfTxMxApSBNzedAFFqFyMReHKm5TMj",
  "key14": "2hDicoVLkrqWEs5ZeRynP82B5g7vvHLMgFnZ664wvmvcr4fCpPbRDyLV5Q6NDgYJWQbhzscWkct1X7pUqJEQa7rf",
  "key15": "4SyDahTwzQoh6h7ouHcqpCit5A5zmGeNKCV29Lcf1uHga7byJEqr2Jh5nWy9Dhs4HkiQ2gfRq6Vx9hRktqXvf4T7",
  "key16": "5ikBpLWt9UUbHLG9daZN2AmzrmkVVsjM4THhws2YTqoJB2V4vaxwsJgte7CRy7jD57kDmBPDdN1Dk1no7CpyeXia",
  "key17": "56nn7i4BzfVw8wVGg9kWJ2wrK8sM5PbLTUWF6BBi99Ko6WwsFcXVfh3zWzxPgytPSCHpQCMWFky9jxotoL4dUf6u",
  "key18": "2JL8Lp5hfHKUBxZWe2Uf4Mhw1XR7bvhwSuFupdkfEfVCEdQ3P2JbCyJCSUuzG3G16umKeizJyypfsV652Q6wNjwh",
  "key19": "4Vt8mooUWf1iEYG98qNtXSB5pn6uXUyb55ck3kQqwxLsyUAjWvvTWLpuS7u73dVKuRYwapKmzYxgnm9Xzk9cFHmH",
  "key20": "21mvvM7T3eLLpRBfW1CMa6wonh5T7U94ZtVfNaLznExzsaxCKcJU67JsBhQyrnU4pASQ6mP3ayf51ipqiFUNe4YA",
  "key21": "tiNBrDu6hMgNU5RR9zj1e5dGhwKiyU42ETRLE5RZjCUh9mZTN66KfoYkRbKsjEqgE9zVB1w4iEAcJyCdzF4wfSh",
  "key22": "Qg2NxY3jZ5zpPaWiTX3BFmaqzuKGkD1WzpMEgFr63rfKZyg3SZWhpW4Wrqrv8g1rNwJFtEpHdmj7nmQJjeeGvms",
  "key23": "4ZVb3EATuc2U3MVLv9UJ2VZ5UPBrwCUbsBKox9hweefsdNcC2rZU5SNVEZ6rbJY6oBU4PUUUJWgm5gxUoPGVYSNs",
  "key24": "44s82eVdjLvsHVkKmJYZfkd7jvrLpFV3QTXgappZ9DCq1RBnmbtu1QyXRSFhxsF9StVXbjNsKqvNKRDWq4sn1g3Z",
  "key25": "2nzPDqKSwPj2zyzMxWF24YUX3j7XB8qmm3PNW2hqayzRkEdQvwYxd7nwvFCBm9r2LA9YsQVwmLmVsor7VJa4ojMS",
  "key26": "2NpyWXwNuZPx1uymQ2cUkimCpGMLLiWhFDC7rSQASN38MoHqbnS5Za95sTYNUcMWdAx1bZJ9QH2vWxvawu4T3Fs8",
  "key27": "2U6gTbDkgTuBsRLJQJJURhtBrUfCausN73mHHCYaXgMMdQaqQ9ucg22hpADGpzgnwevZc34aPXqkytK3s318GKSN",
  "key28": "2yZmYwKG3JcpaWBFz93szRLyB9RDuiEaxsiL56o32MDoZAYVoLSgmo4zFoApW2pVf2dKaQ5Ah3LwJjfx4C2nzBM4",
  "key29": "4R6hTGio9cymGMTyVMCWhuS4UMnbndHEYtifSTXtpotqAKXKFD9vQPMhhBLpLgNwhC4Xa7hvgrsquA6ts1e21CPT",
  "key30": "cVuAQnwUKiyF1ynjHycAFRMWCPwfSnJSDXUagRG9bBADB7WEWFE3VpviXHgaADf92VYkzCZBZ8GG2V72mMcgdwi",
  "key31": "3J9kPgHssXqXiFAyuybbLfvd5t7UECNxSA3qjuSEG4RYpEPcvoRU2jSbiwbwUgz75f5PFyDGscRie7Mw7YutfWX6",
  "key32": "4181wdJ4GY9Kxd7Kwx4RQVBrjxj3MNvpBcyV4abHCi8fjfV8cYwSRntspPQmnepGjpr2tj2mo2RkNExewmKCFUgp",
  "key33": "3CrKMamaJDUEu6frmeib6j9mSxCLHsJnzLuCFcUPM4ZHAa9afiqwSDwMSaYbxMYjs9py5KrrnLEB6ifr7dzRRigX",
  "key34": "NfZy3DaGrxRdUCQcKZ3vjjDgtRhD6yZm6AMZHZ8AjL2FgUrh7spez844JdkEe5jgweEnvEJyiSTY1eAbi3KbWZD",
  "key35": "5FNiibDHgAgpA5J2BemkXubdHjGaWdejRDvsVGxw9S7Bw7v9RAutBEBbVopq1A1dsj8iZmES7PPHKcBonpJsSCdU",
  "key36": "2opFx5cNjLNWKhxPZpV3CxD1RnQgkF6tKxbahMCwAXKkmmTS8nfngus7SEwBGNRBF3FkVFWhSRYgE1bAaRGrpj5a",
  "key37": "5Epq7Yu8MiD4r9ZPXJDXT51cRaWfvXbT25cGJmtfuyrbwpwgCjb8VBxqEzwgPMPMAsczVcxyJz54TYY7yysDbgxa",
  "key38": "F7qWT6wwzjTg9MomfrX4aA54UoUYKPyAahPpBiGDd2L8jv9ePqNCntD6TFaZXwJyN4wq4gK2Dc3SeZC4cPduWnt",
  "key39": "5MewbvvwuMAr2KJwhErUpKWpA9S4RrVwDqRVPXoyccxbMhbA4j7uUJtB7Zw3qPHi9R76DZrZjVSeGgz8tetSjjiv",
  "key40": "2Zo5XsbrZHQdPGb1v5GXSEo7HtiGGyoCKSz7h9Y6ZoJkZmDNREN28ixe7BNpqFLiGat4H7DS8KG9YEnyEM9UPdBU",
  "key41": "3TQKDwr1shs7S4QednchdmHjJrobYdNB5jcwGiXPipVABHNAx2qGLsFuBx3iStR9nmuxZFY38M8eQzJzWvFqyXeu"
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
