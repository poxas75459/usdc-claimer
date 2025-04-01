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
    "2qk2GaUHnGXTruQtURZCbkuTdMV7SpiJwp2hW5iNQeWKXNGspYcrAYdFwHsngrEiAHDEmcnGgyUYHbMTydeFP73G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zr68ZGcBMpppgJJP6s4gUTXqg6nu98x7fhmML26KGNGU4rhS1ExzwV1u5xYjEttegnu5mSJGASwoe7yYqWzrhbW",
  "key1": "5eFREH8PwrHgMyqqTbR1yy3XNbRSiqq6Nc8rNS5nUMrfej1WmCckpdZcFHi9YyoBcTjNiWoRCz1R644bR1Cbroh7",
  "key2": "z6a3PBfTioyeTXeRAzNXtToQ7DA4oEHoiZM9AZNPZ6mqwrUVXkbxFbP8i8RVvUyhczXHgBBmGxQer1Fxac1YEdQ",
  "key3": "PrBP23yzdcS6Ds5tPpcPnTzMDJvTGnNtBpVhVokEMmNs5HkZVKtQTdUp87aY2TV4Z2LgeF5z9ohQFqf8rbemSmT",
  "key4": "41syj4bcsP7BS8hmrxJRVSmiown3smnmZLzmFtU2eRjJ4SYbePRg4Vu89G6RLESExJhUduipFvM5MAUeKTyDeAkW",
  "key5": "2Vta8CNYSN5a43GeFZ8RoiHeYGbouKQHCNcKiFrXU4kKzBqrEPpr8ZfL1S4B71x8bCTmYaLSLcbJEcz8ApH4k5vZ",
  "key6": "N98yTSqRn8P7JV8b68f6gv1STgWHBnqUbUhRVmsTRfLbwAZxeoRPLCqqvLSDBt8Mvr657QbMZwnmgsBAcAkGUZN",
  "key7": "mSuc7oMZkd7moXjqMa9rJe4YD86Ype9Zi71JTcwip58jzgMsGns8eauyYV9p5oCGoxUb8XW6JD9SCcqPKk3LGNx",
  "key8": "4ZDjDVjh533paUtBS3xaY62SqRGS3puMn3QsVYa3bEyoGro4U8oN4VjX9KxG8FsV4FiJnaFypkVzygY98giSdwx4",
  "key9": "3NUba99cGxG5vn2C3UBWkBGaANBcrBpRWhraGTYVV7epzG11PVbRJhnvVM5z3eet9VVbY2kt8bHAPtDYF4w2WdF8",
  "key10": "24xvVP66XHwUaWDeuXUb8aZ2G9jzPGbafLhi5qw93VXionSFqpHGfijJB1ZRxWUnfUgsjjjwCrqkFyUn6b7YEgdr",
  "key11": "mSmz5egi2Wiy1n6o8Mw1MSoueZ5x1LjAATX5ydLvzJsH4fEKa89jTm1gzPrVRQC2rNf4iH2m4t2mzYd244dnV9V",
  "key12": "5o6RSTiHjGUdvS6y29E4LnhhdiSbaqYXNz3gVsLMx8oyS5YhmbSDYeQzyC2cZWC5GLN4ywQYZPHLUV33kasSWt4w",
  "key13": "Ucgnht8oqJCZF6yxE9Q2krYFdwzxWFXT3ULSuMFQ81TFVsxqdYnoFPG9pgC9N1wERA7jZ6mY9H7DnfBdK7UKMTE",
  "key14": "4kVqgXPaQyBahhNTiLn4xUMkokLFVm7TnkU4DaP9hzDv4snCWsQCSnv6KDwHReQV3kF39PRWuALYiThQ2gUg1WDH",
  "key15": "5g6A7TxCuvE4vEnkJDUaf5Ts553r14T5w9ZVdHLvQNyDVDjDrM9vzbSpKVJdTGb9R3b8fRAwng9UWu46ksB3kG2u",
  "key16": "n9sf68ijK5KN47nC6fFMnf2C2F5ZhKEU5uBCmRuLYYVDoiYwoeCo7Gxjru5H5AAQjVX5qfHBsMA4Zy6A5VCW5FS",
  "key17": "5EzZNE7QDEZfeLneT2U235J211qpf8Ce31BGFQybT8KEyZQZ8Eg1LAT89FCHL6NHhwevKHRDEns4gdHxa1aMw1q3",
  "key18": "2guzuYQEpZH4TScfYmrtxbeYt5HgHGNzcstS5WrrvJccRmZn679GLMKWTa6k393SwiyWFN3KSuwwSjAXt4hNDNxH",
  "key19": "3e1sjTDWh5ePJnW2cntjr2WFtrqGgE4ASPkm144Vo6t1djkczTA2SCRUVn8CvKGnxAzExdEkdBQJcCW5Guy69KBJ",
  "key20": "3mDw57bPGwyuwZxewusVC3c1PZ7v7eD8VFm6Z9ddrKrL6ZNuRdgjFoPaqNxoQY1BvH4FMLrGH7rRMutn7pe1iUPN",
  "key21": "5UNAve77UMwGp4vn63pKrYYuCyhBRWc3oFJVD1p3BpfBP5477F7guQJKja4T4qX5edbKpUutb3DyLT83HsiUnmbJ",
  "key22": "59ZSiMzQHVZjGmAj7BwffKs38LEqSPaeZC8KZoEbr8QqPvF4ghCvYqPQL6gJhx4f1WnVhohYppufuDnUT5v1egx",
  "key23": "3A6rwkGQLwqf7V7KwSqSAt7NsToPaLZTMF1rVvGNWiiBDPfWhwDt9gP72DGRMFirJFxKfzLpusrWHrZQu5pt868a",
  "key24": "EpentrcDmwPyRacmrbKZWnLpGbDbXh3X5LcXsGeds7upugW2tdDXgBvNwujezWa9xEUVn4MPu5Rw5NtdERwQ7ZK",
  "key25": "4WrEn4stNeArXoNrrtRbodL5qPxrg38E8dTB29UAqFE7LrY3CWhnUxWZMwdsVuGTFoujSTSiQsoqBoZ7QEs7LxPe",
  "key26": "38V4nWQRHMo9RQAb4MSsNdDQPTBfEvBFuRnY9o9JMf22iFZ4Qxbg3ntpGoEsAGkxMjN4TZ2Mf8qKtYJN7psmW5SX",
  "key27": "3z2PZd1cr16uyLz6xM9dzGxgTMoYmCW5tnme8Svzgdu2rWeye63kqaYmFQsvpwduaBGthqVdkAF1Tak6BXszYJ6U",
  "key28": "5iLPXkUN53cbUMfHWaHjCLiQ3R2UbXzB6jKoqw4MikL16cKjszughotLBu7d5WvQuTv3nqoFvATzHd1uAZrbbz6R",
  "key29": "5mKazgVECQYtbZBzWQ1pBZ3b5MKMoWoqbvtBzJP462E2c1wo69GC4PPBg8PpRvu5dFwSpM45vjBkZpaBaT3LYQ3m",
  "key30": "4MizxCxoKSN5NpoKArna2QEWaeKcBp3ngAndm5BUPqUgKYm1TCv4tX2phfusSB7HBCFJAuB4asM9GYA1BjYVdfUX"
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
