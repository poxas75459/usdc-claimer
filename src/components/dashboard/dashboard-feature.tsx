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
    "4APc9zQZmiSRVTXqpToaa7c7E1M6iDVcRT7bECEtxvTcR7GmQc7uZorgDHheuZ2oNknGmazDetVeEe84nMLPNYaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdKHGoXZpjhhEmnFAQDLN9MXf7ohjfGojaDaTcrkgn5zxZgL6nxbLgpnaDJbQsJd4oJXARgSavtTooi8iKsf2Pf",
  "key1": "qx6NgGHE8GdNvrwLCVz6dDP8Kb4NqDjXExcjSYbVAmXmVCjAhfWjinvGoFCgAXNYhXbDiAsVtLid8J4WVM9Eoxb",
  "key2": "5Mdhi5U39vF9V6riwPJnWitsaPQzPN1hQmDVXrCMTezzG2KF1ZZuyx7QXRKerGgH4CRUS2n4ZY1jDC4XmUGnA8ME",
  "key3": "4n4C78aeBd92HhNEHHUHxDUy2RgMZb9N7RqoUTxF2TVsSLQ79GtfNf2q9mjj1wSRTL42viiViZ9rREQ76VLoZ8L5",
  "key4": "CfuhcuuUwEMuTN68A4cezq2ae8ZAS54C77b2ouR2cREvqGyySPXFP18iM8p8mgKkjiZDxMQ437L3NeTu9DMjj1Q",
  "key5": "2zScf5WUXZBebqoMaLPHTGwshxUxeA3CrfEZ9krtsX6sPQNHvHD2K3z7X68psnBCFRkQZMVPy5DUyoPXcxabEue1",
  "key6": "3aHqBmDuJ6rAqdfuZ3NAqWyx5vf4q6pnXKhggfGCtnNDaLBBBWfRpjjG8XyG2cRwZRxfco9uDGY4b61j6Ayk9Xug",
  "key7": "3G7bc2LAAiiJYmdsEL3rgUU4SxmjTHJLmpbzbwbzEJLRkCiC4Cr9uf8vdNTzR2vWTJk8ibBbcWPwumRV3PWdpsEy",
  "key8": "3TbgRA4xdRczPVfu1pRUyEmzbmJSBwQRcRMscTYX8FfEygFd9HB45DuV7FB8H4A9oYoa7VebGEjZeE96rX5VZTQB",
  "key9": "4zEToAos2yWrp1LSijvifchh7ESW2M38bjsB9isE9jbYj7HpLXiXn2CJMRCXvcWatFX5JQndMSjeSMRUuYFZ3EAz",
  "key10": "fVFeoGke6gH8kzS3fM6fV17mHXmewcFhjLnEtwmqmi5qCFkS3yCV7YhGjvkAj7aHNqXYhCc3NkAezWCHRnQGCMV",
  "key11": "3rouDNw9Cd9JPPvFM4GBpWgxXUXh6Zq9yAFAhpnaNpYXRW41bEAj6MreC9cqtKjAKUJSvUurrxAZxhd6fA6VYTAU",
  "key12": "2dQbC2qqSjXSiXrbjVur148HP9xUeYVTuKMVL8hpyxZobj5NLhvNA5qwgEtZTkkstGXYPG9vuc78VVR4S7H3xWsc",
  "key13": "2zs5QNEgiJqPRDvWp4pi8J4tHhs92yJjbNKLeufXmEjwhp2E8azY5ndFerCnLrR6wyuN1EiWJ4yhy8YZT5ih69ZM",
  "key14": "2Y4jNNeiwpZCdgfWJtqNLS5Pxobj4f3ZV9fFo53YMgAgxuLQvtJbq78GxjH5wxtDiJymLizoAVazLPMq5sDZpbDj",
  "key15": "5rDDjoi4xfC9tEqNJMGJg6uhnVErG5M19VTY4uJ3ZNeWBpoCHFfVNXR1Yxc9Z2tnjg4TrujFeX6gez3gvQ4LW2Wx",
  "key16": "2PaqnGcj8m8J3LcpivUwnkAxFtcC4d9vaKZ5w5dK1MppmxNRJRStGDnbf8g4uxsAPy6a3cp8UtqArPM2yCdCjv6Q",
  "key17": "4RH4yQiNqnXFTAH7jhHLSBfkRqgE5H95D4oYirTevRMejMXbgW8CTWPw4kivJV8pXDxd7anMb79DHXbLtt6LJnbd",
  "key18": "2wdibRrmibb564jNPxwx3TbzhRh3nDWfzAdGx1XVA4mUWyEkT8J9DUfyFQRgM3YjnMjEsP5uy7kohs7EboCv1Pud",
  "key19": "24sjjJ1R8561UvihvGiXDQY5ja7v3jQwLbPZ4xPChYRVztnHpuQDu2dXvmosJojSMLxvA1ThzswEJbD9ey4TenP6",
  "key20": "ux76eM7NDPoPLHzvPYcraZkntCB2q5p8RNRV6i5kb9865RdykkxpVWvCMUyjby7ABNLcGdue52BKuPQY1PXkJvs",
  "key21": "4pd9zjdSRHfyiN1t28Q6jw28gyLpJ3f6p1gn8gKL8xV5uoz23RpYTHwMENnAE8HRC4ujyUY2GwD7wbeePiVh69oE",
  "key22": "37rqznkhYdQKaLxy8PmEhfWiPRuuT6aEGrSMmg2tA3gc1pQRSddXCHGSuRFQ28v8oGwx8JtVKQ21MUAwoTVsa2pK",
  "key23": "4P7GQBqhSgb6JEGywmkJSYQaHxvGu7Aof7BPPCm4aiQV5PXXxQXMwjJh52hqkcEdN6u4TFHY8wcgNac893eaqnvV",
  "key24": "4yyszWL4koSjMU4Mk3paDGMz1SMhQfmvYDQHtaWUo3k5yEsgu5b3f8DfejVRLCR13Jjcj32KCmXc8j2gtPyKGSi8",
  "key25": "4Ag3ToVp7HCbPNLuR3uH4UAvrPP6MFLtz7dSV6L9ygs4u9QRnskZheS41JBC4FWUqaBKTMBrH6xAvt7Pejhd6Ema",
  "key26": "7MCdjnBWXKhtGXQktp8MyWmhWGyu7uKzC4oFT7k1zr21skoZkTiRSPFNkPHqHrm7YhoqsATLazjgLrftN2eqtxy",
  "key27": "5Ux7MPxL1AenzCDaLQA19q1Yc31HZy6bF2D4QbWykxJHVQkmvi2XSUbBfDxLWAtxDaPPmZycLdXhRCkcRcWkAkG5",
  "key28": "4ooaLMbP4zvRfHFznLEeEK7eZuNjQ8UNAT3vG8uTMgzBsYmGaoFDCog945r3w6ZAn7eXf7FZ4x6gNnVGrEuKVPih",
  "key29": "35e7oewag3V6r4KnHL9F35H13rusdhMZ7tfaiDCMuS3fetCBZUkUpEcakkqW8hoiKvexnLFQ5eaPMPFsbQYaBov4",
  "key30": "sMWP2Y85VgAriNfCkfpLUzrSWMtBF9sXd2iAjTrenqoNiKNMDLShXT7DJsPVFyhFLyp4nuRQdDbVoTe7g9qD53W",
  "key31": "4aESnrCRauy1bS5bfnDKdjSoHZ75m5eP9KLZs93iuEmHidjBJBUdayNSqqb5APD7xtC2Qb1CbeMQEw7LUNL3nguo",
  "key32": "22cLmKHgsUKK6VbSJ8icgNY2veLKBvPNjWKHAEukozLoAjrySY4MJAPXTCsa8xZRKAGMaeXTdDFJQKYADc8Xz29y",
  "key33": "2kbMn4eC7VJcAYZ72Xunzn7Ncxv2y7vKUG1j4mFoDNSFE7Q1YehbKAMHK3WaRuuCDkCqrnDUntktbczMLggMv61w"
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
