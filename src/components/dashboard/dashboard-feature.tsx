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
    "5E6kq5hqkr1jChVcV4xb6fRkXqbhZVyt18UGYkKesZQcFdkLFcjJxfqj9RD2Z7e22uQCJZfL9ftL8wykR25sjR7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoAvcdxYFnRrmAirSZhnyvUGHmjpfa8RPw9yCHgfuiQt9eiLckUAtZiEeTqRzEgV24zpve9ULEWNFdyniKLZ1tH",
  "key1": "2RJtscbetLSMXWgJtQ5Zx5xLoh4UYqmXyifZ3ZHmAMCikd9TZZPpfMMqz3m1LDzKCiZ95DLGP7st6MYVfcm4yd5f",
  "key2": "2AJkzMD83vZp3bbQXWhmaSrhwgi1TAactPYNffCZn59YQBcxCL94u6sY4Dyj2226zGTK15VuB6VxYLLFDzoJGW4x",
  "key3": "2ejLEyfRk5XxUdCMYPmzHW1YuVzjcqPCm4QUHXNBJfPbvW37mBMXQMQB5QNfWehqGTzgfV9VWPRuTeitAbXg6kaR",
  "key4": "5Vv7x7N5XadBse6PKwue8BHjLbXsKxJY8RiDARhDPqyqxHBGfcfk5dSwxtY1nFqg7v4Sqph8h1Uii3vCaVys64uA",
  "key5": "4TyBYxL6U4phY5PphqVdgPVgDmHLBL2WHHHHCT2qf2RgPcjQc2JzWcbCMaN6Au5qWYSPbkca4jH5ByxbcT7DKDxq",
  "key6": "3nNWgVzP6SXJkeppVPSdj76PYvquY1aj2RPJph1m5Jcez1YSGhgyadHNCdjPmD3fD9m5D8iWveYb3WuAKfKg1wB4",
  "key7": "57Nq1tyCHTooMrCbMfDJjrkf5ykBF7RPXs2biFPeXmfHbX1be2Mc5UpMVJtCMxrS8ohR9h9rihzAFF2WuJFo85ht",
  "key8": "5qViEMGS6hPzUTaqmYMF9JdHgakJuxWrXYRoFg3X9Y1L7xypjvbw9vTvdghH7tpHdUVta1y1Nv3WzFxFXHVrkRZk",
  "key9": "5oVKENTNgwAeBESMHtJuWLCZYJG6E5ZyLsReEtKNF1ygChWapvfifPLBUuN39VCGAFmdXeQ5CjR9V76TQrndyUsT",
  "key10": "551Sj4Jqd3wf8JrnZUTQMyTT2Pw1ZAJKAbbDvavLxQ2e7UGeAghSuivKuPzFSaSurwn6WqVbkrmcZrXiowX6AVzb",
  "key11": "3b2c5XfYTsRwBY2A6zurpvoxmJzjoAC6ZdoXPTFk7MAv9eDrydEtt8x4Wq5oSQCrarMAaJVPj88SAizDjoBd3aMU",
  "key12": "2NVMB6VLcDhVdEmq5LnZwwWm83j8tfuuMNdppBKhfvTH799zJmvqEULogafHG6APJo4wGCLgLZBjT2JhjddLnTQ9",
  "key13": "3JPysinreMGcj2sjv7hXA1KyznGzQhG1XgvE6nWqx9FVWtYpnfPHeGMLPTrZynmDM4EXP5Um9gdbb21LfNyLG6E",
  "key14": "5dQ4tCVRJLDQuuCYBgi4a57HWbcy7RFmqnj5iXxCT3VPDdMtUFPQdRtgR545SDEsmfNA2xkJaeC6gAUJPwMPDjkz",
  "key15": "2t7tqHrupR6pB3whqMmPzzB1qdWvXaPoa6o7BzqkvJHgZU4wqKjg3fXLqCMbJZahg76LL2mFJ1MSSfqF3uAiSAzU",
  "key16": "rtx11tAPsbmhR1pp8YSa3mS1KiMLTGC8tMAUSXde6Wo1pWD37bfPktmvGT2uKebTKNiXcVNoTFXGGQTGZVF6n2j",
  "key17": "gSBXhAo2QH215qfWHDUQGQRqiBLcxjtchanmH9RdX13m76TnsudssQ4CvhS1wbxievE5wKmMkd3W67sZfiu6nPx",
  "key18": "wtPmpz2DYr316NVq4ZvtGvWT257LG6dzUV5exaYwVtX25RqXbdy8w7VUYsVcJEj53dN4EGiwqwkKJRybhW8piic",
  "key19": "PPN1W8oJi9He9t9PXyDMN7MBqDAsRHT4oZcd3kXbgtiNrCfWZ8jxmf74WDeHvxbP8NHCnQFG6wGDtD2WsiWRAj6",
  "key20": "2CvXGHZVU8X6uHvxab15D3GujcLViNhGJ2v97mUpyMbYyQNz1WRVimdnGnsiRKCBtXFgngmZDPPcDo3os5Rsz4Ei",
  "key21": "2D2f3h316oxB79SvHqi9y67CbJafxGA7gxKJPXvDueAiAP1a46tMgTenhCcozJKbDC9V6p4JchjDeiGsd4v3jVDp",
  "key22": "2t4sLw33krNAusvRxrAUFz3UwYGDh1vmAshHw3h5fYBoASQcJ12SVFmtRKLPgdhwGBpBVz9N2cLPovoN2xDdipTq",
  "key23": "2EpY3ASgPF2FSQv2JrHNEAZu1gt3WRu1oXrTK1Wt5AJuxJaJ2nMPAdjKzfFQFxsnH8wYQUMGDYi9GqXeoNsET83Z",
  "key24": "5RmBqYqSx1DpuLxHxjpvn5zk7sDnnrhpdGeWJdcCBarn4Etzu8C8wpqhh1gfSviwfLhTVSgP4pgPHHR4vSX5c4rS",
  "key25": "5vkEx9rXC2mvVvoywx73WTntkvyNfydSeLFe47ooifEKGFpLzY7WmKqUx9Tajsxr5UjpiRViNbzJfH92b7UncWt1",
  "key26": "M3FuBMHCW7SRFzBL7CvA673fQE2bpNoZL4JX9sjrq1AweqnrdaT172U73DkkSJgUHxmYpRRGKywZc4GXtUG8AdE",
  "key27": "47uYwPQhcNGXHcwEyX1CeznjSYgNtqQcg8pmD2DTu7ecQsZ6k3D2roAhL2fF475zPnKVni6t7d5v82JUtxz68e3a",
  "key28": "5d93yyCkiW8urTw7ATxS9vZrcGGwKvvGBUq9jkSDgTzEveYT74QQMNbtrwfDAaieJ9tMNRykw6w78KnVroRmW8e9",
  "key29": "3a12cipqNDpxxC1htv85o6qrUFmVHC5wR7hVLzDFazakJfxUjMWcn93YQdPPkA2raUNQWbyhqSthika7uZMChwvM",
  "key30": "zY8wbNs2jkYGCXwQ4JwQvxmRfqGdhSYCdLwXyE5R1hfaN6ZGyAMxBism5N3NEMznUjWkCKg6kFGc5JvM1CbAds7",
  "key31": "3N5geeFHsng2dxT98VTwHPq53t4sjB9VGdPaYq2Az2uPUttTjxZZ5ZfCvN4uLKUFRuvHeqZSY5VDRYHq3gDMrJcF",
  "key32": "w4jhJZG42DmsDkg7ZfsEHDUH3BHPpmyQ5EdM9GHyLy68LDzWtTieAHt6Timu5dHnxqXEByZM3btCct9x3EbKDU4",
  "key33": "jmk4bMjqUTde84pXZ99F22b7HnidrjDxXABPtcCSjCMTGNvETJSMsxecjxwTsDr29Lkjgtau1kb5kxjiSv2pbF2",
  "key34": "5YdwLmYc3LKpHCKUxyeFQDaeYBAtBP5dXYTwkYhv9maMzKU2h6CKqyZd5VreZ4VXsRvamDjFK3Hb4szNXKEpyBq9",
  "key35": "3fLWQixBZSgWTaBVsuuqzUKvReDRuKUb3ThyPaw2PYPjwwRHAvdjwihqMvoX49gdMqofQH5sRSuhHwZ7mykaxW5b",
  "key36": "4jktKCHbu3V9gjRAK2dhtSP2emS3djK13eKNagBJXXucVtxpm7rsx9MqWoH5eRcVJqrfFNKnNVwXGFE6qaTJY8Dk",
  "key37": "3KVQJViQSGMJAYq1VvvTmELHTrsj59E8NicjBGdFX1FE9mH8HV89hgoxzeHm3tdUorA7TLJeYqbHEccot6UomHg",
  "key38": "4827A1uLnUGK1L1Sghe829v8CrCWfGhT2N2CvemQEcVKgX7B9msmqcphMh2UW1kJGtkDnHuNkRZeXCtTXeaeChqc",
  "key39": "219G8wNwY83FcTCTinkVnc7cqk9cBspr4NdPPYPKxrKnxcx4a5fr5jg4nukqqjYXKTaAx7k3qWFR9pQJUEeQePHn",
  "key40": "4dqbt5xuXYHwtjpai8r81wmUX7QMKU8WeTc7gcdx2dTuAMp7Wka74niA5msuDDaLyoq9JR7cHxPZbnryrgZQ5p59",
  "key41": "2cviiecmntUKWtgP6V7rAhJ79q4Dg6b7zKzWKp4ZWhgyBPEwh3s5esRseEa9fWAVuPzq6mPqJPuURiAnU2u3f1hw",
  "key42": "558KiaqMnCu38ihoTSQRSnkG6CyKtHSKMV5R9fJk4mvSqqub6viV78QUL9eTDQri5GySMjwzUv1T4aBTpDpwDEGH",
  "key43": "JcMyxnBmdKdRXxrCfzsoS5REHoaobcomDTQZ3GpnC6JXSXJUXLVnBKKnbZuqQCQHYuA8tvZHtii9xcJRbvmWons"
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
