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
    "67Ut5W69inwzgc8BMwR7FpsVAMgQU98L9aXQVBk8XmgeDPhhDHYNcsQcre7XHh6SkiMcF5P59oRyq7cAwByqVopg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doxtCPzWrBHDXHKFTRTX93QZivNtnPkUtM8S45ZqhBbCs87ten4P5K4mea1iH2YnSM37YPAVR9VvofcJ5e32EiF",
  "key1": "2bMNoKF4kt8DuaMhE2UngecDVrVvbBRpvM6W9icn1fvNeyPTQXX2LSNXbQJ8rFDYbDfoV9pSKjpL4jHHf8xC6imJ",
  "key2": "43ZSWKjjDxActEb6cg4wUMqcxpfTM35GgD1hTvfA2pq9DjyPj6smEwJMBXotMHJNz65TA444uPs2LXiu3MxH1983",
  "key3": "2wj9n1HgUoe2MrC1iNsDU3Mgcm5xSU3tQpSyEPhePXGv2ncAqxYXcW3KXDebg823fUMx49y5M89JpSv8aWbotRfD",
  "key4": "4ApLCdTv3yNHCnKH11GtTn174sWApHPTyDBKatx7VVV49NTjERAjoE8vMSLPvHe5mQLk8kAP23UWgrRyuf9wXVak",
  "key5": "UyguBih2o41Bs7wgS8mTJW7XAFjEeoYdxGV7bLPnPX1P9oKS7Pf3VTU241LMNybmLSa5nMZg5uM4quW5BZiLQhz",
  "key6": "49Zz7sfZsTgd2XaDtLRjz6i6BRg45MJPLPJJ5gBA7v2FuRsU8CXJ7qoZP8heNCh3vQ6QrP3qWTVg3joy98V1o3zt",
  "key7": "2y8kGBhATizT4Fv8BxzLfhGGGh6e81tgfSkYDnPukZvXTi9MVyVd5xQp8YhbWUS3zhvVkPnSnj5VF9vjxBayVqD1",
  "key8": "3LtgewuyRHJYXcjreaepSDKV9maQsjXVpMzQ742JteKzTgWrmzVtrjk1XPFzzRN2WJMhLY4w1v4MBVhN5KnJ8hYC",
  "key9": "5VrFCXHXCQ1vT8V7KuvuPGp2mkTaeyVei3D6ZznavDBRDytkSstF66CJrND2k3ieiqo8zbDqBqZ7VjZKxsKSAg7M",
  "key10": "34EB4Y4koA5jk49S57DfTTCc6u148y4w6q2a68w9B7NdkL7y4eaxW4K62J7VLLn2pzG9SXzAQ9UGMQN9Vb9U5J2X",
  "key11": "3KGBSW1jfzuZZPD9WsDVS1BQEukCrTckfWF8bQ45heujQDWtMpJDSStg6KtdC2N6qngEW1YCqfpF4UZXWRBM7UnP",
  "key12": "3PZA631K3k1JSVVK6eZbPnTjaJDfQpJujSAumRzANNDHozyB5vLXeeNJu3yxjSiKexsMxT1dswpkeqJaDZmxchbk",
  "key13": "1WFp9UneRzh5kRCo4Lvk7XF3oekwmuiy5JWTe1ZwRTLCJEB89sTNPm5mMvCVusKYhbkidtPf4t2tSTL7khfN1gE",
  "key14": "4z6HBt11GGztr8mdXdiXRVPKNCXFbW7GjBtnffPSGmSA5eNm2fb957BvWh9fzQ5VgHUA2nG4uuBrDfYLQCSAwKAT",
  "key15": "hgSbGtowHYp8KymjbePBztg6hvsgUbwDU3MfPG4AfFXG8LGGpHnmhGoWFz9XwwV5CpxadgReddKxHk3y4KJh5X3",
  "key16": "4nQVpvhCu1bFaaSThcZ6YR7GTtzT8SbcbDXnCrXVUVoTv2TSrxGWSvZTzxtLYJ8Yt9sZtP7C2CXUXXwTzY1rFqin",
  "key17": "hw3DZZRMWSLAvoiQmn9BFL5CPQzCvVBMfGmeX9tp126Qo11pCXYNMPX5WBGbZGFKpi5vMoC3Btb6WYJjtPJUbys",
  "key18": "2nZYx4SvWFDkArb5T8kWQnJi3RnCoJuQt95GmQF8j8cppixRXKd9aSEi7EJRLt4kxrkqoTHvwYsAn7BLeLCpwy8R",
  "key19": "41xSUzVD9MdUCTc8JDdJHcFQnRtq98236ReEG1zSZh62coZ7gkZpAAwYTT7Q8UWqtGXLMNNuuc8HUh4xHq3Q4SPf",
  "key20": "GtLq3iZ82NyzG8NnzBmHzHu9QPpVst9HXUjZ2X2ENRfZ4xq9K7iBU1UsXVj8BryYN9wQSdr6UcAqQkNX2KYPjPR",
  "key21": "YtamCgAmBBzzxqSf6f9tLbk6PnEb324ZYKURpnj8quFWBxsXRooku7cV4kEDqffPf7VyvrtKbGa2jkerd79btd6",
  "key22": "56UwHic1DbAfTa5ym45A9jUR216ziWoWkXZJ8BubzGpye195pQ7xBH7dSuDWjimkocZNMfDPXmZbSWksHKAX4aox",
  "key23": "678JxbBsYvX7wDssvHE3tCkYnm8Nw8tf9RdigyzeACXpQYzvAHyHkgiR27GYZ2mGK2VKvUTf21oKZY39ppS2PuzX",
  "key24": "qQees1mBCu8WdctgzE8hD3rx3oq76FzJftdyJ3wUJioicN9WKUkDGzKPK1DctKxtbgWEs1zpiHP4t43tXAHUYqv",
  "key25": "3Sw8DF4pCVm6B1x6spsBpa8k72EFdNAWajit12FHFvkwdRxUgvEWVw6DvZvoUZLUg3mU3D5QfU8kDwZGdGJ3t3f",
  "key26": "sYYJbiMH67MZJQ7JzjKrTC3oHqAob9XwFUZjZhNZE6gw5keVmgJtFHiiVVum3HVdWBY6bsaoqg4ps6gNaxYRn7U",
  "key27": "3JAK5SzoNPmfKwvoyM8PXY3bvt41bSnwFnTuu4cGfJN3m3VCAAmi1JseJmbgAGDcpzF7gbd28gmV7cSbRuHMiXTp",
  "key28": "2jXJ1suM6c6grVNdg14m9fsy8yvFWUbjCjoez7AseEUoGdw7jsXNuLVUDe68g15cEEruKqGUs5BWTduKFCwGey4J",
  "key29": "4QL5rKJeo7xtagFkDest8NwsgSdFGxbMXZT87JrSg49DrT6b3ZdJnKgSaa2Dx8pNe6ZXyRoeMGM9zMPcsb2Bp5jM",
  "key30": "45mVgRJ6y8AiXXZLdJJaxBmDvApNgzXDrrZDAzjf2jpEPAKhna4yxUyMmufSvSvH1t7Zg683T1Tko8jzmoma1aoJ",
  "key31": "2jREERjYvy6VHpJ7czAXV1wffvcgTYLLu53Kob6CZocnKFpYKHJjPnWdRtB1pTyYjxv7gYftkpChZhgiJd3KqB8n",
  "key32": "4C22Wt19VFxNdN6W2qn4mCW28QnawVMyxtr8fYtGycNSdz9hJMTQKz9cpsY5QnjN3sYQ6mH9mdF5cwoHoMBuJiFf",
  "key33": "2zMdLTFy2Ybe7yXVK2r9PkMnj5SXPzEQYgEf21CmsWHGSQVqsuHWk5iBy27MAcabtGwKcKZwMXQvwFetTo6h4ZnE",
  "key34": "84wY9wfgmKMo2wVDaeGUECdxss5XFLM6HBbU3h7dWVP6hfTaJp2VCZaa2wFaXuJ27r6wdSo5hX8CSZwm8v8UNNm",
  "key35": "21A4zXZwo2BkW49taAzmivoD6GZ4aim6UnuT9NWdPCjtBJjL7jHRPf7AvLVjZd4ahtGjiMTWaHqRbtEaoX5ERiZ6",
  "key36": "4DuMuz7HTYwvxyyif9kReRfNhfewTw5ZQi4y8fEqLBAU61HC2jmps1yKtzDKYVUqi4sGXYSdZUPhTTaKdZjzGNka",
  "key37": "63eomrkS9hNE19Z3KW28PrbGQqRN1tzFP2ETNxtAuvSrm3tDiwCQe4Vqduh4zDfipntEdvx7kFKR25jyJ4UbMqUj",
  "key38": "45XKoZyzzGBvA1psxq5n3wXCiA2jmBnTTayHQYGThPE47hVchX82ELBfLr8xtPiVG73Hyvqxw59P3D4jvpXBM9Kh",
  "key39": "bjbsokndF7rHBphisSMoEpiqqRA9pUXypdaPMVtDyWc9y15tZ95nVDpDrK1jpPGHGQC2PiNUeM71xHMrksrP6XY",
  "key40": "UxVCKGDjZAPLZDq8X1KQjFLFdeXuY1EQEW6vtrz6ccwsGo7tt4NPCKDdsdfoz6XXncqXh1yvbNA65NEfRSch64w",
  "key41": "3fUqkWzaUtkT2wZgsbE3qR8uGF89cvdFsZx9f2J5USvJpngkDxoCiSGPcPiwjKrVKLRA6B2LG2hoP3655mvkRcaP"
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
