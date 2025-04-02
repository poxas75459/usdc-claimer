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
    "48bqKYhV9GE6egmAmesDZCoFap4gAp1pvnpknVwo9ynYsU4sZPbqYCA6rBqdLzS8uJjEATHwfkVhvrtzGiBf7xRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "482jZtdJcuJoomThPs6PZvpAC5r1Et4qfHKkWPsiXNp68rLY5adXZ2bod5dzxZ88ftbQvGypV7kNtRo38tRinv6g",
  "key1": "4cvSxoPbjJcBEiY5gFENx4ovrvKF5j2FRi6xLRfS4y83WBFAQnYo5eYutG68UNWYLFLjgaz5AwcsMXW7gtCozBEr",
  "key2": "T1pNAcBSsKbM3tK9YJ4HBZsJoF7543Kh5gXyhoBPDrLqsTvj7nM12Bg8NkKku3xHLdo9vEVwogrEhGcMmpfccz9",
  "key3": "3TQEXVWEbNEkAuHmC29okHo8xvGTpvEZA72C39GeREmAJ8WgHrSU5hzmSngxcBfJpHWHDTVen3LJLEZTK62p5wDi",
  "key4": "5z6NwvrtwvPha2fUmpAmNud7Lz82BCb1Es2uPwd4aMNNGpZ4ia9XR1keAWEu1dSFpdo3wrHs8rfQf2jotEzWB4Ka",
  "key5": "5j7q7S6xXDeCpPqoQNyfMVxRejLcXTALsERAKh6QyRe3zJDzgLHi9F2mm2KA4YjnQM61dcoYesNsp4RsqRNBdig3",
  "key6": "9XGaj2xXGMz7gvz33jN3izyho57ipUthg5GTi6EoGVxzedM6aJdtQysNVnyT5XDwEEGUACLJGBHgzW53SMtbPoe",
  "key7": "4HqcvEUUyQr8qqWrcR2ne1N9BEdxpGSiHX5GJxoMRHJqFUhGcQP8xpK3TAgmwi1m9pj59MNhbKn3AHAr1XAdHASQ",
  "key8": "3CGD6RSjAaEEVRrSKVjaVYZpBAEv2fKQDHHbid6R35UDQfQDciU8S31TABLtNUBfZAMDUKYLJEJdbPqwE9uH45yh",
  "key9": "2PCBK8ptQJJYSaDnPruSPu8HNJ9q55P7rzhQH9j3HLMQgU9nktxvxM3P2R6GC7NoBUmGSuJZPoULg6ovUHiJVU9j",
  "key10": "2TxNyuziXe1cwMc43nASngRRVQvWYma5e44H6r4guaJz4GzZMHdKuesie9uD1M7qzYSoLBTBrEZGBkE8b2DpULeD",
  "key11": "2eaUNM9EUxfxtEVeszMuAPfFdu2a6m79RJyeG8UUJppnEBtqDKXEeFa7CGJZz31pvGmFcoLNwPHsS5SDpt9zwKR5",
  "key12": "4ZftJa3yRWezYDJkNTHb2LMo9kurGcuAcrMQt1y1QKCcy3yf3Wi16mhHeQx77abt77n4ug9Jb7ogPjiHifhC8crj",
  "key13": "neAMpTNd6v5NgZGbRNWPoBXNQ9jPDma4qKKXuLNs2yUQUmhR1WK1efdb6aA1rtmiKe5tg8nMDBXwBEDU5AXXk69",
  "key14": "uuTp4uQjca4MDGaRQnwPcU3NVrwqc1TFWmpyEEjBmdRxor1Qy3dNuuUk8LLqBzZAs3MXgcQRdeQw1iwTUj5CtHn",
  "key15": "5oHESL6QYHiCDtQMSWLk8iMoUmNasbvLYCPkkrLGbxBrRPkMPGHj2HCDj6v5Q8LqcmHrSXZbZQWESANK1BFTZ3Mv",
  "key16": "4qZfwgCe7EKkqujnHyTAbfAUbJ6Joc85XHtojPXwtHSSy9R9gTuHz8cHy4nK3h3MXtDnAsZAxYcEcosLNR9v4Nsj",
  "key17": "2dmjREj3wwqt9Empv8y8XyjDSWsfThcoH1DkqKBn9BpcLDs5X1faygF7auJt2qdH3BU4QJF6qpgLky5b4665rPoo",
  "key18": "5w6qG9xpwQQXe3WViBmSmDbVbypwiZGjoZNmqtYLAGsYaDUtohw6JXnqKsSGxir6Y7vkJGPK3L6AUgeJwGbmoULG",
  "key19": "5eKGrPNg2HJYGABrz8neCox2m5WjLdkKXyw82a789QSxMJrMaDpGbNhexrNaHwXyeaMchixaXhdzPXMgKjSZ8qtF",
  "key20": "49sbqaWrSyBnNT6dPQm8cFUHgu4rnESrvPEa2QJ18mtMvDdBszf7Nwa4nmaZHdQyUHJZdBUteV8n3saRSqxZpZK8",
  "key21": "WfPvfm7aXWAuyF1RWTtESXXdGVkt3sv1Vh7fKvwDAthz2p1C8LtYAGsehcr1Tghmt3ETLJVRW6vAxBpvduJgzNs",
  "key22": "3Yg8xVnuigsJYjEq6ef6dJUXiuaP9cZt7ATfpKwmWUoPGURwEGHi3NFd2N8ZbYxeBsdqH1SqZopVzudhQ6Ekj2Tr",
  "key23": "2whb937NUZSvGfxzTu45sXri1xwPoWuu6DNGBQNjfvJ6HunZ4nUmmbdu9p1PKuGn9iaFQFp4SHEdPRcTBDVtwsXG",
  "key24": "3eUC4sRCWCxCnHYYi3E9YmTRdE277k9cE2XHWw3aAoHLjU3TrpPonUfi5EVK2NxPRYP76Bex8kNU5Rzfar4vzTP5",
  "key25": "L6gw2mEnkfCNfd9qqkqnxivxRuXR5ReC6SbU5DTtZuMKtkQRmzsEGewxnycsygV2qGJ9cMbfPSrMnQurmpHdfoa",
  "key26": "3txXibcm7kiLwSCW4AA5YK3mBLV87vVTgD4ypRayxeeLe1WJzfk4jfre7VwdzXV8R1x4Qyxb6A8oriG4KJmiXc3r",
  "key27": "49ueRLRFJ7HWcrJ97gPbLGEGu5hUovzcBdXdtyGVu64uxvjkiuidy8xbMjYvfiSvj51ryQ3Y9Ui19qiNLm8UK1UA",
  "key28": "4WdjdxBkxeBos8efG5wDRxPcoUWbp4YcaMkF1fmeZDnbJKXuDeZgi3dWWPTkwXNB2VeYmHAZjYfui17VPhDP9Lv7",
  "key29": "3sLQj9JiJpe3DZDT5nKQuoc7ReX2Qh1F4DaRxTbcde51X2pZXU53RVjfvyMFbbSPvpKmHRpwHTB6dREd8Nq5Tn7N",
  "key30": "5LRWqbuMaSJKBv51VwFqrAAhD4TCjaeUQYDLicaH9CGdtg4RiWXNY7ixktWGAADXLxuT69AmRhuz8GiwerFNSrJh",
  "key31": "4JeuEa4wievuz36JsH86Xx9XvheV9TPmgoFrZ4CwhZPtFFA9M3rcii3CGJAG9B14FXiC1TspwadT2MQhfcR7sXvb",
  "key32": "4La76w38YsCVwFgf68ee1BXXUCHTcW9mr3ykePvZRKtoBUJYA2fceWC3MEac88wciWpUhfXP3R1kxFVFkMbHV59X",
  "key33": "5Pk9Hb4fviGRpqBUrBhaYhM8uKZ6n9jSgfXqNqHTCFYp7fdV2icqJGd3TRDnQ5i4SGzY35CCK4CY1qtx2wy3hCQH",
  "key34": "39M6fw3SNG9KnqYiCN8jAxG3vqhBTuPCN1fJVCUU7BZemKJvFBkS17q4YqeHbvtgoGaF4iJFwMYeAbCer7URHHhY",
  "key35": "5zfZaC2MMioE4aUqTvtGS6qvrEFFa5EtiFu3EiFtycbda2HgjGCDtVVsPJD93jsJ3cvXG4JV6CaWb6RrcTUeDzFs",
  "key36": "3zqhBPRMcHfLi7h9grGCQovc5oVKkqR4XMmP5TNNnG2nQmZrkYnAVw5vjdHFiGkTW3Eg9chjd7vQxerMME1zZdoZ",
  "key37": "3n6QYt7tfV6MGBe2ut74fTmaQX1jV2N2XoFhoU5hVvPDDZpkdMQ5kXduLm5eQR9LsctM7vWCpNkP9eesSZqpQEdp",
  "key38": "62TEjNSs7LEixdToUgxZwxcFD256NA7ib1AySgW8FfijcjMUHGhmdfR8pPMmz5FpPQCXv18wunZ2fwzxjFxPBNDW",
  "key39": "q3doVCNAU3hUUpBzEaGhia5x7ePvAaDL6LPnMxwxeg3LHns1dWJLd9a268MxzyqVpkYADvTBVPXVFk8EZvCJrLg",
  "key40": "59xTK8cZzEsJNQ66t9bxxasQwxYRfAdsAzwbZQp3nZEY9VEQqt9tqGWK2VktJ9nPUaux4hHQFMzJBiB5Q9SkkD7p"
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
