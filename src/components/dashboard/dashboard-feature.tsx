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
    "3KQRR4XhnVC5Rhf3JXs6S8BhEPyt7t1qBsTbrZSbFtcRiYKvZEmnQbLWM5QscHYwLHAs2M1p1J6aEXB2sjYvTHrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amRg4YAKYxZ48hxn8MBU111x2AbiBQ73iiRs7QEPKLQRc6pVfisjy1ctPrARgoiRWmLaM7TQv8z37eNu92nfJq8",
  "key1": "4ZT4HnUHiJ38v52xUnhZKGS6DtvbxCiXaUaq9FeyyGskzw4hLuMzsfhN9mNo6xk9UPPBBtcU6Xsx1UuD3peNQhUx",
  "key2": "3JD5qTzRAhmBsQi1uNidT3SRHUs99pcJxJRcQbWkm3qzSLLSruXPyJNHvKdNHvbYqscMBXL5HYgEGLZwgmLcV1dv",
  "key3": "4wEVjzxJ7PLHuvYFeqkReasYZ9pc3SUy5pzgYPU8TTgw5MvJXZXKovkNsksNubEJxwBM7D2bA2RGxVVv3U7eCDbH",
  "key4": "3JaBZpQ8ojag8XMhQxSxL4nTibD9txadTbXcAemG741yrADa8cufHNWHFDNe33trgYvSYnZdz4geJp6U3NkqQigA",
  "key5": "2AUgdET7Y1QFH3gMr6quRzkGuhTR4GiCqnjuawbtk3SHq8xFRKNwMpKQ3TsQAZpxij2uHFcM5BfMmWhWUTyqmqfc",
  "key6": "65J7DkQhdQMYdZXhikak96ztM9RJrvabjBD9kKnYHstFB6RyGrrrxHKnCid7FbfxY6aACJFVi1xqzGLMPrcFe8A4",
  "key7": "fWQmBVEUUVe1JfifmNEKNV76TpQE1G3cSZdYPWz5HZCGoB8PdYixWMP89ehknCKVoTkwa6QjkMBYwD4baLgX1iN",
  "key8": "674PfToYkFt3dRZEMJHCrFM7otDowGyV1tJqR8CVYz4mBX77pFgX7kUJCncr1Nd6CRisYd2cnVGz3wftPcqqKkmU",
  "key9": "2MChwSbDQ8DiqNEedNG5RDaDy7kxLNPfk6ZrNnRoYZ1PNbwrr8vSb1yWMWs6FMRUSp5MkkGDWWkJNSUBUQ9tfyX",
  "key10": "6BuozMYnxtZ3kSJECtH2YdEmPe7qW88cMSXTMSauipeepSsgVAWMXWWfTNcmyyKHiBQtBhxecAbp6VK75Bz9hX7",
  "key11": "3oM9cbkaYe6kZpL7MQBURm3bcCaWJsuNYxxuP26TEXL27g4kxYw9a2CwG4DijD1msMksUcCt31kCpaDmwmTejiE3",
  "key12": "2TViiC1WtFXwUFti1dby79quBERmafeMVyhJkGMn1b4YNyYBkh5Ro85u2yJoU1viwHUN9C2eG7rm69nyzd3toEDd",
  "key13": "sWHaD1zJieUvjEwFU4sarWADpmYdXu7xzkQ672s6xsMzSM1nToVh163oH4ikgmzYsvaHMSw4K4wpNbE3H3kSDq1",
  "key14": "UXzmpE8qqUZgZu36dSeCnG9BkGiMSXj14T65nW8FY3QHSRNjZxjUg3TvfnMsj2cnFhcLMn24VyKstxXzrsTptfA",
  "key15": "2uSr1xvHoxGzJRbJxaX8XDTmAToSoTSfx46uGq6ivQJrVKPMgzjeefgAAxBEDDLbiAVmFinw3Ne6JdVhvZ1DiYKc",
  "key16": "x5eQVzSoZSqxGuJ6Hcc4GhQjsQxrH2GynAGGpF3Xvh1buUJoJS1TdBhswgg8HHass7ZotYB3Fp2an11Vqs26QG3",
  "key17": "4xAicxHf86C9DtFe2rfyqA4qEiDCrFqTt8iNbwi4Pd1k5HxJ272zKN7sC94ZvuAjPNDSEfdqzV7tvbfP2JYfYhY1",
  "key18": "5jGryQLyHtBZ22xPXtKSmWQthUSdy9PwT5Aeh81FsV4Bwn9FJ1bwiqC7TxckdZDUBRYhHrC9y2iAQcb1z9anWHZG",
  "key19": "2Y1KqsKRFXrxvrTepyTM1GFzzhL51EyEC8XdpJxvym6V8YAEPA2naD7Gock9CtSxFB3pSz6GuiPcvUVcMJdLRaET",
  "key20": "4xRiuM3v6466t2J4GdNJYtnmUgBCb7f6kFePQc8aMJVFjFkDRJSfbfEf6WqKxyUhFhrnmE5sGGpWbujq9CgWPmb9",
  "key21": "5DBieb4TkjnTfvQ357nmpkMiV5AfFwBfLrzwsBj6EoC7Vw5skVXdsSne8e3VVJKagEpwd2gTemtWyDyKyNvL9TAh",
  "key22": "3fg6ziUh87PDzpNVi2UetjMZG7xuYLsBnJmbbc4umM2HpwrVEHzzyRxWT16V2x9SCYz5pkuQJQKYrjiN3rmh9Zr2",
  "key23": "2Y8CdTZ8VNYV4S3MQCtZaijFf6Zx3N4zGKjqBHQF74nALMHW2Vy2B3M7PqwiM5MVSwFvzcAyn7dTUhZYgLzyWmXU",
  "key24": "5RYEM7yvpL5gKKw5u5b1ribwWXa63bH97drj98Rd3FnJxPB2bs2TVktPeLPqKNcbCYLXa7UgcgwTCxFDV7QkZLYG",
  "key25": "5tKFLJfdQw8nHNG9tfWjjjovYHLvgzSw6MgvaafY2ebcjBKkzbm5Tqy7eoTSNEuj9pfdfR9L1GMqc92WhMpbmeQN",
  "key26": "5QVKvi91LYc3yx7M3C9WzUtXsmwAydFtjhR87CJzzkiQqqwoaYcg8GusMcsJjVFZvZ8U3RHU5119te3uvPVWNwTm",
  "key27": "2AoG1cAVJLHMiHvBvFXncQXv9R1zxkW4ys2VndpPYVBNmhVAqJKxx7mZ8LPmTdg5xHQA4ryUb4fQU7U8zRp5aLLT",
  "key28": "4L74TcM3yhkktmcLCUvrrzV5zE8eF6SUWyDNMnHGHQxoxJ2oBcrqdnpVuZ3Na4XKFT8vnLzmQxwsBYrwKePwMbC5",
  "key29": "NWTTQaWxJuSxhF3734KeHZUUsZSih3uGh7thbFhU1MdnwE9KhFCQahyj4sm55ctYkYMQXX2kAP5jVQfxQtTM4cP",
  "key30": "2EucbRUy9vFc4PaxuWYWG8V2F59nMDWKauENnLYRMun28GUbyGLERXSy17Xyx2h7tFgKuvmL5dZDfB8gRH2PghJX",
  "key31": "4txVRud1pJYdZRSt287zEpb7cFshQ8sfhzovEcbHbtN8zN3rCPFyq2Rzib8KpFT5yoU9hmPpeZpGTW3Lg46L3HJF",
  "key32": "2xxGb1NDMVskFnhiDiy9kHHALk2wN7RGyeNv44Ya8QNdDB4pRADKzZT7jLLfzMHnAAZS6aagXd3CqRbAZxh3RUSt",
  "key33": "3wZfmD9ZaQgSEu1UYFUNQCAnj3AJZrbo5AvSp6Np8Yr1y9m4uPwi3C81j6FjjMXEdxUBGSoVD8tu3GYkhF6NXT59",
  "key34": "3qVtenQkvbxGNTwNrc39qzbH9hasCrHfudmBxaGQnLyFuU6VB9yfT7StttJhYYFdkA1SgE1KGfQ8p8TJxEcWfVQZ",
  "key35": "3AZj7Vrp8krcKFnnr7dPA6rmax1FGBqX3rhNxNZGEVFcbnGZ7upJ67P35PmQVdTMRjz63izK9KkaSVEyzVmYnCjL",
  "key36": "ECGMKsjmJZM4qG1d1tozbvHc67bUDdJCRjtiF7Dsfk2VnQbVjFN9djtUbWWDaDWkaNP52dQVoN6YN2knnuPdyVY",
  "key37": "2C1JfYUX5CJrQPkV9woQV5xvVMBWEh7nxzVzTr1ewVvey3QNF79ZW3V7zG4WZZSLuBW8PjvXJeyXBq5bxijPpnSH",
  "key38": "47GZMudaQ3rNEvpcsFDueoMPvfkgP4Urk1p8mm5eoC2QyKzxoSTAoeUCnB5U17NwZTPV8gabVmuExovxW3TDdD6y",
  "key39": "33oNtFRJuhF3jo8ED2xYCTeQzpqdF78N4vf39h3B42wAqxyN4qqhjwVZkHAvq358bkYCMPyoNZnVyC8r5odpcamq",
  "key40": "4547wUWBuf8sW4NEd4HtVQTkNx8iieBACy3Ck1aLiTpUZojsqvKvERVVUSQvsmaeJkY8yBnXrkhqqKWkR5afUGLP",
  "key41": "396ScJDG4d6odFKEcFhy9VsooXFgLRaBDxcCAkXDQJVvyGQ1CkJSMzMXuNmutcaqmpgyD6HWDss2TRYgTgLTCuSG",
  "key42": "5H1xihHE3JK3GX8W3LmbmUHZDBUXveK2xbVaUbp1fA7x8CHGVRsu8ntzdwqDGzApAej75pX8rSDmFfnwgWH5fupj",
  "key43": "577Mtdzc7exXCA1UXYU3f3FV958KEbN91ysPGpt8sAiyaYxZY5Pzzf92SUEuyFDwbMUbjVWYtcceDcUHY448Gj1n",
  "key44": "4DGbcib9Ugjtein5ny1QRaGRhUhsxdC9KQvhhqrc4Sza7HRcDZx4c7c9vkYHQiQ1cWABw2egJNgWXTcDFCcszqJT"
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
