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
    "3ApT3KY54CZMFSRZPSZNNporsJzjQC4fonCd4LnoDjpP8CXLVSBVksh1zszKtgY3y3v7dVP38u14iQxqGX7t7S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7FzcuQNreuRTbmCavcpUprGBFWmmc8dv9TfWrhBnDfd8TybQ5TQB1Ho6zgjwVRz1dRsbpot15mgM6Sh2N3VhjQ",
  "key1": "2G4p9jbNpTnCHRU8sBxF5mUKcq3hbcuA5pfw9rE7xMnZVZewWPfCqs416aAm27QMbuwkRPkgw3YkpU27kQ3G8MaH",
  "key2": "5EY1xii8nCmoZoy3hpTTvfUvrGXbk44MSLg1yDJPBYHJHBuFQNSrLwb7DAiruJtYWxFGe3LtcmYkaNib2rHbtDNQ",
  "key3": "51ZuNudNnnfko3qU8FsfC6no7GoRjTL1ZZXoWhCpjd6jndePqq6Q4zaSpx1sW6vmyDFbQeHm2CXbtoDFBWqNWDbf",
  "key4": "35PXGhxpjToA7FdMTtt2oHxSQJ9y3ySiVwTCYqaVLt5idAh2Qht1aHGZPD8UL5yDCDVrVfvng43oXA27H8qZW9ux",
  "key5": "31T3EjusonHQiYe8zxCwSLLq7XsKnnvo47oMxBPcwQ6ytkdUgo5wg4yjAZSDrrqudDSvLFDmCN3yMV5uStN1L2Mm",
  "key6": "3YyH2sco9HE4JiLyuuDSr33E2xF4BbgQtLChTjwDAAQF4tDLTUW3mRVRXt22buPnhXL6VfLKLowHFmia46TBxmtc",
  "key7": "4bJBQcG8NhCLRUj57QqvA8uuvD41fkjk9N93bBe3YjY1QzhkBF3FFB5ezdvKFqkvbugcUdiueZGfZmp5QLMWwPvA",
  "key8": "C8AuSy9dBtJvDszzC9f96QZehhwHEfKkxz9e7JCY2FYiQH9QSKrnHA6w6USnRxXDZJJgLhHzpjfRYqVsnRk1oq8",
  "key9": "2uY6ctjQm7MktiqfcTMYS2fi1JUL6APGX6VQEimpu6KBAmAJmtUzV1kjs23KVJPszgspfT8ikMZJsCpGu5hbscVd",
  "key10": "25p4vhHZRenGZpnkh9qup2nSqwf6DAi8oREAox7yPtwMKdAazPzGbFPcnjEwjXf3vHcdWyWvNoszKoEyLmXNqbaA",
  "key11": "2DeJbZgYBmtcTnNK46Mn6bJCXsy7fRCZUpdUxXGvMcrfTsCU31aArutSAXJXGJzwVvJFck1Zo5YPCwyX1Z3RbQpo",
  "key12": "gc9bBguxXbZesJdr9v7Sx7ku9dyxgWp4kWepWCjxem4CZoEA3cKqss6wByLR3hqmjRuKrN7eTcmb8rNfMAb6t4S",
  "key13": "5Fu8D668WEgAJB9L1NEkcynQoxarQ7anG9tdHHUmaWFZc1TB34uDhSF3yLUrktTDuu964jTmDzvBCErCEQo9gcsC",
  "key14": "ZtWX66wjUbfmYf3K9tDwJchyUnokPoYS1vjjuS2hw1MqHxyjtKDvhnnwuX932TgFmhkrG1xwZEdfmgF6P9RM5MH",
  "key15": "4sf2kvhBbCsF4VQPrNJ3SeWqjs4a1eWswBt54uDwzprZ98YjAwZq2h3FZMYb71Zh827zEzb1warxW87ZW89Skfq6",
  "key16": "3uksco8b9A9EQFY3UArqbzmKkJ9L7wumqbmHmiznBPHEefLjxZfTLW4kWvQmkBLqWEQRpSsnXSvGpGWaHtbE9keX",
  "key17": "9NPPDez8MxwWLUUu6TXSADcpfAsnqNtPpGqUC3CkzcAxEfLH1QbuAevMzgphHKKy8oXwHgLH6Pi6XHeeGDpGCjh",
  "key18": "qVTvwni9JB2vb5KawtjZTscJdaQLw6VDJ8YGRxKYd4WEyhkjQANAQUxVDP15eeQvhJFRVdsaC338o914wh4Edfq",
  "key19": "5mJWFvRkLg1dYzEbYYJEfYJCzQ1tuXgZnw6utHQgHXfsMCwpwqghhqXmZTshhie9peQ4VN6hd5E98VL6dpm75pFf",
  "key20": "5HdvMkTJyCUDUCeSGVT3xLMGjmRDYcmSHgo9VUQxLhdvWVwT2CAQXazuXk3dbgS39f7bwr7M1PmjJBqQwmhqDhk3",
  "key21": "2f7yodNqXKYfbg2vp7jzDVLiiQcv31stCMLRM21LghF1nPHw5y61MBXTkXXa23iB2D9aCVg5jgEvwX2vyWeT9nhq",
  "key22": "3V1eJnb4G4xZYtKTg74cCBu1iHQ8rhCVqFGecCGYgaiXkwf94wL39NvCjSnpNyspHxhdFYjYCnwwhH1FzdeJ1yfQ",
  "key23": "Tu9Am7AGeRUaE932kXUJ2gUrQbFQeSPqiM77v2tpThjriuqwJT48Q8EcJA4WxfY4Bvy2zXZwbpKDQjG3VP6K6NY",
  "key24": "5GZpSRbarQBh8afSrcLPRzyqMxt81ZgaUMBabHmMuVEtpGxxwDdJZJWqF3rzsni9RNH3sb6eGXyXu2dP8cqa1EEp",
  "key25": "5dBR3t71vvUgEyfJ7ZvUERyuunAMUmyC93n1cBvRpVnASYbGNUX4da36PFHNYxgzuKNdgufqFYU2xGJtTGd2YiE7",
  "key26": "2Q4x2aZpfW6AAEbqgw2SCkTPkQLyBJKMBq8sANFrnXChsPXgfXBZtrLKSRMaGVJHH7yvGnUQaEQZP2FzgpBi8ruS",
  "key27": "3MoZkFUQ4XvJNLKbGZMSrjdCCq6jmWnDLr36ar25CDUjGAsdfiz6inC1YxumPbfdswEYn2iEDpjZNNpeedvH2XPz",
  "key28": "QLjzDbs7Hmkgoz7Fe31q3XyZqYH3qKpT4ztFFuqeApgMvKypJDEiaSwALnQwioePFE84ZeqndtZAcQhzrXiYnUt",
  "key29": "2qHZiSgnRucoFfcNq3JWYkDpnJ9UkSqiV75hj3WdpNBDQEVv4JZqoqmHLBs2wFCaa3EZodzFMh5Z6tG9eyTFJbDm",
  "key30": "3APg63424NSijeTHocYaz81fSEeSbpxiTp23sNXJgEY9fEbov7acdukE2if39CH48SJTrss1TySmkEAbanfMzfaV",
  "key31": "asGdrvL5pTKD17TWYBfhFdpKkFVeFJkwwY5KnGcXXq289rnNT6vYKakU4cUCbCwFZhtPEccKgWxonX3iAgmrYGy",
  "key32": "rFuhnYuKbmaNSbKdfkv9wbmEYsPx3Bc4PJSXm1jaxJCX6bnUr4uwdpfAmqVenQiZefkvKmCCuHw2odCDf5pG51b",
  "key33": "4uh9DUsFBXQ9SX5xf7peUb4vTcPu1vWHvoKd6FxL3VNTkbB4y5V818P7LYRKkJrn7BT77twVHk51SpYBJHW2rUAV",
  "key34": "59KYSeEjkLuMDeDwDPi6qumU3Sz5UVPga4F22G7XwEHijbojJLpaDzJLpHR7kGQtxDCPfgxoKzy77FysZiAbXfdj",
  "key35": "2Ay1gzTD466SoNuVjhM4NSV66sQt6jj5n6ofKijUBYuYMDHCCvPFWwEHCS7pKbZXsLatEYdYUvi1HQUk9R8zTnB2",
  "key36": "PnMfgidDJf4R8v2LCBTXvX2bvoRCretmckXyi6bQmKsrF8gC56XmZsDKBZGKrisKLXQZe6YSRV9VMsikhzDLRKg",
  "key37": "2oW7CnZPxrLCsRTseXYgDW7NJF2rJEkqMZFxB4dkomeYxLSxHQ3j75AuUyTngirtH25iF5heEZXYV1jwKbguXPP8",
  "key38": "2Lc7D2tFfsmvRTttcoGJRSmCJtpqFsMF5kiTKkA6kN6Ru5KSEzLiQEYbJG1BaePyTtgRkGbBAviMDvKcdRcxSUqX",
  "key39": "37fsDe9bZhWzPvvTDfVCYFy4m5AtVDHqmBg8pKjhbGZcatJKwctAqjudwcbgjTGx1eWRQwnKuLEvU4tqPwsFkZ7f",
  "key40": "4v4Q7ZzFRSuWyvwTmVgttquhkN2CWftkTsMkW76cjcYG92aQhFGDvywDGxiajXUhSfbmsyNy4wJFnMHPFuT22kEy",
  "key41": "2pUEJHzX7xWTbCQ197hPZJswzmiGmkc39LPFubTCzZ3rc3ZyXdxRjC7qA5NqanLEdBnrvp2FNMyLqpjcrk6nUwvx",
  "key42": "633za91SmBNiDmPn94kRFEXhjEHTjQtAqt3JV5DqZdCxJb1oAub4wv1GpFseh2sd7YnmgHS63pfncbmQ2Eu8bqQ5",
  "key43": "hYF3wT5c76C1mtB9kxaGa4ZTbixkr4pP9Z51ZDcVHEQn8ASU9VfzHrcKEQh7Rzga84afke4a4v7q2VrTU3f4nwZ",
  "key44": "4cSrGhgtkZchzyVyeYuhtsaBghLYkf74byaiofbzfoxhTmxczG8kWyG2HFQJUZ5Ghpdbzn4qeN1DaehckCeSfPEP"
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
