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
    "X2MDQnwUGAJkEjbFWR5Ykqfwo51ePkYqS4Cjfng2aKgJLdWF9HT5M9FS4RDyGKxUFTp5TdSDBZkoDNcVWeS7HVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FrsuWkeWtRojMMSvpnpLNK6zk2F3W2SGKkVBELwpPiMRq2batpM6s9iZL2sVUf7Lpmq7WfL6Ch2MM9kbtBn9WPR",
  "key1": "64AzCvM5CB8AgjPrRJ2bgES6tarn9m8cFTeVWAWm9fXsCwf8fh4wkxGr2D9iYLwkEuebgdWLqiBUuqbwhpi7q8wX",
  "key2": "awVw6bBWDmJ2SnXQSaMwCmWsqE8ptuGRk6Gf7DtFLB6Z3AGLkrMVQLCCrGLaEQLrycqbSz42RAL5BReQq2Wko2E",
  "key3": "U3BWpHD6zkmqFS77sTkyJjREH5kitKuiREUhk3wWVKzftoTtCBvQtjqqR6ELULT2asNGsk1jMosyembKbNW4yPD",
  "key4": "2S8RtWQHMdAZm3KeMds91Eb17H4uiGEUXaRaDaD1XGY1pd1FPz9Fq2eZy4g516yLuMYmo2FvQLGEAyUJEpm9rUJF",
  "key5": "3mDR5pKLCCgd26rX8ZdVpRJqK3b4yGJNcVJkhwuVpbT9QMWbrcgrrbAxPpeRZ96h13KKQrJ1LFzmqyXhp7TkNbv2",
  "key6": "2YosLSsUNMK5n8ZgQMWygVzVKEa1aFmv4JSdv2smvgGfCvPoQtCPmxmyX9mQKUk5yCkvUeCF1ArPE2jeHuUMS4Sh",
  "key7": "4w4pReaYMr2G4kkenJC3bdMy9NpBGiT7ULaa9m7ygGowSoN1Wwxd9x388gJEuPB4PrdYJVCWQUrjhVz4ruiUoRaZ",
  "key8": "2yvFYKNtfn6euzfXY8JgSdx14ZPec32EPYrsTWzNzuNtAMSThv4yHTnPocpDMEzCkj547Rse57hmSaWhJjo4T6f2",
  "key9": "4dNrJXfFQPVLRAR9NL9gNj2JwXJ3JK2zYdGKkxnK1BfcXAFmLnqW1gUA5LPL3voWMSsRQefQYKrBpY9dY6e4Zivh",
  "key10": "iSE3HC6j7a2zYTCB7vVt9jZk8zSKvBgkdS4qZvdaExhsvHxnBxeQbipvF6xu3baad1kJWWJeqorygRRUDkfbeQV",
  "key11": "5FWvTjyX7HmHyPthWFMP91tNQUWBpzpVFFdJQEzqLijmU8nFV2a5v6j875Z7RN6VcpJNHh4ESt6gVvrZiU33NCXK",
  "key12": "3t4v8CV9rZQC4NEk83G4KqcHaPeWbxiVwUsbDSfmF86MpeCBzuFw8JFgZqM942Fq3B3hSmzKeRZxLLXybt1JyMiH",
  "key13": "UfFqiekWEDjQ3PFMTqFZ8PjEzdEHKPyL1ktj3BTx4Z5K3tAtUj8ePP49ak3BE2PRyeiWV3EAvxPfJexD8fE3sVa",
  "key14": "5mhncXdhKDXJkUWHJRbAzQe7UEwAWELY86quEbSF6ReK6aXdWebDwiCH3DeXmUDW45jdwEGHoaWmMEo1EaZiGt8L",
  "key15": "3hP7VDgnr3KFwETxE93dGkXQWcP1o3TXpMxdQa1ebbh2MC5HZg81fy9WkaZSPVzcSGPyPpucheEcw9GPbuZ5M64E",
  "key16": "2iyZ2MGX2E97UU7je6LJq5TXpSCQxdqyy1etuV5siBtSRotnHpVVwgSgu5JUigSuvP1G34q4DuBUneM8nj8xBaHv",
  "key17": "UKCjSD16nc2q3mVUep9BmsAh74M8KZDUGAZvuSTXQrh71v9XuWm6sbR5qkH8GLVxb64dmriM9niQzAjj2DUZtJC",
  "key18": "2Yfg1DCJhQLzpq1E4coE9UXfV3yWyKciAwreGHZRhHC2EQbQuGZgW28naaBySaBn1sXtEvqaW43F942mGL8Dwwei",
  "key19": "3D45AjCvZh7MPRWchDQmPqV85QsumhsHySHbh14a5yQKs8aM2xJzbfQuo6bjkwwAN2T8JSczDBY2nWEUCuvT4YHr",
  "key20": "27eVfkRVsrpKxEvm7hbraNX9859RJT3p7PN1fLU7AhiYYeiCHFA9JLt6HTrDqwmfW4TPX7rcyTVjCB6J7pjitELD",
  "key21": "5ZPD93sUEczqj1RWD5RWTHAVWxDeNSd6XXVHKnQnBFNRtxTtL8cR5wHwocTP51whiwfEUkJ7jjFfvLkLFPDkSe6T",
  "key22": "5Gveywa96wJLSdQYkzRJS16Bi3WTJD2qmKnoC1XQzTmieTJEbZbv9JoRhh3RekSgzConrYMt7RJ7NigaFYNcskVf",
  "key23": "58fFxe6SEi4JrhK8nKCPjA6wZdK9mor12RsKi2PVoGGbNvGiyWnRjAQAPA5nPakoiM7kPXSuwQuCsEtVCKrCFFXm",
  "key24": "3AfWw2ekkFQ7kztYb7AZQQPzmg97DZ9K1j1EiMTPV4kWxSCcnNpDniweJVcUWZGHZbLwZL6kPPPGBHBZhjncjhxA",
  "key25": "4bXMKCb9qavDkMZCaBRyYuLh2hdaGBbBQ97mXKszcWahdGEV5stwpM9ZkR9bdX2H9nrLpCMkoo3bSa4y217AKAQW",
  "key26": "3PS2rwAWY1L6JrvQShGoBb4b1sHe8i6YEamn5hx7SCDUx8ECRyJsH6eZDMMUXfvLuzhpspP6TziTEXWq4tJkDc5s",
  "key27": "5xYom4BGUkmk7MemW5wCpuRUSHj8NP6KXvkP5HYAfd5VBMGDotxb1Ma7kjqqYSUy1Wk4nXeSYmvsqooedWyt6rXS",
  "key28": "2aMZQ7haeEUcPg3n2oRnFqpM6wMAH7ktcjM3HK7mPQM3U1FsiygRb8xrsZ26DRL61rA8ycc1dLdxyZMJsStWMRRT",
  "key29": "2L3p4GKkPDomcMQ1wjAff5tcATFKDY6XCrYymuhN4U3wsfyAYzk9McXrwk5LiRLkoNwbArp5Vi9TWYdKn58ctwRF",
  "key30": "aFmCbCQ76nShzDmXzYSWi25nirShvgvCCRjmGP8Y7tApSNkTF2Kzttu1B3H84Pc5YicAR766XseqPE4NJaw9cNS",
  "key31": "3C89T2ueTsXs6NXysNzaaXegUuEJLFKGgdgZYKa5X7q1hTzu3u4X6cY4mFFfoD2RFEhgLXoJb6EnCQdBK5MN8uMt",
  "key32": "2G6BK1JZjb5Ff1GZ8RYbpCtXHKCwhXGWbF6NgBBRRRNVUBSAVxWuqHrKXethJ8waq3GYQs59D9ZFrbaKgeybEetE",
  "key33": "47kM7mkn3gJMjAikw4taTr4cFAn7fGFsocb1ULreeCsGdS18uWCo4A3iqxUa6Z6KUMStgSHQC9bTX1U4AtNWA2gn",
  "key34": "2ui6L7Yz1zpstR6qw6UeH9cmqfhkLkrJaktsv8H4dF1qpNCJbmPkjycUue22XriXdeyfZBozAq5yT6AVr5BWncaq",
  "key35": "4UPv2En1z47Aj16WxXh3EQuNQSmr4HV8zFXygVTAbnRM3nykeHT4QGEDFqiHKK1EFvH1Fpvgc15oqBbH23eMDzoZ"
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
