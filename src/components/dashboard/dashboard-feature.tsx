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
    "5xH2hgQBCGvScoud4nDQXvgYn4Ytwy6P1CPBydmf1mj69tFyRXNc6BzyvFGCWu7Bc6HFz8TtVeenESjwi9oumHWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPT3ZHcyYTxWRdfWQfgLksPu1aUootuL42LeR6RPbqT1fH6zRVn745CH1sEyFWokePEZou1sft32DPhzpKQG5jt",
  "key1": "23czHNUYd5yDbsusSkkUAsKjXeqdMwyBrWyhNeDAK1zkgGHo7VsW7tVgzZdegf33yvTAyp6UzHHNiLhyhjdSoYRB",
  "key2": "2SZT2mSnoyVJiSvAz14XtG5CVMXhTKLkoBzSGvgKUPpAj37u7aEVihTYCo8ibAEFPukkyBs2rexVeKPTRWHxEjBy",
  "key3": "4sLNmsdbTTZ9gXSLAEgRuUXu5k1wv5vNatVSc91AEt4pFK9WbjDAn8ibu6A4p8xJZS1z1Fqbj8qyE5YYQHebLqiX",
  "key4": "5pcmJ8f4UJ44oqjTDQjXAc38Li3ST6vr9hWGYyS7StxyFUowrHJsmqqwBw8a124SY2jU7eyPr8Zz18riW2ngDhJY",
  "key5": "5Ss1UtscMuXkrSKXMyMTRKBUHvYykcSjHC8r6cGKWjj3re2m4AZK2JJedQFhXQdH6Ydie2oDJ991VGUxEFBKdxe9",
  "key6": "3QMybRzdSqwU93WwLChaVZZhw4L9c8CRKMG9ynSdq7zwKQAWNrT398c1Fp5CE6j4z9HMJpEYhbyX9ESyt4W2DiuL",
  "key7": "42341nwbjvAUhErAyQk1Vmwmkd9KvukxsWQNtDithXVhiptcFWfvQfG9YSY3Soi9hWvnMmGiDPYki8L1ckud27rD",
  "key8": "3dUcsi8dpUdqzMS1G9bvsjnbwFAfmVjLjp7Db8QxPmFFvTm5E7qmQLB8FkivzoNjVZfhZBHYaUADY3oPw9o8zSj1",
  "key9": "3zPNustFMXzvtaNNkMTFFNrqgfG3uf2Lfvm4Z9NWgL8NJcXZKzExvER3vhU1Kx99U6PyaxSWEQWmXkBRgYH6qkY8",
  "key10": "3TVPDvxfdBMCriwxA3u8RpTJBfc1N8si1tNFFPR16no28zra8BRhMxHnZEp8XWETfTioZrmXVYZgB5FKir22J34y",
  "key11": "4g8QbiozibeNWF9fY4EHQUhQFNyAT7c8tAs5Bp8y5eZCd8QnJTX2TQM45rXdEUiz419LcmsuWQ4unSej7MnEpBA9",
  "key12": "5BQti8myqxGk7nKoZgWr91KBrDLebh9uPwfnDtsjvqPXZbfwKai1Je66nb8c1mA7d1ECN3HLRKSoxypUrsjYh9Fd",
  "key13": "bsnd692p4vyQZXL9DUTYmeTtoCLTwchoxDCcd1WtTycBmcHdppxSUZuXWm8MnxmYvRG3fLVm7sMXGDueRUbzHeY",
  "key14": "4wcZSPkQnhVPJjYti2Ckse6XZreAwwLLEfDSusaPwDa1QVpNDpigjLzJrNTgid5qXHtoYu44qp1PnvVzyUP9t9wV",
  "key15": "4gCJhrsye2YGteXYXfDsWWHBbL6DB9WCCBcccouweVRj4B4J5jnSTDdjKdMq5rQmZiUuRXYjaXLrHLo51kgw4tSX",
  "key16": "37QUDrEEcWmfrTRbBM1rjaaMrTLu7xdR57r2MTEpv7Q57k7rSTFRrimv8zZpE9T89niSWz5G3TXsn18SU2QE9MYq",
  "key17": "4vGGCyNuVDn4LrMg1xh5spLUUbX1qKByo3ftRRoXC2P8wrXb6FUmu5fEx8VRxQEXme8Qqhrhb5ajLPwixYEfMj6V",
  "key18": "5m8vXbMKjTbK7wUsPj46dodjzAmzttbyYL1zA7GsrHY9aKaoP1BWgqXQJTSPFwcQ7o54AdJyNbHsp44k3RW6pd1Q",
  "key19": "3No6bK5uz1z8QgiTzT1aSsHZ6Knq4P6FQ8QevKo1Fncg3qu68ss9EKLSxZmRWivZdES6uKKN45Czc1ShM1thnxLR",
  "key20": "26NZLAmByTkWNGrCfU9k2SSjZLg447EDniK75gC6VqPa6r5yrwdREVK2MWhYYeSp7mtXLo4TX4z7ZXEWG1X2ANvK",
  "key21": "3ZRf8o2jV2dyHMtdkGKfLiw2HbGf9h4xpJYqHyowpgPb9pSWp6kuqiTR3ggsNArvqPb1WWYsiBaXeYE8v3ovND5V",
  "key22": "he22AgjHAHLYNYgXDgfAKkzZ1HHp9YfDuKYzwZqzFBimxZJohbtM5ha2QsaCRzFYZXFUE38r2upjevJTTgvYSrP",
  "key23": "5w5B7am5G6LjVoLoY4A8wSKeptK1iZ9MwZbvZs4xWWKVCFuZU8it3Du4EqmKvTc1cRhXrGnrrPHF8xqzsLR7fAyi",
  "key24": "4xgnRp619ZHz4SJiMsEnXjsEmzRGnfpQ2vwoQa3LTgu2bkY6Hdh9k4HodgEuNRHVcMNHtMhZbFgGcbvtKr8C7okP",
  "key25": "PQZ9fTjKnb2SDPsLPo4foXYSBfbGrRKRTiSXsPrjDPMhistnoYN9S1otKQzxa3N15oRRcYCmWvbqNCVr3hC8GLF",
  "key26": "5hF6173ALyND6N1DDHagSJpxzNL4Q1gFURiX7iJiMXAARj9VpCzyokRnNeKhWzEvdBXQd9vvUCjRuNuvxAuQYKam",
  "key27": "YLvvRHzAhAWu1wwcNQsCSQQBhnsXitbsG1GjZAohT4nsJZVKSAaE2EX4vS1KFdZvhW9mdAkQYHbb5Nss5n3NCTG",
  "key28": "2T6rWTFzHZJ11g7zFKfbyLqhgD6pnNjiXXdP7sgotf4jfefKmzn43RApatHEM4kDL4NNnyCwscgnPqkTZMbFarEj",
  "key29": "5nJ3LNLUFNgQ2hvuLVuZTFqz5CDemWR4q3twjDNf3nNDRC8uRFywoDjuq9TkEzLdg6FzVfN65y1Ex8mVC2VA54sX",
  "key30": "61b4G3CFVFpPDswH7JPdhzQ3ut7yVkZyyMtZ3izhkhEdtB3AVY2AJGhABt4MpsVTsMcX5EP8UMHVvX1H91nXoxt3",
  "key31": "3S94dtbPhxvL5xph4GiRb4TdYffVHoTH2yXNdk2UfsacYSs4egPCzyzTiUBP7vznkWcEomscBD4tVRHncTsT7RSp",
  "key32": "64aEAbkMfJaLYJXL2BMPQhk61nsLukjGmaNktRzrqfgXrDVPMQmWfZb5QmG38Uy8LqHWrS6wXhc3fimRvpMUJTQu",
  "key33": "J56wd9YoKvW5DLWF2wSZMCRAFkqBoXhynDx6aYcGNR7uQsFA72NwHLFfwaxuxfUteqFsGBaxRX33aC9BYnwVtDT",
  "key34": "5XrFHc3sJq3yVVCU1JaZn227QXWUzFfsDMSRggSFuYgdh3dRez1wgrsFFkEjjk2pCerLajdVw4S6qzB9gAkM9bRT",
  "key35": "2CrCUtyPpWQizbETPyco3to1VnM81itv1bLjNkv6V11T4aZjJCXx2NwPsuSWTqhk15fE7jipWDSsmWr9yZSfAabW",
  "key36": "3dF8LzDLoxYGPC3QRykddC868KQfzm7YYuM1wKfGnXME7cQYRFAacevE5VZ5BLKdq4zUVZ3s2H49aru5a5uTStMq"
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
