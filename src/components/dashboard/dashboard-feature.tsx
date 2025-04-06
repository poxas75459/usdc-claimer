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
    "5SGaur2XLYabrJ9ME9fkuYCW6jPqZ7jze7JMVmkpfYZPrNXNhQ1NLUw467avTqdVW4M8eTRt5Z3xWqdbmnD9cxLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QRhdhnyew9u5VNv6uiztNaYj7qvEht8DThrH2mV16hahaxX1hg6EcNpeR5m5c9LsBAwyrN4Zd2eFfmENaMK8KWe",
  "key1": "eQ6fb2Bav1quFSaRnh53nUiTBrbU8pJmmzWHcomxhUVftfZ8VR9Dx59Bdjat6ubU8DioTh3qdX4qkzZcvQJ9yJh",
  "key2": "22q6A5U8dHjb3oWpKCzngSdrRSRQfdsajaAimFvxhga6B7h7HdbHBAXU4Hk7srnX8Yzwx7U71D4SGdRmZV64mrjs",
  "key3": "3o9kQQmVjg136PsGzvpgWgxoH6psSrg5WfN2m1tEVJX4jbbfPEz7qXdH9tWrXEzrYoPhcApnJB9FQtaEqe5H2wUr",
  "key4": "3T5MFx4xKqBFmHjnaTrByfKvoS2fAUtSBojWtWa3awEPSzCxF331HWkiMq6t3z56gCmsdeWzHRdTKPAGTVB32Mu7",
  "key5": "GcJGqN8j6DmDyszFtq7Ai82mX5aeucLVs7h33XGXzy2zcNr7ARAbaS9jkymmWZyiDS3eLgWumoprAES6AaQeTAW",
  "key6": "5ZSegoeyG9QJ3K4Df4CUvxPJrhqPkwQyDd9Hfs4mioaLuRQehZghs4ShtKHVYxkXeDS2N1HzSWRCW4j3HXDKkJ12",
  "key7": "3LSWw5zvLJootGoASpwXKc4FMgUFVDWgMEAjVqirpfweh2XZfqAasbMBEKCJQvhkpidhQStfAZ41ASpSFBTzJBje",
  "key8": "45iKNQSVnPVRdoBSNcvWC5DTe1fXvXvn9fyAEPLvMV3vKXJ5tmWrXuDcvBbPZuxyRGUb4G6JsDg9mN8yk77E2wWn",
  "key9": "52yHLM8x77Wr6wtxRTR42bPGogN8rwkKWLE42kAtDuHFDNKKmeWHmk5dDNqVMTqHqaPQfkKJ93jELqFQ2smcauMB",
  "key10": "C7z3qBWGyBtLFMLx6Ae6NN474yQ9ByHbGcwrSZuQh6sFujDwN6HKuE8SNSyE7HnHsN3mXBrM9BVWMRyQ4BZX94E",
  "key11": "3A1SyVSdskhxJx7RuYQFRDMpyhdAgAgHzeweWqQ41E4MsLeRDzbdSBP1FSbediL4MuWotgmvkGtyNSopqaxNAD4T",
  "key12": "3ZJbQKfpatbs2XJXW79t7v5tK2wCr4sUbyzb2pnaKXyU8zQ3Eu2uKHPdXbgjPxyvPMhgaGbXjYBTHwLYC7UxqoQE",
  "key13": "47sYQDaczmbGfMF8oUEHEqwKcKcsNXkrzBqg5VzAby4b4arEiJxudkxFeEMReKHmBoj51dvhkYvhm6EyfG2D5M1v",
  "key14": "2unGjQFxkqp12bapBet8BrZSiFTJNgHtMFC1vekgHxFqkdpRYgP9Hi1pygEPw3bgKuZQ8W3YArz9EpZCVsNWDK8e",
  "key15": "3crHVGeHTgBrqYZGmVeKqZpPAQ5Hn2qnZNSBXn4aDBVuQLrzmNRk9jNf6yq3vqRBLpoy1UBCNYkrhnxEfbdQ6bxz",
  "key16": "3Pt6X4dCS3JXGbnbck865S1HGcMLiE1fkve1hxoUBnqJnURWuJS4RFoK6BRCRgF4mKuSUaUB34cnbxPRZs8ckak9",
  "key17": "2W2EXajSkVibjYQGEuuxdTGHsQcm3t67FJbbpwxxvXu9bAgoxw3wBo8yTPbuLh7fd99oF1nT62qtrZe9DJQS4PsG",
  "key18": "8bxvtwDm62RxvXgxbNo4WQydxAvte5yDK2QsGZ9SboF3rjo8aKEcGEj4TaqNgeMpSyQGnDWtRPWJhwCcvozHkXN",
  "key19": "4q1LAdwoRwFWCcaSJcUxXCYkQZtrGvmjeBBfYsMya6aYXsEMSZDFduQeRdV53Xt4iKRZezT7ji76ohRKsJD994iw",
  "key20": "2tvfHv9VrXnriteVBf1J6eUPJBVaeRZzX3HJjXh9XLoWV3oFegGPayhM5VRNeyCG4A34Uquq5TaSsLQJLek841EF",
  "key21": "5SWGXCXXm4UuFNGd28YbL6kSmuhSrsTdLUpNbq1wYVwCwHXaPuKCPJ1wEtTQ3wA4HwQxpycLc8WDZCSQAvH1KHqQ",
  "key22": "3CKcaSnQwobXXbdcJzRpUed6QHrCH9bRDqLKf1C663yjezciPTJiNbNpRnKs6qajTshhWRinpwJX2RAVQSNQeUbi",
  "key23": "4SoWHB646YXFKVH6pNWgm9Gu8T8nhuCMA8jDyovLwFhkVR69fg5BFkrW7zEaATf3KC6SWcnswzMm11q35mbHnygf",
  "key24": "4NgWwc4WnczRJy84oD4hWpRTmzdMQrjwFFsFVEbR41ckDZzvi7dfhZzki7abckiBn7ch14HGhJTNtwYoGnFmiCGD",
  "key25": "4DmuffYgW9xssW874f9DipvjbLKTSwDkayHFQqBqediyuzy4LZz1QUWcw8HQEjQsL3KUW6xdUCp1PmQaDtXmmEjj",
  "key26": "59NYTggMKHTUBRUNQTbKAN73K3Y8mWCPGt1W5jdzdfaAPmYeXKg4V97H5ey35orvxRDu5XfDaxMyTTAFzgCYoM5a",
  "key27": "yLktEAKxxYEysQnzcmo48ZCgJj8bxUkfmQCFwDACUvpnKznzCD2Cj6XhumBYJwhWYQ1MGEUKp2uA9Rw1EDUmkKX",
  "key28": "3b1E6znjFKWy4XJ1jhrdhxqKk8Mwek4jVRiUEKLcPFpBhns8pFzZuoALN8RMsT33FvkuDobb2W4noAQX7njY4pAz",
  "key29": "4xFGPVrVD9M7ctcjU5pKkYqo1UhTDvbDFddJ3wbiRzB3nr3LQiomo8dMRrCbV8WNex76hcQsFPcFhyeTiGfpnUiL",
  "key30": "63YKxbU6yr6uDokEbanvs1cjzZ7NK7DJjbvNWEqAckGEgmxHjeyz4zmecx28Sf972NBekQxEE24CDsGPLRc2QP42",
  "key31": "3qmdhZdDtrYpEXZy7Siw3B92n6uTD6rM5y3G28qTgVZHLfugEvHXBvmQu9mmCKEyJzqxmFnrDvwt3NmriUBWcQsh",
  "key32": "25H4KdyLPLcJLFE6vfbK2MSvyWgaSUSvm1vY623w6q5wve5MMDWsw1Mh6MnxD7L13CTuRHEouab9KnrKZRVGMqTE",
  "key33": "5G4MwgmRnfKqdSwBLcwqtXFfws8q3sXDDB5SwTn2jJ5C3KGuo7kX7zh7KbSA2a9dZaCw8yVMSdMTJv1pAXbAB4T2",
  "key34": "2pTok5N2mSPdqJxw57DKAWvByzN4AA18ALyqn7ySxc3oFxakgbMt4VNz2LUt1GHjP6kPdKTkKZS9DSeJzdT9HkHh",
  "key35": "4E3C4mC4PjM6epgnhUkfJuW9T6m4JR4pR2YhnpkWWT5TMrE7kVbVmMZ4hKBvxcFaHCsFAPdX5PnwmM9mbMVcMXBx",
  "key36": "2w21LrU2NX8og1TFY8ajpP92ZnKWiBpacPkjrS7xfxyAxXeEaCKbNjFtbXrXcMiPG6BNKPKtq1i6p3x8iWZe3Z4x",
  "key37": "4SCnftQiW51TxYwCXoLaLM9EYHpCZGLKsxFzJVk92SAcUAKiYUsaySzqpjzYTm8PRwdVh76DVeZXYb4ad655ANTC",
  "key38": "5qc6xADf7bHm8FpQSwKFdWKJRPwiPeW2pbcNs54EaUGTh5cmXn4cujBjmCvpsKihaNL4RVy2kpduxeCB7Lqn79Hf",
  "key39": "42nAR2Y5izTsapRHh4ey1WLoLahh6B9pTDEkuQc1qtAGYQYM19Vaw7hy9kHV8jUmEp2y6RGHBkZUoLMVxKwkpweA"
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
