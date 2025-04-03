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
    "3ozoAdo3UixthgVrMm8SS9Y7M7nkWScyBNSk3753FHoB7rBkeK36RWVuVMenBKR62xobRkSGsH6muYxBVuPjKCc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNH1sGbvGSBotPDs2AgtZs493CdKfDwrd9kdGAn9oMaMRDsQawoNvTBmtNtsuTdoe4qssdRPLUdqsPkuGJRnzyx",
  "key1": "5z2duy2igpcFxLcCtfuXg9W8snX7qoKgzPEyrdrTZSCyH85sKFWm8JPZAfQR5MM883EkwyW8UpYHieQ3vYThWLff",
  "key2": "3qqS9KMUzYTSvnKgYchBVAcv8HBRwy7CpYuBSopUefELkAQ87MjXeMzvueRP9auZ1Pvg6GujVN1cxJrQhHYqHZjH",
  "key3": "37JLUPoW45NMge9wrPd6ps8YuK1ov1gHmPTtGj9K66aF2WRnKjAP1EcGDjPoxLvm3x12y2tzrfC48UFCvF6zof8U",
  "key4": "FShZJMHMqy6FKU9ouQZdjFZvFrSaruKShSLZtFUyfdjcNtg1WuAy5wsxwb9HDdCQFtLzmNhDAc2ZT8twbiv2moY",
  "key5": "3cFiSDmwaP1NkkSCN6YioiTFJa37AKFCG4BMgoMQgeSoDdNh2dAX4i6zqhqnkHpC97zvatWuzE1Vn8Pmy9Ftp9qY",
  "key6": "2nRBNZFidvZG34Q5sL6jHrFVHCWsm5wsCWYktJCUbQPLvxqUbgJLw1Uw3FjhEsZz2MeX3MnenNFhE7aXJv9b3XpG",
  "key7": "3d1bhwFhwFLftBwteXpjAGz8td1EC9H86rwfzHTFLPXvqsoN93WPQuLgQ3J24wR6e9kgviRWB2T2hmDrVnuMuThJ",
  "key8": "41ws9apBHrpTRJrDfn1K6BGspfkvjuLC3GXXEqPqiZoUohbBmkBgEfD9dF3MYvmdtf4QG5z514ZmoYgBNx939PRB",
  "key9": "3GsKC2eeu3LUDNNtoVU291TKCnvAxbknLQGWJbmsFdeX2SHroB23u123ZARvqzXRAH2YFYoBn6KjWnrZkVebqdb3",
  "key10": "4BbpeoetL8cqyRzo8KpDmrBXdRdoLcnq6dzji3iKEwUQFfw3Kcn7U8JPAcvYMTqkwN22rnaENcg3qZjUxcqrRhQG",
  "key11": "2kipkbZvbfTZTbNNe9WujwUamM4y1cwAhL42rrMj47ZWMYaJ34HWmD2Ky8BZrikSN8JYVzzkwYgFfNjsmcqfnVYp",
  "key12": "62jRgMbEu5z56Qrs8huAZKfCLUvJ4kzPLDQYLyg9Y8wZxM8bjvsEt7bJkdzUzTwLsQ4UFAC9QnReygTiM5Xxa9Zg",
  "key13": "23hqWpAs9BXjBWCUd6XqCPt1XBAkENXybAJ6hwdEFqCYrBAzuHNQ9PKzEC8m1ad3L3sFggpSR1aUmbBaJLJs6obU",
  "key14": "3oyUFnSBu5BG4gLgaVR439USw33nVLpTPM5TVciTrh9QDuY8bNi9Tefwj5HxUDBoxvoC68XfCvxVeHybRrAEdbBa",
  "key15": "45a2L2mokNJiH1SNb3LW4sardWUmRsooZZGsLa1JkBajdjGrzsSRxi8u4AVvvZAXDEntYoGRQWWHCUkN5RpGDwun",
  "key16": "4cQqh6iX5B2Sor8yJfJSqWigENQ1VR8e4YWxaFjCB2qCUe7kb6QMjN8yjK5Uv5KQrsdXUVud4pNRtHGKPq2VKdhE",
  "key17": "kf1zsYP4wLcJ5cn4ssY45nXVmW1PevP64DnzuMzgVaSwKbuQWFKoET2ctqKqCH9QjCWWgEPutFQ8Kw5NJYEedeq",
  "key18": "3gtFF7XwMJsQZpENd8266MZMsXiyKuKuXLdiTrFELwwjPvLuRxCwEMGpvjjZ568XaeNUsTq7EwkqeRHhzAZFR8ML",
  "key19": "2aatQsHYDBPB6WSvk4GQf76bAfDE5XQEsVmPTiTigXGruAfiS5d8HF8HByUiF9C4FxZ7FZaPEEbPwibmAEc9N8Jr",
  "key20": "5m6t4JoePduk3FtiUB9Bnmy4Y3Z2zxciyymPAGDQav4sYgi2xFGj3yZzwE6duujYRGQd6cswwDw3U8HVxJe7bb9",
  "key21": "KEbx2ULbkM7TzbJFa4npNUpn3GkHR2hp2V3pu8fy56UxFJMBiWRSegYxPXjY2jmpHEJ7pUWWEtdxPUu3X1FEzip",
  "key22": "5UqZerEDaucp9TSGCDqHdYo11EDxL7stbYZ9jh1kPapDQsZkSPR2WAMSLu71i5TT2XR7q1qnUDwDfksdG1y8h9wf",
  "key23": "3CLfDNdNoFesYc5LXLXyHoSHy1oNLp1aVdArGUapbSvNnqp4DkszJSVLzCKBfWtmTH7EPHu8zJYB7ri9J1ThEHE",
  "key24": "52R6S6qY215DVznAsFMEXWrC97jB7PdCsB7BJn4fXF5mvpMTJwB4stQuuXbFov9dRYhhw8SdFvDAPMim6AEVmGRb",
  "key25": "xK7HgrQAK5hbSD4Rro4KDCfyP1hYMDF9eP3H6j819ko36iehTniAKUekkDr1c4Xy9UChDxR7DqqkDerf7iVAWpD",
  "key26": "4w2VPsMmKctke1PeG9kndLEU3VmhkSxGtW6hdfeHzhXfkTGXBNDSxiXFt27u1FC4aD6DNYZJ55TTqkniExzAse2c",
  "key27": "4G9wZ6B1dN2H8W1WC8F4YRLLzGj9iZ6VrjLepKPG35gBHthJXYn81SQCkJV1vH42fRvhGLg8waWomnJfwpcyBNun",
  "key28": "3KWSZERnXEWtjVekoeC3ypueLHD9DWaD4sdJJ8xDDXhNRFdD3carSPEjP3vrqP6swxfXyXaMD7uNApmcJcTC1Anh",
  "key29": "4vkpLPSLsRJE2F3xQK36dDaJ25bEUMkRUVDUdLAzB7zunV5xhEksPqHEPiAzy2EJBFeKfJKzg8dPYmqarTTEaQ7P",
  "key30": "smBhbd5HUiGcsdDzqLyDutgW9iXTPBUQznxFdSTyxRb6jVcLJ51QqCuSebmP1A4TmPbuEE4KcupnSqHSKMxjSwp"
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
