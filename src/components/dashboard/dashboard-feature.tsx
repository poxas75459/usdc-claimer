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
    "44pcCDYQzoDbwfRdpbGQ87thpiZRzfJs1dwd1t7ZN5qGYJwLAbnF1WLQfYEgmHDhjpidjQeievGn2FMriuS1e9c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezjgUmy3TR7obmuLH4hNFq2cN5G6kTYxb7yoN9KPmph2QMgH3kb1cQZvQCDzSNa3cNdFFojc47YArVMFy4bjwEX",
  "key1": "41J3BnBpWmMHmAPXu5uvhm8p5BLCyNf2wWrSxREQnS3LzNg3a4yFkmRNAkMCyoFnmBZhquM8o9XFFHMGdeTfqEWv",
  "key2": "3xxwuxAz51FUxYqzemZS2v4Pzx1DediW8q5dUSH6vjQXc2FhbJY82HHrXDmPvzU96FgiJUdFA7QqWNyx547f6J2k",
  "key3": "4MG5VC1A6u3qMrphWv12sfu2PaTPbKN4ZTPWgJ895yZ1eLe6onyWmtfDZjeStYCjnAB3zjeGCRUBBKRSX7TWhCk5",
  "key4": "5aZKJvGuK4LGnEtBTqCxkXomJeVyZpaTdQoYtsEtZgQDYm8L2FWxHh27TzkhKhuyzsxtcCLWJmheoLid9PSDHrYh",
  "key5": "2Gur2dv5yXoGUdJTsLKXNr6bQ2Q63wqzRPgpYv1TucbTizYZ2eGsv34iS1zN58wAmA6joS7S1biU1AjNrxV3SiHu",
  "key6": "sBLjuhdptVcZXKzJF79sKktbPmdMYnWbmPTB2Hp8uKD9jDw5nxDtdhsdRMp6tpf6WkLxpswgP1HxjfU8kBowa45",
  "key7": "3iYA4CaMVmkbT7S38ZRhQR9ccGtbsX8YuodKSTXNbd9a7Dg2ySKf6dCPYuuJNu44UURpxytVeJprDJsYN7xwhniW",
  "key8": "ZT4TeGwm78Vn4euimRcg9cDZzVhPdQp9U3d4YDzsMK7ZJFzW3ZaSYDpmZsu3uKJv8FeyLMCpW3Wx9rimo12F9fc",
  "key9": "3NJGfAiRV2xCh8ktCMTjmzazTFZ25Q1QjEyNCDVnqKB8bTULvtr2unCZFoLPwNTo6TTFdeVsdG1N9zcxWQxomG3u",
  "key10": "ueg6nGjQmhotJopXb3dt7617dC4sA3d9hsxKRUZDSpfsbm7yUmXkdM8VkXs31UmqwuTbe2EmQA7NXxS7ZmnYC6v",
  "key11": "4U6yCAcNm21oVchZaWceWjW4z9TxR2KouKqqBFN2W5tDgmfNQ3nKQNStNZZEf4ySt1cGeS5qkuT5ZBz2wtPsvHcz",
  "key12": "5SfvN9ygUZEWwU6KrnRwkgk6SbGsTX96eKTqqV44JnRbW1J54RU8Hk9rEahXErqmX2jBWxuX4ygg4HxNtAVNcv9m",
  "key13": "49nrrWhQLHjusyaDYDmkSVHewNo77W4JeZ8Q4B9fEmQAYU8ur1b53u7dMQpy3NZrQpJCGyPbrJ8op1izuY26hny2",
  "key14": "2otsRqnt4L21Bii4YfqsverVZtCeBBhENomNb2Php7AYAtbN2i13Dmj5jjNAq5phwKRsxDcbA1c58XBGTtSGfTMQ",
  "key15": "4gyYjoCU78WP6EMjaESxQDrv8yosrTAEZo8hNErhgXgcdvUBFgYAYW2STtREDuC5n6Hcq2AyPu5yWKHQKkX8FSw5",
  "key16": "4K5aM3sfz8RPZnRVoUXoFecBRW7GRwK4SyLZvDuLGZScCD8Ap7LJtuM3ZCQ2fBqLjvsMhM852q8CrXtFQRgaxRmH",
  "key17": "Bs9UUJuRnFqjjK1TawDRiVxuUZDCrmivr5iWZZeZm4PnPY5WGPPAyxpBMKSChwtQbBfn3ier5yiG7MD8aeFXN6Y",
  "key18": "5JNZ32Wksi9WqeK6twq24kH9D6waLwzKdnxBcvBwD7cvAWr3H91iDNdWBGbqSJZKFvWWcZeyr8AZ6QLYsrRkFhrd",
  "key19": "4T3A89RiXesmWR9uLVUt9cBP43y8LVmVhkxwBrSaVJpwFNWhid2tyVszdnZTNLb5rNNRabvUag52qPKWh5veavdV",
  "key20": "2Y4NgQYo35EwMVG1PqMiGczEveRUhLJw7jH9iMASpyNHeLSSAByTxR88NuMvbuNBVoKaqvPta9Ljkbrp3JHh9jaQ",
  "key21": "5nUb1agFPmY6vCHbubhRyahSzm4wG6kMvXRyAKeAx9XJph1dQQAPMmkntFRDBAGkodLHULFyrA34NbFWeHspbtQg",
  "key22": "2xWqnLNZ3DSB2SEX1He1mTHWEcoD2uM3rdbQFQAH3Yn55Yx4j91DYVg6pMMrLTDSyzQL2ALdHpS5gAJSsLUEtv2j",
  "key23": "3CNupodW6h4TNdGisngggJ4A3sswYyESnLpwje6TGZ5F64FgpYmpoDuQTtuCzxeZKUGpoXdqA7Apq5929S2uhcaL",
  "key24": "vNDXDo9ZEN8mWsyH2QqxLnM6ijcWT1iQsPEAN7acnYwDtde8N3XfCnCz8xwYjBxaQQETwFPWBzKLtq4XsDRypkU",
  "key25": "dRQKfcHk55PJbrY6oazquFc9ev17Apdr8CpyRSmpwKw3CMc3JNevXUzHciXBbSaVfZcNSE48jEDt4joH3hNqLgs"
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
