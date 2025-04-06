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
    "5sLGwFxtH5wdKMzGkiapQAevWFaJznsfoehqP7UjNEbH6CTfR1M1sQjATNkXVCkoBeqfrP2B8iWQfLQFQXTvrE36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nYpRgadj5LEdGjXamQ56mVcukYzNtiYE93arwUKcKhXcvyBEvGLnsXZ2La1tKFkJHMeBLozAPRKwnQiA5c6TRbm",
  "key1": "4eyCrLqX8AkgokBdZCTKjYgyuaLjPX31KC1J5J3FvSkNaqXNtFebmqJHxec6kSm2L2AJjjfDbCXsgDqF3c3w8p9G",
  "key2": "hM8ie2KcCpW67ZdbjQbTr3bRb1GFk8uMW7iKJCLz6PEPzx4DkppXy83dZw9GrTZEf8pNncTKLH1T7VmbnDuXDPF",
  "key3": "3xcusVLj9zWSzfP9nKBDiqtAK3cceqwWvQK5cwqVe2WyU23kcnhXuKF7KAdUBj45y1ZDKPPHUjyAENHobRmH1ZSS",
  "key4": "5akNJ3VFfmTub2sE2WPdQcpDkCW3H6BcqKea16Mf34ZdyoaY9KVzAd6CViRqXBXSq348kHjaf76NPaXdQQ73SAvk",
  "key5": "5RfotnhY91AHiuGNQbHf4yxXwFfNcYkhF7z32tsSNY2ZrF3G6hhsoqr2iW4dZRPbkLmtF99NKtkbzrKKU6kZdF6X",
  "key6": "2nwCe4TjTzWdDKiko4JKdXpjJCpyFtLfDUm9JSVC4WriMfiGsnVYNFJQjzF54XNSGSRVPQ9wey3CMr6dtEhTgg5C",
  "key7": "Nca1vJbd8PWiYNHoYYVH4bC4fzdSh9GibCoteyFP4m7Wjx9JvWdrGDDFp2XLytWooz7G9KhGtCjYNzmJbEketVv",
  "key8": "4v2KRK31knPuQJqwCSukBrW6shVALAPNhTZTXsbaZ8M2VtGnjnRHsQcFASfXSnxq8bhnabpZjiRMfEjT5nuyQxXD",
  "key9": "67RVGCqqLQCshzKr5W9of56op1MHp5ZvehMyPhkZAfNzC3dC21bdPdwaTBKYEFpT4V6RKxjU8zWQHdJudo3pUsNC",
  "key10": "4QtHkoQtL2YwVmai61UutzyCXngpXre6Br2jAkb7FtfEamV1wvhEpYz1wLSw5w9g1RPVCc8pix7NADxXdRS3FZGs",
  "key11": "5c2MuDqhJp2VtDy6mpS7SqwVyTexuwedg1q7fDwKq1W3NoHi3QZC4Hynfrhc1H9vKtNK1TdvvM57u2qambX6NWMQ",
  "key12": "4WTnmkY87Td4NrwkadkRk3Qitoue3BU9d2Vpobutrj61XETdJcdrQkXWskj68a4raYBMvhyxu53jSCJYUfU9MWh9",
  "key13": "4r2TeBqReJ38BC4Uewp1uviUjkfSKZUJsLAUknYsZDuSnbdU7oucvVYzTBpPpovrjdxLzgVNsuoN8LP94wfFAW8q",
  "key14": "4x71PC3aS54mazjpJDbVBvNW2DT8UD21tmCR6RjY3oHU5TnShpHVwcTJDtCwEGFCjZ6ziyChArc2yiAmgVe47G4K",
  "key15": "z1Lfyvf8bN3Vy6eQcocvKTYQ2pCPJ1CmbsahsxU3EGvoamgP7P8jF9ki44WjJJWH7fmVFS9QetRegG6zekiZ2EB",
  "key16": "53MuoKQ8eYGPYmQ5MSgXw573MrSaYRqWn5wjyvZcXM6u7rLETq2uHAdtbrEeZZYVUjbQa55ZF6ecJM2eJjH2LJRR",
  "key17": "5TXtv7CGC1U24x1aG12adBxqskmVZMFr1Xkx7JYbtMNLzWqEpLa3dtQNWGjuj9YqyqG265sKTpacEremCnwkrhf4",
  "key18": "14hnHFXQSSTTT3JeTXPKCEKbRiX11Mz7cbrCu1bsF2RdiejEwSdGMoWjh5sH6VXYxni7uJdyED6JBLSxXuiwPAH",
  "key19": "4SuLghKNHX89yfEb59EybSofBKhRfxVwSSKkMN7WTTPw4V6NGwCEJDERonGMkBMHf4goyvzDAcNgMHBJBaZQz14A",
  "key20": "3bKW7q8xGjpMuMYUbuncHTCQu5ySWtA4ce2RbG1sjQukvJeMe9Te88Pe6wd7ThTRFpP8j11nJQy8mAYGsao5w3Pn",
  "key21": "4fNU7x1qtdRCRJBURx1qfqdHw4qEEQSYr2Fi9Vyk8z5kJF9NqAkh9PUucgfWEVCUc7sZ8BXzt6VpMipVFtjQ9LKL",
  "key22": "DSPFYyQVmt67jBPkjStK7j5P9ocoqKGwA8ewW1b6q3kEPzhhmxRqMRBQxCP3faE1juzLDTbSaAWPsNCkgscinV4",
  "key23": "CNShpp2xyfRjL27shwkLKYE7roExgRGUpNvyc3jBKHHcNNjYJ8pQkAUCiLQhMMFjiAKGjUicYKECEKTgh6cyA8d",
  "key24": "293NkPq8N1AwewvaxDWcxVCpcGfcQkMZ4nA1XZrmGLg1H8FGLg2dZcU8dq9bpx3GEoFPDa2DXi6wskP3FBWF2Zxf",
  "key25": "5kJFcV394Aenxr4H8qLR5x3p6EvJCeKgZHRYFutFMnTUoEHWE3XWh2uEqws8PPenGqpodZRadsyj1n2sukjify5R",
  "key26": "S7hjNtzTCnJLoKUe6JoBzSzwuxcXybEaouNf3YLDq78UPYee8kWcG44Lj7uDeCH4dCxg3ntoJreTrAn6cenHgVe",
  "key27": "2biKFQ6N34WE7pHLkxpAT5gys4HDLcteJ2g1r9ztKyghmWmLCnVJFqPYWrmtzLG1nZ3Kcom5K5KfHVGrA6kShkJG"
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
