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
    "67enJiyHvEhfquJV5pgfo9cwdGHdLYyRQfg9wqdUTMK53rDGiUmNjcaqRJETaFZb2WQUJ3GyAaDmBkvhg4UW5tK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pk5EeQGMjRSqy8QDV4ard6fq2rYx9AZTGuqGnirqFVEvbDGgoCjtKVMuxoLk1WdxaRGaN9en2K2WreLHpmgX4GM",
  "key1": "5NrS7euQb45xZUoU1UVDjYjZBC4WD2wJ8PujoSebhwcUVWASywS89KkDwzEhahw8sLXPrEmxea4B4h54SePUMxRW",
  "key2": "4B99QX5HyMEVXfPsJF962jPr8JNs7tor8aDfSRnnCw3vSDZ28oUSYE4e5MJ6rHbqp9tuRpoAKrRu3aaPAj54fMW3",
  "key3": "2gLDMstX8pkjkNo1yHn97jMsHrECxrVJMzzooVuhyecfEAwTo6Eap9U6Wf4XFDNKxKUJiaf47AxjknzsRddcQoPW",
  "key4": "581xTeg9g1XG32ZDqLMDMEhYUNPUYMY6Ut6SnXzwbWxqvfVxFKVsmFREwszApjky5dVSkqVfhPEoLWmkUGrFchTf",
  "key5": "4gDn5bzPk6KpBafGavstrbbyP3Ucs5epYSXwqwjs71Fqq5YdNDxU5gFRaMJK26icPftB8MAVsqrhuQbao5uwmvaH",
  "key6": "5PcSb7vtgh7frMxhkkbF4UqR6EWtoeuE8GvXz7FemW8eENXFdSBeDuFPz1oGdyfwG8Mi8NVyPw8fAosbRaAeK9Xs",
  "key7": "4NNRJtTVK1JYCeYr8fVDuAp4e6j2koD8gz6QopjB3GkUV1egVwNf3mqMLt5HyuQJC8FMJT5ySPQ92jQMdW1TPDH2",
  "key8": "1eZE9uo5DMXbewvHLcgSqAUJaRbq7aZDRPKRbRkqtUjyHwj6r4EeacYTUCtTEFDWz7Pr2CP9QL7RbcpMfk4GD1o",
  "key9": "3anW96JSC5CmVqYEbFj23TWPmVXumdLziT6Kn11bEkgj2edHJmuzAcXQUjRxGAQ1ytSzijhNhqVrkVtUmdDcjSon",
  "key10": "3MuBxZH3KSCaDgU59QJdgxYAheoeBf8bBQC297i6cadKsbiSMNJpLwqhqfEuiqXih2wvbuxBz2U6BWEQfqfyGqnd",
  "key11": "qoXkWdX9ADBfHV4pTms8d1wLsF6vxdGbcXoCMav6y15T285fGyqn5kgs9BF7uE4HWaihSVppJFX1hFjRpCKDuuE",
  "key12": "2zj7XheCpfz4kXTLiebsECUFxK2dLWAmABuFMJk9QSKsrdR7hfCQg6313MydBKdsfXwrKvZqJJhEsgetHPfGWpWU",
  "key13": "Ea8iB2JCGzaY7pcSE1R7HdnMnXUmR7GQhfFUHxbmCkGheGcDHPwFzXQ8M1QhqRfgi6FR7KA999BuCHzh1ipeLtC",
  "key14": "3LAemuPRN4LQR2MShpXzQKwfjHAqs3LMXHtQWt16DJ7L4ZfyZdtpbN5GwYEG2K4qA7hLmZpDodLA4YSVHRwUYBc3",
  "key15": "dyvi2wQ7wHMdM6YtabzMQQDsNf7smTUtDdAqKWrkvKXQ2cQQ49ftFKmmx8aR7ZW1dWgyLEMvEEvhpkCZ6BRjBLv",
  "key16": "2ozSn39hUKqNcrc2BisFeucvtkgTs4BQgQ2RGwkxr6RQDJoAaFnXAbnLnP1Nv3i2igM7cVX38VuCkmvaza4p5SzC",
  "key17": "RPEZcoxtmbsrPw9dFuhVJ6Y9cdHLJtagf9SL7qL9CYTSbtAwwT5SX82MPp17JzHUdmS9gmytqaxpW9FFDFHcLSH",
  "key18": "AQ75vuZTqKiB8gN214Q1tTQeKQzHYJbDeouMK3WMTPGsoFJRtSRpixG5kk8MpWkTt2Ypz6gFQEGFJjMG2ffjF4w",
  "key19": "5Rb7KPD38eM4cxLfSDu98M3zrJg9TJrc6yqFU3sjkzZPuycacTGgGLadxVHPjtNJoddrf94hyWDqmpkKuJgui33H",
  "key20": "3rzr2XyxMPmSMPRmiAJNRRNrSqWH8KgAEBbMT6DGqYcLH6dQwFWY7Eq6PgimJ5WbFSGUcihTUm5X2Nm3DjYSS9W9",
  "key21": "4cZnNQ8kZDUm6k2kQEwg4iQHUyx1eqVWEtBe9p3ZEHhPFr7r1Wr3djKXiQb14SMReBmiUJYXvfozb9BuPPPS3Tsr",
  "key22": "3yhqUoFD71s44WvjUooxURnqFQtXKFwSd5sGEuxy6eYNAug3UWs98NnDjsLtXGxVJBXditWWHBnGQ7gow7KLt6mw",
  "key23": "3DGoGRrkv2AWgnC8WhnWBj6cpb17YPCp9a2bRr7q1pS8bBQxaWwqpQo4CXGGLp4tyMV7m7T3fRDye8Gp2A2hwF3J",
  "key24": "5xKA2v4aieNokaPFUw4HQxQcrm42XbkYkv3dt6Qua31kvyH5ZByYscXnR5cWLwdKCf1EF7pecyE4ixeziTZnVk69",
  "key25": "iuAr5cE71dvWro5Rb83Nt8RSusRNBwzvXhpeVDuJUGADchvadE2555MKMoRp7usHddZD2eNYvo1cjX8gVxx49NL",
  "key26": "5xe1gstNxyQxWrZQdNbwxGefzbHwymBbMmfuBS9GpdATn2BHNpFHjnomuvUJbEMv6wdGRPPkQ1JJrHQTDpZdEMrm",
  "key27": "4oTYfbfVUztt8huqeF19aHEKcFXYARwM8AeTTqdRVhnfbEHTdvsbbXt1WUPyakZi3irYdxR7Fnt7y7PUEgR7LV44",
  "key28": "HvLVbre7bakxhDjuKXnJkr6aH3jvkPxTXVQ1mgPqajo4GhYcZ9gva46JdPqkL9oCDFHEzVGVmxnKCXRGeFtS1Mf",
  "key29": "32BX5hxxnEXEkyzrHYD2Pui9yQPByRaiXacKmoSrbrH1qwdvPmpcFAV5bETC71Snb5Y2r2JvartK6LPqRfp4Pt6n",
  "key30": "2yqnTiQy9Hc3YUfquzmZWxiwTvwV3ZYDFZ1uGZcSCAcPLbGVKXpZtDNPgVVBkGJGtXCMyka5GYrq5XoT8k4aTMQk",
  "key31": "5sG1xJ7E27KbRXweSSB6EuLW9j7mFi1vLSi9zsvNHL4cQUuMACPBMTfjDCbqeMCEZpRC3b3bS516MSKTkH9faCGB",
  "key32": "3egHrajxbig33gQGY4wknnUsaLMWEGghH2g7DxuvyawNAsjRWMY9r6vgT1iqAwQJrt341TtL3zNC7HBUkH4iGSUG",
  "key33": "cAafTkEcL1kVsJ7n8wKTBSQjgAgS6URH6WEBSJs4vbmcQNJU2DSAt6KcxGgkttMzqzkR58RFq8Fy93nqmCRFA3Z",
  "key34": "2staxyNU8q9gTucGWMMUMdGRibzakk2UwSofMcDBEYnkWpayJpKJiwFUVhPKHFLj51rVrjtMsgtAfL3tdaG47h38",
  "key35": "34NPMiCn4GmJzVsiW5Yv9VpkqTdGPrTvqsBYQM3pfmR6yTENbhAM7XYXXHG52rG27oeEqiXtFi4jpjo7J2VCgEz",
  "key36": "g2ze5fyVfEwPPNhSHrqQ9LneJYLjNpdYD7EGXKquZz8wfnuU7LSXU5a7anvjdcywC2XkksbxoH1mwwNLfW2gQME",
  "key37": "4NXHMUvEaEF6qWbRNAnjCYKuBeDAQxuuHVknMpuuVoGJXXpoaYMM9Cp5sgWcmcCqbEcEtNghmB9Jx25ey4xUTUJV",
  "key38": "GTCYBAQEKfFk4SThXp55jfLURTCwwFm9Rzo4mxb8uKy6NPeJzCfiGjrAj8b2X4jyurFFSaPKsG8XFCyvZgLTH1F",
  "key39": "2h8rTycEiMuRQo4LnvA9Tj9t5RzGBkJdTKVLnSVuY6FuPmUttswquRUNdAYcPqbWgcqXXkqP6c44PSPJHLPKgXkn",
  "key40": "5e7FpAYRk6GshKbHaa64qMt1shtmiHDtqa2nwxrkFPKZQNxvd5M6s6XJGnAGFeczeB7kwBghvufwC97TmQ2v6A3e",
  "key41": "3NBJnDq2prseA6CzmtJm9uoyxDoMFp9yQ8cSf6tzh4j1ZimyeZgHFrLcvFL5CUJ5vipXi3xWoTV1fyoWpzzYAWii",
  "key42": "2arMjSz4M2k7uDbYKRyM8mop3SYtQYt16CWxkHrbs8NLsr2aWjTw9YVMtSjoqdD9RGaGCVirCHGdZGvUUPnU4qJQ"
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
