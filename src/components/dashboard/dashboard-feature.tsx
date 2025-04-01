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
    "DcxUyfWtj2Ns9GTikQWH1q3DZtPv8J6LZ9LQHDxXx2MFEY3ghYzARUW9EsH3vbMmGVZ7SF8QhTKz3tCsVMeqi2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GLuVGxep88DheeFC12rYUYL6GNQWa11aDQXHs9fxugFKXocNg79NRrhY3TsGMyiBaCHnJwVde96Advd5m2YkLrx",
  "key1": "54JfSyCxnq4HjDdQ28hry26Xhfg3wRbhSVyE9tMKdwwFu5KuByQQxdh3ydpbGeajqqYJ7HnhkFYQPCgfcDjCnoX5",
  "key2": "2FKtqd9kTSZFEDoN12WUzej5QnmdkZ7YLCged6NAHHeVyLqBf2BDBtgAkt59jqzoQnws7S4RwqvbdS1SkNteemj6",
  "key3": "fjQy2uWB8PM8CGW52uRdzaQH61M2yrPic8C98yH1e3cZDypLapPqeadijzoq3Dd4wn5voWxUtNcgxBdGAmQoRQd",
  "key4": "2JNWzZDR5ZuLnEWfiTx6HAp3Yd4aNyyNCwDPFJ8gnnhS6skTxHijB679uJJKXWqVxEgPD4sa2ochG7q92BhYBcdr",
  "key5": "3KHnAT27ZS9g1z9pSF3uKmxj99rK9Qd5B395RuaYJyqJhEYyzm7EPCkYLC247FS6YRm6TSEM1yHNynQwZPKtcecZ",
  "key6": "2NKJtfuTLwnfcyeECkFw51pToXyiUAjHtmY8QmoTz81GnvmSbAqUDxKtNxnkTJbzU7guCNmzicoteB1NT1Ut4KX",
  "key7": "2vK6rH4Ny3MjrJRuYbbDAqvDGkYCoriHXdPWjuGwnwX7iLVp9KR8kjnDoBfWNX9ZKUeevzTj7t9xoTXwMGL1rYGY",
  "key8": "2JB24MMj7MBSoSAtq1gyuMzd1ThM8P7rmza8rUtbXfgC1Nxgv2opN73Kfec4An8QLpFJXMhH2tJm6LSbnhpCCHNe",
  "key9": "5kf2BXMFh5iAFu52SzLMeW8KC6L9LSXy3ov5G35y5oiyXWHj4Nrg1UherRFHdcrZKiCArm4W668Q61EmTRqXhEmH",
  "key10": "p621Siu997yb6C5iRgA5TSY6dMsEkh5Gtag9BDTbiPLL6BgyLzmhVsv7PUDASrFSG8GaYLqisccG33BkVA77tss",
  "key11": "neUp6RQPHeoSzTJRkXA2yohNreq1GNSnFp3CSBwLP9jx24RKhyn4kp3vgkx2jfP5A8BGu4NjCC8gqRo5jh8HTt7",
  "key12": "5rfpQQ94C2XrjQ9t7eJmH4deESn39TcHsM8ccSgeVnFCGoAJeUniEBJM5TUk1ynvHZsREpKwKADmT7gPQJavRxw2",
  "key13": "67VpkKMDCQD8qtJqgWCvhmKzaXatfFRLYkWY2kjtvD6DGWZCnJZWHS3MtPLakrN2odaTjySTDmx29V9BxuhmJCAs",
  "key14": "21i91cSuT6F3mj7CFJjGPhveWaZ6gq5YkDsjkS4ZTWHG23UnwRGLWhtAoogDWqSxaRuitJLQMaVFsGwsYiKnAGWG",
  "key15": "rHHjqfe6z46tiMhFEWLbjXmvqhknigp4wwAS9ZUD6U2wG59HvYvyX5Gz9gugGvjjKLXqyHQjJkFUrboe2oouFh8",
  "key16": "5mRc1TE1YABdV3G1ZxXTxTXimJs7bQeF1oC1UkampKi2Vdo8K2LEfkaHWpkbJDcHKyQ63mwLZCkFaEh5DrKxZo63",
  "key17": "47SPDBQnJzhPwzzuyA3CQuEqpwwrgBdvhvuki7sMiYMvkaXHAZ3bs4ANDVerwvAVmL3UMVGsoga3hGJkxzCEhMgA",
  "key18": "5vdqMB2PmbQTd4UiLTryS5hoDyB2rRvHC6uVRG3z5LgvSBz3Nc2fixUoXE9rWDJiF1EeipTzTaNafSSQqKKikpjk",
  "key19": "22DB9vZcxvz4qKzANbuQJrAZDSAt7Ay8jD9FBJKBfKtuQ8r7bepBvBGuAufr1fY1iNPo58Zv4rYe61Up7WJNEPnv",
  "key20": "5UcHAcbcim5MFEy19usubRECysQrpCH3KWocSoa3LDtTWrePS79SWE32pPicdMLdzdwVUB6b5uebFdjQxeTLGwPZ",
  "key21": "5RAS69c2U9y5uJSDje5RSopBZXdigDQW9yfsN2btFWPVPKH2tSRDF6HVDRp4LRe1yYZ6v6v9JRuyERUfV43AvB34",
  "key22": "35HRhfRPycnt6PhF9kta3atJGz9m3Zv99LcLrCyZcwjo1dXpagyKiXJeUFxnnSGt4b8oBFe4qKHswFhQw5cD3wzL",
  "key23": "36S6TVZ5qdfAbJnimf9TvNT6YRbFHeTZUPLPU1qYn2B2dmxwV6QQSorqzqf2YqidnfzVqLBvaLhyejMCH86rYcRi",
  "key24": "YM9FgsnUecUTmwbATqGtiPKPNzGPwsWQoFAsfeYxRDLggxvDRSXQRvnYeKUr5PVVQFETBTHSnbhqncpwcV8tgFW",
  "key25": "ofMbtW8PmLCRM12DDH6whCrYEs1KsXkeRPAXzNUi3EGAHWPZZr3kQFdC39jodP4jaTyDTgwA3TMCYQ6ArDngTsd",
  "key26": "3m58tKErorf5ErD3deaRXRSX8FwPhJwFiZdT7mY6a2UsrPKKdzfDcC5c5mZ5YBoY1nSfHWFMtQzLGKGgc15xqabo",
  "key27": "3aH2gpvDxuVrXwbq66dopd2dDL47tKuNsxMgugTE799DGPbQ1jNPeY5gYKdAhhD719zqYeWQQM1UEYMQqQqD1uvi",
  "key28": "4CspcJLNAqS3hqMubKgcM8PgW9VGamnRHgQupcKJw6ishxj1Uk7sHh2wGPuKwYvjnHAmiVU1X5JTKeKxGd2Rft6Q",
  "key29": "2qjZiDqYizDWHvypJiTQqJypL1psdXwXk5BAxwTV1A66bCZnWwU6S62kKQXkrfXzpxcScs1tw1AP1JzzLdn11L38",
  "key30": "2kvVD7nhGofUhJ9Yip24yZ8xxQjR84sRc3JvMTshAj24ibH9vQL7wLorGXSUHGo9TQxDfwRYYAHnRSFDJTSf7rfn",
  "key31": "2U49kwATMU8EdRPoyaPAqy9B9pVHynuhy9LiS4Ee6Ykp6vBMY6DWqjaEdjqpcrvArsn1KzvdoqeBAPnKe1jHsD15",
  "key32": "5Ba8P37HCMSvNoa5fsQ71serChKz3zmDmYtuJheSj8yBFXDJH7LVgC85nempD85tKTabtXMRpoxnvgqXCPYZFoMm",
  "key33": "44LpA9p2Y8j3hysZTu7Ne5xUVuct19oC1xhbNwyU4jhyDbwZVtqGwcS1qyhfuwXAkdw2riPyd3wRRJyPHcWcKD1B",
  "key34": "4PpKQm5oYQ4YAwgak8q8Xw7VU5CbtuJjkuWTRo2vvTKCY47jSC1nAr2szVt8gLUVEMDtnGRbohyvo1SVRdW8nxyA",
  "key35": "4avMW1vunrMHKM7WcVduVReb8sRmjQGGQtqZLT8zk3ArNs286NFCHCCGRf8HQa1yDuP5Yf9XyUBZmvmFsCKt6cPc",
  "key36": "3XnNx896vvC3mYNq5hDVbxXziqsjVrnEueQ4WBgX3aJ3itMh9UpaUttyrUztt66VKvtG3fe8BSKcjLf7ZQDr3xpo",
  "key37": "2McmG9ztHJGFHYhKJtgW5jkhxngm7mgqFpWKuzqyqifjS3nX8V5euVgnJrD24TPVpz3dq1pMm5L8RMd7PdGZpsox",
  "key38": "45r46BNphn8iHifmtaJdsMncgKR7mqmaMtRJXLZc3Fvcc9ptfi544MCbnYPcRDVR6TrC9dYiihcV4Lu7jZt9KCiz",
  "key39": "3SMiHmR7ppXU3ej6riNZ1T62WawFGSvArYLUYeoJZxs2dWhbGTYjwwkTPWio2XhxHfJPbuCAVCmfsegiBkbQuuV6",
  "key40": "ukVEfEezsXcchn5hncjqS7b9cpCYjDozpi6WUhwbsgjvZBdKdxajXg7VThnekoUURZhfdxzUo6ZKDYaUSaryLE2",
  "key41": "CwYDvpkry6HiN8cL4CiYaocAsQaa2zgMMMaYQGjwZ3h6EyGo6GfqgGGd7S65SEgjhB9wZug5hsRvbsEo33cynJ3"
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
