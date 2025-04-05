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
    "4QYCAcHWcFoZwxhM5wif4VEnV9zsQc8Dg2iJfrp7CpyoSatAmBcQiPtNj9sWa1apQFvGr1uyHFF8ahGFffFwAAuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DdHkuu5CVdkGjopzfw6hYWmQ1rXtHvYa8Ck6L2wGdrp8i3oDVecWaD8FqVpfc5KgUZoEK6XBVFrqjrXQgvLtQH",
  "key1": "sDSpMJNLDWfbt2uEexqKUnobVxn9DEwtrRzZMB1N8Khs2NEvZ2eujXqQAUjHSAi61tUeor4Pn6PgkXJwjzehUk1",
  "key2": "4h97znXNR6s7YJfeJB4UwDuoBfiiKEi8cYxapZcquiJYDcMVESgeUW6iyj8sv1mDChoNcY2rpJZZ8ZnJbMDTK2ZE",
  "key3": "61jCeDpbQ2SoQrZv6d6sEKrhVvQMniVmdWERVnN32D5Z8qP9G58oi9Dz4L6GGaBPiiuwPGhWrDBumUPbYpn6cn8g",
  "key4": "5jWb6zEEmt31w1KePEgef25CABvTQnXcJeJDPU8UxdoLh6R1NSw8xc2k53AeHnFNFYGrR4YaEiT7Z62GT16eUwXG",
  "key5": "Hf7HStq2nMVipeSxWX58oXkTf5cVTAGZP68wVV1J75TtFPuDETa3MJxvfhcbRMPCSK9M1Yh3Qwt67V2r8FfvYea",
  "key6": "2zyWXofhu7au9mAuPKirBi7bvizunGqsvDVru8K6hsaW1vSXayzgbLxM8mrMms6oUZmCjqT95iQbsWMVCZrGXniS",
  "key7": "5XjGrSYTPb6RuMPoV6dfuyhfeyVqqNssbKcknFCvNtPkAuTRPGrY7FdTspJDonVxrg3oMfn5TnfYWquwsa8oFUG5",
  "key8": "2uPKshJiaMYMns2va7TtEiPvJk9g2jtcJ2zQrMRANC3kyYin2EJrYj15rPLNeX4N8bp9TnfQowmeG6qWuR8yw3gN",
  "key9": "uibXv9LiTNhFagfX83Su5Z1FfEJZZ7fvWnu22t7wTkXaoc2FVrWXQrRA9CHD1oEhjQsdtdwX9Fpthy97H3xs9Rw",
  "key10": "s7tN4qFJJfCRCDXcmcMzLgWVvFDEwpKkTWhhzJy3H4c7ExA1orNuaUSf1UwaGiHaTzefgsZoiB8eq8oaodfW9k1",
  "key11": "4pUVYjvHRXPZn1KN4GPcumTgfa59E1eFphEF8JHu8Pe6TPH26DYcWqdcAQXjMQUaxPvvnMTLZTDbUdHbtm9diSzG",
  "key12": "5erULXwnohQYWbbkqh38Kicap8QZH33CnQHdgy8RwCckTc4ggbUpMPEddojPBFQb6DR6v9RByuBasgNAEYaqSuEu",
  "key13": "38rLVotyXfhVnnEfvGiawiMeL5NRYgjtRwDcEWJWgyC6Tnyj2yjo14rogfDAz4iuemfSajUgwVXJgqa3EqPHKxBF",
  "key14": "4PBqp6XpRVhVCUMSzixt4ASqMkCidK3XTBkcUsDVAuKfUydubL9dhL2a95zCfQiKW5oYTmeFNvipeKinnbG9rawA",
  "key15": "3tzmX7BfpnXY3QGGKgUmVa6FDRVKE9ZpfNEBfmyh2biMa75vLAgitgwnVuT6uczAz5KFgF2W2KYY6cQM6hGgUM3j",
  "key16": "Y1CwkYEkJGbaYjY5ij3kb8y79W7HDAFPcJ6puEbyzqjhMePzGtzp8cma8cRJuqXB9tBcz4jfMo8nERpExX3yRnt",
  "key17": "4axQfDpcbkTfEyYeFobAA7EJ5cv1cAvjiTPTFaRy58QKrtbiPis4MAFVYjYmdwoYsj5uUZzRtcDcynd83PnGdxHE",
  "key18": "3fXzZBdXzA7p5LEjCm5dfsHwVmpV1dNZSfFSg6JTsCZQpqZgdRrX2usRcmW7fGik42F9cX4N8u8PdkWeTcf5XqhN",
  "key19": "3W1QbLVtqau8hK2ess2jxMRqfWpTBRXKphonJ4Z8jR7G14CqguP6qHQbAg8MbtaWS3QQPr4Aj3k6J1rRhjxwybTb",
  "key20": "4hkgDMhLkLgsx3jdp4vPuTwD2wLbpQ8W9cvk5u12ku8WfxfbHKPowvBznKKJ99yhyvKcxi7YpomB3YLYNMdkem67",
  "key21": "4vQ7DKUKwtX6a3khjyDAhyDTxrMCDgpLv5EcSkmNMQsrbDinVxoG3ePkQfhFPSzsinCszCxypZ2jtiYByxb9aBQY",
  "key22": "2jsUEk2iJzZmfm3Trd6visHVdoAVtH7EfpHK9MScLP8dhNZT44rGUitrq8eNd97Nu3KKUBoZU1sM7vKNEqovSyYz",
  "key23": "46MFeEejGLzRpm35eWPx4Gm6M9KTiozw7M1ZZB9hVXttn92EkeWFPps6paYRjvm5FsHK5h8kRm1Mr85eBidNuLgL",
  "key24": "5wNQb4ybBmxCpGcP3a6bV8KgZyTTjaujHzmzv6dnUAvzykgfJBNjr8D4vG5Q2F8zPtAxu1jLpKByY5iaADi2fBUJ",
  "key25": "QMALnNDtGZpsAe3vu8zfL5zHaG84F8pqdZrppMjkvH1rJfh1P7SjFZ6UxWiqGLDBLfVfc6H1mKytyZQCSdhMmZ2",
  "key26": "ZSYYLoohqTGdBJVCt8PXx5Vu7cWVeEXcnvUQNouL9rt7bo45SAvpFogcoZTGzuNpvhjjvwiY5qYMStTFV1ZmNNc",
  "key27": "4ZafYGGuW8Uk4NWCCn7L6smks4fEFECZTheqU8vM4RR4pwFWLaVFTf4PMjGZZSPXajfQLq5xzziej3rBwSBEpuqw",
  "key28": "21KcCcdJWJydanjLJrKLpRWYkEcUEkjoQnrrCboc22ArwfwD87hziqJ4ZXSPQBVWsQJA5111UwxWHBQXuPPZzRCk",
  "key29": "iy3pdguXHGNxCvgqEA4dC9p5JGRuN9WA3wvUbnfix1mnnL9SE8u9MzBeAN25rKB3EdByjSfmaYuzvYQR4D86xyh",
  "key30": "Cakfxg7DsxV3Tz5gLfh5Q3C9F7jAycZCyqS9JMQQwNXE5RYQxx9rzARauwB8M4CWWi2U8DcBP1fHmmrNbjoni5k",
  "key31": "4eCkYzNvfKskVzF74zmV4M94d7szfJyVR3h6oh8Dsat7LxJsJc2uSNMFjYLyfg6b4qrC4k44jWA21vxYGH6HnEV",
  "key32": "59g9bSUtTmRZpSoN7SZsQ11a3zi8Pe7FQZZxBFWiV8FEHbp36C9K1XcgGD6juSpsEXQ7pi6oop2f1WEYr7etoMvW",
  "key33": "25Vu88iXxw9m6JTqVXB91DpMBKizvhRkuT65fj79XLLrqeVZ7dVcGe6YvsBsbQzht3VEJZU9rH8joS1xSVwFGmcz",
  "key34": "UqVLxkmmQfcKuDwrxQ4CzrLb2TNFVhFtS59oSdG4JWENvgV4dwUaysNdrcPwoZ7cDYCWcxT1ioUkTWgRgsAzeqC",
  "key35": "3Q2WVgNugwGg3J95xH2nn3t6nn6xyaNLejn16fMJZH58fBY6jTMVcwVZWZxezNTvgfneRSUpDwHL43vVBcW3v6Ha",
  "key36": "5eXnirGXcjq7CL1ABxf7wwk47DeKHRnAXqJATsX3ZkHPVZzk6XCCRDFWunseudzaZ6G5P2SzVvS9GQEcBQnG9vZC",
  "key37": "4TKn9vDAwkgiAnpf4WYYDxrZV15jbx7HktmjFcNHBdg9c8Akt5ix1Chy8RwVHBfEmmjfDCSqQkccx9EZVMQ7DAY",
  "key38": "5m4C2abCwhS8nDU4SfaDbQPZGTUkxtu8sGbzmmHnMi6ydHU3W14a173TWXGGVz2bm3CnHSTHpMyFWaBy7QA1GVj5",
  "key39": "33kBmAh91zf3S9fambpEWmDtxiKXJumUzgZ1qmzrKLhxWeWa8AQz1MLVKFuu8L86uydtCk4aWJfSjAcWPD4BxRsS",
  "key40": "jXqBRK9EYoeMhsPNJTDwvWiYujrc6jfqCxbQMSdwGmMtSkwEJgcvGsYC6Ts9xWhTtBpjzCefsiUBHfbp9otKXyH",
  "key41": "2RWbttS51KmXBE3t2q31WWLwYDSJkheAFNdRMh89nA6Cd8mCSbAseVWgzHxJerDiPyAHiuTgNQPuToSX1hLyiaHj"
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
