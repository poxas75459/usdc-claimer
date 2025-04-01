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
    "5rQsZJiTJX3mzUL6k8uSDKDZAo9RKDJVeQhJRiKhkxTBUUA81JSfwWSqGPAxmUW1vfCMH2DaTmZRryqr7PWR3rG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8Dmo3nfYaD4WU8Ld8e5H8hH5nzK2PmQvsVBevbcst19ASSQaZknrC4uagLmhmP9zaCqNc6VauUrPtBoHHou3bn",
  "key1": "3HvU34zpaYvBtS2s8E2BsUSc2Yrzu3RzFW4uzov8gMf8Y59f6i8UsSSvLXkrYpMXQtA9prnwW76YXoP1oc9sZeiB",
  "key2": "4NoZMLBSQEu9YZezhSfgsmjTqvckCiD5fcTpQqvisNW2GCtufbkHqmU6jJayQC2Tn9Fr8M1aQ1pQ7kKWupQmmG93",
  "key3": "uMwykMxrqDdbUHozPabnKmDqbkzeqvD6ZtyF3A3RwvwYfhwx2X1dNfddQXtkUWURLHffSraYkaGG92s7MLHq34U",
  "key4": "5PJa5V3KNkoDofPXNbzavxrWrTimTJ99Ee6Lbx2NSXqgcg7mpww47PS53LRwuwqQDg5QXTAGY3gaJHD2eNkQ4bqq",
  "key5": "4dUJ14UxWi9UyhRJpxbxH8Ek7tBrS8Vwr2F7dkVug96TpAVSRK4FV5Y9mLYGZdHqX7MbjFt4UFGZc9CRHdSGSxbd",
  "key6": "3u86XBDtpwiiLeqHRepCdDTmayhgPE9sXztNmDTY2T9RxuYptvH25jtCoc7xx42auWWecFE2H9qMJDwmHfzwFJM1",
  "key7": "2GUtwWusAnDDGuWr9FSu925BdPtg1tPPCPgkrnX8myVbH9ixdHJNCHrcWhDv3G2cbtdzmgysBsmPbRq7yxKytBfE",
  "key8": "5NhWfy4HbNsWLD2VFNpxpVTQgzbdwXZ6Wx2srkz6CaqSZLFbCF1qs82qUFGg5kucQFqUxrjVbQPd5crrD9RovMdg",
  "key9": "29Se8vFqCC5jEj94mCbqatR9XiutpK179iLD8cmvPSm2um7AhcnW9BxzNkYDHxiMP4UDLMbW36h3Kyxm6FoqFANq",
  "key10": "3bWobaWfSK5TLSc8kfrD4hqW57uVXN9vWMFB9Z2Szrkpmo7ztscid9TYGGpCC6UGxEnL4aNYJcjbsYCEAZ3UNqTP",
  "key11": "23MNquXWTvVXjVFRytwVjDAeMbBdFMe7aTb1vBR6Dbe4ZArRPhqTDHBKbZAFFHYGzJHSDQoUpfr7zQTovf1i75qL",
  "key12": "3xtAhMb4t1k8Hnb9iV24B16QprnEgcLPwQ6Gts8SSe9EswHjnYaxYDdiekqhYu663GGQgrZs4UrLaooF7KxiwVpy",
  "key13": "4uaQEQsZDyC2bob11sH91bNm8Cp2hTxrBXqcLuEs1MmM7wiX6mv3xdPqiw99k9MxetVrf4uQUhiR5okJrj3tNFRk",
  "key14": "4ZVQ11q3FCUX6WDL6d6QTTtSkphEVMYxwGaqiKHoqoyAdLdT6W82KY2Vf8wpHAifDUqER3SwkiCujeHPncmowVge",
  "key15": "3kbdLx98Uqdg9NDJ1kjKXG1XbzLdEesAc4xNTHyR1STHULSfbfZNAm7pEU9uygrSPXmCjRb5nJahis7DYBDbeU9e",
  "key16": "dMb9Bg4Jp8MMZm5dTRdd1wcH4DZKrLXQmwd7bU6sHh8QX12PxmumrDR1uSN9rjCa5MJ46zJ5rTTVp5rFx5N37of",
  "key17": "4P2eBq7gmsfAsQNCtUs3YB3QgPxrSofpL3NVqnnK1F7GDf7dzsqCZWJiD7oAcAaYPfikjq3GKN1UvttdTEKuz8QM",
  "key18": "fstBvM1CiceNSDd8jHYWyjna8VNYBr9UWiaEU8w6JztAmYS9R7TgVALaQuDgiu8wJZLBQMrfmp51r9Gv2pXMGVS",
  "key19": "5ZG5EL1oap4VRfUNZLqX6s2Vy2dLsKqn4GhrH3cbWC6HSPQs7Pzg7hyShfQLszngf9BsPsD8459dBn4neuuZyJ7b",
  "key20": "23sY2hZbfwRPRdMNiALcDXEnMKM5keABNxQ8sUdHLMKuCWQ964NSRZQyR1WzSV4ZRzFBgvytAa2PhNt8J3e9H8gn",
  "key21": "hRbc41PzQKJatD9GSAny7LCjG7jGdbmsejsZPNUtVnEKBn8FcLg3Wx8wqFeJPnhWHB3dLAFiVovgcYVvhQ1enMC",
  "key22": "4c4Yd9FYsDah8ySitgbonmshkUwtdWUKiqQKS4D7nsURbx9ex6xN6nw7mTfqLjfAu5bPvUVuKnkMdKyNNqAP5kmu",
  "key23": "4THjLWSh4LXyhnhir2SuZ9Tt7DrPf14uS4HwXWqJR6bQSteZSmtSDrPsCnEEJCUNiJHVGcuxtPyFP6e3VSLACdPa",
  "key24": "45rP81kFrNHLwBcm6LaLzxhrYAyuNv3R6En6FqWqZMiDykNS7XtFv1G9MQYv1CghiEoveougS9wo8YCy9zQvvegs",
  "key25": "4HrSoJ523H9EQJCwdbYLiLUuCRnB4zJPPU6iyYm4YCW7hZxiTKzry4hjGhKSGS1KcoVtK7zuoZ3uPTixij75t3Sm",
  "key26": "2oZchSYXE5RRLgwmA2j7qzMCoNKe3PJco46F5suSRb8WZyyDhHXFhCYR7shH6SVPz49pvLWG1za16X2uSAx24re5",
  "key27": "5im5xwM16KDmxjevsxHB7rgv4PZqBozkCwT6jKjBU6NgZdetDB334hw51LdV63i55NCiz8JgoqF4RTpqCjNooziU",
  "key28": "3hGRAoLCyQy613YL1nrYbZhxMEJGLurmn4fuNndCVo7Cb4hGQK8txi53UMA191vnXUMrL2utX87riRgxRCLCMEeU",
  "key29": "49TcxRpZWfNzbGSyhfCJwhaH9RRE55mR1LXi9paDbw2LNArVK1XNS6nKV1cn713o8Cv3QLDFh3LdQxVSKvEg8ZWH",
  "key30": "uivRjuVGMn2n3sjyuXSAiA4LMXhfeknHRVDv8xwTgpdG4H4LYboMGeEgs7wGZKV3L9hyA3oSU5mLmXxov5m2We6",
  "key31": "63SmEKbJAkUquoN7JBRjG5MpRvhFJpWzrnjoiTNdAvjCqMF43ppZHjp53gYcAgVAFKGomscSqrfrTma8XudXWxex",
  "key32": "4wQhDvCffauE8ZJEW1nmSC8cvd2P9rxZPKDAvUDayyVfGJuSoVmPDjsnnkwKXRXbpXbYqfnqFFEhU8M1BCinTqZ9",
  "key33": "5m8maq8uDKLfU6GeKwLYYRucSsz3rb3wnUqnBkggLeB3QN4PLC6u3y6DDRg2yZJF9j32CbEN3gmxrYU3RmnAzCLQ",
  "key34": "34SLxZA3h19wh9qqkPXdFCNpXjaCqRstB39C8FaQYginpo5bNAkQHN4KxMv33pGYUxzErU4z4zEyRjCNk267ahj3",
  "key35": "2BSUBZzByHBij1oHVk1hxYm2AkrikmeTkcmpQ313pYdvWiqNaWPx9i6ZCfmsA4pvkrrHmLCoAj7uo7KiEcseMwkB",
  "key36": "yphVrzDbjD6XcgUJVmk637C4ms9vUa63giqZuFigMrrahJEGGz2opVSA3Tj3BKFja6eAYc6EFCirt6q76th8ueg",
  "key37": "4RbmY55NGNDa8XUK4WYxLZ2NPZD6jYPtdgxYEBhDAc21q8EnCgfBX23MRXqwmCA3eJuhJBJtBUGRoXXqMj7GgZfF",
  "key38": "54U9FKLKNNyiF5tLCL7CkwS6pv7SVssYM28BJUpVDLgHBG6VbG7ko1pK49szgpbWredRuX7bcJAtNnFfXVxoGuQZ"
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
