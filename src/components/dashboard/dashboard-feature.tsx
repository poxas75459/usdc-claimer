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
    "3TdgAnVYbSVUAMnkhA4U8z8ksX2SQbyTikzTnYGz12Z5J87R5LuFyDHzYcbYm1Q3ftviLqCrpaaDhLwfWtnmbDn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JabR5YJdKYqSyz49CiAWHrDb6jgN3Z4yfU1frThfKhJxTTmCxLNgNbEX83VJSgirUVxWmFja1LkGfag2tUSJs5a",
  "key1": "mPhEx17ytgdv3URzZm6iuHizggWrf1FNpNy3gxVBe6bqFNe8hMqGEjwBguZLYgscB29DGU8AKNxmyTyrX4aHBbQ",
  "key2": "5ixdLWtSfgqgYMNHy7MSD132ZRZBUrxkqCqarR6SbQNQynMU9j6fcHecKbWrmB659iRbXsu7ScS93pN5jYWZm3ca",
  "key3": "3UL4dJCumA3dJXBLcCfdK1tCB7RkYmtAxbDhb2SQBE1u98EC3BPEH15kQ733Gt5msaYX15fi6R4wjfxvcBw7b3ku",
  "key4": "48Us6kg4Ueboz6wEMJK9PNv8APicYkAHg9DiAnoxW9opZQzYj1Po5U4AhHM7xGUmqfEHizZUEjuxemXe1vPt5rFA",
  "key5": "5qvZYXhPLAD64LMuDZwJeFhVYhAN2K788A1Wxfyq32oX1xFrt7kGgvXEFwwL6vK2vWY9zZ6HFeQvCiQhyZ5bbfum",
  "key6": "5ujHf78cWmVKjg9VSFdQTRBp6fM557E6nbU5BjULZaQPAQJHLfLj6VCSahGbyqsz3sEnECgR6cAENgM5Rpfce3rZ",
  "key7": "2KvoyDinWaQHpXmr3roJ9cVj2oQjLGZNMyHhAPTNCktkuXU6dSvzqgY3y44KmrAwVoM4foB29cn5iTALSWhrJywo",
  "key8": "659Lm843iby1Rk2yV68zZbPpcPhUVxGp9sLTM8miihYVyW5WRhSmM7PiesDTKF4PgaQ3rd1h4jyUBy2LmbT4TCZp",
  "key9": "22g6i2bXh49jMEx855RyX6ySH3qhAXhND5DdiE8vZV4D1UCoH3i6tn2FN32wRAqsFYKL15YkJTyaMT4jEWJJxE1U",
  "key10": "3T1AZQGmJHMwFnN1fqYvqqUcnrxg8cQt6oqr6s3YbjABXWxyvCtrDJK93QLQs3JgQsCG6YcjNJPnrjuguR4f8Ur8",
  "key11": "2424qQVYZqz7qx2arYpeHPJD2ksSpt5uL3dvxLsVL5oaJoouf5cJYNd2qHTmEkvQgohbyf3uAx1AM1BJjHF5Fz3H",
  "key12": "3TJi4cPnt18VJjmQMVi8FRyoc4dLQ9aMMAJHeG6x4qWiH5BPk8XbVhnCnrNVEyUWt1GxvdaFKyQWdJsi1mRAQvmy",
  "key13": "3yKD1e55n31g2JWWhjjRtTc7jwyNcxut3VHmA9pyiZzEN9Lq5xqMTPrAa6xpRUhbG2QuGxV8e55jjNbxDKiFvo7q",
  "key14": "JX3Nua2NgKyF1K6JdePDueTGKthQpGyQxquGqrUg3JDy6NVBdBT1SAttW4NjnRtJAYBCXQx2qdQ5H2DpbF4Qhrp",
  "key15": "3JPMxqBbpW7DgQgqmkn2A2d4MeGBU7rgNKRDZK9chiBXNgvjbXLmuk4Asj2JvcawZnLz5gF9A2JhTUMrQv1z1jn6",
  "key16": "3hWqyZdHWFK5jFxuKNextpTb5HuTaqxN3jTSDqFyTGxesbJ2CpfXiut35uXx6FiMmfTTVXbHfQDrePghh4JWHvg4",
  "key17": "4UoFq4ssG36yGp7M6fuQVh2EbH7iKvJrVba7w1hyftEUTtzxgku3Hs1aHSCb38k6JwHDiedfuUK1P6GDxFxhp8P9",
  "key18": "3Hz1jWA5mVqCBFwDntVDPyKehSbQSFFTFkDHfpy9gFPtviDkdSge8iD2isZZRfVheyB5j3iG4aC1boJqBSkFXcxU",
  "key19": "zAhCeH2NqYSyroYQbBPGQ1JzZTAuvCa8fbGyCUdTeLgeFD5m6bkjCx2CWNbYfktAPTWk5cJ9MxcZ1Q1NMsTLoCV",
  "key20": "4nKZgCD1CdH44iBDeraNJsVFXRqNkN1ygu2S91HCq2tBf9DT2AnBiZhgc1a9s13nUrsqK5hsiZKYJpfXEuVkcAYQ",
  "key21": "54wh4P6EF2K81fm1VRf7Mj2Pts5jCm93HQvXwz9yJNYHtXveCgtHwNyv8yNMANXsU55GcchqLhBvXiTpAXNptgFj",
  "key22": "3HSRDM6KpGT4LqbBFXnhbEiJdanYtVSrtUA4CDbfeES1XfUw39NQRydu7eXPrRaaEmgyG87PG7BxBaSomk3ZGsE",
  "key23": "2RvEt5iEwKhantDKPoUgVaarxMxrLg6WVAREe2mKAUkkQ4sW8WJhjDE5ULN7NpVVpk78ChuUQrmd1nyWvETLtYcF",
  "key24": "51sUGhfbpbfrbnV3Gsi7u7LprLFbxuGeXQWSTMmcuD8qhTgRUuGBqNih7V7UoerYtkTm3Hj68TTyP32ze1jKMZKz",
  "key25": "3pvjfCMWSrm52b8r8uLP3fxNsZjNFwd1f2A5VFTUmkNBFi1XwdT5JQgin2MHcBy3FktpMGqBokQwdezXvE3YTkYW",
  "key26": "2uWFfEGtQQZ5rhMBADNocieZuTUPudwxc1jEHo8YuazP84cTvKNQWsQifR7iofFM57zpjEV6YTRFZA6MxZRYQ9NA",
  "key27": "5Jf1yKpURPtNkKwgcwpkF8qZNjojiE2TGviwj9VHvARisfpVDwFJRGBcNKpHpj7c3UcVtNQN1YN1NjB5Pz3CnRGp",
  "key28": "VA6gSCF6HjyYYBi5QRZzWteCajFjX4EYdswjjvwPBujDvfRW899Ng4JdCyerfjocMWnw5yKno1V1iX7NYTKk3Mf",
  "key29": "2xFZj9CAFr8gf5HHaRaDk7WZwY12LQmPvZ4k9543PSsapzuZyZPx96VCry9Bc5L4fS1ndhm1GRXbyahrtB55cdPo",
  "key30": "3kqWhEHineJd2DXh4AsH3C9nUrqW6UbBHaoYrxbyWYHgWGiKonFp1b2K8og9GLyqkzFZQRKhCvdmrdaavxQ4P9PT",
  "key31": "35ayZcY9GpCqFbQ1ABBHJmeb8sSoEnHNoUq1mYQ6BD5HqwcEPKn1oQmperNMgHJamYvh5xudfLQeVqeEggvFNdcA",
  "key32": "5fMkkuaLhQQNxrQJPtHnFwVa654YGgppr8AQFeLCWtn3WXEXM9soAaEKFPXeTD8s3WdDwV17tSSS3WZozMhaQYCE",
  "key33": "8FGUPEVb4pYJVRGQyjvoEYFKJuV5pwB6Min73YVTyG4wwqUASmkdkt6p2GTpUH7Rgwnggt7NRMU4ufz2PExCvL8",
  "key34": "4gQ5nFwkTGt1MJfzaZmWLZ5gL1G2b9xa7WLUzuYKkgG6E69PnxSSmNKEPwAneNNGjSbFmRnYsh4fWyseL7pLNJXq",
  "key35": "4LuWKndKkCjFUxjmdAVv1hJzPsz4nSxFxEJJ3JC7mV1UpxSPdqzWkb8WwiABazoPzG5guCSH2ti78Pr17UxChxw1",
  "key36": "3yAYfEXMU5gGWwa41a4n2iYLBRHJTMRgvBhwLVzVrjCX351aqZtZxskkzQYHiAyAhwPwQK8a8JS29V3RNLHe3PSU",
  "key37": "27GYpmserdpSS6Nq5ZmVpr4hRJhHSujXWzp1yAbGRvv34iiANdrF3cJkU8bREVM97HGfUwPFNpNQWBmyQ5a5a2sX",
  "key38": "kmqYbJTTRfQVa7aEUfywaPdngAQYbVHMijS5aoq2g4QgzeM1otko8Fuz6G1wCVz9hLvAtpokb875DRZcRMVqCCY",
  "key39": "2v4eZj826W9tyiMWnK4agwrVuu2YHg7ixG6seCLPRh3zVRSEnsmafcE7uMZVJ9UtqLUdqDzYSL37WHi9ehZcjDbc",
  "key40": "uPF5rX3kk71tX3h5PpGAiuAiG928MWfYmaTLbHFuqggDFTMPtRCvHSQw8xWCACJHQsR195tmJ61AWvr3mA9btJT",
  "key41": "4EMfJLTnE9ZQGtLNfJNtkX97h7aD6QNfaAKnqxnknps1tF3WPTjE8RRhxSBcs39HScTYq83ZMCUBovavX4SmJuuk",
  "key42": "zx3GnQa1C35RbdcvhVJanjhqFadWBDLVevUwDp8Yy8QVnX2xgktrDzCVEJuXNft8cj4ojidEMEgZefyveTyHtoi",
  "key43": "3bjDi6HxQ6xd1TbUP7rV8H8A9kYFesXjZvLEtF3gCZCWRswBi5Ezy5vzmTUtnVEx2SYjZmsVfnejsVwWYHupSkEf",
  "key44": "3KVvd8QtWmFH6yZyDxEP4YGs4DodL9vQXGAnGXytbA4BX9SXncSEAhF63H1BurFMMnmCtkRymFrdv5fC1xVe2EnR",
  "key45": "4wq4wTy1HhYKa79q7B9KbZ8yvayRfq2ofr8GV8t5uj43LHyqxxMT8RzyruAf58cB7xjifxxzWPERcwFTyt7AKAUk"
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
