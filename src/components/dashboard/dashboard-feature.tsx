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
    "37VVPiJfFgs8N43c5RMP824ENkDZQCo49zVMA1dNBnBmqCGeEGWx3cgi5AvM5Nvdydsr7wsticxx4hsnjkxwHSdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HbzqdVqZ7TeB7hJmwEPVhPnDuTbwDUe3BUdBVfNLCot9wMAbz95PANaKjPr49daQeb1SZTLTR1ghjxqYxRBumL8",
  "key1": "MznAezVfWF3xvpU6TrRjDH6SHU8pqapWnQa2FQPYYeFG6AnvkKYcNsEq5EjYBWfJoS8rdYMpdS1vZLxAF229G1U",
  "key2": "5uGTWPCML2QU2CPeayLbT4kKK3K1kdS81NTDZvWYGyxtkz1LyFDN2GRXi7wooNRG6NunGbrLCri8eYsDiv12hXkp",
  "key3": "UP7HCR4WaYr3eZsvfWvtGDkcsppMr444xVwkvVuFjWzCAEfpNVcvNLhKUr1MySG1WpfixGEtPke4AeE8cGRSvf1",
  "key4": "4nYPPEYdT3rHAqHbMJPyBSxAcXkCsP9dSnAyJT6zW9tzzuh4Uou3EP3nTngTh8yhGscKmGNFkR12fmiHpJHJeJeR",
  "key5": "HogrbEtP8oWdoidm59xkf14M6i9B4hEaq4snFzRQQ9xBdD5Rb3NDAYqmq9VKatr6bvypjbASL3xTBpadJotFVhW",
  "key6": "31GxUzy4wUvaYNBiM9ujDXMTRJ7rLenxCEVXNMWQJX59YY2SSkzMH5M2fMCiZVJsQhTz5pLTXn8LWAaQF3yszzz5",
  "key7": "bUroeRpr7xaY1sM1u4hes4o9C9zGa8QGeCvZ7JKVfAbecASw1xuuSkrRCne9VWXe3sZH7AndbT5yrAdqCD5duzC",
  "key8": "52iPsksEH7toaowfjTvworTiLJPfBTyLJHEXPjJwqCAE2s8PGzLv2vZwpNB8468NKoqF7vbDS3RsaUKJNhBVhD8f",
  "key9": "54XJ7V4QcLZUhQETFxnz1VEVNr89UrCRsa4AbcvF214kXCBqGH5xwmH7wKEjxFgMsYKPhNmgJFXevFp5oqGSCDrA",
  "key10": "4qBmjgDbmM4mNoCPsJj54GJ6F6pttjUdESuHYpR2R2uw1Yy2ApAPSx6TzMEKQVX7YUviY2DT7qeSsAxqKJRFhWvF",
  "key11": "33FpiaNEGQb3EBk28KTsfcHKTpft1NRFUVUZqX8pEEzZ81fu5y6U54MuWNuT6EUdpMBMvsRhc8QfDK5eqagFFBE7",
  "key12": "4MMsxYN71N84PamJmpMJrdD7xcRXxpTHbWbSVGhuvNFG2zucsSPd1mrTgtuQV8Rqn95cWceCuCrsi98brttqb9TC",
  "key13": "4hrEfdrKn8X9X7PCSJA2WtMR6HhCJ8ZBpBiDKmNbNYMWM3JQWfnVwghFme8jLfQ7xmYVjNZ9Gp7G1keVTJJsVSXN",
  "key14": "5xCyGy4NwtPd7xjbucNUPPQxxLWA2nRw14mRWKTBU9QLWdobJswzN9yDxMTHrpkyDFyjveTxhFVWtMPb6ZYkBAME",
  "key15": "2Ak71ijiWGdStyf6ZLKwsrBLdjSFmaHYtwmcwmejbXdbBdbFGwMrEWyMNyFKLM45HA2X4tLoDUnaBDa8Qu2Te1j9",
  "key16": "4DFRNGgngt8dwGQDJJZ7Y9Qc6vgzg9fLU8FH9RtNmkrFHTzB3GvhbNKkZR1LPnh1Tf1h31i5rzPCnkCSGW3NCbir",
  "key17": "4fyusnr5tfTwY4rpp72Unwc9Z6yZt8246yJCDwXmpumJTXgqXLLREGNid6pvKPWDEF2jEKtAXpE5ruaMzc1mL4fg",
  "key18": "2ZbuVxpwXTaebw9Xk4A4rCQ7yzt7YA3mFZXNYRVnHnCNbGazZF661mjLQQzi1d8aaxdvjph6CS622qxj6hCZhevf",
  "key19": "4fDqYwugSoyB8ZpMmjGGwzrRGLA1JCR7PN3hdKpvcgB36YbzBfvvDB2X3BRmCLZfvAj7oCdiS8KtQ56dwW69h7Sq",
  "key20": "4gdrJgHFooSmcGtZJxGpc7FVreEwS9jJGAuuNkBfVXbexs2raVyNzsjkHvQVMpZQQwVQmtzPvdydZSnWTdA1Bkyk",
  "key21": "3rbTvqxsoCNdqv96UHKBv2AHardpiDvYrzGbrsmLsUnRrvXUYdRCVZ6eEpQtnF8RJdypBJD4qwUPahjqYfR1S2q4",
  "key22": "2ftde4q5Lh5onR69qtJVFCivLkyCemH3tJCf5KEzmk9ENwm8kEXw9c9t6AfEgQtSxm2QbuY2gqATdsN7PC9ETiB4",
  "key23": "dZuF5VMM7q8Ucexz3UUVDteLAAdRhnsnzKRJwB8Tnk5LYTV75cPpR5VtHGTaf93EnAxt2pjV2RNYpG4ANRrJF3M",
  "key24": "5VpYW78hw4KMu2VCtHZ6HAYgr9vpAM5G4hGXA9w1xmfiCG3d7xRbkrjSVb93rJ3EJdoj1527TKMLNjmowQARFwPL",
  "key25": "3uaq2GrE9ne33c488SUuokKAr3zgjqET41dxstJ3xZMJK1ADR1Hvgy5r2RnwXV1vFMsDuexPzdqTCsDoWuKhZm59",
  "key26": "5u33Nnbfp5mJuzCDagQ67LdyVBdYDksNxvX6jeDAbSxcVGaWPx15CrroEkbPCVSFpmSewp3Gr8JaP6X1AsWoyVHR",
  "key27": "sQWrERfjFFwopaSmnE8bm1jRnZ4wiZ47DiwfYhMLfmZYUA1uRN4sVjgxnzA1gcezjYCCuaicaLhj9hwyj2A1fKH"
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
