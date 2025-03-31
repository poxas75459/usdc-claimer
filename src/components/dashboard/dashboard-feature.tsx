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
    "5DJVdwhNR9RsRodXuRex8TTafVoJFbRjhyfP2oyUn3reZwdf4JDLX87kX4gMmXVy1TsXU6S9SA8UBWwRtkwvgKjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A7GZkXB453GUMoqsDY39CBLoUP6Sbs9TFFVusgPtbVk4rWgw7ZxTcSeoaTJds4DLy7fY5vhuoUrUsvRYhjnDTqB",
  "key1": "3LDsnznwPqcGG7m6bcVDVxTKekheE4LLMzPt6ZTGinVLJrfkdjURyMoGY93rstgRdQtXrNUj1y6bS1tFQtxiBuid",
  "key2": "2zixeRE9nWeB3xHcKL7DMwiUEDLB1ogYircgo8K6WJPxcs5ncbkFdRgu2XJXYdCDQu8AZANw4GgZHVPk71qh5cYj",
  "key3": "4uCRMiiLm3GKgyx7rHNBJrzgTAonhG4CfiWiJpBqcAHHnTHfksdkPe5TgwSVANQdwyrKKD497UGeZD5vA6vWkw4u",
  "key4": "5xr6bbovqtHzzVcinB6W9wmpx5BjGNYLHNx7rz7CHx9g6daNtD6ydVEmqyRm1PipyqvSrwFRQbHPqadVdn3cAHNk",
  "key5": "31ixpCWo8os9tKnoZizQvsaGGRRn8wNVAjUknRG6jjHJbTbyeQK9THa9FxDcckqYZmoSEcuDyN1eJEzXTLd4tGB4",
  "key6": "4A7o9aa2CgdpMvdQy7vfrAprytXMz8tJeYGuSKnaxCVnPeVsHLyjTvKJfeyVFV2JJi5cgvtxA7PY9Q9aJMTLmNHH",
  "key7": "4q6QqCAxGUiwcjVDst4nbDS3SEUuVTRG4Qw5SD2gD518sRE9RWT9CuMTW7YLrbPyAeb8urMAdEukm8akx7gNrdrf",
  "key8": "7ThcW1qq8DhQvSZqyG9M8oqJ7XeN7mXcby33QoxFbyzSHTT9P3VMb4com9THjx8yYJY4fRJsiZ12p7Dmve3UG1d",
  "key9": "3NFDEwsacFsnFGfmZjRNbjnYLTYNSa3yAmerEkCkb5iNkbbkcaE3EW2AiUMw2xJ1aGRsV6NoFuUREDhdb8GZTRjQ",
  "key10": "3FbSztDeYuftsetFBDJraeFhVHMkeWXVwsHH396Jmc8YCvNPjBcZLVPz5vk4fhARKXZhNumNdEu5bXB8bic2XdnQ",
  "key11": "5hmpLSG5BrXpb75RGyo57xmcHGAadUYYwTkCjkuxiuxjPA9fgicnzuk1YSxgQ6N5vCZtBanF167PWRDChMQxMXB3",
  "key12": "SDufB3VP1ZpaBY9Mx5oGMWW8HJXUNdJohERjhnahV4kfdLZ7kSFM855Q2zjZE4YWwox5AA6vSGjsNKNMhXZFNvm",
  "key13": "2jgdCCFrpKsvBVWYGKTZucpLh6EEx6gvwRtK1MdwjZdPLKZkHWfiNsDicPAF16qFKsPvpjy9HjVN3C2GUTdDRW99",
  "key14": "1yqm9Q5KXmkas8T6D2TBAr8uQe17o77wJ1rUqj2kKBP2cij8FZfNk8bt4vWuHvamdSk5qt6NLCq6B53KNXSY5dN",
  "key15": "43Xx6NkHoHm8ZPaTgCcAE2pyfs4SpQ9ghUTYunB2XR18XbAsdbP8v2fQec6rYugw7uLCo62Gup2P41v1yHhtWYrj",
  "key16": "2QCepYT2EmV3r44BHzEwi25BJ3rsS45S4t63i8YWK3opX1us79z16UrM3hhk7Gx1sm4mzX5yDRJr7djMTQeb8f1f",
  "key17": "4VNsXp37Z73EgRQjDzj4UmhSxy6Uxj6Xr7cZL5XqvgPmN4JmNLsFAz1LUiMFf2hfEmg29fu8z5dmhXjL7BRYjqMh",
  "key18": "4XFvkJQWrmgQQKFaePMS7qSwWr4sTcbzHfSyBSQjiRRiwhnCqsQVcpWyYQCKRkmyagGnzHLaD12pyvsPUDoqZqkL",
  "key19": "3hDdLudPj9x8ruXLcj3mdH8An6g4VC4D5Evggv7qEkYdwJCbYd5nBv74WbnJBj4bMcJH452yLDguCNJAEnpQzPrz",
  "key20": "4Ux6eLdQjdBxbgXzkbkgSrPE4vVpzf3eq3fxLEuCXB7jusFqF5HYN553tDSBEq1A9eDqQEdi6ERg2awAVfoTJn9",
  "key21": "49tD6MoqUK4S4uRUxC4o8HGRVoLEz3pJbwGGjMfHHoyyPEainM7TAJSNad1rVJE5NmgW4nCKRMNgFSGXkdNWA48J",
  "key22": "3kbqbKgKkmxjZ1Gd9GXGHWPm5N2g7gp7UyV8UpKednrBKeAtXqu2cebzf7mTSNMbRnkMz736mDydNFp3LhXDi1kz",
  "key23": "4BouaeeBC967EwfFZTWJTnr69DJH7q1kT5sPqRibJEP5LRHNajzQPMAdQxAgyMsDtVjMQWNfn6KwaAvEkx3NZUdN",
  "key24": "4Tt4teFAxYwyi9nYQTq8zEdGoVVgkUa4TJDHbDgSvt3faMvnfSqKR1VEXJd2yzPSuQgFUNi52pDutwSxnn7LbBcQ",
  "key25": "3A9dbCv53XYeR6ENawKp13CdFcK2cQ1FnKsS1N5xrrRWvBkqomEnseTF73Crvc9A6UdsiCwYfPbkHDa1DmiULfFg",
  "key26": "pnmS3EVmYM6HkHzyL8dsPgBMEiXEVgU5pUHsTFUEAZ7HEgWVH48NiPQbSauKJ3DgkacdvAhez8sz4gECcrMvPMm",
  "key27": "5fkRoErY6ffHr5Ehdyr1aXNWbDu8MmYDmuvcEFukhKt22fiEAHt5KpR8F9CVp2RKnZH1GMJD9hj5ogp1a9BehAj3",
  "key28": "5hmUS2yA8iq43D9BhKx5GPug1XLuhWSDxTXnKR7ytap1bqynUPZyXBPU6yt4YGmTfs47HZodxM1124mSxx7rAMUH",
  "key29": "3Tt7ZtvTAtAYBUBYS8Bb5vFXXWt4fread2NHGAYVJ2jWVmhfGUZvPRoqNXGGD4pjwhDcvV3gqvvcF3WPNyeREqSm",
  "key30": "2ia9eMvyYqxeWqSid9GC4vQQauTurALAr5Hs9EmQN9P9kjzQ5SV96NuhpCuqxBkMyA8W3tGupT6PucAFLtceYWxC",
  "key31": "3v7Hb2XASjoGvPbCBY3XjHQovcA3qTumbczL8yyRMR7zqbnnaCtpGem8vZv6FkALbePpS7Ub7PmQtjjgJn1bYDaN",
  "key32": "5kUay1e6amN4ednQEYAkgwWFixv1kzThvCVrJc2GaMxEiRMufycshNKh9jJbKNzsK4XQQx3WyZWQJLTnxBUaSHSC",
  "key33": "5VBE5BFPedWiJFcBWW5585V6mPeRw8Ckdx7V7F5GywLvx8oQNdgQLWFAAyt3AQHRAyWBzNsUvCZGZDaL3cxFLKBj",
  "key34": "4ASrRjfYR4s4P1eNfkNYohBs5xJP5qsk1fPKdXiSALKhfhNmGb6VDoouA8YnEPnT6NHHbo3QVQFPZrxbLsWr12XV",
  "key35": "5VzbAZVGL68av9BFCi6Kgzbd3LiZkQcLXxDGixXQmYhHsMnaPHkJCkqBaXwBrzzsV9XFEkbxqLc9CGn8XSZyV2LE",
  "key36": "3LyAnTHiW2SvLTyz4bSxxBycz6twNqrPPHZL4ELi16MrVV4MXYGuSWXEXjuDtu5Juf7V1P4AEMGyH9qMggnGLkft",
  "key37": "37w9SWnzPZK9gurw987yEKM3gW1tqFg9CUiUgxfGimbSVJMT6Su1dKGgVL8BzD2fXWh3nE4RxXY9MnXBm6hAu1oq",
  "key38": "62Y9v62gTorwoEF8GQAKiSPqwCRqtUbQSfU7peToTd17v56GtNuKhH6T92oeS5XXMdaxrqMeGypZkhAc7U8a8xg9"
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
