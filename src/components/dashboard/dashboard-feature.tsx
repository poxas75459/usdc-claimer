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
    "5uuvaZpNk3yWzs3EWitTN3ALG9nGjzXCzZe8EpvBtnGUt8tQMoDdpkj6pEc9q7qZVGySyK6EWFRXUPz1guv11iUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5eDnJsPTKaQVUWAU5tgZbqkhPuBswGvRmLmxSN6wVnFfraWWedXLNpz9gzQN5w4PY67W1Ehbxcu2y26f96o9qy",
  "key1": "2iLNS8E9wAVh2HWskKMhfRgqdmSrHXz1T4nsr92yVi9FciLqtN9QPATfpmckXTdzZK26jf7Xoo1yrczVvvKi8hNb",
  "key2": "4QH56b9JFVzBRLwBf18XqNUEpYsNwgWNNutqPCt7JxA9Y84h6pKSCnthiyYFtRHdqJX1deD3xwwEMUFbzsYEZCWN",
  "key3": "3TgbBbcLaq7FwcFVhZehdyWgHjW9sB7CeQSSekXfaxbf3M34XBtb7boG4hjYbAFPYYj3n6GkoBikExo32nmHRG2k",
  "key4": "46BHcvY4gNm59bXrtiwHJyUqznCF7Gvau1Aq8LTCJzMTUsYqTvEftsk4qAYN4ANQqFjKASUpqP4cx2SnJiNHKCqB",
  "key5": "4QM7k6JKTuEqpD6qniqBhDrqEi346Uc2bFQ3BC71DxVNfNAyZC5QWYcgQv1z5HeK5Zi8YMQdtX9gZpvG6WxWoRUi",
  "key6": "2Vne9tXwXLmJFuy2YJaqNWX9zjUyWEURyJq97akKSZxK5M8kXrutQys2jdWdj4wnEkuqXMLqxdJfda8jBpaMtYhr",
  "key7": "5o5T96DRAQGeSojnZ1MHu9XCcRFNWc87J8qSw6A68xvkKDEapdL3BXSagRRrGqWUTpEdSdvgn5buf4CPHC3qih2f",
  "key8": "3pNCLeTAfQi6Af5XzSPMeDnfMf6esWJzNUfmLthLigKZwaAftbGcNavBKVXEvqyYdUAaeiGNyvRSFKsfhWTDZ6wJ",
  "key9": "X1MBY4vm53iMwKbWbLj75mFAnCMLK6kFw7ZYcmY8AhXWJHQis2ABoYpAgUCRJN88U1MtzU6miqtrdUZmDVaVuge",
  "key10": "4EE6iixzLDkcjxG1apCS8Xn5WQCDy8HcnhRpmpgkardep9XPRxbpyd1dw5Rw17Vvk4J1DLKJGzXx3Lcdw2mZnBxr",
  "key11": "2uchYLXPttTLKwdnVJP8uA39tXRRGMRWRPWnEMi8tb7W4kNwD7oRoGJj51ttSFtuLmR2HWtQrXehAzWNANurZG2G",
  "key12": "5UnhYvp9NbvtMtG2uVp63pGbnAFbts5dg3dBkGKNbgzSUStGaDiMskNeoQDmTtEs7QWF4P1zj9RveEBKWJxKyU1o",
  "key13": "UJyr8AbnHkah1HTUWHdse87sXDQRrXm2J4DEqnYVXQgb3R4JKrrFdo9CNWnvBE6TkQvw9bKqjhbnnyZwfBy4pi5",
  "key14": "4rGmt6wd9ZGhZvawNcSfKWKcMxNWEpsjKbV3ijBkj8LD1pNmdu64nHh3xKPqznJ24ytBQjGGdQqBjUHhnFd4HKuQ",
  "key15": "3wiJp1gQiYBpyZHrJsv42SQuz6rRxdzRmtVUTAm5fHP9X3XCrBoGyBEdt5uA2ZTVYSfc3T7fc9D34hMbb8J9r5Lf",
  "key16": "4HWNHqztR7B8ZbFkMS3Hrnb1yw3j6rtQ9QcwYuD1skryZemXEwjvYHTpbZrUdTVRLXjDmb5nJZT6k78c6U7fyMeR",
  "key17": "4U5UKGTuh265VF1SZcynVZ6tJEUxkeGiBKR2aHwYML1Kfc61xpgJLXrExsVHWDxs6Ao6sCX6sXxDmtEm5wUH2v9L",
  "key18": "6uHRBbr96ZjDyGSxb3wF8wNu1BnKxS3yjALrWM55jNcBLiVxvvhjvuvGz77oP4TBsZAC27RhPxxcKFbE5uTwnjG",
  "key19": "4qc5tYAPaTN5PLDzUiiZqXZQAP1Utmib3kkngtag3Nmp9DqcvKtravG9urrPe2QGHXu7ZiuQ5cPwdkkUdffwLgFF",
  "key20": "BfkJL61oL5guUygJk7Z25JTvVsavVMgm8iTUWXjHnXEqqb6BywDfwTekWeAMzFDotpcEogd9Y6SRJHgLyJqUhJF",
  "key21": "3SDX5oW6qXmCw39n5kFKncsHMUdnfvB6pmGKQ32B2Ed2zMcFnVatmMy289RYiKECn3wZc53N4hvgN83aNzHAa8w3",
  "key22": "5KvppBvvyNDxcVQ5spn2SaYYxW78vNVG7CWfMjCRTzmVtqmWXC93XaacrRTKZHvxbWxhvuijihdTtcoP13MjT6a",
  "key23": "5aYEt7vcK7HCeutb6BE2JQaG3zeEMRt1S1hcasboLstVNSCaGaiuRTKxD3bRiAQfKhCsBu3JkCihsndoNrAHKJru",
  "key24": "Y3BFMzLDMS6rjuvyfSv978ufzM32KiTx1GvezhLqZgFYZU2KD1KChu7mdyfZ9wtsbWDXSwEfDzWNmTNJe2R6v8p",
  "key25": "3PuDuGXipFnovgrCyUfgL2WpNcY3MFn9rE2BviWbZHjsv1We9puwmLiUUgfqUF8uAacBFVSX9rWT8LEwPuHWjX2J",
  "key26": "4f3EVHQkhydUNJvgVF9JDumGkeCEhKCrDTW2WVVjwtLtDJogizeaoxEhvuz3aKckWN1Y9eQVPiwyBUpxVj855vsX",
  "key27": "578U76BoreavUNMrjBCEB9mRzm8iyyW4E4eCzpVerLfdjCRb12KN2JCVWaRwKrinqAVuWncF8ttUXs3E7zRLpdGb",
  "key28": "48yi7TQdfeQjPwHdcFQBUNyWHJZVTQGrCrWiCVVq3pLrbug4q4PjXjVoimMFZBgY1QnfTuf6EuCzCmSSuaQRkAFq",
  "key29": "3wU8eMiHBZHNaGhKHJbyfPGM6XsT8qZ9vPpGHor4WwimZ3TTkUPekn6fak8G2bgrGbePFwKiNUPQap55Zgz5tmKn",
  "key30": "2xdB7UuThxGTcsk5FhTsDb38h99YFx3KFfN3SCHUmS48U7xCcvsi8SdL9HbnSCEkQihgwniH6VadaNikJwrwCSS7",
  "key31": "bkNfS6yWCxScSxaWrHhdwomkKf3vRp8FvEKYW1TqHqAQbM9Z9ZWQjmWuEM1NF5B5A5JM4KSvJKGyXaDni3RzhEk",
  "key32": "2H6SvQzyh4gzBrLwVdWwK1vuki21s4Fzobs4CDSQMrxeznKxQVR3fN6dpoQUGy1g8HkQx8kkgNz2p3t162tSDyyv",
  "key33": "5awNrjmagmGRM9xxJfofrfVf4ZJpfMjPSLHsmwm5LTjTmMu5FAzUW29BxE1YsQ2roqNhJG1QGYetmSTKKsMGWVCj",
  "key34": "2ioV7m9hnU4c1dt4R1q4t46TewL63GWr1oPrqDpcLFY6fHoqrWDoHHjZmdB9J4wEr92TdGEKFhGTzn47SzMb2PF8",
  "key35": "46nhqdcVQbuwnWR25cX19jETrchYDreVj36MyDK48u5hktGWQtM8YPU2j395FrazErHAThPmzGL6QaLYR3WQLGzX"
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
