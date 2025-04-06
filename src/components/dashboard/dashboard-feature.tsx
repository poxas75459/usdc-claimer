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
    "4Gmiyq3teBoSKABpydFVkZpVsb98TZLmoRn2v8HtHzzh2zggSfrrJ8CAtFjD2Z8ZhjR9b3gGhcQa8PiL1SWTMeZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CA2CFa7QUgNcopsPZKNpE9pWeTPJqooKjng6sFuvapFGie8Q8rQAJ7meCHeBuKVS1SGTgRqou8ESihNt4RDyKa8",
  "key1": "3GBMQ57k91LjzQAHh65BSEGAbJ92crNTLvhq1HNiDgWryMa5bWnUELdcQHW4jH6ATGggMnSJpRUW15G9QZR55hwi",
  "key2": "225nWTdamJEMLncF2YgDR3EcPZpcQ85qQGipNXUbX1Tdy5zcka5x8BGy8NZjnrXTTHb7TdpbAa5hnqmW6RuBXdGp",
  "key3": "4SMkqRVopCEeqFAYToivAW6kX3CAis6kDd2mPZz4Zv3sjiRidS8LHWfj6TXqzRYYSBGmeLhLYmUynyimjWQy1YmG",
  "key4": "9e6jpTLhR4YzqRPbsrRLjN5DS34pc53ErrTNLmFLMbxTiz9AS9w2kGER84N6UwKMaH1ca2TfK9DePeHbtbcf7NK",
  "key5": "4qFdUEgD7uCmyAKTLviLppisKbnURzn192p4uBBRGcFGA8dN12Tx515w2T4ZK1k7Gkoow6F38THV9dHLPcyB5Bp9",
  "key6": "4R9ibnUN3UMmPJqCoe7zCBp3dANXC8SeBheg5L6ojA2F8eWzbuZqycZhhEyF5BLwWGTKxLNFDNyS12zGoDQQw3Na",
  "key7": "NQJ7MGsQqkSeCNBG2WpQxRaH7FPGMKKc22wpa2LLH2aHP283FSsMbJ9G2mvGx6WMt8NnUogWowDgs62tLa4hA6N",
  "key8": "4hP1CvGGWACoueRnpL44LPonDihZhfkEpQscXvBvJ9mdPkaESmomKxpTSQWW2fcdoHL1Ss9A5o2nvUHvJ3x5uNZK",
  "key9": "55oChEGwkcPwAPpimdM9ZknQ7yoVVCeK2PxtPEuggMw3U9d2JvM3xy3VurgZhMKZKLaNBDb3PYGnLpFoUfdeKCvF",
  "key10": "3Nqgefwx25ktMFU6Th41xdy3L482yCJbDBYSX1u3MgiYycmMFaQH7j4nxV83oSZQHoxgkkQ6Nnojq3F2zvq5a8mZ",
  "key11": "2DP4DM3fuzoq137JgPP1wa6bzubRCmVaaFUZPYkCP2YS284ibt1MsyRTohyFNpNJ4hRdGZLFKHhz9ERJ91UDT7u8",
  "key12": "5wtR2ALMHiVF4vUfXdzPCiZZXqZrLqVZ4osBQia1irX7rVx4BAx7Xa4K82QKrcjFC8WVYVZcwjJqu5XnEX4Po9N7",
  "key13": "3Ljiyatrpt15RsWXMSJfs6gEpe7AQFX6JGKsAuRSewdm4C8YnWRKExFjf8tfhrFnEKrseHoPkTC4VBaR7yezXee9",
  "key14": "4PQKrUjumkrBjVfBtDsVSQyEjoWxGMovRaRqqqTEKF6HCTfnBtWJThu6kLKpWiPF6sBnj2U73KVhEBxpYbSfUsDk",
  "key15": "3LMDyvNGDdRrpihkzsX34KPbtnn8xEigUSeviQh9dLWjBJxmAoBpDSHFJSxezPP49Ecr68jdFgLr8afz4pEUV4N2",
  "key16": "5bLzh595PyHNkqFixL37QduVe4QweAQzvWFg2aSG7u7muCae59jizzTt1ma6d3Zo8dVP8irKDUxBBQPwVBBnEaWt",
  "key17": "3zxiyH3SKg6pXWQhBqgYvcoEeSLx8fdMD3jsnMJWTw2Y6XMHJHLJSfxtb7HCqu6RDtbggiZbV31947sZfn6Tv6CJ",
  "key18": "4bBUNDGEXgFDh9Vg4adj88Kbkc7VE61nbgu8J1zfX9CDUZXHfcuthMnTutQQmZm4waMAVLzAM71GjEMcs91Ffi29",
  "key19": "3ZdDQvT1L9Av15wtGSEAYLXPaRTT4RwtuRD1gM2qyVvQCHg8NqZvwPepaVLN5xxXjGs5WidunKeYdMZrsdiexmg4",
  "key20": "2Kccu8SzmwHStEJSAmFLxJ9h5CrRZe6CcWqQAXunqeufUSfmUf4EjyTBXfy9Ubjrr4Uimd5nwGKNQWgwRTkmBZiS",
  "key21": "3qba7BuHVRrnRGQ5cUUWf2d1iK8KKwj31dRtyrBtw9WBqR74geuPktFMDUEYmJGwexrFYv4CdrM3ZiWbEoz9bXfy",
  "key22": "3eGCFUv6YtUKiVoBz4zXuTrNMz9ifrgCg2KbFoW4C5Eypy4riKQYCKRqgAknjjnacGHwU1JcBL88gpHT1dPN4qNC",
  "key23": "RLwsfnWcxeniPQzMpbwxpVWupG8LqYY1afRkXFd8B7C8aXaguUjvNTvmMMt5wx78KtugBc19414SKY38RbreAgx",
  "key24": "2AWwFRBt52TZbw3mGUUZYJx4cT6RPgKt1wBckXTRB1XyJ1z9y1wawwBinHbVEaprYKYWX77sMCx6cR7cAV1TywS5",
  "key25": "4NWB32LKqq5B6x1fADLF211L5qX9woTCVGfSFU4H79ctJ1tvAcrCukpa1uChtThPXG9EYvGp6L7Qfy3AhYF1av76",
  "key26": "Z5ezSzQw2SchVdfwaJq3FThEzRmhVs2E7xrteMQBipM39xESY9hsApatQxamDRj7Suk3mSZaXCZrcCmACzZTURr",
  "key27": "4QkbFAj9cQ2vZ3Xsh8yEzX4ctdiPisj7AL2un2CkKJswAXJe16RjBPjXniehGhUcWJCFtN5pXCTABV1fdw65rASm",
  "key28": "2bQVij4GVcGsby4Abh5HfQjsBZXXoFawiwveZWacqwDFtP73cVfbuJj4RRbcH3Drkg18U6JkcYcCxAu8bTr4f8xA",
  "key29": "i5WGcM5JMmnHWKczLeQdjZksinaXWvV1hWmwAhLicCh36bGQLkX6Y5z69yepb5da1iS9dsFG32Thi65hjxM1TiM",
  "key30": "aTkyRVFQmbhNdm1Luh6G8Jq7teSBDNhHCQsYjbDnbiXM6vTYnQq8Cmmses3RRe5iruD8VY1xLrakpG6YQPzoiTw",
  "key31": "3PPzUDVosKaDmmyLciwWkhWtis6aF2QeHTkiaSmQpLfBpiBGWESVe5nEqYEmJbTHatnCWyrDgDjhGuZRjdVMrN7z",
  "key32": "5wQe9uWs75ry4UmaVa2GxdV2GoLk45FyWLEXGPNe5DdPDMuFJyZggaP9HHupY6SQpQBjN2JsAY9wsVCnzYAvfpCa",
  "key33": "2reKbtPcyk4MW6o7A7wZRfz2o71XUnLp6TCeZ42rwN9uz45ZCr6jcjZ6JSkd8hzkxTGdC5KPaxJqzuM2atQt6UPK",
  "key34": "5aax3mpqizr9yJqjXpBBL2WuKVAkhXu4QSq7XDQJpwmwpZ4VbG9KYs2e6vp8AXKUynTv72Jrm9q7ZmjyvXpQDcqf",
  "key35": "2iWmBEtyxUkrfcD9k5L2YJHSJMV9fdkzBZZ21u1MVbfMCcvkSyp1q5m8d9pxkt6ApaRTdShJ52xJPxX5Z6oDi8ax",
  "key36": "2WS67JH9e5CZuCQJykSK1oJiuWYBa5giUzLYiApqzEdrdBXkBxxyQgsgDTmyt5QmNCEv2H8ZX7Ey3oeuhxCFCunB",
  "key37": "4nz1KyJvWvtd5YjGUCbsDxHRjfj9jawwWuKcAEWw2N2vEVyR8NAdQmutb8wphyhKEpir6dAxDeY8jWAgUpUmeyDm",
  "key38": "4dMX8qzQnd29saeJ7H5uSoSwhzzf9ywhkAqwXjBHkdipdHVcM15si7eG4WNLWeoNVfSaqK9gYVju89PkpW5aZFC6",
  "key39": "5fBCZqsR26Y6btrPKCmb5jZqTmguB2NhxtDjdRAYG96yhGqNMjeDzaHJZ2Hmwf68UweYgM1rpmdvmcqwwpe6EuHb",
  "key40": "5SXRddmActW2EoySN7hk1jqU1rTXwpjpxSUwfPDht5iYbnaVRJv5THP3Poq7L2arZsHgcomXPz2dXMXrboAGC4hz",
  "key41": "36gk2sz9kTECHYZ6oABS8XN88hy92dMEGJqqfjFsrxkJU5BeCcQ8M9QKx7216ng4uwMYXD4oDWKpdhXcH2JvzAcP",
  "key42": "3V74q6xPdTW1JNN4VEbt8bPDgsCNXifus7W7RWNZMCA8NdE3Bw4XUiCKh2yjpXez4ayZQKqcQWPczgcsp6czDzy8",
  "key43": "5ppfrpQidtLC6v5FNdrux8NQJz7G6L8Bcrtbvqz82XXbeempjpeHf7wXySHPuUZ9X7P2EEohsZbN7oeniXYhhuSi",
  "key44": "2BjNyzjyFSHt39fHb9tcSb1ERp8bmnWuNkVg1Uxxks3jCJWpj7RTnrqWH8TLhtuBzmrQTQAX8P3cXwaNB4PWeiYb",
  "key45": "5o23ReznSkBZy3uBuAVos2sUABJb2DEPFZA7mwpGuX4w53M3Tcunxom6t9ULbFsTViQCd7h8xizfB4cjj88gck1o",
  "key46": "FNZ98PGrGxUQ3okFrsfGqCV6jKziFe85jxmYwteGYxooBo5yApfSigCuACuL53XDZ4u2DsMXjz97CA5JmjTXd5n",
  "key47": "3pvX9DwB2fPN3NYuBHhcHZAs8rukFJupqZbfqKssnhkLrUQBHan88nW4Uj6iQ1Wjb9tpYgYXRmpaioFPwydRZtci"
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
