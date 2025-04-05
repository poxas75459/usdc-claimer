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
    "5jCf3QMCcEVeBTHTZXSewE5KNJGD8GM4QcXwpjnKX38168UiS4w8EPYkZdjYds65Qfn4xg4ymFEBgaXnzkU7Jr2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQq3kLt9YcrvSsTHFv4fmg32TYYbDgDAMN8PCMjbzouQYNJ5mARfuqPpoPAsGVwgTunneLy91r7QEjJ8RHMfjbf",
  "key1": "2hvE9CdpTCbhd49uEQkdFajeJ1Ur1QZMYhuwFWbE5LKZX2R9nWyPJBTTWiNerBC49FZfnck1EPwAXb3xDBzzBH6n",
  "key2": "5K4fVTjuKRwwuiVBDKJLz5pTNEBBaCPmZtqzrg4zLZQ1JTe1fpqYtq62zvsWaa8kC3GmaUfdz36mwCw8dqoD9kkH",
  "key3": "27f3zdFpspWt36b34mPJtGNJBGEueEF3y5mC46dbeumrYxympAUkBo3jJQ3qgtpCBULW2cygBtB113k4xu26eGMH",
  "key4": "3UtkCpAoPrj2NwVHXeJLvyxQaw1ZJD6PjTx3js25jyp8y7WVB8td3przamdsrZ8qMGZNR4Sb9Cn48kNzE6BxiprU",
  "key5": "3FYCQsRGZp68QKAxZdiCmBgQFvb21sRBDKuJSnqakE4sU2agAgeCdA8KHBeSBM38wH8fRcaCsXoMDkvKW5yiFdTX",
  "key6": "3zq6KsNMAaZDuWjoDYnUnp6ThDAj15Nn9gURVV87nCTgwexf4Kiwdv4DPec49jj15bZwMBE6CS3HaDfbjD3gmnJc",
  "key7": "4qAwQybkDscfwgmM5n5zfiUC5JrQGAEFRhHFQ5ouV2aRXqcWQtffazeMFqXEHEVG3eBCjuZyiUi4FLYK5R411jVC",
  "key8": "2BuiYxmL6fWYFtBpYmuReQb1RV9K5UkXiRSyDuyaJ7n5ka9z49tXn1zQRnDbigu21ZfwQRX5kf3VYT8wcNdzRuwu",
  "key9": "YZeChXEB5NYE8whmKv523yzbc6zy2Co5VsKZW6kPqyaTmvECtb1DniUYSBG7yjXgfDF5SmaQQJ1suHuNo6ykMFi",
  "key10": "qoTeD5y7hbGzBKFSrsDEcxL3U3uH6mSr3jmK48nqodHqvSvUfeAwWbvbYBaT8W8hpkaaXZs1wGBF6VSPgZyWPRm",
  "key11": "3F3T3betmQPR9pTRwKq4KxD6Li9YHXjygbccjh6vkc5CHxZogkVD5UZJBvQ7M3h7Kpiub5BHuiQRPnm5VJRz6fUH",
  "key12": "5jKGSQDapwJnu7LVXHk5ZEF86TRcHgoZ37twibTdCLToBHRT9Bhjzk2UgKjQrevWRy61jGZ95mwkUQEfLromKKZN",
  "key13": "32wMADua734zuMbWVMiSoEH8UsgrzShPPE7aqebmvLDtSNASeUnrTwoDT87tDH2Mj7avzDyZ9CjReG5LfevNn7Ge",
  "key14": "2SCmh4GHsgJsqdDcbS1BZtgaNWieBRDcUzgN1AKJVaAwDURrCg8kyMQiSgbaJbGydzANhttPvAvfd1vLjK5JikVb",
  "key15": "3GbD43ZmYWAT5j2FXN3W3ti3bME29QFsfNjvCxAj2rtNP5p3sQUnqXk3sg3a3gUxAeRq4oLBy84oqCzY4gkRr5EW",
  "key16": "4mCk4oGXCseSdQqhvMzmGPYfn2iLgg9osWe2NRtPc17XPn46kF9sX3PeRQYtE3fi48YyQ7jTpjFLTqYsWMMZY6L",
  "key17": "d6Cf4rxpgcGvndonEjt6rZMjCYxUbCWgUNc4nxPoB8BKydLkoAhj2oV5q6foyPGknxiMV5JfWzAkZEJTeXCPkyZ",
  "key18": "24nfV3dVp4rUc3MrByKc3qqsHkgLoxhHMsvQqNdcif4yaUqu21kdNtDoUimuaq8Pmi4Sf6xH2o7qSuJDAkEYRcGj",
  "key19": "swCNy4gmREa9Aip6k7GQDU9CZw7FZ4h4GkrFVv11pP9SPGSzLG34XgnVQUMcg5jPxDWRxcPggWvvJSSQ7udrxT4",
  "key20": "3odSvCknEtF7sZoETNVcs5MdoP6N6jB6Qy4ZMr8EGra6jpsh4kuNpncde7TwcYHekvo9ccRQjNmt9yPSp1zARfL3",
  "key21": "a8jtpsvhu9b7MkX7Do1azhNkCMoxASdGMf5pdnzSHb6MsAPSzEzdXwF91x5s7EwENM3YnbdVnsEB5HUMUCgmi7k",
  "key22": "2CPJ8cjvjJ7cTjyNyKDq7LHagmzfzcZjW7Nc4Kn2VRJjcNHzf43xtQDcrYznmdgjMY3cH9WyKzPUe4bqH1ifMwoW",
  "key23": "5yCQzF4iPQEsL1WLrXLtSVFMvqn8EsSDfwaAwmZjnxvTDw1ne7xjj4E5nd7FBuiCEmhzAfnvvR1eYMQb5sHC8FbA",
  "key24": "2vskTryqshLoEuZSkzQrf3QGz9zE2DxEMauGxAtChozbmJVHmDuA63WfdZMTsNxdxfVYonGQmNi4z8VGieSsAXV1",
  "key25": "5BcVtfDxGmkeTjLoR8ntGHqeFk5oxgQzaENomtdgMwLCSRTv3w3qA1iZtvYxeG9UWwszATFDEtkys4vkpRcSK6Qx",
  "key26": "2S2KqpeYnypw6EUTyuPirycuibjkWYyGfPo5fW65KTUNCZJAyGbbGoRon3dtCLnV9H5TnkFXJsgvJpqhSpBiNWp4",
  "key27": "4B6U8zTDQBGU6AC2duyQuad17tekyFG2Y9hRy6DdMMBsJ2raCMVmfWXzLfeQVsrkPBj25UpQMKYjVh4rmB8YV7xs",
  "key28": "2nBbgUFatEwxexXzTwrB5Pm2it749SkmkmRjnEagv6mnUG7TwNrYRHmhD12dkVKNMznJqVdQWYJvfZsKS7oJgEw2",
  "key29": "2syfRW2uMi8WbBcoq1JDUDwJXLkPfknUxQDNchgfQvzdrm9JP8XCNneV7CLvsGbKwJSSV58cgeyqeck29TJP5AYh",
  "key30": "34kPth9g7UmqjuNUze5x6MVHnDqjLNmGTUwoWZKtsCYA4RHtw5YWANocrHKzAvSUdBkxh2d9f13KaVumYvj53rdC",
  "key31": "4p153h1mmHFgEz9UMVivM3JghoBxMQqBdDvPtpGzj31CgJUaWqrozPuEpmxzd3sb7p2njjMtayVauR7ZeLKtdJh8",
  "key32": "3PyXBy6jKUojkRDWQ29QMPMgByy6FPtre1a9YkodhHXZqV4Y1nhPbKV5Yohez84XPpbffLacvuDauZ39jy1XR7UU",
  "key33": "2NeNUand9RYnYHzuaeBJu9raoxH9NhuiDycmyfziAkFrrxSX2LeTc7LbE9a9MKoha7waCjXHKQZqFbmqBhEU55vA",
  "key34": "2sf7oU4u2Gp4W13MKttoFe3JXs8swYuKqn4c8CFaDVwVinBoe57Pha3g5A3rLjEhB1cDy1WbckacgYiTa5whTHY2",
  "key35": "k7BHqDx3hR7VTJ4WpAgisf6y3kV4nDpofPoyW5bfFJq2LHfM4d9HAQok8Zq6GGTmiNsZxhX3YveeUUCL5aWFdsY",
  "key36": "4Y2vbaXeoBXiqQATpGFsuX6jK45PMyVEbAGuDV4KcjSvwGDWRJZ44m9FZL4j5e8mxMUXuWbBuSJ2bR4PByjuox66",
  "key37": "5u1HwduxntLYV1jAERyquQxLXZGNj9zY8CyjCAzzVuhfUDvirF7SxAtBLj7jTuN6xMmXtmqJyJzK1R79y8ZoB4Ec"
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
