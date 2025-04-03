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
    "RzsHeo7zHbx6k4iZ5YmFLLz3Ez7s6QfBxLw4mwmscg5KTgeE2bCTsMByWpLmhZTqRobQXEwbqnoKUL6B42pyyuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EKMvNUTg8tgEDWC5XXifRyDcLMGWWJSRGeyEL89QuTB4jg36vu7nHbs83vwsh6wuQMmtUCoKWCHDdVwUtt96rc9",
  "key1": "4ZFhs3HcyHfhewjK7p94y658Anb69Y1VogLHqeRf67CERfP6HcS3TsAEKA9nrcKGK7hLXnqrQTYuoxLkEuNsmWzP",
  "key2": "2b17fAzJojEKRUFng97oqD369Dw3WbUUkAtyRL4vagxtCTHXeSfZvn7dMG39uYcBdQPRvpi3eaCoecj2GJwkFSom",
  "key3": "5yqmn4kJXuvaNnFVQipo8JebiPZutj5qRyPM4akcTycJ9Y4NjgbHtQnSMS6dd4LGpZ7NRcdLMo3MQmvHKjDkxStu",
  "key4": "33fHdPBdreqBNqgYSTkYxq7WSP1UHeZSw6aeS8JYhemzkA24KdKaSbhBu7agVaU6t3xhkc57sBWSQ9Gmy2sx5Wv5",
  "key5": "eyBYoo41MebdSnfXSd9aVygQ6sPeMXP8ZZqS1f2Kf9d6SJBcRAHcpaqe94Vg4Jv94EvVEXCAzMAr8LdC5uhJpN2",
  "key6": "5XAcCozE3WMDLryCyekPCjvSBM35cY8CKrKPSy44D8vnYmLoDRdUhAv17ZR3uiRrGUjB4AneEbKGRg1D4Xrc9Z62",
  "key7": "3RZNGx7aRC2EqBxxNuPcYPn8UyfP6pt2PWyJUMVbicG3FTj1DgKvYfAuRAWvpSyzwd3oDeF2Fo552MXxcEKa9UNM",
  "key8": "kWR52caxmZuYb6GzXWud4pagr1cAZGxcp17MjNhaqgMWaNjiHBpmzju4frtWEvWZzXbzhLPS1kpwZ6Lc1RHpNob",
  "key9": "q8fqeNWR46WZgEz9Fg5RNjJ4nHYmgVBfSVjVfRz3JUUDzUnyzut3YSTmAZhhtwAC5LXqe2ixmXnh6a1Uo2ABh7a",
  "key10": "MwoVyx5oGmQ9c3CgzEyryNmPrDQFzQiRLK7Y4EKWia441LPpeM3eSQAtpcUT3h33n6YcHPQqrDHY8WxGUqj4jcT",
  "key11": "31MCu4A2rioUhaHxZZnF4uTc25GR5LF7LtPfcTswNbJbYxiKUGrxb5C3eFUdPo7BuHY9dt6P2LBHFELjgAo4dWpu",
  "key12": "EbujrKPMZ5Y7Z7rQ9yKQFXYqPesjWdN13etTQ3q5bzc2wQhvW4nEQKb34rceH4cVitMxbeF6rkPSNDzRvTN66uV",
  "key13": "4vKrjrhwVkLBHRRtfU7qu7UqwEmSD9N9BwudNBJ7FCqi3B8nVHb1753ZvBzFyYv9MUwpaaHnngheFTK15WgxhwEw",
  "key14": "3TkiMLXA2e3RMcfkTHWKcWEbqLyGf5Yczzxd9m6pCX89GP1eZjQy1mzed5353HakfFdRcdJBMFpfte76ZgDTFNTi",
  "key15": "2cMLTCvucZhjvpLTC84epZudt8PAg9qCz2wTJM9Mqbxz3b7TFwgCmFCNdkAaxupMRnexWcsyLhUvmuVfhAgWPrfZ",
  "key16": "3zAF9rDoJPKy1wysxUXnHFzyBGtU5xbUXBvG7voR1Ag8xeUBqHJWfnZRGjZSfXfTiLN2DQDxkf8aBFnqMs7VEGLk",
  "key17": "zANrcna5e6QyzbWmx78U83oDdAGLYS3NtV9nea299KSwj37WDyQRR3t6RWsL1k47DxMpNXJk6gnurBmowD7jm88",
  "key18": "3g66Ex6qCmZUtcq9raDKuAFiFbCRbuXX6PQDvhAzJoxLmCQskxeYkwj2dtryCB3MntWrsLQJdiXWTbeTpEmPAt2m",
  "key19": "55TsUcjaT48VjeVzTZHah4feuF16hQ8NyvKztUrLzjaPAr78BbLVP6Tctz3wfbRjPNpYA9REqyFGTaUbvVLgaD5y",
  "key20": "2UTjHJ8HkuZdCNsJqSEtXbv4o8ViXm9gZ6otBL7Fx4FDEsBX19s7ijbR1LZSzwzGLqhPafEHse1nLyV3XoPQuhAa",
  "key21": "24sk51uwdvbzGELxoZc6i1KEa2U6r8wEeUg2WfegorL3nNuqJL3QVDpyN47KndpUhiXVHfeXVeRjCvmv3BCt8ye2",
  "key22": "54JPM8aF8vJVjwk3gFh9QuBkBe6RYe47uycdZXua6DmFjeT611D7cnuenJGSavLATSVv1CojBeBf9asExK4hLkAe",
  "key23": "zSJpSLS3aemi4SpvvXQp7Uqs47mFB4SFzcJMgJEfJmFrpr4PsGbX7SS6F6f8vMcASVGwVnfVWxnxUPhwYKMR2Mj",
  "key24": "2X99nyxAhsZq15DLRGNWgUFrkAWsrCQ6wyZtRXUYxQBUNTE2MfAo8S1y6mWRmpJwA2ZnADbck8MPas2faZzkjc5B",
  "key25": "4jvkx5uCn58RSexKoADaA5ruLqdzx5NH49D7FSVirtu5wWfkFtxWEqf1KNM4xj918uJyRbA2A9d1Fq4poT27iurA",
  "key26": "5atrAxJSd3hYBqtVhVscHWmY2uibwz93N2h3bhS8C7tVk1apTeKWWXeVUMXoSCkU3UEqKFqfM6mBp2evDpMNGp3N",
  "key27": "51MMPyKB1n5u9kqpqozcmQtvWijwvbyern8couJRjWicSJNJjjuhMCy9QAnxEYrJkQTciCSNxmMV8rWApWeD7KZC",
  "key28": "34eaoZ79AXvLC26phGb77qfnG6J4vv7pKWgAXyzgWn65GzZVfracHxbEyPTHDm6jwhnFNtkA7BV4FRXRTLkHmhYj",
  "key29": "2Xn4hBT9AxUvP5QpXAgv6JnCphuU7wAPD4zTCpT73Gjbx48TiFm3hPB72gntmusvRTrEzuK9V3FkBBGN3SneovrD",
  "key30": "56V562T2rp9ZrtThnv7Ce7pmERZXHn2gi2P1CLtVWxu7MWdQbdTBLyYYPB1SqQJ64g7hP4h162n2MdgcmPGHfTpX",
  "key31": "37xqixrPN4zNfHt7sJkyKeKHyBfs3qTYiFNmt9pLXB6YPyv89auPzUs9UDAkP67w8335gA4bKQguCTWBb1JchbXc",
  "key32": "2zBSei3sCTzAE7PvFgSzRCLhp86VVE24Pg1jM3nvCwPUBtWMek3m3umxYGM4wG2SgJF5H1ULWCySqxPpTwMW2pW8",
  "key33": "3GaEaENRcRrZELD8ygw7u4X3NoGmTcoFJTPh8SeZbWBBapoMw3KujuHKpwWDD82TzPT56QAU89TZoz6p1NWxvqEw",
  "key34": "2oKBebSVeSshBa8Kxt2ZuoVDVFtFTdmUcNSJrAmtDbaQ1QjYnLgfXTEDWmnD8DbCYZAyPjneXc9j9Qy2i43F5Z88",
  "key35": "3UwsTjrG3YLfEPJbaYmRFdut8ALiTmKs1n8GKCKPArPutXx7xCViPCLyZeB9HzYHbmZQsdmm8Pot9BtCcLJarRre",
  "key36": "4K3ErDKT3UioEkiUBawCV2HchcqoiTEWogNdiAma2nH2qzL7AM8SDU9qwJjsRedpE2axuVyaU9JdDKjD4XuthLPW",
  "key37": "49U8mV5GRXBcVYJYg5MnS3rxHbrT8aarG9CHgevc3pm1LHXr9oXEyCmXG3gixFWQtbztz6m9qRXqZXa7yf6Y1Vrv",
  "key38": "2DZtyVyWPKqE3imzUGjLBAv36LPov29nH15pTy2MGHcUasYe8ynxmJrJxR3wiLffHjvRwX1e6FcawVdToXrtkR9f",
  "key39": "2fyDaaY2zAoK8VSdu4D6wU9kqYtthvy9KvoLkYXPcdMuezLxrJMTbN63d8iDZDG9MsyRfuKbYkZif6iLP2WdEKQ1",
  "key40": "3LebCY11xMPrhgMdW5bd2c4zJp3uB9jQLgRNvufzbQdssxHx8tRH6Adxe6wqWz9tTAqTHdwzkGrZXTBpLW9JeCTm",
  "key41": "4B1JXHzg2uiC8jNwPfxHcahBYGV2HJPt1sBAGpfbQ3pR8idj1rKNsqHaVuh5J8NSKAz7or3Gg6oGMVibTUEzKK42",
  "key42": "3rFbwweEPNnbbSohDd8X2TP7EDjmpC3aweuhpqgEz8Ktm3MoWoaMrE3tSPnLbTN5pfCw8D7hHiAH8NN5L2DierUL",
  "key43": "2anskfGpK1p77UAJQKgjXsQ3BB9sSUEzw1RQF5xjb1cAbV5gNTf9rYAU45qLMYuqeEkFaejTTKPF1nGT5Tw5JpyP",
  "key44": "486J6xmbs5CC4dXBcY56Zxm6hFViiiNmwhfWSJWsUfKsVJCuLqGWAxTZeSQTbh7p6vyyA4CuFPCPGHsiYPpQjk4g",
  "key45": "4VKA4J7UjwHBm22nYQVoHK7SHBd3Rd4M7sAwJSnyCSkc6VWBADotYEPB78Z1s4UeiBFAhi3MoC5RWsCTJVg5ob6M",
  "key46": "NuM39M4UbxDdkRvyg4avT5j7abC8hq3FqgpHGMbwo9h2EDKfgZzAHKp12Qgmu1TKmCMF4zEkKkzZVkiKeE8kUTA",
  "key47": "5HjzMKheib57eomuXYv2TMU9td9ZmDKmQ9RpWY2BdCgppmzoJ4T8xTrumSUEFxQ7JGEvSuN4FVxbaWPiGoFPAgdE"
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
