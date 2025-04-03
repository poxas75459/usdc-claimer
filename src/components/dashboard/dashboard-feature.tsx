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
    "21RGoueJm3PsmNbShdyi83qmkYfamwMGuVzdjuWsKmf35Z5qkK5cMoEGrZ3vfQjhT6ErXVj3EF58rRur6kKdYBF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHP14PL6RqLbA2oLU3he2zRvZTiam3fneCytyenGnz7Gi977Y5D7gCUVKaG8pHATdpzMi13kMQ85P67wKEkr7ui",
  "key1": "gjZSyemF65Eo424CTqsSybKg6T5uACKD7RoRvQsfAQvrbsxQ2hbHW9QcqKkR44eP2VerShUhS9UVPvkMnhqErLc",
  "key2": "63q7Fuucx5VePXKaPDQQGCN3cHHT2WmxYe5v9Us5qXSSoCm3Fqj7Z2s7ytSGVWvihK63jcswvZtvc6DYv2xKeswS",
  "key3": "5Z8ZZJNCR37odM3bBSd3FHofAvazaN6UVKtN1oxg9j5bnzoUJNCGXpJeaCffeACQuLZacUDFm4YWqm6UGD8raNzJ",
  "key4": "wSWxhVRrNYKbWbAjeciSJxvueZSNXmNRGKLLvzcpPSAwLdn6t9ga5usNBR4ms367iUkrXKZvEk7b6qDefeHHuX5",
  "key5": "5eh1SgJJrybH3cNdhcmLvjUpXSxUr3a3v689bSHXdjLk7DTxD3MoqDGFHM2tx4uBsbdzQs4HFKzgG8VN8nptzVQe",
  "key6": "UZn8qRGt5vqHUtD8kyxMwL4QqHaqq6X7sJALUeMgbqiQJN5VMN2QL9CQAu293dYK6umiJoNVDdafo6ewZoiCWtY",
  "key7": "5bWvbjKt1me6XtwsRokigj89DGhkQzJuYzNRzr2czfAAcNaNBR4WWPSxTjVo44UZUWmUvXogLwuSmQZb6Gpe7aCq",
  "key8": "dKjkkJWrc8r7DaVz6jGRwCnqYXucbCfykE7fn7M5HYzLxtNeDthsu2szyXM2fehK1XDGscUQzdmfrXz96c5tDik",
  "key9": "2axB9fkFh1qya4vZ9Te5qHu6R1m53p5VwSLZKreei6psWnCxVEtBXa47ujAXRXKAyvJYN8fLaUdoyh4eemPLCwiE",
  "key10": "4SuTUUaU6thjDscSrVRji2Rg5KmdafQZ9tXFrNTgoobXQTqQzZ5RJ1h3tPxHSPX9FzemJE36ThDEELn1NVpkHeqV",
  "key11": "6sFW47xmGSXawCJqBXxBs6SqYK9YUiKXGkBKQJzDVFDgG22eTHyZCfQCu9dLLQQegBefr8SYfkR8GTS1FjCQZ21",
  "key12": "3Wh7xHb27iGEUsRhUXje97JNbd8FwiPLKr77jcwiNYYWz9EjvieticATifUi6kzqi3P4wn33zkWZ9XJDuMnphWUm",
  "key13": "4Lyu2t2ZMA34DgkeXGHFtNvW2XUzKNukVjmG1HUuqoED3gPNqttJm15xoKGpnigfUt7eerW9zTgY6kKfaF52trP2",
  "key14": "3kaaaPWCupsnMkYm12UzQ6s2FJnAjew75MeubgcQvgaA2GiorDptd9DnQ3q1Tt4ZjRECYxQ9tiT2uKh9pwbeRMy2",
  "key15": "tBsYM7Ppc9e6a4a2Ps1mm917WJa5mxzDpV4tt7ERui3d4yCNTZFsckTkfVfhhW8Pmp3sryFhkzfAqghhaX8VxCY",
  "key16": "dmzA4aEKaq6DPVJs2uRJHPaGH89ua7ber1ZPDCdsUqVRnY1nuovMR7V8Gv2V9wkq36BvHsLWxAEMQ5fyD8ZeJg3",
  "key17": "2Rx9bNvbuRgRwh3KRMsHdKXNkquGtETkzMwkgvCi1Q8whUxAvWrQWaGierQgr3gQRopmhtjBoRoesY7vhqne6yv",
  "key18": "mhePSWRL8UFxNzMUYmqUYki7tAoDL5rcPAsZ5HkVwTQ3gmGaDkzXRrm1uz9D6UMDgzJpWYLHrq56BjhAbrNZSgt",
  "key19": "2PFjpBaKRLqP49xsWoP1Hqk88vpjxZQ9PDhac9TYCrtq7RDwbww1ApUaAZdeiCERk3gwF1jCfUg8QhnWEt2XckKU",
  "key20": "rc1n657SvTcfsTPdV5YAeH8i7496y5aFxgmNmA3RytT4iZ3WBHxVanq2WaqrjveWYqjVtUeFyT3Ko7xHbxRbPpU",
  "key21": "2rFcZEmD9XsHmha9mHxyNCVYyPWBC3UG6RE5uBb8L629SPcRHKG2Z7oHBa8LjJ98Q2vd4ZvRd9uVPndEQBjXTiMf",
  "key22": "5u6a74R4CVkqZTJeYZFjcNUbLMbX3r5Q5iHCadWUZ3z6EBvNJt7SfLY42BXrLqQ7ciQsr1DMptFakG4Fyaih4Cx1",
  "key23": "5qyMy4UW25xn28BvwRE5egymB1iwgtpMounmQ3HEpHM6yGR7UxRpd8vKD6CDLEYJ6WMh8SVd8paHCVBrbf6kDW5i",
  "key24": "3TdXzJeKRj8QBn3ioxZJAae8JqLNmhJFAWSMdpzoyb77xjWnzT3c8B2EQe3uWwkdis6dXTw8se9Apg2drePicYZ3",
  "key25": "5aYwcebKJL5JTcxZtkC5Vt4s5RmYq8zE5Gf46E2AkvqmHo6UNYzpnVe8SQvrDJmW6pBvHP4bLSZ1hVdzD5r4Vxke",
  "key26": "4poCfyt357xsbC1jkY5jQ2yDHQSUKhRdLfaNSUPt3mQTZAvRNgCYdi1NBYHhoNAxiMmAmVucPzYhewVoSpPdXrMt",
  "key27": "2UF8cRuawWzrG36WKzDv8ykQFAasbV4yfkVJwfYJMvP5nU7Ds6fTuwU6d86C49jZQsXNtgMrgzDWVqytssRsHaTg",
  "key28": "3k7F3y9WTDaigaDUq3ZUGHs1hPgVghuRiWNmwh3LTzxJwPJ9Unn5YhfPHyNxwQ8DNnd1cWyG74p9aQiptK7bpLwW",
  "key29": "33GvAibqTcpftQggVTWc2WXvgfEp6aknQnZzX49nVyGPF89C3PBzqLtm2cs6Bvb8ehhxY8RsFJUa3Qt4fUno8hvM",
  "key30": "3LhtShAB26kpfRqAFW3DnA4LUbBHKrQiURBmxkdBJQmEcMVyAXuP3r8L4yBDx37rtvkEBmPYFS1HerFzbaaQU3kX",
  "key31": "RS2bF9YFkoSr2Z4Dq9wRiRVSfb1BFEspSARwFE7ngpGYof8aojyPgqhrBPByi9tWpRyUSwBQHAaXuacJLrDMbbG",
  "key32": "3gaXAY5W2v3XMSibaUDkTebdWgJHwHLXHFq5obS11h4tYiK61h8UGqFGYbBkGzpTRjXgFHUYoAYi25PkdiSPdzuu",
  "key33": "4xpPxaCzYs2DRqdbwhN1GxwJK65y18vhg5ED5tHW9xozv7XxhHoWJoEXUW5Ty3d8sYhoFnCP92z1ES5RDaXAPxqQ",
  "key34": "49wZg5TVvzg6MQLunVWjMUyGRNniZm8a9qRR9pmTVb6LMEizNDWSo4r8uTQ5aDzUEjmXwu8anGbJF49Y57KzAEbz",
  "key35": "3WFhdDehsfkM53hkAAHBZYjVPkLvTbsG2A12AGJRBjqmTRsJY8MjETmFqD6mTfvEcfVrbT9UmL7gkwVJ3VhGQZCh",
  "key36": "3FtY3WWPf2WpVnHdwAsXjok4orgnUzQJwsEBj9jWzdnqtueaQiLkwxTyCq5Azu5eLmwsbHoCrYBE2Xo7sMVfGFnR",
  "key37": "k8aEPRQJiDUZADXR1TXATyE9biWqSzSQNHE6h5kusQjPweEGrdnH9nWu3YdeJMFhBSLD3Xjor2gEEVubysq9Jh9",
  "key38": "5Yt9NSt16ABRhFfQZuyVbzN2GesFT8m2a9UcANy5QxHhvmrdrfz4XHJJWZkNF2i9DGKsiUMp5KdKkdtAxTXZSs8C",
  "key39": "vfMz8Qc1bFKMW3sSUeUMr9iscxiEkVLA14MwAZJWpeVxyatq1L6hzsjF3qhrGBY1Weu7sRsiGb22Mj5e7JHvGN8",
  "key40": "4ugq8xKVje92yzmZuHHQGYwaPQh5jK2RsJHpuV3qWaz3WB3NrZPKBg1WVDve6HLX6ypVJg2nQzeb5mVWjGDfLatG",
  "key41": "fGSLm86iUYhGuxrv3dphQ9zUjUAzcGHfuNbap6eQQSLcNGGC6sq6YgKpQCnS6MZWd52f5DoNDwiXiDAaSJhGm1T",
  "key42": "2aQgMCYE8Z9z2fukm5XcSBCftm7Qizvb9gTbsQSWDS9xQ8CJidhYNtdCqYNu768sWCUPUEuSjDSrYAy2a981n7Qs",
  "key43": "2ig8APPghtZArU9LfREtd3YUyG7PCVDC1upqFiB6vWGtDXWGboJJ5KSesMGqAk1arzYT6RhvkUo3TdNz27W7ArsQ",
  "key44": "48zqcUrLNmcQGRfXyT9YugSWoLstHD1tq92GezxFHHzFQzs2eiTYzryWQFe3HD2NUBDuuh5C96xak8bWxJcNkBNA",
  "key45": "5iC1t6hrrvYeM9KUjNWFCsz6YJbTX5tcjwcXkAo3DkCC7b5N5WRGXXYbsF37p9RYC4GPCcFVwsWvoNPFJNKjkoeU",
  "key46": "2YtKXd7wFhyoUG6zSpzB7VbXBkDzqq1Rpr4Vuy5Lk8fFE9C3d2KVk8Q1Rwb7soqmUbtejncA255D11X2AqTHexAm",
  "key47": "5kzJFb8bywx7jLerd6Q5ok1b2qym5voJLQm3smp5RguCbV7TSnkqZXqVXGCByemRC4g4SKP81LQYi5PuNuyAM8SZ",
  "key48": "XfNxJcwz8QYH7RxxeTj1k2YPp9SUysGqURomXJgzPxV5XnrP6tFLnMy1WySFmXvbaVBMurRBYkpqAEgtX6Z4KYt",
  "key49": "5yLk8fFQ9K1Wd8xCeP3xtwwP6tV3fjZTaWmMN4iqDoa5fkWMCi7Qm8rwvg2Bj1yhCgTZocGX1UnYTBfCVHUKLtBs"
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
