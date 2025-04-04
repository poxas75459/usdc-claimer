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
    "4BCJrkixVfHhG58b7KEuFkv1sY3uWxxJuw3GLKDSqLoT2BPRXZKaDC8UVyRtDvCa39f1fQaENNmxmJdi33niiKnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GNXHwEKUVKoTgGF1TfirfRiSB9gXKhUo3SRyLvZ4VjKMzoNVLvKUdRTSXFRScdkP9zvW91ghZDxH9v7XjpWfSJ",
  "key1": "5FDF2FYADyhSvWddaENJ92mwHcYimGTje34JBCBB9bsgaHrAAXE5cWsxEDMM61MVbog3EP7Eo2fWsMECGQTCFxqc",
  "key2": "5R5CoHBohzLgWWGAFZ8UDkiohQU27PahR9pUGbxar3ot12JaT9Nwf465YPo1ohvajpjUeGdArrx2gs6veRKWVp6n",
  "key3": "16vL1SwpdqzRjqfwwDqSpdZaMjmvVsV8f21hwjMb6ixJWiAGN5xot9J6aCFQ1BU5EmTfGdEBZY7FFYcHXrALa7b",
  "key4": "2mPK96voMbTv38eqWCU9PuzSCz8SGcvCm4nZMCnAWDurJBA9SKAcwJcRwtTG41G8i7jiK4ZUt34Pqh2nPPpeQqQ6",
  "key5": "2zFGfrWfMVMJJUeXjAnEMhuniEPJD36A2JPw3MtdwE7CHvBjfBywj3jZnoZNpCTL12Kk1KmSy4a9BitvgBKYFDHW",
  "key6": "3yx1VmvhbAGBted7wTksHK4wp4deyzH1eB6dnZokC591ZLM7Vj2i2BAq8zBJ5AvVdUutLEzWFh2NpKSLou75MqmL",
  "key7": "2EinMg8RZkZj2U7c9cLGqgcckArTantW2XGhfovM13JeJpsbn45gTw9B8Ehd7cPhc3Fh9zHwqGox5RWdsJjGHC9o",
  "key8": "5MgQAt4qq8YFwbLuqnAYVeuVVEt22KvYp4Kw2CAXS4Etgm1VAgqbarMuTifMfudSq38y4c4JPgCzmEZH6138jtwo",
  "key9": "2BCtj4w5DMdnnWWPAFb2QtevuVdkazjszv5KnhBWGm46KAmR5PCsvTGJAxsEphMnEam7UV2eGQCEc7sifN8jmdAF",
  "key10": "3h45PXwX6xXDm8Si93qNTRBngAK7vL6W1E5SbKP4z5NCJqHr3LPf724j2PcyCjChnadDMGw43rG1VfodRUtZJVr8",
  "key11": "3CHU3Ha872Ws4dHu2qqqhCotbEX3c6ATr8f7hL3o2XPw2Dpqga5g9GWGb7HocMANHYM9PbVNu8fhMscvRLWCNyL",
  "key12": "2ZBcbbnsTVq92obMyKRt1hzHBKKUUD8JGQ54EdR7LpbhRhqmoWp8rHaXu1mi4H1cbJKPMaU3ELQGhY9mjKEwVoEo",
  "key13": "deBeDBsqxqq9t2horxkWfuBeNjERA21oq4L2xAkhKyE4PZpZdMAfRfGLX9iJiHEYQGGBnXNXENGQsajtsnjBuWo",
  "key14": "319xrDtGMHwTCkNmJ7MwtnoCqLtBoEbY1CzDHz5uoPzgS8dCsppJKTYmGTyAChqGTt436sYX6hCWo9KunQmxb9ZF",
  "key15": "2AucEV42ERpqjmhW2fNAjKTE1NQcww29iSyG3UT6FieST86V8tvsu3H5QsZ7Rdka9wP6YrJzN4uu3pzSYheGf9ir",
  "key16": "5ZQVc7FUujQpchxpFJMydL4M4HCRhmLDuX8fJgFRza8N6GcrsyjQFdjSH5KN2t1evokKSC43KM8gDzkUkiX6g2pJ",
  "key17": "53GcNasaK7aSntYRr8Hdy7PjBrMdoz9wNPMTj2XAexU17hJtRcGqQkjFEH1RWFQn9X9faqmo9EK8Sko4N89ipazE",
  "key18": "3QLUqvSsFwrwErBL8QWSN2CJQsCeBr9UimbbksXJXMsUzvLG7HJH7evtCW3f1iyuovR7dmtgu3zhmPmzUDV89GNz",
  "key19": "4eKTmYyH6J9gfFbeip27nCivfzsQbY8aEZyXst47PZosHP5XbfHCdDJu4rp4LoKCPafmGhBqLmzYpcSoy567Tokz",
  "key20": "4ZHbgc5458MVGYL778GkKLbiF89pXhKEqz8jqx4s7V7RH1xnBjsL4RhogDEGQbk6DSjQZCFmgd8oXbugoTpoKubL",
  "key21": "2yFhDd9mud74QZ1aAj39gVfxRU5SoMsnkeH2hH9T6ji53CnH9RT8Xmgab4tBhaE7TMNxmtcc81SCERBD4gfBw5pH",
  "key22": "369KKryNeRirtSk9mZnjNnTvZQXi3rAFhzVqTe9fbA86Lz9gJ2DGEYZuAr7hcBECbyQPLR6V7Mo2bkHjKbSnccMf",
  "key23": "sDSqCK694DHeiUB4NEL5fem7PX5dBTNTSuoD5AzdSZLX4tKgqs2U7aqckMmR8vtpwJCDhQpBoGbgfMK3L9nJ529",
  "key24": "3dsKzgrWLexjPYk8PoxfLm91ryvJB1rZdLxcmsTMzYGyKhR5dtQyqqPxtUYRv1tDjw1QuDDboS42zeZpTb1BRww5",
  "key25": "3pjizCdtCJHaAUEkVS2YFvLVExa6uxG5oXoBHLWgStQ334JRux1DbahaAv7kxK7WavLikhAXLQyhvxbugatEQfkv",
  "key26": "4uVMCAjdKEnUntTZbwnFEocZnpayxyoSyDdF1SKZEXbxEsjm1bPwdV95C73dA5QssPSSBnpLAXLAy2BV9grDvcUq",
  "key27": "5tcoJgYUoxnuSbZfnJpMb6678bnXFsw7Nx7XFEGJ6emB9DvKdpoqhD4pFTvSSSYK2H1VR7wfF9sHFZCtWWtn8JSv"
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
