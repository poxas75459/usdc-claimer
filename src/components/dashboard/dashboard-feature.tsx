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
    "3YYggWi2Qb1jxyueLDuCdjqmKBxjEsULYuwDFmcJxAy5P6rAPMcMi3uxDEHjT1LAr4HWLijym1v2LBtGEPC8UwVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUWGzHaGijkuWS5H2kqHLwewnQ83u1huMbeVu1KeLtJnCJeEo9zBuSvJXbStH9QBYxszk1TogTwRXv78QPUarif",
  "key1": "WvCgyvFs8BPyfMFJUbkn1s38T1yg6Qd19QxWNKRf2KsLieXjBzFCDqbGgKVmif2fJWS8mURQHTRoL1MCNDAVPQi",
  "key2": "4Uw9AZBbFBorcGr1x48ybK8wFv9iWWnA7q3eCWur1BTTpquvZKfrogwR2fNA7unGfHfSJouiuHbMZcLf8sqGwv4Q",
  "key3": "2WWGPcbFNRfpGu1WypyXwSMXzk774SR4bdvpiNibumnenNKh2tjjTSyGWiRYTfa89zMbqaRVHi9V9EoJuU8fSHdg",
  "key4": "5HdtRzVxdGNNxJa7LUHDnc4V7SAPzQ5Eku3rxzJidZgMDRV1oqVWhLDeUGppNq1HgXGb9vZWEM4pe5zpFwxc7tcQ",
  "key5": "4zLZeA5kAPKU31rhqu8HJnLzqXcREyEZ5cjT3HEHtF6rQ3kJBzaz9o5Ej3u6sF7UK1mvWKjbVMQ5EPddHzU7QALB",
  "key6": "49coHwVoHxM894vxZZRjcc1w9Lbsb9y5g5tJAdoN8WauN7kjnSUXAwUKGGuCRE1JnKpWcpo4mbJJMPuevTGk7bY4",
  "key7": "4b4h3Yphcm2V3jaM6YXNrYcoMQiycz1iA9Yi6PbkcUV2ifXwC3dbEPWUKw7TWcyVLrJpfnuoLCPWZZftSreaBcQf",
  "key8": "4ou6iY3H8Sq1rb2odrCRHJv4QmGtMAfqMXKwbJiMHKH8rPCxvmuqrLXqFFByoEzeLiMT4SPkvQUeBWeWFjrCJEPH",
  "key9": "5aENZ1aveXquurWdFNVJLGw6wr8m19LXEmHyAP4ssfqZr3VmG4VD7Ng26PVnKDnuhhgmELYknnA25WnTYA3f3LBx",
  "key10": "YNZi3YZHRqqkiVbQN6v5ufZ2x8fJTYmygv4rqFi6j1R646gFVgE5eHA7DUwbxG6cKz1PdymqEBfBAzexiBwLeam",
  "key11": "3YcrbX2Z4QPzwk71LBws6vpw8rq8uy9yB4Ebot7qv7hTVQxY56S2rYRZS7kLX9jL6S1R6C13xdYttiKaFjhiuFhD",
  "key12": "2ZsPcPDWYkFn4xsmmTGq7NBtYrSEcEVht8X7cLx814tu8ztCVYfrkwpPoDe5YXfbvBrQ7cgMXFio7Kqtm9Jxr8m6",
  "key13": "sNG55MoNJahqYsT7Coxybt3LpPBWaX1YoaFRYjuQaE5KfUmkvQpKcbMQNUmmmQ5Pbi6y2zU84VxJzVFQ6mNjxQp",
  "key14": "3FnRiPddzCsTs4vYrysbzXWpYnp9nwMQCp5k1aNv5oHd4hv4NqukWF7cDmuS15LzWwDToPoAW8P319NHVZvgQfK1",
  "key15": "3Q43khNpfibxUEoFxHza5jmyG8dQqrJissu9WDzTVtmnFxGtgNEugm6aSEXbki3Z7s6ScnzJwXfeNNXMZcWntwCv",
  "key16": "4FGX5PrJZ4myUrKaiAmCgipxZVEq65vJP5d1EGftt6uK64ZaFqqXtaVsmLj9pNRN3eCAxg7Sz6oiGXNrGTNVyJTx",
  "key17": "3tUFpe99ogkYajk2DUatJehhpkJLPtDKpqfrric5wEyNPhLyQbwfLit4moQkGnJXNuvwHxgKHdfGnjsJExFFisLy",
  "key18": "4Vjiwa2QckAn5X3i8psPNyZBs4GXC7EN7EYSWmVM65GkZfiCvXywJjcG6S9Er9BmwZ8DLjsdFMTfj6vUMR6t71XD",
  "key19": "2j4V2kX8tq5urdcoNSCnUUMgYdURA4qbkbsw2mLf5LaX6VUJSjXnWZn1TAgC1mZoRM6wRdAmLEFGTYWQiD1hPosB",
  "key20": "67NMFkVNLDtBsUaWSh3buCLL6a5dGANC1gC7aFLvbgR5GJ9xiZtQDLLY84zAVg5zaCnCWthc4EbJmL66pT4BfRgT",
  "key21": "5V8LUZYCNdRWLBv8MePk8GR7MsNjdmdqgXKWDuXKqWynpSeKugBsGBDsCPFTZ8EV3D32SywmrjHDdC6fVfFCp4ha",
  "key22": "5NXd8gLy6sD5AwLtbfJ5h4KLSQPCKwNoYcMV2FpAsUoYRGSkMm7rYXc8QABaDZyuwqNf3PPkKJbMqJLSoxLN5RWV",
  "key23": "6YbysNFs1L1EZGk6Gb1iUtnsqeJkGDiW1RwxgchqNStvnPHFA7RK7KhCgCgKNsKjs8T5tSBNdX1MJEMTFcmjsVP",
  "key24": "RTMMtW8nr1xAvMLKwKk96tW1sQDpN9uiQEnxs2RP7WBibtSiUDCVKcXiBbyxRxWhfQN3mEhePpC6aMYo8EEwv9L",
  "key25": "4QgU9ERWfjHgr9wGze2SkjwARYuF8PgKaaLHzU4nq7qhh33raSLwHoFQirPDwVX9LbFiGwWqQ96iMGCnyKbwBpi8",
  "key26": "2pkXCq5GQNRNwfSJoB2XPnGE2mcVdXfSJ2vNb1Web5yeXkMpo98LU4SPKo4wwoBfMKtYeXxZwz3jincVqZog1Ye9",
  "key27": "2TNhn3zXHwdXvciZ2yoPnnKThACSMWxZPvFGapKNg8eDWNvSqFDnqULnXp75a5Vzni2rZuDk12xPvZ3zMEbsLYyu",
  "key28": "rpNmfjeWMAbSghdnsgmipxzU5ypzs85f2TUK7BSo515vF9Xtf792TtuFRra5eSfDPj6K5SuWt8uZiAwPQ34EQHw",
  "key29": "21KQhYRr4JikDZZKxYgYckgDLtUVBzvLL8uSzzLoR4bDfq8XevtQukJszdG1VHGhGXKvrm3BjvemUWE8WtGMHuT5",
  "key30": "LZ3Cy8j9ezDthm6nmCHFRdW14pDeVvi2RFjr1vN3arhYguEhPRqCUmiMAatENXdqm65nBcu4aRguUanVpcs3o6P",
  "key31": "4TyE496wuLiJwWHRW6Ue4AYfDKUPG179zg2bse2jfC3ynNosWYFdVJK2f23dwGPjYtcQhJv4M3zhve1uoYgUqYVe",
  "key32": "2GEszKHsN3zZyYdauxvS9oXUtZg1Yu2diqWakxaBoxzyKFvfhxq2kUcBFCGf4g7pNnBSi8xLDk5YC9MB74RnC821",
  "key33": "5Nd4cdbbeyajuzLMfugSr6bKooqoAneDDvAbPghMvjoQ5Sp6SX7xP16DCmzRUcfAmkvsHVSnrDY73sF7QK7MGxeD"
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
