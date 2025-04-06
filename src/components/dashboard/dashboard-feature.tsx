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
    "4TkZ8ATAffgGGDnvYJ7Tm7z5PJCTBHKcArNyEiEaACKcfxHwJBrUMtN6ia2xXnb9nL7z9CrPGF1oqAczojzpFS7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sh4Ce4fDw7rrMAAyq8jemu9shRHqsrGcZTWDEHCtq7uamnh69ikiVoDVffVFtWaGvUpWexjaFmNGitfbbGSxn3x",
  "key1": "seQoyU5bLL7Gsus8RGpsRmssQXsrzGAgBYQfmgCd1Q399us8keFx29zeJK2c2BUsqR128mLhs9Gs1mzxRqgoyE9",
  "key2": "QKVJ53ZrjXcPsJMkLj1gqyaENtP3pyK9BLWs4Hhoo3WuHPKV8SWTZUAhBFC9aKDwVigKDdjdkmyHbYo6yUHkdAS",
  "key3": "56RATSWC6aYN3yPEceS3VhAeFSCk6qupw46BE9YP1rZwALfDJqzWevLkRr3rHVSXbKWtragX2QfLcUsSrpbe1QtZ",
  "key4": "3Xpem7qnRU6LJmnbSSmenxXAMN1gVt4BymF6anf5S9prDH3hdcVceMKHBqzwnnRyB19DiLaLUBVwVshPxb5VhsMH",
  "key5": "2RNoTKaj6xJTG2kzjrdQK5FWa8Qa1jTcDQ5i2EZK5SfgVkcB1Ff1nLji2AKbrCZ4qwaHsjF5ggJ7T9xR2xmw1M6z",
  "key6": "6349Ncc9QPeJFra5iXTSgYZYGkwNDdXQVKtEGNGhmryNPXsNvWyM9h7FoG78BCFaQBhH7FNsiS8y63VuVaBTg5Ja",
  "key7": "27ffuxPet2WdFktLUwZzLpbVsXzQkEd345wDjiTcWRxzsEG7U5GjRWtJVopGTSpB8Wc6VH58zeb7YDoxJcfSh6Yg",
  "key8": "5eXDGbK61BrgVyvjmKMNG9g6DYh5SZRReAXWFtiEN18CvjeWCsx4HA7gGJhbga568nM8LCrwTdrg6nSQ986KjZ7f",
  "key9": "pUqs2y5wQ4makKY3yFpbPNo6oRhcuLRC4Qs7rPofW7tyrTmEnCFTovRjmY6CK8do4RESQNX942HJcrwjuJAv8aP",
  "key10": "2jPvX8Lr3sEezJA3M9GUgM6Kq2wMEjF2384RqpkmbTePdhzVQEybfthQn4FHSmXjjSVm6JX37Bdq1WLh7Ua5yNSg",
  "key11": "5HANgtFJddhSCiLwqXt7qxiyKqeNEXH1ZtM2a4dmisDzDFvQ2QT1rgHpVzDEWkqmKjYBtNFJARiLunQsC9Qs9U7m",
  "key12": "2SfkqX1Vh2oP8ZT1Y8uJxknRumYdNoYpQFCc59L1J5Vt6mDkyauAq8pg8ugov1UnJJeHR6c7ibp8eD4qQFuTFrjv",
  "key13": "4CR3xSoFEsRGZE1rVeFZkaPYoEfiK7BWyNg3WNFSSM4Rw7tb1GVAqHUZRQ8HKy3Fkm6aBJgvQMNHHqqDxPbHuKhk",
  "key14": "2vJ8CNjZzuf5BCT4N3Sxp8wx7ffmV8wj4VjkWEVMjn7nA3M2mnpFdTQupEgYuYunAfgd8r5XDoKXWGWrJWE4EdHW",
  "key15": "4WWeHve4Lc6E6miwtkgNVLQ535Wz6DBExTbi616dwGDmzgoLpV6t4HaXJmnvVbGMaTKceMx5XYR4VpUgEjcV2Hiy",
  "key16": "4jUKQrRqYFvRhgpAmXRgnN3py8HBnAZvKuVNns2GXnwXxYCDFFKN9xcq31tUJLGjNCtUeeKbosKytH9ZAi5zHEcR",
  "key17": "5wE5reRMfNbhNo95tZLNoygwRD67vCzBs2QriNZA4VfTec3Eppj97EZoB4TFUU2JpUz88iNPD2CnZ3JhYE61V4QN",
  "key18": "41YaP2er9UjqN6hhGTYJdGdtQtdzFsHQP5dXXQ7BJnaiMnYMf1BeupJ9VWbBtpow2tCgRRA8PyPDpr3jAWFNXS99",
  "key19": "4omKQ2gXMCTUoLGu42vuFgK2SRv1zFGNPc3QejpDBjtvt38pCHGDiNuGiFYDWmqd8DeSWT3yxjvj6vX2WJHPF8WX",
  "key20": "3fSF2tsFnxELHv7Q5qAdMC5xvF9Nt1EFjeAzKjsq58nkBkTCD9ZGYG6KYL6yPqGvbV3vmR2vyGGAJbHDfdP21ZLA",
  "key21": "5XjYjpn8FcG9qH8UsQ2KeBYMhFyond4EEFnibuUYuW1YtupbHvBpt9MyCRESM7BS9Frk5n6Sg3dEwX7W6GZQRCZ1",
  "key22": "2jTH9SdyktztWmD79GxL31ndLPWqmptxTgHwXtAtQf8iqf8uHkTaX53vDju9iDAfPZRti1Fo4jK2J2a7zYfinu63",
  "key23": "5KvxJPkvqH9GWsipcMaV5n1divWitvSfY5Tm11AyPEmmDZ5YJxnaxzjbFcNHhjow6TjGnPB7FXTXw9bJaDpKjeUX",
  "key24": "235i6XDCfTRuTSqDYGAvfHtdrRjfBn81WXbjMDJgRPyTXZxxegRVv9wRmBk6hAxHQnpdAQas8j9ASZS8GyS72LRc",
  "key25": "3P9EiwPCHW96w647UcZ9n1Fw27FugZJjgZH54HLeCf3Tht4jB1c9u15h3fUHAuAzo4iqtVrBz1b1dQD9iGpgN74u",
  "key26": "xLWyupTH1R8i57fbpre2dYXADfULDuEJSJpe1qxzNfqg2DHZXZnF5nBsr6fE41mHy9ozsEoQdzGUSyeK2ZFi7Qo",
  "key27": "3ScgYKmdd1isQx3GYmprRSjUyKctTuVeTDbDWzq2cEWDcVgUDhbNdbMw5ZNYwkcKpHGDeSYx1R7pUMVXwENGBJgS",
  "key28": "5NYNPH4T5KbAg14NoqmiFtPqXpmkDe6EEiH7w9DfMcj9vi2Fdkt2oRAXQpSpr6ySchjq1pCmvFQFAxC9d6qSDa8b",
  "key29": "2WtCS2vY2iycSDEjPHkjn5UygsNDbWSVZrgRozwPsacEiDGgQ2pESz7DAr4L7eeeFVBHmMYe5fxrWAUgPB7G2igh",
  "key30": "4L7tFXf5fGdvVFczrNZegGdgo5zpZuebcjfQV2DEVTAdMYB3GE8u6hFvf8yWorSFk8pvjg3mk4QefZHwsz3i8NUw",
  "key31": "24wyFoWoJt7j5o2DGzuT4ZXzHXKgxEZH2KSDhCye2uAHfT7XwjJnSmodFbGuTYG6Vxt8V3goLJiAjrvoiErYpPgk",
  "key32": "2uniuz6iG2nfgh7oaoZ8k9QSTS14B96jr1psBdc1khNba4BrnSsyadAxBrnohN1AqnQNdwx72ATw1No8itQTFKHu",
  "key33": "4nbeNgu8pPdC5qYVF2bix3g6nULT8Y7ohovHGVsRRy39c7Rb57SwzySpkt8s8EEkX6hqCWjx8aMyRck9pkBhoDLW",
  "key34": "4NtKM34s4AGaTrYgKeAwxekLAFGA1iUxn6sdQ5HVQ3SsWTX5UgfSF7Z2VY4s3RsZQ8tifE616owiP6UK2bo9XDSg",
  "key35": "5dN8ELVRwrFUWD3HTmfVG1p3UAfxr3UaG3BcmshgJkVaS9wgZJzGenTgTbcYZ7HzejayazSiVwYECyjKTXXcC8Wx",
  "key36": "2XhpeewUMrEvnm411LpD4mi8pj54egBYxK3CDDN1vTMbUuf9QQzCTKmu6sQiUZNz8CEKrkw6LHmHvEpYFRdGDZ6q",
  "key37": "2yLgpTK25znUtGjzZ2N5tY8vyGBa9uaUVL9dpP6xQyaYE3A2qbX8AGpKYBvUSbCe334QkLX1G7LXoRoh4hcH9osN"
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
