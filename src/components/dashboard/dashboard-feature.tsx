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
    "56yNunC7edK1ENWLDYHikWtUbCV2JMfpryvMVpD2xpc4VandGgBrNfxqdrdQRSRhFyVkJwwCjZotARn8G4tGmi9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zc34VaxNbcPh5B1vL7UDQc5Ji8VCnhHUPhNsvxW4zCdorzvNaoQ1BkMceot2KFMDThenimvcYN8pTquCVFPDUES",
  "key1": "3ifi7daovtwcxNHvX57sL7fLrBAouseamNwNHam8S4Vs3jpsdxYLL1AFvHv4WBWLPdErkpW2hwTsTn6qofRo3qE3",
  "key2": "TTunTuMksYrnBzJZciLmNtrizerJjqSeq5YmyTDqNY2cJTQERq9dBHYdvKYcREhnUdGv3ijPrqrAV7WHq7Hh8CP",
  "key3": "5w8GMKNbKvK7PgqYcke47fDWsEz7WHZ1vgvXqYmLhdwK1AWhRVsNdKTvhXcu1Epv8TMpUxhKniJ6vvNJsHN14UiR",
  "key4": "ip1aVjRSFPMS9Qdaqf5BHWRGfgAkfmyqGLPqSosdzm35uinD5Uam3oFL3LasFMBqWafEahs85649mLDN3pKMZqK",
  "key5": "5M7xCZtghARMf6e1ZMRKpgCpW8ZTZdsMyRGidx5YxFFmUPcyUpoagfXXU2amU1ZjFWHkPe9sMby7naoQmKHDvBaa",
  "key6": "2yB5iekEKsWQgst2pEGy1YcBQkAk4ybHSQTCD5uVYiyd9jpFCCYPey5ePoiYRiT6KBXx8AoV8iFSsGUrCf19h84h",
  "key7": "4rHeJvGJEMaB3CUJRYsftdxVqaStYGpdXHfGACUNKERo9AJPJEbN9BcNem8ywB2NAj2TnWnP4YjoPAVtmbZuJgSi",
  "key8": "5erwF2YurWfA5wfBGAvYwiGywXEv7vCf6VVSy8jxc6VgiF7UhbZhLs7Tyhz8PrqqqVdnETL8LLrCadH889kkbjhh",
  "key9": "2Ej1HrW2C5kkESuvLEF18M48WFcqXxUVeDeDetK8XjhkfiT9NCX1dg3f5dzwS1b2Ff5c5sPTvCmvnBVBG8SmSboA",
  "key10": "SLB8q4w1ak4msDk3BkL5iPdSNzFzD3qGe8ER7UGTHxJo5oPEHsJnzxf6YC1SGwC97PvJMWpSe8BMYRwjQvuoaPq",
  "key11": "65sXVxys77NjDSfGpEyFdWi6nm9wmcdX3ow8rWq2FZfo4u3rVoebfPZN16YJZYa8C79TjHEBcW5PnCaz6HVbsfgb",
  "key12": "1uhUZeBmRHhjd6FNQtNsMk44uPme95J6joxKB9ZPbz4TSofQnLxR5FQhihAKFory7VJmSyvtbjTf5YqZbUE7UcK",
  "key13": "5gyNT7dkFVFkcHw78VD5uGFR32kEVxTWjHeoqW2LJXBpuN9Bj8oqWE2VdcGqhvpWNWA9KPBtjBpQexjuy4bDBUoY",
  "key14": "o6PjVE5NtZjLQgjFMqqYhvdi8wXAXuP2piae3cd4TyubK2978SJbBM7a4GmM7rhSexoNm3c3Kx1AeW9oVsbrn8n",
  "key15": "4FWxK5T5yZg2pPNsV4c1dUipJGDeuP7ztgRkVg1bG3ZBJHKvEFQqDYSx19o9s6VNQ2jJq9StD59NMRWFGgEBwceb",
  "key16": "2z2pSWuzGAC51QBGMTTbnHZKCAiMzZNAevKrTtNrmLq45u24EYqC9hnDauP9FEc3K4pdm5ErUvmxZT62ZoF75RWt",
  "key17": "5Hh1DLctzoNn5tSyCXfD59ovEi7NPszptWyy1PSzjiyqjKtaFCgEF8M9KFpJxCWt5Rrus9UymA2XhTCffd5qMH1t",
  "key18": "rnuB6pP9XZNPhrKjugF1GLFYYevdEXPcN8BdVsYrSkYjMU19kiSwhph9B4HyT81HVYWgvtntrZwfHPU2njqVxkf",
  "key19": "38HsxTCtrnePTVcX3eiE9sgvyBMMCg8qb1zjUNmb6Zwe89x6z3WSuFfuJRsN8pRpekzUsVDJASANCkXv5JfyPCX7",
  "key20": "4jWmSHyozf3XzdjjxPiaRMbAUuT4RdWqdZmjY5Zbt8QuzGfyqAckDGw6ukyrhbcer91v26rCWCxNymwNJrmjeqT",
  "key21": "4nkByp9Mzajn1BSKpw8E5QtNbX1hYxuFfFJU4ASpdW764fzjvqFA5bQuHSxCweekfQFW4woubb9a8gitaRLHAVZh",
  "key22": "4UufTKLFjsY2uC7DR9AhzSv9w9zQm9r9GwF5zJjRuMUdtFEqQHZhPY9TfZVJ6mc6R9bPktVpWfe2MJvwh4cvWocT",
  "key23": "3h7FiqHkYUFEgMt6wNDF2xsrf7Jb2XaUEPTb4pPRE9F56Vm1YxiNBELzYtwrXD63zN4H69zvdTAd7ZEBgMwDF1rY",
  "key24": "45TGJF1JSxmknvsG5hPdXncifHz5cyhYWKW81j3rTR3QSWZ5QZsMS5qxo9EYcjmmzzdABpCjNZPmHqGs3WvDhM6B",
  "key25": "rH9RAsJdcskNSr9bS8WoKsJ4rEhqm2wQzE6JJrq9RnHN3kEcXtMdJaN6WiGDpKni1bd78qT7DKkpnwCUDHsotLr",
  "key26": "5iMRZCZGEygB7MTCc2PsfinxfFe8CqZuHNfHMSUBgefuo9ELJntFhZrfjUUZm9J59uYhKRg4BpV9XGEipLNhZZN9",
  "key27": "5yB2ZeamHUaZQsg6YGWtFFT7E17V6AoA7Uggmz4S2SpbJFRtvVtYcv1t5AQ1NDM5PVmhMFTb2zajjpuUGvp7LktA",
  "key28": "4CtWZKYhYxZXjesymBeCxCMP7N4ikcoSeuWmdM2PNsiA914LwsBhF8BuL8afsXqrh7a2EcGo9rjjGbos6mAsnEmh",
  "key29": "4RUiJNrRLAt4NAKj2iSDZSvWZkaQ52xmK1h9pjKiBGkH2AfL2HK3k5N9RnJcavpDPyfWPJD2MYzGxSgmujta4J1n",
  "key30": "S8ryfwPoHgkHZjHCiYoqncTywkRKi6ugqrawpU3CWLzNAvBZNDKqfdpRRHmAzCjccjYJToNCCTcRgYpN816RrKe",
  "key31": "2qEz3taw7wSjEoMZUACW2vjo6djDAEY9mMLhXAPhmKSkAyH2TA3HHoumskeHdxgYPABsinGnMJgJ1qfA1qX6Ekw6",
  "key32": "4tVWNegEny5y1MdXmduosJuutFwMJ2tXfgn4vY1qfKM21zBUS5tREFM93YcDjS8XMK11TF2q2sPq9DY94YS8FCni",
  "key33": "2rTm58fzGxvgufoi14T7ysnqKKKxsG8KoQzctiBDvzoW6SEaPTUep8NRFHTfscCBtFJegDgjmeL3s6kXCcmQPYmj"
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
