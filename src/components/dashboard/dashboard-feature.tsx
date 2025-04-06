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
    "3g73sFyaNx9sioUzBkZwpFK6sdcx2tt9SfAtKEAGWL2UnkeTjEbBooxGiuZf38dciXqhLhS74rEpZuj5miLaCyVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enuUJCnzW5VrHDTuftynCsWepJ3DvsAAL4ocCEwQG8sB9zjMGdpb9s4JubG9wszt3fuxV62BsM7bDHBTmEYhPGp",
  "key1": "2qVzqMt5JBU6bWeDpKNVMZG9WfcK6Cwawxf82MyNb9YsEvhquATaRnGXbuiYThfKbDtZoTa6AQsQwRXDWbf4jVXV",
  "key2": "iiB5FpW8FhYNVGDktHEn7PMRxNxi53ABDoSCnb9QQi6JMEArQfLnsejrq9p1weyajibaQgnUJUmbsHEiGyvznZi",
  "key3": "3zv4VyMyCrRx5Jw6Sk5zfgHh1YHihVonzkuH34QiSNPkoFaQPe2kmpeErKd1iE2iFqSZuYtUrRDiEVwKBKZrxQWp",
  "key4": "6JCsKgfPPHvkvjtzDrEdVtvyKoqCi1HjpsyAA15FgQA4FzBDHv6uzp85Mzts6QppU9L8b8VY9NP4Mjr4F2GgKvX",
  "key5": "52dUkGdrqnm6BP1qwzyXLzrHPfmWAcSq3wu7YqEH5qtQPZZXg1T5Keq85X3br8vKCPxrft1YKL8bYoNpBjNZxL5X",
  "key6": "nHYbiUHYc6YMeBr2mvMzyib6vwCh84RnTZDJpgvByffUCdsAwm8F4NXburMayyhRpzK3uC4MtdVysqEj9dr4t9i",
  "key7": "2YTessLkazSbz2DR6duFzxSXU6J1bnaBsh85Msmy8obUbwuKv1JrxTTSKQkX1pY7amemmek1BQJtGUgtWtDf5uWp",
  "key8": "5tTyezPHaitZwRLUih1bG3roYtoQjKc81hQZQySAuSfFHG6dqHVom5mRmV9LtSvohrc62yJqxxhPh53UFo8RnMHk",
  "key9": "jWeWnWHcrTcxDL5BLy9zBctU6SLi2tDwRkiF3Y535fTbhXrYuRuQCRNjP1eqP5VGPvg9Lf7CvsgrotMUkQb8Nh3",
  "key10": "39Y7w6K58LfPwLeiQuHCZojN25c1P4kmxgzZB36cko9KgnWSkk5xQFBg4pivfw79kmRAQKySUGBHzDFPkAoh82wJ",
  "key11": "VwabdC3vwttdad89iKNy71Ks6xwjnb8GKXhAmSKoMywy66CDqupYYwCHxFPvZuLqW2gzH6uGRrM2RcuNM8Hn6f8",
  "key12": "4i6D4DPfjmGK9ptQ8LSV2LvbW8oj6Pqae6L5aKY3aAZEDSymrr84gpbG4tra5g1UvPEisRezryRNUAhA448NSJqh",
  "key13": "5U6PVdVtB67Gh79Bit6aqd8YhcDCbt2BJzkQak7EBejTUGtHR3HnCxsrs4LE635tVJG16tUHiJUrt8McRGDkBHvr",
  "key14": "4Sr7rSJh2RdcZZhemUSNijPNobWWjc3JYFfjJp4uzd1AmBL8yWDVZLRUFRs2WEg6dNvFtSgEgDr9vqCMzrLnmE9E",
  "key15": "gtoXNnXYusuzHGKNhEk9TQM33kAqd8FDgY1iLYHjXaSLwxQc361WestxRSoq9N422TGSJLaFEkkfN1YHkmRFTdh",
  "key16": "5csdgRbSV1X9Y9BuScpUwztftr2mbzsDdQLX28f8SbaNPh6Uter7gFjoqUaJvhbt7k52m5LqPxPxj5E194G7cvWC",
  "key17": "5uW4DVQn7q8Byk2GRdafs2uoQk65qoYHQUEgfxZjx65pzHX6RNDYenHnvbq2sXgpjRFpnoJ7noXUhcm7nkmfEde9",
  "key18": "4iY9ESScCMRV2274GbeddFsgcR38Z1ePwnz2yoXEj8zH3AgYVAzTWhr3EnUsVtwdJgZ9HDw6R1qjQLZJu4iuQrJN",
  "key19": "2avgTA48kuRYQyb6GnvV8sQ8fAHDdDqm4Bu7vJjrTH1jhQk4NUXSKkHY8YawLyYNrezhTzXPfdsV6bKGmMQd2diA",
  "key20": "2UVF9jpiavsxmGvjk66SUQmR4dFkBm7kSEND989cf3YuTgx3uSNbQ3cuwz8u1BPhvc7kCN21e4HXzd1yp7R7oB6",
  "key21": "34QuuY8pF6cW71aB1f8wE3N1REw1sLPE2E2vAvyXqJPkGwt4qiv5Lru48nGnsmafAYtYDd5uW33wc1FCJyXJAMXH",
  "key22": "4fvNDjEGo9gi7tHqdyWEn3vkPuvVHCP4C66JN6YcqVhqza7DE9tihspvqLPptLwfTx7CSB6PgtMkgQ1t91v4Ry6V",
  "key23": "3gD5XBkCGuVmNgMieahAqAmTdx617mQnuVasgYrLVXqMYSqbpY3mu6WdZApJHzfmzsPZobAGAPMPAaiwxtLSix4N",
  "key24": "5FLaQ3uL8zAzsAJLN7u2H7rAVPf6MDwv4CxLzcDAML78oreAqt78h9Ewzn7WMf2yBbnjbav3QSVxPTXB6ZtuDeTM",
  "key25": "2U6zftSrZiMcwaafTTVoyTRaYABpmaKUxjkc7Ka3ob8ErRFLGqMY1Nfq2kjLsuKdkXMPhi5hFWmm95NDDerCBnZc",
  "key26": "5L6mL6fUZMnsuAuv1CKgiWiGYJmaB8eaRoBJhNk271n9QiPiqa7JMJgy2hZrn9AWmyn3AhFG3cWR5oEcWJ4bJs6M",
  "key27": "2745n6P3rbJPQfJLZ36ULTa8uxVYXtrPLTNiBGENuuHp675GZuSQS5QGwDSQQeziD2HEso4QTXsckqaFr9tkugfB",
  "key28": "2G2VWbGkfMiWtZTLBrwEe8sR7vgPFPhqpAZE6AaMJe23FDK42f7qfJybHQiJwG6Gk8jDaC8Zf4GicZBgBL7F7tsU",
  "key29": "3FwomDVZrQPDuD5FdWM2CVT8M4SVEbSeT4KUkfZMKRrazv9VFUGH4DJhDbzkKMR3vz2DwHMyHFPoj5ZpAFTCDrum",
  "key30": "4D1acoR4LW7JGi9Wo3p8PzhkFiY4NdSpjh1Q5jvwzTPhv8nTY9Q2m5cwgtaJRw6xecu1apRe6MKsuhMa2CbXXpbD",
  "key31": "2CpJtC3rQxdrgybE8CkUvSPMkNMX6AmW6AVWLrxM9AhWHtbBDAVDP6xnR1UWUvFCjXDSQ2p65thDg6HjhsfcPuNn",
  "key32": "4AKUiyC81xvYw7Y8AfD46kA3unHyP8QkUJE4i2ckJAbtNTkZzdSwLNzwd57kZXnWY8D2eXxHa5BR11MPgx9e4Tvg",
  "key33": "66bvNv6C5Nx1Joop3XgRMYvFnA1W9og17GYbrKw9JVizwqotUUdkwsPyJAq3G5PGtch5GtX38S4jRkWXhZziZaie",
  "key34": "3zuHWJHun83B48uUVpmzE5JxtKrpKjWhSE5Bc7i4YtN6Rw6CJj4qNahNwvqVkVugV7snxzTcUbmNK2iRBuUsWDEt",
  "key35": "45rmKatWkkRXJ77bKoHmhAHbCnBshpMBgsj8BmLA4qFFLxiPaSjSrAEakdV27BuvCADPKpmeLZDerBai7ng4SsXo",
  "key36": "5nmq8VZydLZPApJVsQcRVP9kMFsazZQK11S5PxeFyg94mLiLNw3Bqz5nXuGMYAS2tMtNhEbn5W93XtMm93iHmxgE",
  "key37": "258Zautshw2vyMZ9H8syLgy3xgS7JFvXAsuNp3viFgrGx9hVnQZkqqQUacvZpLeHFdnqWygvA1HxASujGostsatY",
  "key38": "vdTZTdwggX97dmwgF8yL1tUw939Nxe7zk1z5QfiinT4HJ8KpvxTzug4eYVKaSxBDaFbUEUxAKwAh72KtNZD7i13",
  "key39": "2sRRM1AXncR6WkGQRjJkGCgeREz9JfLFUMX2tBeTmHdUazbEbYhiJ8MXusyGpHqQrRb5ogrSyzUh3FPGXkH4sLDY",
  "key40": "4hVntTw28xWKVzEe8RF46FBsseYqcYiW3NxQ7zKVPzpqyaGS52HAjZdaL3BEbiqasRZYUM3anxUYGU36zWEAJgqh",
  "key41": "2x9yK1EKrXr9iEJ9YusEzUiLXe4BcMPdSv8iSx7QcFaK4vJJUoZ28iZVfYqZrdL9Et4CFBcwYAn6UjaE7SrMip6N",
  "key42": "51hTBnkHnhim54SUQLoeooNLQiwW2XxjQy63Ta9cmn2xugWdGNErsB89NNL3K6kgW8gkotASvMx2P66LDDYn1kK7",
  "key43": "5aK3tcVRrugQuw2dB6Wqju8W5S1JGc2KTeF6jbbHYLbQsR8mQvG2JmQ2GBuwkPN7LCghhtVCFVEiXhZAbeH15NSa",
  "key44": "yNRQc2TeyTvmxdsA4caw2SKPdzTkrb1GzTGkPE9bDRgi6QZ6Xh1kUKPdnXa6Cj7at9CBJP7sn92egj3JHmBE4hy",
  "key45": "5E1M7sTorA1GRmrDEx8VYiU71o4pQ3FCaSeGLzaxqdLXwpEaSQQ43e9q2LCuqWxAYUpkd49SBY2hxNrYHScChgre",
  "key46": "3P46nXgjaN4HrCZRg7rFcbLWFWzqWQRp1sWaxK8zKUDRbYmJVyi8pQnQn9yTSyJ4ThM8eUe1qqaa4p1kcsLn49Su",
  "key47": "2FNokWBZTawc2ZMkSQTKxM7LKnqWBGSZcpt76H8faDLZcb6tPkW6uiupyvwkUPorD8eHiSjcM1Zyqj8pnZr2WAxq",
  "key48": "4xsywhrPkfKnScDbtAUcZdmHSwYtz2hWactQdB651e7BWvYrJj8uLkQmkCNUYfe3p7RwDsCC1BZjs9mX8p13mxRn"
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
