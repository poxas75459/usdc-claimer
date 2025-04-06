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
    "FxwipXKtMrPnVuxDAqpByGuYodFapV8ANTpZG6xkkb4vuJz8VzAEqv6HtGxZxaMm26EAo16nKjwGu4BbckqQXhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hx7LoNy4fiT7PrWJgpd88JVrRjfoEzYjHAbDP72krkPFDAzHkShRpN4owsb4Qe7YeNW9S1hk6Z9HCxWZ1nmGbzC",
  "key1": "4NdEhuAxJufFd8pMeLtDtmWG1Pj7aVPtu498g9YY27MisNW93ua2fA6UNzzkKW5hBGrpquniVLmDgXn7uLxkacMc",
  "key2": "2v8x9iC4ptpDGf3Rp72YyQhd1Nz5mAWmi87j6dQGerSKyaEfAHVYkjuVn9i4CZgY32B7LmSrGZpW4S3CDfhBDa7h",
  "key3": "41jXwQMtgcHVbXPAc8qB17Z9NjZYNtetUBkCcSs4YDS7HTvYUexKEsMCnEGLqekpxYyybNVnqTGZ9vSLG4SB4vZ",
  "key4": "3AdzirPJjdFWxxa1jarFXexZAze4rh9vmcCNn4FTDrDpv38nWfesQH5ADsEvKKeiTjXLPh9MLNPuugZZwqaReXxE",
  "key5": "5Xi4ZP5mEmj8nHSLwVdSmu5YvReLHtCm42D3cYi2m8DSEYW9bGLaQAxSadnmGEfDfig8kkC2xa7SZvQX2pJwk4Kp",
  "key6": "2wo4fi1AkJJGn25wUexK9XN6X3TVdFwYYMPKbshC4andFjkjWKqmSJvP6oSUcnR5ZBX6NwZfy56sWGcfJrh3Xm9u",
  "key7": "YELHSyW6n5hRSKFwEyYMHAMYQF8E9vMcRfNf7gzYVdKod7DNVtsV7y5W8xZJgpCdtL53tZnsHyAHRLxXq3xQj7p",
  "key8": "3kYpbjJHCuqRXT3et3cawf3JaHdq6HRimKe14GxTa3S8C6Ly8371Nhxxku8BxwtTeEsUc9z1E3G78AAW5gWNtCfp",
  "key9": "3BJMdKu9QfkgSdHNWFNjC2rjBMoQ72syMGdqmSeeACVcvPY7vqPfMpwJEXvJLi4xj9SFoGYQFpATT5VgDUaJ9FvX",
  "key10": "HbBSYiCkAUsiDtCV3WCEmZhgaf3cRNBhfv9Du1ChuuPAyZB7h7UWeitQp3TkFesBG7qrbgaw6xnG7pAVrUHzNTp",
  "key11": "47zHNJHUCY9pM8SKMSKJeUh4qkXig3LV1ehTNRDbtWNof1UJs4ENiQF6tyRABdFDTDmHoUBGUuUow5fWVndWxJhJ",
  "key12": "2UJLxoDcP87ciuVFgm1bSKo5FxFXnVJYkMPbesNvsE36LZ4d8exmDDYsv7y8PkQ2bGQxUcS75x8auWtYDwnx8B7n",
  "key13": "5B58CuFUGkwz96QqVo55kfKfeVaGVrhHmemre6k3MiNR63JVUUfH6saXP5VKAvUg9u6xkq6BnS49HmH3JKceSPhi",
  "key14": "4FmWpY4y2QzTpWYc5R7KQcJ3v48sc3nrcPfAbDrYE7YJF5GBcV1HeFHaaBtGAPuYAYffwCPkfLBGL8cH7skgAaZn",
  "key15": "21BJ1BBMAafNLoLJsAwuizHmEymYioaWQpRgRCzyFoJj2DtNNYp1Ln3VAQ4ySRZQC3qKdWEPmz7xjLCFDSixniZf",
  "key16": "4jMB2aiV6ptYbCDafMgXJJiyXKPf25E4QxYUcZnWvJKd9AEK8sN1iSo6JcAkew38ohkMSx7Yh8nN7k7JRvvrWQxE",
  "key17": "61WQ4rGbccPiyjnDGKtnMcahD7bRbYpGUcxh7zLRK1SrrTakd9v67qoxSRjH3JC1fLCpTZWpnzb6mrWKyMWWCF47",
  "key18": "C8cdZQShkj7J3ZXoHwK7VLqB81UDJSQi94iue1yiYrwMSgc5SeU9zHBnK2uZV6KUN7PmJwjgaxPKkSQ5er4Ds6G",
  "key19": "4p1iACwddrw4i4Fd5B3hisJ75P1dnDbRV7magFSZt5kgDcC1VbfTSLVQLh3E53Ewc55ub4Xe8g5VnnfDe8Xwmaeq",
  "key20": "2um99Qbt7RmrDvSf95qhaaeS2nW4pcefdLEWECzrrH3ZbKdDQJLpoCc8Q2NW34TvRf2qKSCJwnqf9QdTrfbUXdkj",
  "key21": "v1wikgUJwik2fhaiY414ZdAoMsWU9SXFbFSvrJuauUCHnKKx6xQBT4e4ATTHsKyLNKxUC3toDoRfd7HzcaViGN4",
  "key22": "18B7UU6Hr3HULWyj7d7zUEBWxVusoZfGgxTYfdDXK6QpiPBSzW12MJnxzqxFvbdmqumMztyd4QX8vwFCKvLtJSU",
  "key23": "zSbRes2qXVum4a1TqKRrAvXjZQd9coUuDJCRddsgtTkXoa4qSwWAd8w8E4m7QpUBd7j6GNaeGgJo8LHvrof1sbc",
  "key24": "3qMjHFLKsXjjnew2Q94VKPv9ZDVroBhXHBsT3fCpcvWSd2QEEy38tSR1ivCLxVnmyfp6ZBDRxVc7zVYSXj9LEPjn",
  "key25": "5QRWKdMSe34fCTdvK4KBXowFqYtcL6q8zaL1wHCtE82LmfZjkZE73DGSnGoSSLfAP1F51nBi7czMEyviqEYxotQd",
  "key26": "2KAeWumwgVvcQHp1T3fVWpLpFCaLLUB7yvZ6ptaDuTf6srLm5pQ5EnudMcPW8VyABk2q8vkXjhSfQByUcEDMtCno",
  "key27": "Mm4hiKrFi8QXPP9fRA9Z1DempJmVcr9e2Ef4yqMb25wbDCyxH6RYrCMQWyrb3wJmqjuhCK2HwHSy9SBvNHA11UM",
  "key28": "bJHiRMsfUwfFz4wgj2mExRwoinpXPQmcQkukZv1QfYTE4254upv9KhSAD6SPLCBh4NcmS1oAaV3rCCousSQXwCb",
  "key29": "2jDCxZMMXgnvpHNnLFLq14CiBHcqczZSvNVg8zuyR8e74r47rcigTPYSQi19hn37EYqJspod8pKwdtAHLNCZ3fxZ",
  "key30": "4KNfh5r4fwdbTcBfDh4x9sz3THpBUe1uBfD3gwBTwk9EDBr111D3oeAXdCMw4DMFsK17o7bBJ1TZsVggvyrWnz4F",
  "key31": "2beHTXbSe6bU5cNTWpsED8Y1kT2vFy4nuCd3UrJ4desST1S7VpNT8Wr63g5R4ouYKMQdDt5FyGDbvKbFcpotyJ6S",
  "key32": "2Du4src8o2sBWPqaxx8zfghuSx9gpDTX4kh6LcXeuTBGB7VTtv7H5xUoN91xx6tZvavrhAxfySu839D1Yt8ZAMqb",
  "key33": "2wJRMuDf8Rf8wCQQBXQafJow47gDLR9VMNvNqgFdbsTzaScwDq1fqrUreugd5GcMinTTKfWssB2yJp3HohujGpLY",
  "key34": "7WcjEjH8MD7jU7ntequphKRFRkPtXkdbZQFxhN6F4cY6MBSYjBfjk4mnqNP9EGN7ojr5TFbiuc4fhdLq3YMiAa3",
  "key35": "XfUeXVBbBv32M7aue1oaskjyVzJSxdLWs5GBUTXfEMfJEaoVcnrRXobdcTdjNuBTUgczrewkdjACti1dj3UfTe8",
  "key36": "4eEHKoogMFRXbAVKRdK2cKnaXXJhPcvCgB5P9mtJSCBhtGNtsYrRQ4qCbeWcbg3Pmyqswh2HnThxTo7dnJXQYudx",
  "key37": "2XJJHHZimx9hoNdMqnEsmnDVxEMAbPUMz67B8FuYbgTE6LoDtXqkC4aR2JaFRexcLT15ReWHr7bNRrwpw7bhbFTE",
  "key38": "5xqcEHM1ZLNkvhTbib3D6VAmZ2SvnzdRo3xi5hj6L5AtJ2MyMoH7kNV7m7MSeYTwHd53tYmjvyR1GrwMpBQcEeRp",
  "key39": "5cUkjujX3HjdToutWvQ1QZhd4G8vtJrGW5HETqq6Qvk5twmtEoyxYmZ6vkMG5pPb1wQKGCBn97sSBWQfqDWDSaSA",
  "key40": "54kW8YAFMvZEuCuvWoo9rcRnmVkHpdGFD1hyMncFEBztBsxN7zeDhv7tBVFJvtZCgiYh9abesd3GPJ6CvBDeKqXX",
  "key41": "3xBxcMvJxPAeC7oGxo4fQmkPvTmcWvXa41SKGUEGCXnFEw2cqZHfvPsANjfj6GZronnK4aPpsbrS1Zq32m1LRrHV",
  "key42": "5p8S8tnZ5SzZ6VH5tgydYHv42Sv5TizRh114PJGwK8qKz3kUiS5UkAY76aJUSTV6sD57fj9PioGAqMs2hXxZXrwx",
  "key43": "4n6sqBbUV7FciZyBLP2rbgD3yXgkBtC9k2uPtB7UzavVeh6zJo3o2xiWZaoNqWcHAaPmBoAM52vmqfTaWJbVGBNH",
  "key44": "2czDWrYnVUemxm2TNHRaq6K3AHTTa8MhXmvoGxLP2eQa3yETVXkc6zp98JkhktQo11PPS8c5fhVvmJx2NzzB61ZB",
  "key45": "4srtqx3CMKg5dBfyv1Xd7qE8fdNQGZtHMYW919jwn2YppodFNUY9ipmZkzQXkFwNTtMMt3TJwUVBtRi3tDJMBvtJ",
  "key46": "4Kwa4gTcSYQiRJFS8mzuAYxJWuhcqqJs4bUuLFr7kXWZGMhsKd11yXV5E6UMk9KEjwSaudn9npRmtpRbVKJLtuE9",
  "key47": "3ebtpTpBBehkpZqbZtatoxLoQhDPDu5Bgk4dPFB6puHk76uMTRYmhr4RbnT63ooggcMGueLNiJ3wCgVhaK9veaan",
  "key48": "3cmNQRE2NdvsxDQfNaG99xisu7cnucV3vzVmaDiDpYbqwr4ez1XnLXhJEZuHvXAxmoKZUC3d49WXMB1esT4Aocvz",
  "key49": "zTBcDgQcJwMWcYuNU5ubB1wurBCSo6zuSgYRTEnn1tdFdF3P8UkNaFcXWphHkQn5XiMjGE7uVatnvKdr2iPSJ7H"
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
