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
    "3rUUFxNdhmwuCSmLeYXqdEa7sNvjdt4u1uC5jjnD9CngvbjiqtV2FZAtRNKWb6ojAUHPQA6djia3DZ5sHp6WNaMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a1mdaxRgKfkrBUpzYEQQcccRSM2x3qXXBE9nt2zm78HMLa3sNLm3nvdCKFYqfsXsMKSZxFT6psuis5aqhH7BUze",
  "key1": "4waN2X8e8Rd6TcUAZ3PfQ4os6xX7G8k4EtYzre4KoZ4j22PLwAZybb2igkWyE71AoFpo9c7ozBY47AcQCT1rubaF",
  "key2": "458s3A9XZb6NrRqU7WHBSjSHmTiAsJtsk4Ay2UeNPZmgW4QhRRmCygFVQEzyG58oVW6jqezyMB2VShYSpekBaHvh",
  "key3": "3CEiPT35W9gq4s9EA3JsC19vhjD5JtqUFfbvMzd4zuHfsL7osFgpyRU8mQW5ueWnLLwuK2PRxjSQCUqdmBUFtrCw",
  "key4": "4cTJBJXuUJzqNRsEpB8VDZZB98itGCu5NLmEMsTmTCaTifLhL1YBWHPHssDHJNgTy6BiHG9P2YvEtn7huE1YeqnU",
  "key5": "2jqxD1SeK99pKHedNqZ7exNfmoxUJk895k7Hk7ewS1JyBzHdFbA7tkZJnhTQG3FPc3qrE997NF7qnih57TxiiWHc",
  "key6": "5jWmvojSc2qijmBLsdUTvHWZ9gzxPJVdNuG1wps9h5t5uxghtHwGAhFyLmZP6JqHZp9QuaiQbtF8zexfEuheeB5u",
  "key7": "2ME4xYf3absH679k3KBmQnuTasG7VtJVY1GtLSZkHPzWMJFh3rX9uuLpBRyMhJAHw4duAZKpsipP9rukaWm2wrb1",
  "key8": "bbgSRsccrmL9NUbrhKgVctyADix1coJM4tyRZFYwSRTFakSywB4ATntHGU582dWWHvWu3SYNHag7PVKL8egoGoN",
  "key9": "2mBLKw8D6LnijGpguLMP1pW4g9pcZUEpwAxdDbqx84ewrbRZ3msvfq787gCFDdeV55htwjncywP3FBJQag93RRGD",
  "key10": "34BghUT4GusRLiXZaeUjso1nsv61MzvnoFtwNZWTuWrPwf1w7UpJ7nJzSaPJVMB91FFF7eMB7k2vjbCDbgCeZ3Dd",
  "key11": "7Ek9BJzMGfa2bKZWkxsMH2qqmSPKW3S1SDGJYiW95jBqrCmiuEfKMMkGe1bjNwNJKDE5fLTzxRPrceqcK1Q9bnN",
  "key12": "5bRau3nu8jFrjjHdEmQiLL6UJN4DLuiYXQxjpKS2FeZL8UB6tCcJQB57WS799vPDj5TSmgftp55xeRfnbowoasbt",
  "key13": "2QntTRAdJr4mkfkZAptYf1cauwhPZtX4A6z1Yo4JJt9F6SpQeCtJPhioe6eRGzoHzVmJ2MBm5MgjyzKeh1zRnX6X",
  "key14": "62nf3XaQPZqTW9GRDL9YGS1dv5h3PFWaNtE7Fn7pnaz89oiiCuEaWodqViA4D1EUtYdqekE6FGvGCnoNHU9KgtXT",
  "key15": "2jcwWVkYGL3HUY5uvZQfhjU1yuz3Pwhe27gbGMnXe2DaGXw8zsBvbgNGQVRhcyopKEHwtRVzCEoHm1PXxcad4mzv",
  "key16": "3DQvcF1wwWaK7RKMLXfurCcx1qnt8ctSNXsn49DukQprnoSnRFqwyQ7ZYMLf17MTaxLZj1LnF6oyJ2quMs54sXHq",
  "key17": "2Snf3cFu98SNa5nJ4bLhFAKHC9tz4vrz6CF6qRoEc9qiqSxmQSbzPRvtifRJwiuECfqV7SDAgZcKcsBfXe1qhTzY",
  "key18": "29e1bXYjP8QstgTPARgbzD6cUHyMLatkCf8yy7znmtE3wTYrEdqpezJCV911V2c7S13zVby68MYAWMz2gJHsEHw7",
  "key19": "5urV8iVS3BN1B22epG4bNkTmvpeA6Uo9eapqYF4rQyVLbAnZzSaNSWjbz5BYtP7bKFvnMLuGemcmEJzkmJNpg8bS",
  "key20": "4kd5qQzB83buun1LqatwZiqyX6oEMXqeVkEtCW5GNVwqBN7Y4DvxevSEPPerDP4FAsk9C6JY16qve8EPtS5pqpQW",
  "key21": "4AWUgKKJy2s8oSRN7MiGPdjH9DBsR3FcJWR5mjokGE1frvVn3oJJyKBhZoAzNNL2T39K6ZpFW4qNSAdjSLRiHy6L",
  "key22": "2MvmTkNHJQczNjWp9sNFaCAFFpbTXWb5E5PkvjXTswAudP614dsyUwhoGmxC6jvmRyjavV8S6gnZ2oVTpaj5TwgK",
  "key23": "5inzXW1exZYgXFXCJQRU1XmzrANzDRxV1ZgNJnCgsKKYYMhw3vu9iuGspmhuNqxa46bU7dNBwLk4YRqXajfsoaDy",
  "key24": "4LJy2i8AKkUqUZXZuPYEaxXgfHHXPCqwDGRvF13aQtPUAjdoJC7Ym5JzGKVifBPFkSZDUTfNXKPVmz6VdfiNUJUa",
  "key25": "52TFVcfAg9UcvNJ2FBqqb42qdcsDf6JwfY7PyRumEjxFgPmDzG1mgLK2VGY1oMjPB6PCbUVGgEtzUp7DwrmaB4Ge",
  "key26": "51GFw7K5LK2xbg5SXRcVFnrVuHxfgGqVEkRXBW4Dr5AbiVkmNEMpLUrmKrcepJ6RZXmBoP4G46T1rio1FCi52X62",
  "key27": "3P6cdykTqrx1V5LevxBhRH4FqPhhSDxq5mLCpRMycYU8CYZgm9M9WAQ8DfEz1XuihUvsTrwHgzCWzXy8c8hENnVQ",
  "key28": "3bA7ZwKbRDdKdCp2eyNUhn6zGW5TLC8KUdgUUo3r9XxChBqMP7MzZtnGdaPSMzwew1tyxgwTZKJpoG5B472X3CSM",
  "key29": "4vDqDRsQRx4swUfkn5m1vCW1Pb4jAgwkh4KiWjSBF9EKXVovChz4KVU8eB1wetHZUDhyWKsWRmfMMWX2c9vZHdEr",
  "key30": "5NFDEkb8vGdNF16xdgwkY7FkWWj7wDguRHKZwqifLCXM93iGtKfGB47Sb4CLZLEfeHMWiqtARfMDeofQRmfU27UN",
  "key31": "2ZznrrKPs3iaErfgAVqy5gTUBrHaafwPwAPYsUKavuYNmPx7cLDGx6AiKu8bCK8mtRbGKgxgzm4kUje5f6xkCWbw",
  "key32": "2q7vVPYgVsywk15FjC9BMh7tdeqnKW8jxYSuK3N43GyAC9ieCvSRcHsb7q8p7e3q681LV6aH59iDuzKpJvR3M31y"
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
