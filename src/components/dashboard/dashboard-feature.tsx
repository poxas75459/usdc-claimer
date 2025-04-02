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
    "4CVydjGELtxU1aa8uTyprARQrt2ik4NUvExajA7Phvk9ypJnko6kccH7UFmEEhGVra24sx6aKwMxJdNfV8TLw3LL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iYNsHXCcodUgpbojhKBx9LGpHWDGA3UwyJz8PTx6weCa9UU3Ft1q3eMVKnsBgHYSHLQEaAxyMykw4EgLTcScSDJ",
  "key1": "4PWVY5yaQx5uyDnD5J8sF8mgToe3LJZtrDSgswvKMU6DEvQwHdMt2WRqf7R92pbAeZPLjoSk8RbPyNQWUBAFCjBq",
  "key2": "2i8o4iLR7zQk2GokUnyVsce7TV7RihaW3iBdsbwDHebBgAUoHcbKf3R2b4jxWCk6azQuhdp8vkJE5imF4SAwNnhB",
  "key3": "4kZV1XdiHhs1EgyNRYbwDwv1V5o1isnsSgz7dDwHVfYyzRAW1nKoRHiPc5VXQuMcPCyH9k2uJo3hNz4U349UUXaq",
  "key4": "SkFBRsdh5SS6uTs2uAopcFweSLEBHKeqJ1kdYiRciUMuSGjDStWX6iYsqSDJA8QCh19uiwL2S19BbHW15bjoNT5",
  "key5": "USHZZUoHkn7pFnDYnLGYqC4ymfin3ipEn998n5RVZK5PEuj6G2ZaKBxaDtLFbDbLrreEaAjCBeZb5oh5qkPYnWx",
  "key6": "2ua5KHZGVVGdDQebR6QtAgqB1mzvEeL72B9vZ3ex6JgwkZVvuW9UFVEEqafMQo7uZy3BoP2wYBNtsRZxLUvzhXET",
  "key7": "4aLYekCHQZ3vxkcum3XuUfxwnjeHq67TDfySe5QKkPtcYNnmZN6Ybddpe88iUi3XVvv9iHGMbGFLBNwbsL7y2tTb",
  "key8": "23VGA1jjVefgTNjqVAKp6dyFG9R6gmCtjwARCXgYXCxpL5A6Q1mYQDXJPAMZvr9VKAMGKeJEvXYNbSu9JgKfCwo1",
  "key9": "5WZuxsTzRJYHUqcZBW4XaoNUZGYU4kqfsHCFBBZwa4icomirrGk6nrYeivnEA9TE2r8Sq82RX9HRp7jNZUJ4qRJu",
  "key10": "5YCkviyrzRfynz72i8wMAHQaRhx8KZgPWjxHkdC5CFjt3znzCMqduhdYmBTRkHgMmfJLo5sMVLyPExQHB4aTWdr5",
  "key11": "buw18RTmMiAdAzneDrNoQ9q1nbAWFCLqje3ekZW3iXRzmG6c9iiGuFXCYLJcxCLcSeBg5wTXDgewPnCv8RoD5jd",
  "key12": "2Ln6dxj7N7ctyvo5SdN5hpYmDo3XQct1qAqfaf3pvunw1XhHtW7ZhAkfB1JPf9miTQu7WYaSDvy5QXh9oRDWQgei",
  "key13": "3PF3gdZqeUeQp3ayZPnWWiAZpC1o5BkhdY6LyjYwJWEFFPDtfsARqxiZMGPWFhkQTo84gTXh4hTgGSZV1aUgTbQX",
  "key14": "2f6DUtwRQVZHknHus1GuodNRNKCVziqBr4pzgz83dvjeTN6Dbys23JTHFWfm9E757oA67AmYuevSmMY6W6E3F94G",
  "key15": "8XsKTUbqg2xvNaYNQMm5B8dJAk5CrwuCPBCiMzUmY5MSzjqYwmfAywkNMqnQFJPQnx2ehBx4qk58hXLcq7pjb7p",
  "key16": "dBw2AqfXiKww12jsoF9xcFnf1UvEQkdn1pZ4iFToZX7G5N5PiDarEVSeRScKjA6fhpcdRaSPSpzQAZwhs1JEGzi",
  "key17": "5GJ91ramr6JubiE22bfWou2D1caKTSs2JDcU7u7ghjrLocA1S49gzEZENv25ZU6qwxqdqPDWztg3fP6DLRwcbHAh",
  "key18": "JrCzkHijiqQkeTefYeVhhJtkXQ52zky4VeoAXjZigvdSxn9R29wyFLyYUwkguDnHDS58HU5WrS918CEjvfQQc2n",
  "key19": "5pVL3AVPtiEvXuWGXWQJTx137rQ5RRLC6DPDHzpci6S3Y6MKuZ44tt2F65HivsLEWBdXM9vD5UR29Y4ubgAiAHVe",
  "key20": "383Q7fQZTQkrMgUurNzQgXyZgzxtA7Y89KM2pFMWtQrfzxTe3WqtxZtCDd2V3io9USUGmC1CwTHR39qd3576W1Fv",
  "key21": "2JiSZ7Yi6uVqRN1yRJyQL59EhPs55LRZuMxSTkAEQbtEXrzAtsQJkoW4rvc74shqhoGuvs4pP88dFn3yrcAzEErK",
  "key22": "5S67YebRjh8Co7bc2hhyAVgt9g4yYuZcwxj7W7VPntytCJRJ99gbgwn9HnXQ9CgKu1hjy2PqZWtBGKhTS9bTJdAs",
  "key23": "3yYJ8r3LwxdnLzwkK6qjnPZA6fGDD6bE1z5AdnD2UhCDYdQ9upkhwhgqW3ZxH5VAwczv2hBkEs8q8U74Fig9uYWH",
  "key24": "3Hsu4i9rQ6PBGusJgWH5jFmANrjNnxAd96D6LhWJ2YKZRXubAFArSzYsB75Hv1rJJbQphTbLVR5UyN5uh6okCC8k",
  "key25": "Kqkde9FUN5JVhjWJFtVYgpruaLLXnVDWWBhtC2rmtoYxCKeWWViJiz8fmn3W9cJmXMSgHefTo67FuSLFmycmt3R",
  "key26": "4BNCmR2NMAdqK3bVHm6kA767ZphqNfH21G46hCdFkNkMzDxC4YJgNwCGy6eRSSuNUPHRuDBnxMPUbnChH9bBLCbc",
  "key27": "5dJkno4hmCnvi6JDsBTVkymKDvmXGz74S2MwkdaZHJf27xDqzjYkDF7N918Q3k2fgX56b57jsDif3SgQHZtSNHG5",
  "key28": "3fZ6zfYGVtaMwYgwNYS1iJzNvvzmHnJBqsHdTvebyu1NmYEUmhmki9fpp4NF533S4e5Gmna1GDAHRioSdWYfkygV",
  "key29": "jipeupr1XFxMyrj4r9hzGAhAYFXXFQFdkfLgc4UfEb7w94ZxNyuRJkSZQYMcYB6b4GKvdsFD3SEnhCVujzceS9d",
  "key30": "4dCw1QN2UoywA4oEB23MKWxcsuE4G8cqSBNPBHA8zsvoghT5veggAKkqYaYPSE1NVSZsQXVBt5dd2XViKQsuB3EZ",
  "key31": "wFC1cqYcCvYnrTCcpJ9ddvDTxxzQLJBFyTCQ7ZQpLGbbCdBiHGSkMYTCQwz6hKcMf8BB6VPuBy83RudhXkSfc9U",
  "key32": "Zy8rsN9nT13ju62jfEebTrVBCx8tRiczhWrYqKeCG1ovArhMWBAcbYUPnPWoaHorcj9hnNzwUJP7yKFVij2aZ2U",
  "key33": "3Y1MQPfkuxoGEBqJ5G2GhQTPpY9d3nafFBSUkUeRaWKQtEjyNH62PAUFsD7KRN4KbAqT2hxLrXavH4eCJMitMbH6",
  "key34": "3AH9Yb17ZCQJ9cfdBQUsZVC9k2SQS4pk8Hyqo7zuTz9rrWMKHyyUjdtqPUWYuw95bhqx3XyvQYujU4rrfikADhzy",
  "key35": "4LTfAzKDBzYMKjKZnUbSnQjs5xrM4JL9DYj8nvaRowmM72tzb2kRMy6y7oYJG9EEGkju1rjLSfpqDwMvqGGGrQT",
  "key36": "54nXBjMRsbSpQwkPF2khqSDvBWKZWxswSrxuisCPPmydgyfvQEz1PGkBnYnvziUjYjZGF5q5tGeHDpwtGqr6jCzq",
  "key37": "62Yz73b8LS2u9NeMEniuyABkYEbiuhPVzFXJtWy7Mn6fe54NRRuh68ySnvUdVUK91TctyYUC9USna4hiG1rEN242",
  "key38": "4DMiWtgTN1CYJDQSkKmRgejzssVoTDJb24DLLEQAS5pybsyyMgQ6x8kTfxSj1d1SmmgbrrCHAfHnTrXFeoohh27F",
  "key39": "3cjVeAPFSs9rqfGWnKEFyHoRUVJXqkXwQWx2qeuVgsHXwgg7UGh8PMXYLwNeXsP4ZEejbeP6jrQi6K3kKw3VkJt3",
  "key40": "4cNLWo38Z1yUbthCZMBjBNTdtcoBeLpCTfP96sbRuZshs1ptDXH2gRTb38UBCnRAJWmg1KEasXX3UvXUpg8BNAtW"
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
