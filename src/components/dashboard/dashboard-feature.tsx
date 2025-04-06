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
    "5rLgBsEn7sxAJ5y957rC8zavFdkAeEDrmaLuFfUpq2fRuNnDSWHrqihKWpCntK7YW3Xpn45dmikJzFNtQT4rA3rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39EdPppWYekBHzYrWdpyKpoDKDWVgNWzxmq98EFtFbfvYt5jvJmLFCs18TTmScY1CLxWQJvEwSxU2FypenoxNymd",
  "key1": "59wbe76KdnA8PP4iQ6BeQ6zxzs9sz5aj735MVhYmzucYdRb5ssM5sjDTX8Bpe9SkEpTUkE24uoVTHYqvoRaxG6W6",
  "key2": "4fgEMp9EexhcxuQY96hcCYWZZDis2QknHg6BHDSoLewHv8kSNsFTUJcnZspKzHtRmAcTrpq4pdph8BBxM5zJV7Uv",
  "key3": "4vFnCTSqrmhaVWRASurDmPwDs1Sfh4LVrZdDWh4iLLWsMAtP6QJGUdvsP5mR6HDo1Zw3yErWMQvMLJrCZiu7Nrge",
  "key4": "2phuoRfCtjadBKC9a6771ifCcMtPpgJZDbsZPGjh1wRZM7Q1pZLz5gntoDRq2XynQLrgudewjvAAHDYztxn8Vjoa",
  "key5": "4DruGfeV1qswmcaW8YsefCUAGCVaL4qMvykium6wGq4RqhmnxYEnzivWjEJE1MPuqiiU3xqYb6TYiaGgtPp5a9js",
  "key6": "4fKLtqUs5K6hiHn5EoHHawXLbV8siLWuN8ZVYiG5h1SVs8XUe6DD3QFbvAg6pea1WrbcFUdBzKXoMVyf6GdYX4Hw",
  "key7": "2i22EY9zCmqZFsYqrVcfHWCgVNG2deYbbiZmbzR2iDzWbfeKKoBZtawQE4nsZqfyWXJzjGXrX1oje31iM9bjWYY8",
  "key8": "5yPAYLqpd6RJstt8m3dvz6nqKg22sj3TPJpdohFGt9uMrkJwLuSb55KkMFadjzALzN4N644HmWS4B8ao7oMZ6fwJ",
  "key9": "26XkCnpANPdMNZyTZ5bXzbbMBkFCut2Q5p3uNtv2R62o1Qp1MZB9jtXawzogjJKBpPwZcU2kkXXQhf7pniQ6S1yv",
  "key10": "4mwpASvXGWb8oZUgoE3PNUNwbvCZepQRsy5XcvanoAVoxKCV8X6xzCj59hR7VGDvpJbJJ5cZvd9QQmTBeZsU34P8",
  "key11": "2P87wDHJ6JwWCG37HL8rRWycmLz75ek5ws12KiTjTKKe3KYNAJiEKATZ6MbVaDyVbxiPjAKFgvnLBXC6mqUy7puz",
  "key12": "45nvfo6r17WD6AM9YzChhWFi6MQuohDkyMqRPw6gQhYBjj3JqwUCjLppZFSr3mPUVkSEgguZ45oMRmNYasMNLRRF",
  "key13": "313fBzXECZLcaWa4wTgiwFbxmyb43iww4QVDxFZvg2TxCSDqBJvN7jZuKuyk3KLn6QS84vQgAZqz2u5uyGoHC7qr",
  "key14": "5JaWWk6pTu7CRrBWZ9oEGuRQciDuHuwykgqpyYLyDouttLyouiXNcon3ChfANWFp23SERR4M8vTdtLvgdmsDmqc8",
  "key15": "2QKu3ot62kqncxQEsQteNQ65qfYcmu8zh7qihZ81sxUs6CLFLD4sgcavDRPoyUNri5VUCxNd6Ed98Y4j8CkCDg9E",
  "key16": "3PDRbURfFowC2RZoCwjFEyGQ85ZKR81V6buGQsZD6hBQtKFvpPU2cT253Pr6p5CfFbpK9bkZUDv9KKpBWZRXduCM",
  "key17": "U8fqeNhS951zrdqvpTGLXdT5PMn2NGXh5NivJC477mFgHXsAKeYNLZL7Mh1DnC9ohvRqH3HzTqznzamSCc3Khu5",
  "key18": "3TegQ8Qxq1vhqrmjZzsEw5Wd25vDugiNNPgAV4wPsNtVmg8UmUnAfkZ7JLbsjQZ6DzcPVZfW8gX6PHYLSd1t6Wex",
  "key19": "2yPedvRyhb8mFL92eCAPDPHCA9BWa7ePivuHdBUmFdUs37XaD9f3DYdQ5CwyPQiQMtxjbBudsbt9YDfu8Ei6oJff",
  "key20": "4ArjrVgkzGBzPSUjCxTboVYhMiGywcyXqGM7uNd6un46Eou5A48fb7Wh3hf84yNAxeBPkgij9jUjCF3k5kMh9wLy",
  "key21": "3ZTfJHmTPBoYhrDAXJxsr7JTjSJnJ6Fg7pV87d1Pp4LQR8Y3T3oSJKeTVJBUABNks2NBMDLpDZriaZtDVwZV8hWy",
  "key22": "kEoo9yktbaJhGnV29HL6pwdFibgkwtcrY2AFfijSdZbzqFkK7Dz1z8YLnDCbEy2Q5q9fskWndBQDP6zkSGf6WPG",
  "key23": "5cMhhSU9ZAmaTsNKBooKb6oUh1yYoJyEWQBamj5TvU91bZ2qh76dC7DhAr1bHAmGz3ZjJsFnQ62E43UgmbNPNkk4",
  "key24": "3bMmCvBRABPWnhhbdEzgfYa4L3d7cx5vavfF6sNVTDFEre6gFLm2sQcgLUV6h9maB2DCA9hDdrTAs8WkZLqUnhSy",
  "key25": "4bjuLkt7LELiQQqB3i6Lcc5TN3Lf326jvahDBbbX2CJtVdzT5pQavgRGNcrW5Bd2JRczQxSVx7FGei2HfGqj93Mv",
  "key26": "47QQLzbQ6uJHahKukHfBfjgk6rJ1KTLX6jCcmn5Udwt2m5ULgShNEFQXeRTGtCgQVEPCpjvMd4pWE5kjwKJ4frm7",
  "key27": "5gBNfkukv9yAsm9HKJ2DYk1rVB76wph8W7mpYDHme7jtvqQuU6Pn6zgwFyUorziAE5axRtTStXisMhNowU973scX",
  "key28": "47GPeuACnJSQA9cgC1wra3TqJAPxczzbNsuQ59AHFci6y9YFBWsGhAGNkqSyxDgBfkR9asbh43efZy9EVATbBLYV",
  "key29": "3g9zRa5iM7xY3usQhejVn9MXLzgHJQ8azZctgZrNu1WmBW4MQVTrbQ9hp87KDKTtsD9HTcvo8QSbrvSkfNLY2bTB",
  "key30": "3DMUxutDBmTMorYnWrfKzz1R8Zwnz8sXnc4ChHmuch5Wrimr72ftMYsor6qf647LN8dHA33ss2frKUHDgUpuWeda",
  "key31": "4Trhp7xAbKH9iou1TdLWeVzWbvXATrNWyd33w8kXbfMuiUHBbCf8zD2RTGA8tWidT7aPVU5Z6bc8VKgWpPSpkidb",
  "key32": "2aHyzNWeVuMHKyNZZqow66WWqTWnGKw76KuDxuPCwYRgzn8sVh2YBNDJpuvndGx5Eg9UXWfq9jiu3qP4ZvzfRxFn",
  "key33": "66Zd9H6AzZ55zr5voArEcsjViHyHETvVnGWy8Abjg9uqXbXW8P5shH7D2mWfwSNWvSyJj6Lvw6M3BrHWhxjNKD2M",
  "key34": "4NjeE7kS6vpeAy9jsGKZt3mV5AKkSKMBhSqz4Qdy1GedquBWh4jVdVjsXekW3ewgutQdNuCPzcgTkK5emmxyPabs",
  "key35": "4Am146SDctJ2EmPtSL683U1F3DtM1jFxcR8Com8SzhX8tbiryJ9PmfTktjP85rebQN8YHBY3TegTXBj5GFMsKFkj",
  "key36": "3NuGZM9Rx8YXXZGLuBa5L8HjW3HuwBvdav4spLsT9iiYiVn7Ez2AEnMczuSP3VAFkBoxAdf4vW5gwiT5okrjqEzx",
  "key37": "3wKdvJXXVkpLX5SF1gK43j35EztPuCUusEQVYr8HbxRTDB8FxSeeLSQoRNtYq6ktKhh881FcKy4B7rgTk67F7TMV",
  "key38": "5Z56zkVLgsAgFzwq9vwzweBTKive4qxXiR1htEGGqSY1kPEzV7S2sJ8NgYHG5jcQfN1bH1eMNsyiCLZUCHWKs3rZ",
  "key39": "5L8XNcRYcGXcTSv3LRh1rdZvHHk6wAv3fqkTq4jbZZUsRDAhq6ktPiHewgB1a4fqgC1KRrb4LYJkBh8t3KpEEfHh",
  "key40": "26Ckm9MAdo6YL33L4HCATpyfH335xE2LmpBt7FSuZQXLXPT42Z3rHafgZ72sZnwvNKZHbpQAsPCMve6BFScP3g6N"
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
