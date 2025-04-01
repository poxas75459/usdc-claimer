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
    "2Z3wCYM6ECU9SQoeVByLHsb6sXgLsQ23RQo1hcNDn8eQCCBSGNk1rUrKig1WqjkCD5dtkC8Ng3JgfCgVQsJYrzSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46wuXwAVFU1gnQCxKpJn1CKmWPHJmwh1e2B2JJnxsFwnLSonrheS5z85c2LeaLciQtD6WYHMupHYxmFcBgXatg1U",
  "key1": "4Hqjj1YTXvxPbMxTFfRrsFW6QtfHow2bgsEaQHJ7YbGsXEFNPsMYoRz3gWMTCgtA7EPNXtG9f2HGdqwguG19gA6D",
  "key2": "4TKH5QMcgHZbhZhcscquVRij1pQXLAvgWPq7i6uwRcAmabzagrMu66v5xRz7MVoMH7quZZJVuQFqNGMGPzcEv16q",
  "key3": "p1xfnGCeGJeH72N6DdSysEkr8xSphbMEwvemrjUeagvffjiGb8MctoqTJj3GcE8kzXYgntKb4GTR78zLmUmrhZL",
  "key4": "U8NMXtPuZbUC5mnCedL2DK37QD41XVLk6nX9EAKtq94otMRMmtPwy8JBGDeZLjrpG9h4xi4WfKAbEVh6CJMZ2Fr",
  "key5": "9Fhmh9RsmPL5jyFkrvt8hTPkVdw8427DYs4DHtc8Lpi7WGmXEzQJ31EUEHUCxok74NGdYo4TyzXxkzyYz3ZE1U6",
  "key6": "57ubngNmJwzs9VmyJcjttMCFiYLoxsSDtMXxry9pC8daN8R5cMtGPgxFw1wFZfs77M3gEJmxR79NWR47U1T9zVAS",
  "key7": "3kMkZU7DauufL9jVVFBaZqw9eXRPftfhypjNu4CQu5n58sHsgZPs1c2HDsSY5EjwooDsebKdbEeJbYcAoiUGMvfV",
  "key8": "5HBSmBgHUiiS3bhcuKgZxVYm5g22aVokSEXQisBGtJqrmJscju1abiLAyTrVGiZwCWRLU45TwYMrS1R7mvfgKVgk",
  "key9": "5rAxjAa1biR6v2TtTWKrNJNGe4NY9YorsyoGbzSehAodpQXvvR4NCGCGzKdtK4hLxj2GGtVX1Ei8sDDNr5ZvkY8t",
  "key10": "42grERA1EpFFoKrwNE2D7UxG25MKzq92ibnXxPEUY1TMgn89Jc2yxKYXmUKcjg38SaDTqJQuhrWc1QPUYfMuVJMc",
  "key11": "3fb5XWTMVFJ8fK1Z6mK5a6r4oPNfDQidDXZcjPWWpX2T6SRwzLz7kUM1LEhczSYfKVUbE2RfGknjBscHf5ZxRNjN",
  "key12": "3pcBnfyLGNR1TzFUXcqG5rmxMynSa5ZhaCVZXs7ssd7S8CcZEecWSzFi5e1JmMB76xcAqqyMQoWdSybGrcbTewMr",
  "key13": "nFrzqzdLg9fisYVu3Y6X3JSHREdu9w7tJpAqPxCVudbKX17bLP5adSuKVtMQRkSqyJg5rut3NGp5nGRURxKnrsk",
  "key14": "EbGN4PoZyLm1Ua9dpmCdPeF3EZ3Fnh4NBRqkZ1UVAWmCSrmqD1eH3CYKFbQrWcYZYsNUZXRJVnXV6G57qwhXsoL",
  "key15": "3wcbnAUGH8FKfXopjpGGhgw6ULomncWMwoBYTu6HXNP5D9buFhmCsWoTrqw8SbDY1WFLcc72Uo9iSQkhYy8aziPC",
  "key16": "4ZLPk7UKHNfhXwYG8WXoA65ikpq1jAQvP9ngKDnvR2xYRPzfpbW3JkxFXu6k1Fd7JuB8cB2ibUEik41Ujbh8bWz4",
  "key17": "64VZ2b1c1R8WGAoJkee7GsimjujYu4bGFsgyAPHt1Bpr8mk1U4inPCCBfLVa2ichMBtsD3wkgRbBnmARJZepxcNB",
  "key18": "3ftUQLTkRShUSwGa6UiLMed3akFFCaeAZrv5Yw8MiSQPwUmy2eEvEqNivUaNqLeBR59C1cJsAad77dJQguM61Ydu",
  "key19": "4CmCqph8mJUXJfZvLNh4biR7uydvpPxfSAaioCGhFpeMoWefb9pAvnRVfB78HL6F8c3ZsTsPwZNxUArYSW1H5WpS",
  "key20": "2MoX31EzFYzsau8QmtY3s72AYK1JUbdPGWYJBNTihPBRXAzBNBLCHadw2iJZ3ZRxoXnBn9wpqgwBQfc4Yg66fg3m",
  "key21": "Ygw8J53WzCp69GSzzP6Hb9HLdKwEKZu3KeLa6mt2g1AbWLUM4s4Nufu8kw21grj5qWBQQuMj5HMkrRCwEaYTDvk",
  "key22": "oxQ7hZpXQVc8bM6ifbh629EuoevLJcz7k1N8o6h7EgbbpY9F7MRW7jbR6UeWuwHZA4bejz5qQuh6WCSxoo4d7sX",
  "key23": "5EYYD15ixM64Q4Fb1BJNinkUubH7Py3k19NRpEWyjFgbi5NLzYGPSEA1opWJGQ1t7mmPTP2Xn62GGSaihz9Limjs",
  "key24": "2Q9eMbYANJwtJwURQWLunsXsGkWALJVP18SyGS58GTeUV5wEm9MnC4attECF5wScLQMMEVVtycLmveko2axH1XHx",
  "key25": "3qUtjsCDs5dRRKmBnPD43hX8poReEYSQKZtCzN4cDKeQvEZX99kB6KLtn2hiotpPwqM7Z4Uyg2brxVKvUjw9W1Ev",
  "key26": "3TefLJ9D2AWSSYU9f7KyFHGhcEZxyQMQ5qZZVw95TnjxDEYtGnWWRBNKp9BjseLDGmeKqgceN5DU8WmSnCqDRALq",
  "key27": "Sh4ZKCt2McpVXe2v7qynPTSz7hMJ3F6N3pMtVyA569DWJJb1XzZTVtrrx4mSHmKgr1b5uNjGZdmvc1pegjNxHpx",
  "key28": "5aiRyXeX27TWDjm9oaDvzWfa5A53oTJdezkdyow7xDAodPHZQ5fuZq2NoA9QNykRyuXaBYVthePKsj81nEf5T5Et"
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
