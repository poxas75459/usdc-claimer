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
    "4PHViUbHJmwwNkDiixQUzULu3ZHoWJytCnWbzRT4SxTW2CGqijHrsrVXMJqgH5KoPPcksYgYriWX8VniPyET9FUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXs9faNppLyDr4f2n313zmbwGzpzgDt6KTwQRojDwNYb1R6QJjrThEvA2pnbBVAYcZ57acHyTtNrKetDyAaygG2",
  "key1": "33hF8xghDQuoYN3m5eR6GzT7Z5Hvsku8CrqfYpVuXpoR3PB7mRjQF8rBBgP9LSuxZgqrV3VCsvngjjvtK42MNwZX",
  "key2": "3QuHoVgkEgQrctbvtjbr6hazYRRbye7BcjTkPW4KYhUizQVJKjnVRbAMDzNu2hEfPxYVANKHmEgBJvHwd2J9L4TN",
  "key3": "CkGFmgKjf3B1Mo2VDAgYjj4RFZGCYptzVBWZyUYRvqdFTccteJyuLtGUFMwPKY1TAi2Kk8cRhp4aUWy8Wmng7TL",
  "key4": "5XZJiuMo7ctmwPpeiAQmqDV2GEi4F9tbvtxcuGEYcMpmMeECJ9UTs28jYzFKwuR5k6FsstDVcjJHavj7KawFr1jz",
  "key5": "5zddgNurY3nQqCF9efcYpCF57xmyW4BwWSY2TxiSa7gNrGQKjqYuWXfQRQPEtc73eBS7c8XWRrbRunYMsczwmBH6",
  "key6": "5ncTdzGGMJBnoWXzdSWxgTJKAX3BZ4jsJ9WZUiZu264HnJzz7ZYscXbRhDr32yMXHJWJwL391WDNH9fMHVdzrhmx",
  "key7": "3HxqPscyAgZU7ahtHFMUBo9KWEuUnkGZtDnwLKtBbhVG8yryyzCtFi9BTdHJdvghfxDr2TDaxN57gsSBc5TmBx8G",
  "key8": "47ZgMsHabmJdXXgSRQZQNTiuHpnx9fhTh3nrc6rBiUVG375o6f27mma4Q7QACA8eNyLSeEJ4zx2KaFmsukpFiFYQ",
  "key9": "59uZZ9xLLWRMSpTCX4nxrrPJAUineL2yuwrx5jJm8jZBH4jJPVdAu1sR4A7r8kMtxj1mmLBTWotFmV4n3YBQvmrN",
  "key10": "5JGxhFTy8T1rEDDWJe5jcfgmmgNUdDViQSBr7475CgvYPurD2AqBx8haTicbyULDQxFKaoCr4fB3Enya7Vcj65oz",
  "key11": "3FtSnJJ7qVywczBQfTMuSihfCzCf27c4xb2GZxteW48TkoLYu4rJ1gDePmw4odJU4iDymDH9HdKtSLD5enacbvZf",
  "key12": "4bM46PCk69aRucteqKngg6Vk5LpddnEdybKUZLuwgynqxAU2HPCBzzWn3kjmzTYEBTyUbV8X3cKDxCkm9Xgec7bE",
  "key13": "4sAu4DXz3KhxikbiQfjDbKdh6PpJ3mmTYax3LizfhoTCSmf4wSVmC13djrtLX4DGA4zQFZVn2afb6X6jkpmKuaY7",
  "key14": "4vf9YjoM72kSTByajBAW3TBBQgrAWxZB9C9oe47AG7msdKAN5hXnrBidQ2NF1ThpQpZcd5yFK1fwMVxwgdsk61xc",
  "key15": "21PpXn5BeJXCdmLDvJAr4zCBYQGKv9uwVM1V7f3kaWEuqmQESvJUSePSrsbfviSWbSA7EZYDWaLmNjgU8xFAkjeH",
  "key16": "6AB1GvJUMTekyj5GsgXw1P2TDhuNLYanmo6hgjDk14vQAGDqFkvGd1ctcocZ56JQZE1wSHHpJgkiw4ofP2e7baE",
  "key17": "55tQicmbe3RWbZkkpmvsfKw6zQSbTDEfKgEB9iF8gAxBjpdnHFCTP6kQPW8cUeaANnW7ZgxMrNPvrHatTtzKf3pY",
  "key18": "51vqRKSmm4YYUXdycfcxhhmnYXu5gwxaVhhLY4qnBR3P59D911HTh73QQyaAgvkGxA4kKbjSiqusxSW5CbYzaqPz",
  "key19": "2mJPVnnQXPXgDQ4gvwNbqdDgkeHuVPJpMGYLYTKPA16oyFyzvLbUKL8KkRRMjZ88zBBSsvpKwbusDW83t8HWkwWi",
  "key20": "44XVM9d7AdvYrYG2uVchWi3xZjYUjo82Sm63grgyF2LVXEMZVxnoF9qvtefMENXH6H6uZUM2gmbsanPLpsPhkUBd",
  "key21": "dm9ySe4WG8gVDHKCVZfYMFBH8tjdK5yAK9AeZSLzvXf1MBchGrbgH3wrUXLn86Q4SDkQxpjmbDEc41vL2BQuULv",
  "key22": "2Q8BAkhK1iaCvkyV8VDdYkiNhqxPQXQRNsoNjt9Hc7L4GuTd2K7Lxx8bPSGA12Wa5ioNPTdKy8pJEiUP7kyN4c7L",
  "key23": "VZt2zZeGPehGkxQxMHSp9HoSz7Wgn4NcMPe3KKcjr4jZEmy3VCeVEKz7nXLLykWYyBtf5rn1nxshhiiCFiMMxdT",
  "key24": "5JbWXWaXBAehbmXdAs9YnSdjp3tbCFoogPn1R9HiaVZSQwiNZtn1nKs28nNR6i9dePTTM8iKdgruuSJ8BZXTeLpm",
  "key25": "kf98dL2cVMQvnkcby1eDJWYniQ6nFsPDTKNQKLmVjLMh1YaUrfZEgtDKNtVttcpYoYd6QW1rdXuqkqpEhKZ3GbX",
  "key26": "bo4bf9B7r9P2hcuaeSCG1FBV9RgwN2Rfa5Cnsq16QP1bc12SHtwhSKDRXWmH9ocGUDM5bTUbrsBg59Kap2RKjVq",
  "key27": "4R8XEjWZ7xjmEvW6P3hzk1oaKkkXy8jYyMywuYZzJP5s8Ej3bfCXzA6Kx3QTwmnUKAXXJGey6rw21PHgSqRosy3P",
  "key28": "55dvoAE5Hv961CfWxeiAqqTCLdQoXFnGqTnNRUny4nTFEzD6dXLQx454fnMqkmzTexPTuP93B5aRF7hCJXZGQCyA",
  "key29": "2bg1abtjdrnJm8QY4TuzNFtbcDyEDkawwBazFtoR5knhZgepo3UsTxVhXztxMGZhv8mVZvVtNqSqiseNrfaEQFgS",
  "key30": "5nMXtK6CNCxPQnrWHbAGtpwBhDCji1itMB4QTkWiYoPjcwPLx7chfoCtBbgLPzTYiNafjYcC8d1hsk5WXuJWvMS9",
  "key31": "ywZmQB49hGK8GbDuZXAF7Bte4LdJv5RkzGt32qvtzhpYmUZTCGMVe1iMtVpwUQXcytF5qaxZjn6RXAm3EnjKTgM",
  "key32": "3BmCxwWrWBt2i5iu73M24PrFufXWT63mueWyF4TtYp7yYCYXiGspoaJ4FmsztzN5uBtXaEYL1skYTzQh1ZHoJz8V",
  "key33": "a68y8UsTSDoT1YtcvhDDzHrGujCbQqBMBCCdvBXZjVUr9PENf6F9rFpK4pEMRampCqXRAh2aqFJ8FbAmcfywS9H",
  "key34": "2UgLhRxKgkV8AjUCUMEfKrTtyQkS8ow7Z4qBaigkeG4QQnddSqhSLgsY82ZmwwHkF4QCR8PV9UrD75oqGWnWeJgu",
  "key35": "2qxVxWfP2dqHAyWB2Tpi3Raaxo3bfQWxjwzvoZ3VFKECrpGjVXBhq61H2YuANfFxUKtzeuN4uCirzhqRvxyZSHea",
  "key36": "48XK8cHNrZJcHHQgT1q3yqqZdWbBdegDhGaqJ2ugfUQjfDk5bU4n4srLCkJKeFKzLPe9VgiE2VWFQY9cgZNRocUj",
  "key37": "5FijNPxogqDxM93PfoXVJFC3UrPNqf3Qmjy1tFXwwyifZw5pkXwrkV7Er9efqKtBxB2RxR7K2BeBAiZk98hbi2ie",
  "key38": "3erBrEgVsEqUSPWqwpoyJVvKj9Lr3UrFuoXpGZ497r2tzUYH7hAfiNND8tArhNDmQuDtrH4iGWptK1aBJJBQzUne",
  "key39": "2hEvpCK6xbxNYdydyuwg3kkRk5ay8h5nyMngxrievsknLpAhnc1FVYH4SD1keN2aYiT5nGqmePseiW2HwzmCBpJF"
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
