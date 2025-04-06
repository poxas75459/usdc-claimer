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
    "5bKL1PY22XBhZFpCaP5Grq4rYFM5BzTkY4LguiRnG24XWN6NXLNvS9dhvLYVU1YFUJTHhiiEe3DoJUjMkyiQn3xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNfwM6DA6jViyALArqh4du9VcJDBoHxyTXZ46byAqBhHSHEC8ipyzWWNjryc3XaT1kWFZn8E2q9d1GQsv1bTS3d",
  "key1": "4qRCg6x3ZqMbL69s8UuFLPkFA43UuU5y3UEEP8vTGYwNVxqBXjgduP1A9fMioJJLsvUpGtQ2py72ftjg2QbzErai",
  "key2": "2bEoz7aSqWRhGX3YZhjLepDLD4o2wNAckmwoGF7Svo8Ts2vcsFzWNYgJ3opdmj1P8ZJoHRn3m6SLY2eU7RPhoDkv",
  "key3": "5oH4L7wFFqQWeeeh3t8tkMozfhFnyinRVwHLWFgkD8EGNSrKzVPdXaZsNbBJikyPDjmbrLcqDwdFpGNCxeohcwWK",
  "key4": "3XEYgoYgAeZdkteNCF8iCSpKkAgDXrZQ6ua5YAnY9GNq3csjF8kegrTDz6LxSGwahuj6JENAzdaUeoG6bn8wRZZz",
  "key5": "5pTtG1VEwJRm2CHezzBUi8R5BVUMgtAaJmxaNdscKFKMRqRhvqBNSJZHNPYyWavKob7rH4xUica8G8WfqFBDJM8d",
  "key6": "5iwTtFtXAKyVVwT696P8KSiQNpe69EPeH5tZRkME46o3VCceWRkU3Jj8o9rXWqKozCezbfJgXXcZ2BY9FAgQSnm2",
  "key7": "2UaAcGcTbW7yiGQh4MKeQCUdhMEd7UxHKw8nvScStvinjfu37iB9iMbr9YkFumiymacHn93T28idgsurNKnX2Z8H",
  "key8": "4xmAjsXorhZfnhF9ra5Q2LKFLmn6cczetohW2Can7G5Y3E9Gcfaz8eqFfJ8nwZmwNxDrbA4LFzyevB6dV4UvjsFQ",
  "key9": "54PNALRWkVQpg6hscDzJ8qGdX2J96a4hYoJzxRBsjJ9cnEJq8zeWzSnzpKtVBaL1fX2rsW3wBfmmWtC1En1Ys2vx",
  "key10": "op6gZ9QSm35kgPvdXb7AG5vnhJ4KacGpu46vNBVWTkoSiAJ1RXRVUEKm91hLwEuEa8GbCPX2kugkW1iAcwXtnTy",
  "key11": "53cN77tCm74GUo2MrvdFCDj5x8xsu5FBPjLWHC3vXLJ5cCyg2CcFqRQSwcpHmYJV6PSiUJNDev6e2mVY2Dmfe73w",
  "key12": "5t2rUt4EMfN7rCSPiKXEG2ihtfkydBiSw7F13c26yXoFMXVFk7DaMCB8PEB3nwgzJTr8BcUrPmDZGvnhYkt7vctS",
  "key13": "4vLx9byFJkxap5W8Qndn9bnEhsE9RnmPBj9Cq8HJGE4UycKQphgn3tw33CmskSs4zB6R8S7M8bqtRyydWAG3rHqj",
  "key14": "Ag4KyoBJJeU6eyHijqbsgPp9kpwTTujhEdttrbV8KGohWisQtDownLyfZ47eP2LRNnvW9xzQ7ZJMxurE4hcudRZ",
  "key15": "2ochs1nq77Z5DNC4YZeG3dRbWwbUSj6tefFbozPizxvXo3Uu2S85R1VbYsj8723AZB2ZiCZvbma8A3xYqjUHvFVM",
  "key16": "5qsuUEn6jQxM6FU67AJE5imUxRHH6o8jx2BenAcfgAvhStgNv8hQovM6FKbusGnEkJfcdtSkWvF5gFyVudc1Pzyu",
  "key17": "2nZabYZZFnQeS3mM3558BaBj6gUJjFTSeBnKH3CVi7nBN3JgSQ8kxsozoprBnsfdppNgMhXscFSQu8ohYeTAuc8z",
  "key18": "4g34qbYnaCf3tHdg36KtsQXzdxCitfReyzMUPQhnEYLstar3TcZCovpGiZam8K8cPmHtogCuuvpS1GnCyhGi2E74",
  "key19": "3QLspiK5PdvRMdUKEsQpiWiFLceAjyJ7sBN36Rb8VkU8g2fxkEwvK7w6N1WWHiD8HHAG5W79FD8Qf9mJx4qAWhub",
  "key20": "3LzaGCYge6EyLKb42zDX9y28CuAFm6B2ZRY3dDMTAnPNu5X4DyWAxmozA7u5GozhWsRdWXDdgiYdWD9mQVdbBJdx",
  "key21": "2Cu4c1EBSsHn8ami4CNjjQsGyEFQqjwAT7FrcicqbyHppAz7eTnMCeLQhaG6CxenhUni3WDGKFKP8ffUifJtXRTp",
  "key22": "3eZiw4QYHtLrEArAiWVToBvQEKxEFHRvYMsZWfCMzmkahLVSni1zBQRmbHvY1CMDdDTwwQVDSeu8jcypU3KLyq3n",
  "key23": "8hg5SsaRiA29jxBYRSLXDcC6ZedDz6jWHfKgGX3TbSYKrUA931J9ZbCg2NSjLYZmtcFPYzcGpsk6Fz1FVhUFCjX",
  "key24": "3PCbdiW2EGwWd27HY9jq11NCZJ9DR6EhjgQVmd4hNqyg4cSxE5APWobvCSYMZPgfuxHgyBQLSZefcU7z7tsCWEPr",
  "key25": "rKcys19i1beNpg8LdJa8uu7UckTQhx4npuC1tyi4AM3ekhSDpaGDoM5Ar6Ug4V83y1TQpr35e99hA3657iHqW7u",
  "key26": "44ruaR3DY1P37cmcnMQ1kGHHnx5D4CUL51Yw63DjBcoii9KCQSzBsMEgRfYqP3aNdb4TVAxQSfHhQcjRQJNa136b",
  "key27": "5x7NH8QA3TvHJFhJ5p5mHSw7UA8rsaiDag3SqymHjSvCWxQdkYqUbiDgDExcsncssF2yZWau5Jxa7CV6bkYx3MPU",
  "key28": "28KrzXT3puvqT9PecFfcYWPYHHCnE8XRHx4LCX784gAKBRiXbrpRkA3jDKgCoqpqABzMMYqmZJ9FrBYaudQUYQm5",
  "key29": "3UdZAemArb2wFXZ9VdZphwXhUV42PsUUvkTC7JRY3u6zAhTtG26CrASjmapYsCYtcFhKaLQJHCmQ7JwQucLF1XPS",
  "key30": "2ZMSvRd8HXQXkrBppLBPHYBnKbGNDLjW81UK452ce6FsthRReUFLyqCi6ZcN3EBxjPYgbAdg3PjpSNCKmzdXmgNW",
  "key31": "3Ci8XuM8DjsCJ2a6jwAh5k8EjJYR3DGyLJfwetxwNMdfmiwrAKUnZXKVnjuY4GL8U7iGxBPxtnJk7LuBhuDPRYD2",
  "key32": "4JpuQFhdN1Xk6ryAPtidMpqw359K1dMUvpgiFWjdzt5urF1HizmAwrPt5B8tFhUWGuFtqphj4aPhDve2WzBidv2r",
  "key33": "4S6tiwctjxLgP2mJaPGrFwVQMu4b3cv8eupQojzM4heH624wLRjw6mJ5BPbo5MWaStk7TpyUDhah5S3w8hc2hoZ7",
  "key34": "2ki1He6DPyvSb63RS6tB2aFEW5Bxjo63mwaGJqF9cHWbmsKVYd4QusFisigD1CXHJb2aDomzWbbLusonrz4Vuguy",
  "key35": "4bFmskn7kwwN48XmiaKMX9VsXCdF49cCoJLoSD586dNu4PMTRuqG7tzm2AgEqFhd2ewmybLii9CSWPsAHaHo1Z2N",
  "key36": "3Wy6ZzKrgaxYJtnsCyqnB87oDakcWBuh6yA7LwieL3wNy9BzHVD5z8kH8mnC2WBU53JRq4cAjGDdEZxoo1123Qk2",
  "key37": "jLbY1v5W6rgAHvMxtT2KytPoK8oikUnKCfJDrNNDateRqL2JY375N9ahPQVBqGcWHdUjUh1F4iQNgLiphrD44DB",
  "key38": "gMKJy9hELupD1LkXQBqKFPyjkomPT1S7WAMCwozxNbrwPEyGKeam8Xz4AAxzgQkmDZgrgLzocq87b3wB4J3wkH1",
  "key39": "4J2pyZFEiCBzRagT2NQtLT6EAJRf1PdMjHqQw86J4KWRUnJhDKguicjGGidit8qEi2idYS2RTLjQzkNQA9Cu9qLu",
  "key40": "3vvCky86pNRRdDAywrsjgtN3hR5sSBqqGQcKH7VUzBAW29w7dfCRYwufbef1MwguaseRi1H5ogUHKMzpnXvvq6an",
  "key41": "K7VaMt9noC7naz3wc4v76RkVm6RneCCDhHYPwU3KkUEPBaF6SfLPi77Zmmfr8NWEB9xYHAcJvwTxc1pQ5qAJst7",
  "key42": "3Dj8DNUKHyeBRKAGeqtbDxfrsWwtRSYHUzUdMroWSbGEC1oqVrWf6qVuJQF8gquMrUkhoZNcAt73tpuE7UpmiPpM",
  "key43": "3qPrLfCtmeZkBEFPnXDWp4gVCSi2JjgT1D3fEuKeevTmieU82fGG8mVkULGhLgVuVJXNxwJmHZ1zUFcBvHZSFyU3",
  "key44": "53zM3fsp3udv4qEf5qDZKrpw2EBWauAd1X7bzaZ7RqrR7pgEfjLtqJxWvuYRWBNHi2f7wjqaiWUZb9za5Z2q8Jz",
  "key45": "5uspbEa3gGEsadWyG9ieNjo4osd5Wr3q54bmQ2pdxm7dUP6Y48zhHbBfBVDkAKq2zowAPfXDvLHLYDnEEY6BqqBi",
  "key46": "3wohQQnLoqE3FAXTwhbDUgi5xYcYLZHsRH8kDNzjVUVh1ndYmG8fgWcpZcMyEvqe5ApyEPE8uKZMSsDKxiGhyaqy",
  "key47": "4LDNKUeoN9krSF6sqcVFdP8BVvLrEFWYnWacwqnGdWDcm5TRZnvvr2kN31QETGv75A7eNbmi8wGyZkJqrYD2PN5v",
  "key48": "3BsE5ejvTAuWUZKYmyGDwHZU2nkUr2kbf5F4bUEHYbnSqpxEGfdbzKxPAsNJBAppErByaCVEW5aF3X9DMf59pvJL",
  "key49": "5kVV283oRC6oKcEvaT5ko2VbyYTmrgFg8V6pwo7oJiXRchMY1iZQQXeF3HByZveH6FTApg6enAFYT4GL9hVRu1Nk"
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
