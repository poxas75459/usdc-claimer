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
    "3ebeWHXiUxbacpDi3JrXkf2r2ribRxEABTdJz71jdTD3SFEgr8x7b9Y2dkhopAR5UwLkeYpua13tna3TAEeDu4HS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUkXmdHQjDcDs8eZ1Zh8NqVYa9GXp6XcXLKGz6q7hyAHuRPgDFdamqepYddW9ZEGDj3PsVvAepAnAwzP5qqvfTq",
  "key1": "fApuLgsXsuw9uriTTda66GQQ6J38KCHfruzE7wy46yitMH5rJi8G8rkgBcEsQkjcJdU7GcfXKJ8BafGJSfZNW6w",
  "key2": "3PeVnZXhi9bPEr6kM414r8zEUUatSG8tBHJPGXa96BfYZQVXktQViF6x7U4CqzsXvjmEJ4XqsZSxN49x4Fr82jMv",
  "key3": "4yox2jLRC9jZQH9tpMesQ9E51A1xGrVADUMhhhHrtFv4kUAq7pPWdodAboiqpb1EnCTSBZ1Yk6d66LypxovDAJkK",
  "key4": "5gfFk36fZdcnDishg7GDzTYoQxtSq7SGmRmZCwZYpUWm3vDtHxSzEo2pz28LXMyasFH44Gu1gVPbBUHPS8jbDwWE",
  "key5": "5PawdiVqPhZVAyFGxRq43vh2o5gtcUpYg9s3AeQphZujtwrnN1HJMrgAxBxdNhwMSWtbR9x3MgVVUBzZUzXdxCxU",
  "key6": "5cfvUav7PrAMCeVrq3MxUp7X98WZmTiLHKRaXKfaMJUunnFdFvPqu4zEbRYCUWSPQsVkjkM6yoDdr6oFSEcrFhGF",
  "key7": "3oVy1tXdvuJnAovQrburytrnjvFZjrz21s53quefUHzdebvQ9TtD6RsEWcFV34FBo4VP3mDmavQq3LE15s1uFzk6",
  "key8": "4hhXTDmAqvEU5YeAEJ1LLGARruU7hwK9DAnP6XnPsUnLYgYWG7aN4uRqLmAme1q1jmtNTyXLXQLX9X1SUWogjH1g",
  "key9": "2TiSeiJZ6gAPYdcWtxMMLgRSFhJyyeAtoc8Av4o56C7sLohmZPHtWKpEP8LESDTZoAJRchdyd4iM3YtdsyxbW2L7",
  "key10": "58Ufttn45eFc9HqeDMHd3JPwEBJhQhPxB54p8rn2MZ89uSb5gpyUnmdsNyZyVuhYZ91t15oCfMwMngjVnF9fQBBW",
  "key11": "4yJtxXRcUP1a6oApvjiiRCpoEEadU4UZFXLFYTdGibdCCMeHLbEmsjEK6H6dUd393V43oeMG7gqd1orsevyx3apW",
  "key12": "2ephkgQqwq2pabsRQqncTbrfLW86QP83vKDwB9rSnxRZe3hcyML5gnmXuNDbPqkVZLEpr6BBzHFNq5Xd2Snr1Yb4",
  "key13": "523GKnqEM8U7aVhPqpCMtkeTkE8cfyWUUGQSktJMKc1SZbg9LjbWENAkBQze1uPm9WiBHErvqE1g8WhMqhjCHET7",
  "key14": "3Cakh4jL8GAwQeVoYyqZhNC581FSnw7dTa7VyQijyQBpddQpD89ZBy7dCBwBHYQLTtbj6mW1c2RjuyiMYm5sFMQj",
  "key15": "5qLEFeKeeaZpUcWoGuqVufRvv4gG6eQ1skg9cnoKqyP6htBwjwBy1LjTnnz4tiDiFX1V3t3Xs93kFgcnMa9mitVK",
  "key16": "65pMx4Q4Exhx78C9qiDHpbuAM5vQuiB6VrguYPbr5iaku1WibV8WqFPb8xUBqmu3LQFUFPz7irbkpm18Ts3Mx6L1",
  "key17": "3He5am5ksnMDSRLUKvepi2SfRviQJ41b2bCrpvLZqoTgADADWDdmz8aJXzyGeEPEf9vHCwzMBwBYKt8q4f8myXDQ",
  "key18": "23xXsz7rFJCugKhCGBU24sAYiofxhJmG8Q6er6D8mbe7xE4MDnKDuTNER3Mna8D3ptLAmRRQiHGmeWWHTekcKatz",
  "key19": "9h9SuwLiimnDKru82v3QShwb7ych5c9wuN2m3bvPo8x7wJU4ZTAQM6L87pD2qVH9QP67WKodo3XGxbiHxMZJFib",
  "key20": "5P9d1HGqp7t4z5SXmq3VT3UcEi2udYxDrUk82U2GuSc1ghWZx5DDxEa7zaELvvzBXoN9nJrD8GHXixe5ATDMMkyH",
  "key21": "2dbSzAiAxvNjwNnu55TqdxwY22w7PeoBVjT3SYktSL6feuEFMkrtz41zBvWrwfm21DsR1TtZoDqTwbZbHryBuV1x",
  "key22": "3xu1FVdDYnTJReqY7J465vdxgLqrW7Ds5jSQBJfqbKCmEGUdfDgmvfRZZUqhP7GDBSj4cmwqVaWQgUwVbx1Y4qXn",
  "key23": "4H2m2ZypHoJsW2jicTQzQqZxLfrkKf9FtCKKWwHsLUsVWxU2H5KEnrvBiC4KJpSAFFk3eFE7w5FWicvPKKk5fsSs",
  "key24": "2Wr25UkUQD4VGT6BuHRvgB41SKSuT6ekZduFqVj5R5U24CoPGk3C2vTEUqt33Z8JuLJ7AZAppBrx471L1ihVjq5q",
  "key25": "4tyscxzJRucYsSWW4eqNDbs9ZxqF5ySoYZUcUNFbR7dei3ZgrnXLgom6SoR7pHs82jdaPpcqzi6UNvs8XsZ7vnc5",
  "key26": "31JvpbTz84PD4WvYKMbUFrfVb4xvohCSGeTVoTPtpZXBuEt9qTLckE3BiwYPuCX8L9JQCyebAbbwX4qAVRuPWJ7G",
  "key27": "AzQRbYcMDpQeixdNLdzq4gsiUGUD2Fk4srbRgzyrTWsTqSx6uCyx865uYguN8CLs19YBbJWvuThUiaQpmGFySqY",
  "key28": "2KkUGwGhz4QwArSd5hMM32fnuVzqNr1EDvPLDPGocnBoAkkjnJqeKWHQqfYAf2jxLYo41pQyvav6qfXW2axuGSKa",
  "key29": "2MUogEUaY7o32Swx4n4MmbKy8NcT1Rkv5VQgxuWkfYJ9kHXDvp3hZXgXZED1nwGzw65ix7cfR8tUn6cheKMeTsju",
  "key30": "pDR1rBbSKBGdWNRTzKMeSqMnMVLKF75kynxEdqX56UY6u57BD2pTk9FYTFRfMipWfxaUiEm4LzLQ7uPLtmtKedL",
  "key31": "2aUYhLN5tALkKCsK8pGoSfBjBhpPvh4TZb6F9nKXnkGoyUMxSmAX6LCbSvgqFMkqTT6pP9Jf3D2BV9QjUgxZoX2A",
  "key32": "66H2fCHz1o3hNhTejPU4FrrwYRbwRUzmbR2VxFTVNt6P6fW55hBCWxBH7WkUopqWQtHQXECj99v4kNxdnDv8Ysgn",
  "key33": "5riUs1AHFdQ9yp7vavsDxYt7aG9QnCMp5t2HR6dM8H8hPjnFWrMbTZRLJLs1h8Swvgb7gpSwV7ozuxFuC4spE4HF",
  "key34": "2Fzthg74axN5YbQp8gz7Ysj4vhn2T4DQrHHocmoH9upbyTJQmvR63EwPzFdDE4Eu7wpmdheDmUFGqTCxa9xUJtKN",
  "key35": "5nUrrGPowCm9iFhkotq8aj2ErVgxegEkd5yUJd5Q82d8S7Mmd9JoKxHxGzy5vh6DnxEkuhB33X7jKp98ARwKnx3j",
  "key36": "3jXibLp6D47qhfPiYxwNb9yTTjZzfFtSsym5disRcSBh713NHRGq8ECgiZgs72iJcWkcSi6UcPyVUjkfNyPsTXRy",
  "key37": "61Ymd3xRr8UdPkq3fpwisbWEE1Jb5K2LuaA1vRuSUdcBca8MqCmGmkv2SSNVMStjYZeA3oSpbNd6BRhLFtRYXEVL"
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
