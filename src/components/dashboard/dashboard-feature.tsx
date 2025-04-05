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
    "iUV1G9sZLME8ao5NRmK9HMb7R5BVVjggxzF6kBGi5yQxpM5t2oiDuVd38fdcrUE71Hk4Tipm5n4jBwmoQCB4A1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSde6MwyKEenaMaQgVwLwaL9vNtg6E7qQ7pDfWLW4d66C9KJvcbibd5BP5R86uKwGyAPM9JeV5CJ4Tb7oLQQ6AV",
  "key1": "9L5BHYACAPuegaiFZ7oWWqVBUPkPj5JKQisE1nFBqZNpAnTNNtdNUrJti1KZB1pCxLcW14fpSkLUjisjnMC2iMZ",
  "key2": "55bHcidmeTaqvbE7RgQnW3Q6fR5KWzGb2QYfMkGJufm5TqmPqexta2116s2rBefq2dynbR1qp1afdPBc8yfb7Y1b",
  "key3": "3hUUdEAEqr3GkbJYphcMsmxduLFD82KnKiqvWdhCUGZCmyHdy7k61XXXHRo5QVV2xCnGGvYWnc5y5hSChquVaFEA",
  "key4": "ZkfX3v1QN2XYebonPUmeLAzyRzg4t71VoLZysjxcHwUEEkJnDmd5WaMqfkRm3yUK3XtFDdXhsSiwvdZ4JWNbZ2Q",
  "key5": "4abWqeXwU8zVrxCTGvo14KNt8hVoNBYLkrKf6C4UFXfqpFkrptcwRZkvhbY53GNfVdvXvDoaZwvqdQJWw7F5rZJM",
  "key6": "2X53ZSnt96vbysWdrjrDgY4cimwCxPHsL6z7kQYzrweqdCoG9avditfFBYci7xi6zE9mw6Xe2KESjNQwy3tAwzC9",
  "key7": "5PvCefmxUf5C4RxPfhuk9RYBE5mDauT7CxwcMhcGsFWHo8H2EDLHQQffzgswXSttimBYYfpvbrZwMEZWejdDFTew",
  "key8": "3Xc6h4WoDqUkPCWvZ9M3xX8Hs5nqscbEcpS7fPDHY8yjnUQ6yrqxth6ioMZrUsdAciiQEmMpkFS8VKHTdvQPecjV",
  "key9": "2EBfEUzvQUWZfGK5xQC9xT7xQxKYwaeieCxHHu3JXXchsVDJYpEcwDAchzAxVUTGbAcsJSZzgAk1tVBDveC84AYg",
  "key10": "4XzKram8xKoYBcDeajcxUnHWTESh79Q2hhKPPrC9KD7JnxJGv3u9fBhdUdPvygFrer8Tyg1FYBkrQV9HYKPsNm1o",
  "key11": "2j7jHY3Hkq3RNB61CaCy1Mh9w4d88MAvZqxgeeoRa9cuDgbPQC9GRDhAwtXyXz6gBVezdvvatQdhLAp4K929YmXk",
  "key12": "34LmFqXwCPmaBmDeEr3qSnVtkuThtxdS8mFPwxwC9D1rjYtFUBJgJH8dbd2GkmhfsXTX25kU8GNaiNwg2yrECDvS",
  "key13": "h3YJNxiLhUPJcRh1fe4imjw5sk44uey1SXrdL2QghXga3romwHX4EDpY2GBvgEAvKXxJSU9qxZAbgaPaEzMQyWL",
  "key14": "3Ah3XrGCYNX6MD3yCgWxjXuXPgku6AsbXU3bRXhdQ7s6s5oA6MpLkmCQFFhzVPcCVTRySPEH1pFm3Quk799vDycb",
  "key15": "kRoyS1Wm146RGoxhPp2SXud7aYAPQbWwyoTD6gPHn99TpnHXg479uMU2nKvif8wH7799AJcLVSBM6Boy8BZB9aJ",
  "key16": "2kcQQ7GeALxKq2vWWkEFQwYav1ZuGnyVi28qFvCvJWJcRxLf2JzvKX51WMooTd5Pj5vXvYaaACKsrUAdKr3CcTwo",
  "key17": "4NFCoiCnctEbJdgexB4GCi9vnkfuHGhNYR6Hq3qhMygq6duD9HhtURNgoTzzoJ4npc2LQjkYWJnfBPzNKMAMgS1m",
  "key18": "v2JNMHwxjNJTtwjBVd2cjeoZVZdHatBk2GPGYhL4YxR89FMXee9QVDfcxpjMR2KJjoPSnkwduiQBSS6j8SUpRb5",
  "key19": "4ebhRcjLxBTQpm8984o16PqZWZLEvNjTvr6DbUDwPJE99B7fCfNCEyr1Z1X2qNUCjwQdJj2HsLqug6HBaP5h5wxx",
  "key20": "2R2F9xELQbvT5p8XjsBHMtL319tckDQbJ1UeUyZxXXEeq8YHp2xqsFd5BFjmamCZDLkEhTMZ6gyyeN4BQicbmqHR",
  "key21": "3JtpNpPJqw4LbwbzJn1mzpp8FgjLDRRTPdFRz7rHiA6yQDJF37Jbnp2WGcugvzf8FLjjPWx9VdvmGgVjNC8SjQkh",
  "key22": "58G2bJZzn8dBzsZG22dKsuqP8Bg21DKBjmECNPjjupYVaVBwTWXWtkn8KcNbWXazmNfDVvu5tYxsFukHT2mYrNh7",
  "key23": "2fEoV5WdPVE7VP8paq15TKa6iqnkVEdBvUnPsg6SuKcuB6bz6CNz7cRSGSZjw9Akh4zGX6rTx2y5Utb6v2xJN9pi",
  "key24": "5iideTzwiVdz5Ww7zg16i7hXviwnX73TZLv5gzifWqtv3ZcmgESvLvXw1nP1ii1YFSgz1uy5nMSYsE9sDEHYVNQK",
  "key25": "35i6LwXsAvJ7b7JBALMu4T11rH7JGvy2cwhPhLZoJ5gmq2RUTpBmM5kqLdZaqJED7774PnaqCixHmZ1ggvzk8xP6",
  "key26": "2nEaKfrUxT5yeirNE4avHH9WHmMSeM62L6XeG5aRSFGjZecJzbfjoKLwhFSNnk9eHDWSbdQkVaCyREJ2UuK47fT1",
  "key27": "3Wd6hGMnSqjYmbpzuWUiSR4C8E1MzDtRxBjvcerBBMghkrjctYzsz3UhcmTe2dXRX9dNnrN8yZ8LXPUM2kefSUC5",
  "key28": "3RtjBPGp9kniaNYPJwVBxM7Sxg84gtvUsd6gscVwrP89CMaQb63vG9tPMj8NxQbKQGXBWpkf3XcQXVcGfUxztoY2",
  "key29": "3FNPGVJgpHomaKVmMFT7X9yTqFT8aDFbf5Ax6ZjRfEE36YvdWPr86QYGvnhLEiMBijrW75AGcgtySweqv4FU644n",
  "key30": "phEDhSvmMcvFkNw5p216Fw1zYpDRBKxxsEHFf3hjyqvL5aQZjZ5gJKaVX8aEaqAwTAcghLNtQ3CE2duyAGo84rd",
  "key31": "5LLJs3vaGb4oS6QcsoP5eCGWjB4LTKsrCAEK7E48TN5bZwi1bjWHkcfz7JcFC6uKfvGpUfLHNecw9pzzqyAXVQ1o",
  "key32": "2GJYsxAzHhtZjr4nH4VRnb24mHciZR33VguavdBZNtmmKk99PHPm8UypiGCLfdAp8mwk285dnwjALqy3DSf4yvkU",
  "key33": "4vC7NfgH7yKcqoJLVFFaRtD8n6NF4HcMD4P92Ybf4vxc7GQ8EBGPmbM2wjkfrcmyD5NgErcgavcsf5bzdvYkbZ1j",
  "key34": "4gXYpmthwzXR1sNBBcq8Xq3Cmr9PHqNMB2e98mdgrx5tFmnGGFLnN958CQtYpD7xoTg8RDVciercuQLurYZzc1Lc",
  "key35": "4zLhXTVcnh9uoKupSSu2ufkoUQDmmX82PMKhLD7Z2nuZZf6tCKv4y7az6PpSKHKt6kt9mo7eNqeBip8dV6ZWLiMH",
  "key36": "8AvXdj55qxUXwd1eNvKuofEvdM2XXNw6afeWJWdzF91MzF3KFK4fS94ZAknrhxQ7hPnD2cjy6k25pNLV3rDnxn2",
  "key37": "quwwWTQ97MZvDHfNSwydM7AZAREc5yDu7M4Bn3qCpLxXo59qhxh8t3T5iBmRG1JiBDeB4WUvGbRkkpvPFFkfDoN",
  "key38": "2qoC2uijAeB4xGJeLcKZ8xABERwJCVohZdZZXoQ6k3GSzcegLiPYLDpdvPB8WSjPREFMjixEBozcEbFdVpfjpWQ1",
  "key39": "5bqCUVdMetfPi9UE4zugZ59awWTmyFxsAMSHbSBuXpC4zmmoR85dQzretuaXZudFUMNM1ZuENpVnJdxiJPH1sNk",
  "key40": "4DJRDQJWiyFoB8Y8E43DB4AFLuNovFXb1KruhZt4BQBG9MDfTHEsM6zAXvVmau2quExX21jaPJWoPmx9L9cPQsEk",
  "key41": "4hTJYuW45aKmS4dohoXa3cwH4xRLjDQ5kFGjnRtCVXieRTXW3CYxGBJHhEn9y1rb7F2VNd4sj2BkmYGprSAriS3s",
  "key42": "5nVeEf3bPAdbgEpKskH2cZk7eqXaqvkWXpPiuk6qoZ2HptU8kgkLncMm7pH7RT9NkFNwocAuFAuE7qBhdyQYUHcP",
  "key43": "473fBKTHybqLZogegxxzoUUzxmWsCk9hmywuXK2b3swGYcp7b8joGHiSVGJXJQ4TNwnCkDV92bVcU2bfaRFPAd52",
  "key44": "2hYyKFdTZiAKpoZoRQPN6YcbkngZoueWZbRRiqhJGYn6q1oMv9DxCWaE6wy1iYLNpqwd7UxY5MqpxsLJxXXd8wfa",
  "key45": "28JzMQMUfAmzau9Bis4WeS8oKCkmGYaytzrX9zLtaSAEABFB2ZZFUEcJtqA1KHt6T4KHSxDvm7xihBK7GnhG6LBo",
  "key46": "1GafpfebtuUNoiPCPj5zjRfMDBszMkkbGkMaEzW33oPC2JP3zHe7RQpgSbgpDt9kBaegV4cHrQab891AbDn1kZG",
  "key47": "mes2CxLxqHWam8qf7kiPdDFcXpwpwW1FUm4KFfTQkmtVrPFfakHHk91TtwoEYMMhDXrJbu7U2UWHp8wYBNDY1ut",
  "key48": "4RTQ74efvv2dSb3ehmG2y2G4ZoLJq2UHQHHgXEL9aauNw6UmQ4dCWk8ZwHF1ushGMwkDZMiQaWG55cJWyNb3Qyg7",
  "key49": "5VyvQbEak5ef87uAvmFkWbfA1fxZeK9ksUKLCy9W6LAg9bsWv2TvHpMHvRxfoBMcte2AceovVuGEeU2Cz3eQnJwk"
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
