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
    "4vkDHJLW1ZyZtVMEVDKcTBWzaRmdjMbGvHZ9BBT5M4ELfZzdyQNeSR6SyM3arsanq5nEb6vsmYgzVQ96ApaRs5Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNc7aVrvBH78dnWgrbBQePwfmyvpG7TUb9DoftMNTdD5fdzN6n15pJMSNoh2M9kcyQwnSbBJmMYyFySoqM9kBYE",
  "key1": "3Ff5MvhtbnTW7TESC7radmx7EzqurQKiy2PWvdPxARUyqDoAbfGvR16PfGy11c3wm4GP4qCHWzXcXnhmukbKV3kT",
  "key2": "31ASbjeKCACRj6naC1jT7ohG62bjpxTjkrA5mHjDRB8vVmTXzrazgvqNWEZnBTJ8gv7FuUpNyopW6DMc56xFuVHt",
  "key3": "2Zu7VHWpio4KxkT3msYPZVBXER8e8iffj7nUurySCLPegi4rvohTpWL6v13J4cyke9krTEWDuVSwDGcWxEn26wp7",
  "key4": "4dhs1nuWmzA3rUPZbBfsceeLhTtJ2fYfBbNTZBwc4cE9gXe24P9QbdQb3EiXjxRxrMU9LXJ6iCubxvdAFAxLGLrW",
  "key5": "53LneTRvXrLPeyjAh7EAE1g7TF61eFZktsCh1DtiAGWRWDJ5r3u5W7kFo1b2zSc4cE3YgtutAq8Hq1H9FwZ9Ty9T",
  "key6": "5t2zeDiMKPsgJs8k7w8MvDYGKsJnJU5W8vZ3jrkC1ebVp9LqJTyTFzKBYEhsJGTKjN4rWkmXR7QYqtHM757r4uj7",
  "key7": "WPMVsLxnjEUnAxM3kW5t1Yj6eMHxHknMd8fPpMv8Zek6vP7H7mq7BXg8SSZwVXeR8SRZgWS8M96AA1SumgwqKjJ",
  "key8": "4zooDgfBhWuXtBsTxXynEhNbu78235N6QTpZGT3XQ6wGT7pQFbVrAnuiBPRbu98q1XvFQVrw2qrsx1hD1kcJ135c",
  "key9": "Fs8K3fHMQEfQQwqCBND7Q9D7yUndjoUn6Z3dsUxd2F2oJjX2VLVKcS6YdaDdkqNuLoe9ZNWGuaqrHPGmkbAHhPF",
  "key10": "2ztj7tzvn5ks8Hk2cU2XEthVmSxczP6STKnXkyoJN6B3yD7dsWXJq99jXhUdFhGBjPGYoTGARnrJHwzGhbQzRQ1Y",
  "key11": "5eftzTQV9kjjPVW3pakasw9H6aqxukTXryEh3GJMu8gCYCWhoQ9fbjYALbgn9jiGkQWgABkhYLK1V362zEVmSode",
  "key12": "5J4Hx5UTDueLGuqQM5QE2ceuUnSgcX8atxVfdj3P4hkBHsCKPM53Qwob6esVMC79ve72HqVp7dTEe13xeEknhd11",
  "key13": "3J3MAqXqfzVe1WWr23m8W8vzS8zduvdoT5t5qwYz2BGcUsMZBmH4s59xG1QJ6b6BJiMtXec51kbohngZKx8nuoR5",
  "key14": "5FxJ38jexo1V1Q1FsH8Bh3PPu2p6tZcDgQLuNH5ayxNRpAnPUvQCGLqmVB5SZXwXhhNYrWLoedAKytK2cETHhCTa",
  "key15": "48qSmcyMdZTcHiUNfqb5wEEa9jBCrq1LaW5m6b1rPPvKrZYnveTM3ULPxosbjcxzTZDn3bpjcBCjbniBPC3okroD",
  "key16": "4nfdQdK5V5b1vLqD8gTi9JFC7tMNvLGc42MH2CaiZYuA2kENPsSwRCUZEm9BH3fsduBENePvib578XSqXnydcNhs",
  "key17": "5pkuWXST7uoJzfVZbH9hzNKLAshR4LFr6bYQcQHRQHTaPBuwLB8NxEQt8veQWXandJ8bzjPWsGv5Kek3KFyyEurr",
  "key18": "4BNB7zjdukW6LgRB3e1oVjMq6wmT9iL4RzHMow5UtyDmvJZEv9izNYzt3yKkhE3gb6nTAgEcrt8JjHR4C3z1WKU6",
  "key19": "47H4RCCM5Qik8SJVZPNg1zp7JEVAjv2MjAiZjpqkELaQLyua4oTtFBCuVnZQsXZKQnCrGytBq9ZLbJvJx68uM5FE",
  "key20": "4d2eKNzBBv9PU89iXYJRxbjo7Zc72bDNgXzA6kFHcSqA9MX6JGuWZ33xGCYyf1CJuWgD5yVgeRyTqb4gocyBrapB",
  "key21": "3uiGCsbqWoRuqhCGRNhnzjRwLASufP2Ba2z1dFQtskPoDGMMpE43AkUbbyEWioZXt4mk1PZ79dKSQ58MFonEUcZH",
  "key22": "469ChcFWP5b1h8sJxTsx5V6Jf6c2sGW4DFFaeW9zqBheCyRb9ac3dB4riyp967Lq1KRTQJsMegqLNMXYkLYkcdH5",
  "key23": "9cMtP7qCkGnKhpSud3Wxkt7nNKSpfHksDYxvZgW7kuTrRqekZvvxspkp2KmxjHkFmB1F8nZx84PHMCUrPnZ7hRp",
  "key24": "5jQ2yvupmfHFph5TXJ1vCYu9U91GpBYQaXoCKEZTVLstMUtXonZyTYPLdwW4qTrrewaYNX7CPopBFDYCzsQo7yuL",
  "key25": "3GkN92ZQEXLhSkrWAfdS37Bdv4S6tregsAqqt7W3bainuR4qNnrfwnJMP7zzN81qGAHXdzm8xMzNCqECa9tgVDcC",
  "key26": "2pfhHyDytzaFTRs2gyxjE26CQLjQT9BhCHxHukYZiqseXUuih7rTcHbpMbFjtRwmfYG4CqD4hLPL7cPKbeYT7vqx",
  "key27": "f6xwXC4CW7Vpfg8gMH6qofAbifE9kcupRciXpUiZdCTd5Wi2aYuyV8kw296r9jhBVBsQtSvQLSPcy1qbAy8iC2X"
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
