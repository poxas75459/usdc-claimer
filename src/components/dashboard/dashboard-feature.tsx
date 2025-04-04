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
    "5xmYyPghZ9JCh8CpjEYpAR7ocVgvR6T1HBmjEjjHfrFSXx3gFX3LxTE2UGwMa4FSQBshZ7LJu5wfsbaK2xmL2bB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTfp26zLjMsnVavAEUnuLH8Yf18vaGaiWP7Eer9mXYGxh9fMu7fvzp6W3FcCm6vpDmz3kDLYfpKnQkc6UQtxjNA",
  "key1": "4Uqzo3jf4UBuAcW9msCs6wApSYbFo1woNTcAcSYzWWV9P5SxPhsfwVhhRk4K1GZYmmnQNp1QWUaVBUhfj6Nocs5M",
  "key2": "5tYhSKHDPDqgLaecQJ8p2s9es2soE57gtcPukkVdqTQ1KbqGtUNgmqHkEiCvk7oz9fhxAcRwL3KzDhTmFoNovNBh",
  "key3": "31KHxb2iyHDfjDsRXWuoSCr8fu5wesHBjSDgNDAvmon1RBae1YZRGygPQkeeUvY9aRhusx3xvVpLsw5Z5D4vHf3i",
  "key4": "3eh8xsbhhk2i8agHCAH7AdQtBF59AkyoerGrjMwWNi9htfFCWMw6Ujv6ohwNPwL4BujfdUEGC4WYFCruimUMUvuv",
  "key5": "3WuMCAFV3T7aNQMbkkH4ZUMLYnyxu3RRniQ4ptARUojSa39cuJbUPqf4AyT7UnNAT7YGew2J91KyfZYrrY1F9SBc",
  "key6": "5wLUp33fCoJVigfSACNZpgcYuHAhHhKDAXqJ53m7eYQAafLpQ5VdEgCiWwuwyPzvwSTL1SJnxPnFuMBA4BfnxV7A",
  "key7": "2adRJmp2Sc8gEkZF5DxA7ZBnttNpEzhy7fWiZmCEUVd36HrHHx3MFGjUDymkL3WHKMgkihZeaBHxQ3hvwsGAoMhN",
  "key8": "3DPXb61YBjhM5wKTAMuMYbrofGTHoGB1VgheMKMzdnt769YhAnWrWoam9mbHLKFzyjB2eTVoAe6idjvvwoKmErbB",
  "key9": "5XZb9CqHopZz72u6RLWEkxVe6fkU78MQVGnTZK8PKsy4kgxy2B4od3RTTpy78q9wbMJwKTygN6LF9kDGhPmmwcYM",
  "key10": "QYzM4L29m8MkW5286Ey8twQzv4EreMoUYHDkJr6ZYFoh8fVSNf8NGrHjzUwovx6TKh3bPukiLRcsKJHbpEuKCCt",
  "key11": "5UnUwnSUS7fULgowwRTJzSmyQGuXRVjza86QvuALMzVrTKGU67GZDUv57zvaqKAJSvuWiBswXB9Rv54s3xLf9vXg",
  "key12": "59WMdwM1EtGDXXJNDS7MVek4jEt3UMCJYNN87wfGoX6nPeN4Xmv1tgUCcUDnrerTC1uFnsW1rZMkz2dSPZQ9JLq9",
  "key13": "3Qbvk3xGfEBhcKxnvgywU49FiM3joEtBPnAdtKqqkoQ3NNG8tXjEAsxXoMKNcdFwNjQ9Fk7EqDZhRcQrXfwuSUta",
  "key14": "3gLnxiZP6G18uf7JbR9YM2dZWsyjKy7SqecXKUWMqVeywkf8vYMFr39pkRndsNpNrqB41YRC1HFccoVe9vNXQAUP",
  "key15": "2wVQ6ws7FyHNhrbPDz35oX8QszfoCD7HUYpWE9bQQGpatPGwiBWnan6WJcQ2wDFu8r3qZsBSPrCgfoQxfvTqSDc8",
  "key16": "47v4ABNPaEdeh9yjykJCzh8T9Ag7R6xB2BcB4K2BXCgkT2susP3R7t7FUrYhBtwpz3XjAb5KvtzgaB1iA4wwcPKr",
  "key17": "VnHd6vyvTzpHk5yFd1mDbN8Kr3MqwQgRReLdprWEy4ou2zFJqEWdqBY3LVXCwPux1V8xHpBZPpborihrqywokZA",
  "key18": "48DyZiXawaRkRkwjQ91pq9srG98aEMziGhcgcSKa68auFGWukhVgcRYWC68o2VazFpVfehKsGVPmwU9xVT5cBgdk",
  "key19": "4btXaMWaZxaGETspBtqnus7hkFmRUR5NU7snJeTT6RbZhmdoZ8BbaSoYgGgHtRnpqtpQdbtw64cFiWWPNgJh5eLy",
  "key20": "8VL5MJnqpkzxTP5U9pLqjNHe3xVY733wxsdQKhzWHXHnLbwjiF3jSpPgKmE5ooigNz3Be1ebuSULLpKuQFJrN6Y",
  "key21": "3JSqaFLfbTL5NmVtSYsEds6mXtGYCvQFV9Noo2sX5avJ1r9m3rSvUoGvqNaGdK3fnfCTeZ4ByfSRCRxVGR7P3cRq",
  "key22": "PwH6uREhZB36mtQwiqoujXGFHuNAJmYMy6yg4vfeSVRBNhPxgSmuDHVrNCVWCFmUgLa9XYpJT5mH14W71uULuwL",
  "key23": "4GvyxQbwNpBbKL5S3kbsdGdNztsh9duEJeR1qa1zThaQovgPp43JdzaRY6XEV1Mq97xGJt458mx9BBjwCAMGkwtT",
  "key24": "57bwVp2ggnUzk8ez5dYkMpqTkB8nKF5GeTW6EHGUScfTzub4rYp6Emydd1XSWWigtB9C86XmHreaopWR9QZP5Thz",
  "key25": "txXNvd2unibftn4Az594qAGcdBMuD94xksF87FKTj5mmat329gcwrnzuzLYeH6XRdb5d5PJ6YVUFQMJG6bvq5wt",
  "key26": "4ubRcdCcB2xsvwanw4F71m43Pwhq79nTaK8LR3DtKMc8b4x8ZSvwQjbUNNQ2o1YT1WKKWCMvesoXgpZaEmFzMQFa",
  "key27": "5PTBnYZjd3Mk1Q3nTnjoeR3V5i6ZVVS1wBUDn3mhr35SkAgC4ZKqBPktRFT9cCJSrkJE3fnzz8GstDBgqX6PxUyV",
  "key28": "2jKSJj2MtSz9u9nNRVZwmUX1QatNKX4d9EF3s5h9J8MyuNFpkvoC8cQog45hxKw77KNb7Hfq9XozwEVj2NYc4yzD",
  "key29": "5jKKsbzBDLX5Eo47W6qHB9aA7X9w5d7ngYpN4Nr3q3xWU3enT9b5DNTj7UG1UfmNJNRxU3wGuiRKTjD7Zrvkun2c",
  "key30": "5TKGvUMEEZG2cUXs93gDG5pkiXCDBJfMxupKeUV48XwFZAKDGJP5FysKGFxPo8FfdVqdR4sijdpVta9Zy28bHFxK",
  "key31": "jmrr6coLQCFuRt5yzHkuY31TqiSBAhE4w3r5QqrByboA3SsRmPdjbJ1wEi7bzmDHaeDHxqescEWnXrEyLNmyUjF",
  "key32": "3qj9U2CPvUvhUdLDkWtSa95oAQtMD7EscM6bzjjkA6KfwHbk16PUBRKaQNoUKMQXfK3iiztm2Pgv2xuD45RSx33K",
  "key33": "4uojY1VNBpxmTj5YDiojFp1nCkxfBKhzLnzBfW5hLyU2eurcwibBSE6uBvYFyVaxyrrmhrFhyP9kCH7q1tBwWfHi",
  "key34": "3hoi91gCUM1eF6GkAAx4EnXtyvsVSGUctxPdgwWpkAA7tJvLngavdehKYfvk5D7S6SkKKFB277RnuZ3CTZpv5mUr",
  "key35": "3372A7KYokrTrYPAydMxRJjcgnQniy54jM6CioAdCwaUuJst4tg22dV45tjGPk2we9oQD7zVDEZbmmixy2jC88Sn",
  "key36": "QvXonoLZSNqerqfRbPRCaDj1FvQhMmPjiaQRfLYV5H5uZQHFEBCU1dUzFu27eUEh5ceQMpDwsCDNKzceeHLYMYN",
  "key37": "28mvtGH6WdmcBLfFSyVe6ykLKHwKbzYYYsG4aG5QtTveiBxbc5884vLPkrA8ikTmq27T3a1ea6SGakeLWF2W7CKv",
  "key38": "RJU6Mm3tBcwoU56CtrPc3319KueMSgeyj4kgNksPKsKarTNvPLn7498f8Awwb4bpKDUzYH86oRqN46R6HDTRAy1",
  "key39": "2gvxE6KYa8bU843tkJiWEY3YrThH3gpvNbLmz7tX3cd8JtNBybgYkt5yt9ZHMwpXR1uKvDextsRmCUhnKXXRVxbH",
  "key40": "2vkATxzsYXeet9nsUtxBQFYndm7xSfJuanQQXoUaGQmQRwr2pDGMaaJW7RtVq7Kh2h2suAwycshisE9H8kGBFFGY",
  "key41": "KKy9T3qgcUU8a6yAc8BnkYh8y1RY4YiqvvCne7vyWp6FdAynZhtUSUN3bhZnXjYxdFnY685zQC1dKwYb1xPyFbJ",
  "key42": "5kw3hvhEX6Dwzb75kQMyR4WQsubeKaZTaSzbzw7gAA2pmpe2saPGz3D867XxzA6UrDqVJBQw67mntHkAsJRrrKZF",
  "key43": "5wQkhpx67Rgd6eKPZn8DdXodAL2qYythqDq7YzE5mbCfEqCa6JYzwZBmhmUc742BRocFdJ1qR7x8gdQBuCF7F5pt",
  "key44": "5TQ7ek1XwWhViVCLeK9qdGSQ6gWJEZykJ8gFyvpv91c6hwDgr5jQC5abXF4WjH8R9JgfeW28C8npgvKesNm35wTq"
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
