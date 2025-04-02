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
    "2voVCf4h5VPuASSUNtGCVTCxWgxNw7YERjmbg4aCiHcSYVYGbbFsXQwuSJyfbV7Edgmz4gnow9iRfxKf9BaWKLX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f7tD75QmKqnSDqZvAxHZv7tQ5Pm7FpGiEg1EnQ566bR6XeBLTSoTzksqgJzTbX9Cia7CsrRrZBEpvjGgreN8123",
  "key1": "48MHTWVtdPmFyp9a6yXJoqWDEMtpvXD2ingM38A6FZd94BJXUcUvZpZC5ganzEMQLBdVSP9sZ7o8Ev6PZJPrGxdC",
  "key2": "3LvdNTW3KdgGRBkcEWJK8Pf5xzr5fGzTrGWmryR8JzXjjhonMKrzXBYEntUui7khYYkjatB9t9tNRMCK6gxKsLTq",
  "key3": "3jfX8ugJETdPxLC2XQV27oibJY8pRSPQ8PPYY5tfZUhBMBvTFstWpch2uFvrAWXUQznmjxgCLGd5v7brtGsDZzhQ",
  "key4": "46g1eYRaBdDseUuFQxw5kuiunM2HoqpKmVPomRGNFxzEs1suGZTS4A1rafVzfdxsGgcTaGnyWumASubMZV8BMGWy",
  "key5": "3GVYKqUdJXoDVTkwtzZNG62jNb9njksypoiSVvWUkHUUxpMDJrL7RrmfmrbcrX9WsuH2iXYPkKLvLLBAnx3YNwsX",
  "key6": "9VyCKNb2yb6XWyDbzNzp6xDxyDHvEYNSPrYwmNvwts9M96iseJ3gEao6TSkEqL18RxRp47EexwQowZa9EXgWn8j",
  "key7": "2JVyEgS63MPonLdGUXVvCWnJbhCJ9T5DRsnXr9kdGdjiMEWdsUj6PtH5wqENkrNQW9e3tX5EuPnh1dXNKBNymRbm",
  "key8": "27dx78rXukJjc7b6j8TcNQQebTfCLbaKMwZmKcmmG5sgjL5JZidsdwWgETfaSuJMmb3TghPvutCL8SC423ETM8VC",
  "key9": "36wmaFdVnerrEXzz3FXz5NfZM1gjwfzxX4j9suZKLv1GBeQdLvTwCJppo7GeXsiGKqC8xZF9WXG6XdBjtrxb1hZg",
  "key10": "5UnCvvwWHLc6tKcQLG4GLwDuSLxZUXFtcGaJXPP5KbhsAyG7tWhuFejo2QAkPvpdJqnd36dMdMZMdeD7AJdTvdPb",
  "key11": "4PWCLxyYgiZZyBnixhHyWLbYE2cJrTUAhZPr6rs5jUuypD34AQZQQcqAsVReoBCBTGzo3bh4xvSb6DZXHxqXASLC",
  "key12": "22wQUUM7tFzm1yK213ww51vgduvnHaZQyTSRXARTfVVL688ZgRjPpDNGbnwxk84avXSi7eagjUNieTXJFhh8TGAo",
  "key13": "Apqn33bUqfEj15NdiLtFf24fmqd6aXPFCYNREWeJbpondFjtkZPQX32HryXMVpdcZz1XHSRRNBbh39QiZY5mkLY",
  "key14": "4wJzbrodXJjrj1GVB2cFGFwbGhJQe8NVYN4HL9Trj6N8kswrp6aojQnGij5DdHfnrSKCLzJKxosKkUsoCntD5qDN",
  "key15": "2uuZxPj57FGQcgmfd4VeVJa2PknTy9miruXU2LtiQ26S4Mu5nXzyyTF9MUfww3LZ2FnqWAeehjx9MeN29XGuohrz",
  "key16": "614Anr2B3ej8qhCH3QN8FYmC4G3ZwZCEiEbXbrAWFVkNmbeRqcE3DUqZBTBk1TRXjeo7Np3axiCmmFNMzRSSyiP2",
  "key17": "5ZEwQodq474RzamAEoEiskx6p3yyTcMWwYxRpoVNLCwEQxoPRArzrmCyJqYUPFYvG5XBGd4oeWGmu1vKrcNnFkRy",
  "key18": "31yGMkACKEEWL1uGkwzPKqHa14C9is1bGFVf9V6kZ9LEVc3VYCZuQa2fxsSDdqyLVTYCzuFgjhhRAy7fRB9TFxbn",
  "key19": "657GB8AB2moUETGEUWWayL3sPdbW6nbR2usy7zGXG4vbvuHRtcDX46xB1cfyxfgxAyhkhzES3wzj4EgLPBeA1C9B",
  "key20": "3qfik9iDehM6EVVKzWqZxCFSFx1EJUDx64pSoFwyWC4jbAU9wZeHfMkKK9xrn9P9AXWTcJLMVDUFWBtdE8qV5CUv",
  "key21": "41N94TTVMyYYhBqBD66DB6mYM4RJsrtPTrBgZofU6QSX2hJV3XgtwZSykVnQNFuJhmW4JMLdssgBr2FehPxGpine",
  "key22": "2MpXAHyV7e6y3TM51DFhycMUkXudSAMUPCRUqmtjFRCZHDtokyRNiqbGbyt32BdvjhLZF6Lu1NvzSCL41q7ztvjt",
  "key23": "5dxLS1St4LZoVYE3f5mvqhqszqKFG3bDDGwjKFTgqprYvLGnrSBgKegbde8umkwxGUW59f1WUgxQ7tSUzK2YzSrY",
  "key24": "kjV43MnKzeUEsoX9Axpsat8RagEJcqP1383tcHV7aRHiadydnLqTRcJ43SMhg6fL8ZbwMCGYmuwHhn553cpheYW",
  "key25": "51txqu3c7fE2ZDVezG2hoKtD8UhUtRiekExFqzr5mRXa9WGxXygTibsano9c9mtbQmrQEH9igvPLjLajScYsaviq",
  "key26": "puS1yvtASJ4Cx6SxVe7JA1PqinbpxokdPqg7gNv9BVrRZqn21oEfFwV1MQcimkFhVbQGhPakGbqh3VFQJmpZEiB",
  "key27": "3qhUVWrYnihaf8LcWEcdgbeK8BkkieE5dzk74qMW5ajFt37Ns9iYFRD1dr5x3nL3pXjVpG4efq4haLtVWc2N2Ld",
  "key28": "RRU1tVRipxUT5nj3rY9GStQy3BXbV1CbAXPeptPzcUBWt2pNxkQYKBsQeW6EK1QfpYSuESSKs3PieZNqBn2PfxN",
  "key29": "3yrxMQrETZGHr1YxFT7ChNDTT5fYD48VyAEjNJxHv4FYw1rEbZsWeZBeHrzXq54qh92PPzCgraqFef1m6XufyVY4",
  "key30": "qNehYF7DAKstXDHxK7Xk9iFcjuoLBMQ6nJgrDgrbype2KywBawTnTd5Deo4AmRLkfSeUXdLB4nVmvzjq1v22vq3",
  "key31": "2g6Pe9ufHJ8gTKqahrFdCZ8rEQ1WJ6qpE5myY9noEioBHLadu9Xi7oVJeuGBuyD9GMe5byedLHYLgbZj7LJkiUQE",
  "key32": "xzxbYFWJK2y8eARVoGaJfqEueUozeegACAxE7nntyn2L52ZedmuD6Hp2eDXVjgWQYkF2jUuTqs4oFWDCtsao3qJ",
  "key33": "4hU5tLuuJXVyPeAYmzVPEHVBiso8Fyv5as3u8WwdJM3hCCQ7xWdN8UnCmNHuTZhbANgo3TbLu4QDFreAyAcBwKCB",
  "key34": "5cSJc9z8JcGZMQSgKsRnQxeKxg3soFfgLVZUhCAVaZBBmnkguquDnmk8pgXwwrNGLdYab554q8xGf5BJtBfCTYvi",
  "key35": "s536aJD6VBUeesr5DzGBYgrPWToMrTuGWkoqNWHgKqAEcEva6RcjG93GJ3iztZPyX4BjuC2dpgoEAPVhFgaxpKY"
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
