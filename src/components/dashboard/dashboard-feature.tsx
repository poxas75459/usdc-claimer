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
    "2SL2Se5ZejytUfLD1P8YHFgZxKyWgez1wnxk1yhCvyXs35AJDYY3b8xFnB8tWvBXwJwoBApp3EEKdBYCdJdYi5g7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "393PPG79w5CqiEcibr6ioe91aqN4s6qWhBFPPDBAQUbD744ueDuivaZUra5EFGGWm3HiSkR6nQNsQTqEeM8eWcdM",
  "key1": "3PPC2ucdLEbyaFdpUyf5jMi1ZYr9opWnRf2kUYpXZwJ9vFo82dwot86fZxsMk1YVT17UtLsxurDg2JCsR8CY7vkD",
  "key2": "5B3WedpmyKKKiT8iHh7vsFeFZqSwzefF3weo5HSzRBMGNpiLuZWhXUXpfAprpiWLacqjBcHe8isekt54VHvpwVbk",
  "key3": "3MswPhKvwcNp2RN6sAmeeMo7N1ERNZ2byri9D1QUZV27fvm4TXWvYvts1A6u4qb9Z3hCCvvP3s8md2BXruK1nWsC",
  "key4": "2Lp81C1aawCNz5WEsRLUtREPH9sE4y3iMyJVUiHwNKP9P9zzVn4YUMzPmSdfWaxvBvJXm4LqnEYhTd6PeozCTpv8",
  "key5": "5qiP1idf69rZ9LgJKxVkzuhHyiWyFc2FSZWXEtH4DYsH5JyF4EEXrRbHkX89xgALpbLgiBYPUZmgj6KDxTXkNWrv",
  "key6": "4tVaf8GoYTe31hzdVPBcwDGRr56w2h8X9DAG7hcusjY8iFHiZ2TizPWgNhqHe5xL9Fx1jfAwTGphQ2cRqizW8y8p",
  "key7": "4VgocZdT2LZUo6mkKecsjnjBpNZcsEsyXzNEvgf8to5DgmqsmFNeAAuBP8q9rVuqJfyQTFhion5q4FXg6e5r27uk",
  "key8": "64Ytv5VjaP3Fub5pHUbjv1C6pfDZJiUk9VQu3UrJ4coUpeUTgPMKzLF92qzK12D5pzhD9nxZuTWhm7obAENc4FfW",
  "key9": "7HiprKPpuqBoGMk6tyKBZnVeGgepJdfnhFxfTYrRuhFvub7gRar1SnhtLoW4dE9CgajbVzbvHvFVNTRLY3wSnza",
  "key10": "4VeHZQpiy5TD15SVfLBWUVwii6cPAfvLgB5bkGfwbfuBm2C19HzoiiT9yjAf2HWzEZrgn1rLH62zgvurWCQo3Mg1",
  "key11": "5NG9yamvcnp7Zwvp6KQboTngfd1KGzm9axv8XtLLnGMFYbdQZfwGDDbW4mrqP43TiHivtnq8i2k4BdALnW58NEtV",
  "key12": "TSgVzNcmdE12zMGTuVEdzr5DabXM18wHsuDPdgDWtH7QqJqgK5V9RS5QVJRu8L6JxEN3qccM7DwTnh9Q576VVvW",
  "key13": "57gFRyM32D135mFYUb15FJCXmUdcztg2namW1oAA3ikgz5xvQoEhQqtnu4nQjUUFAEg78WGurzWT5TEVqDF8jE4a",
  "key14": "P7cjvas1iXQnVA3gKcrLDvVk62Row8uT59YgMJ9a6nNLQ3bJoS2jxKKY2aZFXVgKoYUwnaTGktcLbc1s8o9Uuc1",
  "key15": "3c9c6a9moQneJ1BERLTq2XZiqTo7DEkU2kJabEhRG1goji94Jx1Vz2wyWDiD8hmvdw3U72CLcagyJFBFh4siaLYT",
  "key16": "5JRqfb5eGz8zyvDeMKzKAYy4dBMgwGXKKRbC4nx8mTv3ETP6pHHG7ptUbM4jLqSJbnAxFvHBTS2isKHiymg6CWb4",
  "key17": "55QNiJvBMb2E5FrvUspYXBAc2t27X7gpvGrNj6nt2ujvvu51Hv98zQrKJ3dDzupCSEDrafkW1gYfdX9e3WzZseKc",
  "key18": "31sqUsGw6De3Rgi8gU1EYBJkQVBStyXoWjppkUjhq2HUDx3kpN5rqKbVwkW7YrWFic3T6NsRA684bHKEJY8KLi2c",
  "key19": "4283E4KUoqpKQiGKnwA5T8UfGHjBLsvGZRKhChwwMmQRi9g8TUUqPNFQS3BMVvFCdbQY8JyqaYHbGcs9TekVVUuJ",
  "key20": "3JAo4ikkkRjoxDf9QDAFoTmLk8YxFFpitGW3E6cggMYL1LzNyZ1XQe76eMEZFrXZFmZmL6mrvNxexzBXx17CbovG",
  "key21": "2sWGnH9sLveYGyRguAjsuHY8pZLWuUJuAt644zcB44sfDJc8idqQNvRzTfQkBAq4VWzdjJDbE1NbR1ib7jZXAuFa",
  "key22": "3vkJzboD24FxYJZo6AVHQJ1SGSFo3D6E7WCBACNbgQFHsHDzrbZPxZ8kBHCxBnz8RbqVjiTj1SDFFXaiPVtxuLoG",
  "key23": "2YyWEUtwjTQoJgDJy7M1RwxAytCmHV5JZJ1YyA4ALfEuTSR2qrtSpKZgY5LBtDaV2WDTVrzpNok6Qdsm3qfRsvKs",
  "key24": "3zc3r6LPLrujX3bb1e1D88WoQ8ELgeG4DtiJsFuLwhobTh2LtRmueL8ZGgRWQUxgj6AJvnG8vFt8iLH8DE9f5Upi",
  "key25": "njH15FHjo4k2b6GKfiEfFUALnApnYYr2b69xhvrZHNHMhXAUFVvevWzhjABMRg9fubMW8o2wY25KTSdiDjvWapm",
  "key26": "KsswM1BFtQmSBa91GngzRxfC67PUd1JxegKCeUUGv4SPVdDD2X4EmKb1fU3DL41dHB18N7xinYrqkNKgGto8kVH",
  "key27": "589Gn1pL1VoKzNCTBbz1yTVCpZ3YrfzsqX4412TJHdJUocvX2dqCFnjiVeGM8sF16M5HRuMEG54sTEo9ZwPpkGSA",
  "key28": "2nfsgsz1kzrE5aAAfVDPnU1fWMqi3zBTLKLSou5pwwRJoJescfi4vJPyUcNs3ZrsrduK4UwwvWW4iNYd6SiiEwpd"
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
