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
    "4M6mRTtHqBoCdsx85MWEWTGT4xnteGT6cQSKCn69Aq4DBEnyRGgiy1aFEShV8BqdRCVrggiyiYa1NUxK8njsHKoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rH2ir9FnarVinVqFZ8gB4z2SdpjMPEmMLeJ9dA3yuS3526CAj1i7oq3oCUPFLVknCV55tEzaCY65KWuCWu7Gvdw",
  "key1": "3WX19K7q5TyT4W6VCsU4RqXtQTT9P6EEQLV8DZWyHmuGR3T7U9LLM8yRVaJr1d3VTE98pg8nmnuVY6K5XaVWA5rv",
  "key2": "2h2dk4kxw3vmmn417RtHqTXrBgvbPxUYwm1hCXhZfqeAUUhNacwa3edTdx2bri1xpcT9pQY23vu1AqyyhUSefZdL",
  "key3": "4N9dgEyrpj84rmXTkJhkYNmd6d7G88an66yXiKSM4DvqM1KihSPoJkF5VFWW88qqFrTTT76kSjdgQM6fuw1GPZ9e",
  "key4": "FgNT9edU36QtUKQRr6P1oF6Ne7Up5rjorgPgzfL1oCyRKjV46jgL1XiRefo6Rf1aKRPtWRp2Sbn9vJC4avZC5PD",
  "key5": "3QvBgdNd28AyMLHqVNPsXdUVaFpxc53TJN4tecZKcyJzVRbVkq4Q493WzHMmznFM1zbHjU1iiF9vx5chLVFtYgXy",
  "key6": "5g1DfBeUeHD2W63Xxdu6DabQVUrH66XSqQT2DYAV1GqJdWiKmUE4WMdgWFUuLkCEUnPZ7pRvJaDrafBAF5oz3MCW",
  "key7": "3nsb3zNgQ7PZnr7X6dDTU5SQXhnwrGK1vsq7nooigX1V2V6xfE1fioxBNJ1g2soTQpWQL9Hxpn5JA17gdcjRX5v5",
  "key8": "4gSA8h3mkSMC3nYYnYfKdeVyNiWzt1TcYWnH6tUwnyM4reVgnELRoKU3sESs5rN64wv8w7C2KEEHNhCNwhLYPtRm",
  "key9": "2q9aRpEm5EjqHSH45g5HTr4rvp88nfB2qx3ZVCiRbqsuotqrjbzZF9wJHAjDntt1LxCNoyb2KrijXBioXoFG5ngC",
  "key10": "4yBjAepd5TvWfJCfTjiy56kSDSR8XVRNYmiX6N1TkCDzsKCubD8eHtxbctpiyQSbqujRmLzUuqFzuU1oeMQ4tv1D",
  "key11": "zPTxQYyji42uLHNFtStzYSoMJWWrCxp5SE6rcF2cBxhMqNCsS15Z9qrr8k6SmdeZ53YQwdKLaMdXknRTfBVDjAf",
  "key12": "4vXqRpPpA6gTTXTsk6rGgAbeR4EMHHKqnAKvDZwFiRFPphe628jmV7GnwXRNbEZogERGyawEgKXyYAoeYuJQZ6Zv",
  "key13": "4dVRAyDoTQ7qh6m9qCdPRWQ5cDsXWhXRQ7NsQrVheUzFFTNQ6Pf4QaQ1tPfxxnpHrJpiMx1mn3agq4VWvaogpsKX",
  "key14": "3tRvEnQqUJHguMZwUoek8E1wSZPvdS1EuvG9zSu7VxdRTTuzMLvX9yLkCSLRB8UMVpThU7ZeTrCE3Fv8FCoGEmE2",
  "key15": "5fvm1MFMf7xhPwXND2adsJsR18VbqK6QycB9NCUpWcF7B8ErSa6bWPzdw41AGXzj5GybuCDUaDSqNUkCz9BFuN39",
  "key16": "3z39L9H91o9EGdqvtQ7667wvTwTvnnMc9vUw7iVBRJvCgikUEUQWuNNgXh5CBPkX9SXnz5RDJuk6Ht9pkrqNDfo6",
  "key17": "556FXg5iUK5mDhhXDyjxypNbNNfqRJ9TYWXRVe39w5XgCR3HcEHTYDazir2W7Rr56qf5VTZcmai5U35hwbN2nTp7",
  "key18": "rioVdn5cyUaeAF1wLXxfzRd1Xc2d6k7Br1k587jfmhXZABx87vX1LpKLTYodA69o27VGZULsDFJdMe9c3RLdqZq",
  "key19": "UpLGF3NfDv7VEE1252VsbE2M5syd1rkftCH94XKUq8PGHXf43Md9agBtW2HeLTvS4ko6CnevyNfNx2KAEpE7yw3",
  "key20": "4NdFvpB8t8KvjABGFkkrdTYaVh9xY4BiXJ1ML5sZSdwhPTjrguwNzcRyoHoECKFKPJVeSjzdWLJndweD3bjKpivE",
  "key21": "2y2x8y52rGFTHgWvoEgxRvWiQxMDEYHCikUioLegtxb1jBtxigNaKts4J1u9djzGpczKHuh4f3jjsEioSJBZUux1",
  "key22": "5fYSHzNfxr8QRy2Zoa7M5By5LyvLewdxJ3uymP1YFSDcKc9jUmweoJQV2ukub5N1nTT3GAzt9NifwETbZvSK2gac",
  "key23": "4Y9b1ZWFsTU5rVGXag9MR8hVMoqP8qh56A77NeXmQQS56qs1zKFpLzVqkFq9xFtp748sbYcn52TKeYyG2Zn6xnuf",
  "key24": "LNcFW6cSuTcKXAu3bKyKtGL8WXx8NyZGMzpJc7jYBFadtJ3kWyicm5zTuvVsqQ9tDC4ewNQk2SL2U1QMoJZZ8ND",
  "key25": "5izYN9WZFknYDYt2ajHwCFAanf2AyTYbHPPxm8GEU3Bbkd6MJxhqbY4wup7FD8buMDpUGdqDJdnks3QvmH3cD1Nf",
  "key26": "2eBdX6rJBV9Y6qUjseUE11t4AhZLUqHf7p1dMK5n11k38WFyAdX7cT3g99wCB4Ni7PLBFQT8R4uAHuRjr8jCAPXs",
  "key27": "5jh3UrgWgddZiThVzmLvN4GRmBhLYY9n16YNc7JCnnyr2Bp5d6bpH56KZ248QjqJkELz4y7KjymY9DQ21wSNEtcr",
  "key28": "5mmKwYqQWcxGGfSd574SGhtuYYmxccTNq4ZT9hcqnzeHk8piP1pazGyv5Dnyf6pqMJuDjisCs5zXz4jHivs35z6c",
  "key29": "2qw2czo5xn6ZcLMcR28Pu9CP96WBF3fRmQg52x5h6wxSrYmCjGnP165ax1rFVKScM7RSkUCQvfV8DRHHPA53MVzT",
  "key30": "2wN6QkGE8biDSGQNiivDCM3DQXoYQhtUxaD7VbNHsAEe91vMW7omuvAYJxrAdajK6ExzNJYBWcwMUUMMk7LA381u",
  "key31": "5BzVHvaHQmu9bvP6phEpXtRwn9QynSnWWhHvWkDoJ6aZEZ8qKzoJkHDKeE4vXVwGYoWg8cEFeUreekcukoFQeR25",
  "key32": "3j55DrqETPCLVYh1ZDZ4LpYEZ1UuvRWWSCEtUYvkcNvHdfdXcMGEmdaC8GByK225TCui15a9bShQvknMn7PoKWAi",
  "key33": "3cMSqaQpFUfVzzpZYUD9fF8sAC3qAjTer5dTFsYzdakXWogiM5AA9afAHzM3t59EEB99fd84J9Q2vYThg8LF7PBG",
  "key34": "3tHNQTV5Wm32fzzKJU886m3uR1uU1JJhzNxnNV8eL7H8bnbm4SruVdAKA9MjKXG669pjKnqe3dxdbD4t8dHqsNSa",
  "key35": "P33VGCqf7z9L3iM88ezyzQPqiUsZBgnbMKRcziyuFBZKx4dKddSoZ9tB53CVXY3qjNARKoDwYFCbcHgs8bZonAB",
  "key36": "2Wry15h5ApYwSpP1tpHv6qtpZHibVWPhtrgqcccsRPFYn1JGLkvDd1n7zWf16HttXUT3SwRJXK1bJfifffj9YY5Y",
  "key37": "4XPYE721F6Wm7LAjKUnm8CyuvTAu1qaf2DqnJGk2LLpXfMTPgdvK251fHqWS6VdfzDZpgP3xEAJCCLyqtccWf6yZ",
  "key38": "4KcccPWPTf6kN8ouootEjsa7tChcGgbBmPg68ztc258rQs2Ls5XDQxKDFTtnex3ZKjPQcm1CrU1uCquUt4yhiKLT",
  "key39": "5VFkd8XYR6iLq28fLcoVcs3uC1g2n7JyA3wgmzYCN2XKxXcdLui9pDpXpemzTVgm195omctXqKCP1aWnhs7CNTPC",
  "key40": "2cQC8MjQMvSBi9gTN7oTDuhBK13QvRDCghcbxVNVtcYGZXR7LRb2dWry6YctczNU3r4vki7whQLqPMg8h4AA9ppB",
  "key41": "5bPY1xSDzgsWkqBTMFiPZuJQkFqCBLKR4c4LaYQ8om6grTQdseNNHXgQ2FCSqATQpWTYrFFsD6MQPPTmAy8FZ9kG",
  "key42": "2k7Tr4unrpHVDrxz5FKyPnGD1UXcx6CEpf55CoJEYtbXr9MLtCQV7StDWwycGs97X9488fx3nNDJhGSkGkuj2pqL",
  "key43": "9spKsKj8N5bac59w9Ngz11UZJF6yVXsrcnJoYmFhTxbqKWLQpTsh7GhBLug9sMx46hhVVfxSewCS2FyKHt61nCF",
  "key44": "3DLKf2bjxLj2fQVXBYA61rhUn1W8uZNPy8hf4rBEUif11XebEiSaaYdrKTuUYtXuBb4tbjhpLz2yoMnrojn9eYPg",
  "key45": "4R9TbL9EXVd2rqEaLjY2SqwUwYwg9HiFpGytPKtM4c6rcyFiXUHS5MiWYkE4HgWksqgBucpHjt7kBFGBSDhsck1u",
  "key46": "QgU5zSfzY3mVbrds727FrRr9XW5GfNMeY35UV26Qx2cwuXvd8z7tBm8zSLzRfFRVqWHiwxEBHgYWZzfDi1NRw3t",
  "key47": "46E2wJTAAvYGoHYkQWxKuQXS8UWa6kFtFHrRpyVCwk2Q5ErBkQpr58ztuAm97RJX2zSEXyqtd3HmxbQjpTL7WJHw",
  "key48": "ju8LW3ryhUyBDHy5dC3gzn9CkUWEfhD5MVofVkgzftJ9ZN3shcaV39TP9NGEHjSCAor76kGH1p6N93wPsfkKP9C"
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
