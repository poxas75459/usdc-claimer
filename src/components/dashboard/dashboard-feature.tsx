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
    "4yqzwUmN6PuyxrRuKkiWJVqZtKmsySN2AgYHMsu66hFQPqD7yyJR1vNuHMPNwPj8t7DHSXXanqxr5ykRi5raRSRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwvE4j7J46tYwRz6sSYNTZ6WtTndwaHSJMitpUZwfVpBqjEe2CTRHGTkQ66XYjebhNFr8gxcQgkxMn7m5tCeYTv",
  "key1": "2soFwt9QkZt64bcw4TWo6GE3A4Zz4V7kPDA6yy8VEw4ha2MQWjQqtnDaAd25QMbdMHXE1JfjVsrR8JsxdFyaaDWU",
  "key2": "5dZqiJuG5pCvqqKxFAn7P9Zn9pCfvMGMbngruohU9uin3mgLYhbcGAb9j7rpPEG8n6UNfYFrr63f94CTJiJLtCte",
  "key3": "5D4TanFVXyA38JhjnHFST7AjE78ho9P8tRVHSMSWf8Y4vzKaUHoQr8JBzCcnFHvexELb3bsbhxzQ6AXkbCUREJ3g",
  "key4": "4E4RfgmPxdqRjdiMta3uebrV1NhCcpURY5ggDgN55gR7fgdYSozFR97i5cJqJWbGNSrwbgH5y7f9oDpq946JojkP",
  "key5": "2LbyjAnJV4S4EwvDqctX6NncteWW14MWjaHWRDyQ6Aq5vLMbsrnWtVuAbfToUYc5uRaGkrEjLTf78KZUuwgrpEPo",
  "key6": "5JwCkrjqa9ugBgKpU5HSTEPzq3kBnaFoLKhEUCnbaTPWGsUnABeSc8wCxdbHzuGi6i9jAizpfSfpKz3Y4FxFeSZ2",
  "key7": "4cKTHkrCotx1cZYZGRdtm4rxBMcSJhMcS58zPnjjXtA34Qon9rJCEu5QJPy6bMnL6ma54WHvtsPYDYpc7xeRXf8W",
  "key8": "4vPmjrBD7uuYbAusGPEhAPpvZTf4tqHBcQqP7krQNLSaoFSiSD5xwLq4B4fSCHovB3gERwENJ9j7MAJU45uKKhaK",
  "key9": "26isFk4SF3J71HfvwMVxdutuZcJrfkjfx9hStrdGJ6uhUDcPDHQYizfZvytG7mZuzgiEPCZgK4THW6rm8F6ep14Q",
  "key10": "2iFD6pEE28f2AVrPF4VtF8ffbk1sPXLS3oWsy4PbHpm9sKxqsZT8uNenstbyJiNnTfgh7cVxpGrG4UtKuJyQAoFE",
  "key11": "63iBYX5beiKRa9bLeBKMjwoVGixmu9Bdip9VH2oyLmXb6d8nCt5iLmTYgSp5wFJdAs8rDLRD5EVED3ZwQcnY6trC",
  "key12": "4629qieVE2PpPc1h3Nt3pjtdrUPBiyAcAZf9X77ET4suRse4Xb8w2REv2gQ4QSgyVEcPhT85ntRgo4fxRcyaiYW5",
  "key13": "3AxLWvbMwmsHYsefHd2MjGuBw8eHMTDXhvdaFYQ6DHPUMEAifs4DXPgyBQuocF5ehvw5MZaUqj7hXGQZC1ygqM7N",
  "key14": "4hppCHeYV7xnXnA679xzWXr9brt88dDhdbUhuXHqRHK8q8xL8T2RD2jaYJtE4H8opG9ydre5Ju5mj4sdECWRp6ob",
  "key15": "3KY6jVCk6GyCgCnkXRh41qUm7XCiSZzqVQqCRhuLbWnUFKCd3i1u4jhjjKBEGEK3gxQdQ9e1q9JWt4MbZTV6p6GR",
  "key16": "2Y1HKszkKsZcmBQ3JwYzwLG9yyb4DWWye9CuXWYFTZyqtxYpkYpipSU6t6nL2QgoeGpJih3yphXnYP9Mjf32LYbm",
  "key17": "2fnJ8tns5umpgksa3gmK31jQ7RdvbLSfFTDw9ogjz1m5wCKRvCBvQcMqQcVpHvuxjibd55FdkeCC8AdakWMrhXuE",
  "key18": "4GPZHVQcsxhXmviErjCcUUGP3J7kXiJbcUN9vSNs7pKSMWZg23akGfo4MYCcLqVcLpkcvqDXmddCBWNNMFVWXhcp",
  "key19": "32AKfiAaoRxXTf8ZXji165ydCormZUoRQxyZoWwqcZANiaA9SsN1Uo1XFr1GThL1wkEVmvA6fgzBvCmeYYaVqyVc",
  "key20": "5vn32nqAeCiknoLM5FKeJExg7X2HEj836NUiV31SY1pcjQf7gs995TJYwKsnCJS6cCJSj7cgkckuUD2NzX6t12Rs",
  "key21": "4jgsH49u7e7feoNimPE5BjbVUhwqmWQxaqGyLPXFeRUWpzRw3Ktjmcwd25KmWBvkYpybgcWZn2jN7n5gQDAZuLRL",
  "key22": "4Kuh9B2ZqzPSc6nFKzPUjSMkFqtV4bUJTNZzM323vdVs8ew6BMcnXft2EBP6FPPq81rSHrsX9qbhKahzKujGHVpr",
  "key23": "2ahFNav5qaRQ3UojUED6Zseao6gLfZioHPxMgqcyLpTxDkDCVGGqxUYjXWiETrE39GBvbwTqCVgJYArMwwAStrot",
  "key24": "5G432A71sNtthiiB7HYGrR9KT6DZDMP8RzupqiyBwYPt2J7GmRUYDv19z3M7eGhuEtnTeitBvTxnZd5VhTM98ZAu",
  "key25": "3fjYn6u6hadmuCBvZ8NQWekB9dMCztJ4RcshNajaGVoiB84NAuBgwq9K8zNPyq6K4vyMvuxTFY9RSiCKvanCc895",
  "key26": "4tQ9rfhbo598RkpSiLgsGnsZ1goLbJVkk2NNqs7PnWK1XmJRWGhdFFgfZr34wydXwMjWK1inw4MbtvSoMxsXNw2p",
  "key27": "291AuNGHmThMyZUiiRxaAsmAwbBqPySSi3X6g5UjtPpFeroCs9PeyMKw5aU9Y4DA55VuMC5muAA9KqbUEVHn5p99",
  "key28": "4u34fnVjmak9LTgXdCXUwbn8VoJy2VBYRz7ZWKsyfTgVuyt2tBAJy4eojyjGKFZ387KgrR2XgSYx7gw955XNQvGi",
  "key29": "e93euGQmTbeCddw4r9dH6V8qabEk3LJ9UhLKCJJoxUkX8UrYYWZRz68PimF4myyVaiHhyWpUYqgmETAMMb4tnpr",
  "key30": "3Y4Ti3eTwQweD3oEKhiHpncZZq3LdXTBTJ6EXEHRHg7EDUjRWQf5cc1TrFr4C92ySCqXiYUai2UoiRMubsLiKwD6",
  "key31": "5rUfUDfeVX9M5of3pZH4HhLKeTYpGLYSTSXotYU4ekEYbocLj83xBwyZHhBeRaPaucDHaiyy5nJxb2iJCsnjP7La",
  "key32": "5pw6xkPWSstFmhMzkRDbULdpF9qbLB8zD3vvpejm6UKJRauqZYanEnfRzk9Mr4K3pHP36YdwtwTAZNZV6JLNAZjM"
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
