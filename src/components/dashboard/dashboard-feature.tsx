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
    "4c3f3yFUyTqWwEGAHVXfkpK7m83FY55syc4VKrNGvf8f9C5rqHLhbFrXLTzuCJdwZkUiEPb9sieLZMcEJMcwpkos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jmb9VRMFEgF8zVF29x2wvFHt3Bafm5PoLGsiF2CGUaR8tfFcHFASjg6ng8HWA4uGPzvrLXtsUBsE6ND6evXaoQy",
  "key1": "4VYeKbN5BWtoH1xGbWnZgwfag9YBby95Rw1PaSSgoSLxDkfzwVddWQFAg33RT3U2s4WZX5X4ADagLi7BXPnP5RFP",
  "key2": "28VujpZeMi3nFonzNSrgRtgDGMTTDaqGzqAjAauq8J9GmJthKSX6Mj8YzdFJG6AopogfcFQDY8NEmqCtDyLqej2m",
  "key3": "5PB6aESA6xLSKPM5PpDcjHwn6WJEvnPUoytetMSFGY3r19p4WJrG85fNYe3BQCSRzTG3UDna3H3Tt8AAZXheP4CU",
  "key4": "TjwrvxV77JsWLZDT1cePpDxLKvkSViU9AuAUciYMTAmmsaJ8K4ymfSA16R1fJncaAT6qcxKVx5VQDdddEXmkvgf",
  "key5": "3fdm41P7znf6RoxayrBKqxvi9yZaoKmrmZ8UsycntAsUcktcRjGPLrarCWExcmN8fm5nWUCCxDyo28d21Hkg1WWk",
  "key6": "2aKmgVw4j3yH54oNmFPGZ1M16BsGv6sDvGz2xvJPt4miFeQVjjFa57XYXQEK335hYCzKcQ24Efh54bz7hUmAMGnh",
  "key7": "4xoXT2zWCG4pXaLLN4THyd8KwRsKMcSUzPnRYmWNda4ErDafyoMd3heA5q6m18oiScmoe4ZpK1k4Gtiqit3JBx7F",
  "key8": "3X7kRuWNqHvR773V3gpLESZrtHMNtq2E19zw4hLCq5vfL76jiY1WA5H2QDQrmgfyDfyRf3m12TvvDf9sMu847h5n",
  "key9": "3uFXVFkLaYwcTHrt9uEVXPrjC4FGwhz1EKAdJvrM99TVYn5yofKDLbTMSqPL9B5C71W6StHJg9pU7YSCDYoxf537",
  "key10": "42GiZN8JkopQMXWavYcTmcmGKdsTkqYfnWcm8D8tzQqA7sXGqZX7tMm1UXdLPqX3zVFqUXDrmP7ekCYd3srxZSBE",
  "key11": "5Gyx71w9TTa66iw9QNrA24EPEwZ8Ae6tpFtmCXChwH5PkjH1yNZHRUC2LtkUnN1Xe8Mjeq1zEVQziz1TZV7JWiTS",
  "key12": "4ADK3T6UdCVpW1iSAAeJcw6teY4VybfWagwJTTZRVTumw6mkPuvmyQSKF5wKFTkHAkC2N6oeNKmFeKg1yLp3JDCr",
  "key13": "3ajk1tkDxsuWzTcrER73gDEnCsbHUHUAi2nvSLnDy81eSqDTfnNvy1sG1uXg2YawUkxqL5kLRU3HeWzK9GHRtXHG",
  "key14": "2RLwGauUcMzWroHxqxraEUC4rs1vX5HruGbKThEvVpn2Tm4ekaYBYfZeCtBVm4j2g7CFhyoMpdvXNfJkqx9JvLii",
  "key15": "4kSmLEFqwVntH8G5pidTLEGt4Me4RJgh4WgJridoDN93tM1gwdP8TjyPaSDzwfps7yPZzCwfromJS1BCDovgY97",
  "key16": "TPwanG77LgMeX3GmsbcCQQstLjCPmKYkYFespz3tPwpXz5KrXs1qeEYgqSBDChd3wVKmvXp3a3bttSi82QQiKRR",
  "key17": "5QSGn2ZvbFyqMUPwsoMUFQzXCG1eRhJZedSsTqZAcv58d6YhF8aeJY4iX3aWHAx4zitQJUJ9BhnHQfqmAykRBkq3",
  "key18": "4QdUpY1ngvxcHohd2YL6mU8A5EFdzEWZJPdN2iH25quadPNMdFLrta6voh3HhLNUeuzEf4LYiwwY2LT7xeVEYa7K",
  "key19": "dpwVoqVdupXhaazSzrbEwRLDmzK4oUrHW5HV4tEu1A4K7dQav8QLgRfxtFEoK3Qsr8a8FRQmsV23o268M5xCPDM",
  "key20": "2MtRZ87AW3c1bWqKemDVxcfEkM2jZeaNKvaipp1wLYPfPz5k4XWF16cFvSJToZUxut2cf2WPNWM2MGrohvMDQc2i",
  "key21": "2mJ3dbBjdYcZSPPGhrnERFWZ3BrZQ2xykGwi7khiNnoVV5MXzc3Ky7bYoHooJ7CTUR6XsdzQXrRFEutLqLWDzBfn",
  "key22": "aaRrgHxE5jfaUoceNZNDaFBHaRXgcNP9KAdsBz1xFBvJhNhC1qjsucYVrvf9m83Rz5N6jCpR8656Z3GGc8LWYzA",
  "key23": "62CTUygofufpKWB4mZvURywJRFHw2bBku4Jb78Qqr6G7KMKeiaYjTceSGpXHDTaKdGNT1d55oeHsXuTeaQkfs2nT",
  "key24": "5oEXUV3buCniSkshDXnqV5WYYbwSMApKAicmTijz9QeHGsDrSy6ZSPnRTx6K5yt8EdHvpJiEoWyyKBqo1upN8KFU",
  "key25": "4jQprU2NzGC7fWBK4ZxRvDLN5zsxRvn6cDYrVBS4g5bDk9wnH8hSArj5UDv9i89y6HxeRZNXLsuyMmKdV2QcSUvy",
  "key26": "3pZui8otoy9f6RAbnKqtE2PUgcav1Wsktks4A61JCafzCQYRSZAECZXNahXGTQiKz2WcRCpcGdasqdJpygf2FrMG",
  "key27": "5t2M67NH679iNb7Yp3A4hh379vuB8VqErFaXMutGZZtqguWSmybbF8dDBwJjSaYCEBV9vstxBJw7QMKT8dN9R6bh",
  "key28": "2C2wGEszDPvpvkxwf6RFcVmGuycYopXWEY8tcdzvFypjWUsUhW6Z4RFJXawqFL982draKQqcnsXWErs5Hkhp9AUt",
  "key29": "3dbM7CXReTQu7ninQtDjf7qb1yHFj7TmgkStKC4EMW2uYzRgS9XCUdpTsoerFEGH6fvTt7DU5eR4Vo4ryXhYRLsi",
  "key30": "4sDoqKuEbE2wgGLKkcSRSwnK5RB6fgnAFbapydjKHyR33D5SYm4pZy9MNqwqWCXw56LbV7H4P6i4r2mpkC3WAtLk",
  "key31": "6bhFHnADM4TL8t74Ha6a3B88UHpdnGw7zLmzZdWHUkN8YawLYMfF6Xra3Er9SjKSCsra76ptqovz12VYvUVbkDb",
  "key32": "5GxWRjthSPvtAjHngZLkbomouXM575cXzc2Aknhs2kVx7QnnxygupoTNeYLYww3xnoH1R93JjJnYTrWoTgc9edh2",
  "key33": "64CugWGVBojnxGyhCqCY96F73FzaE5KKpMadQRsUz8Rab6zvyWnzvWGqjWo6JdfA9hMzWrzjNRKnmWcWJUb7kzqQ",
  "key34": "5816QEvB77euZwQVvCNEBmMUM8yQuz2eNGPXxEwdCNajVqwVrp9XXSV3cgCFG8xsVodLXbG8QjLA4nM7N9a55LNN",
  "key35": "3DqBqHo4Aqg8i2JvbgxuF4iJ9ppUGfzkGB1HUWXXCkYaHmkDGkThN77fGsMoUqc2Nbg8i4TXYoLx8b95iskcsUX4"
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
