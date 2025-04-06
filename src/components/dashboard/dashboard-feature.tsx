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
    "5EK6pXtjUTotKx8th7TvdfbYuMuzkkafTFpDy2hbMRD6Sw2SDrhDhxLdb4C1DUfYm4jwSNzosLzvmrBX8sFLktRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5krJCZvGtWa2FQau3MACwHapj2HbCMcgekzrk3ZoU9px6MtRz9P4mi2o98wqHAx3DgsSZtJ7d3TeJXSpEq3bZ4bV",
  "key1": "22vS5UAdnJmQMgrZ4BjLvp4XBf4adLjxxWhKQTT5csnJVRLNudXtvELiPBkM3sezNAhPgXGXcqk7PV1TxraKsSMH",
  "key2": "6ZpR232JBbvzwowTtnEaDumeyMUeyRVAFeb4cuwMWxtQb3pt5StvSrQ4xo7UGMQwP55uUhJqA1x3h9HVgbjVbH4",
  "key3": "2PdYPEUm9eMQNMqbPN7mipPyS9p4oHzXZE51P41cg5mmTNafqoFDWvUTYETTKgcdmLrVGbSJD2UqpvEjNj3cVYut",
  "key4": "5H4zojCnAvMCPTEcn3kdVH1WRgRihMW2QwdvRWtufXSvqso6ATUodT6q3H1CrNh3q6AfAkLXr1aPpyd51uCCJ5iF",
  "key5": "4FD6yEZgYJod1bJmytzayC6GdLuZDhh4xWzLtxxqmsMaGCLrQ1xZa2dD1pahes8VYPXGuaUCghfpU3Ztta9MAxer",
  "key6": "2eiQqBAfdPS494fGWAtBTzdnjRceY6wcsF1KSXs5NPDYwpQibB5D51SRnKAe21AP2XwQ4eygrVfpa2phTzygB57d",
  "key7": "4rWiN29MHvWG1R8tzkoSEs9uD7QtiL2b9KvKFbkYD7aPi1mKVT8wYvF3nbW9CcTT9V3XRbHDKEDfUrq8GxbUo4gn",
  "key8": "51u1x5qETRiVHgeYBvbuPXHGK78VekYLoyna6MK2MXkFKUF3wMJMo5RaDe5M4sXwx5sip1bE4HoEeaJgogxs8qWi",
  "key9": "ribA9WXe7qD7W2aaAuvG25huAeamZhyw2D6jKpT3VDFYEzSqCG5sekg5QCgDW6w2aeTZpAr2v8KUrxcyfbwdEfK",
  "key10": "c7NCwFDFGv4ULcaiFv5oDyY3xF9iCyCZ7AjkZDCsNZ6CCmEytTJhVuBBDaURs4Tn58Eggfk5AqyEoquAWHLQLFq",
  "key11": "37bmFFucsxdosGFuTBgbWtm4hMRrxWozrgwCQq1aCEVFcBg6dK8d6Bi7KkG9zKbakDjP3hvzSKTDb4EQpjVpdkAZ",
  "key12": "2uXcXzJcTcSvWJF1KxLJeHV2Y7fjJJsMqH2UFbKjEjiZWtM9hNpGdGtrRr1uoyRmSUeG1yiSPhGf1XGL53ujRgQv",
  "key13": "5yBczAM4VNyhAAVaDBAbWLkmbbCrysLB9F1egL6NWS8dZcgppExYiH7KaNAzBcmyctSnfigepLq4E5RYv3q3pzk3",
  "key14": "5xBCeiKd7dD5GPRoXnThdrFFvjWngDGTZVpkXumAF2ymDZCpzdv7YnjDcwWDE5GciChqnpVR8qYYVX6BTZntE7tW",
  "key15": "2zX8ttHWdP8HXwJkPA1iByXiSikGKmjw8Qsd92QnHoaEbCZZnbEM8CzFTRB4smg6qKCxyaSafMfHPpzAQe3VddLq",
  "key16": "Vax2aa2BuLRL8JXP4iQJQx5m1Li96p1krkXA8aPyiN8FuNZaq6g8kroXoczxS6ZzMKkubTHkBqW5nGD9XQqWK5R",
  "key17": "5N7eNcHkxipD6FRBkyBunk6FX1zbRZSMQLy4LKYUPcPtf4Eyo2EF6YxhADLz8J1ZjschjGxNzQ2frf36chH95MKj",
  "key18": "3Etneu38zjbbnWoQungbqFdaUTqFStjYKUrtc6UTANGK1B5Y95JUq3Ami52iRtGncdxhTvQR5gFBZn2dsx5FqKTS",
  "key19": "2D6Dcx6v4MN425APBA2WpJNFbJFKo4YAEbPr225MGs9bCVM99P9nTJw7C4kBz2WbzBBqnYpg3cXABHC6PF4aJNX",
  "key20": "64dzadDJoipUnkMqzuQ7VSexMgsYQ95gvqQvLaPBN3NZiejHwcfxgnaJSd1hqpZEdNokfTqMXKBaemdjrGqQozYt",
  "key21": "5GeDgnkDA6qVG9sH2Wj1duqV8c1ygWghMV1BkqcETapRNd5NwB3ZrW8GKAqDLH1DrqFAvcMvne2w241dUQ64ibmw",
  "key22": "gGhA27FQFF6iedJseqZ3MTfsGbUZkubsYZt4X146Jc8P8poUt11YwxuAKDy5u4wUWdaxV2pWzBmjUAPDvWXR2KD",
  "key23": "4GZguDqw3wFMPdEVfCbNCtK2TFRRNf4hKs8VZTYqM2GfH63njbw1PgEPCjpQc2hd7BSHwizgtN9aVDWt66qbqiX1",
  "key24": "3yYU6gaDCGewUHsu5tpsu3tQ9frjL59BhArQMM58WZkUAnDVb2FLPGCNPzKgFRPP2MF9Ss2HxLZ2eoDdbacigFPD",
  "key25": "uKvCARgYP7ELyPpPN9EcQ2eu3VX6giiY5emWpMQ8WmwDYqGB4TNi4mGy5384uwnGtD9iRitCfr4yBLSfhvatZjW",
  "key26": "F3KeE9C8PZG7p6zU6fwwK4u527Zy6X82mLwrYSizZTAtLwSRXzPcyxr5YPNnA4LSQnR7ZonTi1wf97tiYwhQK5r",
  "key27": "5GL9gjQiqHUC4RxQhjzj12eq6wEHJNZLCSxYSx9i5WKmWY6TEdgxpzcDazhX89hoziTvt1PmrfiohwqfDBkjNLee",
  "key28": "CQNPhc9N8HRohmRc5yzVcUoJuvALEGx9oz7Wdzp2gjiWauHeAqq1TBHQ2ThEcSTfPfhvSNiz9tnrnMK7GUv8Y4P",
  "key29": "ijGpa856YQgMBtvXPjEe3n65tti1pDyERuMXyWygdtfrPuX4aLwz8HmsGKxL8BmbAVFSzmpenkXhbHBozqXLn5T",
  "key30": "JFLRZ6xL5HZQBWYgcXjoMs2DARiTR2v52E72fTSqBLsUXFsisGxJMQLjj4vDTa391s4gvAmcKz5sh3bkBWo9sze",
  "key31": "4KmWkeLWRGmdqdnfhCuoTu3iJkBhquRdfYN7k7joUB8suLJ9dg8vKG72yboLnvgqTzjESKvuzuEnmdQdxhTLvSgT",
  "key32": "2XqFHaEW9UbAjvxMexwbLKhzBdTNy4WYHXYJeaqPuC6qHFa6THvNVHuqSETSymv7XSLpwwYJx5Gq9RYwo9xVxmnV",
  "key33": "39XX1kvkkpEJXEHFeSBUd5r9Z2fzbyx9m4mUAphRgECFvQaMgoESo6BGwpQvoqKEUmUTfexJdhbkAXXTjjFGLaSt",
  "key34": "vCw18AfaxEwvTPbM4vTxELtVf5YeW5u6L9w8hKKQ6Q7Xqvr2uMyXhrQoonLF4BLKdu59kxqjupttCVqJEcscd5u",
  "key35": "2kAJkyvC2gPZ84qK3k1j2eWG5NBJvPqB59eM6NXxASCqcPipw7bxj1EBg1h42zd2WZ1jKmRvDroVEUy35jzwByD2",
  "key36": "3uneKemyupoymv3aTHTjYL9qX4FyjaFuhPSEJY9uv7Aure9PNDFv7Dqri7RrKGRGvzW5WD9w5ksUoFSHycWvYJMu"
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
