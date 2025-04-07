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
    "2uzNfzmeSgX4pErRc4HLvSy9iQMH6pokghHLuUboA1No9turDzvAsCw5M1jDkjadMWRaEetU8s8TjADEN6BESe3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuoYvdd9yu33TDsL2kFS46WHmCB5jSwsbARiatxWFXZceFZNrBeb5Mksns96oKmeMxpUpDJxVzLWrPa9E4jikYG",
  "key1": "51rK1tNxoCqq6gQawxKzoTDFPZY9Byhu1RCxcmzvQ8YutUc4Av17Qyi1SxkRw8QAfVWTHCJwaw1pMniPRtUDsVfC",
  "key2": "3aAFJas5ekqKR18cKAjH3RoKJTKGq1QT1FX57KMjdDXtfMbUezH65KtkFKu5QShc27nkFGvQTP7riFQaQGQNufFz",
  "key3": "5JmXntE4JJWBCqz8iSpmvo38Kb97XmM5jT7F4BDJe6EARkdEZPixhu5BXWFcHhZyYXSeVdTbxk5ZPJ6sbcYzxWJn",
  "key4": "TzLCNZ4oNmRoS1Nahtdk3KqgfPvFv4RY5yQi9NnbUzAhdzWZJcgig5vpEvoqTUNVeen8SWCoH6oZbrKdYTvKigv",
  "key5": "4S7vtwu2i15sHGXvdiFXpEPxsD9Ekaug5peUzjuU6F9rd4S2gEvk7EJiPMqp2Lhy2Lbg4Zcm2MHrgCj8zmgi5EWm",
  "key6": "R89dgudNw91DqTe8SnLapLy1Y2naGoC42C9jBm6AA4dmk3WzMqYwG241GFV4zf8XuQfPS2w8UjuZvcN4UzX2Wid",
  "key7": "4u3RPBcjSU2DKDvecqMM6CJv5xrda1dtc1JdW6WcWzfW7xbZsq1mCFpS9AVc5SfJSKCmte6eWz3XwgJkLGzcWCdM",
  "key8": "57FB7PJCtMGHWLiNu9msHJiR5T5stWsPi9J9XvMxPXLqLjZjMNrVFQWrYZoW6Qrg5PefgK3HVR3DxqXnbCR3noSQ",
  "key9": "3HfCJr8Fd57MwDziGC9L9RhmwxJ8oCzqdFNV8LJw6yguv2jJvPC8rf5n4kzjzKDkfcdTuPkdh8F7LicvWzpYgzzn",
  "key10": "58UqKkcqURkNkABV8Fk6xzajb2RAXtrXrMEATefe7uUCrnAYZg38UFtde5FWYTykVQKkgZ5UrTntnxCP7oPEUzqq",
  "key11": "okKgJP51aVHqjbNQ4LgSG52ajJXTkDZiVbNTHyRyHURWNAL1zQ6EyXtqssyyD11KKFsiE8hLb4RGJJ2B1PW2yaM",
  "key12": "j2ka9hcvejnyZe64mBrkxkoVAtoZxRindKLZDnPj4Rh1Vda9EX2HUvAg8DJX1RK7YLFmtSYcUmw6iVTc76CsSLD",
  "key13": "3fYVi2k7MkXYnFJZQgSDi6BheZtLFjUr2YLsE1ZM86kiEzAkdx85UWt1kz1LTJCgj7ahoKZ55E3G7gd8htzyauQN",
  "key14": "4cXBwNr1icARaJzacGCD6gfpHy2o58qLnzknX2VLjM24eScwPm135UDXnJPuovEbLaaryfW35o6kvBzYSg14AVMB",
  "key15": "3vbHj7eGEGCPHsotetxKAEcweA9BysDpUZ2kaeNChecxtdgbXP2yriLbt7Dz4nYWXGPrGg31s7qwLaUeadSN6Qfp",
  "key16": "5TeLypKDrzDz4Kaqbf8QS5G22f1sqyZ72vR29P93TgTNAac8CoBqXyhCbVk57UEyApesnhhfCqMe5ZQGc4hps7RT",
  "key17": "4YAACkSNAta9hNyRXvir8nvSWTD5jGD93yh8qpSnt1WRAMWmutaSx5jWcuXxPjhsQbvSPDyG6xmLuxBHXcnxHV21",
  "key18": "672VtQ9NmZaEhJaF3eRn2RqDrhHmfxx5XBAfbKthbwEpXjwYW7ZTzfjK7ZmvvJWUAjX6UAn4bGUdDjWgumuUR5nB",
  "key19": "4L8Gdcdt5rJkcahXoaNW4wVxoSzcRipDu9W9tA865LtFbzRDPw4NtaeZqMzcYM9G36KSEYpvohxnwrhCbbs9z3tC",
  "key20": "2yxo3d8UEe6LUNTXasiyBGeziToxyEDL7vLzXdGKZHcFYpve8deUSagDnYhLraQBzB8Cc7aK6nxBtUcawX8tgDKP",
  "key21": "2wsSkeM2GCK6bvUUWbwGk7U3XiS5WajsFuNNXpbUr6jL3EBaK7AAG4tDAy3mbsbbpiqwUbamX2DXf5oEp5bGF49C",
  "key22": "4jqBDxEZWd9QQaghJYwsDvHEq4936bFhtUAHcFbuHSBL1UDG3rAfw7cRHpnrw4D4TwZS94zigtVeojXpQtAehFF6",
  "key23": "5EXLp8SJwxepKqtVoBdMEB4oyBvGjrjDdoadqs2KBCAn69fHFUEqM2eaW21zdhLXn64vjKCeMW9XZhbNjweku341",
  "key24": "4Z66gxAJwBdnAuqjEKzq7uXFfgE7oeZq5NrxkX1ZoWyAjCCvMHyReQcERLPANf6C9ygx8iBqrbckj4ednb7jv4eu",
  "key25": "5Heu1PPnVUdofkqnYJ2jSbWDjE23Yo7qypAwoyqz5vQ146accF9Q5ZpdCMgoRoq4g6ekatsHGr57hGoyq3RSNNPH",
  "key26": "rUdSuaLuNgxf1jWjRLFP1kCVa3TdKo59TaYXvDFQkQ4u872iJon6UZdePAnHwSzDRqgBZAH2zxsqhVURQVxHPdL",
  "key27": "3H3VyarzuifFHmSnW1228pgpa92PeXawSm8kkD5SGqfN1MnxXRTzWnoHvWFtYV4fJ2odHgZT36RftFixryMkMLPb",
  "key28": "ePgzW56Ttt2neRgTMpWr5iNKytypmvgsjRmvL1awrWiRx5wcRS6tuVBC6otkKCyDSmcFdYu3QHv1CDZ9E4QuWEs"
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
