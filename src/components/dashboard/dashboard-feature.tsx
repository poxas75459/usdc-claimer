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
    "3HmfH7iHK8NBwKLnqWdfq2aoLFMmgGY9E8otVVg9RKAmpeHoqunSXgzZxr3cAYrSK6kimG3rUD4Z75Ur5UZZhhfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pT4PTXjaAMKqDUnt4kSomeFRef24AZhRoYWYr951fWaZJBhC7Zu86r7j3uQ5usfgc9WDGNya3RpksPiMbgDd2BJ",
  "key1": "5utkdcPLKDHc48Vz7maHu8e6r41zEZZBNag5tQSzdKEvcGDKm9nVQheGCcG7qjZ4twxg8BBC3L3AyhfbizZNEiQV",
  "key2": "2CPzgEsa2Pa8xABWcDpZNtgn6hbV2d7t4npVPd38B54mnZeHyAdMnP5Tix7APR2hHBUyyidgM81bnTzGLhymxym3",
  "key3": "2oLh4zxPahyKQbCqnJ2X8o1gw6JaHu65By8jeGqn4pVBu6BKmdFEpF1w7MHfvDgPEZC6FZD7e3HNg8nib7dBCuFh",
  "key4": "4amPZHBG5uJ78hTWyyLf7zgW3jykCMaep69cHTP4XM8dEkKN7rm6EzZC13kTWiKo4BMWPjJe3vrw6phjFvQ4M4e9",
  "key5": "2zR3eVcy48gCVhStvGeZt9mDmzzqYoqkwjm9povkJB2BjThuirfzKHTgZBLX3p6WadArbaz34bQcg47Mnbmrextp",
  "key6": "2GLXCc8UmTzpmzUM3BNHQoP9HVvWqpx7vSxWhwFVKTHMuJF7WvAXtufjhneyUE5tWnaeJbf8srKscAPkDaRqzuW",
  "key7": "3RmCxMGcyTRJnsmfPL9K9yBc9rRDwHYD4sHKbfFc7uMhtPGceJowmL19FSWuWXLsWY7x3YqRPiTVogzwrEW8iTdm",
  "key8": "481q2gKsGn4f6qddt56MbQAcaajdLkMfjtn1BxXX2BGLw1nBS7EcizoysN26EmW8Zkp72Ecnh4dea8T4yjQUkYSV",
  "key9": "5Xdb2FyMjkuQYHMgrAVThYrdgHxrxm7fVbPEf8kC3tG7Ru3jPbNnXzwpp1NUteBQUq6BCXeTn1nAG89WWqEeXsBa",
  "key10": "s9L7L1RVAvoNB6S317yRx9pgjkkVK13isWdcMhebkexSSmrPLaipseqALbX5GMSCNsQWqAxhuqgLmHwG6cK5Leo",
  "key11": "5M6nznb31CmF2116xdbs4VTcM9twWBMQZcX24cMoJxejoM3dBJW34np47Xuy8zVwsAykEtwLpT5tDbeDgoEmRPDp",
  "key12": "65SZopqjZC3NwfBtMwKEjoVV7oMWR4ih8vQxTwMh4KfwCgGLRXJJDU7C514pSrwBAgTXbo4ZchqG174SmTr37p7a",
  "key13": "4Jp2WhAaoSVfSGqaf7FmvLWmcFYdhyGjVgZC5MKMygHH9JBZYw5hkgVoaeLdTufwnBT629No5S5VvUatgMSXZDKR",
  "key14": "3uGfPZnZaM5JxxBSeS8k7snRLeSpXxu4EefX7Tt6MJ3GDuWvAXi2JRKG5nPUNveK3DEm3c5CyEmateGk1YCZesWP",
  "key15": "2aaokTw21yFo6A7fpaQyJjnJDhMTY4M7ah2eESwehsqL2fqgTKC1k9osTv771AsDHeX76ixSDfr88rDuDQZeoryq",
  "key16": "5AVxUS7ao6vGazd4LBptaouSeBapnZGq9PDKuEEmNz1p9tfbP9yiKNBCdup3i57q8eXdUBAPYrUBsDHzbRqdmsSJ",
  "key17": "4rcDnQXmGMDTBwSaFohbG6d5jwdLn14h8HKSPF1Tex6hCEZEgHDnfXowN5efsEoGiKSgg9nzaT39ZtZ1xwc57kPS",
  "key18": "4xxXSThwTpbqqHPVG4jLdDsFUFQmqqHGjYesqMCvLmwpFTYmueEyjcLxb8U974DhDBWjwAc12qg9RtUfw2SzvH3r",
  "key19": "5civBW2TEob7u7ijnwqwy9BKv91kaVmpjj93RGEbqNTPq1sAcki22nfuTxwkk37mVdemyYBYGuRV8BoPY7j7HSZZ",
  "key20": "5mQa3ypGY9VtxRfFsk7ZhFcuCmEiJCoFRQ8iqKCwKDex7XZeJGfKytrLmuekTWdjNX8rBFno3krucmVrJFgrnHkL",
  "key21": "3sk4tBLMQGZbtGwY1BeoAzJC2VQx8BHENDpfkKiH4MHJLXdogx7xoWjF53QZC2GzTzFNB7uetwSmTq6xQyGjsggU",
  "key22": "gvdBTouqcWbsfewBpcT44voBu8TaGAGGXVUC7xTs2MngA3Swtw7BPS8cU2yCTxXtRc7TJiUC22CXApJeyDWivFD",
  "key23": "5mGtuBbXp8CmA9mQjsMi6fUT5vaLYJPx32k32gADUamYmrbBdPVhL3fwjJhzRCkfUktXeFJ77Vu55PZpUmhxEXqo",
  "key24": "26LHUctHanyqJ6tm1Q9vYFriPCgdgRKbx8qR5CsN7NfZc4iPABC2XzaxDUMjfPGrPAYUTsP95b1dg64veLUnRXfL",
  "key25": "2ikzgYpZpjAnMEPzrs1aXjsQbzoMxt8aRY72fSkSNsWWyZtBQpMBfZvzY72ygqqDyo4uSpxC7jyLjt38AyU6RpJ4",
  "key26": "5r9CjswkcqEfhGxdsbT4SSdWF7oQZrSt36eAxXRcskDJFtGgAGaCDahxBYwPxWDNNN2CSSHVkruzC4B9BeKuHm1g",
  "key27": "3CAE6MfPYx8WMCbeD9KnexBsgK6YXdo6FJAEAZF5NhcGvb4LvEGKL23n9i13NR6Njcvs369LbHM6zS2VHudARRb2",
  "key28": "4vtanFYJjhj9aTQBAqVAmdjSvxfK2R5u7VXcQiVA1Gxa3otSsbsvmtPyzNmrKPzBzJ5sZNrpisFH8gEv1PfxeeGk",
  "key29": "MRDNStBRHxJkVwuK7R3LHbZziJ2JYQp3TaW9MLjeYRWg3hXrnZvh6GEyM4fAcFoHMWJmQpLZsk1KavsKNib2RgA",
  "key30": "2Be9Ap3KdiU89V1zHVctEkiFodTkycwSkmbh5kmZu7suEXhRxaD35m2yaxeurVJu16yWmbRft1D4oEo89qxWTSWV",
  "key31": "2z3i43UYYXuMFf7kQ7B4WTdXNqnjhaftGtBv6fc9kkBLyqxX9FsHNzQEERGxSHS8ppvGHo93i7yr5Wq34oFxjjta",
  "key32": "3YW6GqpeJswhipw7wdfXM6SbzgL5Xtm9NRf4m34TnJs2DuirVhqtPqs6jLU83jJusEz2kCa5hbz1ZyZvPdes7MY8",
  "key33": "2cHwxwBAXNG3mSCAQXzaqPpiwENTdLXk3UYvUCaJASBPWw9MJnpHo4uJ7CBCMsTPuM6FSdpddDEwLFoM4sn7uqFS",
  "key34": "WWGw5SugJvPc9gNJ2UH29sv2vYjq9xE5ezLBhdP9tw3M5SUG3UDwsxmYCYLU8EXTYq8FAYcRJoQzKPvHRHoqjCH",
  "key35": "5dnNRcEk9SZ1Ja9vAZvnu9XU5Rr6fNRNq6Es2PLaAWjhp1ATcct8zngfhXUDzp3RSjsQMwbA1HiGCEiV6NgMSgZ5",
  "key36": "4uc5ivdeAX5fyc35Fpboca9ZYSQA6jXLiKG37JqUZTqpVTuCKAcHNe33AjrapS2WCxaGjk9MXPCv3Y19LyYDiC27",
  "key37": "bhz1RbvL2dPpwPey1ggDmsT8uqRxMQPVvYT69uSU69N1AfPCn3khhMQdJVWRiYDfzQHZYbzqcz4Wq8AnXT7T9Dd",
  "key38": "9vXCJVaD51upJ5kS48dXzMJTS7UraPuTB8tvqYPM8yv7EFfdy535T8MBM9S5EDL6rbfX1uNmwaxNCTvST8WP9oe",
  "key39": "KENP4rDV7mPJtaCotuFwKSdSVmUPNq1geR2Rz2mBjrDWz8xhrLiPtZmgeytb7gbcvKscg9ozafJNCB2ybYxWqc6",
  "key40": "WJizWtRTCzXzz6wkVSECGotAGLT6ifAPwzrpzKbEXa3buFrm18y2uk8kusGyFVg4g12Yfwum1urzfJjQSTQzDrV",
  "key41": "2QjhpbThY3E7aFHQuoTGjhwxN2ayKAiSP67qvn62oPv8i69TgNxkk9m4VQ3zvoKDfWEpkrEA9QRRUXedCvbvc3s8",
  "key42": "2ciinFxjsbB67AzG8yzBhZvevqfK1ihosHgRCR2PxSRu3cJs1ZbFddpxiGgdMEh3x6qyinEfeuF9a5FvuJot5eaw",
  "key43": "2zR1NozdtzwXmpbjxfvUsdeEA8susj1LLcXHXTzHxGMvRZAU5M4doSb7h7LzuyrS2U4GAxD3uuCBkXJmVmSGuqXk",
  "key44": "26n2YBetoqXZF1RHCcAMbzp8jydn3NqePK2GJ8hvPFW8gzqCNidCJFRGpcEwtyNqyonD6q7jtqHy2w3AmgyqCQFf",
  "key45": "4RV6H2DUq9RtCchqBFJYiAi6gDYKBibBzV5Fi6eBU8qYC7URY8BdCkugrRPtsFdmt8sGEBbfzEZsY6dVGqFQoNmF",
  "key46": "27R9qLevCvat1nN4jpGEbqwu2z4CvPTCEW3PnQrqt1SS5bWUSF2FZUQeRPssoNEGXQeC33wYuEzHgXLEqowGGynt",
  "key47": "VuyuZSDbckxogfVYx42hSoMUDuSZkg83gyRK8dAdEUVnEMPWwYc34g71AzznmazYeXbcSZVBhyhpwcnnvnP4UxS",
  "key48": "2HmZnZYzaaGR9SuQRmxYHpiRUDEdUFSW6X77pYXLR2fdFYPiVcZwa3NubRFFPyp2iTbSwXweCCTAmF4ddZFfkDBD"
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
