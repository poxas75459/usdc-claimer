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
    "4RsFsRZXURwMQDXgjVET8WqQjrMcY6nrv8gYX644tzFjb4GncrUrxeNdSRZtZKB2Wm8jBwvrJUxKmsoyjaspwpT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DemYGijHn6z8X9B2tMKjpyqjKGwzCyqByZ6fbPEiwSUN2eMK8vByo7fZpGz4zS3PTPysuWdGKcjuVe9gFQ7fsz",
  "key1": "3h6mNEdiUBLXrYb1eww7qPAoWrr8UVpxNY8dnKPpuG5gyWSv5tDVoZkEkdE1nNFL4nzBzEgR3djfPfw21jxj3oFd",
  "key2": "51ShbDW2o5srvcQgxLuSFL9MHRZ2U3T3WAd9Db9LwDB5qqVAT3QL3EcG4ydHgD9qbkvdZchucZiVBBT9HooYa54k",
  "key3": "2sBYisehN5YTwC8JTKfN6PyyS5UzkTY31Tgbnpnic99JVQEeCnmBXbnPL2cKwp47yzjTdU7PMZCXCHVFC4T2XxeV",
  "key4": "iTUQm7HnGc9HJsRWSP3hjn2NVEvLYmE7bdJUvesdD261jQ83tkUVkrdNmpSttn2T6LLaZTuDe4k9N7ffrbZg5K5",
  "key5": "3CxJNU4FeanMwxc8qUK8avuw9Bpgxpgc1k9LahLrpqU8ZvCSYLfy49n43Fh8Vsoa5fnLLCnsNjwYx7JshY9Lmqyb",
  "key6": "29vTTdbB3FhQXow62oYc6LpPub8YbtmZLFi9FfM69Nbd7vNb3rcmwdXF6QKckVVukd49GDEDEKhNcMfEKeY9RqsD",
  "key7": "2EtZeKjksZXwxaKfDEBwjUTkiHtyrw6UYD4xFCceGuj3959P8ciDdBkpsYZPfSwAXgcBHzfqHNN8Zoc3iTYVppG3",
  "key8": "4ZZVFSc49aj5GDuESNi8J3W1mD2idDWQ6t5izB6f9EQJs54qqo16dMdmLEgzKgR5rf2XVM8y7had6zZAWH5fdQKZ",
  "key9": "2udXmPjGTSoH3wQmDhYpvDW7jAtNBX8xrk9tibxoG98FBwt8QCF681iSgn5JphVe7UDC4gmJ36ExJz4rFqXARGkA",
  "key10": "5gFkti32qSc6N9yJZcSsbVVQPELMLxXJ7dKVPCd6NykxDkhgC57b8CsxQLBBEoig1nxiQjYNFd7FskUej8bLAsRC",
  "key11": "1D4ioaXWw4rCdzrmLFJMZkFZXYRGMQx5VJjWERFAj7TQMkxg8Gzd419BXKf1kvgy7QnFRSPet4MLiXDn3wQHY3Q",
  "key12": "27w9Ab7a5CGUx2fPw8zNVdeguxxRhbtnjkkgvP7cd8CKGQtMYmzQvosRXcjAW5TgWZPmYs8QjiAQ5Tdsw6ouHXU1",
  "key13": "2Q3t2ubMG2m3WPZcBqTXExqhdGfnQ5PCQtU4tqQvvfKgrm5uLSdrtQsSPFHy3eAvRCx2XeztogDiBjiFQhW391yX",
  "key14": "5PiDuRsXx1AD79iQBzwRBx5AJETaRmnNUxYFi8HqysoJZ4JsU9KkucgaPWTvU4zSGbynvvzWrokasEiGc3mtp2dM",
  "key15": "4UBdPvRriR1EbFMWKWJGEjx2JcxrfuGS7eoDCzbpKbgy6sSLN9NUQWTYjhkdg9pbjgvdnYNS9TGPdXZiarKBFbGV",
  "key16": "3e135mKFqciGEuHVSydqUQ7TL5ojVQ9FgVKD989cQbFoy5UydpJGkzPm1yKRecUa7zZggFEHgVA1mJDQ65b9EZb",
  "key17": "3EsNK8GnyJmJ9HrJ72ryEeBYkmFn39AMWPp2gYzr3K3k2VbdADtSKew9XmzwvnkvXXsTZT4bTRrcLJvgkQSZSxAd",
  "key18": "2cnyphBRrDHWyhomKUKV8Xp6Uo5L5jH5iJgNT3bLXUizwQzmWRxddrLCiiaHCsM8A7ZhbSoG7pSr7zaE3SYmKZGx",
  "key19": "254YCVKaZEKZ7cE4fbeikyaeFU5W6woC5fDiq4FPWRudWCbm8DDxwf5LjtxDH3wxmcMMwAwPW8aeEprNe3MhZWVn",
  "key20": "wYqjcdkmZ2DtW1cW5NVxk9Fe1jkwc27DYAEegb9NB12SYfgRTBzkTeQyhuKC5FkgYvf8fhCAkZZhP4e59LXFyRA",
  "key21": "5XD7GFgtvGexy7C2AvkP1FmbScguPJm3PU5SkCV21PEtP6tE8jT6zUucWqrzW8UsTwBVULUjxFJMh1U6oDK6QJ8B",
  "key22": "3xkKPGzCcMJzQkvzfFytJxvgPBVzrp9c1xjXrGgntEjSRoRJhjHc4bv2sJkCyiTD166trU33fZuxTcPcPCgY97u2",
  "key23": "5v51GbtTTTJSR9wnytCDEgbqYk79UovaimAAzzSRhSghtPkE14dif9mf2RF5p8B6kaWDrAZgbHRHzdfRTQDnCXQw",
  "key24": "2RGPZNUk69AvC5jUXYrxPvVzovh4n6awayAoYU4wLCRu2tybTSHgu6LKyZKTANXMja9HosAhYbgbgM9SEtTc7i3n",
  "key25": "2Z4MhGadXo6yF3izxVtsrTRQP2cp3bpqhjCFikHk7AEb1AjBCFC9YYcakEpoHU21WRpQ4zGMn8KAJoGfCF99sdLB",
  "key26": "2a75444RuAJrpBnUv1REVH3HZwqNUonVTaLuzJKxztYsWJAtWfSTHACoGETCUdbJ2RG9439jbiXmMuAsKvV2DL1W",
  "key27": "8rYomGjR33Ly759K6txdvfU1BgnqhhDLt617fAxGDUrtGHMje7rz8yi9QWM2fu5f1NmqokuZLX1HXduzFxMWH8H",
  "key28": "sLdZRzWT71d7cW96Z4FKz3W3dHPEdka54xFh1UAjKMc89u6NRQsJ8rFKsY4ahWKtufbQMWE6Fed88C2PDz4eEny",
  "key29": "3NvmiE6bHiktsGSUCZvPh9KYcgYg8NY7yL2cTf2Ybvh7u6SEbqHCZasVBi8Bm3CfZo7mbSDm38mACti8SynhJKM8",
  "key30": "3YE9cQgMkd8ShPbaF3Pyx5sCsvM6d7WiNmM6z6iFVcJjAbbNgrCrfvXJzyGR2wAFxNxHGwb4ThMtRz4b2q7EM3At",
  "key31": "44zBkgMfYmFXvePZDhX3eQo8jtSgksxd1CSo1zgbpasErgSgTAnrhZv5ezBtYACTtGFqVjg77q7X5mb7Z8YHCgqK",
  "key32": "2YFWobWxUzg3QqtgPjEsH4CkP6fd3q1Kkynos6FYZBhy55B2k8WJ9Az2ucu5MiptZfss2DKyB2BorURQyFuHGXix",
  "key33": "457puuk6V8C7eph1Ry7JVS8uDNh6uXMwX5TXWb3Fi68LqfmsNhjYR6Kq5LJ3LWAqg1U5t2aQNU3BeRMRYUUaVr6x",
  "key34": "Ha56ZSEYDtPY8YPpjjWg23Piv2VhAy5x2t6snp1JDhf1zAtjFpfcyc9yFwJcWTQfiv9bfaWk3PWDUDC4cr8Z8tJ",
  "key35": "2orMBE4ngDCf7VshuvZPny9wwiHd4ZbLiqH7Tdq3t9TTtaW8RrYqo1K4CHBZTP44XWuXcT8fyJ8kRuhfzFphMHVA",
  "key36": "4V3p2V9EK2kCdN2NW4eWtzSpw9KiAMBAyyHdHFh5BjydyDSLiL4eHA4xg4pxJrphbMn1ZSQqjiFMa6LuhuxzgyTs",
  "key37": "4VvffnNZaDXqEWX8qPQfy2mv9v6791wKFtNWhZE3smyeLxiKqcbYfDTFSNeixF15fnHBXrbcfVL3Qxnm15xWb1n1",
  "key38": "3ebsPBfRVKhD7ppVgP3jZdRg7LXzZ3n9NgUbpVZtJSm1VaqChND4JRQtLdvvn9EP1YansGGh2X2KJwqGByTqef6u",
  "key39": "2SibYqk2ZLmSLXa4pwPDmaKzPNJCSWdDpx3odCu1E9khZ54s4v27d44bVGKZnDXadNwXdiL6gxSMespSbe21hQDb",
  "key40": "5RDMu9kkLew6RToW17ZoMNhiwhsvRCoj4ygsA2mEz5AvX5x76ASZusBufmPAYdYFprrkXbAJgES8J7ZgNtvwmUjk",
  "key41": "E7tDZPGv69y8JRtUCoysApVLAaEQVosovMJdPXsKFDgreeRe8ctQC8BXKmfssBz9Dp8iuRq3gqfCKrDsR9BJQh6",
  "key42": "5iaRkNfvqUoTcYUtGP6PQf7U5fsQjWCNX7v82qbEy7CDkrECfd333WHQ9iyWi552dy8Kn4qFXMu2zsN4xNh7zBHF",
  "key43": "3JVZYRZSQuVXZ1cg1bhkWHL3YoQdWLnAzsFfjZStwmE8kTMrWgUUqYD8hPfD3JcPS98v5scpWt1M8CYqGSGbLCyz",
  "key44": "2AJFaa2QqH3xEAG1ekSx3gbnp6iyBJXoZuqwzmeZLqzTBZfx7pBj6izWJVVcoR6jH6Xez4CLCd2tD4NNRF3vRsjG"
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
