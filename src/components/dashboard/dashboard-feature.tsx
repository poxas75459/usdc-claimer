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
    "6VS7EahNiuWqff5d3jytEjgAGfco91oAAgU3LUXZHzSSgscFTggqrc5GGdzEbvNAEaorjz94NdrkRJTuFerpVxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YppWn1txJgnkjqffUwDNXN29gR9i3MzvVgVuQHKMCHwPAfqUV8bdL8jTEfgGEDrqg8r8LiyT1fDUjZPF27FJUWU",
  "key1": "4p7FGKEV3iRQty4bmSDMezbUTe6PbZvfbt6wHMEEGZpw1N6gF7cqdCjwc9BBL5zm5xv1vt2o4D4WPuQM1AJ9F2NM",
  "key2": "35MWcTuvEPFdyGzJcDQwgmmiAvVLRmTNmi6P1EDk7EDbxAAcHoj6wtykZybnnXFHiYLejNZkp9vpUefnhGGY2DTZ",
  "key3": "39JnuAxL964KWAUUNZcJ4qwXnLWS2R4CgeY9A183oU213YFtPhpwwwkJGo3rAC2t3o5DnLbgqcwSsZboCCrcBqMD",
  "key4": "E1n7ibypJZiVCt9uYp8mwunVwiH6AQhowEGaUaXLBpYSfKy7Tw6xWeG1mzQ9VhQ2itB1KMnRJgtefRptARiDanC",
  "key5": "2FBGCLj9jVYDio8iWvfw5sBZbH9xCVduuB2DTNGXwce1eD3ey8reaqMCZyVXCV46eAxwa1qUsoyxjQLFk3cjWmQ5",
  "key6": "5pMi3o9Shnj11C4uoNnRkiiQ3JwG6Sam8JTVRi8vPHPy5Z6kQoSvH3RXfyDf2TCqyyeKxxEx73nRXZGZCjTZaQZc",
  "key7": "fhyT1XjWmqdg8e7cEZiEWJ4crCntnZuQDL4uvYbQ72LEVzX3TGpJiogoXiBB7aUaj23fmTKXZyhuqTC3qRCNj2s",
  "key8": "3myRvo5TbNEndrRR6tpVNsmNnxXgJHeb4qWVodZh55E9a9ceYagfqRsWqtSH6w3LATaox78yu4fzqqgkTdTsfTV2",
  "key9": "4tC5LHP85kJgM7mxa1qzuPJeYy756AtR6aL9bms5shnJGp8mGD8pBvenav56ML7qFEQaadvxwB5xS74bwqUTT8af",
  "key10": "4Jqqp2ceCUgvNYfv2R7hndxMDtD8vsezEEMmu2dPRdzbcJ3Z4ANZZYUmSJ8rdT58yF8Ua9C3ZKSwMX7potnu1aUA",
  "key11": "2JVZoHh8GxtKwq7tLkjNoL6V1GGDDLMqGfk3JfPboYFTpQ8rCQCxuLwCFkERah1PRMCJi64ULfs2D9RdHvSzEGoU",
  "key12": "2DzqpmophgVgvrt8wzu5CPnLttKpAUqPqJikbpeWuppBJsqc3s5qZ27XJhhG4zErHpEhHWVZRJ8S1J9WeW6by7iR",
  "key13": "zgrQAsFikQeH1DsTEHnpLL94FGmofBtRvAZKtADgfQCWXWbKo8CytKKq8dXS198opA3ZCZqv11s6ne67VwouPeP",
  "key14": "gpcmafNJ7LB8X4FA6orXhV2stiP14BF4kCQtDUN9xgQrkKw84YNUWBThGAmkXktyWrZJ5gK5j5yYKRHVbYD72or",
  "key15": "3EqoH1Wdt8wNNX1MxzTnrzjM5KPGKy7qPA5nXTRjsZ5kt2hby2DBwWSwLzj9GEVCiLEKrREZJoX5ce7kwEbBCruG",
  "key16": "5Sm9bR4JVe7ejjtzdDMjhXr4zpZKCw3qZmgQ4sdQ9wDx4vdESjU8nn6eh5cRGRCZ2KcfWfmfsUDkhTbtqCBsmWj5",
  "key17": "4UTDpDwf1yFXCG73JAY953nuJKKZMZQokexw2pZXtRUn5AWWN4VEjMNr4anhc4vWge6fQJAEYRA6dJwm625jegKG",
  "key18": "24Y4PkSAEooxS3NftGquPSjqPuCwVwUAdWJZgA1r9jgb7t49W98C2YH1MiVovQYpXXzBEn7ve8ZV8bXevwBAKxi5",
  "key19": "GbLQ2NJ5QEKYJbcJcDaN1g6VZ14ad5XesMuT9HobmhZA3jtRHRrWvijWnFkWCatcvv8FQjN1pDNoiXFobuC8g7E",
  "key20": "5p9WnLjnxxHkkETRYhhU6CYFWMcWVPXoUpg3HmzWRwW695Dety2j4dzwKinixrAMhoURYvSBttGxfGTW5rXZhx6z",
  "key21": "43gTH5AWXWrsxSaaQeWWoQ1h1MbGxcVk3PJ72qiUPkqzqiNfKmrz3n37Y3gJ1xFH55mhaY7nBqTcSuU1sf1NNwKg",
  "key22": "27JkKNjtXuRaiorCmL2Qb5ZCeofFV5HNoWWc3nJWv8ro5MydLT3JTn2wjXzp6qegrYDD5GpHWtsRigMVFy7GKUB2",
  "key23": "32dmwYtmZ27KpLaQ7igng7qXBKn2GcVQSpRuFbAHoA6Er1tANXHFjTuWmJz33YMixjejgjAQ2Aprm2aPEyjd6R9C",
  "key24": "4SV7PuFQTjV4vPD6KcZYWtfUWJQyyvBoMk4zwbZcHjBRsNGzCf5SchhuArFUHMsnJD8vUHgdaQXVLn5LDyjXNo4m",
  "key25": "28kWgeLRkvJJYfWdkML8aUkDYnuUn2WAUXqZGnLgiZJDm2oS3vjAtJHqrmL2gv4oFzJYEbEM1Jc6sWupCAZPJ8Hv",
  "key26": "47waiG5FZDXgkhZRxVxJMu2fApxjsE8WwfVbw4emTvyXbrTaAXdVXboH9LkWpApPYTB7Xdzv1D1srh6yWeDjYmYC",
  "key27": "2p9tZ4t2sWS2DhRrPmzZAdJXFYAX1cJnFFVKoS6Zu7donVC4358FHUCvUVL9cZsHSygb6qGaTDCjfV1M3uQzkZd",
  "key28": "3qUgtiUVZ5h7DM74xvVzhoBuAQ9fM4x5ngdQREBG8zqZoNkGi1ntEiThYc8PGadT38ZFRuChJcviJphXVYuQzcP2",
  "key29": "4EQDyCCcxgvaFs7qKVxDA8UkCWhQLwAUKuC1S3YgrhDA94wHMeRvsDsiTC7AbhBAu92GTQcFSBag9FkFVZjnCJLU",
  "key30": "2gAy2EcmSvZW8rzqFGpHCWzAaVXuwf5FJ5qx8rv9g9PLf5t78o91t5tbLx5ELPt5Sgn7jthtYqPCnDVkiap6JwtW",
  "key31": "3XESsnUBbi3hXkYCepA4CSNUgfz8PBykWBp9zF67uYPGrSENfbCy4o2qb97VFjryE1d82K43PwUBV7GxwYEMw2E5",
  "key32": "5LWwtRF2GGtobd2XcD8c46q2LmHrMDgaar4SEvg1n1iYXUAKEL4s75mNfJZ637MaZJEwxq2VVQesvyLo8QscEyda",
  "key33": "52xK7js2A4pV6eEpKWhdpuq6ypERJYGexJv6dBpDewBMPrqHKMsTHAQ5e3T4fTb8YHA2RDDSwkUeFMUiC6z4w8t5",
  "key34": "JuT4ntErCwBNKoZcxHe9U3Y4cfz23opcaquXRbWP68STHEoLMPHU5eRP5rW4jWpKSfhVkfi3VfvCD9UWgj1DciS",
  "key35": "vQ7zVrCk2j8JMg62zUkSQGqsEXnKxvaVHr5YpuZDBtU3QN5XshqS7wVndr9n5cQY1k6au3hAN3kD8iViqYxdfbP"
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
