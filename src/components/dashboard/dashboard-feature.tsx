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
    "FBLPfNBDr7ssiMDdHmdcZWoQDnqVnTa4VUqBAX5aLnqx9rvpqXkoLr1q31YM9ioech5fmJaJJsPXWAFVyTzdf9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebCXvio3jLJwVCyrS63C7arVJZccyEZ7J9gy8k1borEU8PDh3iysPDTJM5uwFDpnsq7wKMovj443pryVbAnFNEt",
  "key1": "FCpanoe4rSujmn2D3dc2sANfDU2h2m6TZshMN9pYFKSEY8gBfBnniA6SGKcVAo6a6oNeeVJ6sCfANV2ZrFJx7UB",
  "key2": "4wquZzSp12hFhwJPKcZcNNCVvxduSTbnu78nURHi5bsSQLdNxHFgYXt1TTwQStqH4vicvd1kkjKF7K5uhiWjXjCc",
  "key3": "4qRNzuVojjTeWk1tgCFz1Dmo9gXpTuxzPq49d9xKC3qpm1eQSmTJZWcDb7GJ6MGNXYkXpmvGPKMSBdoXy6r9XRb9",
  "key4": "dAjFx69SPgc5ytB5Lnw5ZRNyWEX2ibdCBZqwKRaQuu9zxru1avrDfTHYZQw9rTEYwv2iCpqpe59VeWZcavEnASc",
  "key5": "4SmFtUpHBZqrcpNhaHd71fTLyHWFeTt5NvDgQswBAd4qrAxTzaV3v4uw1uCwogPhis9798kuciRBK5mKeFfpmPEF",
  "key6": "2DWjjzfZYJX9jG4sZXL1yF492yxh5JkMow8wSvepfn43ewTK5tRVefuf7c9EymHFXCpLvai5gjyc8LrCtfkpjWpE",
  "key7": "3ndydE7RzyPetWscqtDTkziSD9ZcNreRxbYA3mgzjsrhPZdYp8iNuBxfrLFcnpV6Vn9Ydg1rrvRbAHhNeemmo3xW",
  "key8": "58An53MrtVY9augBhr872BB9USbMSifptzqZ9inRX1rCJLyLFDqsi9q9sFongnmpxJ1xW8FWwhz5UWxKNjoS4tsX",
  "key9": "docrxu4KfxqStLoX3W3kfQKEX6wqoWquarFy126TPHqautCEjqWK113uZepHAcWq7HPQBHR4Azm6oMzZnngoaRV",
  "key10": "2fjh5BqqtECM9VjaRxBCCoi2GsxJBxD2dtrVnBuwtYkVgB4wVBcBHKoYD6V8CpEMUs8qnmY4Fb9hFBCYaxSUZAAt",
  "key11": "4uxxeFCoNevf3hejk9uAqy6Ve5Y9GL8nBshiazqM2iGjBjp3jonAfRiqhxW5WqCKR271gwjjeeqZNkzCzKtYn8cD",
  "key12": "5EP1YMptt7EAkSr1qxBXsYS2a9PAeLQqh4xNBPhC9ifnav5itGzdMrDMRc1htJ123yHVR1Bu3HswFfHzJsKvkEHR",
  "key13": "62HAP1bnJuKAEDqr7gWsRLc6oaACW9G2PCzASjv4SmoSsbr2z2MVZ5GVx66F2sGGhhAnhJNxpX5B2d1zFzmsdVLc",
  "key14": "5co2J5kvUH4UpDEH2fGh1PVHhLkVhut9oRkw1aFFaZYN3E3TPt8TjBLTAi2xZVTqgXo7Eyypq6jJyaHLyUPHkHKS",
  "key15": "5wdKrybgBo4UwStJHs6MTDK6t6GBDMLhTRxVDQ21rJS9Bmz4dt6xZBAij5Hu2auQDn2Dk12v5Pt41rKb4umqhQpq",
  "key16": "3J8MZd6QgGTy7xkHZW3uooQSEVpWzoAKHSjgwiAHhBzDszRLBPWbFWFPXME4qvy6TxdudG69YZ78VBWvL92PfBr8",
  "key17": "3RsmiGTakM6ZKLof43JsBSN8gapUZ8GotZWdP4C5RvZtJ7DSPRfC1TxUsyFsY1P7ykdm7cWKTiRaqdTCj3pko9u4",
  "key18": "3papefQK1a6F3pAT6TcoUGuJesQF3cRGMXj1G3RrdQbgNBNVAc26Tkdr4xEKfPh7EMn35oQNbdEHS3vyxKPKsDwa",
  "key19": "Pt6bXsgrFadaqWgDGyx4ucono4TxCYyCtcMAerxRdjfVbBjJT7UZEdyrX6e2bAEHdrbFMu2KeCLukZ3K4Zd11i5",
  "key20": "5Y6ozXB8NWBqpyDA4N8Uas64wpsqbT6fKacTvHfxiQ4W4VU75SJR3p8VhY1abPY95ExA1czsshhYwnZmq6kpS3mT",
  "key21": "4VwvvkZHko6uE1V7NgjB6HC6VfyruSUfXzMZvZuPpozhpnbSxHMZhC3rYk558DBK4Pa5CEutnKztcMbvNew7B6vi",
  "key22": "2rzHznguKXHJtG4TLNEySMCiNQ7s5bBjLADE2XPxS8tseUQpSPfB1fZN5eKXTRBcezpTqBpkCzsn56TF3Qyssdxc",
  "key23": "38yZREvJdjUPU57s9AYg2tiWkSFuqRu1bHB3sQSfSBjnqwEDviGVUeKSKAeYh6BRBkWuDMpk7NKQZRxACdTopKVy",
  "key24": "2HRdbxRWaEju7CywMaULagDSe5bwfjvcmwJ58czSfqodSaakuoN8a9U1Fukeaa7zisXhG8bEbNGSg2wsLwajhmg3",
  "key25": "4DHecDkSBtU3YCCnm6dnqezBixtTGLiW8s9fa3A9SfjANnmienbmvuMsia9pQSoa2XJH1dY7bWnsyqpXEx8eW2Jb",
  "key26": "2cKb68uxno3AtvrceVDESAKaWyFxJ5yZuYQjGy7XGsKoAxCffoqhgo2YxhR91MXYGAqwtj8foYiyHzA6bFTLTvSp",
  "key27": "5EY9drX2uCY7tWzqfESGEXHCDefpRg2JuKHZbR1ogxqfMzKJ4qgoFjq16B3o3fASrHeU8AspYFp7LKuhCAqE7n1Y",
  "key28": "bqRP14tVSU4dJpowMnZhuvS5hPvoTJYBEHwAPLfcx5zWDLqD2bePvGTNjKe23aY4vrizaPF8HiB5ddYqC5Nx5Ap",
  "key29": "3uVwf5yQ4ceCuPPU329Mw5bRN41Lvgt4arTYt3VNsSbWpW82SmoZdsXC1UpSuD64EekHb6pJHwUe6VUy53hzN48M",
  "key30": "4xJTP7cHMbk2RWiRn1FSmqtzUYGhBvqTBbhUsEhkPqb1k2X9KtuQRw8iELvwUCpzqvjJizTSuRswxosjFQcwQxok",
  "key31": "26P84mpQYD2vrgZ8xB4U92PhJACRZKJBW6Cp9B2itNt9DNpGf5cMZ4m4UEcPfYgeNfv7f8Ht5nGRjkjZmPYS2xne"
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
