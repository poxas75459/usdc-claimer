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
    "3gZywz2SDjgndJwgKVdnbU4TgPSwKbm97kxKcju5jbgzzcjgaQDmpWEavCzHKZwB1SsBKz4itkVxrsjFbww1YDUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rorQcXwaPFestkmGZefK3CD4Zt9g2AQz7KQXZus9i1YwiyF8Rfs7htGPKkWK8kLLdoajWgz5KFtnbfoLfYkAX2",
  "key1": "2zGSoyW4DZLkkj3BXm1v3U6v7rYCB89PAfuk2bMDR2jutayznBnUxFdX4fFZ8DMgRZ1arWgkj96UXb77UrLsQfQC",
  "key2": "vToNmjc9Ef49tB6zwczJBU5rnux52KoSe5xTEHs4cqM7cTLq7YS8kjN8aLMBkA58RAoVNevHZu53fc9a5DNAeCa",
  "key3": "4KaoLC33sMinwmm4DGFQ6qUi3MVGQCgHUAWjiiK5iywUDE2qkbMNb5Qjg1aniSLYWGYa9NYCaJSRLE4WN4r83PXq",
  "key4": "29XvAV3WPZ5hCMuuwVs55srxh5ibGpLp5TzjmiR3cgKbmN2qTcdKwsJ5FUT1fJBoUq9g7dRG4UTkVp1SxuJTZfSy",
  "key5": "9gukpUKvuwaQurdqnxe47gn38iQUfDeeBPG8HKpHqSRxK4x6tRDctwAXvGKEfNfxkKv9RanBMdGpE5gNxc1WNJL",
  "key6": "48csUovcBPbWJyHoN39Cj6jpmkBezWERJXrfXVVswQadV5VpuQacevA1cu7vyyCwRBnadpYo7qeR25wZLVzJHtSE",
  "key7": "4sxAwSmtoQakqGwe5DvpiGKpcCmLNPrCV1j1HUPFxPNNMMyFbaG8ixb6TgXtpGJGQkvZVxhce1tSem78nU9jqccb",
  "key8": "5N5bRBYCtiQpHStNJEKFBRfQa5vSSB7SsS5XSn3rNoKgdNKs9jrBCJft9EBxj8fBTdGE9yeyN5kvAMPixz3VXEdm",
  "key9": "U3t1sMDu794ePAGv6VLMjy3T538ECqZ4VZSVPDQCKGw7hqGgBzqcBn9Nssw1dKAtN86dW7EQa2jX6h2azfX8VBa",
  "key10": "fjpBxgSsyrdRm7x9BpGtVKk2oC1DYJTYJVUPP4ZKcfSh8xZzJpEkU2Rk7423V6Ec3vFuv5KE2qygBQ7PRty4CiC",
  "key11": "5868joQPJtkdoGU79tmE4rWsp3at66xjERhCKfwtBsYguXg1kE5Qcspjbd8WmcvT7bMGwP4ryvDdsMkk6vJKacHC",
  "key12": "29Ys5QbpAWUbPT1QP1fLmUtRWuv7HuyHtmSZa8vEqKVAhpJsvCUQuTM71gyUgVVv3TqVjiVNxKpbUm4cJ41hVjJ7",
  "key13": "5bMb8iKt4JZLfDdYKtJ42sXPTtRtJFX77E8aAWftTN9HGEg5MzdYkyvU7YF2EXeHK2yakYUV3F5rMoCvq6vYiMtp",
  "key14": "55Pu7DzBhQxU8Wuh9nXTXv1piEthLDgejaaVwktGaqNxdNHsE9jkhDi2Qv8mhvq4wG56m7g1e3D9UGEiWi4huiQU",
  "key15": "3KECyttFCWNXAJ3ErjTtKSSoyi4RWykTgPfaf2QDk7rx9hfTyZkJv1Thwx5pbmNTkoJ4A3FFn6oWchCRLof7sAc8",
  "key16": "3ZNuLXZug5WgB6AA1eEAmjQuc2P9XWEpmm1VCPCLed45egk1MBX2eire1BAUwrhbd92GiT7r3yEFL61sj2zRYBgZ",
  "key17": "3QjJZvqsm8459AkwpJkSSA34q92zXbg6fsHMNP8QHqiUb5pE1JpFzix5ATmEUXFX1bjUhxF5ZouGK8fHHgRm76sM",
  "key18": "33KHCsniM2huvu86GALxkfqD87ij7M678Xj3iqYtQUV4ZFBHi8tUZzWZBAeRnN8vFsMrUMmr2hq4RTsqca26jNkS",
  "key19": "grv6NnXAQ11JBkedYoMic1dunmkhE23SaGAEDSsbLwq6XWw4r8H35nAZAY8WSRXSZpyfx92auJLpFmLfVWoD6Fd",
  "key20": "4VjnpkySmcfVxxNS8JH3PaNgj9QzbEVW7gw8JLi1Vs8fiT3E1xsjCokYiFAgYSFrXr3viVQHcLrEByac9vSDawmP",
  "key21": "2t8s42QELcu4PpPbCHgUbbCs3XyAHuGVGiGfEnaTpDpX39J9PszHoL3Yw4j3jNVPT7ZnHz9n3VnLxSXXySpmAMV5",
  "key22": "2wgowDmBxk9rFoNyckmfzCF75Q7DVqKHfutRxiKiRf4mV2WVgo7nZ2gpqmbJHF8CBWq7tbTnpjuYmQCmbDHtZSes",
  "key23": "3JkYEJpotFgayQk6JDJFsbyrZsTEcgsnRtfbwe9oAWprcVDRoZgwcCe4pKa1MJdXjLp2p3k5oDJ8VtpRjjEFuwWx",
  "key24": "39uWqiwftFknxsXwhxtEpbQFzhTi7fdzvjobbcEbw8WSk5M8WeqHNqNe2wrgDHiDFcXo1X1P2pywSzC6vSgzGh5N",
  "key25": "4M3tghAJQx3XQSVqozieWXpCJHWAi3pV9KTd8aBX87jWMHKzkghiwRNyRBjh52ij9Zx7CFsr4ERGLJW4FDogdhoz",
  "key26": "3Y4SVPx21ymF7ayWLEMwkZ3RF8UojBsJ7FDihMYAwqt7YkYyp5GUNXBMjGvFVyjE1ntsuNgknp8mCstd4S4L69mu",
  "key27": "LqJykxmQqupPxtKbdUJohVLWyAPUFYEc4sFyakGbXAEXfPWBY2ZF8TASUL1M7JHDUjU9oZJnrRuw2Qz8G1fRP13",
  "key28": "2wBkoU15Lnd2yHBa1TPRN2paCnMizB2fkGWTYJcCSvyvFWnuNGRDVTEhGh4UgL6SdadhbHUSJYdQQ5AdiTixNfTL",
  "key29": "fUiWUM9zimMJeAQdYvPvgMDiJAXSiGAK9hZXESbNzg28WoUSeoWjXQq9vPFQVtPFhTYFoND4wnfovXitG4Sbr2c",
  "key30": "5DRQhHq7PHf1kv9BDGxV2z8c45KBkVvwJnCSBuY4o6fKn5viysekM4QVKoJVxH2pLtg1DMutGCVPryMwoGNZjoPj",
  "key31": "4V8N3yV1zvktYPTDSYYS77fADJ57BELFKzjg68SHns5ahSuGR4m79dWTYGDfQUcdwy6Upgu6UguMtWMXyYvuJARA",
  "key32": "2svJNCmzT2J5nbXVvVQVBRrPRqrWSahQt6yyofgFh85nd1RidBUjvp9hHubzHj8gLhJoGm62o3RN1N9QHAYyK6PV",
  "key33": "598suQTgvi3in64S14PLkHUnGY85w5ZiBeFWs891oZrSSrcwzqPiSZwVR8KfG19wduVZfnYt5xfAhCUSUEhRTwGj",
  "key34": "46QETfi5Pep4EyTwXaeHdut1bvPSRkeE1AmxwBoxKDjujUvi2nwWkn2YptGv2SRa8GAVM8EwYogHgsRifL2vgaji",
  "key35": "T2YVRmDvm6p7eftx6diCD2LdTrSoJQtEWZbkJrsKjyYBbzsiD6cvtFSy8AKkb96Gz1jRGoeCaiCDLTNAZGRBVpz",
  "key36": "2WkpZ4nvfYEmexB1ZS1fnggU7XFAguqitUPhqScAkwY82HktVBDvKw5LPDH9PFL2kWVQWWHBjNoxw2XU6m8r57hQ",
  "key37": "3DtVvCM1dvJtRCyCtzN2TAjSbcY9GEC3LNuhNtT9FarVYRuYYmk3KaStY5CGh98pWqPMHv9AANfi9NhRSETiyWhh",
  "key38": "5y5YqKEgzENTRw8MLdmEN8etvHhTDBTVwz281jF2HyrNw44cY5wmDBodEavmWuv2Wuhj2cHdy8UpyC1pDoc7FT2b",
  "key39": "2GgB17PjCfGfLhPwQ8Di73ozTX6uYvTRmxsYu85ecx5KrEtiUfBN8BAGpibvB8mA42Pk6RpmyhyDN1c51ZXPXMwx",
  "key40": "4jGZg5PoNueRc9TGnCCf8JQ9hLZtTukHLnGeJUJgmHNyCLjeVqG2tozDrULiBYXMPJ7jfzDBmJ1zZPmTCcqL6FAz",
  "key41": "2SNHdi3nUTx8cwAwczXDNUwPBvaJSYduoUnGXRypo16SDwLnVe1PxAHrkGLcQPgZQwcZdUyNAzPaX3KxzxUNxqcy",
  "key42": "2Vn36sK3m3YPpMZYyXDQxcQwVM6s72Ke4zwof8NawncxEfGqc5wAFzmfQ2NnXPH7rtX1ZK1JNNjQEHT8g2icRNp6",
  "key43": "27grjHF3uGoqHXDWCFhvD2MXTixxahCUESs4zemrAvDsUYrda2t5Xpb5PMbvEyU6GZmeEbguTuSUhRfwL4EzoQXW",
  "key44": "ce5Nk1KQr4zbd6DwGvcVoK8mMasA4yfxofhY1TuAoGqq15EXcWxH5bPvEheXinokaytba8xTjiRsE3nQdwDz5r5",
  "key45": "4EtQeKu4mrxuUuHKxnCQk8V6Ph4Y2UPgdw8HQLZ8Qt15c55vBYKijkfrn7uk5poWb4RcnrRHw5agdC11s2jN9Nyg",
  "key46": "43T9cnwJNqb7e6shZ9e7tvHTQkNPWw6WFxEJVPUkJZVh3LxsG4Qc3Rghbq5N8FuAoAVoMzy5bR9TWS81tb688rwf",
  "key47": "9W2jb6iSmgc8z35Va8e2v9mKMccYTfZZNEoiv62nDtRAtTnmYZ6ci5E6VkoRcmhTBr187M2UFAMrt7hS4SwmYrD"
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
