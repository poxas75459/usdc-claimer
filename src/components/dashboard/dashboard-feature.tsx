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
    "2ZhyYNwR7Bd4beRygNEbpPL9vb9W2nqasAoaNobkg3hVskxS8ANSbfvbEsf3HT5APSBprTcc66URZNy9e4BLLtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2XjcNJxhoFKRYQWP641fwRya25F6gwqp8rjT8hsrtB7WQ4AJQcotnwsskqWwKebp9mD4gfnqE2UMuyRmj17wT4",
  "key1": "4MzeM9mXEvWN6Vnd2gA6j69Q96U1YTCwmAGPBMrY837XwLYHkm4r1MY3zUiD9o6oY2TfqvQGNGLbsQMsYUUbLK1B",
  "key2": "2RDobzBQUxNbZU3F6EDr2BozSb7UhsmEkBFTdDzBhayLS2C19dL6QEsoNjj7jzFAoZUfnjd75mRrEaij9bcYYkQx",
  "key3": "3XAMUHGRqMR8fdpMcqUzMVBbPsqun1yPr7tpby6hcmMzcCdawZUbDAxuBG7nijt6mNeJAWj4D3YAJwL9WGkYPvLW",
  "key4": "2QBzvohqQcXM54aXgaJaNhoYFdaukH33Rebe7bpVAPWFU3xTYobksmDfC5VFYwRsd2yLV5bRdUaEFiRnFs8hpXrb",
  "key5": "3Ff1HhefcQybTrVwaCkXjNKPaQzTCQgJA6i8J1bHccx5vsm1V85bfjtk1TntxbfUjcguu2G77BygCouk2HGHXk5t",
  "key6": "4cVYGbqwhekvcQRoyyNVk3uvde7pUZMiKeqccx42PnvHfGJC56VpNc5PomTxuNX7ysCQn2Wv7bkm46fz76GB3jzG",
  "key7": "2Cz7kUzaV93kSKcscfUEezrmv6mstdbMeMTwPDtKXBAw8cZgXijfWnLuJUa7vUws2GiSZZAneQSmCyDSoSBK6P5o",
  "key8": "2wBa55cQAY4CTPEsPwgH78bJmrU59Rr5ws4P2QjoizctNSUi3ehk8YibkKkwHtUY2zWdk9ESnoJnrWejWHGDmWqD",
  "key9": "59vBRTkRZfQt1sZFM8EKJfoKiLjXoTDjHLMMuvhAqkU8QnnPeBs8fWTEw1mNvx1M2ccy3GKUqKZzTo2TYHTz1U48",
  "key10": "2RgxofcnNK3jm8Yc8bEFonrfGNNR3RvXbUvsxSriZT3pyj4jyPfcsjuvL1i7uF5tnweD79GZNfWmetNadKGAtyd1",
  "key11": "5ADYdyhm2HHQyjckBRMUddwfmpAAVwevENLg5JSFK9GeT6fZBYgCABJ5NaxL38BLj343GqfpNwg2YmfgzNerD714",
  "key12": "4D5HzPGN9zdJoJtAgKV4bZjXNaofScuDUv2uNDyGjUrdd8MCES4TzLvXa78uPihnmfjGJGJH4JMhSJiWgBPQQgA",
  "key13": "5chDtUvRHsjnbUgyTAHcpieXcTrbrXwhfenKk7dn2oNciaLPkGb1mQgLMQ3MHcXLvTqpmxdAZgwCaVBcYHLwKc3Y",
  "key14": "2Zw75mzQVqMbHksmsJ3TEwzv44kcZ4Ue53Fq6YMCXzbipzFUECABS4GqToNooBfLkVUPjdf1WNMqaDbLG3pFfNBW",
  "key15": "66gTtkbGQwiczcJQe1BmfFKPNpdDPZHEioHs5bDPbBFmUmqw7GBKdk2GMa5s58GhWCpFrccSJnWk61Czor3AyxMq",
  "key16": "5fQvKCpEf6oAbCtVXT65oW7FMtZqwCgkR7CmRoLTTZEw8An7qnwCkW6XWfDUu5stJr7wk6mwcU6K8YV9izZ9Giux",
  "key17": "4nt4dmWyDv2LTbp2tq6Mrs2m14PSYbuqGXEy1fY6f3yEBcZaLPWsMJrKsys1bCN9ZsvaUzU41Z8pc25SV1cUuF5Y",
  "key18": "dVNYNXEChavuncHisrhJhUmFLXZdxDy3KCsoSnEB2MV5PrSFSsLSWobZVWUS9dRzoM46NWjbpaK4t5mhAD5myEW",
  "key19": "5gxKHWKCnKabtsh8Ybtu79gKRbcByjwjgbNqEmS7ryhSomhde8m14x4Wv1rC9xwtNEzwSeyjw4dAMR2a8ZDACW8i",
  "key20": "3gVQbS6LqrjcRueCxRdcXWrF32jsXTcFeRRM8KUGJAn7A83JMx3FDAAznsq5WAQsUyYviHnXPLAPjveu3Nah7761",
  "key21": "5fJjmvbQ4RKsxDSTYnpXhWM6xXChj3oQRz62FSHSDZmVsJ5b7GoQ5PUWrM7b5NzbyxegbwMA9kHRgqNrxLyEWNLw",
  "key22": "3VbzMeuSbqMKkzcyB7iWeEt6uBeisfakzwJ7uD5VSJxtiJM3TwE9feLjXUtcG5rmPBSh3C2GvL1JiNoWtGzobJVq",
  "key23": "3VT9DVMyfBaPsDVsihkG8KKLeAUSkPZ4UHseUXtwr4PXFgFJqmZMwyFhKsgZLbHPVxXL3wun3vdm7vz3uQzUsoWc",
  "key24": "33KsojEggcAou2CgGFRJYGb7MxL9AB1dw3XV7ygTmeTn4GvXN7FbM5VxuEVxmJCWPiJYsjrWDSxu6cxJZArCLTL4",
  "key25": "3DDTTPSpM4Rr3Va7wsoYKDoREoV9HJC6PBMzT8AK3LbidGR1fzFzecjszXmyUQdvv22uHHVMxYVuaGYTQRusHinG",
  "key26": "31xJtob5CtZLtoZ9cHR5Zc62DTvQxsVK1DPmfGAGLB7DuiLYPgqot2hUDm88H8oMNhajgUQXZvQr31DP4y11Awaf",
  "key27": "51gnwqkiu8w829jXcppf819AKm6hFfHekPkZr2fnHPqhNhFNVn7HMG1LuhGYbDg3fvgqcgZBfgbt9j24hPUdYQtq",
  "key28": "3vzuKrwU9vu467MbW7FFBX7dbjscvqDVyvFWwoeCEg9ybNHnGTdzu45U2nFzL5AutobVGUqvWVgCwAzT933aK9w2",
  "key29": "21hFrMh3ArLHHoKHDNv9fkeWjdxURGGPqpeQWcnMNsDEjBUJfEHB3jfDcoq3CHCUE8ddUujxQ2d2auX49sVB78TR",
  "key30": "4E1QFpmJ2vTnqvmj8WEmQPugAYaDDZRsF6v2YdKN5uB7kfTGS8DNWtEqv6QJS1wuEeRsGVikDpSMD1Vcab2hwyWV",
  "key31": "3XdFCQbXzTo9EX1iEmTU8YPA5NGL8dwAaRfV54oLsVoCD9pcUBPhf5KNGe5gREZfF88aLWefEL3UzSkUvqgscRVa",
  "key32": "45L5bj6wMkQUY1tZgbBPCht11jrKrgqHHU5GcUooKKB2GvcbhQSkkqrEaLCoqZoJp26QHpzvZhKkYbbHydxAgKUG",
  "key33": "4srs5yxoDqV5H5gtvFDCY739xvVScwVb9jwQfqCvtMbWfEgqRqGB4MwRD6CngmGJBfcfaJfpHscrRyFsHTziUS5m",
  "key34": "3JNRqPD7QHXTuWFq9tXEBtAux1y7qnov7HT3u8NYjrFvfnBFhV92pzsP1uaFSuWHBp6XmwtsChMKZfpvGN7QSR2y"
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
