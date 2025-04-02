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
    "4bAteBmjb6BRLKKAfK5BHEXEEKqePvySAPrq2QCA17grkBEqa6xYugrP3F5g1FSUJqV7NaevXnrXPeofeJNG25q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mo9vuwZUZpD3K8qpMQZXaf8B5xi3Quqo8DS1ekoRQ5x6Yw8qQey54YYfzoQvmAguGmbB48dBaet8TQU652Xg2z3",
  "key1": "4No1ELYNjA3CDEENwXhpzDPsF2qumWPBxFr88xwewUqgbazFfHQm642wFqyV9627SVjAgqYMWM876jJ2SDxZctNX",
  "key2": "3ctcJazCDCcQmpjesFRXLy6agoPzahhwrYTvHNrXqGx8uYKQMn944Jn3moYLCEcS1CM43F1WcRbHpkpSX5L8czpf",
  "key3": "3wS1ZrfsctgVGdXjXCS5WYanD1SmFtUM5cBsfQayTg2LZSef93XACAUqX8BuRzXhJfskGaTLvR4GGcDVKdeFVEME",
  "key4": "2rUnHFAWwK26FYmbRA327835NHd7oCXFXp2kwdjTnLgBTwamDHVaDqzr4m5weVgaMqoDXQmNnxR2yj7dQsxShkFL",
  "key5": "5q8FPosb2RM2ZvrqxJJYMjxGzzDtLPuMn1KnTypd4J1P1zRKadKt63ZvbLsv1WvLq8rmHJU2fX4JaemaBdTD28kP",
  "key6": "3ppG4EpWETwdmimimZeXL6YCWKzRsLXBJMpjpJPFHcwTdmNSvBKkZaePLToyFvBaEcQ3XxTjRxAHFbxsGYsNiZtt",
  "key7": "5hvM5nA2W4pDnN8HUZwRrZjDinXYG3i6yyof9Zt2bgUBowEa1KYqEvka8CaEfDTUkpEABF5xpjeCwJEowNKv7a4n",
  "key8": "5DXnVp6QrmcPz1D4zepCg1hFFsDdPDG95BvFktmeq7qoims3vf3ACYLDoPsNxe3V2Dv6SV6EcznDbYxuHsqfdqii",
  "key9": "3iVQ6EKWQqopmVFXuAct9AGXZJpjjzz6CwzyBgEiVw7xVq8vSXtBdxqYSxTvKFKvZTZCBgqwk1bZ2tGGuWpB8N2D",
  "key10": "27MWhJCsqMRLvz2seDLKiHcoWQwqg89En4hTTxECPh18rGYvSgdFLwqHHK2c9kPng5UVMduz3vp9kG8dFYjvtCfp",
  "key11": "5ruCqYwp39EZztrzb4sJitVgy7qbWurYLosSdCUjswpgwvV7Tkkfv4NvejDmN13VPbYvrR87jg6LRP4bATGSpeHH",
  "key12": "5J2vysqHDJbtAxU2gQfuraH3wkxjv3deFeKw8NGPVkqJgbUUezAEYJAdqs2zEEozRqSMBr8eapixcsNPF6M6ANVw",
  "key13": "2Cb2Jogc8GxmFrEgZepkfwHKZxPQa6NNgrabjCSayLw25RnNanSbyivmzcv5XwSmXFw7d3SMJANXdj6gKXXoSdHb",
  "key14": "4zPJGXeHmZN9Mm5EimJHw5ZMm47AF8ymVd2mBLhLS1T8c6csDk15KVxATdCfe1UTQ6VLYfx2CTZfNwaA8wJVUD1Z",
  "key15": "4ScBPC9LcqbwKoDJuqjjevWksrfKMbG6QCaXd4xH5gDeHW1h9x2QoMJcJgmXjFjUPDAYXuMjZLKJa33AgyV3ba5n",
  "key16": "r812Gk3DCd4K96EfDGPhRwqpXHsvsD7P1Sags7y5CMJgJwf9VAUzFbrG6deftFoFYjp3CkRL4pSXd8D1kCoyM2t",
  "key17": "23FoTtAHB7JZicL6MM79rg9W1rhemdxNwzrJAbu92GrwUgNLkCfLDM2DVdPk3Do25v1F86XEDUWih38QEUHMxE7Z",
  "key18": "YYnK2Avdm9e27FVSpZruf8YsmBkzCk2nqMbNNBHsb6HDELJehFcermdxK1bMT38tb5vD7bXBUP9RtgDFrjdRx3F",
  "key19": "4ccD3AAaMhbjc6shR55q1N4LWeSaHV8z5uVcP9LEmbL99VC2KKpQqvWBY77ZydWNvXmTAhPanzHtZLy8smckHULe",
  "key20": "3udkphJiuhAPrvBVdc7YvN11C8zEL1Qga6YoQkQNXHJTtToArwcJUd8n6nyd7MuLMfGGMLZ6M8oaAqz5dgwSXuz",
  "key21": "2gUcCQyCPifxKcyD5CQn8HmocWwXsdGuAQGYVURXdWm3789nZbaqMGQ3ErN2VkpFDgTApjxBBxDwK189v9NpQZoz",
  "key22": "3qoHveUwnTxshPUFR1A1vwJv2AV5iNWEy8Jat35RoEZt8RKpJRxsjNLyEGTEkXvTfRLxeFhRAwSvJSKSNh6diMRE",
  "key23": "633vXePLcaf89P7io9J619MGkJGWChxmNULME9Qj2XELaWQmszQgwHPyA5rnbPYGHSdPzmYdfjLzZuHLrPnNzmhE",
  "key24": "41UoKaeTwbk1cYtJifF5Wv4rJN1pb4Mr7cFSGdcdrXNCpMR7vNxJ7r47shEbqjxVuo7NEL6ngp4Ghh9Sn6VoVLFQ",
  "key25": "5aUPwDJDn8upfAp4GwpJz59rigveXMXrjSY34CNSc6beJLyPiLkqC46Lu5ZD994vigKizg7YF5WeeBu5ZSJ72PaH",
  "key26": "4L9WEGP879JkxeHg1vVGxZeteaYNF4SoPTRxt35rmNMfkLdBM7CNn1aVNhmhFpkPkvtSGL8hfYi6kQQtCwtLQa6j",
  "key27": "ZG8mP49a21FfRUc5m8C5bUzYAKfGmHrxxQneb17je5KxPzsfEmtgLNZYcMkZCaYPktgw81uPsbXtCLxUnWwBDkr"
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
