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
    "3GjuCk188DQNYKeBdAVkLjisckD35RDVQPy8DPULKkZCLAbhg6SK86kHsigv6Tumw4EZk7omXeuNQHLqehxXG5BJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gi6p7jv721fNETSe4BoKtwNyBymaMDyBVBGJtYArz6GwMQMkaUfgVjmraDBQFnWjsiyGCqsZY8jjB2voMLY1hQc",
  "key1": "4FMzGahkErjoZV3s71BoTq8z6uMhwbWENY9PxCETW6wPCrxw2EW2krn67e8ysws1dMU1z24Ch49fK8mXS2G98tiP",
  "key2": "4sjAsZfrrRfKBEtud5hTiAEHssrNVkmy2sq9RD1hqvgDpqMcti7wiM7EFLafP8BDeUfJsnF3jZxyVsHcVSRrgvrb",
  "key3": "2QbzYYoLVBiVAguGUWi1duAqFzAa2zicBJyys6bYbJDECaTGW1Ck8zmnc1hocZGq57YxcYnuzjtmt6uHfeCkat6r",
  "key4": "cBceCWWTmaH3nVRGjJEyWXucSmMBNQgXE8ZnsdxspXphNfceAnpUBcQYMzZGLhA7KVARpgfMCFYrq5MpgjXNiHN",
  "key5": "5rqoU2GWiLwyp55UDzm2GJGae568r2y5nBTRu6DkgVnM1dfGWcVrXf7dKtd8YGmQrfR9UYobSy9XymLDPWUpEiX9",
  "key6": "2xSj6KtKEPr94PQoFhNR3o9hTkiVSARLPXWsgKpJK6kS4WHbkVTfMfM3A4PXzrQcfNALLfdjfy8Kg8heH9QzFaV4",
  "key7": "3jpakVhbQ8WA8mALeY6iSsnFWUw5vigPtxjGe911Can1eKB5wYa9fhiXjLkT6J2aidVqJ59GwfsHYD5YsxysxM5e",
  "key8": "5RseXLJeQHiAgDiQsCx76R9GfAd4ixcfbAMW73qoaLzxrSWFqm7DPGoNBjasPYKiKToX9b3nf4Ykfh3TngdZmxYf",
  "key9": "313z79j7rBZUqaUonVgSJFZbadEN5WiwHD5kCAjqsDVL3a7adDDeHGiJ7adezrYfd1rkreBR5m8Yj9Up8BMia85r",
  "key10": "ztbnm8aiW7Y4ZdqEmE8t91b3eNqw9AjMG96KYsEPUV3WhV9F6Q1iNcQBTqBgVVunUZSY7ootpBmtPwYg9gjHTtG",
  "key11": "3ENfWTVwysAyvMzHmDJmeXP2W4BA2eSEGTvr79ecVxr65CAL34PYKZ8PCYRwfUZAVZUwYJTfTgineT3nxGnVSzeW",
  "key12": "4tP5seMAkinyGJ7YFfkL1UfuLvT9ngpufPXzzvUnVwjGuBjEncpymUayvEZwQ46RvioinA8qvh16JWndojXSXBsg",
  "key13": "4WV95aTCzaxWw2UYb7MqDJPb77Stx6oDP9W373tx5B8Fm4AYRiAXvQXP2vSWsyLWxioRBPdnwJA4wyzRJZaSr8GY",
  "key14": "4cm4SwM3RxUquxbRif5GFfbXyVV4YobToiyGK2Uu19ByXijSwuPZroyPobH4b8JGoXaeKG2TbJ5zASVEXtuc3YSQ",
  "key15": "2qLxcsZYRGCk7xBUQiSDUWxrG1cFmxHeZ4jUw9TDw2EZv5p6be25VWnp21K2RYkjNySMX7sr71xby3AB9vyhovcj",
  "key16": "4gGw99C3QXFPk7ZKtMwqMzvwJrf81r8nEXQtzFgsxa527C23rdNvwL5iUitKTW1piD4rtsZMf2y4LqyCcB1Ben9E",
  "key17": "5s1Mti4k8M8zYSvmHpaPiXDXCt5BpHmihQepvcfgKeiJK4EBmqgNqPwgXukcUAdVFpW7cMxyESy1uyedZybTqkf3",
  "key18": "25sWxWguH5nhoiLCN1Px2p5UmyYBZVdzBTTUBYQpRxTEFtaGp9R4c3s1QvuQDScsmpwr5QL4HuygpSH2RsMQtSN2",
  "key19": "3w9fkM3AHvZTKrvuUpXPXeXtkpj56z4NQ7f7xyCsUDRisuiG3H7xYhhAdCqqzkDSyZdHyQ97TS1dBGB31jTTkhRu",
  "key20": "5Yqmkets5igso3GzoURQa1xEshuPVT5cUKk5fwsrgUSpWVLJSAXJfYtegKV846n91r4hqv4d9ykBC41PuyhTjjsd",
  "key21": "5pazPNgyw8dXeAJVd98u3zCWXhEBgdTCEogJzBEwP85dyM9V2H9pemHTLh6YHerHJzAaF3mdLh4fudW5WMuT5YYr",
  "key22": "3UdsLbHkbeyjk3RZnidiTHh8uEnHYrZymXoSJ94cDCJUWkrWQhP8pnApD9fyFz6zyp9JJwdyC4CbxiPjH2rZteeM",
  "key23": "2KexszoanKxBhBuJLmwuEwtg3YDkawyLCuZqjmnK3Jvw7tPdZqv6a92XVdntH59HeQ4voxy6q5yg7ka8QgnsJde9",
  "key24": "5ZJpeuh552AuLcNoAZvGVyuRU3wCDhNuUiMpvLwiASvJy4i7ZU91dLKb99j6yjmoRPbMvWjEtpUCrV73QwSyZRQo",
  "key25": "5G4bmTkUhSXTw7f8aBecvaznuTMFGczbrigrk7vDxF6GMaJEgFTkzpRemd5YomgxoUhpLAuiwEqVvzi7siVUY6a5",
  "key26": "2WKHryKE3T5zTPHgVE6vvANfYPX47Skiy6Bs9jNTJ8NpHKEGk2jHJzTUmtpj3TUWnU5dEFyJpKo4H6B8CVxrQ8Vj",
  "key27": "2jMpB2Xm2RK96iRCYvixeFFT3yzv16anBJemYbZmvjWoFMMEtZXSGEpYSrW4wxKkM3ngf9yKDqBrKZ7Q57kHR7ev",
  "key28": "353a6ozc27yKrq96gY7jyY1sP3jhPt33mnKQ2w9AU1vc8KhXq1GcPK9Kgn1xrm1YaiZCmCiKHiLhK1LVVY34UJc6",
  "key29": "2Zuay9vXbkEjFYEYUN7hN5JZSLv85AEvc7ks8t7ocVj9FLcoZrEv4yYJ7M1qFohL9PkBsJVcd1kToTNfE9V7RXN5",
  "key30": "4oKhsjixMdQjxwbMMj4ddGcFq5BiHADrAX5388it71KcMiV8S1TeP3KdUTWKzpKTJXuSKH9713p7PJAuCJdBwm7x",
  "key31": "28D2XtGuzJUMyi7eRSQE5YWSN7sv2m42Lm6e8EMq9xsAFHqVr8qTeCL6ZaYYBqCYznfyfMy94N7yspt9gRELccxa",
  "key32": "3RhiaZ247XHc3wdnhYjCVcM7Px3NditMPRRgh5L7kwLCHg2CrX7e4wJwFdXA1MVChTBQcYMdVsmNRVF1k6PV2tsS",
  "key33": "3MNGF7VpPfqjYj8Tk6X21UTg18VXAjjDE88DjaWavM9gMxUjHPTvnUvcFG1vp7XjTamRBvV9L2a8VPKwaqL6GuF5",
  "key34": "4NYo8y2xPjMP6rVoQFpXicXTJF6JUU5rSzMb7tXWHATwyqchg6ozDbyiZ6yYFfdw563dLVCuN6y1C9uAg5f5o12y",
  "key35": "YtJnqkiKtbfhgkegYZzXxzCthrRcBXkV4NcxDQCPFxMBUzLqMoGi1RXqDf23tHRehguuf3CdSu2PKb9gxzbwRvN",
  "key36": "oFtMyuff3w6Kaors4R8s2e6xruSjTwuBQFTgq34xRfQPSSkP5ctQb2bgDQJBDPwZJzswodzTJWnWJY6z5Lju8m1",
  "key37": "2T43gmCBkKofmePRTvvqEjNni35yKXVTjsCnCy2M7vTCPiLZL9VxNQnq7gZf6SZmt69iYYzKbZ1pD5FJHBfhxv21",
  "key38": "TjVhCzVDHah5aEctoB7CwQWxo1U2W854DKpTrUmNSVJzCY3n4TdAgYV2EpjCGcBWXhTpQ4pFVUBnDPyJ9eU4RJN",
  "key39": "2tELcTXqTA6jXrSR8TpciGLPinfsS68ADaskaqEF5bfETZaBqhUxsQ18o7CXSsZE6h3QemSRDM2Lmv6jJxaEeCpx",
  "key40": "3TST7Cn74EwKQWgDTav7kX6Bo6dngRgstc5snBhnnzD5KTEUA6WX7P6u8uQBknGxefj7J2QqK91GdpKcgiA65eit",
  "key41": "5Vwtcqtt2XrpXsfvcmjWwtfdyQsoxfWtpfE7XmRuekkyvc9bhBdou5VBK6goUzoTMnzgheTiJHLDxDhuUnNxncvE",
  "key42": "D6ZH2P46uTLAySg2HdL3NSsAaprgpT3DPCpjqje2tU8CTpepX7ktotC5KF4wVD1x4gSm5gTsYW25bGuAzUEfASQ",
  "key43": "63Z9e8BDGVVNguWLJVkQuRWigdRUN5vYcsPTDHotr4fD9m8UMJHyTWk9MLhNmjS23eEqVEw8e2kZdQuZe2Uw97z3",
  "key44": "324ojctRzo2yEbdMs73uFskETZnBxZniNPHZ1tZTQJivZu4UVzNuG6PoeHLKfhkuwAz3BQC5HGWQM3xUQ2L555t8",
  "key45": "2jpsqWsUoSpecviZMj6qun9tQMXy2n6jxo8zTfEtqeHcCojjaWsCvjx45Qfaw5jbin8hCe49kgtd59Be5eZH4NFF",
  "key46": "5s7fVZVs1AbWsY6roQgdQ4JfVeK11xjDj8TVWXmTKuYW9gqQ7372Y5ctC3BJ2jEahBG2D3ePMBQr2TGgUbKNqyQU",
  "key47": "4smLbN4YfdMK2YNuTRH7YJC6hwJiP5DtcTrhGFDTRNHQY68Mjhq8FsGB2hvKPbnooszyYCPms8j1jtio22Qb6vNb"
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
