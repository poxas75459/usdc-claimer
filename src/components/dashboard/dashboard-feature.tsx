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
    "MhQmHihyu1oQ8h2Ts3fdFU2ftfnL1wdtbK8H4qPFkdPu8AMdAkTSGj4omuU3HCderxnfjCHRtPux9ftFkFqUEue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44kYr8WwtRLUcv6em3YmacobRuZ2yzbGMqegcjPyde4edoGyaTb7V2XDh2bFz4n5ViVv8T85r3KSLPvgWSfz2QtP",
  "key1": "KSZC9GubPdrrWAcQkyte6xt5yrUzhMNKewh7M3rXxi9oPhYQnPXbeVe1XUg646LmP5sTcXgm5Teo3xhtAr7aHMT",
  "key2": "5EbfG3dkCdeGok88FswkEddKAWeoATyLUpyXEXG3BR4gEiWQXgVifPcWAAASzLkSx7bYX4YifcjvqHtqTVu9Zayo",
  "key3": "3LU9Ha4CPxPniBRU95Mi39D5qsHjq4XD8qm9Wd2RLoN3MTKBCucqmWVARLmuBydP6yfpYQV87ETPZEMyMXjezW9M",
  "key4": "KLtYft8K1m53ZwMx5Yr1rbAp3TVQScA5mpCRc2dpxKV3D2VTgTb53Wy3yPjz2KQoEWbGMZzDPBTYVx2d6s3a61w",
  "key5": "3hzYdZYWNBqkJqVDwgtMaPfrCiS35DYBcoqSDdK2mMQkaTugiiHGArajgaJ2yiFwVJsxmpQ93PtajYmWRBGvetQP",
  "key6": "4ohTXtussaZvCBz2RDHGpGbcUNHNMMaonGiNDjAeeUTtUWPjQRgRYvz4S6QrstqPemNUGVbftHyVsfkzAdTv7ArM",
  "key7": "42Xo1Ex1JdaBsZMxNVrgCdDukKPtCtYmSLxaY1Hr5voDLzARTbDTi9sP2djaBNbDrw2E3yMSeY4e3HrbPN5vhoAB",
  "key8": "2Hox7gF8tX7rZSwbbWH7CZFbwKG5tT71PKcTefmgJqFW99M9NgCjoCx7GmH93SPNuk9pZuMth3RCixTheCttM9Mx",
  "key9": "2wb3ZhXeYZTVcR9j7P6zGwgtNx6SoZ2C3UzEWhhcgXBqLdMbqY3fYNsWymYdiCUEdeonEZSt2BTKZQopADfgNqxj",
  "key10": "5dFeu8wAMUATvGqpDpDjbYRPNby8R6GkSartc1CVZ3SxPmp98tfhYVc22Xg2CiS9hxBW1jTxuotUQmpp7WYe4YLz",
  "key11": "3HCcSYiAwB8FrYapA3QZaQD1gRSSmA1RTVQPTs7oRx2SnfBbAFk7mKFpNBcsh2ADsd584dWs9J5KzFAGQADiGbBQ",
  "key12": "3Y2eKaJ1gETJbXZP2vHa8zURPyeZ8K6DAUuUJ67ExcMFUydCiNygoS2Zni3RUycbaGPSzJGFXhE8MokosywXA55R",
  "key13": "5xth9Qqp9k4oK4naz1CKyWA8d4SZoAjuuNjTfyQGQQHZh2Y5xiryoJhvSf7zmSq2Hhxag8XVfoEn5YwkWtWNaw2G",
  "key14": "4rozwAZaX5RxYf71nfErHUcSLvqzPRyjKJBBrgmQDvemZqk6s9wba2uQdQdE631VknQqL9t5kNizN8w5FHo7UGUA",
  "key15": "5kyJK9Q5tLybD7x9wV5bToBkENGZ1v3cazukDPJ7R7T8kxdwYCEh1XHQLjuJYue3Ve9WmTKfzHrzQqSk1jQhr2Y4",
  "key16": "38w1tgM86De44nzjtiqHuoQ4NrcqUn8XcmZ2eRob9nHGPHXMSNzZijEWPHFoj3vP61Pess6Fp28QzrRzxGXWp87f",
  "key17": "2xZruGeYHGgrr7t5CHr2oGezeDZvsfBZqYNhCr6n8oJhtxNn2rF5PDmMb2jPHZLjZoGJrwXXmUS9i6infphZsrXN",
  "key18": "3sPb4wY6dDczhirzf1K1RjY369xcfTdso7SMXrXd7bP3bpYTvgJktXA8FCY5opUPYH6Siy4kwAQiSUoSCLSgxeCj",
  "key19": "4bsum98GmCYGutDAX7964HJ7Sb8iefxcCjEoouBw2iSSCp7dnAvLWpdwZomM3FUbf7Fotr8UK6ehQzDz9QKqjknb",
  "key20": "Gh3esKGbNgKfwSiUidhsa7ffcH1hqagc139Ym338GLSQEoHkRQaaJqV5WrR1ndGpW8oPjD3toTauUjjKkx3HvAy",
  "key21": "4LhHBVZ5hJUxSKno7WcU89g3TMYMXaYuvfGgPjWfV6BSqzA32wBS59VkxiTj2zUqe4z9kxAkUFtkJVzmQV8qBDik",
  "key22": "2ubVWNhE7o12cCqDByz8o5LvZxdXeeiivyB8ApZ2pDKqV6f1hPPwDJS2JYANehwuTE1Kbr2gfszB6pStUXjp7C1J",
  "key23": "4EoXusjzFQRPeZmQ7oTvHXN7wu88WwHTTrLUcC2Twk1pB5hVusL9gDANhQLiwdJEhGbAT2RycYtds8S9C11hf4oM",
  "key24": "4mcTtLtPtkp3SQfXCqQSrQ3Q3ZjZ3UF7aZ6sQLBua9YNxSQvXjFbxBqTjixQqCqEyXYSsn6UxGB3pDASAacxHZvi",
  "key25": "3cZX2yDLMffAHbqrSa3GPDwkVjRPUGaVs5cxvjoF758Nu283RUfnbf7KVhghSwGvwtnxQtJKoozuEL3qi4aukaoR",
  "key26": "5LEG5bK2wZ6W6CQ3Tsqh322G3uwVBXmTvtUNxHPduubiCNmT3G4JWFZHWYwoJLYxSMy9ocZm73VQ1BXMi17uPtdM",
  "key27": "5txTZg7CQxZshi7oYnoX5K6Tg5Xkckmjqv8pNXPBi718NBZCNNRhrERKnHg6gixhD1BhrPhkuzAEQcFD3VthR8BC",
  "key28": "2ZSNYAV7xnk9AXxXqe6pkELe4cnccDzrFFukTHBbzFzEGTK3qH95mQRhDpubaH7jPUb3uEtJhESRPAfpXo6XeazR",
  "key29": "q9f4vyuspukvk7a5tMNyH6JQwNBik6paNDdnZksfiaLNjcHanKUsMNZxmWVG9xhH9diyXSG7SwAJUSbhKW45kgi",
  "key30": "4Yc7r9xkxXYALvy7Cm1SJT4kC8as1nVoo41cfdHfyj6caBrYZKnC7aGGQdnRMiGYWtdWs7Rg7fcRiWJqvzoJXvQr",
  "key31": "5o13Wb4CQTTpi3PPWWHiooujYGeucCvM1fZWmUFVVhvrzp4BudHvSSxEyZnxE76oogkJxWTBT1WhvunWUULek2uv",
  "key32": "3rJsW1se4VwSDcxf2Ge558yn1e3cen2TV8ho5TV9vf755NeH3YtpuYaPUgiAYZc9n2XK5dGHiZxkS1E11aKvHB4y",
  "key33": "4qxEvkZhgHrQnCWgby6WD7mWha7H2XCC3YPeffgJwgpTWjrZM3qGPYscuYfmocnuMgf1eMFs2YfgQcYF4EkSYwSp",
  "key34": "29xrNnbpFTgdoE41Sda4NwcxiYaGz6rbVptH6JXcqYFAmp79sS7qyBQHbykP8H1fGRiJbsUoBVZ1bMr4Azwoayzd",
  "key35": "3Fbb3b6XqUZkHQZQzSpwsJziL9RjuuYTV3rUNVTw7XDT7azD5UFfY8v1AYcgvqRrVcbZV8mP8cLtZwS3GzvmqexA",
  "key36": "2eifVQH4aQS38eQvyJuuXvxbsbKddDTRmRsbbGLMWMP115T24FCyXx5rwNreVckUXjN3BYMvrMaaRbuCaiwQ5dCb"
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
