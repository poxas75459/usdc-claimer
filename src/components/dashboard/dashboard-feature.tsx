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
    "4gwiupbpccq8wuu7YRTM3HB8vFKBHtUCDwRtXtjcva8BFvp9jwUjmvioGt47uTu8eWGLoE4SMpbsuTC7yHsMmUP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4yUbdwNSSWRLxfEE1HyUAKJUxYMzR1uhesgVy9kWu9cFeDrvtfspQ8xiHsBCnk7WY7EHUEYgZDb44o632ukS9u",
  "key1": "5L2HJGxckSNs5YMW1Qm54qLviuN2QzHgTHGY5fF5FTZNjY7uACv4qijxMxRV7S3nJCDCe7P9ryzUYmNcg4Gy6z43",
  "key2": "3NQwjyzFDf9F7Y78e963C39B5JLuLUntApVSGHGDQUxjWkMB2QFs8rMjQcJaQeuxAGTeLZmBTYURozEXERy4c7xn",
  "key3": "2jWKfWKL2S9kkWT85BLiAPqh1R9U8BeCmLWtiobqY1CRWfUSu2ZmL8M2xC1Rsx3X9b3EkiHnGNvR3gJoeMZdCeeE",
  "key4": "Jc7UqT44bXYPZRpn27NJNaFyi6eBW6pFUPybqgxwVbTcAniGtrroHzvNazCAhziddPwjRDFhcLTt2ten2KYUHc3",
  "key5": "5L3zemjiJUcSfBkhg8gN8RKEgZyeBBKUxD5kZCWUEbtTe2NmUcLgzAGyWvDwRejuBJyCiMvunekHC7YY2C9mH7Nr",
  "key6": "64ipXDByC39vbipUFCmgQk7NTUXftVstj7qgftwQxdE8qNQ1mbjGrJA159JKMn6CeASmw6ZbpY5hpZZzxAoLJLSS",
  "key7": "3QCaSAY8esWvkRWPkDLpgaDCLpRcR2YbSUQ5cF33m4SY7aC8ojWXKJLoyU1LWah4TswZpziuh8QFmeKLmrQDWP56",
  "key8": "5mtKCYHkSP5ThbeTEBxRGeDSPXeFB1p3UetCrT2qcso3Wh19K7GMmBUnRNQFSfc768FoD1w5ANTidumAifiN4ewW",
  "key9": "5kCxZvJgVBCq9mTVzBiGFymZXTzVAPHTST2jfmYb6U2Je7Ftuejv2QnEHtpfcSnYzG6A1RtPzWbGJcTSYm8gPzPP",
  "key10": "5FF3qhzRmNp3s4VLZ2bCyA5MYYc1WonagbCRVgrmeYjzU2ruPWJWKvkrBf9edTmS8srBuYSc7ScaQx91rv4W5aG5",
  "key11": "FENnFAztnLQCXwBM2zawgXA5d9a1kV12S8fz8275xALzMjdPS6q6tBNZEdTAL8711GiZ5bzaZaHNT7RdWoR59Q8",
  "key12": "3DAN9Rw725VYJW9e2zb9UZLwnecUuQnABBpD1EnoHjGHwTh34DUYF9E1FiwCSCksfPhbVjUBkoGi1Qufq8rDcjVH",
  "key13": "4DKx9F67KJCdTQVMXFFciynLcznnfZ8FNqLRXFrSqqw4S3eeqon26yCxPhf3G3QWcEEVnPxRxk43pin2WZBvA9Us",
  "key14": "25CUhXRxV12JBsEawS9djBBqCZD4N61j1e31xsWrqNhYthCtgyakVCkppqrprNXmd4tGjpmVf7b3mS8q4xEK5hZX",
  "key15": "5y2QT5SbRXCxSVLmfHgGMi4uroTRjFmP924LkAPjxP1fESGKYtvHUxPCUnpq1mTcxo6dTsB6nf8NwqS5g4vPM4CG",
  "key16": "NCTMQ9zVpNTN1ipUokKjGt5oF25NsUF5rEPGJp3SNmyJd3XQi1paqJekJCfs9sa7D4JZsUkib9CMFzv8A3yV2Ba",
  "key17": "22eEMgqLYk3JGLYHkPrNWCZX2nArAP6Em9sBrm3V5vM8RVrVnJu9hFXPUHZffMLXwgwSM4qbGFHTdPzabZmZawtj",
  "key18": "4zxPAixcsexnQkB9GeKeyf24WdW8VEk3cGncTVHja6FcfkhAhQCBHZT4a7mxTanKEEw77DyWewrdA7Pa8KsnkYrq",
  "key19": "3zrSCkQ6zjd5oNdwsiR8HeAUHsisBvWdjVff43cXbBDYVQ3c2mRvDfEyWYpANxG87SCyVVpRd8AdHnc9qcwUfaBY",
  "key20": "2AtuQ4k3sZAHMnGMP6vzpAerrYFPoZ3sMjHxDoCPFseGJy3FzPDp3vRPu4PizBNmB43jRa71tkhVHJccJSQrdjkm",
  "key21": "qtHizN2JpxC8vuRX2moQEyQeUYqg3coBvyk3sANqy4ad8GMpvu17W8wncy8eju2uFQBUBxgZKd9E1HMUvZzwdJP",
  "key22": "64mwQ63XBgFTpoEhJfNmxPb5T4xryR42XtdXAV4eLGh8EMG7oarjzbfYkKdQWahPrbM7viiMojKyPa1aa3LrtAw4",
  "key23": "JZGBm8qBTfzfjQN81J4mE1gXL5LLxwxUfHwphsj6AbXQf7g1VyBR3LnVt3jDhpd2Cn1zZCWW5SqiGejqUW3G8mv",
  "key24": "4Gj6hR4hoKy5HTtMK9HpNXckZRJHUZgyk4v7PoYgkMP9HxHkBJU8NmkLeXbuguntx3sTdngWyaypDmS3o2r69yyq",
  "key25": "9Cv2v8YBrvEJzfMa8HUhcj3xdGkg5f4jBQgdwxoViFaCE9y93nDqYDoGH9YQQeHP7NdEXSgDfQjf1K8W3XJeEps",
  "key26": "yff7mQHPCcJ7Au7VpaGjbKP2HTmPz4yFxaQGxHPTVNF8TtT1KcGaerPWB4c2EEVspNjPhTiZpTKvKzpYVAVoHCr",
  "key27": "cT25GwmhMbzp66ENi4WbKLCJ66g3wX3zyCyw4VZkL5nkLtWQ1GZmoK6tTcdQwDyWZQVGbz8KrdzHK4i9unRcHik",
  "key28": "7bamdQgY4zPJwhuWwrENT3MLXaeSewM9KADP2h51bSLkL5pfazZMmBxtH2JqXB1gubjUUcWGofnrvmVmfoWM5ps",
  "key29": "3aVRMiXCnzAc8gD4z95HwY3xg6U4aiequszmP8yth5hKoDKyvbtXMue2E8Hdy4tfHApH4iWVZbFxvgpa8r3QuUcv",
  "key30": "Am4vvqbdk5JLeziQUqdPzb4EGQ7hsk1Rb5k1xPfwwCRv4uEicPKuoZuqo8PgtCxtivCRsj596TQXXNcwiXCujyn",
  "key31": "3ozZYTkaoyfiy4eGg2tFf8wfixDnfEx8EtsbkHhZtsUsqvK38MpRGut7FfNu2szmibNptAA3uKhgYX9exgSXbx1F",
  "key32": "5ACqaGC6gctiUGa74hxe99SqQBUbNSTxorTnH9aW2pUF9u2KeaiNbJks9PZDe8ersQ93qn9NskAGR9UdpDmkH75R",
  "key33": "2fMRVvN4oqkcMDgQptE9G9WrZuVRbTLASe217iS5YBhjsr5rPJuT75qemktdDD5hUd4SmPLrUDkHee6mNcCHRNxz",
  "key34": "47pzFFupkwkFX9jh4xTfuBosG7cwaLRbzRADk4ZCoEE7FWJKR1PkTGUovXkM5sXPTcG2ZJAwTxD3bPaMbmsxWDPW",
  "key35": "2KoZJwWo74F6B1Q3Ma61Ubuc6XsFA44ZDowUWmAGXjH7SLXw81J8sXar4r39aidvMuBCYqA1zeiWxQEpeWYr2svE",
  "key36": "54FLuyLzc7R4DwrapNTF7ptWRoBNXKmwhvfrtUaXXvNGwE9rne5WU6v94nRBxSPKmiYdW9z3FVibBZeb56vXqyWL",
  "key37": "xuQNdiGtWXD428ftcCj75K9fNxQntPHBoDMkU2MPhh5sUJmfJyZ1718T3eLdfpBDqfiF3v5CDEQ3wWsQMYAfSsJ",
  "key38": "5S6JvKdQTJnmpzteCkN1gAF9CX8UzoyS1zBV9CNERUQVsCymGXdWdRG8zjKNy2fCeboTnMnxDr7w3QYJMDfA9uuz",
  "key39": "58qouMpaigDTBkpzFh3czW72VxcVxVrRxVcAEymZqNXXvzcoaqWxnvu57e56CKTVgPa1RJuSa5p7heQX8jjZ9vX4",
  "key40": "3KGXr88pSAyU9tw5FhXKNgpvu2hFt7fqdjKGDCvPsm918XgXHXnqCobsbGvCWxt2gjU4uYiSRJDDUDSm5fEqjLJt",
  "key41": "2So9nQiUZJ1RkJm4P7wkU9kM8y7aayXUmzAPiEhM4ttzn88uQgxbNkM433GtCJBbkqNH6mZeFzbDBTF4h8oM7VgR",
  "key42": "5sxRs1rhc3utLpbZWtyZkav3iUQ2RcXQ4o8BAEqWYWNR1DCJmXaLUU6SDQueGNZqvoThs69mxue6Yx4tjB6trxAU",
  "key43": "16kBZSJ6JMwNENhwgUpwgk6mGZt4ZGCkk5Vuv3FWdvK4hxV526gbyAAeyAvMmFvChHffy9BS44cmwJHqftdya1F"
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
