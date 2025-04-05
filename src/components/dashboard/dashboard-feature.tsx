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
    "eeRTuWWJBTfw8pHPgA4cJYN9hsVWaipbyWLDqXBvwMEVNJYWX4WyaZ5iz6nvspTq6wJM4BcxCmiWNTCzFg5EG4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxYugXxfw2MtxSoWr4VYpwSTvmawbzoFyzSUv8zSKtdLo5HKL6VUa1Z8e7Lxwz2SaQmKe4LJjRa6nT1HCBGZu2M",
  "key1": "2KTDbavYTxiFQ57rjTqRhvYvwNajbVJiMi7jRA4yQogX7QR6ep2Y7418FeWXtn8No5YmBvsdPYffQXq1RRGEd9XV",
  "key2": "267BvMFXXMzYrVqzN9SWJ3nBHEyPXEdTzZo4ESt8h6Gf1Qn2vt9Fh2PUsckdXF5LeD6JGyDs1eUBvqz4GgkrUM6A",
  "key3": "43rpXpsPBoia95e227mN9NSURyThEzDo54zDEbFDvebJfHakcAbp52AnecNwNgNpMRGrhu1JmJ7S7bsXRN7RGCj1",
  "key4": "35LcDrpEPXL2BEAhASXwFTcj5aso8N2RT6ghb7aGwxYpV4MPN7Y9pJnDXSEB3WYBZ71yRUh5FJPBvZ191rh7mHqn",
  "key5": "48q9kkmTBzBnYixuTbTQKAq5Vspazop813TpqQQJcNfMMF9kHNWDuw3nru7zQPU86HPTyVQp54KQd2Y6uHfbM8ko",
  "key6": "4SWyqK8TZ8dNTY3uwga1cmFi8nXn1K4cbZBGKnV8ySC1UtLCocTGeEjq3eGU7Gns2zBsiGU4yaXZw8ttF1seFteg",
  "key7": "3kwZGwXx86b2w5hrust9FysHnZ4yQzVE5xsuPWM7zAHUQJzhCL7MmBvyPz6mpAA2Nx923ynKTcHzDMkhvcZ1MYer",
  "key8": "37Wkj2YBUD6Lvx9jinsQEaRTggB4LAt1sUG59UcohtxEPDwzzWouGS7A6Mxmnb9hUPm8BZe5pdDXDxF9LFep2dnG",
  "key9": "2iJL2nJWev2ismLbvmSt8hApg19bJhyYm5LTgnjM7tNKLVKHchWdghiVVsPQFrdG2vKCoSd27LqozMB4dDWfBg3Y",
  "key10": "4cp8jWyDFHKwdEUyNj6LE7MUucBzvGt9X2kiVrsR9t7pLkybYZ9K8GaqaTj62CDSJ88A9moCzhvuzkMrk1iZTisy",
  "key11": "2MnmtmFK54fqfVoAsKtWe7ooMHtkvNu47S4ER7mTx9sKKtzaCpQxMqCUY2hvWLogj3PzhVxzPSPSz5hmNzAagax8",
  "key12": "2zyBeUdpAfB2omJPvA3usitYryRWZZLe3t2kP1LDxNr4pAiA4F17bHLcm2XTu4tTJLvSsPVHgbbDA9uTbtE8vhzw",
  "key13": "49DyULm26SZkfH5V7sQuWo2aG5mQyXiAhieXX1foo17F3UtMQ8CqygE4amX41iQvoEsPYEBBmyKZ9CrWnEee3ULw",
  "key14": "3v7hmwvovty43ccemceCRM3BiWSHCEHd8LcpQowKZ5hfM7493LExB3oS64jaRexTzuGHgRWu1rPcQP9A3XFdAEN6",
  "key15": "5dVncwztjsWLzGgkUfFUAUsnwRKqa73Ce8vwf689kqdHdi137QD9NWrrtYrPgfccQZvaQvWH1eNem1LW43ad62wA",
  "key16": "3CwCC5KnMumfGSoAamAhAivF9zGqcNcetP7J249xy8m1PFLM3wsQLJuZ9WPAZWEEBLfgzK29dgZ6R81QU2QLoFFk",
  "key17": "Q8WD3XErSkZGNqUR33bocPrxvwhCKVctB8RYVgTvS2yjTkYc7vCW3Du5CGw9ngACsAH7mi3cQ8Sjf8i8CqVhFoZ",
  "key18": "3ExMVWzU134B9xXhoRm6YMKnZcScUFZaEi1rHVtMiYZhs663S57XR7oiw1EiyEToQzvrNtX78gRTJqz5X6SaecKC",
  "key19": "462hZ14cT1QHvExdnuYiC7joib3JNEAcVrqS3X9WgcHXp1qZrzdvHdXk6hDtGKocWhEX7EzArGJr2AUcfLGrNJoD",
  "key20": "5GKYxXdbwVxopoMFoEWxCpEHzvZN5FYLSYPNEUpwmbohBfNoXtdSqYxmLsBz19dLYtpL2YXbsva3n2Yv7Ra8yknS",
  "key21": "5aTtopT9iYcKpnRfSHrApRj49hFa7GAiQVLoNZ1L1A8XUh4rR34vFbQCrHQLZbtSFWZjS3oHWNSNaALFhqXXAQLH",
  "key22": "4Ck5DLNkRBiPh7dxqCZ9pV2asPXsfCwhWnm4wkqnFNud3Aid6icAayxB764a3tPTRqq19tnWPfhqn4qdZAj7qU1M",
  "key23": "4uAERwvVWRtWKFuS2NkzhfVvmV6ddqXL6Y9ZauBpgiugyhi2Tox1YAZaUw7ePyuoZnh2uWpcQbfoj6GTmLsAKDSy",
  "key24": "8qAtcjYxp6w6zmZpH5kjAqwvVxEoTiYvwz6zbsLkUYrMxDQGcV2ZZQAuNPhvFaqEAL72KoAseo8PHzVkxWJYBL2",
  "key25": "4t51Vk1jpovckLGwnmHUU71ujamBN6B7Zh2GnzLtTH1wgxxce7apDnpXu8nMo6iYzZGTtXUhzmeRT7aivyKmtJAN",
  "key26": "5hHb6NcM3231K8eAGmA5cvt33LvRzJE63PFqhs3aTArxSWBqtiqm5TkXeUGK5aPopC8ukiPAZGRk2q3gTq7p3gxv",
  "key27": "3FfEuuwdqL8ne6VozjriDmHdqLPDkqzrB5E74N9gQvYxmWuaTvdxe1TSVC7LnMbmiGpdBRjheC7weHVtYj8CWoFV",
  "key28": "29sEn94R2v7tQHUGWddYCXHws7EGiShLWcQWiQF3JgA422Nk3yWmhRTxkPp8gaGW4kWZJSKj2RBn49BojtugPXbX",
  "key29": "2KZRqVow3CBMMaUyCvEDRhwstwNNPfMGafHVLMkAaboanW6xemTvmxzAjuVrKQrowCXJjsQUKRMwEaYoJeBh4Zst",
  "key30": "5nrrkarbfLjZaakDQBSmtqydv1zLP8Bm4etNiVWUCkvPXfQYBh86Yt9Zd3VFHu9dJ2AbJXbdYLqKMjtDB4mHXNzF",
  "key31": "64wPYHrgk9rAf8c538d6t8iZq67BBYHi4azgcUENSVQWBwiQodbY6YeoicZ5FWgA5edHNLdGZSJ1pAqxokEVbwSt",
  "key32": "5vsxYdjAqB7zA3nm8XuCRubZU76B8ppaeUxAxHWFvgrbuRU2CMxepoLgidhBg37oGtQHg3ewELjLHGYQSfASW57w",
  "key33": "52f139fiGyKKMkQaxwPxBYEiDxZU7m4hLpPT1vVrX5juVuUmWfrSjCWhRdd9FqcsFZMPYKr8gYmaMs5AYvYPKQuv",
  "key34": "MhETthYB3CQExYoBpvttDqGQjTJLnwdLkJkVKU2ZsXaxkMgMvir7JqsH964iKZ92xkMGUuXaJCQCrNojRSFruhd",
  "key35": "3YmanfVYWzFi4338qw5EsNcxG2Z52EBRCSsvokWcagN3419Cdwgx75PgUMDi8DDXMrepbcEsmqCECNkjQX9PDQju",
  "key36": "suRjpTmbrRcrFCA9LXZD2cLwfmTbRZAEUMhZDpGF5xnuUnPLrZqkYpdw5HgmJHLr7znCVEfW5a4P7aVu4c9byKk",
  "key37": "44tYhFpREgKPExkfq5nEnGkghBtdduJHw1hkA2uhFKDAejBueCgJtFuYM12kZrCmGDQ1fz5Dk6rEG8Z9qbwJWQwr",
  "key38": "haUdD27yX2ieRPdJECpc6zoMmZ5psevWKDCb3pxy8L6GVD4yhNgVtdrLmpZuGK7ywvdKZRE7FgDW4PLmmDMj1ag",
  "key39": "2QnXxJ7DiRV1yNdKVQRPGs93K4ohTZzQBs48CJMevkhF9YhekFFUkPARaws5Fy92sgj4UayQ8hpKJ5FT65qNLZsV",
  "key40": "3tpZcjueQnVkimT2bJRxmV9snStC77DoQCVAoSyLu9omqL65S6Up2Zz1CzAB4NSjKkgo7KGuokTUc2CGnrn4i4Hd",
  "key41": "4iSCYDrREfdeiuj3oBd6H6YxqfwCbMY9xJJS5dUnkhece53TVvHZEqp22NXs4L9tSReb3x17QhUpaoMU7pHnAQAR",
  "key42": "5yupbC6HfWm6JwCTSBroEBAwhsceHTaZoGnQiubnPf7FGrtmaXb3dnmp75tkdpkGHMYpnzNkLpqhdtdnbHAtmiS9",
  "key43": "5JU5zWhmo6VD7Bwq9j2FbF4Fn6kJE3pEoBMfYk7SzWaAd5PPB16yZpP5rr7CK8rhaKqQa5kDLzc4JULTLmX6Wfim",
  "key44": "sunWytyqEA8ueY9ptckLAfbgw7r4PRzKmLAoZWSef9Y8Yp6AuKAbyKBeFHLdDoSQ437KFWqN28DAEQSeNYEjjE3",
  "key45": "4wMDmNriyqdX76NLQRiDqG3FppAHWN6etAmCcnN8G6j3BkN7p8M1SdwSEjVzWyj7BKyugcr76pZjoe8mYbfmPX4R",
  "key46": "47KH1Gk6hHqyGxnUqzXa9MgzriVFya9AiuBYcZtvvJF4cokkHxBU2agv5Mon213xFvYSiS3zbTbWTGAXSAihqWSW",
  "key47": "WCjZYWqvYneMBzmDFptuaSm2NGNMWuDeTMpVqeEXDo5SmWAnJiXcNSwS7Kq45cPLNaBR4USZqE5XcrnPY84fB4R",
  "key48": "5BQHUGJMhAC75Xgd9wTfYQMjL6qHzbRUGsnf9Ri1esjbX4VZn5zrEJMkgD7QQhMxQN8BF4Hfuw2EecfXG9qMo3gf",
  "key49": "2f1E9kXV93oN7qipeKeJkeeAFUJHaw113RtzBgCjz5cx4WKhkHSk9KgCjiHKNuviSZhR5f96HqaijsrvjhJvfEnb"
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
