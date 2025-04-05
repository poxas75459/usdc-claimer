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
    "2mdoeUcvHzjWqWXHfzqnsNyVx29wTowEiRH1TGnLuyEw4B9ZBJ41B93QNnnSfdT1Ko9XSjuES4USEYgwvC62aTtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XPeTX96FdVF16ZVMZbfQPZCB897Cb6obtHoKqJ5nNHi2PtXD2fjWPBqUFLjnpP87fEYyVdT11uT1MEL68Q3iYhp",
  "key1": "4oCjwhR9BbiNYhbQomhzmwp3UeGPKnNwKU2sgmWVZKzFGbTKsRWFR5KS6LKUiDCoUiXY7VREHM6Fn2uW7iLfuQ3f",
  "key2": "5hVh1c5Tmefm8L6H5MvaQFgUrbgE36RPDgrPhkPeZ1rRAepM3kx5Q95edxQRxNdiyPCsq1aAYf4a95Vzros8Ks42",
  "key3": "5vUFhcNZVehGJNcZ9YCX3pF72whapkGfaDAUtLaG6f6rFs6QBMht8mE7gu6LQiuAktqkcxQz3KYuU4wtfeAsKKth",
  "key4": "3TeQVJgbWKKgcta1kYk6Mc31UG5rwWmGWTUq5apAR6b7XiyiDz6bKJcLLp2qdpyJagUJALZTB281mqBpWfSNFCez",
  "key5": "2wVHMsGzut3iz97Zs34FPrAyT2xSqZdQKDhVVjTp4BE8q2w9PLZvwjQbr8w87JPz9JsuPob88nkDBrKR4ZvJbJ51",
  "key6": "3Sj9dJCdHgiZJC984ZFWHdKNhAadXq7jr6b6iN4nkTQqKG2GCsL9QzcS8CEmYCehnxU96FVn5eZEzeqBniM2UdPk",
  "key7": "4hTxQexgiTifwf7YwgNyL5HaxxQw2CZm8dPHaQFiYUzbt5RHHQnFKrm5QmaQhJg8TWVLR2bGG9fUn9Xz7hMmUNTd",
  "key8": "5CQztVbkeTaZPGNTdLN4oDKAeji13dxpnszcWzhXCz1iW9Pnk3NKbaQVwdbbqrZo4Zxy4SyZErjjSV8xrRL2AQFA",
  "key9": "3KxoinXavQvPeCbMqv8NgGw6i8ZgHJu56WgwH3nyFr1PRErE3KrnBFnh1yLQ5u5CdEe1KqW6ijZs8YjCf9KS5caW",
  "key10": "2ijVAmp1U6g43tX5nKXPQTemLw5u1ArSTYdTAt6Uibc1aGEeTTLr6Y18e7W6XEYGQaaDt7Dydwo7zpEgFzZErWa",
  "key11": "5yZdQ9ghQjh3K4dNwmGoyEoCSD4h9MSjgnV7Xa8PrFx2XxQsA8WtLZxBkgULG7uWr5KeJ9UzU5UBhW8jfFXYhLG5",
  "key12": "4qK7fY9tKJTEru29zboMbVRZ2UStEwU9VdjZnCt7dTGfV589dczS2k9eYWCyYTSiRfdwjbgYAocoxx6a7KLBcoLS",
  "key13": "3SVCMDkC8AoyLRVEmBY5uVgsyuooMpejQz7s3ZHkwCcvuwP7ag2gba4fpiyNCBLmUBzcLgV8EU3Dbno5VofBmpB9",
  "key14": "3NxBAyFmTjRg6oicHKApNtwZy2VN3JJFF4MFChBK9sRvtWV1Fh3KQGvaeeH4b2R8QbaZRxZQJNzbBzSU3D48ZNt6",
  "key15": "64CPCYGV551nZb8mvKYjNMZ8uyDLZBfqUnaMWQ4jRu3WiS2K6Acg737BN5myxDVLhyhufjK2ECEm3AifNMTc8e6o",
  "key16": "5GKDCrGBvnXYsCEnUB88VQuXQPxVs88ndfc34oASn4xnpiPaPHWR2u2BAvRdgSwGJskK2wMYcxgddPhvScDzHpTD",
  "key17": "EYV8qpwjQuoneRnycp4A6ftB1Z6GfkdtaoNXiGnXnYnEz2XhdpvugFueSpzTHLzi99DXw38Cya7jaG6qNqcsb8i",
  "key18": "VaLckxRSChEAPmHaVSQv25wEocz1GSimgpRM4Q98ChQ7dqicoquPH67MVTupWMPXoXxWZutGhVj3BNR4Ubqd1FS",
  "key19": "5iWAJGz9inwTg66ENjqDpioXSmwnY1tkaNSxK3weqpD8V4ruD5L74hJAsqHkUKJgDV4in6inbiZwVCrxfHMbqSjs",
  "key20": "3PCokb7JKCrrvRkSNpWiyCzkGePeRoVXqdkL6j97fgP8NvBMxwVzp8A2zfQigbwHEGzWcfPDxadFpQZJz3t3fXyf",
  "key21": "yExWRNGCVzLAzCDEZai8uZq1zyMJ1nSWN7qzqJSZz98DdjHTddYFFbRxfFdaQzhc99XWoG9D9CXZNkukKpLURfz",
  "key22": "5f2dzFaCoXkWbuVnD9v5NqjnG6f9wiYHXmcE5VWXEXVvHqhfBLGEfHdkkX1DRhMB5zC1unuqknL3RFetHs1Mm2j2",
  "key23": "3xFZfZ4NKSG9HnoewKc1fMaCqts9NuJ9Ci8L4iLc1nEuQgZvASMxnVKkWzFn5BgBjbKgACoBvF1jrrGXbdm2ABGm",
  "key24": "4aJ6zoSva8hnaVs6w45h5vr1BrpzBnFiVFkZvNmgm5a1PrTdyBjYTdXpJs3avcsNmEgXGiG6N9WnHqdtrsVnC1Yf",
  "key25": "5pMBco1XRKg6gUrChMXBvp7qpDpENwCi5r3NfzJ7LefjVuiHPFYK7pnrvgqbMvj6WxW7zTyBRoDkajgBmytLcwV9",
  "key26": "2eVoJEQvMxuPg4jMAHFiyekTxmeYQqvbr4ubEh2VLBwnZJyHR1SZJNS8HF2iwhyZy9dA3WTPkDHkQDk6UJNSNyVL",
  "key27": "oekmXGkdK9YHEbAv9raQrZwK2RsniXg3Epk9sJHYTa17q5rCJsGTiZkwPZvTTyy4asiHManKigBdPDjFREbBWyN",
  "key28": "4ixr7YvNPFaPBMm4ypJmWKwDHXX7hsXHNJwKz7Rr4Qp29Lqvxa11pxtkmPVqj9zJcLKhZkDFSs5s1LY3X5Zw4PXe",
  "key29": "3qEinmmrdP97VBsruFX8BrwfdMroHrBLozC8Wg5yE1zEVfTgnq7SUBfHcBHzkWCG53qaDoGHwFitpxgf861du5V9",
  "key30": "21sR1ajrfuQ1RMdZjiT28MZRqc6QzWmfQJtQ74HL1adV5a2FiFEurne4HkCrcxJ8GweZRD35SphvVfVFWqywBNxv",
  "key31": "3x6KdFvxXfWhYWEmQSrqVn8NKemfFXz3VsTgt5niJ1NmKFb5HNedHRE9Kb2dBUFvejab6egVjM4aJnLg9m2qgDH8",
  "key32": "5Cf9PKn3Dbu8pwBCrG8V6EWd2BX5fLH6T3JmnEhEcPPp9pUh58KG2yi7c3y3GigQqwY1x1P2YccASRh9cGHgsyx7",
  "key33": "3Bny4hyrU4Vk23HpYDNQi4qcVQzHCo3kbFf676TJgjauVTYCfqubPXFxUoGtsvQby2tWiT7ySB17E5ZsgCk9ytHj",
  "key34": "2CuSrxjps88mTmpkqdKP6yjG1Wxi9KWY9DqKTPdkfZD3W4j5o99MT44Q6DYsnrVKr95RikjbptUhpXLv5EPZeKfG",
  "key35": "DKPZypQdjzaonZ9X7xa1omg2PRM61UkJv3NfCDQrAwqPhQjA7PhSxzchkmhXxki4sENTUrKkrY9HBycdrAdw6CM",
  "key36": "3CNPCVob9XR7epcsHWAfqVXJTPM9ZW6pponX5YnNnYCMfDYjYM9AWj8RFCKWtyVe2W43g9zPFQyhpcUU6dkHtWsL"
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
