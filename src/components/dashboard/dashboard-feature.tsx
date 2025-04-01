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
    "4RP4AQo6jFuLSCfY5NdqVw3LQNZcKUoasaVQaxWyP4W2LfdScYRtCMJiDaeuJFKPQJoDxvU9ifUAKVztyinuvczk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvHRugirS5moLAxzvf8vhA9XMBhh3Fr5MczxDfEuDBuANqCHgpfRF4qmazTEMf5MSKc778dDHdGPKRst7Avo1n6",
  "key1": "5CXvX9spjGSAq1PNQUdeNdo5B9WbPoks7y3B8b9AWvAHFiobYs3EoLSZ9YBzGMoX7VuomjVq3kJ66vPeBYBD481t",
  "key2": "4CxR1LTvqgZKBiyCUAqhoAaUGW5ZU7AMaawi4ErMZaXuYyUGd7Tdp1bKibaEwhou1S7YuDCDqxD3XaxcDGFDSM67",
  "key3": "5NUSLk83MNgiSm9NYNFxXPYzSbfV3xzpCvfzccN6EMmsdKXEsmd1ptf1tkEWunbP4qwCwDD1GLME4DeqiEAFQYqQ",
  "key4": "3FVCcHjexDZE6n32w9vqcHHF5fiXnjgnLMSB6KL35sRzvx3tQfJJXm1tf271SqAPw1YyfEYh1zuhdnCCtDUrc5VB",
  "key5": "3bMN2Z3jZXUBz94ypo1L78Xdftgw1vCqBtJVkJx8RbHwhhuzuUNy9zKNBpMLYqprnDb7uptYi6ur1jn3BwwrP6Wn",
  "key6": "26eduJtwFnpikV2mk1KAZGBJvB2h9CGJL2J2KErgMztBgfPf4dQNeCxEC1nC3W25ga9xpogzMp9nYJ3zjM1HqzNn",
  "key7": "W6UFmDRhdxem4CXHKR2tdhBrKTrKQuucJugH6QP3uoXgjJwXxM6YXXs6newQqGZcJTsihferPomJmb3QoPr9fYy",
  "key8": "26u8CxweoLxW64wxBmBV1FJv97w6D1y67ULGmfAUdPUjQMsyjQ4fAYmuvefeSifM5hd3sC5iESAaCnQF6aMH4Fn3",
  "key9": "4akMVnrYXFopLCBTabnNF3a1ENjzg5GnAZG9DJu8GDrSqGirVqN4ssnZxG4MEBogFJcARes9F8ytjgnLNvhAb1Ur",
  "key10": "3G8FgsutZsa3kaFdPgXVrQqNoE1Xh3oRYc9zJTb68c7t3nTQE1tJzfjDiASXBUVq9gvieMjQxGgkF1s4UQb5qppT",
  "key11": "2n4aSsZFHgMcRTDgNUYW7o4McaNvkJ6pQ5iGzuPVaYbe7wWtqMptiYWReAouTvo1rmjAiekmEy9Vcvqy77ZPEBG6",
  "key12": "4Nue1qVJs8swHxyma2Q7YpcYbfYAyXcMXy7NfwLEzzQopEcrKPfz62EPgF34p3oVLUvFQshj6tDEv2nU9S96o4D4",
  "key13": "4T12Hkn28e6TmybEvJhTbhhnMnneVZjxgopTgwZbqbgqhNCeGobjvxHFej1Xvmq8zStD5wBoHKQ53ukXbWjgGXPb",
  "key14": "2SZtty7gHJT51y5awotWcShnKACUcA6P3XQZmE5vayhtTFVC52XTb3S4Qtoh9GDzwkkZeJ8VhLznK4nhnzY2fY4W",
  "key15": "41EKMPEfke7yvbJUkQV1hu3qgUY3AK4QrgN6t1eUGvkvjoxFeCCe2TS6smDp1PENCrmETrkVd1eV8xQNdjDeH6Je",
  "key16": "29Y7Nxoabt8SMFb6nKzN23zVhWUFMvFwTp6pJGb29rm2gGuMNbESxDRwbQyttehyLQqDAaXqQwe6t967fxNKVvUe",
  "key17": "3ft7FdwS1EhsKuNNbNuDiFmEC5KVVJZzoMvUsHu8CTFBTmjSJAsuVWjvwnCDYRgMCanwVQUQsigvJBUqGJic9o93",
  "key18": "5NigxQeepMvu6zx2DBGhh5J7XGZgM3gBNLmXLE4DQ25c8vEjy5jcXRzUBiGWxRrWcmDCQ1x9tNp1zw8VLpogU6om",
  "key19": "3zagCMHHkbPYJ8PpbzKFgW56wXTwzTWVjKabiy1b8YKVtjmvvHCwcxA56KUZTLSqTPR4r1KhN8pLzuFHzwiwEp6M",
  "key20": "asdcKAeCKHD16tYQYWqbCBTWB2EZX3JBX9gu25964RqAdPgdj727PyiKjena2Z4ouDh37HHbMqDXEkHUHMqZFYs",
  "key21": "4JaweoMqYmPerskMQJ5dv1UPuxyBoyiZx5m2nbDAesWLHzVYJyExA985FbSsFLpVrBXC1fa61dMYWTHnYDZRNccU",
  "key22": "44Xgqm8TF6Vu95724dohSUgho6jwu83Khq6qsWqEY3kTM7tgDP4MT4rBnFuygYTqkAMPYbRyeA34Lfu5B6Bc4Qx9",
  "key23": "3L2Jg9kCLyRsVwWWNtLu8JqJ57KZoL1U4VVRspb3USfPdjgsxpyappL4jys2ys6p2YAd8PJtc9tNJvh7bvvtRmtw",
  "key24": "4KQbSfpUywvLASooymogJeV5KtcNmu3GZYHWUWSUtDWUeyqWKi4FEFmvoUW25NZRf4DeEGMB7LoXCSNx7sr9z6xX",
  "key25": "2DDzZYVvHo9dc5RWrykj1Up3wihTg5gPewdoFN6uiTr4WrQccgAmZcw1MhVavC9VuAbBXmn1kBJvtztSJhdk2phE",
  "key26": "3susezCKi12mKyfMi7nyDzk7N3p5bwgN3UtqeRrUj2eHPzkh8EUF6bxE4hMWcUvUuKLFHTHCPuAaEM4f8EXU2kiX",
  "key27": "g8kUj7bYZf2bWKiQZzzPb8pK73rpVRuJP49fLJ3gusHDhdZ3x1wS8CVT918C4XUuTLPQuBCPGV82dDdWPcgUdgw",
  "key28": "5xjFob283oKRKin1iLsRAhUE6E9XezYaRHGFcwgTEtixGLnraZMRkETy7fhV4RZ2H7ym47mMoxTecW1qjDkiJjHx",
  "key29": "293Qei2Jiozz2gg87yYfCzCgVraZq9y4E1FuJM7ZGYodZWutZfRrV8wCgeC19YgDD1W9FpsB4UcKpgY3qrhxd2We",
  "key30": "5KYQXXKJQsv4wBxrSnmgXqxKnTX3f2YYAzZpewp5iXJ4yVg3zYR6w4i5i3bs2cmp76XEmhcM1oSpfzga6GwVJSQV",
  "key31": "aTecmvbESwmgQE2eWxJNx3e68avZ5peCBbwxYy2WMciAVnoseMCqP78tC41upqEQX8sLwEMaPfNu3S4sMLx9wEK",
  "key32": "5hwtmq4pPiiDJkAWUmWY9E9266ZM32M7cC7UtQJf9qR8VDmxdVoW6cMTNNqbyLjH4Zor2ZNYRZr68FqAYe9rHg98",
  "key33": "2uDnATWwG13ha1Qj5wpM23Vset6TFVHX24ubrvWYuPxkLJL2YQsCz7MZPzDXMXyR4srFGG1aRiYXuXwVznuCeFpX",
  "key34": "5fvkXAmy7hcUK8L1GYb5TXiAXzJ5e3W9xVNhrgVSwCbYvgdkNCore5v56bfR9zShbrjAM6JqPqsK1XUeKJZAQw1Z",
  "key35": "eTnnm7n94JjxzGB9DFBBbej93D8G5V3gywCaymMFDFgatMgi6ydB2YjFHUwfNncxEU3aZUabHL459veHa6unZJm",
  "key36": "43Zye35weDF4MHfmziwkU9ytscKUHetSHpUCX5ckd93jSs9uugoJsN3HbiiwtrW9dXdfcSD4Yt4CWzUnPVnuVtao",
  "key37": "2aXc14D6LSEo59hpbNKenfEDTUMHX8NCusGvSAZmhEZTo2zU5KK4iRQ5dPTXeRZeGoEvcLePWT3EPKV68vpUhQyd"
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
