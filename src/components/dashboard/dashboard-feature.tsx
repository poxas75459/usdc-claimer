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
    "5WBNLnWtbPtcT9thKCvi8rUswYYxQ6ZpjstQuxiHZ67fs2t56UwiCrUcQHVwCTYCPjvtd28cHQtW4Z86tCrisKdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZyxGqneYvVyvoeuDZ7xvyArUxfCtpmNGHY8pAHvW9EhTctMWxJ9A7W1ArtUfwHTMJDi9R3XxUTa7j4sDXGH1qT",
  "key1": "2bt7R8p1LgLVqsgUZtwDRDj8AJ16okJXRf9xWsip2vL4cyK4NuNqu13apCc9jzN33yjeqqrNWYZNVw91mL9AgzGq",
  "key2": "4b2APvPGvDBwCfqJzdKnVorkG6txjwmXa35BqDTNhRKLj5e4g3maWjUb5jaov6zwGod58RsJkQWTrne8kja5JsiL",
  "key3": "3jbrALvov2HY6ktBdZNBR7V8vzD1P95pQbNzau2oouSe7g7wHA3qJpBPn38jFkj7ed4rTsqmjh3znEv9qKS3Jcfg",
  "key4": "4xHmbwTwhSWrqzY9Hdbwiy2KGDAKYf51iM5EPQJgBh3AkUwj5G1faJZw8RocaH7ynSy4eCnQX1ZiDH8i7PiqdT43",
  "key5": "4CjWLPRk2C2kR6SLQF8bpYpsGGwvBLZ9HMCfCTq1mviS5jYk85kH5ShVbx9uHY1mrW81Ajh57AmMm9aoMY1B9uxU",
  "key6": "5kLPCtqc1tAcoHN9bpvQbYQKHfhzsW5PQvHtcS1CaRY3FaRfPyb2js7GMJrWyXtzP435hymvx6da7V6VS5zxJsiD",
  "key7": "4z1T9XQbRxf8LxaatCU4uHZsLQFrLVm8uenzffBxwYbCTbkCPbuHPgU4iLCQzKiXfEyEWxvQtDD7L1pHoN3n8pKu",
  "key8": "4DQUYkAT5JzksAoonvKgg4YaLGsc9HQ7La8XtttQM7FpprVahZZGhxbkTW5gSCx8jJcFrjcsJAFwUUAs2DB6E3UK",
  "key9": "iG82sCtyDTE5bGJebBdSXoNFQ8rbWU6Y58zkxCKRawzxPAqMv7UMm2Dga4H3Sog93E1MnFR8t5pqJSHTnvhwVJz",
  "key10": "5vci2WtBCyr3G3MixGmCUZhCWVKSSVJYovdioJP7dsEtA4Fh9srfU5Qr92V9Qr1pQV4WktN783k6bJwLAWQ6cUn5",
  "key11": "46PVrikjpMo5nbBLtEF1NfRasjfRMFLVH3XR8fnuK6Tmh8i3BGpJeQCa25BULXgQVnqb1w5LhgCodv6vfcbmbMMv",
  "key12": "5RwwtRs231dJ8maPaRBmicUjSpHqoSkSEu3JyGE1yvpv9MKAKQ7UR4mXf5QgoMuuqZPexyXda1eWas2Ko8AT9Yj3",
  "key13": "56UkA7KriESUqt1pjeHgc6M14YRdLgeVi1YYG6qW9yjAEeGxMtAgU5wnStDe1YwmE2weqDBoWT5pU8PXZ4MSPgwi",
  "key14": "qkef34o9Z8qtH7VKSX9EcUM9FEJCnd45aLQmi9RvvPVjevnhRqBbLmjpf4evEf16jf119pV1HLUiViZX5Yktpzo",
  "key15": "5vpwgPghj6MvwSLZbdRVDMs1jDUrBV6zRNEbub64xTAn61j9WCLkqTukMbdtBYrjodzm7P469AG59YW2K246tiye",
  "key16": "45XLHfXnSr88N38iNAxCGPLqoq5fvXKZ24SSapz2xRTEAsJcJtxxeUh4sBRB12ZYBWhKtrzGH2S7nJ4kAHe1out2",
  "key17": "45d28wMVFx95FYWegaMxv3QNW7UELi6um8gwAtjjxDyuQGqojSgnryDjUvpBUp2r7pZDMJM5YFgehxLR3HGQssgB",
  "key18": "2ryZqRaEcPW7chyxu2A1W2rRnJMGAGhHh5FkAQK5MAcAdBXayXRMXw5xJ1PUtVBZvNLezPGrCoPmDTWvn4JsDa2u",
  "key19": "5PkicCvnbxbnxU6tEzNqgxXRSdUjerpsMWPd67CBkyMrpgkvLEyEhp2oTR5jG48tQcFVhGxyo2DCc6MDGKZz9BvG",
  "key20": "2rDSoyCzHD3uRZRv4FgxXCKTAAq1A6EJPy9wugDeY34HkuGB7mY18qKsv9GZtEhKxQVbLLXu8MihFDtaqmMfSyEi",
  "key21": "5tSaGZBKCneWQ2btzZjR3rmRxQN7rdFrxAe3QhbcaKV3dnzdrkDpSRtH49MZdJa7pPzT2ouUqGgQbwMV9teCQeG6",
  "key22": "SjVJoSWg8LoosbJ2usWjis7GLZtzCTaszjQdjQHn84KWRaLndy5UgaS9JzJPrC59X9PwVmk4xcLPjgL4atZZydx",
  "key23": "4Qiu3az9chzi3zHGiMA3DvyXV7aqoGStuMJHGxu1R5sBfYWe2VV7zT6kPvJyAC85BLqqCrHcE8nctcbU4m7GwWWD",
  "key24": "25c455xUVVeS1QgwNyCBASygybRLRPo1PdmCynYCpzDm3WkXWMUJjxzrusEkP85ebZ3xymgzQExzu57WKgJHo4FS",
  "key25": "3YhwxMSrMD1fZZXPdv5KaHBHScfNDXqKX7ituP7jPhEyrMjpsdAVW9HemgnDh35RJh1b55UyAQEB983jjA3geTHF",
  "key26": "4P2ZusSYPdj4bR4drSBMr5ARW1QxYcDL944ycqAZ4BTqaQSjcxrVsVEghZDKQRVGhexPzMjBDpXHdUeSxDMHYUXQ",
  "key27": "5G14Tax62HFeqQFnEPSvP9Dx6jqshorCP2zjcXRHmDbC2iT1XJ8n8R5LKgyorC5RNqGshJiYrm4r4ZRvTdV3ie2H",
  "key28": "5Qnntx5VefEwt4cF33QCgb83zSDMpk9LVEyrNeeqSkbChB4yBgaLp5uhfM1r2mM9dv62hAeErQAP3K5Lz89FNifw",
  "key29": "3ixrQM4hHtr1W9qfmkA3UZHpaUdLT4gMuYT98kw5ZP2UbPrLGfTePXrJCZ3m9vfejuRjVWdKpBAg5qoxdqkwN51X",
  "key30": "yEU1dSVsReZpAn52d6eh2NaW7pSB5pXWsVamvqYfd9YXpXfK4jzcTYX3hqCnZwcFm1ZsJCnAVLU5wxs8QWsLoya",
  "key31": "JhaSpRkiN2nSHvhFdVWUcyCc9Ngcx2hQyLtbSMbzHMG4xrFfawF1WiTk8MHhJtECYCiqQ6zvrGphgc6cX7K8o7u",
  "key32": "5wq3JztDNXWBr3oWtHhBTcL3BL6yMZCQb7Say8UghHvv2ZU8t2nxZdmuLhmfhLSv7i6zCR5X7nGUokNmwyoNiShG",
  "key33": "2e3FAnmVJcZXc6UjU6TP4ni388RAv7hwjj4CPMW4DXswjg3S8Yq6YEMB5W8LxWZx4tL6FGA2VeMsrNhRE5fFgrLg",
  "key34": "4qRDSowWZ42vvP1yToA6knTQfpDqR8qfevbXW6KyAUSDE91JSoHXYadaZ1Q93KXmf1XpkuxqGJMWZryv46t4uSNR",
  "key35": "WC6m7pHqogyn3hhF7DioweQMYD3VVdPSWZVPPfUdYJLmFTTbWgq3uSyEJByFGBqw3EHf5QEbLDwxaPLCWvgxbLR",
  "key36": "4QmyMefeF43wJ18LACXbFLFxpFKVdRSYBuYbnig8HUkrqKHKKcMSCRqS8SfzvBnS1bkQGN1FCmL7ZjEjPoCuxTbp",
  "key37": "3Hr1SpREonZqNHLFBiBX5zVU9spsFKxeW5FDZeqvrwUFtZnG8en1yHXey21WHeKG5UUawLbmjGMxJzeovmDhrwHy",
  "key38": "d8DEcVUKFuY7EcLjuvwhDPmpjD11okdXjGy2wphoxBZ2rr2rTphPe8S3HvE9Ho9CxnpX82saZdQHHCXCQSUEg46",
  "key39": "4kB8N3Uo1m1mbHnqcFXkJwKHnkegNWJzrTwBAVEyZinoLQkKFstQWZnzPQgcYWTRmbJwStVyCT3t4w6ywe3sNtYp",
  "key40": "2dt4EcAizceEqXyjeZmMLVTumFURe9VeWYbJAhxtMtwmo8vdMv3YWbmpq5NVDg7EZmSouMMRdTpyV8omKDz3kGx1",
  "key41": "YPZYZRBG1596d271aeqC72mqBVEWg2kndaHKoqa46eiEeuZGPqixPDmRtNc1qyGw2B61o9pvcPsVyqjLLuNzQyx",
  "key42": "5rRmYyW68JznKAMxqhL34SLqWGjJLLrogi2B3nnyCYToPYMQSHanfbDPthepZigegrd2dtd9yxXb7zc6cbbrDQnh",
  "key43": "37uL7EHLQ6vAJeCCFFbWLdb538RufcSr6aYGBuPqHscXYPUR9STFWLdsmfzfr5kT52WDRewePiH99BdXCwPufeLY",
  "key44": "4mg6GX55kixuqwHTGqx3NPi7MRDLyLJHg1CA7QNrEupxsYRi3sqBYV3K6AN7bkMmQxSmV6f49EJN3J92mgG3BV2S",
  "key45": "2z5HdLoWDsuccZ1HXhpu2EQuuVxDr4hDRq5kKJXVcRBkpW63tqdMgRX4xqeiofpjhBQhZsDszyc31duzAxCXVCbR",
  "key46": "2HD5nEWAMmoDfr7F1guLrqYMvX6xaMBQSXtbtjSGmr9grnKqcxNHnDmv1FuZrCwivrLeQE77s8GANJ2gNRjr4oPr",
  "key47": "24keyj5CSXDWWivqhXs5CJzKuM6rbPXZHZgHW4k1BrCfKXFtAkPnLGcdACH9YDPJe7whiMYYnHcZ1uPbgQEPcSmu",
  "key48": "3kFnoEnevb9ijfPkJW3LVSCjzv2292z5wpuaTJWUXqyct3DVWfpwyAGsPR2HKcgxmBp5YTtenEorcQ4bdJw9U5ar"
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
