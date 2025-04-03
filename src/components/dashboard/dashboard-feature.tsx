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
    "2kSJcn2PDpFQmEW82zUp76usy2GbE9XXTSqEmosmb1iAPQS96zfJdNVbLHfyzUDmBvmDw4avqDJmkKNvzRKu1uuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PezxBGsApsxeX1wF8s5afPuvNHkcjDEuhTF2QsLwqkpFTTZ8dyDbR6JEorkXfLHZ93TvUbnbSPivjraMtXRSjiB",
  "key1": "4d21Wx7LqffscqjfuwV8RpUw6XeNrLuvye8t8Xb89GhGhuv4ijPrQXGrvhLKtU5P9hdHWdb7J7zzQVNS1qPbhG83",
  "key2": "4zeiNDhV2unCghd7EPUVtCSddSGMiS6UB8aRZvAAF8F2YMjxkXfcyqwgQCKA36XYx5UuXc92Te94mm7FVy33puXr",
  "key3": "61bMNo8qENwmV416959HLAzjfyD8amMtEDCSESGbHBe5y5f4jg8oypLDcFD3Nweq7PgEfHxo66otceoirD2PJdEu",
  "key4": "2bmBpGXAAjCqYVsnPHzKBoceUGJo2UaNrX3mdBiBP9QZ6zPCyNB2d9dVhnNFsjm32qT468EBGj5Stt8NdGhdNhqQ",
  "key5": "5f1aeLf74fj2NfNBP2QHUS6BTuRq7XnhdhsgmE73k9vg2QGzxrq8kkGuMsixPsgkb61HAXQYmmd5oCJ52k24g28N",
  "key6": "5BsF6Fg4s6Ye5YgbY3n7YRRfptdMqizDzDj9nqFFghxjMitskd2jPKiVqMndAuSX5ApT89vtvaLcQzYVRL8udrRT",
  "key7": "5EXaCE1dBQnSjFLwDB71CbQLT94bh6oVrXjKYU1nSmfSHi1VmSH5GErMXkpMrdFod7dWdZGUTA448wHxGAEFhYL5",
  "key8": "2MmfVhpKEF67mnV7Nas94p7F9xNusfgceuJ1emEkTZbQBcT888hHZQAPW8PHVyKMipDKo7Wn78JLfHSf9v7F3UCR",
  "key9": "2iYBQSkaaseAXCKaRaFiQtyjfC7TY1DiQKqU8DDHr6aCNrmD4gzBJ5jQ9M7gVbYCE9AtSafQ1bWtQqL9d3r7T5gb",
  "key10": "7vYoaG133G6BkyLvPipGH65FRsKsPiCnegwbrZf1iz6Vsz2hmRxeH8ynmMZgB2dDbkwbrZwFtSayy2qqJjViQcx",
  "key11": "5f1d9H4KzcxpGx3VDrn1hQEHj7LqG7yuEQqjynkr5qRX1HqBTKcZqUTSdHHYQoZ5xzbFN7eGTSbCYJvsU8e1Xhvg",
  "key12": "27LvwB9rgyKmXaE6mdmQ8pq3r3j7b3DGPybcjGzE126AuCsfiiY8cyZEx2oQA7CU1XoF8UWH1pVZGmio4L2vth7s",
  "key13": "3HnMkYdxTpBcHAxSxvPn2E5Z2xF7TGu1THaoHCY25XEYD2fotdLJmxbwNvGSWA1TiTGiUiQdS7iShPd3NS7uVDRA",
  "key14": "5xXHtgQFWxXd8qV88jabLfN8ptgnRtkwRCYiyonomudV4AHShBEZfecRGP637jep5sJjjQVX3N11hxaj1cDeMAio",
  "key15": "qPy3JEb6oyQzybps64pZVg64a6agkWEidAap1JbyPxT32YwZCnSzSjS3zu8r8SyoHfEWHrT8Bvc2yMizVsrrAnQ",
  "key16": "3jjphTu6pRSvowYqffq5rMNhYeVcL7LhFrfnMzyzKPvMgBZnfSW6yKchBLCRyU6jNeFrjxoBtckzjMqFeQX3gWJe",
  "key17": "2hzVL57fxfomU9L5NXT6PZ8GRTumamWq3TBkSqL8MHVe79RQaFUbRNgNbyWico4hN91YqcdyzgW71ruFv7R6Lo69",
  "key18": "UNVgeYnmi4WaTN4tD3KrTfq4hzQP6p2Vj1NFG1P76hNiWv31BqdMeTEuXHyutJUbmuehs7gXmDpYu51gizL48tM",
  "key19": "2Ab979pdYZ8Zvp54HWcYhzgAae4uW7bBWcbfP1GTWavcwyX6CTNemsyeVdM24TzVRJhBrtyGH2WHN2PjzcNwtL4E",
  "key20": "31FMuC7EbtnGxSkqT24DF9ktwjJrii2gFjvYyQWqx6KNGnrG3qZAc1HVqo1P78uRQH7fqi2Qx5WYdDMzPqYTR719",
  "key21": "2wzqifMV9PmJPaHtAsWJsYismtmXVJUiTyxUVJnpuCWejfT2yTyG17nBGBNoWB84wZ6ErZe6EG6cjPAi6WEcHpMM",
  "key22": "44WVe97WgbSgHoWcxtGZq2eTJmBZm4yg6XggGAGPJztdpuxekrxy8sXeNsvHgvukedjiqzMrqCST73qQ2kQbHWJ4",
  "key23": "3mnNYPEy4nACx5BQknFFLJuvZgv5ov5tbKaMDgW9nySSHsH6efXucJgny3sKVpT8goAisuax7v9R1J2ydMW5J7jS",
  "key24": "4jtYVjqAzNdPC4i89ZiwFcGmaxJSUsvnGpxcfZ9jiETtfqDvXJGab2QeBgW85GpdXUhZQSsH7e7gKbV6QX33WtWn",
  "key25": "5p3WCKpz9uXeHRBYoekL4wQDPFrSSoYQPH6RTiBsP2SPjrzSg2RJF4KXJSf5G7C5ZyDxa65svaP1xv6gdUZuhtDb",
  "key26": "dihzDgzq1HEZbxEVMFEojKazoFbTtXsbEc4DecXL2srybXJkJW5dgo9iXSjxGDXYiRAjoEdPuy7neUq2KJ5HWpM",
  "key27": "2Esc3C7dzQUuxByL1AMBSzch2g6hc5cQDCQS9vXe2aE9d3WgBq83PJwgE6NDmEsXDxgScDdxF2pJ83reWSt6SuqV",
  "key28": "2eQG5Z6MqFLd3bVcQggnDa3MCVBZR3oS5MRw2XT5Ck8q2a3gfrehEcjY1TsrBipGZtmeiThmSjQxTLyGFHsQqeM6",
  "key29": "2VLM4xGY9tzUdP88TKWmZNHhXHfCMmnygJhQ27f6tuUk5TbDk8BYuBr7cnWmPgf7MXY4HqLSw9mdFQ61dq7sAgmJ",
  "key30": "3r7xhJ3DoUtHpXUjeosh5fTwTQkFPKyKFR2AinXLJs4rdAExE241zNzj88hiMkWfAva27vEtu6VQBH4ZGkkhb4xH",
  "key31": "3Mf6Sy3KXTS7huG9fpXQuUNEfU1TizrFDqxcF1J1Dk91XEz8d8epFfXwRN4RSscWeARTF2pmWuu86Gt8EzkdUP4W",
  "key32": "GSJk433ppKxcsGQjPoVvFWmfpynvjbc1JJo8X8VjTZMZXarBFpseXhJjA7zQWQbKsBXSgNG7HxUrnpkBVQtVhP9",
  "key33": "3eviwvXGGgAA8afJ7EhxYDxXHe5ZDKB59QLfkVbtdpzWhEURXHfMDDnvnzkojxLD2BsTgwWLTA6Dc1GVtNFA4zdS",
  "key34": "9893Q6LeaJSTXWehsAbg33iB1u4G3pmHDerVjBrrM4Kje5DdLVUQjnpSBesiE5scqSCJqjA1QweGKDURB8TrqLk",
  "key35": "2vn8JbUHPC7zpNLPixhNArJT81jRRgqEnP1y8QBWsHDBcoK3q3XvgYZxqGgCZr74CqHRpXybQkAbpFa7jQFHQVaX",
  "key36": "7mgPnEzoC6se7f5USZtLPanwbtgviEoxXic27AHZXmwcRCDyFtLgQdcqknpR8pyDeD3xuzQzSevhWdASLhFEdSi",
  "key37": "YwfkRZ32mSB5t4n3Kh6ut4rBKeJgPpAjvVKTgKQLBefFhx8ky8rE2cRAKvv3Rw4Q5woR4Eofir7XRw5RWfo5vg4",
  "key38": "26qVxtpmP9f3muyYQF9dkc3KdgAKjVMmavRoY8uv1DMi5cr7zhfzwqj9Xi8aZ1mQGwsDPtLZEfSxDxQAKvXBDhdQ",
  "key39": "4XeU4vWNW39gu4QYquu3PfPktwjNYYwsEY32X1eeuhmcPiyZLwpEGnayHnmmvXMhd37Ku8oLBsCU9CuJLrL766hr"
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
