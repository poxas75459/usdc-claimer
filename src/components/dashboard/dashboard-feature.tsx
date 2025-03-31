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
    "3YTxy8opPc4sQaCRKoSeYihb7DCVWiKBCYcVYsjm1KqaZV6AF8qJ4uU6aNFbSTFqegjdfeF5eq4bze2bu9T6Woma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9DqZPyimzRdQqc1NWiBiuHGxcxM64JHx4idTqpeELq34FiozoDhuArU9xEuHUstgc4uVdEhPYQXPcUHpm3KFED",
  "key1": "5B4DHKs9L2sFXBDPrSTeNEqoh8sV9VaePCazzXPFgKN8jua29TTx3QEvzg2DZANf6G8deKRRkXdEjb1vzwXrQXHH",
  "key2": "5mMtSnUihfekjGPD3vAj9RNrFjaj4xxivf9KJGoQG9tUf26fKY8fHFsq4eRTN8bbfsNfXAQsx1po9PoBqpfa8aB3",
  "key3": "3LtJBVba7GZYAjZcEizmeKSWjt4D4VjG7Mt3Qa68YjPStnUZNtfXFi1A2YbbWiLo7KNgzfZtJYarqrHnbV4XBn7i",
  "key4": "5nzLv3kmftFUdMzDKEcL289ERtGZJiKMwEs14ed2HJBxwHQGcGFUcbwGgvXr9KoJ7nz2LDK9ZirftTNEno9s1zHn",
  "key5": "59qoB7kDzLucExjumuWwSd3iqJdmra4ZR8FVY9FpjgsmkDtEdQJuveuFVavUkWWdpEXPTVMPNP6nhFx5nmCeBqtG",
  "key6": "4wo6Vovp8Q8sz5dwD3WUJ2ejSW2EYJx4sgyZfqZX32QBaWShEb49kCKVp3CAe4LpYaKLJkmERHwUaDtCRdMSwH9W",
  "key7": "2WzZbDycDnescBZChjqFA3BW6wNzWWU1VQJpKRjJZYowKXc7wcHyavW1QYj1DndG7n7z6B8XSWy2BeSkyjhU3B9R",
  "key8": "3yhqRx3D8gTHuTRURER4i5MR3DXk9bUQwZha5gj3KNTB7ndeB5JEa58Nt3D2Cm8bN8Fgh7QuqaxKpP4KiS2SXXBa",
  "key9": "4Q3czv2GwGqeZBpnj8sGUDntpQr4UemfKvJw2JWJbSmVZw1Bi2CZse5inzuPkW5xHJpo8ZBjFX6YfEjC36SAFZfk",
  "key10": "23zuByeYocwVyR4cTBtw4SRC7Yzy3R4rqjqwspBwkKq2TxvbCUvk76zUiyK6e91vG93UsCr6bqEK7fvYtacGNU8P",
  "key11": "5T3XD7Tn8wLUBsSwdsZjWSCVttLMcn9uwYCn8CYE5B4bJbuDsTvzHxKtJrxTgGUQJ2C5wLVv8rKqukDTQpTpXpEF",
  "key12": "3wUWTshTJdMPiLVAszhS2drQBZrhvT2Y27BQ9ArgbzP89smhptJPFjtKbCpU4GZgMvjtzPd6KJ7tkcL1tqDUwo3T",
  "key13": "2vLuH6y8AGto8NvnwgKVwhQ5MWQ3LvGY6BjZg2s38g1bcQxd51aoa3LQ9SoyomCHTVFLKjCHHhdCEvW1SQCa51Xq",
  "key14": "4QmcPGUfo6TqEGS4WWMDp76jVUNkVqwqZjNHSB4agv1RsDJ5Q4yGmBboTCQMcB7fdEUUZ3XdsMbaEt7VsGxGWZVT",
  "key15": "7zFYc7H9e5j7U5661piEAtAGWUc3Xe8wg9PTyUJjUEktNZV8ZPABeMACA2Gai2uw5idTFKFLWLovuJU8a437ssz",
  "key16": "5cbLFcJJWPCueZDUnQsHPGAuJhdSYtLRJbbPe2ABtw4pRQMiW48cnyiZcpUUxU3wPZk5zhX1es55HxXzuKv9t5FW",
  "key17": "Ji1A11Xi4yAPzTRfP29mBY3ZuJK58oQY64zD3r65fQBcxrdSmC3K6PdD5wj34eE1apDSU3FiVj8uiLPxuHmMi4w",
  "key18": "4E8vWKEwdR7zJjAcMHh29M7AwstjVVVLRcvd7FzSNkHnwVg2tmKU1cvHLtqKEbsQt3UewCHPFwupEtWCJTRSSFk8",
  "key19": "3zXzFN7Z4ysMmo3fr46nFDFHaZ6RZyPZprmjfvPRDZMBNJoAEYTpxA2dJicQ52CYPH9YSsRuo6dnb5jp1PtDCPRn",
  "key20": "4B6HP3D2YsierGcRpHjukRgdY7t2P2ugyWUv6xXvaYgg5wu7TMwpJcULs5LMB5dud9yvrgcjpva3HHLc2SUerndt",
  "key21": "3cJnfpwgYJZ186NbvYABaXPin2U6WhRJ52x9VarrDyEEUs9HwFkSztjhdoybxV2d7mYoV6PsQZbLCh6S2fghfdjW",
  "key22": "31thq4ZgWREeWDqg6X3dwMiZCJjvHa5NQTDAeyLd71RUZCVUNGJpZtQvKhmc4Ldsha3pZs5EJETXGsPS6stVACKm",
  "key23": "3k36LHebsrjsT96UbmitWWr9QfUPhaCMfUtzcPXJAmbWRcRu1obbCizQaMxHcE7VGiEovzu7QFjzesMhKFUQxrCz",
  "key24": "RMwqNtqom2DN2dc2R7z1oiGZxFAbzVyNiHVekPSXUiJEe1EPXnLT4ZhyZ4Xg7XR9etmqMGLjBvNWULUpyGwTi9M",
  "key25": "5DXBRVauxRyqhLwjgGjP62inAMtfT43LJwQQkVw8ykJg2FbraRqXEV8msxYhBQ8NisqWxYSWC4zaCLpgEA1nTJpk",
  "key26": "5Ao5Cmsep3AvtN71pXh5oAMzikugMiGLm4g8RiEPUTLrTT9mw3osWW1ah27HCzrRkC5SgRv6QJZjjAU6qNNahChK",
  "key27": "3k4dT3YdrjUKxj5kauKfdc4kGzojBqyuD3cMkZxexH7Hq365pKHUmY7uiVSDuwiESpkzJxYWgYMTN6CpxAbicYcJ",
  "key28": "66Fra6G2Kgpg25CKmmxFBDXJPFWmr5GUEoUDGWU6mCKwkdTWz85kkwnZyWac3mWo1UwViZB5PEGMyAEametpvpSF",
  "key29": "35r2ZfezvCT99aicbkCvnrjH93pyXM3DVmHjNSZfTPQwzWaqsUzcPaWHmxMDcDQ5pHDxR62kUMQDdWLvh5mqGpEy",
  "key30": "5AGmsqk4kSarCzFt26B992hZ2istLp8SceBYcK7GDfNtbwDvVKwMp9S5dh7xhfH4dHZGsBgcnwRvdP2SWaQqrr8N",
  "key31": "5jSCdeqb5ELZtKq9LXwb9QqghrytvS8e9DfEpfv5KeLBWcG2VS2Zesitwbwe8ggVjPwNMX5WcFHQVjd5SQa845e4",
  "key32": "4VDzAabU4gFoBcVPtT22hWus1b2ExnC6F7iY4tmPjgCTMbEiv8UA7QY9gXmFa8HARLVMV2np66nNu9v33Lfh5pa3",
  "key33": "556oBXc8b8AaiWhjj7exW3JmQaQVhNNHqEZtWxRKi6xvqeUoToYgisGZAe72otw1zS2bBih6FQpyG1LBDGrZ9qB6",
  "key34": "3AaaR9vBeMuu6yCreH1ZrgBwCLwjEqEWL3jH7Rb775zsSkirTvEr1C7Rhfcqw2W75joSBdQ11Amn79WC7QzAYUCL",
  "key35": "WZSgsrCEfvi49FjXuZR2hYqwvG8pcsg2pcPUJ2R83PP4PuqpVNnMA2njKSxReQyrScn7wthHjCEFzANoYKfDmuK",
  "key36": "3aqP5mXQJ9a6VBEDePciNxkD6tKiqSwNFeR11aimrNHtPZcZhQZjUaoV8w4esSdEbZFBGneg5Dgeide2JfLrF8tt",
  "key37": "1STx3JWfjgzdwbHExjiXKYqmvXbmU3uGsfHEEK8ngpWXq7ZuoTPNi9b82Qmbhrh8orvVNjMyVNbJNF1hCcRKqXa",
  "key38": "tqn7TDSWLzFF5CAffZZwpuboRSdHQKUKSqqtL7Dxgob47uv5qgjUY2FYHaJzoVWUGK5BVH4mUJvkUrifdAhbzky",
  "key39": "39Z6Dy83k6gTVTV1V7z3qJDUdKp7Ev6UrMmaTLaVkSJ4GrcTcV46PvT8pmEztXdg2sBRaWP78aV51QeAfwbpk9Fz",
  "key40": "4GSeYgcFroc2uTP9yXgukqh4Pifc5xWyocqAE3W6Edv6ja5Nq9ZebAdkTSGAAqiggwve1DL11taRprEeCQxM1GT4",
  "key41": "2y3RcUX3KHzqQXcB48udwz7Jtb2NdQ7yYRdWzYjgVfgUYo7FM3UXMTCad88GNSNR6Bpwxfms4qBREP3w4Kra2Wxf",
  "key42": "5k5XwJ5BdnE9fFpqSqFDQSpMzdX366qadxHqtaGqXfjDHyGVGkVPz3snj3GbfEQZTGyCxgZUCN5U2on4Y3gQ7HMv",
  "key43": "4K7uHfvWaFjLXM3P9BWM74LQGMZbgRR3aHeG2LG3ch46XXnQ8AdYTgD2MkCJTSx5b9Puqctc8F6czeBgoQi66gVf",
  "key44": "5jwTP4n11PtTxuBiBJ4Y4heyki2NTsvsh4iRbJF5sANRrVpdMB8wse1uHRqFWXhYzmQkx24d74b1vo6zzrVGWHco",
  "key45": "4LUQEFe5LqGnkJX4X9DbSyUTekH6mTzXjmzwkFDVbW8F3wvGEGx2fMNS95X1CVVRSizXyfGH8xoqAdhXYmXqzqnW",
  "key46": "3h3xohJiah89CPTVYgqQAHxrcrL7P73NVBKz2kyaAskrGbMmpDEXv934oGCkBVSTN3L3dgzWydwbwqzLTWRiKmJg",
  "key47": "29NDG3qLeuvDCGBjw2ejEBdCqn54GGJ3s1MqiewNvu1SqQVoWeb9eJ2US9eKkRrm71Ab7JPFHpcyBiAW8ytFtvW4"
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
