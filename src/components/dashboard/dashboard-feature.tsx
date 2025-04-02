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
    "2CAvBmubrrCHe5yqN7rWRrNL8HYseqBqGFLrFA9R7LsA2dh2ff8kqRP2uXBKKVqYWsC4ACJ1BMiv5NCtgkdfw9dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YnmkaJDxnifsPNC9FoVQ6oVQwnjVxzEyorvBo57cP1rx8MG6kTUJh812wm6f14AP6bRcN22yTaCGTdGQjFczJJ",
  "key1": "56fMQZqXY9ELMtC6NaPmdKY5FgtGSHkYeqKTEmwFYbieyNVDjZiBp4YmHf3j9kkZMht9Dvfh5q4Q1kcAdrnQG7mK",
  "key2": "XUKsLBtEWM675BCa6WJQmanCqE5mS2RB7XboCMbamREAMSZjFP1xK53Fvv27ikUC4W1BSFbtetycU6LL5T2jnrR",
  "key3": "3VcXketYY6gogdTxZLxtdugNazpiUcvsZkjRwqxAkGcJaJduQyXxmdbHo8dmmvVrZyq9HSUNH4kefsHZoj9r3ypq",
  "key4": "2wYQETF4iTNw2fE6JcxMBrBktj1xbapwkkfGjV9i1h2Ls9DSTHrgJV9GYU6uYSvWrCUAAjFbQJEwjFXhs8CYVr2T",
  "key5": "5FfWkZrpQukijNhH7qiP3yuUkTPw26GmkEcFL4ovqEduxkBD3Qybv6xmzwsuLgbbmEweCxeTCW2zseDHYyEm1pRE",
  "key6": "4AHKdxzjcEZLpxkqdiWaE4ktcsahqe55wP2My5MH3ePzFs1yoYzdUTt8TM848sctKct2m4rMchambTn8WB2UBioh",
  "key7": "cNZ4hgkJcn3kYdRjue11Av6xqZXKRwLiKV2CsSzX7JvqxoEDAUURr5s1qN3K1rVsDzg4W3gJE86frb97s1XptTG",
  "key8": "5Jv4B6LncuHK3eRsdozc9RQxUX3wZKjfVmuXJvu6YDzGvvBDiiZP1xLA7curbJUYADvPZkmCJZf3xhBk5vbk6trw",
  "key9": "2ffQQ332ogB5ryhKRHoegBoSjCKLLJzQoaGgvPa5ws4CJjgE9rA2f9BU6ABM97Bq5kuMoHPPpmPHhZ1WVsKAjMnG",
  "key10": "5zGvntB5cG2pBa6rW2qMfwrHt5NUL3zhXBa94oay3rNYGmpfXzHJV9bAXxaEfRGpQ6EU4ydtch1WPeC3c8D4uq9f",
  "key11": "58TsseARr6JPb5DfogfZMpA6s22kf5uKRnBb7gt6JFoMXtzJ3vgFtdGFX3C8qeSATkLYxNq8Z34Tg7FhUjD112ih",
  "key12": "4J981zS7PZx8K6fEhWYrNWiRwmM3nXurL1g31D8vzjdPAVakkhT7ytErvPSn2L7BkYZ2gPHtJKuCyAyE3LLcuXUQ",
  "key13": "2FxEy8D7CbsKH9ixdwmz6NK5oanHFbMDnKA7PuNV1Sk6MgB8Bh9cEEGL5vD5iz7Y5Q9pnYE5kf1Wy1vMq7YPdpkq",
  "key14": "4AfEHhmh4wbuxm8jTePEXKoSpfrRncV5zB4wE9afP6MHsVJ2cB4oLo9xg89y1sXgEMbYrZjs22pFM9cCYkrtFsEp",
  "key15": "jykTxdyJziZ9jwzdmeQaeZ9bg4zab6EkRkXoF9mm3caagrNAVqkudoPsBqTruQHSNkmLKpZBoZ2v4f9tYZpwYY4",
  "key16": "35DrTr3MfPHexHz55KXtT7wxP5MkcqHz5zqcS5Y4WNRkrei1srE2Etor3EkDTsrRpX5G3jFqKE1WGKpkb9jrZCM5",
  "key17": "51qckG1dbvkedwMUzTpRGcoXfesgSmefxbcwbruhswSBKEDGqMrGqvxnN5yhBym6FArapqepPdvMvjBbhxuKyxsJ",
  "key18": "4xmsH1Sb4tvzDi4oqBm3yHFrEEWPYq7XHaHXvwC5jqdUUwm8emuTm1GUguJ6fXMCaaxoEXJww3MsNXPXM1pREpDN",
  "key19": "38ddE2QK2oQQ6QAtRQp58Re7QC6UsJemR8XDVfjXx6rKR9iDmSz49oSdfrDbcAD43hSuyJTMuYnsYWjQTJpqM3yq",
  "key20": "3rZtx9YeLurYzG4Ene6bFwm5nKdbrwLgM641e1GRVkiFqnybY8V1iXX1RAihxCtXSLyfaFinxDzBz8LA6mGVpm58",
  "key21": "4HQ9Hc1HZNhfPKBH3J6yBFtLHYnZNQG7gmHsL1S5cHh6yhpPzuuTDKU3kEao1jZ5MJZJH1HGKXfQNHKa3cUDnyM2",
  "key22": "5958TgqA1MZAuLaP6tSjC9SHahxB9p1X2QfpdQkmXxoDbxQv6jkYzJd7qzDFUM21r1ozuHSXDZ3hmEQDdzMnTHh1",
  "key23": "5erkRQsqb4ChE5Kt1gLhjcbiHqBbwbbCwj3w2fxgoovsiAzTYDre4wemMTj9Nw4M1xezMZxZXqtMv6Khm1qefY39",
  "key24": "4M1trgjKKkSPET8ZFo7kKHaoFz9SHkdLSqFDyW9Tv9F8DsoAskABuRLXUNRFjZqjnq8cSH6Lbqot7xCZipDaNCRC",
  "key25": "2CMuhWUZVaXy4EvyXdaLjkuQtYb2fWibJ28AoZz2DXC6JabR7TEDvjQYH4aVMLuc28zfvoQRFqCg3UigL954LXeL",
  "key26": "1Lrp3FZoCJkPfGSE4NFZzpUTg5bWuEgnWD7YYKJzvfhwg4Z77udFsQ2U2LVDKDwgmNEGWKNLnxfGEWiY2MoM9bQ",
  "key27": "NjwFUpv2iotSw5SqNGofwtcrhHApidjV3tCHRGhMpzCQvGSYp1uuHSrqbUej8wGWJCHndBSSZKDPgN73pVQiLd4",
  "key28": "4s7osXPs7q23vQjZNqKUNq13YvQ8DbhJBkTwbNCnWAEtuASR1ReXbG474bLtaPMviCMQrQtPq22Us7vNaKMkQZdP",
  "key29": "5U5NvLv1rRMXXbjupuTMeQaijnNHtjpQhE7RvU9njf9f8upRAU9xVNNdkiVcNXKT1Q6xy7oDvZvwDBm42SjHUJkW",
  "key30": "5DRacR7Quwfd5yWFPJcNBazp56RFP6FcitcgjBNWBbc2AEvbHph3kE65NxnQEaR8Xo6dHxeVt1KgbNu3yGHRo5DX",
  "key31": "3y8B4DD8Xi1xYAh4vtqYoZ3HbvntL8XNAiaqp5VTKBp3ABBefbFFo3erBHvqpXu6P6G93XC1xKqLYEz65BywAYju",
  "key32": "3P74N4TpDJSZpbjR9usdr68epRwgaRTzK5M5t6nQ64rNCLuxMBuqRQNNTQvo4iS74fWL7xnaUnCAMCVW2zorSHjC",
  "key33": "3YC7WBk88aYoP3Z9hPUoQH9pqAhjMLoR7ecQMxLmHMEYyfXDgVWr5F4XG7JBtBZgd5tXjWU7dBmGvYHJvfNPq1Fq"
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
