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
    "4iWHyhzaWqprvMivnqCGgKBREa4yfgCcHXwbogHpBdMds8Yy5xbritMT2MeaUFoLbp5c8pLHyr5LC6tnk3QtiSzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NktCUu31AMLGpEHsgCFgE1sarKc4KjUUcHWjR24mkvWznbdtiS7g7RQM8kcdWafHAtRbYH86nkAaExZdzNqRruU",
  "key1": "3TBXF3aKHrPvWe8spSN9JEAPH1LrWYdoKLBpkAmejMF4hq9NQD7ApRA74yMFh833uZvzPNMwFKEUVKAEbdsHVvJ3",
  "key2": "5vazqPZWnj5YLWZtngruWMSyRRDs6izVFTDaLuPzd5W5HQ1ueqgY7rptGPA7Nz3KWCDBgCrupyJ9NM42iR5sEEAK",
  "key3": "34RCmamtQVvVzFShv4tsgT6JqVhTNP1MADEji9gwMfh199qX5dWspk4tLhg4c7W8jqNQF6Gt6BgqYQRqFPF44DBS",
  "key4": "5mnnToxApQx4WhktfamPGjda2qMJDB1PeySsLhTpt8PB8cXDbbZ9qcp3RrvRAxJcXcwWf3MvWfJskC8rZKM824o3",
  "key5": "2MZGimDKjCRC3Q8QXqDkqxpFHwdFNL4BhTFtC1NDbdFYuiU3QWov7xfXTrRyy6zeK3Hd8eKZGA95ZsBDZj2gWJdC",
  "key6": "4rtsZLddNPmbXysaWgevJpCANMYwFSPTgx2Qd7NR1S2XQ3FPQZdXg3wdwqAawcgkVUKw3Jo5Q8XUN5Ta8bnDXsAq",
  "key7": "4u8nJYj4qCjZigDt7VA9yQGm2x3nundTXbPmtRFFRt2fyCmSBvaUhjkzeQ2k1gRa3VehkhcJWB5WNtLEeosZffEv",
  "key8": "2kerAeJCdW1YwgPGocaeZAHkZws3uQymVhL2PJtaYE2mei224hbcu3nYM2yzYUTC2raHeGthjr2G3C917M3tNUjM",
  "key9": "rgPnm3BRMcNekTpZSJx3TGZYHk5F7nmYrYH8JxoRmyuLan9188XHG8TT2wTYvvwa3PRXQDV4Lw5arwxgHqJi2TN",
  "key10": "s4PtHW64SLNmC9GjR4GqXJyxNUDihpMg5LHCebBxV3Fy87nk71tVEVsxqFzSNP892ow4zsxPeyMBG8bQJsfdkQ7",
  "key11": "2HfQjRdxxJPR3okCcvJSaQBtVdRriJYvKD5qsLnrxhU7w6s53eXcZpcyFVF3yEFW34Kg399fT2CHyKD9QXADSCZy",
  "key12": "2pTmoN94Q3eYM6KNZ33187GgKL3uznWwfHKeV6QXwD8zCFCQE6qp1DpveH69anxH6MXFJegs1732SbvCWYe1zUU6",
  "key13": "2kEau5U1oWVRAxSygarmvDZYEFZJAozmMCqUqmjmEGv5wuEEEmNXX7kaoUd3mx3vRSvvFns5C6BKQfrwGhJDcMq",
  "key14": "3RzNhj6Qjm2PZ8tg82rBbft68MaiApgW9RBN4Yy8xx9eZyLAwRHrc6CHHhEaFvvMamNhrvpMGbrwtsmT5uRa68AG",
  "key15": "4FuBWjeYQKyeCXk1xzyepDcFHwzsjv3AMdRJreFw9QpMc6AMU6mNHup1Snzu79QHnXjdCfT6fymgSdr9VwTtFcre",
  "key16": "66dzYKG39GFg7iUsSpReUMk7TbP1d2WJAXDtjnNMChtwjxtwPQeaJYVFRfiw1tqU6mvqU2hbHHPBsr36PZ11ysBN",
  "key17": "3H4bdAkzu6RJu8yXS1fN5voD8eAWLjSgCPrCdu5ZDQnCdrQZoQvTUXgbrmxjZqisc4wYkVFFZ1J2VXFgRLiS8g7p",
  "key18": "2WxtUoHuZDj9iWu8paNHHJqeRZ8HS2xZWd8eAUVkVZKHPNxERuAHccptkJrmmAZZY84aP35Rns4SqofZbp1xFstZ",
  "key19": "5g9i8jumTvTj1d57QbR2TiE8Vs4aXex5NpE1ijKi3NoybNJ13VjDWTGchFSXCh9iAUEy9jKkPNmoFVPw6G5TYKKB",
  "key20": "5ZQzZXBrbSA6rfaU5WmAxdLUAeDfSbsoFYkN9NknL8zWVtxr65sG4L6vg7dYjfHPXuFn3kQNMtt58Fcu7jfbqCnd",
  "key21": "32ymPYc9A4NinwaCeQmS9ExVCTJesGoh5dFroecBqNB7RNbkU9ncgkzTnEcufGGDgWqbASvgEeTkPPN1iHZjwTP4",
  "key22": "2rjNMmZQPuycxBCs2Vhc5pTVkvsWGZwePJ3usN2qmkGzvFCz8DTWctxWTYmzdfgc9AcPdQxz5nB5Nrm7bxQDGHrX",
  "key23": "66MNJhWPzFNwaDRWMTfXLy24p7d4zyh75dUtWj2B6UqDtKnfXXfBZiLjPjqvxAn1fgscUhGi8bjYvU7DjRxauYJb",
  "key24": "2GYvvhMWHzfNnaBRXE5p2YHWmDH42Eb6KnTSuF192BZRG971rULs97AeTvNkhtkbVNoEEkdimsAkeShb1EWP9iWZ"
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
