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
    "LBqQkq2uYzXqYKcFrE5XTdGbLtS3AQ3s6hKVCdHpyt1yrGbRofZEBHkbvpf113vRfHifNc2tJthTESE9zJNahk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cg6vZMrRbhUouupDqwk52SRbjHa2vGzpNjqc59KjFPxz9z8AgodEGYp1YdBfaUUycLg5J1qTJyTLLjSXc3s5pRW",
  "key1": "4wVxXU7uEezxK5iMLyvMUQX6FYQ1myaezDE6ja4CYs558iKCLcQom5krRemwuKn4XzB4Wzbicfqa5ph5QgFqKSQo",
  "key2": "2Ten978tqCX3Hpff4zpYrRP5HdNBwBENjZ6QRtaKWr2eGqQFc1zCjVCn5ftnFGKKxcMkXAB26dCqCpFn8wgij3PW",
  "key3": "H3JtyPcTDybsLuT62vkynbcLW52NDvwJV9uy5WnnXKME4FGeNt1z93UCJRY7aH2kMMtqDcHsAJdEPwkfKAsA76b",
  "key4": "3KYvJhWxKU8EStd8AjQp2BP1SzgvTb5ApbHy8sK2MeuPSCRB6HrsTihXNS4VX4doqhRoc7MzzhyXoGaAFqQ5G6Qw",
  "key5": "5UitC3RcjW7AjndRQmXJ59Heh2QEDzXsmrcYPNma8KreB8Aso2wwDiwNsFooTRmE41p3Gi2zpPeWWVRzSvUBGpjX",
  "key6": "3LwSBTcnAVJtmwQjHwYKLCYxZhxzKWXWgNCFyPQnXmL2f9N8TURX2QArq2rtu9GzSVbJh9jyGnMjvcbwCHCHZVpN",
  "key7": "uY4rN3vxhdfqeQiaUUemkqyYe23J5D9rGPhT9ZCWMdKjVVQSLyaTJ9ZjbR68hSa47bayfGw3MjKTyLP1HYEGpTf",
  "key8": "3mBhVCkGLr4fi1kY3vjZvaqDUqVM6Gktt4aoajMSdo5YW4XCtCiXxTfgkCiLSTchq1iSkMAx8pujxNLRSpwwJ23q",
  "key9": "29A3arVR4RWm3MXGUJNkrVnQg1xTVNLSEwwiUTEY57MoiZ2ftyosDp8VHjivCdHXDCHqsSmnofZweRM7zC855Veq",
  "key10": "4pyvi9rBby71YArGg7UFc55fb8JWMWCDLrAn8XV1WS1SxLrb28ZQQJzrHsPpYkGXwuQ6CQW8hLCRWtvrMR6KYoPe",
  "key11": "2dw97fykjhKif1p3Bh4smWBqiBAyToP8sxcYmnBh9Ef77zGnP92Ze2i2S6nMgsXL7aTaup7uW2mHF8HDGcimFnHK",
  "key12": "4RfsjTkXt43GXpZqPCBWyXSnnxtnnc2rsYUnEqSkX5uAt6gQzYTYJWAPQQGtaF8e7npLGJAgXZNS6ECcfjRR9crs",
  "key13": "5MMjfKwzB8Tqt1yJRbhzz9qWV4YN4V9ERuE8xyHXMsTtR2NL2UXZbTdtA6aLx6c6Fz3bqyA7GrqCCN32CkeizLv1",
  "key14": "5z9PFiDf4hexWDLFawn8oLeZFQHohYy68uvXmS7HAqU5Jf1ysgVhiNZNK5b6XcjwvRwWn3hSxQ8NwbbzEyTZv1Bg",
  "key15": "ryiNwCtdvfx9ofHkfsmYjqznNXs7Vz3aYhiPAXoFRk2BRZtvsxEDFuekNY4zuFSpC9Uq8Auy23VRePX9CSDFdWT",
  "key16": "3PJwuja7k2pxJz2ULm5tXptsstsFcopiqtYsVFYRiJRLjMPaxC8KuAZPHRnNADMj6BR7YKYsaBREVnvUzsQtsDV5",
  "key17": "2Mbczv8on1XbxW5XtDRfZJzGdYFoWJh1bdH2A5EkZEDfSMaochsxe8ZWnR1CPcVb3qoeuhYUatjqFQpQFkQNwup3",
  "key18": "5xp1RnofwWk7ViZ2xyDtXEwcuMWgEvyf8ffU1wMgXbEY8GwWCopKdXF2oSJBSXCbs7uVGr9FcbJWEa8tpjowEg7i",
  "key19": "4UfxBM4RyPHPfTvGy8ZjsdbMscNDz45N1fyvG48KMuWRTd2DrqoUsetxa8CEEpePPrmkhyWJdBrbEh2bsEFopH27",
  "key20": "66StZdjVe1Kzu5yFY8KEgDJQ2HmTXweBJNWJewGnAXfP2HiP5NNY4KFsmtay1QhMYh3Rx1hLAmXMw5M19v2628Ww",
  "key21": "3FW6EbAPwPmtaG5hBXQWYT3zQL6uvssiFMVxYT9QJF3ZfivHSL2vXKdNnceoucDgPETjvMxzff944acxiodEJDzr",
  "key22": "VdxWA7crMJWAL74DggqYsrobYEp3KRch4qdLtCQiCai7mF3nBXURx1shUnLSkvugFPvzzTvNQnsw9az6uEeCGE7",
  "key23": "2hupUC5Lf6hmmT4wD7mKsZek29ogzJiiAitjVNr7Qr4mAMDC2ZjL8w4q3S4pKmuU3vfoEwEYZ7zrP23BAmoFgvR9",
  "key24": "3HxeioyYYiztQyswnenBhXjNtSS2fYJk7iiZwKZbBqzkQ6WKsLXhcxaKiwYjeugxyrQiNwowi5f3nnchEQZyCF8v",
  "key25": "6bX3VLqpZCWAgMheJREVd8yfzE4YtcV9GLhzhrE2yoxjShrJXq2LNjT9qod3zChFKFuJKGo4Gh9KgxwUNFGCt7m",
  "key26": "hAQM4gg2Q5ES672Qt96jKrMHhAjHS9Rsx7y1uLD4McR3b2nh66W7r2o1fWTgaAJgwsRJtt6398yDnhi19iusMB2",
  "key27": "AwAKHi39KLzoPViHeMXBX2AnE3EcRg14sshZ2Ns7Tg1NJf1UEazYHr4YiLa7dTjt1DCRMiTUaT8Uvnc6HQ4pe6K",
  "key28": "2JH9Q7gosmsHG6LQuxh9DXKFtTpxcZC8oGisjC9LTgjPE6TpHVxU2NsGUuQ9AmbKrQaANMzp7Uya1TXsEnR71zWh",
  "key29": "5adcKdSZwocbL4Ud9W2GLRd6aZq7Rb4cXhhMoqzEEeNBvzCAuXEWPr7mv8qsefFNaf831tksEeSuvoFDS6rAph2W",
  "key30": "5rdrQd5D7jBts2wREXPtac1m52vvr1QkU4DN9HSGn5CeSRD5mGgSMKj4T1QPxBwLptA5wPPa2LowSPDXGAwt4Dcu",
  "key31": "5ZfeETShDiep23p5cntP7LJvSHDexQshuyaAAeRpYExArXKdiXoEu6iq7BAVAtfT87PXGmoR61k8tmXe2u9HVuD2",
  "key32": "2LPB5PfYqpbFhB6uMARKqoRraEVSXJ8phH9PG5g9Z85x3F8J4ePoBpxq75CezsrFvCruhSjJRaybUa4iiRuS5K8e",
  "key33": "41SscCCbBoyB5mqk5gX88zWzstYDY45bBwUd75DSvgL6yKDbsAfi2342APUr47tF2VsYGxFJgRNFz2TETQe9KezY",
  "key34": "Dad4hgdFrZasonqeykSTzVR8G2uoNxFYEnXKQp8PV3hhKCJBytJy4Y8nem4FwR2GrLhPHAQJbyjmcqogrZeCJUK",
  "key35": "4US2p5NaGsnnNvGut7aNzz9uXjh5fNjJnSeN9HFpydoHjF2sF3fxeXn7Liqax8NR8sSgWGZ2UTKEyJo47J4cAq97",
  "key36": "pUFcpqL5a4oDejEXzStVfiuayzhF2522TZLUCwYYNpr5F5szGopb6952Jy18Nimj2tdbuC9X5eVKwM18euE4pBr",
  "key37": "4SkJHkD2U4vmpXTdf9AGMEhmLe2yDLAtMN5AqZG1oJUq1WmrJAixwueqV38po7pFD5Y94bExYencc966QkYM6NFJ",
  "key38": "27G3tTuYvS2FbR1AJ8YcwNnSZepzJdMh3T2799b5efYgSKQ5F8WqSiewuXZ1unD8W9eUUmjXxDWwJFPb1VjTCAjS"
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
