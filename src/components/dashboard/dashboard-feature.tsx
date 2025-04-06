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
    "53ZaSfwk6WaxiM3XWQ8QMvsEGAmSEjY4bHqGk4JzSHT2H5zkpUb59Djnuexv4Ts6zbAKHyFaapHVm83MXUaCuzwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ib4D3eBCMWDCbvcMTMinRDuFEMsyHRnSA7TJhYoAD6eGUB7XnUXT9KN2Ye8uwip9zJ8ZskGGXY3fadqPSPsBGEb",
  "key1": "38C9aLT1nr7rs2N2Qx1RfcDqep1pHckgtBuAtXAoz9LMmKG4U4W5vGRfpDibWmCw3vQBkeZBPTkAXmr8TTqHSXfh",
  "key2": "3Yo2LcLFQbMDKgDY9NvKnEzDja9tUVrydjZrCnmjm8Mc2ZruMT7HQWk6GucbgRidkB8HdTDTTVag6AKyutnve1pg",
  "key3": "3vKHCa8VdYYsRfhthpKcdu15Kd59T4cKWcjd1ceo6uSa24RJsEpoovSfrTM3Gk8WFzKgu1AAGMsZiuAwo56YCwoK",
  "key4": "5tuwa4XMMoM516ekDXizWJRmaTUN5QhwJ3aXCpt5tEaZ5EVf55QNkVhb9oB9XYU3Xve7gqt4qCqyBfv8KpSy1QUq",
  "key5": "5Tj6iZZJnnViS7stdBCw7DdW2uLfbiBhsJCmPzpUdWVNHSbPk8uwKU6WE6anwximQsWhVUZfDTxvfnTHQc88AZUp",
  "key6": "4uYzhvbiGBhToH57UCx78FMHLqMFwbWj8K8BZj5eaxc6AMNPPdqpaqqszSw9ga5Nrf2eMYF5D49RWMkkdkaeFdnq",
  "key7": "hWWv18JWexbmVFmjAGDHNoC2sHaVB7GjEARyaNjpXiv6YM4srDXuqnixbVhr4PRxRZZqxCjyEJkmJpnojkrhoPM",
  "key8": "kzEPieaLz1Tx4ppKaLVypXoub7f12BUiRttLjpoeGgNSMDWUmsvyK13gbNJAcWRQwnmVQT5qzQqjX4nbZAAiKz3",
  "key9": "41XQQeXwuPhPVu5VYwP63VBGHuPfKQ8hu5MCzxvf2SyZzj8Q4mnnbJFRC2PaeWXjPTVr6TpwrjzYzezV47Ygk2J5",
  "key10": "5SWUaUPMBDfP1Mz5wkNDSuG5EVUeHrKRrMRAmVL4hxJegaGMVvMrVjo1gh5oYbitvZJ4hC12f7b8WAtXEQrus7bN",
  "key11": "ZsFBkWD2D5irLq6xfYW3BtK9RtgQmBfn9HVaaaW9xGrKd84sregFTugtTBx7eF3Z3MHmKrM4sYeVKprzZZjiXd5",
  "key12": "4BVJ5GFnqzDyXQuDnKsuQtydPqb6uqvvBSwc4MWh7kzcKbLWGssKPNLoNH9r7D81A3EF7BsHSsf15LiCWY1ws7eU",
  "key13": "4YNbSG72BCwPUpJuCLbprjz5cSYfmNmYFrn7wfJrkK9QMuedFxGj51Xu6LjkHAJ9LrbLu5akwcSu7fEoTDCXYBmH",
  "key14": "42eDi2ePMgRSxKgiA7tcWMFu4zkYc8Pon1vYUs2huWCQMqyV25a13SHovHYGeFYpAF4nBnndHwASYYVADgTsVd3f",
  "key15": "427NBFFtWgG1PPDYDTvA6kdU2FRcbpRn6oyvpX8YDEZDWEPr4PEyr6wW1MjrXqip1dLBfnMuA8KpjaTvaYPvWqXb",
  "key16": "3dXasgYLNj6nWbFkHvGVRoQwRHLJYh5434Ra5PgmFFvfKfJawsPg2qHGYb6w4NFSBEWLm845xZTfbCn8JfhdJeR6",
  "key17": "Ei6mKdws4FjkQUFKgfKtdeSxMoYW4nsYuDJNuaSbSm1k6j52FkAnE1HYLyoxkfzg5GsWPZavfwzCpNLZb8oVnwo",
  "key18": "4J1z6f87edVPp1GzE8ZWhcKydziNJZJDyk98pkG1fKGtCQhGUHsyqWusQzNTZ6S64GRQ4PCP1ySGyPq9GZaCsBWS",
  "key19": "5CZEuhMFmncTtT4RQhLsCGsS4qJY9HwW33cuRScg8azG9FJnm4QD4bj9rqxhC8s4aM9CcQvgAmdTHd7gRyZv9YYM",
  "key20": "61duwBEz5tCQUdA2pjU3p1pSmYWsMTXk282Hqyb17crty11CEX1Zho7cJ1VQHnMpwBQxgpUf4FNJJB4wEksvAkX2",
  "key21": "WB4yJfwJ1U9QguRC6mLTtyQ8f32EfRSRkw8oyhWJEzvcfDX7WfbY4yC4WRdNvoS5SZnhd4xMgE3CjnrohwC2QL9",
  "key22": "ZPuwczcMwBBjAMBhoZczFFFy2s9tth9epPuTPFQgGA5DZP1Bq2eKqhYm6nq31Q2YgvYU8CV7kBHgTX3tYLnH6gU",
  "key23": "5wgtPWS2PYE9te7aVBjAssFNa2tWYUyLA22FtELpFodm16Nh9hwndRvoLk9Tkhg3j3i9An8RQ1yKGqd1wYS46YFu",
  "key24": "uoUyy8kuQFAuxo9DK45hz4vdpU8s65AVHXoXqCkzZJHX4Kxvrbd38d5jbakG9HTU7DGRqLgMFFc6ikEW6mr9fuV",
  "key25": "63qA7YjZb6GB5Zs7pnyy2Y9c9zr7pUbHJihR5r1i6eufvRoVYpiYvPbXpfT1GMyieZjSg6PChz7t8LwrUyFajSXb",
  "key26": "5V9MyBm8pMFi5MdbXsGjWau2gZ9jxeLGHMCfSh2eN6VNeyizyPwM4LJJQKPamkcNLMDa4nPcBdcAqumhaSKcayE3",
  "key27": "44mrVKmqpj6oeGjUFAqt5ZfWjdm2rhpjdWFy4nkaiedu6veYL2NWCfkgUGkrZEbeuKEBQP7TtkFbgWrwWj77Y93x",
  "key28": "4dyNvPHUM63grff9ewwZyKWtouLE1XQmw7PZ5KtTweBCrCEJDdZKYMtbaDdrRkus5rrCWn7X71x9Q5oCt6hFouvd",
  "key29": "437oV328n69NSigwxN38iANi5LisTy6abwQZxPscNtx7KRXxm7Jj4c5BsNSBw7AvNguc2sLPUtJnZ4YCBZJBVhck",
  "key30": "wGue9pEZww6uk4uevq3Z6L1DR8cm2Ngy56TTJFsuoDjo7QNuhMDwY5C53mjyNXUkasKJcAw8Uy1164FqtM4UWnr",
  "key31": "5xJhPKGhV5wwY4Y9WuQ9pn6FcAJ76XVkgRtrVtA2bACGRv6CfjZy75WdPCa3YomgEe5g3WmEYTTMcPRZFcW28bvJ",
  "key32": "hVQc5T9ftkEboLMSMKXqayVYKwpj5aU4LMFS8LxqCboEegYzFcFUi9R8FXv2HTHQne876NmqNj8akrEGMDujVyG",
  "key33": "5mpG77HtEu8L7GhZsVoEoAWR9VXCBngSgQ3V6UGJi8QE7Y8KkxytbZLbyc2NR9DhdwfPwv3C7MKfsVRdCCqK8Ktc",
  "key34": "5jkFnEvLGhN2QaUbc9nhuFiorGHtWKJqVxZTGCj2Y9T3jggh55SMBa6RjLmWgMcujrjw7pQ3tbwTakR7mtPBzm4L",
  "key35": "3pBNnMGvxz1qWKbRznH3psUYZYv5U9RfB7rQXqZt2LFHkSXPkymqZxu25qSYXcYfBDpmX4eLeAvFeVsXyRymA2Be",
  "key36": "JuaihwDJGxnYhGtwhjz2KJ93uEuRmr4qFZJq6yPXdQSyUqNxCqZeK6iHvW2QPNzCxWX4gPhm1FbuvQARRRVBffa",
  "key37": "5YVoWGY5rp39QvCzcviyisk53wUFf9fRo4VCZ3LwAT4vB1ZvJ9GtGJgkE31zx4dWzkX5dVcUL6MhxbQQuMqpUKqD",
  "key38": "2uJU21HMCic83HeRiRFMJfn8TaPqPNzVrLwqn24PbMYmMBuxkK6VcPzQgF4QNnB4FUyUREE7ZPkwG6TUmBzpWb9s",
  "key39": "61MJDxkBAHgfCRvXpzdkrYWjeAQDoeubikmMeN6fV5X5LHXhNgPxgsgNmn9j7cBhX3A94ro2CNhsQqMzJrvw5UX5",
  "key40": "4j1WWog2WTkk35AFWDVAZB7oRFJC9Spv6RpNrWqGakH7BH5PB3yQPPCYh8EmU1QWrCx8wkUS3ow1Rm3AqGTJksyR",
  "key41": "5wYS23SLS9HBugd45ctomEWyNY57DtyF5Wg9m7Z6zJLhjDVroZFJDwkkyW9cTzPv81AjwexAkEpEDNaXBrsG1xYT",
  "key42": "5bx9vV5orcreA64uYfoKQwZmELZLat5CVf792ffocT29kSomTvuP4WJCpeNqazMXafjnCUc7yo6TGAP4SM7f7o75",
  "key43": "5apBjZ839SsEzSJ3sRdfBFYHEXzzJRjUwhZmqy41AAQg2wutHVBp5wfgUjmuBii1oCDa4JD15pwZBtn3aLDp4W8V",
  "key44": "2xE1kahx71x5GvWWeNFAKDgSZyKCfKYBWoiCaV6YNNxbq9ZHfdtEgKhYZ9KbsVS66XTonHTDiGFuMqxYR3ocujsQ"
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
