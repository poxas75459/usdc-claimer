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
    "4Q5hKU3ttXww9BvsBxW17xcT2sZRVEwbQi9apVnDoA6WLJnyyPYjTsmPTkhnV1cveAxP4chsVZPtWLi6gANpstAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gcqjnc2YfBW2dwPsH7gb4NnF4CegwgTNLFvW2hmiwBZhfcaXAy7NSg7PCWqa9wczTq5LECmLqspuqCRsxtmeVJ1",
  "key1": "36HFR7FH96FbwYPDMxi3t447AMQmBB5YRim6eW4ACUT5VdLgnbfJN8g1AdV8RQMnMs5uSexNiZg4ebPGAsZ9HcTc",
  "key2": "3xSNj6Bf7iTd38sfcGi1B9GBkZSZoGW1aqBjT5PJfJkVVz5uk3ZMjW6di5WcrGPHgyA8yQ1b6W83LbMsSriUUsdw",
  "key3": "4XG2zoqhfyMruThoXaEzTJSia7GymvapHDkLeqQgd1sJZXJe9T5tiBNLnMKjeRcRyH1TfK4FVJjt1AWoe9o7vNUg",
  "key4": "3q6pjpLiDeuwKaWq3imHqp4ddyhZLQKsohbf5NZa3go3g8dqMb5zD21tzQXhSYF4A8ZJrRzdRZGbXxkveh5hH4QU",
  "key5": "4w9gEDa3ggFQAdu2A9VYXaWXidJtjCjU9L25sXM4yEqrTjRtfTUiL1gfK1tdf3U4jqF6tL6y3UwRd8hxysTvxYz",
  "key6": "5dWyi9JmXCihgMybv1Kaj2bXZ5mt4EbgpQvgFrPPdc3C1QbKQ4yQZeEs85sL6Y2ZBkK4382ZdxNXCBK8Gd15ScD6",
  "key7": "3i7xwepEr6C25bUzotPnPN8ZzY2q3AhRWT6z75yQRFadCUJTCTinHUubKoaoaV9f7CHmjWcMmkKxa4FaJTxSjCms",
  "key8": "4bmaNb8V8xvXvS3QnrdUv7HGSGEHJcUr3npm8m18ozNV25p7dDeMCX59Pfexgp8Fhh9Z41M76m3hEtc7U82Mr9db",
  "key9": "46kWnYWGqY1rtUgiaoC6FEbmyrtpLrdqgKXXkHHYRn3Bh9THd4bfBhQUYxBDVW47i7qYGHe7ocnEXfhJyHjqC8jY",
  "key10": "5YtVp3t5j9RdRxHosoQWb2KWSdto2bBeoJBeYYvuknutCVGoA84JsGYKUiFixRg5ZxBiQ2dADgn4Gd7TV2i8mb4Y",
  "key11": "LERz4UZdWNUko4GgFgbVpnmpnTRDLXsC5FcLvMKbCy6KM6VUdhmLVA5JeSdwSG4K2KxgoMbdYh5ekySXGNXYuDZ",
  "key12": "2FXzsi2MAq562oiCHpRPSJjxudYteoZN6ELmSLtwi5TU3thShKwjEwRGz4Pvu4od1csYetXSRbLvtxCMjh1ZCzHZ",
  "key13": "5Ruwtvau8N2N2GbL8dU5FXJqWZ94Y9FZphJuyxAPZhVniTiktLknHjAJVFfXyt2hkDBXjxMU5387L6YMhRectYZX",
  "key14": "3z3HqrfqJXRrFXCEJ11HG9boxfNMBJi9Dxqv8NajEK2RHgBp9xNiTiYo7FGJKDiQXJUkm6mW24eHW6rWQViX3yDb",
  "key15": "1KB86bLg1eHGvudZqgs9dcjPoFWe3ixoxpPQZkCQKT1Bv8yHWU5Ctws5E6zHFzJjVk52Butc4kWrmnzpQQuGNdC",
  "key16": "3DuTFifVo7MnonykKahTyKx6BWwFmij5EX1xS4sHrmm8VjXSbrBECdQscdLFvFtxXgDc8S8To9dkG7eXzRmBhPMw",
  "key17": "y8v3TF8RezEkvBhQbECiYM1WJ1KNqFBS7Ca4tDKmW3CnkDcEaEE6Wujub8UVWwzJkv51ABUajKacUogB9MsF6Xn",
  "key18": "ovYRYyoPQrQx98jicyqxNRwWk3MLWq2puwvobPCvdeu22hQm17nA6JdgVYHj3qDeXogzmW3JLjarx14EJijwNQx",
  "key19": "4HiMk22ufnjPwg3WEKB4WyQYKc4DYg7JJaJW2VNhnkLCgya3NpjQ6poqVMPDTSjeSQavfrwjAkx7BVC1bBRguaCE",
  "key20": "5MR9LqcWSaox3Luaaw6HfgCWAb7HFb9UzHcqNjFvDpDyUw7NDBtgoLn1PHLkuRBnLnD2aBrVf3jWUiSyitPYV6id",
  "key21": "3PjVj49j69R6UcGBXF7XicGoqmQPfn8imh1uHhBQiGvrFccB2DYLcxYJ41z3LWKR4qTfhLiCHsdum1uj7YVTkSyk",
  "key22": "3kC9H8Q5s7QiCevkmu42xfwUvNTiVP642UYPoJMJXx3KNgrpxDFhVHrSMurMxC6Ejvn1nbUpeGuLh65QeQkRpeDC",
  "key23": "MPciz5kckgrjk4TzPtU8uLucy1WkzCe9fHamB3t7GcCY62K5mAS38dkriyBPCHUUj4FHr2Pmi3g2Sb6P8c8UY1o",
  "key24": "4u3v45HNYcAFjHTCAYP1GzA2pSikDJFrLFdMqMyu9ZEjAizu1araKjVJN1eiQh4AdpJcCdYsKXvvFMd2bgamSR8f",
  "key25": "qwBeoe9xrFZz1CiRiTtk781jSRt2ZCJJhLXMZvpzmHKwnrYkYnr8uqLyqKDdsmhw2EmjfNAgbUw7gZdnx1wLVtC",
  "key26": "XL1ERs7mkDybxn9QWgLA9NsgvanKT17V7gtEKrL9RVEvFJDo4jmmNFratSEoDNeeM9MutoM217EfkjToJnLRs4J",
  "key27": "5KxUBoNxngqSwwGRoLFGfWrm65vDfXFrwYJ38TinJQcrRJxtmxcoMi8MSwJ93TRzhDZeXYKF3CHcrkBgMQPffJth",
  "key28": "tEnpsqyZ5zK2nfPhqpEJFtiNRDDd6d9d2Z7Ucn9bsViPQvkvsixsfUQ8fq6BEtJ2SNStFnbgu86RMXZwEKJVhdA",
  "key29": "cr6p8mfMU2uwrHMZYSMa16He9QUEh1Ww5ojgBqcZ1g6FutM4VakNAwMVn9hwoVAyxgCD7MHXMA9TMpWkSrqfQK1",
  "key30": "2wZsQTp1mh3uq3vxJNH6ST262QGc7c7rwzJ7xPYcFV1cVYc7JGCn1pQFjCKX9npz5Tu1FQhRpxetuT3tmaJ8AN2V",
  "key31": "57whCuoP4H8pc5mpA3vqBsEbuVqSwMAfmm5bN9yK3zbihmL3w4yU3Vqs8rB3c7icpbz358iYJbgU3ibcdEaysn8",
  "key32": "2rDU94jN5bAkv1vM4pnmQHFquQ7W8ph6GWpwdSBdwzxce68H1mBGfR3kxx2Q4NwdEJmWryg9XyeU31UNZ8Q4EoUq",
  "key33": "2bfzMDigPB5YNTMwmSsPsRnMKtHhmbT8mU4db2FkPQCk3dvx6ag6GoMbdwutqJUuoWziJDKm3HKtH8npXo4BF9Yq",
  "key34": "4pe1hraTEZzUAvVM8bsGFqvQHTbJTXy3B4JZb4g67qRnRT5YC71un4nv2gwaqG9KFzwPwvpjH1uZ1NqcNudNFVbC"
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
