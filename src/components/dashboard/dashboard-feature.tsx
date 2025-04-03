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
    "2xaXEdARwTvHzQTB57nHJ4Tzwv1DGK6hC55ozHsKB1JR9zQqiaBamiFNKNvFMZ3rwivVv42CzmGJq9v8y2tiDk8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sRrN439r7KSe4UJZ274y8EaDR2w5YpiY2LaqSPe9TaNPo7ewcaaysQjYzoT96MZmDEct7StnBJS3gsDLZE8QUB5",
  "key1": "4N931moYdSFuBHEMj7jz6wDYCHSJzBjJabtBGJQM4EAECwrbfdujpwYTi7qb9zUorRJbgi7aZoGukiR8DoSzL34P",
  "key2": "4RFBhkgymzjWxGf5hnswDsN2Dk6pRuFbZLQCyjJ9hWhCeJUJPafPUBxP7KN8SL1Yhyx5JBbiNXVREYBNhJnkYPjE",
  "key3": "4A2x3cqcuNwCytCZnohzEK5BNAA8nVs1vNxXbi2PzUBCvYYEewy9VxT3ELauN77jkRdBTnWrqXhoTw5fP5oBwCGs",
  "key4": "3RStwEbLmoME7j6L5PY9yXQgJqL2x7oH3VCtgQ1S3R1EJf5t6LtEsVXxWdGWiGcxnYcgWitMKDAhrE9xy7UxT6xq",
  "key5": "gAShY7x6G1ucJf88fT4xEx8EbVkmya3oiz5BAN8yvKd1QhSNEm268dWDEmbrNkD96Cb7PdTFwsDVpXSoJNFBV8s",
  "key6": "bgp6VCiL3SXgRmnK3z3MTNF4Dkxq3gVAEBGZgTdVon4F4JpY5u9XfY5XSbFE434YbzcnjjM9iZiB8HDWodnz1ev",
  "key7": "3yt9iVTc3MvSxujQHHcygLJ2bLW7topdZ4ffmVqfJWXComakSESLQqFVokoMvbdWBsEKiMrTuKbhY43gY2BJRFBs",
  "key8": "356ZcrsRwFB3t1tnutjWi6y5SYHbiDrWfPTomPDkaZoGHiHJACAFo9xArRufdePakFNyqpMyFVizh21JLdkhoyKJ",
  "key9": "4aFFQBFLazADki2o9zFEmRHh8r4kMVz71kmujyTqcR44EQrFf6xdPvcxS3yrm47AZqymyEqp2uq2nBZmdYbHNbFh",
  "key10": "2qSG7LjZN3oTDLCUqjEga5tucyCyPVCWTwJDqYsTMHuWPgFsRZdKJ8wXXdyBFfX3EBXSzmcsSfTYJ9PSvzgqxW43",
  "key11": "4SLp7gP76SoCbvbXhpTuKHKPoKbSSqELvKhD9Evrn1XMzgsVktZX44NwvrQE6GdP8rYcBQSeVSobGDXDc9Bn8zJm",
  "key12": "2AN1g2ocPcPnh7ZErNWQhfbxnZad1WbgnREYgiJpQijKZ4aR16fKikN3c6wigNt5Vb8nSA3Tx8aSekWzvrBKHgbh",
  "key13": "4m76vMA1nfgkc4U6DSjX3UAJtrBc1o611yD9J19PGwFm6otaMxF1cNCEGRWAvuvunP24VGHbR2bgH8tdVWi1rAuZ",
  "key14": "3R7MkxY22khgRqBjohyTiJGFnqGZmiVgKtUuHGRf5vALxb3A3B1tWSyK2tRNpn7Asd1UQvB7wMWcFeM1d6fBB5h",
  "key15": "3Mp3HLjCKkbiPwnpuEApZYdbBATGrSYZcNDJqYcMB4ABWnXXweKTamHhWPny3SGz263vSZXEjgxk389G1MKwyPJa",
  "key16": "63igobCmBJ8HJLL44zc5ajctnzzMX92ztrNpuMzhuWkbeoGz2acozXP5Uxse5CVfsff1KATyG7vAnhkexAiJynFF",
  "key17": "5HQpj8w5GECugD7K2iTgR4ZPXT7xUAFoCA3HhihNKiofE9U8KFaF89s2cwPake4S7QXZ2MwwY26CsVUUvRA5nZGr",
  "key18": "5VDPbCeJrZBfiV8WToBzGmed4cRKzMxa5ARRoSYoP527gh1iDan5kH6mmg7y9N32ap6MQcS1utnbWnZ7Gd6WAuXZ",
  "key19": "4n5j46waMENjEVRBAp96Sf3qA66c2gKAoQZCFyKrA8sVmLKNtevqa11n1M7QATEpguAKS4tsZ4eLQdaKeNx8Mhmy",
  "key20": "HNXRviHfEmaDZrCNTxPSoq1EUUCjLwLjqNRBMYosgWmUdeE5Wfc2jMPhbd7GwKJK7qsJzUUZKYgHY1iVwPbCubz",
  "key21": "kam121Zgz4jhNaXcvCohjKqy5JKA3DJhtJTPA4gsMVjDUUsy1QMEzNNtJja1c51x9G5Ter2kL11vJX8C3FPbxSb",
  "key22": "4gr18H2zafhtQJCKobLQUg98cMytthYUKE3Z1YgvesGrovCpVGZFcVZY2vL2jWZzAR3LB8749x7XFCaxNVVCvGyx",
  "key23": "5p243SQUvjTpEnLsTbcCedQQDDXw8wVU6wEe3CrSFzh6cwmh58Naf8Q2zdpk1ok22Tz8Gj38j8vmLYinVo1Pcirt",
  "key24": "pwtqqKPsCPo73tXEnqYWGFWgQwdRzMBPmuW7Aw7WFp2keb4TdEi8vMzeTyzU3CJSzVnZoRtARf8EhfVA5wvpeWw",
  "key25": "4QX8PrD8WdKtXcSFWr8gpCJQoJarQDrTCq82e64W4yUHrrZToevSh936Dbq2v1PUBjCLkMMxR1m91AZGXo3eNzwN",
  "key26": "64QGgthLjdo843VfBMGizoaKxAm7LwNa6xChHBAUDdQC5E1BMGiS9Ys2GSvSTYNfAiME8HUwc1iEL8q1mxnkNA3G",
  "key27": "58UttS4i5y12tvhYStNidEMagMDME9oFythYedMcK2GNdGvjfjUdq7LjeQSnZoL2F1A6aGG7eWCizGh8jduBSZ6n",
  "key28": "5vJetEqsNBNhVyWrPfue2W65p8HMdq6PHL2cTXGvDSjHeNvthSsnZKzQcVGAuwki56cLamUDKhMfBnjS4dMEKfqK",
  "key29": "t4zRqvgUvdmsZUthcvsjsxaMdkAGt7Az2zoCWvB3XiRSfrAPyXYc6tipXsvrncYHpSAHzTFUGbsB89gtSivkxKj",
  "key30": "3qVh5xBaiwaGRatGeqS6W5LWwHRUdFDHKjFGANAjA9t19ZUGVf6QmUFJNiooULD2YqqWvnagq484vjYwfBiNWZWB",
  "key31": "4EtLC3Y3xZbwFC2LnzWB4C4hjVu7Tooje1KKYX8xkY4yAq9ipDxMgPG6o5yBfaZcHo9vrTPVx8T42aeyA8ZYamqX",
  "key32": "62P5Y12aJz2gbK7j8gW3FKUfeqS7CPikAKQ5kvFw66QtJn1iaH3iu7gf6KKR4ZY2v2sXNfvdRqgY9Ds33egNhrMa",
  "key33": "52Zozpyg3PoqTF8vFb3p82Zq4JhWT35RfAsVW5v6HaZhdUHL47EwVLHuL2a9QvAwU4VxPgoGVzuRgyv17kxCvuVo"
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
