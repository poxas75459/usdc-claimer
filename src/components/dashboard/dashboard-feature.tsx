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
    "3Pu4dYCegjpzv9nLeDeysoWWa6ia2dvjpCwCKdvKhW3BgZadNnCifvReWMy8yorcvmfqarcG4SrvPyn7p8d9Vkak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQKL55s78QpCpCBKoD1S8NiPLGUyDfsSxCUSKG8a5trxPFNrM382tTeWosTyCyyPkKCrY6wJwFCiweB73X8C7sg",
  "key1": "4LS8APsxvthEgTAX5ELmrK5GpjN7AbqxBMsSsYZofp4XmibSUFXjNb67JdMWk7sWcTjctFZ7CX3AV7EKiZt7hXXS",
  "key2": "34adQMN5G8KGwQ3WaSzvSxzGsoJTNi4gTr9BjcLq3ddAXcbHCYTxodi6Pn4k8xwDgzciK8sJEFJwE97XQKDXr5Ve",
  "key3": "26tQLfx2FRvuFYAVWg8Bk7fNBTn8FWaUN8SNz7XSNYRqvBYkaym79K5aJWqxH54UMZUBmJW6t7PcPjeghRdGHRNS",
  "key4": "5F6ZqFodSsQaRxWohsZMXKfB2gpnvkbeFZTXPocqjhfpF5iTZk3SZCtarbjVDXtaTnpfjCSp5efdMq3KaWFqf69J",
  "key5": "abY2N4cUQTkW4wRFec8fDGufSpZCcVAwS1DrzfeDkgtZaBvVhVK43s3y5f7inDBUsimupdmYZASa9bJ6y939ua1",
  "key6": "4yga1CYnujip5ZkWSUVZG3p1KrcwzSy1xQ7kLcqKCgYziuVwWdL8nhVG7x1p5maBfniG2esC9NokNkLar78sGXwH",
  "key7": "4vzwdProX5kgcaoHiY5YXG8pxTiD9jaGGJv4hGmVoYB2Vybc4B36zxRhPLy2kh7vpFozpXWBd9f6DTH2tRgW3cd5",
  "key8": "4DBruwMKKrdZ8nXXKvvrkFMVRM7xEuAFSudnPc5Gq4LDbziM4knsUjTqXSKySjZ6Lmn3ayr1oVyGnto3xS2h8nLR",
  "key9": "dvDn1cKyPznt73kuw8wG5M7Kng21LZJ5YuCcmorwecwC5P2VYXcA22AXVQ3xbWQxaTYqmSRtY3iKQzPkkAdx34Y",
  "key10": "39Pa9FfpALSbWQEe6sFnYG5j3XUdS957xZsdPWzZwMpbuPXBho9KFJ4gFaph4wDk9WADS1jchPzMDnCU2mxHc3Lt",
  "key11": "5CAyXoSoW3rvfpinzFWR61xyxrNiRvpLwAQvUtJLbHV2ESCs5Kg5wt1wPwieNJSrezN84zSGiDxoZxESpKyS7FBp",
  "key12": "2jK3ZgUmqMKYGnwFUaRSbGaCeZVbwLcYEUSK5sUWyKdrfScULDJ6nWJFdbTcfZoUzCMGsgkUB8Xy93FA3mrNyd6C",
  "key13": "4EZrX7Zp5GGgTVgZZgP9LZXYBQviXmhaCVWXuMUwzkrCZ3mvkGzXD3Kis7h5LJLMt8n6CqqmWq4x8pYP8Um1wR7R",
  "key14": "2pf9HA5uyBvQFRfWjkQd5AhAZhhYhNed5EiYDNqExP71VA2BiaJFR3sExcheWGsWrzdrbyX9hBnK6ZLqXGWpfGdv",
  "key15": "4zfA8V8tX7ncL46PMjwGCZ1U8DbUMKXkiKHjTqnScCQCjc18xGN6QrXdVeoc45ytyZQ7zMUiEKwfjBTpA7k8MMBe",
  "key16": "2DpfSbxE2Zcgarmbo2WZPuPp6N6uiZe9Y35tBmRSqUmzFcwJe4Hx1q8Ttja3tswd4QFNp6TkKBec2guBVihYxHm2",
  "key17": "4qweYTzhwycyCbe2tbqL4hmsc3D3kpH94VFT316EQ8v7y1xxjJXEjJBo2iCabsqSCWxtaJ7qkE16PLjFpey2nGgd",
  "key18": "47NdiiHayh2oue8QU8GK2SZrM549BGJFayUefHFUm878tvuzTnTHQNXFQ23pP5NvrZbUPBtGPSTyN3CHhs4ZRapo",
  "key19": "241bNCzP1TjksRujjteYtCE5KuzpQSTX44Didk4w5pATWE8374j95KkhTVyYdRY2MDjAhUV7t6G56yNeyUjPt6DT",
  "key20": "4JgLfU4HVMRjHs4GXv7pRhzEtSFUVjBhvyTpuS45JXjnKTMv1M4PL54ewFeRtffno1yptGfzGozcWVYh4fhPqXxp",
  "key21": "3hdLRMNx8Ho6gjw9NnUdbwMKJXMCwEZMGgzngsyHYVRqTX7NdgUP3gehpyNNAbD82GDkV6p7mowZWz2BHtnfxbfa",
  "key22": "51ByhxmKQ3ZSemZpWGxSme8yXum7BNtWk6N6SCkG5gPvs24CiXBU9WLtMBAVKDrEg4eiqUSWhYXTzzvdB3KTrp7d",
  "key23": "4uH99iQkvXXNMtfZyv7ae8joqEora8YcJ8mRri1FFTSAix1zKHXSxPgeAEqhMYKnLZFPwtAX8RZ32jeiTdQuYCro",
  "key24": "G27qPNRa5N6wmCQPMEskWhHNa7iUeAZfk5GTRj5dJb24hzqjUeNatmhEE2CGY6GJRDbvuyQnE6ug156Fm3Ai4GH",
  "key25": "4yUuhQVhAKgFMVD44pUnowms7iBmNy6GfTEUjBAcoYyP6LN5GSotxEtShkSSjr6mBWEnJ81PRo3EHzdpp5BgNQUA",
  "key26": "4mz7fw5z1vv57CgCeFXPEh3K1QGWMajaNBFEWgGAmekFvB6dLhNVXcYufj9cJyeD1ej9BgaQCZarFNcBYjP8RYUS",
  "key27": "4Uijv9YPaA1Spg9bV1ynwFaDRrVcq1p4EUmQT5wUTjkjdpLfadcMyr8D4ATFydWU5mEDr4aGze2ZoWM5viH8DZos",
  "key28": "2FTXb5SG6ZHSL4HPLro7dMfC7v6xEJsje6fw2pM8rc2QHpfRsYSqk8Y1ucy1oSYv43m7dSQe4GtYCEipk9KZYbyH",
  "key29": "4hi4hMupDcGHxERisTgZkWW5ifHtWxQN53fdJsAQr79Z1hriRXuTarUMfyeNayBqwmNo8Rd4bfNYonnMogdqtuSP",
  "key30": "4WeN2NCYu8HwMTSTSGmvoUL6GPcE3DVGzU8EDDi85nY4GDow1eKGZAh1ox1hcKM8SstLfKRVAN5zuhnU4dqWHAzw",
  "key31": "39HapUVpV8dktPocG5ZW4KNJZbYL3teaTAcSAGPJgjKiyKpZGuBu4JGm4Zr8889cisZdfB5oLHvCNGAYKTpKYzex",
  "key32": "KxcZHvftcxCzvGAdAipLZ9x99Lka56S1bP81ciMvUyvfMrzWnixVR99ZnLuXoGMcoDP78uvN25msJQMW4m1nVkp",
  "key33": "25tGoq7qqd3JVJ4QUE89xpDNchfqU76Pbgq7kbWctvkYkFL1VVKnqzMMM1zoZtB2sQwvDwe6APxwVzKc8kZXHYCB",
  "key34": "2yp7Tsay8Wv5UhujFoNbetSATUoDxheY1LSCxWNJ5tSAMqfyQr1Q45D7HAz73GGp3NMR6yCFHXgRsJ78J1Td2oHw",
  "key35": "313XaBKKwAjpbzo16nEoK7cKsJ8Gb9wBMZfDQ5AtMw9Fzoe779u4UYmAcV5bcVrui3Jz9ZX5iMVrmGTr82tHEBMx",
  "key36": "ettYcH4nKAxYMPZiht1wevTWN7MmARAT74mqt3jh2kskotSs1dhPSMkePtm14rMoEpaV8W7CHTho7ub83pDce2k",
  "key37": "3u14EzQtph7u7P1r9Mtn7JL7Kz9j21kp1X91CBVYGbAtLLiRdnDk4WXkWAJdjNk6EqXPQyFjw5QJpzaVsxUYDS2D"
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
