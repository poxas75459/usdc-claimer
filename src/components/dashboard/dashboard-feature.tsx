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
    "2YmstzYKeb4PbfG4J2x81cxX21Q3WzAXaGHq22u6p3XB1WyMN2prwBZjezqgwnDvJoaxFvRBF9TufUqWGQH6EicZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGczaUM1Y3mv3rhjq9DVn8U6cdYhQcHNZbrw5Z6octR32ixAoJdiq8pfdSntPhsfmo2jr6Re2nGkDM7p3ymUyer",
  "key1": "3HoP762hPkvWSgxpHeCCwexWRvrqpzuP1MFWWmpsPgRfDw2z43E229FYy1ZKLGW2SgwwJcHpJQGVvQkWCt2BpPYV",
  "key2": "5fFHebyXPbZTV3zz3m966ryVk83Ek3BdE6APjLEXEmFgPmG3NB357B9RGHiki3Hm312FyQaEK2usQsjG2LXBssd2",
  "key3": "5LPNN2H9pmKZqkeNDQ1m2AzyraqHrdQZx9oa5ynRcNPtG2GytsHC5abA6zVu4FPo9f8e7qVfNbfR448YvtThuXbN",
  "key4": "4gQxBeyE6UU3BHAy1n4q3pxgfDhAQ4Y7SjThAdpj3ko1WJsyMcPB29kfjNQzfqkbTgNVmT827Rr6FdoNzfHmWbD4",
  "key5": "tGGmzZeDpknWeUmQ6qWmtQmZNqD315xwMGVkdSSomdNtMFrmp9utDoCkxDMfLf9h9U861GZWuQ5rVnrd8pdVNTv",
  "key6": "62niy7Wx4AWvrjdNhGYCHpacnERe5jkajas4W7TPhQPTCpRyxQ18vs3s39w4PkJQjjcWPMSiHjjbqyzsyx6EQMu9",
  "key7": "4WQPr59iKZoEug6ZZsd2HJAro9MpTutBQ2P18sBvRxnFB7EnBCpgJrRVKtUaiKV4954DVWsaWhgPYHiV7wBg3YNB",
  "key8": "QHegded2vQucQQPGrn6sCiBcA3JkAV1UHHqcrKqRJSmFsdpoSZVvwZN3cHRV1xFfg3FQPYUPJdhSbvQb9H1o8Tx",
  "key9": "2qptsCw9PMg9i8mijzqhexaALZbvWWQaMTNvNnUAC65ei3Z8nSNEN4SSyP5yw5z1K3Dr277USVsxcEQrNSmMsyX6",
  "key10": "3vAMbWgsEHQukdjRKpALhkpZHs6txjJ2BFH5hbwaLz8XEhyLdAxdCVBP3Jg1cjJD1UutQVpFfgQhdY4VXAHHXfUX",
  "key11": "2XSzGv9C4Vwccfg1EEBC46TJCh4KaUyG4TrZzgQmQErGtesqC7M4ztBNg8Q6roevr6mQwDJXG3kfCuNGbtd4XnnQ",
  "key12": "5q1h9gb9ZYbLeKoJCVS9mKTmatwRDETgayrruXEKsVZEoggDLodm2AHQcbj7X8rewW7vXqRsTXgZTuxwTN9T2Ai7",
  "key13": "3vZg6CDyj43JcqQQbT4Xcdh68qCHqhALD82TnmLcdNCBqRut554MZFbxLKxrYAW7HjTCXubzpz2bU2Ba3KgLmzYe",
  "key14": "3FpFLS9hsR8pC5w5kiEZ4vWZMCJH86tQk4gpFAwSqFpxhMHXa4wKHdxGuxGm7JVhxqrHMzsJBpUTKvXKmSdYcRCy",
  "key15": "5kzs6EYQ9nhyEkYEwpw5Bae6MQoSTYNdthNqduFGkwDPXrzjiteHpMByxLtpZShbjmPwGb8RGhYJppTEVtywQyYd",
  "key16": "5uh5BoguY7JFp43cE9LjFakByAs8KrRhA39WJhYsBE65uPfytPgiM2MwxZoenrRFcgh51g9bUL4GNFJFe3CXN9sf",
  "key17": "4oXEZZeVvvjHLEJYYrDYo76g4cn2zhnkwbS5WZvGXFUAh9YUTpgDHQHXpGRYEwz4j5eqjf3on6DDToDeMpT62V5q",
  "key18": "3W9pNp9D94jAGuVuj2mmm8UrbCK2pcUA2rJfBEHrPmdEf6Dia8THNxvCMHZLrxCYmSxe1bMmQNtVz62fanRn81DT",
  "key19": "Nqq2xM6tTv7gv4EebEVy8B8Z4w1K7VcfNsHWrUuQapLS7HWsfi6qSWqQH1YxSZZPC91x1KZ6pzYTfDuSX4CXzJE",
  "key20": "25DXW66dJoVhCqqtVuM4AwmgyJoLFUKB3AtyHCSroT53s8Y5wT9EFwtX1Zi8AtP457boP7Ams1JvvjExWMj1mWqw",
  "key21": "4V6vYaqZYpDqmUt61YdEdBM7fB1eqRqK5sLjNyphzThsVfnpdv5GdthuqNJ9oVYYK22k6ZTx4rGDgij7qHzxuy3y",
  "key22": "4Jn4xMjLac4gaRGi5mkLHWe53Uma12Gh1yBZxbxJLixsFhZQvu7uTQnW3RJqKB5ZbJAA62waFSGx8PxUif2w6PiF",
  "key23": "45twUj7AuNijgSCr5ZBM4rvNvyDqspjtqgzaSmyA9dE5dzKQPyuYPUPqW8o8SsUu5UN1p3jgTb2DHmZNHYVZVwrh",
  "key24": "4xhxAmVGW7DY7S2BgBQyQXueno7WAyfNo85b5yMd8F1tfwKJkTg3WMsz12je5qcXQs6awxBWAf3L6ov6eFod19gx",
  "key25": "G5VxwC6vZXHoGJqGk9SeNKgc1pqSk3iVB45KAeBurP8YBJmEpiZy4LuTXTQgsBBxLx3BTybBPWyhMwaJvEtuM7Q",
  "key26": "5DEsSBWoWpnMrr1wLXTjoWCqorHKkayBJfZpPEBycuAKrWx3EPPyfz5Si72DF4Tmc2VPfegUk6rcJSAgxcnxXcJY",
  "key27": "Db8LGfjedfKgkSKzqPQqJg9MtCLK9GTtS129bM5oHdhfVkFLtgZi8B6ZBFao94RNFUiEi3t3t9jojFqGGuiUYvL",
  "key28": "42aDgwtR87mzobNQ5LGQx8hvgwqT489LThwm3QBLezg2DKk3SACvD3Mh91xQySJmYvTDbCSDDF9WcyYDYUVNfhF4",
  "key29": "38cWMdegtxrvVEs1Ucbdwy3uCBwLgomJhDA59fthRDfSjvXZoqV5TpwUfaJHhGrUE1oFDCyfqjXxox6h6Jk7K8Ug",
  "key30": "3EcMTbNRbbDSQF8bZbYYcvgLNVZy9MKTZQzPSHj5x8r7r7aRMQTA75DKmmRnHXSRhDisnmYYVaRW8pJ1AvMuiANF",
  "key31": "2PgYH8u9qFm3e6yhSA3puYnc22Ae16vxwFdxxXtveWq8i1TC6bt6FwrYeKFY7KpcC5226XPP2zbZo6TXRoSs9nvt",
  "key32": "3YQY8JKbGx4o9dC5fGf8oTpPdtXZA89K6vupQSo8Bsn5iSCVA5iinywYnqyEj6Li5eUQ1Zp6f34Ejb8ub8Czhmxx",
  "key33": "2nDEVMhATYvbXjGUrJMGqqkGRDcqtaTCNwpFskvXnHLXFhUBdhQ25uFH7iCBAR62PKaxcB2W7hvS8ab7ZLWfXeWd",
  "key34": "3t8NMmx3kTJKTmb76tzmGYb3o23HE6aefA8NYaNyM6v4izE6zqzCunThsd9RWDuduxHMW9Dhw7eNSZs7hhYqeqQ6",
  "key35": "58BePvYVim2LfHmvFPoNxQ2vNPubAtu3Jvr54Gkd2Mwqg4JARKHiBi8CZx2gT9oqo7QMGBHy1f9kvBD25WJMit7x",
  "key36": "5oKZdyrCrE4F9n32LXPPruaHQSgaZrumsZYqwnti6gSQTHNJFDy8zfFPY3Y4VygLb7mcz9ayWzueZJuRJqjAiqX3",
  "key37": "3NXmZAFjFgXbXpUzzRomi78hTh7fXjRj9kzZcdQQ6TXWJCQ5SGULRqVFmXecp1w1ZDKqDnYEiPor8H2zvnAETa3W",
  "key38": "2wv1dA6upCdu7mCsAP3izBbFKoXtJAVERCLrJMajYkziHSSSHLzkgWVoHL4FfqhGtXqMzdKrTq5F6KRqNTyxD3Ke",
  "key39": "5C29XRHJr22PJBFS8voGyypp56WVaaPwHkpS2JKcGSCPnbXbsKHqTzCK6GqyVyPznAS2NzK4zJFaJbX3oaq3wA5Z",
  "key40": "4eLKishTHQ15ZXtAwyvx4VjR5WW8C9d6zxo2X5gWDktBUWKKZ6PhUoJa4vh2TKnFYErWxwtDg9hEVGGSi3JhQvr5",
  "key41": "5G94Jhip6WxwqVY5fDXrCJxiV6V6KAxQx2qWb54ZcZz11UTi9CdjiTQEeGGoh8yGsQbd3QSixEqC4SWogV4Mu7Pv",
  "key42": "43omZWLStGZ9YqLWat9k8Tj7rCJejAR5SZjPGMnmb3RBzUDfyHk8jhtKgNfj9bV8jFTk6hdjiA9EF5HctejFVZL6"
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
