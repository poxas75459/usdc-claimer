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
    "in81gS6qxizbo8PhXWnhwBybMvxKx8N6AmE7oZsXZuPVntsAaUNwusEQ68x34HdXCc1fMttm6cNCLkxXUEpQKEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qKSnBTcZwUxknRyJtaPDGbtzo1gCdorAjM1TzteMgqnUsJ8Swgkvkc3RgfK1s4cNgBeLvgA1MFcWMZr4tPbd3w4",
  "key1": "H1azfbtxSuv6sRRZAo5mSevTRYisrWhnTW3Qu4eJ9Eh4tBgpCvXEByjcyddcTQFKNYSSXUGU26d8apTvjsSzvmV",
  "key2": "5sAuzTLKmk57ECt4MDoW5mCQy9iXkWAntz717zYM5YCkAHYNgyqiwj9HMd48ZBBKm6mVCL1jfmXDzcSTy7WcEVjT",
  "key3": "35SS3tqkScT9j9Q5Saudfb3Qx92FqWkFENRAnvbFTDURHtUbh5ZFBF9Who2y5ttYdxCAzsax8PQbU9Uk4i442i9t",
  "key4": "42cH4yqVGWf18e3eJspqVLc9qXD2DfcbfpBFBZxzyX9839tUvoWvDSxNSVTMu7HMksX8xwsSpM4QFk1HXwWrCGH",
  "key5": "sDnVt8QuLuQFs8tasjG6YNJoCCL1ou1DyMSsU8YM24jyqesyotXvfgrv3iW8TKRaFM1xRWHP3BeNsjBEpEZ6rbz",
  "key6": "3Qq5FodAkjsuT5KZ22GZvF2jzkndxPb2KFEpASz1CBZBVKLc6Bwp4VNWYFsF2dk8XUSKXjSPttqjo6frzTGLxUuj",
  "key7": "5oDKskefdfyfv4PobeZW8d7L73Dp3UgKg7imFzYxeXEgE7MzV1771uV1iZNLBwyjbrxmQfzKY1qw1jCq6qUbnmeD",
  "key8": "4SjuXPCBVroKw2RXrnXN4pLtuERdeXsqDW36w5iv5ABdDcYCb8WRAnAbX3fPJUumVWQyKU6fpU58ZtAC7CRimPq3",
  "key9": "4cK5ddpr81GwVqRfyFU964pEfuqoGbanJDpaA9ddxN3BRYfeENiA1gPoqkanftL3v2LTSg2aVfN6JxGvG2Z6P13G",
  "key10": "4ySjewZHFkDG1GU9vZVRemEAU7XqtTVkqdQpsMCzav5h4FVRLLt2tV5ym2oapjp8HXVbYhEKYcnq8owAXRtJr4A4",
  "key11": "j492owwuiXcCyqP7ud11kKvuvRBKGoqCNb7vwCPwzGt6WM2E28no5jNkm5oxhxXmN6gDnfVKK4ZFhRwcScm7j4p",
  "key12": "4FcB3fuvBL64Pp7yB7eTUMegbXNadKG8C6dFVk1witf9wyBdVL2KFQvEETAu4DXUcFnJ3cmjKDykEwReTGbiZWFq",
  "key13": "3jd9jp32KukSu2thb99Ywn5ni6skKks885MZHYoAxRVJfZcVhmgt6b7moztbdPSmyjda8QZtJ5yB6FitqxZCBv85",
  "key14": "yv1UvAcMqYPNoMRejdXDLZGEgp6w248QrmNXZwhME4NxAL9gy9DqogsqFVCiExCUghJyQnxvzTxpZWSVhZe3UZX",
  "key15": "CNJtQWx9ugG16d26d5S5njza6jqCNbdW1MpoYXjLQjy53kV8VcqNRevkuGiBYGv9KttC8tPmNZ8yufSW8FsdF5C",
  "key16": "3ZCrnmPZ4zgfEseAmw5DmUPZPDmR6X8TVaV94kvVGpwGebrQEJiq4vLKnPL7grCP8pP1JgBGJ5VBCb1VA95GPAmb",
  "key17": "4SomvGUSzHhHp8yose2q47kmb9nBgk1YdViFjYyKXGkHhYLFnMLMGmRwArALD86Fe1ELajcZDpLp8vAYBkzPguSn",
  "key18": "5hKnnKTchX4t4rzkGfCipaTp1jktArLjt4CMC8R3wnK5dYshoPBVMMkMaP6gFD7BkatCpEWeAtaii8zrcVD5r2MR",
  "key19": "42ZH5eBLXdwaSw5YFHio8jfA1T9dx3vRHXCrChwuQkd15GLUDSikBndzByv8JW3t21J9fApYsMgkBjg8tKqAyeFz",
  "key20": "2wX5XHU2RLgHvTKpEyTFhrwfbM253qyrHVtLiGvaGckr91g4WG2N9DXzXzuv1WNd5Jaz6QbiGFi9nhfCwYpuKDDv",
  "key21": "4uFDRjm7TLpyJLj8HkHdJ9SMui1kinQhhpywZ62YG2knHB2wHrHdkpnQA5oVp3GRXaiYBYN6Kjpqh99bXVGrZdW5",
  "key22": "ASycFy874fEe5QNAkopRjpg2QJ99yqfdiccvyg3Y25gPP6QXPPh8B6orrZmJTfDoyVkQyAhrd2CRX5DYeLfxhFr",
  "key23": "3R8waSdQGUTXsygn5bVEaEYS2cHECfjkoqhdAU9ahBz7XCdpARyKRVx9fzoHsmd3c53oJ4bLuQiBNmy9t1P9waqz",
  "key24": "5QemNu7MTmJNZ4ad4GLUxzX9swHZoqaSsvYxdumF7jZPodfYBeQeyBqbgzLwpfb7BbjQs6prF1hwUAcdhzQrHwon",
  "key25": "4rVXC8vCqxWYPYrtSEUNP9ywdyL8RoiZt1pbyQauetf3wrnWxYMGZVxXkBuRKCKpTrugsVjHGPLbDtBQJLLgEGCc",
  "key26": "r9qoUhaQvu2aHKpWSLjZkCWVmhgctAYmp278zvP5FwHe8on1cju7BudJckJUok8JJ5uxun4NNLiPXsqSuKmquLG",
  "key27": "5Mz2pGNr7tezBfCnQrFErK7FSx1FWQ5pEjmQ6Ko8LF9C1jpiKACkru3SwX5mKrdxuNNPitT1t5pbENk4TET2ChGq",
  "key28": "3MqsGGYWN8okjiJNHwMFuU3DM7CZJGHWawVdGZhHiv8CivDpBnJVY8S754YpVFHFBDbqL7U8RRhTXJWngMi6zaaQ",
  "key29": "fTidVR4UyU2rWTYS6gABeZsGSeiiywoCE8kKTm8tshoh6b5wnqVUHpn6ZyNZZiu3i5Zift6QEsrEBxdN9WEnqYU",
  "key30": "3HTwcd5vmfh7gsU1cMTxafyUZ9Rhf8A8LmgTtYJKZFrvHpgwVwhGZkmgtyiNMjobbTaHBpPb8RfAdCxttTCgkxiS",
  "key31": "uKZS4jfCNAUcMXoYEMUv6ZzdTMotb3ePZTwMqJw6smNBFHEa3th5GhgEatS4XrgGfAYLj2dzJZ1J2NKKh2bPbfL",
  "key32": "4RnpvyakDDNyDguSrt6Tq6VZ9p8MEQVH7Z2ACpnzdAb44mfpr4uVq1T7H9BBVLdBs1AM5PzGUtFa5LbotcCMfn8y",
  "key33": "3aB2AyMCPjBEBhMN5y4MXbmJRaTKjpaLTYvNym6EVa52RkHpBBjuPq6JvCLWC3V7h6NjEjThk6QCmwAjMN1xdjKm",
  "key34": "3ZUpVDBskMMcXkj9bge1iHLwQ7gNuQAcJDtVkgKFpbDBjRL3Ckc24NTd3hidjEa2gffRwzzbVet8fkXNFWjm4Qxf",
  "key35": "Q1xnbm4oK7eGLECmMdEb8zjXnF7Ao8tdzuufufTAmGjn6YtcPaTzFs3WbN8q8Hc2HKhNDPPbUoUkeFyjmN7TRt4",
  "key36": "3AuoAjzXEvFUQWZCrbFWXf4Zs9U4u11LJLF6G6ZxYSyHPjy5wjadM3a8UFBG4xbqUHHVGFy7YhAmjx9Suo2DKgN1",
  "key37": "2ySnwYU9Mn4zhq79wxwcUrJzNFdmLCw7rrRF3iHTS7sQBFhcrz8tMoRjYgm7uMNKXKaPDLqu2StJNdRE2Zde7mgX",
  "key38": "3azUTyADXKVN1aERwQkR24RNCAwdF9yyKEqLfb3YeMCcr74rf4vU8Vi1nYWMPf9WVsjbuk65y9PgAdHjQmbcrDWe",
  "key39": "HDPe2zvvhNpaN1PD1G6aMwhU3qwJ3nVM9sjgvxRbick7RzQHgoPyoCQ9bXN2G7vWZw7vvBZTg7WQoXXMiK9skva",
  "key40": "4wXADrZWoLJ3dVb1nJfc1VKN9cBPcvX9gVke1mXD29kPbJWb4V81kR5q6r3DR69t5enndKHcFGyxb2NBxPDcAAeR",
  "key41": "5HZeMJPAziiUg3xghcaaMLoi5XknqzKUAMpciZWDsKw3nggtkSq2WXkXWL1rw661ZUZEKHUmSbNiqjYcskLVgJ1V",
  "key42": "2YHXiixnh4yXtVy4d8jcVuLLRRFP7G9X35jmuvPuHoNLwBWwDCpMxA9G6sPiPTgsnmuKRugeDiXg7E5gCxB1q3ix",
  "key43": "39iWt5ZaEfBENvBiQ4ytJih4bpKmeusocAshDgwKJxG6YDgzfET82FTnWT3z6Hsya9PX1r8p1jL5az53bgzwkWL7",
  "key44": "2J8u4VmcBjWaD5XiWB9xhYMB1xdXKs7MErAbvEDbiV2ehUdVef5wn5BHdUik1e8KchEAxynjfSYTTEt8RBXanK1P",
  "key45": "5GSaWUZyQx4ogrc46ZwaCrJqzrWDr13FQciVy88UrWK4Umj6uDzK7PxANZM57FggMNsaMRyt1sbqkfp55nLv9eXX",
  "key46": "3KyKQxEP3wdHoEspmUfxhNKPAnGjNLVNNdtNM81t9hFi5ibf89MVcZJnU8KeU1pG2T38k7Jj8mafPRQxroYfF5jt",
  "key47": "3jCVEX5NLVRERu4qFgjxpq5GuTunqxy6Xi7PUQpomQtN8kAWE8FEJVLNmYv8qzob7m9HZT5EeMWowYGgJ5b5a1fs",
  "key48": "3Zsk56ENZAA234DfBUHjT62AFWZYmn2NmFP798EfJMpyeuRKmcudzhdaoDNcyMEEtbrNs3zgXx7aRrNKeb8e4mce"
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
