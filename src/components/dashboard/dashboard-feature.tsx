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
    "24MUzk6MXgEExxScpnUgjWaA423SotEJ168yidyYc1NJAxmcQXVq6rk7VQLxHFaKeYs9dMXYcJGX64oL1QkgJoo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6VjtgYesiZQrtLLJvmTVKJJGJ1EFMG8GMNcxjYL6k1aFg2vLmr6WZxjtYsqgVEFWS7xFgVsxYFVU4mVYgNRkeR",
  "key1": "4HW4MS5UuP6REnN8bu2vpVNJxGWz62ou5W7Y8zKzRWXMY7jijmLrQg3WBW9QXQdWNhWUxMkbUntPpypNZfismmz1",
  "key2": "2beLuMiu4oSsJJnfnXdFgiTf7tqjZydKbcaHWvrKkDomx1MYFGfkueFmwiZbkNDFtA931sr4j57SRsDSMJ3NHsxh",
  "key3": "2rv8PYKcSyLHEUvxgE9JxqaRZgdisBUGDorytyDgQTXg4a1Vu72waiDoad6L7g3Rf1mMpscnj19ZuCFVVqRb9Sbr",
  "key4": "4Af3Yx3s64rEgLipcF8XgH7oW9QPD3c2WKyF59xn9n7Sa69PfN1TJgw9jtV9rbZXW5vEcB7RHooQLk9b7bmzLEfc",
  "key5": "546Hi5haCxWPAL8qwVrvLKX3c9r54BUxUBRYMD6HukNG5R8QuyC1DNwP2jhcCTXMnYdBa4ouP1LpfUorp8MxtUAx",
  "key6": "2CGniPVcspkvMKe4huKqAb1FJMmMsKG77MtT4KHttS3rk3weuAiBxP12VFqQ1wdTvo2t3x65Y1gmv6ZhWP8v9FgE",
  "key7": "5JfpcU2bU9DCn6fptL7FD9LG4YFojQMsLvRfNPu3TWRzW7PHvBKfLzG1tvxNYyEVXDzGbPXBYWVRshk6uyEa1tfh",
  "key8": "37nxzcPCcxNPm2VXFrcHB2aRHGoHGzfz6k1EDDwVF4da8xLbd3rsYVPQiTim6pJssxTw2UqQUade2T9GvxhmSokj",
  "key9": "UjubU1ohCRK188YQuUFot4nLZkzmUDgAyRG6wvX4UCcGzEHCmeLt3HJV2B3k9jT4nneYUnVkGvcVVUBhHhUtKSj",
  "key10": "547kSpC2A1JfbmNMi3rCzj6fZmpLmwFMRymPD69uKFYdDJDRaTH9BuJQfWsken7NsnYxrTsZytc3sQoVJNrBZ4kf",
  "key11": "2p6gmVPaGY2w6xS3E6jSC9A67GoULKJufoZXsc35pgNexFjjUpYethcuSFiiUjTRjXaKETrG6BpsdSHSxrSofU3d",
  "key12": "3iFJWjN7Y5invdAcbHCCHAU5z44icViyCUPBf3A1UntrHCNUHhcPb84JuyAiHjFqjZtffJkKNpuDg6EQQPJHGPNF",
  "key13": "5eg4zGXW5xnJF6RvQCVYYH38T1FJWdvsrZzhQUEXSbpWbJeUsCZjnmRtpkcV3wxVSRDSZcdhieR3osszJRyqqEE6",
  "key14": "2bAfDZX7ARo6qi7Ct44spKr9H2SZoAdqC6RHGPK1VKTm6S88dexx5wXubEoVxPaPB2EjoHhhYoUcCYAR5du6yoGV",
  "key15": "61B7zxVyq28cSUMdK4vfwznBZ1Nm6nwodv2LB272nxwUV3hfHiwRmD2kd12Uph9dKKeFQrw5hSe1cNGmU1Rh6pHv",
  "key16": "4k5gN2dmj3j1Zxrd5zcrdTEgwJ3SaBPGwCrhiLdsPCdruf9zhrhzVKU5E91sGZtLrYgSyr4Eno1g9Bh4UbnFpeBe",
  "key17": "29RNSm8FYdWF4ihkVZ6xthvucyA1Gh1jrgnLbUyR1yZcbmULuJSpnKH8tWims2zLSRraDDfuZEGRsT3JKqhVPwn9",
  "key18": "47KgT3CZEsHuaSkRhXjiBJAxWtyJnc5KHRfVRuHS1gJwdLpexTJinPpGcyS5HZV15RnaxqYXob7Vidzdyr6qm3PV",
  "key19": "43HxLcfdVfwuSyJCzTZL2gb8jXpGHM5N5b8vdibq2PAcP5BPyk9t8YTK2ZmmM3fYCkXXWG7pqdDnNW1BCWUsSqHk",
  "key20": "5t9soCZYBwCe3YY7NEe4dXJediZZc5za6qYKAhkUeNxZzctHiy1bRVBKRyZTayUdZsoW9SfZQgrtaLpJpxgTUng4",
  "key21": "jjQzyCkUC7a2ALTuHGMif8kRAs8VZYGZPeJWtJu1CDVhb15JbmHdrRmijgCCPjRvFgzAG68LfXFT9GiMZGeBtAM",
  "key22": "2RL28G3SBwxCymHW2zfpLpkVziiM25dKRVrMEiZ597TN9MxhPN1d5C88FYFbShYBg2NU6udFXp2GcV6StRBVw3pU",
  "key23": "31EgLfDePF84u7mXVthr1Z86Wzi6sMNCoLqnZNXtexHquqDRABtxNBvms2yFCGaJbc7t5qGBvMsep6ttnM37moA6",
  "key24": "62vvwnSQebb5yAsGB8h59ake34uQpYFppRqdA1MeDb9HaomgRon9kuF7zpz76LhVCrCDyp6UxRU6yWjGaRMjDvMu",
  "key25": "2RKQDbmUdUjcd4deT24AyiBgniJBSyu3WThGTbqPVLQGp3FfaWBkf48gKGZ94LaYrcBHu1hM3ZfAnqokhvmwJqSW",
  "key26": "3oBxXYwBXiwH9fQpWYoH5Uu5DE7NyGUvkaqqyvmdNQHS7BTpN4bMU81sTs62uPmgPTGJfF5SURZokqHX794u6QEr",
  "key27": "2EZqekg44KAUyJ3pvFUoyppXv6ZDcfmjNw8WvcU9JvFMeYCZ1BmCKDYE7Ko2MJR3VEMAWsGXoG3ds9aJrDBJAia6",
  "key28": "YJomLnySjsbT2SQbV59Yqgi26s7v1jonJHbEKFnWQdFH8yvUtMD1kPEzvN3c3x2YFihsGVVuP9d1GH1uNuDBZUd",
  "key29": "2a2qwrScvgcG1E5tHxVe1p9ukgBQyf7pTpnnybSEiXmQ9SQZ5tt9Y2cWQWZtEzgmASwqzRWEqnozDzLX8YQmT342",
  "key30": "Qzbd5Km3woGbnFRRy9aZmcys9gwXAWJEiFifZRRFmphi3QrsVUuQF7KT4Hw3p5vQgHUmruJVCM667kvSXZC1mat",
  "key31": "4wAY1bgfD7j9Wstj6jtK6kSeyapMtiNmhUtRRHPatEXYGrQaymtCPiZ5K3VD5kd7U74ig5muHtCVW44N5uy62Dyx",
  "key32": "2M1moHQa5SymF6V14fpqADDKuCxzqSJUdoTFyC24dELa4zMPTq3BQw1QpJKXc172oiCFwuBVZm5sG6eoLk2zHV34",
  "key33": "2FC8UcS3HAbkid9Z6qpD6WTtJNhD1URFd6SFKFkARQ4e4ZnsxXMLJCoffDVJXhXCp1JovNjFVm1vmYPTTssxYj3g",
  "key34": "4UHEmhArnQDC2pG9E64mpEdyML7un2gAmQ3eQsPhpakZfjptiKLeP6PJ1hcLP4WSZB9asQMpJuhFbmCP19Z2N1WK",
  "key35": "61yRLxkak8DkGS5DNopj2RXndLq3ZxqZKSJ7uzi3WWZoFhVdHMqaxJzQnt3HbZM18nm2wCMBDmRfqojzWT8HqGVf",
  "key36": "4fDoMYzi5Qba9KgMsmwBMpidfLXcbHLeJc2PDX6UBEYVFvMiZxYjdELCkLQvx9ni9o5U4mVMJ3ZPZfWt38fJua3F"
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
