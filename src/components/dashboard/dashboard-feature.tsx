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
    "3y6R77SuLQRkxcNAH56YUEu9y4bgv8XkAWihw2bPvbBKhnrGPvVFGK4UoGmpbzbCoToSutiaNKUHxNsQGoR2UuTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52inmjXmuyCeMW12XwQGgnvUmSVKzd83NMShUzYjdv3oZiVGbjY3baeiMQtQFzjMnPwBNurHfYt5AyXbDBZELxh7",
  "key1": "5cBX4LvbD8RRbH3jR8zgHXrBb2CF6qBFbsXJCjG7Rqjb1Pauc1sxMRSt62G9vYYJMNAmb7oYpk5jFESQizwbW2iq",
  "key2": "57tFNGfdKQ6f27sXrpJeMyfyhj59PN7i33uUt6Sa92NJQBMDLTWRrpF1K32rTXvAEdvfy1f5xFsdaYxUVnnWAHXh",
  "key3": "262YHEgatyAtwFKzR2Js81pbXg7WqKiCq36474DURBHqRyZH8GdCpvD5f7jujND8GGxdhj2j35YbHy5CkPS5Ro2V",
  "key4": "67d5tCwBjYxiBb2ZrDZwsSj7xggn7NvpgqHUVhFeeec422eGpGo6pLNSW8vgtJhJ1se7WGm9kDrQNnXE2VahkE6q",
  "key5": "232h9VjDcTMDtn9VUZDHGtLXbS93DHWXVefFANWm2AEuDWTmfqt4YowW7EM6Z3ogSeYGhBfRNsKT5H29sdyb8aNK",
  "key6": "2rsNsDhWhECHGw67cBCoUyBJBpbipD5h8KRzCXhxty9pdcm3sArpvnJWQda5vzYrFBR2Q7HE4pTB3ompziofVG85",
  "key7": "EB9CcB3kWsUrhfDeJZz22BbLmd3JtnhjAmoxXTBdqgqjkRB2jWawNXxhjnrJWxVfCnb5yvBkhUv77LruDyPH6p4",
  "key8": "4ZXHEEkob1PC9xp1m8QadT4t8Dk3oPTJhiCgPNcNGudeRTLFCLLGiDCnftsCCjxH2CyUef6xADYvkPBqjDFS6KAu",
  "key9": "2PHDYqEBT42mMpm7HFAduwQudbX5oPhRdg82HrxYtjf7DShcxgaVSQbXxwazuiTcVC3bkTrJ3ccTTjeVEnG2rU7U",
  "key10": "5okrtGmgDouw6kDz1cQpJCxZ3aAcvFUKqM8kgJ8CV7Jcin79cCGDsB5vEL2tMzDbrSCgk5Pc1UBABuzhhVdmU8HE",
  "key11": "4YvEHZRzBgWhvRDNtUFFVxUPjY5MpSX9miJJg1UMS9t5F5SLgryi5UFiciLGSbXL1z6iMYab2U3cE1aj3omoUpFV",
  "key12": "4qcqpbgvQEbXHGcZnFtbmkePhUwRetui8BXSYCxU1dmC7wuXNxehveCtC1dpi8CoB3kzy3hnUtDg6hVAFtEKBKAJ",
  "key13": "2chnRvQsWidU7NQgcjy316PdQkozwFZnB6gWJXhtGWz3DGo4RiG4Gn6pNT63m9sZFzpZ4UHyGKRFKwNXuLQBzgkS",
  "key14": "2KSVZfnHtqcPtWgzJ3ogmK6BYvDiMEMTVNbMsirxtmUCMskfPuvy7Rba4QznqCgZ9rFpbEBG7wMB3WhDPA6QatGk",
  "key15": "33BVDiTth68c8ggGQTL2ZkpK9SzF6UiTb9rD7QuWKmy38dJrF9iPiKhNryr464bwFKUbomNusTf1TVdJA8RWeM7n",
  "key16": "2ECzKqALhGyaKzzugpqYkR9iarBHSK5pDMFGXqKiRynJstrcmbwhf3akrkGLMbi7UEF9P7cUr2FmsEMxnnXehkGB",
  "key17": "obwcXqYakmTCB1Z5aKKPc8ZPhTGBySjYNM2EdzBc5c3mKFKqUscyQjxWEvz7Z4qhEK9WGAMRuCaZQd6QMxsctGw",
  "key18": "3jQpwTGH7UegM1aM3abecLv74GyqNe9QGE5kxyMVjr5KpJvZEp9XaMuy2u34opqjXDGMteupyM5d1ovDCSiU1TnK",
  "key19": "xmbWKW5r6GMyNZiUe1Xcxcv5dA8GMefswZr585xbx9aSZJLHiarBiWs3xW2kR8DzJx7uJ5LTNhpWFXKfvXAUi49",
  "key20": "5vpGWT7iNAwR7qXsV35mUHqAGV4PkG2E1Fkq1C5pvLBJNyJjsLx8LaKVP1tKW6S1GWn2g26xWA8NxY6VSXvNzrDo",
  "key21": "3L2fLszmd8no6US3wxa2ZvHV5k8W3h1M46DiWVC6zNUfw9nTARWR48gLv717f3du87jghrfQJ9MNUyYVArwwgjZX",
  "key22": "3y27NV7saXtCpeTywseDohBYowhzsCwGvGyhUFn6hd2AmH5e2MPUSjFD7f1UK61okCt8c9i41mWqBx5r4SjDCumD",
  "key23": "5gng7T57bHVL5qNPD2a2DssyqaQaTjTFvtGMW8miCM9vj8TrjjVm6vSeGUxwfysThcfAo4swKZfa2dRwgaX2Bqyh",
  "key24": "3tpCtdH9gjxHP3WXd1bmvhd6wzST75dQtw5255mVPay3VZ28KDR2w8wvHbUWgnsmyFCrpraHPHYdRcAQisgw6zkD",
  "key25": "3GD3B5B7oYEzH3ABXbeZYgsoHhRxguxHKSkSEroprcHvBivWUKz2oLQutuoneSiTr48wQo2g3vFndo1juac4Gpgc",
  "key26": "2cngDUkgg8Uu7bKKgJBz9Vs3B4Wudqw5UK2rgBXWJsSRfJqTufNmTFesWsxBx8g3cRu76yECS1aAXfbRyu2KjCY4",
  "key27": "5HCbWukueLp1ckeSCK8PCTL63Ns8e6nAXDG5htUfkur3Uf2GxHcRALabC7AxVUUk2xvGCsdF7WKRhapiZCZ2pKRh",
  "key28": "mPJHL6tkuLJehgnmHiBPUSVBWdBrBUMRZAJLEJdimbjagZA47xmY996vXcx4BnLdJ1k4tPJJwv6wGsrbkrWMeQM",
  "key29": "5AYfKbtSPbBewLWkUtrF8xiL7Lq7qj7eCZWJS2YnUr91d7fPJviNdTD1nceEur6SeiuZGB74c98Hxs1SBXL5pAyx",
  "key30": "4gMUpXBGMg7i6QJXEqqCrWQew45HusPPDcxsJg6YFdv2y7xEepp7WXxJwKirLj8RTUAQuhw4efrYCqVKQ7DDtYRD",
  "key31": "4t6tWQLbPL8Uy6cFNV7KS1r4gP1gu82HF76v1HEFXmswdpYtNJpEaK8Z1ZdRtJm9n83AT1n6kHWw3xBFiFZ21jgs",
  "key32": "2XWPQADycqKiv5VMZAS6eqT1t2GJKnrAGxrpy68VMYB3CXSZeunAk2iD1tsuSSpAxK7rJ1NUxz88e4YGdJFkK8Hu",
  "key33": "47Bb8KJyVMYvxjsgs3syXTRL5yiLCWJJuKJQSrcQYbSCASVS59Vs8YckCbPXPmRTi9tQ5jySQs2wESfSfr8UtBu3",
  "key34": "3TxWkxf9G1kym3XQVtBLE9tuccjBBG9PFndqrENj22MVHR2QncUDTaEjUG4utgHvjCtv7QKsUPgabT7HN3j5PYyT",
  "key35": "3619FbqS4mgJxdqfD9L1x8KafzwTezxUDM8Rcju3jU6VxmFUnhRdZY7Zv1eQu9mPaLiRorgd3HSw8VPC5B2Zxmer",
  "key36": "24cpmTy7dcCZu3uaFmxZ7GdpZ6PQRZkfJpo93EUeaB8gjB9iiZNz8Q7zFBZhK9ueZv5B3gxbcfNAYNM4r8SyY5Vs",
  "key37": "2wC5wESCHovWVXahcqwp8FqDcYGZxHy7yEDPbTCavWSzNDiqbiEm38cXhToQuZeZFzcpGLMjsuJtxGyyZGP5BaSg",
  "key38": "2bWJfE5Bt7F5tLTx55sqkLBTghhSEvAd5Yn3bttu2bp1N1WTYRYi3TZyNMgCBWVqhrSD7cqYj5BcP17cF4cw97jY",
  "key39": "5cuitRbjrFDWhNJZKSWN1yd9m77JL3nyDQZj6zMoc3tQRRwntLyFyXb5TvjMGKSgYNzgy8fccqXYaz2hBQJz31EV",
  "key40": "2pmiqayvnzQcTwW2S7UH65nFQRPXMJeDtdGiYND3aM5K16M9cCnzMPseJJ3PgQAMEV7LSceJmTrk1mQvMvnkVnzv",
  "key41": "5rVmKrUMoEki8a9WeG2JQXHc6TLGR5mh4qtKo1GCbtUsEnhzFwp3odcYQ7PDUPFuevQfoUdkRR6M2bYC5AR42RZN",
  "key42": "2dj9Z3K46HTxLXjLW1xHzXzNAUn32jCtBktYdZTxxD52LuE5gQ5szpHNQG4kbZYJQYT9egQtZSdY3HVktqWYPfLG",
  "key43": "5h1LSDYZTzJLDNNoqEcequ4CA5Kw1xGcKvpfeFtjRbWB78J4mLUd8VmZE6enBL9yMYPcfaskX8tXiqqkDdpLkTv5",
  "key44": "4GgnGripv3VfyzgRdneM9R7do25CgZz1gT3EaNoEsvRN1dMVo66KxUS7i8VsBURUfsvG3Qpnb9FsXXMbKRRrKQS2",
  "key45": "fYvzxiBV7VLeBUYPE8HSasVbZXxMWpnnew8MLkSmBDKDwCt2QEy8ajBYsQqZ3uLJ4683Fgr6BeVhFk1UkDJs55Z",
  "key46": "3EHpTtdsqFsTMpSvYEfmCwy8ScnPXGCHLVaU715B82eQBZXXViWph4BuGVwCute1ek9ESuNyEB7tqkfjrJeMitRh",
  "key47": "3TNTipKY2smBUu4eNedeUzqVwTy74aWsDMEJwAaxbZ7bpzeYTjRVb9jYkkV71ZDfCyPFZT4qEthxiCTccFJfG7HJ",
  "key48": "JGRAX8VtUnnuLsXNpyiRkECB3AE79sa6hg2UwYBLDwSKkbAPvF98RjreA34cqzcHSdxtNfQTaJtYB7U2tSuC7rm"
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
