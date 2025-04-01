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
    "2E2xXXDitjj2ns4AJn54tJFpyDj1cgJcFzaWLegLNE3peBJbTyFehikza1YaecthVkCM5xKCu3dcbfKfMLKZ7eLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEmi7avS3kpt6dj1CCy9BEsYNBS6axmv66RQQVUyQn2uUXf5wxNUHUahkXJ28ViXZ1GrpBdQpeYDBgHLiyeSbX8",
  "key1": "5koN1mjWvj2FT42KfBfDNSUi4tnAWiFkTdfphYqW95xv3YBM9iXvbUWuTTS9kf6FFkSr6qx4oiKoREHpVGs4jxNs",
  "key2": "4khmsyMsVqpN4yDc6noPJeX2nUEqKKEPQBLsfDaCGE1a6RwBEcNDvWBNV4a8kBSKnMX9dtF2dwysztaF1XCt2Y1d",
  "key3": "3qMYMYhC4BFMdC56RbQUaDoXcLQQ5sGKzxsaDfTbon4n3wzLGDGS94d15Q6Kq85RMBqc4FVZnnAWMc4havJCZZwL",
  "key4": "2mebZcKSfbEGzdRx9q98tjGnzk7aVu6sFh6d4o7EQ9gFycKrNn79cV6uPAomrGYkz4xfVUDtKww8D2u98vuqJ8Di",
  "key5": "MoqTyxi2syEVT44SWagMD6aQAA7y6qb46bPj9AqEVVKuxGtcBXYfy4TVgBpKRHopX8Ty9dmSNXeY7k6Tu1trwuK",
  "key6": "4Mp8Gphu3szcjNaRSL4d2E65WtRDSEQhKosgvFtzDG4dut2TikxFdc3wL22Ap47sGQjgUEaPAGdATx8vCUTB8xBV",
  "key7": "4D1vrbF1d6VXSxUJN8SEqbmx6yF3sa23xKc9e7YBLorY92iNX1UyHZ3sBj48sA9B9HwwqKCHUo6LpfP2vdsSd5P7",
  "key8": "4zquBrnRbdj9ffVTCGDvyWbRMWzyzi1E9Sds9UsMnRtz7uSqUzFEFSSadHgHwhLVnz4dRFtY78ddKCP4g15Esqwh",
  "key9": "4Twjnw8ro2cqAuf6yEpiYjZyEEeBa3KgxM7LdktNVvVWyJKTAwd14wmsWJVGz6AkojnJJNWDcrhSjjVGDKu41UDp",
  "key10": "FA5ikkHhh4Kd7e93ksjQnPeubpYYFidBaCLydgmGZENe2WZsuPiQVkbnAA7qy7mot1vyUmjD6BfQGSEdFrNYNZr",
  "key11": "3svCZwdNpzpuqdHULwxJF8LsUqSpcNzTBRqnB74CNd341aCM7Fi7HTwVcr8tQU82Azp5bM8rsGCPPDe53epGpr9Q",
  "key12": "4ynTJZs2bfjQpKxNGNXEFBPCmzGSmf26Rt6w9uhyLK855dueAzVBn2d32qDCwEc3Yp7iHLKLmLGG1ZEQn5XWDavm",
  "key13": "5SSWRL6o2xgjhpCYHkjTsLZ7vbXXa3hVcyug63dWmyxzHoSdP4JDxXjhohNwzdVHRTwwT2cSKemWjnwUEC8t5Rfo",
  "key14": "3i1rdNyHCZCDMd9yaampoKHDahhkKMq6nGuCddtH2xZdbARk5VeLBLoSjRZqXBmtdhoXeg5ByGqELQV7yQXTa2eq",
  "key15": "5fWUoWNGrz776oBQGmqLy3mSHzsbQyctqzYLQJyLjxecS5YG6ZB3tdexN4wNgW6QvWoYi6JYCdyTLHFF4V8U2nzp",
  "key16": "4FyE9zujLafCDcDXLzzbkJgxTCSpbr7nVoNPXJ7BGSditjthX94g8KoPmwRZuuXeupXzA5uQgEqDVCqNxft8Txhn",
  "key17": "4VqKDpHg8DEfB1HKGi8GhedsURMPQy1DNhobLkKT3S4xwX7AQ9QDk1eMv4bsbeyXxDpgQrGYS6499FjJ7YcmzLdo",
  "key18": "4GUHMtGEc3S6w9TSx5tgE771SPkdFR2arEMMWefWnbfHWdXVCWu5sa1a39f8Nbd8DVgYyK4dUWxeN8KfRwevGoBW",
  "key19": "2dvChYs9CWT9Gfp27P5fPgfXpHqNnrSnsiByWGeJPbUoJ87dSGWAGhAtfDMN43oAWkWFkRfnGKrcTe5ToFhewLrM",
  "key20": "55rTs2vAwZpgeM1jXRtaotHanMrHwBG1EgRj48hM1ykHt5mPQWU49HyQv68syD9X86BsQFYMZr5VcGcneLE4xhjT",
  "key21": "38XM3DmTkJ5KjkAN4JCbWrfCGFvAFz9FL9EYZ74o76ZMGDAjbEdYZjyfPJuDNe1mrXk2YtLnNRSneYpFiUZNkQSS",
  "key22": "5guxWRAomVNW1Y6mJa4f6bCuJHsT7PtjejgH6DYMfWQJygWozmtUFnmPGoyMzJQDdKAACXpkBePCBoZVVvUPBuHN",
  "key23": "NQADHN42aGiSN95SrPZgUdd3WfiNT1E81Wvzcv1WRaaauf5zoyP1DUqaxzmu4C1BRgN38ZSoeZSWG3yApXVTVYD",
  "key24": "5p7TzWAkHNDRfbd2w6zCTDf4JsviZTTtL9D1AbBGQ8haZS3Tsc3mBa31tZFq86B1LLyi3SQCdnZtiGHtRN3rdYkA",
  "key25": "5SeYoBSMEavDvn43p7GeXNNaxRGtEZAfbDQB6iMgTu1W8R2uYQGeaFNGUrcSxp1RXuPoyxU6cFcYy7DGoP6LdQso",
  "key26": "4kpc2jD3EgCfwhX3UXM1wVVsg7xz1BUFMvjPathZSRrAyySsUxAsjcXWCPfQJ1GcH9XTJKgUvNcBfgnrpj6qESLx",
  "key27": "5kre8Gyp2ugvNJwExoBZdKzS3NKXk2RWswU54aux8B9TxfeGZWV4Lygb4aRogwgooVXKox1Nwouzgrd56JBAuXsA",
  "key28": "KiMzCXg3ZYy9B8UB9v8EmEeij6NaexSSFgeJZzp5JpaJNCdsoKeQ91KJm676kvetZN1Q5Etb4LnwJxGKPKHyXQ9",
  "key29": "244wzteu3LpiBrz5UUy1iF5PQKdZtY8WsYFLzQ1ahrUmWzFx8CtFHzEppeCMhTkgBfkm1iDu1MFM1XRSS6o8hsVp",
  "key30": "2KzA2Ew7sLggHypkJbZmyNTFnChxkRTAv4NvFPKD6NaygAi873UUVUw6p94KzeZjfcgmVNC1HJm4rBmDSk6udBQm",
  "key31": "61R59SaTxTXu9W8Vb1SedDf9xFqg8Eh1vAkVFKQmyWAgV44rmAJ816DZHxEYYXeUAsggFg2uwMH8Wc78j3vqyxBw",
  "key32": "5VZax8wis59iKTUoa5jk2YFTPKmSNeMsYWjep9daNRBAs2uUvKujFBjR3LSRRsTNJkugLVqy4Jxzvig5uVPq7Wwd",
  "key33": "3RNZEQPEm3Mz1GRvbQTHfLMp8BjcjLyjfMKKZ7UoqqXqwPWwrDNK1N7BwFm6JACTNR5wUk7D4TVFUc1frwqSrjwH",
  "key34": "5xm18hkdj2tmMeMcnocPCiQLyr4BFpKKy3YTSUDpjquHdSVqjL9b6bTajAbffafqa3FK1fqGiqTVXLhwCBFKLLr6",
  "key35": "5V9X7KcXU1i78VHRbXxRajoqJJXEc3A61GGJRWhpcM9W94Lks78Bb8QQjk8azh9KKYtJbGJ2DprLekjhxabW2FJK",
  "key36": "2KX9N9696SJBy6JoZzR6iASzYLVeTQtSnZhxxPXUaEf6WB1db6apLCuXXd79sXx4HWHRRvLGJAxuqAhaaKcLyL8E"
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
