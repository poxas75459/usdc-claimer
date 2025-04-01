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
    "2rL7JfgXGWUwHiYZN8RyecYHeLjgVH3xNnfnXbACfakCtZDqKtby3qxJzt3CaXmjYuajz6zKkAvqpPDzzx3hBTiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeX2tsaL5mMpMsKxJzcSkfi8eFCznCc1KAyW9QWyJhojwLj4HoSg3Zcsgn9GV3qHGhC64yFVnmmSrgqfoX6hUVJ",
  "key1": "5c63Xz8zGkmeuT2TU8xUvPaJeKB5yJ6HpAeUrMzFYi4CeRjEqrD6GtzadGXKzGYmVfuGsCn4jWRkLNGShEJ3R5bi",
  "key2": "4rTRBVyevZQjsJWiZtQT4Wp8kqZSrXVD8YYa3NVktD4ofEjVXcBxYxEp3n2SjVcKKKjmG8qmdLy3n7ALNXsyn5Ka",
  "key3": "4St5a9FhkoYKHs6T3TmwBE9gQpuanL2ggpCCU8z361BnLk2HS9BUYqykn1NZtNRQnAtyQ99n2zRDjiBJpik92T7z",
  "key4": "4LcHzQeUgJJLGMG9B1QCBEgd8x9tXYueGguGQ1VCfAb61v5DJzmKoGEFi7z2PS9ECCXy6zqjQBTr4j4DppnzvU9e",
  "key5": "3pBGyZjJqEGiuVYK2XhKnKDV632NagnNAfXc3cCUp4aAmpGV9JcvJYkMGtQtfeG5pKD9UMS5dUDQ35Rdm1R9LmYq",
  "key6": "2FHuVGyZgG9rYCU5x2WMJnVrd2KenTNywezSRjVEjuTre4eJujYXZN8iyUu3qPR7qAzP8KfGPBX6n7UTsa7N3RV5",
  "key7": "59Z5dstpZ3rr4tUseyYEbNaQgtaGeJZLjoXA2HFDv2zvCn9tcqVsUnScYTp4vozm8aH4GcR2CFgMB8qbXNj5N6Fg",
  "key8": "mZcMrV3rPE8RLy1zD8VnJPxPg6iBegEFoZqW95vmNq5fqazK7c8sNp8VzGqdF1KtsEUvub53QqPKuvehMghSigp",
  "key9": "2K8aGeaomvjsCp8iBQwm625mncD9WysnUr3BQLzew9KrngZuCnp8hu69qwmEp8e3wFf9qhuH3x41ms5hD8WUMj2Z",
  "key10": "32rfW9agfr61v8iRamsjMWXFLdZL1FuwG2zbUdca9mjYAt8Ahk2mhXrgzhKwsXe2H5JT8HxqCeVNAdMYFZ1ASsEL",
  "key11": "4dFogq2SPKgQ5PxdpbLdJGcq87pXA4Fwe9KAAVjGVnbDvmG8V52u6arWtqZEaWLUWTj283xqo5M5uAPYSzmuouVp",
  "key12": "NLBo1XH6L6b5M5mY31KcZV6M2zYqB8bnbg4Rp9TuM5ViEf77GfzLLAtJeeRbGVuie1yyzBLNJPj7W8pjvMzW6uz",
  "key13": "57HK9kAXPzsTRMP7MeVjB2g6EMKEsbLPpBQ7rfx8W1AbkMPPQRmhtrxA9rgsu9x5XBMgJWgKdh72YFHN5eiwsika",
  "key14": "3ZMC267owNtGzzA1wt9m9QzJLxXetsGWwa1XCQ34rNMuo64w85T3naDet12yvgyYTVRsSmQ3Dhf3E8gdiKdngPn9",
  "key15": "228mF9G4qRj2e56knPw7LW6K9jp1LKjxX5bBk59xeKLWiwrnjSXBF66aQdNc62FTjAZDbytWDNSuWNfoUtQHgkzP",
  "key16": "2MDhh1jseAtw5wuHnGUTMXBQvM2kxzLiNapT2vo2tLyeAHTgoXo6qE8FpdpQTinkPKAGwpE5ce6UUgjADtuVTAYx",
  "key17": "QhYbgWvhGexFFu4p54RePABcUgQNFv7D9AJyLkJqCdFUuPDVE6idRJShLzTt9S7iVMcwVEr2boWqZrGCQfkaASw",
  "key18": "2cc71Mae54SSQRWHSAGn6N9jMnsiZDAic5aJ4wnEJRvSjtEDyRvT8KasZ3XiQuj2WTVk9SNHcczAYTUtMfq2WrL8",
  "key19": "UDkkPqEeJcwBcXxh5zN5hCFgD7VzbdLcmFs8jHbyXbtF3CHWAthZPsG7n2VYafb5GYfXFxjeuNSNF6fRrX3Kdm5",
  "key20": "4thBd3MwJG2DDCCFPqem643KRMaeLYXjuoJ1zYHqNS1mgCfpnWf3wTW8fbxKwJCfforbPRD5Gf8Dq1JL1RA4nChz",
  "key21": "5QJzFKj8uwnpra4861jFSuJHM4nACasmmJipoSAsyzp5npM26AwspVL2YaejX7K19jFx2G7zktutD4PSPpKDFaGp",
  "key22": "4WRQzPoEtyooq2KFcw7EJHHuAihHC8XbfumMv4bs3fPQSHphcMJDDUxey1mr2dxymAw8oHTcKNZdynr4BkLBc7sh",
  "key23": "5jKiGYQDekcZFiJKiKRdo7VXkEpWVRPuPLLN1buTKnQCf8aYSS3QiZU9JFU7uBt31gzEGjH7EfMHXUVXxPFFxKAr",
  "key24": "4mAo63uFB87SkoVWtEBqUbqooS7bYDZqTjnac7YGzbbTZ1nFZ52Qdd4S9mUN2PC8CbgUWLbGS9e84ZDHbqRrMVF3",
  "key25": "62dtBemmrkFKzmiTjTGYu3v5p8pBRPgAdV8fvstgSGPnGjbkfHBWsG3N5SHHfBeejcuuWXQg7v53FdcpAaZHDDPB",
  "key26": "bhMq1DX9LEQnGRkNTV36BFefnp7CjVuAWTjBLpGjQc6CknZ9VriLRgvzxRH9dkacZ1CE1gVroY3iN3jx65eQStJ",
  "key27": "5cJYi8qyuFrkRtCQxCBmQ3vPYYhEpB1M7TS8xZBboFW893qCdVPgk5bJXTt4z4p1wZJn7oNkba239jtBXZ5Kt3L9",
  "key28": "2h5nir2nxxbyFVmaVBxfg9fLyGM3T18wayK2sGqQHpLuuu6p2MH3Ju3o9KJitd8kbq4puBs1L9YmtxC2tAhKrZFL",
  "key29": "C76wFQmqLbooZQFN3TJWMVC1ybcnanTaB3BVtYQngGZgdGptxqVLUQvhAmps8KczyX9JfDH5s1pcNrRRfSk2uRU"
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
