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
    "21XN8epb58iGKEGGNr6GYNzmhZoncsTHnx3NrTPvyffNNdepWNcYwSbaVj55umdLDG6yfPRtSNGZxwr4zLNwpVVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BishyioaXuAcYuBVCrqSo9t9tP8dLLRmheXVMgztfSJiug7nj1hLj8Kq1CXNUya4kMMDFcpVqHT9g76XBSeBtG",
  "key1": "24QeEvMYNJhwxBC1M5zQ2GKo2igk46h1rzMDvDcPD9NZgdfqNCXZTVwMmnZn7k2PiHsLKT3MDRhGJqNz9ZThxdy5",
  "key2": "5mF3jCnGkKRQ1H5WDXgsQXcGNd2Ap2u59jpmaNYu28AJvAWca3FoQTxzYqQggai8pYJSVVXMChLj2bE5Z94nkdqB",
  "key3": "udaQ5nLqYbbwgwCPHxG15bhXVfoJSoC224urWDsGj6iWwigHkJQ5k2d8fViAAwRUeKBUHgLwMFyqTGWnEQkshMs",
  "key4": "5G7AXhwTgL3M4RjsFtBvVm6yCrhfieUqcq8a8y6KCDQ4WZ82FRF9tuvQvVmAntmPH78xVBdJZsWi3G5ZrRVyahtg",
  "key5": "2SL3Aiz8YciN5i7EtvyEfzdz9FcvBvKzKUJwd4BsWX789JThuTK4KKVMYdgmeTtqQC5mBjxLW7Bk3XdFEfHYy814",
  "key6": "3TXdEYqXnHqrbcMvv7SPhszPZLphaPboNS4LExCkXQGfuEG7oP7Cmja7awLotbkh3RZzPqcb197FWu33UW7bYSek",
  "key7": "46synbE8XtYPWX2T6bvKQYrQcHJcMyJ6go5foog9cWsj21X2AghwDjxCmrCaG21oyUfH7gqXJHLdjs56i9MhKeya",
  "key8": "5bH3Dy5WKPvFyNgcgHowozxECWaZbX2KhfKcZbVpW2Bv3y52RFf4Vd8rfzcNiZEaTx1gd54HiXC1UpnBeEftKv6U",
  "key9": "5Mz75G4B8joArdd6NdLvUWzGL16Q2H3kjG5Ww8gZ1DiV6pqPBTvR6V9wG5tXERtwHHpAc5LwWrchdE7G4xF8SBH1",
  "key10": "3szyLNXvaDWtCTbbSSczrX1qjKdQSydjNKbHBRBndTCyCZHWHuFViYX87MaW83pGiYRHguKn8ihXFonRicMSNJiX",
  "key11": "8vuYnntaXgrS8HW7ixhaKzkPQbPCDg5Pe5zfnA8uf4ZJdaEcHfoomYvXvdXC7Npq5tq63rEzAJHFdYZfEuWoQLa",
  "key12": "61jgoESB2fa6QurTVKke92zhPr7nZGvQnFViY7K6ZunEbr3pc6M49L4teDCwFqjte7uwvcYn2T4rtbDr1zgnyr1A",
  "key13": "2b2bgezEP1LkpAWTWCGQJKanzkyC7CEKTM8DVC1EgkmW4Vv1Zt2zJqtidUD8eTBfbH17Jhmq9yzxiy4mLSi2qMZF",
  "key14": "2VgVn3MxsWQL6xfobLv2cVccNz4xwKSD4aaqaVBuLNGP8tvoShiLAEhKtJyK84XiyeHCebgurgr21WMLuoNdyLP1",
  "key15": "5Q57an1PfTiAH9fknfEbb5Q5rmEk3qPEFb2SEPuEdLzNtcfz76h7C6p1mrCKMLwYBTs1xwF2aJJtufFkZNgJKUxH",
  "key16": "64Ph8Jexypey7v8YDJpCwfTwJXjB6voMWkYiuZZ4jWxjm8ogEMyeKr8FQBLCZURMiW37tNn2CBBPt9GzXftHsdBK",
  "key17": "5wfXrGe89gR5TGZzVy6JJkBXG86v6zjPHbkBy8sumAwczhdrDgEtGgAKLj6LAEJ8SfrbLq3j2yNeTQx2Ygvm1Sno",
  "key18": "2AG6XBFL4vyJxkg76LryEUUKb98r1eJv5PyGqfZAwoNKxLq3mCUJiig9PTGpu4NdQAQwNvWk53yUbqv2F9wPs2fL",
  "key19": "BoFDYHkhEcmur6PSTw7JSLs3bfv4oZfSrmWfNcAmhgYvx63G7eJ9G8pvW3yTFuewRRX8AXEewrFuK4y2B2qM1ob",
  "key20": "3EZiARmgHML6n6pkiLbyacmx99v1XNJRM2Qbadapm11SZkTkvSxntGxnWgRa67uAgCyvd3LE481aRvTn3BniRrxZ",
  "key21": "3CbtZWc7MSteq73g2P5cGrvujoQgptm4m3zL3BZKvAAyCCdRQuenVwbSZ2BQWr1W95Cu1UtqL8MmNmiDwi1tbEvQ",
  "key22": "3ttaFgJJnim8GiAz4mCH7dT8MoWGk3rGKGFT83aBcuw3eg79yTmC9gLxdDJze7fKYHDtRAXs8m2wU9TecBtphnc2",
  "key23": "4WEbJPEWicSVtGxcgUvpGuyTaXmkocupByo2FsTGQjJQ6EY1dHrHBuKrepRf24PfxcdTfWeuJFMDKjEBqcEg4MWo",
  "key24": "5PTurBgr89VgWpU12seKM7YBnj1KTBwhCdFGejMCcJ8fHb32imSJehqvigrL38HbZMFL7Dj5wQjsNn1wxsUQfPe2",
  "key25": "3BTfsHhFfWB5Gwfkp2WrNyLWyXFgA3dwuC7yrmR2wprCQ3e5wQoRgcZJhB2BSLrzLpLCF2ZWrkjwgL2n9oAD8sQ1",
  "key26": "5BjBFAMDmV6Fq4X1zWNCQPxrAkWyATr1nTFPh8FaoMTrAGGrvCx4SFcUce5rF4WYDVbB47k8oprVewcFp6Gvi3UF",
  "key27": "2vfGRcwg2RaqEB57ddRjHGn9o7tMyZojvmkstR4GfKtWchSx86jgXzoVHLaWG63sCRzec7aErL2169J6kEEgK3h8",
  "key28": "4WoiHdGZF5tnNq1ebjmeZPadJq5xShwCRjScPTjrxb54bC6naRrV6AuutM3pC8LcA2AggjKJeoYug69d1xCnrDsE",
  "key29": "42QUCKXBzp8Sqb9ttRZpQQTySW3xxiGPQr9pVtfYmYLVwg98Kwkm1G5x7iZC6u9zRbQ3zVBpDJqKD8htYreJtn8Y",
  "key30": "xmYM8hc4GBxu9czX1KzNNLSSJ8X7s9hptLL5jGZHdZSxFthU1YVNg8vihXBgrpvKHDt9SSBiSiw2FE89WYYyung",
  "key31": "3iYu8Z5AwJ6qvuubvbj5kTPwj96dYZLcVdFuBuihJzDAj3GjDeKf2R5f5uKYdhfRnMcNhxfTaL5r7ffZxo35msuU",
  "key32": "3NJL9u6qgurGCYHv6m2Rr1yo5fcBqRYkzEnHVBnU6GfLm9AmBpecDG32TYU4Cns8c9TBA18XMbxebvPjS1eYpdmU",
  "key33": "4K1ceTGUbvGM7nNFxoUdb572iemp5i1MGQ6yxPouz5kFxNm45gARP3CYF5taZi49PHGnrRZFWjh2dAm5j7MgGAnR",
  "key34": "3imYUp9cNuJCNF6caiwriverHsXbZ8G8v3kXJPrU4oi5Ld5SefdWToaNF5apq6BniDYBVVytzxn7gsbJD7Ha7hFr",
  "key35": "3NwA7DPUA2XF4RhkTSVfhUEeJ8qwJuZnEdN9zDx2oZ52Jp8XaeKJR8eBM2Kc1qU2boYK8gi8qgLedeGi5bJ9eDCE",
  "key36": "4vZYdS5t6HPJUFcusYV7cnR6RBD33xKdXU9G3JWBdRRcfhYGMfXGouoxDcusuJxB2bLWp9sPCpXoEByRMuuUnrcR",
  "key37": "5z29252K2gP3J9RTiUNM7tV6nbDC6ZQEzBMN5ia7NAGmTkjWa7XedxKdok3LQBDPMEZ5AahoYwUfCKJXkxCesooD",
  "key38": "5NjCb7vxzxPBeVSrUU6UwEoBgXutEfF6fDV3r2isvdiHT2nPWVZ4Jgd6RTsrAJEozZwzcjQ9ofPTB6GnnQS19wZ7",
  "key39": "368Wjjn8ctz3TrAqLi92kxLXxT3NdczTEixpRPPtcG9rmf7CTPyt3r9zHqx6Hmp1ZJptsYYhHEmP4Yt7KGRrFgQ7",
  "key40": "5qLks4qKaYcsKdfU7F2t1pMGctggsT3FS1Z6fQWqQMhjDR5YyXGsQwZH9nkZnvdsudZ5fDyQPbqRRAA5hZq9x2cU"
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
