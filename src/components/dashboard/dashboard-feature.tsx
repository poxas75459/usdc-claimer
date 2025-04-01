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
    "gt9i6Fg6FKVTRsU42JcJxeWmZ9CLApw89HeAByLgK4Yocj5g9Et55puKECK4Z3CENYtk9nwq83DdmWXeYjVq9jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qhPpfsLJZJHU91AXwVNkvsU1TSpwBaM4phJi7pnqK3BEmtse3SVE3gDhcatUjtk71cKkbEfKfNmGnHin9LT1Pp",
  "key1": "62BREoU4eEZgeqvVJeKfqZAdV52Da6e2fm2ptVM6Dph1izgQB2jXwYiNBy7xW6KJBqNiZddeCozro1YRntBWXyyC",
  "key2": "644QAfsmNF3oxkAkw1DVXrCuCXeRcDXR3TzDtn6kSQUdpysUFsQa1yMohJ9rLQuzaLkHPxsGX2tegPe6MXVRt1Q9",
  "key3": "3QhbjpZaqpPc5uXtnHP4f3UTNR1sKKypbMdZXFco7AamrxyKjFDfCNXrRieVHfu97hsvvmxQouFbjSQWXcB71o98",
  "key4": "4E16uJ9zE3UHnjLxSXHCmvbTjcPsMwxAhp3xJ662es4knUmiYwypMCp4d42zV2BbrqbPkvL8JFX6wdLnAbmip4HK",
  "key5": "5NemaYg3xW9Y1jHhse8XnKXvjZHuUxfysYWbaHxUt7jbpsTDthEZN9amPUmdx1JjXDwF1qGYNQQ8Vj7xGNd3yatC",
  "key6": "3k63XVjCERcvTWvrL7ZAsjqhGpK9JYAjpBjWWJkkUv68tvVrQoBW9fK2RpJtuNzhZnYT8RuBEtwLL7ekoffbs1V",
  "key7": "5brnN5WP3t5W8r2CGc5TJxv7Lk2YVFNnvoWAGTJZiJuRToJ5Lr43QvqT3CT3mse3pp15fHBWcawxBeHKEmtHZE6h",
  "key8": "4QoxS4LRVh6ydptwWmBsr3G9n639uiNq7f5pim1JSaC9wncc2MqucpVW5DYvgvwQyEeCqAiKSp2uPKk79aGBGdQA",
  "key9": "652u1Ck2HhAmAxMLmuCADMxLPNXci6vQNdtaYBTMgsm4X58jmTmHYCZgYitj2EDk3MQkT8VH4XEW8MYEJ6wuFiQh",
  "key10": "4hk9YNXJHCxDnymoo61pqFJ65Az2XXXwPmJabaURmAVp3z4xvhRkUoSWMr5zgRXUpNqJE9afvVWZ2tadQgVWRCxy",
  "key11": "5irz4MgAVGSwdNBuGpgwAfBPwTp6JXStrsyjQKrH3xrJaadeXfrVHySrjj1YWo7fRxbHhn72zvcFJNUNANa5DQho",
  "key12": "2CKuVQSCajfJZwKW4QKfXEGZJxUH4QXM85PzhDuLZH2ivqpP9AjSwyHJiwGDV49rerBXdNpszdDuiu13gQSavzoH",
  "key13": "5D85jQoNHNNZPtdwxxEzLM6Uq7GAccf1ziEZY15d5LzYbPh9ed1oRWaSTEkjkAgjC51nm56ceNyMpnoCfLM4w8sX",
  "key14": "2xhms9RSM9XHGRmrXHa1EDd1AA1MjfAhNN2EsdYfJEBSAJQcc8Ua7QbmWojnhoh582kftS5ULmHzYc5ZctDokXJT",
  "key15": "3upyDEV74S4vZKkf4XFsUxuqZ1Bi2dSdAApmiEKeRh7xJ3Q4rB4QabczfbqBW3PfBrmb1RMUiuRW7SZjDUUmSEYB",
  "key16": "PXoDR61yeToPTgQnKuFFDrQSzLz1MTPHy2Qz5RrvUR7HZ9JJAjDqfNqESqBvhjUDNrHihuFf9mGBvAKnv37c5QK",
  "key17": "3h7MCW1xa1DM6k4LEr46GFdg3ghKqgSYYYRLSss9jAqr49EPsUGDnMrQRrnGZYjhQ1TyBLfXakzxRUoHB3KwP6qK",
  "key18": "5LM4weqRU7ZRgiWd9QGZsCRBVaaRzGeuYfU5QxpvUNaWRg1MaoZQFBMjFecpGdwKTAec42tUbiLgMySS6dX3cnn6",
  "key19": "2e6mmubBCd8ZUhZWnyPNWp7TdWpjHtqMPJASzzLhAtF6BLHNTLonPB9wWZdPqNMprc2HPcj4QMRqF1KddYGDfsbm",
  "key20": "N85QBjs325izLwFmsoRPKvftH1S4oixi94ZfpPqCjaincXCXgEDzHMBEf1y8VcNmcDiBbH7Z6XZJmfPuNLA4Un2",
  "key21": "BDacqoZtpd75WtHz2gW6Pj9FTpF8YmPqSWo9JsRdLjBHXkRgXcY1YK18wwChfaD5omq3TrKCSEGw4CJrDDGcZpt",
  "key22": "SUS8K7rS5o5HMA9ByZF2EhjJxLc8Dop7UnxNqzsTaAhbqkB68GdCk3PU26eyfvyry64AErZuLns2oY7gf3rxUvB",
  "key23": "3L2EYRes1sLtmjdyakoyPLVR9BeHuDD4gVoCAK5S5ffdPgMKYMbphJGwgdp4zQikVw4HJz5SoTXW8evyw4xAsZAa",
  "key24": "4tU3E2vxKrjc2KJAeSUPMThzoGVkUFHDYzvQ1guDW7uWLndxix2ZiPRYyK5ztJPGWCAcLCfPEYZvonijUdinRAiU",
  "key25": "6kb4hrsxd1hhRiSz88bDYzmoZ6mx4qLXgpJRAeHsR9nFAXVjBfGhbY2V6PbUJbJjDdW7zBE4s8jK7kmoDatmTzY",
  "key26": "5YuVtfEboLA25paTUwbMJ3NrAY38NgaKJbzwQFfmajNYAnu3TXyZPtqXMc3G7bi2LNCyAPEAfT2WJw3S4vtkBTcV",
  "key27": "3MzCumgRZcTLbnh3AzPnUnjn8ySrXPXhBRNNbjZi2bECBEHNMCZ7fxEqsVijFV28NCVno4gMr4vMUy4mwdQrDkpq",
  "key28": "pgKv5qMH2eSpYQsoLZEL9NQctha96ULuALnUQUgvVrBNAr35kJr9HKk2Ahkgi5n51SZJdPETS15EL99yLfQjbi4",
  "key29": "1rHyKdxpzXMAWPVYpL9vcbkdNHR8mjc4GWwxsFH5ut5mc3FQpqdRbYADxhsXfsvpn2ECLWmGjZ4Q9JPWRb1RjjJ",
  "key30": "aVDNTryKJEVhQohbK15yEP4JFhxisJTEp5Gr5xEaqtHTVdH6B6CaMUXYobvPEp4H8BbMUbK7A45KrfTunL6vRTa",
  "key31": "5i7SiNBeiHvAY6ZK1QE6bUw3JNMS5ccpoqCFnFga61pX3NVz41QJ7Rs1vsi7f3FwX5EkpGg1ewZh5oh2u8XxCVYJ",
  "key32": "4TyYAeD9DZW4Vsnk6oJLCEYxsPGmLXp8MBU87xZjwygyx7dJExcg7m8J4HJsEUXhftK6iMWoD9hparCpDncaQzZz",
  "key33": "5Va9nHoF1wSKCgMxKohGBM4ZQig9z8btvBDCnVkd9LrrfiAZskiC6V1FniX9fKP9iwoS4xXXukeM6EHJwgvr7Jee",
  "key34": "2UL4ZsuT6eeEcePBoKNgvHEwU5AGwXKQPyeXRycxr5BKFp5TiJhQpvFkcFzneAx9fejFJ9x78cXAyqtv63o9qM7i",
  "key35": "5XGw8tzx5ibYS1YwM2i1pgo5Fs29UePUu8MxCjr2i6J5X4go79GritF69XP3oSvV5WHCyn3YhaKzd3dbhqumNbhP",
  "key36": "4connUXmWRhEjynx87gSVkRX4EaorYqs3qtpKkAb2HT1W4r5SdHtrqx4EW2tY3anUsKk5W3feALXQ18Z8YvVDf7k",
  "key37": "542pKf8E31PiMa85j5o2MB9KwgqPuKbWzFUmnc9bMTfHK2GbMDbGYcXmZBUFSF1TjwyAvA2fNwZXkF4ET6uQNMqj",
  "key38": "2g6pZ9TXo5C1WhPgT136ewL783TgVjhG7wfZvR6prDuhSR6ZkHxDsJB6cg1HbqKzQ3BTt3GvRfd5821JtKCLN9rg",
  "key39": "2Tba1PJ169723UTZSnoZL883icj1JQsqz9C5prN7bykaH82gaSJFBPo1H1XAAnTFq9Zd37k9HZrUgeQDaogMBbyQ",
  "key40": "3K5nBuzZc2dGxZ6NGaQYvuC2eB8YGC2dQn8EzS3jRV24SgzcLkm3nzcDPhNhdt1ne5LFwbK4QZXjfPnUsy6hrvYz",
  "key41": "3kWBmUniAhEtzZiG1MmS1Ze19YgWkKNsBrYTPJsFdK1oRrwqshpUjjbDPnesyEWJztcDh8KedcdizpWVDibvdVUa",
  "key42": "5y9mE6LFqQDdCPAoScxw1zCfUBxquuytom3HBUBPoiLiKQg4gFds91uK9ytq64aa2dzZiazr3vkHGR7HwKYxdiuk",
  "key43": "4mWLjeSdfM3jm2Vcx8V3SUdaGF2ixnFFh6qmiA86ouJdRpn2dw8JBuTsdFQ2eenFSh5zq79YSfDb4uiGetDdj6op",
  "key44": "3KKRa98vxrDXpVCAGnGaNUVoUmMDAHXcVTCDg9nZx1he13FNuUm7yXdctmhxTREmLW6cJkP88QExdD14hN58Ra4k",
  "key45": "33MxrR8sdNnhZ3b4izqq5LQkMLshtGBXmW8rYPY2WwduiUrPJ39D6UwbYg9HbKwAPR8oACjzr6CwDe2KbBqKfYZ2",
  "key46": "5nK2f8duDfjZ9f8orQDvWT9r89jpMqzyLYCAoB2ZaB3UY5u9r8SdpGJc1rsX35BGzK55FaqLefr4eWJ2xyZPpkLA",
  "key47": "5nCDR49nNFPVGR8FMALetU4LipXgpSCif68x3dsuwj7tNBrgKUQxZynd5Kjr9zJKnimkUxhKGTfQgiyngXJvWPiQ"
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
