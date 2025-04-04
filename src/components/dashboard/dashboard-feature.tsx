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
    "3jTXgqo9iZcTJAxLfcLyNUgUVVyJE4Duzu6LWUcUhumegeULUsN5u9jZ6oNcSVdBM45vYmrTS6KiBdTZB5fousss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nneuAHYgivQp5E7Prz1gsy6AMgKU1LFwNcfiLywkD5cXQDMg51NUF7QzfUrf2TFrAaaj7Z227DWAVmEizUVyq8t",
  "key1": "7KzETfKHCJ56FTw4FvKRN2vAAaYztU8qtscXp5Bke6bswxJ5ipudHRutLmJcZ7TrmZAtn42ZDiEAsWnnhNYEiFH",
  "key2": "3UWUydcNj6vo1aTANhDvSuVJ92re6wox4QjkUCinxabmSRinmjydcFMjPqQcUYdwvQf4NXuiqz67b8fu4U7QSyT",
  "key3": "62ihV2gZBsgT12Ert73TYnYR7PQMdLqrxWryBayoXxeHDoUXZYLL88CLVbDQwosHY3uU7xFdpMzhDNF7zjWz9UEa",
  "key4": "3h6cTA14F3CmRUojv8wo8wHdb82ZUTymEeeB2E8FY4xESRDxHxotkG1vuq4FEaLTZeWx4FM1UoBJRwoNNXmJzDfj",
  "key5": "2XBRQeyFyCQJyeRZrgbwfCCmtKV1tgsWPom5AsXo2v3EpiCX6bzQ7fJw8ZjEV94zbuQS5YDknphbEbZLspeLftmj",
  "key6": "xwB4LWEswKqpLkzKbybRKqocmfoDB7ECzSnQ7yeSdD9ZKwzWHXcjc27B58HF5ziWYusTgKnmpNWcDuBb42AWtuS",
  "key7": "LAWkW9EHASfbCE1Nqv5wJEmhb2jwchQDHKzyVaMax3y1HXWf8WDxurQJFbWe8M6U8VPvM2cAqvDBnT6NCGsAAca",
  "key8": "563Cb1Ugpv727NpQFYa7nBz3FPGdFLFcxtbEGbLAoqnoGyP26z32fPuATQ3EBKHTYfLGxrY9z3Ha9mGj3pV7VwHH",
  "key9": "3xi61Mg7ack6WzoxBitTwzMjpLiBvf1D5J8Yz9fCoWKJwqV5z5xCnaJxxo5oYJKMN2zimN9besTwDj7AUDRs5jXd",
  "key10": "3G3h5v8x8jDShYkneFn8ZSEBQaaihJDk4XYvhtRg3cH8yW1NrSjhXmcSasUGWaY89hMwvDdYQALH6Bj1c6jGrqqK",
  "key11": "21DN62YWbH5k2EeFNbqUhtPkhqSqrDHwUkjSKMxtm8uVwjSEYonszNquG2Gf1hqJDz26KNooRosQWAUu9exnbEb4",
  "key12": "2Cz2zhoHhB5pzhyrDh6ns9u1RpHTj2ZSSfJuigN1hFWrV6XndaLqAtqGCBbskBLGvqPD4usqvEBnis5R8GriLmKT",
  "key13": "3RdqkyGgjK1roHePz8i3NHWusB3SATjVkFARQUdLq3PZ16znCtsYeBPcdRjTxmLqnDQZVdHYxWDJ73XVzbozWgzU",
  "key14": "bipaRVuw8TrjQkVWdH4qXR7DfimVSZj7VErjLJqxm7FkhJMwbZ8mLbfdAhpesQowXARmthDBazjgNuSLnj4PugD",
  "key15": "2C4QZsboifJa5eXpBcwu2PNpVRT6355cgiV1qMAPco9DDK4DrFeUTFQpceC6fyEBNiytULJsyoDS5wAdp368goEy",
  "key16": "yRPKYiao57CdpBbEzUKULxZ7jUBC39PZktvQfMBwdtSPHLR3ofw6GK8h9e58sWVFYSQf94QJcdHMTCwcBtPgicQ",
  "key17": "2wkF3M8abN9UkpJTPvNBS5kJzLWB7sJkZzFXPBjXPQ4hQyDRNpM8BUuGd6K1cSXjB2X6qWXTXzz1XLZ3p1CMvXw3",
  "key18": "21FjYuQ3bjzQBrd6rnjQ8BvhPjYprW5ivjJTZRnWkFifdTvnhubo74RH4PXvn3rrwEFjDa9F1wrDKnmWiLwEKPaE",
  "key19": "222o9xmFi4igcd76V9pAcUpvGp37PxmHnUCsHASGw2BC2GGD7tLc3vwr2B3hf6WrZM34fiKWqLrCRiYmrYwxQ3VJ",
  "key20": "sco8ZzGsyNMjmCQi7XveaB31T6oHvxJiMHPUpRAK7GjG92SZK9PyXJW9BaX5MLvWpQJytT8gfXrMeZkcjAJHXV8",
  "key21": "v8LZuvUzSVv1jjVti8nS3tvM459b2xpWe5k6vZQbCAL5WbS7SrAW4Ftz52ACWwUfvs5C8jVFTuuEXctVapm26Ae",
  "key22": "4XgotStPVSXEdUb2paeZG8DUzbRgSc5fVjNQ7HNStYyoYDJPJ3mbjjUSPXs7uB6uqsCY4W8oGbiT4kpCm8Pse7pE",
  "key23": "3ZbAmdU5aTS9qtwYUUSNbDk3rr2AXbQnMuVcFJSdeqTGqStb7b2bEkjQbeUr75sos9dqX2Q3aM8Uam8SVB9GPubc",
  "key24": "1213d2NMN7CtYVF7vYjCeytKHhsyUdFv7LGCrFWDovLTCVvtH9KttPqn6Wir7xaPZm1Nszxda4WjSEsvyFtGDbam",
  "key25": "2VHn3gWaBZHi89WfJpmCw69J3Au7q3rcrcEtwsASkrk2KhXac6kLj5EU5jmqjW9SwQbmWVqZJabQfH4AZhGUptRp",
  "key26": "4CHsmJDnHonFeSpaXeB72LwViEj8HHzqUKJwUj6KuATyYU4EdkYRqHUqujfxBkWcnLuvxZzKJ4Yt3upUf3KSSXz8",
  "key27": "21HPx5uoXfUi2JzHnq46QHZWP7cnLDxRucrLNCCUrasfWv7kcieCr2od7VwZSDXZagFuWQXNEi7u4nvWLwJ1pkPw",
  "key28": "5NHHbCmVMMY5bNhbuibGkEPq2bvxYMUvzeynQPbzojz67fVXWba1fmBDTF7LCrdQM9bkC1sxmaSQeitUxqy55En1",
  "key29": "3fkzU7DEEUwo3ckvqe5ZqfNfTnyaQAXqucc6vSmfLcsdHoYBWbydZUHZTk2fwLBE4AtTtT52CHR3AbGvBfaqiAij",
  "key30": "5FoitJpmDqAPhrtW2uW1afwGordcTGJk1mZ7YgEEiDE49TVQHNvTQBskHDyX77eAzRQeWHfcpebWe8NtvjY2ByK1",
  "key31": "48ToyJSqjcACEDZ2JZbgKEhzqCWiYMiC2yJsUswbcVWiohTeMtwxJjqSkbo1asqWPenL9k4Bt5gRxdTrhz5xPjtn",
  "key32": "4NMhWd7A2sJENRVFosPWTuxALpH9McyXq9vkeupY7LjDMmcKwN9CCKhvN69Fbzb9rsbSyobwvRgKrL2pNeYSwdNU"
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
