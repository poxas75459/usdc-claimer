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
    "3o7Ex1FdniFQch4CFjk8nKiZVEqUji432EyinsmpUGCzaRbsr4ujuSFTW5rZyr7PZ72AL8nKP6pd76YcCoWqxgzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ck6uMDPYG9gnbUVXWRQchpcAd2xMy8YcirkYqBufTi6yPtm6YVtccWgZ2z2fFocPCjs9nnAequXLezCtgL4goNk",
  "key1": "4shts1Bew7J8e12SRWn83iGWdPcsA33QMKJ4Z5j9GyFYKmXqVNeUkdRNXUJKxLF6zWaRguDtjCFbtUC3tMY7PxqW",
  "key2": "3XhyuFk7AQi3pXa3YYy9q3UPscqXjzCPxCsTF47boWk2xQaZD9g1kfEUt14sZfePitGhAs4HJvyJt1MEiQxXVv8A",
  "key3": "4H8uVAPDLJXAXnjcvY9vF2E94Y5LU8Ed5Z5XssE1135nAk32gJUvJC76X6TNDnrtf1QS5PpmSiPNmZbTU71EGzHx",
  "key4": "374JdhYsd7rrb5aurhZxnC6UDyR4QJzQTkjfE3v28NcxCzbSy53zm5ZdCN5aSd8au8pJuWGxJiLQ5ce2iNAtHFfR",
  "key5": "52r9XYJYpFm3kYhqZRgtz17FtEWfQ5LQduDm7StSPQRDByZyExZ8vsog3c9vH63DdNVB2aTswacBXXmbK5qkDJmE",
  "key6": "2eYkec6sPWXQQYDbeY2xgvubERaNzRHdaPYkk52pirZ6KnU9CPwdt4T6Qja5TuGE15wUatekcXoYp3nAoLqntgcg",
  "key7": "3jHJppLD5pyFd3MEMqvXEytFM7Fq7MbzgfePRc8gSZHSkzjB4GqRTbK5hcCGCV8RHmAt3XVPe347kwh3jY1g8Cyq",
  "key8": "21DGyxKNBq2SbuFQngdVrsZocVUqgHUxiw58RPRiVx6u1TrAoheEnWvzcnxq6mdAb4L4uWDzXfqbCGR1P31db9o6",
  "key9": "4suem9gPJkYLUgRD2m6iY6HzWufnMfdWpFDqZh3qJN4rUD7eNbqDAjVLnCNDV13HXQNJqExMWLF61AjoeBJE8f6y",
  "key10": "4MsbeHXcbLeCUHCRC7JVLsFRaatCG61gj9Y6iN2wjH7VPfMEVLAaa11B7CiP1qLR5R3ibhi17zc15wBAW3r7boE1",
  "key11": "2kp4GaDjwdALivpWdz2UZ1yn5ZLN3P33ReE2ohrGFWGiejTMQmyyYYXT1WLDnzepPZuyT9gnYhVnDSsT8DsNaqDJ",
  "key12": "5graHvZYLwgQJ4mHsn2W7JVCWUY7mivrrYHgTU9gUfXy5aNh5g5wLFEtUVGJ4FunT4WVg3wNNqZHihJUFMzDgf27",
  "key13": "4rbmvoR5xipSwXn2LoQoUWQ23yEquL6fTSbLMJjp9VzCWh3JJ8aPeuwGzF7C2BK4UVn3Lg1TW5Cn4WxbRBee8tnA",
  "key14": "3pTrGdwsgAPQBtno7idxxyrKFFmRcM6AZ3JhGAV7CeLP5GAajQf31nE2FARkU9zhYGE9YVLY8Uq4ZHCsm7tvCbhX",
  "key15": "4bbG3DJfdr1mkJidVN2bMzVjWhKsLuzEWhZ1iApLznVMcdLVNJ6hMokC1G94Yb8ntTJbDogbZ8Mhr8Rnwnf5XsmF",
  "key16": "493YVh8xz9UdjBdk2BsExim8LGv7P74Am9jVAcije7B1GuCdwptkdw1Y3HiVkDjPrR4iz8nho3HHEnjbtSuL9xvg",
  "key17": "WRaMFesNBQLVRYu6VxMqzQ2447ze8QpL49X1LgJp2NT272pFPbNUBYKSez8o9CcHwLxsBjr8R7radqktsj7Dqm3",
  "key18": "5mDTo2SEC1H65UxAFGxU5o8EWuLjjngwB42SrYViV9egGKs5dWEPfwxWPMwjkkrMSkwBF42ysNT814RFfdR9ZCjx",
  "key19": "3RoDEt5AtQ4jzE6eVEkR2sbNJsJ36VBvZ1UaNqy1G448vqz5UDFPZK1NUUWkzAhn9Cjm99aGZcmvT2mm8roJSTCN",
  "key20": "64dcbYLMBaUDNdKdSh4evwNhD8w74pfXfnLbKNnzzyQqJMAiJF3VJ6pex6W7Xqijb9PREGpepVLNnvLBRwDs6JRK",
  "key21": "3t731z5mwWrQ2Z1gBnEscxbSxrHiNovY6eXWUQPfHaFJfQixRJ98Y9NEfiJXx1JqoE1fz8Xe7QBRDLf3FmqGcP2E",
  "key22": "2VjYyw9bUK1PnsUamMnDgMVmWXGA5Ywbyn7qSqC6QiJo5LNeHbWYSvGeAHJPneCq2BA7Y67Wgi7gGJZ7Be4DcXJt",
  "key23": "4s9AAuN7kEmbLCfoarphW98Dshb1f4n3XnF2cQJEkENsU7bZm23voZJMTEw4NqKcz1Wb19z3cKZmHKSMNrs7cGxw",
  "key24": "3RW87AmRVRzZsrs5P7mhqWQuEFbrMSP9y8MAS7zMnXvDH7CjQFpHes4hN5a2dJHHLrs6HzozuRJkybkidrKBJeMS",
  "key25": "4TRgysTrxX54XrYuAUXEmGDv9Dv9RtUqnvpr7pew6qrWPAeXWvuxhyDKXYHq3E9M9RLdcapxiS72AYQPW7ygSxxm",
  "key26": "3LtvwrtQ9T49xzj5CV2wrtNuQ3sEpEZfSv8aB6wc7iLLHWTZGqAUdne9rei8Pa7cmS6Acde5cV8Mtwvt7xcAHYSb",
  "key27": "35fP2sr7qLNNehpmQkbVfQFSQzpoH6EvmW1RoQfqjfx3TZY4AnqdXfgiJM6z3kQmQFHN2ggXQSMYgu6z9QzsVuUm",
  "key28": "9Hms2YmGKaBbn5DJc5u2n1wwQ8jh2sKVGeMjTtDHRHN3QPgNdFhfsZzdi7sDS7uzZQBQ2oLykxq7yFuywzZPvMK",
  "key29": "52YBDaLL74jMgpr7AFC4Arz8g9y8rQrNkrYKHZQdMMrgLE2WCK5qPrUZa5rLMiija2Q5n8UkyBeqTfVGfg5W7rwg",
  "key30": "2fYWcuvY6qjG5Y7uwwSgTTJ8LyYTLpTHbgvMKGFWZbnYmQNcdR4b13W4CXhD38iG28TaAs1U9yXzJZJaNRYA3R8R",
  "key31": "4s7Q9UySj1UBxxBVL2bF61DGr8zfwoY9gRVc2MdY4Xyk5P8r1n7DnA4XEP7AtUv4dGBzFJ92iK4Yktm6yadZcDUQ",
  "key32": "2YvnbjCw8qoyLiFRNWQz4f5G96HeZh3pX4NczdT7PzBpPdLKjCMEYuzTcGbth9Kg2F2EHWbE7ZR7UEQY92KWbw1T",
  "key33": "42F6G3E8YKckjupdoruqGe5rzvLoUNLcfyESg12MDNqhQat4QVKfUzQmEiqB9qWrmiAWoqpoyzU1BR1bBW6nZKVX",
  "key34": "WeFBzsuiw3yCD7VPyP2WRw6STEHnUQn5fUAm8QcnFmzwbq67huxreXqMT9UQZhJMPVgsCEA9BBwgF6tAhGfY7c5",
  "key35": "MeXaotnDuNURirVKFTeXGLjM9LvYv7xN5QnZdLsVW6EfDNp33x1EXKX648iBn6tLw1bKGQ9hqQb4MkYZnKhoy2n",
  "key36": "3175e5spPd2YvCSDEFFSPmuAgfJBfXRpHCj9TqfgK6HKDafZBvyn5yPthBjwGpSvZbxmdB9cgkacZc5KTMETUvys",
  "key37": "4fJZ1vf6z33EXA86LxQ56WaSEPybtRsXXMXgEBL5vjpokRSMj7J86tUH1setgv5u3y4K9Mxgqdz3hXYU6nL21cHB",
  "key38": "4iy9WNVZ7oSxa9LbzhoyM3tmt2sM775P9BrL8yry4KF4oGnjPRrf6WdCBSMDTZYKJntccQgvnK71G187BPrXuNBc",
  "key39": "5oiwSARHD7wtNtifm3mEExKyK7Gf7xw3frVgETPuAyWJ5yWVj9fWj83VhXhUqBYSJRBYuoQJCU1hw4YQez1GXLnX",
  "key40": "abQKmxNBFxrk17QVPEzzdXNZf9J2FF6YjSB5vF36mT1534oUAwf7YW5pAVAyqXZHE3pnHWp24aJm2g3DmAHrV2g",
  "key41": "2AZAaMDs6v9qxTT2yd3ZUTHXQDABiBBdxQvscAWd3k7YZSgJZjq1NWrXaL1wtKiztEDk2LcFeaV56hkM9eT5xM4j",
  "key42": "623pebq1ka1NDXDf5pHvZvE8B4HcTKRSjzbceCZpGPMhLV8juQKEYJgUuygp3KjZkc7P6m8KBfCqgP3XYDq2P1Do",
  "key43": "5KG1dihVeZ3e9aAnZMdrvy9H296vDNWkXT7AkDkDAoMwwk4wsiYAChK6jJWR7PrfF4TRdkVM381z4tkS6pHoNkGb",
  "key44": "2zcVwFaR21WFL3ScX8qfSnVwUbKptKYTEwngByW93hV76xLv9F2qdpFrVgTmsyfe8WrPeS7Nkuax8QgTPJXtnzPn",
  "key45": "64eLfsma2p3Ay22CKVef9bYsfKGYR7RdfPpiB1ruZfMRtuxz548j867aivFLwqGHCxVWjYqjbUCHmNYnrWgpXjuY",
  "key46": "eBVnqRmSNweGVDrRJCAF69xHnRprit7vyhFE7Qg3ZsHFQbJKMxpv2fCGG9AcJd8pRAYNDQeq4BH4Guqt7X24saX",
  "key47": "2f8cjLZFV4gAnKCjWuJfxUJ9nwzeZj6kTRq1GQfX8P8za9t1eu76AgUWVtFkwrYZQQHugDTr4ZLqd2N5GkLHtyap",
  "key48": "AQReat6NzVcRzLMDkVQp6Jm2QjGhAr7j47rjUP76kMMST6ZXwPWSs2McfBXMYMZja7EYbE4q7jMzrzKDM78iJL5"
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
