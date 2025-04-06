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
    "2xSxWeotyP1iSVxNegMmCkDvA3LmWmkkiqBWsbTQANLi61MV8mxp85Uk14HPxmyZMoWitzRdWCF4T4QiYMLWfyfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKKLkn9nXxznCHTW1G7gE8ZtKX4mrpsAnhEZUBbSGGcxMwD4XfQ863gdTXFbT4FEjZM51VKpkRnApGxGGTSfDSo",
  "key1": "w3s7M9WTHu2xDVVNgqYLVKyejdyZEevLodL7pjbRmNGfBb8aJVxi5RmCZe6S1o8ZHLiFmA6QBNVxn3f1Lc9QA4o",
  "key2": "2Kq3GNxg822kVNGXRSUD5PKEipU6W3aQoNJyJjKTeAqc4XNrsHMphsexnsVDNmkMnmLKmvoWGraYvrAHKHKnThdK",
  "key3": "2KZkPS7sBY2QkNNbLayQvoMahK8soNU4UvvgdeK9UNiA94A7EYubiRn93pUmLfVHPyfpm21K3mz4neE2bHyTe4ms",
  "key4": "5JfrTocGDe1CDGYcWy8gRWggbc7124HhjQrRVyxuyvmJnaNahzq7DprhMsKScpkSqRke7ipXEFR1YBdTg9B6m8Ji",
  "key5": "4zUDk6nfNrPnJrfP6p9aQYxuZGXf8cU4U1xb2ra24BmPeie7N2Az2pJPjTNamjUUetYaC3vQB9Tzu3iLH6sFhkaH",
  "key6": "MbvmbwDbhLBmbyrnyXReK4VbAAmehb8xT2JHJbf64EVHLA2Mv2vEDbeddarQT4Kj8tkb14r981cYjwinzzVAmYB",
  "key7": "51LrqnoYHFnmf3jdnnkD1k4mTrHTuf2u7P858KiRf6Vx7e3RxxfMHDSdwZ9dLv9RJgqNPVGQCX9LuWPDsWoJcvbk",
  "key8": "66rrwMkCFyZiU1NtfUKqL55izwHWqiTMa1JTfGz8GdYGNASoEAFJ14FjQHQDa4hDCNYdFJWT2AVsJKohigjQ359h",
  "key9": "4f3VgtdRZE3hSxHHDBtbeiyYcHQ1HL9MnxQXnXgSSJ9TeVnD3mdXe981D5d58cjhUjhcGvSNwcj5BjLfUzaiFbXE",
  "key10": "3G3cQo1isEdDBPuupx5wehhB4JptpFiP6oQcGPtftQoQs2MC2wEhdUQ4LbQa6sxXt8vmuqrhLJaCbrtzhUBqyyNr",
  "key11": "5WDuReLjMsDuogfV5SDtEhDmJDqr7LLZwziRQ9pogrscvBvEpfxYyLBa2F1rgQWq9iRJSKcZNWCMbpCdzx7rQpuz",
  "key12": "4z3r7zuYNKX9h5BaHpMUf21pT7WDsKwQQEUhepwdzwD6HSHFFNkvWAjAWLHtgnpmnu5QUnPScxZXWPfsyZtpQuWT",
  "key13": "2XkCamK5yriCjHQ2jpC8TZfFhc8FQtZCgm1amiy4TbYzNy82n2yNpPhyMkLU3h4WujQgCux2iQiLAueCXwz1Zzdh",
  "key14": "5gXUhpoMW5wxdKXmYzN3FADE6aRxgGaLxLQmc8XUjgp39XJpwm7WQVtb2hTymEQ5zXCfXzGQjGfGG1P4DtEDD2BT",
  "key15": "2HFvjJ1o4hsYLWziN3rXqYz7xTKxSfhKJMVARzwUKMFBgULfTnEVioM9157gAkAoAKTojbBGN4tfr5xibWQPN9Qs",
  "key16": "5v5Vkvga55oLDVuYVn5KbQXzrvrtxc4G7KH1Ze5snrGGCddCsJq3pNMaWn6qdAiVoEQGZyFKtpBD2oRHiwbkwedy",
  "key17": "4pBT69deaqKFUXQZLyJ4JS3zcvstrEKbrJkRHdtXE119XrsShUjPrbpu54se7vEK5Yt2ok4NkzWNu9mmPjVo5jym",
  "key18": "4txWwAb272vzjxbFPXLoLyBAquUXx52nXUArW3TmHEa5homNsrAHkvCVsEhuCgfrSp5gYhDYDapCVJ4zEuqPvqau",
  "key19": "4W7YihfXpFVDSdJaGw7431t6FmWTBQrJp8faA3MQ96wu8SaVX5w3JxLrkKUahwVJ2RX74r7Ejk6bFiZq7FxFpi6",
  "key20": "2qMxVGQEXv1DjTmsHNKPQ3cY3rPaZ8ojcGuuQqPAXf49VdBANrnije4gZq9fdzPi59ZkE62JE2TZM12ZbaF3Xg9y",
  "key21": "4L5UUwJy7xQJnR3KHixyL5uLe7U9tK51BQ6tM5oASx6RyqspNPSyDZbBEcfm8HKXABf2BQ6PYnSfBXAWTxMhdwTr",
  "key22": "2KpTUdx92vULj4Hvve5gtG2QMeLat1YArwi4a2weSnNV9G9mruypwhVkwKReL57kyHFQ6dPA6KXw3Fz5vAfYQ59s",
  "key23": "T8iNvSvdquoZtVEEFVN7gGXqhTawgcx2YKGYBGcLguyjrbQBmGbHbKo9rUTUeaxrfbtkb9FRot35vqPHC1uKbo1",
  "key24": "rkD6Bk6nVGZRZvdWnNKtvGEEX6MVTh18ygLGT1yU5dWmaGEVLdiEK5WaoAv4UaiYqCrA89ZziotpxXPw5mLZkiK",
  "key25": "5oSB1GKSQEVyLYrgMR577J7QiRWC1ef1ARDwZGQzxeDvLkuRjCenpd73VmbH2bWRG4RTxZEWA1curoGyA77SiTt9",
  "key26": "3buNM5531RBVFQQKsi24Y3GJhxAMFnHzJYRzHhFGASHLbUgDNLnvvYTyfJWD5rdG8QPoWPYgtQJpJVgHytJ4SZi9",
  "key27": "5gNLgS35mkB66Q3S1sbXSz4rrAT5uTnEH8JSrsRjQuPPn1ad89vyxKTELw1nNBud2zXacxgBkvaGEbPxM8SXGhMV",
  "key28": "5ne3BPq6KRi2s8LF2UyZoWWZMGH92Dt1jBWdcyx9cAnMfKEmS7Zj53syyRh19xGpuZiXdiGEkRs7JHjQYP1TFosf",
  "key29": "5YmncgPn6QhUkxtEYYLxH2uoNUccjsoJgmxSXVVZtwg3PkoRhhHdTgc3Bq7nmsFULCepNSBERhEqMkYSeVCRHYeZ",
  "key30": "4c4haeYtBWgxDKsqbUwowRykf3SWQ24DPzUSd7Enpq2a4dVr8ju5dpbtN1wM2t84a2sLX71TMPv52YAn4cKMPKxR",
  "key31": "5mxps6bHvrgSa8P4DtkPogqUU9hbMnhCfEhBfqs6XGkjD3mhUz8YpscU14PATPuzSnGScSPjYmtgQnrKksyux5f8",
  "key32": "4yTNDrARGJpuTe6fBbaQ9NvckCXArTJetLgx4zikj8LQ5oLsdZFSnHigrvCkfcT3TDg9zzL6Vh6ERRFCoKTDwVxq",
  "key33": "4KJCRFAUXgmbD9ojRcpqK1swvytyzUQ9NDL22SpMKDei8JAMqhLGbnCMB1cmVbo6XWc77JSmpMhXtjRRwHb6FkeT",
  "key34": "24pTuofFhihyuVFvRLH6bnPjhzWvXgJtaPdKpDq3Bu1r1Evv5fwdZLwa9qapcNwKD4ApyvRf2Gspo63aEjendafn",
  "key35": "D3f7NPkTsjX8jiDMpbG5HMpzvR8noNnWZeqAzrEMYFHrnvweDKsZb5fZuU5CKWFtJN6LiJr7WJuRYJBDvCDJr1y"
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
