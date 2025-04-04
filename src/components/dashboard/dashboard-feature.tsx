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
    "4tYRjQ53yRiJCwfJSq6auUVdfrLHsthWoUoSCyJj8uwXHuPjuQm2qjj51N2GmXbJY1zZWNdkZH52ABVX2DLj49g2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zninixfFQwg3k2wBbL9f65kS5HGgyomBUDtuZisWbvP7TGV6UpsGYPhANsSsSMcsBcrooD9yHk17y5P3ikddNQS",
  "key1": "4Nq1CVtcsfvvYNNcNci6MREYCZGMv24o9ComPFU7kizkuT5k42aHXdNVFZBkoZUkfwNhjG1MhHFyACqmKYVprFv9",
  "key2": "LF9mG64X2X27W41JciSoFS2D52icKwPvzboda5aQ6zAUTjY4TnbZVFbppyT241GBmT4A6faAktUYs7dftgYoM7V",
  "key3": "5Bj5TqQoKcx7AA5TWMvsYR16rk8eqL3rYLUdBc91ymM1C9Ro4rjCqdzJv56hTKhpcJiiGmWP9B3ib13P29yNiqby",
  "key4": "4PoJV7UbY1p4iTXW4HR8Fgt79UCU3hu1hKDR8AJ1mdjhQcFaKXBXZvRcWzCHa9WhXs2hdYkfvhWZoZk593ruauKe",
  "key5": "2fDknMZhpjuRGXsDZCr7SSoKx3dHzbAh7yBNpDD62sJZKGKN8LLPczLTPBeGBMmTHtdzrSqWWgaJYcuERE7gqMBS",
  "key6": "2FjGPAqRjtWCoMMjqAf8t4Z6FTH8h1bQsaNoeWqQyHvUG8ipDutf25mnrYoUYfZApQexwa5n3dHmJv6ARJsskgqJ",
  "key7": "3v7cAUcs9TL1ZHXe2afFn5xMQVVFAxWGeoEogiVsrRN6qsA1ejLAe7wUTSETA4mPZUmDFHdKBGkeueKz89wsjpH1",
  "key8": "ZA9w9q6XnoSTKjcAJ5hNC6LgNKo1jSrNnKrjpYQfLm9E8Z1VwgkmpnDCQZQuRe3wx7XYawqGoScRdykCXFSs5Xh",
  "key9": "35GmreNkwqzoQxjvKmz54RfVkfbYsrBJtCfZfKmwJ4T7zgsDVjD5KDN9oVnwa4L9LUAvvGkHGfPxHgHe5wkSdyYD",
  "key10": "5uMYKahNB4aqCsm3NPbDtTYM9ATmHAWjn2tZhSVMv8ypTBuqk8eX9cFiKDLGaf6nJt39r4pizHTLdAaMUdBqiNCd",
  "key11": "3JZ5wENTreZzNjzujhAnWsZQKYswUPeFM3fMJGnppLpGNjCyZ6VEupnb9r2HAs6GhwR1Hb2BFXuKFXtKXuj8KPyW",
  "key12": "3fPGLcyP6BZzir4DBy5cAtaTSXHMwCT9UV7QQAeQ89CfMgSgi5YDuFhs9bgkbqtFFf6uuLjMcZBQqqyGAganWeL1",
  "key13": "4QbE8zfDddF5UK56ZMEcyrNdNkQm7HyxSrCVMnBpgWrqSnuFUbi1tRU8AHDBQEM4XmoVUZzAkZjXrKVqvGsVZCvx",
  "key14": "i5Cc9TBJwJWppCQzZSeVCCEvzi3W2rqnVn3A7MV2b6vwfLeEBCijZfRVkSs1DiRqx8NHSxMAGHTPCEWbAdee2xT",
  "key15": "WzhGiv5hqb9JNvtjdRLmhULcas38DXKTsnfdBCpDVkaSCHsb6EQq5i9z4XVtCyVJMJGXfZvd2Nqh6wK1Qo6bcGw",
  "key16": "5DvCQmFHq98XRuneTXMdAagqscWG4BAkXgSHXUZkUeReiLG9tvmw3UiuvcefDEXCqMWgwGdDqiBrBaSSeZuYMWVs",
  "key17": "5PrQVJ4nyY86QcK2eo2bmTUodX1gQKGfLB3mDpCdUsJDofWGk8oQRpTY9heANSx8vX7EdcV7SWijqC2kSPje5uAv",
  "key18": "2cVYucHndH18oSLsk9kW1jyULF9SfuKvsrZw8pkT2dWThV99BVUAmerJkV7bMh7FwQMiHskr8e67MX81sr441XAm",
  "key19": "22SryN2dGMuv1vLP9xyZQziPs77WXYS87oDGMeaKigtaMWvphXqxZBwX36y9kvFeLfohWHnP43bHdgZBE5NhSz8m",
  "key20": "5d5UMNqQSwKQji1ixYJsfEFXdiPtP9V7x1dKaF6yM6ptEZwH4ac41KaLKThEG4H5AtZ3jtV1eQyGkWs11dxVcyAx",
  "key21": "4SWTiDdpUuvyhtUKPXtiKt969t3SXzBLb9S4Se52mqg8H8bsqhCAhe8r16Sgkn1kEYDKvqYK6vq2aPjXQseGAsyg",
  "key22": "2mEcqspTjhbBM4Qv3hMU2Whs5DoMoU3uzofgdCjpUucKc6Y72McFj1YRMuTECQjcF5MEsc4p7BnCp9ikEH5y8BDf",
  "key23": "4PRzu7gWy8JmeqawiLCZ4kmUhe7GupUGDNPePhzQBQkHFcHyjSZtwXZkJUBL1ihDy8mBhijF5mGRtFjHrGGPXzXU",
  "key24": "YBrcZbWMwepadiXpDW3mRe3tPcawfW5bEXDytnJiBRzSnHaomL8yntuznGqztNtDnqRSyuWrJh2NyLbJ5zaL1Rq",
  "key25": "3kyhxM9YJKnkBK26jAB9pU48HaS89z4KDbefeoukdMyL6tKnp7fartcYAw8rcqdkjgGzVQULvmfwd7D6ohcADPUm",
  "key26": "2yGQcQJJb6FiRibiYq1Po56Uuf12VbyfmE8Qw2kJFhX9UCD2DwQhtZcuWrhMxfGD1fAa5bo4otNwcF3iyvK12Rq",
  "key27": "3ZqcqaBCRQQAUCmNg1GMEjmm5V82Va6uao6kbTESxPSuF2CeLLxskR6Gv68mrZwzMsqxkr2CRfUTVDJ2PdSa14kK",
  "key28": "6HFcrHir2GkriHYkivQ8fXV2oQGREt2KvNPuuBZBMCUyYCdDtSjMfFivU2UknotmpprXt2cetD7yqBPnnW2jPTy",
  "key29": "kgbNQpnnZvBdgST8KEErB6VpDUFqc7WnVSAQpyMyVdmddatD16qTGUqB4sSM5Npys6kuG15t8Ft2a2dXQ3Xq8ZZ",
  "key30": "24zUStqcEASpKtxJZkyHE2YpEdfsoT1Gy4kRBexVhDgYFUhrnQZPvYPgUdcqj7wDxeQoBCPjCsvmBDnwDL1WLgTT",
  "key31": "2xhpiFHkGJrGpCR8fL5dVm6seskrD5ebt1HmC2KBJVJL7W7HRCqFi7Q5WaQ974HUfmE5LEjKxncFh1L3bXSofMsa",
  "key32": "5JKRb66heE5ESgGtUsggzgnbKjW21eL9h2x6cQnmN4imek1795geAJaAGRYsceQsCDiqC2UAwFrY33JQEH5CpyVE",
  "key33": "kP9F8BvdREni7GvSKRAQyxTKqhbu4mn15JcogUUifBbsRAd84Ajt9NyJRUdP8Wu2At74jutDNVvfWpZ33Mt3cFk",
  "key34": "55VrPBU1Qe4ABtrdpZwx3TfskP9fRwaxwTahfcjZ1BEE6bZwGCxwhDEjx5xQkLond2cnoGEX4TgcXfMfpLRCrd7x",
  "key35": "2GM6Bq2j2iyCoMmu2Vj5nj6Mf8cuFjuffJtPgzMvtPE3Egjqj9xXKgav9u9bet1Kw1kZu62EgrML8NypZQ1bqcE7",
  "key36": "3rvDDUEkNax3UVpqy4NvHfLiV8t4QdWPRcFF2DnhneuDHPDsTbF99qY1Bx8B9TS9JRJy5eL8HrwExLFQHc6Qr4kY",
  "key37": "4EnKMtw4Z6C7JMeJ1PYorRXVnF111QpfWvApMpujzUEYagcSLLUne7qm9ZSN2CV5ixAn3MeG34mzRNbg1MvjH5wk"
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
