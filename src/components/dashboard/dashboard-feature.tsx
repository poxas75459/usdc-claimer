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
    "2iaH67xahJWuTSb8WRJXe6b2V2ExsRq2QoAHQs6SdzJTsFjyETc8pR3zSKaMZhL6AqeSpP83nPk93XY87ZNAecbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hNsgmaZFJk3BA8ZqzJN7F383bppyLhKKrCa6gWev9ddUdvVi9wmZXKh3JZh7kpCCkbo8ApxVgdiSapvV5itJuo9",
  "key1": "56NnTZNryW2mnTKK9ZYDA3h48VsAj89hpn82BfZs9Svq4QDX5dsDkM73ZQq8kVxnCKWyCP8KhjBuwdG71WWgBPTp",
  "key2": "51p9gL2dM1jDhaVkWP3AnS6H2UY6S2bMvqTkKhiqWQUZbZ8vJwbSyVcyYhYvzhkTsjfSaAYnBojpWJbWbmshKm1n",
  "key3": "4XnmrMznHM7eGTb59Ux1db8mvUC2m43t9YkBLuGzAKQg7EJbyLCMRDLYy4CbuAMjjXgBJfCensS8uj91UMjbwHEn",
  "key4": "32yfiwwvpxJff1jufbmTiFaXnNcY58494XHMnyXacuyPeT5jfDnawXtNoHf6s58oKRrS7qUtg1weMGuRLj1QTwJs",
  "key5": "4R6L3CPvaQYGPvdKF5SyyTJL5qmdZ1Da8cZ9Unw5FjFWkZg6R9FBe34P5ZbQ1jmK7y1vpxJvFsQfthgqenozquHz",
  "key6": "2Qov3cRw2jrHBtZhopmEWCexGbjaKQpHZKroWw5n3A9j5WtjBzgVSo3wH2zTm5RigAQ7eRRwefw4MXAwqQkezWJk",
  "key7": "46qEbE5GpKa7SoTZB1Njm9xv94uppcyzKxDe4GLhGpCVzKnH6wpGsEW8JNtyaTwph7mSKpRFjr4gyWSsEmJudHui",
  "key8": "HY6VHra8aENUtR1EMFEMWVBJDgFsSrmDUwXPpBWnzgvMrG5ZnN1PX7RFvNvi5SVj3UKonxm2KUSwtQu7GLQH9mf",
  "key9": "2zF8c1LmYbfzz2UBAwBqsMrJFVpUNoXBjYhhyGsCr2JAxYpNpeFuThHDSfiP2usXrCw3EtiSxBRMeaPk1SNMTkpf",
  "key10": "6Xe53ABTVXboPV7BySSqkSr9p4o4cKSbWpWz62MRanTHdWufYQDnP1njysezdMFgeP17U8pVccYq2KhgSFw23Q2",
  "key11": "188x8RBj5b8HmXA2NH6ogwi99sFukMew6rXAW6Aa2jbC4WC7vXTdefZtuQATsvEMCTCHB1zc3vG5GVWmVPdfaAR",
  "key12": "4QirYYxkeronXmMM8w7RygXNTTQcMSNPvphasxhecFaMFYsvQKobZQMj3rAveL61GkydjFoY4Pg99FJY61jhDYqs",
  "key13": "2AT2CJT8rY9ZPnEQ1dPdqAyw2E4L2gUyTgYwm5BRN9K3qqkSSxVXqSfeUx6G4tQJx4x6ftGDp7UbDt5TgsaVEnws",
  "key14": "3Zte7UAgCpZay6x8LXWr3xrkU9obVEHMsY8Vv88DwK1F4a23JDgYG11ZcdSs2QBU8zfGC36mrHeKQEYfcfXB1KMZ",
  "key15": "NZuHMYyMX42wUvuwFThu994NhrdUi4ZtpvyJhUCwjucM9ofetuk8CxXUzQ91eHZXZ3mK9FEqb8zs4UYLS3kDeDB",
  "key16": "2CvaX1Ujno6f5zRcrJRQ4LhejJSYzLamwJC4wHzT9eWeKiDgD6JvxvG6GGzWVhZYU41cmHmitEPUNdrKYvTMWohi",
  "key17": "5j1M5mfEVYKHTEsEioL3ny6Sbarj62U8hEhc65eqAx7b87M5qSaTg26mEr54VkoG8S4SFFer9pPmHZhKGzFVqRjz",
  "key18": "57gXPn3D6KKwmiSJJcZM7XZMkhmM1HQdRM6mYBgwdcsXSCCVPH6NZt8JpsA5jDZw1hLg5hxMayTTBmqQrC7vVmpR",
  "key19": "2bYsvANj6GDYPUGKCPqwkQyc7H2g2NvAQ5gN5wFzWi6XHp732p4uVWwspR5i2vc2kxUkUA5zV7a7i6XoG4XCsptH",
  "key20": "3nMm56tKAozuLpzMdrRyySn2nJTnmxPEnb7hkEKXa7DcRXTNZUK86FcDixNLTckRPbdPuaJHduHM468QGpJ1EALJ",
  "key21": "2Ja11s3KzmunrEaFi33tKAYLkfLfYLyuxR1dbQ6aBcKXXJb1rgwEtcwCpawcr9KXWZwAuQn6cy3jV27uYopREQor",
  "key22": "2PfntxYrPE5EZLCjdGHVuKGyef4KBZeirkdGUMmMbYKFoBWg3axE9NnFrRu2hcD2pwfHZd7X4ju9Sk8MhSWBYLV1",
  "key23": "5CdoEshQ1XKVA9DQH6b2P8UAmUTD4nTbYYbVab3BTgjinLgUUk3TkzcnPiLgUwenmSCxmR2eQmk71KDKgF8mwhqA",
  "key24": "nRVQX8cf7YWVCz8JGa9x8LGC5SkrTRnJuBrBH9QmZYpXkFr8wowTWyZsPfAJfcDm7uV3tBH28hj2phXrv762TD4",
  "key25": "3rurKeBgiKVcss5ipTiagudkFwwEDq8mYMjZWdvPsCFfnHXfKXoGNZi3tdDwacqQfLDT48PF4dDq5XkiZZA9ueN7",
  "key26": "3cV34UbdDUmi1csGtVBWvAh9drBPu9A2ntRbwNa3mXrYZy9GwJ2KTSjaAdPi6pxKtLbUqxnkYoUbr8HUagm3j593",
  "key27": "5Zdb1T5SEUA1xRyU14HzFhTw98T2YcrSKjLFn4VSHRZRgErU9pd4NEXakKztUSY43grZPBLfzVmPwwq3ZCCmJM5F",
  "key28": "24oe4DhKJDter7bzmxULhDqkSS3LYbqPZhKCkVcxUq1aUeiKFsBTmqbosB6iPuaxuc8Vsxi2oLAbcgScyTWqYojW",
  "key29": "5FwHxwNueqPS3a2hsefJFjr26o8BakvumbBoxxFRGfojf3YgtAwhg1AqvBad81uHcbZ1BBk4cyWG4mZWLYXb1MLR",
  "key30": "3wtmgseWSFVVriSNGJRMJzWhMJpv4YVgXYJeHpf9mh1ALjdtvAzCdrC93mGi7Sft4YGTMQeSYmkF65aoSEu18qnh",
  "key31": "3i9fzSqNBCUkBphrQdg4hh9Y8Ns3BMktFwp146qS3wHkMPTaq28NRSkA2mYxku6nghJ2oebQUvA1PsUyKqFt5xxr",
  "key32": "3Cc5mPVPEWh9jg9A66gkWezotchupYx8iXviYPLeSKvt7pVuALc6pG9jSKuHiG5p5U2CgaxnL78C1QL8xvDSZiW7",
  "key33": "4CkUeDNc12PNRfyXhKVpNTofaXbF1sJ9aR6FQhsjn1piHdehPDyf1p5V8cDiqcbY9ey592rRMtw37jw96EPPUtzc",
  "key34": "47X7TpJDrWu1XoLrpyVCEC6eAWRMH1btZ66hFmjoz41J8z2x5J5Y2SfiAC4U2NG7dFZiG89pC9PqXMxXxXwc1biw",
  "key35": "4t9v6Tcweudcz2pzPuYykXgywcYoFNz7wRoxCbLtWQzxdpu2N2zg91LbNuDH3qZsgcX2pV5UZBHZAJDDiAwXLddz",
  "key36": "3oco7Lfvzww4YCvaUUShiaEJaz3HYmuVwE5Jnt4Trrc7QZHmDqZtu2N5SaKFkyaDVoHZZtLk4aQnWiNY3BfQLkHb",
  "key37": "3qtZNN2hsh7CQ9e2zbAqFuEpCp4J8ptPnhtYUFBhgNbEosKWrWxwpS1jQeafcGsfnBpE11UrPfYaNKKAnTE6Jdba",
  "key38": "67L52qXGyruWNe2pMpxcDn3LdrBx8He5fy7fPXKpNAVh98grMwNBNFA2ywTuZEUGF3s1U7u9rDUaWbti9UVGt1d7",
  "key39": "2qSithmnA7jcQPXQw3yzp2qqsRw8F6irB7AN4icLFPqUkHeYkk6fMV7JyHDt2jCL77Gy6kwVM78SFbwRApJmrYZu",
  "key40": "3ve1ajUb7qBuJLcsoVnDpG7r1mWPJqndkgo7eUdutqnSVn3AbB8LFmi6cJKVjZm31Mv6XNdEC7XgLGVz1LjPf12N",
  "key41": "5m8iqVS2871QuJnMKpxB1CHfEhi9fzACNBAy4YLkYnfjPFgfAJa718c1Wx19qjQJk1RCjRwgdWqHScpH6JnxnLpX",
  "key42": "2nVy2YDmHJTii8Mt8TapT6AB3NfpH4VQSWh7NChwXyqeYeCbZ7kR21fPiZoscxq7Yut6UfSpW31umXQg9VQdBGxg",
  "key43": "5GVGx2AVnSpJyFSTTgen814A7ybGPMqzFFVfex8DQ9FYZa17ybyP9wdroaNZMFYTuLjWCKz9CDrGLhQpuE4byjM6",
  "key44": "4uPv8amKjzVhjmsKmpYvZSJu3gX56zvF8mnrDzEeuJCmstaVyURAiu3Q7WqiA1V37gXtdkcdCWUKZDR13PTra5pY",
  "key45": "LtWBqJx1dk23ZFBuXCEtfEoZhzBa7NfneL8E48ftufZFLErz6x7VxZmVqYgtKSWxpx3vthLAUmW2biaFFZfLXsV",
  "key46": "4VwHRB2sr7tQJFMRdy8aXM4DA79qWZF1ikbjAX6vC7pHQU5nuKGEoZd9c4e7S74rY7Q8om9x3CoHizdDceeqmgP8",
  "key47": "4JsxJtCdikFg7jovSDwH88CRaf6EsUbKMB34eb32M9fxEKTjAgfR4zKeuprvdrPMM1ccbHQCqGVaHQXbY2YLHcff"
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
