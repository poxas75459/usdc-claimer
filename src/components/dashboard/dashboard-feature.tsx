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
    "2uhiGs7xAmKv8QygG4jF6ms5fgx1A6QSBut2VxVkpLD9ZDxThNeMaSU5USJCkT2A6xqwBvTrrNvCGsf6HqcU6cSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WBsEPEyRUnLWPuhVi7rTosph7H2NyZNYs8ZX5rbXinckjuTxoghcEU3LrU2MGEBC3YvMPq33bmJDc7fS3NhZvVJ",
  "key1": "4Fq12ubRugQEvgFHiHxc6Nbvbz7dGR7GmURecC2JMUH3RhKEtMmPsEEvHXyBWXYnQn4VEDWLe5GX17C2MexGvBM2",
  "key2": "4uVUE3sMfLshRB4jtGgguS32JSDHrmDWenUf85qWC9dXhChrUZq2jSGFRzoAL5v8uZYcGUNm48J7CA5AwMgbLvEZ",
  "key3": "4JCEUo8npRkvxbkh8AMFhudiqWV1GEaNxQoyL5AdpXWQEu29ijXmfn3pwuMZgX71EzfpUtQETXFy9VTT8W8w3w1b",
  "key4": "2RYP3MTtG5dyC9sJSqTTV886EJUk2Q2kBq8CH7Kz4ic1dBnQXKjxrytdPHysEDXn6HGNRf8WFdrU7qt1VhfvasrM",
  "key5": "5oHkhRLi2LkXRu6vcM4SNDByVtoUz89CEHnfrUxNuRcRwnXrtGmTytiiWXj3tQ6hdqiPRZVLzp2pGSU2vcTNoxjK",
  "key6": "3qortuZufoktyhi5qzzzx3gFVBGpUSVGXQFJXNKYSZdxD4WtYXpER8zr8gAVX1uZANzUtppyQ2Lu9JUUcSdXQvt6",
  "key7": "2rPUyGoJJmjuxTyMxQPVCdFufTi1ob7SZL8NP2DB4rWkzvrcUCnKrNmErEPNJwvvcY1cUQ9WfF5nCnq5qe9Hb3j3",
  "key8": "3zWgy5nbDYhNRekQSktJxowV4vCHhXeBLieBugTRb6asN6Z31Lj2smr6652u7RJngmBojo8qicT5rC9nPVVnVcjJ",
  "key9": "4KdpKUfDFANRms36rJh66D8APKtCo7VQMUZCqb8mQ1p67PzGuedP6YsNDy6mBSAG33arJHEMrGazfWspFCN6PRku",
  "key10": "3jwvxx4aivxefvWAC3s6EX5XJEaa9FMoaNHqMB8qXKSgPW7dRv4nUCGSuyrT25E4gyNKWumhXiR52e7FRXN2pDPM",
  "key11": "3H8hbFJ1ProwAMwi9rK2XeXvSnJC1fHLHheSAzH5yt4o9LSBzSYNQUTDvyb5DUBtaNMTWB7aRnpmqB53zqgh49AE",
  "key12": "2K364aWG1QAPyY61C2RZKjy5eHCSYuMgN3XiDQzJME1w7XEB5A3XaDCYv3HwJPVcgi48cGbhNKvfmFamDqd6P1tH",
  "key13": "3AMye6HuS1L9DokXa31y4JZeHD4Gop4MWs1baD6NuR5GdePcdUek7mpp2FRSzSZfCja3qj7TtgybUtbHKCdHiFF3",
  "key14": "VS5JN8TBSE6zF38mBRaWbNusEjxn21uZ6HCUzKnEGWvje6BB3N3riBFxfBa62jN6Q6kFpbinuK7mH9VfN62VPfk",
  "key15": "4ScEj5LAKVHadw2E615RXGhfdapN6zjH6hPeV5Eu6mVK44JC9JtKfG4UafHFuTsVLFrSDomD7LQJzAdniSRRMEwx",
  "key16": "51oSwAaQ2TMzYuAFFpLGxN1Jpn8F866aR1seiajwTbxGzP4rjkxLHcek1JAUTVyUGo4Z927MdEdwzVvKaW4ah8E8",
  "key17": "4irMvYVpTSEL5YHf7XxJaeRW2fGz54p2n2aY9qaeuNRsB6sQHSFnk32kwiMM3vwLXic4WUGnqHRpA3NuAWgSeNQ6",
  "key18": "4wzXmm4KauKW67BddsZVvG9pi99erP7536nUUXXu9aSrSZTTSNpJfQvQTDZYDHt26yxuf2Hiuk6UnWR4HzQiPMdc",
  "key19": "4z42v5dgW1z1xdZnH5HdF5CQZtYkWWisnwGm1QjAo1RTYGqQwj8RniTecdBM7t7yxzXnevY7MuxyXpyCMc25gz1w",
  "key20": "cyQ2Axgo4dpwCkhfhziAeXSimAPXoqULvwgfmc2NJkTburLeZDgf8pByYKjcH2Q3df4iNaPjb4Lxx9fE6Bz6rqc",
  "key21": "55cAHJ1Wa44tAj77hdpjtVqVqfs5UGZFwS1ExkzZbFZVMJh1CzGwtGwdj3x9hGtqv168guXLSsCzPDy6RTFbAL5r",
  "key22": "3vhWbkQWjxX9cFNshWAMuRrv1kcRz2w5inkN95uqGMBPQyuuepjheKWjsYkBmbdhD1eKYCzvLkGspWAvihN16RFG",
  "key23": "SMHvoeWBcWkR7ZnRL4t7FpUrRqjT8m58T2pj31d6dm3nuLwxBNA5BvzC6EtNAG5mCc4g7fYmpQ89tbcq8o48Z7w",
  "key24": "39Mv46Tb4kuqW3iE3zRiSqbcEfm9FRKQFYkqL6iaUXmvAJxDF3TawxyWw1krb6Bo5oXqxd6Ex3ugUBeWqpBhZJXB",
  "key25": "4aXm4xmxyQqrQMCCWA4ddurDQp9Srfs9U9aY5supxAWJspc18ALg9q2gWTPZcu8e449bC6Q9sb6cktLVMJBvHGkL",
  "key26": "4ZyjdnY5iL4Jk7i34KdJRxHTHj2atbQsrJmFdap9AeNyp8kdgo2kSjiPasUYDqBSXbqCUnobbaJoDGmkYcQNT9kN",
  "key27": "2teWTG1WWQKTKW4QA8XZz5tZ69YqE59zwAYozf1zZeSjeQCmv5QbM3gFgmrPFuNXXXGS13vuSaCwGmhkF7ky3uVK",
  "key28": "3kmYBAKveJhomNCTVTWwSdxerVcUVfbKwwC9QZU4C5JFEhMXsTuArjzGvsr5wFbxyWniB4FzHg61uvJmm7Nnc2Gn",
  "key29": "4pZ2rhQaRqdLy2KCTXLawxrkCAMXLx82oi72TQY4cWX8FZUnmfwfLHbuLLTWcNspiZ8ihbTREGx8TtLTdJFYx1sb",
  "key30": "5Nmbo46y82sfNyVf54b8DGgwhiqWqJs2XHg6f4dGf2ZtWxET7dwf2qSEqCBduNnyHdgPoWVtkZY3v6SqMeTAfXoh",
  "key31": "4DhUZDLRA5ztS7wEwg7bkxLrfUUuqusdjSugfBEXDgUYfFjLg44ioBzyiKgpizHTnKBobqm5S7BjwNinhtxGdqS7",
  "key32": "3gcQ8zbyfatbVTR7fiodVfL6LHZvBAErBostoZFMtgfnExNWiXKGWfUCmz7KAZfBQMjX51fkv1FHowDJdnxNa4GB",
  "key33": "4Xyqq11hHBmcDQqGj4G2vQ65eto5WE3AV2Jynka6sYjjDqAQ9tj8AVUJ44NhVx5LrM2gpLEoEQePJFqXF2pQXtcA",
  "key34": "PGkyDj7nuxhoWzHmN4BGnAcP3VcUeQzpnjpoWb95BgFa6mrKyhBSAMtLG2PR3pk8yuezNJkHBR5ABug5XjeowvP",
  "key35": "4xxv3rHdHvV78VDzQrLkQZXLV1RZenyNv8ZWspqSLPMVfPY472T4U3VCRiTfC993ChBhVNEZGtVzdEjCZ6izWKdZ",
  "key36": "Rb46J7HGUz7ySnXN8VQQHf8dNSebphxy9XpGTuzRjtUKNmWtYUmSUdsm6YKpq23WYFbBpWqr7h1se543gy5ka7W"
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
