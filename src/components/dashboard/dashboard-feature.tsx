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
    "3VZrmKnyiXJZGMctgpKpN5j6ffGkk58LkYH1J74Xi9XqisquVrmGcHiTjn5FvBsNtsJe7rmJSfnjjWoWqDLeZAm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYMCHKwJZebyogMgXcZb5mrUANsgCfjwBgKMUbhjx6VMKoPnE4zeZFPf3MF7c91yesimmPD9E7fRsi2xym9oY25",
  "key1": "4vWn3ppRizqgNdrQXq63t4RFvuywfSWa8Y46RF9hjX1b4Tigs8Lszy6sYFauQexdeBtSzUcAb93dNS5UfrnBxCvY",
  "key2": "3t6zuxwga4VBBSvp2sRMya4fuNvE96L9qXmv84EReUFJF4xoYPJHExtUxu8uLVUEMDkzSVseTtscCu35bN8LfTJT",
  "key3": "62d7KMjhm4kH3QaWPZN12an5GBWXeMH26QDdRCqZbBctgUuy8CB2UFwYkSTnkKPEH5qxD3hvGvBujciDsHWmP8nS",
  "key4": "3rzG5FEEQuBLJ7oodcZPvhnqhgV7zTQMHZkpNXV2G7oJfmYyfvkPFREdLPyhsXDQS7tNCvABWAi5vHvXwpMc3dt9",
  "key5": "2Xz78ZV2azghDyiFYL7zDkGuz8NoZjfGWMprAcEQD5Ai5aPZ9Z9icXTAnopdepc2wcdvNHhT77W39WUZENgMFXG8",
  "key6": "36Ry4R3z2VVH6MwrVZZGbDqRVGTrw8XyhYQYnTM8xywHBFTix6WrksKqmqfEsM6dikRxbtEuQVjpuL5RV2MAN4WV",
  "key7": "D8tgfffeq8YQjxpYHg1XgRbYEeisynSSJ5VDLKH9Yfym5kRAer7SU6wRU5z1ngQvo411hcWBkdxrm1ViHXk6wV3",
  "key8": "C5mz3hxVKoknwwQ2sRDf2CiEabkYkAhSv22M5hCPeCMptAPEr7A27pRGMeFe7RcRVaEpF8SruhtWooeR2woWqBx",
  "key9": "yArFhv3omvwpgUcahN4P1my6nkrR8saZtC3fzHPmzJgJjTEthF11Wp1Yq9JZ2JsQfhMyUcw8y31gBGK2cTWL9dw",
  "key10": "2piVaSDYETUhGPRjQ62NX8fcEdFnhqjFyTgwpUwwjWpyBukDVAWhdmVLqVETFFq5HVxuxPUzeEhGWnudCfNpZnCF",
  "key11": "5iu3RexHifWnYDdVGyPBbxqFdavfZQtShr8TASwrZdKQHL2faiyRZ8VnCrBoYrPst3LNvqLcjAwBn8wxD7QrDMmS",
  "key12": "2hrbe4yu54dXiEEJa5xVbL9DLwKUL5mxPJCX5uJLNYNT4YoxqGEdkBfTbjo3sBZyRKuPuxj6tHuBS9NCMq3S3adz",
  "key13": "5NHn7PrV4AiM52qd8gTrCUiBmR52kuS3UuFaTUh7u9ox7qGnjiKeJ737jb3h3j811QQswi3GWnEKiZzQEeDLjACB",
  "key14": "3nDcZG2Q51Voo9HC3Cdxmk6h488qKNV2exPJD3jNTM9kJNni2ieNkJrKWYUoM1JTmjVDMQ1cXc59yxDyTq6GrUv7",
  "key15": "4V4GEX9pUXMa6eUzF3XrveT3WmBcNdZSDdkuXJwUDNRXZjzqWmu7L1yBTBk1gNyKpkYRSc3LJqbYxffWj8inuBoJ",
  "key16": "3abJbnLnfGFTKg4DVwq3Mgh1wHZpcqeHDXXbawt9V2LAhaYgDsqwSu381wAKAX1LQPTHWFzGkbCvWA8pzjtzr2i8",
  "key17": "3LZUZKGSQvqZJhPMysYXoeFpv1hGYryEMdHxn3uFq3eesUUBCVzfABP1fp7taUsB36RukDwX9rGoTcSNsDemspuf",
  "key18": "67E9z9kFFBgcb268TpBiYM7rB6i2yEAt5TJeB31ELJRhXWS7y8j5Tc3gZR4CnGJfrvHio4uZ9e319Hoqm6uLE9y",
  "key19": "2R2YnMLFFKRnou9W7MTSTN68d4Hu4EJFwbwU7ddGaRpN9HDp7hmUd33KminXsh8kaY6nGX6gLqcvujRG1xUujH6a",
  "key20": "25jXpbo4m7CZ48oV8EJhKNvC6yNhzSxfUDwsHSfBpSC2tCxV74Za3zA1gX6umaiRQ5s9NpqfBfXbnKycCFN6gJe6",
  "key21": "oppFeZprBgDbfJAZSFRa7XMwYR22hyReyA5jrDvnFo8gJJENaYRVcTMLcSgkaAGPKQEpAB891HpAi8no3sK27VS",
  "key22": "4gJBojF8LSVSmTQmpJx39JeHNSmFSrJFK3nygRP3kgNfskBQJqvbJkSVwrZCgRvPoUcLuJ42NS8U5Z1CiPhUyE8",
  "key23": "58vyuQGpArrvbSd7CDLBSAQCKwxQzLRWz7wTKB5Wu3AfNiiTJej2hL1ZLdJuPfmQQogeM57KoRfFJUUAh3WQCFTs",
  "key24": "5qDLhBghEk8qBsdtQBTDkgQH3Xh1xT5e957g9Pq6LUcEmzTtKYQjkGscdT8vZeeAUEACKxDaPgLMXxWnL1VR4xWo",
  "key25": "W7bT5xQP6SaQsLDYiTdW468G6HNZxRW65GRcKC6AEjfCX5r6oKbM36nvvjSB5FYnc5cD4csNwDNVFc9M6p2obSA",
  "key26": "2yFGi2DUkaYe666KqnPhGzGX1ZrnoyjZGKsG9KmKQNShQaSNDRjq5Tefx9t1XGpoxPbuy2zkzG96hoLWZzt16tBj",
  "key27": "55xQQ5CACSJUxiRoeuLdTGk4Q4TjjLSEi53DSidoYJ8NMUUYwqJ3heKrPLRBEXv9TSbrX6kZcrGYXEZXUTeay9nx",
  "key28": "2hGE7x1cfNLbL8aErrAKR2y8VuV2DG6Q8xsaooAdy6vuZZp3a5UZDo3j25ak9FzENpmzDU4mxQ3Qux6BjMeXv7kj",
  "key29": "3RffXjcFDzkr3VDeWjofJP34bSCEtynVJJKYtWrSsBigxxKgoZkUmsZpe4RNntrKRjNgEYcQP4yjM4ukzz7xeihp",
  "key30": "241bCScTY25gWH6R7nmW5vWH9cpXNNzHn2Pt8nyHDUbFp5w17jy4CXKYam9U6LJGTmAbDxq1UVExQaPUKB3VGvNB",
  "key31": "5gY16FGGsa7gomRH2J3p9c1XeiM9q4BK5zmbzWRL6EiG1Q5wStvdcJTkbQWAZ7VJEqLQqAV5oi4JUG5PzikKZdYW",
  "key32": "3RkTBybmHdCeM1AbnRoRnN6sjdBoMSLZvrH7DfbqFsdNF4mSMyMP4MzfE3MWn1KL8DM7ZsmotWnJV47HzV1DpU6X",
  "key33": "khGLZSfc3MPEquUpw1kptbowkR4WmioqeZtPbyozKrKScoxuokQ5V1LsjKkqAoP2Q97nJUTGfjs5WKNYbvR6bjU",
  "key34": "3QSrAQtdHyKZAY6Z98pFewMu2EMw1LorBM1kEwCMmo96wuZVboqJmaUHw8YbPWpAAPbEtyoVy9FBiDvWq3TyuJ4G",
  "key35": "3WivAdgr72Lr355CkfXWv6E5QGLbpAXmk87WRw6VAQVN7TdHmNC36Dr5H4dyX9h2iEJaEHbWzMYfRzNwMQMB7q1",
  "key36": "4AJCFogBUM9JCfSsQer2qVNPoDdsorkYgsss8fwEM7JwyNuTwi18bqd827NhgbGX4moaaPiUABM4BN1JYcVctTok",
  "key37": "5MVXDzW389S1AQHUkq6tE3uirrCW221cUbVdE1J1X9FKGYDMoVBPRWCwWWtNnX9DEcFx1j42RUXr6aHK2q44HKjc",
  "key38": "5B1mMccH7N6mrqErbPULQxfZspenfF3DXsdDUEJNADzcRAmqkCcYTSsXybzSnpxRcLGuykN5ArietAusPLV4LGSX",
  "key39": "NG6GEKtwmEbqSppWET6Lu8B22QdhBzAXasotWiq82m3j43XKkdL6PPSn7Guz3CWYvZgBr3umXWSsqHzHgzMEKY3"
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
