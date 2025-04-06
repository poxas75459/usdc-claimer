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
    "e4WeJ4fyUVxYdJdRtasyyrZ1fx52dpEJU1LAP2jRyqQpsdzNX2eA1YrmN1RQszXsAw3gnSgKWZCLKK6BN5rmLFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V954HPH1kX5KtX41VJiaX8vSjEtn7RXBy4Xcp83ButhDkgScjCvw3mXkN4Y4zPduavrSN1Q17zfV3vDms8kvKZJ",
  "key1": "2d7QE19TZ7t2GdykkC6GyEKa3YA4guJEifDKqnxzy4MiMdVaNS3VvYAiDEmSD9Za6Vj61xtDLCzzrtqq6ePfbiQi",
  "key2": "6NUsjNaLgfPGUq3Pq6MXyHyD1Vn33yVjRiePKNwsdoFHaMpST62Ca6dy2PReMj9RAbyRzrpcjHuYs9wJemZitFA",
  "key3": "4YW2Tmv91yJ1L4NGdEEQqjK6FEbSyxR8Uf35KoS6vfo97brGqFxqU1SNuU96MNNb38TuDtca1wHvtqJaHEsNUSye",
  "key4": "3xwHwvnBNbBgTdrYBQVF4tsgggBU9a3nY9QRXzeWi37QkYvL3jtGaddEdFrh7JmQ3M7cBHz1jcz75qSp3rQgD8Ua",
  "key5": "295CCvH9zBcvmsF9GZmcMtmNymjfo9zcYNxH9RPcSdAyWgFbuixN2QAtgSirZr2ben2UtN1iPkr3YoAHeG9Ver7c",
  "key6": "3T1JY3X3mJRHmQ2SxVFghypBS8P8sShtnkkLFBXw1vzES9nJ2nTo714psM2gDAs6juhhQmA97LNUMSSFjw11PqVk",
  "key7": "2GXP22FxrhsnWsNBQD1aKYpbNU9rLJmGWKd4FDwSwfiydM1akGXEyMryxdhvBUNnBNoGqrXgVwUnmmqt6oiuTNpK",
  "key8": "3RZ8bwU4KEe91rnawJDoCjgwj9L2N6JUYcUctPFEw87yvnE8rvXxr1diJin2AkyL1svF9KHKxgbH6d7rkzgNibJ4",
  "key9": "4LEufQm13RLBAHvtTn5Q6LRSVxuZzAN4swjrG5BtgSyDDwa74di719QGhhpabA2zL1HrpDwwg5pzghycjMBkkC3D",
  "key10": "m2jxzZ7mK16MwTRBT7DnoNKAJ5cmtrnGdJCjs97anaRz4rgcz1gPfMe8M6GMaaFbrbk9APL9YMZKc2YAWEBu9Y3",
  "key11": "3x4KV9RqvTH9w9w9Mg2ugrUR3djekgxuyRWgAvep4WG2nCDgcszQQVADukAhiQVEyAgfbibwGxMVni8HvqaSqqxU",
  "key12": "2t8tTdV1hM4MUEsCTHMVH61FmKySdNSWrjz8MVhF7QiRa4qK7n776KBabTzLnnvsjuMZTybFGJGoWRtbBZMEjAVU",
  "key13": "2bB9wnKME69XSc6STrLeNqiJ5HQRhBLPrJvFm8xisHjSLs8n1txtP6DaEeAUiArgYnqsv8GC5Z1hTwoP5WyM1jwQ",
  "key14": "jY6QQe95dTjv59GNQTdrqdMpFAy4URfVGGdZsZwKH4fjXYruB7ZW8bNr1Zw4mP8triBsnvwsSKmCGkF7XiTsBeZ",
  "key15": "4mhYkZ2qh5fbwi38rH6qX3N82g17bELsBLpjXwtb4W5R9h22gb9APZpfnn39ELYuCjMAVTp3Uy2QkyFxPikZnD1L",
  "key16": "2D9eJrxnn3CRrXM4U7q9A7nh2A95fdwKjnHPTB813uKCsyDwc8dN27N2fBC9NyQwHyMGdjmGsJdMBCSG12upJMJ8",
  "key17": "32tgCB7z7cpfDPAw61GTMvgYMUrzek9h9MLE4E6tcXLViyEHiw1sPNDaYjn2DHDHE2SbuDyPSPjzdsyV3X75qdqy",
  "key18": "wQVpSLccLhWe3toiVhpkDWbk6JZ3uVPoUzqLZK96SX3m6LafeE7FxHwaWroayhV4vBT2AVBdd6F8ZJHkzXvMTop",
  "key19": "2yZbNma8SphCknpTV7993Sxe3L6qSxb8SkkLFz2NmhHSgvuEZ3GNJZyFUxiqDcNyC6veuwgMqh4f9VMjCCW8kX1e",
  "key20": "28iCYJ23Xu7L5AY4VzKZTxqutkwG27hTpbH3BEiE5aWorkzRjHyHNoLyYCHsxePWtAs3VtZkxMewBCsoaJSMqzch",
  "key21": "5wwnocoAC7VkTk5ztuGVpBwhvdMhFL1pozu2t4fJy6JpDfpj8H7E4exKhWVWUDepGvGzy9pDkVVJPWjKkRUMo4Jq",
  "key22": "jU23eae3T9eHQm1FAzcp4bGTK8zBBQtE9xKZbwATDD4ghT6zHdzyF1XCAVxRjwt2LLgdUiZZoUdcAzLmWudn67X",
  "key23": "5BYWoZhpqEzfsDy3T874GqtQv6ncoi4Z5SynT3oBqxjXrD1Z7EJQ5K3QUw3GUPgf3mvxSDkjSfZexc5Q5MXHEpY2",
  "key24": "4BFg8nGDKbGXqEvU5RsfAtwA9iRKgckYPfQatXXdhGokepqPoPwiSyg4KWrqX6HX7ydEwo8wMsZwdY4hmGkn6CXh",
  "key25": "3DpTkK9oip5LegkYFrfQV3rJCkadudjYS48Q8KzAcMoyUvQrRAsRoNwSHYeYhKgU891rQvwuoGk691kcEjVJzDdC",
  "key26": "2srAkursT5w7m5m2V7ysdREHcrKdvKcmKyW8iYVdCsey4C6wQXnvm2Vmxq5StHEUvJboHX2JhGQA4xcoycJwk5Xs",
  "key27": "xEBjbeEuEtK35h4b2T17cE6GfJrsL5pg7kmpnvUNvAntgzjHx1gEEBDjMeyA1uEHw24pmY9MWXEBNEkEwYqYnNw",
  "key28": "62VLfvJ4XBhoKTLciVRHBqgQgmqHYnjNPVHQSXkKxcfMKxWXApP5h68VuSEv6JquJGZPPYMAS7twc2WdRivQKoXn",
  "key29": "X7T62v18VREiNr7KEvYr39NAt3y157H8bhaMu78cJjCXrEP2CoPbEYT47CctdLaDXc1GaNtCRTPkPdSDhmu3KqV",
  "key30": "3rBtVB7PCcrDormPfqU8yRYNja7PWqwPeA2xf8yjdA5cUDtQfDr47chnexnFf1quJ1whYm3J3xDEn8kMrtkTNcWn",
  "key31": "Ym8btz5XiAahg91LC4Xcai47QvoSw1PmjFdheC2BS2Fi43bEthFGYonDemioH23VxTJwEResodgMASHhV7cnAT9",
  "key32": "3UdWPwirVVCS8Tbh9yWn7uiUgsCAujxyt1o1UJs4Bd2QbdTEcxmCcHX8nsR6yYmE7fpV6jCxmUbAACFp9WS4LGZz",
  "key33": "3LRJSsCNmWZ3CDLc4WEmSkR8nzPjbN1akN6FVNPdtZxneHxqWvjbjxyXqfeKGVbAvJcWcfsUs7faSNe6qxPjibqR",
  "key34": "RQSaYpyEbJbQQhC7CZBEqUAsBLGSWBFw721sPfP1p7kpc4WCxuUhQERUjWcctnKYmj9RPUDF3NanRvWhQBsJpFp",
  "key35": "3SyfgZSoHtSTSybyHsvpEszxumuGTYZY6DoeEStmp75eYLMQ9RwTs5vgeGmL3vjK3rLsotRXsurFne6fvmcP9Zch",
  "key36": "3o4WcNcMoirYGjEwV3bJcNVJH1nU4y4rxAguz8GrBJy1YbqmK44FyW4FUXUSbtqPcxAtz73udFDabgChisP98p9i",
  "key37": "4wuQVCv1Hbb3he87nzADRP7mvNYbnkyj1Qoq8J3UB9YwqeEg832RLAAbPvps2Z5yxMaAhXq9wZviXw6WtZynUESQ",
  "key38": "24WQN8N1BdzzETKuFprCdvjr3haMuFSNa8E2GabL4ZgZjuKEWL2kPFqZuAQv5BduDRf46xjp2tDj8bf4Xp235seh",
  "key39": "JwYS44gvrnm3NqYjapesaYdaSZasA9p96xXVHq7PuH7Z54PWHj3kZQqWtwXQVq57RJzqu3wKuKKwSpEYqBrNybU",
  "key40": "5j7zuic13SBgY6ADgWr2aq1yDNUiAUKNUYFVuuEwkFNN4dEzvmGdjB2KYhoy9hRWVeabdXRr7U73UvtiEvUQLic5",
  "key41": "4GDQi6qAA9enWcxusWvH6rAYjTyTq374kLoxMz1XBtSiaPBd9RgJa4mLM1jqu3EBLumPw9tCQHa7NcTZ86UxRFaX",
  "key42": "4nw9fHGAbS8Upm4Y33tPZGq4qGaa7YcWgzyUMQyj3nD6sWAtGMsqMa7Yyvi8veusbxww3jtgQWCW1v5M4wdPfWRz",
  "key43": "5Wqk9RY1KH9tYarRamUR6Jo2WpFGcjxkWArMh7YBGVrfRnKoVdjwGnNjEkZom8t3pRwTqcviGY6SJ4yDrM3UQZ2D",
  "key44": "4XizuBNByhcBMFJepsYNFwzkViW7YFBasQwke7PVQ5kRw4eCaryo4hTsSmrFY9s3nxjJ4DZQbr1mJBdKiT5M4TAW"
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
