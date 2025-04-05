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
    "5HQU9Ztuy7szaNmEAXEJYLoXVbCpiTJPpJVo8BBaSXd5C4PdEwEewiWJndjUq9zFdqg3VR8cguj75J4V67dCRYcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ttsi1KpGarPQLCU8Pjbkki2CKjkzv4STxDPGaPYUhhaAWHsZQv1nTRmWHNnRAqEJbaECtwftxhH1Q7uwWsFjotW",
  "key1": "38FPLzcck5wseJ85HRFKcvrVKURCBA8vUUSHaS4jg6Z7GC5dgxvY3AuZaKb34eei34rTeg4712efWo46yEWmrUyH",
  "key2": "5jAjahfXTzfp6AoRNsmqkcsq5vYNZFigJKFUQK54VTuUKHX7oHyFeXPvf92KXwPWYUzWB1HUfMmoR3xv962ngQxH",
  "key3": "2iB6hwABjHyJskxp2E1PQmnUezsvhSEUBkc9N4jZx9iBHtxFMRu5aTKdZvXoXKChL1fZKvWqLyt5GuDR8M5kKJkW",
  "key4": "4S4xoChU16kFRJ6R7HzEazrPbrWaDweFu7ud7V88pkHzL1izXnxcSzbHFcbieE1zhNk4avkTEGmFp2Ej3i2GpC5C",
  "key5": "52gh81HhvLQv6EvtXE9JwheMdVLnio5aZpUz94XYpLDYHuMZejaa9HKudJGCACvt4T1yzXXHNx465kHPEuZKq3Dv",
  "key6": "5Bd5vpNiTaMN6TxZ6b7H1ATP3FBrEZHrEQCiJw4vfEQoHHqiCoazfzTqoXgruaVvrqaKbrnJFCPGUmUgxzxibfB5",
  "key7": "9ztiNHNoFZYRysLvz6ZVzLNmXAdnKhqWcZ4dWCckTePAuKcmpeyLcms1SUHKoTNS8BbUNHfBF5ymV17vJmbNA6k",
  "key8": "GJTaEuQQ4rFmY8t6V8V6gpRLBhTQwbxzHRdzadFgaoySpgRbQDnu8PH1eBQiARZdjdtEwET3uLffyc3722cA2FH",
  "key9": "4htQkVn34ma2jTgkc3DMRVkSPMtFPFCoteV53jjJ1rxhoXHa8tuqaz8vjAZSVJYJ5EJynM6wHDznA5MzbruX8RfX",
  "key10": "5T4JVv1DeMqq3nSSbp5Z3LbABuNckkoqvXtaVyKCT8Q7TSvPn1UKZEFS5Bktyn7oo6ckWfrcguxnHtfMaJbgqcGH",
  "key11": "57wQ1JiC8XA1Pb6tiE2XR93Dx4ENEVn2YaFjQXtaStKNUUWUdYCxW4asHZrVNFYiyadBhPfXUamSAUUMTcUdXMHd",
  "key12": "XfVZGvb9s9cEr67A7x1izX2gpapwLRCNZgY2XtXpAg9gR7aYmXkJv2V6g2KycjmjQVFn4VmTwp1UPnz95Pzjp2H",
  "key13": "3jGtpPZ3eoqLhw6YixmZ5j2p3KPCZcTGPcucBAKx9UNvtnWEPVaP9px7zSRV9Km8BsFyhcDXdwZnEdYWRw8vDzv3",
  "key14": "49PbouneTCN8CnJnhk2kDUBx6wEpyrhjGkZVkjFuxAEH1NnaQGq3gufcD8zUfNEYH5JKQQBCeW75hTvYS4ndgNK8",
  "key15": "5jMR2Y2eNcnMTLQri81FAs5oGNhFrjdfxKnUU3qQeT2hwPryRHeCrVQ4m6HLHmxYPApQ1nX7cw9iY897ocBreZ1E",
  "key16": "63sgrmH9SnAGAXgkP5jWno97wGuQrAtfU8BhrV3JiDYfz1ev9cvYodirYNgx9kRNWMHyA4L8YyM1UhFyiPf1Z6f6",
  "key17": "5WnpLp7RUDbXeFfLpvZEXF2ycb9XodyZUf6n54GHbAetUnvnBVKgb4LuGAWjHBCu1agJGd2NAViSAUfVbL4Utoei",
  "key18": "4DLTCW2egAsk2zJxpv9kUABix5FVzME1iJ4aoEPEirTm6TFziULWcogidSTdninpKDSRh4xG72f7FgFGPE1f3Y1A",
  "key19": "5uGXe7KirENkP4kcz3VMw4LBdLuBp9cYiqGBr3yyKTRShbF1fvJ1Gr1kyEudyNgcrqYGXCC7XkScmgeqWdY45omo",
  "key20": "4DZT72kUji6ZsjXQspALMag7jrghisokq1UNhmetWr4gLvunDH7yrKUfWPTjGK71cGdCxkdVyKtGftXJ2sywLcLj",
  "key21": "3iidkJpovS8L8bAKBtxJ1nh2J3UGJB9FoyhiWH9nGU2G534c8C9ixGdhWoZpfvx3H9Gup6e73DW7BhsEu5ePcQLc",
  "key22": "5j6iCb2kPFfowJdvoVdFLtD5k9S3pPm2gEschZ9uomAFHdthyTfSEz2R1u62v6H41unqJg6TrMFmAeTM2vsTxNzS",
  "key23": "2MNAgwimp2hRdFKJhGm8GM37hsE6BGLrYj5nzadQe6KzMknV7HtfuzViAiVz8Q8MNHRumyFJC7eLAyWJj5srWKit",
  "key24": "3WQvgxJx6HKyUKEf9iBbBf84URFmYtTsChRgG62s8NDha9nCDbVKzAH3wJMYTYwj8mUL7SGsLqUPQkhKFffot94J",
  "key25": "2syn4rjyZWJ9Z2F5gJtQdUdLZXSWZf43dy5wGDoCvNBkVX6eJazys7xH8omcHKHc9Qj5DGJjLm2azbk5yoVxFQgV",
  "key26": "4eSF7tZDA9uQWJS4Qezh4iNo8aJXeg6YXFDjDbhod3M7VawARF2jwndsKT8aruWwszLtKd3L5T14DQkHEckw2N5Q",
  "key27": "3VatEv89JTo2Cz4AF3sf4aUsXr7MB3BCtWo7MEH6HMrH7Nw35SxykEcgvi47A3N2jCQYZzSRHGQMPxRDYd1svLay",
  "key28": "4v87WoZgDYY3L2CpQ3JPKBZ6u1NnvCuxKZzasAyRJxnTD3knovZZ7P9rj2pzTCn9ofntzCsExjujQAk6yomz8ivA",
  "key29": "5bf4VC7SQCwVoK539C5XgT9ooSFWyDwL8K2ifLjWwTHgkWTS22Wdwep4MAC9jffxHVNMapMj4HvvuVr8cNsP27Dx",
  "key30": "54RdUU8cukLo5cPM4o7GbMzTepDwcvgWFTtBzi66uNWeok8mtgniCb9osKmp82zt4sLDud9XviXveKnzVFV1AZic",
  "key31": "36QWRthuBRWWvYzC6M7UsLBt1CJvGVyJdKPfzRiy3KgZt2zpP2Fgw5KWrh83S5XHJ3pZ2nqfNzWjPe3cAaCQ9C7g",
  "key32": "8QRVNGcLSJVCKtfVhVjp3iR5rBhtERjS2qaFAcBpF6QmaPGSq2EmNjP5J7aYxVPLhpfQ5CiJnRkKwjezw928dSV",
  "key33": "3ueDdhY2dJojeonyr3sdnYxkniMTjWWhihNZVDBHNj5RfJHRAfxEt6dVq6dtXpVmGBy9WgFCb2F8PLx3r87Hkvz",
  "key34": "2hcCMZtoBSe1S1BMhpDym8VcWnDbFzPW993rTkQ3ZRdXPyjXWZEHyUeMPTRo8HDKNkxwEzCdPH5grZuh8peEDHf2",
  "key35": "5DcnFKska84Y8zACDqGA7vYGTPZn5Rcbavttq9dStV68qE2GUYatknDVaK7iQP4pUzgt3EEVctj9NsmniPMgLHCB",
  "key36": "2TZwVvyBcMmVdQDPRJD8JomVxTqbvC4CHAfpEV8FMT27BusoYErwc8MHX5DtMAJfk5gvpvDwsGj1BY4VKgEYNvtj",
  "key37": "AUZCX62TNxpXj7L9zjDhDr6b9GHeKw5JWTHrtq4Xk9kZietZmyeS9cnQMWcEg76BJRmC6YU973yrmumg8afqWVH",
  "key38": "4de52Xuh7EgTfmvXn5x9sVeNFbtxWZc4exhXtipxbQkhjHknesmCaVJ9oyKHYPYx5gGQNimsdAVbNDz3HdgkFjay",
  "key39": "9tdyLsoeEzBRrVkgdUr1JmBuCkL11w9NHtJ91dnf6GjvB3TMCbR3uM1GnRHBdKVhdQzfwGjqQQtSQAsJvp6X5Wz"
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
