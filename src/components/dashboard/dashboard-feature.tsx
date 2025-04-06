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
    "4RmpYVbdYxQYdGE8bz1mw45LKFvH627juAQux9WSUMu9knB2e3h7dNkDGTU3BUDEK8DvvwaNf28TSnW9JnhXqcDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SemRRHvgenfyDsafvoeayBtgagFCZ3Ed3L46hcp7PPhRvJ3dH5dy1PY8svggprC8ovMk41zHc3poxze3gqXNjfG",
  "key1": "2916XMFnQSaJh5uj5zuuLYpBFJ2gFxspi8eHQvxLKYbxkRq2YmNfJrG2MFgL3mM6JsYeD2ZkjEDkSttYXYwxVGhp",
  "key2": "33RJuAaX96a28ooMZc9JuBrhN7pVeK3KCLrsfRD4wXGHdci1ABfAWTYG1NnjaumNAdypittKVorcuwiPWVxL4dpJ",
  "key3": "2E7G3ZMXFmovgMDgQoEnpME7AtW6rihDg3Pkpu4qcURx1FaDR2Ntar9Acr3TDdqoevCir2hNbranEha2iqSZP3mG",
  "key4": "5cDYbZKymU5Jtkhw9n1Ht2Enfx6BH6q9VwuS5eUpYSaSfnivofZivfpoThaCyMVCWDT29hkFisG3vwVhsMjgWsp9",
  "key5": "3C33xRKpqdMjsX3DD3PvtKuuHY4TYT81saLk3mYf8rRxtHrWne8WNo9ZvQuzxrNRiSHvRmmnfUX5ng9aVz6JJBJ4",
  "key6": "3k2gaoyJCWrhq5GvvXz3fGihdphuWmZqBwuTZa3A9SRBjRNk6jih27GWRC93gFJXdPEgU2xnpM4i7JcEwZcKWcnA",
  "key7": "5hQ9Vkko3HpeaWjFSLUmsbm4n4Gii1JDM4TX4tT1XCxHxj99rLQjeuxmC9qya1DCfXDZK6JWgVaWQzns8w4kefJA",
  "key8": "4zTmaKRe3LKpCcAxpzrMRWgWvwqKbCJdtGS1pjDPQFvQo28MUyThytVKTfTnmeFDbipLdns6BgVGJbCD4shLpN3Z",
  "key9": "4y8nLWZzzsqQ6d2CPxY9kpa3F4SMT9jUMeHjYArJ7mhQuyGwUgN9Hd1tDMbNzNNUaCCJcTDZQmYEb6qhdZQg1Tzm",
  "key10": "2H5FGdjFxs5EqXp7wEKXpdXkRcDDa6xJ4PRkgdCLNRy9hjamyBhxc6sTveMii7pimarLRJHDcghnbrSAUUhU7Sbj",
  "key11": "2FsrsLZF3bW3PRmogsfSAgEy2pce9jrmFMrFrkoEFCB8HAbnpwALC2XEJ4DLNfUKTLLxX2cqxUdsVEi4jtqyTwPr",
  "key12": "4SmudNiFnyuLV9aYTxqbUugkGGPswx6cAxxKZxmeR8Pe1D9undjzjFsA5eoQ7WKucUv3DH1QzPpaU3evUniSJGL",
  "key13": "66vz4y19uAYbuFTUAHzuQ5wFbLVZ8cBDvgumYNX28B2HBP5Hwzqe5gbSTTZEVDagycTowGDrX8wZQvrcjigT8afD",
  "key14": "4ySTP81WzkgdNWoYjKaciZzFk2ERJRae2j7PKAQeagtLjyMgxJbssDYQUWe3c2GVvMSm7c9xS74YydBJ1GexuBCP",
  "key15": "WM5KNMvnegFAgearQkmAeZGjPDk3WMbAPv3W3q28eqJwxEpGHPgkWDoHnx6weuDf3LLyJA1vRbechPz7uFwPvGM",
  "key16": "3j8LJMYpEJe5MqfKgSweoPPHXocp4BUWVT646web7aUTz3zqqkWxpxuYtKXgyor9P1bc1jxpFAib42ZDQLAKCiFG",
  "key17": "3FsZaFd58zVEWYHwcpGsZWUa5tDhSfR9VJyc8fV2oQXJ4J3Qxd6QK1T9nYE8S5YRLE3PGfEbv2stgGB7FJzsjcFb",
  "key18": "1srRhrrJ4mVttKUX3AWubwUvPGwwEzLPxJNgB4EWWzNiQrEE4VQfgF7hrCU3ZMASEk12XznzJjDWx35pUQKABB",
  "key19": "5DWBcmq5PVy82gPLvMSZ4CK22K2z9PUGGWqR2RNaWsvF4SXVhzAmL276ZM19XzCieKebSzCZJKmgVd6F2Suhkec6",
  "key20": "5SbMSQqwnmjEo4ZrxLv1JPPikedbkUMk69DXc4cxrwmoqg3gbf7Bsi3AVgeRkJxXkPqWJfoy2MqtZZGJXxtdmQ93",
  "key21": "5QytxYPV8fJJcYtVGsgcLxF2ahjmwZCu6e4PsqDcmwyNRs4LZ6dzryw7e9TLg3hgZdJLG6CHtWjfsirQRUFMpBb1",
  "key22": "23qiRPbcc3H3rN8BRaS2EbyGfuJtc2x9XbAYRUKJreD1mbGSrjPRD48iyUEjvp1g6XeqX4zPpnPhvAG82w7CEPEq",
  "key23": "4nTgmu6KTSCHCNYCFqmvMeHah1BjbpDSMtn5a4mByD156KZmvd1NLiLC15WazftfWsrojQQGPvMYoURKWkJcfvNP",
  "key24": "5v1erZDU4i5U5pxhLtFUVKnvN1kC39brx7gsLSNv5x4F1rF6ortXDifBC2NKfGbqqy6ApbWFhPDrGi3eeRDWX8mq",
  "key25": "EZKMk1zgzSmPe7ddccHSEs9Zrfd3Fvxd2i8qWngsMDa8g38WsCUbiKTzCAaMmMgqLwtJrZZTyiJG9Rw5nuyAQw3",
  "key26": "5jLNVPpRxkPpGC4SwyM5sGSfW6ew2w2nWMgSLeijrHUtp5mz1AJT9m9pU1rqb8rtvTexmAzRNG5yKkiv6uzU7fcc",
  "key27": "51qeAArxo5H2iQBpsNhNtg3gXmuYQQWNTJScjJytiRsyzf4CxD4m9MY7W4SkeWaHUYwdxXe2npaEBdrFooX9MHzJ",
  "key28": "3s6PRApVTm1RL1sAqEbE4XDea8gtB9AKpTTShYYYNigvwNLAwYxvJmbtYGNC9PN7f4YGXgaFATCnEMNf317ztKPb",
  "key29": "5cGzsCKxbA1FtWXbVUd5wgWMPHnzZD8kahxtxDN6yp4QuwFTsNZsAYA8zp4zBjzppa6WCMEcSgqxVEna2sBfmboC",
  "key30": "2pV2hU9gYL1t5u27RToHMxWNnyWQLL6xMZNYsNN83y2j4CkXCzYbuT65VuThZ3EfcwPsSfryYJq5M2HWdctVfZin",
  "key31": "38XuyfMARY8dhB6Pf3ZMmKGRB7kv9jcXnZugb3dyDN2M1YmEKJDUwQxgFyHsT3eRBRvsEfX94znGgVD8okeSD4oV",
  "key32": "2FdiP4i131utYJgmSGBQmH7Z9XQKzJnqscuo2sFGpSGYWAWxbhhrwER69TpJX1aeJr6UopFe7RmLdo5DSseAs98Q",
  "key33": "2eVtQWTkjpL3PB6fFzec5gw8x3yNvdCvWcR4TME6mppgEfYN9gyvKE9bScT8WqssMqmRebMAFSau5FKh3AFU7wV6",
  "key34": "5ivhHRERnRASugeuMNyWXawA4u6gYRu8BVKCvy4GftXAvppCB57vAEBo9tfXRv1M4ZSqErCc5YTG38romwK9K67T",
  "key35": "67aoSZzv8775eP4UvhF2wb1E64jsWp9e3V9epxFR2TzzQsAqHnUMVxMC9bH54dAj3EZRocaTpxjJjeyVTPj9MmjD",
  "key36": "5jLXEZhZNcXDB2jGJ5JeAYoVifM6FpSHnaVTd34umTw1GEk5aF2fNW7oWFeoQVTqVYLJJtNJk5hEK6aBMvzGAz4S",
  "key37": "p1Ut8AmHpGexQ6cc8js3jyFek6ck1pdh1wd48Z9UNeLA62bxawD6vicKp6JaUVFhzGnNqSdgGp1FELJK33jnB3S",
  "key38": "2HZmWcjK52ZxQwWQi32LNdSpGMbnNEwnjT4aSAUxQ8c5beJMU7LnJaJ7anCXB4MbVY8s5tBZNzU6Wow5RdJbdkC",
  "key39": "3ZFQzdLHLPnWjzcjjb6Z9ESmuwaDkMJGZr88L1Pj7CN4piZxFLxZk92ro4oLLPAUr1221Hiymtr22zf29pwCNg8R",
  "key40": "2HQ8zbHTXZLfubkSWbrX39LB24xYcHQrTRC6naGm7YWajeuSzCLAdQJpaBKzPBboSJbuY75V1vitLbUtZjSy6TSJ",
  "key41": "5pjbmvtjXnMcb7ZF1zMAKNb9JfHxq8r9T89Pf54u61W8A8t5q7w91NeumVeH89PfLJ5cfA6gubyqhb4NWyKZmNgr",
  "key42": "3nxXKyD23GoYirqVNZzpLWFqtaFJ2iTLxAcfYcGdLAjGeXgvddnD1DJx7xVmjEXffEHCC9YabxZy24kMoxg3ADBD",
  "key43": "5n55T9ysXJP6G9fe3YLsmRot6Y9K9VjMEH44657sn6m3xDhEsXbJzUVAx8ydc4adHmBuTvbS2NSZGqjVKpxJtX7w",
  "key44": "5VESAcXDuvaMRUvMXE9FaA8WCSJsojpLZu4TvYscVM92UtcB2pKDAefqgPYfkDGtrNSfDViEyf5iGmVtkoRMZzLn"
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
