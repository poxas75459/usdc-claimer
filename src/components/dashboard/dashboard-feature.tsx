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
    "3c5g7fR9L6C6G5ngRMznDtJBGUUYWDaJ62o56Z1si2nAwGYgWBxv7iS3yhoydLZcXJVz4GQyYPjodiEmRaH2xN1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2TBsJ2qNAqTJXaj8Q2Ymj1KMJJU1gGMyGEE8qTtwafJpZ2XBCNc1NveeVfb2CaVsH5VAxCVUNMvT3bHS9sWT7y",
  "key1": "36aRxCqv29fsYcYmh2pQt33t5tWLAoRWLnjk55DvX3GpnNJQXAkt3roSq4R1xDvkjqKNpgyMgwLQPntrj4EqNQjx",
  "key2": "4rgpeiua9mzxQ4w7e8kc2KLQawAuMU2aKEt7kKzavkxZuBfZqMMWKZDz6fDj29jYfwr8GeiMZwf6gEJN5wW3dxVr",
  "key3": "3s4m1xqLBWfmtWjQQgFbst93U81YVjpy9DuH4ps38F2WDfWjrjuQyNWMpdrZttQkqTcrFiGs3cBjGbCXTwEGSrtF",
  "key4": "4ga1qUvDwbYznYu1ugUPVQXXvvpA3eo9vRbFHGLx8NSJo5ZJHU3ib81rVWChLsBPPUs6pfsbLb6rkrR9LDXhKGGT",
  "key5": "49oqtHQwe3ZamAktYXSAJsW5AEhDDVHsxexycdAPSDSYNT9WuXC2P93euUghM87Dxm1r41asr9r8rrfsvG1kA6Dh",
  "key6": "3NrDeQ4Wb5ErdcwAXDKahBTnhPuATyZeJUntYAzqphSCywaRg8qc13cs1QxrUpsfGty1LZBMm72XR1FbzfcjbYdR",
  "key7": "2axrB24wuAAcdZ1CV6Z6t15kCpNRThzpH88zvHZUbFHV5FCzz5C71WvBjdcSvbUFadBHnsxvD8oQER1PeA1y7wED",
  "key8": "4QnkCT72PNRP7fAcB2146E2TUHnGSVDAmpFVyqopytsT7SuavAcpCh1cTg1JNPxscAhmT7ufiUzwCc7FWPxauQyL",
  "key9": "3ZCsh4B5U82oZAdU1xdNb7cMPQN44bc6zUMSEgaA5CLufKdrVhVSseN7LMhtysp67UjTK5NJN1sG1i2r7mG5Vr3F",
  "key10": "3onuc8z9Ga1Wasqs26LUdwtT9TPJ1jsJkLt6NonsWG8RQagVcf9LHff6HocmudctA7qCQGab3SueyuWze2Eex63R",
  "key11": "2GRmZh6vA24fmfz9HdRDgHmZ9CjBfrnWZEX3wLaxrbjFqzREr6XtfFK2iWdaQmcnnn9DVUAz6EcYkyrgJ5adFqdz",
  "key12": "vszq98m8ptNr4BfUXw5AcdLYgfB3pFqkQ6ZYZveUbG6YwzhM7T1K6HzyvNfyTXBMyV2xREr5YcXghxgcRw6AW74",
  "key13": "5RRAvF7YT31ThBWmHFveiwpK59uUBZRQxZj44nKW5hj8SSQdq9WNysq6cxG4pBX2jSjiERe4DR3Va9odcuyxV2pu",
  "key14": "45KJfAUJRF6iNXb95JYAZzTU4vR17ndYm9c5nLgquMbNDRMnrN7T5ZS1JTgYhMoWyzKWL8MBdhN7AqgFhnjS8jKu",
  "key15": "3wTUKA1U2v63TK9sXkJhqhyGopuqUC4WnZsMesaxGwDtrKZXbc8X9RyUzQXDarB9jzGUytSYA3frtGgbqsnGJFjP",
  "key16": "2CBSzD9P1bu9KWVjQJ6NV9b1UKmsmuwfcmB5BZqSd18XJQRwAPjPhnMtb1HSHAxqfeVBkHLeH4wVrjLGwbYxToG4",
  "key17": "5b96hgpymhyPo696NiiZ9NX2FxQcBoDybQidLTjtEJVqnN1Mp2JHkuNiypDSvSmN7RamjD6HmrQzwtbbwjC8EQNh",
  "key18": "5bkwHULCKH3BEKVs8gEqLYixYMGrnBLnAYhhupS1AdKmyTiBKBUkm5jrjhfZvKPXUMxycpDxpbtGjdiauy5jFYPb",
  "key19": "4TSpJXU6U2n1AAJmbpeeJYBMdL7c7nk57HfUtYFmsd7ogWcpeVV4k2Foowd4jSz7W2zBxXjSTK2LtfZq2Jgkmzkp",
  "key20": "E5ADrCLed7NkLSrsvJdRk9qZvNcmaT9JbNdCTYrDTtZCRn8wYurozhgsJDCvMUtCdA3VF7x2dEV4yeb1RmFy6HV",
  "key21": "A9mknnwD9NQM1BVEKy8hnpqLTnijTKFYuKtWDH3MJTGzysSZvHAXcCnoNngqmkvfytt1amQ2tzSFYtqSVyqNDjb",
  "key22": "2EQqtBNnSkyYVpQjLuqRvV4ZbsWUusfNJrrcGNzrkYjwg7DadreEqiQ2g65yaEnWnR3uJiSqXHcqmNjiwxceiQJc",
  "key23": "2uKVA8grUcRsoP4BePWrfNEFuXbyqqxEF7xKAn3A5aFdJeJHbNixzAafZwHm1Rtpia8oTT4QKuLX24f2A38LvQnJ",
  "key24": "12A8tKxXw7vfaCnKGMCE4c6QkbGjUsFEj6dEaXR84BdzPDBLDCZ3H7nW9Vem2Ka1KLQHKo7LxGDneb6dgE37wAFp",
  "key25": "2voajfKm86snSAqTEbExMe3L1ENdY2cqDUcg7g9Y664iVKgHKjaBxWoynAH3u1mE3m61S9SWRNENXN4hJEzkHbrC",
  "key26": "5uoGjpYzNixAjD3ZqLb1jZrqRuY1XcaZstSyX3g92xJhpkkMxNy8Et39d3vpUoiZiZmMNyirc27ijbvy584gguKT",
  "key27": "4sq7t5J47499ZEAk2W6YXh3TB7jgF9kmqbpiHtoWoeNvSFwcWWTdBCZTmBtv9dWzGGt1CnEyEoTXkN4fd4nJxdWb",
  "key28": "8UdZEMA9f5LBAY6hKhmGPUZvvqfaLq7txQKa8wgVZ2VzoUo8qHVc9y2TxgXwM8mrEqfab6bUbo73AR6JG9REeTr",
  "key29": "5jQqz2hdfEMdiqmdi4LDhCThveriavBNmEbAbrWuiDdwTDXK4REyNYoup7JQXELjc9TbU51sKA1654JCcWUHfDzy",
  "key30": "4UfjVaBXdcaBu8Ew2iait3XVygUyMmqNz2VL45JeKosJNee33AdBza2rLpTDNS6zjpM8KBFFHBuU5hUxZSzfYGjt",
  "key31": "4gLvw1LWGvXywxigcfpDSjuQHAkpwq6zcCTKMeBN888jpj4rx9shskXLWz54UW2H9MdqAapMnqiRXoxLtb6tv4va",
  "key32": "2dEPctwiihhE4QbYfk1pdg7vW5Ne5ok6uD5Ln5xvh25Tb2YjYzEVKtf4CtZMkq6dSgrX8LNtcPu1T4chw68Ruqrn",
  "key33": "52yDpxLP5zRRwv3ufvaV92XkQsu2UVRhQ6kdvixnKSAxxaeF621JkFBMerbMnrzq5pvtPwRAhHLx5qtx74fH899S",
  "key34": "yKcNnbdSzJkZyd1Q31mT5Rkjfeyo8w1pRbnPhs8VSD9Sd3enK1WivkNE4c24KD2vrpFnSWth1dJK5Fw5myL2A9K",
  "key35": "43JTHG3BdkeLaEVZFWasUsKh5fA3UG1xuu2zMC6W89DdnsUnXDknKpJ9PXiTCQnEwiWQxG79sDmpDmheXPnhSbL3",
  "key36": "5Zgq18giJzwo9MuhnqgcDbaRJzMoZpxEcQF3LYHv6BQ2bogKc9SJbWgQwyxf9Ck3N2mhoreHrKo3Zx4sns4V4zQp",
  "key37": "22ekjr322z2mtGkKamRSAD8k2Qh3ch3bpntiBWDGKoDaZA4Af3y49Gc62wbiMAoRaZh6YJnw4FHEnNC1JV56VXLV",
  "key38": "bXv97dy2eRmJPnbizzCpU2NcwgBqo9G8or1yVgSVjbBB22aP3TqVZ2bei6GNtKYNbKy9khnJDtFtHqXNK3BJVEK",
  "key39": "nY6e59QmhST1z8k3ECHJ17S4R5pw22k92ttwrXFYJDm2zDuYArZtQPVWy3EStsNbWwLEkFgLAQZHz87s4Cs6WKq",
  "key40": "yy2QQeQ9bx4Lu9j1ZymEL2ziGfK6bpU9ofxaQMsVGsW669WAmjEKEDAVWcBhzkPYhMNLwwBEyJ9ncVam1AEzkbV",
  "key41": "4oTtgUCmwCmL9DyTvr585wqwFj1ZaiEgXaBiZJvroKyiLwKaj4JHCmsGj7H2QZoyB5m32VsUbRyquX3kNrLQ8BaR",
  "key42": "s2voA2Yk4z2uPwbAQKDQ2grhSeWJ8QSThFrZGyVoqhMW5MyyHVyf3McRA8eFtra6vms2QcDMpPwTpSS3zGJ3iFX",
  "key43": "hrXZCJibGxaioNYqaacqACkygew9kgTjbFXoUMbLyayNnA5kDuK9pcsLoEpXvVjkpmEby16osH4DTPMp1d65sS2",
  "key44": "kQ2NFfa1xnXDSpDidkVqhcYQrvfQPmQuNGaBDR6JNBU7G5QqjCS4GuAV3rb958PUgBiX9BqRTYmFuwS1gFc69Zw",
  "key45": "Zu8waZFvxX8y7VcYuhJ9FRvz4YnKy9G4znzGowib623qBVmgb1UckBUwu7wDGZs81A3P49vX6Wmd8LjfRATgaAi",
  "key46": "zvjFE2pEFy7MxwjVt41joGvYLTKRaMuC8uVnnxg8agi1ekeHx3GTrcj8U7NjMzs5Rq3JrBtPKdykU4PHJrAgHwD"
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
