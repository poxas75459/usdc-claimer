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
    "4qecu8gV2gWQXh8xGnyuPVLgavjbAx6oKByX1weHdk48a2YFMxt8zhtdx2rfp4TbezM7MVy2ZTggNf4jfCtokc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqsV4re4sfhs8Zbyrb4QPCNxE4AxtFDhx9DoRsdVhCodmhUz54xW1FhNLwwStRN7ZPbjqpVjJvJh649EdSHQXDr",
  "key1": "2vnKLaLCYgPka3GFKCuxLGbGPjSRheMqBzC7878Tpam6wtUMV8nu4U9Rdygv1Bki3XJdHaDkJXZRMjdvsp9HE4EP",
  "key2": "4JmNX6rRDPuKvPHdTLrPxKTgj1ytpAMBVcJB6VeHZRr6bMTVvWWREfkYwHtL4PAnGoTBak5kUz4qeXv6YNt4MEGQ",
  "key3": "4bivZhacdrh3SNxYmt1ihQ1EUrGNxgvEQ169rZC2ursKfcPRSY977mfLHApRvPCv5JGFne6RghjK2S89EVfCsnpj",
  "key4": "2YuSBLocmrJeSjriBVYJ9gk5J7REn7hK95cGyTRPvL9RyNrZMYkvFRuS2DVQJcKXMUXn5LqLBa5VRrzrtN9DBmSp",
  "key5": "21fxREcTZHz3Xfj8DwuDbH7ZZb2mbDZrDsM6p5qhFAo6RpaDCJwb9oWHnGPWXwHy9HT6BkLnteqsd3DEoWMJtFtj",
  "key6": "4c5rwC4rPqGbsanBkAi3kR7VizcS4L4bvEC1BFWh75BUj5J1bf2dRgLhf7RidoEP2ndLSrhkkboX2zCptt6mZKXm",
  "key7": "2PqDz9ymYNJoBFQcpptqAozJJMLBC8eKr5Ys3usZnGD8ppRKPRTamoh747NWdHj9Y4pHWaDAgLReZWjiLfhihMDy",
  "key8": "2w6FXeft4jziunm1id9f2YApMGzAFrrZDSjmY8t3xjbga8x6TVH96wfa4T2fSFJzfZYGYrnyeNcSTnvjXYW5ZnAA",
  "key9": "4cQsAkUzDdwADvbah1axkivWBSjHHPych1j7WDKdcWevdEbU2vDnSBohprX4P93Wzk7VgsXHJbjNp4wNWmKpsK7D",
  "key10": "2CoV19YKepVcrhZ8EidsKdbjYGb5DEUdWZNj3MX32NXsG9VWVnTr3kTNWMPTN7K6gEGG88Y8TFCyayFJnEy9UMqr",
  "key11": "3uWNyeXdbSZwdkFdMAxVPwaRquJDXNjte76JrgSGZ4Jxq8WHE6L6u5tPkxs8ttrmjHU5UNa69eQmpPU5obhqBvLe",
  "key12": "2CJ6JSGeVL3gP1N4qfy3Aat46ruc593MCzSYWwRgLYi1CUwL35KjSJjXvJePveQLoMxtEXdozxeKiZvHSYAmWraA",
  "key13": "5xbttnRj4RAeP8MehsQ553aC61Ky2euiZNGDhQNsZ6yMaqHfR5C8NSeFxWprJDqHM5soSQzwECmjcvxTjVH4dGGu",
  "key14": "3ZZjaRkUpQWF3xvaAxLMpCFQS2ZDsLXFdRD8NgLAMVLuWp8Wv1mEcvor4fJsN9vXn8uHg8vGa7DJ2E8L61oXiVs",
  "key15": "3dkiGH5rvXBMv6RWxEuN5MginZTUCHrwWNKC58XUEVzXsrBCcN4Tx2FNNsQymMLVQ62YpSjimbngCyCDLpcipbFQ",
  "key16": "61VxZv94ud3T7BtzeZMFQx1hhFxgQDjKUpKTjsfbVsXsyyBGuGFcJf9kjEUYewKxLHfhYNhLShKywK2u5sHFxoW3",
  "key17": "5FNTD22s571fXcFgWh7Rm1k1odyNvKKPAZnDecLHGPNKDdBufFkCiM5Ve5Y5tZQHjUFeSi8LP3wBB3wVxEuu499Q",
  "key18": "4ujBpeSEjUufXCJg2x3qWzQ1gTcBqdLVZfvLNPaVRpbyXySJvPLkFZdQaj2M6mztm5CoMMPXeaaCPTsx2r5ncsVz",
  "key19": "4YuBKMTsM8NDn6YyUMB6dWjacTnNwUaLpFriCwuqqXJZ7A31XQwUpnkg5GfDQKmw3EaUu1X4yDBsGrPrRoxgbo99",
  "key20": "ENqWuLfjxXmwh7fRJUuaVuktaXxQQzHifZH1iRpwq6PLxbP1ShepnyupE5oPU5tu7krhAJeWh4M3AKT1WA7HtRp",
  "key21": "3PsK6CtBgAbrvY1xm6unRWNpZeP3c1uSXzKwC4jh5p44xiaaZsk9MZ7eQEeL1xiSomh7MLuLD4B9Ltxw4tSPirGP",
  "key22": "3Lat9PA5WbvX6mFnK1fLqRDDXkJo9GyqFqwQDEWNGrHKTZ3ptWPT3J7pEYNe21VifnCYhoejMAULWaNUDuttMRH7",
  "key23": "5gaCNsTjZ9MppbLdWWt7mSUBH1NNctMghegAfD9jjZup596ncSQjbh638drV5s8Bot6DogBi5sSHox4cmbBS7kDi",
  "key24": "41sZybfH7z9WPdKbXzw4jYe2nh8x1TVyXP16NvUsRJdEzVKMTo9Stjc2KaJkKWeMREiQy6AYpuSEHKax3mrk3WBF",
  "key25": "5dyQCSN6UqvA5dTHbnmy5ndQswJfY28JHMqPComYt6nJLk4KvzkgSyopacx9ryQWGtdm4o1aihKgRMkTASiNd5Ag",
  "key26": "4p8avzEVVkhQWmnW6JGzGztD56MmWfpxwGRRBnDp3hmem2BLamSs1s5HwwEnP4SfDQZycTSEmcN8L2Qt2Qfcuj3R",
  "key27": "4ZLGH6yC1umvjUjFJR2AY9PhfqRWyPay7GmVkzFdBTbA2W1tQMGvGzuzAPTGmhkLJsJdj9hns5Nmz2iCqFTYPhEs",
  "key28": "5NNQgAZHmFf9PZ1M34EK8Ju439VQziVNDFCk2y11bGZvvRpvGnhi1XKBhNK8oLANNy3MRcCur3sxEb9rvsFkGPZb",
  "key29": "yh6hzUy9y57WFG5ZrL7EU19RwUtFGfcs9DSSYRRrMde4Awito5AAYL1RUb2ZAyKnxXApPhFHUUGyYndD8a8F3if",
  "key30": "2KfbdFTmx92u7wvypc89Ywx1MZYCV9xBwfUzHMTSQJEj4KczgK8EB7vhg5SnaEARaLiknp5rnBDoqScMieGC5B1b",
  "key31": "498LY9bLcpopu5EGSrmEzmgRGCHATtQsS3sX15qmEXgYiNnfToFWnRg27BApfNjT66iNqSwLaDAwp8CreeXVEWDG",
  "key32": "5Y2Qh3LaqKJZ5szeLzJ65aqRFRnH6yNYKPDrdwFZuwpRqg6gFSJ6x3FjjVVb5LBMoqzMJ9uFKXinYCCxaMo93PVh",
  "key33": "5QwQA5NDRfwePg1nbrRjNZANCWgUjcFXhyQv9ixtfa73J3D5mT9ePFXwYBRECUphJ28BFrbQAEJyh4GPjh77rNVD",
  "key34": "4o8mSJa8SbmsvEJHsuz27KreFe3eGjQ5q5PyAnKNsgxsChp6KcRS8iRf5NFF9mJ9pJLLBowWoTw2HHysnxLGhP2D",
  "key35": "4KZPVM9JMVuytzrpvtVy9XAxzwZLg7fcc19QY1qo9xpim78AgE7zwkunewgxPW4mMGDozMqtg7aCsyXBzrw2gUW7"
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
