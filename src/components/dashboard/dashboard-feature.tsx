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
    "3v7BGzcjjoEgpqncKg965qi1F2kgVNgxdfQdWdHRofVeDxasFPimrxN6JovHRPuYzTTXKKfmr71u89PpwRQLozNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VG99bSrVgtFwyk436JW8URTcc3hzHbrku2K3uSQurALydTayZX2js4ruE67XofWYigwRf3FBLML5bE4HivRcBUS",
  "key1": "2F5Lt2fcVYGqEGc3UeLUdk5xjzDkFToCw59phRXivjw5FpdPBLkND8sh4REx1mcNgGZQSyfwbSgnuHQq6VSLfc7P",
  "key2": "3NhMjzWMidT21iDtP8hY2dPxuYgMgnGQf13BigCxjhiNNBHz39zucJn2G522VySbZFtJ2LeUs1MuE81Q64TykxyG",
  "key3": "NqjEj5e1F21bqqjJeTif2xNqrQDzuEVr7Eb97ouz8LmEdiwtKcSb2DwFFJ1YtemknFuqYoeqriqHrs8GhXpe4pF",
  "key4": "42CAhRYmUPjCLQXsBcuB7tp5bwkPpu17uMYiJSEtsQYM7dtYmPjcNTEd6Q1D5bLsdLxMZ3hhV8PzngVG2z5x51Ew",
  "key5": "5dukC8t1VKcCFGP6i4QiKBhXnV18r8Vj8C6jHGmKUJ54eevaWEUZHYkk6JbWx4cjWSn58cCRxxmorxfVmrzjnrtE",
  "key6": "421JCZZtRWQo3QpZXqqV45nY3iirmWVnEUfBQVGQuzKtCR8mEdDAD4babJJZEkHgRb6MCqo7A465fiJaH35wrgzA",
  "key7": "iDmkAuKXJjmFSwWfcdKJ8YzEEoHeBADVZUVtJFfz9GnRNLKEzeFQYqdA36qRDkFpNR23sYm15R3nNRnHJxWsWoU",
  "key8": "2YWSsH1gAPnCiG4HNrDPrPvBs1xMx67sRy9tcgtbYCJ6qK5abgW8NafAjrALKUUtHUxsvRC2qLnbH3MdEYGfvkEt",
  "key9": "3eSPeQpN78VLG48bfU4Sryq1K3FNf5Tx612ovfjwr7Sktg8gdaa89gftmUrNqpDRY3aZ5c3FtyoHju6GaE8t3gep",
  "key10": "4M8uTqrJZj3bhvjGc6yroNsvp9gHJg4NadX3Xe8GSrGc3bj19LoKC5zMktjehTs425vPPv7HwndsH3P27UHNqEda",
  "key11": "2mPR1Wd2voKHNcyLR1NPQXDubzqhoUkh3x2rPD4fTPtF64sJEayiRv5Ndfx2zCSv8QWeqr7NENLc7RSYxces8ubm",
  "key12": "nf4syep2XdriSdwZuNPtmxzRwx9V4iANz2fGfDgBF97UHMFcPub26QweX77FF8tHbWcZXpqFjbTLyv4tUcWHf8i",
  "key13": "596Pk2Z91ogNrgcFRJxmhTK1q8jZftPoZXZ3WdsQJwpjcAvFznhv4zxKu2TcVk8oYr9hBPwQRS4zJ1NwU8RVncaH",
  "key14": "33hGQ4MBSF7DTgYW8H7kQrD8nyiNphPR35GymQRKwD5bC7jsPbH4fTnhxusZqsVsAaT8mTCkBu4mTJvh4HMmYo8K",
  "key15": "2AF8msBPaMLZVGXFjng7VcrykQztVoZMfESjdbwjevTSHjN5xJ79vC23364czf9YGVNz4nxV93rZ1imET7d94TwD",
  "key16": "4jLBjSrAwRMu7AqLrtf7dtS1aiWXesUsWX9gYZdcy2JGsDhzWPn3kp2ChoYEeW61KVNhjCSFqKxkKZ2tZiGuc8gH",
  "key17": "5cV8DfERpCgBk7yAENGkEWFKBPboGRd6NciXWykY71BXnL7r8nuujQsqVt4BrqoDi4yiLRx62UMpro6QQ62HN3JW",
  "key18": "2ewqz5AfbHPyFHB2AZs7ZB6gWTrjwaBuju1s9jtUfmj9dNAGR5A4VQwJomPxS4aZ7rqFxM1WZq2CkPLrWz12zSxZ",
  "key19": "42hPWkX6ir6S4zgxaSFxhBgiy1gJiX1GvfXnYM72RATt3ghMHcYxiU9DKaKeMJmsska6bohs93Z5M57KfkHdk5wT",
  "key20": "2Dkug3hfD2hRqfUeeTN3onqD91ox2TB361EoTK6qKKnLGpqT8NdZBVoQpQxHDJE539KZeprN71MxyCg65vUipLyw",
  "key21": "5ppCrrNm7Tb75gCj8dE41e4vEwfzziWAbzidAg9GsALEStVirVpjU176kq5FYw69ErerCLGaAt8sTRf93RwB4THc",
  "key22": "4vz5H2aaoczXRMPho6zuDqcEUo4KxMPkpsNrmFvv8dVzamV1ApsMfFTSYhV2Ss32WeQrTaeLkw2pRp3u4pevMbgJ",
  "key23": "5N5QNFd6tB24GAVuHNLicWZ8PeSUuFSQMUGjepXzWsXW8Kk9jsH3DddVyFfcRTFeK98WQz5gY2sDfUXaH3XaCL6d",
  "key24": "4WwDQQyS4JfN5Qt4w5PyGzPDLxsh4CswRCjxoSL7G1TD2Nc3Jd6twa1o87z4mb6TpuHQyUr82wqdbthRWbXbCbqx",
  "key25": "rmNJ5Rh9eYRZwsBMAHcLnDN6SqW4sMa9yJvnrja5gD327To2ytTmmNtBySRZ4FPGZj9CRN6Eywmh3oDxzJCRbdg",
  "key26": "2WXfgJekE1X9V8CFaqLSDeVfMidzgBxqpZavqi1e9Xz3zEKCQQDisyRNLJDSU3tdkwY7TdxP7B3G8cGHw2tGkY13",
  "key27": "45gGdS27PykRSH5BQq4JRtLsPFZd1R9yzZhUKMP13vQryRL9eFiVManWthAxHaA1abdnxUx3aQqudUkEuJhw9CJf",
  "key28": "sAy8LAj7na6dUD2q7oVkdwQwAZc4crTo1gYcV6SrY5jLZpMBYLhv4SM1y3Z6rQEiZVXuGFeHBRQnMuKuXGgP4ya",
  "key29": "19bnN9YTcEFWMKB1RZmp7oXCA8VY4oWZDenZa8okqsW7HYPMVv3rM2E1g7KMHMrNEko9KMKyou6G9pKr7ujUdEe",
  "key30": "33SFX1WthprfR7ogwPhsgrRPinBWVgbGjYDXd7YkAjJv4j4uHWqH9Nsajfj5psZwd2VsdiJF6hMgfqxV1nrwEXjZ",
  "key31": "5WvVt6mRkXTSJqe5gsGTpj1wgjvWf786qZgYK54EjarMYssT6RDf9So8qcjna6ygLc6XEcS7X4Eya5w3B7B3sVqE",
  "key32": "3iS9h4NDmeqffjBo6ySjBKKSfRpVd7H9UkUi51JiNFY4wN7JcRTh8BzbenRXba8WgkUUD7E3Nj764q4SYF7HA6PU",
  "key33": "2KwL5nbg1i1XzAjSPZtnPscW6yCRft4ecVVXFLdd5QZ2rGpYRmaV3vhhxkgfTkMTsckj6tENY1iemEBsWPpHwTHj",
  "key34": "3EHGi4GMzdFiMj58AWGkNfUYe9L1wkWk7mfWTCR9pVtPUrjUD4M3zj63ggpvNA6xbwLtSaCk1D8axoekuoKxTdy3",
  "key35": "5KoDa55ettxJBBy6J8ejy2b3oAcQ5MViPcw4oa8EKofyuWjxr6U76eBwRNoeHn7kS5P8ScPzcZU3Z4ugHPLRwbuk",
  "key36": "4Y61oXHa8hnmvxcnpzNFUe7zp7h16SptFXMuAyP3zztBGkbcZMdrmSaomGQ7vetFhtHaKbiLXC29rYnUt35Bb3ph",
  "key37": "3yNNAHxmxYdWtMDesAW68wZbKwjN5BRdGRFCSZmTuCV5YnVoMGwPd2xYdykQ5Jag8iXcK8iR38g5TK2Wzs1c3LQ3",
  "key38": "3ZSwNgm67nGB2g1MXPqNvNUimxENBZVwyZgBFVdFNsDWSWLDWSEqA4T8k5K8cnPmMPrQ1mVBZkk6MYzYaeqtXTfP"
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
