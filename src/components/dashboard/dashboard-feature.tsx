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
    "3ZAzhMAHWf5RLAR33g1cah7gi738wTJZr3NWu4x6SxhsSKREiPgZL6pTp1JrYExNQmixr6WoPHJ3iiDtSyqh1YWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2amELFBy23fsbSXqmt56WTikf3ZXdWbfKa3bhZPtmSyWsLQ2cYHTYSHEQ7WsK9fM26ep1Db7U8gDNbWzRPg13BCh",
  "key1": "3391k52csC5daydfQ2pCbHdMLcVnmhX8A8nbb4BzkRZDkdbwwRoboghQgbEsWoKnbaeRhevL4hGY9B9aVfPXShZP",
  "key2": "gR2FHWqxam2ZVsM2WPJ1Lo2pVTPjLZC6SyAFmLUUVKVV7jQ6HGMKC4M9cZ435v6zuWxaRFsnTG2VU9qc43jWzj4",
  "key3": "ZGTxFHjEBwxvHhX2983L1oj3ioRDNdyZ2Kz369VMpTxXgKevXiqFbz55chkodEAN9RQPssPzLJGtWd5qDUDCDW8",
  "key4": "31RQZoHDG9GTcNcU2wR2y4ATkDBR6FkgJ4Tk99GgYpgTtvywgCfVa4ZhVHj5txXX19wzPK1562sTnt5gRbGaV4pW",
  "key5": "5sF8mrwzGaE8XDFgpbpLPJEdeatdZAwmFc7yrk2uLJHj2ScZgByVikb5HYWykbkcidvhk5E3M4xdyaUhSuiMes1c",
  "key6": "2hu6CBSA9gE6oZnVavuiSVtgfiLmhenFgyRUDYP2ZFyZYyD6XrMVt9NeXgnCL6orJVAYThLvPaiLWWcYYGmicyzN",
  "key7": "3Xd4xHUtm3Y2PN59woaFCi2TSNdLr8r7RKThVjitBKCyEyX86uTCVXjELn3ExuANn9dbxMB5ZTgzNGa2FGHy8ezM",
  "key8": "49bW55o8NpdHNyE2CAbwhUiKnvUFpiXqJYfjdSydZg4LY8ugMYvd9P7L475pL3gjcZaw8jwDnLrbUew1hotCTHo7",
  "key9": "3Z11U1PJVeZtqpugfP7G6dPTUYWB2VRqBgG9vM98SKVCUAX1FnSDiTDAduTpdL2gdZXBV2M8bgRtxNxyCwG4x9HS",
  "key10": "4krJmGxHypqvmqYTvNRz4UajcdeddzLfEm5TozVsSofZyyCeQ1oGAGSmzC33Ukx9M8V5FyoFqZdab8PxskvhbfzH",
  "key11": "5anV5UEc2djouDRCJRrNLbYSvPDdqSabZE7K9tamUV4q5HUmyubooUMh9ovePxgssAaukL5rFcBooSEELaAGUX4A",
  "key12": "3AKzC6JgYydDT29RtERFiw8armAKpQc3FBPjExycfZnQ31mBmW5sQAfDzpKN6xKBJgWswm6bH7fkYWBFQPvKqMM7",
  "key13": "5TJGWsBrZATwj9Yy5iVFuF3cacEHRAnKC5bp8dy8aTugvD18gcKDvnvaCVSpupEV82zKRv7yVsM3ktjGhj8Wqw5P",
  "key14": "2yraxzbhnA49Epv2aSdGMFbMhweRjEogoP6xAdtrSQ45uQ9paiJerx7Xh9Pby6j3Lfjq66w9CRG7jx3wx3gqmzZ8",
  "key15": "3Abzs7QNXxi7dR73G6TDWtCzCveg8YiP97nUu4MLxsUcpfrBmmueXM3SHN4FQeAA9dQmGnCiZGFSGqDeXm6NTska",
  "key16": "54RRwfMueTvcbDSnafzVBZa6btrht9yew55esT4JfufrgnFyKPBKsKDhAnAv8TpnQYdqTYA71AkNgZwKScz49vpB",
  "key17": "2Zie9Hk6AGRCPsJVp4axDVvZY965uFLuN4N7SVuRMnavaLg5bUdnySyDNxa2ufFstjN3ZKsQJLGyoPStVw6VKQRC",
  "key18": "4Y53dZA466hZJAKCH2wNTLCHQiATeLX5d33CmLFg9BNWqWswXvg6wncHaYkxf9Cuc5ZJC4WX1RyPLTbmGJwsDVdY",
  "key19": "48yrcUJNcFWNVDi4CrXchHSerWct1QXdtuQWuhigiWCF8fBdAqu7zDE6yHFdPrnQKnjsCvbm4wFTr9rHYdXJ4LED",
  "key20": "2rmKVAgY45MeEXHRVMTmRsT9Q2jKXreFcVQYszpFkMg79WeoYpJqXY23BmFjeQXxJBp2ztCDGvWPrp78rnhHQaZd",
  "key21": "goFFRr13SRMQCy1JyiMpdvAd6v9TfGajUoafGPdEGVdpe8ZZw66sQ6Z3nQPy1HiC3wtmzZqkJ6HvPqWTt7Y8vxg",
  "key22": "5r3Wrb4n5neyDhEuRACZBidC4cj6ATSxmywLAAzNYZACMvC7Z2yQnd5RnHjeQGfcEcqGpdbRN838xY4D8V5Umjrj",
  "key23": "2LeUehFubCYu77VZzjfPmWyFcHFQgnuQn6A4mgeyEzbjeLBt8AFQiEZ61wdX3jGR3w2327a8Aag2VEfRdPZJ3hXp",
  "key24": "32q5q49hbKgTP7vbo6UGHtYHvkY3SDQ8fokj5diqZp72PZqGLZTvShGYZU9zWQji7ZNgftzGBQiC8KmEu9Bjjhu2",
  "key25": "3FfYtJftYGMzmgrgm3bZ7afGKKwge5UrJh4LHRiDrFkNRcpw8bMxyXP9hA8gZP9wk9R1evbbdxWQFdQ9AqZySBtT",
  "key26": "5fw2gCeUWi6igRcE66cUd2eWijR7LCScQevv2N87e94N1JkTvGA9wKJyhiQ6kdbHjj1ftJoFSHRdHm8jpmqjzWcR",
  "key27": "3L2oQ8xHY3zgPtUmejM1rnfDCzTkPnxEzZUt7XJUQJ361xRL8uBCXFyW98siW1w5Z12ZRbFv6mporWiVBSuMmQvX",
  "key28": "22pS9LF9EfnoiUoEXEjGBxeBhKD7gdk1UsWegDfjJY89PLA3DcM2EjjqjbiC3LLASYpcUbwh7XzTyWm7koBrP6EF",
  "key29": "4wrH1AZzUgPtjfQHSm69K8hgU5NwNVs76STXUXvBiUt68ZsZsd9ykRmzu3g8jtznwkYrsXAhvLGxFCivWbmR6M6R",
  "key30": "6QYjp5QHHtxrf8oixSD7djSWfzj9pUDNhFg8SE9fWrdBXksvePP141MwkJfkbi5qydzUtu65uaxTE7hQD3fGkRX",
  "key31": "YHdRNA2533Zw5jjgYb53ZvH9xMeFZfYYAVcWvXfDaQCEp5K699Cge2VVjTrB9UVW8WmKCpyrophESM8oek9AXBf",
  "key32": "5fYCy63GNBqVUnRrxeL4oFVqYD5mcrvmh9dFg4W4HcGyt1hVYaBsRcQgrddVEpDXXJKJV4t2sgRiEMYXhJ1hzJFW",
  "key33": "2wJdiukwCriY6NpZmY6R1PE5LXdWdadobcY1gyw7TPuQ5N8C4WYTubgParRSrfuRapxugA6nyWBbgRWZU9HWUo6D",
  "key34": "5CmFsFy1oT15zbLxXj4GduzPN9oRxGeRNrewRJwHnFkDNqq7pAeDcmPv4aAot3e3oLUm49RgFRzFQ5XuG7cL2EdZ",
  "key35": "5Li9UccVdPsnjR3rwjmxy7NteU2zHSTr2KLh6atMxPbLcSQayAxzEANBXJp2EwBiTp2NBji1f654fvN5y5JhbujZ",
  "key36": "4nY4Jqp4gRvLXW3YW7P12BxU87aRotc1QFgnPLqSJ3ttVduMh1BabV6G5ddXUDjTiDnqmKZmRQ4nQD9JothfUFc6",
  "key37": "3mFjUStzapyqfHRv99ks9jznMRFqXnafM2LnCZoXbmi6Fz9K7Ku7BcytfsH7ZHPWxX6skJF7UhGawownJsPQZYU4",
  "key38": "3ijQbHPyBjovnntD7sX5ZAatgSmPC5vXJVZ3TMGpHgAX7FJW7pFZKRTkgsZuDJ8oZiFGJzEbLE6SPdc3zEkz2Ho4",
  "key39": "3HqvX65Aht6RKMhi89vBvXa1u1ErgPfy7pFU2XMMo2x5786arcuUWetABGTVvMrHQKjKNbTKpREXUTWRDydAZrvC",
  "key40": "RsaDBSJaWrKnPMnY5HUQztuBwubD92QZQqdnEk4MAY83FmPjwRAgBvEEwoeJADfJb9hEmahvdrD69YHout5Zt2w",
  "key41": "4TNyjo1xCCAHZ4RxBuFgNh6WfnFG2waTQ5ofCSmYU86TFfBp2brZSntGeayaG34eWEYL9XYTqUAhBNBk9PPRiThU",
  "key42": "SQiEtjGojV8LkbWPzMVYptLLuYAf9duzS8EjT21vfYLu1Xh9LEjgcCLVJ2YGPXrBdupTWnppe7AD2zSAwrFtbXF",
  "key43": "5STLgszyAYgL8u89qrzfiRRWZs7AeVvaWxWk3nQmiAnAN1Eo1ymQiMdK5wmVPyEGXAYQwVnjfgAqUasEZP7QnQ6L",
  "key44": "FjUz7HEtQiwLKuUFqCmaPH9CjT5XeV8fCCQt6pJH8ANBMUL5D1UKSqAcTpwriTwUXLQcVzB4Eq8ikRyXq8fx415",
  "key45": "2XpviJU8tY2hjmrpjZfpXrm8sKQgMufNJfQsuW6BAvAd9XWx5Z8JNFhuNHb58h9c1EqcuThcHvsEnFXR7fHtqheg",
  "key46": "2EbVCibbVGPeq4VpCQWsmAPC4CutKtyLX5xc9CtKH4gTthU7K44b8rcFUnrDstvoeiQYWbZLHtUFYdn8Msze5uFr",
  "key47": "3jTrQuvpifqERpb5Sr3hasUEJwa3yh4Jg5EjWR621jGSkvQ2JNkqkvMjF1Q8TBJE7PLu6nqw3ANs4RqikA71T3wC"
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
