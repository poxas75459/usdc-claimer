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
    "4GYsD7esXjH7KmN574MQU5XujyYJuL79VSAXFcuiYzkkFRCD5hfr3vwqtszq14iX7cyUJKrpPCdHCXvrB9R9EFe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yy3WXsQ7X1Q9BzpTuuScRYG9U8mFLAyo9oVDh7UvhtGBUrAdfQUyB4R2ruue4eHhsripP5CtGcND2STYpQzuJxF",
  "key1": "pEWgCMFHMBico2RACurUH2RkdCmRr4XzR49yRviEVLkCryfDZDTqND3yoyx72HmzuEk4FG9i8nn6BkQtyEyKse9",
  "key2": "5sdjpXtMCP84AdcpurwJ8rKsDKiJxmSvSS2jv6hDouiaPXBL2oAbrGSNMKqzFWeGTJNoHJgJQUWDhtTPuJ8gmofw",
  "key3": "4889zRur9SAW2wMHcudWbvRpeJPAgbpgJsDJEWb4D456xQanJVkMikZfrfT61VVh7ooeqDCa9JFF9XwsXKL6semQ",
  "key4": "57SrRMfj6aH89WeLMLg7C6Sbc5VXJgQjia5buZLZZLs5CavrfgW7eFh9ozMiTjb8G6KaPN6Az41mifFqxVgJG75R",
  "key5": "4cYfoHhnrAf9SiwTUNBkWjKq2xSgewrxbc8hAB5KWi9e4EPhTSb1SKmrU2VbLzu9uMd47vo2CfuD3inAk9iTm4x8",
  "key6": "hJsbv7Ybv8Fh7noYzdbmmGSvn3L2m7sk3mr1xMxxEPho3LcVYr9wpYj9XcGkPBvbxYkWJppEJkaLwLRWaYuJG45",
  "key7": "5vxoFrtBfuDNQs5FSyijh9oaZUNEvmky1dshCTHczmNXhyArC3W7qGGMzxca8Cn2TB2K2tMrXUostLFErYVxfQ6H",
  "key8": "56PGBGTiogfmnV3193paigUr4iKjpFcDgGUjFqPSPysB3eH2qyWJtWAbESMnS1SacyDQbfTn5Y3HKXqkoNbAJLCV",
  "key9": "2UhXUcfbfjiFqPh6NTqJEE2RtSfZk336GNL938nUiJTLTvBxuCnShNKbHpewNkLL6dYWPuhhAdLwWAWBz2eYN59u",
  "key10": "2XgZhZ6jk1CndvuPBdrUsqQQztJ4nfHDpRRiUGXCq5ZRPo7v5zEU95F5dLYa8m2Mx5RaGQhHBoazLRQz3VFRjNqd",
  "key11": "1Q1jMgitmFxD9ECwzwoSXFxYV66fJs7rNySHPw6Fhdg212Fiwdqc1F4UgbRjDYpm81Ag2s4Cr5yDD1equcyqfs7",
  "key12": "3UDoLTnBxWvKQn3w5cno4W2kehk9BCZ9KkHebVyH3atC6T8i4RCthWmmM83RZXNfcpoj1BmtYWt4JwwqHw7eJS2",
  "key13": "3UyKZ9PF8pzjJxsJtPLUoDkZoucCYAtzaKRE3kfgiUK9TK8oX7BeqScFtPFspqFjeMEDWQN3ZxhvQvRiMR9tnRMN",
  "key14": "33DvNAvYrN12qNy9hvYdV3Sc5MfiMzBSsVCi32Swdv534eS3cEAJAS157ccr2jw2qMQtXQdxtyTVTSNKwUe6habh",
  "key15": "Hg5cykuwcuF6ESYpBNDehVZhm8r4ktKn7xRts546iGGb49rhdKzBWAWo4o65dxF4nya3xjjqVBcuUDTgyCoLoXv",
  "key16": "3VFnAStB79NGxtRNnXU4r9dzX1k4uEkX2NFBdb3XbPaF6s22Va7cSsnYLWkaQGcAxwotcAFxoHY897nBuyib4c5t",
  "key17": "3YM1Z3fUEQCdRh1uJCHMjxV4PmUGVKjYhQYXwAbN7FkJZDQquVjdBrc1zJDgzBTgs4zS9TXY5oS9DMveH42zvmJ6",
  "key18": "21RKN3fEzQxcFV3Mhkk1iQ1su7L3L5YSLe5VJ87tT1qY4ixP9XR4oxvnXv5ZhUtCToAa3mzcuyU7C5CmTL97zNc9",
  "key19": "LEaTEjPDEVPX9d5RZNkHYTxuQgTWyWFGG7SZX3SQVkyuuNKb14SfNQnsa5rJRdBhCW9cKMULo4uvnqjh75396bq",
  "key20": "2Mw3kYd8VqxJESBqEpByLEgL9KDB9fg9juww5WAsFkTrL2WAke4gLo1ks6YkM3JfGQZCK7fvsziTdtBmcTfQs4dx",
  "key21": "3CGnpL6rDnsabhcSVqyAdxH58xFdtcTcH5fHqWQ4qSSzJYTeVxHYSzaX43DuYGQ3qXj9oQGenHbuEFSQXZzCLhfC",
  "key22": "23YxWB1SEusHyiqJh3rbkAki2qZ6jF8NCD4ZcHxnVt3KnDnQAw9BpJ6YnS2x744ZudFLSqXGQYhNfmsU3EXkwHs4",
  "key23": "2ZnFtZacoFSmfvdSRcGUMwNrB7z175EbvEJds8jDAkMX3J7YBL2NB2653wHVf5bMfrb5Hz2MGheSgufDfoScGXf3",
  "key24": "2evgtchhNSkK41Fd3MMcJiPmm8Rsz9VroQ6Z1soPW2sh9fPzwJd6pY6F13MtJj2RMwB1Sd8CjwsgSXYUJDqHef5r",
  "key25": "3V1rwCsxQ1diFW4f1GSxD1uAMBgZLoH77edfXfubxERAtfshUkibeHvnTUCSuFjTDCxASWhrbCmjAw5SfPKqDJgk",
  "key26": "4effSS4Bevbp7rdxyBSErAhM9B79tBHmJdsuKTqC3z59o9XQq5XucgX9JFVSyecJNWMCd8HwpoYV8tRiySQzdCr8",
  "key27": "29DPd61wRXPvWV3bjdfay3jhkJKn9BbDFQLDTXoYSrWSTfnpMdqonPHrVsZHPjWomSyX7M77yuBn55rrQSKDi4s6",
  "key28": "x7qSxUemUTYwZW182ty2nnBa52RBHSgy6cakfyV74czwGN52L3WqFkMn33u4ySZWgzSy2wnvw2B2Wcit4jsEDZu",
  "key29": "5UFHMDcEQ5venChmkb3jfKfufbKHXqw3Nw8d8RFAysD7eTWj3mSwKGipxHVpAXdSGEuM3BuC8wX1gW4gzQiXuDLe",
  "key30": "3KqiCXQR68hcCbFzDZz95iZuMGrBH3FEThxeNAmKPGV7Ux57NLDbwq17aGYjjgdqdEX1BN9hSwDJEPa6RC9xPKED",
  "key31": "4Xk3DGsf7JkymXSxypctn96RngNVtGUa1FL6xjVnmbsoG1d2St8rGpqoZXgjQY9orR9Amc2TJ3pwtjWbXRDSsv9M",
  "key32": "5N28zB2fAXo7HACbFNTheNS6xLPw2zysavSxb2qBexmEYDD5esdWhcemqxMwzYhAqraK9EX6YjokpnNup1iEDhK9",
  "key33": "67RBFxQ8Ja4eV25hWvDAT5Ur9JiCEKTSR1SCVtiDYtMij7J8rqg9kUw3TfBWbP5pAgqjLTGoa4zbuC8TB2Prf7Mf",
  "key34": "2sMySsiEDEHoffvi44MTNmTS71DkkAPHDXE4VNxWEeuYMyw1qEcKfnMuyQnZuso5ZfrqPapzUk5it9eqw1U4yVeY",
  "key35": "5snBvJBp1XV38ekbiCVkgFddGPvdpLkFfBKvzdkjjTcmZTYrArGDCYhRfCgQFNusoc4ptDzji1Kc5ziKQAdQtke6",
  "key36": "5vVSm4hYhnBdkoUKinPs1C7SrpetJDkE61GhcE7yacLmXnjayvNWPbMzWe1H4Vemndi9kRToxVoKiu43iXBDZPjN",
  "key37": "67hsMD5xaiJVKPY68UJAoUXYAStE2hsereZMa6bJrdyJE65TsY8YmWufEVMgaMSvKHsDjX2oPYsWN7gw8GEUfLeZ",
  "key38": "42YVAEmzKW3Q4Hj7Dy9W9vNVYdVFf4B2mskpq5AoqQYkTSfZmAsgAPPtF1vqvqmK4WwUGv18uPi3EdAsGvbKZHsu",
  "key39": "2En4HmrzWLouVuNfV7gvtuw9ZjYnzKGwyXHA89siECQWyFDoJHfw7p5cy2YKKSxuoAahpPC7BKkpxs4Zu85d2GCN",
  "key40": "EHwZY5p8jf39KWG8igk6iTbzqxP4q8PiiugzuzGjaNmyJads4UNgyFfo5R2HXnfPgUZe4V5EvFvAyyTm3cNsRoq",
  "key41": "43rT1TxrKfSYXawqHZY8gBQfJSobCsbnvckctwSMvCoBX99gnEUk1E2qqdc2YWF3fNoqkpzr3fqkufWFX96Xtbgf",
  "key42": "aqZwQf4G4odPN9qmRU43bddTpSbobTqGPH5Jt9s4aNT8jpYvZZKJBUgdbZUewm9Mo5wVAEjTQMRWQShoUNq7JaG",
  "key43": "3EEWb1KVaTBRdiHuMkJ31K2sc65nyy7uqimf2jhtgiVKeS7Sje2fw1XSNECvzPHMA4AD4MphBHBCb6twWmujnvdK",
  "key44": "3QrSskC8NDxEDwHyzXJ3SDEM97SWFQXA2LAdAzBzngVgGKDtNha61eDpAzKwknHZ8SueHj5dyLqA81m1K5ABuW3a"
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
