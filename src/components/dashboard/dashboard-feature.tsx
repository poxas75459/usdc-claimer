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
    "5Wd8LbpJpjefuGBPQygbWM2pRCT7BKmNxgQa8Jz3bGs9gLyT4DVy2r2FxHtpEAPNZHtNjaEEWr3if5E3gypxnNu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GSNStyiGwEhbp779hGcjadNTh1YpUT2z8tHwYBiABroyHKdVH63ajC8oU29wh2Auyu32yFYjsChyBRkdDsHT2pU",
  "key1": "NpyT6C4GGW2AZeWW8fBdqneSF1UkHTX8wfqnEVzoNyKy9fACbmXL9k8xLoyRvvUG54XEG4o2dVNgcfVTekKG2ew",
  "key2": "2T49xkcsLzfVbJ28S4Vs3P7DFgkDY3tsucN4sz7TRce3TsywS7zPaZ4Wi6F9qVUM32wrkyTJGHxCRHK3CzCuxHaf",
  "key3": "2uJ1ecmeGFuc8M4iA5SBnov7ggyxif4XS32PEePdyCZ53i6K7F8f9JVxCE6TY8WzyF6dWh7WKWXEg7U28h2USnpG",
  "key4": "35qWyu6mZ8giL2eQoPDB6skGFjXUHniSUPG5jZwrZfZqrbtKNiqesakT2nAcT45jR48LRpB7cboyTJb8RXsjErVK",
  "key5": "35J5H7DW3i5tzVJDCchSPjLhzQpQpYthD2ahk8fBzxhYS75BRXjnqJNAZoeLZWSmvhogYrQGs3wAYh22ev6wfKMB",
  "key6": "2FKi6NFQgX8UUKx2MNKwCVjdb5pwBzTX89fsjPQi8euMejrt4R3SihzmELgh8Y8EuPxGezqVQsYg7vvJ77Pxj8dw",
  "key7": "3udqFPYR7ueEfWjv3S9uLjjS7WyFNrBVVEnK4fgRB72CyDDUnQQYdK73JB5avDELPjc1sR6WoJrdTAWMsj8AAmdg",
  "key8": "4HETo5NCEQ5dWELGngFr2cTFLcrDgqgE6ZqRDaHac6Dr5zX4fYmPuHpLprtPEuggQphX6KayAAR7HZNRegv2cwcs",
  "key9": "3wiQ3ujNhdsfLEDMDUe9ph1WJ2XFY6LqyHCS4S2aAoemWteGqKgdBrPGzgdn7mPnLqA6aUapp6xKt1EVz2WB7JqH",
  "key10": "5GyT6fQP2AqPP4Q9WPz2NtSQgbTHZYntNErwZzyxwozTA8yrUt485HrAnAS9tcEbDyRsjNs7Bg11S2mmTasV1ivK",
  "key11": "5HpTKPJ3VCjJe1avTEwiAgdfaYSmdGNazk5Ns3yzsMZ182vLsm1gScALiCRdhSvHh4wQy4R2YCEsVRZcAPp8R3wZ",
  "key12": "3hAUiWxLteCZNDzvdToVdCpkte46w3EjNawQuoHNpCEPNcrfYZYuzoJR5sqBS3NpNuiDfsRvcFycXn97XobDfYfX",
  "key13": "2DLwBpJnai8Px1sUfpMCVT33i35J8UnUiv1PU1LLudQpsR8HUPE37TkfN6itrqLetx6wNctfKSWPFCFFoFRxufZ4",
  "key14": "4NXynxVd8n7vzBYrQVn79H8LzXUn7uuTV3GJpkpTmoTfcFHZbJZdtcCXVbtmn1HvxhRR2E9dcicr9LV82ccR3BYA",
  "key15": "2DGPLSTkF6qCbGCBy5KqvV5v73RdrLZ1BQKKxGZ1p2tfCYWzufnQRpTzcmngDimo7mT8xr3Vx5aKyNXmqc7RA84f",
  "key16": "4BZxffEPsujWJ29MeHTFmT7mL1Dc8e16mw98421tV9ZWQcxc1GNPHFt3uXc2HEaC1WaZizdtUmSBF3MUPF84H8HC",
  "key17": "5RytdHmKTQ4QLDwqFgRNJYN2AERrCUda85q8u8gszYc19Z7FccWpFCE4hUZKnsHVeUi7mDWirXsUtRvUfHBpEN5b",
  "key18": "2YUVcBHw3qRyUKwbkofys3BKvZNRUguagH1xjAo8XVjF6HsMFZonrVKqdF3rMLXjC2vVarZt2mmncwspBGWfJ7na",
  "key19": "2uGvJnLxQkngFetKUnodcz5aVP9tw7PZwwKHS19z1pFND3gqn1GyMj7hQqAk9uxTqRmiXX3RASa4Wdm89tdh29Ty",
  "key20": "28gB7RfBmQqecfTPKvd2vSqGVcquNSzcon21MgrUicE4jZLD98T7Ywug9uo8UmS9rkX9xdoLFBry3aU9zveQBCU1",
  "key21": "5J2brHY8AZGDh4eHntYXJnrHpJjP5zG8f2wk5KY35b5ZwtuBDbw5Tf3vPzkhdgfdX4ZGhh8rFtDywLU1uEi9Kw7z",
  "key22": "397jwpeR2tJ3vYzLfaMyAUEDx3W9jPe8Tx17yrT5epvybsSQ7WoBp1sPjzRveiiVXppBT8DWo63F95p8rxKZTcLA",
  "key23": "4mmHpNGT3pdVrq4wahbZn9T5PM7J8nxWUgxkevP73u3yFGS8mbTi8Jx4ievkBm8mZ2kqj74dzJcpaWaFrLhhgcZd",
  "key24": "2DjiwRhH7HHxQajSzC8Z6ZsskAXZteUuHKZEM2jZ58SPVdyg5BDSGPRty3gfzmARptaQ35SvWKTWKrxixGycufbc",
  "key25": "2YHvfZmH3oDPFuGzhKXc3PozWcd7ZAYGvGEpJiNq9mvxm7aXyYX2ohyorvW9vNkyXCA1uF5j5bx3qG5pjXsmizc4",
  "key26": "ch6BkxhTB8Jsm8ZysnFhbbYKEVUqzPyaM5hwJZe6CL6w5bonUqN6QaYUq2mTKBw1kzwF1Rvmay8FGpHG779ip1f",
  "key27": "PNHgeT4Buid9xAWkKxRHiBq3EeaPvHSfMPuT3MH74SwRozmc6Exn9xA9iWbh4ULxMH1JYRBmbjEbViY8x7ypyRg",
  "key28": "3By6dukZz5Ujug66f3BaFBpc5SoeGv1iTt3zLjtDCnX5NaVRr66Kmi6hsQtSPrbiBAPW7HQJRPoKYSj4pY2hZg8Y",
  "key29": "2x2zDmWHiZJnEb7bNGd6GozsjAnhs4vfxQjhoj7M1jAD1tddHqrMhQgQe6NFi6uvCG196hhGqu1YCJNtSHwiKHck"
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
