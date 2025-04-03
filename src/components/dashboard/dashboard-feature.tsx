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
    "4avASWfuBz7Ua3qwqqRjgWdKHfhScSqkSt4jHGSUAz1g2XbHGL7GQeQABwF1Vad1JV92uV8A5xDrTxBKvicZrK14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZbvMWtSpZhuD4LG85bxSUhANZvxfBhnYZHTUPf2iESZ8cnrXYcBzUQtjHKWEpiNqnK194GRsSu7Krd18q59J8zc",
  "key1": "Ey7m3NwfU5KZWjvP5LyETAEg6LQAZshUDYMSfDiNWXPBmGr24XMCNjFvZaQ8vthCJoPa4n6TrRh73TuYodWuR7b",
  "key2": "2PCpCNgW2tVBB8TEJG7SkgWFTLurH3jsU2UrmtEqrQSvV4zNZ1Mj6RttWHuMUnBD8kd7bSMgcoUpbtKQ9DMk2XfC",
  "key3": "6anRsjKwrxbcbHzo3ARmCYm1TRfyHZ7uX791wdf7GjiRydpDMGHNuKFKMMvfj6xYuzaNwQU83S8KYV21ZcwZwW1",
  "key4": "2tWc4Q9ChVTvMWo7RnHw8NdLS7ZwNDdMuNSvvmRWA9fjbsDk9tqiKmidX34CkMu9QQkhHR6wHiSX7F174XhAPRZA",
  "key5": "FSNwwCwwCKLMHY2pR2Ut7G9MdUCYq77JqiZYXut32Q2Q1t28fVDkDxy4523Ng6iXnnAipQgnzedwbaK5pLjF4T2",
  "key6": "2bJD5jZPtkvnrnzXmY27ZyF6etauFWPwwD1Ms7YPJ1jBottW9RcyzavpJUUAbVSkptFa2bAQg3AfttJ75Bu9xTRD",
  "key7": "dQnEbvr55MaBEeSJcXBcBt4Kx6WY36LJPHYfL8Sk48vLWPs863ikSam1cA1oM55bJc2UGN3zbaSaKsdSpkajU6a",
  "key8": "4h2joDEC5uogufLgt83X6JiSn9EpfUGochi7ZGqzVCMaRDzQmvvMzh7c6GR1Q7PJBKLsCjVkdMz4Nk67W1BqK1fd",
  "key9": "5hSWWbj5zp3eUPKmZjZanPrp4dEWja3E5Nu9F1C7G6w4JH24FFQs6cKhxD6EmSmLcUy2NZCWQYhwzQkPAx5UErPr",
  "key10": "iFHtHwqKjrBTbNHWbdtdggkzcyihnxmzv5VEVgPnixL5B7YEf6mibXKerARn6v1kM2HTBzKVXw8u7eYbAqoc2p3",
  "key11": "PSEjGwfZuYhgThtu9NvZHz88mkt5XdtePCF44CXNXmTtPQVun2BvfdgAN9PPq6VioKUKaAtbwko5v18i3kK1myM",
  "key12": "3A33A8Vdp92eNJRB6V4LbEULYbtwB2bZumxiorLYtU7dSPwxSFtf38NxFKhst7i7Rptqj3ZV5JbFtV7sUu9RfhcZ",
  "key13": "2aPQrh5oj3ZqtFh5UwSu4G6kDui4KQTYAGpCXDNvqoyLDAFXtrEExf61pWTPJpgRLT1972oJiwV34jFjMdSvfB5p",
  "key14": "5LZa38Zs7j26hopEmo2odBdXK34ku2se6p7Zp2PFZQ1n9sVj3EGQ9ZzDgNTMt7831PGPJyGMdprfQjgpDJoutaUd",
  "key15": "4z5LcW8THRHnMJPfD2A9i25NXaHFyx1ZK7X1UuNAyVKU6PoRm33udMaRpXrvibZoeprvZY8WkSK6mbfpFqCo4BGU",
  "key16": "5T1KPuDJxFobqWNCDwcj8Lq78s8cuTZcUEmaeSxhH4QksbQZGj1r9Y4t8whFJdMqhd42PFB2uzMiTJretEE9Z65y",
  "key17": "672UXbe6CbqAeQ7oKdUfLGWPwYSSF1yX2g6BZtgvaFXUSNcda725JsVnLdoseYx5vx78AHCm6psksxwh1CjYCtsK",
  "key18": "4KFfnw7fvYoo6b2srMwh7AfvQG4hrLJabXcB4jY4PzEwbpwhGejG4sE86aGTpBM61tkPPQXz6hjtjFi9RyGPekww",
  "key19": "3zUbF7LW7qw3SuKAfAe7vqSdT9pB9djH7ynp4iECtVDmLGXPk6Tqv7QNjgvrK4h5XRkYQTGiDutQC5ui6pCtHY6g",
  "key20": "4aDEVfdW25yBn45DvB7vUVGQdNoURqrEenwNqTXSGt57w82sjN8pv7wJadXpLSba3fySwZM21PhohT52WYRDG5ZS",
  "key21": "4WHuzmqDivL1yZ7EGoPQmdLCA21qNGmR2qWM7LjQAsdfrqmYio1sTLZKqCsFwTDVrwEeCGduCaN13ifc4PeUeYAC",
  "key22": "7SAbQbfdey9Nn2HnSS3NvQhbrvRzEMqZ9NbBkMvLACmLakv1TQhuubnmFDt5QonXKLit7hXtz9JAcojBDJSoEmL",
  "key23": "64Z9quB773rbm1bLSQBpQHKHiuFhFteUHrEDcUg8oZaUgDCeKmf3D525E3Q2G8nSKWetusMEkseAJ1h4JABLTKjG",
  "key24": "6E1sbCNrVsKbXVapqXiWKhgwcvQ3H323w1DAAfWJYWd6sYxKdotdxogGSTbHHiB2Jjb8rm2U5vVqDmKg6ocatwc",
  "key25": "66vkBBFd5Gm4dbL7mthHDsTKXYAst3mZxU3XGjPnU4ztbByAAjq2PETwv42c7Sxip9AVF6EkSEoNeiRKzizFAntw",
  "key26": "51q1wGZ1XW7a8vHs4opPoUPkwFHd9ALxf4NJYJJ2XYzMUwpg6AG2cpg4obnurEekLL5HXM3rGcKgkS3rFMYQFTkf",
  "key27": "h4cLR5XLvv2aa6UKf1yUyuB11UqvW7JXDCBhhRdB6RoWnLtaJJta5CrGm3ia7132ak6sofpKhV5eiQdcdTts3J9",
  "key28": "2KgB2me1JGe7AEp3AachNH8rjRn9vHWWifg2AVZLruynB6VBjbWCmTQcfCuMzQbN4LeYLTFFr4naAihbjkBPtwuF"
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
