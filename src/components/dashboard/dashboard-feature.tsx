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
    "3cd174N9dUTcH7aGgN1qVRFCTrdfTsVaJ7vBdhNiGJwkUFRkF9nHfbLGh1n4KwttP3bAmS2VWYqoTsANcnnzfchU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EkuX72UXvfDrJM4uxLEP8Xnm35faJgfcvMRaeeZkTfU1gNctHVFrASST61K2ofTn7pUgFkcLuAAYA91vYbo3tkV",
  "key1": "5uxFF2q1YvGzJK8ee39KiEDqj96YRNiDxRavLVAKGTkC1tHs9x56AtjxeFmWDMmGRAQVkrEwEyM4hR7k7ZRqrmwY",
  "key2": "AGStcgg8gRbLU1cuf39SgzY9FT5G53FTyB4L85teUnfp4fk2PRS7pEkw3FmWjjcgC8yywMB6HzLQmvwjVW8Gyie",
  "key3": "JubANpcTEkqXv1v9pkRNNP14npYfRxRYhKxJeqkGAxR4CE2t7MJzks6CsCkxEnJFbcsM18bd4s3Yi3rtfs99Dkt",
  "key4": "2Nshqreg4ZRtbkHH5D54MLpjXy18eji6crmu1ZAnYbdqr1FRDPSjM5CZjXzbH1DWxHLSUbzc1ENkLTHKo6S1ZABZ",
  "key5": "37jACxQm9ubGkfiZqYR6BT7A6hW9husdTMLZbmyUVF5Z2HjXod1ypcG5JAsCzbM7ycxHrXcQBEJGWAgY3y4tjovs",
  "key6": "3mE2AF3uejBh32SNS8csKu3iE9sAh5rgfob4mMiPEAYEPAA76iHP5S6RTR3JQXp6oWQwRyv6GY9KJsrbZENy3wAX",
  "key7": "nZusib1KvQewZWQmKEjLLxvfNQWiFymtGYK6XiMrB1bpzgmFdquWTXMXYSMYfnZdHHWauzhvanRcgsk7d8W9ouq",
  "key8": "5C7VsKbxbqqMFxuguXtNbknbTKSJ9ubEemoeiWPoMhyhYZiLhzpXzg3o4Vr7g2XFJ5FveoubsAzU1eXG4V8t5Rq7",
  "key9": "3uYACFKVoCiaFcmcEMNs1iUKXd7equPMnwzybgzQe13R6Wn4hr2e1ERJeVB3nj3MWCxzYsYFxyJw6LHFdC1gNxWF",
  "key10": "31ryhQJR74RYJFPAwvMtbD3CqeGUXbZzRFAwAyaw72rPX7wWqEaua1RJNNnDX36NjsU9BJBFpm5BKf7GNt3ypzCg",
  "key11": "ragHaoDLzJZ2HAJbTQKMCZnpywk2CTpaGptrmuvcFsLULYxbg314gjD43E4KKjKSDzdPE143Pr4Vq2kbsFkMPqJ",
  "key12": "3wQzZkEd55wG57kmxtJeqFB8ecWEbCvu16BsfBJX4haVDyRU6w47cpuuHySnpe8bfGyZuqJnJ3kVbaauFTx2uWp2",
  "key13": "yvEKtziUz4yvNZxQZQ6SSuo7G9bCwQDzn19X9e9CBq124c5r1XMxHrggopPnW6oLXr3Y4HoWaF4HsmQRUSUY1sw",
  "key14": "P8MXD4HNx43iCVMGF66GWdo3ZRVvnLTFjH848geHH4imCnWDFaPmFXjYijqFEFYDFNtGBPUFuQADyRWASrevBfw",
  "key15": "5YMeFQo6xpoUnksjpE1xsT8TV2Wfu5fpU6UsMFuKg92FiSzMLxpixw7zqqZ31soJYAx7EN9tp5GEVkzRcjbPNj3r",
  "key16": "43fHrm6tr5DAHddgrUNDNBbqyE1L4w635m9SU96WmF9EQw2VnndjeZiPgny9Mcpew47UY8YBfRSX7P5H8ETMDzZX",
  "key17": "55jTMxnQAGapAAPZqcSDxf25zgVQooDTmvgtLvAHQFLPghkbWMR1sBnz9m6cEdwT485CV4CiwE4A4FccZddJiLsE",
  "key18": "4EVpW8LxPJ9zU7euKm5sb8JdDNrskQDABizmFKVSnsWDPV7PkcTV9hs1cR7y3sELQizGNWFye92XSM7ay4raNV6M",
  "key19": "4U8oDUK8QTG6BkbTpddLtFuPjmRWUu2uDPywDHwQq6zugSKDvjKUdu3KnEKDNkucAVo5Pjm6NRw22N7QWGErWHRc",
  "key20": "3sPnwxucRMN5h3nisBtQWiSG8f3BgQ1xpmYm7Nt6W5tHzHcSxqJCsxsvhTQMbwg481f7Fz6McdR7upbem7FdZKnY",
  "key21": "PXV1B3RpdSGufhRuWMawi1vyndp1haBnq4eCTkec4qcLHe8vJH71b1mYCsBdpKtrCmWQxF76HHKz6L4hQq3yYg8",
  "key22": "2yCg5eptZ4zLeaPaJsyYjpy6VzxvXng8FVA8ruxDD2bbuvhqZiuFqYK7K6aPg2jizsbj3bgh6aTipCtmsv8YbCXK",
  "key23": "3FGo7GRtDU7rxRf28rJoNZ8PG1u5usDu6BM6aifzPvWQ4k8c7oTJTEEjiB9bHNv7fcXUBDu3WhZ3YTmVriUN4PjD",
  "key24": "297kuQZ45DfJGfxaZzKbwVK7GgAnThw7Ayb9nzDVsALUaHUVTajs5jCGUPCpuRhN1MHY5RU9mQaTgWKZzddjAEWS",
  "key25": "42TMHzJ2xqnzJt4BGkEV9tzbYf6o1WbdxMZLJbXqoCeYp1srtiJhn4rvooNF8WjGuk4HtByGDpoceY5xXu4qgn4",
  "key26": "3EcekreXwCSCZpWkQsUJqWv3ACXGfo9vkkCSMxdwdgCWgWiCvEQZdUG8VPunmvCYS9SdLDw1otuqH88dJN7zJkJ9",
  "key27": "3otTJcxF9sd2CPPSvKL6iuZu5pmjWjJX8XkRHwQTQUPqtbCTmaMaKC7bqgvpWPX6gEQRU1FPYtpQBEMbiVvibFcU",
  "key28": "5VCcqa4QHeYYHi2X4SCNKHRc3d5rMR7QRmEF9gwPbYDhJ2zfc8dh4RiQETTvjep4LTXerT6W2wM3xuqHNKUFTJE1",
  "key29": "2Dkw7MTqs4LpdGVnmX3JntXxeLcwqWSXQZ5nYtDKMHw8QvH2bvb1drU1ciSiA13qwwwraHdCFYeKQs7vdUKtcNh",
  "key30": "4bBU2v7jrVfhg59wFtZXz4FYq96GL7JzFJqK4CtkGmEerh1RHYPFxD9Hh9ZxbXnfKDihihiWx86CRSi23EDrrBMD",
  "key31": "5EstoC7iB5HyJaagwpoyUhbSWDvQorcFZHrcepEYxzHjUnVTxayYBbHWEfQ8ck4Mfs7tZzLahQwrCDyKiRm9Pxdw",
  "key32": "2Az2vMpRmCYpehAXUv1JKrZ5v97otaviGsfwphJmVX6dpRyNiUpgWeAvoNrXxdhpKHKXxuTZfm1oNVRN6UhhR13C"
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
