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
    "2ZRWZ2gULSS628vkg7Cuq5YtCc7XPp8ZVZCNCMY9PwXpGPeNJmw6mon8SwDkFZzQg1WWvpovVEZj7mbgSy1ghoCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGKfusKG6JU1Mp3YTPNE2yrKTVqmteyLoxwXuU4hRBRLB5cXBB3y9cvyYgtN5zJwMioPChjnzK2N4e3TPtSQrtL",
  "key1": "473y9gXs1Wp3ZL1E8iCrrhX9GaJcr2eCKYiVg5oUrk19cfJqewqsV1H94ho2wFgMZhkTBJadRkHF27W6CsRsgqJ9",
  "key2": "5vMEViRT7Dns3xHKtSu4Yb4aMpB1ZRhKBEERjCNcPr43iBusUDkPRMkhWUekDPqDboqwoW56ScMyHhifjodeNCjn",
  "key3": "2MWVMJwE75N6oWoGS86AQXhq52MJh7vS2ePNgEZXBoa1QpXvzBaF5iiYAQNKYvENTt5cmWCMmykjyY4BV5USChB7",
  "key4": "5AgEmgsmjZbZWsNWy274n7PPXCNrenz6ibir17TjazvC4j1fVmeKAQ7fYvu54UZUvUNWf4StWXQdGdsZxoKdJmfv",
  "key5": "NcBNmPLVgjR6vPkWisR6pus9NQ5WgXbeDg48F12dHHZC6KE4y5xFSSp6QVv7JvF1qmWMvvhq8XBCBow4hPsqt5i",
  "key6": "4xtpSmYvLot2TezkNVxR5spb1KKmctw1SRWZaXNxM9WE2NX9BUWT9722PpfiWWPDSFjnqwHv7X6r7YBQAbsywboV",
  "key7": "2g1zHbyohzb4tetCz4Bt6nReGxfjrfp1CgSTP2xFUt9PVGJ8be9M24P4pkYL1zSP6Dkyy4C75Wpnm1yXBvGZfXDb",
  "key8": "2gHxccEQMHvm3X2kvmEK1uadBhyZc92J9VyXHPdy81EBWkvnNQXZqCAFUDMcVMgRJHs4oQEptnKDjc2dQn21FdS6",
  "key9": "szmejfNdiWDzmaJut1cnM5FMD17AtXQgNPTCyiKv85vUTNtGJgqbfy1ZWFiUyxDo4Yo1K3kfF8DWpXWRauEFLmu",
  "key10": "NdrSU7qjbX9M5M4pAC2GY7vYvh14tahstFkyFvBMAu1JdWrJYWT8ARVeQby1iGGdGYmsaKBG42koX78v3t1TKAf",
  "key11": "4iF8J3u9JvLUVWWA3eB7uHHVy32K457XAr6vXJNnwE4UJyiRmJqyWKojECyDYuZJcaPo9GVmn1YRwx6dKjq2g2i2",
  "key12": "h7ML4Ea6kWT7SoRZvUSBn6XzrMefmDmVmPbjnypiXA3sdxn7RtffF1EQas12kG1JwRgPhUrnjnz8m9xSEt9fDMF",
  "key13": "393Tn4Da84TYcRUZLx9p88ErKNCVR5jfCH9kQXhPMLwZTj6Kwi9y74FMAeyoAWUEn7hSSXWrXXFpqYXdqmFbMjcb",
  "key14": "65b9tRcWEL7vJdu6uEPyarEKBwV3trygAL41WsC5rtxTw18gBTv8BVzNU9VTtkcXUEJrGXxKpk9zWoVcs9zN7MDh",
  "key15": "3QatQLyFKPWA3QDnpwMMcZp9F9zCMFH95cYEr64LpAQHQvkKznCBvQpvQfpPSbbouhRrVPbnii6UYNea7kDKcMM1",
  "key16": "43nXTw7dxpfzJscap64iaevvkCENen1ErXKwmXmGaeruN2QVtMZJPZDwtAMDfbMrvvqSf8vwtvFZRcDWpAdEqMGv",
  "key17": "3WGd2VsKxG1SaFutCXbtErzUWnUmAeYTqpjJLuBixbE5VnVcrsAaUYRshYBsu5BqSyxFW3yf3aVuH2tu9gXK8U1P",
  "key18": "HDFvXTRByahoodGYkoeqZzur7aHuNSvcNANqYtwnQphVHGFX86tyvSuou9GPPBssp6TtdP9Q9WPrvQ1iocHwnaR",
  "key19": "4JFfhEbAY4SbgJ6rFBQkh2fzT3VPCD8gH6sceyG8DdjEwSyJPV9NFQs7AT6z4NiRMw5Bd8YiPZz7nsNamThdMF4R",
  "key20": "5NqRSbtKj1qPjRFdMwhJf8vqMvSaX8XNmhKCDLXDvSsymC3DZubPJhzEGRHGqxUXaTJrDx5X4Bs9QcTH5nSD9L3z",
  "key21": "3KyTt3xPo9oLLgEhi2zvjmkfS2okt3tNzKqfJsQaDKLq3vzrYViVKhANogGbz4HahkKJRro6x4sHGuYaGwhWprYw",
  "key22": "4edTbydHWkCDmVqsAwUtjcPhsZfydPc7PMxdxED6cy98NjwYq2oVppg7BM5WVuP7RnZ7GVsFbbvnSDQiLmMCJCkt",
  "key23": "3Ez1KPEYDoft26Gws7LmFffygdoSqZvpHwPnm4cea5SXmdQAEzNiPJAUXVkZD8qSXfhVyonQaGnGdEhF9KRt5bN1",
  "key24": "4Zh7UT3CpiuXvtExcvdwdoLRc54j65BZRLap9LyFJpm6uGAZwdsAeU8wNMERMPdffmCQyVmqeNTP3TALSMYWXEVq",
  "key25": "EFLU7WijdgufYjuNa3XC3nX2BAwE9UvpGRjnMBqwWtpYSwoEVc5GWWhAAFh2X9CkKXFbhQcBRcuy1UYqbRbBU3Y",
  "key26": "41vo19e3Rfr7v4teNu1sRHTwTjfnN573hRmihVj2dY7J9cz3aKimy5dzHdjr3zgKjRivpnhTo23dJousMDXPTnt1",
  "key27": "TKEtr6aF1ynnUyogs7dHRgwBDdaPx86ZiEj9hC5Z4PuTcePRhEc7euNsYJgxdcFevqhL95ofzUytuXarFwSAQYa",
  "key28": "yPEqh39Ms3KxsEsxQxPxKUkErWukxBGpu4xrsQy5jRwfVvFzMxxN6Uju9EGs8fAoCscwELksopmWmcsbV97CHgF",
  "key29": "4uZ1GwiLe4LDUKgsydz9C6kX1QxpVZCcMXDqtEMYr8vyqfNetb5HUVjxkHACkijNE9emQfa8qDUJpRNwzjYqdvS2",
  "key30": "3qkDp6N715azefLPDCVwRuwbbtnvFN2HSzqbfjNAhXmfWoWM7CYR4rCdKKSCNYYqhzxSQK1LYmr9wzWNPJqzMgAr",
  "key31": "3ZnLENPz5A2WCG8UmHLMsXvcKABjgX4oaLDabZMmCcXMF8K8MuWexj5uN2gHEYNCzRTcaPbkzJ6AD2fiGQCo3Mun",
  "key32": "2kBat6cQu38T636sVZMh1v2b9w7tckiXD4mue1yobw3wSfifRiLxCibCeb74EgMCzRYGGi36Vr2KMF71bfrqcyF7",
  "key33": "39qcrcwcvMTrHy5xZ8ZCW81xHVp8CQGBMg5iwuQu4FeNrkhu8u6yrmKkVUFyxWDZttKiowaK74cfaszEwNxp6Fq8",
  "key34": "RZ3XnbRXZJr6BPcLVgw7zTogwf6wNJaZjNWsCtvqdJVFkUEcqmHDGg5jUSEZYAbsbKoxiKCZXStTVHSoqe7H1Gu",
  "key35": "2ntRRnAmnyDMx5Uus75isDKqaASXNem7kNB7pS3rAsZtGYKHgiwvnW6fgARzUBvPJzkUTMDVq3paiv5cX57JYVQw",
  "key36": "2875FdYo6NGBxRVXP1bfhwX9ffq4321giSPZTwWEWnnCRR2sLnmCNzMSTKiyh983ZFdFz4riAdhHTivq7fY5HTe4",
  "key37": "2XK5gHjWJTLYs9UdBfeE3uRbg3hj6jh2GAjMNS2dYVHouoqi24hHxkQSeeH518P3PszjnhkoCGq4TWDnamyU8oW4",
  "key38": "2zCxWisgeuNTuaVXnYSbqrKEpQzxwHqBTVK1SCMdi1EdeSi83sEfDgHzbutvp26JDoV6LDwAjGCvbBm6NhDXHefB",
  "key39": "2RzPTitkhMr78Rr1aaMStKZAeQLv9AhSccDMcV7nRJPBAAYZWtzTVij6gwZ3pJAxSamfHYFM5gVdDPJxZqkNLkM4",
  "key40": "5BXdk4neNEF7KKGos5LK1enhYnna7TZC3AhpcuFspZwhWRxko6ieKMhS5MF2Z2ncw1rv3HwfEeAy1pqYtk6R78Sv",
  "key41": "oH7d6v6KG1idp58rSPKHJ56VyQpU1Sde56SHBHtzT7GGLrjv2Fn5SbDU32KfgTFp7SKhKarSDw2tCs7ikzKtuc1",
  "key42": "4BypiqEohL8JXFiby1SXxQTaEebDANWdYCSHGdyQGVY6nxEFXe2qnwcRouPbs8jstNb99jLoSWiMmdEAtGUotpcL",
  "key43": "2YUVU9Zz7oPG2JTNV5x3PekqhNaPdSwz9f8FrWQvM5Kxgr5nFAEwouSh3iNpzrJ6PrHoknZdrR4km4AHwiugxNCe",
  "key44": "24y83wFoK8p3WASBQBNLDox9UZRkesZQDCoiYndhuf1gt291dG2r5QutWBmw1hknA56GRW3iXHpvZcqBGgiCGKzQ",
  "key45": "5HyuY5Qz6Jaz64e5GhnjHYhC1CJdCUcx6aMT8Dz5gb9dqXuBf1qYYsg81gD1PxuJgyn78JQtiwahtyRJzo5v1cYN",
  "key46": "v6ewssuaofxBDCTY5JrsBqUkBDyashAxWESD2bchwq9HTgVzazHjoJGYUVih7mk2AySmdB3DfhdXK2quHsW6q54",
  "key47": "NF4TyS55oQYrjfssBndL4mj4yQT7FUY41mGMVRkHXm6i3EFDuMmmcirWKgLRFyP4gz4svTJSbYFdWUubehVFKwW",
  "key48": "VnaVWMQbiZJj57LEByQGEiMQCjx8dHPcZ3cZLUn5JexgdoCghGqqH5hAty2zXGHBLnPynCLKmrE16LzZHws1Lwu",
  "key49": "3sN6XRwwbgWN8XDCK4QGWTfQm5v9CEUVdjrJSHEmbdbjyq58AqHGfTNwcTakEmrwREAiEUjJHPeRRoFdCJvtqcEU"
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
