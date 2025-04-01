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
    "3kBGwbEiABZEVbmC6agGvaCXLKpj1RCEF7XF9ietaPG2Q713htt8F53azeVDGYfniCssPoGYujqnCDqjCTtj9a19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVM5yyR13rvrFvcixGEL4SGU79CwtwRkCaqsKWPVJ8LVKYBwY1taZNSanQik2Kyrnk8fWLbac9fYzM3AcDrSTKD",
  "key1": "51FjNuW365iMnzZ7ogcfvXSnKt6KsfcwDL8RTEh4HywMDcHtGhrtUiCai4H2x6VArjByfQA9YVcrMjazaqfKT8Sf",
  "key2": "3Mdumn3bfjWbMEVxFrjDMqSdv8zCi9z6h4YUsUYKbazVCFMz9ezppk7JqY7VkGfK6qHGjtvFr6D3q4DasG2wXcaM",
  "key3": "KdzEaDp86Ne5MDb7nzBtBhjK5TprrBUijdXDdHiRJrigE9scV7mAZn24UzQbmBCsxb4ZcCmRsLu5gnMPrWzY1PH",
  "key4": "CJv59h7skzes7bhpQ7okgLWmLiMjj4zbcVyD58SuFH6AjUwjFoJKSz3ZB4nvSjenRSXU5o9EtcdRKCR7FMWxWY4",
  "key5": "5Yk3sQPHn7fGRFxDLwFb1ftZehizqB6ryfdq6vEUbn4KwzsDt74NnF8sAZE591zjk69dG5M5rMwZtZJVuV9KZiRR",
  "key6": "JuWf9pgwLwe5fQea88XAFp9Lq7CTd2VA3uqUXc6KoyekM6MpwThkeMKEVAG9aQ39Xp2jxK9DmJiuMZDaoS8mK1i",
  "key7": "3y9iAqnY5iAU392W5nyjkGUQC6psYXUPbd3BPwzcUayYCy5VS3ZqHE6Vzqu99QKrceWSFRvKjA7pzzsLbgw4KKWm",
  "key8": "5LWh1XAA5aAiEtMBeH1A5kPoRmbkTEdCvKguUsEnKKz7ZAFAXRcmcgL7WwXH5uCrNZLh7ViHaxQV6hQ8NQM7nDX7",
  "key9": "MyiGGY7AcXu5kGqiQ2RgiJsrYQaEN5QZWkfLbTst316Yq2EakoBvikvwj6QnLHVBfYmncefi8aXFw2eUyPpPABV",
  "key10": "5jwmH23mwevFuUvFU49JjGA6xmiMgfrNc3wmrjuErkRX6nD9XXfHxBEzXsrzK1zxDcme4YWtSt8y9NC9Hq1QDnxZ",
  "key11": "12bBZoyhFFp1pNpEM5LCHWtdUPy2vKVa8rCCFRe33BTA2WybExPHGKByUc79iKUheo8Q2kUhs6jXStWvvGXAguj",
  "key12": "5r9j7iKHzRtA15UGrPjrnS3SUvFUXX6numtXP1zcx76HkeK3GwTfdjeTRhak6X3bc52YKVbMjm1LcEW7pLP17cwF",
  "key13": "57atUNw49tUQCJGqEgYcoyoVTk3UYH8UAWytXoMjBY4tTN6FpkDXUAR2XLvCtMjCGEesvSKZj6mSUD29xwDPDtT1",
  "key14": "4pDutwFUD8RZ3zaCYNku9zTTAH9M2rzAjw87RqrvX5A3rMeDNzGVHEksJvHsFC7mrmGGKHyTeybxxGaRSwJrFaZm",
  "key15": "2Wq8r53rj8ELHghNZ8p5hMLB4qfSW8beVtkxfhY2hRVTL5UaoWHDnb4cPgg8xA3rHys98bzuVNv7FxeQmpTtYNiw",
  "key16": "45bWtSKU88xEq5bk7jHnaYbdJw5CVkf6HPTXp8zr31RXaJZm477gpra8SwSgH5EBTh5ZZMbQ83P2fpvmmcYd2671",
  "key17": "5nPH2Hesbq6wLpN6aDw7WjcdEb9ptS1xKt2cxUza5Dvz4GmTLSmAc3ogVEWLEhXj9oetdcqq2zj8JgtcDksrg8Ru",
  "key18": "49afMVgbKruH7hSiiWPcw2hKr93NQToVZ7Jb1UVPVeJTQjehgbcKQXN5tiFnXGYji6xJUgdNLSvhtiA8qUzjYoiy",
  "key19": "5CNBoEQvVsnyRBYurERVpoyMcvvbspuBpvnjftxHZrd73xZVeg6mzMLQZJD5Tw8Ff1z338nxYesmjVpPBMmWRbTb",
  "key20": "3dJaKKngfjX8Z5cLJCULvesCTTDicdmQSCw19e2XuDhiyVQ1iUeEgGngrVaoGJzwmbitGw97iF7cjWa3wnDLuAas",
  "key21": "3UJscgz6txE2GHYbaMaLjz9cduz38kkCGaRin2VfJangBUDuaEvEstgKigo4shTWFZKq8pi25CCfJN9paHmhLXFH",
  "key22": "3ZcX81rSE7G3nkrktdaZqAZMSxpNT7GHd6snXbAfiAD1cbtuXx7WD2biKrviirxL7JMguJQCsM4mupWXnDrJnvBy",
  "key23": "3ADaceXza1VEQc3Lx38wsdDu6YgHcCTs7nKCssmbntL4R9BUaLarHHfbMYRWwYJJz8s54ErqQ8m1goQ4UJLtzbFj",
  "key24": "4Mres3JJ3TRf9mWJCw1LvYvkXkx3ZBHKQPUy1Awpn1SBo9Pev4W1Sj9Q6oJwrJaFEMNHS4QYVYxFUy1vrvR59DAB",
  "key25": "3Y2St9vb8ZzfoEo76uDibE5Ju2Y9S9PjprcM9zj2FEfcoBGaoFf24YWzbB2eJAASEajKuVmbHuKsNL3xGdzVCgfU"
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
