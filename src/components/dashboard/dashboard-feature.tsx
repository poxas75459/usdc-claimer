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
    "45YfaaNqG8nWQ6M1b1u4Ey2ixmmfpCEVEPFuqTh4Xk7t1bxR8j5xaZVuEmPumEhQqCjARc1EpiXSGppEK9QQih2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NATF68csvemQn8CeaPeH8eJ1AcuFX8k9MpQV4Rw68rB7y7uZb1y8ijJxg5iLE6zgpeoCqXUhGiiUCAWsvYf6qRu",
  "key1": "j4dFYoEAbzjM9Nt47EWgJo4CDMSJY2Uakb9YjLiY2d1YLkvxC8gF68goTxmZ41rgGLssM687cL8gQFtV9qGM4Uq",
  "key2": "sinWxMxXsC387fa88g63ozn2SWJaaWNxQJaKT15gtmqp9YRs5H97NGr4Nk5Vr5J6KJHSszqYwssXBL67jv3LQsk",
  "key3": "7rihf7NWFnYiZdtxrv7agL4HjJdfqi1LeAtDMNPq2nE2CJGm6FN3LEd55bCsbNR5MxnEF6yuRDA2i1rDJn1GprB",
  "key4": "59FSKsJkKJvB2fgD7q82BuE2qJbimx8q3Hs5iVtgr3poH8VJoyPU2FsCnAtmNZmuAxL2YhotyDodjh5qNNm2MBij",
  "key5": "4UkDydDK8LUwJa3uH8B2xRmDpPRgNQk7AJmqjWj4mB6cfnmi3vCMbkDi5RnQUDqQ8eLzXVNXoVVgVxF4Dfb1cRyo",
  "key6": "2grrCWrjtnikBABDyNUuRMfzt25HRJHrCugX7UfRyvTzhZQoU6ynMNtZdjdGyJUGPKuH56KpaXL2wVzJM2QRGXWU",
  "key7": "2qWLuaShmK9iN9EdbsGgLM2KjmuuryBzfTyQ76eAYeUmzSjhyo4Vn3ZrbjCoMmLf4bABtRvFyKSVUd62HT3Kiepd",
  "key8": "3fPh961nbXwPu3oKr3NzphtmNoaq7cLxtLNxS8T4EHR4BSbstSVD3fXkCmP95gUPA7HoA2FqU8bZhXSsjLZCuHy3",
  "key9": "3Rd1Q2RPqMQm9sXGt84NPXtm4ae9J2jA7RoQQbcZ47RSPbgXL5M3rN2XNevkiDDHnFoTiURDUTpLigEQ1tGQJt65",
  "key10": "3qdhbHBC5Bgg7v7tDDMLyb8HWim72qL2YACZbkdENC7J1S6M41h6jE8Kv834NZocMPfoqpKPBSRZKRhyiLHk9rDR",
  "key11": "4DYjAvHumLAYhEaygYzkVoCQoF6bbZT12MsNJMsZDCuzcdVrwa6Mfg38t3jDngCyAFyEdxoqaXm61Q92hq8rdrUa",
  "key12": "Prwi49eZ4XYM3QCZbP8gz3Em6GBPet237Y9nVncgxW3QjZz3tv914rGEZDUzPJrUy4xFzJCJm6XR7j2yDXKgb8x",
  "key13": "2aqZc9VgcuYnRkH3N5bn3wVjP6CL2QskBSKmk7Unot1oqFfrvSW87SERqXLSmn5zeHXH8pd4qyUz8vJ86BnYU7mM",
  "key14": "ej51kNzPpAybBPUKfdsvK9J5USLpUeX98i1G4oLxT13vkntfbsR4HLXtVFqaLykeShZxi4ECnzsNQ88PZNNCPt4",
  "key15": "bYKeC8oN5njCSMJpUzi4WAV16R3po65tGYh25yDzkFkZaSgDaskEnYbJrcsRMo2RkDooXvkRq2SbKuhoQdV7gKp",
  "key16": "2iq3pmgpgLwkzhtkY3gC4XRLsVVLmFW1C4ecvRHU9RxDDf8jBNTNzpd1g2Epv8czLgddADyzR4Zxxg5KUtZqh6Hu",
  "key17": "3ukwCJeUo5mw72pLu8N3xuYk6F24rWL9WtLnf4Pw7ALbzEJq91UPQZRruUnxAeZJvidUTvncJzUBBhY9gzXmRLuV",
  "key18": "3H6zx8UEhL9qjQ5rDpJf8jLwa2d9URY2AuA8GRaEQXFMqVWRGYZYswn6EGzoP4ffVzas1XNW6qgcvaRcYrJtaeLT",
  "key19": "qX9QmSDoRLssdUdC4QbQcvbRcWmAnR4gHMgVnW1pc74d3suW6rBreME6v2ofMmDoPDkQ6DewqWFAL7J8PnC58uj",
  "key20": "51rSVfS9X4oWSLtbuKVm9WxzN7q9Jo8HzpmRSAxsUQpNR9NuSbKxvqXGr6LnrGFhDpqD47zeWSDxJeGgCMc9YB61",
  "key21": "tn9CagNVjiszVuFrRKBe79dWT4EyNDUtdoXFm2opMJKUhoiW6HpJLEX9Gc7aseESjw5SDxJS9j6iK6iE2HtxhPN",
  "key22": "2dvtMbGE2gK3WUi7T14fNFnMBg9zWEuKiPwALjP2KPQYWvw6sAnNFM2PQqnccyd6hBo1heJjJmUbNjBVQ3guryc",
  "key23": "nSUPzeLNsee4ETyfd31KrMBXaTxjngMhb58AufepGtC3Zgg9aWc7vXPH4zRoNiczF1kGTQAugg9nwomdod7MM5T",
  "key24": "gr1CNj8wQRHFKQGa7bDgnX7SY2CrMM4BYWpFzG182M7gD4AXXSXQTmQjT8t5gKsy9w1vafzBTihaSkqE22JD9bB",
  "key25": "5kR7iWjQoHdApxnE59CrBb87ypKSjiv5eVUJM5reLUVNsuUuqQMZ2KYLjwgHood9gC1usMjeJHYqQhAvTeFco6xj",
  "key26": "2Wdb8PD1BWaYzEUBMr823hnkRxgiiCqJtQ54D39A2jAu6RgxCXjuQYVG7v8tqQAdzuhExyjeAthc1tEtNhmastMN",
  "key27": "2E5hRKnLVVTd7Pvb6vCAgyAgDqpAWraPdtwTUsVNbKaTWKBkVVyNCLm6TmcN8dLkL3XnSfEfRJovyKtUCPPoNbFT",
  "key28": "4UM3CZQ5A3173RwxKJvkUDqZJEbPHGkXNWzABDD4cTz9K4stwdzePm8XtaTrPeoR3hAGGjA4GY38FFEBKLLZk6kx",
  "key29": "3N3W3KWn1D1Sn8peFVV3g3K7FHxU5fkhQhVSuj72QbgqDE5CnfWT9Pgm8z9D69MeDQTKq2opcjL6H8zycVa8x18q",
  "key30": "2PMZo14yVsYHdk95yVaPw3ojtbJ8bwMvzP4hipDwVug8Ch7hfRQQXJxNHTVdqmZRurdhJ1bDKy84H5RLguEzYuky",
  "key31": "5usv22YBDtB2w5R7qSyFp5zcnTSay8mBWyrMJzXhm8AuUvqVxLFeiEo7mQVdKRFP7oFkXHpJtA7un1qwFKph1KN2",
  "key32": "5kAfxvWF1p4r6bZBY4WRU1VzpkeyFKXbWMEEZ41ZqvtUVkC4LXGTUuhq8sKMP8wzLZKE2ELBqmqTCMv9GpYuingo",
  "key33": "2xuKBgvbK68f1wBe7HL6aqcoVUP2FQBPH2THLqjsMSe7gPwEJRysdbzWK3cw2HQGrm1uK3L2qx2djUnTZNxpYQ47",
  "key34": "35AYGTbuS7V1cuLBKAPGDPY9SAcLRbCL8HGp21Wje5uMS2bmiL2jF7o2BgwuMf8FixcXPQX7kex3NUyZvUgvoJpR"
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
