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
    "4E971jcLWqj3PuHcwZUrRxY2AiWyn9UAjPUNm9evHBhviy1WxfS9dUTJkaAhBENktiXEky4a2jC1BRmHvDqbw55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rNoUeCHr3FTdWQnKiqzNmScC8G5buqWTxzEBGuU4vpieoH4QS3DwwPtkn5dPqNuCPpkw2QWA3K2C5wEesB8CRQn",
  "key1": "5tVBq3NQGUeQ6TaYgjL4SaBYint2DPRPDNaTVH6gGoQoZ3fTQLrE52xXanPFpHKFkSVBU3stVcRZTATwjMf2evoN",
  "key2": "41kMQFthZt1C4CMFNPEwpr2yDfYJdLadFsn3EAGQNoLV3YuiS5vXE4vWPY6GGitXy7smQiRDxDjD79ZeATZ9yZ85",
  "key3": "2boHV8g5WiHs2JbZCnEvWLxGKkKnziQch9TKX3u3ZHdgkTjFzZdqgd4Cu9sPWm5L3phqJz1ihH1kyhgxJJ8XNLrP",
  "key4": "2HLbbvkj1YBa881zK8VkY4hA86sYDu4xfVM7zqrqqr2yGVc1EPjFTUdBhXMG9vEtjEkDMPUc7ypJMZPWorcgGNNo",
  "key5": "4iymjZNU9zkPSJxQcCHKr3ZYR5WaNjHbN9bCJT6vPiaD7WMH4hWxpW2yVpmnLocc8FivGvK2o3iHJ2D7MqnB7wbT",
  "key6": "TB8xjVxstJBfkXuQdER7CWQ3Fy7YKVVSaEEsYJBb39KSQf2rz5LpXnXCwPHagRg8yGUz52VhJgZMzbJkv9usmWN",
  "key7": "5uJqUj5D6iEDR8UyUuA72h6aHcopZsnZizVKVj4dEAUN8kdinw4FoF5muNhXqVoHURGHAeHph9LUY9TutJZrB3A6",
  "key8": "2uB464nTQRZjBUNWxoC6pJ5tiqKu4UE7QRfzJDgof5YggL11K6MRAL1CaZKjHR1j8tdAU99C9UhzwZJGmpE4o9FS",
  "key9": "6GGbz3zfLBAXmM1Qux6tgUALHE6odRneHLvcMVf34ZbP7tMKSY7eNwuskX7yAmP8y4sTCJ2k7eCnUZhp4oBGWdU",
  "key10": "2BEcc5J72t6gJk75DqT4uzDkcqnarudL3yPwU1wQ2N8xu4gNcyiki94Wbird94TcgnZLm9N4264kGmdDZzz9pq8r",
  "key11": "3MoeBxGa5wwSXbYQA5HmHCX1RGQvnoWtDaiUqArxcitPCjT2sfoBCJ3rJwyJ6i95u78V3uamggyDeNiJimTKffuA",
  "key12": "5uXsYPuDYjc9rWzpy5eru2CabG1RY4Mx3N853eiKLXPChVm9pzeq4YCmCKTfnC5C2p7HWKSvUbHCiL9v3PhwfUM3",
  "key13": "2EdQrDz1oMPzS2px5E1KmGEnLBYWtFFMEGUvhfmXmxtYGP4DDFernJnFjo1XffqS29fPLMFBgpLdPf6uvsAenoJi",
  "key14": "2ZKYKr83SH6gHPeXgtPBkhYm9o3ageUSLPjCZNxdjT8Su42jPfhL54WnSMK64orFLxZqkU9peLfBhpYDTR7GDSof",
  "key15": "615DestHTRxR98ngh5VbS32r4M51ctNCaP39Y8wvDsWUTDQjhfoM7cnjKB5qD3KdGeYY32CcgduaokWnjTXwGdzN",
  "key16": "sd6PJxbgY3XaeZYQnAaXiGgfR66ESD2bbtJA5VAptDfLRaPadyKVXAFs6DWLrLgdgrhPg9Vd3zhJ5mJYUz2m5xL",
  "key17": "3JJmdiBs6rGe6NaJ6WGNkSys8ppyjxFuv1r3VspDHth6U9jeU4chZKS8Z5WmzvHMcwsu4kpW8ZeMkRtwuvQveV82",
  "key18": "34N3cedhZKSbNZmYvXKGvZb4N6W4EyKcAWfHMyeFA6UK4iThA5tp9ppgjq3nFeZXe6VDPw2fbAZyaM51XRxVfCkA",
  "key19": "3KX1ebF41d3tjov9MdyTjL9XuygTPXCLeBgrWAfBuwDH11AZLvQaM2GBg6c5ExvCDdzWoh9P8xNcSd87sfxA2PA9",
  "key20": "3K4Yv5pCq7LQCm4snReYb8KUCnGXJNQGzhFSByhnnZvJFyAbpMW57P6Vnhnea5AeJGGXEKf5x31mNfXJeRUQaKZ1",
  "key21": "42Dxaus86reJGrW21G3fmw9gYiWhDjxAW9TBHUiNMWLTqtat1xJmkqhCkrftxLh4i7s34RgytUAhepBZTGP7qxPw",
  "key22": "4pSs1N7rcWctoE2Z7b7BHfYdZjwqGhhq7VYbRRa8VnmKBH1dnhdFPcshtYESwmbay7iauQHReeLcgBbtSuDpzC3T",
  "key23": "29DnbEGVfLa8YawDdVaDygWdnrzyStTTpwtPgf86dYKFDa7JTnMq4oBBP3dQNmdHUfr3aE1iyMo5NUXu7ToJtTJm",
  "key24": "GZzpM7bqxh92mPHxC6oa6g1WWvtAicawtQ3Di4LmuFu6nkCtKEJyW1M7dCutWSLJCb2dYvBLYMdS3QJWPsTqXTt",
  "key25": "3nMsDkKWkzK3mmBz8ZD5fckLKYWrPoYrjKneQwwo7vDXfsDcs9RAeYDXR5nJ2hBXnHSpBh3RaPZKQrD4TswxtdVd",
  "key26": "4ZRJshUrCmEyC4uNh85oD33NvgkYDUdbHU6wTPFhmjKz2dNLD1CfDf7dPU3Qm2CK7vzpb2HEQzkeUZWnenw997Sf",
  "key27": "5mXD898ZttFkN2K4vLvFwZ7y9CYhjrqw7q4nrHDuUNuTkzW9DsCJnoeqoJvMC238EekaRv7GwL3LHv5jjGjrQqf4",
  "key28": "4bdhKJQctQgqgyiARb14vt1aW9Bm1GjUw4iznJu7RNvzAARoTyRjcNQ2uz8y1coTz9kwuR8XXyBeTA8D7P9i7oSv",
  "key29": "QhknymWh5kHFKtQQmrv3xSVZgoGw3hGGqbLiwPG7PfBhbECnSTqmmNng6Rrwk9B1A62okUbgGvQZ9znGSuoZUyX",
  "key30": "35ZzAzTVj2KBnC8R9M8ZH2xtrR1akmkpXUQJXQCxHDx9NyocUC4a8KCG3pibTHv1NZQ9uvvj1jhHnwovRCQ4knj4",
  "key31": "3n6NpybgzgdYWE7SVXBt4U6eG81if95XU1Bcp76Pb6z4waN5Gu6akhGH4kEb11dEZwXbGKKHcQ9iLUXsUX1s7Nut",
  "key32": "5oYfwnLbV64TVEorHFRzGZojHDhrXch5tLkfFRezpZCKfJGJS7JSW4q5NXhfAV3kytuis2i4mBu7g2mWhgGFUmWt",
  "key33": "4ZKYaJD77ZqjZUW4JjxcKB2XjXPp25EMuQFLCrLLG8E5F45YG9sVgW6ih7XKrcBDfg96XhhwczWnStkcpxkpS9Rs"
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
