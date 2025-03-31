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
    "tahmxrK6DaS4NUwhbdcXG7yp9DwRiaybaEEet8xGvRUQo2wPy6W8cmVkFzAM2ZnceroThcV7wiqvVhe73xN9x8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xE2nBNufboAjxBURE4hrPdpa2NSEsqfUjLJ4wN9tVp4u4CYuHVot97Ejm5yjHjSxLAAAN7sumxnWpZCSceCKNvY",
  "key1": "24i5gW9zUj2kFBtvqNHYBGYkCuXpqfQG7ZPFTqWZHNdFt4Z7D583XAoPwZRExrv7JLKzZ8Yc5ng945dVuoAbBmJ6",
  "key2": "5puwRchcgWCT43u1a3sDPq9U8mKV1xdMcaK7H6QtcZCXh1YQ2YHv4FF9rwcJM1ztEUXrg3GTF9jZrXKWNv232d49",
  "key3": "5n6y7gy9A5igDD6SRzTn4yB9UAZxg2aA4XrPFvcG3NbWsgyG5eZYPB7b2j264uxFw8dkxsARdhHthWKYTZo1bfpD",
  "key4": "3jpT4ChqkgyoaRWHNcScAes6ifGtq4Km8aYVrTAsu8NozEzPgUHMdenx9xoyHi2tYAcj42hK3uT5Ht2DTCNMWgXo",
  "key5": "2EqtWSCqjidyBxzaMvVfpbCPyoMv3rmvz5JjwvNC2PtDRTsZKpbEnjyqnNKNRnoZPpZpENvHi5a59shpSmYaNdVz",
  "key6": "5mnBLWXJnsfv5nRi35zLyaMBFp6utMu412EZC5zEQFY2CtUrysX5ombjtEHERtwc71n6AQ4D4okpYArpTPPNxPr8",
  "key7": "6AfidjWq1M9NWaPftgAESCNAnoGAskKAZugBk45ionkbFMcy5443DpqEcTrAY8WK2k3x2fiduzJAQiCQzmcRLex",
  "key8": "4t1mrnqFWNZ8wBurM5sPkDHAmeSMfiEmB1XH1b5ZtmVWduEUoMT3skGqfZHB9T1JkSMtrGA9WriS2AGe1EVH1iKc",
  "key9": "MSLeVhusoGcbAmZajqpwXn4rmTzJVjw9WfB2Ps6nhSjx3jqFBMvgfsa8F5moLBmcCmrtjFES6sZrq16rGUnJxWV",
  "key10": "64YtUEykfn6WmakkDVCsbT127EmbAb1U4c4qw9NJ91ZRqF5LVipXUQeR9k7WeMBTWEdEUw1nyqpBZxADhyoTsvEe",
  "key11": "5oAsHMWXbTzF5cGSPXHuokUjYqX4ZgxJhyvP4SnJ4ZgyqvetgfQp8smdt5tJF1EfcjJWDSgFL6m7rTKE317bMJRQ",
  "key12": "64nLtJ1y56yMnYAFjwpfWebEzEEfWX56LH2vaZrN3mzXE2HxAZhCDdmGy6cUKkvwHt9eoRUV9XN8z24TqUawvW95",
  "key13": "5HiE57Ds2EGGbJdMqqhsdDa6zgK6sZb37DwArJfuAJwDH5wptgoM63ohk2WSSXfAzK6RWpeUmNXDC4JMzKqJP3vS",
  "key14": "ob39RJQp9Gv2MS1ZzrdbVsmfz8tBU6wgEA2fPYfpRqydhqLeqhq7YpGupKuZMrpPtWo2mqPqqX3CNfNmjXmDhVJ",
  "key15": "3N4aTXWrCFB4MUsvGpxbzU6Sg45n2dewbSZXPKNBfuabWJ5NyndjHoqrMp3JpAytedWFFLoEHgJ7pzM479jTbA6i",
  "key16": "4qD2v1Sojq6r1obvWfGnUVKUUPUQoMz5oAHWHY2Dpe1GmiQqyMfNS7YrWemD9WEqe2MSWit2BgDkx71MQ16toyT3",
  "key17": "4CXsjLuAu4TyND6g1W7Fii3UbxKJnJNAaTADYNmjF1BYKLMvJzTm2Jp3tBGpPQQEtnEvccY2c2uYXLkjqrvADrDS",
  "key18": "LwzdH1YL8L1CyH4prz7aJ1xBTc5N6YZQXx6cN1YJby6cj96W3VeWWwypkTMhMbsH4vXy2inF9A2GgpyKSUHCwLC",
  "key19": "2TDAbxfW42DH14KxSg65ZwfjsD8WqNkqmLynZYACgZMrnsavFPK8ocxBqP51eLAA2Bp7PwGqxoXfyv1GEsgPednr",
  "key20": "81o79BbHXDnxu4JCn9yY9HKJbznYaLgnqJjWAp6QSgchepnfYTJNWuhJ5NwukAVELJBAGNoviy5w2kJQkCVLnwt",
  "key21": "2bUQH1DTcxVkovHQxqeoq5kfygBejtqRK2ej8NUhStZD189L1W3KKjgyaY2oGnKSHQ9cr63z8y3W1y2Z1dkpqqJJ",
  "key22": "4KCG69QukHGVFzmxiijKCoFgo3UGsJRLcKX3NVBfbvczssHk2C2mmq89xR4939ETc1XTtqDpdS6NGvmwH8rviB4K",
  "key23": "46qwpvfT6abzVXusJfQAdQp89HwGoTxRfLTw4Kuhc8cBQDY8mH1wnZDKqzVb82oijYgK7H2jG2QQrbAsDNrypExs",
  "key24": "5CQyREQ9YP1jj76kiN1zhV26nm3L3pkNhydyRgpeUi5jNVwCr4T2asdugGkXXbUcwFnFNCfpRwvnBA8Z1b5LBi8j",
  "key25": "21weWgvZ39LipSRYD5TyzuKUVR9RhCk84ZsoU4eCnffaZDMbJFvvNoD9RhBv5dLqyXzVnpH1ykni7G4bhe3nghTM",
  "key26": "3P714h6djhkGDwkdAzC5KzYnnQZA7berqxrzDW5n9L1xneCJL2aYTHkYnU45z8xeFMhdSihVFdWPtiWMqGqbc6ZS",
  "key27": "2uzgW4Dgba52gYTbSMCeHNBWWr4J3PycBZdg68S5YXz35JbjqYcaxcr7MuRGQgUcXGVUwsKEHzDc7x4rERaKBzk1",
  "key28": "2pc1no6WXHDEQvFFWw4kPTqbpqc8YEsk1PvHUFRYsPz2HnSNXRRJqnR1hEWwywShpbF4SVyrpRVt6f83Le15ttFN",
  "key29": "5fRDvNtMb3pjWN762kJQ2kXBeuq1ecS9AjeCGX6dGSRYVuDaNrzmW95bBPTb4p2Y8jdLCLubp2YvZk5DnU8WAkZL"
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
