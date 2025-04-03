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
    "5YFWP1h77QwprZh9wBQ8hEZEdsaZXxShXcd2gGPwuGN3QbFzkrZuubPoZo8bgfin4pfETMWxiMqhmizegwCzzbm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294aowtCjPL8RLeMsFZ2diXgdv5N1oxUnydGkExhBbeh3J8RmkpGEgJneebk4sqi9GUECN51DutEQRH9tFBWKQbg",
  "key1": "3kcyBGUFef9qdySZB1ngC8Gqb7yaByURyE6Qu2VXtgJnJFThH4cXYW6uBpe1tEebxQWjMrktUA8inVvpyP1DbkKu",
  "key2": "9sEoT4MnyLEoZaSNye7CJoQXkwUeq7ygNMVR6MckN2E4GykjfPFiiZYdEaAXYewTgpz9QFXS5txH3fxmZyhiw4N",
  "key3": "4gpJH1sPnZuEkRQazYtoFriaJjGRvULCJpzoTxYfNiSLWd8TXM6K91UAk14DWZzHDgwABCacFzti7tCJnjJY79EG",
  "key4": "5Kg5Fdc633egJ2kXYojgHvp9cCXbv6VwCBYbtoYhGJcg749cX6FmEqgqKCRGVjnrBeSiRk4Rk37wSxM5ThVWMfkn",
  "key5": "3Y9gXaUbMmpFJLpa7HacThsRDvVTPASV4NQRhH12nzaibvRb41YUXYtAbvktjaymcNNwUFov51WCSMVjywFcqcJ9",
  "key6": "2edV6Tj7kiS481Bd5Hnq43ysaaY1XhAsQD8BYn6QGd4M7ZVNRMpfTRpJWYPUCeTJexpgga4oZkEHgT1B1y7kekq1",
  "key7": "k6vFsZ4t7UE2V9eEpxFr8NxQik6c12aV2UXiRCGHkdo8k5xA471HhXKSJoPvvwZCWPQ4NdquxTdRskD5DwTh1Vj",
  "key8": "56834k87FYLjasRv41T3cwwZ5JGzX8F83FQWQpyDnEBWQjJYrRz3HvkBxe2XYs9H8HKd8KHUHeLnGUr3G6TMdTPU",
  "key9": "24sJ6mrcJ6Q7gshtfRjvAJPDwPye66pGTqduXbXZqSG4h4vyibcFFvTBP8FFnKd2D3gHtEkErMbLWeXCdhDPrTDp",
  "key10": "55db2ghwYwfHfFXPQ7Unwfng3XKDt1A1QmCKYWw2Ku4TbejwezDZdY3VLcWiuDqVwGyVv2h3yybD4TRzgwXDtXj1",
  "key11": "bwczkUESpbWqdCE3hT1vQBzSeJzGKK3swB1Pv92CSFgrJqxg4RKpK3t53MFS51KMd9iWBWcVpAUCFfh1Y1kzTUq",
  "key12": "3yLVLWhrzzgAay7hmpx3p6Y4Tx7ry9cHibR1aFrVkk5n12LN8oXygavYmvJASXdepZbNP8arb2E7yDq4rcxGnT6v",
  "key13": "rxoA8szHGTXTGqjx2o2iyHy1RwLKKTLjdRnXohASBYeg8AUfVxTKcLQYZ74C8X2ZH6ucoKDBzHcCmquD1zr8gxV",
  "key14": "42AQzYw2eedrqCQEa8iBWNJZB3fK1ZQ45XjwjGZWqfBjoc3LQE1ogMPNWyAcGdpoqUPCMHeLmJhspcFd7n75FkJv",
  "key15": "5UosQy544Sdsa9eWyTFDp938BJz3K2V67YpFZDYc81DeLjL7EZ4tjkEx78hPxU6EVvAh8z3JDPk3uJcaXu7bn72L",
  "key16": "4kkaHuYcxs6ARBLu7cYbhBKgc8L5VKP1wmiSkLLpSj3B3yGxEcMMuotgSDUTsmFc4kLbwEhD7qwjKTYE3RzDAkPH",
  "key17": "2LeYdB3wZUY3rrSNU6F2tvQDJ9DaYZ6uemmLxbUWUeLn6KW7rLcMgPAmJjMPchrd8CbhGw2kYpVqQtMDejmhshC6",
  "key18": "2Sw6khgKvha739WbaJ3Tgzn7vM4vj7H1BMRKntgvZu6wnRjvMKSM1kNJvLbngj6Rxh4atc96JFM27zYkB4RkKm3j",
  "key19": "2dggccDrXa7YQScPa2EySZEwnjYvAfhPNrDAJB9Bc3SbhxVUpwkxk9MjTiYtkMFEoMWW84JBJ4rCE6tMFfyjaNFk",
  "key20": "Tz2Hg8sDFpX6JAVJJFyZs8nf2xTcVvJ5wnLpKdnxqoocCWhg6fqySF3B8TNvT5oXuzPm6YsXSantyHVETVwiYYK",
  "key21": "3XZxgn8yN4dFnPr8Z6j1DJvU9Wsrg1cRaJ63wAgfymd2EKtfcpuZKN33HtyoR2dN6s7cKqUuZFbHK6SKe7AcpQFh",
  "key22": "4k1gg8smURWB5VndeA4FtbYicVcsD294tcWNMXM6kmM9KT2gGkSRBuzvRrbVzmWWzQ5ypi1vXmQRxxtQovFfhBUz",
  "key23": "3JPoJNkeyLCXt17LZKHferWWems4CAC9JdWdFm5Qcj4pTw5Foaaf4bUGUUJJNQUfGdcq5ixfXSxtkwMCkEoxz8oH",
  "key24": "5ByXDYPRpHikYCwSRfnbos2YcQhatqVr1P6YLTZgHFiguoaS6woRdC2dW2kJ4DrZEGwRQ6ViPmRHSm1qVyvPRNfF",
  "key25": "4tMcZKMps6GQXx7gqf1ATPDjRs4LdrjDHeeXNcCveQ6xDs4oxoxy5uNouKtSSHJk7kZk61pnsatVcvUDJhUDA3iv",
  "key26": "5EAhKXdMrJZfX5mQhGBbHCfMLnWqLcGtwnSJxxD9YFH7q3qd44c5sQJKpPzZ3TQNbcGB6HYgQBMv14CCEL3boeiR",
  "key27": "4kBu6ziDwzzSfTpZZvNgLL5EDojUBLwNg2jscFbVPy16D21JTop1aDDeEuhxf5qqpwYJnY6BWPRNHhonBdGmmQA8",
  "key28": "45aXP9e2jmZpndKTpX2roZJAbF7S4tynb6DUcciWphWdExTBwAtmr9ucrM1evGAkAstm8s38Uy1FHbCs8MWok9vL",
  "key29": "3FRr9sthBdXvCo85iq3UWZNQkgcnJgoTuxxwuPYLpsa8tX7YBSLKochPYJMi9xq8MiX1zPArWcDbn4EdpvYYHbrX",
  "key30": "RWUbrKVwiGHfnyAHDkvDfea7SrDv7n6ejgQa3doQNtXbkm53kKyWUeNvf6vzxpBB8JqEnmxYeNEGBCuGM63e9yv",
  "key31": "5mRjKtqwsZGXrng3VEtUdB28Y4zAQJyXTZY1PWRY44dKKMR8BwsMMCAsytBQYKx7z96Dcq8DnPV87zULN9F6Lzk6"
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
