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
    "4N98atdGWQzTMzVk3wVpdUvenN14DAe5yyLTvfHjv49hRcS1hszbqhL7gQ281nVg49jLDj6eYhfEwLJiwE5WKrWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3TMg6eiffhzhzg8K7vvviLSNpwks1VP1hX5sLQiSMxhfPYfnTat4UXYecjHRoAtoYvcBYeKs2G1NvbhHhuDeHk",
  "key1": "54PAGGX1Wg8t3VubzrGetiC5AZFzgXfVfSEcNcqj4kB37kfKCGQzovZ69pkXMZ3BPgpJVD4JRFfXZWk9nZAUGHvp",
  "key2": "65h3Yr8wFYozgvVJiwnxizxopB1cSqHr9JHVDw2PMTTLUrBtBoC1as8j6wcjkMsfpxqoMQFAZ5Cm6wYdoGpEciy6",
  "key3": "2aVKehkinTpL36B7WDcME7vUL5oztJ1UaVjJpxDN7TBbzwciEhXT1DBPam7yx1scdU4tLMmNDvBVsFynsmT222yi",
  "key4": "NGFcie9vGpAKi8e7kc4F5qPg7sLkhNN1UX9zFYgnwatHNrQrTv8NnghtvHHywHpQLrsNUSZFcZimmHXc1Wh4xoU",
  "key5": "35UDbZ3g89MP8o36ijQzaridJnuvLW3zJaMoF2i1KrkjaLwkHYpTW8CY2C8Ws82uzQQvGRXijWVG8VBW9C2zvBKd",
  "key6": "2B9v7MdXhAoVnWqwvf9hTNJuQCaYBezAP3x3Y9WHeCgXw8W1ePvKqzxGcsZQEgtdhve5PargkEfnrQQPsffUWdUE",
  "key7": "5eFHSjNxUJBDvZsCKuZFzfzNJ9ATWe36F78gJdwW64tRBaESqfyMVAHZUxERAhYGrU4BPyTT54iQi1BgT5QBZH8s",
  "key8": "2oLxdxa47NkWJwkgkqyxXwrzYFM9v12MEdAaQ64hCACb5tEJoMmk4HR7YZhKcDdRbi14aQxyV8aj76Pr7d1WucSw",
  "key9": "37LsubWiz4cVJHHor3UgmE2a3nEs1B3rDNbzett1Ce7jwjVUcs2tJJFmNrDovnrZPfTcsW2Z9XG3yBDxRgpgbohW",
  "key10": "p7DyZEwChkYm8XgGjq6WTBXj2rrL32h2kC6ozc2Lhc1UMS9qqAg4EFekiXsGh3zxcajSiYB6Re9nT7jmtvW8aq9",
  "key11": "5Z3p7GZgkxeMVuSdYn2tTQKbaiyVW16AkoP5jrTBY76uBwKGdGmUrYKV4oycqawdb1nyGywsiTSYjTaUvjU8NFb3",
  "key12": "3wMBtU3Jcx6FigRcgpfyBxf5uWw7NEMAU6wkZrhDnJivNJUemae2MPMHTLRHHugHGLnP2HvSiXqF3NbrHwru1nr",
  "key13": "3stEheXTfKVr6V7ZtfHi3yVhLUnmn2rApusYZQ9siovE9Gx8eeR5omsHrjy8yKH9hiMMSdfyrihjM96duZc33WPe",
  "key14": "4Q7AMegwFjvoX5UmqBAw8DnQaUtLh4Z7Gkfyv1ezC4X8CdEthpCMF3NacLECeXaWUNwmKPNfJe69XX5twAKXLZF5",
  "key15": "4L3tYQNEXhvL9uJNojYrtxBBpSuVA8AwSNvM3vErc2HrEBfPzqmntAJgaApnHwMiBtWSQW481TEVr5RZtXKoUXei",
  "key16": "ecPCrK4FMMJ5ncJeZ4MC67GYAqsD3CAcpzU2Fp8Vh3vjAZYGsdVGjXuJgMNx2bExNQJHaQHmC7jwQsaj8r3G7VN",
  "key17": "2oqPtnqti2pNVSM2SazQrJiUPACjZSrKBbUyMd4vwPd1TK1bnLuXZNw5CQScAG8hP22iWrm1XiNAe22seyR1Uwd8",
  "key18": "2sBHkeib1VUbQ42265383fYvbmxqTaQmCDX2fK7yNurSw8phJrfHPbkvFxms3j5MtALBtsHVppqzL19uox4boxkn",
  "key19": "2CqXyek7jBfER7MNNfSrTpH4dcARbYANDU5jEn9eE54tansDyCVwTB9VY7T1qqfbkN5vKgWg6iBvFsRCeD6Nzdup",
  "key20": "5QAKsRpgggF9N1SUqSREjXHsnneiEN5qihSToU2HRZWJsPNb4gZzBbnmd49igYbDhvHLyvQNiLgttjsZn9AfL1CG",
  "key21": "52tBbKECjH9QhiQHhTUdFoq46QRHxjGWUtLStPZmUN3B1icBhSi2xDdJcSQ6g5DLooTJpuEBP8VQ1aCysKJnF8TX",
  "key22": "iSq7QG2wNKNcaGrnyaDwrV2uCwGYUi6LTyx7UH7c5NKMi8CF8rnraVfg8YhrfUjYTr8frRz2eDGEjkyRbEzwS7C",
  "key23": "2a6H6xPpFTnBYJyxrUj51u9yDtQFRBr6kXFmSZs1GZcWYMjQnjStqYq7wYNeLRbK4WqbXCpMLPhrtc13Bf9Pzy6q",
  "key24": "5xjotm9axdFFJBVaLxQJPjp42pZNCZi2vxEVB4V2X6qyRqQ278YSZLEdxp3Sc5Fe6F6PexcjPSzjAB8D6DAKD7Ct",
  "key25": "2pqRWLKkjXQiSJUhr3EsN88hCf4f9z3qRkRZm6MXMdtHnah83Dues9GSfBG6mEPX7NANS8axnLYjThvv9xC5Q1G",
  "key26": "4NrgwpC7h6buMLEc4eeNvLicVo4iG6q2YjjgxWoTeb93VYLGGkSpYWe2oE64XZ3XYkRs5fSEtznES3rAouqMB8kX",
  "key27": "2Wd7jQJru1rKaqKRAFC8ikpugmYdEDdQ3VH4NS2s99aTB7eJtQs2Hy6WAT4Xc8PMQ8brLwj9QccYk66oL6P7RL9R",
  "key28": "3JNJTfaqrg8M9xkq2nwVZyyh2KK4nMX4fmn4kRZSZTQrAHAXvPd2QdDMQDEHyPbGUXJvm8vNUx3EjgcP7oRwY6DC",
  "key29": "mgv1VLEYdCVFMRUj5LTv7necP1HyWUafaDoUEJhhBD9L2CXxE46oyYxjgBBzKHC4NYCt1zJHCGVXGq1eUQdVCys",
  "key30": "jCz4VJEgafdFjo8nWoEcUezeBiRNi3RYE3hkG4v77Etnj8tMeNPLBG7evon9LP3LT9MxHhNUG1PUSWAjpVXgDRM",
  "key31": "DvARtwDUpcjRbSZLMCqsLZA5sQenTGaX4BMqHmVVBMwPnRtBFv7MrbQP3TqMz47AFgJpsKTbKFrg2vXUYR6XdCb",
  "key32": "2S4a8wPRcSRXT6qTf8LKBXFACLqn2KAaBSup8eeU7dJiMtDhEEceKGgGU1Z6RABHbeU3XoTNKUJbxJb4FbH7aw48",
  "key33": "2R26mcgxsvux7eiLBeD79VVXPHDmBDoYi2V4yBM1aToaBoChB2YhnLRhMd1NirqsUeFgVFivMkGZn62jrM1MmEbS",
  "key34": "2jeMk7nwSTSnc3PE6rGF7hzbEtdC6LUhBf3LdGVAxaExnPinBrncJsXeVZej5ZjkVvp6QgPnQYCMtwX9ue7Rzmj6",
  "key35": "2ReKPEzpRAcwtFa2ffv3b5DFxRhCjft23S8dzngnTFkeaYf4QCxGYiQdDCipWirboF22WpgnQJrwotjpZN5D8vJX",
  "key36": "3HttFAL5wACotrP7WaGjxbbPeVX3mFDxmvFu36o5aGXzLbQCynbM1FBaF4D5x1vF7vkZ9Cc9KnAHwJJnrfbVXn8G",
  "key37": "C4pgHi2WNf1nQfQ7r1Eu8NuBznTywajF96DPVKGQwfmZHWg7RNaEw8rewD9Hmeq4qLUC5pfQDDxdgscE33HbUYK",
  "key38": "5YJNC6D5A3vSP1sN5TG89HU4r3p9keweVexJkiVFPhVoTKswDzdi8gQ7f9SZPUbyiDXg9nfXaWQhRe315TUi4bzm"
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
