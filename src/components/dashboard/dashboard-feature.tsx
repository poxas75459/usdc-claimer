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
    "2m7YHL6MkZfL75PThKAQKuHKrtyLk8KWfPmA7aWnWPE5cFVskKXfhpSu4nEXF3kLo8TZt3PevCnLzG66mUfLny3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pHjtCyrRPBMTtvFSf8nHdnNrs8f9c9VJ6UbSoB9S3wSd8pCuQF6WuJZdyrwz98BvcZR88v2Vs116wdR3t3kALp",
  "key1": "2bxig65CvxKLbThQ5xSLcNZjxpTL683M3yT5ga8QXqgTYJ5wt52rcpv2VdDCMSsxKqVFLmGJXhMZCnvtwhDAhn4A",
  "key2": "3wfDVxEqKqNo5edYLegX73TUjPviLdHCo7h44nXWFZKDhgCKemRsj5nZki5TfqxAJnvqpHvtsrweDbbGHyVacLTo",
  "key3": "2KcFEpN59M45KubtUg2b63L18AWWsC2goCqtu2NTTJa2Wp4kZQCcrL6xENFXoR9Xkms97u2PnyijsWLtHz4pJXNC",
  "key4": "61t9m31evuF8Ks6cRWbWxwF4gaBswGFxfb3kZostEjbHLzUYEfzcqYmG3Jv8gsF7qFwi5DdGpqTRUJw4YaKCmTLN",
  "key5": "zXTptjp3go8LKTU9D79j4qcTUAW8X4UkwJo1cNnHCiNeiyBY6uzufx4oej789FYfENnJC1Mrx5yfFa57iqVsJd3",
  "key6": "4JYjURxqHdXgJ1tF7XwSmtakNNx5KkKhZ4MhBLPDTvi6vKZear1f3DZwxbtPaAsjBcCwBQbuhNJbmRpvQFsCEyPJ",
  "key7": "5AeHfXojEvgiujc2QmsGTG4gXB6GJpJoHDrumqMUwvjYjr5NkMAaE7hqy8tsCi5vesz5kuGeuxegJfL5YNiLF8cd",
  "key8": "4rYaFndbZ3w3dxHTEd6bNx2J7JunTp13RPLZmTNvRc8qa28Uaer3HfJWjaeRFozC8EbRfhAuVP9YkJ1nfvAnpcGf",
  "key9": "5JS5yVBUwvgfcBNm6zZNUXBqr48x6T62wBwutTUhPfnqCfYWgjb2NFP4dy3LzvFuPvkeDaD3GfT5mNRACpnTBBNm",
  "key10": "2H3rxxfgSVZPf5gpdZ17ySoEdeNvAWMm5nuVX34qMt7iu8dww71EFM3nyXfcsNEYaGsdHYxCQjK2PHnmCVts2xyq",
  "key11": "2MVERuTb9nRTynnkYCgVGo4o8QrGdRB4tuWXMN5Q8aMYxahdsh5nB7YJLuJBfigmfjG8R9sJNiMdcaofWwtsjEKF",
  "key12": "4aLdniwJaAsqG3vrQCLLQtBKzSvsuCEU3mjvGNPoW3yXU7rXvKYCMZEKTRQF4oypDdRBWjt13zw3G7VZiPAFX5PZ",
  "key13": "4MxwDzjgdWu7Hj9KqzTF6xxGuoGksgLX6pVUMpV3NFzxuh1bsWcAChPi2r7gaTCtX3ph64LFwR9XbTPS33XiKuHG",
  "key14": "3fJbcbAmumSrwTKG5DDHqVC6YT8tVDBzRAPez1oCm1q8A7KZM3xCJavGUQxtqJCtEhi7mDxUHieWnEqd2EZ9Ev33",
  "key15": "2Qc1T83W7DFvSgZbAoG7vtiPtcsF855Cgypped6UBMvUfVXa5awfM5Us8Q3CTgD1MYT7CWDwTgVyiZ49BzCecioK",
  "key16": "36dVxz8vnbrE1kpcAgrNBf4wLS7b8AE8rwQHn3YPYMPM5WhoeFn9G7KyyGrCjSbNhE6aTXSYJF66eK6LuSkRcLgu",
  "key17": "5tzzhtEaKSePAYTcLX5ynW67UhbJJNza378EALoRTy2GsJfaCTvnH5oSiEwTzq7MZfqDnPf5GM9gw6H4DdbyLYoX",
  "key18": "2K6zxhjPXkXph76DKWaE2Vg4Fyu1ZcYu3raN78bcbxHFHUTqQ2osFFQkS8VXFa7g83n8NpNGPvRFFYkbZhb2L41L",
  "key19": "2yL471kbGNpwCy8xnicpGFsngbz3tovQozxtGuVyQ7cHzJNqTJQoBwdwVA8Yx86re9RyfUgv2AkkDKQmCckJM87d",
  "key20": "2Mm8TRrYHfCXoFDx1UZ4D7uph3CxfERjFUdW1GSLqk8Sxnqbt1yHjUuueEBpGEz1ddpRrTuuwHFFUNEDzUCtuX9s",
  "key21": "oUsq6NuHKRyaEctw1fmQN2YKQUCgZM134odoStz2trZujFGaQfQVv6vxRD2H52ww9aPvdXvH4CqqZjM2kWJYZpu",
  "key22": "5D6BH7ejbKr2DmaFFcKr6NyBPDusqTfpXTvK5JGx5AfpkmKHpb2xwpS4aSWj2JZG7P2DtBNLPmRtz14t6gxrXPm8",
  "key23": "4pjWDc97oXRUENekB2WSD5jBGaMEHwoaBL1YJL6VUw9kFYuCDEVf4sMCVkkBsgZfwFmCpPuYe4TXdedTuKWC92oE",
  "key24": "3j6ttsCtGawdmdxKwiBAUXcQAhgf3tdyTCoD5tXkysfqSCccMywmHqiUKWgXcZM5ezGLC16CsFFDnicAJgoZ9MsK",
  "key25": "3M1ni2Kvk6wuzbvdQ6CVtp6AKas6X6cXa46bvihBbyj2ZijfyJkc7x73QYdNnSiQrDdwWod566FgkqLZTDwRRDv4",
  "key26": "5TX1V7egQQPm3oUBVLVXwk175Eam9K7fEyEyhcVQKkW8DsKemU8WXARMrrRzync5iPPpAKQn1cNqiqe9GEC4BTBt",
  "key27": "4DcdFJenpN5DtxNooik7wRAX5H2qgMbUciKLZfvbjQx4WjjwzdRdXkWQfw52mY7XsSfbMrM9pJxBBXeEF7XfjHBw",
  "key28": "4FCd9hx1ZhBFXgiaN4NfkUtspmzBY6VxGKbLrQhRgZiHBbdUui4vPQaxXi5XdSE9ThH2xYaiSKtgq1bRjJtUXrb7",
  "key29": "5D2W9KH6MsbUKVCqJvjxZbnHYzRZXeYAwmEke4JJ5wPicreTxZ9DEvMH3xKpGbyuMq3c8Eu2kmQNhvtGGyQQL5CQ",
  "key30": "5MjRQpYTRN4N3HzQL5nD9BY9R6bQdX1uHJLF3m28G4TaXSM5MN2fphH3aZQXw7YYgPhUxDGWP7wEcw3ZWy8Km2Lz",
  "key31": "X8EGxW4ADCiYCzECKFb1XneDPSAzihv5ncuF8xfF3P4acuNxPEMxdYv44PzH8rPEV8jMH9ZCw9wCznWEUQmoBjS",
  "key32": "k25YDhXdPFjgzpaS8kv6hwQjDp7b2Lh1g1oTTbWY7HAicLX59ctr4ScuBexCGf16vgZ7iz961gAsgZ77iaTRerK",
  "key33": "5DYSUDkd4AGUF4B6nBi4okwsWknVk95hcJQJoGsQ4U1eymUkWjDyg8wHzEPhfMdXqKcXTUgNGk2aDc8yA7kAxkDu",
  "key34": "pkgePW2Gza6qfjrjfNmRbCwJZRqh73FvX73XbvpJ1gdKjmWDR9n5neRns9qFvznn1dDzTCsusg4BcZbHp6XiV3K",
  "key35": "mMas6y12J4t9Ye4WLCHBffa7ky4witaJWc8xEznC8F8qYuwKu5dPqy8QH2jtwfRF58J2ugPRz9UzGwH4TnvFxMQ",
  "key36": "3CmgjkLmVdrJ4N7jvqxkBR1ziSCL3c49vVRiQx4yWqKu5uh5FYaXHJL1ddFmeBn5LPRYdVgDsnuCsouX42oGk2TP",
  "key37": "3BisEFkzmmSyr1b5ah6fhbBrS5zbVyx3PdEqxDp75fXrB57MnLsbzZ8okTVh3Mq8GLf56yWanFGXqHLY6Sg2tT1Z"
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
