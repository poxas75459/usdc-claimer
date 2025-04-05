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
    "4hQ97kbPFVseH2saddDeXD66JVhqm9bFeTeeWdbWuZa1UQcUn1twXR62yqvxigGmxB9A4PiH2mWq1ifvhee39Ysm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxL9P8D4G4J67Uy5D8HuAvkXXVLjKR9bCLrKYmDV17tiCoVNwRVtGK3mxHDTFWT115VifveQdd8MRUSDCjspk41",
  "key1": "3gcHrub2ERsviuumpzTs3FtszSeF9PCf9EreieyW5MGeMTmkaJPoXWpNcdTvttsEGvMJYvwvqQ1DuLZ1FPkcNppd",
  "key2": "3Uws1pY53G69WLmKa7UFxwE6AzEkNsTo9kEGzdFyUxTNKuAFDG6jyRN88CwgRf4pPpVyfwV24uuh1HYzmKaZApq5",
  "key3": "29CX6yC3WGsQbBAXYathyHxPWSVkbGvd954fmqQkXmecLRbXaXjEFRmtA2HoGxp7ywfprenAYBJkiBzMfDw5cZwH",
  "key4": "v3TKsGw69MLj3EbPnEtzyG68oATZwsYcKx4WM3ESVL4u6NkayE6n4dRifMbN4mXDoVn17HiiJ13gFg5p8cNXXJ9",
  "key5": "26TqMK5wzWVshaRp9kWFzpyftKinqV74ynRzrBGd8birVJzyautCFLniNjimBNZMTaS1w9fmxj6pwwKTSxLndVNQ",
  "key6": "2CH253Tf8SDGoQgMVathZf52fkivvzXakhuHPk6bHSLA5CBaQPn2x4Afv24fE9xmEjcWWwFNZPzy6DnRJUqZBS6d",
  "key7": "mPX15JqEvmJM6Em9WF1Pg7NaVUNMKVmyRWPcxY17fFDeqqkzJWxLYBxkciB85PV2QipuEJ53oDA684gGBE8UBs6",
  "key8": "PzZVJZgPwFJWKmmYtMtqh9q72JSEas3cAr3uiYFN91W1XVJ4zMY6PfX7Npa85mMmDwC2vJ94gHN7H5T71pUSw8D",
  "key9": "4SMpwRo8PjG9CuU2wVoEaBj9KQGn6pPQ1fbA4VFC1rYj8aZwCnrmTRzjqiioUCf7yrd6dj7h3zEEVihiuAZBbDVx",
  "key10": "E9GiSnX1L5cARsjTyre7BLpkpmNuRpCXVi5mxkbttX8xMM53Xz5bFfmQwkguFr5UzMT3MRPg95ApTnDZmFKdXkr",
  "key11": "28DfgX4BmExiQPez1WAGT1JiYweP4iRtZTUvnugzUQESGrR615u12hMNoJqp98UHU8NR1eoBngxFuK5jSwKijrGj",
  "key12": "D3wvMNxhmaLqMtgse5ewJZUHD3eTmsMvTBMdN6uK2SN1HqbgRHeA4o4yi2poGd1uqDTaEbMYBaoesfV56u1xiCS",
  "key13": "54K9bCytWwEvfxwbWaT4QLrWe4Txv1eHS8aZZLULAXyegFvsASChf7t1DfsU2SU12RFCxxPaiBCgBBwFZ2CSyauy",
  "key14": "2aX6A12xLHzCq2VbG52S3qz5nnXXfXv8y4W1zX8EdjSDrVWAxZzcyrPdaSTbCkraTCH6JsbUfdXow4FSH6QKoXtx",
  "key15": "2o1jMSUhoaPoBjPxMeeNpWMUxgD1cLq71Kf8TkJcMNMt3eET747gjCV6DFF2cVZ72KS3mnZzBurvoYAtuCAh2jWB",
  "key16": "FNdDeFo2v8qMQyF1UmhLxQAdocgz4utMNSG6wCsfLT1WQ1sLcPPvDENPVcsNhx5t486F49rZ9KVg3ou2WGkdgJc",
  "key17": "4LMxk9BqipPPt16Ua8v4SD6iaxF3Jm14FbFhjzZTjFBwVLLfpEcckHYk71SKtuNiVB9ycFNmZRjdrPGcJpvFhNuk",
  "key18": "DMV3csAgXQ4tgduvpusLXA6hDgzxzw5GYWHiBjyfUDBX6XiwqJBiK26Yuar4QBMarqMY9sEEjQPhrc96LzbrdFP",
  "key19": "4afF5UPhs2wRreAC5VWrvR8YLvuVuTRes84sEHsPKVX8hQRAz5jZd9cETPaAAY5JDkXyarcMGVc2JJ7hytiBjh1s",
  "key20": "VSKWhYio2VydctpthnFPp6LP1FyBxRH98csg9T6rTRmkkRButxvvXsyKXDC38cmG6QR3Nvgko4mdR1a2AipCimg",
  "key21": "3URYq7hVrU3AZzbpFqNhK29SNpVZ9SgpK3KSSkCtiA66NxykXsZ56125KHJDRga1bnb9wBZwLnMwZDChDv3gYexY",
  "key22": "4ZU6uMci5LiynXU6VzHDjN8zPHRPzB13NrSWSzx9x1DeZCe7V8RZozVxWYEXRyZSnMNiacerph1CqVstUTwxYWV",
  "key23": "ycJwQv1AUrkrTDnpCYty4T6eaWJKkhU7GZJs6Y3Wy7Zdcb6yTeK2EhjXggdxJCoTCpTbXREmteRJxetXLyq9kK9",
  "key24": "5SQwgHBLnvnqFK3cdZBJUSjLMw4AyhZ5Q7PXokBLjXE5vt1B9jtRCiTGd3eCtSDFB2CLEx5Rx5opQtsKC3bineqV",
  "key25": "3uGRcHnu6zUs3eE9ovuk2PZwzTcR6kGrHqb6GqdLHGtBv97zvj9wsVzTvTD6abJyQDLJNFHk5SGDvWPSo5Y1VnS4",
  "key26": "4Bb1sSMcPyuz2qnuCHaoPpS2FCkJNTZz6au9sqpXiUaKsB4eR7Tdo64bU3xdnL7UHVzgajydbm7aGdUiM94DU5aF",
  "key27": "2zGgX2BgKos1Kr7WMAMdJbN8NgmizCAGKatDPK8NCtv5nqxGZ5U9r6kPwctx7mimSh4kZTQYGWrKiQhD5moYJ7rK",
  "key28": "2WKHJjk6Yn7Wq46LP75yb8hyPgck9mz4Tiagh7Tzctafnuyu87v7SnTxfPkZaWsGJ5VZYyDpCtscF3gPuY3Ct4oR",
  "key29": "4Lbst12M66CZBbpuorDHgs1QNDmcs1diHD6bf8aSLTsdK4jreZmtvVUeHGroitH8y8tX5sSKr5qWqf6GaYeqMj3",
  "key30": "4R5n6DynYzvjFTC9SaxywpJfY63geZxfajMTGr5YVXGzYLD8HY6oqgg2wkEL4wuWSgvxLev6HUrPi6N8Kaj7qWai",
  "key31": "2KjWDD4gjJVuwxAZi6Fbf7VHLZGWkNdkm1Tx48oXoF68U2BTJrtYnMxHArpyTwMAbAPBTdQWEdHhvKibpWYrzJrJ",
  "key32": "3v6YEHB2zWAJ3bpDFq9h6894HxUG54UWJFFp67H1mP5vfkteDAk3ENwGW94FspQDu8B8f1UQz8DuP8C4ciXfa6fg",
  "key33": "xftnRAKciSFhStPHKghPq2HGbHXJ1cDmJ98giGGzgyWZjfXysPq9UB3GZuXr54HVh2tAf9yCt79nPXdPLoC3BgQ",
  "key34": "2AMG1pQjAyjJmtNfV3WFG8y4NiCp5WGL4Bue2MBnAwjaXQ2s8bcu3eJwsC1oC6ymJTmYekij8bqouNwU32jweior",
  "key35": "oHNTWsNm9iab9p7j5RQAipn5AjPoRRyhXodnTmCu9o374U4L62Y5KL48DsBnLTSvetStbwjcFkFYt1gpJM69r4P",
  "key36": "4P8dGg8SaRgjfn5gczFdqc9oWvm4LJ7rnmyWWLPv7zpcSpeDscnJQ1s2q1gmXsn1t8E7vfk1jygTovu1yDCxet2V",
  "key37": "3LBeGzzeyVu5n8Jfa1CKJPo3HLFp4TZMiKVt4LMn7d55KBmh6V5MzQod34aUDnRRi4jsC5GCGLUUgt5X1on7eL32",
  "key38": "CDGyaenNMvjMfQgb7hXC8YMaPYik4Y8nt3JxzoRh7TcFkH7GNrr2zZSYk18P1V2Z8MW2ReyPqnhst5vt6Dy1BKC",
  "key39": "3oxFt2uEMKGQkyen3irYNdiaRHKCcTC4biTfYRLnwHSSSB4uEu7PSpCsJJwG55tK9QeYjBsQ7z6njWaiJzCxqqBc",
  "key40": "58SAzhtufnK8uvBm2WK3h578Lxvb9YYEWSuJxReZa7YPVgENyaEm2a1QoCDoKT87HFAgLdw2Wpx7aoq5mvy5AfDz",
  "key41": "KMoN32Ek35Ue5Grxbbo3nfJiuDo15xcXofrSJPZeocoHVu3B1NyFJbmM2VmasBVc6frnuteK5REymLRAfjPJtBo",
  "key42": "4k8GWCiPFvHGaPKZNPsyrAeKyw4vk1WdHNkWyrrLngfWdV1mVzR8sENN1opXMxoQtgfM3rkgLER8qogqxFS5nYKU",
  "key43": "2zRgFiaYURaiopY7oCzDGkkVzfmRiza9tWWGiRQMuKfydv9fyu13ezaWzPF6FxmoMbhZhwAXP7qnQBmjtHyjNzby",
  "key44": "64HWRicTt7j5wCpMTKfp992bGpez1uUVd5H8yzoxLtrWfEJevHcUyCzCmboged1p24hxrYWLhvuZjThN9Nuivoux",
  "key45": "5t9yqyRyYf9Tk3YoNRPVL6og4WSJz4gdWJdXN3dBC9Y3i5cbBAYmZL1miSDHXCzVeBEXSUPc3aZahapNwZnNGA4t",
  "key46": "5wLsXg5ysCatKMzDCNw7gDwPHakgSWrDE8MhRv7gRFRcTuv8e4XQ4mdRJfpkGQjg1DfKRLa8mTAQ24v96JyxgGrR"
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
