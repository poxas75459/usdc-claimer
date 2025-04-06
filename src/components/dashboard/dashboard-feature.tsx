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
    "zz3qP19EiLHgy1FwN9pcjDUqhLGS3Xj8CQK3ZaKNPwE3dDbbCrFeCw72gTpV8roKXDVnitwpFwrCNmwWDNgXEWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45VD7SKEofKh76jc7v6h61vEkTftsTG5KKe7Mc4YsEnqUMdFU6RFNa4WzpJBxbANo9Y9oPwmf3w3mzccbQcbFbjF",
  "key1": "4PxYPfYQSVQxWeks98sFiCJ1upPEAyTwPFdfgy2FoaZk5oz5JqWkctGKJssnh7KwSV5F9wjgtJpFV2R4NWGcZo6Y",
  "key2": "BvXoEuKXkWS3fsFyoVxqXGkYWBFBKYgw2hJsU3kJUFPyiZEGvuWMLVXBkuEmpYrXATGuFZXWM5SLAs6B7w2Ueg8",
  "key3": "2mZaPP8E9GTFhkUPC6iK8AMRVxLYJyYQayAT985B1646K4dCc1srABbVNAk6zY2DbrdnbHdKozepNdJ41dT25DNR",
  "key4": "3eSZft1VNViNHgjtdzFusRnDqWqn9sHfsPhmMFddr3PPqVXZWmNWBMo6YVkHhDutpXoSFtYbboenqYwY3jHGkde4",
  "key5": "3aGQWGuyvKmYyPcerQokgGXRZLFUa4udN1PDbj1U3yGFgAEmkTi8AuLW9bvWRPqmDbrRLFcyEktUtnsVCi7E6PSY",
  "key6": "5GJAn1wx6Zw6Juu9n9V5nRFr1fw5ETmNJWX88cwQ9yZVuLV2kDYFdTRAhx6PVTujrstkGKfakqErP8fWjf3XQDeq",
  "key7": "4ABWsbeVh2NwrqbttZiaQDx19q88xGVtQVRt1dL6Mi1nCxahjUEW5DweAUpSc5BfEdzY5Jg2We7FxN5tCZ41JqFQ",
  "key8": "3zwnFdT8TuXgr2VBRg3aotx7eMnJqMjfp4Ng1nG17ugbStsFvsR3pgUzvncfqJ5DorCXvAvJ6TAk124LwksxQMkb",
  "key9": "65UrtMoRaAFNeA42Az8Nqfxd1m1wqXFFzqs6z6dxeihX6VJKj9f9mPZTJFZ51Z2kBVBCUdXiNsS9kiXzVXDrfNAr",
  "key10": "5kcQKNxPf98PXUa33e7vV8PJGozm7Zjkx6KUQjEHXdQyGJVkTjQMZ7RGx4yE9EFvGkZNuTQCkTRkAxDb9TwuxAP7",
  "key11": "4JmyZv6ebYVjr5VDAQ28tgkhkgodg8YCw2NNrzjV6MKsTG5RJNRRB17WXNHCGH2omAbW9ur8J1HrfLQMpq24Rsqq",
  "key12": "3jXyL81MM85JtzsCFvhrE4EbNRWGjxyw62HQYf2piP8BaJcj6pZac2XEj8LasTkmUCEh98fgrYn2E23bQJgiuw3F",
  "key13": "AgjgntSqZrpoYd8tXQ1dTApvXiAvkDrAJJFXefBB3tetL4s9XsbivMr5xZmcyWPHeH6fvBydYbsd5v42SNSC9Jt",
  "key14": "QfqYcqwvcd4yGHind6MPWQj1By364CZ5cHFPbMytY2PEWgP7f2HFcRsoAopchmVG3Rog59q9QeCkB9ihjMMTfUd",
  "key15": "3JuXxNLrvHfZy49jjt2z6X471bQfzeaZVhSj2ugCCbxz3gWQ9BfTnPf22bSEvdCn6bHFXgjhHUPcXsq6KRXj9EK5",
  "key16": "3fzKy8UU7mxHEju65A3v3hHYmL9XRfcezHkhBxvYBwCsqKQTHZLUoAvYnvGcGQSgFTK7TZKVtgBmGvAhupP9NwC8",
  "key17": "2GToQVtHK9BT2dp12pRZGMNVMbnHgsBrGffUuoxUJW9nEuqULpW6ncQuxtX4182GQx3UvGxyFDLtB88Tr1JcCtwq",
  "key18": "4ztwWnPBcfJjis6sDx5GgkcKVYqXwdcSdictTjcu2xAnK7ANroBjhR9JAQJehbr434hT58NXCNCvqAGtXMJuY8Rj",
  "key19": "4dTqtRCKe1NUpYN5c6jaf9SEYMmifm6eZJfMq71k7LPosvbvT2V5k2aYZPXKKh8E2dqCf3Xef5nCjohYr5KSagNB",
  "key20": "2eonkAUpxLWegVSaioi6Mm2AjMDR23sikZk2XQfckuQzf9JiV3tf4AuNMZr8MKAwXcPicJSgzCGGJwFhsnMVZpE6",
  "key21": "WjhqTTB2yCU3rwkpcn1b19UeYdSW4KYWVdURH5xnvMzaRANcLDn7iSBX2mDMMsCC4XJ8Hbp2C1cXZYmhjK3Uba4",
  "key22": "3wbFZMwyHdftkbQZHWU9yAvqqhMVmGDFMQqkyM4jHapwp5qqsnx2747Y1EQUw4Lroix42oc59R6SpvL5w3d9cRag",
  "key23": "5oU34pjDU3gX63hMbMYW6yit8yCup4M1BjsL4nVkC8pFNjmusjV95suSm7sezA6QfZKHtsLhdGYkpgm5ae7YNSAo",
  "key24": "36kriCdXLtDLh5mpmSyTKFHTrL9TTbBRrKN8wiEjBD5N72DZEUKCBzLiTz2jkYoKRLc3G7BWNWphjEyMNeQtFxpM",
  "key25": "4guHXJsyUh4m3EA7ibgQd8y4dy6fvMS6PGCgM4dKkqA2nkBFxKpCJRmh7kVamSNuHqVf2Qar3fwgPMoc6a2596RR",
  "key26": "Bc1JWMP4s1vzwZ6mqgaYMnS4nKB57m26pHKUPLkqqXuUtozoF9DvioCpzwN1ntRv7weQiLdi5Ld3khuEgMbfELv",
  "key27": "PBeaSd6nWBPPy4K4a893qVEpzqZSWXPRkDXLHwqqwcQCP5KkaJV75Dh281AuwyizJronrYsVmQWqhnkdgURS868",
  "key28": "472LKWw3SqcvABhY1hduULvHL8SKneruzAuxbTYPeuhgxfhgGcGLQGvrHmNc2PQ5X1aCMxN8VnTozJ8DgwieXony",
  "key29": "2D5oGqtNHFrY5mA5UFYViqbdC2qM1ZvAopcWnY22gJS99qoHqmRksazgKGaCR11HtVUyBCsPqUoVUdawAFeXdSvq",
  "key30": "2pMLGmJH76jARaCGwVRNmVghAQHDZbUGUHe2p7ikqDFh2oU1ETeXzPq8eveHdjZhxNSL9Td5Z7gmgECpP3QwGQ54",
  "key31": "5vHGKb2CkcuZXK7xxCAwHCPwWzSigiyUfBvC4cnmKmDgL8aKCrKQTefYNF4mxdigxUQwkxh7TsAS6W6PUJfobg1V",
  "key32": "3YgksBrGJYjzeM9gknp3xRTutjMxZcYHjvVP19YtCV2EXpLD1mzS4fZkjDVB4C4pNY6AcirrVUbfBDfRVMBDA27t",
  "key33": "2LgG8m5HEUUuz8FndyyhQdkBH772M8mXRg6xV2SRcSvNfVwavcqgFBxgSiQCdMeQvqCR7pUUG3PQ7oo1pRoUnzrf",
  "key34": "3Rn7ZtLYf4HAAoaPVUbJXETbc6Wu46SLsAQX7M8MXK1Rh6kPnRc3QopsgM3dJqCHA2oMxgHS6MJn5WdNNzG2xVhG",
  "key35": "5uys75YELMpKxXa6XykGQ83qQikW5hGKHV7zHwCxC3RkwsvXVdpQUTjRwuzy8u7GMEGyVkdP5rQZJ3iqNRHHSzRE",
  "key36": "2QDvsMJgU3trkMcFW4MER6HQxbt9ATkdV129rSv5rz3LxDv9U76uH35KUGN2ouFydweQcxynTu6p5ACF55vGehYm",
  "key37": "3YFsaxSpy4TK18PPwDJ55bJg3zLg7BgMqstoYRRTnLzT6qeccyDfF2kUkuJRYQvMtsX1LWekFsrZQbDQsSrLTbuG",
  "key38": "3UUQXfDY9kKHYwyGWFdkEJNaubbGKkejYNubpHLtvYrs1KNyR1SKUv7Rsi2q6rig7c1grBC8cw56F4JquiK6eFo",
  "key39": "4gEHby6EWTMGsmR1g35UJWonGZ3n2ZgjtaPSWq8jddwSHkgr8RHd33R6NRwgE2Mxxc3d9EezEpRiCrZkReKqpPMF",
  "key40": "5fhLeK7V79EjfD3bcQsK3UNxbanxeasoqo9cj9GTcjsTGq4erg8diEaEwuTJ4qczaH7qEwQVaDKQqk1CS59xLghM",
  "key41": "44NWe7qGidmudjXxVLXdcX6FwqbRdH535d9TtnPhPz4tPrDtSR7fc2x4JD7usvM6kADa1nHXSZavWTcuAbYuQDTh",
  "key42": "5Up55teqVrffzs1kcKdT6P4wcYuEC7barzaQXQhQ4k4N4canUb77FYz7xyu7xG7hvzgtCarvAotALY13tr2eZXML",
  "key43": "2vZWKHTGzYe7ditDo7pFqHpcTWoxxJHY26myeJQsDCzetCYWCsQK5w2F3eUELNxqGsbr9jFdsPwr3xLwp1mxL9XW",
  "key44": "2aE7QxvVnoxmSxv8rDRSCDF5VZUFNX9P8KAncg43FLBtSTKxpBv1EbTAChzmK4AhnHBcV3CQxcUD46T6hLYFiDnH",
  "key45": "5VsN5Xup5KojuDDy4UzcftMPWoNrMr2DNrewBZewsrUpNWJMtXjV5ZcMtFkgwhhNJUFZiwrcfvGv8o1kdaxKyznR",
  "key46": "3Rb9axWcvKLAEjngSxp5MvQc6ceyTZ6ZvRLvtWCaMh4thD55BxfzqH2qYETWrfYAGL9iJJbhmqrfGz7j1dyKgJZm"
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
