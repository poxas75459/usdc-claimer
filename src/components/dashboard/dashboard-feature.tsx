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
    "3KKdJhLJZEZb1dEYKfpuWj8kYGe5RSkdLz6JactX2a9uPXCcMcyyxhrtqCcTn2j7iW1im8dkSqbVrdumT95wM4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfmtvKP8i9FckfGCLco35wJhjzByiQJS3MdveCsyu9zYoyKrue9WKgJ79ffhrAZfsE4Bz1yHrAXMwA4D6QTDMTg",
  "key1": "3vGfdrgjCpUn59gUU4D2vfdT6UMzauJXZxYDYDFXBuVHvAbt9So85pXcAF2EfVijPyV4znZnWaZ1PgtFyFVbg9we",
  "key2": "ad1miXvph5s2khaL9HY2Xv8z4Js6xPU5P4HJnwuWCDCr6Uvf5yVvr6oLrCMpA55VNeHRf4q2Ft1AoZ3qsayhGRz",
  "key3": "5wJb2A1xhj25SbLqwoEQgtmJNLVSJWs8wbZg3cAsLZWb44LRBAUuwt33BVw1YTSfw6dEGantexpuNTj3ahmqGcnF",
  "key4": "2NEupVrq6CTeozpEaBfesX6LNbNCMYsNzzEzAkCKbGV1GRsxYQySHzsew1BJRPttx5yyF8uRRTQs4JGcPHkSjGYX",
  "key5": "2MKKUtQ1vYmkPuam9YFJJPyxE5tjvLnhbfTy98boYyqaMotbu46wft4Ft97y1vayFtvwqVvLyrNb6UWd3bRzMPVN",
  "key6": "5Z1RT4rKWweWThVzSL1Yf7hdWRHFd9j5ANWeuau7uVZJ3uyi9M5adP7r3nPkyXn1i3qZd9dwRQtUcTtfmasKZJfJ",
  "key7": "5Q3v2VhAEo3r5XJi28J7ZcP6euGwgsC92VHeXn6E9purxSVVKLtNcNptr9CW2Pb9PxUFXy2v8Lc1cwqpuZc1xfrX",
  "key8": "4GNhTV1RFRjX944id5Ke8FUf9PtX33inW6vjnbcu513wDfw29Av7aezeJPZGgEUUqAeDjMtsRNiR5GTduXAbyi3w",
  "key9": "2jopszw5Aw5ij2SgfSUVE3fX7hAmAfNzsSDxiDi1CFVCUdzhFNT918ymixJCjMSud7oEdhT58atf2aQoCtr81r9X",
  "key10": "4hVYBdLpJ6ACvrWZ4K6CmECHQ9YWUuAjtmUDZyNKyRQ892kQ4wizN8C4widGVzCw9rgQhXQTnKfGYr6EjS42spmv",
  "key11": "nLkuDKth42tKrFowD7E3y5MsqR5yCJRe3MMbbQuRiDa1EwPRZXhuVupYh1dPMn8ezzbTpLJGbwzVMsPipzTiMLD",
  "key12": "46ou1Ua6L3Mi3m226yYSn24nDUbvPG3f3B7SnkGLNsp2RCcioF7F2t398sY71L6hPeDyFyzUUXtV35S6cw1a9HVi",
  "key13": "4UyJZBFg5cmxShBTMEQ4yV5AfYs3qy5D2jfjJLdwWGprRP36dhgbHvP9sDYbPJNfLJtSzTrwxuoh4izw6aqFXBdj",
  "key14": "4THzrRzQzxcsrtipc36NNhvqnpaSBGR1NKHJuitykaM8H9VcGXLp5gziYhfevJLEB5vvxUfxuNkbtpmfedPrCXdd",
  "key15": "61S8oHJrShF62io5pnGAKeE7bTFyVJpkpUkoBvxL6CRYR257rhf6HF12dzib9qE9VmPwpqUaJC8GxVD7pUnjUpRz",
  "key16": "2FdrHxNqdzNykUB1DhE7SLLEvpKio4UwK8sRKWt2v3rRuCPDqZfLV9ka2eQbGFMoN9JWZqePUVwLTmdSUqs9eBi2",
  "key17": "3xmJ67h5mkgXTbHFZDtUp9G5TYNtB3p317jzyUhXThegoSzdK478hGDrnrtWPTBZ8yEHV1xcieeCRbs9Lkbr1edG",
  "key18": "4xA4f4PPtBbANzfptfrqQuchFVUHoeaDe6Ua1FuNtK3h6NLUqGxQtNDrXgTQyPvbSeAh7iAhPoBUCZVm82HiNueB",
  "key19": "4TpZW2qJZE93UhJoxidu6xY7TNUwaJMALvqmSiS1bEyvVuB627EnsD34K4RAo8h3u13Vgm3TAmLLLgjv2sBKkq7C",
  "key20": "3eEQXnXGfDzwKZAZv2KKMqVC9mfmdKwVoDP123qnUkUuByMpjxyg53xwFogvpebx9DWnXGiZD4zoNpJpMwrbbxxF",
  "key21": "21yUn6UqJzgPTTnszdHFGnLTQx1mxUCyMqPRLu8jHrgRQ9pkBgKk7hk46PFtKYqiocu5dvFjvN8wCDFwojCE1TXR",
  "key22": "2xKCpDbm13NuTE89J13gkHUXpwVDaPk2M4WVR3e2DJKBQuaM8wwMsvRbSrdcpLL5hAbnRjkP4enMn2FMvYJd5kuT",
  "key23": "4Svejk3eGeF58QZju44iMRpaidHdSjpfb9aauu4o5pW8PusffCmxXMSpg78XUN6gJuoL24Mqh4aspBnx8CG9aqft",
  "key24": "2Y2znExBmnB4PWP2NNjMUMw313jZKLoiQQruNUqQS7MPGBZxTpMhxD1JJ9VpTttvMMr5fjTSXntRAQpa8gjJ43k1",
  "key25": "41FzyRMXwwUjTCp66TAvavYTm5LeQpKcKd7gtBjwwSQtchFbpEN2TbEMbSfzezSghY1y9ppccTyvyVmmfHQHdshH",
  "key26": "42qCEnfSQYpzc1Vegt53bcknrDYZXrFDCbvHvwwy2FdJ7BHeqrc5Zi2eWWCDBzxcp9ZuhdHBcFtFxjkqmJexYAts",
  "key27": "3DnQr162puu82qv8cpS4QNYt3nskiW46W6yrxfWJtVwHCP5s6aocFYnqyjeS3Eg6DaP3UgJWqRxsF1RQ51StoTP",
  "key28": "35QuNrDzVZX32HPZPmtGeprQukj2vFAVFNgepRggWwZ7B96a8FfH8amEdRovFRqMTLiscU74wi4aLrH3YNEi6AuV",
  "key29": "3kTTrvXbPyoajeRvQgta5hPSLtNH7Cg4ihLCYRgMvsuXC8xWLqWEd6esQRUgDGz3MYZSrKbU6TkgtPyoP8JukSgG",
  "key30": "qvbd3WKHqeduMe4y7rtPk6YGVqwVSfebL5Df9Fi6CaMUwxXqb2FzEPh7M2aLERVvyT5ZsqMj9k66kR15QRu4hDA",
  "key31": "2RCH57HQDweCN1f5X1957D5H6gkF4qD2WPVxBhmZYee8xRMy8B5LSaAFN79g4TXBxAcNt7oF3y5harmttU2Wg3fM",
  "key32": "5aAJsLpcR9wdDken9Lxc24gytrVhZ1UuLmhJNFShidWCr2vAmHtzLf8uBzX2dCAKhSQV8SsdBmU66ug9N8qLCKxu",
  "key33": "4ugjmqgEtLXQzFt26Wnzp7Cr7HZmgXuB8KVsPDzi7zQRzetbfyC5CC1ozA4qNaEuw1Mvi211WUFeXZW4Xw1RLS4V",
  "key34": "X2NbbQe2E2ikj75wZDHRQWtVm3ihxFKyanmg4G623dYJsA9f2FwXxSJNywKU87q74CSkhvE4MM3tfmj2MmagUro",
  "key35": "EytG1B3Hef9gm1RWk79HVvKH1cpcTnXWrdHqDZDgBakHuLWqtA7tJCh3PDZKtsnFsvmKtpMkaKwGyuKgcNGjDVH",
  "key36": "2Hg2ptEG6s9NxdaKwzt8UpwVrUwnE1X5mUQMnqbbU6edfmTz17W7jBbvowwc1KVgSVfXQyzK4Gm6Lrmj1HLwCQwK",
  "key37": "4CkGGT3UtzYnqnWaEgFVzNtd7UhXFjH5Z6QX2faEapUvaKuwoN9iRUJNbuoRZFJZwKXdhE7fPJmQPbjsqZXfGr3L",
  "key38": "5woMcu7XXkZ4bY9S9Bw4yWfLo8QtLKBSEx7qegwDVs9hdW5iMmZxN3u4Cf9XxyBpEFANh2XuyHYCsdiayDghTE7z"
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
