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
    "65RefBJvMAt7k4WofyazzoG6ZGaAVUxpRr6hnM8yyq6WcDBifSfRwm5uqRSE1rQH1c3Fz8fzxeWhFp7ccKub4DUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6NL4rfeBmYgKDAC9nKacTWj45aYr4wLqNPCRGAbAGfBCVKHUDWDTackTUEoKWSbgLk6gouW3own1WnMkoL9Wko",
  "key1": "5qfXB5QLXcvTepo91xjyVvepvXLfGqqjJRhhiJCQ3gEhABmpKEnfz559G6rb9HMwd75gJK2wv91JpBeRNxASHXS3",
  "key2": "3zA8a5pFLG4r3rBBf2KQnhuawYXCSVwfmxumhYcfgju2VjUU12QkpE2NkZPW6WeLazgwR5NuXdVgNzvrGyAX8EgY",
  "key3": "QAw9X6mR94zEYC7wFgstf3oZDatUDm2xKSb21tPGdqjk9r2dccykzBEoXaPM76cwa7nknSG3LvGMm4qVo6axSgb",
  "key4": "3dGyWAXd7iNc7GSTJGCctrBVohasMCcrxbR7v1RuMTLsUsqD2xZsgTiKUaB51mwn9qeDQ5WJnXdEHpimgfrauU8m",
  "key5": "2uA4nkt3gtfcttZEseX8BimBGmcQ3cVo1R6zA1xFBivMkc6zmG7oCUYupKffaw6eh4aM9aEEnx3Pe5ff6zks8efh",
  "key6": "2ietSfm2jxUSR4wqPHTZ5i6x3pwTmW3wu7xPFMuUmhxxQFJZ2h82n1f3ZRDbJ52cFwNDTWuGSD3t3hq3BQ26e3Z7",
  "key7": "SyLE3S6DYJvuFB9d3bxEVAikbsHrxtJJ1diwjfyCVswWBrLLw7fDiRTkH8C6WH3UJQU6qACXzEmCCV268db962j",
  "key8": "2BKUfHNh59pMZQZDd281ByRCvn7dXSEo7GXYLdrXaQ1TJ8nvVvHE7xrWSBwaijAbP1QY1H8KfsTDRQ1n9iGauZHW",
  "key9": "3sEzghKEtMKFef7LJJuMgAPvPyn9Uq2eYA3L9UxFpcYYhrUwFCQE8nvRWALZfMnkoxFifZpbXR7NMHmzQr2L7K86",
  "key10": "4ZhUP14MGpcoQW8yCGkLUVXBthxVZmdDcjHNEikfb935TJaWtJBsXHY8LvufnaiDnHrs4LJfQYW4NnwXXCS75HQx",
  "key11": "4HKS9HvrU5tyXhDcujhuBLN3UuVrzN3f5ADwzzrsF2R5cd1sQvbdEV5wu2YCBmjDSQzdSDzY2QoHfgpQmc3NJrnb",
  "key12": "2842wCnw8mBvnTFoWrv3nex3HNE4PUQkzuCjpKpqc6LDSNnSP1u5nRi1NJsbrbTuUTpqP2PsoFvravWbZMszCgyB",
  "key13": "1qoen3kRSE5Q1zMaCR3esGRzNaPcVWnSCpsjnCwHEV7qCz2BhUTjvz7SnDhgNuBcj46Gjqiae8a7Aoo6SJjtEbU",
  "key14": "5u2WZhs9i8KfLegNa6GBjsyWXaZbzr7e2a9HikBVBv1JVBiXaRErq8y8mhkaAHSqEyUVmjUABvcZenQbuJDXf2z1",
  "key15": "3u5ekQw83txfS89qRpQp3PjFHWjomXLP1End7Wxgz4Qr75xnMjwwq9rDTGyNQr1q1HdjKgbbkG4fXZjTVF2KtHSm",
  "key16": "4eebSUpkA7fPUTfxfvvkDiaK9ZzXTRqKYQvB5CS8LsLRLvfqjVkL7mcgiTWdxSV9NbLtBHvEQrtLsUAdzWr5YFeY",
  "key17": "2KWYJb3AaPVLkPwbvyoeQs4oq7HiUckCvwyvwVPCcWf9DUQRQF2BZxctbD37TDp96VmJkUaX5FzoS1Fvs7sc7ESP",
  "key18": "3TM9SRZoY7YKdLs7bKinwkVfiPcU2DWr2yCX39zccKB9T8dk8FakjyiUbL54Qr7Ftxx6g1hiyVjarcjVHe9V4FoB",
  "key19": "58ctbgjqEYfvD3MjGY1EpYWumUW84nrR8TJBpGKZioKiPoaDtSKoMbXjS5crjudeDRe2Cxs5Hvch15NesK3fkowN",
  "key20": "BjwekVuKzwoK7NK59xUp8GLQkWRR484SuvqacZbYgo9wgscJ6epv8vQSGLnCKd56JYkYyLWu5N3uuxZfGKPdePU",
  "key21": "5vD8buM1oS5EoKrJsDyK2asxXj7NbkucG4MX69janBLrwcd54jwapnd3AmYUsitjMFuknay7Ga5jZKyrB2E4E9Cx",
  "key22": "5dQqxmVUbhpWxmgXSKdxFR8ZVfDpzdWwvC7Q4LmRKKwbSUqwWh59KKDD4PcY52wGXgBRgm8BJbxoY7VESKaqfd28",
  "key23": "4Wk3z1DJyPgbFfW78xLZoSsA6FiG3MQL6AofEvan71bGrKAhpAYhocrob5qiLwTBAYoFBeyHPZy1Zmbx6hZMDBy",
  "key24": "hVU7vFmuMSCa4TqUW4Z5NEcrztsbpYGicmcahuHiBjD5webmYmcxhu3nbvdLbvns96uquAJ8BNzseTWMjRMKyGB",
  "key25": "5rsxqyjXSbchNPPooFAhVSVEVQdJYHYrqwC763nyVFQgVzDgfrR3VDEubL8HZpwmddRWDKaywNPqYnScSnge5LTL",
  "key26": "4gGcRSU7M2MrGLP8nvr1MvC3vJUjdVEk74m7smdWBuTjNngkDSeBgAF2fc8nbfJcPZ5DwKTNrFPFWV9NQ9P3ypbb",
  "key27": "3dJRGow1RPRpzqyr7UaLk2rWsL3RiiYbg32y1WgGCeucKfqwugrBS1woqVVaUJYXyJ4NyFENnK9na3oi2WGDbNos",
  "key28": "fqDJm1NJtDRowkv1KdJ3cV4trK4r1V4ydQpc6kUnWLzd6HEHYUyCYdb5rr6aorTYBbtC6LpZdBqdpXPeTwUTLYS",
  "key29": "2SaCuGDqPZXF7qGmnMWKe94U9rERQKK57GjJnGHkPWuqSXo4FuBERXeyvEzmmukumrRHxLiRXisFYJT7BKA4bzg4",
  "key30": "4CRm6rguYjLszupTiRwGJ4RzBYyLbys7azKVNd3ZPQX2xus52SrXmZzQEDzTLFQnXqW2ssWbQEp57VHswg9BwCn7",
  "key31": "4gNutT8UFp6gLxtYra6BY4CNeR69QNRDpGaYe8XpizQBjamTBFFL5KYW8KaQy9e8YW9j5a1HEcEvU1tF3S9z5JZc",
  "key32": "5JFv6aUbmAFD7yctugXJZdtNys9RWBrYogYAUhJ7xJSGVWcAeEFcLFF5K6XciMh8pLG2qaiobVBiyNSfQUsChd3V",
  "key33": "4ApRJefG65MMHJDHufgGUzvCiPCGcTsAPBSPsitnvCQGCxRezgxcajy1HpgYVyAyssh4EkKKGxoWUFxuSrFV1tit",
  "key34": "5bTzdovZQ1KYpx3sVxr854UhQVvH4DjQhyCPreecxYfeunP22Wn8cjTgpYb7J3xkZvCsMCdnhJkRvCNuzkVGvLkr"
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
