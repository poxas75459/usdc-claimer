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
    "2mR617hjBk2JewGUvQtdMPc5sEgzoty9SR7ERZrxQyZ7VR7fmebMKhVLc3Ym11z4AqkQjxXCN8xc3rb8nZzTDWHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2sT7dqhNwMtNkVo6htsEKVaTPowVRgKg7Z52HjYDtMQTJJaLaF3FHox4utn64NGb64Vr9S3VQdv7gQqyXXNgmo",
  "key1": "2dHnrdRe6tpJFooqkFnnNDtvbm7mr3nH1rgyHpVNoSS3v6Csg6f8Aoz9RJL2o9FHXms8KCxPTDZKmCpMSiZ286u9",
  "key2": "5rFJhmTFegqNJt5TbuDNTrJ3aoGNtZ646AZuqcpfgFG21BVe3hBDiy1PJkASMebk3QNoUcuR9NbmsmCf1MfX2H4T",
  "key3": "3YR4GR1APYDT8cyG8FJ6byFKtVgL9gPNa5gehUYtxdbfNNqSbSYPmCRyjh72h6ogTyE79f7fRhq1HCVYydPSf5zK",
  "key4": "4xRsNsDTXES3GWKByZqrPg7sjcDbbVV77J2cw8kW2f5xUFxGjMs6LdeQhbEnPZZP2kHN6iXCFkepWzj4BPxMhvoA",
  "key5": "43crNW9KqPuRMor6CoaSSpT4sDypYZFza8Siw7QsEVxAAJMfw1NzXGpgKZTdDyvqJjVK3oW2CMYEcCtidHPhHAJG",
  "key6": "4hHn5Hix9So6ZEcJWGqv5bJi3vaxctuwwUntTu21NZTaMdZh2Yaed6RCtuuFZuExzWgZQxugqv1V7NnqAmeSmUQz",
  "key7": "5SgicJEqYF8VyVxsp5wTaBAJp43qh2xJuwwC9dxmAuqHAUuHmtjHTEZRoaiPd6AefvxirRo8JEiShHkXJ5GhEu6",
  "key8": "G13V8gGC6VeobADqaF4HfbA1v1v4PXUb8rYbS5a3fvXdix2qrzqBzXQ1Z8kFLfC4MBEGwxizhtMBLDMCiAfDYAe",
  "key9": "23bdX3mEyzFkePyqpyXs3QSgbEqATxtr569AoGcoihYUHzXBSkxbaf5VVXADKg7wp4fvzoRfA48farioonV8bAFj",
  "key10": "oxvJjTgrDdmH7bJ4GDUMbi8fGfYHx4ppXnJGwZ6MAgWqwrhvZGFjSSr1MVpgkdyhWs9kgqxHKKegr1nYCHhYzyG",
  "key11": "4jBNbmggainkM2tgj3ufshUMinuW6WWg7zwhe8VftxVfy7TJeb24pjGZCxbfLHFqcKUMeE4WrssH8uHSmSpopncb",
  "key12": "i5GGaWmpUWR8ipNETPkq4eN4AvX4fmqyAUnqvjJLBPaa1yfssbvBaa4ceNkQ6EK5HoMiWGaodkGushhgW1N2hyw",
  "key13": "3c9XmsFLnMppnC88FSAV7Q1nRGdyiNSQcam3rfQzqNvSkCZyy7tSZCrCBJT3o2phpACVRX2tyaFVepx1X39W3n22",
  "key14": "4suAxVrePz6W2Vp6i9mSyuCBoAkuzJ2Crq1oRYR1Kp7Nh1LMgDrY1dsoxg6xgvKDgwcu7NUcDAdoPme5tukv8fhy",
  "key15": "4qqC3ux9SoAhm1A3d3StfjPVuCf77mvGuQ1qM1qGbRNLxG5GUjdtVjbb6ktS7DKJHDQeJ8CZ1TAbNpuqiFurvJPT",
  "key16": "dgcdQutqrugpiQeNdnJ9Feu3c76JPz8edB514Xac4XQaudYnixbxpXpEQaDM4PFwZHgYq9aR7wfvAqhqL4VL7fX",
  "key17": "52MNPhRpbC6Fp7F7kvsEUshhp2qMRhzQ3h3uYtKTnTtiX29Ve34J92JrxAe6ba3vjc8Mxac1aK8qiHCC71xh2CJF",
  "key18": "2peuutpsQEqrLgS3PDQP94khY8s9NhCvSqNeaaQEFXc3yLXNLt1pmVm7raFwNM37crNeAJCh9teuAdKaNyb4x9vT",
  "key19": "4h2FpdEyr5cYGh1Ra5pMg9g2gBPCqnQf3U1skyVQzzuc823AyrmT68zkbvLeBrxTK8DxthTFJYav8okvts62uofP",
  "key20": "5fQ8MyBNygVwZ8pq32niV3yfVR3kdoveqgPDF5GMnA29RCWTC1dW42XvwndVc6fEshvxZhbsnaHi5zdzVWMsW3Et",
  "key21": "5CNpTYU98Lt8hD62V3ePTVGc36nTYUfenEUKPjABM1TbBNy1gttjwn4W8EdX8BCgs9DoHGujDmtXwWwdqVZ2DhGL",
  "key22": "7B9gwVRorgb4UAxSFqYnVWYzYkMzN4GrVSQ4U5t6Q2uRzj4r9yyPyjPXeqJpwcYoyD49A12E7GnSDrpce7gB9QQ",
  "key23": "AHs4kzaFP3uHaN3JrMu1YTWBnU14Tqbv1mu6s6acDZwZDELCq1kizbF8TR71Bujs2Geag1pruzxYAjWT2WUKFjQ",
  "key24": "3xHjXhJ9ezHRRsk3PPcSZ9e3QMBN4oiqc2DXzUduvoGhCFkuDMmAudQuvv1pAf5izHox3Ze52NwwDrVYiDz3mhZS",
  "key25": "4S7WLZhmF93owa8Q1Z6KS9F1ggSuzNN9NttY2E6h5zfcJ3rr7X6axcH9ojwAgRUfVuzfMKUnkinA66PLU3fX7uaZ",
  "key26": "3BERqN8MTicHjg2hwqYUdcyRDViEwVA1c6XqfKqvijEYujTK6LAxL8Sc6VFtrJKehajd9xuijortcjzbxyJPMcpo",
  "key27": "5JXZn6fBNFBGEYA8UM2oGpTxPsSk84yrMW1i32p4Tu5MRBzHNMaaR2hn4hiJ6J5Yc9KNxhNJPBw78y3sLGHs5hMj",
  "key28": "5vAt6sgAHo4SXctfk9fnj6PDYMi8N6tDqPVRLMEizjPtAEk1VGVNNcxWhVvYpfH1YBngawmkqVwNuD34FrUqBLWb",
  "key29": "tLxMqChanpA4m1mZW6Amt2cyumRSJziVA5T3EozEkJbqomz5YAikGkPfj9cYxtsXbG8NjHuF2oa3SMbhDYyWPg9",
  "key30": "5y9iCsX8vwH3siwtEBWPEh5tqHazKwYYAwLYvLvVo7Erh6YxLRUtyDHNdEgv9yCZ22TNrMKHzc4fkbDjfMvWaGTi",
  "key31": "35MdRjwd32sK3pesYxQ6nLYNYd9Nyfhv9jB72bbivf2fauVfoFuqQMd6MZS3GrQAMFx8ntHjDr5z5iawqdLq52W5",
  "key32": "4UQyoQ7s5sYxXRahWFcuJKHAVbdHQRfPT633tkQqZ3GpnK29q7PXWym7PF1Quf5BoqtqBzLde6MocPtjp71EZsAk",
  "key33": "33giJYrRWBnvPWgrHZdbr57YRJ87WVtrcVAjztkv32FTwiAvsLzBg7FFvMu8uey5QC28Kv6Dtk41urNxcYrKXGMx",
  "key34": "3FuW696UoPqSJyBRTFtXMCiWonwp5aDv1rgeVsVtTBVHgwyWF1APjd5mfuUD33VGWY9EHb5nxUcAHtQwUm4E4WWM",
  "key35": "2mdGTqdYXrqjk89UoabtE6ZNc7MzFTni27V4GNT5hsyp3TQMQz5B7V3VAPDGQE939PqY5Fz3Eno5RNqKqBLpwhBV",
  "key36": "4x7PTJagGhEFC6jpXcenzBaq8WTygAxSK6tkhSf5Ve22jYJ8RZ2A2ERin4ZZBF6sCGUAETc2xY1emh8F5RnTaSNf"
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
