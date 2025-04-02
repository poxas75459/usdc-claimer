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
    "4huJQBHU5tc3UbAQHuwKVpU1Cuv2hNo3FNZ3VjRcQhJACnvABFg4dQvkiXrSzuZc98h3iDKvPfAoBZhQZTunS5nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G4f3sR4zhwFZESCTg1aYj2byJDJ6c1ngcPe9zoenEWfAG893sdNXt3yunZ32oKBwyez7F3nscWdU23wF99TQ4CE",
  "key1": "2HAJNY17nbYcNaPtPeRxK54HcKt7VKiZgb4fyQCrQhp93G7NrwNFdvv4v3bg8s2RRntTbENG3WKSn7jj7GeG52Cj",
  "key2": "4igeUKBYhFEn3bj8Gno3LMLdeZJQCAvQNbosVJHQLnERZuzg2zri2Pv4bE1ce9o6ep3Ra7kkdq6wPjwFsiS43XPC",
  "key3": "2zBWRmuRFB6E8suXbnnfWbw4kf3spywSYKdxZvGMdCNgPVujP2NcAbQQtZ7z5PqzXgJZrWNLbmEWkmxwUAuHpeps",
  "key4": "5jHy5eshu57Qc4SzZPKTXEqiXrXaoL2MPksBjgNEZ9ip9e4WSHVhdsLY7WYyEZaSSRTVhPZQWp3nC4VQ7KnDgtZn",
  "key5": "3RAVrgh6Yn3NAB4ftm63CqjSArgsihAVxvqxyC88rPfVUnCcvjjb2ktoJrHgjbnFdKN6ZYo1BLxtMZSeESsFoPt",
  "key6": "m611tft3uNoqYTVzYw42vLqtfLM3SQei5ybKy89f5LADvXncVtLRh7VGWkXr3VXEkpLCY9Wzdwz1QVMcSi2VtVN",
  "key7": "2ThjZNvw3v7M7hT6VeVN4EUJRWSGPx1kwjv3Jnn2ZtdsJucdcw9q5kJVoJsaGHbWTdL3c4b5NND4c5Lx9Bi8cDR6",
  "key8": "2DjEr9nvxHW2x3TejveZgFaurzuss6GRmoumoqeZubXEW6E7mR6CorKaWoEvYzkfTsHDgiv2qS1EhLr9jerDTX8m",
  "key9": "2QD8nCx9x7ChWAUQxLiXDgbQ6Uh4mRDxh1NwigzPxMe3paYbjxTE4pcUhBGp5VW7L3trbrAMehh1Qjge6TJ5ZyRw",
  "key10": "5JEjJUSBhbsXrvJYdqpLtEVQCWjsZhL3ZqVmiczT7esG2bQDqBa18pfZsr9Av7NTe4RiP74SUxHuNvSycuZSyHN1",
  "key11": "4MgucKHNona2J5wuzC8Vin2NGLzpUHFfNWXhMrk9oxB8LbmMiyYb4cRHnKwVkZgMVPqYYv8wdPgZ96nhLaLtaT3Y",
  "key12": "44ii2DeqmnaackDAu1Tjqma3rakuJRe7VBqys3xBFpNxPBjjWUqS9iLm95DBHaAa4ZZCqgKn3egeU2E1RhJZiSyV",
  "key13": "58YTFna4kwVecgV7qmBu8swhbZ8Rh6zqsQkkvAB8iMcLkyXQcgMp9gsr9iXwepWKQNivSJf3p3HuDwD9TuwJrhu5",
  "key14": "RoemLCJE2ohyCe94f8VajFYJANptpqQgHmTAC15jCrhbL6N6pTAK4EVAh8zg9KjD2wve7nP6HNohayUHH3wWg6Q",
  "key15": "3ZHPAYZHNAAginS81imdC5UxVjuC5S3ogNFeu1kAjCS6tAMmbJNPWeSAwU5yajpKxJpXfNduL3sAMPT3iSyauKtE",
  "key16": "NjqxLpFVeNfT3jBtxxnsRVyqLUHaN8JWLkqD9i2SfLwtZkMe79WtmgnuKwsMRFH7jXmwRd93cDpaqVHcgJLLCUS",
  "key17": "2gmVSxYQTrWPU5qTTsBpiTjWcPZZQtpqHyJ2xm6RE1xX5gBkM62R3HzyhwyNfys2Jabt4KZSqmriEMtbvuer8yNi",
  "key18": "scHCtXMCNbE7dXzWJuLa9bM25RsNVE5myRkt25Num4S69UxqP2fd61CxQ1uRxTx1Sp6HDJDCJNV4KojbYxxf6cN",
  "key19": "2Y1hvYPNa83zoEqjhjMMXW9zkHUGAVf8fbvHJRNaM6Go8ryMquuZ1bwrWgP96GWPhaTzLgimFsKY21xnLKDyX6L2",
  "key20": "5x784hpJGCi8Z8r3JFT2iR5ENREs3BndgnfQtRZZLyfc5nszBqAX8vuVxoutkGYZzNTdV25LjHDy6H45BfCKWzeg",
  "key21": "21Ku3gQ2eH7WoKLkXEiqHyUKv1p5Y3bKf8bR144RjFp8Ga1zfp5R9rsQRQZiAC33mv5zgCnFSen5Sb6E4SP3UBJL",
  "key22": "TMnrV6LeJN1wt6TzPvLifw4tN4XkPuJvKJDf6Hb4pePRizmqrCHTeZUvqoGic1B23EyJeKjgMXwywYTxafFmsJP",
  "key23": "5eiuE37PmNduEcRNZoQKB4xyZPKvobE6AuXDHEf8aPhAgHJEc1hQ38TUVu7TfKoQYRguSkmHe3giLLuQSuhVSBuV",
  "key24": "3EmuiykgrYKpJgteGVQxrz7sPpUTWcXYsPYKVs6hRK7Ugo5aZD7LzoQbABaYhWh1rUK8ugrF6iPurZSkuceSSPwT",
  "key25": "2MboYgT66bxbr82KrnAPtAojqqNDnizxVANxvmReYxAsKFza9asJfc1P6H3WWMNoP3r2XaK5jGgnMo7Zoo2byegP",
  "key26": "SFnENBu4hnyFeXBDnMTH7uA4LmuZuYipyELfE4ShrGBNWDY98a38GL1mKmNdNCt648zKQeUmdf2P6bJjEG8WRH1",
  "key27": "3cnphtj5LEE72SYvsNz6F1CL9wvxKoNfAtxjvy4ztopSNS2SRkYevb2AYjMrkikyz4FhLv82V6T8Xt7LMjUAbP66",
  "key28": "2xkYFr9ZYtXSyUaEzMcyqp9MQF5sj7PrJnSAmiAcgALgkWSMmNcWtkyUhUEoxb8urPZeMeEGyx8XnvfKDvoQm8BR",
  "key29": "24qxkrr3fhgwYhcjhcgwhMY2UY6nvrX6SJ6BD7qmJMAcbu7DkvcX2q82dJYSVcWzqJ2yiWA5opwnTmeLzACEEtm4",
  "key30": "NXyLeEtNTMPa2KPFL1MF7W4X1a96QHjmRTj1tRidWXgitdiE27MbSVEtbwHz3SAzcHQADHT3d489uNuj6zCU9mW",
  "key31": "64kXr8tsq9X62ok3bkLSsJX7e3svGV8FA97SNZVJjVGf7d1Qn92MBHmUSftUcSZTW7WPjN7RJccnjSCHaWypcv4R",
  "key32": "49Lz3zU3FRRZompY59UXcEYEjMKyNquBCwCwjpUPLNJ59GuHGVAazqAAumzH3U6gnB7tYhZMMuFuHK8C9JKsdGUq",
  "key33": "VE1NJg4E5mPxspWjTXrDHAFUDjXWiSbxPGxpEYdUwfR9ooLWH62MQfzhDw9zaasJ2uM7PqgxQCHVpfksZQPtwDS",
  "key34": "9zW89zFNG5pXYWZc3M73FTgTd8o857iVrkZXtERzAMCRyWCexqzp2jthLn9Uam4he4tukdJjcyGd2KuJvMqL1Fj",
  "key35": "4Te5GaQn2zwf1S9fPp7NnGPttezhNLmxgnTdSoSciQYQJdHro161iJW23dtXs1EfGtAP4aNuuUeGDPFp8RYF6GWn"
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
