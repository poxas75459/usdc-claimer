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
    "2jQtMNXWpEE4bGBVBycBCe8Y95sS14evjNtWWPH8XJkTHJpWvz8CNE4VWhohGUb2vsGAAJ9zScgjtD57DpmRaFTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oFH2haiNDJC9Fr8cLAnCxCCrMbuhe97RM72K4dAPdCSjaZcuW9RYTKs72ajMfnxSUwzAMctT8sfU8HHjzkm7oqz",
  "key1": "5CY2AnBEyLFYF9BVAxPKzgvyVX5s3zsEQRAxftMGMNX5NpYQ3pDEUg9fwQ2fG4ZAW3mzrFemiS3t2MUQYKUTtvKr",
  "key2": "4aKWcEcw538Emg9Geaj6R4KpUZVWeUqiHgezztXbFMDHWjoaVQPw647qw22Nv3AhhL4fQHpQVTaSpXPCPdNJV5z3",
  "key3": "3G8qnvRuwqaETJmqV2dGML6nCuFhvQcDoDHFeFprV6a3fTKm1UYk2k2M1PMqRaRSNVSCrQccNC7LbsR1tA1kmMqK",
  "key4": "yKmK6yX2moTjY1M7k8WZhaLK4a5PtSdCeqyJ9nEVMpC8BAFJzTFMuzqTScqzQFtSjHBHvoGG3XEFchpgmQ4sygm",
  "key5": "4B8b2654hpVu92DVscw9muQsLnK58ttez8aPtF45E2Rj67uPXDXLqfuVux79pY1SDMq2uQLc4YTFLe5KQ9T64sJS",
  "key6": "2y7isHAPAxzDiBcZBkeFu2WnxeowhEGdXLayKhetoMfHyJkxoYmRKVjV582yyAAek57Zfe9gqRNCE1K9NeAgF2Ka",
  "key7": "3sCL3KZAV7USzo6We7qUYt79chsWQtDGtpKCvF7FQSfkQ8X4hxbmGycMdeYVimzn9EMtW5uyu4YZsG6dqUJUMGNR",
  "key8": "T5CAxYAwaqWzpThBZjW41aa16pmdMEKSgRko1HvX1UNG93HozKgHgWPFFhmuzrwe4xuNoEKjeBFr57fYaNxcBcm",
  "key9": "5cBk5egjMLzDNmAJa5uEC8r4YgHzQJtm2g4bnXqXkk3bgiG9zcNp3nZGii4UucHVXJvM8ZxCP4K2zJVgs25sM6Hs",
  "key10": "4hXG2sR6szWZdZ7E2Za6XrPinvg5mgSVit1JtmoRjQLjfsSKodwxS1ySD7UuAk3r2EVJb3EdH9QjkQw1xZY4eazn",
  "key11": "ZMJxeEoYcRxXBFsv73EDPrfubMhXSBXXJ6kbdYXGvLQQe63hTX11PuqT2LtC1MLf7JVPfoeJv26dCDRaCFTWfWZ",
  "key12": "5eoHzGQTUG2xbzQAoBNVWcDtU1ubZoou22rSAfX8YkSxkrjz9kGURxSyHwSR7mJvGAV2n4PriZLLPbjjvrmtcv3m",
  "key13": "4hB1V6gMzhpLXPvfQFKFszz9Cdjw3uhfycfdQh793yUSnsE86NGCnaebWtq4BGLz74bJJFfAeq887V8BuS6G3Qnp",
  "key14": "j2SiWT9L5bBCLWSQnJX9UpAAinyQRP3WTKNKNtvTk3JKqJY6kHhiDsj292YEo4dCT1FE1hdThFqf9ZBDxkx5TKd",
  "key15": "4UZKvTqcbWG1pcABM5ZG99FFP2RdWemmxGfruQBeCeZYQ2vM5SYKLVSzDEjY4qrzbzZVSeyxcE4bU4KdiSUeWu6z",
  "key16": "42iFWoGY71PyWqo3ffLZYgq2EEvMBpKRcbe8xKJjUqPJRnwjVL4Uk3YP4x1E6ukKJbccdHs3sZNnoVAR4bzZBkPv",
  "key17": "4qK3TwUMU8kqAtwLEi34EAYi24YFaDnCN1FWG32RdAakWnH1TGRjLESXHrXvXAfPRUtdr6q2f648RJZnzdwcRHky",
  "key18": "5kjcUkeMwUUFS6ByqEV2CLP3jx2TNVzUgsvw25xSByZcQUnxdv3t1zSfdJY1vnSsiGMf2N6JWCbBgAKhVTi97y8Q",
  "key19": "Q3B1Guz7ZF6kyGYDAzACb6dRK26RDAaAcNobxZoauUsFsLPAg9JMdxcMGxQvbcJckN8MdS8FmKXAHaqhp4LRZ5d",
  "key20": "2b4ANR1VnWDUSQ9VaqQp34ef972tLo4DP1gQsS3KHkDfQNSjQxHeyj1zAWWkMetUQXByEU7EibeH41NmsSwvB7EK",
  "key21": "2V7g8XqSLvqtZq1m5mTw8r7bstfufMiDvs91bcewxW1geqtEJUhg2MizX4MT3QE7ZEwfAgzExdrx4pVKEKsfS5so",
  "key22": "2dwiBp57zUkbHb8X6XJXhmDq26gPpoQtFnukfQkdMTUDmyKLAxuPFn8SLQ6vLmijNsWwGqZF9qEgXKwv5gLY78Tb",
  "key23": "ytNWgdtLs84dyeoYewB4CkVLQfFKaWEUKVxXeojrq2PueVpvWQLnrVY6RgabvKFj6dTCb7fYCU878VcLYbtt281",
  "key24": "yi8xtVfK2rMLub6pRDAFYs69g7GkCBK8HfyeuuUj7bRnmu3zjFvJiv3km5h5CAXwpg3fTAZYPJi26JpHKvZrXez",
  "key25": "3uB51znfhP5M52cfzUhBaUVoYx7zV4yD7UmQURTiNEcmtmgAv5ZV8VpqXyHbSHPpWseeCsCst2KkBKz5r4BaVT4B",
  "key26": "2rKKPEmQXRj5eGgJPD8MFiS8Xm9y7vQHhZ8RS2K8tUnWdUvxdMLAmHRFuWJ3NPMCKfjiGdfZxuiprEtxiniq28LX",
  "key27": "4G6bytotNqoRWWTctDtHJxwRWkKAXvTU1JSExDJ7LFVMkA3DjnM1JJcnsmWe7Ca8k7nN36s7MJt68vEXzb7ihpfA",
  "key28": "3Z4kNrgnXjUq2eq1S27DU1mW44cBfBNeeQYeg3DiHeuq4CCjoJhQ81byiNH19uTA8oWxgwMYXG9sHSPVLciBSyXT",
  "key29": "3mRig3uGGxCGhnbdDz3CRFJzASZd2bRDjT1RJQtx3wtwTk56pDL2ZDmuNWUHtZ2sSmUoXrPNkJKi8ph4QQdLa5w3",
  "key30": "53yS3brGL8zvtitWRRFdyKvcw2Lc5nQTtw3QSKzkSa43GVWBjCiot8y6HsrABz2p1ynsRgo2YKLVN9woa1zkLz69",
  "key31": "3JAbgCTRD8jraVRUFyCgyDZ4CQ1vTXmEMWkdSR1tGZVfgsT9WBo4EG6XZ9LmuAQJ2B2XmgaXGLz8oyeEyPz28eJt",
  "key32": "2YENtV4r9z72oU9pfQFH6JusbDxPHxshFBWwtgWpLXuvK1RsSQYFnmP6iYj3S8ZegdkfqpAc5PpVsCS8ETmH3PJU",
  "key33": "4Wky965UCgXKtSJnHaPMZZmeLEoTWL3RQdSGUCsap64qbaJLD56v9SVtUY8u5R5mFAwtBsiPpVK9ahjtgBDtoQDT",
  "key34": "2sxJ7pVYNafNBxS9eRrFhoVfKmTtQvgbxqvbr7nukHY8Tw1jM6muzcbAKZyjhfTNKXzgC7M21qyr1Y77CKk92Afo",
  "key35": "5VDL17LPJQmHFa1RrkZ8p8MJGX3Y8JwKJPx8AG6bBpBx4s8yVF2RcvaUFSYnmGjqUnYP6ixNdc6nHQR8CC2j8PwX",
  "key36": "5HPSWDbcWMgSALgu5Lo75LQ571Upo2J3VhYJE71MVP797xXVqVG5avLoygj1N2fNaZw58wWFPWFQRCEo12jcqs4D",
  "key37": "nif4TfWGfp17L4bpf1datpbtUJfqQGUJnLXDfJgoq2bRk7JT466VHNfTmpKUEdL914uxybPQPbT113YP682EHYU",
  "key38": "q4X69z5uvuZtrNZdFLiDrFLNQRXdh5524xhj6T5vQP177nowKES8XDYKd4nzGKZkspeuwcD93AAkj1FWbZmsJ3w",
  "key39": "3CCujj5bnTc15UP6LdnLTnZ7bawpg4QNY6Vb23Yx5DXbFPD1wCLzS3aX3TYYGt2mgEBs3CeDDp72KHTe7iDgSaiS",
  "key40": "LeKb5951eAFiq1Q6LCAtfxduWrtB931vkcxV5NtNCyEtHY1G9SHVC51V5TLGF1FdN6sEjcpCHivkdx2C9oUKDkA",
  "key41": "2j9uHfNUDKjr21c3Qww9D3yCPzPkB8AAkzYS2Ubv3Dr8BemJRhBDH7LiTACBHtRv6epQCDqYBMVYg92zw8Kp5Ugi"
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
