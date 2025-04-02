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
    "4ac9P4MxhE1Y5yVKfxQrS91sHhZqGmjXiK2LNd6h1TBu1aPXXxfnMsDyHokd4eRoWGRjgBAam83kPdPLDQKNe1C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WizjCZxZHVCoKdYrkcc3MnTHzeqfRUjFRqyaxDVQ9bgxJ8QEyMraCeuLv4ouagEYjR3xS4d3K1rT5caMHJEz9K8",
  "key1": "574XezVepz9vWea8oBTb3JsJyQBtPrhMer7BHSC7M58RYDEtqViFFLXzw2ZaVbnq4Ejtak7RjUKJWVwfEkntr68e",
  "key2": "5noQcoP9Hgdu72foea3LRGewZugopm3QziEiUf63dufaQcg3AqmLJDFDMwAXL86x84qAVetMe9G2tpQdywcoqwwz",
  "key3": "4ekiCQ2oWcQwtpkhwBSNvpr1Ra8hz4WBP3vDy3r99kTAYQvP9EYRkZHi54mtGWHVAHWC7x9TQ4UQuj4XvXaiTLea",
  "key4": "4Qs4cMVqe4rjZJJ3G9oKbMu8Wxdiq3i5eGdWHTNqgCQme5C6WGiGjigKsFob4tqa7w2pmVf58xqQAtttP4rLUFzd",
  "key5": "2H4mgrQi1vgJfK7dmQqTqGwu1XadxhXcqi321bL9ezTw9S4AbiPM6VipJxJwVD45Y24nd3YzDKuidugciRJFm7sR",
  "key6": "5L8zb9UiE49JRj3e3T8rRySBBcaLzexVRqC5Z3UMBNwPHpDXhGd1qbZHFPDr17UL1HbbJ2rkiaH9zfvhxfyti3NQ",
  "key7": "5XRfC6HDcuvZZWsTCFrXT8GyAkV4s8tf5bnu1wWxiXbg63w6XuEADtEfSbaB3UV1vZG2NBdjCJCkwaYaBLk99ZDb",
  "key8": "4eea9CBoQYjxr8aGsdh95cA3JSgebXSfBDUENkqpfaHVoaYCX2ToxbRMHDwYDjhnw9BTutPnUa1ftbSbHnp5Mv4M",
  "key9": "4EQF7qq5K7SUTSdrT9spwcAwChEfCuTX9spMdyEPCEQW33wnv2SNKUG2xP1sxC5xKxDsrKs4yvehJATHL14pPrtc",
  "key10": "3v7P2Gp7mL9WFYE2KmccJotseQrywpniv6HFUhXBvYo7MQviL9tRcVXApLeYdLvvPmkXRAPZNhRssQvmkRPYAmdN",
  "key11": "2JhxYo4nqzaRptmJKL1LbpHhm8muRMKeXNFniGmm98qF6aN6DKiU1JZatvd82mymae5Wf9DwUQqdQ6JNea52w5ot",
  "key12": "2aM7onNfGsFTKoSvWxU4DnxC2Bxp62s867ZwxC1TTXhTtKvC6GChgkTi76yiwm8SxrNysEGiHWqfuXGiiK3HzUgE",
  "key13": "5g7YxrLmhvArZLiVnZbagwJczwRnRoke6cvKoEMrBP6o5ydsJGuXK7MTGSzXYoLHg51sPKQVZx22fEHhPyKWrPw2",
  "key14": "2ZNjWxwS1BQCuhNsNHXEYr7a2eNRkWFwwvnVM9ary1A73mW75zaFWrR9xszzgYgrsZ8y9pCS9eK72GoyCWeg75zM",
  "key15": "F9AuLYcVkDKRqCpu3FW1Ej1EEGiMQvSfCPY3V8jk2Yjo2aYuqJwHarMh5t4qzgw1YzcZCafYgorAoGXD7epp4rU",
  "key16": "5WN3vjJEPt5XXm8LX5YZ6xh1m3w8Z3cMdJ81WiR4vbR9pVh8sas3jiVEipABWPrfLxk1Dg4RdvvoQ6mbZnh4LCZS",
  "key17": "5zHmYeJL8SccJHCaVUfXtFwQfDVpChptcrvX3xeQncJfYsAaKJE7QggVhSYRBSvBCrAU4mJShYrcnude7Pc5YcG5",
  "key18": "4fps53zoj8TVa3MNffGZboFsME8RkLU3tMDiqzEeTtFiyTSW7Uary8HrTcqHdTUmUtLjzqpek58hRvZqmntYFNMG",
  "key19": "2UbXQX6sqZ9HCBJ2bGeM4Lm5GohrRyUa1AwPaie8b63TdUMdyHJgQCx6tMS7PTSmEjsS2rNxaxCYKpp2mRRMSxER",
  "key20": "4uc54fY6fAsH3NezvptpZa5ziabDJwpS6GxRtqFFQM1V1TUphfWZMMPTsQeFiK2a8zdBfFhaT4J4kYoY5j9RcTvi",
  "key21": "5UAz1g3SUPWERqkgrfKiGA1GiLEMp5jUXuwiEtvz85Foh3pLZiE1sPrn8tAF6fPaWHoo8foSEPenB3nqxSSmdC2y",
  "key22": "586Pxa1GPpVF9WkpJoq1nx8ZTfrSdvp8zZouevADQDVwxTitWLhuywEwhAq6De8iGrdcoryeMRQQ1apsSKdch743",
  "key23": "ffzXkT8v3pcXZ3SrokRicfAwH4SXYnRxxeUkTfYTjqRXMRyRW2nJueXKW6MRCdUJJSYbZQmKKYKa7QBPUTzWYHb",
  "key24": "36wRc2qQpvaBqwLUk5tCghtpfQDe8dozfaJQQ8RscUchf7cXnBnHBkUrpoucd5jVbCtK5L6Fmicu2XedRXLZyqs5",
  "key25": "3g2sjeWvtShomhyKbuBBWh3fjW2ngjDNrFBaGeDzMjJ1uchUPRgKq1NYdc6wsoHLBSCg8pLiTrhyrofH2MzjLWKR",
  "key26": "LxKzyyeRYpuohjttFbnWCR3Zj6LnwMXEXq8zS78U7NacqzDg3tJKroFGY43Pu2JR6kGgyQ3wPmX6qms3Q1Bi4jD"
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
