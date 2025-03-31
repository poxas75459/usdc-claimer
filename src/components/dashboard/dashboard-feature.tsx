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
    "2MuNT7pMuJR1jbNfUjSrW9iZ87dVqfAEDtdoUa5uR2EyWZ4iC8YtBJJnTkdGgPjXaGXHASxivDkTWK4T3fLLWAq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y95CzjTSmWerXWumZJ1SoYJ3zgnxsc9VCjLNVHA7GKCtm5eYAYD4MnoP4Jf1pEtPcJS7kKZx4KsXq4HiJT1yd2N",
  "key1": "VuLd8GfFbv39Zqk7zfTBaJyVWGkCcdbKC8YRrmp6NCeoYkq83Q59WaWzw9oDKeNQCA4jJHv6wMEo8BggMYoMMpG",
  "key2": "37sFBkjruEne1tmLygVWMTVmZaqFvL8XstFLGqHDVitkiuvBukjLfsXEu7gNe24ti15Ju1kHX6P14ih1twrqjEbr",
  "key3": "5PyepMqwNn8hMyZMWWCbq4nsL5uRxFF39sfvEP4ztnea6Gi8boPoWERw8DrpiB4xrzDCgivwk6zJ5Cn5cBSKCU2o",
  "key4": "hVntwqQu53cb2w39oVUKJrrgX2ZYiBuGuTWR7StxUa1JD9UXunwq2aHggTVijLqigiAqBMN5m2RZs9TEf2qVJZw",
  "key5": "43S1ktArQ4eRne8oN5W7TPrM14m83p5Fr2hcbGU6ys7LREniYEePELj9V2k8MzbCMAZyawmCgUp6ugysDCFrWxtG",
  "key6": "61GiA8vrkFTmzCRRU6V1cA2uxKHP7P9vTcioVTmZgrk2Q814DhqRht35xU6x4taXiVJxVrNvFgUykCh2e2nfmUW2",
  "key7": "3hQy9CK6b8L6GqfFUQ9kWkNDzukzWMMB5E6kvdNvKiuog6CDQqNjgfiRfouaspRgLv45JVzXNGCMATcjC9Y1c9kw",
  "key8": "pG6SZHS79kusnwzX5ougCQNakqkPPn3fSU7K2oq9iq7ij7GXsQPb5ptj7uNhjmHJ9qPgG4NDRLAZ9kLPNBuHRjn",
  "key9": "5bvHKzDML6nFbtyaU7WY3zX63iT5vRPtyj8kKeYxbwe13R9dqNHjMsozpESaoQoJsNWJLRbqWfqmUxBL6Rt4rDWy",
  "key10": "5NnPhnJDXmvPdW6pt9WURmSNAv8y9aY7cstUCxNoTMux94UcHPBLUBNGypRKTZTWT4dtjxuzijrtdpZcuvJa6NYC",
  "key11": "4dkwC2C5S8RkxmAVFrBQEE3Z37EFFF3ALoKQYPJjVJHKA61eVLjUCmxVyqYUvY1Awe3mgWcrRcUk13B3zfXaNqGo",
  "key12": "5xZdbsfDvCEKwqCvtmXZfDcqdcpdwBJpvqqVyYQpbY69RPwjcqRP1zuXLDGkgTKF41PR9894hdpLnuxeiEEMAQcS",
  "key13": "5bj77LdJsMmvxFZJkHes6HpFWnTYsrxG6zvEPgLGeZyuWsmj2yaivRTruN3UCF3MaR98rhmGMsgdr9X3QG1qLCGf",
  "key14": "4eGs5397qwjnWYTFFHH3ACSXXMDvEiWzm8D38Teqi6NtiaoKjbR6w8LULwij5MobcL89NAhTArJJS8oxg6XdYRYB",
  "key15": "5a8EZThgg3AF9TP6RKu12CzFGNVxjCghzYSWx8qw7BqGPFSn4KJNEg7gVdb4Ko5bF4GR672EZurZvqoAtNXG6R2A",
  "key16": "4qwdCXu5wUgqtq5gcsv9UnDzwXBWMVdoMZcKtaZBaU5at8P5RKVmtKHoMeBRr9J3hDM8PkCiqPhhSB3o1g8tHJbZ",
  "key17": "3vmGcA8BDRbhGwivkqRUKP2bnomvBuopKqwBxbYBkUpgFvwqTqAzr4cWYb4ERnsT4jp57EENZwHyoa7e3Wd5JDqC",
  "key18": "4KXoZtTeoqNBoEp1brZByke2gwqpsvVubDmzQBb3SexjQ1MGZVGGw5jKyf6CR23gR5ez11zAZPNSHs2idANiCG1H",
  "key19": "4MxhvvrcLAnSFJN2ktBfLzAhgat9DScCY2PZfkPhdypayq3wSS3saYpmYfV7sDnpqxnit99AjE5VGgsd84DicE1N",
  "key20": "bm3vqUuCLVA1LfNqUjgVZ8k66MKmdw8rExswzPDFhYXYshjrnHFHrRQPy1tSwXUPgp1YRwAs8PrjAPRdKjhAZQ4",
  "key21": "4Pkt3zhKfHiMUG53PivuURXUZrHzDHJ84CLQ8yxQwrAGE9c5ZBag3k8hHDmErGFcjGwCzFvVfuyvoxVxMRcmSypp",
  "key22": "3sg1KsBbajyauG8sGUUTT9R5PzkEifQ4wgmLmHemZsMAi9Whs6EPaHsaRQe87a5rkv6TE3krBwSNuNbjatqBH3mu",
  "key23": "5AoMmehKDs18HAGZu1ifCDMiEbTgazgKn8FMcPQ8qf6gonvfraYt86C6w6zadi9jDWJ93vDxiwXFeZmx8wY6PkgV",
  "key24": "3XH3kFSwtn7j2ibr16qbAeRqzECPNxdUhj3NKhNWGBWoncwisAXuS6zAW79RSWYjvuXo2tLupRydPYHmMy9N7tYg",
  "key25": "XKqUFZHdJH5zMVneRpVgzY3eyDwsKLDQmEnHEyo9FnMYYUNAVgSdN5itPxJrdSfnZGwRiBeiYaPXHAKSpWztWfd",
  "key26": "3eYip7S1bV2TMpDk6VD4uyhZuiFL7WP9RnkAWBuZu12wT82WkKW51oZN7v8mJU6dtJQHjB2FrEzSg1j85RD7Tdsx",
  "key27": "4iN7DRECZvr7WtDMSELtHUie3jJLphND5kuyFanyGpLYo7sdm2Tqv6t4FhB5kMV42nWdWRJgQtQ5A4CyRfKq58Mh",
  "key28": "2oeoQFcQc1t42P6VQgoBQiHYLtuvoTVoJEen6u2bpCFeLefmR2t9dcPheTR7T8jWzNtg8WNR33aZb4vBHe8ACP2V",
  "key29": "58W3c39EwphU7t4cCj5tMVnmrGVXovtYr5S2G4MXb6L41WQhgZSThQyP1mfCJkNTgBUjZqVPA2HkKzNo1i1TmWA",
  "key30": "2XUkB5ic4BnX1gDzk4kkKRsVpmoBA542tDmf1uYwnKbGSwkxhHcDC5LmNwsu268iqYeRBToVLkNncgqPynnnBamp",
  "key31": "4RRmZKTaqV4N7bTvJUWF7Y15CrRgrNvrmxgCEifLptUyhKJyHGBXsjkoDHyCsqYqV1hy2DXaiYjt6KvbijH4gCGA",
  "key32": "4weGaNUkpPMreF7ZHBHpFB5kyq95Wy5wGh18VMEtT99aVBDKaTVS2AuGW3CaCZsk2aerQfUWCm9iMA5q8LjX1ork",
  "key33": "4bz8qkQ9UQwEjqzh6hWzgTzZJvXxwYsN6R94SENckpqrPMTBtJgvRAvu4TvE57nhnyH47o9gXT9mXKiPx9pQjMpF",
  "key34": "sWUGoPTMSXxF5Znu68YfgxhHLceCtEKarDwANHrQHs3VHKtvLhAwRnvJwdpaBbexrzvPQihswyBdWYqJutP8wTf",
  "key35": "2iW5FTk8u5DLVojV2eaQHCaobwsrCxJsn2McPBc6qwbtiDp2hcBeqi7yBrUrTAR8JYLRK3QpC6pE559z1qdbze4N",
  "key36": "24Gdfs9JNpBuq51pkZviPJKaEWWXBGSVVy9gophV2hF9xHtB1U2DAvUHMLqYcdtvhyNMpJK1keGmjVdJHzPhHHZq",
  "key37": "4D4XTger6YzDQM2VVR5pHHt44K5YeooA9Jmwhx7Jb6SoHvxyMuWCSncgmuPfcBJ3BC3gMWYC49s1xPWfQbRKdsim",
  "key38": "5mHVi9ftJe4gjM9ApnrZGg7SFUHMmdmBnXTTotWhmcuQuD1RwLLBzNaGwG41XkdGnsh4uE6sJZN4NacTg7FvxwbC",
  "key39": "5MCMU5HmSGkCE4TE4AE2zc5wt9LhavNSEdGLU3xzXSFQaLvXXWZXSLs6kotrRNLGT66jjC1bvHPJzqbpKXW7hWY7",
  "key40": "5SNd68Z8eCUJuKy4r3BM7m9EuhvafzSK82JE1heJLxgZx2Rh9vuAoP5AkqtCB3b5csmXU5ViPhs8sKW8RMvq8vFg",
  "key41": "5ozHd59oURLzr1gxE8Bei7PYPCVPKQXJJ4FUB4BHUNfrih5o5uZtxaFbf8r4rLEGkoH1VaaHxQfVepFvy9oSqUNj",
  "key42": "43udRb7dNrNGddcwv4Buzh5jTp1Y9afs2PakfhK52DST6pQ6XQ2UG1BwaZ9qyDnnawuWc5fgzMN2AVLc4CQ7GN34",
  "key43": "2b7JaCXyrwuocdgmUbgx37zjpk6Be2Uysu2xkoJfyTmewewjmX7giTFT5qtcP5T31jN7zBnzSJMfdymJyMRbCyB8",
  "key44": "2qhiVceyZmMB4L7eGoAnKPHAfhZmwhghddDo56qERyW7KgAh9bTFoseN6pCFZiEgs8YHWzgLsxtsVRVWj4SV6XBF",
  "key45": "2vGQLyDmYyaqhtLrnRNvuGPzNfGqcL2YfkPcbPtN92g6KkKGQPLY67gkyABcBSFmDMBM5Y5LmWsB1uBERdDWhGva",
  "key46": "5YM4YPtuTTqXTXvSoWCZPS9dqngmp3oLvCijUwmd2tmChwLLHQHttgVMZi3DkEQ7E7gtENLApMz1tYCVbdqQmqve",
  "key47": "EFL8B5rFNQ5ESEdmm1qQyR5Wkzz8tJxSDVqzypfRfujGuyESXLZ1LvHk9jLUdNbCHJhqTEUy1V81TY2XzipaWHP",
  "key48": "34D3jH8NHn23PyrHeXkzipTvubQ5sNkK73D9j1cXBm4Pc9PYCdUqB8Lz8ujxyhThtpRK8ZQwmjKgpT9nwBnKdqS5",
  "key49": "2bPdZo6VrBb36F3hEoEzpErxJ1iJQKmrUrqYjs94Rx64pmFFbF95JyQthojFb4DUS7idSETP2DupZguAQPjFAvmQ"
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
