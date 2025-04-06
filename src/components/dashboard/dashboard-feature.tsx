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
    "5DCFo8QYwJNfXYP3iYSknyAwGwsRRkZ5V2sEEozE1PwPaPfx17gRDfzpusEKwdDQL7dBRZDF3RH7USbvqKRSiyng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkdxUifJM7noawcBcFruDTvsv5Lx6JCEy2i7YbcmvedFcE9Ss9K2X9nSiGAUxyafuLWpxagZtDv2YLaLjoqsXWS",
  "key1": "5wf2cveqSVaqQf4aoF6SVkqVxN2d21o26aKsrgf8UdRYjN3BVDf4rFUQJZhQYG76uvr3AKbjisd8ZDr64Y4XYzUA",
  "key2": "56Mqu3oegrAM4ShSN6MQbbgEun8iBPV69CSJy2BhPUtd6idirWXTfX22RzzsTG8HSNZaWxqtQMDmvrnTm4m78v6U",
  "key3": "4V3THa7LDuxne1PnT94thdGjTRrCh3jmFLPhQMPu2W4mKJo3fX4ug4SEbDyikU8p954JaVK5czG168BMNdQor8Gt",
  "key4": "37wPxvTuroK41NvGHyBcEKBMCV1kmPMtfx2qKwbdtdotsLjX2i4WVRZwcJoz2Ejo9MvC6iQhMEqtgjx9KKTWpEFC",
  "key5": "4RNv1w28AV1Hr6ZPQBHSwBSNdCWVCWAkwqzhtEzVX8Jr6Lhy3nP3oUgpiDU8E5h8L74FxXcNVD9GmDDVNHZKgLRS",
  "key6": "4u4GuFvcbZiPdukeAXzk4aKGUtPv69kA6HRvd7SqECuSXpBWQtGCgyRt2nB4AsboFqZgK6bveyzvWNvMCmKNjaBk",
  "key7": "3a9qdcQfWfZYLHoW8Kz59TqRDnJbgpQeKePn1dFMykrCAbPGrQ8Sbt1FKS3tH5shBUYPQt6r5BzyNmsBqzUU2d6v",
  "key8": "25SucCWBwFkHyv5ywe6HaD3QqPkzi5dKEs4eSmHkg8K9fQgXuvUF3hM96MhPy9JHwfdyTNnK6g954QY5pgStCveA",
  "key9": "3Hrv23uBYVaepVT2S1YatkAKdtP76p8JcxBWoZuxbarnqBvUMVKrGvKXEnemWhgnBLfHttCJUq9ZPED45g7io6PR",
  "key10": "UnyfkQ81D3DtycNdXjhqAq5TuaSW1cvHNCR7QHBEVX3tY3QzDbtxTmZSZp6YezpLkhA4Km6J4srnjtda6BiaVZC",
  "key11": "2mndp4hZ2Zq1JemErMudquAB3XWC7bkczffwEksidECXtPnMyrhb1PHeRso1YQ79HMkwm9NuFgZgee7j85xH4FKX",
  "key12": "145drqyCKNUKjoDW13Rqy2AErEagC1hwqujiV2wb9T78qsRG1kBqTXQuQJfJSE7njs2NeJP2v1E6C7yYvA48pLd",
  "key13": "63aT3FVWkZWxcKeVMqe6kS2diHx9itQHpb9J5dYWEn4nyUmSrsbbrGk5jNowPr7oCARFX7mPjXQedFgNoAE3HprN",
  "key14": "32PC6duv8Xe69JFMrJuMSwcn4toS8gkG7c2ScBMNqguMMccMnLLXe2sZCwDQtBFypDvkFbM5c89fqcwFfLZuyCm7",
  "key15": "3vJStsP532P1ihwUaHwNe9LuTQnVvxhTU99fBktvV45KTzodWaqAQS71H9n2EMB4ahR7Q9RP7o9zMWc1XCFZ4Rdn",
  "key16": "4xwkgjqJaLK1CtpKjVchG5pbK1ThZ3enWQwVMDYsMtXapKZdtsA7U3SABUpVKERzzwNLvWDbzMizGvHLiSQmCcfz",
  "key17": "8dwM9JdtnwhsFfmaPVrFJhNJ4LvL2beW6yr2tBCabyiKADsWVzL7oGGNRYcW3BQ5MFHsn5oQLGunziup9H8ksCN",
  "key18": "629NfzLoatTVwf7tvhHYFEwjCscS2qiB97exWFE3yURWq8TCB8eFc1R6JGKJBp7HiJD33x9LMX8BsEyoPv3RNGfc",
  "key19": "37sHcwbDv5stexUWuoyr6KR1wDaAwzmBH3C66GYQ9UTh6DJkEnLKnTzbSrXEofevH8eDZfdRC5PPPvbckD9cNTCq",
  "key20": "5rKMWHMg9V6U7XhKSKXE53WQxpKcWNyugJHitxVUuMvXjdwv39Qfmv3GZVg3bWZ9maKiR5h1igEDnYFMgmAdbjCt",
  "key21": "FsqTYfE7Fp4GuSBVYq8vt6GdzcweAV6gkeReotCYzRUv5f6f6rUqdyeeVaRsqCo8HBZcQceTTzmqiNv29ZHfmF6",
  "key22": "55xxzehkaa6oQfZ2vvnWUoTn3fmrhvQE7y3iHxdWFBJFfbfqP8FE7D4XyNNnU95KwP1Lm4AZHbS234FNFGJLiRL8",
  "key23": "R5daM2Z7A1z13FXiQgqomKHrmGKrnbFPih9dMUzefAfZowjtubbKQ7qVHvvbCn36FZZPyFMphpm3vvKbdaRDW1q",
  "key24": "2B7fMQnyhcKC9EC2zCx7uMKdJJ9P2o4vMM3DPgLxP1xCndqxS28MQnkf8Bhp5ZTGWVbkaXUty6XwtgrguL2Sm5Kf",
  "key25": "2kgp4Ygf95QQjiFQbbhhnwewWQGJmkcsKHcXo7ptU3L7QsEzAzdLyBoApaKDvpumL66cWASSTj7QX4vhZg1pVvFp",
  "key26": "3aStik5DnTP8pCkBixLy6GBK1xwmAaE5y72gWRiwzS1ZMbSHfXnK2SDSad4zLDi6iyfx2xNay1CPnxgA8y8PC4gF",
  "key27": "5pBy3PNezug2VPpJBp6ez1YLEomxmZFq1fdVNHERk5Gv2ZH9fyaW6yu84otHifwei5AgGX9kL4Xzh9DN5roJmUDU",
  "key28": "3w5dWRobvFzuv1vnETBmK31GJf7GtboKEzAG18wTs6NLfPJXkbiNnDWc1sfMmc7ksScYikraGTCRrq36rYvUMnyx",
  "key29": "435xytwZSiYP4NYQWNA7ADHDJfp9xgFf34VpzXn3zFmYbY9G6JKg2dJ8Lsp7fTbWMbkmmXFgKnrWyWFALTXbfys4",
  "key30": "4sqjEkVhkPCGtfnngf44LNrwCsYmYKcZfzdUu8eNTdmMxveiuBHgWdLnYehxBaBn8nxEVCNDpro3dC8PMd99xdVf",
  "key31": "4rxBnPepyBiABL5ucTCje99vjVoGQDrkLvkb8HfdjVf1rDzzW3nHvNK6pFv7XxW8CEVogdTSDwMthnMatio1QtuD",
  "key32": "FxpkHvaPpCiYAyfoeGe4fcjGoDrvTfvzZKXBmWA3XgLp9FQgHqVAx4y8Vss9dXDx2viZm5GTqePJnyne1bRQ1bj",
  "key33": "GPZche13QdzAnk52onUF93TXYDXGqoacaNzqKMLp5VLFZ2rQkCmsdQtfkybZqwXGqLT7z2E9bCt5QSssFjBzWsp"
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
