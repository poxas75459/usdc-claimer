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
    "paKq9RUEwgak2LcGB5Qc9P6jipEr6bNSSE3ZGKvpEuXjRqMtF62MTUaUncf41tySeN85qvvzSQGotf1sVMfX3w2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8D73DxStbyxDMHxbfrhestnBHrwXzf6MJgZmRCgftWPRx2VHyLyMRsDSYq34gkU2ADSUL5YQWg6cDy7SnXEfway",
  "key1": "3SZB6KffQ3D5eD2iGbsTZiYCpeAnBGUXGwYkCbxr4a2AFqzrEtHnbJqYH994B8gqfaWoZKXSUveeXh75p6cp4gyT",
  "key2": "61DJ8bL5CcgdBMFN4SoKe4BNcj3AHk9f52eT5LcBj6TES5zexUuzN6NtEc26meQpjY9AS9KhWoaG37MCGrXZbGpR",
  "key3": "uBJJZMT5GvMhBaqW1qexP1XvCGZi4kZ1HpyGq3rc8U3aARKJN8kXMBaoaQg8cLwvFHiJFJ5iePzRUGBQUxauYb9",
  "key4": "3bT9a82P7rZL59uBMHUpWKwDSCfJYYKPLNCJmfeDGSqM4VipokJh6JMc74PG7YKJjcwo8UCUu5gJ6jWEmmV5jD3M",
  "key5": "4aG5KELHeCpF2iRhck2oMewPSo1Cv2ZJVknwY2DFzR3yXqXC6jcyxpCRHHHTbYVp31t7ePBcWWZcrTTxELdcgkbq",
  "key6": "124k9HJ18UvThj5MRcwFXiLrGxGLYPJu7G4BFeue5zn3ms17hU9BqPYqUqgAgJiPhbwBtZJHUTZSXG87T2aCTPfA",
  "key7": "3nEEjhwT4J7uQgDK1rgb76GfxMvpKcCAawUbGR6VUeBPc4grpQhCsTLBAmyxbMfUzYr5hXgG6Yj7NLq64EMbYjNe",
  "key8": "2CmbXXrZHE34ckbTEYtBY18xqDvVvJ67Kb1qcU7zDZUaZHx4fH6nowZSLC52oT4Zx3c5mqgxQnkhVLyyUs1ABwKV",
  "key9": "5rMUJeCupaP6yPcpFXm5AsWz4Ku15WMq2kuTinpfzf22M2LrZp8eoe5aGeVqytDsNdaoLST1YBre7vF5fDj3jFqP",
  "key10": "5TutMi1NFAbMH6vZLfVcnD9CjTK3kzKdS7HDyuBWWbRZu55wBCwuwfixMtigtnDQ1C5frf3SrNzmzGgUK13sdVDZ",
  "key11": "4gRGf7vw7PCK6iJ6C8CAdbBCoa6WtUXZp14krQYBNozggK1BmqDEziukKes9ts5uaoToxofrRZtLLmoH58SexgrG",
  "key12": "5BodRMWBVRkcMRGYZxEGqUZHmQK6StrVeBSy81ffZZVdFnL7do5pAKB4EQ2eBPobk59wyiMcnJHZcg9aKeivc1vo",
  "key13": "582BPF9PghizZ5u9JN6CcdF9qFBmGrQX1mEdUHzJx5rTvn7wdQwnxnpXBHfF2AEooXTEqYkJDdZVZgVMjFd8mCWi",
  "key14": "4WEQBVeBxhrsJPnwooVPtcb7iDQUeT7aRBLXJZKAzK2bE49Pt9cm3TJsoohRB547co2H21geBtTjJ1vXxfA1kAug",
  "key15": "r1HNVgg2aciR5Ny3BaKBcjkZkpzahC9gewNNBRWMkWERvMjjKFsZykXTDnapatHEHg1WNQD4RCNBGUNgVihTbyh",
  "key16": "8LSbgcVicBwurd2FLVT1zwgvjp9wcyucRDMjA5Cj9r4PTuYmWuacoyzvgrpNwQ5E1AeeKfmj5DUfy347svanTZc",
  "key17": "5atqqf5v4abTiSL3LDYX2rMZYEY7F7nrvn2BJSAhNs5BnAHgahLUzU8pxvAgNiJ68rtcheyftgJAgjac2uLJkQmG",
  "key18": "5b2K7wVg7YLnc29Ph48pkNVv7jRtSChTTbrkyPiXZ5qEBEd1LJBpvbYXMHaBir3E6213y9CGsk2MVATJarGp5r5i",
  "key19": "4VSgM2RgCdZRtEJdYiEhuJBDv5sJSWMSUbef4sxieSL3YJMDitqzj7ed4Nwffrz6KoDScgwmTyFZwYSyodtwg9Si",
  "key20": "4a6LtcbTzbv7hbt7xb1P9tYYKBYYdUYEy5xvWeDd2Pm5UeBva8EntDCa5mv142GfJVgxptCCqAGoSizM6c8KJvDJ",
  "key21": "2JXwDY8mXDNmBT7G3xV96GVzxasv27z9qzZ5TgEFgvstht9yLokXkneYXL4ejcA2K3xhNnC21AsAXB6jGgwkdCh8",
  "key22": "5nd6x8apm45rxuJMAmA4spxCKboBWKYtpgFdutMseRSS2Ldqepkdpck11BUcbyEFRDseKdpYX1yyCfTg2sguGEAu",
  "key23": "2dRsJSTGp8L4BDAgAGqRhYJaNCejtxRjHtSzxVg7fWcBwyHcPYFdygV2tdquJXKexGCbrbgSA7Si64eEDC9dEiTW",
  "key24": "kpyiLyZdwhzEDFseWNifAnPA5CjadMYLPk6cbTfHPSuQTPmjat8JZ2a3K5zADRVh3DS8kdy8KrVn5v4dP6u9spY",
  "key25": "4nR89DbGmbEQPYcMmarNed4tkrgrf4R1hPZWqm8xmfZedAVmJPhgwRPy7Z4RmUj3nVqdevKT8jDA8jHQC6vyqxHM",
  "key26": "DxLz4Q8gKR66jgUaBCakTB99KBgvMdJ5i7hBAXzECCCm2HVYEdurYQJtSWXhP7KdT7hS8aZ5d7XA5TEUoWuQf9C",
  "key27": "2EWCZPPLLuoSoHLL9e7zZXhFJTfW3j9RM7p98QodFtVv3drXYmiCoc8NWJEjJd5JUofkTV9VXTC3WhBps2Z5LTvw",
  "key28": "5DJCUhmH63mCvB5aLxxKtyqhckqjyA1XDVA9eSx3kg6db88ZFzsx1NFHQtof32yReHK7jVsevTt9vQqRrPSargp6",
  "key29": "38fm4pQ8fYbVZRMGRQ2gAFzbMHwDKckPbwYedBipvyG9kzXnkCqkfs39txPJM285WULD2WcREay3SM7cJpDy7E1H",
  "key30": "Pxnpg4wnonc9gdBPEyh5dgym8riB34yjAHPYxJgWsp7ZdTcBz2KbN2R8sDvGaq5dCcbRxa9FdD5VypBhqXQxk3a",
  "key31": "2nBQrXYoFnJX8soxYGarv6aA56u19jM6t9Mb1SeMQZxM3vVbYzvfzPwtPUn7PJZuKUai4MzvMKZW95gwPzgpHm15",
  "key32": "4nRRPqCb2iGwrZJ3Sv21cdGFeSoSy8b4UwNipKqVRJFmCYxd5ENnfub43jPp6HbuoCnNCxVzZGhBHAtoDp9iswUj",
  "key33": "2U2ajoeQgbLBqB834AHxWzCw9eC31xxCxmEJwUZjVnBVGfRYoTYgyjXuq9HCSrx9X3nXQbERWjoAWEnLzvx7xiq9",
  "key34": "WP8QLDjFWDa67W2xrqFKFHwv9aDPiYSkWKURZqq5uDDppTwuqsJ8KU3aX7ku5tzhJXTPGaHQBLAY6iXdGBziENs",
  "key35": "5oUdyLmuDyqJRrRXnUzTDrY7hAWKL2DgcNvXjUwpoeXUyHN68t7iyuNDY8ATgQ3MFYzMRkNmy8VZn4NmpXLMCQgA",
  "key36": "45FrtnivSPEuABQeno7qK8ww7rJkKWTDb7Wxq8AvaVyuYaguoqpxyHLtCXd7AW9UvFfdf8chizDytUAVbm6XSNWZ",
  "key37": "3zQe5GJDHPsNCZKBZrn6gf4DweHfu7bxc5itGoTELtRxd8C8qswoG1x6UyKaJM3zTrFtzzHobj437ztQWK9wMPWE"
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
