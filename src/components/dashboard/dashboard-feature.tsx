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
    "3HHMDNa5q9oWkKwonTgSR51Sp3u2wFTSEqMzhCkvNjDZmJ5YXgpCLJRjPYasrz1ReYTZk1JwSs66rshyCFeZjnVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcjShZpCw8wjXwnQYLe8P9Uutzu4nggdEtg5mwoJLSRVLWuffeHiqwtvmVZwbyYcfwiP7boaA1F5fn7ySsCPDcJ",
  "key1": "5JoTF4L4BnijBCXaS22fedQvDgyxvkVQkDfyQ5AZoKQNy9cRHR4JyGDusuqR3fxRjLYxfHQTutgHpgZ8LYqhcRq9",
  "key2": "4HHmXMaexhR56ehkkXYVqTg88pvCxSXmjCip1sCDtBZL5P27QyBFuwhjoLdAkJaeNXajprHvdpCYpj7v94ojbA5j",
  "key3": "5MQt8M3E7dkMMqoRSDoXunKCstogtPnaYnshSKiLCJrWQCfBtmekCbSmQm7LMafiNKvcDbQt63xxh8tFhvts2Jcp",
  "key4": "2mrNwW7XbzH9rjBzdT7Sx7yfVGhAAuQMEfQq6k7Afpia1sFfYeC8pitw8WJG1bcKyYCnocfks3oSpLaMpT7LLocR",
  "key5": "2a2fKexsvhc3hZHdQ6iWqkH4Yavf5PWVAw8B78mLh1VCk2qVZn9KtbbuwZHNnCMtPZfco3acfqwcq7s7dxdfPX3X",
  "key6": "3nnFQ3wC7c8ptU9uFM15z5o1jHugWJ6zagzGq9iaVPaaaxbMgy3jA2gnDrUi9TQn2k9dXFTYL7vcscKcU5rQBCeV",
  "key7": "63XcNF19wgfdPCF3aTdUaiJD63qjRg31mtifxuzBg9dGLeGDYwAy4goPS8vQe9UC3S6Y7rdt2XeKr7duSKUJbMpq",
  "key8": "25HLpXDGfrjrXNEiJauatVRVoLT1nvBGwLraM3j5HqPKmW6rMGDk41FbzDg7DijzKYivy3v2BDXPUGjsgHdUxjUq",
  "key9": "3v4svRr49TCNjhTERQePiaRyPmhAhEYuMfXcARFTscWSgS3nRDuq9WABd3oKK75apKbTsYZ7tZN57A8eT8cntALc",
  "key10": "5mcz6zh7uHAew41LB8gujEXyyyiegj77EdapFhRczCT9zZ9xXVeSAm8912SoNuKJPhrZE89DLEvo9bj2NhXeHwiN",
  "key11": "2ekuCgmvdUgpGdfm4cL9wFccD1CLrQobmhAbxK5ppehPamoo37sYpsfJeb45J58BGXkGACqDMZdXRV5bKsH76ufv",
  "key12": "3KT3YbZS62ECtu4bQ1tdFTUk11EaA8avTh36ogq15rnukvA4KUmyGrUCsaE7879t7EvEJfhrXhzSa6jnv7J7Vr1J",
  "key13": "2vH1fRi5zcrWjwKYPUMeMoCdRkJ8ek7vSZr4WrGLmV92BKa8W1Grfgwf4yM8esWgTbkyZcr8tvFasL7SFjd4uXRV",
  "key14": "39zs1nJczYtVmJ9b3Y4cXig8PhUh455u6dv4iiG5SKMbkVA1eXH8oVn1ZbkHgEmYpUcP421cEKoorFYveRjf12zD",
  "key15": "3X3gpBsUWVPGb1Qib6fBKNghxCPxyYfGWv5zJsjZEQ9AfSsxuaRJ6CdjqesWA9PM1oSAqFPerd8qcDeKbc5aYMve",
  "key16": "3Zr1BYy3YkT3GxMLRjxk8uAKXTcBs7245b2LTNxzQASLV1dD29UcWZjiiRMGHMkFST8zg8hKcNPiNoHxsdh8KAUy",
  "key17": "3XH3iCSZuGhbNeE5uMqcEgNnVzXQSaXKcSymjg4jaWu5HYkYCbjjH33cXpfW3VHncuyJebNhdLs2LEjpZoNKsa3B",
  "key18": "7pHMmXu2728y5GZDYvyuoqYNttAr5DF9n7ARET99HvABgGFeuRiM4JcyydLmdG9krdFTPLypc1UQLkcTJ6Pko7K",
  "key19": "2WMvvR9jcAr3VCrGaBkHvVmehDTZXx5p9FR8T1pDxq7zoPwv9J7wpSWE6p6KwrVLEoQ9RSCGTBFf4njB5e28tBjg",
  "key20": "5bW23nFiPcsjGJp154TJeAubrvPn91giZtCttVUZeHcEgWjFuW3VHMcWS5KfvQc1mNPfkecNSrCEri4Vi1ruE96a",
  "key21": "34mJFk3AE9so3RNQQi7gPCRE3JffWFbd82CdJjWAxVmxKoo1WoEFnt4wd33sVEKAHFNVJ8WHckV8w7V2QBaS7RTZ",
  "key22": "2WBNijcJ12FgR7x3x6ewJgHsagcdqSb597gkGutM8ZhWjAjZkBbkjU1PdBWMnRiWv56WtdBtFT1UQ19n67aiftUY",
  "key23": "247xLkBqKvviR9DpJ8tVkDenvWhBurf4ygG1XXSsReFuv3TFaEs96QN3CfWBdTvEFmPt7s7X9duJ1raLtCwv4md7",
  "key24": "348H3THDkhUmSVnfqLbHhXqA1N4AiP1tRe4645dhBxD8obsUReSqL64Jnk1Qff2mbuEVym1ZR6ptKbadVBqTcdzr",
  "key25": "5P1Wb2J2yAcNxdnopbFm3BJk6oEE6pUdRtGzYtYgbpJqcS4mJxBmfMSAC4yMQKqYfzLzLHgC84k3jpvXAPwbeAhW",
  "key26": "FT1SXTbNLY6yBvG8CaVWuesJsgZAziCd9oAiZNjkUfV2e6wABYWzYHxXBRr8tmCiEzpd4AHoLkJSoeQhWHP2vdh",
  "key27": "2574yBkHrVJXqaytnDEtL71CJUYPgDFZTAwiDzuYHCLU85MvnhjGdPFRX99QtT9ShD1Ewx1EAnCrzVTFJVGpYvcK",
  "key28": "298QHV7WjiaEpsgypFXu5xhhXLMpB9AaX2FrxCf2N4WxAzZ8ttTFunZDuh3cLwWHgmcBy5WCWgZmkmXJZFsTzdJX",
  "key29": "4wfrZsjhGqkGWBcwopB95XtERpPg544ta29TmkiVUaL6LANjUpEHkd5hkiDbMMnvit4KR7QoT6GZu9NqFwh96CqA",
  "key30": "jh23QN5qWxWuMDkAeyLscx8RNmsk6B8NouiVHkNhset3kMQek3wmP2xfAtZckZXV59q4sE3sx3FZPNf1K1oYCXG",
  "key31": "3VnFbbTKvpj4RRLqJy1qmEF4z6yzPXV8xRU52poeHAvzTNJ9h5cdx3AXY2XHSz5kpzMmigCd9coDesTmLBkSJLnt"
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
