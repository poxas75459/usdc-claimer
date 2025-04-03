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
    "577gCwb4KQRgy19WMyEg9VvWcSKsuRaYCVLGE98bWDT9mKNj1BMdZY4gWJkqxP2KWBDQVfAyJK2WiaMmDBcmjSv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32tkVKQXZ4uoYHEpUo2HKw65fNb2MBnmbnueLCvEkvPGYKhxEFY9nYBUwpuCAjKCSUiLjAntD3kmD9YAmNczFhKk",
  "key1": "3TfHSQNfQXeRtDmNXinxuCfEkiquTGodYAA7u34Y5fVMm4FTGC8WoFyrdp9VXT6RM3CuWLTzxWR7MNN5MvSNHK4k",
  "key2": "22zjwfqyDnzX4UhurYk1UBQQi12tXPBHtrWeWuVBLGmLAmDjUmPsqqus1ngHhJDJzf97hMJqUgtDU8rdw6FLWSRU",
  "key3": "34aDpz3vcEzdFVcSVQsAcQdVg1AAPVttdKKjR5Wo2ZZzFjD5vgYdBp45L3XM7PPXEPjvfhFDDYoYoCYqtKMMQLPR",
  "key4": "3ewMYz9BNN9JHbTHTbsrqpBefswAiWnXiMPzRc3sBnVmNtp2rBxU5Ruce3Mrj2xiARiVNv5SVeHuh9An2zEnvVq3",
  "key5": "Gd9BfQp6dRcjrLv6z3K8i97znjvEoCLvpuf9BWwKhFTNpARLWCvRC4hzWvKuyYcZorfxkrgkRGjx4PuTBC4kVTi",
  "key6": "3kzmfJXngooa4pbuxX9x8FD9FyYzYsy49pQ9azzKshd3jXsCs7ThyAqRX3EspkhHsjnC1xb1M8StMWG7PGmsju4a",
  "key7": "4fSXL88Ymhp6ABSShGtWMtBq6mh8so46GzSF2cJp8VZ1pXUykSJo7vGVT74nUUP1J3AUz4fYVv57HnmduHuk1WtX",
  "key8": "z2vVKtz6bdknABeeZHUAgxTih6Gnt8Mdcx8RfxKAJrPVaU3QpHmxGbQcjFhfC8RSn2EFRgQk77pLvsE4TLwRFL2",
  "key9": "3vKXQ5q5yRX5sFs1SYZXdUcqssPEqSgdzgsR3gvbYcTGpukjF47cpaRQ6fbrwGU15t88GL22BUHwHKbPfDnNoi19",
  "key10": "41YPiC9XDSJ9wZRh5mc7HycaG4VJA6pXuC1sFMA1zDVPNiaPLcS3hHitMagxv7TmMVzyYZxvTsQgZH7xB4zFFFDL",
  "key11": "4dPqLFmyF39QjwWQ13YrNL1LVzxjUnQi9VUoYxpppPo9mrey5zPyLPp6j3Ct36WNfppDv8xEexGUPnrfwBvtryVS",
  "key12": "qb1A2vE9UKuJ4B7wAU8z8bTdAJzejadEPtcFR6JPZxM984AJj7dj7mTBSqzZNNL4SkrJNpMw1cNdkEvtpW1Rsg4",
  "key13": "RTkSQEbrsV665vJg7QX5LMKTx8o4fTS3qkyiL33NWMzJjWnpcdmdV2NasLEAaMvBusJrcWMB5q3JtMBtzahXrds",
  "key14": "QWwuVav2MVLqgjVm2SaoLzp5WZicvGb4jouuxZbzYm84DTrGCYQKJsdxzWyB3oGAnhTs3GKBoEVLaphHf3DTYfc",
  "key15": "4sn9FjoQ1uCkTQZEcaafzmV38XKqKRyyct4gA8cwN7gdCWwoVWMyHfxJxj4cejjfF3ZeCJ3VkXbwAUNkSn6hRM9C",
  "key16": "3zDR48gUUVozWwZr9kEsiSwwF7mT3fksqegr8mbMdhzpkJ2hbS7rW5euiQC2tffERjFepQwRJ3XTsnNCWY2QcTWF",
  "key17": "2Cdvz47EKKu6sgxABdAWCXdSXv911jKyvMZonF3NLKTkujSd5zojeUJb6aEijk3c8ETyenZvJWWD22MG9fawrPRX",
  "key18": "3Wt359k954U14xtoBJ6sqkbE7X1Nt5uboSaEWMRomfZ81DLZNuK1ZEXDffCUjR2pEqxyzKkDTwcvaVVQvuj1ECqz",
  "key19": "3FC1jPdnCFxHpGmGozBZ4XRag9g6nam2Dji5SWZtmMtGCNXA6kXUzhEXzMYb4hNKcfvMP6NbAcEaS5x448kWcy2u",
  "key20": "45Z7PUik8pg7BKauaLF3cj2yf2asjdUMUsyLExMUfJWwvXyTPPG57ogRyByStAwWX8py2eAeHYW3wPh5Z8pCzk4H",
  "key21": "5R8YJ6iFYPmPXsCq1keHtExJY93dBB6ktizQQQQ7zQGHMc8ZzMkiGv7CDJaGBbW3RobJgGDZgXN5gG37hK3PAS2Z",
  "key22": "5uAEeP2S4BqUnz4Hq83HyWgcTmqappAyb8vxYZcT3r1VFVSqNHHWDv4RK5qt7YQsgADi8jA1dc2cVW7RALT3EHRy",
  "key23": "z55g7huXUCCb43crjvJaeXGwtVHPYgFBw31PcDx4x9DySyN6tzr8g7JqRW9tMBCSEGcHiM2A29dKaAjD9zewSEH",
  "key24": "5u38yAb6QefDaY5heUnKS8QZxSYvba97cMQvn2m6rqfeJhNnyQBSdC6XG6kBnom2rpetQGStnXpaobK2MHxXxAeX",
  "key25": "h5C8PvRciyqKgY2GEfDeCc6uL6nNb4QGYBWh6hXncKhDBNkAJisrRJQbD5cSHfwfqFhjqtWwqQRcL4pvv8k4ydB",
  "key26": "4UehZvyF7EAvzrPYvfxd4ZpKRHQSDLsSfYYmEjkkGjG44Y6AddoRSrBKrUxHYi98UJWjio85groApMd9geBMp1An",
  "key27": "3QHsFrMxvnnVv1iAZTsmbuh7Fx45fCQAS9PvHt2fR1A5oBEKN2bmefVHr4PBJuUZ3CknxutyWsGaNGqHSBBnKv5g",
  "key28": "54ptezKYXcEcZRFQWmjgKvhBhwbEEYHiqKK2TRSZV5db4mdxbuRWcTAkr4N5hMP4vPNTzkc1e16hr5x2gH4NUhcF",
  "key29": "5Y53stvmrD7bteaTcSEpoXYF1m5Gw9rpwwuopf9GpPGNqAguLYPhEhEzkfvzqwUYwaE6qbd9Djxk2jtU95UQzkrC",
  "key30": "61HeEvSHQ6fCz8eFgvY7YKA5D4WmRQ6E3GNoxgijkdh3FgjLAuZCMCY49LBNvd5TifVC82hABrchsiik6PwgCFgv",
  "key31": "4QLH1PJWMA5FvTTR4kFJ7uKYEfWL8uDnauP6NtdSEJQiCs5JYJ5odFxsyRoup1XBNgAXF1KY5dEQXjCtN4xDEb9n",
  "key32": "3AWbaQuXRBeev4g5YftZHYcjsZVRUhtSR7RegpDfsQUVmfJLPLhdffvXr72XuwW18kixvCohSggyVcHy2g36FKnE",
  "key33": "579Bkg39jEHRpretKtnNAbySzEd7Dwfm65jgiiSh5nzSpwxJWXz6UYY1QAjd5B54UyeD1A3ej6EbVjpcBMgLUZ8f"
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
