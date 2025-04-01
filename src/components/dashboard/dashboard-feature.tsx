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
    "ojRLGbaX3DiJ1dQFCmLgNLQ3UoCDj5xqHrLNy59kdDqi4chkGr64CHbCCHfujoqeuzHHcaDMFFYkGYz3NSAyUd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xL2s8vnZjV1B2UXNWM7CLjSQUcMyshCbFMt2yXixTmr23RdWvi7r4Ny33UX5mnQSDT2gezfmEvD6tf7vSxaRF92",
  "key1": "4tYxAF6N49jWyHdi23H3NUWpQ5vSA9MMnahJHDKM4xBDEzGkgKCENXb679AYgNcoUjGkNDaA8UQ5ib3xHBW5C7jG",
  "key2": "4XdSMr6qTiZfLGytAzzPKyNSMK7TQ2u91mmzt6485K452uHvHgwvBUczJhQ1b9wJ5FR2LcMBuCcRATcUq4AQU8jh",
  "key3": "3ZMH6j42GSyMcnCCgvD9ZMn6zRRDvmN1ARZLRKoDL1jakWRnJP3y4mh36HvaqdRP6N65zKBdCp7qdnF4cvYpwQky",
  "key4": "2jZo3E6X5nQTVZRtZm67PY5P5iLkULgn8rDevYAPBgxZPni91zSUAts92CXwBqbS648Fw4oLz8Y9qCwzdtGUkW94",
  "key5": "4YcAzRtQnrzAXDtfowbnaokLGK2WWF9oTKT52jJKqMsXuUJ7Tc51RqnhgAthksZXt9SEbSWrN9epYC2uT45G3oNc",
  "key6": "2VNSBzkCFqtR3fwBHXUeArDGPKu5TENh9bvLPX1eXN1pbQgUMEpRE8KeYnPRS26Dw6KZEKqMiMF3Za8TrYM9QfxU",
  "key7": "3gArSu1Gdu5X1F4xNK5ZkRqUH12UpLqP2CcZBWnLwMCoCYhPQzkSxX6gWbpxZE82Rj3nczgLJNGdCT56x82d4L8m",
  "key8": "3nhBwtQ8mUBzxvoyB42J7rUcdaEdigPEdtCdoZFDjyE9JYg76h27yxPaKVNpXpBgu4SUQBTTHsiyYswQYXzcL2hT",
  "key9": "2vPsGKsjMdQ5n9pESmFsSN7ukQSUP4HwRQUXepqA9oG4rNmx9umTrpWk5RJzJ45df6vbKDBCSCF8CMbKH5y8Tb8G",
  "key10": "2FMk7rXQSXCKgCN1d3UkCvkDfrbyw8htdvLaFd8jdhWkicSiovXv8G9myLkt1JDnMeTd7kQNBd7AfMtqxzQegUqd",
  "key11": "47S5g27eitjTHRynzZFtQYKphdx3HDDnGJQPpk8BbTfQea5gN7wa17uNCp5BVsWQ5VPtNvQKaYgK4a4HVNaJL6ys",
  "key12": "5xD4Rohn9bY69UL66Y3KxVSHLcN9ieKJidPXuSEUBfQfBrLZ5nHB5wCjRoLjKCYXzayqz3u5yCx5scX2WrbUGAQm",
  "key13": "4a3BQeCg65nr5HEDH1aJYQ84WW9AhvayTyEocZ4isaZEeN9xRrUDgXPJMERjBWewkoxAHQMmDrcD5LqKoLNQQ4PF",
  "key14": "3tuVduMArgvxJgN7mr5TnrZ1cuJnYbfN66RvvwDKJ67B25UCjNNytPyW3RK1RsFYQDan1CR7wd8r7cK8vzVxa3J",
  "key15": "4Df5a4yzbJDni1P9ynNgZsCzPMSCf5mLzGFcddn3foXjk8NkHVH72G1UXfUeeewLLksFcAC4CKdoqe6emzezqpfC",
  "key16": "n1LABRXTBemhBagnMkWRtNdw1o4g8ofTvajy5eDaMr9cAkU7cDcuUe6ACMq45XopTKZCWxVxbyUxp9z9ftaEhDU",
  "key17": "3Vvd5sVVt96kYrDCaAS6s1gvs3QiYySbup4hoyvkCDNDYG5nTv6n8vNXDkFpSVarFFCY11axMk81uuQXMTsygxf1",
  "key18": "4MyFchrSVGpTgQTF9nJ62vD9RjRuvtUtdBCMjAXbmgHrExsmuidQ43r2kg78THRK374JvL3p8wL2X7yqe3u84p64",
  "key19": "4tmao83udLwEcSW1BxjH6nduRCLpG99LSvDMJNzbnhQQb3h1xcWMu6PAMP6LfpNCs4V3fC3NjtVng1W7e5UKvbrj",
  "key20": "2vgy4DK2b8jx4PPwiRKRrG8r7tHxB89tvy8LL5nSgiv3oFeeo9gz2xqU3QfgTZqhHMxthd7uUUy3tJNTAR5x3JtK",
  "key21": "3gi9WBsEjr8m6yWaCthYdGsA8Whb3zPvjCcZTcjgjy3e2CRjFfztuuVCr42DGNMEKnTXyzAdMVgHKKxztPsa7cox",
  "key22": "2RUneBe3CgeXhajVZSe7gr4DZhGywXSw6BGhLg4TVQSFcZfQQ6sgx3EjtPmYRfMtsnd3GAaFwj5nHawvJYNmzw9i",
  "key23": "4jpx637sm7F5N3n3NKMonZ8J4tFeXjWmnvG9KVdhaU48muu3pvVstkn65jQbajDU1LWSxgmgcQ4J5aMsVCJCVVpw",
  "key24": "2mNAuJZKS4WZYnqKWxzWGyuEvtD7Fb5niDCwjhnP3RK16BSvfmZkUuaDdqfGuHMvw4rZFojEcmBhvdn5dPXaaA14",
  "key25": "3Pi7Ht8uNhfK7UHv2wsiZG7RkygXKRf2eUBBb1N2PKSgsuT3Q9nGia3nhNh3hFrgLrnpAKRGmuaWUJF7aaSTetyy",
  "key26": "4KrSnRWrd6HSrBVQ55ZdmPUXnhk2Tb6oHHr5mwyqbjxUciC2BbsN8QY8GaoJmyNxJLmiZ4KWSkehK6fEQX3v6fb2",
  "key27": "VEBw4WRis7bXFzS9FXBi39sBHvbDHrM1Xyi8mcReQPg3dpJHosaS4YX7C6NTmEBfQ2S4yJ2nma2Ld2ri9QESEGD",
  "key28": "DhdrPZGu3kmZ9AQERZfUMq1Sb3mxzhTdEpAjj2K8ck2DkXDSxZsEfEk5pmzxutBnLDHEFw72eKvnyhkGao9Rfkk",
  "key29": "KDV93bLN4bkLE17WSLUzVsoDZ9gsEDdXtXWwaEao8mynpdnL28NxLiuSov4iCeiSXs4JRs1YmBx4hAfFe4RNGF3",
  "key30": "5gYew5C7eBLckufmBwKqBNPskJto3KXxnDsjWG2GwcdK5DXJxQ1iBypXdvtZAisV6ab3FA4iS4niAPki7pVLvwRV",
  "key31": "21fAaPskiSVPVxwLBPYeiy1yp4k122Zt5xaiCMFXScp8yUkrJvRRtthMXbJaN2knedoD5A5mGQ5Sp4JTJwmpZoFa",
  "key32": "4RkdTzVCKzVA6Ecd6sNoibhyLjP8MNqdC5M34ouhz5tQjCJ9FRosVZCkiEBaDwwPgoKUT35ZZDu8DCG7hGTcvgfL",
  "key33": "32F24cZSs447YjcGQGjEyfmefna3shnSk1vwD3vNZvzsjSjuLT7qX57ZCiv3rLL2Jv8vk9JtyEqUs9fYjiAKvZX",
  "key34": "3DMR8o8bNZ1pe171M2nVo3qYFouXmZCXcE9u31ab1w27e15VY8d1E9nQow3GUwSoXqMmLhbBTx9WF6Vygfq8Yek8",
  "key35": "oUkRr4p4E1Zhva27WZeeKt8cWbzbeoV4Q1TsHUQwUMHyXqhofCfz86ZVHZvdDznFctYb5bKKsvc3acwUFGYGouz",
  "key36": "3rgae6ggXm4oZMajUeqov1iJ6gGxcv7Y43ovDQK6CaEv22JWyhB2wM3pu2jzRquS5UCdebZbynJ17ehbJBC5N4Ub",
  "key37": "5e1XSXdDpECsWNzDB4MUHqsn8g221vRhUtn2kAXfxDoBKBNFS4LmpCL9onmjPssBJYrfq2pf8prHbHLs6TMP4UYQ",
  "key38": "vvCjrK15521uSXZF82P62irMVSR7JAEXmqrJf68CMFbQ4MLySTeXWFeCkrDKzMW8vjsAX3BVvnAmKKpy2euPi8e",
  "key39": "2zyuR1z74j8cFfDMNkhzdbmC9xr7MAGvKqkLqSKLK7n2x9vRBKrRSpwtTVFwbbJ9xtPf3MUTiZVg6rw1ZN8FhnGx",
  "key40": "25yESbYJ4chFx5k1oBonCP9LeoYhWA34cJkKLYEcHcdNJZCT3YpWqX8rCpzJmEDtz9dYDptyf61d6SgrCSefQwg9",
  "key41": "3zQLZxe2GgJ6yKnBJyiK2LwvdzjSGnCW4gY4oQexdtyxGGg15tFV47pnZT75CK9SQTmXWKpu3ajksWp85VMmwQpu",
  "key42": "49c25BXoiNBBCrv1sXLXsbaJzA5fRfXZUtuyb3WK2FhoYFF7NyzmXovcVatjTz4CAEwYRAisC8GVD6TMnhizEoqi",
  "key43": "4caHuWBhDENxefpp95YKLwioBCB7iuNw7PMN8doWDMM3Z56dfWHqqLV8dxhN19iGDeP7bX3xTSR51LjbzcJyJoWG",
  "key44": "4NHyShym4BN6DCREMhYDFgqaQLuUfTJWtTD9G37dLK3eP6aFJLTiT3GBSva4RtfbUphp1QiUYf6rSxHht8Levd9a",
  "key45": "35RxDbtJBMSzV1x45q5LYQjP1RLC88FAm3qM2Gh7bcdTmMegoqYMq7hvNmpH2Ut4haFuiqeLNr4ZGCUW1oopqw1F",
  "key46": "5my4zEa28cFZqPUo55DFsVSGiKHg66eSKvcjQ5qYU2sbbaEREm6Sn9xAgU788wJi1i2GeEVot2MjH8AL1pdyskj5",
  "key47": "4pztmneoRZcYEWFkBgaQFfdtGT1oQYN4vrCS8EGW9FSnx7jYUuofZa81W8DDDNBRNeyVLNMWAPGtf5uoAPca3oCv",
  "key48": "36Ng1xwYctBciFsoR3jukFZ3iyceCTYNDgpyX5sye9ZRgSapvoR9L5c3buiowE5enrkMh8VHS7G1s1CGJ4e5PQgE"
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
