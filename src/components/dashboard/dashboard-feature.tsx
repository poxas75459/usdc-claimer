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
    "2w9XSntehGkffF6PUZpamGjC6GMySte8ycCgYmamM57DuA6pWyQbPLjPiM9Xx8qcHkEmGvJfurzdDdgdfrayjSNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V75HeswNM2g1uDsdMhszyiqm3p1NbNf3nAmmWeLfdJgTYSpMz47owajgvLGm3uSd2SmhyP5Hb3FdsycBw5kVhFY",
  "key1": "5wjaCndJRh9S3kCB9VPERqJ7ZXHEVCEyJSiatvwpECvoF4a8Cmm8kpbUQow4FeF87Q67tjq5ziBv1ugaftkKYgjZ",
  "key2": "3cdHMLXxUHwv4mP7HcZcBeuQQExRfwb4EuHozS9aRA55cCUpg2Z4rpMd9c9ytpoiK6ArvtjRYqHWzYDrN4o62CaP",
  "key3": "2eEctfjBTfT5aQeN8GyxUjELTbbLS3TFuVK8U6nRBAJiEbfHALA9vqq51xEcrm8WW42Rnsrj87Pt6MutUy3fcUmn",
  "key4": "37UNYTXexpTLFSEMJcntQAkagHEKKjDvqexgwWueFnvzteuJziWF1cwq2xEiDR6VtfsHtV8SW9ZFoDxvSR4N2UKh",
  "key5": "RKQTpXiQB9nFuaKfEanNnWvjTFcoHhvkoKY94TsjZe2DZhEqAKSc4TpbGggNdoidduEsJsqt7v2Bp8ZtbtCiLpR",
  "key6": "4kXdtb3fkUFtFaXdgBBVTF4wtqthGhbUzKcZdb39XyFFN6tgryhRxCUTeSW1e1o1aw2sasmLNL4e9ferFSUazDB6",
  "key7": "4oyePejMwX8XvzrsJuZ8rWuWSeFWZgcmpCBr3BUnuHnscE4MTT45VQoAKdXeJ224fHg2F9MiWNEfWpBmJsta2R7a",
  "key8": "5xqUxAg4LGLxUoZifc7wQG3YiGScwq2C9v8HWUwdzCaT4C1haHYtPvH5eg9vSC97ufzYmK459ji7tLJYTfXemKd",
  "key9": "3A8g5D9fU68GxMCxdehkJpaX2XMogsXJvb3XzeU49AwJTTW7jufaRcohKqH5fKXkY113Q6NKwWUsMBNEviytVGpx",
  "key10": "2vTMp9wA9AVkEFG3eXWMaF7BthkWBW9j1oNfpz4UWYqWb6b9LDxkhbgu4vwwvp6u4w1RDQGQSdHWC6GBTv7nUvaG",
  "key11": "5N4MWcU5SbFoPM77yVnYXLVBcimGDbpdFVEuL2s5kPAvzTBJ93UNrykeQwwVnvkgzo849yboxLzUskjw7wUP9X1X",
  "key12": "4hggs2S2AFNDGJmztmcFT3CNEKPpp2qw2rKBuWxyA2nG2JxUUPgVqhXN9ba4953U5NAgmhEq54FC5ps5oRNfRmeW",
  "key13": "5VvS9TkfZzGx8QXqCwUT75NmY6K4ZTtjLEFfQnRVTfYh6zfdWshvU4p4ru4aEpyG1qR4MYj5Sx5AwTQADVusJxdo",
  "key14": "5iYKrnaPkG8NN12BevZrkoH4teoVZi4fg9JeaKdxUXDpB3YYSzK37v2aWbc9mmwEnVECQaC1PLruiufUvNxAePm6",
  "key15": "58d3echZdGm1dGwRvJZXTUkGLYBBPpXMwixwQUPytExSj4qo1tiuXVwH3KekbTH9cn7mjYmY7ARk7VhzcauvUBEr",
  "key16": "2ypFw7WLr8kcY23MXy3ABMRmYzTQe1J4qN4swkFMGSoYoH4a99283PC14pLtazq9Huen6Hdfurah2bzubJo9dapy",
  "key17": "2ZQBzCQSfNQS3JDtDVW9H2rGQFxvr2wbuBhNGf3A2MMTNwYQABiu7hamZnhwfmdmGZohJWDMTpe6wi3SZN8vCd1L",
  "key18": "4Fg93dUKk8ccxxbMqRLGY2Bgan9AArnTXsGEduGAManyESWFpAkDHbGJm3CEhg1jz4koP3gVndiGG3EuZ29DkRpX",
  "key19": "45NSrRcXijP85TJ7c17unwY3oVboEJ59ocCT3m4YYCpyZwf7vr3M3z1yu1UHMjH5YoFGbTEfJjrGRHRmeGFajhh7",
  "key20": "2AoF8xE2MWdWR8U4XM814643nFtM2XzoDvnQogNMWTkX41ybRNec6KWL4B5DptoSF37wqrUw3J2AfWo66X6KM2bn",
  "key21": "fEk4aqKjNUfzhz62Rw39G4netKufienUR1EjLtS7sJGd1J6GwvQhguej4oZ8EtXeNGS66ZpfcZ2QcGYDtyzgVyW",
  "key22": "YPfxTejmjWb5895Q24YHEqCGQ7MMahobbyQ47ZPzFZb1AZPbqxved9TgAxEGgPwpkP73w5uvF9QfvQ7jyN9dZwL",
  "key23": "4mbGtMAKoiqgTGhiwwn2GQ7zTYrv6AnEyxjEUqgBn8VJLFQVgxiQUpzeoyJUoFyvtiNZGpwua3mrLpovk8QY52iq",
  "key24": "6tBmu1H5D9hscVQQ9ybJykTFKKMRv2tcNHTYUPstJKzcUyoHgpbbSANK4rTXg6wwUVHvqakgRkVKg22avrCgzcL",
  "key25": "4nnU6gYMooNxV7RCjy4jn9vRKDzepNofSrDo9DFLosbu3UeGEgDkDfZXcCSippKMbHZCb4RzKwmCWBDrfrjH9F2G",
  "key26": "3vVjRDyuSbPsTXNVQVkUen6DyUf4BEzmSGSHg7oAXqZJcHy1P2NK68J96fM5V6YJgJpbEYhasXcwF9jx7GcN352t",
  "key27": "5cha6XkkPQHGcnz6UDygky5Y279LTTzFeic9ciMjArwHLSzU81TD4H9u7yUmKroG8iYzFxeWXAfb9n9HKjFS3s4E",
  "key28": "2cMFdxWEJgmLzqWFcWWKiYmBY8cAMsuGZA5arv32pcJ2qrC1AdomseT5j8n1ZxmBSfBvTeemFqQMJ4JPpqX4D5Rk",
  "key29": "4JQrb9LUkE6xViNE8C1G2v7SfQf5PWs6sjd1nWTdauA2W7cM9PtFjMgHy3cyiZyjYRDvSooJpXAubBvH9aVi8utr",
  "key30": "2UnvpQbQ4r4v5EztFReAnsj7EAUF7UuyS32oFM5FA2JNQP6gATdZ8R9fyTKvpaJ8dJsETzn6EY8TcYJqAd8kDPvH",
  "key31": "4w5wAEdJH8HckuHxNazEQ8SfXM9X7w7p2QMDqKmtAKj3NoDHsG1UjSv4d7UFLyhkoZzXQoFn18w6Up59HTFVw2an",
  "key32": "4udsMyiDR6bTouY85FzPsbXZLNdCgeYG4341Ay7XQetCkRQZopDKebGNY1AiuPE7rYxgW598AwjqphTBjcDL4FDf",
  "key33": "2MHPmvYtSeJJdLERALoLfY9z8UrvJAkmU95RGF9NVpUeQ6ML37FLZWu5snb1UbEh9NyaeMNp3w8tV12y6VeaepRF",
  "key34": "33Bc7pcxn7MvfGYGVbekGzPM96tPVL5LRmu22CNPmq61nEE6WPRHMVPXK2dpZLTiCndyuCbCUFiDcePSJk87ef6B",
  "key35": "4DiqXL4hw7URK23AavSKSkGBwa5sdYX97yxm17asuHGQxNCHwQjhQanDCEJsRct5astZih7PNMrirkoK89mYybsr"
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
