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
    "2kr9Ns1ANqupRp6AWTj2vVMaQSonPEK9HGUpEmio9rVWBvuFWtkg7ejhxhDB9wCPoHG88EMYCZbd5LNNmuLRTktH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9pJ4t52e4GrSNvdjp9k56vDPZn1MbWNzfg5zZMN3mA8pKZbpm6GPBuymhDSio9HHGfbhbhhh3X16hSCUQEKTCs",
  "key1": "4y2pDnAe5upbVZ7aZnKQHXbLMwDqX72HgPpU7PyUeynycZqy4rgzayadKHfxF37TUpHt1Jff12XHeJtzyLgXPEii",
  "key2": "4xWgVF19riM4R323J2BqfmarESfekbeVNgXUBdzqN72bqVD5egbaPGT7dLkQYaeEUMw4SEVfTxREL1EKndMxZNVm",
  "key3": "2h3zCr7u6yxq9qqW17DUf6Sb1doL7vaadh8xFXbDMKMyjYFGTQjXwBMjHF5CqwG4FtXwzCgsgg97Tq2H8yJJrLXR",
  "key4": "4yJdSVGp9pGG8AXE49gCFtrbxUTipxUdDb9rYch93W3RvoxxC6V6fEGUapJNXPTQxGxiH9uzEGRwmxkSiEaUY133",
  "key5": "yCxRGscnfN3uSmdSMj2XrjKaUshBiH46XaRhMrXTc5q3AwgpYKWxaJF7d8TJuHKPTKSqT648pv3TMKy99NMhwQ3",
  "key6": "3NLiMgR94fbQUps5JnHX1A9NTXpxhXbgDTCF8DuifxqGdt7YEdsZ3KGSF1jFESW2L2uqPUp1EbcrE61oSwFfEqHy",
  "key7": "6Qgj3F1v5kaff4QjkzuXNeNw2zxR4P9MznYTwvoBb8q1LLynyYannmD1R7eanucKEEwpDMia2dpbL9NGLMZCYKk",
  "key8": "4d41veT4LvjaybmB7ro7Y73J4pBz3pLewHEQjFX3CfMAqkc1LGcmUhXxEqM2BCh7WiRx23vtNbYQz574cQZbna8n",
  "key9": "kB7DCuaPuaeXQu7BkFEH2CLzsFJW7jykbJKGXW9svMSabHhe8NhCR5ccofcgu8GRADfyz9T26JcC95SCR6R4qbP",
  "key10": "2tZ9eYZphv52rxBy2uzCVyB2LuESgUxdCCiQcrrBmivogi4qcvVeNpLkHSLx7qkUb9a7WSb2RU8Yv2LNpm5JW3z9",
  "key11": "5cW1Tsog1qcv7Ai4sMhyio3nRpmnizzcMrWkVNhbA8PPBm8meyDNHbcFXY6jD1jNiGVdxGeuPdLr1QoZkbWNN525",
  "key12": "46eE5xpqtUcFQrRj9vGkFx87J5MsGcY1DRKsZDjwJTa1putCuZXCHwerRab2kiKbU4D88q4vy5EymRXyQr4Pjsd1",
  "key13": "5FB51mWCXbbZv2GC4eYWPZqrU5fEe71dH9mzeG93tFBqAKZ7fkvnQjtmGTUcLt5jpcTmGnukwJWs14ZmAhz8Rhyr",
  "key14": "2mrkjhU1hzHMDi55hqyVBNzEG7PVpiWEskVEYSD2c1iMnh44HJC7RL4GD32kn3LvRZiVqfdSd8vUVbVSXCpv2XHh",
  "key15": "5ZfFn9Ldt59U6hEeX2SiZyJHYMP96ctUnFZsv2uyhaT1hFVTEygoYpgF41AGuYxqLZ6DKBdRvA7SpvFCEu3C6XEC",
  "key16": "4r7aajnxjkxfuRaZuDaN558svG9E8QdbBR6zR4PC4W67wBJ4QCEpUVJCYfVtbtLGPrRB1r99u1UNepQ1Wr4Npdef",
  "key17": "672vnKyu7z4jjr6BxGNqyjMHBrUG3zMYVuwFq7ZUpLTWzRpDkPQRBfAqnVs6AgRQ2e64DtNCSQQ1jTEDSS1Ry7ZE",
  "key18": "64fennHD3dwAzHczALLJh7CcxzvnWURuuDdjAAEKCaZNzKpsmftJTZkhgo6EVEJtRahm3S69UG5hGCTGQ2k9p4rw",
  "key19": "5vLsvnruG9kKzV2dchXaH2J4Co1v5yeNo1oM62vxTRVGHkDkb8At5ThZDUvgDuqt2EJt1joCLzdKLS1Zq1JtsFtv",
  "key20": "3xmr1iQ24uoZ6nNNWPUPkJdnJhKWyJkPguCJTPvtZqdDAw1jo29hRC1DeEkUZ9f8M6KAj6DZXnkE751FWhKe8jz4",
  "key21": "3Ne4RCwVCdjnY5buKiLWxVbjugmPxbbPXDT6WrZEDMCvWd8MLfMZzH4ohF19uJJqRvbFDWLai951ao4Ror4eCKie",
  "key22": "2Aduokq9AxmazLspuu7jeTYP2fMLzVCuBoRyTv2HuC87esEePXdNxxRDLSm9yvzWr1fckjM3LEbQu7A1AKKA46k6",
  "key23": "tZQdGk7fJbjsAgq3jQheaYpzGCr3eF3Bnip82SEV1QZgdm6cD84uNdrj3X26W7K1NGrSfCqeYh9Q3xN2TdpXBFp",
  "key24": "3Ki8jsoEDkiaU5qmYat7D3r3tvRZUATRFpNT7deoaHGSMsq1VqmZccb7F5Xu1kYXDYwS5sEf9XW9LQQnHobD88Zo",
  "key25": "3kEC1WdeakGw3PwYAFBrsgdYoVTXzLAMk4ohwE67tks7mTnB1X6a3d54zoY2c9vyyYNkQEPxutT8B7JKzaJy8hc3",
  "key26": "2bKyQstdTzubEVYyRzsmdYU3Cyag2gk2pYjQ2fpi246gn5F2hK2EqPHpzZXjY8MUNphuDXwUKBzmxmA7kdTHVzF9",
  "key27": "6pkVZp5N9U6fbni9r3erQqjprBz3QiUEKgXQnQi7394PBhwnctkJxNNkJEJGpBHanhpt6dXiQTM2bDhMvbjryUq",
  "key28": "4vVW7w8RfwarcGoqRf22BMBHfxn2zihSjfZjyHKWqV2cpXzHgb88FCySSTKXe1Lu4v1JEVEKfLEvGjQ6BhirFsNf",
  "key29": "rB1yJeQZTUwRg3VT7fE9t5mixf8kybZ9FwZ51ofFUzWYJ9xixqfQpN758wMXgCzkTYTnZ2G6iUJxix4Qvf3tVUA",
  "key30": "2LUUw6EeWaoBdCCumfc2dJc7EPxDV4UkvVmU6SJ37ABU7tw9LGb6wuxse765uUSs3hEPPByybth46yACkcvLwa7a",
  "key31": "64cRpdh89yMAxt52mQLRHy8A6xwiWuvSz3LpkJEcm75sP7QkxDFwyyG48AdK2dLeH7TEGQdpvxSfqATuLdbeFX37",
  "key32": "2Fus6CV4kDQUb7HVaPKD6t3qNzGBbUq7yjKfJxoHW9r5AsdbiyS5mfjneiRGSTcLbScGTDSToXg9VyM1spoiXr5z",
  "key33": "28HWvgV8J8sWitT9XRTECaika5MdwV2Vruffwxr4VTn8vKBBgLz4YNKtvHWYtqAqZCuGBRw3x8V3NCQhGn122LqR",
  "key34": "w5CnKK2JWeQN9vuaw7EcJ7KZRFg24pq2i7SYn5JiZoQudHGLgF8uRoZpDfd65fS1TpDYLD24Tkq9r6hxZuGGCvW",
  "key35": "28Hc6cDGJ1scSKiQiVTheVbbDDVgGptc5QCRMvRQpupWrDWD9XwK7k3xcDK3fApHfqv686rZzZcB1VyJEtMM5M6u"
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
