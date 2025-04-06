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
    "7A6PSdk1jVE3yH5D3SJLCJDzCy7868XGoHFkcC9rkr59TUKh3ApcB8ucz7tFpdpzFiYSSXGxfKKZB8RB9VPYR4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dm4dioyW74UXVXAKVG95cKFpaT5zJBoDvDL9WtKVsqubwQGMvcSGw2DonmR3e4TEwV9QkSpBrNK93c3S5kqYXsF",
  "key1": "2VzdRjTvU88XUrX9NdFwkohsgok843QFx2RB46gh2nMYqwY5beB3durcMPx6NLmwmdtUA78haVW345VrtqjPFpjg",
  "key2": "34ivWcxM7GyX8idWkyZqXd6UTuA6QdS1ywotKedseFjP3CxQn2zLJTrBZ9ewn6hvPKkz3CqZRNQUqo9HTXkeJZgz",
  "key3": "2g8owsCrgkSMx5MKkr2DAAoqeVzeH5kBUGPSuoYdUp4ridMcCLWZNXZpMLSmHMLpoaGLmgHuqcdMbpbuFwea57WC",
  "key4": "33NMcNedEXkVGVTqdJiCL3FLDsxjFRjrJk6khGrf2utRuKWeLP9gNWpJo6LXDimNURDRCE13Y4WPX1Bhc64R117C",
  "key5": "2UaNdvRaswqkM9oz6bkCT9HayuM5ofCKJKmD3SJAeSa5HJQStuh4B5qWdweSVxH8JFPn2ZYkH1BSDYdeL5WZZpWH",
  "key6": "4zRmD9bheX7ouq9FpmDoXzcbG3wRw2yXjDXJh95GgMmYBX7vfVRe8kbVnLZ67iWRCKrHCCWapvj3mxcyzWRJN5Ft",
  "key7": "ZoCm5VTG5UD9v1EViwG9BgKK6YHq8iz3ysshfaxcXohADjNAf87PKCSQxGAt9BGSiWVcueT2qacTJipH93tAKnd",
  "key8": "2bZKrVHxtGKBmNyrRL6xmmF2ZQBRyuEhxztfvaD79bd9urXYjJYS69Wpaqcdv7e1p1Jo2uwxseTBpimH8B4LMh6p",
  "key9": "3Bhgiifcr6ParEst9jjkfNHCisEwozBTpYc8uXyCWicKDrU2iwnGKZPY8VEkKNqowuAz7ohTHS5dwdQyetnXNPZS",
  "key10": "nUpvKRRDW1E2nWgxNNzmt6DGtqz1Ufxon3wVVBSDnZbh8s1AvQWzrEwwrZT2BzFv2vMCmkNmTvVCZ2xrVXF4md7",
  "key11": "4JsHMQmccWbsTHeot8gLpDs6N9tYi3SzuxRr8ZWbGuo42QxeDdzQtSiETSAg2uKwoT87fsS2v2kRtysoKg24X8pf",
  "key12": "63KrokRKFphs1Tp1bs7E4Wx1F3nmsJZMGiFq6UHXmPRGirhkhdTFMy9iwzJSJGoMNCgrQhKs4JK9v9t5S6ehzevy",
  "key13": "2CWDgEaNPJaDE7akUfqvQ3gE1CN7wCCpac1pgrGgHNDH5ARVhXx11NJSWJ5cxZGktKK1VGysCVS5R74CT7v3fWmz",
  "key14": "4cBkCgq89U4re4MtexGsRMemTq4vezLW5iYGgo1EU7jKPajfAuMU1c7Dv3H3V8QrS79qMjYTV2QQBMduXx1dnPU9",
  "key15": "4PgGxsAFujQcf3AEGHdNY8hfKL3tztGJe9c8y652nFS9MZkM5CFsq6qED3bdcdP219wGpFcDh64z8t6b9GwSn61C",
  "key16": "2WFDpz6U1Yx5RbcWCQocr9p3mtZCFeHZE9ViFKTbSkWtLJGfnUis4mZaFH1FzxnjFhRVGbAeW6vj2viznFVHBNDa",
  "key17": "32DmuD17C833qaaxbJJVP464BBG3FXQ9WdY62Q1DF8qgLEYEPAK1pEjTrWns9jbHdnB648DDWNMKcYTbxXmMbU2e",
  "key18": "3pg5B1Sh2Q8BT4e6p2wRPtfDAfn8TidLhARxdhRWn6v7STwnmpBUKMuK3xqGKukqk1AnWoWLQ83vBJV6WiyjvK3b",
  "key19": "3fXmu5tJAYdemT69MLCkDVe9ANVgyua5azc5i2uJTphpfzGnjLGGELDhGaj1RevMDCbvqZLji6Ces1Z4cinhmftj",
  "key20": "BVBfcZZQDT6oY9nJYo5ngPskptA8BoJ4fpb2QLdCZCe3Twx7V2kggAd4uexko87Kr9Y4CoYnDeEvK3NiB6SwW8z",
  "key21": "3XGjcXiaktDrGK5zShp7VJuDWrdjVNK9DCrWpu5GLHoiDQGYQj4pZHTNLYWMXHaCWVMZ4e9ZwBbXb2JeWnBxjQpQ",
  "key22": "6ARhKUamgQoyKVo9q8CviJgDgxpracTZkLmk5UKZ8D52v9pSgW67nMkfDXtqorSvhSq4QGrgVn8F3czzsiAdway",
  "key23": "PMVPRo72Cn9KmmzM78TyHvFqYCRaZ4YY3i8742Wa3MeQBXTPAD58qC9CBvd2fHvxZvUraEN8c3jH6rgjEusX32q",
  "key24": "4TRitWZ663WQ3np5qVBd6jdFPLhn1ovm2ZgqxQty9PQ3rS96PybYK2YoMDWbygqJPWP6rqSZeuyYp5NcoeuZHTWC",
  "key25": "3JAxy7dc8P7bdAwrYWRLojcK6UMiM7HaGoqfSgJKA64y3sjp18c4affjkKPUDzh6pkoxsFc4aByADXQ9L4BGKKQN",
  "key26": "h4hWJAKiVjwt9UtoFXV79EbAZvoUPEB5bS6AxJCKfNWb42d8h4musHs1jPJx2CTs64QBVT9qrbt73y45b9o6Bsf",
  "key27": "4neuxncpsNeijM1nQuHFaxZXTpKsG9mvyfCohzw4y7Z26patYGLh4BwePJUJR5ra8m14VdpdZ7WzoAp75YVRYg9o",
  "key28": "6zNsYnT6Gx3wNmQXmw77m6uxNeVWHeYQdE9z36DoM7ScFih5kA6QWx22jCcYGwRhnd4Hu5fzeuC5KTbNToudWx8",
  "key29": "25o4Ahq9LrzRKCxU3UQkyaW3AgQAUxoiodUHLHhGDwCbkvRZiDvbDGqw53Z2GdGeMDYGF7Gm3WLHcEiCV2PP4Kos",
  "key30": "2YK2ZGUNMTvHNMPcL7tFVWzj7TqKbamFTXZ9i93gGLbMtMDHS1vHzfMgkWed1WSGzF5YPm97cha5SBFyLwU1e4AD",
  "key31": "3ziptrFLoSt3F7iuiuGZxMo2Jn1p6vzUCuJEmfqe4hqKPCqyzp7HNTrrNmuE7zysL5F9MrNmHAWFvW4jFRXrykKg",
  "key32": "5shcRPfvshaDuDGWmJn7tH3XrRGYdJJ4aysn19QuN6yGo1wXUAjxUbg7LiFy6ovZkkjb7G5yP3YSsqDwQtvKmXRr",
  "key33": "3RgG7AkptcJZjsiZP7ek27DDpmvYzHXyrNfdqt9eJUjiafGosykyjqBwiVaJDNdk7Y6skn9M8CnUVnDALKZ4Vw9J",
  "key34": "3rSKhbCZzBwGZ93fcVBNbHznX25F6HJ2fLsq8SfaQSDy79Uc776nipYWiZ5aqdwrVEtdqqwSh2YWfjXxhDJmprn9"
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
