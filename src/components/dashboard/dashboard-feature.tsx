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
    "2sAJqEJBF25i2ukWJStME2J9wKyWTi8K3vuazxRDhDfyXCRgyB7jJjrTWxVFckLdksofJPzddqL2eaEs7ievTPiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXmdPwy1aoPZABsLzp8ay3GJWNtGKpYmUstF2kkA4opAVaTxqprqVNSJsvZ4xJ9BCwcrrx5tG2aESyk6vfQofwq",
  "key1": "5HRF8PehuZgu25Ew4w4hvec3CLrhN1jyrBVv7f23CeTLmmt7ErsguMqsEMmKC3968uvCWFHw4pTns53GRLhqGHsn",
  "key2": "5WgCJw79KhRENKdU2dJc8hSQZRU97d2BTVzKxQhpE8icaoeueofv7yyEL6PAGbqcuuUGZ97axFRtNYt416UhyecD",
  "key3": "2Tu8jew8b3nnTRquJNw43FRCjVCj2xqtfzVq4dH1gdE41cDnTZrMHoVq7WDQdakgj7V7cgdorT1utiTTVjjadf6m",
  "key4": "2XNEHXxtZXuvUYMH7vG35U72rxhoyzESUUXWkWvwAMhhxXozmrQfYvYUJmpKLkxQULZ22X6g6BSxx6SQiaEXbrfo",
  "key5": "4adxEupVb8NLJfrLoXqJMPhzsXCzG8Zdm6RfbvZ4jeeQ4Mj7Z4sEFVqiHmEPCB4WGnRaVGx8fefm4UhfSWYTNqRr",
  "key6": "XDRT9bLJReG8Y5NjcU4FW99X93tnTJqW3VNr4tSZMS4QuRnPUwfZ3h1Rmk3kYAaSAQtcS7d9tokEsxJVGQ61fGg",
  "key7": "3qN2WwSeQ7NkLxwCSs6tFYmChdqjz2pg4gch567pno2r8FLk3tDEFCY4WvYntuRVcybMezi9fG9EuwwT7sCkN5NJ",
  "key8": "jTKUw6Sso6NPcpWwWNeVtWDGoqSPrAVN7Vxc2RD2reE55s9fpQU9WvaWYzuhQnijB8n1uRkCymtRXHgAKLDCGxu",
  "key9": "4KUPTxDtgZU2xPif1o3ifFystkLp5xhmG3gi7TRKeVzK2Qb89jHn5a8fbHVQY7bsSNTxcRTAHSpyotbCi89LS4n1",
  "key10": "W2FuF95EzTfJNxUcbRMmkyk8ZMvULgKJPSi9iCM3M8J97PQ3tTYtk8bc64xAZ63mqxKQKNxLHGpVrZDpUtHnFaa",
  "key11": "3svvWLfRdj2YHZWA9Htoj6AbU3h3Fx2u6y2ua2SNaTGY3J5Gujeutj8CUQSHoiFWwbXS3Xwtrr7odvL43Xx6ByoB",
  "key12": "4rdtPzJK2eRDcLegpfNyzVDenA6cgMvSahCTuTtTFLjYPjguiv3qkSC7MekAm6eV1v84vYdiehjZaxBTtRb5Xcsu",
  "key13": "5Tz3NU4up7Q7FuRdQGVgjwWk43aysLbnNMCPvqBJTmuPJKdN3S23cRmQXa3yqBazjxddeARKKpKeRWmtJxZDDoeG",
  "key14": "3rUPQuYtMkkUCmZDT1kHGqnFaiMeBvoju2J9QGqV4bt2PmiFCaDfyWWzQU22XJ4TcJ3QStoqCbLLDHg41fyyehSe",
  "key15": "5fMJcLqJN6xsTjvRfyou4CKRJ2pysuUbQXnhMRAVdtb9cmZ3tGFFJCJqqpEwR4uVGhNF8Eb8XZYasCMe4C9FYDRZ",
  "key16": "58S2zv9jEjericMs1Qzb3iUfkpA2uvBd5FyKQAVUNKTFRNbGc2ZGEW7xD7CT6gp1eznWtZCMignRLtmGxRSDHcCT",
  "key17": "V57wA5czdxumUropJ2zjkCfsoCE7EaHs2e7vqoPAQKf5nkeL314gM3LPMoCqx8oCVgKw7qpg9t6HGgGMhY16gEt",
  "key18": "66nDQ4oRZbVF8jDerjFX8uhnWCXK5CubvZjWmkEJgWpa4zjBXdXxEZomz9UNieHMfyQkwhmrAVLh2E4ruDyyb5TP",
  "key19": "66fG9ta59mMu59Yt6f5G2ZQhWUy6wg4RoYsNsWmLgpgGEyKFhUmd8457HqXjP2Mm8VzC3tNJpR1xSSvRLUSTeTpT",
  "key20": "4V2DVVumpdDHdgEaQWiw486Kcz95jhNbFdfh6UBdGhgaUceNGkhAK6LVofYC1sjMVrw7RGt6KtYELQ4aVZC26kxq",
  "key21": "3iv2urciF7STAeJAqoWxiTQ83JNycATqpDWa6UjaWXC146MkM4cK11MwYefpmPnvCsJusjzjaRWCyRBuq3AdQxC6",
  "key22": "No1EW4JjvboJ2hQdZcYDV3u26yN9wBX2PnXfcjrPbk1CXAi3SPats5Ynz7xwUh4ZMaX4Yvfz16ErepaUVmiffRd",
  "key23": "4mht6gNhKZxpJUfRsJxStmgebioMBe5nut1k3fHBinxWQ3ac2ZvTUQqe5KxCPhjN2t3dsPnenEbfHD9BhL6LqHwA",
  "key24": "31U3UWPs8YPnHrYbWfJKyR4Bax8u8mhpzB8D1Ht9MSdqdWnnDqimcEuH86bNNNCviK8UsgtwKFa6rfJnKXASREMa",
  "key25": "22UQ1fziNd3tGw22hmeAnCBC4WtjR4pLmR7bygX2qav4tNZMLqcFNQShquCFz1PvtJ48RV8F43WNh8GCW81mi1YY",
  "key26": "4SWVjWLvyqBq614t3iHW5kuXCSZWLPrPyr2Ga4F1UBuNEWtAqmJWsNRaVymh7rmqrdN2t7VVTBtUH9vW2gakdUAN",
  "key27": "2PbuB9qZJZiu922qf8dMUNLdEBK6C1iFF7ZTJiVgGYTQhHkih4Ry6DLMJrrNhP12Fz8NbaX2AND9FPxVVFosko6u",
  "key28": "2frdQwDbomJyziSP1NSnNUn5Do7Y2YHcKv1HMdnyPmDiLT5mVCUJVdUPPw7XBSM6cVF9mqCMck8fa4NB531pisR6",
  "key29": "4UrQsfvS1niqRv3EZEBKah1VQbLbJvDxP5fagW2pGoWTVhsBytfvvB6EX1doim7VyUE1atu1pZHqkbAo9zuizw1y",
  "key30": "2spB4hHJo3VYVwbUHUk3SoVfE7ELVKrJe1Tf33rxhFkJvQNcSDTAyGcKczqkcZr4Y2dYaY4zrgjvB7AVdCu5XtC8",
  "key31": "BBf6TvtMiUKpHA5f2A1c7S4qqEe5hW1B7dLEWP3LyRdeDwe5uf9QtL8cWueZ3CHXeTMzVKeGxSypykZTyxZy8dV",
  "key32": "4Quez7Hjk1Ro7fMdZdyvLiKjXxHHJT5p5wSZ3zdCptp5qeJeKkpYvcHcJZhfG5SDPkU5bH9bQWfLy4WxDLa8ES44",
  "key33": "GQAFaZdSBXpukGBnAAa8idK9UZjitHFRmdVNzRUC1cX7hauyZ4nFPMsXWXBrGD6hgbPwGQDK8mghbbKRvghQZTQ",
  "key34": "56ikPWf179iZEHXKNYrWxdiWJrRJ4VhsfVAdUGXiyzpCFkEC5Uey9nZEjwApuUGtNFQt1gxSfRZ6ZgZGSmAumL1J",
  "key35": "WhhXWdRCA2ypvsqcuWeNUYzmpWUArLjrduFMoE5TsFEnq4yHG9pqqLQyGPc32jgvtmkeBT5T9zfLSuwnqqn9Lzj",
  "key36": "X8tmv6pF7VD5XrymobYTsu86fY9JPqwM7ARMk3GuTfCEYaDSs8hptxptnf9t1qC8qvthoQmkug9cNonNthRjHEF",
  "key37": "4mJP6nkvEy17zeHJoZh5utX6qKbZwxzfuArBifoLGXuUyCk15VQyDKa5tZXXK9zmAnWiAFsn97sbe9ZPkxKt5vbJ",
  "key38": "5DEepEKbLp3zwdAoBxXP9VzpovjUeJaGhRqVpzvMkUuMwatRXjYyoK81ZABVxzbbUR3RjELdVMRbF2TaxP9Gz9PC",
  "key39": "NdvHsJQ2k9dw5FBbUKc3uXkv9bDiKSMgTJ9NUU8CRoRPGXdByGNqbWzYCWhj9eHTpairbaVBh4ockuLVa2Qh2eq",
  "key40": "2txRZgBZMPEWePawh4gJTPFMo8ij1bPSHsHPyxX6F8ohHExLmnVh61UUjs35uAMh64mRuyB3W5zJARzsbNFfMRUF",
  "key41": "45ZA7uhpGiemTD8NH7NCB5NAqTJVnntU7dc8hSzNLqEwryB9tmaihhbQ3SBsJDpMZwGjBsLnTyA9L5DWeHW4r6Hf",
  "key42": "3QFCMcDz4apVwBoxjrWPiaUi9fP9nCe68ZBGiDVHR2vb6S2XSPv6SRYb963b4ZkVSPLyVYe3kuN2a7bP5yip44iS"
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
