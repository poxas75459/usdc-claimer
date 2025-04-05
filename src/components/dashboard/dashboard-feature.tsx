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
    "4211roNPV1Z56auPEczEapLS8r88oRZFKgmNU38ZrDJkbiGruQPQusGVxCC6zez4uxPefhCCAUtFAzELNz13WU79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rgz5eqTe6kD1cm8weY8R8e9CmqoQqhvXVYFuzXeQ8Qh5ic1pGuwhp4d4YaoSQVvTpboEMZSvMzShkQBtcxS7xvi",
  "key1": "2pZpKbUp16mJDR44hEU2BNTW8i3CvpvdeiY8jUXK621i59Gz7ehLyUF5UqbjQoEVqw8h2CwmAoeiEaaLNNmcxWij",
  "key2": "VKKYG8gM2L26g83BYoTwkpM66oi3sTZ2By6ztURZLWtqSJbQcyDNc9naBpSpjrrds1ntiKCZ5xWf5C8mNgk2ZJb",
  "key3": "4w5kHUFkfuypY8y7J1piWBFh1N6EzM2Z4BHWhKGCWhdrhxEBDgCBg8rnLDrNcLbxZ48S4ksBTcbK17AxgmwLp7Ly",
  "key4": "2Wc7NbLkS58m8oLyLvav5gFjYUKeH3BAv1wufoZQWC6aAEmLNUeJBGLBJHSubv8P6S7ZBWVAe1ZCK78A3RQFDrH7",
  "key5": "m1UsqzeLqCVXiVEhXAcsBYibk1F3fGHUJVJrjYuwFEq7ytcjdZ7CmxWgMK6NXX15xo6GF5ZBYcGZp6uoi6yNRRa",
  "key6": "24jfHT5nVvD8Zaq8wA7kqtkEJS7NMQgmi9tSngZGjys1YT8CuqEgFtJsFRN6dpL5ofV7AzXzYKiTmoWFE8BqhDJV",
  "key7": "2ufmCji5rrhsv7Q1FMT8b2S2EGgtfBmF8QTrvqX1VK2pza1GRpYsZFUCzwiB4bYSziRkTfiBK55RKtfXiUnZKC3P",
  "key8": "wVDkqRCjSsvYE2ALU89KpB4Fi7CDdwbnign6DeyTkjSrJePpzZnBG6ToxnUtiJKCpz581SPVcLL6ER9eN1t3BVQ",
  "key9": "4XEbb6A526c37zyaoRi9jTuGv45Jg8yjAktEVVVuL8fvr8rJsMni6qVW8KxDQqDG58grpSagR7VJraJadFVzWoC8",
  "key10": "ptbGS7Gcpyhw6ZSDMRnvMef6sJah1jrwc5AikHkMEEM8uj8t7E4H1TUTSqbaHkQci5tCVMMr5yyN8LPjtnxmrZZ",
  "key11": "A96xbofq9cmMLGPC2Z248rW3TcjPUHmdofLU9mhPLKWFVs1x8jScn2UUgXTGRvbSUVybjUrqJ1ZWrnKSF1dBqi6",
  "key12": "5LwJK7BjDwUnz3LYTo4PzYuUooaTHgssuJLSAWHHZ7BYk91H4QkKP8zrayM1wpPJJ5i6gTAx3RBJqxEd2z9hrFMt",
  "key13": "Xn9WWUGVzaWhSxTAETmX392XeneKUaxQDSsRo6WqdroSinhXZbxQPR9GYjmH2svmxahAauuFNzTE7SrrACTmjvG",
  "key14": "4CosLWfcXCyopgW3CMJNCYv12ASuoBKF1cxKW1zMhSeukdbExVTvmqhnTnN33LDVn6CFzjzSasKUdCkyxzXZjzET",
  "key15": "5JqA8xKSyxh3Gvcf7P56njHM3Ch5kptkgWUqKBazreTgtq8WwEePCYUcabEUxPmj26NGicFJzJ7fHCvYE2AqWWyj",
  "key16": "3T76q4UtAtUcj2B5PHfQbCCtGStL4JNVcYnusJkusQhNa3d5Y7jhqPmEXfNzzS3VBcCAEtXNSRYzgAzFHyEfJE47",
  "key17": "3SgvD7S7qjQ6B6hkAmoh46SHuJL8iJ3Jnv9QomSxcokiFdeNCjB9kMtbPNmFLEPt1Wo4jsdRAjyWHicWETBqUpoC",
  "key18": "KzdWp9EBKttCR59DFKF52uowef6hojTau367S96Gek3Scctcqqf4F9fP99uGhxsZNtP2KFVqEW681RKKGKMaYx1",
  "key19": "66Bwx55toeVSiyxpfSgV33twfdZTjyiaxFPhL1EgfKJpEquAAds2YAN8qaPXvkDuoKp4RCrQuGAP8xfzABZrEiUY",
  "key20": "3j6YzMbusUdbeTLnPwUSfCL5N9kfQEdiD43yeN2xc2hB8ujSuEbPnLQg77yTPouCkqNN7b9yHQUuLKxNmJhJNbgk",
  "key21": "4FxUx84xydkdoAchHgsyaUA9GSRud5sLuU54jehm2sKPXbNc8D7bkPNgaeuG2ySssWGxFYXUw1ZNLhYxoXeKtwTd",
  "key22": "47JR4RMXy38K5P1WPunUCJnGPDQZtJLMTchJRfxxPftWt1yN3BwuZcYy2zAKt8v1AuQ9trAZ3jsqksPoM7b5YBa5",
  "key23": "2vgpghVvuxx8NoqrJq1pR7RuzNcUqmCNAJRDhCGbYf7wn8eeR4EhC11bL1b6QYbJ8SBq84BJuxJvLZZb2FJEPnud",
  "key24": "5tWq6kPyyp8LCoU33pfn6unNeJe3R4SGW91ndhkSaE1ecossyAmsRahtjtwfcZrkHYTz6sqjbEahnnZRQoyy5XU2",
  "key25": "2mi2fPcvi9heRhhow49t8mH6q4WK42315J69LViu144jFqvgn7egMAcvBinmyZTgEWekQYyMFgLcT5GwkymVj68A",
  "key26": "5WvUZMcjMU6NPR5BLyE7vCdeqSUTe1nzSUaCxEtcJuBbXgsTmZpaQRtsEeLzDP2s1w6JsHaULFxyuPuf8WBN5kkj",
  "key27": "23xUNqU6bMdDuT8v3qYh8iSZEF22FRVsUmkt5U3DJYfDJiQtZvjdoGwYPk2MLgyJo8YEGfPD2QJRMg53bHiosJDr",
  "key28": "24ePKtWRiziDjjmst2oeQzdjAnpKgSoMk2orrAtM4iYUYLKXGzxcEKoWwH8RHrRiti34NPWcCJpN7twg6XADqVop",
  "key29": "2i8gYgks58pSY5rV9nLoZuHRwvDWgCTfiPTPicgxyH9D5G3XKzD3Y3u2b6SHFWAtoE9piZyzk83g4SYLLyGrgDdg",
  "key30": "5UZ6d8ohSq9HzBgLvLYzSvLu1hQsasvsNAA6hhsHGqyR9h475yHsx8nyNbDGgBu6JHfdy2DaP5QMt7kjBkr71cVb",
  "key31": "2PN2H9KbWcRUpXrvCakCqLAC2yAsvT5jaJCrey9oDsSU6jk9W35CXevgCgGW2orCwwxn3cyS8VUBA4mUhog7jcNp"
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
