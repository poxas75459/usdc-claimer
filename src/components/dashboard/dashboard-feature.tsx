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
    "imCDBQMATA37NJShCfVHPUf6WxuNPeuyCwtKQTB4SMZKZEDChxzL3Fto34oSx4HqViN1a2rKXtbjkTq5oKpMXZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5EVak7QtU28UEveMrytaa74xbjMSxAY9tPSWeTnLUcPU56zgZ33ZL8CryGg48mLCKJjbN2YgV9Uzd1SUtdBvSw",
  "key1": "2uTYWyRsTrZ9yZykpQktvfSjmfNci1kk6XeF2PrbkyywejzpoxV1onWcNwhjCRKWRRW62LBXSLnLDzbmyM8Bh3eG",
  "key2": "3oe8txAAVW374qmcdvk4cRZBjVTHqQF98Q2bfK7pS6qzZWiD62uyVcDUDXdqd2WU6nng95Jm5eDoD7q2ZaMYdxZ",
  "key3": "qnp5UUeiYmmThctzAx7yzM2kUwjvujgMXnrRtR9sSwJyiLAo2jhuNNrsSju1z5BDDtsBkNvHMdxee5uRu9twAvX",
  "key4": "33Za2FjasHd4TRsfxYJS6VEzpFFiHJxb4Mkf63P759pYPLo9CAEbPV3GhjKyQ8F2UxM8ovPcomxok2bzd9pSRspd",
  "key5": "3QXuoNwGJppw33WodHLbvscHqv2fjP7ZtbaFHDm23J19MUSR7REH4JDPYYszPHyXdDhyKwCBuNMCYpeN41tStyHP",
  "key6": "XRKwzs7HaJNK84e4igT7f9ctQ4NP4iwyXraq7BFgby7MQy7eYF9GzRZPjNgaGeTxEMCJVpSuEaDJ1p8CuTPQZqK",
  "key7": "2zKd6LMvnLpC8VqjpG8womU7a2NBoHZV23V9MyhAobh3nXFAdTrinW4bWMHxYVAjgGPWvzBqLcYDn7bMVG3KNLQD",
  "key8": "9QTfKwrjzGaYyEUsuhCs5JWrpqwkcKqoF5ev1GsYCQAV2KeA85Vex3JS584MiL5uRZjJ2hN23FHzPgazbVmU1Mc",
  "key9": "2FGZS9e88dMx9XxBnnRMtN61E3gSVvuFK1Yhi5TvDUUMaBiRcpQi9PNgtLkbN8C3F41UUe1rBSXc6fKrShZtPASb",
  "key10": "2PbAW8cS18DpqS9YCLdsjvEQjNpXMCqRLQ1nqB8ETqHi7VujXKLVFpi9SQfsxH7kTUXQ9tC6P64GQgz5WkeGR37o",
  "key11": "4ViANx2YBiEWa5J8TT8Rfzbf3zPPcq4rRVPvzyQ5LM6DDnqX5y6zs3cHaY23gWpx4zY93k3aQ3gnxy6cqTe68DQ",
  "key12": "46QppdzERBx74FX42R26ahgTCD2Bj994YXqoPHkcjKPLjzPqZLxmj8dnGChXqDWHRzcS74U4maYD2JWTbrusTA4t",
  "key13": "5pavJT3VfmSkHB3edy91TXVRC9qpoBqT1RGrnWxYSggFai2WezfCwnHDx3kCua1S2GBgjxH9dwUJsHZ6Cs6dFgFp",
  "key14": "4bKRndFivTxcT5YLRv8sbiCac7qHU8w42eEECzGgUztQdbjAs9jCfYy3awunTWNYTESm36R7PSY5dp7ZvW9nxArE",
  "key15": "2AF78KKUzywim6axdU74NcagjhQJeHBN9TjfGpyipFoGtQqaQM88s1k1PKdfFkA5a7wJ1WWKnHda12qpx53yAYrP",
  "key16": "2UeTbTHMYq9ixabMrqQEdCBuCPSvc1Kzr2Ah67wHVR5YgNg1eGxC8HnHYFZURPXcpQAkVUv9HGkbnLtASxyfy5nw",
  "key17": "qFjvr6FXrN5WCRqDuyE5RaNciPz6DnNvkvTVEC32ReRTXc2dmfHQWjEQZp5cyeyqCPgXQT1B9eCqxSoYSTATNHV",
  "key18": "rVbKbP1Nf5ZtLD1ScrCe9m1JTqHRPS1xvDebJtrVEVMBAub1ninNo3GybKFJ3MMGvB6LmjfyQjXuWRuMAUVfRwG",
  "key19": "5VW7EHYNkGk2BMR2Z9KXVLsMsbVQbvyacfPQob824S7vyynMeGpTTsuGurqEjgqQ8WrrxUxHw3NuJNUu8TFx7TyN",
  "key20": "4zZeD24QerGv8zheg6uFnLogwQuBB4mVMhE8kzKdK6uvdWRzoQaFY6RwK17QBRsKWB3QLQSb2eZNBQc4e5Db1mWs",
  "key21": "5jhBLfANChLAWub53ynCz7p2pXfhjfiLk49ii61iM2eVZUi2rL8vkMVNgtBuM5CJ6Q2X8TVwBkejDiHH4TExnTCA",
  "key22": "72t3K6X6pixpoPPMoT32nV68Jswgjv5puQTNkU6STt3oRz4JG4TcwRqQ4m7a3dBFYEdk8kSwyk6RJY7MuuTwyod",
  "key23": "5aTF74rX8zhfLrfz6eRVSuAuHLQrPKZVLvMS2w5dE5RXMd7ujQvVJEqmnBpQDtJ596CEUaZFp4rHitYG12si95q4",
  "key24": "XCvsZHgouhksJMvWNiUW1HuuTu4RALYnGewnodjEb8xyj5JbgSMAcyCWe2tEb5MCMpRwN8miDZhD9i91XXScbdJ",
  "key25": "nHzNpfigmAihzU4qGrwgkNvmGrs7h7tMcXQuADF2Mhz6FpjHpeNFwPtMAEznhrAcvn1TZpgk5AhVkyojU8QoMzq",
  "key26": "5gJjoffvzJMLhC7eQXk3wjna1wf5NELbJiutjD95HJDZ7j1Tu5GgdrLm14wymG18timq7435j4qydw7XZ5igDoPq",
  "key27": "fdT3LW33Exs1juMdegRSmR8wEDEwNuzravNcTkMQGv9Cs1VHw8TQj1etvaWxART1r3VjBUqEru13WmbCPpKzg5o",
  "key28": "3PpfQP2Br9JPxEKX8KNAm35Loo1Ywa6dqyVPyVForijB8vnb1hmHWj6JsAJPktL9tDNiFEFVVPifzGqw4gcWaUa2",
  "key29": "m6VRXGo9XezPrdKEacUZb8oxj3n4jYsDB9eZ757HXLGYL13ui9ZdSDN5r4Q1FLgY8pbUsGB7RUbYwN6kPArYx39",
  "key30": "57R9iozMnExBFYHV1Psz5MFKACkL7QhMojEYxB1aVMZRtLesN9tbBURQGjGBD8DBA3TdZCnavx279kQjb6RDRPaU",
  "key31": "5S9jKcz1A1S9ugVfZiLyJHoeK1NytzZQjAtxW9o3Yp36eDEyu1zokndVf4cY7qGM9gt6guw3csYrKV4mw2T4UzQy",
  "key32": "5WHXc2VXWv5Tz1QKfnzp4tWtLjPp4SdwD4T3oAd1xwahEF7bVZu4GsTg5ov7KxkSwTpPYT9HhMBoeuAxoscZX3hq",
  "key33": "2qoVtsCZEZXkmKJb1txu942cthn2k6BV3ffsXFbQQyFGjdMPKqJoqo67CMMbTC8HHvJAsQ5bf9jCteWpFp9vkr4q",
  "key34": "2cJ1BkzorTGy8hfXpfBX29jYHy1FZftCL8rkbxbm7Smthx5fctHhe6THhN2qD4fR8JTc9qQycypMe6Gz8DdZ8JGG",
  "key35": "wZr18PrrKv9KYfzDHjfCPDVfifaZx8gb8qYaXVShh1CGT9N8oVsznLu4VJXJTsz7FdJmT9rC72AyURvk2Frwnw8",
  "key36": "5DMkMyRxmy9pTbNpNsM1fZULRC3U9MU2FnBmn2zg2Q5k5dZoKPW6rcaSatuQ7LhVo9byGDX5rkmsixq9Y9hLT2p8",
  "key37": "29htSu35stRxQc3eTjibLuZWqbXDGFwVC8wJnAFJ9VbBfQhcZoKRfdkVX2KYDdKdRvGVV7y7cebspHgoLdL9EYFi",
  "key38": "5wrMhrQkdePy3diKv2B9WJKCKtx1Rsv4g4iYyTzj4wBviKYEabV6hBZRg7sa8pDizfD5a7FwK9tf19PSAmKy8jxz",
  "key39": "2zooFMjRVZxJ3z31Wr64PMgFC6XRcvys6UwD5GgA64L82HnyhCgGst7r2u13PCoa4rVY1f85HKJSudni7vT8QLhk",
  "key40": "4GjKmXk2LUC9bqiJYqe3TT34fCby6se7X1nmDR8y6y51693RJgKLZerpzNrtWmzaBzpNNd5b3rewzapinnT6PoF5"
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
