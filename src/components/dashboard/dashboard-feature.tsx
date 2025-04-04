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
    "3qMHVECeQJ8MdBRVpCBjbePCcyoFmrGJz7iPoHVUJyrvpwfg9RiDpoNmvzds9vEDcRHHoXRUVABgYS6ed9EtoFGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZDdRfciM3WAzmd2nkCGtrKEvjxG37heAZURzG4ePmryE9djwbct6693Xsbz7PgubvMw4mznEBoLwPwwNoNxY6E",
  "key1": "2CkYrkDU9KuQR6qf79QzoSaR6HUvNs5zFv32woto71nN87Tqs6JvQMw1rEjmiME1pKfx3F3EC2eySSVvs5i9rzY7",
  "key2": "47k9jrui7EDLDvYkdAthddxf3nAUWv9cT91mQco5kStSj67VDsUWA7KQk4UKLnU6HmymD18QzoKCdUEJw1kUEwim",
  "key3": "2FBJcwDrWdCjKcYZkbMVjxnnjQSEHebXC1k2QGwxD8kiASY8DRYXZ7VDcXdh2MdUtgqceWE2owG7oBGgNaE1FCw7",
  "key4": "39mfrDeeQ12KJS4UNuuBcAT3wSJEGErj6WeDb8pzoeMVbqPKpnLqkVaDxtHx7i3xkiEAwZGwaZuyh26v7cbfAuh1",
  "key5": "5PzKTkNirVQfGVBkhL9da4Amx57DmMyU7MXvL7QAcJPyZxJN6YErf6igxyN1ohrpqepNE2MJoqsGuvF5rFwjNwQ7",
  "key6": "5FYPAV4Uxen9SSE2pZ4vaX968eHapY3xvFCAnKFBSFo5Eqqum4dyjAKAeD6baDPXAamyyDhj3GXVo813fcpEJ5ek",
  "key7": "5HgP5NRBJpVuAY9peX17tFTnkpm1bYRAfNqv3m9kcTLusocovaBNgz7rLhgY3WPAF6cSTyCdHwFqBFo4eagzqTXQ",
  "key8": "44ZewPaP79fgHZZm6eVvtjMXjURmcaJzCPzv2CxjDNNL1gxTaZF2Tp6MKrWdzdCQcGHdEFscykisAxcBCEw3w8oN",
  "key9": "5zFDmDmzwFF1QPrcs6udFwTsYuiBLjkWKzhbAxjqfZRyeDq1ZXGbZ3Gtd7o1KaDrHZyQJnxn8ss21i3QaKmFMAyh",
  "key10": "66VMKvjQ8D5DCEfjVyWQghAB9fM1xukoFDF8vynEaGZdowrv5DKH4Cq7Ad1gFeDrSST6zh5UyTyGB5T6BinUaHKa",
  "key11": "rEa4TUN7fEGUwrRb48aDWfa346Sv18FQh8a5DxTYrJMVyS9oPzU6vo4tnEYkfjB3RYQZYHDLHtYzdsP2c3CPYwf",
  "key12": "4LN6NEX2hJ7Bdsaz43aQUgcdSnbmVbWxEsG9Cn3aLJok5FACTw1LSpNbiyPBjNAackKP4xLfRRmtGhcF3HWQ6ggQ",
  "key13": "QKgUDi7z6WsjVKqJ6kCxbimy6kX8Pj5QBGXNUKCuEryDwhbiJpaUEFgCR5cT8M7Ed25xUFXiPvHrLyReP3sDeMS",
  "key14": "5caPCuhTjkbZGC7yHhN64Ezdfag88SVVLZoAaUiG6ts9rMjvqZUgFARqsxEtnA4qF86TFw5fMgizrAqCCmQmz6vt",
  "key15": "5EiSbxPCoK7wCfV2RsBWyn25ouT1LLGp6Fu9KtujvCVmxoqaztyEkjPfcFgKmddPo8z9GSEj1ZTmvNWewRWxMiZU",
  "key16": "5eRZipTA4UYNJSKeP7UooZFSvyeoqsLKDhCwQ5nNM4Ck8DqAfZLe7uVtDfLRzUfSGMLnXZbEykiPf7AnVtPa3wPK",
  "key17": "3eYzVSED8Q1sLwzjo7h1MjVFdj5JS4dYxJcmAdSR9scGHyw8euti9xcoLtQTEHn1iUPx1tyNA8PeNve9iQAJQ18e",
  "key18": "2zyapqrDcWsTheehsxdRq4Dh4hP9zV1WnCnyrV1VSdS2Fx8XvuhNxHrCuKWrRau9kq3VkTfSgo4wSX2PvPKW2sU3",
  "key19": "ZvsUFFXZEkhGBnHhEgcTqkr26yVqmyHL5SKwZubAdFnGEX4GLGjhZYmTfY2CTtAWD1GwknZrAXs4gSmDQXp8oQE",
  "key20": "2tGiiuWBo8Y3NkJnf3JxPXthg5Rok4U67DjqmUmACcwJVp54HQRqJAvJwW7dtc6MmT2mWjP3n7WREaFahPWkDLNa",
  "key21": "3WMBhCqsavudqS6ixnfBt91PYR6jfPC4Ud4MAnB5S87qzMbPHfMHU1ASuaWS8em5DZKe6pC3HX2itw3y3X2Ebt8t",
  "key22": "2TeMNBHPajwFNBTiZRd4HVSLFT7itPbC1DjQXs7X7rqdxoP4wbweMzWNKcdgAnnZCoWesWMN4KRiRGhocyg8sriN",
  "key23": "2jiUBuqgQ7rYNUh9fdYLxJuYhXHQhxwdKTFdBNZfgtxHGVQ37HVe1XFQKrViUUePVr82g7HgttCgm14mRiSfLTBt",
  "key24": "2TwpmksmVwJfNBQRp1xmiMLDiN7RJJDDmTCjPNFKTwctE9CvHqdPuFepGJUsYyGwnEmfuYTd1ZgyfQ1x7zrWEf5p",
  "key25": "44WLuXKN5uQtvBaN6cfzdXAWrQqJxZZxYL7z1qf2o8Gn7veUjpP3tdc1y8Hk3s1BLf9UF7PFxhyxGEvZKDmDdrCf",
  "key26": "3d3cBJrzbM3yoqZwmAGLFqZL7DggNLT8mrGxfJ1Dvggwf32EcvEhikFvSBy9zAsaHyLNK7QGAqAt4rbG2zo5jdvy",
  "key27": "2xqWvP5Vw5R5oxQXeuHZarwerKmUmD4597PSbT6wspf8S8hXhQAH7WuVSEWQMvbzS2k2APYtbzKWYd8iAEEGrgUK",
  "key28": "5yWnowuKD8xYvscBawcVsYR146bTmeh5bPFetRK1D4assck2F7L5iPpSs8rV4uYWsYS9HtKT96XwDEwCs76bHnUT",
  "key29": "rPCPsVbxbky3puCw5nkmWbXvo6JQi3Xz3ioa9qYtct6XA9FHPurwKLqAtTjAthAxCP355JW8GAGr3XPhCCnscnG",
  "key30": "GgyocnUxJHEivnwQfCQ74o18FEK7e9xfT8JLKmXy5idqsRVKRgNiBgTHfzRwh3BMhFb1g6Synx9JP3SyQU29o7z",
  "key31": "4Zo2mrYksiUpo5CBS3i82zF87uYZxs8c2wXMhJ32TueriqcUXSHEybNGVCJS9iogUHU11o7MjqgPhQBP4eh9a73Y",
  "key32": "MSrnX4yXHEg11E1gSY2cwkdVd236mxEu35gHQWdbKQ6dYeuKBXB9EKi9PxfozDLXtzknt3JJigD2quxdQA6TPyr",
  "key33": "4c8Wpbuqbe9tu7DXnuR5KCVGFxcarNFZJyq4XU3WRyz7xc6EKtgBbmj4DxYgDtMnY6RytTQ5L8mXhhFSadw5MdXV",
  "key34": "yojev6pmbLmRZN9aMUihH7YGMfZduivsvd2V1SPxmn57kYD5ySYSUpPS7y5GTPZ3yVuJoGB31PK4C47ckxkzKvc",
  "key35": "3wwgVbNdxdA2A1mDbD2qG42TyvPGx2X4tC13J2YLDQqBcV1y9eMfNvVLrGn9Kv9RBEVGtboqTCChqwXxQfaFPukf",
  "key36": "5X4Vfz4cQrQGKM9sK1UtTfCC9ajfD1P4mnqTMCXHk4DvUk9u3yTv39k1u5Eqej4zUon4VZrqcDwZ82cBB3Quxq7N",
  "key37": "2izkUw46UzdnUy8fVTeSviKa8FCPLinJAbuf7Wn3G7ybpSqxSz9uBYtVyBmEAn3fN4W5mhEK5Za7x2wZ6zWhDmv5",
  "key38": "3FAvHCcu9gcfXCxobYxhy29BTc8JCpQjQWwA6kai6kHkaPcj4UBspCuptbdbxoesK4JdzxWjSy9t1Ccjct61hhS2",
  "key39": "4yoDiqEKxeiawxF8W13WzK5KTchvajV4vvNqfUNfY9yD7aRSJFWxFfoZ6xTuHdwNeRHLx9rw1wpJFeMMea7beg3e"
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
