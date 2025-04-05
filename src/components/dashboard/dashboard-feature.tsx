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
    "5HKfHpWEYqm4NhtQCsAr88embpJzj5dVJSD1RiEsCenxSoLwJM5U53WsN3ezPUCJqawisMpKeSntCRSnCQEnxPU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhTJVCp7Mpjge5HhJE66QqeuPTVT2f5RriF236uy31K5VfUHagGyRpPjEcv2vhjtYq1eJ3KSsQwTA9NAzgzXmYh",
  "key1": "49P7YVHQLiFMHwr5UqtVJ5zF8wDRnHhmDJz7xWchJc65TstfkKXZEAjMEAAJ2pXdwKVZ9DDGyeqnh3DKHVpyPUFy",
  "key2": "5A3s7wHsERBuwhjw4fcM6n2u1ybBue8sHB1yDZSgvp8eNTsAMzLbkXcvALiYfQWkbLPEmgCDxXQZAUKqS972dzQz",
  "key3": "2PAw2cwBjFAZQqGV8oyRJsMZtyZ6yjSx6pu17VMmc5FZWNhnGEh5LsbWbfRPdzUvfkkEP7yC62V5VutRwwqnxhXr",
  "key4": "5Mou5kzSRrdJapNRiaygojJDyxpTzGkFymTbA3tGicF21dxBQ5Txy7M5AFtGuH8yEQhycu41WDjcxTvBhpLo7sjm",
  "key5": "QTAh3sedCVHu72UiFEmS5UF5ffAEfyPEGuDkDUkNGqbsm39deyGfyCF14K13i2XfFXUMZuhGgSu54UVmduAbYWa",
  "key6": "2YxyQX8tiLPGsgiXw4pw19w6cP48r4VP2hmtAiCP6PRS9X7px76UeNauGy3ZSW8bz1aZ2NfpgfSSqAMj9FQrdgY7",
  "key7": "2vCoGGqsg5havRxwEDU7eB9wKmCkj1Npai57GGfQG2wVe5x4TgM4sSeFLTnUn9qGx2VxcJihvY4U7Qmph7cDrWQ9",
  "key8": "2zcRSjPXoVzjjqi14WCnPL6YFHriu65XZpwcVniCbnKMyXKixPKa1K69YtjSMzUiZPUW8Kx1i5r9HUKGPmarKb6M",
  "key9": "2hgUf9XRGmSQ6PNCe1jA6Gks6bPPEt29CjEfAhakyg7tVMBbcKuu6jKbYUHJoouPe8i2XkKSipMv8rXoAiHjrxtg",
  "key10": "3eCRBtx9wrgAQNW29CF5v3o3dsfmdqKe39Q6ZPAEZj4rwQS3SezGb4tkHKeXHDaXBmUWbJom41QKtpEv1h8K4HVQ",
  "key11": "3gEsxvjHt9MzzSQrr3Ymmkf6GSXbBwJ83vB1Wvh5RxhiA5EaVW2QxrGfdq6FmieugbeVKD8zoSKuAFYNHDQ8oMvk",
  "key12": "3qXXYkDLfmmKQRYis7FAsBPEFgLDLeUNrw6maLMsvkL3cu37oKaHcVqdM3TghCw4h5HizUnJ1dC4PaETmRSQd8jF",
  "key13": "4ek4s6qR2dji4S4WnjJ5uu96PhbyL5eHZK5Bzi4NSVCx2ZUnrJrYi2vm44hC7WxnpiE2d8puYuB4SJwh7tThj5CH",
  "key14": "4GiK45azDApHh6pn1eZS1pL9xgK2KAkvGX7cpzRbzhWQF166AMa1F86V9cfmrtj9ro298oLLfaERNZBviZfSeb8U",
  "key15": "3mW8obS1JDgxgP5GrWgGsHwHKaTQwRb8xq5Sg32U85AkEy9rh1iUhBkvtfvQTpK3sMT6UWCnPk9xnG7soPYxwXM6",
  "key16": "Ch6jRjx5MHcqKhnyGApWqfdZrSKJbL84DQ9GyYDVtG4dyS5Nx8qvHRfRng2GgRJU7e1vYwTWRSf2YjuUdvoYqAp",
  "key17": "4GpPwGgkjpj8RvDHsrysC5PiFWsA7RbKtXVxTFbq9ZVE2HaiQGgrmmJSY8tuBkGmm3VtRpuTxSe7ztefgBYaGShA",
  "key18": "3v9NZH1RJW664KfXfvCD9z1PQSkcVGUg1nGyY8LjPrisusPu1N58r61xZ8GN8ZUVsoSzqihDrVV8EppvypTuqtod",
  "key19": "5h5fCqNhRuqXDsCA2BH46R1GBBRKvEGiPpXpd6c3MNQeKbmrysk6cWvwnidt2scZkurs9JNR2jjZFiZoj4WRDXdx",
  "key20": "3Tr5aByUP5qw4RVBzCXaZy3VLzdafL4mpFTxEfZogRLc3AYbLqhcPQf6UfMCwjdvMTmyR56XXUYJasR4ccfpmg9L",
  "key21": "5HJyxyic1Xm7HY7k8aaBRDKUt3sKmJjjSB2sXqUDqm1XqnKKQcxf8k8qtx8ZDim24Y9EwoaDzBQa8wNN5WvF5w6J",
  "key22": "3bJvhkuPx41Y3rfHjj8vtarHNFPczXvKVxDhriMqzAeW96PMbeSSmLCKQAGxNfngJ3bRBHPe8QRiveLcJztiGEEb",
  "key23": "T4CS9xHyfK3uSXpVV6PKvYWeSq8UHQt14UT1UahhQNzWCEfTFduEQdH1nhA7KqCbcVao15pMQnzLcYQKwYG65Fn",
  "key24": "zYtGD58M75RhygciYr2rX8QUV6A6MjUtDZNRpuCH3ieiRj6oQbcFJXgxFYR2uHWCWzvV2XA3K5jBJhTNxHLVtT1",
  "key25": "3ut8pSi52wiSbhfSExBtw52T6HzFCaJRDChbN3fw6W7YTWF6PZDqD8yrJix8brtvkaR6wZYnRGTFwvEEEMXzfPG8",
  "key26": "uSyk1EvJEEKY5Xkk1h37xHs4WaMUW794FX5W7RatVEB9nYD9tgDbjYeQpBq7AxhTom2DCtwkPZsH4sPPJxrWyve",
  "key27": "BRnRvcaaYLxEKwuWyW4JB4YU5My5EaU286nETscip7G24zggzcFpPcDyD97AQf2LuZVjCCCjYKfDsd8UPLGsqAA",
  "key28": "2UCkHAhdyaopSjK92Jo1rrJ3hkGUZ5xyKoVi1of9vHYivH4nFEnxBTgxDR8WdqFRNQC2UyzhbavabnULiMuqCHbV",
  "key29": "4tL6656FhegedT2WbdgH1hYxGgCpgXtH5UT3NGLQHURf4NkoAVPWwGMy2kXZe4drToszGedaD6StMfWk3sWxJ8Uy"
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
