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
    "3QXRUYsHAcXXHzqdauG9ppZV5c6NhneFRpUYYYWde4PZWzeDc3JSBu8Zk9oRPBCX5mvZdytFRy7Lu6oWghse9heE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxbqhacx3jsWigdEJNgeR8LZzUTSErgRyaaRktb9BgeQpjP3JZNdUQG8EkW2LTAtdqqSxgukFvRFv1buNJ8addc",
  "key1": "5ZsafU1rgtAtqstw67MHc2bNogeWd5mu8gLUtj4kxg6KZhqsgWgXpsDCiW3aA4bDS5mjAfW1ggBZowhDYf7dasdc",
  "key2": "63QrjFM4QsrpXg9wbPtf4kvkYrsm5hz15nj6J8z5pJwg3iH5dg5qDEfZ9GNXbKqZrqs4xensBsCGsqSymPAo8KvU",
  "key3": "3DwscSCTyjcQyRcxhQi9GhEytdgFn8NYmYMmkt5kCNH75zb6WB1GbXT9vn6CvUWssaqjiNy2w2e3gc5ps82WWj8G",
  "key4": "39Hieztm5fw9LW6zPCnSqFZ9NMYDGCUokQwtaGC18KzgNVdRKm7duhj4JTkrEKB5HsGRejjVU8GTCdc3a4N4sno9",
  "key5": "4UbTKsduMFf8LUkYqdA3JpoxJZuUVQdcDKyDsKrRGd4UJzxfy4n1C3EKAbC2KhggYuLBspH1aG9V4hT93bHnujqY",
  "key6": "4bR36bDMxVrgRNxTcKKZBfLzWUCQGgrHWHr4CeZ63xwg26kvwWA3huv4cNjKigFNEGgnPznWDwcjqPPazdYKvgbW",
  "key7": "46NhSfGW1nbMnTFzx1EQC3d5V4DMfGde5jk5jW6kDQngSTjCuyUftqczr4LWaRKKRwPKBefgfjHSmJGAgFpCPcwy",
  "key8": "5e4vSN6epJZ7KEaMy3FNzExdu6XAHphdhuQpqHoQz7GZA7aW7oNZsoLt27YR9CVf3f7Po9kHH5sJo6nc1tkjYE4G",
  "key9": "3GkUdw1oBsWhXRaMduB24MpxAA7KUhQXe1gXh1dBudNTxojrZJhu6UZxUSn3aBF4pAviU4NVeud4FcGyjwbXUjyd",
  "key10": "2iEGTVYVdzStWyyE4BvMSisftvFj3dUxaeXwJtiqMEAKLYn5j3i7oeHPikKN7Ju6ksBCkzjZA8pqzSVDKsju74dF",
  "key11": "2rH6TVKELEko2eQ8eCebCbRZpV6Gq7xiuVocNtTzYCvM2WfGQLZ3rbwGXm39a3wD6DAiyGkX7iNpiVGUL4GGfza7",
  "key12": "rDeDNQB3ngQmxJLKNJ5RHJHhcPdbZUthD2nZ8ozsB5rFQRQ1bjf7ajfoKYFiGeR43S8tshnt74fRcoiEUxsU9Ds",
  "key13": "5XoiiZKM9iAau7YL7sdiFRwN7F1eMjKz4AW7HGrzvV1WnTfBGstDsaP4LKZZ5aFZzc7n6FwmaXMPmy5RnzryuxM6",
  "key14": "Q5c4uMT2uw5sbFwUCLPUjqDcG7PzZfPL9g2FkJpY8L6n284k2U3ncJkxmndU3ddB7pQr1LBHDseeJEFFpwxCkDw",
  "key15": "j9vNQvtz6HW6Mvgzhx8SSdwPsHvb94RjdoFKU73v6cjErZ7y7K24XT5oxUbHhc7w9bUhFT65Nw1PddynJQC5zKE",
  "key16": "4tNEgMWQnibET5SyJCCcCLcua5frYzqaDbNqYvYCx3n5Zdt22La6sEaLZMavYx6CUN2RNXpZUkEEgvXK4DygjPs",
  "key17": "3B7eqnyCYKF3HZeHiVDRqWS4Xoq48sThf5Q5VSvUbyqhmfCY8gPTHfrbPF6z9YrYpSCVupJE61gifdAwf1oqEdM1",
  "key18": "3QBmjP977UQ7DTKnui7kdanXQJLd36QMWAztMQCF4hQhd5Dg5a7mmopFT4YTfasn5h3RKhBWrGVRZRmyqV8stCZX",
  "key19": "3wF9d1n6k5KnFZ68UubhYF3ZCmhcRWxufLHMJWneJfKp9zM3t7ZTUnWL3ArLZ2jzTqtVoW4cZK3rYd2NjUpifNiZ",
  "key20": "341EBSt4WnGLhiDSuy638U63ZPvrwfpNuADrw7HQvRFNwdrGcRZjFCxHDZAJyymRTaRtVMYbFbyfnPSNDEvZ1UHj",
  "key21": "2fYwJZyvNSvtf74MDVVwJBWjTAG91d9Bs8NkXbbmzW8nhH422poiixPmKtv9Fc7LPyEoza4xNm9cUfTCY5raJGup",
  "key22": "4L3bYmYUKqdKdz7SiURPNvZ1hZyYfeNXrUwnePAFWeeVrQxwfPM3hxkp2X2hHzm9upFDadSUiNxfVfWp9fW4KYuR",
  "key23": "sMdmqsRunC3u1uuJxUeiuyenfAJbwydwYSXejdqdgDqcpukF7ELjuBhnzH7iJmu4CwVKTxHtJVFRwzs52KanzVx",
  "key24": "gG8nY7fKFBu9J6fD6cusk4GwMzYNZLxL6PEEDCTyFr3tPREJNc1kjP4r91V2tMYMkDgQBMw9aTy5gwxC1oJEBR4",
  "key25": "5AzZVAisLz3QNMDajjCoSv7dCMWYc2xFUimrPJDbTZDi3VW7ZvNCKndxapp9ECTpSV79o7u59af3YEx2s7vmeCsi",
  "key26": "5rYfstUPCoKFTtwJDB6khwM8iMkjoQvZCjTJ2n4pnzUsW96wd2j8EMYBpgWhrADUPjTxp2Ly6UHkY1N6JHJat9G7",
  "key27": "2TwR37p7s65ugYukZMjpkxPcic7weg8feMkctWjSLrc28LSMyv4ZnjmfYwjQTXCvZj7jvEFhVV7fgGKtd7HtcTvZ",
  "key28": "4Q7h1xjzsmKy7JmLb1XKvcPGPr5VfTd5ACzaJ5MWFpX1e8ZVjZsptzM9nKpE8WejbJPyyhTEHR62AQKphCUVCAdq",
  "key29": "4jn2Q8syvbb2wp76cWKi6DLR75JFhXjcU5a7Nw2fiCtELo9prdvfbHuscfVCEkMZoMhZooPZ9FH9cbkGL1UzDW4m",
  "key30": "5PuNCQjRNzZkkUYyACmG6Qo2QbGk5gvfe9H4kJUkUmErTqVYhJpyBaXtk3ucQfkSNwBbGkAya4PX1eQWrAVQLZSF",
  "key31": "2yGeUrmoVru5uvCTAcCtEM7pckhfSPTFEcjqct9KTs5Lfg7TKRz6sYWrDLJ385N2bRFsSqXNd1i3GZQgZFBcQrvm",
  "key32": "24cyBhs38eFFZ4uNioxbQkCccigMszA6FSCxKoojyCxisMMTEx4x4eGcVAVQQufzv9dwK4hHHvdFN8L4ofjFaCMW",
  "key33": "28nLr3LPVkapkc2m8yK7mZn2t7AbfiaSjYt76VdTAD6uifvedc7S7rJDR5SeM34wtt6QgcWvuYb6cjgTPGvctLer",
  "key34": "2VDaMH398VoMQjHzm6C6E5J9J8MC2sUp7XRvnZqWwbdm4DLcq7D1DFv3TCwBpKVAa7VnDckF5W7i8j5LAn1jGyGn",
  "key35": "39wdpFaEq5FvxVskNzQrV76VoRAun37XH3VjXqNuRPUFcHyiMr8vaxtB2Qz7PgaAZUTT3p7tdh3b3mTtUUFAqFMB",
  "key36": "5R7hgh2AdtKrzT6NqDKMTyjHS9fBTTecn8nVyrVTH88DUqGdLouKeGhfYn1j2D1VT1Gamj4iweK3XUpHzXi6CM7b",
  "key37": "2ehjBbMNGhmWw4BPzTKRkaKvaVBwUXfgDCGjwL5aUxym57sUW3ajSjUAUittXqqxGFr6xeZzFYQjkJv4qsxCVwhs",
  "key38": "bjft8ycPxDtGrSsbbmVK5TaABbjbRd4RkC7MFwaGE5dvBUxoEoJRNayfZRbeBBTvgnGhDmeueSVXBJrGrpcCMiW",
  "key39": "pyn2G9kXvcLWaQqyHQ7rp42LxWWBUvhBuRJhfAHb9KQMgtu41XbBPJ83om5CouQaVwyJJuyjKWByAB9kivKQAwF",
  "key40": "2ET4DKEBhMqsNXuyuXQhNqUWmzVJdvJ5mb5VurP5p6yci21bedCXAiUk89s5b3TYbhX8Z8yuoHsqScYXpt9LqWpp",
  "key41": "Y2rTk8CGqHPqoLqwf8Y992gbTHtP5qp2HNHmjWVWaoCnnCMYssAhuCYnbagBtL645GDcT53FVkKRK4H25eE6xE2",
  "key42": "5Q71bW3f9caAtg6hKFBpgPH8kcBNcDbBXzmLznagHg4mP9D6mTnwwMZAJhZSVwTrRzPLgRYg3Yf8KgAmjrKXgbRj",
  "key43": "39pPTPHp9XijrJJM3vKSxvzZEJp3yMycdYbCFXY2bcTCyTH6Nnf9TQwRmZpiYyg3tEEMkuWaRGMvx4KHctMBQcaG",
  "key44": "36DrKLZnWL4xcPNVYq127ocqTdubos1xNUtcUHHC7FBaQh9dN8WUaFvGoMwLsbW973XRpCoVVoFzU4MRXbCEfCbH"
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
