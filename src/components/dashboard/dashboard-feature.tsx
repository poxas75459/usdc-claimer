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
    "4op4pgJQMtq6bAXfY26jjAv1bRqPNSWPe5pKGYyDgWkJ55DNjepxCgLgaUc1cTCtEgcERMWZfKdffGgX1WPqnPZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ryiAxjNf8xWbL9jJ3jr1LrXneemaZPZhxxfFBYLZhwmbkWa3MgeyvRRX8ynoDjzABa4x91Gmhj1BYK7R6NFTiZ",
  "key1": "3g7A1th2fxSe3aF53Ww7zCw4YDaJqq7ukE2p6epHeXNrTrUuj4NgAKhQ55Z3D2Ksee1y5KZE8tLPNn1piGxKidMk",
  "key2": "LF7bkMgfnAFon548pT8ckeVaDHyyzmuKpPtM8bBY6pRZha916WN1zaxZrWtgofS4BhWB4wq35c1EpFnCS8MfD6K",
  "key3": "3CiS3oy9F1XPezAYJSyhwMJS926J8jCFxVPMs91s8PhcZhk1BL5rszASFASBo3tVSN8H8gWMH8vuJnyCXm12jmMS",
  "key4": "4QC927ytfLhHdcuyHWW2zW1DyewKdrox2JS3N7EFB8Bx1fnyCLRhPq8D95HByCKbxxAZF3juS5aenL73iqpSQJA7",
  "key5": "31K18H6MY1iLxGQS2WnqaiS4SQie5unrfvLiNyYbniUxxM1za3PbxAS6wgD7inNdDxrn4k8J1g1Niygyvsfx1d1k",
  "key6": "3dBBMSGBRR6oScXyssiVRHQzRXabErbnwCqWL9MPDqsCwmF4mo37JJLxJDcJzLQpy5ujTqKXyBFCTha44AppRZXe",
  "key7": "4RdFqrSa6H9D2UPtaiJ9rkDM9VjySuBUrBquzxn7UeDGoMEafZvCB3FgGpoUpZxaiMXVQ2sq3FneY4rAXQPfuajC",
  "key8": "4YQbCWApJuzPkztPAPLaDzKryqrFHfmP7ojbLTC86717cBn9ULS25zrqgTckTLVfBemtput3qDnRJSyxwGhUQsGA",
  "key9": "5spLTULvaeXYY2NZawfcJ9i4nebW5FKqdhgYyVCN82UjmYLJ8t2mDyAAGkpFQFsVELURieZdgWpWMQwuk7PdStce",
  "key10": "58MgF4A14GXfiRTX9XLTZiauc7CZz8yPvVoAP9JoLsLEY8DxFYah9v1z1CZdMhST9LsT2em4YTqmifRQPzgWq8ye",
  "key11": "5QuEworvPziEGi1RWLfvs1dKiXQvvqcccYnJUcYd9qzK4vUTeMbjnNUhmzh5YJLoSMqw5d8j64Qj4z9xReSBRrzQ",
  "key12": "2o2ZgimrM4Nh6ieHqV8Qb6tuaXrmd6hN94eXhwijJYBb43N8sN8sdLcjeoTjPZ6znUKrUUDs4jKFHDhSrNbipY3w",
  "key13": "2mUZEdPFj1khNurwSNUBtug9z9f82FS19Cg5xXVxX1zG6ZBhjyEK1UFXTzy8JJcvdf47roLZUszSyyzxDyJq7CMZ",
  "key14": "5DpLbSqmD3uaM4JRW71VnJMnaTFbn3WWiQ5aH69coaQ5VgbGB1vgTjzoKbqc7BbqVhC6awT3uqCHXv9ddGngRh9K",
  "key15": "2n22zWnTYWDqQQNUCY9LsoQRCXsqmp9qtwPcTd4LL9319kxrLKimZrznqKn3o8UkbaG4Vw3SRzfS7apRqLEyQwmt",
  "key16": "BJznNcD7VQGwL1H97nekFY8RcPVNrVW6dBQmbYferPHAmK5g7cKCDEvCZboweKvB8RWWPoB8HNzBTKfhgj11jXm",
  "key17": "4pxCndeABUFPGGm22JcNC8KiyPtuLbX7dtZNJPXVvEyj496WJ2GWyP7zhVNADsuEKTPjFLxxmrfSB4izAj5fnrh5",
  "key18": "5YebkZqRTb3Q3GPMWv67Q127vzEFdQEDgWXWMpmPiLkL8pGXYjaWcdkSbrHEUatkqxtCQtubzuP8EGU57SESiZQW",
  "key19": "RHPrukYK5fBVTrRuhmupJVD2QDTyYPdf2qUZKvitBgik1YhckuS49BEo1zdAaLVgfeBNRhxLvBxK5xkfGSRPaa1",
  "key20": "2xezCec5EoGyfDYrhJW2L43wSxRAGiuSE53tMcvYngwFcodM3SxZ3cYH3wDkApWUXrGCXzqMWCFGUeBzeBUPpZgN",
  "key21": "3cCLBLQ9PCkTqFgEU7qQRafsRuovg67S9aLySfyZYZe7Et846VVXi24ndNg3Y3uVSDunMj3qd5jhhGhsoVEKBCtr",
  "key22": "38Atvy1WbZMcNh11ofC3vWEPgGLT1pf59ujbgCWTC4pU4tzkjACXmp3PPA7XX9YszkuitCGHB9UgCDfM4ThhBgyG",
  "key23": "5trvtwdJKYYx4nrMUQmuU4ejjeBxDMHnfV349gCFmimFYs9miCyGfqkgSreTJYgfrd3wytnaLHW7cZQgEDwmocs3",
  "key24": "4nvHTuMExcTMVDepzTRkz7FBoYAhhEWBU1Lu55BAwCoo2UZxSin12KviZ5GJLKqvdvmGZZLDiAu2EZs34LEgFRV2",
  "key25": "3KiLwAVuLuAzwEZjywE8fX4PVh6YoVmXFXqs2yKiWkuiDZQB2ED5mEc47wMUBWyueP9izDm6tzQ9dhLqmBXLkp5v",
  "key26": "ZisujVNhVfNeE6Khc1S6LjS9myNguKCvQehmVJ7RPNr2H7Wr8wHEXvwxbHbs7mGuYLaqETA5rbSAKauKQKT7n9c",
  "key27": "2tYmpJAjCJMuAYJ2qEcdLb4pZYqpzSZN3ZneuMH6ZdbSS4XaaR7Gx7dEPEqzKAMPBiAqLT6viyzx99QRHxTSXXdi",
  "key28": "j6BVF9YvJMNsvPGmpx1wf7VTPGev4bvCKq7Wcv5Cbornu2ud36WQ6yoVNjNBvi5CmaHNgY5H39SggQDmRxkPEtU"
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
