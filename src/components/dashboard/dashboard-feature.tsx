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
    "3zG62BCiSnJgouDynNyD7deR7FARxVHKSwnecV1tVt6vzXhdmqS57Q3TRFK3VzydEXDN7byooK1nLuZM6g9pM64S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FmBK4mTQesxoAdzSbw5YkPP5EQR9R7hDEmiFhHA7iMgBayS38yYwD6vaXqfYeCYhMGttyWyrfrWa8SUDTRMNfje",
  "key1": "c23i8kXuMJB3ToB4hS4mLnQUpakJAUAstfc56YXmP1i6zRyPN8efZTqYxAPUDxt1LoJAS1Az2o6PgMxHDjvTA3M",
  "key2": "3VFJt3B6DtC66ZKNoYsmg1vfdnEMVVyNZR6sZsaTxWY49j4Kmx5MwPgC3irwRN7hMD7AkYrasquDv5SC5cX21Y8V",
  "key3": "3FoXCKro3uebXb2edWfbopuyuHhgmMeVu5UEXT7vJXFf7L2xKVei1mwMBZkBzQ9i94nMHcXU5efCAGBL6Xuihj3a",
  "key4": "5Fo1yo2q78CLDiSJ7K7VskqQDEqPvD8H5zhb6YibbeoV4wCVjrboKZrrC6n55pLuzcx8X4fwRKFuWuFCeTh8GZcF",
  "key5": "3GM592U6KaLEeqpokDxY3ufeCr8pc21HVNfef9ecpvXmnAsCusNb6ZcRLQTQS5of9DLJb5QD1qCRQW9kWKGmBZCF",
  "key6": "qzdGUqSaRFqVQtWq9yMBtzXA79jDK48A3vkBCdcUg9Gc76fHRX25URMQwRjtUDpR9yLxMG6b5rBeFgqwYXoX26H",
  "key7": "3E6SAwgokCNEwnseMWmMDozmQDYpneLuxn6hgZfUWxSiJxPFQzYjrXfj4aPTExZMrwq2NfcLjW4tzs62gjQDHRtb",
  "key8": "3hi2E8Ycz2mMrzUipfabBPhgdpgdwbeMKy3FEoMZviZhSztDF9CXh14dQRvG9BFSrQjipSKaDU1iFZJPscCzJdMh",
  "key9": "37r8ARmkJ9YZokCJwDfngb9LpRNUvPfnYb86tQap5PNjzk3Q5C8J755zUQkNEFfEtKCR5gTRtazN7pPjRgchYCor",
  "key10": "4XjWKz2GDg3L9e94RQfV4TiWAQ7aAosLkzTfSGwwywBpB76WFYKMoRSr9KnLVMyPcjj2CGRxZHGU7kkKvU4nYBfA",
  "key11": "2rS2Gr5DCyUsHoEjyef3UzDeRZh5AVhfGnYkgDaxsfcaR7SAtUWsWU6DVUW8QWS219ciMbmgGQ5kRW5zb3hCB8VZ",
  "key12": "27WkutUEYzYsdkiXSF6b8wEkgCpu4RVUQWvgYiXrFZUMFfZTma2sgNLvKt4bmbn3jPyTj82MJaBet5TjgrGA2yEc",
  "key13": "43xsNDoZGmkYozQ3ra2BgoJ7DP7BQPRBi7ndbeBYrGSw9YrhKWJT4yxZ7CFLKNrhmwwrVraWGrZg9AxJuZ9YdJB",
  "key14": "31WUzh4S3dKLVmxppGY3rykCGSZ7VPqdYgBjeW1VArZAM7LvwaEvCFgEhGUhJpYu3rb8t26Bv2GU8fSMUXV2J786",
  "key15": "4BH7femTgDhi8W7DVgkXApkuyAiSL1maZ5hr8SQDsQWt2qEqGBzVx2PJQFkVzQSz95se2bCEyyWAQXYxxSGgXZRn",
  "key16": "2ZadYCf4er44Y5feRNMniBnZWnCxqtv5qnurpPQ65QYJBLEfZiDBCb8NdK5nSd5sg6qRrnTTWukVgeKHvZMfBUsp",
  "key17": "2SyaTWEgYBrGQizsBhwBUz6dYQeHBKggeHQHBmDL3NngseumwcPSzdeBj9Then4ea87X1TvFW5gGWch4PTtkvxvz",
  "key18": "2Mn6xL1nGUx9FgqoMWHQrzbME2xnTWJqfcgrN7dxSXFRuYpxiEZXsBRxqAkVNXZ825dQmJaxz2eHLDuog7WNst22",
  "key19": "skNGaNTjrLR1SGhQ2sKzyayUhNRFjFn71gm9Wdhnw5rKKYV5Z4PvwGMJkM85b4X8bwqACeJg7Qndeft3LU6Xyjk",
  "key20": "3VNhZqYryesJvNuujdoM3aBa7fPuFNGMxG2nRrAgoWEUMJEFkW5Y941MjacGg38MxEVgSHtrwUThiehgd4vH2rty",
  "key21": "LLfMedXh8hmnQSMrgBu1rdeambWkWykHqBGqYNcqaMJJ8vAchwohtbwbuHoXdN44YjfMMbfNcCJSfS44T9oUqMk",
  "key22": "3n4BfYPHmzQjBJ4QFEStkWRv21qC7BySHY5b8DDBGzVeHqgfBHCqaQrqiGyp4xe9KWdpRNbw3KwFcyKiSfcJc1Sr",
  "key23": "5vM26BQWd7BHdVXgFAw81a174wc6HSraU66KsWzfbvgLWRaFRVPuL4GXRAptUaemmBSPb3ZGbwvSvuEc1TurjCiu",
  "key24": "2qj5TrWpW4EPDC8mbPHELnbhGPLvLkQZBMDLPQyKFXkbZZwwssS9mfuMxvy8uwnsqfpWzotDs67drDReFxkSdmzw",
  "key25": "4LYUFfLeC7KNJMaSRSmySLgMChREYTL6corv88soTjq2tTkNNet6yvB8UfxFCNptdBScysT4Qsek13CXdYfdMtYN",
  "key26": "4T3qngBnCZ7vSDsMcx33tCcQhdUPiVvGwHCqBHzbgnorNiDR9H8BYJ6MVwd4GN24EAfrTkimJw4bSdmagu7RxSvM",
  "key27": "3aGecwD7E5mCK1amPVt19JX4jY8vt92jBBrtDxatqNrQnQM1Ujc2aPrBufk3NCZwMtDkBKhYh5ApkKYdePqQEzCP",
  "key28": "4gwA19tAu5QFvQsoqvSn2RrD1azr4juzcUHkrFWGgo4ANib1icwH8fn12A3kYr3UPvQPgLb5pDUbAEz8n4NvJJJC",
  "key29": "V54oaxpa1MLvfM2cgM5fmKJUiQ5vD3Yjk8Fhgu3NgdADFdB5LZ5sPeWikTYDyMCn2x1pKPaPswxw5aDvAw4BCjQ",
  "key30": "45ozEyQUoy31pjrtTMtr9j9GpKYs5h7aRA1a7U1XzTVbvN2NUdwiZ2qp8bHGDt8XGGyoAHhd6ddSVoW33i6ppoJM",
  "key31": "65xAwAhnsF5HKnn2GnrRSKgcqkwgFFYGp7g7RBzqXn9oBQqhac8brtpkNDhqqYo8p2HJCscWoygLFPmU92ToWNkf",
  "key32": "2hNSqyWUgzz7yBAZMxpzMSDAYVPDoV6VgdGuTrArgoF3nzekrGFtH2B8dbbDSykS6s2dAr66ATnXtmHKxVB8FiMB",
  "key33": "Cn4ZqFg5iaHxeRK9fcg4BC4sKMXDpA8ifTvUcUWFrVoQ8pcT47d8Wh46PspKPLEs9NxrBScTqyUihFJV8LXjEP2",
  "key34": "gDvJphw2S2beeu3UZQgK8BbLKNQJtCnF6ckHTGAtWmSBU9nsjcetcb26Q9PLpcR3tofZuWKgGHZrKsPkmC52RKA",
  "key35": "23UySDXWTqtgsoWFXieDhjBAPMYeKoDKyMtTnbNHpZos9zzRiKnb4FbyLe2MpnqVpD8ud2AbFGWNeG2Vj3xntVsQ",
  "key36": "2bdmnnCp1C9TKUmoxhCmzxGPtyB2zfhpWndATDE33iFGxYyu2RgcZEVATYUBZpafT5ftT9so47oU3z8uCXaT7ZDg",
  "key37": "4HH3VxS16UQvzwniXnsEffn276mJsszMSw4iycpKodXAvw5Mwt25SiPyGPeTG5W3gDB8rni5kt4Y4EGpMXZw6ZpS",
  "key38": "5ZyUoWAwvRkeRicVDwAHR19RrKZTfnGfBsYRqtmnDjAP56vRKc3gkBPWkQNQYQ6aN4xmPpSKU8DdJvWVPjHMuRFX",
  "key39": "3a989BiGhcucefWHKZBEoffZfXjTk8UwLGt5Ut88uTS7n2rdUU8HLkq2igT1TcJUDZYRNVBhBiaBV1hqfDcsG4jF",
  "key40": "2UWyXFYvUAfPWE6GachzuZ2jCxSRL5wWGvU73GxECkFeDdEoh9Qfrsj3Jg5Ssgui4vSZ89XjuWVshtjejyAdm399"
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
