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
    "2mNVYz82YwwgcLy4xjzw46jqijUqa7tvCo2ZF1t5uRoyeKRpHyBowL1LpPPGv7soQnSE1g4LFbw8MQYMhgkGGaQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdXfRb2q75vTYynHYQ1bmUhYMJr2LTUtzip94zsjFU1soYSiREW3xiXWr1kXz5NBu878ADtWexsYJgVNRBaohjb",
  "key1": "3EbAomRR7VQ8si1B9FXXPUdp91iaMZDdXee9kgJwYfaquhMWAvvXt2oFzPYNEZyxgQrKr3KmLe4fQv1fJJaPK8t2",
  "key2": "RM3KLxJ3EBRN1N77Q3YGzvoaFv54udgwMJKuYbTpwbzvuUEWUPrGaUa6PK3oBWojKtRBthqq2qaV8BTPuk8XSuU",
  "key3": "3CBF7PaMaAZ4dFt2ABxsdUFGiMJHMjmSr11nsZTGUbm6MPtjg1EpYhvb4ZHJRo1keySRK1NzfLmXFhuX5HNNNZ41",
  "key4": "3Z9Jdq7kSkY7fE4rLRPsFCbGEgBWkF9v7CTWXRBc1ihyqxRP9CKpSbSm1mAKsZ7J6e5y8nesk3aXWjo7i18qc8gy",
  "key5": "4iLwfGwJX3ycxbyLE5cf8S8UrKWRN4ysfeywhG5va7XteDA8mz1vcSNieMqEMyMZBzYpww81jYTxuT1ZuWtN27N6",
  "key6": "61xh9SvgfCupsGmYAy5sQNK5T4DCNcPgBeQ52kqEKiCwotLjNbyFVNUfbGG7wBp4eed1QTQJuw3kDPuJaTGynNt1",
  "key7": "5xQnTXuTFBgfPUu3diYdAUp4ENveSiJQYwkGr7W3WJ6UWXAPmgoBLRme5hkowVnZovFfxi43spzG9yvW8gDkuT8Q",
  "key8": "26VstHTqyvCp7RYWq3DFcw5usmivsjPa5wjcAPWguVpsK21ibuyZxMhhQsquyWR958jkd8CAURPmcEEtJjH1aLM2",
  "key9": "2XqbwU1t22SvwkMZX51C5Q8gQ7msuvffkkTXk4Ark54f1J9WLpuanZF1WxqQZEcEHjECLEpGLmK2ev6PVmquzXn1",
  "key10": "FuvWA29RrSuNJ4Y8rUy1giSVxMSRMB4b2ySYQ1tHZynopLYi1LRNqqkG7QVniS8om4F9qv7kUX9gQdAxmQ8bC5R",
  "key11": "3YwJ7sHJTd1qMUUzYgL5daaP4bFGssJ4V6ioxwGVQEz8G9gWF2sKYMKLb7wR9uMmAQdzNCo8qb8cjAMMb4wFmvS",
  "key12": "4evvnHvezgAcACkWoVC1cZQgQziE46kiz7stHXxC8aHNaUtasYT4u87GmybynZYVvKgjmrCUjnbDAw5tbbrpSbDU",
  "key13": "xBcc9y2QzPawxXiooqgEdG6BmXK1gkikuBwLWdjGcGM5tkWtUkZKZowdV4j88YzNkqYe6LKDKDkPwAHCkENCK5a",
  "key14": "6vvgsue4GTnBAgttCNf7qwaKBSAK5WRw9Zc8k6NaPqPr7G8nwSmAvSozCezD84gCNA44T1U7mq6B3jUQguaHTwB",
  "key15": "4j3He6WGdtgy51sjaE6ATbH9SV7xkV8a9PybwL8raxncmaFZyY778WRW7MQ9v15HWi6FeuY35TmJqbREmCxc4Aqw",
  "key16": "5zai1BnZHbNbWmxuzCKgmv8i6BiJXEckzomvoPe55zFHTnjANSU66b3VztgoWZHta3BQGgTVrLVx1dYHNT5yeYn",
  "key17": "4mr38X6tSE3NnbJfjWe3232VPrxT1uEhSKRMqVduM1K8NrV7QJQpF7qe3WVXidFcoq1i4XmZAagS1z861h8wXEe8",
  "key18": "4zq62Cc8Qj559XemNNHsSFQAvwiDcGtup7wZfyb91NSo8a6eC62hEyXx69Wre6aTCfiTcuNLw7Jm178EBpVURJ48",
  "key19": "4CJVTSx1KAahHxqEsEaUz6aHtq86TFzBvCZ9WgadtwoHfApez2Ji3skBqbZesUtU1rDxRtZde2UKrMRhhEicFYqC",
  "key20": "49FKVehhLJ69Xpof14ytWXjsDqaNSX6uXQdevhY2ZiGV4AcjAeKVQLpDxbhvW6HgMgrseJypXYQU9VkJi7YpNRdW",
  "key21": "htfQuNTMFumvjenUaheqGHZhmgPQJKZvC6LTisJas8BpwkFXwVNFcj7gnYuLcaiVEohCBt85L6EDfcgTcAy45mE",
  "key22": "XK95pLSqEYJTPRZ4rUMi1Yr11okX7hVUJoWcnSa643X5uZazqzSKv9fZ1fRkGLVqA4Yur6YxcJKL1WpQkt8eSZM",
  "key23": "NC3yTPnQMee19tHnU63G6Nuq8gpnEbxsCgiRsQhuxKLmGzxFUUToN6vt75FGd8rKrPzvK7s64cnHvqzVmkC25TE",
  "key24": "3E57WaFiFHjC55asG917bXA1QfpFA7B8NsmoGFgiviRjR48x9eo9uCZJanYkisASGr6u4n3vxUxLzeHmBzGj4oW7",
  "key25": "64u4tMc8wwUPXmjsbyHvqCgi36w9oVmtzat35e6rt9uyn3wmvqnZmCWXNQCdQwC7UxNMAe2a4nFcCcgXfkQnYw5F",
  "key26": "2LXfQKD69EKzFADsCBchTddUWJEkbByWtBJMxa6CiKhZDjgzDR2xoTCc761ovUnhtEQY4GtAVkQuJ9AsxhymtbUV",
  "key27": "3uQzd9BcpmXjLg9hjd3BLhXHRHXTXYUBXo1HTsn1m8xQC29tpyabF2HWiphcpZHvGe5Rx9PvPzY1YrzV8ULuFG4B",
  "key28": "4GqLHasYoknoSpRY1ppB3eaU55dUy1ZaWqBmoPCj15KZrWukGsUBXmpXdFbZ9DtB6LFc1d97kwhpJRZ7vgnEqWLo",
  "key29": "4ewkwBvQyesjpF6AV7j8cc9gmLx5DNbTCcNoCc1XCuSr3sMKpB8HMULWJpS3u5hrPsb19jRwyKRouJGjELVnqMoD",
  "key30": "5b1wtV7UmrHGK1avkm1d46nA8XxgkXupsGzCmvhKVqhH1bva8jq52SpSyJxkqjng8m1X57mEBeFGRWGtXTtyZc4w",
  "key31": "4cVu79uB7NU8Pdcc9dFYxisSzkr4kkKbjUZJidbiKHiztzLo2gR8Jp5vcEvaWUAjNbnTJps3Wx8jAFmcbjxEH3xx",
  "key32": "25GymKWWAXh2ibhhm5sHES3FmxFrnjzp7b697ZKRY9YL4wLUmbNwnHkNaRKkmrZ6wHitpTUeK1B5bs2T1pJZSbr2",
  "key33": "55mxQRuRoktvoXoQwt2JG21efiY7Qk9ZQ3QoS9T6MZwbcU1dYVSyvx2HxaiJAoz3cparm23N7PWqDBsQmF6uofrY",
  "key34": "2wtJFTQ2UxZEsFDeyXzNamaPtzcJGM5TH74ArGR6krLVo733V8uAvxSNWELMPhXL7XuupfuNKDTALw8EvAd68k4G",
  "key35": "3kVTG4tx1GygX9tNdK9wYtHnada7apYgAPmw932owMrkMcDoySEE5DE9vcr6uwMhi7xJGcMaUkGZLJBBzA5TexLt",
  "key36": "38kAvPurpmsz2sDNQK8Q6m8EazSa1RZzHm1ANyqZUj9UYJR1Mb5Zei3KeGHGg9XkYzzF8s4xHZE6Ed7vhPsGYPn8",
  "key37": "bMKYcZhpUQ77DwdJ61cbssJTobeyxjNoks39Xr7RwDSkCWeD7BYwbmLtg8s2NouMuB39H6dfU9TMSH6sJUU6nhn",
  "key38": "GERWPd1mBfkcKH4iH4yp4TgXQqKGCtTrqfAuGiabECXZdh9Ks2jPCWrUiUoepaywF9RYDN4oS8ZsF1cxdr9g6JZ"
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
