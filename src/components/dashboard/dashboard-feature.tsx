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
    "5jQyKvdxAQ8c5ewo6b4cNWANita8d4yT5838hTUmBnv4pB5Vftv1XJJfRHDxaHztaTgftHHktxAqfaTF5GP5sx54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aNWsvbPJvz74Cj6vrvVPQ1omsTCzd3R6ZkV1fbsnRkWDtNTPWDbGWQuYdy5wrAjXYvEwboy7j9j5HcBJKo35cY4",
  "key1": "5n2XDUfnv3NJisjjZHVJsyNXYYRQ6LgoaYWL6nLfUd24nXsfYTv2GzuYo4mhx435D3BGMAs78E2yVu3XodbmgSgT",
  "key2": "xnWDXH8hN4jcmeLiX8jx19F6ihVTuzEWCXsYiWyMiw7Q9uregd9pv6UxWm27cp3HovBG1fYhGEhtJYCpkNHMVxN",
  "key3": "4rdF4Xj2MJkHS3TNSZdrr6JwNUhck3ca5dgZKphUgHtnEjTtpxhBkHZqaCCG2rcPstPCuBVV4Y86C7uwih4Nm1cv",
  "key4": "2414udUtZhbZRMiUnf9Fcot3VYXuFj4EZPFbVxRB6pF51C5RpJsNCw3vuG7KNN3nYDtfqbQPGG7DBJecpnGP8nRL",
  "key5": "2sYiAY6dgQS2JjHChfc8Am1arEAWz2GKwaR6Py7xQyWkdLjB1VoeWmBN11A1vrQncqAX3gq3MccRdh2euwVdru83",
  "key6": "2LEEn5RMvXftyQmN4mvruQj1r5MvcewRmPKtTgWVVDsZSVHdGtQ2ZFipZRCnDA173GsHH2uGyjFtyxwfq1PVgeWW",
  "key7": "37iEZcibRBLbE9KWrnYuxwg5RFZSQcpkL6r6vghBu3XkEAhfnGT24ZpzzHq7XQPV9yHmnj2gzaJ3H3iWAVi2yaU1",
  "key8": "2sLducTi8J6BD1ks4ZcVscUtBCFJaByhptDiNshBXKrraaUYjvC1HN6dwXdk7ETQMkZijhsaJNfgF92zGFGEsR9B",
  "key9": "5HisatQUQiQWmkZJ4JVu2GWr2x7WxygKkF9r8JN6SR6fVsWBnSub7LcvpZpDJxe8pyoR6GNxzgxmTZFbkYBbzAeo",
  "key10": "5QCor5WVmBgxaSzuTvpT7QaE93MRiPjrrHqDudCeojULELKtX8RLAaKT3G9eBKr84fRdX9fWVZZmAwkJojCMAptz",
  "key11": "5nR7z71uDjA4XNNhk3sMoEdUH6ycDPLA2Bt6NSQdvy5pruYKdVvnAWHmi78z6bfeQ5PqZBcDFPwckH7Pgir38ffm",
  "key12": "4iqK3ZcumWFP1qcQvD3Yygu2fZsC6JfSk5AKTktfHfZrR4fXF8yTKdnfENdWdyjaYEj9wcdAGGaHPtAUt6gkEnb8",
  "key13": "44R11oQ1aegGeGBiz4yuYttAU7m4yxkhmNLauHWdoQNGSFpcYfitCFmiMNfUVXYWdXSfv8nEK1qW3hzKdX3eBJcw",
  "key14": "nT1AXgoiLbAYxnbYXiFEc8adnYKbZsA3xj3wC8kofzpPBkZe72XpCWAPsgY8yoByjxJdWztwdxfXQEZtwCXw9vr",
  "key15": "2JXBPCxjapWoPPVYH9W4SnDbfaaSVdjpMkjg9CkbgW5uzgrxLDYBU4LsNvjmSkA8D8qHi8nioEYghxnK1zBLfXSK",
  "key16": "5e96XX2WaLiYzdAq3CCHJB1bD99uVAhZXMmWbXQFXVakGR8c2hvdNHsP4Q2n1ofhg6Jz1MYxL12ZGtiMVCbcbvF2",
  "key17": "5x1vmwwZq5DN39WhQYtEkJbyENEWGBL3fxUMCbXtY1XJuw5zhaxPqvTTR5BxTAMhSLzj9vLA3fxiSLTXN8XX2dTE",
  "key18": "21hXp8jBjhXTBrqYAMiDvfX4PZaLvpD7JntxBEXxRZ2zHiKnNS1RNrSNEpYuLXtX45E9Zs8aa45UiPuMTbmLEDzK",
  "key19": "5hU36wqkvPzK9PfGEcRfr3Fi7xeGgFT1Rmthn5HFttYC8hA5BUYBfzAGmKgDFdoLNmATW6K4Z7ng68BCdhE5PuPs",
  "key20": "3UvuHNuHatDVPcdJRFr5NvkDocAjFy3LM4ZbKZKfeCXquVaUQtgex411juChYavxVjYtxe6o28idpAS3rvVAxRjA",
  "key21": "2eEaC2MkE3gaCsVSoKAjoQXkU37JfoxGeRKAcAwcH6z2uGQuAa6fKXUqPobEmatMHhP4wCZGmV2SYMLXZHiuhS62",
  "key22": "oV5MsoYKFAGUigGT8cve3Yx8YGDgWxXykjzFmGDUSeeV6gmfttBM5wDyLqqecxNvBgFs7meUmpmzpEBmWrprLaC",
  "key23": "4TPJkMoGQZ2xzaDogqH6P4bbrViqgjWdKuE9Xc7bJFrijAmX4sJ2QeLDyJr4TD32hLH63vhZDVYDH3vyR43kBHWs",
  "key24": "2LSrQDtdARHhnPtKJ8BpPn7SxrzAs6Bq2upYu5a6w2APwZQ6GbQJJZTQjAPFoXNpjPy9PgHnK4QDmAdiLGhWbQpS",
  "key25": "ScrbZLGC4A9qE4hm74Rig6U133c5bAHmEmZTixHjGKFgQukbs8xtEAqVPsRTsYicWDrWDqGXCaNni7UETCMBtAW",
  "key26": "2xECwhCxEBmre3DjYk481nwp5jrac5q8NDsZ7ZHb3EBzhajHKNQGrBrBGMXVWmyn69MtkD6jJ587mwJdKsLdH1o3",
  "key27": "5g6G9eBMfmEnPBQdcbGDT1BZwsnF5V4N37LwBmcV2ccAFopXCREp7PUgsvs3LrzK8Fb6aBojj9kTYLWNJ7Ug2A3u",
  "key28": "4oEvBza32ghaovcohnRAPTHoAdhbq5PcNksxJc462XLua3DxQzAtCaQbzsLYmhJ1EcqxaaBwiBVNFphkfd2xpvLo",
  "key29": "61N5ZwjNsadjRTJTio9Hkjhd4uidYN2ZZNGnEUgydoaTgfzce9kwsTENcc433KAN8KzPFAR13oFrKB97c3z2QKXk",
  "key30": "4YV9sEotkKFxj1DWGeTa4WRyRbuVjpoPMzi4qErihTcDFo2gnoEPqyUcuqdn3qXiNjYsBgkyGWVLgAerQkYVt51Y",
  "key31": "559o67VnUWsqpdafZHUM2PvaEoajxvP6w8cGauzFhW4pkuupCGnCF3vMJAr4cgoWnwC1Fh71hW2CYzpxr8y6Pbts",
  "key32": "46ahsp8HsXaGhzidzBdnML7eUHQuYJR6uc58ojJgtL7iyKKBtx8RHZgUayno2u12RdMBnjtnZKyUJ4gxqRmFaFtT",
  "key33": "D8tNT6U7y341E8wNTawefF6mJrprmpAWJHngZV49zT5Ur6yawcckhXLsT8cUSTDU2Gnm9QSPw3hJaxVHNEoPSJY",
  "key34": "47SxpT5DwiWAeRzsqabJSL6KTZ6bzw4fwdZPqfPpKZUEu1keqUYFWSbWf4HnNrHo1YzKNXKVTiu5tUqVz4sBbjut",
  "key35": "2hVE3w491yzFG3pNxLbAfuFpFUpJJuYWCe645mcqTDmA6WFkowncF7VJR2EL2oJEeQMoYSX7HpQkcYFztiqTxkie",
  "key36": "5r93y7pgezdJNnnYyUCFZFssUszHiE5f1VC5mzvMK5aVPY8LDLW2L3BzG4x4RD1tE6otKpmvpZqytM55K89hmtDP",
  "key37": "26gimP2UCtGmXeqnmzj57sc5s4fp87dmX3qUnqWTTWq1kDcW5NLrB3FiP85rWiRAVV78Qa944Gv1Y4LngCxGxFp4",
  "key38": "5FdxeUjEbpXm6FwmzvUA4yxwLocnS3Z9erqZrJmBZnbHimYZTxXP6NiPpgSA6qBhXShvLV2eGNvM4aMDeF8MZ8uj",
  "key39": "LwLpkP6aikcxGjia5i48yRM1Y88KicAg38eP4fGHr98mCtME1kZqNsoH4AziZRRrW2gWxuErS2c1Qz2LjHUh3Dd",
  "key40": "5tJ7hvF4u4nYZ1zFZKqq5op5Ahq4Z5AgKwwfw1CDUAxgMR6Y6Nfq3dqBZd2JjMFE7o8VkwGY7pbj69e6155LZu2t",
  "key41": "3ADQoMb7HdjHQCdRmLBJiBaaXEUhuyvpRHaYjk3HMGLcAPxyMYq8qFxRMcJ19MTjv6ckCFKesZcJkhoYUd4XtFY4",
  "key42": "28HNCSiwSRv4gTSdK3kXgMD6VkFGAmef1VZsJB3hA9GC99GK3HoC782hzcsi7E6yfmMss5MqZZQ4bHf9uY3dtPhd",
  "key43": "KvzLMkQAk1in3A4bdmjziAKDpC1Tn9eLZaquna19J1mGaSiYGLdMwEcAnjvbyEbBxMGdMXpRL5RAWrgYqExYpdS",
  "key44": "4TKLRr4TpF6fLrx9KPkrjanrXHaWfqGVZs5B3jpHjsvpQYDnocRARbPPFuZg2dbrR2tiSAgjSnLPrGtTAiXCKwCz",
  "key45": "3yZyXu75LYWA3TYtw1BtLfFuQ9799rvqqsuq8XkvpGKyAvbuNJQYq71dUN9r5uuwkvT7pgtfAaE9Z6rdFHgf31sZ"
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
