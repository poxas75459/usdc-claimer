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
    "41wkBDiahoNkTviV7tCqty3AehG2QSJphj5pdi5fXKU6cxoXixVe5B2SR6pxusNUaL3v6teQHX6dywQQnVKA3uZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPf91X3f8xsXY2UQ6J3aND7VZJRze5o5eDM3pp2zqCB3dtyY9fC8THgwYJ81WutKyycZz7J73ha641hpLeebadd",
  "key1": "4RVEhU3UeAE27JYL6BdZbvNyRi8DHjHdKzudwxTZ1NeeKMxywK7owZweNhv9fumAP4nuV8RmZrvsiAZnUdRiTxhD",
  "key2": "4fojCfgnHYPnCuuvBF1kDx7K8R924Q8oWbXxDXgF7fkFDYz6YsoAHPPuUV1c6bL1CgadDrh2CsBBxFxqD3341Rt8",
  "key3": "4gi3U7Dpfosz8mSfNU7pjrPAKV3WoLZUyVfy7MNhDKFnrrGsPnub6A5Den9afkCgh8sK6ze4p4DXtZLTP6X56v25",
  "key4": "66mMvhNGrvHD2nY94RUgbcVuZVqLpkdFNaG36kHYPoDM2ac5Dtgx82QQernTvXWyx8MgcYkGJyBAVA49tRbzZHjx",
  "key5": "HuRRqp2Pmd78ZFtdka2r62CAtQNHgvPXdpYCoWZFesbpSBuF2K4nYFLphojXaWD5eQVTbpywAaELBBtdL71uuMo",
  "key6": "4ApGYdsLZsEYB9xuZVigWycVduZ2PdXo16bkYeayycG3TGs7cX62zZo5g4Arv4JzTdidjc5VDMgMH2wDQv1WqFxt",
  "key7": "4jyVh6WsttdpEJTLGyZdAXbinbzf6KUKwov3b9govKU2pLGcTyavGJyDZasJ4HJvQS6HwJyniYfNwNEfgr1edFyr",
  "key8": "3btffHvZpWMfAFAvvBXk65HHivshnbERLBRHWPtd6jsdAqNS43rKED8CvbG2LuZNxCJ4cMoYYsZ5N4d1R1adqCXn",
  "key9": "2rMfhMExvVZDcyis8pxhVo7V2n3FjhSMf1CcRQewGC2AsaBpVkrnas6WuRFKFzoEyxUFGnDgGdEXJuduQrS3xQm6",
  "key10": "3p5h4YR4oVXDcFeTPbkpXEQJAUPnp9rmGuv3q9M3XrWwnFbZcjKUcsvqae4NJkW9xirX5JBuszukP8i7fFvVrFSg",
  "key11": "bdNQoCigtVkCVYVM8GTmw1JHmbZocduApW6G2cYjhU3y6QzseEukcQTVd7B2AWcujsCkL2nxf5Z2sjSasF2qXHf",
  "key12": "58xtQfd3Af35w9FGa4BUVW4VGG78pjq7G31wMkUtJBwMqEFUqvfibR18g7LQFnv7fnV2UV5y8U3aky4r4z5NDsCC",
  "key13": "2WcKPYMK31VJAV5eWLY4KPoD3AjL44kn1vZtUdmsTjF2Mz6rhY8oje79EAfx4qzcCbpzJ8g4ZbhiFNFJJtUitsrx",
  "key14": "4PtmtY23isr4fANnjD1JisTE7DnDshx16C3XSkhByC8k2JDdtuwAVXeF9HLQVA14TAiJkgYdtCk1uTWqkBdUu9uo",
  "key15": "5suJ156nedpRhLCvbzQANrmhAUm1F98ouRaLzziTkZxj6j6SpHwQTWfMhHDcaA9j97L1ceJD2ManNYqsXeuGv6UH",
  "key16": "5XZw9uEeTruNL5PaE5wV2T8en35FV7jKiQD39bfBhcTXpw2rG9VtWXBNeuV1c6HnDxFiyNHNT64kCQS6m9aebFdp",
  "key17": "TcmMBR4sjwZPTzp2E4dMFXyeKnWWCBcU2Bfosu69TZYPx9mW3vH3r1BRhVrMG9j7NWiSyXyTkrBdonQZmAUMgd6",
  "key18": "5WeERLWZqmyaKazueGB9YPAHzokRgQzAaZpnjgDjXf7C5umjsC7LQjrKBtrdSQvo5EKG2BuzRzLsE6QwJn7nBFYF",
  "key19": "21ga9XhjDrncB9MLP1TdsPiZzEHZnjjzsQP7HP3QVmqzpXTxrEx4z63J7bhviVLAW53hpuYEp3W2ZdZLmcwphSvm",
  "key20": "qbhJTKH6UsuMNxGcvqY2HGskG8sMREFudeZ2CF3zjkYTGipjCJxHzaMgEY28q6iUNWypQKQ6qxUa9MzY78Xarz2",
  "key21": "4KaXNg3tzUAhLMmpyL4g3wzsb6PidVqv8nJY9MGC3NWocEzRjbaGKLvV5YofvoPAh39ieAL7zfbhjp6McQ1FrgCF",
  "key22": "xrw1tAKdsY4cohi3W8tFLoFctbV26MrmRz3fEvhTBJYS8hmo1esYZXxyv8xCiiCS6rTKvQM3ymzzuShvDUy35zw",
  "key23": "2CzCMx1hN2Z1cyqiXpCeHD5HZ7dQLMYgtQR36zDEGiEQ7LzNffmaFXn6kENqDo6mJdNPEsK4LpL5gyc9KeRp2YXb",
  "key24": "MCyWjjSUZhquDHVhQDWLvqxbrZgGgkEdiW3f2G9znAhx1Jn5ooLAT5VhKMeTCBj6updutshi7hESTLBSCgrAnHn",
  "key25": "3jw8LXgkfGp815V1USPxs8ZWz1XMJJEVE9ZTxP8QauJRkrFNFXKp7usCiyX1xG912CKr21E9ZqpJ8KPiBzV1ombf",
  "key26": "5RDJPHQM8xCLeeV4cMmpyNwTZ2paVa6iqFsabQczJ5uasZh7zT2cGztnxM6wyviVYyCK3qW2wDiM1x572usfMcLM",
  "key27": "38AjC1YMB3YEm62YbUzAaTgtHdCgm4CnfJfrUa7TSJa2BxJNKZ82dY72Cmnob9f5nfYibR6VUVquEcSck2E15jeW",
  "key28": "vBJbjUNKRe1QNbYTfCwMDw2iTcvMvKpBWAxr9iqygX3PqUXV6bovWDJ14bdkTLqmdyxGw7GeWYhM75Hpapwc23U",
  "key29": "4bBtBAhDjsrVuV6AB7BUPXZk9NR5GRCqW5RmmP6mUv1pCNkGxVnwbhyKk4X3q69NsLiKoXMYUrHeZfDyp6gP6Nuq",
  "key30": "3GwSoxpbDsvCVqPSTHYAzgjZ65yQTBjumB4RE8NQNzpusB3JNvPwnURw8Fu9dfAh4mLe7KJizuwXAFy19zewkEd8",
  "key31": "44BGjyhak6nk5epN5amDJHrCZYLBjSrD1s7XrbvnB9NLXVisQ2EPkqP4YjXiUydmnAQNxfn9FB3LbLZA26KxEJtb",
  "key32": "EcKt12Bs6HTxKqhSDE4ttxwiqYnHrBa487Y4v8tA3jXuXuJwTn9aVsEYebH2HLVri6SKffjxL6Qa1vhLfRmLXhM",
  "key33": "R7qmEs4AmHj1Mtfazm5jiUqSpdWmNtHQWLhJWbyrz98shqhRJaATvBwE4yiYv7KPPQkgMByhjdYfFTJGZDdUbJt",
  "key34": "5gWYvCj6uqdVwbGu2c9YMaqX3DTaj7WWn1uJq9wea7XVyY9mYk7tqwQKNABDesqnfVaRTtw39pvsd5GZzJrNDmXj",
  "key35": "51JQu6EuWuDHfdaUsrcizwZknJUKKZvkvdRPKswXbJTPLWFbE6B69MtKNd9eM8p9apKdSED9cyrQT9ZhJkuFMCpe",
  "key36": "5PtC4LmJAKk4u8GC5pe4cModjAtCePA5DN6XNqdiesiAa3mttjGzzpWjESkbPZ28ZbKHs6FFnAb24oAgZXbWrKiF",
  "key37": "5XgjxpBMG2PEZvUEck1Gve3JtV8CkKTXeZEKbq9MRUTv3y5rF8BtSgF4pLRYpMWGhHy54Q6GrnvHzXCqgtv4akHW",
  "key38": "4yKs2svT2WsJWxjoP2mF5V9QnAtnZ8MZZM6hcScZN7aNKE6xCWQr5BLboEse3xytzVVctHa8jsRNrHcbaVQ4MEw8",
  "key39": "37nY17Ri2V9yAUC1u6jP4ySGoWNX8kdCCXNM3iDZJfWuwpAsZkvydwtmRfEyD79mY4RQPMBPU3rD3PjF5P4ska3q",
  "key40": "3v9xyxMt9vH6NJq8bj4gkPEZqGoeM8nwGe9B1ifm4a3gaeGTuQERXqzaNbPc3CbVUDrjYpzjPE3JKgtwcx2YdUk5",
  "key41": "3XnWhrZJjeCjY3escuYzVftDJz2csH5zkTLuVD54ynaJjw1hcscpqGHZCHWVjKDUg55FFrpBrWyGSrkVzahYQHvz",
  "key42": "3wkY9upF4WWXuGbz8mEsGuAXe2w3Qvdb7Z9eEErvuwod8zgKda8Dtqc3GLMEsWFnNFj29zh2uyhKbJA4o152z2yM"
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
