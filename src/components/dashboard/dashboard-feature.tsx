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
    "4GemytUTLFpEW6kWQzZcumfWwkCRCFNE7ihJc7FuHkwvh262GV5ePyu1XfkVPnzBpUssF9DgjAJSxD96GbbiKmFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTn8gKAAapjk2UmfEJkJX8wemiydrKH8vTLGSZ1yEF7911W7zjBAZBsxNQFjzSemxnfG69mT2X3xGC6wEYwEZGB",
  "key1": "4oA3eEN6vnZ3MmiqtU66DKXyDWGWrBVK7LC1xu2k7JJVB4VTzF2aj762mqqb7qdZT229DVz6WnKbfnbNLitQy3r4",
  "key2": "2NnaV3DhVBMMfXjsaTrfmrEKWNqeh39xVv3qXLPN5RicL2x2GVoBVCTxk5ibnxaxfyW7UbEk1hwKASBd2RbaVTxE",
  "key3": "27D31rgBKRpErKADJSz9Y7hxzx8Ei1B4KaMHdjZT712uzQqSq6Ya9jUdyvzNwEYKvfrdouA3RPBL3VGeJQ8kJuQH",
  "key4": "E7qFYkeU1c47g6FD7kFVwqaax1ELptzMQDWEnCQBohYHrWfPtpspFqmA3szhDhTSvcP7JN8bUjd8XexsVzYrEtP",
  "key5": "4M5Yf1uKpNNckVsGHZyBSr2BTvgAAu79yBPXHvCHprQHYVBqm7AyN8NLkfCwhSe4gKpjiykzSScdisu4MktkSE2N",
  "key6": "5L8rQpRsT9eAgSU1yAFFh9moTYKepxwDu7EdgFGb7QvP24MFZCwkSJCjxr3KfRiRk6HsvN1fhrKB52WdwSqEtReg",
  "key7": "5FWoEpbwjmse6uUTSgMJNisBu9hPUN2yWm63awRAgY8pEhR5bhruNGvRNRV34QXE3TxtB21oPieMbmggneuGFLwC",
  "key8": "2kjoGCsWAXfi3udhZbaW1yvFzpyzP6Z5F2UcQy1iRebKrjxxacdiDK3uJNZ74StduYdkHvT3BHTYL3inHJF5LFfk",
  "key9": "41tcShzwSyDhLakHUnMGLvgkNDrnUtZQQAo3gPuNxAxwAGdiKT99CLoxkE5XeDYHRNz75cPRT3bFsDhD5cQuwiGM",
  "key10": "51h7QzrCuNyht9Q23b4c9zQQUcVy3Q7fs2VXyR41oEWHXRiFfkXuRWgXRvGb6NUQ45wm3t9bN76ARn44o4N2voTt",
  "key11": "5EzCoqkg5Hym5GMDyD5ja11zTz5ptmHgWFRhbRjAAkz5CK9cFs4XHXGtcni1TAFWTGMzMvbQPxhWNnDSS9cc3hx1",
  "key12": "2XUwhG1E2s58NDv2GKYHMhjv8honqYqfXfuyxtAjHmdnUzjkLMZX2JUQvUazY2gE68HyDoSY3zAacKiNeT6WiPeZ",
  "key13": "4mtTJNx2fxQKNT9BNGaU1p8ftagUDFi3enun4BgcjyeCArn7virXQPXjiJ7f1sgnNTvRVGKig7jwxmaSdgFsgnja",
  "key14": "2nEhAs9xnxheXdSMN3fbDirUMyZ8QdZfQgW1D2MjxYbBi1HprqenykjMiYkSAGmASty7NQwY1dgSWAJN9XoiSUtr",
  "key15": "4czkTx1XA18HJe74ZKeTJu9hj4nkQsxSKp8HrNM5MLk5R6bUE62SZQQgoyE9LW4CspF1yAPgMZTypteT4p3qAAD",
  "key16": "5oJ8HMeYPqBF558ZGy4JhHU2yE8mRKYc7HhESg42f1H5xTkxsbtMPitWrGMDDVrXeVdPBkjCoKndetmWoKJKHjRn",
  "key17": "4Wa9HX6nGpAVLVDa6XvynE8T9SCZ8je9po5oKk5SWuM9ufsbcCGkE7DzSkW12HVvJwVPocWGQumAFsFTfqn3mgbb",
  "key18": "3hxvUoetVgurmjoXQno5pueQx58bUH6H69699i5YJNsUhWyyyVQ16DSfLaCfUVDvhgN6CUrBuHYVqwoW3ZnUWehv",
  "key19": "5yk4dEgJ6CTGFFRFmjCf3ZMH5qubN9recaYL3PkFSJspDgaaY1uYnmJ3PT3ZNzuggnJyNS9eQTM7z7Bb3QThbKFr",
  "key20": "5EedSZyjigZHuHFi2ELnCNCehQyDx7ZiWLtpAt8gUK5AkxziHvbBXZYLptnDyLyLpFhLyc3FR3r3TntsnMeDhxUV",
  "key21": "5BD7fKdZXBcvMmFLxnYMkU8wMLsNdWGhZMnvHU73hMe2wygAhAattbN2KHFgnvvkRddNySwJJBxHXXmhmyjih9tx",
  "key22": "35MFkmQ6i1G3vmrYfUmvvb54Xh7QHUPYXgUkvHGDU13ytcHMbLk6JD2QYYeoGiRnRpQGiJ4KLKW3LSC5hDef5dpk",
  "key23": "4KSzWhtyf9eX2NK1E7ZKdXFienmTtBTvLCApdVBYU8j7MXzpq5xsf5xEyF8QUGtSXCyZCWo5gvLLoQWPUJ1HFp8u",
  "key24": "x9gU5xWFFBfmj9pgSyRBRnSayqt6VpK4W3Xp3UHsQTGJCQZm7d8zzhNgcv7WfCXpZ96NkyVLMQGM9ngLovwdiAT",
  "key25": "4fFvbvcp2i9yLWj4qe7VXss8ckk3e94ZKv9TCV6WTnX9xSL88yr6gZ8ddpXonTQUUaApp2tDBu1X9gi7xM9Ythof",
  "key26": "r9jb31hKgx4zk4xHAa8k2mT1z4FfBKjvXynYQr4msncj5pQiH8Ne9GC4WsL1qfHcAXZgheqchq7ZoxhmbD9U1j5",
  "key27": "34MT4bE3egRWvRq2ogfXPN1ssMVgytkCjUbcGqvvZVAHwcnjsXn2mSQDjk8aw3CoUkUsgwESexs4RLjoVv4EM8um"
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
