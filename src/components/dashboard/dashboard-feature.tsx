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
    "5A7QpnH9i5NWS6XotdeRwjaWG6JyK89mkHvUrhpXnLYq3UQciF8isAuAQUwEm12Zo7tF1MHPoWzDUiSgBEnUMwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAUxzy9TCcuTznsPjxQAESLHpMM8aZrvqU5wGnGyutUDQhPfoLzv6jQe2zjoLWd2wus8rhNdUrxSziD8bqMBUK2",
  "key1": "4PP9x9ZRVAE3eCuHAVBjaBn95zQQwcQ18n52CvvQKa6HZs3ykY7bXd2EJwMYQyMnnYohdSFTpU4KPGok1jHWxwDq",
  "key2": "Z5si7VJkzcTtiosEMygL5q2b7Fft5Eghw8sqpTKApFaboaxbDXW1yYmvNQpYnhQgshqQ9AteN22DCK85rorpbsT",
  "key3": "3ZBcazSxBiAifaGSJ2yE4Yui7pEbSc85yBDATSjm4t3856K8ZtyMmyovDaSs7pRvRkRBaYr15EXnMf4Xgik9zCjy",
  "key4": "JEzFbvxUYzhKtEDs5BHwQdjzDYki9NBZNxjfcQ7eanZ25xySh4S2sS9BRvKtu2no7uidLwpKLXamm6gQDmqGsFz",
  "key5": "3ZtmMwyVt2E2vBHrnanVDg4cqmCHNE61Bv5qY9nd9AQmJkCv4zemjquMwNoV9BCDsShj8TgYWuMBm6tqoMzsUsdZ",
  "key6": "4vntzhxSn6QKHXUSWZujnZkLezS1wqFMELL9HE9jFwkDeiwu5X1CX9arVLQ6cq3vs43SWG1vUs8njgFi6aV4bXUE",
  "key7": "66xi1aDxnYUTfEyqavDP9Cb9Y7g8F1SALsRgjX2HGXtvUqo3TPmDfLSRCGS1Fc1z3nNuvWsnbGJ5RJfQYr4NjUUX",
  "key8": "5s4VipsipmhXMtdTPhzLNWMYELD4uoSUYKRFvnDpRb2j2FF3gsxxvJJ9pthwRNh7eySwThWdtieF18sCJY81zi9j",
  "key9": "2NNHX3H46XxJ7WM5hhZyAMok1Mky8wZQkf1gWt1oEtNDbhUWwa4dkwgU11mAuS3FtCumteKKpB96rQjsexXnhDCn",
  "key10": "26dS6Dk7C4nrU9vkBC7U1ACLkuaQz9ZFZki46jYmwTtydjCQRbGZWcmuxuFfuRLRCRMQHWkRi7yeaV3dfhgdmNDD",
  "key11": "3trBwRFkDwBMGwaeHymaJxTimrxHXJBLQpA6PLZkUqsknryesJj2tDp9KXQZ5RESkNkiNKX6HebCUcG5LBffEKKN",
  "key12": "4ZEphTtbg7ytKcyC4m8bW8nmwBm5cK4aSgRAmgPcVnG2QR1Z6G7hew6rzmN9QC8vLNtrZeJJixpFxpdjBfAhAKTm",
  "key13": "4kUxvLDKizp41APnDphPvNaAMc8S3G5fUNxh3mxC5hhuLs9h63SZUJCXVxpHBC2zut5twdap1sTCffnvs3dRvo9g",
  "key14": "57jgn19pUbbojc2KYHmUA1Jv4bxKY7ePpEqHXQQAGuLk7dhR2tN1oZDjdGDFzNJMpCVb2tZ8DVzS6Yxyk37Zn9jr",
  "key15": "5wshiANqNHjRthycqS8zAwRW3NUPmsyaVZ82iqHXGSKQQcehKg7E9L7iBxBgHGFsGnr78vD4qyWH2Ztu3qwsAkF",
  "key16": "361XHJBMitweZ7R5XdgJm26V6pmnLtnTkZHAoYJNesuVXDKtna1f5KMFFWLshm6pFsuX1Z4NQDehwrDf3pmEJzfr",
  "key17": "4kwDRqx7LnEsWeYZ5RYCAcRN5ZYcts7hXDhdn5kZgr6rjNSSNFZQFzGDg634FawnVqYUA5s19SWu3PBT5JJhV3Kg",
  "key18": "3NL3f9syAmeyHF3UxQtBsK5LcAqJezRXgLojFJHtJQHZrAWLvR5bzdtU8bp42G1pEA9vR8xEaobz8FX8gjdYa6wX",
  "key19": "5g4Q1cPgNGQx5tzHyMd24FnwRHPS79odMoAaUTxMWfYpuJPKHKR2ZDGCpH1cLSqjsTfKnXtSTwo3mbm5h4QdgyoB",
  "key20": "3dA4PxMUDxApiZBmJWyAnaXmspPsw1XE5bAjYxhbN663bFPc6NJkExsW7a9ZPgZX6wotPRhBZtCMiyqTYAGaPhQ2",
  "key21": "3BaCutZsUcbnw3bToCYLDHpg79w51jNwzWqiiNsbrZso7SaqoohkKunHJnbmde5ZDAUuP2t8K543SCMDyk33CrbX",
  "key22": "5CuTtmatE56coYgHsrPjvH2nMZfMVAVbPWJS36h1R36BxagN2Mv8FpD2yA8Ar9vkUHR7XwnxekYL1Uxd24st9KyV",
  "key23": "tvCUEDmsatP99p4bkV2LRbCDD2dpQSpKTqenJTXSGsHnf5eKbS8w7TbJobb646NRH8J1NE44FmD6UXzYWrwmz4Y",
  "key24": "25rJJEG6kqzum8rasFkasRZ9eKJTPYj5Wub8S57ugEporHEUxUATXS5ETZXibkAxDCEcxuuPnzU3hUL2A1RPUuZr",
  "key25": "3UiNgbzuYTrZ4baELNYD6Kx6vob7JVNfqAVYxSeQNKYRdrHrSUr1Tn83hWo48V2EhmpqaGA4UHNTZ6Qaxt8Ua4bL",
  "key26": "29ZnkW9yUDqLvsEFa8ELKk7o85uf8AYeeQQkJFstsei3J3bor4ngKq1bRkoKrPfR4NMFFa4i5C91hdAcK7KP1inj",
  "key27": "5M9DnejFdi4bMcs9EdFFd66ZA7brZdraVDvzUeyuRem5gVsjrniHwrns2PqpybPUyhTAdLje27p3PZg2DVEegZwU",
  "key28": "5icwMseoQMzuoawHzPi1aJ38zBaEjTh3zUjfT6JWAZKdTCjNTn9k6mprkGAeXjYWraYF4XxP2Sit79fRhgov7D4B",
  "key29": "5vUCwBrXfUy2iLvFptXTFDKM6d1YjoH2NwVg24c81nSToQLoowbaosrehysJWS1Ft1UFX1ZtyQ1mrTVCX7cUWgY",
  "key30": "3kqP9FKo76Gcfxx1YMyi9Qs8R5Ts7VMDdEj2aWHYgASvj8gzJAgwzps8jXbu3tdaWM4Rra47Huo5P9Y1fzq9VT6d",
  "key31": "4F8J6qAwXHRbgVYCV8K55bH1vtSMYyvFGj6ivsdwQgMNH7oJey6XTau1XNbkyXHsDHNpyxsaRwcKGX1NQExZRZJN",
  "key32": "MUCzByccoFZdeWhtdo1rpB9UNd2mtsFHvTxp8ZY35Dx2nZ7Qpn7At9JgMPCrzdFbGkA9KEJu4EYRDvdKSTtu4jb",
  "key33": "4T145FYNc59Q5NYW9DssrJekGdtQQ3ih9WF7wgUakzRQytKtkcEgXmrQohX1GqR7Kq96sutH17PuvKLEmYRcnTKn"
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
