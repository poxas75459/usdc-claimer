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
    "5SJ7QN3bNARAVS9CKiGkhmjgpCy6TjjgVGKNNb2MRKqBMRjmFbecTbNPewyk8DKhHYRU5PirZH3BJBVp61qmuSL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mw7MRGyHWyJdLHd7zJihxV5kCh3joYRwZKkWkALdXKXvxxYsEm4d5Q57MJH4Mr1AfuH2fLRFQELRB3nfTY6VgKQ",
  "key1": "34FRuU5DJSddfwywCmaVBXRquKYHqwdvksjT5yXbNA4RKrg6UyzSo3HstMTif6GVG6DCbZ8VyNSy5y7k6KgjCUqg",
  "key2": "4R11VfavFmvrphdhkRBC16nhB4GeUwefqDbqwe1R6yfBzxa3aomxQ9rSq7ywrMKMr1UpwbWb9FzZ4T7djdPjUszp",
  "key3": "2YYTPa71d4GQF3f2iWfh6TyA2mMcwCpemr3omsfiE5R8xakvXwhjUMXC3SdMA1m42HbzHPhE7qJYDMHhXwufiT4o",
  "key4": "2mn8FuiU55GCjnVHXD8LdXp2K8KKGYz1um6y1YU5cyWrMftj6Uhy7hsALrZiu2ez7BWQUp1kn2eiCDdzJ5fX4iqX",
  "key5": "PK2G2nTTnjULBXLYhdBGRh9it11jY7TDuGM229uygqPmQYQuDKqWyYHXwLG1qgqJHPJDuiVoCyijLNDFDL3qL9R",
  "key6": "3KfEbBcbkhKkDYcF4R2wNpVvwEhTof7r9Snf8qtV7iQ7FJ5pwwXLp8fruGLSNo2PvazxUTYFqLRWcyyZqyJZHTnv",
  "key7": "4kCYJ2Q89Zj7cX4pBNqKMWUTMGTqG8TptEzc8sMzsAz3yssuwfewRbHDQpcrzoNcrRhgKXSq1HnnBDuSPo8RMqbh",
  "key8": "2Q3yXD1pTjFgeJbjpCES4dwHsDsnRXjxq2FyDzZxonGTFQBbWzwUpKMuYrV85WBqiJRfw3eohPQCUcT188yFRtWz",
  "key9": "48w4GNU4WeGgLtEENZx2iV6spj4QsQJEeepJySLJ8DW1FDYxRk8fE1rr6NcaYDMCRnoS1hZCtmBxPzj2tesxFcmf",
  "key10": "tQmJcoaBKvyK9tAdb5TaAgLNazKjN95gULkr8iwTVa6xazUw6vaTSKjsEpEYb9vL8XBTt8x57U6QqpcvRxFnP1J",
  "key11": "4AKKRzDf34cD7HTdiUiYGAWPT4DbTx2F9mw82cGQM9qrYm3QBuXb8dXHso1d93bcexhmr9bBNa7tFQo8Z9WU5zo4",
  "key12": "2XNtJTuZS7Bw6vpFw9QZjU3KAY5Go9ZCA1HxhZvwnA3CvDZrWMW2dMwCj4jdTZX7Ej6oGHLzpuuM7LFCwgGaXyHE",
  "key13": "2q9t7YvFUnqS8DGrLomKonZbKyokNDKwz76ppqZUuYyMh6VDJVzYy5jnsRwPVG8yuAv5W5cWJYnySMqAgYi7wAkM",
  "key14": "5LHTvYTcm4QizDCZFtsgmT7hZ187cQCMxAeFT7UEtLodZfUHJx9EpLiSp1nYcsigtyoHSv8UnPb7KCyEBuQfzyHX",
  "key15": "3YPdg5PcKP7BXSu65UQUs65kVdhVoLmZfENJY1Pkc7a86EpYGJQJDhNTGKJxe8dTmVq77irtVkxFJ6Wmrgvgpd1a",
  "key16": "2DTpYwHXK7CbmwMp3sGefr3SUJdNmBqpM6k12tpS6U7FWHnDPWDPFYvrLvYP2M2swKdFdPuewyH79wtJYiYd5YJN",
  "key17": "7zP1D92iAsFu1g77tfNxouxXLAwfyUHbR4tSw3bHCefdoMUC7D9d51Rtv7u3hwmnpXAooHtadPsZZigetWGwhgz",
  "key18": "5X1ku98zt4zffiZLiosJy3KWtJk7QcPDNbFcxmZqxgSw2mkYyhQeYKANZVeq71t4z8VhCmvGmphFYY8JdrGavaNU",
  "key19": "3GrbKhP5oXsc1rbpB12pVbKVSYPfUCfA5rXLDvXeH5t6WYFapjuAwPtYrJBzk2qFpPv1WacfVsz92BQ74XtPy5Mn",
  "key20": "2GdoHjYbTNrnw8C2dshN3Xv3ajzFdEsB5BVEqmz1mFc387yXCCNDqRv361mZUSnDmWWyP1yo8wJS1vfgRiaQNJCy",
  "key21": "2MYXPKoxxYyEwheAeaqXQWRTMcRxNYhv8VVSjud5CBqEi4Hkhnrb2U97TfEfUckd85PoDrbxNF9KCQYT3EcMrFF4",
  "key22": "3tZ3SDS1gbJo7A7njQfosUh3ffHg3bWwPfiYoZUC3Lo9Z8inQyAEhxqTVtRpoEtyc9E8gugvvZzJSbCh1Po8i944",
  "key23": "tSfKrAEFdqSYNuKeBYvGL3CN8cLhrDvQ3UfEsdSVQNdBUcHjViUDEBrsK1QedqUa1KgqC9yWmLazGUicxbvXMRo",
  "key24": "256mACquGQmdyyPQgvSNrz5B2n6k6BjC8xsSkFpocsphZRvcB7kmhVn1AyAuRTWDJifQ5eGQkV71ACBkCSCyfiXs",
  "key25": "3h969X3vaHYkKLxM6apC3fQXepKeMbEbn9VsRq2mgGsLEdbJytNW7FixQXTiEksvdAx8GnPtfpfY9EYk6DLo4rtD",
  "key26": "4TrYg4ysVYox9wVuaK9CLcrrj3mZqes4X2kvNogpWqdPjFGzLpqS34S55ab1YLPha8EUXPiVqPJabMicjb3HVam",
  "key27": "4EUT6SLswJDKT9prcCezoewbCK5gJDWBh5QvkaQmKt8EFMD8MCoiVJkezGyeA6yb7LHDb33UEfTLBM4fyRmCsE9F",
  "key28": "5abDuU2AVkQvMkJtPmQyS1ydrfmtoGDzPeKsrxAStWU66vnA9D3G7RHsMP52tikRtocSs6gJHZQt8PWiz44u67mC",
  "key29": "5NHd5uojgvi7jJMC34GLWdy7M3ocC965oZrvmgJMYwAMmzXdvVsdfWqatiB6k5yPa1Rkxa7TMsizvuzNcvrez18L",
  "key30": "4tgw778iYH2S1tapSPWuzuGbMtqbh5AfkzUDVYAGUs2tBWbUbkhbyQx8vpoSTcNumuqtY9fJzhuqVW5bGKLFuHw",
  "key31": "8hpEg5spJUxu6x3FALNX9jLkCB6agAEAkXFaoCoombbG2HxY6jqucfRkmwSYMnRJPHLacfkecqKtj4FJTYqExVX",
  "key32": "5dqru9kHQhumprAKrLkJLFuLFGwvGZtM2Cd7VA4G9YHNyryWv1W9RcYMEJ9b5ps76pNpyMKZ5tbvJQEFXhc7rWyh",
  "key33": "472mpSBZpjGqWPhkDgkFjau8iAERn8TwKPPYeDiL7c4AENJHrKGZUSc8vM4k2YHGzZDECmmPd1iWzgBDXpkgCuA4",
  "key34": "zwy1cR1oT5sZ1dQRV25rgkkbhD5RaqjBZ5bWq3yzMGxT7fLxBpHaPxja6gH9FhtK5FS1voL6m8cd7ehjXEnPsDz",
  "key35": "4hhZffR3gfahT2LYfj82Az211CzQc5DcMV1jgxAywQzSLvDmeX2fuATepUU1B6Uh4CYaCnshZAgeg5LvD2MwiBns",
  "key36": "5uH9hmbgPKbLuKYGKrt5YcqGmfQKEhHEK9YDAQfVjavzHgWuCZ3PzoHttJTk18jXvexkDUgCdLrAhJReqdFedwTp",
  "key37": "3J5GWNEAp5ZWvpzc3eiNAtn3zQABomhMKUamjhvXP1Jj15eb8YQ3E6iz1FBKyA3STPJqzzs8JwZ9FcnU8eiKgTvf",
  "key38": "5Pja8TzPWiGCSPPJwMYTfCzzRnafkWPSQNLix6MSiz6KMq9WLoXdgFhW5ZVcdbrXrLA7TZZCztqrMrNMCZVMLL2B",
  "key39": "YKErkcmFrJ3Cu6kdtyYKKhbHBap3VS5SPepdDWcVg9yh3uH7w2JY9yaBwdcFis2TLw7cJ2bm7T1FKxFkab1byuq",
  "key40": "5bVVDco5DJi2WnnkzgMXUoPZcgMcPFfgfkuixENjoZkTi7sj11dSQqKVwrxjsWVepPTnMGGii4MiBU1SwmB11kHS",
  "key41": "5L4xZhWfGR7gRMPc4ugjDhNUFHv6DvcKDhr81TxA1o6EnXMn2LBJ1U6Vf8m5X8xMrkdBHFfzEDcuzaiKwoRBrVR1",
  "key42": "39AUBtnCd2uLNWc8NqQFVzp6jtHS8d31KfGQpeU966m3qxg56SrZmpjqD9JLMhdF29LBXVoYqS9XSJAYC29r8dZm",
  "key43": "5rTyzCVExewZqGU3xDwLQNJF9tD4UAWvroqQtNPkzfykr5Unrg9LdfNatUykMicedXJqgot5pUc1rUL1gaHFpj6x",
  "key44": "2VSBoYbkcVJSA1xQBchZmku8AsDhN6j7eMVtaZewcJ7gyhyKVqdcHSAx6N41PBSBgXhgchBtosV7QbuXepfP2vGD",
  "key45": "3GpyBNY67fs9A8FnfabKKGox1okxYja394AvbuoMFVu2nKRhFRqJNe1Kcc3jPDxpzbrvpgeparmdQXi9eGuxSu6B",
  "key46": "46exBSVX9QdCxGJSyDQJfnjv2SKVsN7s66pTT2QK4fcTPZDPM3du5x7JjWyQ5JhgAFDr5vyd28gF1tnEsJ1otoQ2",
  "key47": "4TSx4R2sZyyLPykwXWG7RPJDGwhhF5y5eyLsZWs7VcQAokZJjigm7j1oQuLLWxL5fLSQvcJ7PteXJDpdShJCbeYJ",
  "key48": "5cSLERuxdxerXRsudM81J3Bm7FvgVGesKBKzUWNNyi3Tud4B1MTfVHLZhxii1nq7ERLAojgfFX69JsP8Eu6s9ogy",
  "key49": "48ZSBe36Q5S8wH3VXua8zQHJFJyevyspsGifraHoHjPPrE53XkWSsGNoYni8wm7sTQh19T8AmTcK6vAJ3SGpZ276"
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
