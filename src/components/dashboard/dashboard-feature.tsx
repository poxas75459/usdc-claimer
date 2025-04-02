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
    "5QfGvz6oT2zmWr7io3ZPq5V2vev6pLwJbY9SYiXLa5i3N4KXFNcRXjXLJPxQzL7QPxEtAP6k9gHP3MHRMpvuNTyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QVEaQK38F1d2QK8JdK6my9cxaookbQW3REasMjdwQbqs9gPkJRJiGVeh8ejKFoXwBneBZpc3LfRuukRJ5SgNPWB",
  "key1": "2XVvkM6vAy226raJFbk4M3uDrVaPEHfZhyvD5TXiyVi4ACfsDyMxWHFiTaALCWR4pVBGm7j374r5onondFu2R8K4",
  "key2": "9NfU3gfMnPaTNnZEJY4RTqUxb2XfPJQ9vT8LUo1YeQRz4yWM2d7vitcMcHQBpK3iJboyCFze1qFrtovwTTAXBYA",
  "key3": "Zfx2mJgjXugU4bYiXkZTGDzKKcvNaoKN9Rkx6yCHZpsAQWnKwxFtvqzDSRQpgeETwbNYpZq5NfVD31XFNTeS6zZ",
  "key4": "3Ed97THBqChGx7N78U58AcMnXdhZq6NFp4R6k44WiXmEfgdwnwoEfwzfXKMZQu9MY1U52dqNHBRk4Lj8nUNHsU1Z",
  "key5": "F7SeUJ4c15dLqtFR6HWkX2ATD9Gx9Xf5qMFcsknmGtqvxnLzHLhFZQg171vsTBJMXYjcawJUnMKTdymdc3ZvafA",
  "key6": "3QyXYvaKPEjUxETYYuhmdhrHrkog4Z2ccihwRzkMP3wFjo8C4fqpGffSRY1tzen9spbdpzddUSCw2XsVhnEbTo3e",
  "key7": "wK8iVJ5nqJPjxDRbwzqTnya3fQA6udeXUwUXYKwd3cekp8sYLrXPv9gBfZv2jWkdVEAbANBTgYX1z8i8EnByA66",
  "key8": "65jew8e6F9qpVQRpbzKEojfzcxbuovkPpgYL1SuB9RioaNTz3X615AdKYBpPYNsFdhgNmVLeTmgV11h98LrqmWbN",
  "key9": "3m9WDQjzNj3oeoRfcuBkVCkZyjoypKmoKjSeXNepLRYmTjefaa78mbrQfqiR2Le9UZPCLNjzgNUTHpfTuKTBu6PJ",
  "key10": "2i2u3kwSkG4zjYhTyf3Ucn1Z3Sx2ubUeohqGx6ry1ud61cnEtpGvxm8mpC4HqNLqS4wX2mRkuSWTcL2sH9DP6yoc",
  "key11": "4j8hCF6Z1sSA4niaNyEpiy9tVCGXPzxkEvQdGgLjygnEXBpEUgy4mnpRBK9W2FMNs9gwVeVxk3xvuki4BAwLFUmV",
  "key12": "5L88z4QgSGvpSsGmfFbMfgnh1JuX1UfcZgC1Jnu6jHeKoQnAiey6wvpBQZxmxUYENZnojviS48PVGJojsL2jfp8R",
  "key13": "2sek1uPd5PKAyWRLMbv7fmMmTGCM9ZQBjJ4x9ugLTAh5vMayAepdVngWMtARMp1vUNaPsZ5KQe4cLYkXAmXb5Gdr",
  "key14": "4rwWecFuyM7BqqsJ3NkT5FtFaqjeYHPRbhMRktXxs3BRcf6PAzmjzTg47NvTwGKE9p5UU15yWGmahnGniUbq39Ac",
  "key15": "3gKiHsQNd29iggiWr9S3vHrFDUj76VkgdQKg54LXyjQEYYFixM391UDp5Mj9UBoYUWYerhfCfDKwtnHGGU2sMXH1",
  "key16": "4ioom6PWUZyoJKutdWgLakensnMCcepAPYeb3vFF8qukTDVMwj6qZcbFPyUejxEXNffwdx7qSMVFb5Ymr8yEzga",
  "key17": "3LoHnEkfkHMerygd2oFzVHxrXpfiwmoMF8Bqu6QZRcHnMPxsVgFeRnfMyW2NiyJkLEoaQfR24rT4CvtHkBYQXncB",
  "key18": "3WQvJvhZN96U5nnrAXjSNUTCq2fMPCxeZ96teC7ULwK4WsVonxfnPBUJhhZrmVnCRHj1L2JzD6mKzz4Z3cEE75dH",
  "key19": "r6JtUL9pSDBenmnKsTgs4uF7TkKe1bMBpRE46xyv1X6SCUoi4hgUXe6sm2bpBnRUmbAKKHKfvEGCJm5PzTNFdoN",
  "key20": "24xmgEMv79wn7am7tnDdzyUHQhBfuDajYyuhta7ZHgjKKFVgbwrrytmyrSyuFELaqitvM3LQ228nRTRLNXMQezHc",
  "key21": "35AS3R3iCyEyHCrYyy6yEHJqa6sLdN7YVX7sHf4FpZdnrQa8Z6WfJ7fsk9jejzWt89Epq6iPa8pzqJa7mfZUWNXV",
  "key22": "3szfftNQrktYdNcx48BCHYLD7gMRVYnvThUzADi3xrFaKphgxxHXj5uCZivzxnXojHTmz9YpEJvJr2tByNkD9B1Z",
  "key23": "5QQK3t859XjwMiJMSRmxeGCuS53xjt8Q6fQpcFamz6SmRYZoqSMU6NZoBZZbKix75tf65JxgUvCzaVMTkZLFix7t",
  "key24": "5VJsHGUwCPoYT4CQgu6ooP9sw4zHirNuamK2Gi6iH68EsuKqsNz9fPNgPfPYGovTUD4FuEkFnU4qD7tvNswWkAKw",
  "key25": "2tdgjPiA8o7uJyxjRUF5myQidTNGJ19uavMJw7F8rkAoQZgN1nDs7kbtK8fLzUD1gxwopmRNkbeGAVKrxHuw9VxN",
  "key26": "2ehiYLbQTTzqWbnp2KbF6nStyUWkFp2Cm3WHPQQ253rcZRNX3K23acPNxKJYRWgayhqb8M2tZ7HtQakraFqMtJwZ",
  "key27": "54gkDmb21B73RY13axEkJLQbSuxmh98rxFqFAVyY9P5AjpVUpsYxWuZ6VjBZcR5nXqG7cqVjEGaK8VamWQXH956m",
  "key28": "3bNBDRujpd3o5QCYLUUDbj2qyxbnmTCJo2Lna2cXPz8NSFN4YXAY4nXhP5UKihhm7gVimx3N8jzpcCUBmcECbQj2",
  "key29": "4cXpxjqwpDqZkFZHPfWr283wEe5ZJv29cGTd1Aksv7bCuvC9G8afytYbx6ZAXpzbXA4wAGN6nY6XBgEDfsurJJaV",
  "key30": "41hqMGDEWJzUB3LyhyYGout6e8deSafh3LSKr7pMRe9JivHUhftBM4MK2eUkJQoJ9Qcm1xha7B1Fp6Wn3uKAJqUX",
  "key31": "YYhoi6fH75toHs5pU69zhb7vcBxgeXE5QVbTGx8pBWtsdnGXoNZop8TMJHUN8vqUzrzdMs92i4oYrNzbER5cu1e"
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
