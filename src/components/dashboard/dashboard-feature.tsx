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
    "2qjYBFpwwXeChRSjx6qnWa7qd2ScKwUpCCJHyyMz77fLoM7FnMmCMrwn32AX7Vw7Bi7ERPcz2o3BHu94subgFcfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRA8YU5QioiDB3tepMSqfhAYaex4yLotXSoCE3Cnwd8S2d4rCWx8pSyzNrvoZpVDmQtPAiLnFtAD2BnwHeGHsDs",
  "key1": "2CtX61MwBVUZJiMm8n7F4gXFp4NHrSSQmNm7XSTrn2DTL2v6UgQmsbhAvZAE71LREmZqLcK1EYHRKTaTSXMZY3pw",
  "key2": "72iHK7P4iuW3gf16Fbd2ZLcrc2gdzc9ziRgtKUPUEqyxxsMHmz8bwSZgB4Me8boQRDoCMSE9u71WrKbbXuYpjr7",
  "key3": "eDaBipiBcQLQPdyqTUTDoBhyaQ7F3KD1QKtsRuQ2outCPgEKJR9TJXJ1rDuXUEBXbVmV18gJzd6hYo6E1ier4Bh",
  "key4": "TVVzSPWVnjvBtjquTuvmb4cyWPrFrCqThRqDdygWZSRRwh1vxoEQzaQY6VzGvgADfvrpFFyeukQk3nMxofSPz1h",
  "key5": "sqrSaMy8RdhFx8yELey2Sy6uce2ySe4V4WqmykbFYTbaNLHS1vfd8hm7iTbfeAWnW5coNcP4NbMQxhvUkUMGwWC",
  "key6": "55WrBeYZHNE4Y9okProexEoCnBSYggQaCSbgiVw33mmSQUvB8VwZh2zPHcdZeub7UswEbk7aBvK9FjhyxHyThZ6G",
  "key7": "4uBW17MyHZHQfwwAmMozB94TdaVes5fQg1kfV32zmAMwAqorrUMYpnQsY14AHGTvbCkRTeJsgKof81xjTy2jMhD7",
  "key8": "5wGUS3UB9bY7PWZ6W7zMfQiMDvQzagUk8psj1j2mp3Ufth51sGNxSqeeVoAkVE7zeYeUs5eBNCoMrRjUNokXozxC",
  "key9": "QsLFtvDnPunZosWkL5wjJynHfJY3iuyvJ73Jeo8LzukQJG4ExfzhMSdpBU48VCFoEWP8DAdX3ziJo2fTomSweDB",
  "key10": "63GjR8hJHUhUCiGMhoJFfawEnE9s3SY4t3UMcPnyRJVS38hp13hk2b8LrbFf2cR7DxbP9KGnbQ7GCKgK8GAqTm2q",
  "key11": "3yWdEQz6F537nq4QvuBqKFxqJe8ea1Q1sSvLJvdwvM92B2pkB9twLWpPBPJMp7RNCQGGTS6n6Rnvg1MvuqKtryLb",
  "key12": "5VGeZftKyPmeo29A6rrzqvups6yrXXijZgAbzhD8ikwQarqK7ThSgy1tPrxRcsZKGPrhpmGrT2YgzW4WCP5reczr",
  "key13": "25GXn4Lg9ZYA7E6M7Jc4n6HVciLZVHKQCMzU32CNuR15SpmjxRwXZL2KWSYMLPGEo1phuLsTnDEnir2mbv5Cg385",
  "key14": "5QPHERpaXFa5BhkyHKtHPtKPyRHgicva3gRsEXNTQsCdci3LSQhUffafP3M6WVJqhMfsCG7fgFBqRgzUr9FnrZgV",
  "key15": "2z9psrDCPsXnbtdjVzd3FZznkPJWCDtneaWd341nuW2iGFoN57rvf4czVSh5k3x1Db68i3gNEWJgy2R5uVsPTYV6",
  "key16": "avdWSf1VdWg86wYmwTjJKmXMgKS3kkrmnbTYqUFZSQA5zJEczjM1mqCZbiqUvVDxDgL9dpgd4X6Zx7Kq9br6nbp",
  "key17": "2kj2kNpYT3ypGPWQYRBV6PyvPJMf6CXqvN9TDU5E5tbw5qfxvbMfqkFed1rBLwJAKzRqdN1pCFz7NZcUaBggUXRG",
  "key18": "8Krx8Ran92ixbvjV8fwkPMZdmCc8sq1vuoaY7R1Cz326Z9TcVzN6JwAyjqGfhnXp1KLE3zwCYjHSisZ7D4vks5y",
  "key19": "4DGBzhjDFLWAYxjqSStLggVtndtWBS7yYXg8nMRxkHxAFsLwG2F6UE3648QRyxmsjLuwvwVJRd6GGNNBYEZ79fDj",
  "key20": "9z8osGfSS6uR6eMnKDjBuYna4ZXmMbHdRfCyAdAQnSipzDzmYeshhWFiTRq1LkcjUhJc7hyVmN2h95ZgHkinEnG",
  "key21": "5754XgeX7kXyfYxTYAfCHhqzXAvSzpuXbpGiKnGAtaQqPSLc8Htj5KRr5XMsAeCfn3JRiWbtuPMRq5Qhp7aHDK3t",
  "key22": "33c7yVrTPoV2hiLRpTZcpfcteXEiduMXgyXvXjarSLSJf44XuoWZEy17wWWs4EyBKVFByU5U3MZK1VkRxxAVb7Sc",
  "key23": "HBqN62L333ondxptGoX238sS8e3QgJYMsMfPtGQxkcBRqkoW8vH7YXkphmjsLXrWbqoxgXAceuCAXZ2V2cn8tZq",
  "key24": "4nNpog4m4REs5dqqeGo1eYFcMLcsvjN45Sa4uwfoVW5rAgXqXFALMqhawuMeieaHvqoAdMNMkUGKpsK2Ypw7e6VB",
  "key25": "f8KkHGaBikTArTUewyLxNrQnknJswPNvVfAXvHcd9TreERAT8tdW2uhXEnsuF27cb1VyMpRqzMmGLvV5rpNL6uQ",
  "key26": "5srcqFZBae1pf6M73yNkUsWjPoS5r8EsHzNv2kRQpv3wsPbno9KS9EFCaNQWoDQksJtAXFcufUhUqiYeLA38Aj2x",
  "key27": "3YMEw99jDqa8Ynsk5wV3FZ21tSs2En4ww92UbsPF321EdjAvZgxhdTXfDTnKYbaawA3TYTwSarwThz8T2yBaNU1u",
  "key28": "5VcYSynELUtSTGowY6zZTGSqvESxmhBN4BdjZfoNb9dQsjPiZnDuVZam7SuECjJE25QyEuaGTPfxGxy3PoKstJCo",
  "key29": "3BZVEAurUHXemfhwnbUALgVKBiJqsrLMg8XyqqQyXTnGC1z2zfy1AwAZSez2gmfDQBA6D7Yu1RY7rKUjJWvVZPbf",
  "key30": "w4zU9ymKXwuJEKQuPtK7tqPo4LuQtgAhirnwMQ4ToN8dZjXSpB3P1AZGCrcckwKXdN17KXz64AMnbAdUAJ9AToN",
  "key31": "J778YbJ6RNMZGSD5rFx1xYR5Pimk9zktMoukx76gH9PLo1ZVhoDtAxUu5CWt6xz3aTtce5DdFDTfFjmEiy2NEhy",
  "key32": "59tHQux2ZSWeftqcL17NCC4oiuugmPx1ZAeo2T6rdew3bihHRHap1TtQZ9dPnESsriXGixAtunEpfJ7UBXZZZvyB",
  "key33": "2cnGg6MnSdgsH9AmdjsrGn2N73NVKRYt5oA6oJ7EP7TjFNYMQ6okW8WLD6Z4WsGjn9TfCkYSHsewdz95YdoT7RtZ",
  "key34": "5Sjdh7BKPYX6Eh1MTTp3xnMPBg9tPXVgKmcnLWWuLLKDiELPyFSP9miw8YgggpThowFxJHsv3uyTqLvLCcdagnCV",
  "key35": "3KD2QR7hgAh5o2VAUvDxtfpov9SF4TgbZaqfHdps4FPn3rXp1SDVNBDzn32mp73iDPrA8bfDwoRRm1h7SECyzVaq",
  "key36": "39Wbe7rx9CtHtk1tiY9m5avp2mJLw9bWGrPYFrsWp92D6Y8NcuyS7njLWK77j52udAfFubJX9WwhDmA6QqCZZHNY",
  "key37": "jBZDKcZ6o9MQvRVfrPqH9vYTa59kgtEq9CLgNZeBjjje5WL7FNqq1L5YZ1sUbDEHRuQ1pad771ByP77cJQX2wGW",
  "key38": "25sqxKPgwdrcugwU6TvgJfY2a83BLrWGtgDKW16vqZ8FBHwGvtvovQMqGViwrn6aV7jJHnxWC8UrHrfuSVySFaHM",
  "key39": "9PPVufLUrCrSHJdzdvmSf6d5zc5huVDgBykv8dTTwHtSs85cMhj3UkKKDhyoSe7Wh5YXGBY7YexhAVsTJtzHGRf",
  "key40": "5Rwn6TjQpXbic1heUtdJ1ag2rHciUiZL1hzvtoGp4mHXFVmac3mPLh5ppdkxsvdPFjvhRrtNNzR5xS89ebQTjhqd",
  "key41": "eayaniPUG4sAED2KxcgjzqykG2STAAXbD3jZ2ex4yei87YcT5u3VfU2mSwAgHkb927KaTjrgUdhA2X6jCpgLP5a",
  "key42": "5HCkiFnvt7catFxHSB9is2tPPAQp7f9oKPtsPkruM6YDK3j16UExXWa59crkJGTqf8pNGUKKB3rqGMhX49W7xJGV",
  "key43": "2CH3UPNqoFfLUwBPfTcYJd3uesnhXZTbRdmSqDWFXB2766PiJHNcZ8jeHz1NoBwzZgLh2wrghJyn3sV55wGVBug6",
  "key44": "56HHUe2sZzQZk8DRffXFiiph7BnriHjcaXRjuTDQatC9gYQtvP6LSpCLpGsyYKPGs96div92ybMfGZ9AvLUtZ6PB",
  "key45": "5TbovTiKJuSfhhrke26GjnzFagBPZo9ywxXvmL4CkeTJHdXgyEz9vhEYppw53TtdBpbY8sviFGQVz1Di5RFDELqy"
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
