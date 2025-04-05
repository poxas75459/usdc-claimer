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
    "4p6PncaEvXVHqdaawTwQMoXkgdqrcLQrxYUGygZvKYQQ4gpmwJidbTrW4yzJVqspsqFNDs3DESxumaxim8BEPy1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAdeoFk5bLtU2jGzZobJsYGd2ncUBEDLNKcLqcVdhBBUSoFzQEP2SggTDWDhMF9S8MJ9ARdrFevm2s4u64dT32f",
  "key1": "ErsrtFwCzRpF4q8vZxUYSTifo24J4cm7r7YMCiB15Cr74JVTgKWYBHeaNPpovBi9AhHRdogCQj9LSq78M1A9ZZt",
  "key2": "3JQGhSRqwCxE7FBMSAiCPtWxQvBfevbwtnbTXYfDkuENAPSVjRwyhDsT3uoXYnEV3TcEQyf7hNa5gg71QwHtubK5",
  "key3": "2Jqpn7odKPgQU2PnY53y4EdHSgY3dkXiCfXN1smhm2fofE7Acr6fKnj3kX5A7DcCtLwwLL9zFK72BDGJABmQsy2J",
  "key4": "5qHzhgFNf8GX9W166JJrXDpgzmbhD6Rk99aKofiSw2WEmNgST6ErKbWT1rc43F8JUVsVjrroiN5RcjicWuA25fmh",
  "key5": "3nKHB7Wzcc1YdT3iujbPJkwSM4dcybeh8d87utaMvgpimWdWmkNKy27qJvzz8Vs8NPbVvifG9DZhPhaeyee6znNf",
  "key6": "28MwyFkCUqKKz3eN37BN9jzEMN6twr65G4Yj167RT8WYj8Psr591N7nHRN9CeX6FYoocp7iuYNMxXCBkNANAXxcT",
  "key7": "fxcVs5xcktjZWVG9C3EXeS6vTMFUwJHEut9fbh4hQQkwzAza5QPz8mofHbdib39tGrAjrSDfVvPdPj6QdtWCg9b",
  "key8": "4KUaUaH8USFExyqpo5gTBduw3h6mCXQK2JiTXGGiE6GCu6KbrH51Xv4YS2mStm32hQx6N52hpKv6FmJ6gf1QFScC",
  "key9": "5QJW1tme3X4PDhfxsBX37sjDMrWkqAVM6yy7J9GbKrP296VcyAHnxvsEDamUB5Hg25RvEWBpVveGYj8F9ETV5HqY",
  "key10": "2N5ZesEZbZu3Cb7n6eLeAUfvDhj89bSnTJ9EGKf1TBUAMamckggkR5QV8N1EGK55J6W3zLUwqhQiZKDauef9wDEJ",
  "key11": "2o9gdXivfhmFz767Cb13cdnJi2iZBqgFN9oaXgG6tWNiArNdixUexU2Bz899DfjSuz9SvLynNHAMEP4VGHwEmDhC",
  "key12": "5RkJuHXT2XEpdtJdo7bJS6dL2tFAYmGRArAwvYZ8tZniohDFi1tTxV7PGXxyKjdNtaWCgeEF4c3KemhfuYUaoRT8",
  "key13": "4MfEknbKuQyr7g2CjtjyXKoMDnR721399LKHpAub2svKAExzUZbMeJW9iQ5tk5UKAB5WGLSD9t84xZsci4NczBig",
  "key14": "31g38hUfDh8pgrw4S8H1HQwaKvfJ1RyvdUY75cHpWTVNSbXqH4LuABq5r81CirMZNznKxNxLPRJBqbn1nShKWZPu",
  "key15": "4wrngvxbbw2DHr4zk34CVucaw6tLRh4LxBPDAt3j5TU62y2kQG9TgJoZiksZGbia8NrS2NafpTP8LXujN4i74zVA",
  "key16": "3qtztSMQ87pVxFsKhN3qieqwFivbT6kYCqcdtoBSHbm53n19zyvuMLTpQfF6Z1ymj97QzTCessxS4Y2emDoALuMb",
  "key17": "3M9pa3oxuwZVj6rsRaW3e5mfV4gwuD6mj2SzXyCd7GPi9zjFjstFUpzjF58yuggJ2hAK3iDoonSd7tv3V6WTj63K",
  "key18": "4hU73XzUYdBSmVVJ66m6BqpfEToQ2ZkrsemZfzXRXeKU1FJsoBQCvy2w5Ph4UG5TdxaZ3p3srmM1ddtqKeEHzTeJ",
  "key19": "4Bwkjhuafp9b3wYTEMQRFcYS316GCu6cXAGbivsw17JPa1ahBi1yhvLpLYP583Qj2uQxCUsdEQEoeYgj3ahQ3h3t",
  "key20": "2F3ALcaAZSX9TgtoeTLapJm79GQ4jYYrBTDarmf8gSh4V6cbpm1jWZT51PEoE4gM27gtsvQsLUrgbyDfoUG9NCfu",
  "key21": "2WbtnijchZ5rDYdaavCKDtZVQsycMoiDjp77rZS7LjWtXubm8SNMBgCcpL88AuYUcnWwxPgQwk8S4cGqxmoeCneE",
  "key22": "2sbKLk2asXykZ5t4mx8dbyMJeu77re3imS8JoaM5dkLw9Y7RW5m5Vrohj4vC8CF5qnxRtKuRAfV1eyqDmNKoZ4ER",
  "key23": "4J4imHrwKQMpifC8eHozEAxRkYHsZw4mrFCkTr3zQ8cxbqwG1jtL9q5znVeAmmkqJRjdWdBf7Z4tja4tVJhGEYAW",
  "key24": "2K6pLh8ygjJLCzEGXXGrFcykZSLfn12kRMRfPyU38uNGiLb5aRKnaFu2RS8FAqXwVChuifPfsPyp1Eh7b11rPvnN",
  "key25": "54fs9cnKwQaaPXUiNczLGiRcUM9ZbJbmyCyxEaEJjFGWsU7H3jGC8QsCFuTDTn9SC3SAmH3VBnHBB78hQYLaEtN6",
  "key26": "57zc1t6zFNDYZofc3fSkZwknKBDkT1PpeTnME3LMn2YG4HNq4jE2H2GSbWFVZsjnM7RumEBSQhi3BKfZQas747zN",
  "key27": "9CxfYr8tsb99jpB1icmBaonbR4ffXNvZEaevFmhdjL8VAh5izTh4hLH7LbZ2aKx4dQBVtNmTFctjzUfB1fjFeCM",
  "key28": "2PRurLj6W1USwJrT8ss5S26J89WYTJ3ptTtMqq8u4f27fnjDiUMkti6KEwvuzpvNTiwEgEeLXCxMYtjdmihdCjnf",
  "key29": "4fEtm2p9GNZhyLgN39ibBtDCjP6ZRJpB111NSHGT9Ma4cn5NqBhvhAvhPVdiPxco74QonUzjwgfL9But8p29XTfE",
  "key30": "5iuBsNcG2ULCL3oKHSx9RppAvgP6JFi3qRaqFCgGg6ijvKzGQ68V3T67HQgkzPcjyFW1BZ344XkT39nXjSa7ziMr",
  "key31": "41JgzCh7Lb6agukhNioc5fnYmH1UL2kNoerpkEPY2p2LJDxcAWnHQGkkbJzGWsbBT9rNkESHTT9jDFu5PfKGnLRq",
  "key32": "2wkUg8ERRjpJ7uHcuW9hJwShUUGEdYVSFG5Mbt8AGpMAXFK2SYULc7rtQtsZfzg8KCHSJfNinH8fGjbQcJft9WPH",
  "key33": "2w6FVphjpaWR96BpmyE11Nm57GWzP3eS2RtFwuj5AdyHQdTgKpK9nguEaP4At24KFaGZnRYpxAkFXcwsCSmC5h4c",
  "key34": "65n2GxzQoG99NyxCeEpu9crXDJ44bDEBa5ftaAVaqeHwHwWMpkv8mM95fJCendSr7ZFUoV7sCjQStVz2dhdgVyxc",
  "key35": "fuArDAB2cSC2VmsQjok5qLuCz6K1xEZNRutmGGUomxLpwke7VsN2NUhacDCFqXcDvH5XR3Uiv4SUahoz9ZxY7Sw",
  "key36": "5wNrp6TayFJ3Jvm22dXPTNTZc4SjCWR4YPPF5gadhNbTLWFMtWq7V7uhgCTYByoeRpK7y11wCmreVBsB4vr38R2q",
  "key37": "5YdNcbyC2vMtDteNB4tjQapaZFERUH3NtCSHrEXMo46ksyr2Mqjt6hfUdqkQ7CEyfjJAdFVRktHjFMcxCT87ET9f",
  "key38": "5WT4f7C3W9EjQNvUkvbxJPunDkr2hJKsUDPsXhJEdjA7hnLwa9BowrtZLsoMWsE2baADq6EPPgEz2XydRpGAhKNr",
  "key39": "3fEC9fpAGZTHyzsQQaZBekndjfnQkx5fJSdextS8knnMWSaDdQ74P8JT61f4Vwy9URVDFoywp4U5FNeKjvFoxXWb",
  "key40": "5AMS9CEiez8u9KxyibX3ghy1YADxiSygJX17uA5FGoQZKAvjPmyhLpAkU3pxgWGLN4SAVSgEENXXBjBa92zmaTpJ",
  "key41": "3x1kbEuXbcDvDjAxMFvJr2FaX5Gi3Jy6zC6wCBKw3VYCvoqQk69U1zQW7NUY8FRP33vuY74CznSE123x2wRebueN",
  "key42": "2poz5T46NhTbDupFpVzYeKYHfJAfFsR89o1av1gYRGyJviRgmVmfwysoih61Pt1xHyLExjnTzx7REmDQ2dgfEa97",
  "key43": "2MaL4iC2WxoM9jzQEhdQxqPZc9rwXZaHAerWgumhNDmAUQK13EPKUExFUYMALYM2BqaQKAHQuPccXc5mVXnFswRg",
  "key44": "zFj4hrL2Mf3Ex1mvPtCZiykESeadkrMTs9yRSzrTXHap2WR52rj28Nr9yv3oiysGAJeM5if184B8JD3JCtSB33d",
  "key45": "2otttGqoD1tcpxGgB1goZzp6a7wxNgN8Htn8k7QpqdC4fEPnr2oTmXBb3uCczubJ6hEyp2QmTZusQW1Q5Xqqp8YA",
  "key46": "5abo8ZZt9N1JbFJJf2PhNbRdyodC2GjQ3aRQtUvxGk7VsR4VXiyN17e4e7aq3YNDWxsMR44Hrv4EQU493yxkhhkA",
  "key47": "2KUuDdMALhc1WED4nNDVSmbeJPakDCpneM14NDPG9gRtiG6svLMEUqAUygAaynKKznMPUW12mCXwK2CWzUTNAhEs",
  "key48": "3kYBDqmhdyb4unPuiG82Q7rurZ3sPVNxhpA4v4tEPwKiwMRh1VXQd5RqjZgYgQcXRcwtKWtaL5uhTyNTShfwwsB1"
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
