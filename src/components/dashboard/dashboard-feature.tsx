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
    "zPUGG3jKEVfDj37XNwES3aditGSWsZmkvV92Cb1SMGek8R56uNoGoU53wMeAmfCkXEa6KFeK88w5XRK5QjLSBX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3onWDbvBQQU5ZLwK9yBD3LX9jAqEThz3iszxVR1gQX7WxWgtu3Vk2mex4oPoaQt73YSE7nmVKffe8VrmfjHSke3y",
  "key1": "3wEEhAuQJh2RDf7kskidXjJMDuyYDEuSchPiwFfHYgBhWGvu6J4B4TSkEUY8dcXAqBWcEkToxaBwn8sDwsyXedBL",
  "key2": "4YnQwZ1hB9At1heFJb4EjyqhqRZbXnP4s1kWHhQA8Ms7vBKu8AnmfJBkx6A83nPL6UL5NF66QMe856zWtPDTBVhH",
  "key3": "4o7WjFeb7qUS2A2QeJ3Bx4bgVUxUnfY8myceXVJkeofJV4yEhsV9AEs1pE5a19XwwDqdDX5WA6RdRRVF6egiPqoU",
  "key4": "XGuKHDxmNNJEY4YvLzp8pJR7uRN1w1Asz5sHQyLvsEQKoH3qfx2KxeCB9dRcBYL7P3Mz8699bRSjf27UafjqJ55",
  "key5": "5jEijCT5mgtreeVKwZRGVzGRy7sPJCMC1CQP3VnHzWfyH13upbLpG7xcUGcdjvkKxxyJr53yXVHN3bM6LyvchXki",
  "key6": "4FLyL4nLpaBYzaUXRmTde19yPV9Pz7h1YdiP93qYjHGHwjaGkFJtuTJjy6etkX8TgRzi1aFn8tWdkEoWE7xJHexx",
  "key7": "JXzKGTkrdZejhsGbXnmYWtgsSgG6bhP2vTNZE3DNJs9maxEPGKSgcd7UEPSL9nT9NWJ4chwXAWq2UJZU876ByTo",
  "key8": "5F6EfNHW1Kex8qLh44xrdUKFr1hbZas2UdmFPDyj5sV8tbpWKdiPjuGQiFQcpbQJEg3BTAqHdRwZS6LeBJpnBPio",
  "key9": "4aPo52MvdQLdwdHqUHUXFG4j8hTR26HEdQAc5cuX3tqLU355GCjXNQg5MVvUbMUd41nGyNNkGCzLExCZHus4RMwv",
  "key10": "47oWAok11hob3LJMfzS4BJjMK17aL2ggQJp4Y9VRHPhvD2JSPk62TcbMzstHhk3PMYjZDLnj6mswzXVpFWzA7bn2",
  "key11": "DF7uWkgVUVMzg2RGTox7UpmmrmEa1GAp8buFeF3D6haEdr3ckpsZGnUdTvdT5PJMDesmrDLRJpFtCvnfagkQfCK",
  "key12": "5dsV6yfaWsd5eUg4mxSDhUYQRrGo4Ns9emndsJGkaLHtPtfXmBdyFHoBAUg3YhC4JoAaYs5qZTJJFHHQbpLtmZZq",
  "key13": "5tEx3bYtvj2yZJHXuJCYvFgVzHLUKyJBHZ5hJSiRVY1HPnrEzrDka6oKh9q9g5qdcqqgrxX9yrNhL3zy6edMbJxX",
  "key14": "23cff6YGnt7ciqrgSYfPZ9g9aWaCdfJSpTMfMmxAEA238GzKggak47zaZGEh4wZNnYhkC3trgJftz37nGusBAR5Z",
  "key15": "67fZzGSzS974ikcD3f6nv3CMR6YFYbmBMrFH2PdM1y2Z1JWYPvRoyggGY1PmWR7veLmsA1eTG819aByRnZST4TNQ",
  "key16": "iuRv1AZfPVX35jFVkNSh5mKw3LyfUaxkQVY8D8f5DkLSqXgAi82yTEeYnZxbQcTe3fuHX66aaQeMWWpQHwCrdtJ",
  "key17": "nMvKH98PFUGfEqRUrQHAvSA2HYntiGTEWgRhDR4tsDxpkDG56KbcG3kDQHkNCFbY11Xpus6KfdqKSbxJJ458UDR",
  "key18": "5U4fySVDvzBbpjUXpzTKYEYGAU1hpD5AVtHu7FED8FFvkYXjE3r3C5zUFDh96KZpqGZy7yPX1U8jxhFQYhKkMi6S",
  "key19": "51xNuj5mYgtypcB3Cqg9sdFk2LELdd7A5kmTn8BD76Z63Ps8E9PDM6ZdvEDXoaFBPfPFzRrz4LRbM1ZosQjN1ifu",
  "key20": "5NtGZ3zqGpr3TM6XdMrSYc5JN8GoUV5tsMjEysp54rnokhNzxCzTed32vjfVbkSrsmmh7HJAJkKQEJpv2N5CAwG2",
  "key21": "rGy2yGxhJH4K1PbnFb6uGdLTidk8n64SDcv3AkxwJDUu3tmG6Pry5xhrefcaMnCLsejLipkDjvHE3JWkHckVqp5",
  "key22": "5k1enTGJXP9A5QbMnZvagot3wDWJHVyhuatLQh9oLvrogwsMzw9BLVygPcXGHq5vJDX1ajqpioCWTP4XYTykfD9R",
  "key23": "26w3DgMeXEB8ugxVCUUTQQQDZZRtPAf425EyYty1seRSv6VLixmLNozYLoAmcfN1rSkb7vMYeHRHqjPLYH3HiFHH",
  "key24": "5ZGiaPhGGEaXGXfchhc1FyB3A1QFwAWYySxhVQnhV56saGn9AByUjCnXDu5USWahvULCwBBz2ZK1ULwueoj9BMeb",
  "key25": "3FBMDihCMLNzoSCgUAN8yo3Ldoav3kUEnZ7Zn8A8PeSFx2eo2qFViPeT2w6z6DMWQgoomJ7UJxDUN9bJPW1Kwhin",
  "key26": "5mVkoftMGTF5vqUeRC7R5HVVLYPKQVTQjrx4objBXbG7A47xACgsiJQvN68pt3LJ5aM9M5jvdD7xNDRpowuzJQGP",
  "key27": "3sm7hFf4mu3qJGNnv8b7w39fKYXwpoFnvkQ75QhK5CMnXv8RAVti1R7vyoSktYkfF6W1LFUrZDQPdrAQuySG8qdG",
  "key28": "55zYu6vgivKBoihkbhFREQwydVuRXWEuVkMraEvHhPsVxBgU8wdGqgVFgXQe9YYK9jiTN3wJU2KJJVuaPKX1F9cA",
  "key29": "Kh86Hg1RCgGEhg75LgumKGLS6VRVsbz2zzWvL2voK5oHB43Ww1fcSsaQnkguVXfFk99EtsivbEqNYJ5zQTchUUC",
  "key30": "62fwxSsytfKgVkt6Lbk9ZV642JtzLHAV2F4xxs6YfDdGYVwSxJVDzo4dwFzQ5A6XFT87fZfooHQXK1JK3792CAfp",
  "key31": "kmHfxxnAGQYypn9PMxhePWJKGR7hw64zXiV2yEXDCKGFgPDYUyT8bS1CY5zV3oUHzzWnaoJ1UKq4xsMXheEYhdn",
  "key32": "5YL3uktJ4tcPJHf4QaiRxqzAHhWJ849XAe2UDekw6BP6jZwBFr3VfwNPfYV65CWmVJXC27rfJfKiAw5YKqf8uL5e",
  "key33": "fs4TddgNr6mnjDXn4o1dvi78BdDfo63vJbJdYW3fKB3KNpC132o5gsu8UUDmsB5RirHtiYTLiwgXXWPqizz6VDi",
  "key34": "3yyD4xJBQWcEpNU44ZffaGMiRNPsJSKGKaLSUTByQkbaN4PtE6s5j74ZGaQMNuCUakDKw6kYF1oBZte3sNCxP8yt",
  "key35": "3bi6QbNcFbuSSVrDn3EZgJwGhxJuDdJHpTjPrGxvK1KHkrekz54ZPysuXTk8UZ1ttP4AUyyN2HkTUAiWVpkezgK5",
  "key36": "1JExyBkTYnRBQQnrdCqNDJmMNwF3HMdT753UMZKxgvuEMy7KRRJibSD3SVD3aie6At8fdLCDV6RVm1E33iL3cxy",
  "key37": "4Jiuu54bFRBSyZsTDLW1NiaUZZhPW2FMT8uoMMAMhbfPGMe93L3H7aHTvBMpJEZGJtntuekZhhtNmgTBd6FoRH53",
  "key38": "5L3PPrNdiZeLL1kS1kRKxbufHUei6yFqygjga3BN9JqABt1SpBRw8EYDhdEr8qiueFg3BoDQzSWLWWEt9cavF9G4",
  "key39": "3ekj2TrgK2bD716HnYFDdNRJNBpuxEfMeSx3Gj1QoyDNqYGSabcPcXVNfWWkB1HP445KF8igu5Ab1xQrDJqpaoX8",
  "key40": "5Xzep4PkEpWkq4kEyxSivewZviJ5k6Yay6z3FyGg2pQomqhTPxVoTcxWmYV8RWiixabr39nAKeiv8ueWJxifUDNt",
  "key41": "4iRw5CJv8cxJcmGt2jHAzdAVBC6j1eHzRgYQmTC4uCnUVtMPHkNo3ojfhp5B2rt7rWZPNP91qxGD5Lej7e9HJbsY",
  "key42": "5L7ZhGVKU5BJ5bsjcEWe5RyPNufSJqTKNwSWbhx3bmJgVzVFGw3v4T4qKMuh1TPBnBnQHHsFeWYsGLKotRLTGisF"
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
