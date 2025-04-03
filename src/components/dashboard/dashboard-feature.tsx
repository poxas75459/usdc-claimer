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
    "2RS89QrtvBGEiZ1G3MCRrnCjKKcoXax3y9c44W9Lj2zYguokJkhtSF8T6L2K5HfN5NVopWfCP7qqGzYCLo9GWWWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjjFDHL9VLmQMfmmp825VdFKN7GyttwieBcKLRtW3iWKpFG6chf1aiEGWW4AQhc45AFdX4vJu3zMfCPSXdiB95t",
  "key1": "2gY55W14a67jNT9QEm2bcmLjWV8TV3z2jLCHcb8tWXRsihs9WbmbPYMa3YVeU2DvWqSygGYuYkrGiji4uKwK2mGj",
  "key2": "3d6P57Y2zKdiH1fqTfRzaXMMgJuU17DPswsFh9MJhEW5S5Co9JNWsZz16G5sF3eNh58RJT5TPgzjHnS8ve5tmEeZ",
  "key3": "5VZXBrinM7yfEAeZe1qCsD94A7YF4PcPRg27TRoXVBpAdRjwYYV6ZydY16qhmLLr1FeorU3HFrgUj4LU2ZeB5wtZ",
  "key4": "pXCsNKX4DMTXudBQEi1sdFazjBosh7XQhE8h1EA9yct9F9E9Fx9Niqhc2xdejkG5qhLtYyphpDEqgHjM5hok3xq",
  "key5": "3bSRRjjrZ79bC8uH2jgtTZHNVUfvUQXneUEbMxoAhTgMYx68gQUpmv9SwJE5VnMVsXh2w714t3zQxxVxjxQMPKeF",
  "key6": "vRqacKcgiKDZo7t9DRbRt83idWtXUuA95Ky7YgQvqv2JS4NSkVbFDTQSwjjoEJF1UvE9bmUgbmr6vmewGUTXyUe",
  "key7": "4vJagF6GvqXFMBakmNpfDHeKU9ko5Y5k89paeEKiJTRL3RZYi98eKiqKPC4sdzP81vijgR7iGqKtcA1shQrhSzjW",
  "key8": "4tZE9mzhKUGLqKaiAGkBUaP8vkYiuAWNrQYvjyZkC2A7f62v94sYqkouTjeh4tfTUsNGcEuL5DKMMGTdTneiuiBT",
  "key9": "2E5v35wRSESZDe2rPcyLQR8YJ5hh4hxXXjVkrztHy7btboJDZBFAnRStmmJw6FcXbk1g34aWm8xRpCNTN764ZrbX",
  "key10": "FnRR9XFQGn2Gt26nYXsJFo64mM2T31M6mFQ15eWycUSVNZjRaHE4fSDXE238tEb3H1tpVXFLSiFX8ygZieDbKQB",
  "key11": "5CrZB9wnvZdqn39o85DJrscUyUD4ugkpmFPSRWaYJXUWCzLQKsoFuw41asawdEvUibr4K8MiYeDiBZYAavdaZDrN",
  "key12": "3m3V7VeTvRaZzixYZ4K22ydWYXc7Jnoq4P8AGH4UL1qJLvdcEBR3sQo5nYQ5w5eWhdPfAL2xiwMMDL5VKwRMDMmE",
  "key13": "EYZRzUAFrwAZdou7e1xvEr5vWR7DN2vF52qoyHDARwkgkhatfbBJz6xpqKi9GUtVENupoeHBGyXkE22e6fbQrPY",
  "key14": "2DpjvtQkyWnbXgW1BfJabQsyxQNfCBxbbgWu9hyUFNPVZmgkFCELSKDynutPkDCdNtoxpQr32LVmXeid6R7EzJbc",
  "key15": "5qsqhNoj3oNgJi9grtJ5hTBHd2V8FBEP3dzNJGp3AU22cLHMnLmM11RZ5PqmhJpvVvnTQPuurn65K9k5DSr7AobB",
  "key16": "CN15fn2SCs96uMj23fTf4jspKYdHN1ipfvn9RTLWxic7ZeTfCQ23QNzVVg1nzkxKHVX6TgFyQ7X3U3X7gvbXhgD",
  "key17": "3ScweyEbBFeezFKDktcMaUFveUbetLcukQuWdzZB9X6BjYGr6e6jS6y8ZQjeXWFRKBF7nBZkv1pLZJXQTHmX51z6",
  "key18": "4JA7bYUb2j9BjE6eEE52P8EUKfPSWGT7wyfyXNwBpaDPXu8bWJsW5nZ7dPn7fhQ7r1QtE6h55w2mQ9QjekQjf2KW",
  "key19": "J2UogEsUxkUFddj3CzzPxcVKWPkzX2rw9xFKW9YMaaGkrQyd6qTauMka3FXxsD5NZ4uNFBbGmSwgVJR8DUTXZKL",
  "key20": "3ALskfeQdWr6ZLxo9C3Ub8WCchFGzVK4Y9Fp4eabk1LWHhBxJVH8Gtry5Bwx1o6AMJ3Lwacv4mqr7AS8vhg2HADN",
  "key21": "4prFEFBRFfR1RWZhxUuwFaYxpvCMGTPem7zV18gaAhMdVza1NmB5eVPCpiPPfxTAEudBL55U7KvGevRA94yDrXxu",
  "key22": "4StcjDoMRngx6ymVkbuKBsDojqtr5feFB3Uoh3JBiHAPD4gxi74wmDy5VZK1J1mNJXAFWDcF26Gdmcpvi8hPBkGm",
  "key23": "wG5CSDG2CJycjrHiYjdqtfmfqdq4iw97C8mbiVmTCexmNc5yiruq7fV5XowfhH7iyBguxYHnuVeb2Mf7DTAWhwX",
  "key24": "4FGsRmgsio2LZXrT1BHLgEwNDcD7oiRTs2ygusTykbDttHo61f2JDyZtSoL1RPXxXnbqSu7nWGWn28886eWvRvoQ",
  "key25": "3EgPZrVwSY3uBE7pe3yFGECsusoxwJx9eqoorrnpavyseqUVK9vcu3QBuEL3a9oUtyhzizmJHtsWfcEatFyr96e3",
  "key26": "56hYXAJqXoZ6shJ9mr11PfJseeGbD3Y59QvEJNS5MUQk93BG8G1FePbKwuWNBCQ11m4mgBZo3hBLvfJKPS9YyrKE",
  "key27": "wYPQvUgxVv9GgVqyP17dJqfx5G9X7rqHMUaTS1JfRZAfcAHShdp99zuwsovh1KQwx75hNY1DjgRBQeHGQ9mCLFL",
  "key28": "21CJAAhmWRfDMWdeuyn418fFYqS68UeoqKyTomxFyHhGDcqCyLBgGbUZytFFxi2XjjW13FZERXk9ziZJz4TTqZdT",
  "key29": "3HoBt36FFM5u1t9XwZv5JZh2Hrq7oKhZkC6Y6ReAsZs8ct7ghScGL9ph6WzKoZm3y3sgTaGrfHVop2DaQXeiqEEM",
  "key30": "4Q72Quus1v3sAtc8yremig829tSewt5xYLiThaLWMXunqdaR6CGoD9f4p1h4yNASpTS7ZWVZ8V2eGiVZQXHySwoX",
  "key31": "5CpEKuDnjmY4j6DUbd5dfUGF1vx5vctWxQejq2WcNPbbBcL4wj8z7jHJpmgiei2DQpcLowspeDpQZdZBd8EAHjkq",
  "key32": "4XofNPPKWXbdGNirA4GPPC9NdsbFaNTKFTcUTtpxQ77iKBamNVKnDV2rhzRX8fxofjWygokrKHzDfWdBn1d45wqR",
  "key33": "28ebkAc6yzQpFw55VgQHPufVbvmaLaeNQAYkDQgWvc4axJwKLeS9vvenjha3vf2PirbX9VgpaVB6NAJ2ViWmkKPd",
  "key34": "2XpR2XVfX48GB8YULQdz4y2J9CYFRPPhdD9ezMQXhEPMCEf3WYh5H5d6b5R54EyXuQ4TtdGjAz47vGUEXzZqD27H",
  "key35": "2zpaePS7SiFpuaLW6kbGCysyV4wWjBognFzsFaukrUgkghpioFTmWbQV4U3q9fm6SWCedCsYXqfeDHGDQEAk6qX5",
  "key36": "3P7qCwgtSrELxF1RNGY9keQb495KcqbeQYC6cWjdJ8nhodHv1qXhnS6mEforFF1GTsYbFrgnxXEpBUsWWurQhivY",
  "key37": "4XtSLtAydCzRAYLkBU3uvA1vihVSaP4HJ6QcJQ17PnNyGAFgRp5zW1o98jGhmE5GxjyvvZCsgfqViQa3yjxJr8Wn",
  "key38": "5kZ9tjyXr6k5BBi8kUUwMqcxsRD5MLMuazjjiueq634KeDgeA4RiByw7qrBcYusGqsT6eLcerhZ9nRxj7JwwwHuR",
  "key39": "5CgRoUm9NvjxTAYKbYwP3JVVJztncJ1GCd9ZgygkDs62VZfcMJ8oGgc2YT8ipdkZeFjLkxbLcMg9yXFUkkkXrXSm",
  "key40": "4mnHYkFfix9tNd4pvhSy12V1aPTNmwhtuguboY92owys5VaEK2m7Jq9vydh5Gzf8a97cR9qUeVZF4XojwwCMquF3",
  "key41": "RcUWWarKt5ao1BNAhLVDpyg3xH1QgkVMBQt4HeF5bPHkABJRLq1eUakj1gLee5nuHucWTNxwN7YYoMWVLcrnTH3",
  "key42": "4fC8i1ahcT857FALEdCaN6NJ3zcPF29Kn6UdeYVHQdNCwk4afUB27zK7E3uiowiEeGaddfJHJrmZt9d8Ah85acPS",
  "key43": "3YeYsuNB2qNqSZnwyRPeX9pjGRFwyG7bfngqinNhAvoYg7ugwu55byCajdathXinBQGAjXFnyHW2WqHVdJ2NjfxL",
  "key44": "QW9gNq8Tz8eFC2pJQmjxtfggpE239HxgaFPkSCSngEsvxiGchV8b28wJ1GCZzQGQXL8sxr1oWa1dPLN7EAHk1n4",
  "key45": "29N3wi1YkNobiEkexk9X4gMjUhrMW5Wb91Np5pWEiR6BzNief186zNhbrM1V8t2t6fT6SpAWkw1XKvS8wrwq5JR2"
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
