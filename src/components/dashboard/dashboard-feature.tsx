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
    "64HCycmbWpkBJvW1q18e3CjZSvxoFEg5Pa41PVJtLzJextiKxH2s4CThKey7BZiBHxSvWdsJ865GLhJ8fpC82d6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioeWavyD1vnzcNzZkuLBW4VSpZrXHcaeLPiNzRUtzbhaHN83SXqHzSU5Cm5Xm1dWfS6rWAA1zvzX49sd9jv3Nf7",
  "key1": "4z9Tto8ATpb5UZex3mwhkZWMmu1DC7o1Rnjt2swp1WFyj8XThp43aN3wRSP2juoxqwBGdEsCkLX6DCXsSnstjgVK",
  "key2": "4uD2efvWucjaRjKgKTGxVUgENEBzjSDb7DL4Fi6BFFs2ZzTcWddwrCZVYomME3EoTL4cvMfc6KrPTenhGq6H4Yos",
  "key3": "4ADSszKUMMhQKyYTfNBKQHp8QEU9mHqpDkAroSmw6d6oaWwgxKjhszzxjwotqScFNsEQqLaFjLJE4bkFvYJoc3dt",
  "key4": "3UG2ThM19qLcb2unSZTsgFzPE2rj8c3wFK7wu4EsAFiwpLJYpGUsj4mPRZnLp6pzvRAP3FzszLK61Tnst48qp6zT",
  "key5": "5sgfgh2D1mYiERLQZJf3wf7Y9h36hqsGqEuaAWGRa7c6KADd7zprvCGX8vKkU2f1yVpFSmkpS8qvbLRfEkUURHvb",
  "key6": "2pB3zNsP4f4bCmr5BJVWT2V8a2wM8xZZwfCdEL52p4BZXx9qGZLAnZLPx4Kf6QQoR58Uyi8TdseeoYBLNkjniFCH",
  "key7": "HS6LQDDggc6WzPqBJ2B7fK7RaXAYJ5fbrihC2BdyN8FzAGEi3KYgcJh6cNfJYZTfNJVU3BswoWhoBKieVXPEfr7",
  "key8": "3uiiTBBjNW9YfBX3Pa1TU35Di6NL8xyjhisSyvPhNerAV6j2YtDZ4VBTog1E14GKebykdwa924idf1tw9u7aU8Mt",
  "key9": "RQvv5rD5uE5XCxjQDiZ2u8GsSsv7kYr1rGkrqdkAJr9dgutDgEfzPHacKkgk8x5HnH8UbYsfeA4qK32vMcmmDti",
  "key10": "5aCNYwBjpsavk3KfHNVCHXHRgi8mBezHrbGC8sQkQN3Ai2MfFHMUJXezVL4priKsRZMp4Q94YGce6KncixW2JXQP",
  "key11": "XyqSABZPdSQwSsGyb6droKc5i8s324q9XiKqGtrsFigidW59NPkQ6LGVQnUVzD6fbL7mzq6jLATG1yLwvH7ibZB",
  "key12": "5PG3um94e3fU173fbGoKmY9we9eVCkrwFBnBDhnh8hvPdTyWaBGu6wBJhdhzPAAfeyGb9RcnEp5wWiec4DZd9sb2",
  "key13": "4tAqgkc6DghBau2JJ3cZrTqMK5hioKJJg49BioukQBULZvCv3hzVjEfzT2LmF4qCyNGqCKxynKqBmDgABuhpL65U",
  "key14": "3nMwL9rH559sofmA9RuzLwMxphK7qimSoyj9W6EVJsiYeAghHvXF8wFHLYFzhMmjJqmGrVa7HzSzafuzAzvbSfch",
  "key15": "4s5yKhBuoYHMXt6m8qnt8bJ84MsoTnPN7JhKa2WETY1fu7hJxbugqMiKUk2vs5GmBRRcuPXkStbYJyEkLBE39trP",
  "key16": "5173WfEZVNyW9LXJWaKe3VrotB8rU6Vv3khGD9yA3EktyvgWsbJTEmZnJyxM1mNy5ZdUwENn1FBCr7BAXbK3sTtU",
  "key17": "RoUBmfn4YUwJY8m5LWRzVyR7syJD8FxiMcZ8JGiXu9oa8vA3EBhJVTJsKgqhnNBt8dck8iPah4sKFkibUG9t1Wc",
  "key18": "5JJRBqCWSFac6JcPTJAnRyk5XMzvCwCSkBCdVdPWdccj653e6cKfa41YN5eiiB6iT9XtcAxhCtRabDVPoMGDyBjo",
  "key19": "4SURGKSovRyCmcaAdPDBHP9A5H1FfZmTsDBgCpAwzhMQyga9ubxUv2KxhEK5gMysZUtUDhTSy1uC7eexbmHtDqGX",
  "key20": "5gBNFJ4kQFdz1JCsWfHEjB7GvKy2ucRujVokFZoHLoNvGxamdXcFi5XKJ91uZzctacmEbqCJdNYL9Ehs84ppaGLR",
  "key21": "5c8p7TXSQJczHqEwf3hmxuexV7mJbg9s3XUh9x4nEpf9MQ5mQEcmyGqWvETe1aExLbvyq4n9CAjoReicZ5KyMkdE",
  "key22": "yrQ2ZDCs5PqodDLuubGp93i8XN9u1uoxHgBRaZzxjhXZ73KQiM3v4WgxKaayxVULRmDGi3D2KR4YjdPMCk4i5ME",
  "key23": "4PkQDxxsqG5b4pVoMGtYkHkz8rV84S5y95gtcLyr4jX9tRFgdSuXjKjEdRXfBt3sJebKUyvnQiSnMwBtrWVhBtT2",
  "key24": "3UBC4mH43dCXPMma2T2nP4CVvpWy7Jz6TausKqvj2MwdPmqXsETAifZRcaaY36wFpv1P4GzPWn8rqeNf7LciuCxe",
  "key25": "3jrvR2CkgPhPmnm88ParvrgNFRmm4hcNcohsmeUpbjP5d9hVsFdiVVHcKxiUsytfrKxLBeCaA73Q47idZgyACjFX",
  "key26": "23rdaVesJU95ocCbAeVj8b1p8RufYJMhdiERdYBBshDAuLzomfGRjczc597TCn8w5UE7BmjQbSedQjQifmEiENeh",
  "key27": "4AStfqHdCrguxhFdgjP1hqw4JbaQAAMX5LQrWdmuAiJreiWfxbbg5ZBmMRnPRz8vUhwy9kUoezs4mtaZ5CQzhsp5",
  "key28": "SAa5qMHYbynGeNbJXv7GSQoMesYxWyqCSBbhYGhWZHJytgqJzidPpnoJ62Dx131EWmP3SP1px6RPBh8T72wMSX1",
  "key29": "29qk8jUQZTN88iE9ybAg76dowMV3vfA3mcuCugWSuPAXr5s1GjwoU9jYjKg3QmAWk2roV1agYWbauP8izFxpqi9y",
  "key30": "afuMRkutk4cChtj5iiAsgMTntvK2XTVP6Z6PmcyFjgstUyqiAPgYaf2Extj4w3P3Ydjqjn5GtV8CZeDMk936KoN",
  "key31": "yt1xUifrvZQrkvtU7vpAjBUiVpWyWWNixpWH7bhw11fTCix9MCj9bzf5MuECKNMFHR575v68fUM9JwH8BaFogks",
  "key32": "4rVv98Uw25nSqymnMwuVH6PC912jPuidLqufW8BFV3iULUNG34NDGzj3NHRQn98bZpjmCLxM9YVYLLSEc9rQ5ovF",
  "key33": "4SCSuBevqyXBRc7WsntpJTMX8e6VLtmUQLfKzYqhJpTu6NWbaevJHWzkwcfbZc2b5ZvZyADWpPFgM4rTcVKFY8Am",
  "key34": "LLTgAfEA4DQJAfDZXpFF4YYxZH9VGPfPhc3hVAge4X6G5hjvYUUrbmvpCSDGuEu1kLYKK1xuGC3fBDv1jHZ5pxj"
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
