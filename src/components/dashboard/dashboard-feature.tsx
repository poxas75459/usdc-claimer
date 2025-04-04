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
    "XgW6xCU6ciyh1i2VUWcmS548dkUqBZ7KLavMngigBCtpzpBPoNtASeUF9PKK15ZLS2deV8SRQgugZJrAFkSL7E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvvfpUNZ1ZhXRKBC7TB8XKmNZZSY8WRLXmxX4XZiH19NvNFP2PwkRK1eGy3siKgey9UvpVQieGrEjfbqr8vqxCL",
  "key1": "5iiQgSkZgNNZnxsoNHL1eeWHm7TK9LuRvPkd8U14TrtejdQwejriSRQLia6DBJbrqSUGsYtVkGEuGJgg2kkFUXJY",
  "key2": "3Re72cKJLqfCokJ5zDBUWpeMghYzHzjoGAweVcNMJkyeGiZCJzTRzjzyukhox5fMS3KbbiaShzSJ2rwEwkmpLX22",
  "key3": "4xZkwg1LB9oQK4TE7MitLvsschkCaK9Rw6NYYmCYDVXFydG67789gLAb7xKyMVKimkSXkbrhSYGNuib6euSoEQjf",
  "key4": "3W2qsAxftZjg8MGr3MCQyShmRSK7Cc54wWWUSgMGKnTZMXDsEuUcmkWP6DT8Za2vKPdC5nRbqpRim2uwRmL5LkPS",
  "key5": "2hJ7EAFA7J8Ydk2yBbvQR1CPRWHFKbiCDN4HWsgSmMKFmV9Fx7jya47FuCy9p1KavBWGW2mrnpv6SZLPGHb9njuY",
  "key6": "5aCxAJxaCAG7ySsdafBZWQfQQ6ooEcQXGyENy6XQBpZgdr3gSbmB9GL2MiJEH3x84KBvmaqrcruPVSS37Pa6DbdG",
  "key7": "2XjBxjMtfy4f9JQ5F42CXLcJMt7WEjHKHtKnn68e3uLbN2CTeJzDD4HTAM8Kx4LGmp6uTQ88LrSCtY1cYpa6Etpg",
  "key8": "2uGeuah3Vdnz668snoF2B5fh8PYmgyM8LzPJGsAZZuY77d2N4bT1zch13Boc84py1N1w1wmEU41q1vysjeGUtYsE",
  "key9": "3Z74YsdEkDeuRnpCqHM3b3XWr7KsYd8twN9FTmM99EvSaeAwZ57c29TAaGDGjF3hccVcEHVjaYQEw8F8yRDdpoUh",
  "key10": "2jHBKxPS1xLUtSudHKqLo9q1XSk5E9YcKJddE8aCjiiJVFqz6MASehmoJPcZXkcxUUPKJbfTZEAAeMJ8kEiC8zDg",
  "key11": "5XaXHZ33QCj6QwAiQaNn8AoFakEJpS8DAAak7UzHoNLnBHwoKg7DFW3SUbrymj4ucwgeF83yYURhR3iLu6Uo3Sxp",
  "key12": "2FFH53UkXxmiJ7Qp4pNg2cBUWccjs7DC4xKCf5T4ZUHG9aE4miQn8ViKUjWCgSwYUrgRU41a6AYveCS9PiHzKSVm",
  "key13": "636N52sRaLEvWZGjuzNdnJWhqmhirkiF72eqkvu7iWkVgHG6jBY7UydgpF4SPm5Xr3nGoTSx3HRfGjdBQjgWBWc4",
  "key14": "FGgQ835EMaFkvwmqUkaKJYZLEqRDnzmt11RBNV9RBftzzqvBHzUBku1PvwYbc3bEFFExjrLKmoK4qmSMS9UwiW7",
  "key15": "5D7MLxYV7NpzthaUaFmr1b7Lm3MnXxJaLhDYvDaGUxLXqcoD4bRr1VQjRABndu9Lp8CGXTnydZTaVyGx4SC4762d",
  "key16": "5RMx9WBzx2HEppHgNvMKBsrKnKQY8wyUH4j5tHbQXAgYbRFsZYGUE9N9BMZLT5JUkai96beaaRw1hRDPU7FNjoa7",
  "key17": "qtYpGqGyzpzu7vF9wAfYTWGeLMVwVPeeHFuXM4Q3aCZsx3YHYwLfjjvFaTdFniFgNHfkRgHJge3ikUgxyqmmd8U",
  "key18": "5VrjLCmYSEouVJYEkVG3ceXuxMmaLRVeDYpXdyWGxFy317d4X67G6HJ8YvHJEjudWdCBGKpHdWZ7FuTrv8eas7eG",
  "key19": "QGXpJYfndKnNHJxbnEa7gLqsQvnRTsGmmst6DT6hFKrjVzN9bowQZE72BtQntUkkB7AQX77gZFmnytfggk6YzSi",
  "key20": "4G6QKkthEWjUNuggr4bF2HDfLmxDy6eV12qmWGoi9g28ne3WSLq94g1YRrWpNdeaSJaS7a6uwLq3krDupCPqNwgu",
  "key21": "wuScf4pfmsgWTRDVVBw5FwyNwi3hLu1bQMXJC8BKAr4L42DHxfqCP8bffbLMpFcPqPJAZqhjHTS6RyZ8DEybL74",
  "key22": "tuvRZwZpiRuYze4ep3sdYpsc8BvppoVKdiYtxzCmaZBWZn8DoPjUxC3Aao43McMFLsAvmbhq8ouryXGahr5GiY2",
  "key23": "3kN8EWsFNvGmN83NdJq4jXwX5P3u7APjTVXfe6pCLXWezJDRdbPQBoDyxseHTLFqgkSFafzCeqqCrKyQVfuabpZX",
  "key24": "4PbTfbHdXs7m5SQmrG9tew4zEBJDK8WQL7igL6ttK3aLMAShvdPRyGFoVXiKG1ueRaGPZgwNZZ5qWwRktwCyG8a9",
  "key25": "tPE1d54noRgT7ibNZCK6myKgVTqvAUESZtGQPxRPEsA7i8CU7aByYxNgGxmm7VaRABmQZWoPhfikDNQvSgwfhux",
  "key26": "5emTC99h6pdLtyt4LrXuEivczNVDo68Wjd3UhkqwRGHZg4ShPZ4RHcJym8L4aknE19bp9pMaLcrJvF18goumX4LR",
  "key27": "3XhafSvskcFRDKkHJFY1u6R3v8LXMz2EDtR4QnEGMedw93MvsPBfteqxkakgHp1Bc8NsyWqdbgB1U9RPAZ7B579s",
  "key28": "28BMYCc4Dy6L7sQDvm9asPtRKFuNUcVeGoR2fY3BXVLXyPnAB8vgQaJ11j9PfR2DrZtUxTrMxBhsVuHbEzF7ULA8",
  "key29": "gR22sdSaaZNkYS7TxvXmYZXp45YWrP5izwsntFTBFgLihMPssWy6hCJGKMYgMz5ZcirHqpjP9hnUWWp86i4oRAM",
  "key30": "WeWdzQQScqvQtz7Ly8gsVoaAi4kKgWrb73jGzwHJZgFPKUsBH4LuqqW1uTnP5dndFKxJwczdpDZzSVHNuthv1YK",
  "key31": "WTHQCgfVk63H7XcysuYMx5V2Dd3sgcTkhk6haazu498qY227pckVw9dpnr6aig3hkxC9XCuevo2MgVetgem1aqg",
  "key32": "3e43HUgHHeXNF9KKH5dZ2r1uzooBH4wDsBMne9fSwqt4NAgD77XWSKhgbmfEtEFqFamzCLUVmwtXzuSqVYRgx8ns",
  "key33": "67j9tXZY2UmDdrENPEasBMADD4AsSi4G8Nk3Rokar7k3h7FgNu5pCo1FhruPKtocspNWCuzYyALABz21zj6W1BxU",
  "key34": "4a2dC1fh4iqravUaamHJ3m4vke6ozxDsyQ4KNMjXH7bHwJyKLuT6fnxGzvXvGxnRDhLiRg7jWXTwTCK4T71VCnN8",
  "key35": "5DwwjFd8nu3ScDB32hsnEU2Yqr22H4Qrg5mt5zvMBfMSMgT3yVegYpHq7Ne3Z835X9pvYyjtGFtdUTLHq5kS8u5X",
  "key36": "5JNH8SGMNxDr7JLqa5nVd546TW8GgmJBF1QseTUQU6neYhEu1VcRv5nb6Xx3oXAdyb4etGsqVLbcqapisZSGEoEA",
  "key37": "3hnvcMbsknQ1M9pQZJNw7BSJEZFZFW3crqCbGKWtuV81NVRZy6tUAC4fEXeqMbNmoJiHuBWiuftb7y23nXEKh7XL",
  "key38": "4VQtLMwqLViPZwP3T1TEd7R2gWaEhY6mfWa7NZfBhmSVMBu6HDxQtqFKqCV1V7pywLwFAqwXVvPM7znKWez1cRHT",
  "key39": "5EUWv1ySkoqmkeL9wbXvMDcvpg1apnsTzZaFCdJfm2u9qXxRoLUz9YwxFnLPcR3CYoFvfzm9oq9jCc5WdXbmPpFz",
  "key40": "3NEgBqGkHnmL2j6e5R6T9xMcBFm4kejCbAuarxU4MvQrPgD63Nd8ZQHymooh2ukHsjer12eKcxK6fNHtTCbAzixX",
  "key41": "4vzUtcxxqYZUBQ9a4T7HTzBiAQsH1p8VZUd95tVtt899Nu7NZUpLkeeLVRZqQNNVCQJBSU1wXiGdWT4gDepYNmvr"
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
