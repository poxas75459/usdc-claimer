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
    "2fweMVi6ZT1F5uvznrEofxPnUG5LW9msrxfD64FAGiedrRmELH7yruNkUzrb8PgKwrs6oRDE7Qj43siXcptPymup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LEEYhyWwTU4GMZgtpru1bMdodzio2mygfN1ZDHF7XS43oTf4J33LBKvYxJQ1b9CB7vyvV4mV4zb4KXXDL1wnSmo",
  "key1": "2KuRfV8y5pc8KagoJWJNfitzP6CfXTkexEe5P1fv3mLLi9qPg14s23aXAkj5E5D2XYrQtgTmmacf3z2rpt3299Sz",
  "key2": "ooVN8jStx97pvzgoo33WwqAUqwrm7z83sGyBkQRZkpx7SSFf5vins9CMcUkkbzDWD9uYQNxCjRbS6uwXMpSnr3y",
  "key3": "3hMnHT4crbZbVz2sPvv2EPevTgPV26fyGh27Q1zVobaaTH8riLVoEShdq4tygs48svdbtuR4noUvwV5DenvfCbey",
  "key4": "3r8tPfepEPFkCNVSrMTEivNx2CNRVWWuXyBHAj15mNvFbrpPoQWb8Pq5hPpNt22A72HkbFu1YPF5aWZMKqK5Pi7s",
  "key5": "duJieBt2HyN87skCnUuxtQWFkxwyDL4Q2wvRqSnGhcAGQYx9gEL7Xjebgqzk7u2dYBzYFJQ3dM7uWHNd3MXhRcy",
  "key6": "2kEEuRVhYb1PAJFsX8CpTLL4Y2j6SCQuNPm23xjzi99Lf9vL6e7qdUVHGDEVj4LEBonSSbXUu8MjDyEZmsZeRTCM",
  "key7": "3mjpewuERfmPqSJT5BMfZ6iTYt2Ea7zToDym5WTKoXnwijSTW9dQpdqZnBDxzXusbXsSmqTFzHwPp7a7fsHHuMCm",
  "key8": "4ruLLuWtqxPqkWZ46XwkWznwbUZGJ52cmXxoTSS3YSdZRCbYNu8MHg99Nu2yVKPdga5XMqw7NdqEGauDyfDd96NL",
  "key9": "4wdSSt6LqzNLxjfZPJz7msuymGiF6BZznxk47DLQk8sbC4pmautXqLnn1gpRQkGzXAng1XhiVevdUGeSLLYaNdt8",
  "key10": "4873EsWWiT3GJAjRAhrPrwVm1HkxoT8AVcvfPVvB9ujyhUHeE7wnwrcXqVPP2CnDMZCtoVjdXsFAsb6wGuwHK7Zm",
  "key11": "3RRYgyPMNTpAkhAsk2G2SeBgpQPMuXZy6XnkqAt6kq9YeWjaqNu3azkPoEadEHfUkg43FPKCaNa6M8bwt19LdqxF",
  "key12": "489AxkjT8yXrtwxDf9SsEi7GeT3S5P6nbzKfUbeCCNtwWkCWNvpPpdh4id6B4GKGGGMci7zLLyXjRUP3SfPHkckx",
  "key13": "5gTD67MZCZu98n9Pxqpc8CcpZqJieu9dXLixL5zYmzk98rz8rfXuRTYKoZj8YVdpPG8xJ5i7sVeupAZJ2sFVo9nC",
  "key14": "31NWVznaHeGsax15CYHSo7QG7iuabTMvvZmZcUs69kJ5wLZ2sgJrrNsixtEYA4X7TctfwQhXBK1GrWAUPWvnu1hg",
  "key15": "42cYnkvvsVXaMnuYif2iqHMb7wUre6q5E6gDY1rxCikTo2mFJc6KJfgJyE91iv4r3nthxJk9mWZrem8hcxAVFTZP",
  "key16": "2S4CcVUApmLUsuspxuNKnCEvftdfwZgJYZbyMPc2T9vcSj4pvtzWiypWoCNtEup6ZUQxhEuUqdG8uDnm7g7w6Dmy",
  "key17": "4w3hugYnqMsBL2rzKCVQQfisnQEjL4cBo1FAkL3kdPfCdjzxzrRUrNvQBA8tzehDDFWxDKRTdkJBTzTQPHyY9ZHs",
  "key18": "5wMwCKgFXfzZy2hyYqcwQtMXV3i9h3y4t5aZH11jD1Vbb9LHD2FpF7GH3ww2kSeNiEpiXN1hNt9EQr3Jgqeh7p4t",
  "key19": "MNwSCNNTXfhG4nQNqLMfyWsc4gMdaHMqnQMfFzACHBQxccW4F5jo8efHoNEUzBBh6ZrCfzha5VCgpo2svFzMezS",
  "key20": "2gxtgdk9Ykyj6MxGiumyScR9yKcvTE5ja76u4o9KYuhg4qpoWdyGK8LuAV6fv9r5QdKj7wgEFkxg5B8gPd7qw8Wo",
  "key21": "52cNi9McN3RbVqzAee6nsuSthiYbm3TigfFsG9gdRnfCg9A1K1uhzVMbDxxkiabrbdbENfMdrXVGF18DGSGnqHrZ",
  "key22": "3F9JuHrBFus1EmuCANX8Y3c6HjXtD9FzHpjbCvZhas4ZRCXTWYtckt66XJfrzDW6tULXnUVGwHouDiQg85y7AL6g",
  "key23": "2TQjHH1TWys8ifmimodoVxbuCDR3L6oCL7vTjqks8NV11yKz6rjyccA1xg6WHCGjXgkZST6oNWmRn24VcZm5yY1p",
  "key24": "3Qj1P58EUrm7PYMB1ssydnAtHnhcCCdvYCcnz9vSM6KDkSad2vWWJf5Hw2kiU5GMaVuJ5Lqx5Ht7fMdw4YHzG6Wo",
  "key25": "5UuZfXq2eHAojJDAbFcFgoUjjWjzABVPFCFUqwMn6M5skWNbskHXLnsW23wAKeULhSQC6DuBw8zUk7HGAwJtT9c8",
  "key26": "EtjCxJ4KjUoYRgusL8iPB8xVem9nSctwCqtsWU27s1CGKANGNbJkD8cMw87869xFUbNSGuMDmv4avKhumkPhMXv",
  "key27": "2GRmdwNZtA16oxgxLwZyKRixbfAynkoDU836h8FcsQzqpjFekYeiwMR7dL3TFMyaSESKQbES3iyixbhC42qVNA7d",
  "key28": "54BcPnFeRVYLqX1LNzG6HJjSj2o8ghT46f7c3BoA7jvnnJdKyVRtVJS5ZGs8mMgv6ZHWHfRAcJFZCUyP1JsWgfo6",
  "key29": "srv7ggvuduBuPuMLeTtst57ufB9efEWjSLYTnP9zXFYK62Kq33NEmCTBfsCa2R5JBgHoaavzcECMGCmharibM5Z",
  "key30": "2X9hB9JTnRFCUtJSRLfJiAZZwN9RwQneuv4wKqEJyRwUaRLpSCn9HJUJGPhnjk5PsmbSAP3Ajzw4TxBksT5bwHus",
  "key31": "5nuwZyjwMFW2kjxjYNC77Tdk7kESt5BYN5Hucp9mtTzWmHefozi1kePUJ2S8moKT3kdFLtvDYTtFBvHXskokHpVb",
  "key32": "2domkpt6dqxC6fjdtqkkTkT8Yd1YRNUDDZPdCUqnaGraJYZFCep4NUhpmjMxshnvmFkr9PHNNN8BkuCsQZuL9hzh",
  "key33": "4NKqeWqeDpWdJ2sUYeHo26TQTs3rxQ5u4CUB3GurTSqBRt9Y4Z7dkCLnauDP9qdM1g8LgTyLNVnPJM7FjMJz4bf1",
  "key34": "2fKdDqGKNVQtWgbenPZ1pDENrHQF4iJ2ugEHxPEVnr9L3emhxCd2MdnVSWN1S9u9xxof997Hwku9QzsqpHEte1zB",
  "key35": "4aRT8gVZArjGv5ZBUFtoUTde95CATphAhLyK1629gX4FA3hmugcSFLaXZREzzxeJB8zg2UPGN4troCypNezP6R5",
  "key36": "EStQdokYxJofrsenUvZK7Sjip4SaVzanAVUKFvhCVhgW88w6bZPLAQzGjNzXbCQuVh1X67585fZRZBYyae4bSky",
  "key37": "2Kt9yCmYy8dGcmCjcA6TuZnKDewpnDcDdKZWR83pZuHhyUpDygCxUtDbXhDKXkm8m18o8kgnEuTCyK5dxC9TqYVH",
  "key38": "5Y2Nuo9rPRmm4orvgFxyUNxdbbuqvw6pPfzzSQbsFV9nczPfqz8Upf8YRJWhHbb7AQPUtWKKWG3N1WBTHaZC57DR",
  "key39": "5Lv81Ra4rpuSPTtr4HcvSzoVadi8Vzfc1Zythy9bmQik37QBPyfnng66B5iwtLSnyCM9AK6gArdcf3hYjep75zrC",
  "key40": "2rxeWca1H7AyekmPUppR2P1GLvh7RA26BUf3qL3EQbVYm669qyrcHiy5NY5HtZC1MrQSfyR9wh9PaE2xDeZe5d7g",
  "key41": "2MXXrVvp5FvtRGJ4zAvCeDzwaAp7KimG91Lp72HwKerTnWQ6Lg51gnjxdBoHz3T2AXLiMUd8qDGPmq3zgu3iz8Hm"
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
