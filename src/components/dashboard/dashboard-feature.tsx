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
    "3Tctrpi5U1S3WcEZ2btnTuhps21vch7CCpyJu17vCLTpgd6yE9Sff4noESFwstXV7QRAsjwhKhcaVwDmGqXDNfBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p8PPJhyHkWMNH6Wp6iqRaUUgFN6U8wfhn11wxWpk3RVWJQm5Maw4A82Q461kjmJBST15zJAnV6A6vaKAU2gd5tJ",
  "key1": "3BCMACmHfXeU8RMDM2QxFymxRs8x774ML3Uwn5g7XaTEjMXhtRWntJyQL5GKp1nWiFTeTrLgbbtovzc5wRafo6Cp",
  "key2": "4pRKnFBPju96v8eHb1huVXCt31fW4DwGJNv23YQoyx1Z8WHM7wjqL7XSzqdUh3Pgy6KzaevSRwQjtGWWPTQmeNZD",
  "key3": "2QoQye5NFPidktLSAQKNRDkbNGPmaW6c949xensSxkk7fq6FKJVnBL3txeAZyFCyhHaPgq1WX7y5KVpcm2PcvRbn",
  "key4": "3ysZBdsseULYxaRmm4ZU1hbhihhEhGS1d5WQ2afKNRmzmST6eXFCgF4nRcDpcb7G5XwnCUmUdsgtQcVnKHD3Xn7X",
  "key5": "2Uuy43QMsXnnkhu7ncUy5Kz4BzQNbehiQXLnsJdAtgj6u9e6PXHS4NC2XmHZPhbRvjpZ4iTqGbGQqqF1YYT5gQ4",
  "key6": "36Fn7fqFEcjdVBP4zrt4NgVwQYYcobBaMGJ9pNhHqtgjgWdZDKDUXxGTuGpBJcqYGXmZyKRARDZMa4N6FTYEFwrh",
  "key7": "5d2Qs2ghAEsp7y8voc5s5YWATFXfZTn1DCkZ71v4k7FgMv5yuYELwVkdk3jwcWWsFCw7TkmyTcCQphJen31T5yoW",
  "key8": "4T21QSraqhpYPPyNzoLgEpRfkVpgs3Zg2QP167zcs9L2yXx4wHVWCYZRqppwJh7mfgmRuWLZgp86WguS8GrJg68E",
  "key9": "QF4Hssp2ZvtxiZdkXo29QrGKgt2wgF9fc8SBNTY4tTLmEhAUuMNk6f2j9RgZdMUviRdtbhC77PSpqadEBA8ef82",
  "key10": "vP4f8wXgoCRDgpmJb2ycaPGXC1boz7jqfoYxz1KJct7EFrgDmWVoLTGE4idb8UR2Px78BtDAiCyNmRRgxkce9bj",
  "key11": "5CKdDjTQNYLQg9LWYkMem6k6TdzNYrABRdaPfhDKbp6gtM8GaTs9J6A65f5yRG32eZYQ2z4PMSjZQ7rWwepo7TNs",
  "key12": "2BtwYM61j8GiVrfwBAsk3vavMAhYfCeCu7u5MTYXzqHfLn1kYe2rnCvWfcoqQ1mcuzTbBJX3gYtSWMX194KYW8UN",
  "key13": "9596kbXpiWzyooQXtZmy8BjXVoWGb1nWg3VtngMxjQk5ta3dJuBhsVKaVcC28eskFdZWMNfWaxnD2BTRVdaWSus",
  "key14": "4Bao1f4r8PCDPfVERZ6FAUUKTG7L5iaPTPRi3YdLGXSX5RRREFQA16oRhqNYboZrjTxiTAbgmaKd8gSHuXe9pC8h",
  "key15": "4CGSVvDnWuYsGJumoywDAtk8XqseKBpjvgk2Vr5mwHnxW91qQWwVYVSdrNNmKx4HdEGrF342aUsnFG6kf7Xv1fdo",
  "key16": "2VxbmzTprBi4GDoRwR9XxKh5LCtNYr1ZP6yWVbVWsqnhP9j4fYH7VZ8SvkWfM4YJwPhkvrPB6JFzCYmNZ6Rb1SZS",
  "key17": "ZJDFpQKQKP2xRw8PqqoADVn1zGDZnmxcBhuiAFjBbokBHdc1Z1jJjwgy1W65wQVSSDyCL7ksCjGTqVmnZZxWkCs",
  "key18": "512G5EKbVS4WoZjEWSRQdKkExs47Rmcf8qT1Rx8JPZGDE68x4uhBXWRCXVtneCNNP1fqojGfLErWpW5nqDnAMrDP",
  "key19": "GJKnd3rKjEiSZr3ifvXnGLES7qhTpJfeat3kGhy1JV64fWf1x9wmtCg6nUtwKWsNa5oHytqp1fDmmvvbsKApsyd",
  "key20": "VvwU94NcjEjWTbkvoNWL17AdYa2kCMhrXpiiC2iXRpe1uiXY3TrmncAYb4NzWtQ1EP9z1Px34gBHLmXRgVdoUDo",
  "key21": "3se7uvTfjFSVD9ByooynYGycw9rUUzQkWbybsV2ptxrLevkwKbMeNFF4bVwwnPwb7i9RrDfQX64nBmwUy8UbRBM8",
  "key22": "3jw7uVooqe52nhhKrT45MQVHnkL7vuBcMx7TpLxh57MUipxAiAWPd5AfNFqEx3mekqLFbgbDwbaVWjqoTNRVrc2R",
  "key23": "2xxA3gmGeCsjKmAL4Xiro21ZVnF3F5sPDC3j6LEpRiigFGE8TZmG1hK3jN6C4YJuxzDrcGJMc53jwKCNopJRx7iD",
  "key24": "3MZTuCi9UCR4gZVt98wewES4t6xFyEEAxYJoUJVt11Nx6AGoyaHxc9BJrbz13LcT3zpm8VyFTvZhKKVrRjbNVZuq"
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
