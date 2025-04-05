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
    "3bMyiFHmECB3n2WCEU5cfgqAbDD3nDd7taNvZMUmFHkXmkHPxAYjsxNjZTuYxwr5NqHSi32aCW4R9YJgiQSpcF8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xn8h9Ts6mxoeuKWCpcc7eqoUQHnM1KpLjgDNgEr3FPjxgcFrNZ4kibC5WEqcQuZVMHYXxKg8XQ8xeFKdunTwYDQ",
  "key1": "2LD7Lj2QgX8PrSARHu3wrJ57Q2uZgy9rNAv7vqjXT16XNhqhkHqf6HTNpUfquRfFjJbMFy2fkXqqo7ZFFRq9DC6L",
  "key2": "4T69ZvP8FAUtcSSyDzRTtHoeFP4f4spXNESYFTNgYfVWBi2Dx4dznMQu6EPkhN9P2XkSU4skTtYKvcT6HiLsmUxY",
  "key3": "2fi18xv8UZgePfHh92M6BQhaJhKaJpXYd79R1AMBoaAxiNtuH9LEoRQCGB3mB3DjJTEqRkxH1wuYRD6sg2wA1rng",
  "key4": "24zJ1Au2pLcU8P5jwpsHWXmsXAHN44QADsx4XSC5uEDWX7xGcQ1351KDwqQvWXq1gQfxDvNb6fgkX85XGGiNCXKH",
  "key5": "3HRTqV3RnaY3b2XAeyWunfBNiqJnTTrt6C9HJjPf7HEQF8Kmr2YrEZ9eLjrjbxzF4dmV8Wgrfsseop2rtEGkBAKr",
  "key6": "adtpKpeAoDdFpqqYwzJEwYzDvPAegm17KjKFBC8Ewszzf9RwwMuWZSsrGV15UYcokoWadXBdofJsDJPXewQFLRV",
  "key7": "2sBcH48eKX2U4W5c3dRgfpTivGV4BJ2LqzxSR91d2jJZH45p1JbQ1SG5HMFJA1i1Ewktr99oPRvGqrcxa3FoiB2m",
  "key8": "ZBGRw2s8dV9VTj2AxS1CJipEiabuXo21A7PxbU5bzUWqdakpqgxqzQzmjgjT9PuRpdF6iF2jekVUP8n9Zxr2qen",
  "key9": "5JeDmUz65kcyErWJ3e8mHNtmsQ7W6QGJhP4o5VQJSFkEGvfNR8mwnCjCHuAcEtKxPGHHcNwuAuShS2xvor3pUwYc",
  "key10": "37NtY6gNeexn87Zef98HHix7jfKhr6SnVXoXCTcxTA4qawceHbkkk7h2A2d35CMeJSPH7Hn23eSGELgrZm6XtRPK",
  "key11": "3z8kMma9WLr9vSqhhQTGY9UAnr5DPhgXueUQoepgMbckFDEKKawonbu4WXPvtW8zb4KJWCqxV3pbLqSbYxYmeSgW",
  "key12": "2TYW2VADEbU2yWzLqf71TyYTngsBhPgukd3JcLjL4gS6EMeqxCaciiZ23GtcQtLRax7rmWHbai5Aw9576f7N2QS6",
  "key13": "2q6jcoM19PZdKp4f7U3ugyfVvJVRdkNnsT5UukTegH8xLWmepgww9pvZjWwwarmyArpk9qbK2jt8BKb2cLgmisTJ",
  "key14": "6dXV7zodQef2neEj5dnLBXSvWSUkFpDiGAMB9SWK4cfAPbwoWXwoKtZkGRoowC3qUfBZmTFjNdw3aiMYja2hYXq",
  "key15": "3ybtB8aFBAFAdgnsU1QuA7FEdMrgWoUKFGNCm5DN96km4Qa42Scxf6ASsXTBxpC5Db6TrsNTntRVodQ6imKUJVbT",
  "key16": "QdvJjbDVoCSkvqeiMmXT8Gb6kQuCpJ8bv8dG6Sk3DdTbkJU1iU5z2Tnp94djd8iAFYmJJ2RBByHAsbdeinrFHhb",
  "key17": "319NogxLUqggA4KSRNm3d4CoGWNfJz6QSgV5kcJeTvj2tZNRFS44pMA35x72vdRkA2hRejS5sccEGNox8dtfDEve",
  "key18": "3dMRNdkAQBEzsFwUV5xREvJcMJbkqiBJ8mPrZJESAKh45XMkyXy5LZccs64vY3edE2nMw86Mm2qX33nCZBnY33GN",
  "key19": "2gsmFEJXmCD5pUcbnm6yxToc6dwwgkpcDLv6JT1WBGGJSvy86EmTLTzUeasZ7ivqzQJce3hfJMQcANxcQTiiTQaS",
  "key20": "228FZGNmyMZDHbdhinA7x3714m7pmYyPkr1xqr7ZrH3QLmTW6j5dfEQb1wpeEJi6m4vVjBceSU9kCHA2sHiYAmsB",
  "key21": "4Up2fCyRFEhi5e37adr2TsmcmAiCRrhDd2bT88H2PvaPADYSp1Qwe7qaSoPcYnLPfiPagKqttKigea3xurES2FVg",
  "key22": "3Jo1wjd7oV7y1ahDrftQTCeiW8gcwtKkP6ahkktnSh7BimFknkT6JsSs9ZcgYQ6mRps1SF2anzXR6tUm4Rhqhidn",
  "key23": "4CQKxjxDLRtFs6s4k7NJXtr2Yj2bS4xG4sFAPfjpDZs4Q9vxZwyHJgUxT5NKm4VpWv9o6wZXRD2AceTm4TQLfe6p",
  "key24": "VLkzu93MmWy7m5HWjW7UrcnGvMijfb5ZipNgJnwxNEScZUaJeFQXjkSx3RhNmwoQXCDJoqj5pVFZTtS28fXxarA",
  "key25": "5mGsChH1KZCFFqMY1zEqDVfhMjYjNzHVq9MtvBPWMm1qWg8sL8YazaTRueVgt74aAZE3NhfhBFLYXq1bBxQka5fd",
  "key26": "418ZH4TRnLXJa9Pxfn99Qn4hE2WWMaxwuq7zcj4cdszGAwpadSuEKCQsWR43GzBJsd1CfPbGPrhPoRT3UC8twZ6y",
  "key27": "MK3vhBwz2NDXwRYG1Pbc9J78hTh9yA7VcQ4DHLq3gD3vndj7Pbt32vFcjPEuVUYMthkWAEp2Jts8scQdVTfwXPN",
  "key28": "25LGv1EkbaCzayLhg9Zcv6QcincbcnwTj315XeVcjAHMvTDMa99ibba5EFFaXjymt4BjukUd5xoWYBgiBEDEE7Kd",
  "key29": "56WwaYTPAhNMHe6gB9QAq95KUGSitjGPnybLaTrWrzHDSM4p1jM1XrDXnUm9Lgo4cBfKhE4GBVyhjqwKpRt2iydJ",
  "key30": "5WMe8Fcd7PUAxYuBXHmYC2kb49bNvgzcAv9RLeoM43r7czfZLdADXPjznLpdtB83tuwrPmWQgnQUGuVtXHeqsdKT",
  "key31": "AFVjYBF4rwPjPMhSuwKfpCUVtFAesDbMBUrUcf9dTtpYUqFqivYk7XfabyUxzVRkt2zuti2yUT2qreSzJhgCyx3",
  "key32": "2yzMfyLpENSXYwDJKs9afzd12s4STzdAQVXBnSheqDQijxM3BmVZYEq9TqmjdjZhc1yKAnedgYoE6xMmoSsY8SeY",
  "key33": "5TfX5qecm3pxBGaBbnLdhv6rWSUp8hPTJJPxAYbmF8rPmnyDdJADscC2vaPMfDKTikhNivvmXKpCNJFCMNEMGCwN",
  "key34": "2KTP1BQPomXVcKBQUVFVpZFZuDB1nQcgTBSseSjdRwDkPw21YkfEr2At5vvYKLhwwATnhHUXHqHN4tvD76RVMWiQ",
  "key35": "1MkEiqRB46U1mNseLB97D9sudXAv8JBmcd2icAB99TcHqZqh5msEHb6BdyAoduuFh51d7K5N1ZhvSJHDCEXNiQH",
  "key36": "3B2osf3QB9TqCTPTnvTaYZc5EbZwa6vvv4Y3qwfyca8H3QQGtw7aNsEPoURcKrLcvGQHDJrDZa3xrBY53mHjpvJZ",
  "key37": "4JBbYa4LY2x8oeGDydvGoPysY1Nfk7K8caDxf2TeckBjC9Q7qBPHWCeaqpQYRJfPkcbZ3XWQPibtThqtjqqPtVEg",
  "key38": "5pawyJsyEpwQDobDUycdzZjiSYHa9jqsZodpcQH93nMHNByeiCsaqQNU5QrY9VtmD3gPQw1vnhRFPMDZkzWLLTDp",
  "key39": "4cHBozWJkuRShw5vu3tsEwSNwLMKopQkJhmWoyGmYYEv7FFvTBYhHGSVLsZ8xbw27P4To1yoTSaehiYSWdA3Aha8",
  "key40": "4d1kDLarWLEmw4DFJUAo9C757B2hsnPq9Q9j4ydYUbwCfFG27vSf61cbtxCRmBF54JyhB2mVpAaX76AyDwFp8BH6",
  "key41": "4bwjgZrLJwXpMtuk7d2i6Q8QFAHJK2zMb8ziDz6JeuWXpv43HCf4Qjhd5MQ8cPxwBqNa8qBMRgB8t7CVHM1nv9hT",
  "key42": "3GQyH3VAsT6cEpeRy4ecAvWDGFEx7mr7GzouHVsGgyzufF1mPEWeju5DxjiB8jqyv9SdMqu4LbKhvKAtm8ViSjvB",
  "key43": "5xvRPsEkqentahBMqGrkFjP27tvYANeEX98yU9UeYxsgZiL9JRR3MRzB8ZtPA8nkmJcf8VuMC9h8PSFGmhMzKB5d"
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
