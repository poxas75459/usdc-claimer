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
    "4i3LCojsYr4RA5PYWNvfWFrXTqYcCF2FFKqH5rMQAtMmaX1k1TvuJ2XSn8w7SLnsS6pjxtMhHPBW7hfJEoSJUptL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8BJt8RBqiQnCTPUYyRsNhAbA5RP9GJXhEvjP811WihNSbte4pw7kDRpZoMyvaKAqAqpaBUaH5az2UJ5prmuScA",
  "key1": "sifepEyStcjKJUrvPCSyJtn4gv22ft3T5gguPahppuPvV1QE5iR3Z2xK2zEsX4tmrbi3sNmC8rLTfRtHrguWmNK",
  "key2": "UUMZztpVUL5ewkkxXJq7a6r72qKk4ik7MZY4GKRuKSP1M1gtMZ7vsANoueFJFU92E8SYqaagDdB693kwVZda6p7",
  "key3": "3rvc6wWfVumQp8dkjUsoEyKfBcxUe9dPYeGzZADKhzJW9zHVK5qpr4CDbgA6PTL568uebtPfotaD1ySp8GMbJ8ru",
  "key4": "QkcBrFwD63nAuSWEaT6VYQ2dQJsZ8P3jcXt95mEqBqzmWuqFALzH6BHeeSvhXcz4GkBJvdxpgLGUK3U324fUqCs",
  "key5": "5HNS5b5ZsKq29L8LXbWerpFjPo8AbpoDfW4tuwhn96Raq5azbU2vE8J8Q9j56fpgoQFADixv2ss56JwanEDJeVp7",
  "key6": "3HMC5goT7E7rUpjBg3HEarMjYQyaa6ZQUbimKxdEis55aLCX5dW7xCL1ULzkGW1QKD9XF5nu2Aj1ArHpWfcxyptU",
  "key7": "3VJboP1RWJZEeRCATcAXG98nXpiGTM9jX7TPifky4RFwmgjQYpXZt8nwmJcM8Sn1q4zASJfxuscbG1SvcntHJfqE",
  "key8": "57vv262emCQpA6J4hF94NxmGQQWfeBmr4hNNoEvy2DCEYXyqiQChKnnFE9D4svd8goxdGQRvzVkCfjxEq2b5CeUb",
  "key9": "2R14bVp7tH6ubdDRHLzma88ebacn4B5JZzQA2WjnoePZSyXF8S1rKQnTKjGSTZnKfhN2WmBczt2PdMaUooTpyeEg",
  "key10": "5eLcMrgYUjNf86uRyEWRG4uWh6gmrFxaeF5FKgRpes6GKQkXs32h76mwQCaj5TJiF1Uctomq8UpQ4YMNL3Mb8M9h",
  "key11": "5GyoDvU4jMHG3WpQ1ZF5CpDsZc6JcSrrENrAsUqXQT37eubGRSWGEBrjgu5cNZEFMH1HbjhoR8DiDGUASYbUKZ7W",
  "key12": "2NNsvr6o6mhG32gwor2AGQQmmpi721wWtJ4mf1XoFjH7vMc8wtoiFFaShw2rr3rFKVB9VYgQ6N5Vms2Z5xoBKJpS",
  "key13": "2cftFsv6SWeqpRB7JU1AB5G16RLNgSDSbsjj9N8DXxhoh2CdrAj7nTAu5rzueN2nGbDfRhZGqSvdN6X56u3Escax",
  "key14": "2PgYgK1UsvmtwetFJS5TbfBGft3NJXYFuTTBoU8WsBNZERpqUpWbcPCu5NB9GwHjKPT5NLZpTibckGzKFjCDr6Nn",
  "key15": "e2Nu3prVKk3tpga3y3fsEuNaJQcnsiJMkyozKRV3DRiNUEjrAJE6Kq4Sz57nnpF2ENnZQPYbH9MJL3Ry79yLWwP",
  "key16": "5CNxudTHKq7sTVe3meTKgyVBbWYExd2CeoC9tesezQWHHULmutCLzQQv9tY2m1j2ZwY2UpY1HuP3ATeeaQd87grD",
  "key17": "5kL6PMr4RNKpYrQJPFur7Ksb91t2qL3p8jZpYmnEn7ffyx9CU6Y8wEfhTF5t4NsjCjdWKRzht5e8gLQe1SSPr4Lv",
  "key18": "bb1Xh8yigqGySbo1uVAbhBXCADTLW9ThzFp8R1s7MHSvTnAHzpRyz7Jwm9MwmJSBgTfjtu1CQduibnTkVvyod6n",
  "key19": "2cf4RHowCAT6Uz2Jb13pxvYvX77rwx3jhB24qM7gdr1avmKDdfHDq29CfS5Un8W5vVNX2Gm7Pxhj46beEqvYB5oe",
  "key20": "2iqkp8G15bDub3zCJsozV6UsEaP7c452iRu63YnSDXu61idTyZiUrU8LqwcMrjiNgTkBtfcTCbzxap44wVudLa1W",
  "key21": "CXcqMqdU1P1d5wmThkY7vtK1b6Uweromcirf9oQMZey5egSv4tNfH5az45SBPi6Pq3WZRvZvViXUU7ZitUaZmAJ",
  "key22": "4G612ZLsrCjHVuXh1czCVdtnSEeunFPXRnR6tJmrA775xEdNMfRSxQBEUBWDbwE8Mp29xS6EjWw6fD8KVnxEHin3",
  "key23": "oycAPwLLbwexaczNEU2rePKxdGSzQWUaL7ecqcqm4jdQtEwhA2B6BxtZ1KSqgrFZRCDVBq1rztpKH4ACw7tKf3W",
  "key24": "M1gQS9m2MsAV96KtoEuWsMZEVKsRNX9shFih1k5LnAQeDCnMQ9ocbuY25cSZfZKM25sJ6uEtHbXvjnCEKs5NAun",
  "key25": "2BQhjCnYWyCDmDQbevhXiFGV52ENo6DfGAqWWy4bW3Q7t4Hh7iN1DyYUb23kh1HhkN8hwkcuefRojPVS3RGDWrN1",
  "key26": "63SijsKXuXEsratzrSi1btrASLiAo35725phoKS2XALA7GkZ44SfHgdemAkEpeNgzLtuHDknm62B23LGnYigvzM7"
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
