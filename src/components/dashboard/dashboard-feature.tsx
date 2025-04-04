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
    "2KBHy7tuao2UummiTWQ5NVqjQLYxYJHH29Rc4fa1Ag1dfnvJAgLhHrQAYxqo182vQHd97aA8eyWXMx9o5ib1S4FG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDsdnJtYRgMk9ukey3RAK1KUmABayEY7oW4HH67eNtSmMBNXuQA8QQRpHXgR7pBYMatmrT8R9PArEQaBi2SrXMH",
  "key1": "4mpoFYapsBFbLzXggmV1p6z6xQ8hiEfp2gxAGbB3MfvjNvMLkiKW3v3zchDPMD8z8KZ2ZErisQYWvnHZyPKA17Ah",
  "key2": "4Kr26zyNPY75NwvikuNdHptu6kmTY6X4R8YEoRqqeYUELzVhrjcgjJprZ519iXcxCnsWeUbrtf1QkxpuEpoTLwQ1",
  "key3": "UtpjY1paDAZNs6AjJup8r2ptX5vkdKPCxT3HXMZeJFQcdh88z45pnmSt9LJJ9teLf5Xa3Lg7tuhLiDrWqAW1VRX",
  "key4": "jiza6EMozTnsXpu8Dgg7scajeVso1tf1DFjo5QkdAqB8MGLHRhcigpUJy828KUybW4r9gbrKAnzpc2U3NySk5E8",
  "key5": "23Jqv4TJvjFF1zC8TqFyXdQBogKDcDBSzm8UpLT5yBJ3t9PTKSoYJnnFCb8EjkfWctDAuHZ5Uar5aYBrE6sZNKcE",
  "key6": "5rWdTX8vYEnSVJsF8e5PJvRKwcBAwCy1ozCbS1Trrgjymgk9yXyLedRxcjaChWkNqSGDpQ4yaZjBr5bSMNW4NvCn",
  "key7": "ECa7a2zf2dKRWeD1PMUPNdBFKGPyg4Ejbt83ycS23rtk2RUE7R8hNAdqTTLpDLSQumvXzcDVUnaerucYijBzMAw",
  "key8": "2VLGpFbWadMgVawaEKyKZECtuKiZ67wZZ3gVQ5P3MENiLhxR6FEAcVz6sxyX2VqArPwkUsHx1796DZZ1UaYuGLCi",
  "key9": "vCwA3htg5qQXRDM65KdLUUzpzEfU3qXNLvWpR6TzR6wc4iwDBriwxDPxTRbPCVeFUnmBBYwDu7RmTnAZfvpdHNH",
  "key10": "2r6yPC9EXbzCYRmdCD45erxHWLtYmSuxHEVB6eKhTsBUx5XPkpXcxqWcU1WZg7wK2wNHfK67dTJt2A7MdVnQHUWE",
  "key11": "4Esv5dLc1SswPXPLHxYT4nQyFByW3s2eX7iv97ctjpgoFRZXreLenZZevQ5yie9FPuLSQAuM28B1oWY7b6qhhwJK",
  "key12": "592XpPnhSXaRtZTz3LagnkWgerUTs96xqcMB5Z6HvSi54fZzKWAFrNiZAURPNw3uhuBzcaaDL7D8jtRG3nUdfpZp",
  "key13": "27Q2hs6fvrLBfDGtQkAxSsuxkCeR1DZAG14VMEegr6yjZiXDL3k8PjwxsiffBUV1aZMQTuBQoJ7XDqBHRDiUvYVw",
  "key14": "4GWBV9BSHt6H5GCTKNYd5uhz3XWbwMiqLpra2YS3QU2JP5pDkbmX5YYK1bKvq61HFKRDDXZcDWVKTSMR1NvDf68Y",
  "key15": "eQCGbyT4caXhkZbHRKZEKsHjQBTYC1bNXc526cm3ErhEJjFrbGpmAyYod9PqfjJhYsnxX9egFeX6vnPE5zfFHkp",
  "key16": "4Kocq2kYuor6pxH7yrz85cMLCEjuNvpnzf36GihR5yeLZ4c7smGu6qdmVNQJA7k4tCt693keYgXzNhap2psLQz6H",
  "key17": "49aCe3H9rSU4WTsAbRBzoDdS5NorqVfNUPxfnHjoES3Un4Fnzu23kZBpYLX2xDLMugeBKX8NcoDUqTCyS5dm3eGL",
  "key18": "4hddrCyvHjABuMSppTkLAgmoKXMWx3uTPh4R137CW6oaM2pr2uy4DPEoCLk85sZQHmF281Az5ByjQfZQt2qP4iX1",
  "key19": "2FWnLvq8gGaCmmyTWnNnPyxe2dByUoi2HUw6ZnndQw5KGxrSpU3tLSP4oMzaVKBC4THk8yYN8sKHmMPSEpCRRRco",
  "key20": "ZkQkhXnEGUhZ2Xrz7st96oA5yJEbGQsY1jeJXDrbutDM1ryKFZFvM3ML4UDGfS6KfqcFYe5UB7QxV3ZTz8TJixn",
  "key21": "Q4TqMmnBeWfcdEUs57jY4YFKkfQrG57fFhx9G5e1GnWmwYFMdg8P1HvqhCKrHMvsE5USGGTQceDhzWu52A4N9C7",
  "key22": "3cFw78NJfKSh5Xd5SrAdc3g8TdZgX2RYSSJJjyXpgJvHGS9kXEXAR7JRwaPULZfeJhrYENSdERbN9fhRWDqMreMe",
  "key23": "2WQqe8ivBjiKeCPKsJzPhMbBa2cUDvz8NvJuWK8p7wcKTaqsXTwesd6e1aC3qA4DBvjFv76wFZwfz5SdeMcJ5y9J",
  "key24": "3xbmXRKh9kkGEEJ1Q2ppRexdNn2yqGWWPM6EsQmS6Uvi7ChLkeUucatzJPJA6NtsAV7YQjuxBUbXNyETbvuLP7FS",
  "key25": "2Av4t61rFCgd9UeXV1ssHGbNibBYhSeZDb2gnEwzCRiZTe5695sLYL5YJhfLF9dYw53itSYpJqkvCQDfWBkV2t1s",
  "key26": "9yDFYTFPfAFbfkBHJVz93VZjoCoeXJm2T67kVv1B29LE6nK3v5kyHWfq4zzzC2iZJtcDeJGzUvfXYWCpFGkaxeE",
  "key27": "4xrooCHy7fHuyBPQXQHUH2VvY7mQ61gqNAZW7iaDSS5PUKNYxSqzzvoK5jyhVCuRUED5NhePjEDJ8jFtUBFm1Zw5",
  "key28": "3K4YaEo6YJ2L43NXhqh9q729HyBaQtXdyDsiiFPYa3i5R4B5gooEvdmtCVkrwgTLZ5RSkfPBEH9SPcowcgKnCHeg",
  "key29": "3iHoxQtoBDP4wmxkU4Sq2iT4pV8vbQdTUoLUwjLhyR1Ve7ZMmLVQRSpYuPgLttmaoAdybCL2VpmTzjsbdL7e8wbE",
  "key30": "3LQ6k99T6PbLnTgsdYBJrreWqDNrQNpSmXNA679uceZebRmBcXv1k9BL54fzukH4UxqBGkiBJSJ8hNWqC3iEGFzk",
  "key31": "3bfLNGeJaFuoSBiHcEJp2eD4TQwm5p9VtV1mBL6kgxSqCC5Ajid3HnkL7ie26mjrKNFjHNFoMU7kAJdqhsfv6NFN",
  "key32": "3HRoqp9eA851Y1K1Fp5ZXw29GxwUJqDbJDoKPzQeVo5nsxL34HtoVAdFH27cD1f6VrxRzjAaKLTgL8wdoaYJkfTb",
  "key33": "bPWh1USGLE1yAsL1K2ELX1cCSpkogVNHx6YR5B17Ckg9qM8Dxp6CBKLf9pZiYjGpm7JTP6d3qCo6SQqiXQxSDQk",
  "key34": "HfTfNjNZgg4NwtBAs9cuFMCgywtQtkCwywCwsQWprsx5i96MsyyYotRrNMN7w9SCVzcpgmjTUkpAZb6m48vVaYm",
  "key35": "3RzrD6e9JEjUy5uu9zfd8fL8gAGaohYtDyXCjxHnLg57fqQWEELSkntGAW2bAbkvXprstEQaJzuASG5ivJStDeK5",
  "key36": "9iekyL7edzMe8TBs67JFNCncndge1vd3Cv6Dc4V51ZQfsnHaxeg9eGcLCadEtiJngsZrbw4MKhBXamKhXxjQKLs",
  "key37": "2XYwsRx4NZNKCj6Gow6JZpvTsYMtnqRQYBsunJT431xzEwbuWgoTR7hiwPgG9hRrysnZMkX31HgHie4TCsubE4W5",
  "key38": "3RC5XqYnRb52PYARogVeEdqDHtPu4vTnN6twNwVwWNwEyhWQ8MhTCdtjgnT45mBVK5MQ7jWQieQzKzWE7Qbw4FUf",
  "key39": "5B5LdJJYCdv43ccxWkNvyiMGCxaJ733A6GS38dFRwNTA2w58HB9iM8Y1TcVxmSgbHqSbuU7oz7VucUcFoNC825d5",
  "key40": "5DMSbJvMaA3zmkRko5pakR56BwiFviUw3kDLabt5MF5rsHbeewYYDi3rGpuPSfwiM9PPZr8y5drpvD3LEBm4znsD",
  "key41": "4ZjpTBDvfopw9PKq2ZgXuL6hj1wq3Kf5rgzJG6E82qXxj6Xs5cjLLAUAxBHSTJgpbkjwGhYv8cBajtEdLkj4BidX",
  "key42": "5emWXtE37M9hDsYpDusXmG8yx9KvC23o9DaYK71RffudsNEQtcow5KC9qdRRcDuRDuYKvLsgXR6vv2TrpJJfaM1G",
  "key43": "59Q3rCBCNRyCLuSuy1XGRhhosijUKctgJFiA194vDK5DBJ9zK4ZHpW5wNSDN1RVFE9nUoAbq8LjhiJfTB7zTH4AC",
  "key44": "5YhyJBmBcVRin4LZzKgvpvcLx26Nizx3pvZuqxDkAJdqSWLeB8EzmFVfNekq3U8aFDXRqL1wuyoKL38ZoaUGNu65",
  "key45": "tBLDdqf1revkU8C1wDdBGcjh8wGzJ4eX7sg4gyJ52gFPMpY2gqHTpDUDCPt3b6tGovWRniFWSQWUAe4qvmVvLwi",
  "key46": "4nM8qmUwW2dnAzz1La7F7ThzYyJP5u94SBerFvYDQX8D1jeU12sV2d31U6GqpGiJJKyiJuJXDDgYou9Xs7zW4Wvc",
  "key47": "4gCRF7MsLxtfviBGScxHDiSg4DqKJz5ek9WKZYpYqrjQJ8PhMd6mc2iBZXAqvq6RFBUf1yc7LdwGegjLKazdESWr",
  "key48": "2L4jBzgPZ8PGY66uZDoauxUXwcAg8pi3B1MZ9eFmEDLCG1gDkA66xXGNtsTj82V1cpDHs4mXuRByCM26SiRhiPJr"
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
