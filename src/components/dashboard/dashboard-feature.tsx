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
    "4WAzR3jPRM4aWiRHeFt74hRod4HtzYi3dHknoTQJEHan55E6CC4B7QfBtFnvNum8cGapPZeo2mq2EzQDGr3tJDgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WV4JcCq5oENTdy1R3qqVe97wNnrR2Yk3h5VEdK7oakhGFUwyHGD6BXeJReT1TkNJLNJ8gQaamN3kCUZzTPJLM2",
  "key1": "3gnn18QYXYErb6xpsyLk56nXaqC62Nv2wtyzkw7KnJVx8UCQG31CgvkAesMakdpdFLU3weRviQHGnVVEBziu7Vw5",
  "key2": "o7VsypmPznEfJ8tu9VErLjpyFTid4PQpdtrMwvgfhZ641iqw1SarV6anQRQXMAFo1fwsQnN4B8doVgXKPGkA5uV",
  "key3": "57xCdSr6PDHiQtPEEvVooNj1ekAoyNPZ6kGyCcycKKFuhxniDLvgtLsvhdPyVzaAUxLyPjzVyJxzbJxgduPnhJPR",
  "key4": "4eJo3UaUMLUi7eaHnjgbnCP3JLuyHMvVBdYLXhpt8aaTepcqM3gw9PLGw7XqTbNJuFTWm5oTVS9wNGYF1RJB8ThM",
  "key5": "5hvQcM8q6w7Xfur8i5xd16mtpZvJD918SZVoDdntUftew7n8E4Ak8eVVqqNh2rhZjVemQMyxTVEBiZrvn9EHcozR",
  "key6": "4vgobNcofYcH5FEfSwZXL3vQSg9TuBWDRosLZffL7i7CfYB3p4Kn6XueEKBaLdFmkLBeMWUpf5oKXgv8zXCSPysU",
  "key7": "5wHT6FYZ7XMWtjFrq6Px2Vk8GZtvXMvK3BMsatFFfqtpLyhfcMrf11h9zu3xMRaPRPQBP1sr9PCkC4CJ4LNh24CM",
  "key8": "BUTJTYpN4kvCpds2n5wsG9ZgYJ381E94Vsabr6eZWqaxwubnNVFiVgU2LYrQ45UavKdnivvhTpbq6qeTqdTtSUU",
  "key9": "2YMCrHMzf9kc4P8sDFAprzc5m9CDgkiiEb31pTe8MDuunzRTYJsQnQoGyYDpbMCCtScy63gtt9ESpgDSnZZXazcn",
  "key10": "5sX77NQxyRiGWDSmN6sZvhSCznrfpWXQxTr9CqoFQwEzos8xeKpjJNfLt9pTo5bgyqF8SWVjZnkQZrGk2grfiJuN",
  "key11": "8ZPLGRW9GcUsEpX6TX9bE72b6yrFoNGUPsxw6us88NTRihzXMmMHSYKdBdMwCwEUcLVaxK2z5PCHYNhzMuXwDxN",
  "key12": "ac89L8tY7KdHpf5a2Jry97hK23wSB57c5CxFxWCTuNqJ8iVoDAyT2kFapESsoizWMWH3ge5pWUihSFpbC8G8oB2",
  "key13": "5prV76cqgvBc3AyPrKUBQREkUDv3mLVFNTi6hDBkfY21s8Q74PU7F7se1qTHDatXNoe65qG3C4afV7hkH1fjz7zH",
  "key14": "2CMiDxwvNsZi3Nxw8XNVdtA5pxhQpzjvECy38h4FKoM49kT1qn87CzFvwhry9PXLNh291NjFtceY6KLpccYQXx7i",
  "key15": "32TyoxJMvAsrUUkk5TRrY7gErWDZsSCS1GNCafjEp46YtF2V9BKxXcvwKKKJsnHeGzkW66VWJtiP2KapAuRfZMqV",
  "key16": "2rRXBri5GhQuCLHsD7jbHcwoWfePMmQZUriFwo8gekUvPNkVFuzroJmjeD39LAQuBeu3QqjLrJRxnXf8eUksxTTv",
  "key17": "5LhHcSuq4mcTJSZ8VSRmS4GLTAZbXQcnXh4MdbbJ8oivJPb1uFekRAb8s9gkCANYFENkMCZLrpjPs5hr1v9RxcU3",
  "key18": "5XAkBGJX5upuB9ZoP2JhcsC8yc7J3niYWCw3b7nauBz6S58muLwTUVM5SSU1eLpwXYuQ2cFZsUvimJ6C5PxktWmg",
  "key19": "7QFGLskfcu5ELDorP5LDsvdyv84PjfE2eVefuuRtT5D3i9KWV4qqoFUfDWubdQULa317ruKrpgpxPEzuwBvjvir",
  "key20": "5rPY84PNMcb78MS3aSXLd1aKm5RNYifL7DSnE237MyYtn9GM8z9jHkREH1U2nMcJ1DYML5RkGRNeVT93YnaGZu3Q",
  "key21": "Wh1h2VGEYfjzyB2QFU9LhvbY5FbvS8EJTahGUM4K1Nkpdktxv37VieAMjxpJVaNgoMeZbkArXcztqDmkLqURD1D",
  "key22": "41gfkXCBHvdR5XpwzRpq9ec56jUHbatxSnxAorn6JuSL39WWUd9eELqvz6hvt9TUGnoqPWidZju1FqpQPaatVAsV",
  "key23": "3MhSQShCt37d97U3JnpBYHLsjgCjCHu1bbkGHAYFbZfU3ZK7GZmiJ7aNQXMfzq8cMEnZ4JyubHVvMCXMd9t52vw2",
  "key24": "4NHeu55P3bWaG96DgsmkxStHqxd87H1az7CSa67fEMR76v4WTRbfLdmcNTz6S1cg9eMbT77bRTfngETNR8LRc3fG",
  "key25": "45cZ9poBc1mRoFmv2MKoSeWarLxTxiK4FrYAvWUBuP4NKDmpPuHpDJoKsYEgsgBbmTsvJaF5wo2r16WmUWv6G1ay",
  "key26": "5vaKvh2FdkyvFsjk5Mz788YgCEiE5JtRSio7SFNF7gPpfUhCv35W5jvFeCwans3FVTjPAEj32WZxEZVintBJsfBp"
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
