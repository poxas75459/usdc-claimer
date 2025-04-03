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
    "NkBMFXddUmhEa98RDBJJ8vi6657PwCPPDYDYnhBYQTS7wD4jaRT1WRL1c9u1gs76pB3ojLUxkHDAM7DPphQdQUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbo932U1th3odfoJ6RnQskGWHqoNYUVW1Y9VwgqJRyMagiRJhYCYdV1wBAWR4KAVLoXW5L6gNojQ79T5dcsZHL5",
  "key1": "3UduqDiDo5XztcTq5PGwRmDCtiUyPq8Qrbp4rdsBtVmkEKGCCbANDFLDTenvS2P1ALRHSWGSNjDjhPDPfQ5FPmbK",
  "key2": "FC2ycUa5ZGJfvyp6EyrwXertHBRTFq3V6pFaTqQsFKpWDKME6rsn3tWqbtjaUNiT1Ydt4srHUapKYm5Qb2MazBN",
  "key3": "5bcrCUUinAiE5SihxSpfRvfdcwV2HVMvrvAM31fbWCmeXczu93b34AuuyHjBBawwV9rtG6risPZ4HVFfHAbLLJmE",
  "key4": "4hQ3UJ81HcToK599pvmc6AHsA4zNyQsozu1nUxf9YTepY2LhoSrM8H7g42cEcrAoYRzTiQMBkELK2uYsETCzG27T",
  "key5": "59CAicAzUCbZaCxVS2N3g1X9zGWF168iz3KjapAuefdQd7KBHWY1app5xcPAXknZfd2w2QCcyWwmP3B6DkqVELwM",
  "key6": "23gqmS6YZfKJfpGQiBBrVjr3HvTAoXV8BMRjcncMmvMCW2b9WNLmMZgkp8f6YTwfNv8WvUhMrmqKVB2Pt7wL4Thq",
  "key7": "3DUAvA3LJg45imhowYpRtYXnWh3pZu84hftDQ7XMS6cmBY225YoAipqYGN32YTTFTnVFYuEFZNwJdPQLFNdcx2bX",
  "key8": "56TqWrm7jLBRpSWymDCckYaXRE746pM3qmxussXCon3SRFBzdKSba87k6L9Q3jdQjMAfUsZvbC42RyKUcgq9UpAR",
  "key9": "64pEUn91Gm3FUEDcfsyfor8rHfQN3kmKGXB1SzYezvdbZpQh5yQQwtYtDxBsS3i2SEqwQBeBArV7byvJeVyG1RrN",
  "key10": "25pE9fp6Ppxrh9P47GwToLyPHJzaWascVUam6f2xZZEg8U2X71VYXbmmiCZpT6mrnCz1vGs4FZkh13KgYv5BKNre",
  "key11": "4QVK6WXQP279aaqZUJFr8J9H5hotF4hJTKpYqKjfuSRuQ7YAQcdQ69PaKs2f9ituhqrXMdNcqdNbVcNKdLi6h3eB",
  "key12": "3kzp6GwyqQtixYuRmg1va5XgPCNED8ssD6KCJNTFZJYun7Vkzv6nHTEx2ufL9wTWUNV4VC5CGN1exsQKYBEahUCP",
  "key13": "2p7jz7tx9zqBt1qU9ah2HbfTipgnuVEj2kPwy5ohkLLdZzj1gL47NepFLVEtkXXsXpDeooa6AUx7yiZQ1fdqGybU",
  "key14": "3pPY6wXNZHvQPMTMNVQwkZuM17MZemR6uHD2TYZE2zYaFVp4ZxLrAtNvHAQa8NFWs2momEfgM5UgaM73Dhj7Wk8r",
  "key15": "5Kk87WBRWUpJPrnAq4o17WRvwrHsbK35AVo6g8zohYABU76BJ7QKQrfSkqmKJfKiKCnWStPGg58VEmqiNjACZZDb",
  "key16": "44yrydnMVcw4aMcH9Am94xGiejd4YKdyfLPwFYk8p8mzYVUb75M9ipaHK2soCzoGCfX3uwyzwKr5UC8NKG7VYvLe",
  "key17": "2H5QrkSCe7JZgSy97Yf9U434NJj3fxBQ48KVGYZYdun1rFL1eKdb7CBcPqig8Lk3F3bouXY7DhhWzDbfsd1bvMT2",
  "key18": "3zfM7YKBbM9JNNE2kQkdJWPAoFpZTVFPiJqFEDUDELVe7hdrMTBFm38QjqDKCEGGZLj8VTvgaJsQpuu3V5Gm7gci",
  "key19": "PM3jjjA4CvHhKW6Zj1E4JFQUEnEDks7JmtFr4zRq5yeraasT2ac93yHYEUWhjXnrvaH6tUzN76rn5Ga82Uyzn27",
  "key20": "4dsjVeLqnLhr987JxJ3wUawpJmsueNP3irkH6iTePjmUbLigdK7KgqQokV23PJ6QBCRRH9xusU3i7GpAdAnitaxB",
  "key21": "5EHDhaE2cuux9zHv9fL7mNUu7gJUaLyRBERg933C4DWY5SuJj2Uoc6cb3An5HYr2DMiyxNF632BkmzhiE9jZf6E8",
  "key22": "3Q1mimNcEodbvoeJBgXLGmrUjvGE9vCceAoEV3W6y2P9uZEKRt3eDi5wCpPX45BpHtRKNTGH4wB9eVeg2WpeFcrC",
  "key23": "tjPSmrYsoWRh25PZZfraD4Ajqv3rViidQXJiu5eabxce6yS6BbFabcxhwfUnTuqAjzaXq3ezYBLRPWR31nUhCek",
  "key24": "ec3dSY8opBoX4VeBeBPxPakquvsNAuKy3VwixPtshJMSoR7jJM3CBo8RVbg5ooe2Sa5bLYww9T69gR1CJp4cGRR",
  "key25": "58ERBh4wgzVRHXi3wh2NY6X5qbmkHHcwPfiGTETfr2DHtGsFyzvpAnvEgfPUgTyeAoMuzqo2C5QfDop1LXbWjMfg",
  "key26": "443Eim7nHVrbBgkYT5g4pMLy1Mnd2nTXumnU6R7GsJycbnmEBQV9fA6kaSz6pPh1DpcQtfjVKWQG9WdDDcmzFPZk",
  "key27": "5jMFkzFrEpq4yf7DXQStwumFcdgybN54D4k61U1TRxwSJ4Gf57r7RRiwCc2xhQgrGdBpRyXmJoKe7BpvVgxa7BBt",
  "key28": "3fDrUxnEJSAuCdH1dzDKpkZsvKuNx8KsG9nTQ42MroBQvnw2PiEnDnvbgWLiDsms4FF5SGP8gVHJz6zq9PZUHEHW",
  "key29": "2kPYtUF29i4cmicMDWtVTJxTs9TJYZWro2aZ5JVNm6xkJGJSkz9HM9wUfJWyns3runKxu2MxDcFsb1Gxw4LBEFb6",
  "key30": "wk1jdKKas7j2xr7rqCGWTmPrJsuXgsm3Cv8A98PkJYtTTS8eYKPrKoVQs7dNrjRf9tr4EPbMnqdnsQA5PMeLMkU",
  "key31": "2NPGt4PCA9BQwK9aQ8Xdu5dqZ1ugw1Jyz83vA1B17anpFGvGJmk7aAVFmeEKt7wnXj7ta1Chfxepr9i13mV1yEkw",
  "key32": "7wxKw97wNUckqJ1fVBKzyqqi57HSZrFHpSp9h78aiCtiqaiJnKbDuCmeb4Hihv6gPrHqGE8gMSyj6iKdX9ck6Sk",
  "key33": "4ZSpeCerYNfws99iymGc8Zs7hHTyDvNybgRP6oKweEqfCYkgm9bmk9NEyt2u2Ds2A9MVL5zHqZr4uGVmVvxjGZHP",
  "key34": "pFN7yf4P7ydRmRV3ubhHK3bJPHzCjBemASHQ9bqK8mBA9N9jLGmjcrYz1aeRaLSoxAQ6EYJ7MPWwWd9fUZNXWQV",
  "key35": "4DZMftLAK4h5nBTvFgnuV9k5GBcccNqn7VQzEtbmbQ1pXNV5QqnCCQTZBw2XESvvYRCRf1FKKapXPvi4eyp7P3hV",
  "key36": "3w2qfq2qTik4UMTzPz6kvniFoDu88n4r99dCKnVfu6VEbxHsfTBz3UALPd1s45VNE6vebQNBZ1rpD5jFtJEZzhZ",
  "key37": "7HTcQZGcj1QzDPRVvbxfPPy54KQoT1VCkVU3MpBTiWTFzMQKQaQTUEbe28fvphaVi8qNadCQPNCR4uwLt7Vduna",
  "key38": "3dx1baZns1tti6eXwEJZN3Ukxgjz87BjEZfZhKwF8nA7TEZaUSBMnhcCkmtEXEKq1q21gVeiLhG3bwoXYBUXT4Yt",
  "key39": "3ZkRiyBmEF6keFUCpc7nbnFAZnCdAJqw8R7Me2263fMkgCeFtckH7vZiRCExBqU5dZuJnumB7QGYNeM4gLPUvEbi",
  "key40": "26H1MDUrH6YiiG1aw6FXKKCCw9vFYbV3DkFKkjvxsbiTDS5GrxhHVJEnBBMHnPvWDUBbC643h9ogn7z9wktHsVVH",
  "key41": "rxTBrxjDTiMxUvRtFP8693JNsifqfwvUVbdLFRGobAtYizW8VDTNYTfnV8S5WzZVYND3qFBZ57WDYEBskCYiKiT",
  "key42": "3UDGf3vj9fwG8m1siwDit2jbff523m9JcRRdexoFYNZeTcrfCUPn32oownFimAv89Wb6e9bkWW5YC8Eg7z83ym5s",
  "key43": "5SkEtpW38nbvMrzbNgPN7RWJvrHmgjsyArsGhtdwq2E5X6Q7rtSRAv3pryNL2Wh6CQfYNaXYHpvyF2KrQgkzQBgr",
  "key44": "5e1pw2QgfRmpoNik9TTRUgHvqcmYgY2mNrrWVzLAUyHMT1ySjsyK5Kv5YvNB8ShEhSLm6BVcTir54eNs9Pqe2Cqf",
  "key45": "HJiox8mszaBsFTTkvzDdL4jpS66VckrhvVLLicYDKAdwfgbqik3dMo7dwBydHstvj4Yhvg1buR2H6mMcvQ5yvK7",
  "key46": "2uYNSZhzG2RcQHJ2RzntFeCA57BUWsF48jEBGLR92kkH3VigZja6hC85AszgETrMXZFSr9PVFtJsWz4RSDVy7ukL"
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
