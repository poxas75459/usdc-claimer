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
    "44wgJLPWw46xcptEzSRq6cFwMhxqZdia2AymiKPoa9C5hJBgvmm9PynTzrgrAd6bpeZjdysA1fd7Cz9nqLqbiWXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSzb61L9M56gxyPVfVv2BAGkF1AP85Eyo37R6VdRb4PRDUJAdecT5npnVhev3CW1sZAkYTRXSb1e8ePiGGFRb1R",
  "key1": "3HiQ4GqUxCkC5ASyGB64zAkh3bLp8w6jggWUt74BHZQZe4MDXEqek3TKUSzuqJnDiXnMMbJRs3k39ypfCDPdxKtE",
  "key2": "3ASaNgNQTL1nCgW4C8quRguGJQhdrr1c8zFeM9WzP7TRUrcsx4xoLouZbWfkr3K957QDjG8XXY4PGvdvVrhbWwyJ",
  "key3": "5s3omKgHH9JD6ezCDnZgeRRBPbSocSFwdYvsrxdJQR3UQXsfE9fAQCexzEokDmh96fo4JADUE9T78noaqC3jMxbd",
  "key4": "3FUpYxJ4uzLfsEnz2KCpmQYYdYx3X2dD7Te65sG1ba689DQuJRakqLsmhEuMeGpah86mcFCSuUUvJ6iABWLpNMpX",
  "key5": "67kV7KCZyPp3KHFu1MthDiGAERdHKvqLAtLKqkxWjkSbWz4QSod4rZXGH3vR98STMT5vreBHVCT1eLosyEk5RMyM",
  "key6": "5pui8FMn4t27eD7zEWH6GfFfoszb8rRmz5Lc1EXc3GyLgZkVX5ybCiGF4YgQTHjPemuR7o7Ey9BSm9BH9vkTHWmu",
  "key7": "3KUEdGW7ewLvWtK2A49kTkXjpvzPmxX75Gfxemoc7g6GQPwjyU8rhUVh8PT4zezSXw2MdRLET6eGxBzTMTxrY63C",
  "key8": "2FfPLrGaFpjubdyLQSrCUtsEhGFUmmYs5EApyVXoxwF2DpwNaJ7xQMGrxqVdCcPSJeX4dM5Qr1XzTQwWrqzQX736",
  "key9": "W8Escopz8pVjitX81yyhJ4Qyo64NkD9yTKzxS9GrcbvJgntswbdvmRwNAGpHTTE11PZrBP1vWS9D1gACESErWfJ",
  "key10": "4vvUytMwUVV9rbaiacfktjyBkRYV75yD6XxkUg5YFd61QknxAiESnvM8Bb7iyq7iwyEV2EePCwnBU9AcWFdm9YDt",
  "key11": "2qjTKYye2Dy2sEWwGJ5YaKhLdmdFbe9pjBofhAeENBkXoCou4caqo9Ft2733Mbb8GtSWnF3Kq6ckj4nMBHpfu38u",
  "key12": "BjkbeYKxdKEhPc95wMdNChae2YWC9XW41b4zMJcHR8aia46uhfJgTL5iHTwHPgkLnaGcFVXQsGAbag4cqE8zcgi",
  "key13": "KrwpJAewpcKVKP61HEg9nuUvpBpHo7vehUsBx3JqDVYACTkC3k87vEx82xchGcBoPukPP14YAGtpRoTTr6Mngb7",
  "key14": "3MQFyVg9BHDoeSaDGtcb3NnNv3Xf3S9zJKPDF4VDhxXBxxkA6MAaCkKJ2iM6mwZAhT27P8YxULPRWEbBpgAJqMYi",
  "key15": "cSpmjZswYfW4P1swuMJkBy761Ah8p1LN5ADUUxAe2aFUS9hvA4Uh6ayJmzLDETb35DGgYXAXhNWTrFfN92C7FLn",
  "key16": "4yVE4GN1x9o8epQYUrAscZD3H4EYNDSMGA5idgSAUgr1SbFaRLhuVw9quoq2PaaZLtUYTBKQvB7wQPSn7df2Modk",
  "key17": "4LvD3CDuYewSRhDpjKgJLdQk5e2oh6r8SpvmBRusg76X89kKUNrDJrHDYuc5yUpArXCTGLgjEn6kVaqMVqF1gNNj",
  "key18": "ikYHNSZfDGfw48mmjy3t9jenrkPGGYn23W3ejJJ4vjiYTz4eSnCkEJuAe7XYLNx1wRW6BnSzu41va3whMwQNhwD",
  "key19": "5rRFkPdrQdqiRawzFd7kz3ig55RLFX1RB71xWbPi54PHiVe5UsJqtx7C9dyuGbqWLU7Ag2rp4L6ryNzisyNzkNXx",
  "key20": "62tiAACLgqR9oZ8axYAbKnsfxkw21gX1cqXsHQ7Vf8RxRRv6zD5r27gvoEpisoybPjz2RzX7W2eWbWdCVNMx8kD5",
  "key21": "2os44JED4db2EYNpsUD4b6R5nJWxFxCu6ikGhENttzoQRt2bzRrKpDXEgKLLvhAsV9iwJUKHZLcxcUtL8d7XpTz2",
  "key22": "2a8vzErhTYGsbMddoJf2Phez5nkqg2iT4xp1yfWtnmSxPfmRU21JtUgsMM7qUimVNesRhyt7U5F8HFMy6tbZozJ",
  "key23": "PEBEACmyQcRybjgWv3SUJRyxprRxF3sM2zFZQ93iwDPj4prVN91xuYUr6DUc3hLB7UHkPqMjckut5s4uuq83RXB",
  "key24": "2J25cSG9fw5FuCKo13nZxm1g1oM1E9Qz4amvcU7YzCBSPevRQR6AFgzV4kM3921m9G4PbsJcnchYzVqUTqp3nhN8",
  "key25": "4Yz7VDF8pJ45RzVrDxAinN4XW3HEHwHtZC42GxuthEjyE79dCEe1XRKZCxMxUmPdk6TMcmVYQuN2knk13vFqJ736",
  "key26": "KrhaL2roGxGVEnpubQbYaKo9LEm93YuAWpeeahuAALBPYoyC6hChfUwALYAWZTUEGcXDmQAa9GbTzLpdXEqgTk5",
  "key27": "5TeLXL7E5tZ7ZCKyofkzcSe5DQjb2ERp7fxmwXAkP4vKNgWqDv1hVn2wKsRyKNh6QSZznc6BaX7GQv5r3je9PJ7X",
  "key28": "3SBJyjePwkXGdMxNDJQDEi9jaG1ECBtyWi3EjpA6LiRaKrUALe1ETR8zQTFRaXH8UDV9vuc5Zpqv5xFJhW6SpQP5",
  "key29": "3t7p2yUFZj7DxpkoUfRFKXUMGEftCB8SsY2KXVe7i2NKUTuyfNaVmbdPux63kLNzp5uWbzoUGEpMMQmY1kd7cGRE",
  "key30": "4QYvqA228MkwbnXW4AiuLD17Ropsk2Mpe8X3bwkDoCmWKtP7hsEzfeD9pHkf8a7dPCusFKLyCw7NKtWMjR3u2reF"
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
