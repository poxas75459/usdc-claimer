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
    "5DHS2KHc9n2XWoPDXSV3v9jhnicGVtouZ27iqZHU1QuLvDek4vdEmTFJn5xA1Kcm7X6b3164ohGrKGH1AWacqHEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEznNeb3nxZ7Pba6mp3oKVtGXs4jckeHSXVFRQ2sAaioQznJ6QWWFLaBTYVhk1nHH7TbujdVqRuKd1NrAe8y3mE",
  "key1": "5JSeq2NcCfrbp4LQw8njCCc5rvE8zfy3zFLjPdvjdyVoTe3xdhPeai6DiQ56thwzYpzbPrhxKyHpp2r867fXNbVC",
  "key2": "2SdPrVUasjh46uYsXRYDyjhbgT2W89qprC1uMPktHbheawGoD6oMEbyy46CP1QESfgfbfXq3VNNegMwApiLmTD8N",
  "key3": "61f5KMGAxYufhmHu4iipTpjYmN5XNa3rg2qGztLVb2FhQ4xGXZB33weoiZC8WiXKq3Rgh8XdZK78K8evQo7WXycw",
  "key4": "5FyzqusJQWRQzcF4kFNTUXhaExwUcVXceVcBCsSd7t96He2rLtb9DtirBASqgG5VhobLPmrujNuq5Vvtt4PkxYzg",
  "key5": "qbSFweZ5iz1Q3YUURVozPtyyLJ6vX7CXS38JTAumvxB5cfmDgH6uZrhec8vC6WuBkTC3Mwx3AKzpmAa6A37sQKo",
  "key6": "2qTqN1ZuXqX8WhfCfrZVewYbCniXHF1LVBAF66SXPJxphUQB3dPi8yjzon1gPEtCDLk6GMue5dLkgppUQtV3ZoHp",
  "key7": "FfuPi6FUrYFSm6pLjMFr7hpYWiKxz7BCGPVXXGx1bPiPHUPPBHRQoqf8JASG7uhMGxuH7xE8XjpaTNgVT5REB7b",
  "key8": "4H1Za2AKAH98C3MgHXx7hLU9cJUAiUKP5G63ar3mRibHTegbv5dpa4hokkQiXu3wfbuYCSWCvS1cwQj5sYp3JB4j",
  "key9": "u6UhinZmdtMY3p1r8FxFPYVzX2dXX7LwW1FQWgWFvRyEx3uMhMVizBB8FxCi72MzsbJNfE2e7n115QTCB7rp4ey",
  "key10": "4G4zBh7QbiGK34zJCE2BhKVukUhBTYsxHLBsch9QVDdv7FGiSUSCw8LZa8vXKADM7DFeQ7p42tHnfbJMJq6rzscr",
  "key11": "qnDyEBJHrsQUgb3q1AcM27p5C5NEDNUX2QS8GMB7UfBELcG7ds9ffj8YazHiDpUmY5kUbzuAzSteL7jA1XLe9tS",
  "key12": "4b4eWZJWGHuLKz7Ch2uMd3pjXw4EfYV2sFrPGQJxMtWDYpU4P2iZCaGQ1AmGJ1pGjJE42axpvv2mMyvMT2mMg1ST",
  "key13": "2DFAg3HMvCGWTEYEBBXhfj9hDDUgYm1K8eXcK5v9STBmvuKXkCBv3m2vKaDtj1cg7TiLVQFxQXDUmHpCEzCDZT3Z",
  "key14": "43PBjmTWNhv4Hua6GVsiuooKHjwMd5oxTD1kd1JkVc17hFAfdWnNyqNjN9MYb98cW1n6FoHwR4XAoKtpHweyeJdB",
  "key15": "21FW4RMdB38wr7TzZZ22yJGoZXrytd7DG5x3tjAPTqw7kdBtpcNEQwNczUA9vV7CuDYuoMVZyAbhv8ZqGkrGrKjz",
  "key16": "3CjJeAqPavnuBtgvyVTcPqsuDQeCc6h5QkA2iHwstU8MaaD7Mkf2Egb3xnqvinURTRNnukMFMAUJmajZS4XfgEgC",
  "key17": "5Cgs9ouu8LRR7KbkEsjNKDqsXicWMmhr25BCUTwXgL4fHHu6Cyb8AcPojQNqRLUk9c6q7WNrp6q1NhE9JmjphRw8",
  "key18": "29njWJavzCYbPhoGV1Mxft5wuznHBPgUhiuvrwSQqKy6hFCHbz89A1wxHX2Xmq278uQPysent1cX3DUjPFv2dwNA",
  "key19": "3YmiLvqN6Dyw1rLtFPbjBuLquAoXdrviue7eTa81fAycwjN5NLEavptb6RcaLHKacxqFZP2CtPaLatJaSiW8Tve8",
  "key20": "2hKZkdQVdMsfvtDcBHRYVp19HT1uVdKsC4GtAMnoUwJyzZrqgZYvDYmSdq9ipYpXaGExYrL1MSXw9Ly3zPPDXC2Y",
  "key21": "BnDctGYdzDY3sQoQrCSWEJH8c2dJvH4tnX31VUBU94ULWq54d4K55FkdrYiEaAveukggBeKxG83o11sHNGBQEJJ",
  "key22": "5KDXPVdFE4VDaqpJodtTPLY3vCjadvtGirwNAxqVbqsqPRfCSH2qgDGJmnsarDk3JitJUH5AMBnHVjrU89xUPfJW",
  "key23": "5c9RXDZb6ahv4vDDmPBCFfNBCK2Sx1FxnAmqaQ6SJRXH2ojZkmBGoZAmu8bnDCjPkuEHHzrsM2FiAjrFfVFGLPC4",
  "key24": "2fHVVBs7QJzuX7c4Cnh6wfEhgkUeA4BU27nQgjFUD9AFnjdTktdK4uQfsxHBRXFQFJUx1GDd7dNpyKbyxBhp6S95",
  "key25": "48CQix8c3CYpVQFNXjQQhQXc9xwNV7t8tyMYmz89NGZFXnH5w3SkTS3PBvRzwyWiBEkfxZET59diFMeNa7W2tGoc",
  "key26": "2xw7uhS9aHLncv5kDhWNYYFRNvi5adFcVjSFDtAogDwpmHYsFReeF9dPoi33wef6McF9Wmaqktdu9SfnBZm4Xduw",
  "key27": "5nFZe319MNGkZ7jRH7PpvxCMLxBo4WVm39JL2jTmBehYYN98gmxQeacjscuinwnNWS2HKRwo8LU78Ftrb9p5t7U8",
  "key28": "4EiN5Z7zFkdWgHimXFJeD9qNQodzYWVKvKn51D96Wb689NzDydpZ6rHAFyPNSNyg2z2sKxHNgbnHRyiurYFfWjt8",
  "key29": "2Q69oYRJaRsFRsbdwWgSbvzMFXMzby44hV8RPfbFyT45EdsspR3Qi8TLW8qYuRa5A1JgnkRkKCJY1FMgJbMyfq9A",
  "key30": "5EgqHhgErudqz7GqJdcz48ZBpcpUPd72k9msyLtxwcjGJamG7uNmcfh8DE7XbhYjWsK8K5teAhWmSR8CNKupXwh9",
  "key31": "5CZGKyrsWjjPpKAjXiZjDGito8Q1AX76QAvPHKBhWoQc5U2GzwrNHFznZxT3DeLytdnwHDoxu2KuKsfFSkZURXD8",
  "key32": "3Fh9tZgUpxqsng5WbwUAhpC6XwcQHUEkJPe7VsvpoDc17AwgzvYiDjBaWEHRdemtW3aoy1g2z7g9uj1ddUzjJQVo",
  "key33": "RxnqQ5JfwAJ5o2Th1i7bB2ERya6f3WJQKA3c2EP1adQ2pBCpxPN19SE2BAptY9GFrSWr5eBDNWaj7p5KkzUTmDi",
  "key34": "5ttwvPRPKpSqQ1YWA5z5qq37ZXjHg9abe782YV6dnLvKv7WTZF8gxiCnPg3vuAdUSXTZs7gRF9n1hY5giBtfmdKY",
  "key35": "4JaVc7eWh669KiV9rZmR5Tu5m7WufAfnH7JvuS5uJZ43pwkjPEpbLvDdtH8rajc5TiiJQMqQJMb7J7FUiNSBJGcg",
  "key36": "2wbKEt7T1wX3m7JkCMgaSQ1inHJxxkHeddZ9XtTxdcuN9TTnE5J66dcj3rWNn2KXWWjqDr1GoahGuAiLS2UfehTG",
  "key37": "23xhV9ANdV9Qvrvbnu5Tw1pigwiCRgtovjV66ojrjMkw51JMRvj7DtZkm7dw82p1ibrG5kWTNXdY9FxsbZixYP7w"
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
