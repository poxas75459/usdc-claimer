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
    "5EiNd6YHAVKiT9j8qHJW2zNX95fhMJ1hmHjGKL2rSDeLXsjyB77WokjNWGWK5KYJdL35qT1KYuCynGQjSGyuKkK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5NkuDrn5EphYCroJ4d4aRRdSnEiDAQzvgtJ5ykABn5gHyS62vKYi8p7UhbcLysFVemQjwuSEFEv4m6besApYt3",
  "key1": "4HbQ91EhWtqrHy9ddiCQGz88RA3XAeSLYDfET16zT3YGqM32fgAtehimyph9UJ6kYh8mFh334F7vcD4KDEQj8dbz",
  "key2": "d5ej3VPiQmbaA9szz6WRYp9hkc3dExRyMMxWZbzEqpoNFbA7jhaxTe4oZUCFDpMF5G47B7eWUZs3XA7ab9omBay",
  "key3": "5hVoLNVp9FgsZ6qmc3SwjFBwGRVJhFpwZoQV7T8BJmP2QQy4MipvbUafsNe1N152WPpAbocUaYNetQVJLAAQQf5H",
  "key4": "2yR5x7cSKSiXeJbtrMMkYMEVZDSiyHHbBwU2nsNb8Rh29tsauC2QgM2eKatRujxyThcxNL5QoMmJbqH6i9ZVSV6n",
  "key5": "4EfPfN7RR5YEGGeTPgVKdUj7nULMNqxUTvdWDsX1x2FDcf63cWkuxAw1z3JaHn2CsNvWzorz461zHkgJCXUjSWcE",
  "key6": "5RENhqJ8kzo6qgxSbS2SyUXprKQizx89mpzJughw2FsGSHmQzDepPvJQwNdKD1XisoiUydsHzeaCWEJV7tPUU45m",
  "key7": "3jer5jL7Bfyp2LbfhKDTNT1F9SFnSRzG4A2pvDhmoDMBVhod5aEr7ykrUcNRkfB6tEhueKSXpsVamXf6NaHine1n",
  "key8": "2Aeq29Ufk9tbpdG71JzU6F5MLFRYW1Zup8KxL3xysLzpvYDxHd6mGyKMcdi6vzfQedGFCGgFEAss3GHHHey7b5nA",
  "key9": "4JaE21hS3FBpzpysv9qKSoPAq2sF4h3mXM21AFuuG4iRV6RqB7ia42D2m38AoQTx7NJwXb7SBXLBmvezftUYeTLW",
  "key10": "4DQg16dt1wADrJSC64w7w7n8q7JHVoEQ8FmXfS7Mr4smAVnAsQ182wENYn2ydMfm6mRLFHtntkB913MsWuKbVewU",
  "key11": "mR5ycjqJQSk9YLkgnZjvooVAik5ojsA1VBbNeofWFBVAhe4HqdtpfT2HkvxRr44G5inf7gkBt996uQoFfuxJpmA",
  "key12": "3x8fiRnYRk41XLj9VNQuMQY3EDzhSqrN1AzJ3qgxAuEbuGrwwB2k7i6eDJnSTCamUFUi849who2n52GM193CYrxk",
  "key13": "3ZT4MN32ke1NtZ4xqJteFF2ZKhE94wWVDE8A9HyPTNCmf54UWJ7ocMbJvid8jggkZQftQ9sjE7vkRP16jXVemzxo",
  "key14": "4wLWCDXygg6MRMcr8pp1sBsjc9wCte1ivu7jVY4Li4Z5jmRDsvrdsJQNpaEdEyCwYnyiT6ihK3NZK2ML15fGZf35",
  "key15": "5fokbFrVgQwZvTJ18N6yQ3fFuHSwEdC1QcPskqw4MxwoUjeLoumzUce3aUMvk6YBHABwtCB4jVWJnUHwRG76bzRi",
  "key16": "5MUk7fSExN92n6DPC62UmipizQGkvLPksT3PAiVK2Z9PW9hT7VDV1pnhWn3kia3muFEVB8NtFzMhZ9Bc7XbsurmK",
  "key17": "vmpDFbiAvangEhqT6W3hpNM9hbVmoY4N3sTzSbYTWNd6kYLthEuwomb2eMZttZU2VQxCYra785A6J6ezB4PLSU7",
  "key18": "4m3NX3n4Bq2gDj327VGyfWyvvhhcDJZK4McFQzN491ZtyNfTZoJLUUNMCMbWM1tk2H13smqG36hx4sndZsXsvd11",
  "key19": "bJSsK3YxjDwcfUFf6GonF5yaS5MBnhXWdrWSpumd3rzZYBbc6326Rcjvwjsvopn4n7imobUiRvgfhJPqSKZp7Ba",
  "key20": "5FRftaMMiHoSppGtH1Y2pirqeiuxuFoxmSwdU1PUbAt8QsYCwZpQ33VMLYeyDS7TBrsrLH1KVLUaH7MRYvTZ66Ho",
  "key21": "5xYGQHM6Nwec3PKUc8h5SrH9V2dz5xpHDJfnYqppm3qjkNrYhwxhzzwUiCXAALd9N4fPMM2b6qGBqbAnQwdk2UwG",
  "key22": "xBNZbmSBeWZyKxyYQU7q3nwTCeB6Rkc4x5Agv6xqCKVb9rEzRYi7yQ8oKvSfqd5aYKLf3kcvxhvYFC5NPahJR4G",
  "key23": "wUQwSULoYHtpqfN3bneWGtBGAGvffMKHyb9D2kacoqSq9WfRzNSDbcSSgFtCbzyHBWDLkW1sLi1oyZK4hVCkuPi",
  "key24": "3Q5zHAGVjRKy1oz7tJDSqjkqS9B25DuEqwkLSBuSU3HnJgUq5mgmD2Dh9JLt1HAKjHXgeQbBmJP84D4GU5b6M5yn",
  "key25": "4KqYq5LHgfQTVnD3GZo6Y8wGSNemkyxwvCuSjtb5fjGs73LVJTLHtQt351k9f2ds7DWdhNbFiw36cFJjRbpYzQ3Z",
  "key26": "2VG3PMiN7wa7YRTNJ5AfLGfiPquwVFL8vyEousRnZehwN5HewL9N9V1GjqfyNB9Bsq1mvHbzjo7uYEhWGvCPdPkv",
  "key27": "3LeoPDFawfkcoYf5y1zErXC2vKmfGGZ1qBZguPd68Yj9v5oQzynT1n9cJy9JU5PGxJ2YYhKsw5oqum4TuzrUqfGR",
  "key28": "2JUu5zhCUhn2azcUHanL2oqmJtASPVYEGKa3QaWvkLCRCBERLczUKA3Teptu6PBQu7zYeNLGUzv7DibR4XdjqRjs",
  "key29": "3JJKx5Qyjaz3psCSVswJz4NNKrnKfZj1bxnoT3xnNZyiNB8aT3SsJTibPUgFHhn94Y8StzmLVSjU6jDoaRj6eG5D",
  "key30": "416s3t4todSDq2yzygG6aPhVhUbg34UkUDfx85X8GJBSoJ4vv2XJ9K6nGWY1T8HihoL6hHD49AT4SEYv7UFggZvn",
  "key31": "4f5zEKobGhNGqzud515djd79bozcy2VU4a8VTCgW6SdvdJxbCczHehMxAfmWXLJFAp9TK5qXsxwZYY5pjzd6pb6c",
  "key32": "36tzbtzfYX4q2VQDvH8LhgkoJcys9WkT756K94hY9LnxvaxUDRdcmwPSEzavcCLn4BmU17wU53P179TRyAFavLTA",
  "key33": "2bVE8yrb5CRtEyEKiPV8KcgtWtX2wid3Gu7fFS3wVsRbJKcnfJ4BZkidpTTt6wGCZh8UKrUo5dBr3hYvTYtX19pC",
  "key34": "5BEVF98HnqVukXDJfiGCQ8fDs4pT2dqG6tpxwx7Mbiz5dyFD3qziXLJFDCggV5JTn4kuAG6ZSSUM9EPkQeECPsx1",
  "key35": "64TLngmJomyovPg5z6Zz7iozYZvFNbiXHFeYqrsso2SRhmqHkWGy1khipkZqu65X2c1ZbkVj92VkrZjCQ6nvoktX",
  "key36": "54C52jr6FvAumGMj7BSjRKSg9GqkiKDqchX8ZEhL2wR5fpY55a7a16LC6fEvx78jVDrED2TTe9isETKJWUQFoFgF",
  "key37": "5oGZa376qYcrwao22Mahj3mjBR1gVgiwjtsCEymAydJQCdBNJFi2oST7LMbDKK4g3mMCYT86eVuN43JW9H8rKJhV",
  "key38": "2A9GMV8wBv2bARLu9WHaANPiZt3NNShaaN5x3XCEfuxePkhP12ht3qhnBX2VcMrCgKHYvTASgjuGgmbdL1xuaawW"
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
