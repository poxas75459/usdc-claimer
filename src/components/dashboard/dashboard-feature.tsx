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
    "3YgnKRqmoBETawPpg4pHMKPUGyKjLuhpvpt9joQf685QWi7Z7T1U7eBrNgeQQAVxjF9HJmcxkfYTEwob76MewarK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M21hGkPuL14hSFMjo2wg77MaFxQPmefXSmL16HHFd7gL7ppgDhY3hEWRwfWcHD1et2vcJv3JsS7dSr4Gxg2sNTr",
  "key1": "7VmXFak6iCAwUcA5EpDBgvNpoCGcdgMyDkA19C8wtQt37sREEcZzBYbgikuwKAD9YQNA8DizwRzTRvnttZAbtc7",
  "key2": "4CVtezh5yVnULQzPbSPxZmD4Xjc5uL4SBY6nLBwphmWUxsxBmTmmzRCF5Fy5d2uNjDZuScECDaf8S2sdhCuCLXHh",
  "key3": "61tu7uzPQQqxrE2QhvGyfqWbeEPijbEV8HKgtzGPfLg816DMUPdnyEcNpbF5DSEqDi9pb5zdeT9uWG2RQjbpQ1Yk",
  "key4": "2ouvPWs7aMigxDsz3ujVhCpTe7RhbReTCN4cTiHefWWFYfAtCVv4WQqsVJNPQExuH6XSTodjtKSSuSkp5ugenPe5",
  "key5": "h6wAYdQs9y9hjKaJRvNVdGMCwiDtvfyJapG9gmDXUJKcRQKaj9hzRn8BjnGhZQ3VJk95iUdzMTKXLnT1MDffRHA",
  "key6": "5wcp1TNrbzNPQKFPzPuWchwkoi89xxAjSB1vd2FGGvEAkZjFgS7RAk6hAibFzR8jhNzMGHFFh1YTrDeQVModPHYv",
  "key7": "QzoeyytKUCe8KWSymwo1bKhpYQj2cExgLa7a258N2CF1S59S8UZKEzZHGb3fB1mAUtt3GnKusFWK31w7bEaLgFb",
  "key8": "2rZVmtDrtmt6GNUDNCZLzSzHHjqoN9Q7fTUdhg7kuPxdK7Auaein4FRWheMRuPYaDi4kE12pbEKCAt2bimZbyuR9",
  "key9": "pEeVjSAA7TNyKtSa5cCaXeMectQjmTq6faq3vKQtdhnPKJpzg43RoE2bsLZhiWRkFVubxAoqn1T7389rcrreMRL",
  "key10": "2ZXy3TKTNMAJisweFswpigncaZ3kaji4JKfagTSZJ1WTPasL1MAUVj2bo53fYsodiDGSM6wHdadYK2FZZNRqJ4Rj",
  "key11": "4W1126LsKeXhAaSL981esnVsrXrH9oES5nM6UQf633cLxFdSUedutq2o3T7J5zWxHJQyBCpetcgk7NBvxTTNytbp",
  "key12": "fzmWFVk1iVRUwVz2LX5kBsTiD5ie14eCTmxz2DNo2gSFRoyxBkD8r3vy2H9aiE8GKAadx17g6Ui7zXk7reUhjiE",
  "key13": "mXoBK4HqWmktT16GfXTQhSTrqvxeGJggQwBXCKqxAQD2BkCFDotVLF9dbcG4wLXpJGMvbm2boTzJEPpNmBz4L6c",
  "key14": "k3seyb29g5sBTMTDcXeqFzNHUpsvtjwfdCotZ2PPY5os3Z4YdadYUSvMY5Q8Md7J46BqcF3RbhU8ZvaknNcmmFA",
  "key15": "5D81J25VuV4xYQcwsMk7xBcvdjCne7PB17BxeSdA6R96aKbzyNBdCgEpgWfdXvybJbRGRkFZNzHWaGbJzhGgJ6CL",
  "key16": "4GQgbjocQYPVcghi44QVcDedgr1iPz7vFTrvB7RJwHgYfHo1B2zT5xRnsCJQGDrnKJftjqa5QU5hgpn4WT4negxK",
  "key17": "269CpcbkgdD82es4LkGxCqhEBSNeHV9n5xG2obZ3otREZmbMGrU1zLfY8w5AFuiZiMwxd62ZtAR8X6s5wQJg6Ldp",
  "key18": "2ZcrszRNVbfj4BjFNHLz8SZa9i95A8GPnYj6Up6PRVudaqGWX8XkFnWPAd4z36AiN94bhkjazbgmZYgbhQuTrbCW",
  "key19": "4a1NcDHqAQxqyzPhirEkUk9J1CkU8o42QsN8Ksegx9EzvEGo5XWBpxrDy5jzmLe5qRADtaSU2MvwQH6Xbr2gyJE9",
  "key20": "4ahVvLCnCTpysWpdd3VzJHek3yAytQ7ZaHuqwPzjGjF97BJ7akbg1ZhbnyC1sUCFkCFByqWyFFPqqBd61fKj61xQ",
  "key21": "29rJFBiQbMTUGdYfikmzxeWewiegqvVfx8TGJKddekSnrZ58jR6Uw9g1EtCWGFYG2EEmXF5UNzLEAod5QU4n5FoD",
  "key22": "4NS1ddzkuY3vPCMYfo8GqDgLB4GcWW19TJqnNFWE3YBApVTB1uhxgcxkzKw8vsQWB8FAnhfgjRfV1MUdeWNbYuPo",
  "key23": "2KWyuaRq3L2g2EmCq4otihXswojAP328WbR4JLmH8X8Cx1CmuFcMQNHybixd2LbbiAJf5ra477tbSBBz3H3iYKT1",
  "key24": "3kae48DKRXtjTYGgyhK3FQV5KAjxWfSAaVMK2tPMzjFUP4LnVNGo5LmaKD8zfJyBtZkZosq6mL8qpZZoJaZNSLkf",
  "key25": "3JK5b9pAmmbyk5bfMshvDznH6LBcm5NEbAE8BPm9CtmE6V6FqoaSh9NzxQQXfpbTqSRv41iE7maSSxwdP1JYPtqU",
  "key26": "WZrRnqnnKa6sjGcF2Sho3hkxtvfCALUE4BkgiCXbmPZjasMZKeJpAqaqXn4NS94uxh9r23RkJwiDMxKza3uWbe9",
  "key27": "3CiRM7UEHi4xJy97tyk8QUjdRnA4pJ4n3wv9LkTR6nmgk46HVJLGd3Jo68gh3Cgmy4iuuHjCwDZ8DLPADcq7CVDw",
  "key28": "2dHxyXVJzrZgMEvpALtwAdqEX31N6eZgXqx7ukhWfk9onhX2u9PG2FphRKuWYzRBLYiR4YiwL6e19tvBjji992P7"
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
