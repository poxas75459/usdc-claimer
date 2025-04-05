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
    "5H4gZNBTYuciEwx5k5RakcKj9TP4Rbq9CUzwd7L77FvzhrWgxcv2VryShLdgRhpBy4bbgDPwWrrPuFDGJ71UC9NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5HPr9SUuYwmvCek4P1VpHV4zqwssaKCcXw2NwvD3venijMURUe78e2ATVqzDPD9jpWZcBZaQxrbCddJxtt9J6W",
  "key1": "YPhc7quyWj9XTqk5vg9RSD7UWPLfFL31oJzmj5RX3otPbEip7wtoEj2Ld63vAzj8eVAU5pYbtuZFkt8vfXUNE9u",
  "key2": "56Yu1wmhq43D3iG9eqgKo4i7EMWD32JxNqkDN6fr4iAUtgWXjyA7PKMwPLU53zehdvAXRak8fk5vUUakwG3z1PAL",
  "key3": "3Xuou2YMEGhAUmpTqw1eEVu79WzYCGU6EApGzptSkXFQNbXSKmnPDD2ZtMnYxUYAxY3FDXFfwVDK6HeoGZDDDfqU",
  "key4": "fSTvybDJ8dYWNnmgE7rH5dj8EHJUraxKUc6Ts5rczrHxzeeAZG7benejnXyGYpT3nXQUWhm31va8WwMfi8GLkhk",
  "key5": "3LJRC8T1enRiHCrAJnvc7VEb8TNSoi4nhGbYpjpmQTsfnHfHwEUps4PhFUsGy7xifrAHHfxBYeg1s7kzeasRBSUS",
  "key6": "2415dS6jQAvb2Hy5XK2ASSaQQxfUgGo77zMHtoVE1prHxm7CihxXJcMyUqvEMHNN8G7YzDPEm7pJCNNLgApjqjox",
  "key7": "hHKMabELyss7bB6JwSCbZLJMagArQZHnBWDpHdECANQzqZeqs3gU8zYHcVH3pe1BHdPsCUbcXFkLfeC7qLb5LPk",
  "key8": "z3zU16wcv9DPpMSVFsphzQbRzFpNSNcRNmjX5krgLpsrGAvSA6wpMAoBoz12U1Gt1JNAJwH6UYyogXcKFUMGWAd",
  "key9": "2gm14cVX1kWapuo4ibwZ9DfpyVEXe53KARdGmw62UL3bAU5jZCeSyjmWMhZ7GRpS1JYwjp9WiV254cF8anhKoRCQ",
  "key10": "3t6deahBB2JrL1XJi3eZy7j6fndTDd4Q7dHYpTNz311ZbJgiNzZNKwivu2Pbj5GUQc7HAuHA6HrUcGd1zrLz58PK",
  "key11": "eWfjBK9acYDPveKENSCuQF2SgBpcUkykGow4yoaZYUL4BwVXFgQtqWjemvmMxDXmCpRWYgbcJvpWRNEnG9v9hjS",
  "key12": "2cqnN9vjELnMLEYo2HKLAicYYmi9ZKyWjDG83aUEfB5Br5uKsa5Qrz3T25Dytc3KcipQbzxYN5y6UUaFi4awp4r",
  "key13": "2q3bYiksQCf1pj8X2xHhXFjjBhRhJELNaXXpTrS3muvNAEmVRXXm7Nz6Y9N8xtcS7RkNsGN9AiykXxASeMKpGR1X",
  "key14": "3pTEkw22Ztyu3yYchzFfzJfexuHfxR5zpsfYx4xp3Xtf3RdycUt138WU9ddBB5RUUUNttrN9HqQ2Z2EZNnvTvFRk",
  "key15": "5eS7nDUR7mugUgBhXxM7UfYJspvSCzzfeACiis94CReZiUYa2c7qNGvsua8eTtXqPhpvYxjjKYPrcRvvFM9siN3q",
  "key16": "3N3a6bzXiTP4T8kCPFJP3jQd6QiDWCvZmLYSBxLfpgyYwjctYVrsT3KqQBnxYcHBQ6hSr9fRfWomPpQdzQCsPfcJ",
  "key17": "61Zqo7JGgcT5woppEz9FRkrjSudAeawesn6XrXgEnNCxXwT7iB9KzkX1YoHkFaXK8gxendhZtf9CsXYFE7jDDKwJ",
  "key18": "xtRcszRfsziF64MRmQstvww6drSNpCDrFac5xvX3iqCyHfuHTLvSaThe4ghFy2b6oRC895qigk5D7CBihbK8VHc",
  "key19": "4AJNhW3A9X6MV6dmPG7eZYF6VsyDUCG8Kfr3ZVfg2orYFkJn5ySzBHXS3qzNdevViKB4UMNhSttNfdUoX95Hec9e",
  "key20": "61f6h27BiN6xSoJ6AuuAYwubtkKNtdrJQdZgg8EKoUWbR671nrRYmjrxSUA6upxtgG73y58cHZZJjRLKMfGCMCKg",
  "key21": "3WTJ8DykLLRgz743wd97pwo5Px3RMPfeqDUbonBo1QXaFN1CgwBBmyzB1sj13m5tZDVivCwPcs1APZqnUYM9CxSu",
  "key22": "4hy77wyV5YR7nrCtBVxA9vhBpSLrMQRfnHomosoSwWvvovQ1MnXyHPpGijESwJysiSYVhHoxJwenxMj742MJxY1j",
  "key23": "47Lx6LtyJYM5Ct9BKLwaMzr3JLESqp3TG328nwTBTBGCwprZKN8Koe7wPRsm4c8cXdRcQVhoXTusMm7hutvgfqra",
  "key24": "4ucLcpqwW6ViHTGMmTaJQFbvb4CdD4418jKdvCBGBQJh8oqdyRQuM1q8fuXZwkaMQRyWidyFxKFNyjdWJhQgmxGQ",
  "key25": "4TuzavGEunPJzrXoFWNaqewaPdsBp7DecSGM9eqvy8dseXHikd7QBytEDPv5wZLCPnQxQzPx7o4L2HptSE4Y8PX4",
  "key26": "2iiXzBkyX5PjQE9R7m88DekTnW8nUJSHY7K2ZNgVYvRqaSAFWmLHRfNYjbXzh3psp8ss6ajtnHc1hdi4QXHBEXkL",
  "key27": "3pvL828MhgTaZjweai4ZajzuHbnj2YEVRWUqZS1KWVdhTbP6r1Vo6DsH2mbm3aiFrTmK7fF7ymqbLif3iNh7bTPy",
  "key28": "5ooDKtGz95LDvi7yBkRubZgukS3Y5kGo4TY8sd9M6rm5AgvMtFxZaCKsyeptYCn5QrLg8eXdPcT2iwH61WDMuFs2",
  "key29": "5nwmrpvN1Gh5oWLDkymGBEfZu3uKMyF6hhodor6ZBAU4TZLczRAvwTB5tMnnxtreUVk838AgjEWRSRBW1HuQ8QwV",
  "key30": "3B27LaPJU9AMJGHRW5V4neC5BwZnh4PbQv8n57Be5UgnJYqmVkjcgNNz4Cp2K1x6jyxeEYCFAGs1LndGUqdfVq9v",
  "key31": "3V5KkmLM53myq99KZUUPjurYQ6wtAWhNnLW4xJv1MdKZjNn2PUdbYsAtBPWmxBQ7wYjhVKseAhq21ujtwiW1vivB",
  "key32": "5v5mweGTYz5r1vEbfQt6XTUEgGMhi1qheEW29e7SWZBhFazPkB2CH2UYnmX6nGquFthvHZUvroZQ42GE7qkCq7B3",
  "key33": "4cRv2rAC4Hwyu34nQzuqbXMmpxfoambCWg2jaxrcJuC7Jn6MSYvMLz1qEjvCHDr7Vz4FmnouH3wYsaXCfjYMULHd",
  "key34": "5dmeDV5BMRn8yMDNHif7fjX7Pi6NGVk7Hf97zwNMTbnVeuR5XerucCnpioRXuzdQ22jZ2mEa8j72x88BVFGTq3V6",
  "key35": "dGUbSCt8NNmhYpJP2Cw9LL9eFy4dZBa9z7xcgUd2VFiDhpfeH6Ggx7yn7NAJpRzDaNM8TzMXYYiGzo4S4KfMcy2",
  "key36": "5X5wg1SUKJMfDvqJxJ7atRQZk7LHMijxaqRMt4QkoLeSZDUXrN2zMyQdVS33yxe32nuiRpiUsyqtuRdcBYoeF9a1",
  "key37": "2rNMcGZWccMR3PbD2CW1ZA2t5GoXSAVFwibNaw3pcFyVMwyx6SuW7AJWdKg8XYem5skG8o4M9o3sayEbiJcULm67",
  "key38": "3PMrJ8fnKT9c6ViP9uB2WuBcedkzxJUigvEJUff9dBU8kpk7xPz1USQT73V4F114acAKm5exkxJ9zMAiSfsUerDQ",
  "key39": "61HyRXvQ8YAW4rDQxFLrDCW6ciMPZSGs76yL98XjF1avCj9BKfsLUb8nxnRL1fNSTH3HgZcELyroc3PDdPdeP3en",
  "key40": "aa4SgPzwjJqv7uNQPoNpYTBCZHrEfKw6AFQZLaFsWyNeXVPNAS9vzEU2GhqugPwypK7dZC5835vhQFzdbWvf941",
  "key41": "2mJiv7biDf9bYqLpef4MYPr7ohCefoY9Het75U7i9nFXyJ6C6ugN5CuH3akKMeJeFBrmHDATzNqiEhMZS356GkXG",
  "key42": "5BVHBU86vmUoSkDd1PDLEu1xGVFGQVR24PsftzXFDQKsvnx83K7rnUD7J6gkq57vbtNp5PrS9936435uuDMkjiHm"
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
