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
    "46gwuanGKS2DCUSWF9aQqbkdN3xnN4Rh4AccJ9U5BCCMpZb9rNqTujbaRHUDKNFGciCnvG5QEKFoTKQHPndjsiGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgmjR1gcb9TvB5JgV8R8sLdyUckx8B1Wr5XbonAQUw2Z9txCgLUCSwKKNeWruXaPUtSCP4uGr9kL5C2SA9kHdMv",
  "key1": "52JMo5gjA7gS4Dgg7j2m77NQf9XqX26dfeszdjhszp5qvdqF77pNpY52rsDz2mv24hSFjo8L4Do3cDczN6x95ecP",
  "key2": "3A6kbrHuFdGHZPr8WUskTFnT5B4SZ3xthdb6Jiik2rm3pyMi3bgnnLNYsr8FQM2r8ZxPwSbeegvK2WE81LHhtVbj",
  "key3": "56KHbCGPGukj79QedRwuYQYEk7TwN7ka9AWhGJcor8qUQCuTtq1ZXhhwq2deiHPXeZJjogB12joDsRCD2HthkfaM",
  "key4": "2zeYvVXRZP8E8j4DA5ThfytXSH8RtDxpGk8LhNcuDwhpHiE4PCvDbsmU64jxtWqWiKx32RrPfcXFB1pH4XAtxqHG",
  "key5": "49hth1VEDkM7e9arEap58BpK5weUAuJCwALX8EUWKeQGW2xYqm3newzf8F1WeJSRRRarqYvsSxrKbgTWQWtkBgbQ",
  "key6": "MPhrkAHAfCmqpx2ei2sfhqeMjMMYztEdGYJoz149f1Q4SHFeLV9RMLDYzjjcvk7ggvBryZXjYyLmLxGztrXmQrb",
  "key7": "NVjhYzB9orHdVwTGGMc8FCvVqzi8TTqWmdPxwnUMZ1JVJKKYDx2PXTa5VtZqCqcdbLUZcVj4enKn4S49sfRjwD3",
  "key8": "5TwHuR7gZdK79mAQPJbjJZJnswevPoWsbcjfZ3z3jmUNUd6oR9asnxrvgJNMEmdxzSuc9aUY2pchNN5hqFTxn3iD",
  "key9": "5aP5TT124o9e5vkVXCKxtjjAdH6QxTotVpw1DTegVURt98nTMcLLBq7BUYigpKFhvLLby9u9R3U9faWqHUa4KspJ",
  "key10": "4wvx7ehRpiEcVcjDPGu61HJaanarkp3wKLtMRibdeNioG67ypyHwZR1XRFbRkbsHqednDF5kWVRvf4WpodQuJPrn",
  "key11": "3ht4pq6YJ3kZbFwk8WrapHxADVZoxutzUkqekV3WVzyEXamC3WE7H2N4CncsmhcT8rZUBXVvUdzDyMmADpYQ4kNH",
  "key12": "229EhCHTfsgbN6auixU7D5YGq6ZZF62gkYi279S28ssbAz8jisuAsBSazWx12euQAyCEfn826QM7Ecv4r6ACewM6",
  "key13": "54eWYMYSSpVoSBGSVzQJto8zAMBG6tSDTuW4KrZR9f3MSaud42rJmWJ6iz7HZdNQj9FjGtDun2Wm8qT7PnwKaZnQ",
  "key14": "337spg6otYjrzF4rkairtPX7GSqjjss3RMhtLHcvCQ1wYwAtbwjsqZyCajAacQFjpGP23MHQjZgH67HqfCFNjqSk",
  "key15": "3bME9t9iMiqfiLAKMjvZtes5eSMFcHWCUjuwnjrcBTUJgyfsHWka9pGg99cuNrC4MtCcB6SLj9bcwWWLUGEbNbag",
  "key16": "4HxQs6hG9wa2RxRzYF1ahTC6DtgcZ29iZ6zkEJLxpdpG9TbJDyd774JsDrZ15FTaD9N2z1XsxzzwQQQkN1UuiXbz",
  "key17": "aLYedpFaiz47DNtW5s5qUwYcWphDF6YkdJujZ5thXrMt4Faurytme1ExF5ajCsa1HSDc4TL16apHVhBVSGgsPZ4",
  "key18": "2QYrZCyvfnT4w2DetNFtoHsF49GSSAh1AyTKEThGEErqETgXkLj2nba3pi2Ery9uTU3EESg4orcUMBSrfCkF3UZT",
  "key19": "5auLWw9fSpwhuR1k4LXSK3fzJVDzVBWG1S3FK3RQv9QTc36NWZgeWuBNRjjcpVFyWR1JPDNoLXq1GmKBDyNfzJMp",
  "key20": "mGBSDNkhdvH2x3jYsvZ59kHvAvRPDX4A7dQJtiAKka5Vg9DrijTdCCs4QPKjYPBkQt875EcMngVAfncHeNaC6Xq",
  "key21": "4tY3da6EkdPvWyz8Tq62NzL4PRnmCn1Xo4akzo9c8ZHTdB2FRFxf8WD42PN9TSGdC2Dv8qta9rjZAwDjsCxwZMbZ",
  "key22": "23a3vu1AbL31wSuP7ieGi3XJ844UJdierJvMA4yx269gdRdsXxQZJGJ6LKRqR9iKrLot9aWmqjUyA63yKjRnb9Ce",
  "key23": "3DVMDPBW1N1KpBd2o2qEgSq7Ms9DAGt5UKmnpik6oiobQKpPk56FtCJ1x3X6cErahHWWSb4vaNQjnN3kpgxMnMCV",
  "key24": "5dG2XyByKmuveqMxBEVAZ6pKeLskyB4fq4HCy3mVb77jHTeC7bDUBg1CxY2FJvy4SnpSXcbSe6DQ7BUmVxLzXj8r",
  "key25": "5nUe65wb8yNE7Mv9wVuZ8avEYhtmnZG9E2LPcT3Mm7UH1CvbPg99riAwPmh9SYyc1g3vnrNms1JQwm9WKSNBtYZr",
  "key26": "5aGh58BUGwHYFVzszCeY7XYsrKqJiDf5Qq8dyDr8yv654rnNkRrfKzDS29PiaPnRVam2jnm5K2P9eXP8qcEwydwj",
  "key27": "3fbVqaS8hgw7RAMGz6ptsVwAmR7pNXSCYKBuR2vvbfWD6x59Z8zQ1PiKNNezrer2LEgeYw9AXRfpQyoboL2YCDG6",
  "key28": "3gBMHJnehyy8aXs75PADgcE8FZERNomqdAorFvi5HfeKT6E2LABkvUC8M6sQDQHq4gXCrZfWtfe48a8x43kDYEBE",
  "key29": "63uqfcBAjruA6m5yrSzK5Txb4ciJRtQHEGMwbCijN7Mo4SBuVMAQWcuAazXkSN6eshUkY7Y3PEvcemAtQrhdhoF3",
  "key30": "zRrxvephyF9vJZCQes1BHKF9RQvP3Ens4FWe33941q4qmzhfc1AJieoaSrd8vGxLNNegosGZemEw4eFxq1KiRMj",
  "key31": "4iRSDB9MjujkgxnwArppwbdW1uBvXjpu63HjXzFi4jEM7VGtjB2JxYGAEYQJazyCjEMzLHtipFWqY55dWmeYx3hq",
  "key32": "MCZNxHi6CQzdXu6Qg6nAgoN92pcxVVbnrps6NFULxLiDAP8CFKY2gxFLKFdudnHPcVanZ3LP35THizStv3ui1Fz",
  "key33": "4WeRT4t1wHG4BHcBFWfiS2DsBCCyKb7guckeXxYAuMeD5tLQPw6PyEPD5A9cTGYXQtJi4prrHzUwrR2xqRCmpiza",
  "key34": "5dNeSoXLMxigiKij2hEUE9AfXfEhesvh5vXaZkdTUQiTVPK9DepJVygYqXFh6CsPEJEyqDjvg2JMFWbokZXiRBZU",
  "key35": "5xFrdJmZjRyXDy8m1YZM7S1kC5oW6UQAxKeihvhq6ZJrLBSQawCzjDYY6Q7rSaosxEVFV17P3oamb22BMJFHvoc9",
  "key36": "kACKfRW5BNSa39rSkxCZ7m3CupEhcWLCSaqCx2CEbz43a2M35Jz4JNQeYn36M8xVosKpFqnE7gDZcJevvc95tR8"
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
