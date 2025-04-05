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
    "5w8rLjd85JBLzT9YYLPyAVdet3aFHj3LcC6MEhM1SSRZ4btyss9A34ofoPQFucJzy5U8oTNbsXq1jbGZXSd9kt1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nDo2ijaRQqd2LFpprVBLCaVTao1wUivQ7QeYaUC6jptzE7dGeaFCnpSSakQ3m8VQALa5z4dj7dUCWrpanGPDbB",
  "key1": "3DMwKhLRc3P5E2tytvNnzGcVYNvQLekTwPTSj28cEpy7EGL9rWv3f78FyYCdY1N9aPsDUJPyVDSAFHHY7zPfYDi3",
  "key2": "2qszbs1t1bicpEXLvV3dBfhbnDL29xssdvvxrBt99x3To9BWFrpa8qnFUdkKEYjnFinaCovdddiyK7T6BCREH4QD",
  "key3": "2ozxPTjk82viaECh9xr8u4mzqiEapbDDsW3CmGYVDCzjS5qVDRX8Qd7tQxvw9xk2BG1cfEQvRyL75XDzEq9TogdL",
  "key4": "37UiFsfrYRmW54oELzRvAG6PgBU1n3mADGVsT424GwnZSPEN33KJWX9obZsLrtB9UxFeetAKwuCUN4M9gZTLBJD3",
  "key5": "UNciLiSQz6qKAcGdivCTB6WjbmPoVjoVriwZTxsiwnyQJa12u3pQaeVfFUHoJJ9vCTagT9UMhzd9C7A1NEbnHXz",
  "key6": "49HhYdoXEzFZNU3m6Qe6jmnseNUsHgeNAHziYm9WBo9s79YiRjiXvaGvNkRrm39G5AYAAVZVxfcdL7eDjNut1e6D",
  "key7": "2oPM2jVyujHhujwTStTj7gF6rTLWqaTWdrJSkp9QQN4YZjyNramfRdk8VLZ63bEdK3DhCXsZxrLbbSTbqJ2j87DK",
  "key8": "2oqSveX4RRHUKeE2qJa7yVbNVqiaVtb5m7idq4zBYhPvfXoQ5d2dKijszKN4RtPZoZe88gQnehVceBfJUX87mDQY",
  "key9": "4RHQMQjZSL4CooiBTFWe6RT4xq9JbPjzofPAHrsjMQ3QBXvTAttUJpBtaQTREibmfsHcGFRrWPyZwrLJiBtAnB1b",
  "key10": "m5S8dpdsnEc5asA1E5rZSnjuoES9CGuuu4f7o1ZTcfypZAy7dQvcWZXBFtuGYbsnF6GJYTE1qM18hEPpEJ8rcrc",
  "key11": "5CwVrjBiJjaDQpVv7d7S5VV8kDJ9jmvLsFK7FxSQdXj4Q2wPbo46sjbp8hgpy7wmEdK6Qh6KmdY32owmMSxiFWP3",
  "key12": "4tvyoZjtyFeVwELpcbJY6Nj976imnqkMQtAVn6bi3jRJ2jhzsxFR9F84HYiinv2qteoQ2rRsnX6kRQMWjdRoudxv",
  "key13": "3zWwsyXTqHMvFLBF5REynxhoXA81kYdTeQxUQHyWgmdNV61kPkGAFpStay1RNKZuhKsSNGmTxrR6zwY5drmK8RhV",
  "key14": "5BeDmgU7onitxkjjYCv61V11dd9foq49C88nMUxySFWS46xArxXEeE1RKdym3C7yuiWfMwbTmTtQa4kUjQEiy9Fu",
  "key15": "4egCgjudpywtW3rm42wuNJQqBkLYM7isUQT8k35nDE8eQjUSXNuKA479mS9s938DvETssHfVZWYLTbCqUZZLqRGp",
  "key16": "3jfLZAVnkFtpvk929dufnoLiUL8Ly2G5Pw6YYfx6jwYyBCqSFfKxVPEsdiJgNEWWHjgedQW7tJk3Uy2YKkpCT2Pz",
  "key17": "BEXwo3by4QqZRvU6yGossakeXE7TdtFq8FWmGUAg4jAhhLeWiLv7WYFS2LhMWx784fcdizt4SYA62tW5WcswU3S",
  "key18": "2VpZy5tuKa5Hn24C81etgPMT6bvbqVuy7W5fnBYjJshQ68bSSbpc21KoGbFSkdKCk3ZwudCmsszP3MJRH2odm7NC",
  "key19": "TyRKR8wisknScbUY9nMz8reX4y27FoqhCd25q1PpUxkqfCcat5Vqhuu9vM3YyhjoCTHTVkrVoyrXjL7ess5oMgw",
  "key20": "JzByeBx1Vvzgyefq8QXPP7BiVMc6znee1wsH7kf8iV6fXjMZxLuwLg3RuSk1h9DH8H6MTJjvCjPHKiWsWs1h2yq",
  "key21": "3rWGAToQe8zRGJB2UswwkVVw4hFCPyzXyZXHzYuiCanmqa2N7gMEiygoTxK4sQUhn2CDXo8c3HcRbzZWz73Eiogi",
  "key22": "4hu8tEVNS39bBLBJHizhwmbCQURBcYwCGQt1rK93v7nJiiqCykRsgUKHkB4UJpaRwY7eV8eodpKyUhKWc1E3DzZV",
  "key23": "321uhUuje6dqqJnwZXfJ33tas21qiPvuBstpfrEVFuthWs5s8hZQjCm8kV2PjeinocTLGcxZhW8NP7VvBrxGGoRk",
  "key24": "5y4exzDcvPkTMSWfeK5Xk5USWqrv5jwrV4jphS4q7NJ3jQK3dq9JAW4ZgCvS5o93pXpjyYMCFbrRnKa43x8giTAv",
  "key25": "41eUWxZnLthNbA7tSbBQQ2A7rKobhpYSWyTphP5DLDgsfMinbr58dQXt6yu5iLett6KVuXsjKM99SZHd4ymfHjdC",
  "key26": "2wvEGHA3SusvrrX1dCvkfXhi1vTUT34UdPhdcvEhhDAHi7mqGQZyRcqbF5U2fBLTWovfZGS2TUwiqRNCLtznG9hp",
  "key27": "2dRJnJYXdx5hkMziwnKBXs5Wb22gDs6UXGxrV2AferU9xWMCfQqm2uL5taaqXYTRD9Jg5azSAbdbHtGiXiJmo9S3",
  "key28": "D27GCA23RHmMXpA5hrMENr6mYzjhVymqMgHMXwiRnJqgd7vpSXq3LLfPAcwt3vRJmJaadshsGcr3Dwcjzyo64rL",
  "key29": "2Wq1KXxkqEzRjNnU87m78bpoTDQZFmHgJm6s7SRTGpfkCUG7FQu51D2WQVt8AeuuJvANJkVY7QEm93736NE39PCX",
  "key30": "4CkS7zhWKpv85Gx5NXyhhhkbNvxHJevSMuo93wuqvD3xMtf8L9WyYNUrUKeiXXjyNJEz92sWHh4E92cn6BiiaudH",
  "key31": "2YybE1hrTZNxrQUyJ6CyZNvN5wPrh1BiypK5nh6uUwDaHTq22iVdoTEPnzjTBnfJbZD2LQYiF7Y1qLAADHWKkAYJ",
  "key32": "3X5vdwB5AUbf8CxqMup2ZkFwhv2Zs2TqPyTk9ggFCqFjLo1aMPUSSkjMviJLpVE5cDWrFhPoMFk9g9z3mdMtxyNM",
  "key33": "3p5wQhW6KTsBTmrcaKzPeWpmmyyDQPEMaZ1Rm1HbHvTA5XZvUmzxZfNip9bL8BGdCwWfuokVFYz1aoDtq2kP9ynf",
  "key34": "2yniHPDANp4sAwEATo2uVpKosUYpodKUXVnfcUUSs51tvHPcG6Vh5qMNknmuezcWi8j8x4hbmfs2fV6Z1EfDgAcm",
  "key35": "58RW8awjA9Z2k934eBowHBrXhLYpvkjPgJcphn5ZkxnyspZC13VhawH1uuXPpHzPaTxLWHzRadZmrY5A9Eeoi7uR",
  "key36": "3YW1VvnxNHeo5xpC37sJpTLmafjsdGNcdyskEC7vJMmJ3NjM9mf6eP37qfaFqhEEX2ewMKpZ4HyLH7VZjiyN8Voi"
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
