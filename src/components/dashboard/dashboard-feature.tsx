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
    "2tzCK4XpCG8PHBxya26E7uobe6tiaas4CuewvEzfGxACmgA26S6RNNpge71UoCS8QtorCREdaRQncDEhnvjwEd2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awSanueGo7msD3oDoVQAfGDU9AKkeVHHJYvr6ZNj1KjCpe18JG98X7nKksHRhJ3m7v6mcdD3carRyjTP9Hee5SS",
  "key1": "cyYGBYs7GdWKyPPXcz9zsqU5qeCTPBdD5ZM6ZsgTRZTmYAc1zN3X6HeiAau9H9jG5KwknKarTvNkBtk3VMFkPkj",
  "key2": "3YxpCgKpTWj1knJeTHcNgM3z31DbL6ymmnnem7gU1eBgSPNB6qqsmHwcfq8odg6vBci61XZnRRLziQdPkuKg9wZN",
  "key3": "MaeHeUxWw2FxJR1EgymfBsuobANeeNktA5tFeB9vqYHjYMSfdnmSaqPp3aMDjN8PEgZRBtaLzRbL8cYvSGhmjZG",
  "key4": "3dNvkJpYAENwxiNsrf3SH5ARMMQR3oPg1mM4qtijRMdaCiwnVcfLyyFrHhapVaTFBF1ftxEMWVhpDg89L8piDjPs",
  "key5": "KnjrqLZSzjikkMgx4aR7xMwWc3oXCvsUCGebrqvsa2W2NpEiXFH69qNoRJJ9TevwJWhp9STGZ1ejuHWC9f7F7ZN",
  "key6": "SmXk1kzr12V1URb3UAMtFQkDUMnc5sSWsX6QSDwBmo81zrJTbtRpPPrT9ay3DnSy1Vqe94Fk5msDmF1tgK42bnZ",
  "key7": "WcdhF3iZDaESeQkmbYtJyqxC9LWungkmFndWEfZkEv9s6TSVa3Zqejw4LpmTLhgsDg1V9Z81tToXQReTDiWifSQ",
  "key8": "oAfRUh9KYDgBdRQmw7fja67h99QpxV8XUm6TEonHEyK72MpGu2mA4eQ8LVAkSpMHyDH1qzwr5bLg5AG9j8ByBpw",
  "key9": "5BH1vWdvuGhZDf2SD5sx2yap8Qb99RA7ehvaxJDGp6MHReZkCZZRuaAa6ZEpZPnkZiZccch8F9yjwb4j2cgFC4Gk",
  "key10": "2mQc8ZiS8hM71J8h5UpBBKnkdrvudytR3sEs7k26951Fhpbn3mv81uuRD7ZdSmGA1gQ2btLUxKXADHUrkVkhTxT2",
  "key11": "62dbjNSY8vjUmtWys9PGfgA38LZkEphr7sTyNyAZoycX9mT6xXtvneJaQPbnG72ULiPenLMnD63LAuALF8AovnhY",
  "key12": "3NLRxN7E7ojZvTUnhwv5ScurrEq2yph5CFVdqn5bSDWbjBwaxPmQxeYgNwCZYCZFxkLJDMFEN2xar15R9jbbiPHU",
  "key13": "3AnHqavBEencqdoReoctKEuSh9kVykRoQ4gCd1r7gfTyomXmLu6j2Vf8tHV2JqtDrn4jBAhy1KJztLXnHeeiodkC",
  "key14": "4HXVYRryFtmpsuXV9d7HWpJShQ3n2vhkTt6H3ffsay8Fkny2DCebGavTk4QuWqb3yyChw4FRpAxncq5kEiZxi7T",
  "key15": "2HfBVBTT24frYrW2CXywbYAnfFBia7Euh7B7PqePjPyq7Kd1NgFvSJMxDmhwSQJyNumbfDRJqouWvaZy3eJtRW6k",
  "key16": "g1fcfvvLpgfpakAKjCZf4r6Rd9DPSQWkYyKPeomTjeUhosNKFHma8ZqHzN3gf9ivfgwTDGANKqJFVYqjhTv9fDF",
  "key17": "4A5oDffguDXc63BrFsDt6NfY2dRQYBXHtqjMBr4VaNaTiFyRuAcca1mgdE2jQS5XpK7LHnjg382xsTnHomKN5Kqr",
  "key18": "59HEdvaMYuQBKbSVjzYqxTiWKGDeiHUd6V32zi17UtmjqQCnEbu16SzBd4J2KynveAaN3qyXksm1G22CvejE3DqZ",
  "key19": "32ZzWDMQQjeirhj6EuS4DUXhfxmvMAMw23KsNYQepjq3oPT18BZSHq6UCTXi81d6ccaffvKMzVBRNNWGhuLrN4W4",
  "key20": "3v8WQxM1w6e8wkngKiXxefVwBwJ19XgvRG2Z7oSVU9PfxJmQ8jhoahndMc2TLNrSndgr9QUQ9MFEJX41qEAyhdss",
  "key21": "4Jt4s8AbWC4HrAsProXV1sfcCbgUDAfgAVaZTw2M4vbkfz5p7C4BynNQUMM25PctUvRDZkxckVzP4bwv1maSZGgd",
  "key22": "5fWg44UzmvS83fhJnLCWmPvrPxr5Jf5aQAJSPYtFjGStaEmKFNMWQ2aNAAXQFKQYY3UTN4RAzQZaR8LfgVZRSVQX",
  "key23": "3Tmw3ECdpFCNGQj9PaVRwhgkg44nQXgJHUzsLyo3kQRdENGDHEwfktw7sh6SJaGEF2SzWAEVQgcs3HiJdqCqU6Ek",
  "key24": "2h2Jdd4YFSZYBibeNxXCw4KNjBpH8he1NPX5JnvMtxMNipfeRozHgqZYG2XF8cwJYJY4z8LfVzQRGjUXPs9M5KFV"
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
