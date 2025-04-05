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
    "5dF22eKcm15AtxcgwcGFMQLCadCurWVgwXeRsm4fbHxraqTpTx37PuLpV1jixx2od6A8AaFLKp9iqkia5cDwpRWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGnP2auLpFFUSsfznDPwuAPfF4YtxW4PfAAvGoEEpWFboiqFJ4SDSQ8PNH2w6qkAHHSqXd3nR9rHy9qJXaWPqw6",
  "key1": "521NjUWuZHPgeu2FemmUoP7WeHfUazqRoEwFFau9Xcv5Twe597ZgcPfg7qoL2oRK4UKUZKsKXG3oYq4cSSqP6jgG",
  "key2": "2bszPLttGhQZ7wGiPoH9ysiUHqWEvZRK9XaGpSshLiAuMXqELK2HQ24CReMGphjvMeX2H6nET1i1drZkMSv7jVrb",
  "key3": "418et71xRBPdWYb4X9SFWXNmEQgS5H86npokZusi9RKTVbhGfkWwTMVefu8JtN6FdyQgdzXYtDBEvr8T5BV4QRmD",
  "key4": "4Fwc6cjiwEDMNUZpgAFCyT4UoEkQCDvPqBMTfvoKRJzzgKJSE8ysayhJroB7hrcN54Q5giWaNwsVMtXzReRzKCL9",
  "key5": "3hQ9A5eny4UwWuN42LzJX15hubuAMeABUaaK1maHHeFottPFTshQNdjCSNWvuS7HH1DCRDfwyzsy8Eeuwym9bQ9z",
  "key6": "4mfezfPUm1hGZtZsEJX8T2AUeEDA5fGDXALAmZ53g1R66YDxXFPUHMKEgGGCBLDWRWrkAM14DPPXayJMan2ipJhb",
  "key7": "5ePrWJjpydacBey1RsAgF4E7GQ3WgzdE1w4ACoG3kqTUDajwxAD9HxY882cfUuJKXRFWesxg1kjTGQTCAfZZBZaP",
  "key8": "3xpEW4WQbqrQ2cuJF3Wji18MKPTT8Z6CNcyLr5gX5yAFQ81xgpD1pZigdDbu7wJKGD5k4Q2NWHyrq96iyZJxhNmH",
  "key9": "2XjNhXdhnarBg6FqDGqCDt69v3xMVc9nFYxR36DDNrDxCAnkGNJ9QvdCDzpjkVhCB845ZbMVtBXr6MxXnBFAdw9x",
  "key10": "3CDh4fxPR8oqYc1Ht7H3CyjE4ZN7as6KCpLeK9DFxgefhmuPGmXFuztgeqUpF8uZvSv7z3cucbdECPRNaDLSWghr",
  "key11": "5rNnf4xGM8KxMciZsrEcVeWBPk7eD6CAPJFpxVbM2vquT3Ujg6UEyBMtpRMUzbY4J9ssWXpg7vGoC5YX4NsF4nh9",
  "key12": "5gmyQftc6yonM6LA3yUdyEdPuitWWWtME1DxoFkgmr25gK4VuCtSPExH6gEb6ipGWW61EfpsZzbsTshhdtxTT7UV",
  "key13": "567EcfJdc4DKBF5U5ZxJuxsYwHTe66rjC4PeiDGj6L22tzgFTxBdZNC8p21Y2L79jhvjoQmLr5aHFTgXRknGJ73R",
  "key14": "2BRotbK7DN3JpMHH1SDNpnQ75Fwbdfo1zRjDYXMyDfTKrzXEyN113QtL22GBGFxVCXV8j2YMzwepgbMLYmT6sFXk",
  "key15": "5ETafqkje95g817hkvDRg2d3qWmcmnLyFXZxvcEkN1HRYvFdGUTKNswduYfUjCpCAbeE8WKRPnvNbnP9PVnPXP9G",
  "key16": "4De3uezciJ4dKyjK58X8joQJTmy79SRkFmwidRAUAUZibg54UXFsdUz2uo5EwfQqHQaf4hfnXa4SVD1VjP7E2RXg",
  "key17": "2MxSisoypH28kwWzpRvKdfnWShNJkswQeATpyBz32ENxD65nL3WUH6VaKRQxv8FfFwsjKv36JStdCN6P9jATNrGH",
  "key18": "5qSCwEELJBWHxoxM8TLELVEkoP9EsNU6CnHmSgMEynxdJ29ABC75qucVpFdsrnXzp92HSHooMRbnTPHH9hKQahcZ",
  "key19": "VAhd3rqArqthP79qwEazsY6QCwvKunViV3vGP6hpFnTbCp2jK9Ay9yw7XZRyD5aHiKnS6G8HA5sDp3NEmvxhtSr",
  "key20": "5EVX9tQLMfLFbp67SwZXQw3jXSeykz7P1RD6RCnwQCwrLJzC2mWBk5NoSfYyk1q1fVoZrUUzoq6oDkto2QTuu7AU",
  "key21": "5aXxiHmp2K9P1rNh6XgyEWXi44aSsSpN6zSW6HxS754LLJB4Hc2NhYcTfw8esHv6NPyassqxv4qDUP71hheDGayP",
  "key22": "3hFhW7RBG3oFnZdeJP112UyQj9H5SJ8rhsPRYYHpYtehLtu7pfJF9ChmpGMTaNX9T2np4aBuyDuTKyMeBrUvPoA4",
  "key23": "48dquFn7EbkGdEobSv3KbFNnH7aJwcQQA6Hurj47p6QEYaMa5fkMa63wWMrbNVBc8HD4J4DsHeEZgeEyzRT83Jzn",
  "key24": "92pf2jujsMa3ESC9WK54qe9x7UJ9NzcVsvNQYGoPjihGBmbkvbqMTNrFZBhis6iiZfTABYJLaemnfrk4ZtPWU2A",
  "key25": "vU6rPUMhvA9r7Hrzabq9jRUZP1GEtMQnohXbTKuHAPbo5qSa8wGqDw4SKyTw8iFULcxkeiYjwdkiDWrgajG2FAo",
  "key26": "ymZpV2oP4VNyMUUNMmvCc63dTTP3iqFVjmNRjHyv43Shdgry9AExw8PMzc58NASpjnbB5iHqq26HxWzFionDULc",
  "key27": "2DHknewLFSutiyJxijZV7bC8TH8szxiQRkXzPGrwk5q6h3LNUwXAaYFiGdeycyNsRruXXWsEFPCrStVADhhooUTZ",
  "key28": "GQ5bVXaESV5QE9qwyw2QNjZbiFEiwmqQFiZ9Rnt55y7xotHoLgvkEKbRmieD1oUd2HHnk7ZEHBXxvNWtHYwqv6W",
  "key29": "5autS1nM7F7FzAyyv2Q29UdRr8KTm7jF7ah22Bim47HkyXu358FdVrj3xpaAarRRHRdX22utY7urvRcQALyJeiFU",
  "key30": "58k1rxXgENCAZg5roR78oM8nY7b2nbz11uWUx5cQgyZ7ttgqncUXPbB2ALSQdjizRJAkyLDeCtgzQiMsKG2dpWYR",
  "key31": "5DBgVZARgVaJLTgsKDwQ8WjpQqo2G2xCP2LXgGQ1SSdbnoZ5n4eYKGQDtuk7GtMAddkqqLfpFdBdaJUWkH2k6QJD",
  "key32": "pvxeXqZD388UgVJDZYxZjzY1JFBGdCgLRJkCtuhjiviT5ukYytwTJntyd8bhgK7xM1y9R5D47NLni7NJnC8gGX5",
  "key33": "2jdsTpMU4DpvxeBxH8dRgYB6RkjdLhMuaiuL2Rs3GwmN7ci9SME6wjXgdybZ5JniyNfdiNxWsYHGCfT8SeHpKeFw",
  "key34": "2uzQkeY2Dmctqq2v1wVqemDRkVh52TfLaLe2LEQruYVCYNKSdGHUQGhdomnx92E3N5W8FPgjb7vGy4t4ZAmMLVt6",
  "key35": "3m7AfU2v6kfLDspp4LT1dKmXmtVdrWKfpyUpDxJ91v5CKS28t1EUYq51jVMysEspUej8Ck4UjZw7T9UEMbqnD5KJ",
  "key36": "23YCf8zTNJ2nmNraitwvSSp4AvcrXEp7tm1KnjtUB3ctc74LeT8SL2Ju6e2vqUM5gwLNg4NpacFPgw72YBW7Ewjg",
  "key37": "5XvCyLxqSADSbrQ1ybDPWuD6Pt8SgYEDwwYosnLPLFTNfqsckJjgLT4aJyo4yhDEg2XLGZiv9rZDbmG5TenBnJ17",
  "key38": "5RMDhzXmyeVDfhnbccAaDW1WHKTW8QTQjDkqs9B7gXes7ZAsVFq7pjQEytqbWpvyV3ZSU6TzEhYyFJtv1ihGpgJz",
  "key39": "2iEQCwk4ZPPYFTiHVXXMcbT93AVGQ1jxQMAtZVxS2mSk6wagNgS9VajNzTPvj5nJ4FyPCbyuvXc1vmRpYdkXLXGP",
  "key40": "4sNPrre3d9oLQtsXWwZZTp9p5HmxVU11EQYB54j1Z6rWdcQGmJ5V7tcb9SWqYFfjtABYm5Q9NjygS7MQZwRn5hjw",
  "key41": "3CnzPRDXATX1UfG86KKRsPYELRsjtrWq9xsteRb8orL5fQJcaqx4jfxuLfkGAxAkKuTsBikrqbCjKcD77r6A6ohb",
  "key42": "3ZceSQrfZ7WgUJnZd7Q5gjQMtDVmkB5Y8dirL3SyXBsFvcVfQFyqPvLYMb5cYDRSZ5AKypJcMNCWeebXZavQYn38",
  "key43": "LAUpVUK8r1mXWMZpdr7ZQ3ReW4DHRKSwRE1JTtozrahdg1UJ6PfgBACKqmP7CpTb7XHhaGBWNjtGRgt2118ivSC",
  "key44": "5SQhCvH52Xr9E5iB69nDWEBUCH2JzEqhWat9zVYZJVQJuFHhfLxjLZDRWEeDsLwvVh6QMk3MF8Yt343VXJDyrxj5",
  "key45": "e21dPo7rXwWZCYrDutKm5TnHcsehHugTFFKjcqjWcgzcj6Yiwy6gtFPMLCZ2eFAnLnKq4iZEVXyKvLo8jMrEE65",
  "key46": "2cnNrLLc3ZnsyLQ4J3xZnFLxkMavc7H312EYbVxf4uwZKXihTykMrZ5dZCqaaRNGRVEhDxCaBdqPvb1QsWt9kbQT",
  "key47": "5jjMB2eLhL2atSvvJgKjJNLqMfVo4T4fhwE8PDyTEsM53hhLQ4kL5F4UUzF376bJpezpjgr9SoCr3TzSmP9QuZ9H",
  "key48": "3M39xcKHtTJCRkxDVHhGBDjZV9ZixKxQF8nyqhFqYaW4aKhKcbXqnnY7xGE8crHJbxNXWTifWMXH8fScdmdstjWJ",
  "key49": "5rDbNFksntevYmWmx9aqtptb799YzFJWqD2N7eRbgCGgBR8uhfagTp2YGEq5qbJVCse5utoeXn8P55D2DcsGrZ4C"
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
