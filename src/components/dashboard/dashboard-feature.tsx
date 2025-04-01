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
    "4FmheGg75RxY34YyaRiL38zJ6xiX1TESnVr99qjbj2FqGC3PLE8ijpJbHx4AV2fVrZN1NALogq7WrKhTCt4nxaxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPxiHSoe8dQxEkEHdnis4xczCpSmeKyJKQr6uupe36KYGyWJme9TCK4Sd4Mc72rNjVo7d1C8jCGU4TdeYTPeFrY",
  "key1": "YnLrd5KTxfdDebqw6V1GgavzG7NbdCAJFS1v3NNvwiapxWdgzJ26SQbVjHxHPgFM8SovD1Jnmp8EUGuUMBZp8F3",
  "key2": "3hLntkXXq6bcZa1gd6Rp8ReXhnPTmzp8pHF8E25DjrFRUH3nutedZ2avS8xkmysetoNGqZdy9FwRGy4teCkZsZoN",
  "key3": "4pnwzx3v73sh7tJr2mniVnb69dpzyojqdJZ9AFfrWkQvygX3rtmiJaBnNeqSKpY37SjPinFWjHb1tGSD2XsPqeQJ",
  "key4": "5YnVhAegRWrEZn7pcHPUMCY6KPn5VXeAHraWZryQJwCY6YguUpeu1qd4hJ23WRLtbCWjtkWerWUFLCyXbpgdz2Xm",
  "key5": "3u5bkgpnmxBAijjjMTbG6fwxomqAzQgK9VTk8rSw1cPG2rL8BZuKgdSHx41xuMvXYSDMns8qYdSifPSRuiDQrZiu",
  "key6": "35SgVGYCLnzaH2Arf4AZxv7VxTSeTv23Y1ypWCy3tgCFiwaaqv8UUKM24FcPhSVWmY9XT6ECZK8pAHxkZzvJfuPR",
  "key7": "2wLEU3wx3Quru8QTcDdHbTxcf9UiBrUNarnQahRa4SEFB51N8N3eNPtRizZREWG1PrGumPrUSH74FFGYgGHRRNNe",
  "key8": "4zLm3ndREvgcJubPr6czrVXJj9qGe16rytBNJYUDCkEXDyxh2RkUpX5dDv4m9etFy23swF9RbF37Psgvqp9UF5Pr",
  "key9": "4qFgKgUFVStvSLPJL1DUZPqmzXafLqqW3niyt2ECsfXZiZ8pFZ1zeVU2QC1JgwBJJqfKgJKdyZB7c1TUCNuwmveY",
  "key10": "Q2abf2oPcGZXv828vupk4Z16j1ogTLo7rxgPLFbmqX3PMQGV2m5RwC8pEWrmtSXwsM2xdVnxzjqZvQUWFW6BFx9",
  "key11": "WtU8imqVHneXCXFgrawZTvscfRaBe2iaofqwVZviyGRY18wi3RCaMgXt6kmfWbMyMKd73KbR75y5FfdEoqvjieu",
  "key12": "4z7AjDspJVyzjQXU1KqJ4jZk9TNXGnQW3FsQfUpxNs8C2TrpzF3McRFieYt1i6SWQE4zK4p2h96BKybGEdV2uwbm",
  "key13": "2ySobRo7jdDX7dsYti7CjnbUx6yJMRwo4aFjHqNZDJn53NLoT2SuhsPYTTn3am9FMXXbXdyNLcMWEVgGpeZnTiFY",
  "key14": "ukW8pL6ribMeX4aiANFL7yqzADAQ3bFLoiVppJjZJpH8uB6a4vhj8U9ypjPNUEke9vpbS8Rvfc2xr2U4ENq6iXf",
  "key15": "41XrkRNtTdd6YwcE5G9LDzssDqemQhqZ28YWXxNuqDY2rBNPK3utjRRrvjwEkCgCMvH4zUvM3LheBdnpw8SUHsf",
  "key16": "2ArsS4Ut7LMt9UUufrAPCCYkT7pQ1UrUgWj5wa4E2FWEXfjuK93EsMKAgTdcoZcGRKLqu4ip6GWQ47Ypn4iWiAgX",
  "key17": "2ThihHahHutEaCZHU1PhnnFUwWbiMzyek2cGpJEPM7sRf72uCfgshAU1siUofzXAaw3QWW8M9QGtDdS5GHKbqaUC",
  "key18": "5uVDZ9s1GQsZ7Dnoxe6Zq8jeuK3NLma4AUYBKYcKXnud3k2xmZoyssijUESEMQFLfyEDM9YFjNVUp1AEX3gb8ZFN",
  "key19": "2MxKKeW4K5j71ach3RvEVwWtZnAk1PyWbFRZZJh5vDkXAQ23E5LMGjv1rJuZ4JHBF6ZSTLNJFABJN7j2NkVFMjrU",
  "key20": "5D8rnBS5Jnsshg2NYVWzgXHexZZ1V6tNJw5dndJu4TtaApAimDA4dYaiQyKywz8Wn5gBd4HUfX7pn71zCx9DViSr",
  "key21": "2tknomXMJJU4UWygNEsoxfrs4nb7wEayS8CymXLGT5fYtp7djkPzyxSyd2KTmbDmrSQS1ftPvyWYcjRvfNu1nsRx",
  "key22": "2mRgLeD9hww7fxcVzvX2gwJtWYmHsjWgq5Rr7jK2LBERVS9c9Uy14UMHRrM9JDtMWugXejfC31q5T4hqevejYkRr",
  "key23": "2warS2PYFq9zdhEPGf7vWNredx5parG4mViLJWsCXHxmj4MsyEM3zViYqvo32aEaXUr9ALQdaGddxEqUiMBYqNSY",
  "key24": "g7LHtCwUyTZhyVuHhEHkyu366hJDJ5eNfw23XtK9A63RikYg6KvKoM3FnKcHQEJQcr3ig967dL9bEs5zemh7LQh",
  "key25": "4x6mN2rhiJ3q4ECV55uYcwbCxB1jGw2FtYZMspw6SLzMQFJxzQB9CvtXZhCgGR35cW9Rw8Bwjyio2KnKV8KodB9H",
  "key26": "2umGt5Yv23HiibdinykoiHPFqLARTnYifWfZbiiAtzwtFLWM4wUB6AgrhooUkBPPqsySDUrQ8c3j7zs7sZ2v3y4A"
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
