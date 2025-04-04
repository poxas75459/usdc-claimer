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
    "29v2b8HQqqrrnfyvmVTajfXZm1VXGp35NbUhq1XHzFodtcgA9nS89k4MQ7AWCjn5HbTAgF9UKSRwj6LMHn2VX7GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mEbkp3DkpN6fs62ai9x6dMfyptPnndfCQLqJuPP4rrq2BoDNhDPiE9WyEiY55vTzbajiZocsxKTDMzX13NFNd5D",
  "key1": "5xsZpYWNPoufZVYhoCEnJtsX9q4V2QT9QWfv3cfYKNG46bNSmjyqdgc2ij5f3o8LMnRJYhJumWwuBfaqoT7YWyLX",
  "key2": "5fLEDp3tnwdRTb4hkd8Nwef2VyuumcHHBuoC8mA2EgdvquwfDo8wRk9Kbk6GrmxLQAuoFaKgbSEP96UQLL7wNz6p",
  "key3": "4vr2q6dhNGgFi9dF1tp3eMbHWCibsPbpw2G44WCTS11Q15h3brhJWSNdHcFQ99UECDTMKo2okvx4kCLJSgXL8ih1",
  "key4": "5cH4v8XU4JpTS69q3b7NUoKtqDxDkuRQEau6cnN87SbbPzRrVvEfmHNchVExHyY2DLa7aY2gojU8CLjUKsyMChfU",
  "key5": "43pRr2Gi1PsMrr39gPcojbGvJBKNqbsHSLFT2G8W4WJMQgVGjoJjmUTzsTKS3oVuQzRpudKTsPzVqkHd2oEK8Dkg",
  "key6": "4ZF9z6bvBMf9XERVH7GrfEEYGccmXCB7qWf89AHeJq1yK2vmcmsX5fxpJ4hHggagmB58P9gWgLkN5mo3Ts64LMvm",
  "key7": "5sEobjcZk4jTHJ5FLDHtCXdLD7BsoLxb2tNg3VvXLuWHyhqE4Hnbwg6XbCWg5HYufzYWQXbqWqjF6pfqRwygHjsc",
  "key8": "5mrGzZovaCreWfhoxk4gYFsUbLNhSp3KNSA5ZM7jJAwcHJyCK9JNqttSLMiSh6qxx7epm7QbJvsbU6U8uBG9XnEQ",
  "key9": "3CExm3eyZ4aH8aswXaQSwBcSezBAuH1vvS7yamYAkBNJNzRX4JDN4TwEm69svL5Q8F47K5m9YweJ8yUyKiwRpLLM",
  "key10": "4CYNQ95tKEk39zVULwmsECyK8YumPV3TdVF1nKtrPiRjeoQXSgkhuEBtLbeDEPoUs4UyWicdotGNqTFADCUctkpN",
  "key11": "2oo6E45yGbweX7TkcEwPUufBkKJ7urTnHRjGdTPouT1zQReRMwwrB2MnHDsfwREZ8PP7gpSPSJdaJD4ABHKWjaV5",
  "key12": "45nA5AZUQjy5cVLrrf1SrPZNUG4TkSsScbsyphKfw2NyA5WEuFm29T2Y5XSUNMkrVqBNuYGeUtARQgj2jJwJPPPk",
  "key13": "3QEBfbcPPKPxBnB3QmGXVnugpSmeLFt8ZNxRTfUuLPJNSqULhEwm7jK2W1Nvc3Q63QYThyywWcqSbhxWJ5Yhv3Bi",
  "key14": "4EHNU5L8YGsgvLDcpsNJAB9aqNN42csS92t19ywAWyNBhjB3ptWWxECRvBvxyH16WKzKvNf7WNCRXYCKWGGDiwFw",
  "key15": "651L1ACV4f4xt6G5HhGeaCTK1zTyHx86e7U7Tjf1QdzbNajck87JdHVxPQHyxGBGrSNU2F2SaBtUrG9F1LR9Xdcn",
  "key16": "qi8zDTiTVcJoSMznjFJ16s67xow2i7vgr24DFcGLpkZs48u5xjN8VyeKnLvnM37xGXMKDj58Q5w2nMfPYWshYVP",
  "key17": "2Y4Atognc3yxCi8TQZPUtVHcFnaWmGgfCW14RrWMp78r6Feh2La5DdgKUgAeUyqpcpeTNFEVa181L5auSSBPiMnG",
  "key18": "5eW18UdQrpg39oxkR6hnVzPqhM59ttmpgWG3mpRQNiCyeh1PoJC7UpBxAwkptaQhG47KzFvfqVg3oqdFbRaja9nB",
  "key19": "5HBxNaGMYhqnbZbb596QbBv8EcdJAv6HJ3o6ikruoMC7PTRwNWTHMWWqkuHtneqrJhWn8BKT49NF1aNKruyLYHDw",
  "key20": "3NcoGzbsocEGFALUQkUi7LUHHo8NxRCLecTSPcRgCQMNsgd61b231cLVnLqKo7RMCNqoP3gNDJv4ccLnszWf7vn",
  "key21": "32NX3YtyUsjxiEXHkMMu3an4GYfrkNxcdV1nAUmeWgwfPcE3QmnhagSNdjaNYrvWqjprUkzdEh4V4jfHo1JuffqT",
  "key22": "2dnQEhjWWbZ9vtf6aJdkEYTNcFx56RQQcVqZsCAT985QDqhW6R6MikzxMBhq6vSyLAN4WQdTVDunjpCzHXe7xi74",
  "key23": "RnD9R11v9revuU2LVRVFntnokq1mBqGmTekwPogZJUHqN9EGCRs7fxRA4gWLNKxZLuk334ahQCMVkxujrontwAR",
  "key24": "5Go8ToMCfPLVmc48HBxMyuEfWKqMWL7EBtJaoGSQPcp5zjLRxuQW3tAA3x5g1rGaKPZTbq3E57ePCBotwtC7QKGt",
  "key25": "495tSuLCm4EsSH4AvP66MLePhBVUfo5dFxVfzy6GVh4h7wZcgzF689872pNitoJJPZt8PuxVmZgfeVfZoxHBzcWS",
  "key26": "2hED8XKKdS5VgmWU5xJMNiK5pdZYeyeabYwDtqfzHunfte3VE3f3ZYUuYAK2vLRkbBUgcfaCVimsGdfvfFgLS8v5",
  "key27": "56mSA7pH1HaH5VLpfWh9jZwFVxujPr7KTdCzNSCX3z6JL2LT7w2CYtgXNQUbqKAdnBPLn3tpY6BCXZUfz7kH2spr",
  "key28": "3qhvjiZCVwYifqnQjALnR1A19oy53qbCpLyfbK2F5uhs9xYF7ookHx9DsHnGsokF3KkAuNnsFe5FmaaTaorPQ7sQ",
  "key29": "3r6G9WUrSokaVXnSAQLHbiQyH6od1rXEWmRSD2eWMLbhitHCbZR1BS5uwoc7qPEsanfdqouxFafDmbHPMwbqwhNA",
  "key30": "4v712BcpRUL8nz4jyYJUuak6ZwR1VZfs7pVzmdBaQ6YLyDU6M2PuJRgdwEUH26nz3zB6LYH3c9cCtt9gi8iiCpf4",
  "key31": "5e1M1YisUbbMVFSxpe22fcoPgy9xxd6ahDkWW319BtsjA8Q9xKx3rqFd2P7KhoqEhJPzm8RCXMCLyerZrbAPmmyy",
  "key32": "5KsQg71n36GTUZexnMe6mo9YetmV2L2cf1FmNNxQZhDZ9nueXRKRn1pBfL8wPw1YmHuAKAs6UbyGQQdX2jTgMK3H",
  "key33": "5BXh31S4jt5yAen8oEE2QSm7ZfQy9Rp2nMVY7BCyTnX7DhL5J2vhrMwps1Y7phXzPJSqN8LAaobNwDdMWxxTco7t",
  "key34": "3CxGkhTiRmfnWmyoHpdpaXu9AKvY11816V1HguR82D1SrznGyX1zkysiwxoLgZzAGcRKpr33mT5xoTLUNFnzQHJY",
  "key35": "26UJCAi4YU3BFKcWpSG7kS7e82xLhja1Beb1cbTvHD5HL8tyJC2JH8jdxJDZT32JNZWMV8JhDb7BajAGraU3noWb"
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
