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
    "3VWHUpD21C6SWMS7VbA7ajkBCQgYUgbiPLMvUGMSoRsZef3Nqu7fnLxFFFP9nog4zWxYvWmHn654P2W8LXbV281T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VH82BPjzhY9GaJeS9pzkCMszFNnyeAdssZ362A7jvUTtY4MxQ7nQ2MgAZDZaGa7EV2F9h4nu6p33sUJ7Uz8GAC",
  "key1": "2xGLmP6wWMV75wrVCGa69PC7Cc1gE7bJ927U9o8zDiWGzVDCMzNqSgrH5mPrH2LFZet2FGvJ9XhRCq1ResieMX5L",
  "key2": "2ugYwiJmfLspEHMBWpxNssWmTN2XQPQkXxHsrgXiorkScXyaGuvnRQ6PrDRedATALP4EKPZB8qB635omPJmP85DV",
  "key3": "47iPHCi4Hyy3kPt88FeBLqV3GSEA56w2DrgS4pxuLSAz8HKtF1X6pfBaGvyQp8vc2ZGTrvbHHfR4atXuA5EuJJrF",
  "key4": "3ofoggctb6URgrHqQtyviLKkppeDPgbREVCNxdRsabQism2HN4vgafwhFcVUmZDmVvZTQbLU3brLCVNLEEu4Zn8x",
  "key5": "25qLuqUgU7YgcHdx1L36DhtFQm5wMrspRYFetyNnNrHyKPCoz2hrgWnkViS1NLicmYbtgYA3iqkC7jeSzh7dpLYH",
  "key6": "oCZGCDLXSXZBuSQ5yVg5L3V7WPt75yjnPgZJT97Wkv522ZE5ADjukACFPZwpQ2t3RpcWorKMmuYWE5ienv4Lufi",
  "key7": "255w9Zai6FSjLFvzcUnRdu1Tz7mwJnfc1NSV37bGXpg1TSkP4Pg9WYZmBV5LQgeeQduJwdDzt4bXpemUeYYPWEMs",
  "key8": "2ZAd97SMkjQk5f9bG32LaHBde98yjaUi9epvczLVhn1LTmnHnegjtDhFcXhmctwggv8wBUZupYfr8fpoLySkStWe",
  "key9": "4i8v5xPXBGUwJMYBmSWuxCoZPb3AAu6CLbnqLbPvUpMDCpFXhLGcrFMjteW4SXfMZWoLVgzhHuBaTGzaNMvrMp7s",
  "key10": "3px8H3C9N75Q7X5jgzaoY7yLEvbB1iC6Q97VVhCJ1SxBxHd12E1ByZ6G8TQzSBZ1He7zcHWm6FV9ZCWDTdSZ1bKj",
  "key11": "2Luymm8n4JzPB1x1Dj51RuqKKbeEoeLcYfkqsRfzU1B1sVnvACZwCyzkazhy8ojRreJsWRQJbvCPpG1KVBPERJ2A",
  "key12": "25vLMGiR5u3M41EtucdBisYV2swMEb4JMkZPEoJHrHGpyy8F2Us6kXQMQyt7L91YPkXpU2V9pFc5gAJcE7EJpMVx",
  "key13": "GkXTsKuyXh21DT1Tw4R7QoSSRNAQdncFTiXxxFiF84Zko6bUCQWGTP2kDyWa3f7RsjoLAoAgmFdEhrFvpAahyny",
  "key14": "3iGdQCAMRyHLz3BSzLtpodm86JZcCE4zv7kCMWda6ycaksCCKiVvbKhL2XWd1ZCYFjoSoSLWx6k6hsq1kZWMDsTB",
  "key15": "2o4QRAYACNMrigfstoARQEiv1kUk71r927WKWyvCYHYVvhpEvyLcNJ6tp3Rb1UTG65B3W7rBT4QAeJfDPnBfkNmn",
  "key16": "AnQYVLQa7KND9hqKq3nYY7J7fi3fkDTyNUMY3FTq8tnZZFynxGiZCVfxj9UdTUUu7jX8YJLRRLSeAwAXkifUMMU",
  "key17": "4afR3DXbrp1QLGpRDBkkD4hUXLBLH53k5sJypjLBtw7YVngBcN5TgP3BudX6Axr612DQyLWeQfbZesPRxhmrp9aS",
  "key18": "4VXmY8gn1ggw7qT5upZpNusAA6HWZkGgQ4FAFbdbchvUZj2wDfnjbSYuwKWJvZBsm5BVyu81tGmwWjg6uWYu9rYm",
  "key19": "krkV8dVcXhmSN2qBhAbkiUnqWewHjdogmPkBBdhk4U8ov2wogw2scHRwTD2WCoF3Kfizwez4PQWD6R9AExxDssA",
  "key20": "3i89vAnbkm2U5hqVhHoLojdR7X8SwdkYhL5ZDuubcmJDTuaF9eKgmEFbUbrg77hASx9XjQAKxBi6gKLs3ecVzQLj",
  "key21": "2uhYjci3GaLZb8rSutKrjK6ZFC7aLjAPEBaMg4wtX1qmDPpmF9CiUrPvAX8TCyNGYkxxox8Syzf1ddt43AuFDoXV",
  "key22": "37etKk3N6fss2RrasuXzyo68EcgCF8GsZKCov6QWWywV5PVer5YeDiYMNnX3WRrREMYWZGiAQB1RqHgNPpSRfD5p",
  "key23": "38ewjkcQJeXTG7PD6cdxUXoX3cbzBBLwysbyFKZcKkR1LR3GBqJ6ovUum86gDFbn2R23VhtNCsqHBEjANE2EFkg3",
  "key24": "6hkZjRw2XkZfvtpDK6cgrCPFupV5u4WmUDHGv2fHQEYhibbNKtLh9EWMSuA9G5DeoUFevWigD1t1hYCt2bMnvGk",
  "key25": "4ypupcc66DveaT6kqidkUnLhhN1qoEY4gNqaDgCTWJA18iKEFgzXyQ8GNvTGgswmSY4shSSYLgLeC2QasQoySU4a",
  "key26": "3fDfT3foCkdFfD1624GUogo4hz9kFNHN4YZZJ645VwV5W9aFtvx72NdumGhZuS53P4kR6TALsAG13Cn4Spyvvph1",
  "key27": "5iUvyGCBeAW8rHLvntxKRth1zKf8XqPoesUNy17v137KguuJTcdNQDScW25WkuVdcQabJ8zz4zPEPGws2t9ei1QX",
  "key28": "3hJckF1L85sFYSkcS98uK7kZuF7LDrrNiiw79AsYNMUUSGmZ2Gm979o47Vg9WpDT28Vq2zWmCjFkk9WghezTT3Tw",
  "key29": "2mU6T41NShshrUjm7GkTzoKyVMaaqxSmkDrn5gUXJSw5rGEQVoJ5wJt4gW6ZZrt3mAeuxbGpjAbfnn4du55TdZ9h",
  "key30": "5M6pHiJDkkokMAJDyB5U1mGgeWSTMqf3zBYZ5ejLYHbnyiwG9AsYH6PZHQwkxRoPwiq3q9zTEL17dNDtsKf6F5sM",
  "key31": "2yRnoeojG1EQB9wqhFf4zbHeh4AmtNJFLyash99CsVnimZ23ftETvaqBrKDjVuaL93qoRWkiVtYhAB6NXMttGMYK",
  "key32": "7M9N2UxwB8t54UZevvUgaQqYvg13nnwm2N5gqitiBLcaEKhjLcgjePCVrpeL4E616h8YPhUrhpy7mGC5QjPPr8L",
  "key33": "2AjagneuJfuFWNHzH8eEH1yMWBkddwQZ4A9uvZ3UMRovyufz5hcUASSi3TjqtHoKBhTPzH1xApvuBcv5UXcAqysb",
  "key34": "415jskCZBSmqW7qXftxstsJvYDrT9VKMM7ApM9DkQhRqL7FcZ2GbpXztjnEGV9fS5crXxURhBGiQyntqdH68gQQM",
  "key35": "4iVNeM3WTjS4Rnh6hyWxuLpWVm8AGEKExNXXh7jD8rvW7HrakjZnDuXGqijUaD2NGwhRwavSXU3UsCZ2SUEJ4NPx",
  "key36": "3W8hPc3ARNz65ETEFy9erUeiMHkWYQppbf2EtNFrz92D77GHRG3h1FweEApWMJx4QP2pny5kT3uBDgDJ7ydFUhzA",
  "key37": "bZ2RJMEGQVZHejXb29BFBsGmkWi82bFfdUtuivFbHHSBfmSy5m1G1CbRHpP34np4csoGAyTBV2H3jiqofKMyiwq",
  "key38": "5zxBf3yPiJFP5TP5R7DGsJGs4hc7SMrvmBHHpeSCzQV6h9V16Z7VjgYqUsf1uvDot8mm6fCPHT1tpTHvqWxxvpnu",
  "key39": "4jbxPaiUN9AEnnubvWTSoCUnFpCvfLy8gLt95yxxyQrG4qVrL98g85Sh8DJusnfkgUzwt3XW9zZt4z9bTp6wvfCi",
  "key40": "2zAYGPVW8DibxToLo7RA4RNY1TBUG5E2J2FDVtsqwUuG6VJYeAi64bfKpjTRqQzkTSmjFUx16ePSGLVPKJj1bsf3",
  "key41": "5fgn8VGAN1kYLSYzVJn3sTkq3nQq5TPHjpU8TcdXHKoyrUAQ4DtJ1BSS7FuzkGXMdvkC7NCubynWzvrsxzhZm9jH",
  "key42": "3TiPvC3YvywpweTuKD2SskHAA6abstpGWvPbetk2KNXWbRa1KTPPrmu77hnGDh3GXz7yfTUBhdVVAqqxjEqjRBq5",
  "key43": "32kSqfLVYnMHE88fUzv7heY9mjvV9eQmyWjK74MaWrv8XbUahAiqYcRkup7XujA7MVv1hRZiP6SXgfw78sgez49Y",
  "key44": "4K61dTkMZ22Gq12jEKdaXa7P7qVp7SxjJCzwJaaNh2bviGbw29bj862xAutkgjnGLMjpDX5aE6zAGS9d2uVt3jAn",
  "key45": "5wBvhPyghFvo5Ane7czC6afau9tbcitTn9AzTMSiHfeNiebqU8wqkaJdAMLN1jePErZ1vmDFa5hJQp4Fa1nPHHsM",
  "key46": "NGrTnSGtZk4iZ97YFrm7qp81wZZHXrvTbKx3V3Q3MMfpczVnZB8BnRzkhdtMnUX46crg7eTrGAH2YPr6rikgdbP"
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
