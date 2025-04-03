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
    "64PrP82jd5M3pnWJ3nswnveV3ei2RTWUkThsYWdtmv2SBpV4KfTh9H9NRs6RVx1EZYpSoM1yJUhmTGtGHoVMr7xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RS2zsSXsiufmH8YXHnJLFoouUijvaHb5J4vMdXxqrE2jGaDWGmqSw81DEt4DQQ6qhEuPKVYDkESTLkSRcwvaskj",
  "key1": "4HBswVuvh5dqFiRLPYPmaWCoacToxeYGVEZq4JoiYNpokHb5DJGDZFYoYsVVmUdbrpko4dtRhjwTm6e7irBusEjK",
  "key2": "5KMB3467qg8y1ppcX2c3ttWmDeutkPnqmeeXisYHn7LYQQKasy6dZJ37ECVquzJMW47JTuRdbWtzn7X9AYTAtvY1",
  "key3": "3T1jLQnpoeeTuDDWdfVVtMvYzSw33zwGmdENvwQWqmgHfKZd6xfSQX6Tq5qk1a9PyoPUwcEmkgQVqueQ3pKAGLU7",
  "key4": "57X8pC7zdrgqp2Uq4bXz9yXrBwNKaxeoV3kn5S4XtbyZJHpQEYvqbGcz2YECgPuC9y7y2cXtP2CnxL1JnuJxcyGr",
  "key5": "2NuiCnskFKK3WJjKBgA12bZYjEkpxA44ng946VecSqtBYT9pWPRB5CtxfMnjAK9TUWiyzEkBec2XGAtDEvKVzTbB",
  "key6": "5zeX6FGYuafve2HBJqzq5qiDGJTRp8YAXJKxPJcufT8gtE45YbmbhK3kxBdVae6GNfwndFazwYVQq9D27pSMof6X",
  "key7": "3nSPra5QHazNe3o4E8GZXwNeYw7siuhKY2HWhDPTuArQWip4nsBYBrt96sM3q3YMVTn9gbQESAwtMWaNPogvUzLS",
  "key8": "24sGSYnV1bfdVbCo3HY25wM6MaUL1aNFwi21a9Xz437Lovr5EnxnSpfKVPxX84eEeDGg5Vb4tZAg1L2JB1LEDn3K",
  "key9": "3tbhTni95XhyhubXDBjxiZsJz68KyAgShnzHH2VaH2Xt5on4N5tpYe9GdGJQeEWrooUGtczCrXU99qNJ5gpNmdPD",
  "key10": "3drnVUUJ8cYqQuqzEwB8krpPPUQasY1t7RkwhvvKK34cez3Jj8CXbLr41RT9bkqDsb8t6NrbBWPYJektyMcgiUaP",
  "key11": "5cJ1D8fiNz1R8FWeDc5EKJSUqBUe4fHCwNpPsKUhGf51KMycACTQMV6vEJvHmWnAef16adtLoPC6AL2VvRbtk3Jo",
  "key12": "5QSHFmjA5W2iWhqDSDyMxwNtcgAwGFpqfhbvNxQWLT7WcMBW5yokVUtnRpDYUzCa4v9MHCfLEiU4BxCc75X3Tw6L",
  "key13": "3WNvVGERNZKQT4JERxmNaTeXeXGRGnwseDiQdpKqwPyLGgECzXgrcCeAGfqtw8hPh4JtQUgq76UpeqwZo4xptwqx",
  "key14": "3Kf9RUAVZqRv5cBx5JDofrt3Lhi1Qtsriq35V69WKH68QPRw1huCxkMqxJrgZtTb8VvYqKR7fHK3AnB5WUtW55Qh",
  "key15": "5J6NFU6GrPdwZAA4XyTxXf7RkfzXPdpZSE33otrziM1G7sgQeMRNuThYhNTS9Ko21RZvbdtmNTSU3eCYDe25y82a",
  "key16": "5UnD29FFxjW9qooSmEdbe5UdvAKvfMEtvrr5TJ6qUgTTMk9zsuUSFWk51tC8fqtwr2uU67hkagiRqgS9z4JXKK7X",
  "key17": "57bAV72NW4BsuZErEoj89KLzUqvRLJURzRLDsTvbk38wybmEr6cHzzF7KYwhuDTv5tjK4z2zfmN6DyxQDKqKnXG7",
  "key18": "4EMQ7AmKAdxzFSxPL5pQjLDewqZmbbFdfAU4P5Dq7oZNYLiSHwTJTYfxvYUizLLsYvsJSonZZjRtPfXgrTyNz7Aq",
  "key19": "3znyhEoRmBKrTGrnZaX89TrYHnP8LrnwSciv3KxhM7VTqJq6pnKBSFfG15aGn8iV1xrFS3uERpPieNGE121BWFfY",
  "key20": "2s6sjuzEzKJxZeKEmPZRzugBmGr4tShzXtQHYhkXiWVkvsKxYb5Dpm2Gwha813tiHqsLDsQYjue2Mm99MGsMrwo4",
  "key21": "x4CbiLfhstY5TepTvZYNkbehUipQnNVUkzRYck8dyrNHUke9uamcnA4BBTVY9U5MqsFfKBXZGU3WQAJgbqKD1X5",
  "key22": "4PAar2aRdsQHbFWX2CchUsrUkXdcyWTZigzvQBgqaFbXKBpVDhE3w9w4zD9jXTKxfwoix2bMNGQNEbb6pa9Rqpr2",
  "key23": "4Hj7QLLE1FFiERwRiQCuGjLos6R1Pi9rsRxijMsK22ZN5oBJLUKsvCfAeiguXQaoLy4krJ4Sm8YhpgabWVRd2QD5",
  "key24": "4e7GDJgQFzrzaBgfB2c5pLrmZY2MzM67xwHGmB1tdYz4Kkrp5o4CaaiLczq5P7SucJJ1yihX9a1JZeuDCRBiY3Sg",
  "key25": "3viepvJTuDwUT7Rtt4mKNUdt95U6s84Wva87XncYmwFzGjpvvCyutKgx7ErLoDaZVhqsowtx5hhe3YV3Z5eSEcW6",
  "key26": "5uKjZb1eFjxVZ9G36gtjQPPJFNJVxDTsmx3Af6gkjE7SN4HiTWiAXdD66TGVQsw7tTys8aq2Lg2HCxXnn3CErJ9F",
  "key27": "2X5EzDngg6Cs8STwUuKvvdadtvV6dBu7nVJQpFoHSWAoLmXGaBgnuAgcksCUPKvPsGFx8AoCRFgHMRMuNccovhTg",
  "key28": "5SGCHKa5iRKhqH9CU35ohhAak1kjE4GDajRfn3PP4fwg6WdHtCxiB7ndSiunhi8DRBKe2MRjMmFyJB8oVgnW3jQx",
  "key29": "5ecWskztadeDYu4wQnKu6bEZUo54S3D5WbJSjubSbDsH881q1kkkRomh8qpgLNCbMPMXGzRkDxeJkKg7kC86oJAh",
  "key30": "kZtWNDmtz7isVa9YhpzGmtuTWnaVEZXjQ4qVFuo9UTN1pEKD5TyJkYyAhjTK6wJberehwuEc7tRgXEPuhBWF6vi",
  "key31": "5hoS2rLf1VQf7hWSaZNr7sN6mnUn9XH3cAYFMjcGm4XMy7kXNcGNQgtDRxPUHsVC76pHP4ee3S8WgjQ999YDeEwd",
  "key32": "3E31jLhEk6drzWnzaEXmc5nMBdnpXai637QkVLJMZXfENxLFiT1oZdT2MaZGXu94EkCsAzrveziSyLdbzezhT22C"
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
