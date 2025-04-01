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
    "65RQW6ytuztntgL4bDYkw6DDSAMtaWKdEfvxoAbA1AxTsjvLGKwET8sEvyNmNEQUHbB3x8durzxkcEkAi81pydhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhqokYkm8nSTamKGsYq29EYoGb9hJkWB4qAhaEaFpBvrdc8X6KuXi8Ecq9pQ2m3jT2sgrRvWw4XZQmMRvjbEZGo",
  "key1": "4iopkJYjS4AKGHENbNQf61SjZCEzkSR4R6ZR16R2AhZsrnjesZQLEXE9Qww2YAY6nfKZZKhEzPVi72KYE8ebkrWr",
  "key2": "5Zc1NrsiqM4XpXYLB7gJWW3A5MahpfWn58ECRBoGLToh3sxpGXiGGpEsSQHFEAoTKopiQhgafVvEgTPoDAuFqCoc",
  "key3": "2Bv75UU6n25cFTfXkstt2vdUEy2t5v1a561zHjf5RBf8BShdUJWJFJzrmrJbazWFLA6t2gKF2854fewYQwB6fKAy",
  "key4": "3M8o9pgchnztFL7qZU3ifqLmubyJvuYgwLGUsdj1PKb8WYxnpxVDuB5FG8cFxW6NDa96MhsksMPe4q3C8KUNdBZj",
  "key5": "2svAuN1AicgH3613Aq3ss8pWcM4vf48ExjrSkf8B5BqGSQcT5uzK3WZ35exyAtzXgB8kWPr3ceDvKaBU9227UC5n",
  "key6": "4XFbunvkGcETnhe8dNfhqLZm45hL4EibX125zJfbNUJ63fWv9FG8N9M6uZE3XDACD78Zva1at5CDQfm6Pu6A2RHg",
  "key7": "3nHzgjsCTN5Zqe245ckYJtWRrdzjAXcCRbSP9jvwNz4RKKgvBQCnmTkEuf8F9xpFvqGPTj4ZfTmko4GDponDLrsA",
  "key8": "5oek8ygBJWXn3kmxuGv2MustFGdZwac5mGevVsLdcHn5mQQURDDZHc9VJXXp9sWKehjQAwgRW2AGJdcA4gkuMMf1",
  "key9": "2kuzbo9LFDY13pDoAjN3m33rnoZua8kfBTSDGYeyDGL5UjMmAQHxda4ezJmE7nxEobr8KfMmXk4BHCLrhwNjvfCZ",
  "key10": "55J7bY5bqbe4p4NzfkQbpRrhJ4mRjW63hoELBEiUm79kSCsBB33FJWB7WzfEjx5MyGMYzvQ1pK83eGWaWzLeFHiq",
  "key11": "5SsriraQgjFmBpPAFeZ6BkcRNUnv7T6cKWbtSdXiiHb4crkgQwndxoE2thnnpRBmmg26W94DQgEy49pmjNQaQCLv",
  "key12": "4FuhycX44JgHEGYZ1CgN6HPGokKn1FXBhHHUmvUiEMfQ49qxKuAABMf3AE7hvDMqE1Zs5WKbf49MNp2LwJBUXNqH",
  "key13": "Ec8rcZdSYn2FRSudqbPhac9XqPKdJPpKP8wD38VtWtRrcKLPkaa57ipswFTFSL2YhEDZM4kLCz1g2z4xg5YVGzY",
  "key14": "5HMXbq9WF6md6UNKXMKtGNGityp7SU6BR4SPT8PvUaoAtgypaPbf867UQ9Q6ZyzZUHwepHZsh1BnpCCXNKShSSgN",
  "key15": "4gg7GPPVnowz9YvFLWXnphtESRkGvy3MCfym6rNT77RUtgVmSS3W9FGZacw8PMspF5x9R5meGLVdZ7sd5tUmmCF6",
  "key16": "35499txnyYPy5zJgerUNQAE1b4bvaYa4HCfYtKMAo9stUKEa71mmUhqikMCVj4wGLoGE89yewwGRq8ZD4yTTH7n8",
  "key17": "YKuXGkVMpg2cxfRREF33cvqGxD9ZHTZjimS4wjnamEvgppfGgaxEAfSBL9vKuMg3XKaCLvV3ysagAUkC8SJh6MY",
  "key18": "32E9W2Duf2Qg4ou5HYA5SZQf9J2xSqKP4DMFxwbkh9PvV2f4WWjL7sUsnemGVbwgiXNM3XfPYSgCvwsA5rgzSTiZ",
  "key19": "BSHQ7pK1CAr7FtW5skNZy8Ecn7kjxL4NgFVsxLahq7EC62686ukLME7VabAEbq2qmp7e7zyWS4225VFjDYKJR8S",
  "key20": "3Jm2NXRgPeiGXyUwaUCR3NRxdY3SMPxZuXFgoRkkE9sbb6ShYXxGzqu9gdH3dJ7kZQSGeRTJYapFUxDXRCiyrTH8",
  "key21": "psT2WZ8vgNQHPDKaPXvgt455mrf9CmnUY5ynRuPxQxgMunMhK6iJqGSM2s4xSytvWjruPvBus6UKu2qpeYKsh6y",
  "key22": "6xWsQjMEBsFkSXG1psg1rS3yUz9KNjR36FJjTyUno29BgcYgmm1CarUURzkCFLG9NAHv6vc7oHZLGXfJk7h6B5n",
  "key23": "5DbywrGBJsnyBeEABZYbHGuogtAuH9qgadswQsimWeLwH3MixUJZiTafXPRBYs5NuvVRphm1aWZLbnX1ABUBrUeq",
  "key24": "VZV5PvrapEeJWgHrY4CDfjjZxQeDMuviESJQ6GBAeiZescmz2GYTAiMEvjZnSJGJPL789jn2bhDh7Pv1m2SRqHk",
  "key25": "ciQm7hFtQsjpSYuQpsw45vEW8rQWC1HGDATKKaAZaXQqX7E1f7ki6ZfSU8Ch1t3Mt6pVLiysKhbkCxdgagHjyfn",
  "key26": "2AYugbwSv9GyfgCcXCaTXkD1sd6Gjm7RFbacwMmXm1pLveym2kNwqRPUR98dmF2HgSwB1GgHJvouMZJgxd1XjG37",
  "key27": "rLbwHgLayGUE5VAsSN8AFXEJrdbAaNYGnSy3zQMB6v1BkJV1h9MGSCE9AcMoDuj4ywdW9ka6yuoGxDP1DiUW59w",
  "key28": "4dYwW9ZCyBDW6fw1aGrie4Z6KtZFpFvzZPdmcWnPcQrJStiH2mW7BuhKpYWYyEB2YB4S8gykhE8NQFZuQbhneHbZ",
  "key29": "skmDEW5QMdtF7TVarpK54thRPSNumeCdCufjFBjV6DsK3Livd8vMmbnHah1JDw8GvpCSB3ESTjh5tN9dHiZYqLy",
  "key30": "2s6X11QUFUEtuzVfQbUnz1qT1QzVaj4AUTSBrEdwSxNERvNyg5TSNQ92vnbA4YnkykacxEaDdkzPU4WoLzxfyrR7",
  "key31": "2P6PJcqkaCnBUQXFy8b8F7KHiyBsuAS6ccg8BUZWfFutNJhQ8p8sySiMkyDaUQJsGMN3Mj74DKXP2674FzVriQJj",
  "key32": "8YsFP8YSdPUbSsUR5FZgq2FyB1bfCCxwztLX68h7Zuipa6EMCa6qR1HZUaTNFzXtUBVCoHA96SSuELNAfiueia4",
  "key33": "4bMAAs77w37A91Ptvb3jusL25QLdKz2MeMWc7SeFyJ9ovvsK9At3vnRMFgQRLBmDPa6a4YBJdj6h2NCAa9EJKpo",
  "key34": "3uHZFuCmZhpbwr7uKEegdTTLAEKGrQdVxWMMAhmJKVD5TV9hejsQ82bBjvpP8WA4YzSTgE6yVh7EnhWfHDTgXEzK",
  "key35": "4WMXsSJoob6fLWHrRtoSkrrQDG8eNhNKg9TC8bEb5isN3Ba6ExBpfnMGzdLQJT9h4V1J4gstj5Zjh1ogbBhxTQrs",
  "key36": "fD9ap5tbBcJJJRrMWCiaySnH8q4gktKHo8ZgV5dHyWguzPe9TasLJJ8SCQNSZ2yGNgvnu1eXVBJUuUMTG2Pi53L",
  "key37": "WMXcXUndrjeEFsXTAEopmf2kGMgwr8YQA7X2C8NBFheKHjX3EQ45QZeBtiFmfrR4ZHA1D5gAsZo8B1ZRCopydtg"
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
