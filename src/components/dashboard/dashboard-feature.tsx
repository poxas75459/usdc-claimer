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
    "2RhyEpp11T1Vm6RWskJA8mpWcfXqdAhkPMKfp9StE2vMBbGQQtDa4Q8tFmgNZzTqedb7wv678zw8ivboiVcukQCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTf17ZRjxxhr6jdbLNao575nbsoEBaqxE9EfZsGktuYNfmF9VroQymSEpDLDGJqHo7VGT4336GE7f7n3cQmnRUM",
  "key1": "32wBPRT22n52CrTEn5SYEiHKyqt2UJTpFKg4mK3Lq4LpgAHhc4bPjUfL7jXLQJjW8GtzJEaAGqh8hw9XGNJgRZ2V",
  "key2": "29utLUu44bP2BV1GoM5krfCJuk2mCVGp1SccaJpQ9qU4qzB5hySqaQww7f2891L81WgJ5GZK63GNqg9DU9YxKwxM",
  "key3": "5fnhzQaC7Tnxjc5KXM2UFe6Tmy79iYATudbjdb5VFo4tvnAsKRZURwkQGxDfvLq23TdLLwmw9jsqrCUnLympWfEC",
  "key4": "ic5NnnkzDaHtqhFdnxwn9jEnKHyTLKmBM4NFtvWTnanPNd1BE9iGeBePZADrkoo56EH8NSzUWq2YZBNV7JY2uFT",
  "key5": "4umfPzrCQXZYxCxfCSkwLCt38DXvQdnGKtJdXxRwzd1A3qTZNw16cdphMg1QgNZq4XkkGdH8VJB2PjWCeEt4GhPf",
  "key6": "tTPE1duNyD1Yvh8uihdfc8VDvRhuj8wgrWwd4SZ2KqSCf5jLdJqaGDdoMTgr1xFs41PkaQdofUoQiLqjXVxGcY9",
  "key7": "56vY7wqRKWGzedtSDcKHHf9xFCPgmgVieXwdHb9cUoQ9uPRxMdzRBq46U3KcQEaYmcyUjXLdXKyHmTpCBaMqYeXB",
  "key8": "3FnFUj1iqHj2pbDawKGexYitkJFAnKi5YYzCGKX2LfTnNpGVLTXiCp3MQFzKNLmQATVNu89oBc1rxUJjydaEZoQN",
  "key9": "5EbY3Hmm23i91chhsNwnUyBskFnRqwJyWXNgSSEdHGLW4x1his9HttMBo4pjhCPstUEgGp7HqDeCTvV4D9c2rcJA",
  "key10": "5Xfk8QN6RN7gUb1FXTdvLS4QbrSsDJQgyAh3iLgfAdSgcef35ecHTUr97NhcPoFQEeUNq8QftzQ5vvY3k53D5uuv",
  "key11": "5WKTfHRARcoMiWnh7AJACSqQTZH19fTPcijsQgpWSFAcuts7sXLXU2PPC6qYoBGxn9DgLjp65J9E1cbKqgQakpL8",
  "key12": "5R6HRQWQ3m69VfcELm1zqHtHMZoNxisK4quXf8fQ25gQvCYcgokkU38NRjeGdsH1gSRQdSZVJdmC5TcowwfDD4cX",
  "key13": "52mUvHfcNNZn8CpoYwqeLrBEwpYGHFQcWtA2Aua5WvcAMeSvQxVC2MPk8p7ebnfWJqmtVBCCrM1NtWXKx3Ccjfip",
  "key14": "4cThgNDAotSnjTRAgHPmFdkxBFbL7pXAduDJ34byrpNpXe1YjoZxExtu2JirTqmJSn8JsYet7PaZ4u8wZMw3Rt7Y",
  "key15": "5mp5f9o59853HXijMb7xRnhHTsiyLTxGYnYPx9u9L8c5aUig1ArFL7yn6mDpTRSrNSbMYuis6xMo27QZcXgh3oK7",
  "key16": "5dncKvpLFU2Se2VKd39eLALE4UEpvpYdxKtpKya9qrKNN1qmd9yviwEcW2vNheG7cruYL7orNsC3L2bWri9X1zzj",
  "key17": "3QGimQaZPFJXzUDrDcdqCMgvU8okZeqn6UQns1kXiA3NrdQuBy2CUvDEp2VA45tahL6KH7t9F2sbUhzNzusXYd2K",
  "key18": "5A6mqpBBvr2vnSBZ1MZTQPCoV8nNcLwQvEKxoBGSxtXy8ziGbhSp5CWvcz9ApNmogvpqxJdJEL2xnZUM36ASTJCc",
  "key19": "4ciMRUAMbojk3krQ3bE7pfSUUsFH86SCF4cVjeaaoxtjBytjqj7cWDDbEoiy7MDdcAfB4AixDBeZTnrmhRco8b4j",
  "key20": "3pwAjiLW9Q9kkKoaEn2hDZHmU35NrGVw826g9tgm8a3EybdodB7URzjDYs8sgswM3XCWtSjukbprTHVGjHC8DvMk",
  "key21": "JQ6nbMwDru2su3J3eYAQw2JM98XbmheAqHLHScuDcxohGxincGwrxrqU2pGk6azGXY3YFhsQ7Ug9dtYQMTiLzNv",
  "key22": "4G6RcuYfLdJmphHLvyKTdYPuB3QaBSweM4BkFuyHE1nXR4jBmp5GogFR219r9N3xZLkA5E8Agr22n8AjBMDDGFhN",
  "key23": "63shGXWPnsLi6S21HgbRHHXX2fSRFiamUpvxoUUy1VCAyWWzcfqu37UxrKz47LhmAQHzR23PvBu8Vo3fFuBRYNdz",
  "key24": "3JkRFU94yXrdxVP2NE6ZANyfshSV1tLeJqPDF4DXPmJbDfpcJBr4CuZS5fT9DM9WU2w5D2htZEomTQPGXspEuAP6",
  "key25": "5KLGgJgZEt15WaxgUY8THUadxdJ952BupVHpdKYZ5D1NLKqZCi1mqEHSCTQc2M9U4LDnrjN9cyXyRChLakjNWc51",
  "key26": "54uvALGeHmaajjQHppTDzrGszPb9cXgzvFj5scDXKs9giPVUR65LWDPsqrzBHgx9NvSJ1y4Nb9yRPEGSZz7Dg9G1",
  "key27": "59wFYAVS6aMATTmuLdb21xr6mrX4y93SxaavXy5AqK9ujWfeoWfm6eWTiURuJyKHzuTE86JdLX31LDPYoresf6xk",
  "key28": "4NNp8AUM6tSm4Qb8v8zXnffqJeMP9Hx5ZHUmwkH9tbfKcFLp3Rh3xh1FqPQPwuQryUYAfLTP3iVmxtNq94WBvjfv",
  "key29": "2UpMpmECjT79dZKAfGgkD5Ptwfx4SY5CYFKTETUJa2VAfwDnrNLtW3E85qZcsquYpffBxMdKbxWqd383AaW89MwW",
  "key30": "ZeqKLExC4a6R8LhShz6ZeY53Khz3BnevHekSTtCdDZV9MXk9hSqCuSSURwHDa8RWzcD7ZpWbn4Mpz9KgNVJg7dF",
  "key31": "3yBQqUGSxeZFqxaKTeggXWFtzJL3ZS1Q3EqXhNjZaLcYD5Ua9AY3exWeD59WY3HQFzGLFD1VSozEUjUHtk3Av751",
  "key32": "fEo7FVVc94xRw6fpz6nbug3UPVEivZq7aFWmdDrC4mmrxycSCZ4UphcZru1Wg5E3Gc4KYSGgo5VfB55JbLER5ov",
  "key33": "51D7Q47q6J2H2M9xrW7FtTacPCEo44e44FBd3hXeSRgbJqw4QhGWe5nSchmeFDceSBbpVJVyqcWvGiMYP7JLCHRR",
  "key34": "5JXmiFECA9snzCP5chbUfgVeJ576n7ET4tTmCQGETbvz4goaCStATVDmxvJPMiRiRKvyvXEifHH973XpNUijANve",
  "key35": "59Ke6ZPXkyggkwTAqMqEVAZYe6RUzGSoHkUELKQnSCAfS1qoMGn2kwLvUYTh8CtnRg4BJQXkfWocg56w636pQzrB",
  "key36": "433yj7yD9ZMJGdDtGcjMFgb7kjhJQjcRgjJPGj6bPwG6DnGjWD1yRWL95KaUVXPgX62SLevcPqg3iXrHu6e9RZF7",
  "key37": "5UkEMy3c38682JSmZfrgzs2K1cWJdSKehQrg7uYFyhtPmfABuU7rkmM9nykiZ4NQzUFTVt7C2ScWPGwutatSmmeo",
  "key38": "5Jw9iFDk8riyrVT3ukJkhSdBTk5bshdC6FCz6n4PCLPzpy5FBzjWhGFXSwf1pByMkQeSipA2TDJV5hvRG4hAypYF",
  "key39": "4DgWb2uhiRRnqegGakVGX4tJg7NHC4wkZBUjvYeX5emKUQGg7Szth6FjXjHfV5kAc7DbMX4qjBM1jQDC8Q78coqR",
  "key40": "4JAvXpgxCH9iUix6YMtX6VQV8JqYjPes3cwBJmfJ42hFrtEQRdX8X8QS1Xms9aXaHzkbnQwdHzmhx2xf1yarmUT6",
  "key41": "v35Yw3XVTfYsCpap3vys929Paq9qcsG8xYzzBtVfCGDzQSuEUyYzkUF7Nw1BoAsHRogV4Nn9r1zLrRAsaWS4o41"
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
