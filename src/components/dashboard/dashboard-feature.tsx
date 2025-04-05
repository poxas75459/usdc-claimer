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
    "4PKM3B12aErdGBeUUh1r5yUuniTccM4ok3D3wNi3YzuzYMKosqcxmUhe2gwZEJQGpXRNK3MY3bm6Zef3t2LaGRx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yby8LR8mdMYqaavmiWiBhq5xkY6aWLnwT4vGNXGHUGcakMZDgQhCjzKAWbQHyEmaqyKebvzyXqrZZv57gtThftK",
  "key1": "4msCvBAHApQWpxbeLbcaNaTfvypNeAzt2DLhv4Ub7z9ExPx2Aa1jcaAhKeUxp5SNraMYF9o8AFzTRVAzMzqmcXSd",
  "key2": "3BrpEzJrDcYHevcrGUTMB4bADXX6e5UDX8fwGuDYngJzuHxL8Raxuu2HVcCExmoZRxWmrSnLy7fiQiGjN8uqHbZr",
  "key3": "5YaJmM2t6qUVa1wBByyo6qyUtf2ZLtC9oZdW1vXHZt9635mEStEvzfgvwf6gosr8MsdQRGrpqMXf6szi9s9yoXj",
  "key4": "2L4t8458pbJHVR4zfaRZpDtkhJeaACih4hNHxkHsrNbjtn2LSVFKjTnur9JQrRcZRMr11ws61Vnw8sy9NLc6RWnJ",
  "key5": "AzvDnb5KNkckkDZnZK7TPmxEgurmGWKQJYbSK5u8K9RuadJxUUPaandojV5oDS5zCfeyw6iSXeoxj2mbWQphd98",
  "key6": "5Qs3dexcYtExK2QygaYXuZF6eWHYCkGJfwwzqM7qSLPkfWiDUE5m81TZHyC3whEoSTnpJVnxRQ2okGTfjRXLbPei",
  "key7": "5cc7k2hZgmBHwj36SrrUvn5aMUNNm2EnW6vgKTUrjegpw2DTtoz3Ud6av7Cr97xMj6rLQjKKEMH5JZLbNC3wsmLC",
  "key8": "2Jt6rNFvmM7t2aXjHGhvpJW8uWDV6EzngxjQXoUxCTEB7tLChRFgrbE15jo9bR2a7Abq2McjNWb1VgwdSETZyyyA",
  "key9": "34M7BJWQTVSjeTz6w3zivVgQVJhyty45M6QTdf9eirtzdP7ctG863YXi2ai6vZefRaXqY4kMCxHSNDqdrb6e6Adj",
  "key10": "Aurab25dLzNjBGcR8R9LQ9qaMCznPLNueXW6JBLnD9zFDaX3XR6CJgfApDd3B33dLsVAJ3sAgmJFn2EKqbftn5U",
  "key11": "fLQofJfcnyDetrL8NX21iXBuQv7NfGKpMdtAULQVjynEbvjFuRbyNR6q3WguoZN5ZwuyRrBEGhcGYTdTp2Rn37s",
  "key12": "4dmTuewTvCQXzbHdNuA9QuR5BDSzBzxwm2gwoH562un6XQucqb7wh3Ev72nN2XeQtxFbMZCLh6oFeX1nnG6n2qpm",
  "key13": "2FiawJkTa2GuHNzywVdY19kw3HgbRxiuM6qMHsfYRJ93VGwzN3CFdmmqizMsrdbn9B8UefFPsUp3Z6ihZnP7zS3d",
  "key14": "AwdTAgPVHBtoz3YGATyksmNfGmUBSdXfRHftCnMNWbEtgqVxBTZ4votUJ3ukg8LAEvhCCK8R7cSTfcx7qjGPMfq",
  "key15": "5N41Gx9ZfpodveaSHV7G3AsXw4rMXuMToSBpVaftxqTmW66nCs6N8xZMqUqBkgKhhhQvzaPZdhMyETJ2weuZnYKo",
  "key16": "5iPfi2cWsp3W2kgZc6of5SWaHovfzogj67q8LSSgf7CG35y8kE991WjAsTF3bYez3Kfso6GhYmLmhm7wTkwonKt7",
  "key17": "LTcupqj6RxxN9ys7HEwz4zrzfq3Gt37Uk6ef4UpWtjhj7KWuLLvxm9ikngdvQdww6HcA3CWp2tikwcj7NeyDLHV",
  "key18": "5PJigaj2zBXjZc1dTBh16V2A41wqEokFqazqf33i6PHs5mrJn8soZ3sbBnBSNMsQFgCBw8vtxnNK6DdiYEzTzf6R",
  "key19": "4oo18tqsP2wkEFaZafahFjkSJ5zJM6HRkUGvaBukVDTgue8xktVGMQP9U8UJ5s76YhG5cAddpysUR71SEPhcgdW4",
  "key20": "5RyAmiPkuhJD2JAKt4zhworPh42KdnF6DmPRhiSMeFK1HX44QPQkxdBsYKgtNUiMAznmWvC2MqbrUtVbb4iHAHbQ",
  "key21": "625WiiJCFwvTrsq9A2yZvR9u5oYPV9CU1KhExb9qLLRJHfxddVH896xYz86B14Ra5j5LEepJfDshn456NoYiZf5S",
  "key22": "5KVcL6P8i2QdozZo94jXjN2eRy9sCwHWgcgK46hRtQGPCeh3p4gQ8HiSzaWVQCVqvTWkzCMUJ5HT3Yka7K9jakMi",
  "key23": "4qtd5hC23SgXvYyQXH7CZDjGc2Tbd7p5GMA1kgkMfXBEoxQ6hz3e4VxWR28foZTtUGF7NWzGBini1uZoo3jriP8k",
  "key24": "3xFZniaQVCbFsmovJPnhbAhdL1VHqd6D3se1AghSuJJk2KtS1rfefF2sFvj3S9pR5rE2SxEFDqgoBPVDdtFVQ3ri",
  "key25": "3MzoiPh4irPfuni2zo8mM5Qim7U8mzhVqThTMuUMSz5Pmk6smr8bQgLvkhFAxXUSaUp1YoL6q6YWgSQShUXxBbDt",
  "key26": "37RLBzPhY128bzuBrtqGrbJrNSfV32a1kqW6FaLRDT6Sf9iY19sWxj9YRQNWfkbQeqc3ebZ8vFDFkB47W3HEBgaL",
  "key27": "3pisL9hYhQ4VcdeULYdyq1g1mnSu4CPMdGXGqUrz4NF3tgHYhTqfPmGUh3C415iitZpU4ivhbDmFsTkHJ3BYmGVq",
  "key28": "4dx3KRFtjKdEvDzxDpC6othbUzZQHFSZmkpe4qqAMca75oCQLY6xpYEAisrdfJhZoHKJzhX7QxFMqZ97txMhKWNx",
  "key29": "MBqKKH4psETwSsHb2ufft7rYrfFPDvkRZv2j3BaqcGNBaEc4rcyzPXrMhJPLWRdM6vgwkBGHT26TegXXA2wqLyu",
  "key30": "5mVimeE1Q5PRB3m8cJNeNm94RXuP4f8PfPXXYKK4TMs4fKf8mSbDQRdZitNKPYYJWFfgaT4MpK12P1BWCVxrpeNW",
  "key31": "65vTn9hWaFFMcjQwwZWjEGbcmnFpNrd7pBJiEFDAWtACoBuVZo4DeRrHq3jMgC2FbJdQk1GbhNvurts75gpNhpVX",
  "key32": "3Drp26XbJTqHmcy5d3cHdJ8Wd3GFEWAWCjKhYMfrsh1DrKbUBBR9LTBRUpu4cBFVEomsV3go5tLTUcsuZAznWq3T",
  "key33": "51JEvw73H57hDvsCDpYZGsCyw8Ck7xUDscVgnA1kJt5R2A8mozZy93PgVwJF5DP7cVtiL7P8QBHhp7zhcF6Zgk6G",
  "key34": "RpseLdDXpo6HAz57VcwswffdegtCSTwvD72TL7WfNPE5sPUi1ZAM7j2CBHgmxgKPX7epRB6QS6xCYmXFmospuXb",
  "key35": "5SGWExwGJvnBo6hmBjqKhsr8cs6rKTM9gaVoQH9H4zHmYCNY887XS9c71cTFg4kagc2oJS7AjwVj4ZodAndtgdci",
  "key36": "kbvobK5uzrxqjEXXjAhcbF9wABRvmA5ZGkWZ3qtiqHXhpGrFuwToHFJYyjVhpFBfMAjs6ev2dC4wZCGWuEWAbUz"
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
