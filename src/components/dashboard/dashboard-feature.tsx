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
    "YMT6ymn9CGjhX8ixuMQCTXkBbqJHi2pHiwMw3upmNP2PC7LuWcpgHV9ZUuJX9jtUEwXTu8yBfMKxzzSpNnc6U6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kMQoGvujvdT2NKsHosfLG7d7dT7h5J3GpPSbfpPuRKD1sNxX3KX25sEGV8wsmcWXLYqV8gvt4n8Pkn2hG9teCf",
  "key1": "4wRYPxPqEUyane9TmQWRxZER9kVejfx2si2J3WKbE1CHiJr6RDbeitgiiRhq98VnkmCqjfGzqNbo5hhRs2aqLShF",
  "key2": "64wV6MpH51n64zCNThpsSYxzWhVMnjo8w5Y6NiXU2cQ8Vq2dpiMC2YThZcf2cvP9DeM6H3c93P3sya9Eq5K7TE8E",
  "key3": "65TQ2sFq2DkZacdsLQ395dfxYSZgoxvpCABfiDjCTN1muAJPFt2NxwjqiLK7ir6so6h3RJHKdDeXmRjqV3eVwrHw",
  "key4": "22KVuqDUXw2JYHgyYVXbPMb8yKYugmL5ysPA7g41DjcgLy4kQAHhs2UrSt1FoHEWkvVYZiNdt1ZgZPFNsWwf6Lji",
  "key5": "5NHV8Y7yn8Gzzuy2M82n5kdRSe6kgDFVk6AkMXiFngqzsoip1X4N6fr6sEPfUUjX8mdo2tpsfbfGbnKgJzK9qK3V",
  "key6": "4ejiBRAmp4KneMpgtMuavHhaNSxkHbKP96JLaTqDYtzuxwev2KtC6e4kuv1VwCNGAUqpMeQNGDEEeDvpyFGi2VU9",
  "key7": "2wNV38SKzQN2pdRS5PZ25kFmDzRrH3YLcbVr73HUQAruzvRM8LxqvNi7i5pMbN5PavBk9vapXhMUZJjhCvkMRcCC",
  "key8": "3gXFALjMiaTLStYeEH4H89n6n2Pzt5sWH8onEtNo2Mn41HQCizrjUJEf2etnDUa13Eq8Pukx4wLLQ2YsXsozR9nN",
  "key9": "2VZfkq9KswBHdBLtFCzrabFhdtgXSauZAYd9LAEDG4kdcahR2dhV5H8Ak41WBYbjgzxAAirLStduNJkMAcifsiq1",
  "key10": "43jQGbJEDu5K2LLLo7qrcvhb73wv2Wvg3v3dk88Lkfk2TPyZDDkzkJt5CzNyAegcTaXnw2Efd31VFtSfy1pPc4Sy",
  "key11": "41miL2wa9KiUu25faYJXp9bmYnWRFqoosxWDK7cyStMqyNjHSjm2RC63B7Ti2rEi2SxQhi5Vsrh7XqdBWb9YefTt",
  "key12": "3hRx9xmXDJPGpB1VqqoSoHauurqVtDgog93kNmXffgWH1QtoJGf9KBjNjniQWuLVd1J1Hi5wkzbKLZ4tCkwnWmzy",
  "key13": "5xiy4yS6WTRqvoGguQH2dF8Lgtg3tomWg4RkPUC1oFyGfSqic33hFcN1fA2ePinxp7ZmmDMJMy1ubw2iMhGkb5gT",
  "key14": "3BRakhmRMPAeaSYRRbjqDtYZp2XipME57TMuYSp29nXDfYhrb5LWtjQNk4PWzXVJKRF4wpRSMdHxK4o64Vk9LNZ",
  "key15": "2j3FxbPQF7BsFEHiqS9E4FLzmgXKdTGJDcvivypzv9QwQK13ZDu115kD1TuQEPcsLECKzfnLGC5u1kh1zxi9rtyw",
  "key16": "3ZPWa76YTqtVY97n7MdkLuRVs947HRJJv9QdYmCuoLmA12UCjZkNvoqmtP1GHEzghorz3ZEJKeS6WRNGArVcHEet",
  "key17": "67mVUbRbsZcK6JDrFk7KNxgkivW3PKfMTXqDa1G94oj4nqef3JFHugmNAzt8yQzjjDVnA8xC5hnxVoAECC3YFuSm",
  "key18": "24ZKhMNkMnnSVvkHso2rugL2xg8KpkazveT9JrYq5ewapZXsr1vSxeh6p8kUEsahJsBwkh7G276EaKKg5FmPSBxC",
  "key19": "4y5Zi2ZZzb3ZPW2Hef5GkzoxvbN9dpa6moUWMuJ27uyy4UTcpN2sFF7oJGyYVCzBQK8y3DFyjP2E2PxLMSUHjbR3",
  "key20": "5dvpGpjoVhk96kqq3EVQMLmk5r9cASA2HM8iCtCSfDFaj1cTiKtht5k3mThCYwvvXoqZTg5jxVHHpFNXJjmTsp9Z",
  "key21": "346ZJf7QxKhepA86LrUTp2EHz61s6cVnezwDY1VTruE5ynB3aXk8pS8ZbFTNJrawabhhmLGHe2UrQU1DFZQTczCm",
  "key22": "3xVK2RFiJTspEqkVJX4CAagfmyHAAkZngYDvy45oPr7ao8uPNwRmWixHp2x1kvW9A61jRvU95JFRxug3bdUqCjG7",
  "key23": "3kEgd9HkgRCAJ6QKrxSBSuy1T9FK9qjhbdrfeWtbTGH7mwgtQQsv84xSCFiCbQJDwB3VUdd8AMwMu6S76bSQXjt8",
  "key24": "27T345274vZxwUprgwwjiy6daqiGXus5w8H6TZXeWV7EGjEWcYSAwAqX3X2cjRcPP2K3zout3BzrgAx2hCD31qwd",
  "key25": "2aJwLb32gs2cJVMBzv1925d6hXzqSpFPxi6VDxiqt5uhEEU1eQYAckT2ZoJRTdcPX9L2GJ3MKrHpSZwegmRYUtSH",
  "key26": "4AaaBLTFkAy7iVAy9VMYhQ3VP11fEeJvtuWZw5TDHTt5RW6cHmv67CPYV1QpEUN8gf6xmEpgcNVWiKC71PHKyx6W",
  "key27": "SxfzzFP3YomH6XgwFBGxSMDNCYvbCinfaW2FYWLKKPKgf3w1FB32pDUoX4gEh7NCWNqeyJCJofS7eiNSXvNhBpb",
  "key28": "3t2WZBWsHy8AhFtDGL7Ed4tHL2dLe8vxJRXwq84wmf2SHyWbt72zXPdMXSnaFmW2ynGnsJMk1AR1ik9PPwCqWqVo",
  "key29": "61FWwBh65UW6LtewXn5bPHeg9gEtmqLruophQY4SVvyT2PaPmh7ZRRnxLypNZq6ir7dfGEXkYCvm9DPorg8WS4Mk",
  "key30": "27eoKXakc82AhD47K51EdgyngFavkPB1fomMkGqEkZpZoWWS4f3TyCwNzcNjNWGZzDK4LxvWihGcKckmw1RUjZDC",
  "key31": "4x1HLPWq2Es1fodRziv1cT8TmSX1YktGHctK1Ed6NJqb9gEdVwYcS2vTzoq89NoWbwtQnfWQqBtMy5Erfof8zcK9",
  "key32": "4ghQZsTwGQ58PGngX9ovp9TEZHt1r3oWst4N15hVSyaKdoc94Q6btsoALgZJwJiExEV4do3PooFdh6dnBgvBL3Bg",
  "key33": "3i1AoPje9wJdDx5CD9VNrLYUyQ7oRkiMEaWmkGy1zSpyhdQkUK4QXnAU9eWV6bb2CTudy7y9S9fSe2SSUxYiUBq5",
  "key34": "496aX1F757YYhQZ9knWZe8nf3r5E5bJxVHq9VP5CCGc5dYHPGpUi641vfzpqoSxZMWha7Xf6YESnjsJ2NhxeBfLm",
  "key35": "23DNvBRL42gwaLWfkFwXzFDD2f2M6fihowU46pTF3Hr1dwK2pUAJrxNesxVFe4BKdGHvsktcFV8JfktwVNwgNqtB",
  "key36": "4SmsuuoSm74rrbzo1poWr6B5hP2JMHADhCeJrTdaWQf9FSpsuGiT5BdsMTtn58py3WgTRgprstisyt7hpoUH969o",
  "key37": "2dnxKYBz2E4x9TBjYmp35D73estusYmqhJaHGK68iYEjMWk9GFESAVvYJo46BsFHnns6T3bpGqnK85mGpXGpy7kx",
  "key38": "3TttA2YNvQUvqRAmrt77NeNX6fquBziS31wXsFVDT9XbMGPAPqwekBBT2JZLcCYj2PNDBMVwDYPxBaVKgsUKfmxX",
  "key39": "2A1B8B2aJKps372rfzfhxjTfvoXgMeGZKPb8NNPoGQ33BUXJSUtnXfNUE8YEcaK8hJfCEqgXRLVajrzEQM6WDALv",
  "key40": "3S6vRB2gk4yo5ramH39MHCi1AWLuS4uRvaU8XfwExqmzY2JUc1egANXN8kjAiAdW4hE1CnVdYwiBVs21cXUMHj5w",
  "key41": "5Sj6oyb8NF2XjShUV9bqcp2ABbxBBqDMdqMpVv8F3mtj2BEbH3r4w3jRRccsYED4AqHZpz6XPAgEYivCikY6Aj7D",
  "key42": "4CsfZ7ydPPh6DfciLMAbv8AsWZ67jX7cvetTf9TESHy49Y3HodUa8s7kQys1A39BRGPDxM7tAMN5KbzHGYpXQJon",
  "key43": "V4HXYLZniVZ6gGZS8erxXZ9DExMJUXnWAGw8nwSmdaK1n3vqt1PqDy8CcdYkdSrzYFD3UdkBKqQj7LjHPpZzpYK",
  "key44": "37ZuN7K2aSNB5LLUiiJH3VFdi4XsdBWqTujRLuQU8dQzQv7rVBBXHKvETuBwm2sutHDzJZ9p4C8niZWUUpfDpfCG"
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
