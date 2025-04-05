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
    "58LUtSuoNWvV7bjrgFhj9waK2CCcBpEZrFP6rEGUftagDgE7K4DigryewEfmb2PGthdXk8Q8z3GpneAt1dDnvswH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3zz96qxW7oLzUM6RGEcqEQAknPNMQvZPiu7meoTiAdWcfvQZS3L4PVqSU5xEebStrQ6ra9i8cjs8otca2hQAKi",
  "key1": "5SrNW2wNbU4Y6Qvm9hwbGhYYfEQ9LMPHT1foBacSc25qW3VbZ3RTjpvA385hbs5jzBBafqiWRmwfTm1dQvQgmixs",
  "key2": "2xDz9bnrjGh9wCDSUEW8DZgWRtSBcJ4dLSmzxgUk3MSdvxr8QGtg3LBmbAJmAoKw6De5BqyMxXmr2FRm7Q4MKQiR",
  "key3": "bAXov7RKDqDSocCbK3TsWHEkXZMDYKmiDT3n55PdJu2MYCCGcj73ztQtvCYs8HCFg7ADEGxj5vFAsQh33EhE2r5",
  "key4": "3fcR3UNHgTL7TjBhKCCdP9A4eHr8rxA4uJGq4a62ULHLy8NVKBRr6uRXeTaAn3Ne3MwMZjufZabsg6LV9sDf1xjm",
  "key5": "MdMMMUvNuJUAaHXxQv11jygobT71JkMWZfDfpSXFyyCNcibccyS3mjyiQErL8NE13rG98XXgQKWD9aMsYha7Yfi",
  "key6": "3rDqDBAg1zPFx8G42EoRSGWNfTf9Wm8oM6u8btEXuN9cYqX8fXTW5AaKBwhHAZ54WVfPDDziAANk5beFpZLtng3X",
  "key7": "4ggf1UZnkFbwYSDTBRgrMqE48Ri7vGFQ3avnP4Sme1CspudNTj1BN3WSuTeCMHRAZ5QsVV1mwNm5GCWZo1W4icQj",
  "key8": "5AaxW66GyANnKW5dYL2GFVuP6TThrELDR3jmyjgyUEQNkuA3WS8Ysy9jV4XooikAPTG1vs711K55swaQXjv6S1jo",
  "key9": "f7UdBHfjYDUgjWSx5G856qiypGjCRfKs41xMzArskUkos1JDdvvbrXEBGmqAD4ozdTxAvjmdtpAEHvBY9yt6WPZ",
  "key10": "jVj8eSLzoYUR3MDZ8F53LKQist16RZ7DPUqa5C8s6ovJFd38BeEfhdJUCQMoL8RPvGiiovoUwGoLh4ez43yApVk",
  "key11": "4GRR98T1nW1kCMCK4iWxkx1w7YqQAYVKUt6vKSpV8QcNhz7xT7L1gAYNAYgYdZL1QkQiypDDsE8vAM84uK9pqAPS",
  "key12": "47LPguGnHsUKWoSKF6iM3sRdE2Bon29bfyaHgkQivXSWqKKo4cLLxqPpqL8euoho3ftXaSi5zZ723z9vZGu4W7A9",
  "key13": "4oYZq2CCCCb6usbW8LRomKLXvQbhgJJhmGwsL3vrkDKxrNk6q5GUvrT4sJPPYj9BsWfqY3567qXgF4244VZUu8Es",
  "key14": "5qakiStH1jUEFgQ4VtCuL1qXYcBVtwrUihdfxLkzC1c8PeTL75siXzQqxjDsYTFrr1BvibaS5uV8fvWcQrpDkqiZ",
  "key15": "4Gz2FU6mG2nqz7qMjJNEYcBwwetvmaLN9UxWPeFg3dfEVJu6Lqg5p2BeJc2TgchvVEsRZPgnYuJowx7CZFn2zUaT",
  "key16": "3PQyfmKqDDexLhkqG83qfyDRkDoNnKCWvEabJmknsseJZSkodaBdTKrwohy6zNLfMyeSYmRGe34tHSANtmk7HNKW",
  "key17": "2fcRdXtGHVFHtyb5pRLBpxfxJ1EQT2C8dHo8EtTZRjrn6jxZG7vLRaQsXjTaZwRP4de2cQMTDFS241Mkx3WdJ5X1",
  "key18": "4yScFyLDVZTzS17QnpkKJzLZJesvfe8AcaVQT9KcfZU3w5Yvo4FyJzP77hoAzKzoYdfHCqszZwa9f1Xgf7uUMPpe",
  "key19": "5jc8RMJ1kYfeQSf5HVzknZ5n457AfcDwy4SzzDMBsvSq5wTjq1Z2asVo2YgeyJ3vFn4Z9LNhDXrftmiwv7VNMAxu",
  "key20": "5WZFsAPCd22NhHY75RDiJhF7CBqWze8CgdxFyPR7heW5YZ3mVkM8oAL3zxujnxohWDE1JaxJqP9pavejDhaS5UJK",
  "key21": "2jncprsbFNoiZRCjdhMN7gCu8CTn6KEYLnz4U1niPFrRHSWi72EMorxq6VWPMC3c1rVCiV1KjW2YNAXaAkosJCEo",
  "key22": "4B7NFv59Gtgj72SKiLz4oqg2ZaSHZKM5djsYmosgZUbbFnT7MYHuop9oGq95CgTjVCg622Cdi3Bz9g88oMQdPnxw",
  "key23": "24u3MQ7m89BYLiMaqqkGn5QP7eHs7dCfKKnLW1hgAXWvUgALBgYJRfqwKWo7bZn2UCm9dTravvssgxXZuzXh3mWj",
  "key24": "2s8W1k3hYU1iZgRaoAQcAPx86McMkcsAAesZ1fQTsxJew9oaZLePPWQeUy8Zpt4zvD9nsifsZxXx7d2EtYv7mB3K",
  "key25": "2QCAGsffiDn4U26nTrTsWEPZSgXFnUJRWPPC8A4u6JJLDTLZfExEAF9FjCWJrSrkPP1dEj7RZtDv2pwP4biLLzwt",
  "key26": "5ymEBnPsEro6GuK5DfevyBqknpymgCdwbRzvB1Lz6dHk6QXxnHs1AkN5n9CZPco1wWT8F24Dwbnhz2gaUcxaHxyb",
  "key27": "2euZbFEpnYHaJQQXmBWA7sWbPpsAcQQfmGqwbQbas58RrDaVZFgiwApHsvKjztrP8BBgyn8wSnt8iaoBo5Ec3SMw",
  "key28": "3Qjy4the17ev4qFsEhgmF4aokTYM5zMBoALkJn8e2jTD6wTU4YwZCm1Wg79CHDd6VgYDEh6MvBsCC6TR4CRzLHRm",
  "key29": "Uv7fEin78zUq9E6SDY8bqsvoxKDFxEu8qd1sXgG7KoXdJBpokVqrwEedtqqGTDjmwEhvpfweiePD7LH8ZBrAruy",
  "key30": "3fPuavHzu2T7WpFUt4y6ukjVCEtRhPG4u87VFBVceRMmhuKnDzqzGSsmtewwXwXgqiguMK3wP6VA5KugXx6ASKR5",
  "key31": "35jkN7KbkogRhamxdSuHo4FgHYLh46DYVSz347HTy91iRi3KkZReBHMBzh5WiL3LH7nguBGGL2Q2JBoXcgR42Vwg"
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
