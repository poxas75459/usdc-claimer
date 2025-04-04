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
    "K8ySJsZW8E8QtQsHXTHJ2oZVhqncmgmAMpMjj2WK7ru3hCe4oaooXD4xVUs9cfVagTDpb7KGeeBud61UjGDYouM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bQqzjB4wenjztfQtrL1591MGq7DFrP5sKqyvpHiknHN4T839EsiNYEe2GEmguR9qQTcLmRpXNTW1F9AoWRCiqrz",
  "key1": "1qwvvYcmz2MmV5fMLgF2Pvyos7ZUc1TQjH42GzJKh4CBpWEmHzCn2YGhKUj6pUPGe7NzR7PnLPBqhJC1JGB374N",
  "key2": "N4bjQjKxt64RrunsqYC9fzoUSr9hZwAuWhSXiWLAucu85QfhhCHXNXEMaVa4nN7usw4meMuQr4aQ1hBmQMUvVhA",
  "key3": "7yX1eLrxSU8HnrLp6zPCSpYo2ih296XwFfuqUaDQAS1BMLisMPJLK1WbCpNCFmeqPpYAnNFFVGZE8uSBbTDtZAC",
  "key4": "3J2KskPpgf3DvDF9gC2mmMi4Ds7UAR19nMS283M3v4NWYbdN4t8xVdP1tqCAAwrjEumEzTF7ejvZ9iWpTVC5aiK4",
  "key5": "21shFivHfN3WTenG5UgrqXna9YT1rnCwrykqDMwKHbxS1J3iCz9fmQrmPLUH8vsJK5iYBsa1MjAL78cbPStuLCmX",
  "key6": "52RQyN8Dw1bjtS1C9ACsGS8ezM5UF6VhkmhLDimgmeeXEgACBgEFuuoF472SuePQ226w9UM23iWHMvSjAU3bUxvS",
  "key7": "7jiQdrcNEYzwtampA2nEz882U9J8DknTpt3pLrFbg3icG3SfjomDDCmefiYDbwn5iHVHiCmKw2CXdzUS3V1b1uC",
  "key8": "5gYDkQuH5R4hvQY7Q9biRmD4w4rAWjnLsqwbrgTaGNeFPb2to8GygYFKYVjfbPbXhMpvkUgANRgEMxmkpU6qojQp",
  "key9": "4rC1jB6iVz5cg3P8R9reWCZcPvitkq2HXcjUcJUCfvvtyDC2dnpxVx17PkwSXFxh9bUbokvdWbeUNqL8F3czY2Z7",
  "key10": "2H7QmfXzprNmm9VQwJFqYEGrwiQdUj4ahEWGkBhq7pdSQQfRxhGTCdqpt9kLjDJ7PGpRjgsiV2pkJoiJNtf5PZZb",
  "key11": "5Dee7eKHRbUQtp22YmbACrfpka5yE4GS2Jwk4WyzCejuTjGB7Zd1cNQHBkeebr94fGYn5qE7eqAySppavEt7jC29",
  "key12": "MQyM4LmYcxWKLUq66wQWQXw84rwuRmJcfEmjtmf8ujns6BuQEpCYWySMd42ZS5n6LtK629aZ6TtjnquGFBLKszb",
  "key13": "5t4SYwVTRCuJXsUwcpJvpp3vkZsgWbEVPpZsKBGunVQyD2hG7mSj6r7qvwdZUNnADBBbLCm7tzBeyyopXmqameML",
  "key14": "4T37zsuxBVZp2MyPSokF1bWRf147DFTyUUJGKvya1eGePsCFtcEavQpu7nCzhx3hKL2FTtSnZsMCyjbNa3WLhR94",
  "key15": "3wz9r3RxL38yuX5msdagFnQzuzPUpL9e7ZYqGiuywiWKcTg3gEE7DPJqZ6PMcyMpTohoaxV48B2E4pjNZeT6BaeP",
  "key16": "3bJs5RW5r2LFP9jKtKWJdqvSea4RSCx3gCYJ1ndRRWBpmDmoATXNbYXa9NYsUJtnVsv5w1gdowkTNqMbEaj9H2gN",
  "key17": "2tM2gn7V2a6zWDGctnVC352bsZGXR82Qb4aDZEMqLXJTSJsz4pvhHfqYS2J1KiuomZcD7Cm38RFXyijF9n9Xo4st",
  "key18": "3J5rgP1PaDfE14Ah6kKGAmULaSGu5Gun52Nhfi2ykbo9CkEY29EQfLbV3HeG4TdsUjcTvjuEQ6WXeZ2EsP6ddYRA",
  "key19": "3riKoJumewpZkNzPbnvsjQRSVrQxJdYZ31D3x8SBYPtV6oh2CPCxJKgXy86LkJ3rpubRP69k4Qs4VKzjkiLaK3fA",
  "key20": "2wRyQB7UiYVvVxccR9qFU4VwSnAVbbkRe74VL9YAL7XYehaBpjKYLggzermM5QVmKXCoQxrzYN3e2odgHd66gnfj",
  "key21": "3pnzGB7eR2gQEFxYuunLkxQrXX3dZDwLxiQvxKpX8N1eT1bvB5aRHbEmFxyVF8JNYcGDqvYBJ3JFmB1oezwzdNVV",
  "key22": "KkCJrmG9XS2LzhchT98m5AxFaA7TMaxManBkukau2gFMi6FwA8jcYiquf2bpNem4vNg3tD7RR6WdJvzU6EfCZ4T",
  "key23": "X8aQUUrNskki7p5D71MfmgUGBV9C1AzW5ijiEbYCRLGEbZ9uYrfsdPW2JcT2EtsZ5XKRtfoC22HmHWQm8S4yFf2",
  "key24": "uS4V87FTmvhobowe2awnCUqRY1C3MggMNqebEmD75STcAmhrgq7CuD7aLRDunnZMYpa99DyUL8re6Ej6AJg9H3k",
  "key25": "3QTaXr1otDP5YqvQWBkKmX456r6ZtftF7CQqAcmf4J2eHM4KfL3eZs1GANr73tqSgR2whpJfZQ64jqXHkEQpzsBx",
  "key26": "5n4BQQjRxCgGeLTUFXU2v7F8VkiwwHLMbbnv7zopMMH9Apr6bE2nNVrdq4G2BoRUaWmjbCv8M53msdrXPqEmBfqF",
  "key27": "FjhgSNbTvYzZLVmdeVuLrVwLQvHZX9btB8dor7eLBTy33Qhi4fmVDT6rvDHuYehUDqWQynNL9Wf3f9y475yt7xd",
  "key28": "vnNQ7MxPSDjnw6fBTsN4q6pBgkNBFaWjEQcKDA1ZuWJLcBskGCHkb8rTBgXwsiQG1KMSaXCd34Zw8R6WcWx2tZm",
  "key29": "3ahVE3n9Je8KiZbg2SPBbeCdFtyJcN5VWe26bcJiPubpoiMraWbkwdVmWWTRjtnLPRYuTaUoUHGvB5Xm5hPXazrJ",
  "key30": "2azNvP3T29iX82WwvbWZCaY1YwjreQHEkSRhXanSLRYKBTfWRf6YbKPJvbyZndyEGxRCNpvJS51ZsZZV2XYRkxhC",
  "key31": "66fqGnnGQUGhhMpLVs3NCCL7CYnC5KbKUjVdhsEK6Sbq3PL7fVGXJiZ8rtayPFw7HbbDRheB6cL6Br6LA4Efwyhb",
  "key32": "mrbMvRENwr8gyW6QgsMPAGFp6cvxD8HMCeFvFetn6Dm2U74oYG8SBsatBcj6EnkN2v1hxcCBPor8EQZ8HZ2iudW",
  "key33": "5SYSuPeMdtQkFA5Bdh2q4FdBKgWmo28TJNHp498L8ZmBNDkWfkBPug2X36mtwek9wcq3PNiQuhvDECWjXXXVHvYU",
  "key34": "3GczJBL5GiSt4CC4FpPuSTbaQcxjZGC3okwBqUpkcJL4gGxv56p6phVUAMWq2LqUcH3wZaZu7iU7TmRxDWgmeWq2",
  "key35": "259JmzqqYLax3UYvQuGeRkKrr8kTyri7Ym4Q8BK4kUqQNGHzJV6GziY1HP9s6xaS9WVAVXApTYVe5MajS2BHpLLw",
  "key36": "25MHHief3oJHGGNpS7N2XnQKU4VFc4eVc4vtd34RcjHxakJNH5adiQHSXgRNkMYvuQGigtgYVPxmJgG3tfXzLXdc",
  "key37": "3YMeGMcnN1MeTigXJTp7ST1AncMVtVdnmj6cf7GSQiMUoanrsMpQkhHimUeQp4YVyCp95wsXvQ6576XMk7w7ruJW",
  "key38": "7Dqzq7HEyZcsptcUjp7o65rrEUNdEANQJyRa6hidM7sXxkcSarPUtiUmuxcT6sKoz2yf2jAQyFqNxC8R7Wtazih",
  "key39": "4mx4bDytuCarkvg26CLTEMYeJrRQCK3Fu9XYaN8muMyc4u7R3jvLJdc8ZGyVDWtdULcbXjt7asVV5ywMhMHnfTw3",
  "key40": "CuFgTCbvQj5Ard6yz16takMTweDbEwbbDgXQkrV3eiQPX9jZ6nA7gycEUgaoSEQUnPt61j5U3b8f1PKRKW7Ya6c",
  "key41": "2xgmwZujj654cVCWN1iuFWutXHgRvYy8LeBnutg8M4qYDXWuum6fNjFxEsLtaHJ8vbZ5Aa3i6NtA1cpN1WLQtFSd",
  "key42": "4zpQyXscBeBvTvK9PS4tKQb9GLmRdQ2MXKEU8GfMVPZVUiNbt9bx14nW2ARkPv6tkQZvHF1tQsVa4y2ofbbZNWzv"
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
