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
    "2TAY1F7ncnA9oGFFdu1JJyW1NTaouB46mSeQb8eQDboxadgdCZTow9b5Pp1re48viW8H3HFQ8uaL1EmTyusg5qPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCUU6HLfHsGAaab27qCbekKmPsnwW1TiSP3MUJ8nhC6nBnFQdu1kgYxco3Ht7n5um5PrNnTBfcs8WfzobZVPbKR",
  "key1": "3ETzpexN8DiHiQtzuKSnrPTY7SXfWaNt7JzZYwGfAhS9iEgRWLuGn9Ut3KtSaX7jTSk1kYwPLEzPRNAammJTQNd1",
  "key2": "5RQyxuemXZ1qK7qaEeb57bP7oskVjxCim2UbBjkuAYAhYPNELE4Ln8XqULHcRiVVpk6vP9fLSTcgdFuQgxS7nqnw",
  "key3": "3sccW4co4EDKJNcNLYq8cdrW4AkeRSxwiMz8N5e6vnw8bNTK5EBvo9yHzY2nvaDwuhdu8pyKjE6CUyjuhzZZ4Di3",
  "key4": "4FMwwhE1nUAHwq86VY78AJTqEW4MnXSwkjrxZBdTKxP85ZFVLbmHF1Z8RLK6T8HRdSEpg25JDxjef4rb5p4HmMam",
  "key5": "3vTPpsSfk1DUqiB4cCM5q9RyJcBz6eHSb7uunTdGaybx3ZMMxrd7FQanyeWMoeySd2YvdrNHcQfHEswdor9NAb2J",
  "key6": "2SBFg7937LoAtsry5ZKL9NgmKVyMgjeuwU2snXPXJPd3auLhrWSunKyBsBALMGd8JZHTZToZNDvXNYQMkxuEkSv1",
  "key7": "59NtQZSAD8oTahajmdUs7xajac4MdthVPABu4usVc7e8VSAV7B8sViUE2uPpjc5KVv6CdsXQPcg8hdufixGw8JNT",
  "key8": "3kDbsvLgz8xMiHbiSgyew6ogHtYyo3M4eeZ15iMRaMtxH97aHAura7PWPJctH2h6juqzNhr4F3eXAkMe4nRy2tQe",
  "key9": "5Pw4nac775snzGyWuCKC8XiXpPywV6Vz1aha7giubkC256Xab4CENGC25C1e82VquCTLSM2XeQksCCUnZZYbSdZT",
  "key10": "5nui4uXDXr5J6kde7E65Pzek8B8SB4CzE5B29Ze2YmEwSEAEHnQzQN7aCzrpsExtC1H3fSsPnnB2n9BBjSDLFT4",
  "key11": "24vCodWMCcyxngxdMPimHJpoywerwdbVK5dZ2oo4mANtzZPegdGLKP7dGCZp4ynxnd8gPmRSTPb218JbsvKyCFgk",
  "key12": "45P8zi5FymCCMCfQUt3iBw8fTuYmYDmVafZsijxEqVW47tsefmRVk65RGABupo6XzRYd5ZVNrq5RrhF9QtX8HKzQ",
  "key13": "4FjFzmRRpvWfLmQa3AKWJ9ibCVVpCEdoNaoB4J7jFyMpH9wnE6U26TejvY1CTB2aZK6siy6fEJZeX9GGzDsPUnCJ",
  "key14": "3kjpPcuzVrzC3h1xQmZrS4am8vE2Arz4b7ovUQt63DbSMTvq5UWXqsuKZkH6mFnXBVW7EFSznqEcL9C3YT8b8Dsh",
  "key15": "2U1nXjrrvfMshv9KNG8RkUCqLmLKWkjDKPdzNaFLhHLuKzj9AAnPN9o1EsuCgUKMHY3QJgvQAGbbcv1HiUVEQf2v",
  "key16": "57vmMaNPh1633RVYBaVRSYjpCggD7Ff4PZKEp2taWVrhZ5Bec5hsMhF24TvUxyu13onNdjCBXoX72kvAnEgZHiQs",
  "key17": "55qi5QUiZy1XYL3a3Ra7yWcKZXtasssB8ErjQZL2sfLbZiXRc4hnjvgt3V5rrdyznAL77b9aeu854VpAgyDTATcC",
  "key18": "4T1hHyroQV7mVo7m8RqYmzVXtAJTAcGWzX9gW6A8Cw7dbikj8a31smX2zsym9RC33VwRNmmNcinHJsviZz2nMtjH",
  "key19": "5LY8YKP5dnZwFE9EK7wwJPTAWpD1XHbAtzbLw1ZCho3r841uZVk8BzcMBB76NT7QHgyttKTpcKiUwwo3wiWNf3Pd",
  "key20": "5GavVL99wq1HxaRi9gTMFuoWesRKtqdtZUuszTg5f6Zibh6fnjtnRjy4x5a8p11VZ5HoCBzQasci8HCphaCNZGMR",
  "key21": "3qCxPdKPEmV1cNsNGx3KecVnYLFsSoJYbZg9QnZAM9Ya2owHwvTNf1GsFKWj1QEqomfhe1Eo4ggGNnkbVKTdcrK",
  "key22": "2benpyvprSv7xQWtQA4j97QxoSKgnCmrveUUZ46LNhp7VcveBzEV7Xx7JCmA2vwcPzrfL9qFgHKPszjD1WqMXRpi",
  "key23": "4szgjcqj1Mz6LedLACSYanDRABB1UBtKTobqZoivuFgZ9eF1VXpqBEoMe2EEREDX6srUMvXRHdfVaukboxNwuzgt",
  "key24": "KY4PHrc4qtiDjYdgAZUxuQwnvniEw1PjWkGu8P9xkD2nqSNBWAxhwW3oRhkiGxr6sU6jDPBeQpt5ysFKHivMLfJ",
  "key25": "2RJhyTUW47SnV8iqegCsWG1GpxWQ6ATXJgD4FUEdLWSRzhE7y2t1j5GciapzfeHDDPmvZxeLGc2L5oEHqMAxv7Vt",
  "key26": "4w4yCZFNMU9km4MibrkohhUdrshv1k8TtKVY772ScVrN7Mim1p2buFnay26PY8SckBxGUyrViwubWMah9Rb8inRY",
  "key27": "383cPpRKJD4NQqBK6y6itSApbx2FnK2VaHe1ySUu9fmDfQ2DPzPZHVsJncjcTJppQHbCK5mxLX6JRXCe3TZB6pfU",
  "key28": "zSUxKY1C93iKD8ifJjEXxZnHFMw7ErTVaXUjjZ7hjNGze17ifJNMosfqZbDNYHp8u2CVovb8yfJTNZ9EUPDGg7n",
  "key29": "5xkxt32FcxgDjpEtN1gHtSgK4kztEA4D1Digu8Q2b1UUPGrAS7iS4JQjTbxqFVi5ojU7Qk7g87vyTF4Kux3p5r96",
  "key30": "aMZmJBo5ahTrrztCph21eAJeEbhxaR7Hvu6pNqQWMPNVyvvupCAtUNhEtTfcyLYm3zwEvk5F3RF2eawgan9KUou",
  "key31": "UPkiawSrtYSZx6WrtpC25RMTVNJGggjn7bzHbu4F4WNRSKbmUm5rJQeyWX2zAaAEmae8XRffbiXnd1X2PoXc1WL",
  "key32": "C9prm1h4Rumyfc2c374wATGfWJnzAgq1h4JTZiyDDXv6txRTZ4njodcBhPbEFeHLjAfjzUUai8y5gYQZ17WzWA2",
  "key33": "4u7rMeFWFvKZW3eg8ZzqRfnkSYxGU7daePN44uLw5i3sYWDWqfSWDiYkY7daWbrdeeYaC14h4EggaKxSHWo2RW1P",
  "key34": "4RfvCkzxYh9fqdae2XnkhWoxzUWzeZ3haUY1so1y4k5oQX1nsGe1iMT4AjH3sbe9bLepXxG5vo9oFqitqUf3rZXG",
  "key35": "38pAT4J3Xw3feETxfB2RJMkqJE4q5bwTKT2S1x3jQGwDhqFUC6GqGhLs8Pf5RDjjRdtoR3x7JDjwydJszrUKfAXF",
  "key36": "3Y8JvJxzcJLN8misecmvCo9wyGSFQFMscjeuHr43xEUPbw6dgDYjt6F25dM8DaXJH6LNVRi8SNFZKaYm8FkLCjE2",
  "key37": "2BffGV7yr7KxJDKyZWU6UZxMGnRdTvVDtBHvbkc4sRjAnaEdd7deShjR1VwTD1h6jBEkSU7DZg3uRFRCFKTNWe4u",
  "key38": "3M9dGgh4ByJS2UWs8xUgom3ghRdvvdGdFZbMJUz3BV83jJEZw5uJRoDbioSJHMKJVeTsYv1F5xPQrK9F7eqhb8nF",
  "key39": "8Y1YiALYThEHGmAkkESebBc5dvCmYrnHow9pvxpWF27xUmSXGKtieAM7eZKuLtForThXw8fB6tSmRoF8kqDWiyf"
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
