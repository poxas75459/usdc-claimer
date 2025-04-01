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
    "2rhtj5azZaDfWJ1WdxVYrmRRmpKw35iRBJYEwBWqk3kbQtUFJnRMfGYDiJZGiJEfCZfoEGL2acYEKwuWzmccdtEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b8fGVuuX9XEATQSAddfH1vScgyZFBPvT2r6mP7BL4iQ3YyBxGGuAqTGpJtJ66bYo6HfbGg8Lu2keaTBzPfXkFXX",
  "key1": "3scGeSBunrzi7Ewp5zAdkKTDydF46wu4j3CmsRt7153N1nHHVcELVAZh9XAAXcoykK4npC165x3jPY7GDrH1wbaR",
  "key2": "44FFjZ6FaedZKTySRAnUR2YbNueDMoPYMw3rnBs2dwHvLnfcYsR8uzPzPFUTd8kPbSJQaNpbcov6fxz2PWMXJLeJ",
  "key3": "5ofEQVfMhVFXajERVSfTiJfN3asMoGES8VaWfgzPAygmF8ifAUEHhiKQbKcCBbrLo2UKXyLR393QbMQrmUkhDGCr",
  "key4": "3KGGFehQvxSJiofAZ3UacX1U83g9fpQr5mJH3hgfXnDkvvfn1pMSJacEfYp2sNVPzorUUBZjDkTrtvCy3AdRHv6b",
  "key5": "3EgbBZViX8DjPeboN5ibdzq4RGHdtnNjW1YbGoxP4gJ8BSPrE2RgGEZtkNpHifnY7mTtPGFYMEftwnGxv28tvcGr",
  "key6": "5f7iWnExCi84ro5TQcG1WRF4fST9c8a6pVVPt7eS7cmaXtTKChwMniHW5CnzQSmKJBGbMDdPj4uL6ciKfpEuYPnj",
  "key7": "5eay8U57LtRqTenXvZxoAhj7SjLCi1YF65fu7HXFcqzKv8quJfr1J4QsHKTc3PUzcxw5fFgd8mx6bH1bbB8Gj7xZ",
  "key8": "WeVLkhBqaBd5ky6cFXnXUGXP8GghC2qDV1sfWNdPg47mX5k2HafsYzcgQDwEfNgAbbDB455owHjH3uTnwzQkmNA",
  "key9": "4McX33W6pQDHbFiXBc5HKEabDHcLQNgp7NDQ6oCdhtL3T5BFZWhX2kTt1XLBerdUE6jWJ9Dgkrtq4B1SFmmqr21G",
  "key10": "5V1TTRS4jAjYw36xyhRmuRJ3XAAXNs3j6MSaj3NQYKhqYX4pSSgA5R9YcQjByQkKP5PGPNFtaLEZRZGR4WiVX3j4",
  "key11": "469D6ZK28x7bKYnMkQxNE5fTyBFWGX2GKe9FCTeJua5j6tLXUqEJs7ibykCMj9CkGdj16kRxuWjXYXbU7GAimVet",
  "key12": "4uBVCnvoFojGAaLarQ2ZmNZxam83WaJ28j1Tw5nT3QYbr4dXWKuaBU2adWDauetLs4NVUqxiPP6edMnJm6xnUvhS",
  "key13": "67do6jBH5vxHUnwF99js6xmNt1RvNiudcYHwXd1caeTBXeW6rL6CLgcdPQPDi8yT6iWgvLdhyHBWbk7y9J7TuZYB",
  "key14": "67RKaTcC3uQDBb1xSrVohJWFUBxdJbnRj3BqRyLjEDvLZxrqG3Aiy4zS2ZKRmJH5zoA7B2PsvhYjmnHZeBtciyoj",
  "key15": "62o6TZabM6teXQLqZP9pRn6gxWykeoaHtFbVJ59629bHpCzevngZZhbAQWbetNbSaStJjyP9h93jB46RV6TKK4yz",
  "key16": "2MJwRZvHQTbHVoPeaq3Kdcd3qiKdegwQwDvoesidx9RchdbAkZ7DSYV1LMY6iJ6HBVJg4j5NGoxP2wKyk1KwxqVg",
  "key17": "2LexY1Qzp5xWtnZpvGb5ZJKuSzYiah7WXhGKV2BcWgXgdoNV2oGti51TgD61sHXbCBaCnSXLeLTq3SxrFBWk6D1i",
  "key18": "3J4aKjHUqEJt8p8tEYLrbAGEwkLr6tGjJVomQ76rz4NaWr4VzUVqBGyANvVZrKCGpw78waikqyG2EjKHH6tynoS6",
  "key19": "Sx4ZgAsdiDdKrGANaJhZQPw1So9jq99FAe2G34gRMmBpC7GG4Rd49bbAuQhM1nUDyXb9ZRgmVZ6v4G6Bb3NZ5bW",
  "key20": "3SzqoVsKDUT1YoppcvX5TNPM7EGcb49r9E8TENPXQHTK9gTDyESFabj64juAQNAD1TE1hJT4Td43mBCpvBDp6t1N",
  "key21": "sussARvPHYfnjFE7ggpys7fTk8eyJrc8PXf31N9oKMGuZiY4gtkpyoFcFW3GRPbQk4bKLzAap3gxx2AvPBCKS5M",
  "key22": "5LTZ3G8NAXeDk9kWnPxDGxubrUihMCXxFGsnXqcYYnHVwXtpRSutLWjJSUSwq7Gf6n1ELhaVJtRHKqKgi8p2oHeQ",
  "key23": "4EC5gWyWEmRjiE1dch2gJGbkA9ZV8ih2YoM3sns5Recu4KoHwYrB798v7RLMpqZzGFH2S8gz98YUWtAiCN9kJjQo",
  "key24": "m31z7PDM2akodv4C3xmoHjvqkm3K5qQb3nLxuabz8ZWs5xpSUsfjk8okRjzdNRHkpEwEYuKLXKGYz9anWxUZwDk",
  "key25": "23eMfC61BLY34Prw7Kg4yyWnFvfuqaZhHA33NnCAy46YXFurLsiabF7x6J1JjhrwRnENMNCPEDpmQseehYELApvB",
  "key26": "4MRomRrbpqtemS8CJVPUWZUUvhnL5mga8kSKRgYeVosiJxha6sKB9H4N3nJWkEzqTEH169jgHQ9Ykx26YPAqy7Mv",
  "key27": "LsbG7qnt4KT3HgJQT2WH4GasypXqiRfzuUVqneqU5afbYwYYP5dabRr7ETLdfAgYz2QGRXqQucvtbS6YK9GKfX8",
  "key28": "yZsLqAtXG6PJZqmEr8shiEwLnyTgHY3Hqo1bLQ83Sf9jEXDB8tr5i6zsyn8QFdfEZKgBg9GpWB3WwRLyPk2yHV1",
  "key29": "NuUHQk1RTrVfxEd7vq6rs2T8orfbYJtkn8wYS8ft34YmqyKtTthFNPmwz2egnctGzLvZFvC5YigacLojtHcCpQe",
  "key30": "3DBRZtCpYJyF7buU5qcPUadPMQNgPATbj4y75bQnqCkv5wRg3bVjvxA4RftZm9fHPxigHFqLQ77uLX8ti8ZtX3jb",
  "key31": "5PvNfSvcU2Uzz79hgFTLKPdayx86PW23yiyTcJSsd8GSHQwummiphZYDJijhgVU7mgprDBh997aiHmK4qSGLVzur"
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
