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
    "5Rh1uqgwFg5aatbZnQRJaodu37uUzVQb8fo9Gq3grp6YRyyS2Ryt77x6wmuR8VHQTToVDSeN71EBiJWAyAYktji2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oK9FWiTxGC9QUsvx5eXACVqT2hviqezAahm2oEEZzGw5byd2ADuk7yW9XPyeZtV5HtUkrWtf5zME9DhtJNckKCG",
  "key1": "4mfs3sKhxAejYXEdbuEJYjEQuwd1nqerYrhCCQQbX6o3BFfm8gy478JkdAt6NEHLYz5odTXCmw1Dq1jSMH21QEG4",
  "key2": "4stwcQYMMos6BcCQLTpB8E3Z6AkC78f9kKfvhfc7K1ajawSPrq9y3YSYw3gF1V7nGzPED2EcMdHKHD3sRFum95pd",
  "key3": "5HT9WqbppU6eHVufcxUYMDZceUdxyhqH8jzYgCRpBAYovyQYBtDRghEU7YUQQxMj6WZ8ztjLeq7rxxLLHEuWZ5XE",
  "key4": "3rmnuDBLvLsVskA8g4viNiNwTGvbscrDsjDbRPDEKCrF7eFvBvRqK1htwGhDJ8dFzYWxTdRnpnTQUeLxBHwLGkoC",
  "key5": "2EXwENCvAwPvxaMcL8qQDiBjcQQgrbVDvpptGav5wN1ZRWB4psu12kgEwaBiJomC3cfGWz44LSDhoGnHZBXPafJv",
  "key6": "5YLwWgNAZDQi8EMsyrXZDicYApvapuqjtTNoDzFF4oizCuSfuCzxPDMk5C18cerqz7ZZRiBq8iUGqJHWVXJP9vMN",
  "key7": "3kb9S63EomrJJS37mjnnKVRcHdwMF7DvqJaL6gX55a9aCdaWihucbLggjCxcneAiyzUpcF7T9Yt321V2V9dRMCGp",
  "key8": "229KLxzSFSgRQqV9fqR1tvXou6aqRGgwvhsZca1wmiMJgcKEXEZNqmNB9BMoRqeawRiBRCjxe6gAewbVHc3LsYYk",
  "key9": "jmmk8CATQKuPnzfrAocxM5kRZrVxemAwYPM5M1es9GzW71TSMhJozTyYRvrYnjMK5sHTm1UqwLnnBi78rYWNM8p",
  "key10": "5A38S5jUpcufh9vZov7kpzsNSjJv6gK5uoLvCC95B44rZMuirRnGgJqGDqDoGJ15BYgdAzjKQ9SxTFDBAxoj6JjQ",
  "key11": "5eezcEKfg5e2CwDCdcosTr6U5Bs9T6ypAX3B5E6sk9G7j7vs7xexpvjr5qAc1oVrzkXs8AiLRbee7TEyFaGk99gr",
  "key12": "5JKgD1yFWcaePNSGUqofUvpYuLgEmE1CBm1S8REWVrZEjY8vt7YvnrYSqEKJbgNjwg3oZSfe7jwTyCfC94WCUdF1",
  "key13": "DNQJJyseE5F6iieTonW4v88YaQkkMenk6K6nk9FptXLf8trgb1EJ3QMb3z7RucAgEcSy64YS3soDAtkrEfne6Fc",
  "key14": "9n59gHwkQpJ3yCTfcrnXdf1jSZh2p7xhTxjeZvKfpchzNWdTFsxwkhAFAFonbkLDBaAHSmcFD8MMxVwdYqUXi2D",
  "key15": "5wrVMkVy9DuMcqYeqpAgKxQ9zVyv1vWQTFZUpsj5dH2yhZuW3r6LdiDU26YnM9L1prK8Y2ZLYW712SL9DQjFESP7",
  "key16": "4RC2X3FnWK1o4rYbhuMPS4XPgVedJ4b9cHTKFRLVaoED565vBcihMyqiJySxyCJdFtirRBGL8PEda7kw5Vn9T4MP",
  "key17": "4naQxqMPLEgBwxKwMDdWu7aGm1JPHHFGAbTrB6qVrVKwRVajMUHpo1s1auZQw5zmRHisWP4PgFSyEkzcEb5PNTn8",
  "key18": "31nEgLxUaXQERm1a945x4ZG3MLboEkWT9yFxcDVzavzpNmRb4J5TzjkdbqSVUs76HF4NoB14DrdiPbymm8hd13wJ",
  "key19": "4BYzjvzxX9J85RKzAbdvmwgAjBuv7K7dmCK9tXPw4H2wLP59J8qdzicTzRzET2GpNVr9aAub4tMWPgTQ1LporT6X",
  "key20": "2dqUp9ZHsPYkEcsAwiv5ZSoX2cz1u3iNf7Gi5muJpWXCnPuZ9y2m8ntu8EZWBpzpCL2przSbNskmeSea9v9WU1uN",
  "key21": "4XgJyn6DjN581fKZMF1oRasNwoinhomatCqj9v1QtZzXbc6BmRi3WZHyHz84NaSe5SfFwv8khL47ZDkZB1dY9Dy2",
  "key22": "UiJCoDp1NRXrtdsRiwXJZ6ameduCw32im1fmPwqUvYb3wr291MADNdvi2ywFUmepdbNGqWwsrhEwvyguPV42Yx4",
  "key23": "4Qbg94BwqkffKzuGRd8mYjQaYEHJyW9h5cK5LPnPbYceUPPq6pShDvxXrm56RMV6qHg1NjoD8ZmU38YoE6NC42bV",
  "key24": "4BFW4uiWLxDA6355v3dFxuap2ShHCSMGMJwxFekzVEjmKvcR2QYSjwwV9H2qCkTAZyD2UbE6xeJweps3CMuFPDp1",
  "key25": "5VXngge45YjjXmQmpsqVRBffQt6LTSqiuooxfcZdX4adsKvXQ67Q1PLEBL69WiJUouRzLXg2wbYCbfNmPFfjEFq",
  "key26": "4jMYNumqytyBfQ7SimWMt8nMCueinmfyf2MgiT1SsaL7c8hBHdNDPKKQCpFhLArbqX6eUbSvKosA9MLRnezehL7b",
  "key27": "4TJsbDfp98SxNACMKe6xwypCPcwSsqcpLhxqiAwf1jzRR7ZmitEyRJEJjjobX2qY6MNxNWShNjnm76es2c7mE5MZ",
  "key28": "2VZd4g8XGZ9s1XV7Sjz2VWfg2kqYBkHVcxc2gXHmc5BrVHv3arXiFEuLnK82sKh1QNhgKK5mzmDRAx2MHnZZGzJo",
  "key29": "33Q32JhJjirbv6LuatmdbkMfmWUBpN5sRZX6BvfLPqMDvgFgpQxHigqdW5Lc81mAkfUKnCQUurZavujS3C2RDfyS",
  "key30": "2hNWCVvCYwXDW1Q2ZsXjuepRt8ReAnZbpg4pgV4cVc76BxW3hf9Rd1AyhHnzji61DadtRXYZPBAoCwU6Mc4JywRb",
  "key31": "4Gw7JFLtq16su3J68FZMdhsxFbGdhKWnuncNARDko4VWQmgdNeno4qY4Gme8VfpMZ7ojQ1Dq2WeHECu72U4Yp8t2",
  "key32": "4f7mVwdGwj7ybofXoi9DKg2V2239jaHeMH3A4eVdY15eS4Ms5xk2LZMdXthVu61wgwQhX4ZKeXJdpgzHXmbDKgva",
  "key33": "4S5JUdNTWjUB9MpuBUvzMW3YsmHU3HpEyuDCuiXpnwratgFKEavDEAEP6FLY8qdb5sw9ahR8meVD7U7QUEn1e8Ba",
  "key34": "2fLZKiaX5ewZyeYLN62Jn1GU62E1Ygt3Asx3cbRWL1kLFr2QhoWzc3tHZxKLKC4p4tczChxFiWEavZKbNt1zh4pY",
  "key35": "4JHJcvgeWYk5HuA6iCPzfXLXQHakA9ZJkqUip495z984QtbeTKpkj6hKfGNSgB1b1bt3a8iT29Ws5eyt2Q1D4mQh",
  "key36": "2NfJqP4QHoMx31GFFTeN4fyNXMyh4teGEoZnHSirBHpDKGpeVrSD222zp86wY7ajVbgwjbcZ8YtZ5uCe3F5Q6jPL",
  "key37": "3vmLHKK32SnRLUDYnHYUUBfmeyxzaX8GxRrSJxeiz9AmUB35tXrZW8v4iLvxDKukftPGWaow1wcEYq6Bs1JhUSc",
  "key38": "BbA4krKpqJegbYETRU1cmgzW1MobCBaALgrzbJABvKNvRATAFzqz3QcnvCcvgu5nxr7s9jczg6He4BMYWuRSFQf",
  "key39": "2wLCrernbBkHvxK3nPd5tEgNzLfEb4JZKFNgtuCikhruYnK5HUjna6oKZwwQ3Kwk9CfTowDndHttPdRtsjvYWBRR",
  "key40": "3tofdGCLnL491NGGiC9RfswywbuHRJk3MJ44VBQkG4LrrwsYZMfim4Q9XiuX7w1DvnKzBag1jA1hQCQacJEr1xWh"
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
