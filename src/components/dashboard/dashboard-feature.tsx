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
    "2JM6j7cTtCFFLbvGzuTW4CKnQNaCsMk7B5bs3C5mJbT1kKRdfsYKoQhPSE2VfUEgNJz1aJ7r6VFMteYhke3HD1yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5go6EscfrcfAZQ2KQwT5Ph9SREBwVv1o7EEZPb59juuGYDAY2f8dXuLpU9YkKnmWY2BXz56dofkDMw5gB44zGpRb",
  "key1": "3U67QVpdc7NLS2xdDQ3c17UzivaEqaMfQrGV9mXd11wnGZDgJ8JWAugBr6M19fgf99jcULLxkgzNVJSJCs6wT42c",
  "key2": "3AC53X43u1dFEoA7GzNJXJ4RgT7PwSjr389iHDKuEAGiWH2xyai5j3AhD7x89SL3bmQYUUHAAvWXhxHwytcZ8DtU",
  "key3": "3pteCpPxfYVZignTYktvj5GjE8HK7YudGATaBMQBbszPkh84VLetY3ALyLjsGcaXTXpSy4rwVZzm91gzHunboJ8y",
  "key4": "2fCivDwMELQyro8nAbfiX8sxUpsoQGAfY5h8HLEFy9bbpDKpikSUWjYFYJkEq1SrbZ1gHXsS18uNna94JeEZUfZX",
  "key5": "5Thu2R3sYx4zKts49Xp1wWQfb3M1V4eHZAFfPXPGBX6bQnxpVyKAywd9CMoyzyZjcjuiqko78EN8MEVpxB5xaagj",
  "key6": "3nQCBFWVA9LFuHXPLP9kDELGvsk2AZwUkhd2vyvuAAK5Qj3baWM2M9W7vQv2rhJVnph7Sy9UTbGjQkukC7RVaQ1G",
  "key7": "5VjLhKQM7bhcF2LZBA2sPRNJpCDQrKBgLwmzUCiCvrjG64xD6vnAYMh1U7WwfkFJXbdKEVFQYu72Q3UGNbh8p6ST",
  "key8": "4tbTq1boRZeQFPGkNd5TyKqcGK4qCCm7mxzXDcCv8kYigjTgAoFaqtNum1GF4V5nwohrykbeoHZ5QY2Vuq4LVEQg",
  "key9": "64geQWvRbPPX19Km5uWTDmRuXywb2z1yNJRffG6d5iUfRSbL7kqkrmmiACAZnjHUm7CSaYRWKvE32hMNzYdPUTmu",
  "key10": "2u8Pgc5BaUMvfoUPW8FonNAad71ZfmAEoAqZmRKXL3X37UyA8M14ACj3UJSuFPsWLa8uZ1gwBT2ACfgvs3gfvaxf",
  "key11": "5BaHpZ8QF3p5ambtAiZpj3VAC3zsiy4KykosQUJv9Ln2ZtF3WWoyhr4GYuT45zaCUzgQszgn75fBdeZEXowKDNrv",
  "key12": "4YDEZRshrUuDSfUJrdtzo2dyJE36zgwHCsfWcSJ2o5kRxpNdc1WK56LN67WGwBeBBk4oVR8EvQQUxKydFth8MaJo",
  "key13": "2rQ9xwLLCySQ48sg7z6WozyH9nhAez6cyyJPcYFVR9uRNgy2h8WMS6rRoYnPTKsKV2QBBsuMof6JCETri6cKsstp",
  "key14": "2UGW2bCy8VqboV1tzMTLeNT99rt2u5tJgkFMjux3ncWDNqaTx2JPE9zN3tPw9VZXeCmAq5hBUZBjTFMR2BTowp3V",
  "key15": "57b2dnqFgzamxqJNBfiu77Kp7n1YYronfu27xujbruuWJpMtLYcYUqswkFcAWmNqwxFQfhaiffHU4X3PRkmR6L5Z",
  "key16": "4zqukjNZeAyP3GtE6MLPXx7aiiR9NPcz6fXq8BKz2Qwz2BVbRArLvVZcrkEEBucq4p3oGf9Bi9guVPCWVfuYjWnN",
  "key17": "3HbiPqcigEfdYGWC28dKGGjfHQs1eT2hSjbNJbno4jS1sUBKzeGysgbG5MMiDBSJoEYCb8ob4A9yDzgas8p43spW",
  "key18": "XDD1EEfttrZcjJZSBZJt3rXw5uHecbnADA8RHZ9nD2neP81Nv4w3YsFsfKQt8wq1SWcVWmjDJx6rxp8nVRLXqZx",
  "key19": "X7613hiRJwrHC4PnKpVJfaX2WB6Bb3cgvbDCxxnJv9XDZ4ZeewCwQq2zUGrWAJoyCPGf3o8ucmywJVoxf6UrpdW",
  "key20": "2Nk3QDuzfeCPbx8F2uMafN8SqZkpSsqkgJV8pNHWtHizsM7b5yswSfEu9uh9TJoKdXxyQFuAcY458QNkqzGnvtnZ",
  "key21": "4aiwJp5dgkr1ruo9zzVmeZwv19A9RUxQGUAHibX4iZAQRNfWd3M5Qt2FDsBKN7onAtd6HyxVLPasvyEQaW5wqbCi",
  "key22": "243P336DZ2k1EunxwuYt3jcaEXaVAkRyvhniuvFkYEZVoyKfSHy6kEoDkLzE8LZNkiC94bqLYECLKT65Uz1wKpvM",
  "key23": "3XVUEkusqqKZD9xpRkKGsAu43SCT3SJ5ibsueNmhtZvsSw5TexwneV9V3LqgeJi32NDsEwpsEFZi1WoJgcFvA6Yo",
  "key24": "2nhsDFe7EQhMTRmDBKzTVU4pv69vzkuW884XbMGy6B7oxKt8AG7z6zi36yCoZN6sVFiuzmZhKQQ9uAHTBw2WKtwx",
  "key25": "4WbTz5Rm8v3H6UPt3Btk5Kpmh4oxzoM5umnUF1sewBvsr72Ut7sfydpXzWtDB42JqkNXkuAYTHPRcwaNq1WEP9DG",
  "key26": "4RT52VGMHqFunhUWGNn8U1FMTxxi8YNztm7E4nMJvnRG92SvyTiYkhGyS8rkXUdkpM4527X5vfr3ue5uXdhWaebw",
  "key27": "5F7rwym9SQqSEqv91iZipd1bYYZTvKSSe7fQxh7a2XTeDAXLZRnwotxTpNkeaAHBZMoc7VvqtUSMRkjtJL9WktWP",
  "key28": "2oCNRKSy4o7uMxiFFhadNZW2jQHpXU1NwGkddx2RaDd2RRfoiYqV125nyt57G6Zwt5erVbwMGcYq4TvY9HFXQ5be",
  "key29": "4SRyjR4KHfc6hMAFkHf6oSdqV11o93DALGcFkcDgd76YJEHf3aqdDMUPL5EYYSe2J2zAbi7n5W6vjzPFvqVagZnF",
  "key30": "3RNADYY8gK5GaHJGqKJ52xdQSg63PbaGUWL8qfULq9bRC8bWXwPM2tiCS2cP4f9R6jo6xK69hQBcxq7Gt7NhGdCE",
  "key31": "oQXgRzBAZXMSuS5zeqte5xUqURphJEYUvuVn3eo1zkboSXrPeduLeimxp1XNBpTg2jN9b7A6g3ZXkGBC24UTVs6",
  "key32": "4fDLGpuLFhdQD2UaQjb51A1zQNXK88ovHLWn6VoDwgLRiGUBf25qGXQKb4vUCcMmmuPU11AypbpWZrCNJbUCQnDz",
  "key33": "2pr7ecQp2EbzaJ4m4P45XLqf2oq1JkGRuz8ht5nzLdSKwow4z3ENHHXTMEjWMEgWaTvff3catLaida6yfbMmnANA",
  "key34": "3SjSYThTWREoTHytpC7UoBFqDvugpoQzMrS1ShrJY2yrHVoy4zKo3Q4pwgGjxuxzh6b2iDudyf6U9Xz7heSr8N9T",
  "key35": "2Ht2GDvoq6wANHzLUWyVYjpBXPLs5VXXPYAyLYnp9ECcp25FGpGqWY5ruJFi9LPqVTHadVE42X8yCefTZRqsx82R",
  "key36": "5AnHiJnVC53EgQwcxwtpw5GhEzrvGsqtNDk38WgKTnGWfSBE3hH95f3HMmqZTLmzAUPhDnK2DL2FkWeS1kX8D4ex"
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
