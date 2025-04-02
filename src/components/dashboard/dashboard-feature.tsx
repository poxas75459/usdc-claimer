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
    "4KSK61JtztahZ1Cm1PMLdGgrJ1bT2ajQaGV5dhtKHupA4u4j5dm9Ny7keLZC8VJk2rMHXsu2sDwUAiy3GtSkS6VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PUW5LCoqgLZik1UPbzc6pvAqjbeP68Nv8fkNY8dGbB3DcsrMSRCkWvGQPzdXRnpDPhHjR9iepMfCtWCHVrZ14b",
  "key1": "5TSTKpA428YLUhqhroSNULYCJr7TUqdvTxvsvV3caLVjDey4kQkvGpgx9ZMwopse6giVmpM32GzLyCQmy2iP4tyu",
  "key2": "3t3s3yWsp3We38g7pxZ4WKzYhikdrRHTRzEiN2P9dUvWZty5V46AyawEkdytTYC985Q7VAhkf29auZSttN3RaDHo",
  "key3": "3Mth79dePxyFgW4qmxhYT58qqiVMJdBHNRU9V8KXNzxBYPmhnjyA3T7S58GaNCKVDy1C2UyRiftCNeARQaBxKZTh",
  "key4": "3CRb2Kdeuc1oj9PFCuby1WqF9xb5VrXdBZUTPBnHVmLq4BGxEoJTHWR2C15UnK8ePtvks8R1zeQqpwjbbyNwYjeU",
  "key5": "6dGnGT1iMFZZP7AgdHgnfgsicvrLbTiWSn71LqAgwZSDRvkK8KKhme87Cx5Nv2PBGksZPrK8P4Kga2hkxv3a8MM",
  "key6": "5iCkemYebV1ky1PxLJdG2WTocQzPNVDmDvwkMVPxbqUGBa3Y1DdujgBvN9MDUmq9UcUDgKZNSB6dMrhKRjpB7Bb4",
  "key7": "2DXywjAzBzRFp9U2Dm8pa5zv7QzWZtH1cjVXk1a799q2R3kP5VnA8GK1isBXh2fWJ4HbgkTGKF2X92B3phJmoGJ1",
  "key8": "4NnckrzYcpWZrwYmY4KnHjsq2nSoL1w7BN3LGyWAsa4iUPEaDgnTJCZbArqhRZ8ZTCztr48ZEQR49hoYAmU6n1fU",
  "key9": "P7rMXfRZgANnMA1QvkTFpm2LRqX7y7W5rvek3F5ANbASQeqR9pn6eYTLw15eyURBouSuXz2rwyo3xXXB9buvwGK",
  "key10": "RzCCRhySk6wjRUV8DZ8dKKugYmuYVzpQbSnPj5mBsvsDptAtLvzPyCNZDqQGVnhjrt5KgYQvJAsLvQsWeGNrixn",
  "key11": "4M181t6R2nRR886VQ77r5qKgWMuk4sq25EGfcCQtYebiHxxRaBJ5UxSTR1YnkZbvSPv2Se4nEsoSy172x4QCCTkA",
  "key12": "5drDGMQqfM5vB129eR6SiKsqP8ghuDjWkjPHybY2uHGvSkhYkR4EQohSUgdZ9MQT6oBFx33Dujv57rRAbDMNutG",
  "key13": "3NfwwYxxZJu4bpNjiLr6nCKgQ47v9QwsobK2ApyF1Q5dr6h9EESzS3kb3peuyc62mW2bqhE2C5ZEFQVTcUWb7AQs",
  "key14": "4djSCYGtyWkqDHJxuezxyznAwtXSf9GLyQP3C93iHyYVpsSAqq1n9GUHW3r4P2RxVyuYFaKX8BZZHRswqD1qyDXZ",
  "key15": "3AcXWqECXPevBGnBR9SiRWe6VSAm6B3PSUb8V1nE6eRXc25pJcAKtvGqgx8aNsMXv4uWVLQMGhPzKV8MkqeSEFoQ",
  "key16": "3d3S5VvddPk75icumsQVgLi9p5PDLM6AGp998SWcmgDgd5H69fQn56wRECqnbs9zp8kTZgprE2nesR1rxy3r2Qod",
  "key17": "51Zj3PPnh65fVigo1CPy5t5BW9iPfn3NZBKi1t5usdo1du4f17srGW65Bz4kEUwGgrBcsLyeVBJ3KEds9pAw5nxS",
  "key18": "EEVstBESEgok3AD5CM7xMtcfTeBQEbqTLuddqw5iza6Y6dzXDjttUXv91zwB77W1pJqATBfhTUhr5pyA6D7ZxjR",
  "key19": "4Xsu6bYtw5UECXhnFdwaZVbPPP4oaBEkSuug53LyRauXaVmakm1Wvo39yPMUv5k9mANWkH5uuc6CtpEFsxQriYhX",
  "key20": "5oSrpCPjcF6VdFEnoSUC4qRrRVr1VCbN2vW6rw2utyG3eLLYNidqDtgjFo2N3jamyy2mRiuFr1nmJXmmXch2MQLc",
  "key21": "BuM3yM9cZLTHjDjbvD21GdJgCXC6oLnDH8tkQxbXRD13m1vg7Tjd4eLpV7G1GEj6bu48wXzzLun81RhJ9UjPeZz",
  "key22": "5oyRjedabm7DimULj6GDMcfQxcBkBQQNGYo3ZBhxeph9ep3WYjkWJ2vp4dXDSkqxcEcxX1HtKxRGHzM7pxWJb9Vy",
  "key23": "52ZPgUg6pnX2qYwjLgwJSHCnGuRdVvJ7AMV56neosRSYMQpRqbYtHFrkGCmsqzJhMS15636gBZH3WaNk3hk9JGiE",
  "key24": "2s8QQHF6vtgfkPG6gUirVjCeeKpZVypvQoDcVx19v9G76sYhTfeu1QvpqzUhWqpkSZrSB1pFmTFbExZWxaSyYfZU",
  "key25": "2B9QEZcVKwjfoS8xam8cTopgeDVwCYAMDNKhmV8QFpHmQoXkxEhyqcCZQgbsq5LTQpVuAdc2d3zvNEpdxkzYrFoi",
  "key26": "2d4sJe44Q4CjGZeSDqzWNnSFffKjCr1o17mxJco8qZWoVbiNEVAi3KeZB7c29raTA5xsgdCuTB9kxWbp5uuAypPV",
  "key27": "4Ha38tyWeqZMX3bibSCn6BiHeFQEAFDYDx9s7QqPuacYymZJpzvkFh5e6BEdb6seP3krpwSBJBrs2SmXwC8ZPpkj",
  "key28": "nHTVxbmH9x6pT68FAW5yBeWtWGnDDizJfNLNZit2B4nxYqG7iYCRt2oudk5QsbPHedN9NVbTxaaDivPGhNpRMkV",
  "key29": "DwGexd41rvMvjLAz9CEi9C4hatn4esBF9T4WxqhYJTPyiCHbByyabwGwHCd2m1LpS5MD5xjmiWLZ1w7XmNdaGbA",
  "key30": "3J7iFpq4Y8nwhDpfUBrPj5CQWgc4iSi9HavJ6VCK3HeoFAhwGRu4LU7XmzVCDY8RcbSEpufnbcty8XYZZtbVDZV4",
  "key31": "4jdGc7KFakJx3h4v5zvsmk4ZijVfotsaqyTMSnaXZEeyEENTMJgDR6ixY1S5Ww55AknJj1fPnHaCAeSYDXJy9CyV",
  "key32": "2jpgf3WC9Nx9tZRQwL6V4xdamV6hY3zMSDQqGdYzfVMEBt2S7aT5v2cVgvTdvojtbn1JveZEemxxkUue4U1XMdgE",
  "key33": "hZhCK57zXAKJYFBz54fCuwpGzouHnoq67JvrVmwVjd9VX8ny7wA7GDCqnV9MbUNPE4wUMTtfXJdKPg5dseahdK3",
  "key34": "5A2c1jV8ueFGrU5rc4LjdnzYsmcz7tM9nspa3gmuS9XzmupPeSb8PQtEmxmz7SH3gdk3Jh9q7DVuaEDkLsjk2QB4",
  "key35": "29QUgxvUVrwzqExrKd1zVWUny1jzf5hfBfZUBkBEtgB5WL5bmh1PfnLR6XaMQx58Yi1vHJsA4GUGTzxXehSD5mPc",
  "key36": "5mZDj21MYaUXkyQDsAQiuTBoXySECyfh5wDoRe2osHCHmsUrDNVxNxjttBR8BFNiQ6s2LQzL55WeHGN6RqJDMfH8",
  "key37": "RoT9QnSfecycyPLy1iGEBjQKU1hTzVCpierdH3wC2bpP1ist2UpnkxyVA3YoUxpirhEs7vzR3vNoZWEzCZR7Myv",
  "key38": "4KUdFhujsBKzjjnW1EFHtPq56r61hYByCr1dXsL6PRoHwwCJfxTekWcQrzqkvZJwsrzu1PPab7umUzTXzhnmimNL",
  "key39": "5i7B495teP3rDLqJR3aiav6S6efvNDMyGP2UTCqqLeJCkd8af37pavwU6z7KED58pAJvGDTWEuqxXPUbVn9Bq7f8",
  "key40": "5yaWs8fGeLczatbceevLDy1tBCf2JnvvFXywAAEwuakGqWXEc8vpgbG1BJmBrgQVqKEzXT3aKueVFW2AtZrjitHC",
  "key41": "4i2d2k5DWDzNyzHAL8teNde8DQnyq7J1SNALGEqG6orcjEnPC7LSzzyhtGi5JZkST1iBP7c2pB57iuZT62iEMqkk",
  "key42": "2Nuod3PipgEHw4GLFbQ8SkaRPn3wEtQJuK7TEqg59w9SvttxkPVayBE5Y9eKVgpH3C6tSdXKLKi85TA2MQqnVoj4",
  "key43": "3cQzE2PbadMxDBr2dHUChgT2HKB56eg6vpC4Nj2Bupeq3dfUv4CDqjZbrvBUuHod6pt2mtD2GmRZs3rSNKSGwSLb"
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
