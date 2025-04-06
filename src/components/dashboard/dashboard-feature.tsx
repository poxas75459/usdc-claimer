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
    "5abYhixwnxddsNtKZpwZ9shvpx6MYMggAB3ZLLkAXxvEntW9SwzfbmFriVdvN6JfPeXExbW1YTqsCWAsyVt1Y5WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PM2PkWusJFFvDh9gTp2yVEUDb6Fb3h174kycVLoC4rcc51AQiqDiLgsJmCm1bYnw3ngZkaCWRGBAw25Vb6U5JA",
  "key1": "3HN4uS7uFZebkzhkNRYc2JUican89pbTJNwti9SZYMNJFXwCKWWaYTfeB24uNHPPrZRrZJnVbEDao4rxuswTDsCR",
  "key2": "2HDeQuxBNV3dJ1WfzeByAnq5WxXkNurw8Gye381xXnQ2dY57FVYWs2h1nhi6SuL1mjCyXSciZfvy6vRrchk1JBdA",
  "key3": "Z9vCiecnHNyJLSiLxeMwY9gVMJbErp29y7gLaBjdWTEJCk3u7jPpC8TX78AWSrb6He9CHBraP9KiJuhgCcDRUxA",
  "key4": "3f3dqauHsLQJUeYDi6DCwyBeevK71rNBG9njBzb5svdEM6Tni21qnnLjPKn9EPh63Df1WnFzUcC1SHJ9eHrqvEBn",
  "key5": "3f9TDopB6TP9zPFF8tTujGMjf3im68x7jtAk3f2cwHXscERS6ZWB3PvrmukzwnADrDfQNFbk9CbQhmFyohn2AxEA",
  "key6": "47WDZb7jgke2Rqt7Z2QfMoYv7EzRkMjJFm41MDPh82jr6MEk1o8EtTn5yUXefX4qL13mbWETe62xEftpRptujBpA",
  "key7": "4g18dKcELSqSxs99f4TbUNw72SancqY6ncm7HVEDDxYhAE9T7jm9q67q2WHYVCtukafQsWhZ6cGNN4KtfGMUYQ8u",
  "key8": "1xUga4j3MPoLW9UcZF9keGzhSRu3h3dYokBC6yEnqAPgpXAYXysgQmFYfb9kvSwvy997tqtx1ds4dRuy14PFw94",
  "key9": "5viUK9xMhWMcABVPWcefSF3vN6xQbZzdoSMmf4tGPFoD9RYmVLbKnBHAWnbZ3P5JHD1CzfHZR2VRRX9BDVxbjD1U",
  "key10": "VHuwyEV6qdD6sEnvvqJxsjttAEtwoujqPjfp88x5GNby7vdLCPJm39aHQB6g9GkWd7NyTAS3US8Pu6DSoDgfzL3",
  "key11": "2gwbg3pJqaBFUe3BFzafGnbyiJVr9nX1DjjG2ACRLHMUXc7fe1WtzCpkdS5Qnn7YoMaUVKhggHisUsthpWsAKmkQ",
  "key12": "3Za9dAAWHDLUQEv5DGKu7KjVjQWqWak1HyWqqVA2AX7bERgwcc84BHuLjFQ92hJMggb5npvEaDzt4PXiyYy4bBrf",
  "key13": "5J8nmS9kniApaLjLermKLLEj48x44Da5rR2PADeKu2ZVzT1msKo4Tw1yZmykwr9k7N2Gh5uRSuTH8zyX1UXNK6nd",
  "key14": "2r55z9ZEftZMcD7mWTiguwdr7YELYU1QmdtwtsRj2f3bLix4PqecZ1NcYMrDyAWQbj5Rjj9wXt19bkv4i34PiHts",
  "key15": "45WB6zwBbkUpx3fZunJLj2rxyGGirYEjbP55yH4anY8q4CHqdHq7qtoSaMyxk73rH5YyvoSzkribjNXFtYuDNtPu",
  "key16": "4ACJR5K53FmnRa9cnZ5VDExhXpTskebv61MLztqQpjrcccUxWH5FkARLip9gxPrUMKQXVJNt6aNi6F78LjsyjJKY",
  "key17": "5yoR7VC3mkENk96uQ4UGn4eYu5m1cw3QsCdb2PYHc84YHVSaM5G4yuRmdaLWA1nyZ9WLgxq5DVb1ESsNFCo7tiLf",
  "key18": "4dxG91P3wL29DsaWA1sCbXGo8z2YxvvYw4jdk2ekbDYon3ocsK1zSwXssgsDvpZ9ZgjcAEvmXodfpgMSsVkc3Bm1",
  "key19": "4MqzYfbJfFDbpZQmhf8cBwaFcaZg8XaYrPwbN8qjw4oD6ES1VBP3dHxPqH5ih3b65rv1YU1X4WpZKaP8FWR3sCCM",
  "key20": "2KtSE3yM3L7HxB9Jew7HVQbWdsQrsrhJTNVWgUSy8LZB1sfDjBo7A2ArYwwEwQ7r9NG6NNnTsSU5rPo1jBBYQVGx",
  "key21": "44cWwqUxRFf5cNM6NzwiqFqRTKR3rQdt9FLKXn7Gcq3haQFZnRLTTZxLBmpe2oqor2oi2eMMvRQhF58XdQpFZc5V",
  "key22": "2x7U3sg6VqBiPW8qVYtW2iMqLg6y3ji8yhVN8AvP3ug6JTuFTRFMdxaKv5CBoAUKhXJzgMj1U3kMUfmU3i5dieEi",
  "key23": "3rx5aPZs6DDLFGhF7Hi9K63XjAw5B5o9NE4DAfJUxZCc3T7uVbSkC4n1JeroQY7JEb4erLiY7HPpLrMysBXd3YX1",
  "key24": "4Rfaq4ZspgPjnyxoYjKfRGR8kwZ7T6LVcociZqvmGhBS5vSGsTMAH8bKLvCRsMAakRNucUMUfHsbMaM4uvdjwdUh",
  "key25": "2F4R2Y1Ro1z3ga5UGd81MDiZhriSXLsjMye7wDcGKt4onEaDNG3PsmiPT6VSCDACrqck7E6JQxn3YU1GFQqEs9ux",
  "key26": "24Nt8tzgQpuHunQirR66KusLuquzCRVcDNut7XbbK66TVmgFidGvveK5eJiAZ56cp92f2Tt9Bu658JoyuHmUQSsd",
  "key27": "3rr822VhkPgYxgu9bkB4gBvMnWqrtuS119WjcFvgfDY3wXtW64hdgfNLxHtqDy8Bm76cecfTsHtSny4zWt4De1xz",
  "key28": "4UKMgMQCN7iAVkKfByFSw2isxTB4sf19oAvPkztJFs5E4qFdyJLqUWQETHyoFE1TpvxroRknyn8tS2jEZfDduFb4",
  "key29": "3NfdrTbcohfZqaRw4QATcFYeFVkzVjwBPSWN5wg9hoj1AXZudQpgnSbrJb2GfwzJDqxFha7XCEo8hwrz8k9wubdd",
  "key30": "633fCaVJhjopt3g19eRd6jqZnkV3iwFztg2e54nonbZtFznYVxE1bn32NfJmYyUrg2ynz1dhorC7HWdtTqP6hs5X",
  "key31": "4yqinEftyVT3cHTAhvivc6BNv7vXKhin5wL6TacNjUB8gF31Qf4HVzzLPGbQ4NfN3SCNWZv8W7YoWFnpPAU5Hvu5",
  "key32": "49dpaWx3JirNRijVK99bSCtm7PJQh6XDfestvXPEoTUoauuPBtUG7AfF1zLw3BeAe2Bqn4DkV2fVbDJUQyqg6WhY",
  "key33": "2SY4qa4mg5b6vWGZEVN3VAeUXanvRHkt5gZPui4CqbXAZRKRH85Jc49rgSXiMPnraVtseXkjHgUbkxFaVT2uBGK",
  "key34": "G5r8HrN7zojujDeieSbZf29qojfeiNCHzaQkC4vhQ8tjpJzyUqLHUQ1NpDiWzTnJin3SDd3KCmdNWigRQU615Tb",
  "key35": "22Xbb2aARMNZDexRtHHTFbkC9BtYj12rN6ddQozjRcnRxQ4t4o6EUMddjwSb1pr7DgBevU9Ut13XRkmrb2gEMFaz",
  "key36": "3qrwS3ZTZJEVXpxa8qZqX18xVYEb9uHNLbRsERkG8ks2CnGgBgh7QZZxRaviAmgX7Y89RCvtnkxfMTzhP7Rv6YEv",
  "key37": "32699Eokx6V7hZALwRX4uGXDTDAyy8gfoewrsXYxYmuf57tpDzpBWcXzifouhatvGTrJoBGsEHa7HjBTP88jRBhg",
  "key38": "33KLYNGkiz9sENRQh4hoATXjgt4vbEjFW3WrHGCWPygxquzN9niR53UuZMU6eQtMg3Q5KrNpmSiZ762GGCaVmq7C",
  "key39": "214yJLPtVvLUbp5BAYkXsDr5rqsr31fjkGzu3gPnwKoNBsePqVveoeS9YfhE4KthhSSYbCk6NPKsomwN2mZ7aHSf"
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
