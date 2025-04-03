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
    "4bBogS6m4Uwv2CvhHWKvGyjNuBTTMHjcZhLv3DBqHEC7oTEM5kkSxmNjS6UBHAD27NV9vL3YjdzvKKNHCn6vsjyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gm9FoTnirqS448cYRKxqyB72XmN16zzakCFrW9uDUcsUTRLG6PDKMd8cw23RKKEQsiFKBssedG5KTtUuYNry6nz",
  "key1": "2GvjPUiD3RQjDaojb5p6XfgnApDZ87WdSXdU39TdrJsptxUFmoobY5YRmioCN2Wmz8oa4dRHDfQ9ZoHD9GbwUcJL",
  "key2": "4qX4issbpyRnoDjuwMnAQDbAnSAt2FsGPHsHu8JaQrie853qyh8VXocQs55P3M6HD6A6ewRQwMpB9FjEdxMiAs7C",
  "key3": "4rednu8seCFGQ4FypFKS6yXCHXAD2N2LFKSdXBAxotG7aQWDZzuFSFxKc66UM1sBTdEVFLpeukJ6ofYTLoftgTaE",
  "key4": "o4CLW72dvQaqJnPqg5eDCb9XyWZmA1t2ZXXkParz5XhsGxEi9ZhtEVWvXHcwNWSqRWW2fp3MgYm7EwGX4dzB2XN",
  "key5": "Nhd1axNXfx8ogfLJ6pEFNeGFp4ed9DhZteBGNjYYQLtECDJL3hcxC7xM2ML2DyuWm5CJPoYz2jZMYAccozZjLiu",
  "key6": "4cgPt1A1LAqwy7LXQmF9sbLCGKnYbswc1VLb4i4BUzeETpKSdWPgydvLFvNcv4ZG5AFzj9csqiYBGn9NDU2dLBkr",
  "key7": "3iJZiFsLJoYjLrn8tuPw4aaYfzfJP2KNPEK6fzp5mJpRGbEGYfqxZyspWGRjNER7MM9GMx8WQTeWhVGW5DuuSv1V",
  "key8": "oETWWyq6YxXxQP23DdCViDxuaX1rBhdRajmENCM6SwUV5UoBZBMSPrQ4zyRHSN4Vo66qEtaom7oKUNX6sFwTqZr",
  "key9": "cEYxCAQDf4mCAVUGhQUqVMUPTRuN6QWzjqA83xBzvy717J9AB9E5o9pQg5hPDJDGDZWEBsvUpN7P5T5hSVnSZtJ",
  "key10": "4as2uuxg2sZ8LhzRYgWQtaE4YpeSgbMfKaCLNXbCwqsH7eCY58wMfNtBbjejjfdRUMgxDf3mdw73brnr2jBg2kZt",
  "key11": "5P6ZSD2F5RynCCXznmSZkRmgXg1N8tiFNbvGzHqv5q5LUDPs4uacpTSfEWbTEXv63YSSxGS34M96ohma7iEwkKPs",
  "key12": "5sJLM3D3GWaHFiEUu4grrsWo3fVpSikWU2d9ZyGjzPhhrHmJWJTPgXe79sePmyG2MDry52knAkEquLLent6jxdb2",
  "key13": "3XXneYTZ5cjwebcxaUF7h3F6izzPJkNfdnUJwY6Hytg65eMeW8NL5SG5oR9VzKaQD8QpVxwYM3FznyiwojKXUaZd",
  "key14": "4N6Ech3j317Cbhnk6vAY4YKRJ3Xmjzzn1bFsLEFU2GrX4RWuhqkkewsJn2HHfwaTZZtSqK8hA5HK9qWzxbMdb48x",
  "key15": "Aknk79YrenLn4sZR9kxTa5YcCNq8BQRAKQFsPJ7egfKce37xDVsTnQx7WXJ3C2LVeJhBAuTMckPa8MVqew7z4f9",
  "key16": "52vwQ5x91pwckNRwPiJgEVBJuHQdkvZGMPWYAg9VVAqp6uNWCBwEK5JEua18WXc3UaZkEvbZSd2LD1dn7ZMdGjR7",
  "key17": "31GXTsSMvKbZU1EGwVmXu6XTVAbVoMu4UJ1vEjeMqEy9STWSkmtZuHxJEQ3KYS6qKUcNkRYviP3cqyCefwVE4oud",
  "key18": "xnFjf7cD4EWJhGviATSVvMMmBjzWBHhNrNRYEjxzBgbaQYuhknTWktp1SNPaMjThDnU16L2cCQU3MTpNQrb32Zk",
  "key19": "548kxk7CiefZAqWeWyfz1SBGgfwAoXL5G5ed9pjDDyFjgesp52Rrz314zUwAjg7TZ9HHz1SFa6xRqMrXK96gor38",
  "key20": "5QMSVRU4Ehwfvr15UFmGJ1KwFNDztgfRZrGDGZEnZTUgi7rkyQoWoguu5rUGaKWzmmuS8BLDUJS6GY85o4D7M3mn",
  "key21": "2MTfQSPpzHKYni3EjS3YPAq3xS9mEzJy6oSv2MQAxKTeJBTnQZ6Etpmuv9fbKAR2m6yyDmEaxL1iV4skMZiyiBTp",
  "key22": "66JHDH6rxdcxyVzwzSaFgh1K9V7TEaNojdJhDTBNf8XJXvRtAmyxvuVBNqVfLFA6af6ZSEfShtU7PfKBGZV8GnCN",
  "key23": "5NFyQN7N2GHLP2YgoHzxmsvbFa1GMXWt2dAzifwKsYqrCw7yKh4YyBSvpDYTrxDGRZ8uDEcxMHKJ8yeHCPzyWLrv",
  "key24": "3fdn1tdFsRt44DJ1HTk3hdV45nb49AJzbmEgknvBLUqaXPauyehM9PejocUy9zvc1Mp4uM7BwsmFwWubmbXGeXJS",
  "key25": "59QwmF2FYzQCEnWoSjqazWzHagmUCAbMqrZT2Q7Wewew8hsQtRu5ZRgG8iL9fvV9fvbbzDoMXGDPL8Wyn4FLNn8Y",
  "key26": "5SpwC4nyT3q7NpeTGw562Hw8zdxf9vYwu7ViqUTsQqDVvCJufNSAyMKaxpZvJG8dDQsiyukdxq4G26hZnyk49WLZ",
  "key27": "4xwn9od5LpDp6fdjYJ7yMaZriLK9mHLXgSA5jSAbpqF2VTkEiq2Gd7kURXqKymbpQCwAX4mRbdjPUDY55EjApB1v",
  "key28": "4784Zm6Kr1AHNnt8EZXZpSYe842uYb2sXBV3fdD497aTS5DyTBupKRcgU58CcvpkNAZvYQkeGyRC2jVJxVLSwYBB",
  "key29": "K2uQhjcpF1HaTe6UpoAn17ctiaVHXckSkVqEZWYUGVQDWmKfUBeUVwBKJ6r7WJtAa9TD4MbmBFqzGZYb1s6zxbe",
  "key30": "2NrgcZ9S8NRxrVBPswkz336uuJhoYPMVXW66LynuxApyhPDQpXFALQup92epnR3Z6tXs38cVBHd9q1ArjzyC87b2",
  "key31": "5BJV5MpiVx9xErNzM5TuGgXXoBkGdAhPxiUf1b8nLzjgwzm2HJoBxSngK6EcHBeXqoxdzweenseVBxrWn7bh8XdT",
  "key32": "64vr2UspokpzQvEBp4UUkGd5etK27WFEexhgAiJomgoE3wTPZfcE1BKHqTiKnAToXrX5S8mDEmHFUYekGrqL9kwR",
  "key33": "aTRZ9qZyniB4GQg5W9DLP2df1A2yvLcq8nrS7xUfCbSgCVKU1A7RdAS6xsGXhc6BPW9eqw58P87zXRtcws4vXqc",
  "key34": "5ywbV56k8B8iQuicW4xJDxwVJe7CzXeP7b2GQLu2oa3oosCsLYBeUXDABDGiN7qChcbfmAhx2cJj1G4V6yFP2ufJ",
  "key35": "tsLANtQrFJmeQwGBpHSuDpYBexGd6zaDsFw59WwfrU7E47J44M6m3piuzdAmxhb1XtADMyVSDCQ1JtPLm1sYvUe",
  "key36": "kD1hN6pBKrCRUizqk8obiJ8NpdCnLmFDbjMoS6WRj4qF1mB8aUBYRdSWZzSm9VykVB2Hth58LzV1ZZVDzRW4pdK",
  "key37": "379HGvFNfbw2X69x8MQCQHQTm2yTgqvqpxHNfyXDgdYRK7yVjuBXK9vJfusMRD62FN1yiuZoZGLAFkbnhQC84qz4",
  "key38": "edMwgCfdd9WqHcswQFFqgRSx9ht74iQiF78wpdXhwDSET8NRdpzy8kxw3PcPvEcJ6HfhTzZbKXQgqBmYGoMjZTH",
  "key39": "2qmqyWmD8ordyXTowa8EQajGbsaWt123UykS75jrJNnXr22Y7szyZERnR2RyP5ickq39SWjaQFTebqpwQ5Kpg2J2",
  "key40": "5Xuo6jApLh1CPkok6hjDQCy7qg9yTgsMGZfq1U2N1fX45LZ4gkxzhFNSb1ZgZTc5ujUhHeLRTPV9MiwSS9EX89Yw",
  "key41": "5xif9TKF1UTJNi9RtCj5jbLD1LTbtkChbomQGmeqkYpViKuxhcuLD76vah3U2GPBWZ8ZfeMXqLtjDoY4GmhwzCW6",
  "key42": "5Y94k4txMCm5s6B3nCA6KovfAhmB6jij6VxYiQbxgfKa2qgVVnvjQsCtkkKJ9vTwovAnWdZiopYHeUj1dfzRt28z",
  "key43": "3HayPVkg678Um2EsTaBD5BQ4PD5SFe9HNBH4hxxt9TJiC1HD8oDM7tANh3NXajzds5h2uQ2x7xrv26JFuUnaDpGV",
  "key44": "5GM4EvS84s8DDADA4nAiYRJ6CwTM3aaSMoAonC7849EyqUdLMMHZdAJhk6pF7ZNXvWiZMz9Aws8QL2mtZXUfvexK",
  "key45": "2BZBLHnCBByTAyZ1vLj5SQmYJFk28hzFHYPFnagiazHhJE88yyLRcib9Z4WDKZTAVVNvang4UnFgmGpjSasQcFjq",
  "key46": "eCV1upudznwdmDhSxHK7ZsokV2PpaTKGwkQAnizYFPmfpwGZoZ8VN1KW3GTaXZ9KmUNKKciibLyrNQJ44ubVRp4",
  "key47": "65yCeCqZs8UHHJbV7gu1nXmrXXmNEaEsYBD2kXgBE1dpfYSqRG87KAw4cn3P5F4HAGwPZ4mTTjGpnA51qb2guYK5",
  "key48": "4i9kd61wpGHREumYNHPLSXxtkUdXWMtT5p6AV59SzTsfpffuNy1w15E91DGX2fy6mpvN19ZBCtdugraF2gMz3uMi",
  "key49": "2hnqJZZHFLrwfqV6bJAteH36NR6kdoDdzvNJZLXUUf1fEEqcDkA7gKNH9wa4L4wRPCvgKbyCxnSCrVFSXpu2d2JL"
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
