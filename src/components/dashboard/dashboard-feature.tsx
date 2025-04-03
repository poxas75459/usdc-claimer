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
    "5QMMznUj9PPCUVETdXsJU569Jnh3eBVaZxZg37NP6hqhr5GuspNs3PXzGqmeDqsp9b9HZHhUg3nwFyttYPQGkgcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FqQFFCqVYwXJmwDG5wb1pAWLhv3P4geHzSQzjmQoVt87ZaWYeb2Znj8vgNTGgubCEsD7rHnyAoQ22hC6M16Pse4",
  "key1": "2wPVYFUCbSz4KunonorVsHXHXLEE6CG67QLUB5svzcLdnvb6r4L5yZFosxRHhsqYw89inpzKyhe4hh7sCZR8WjZb",
  "key2": "4TVSUKjfJqKjdp96GNUsWSqNW7BAf2j3sqQcMheZJUvkJVFMyu1FCMLFWG8MQSmwuhbcw7kTRpCZ3F4n7Xzduzi9",
  "key3": "3SPjdpQxMYXXw5eTf9CbVCNSVNRCcQKuAbDhkoUC2zg4sG45DjetfG6dp4jGrjsaqvorsUdhNiu7x3t8GzT8hLMb",
  "key4": "BGvdHM5sPgtCtsUa9dUkmW9A6sew9gSc43zd4kmRZR8h44iFPRtBQFh7pZbgV7844k9papjeVSfsS7RPAegYzvX",
  "key5": "3LX16LW7sTmv9P2tcK4FDw9KuemXnUAWe5B7Qr7KQsrTac37pD45ojojRxJaPJrjFWZvusMzvZjGQ2iMbvkkcJrh",
  "key6": "ub67BMUXupZpaxMY4Asq9KMbAAwCVUomGgz7pKPjN3U7feZcU1VbhYvoyqnkB1QeUKdzuJ3BhDyLZtarJMEN7cc",
  "key7": "d2joMoGTY7CQH8HSr2tbbcvmjGU2W8197BBLWEz1wGWDHUmMTma5prQtNBmzmwjXfAxLMU1MDS2qrmHVsvg2xvU",
  "key8": "4HdWoPnGfAY2AfnTRBwa4zyKApRxzscgcwVxZurEBnFBAepfDZ5ibgBk5CUpYzLsNXyiHZPatpM77jmu8mR77h5t",
  "key9": "45QzAaD99Z131dyPjxBQDn6yjoD9eBhmx7rMqiSd6dZCvLKRhNLSUiU1EvqTuoe2jC8ScmovkmUvVTkebKvhrgYK",
  "key10": "YaCoyRY5WNgdiMHTA7bPztdTW4uS6c1UYph1b3Z2j1fE9Jd946WEVvSHK1waLArKXGgvkBJ2p7gWwryUFk6E1u7",
  "key11": "3ZqgQH9iWq9fjer7TcaBk3S7yhkUbNuYc1v5hvdE6mAftipp1YY2Mm5cxCkQHTnrcYf6hfBB8TZqWmhoRhw4Bqhk",
  "key12": "3kyJPJ53UNZs733RMDgnUHQQSdeNWotGdfCYGcCaudjRRBM57yuoo7KyPHCHbVpC8QkwtEMSzG7q7oUKqtAm7vaC",
  "key13": "5WWcWTubB7UpfFiJ8q2bDQ1Y645KMfA2eMeYwgnUaNkr4trxCkS7do87cpLbu8qTznck44RpWNHTBoZRsc4Ji4fJ",
  "key14": "3EY5ntkx8nDMyM4118ihkyMFAtzqBKBnMp4mBNDhHpvLCNBWkR7tvduPphQddawfD4CdfmtFPwbgSmqq4ti6eYzb",
  "key15": "NqtXEHFnhJ2ydAf3Znb5njhTyQaeP1MAjywgzELf3zdTsmfrQACAV5rATWU15a6i1qCrCtUCpmj9ck8VHJpDUVh",
  "key16": "hkn6vfCRGg7Y6GsL7iETh8QTWLQ2wKdXYffnGix7BcaBrsNfovoV1YtfJKCL7gRDjypKJ8oD5nYVcuoEn8FnrUZ",
  "key17": "4M9nGNE4jfwg162U2K6pr9GQe4QSWajPXGBkDTsSKDbgzre1gE5Gh5cbB3QGeN75LqeS1pmW2EkTkKjbGKF4JEiy",
  "key18": "4fMXADn9z6oDyT3MT8HenNDwN5vGvvmDWkmj9kjed1MjBQz2aqb9kKN5r8fDrwLATLEQAk2sYXELMs4X9ePbkHFm",
  "key19": "4tSYZqLHYvbkUnxzQt8tdrJKomK4zPYKbpZ3dEwtimUU88hRt5oLTanoM8B5pNJtkYe3SmS1u2EDimydaZmhm4Sn",
  "key20": "4RTrMhw3fpSnpyjNeAbiYwDvRo9aktcyTNaNPhKU5D2fw7V8L3CAd5wqqm6MXUi2quERuxUqLRMwCaY14npNgX7v",
  "key21": "62F7UZk3h9zYBvWWafRGNTNG4PmtcqqXfPqzDmnFGGFFDAvUakLo7dXJVip2NtaMJA4gxCCA3Mgw5cu4w8zzrU1e",
  "key22": "3Pf2ytTDBhJRrorSpsjDRzofE5yzWByd68onsJLtUGHGnJxTM4KrSJWfRHGg1UA4BAcUAKUHyZzU5iBsfWDdZF6d",
  "key23": "4hEoKZrwcVRCfkQq47ZHQ6J5v1GBZFVQvNLhw1TkJTuygu271Lty58x3StMoD6GRYAUp9z2D9Em1hfsedtwAKg5A",
  "key24": "5g3Ts97aLMJ9XmFzh2MQm3XsoP4yZDot3hwLd4wBbRPnqbFABhU8VLCYkeA8TZUPZ1F41N2a5cSywzkaKdbJLBjb",
  "key25": "2sD3W5rPkZbwxCMA7Ck39jvVrdGrUCofux4zmTwqYMEP8LFb5RPfSzkTS5Eg6vLJMvZLwzL5e94zenHk4jv8m9Ay",
  "key26": "ijXiv5XAgrCznYcGK6hRDgSMTg3QZgUNeUkf1s1z9B9TupDUMHfLt8NENTecato4TWZMDJTGPkAmh2jy9bUN6FL",
  "key27": "4dr8bksFvGKsVgjrvJzffjn1vjKukEgdnt1KR4Ube4W5PzxYHK9BoWwgT6Jc2giHbotfe2DL93tzGfnNCGbPeZoM",
  "key28": "3ULDabSe82FsE8rbBLqkhSQi5TGizLEbE8Yy7ENjnmTaqNY9k5yisC66D1f3SALo9rnwEU4zrLCzDfxMVfS7nLR5",
  "key29": "3NHiPtKyCGKN6rydLULKjie1aHvPqGNkyb1QyFMceCtmJdAdmCBz9Vuce8mXRfRtGiraA98fBFAga4exa3ePEM2r",
  "key30": "4J4vzUGAjMDaKRsz3sFQuKcb7AoxM6tzq8p2dtjn9LJkKYzhEEmXL3m1wTH6rWoxcMDteRN5vevidLJfEsNCKyBy",
  "key31": "2KJTcf3owYMr88Hsv5MPv8nn4G2YyQHAYfJ6U5eBLcqVmS8GW5t61c5HuMWVGHwnxqyBz3fqVAUG4efjJR6Xxj3X",
  "key32": "5PTTHTdmEuw1i6mihWKP4BAr5hujRUJmycDRi27PTBVCzF1s9wmxSiTHpHo7B9uZKtwWgjQuRhSTyufhENhQuudM",
  "key33": "3TXKyr3WR9hYjs6TnXBWpby8w3ZZV1d8XEWy66ffvxiu5pXkSzvjdQpnKPiQA5FoHYwh2RB3u3isBGSiMLohVGMo",
  "key34": "5CzpCXLv7Sg8XHQ4fYwnWwfE3sXK8myuYn6oEBac5cFW2g4mGZMZgo69wkvf9mjLSfj1dF8fmA3hh9dgQoUZiVXr",
  "key35": "3QqU2cUxc6eQzvCcLbfFMQk5B7rUpKcuZMGU9dWHNLMby278RrrKRJEsZsCZZxQ1LEzJJX2RCQCHJytwEi5whvHb",
  "key36": "4SUC6Qw6e2VqqxLSKzjFTpfpGGwrxFM6R5JCXuKS8ZXbJfyQde355duDKhTd4wfbS7tnikF31jEDqqfAHifEUKrT",
  "key37": "4JaHhjSpPJUFxcVBpYcyciAAG5Pse7bY15QTJfyM8ai95XL1arNMa635NgrtWfTfTCUoUMYxruH4D8JeQow7yuBt",
  "key38": "4NwMQrUvkZ8MMPXFhCziPJmuDz78Kdo7G7ALnHUx31adADc2DrBXEsz22gXwAycFZSxuYG7tQ1TzM5QbRZQwTCP4"
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
