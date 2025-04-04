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
    "JYuPazokxE8xMSG4VHYJuL6FuvGCA2WnHA8eZwUnQH5PYcMVWgvdfkFCa1ktKLCSattNByfWE58kfJNioNbmGaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77J3sqCfktrgtHjMZxuUUrLt5Uzw9x4V5TMYoNi17j3VBMTbXqRvXjSSQPAvfVGfjnHjNxiMLGAnAMW3rssTVzn",
  "key1": "2dp1a1cmmFhbQTAC1LjGv9ud4mqSWbyzxZfGaBgQEovfRWvXwDaVhYrcesrgyshMgBQKgHpWPgxwoRGsUNnA7hPa",
  "key2": "5UWov4W1EypJoQbtPHUVsGUjTrejMtEvDd5mbg5D99QEVkUmPU3aLMYN73ygAGfpAS6yGDcRMmqqA3Eumi4hyiHZ",
  "key3": "5s8aNfidheJYhdh2fpsj1G4EeWPXGnv861xd3aFf3ybDkfbhQALnMsuKYzV443RPaoC9eZKJVNZG5fb5JX8CKNcx",
  "key4": "39BturF2Lkw1XJjNA73h3PbmnrnQEJJTFi8av86QwRWoFSRPqDLBWSuXCmKd9L8hiNUJefnRYzuQDotU1EshGzJ7",
  "key5": "5etHz6KAYVADJWU4GJRBL4QNja46916W9RM5f2FRDXCNdPVxW36M24L78dU2oHruvghDuxR72boaPDbVYtMzWS33",
  "key6": "4MbG7hymNF1eWjzXSHcmjyGcnxvEsmq6Wqrwtv1cofzvfSF4Ajo3R5qZ4VZzd1nEQmnp65xnwabQoGiD32eV6xDH",
  "key7": "5FeY8w9wMh8kcqSBkKnS3Wn2FJCVMCcU97gx2QQPU7CpV7sfyKt5eVXedopwKA2dqx3mF7NbZqJbgVP5P14U8Fu1",
  "key8": "64bKjzn2x62H8GrVWbG3PNXQzE66AL5AvaxRomRLAi3FMLKccrX23Ch738CNVDW28iG5rULMr4Geeg9njbYGV9BS",
  "key9": "22UWU13ExzKigu2Jrb7fMtubUMcRmrQsgF7PPXUY4EQmgPD33EeeZ59YjkQM1eRCXitYryj9cdxV8B9c3MLvxYL1",
  "key10": "2Wwe7f5Gp3DbSk1uMc1EbPF7RFRysZhvHTa7tgVA1nWNX9a4w6QqhD7yLKcjigSLacc8J638gcc27PdjXgznZ1kW",
  "key11": "5mVE1xhELNJGjyCXAmgh1jY3hjZZXZbYG5YeTRU6nMpz8hxTq5hKhDPp1CvZ8Y5AbnmDqseeUGfvQPDbfkiFqBv3",
  "key12": "4hnFd6n4bc2LBFEciXGzSiBi3Tfa6UmUsX68oJKGSVrMK6HQbB7tdk9TyEvs8TSVbcNaMekPBNRAFHL6yfo5hVyS",
  "key13": "fVDaCU7Zii4WMQ1PBmarn2iyH2E7gx5TTPKsNCjVYfzUbrRvK6PCKiuc16wTLocCLLEhVk8Q34RhdmTwk2zdEHC",
  "key14": "2neLqaRawccjXsTsiYftLvGB1mYmmKX1LKpUwik8Gcx6GFB8xxeKWztjFT7nPWukqcEkVgz48ezFBMfMU8uK9nf",
  "key15": "T4nv7sNTZPJgMv6jis2amcjC2tEX6ybXzw1uPf33AiErQ8JHp76rFJRBzpcMoFXt34f9FwHmvcEGqZ9TSF9ehjP",
  "key16": "5tJ5282QvNgYGQubXX7sNFC5HUj6XrqzbiPaHpt5P9uE6sX5QPffqoV8BBuJziM2EudJPDi9voZuHWBcNHYH755N",
  "key17": "2oTuW3HgXMAjYA3k81D1YSo85wNKEtbdZ1FX5v4rqtBAGQdhfD81DuFhfShrkGEi4bgGWtLK3KpXZ6vNbVZ5xNLJ",
  "key18": "5oizr16i6JFPWWvQZXsW1XMAzmL7qp1xLXGnPK41Zem9AHeL9myrJBJ2PdJxjNDVBzn2vBccwEyP1TKi4EDRBwK5",
  "key19": "4sBbEq54y5Z77DxbxWi8vUn6766HD1A7xqWFxK5NiHyofyJBdf6WhEjRtj2UKLE86BjwgvpFeyarPb3HJV8yRKZX",
  "key20": "5NkGoAi9TbsZ3nnPEwUBMyVVWkoBXfLB7YNmZgZSXmrXojbc3ySCfiAyN1s5D5C4Bdd9ugRznDWMwP7uTUPVVHzZ",
  "key21": "kkphG6HYM9nFHMXteaXAxY2WgQKYiJ7f6tegP7dqPeMQnc6jCWeT7UQbH6WTWL5dDpxQyUVa5BqCJYtZhrzs8jP",
  "key22": "3F8fAhLYh9h1P7ghupccy5y2CytnqLGRUuAcRdj5H9DcxFefrCE6joSWfDnPrkxD2WJxfkijukwo4dzW3FJVvcLu",
  "key23": "AU1Kp2uCdb2fCK4wKbda9TDaqzFh4S9eAGY5zEQAYkMhiuho9XYJu28NZcfsPCpB9QMXHP38oLMzEvHnNhm6pc2",
  "key24": "BtDfWBJMwtccYkUZ5sTfp1Y3tJWm4UsqvAVZ6EgrTAEr5EcdREMX6XmCELP44e21EvKJWES31BBgcHBsBoeGX3X",
  "key25": "4ei6nBHc8xiyZ5x7rEUywy7fc6WpuNW2SK6n9y5MqhmvRVEESGCeTopSWTgjCFiFVTauMy7yRGRZsvGJCqrJ5ivV",
  "key26": "2PF4u4hMpwqm7RSVhdXnFohMvePTEwk1x1CAFoHtpyJ9HyMG5zG6YHnx2DWBPGPQ66JfYfqvniy2Eduz7seaxqDq"
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
