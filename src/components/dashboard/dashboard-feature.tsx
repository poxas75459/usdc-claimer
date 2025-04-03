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
    "3JR7bbwGhrMGnerQyZfxx4pXJge7WmmLq7cyVApTB8aEYaWXmSi2BBpzqnhcpxWYygUbaZCH6ANe7hbWHourr2P4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NEk6PfoYsz6gdSMBGTXGusrTvkjpAh6xYgqZSCNWdHfZyvmKW2ygMj5wbKgHmEJ2AwxwTopNXf6PzMDbNdc6Y5F",
  "key1": "2Yj5sPtvfGGNKs9bScgyw5TWuT3mKdUEvftsAAJ1Hh4HojahkJGYRTJTqbBkdBVxqAP2ZV5J2RBAcMJ7JtqWun4c",
  "key2": "4bawavXn8fnzTRXPyJKZxejmMaRYn78DTL6AvsmFu2Vr9b1jueugGSAyWqh4FH2Wx1UhqhqavFpzs68Uf8VZnUWr",
  "key3": "2jhHi1kfvDrTjaCoEDz7jrPBGG4eTShz6746TAswYRsUWucTGdfdA1h2vHBriBa8FhPwmgMbVTNqnfh8nNVovzTK",
  "key4": "2TPxmJakv9pxNxZUE8Cg9NkMRarDWeWUVQNfvo7Kk2SSQBQdrb6mWsPE8VPUtc7JTeUxfqmMNp6uNqcpprsVM48a",
  "key5": "25TbHftPXZEwQJJkAz7Ur4ftwkwpfxaa2bhmm3vQbM45JxcG3x7QUnW8ynkoMdd78ZyEqN6cz4W7jKBgV9kMNg77",
  "key6": "59DtdjV8fnkXRpDE4csWtfmsAPS9rQwUfhYH2V6A9hhvviKtb3ZiCbjj57pWwvPgbXPP84sFzQRVNHom1P4w1PVM",
  "key7": "ZuszKrZfDM1Fkueuopa6MTzGiNoNWsUoBK7xEHWkD4ybrKfM2NhWRe1SK7qKNnU5XERFtomPukkpuwwRqBDco4B",
  "key8": "3yj9ympvYsvpozdXKe1H3F1TZKmanzGg9q2G6Jy4D1QiM5zN23GJJDxyFnKAe9Cy74SR81VeU5J77MT1qSvtALNR",
  "key9": "2qBddT8UcqLXxxY948Xb9XWem3TH38tgF9nNLY6pPwD8FXcwKggVjdnWiaAqugnctcq2kSvMsQTfvGMRmceEGss3",
  "key10": "xRXvsctRyh7W4vzuGfZm7AZxbHPuPaTwCLkEQ84Evjw9BpuAiDGLauKXktqGxSLXozyEH7KAvAhT4cRXtWnNqHu",
  "key11": "4uguGaYvt15yRThhU6cCZtt9YiLvKvX2qFoNZn3QnKSWrAkK4gr7wi3SJQUqwkoGVCzWvkPn1YbDGnUeD2JDvjQ1",
  "key12": "5p4tB1Tf6FLcVFukdH142xvAHWQHkiyKUKjC6gftouefd3BzJLxZgrApZyDuxzJ4pkZk3xiEf3W1bCKsnLHSRoge",
  "key13": "2RYiM4bbXkiyzLxP5kCNfqpf8PtEz7fNu9x9t6Vs9RGbnUFdKEAYB3YNeC3qdK7dwczHAV2pVUfVDHcF1nfQUUWB",
  "key14": "p8WDrWRKqmVMvpBo1sUGKijnuA2KBAEg9b867qqUFNj4FNfN7gRywGgDDvo7ZDa16DfsYcUPenEiYT6LKAAXWfZ",
  "key15": "u3bDCdHbn5hRDyJuwYabHiRkpifDoVn4nCj92dGD3uex9dVMi8ddp8exTtxnL2Wv33m5SsXqLXWUrkPPd7w1ivE",
  "key16": "5kWBctB9s9brfGEgZG5ge3aoDrrtNdahatoXQvfXWtdpoWkSBXCoSErvsDvEsRPmxafJh4vxuZu6U9KsgJaMLNxz",
  "key17": "6kzHT9fzBwowzMVxqhhFuv4mdVySwtXWUYLVEShhW49LpAk3AVqTyswJoWj5omVsTVfVUGfoqD33Eui7U7MtC5S",
  "key18": "4Z6TfhNDi6jiZ5RyTRTQ9yuhoxP3ZSwWqtm4C6hv4xmeRGQTwtUGqpBQqaJQPnr21ioCDWF1su6yJ4bT799jxxJP",
  "key19": "5EeZALdCvh8jt3fXtiAytBST4HSUZS9nThwKG4yYJ68VaPud615Q2T9sJLanu24ebjVjtQUtZsXucRrLNqiCu5Qp",
  "key20": "4LzK4B52ZF6Gbm7v66un8m7h5Tu1scwt3yMqvy7Ws22jk98YriH8wvbGFqfWVGTfHwCzmYxdKKuLQiKZSRjabDPH",
  "key21": "3LGibPwYqUSptFAak5Yujegpzjhq1hLuJvZCnbKYq8e6uwFUy2eAT2NbPbMgn15ZzQCAPpFqH7xKF33euBUioXNF",
  "key22": "2uBBPXxcHsv92NUDWT6Mxh1iDtNtNEM6DYGz6tYRKPN4uBGMpEnCxqBm9iWpYgig4NPmK9tUtduCQMo9h3F5tvVb",
  "key23": "5bzGmVwxFWfUPDMFk2z16qCMDK9SeUYuHanMDtcjSNKLD8Zx8vQi4aXtEKebsHbq54xLE9X7WW3rWGbrVb4hknnN",
  "key24": "ukMZGSrL38vPiwGZpBBQG2yitVw6qUfL9p2Ks1cuVgAZAjKGwyxeh83KMZfxziV17rDvg9f9AswU9siSYMVcwYe",
  "key25": "54i7kwdPvwxratkzAX7qCrQNSr4LDw1p1frqLKb6qhKsv4z5qsrbZEeJSM9aCnkGqTNM98kkXsa5K9yMYXKuQgeJ",
  "key26": "5JG92cm8GRs13uCdCAtxgJQzUne3j5d2QJXk1E68wofoY4ciq6PdZaZcgiRrDjUcdaxMf8MZYCdtnLjv1vbE91xH",
  "key27": "5Bome7iXaN1mZ1KLpjCW3J8XBVm4ajr5yLRsEgwczXfVnRauVm7ocnRyfSc5VTPiEBhLHoaWBMkmRVzRuNH7jbJT",
  "key28": "65bCs82pdHW9svsTLnjaVFnYA22GYvenzaqopiohnr9gH7EjYHTtj51AE8zKgvEMAmxTHRcuwUicNt2XoT2kKgnT",
  "key29": "4RHa9MACrMBB9WdVfL4KVFjGjpTJ6aEQDcZ1JWdwXE8zqFgEBJQJ9Zcm7sh6XsvXGyoFgx24f3J5VDXNVWKtEHhW",
  "key30": "5eRvV7zRnroxd6irZWsFAyqTdJJycJcFPZMnqqEHtoQGrM52XzFTiqV9HNgLhWg1AEG5jS2QtcC4FS4b9UxYeF34"
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
