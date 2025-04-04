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
    "3cTWyTpeWF6eaN1ydtBi7VymBB4dZnztxMRZkD62dX54tVwnkRniQb3tEWkVeCEVTs56CDkeuEin4SFfeEz3i8ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TqEsazTLSiNBWDZVFV79uqn7ae6aYscvYiZF2b7wb9RUsX62bvtJ4HypPaYsEDWXLm9oqgKByYmtLpB5AD9J2Ax",
  "key1": "sezHswa1rn6HSmBtqCcMBbi618Gk8apwraiJR7Dtixd6v8odhh8QdfYkszroAdTDRWitfFNQYMHJTz6xADWJXAQ",
  "key2": "xoiAkSW2zhZjJTa131zBMYYmkybj9CnPwGoqf3DnM7B4wFaDjXzd6Mm9XgqU7mZoQAy4pvUehDGnyGqUd2jfk3Y",
  "key3": "3Ao2QWexfnhDBHduPydhuXEgJS9sJTbuiDKrZUQA2uv24Jecra2CRT57zicqEr89jU1XytW87BSCKwDd1boM1gro",
  "key4": "5qxrhwe4LYTb4wm7qycVWxR2PquTZzwtQDsTKLT2owN7jrKoZxQF9aQEn3m7o229bQwrHgMJ7fZBB8fzV5CBgsc1",
  "key5": "32VM3toNipPHv5nz2D6jx6B8NQ5gCKSfAE3fbHxYBLzT4Z9XA45VkiZWKqjYXuMUdh4UeeZK7dfu7pscpbVtM9ir",
  "key6": "xUuDrXoYV3fUzGjvxpMoiu5QRQoqSobtUEkdhafqvb9JXrEvQoUmZMQXnJecZY2EqTvackgoRFwtAnBczsu7he5",
  "key7": "3pHYtdt9gwakip83pv2cPGVzJtFGV4TRAPcnmGcYNCHrNb8E4JiVSTgajooVPYbcs2nMfnFCH1REaXJCGXvMTnNs",
  "key8": "2R9x9CtyZkWdUkb5TzZyjkYHdnUaX1Sniq7TwRAG1g5DUuzefMmQ1UjJtXyqKzvpY7swSYZrLosiGQHBud9GJ6Lb",
  "key9": "62HvEqHQoKQ8xaYvUuRrZyWKpnjotJjg1PoXMTFAicFtWaneFrW6NSao3wf5qbJGAEWVokow3NPjf5TpxygZywNj",
  "key10": "s45duuA2kcj8zPZYvLn8VFdYQbN7XKo3RvEtjAa8V3JqX8CGDUFkZ2eJbHWR9QuZ3xh9bZdhJLvkGMmJxuR4TuW",
  "key11": "sP2BpMcfHu4MXkeZojRLemNSwAkPDVCpqNwkrgKp73v853QgzVLk2uvkXzhMCpqpAh2GWJhbpoNFeXHRFv4M5tW",
  "key12": "48jRr6k4ejjzPcRBnDANjS9CEoaMhQEPeuoTuien6qB8X4R1r5zofiA9ZbnDdagaR4DaQG2nXRYhVJNRoL7Nbn3B",
  "key13": "4rpRe9xhCpgezGmRNBGASw6QtRbsh6DmD27qK5sRruB2MNEo5iYBiEUciV1t8ydh7YQJLjgd9bcxpB6nRYEBbyvr",
  "key14": "3LpEqy5KszpMm4pWVg6gRmxqbkmDPJZgX7gfhqm5RaE1zfG7nCFWfXxiXP9KH9N87xAup39z16kLAwZ21WJx6ykJ",
  "key15": "5wEUgDkzK8wVZmBVN2UKCjdKTar24uDxrB198bnjacZifZzBZTEcdJ9Z3bHoYhJpfPhyqp4G6mzDz4Giy17A1Jvn",
  "key16": "3AR4K2zMYgoKeYRZYxwZNN3vcXHQ34U83UdS2Er3fzd11f8ZnBPSjdsKgcvMCr7W2diC9Vs6XArq12fC9Z9aPSpR",
  "key17": "im5XgxNjH6tVcMKnPbaEberwQhqDhybopX2DXXt4ozLEHTpzAcE1C3uTBmmiG7aaPt2CdjDaooatZ4qmzMEgEvW",
  "key18": "5v8n566FVN2YzZesMV6Kv13Ci7cG2JNd4AZWwTdTnLHkVqFstcGMDA1tt2Zt9Bje95nEJNHQiSncmtfFvaMMSrgS",
  "key19": "4kBAwPXpWN3SDaTV9GdpuXPTdkU44zBNvFh5wg7jUugDCAn27za4nMPsFQYPc2UAyQM8PJcmcsuoPSqnMDtv1vkb",
  "key20": "UEov47RdNzjtmJouiYajJZY7fykUQVWDWin75z49t9DQwJq85VA6aqTGg4Tj9FTuWNH5JCb522Zz5RyMMWBu8ZN",
  "key21": "3RyXwZv7S7DWoV9PwQwQsheGb8bxZcyt27jRourjCtnjX8WFX76X6bfwJ3epgFm3UMrsSMAqzqSCTo83L3ny9mHj",
  "key22": "5JQdbch7aAnhMjveGhB92cBxKSYF8KGKvbAx2Lh1sKVRhL27AAoVLYGBEdiJtQbyHRW8mzyJ2osipEvLQN2meTVa",
  "key23": "5BeKX8E8zPWZcnhSrYnKTmxh648qMhWw4zkF44rYQSJuh8aNAk7v7z6VuQ45nC6bnqsgoQqaPDUne3VMEfXZ9MGh",
  "key24": "5yCRmjKxauuU2PpcmUZ2h1jUyd21GyJP2jbiRujaBDT9fXURLs3Vr7NxgDdX4P8qvX8TeykVXp8WoXedVXvNaSKH",
  "key25": "5BES3RuXf9gUd23nbxUCNXKaCPxdppYV9z4hRkkh8E2iJULzrr4kAFwNyMmrbiRw8oRxdxUmLZyjLuQb5cimZq2y",
  "key26": "5thkuQXyW18swcbhdLwZpne4RQ6nRAamcTbvgyc7crfGwGRFePgBh718jJsYFNi226qm5myfADRa2Y2sJ4qPh2dQ",
  "key27": "5pF8SGeeW9J6akNUhUDTnLdQTJ5QNj88yHvA98gtqSr9URuuJRPEhruVwNGUhfVLrX2usKqZYFRoL4GbAx9vc3so",
  "key28": "4uTUS2LFC2jYRbXtGgT1t5rninr2t8auuYTTuQC1vETLCCLXBRG44PrpAiEcCEksm2nWevXHX8D7sNszuhJkKqTN",
  "key29": "5LyUMmU9B3Qum1DuRCTSWvpP2NB94AsNobHxzSUi41bmnFofMJz3gneykwRrU3BbHu5ir8rV9VJQvgEoiHpoNiJs",
  "key30": "3quqy3NcKkhJRhKUdEYqahWsUvEMYJ4JXSfNNFaebbRZGmoetv58BX6HktEc6PbHgrohz8Ryn3vMc6Sioh5PkxKY",
  "key31": "2AbS3vdjXWve5w2eDDN8RXRBs6CWmsPXSwNzBGDQx5UDtSq649Dwx1HrPmNVtMzG3ESzQrZ2ufj5KdjchGFmQp9p",
  "key32": "2XKwEhcP7rENaTkv6FV3vKrLqiWnDdtsgwBApSjXXz85UmuvNPSXdmCuJGRc3cb9YW35X6NacsXah2tr9rF9xo3m",
  "key33": "2mpvo3xixNnyLL8pKs1sPQ8Qzb7bMrwAgRw98XojJdPF8vUEsMNYF5gMuLvVDPSNY2sjcb4kLy7uiE2SwnhheeRN"
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
