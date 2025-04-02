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
    "5PWbPyy73vohJCNA5LGKEdzUjToBHnCsYex4iYiUV1Rz7rrMpTkBY8dg4Paf7MXRNBaUUCgmJHpNJNncef1Cwuzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ipzs1a5r2ZMyf9ajpUk4RCRawNngbJh4nrcbFGqDPNA8hoQBRJQATqmahroE7AYKSPF9UKzBXio5e6aQRJDb7or",
  "key1": "52yR96TSbtdakhyc2s953ZGrwJpjajKhax1SCg3TdfS1gRvJ7SGtciT8HL41cxkW4GsCiWBmM1HVnB3vskVHoD4X",
  "key2": "27PZ48z5JjAXuz9bfAiG371d4dtQsKfwGpPUUeu8Dwvgy6ehrZavN5bacs6TyexRbHpTYQdqYSKKF51yyFMbusZY",
  "key3": "3Ri4mqqCUCDB8fCeaJ9ZtPA6Kn7afYTqnkyE3QcSB8H117Pc7FHTpvwBCwcAvbSo46TLrQH5xBtjp7DHkJB5SRjR",
  "key4": "2cuM7zeQ1pFDbVzgK5s2SF98gjNgNVwFmsvSpTJq4uyMprQqf4pVCP49pRdg8DV6nEG2hPMsxRSeQVfCFurcCaSR",
  "key5": "3tmZAVT3WtfmB8QGYaaMab9adFyDPhKiYUd9G9xtkeLXC3faMhmwCyaojdT9383SFZbYJtHhmMr9zUHMhi6TYv5Z",
  "key6": "5TiE3K65h78trv1vggmq5bFBtHN6JY98CCmw9NYABzuuPM7spgx5cjisVCuVJMhMqgdHN8JpdqXgpz9Fts729C2c",
  "key7": "5E4m5uB263G8yE93Qp7XAUSrwGV5P76nPXTD46sBXqXAxwwHxd1rEVc7nJ8oquSstwLY52fP7ep9YYz5itvtSZgT",
  "key8": "4D2Sd6FyBnt5AnqypNhP8KCZ3NgRyCXk5q5N2kXU1YTshbCiWqNajyxMsnePxaRczDSTMz4RTewKmppsJUAt8miU",
  "key9": "5U4Bcu7c2hTMs77DFDbQm9q3GcBF4Gm1dsUjLjy7HWssnRWiKg82qyVRrfNUZeSpPskbfn6ZRdfNzLmetxz81bXY",
  "key10": "55nKXLzEpAhTtBCK31Bn3n8yzY6efLFEfkHhh6TWomgpoAtew37wciRUdWoYZXjo93ohXnw1pWn9FujpcHFycRnC",
  "key11": "WbrW7pDrtCKMBWiFQWnmQfGNBwJdCRbonHRGQPtvyYA8zM1ouPZHfi1STRQZCkB15GxCHAMjM3VxxXo6MLRn3DR",
  "key12": "3o9SDJbyma8mhBNLjqmkdjkb8323X7cfMcfxk3h8qwrgoeD6C1AP7qMYiJ2Aw2fDi1ZpBNA7TVA4eipvR16Gie3T",
  "key13": "R8pEX3QAw13N2aifs8A7R1bZYA4it6wWUKHWxsYs4iJGU7WfsexcNbpvPSDTbYDkDb95GGLLxCcAVMQ5fGAE419",
  "key14": "3UgsuUvbpQmMbv9orUbs8z8ePA9ZZo67VyYLH4bAzDEhZgDNpbojb9Ze3V9W6hbcyDsTzoFr36FCs5FP7Co9bBRY",
  "key15": "5ZTUaxRW6DboqAjKssRSh1YSQZ3C5uti4GWVsfsgMtAsKi4CBfTdFKPRwFo7gHoafovHxa7DGz94W8XcbVhfwsBN",
  "key16": "35uEJyq6VavbgC58SddtfvS3vQeNejktjzpKqk8d7bKBscC5L7BPkkqrEAjoziFZseK7ZuaXTtpNLWK9VXZATtPW",
  "key17": "3KgFMC2cR3872WdDCrWyF3QX2bVbYyhVSiS6d8M1QVEP4naQfRpKUKxDfW5XDTuHhD28HSWHssiHQstnv1Cwpj5K",
  "key18": "2u4pkyTzn73TtwM8nBs4iRTu8te7BpY7uswM44g3Fxgcw6EYsDRaipXRt8pJTGtmSQJ4dpnEiQJmVwWttMuWQEAA",
  "key19": "HDVbVzWQr3yzieFsnfGZeBk4FFDp2qaYJxTsVidjQQMCVZBUTTXYcfjkHK7QCfyMkrDb8QBgT12kaC1EotXFhUk",
  "key20": "Mtrdm2V1cTPETw52TvYd6Vm7gR3Q1P5SM8j4D3oFj8yWCUcZJ4YEVmh3Hxr4z6EEPfUqFxqvnHiaY5xD5u7YN78",
  "key21": "1hz1dxzdHdb96yeMFNmLth9PmfViN8JrTDfZ5SGTfBuQvVszDNJXcb4qTcBSJYY8Ubh6yyiK9YY7K5ops3dxrNa",
  "key22": "y5ZHLmn3NLkp8kYimxDgqTFRieWTXftgLuJnP6fnztTMeichQ9drE6TWzeezxQ4LMBqs7fHL4GoAWVYWLdmGgMK",
  "key23": "bxwUZjzznUDQL6BmKvwUPrx9NFUrESdeniwasAh9DfU9RVQ6zgqKyZhkq8UQU7Z5VUDEbMjWmrVsVvfT81aRAjM",
  "key24": "5Ez1W2Wo6UFkkF8K7xRr69ozvFrQbaAeWQZREx6dbKrWH548n5WMecye7e7yzhi8mRd6gm9uRuQLd21S5Ppex2We",
  "key25": "4i6JTKSXPpGs4eCwy97WAefD3vG3xN7CNfd65moiLT6benkRWYiv53JjCh3Fk8F3m4r3F9ZSdRtgMtYksQWcfbL3",
  "key26": "5wbqwP9VTjjbhXPkniBaZLtENJLEshU23zyQtpMsbBUk7eiXJiZhMbV19KkoXYovnu3fpvNYDQRoNS4QNZdZ4MA",
  "key27": "3dqDdFu48nYBtriX8qwMXavzvXeLmNqHeGNGK9SrHBk8fur6rrcXbiFSj73CNXRxFjPuLMbSRtTWsWyeWaAphv7i",
  "key28": "2yLkyKoTD4f58LGthyY2g8aBUey1NvTLdQdg8UaKbzRrzTo9u9M7t92nmTKuoTpwB5UEpJqLLdR437ExoB5YAbPj",
  "key29": "5TV2eFnXcFXpoBtTxF62PfFHT9zwznCoXE8erxHbUBzhu6VLVT3Xfj3WWsbNmhNtrphbQpRjQDN2VcXitsg7S4XH",
  "key30": "241V1isockvjMgAQQqFQEAAMynJVK3tk8AHQ3KrjCETarnpENasiLiZyXMoMBG7fz1NW8XYj2EDGBvdFAscq8BPx",
  "key31": "4yGudHJ1EyA7VxdVCVLruY5ZLi5hdnxy2XY5vcm369bobWyWVRgwcSVjwriXvhL7jVXxx4AaCqrc6jampyqUyXfM",
  "key32": "4Qpi3VvP83JU64PBYrYJJ1wDB6objSetV9KAZ8ZNL7M7tJLe6zDjWog97TFYJNTM4fZD3kR9fo723sTpKq7M3qSr",
  "key33": "5uZpRvjavn8zdfQQkDCG6uFG3hCDHmNN8bQda2Q7FrSEEKp3AJaaKqpewt6jBLFmcHR1pFQgMKexuEGrgT173jPV",
  "key34": "4oqyJyZYJvmhm9qSbACwqwvu68KErbzdin1mKkGnwRTE5J173jvdLWhvvcK2Doi7LFMwzYMbxpzG2gRchGMJtsaP",
  "key35": "5ey9bk1rpFyoyWMYetUBTDUDz2NDn2gwxbhJ25TLYdWKVHypwPwoamRHtmbMBJ3ALkAtgbghmcWyCMENnEJxL2LT",
  "key36": "5uemqHpaH6qKnGUmDFoFPf9EhJRHPGwxo8frPFrhGV8wyWgqTuv2gdz5kHB8kvA3UTh4wdFcngyaiaaLwCcLBAuJ",
  "key37": "5o3vGNyyXYa7RqLBY1AgSZrjJtwdCdtbRVhmyDKqENrJB8w3H1oh3WLgwGCqaBSm2XgwAf4UsHrS1VmybLXCSs7r",
  "key38": "2DEs9JSvGPAh2NFmFhCWoufsn8TWwzw4V6dMGd424ietAQBEUYJsA9SU8ttYK72XCjFarrAHvcveEByUVt84c4LX",
  "key39": "4BpQZYfPXFQuAsbvsLbaTkEnJA7hFxjXEdihRPUNb2n5EMYj1M5nQb6kP6Y4cNBuugMWegTEhWSqkJRybpBNXcXQ"
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
