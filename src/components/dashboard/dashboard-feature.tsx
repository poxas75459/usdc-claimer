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
    "nMyP3LXcbrXetsyrRwDWAV3GEi8KjqnfzLCzd5Rk99gupyfSo6YcSrJEUQHNTD2cHZwvinS8nHZAk17GABBFFEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujR1VC9exifvq7acFFcPXBqQFEqZ4C7ojkx2pbGzCuQ7NuS4i9VEhxBcPPzvtFmzMUZQhp31BRgDBbNznEKnks7",
  "key1": "22URWtLNU6NXPBEvJ3ewc7iPYmFkTW7686pCvqPkPH1XYg23Aa28gpgBj6nTQkRhrVUwtUDCQxBTbnuCsJPt1Umx",
  "key2": "2br97F9aFFMUFwsS4wU4ErPHeqorwbhCvF2okwqqn3AmD2w3LFyM6jdEb3agKPbWaZAtajhjEY4qSXP8Xob2TjS6",
  "key3": "3VJax1kquCM2U6SpDs4DvPx5F7SvTE9eV6hbebhkKhYAkdH2VenUdutA2K88RXtpnv1puumh2PbwWQjs6WQhF8A1",
  "key4": "4bfwigiMqvjf2akLAZJgoBHUiXCz26JDQB5Nes5dTZV8k9LrLvmPcVpxEEy3uKkJLuaaa9FtfC7nscZMVn951sXC",
  "key5": "4PwsgCaX7s32JBPCzitWtvDT32nc66ffEhirxERoXicX76RwAzSPLvtYsTGSde8kyD1oxUsf2tCLCTg6vqnUPamV",
  "key6": "2B8LR6uZXZ2bhdYnFMS1ToEGLzJRVxPEUWgL3BqVcVvAjVFAP56tzjGMx5yL75MBnvBCyFBm4VwfZdYeAGP791cN",
  "key7": "3ZqRZQjyDGe1mEoxMcwRJ17P3kneyekT6pQkvwaofrzi6WJmHKeTF3qAuzYAHXmM1NEpM8GVAXWgQ7zfX4NsCA8",
  "key8": "2kFYs1u3gMMmuBMxT6ttVahwkwCDBBAJx7C6CcHji4BvMX1TauamaQBkq4HEwVao4uQNoTRZXcwy7WiwpKT9j5gy",
  "key9": "2aU7rdBBzDUARXzkiHhsNndDmTFwu2VAdUuzmDt2okGprHyxzR28sphK5N29m82RVcyxtCpDDXGUaeYtRNazTwoq",
  "key10": "5VXu3fXaPQnARizFX1Q7DG76n4CuhBVPVnzeAN5RKTYbHwDWfnkVbXs9pDKyEFoA6WPvcDHQfKmnrRVHtAQKHNzm",
  "key11": "3oRbNHfjoZokE1VqBodmsjsYE441iBiZ3dnn431EvfDUfLwwiHvCWF6QEZNUnbb2qjNQuT9agpNmogn7Z5rhVPRu",
  "key12": "4Sx6KY4rDejNDoFJtbxD2TWNi1zMEucCoV3pyAdFSr1nsiC9L5CnmSNvLkQGTxysHquwLHvRw5RV3gwmkd3VPKEr",
  "key13": "25Yeun6mcMzwXRKevctWD7Cc9i1vqhMJZfwCzwDYk3MYS6XXFj1bfS8MMGyyDBKtdt9rshChuLaXEPdWq8GjbdZt",
  "key14": "LuBYWuJceYk7SNcDz1XVszjEbzBrnUZnfD12uKKADJQmMJn8cSFW4qovaSXr838W86Hgy4AXjyynmSTNRX4Byce",
  "key15": "2r77YJLrVjqCmXzn9K9oDcmYpmfbtQj5SZZ2QU6MQDLBsECCwu6tfxMpPBYB9VCoAsJuqrYsmvuiFjdbkh8b37SV",
  "key16": "3LEjFhBy9RSvrAsYPWft6Qd7vxq7CnQBQ1WYjZzuiU3KwkZCgNUqi6xE5Pjn2Ux4gTdurH8DJSbd1ymcstKaFa5S",
  "key17": "2kpUjr1wM9rDSuZbd2u7eV8t2RMgateSNr9qZScc7FqdX5ShQkKgSPvaKzny5RNimnC2Ho6wDYcQH4bp16gmCb1R",
  "key18": "32f2bjy25VVg3U6pxzgLDbVLGmkQdgiVkQLBUz4Yu1RLXNGtfjByEJEnWVuXAbHvHd5jvojaoQ74ZHm7odVaY9VT",
  "key19": "2YB5qgSXTvFi6KJy3Yhe86ciAeLBGGkVX271ooaxTDE3Yxj4MBFnmtoCeoJ9ab1DTJT6ZauXeS1AhSCGvHkgwfck",
  "key20": "56NZsAwb4HGJvZ4D5Qt25t98G1CoTiCMVT3vKD1b77voGpQKwRZMtERYrE4HDzC5DNH7pRFEZRcvM1AKdJGi8FR2",
  "key21": "55GVGzMHPkBek44j5MemCJqMBrbG8ZFVb4Wy1Qmv65KM5d1gRMWy98Y198dXN7g2WnMs6NsYes8HwDaFLvuhhhyd",
  "key22": "4484JRJctkN5vieXmy7C1pCwU7xQWjB2W15wsYkoTSRG7y6Fm5SqTqnWK3noVjT2QGkW3Vq4gqHQocpGyN8hvgN8",
  "key23": "2JV7XWvPoMEYZvcVyj4tZSov5xo25xsVi7TWUzzgjJdAGPEGHrP8tn9HM5YJmNZQ6oiFjCQNBhTXRuYHJH8as159",
  "key24": "2D6SvkYG2KxTW8qHczyAm7c6zBjkkfqjyAuEJCqcUS4Cf6vXHbvxumXh55Cee7AL7gU6VgNvcuhJnEY9gmzoL1Th",
  "key25": "4AUUkbF7HcqqHCDf6BMsJyaRivWG5Qx6A5STkFf3b3HDfpkS2JM3LBKZhLnw4BRBjYWBjfQu2x7mR41HBxPiysWk",
  "key26": "j88CJHgML65WQEHaWDv2FyeHN2qRk3YgSyVa6ZxEWnG6ZY5mi6iVQGwjMBGpQpWJCJcLoQAsKedDN51B2sxPrGN",
  "key27": "2RExHsK7E8FG53meetKiCh77rw8KwhPr7SpSB9HjEfG52TCAwjn2kNfxqi3yRXkdF4MPMr9KkyZX97UeeQvoUzEL",
  "key28": "5TSGT3q2QGX1yrBxCZnxBuSr6QBX9v1zoA4VJTgZJFUJq9kJwxCXNVVmbCAoJi86wkDeknUe65P45t2GWmwB9hc",
  "key29": "2MLfDLJwuKAZEszXqBVjHU35SRPbo8wrZxWaXugNTGYGv9fVVRaSiLxsLjJaYaNZHA6tHW6vMSRLpY6jFuQSY41K",
  "key30": "5Xaoo7DhaVfdJ77yRzYfR7YgTJZ8uQpQZsqrtE5wnoMHss9MxBunTAESkF6T9KXpqWYJeVvQi65pcXVyQ1cbKreX",
  "key31": "5Mdx6kCEzd3oVgrJY71RnMq7FGV1j6rZdQLfK9tdyMvJnNfJ7cMRnjr5teKHCuxpyqqzSZCqoHFsjmDK1XmCcv5S",
  "key32": "4peJKvu5SC2QHrKxbXbH8FDSgPWnRhdq6QHEzjw9Bij2sTUnJoVCwah5LUdFxS1j5rPgwzpLU2s17b4scQ3sM6nL",
  "key33": "5UXbeM9ZCy5XreyYwv1C7GNmo3yyS1YfsJa7r5MEvCGfoPAE6duxCv9N3uzwfN3steqoNh78SKMZnaZ5nptpmYL4",
  "key34": "3GSPZjJUvPU4gaY83vNXEfwHaQs1HdEkZ1jZx6sW1snvjxuwhNr15ytoRhSboknV1ipmdDpH61dvfnBDj5gLKmHG",
  "key35": "5wqriBYCYxK8PzU8rtHa7DtmRprKngZBT4K4QwBm47cYqxJUt8vYa44PLNK4x41cSuidDfrCee6EPh7CZ2N3DzZh",
  "key36": "3SCF32VYQhjwG86GVUM1uc57omuhLmaJbTGPwx4MiGSQNJWLWgjnuCyaPhWdiarAimSbYtdNkh6BzR5tvgSXG1N5",
  "key37": "59jtdcoYTVoZBRPLhNrrNv8VndKVboCDN3Yu6e8QP8T1bogDb8Jq7v3uRxAJva5fYi5XKw7ahfnL7BA5X9zEkpSS",
  "key38": "5pXAr7xx2sjzrSsaiXuafopdn6MfsVGYv5JJuHguH7j7E85e7hdVQisPwrrHt125wS7zuurx8KMnou1gmMqHk52S",
  "key39": "3doxgsyQtJoEq66LbTWnMNLQUwzRhfzP9H1479q2EcTP3g74AvwLdthyMvcu3fRQG1orXnvwKE4KSFbYhnGrjDas",
  "key40": "48bruNrJ1nwxsMz5zFnq9FE6oE4oRdCR64nV2pkT4Pp38W9zoEBjszBgyJawjB29kJMZMHd5Mzo5GMGvCndyKT5N",
  "key41": "3suDRcfYrJv5DWGwjbiqzu1UiAHdUSmbtYQA6sotxT89wPfcV8R9fLWN3sMUbY2Cs2yj163M8T6G8AQryr3tddLV",
  "key42": "eKHsPiH6vosUQgtornNfjG1595E5EFAhniC53cKXcdm3CjXScLBwLqYUN9CeDQhKF8Xtn9aNEy4VuMfFK71wrfw",
  "key43": "4LNvUkiGcJWNTEpyu1JB2MpGfKqpxXfe6GSo9Xrmp6DSp9sgLdbVqBuaoWinrJctgck4eAyfpXEiyDLmhqsuiDvF",
  "key44": "9bC7ZbUMwbDUJSas4rCLDDBHJz8xE4S2KRH7by9Q2LFQQg6gxVUhsz8sni36RqJjmUDo9mcb5fyoUPhrwVq8HGq"
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
