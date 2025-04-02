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
    "8m87fQcqNpjDom8BCDJGDvaNw1xttn1ks2kMC4amJkbvfbjSxJMYPbcq58QNn47UeD1F7k3nyfKKWxjhGCor47K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckG9J565ZK5smurbSSZKkEe8KNPYxzRGDBBtGCx3Mjd2ZNVxCiDWzYzNFV6L9xjBPDq5dfR8m5xd7mC5j541QK8",
  "key1": "4D4kgmXueUvxwbB4WLbuWScqbSTf5C8Xg5QHgdw2D1F3h5m4sLN7VzPBzGqQ1XqnME3E3gfDVGoGBQ3emNtHdmZY",
  "key2": "2c3p1jJWHeY8waavp9D45b6vhwc6Ycw5JApVgjHUfQ2u2kjmysyjcz9zVFcRVVrXVvcVF7wNsdSH31LKKi4RkYdC",
  "key3": "2SknzTLz47wpB5GHUsXdUozggGXmHF2Yc6FBCGvq5y8uDpb7pU35359Xa5n66SZtV4QNe9LxQRxxmoL4LwJJ3ez7",
  "key4": "4kCdqYdeva8QLJ7B4fckLp96jhJhHr5dt6RsmGEh7fwGcehrb1nubvQYWoy6VTZdB914cgzgzi9BdU48nZBhgrd1",
  "key5": "R6hM62VBpGP2ZiyjvRdd21B6FRFExEt8ReqDRYv3YRzk8ycqH1Hcf2orv58x3mPQHToNNi9qjNhS1gQAzQDgajA",
  "key6": "5jZ4oTUywo3xNZhz1YUySUrnKjggZ853akS294KE3rKePxh77r3EJwyJi6mrems5Ky6SMHJS1QmcHUKD9MgNm3YH",
  "key7": "bsGe9LXPFuZRzMNTxcR8ycLmYo6iPt3U8cyvWNSm4z3RTJuZbTg7uRnZkSN8Gf8gVj2FvTFtTeEYcnGR8ocsJFV",
  "key8": "28Wu8SCVJuUjjKJjmAAwzQF1kqGdKEmpt9Gb32q4Y4yXCGNqbCh8NgTi9GG8ELubobDwyqvtTdjEEKT24nbz1Cm5",
  "key9": "39dypTf4KZWfv6Xdv8BJp5GDy1mzsQFVHjEAPVMnSD95kTRVbKVKA58DqyvVNgsXxXUPXySVtXsaRjnKAehHJcQi",
  "key10": "JKmiQyWU2RbHak5rmPV8smPig5wdZqVr2zA61cJ1h2uKx7TN1wvd63SE4X6HJCUTAZqaqgfJuXL3a5hYE7MYUTY",
  "key11": "5pYFMyvPfoPsxpVyZa8MmdeQVWHcbApZCjrQ9hYmRRC3LpKEQaVeqTm1ZbwxWvcwCvsfUnmrm8LNdLBAYPaTfzSr",
  "key12": "5vcRGfw39zZaFQ3pMtXDhJxdcmDUURueZfVQ82y2Lfgy1DP17kWChnE7FxrskkeRh6fS2BhAneGD7WDfV1iM6ST1",
  "key13": "Lj9rgT36gNrExMMsQ31hKxMKf2EBEWCaDGejAQuCqd2ccsPgT2LdBVuD4QjxYhnGs5pgN37uQYvpZA744DfUYAt",
  "key14": "513Yg7orCKCBQmYDbK6PrbgZ1z4d4tbzpSSS8D6D5xeMj6mrqAw6GVQRrXWVYCdXLndwDSbcpjYMJYrKvVsFw2kT",
  "key15": "54BN8aithFBf4qVdP8jnEgFUx5f3twQEv7ge4kSnnQuasHZQqUE62rYmrbydhbrGwY5aa7Qg2D11Sxs1vxoMDJXw",
  "key16": "5F6EdLvBKb6K46CsSEmB62ubUPQD5BCFbXWYtBLcu8gJUQGQFfnfqvH3pfkDCUAJykM115XM97KXmZvhJydR8Hj5",
  "key17": "t6CRNXpTiUZ72coctxRCSYhjLuyGf3UZAcwKcxqKKqthYgNWNC9fuAPP8dobHoLJLPX1ozw9aubAXa9DU8mP71U",
  "key18": "3XguAZxP6tC465bFf7jNGPujEdRGgysJGFzpp136yqtRyPyicW2g4aN3FS8EGfC3dJF3GvwMP3pWXjFHBUz8d95q",
  "key19": "5NLZ73Yao2bgTayz8WvndZNsrSUGjnT1SuzVaMFYU2r7s9jx16XeaD3sS3g3Ni4nZ9c8ioihBVZvtBVtEy4B66Hf",
  "key20": "5R8gC8rLx9Krf7QCzbaJG9Z1UHWBNh2aNmf9tELNkL4DS81LuqX22xqSPm791a9x7b7H6Jss2VivbEVdupiuPEtf",
  "key21": "5pCqTAeai44MdoKqNe9KXgND3Y8esTuMLPMDDdt7KmNWr4cfAB5Ryd8dWMriHdmFxU5wu2T1MqVKzGh3HxkSDrn7",
  "key22": "5AevsjBNUZVFhcaJZb2dEjgLjG725529tgvo4DHgbq7tHGxttisMtd8hQmeP8Q2qZJRyWTg6mjL7jquXiFHGRsvX",
  "key23": "DSuxhpeTeBfykHHYbzkrW2Wuc9HVjs37GpnqvghocZJRQZVX18LxSiDdiK5Jaedsi5RDWRC3vw5kWkUJnjdBeZk",
  "key24": "2URXKqXmuvjNn8VRFW2SGU1qAUKxjXdB1TVZ1Z2eSCM3yaGkz17SW6eogJ9pDKyBUDv3apYgU29eTnsQVb6xZ7aF",
  "key25": "2xFMxjN4ov3AgBd9PQsBRoJjN7uismbSPiibwersysUzgNUbpxgQTQbQcpnAnNnABNCq9hAth15JpgnHhVHxNkEU",
  "key26": "2VdBevcpPkxsQVQfoyW8yPqpMXmbHSMHcQ1nQJazRD4PjGgUX15mhhFBXxqoZs4WwwghUZbHnrLu4WhU9kEu5xop",
  "key27": "4SbzaZvdGERxmrPheJo2Kw4HgJKbuxz3Jsiajd1WxqkJbLMAGF6nLhnHrmNytRiVNqtpzUBct2auMtZdHC26yGto",
  "key28": "2KRBhTXF5PJjXsUQSfiAzeiWqpQsEKU6s96NuixvGyCDbCicSasHaugrEzhcYsFcjMY6LUPPQw4rJpKRgeZ4h6GA",
  "key29": "3nUDWrXkADma2J8xtts1gno43cykj7wAByp9PW4y4A99Pe6yZZapwscYcVWXxECkrTH1ew3YUkWYHoLznYRpGCXJ",
  "key30": "22qgS1gYiAgd6nwSg4BcyFnJx9ksSjEr6HDTJif7HEeN5GL2PPfrazitpBJP1faccCNhZVqk9KsQGg8GxFBXgJVL",
  "key31": "2NbjBZBysVnzAEVXPGDuGB7mKPMZsDWni45UekLxmEWce5xX3LzaDMLwHwW2MD8EMYUsVdBgwf5ms9d9bqQM4Vif",
  "key32": "4riPiwMm9HuwdyoTXHuj2fJb2FqkgiuSkENuMKxEMwWbZ3VCCDyga71BXAExLDndz5Bz5dzfpHutPJyNBPg59Dts",
  "key33": "4VjuXnypLMfZLXvZ3ZRFC1KR9wJQWAEW8Wdw7m7VPdyzQBmiG5qKmG46WAj9PNxqXuD1ybdw86T56YnTwT3s7ieh",
  "key34": "32MrHpk61GwuCNWjczyTRsxxoKBwpBwQpk8TTgb1jP9Mc7oNNK3t7qiXegedYUE9CDiy7do3XygWsM7ENRubRVEX",
  "key35": "4rnUkV2rGYEHaFM2JFRBsYP8ihkoBZhQyfU1pqrwj7qmw4vFwQEkmcxUCjVsAN2gDyi5WJhpUQHUTsF1EHF2GEjH",
  "key36": "2waMBfivrMJJJoGW356ey5owbit8NJzLHnApQpWZRrWiswrjTjxfptT6h2BbGYDCyqFnkVL9t6DCM81ZdcWeH2ir",
  "key37": "3wd2bPcKuHG6a9FF3WQRpDJrCFmSVVXJhrm3HXomf5MBq9xPzSfx8b6oroQdspnkN7opNu4yjjjCQhWLp6SWQ5rV",
  "key38": "3VUgXuG6chhxbkJNPGZ1VUdJg8poyFP6w6qjmfq5UZtMJGGWDaqTX3GfsDRCn9MiJnrsmyFCqpU4g8ZxrHq7AtGg",
  "key39": "4naLL6GgRYkupRgLpNsURNstMw2nB1bQZFjgKr8WsVzx9vQp5nBPD1JwWFB4V68y6x5fq8AB2Vbf6EebaFB4HPbm",
  "key40": "oVMMf1UVkp3cWBkjFi6Q7x7PEbtJU5ApgEvZzFjV6Lwc5iqb5w4KSTFyuW5B1enzem1EXtvdivqCFemcJrLk4Gj",
  "key41": "2ddQCwFEYp7zoq6EqVruaefbhZSLMyQfMfXkLMP4NCwDb7wbcYqMsWQCRL1nAW6615Je69BpEDMT16SXmPbPLPC5",
  "key42": "4RMLdBHy9YqW6K35YGcj7wDjWD79Xa2EZexBtQ2Qv9C29jL3ghG7KoqUPTdy8M9oAfhFwkRbbEcv1CWA7Qpfstep"
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
