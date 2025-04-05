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
    "43qqeEh4PHqckGEzCYiT9wKU7iAHEV7LWnr4dzdaBejoeJkJYANtt5t4QWPGxQVnD4qiBAVfZNfFhzJ4JdDrYukf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WvUZYqrx8A9zq4uCXzK7n9PCDrZ9AUL6GehceGgXpQTN8VXg814jFYmjRRNUor4rMKKRPDXKGfYpj1VxXuJgS3R",
  "key1": "2RmHifyVEyjNximpbkwbY9tdvco8FcgMw2x92D3dYs1WefmqgvLDxSKFWwgMYF1s6RZLRoc4FYPNEmxJS7uWkj4c",
  "key2": "5G8FqBoyA6xsRUHHgDYY5no5M3np4Zfi4P2eTrDgnJHNGmbCy5GYvnKV64NtkSJp8MADqStaWwX5UDf3fk7BiLPD",
  "key3": "31YThMyrjPi29NT7tcdFLdW8w6AnxPmTMSkqr2MZwWnGTZ5pJ4jY1sihPjgfdMrs1yhujEaR2GmKQW8AtiDLQ13z",
  "key4": "5MaT7PRJgSZqGjcEwQ2x82XuQp6sKGVu6X5kTjtVuuCzEfmHCGF9qdfkbLGHXAGFYvEwmDFVPce9BDTKXW7LLbpp",
  "key5": "3XitTU6Kt7vXAjimpr7vrM1ibJt6cyrpoL4w93nWeW3p4oaWjETs3Pq9pPBKLit8w7YXbdjs9h4gYuy7cobWm27d",
  "key6": "qr7EcAJeCAoBkG5UQn6x5Q458sT3kKw7UnQfgYryAqKALX5gSbWgwJHB1AndLCKbghgciMxUe6fGPCAVHe6NJZT",
  "key7": "5Z5FhSRThii68oFBRSRc6nsaJTN8ompjUiTCSyKZBH8ahPgDKBEPWiBQrPKnLxdoSEcks2jebsHTidpcLXBKLvDk",
  "key8": "3fCVJUPyK2xSzqLjC6d1Q9Cq4iobDCwKHjUg8pgf8NJ1q4ttw5pE3TtaG2RpmcR21NoCxoGDP9ESesnQvF6XEnob",
  "key9": "3rYA2RsZ7X37LWQwGvMeEjD2LBn5eCHHXomge9dHfdVwne5Z81iZPrEg3oPzVSThNPZutqngW9jXhDApevcAAQo4",
  "key10": "3R9LQuFi2qca79PJ9i4fVVEdN3Wtt5beFZZjDg2hpqLXshYgi3fYFKw7gbH24KUtZSRM5N7Nnn4KrXdWMxPooFr9",
  "key11": "3vvEvxPhQDoMpRmsjfpZ4T8b3RNwQNvmsvxXtWg3PX9o1gRJ7uLRXfumySr2NvUq4R4aS3mNi3xgpsKCiRrFKJ7p",
  "key12": "4q61z9burEd3ZHEAsgYaGfSr1QAcHGmHtBY6TAVTga5XeLzkMyFGVCVRXhcwduf8EjAt8EeCZPoxWsAgNuoLeAQJ",
  "key13": "5S8RGg4S3zqPr4UdNoNWLw5mGLtQrYieuoCXBwS2FVwSQ4CXBG3nrRXmtT6QaRf4eVAQWm68qU3Fr9ZLtnNUsDYq",
  "key14": "2ffaCWBXVZYoEB2mt1Textw8hpC4kkfMwAU1C2NKYKDavrtsDM4J15kCiSUa65wPAMp8GavQYzmq6VdqTbAWTpB2",
  "key15": "3Mve3iTZ9SFeeP9vT8S2tALEv7GfrSndYXvbqAb3empeEaWuNBRc9ypPH8KYni9RX1bcC8bbwQ5CifAfHoEXqB5R",
  "key16": "3KfkgPnktsdobD28cqvyHpMbXbGmhUUxWeg1phRMjQHVcVeLLExt7YbprDDrBUKJZjcuVTC88JWRBiuUvV3cNrZJ",
  "key17": "2MviqJiJoZZuNKQmhft38Q2fj3usxuT369JdEM4kCpWX2snJ3ziMuYXyA3mKNjx6fznZMD4MGjCzLaqRDFq5hrGx",
  "key18": "4un7ZMdiBK2rUvttuXALx7EWLH5Dv6Wj7uUXQhatFTFyPVjbFfREWZjGnfavU9pSMXJnWyLcbCRWXM6mYKLADpv8",
  "key19": "5ov6hvPiDTC8Kmuq21SPNe3deeLEpPpSzJkCTqJjpMjuydXZAZEJaRBxWYGTZ4HRGrQX2D4rAvSpUJbw4EtaCwXd",
  "key20": "4tUhdAKtSrZZ81xrYkfRfYNwhBQmXvTu17BBrZp3FiSUfPw823WYiCnzGMmmru6McNND781oZdNmbZMiwLtSWpr6",
  "key21": "2rH4N6nkEnc5PjXbtuMtGcD7ayj2znrWzhZ4JBwHMaDT4Ly34xaXpAPjBYvBVfeZe8LaNtpn7giPBShhJ9UUZHFL",
  "key22": "2EXtCf144s2AxinrtNY4nTXzQtAiSBoBTcLLXov7gQ3Ty5QUB7HzBKNm7euAxnEhUU5DueGsDT8edcrrgERhDa89",
  "key23": "5FGU5iXaHYVMMskw65xADAzjT24DJzHHhdbvRAX8GP8tWW947rXgwq1BHEa9fJouRpTZ8MdD3uXDrK1eFB9iQPho",
  "key24": "3dNgJGgt9r7V9g9uqcuGzuLCQFDcA1muXcggniFzLKCrQvSiUvpWqUxzXSMyJXiHhEaeyQu75GYvNJZmt4vMPhJ8",
  "key25": "J2WBEZmjERV82nsxUN2UvF3xyfwgyrJhbYQaCLg8RBz2hZjWsS2zs2w2744Uygzp94kYGkmVzs4yrPzkdk7izC8",
  "key26": "BfQEXxppMjDq8F6NCj8PCAsAmU2eYjqoB8B51u6ihFMfN7va3SyJtvFicfyYcrrzwr8GjMcxuVCnn1BuAmEEyK9",
  "key27": "2VWebs5QFG2Fx5s1Lid2QE5DEwDXscscrCsKGWXSBKTrgd5MMG5vvZHJmihhSeZ3jzopiJJGScTVssmuzBB9y4Yt",
  "key28": "5ffm2FwJ3n3uZ5Ry1mvtswPgPAdNziGGLRpy6Aw3cBixoCAQHjTm2AiqgUYK8gPLf3U6krmnFZ2ivVMH3UDBTUHa",
  "key29": "7AcbsuAMC4Hp9tKGxhFbonBvtTUvHW738LPAWfhpPZjfUnhumvrwgqW8LtoYvhTpZ491QmM8e4oPz5Tw81ah5pG",
  "key30": "4yvhdM1RTY1EJuK8xRczAKuUeD7X5hdJ91ZDbABZAvhBtyq9SFoGaozD4wCam1Dghc3kb7tfHP3QTGEJrzXVj5uz",
  "key31": "4NwKPMx79tCuB1VjfoqRoMhs5GMhrE5bxbGTZa3eCxNzG3CuzrtT1RMGpshaEdDPgmD1BhWtcX5wXW4Nt7vrLqL",
  "key32": "4XfpvpDPzgTczRRxwjensJv12nPfSUAX4H9xkZ7x6LvCxErVw7tZQKnUMqRGpDPf2spCsDLDmPYAc19vTcFzprSa",
  "key33": "5G4zuTT1LDpQ1bHQPfSqYUmV2yEGrHgRhLHKbxLCYNSWgS48t13nkE7vCgfH8RV4eWnEHQTKHHfMvBRw9TaZ3R6D",
  "key34": "2Zm1wvdNidw3GjgYZUxtbj2xMueZtbxqj99mN2S8jcjPxmXKjbHEWdLF7Riv8xjtz79Y9wZSM7mG4fFRScBJL5GY",
  "key35": "746hdnpHHQBWQD23PjQe789ixC3sCxWA2C4j2BM5S5qLayQMxEpCKyuLnRF2d9oX6iEbC97pvibfyFiKzqDNc4N",
  "key36": "Mfq2fmosCw9RtFdT7rtsj19dUyoi2umRFWdnWGExF9zboiVDUmtdjq3vjvniCJcKw3ac63zuNTwnRiLcZjcu639",
  "key37": "4Pgzh3VhtqQ3XMBatL4EuXG3MJJdSHpXzdZ9XiYGxXUfLrzPY39dN16XVm2mNuJkLFCoBgu2pW16VDh39GX4NgnH",
  "key38": "3ME3bHGhoMzdagMGjQFny1ZsSpKCBZqmRfzAcT1Vkm6T9CS3wdaAtFKjNJFxuYi366WCAV1r2fDrUUrP64AocYbP",
  "key39": "5RcbUYHWSrAq4C7WRbeU21htUGLL8qdi1rUTLfXqsoby8ihfZRuaokyV3gxBfK6FPQZ7B4bHkQEgSuh1SRKeAZcD"
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
