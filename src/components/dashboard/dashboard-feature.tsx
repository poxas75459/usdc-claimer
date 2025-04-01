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
    "2AG2RgQG71pwsTD6MeMK4eN3bypqL7YcCz9fScPfVWXjadSvfpib39RYKNDDb6enbPgdtm6BDGpi539uoJtyf2jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2716MKY3joN78YtkzvqMFYhHYCcZVxzGCCHGewnwEcpmfWrN34GyvRGp7mZn9M9bTX7egKKCTd5u6HhoxHc3VEGp",
  "key1": "qwSYdRcoRQzhnXNQRt8UMMH82pS533HAdDVyQC5ataiMdbu7ers51PheCSm3Ht4o545yq4xR6jHibtnSamELTBh",
  "key2": "24WwWEGmJLPUtxZFa3nEKD78f88huFouSZFNyVva1G4GS6fQu9tsegxB6d1PG4TJMbt3UiWJAdPnzXn73qxwRS7n",
  "key3": "2vCjQLKKrPXognqv6VSjy5sBFFspPkkTokCvwuZxubXEyUEp7swBWVZDWQbBQMa7ZMwoAdW9qMGcWZKE5d8jxTSd",
  "key4": "4aV7V51nnnZz1n41JEYpuMfXPpHFujC9R77B9ZdTbM6ctoZksSPSfTukV9U1PSFov2X3rWdR2w2dKx393odYpm2n",
  "key5": "8acRRrgQkGKZJWuQLeycJUCsCMwwc8GbLnSPuW56thzAqNMQiXd84tzHoDh8djtYSmrZe58HNe8octLfFL729qo",
  "key6": "3aXPt86hzgM5LcZi7CUUrK8JaCwotpyhapu9BxuWqMog7zxsW921fV8w5bbvv6WP5UWLnzET9tvYBSM5Ki4njHJE",
  "key7": "eRTKk6vkJVhfUVC6G16fUyWJMAqF9e9q9m61rBxqiU7AFpZWnjEAPFngfR6SgP5BqKPxZudhSWWqTaVbubSzY56",
  "key8": "4AMn8PEJSNPqpo4DaAh4mEKgfP49pEjsMzsfg4dH2vEAJSNZDjGhMz2SUTwwLGbEXEy93cuoKC3c3cpjGCPaj6nw",
  "key9": "3d2kFq7Tn8hfwEfUjcN333KQ2gw3YbzZ8ApuhncL1wpkXKAEo1fdeNwtuh3mxokww96d8VoCX5yBRrPaZAkQv6Xf",
  "key10": "5XAKX4Uzx96PGRPWuuKvuos4RbJkYRmrDGEVTfesGFivfs2CnB9fvnNX8TjE7PQ6XHVPbzbUuhyz32SNMw8CQftX",
  "key11": "2MXCGKkjUiuiT9x8ZaWHEAwFjnPvZvYyxRDEFpCfdrtoCfwqpysfWQU2af6ZSp67RGqd62DTjDtwqffd6WjWjGTi",
  "key12": "22iRPE3oj62ukRVAiq4oiqTCskUBeQk6hcyWjA5aTTkJN4U5s6GKANuqGiL6tqKYKE549uoBiu6ij9pqK27HibP7",
  "key13": "351F9XQ5JLwQXLPCpZCPPqM1pFLzuhvYU8eNDcYSJBWTKNgLqBapxrWMysctMYDRc8tLjXRTXy6myaEzFuAVqDy4",
  "key14": "3wqwYrM4tVHHV8mRLb63pf9G5Xuw4gnj1qRtnYARMc3UNTA1DL5TE9nWh7imGfQGs5DitEZy6h8WaUKDtgu77nFr",
  "key15": "27wiuEadwiq48gbbTtH1fNSkeUNox5gqJmxy9kvK77BzsG9T3GSHgRiyvJnyP8cNjDLTw8oKuqa8AvC7RtMMVgVc",
  "key16": "uEGjDeJuAx5S735xnXkA4uqNMb91spNnQ7ezrH24K9nWQb2eSMGxdpqjnoQSSiCWnhF7qF6HA8BHdxaD7SAd78L",
  "key17": "ps1MfFCCPABS5Az2ZXiJ3JCLzoUW3ueGWGi22teJJTsGTtYTGPpiFqm9b2ckT4zS9D5J4cLfVBZi7sXYS2KFvKi",
  "key18": "i6ZHod6qQdBs2xd2sVfiWxKEsDqoBDjwJZ6DYzexQ2acsaXzeGkcicrav3N1bUBw43mC8cbRxoFAknCGuFEkuuJ",
  "key19": "ZA9bqu39Y3387qUqMVgE6LpwAxQYAWv57L6vhz82Kv9q4B7LwreEY8yu8BnJyeCq9TcLGGb86pffyaCcwD7wp1r",
  "key20": "42t5Dt83z1oXcrmHCAeJhcZybQjWy9E26RiBB4ABkgiZcqkNdKizwspkqk9d9uSAtX6AWNZJ7aSNsmibksXatMZP",
  "key21": "fQgHH6J4QQUYqYxh8QCGbpZC794rQxvBCBN2HPag3MKHByaUSqJTCg1VjDKPuBddRLbzDX2Dy5kKM9E1VRJnedA",
  "key22": "5BVwCzaYfzduUE9E44zMbkoWgrLbwAWeCnHVJgkK7b1GLjwFbriM9RDFQ6sETrztNHfWmTzBp2Ff473AmK3C9anj",
  "key23": "5V8BwU7UmTmttpNpZdsqyQXWTtoZ5yvzGNQZ7udMPYMzJkXUahyhLNCcAPRWrcKXzjDeKjwgbvWfQ7uEpzUTW4sW",
  "key24": "2s8FjhxydYDeRrBkcbNBawShKfRgtHxnRfapooY6GcWqd2oZDbM3BNTHZwcEnVbHEZmaTmvux8EAALaYPJH84Asp",
  "key25": "CNhX7S5rvW5bVusZrzJ4kfnYHi2oRiFNHmPht1NQ5TAWxRBmSmwntbrHw8gBddSptjWsea6SHUvNvKq38YApqva",
  "key26": "Mc8fzgn3kt5dDNRij4zL2rUMydihaJWcUhzz89Cr4az7Ku4tjHCYSCxgWykj2dVo29wEpCwobdxeTVHwLCL3GHt",
  "key27": "5oM9WLHNowCBC314wyrz21CXKSTZ7Dte7Z3Rwx58RDNzaoCEEbYUZaybgNcvWcaLipimmzKnkDc5QVSCBB3dtKb1",
  "key28": "46aULJo8xUBbEUj6eL6LrDMtjii5JudQW1tLvDT96xHW4HFZQNKUUX1X9TpgQhgv1obwvQSnUrQQEeJTE7aobZcP",
  "key29": "5ZCESMhmaA4iPmuwPSS7pntaYQdgRDKZ2aaK4EYJ7tSYeF1CzKLJEWh14zADfka1NzZsDWSDm41nBsrect4S8WHm",
  "key30": "MzNsECWfPrmqsehAVLojfeRHqmQwzzrCMzB1Ujk1tz8Sw1GSHtNKzF3wBXh9BKFEKnqb5FkrVXVCCXCyhKeHizW",
  "key31": "5z9mUEFe1cCEWUQNmW3u8rsU2ztMutN83qy46VMU26AwWP17zJVQsaot8PQ3TaEmmHZUBh4dq9Ft7nkHVik77AVf",
  "key32": "5wRNXyfTYRvEFUBv1Etk58RdQgb7MNd6FEoqci6STVjWdxKRc2cfArgaKfKNSxp1FZz7TM5Uydh8qeeLgzmkKkM1",
  "key33": "3pQ5bLowyKmGWmUC9BFQNdkPDid5YCEs4bew1NNrW1x5pssGfLrYbSymXRSZYvNU6bBmRusU2fGD6mHnBacnfUNh",
  "key34": "5z8aZmrRnR1ajj1bKvJgmpdx4LrWFte4fLHBwjp5o8F9p9wZgeF54VhGxPRtQgY5V9aG5dhGMZBDSf13NPy9v9zY",
  "key35": "66jdqUo7gaaC5NNo4pyR6r7a5Sc4YZv1fnDEFWwSNZZxo9P7kKF4g8kkugRRawNCbPi5tpH36YRr7q9ba6ZqnU6w",
  "key36": "5ALmHAuyrDVAenUpqBitqEnSDW2Sct9RvRDEvgmrT8Z8KSLmni6ifP1VKav29xmhC3XvvMYQbRZ5mQBCLcw8qiJa",
  "key37": "5c6tCGRQrGGSar8DS2bewn1QafnhhBH54QgirxxF4pkLQU3VrF4SXVzwLhxsPdW3Zt1KzYmy5grTbaucZh8gHtLB",
  "key38": "5cucKRmXjwfNoKqhLwK5XvWRhPdgvKyGjBsP5PhsSNtkSdSXPWMLeFiDi3PXJS8XnbjrvLWkA9ujLSK8ZqmZ4QtN",
  "key39": "2THSFmKMpoLCrhGkTZ7Bc6iVKXCMa5RRS4EDrZPwVXEjjdexSCd421YXxQyEkCJjdho2XAZMoJ5iw6AMgUR1jEvY",
  "key40": "2mgmGcPFmuJ3GxqPhTozTkLrRAqKqpmy9WXiTJrzjPCwF6yytXy9Czh1CvvaGQKRNEyE7HMX6fcfyjdr7iaLoteK",
  "key41": "4mHjxA2RCaSzMAUSr9djS5ZwkmgkT6gWRP9DrBVJTZwrLpP86QbVCfN97tadifAdw2yHcT1MaBVN3GBJF4XD5mcx",
  "key42": "3eM6ytaxPzMmrTniwh3AohkGBqsac613kCG9jAfb1zvGDeuy8DrQ4pPtjK5K9gELRZxcTdxzaUZy6X5w4C9rX6Je",
  "key43": "wADiDrg1mjNL6q3vSWRxVbPBC5bhvbxGQBKC3kp92SQF6ReBpREcpuxgBju6prmfHBNw1mMRDn4D1gkWEp6mgvc",
  "key44": "612LwPcp6ziApyo9rDcAvbSCZwhfQ5UPTpborZBEPe7YFQLpNAmDvC3NZ2cTtr4TmYwvevaN9nttJh4a4SWudprT",
  "key45": "DakUkx49uRpuNYYtCeLTyJyJLmBABrtyBXAyYWgvFHMdbbaYJEmyWHz2AQ6WbAWszjE82x16ak2ux3Erv5LbRsG",
  "key46": "5gnn1cFa1Zohk2Tz6wvN3F2Uk23KzpAQ3wb1B3v16pjZhtyWUgkwjstZwjx48QyhNKS8L6EhWij8LEuf2G455dQs",
  "key47": "x1NNjv4szjueLNCeVB5fXEDDwo7AAxXCSCQHyRL3cFCiR9RRcZTsKNMQxtkeXWEDm7mYg3LHsSpYCM3naskqwjV",
  "key48": "2KkqQE5gRywjsS29uv1vFe9eTzvLYB1ReGbr7dyYmMzLisLCZyMf1muVNarkHSeaoRS2PLuAbrJhzjK5vZxiLUV",
  "key49": "3KNJuJJNMYi21AZpGdbgBRJCtHJwtcLfFEzrUY4cMzjN2cdbH93wXVveP1m7vjwPtVpwrCMZKfer7PPRW3fChbiU"
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
