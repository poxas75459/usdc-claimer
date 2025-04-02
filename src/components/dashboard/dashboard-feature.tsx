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
    "5LVwEY7ib6ZeMrahn9mWA1Bf3cVKZiAevm2Ezt9824in2cKKC1p2HoKhUcb1gtEwfrzrJxXLiM6EYRPyvqeaTX5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KEi6QuhjEYx7Q5hSDKUvCKg6CznWawCyTc7WtxexLvwXHpTXGFAvgmqTSH8Kt99mXbCz2NwnwD8jo64wpNYiKxT",
  "key1": "31njZGApUZxK36fWxtT727d7JV6KnLuxgFfE8HZaDh74KS5ukAwb2b9j9NUGUBtvZrzmhUjmiTH9EXBo4PsmevX5",
  "key2": "5djPVWdYUGrs3TzCPQB6LSzMBAS4DJv88euCh7EwcwjLGyBiidUs7jYfoCmtrrSwuaU3BuFohJJ7rh9TNi7qUcKN",
  "key3": "5tYdxnCUjofLbDDiYT8bfVBaoBruwkow6V3Amqi5NSvqGseMRRSFC4BuXwtVpxY9pYTa5iWCUoJDWJHX5EwXccu6",
  "key4": "38TwfXMCSXuqzZbRPV2zkkcatQVyhoU2GnA5U9SVhw1sXK9tKp4xoPiH7ZXJjsmUqgsvCgiuzJq6ZCRYQQdehqSK",
  "key5": "3XTbYkZjPkpEe1KBFhMu4ENUCrDiRNw3emVJA2WLGA94JBAo2SSiZiepSjwupf78M4KDxseNM5z1naSkS6mCzKhK",
  "key6": "2rR3M8cTytswP3eFKCzyzvYFXk3KfJxH7c6wRLxExcuxu1t6ePX1L46PD19jGj6Jfhta5JWJJBoXUfgJiZP6wxp7",
  "key7": "2hSWzpwpteT64Gn5PMoBLi5NePz7kk6qXsjwJ2vCS4W5JvCvSf47XRYZ6WzBSm7YrpJQJL6tQ24njowEr6tcChpC",
  "key8": "28p4tWwhWMfogy9p2P8TUkxMENC5h6aGEM8VoHCtTBvyUcWwAJbXHFFJm5zrnHfpCGDVrTjJc15TsZm4zR6PpN7N",
  "key9": "2zkvBaeB7cYNkQXJUgFHxqqNaq9m68h42FnymF4zCtBypGfiytrEccXyzcDd6vkDKq87WWXwMJnr8ARmjJWS2unT",
  "key10": "2jQeyCWzXAf9MRbM3GQjpfpZgeezJb6gqHtSKSg4nAgSQkMvDFsobMrzqecjPHPdE4vuDZnmbuJhikdyVsmsp4HG",
  "key11": "beRGRoftHiPLf1FUfQCa4pX8Y8NbR9YiqXHMapFfGH7UAvse651EkXnRqmicE6CiHYANnfWBuP9uWLHn22bWLji",
  "key12": "sRvgN4MXnd1XrYhv99gDu3uMJHLbBEmYkAxhHRErGxqpEPbryRdi6aEcXddEASyKRiPGtrQbRvm5UzPSGNGaXsB",
  "key13": "aQooyerCv61sDwugKVEDKZiJYdSG7pNAAjQCLz2u2Ryp97R3hhjusy1JdaqxUid9BecH8h1FvNga3eMDAkL3pu4",
  "key14": "5Sg3jmiHFdZ3dnKt54tn5ReBNcpkcGC4B5w6MHP8nT6dzEC4A5eosqmdJf2zewNXwydJDtXQwtTWUF1qD4yKKTGo",
  "key15": "5N74BDzidan1mAQTp7dnbuT1YDB6PxTzFixMnd73fqw6RHnmiZJGnsUhvXYSoE75hqVRUr9V7QgDkG4ST4kr6psF",
  "key16": "5DTjnPh2f6v3FQtXBQbdqsfNnQARwKBfjqNmdgjpu4amdzM7drCknCHiKvUpY2J1A59oL4cxJkp6vfCFkzs4hb3u",
  "key17": "62JGSb5AM68chuZRVkRzL65ojbeU5381Pj2uWEBUAu4YUKpjjSn3j2LhqpE6LZYNbJHJ31j474uSU6nAdRbDEzva",
  "key18": "5ZBE9pUJuiSebkm5NEFbSPjxYGax6FwMmY149wyj1vfWnV2Q1WBj3o4kdB1Lc19X4UixarHzPMQbGboLCPSv4MG8",
  "key19": "4VsCHtnc2wDHfCE1DWG74QHsvp1aCWNRpdrZo78jhADLVWAJ2kzicHzhLvM5w6ECcfG1mXeyDneinxjmxbvdeAXo",
  "key20": "44q5BtVbQrgT4J5NudjJrr3XvnMSkHFdUzSe5MWsMnH1Suc63z6BwwsUN596wf9dSzpe5bmxBMKJgXMY25WqfZ48",
  "key21": "5RBm3MZ5ToDPT1wWDNygvFedJVRkjGz1btoCNbsmRMcz2hVQvvV2aGiFrAXZAwSZGmH9pbAXNADwmfatpJNwYu5w",
  "key22": "x4FjM7o8C3XtGp3kre9prqQ491xZiwuaw3y2xcqpJwjdcURmFxmpTFBjYSZtUZTkf4PRWbEq9XkBXwH1DJPtVD9",
  "key23": "a6KtZL5CKMuiQbsGUpciBGzHuY63aV5HiLAJ69rJ2Lv4DYVpKFt7TKQHQn4qKRB8VzA6fbvecSLFJAnuigUsuJD",
  "key24": "5AJHdbbkyiQiKsE3hvoLpTEQssoULUxTvL3AhwASvFMRNT9xr8vjvpABDcSYvZ3AWfxTojnruo9vqFYy6gPRBmNX",
  "key25": "34QTyk1LAaBmK9EydThv5mny3s7FWM1QitfmCZMxYcekbF6Vfs4niSapkZk9ah8apwDPtapEVhqj7m9pGHBJHTF7",
  "key26": "CDdLsN2tJ2P8YnsRjy7p3adoVHGDQphc4LTstyRGxhk8rotoffiVWWrT8t2BrYx51Xkqu3knM6sz4FKp94nHcDe",
  "key27": "4S7iY2UfezcyJ7LwjwVppw8GnNXSBnxGMtcWXCo9sjiHm7xX6fUrx722H9SjHioWa2EV9nEC7zXnoCkmDF1mK91v",
  "key28": "3uFZg2NuJhQ5Ast286gRPeazk2xKShsGBbA5PRjGv9kmuy1wpjtAi9JHUFT37Sdoujkm2ssVNKncH1CMds83pNZL",
  "key29": "5RJhoCvENnQKRcRJApdh1LMZbjsiRKe457VmzuUMmXZdy3aXNf2ec6Vf3rmYXVZBqcwsSrKNN6uBRfngVfJg1x3X",
  "key30": "4o1nRHAdgNRdBbZKeaujkWezyZpPYKGd8kE6YRBa7F4qPA6ez82NsV8erDWCwDxW7Gp5MBpNRzeUfcQ6NByx3Gx2",
  "key31": "5cwLvLtgRd5L7DCs6SddU6vV3tenZGgRubiHjKoqjjnWpMSEBuHa9TYvVg57ua8JMJFQFXMwjwiZ1wrRXnuCHPkR",
  "key32": "DRpPKmoUq9gkryqUVMPNY8feJ7KUfNdcs9sPV1Kdu4U2tBUH9PYtmGvpYwm15x1jpktTy3sC5xbfNPYCcnN9m91"
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
