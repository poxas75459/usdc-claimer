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
    "2PicjB9swVwc2bcBrG7wcCK1WPHBDSUjj9hMxbVv5u2ce4WNKnuJ8jhr55exQYmB7PzuHfMt8SWzHjK9SD6m23Nj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLtmyzSrBWCzVjYWHfEzqgisR9FPNMt5D1P3YCJxHF3AWrUzCK3fq2VcedfmxhCNNNczczqrgcK47LuAtZbyFf",
  "key1": "4hCJ5yzcA9KCFkUJRQb7nQp4LfwBDJkaBHCW48iGbL8kyK8JJot1XfMHgL2ppHivcszRnPVdXA68YeBt2K1uc7UF",
  "key2": "27dxwwwyPxLQW9VrkfbegqLMaDcSDdMMXJiZpZHGahKcfqtGMEzRzKKUzaT1S4hY7siuTfcq2yppZX44p8fwigSx",
  "key3": "5ttLQUnhHPLAzEPsurETR3rR42JbKsH8Ba3ueW1YFQBBoxKWqGw1J2isuENHknN9ZjoyuJJJA6zqHLXDDfPErDk4",
  "key4": "9sYD1wQcsx4VFhByg2HU6jJQXVLF9gXotBdKBd55tNHbzDZ84PfeH31bzM4Z8BzdeSyuu989cxNEKsVDCPphV1S",
  "key5": "2X1QcfuCq3cHpk2yEvNNPv5jmevYZfgP6VE549GvRhV8GN7yGbLdR4LQjTYpQdfsmZ57Jd3zuB4YEf7GzJbUqmgT",
  "key6": "35QFQRUyz7AKxVmth4fc5YeTAkSuC8inZZXGFqTewAd3jC8tuc4itHPpvV7M32AQBboLrnurfcDyfzQXNqD5NuuS",
  "key7": "29URx6DGjdH7p4otcDhCZWQHZ8fcq6aYwTPrbcLPJ81wLvWWG2vGFUTD2stRQ9dQavv3aBGGWq6TxZTsDXVnREuM",
  "key8": "2HFhL3Qdd9GBFcdJCFumM4uwDcaD9ABEm1no3nvnCDPBBtUQz364rTLf3y5L4UoEqubdgLEkLy5zcsKxkNfcP93r",
  "key9": "5AfbNaG37d2PcH5K1RMfU2624hnnEmWsSwwdffkXj3KB8KbsTaa8ojF41SdsV8Letkw62SoQwe1VqJAUt1Ckv9NA",
  "key10": "46DNzhpcyRdjUBxm1HL8VYf6A9JCsxcevzGud9rkEXnQLgpkoayTFrgwSMnaSGbHxzQrfNyjcrxFGQgkd5gWSsSV",
  "key11": "qEsmizdenW9NwKHpxGJArG5rY6PhQR8PWTTuKszprpW263qaCR4yZ3ppLqnU7StzfZceqcha42qv3rPtMDBXwE2",
  "key12": "5WcrpFR5eHG1V8Nxwyd35wwJF1SnJzE3E9h9iEyyvAuMyo1eLASpqPdJknMeBY8wVCiwUG3K4zz4nVRRBoeeeLu8",
  "key13": "5Fk1vbMmmpkNGUnyMP6EA6bQu4vF5cmP1KzRrXKCLMgkKjLgubZeLiV1yjMBJ9YGgBefKfbktuxmFtyrwLCdo9wX",
  "key14": "kfW8ecMMkakEDncayc7kQHyzkFyiwSA1a4iZiLFcHNuJHF7mfWmgVXxgCqwrc2vDQK9ZWPSv8fLpjCMWM6PS9gA",
  "key15": "4qFXXm7cmz2TxBiZvSxuf7yd1LGvt8GUJxvYsQekaDkx4d6fQYK3A1s1XsZ9jxzThFNrgvQUu6NUvKgPCFd16FFi",
  "key16": "2tjzJ9rUT7Cmtyt3RA3cWBbE9mVexwG2UnuF1FNoXjeNWSYoHxEH1YynVSeesnvUvn3q5MguHiTNvTtm6JaXSpsR",
  "key17": "4xFeQ21RatbigSuaYpPTG91EMgp3w4aHSFfwTq9phrSsErKny3JRYNoSviXrxfXZ4tHg4J8PRUmBtwa3VZXpTnUW",
  "key18": "5YpY4PQF5QNgoedyPbWnnAkQFgJ4qwWbaQK6wbmAetjkVXcPuvrmr67WidZXoXHdtPBvFNgq4GXrrE73RciHKo9C",
  "key19": "5jEXNm7Qt3TuJRsXzkPLu8uvtKqGdFDVzoHZBBVNXhUSGAhpf7H5y2j8PysJnqzDUjKtYczHJtNsYbNi5HfgHXtr",
  "key20": "3uounNDAZ2QYzE3sBhyQX9nByUYUhqX8SF2B17Zg7hX3N6K7zcod5NnKyKCvsp7DrBZvi2uWZju7MHJucttQU9Fz",
  "key21": "qNq57JDUcC7XSsG7pnj1MFdf3zYEwiGRfnkUh88Jw9f9ZwUcSvJ9ZWf28pnaxixxwzcvT9EUpRPnqNDcpLTxf9s",
  "key22": "fjUyC8wsWr8xY8q54zEtwLk8EMiTSKCVY96DGpNZJZZfL5LCjWmWU4GXGGfNpBKue3k2T4T8Rh1NtcNpZhPLv9Z",
  "key23": "44JTc3rq2pJVHSh9G9GoLoRPbvX75wnvjPoEq4fdahB2DWceH4tL2upGjhHzgAS9HdCPYnU1HckzXJqKXF6KpLNy",
  "key24": "5xSFUML3wDQC8xXhkthUJcoBrAP6KjwVyLnGonN51n4zaMaDm38iEsFcsGHKz4vMPFkdjCCoL85EBXLHbzRteFCB",
  "key25": "jBdwTEkavfRNMaqDiXfiSzmqsrAvyvag27Shi5tExjZGNUC924D8F25vXWNkBdStnuLF9kDobdvYgbnXYK4Q4Df",
  "key26": "4C5xAc96ZAJJEeo9pNeaHP4hzAriFK37v93GppgYbY7HJmGgag1jPyvPsKUoFr7gFSsjmEBRr9UkkmXKgbND7S1B",
  "key27": "3EotgMhQqJBZw8j3oMEqAEGNBRyaoS76ftYf2fcphc69PnuukGAaSDSMbeA63865xewF62KbYze7UhshediXs9eJ",
  "key28": "44kcy6xiBUk1vqE3A9L3KdTuhqZ3HELu1QBpeWN52jFt1Z3RA7Fz7J6MdAskocR1Vjx1yexDfmb2igZxnXHUvBaL",
  "key29": "3x9R4hXFHvn9FsfZDB7zzxRM37Sk16HfYNRjY9ubbqEKSxCR3Abykrcv9RF1p57jAJNMUjbEdz68M3gK7rE2SQw6",
  "key30": "5ZBBKMA1EwzVrH7A2LuoyNeJztYqSevSxCTsLniUKTcYfv5vSFnG7YJLdFdT5KsJuLoGQgGdnj9Qy67SvW25t1J3",
  "key31": "3NUm8zPRcn3hGRngSn8CFohzoQ1uyw7PNqV4GRU8iBWGfWH86ah4sS34tgHf9xStomPThkZ5n9AmU6TpwdACWCnv",
  "key32": "4hc9YRjRui2PyRWwqGbxLmpQxg5houncbqNeZR8xTQDYjfccwYqRvi2c8N5YzDvMaeKSTdhNL9LESzutaBaYrCLy",
  "key33": "2Yq36J8YXL64jZspZ59C2RXUCSjUB1Xm5XWyG1axEMBgFiFRi7sFtKhR7PRqjQevc4CBnMgJg4AgdHbfkYHH3aM7",
  "key34": "5VRvktixoXyXZKa8aoLtan9VspSEt3VhQJQbVBaLbwJ7NRY3gEejJqRq4ui9HknmFnErV6ZtmLHSbQh9kjs2sYV5",
  "key35": "2qZzEeV99jc2hsPVGkfbG6Y6Rmr6WJmSn4jMGyGNZZtuDo4ESzDkNtwRLhHBXF39XMe78XaYBgPE7EEmErdi3ABE",
  "key36": "3m4qVQqBusL2Xs5QW4d4dLWnbrRnHqneiANrSxKobqZvfVitFpLs6YQ174kBiryEoHnQpVdqcLT1LP473hK49rLP",
  "key37": "5WEpLpUYripSiBb77G3x6GKndh38q3vFmxMXtjrATTBtQqimj54zxarM5Niun5dU9e9N2FdKUEY1ERvZr4tfNKqZ",
  "key38": "iG8t5wqQ6L5y8KUBzgnoCRRUxjvHfBufv93GBfD9y2Pg1RgJtJWGLnY6VxRXkCHDpQQFRqwsZrDx4oeKjXPNbmd",
  "key39": "rbGPCMyYCxgjPCvuzamPTCrc5G1d8VUN83AuC47mByqVfgBQxxuvsTNDiDwAey3V3uk5m8Uj7cYeuJZB1ryB9bW",
  "key40": "3yB8dzocDx2ieDQkhyBttznEa2wUZJ4cmcReNFeJ3ysCruaxFb5AP6iTeCsvKU6h6NG2HQbuVEztxMdGVxvFKe8z",
  "key41": "3Gwr86Y2YE6oVTXS5BNT6d9aH5sAwJc7825Dzy8gdKyeUWaP9NWyyN993xqYbvewtem4K8MwET7RwMnH6SUd32ZS",
  "key42": "4RHYJumTRHNsWeVzRVYnq5RREwGESUn8haDoFvmjTYDMKCrgA7hnGY5iRLUh2Adfrx1jipSeH6UzbdBXkkDaTbvW",
  "key43": "4nqprPEjp7Rxi4R4SCUvd7AgfcfVySAWzdSrzYujV2vVinQ5nRU2x8ji4XF4xRfT2Yqp1DARfbJUNz9MRuAjm2CD",
  "key44": "24Frco4E4ZSfra2A4L6p3PTUDLpGbU3w5JfNByMpenSDTgqJ56MfESbTKzFqGwuYSWfV16qzG7WVvbQqeHhn1NKz",
  "key45": "2FZyi1hLPdZys5qKHSVvJ7dnQVTS1jqBkZTeQZsc9qxK3eYPaZ6BZTRLsasUxqK21RJ8dcbnFrRuFmPZ5XBw1KSb",
  "key46": "62d3rh31X2jTzzhT117FdinDMbSFVBUi8mwxCAA5EoaEd7ys8gqmMN4hU5JguCEX3pNWB3RbCaKCqZFkFqsN8a5W",
  "key47": "2PiwsGR3KUtiGzc4dVKdyArqijonN5KHNs68MUoCbQ8TXmSEXeYPiWzynZa9hcBQkyz7jRu71Hx6831UQyk6oxgV"
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
