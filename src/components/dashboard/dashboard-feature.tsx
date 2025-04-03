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
    "2JFozXob3QQQsHFKcRyU2KG3QVtWj1yMndSa3wKwii43GyadrMnoT7pg5caFRjY56766hwcVmPYoVyRJptqFCCi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EN4Sc66TzETkfAyv7LRLEbqH3kiorxuxbvS8J91vFVDJse2txDHrz88Um4vemznkpTPxbp5sPuXGvU4btzrti2F",
  "key1": "65HKh3mmpneuir4Dg5uNQjPeLNuaxBXLTUTxpfo6aeySZ9wRKTqzH8itUPoaSMe8Eh84GYtPHWJGCojz5MGqbw5B",
  "key2": "3eZwCTM57a6L8Pr9q62YyGLJwDysCTGKyo3YXX92Rtrn2vpL4wUcDecSZu9auGhXyYGEJ6Wc6PbcwDytRzq9YRRR",
  "key3": "42tTrTmC8QeUbh9uURQuBJFHjfg58fKvcg2YWh9EHaq67tQD6ixhpKeKwDRP5XRXCBG31taRUcZdqnQ8ZcQd3TfZ",
  "key4": "4WAucbaPdF74WVGcwHdrwSyB6j3WuNLwYwFpkxWFC5ej774TwFeWPEZNcLa8zTBHv1zHeAMfWxK3FB8EfFC8E91S",
  "key5": "4HPg9BvrTMyPih7QxGLohXMK33mxdW4urRVbu3oKfChh96Ee3NUQLZpV68Wi5hnCCz8bpg6vpF8z39WjAtRJLAm3",
  "key6": "29zRcD17nhxAQ7Jj3iYiiGHk23p33dRcruPibwC2kYFHAUVBv99xmYfpBRW7pD7EoSaxo1qTBdZHCaMa3Z1qCGuw",
  "key7": "2zYMZ6AW9f9pAqkxdFfd7nz7NYHYWDJoLmyzq9Be59XiiGoDCsWekhSwgUBVJhV2qBH6kP1vWzWRYRtfMhqwL2PP",
  "key8": "33HLBP296xHR3ZgM43UuZX1VkseuW5A2Cq9CJz5kxyeKeHvgHkMxZRQArCm5xy9UqvsihdLPTuXDAmuEhwV883SG",
  "key9": "c1rMrVzTqxP24m9zdo2NAT42JBtpF44PFHmWsW334n4VqsvWP9YP9rdE9K55xxokyNZYUJCD4nGdWeZ3CQpd8cX",
  "key10": "474LwQEBxiCyU222NmMNVuKqFjNHNkEAVKcoFEyZ1SQsVRkFrpcBA32majNodYd1Gu9oD7kZeTwbTiV2aMZ9QdUX",
  "key11": "2JaseGdCBgE3rStr1ZZyb4gZBvgDQmLsc6XeKgT2177ST9wiR5XSvjk5sokny637hKGofoe6nxBHxFPwzWfzqd8K",
  "key12": "5Q9i2KJy4qnSMfmsajb4Ui2YyoGs1PWo4dAtjyUKNsx83ezuypDZfqwCZZmB3xVi8p7gWTxzGxiArdVe4qBhtq3A",
  "key13": "2Sqs7TRhvKDtfUkSf41qzoTQRL4Yrc15VAjhFz1X1P8jiWqVydRiku1hwVcwpJMhvbnYiWED7gPqRfVwdxbkUtZj",
  "key14": "5nsx8iKcCDupuoxn3UJ3oTukiw4fGrNc3X8CmTAqRzcxD3mDBMb83XPHp1CTksKPfYwdgH65Qx6opxh7rWcRFUu2",
  "key15": "3wHSAqLGmN5XEm6si5LZae6TtQ6TN99s52Vy8XXARn5Hf57zGYkdnnPSt7H6gCrKwXyWEN7JFBMmMs9GgmaX4VWA",
  "key16": "65VsWky2DANRP7LxtJE3BvnfcFN1wmCCgyVZ7i38yz1orwH6uu6un1zhvXDVrpASVQ4BZ12XFgYCAMAVhaBC31Fn",
  "key17": "d36sUct4khLQ7GkfbPeaPmHWmQePc2PG3YNk92661QXvxL9eJL1Dj1pgeEtyzhnKp3AVq4qS3aFP3jx5ogAWQM4",
  "key18": "4cCyrKchSVS991UYdtPCSpjfSxf5Yp6wUgBNe6r9HEepcWf889ZxZp5yX5jwxJX8RrmeEC7d1wUm1mxvs9VBV43T",
  "key19": "4a4xD7rhFeyu6pGbbmamPpJzdvTqc83drXZaiNNxqtkJdfdmBCFVTzykaEfqKUgw4Jh3y4jLU2TmhnFJP7dSF1hV",
  "key20": "5v5BZ6yUY9UjRE3ZZbrTf6t5WJ8AmU5JNs3jSe5vJnkn1Niqh8k9nieA6R75NpwYGBS5y6uDmF1QmqewgQoJ2DnM",
  "key21": "261B2vsmMVZLmaBXHnKfz1VyzbraAj2HsVACwnkDHBhbTZhSbogKRHvqkD7wcKehtgXpzz4sk9HXQ6GyUi5aMuVd",
  "key22": "2cBpfu8kXUjEMotHzNAKpc5vXeD45ih7PJ7vxps8M8Q5tZzmz3dq8hAAEQsKsk4Vo9qxaekwwb6AMo9rFmHoicQW",
  "key23": "3PVKBZTu2W8p7id5r55szApyK77aH5wUbTJeYj6faUu6xX8GY57ech5p8xiE8SA7vGNQLa3UAgcoY9mquT1gdM1t",
  "key24": "2r4c1oxezsaxknb7GFdticBK6DrCJYe3BPbsFAyjUG8e6mf4XqncCWp5quVPJZ3iv3cLM125FuGQYVZqwywsubm8",
  "key25": "58cX6dprCGW6xVDsbPnT5o3ej4DV1zcEZf3G8jmuJLNqyKR7w3VUmTe86RvGwEhFEotmAi8ZrsjYQZGAQnJmiAQw",
  "key26": "2DVKtcgBBW3m6vpE9pef2Xia5bA774kg3oPXi7c6kpcHZYUdW4L3gqzBeRqwbi1ZPFr3CzmKJ9rE76qQJPwbDiJ9",
  "key27": "KbhHCXaAd5ETxumZN7CLvLF4MRAn8f57jXBSkD4hUu4QoA27U2XLubmtnABhFiMgUYmt1Zq7qyYuRcYoeB4k84s",
  "key28": "3omAL2QQCgw4Jw99EHEARjccJ2ocgFFBLHtmtHpnvQqRP8keS87djB1pefq94tXLTpopdGyjKP2WkcwwaNwkHW64",
  "key29": "4NnajjbVsJJkPYVsbVj851irFdfbAiv7AFvvKLRsP5iU6aSRqrYqSkLmVg7BjY2qKPkqy8VGZPX15RErPijhJ4io",
  "key30": "5sy13hWotgYo1duS3X1oTkq3hrrd2rYczJXVrVdnFtRxrkUmgYD5X6T7rxh1NyZKPkaWJnQpsTstNN2Q7eT4CthZ",
  "key31": "27AWnPuG4u9i3C7g8MhUJCFpuDGtpHwEtkdtzXUmzNUp6iHp4paqXozZDRzhSrcH2XqqWj9VhAsXvu9jfwX6gw3R",
  "key32": "5satyEH2xPk8psqg2CgRQCNbEGewGCg3Gto5Du26Qfp1Ek7sJ9yaHqbx2WT2MVsMVwbTbfxBWmSTHi6sc4mYd6RP",
  "key33": "4RkJR42HMy2M7xS6iA7a5rKtr26rsoNgtocsos7k4pgnvuW746g7tKBd1mJduK6LJT83oYGcBcmeDqd33sLq8uW3",
  "key34": "bS56697WqqwFysW8VvrMVmxJsw7JuYHKiiJhTLVq9wF8mzqN1CECNbhonHkTccmeoH1qpw653ggyFyS5c8wcSJD",
  "key35": "5gomcozriabqNij3aSzmKsWNFxqNhKUsgsmJCxtvpzyimwXPsRkoWkdBh2V2TJLUTWxo7N37S8ff6W9dKeQs6f4s",
  "key36": "mrvWjCksyycj1YtH1umtqkVMWjhdT55SoVGv598cFEXzpT6Er4VVYbkrhHaqtt4z4eFjZrj6mTMy6GpDX9ewiXB",
  "key37": "4CuSdPyHKUQcoo92psYZ8PVQFbyerfjViGq9jbPzguQ3GnPPjS4bV63WDdxVW2FYL8PpQqEPDH4JmspKKMjPnfAr",
  "key38": "4pvkHinxxzgbjoGvuq1miKCwC7UBWaGRKA6W2F23VEG6qa4iYNsDDcHbvyW7v2XmgmpQS2caiyyHdqumUNJ19YX4",
  "key39": "c4xmzBMhFgQuYV7oNWnzcRfhQcbzhRES3V9SkmBgrvaUc4QwUCmKfZ1xNc5w5UFusiSZF38BhJ1yC9TJxtA1onp",
  "key40": "5PwF34L2yHY3egwFGXom6qw7e6EG7rWj3rSkaQ5waQJFiCy5J9PSzPyqLCdrXFkZAP3XtLeCKYssCaZ8JMDgcsm6",
  "key41": "29pKnwDzBrTLLCw1xbA3EaqZJjy6kXEnnKcg9JNqZPm9rJitSURHVDauCiqpvCbtmUVakm3F7EuwcPhoS84p3RrK",
  "key42": "5rCXTRdT29TPLs3DkxchAGEhuXRcVmfZM23vFdapcAUKQecffZa5CHDToVcHLZL5tfLTiDGLF3DhYCJDrTBJUnwf",
  "key43": "61wbU9fwp5ssmzBi6di11RNgBcbyQFeThZWY267bPtAYznyWsqza4EkFdfU5KfMPSPK9jsQGiqZCEMgMtw5xGXnQ",
  "key44": "3htnXaMP14m9wtKBVfXAUtpYewLtpcmG7FVy21ZbApDSaFxbfjn2HiMdJsT8EibjZcC4UsYumUYhBDLdHtf7fxVE",
  "key45": "6313Qmv4ovTYAymNXensoDZ9j9dSaWZV5TaQPUBFsmxUrPoBUKyQx8h9qMZcgXmgq3MH5BcVshEKLSD33XKD1TTQ",
  "key46": "38z2mBRuPW1sLP1EbvMoYFJ2AeaAvPbgPFoXWYtoZsFyhFTWVkT1oSqaDK4KX5YSXfKEqFoFR2DUgLhF7712XxwD"
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
