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
    "ifr3JYb7BzC9dopgnSmSJ5jyxAV9ni4fHHBmvb1UGknjY5FETKUL6SM2dXbM6h7ibVpv79cCC2JpUHrH6QTSoUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdZSTepYFwhJnvXvbD3peF7HEqufFkmF44w4UbwPGkXn4MLTxK7NjA7gugHL7eYbSoMwexWkz5pfQYRKz59i6hC",
  "key1": "22ZRuj3YifZR5bPA6J35Tn5AdGc5sMSihP5CxyPnWhSayFYEG4WiQtpGnMJEWozSqU16XNYGDbt2sbTJwNYVxsJ2",
  "key2": "4uADfggAa52fkYu9U9LKZdirwgni3EFxiouvesBn7yeKn4dGNVPW4UjwtBBUPPRbESWkfpntUViXttFMe7wxKtbZ",
  "key3": "5SgB3G4eqYafgWTo1AvuJ551qsUdDQRWzSbhvjUX3jS4gyH9vFeMbVUb8qKqQtFCgfLcy5CzWchpYWqMXCBcpRkt",
  "key4": "4sdreRtjiB76U4ZnKVVNEeEfk8TCpMusvkMS5G5kYu4w9xFku8drMp8bXThKBitq6jvrWaA6VoSWitK4uC479MMj",
  "key5": "2J3Jh7CAJ2BGhoUFL27qekx2NJGNnV3ANezeg729Pg63Xw2PQ9KQRQo5Ag9Q63JX6YmmdtRbq6q1ytH8FVMcUtCm",
  "key6": "ZTKhnW1eGX3tAoPsU4LeWqwUKxNaq6nGmjsr5JN7NQi7UUZDj2YPrc3bfTNVbYcXKt2rDjJ1QduuKcuxq1E9SbZ",
  "key7": "5q8UqCUw5H4eHgFzCsHK2nYrbm1hbZFzHSvqYHM615XPXKrnztykPhNHiwgiSBCF8mAcRUzHC2qNHCoUNExZknTi",
  "key8": "5ApKTLahn97EMcrAHm51Bu1mxPTaviArtPE1GjVE4nFbfYUss3s2aGkxByg6YcPfMzi4vvjvEpStZGuuEVnfn8UD",
  "key9": "4rjvpZPystTGbg31QZJYRE1JGWYni9cCnJqr47jEM1N2B36WCVnYQy4woArU6aTnmpppA6tLS4fzyzAVKNhhfjMV",
  "key10": "5s9nyM4VnDiTFTKccK2tJTeaJNbyYuLYNmv1Xpd1sPz2b5Rp79RWQmESRd3prNshPLbDhGvoe6BTAQ8VQtXa7SZq",
  "key11": "5sGkJNQD7YUddQUF6rynxT9CQJAVojtZ29YEPxfaAE3N1pjn1VKefRjFqHFUn1xkp73xWio2mrACku1dLMcYqvnb",
  "key12": "2x4FNHQsUetnTSKAMvtcvndZjVrrhf4Z3cBrugBJhQccyzuLyqV8oyQ4KJRG8gFJkpCxtkRSyR1EoNoVU479A1WC",
  "key13": "4m85Mwbr3NAP2sQoMHn3bSkNExxqUT5ciVcKFHfmRRNvBDLaasjJFgGfkSfgZPD4cTdmTw68ihqo9fTp1WgTjmTY",
  "key14": "4GwiUjw62rQY73epysw36C2LnT3ULUbMZMkerFZJYK7WuS2E6Huib1x3ZxcrtdcNedLnBt2LdMHDjHYPKf49qkAq",
  "key15": "4X2aHGe1BeJ4CL8XqRKPr5iqBZpKd6MBefw9WsGC4fXeKJwDE9gjYRTGaFQUb4duhMdCrwHh3fCdvTBfS4y3krUM",
  "key16": "4sUhjReBrjdaK25rk1KGXBx1MfjuupzzimeThLsN9WRfT7PcF8YzCKyFk7MAtPTxRWmEBPHEENQyct8Z8WVvhz7T",
  "key17": "ZNxn38BbiRbR4auTsjvVyzwnWa8qZVTzWu5gYjBQcKwfEtx5JSJJQDWmVH4JvFuVEhsc2wjR3VZuyEcncyScv3Y",
  "key18": "4weGZHK6125gH8e8ZgAkbP36f5NTusc6F6PtRUUPJzzw5gkCFB2nz4oqbuA1Yth2YdHMm2G4vGUkoD9aBDX3hoT9",
  "key19": "5DnsmnZconLFjM3riWxvv9bMb8zH3hyqcTyUsHohuKUnt6zK8oAGyAoKM3sjhbCkLgsAMBMuvacXRaNkLYE1EEPA",
  "key20": "3jVCrdc3cpUnw5jRFrE3JkDcwhoqNAXCxdWu1x9EbPVC97CVcbXkv7QDKveQ4UUC3psY1VdsqpUHokyMQ6iwknxz",
  "key21": "2iqtGHvswgKfmyfrVa1HUSRpDEFvkFexjds4sHeuWrk4wozYJ44PM95Sj1Liiz4w1me3XEQC5UxTBeDnbesHfLLr",
  "key22": "5KyrZEnYat3hHWHpa7cX8bzay7HjmBGtuRv6tNgpPfd7DgJAnkk94WTKJmkrssMwDKWuhVPPS5ZAuVCekubGiPk2",
  "key23": "3we29gAbkddjqQ7RcvdybLDSKc6FTBHSAtTvVKQa1Z3GH4nz1t2jgvAPDF4EjRKvVcr1EsBPjo7kUEoofd6aRAN5",
  "key24": "4etmHghxpdeKN4pNCg5nKcBYyGVFe3MFD99Z5R7scFMp8kcbEgaAJAGcKyNeGFmUrtxKbWrfoaTwd2jQ53s9oSx3",
  "key25": "2Cz2jm5P77TkfKMjv3FsE4MSSNq15mzMHA9btZGHVMMNd5AzkN3nxb7oTA1Dw3pDxabjBzoDZXwK6VNCJdyFCHRU",
  "key26": "49QoGszzS4YVCF8opqwviAetadpGVZoiSfdf5SscrRj2V8tR2DmyRVpuScw3sp6k5XssWqicktaxjcW36yh1nEYp",
  "key27": "4WiUi3azB52pZKAyts8iGZeEfjwFpzXrHDUSEY9Kxb8qtU5x9FaixaMamqJBo7vqw8WFoqxLDKc6RNxJMKNU7qVq",
  "key28": "3bCPWQJoCkFhuKrAuQaoYZZydHXmfT56HmppAXa1Dm3G2QfSXuxSvGj3bM7HHYXTwhsWYcK7CdYyDs8HKitAZT1K",
  "key29": "2wz4Fr2kWcVtxuANQosiKHu2oiDDE6w351qQZnhpw2iEyAu2dX8ZrPGaA1vX6oMrTint1XJgXPrsqWFSqBVbcrcx",
  "key30": "3AuX6no8A3hoYXCDuC9jFdMRNpY4bzZpQaHPtCxxhFokbc4rvfP8zZfdbXUpDxz8ZTHiptt5a1LRQknuqb4f8HjL",
  "key31": "2GxVXsqfpg5x5MM9TDHsDf2NWxqpxciNSMMnt4fvGdNn6abPeYQx9RcFxtZzf1nyhojQToMBbijai76pfd98NYLD",
  "key32": "2uwknHHnAcA7DDo2Dw5vXVv7DrLnQCMZp294aA1Rv8T74yZMp7N4vxuwmTwNUUMdiBtpUxb31xN1MbXoE2qWQZhY",
  "key33": "3t18cSV2ZnKan24LNkKWUZvuZ2AM2ssuyRCp6LWYdXyiLWhS7wfMbhKKUDuZFc41farWJXQajZcqY1Vq7ywZDcSr",
  "key34": "Aopk4jPbCE754VkxexQRQTCH6VMkyXb1iRTkZNum4dTPAwUBEHbaRD7BaqNYgvq46XWeP8djwoJ6pwizUsHwfTv",
  "key35": "5uN43QgCV9c8xy8GSZDtN5UYEJ5GKR7jw7pigZP3aM6mtJMtWvC7KmEPYNxKVbUphVwbYZZ1P8v97Lck5vqVAKEz",
  "key36": "zdauW38Azp9sHUocoCjZWka2E8aCDCaakMP71VydaTbHt4eXvKs3nJQ5pmaUaFVaq1xPdKhsdBgyN5gatGj6FY2",
  "key37": "g1tvRbWBMgnpL7u63Dccy9iL9p77fAWv93mc59WGBCALkJ2AAV8D83UWqybdKHD8wQ7bHkqxxWTZwabFLzM2qYj"
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
