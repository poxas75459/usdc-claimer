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
    "5kSTXAZQgjvmTEiTCwGtGDKCr64aYY9MtjbNLxLjfTgtsoB5G4dpG9Z543yQCGuW55KbKjgnt1FzXyBisiSi5yf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fDyqrgmAKMxjwQhdbnJCH7euhDyk6Ec2F4Tfz9dSR5YqVGVGr7fA44tzmE3t4mcAjAQLo77WEetNixm23AQsn7S",
  "key1": "5oQm5s3Us2tcLWvjMb6RtvWGv6hAE4fEt3edyQupRUouVmycqxXiGub8SMehFmxWTbxizSdf3uaSa7iz1sFt7wPy",
  "key2": "3AR2egobNjiS2FdrmiRk4cL6WNfocAHDZS6196B1bCTsp1VRfLy2XEZfAwn95SvQXH8rTGHAQi1kg8ZoKaKSsYRw",
  "key3": "2eF6J6Tg9KZ5CFs8FNWwCRY5MoMUTEfQQ3v9euENmL7uA1wZq3GhtwFNcxwTbj6H3mPmZ4sXbuSaECEz1uxEEiUm",
  "key4": "3hGNNM7YNLfNXHenQFAG26cHJNZRXNoxUYwA4ME19vP2YU93Ybr69WJrwaK7TQtsfk18esxG3c3dWDYsUdKSTdEM",
  "key5": "56LRiA4RN9b14LhV1Pr5k7ytNuJ8ATPQ6QmFDt47R3JU7btF24f1Jt7hCruGHh5M6wXCFeGaDtVQbUR77csPdzfK",
  "key6": "3E9kRdM2ATqmvWNPMHHu1H5p9dMZ2y7fCGS8UVPqVGFd8U83ZPm366pKrHxgNgun1K98nbedpXbLNMfAzUuZTf7G",
  "key7": "4QGFiWrPrkJFFcMRFn3oU2LYMu58uBRNzGYg1QQtnAxtvnbBDsHyHoxqhnQkF8fBfo6PNvePVe4mvP8h3HbVB34x",
  "key8": "5oYjh8XrqwKHTw2jT1QBWFMx4Lr8nsf6Cjz9eCp9hwztu1hTKkuNRucyapfioDav4fTRKGARJ6WLPfRK7Dgynoux",
  "key9": "39HYdi3zactunELr4s54U6GTUguFX9QML56cGnyDNxRnd7K8x733XFPoHnKo2DVf5BKHWZsRPseuikoqXiifKz3s",
  "key10": "3yzbFh6ZS41cAvsWioqvLFvwd6v3vMNYKbMuc7q3sForZ8araj2BKXmUuZ2q28PU4VfhkuSpkmystHCgsGHVFwYt",
  "key11": "boyyJhwKVzWmqGpY3BrygS1pwEYonYPeToqfEQxPik64dZ2At1SLKKDD2np5VmaoPsDi3Ujs4LT1M72c2ofY8HB",
  "key12": "2ZyMQ1nEH9zfH2juLUYrKJPnLuSfY6jScc8MVZAJkTMXLHTSU8XNMciP67ttSL4TBAS5XR5v86beroYEdp56SJcV",
  "key13": "5T76uCMZXXYimoc7tCyVcVpDjbeJ7Jthx9dQkeGhhxakiausGVEWBbLExaFgEXPiTqHskQQmgPfopbEkNzNk6qyw",
  "key14": "SesPChHXmC4KMrjwWnrT3yN6VQfaEhmkFY6Fq4cS374DKhoPVB3zwmHr81knBSPmEtqQvnJ3b4eu5MPbm4BE9Z9",
  "key15": "5tHaRDSvZG6ktfYPbgHMUDm7bJShnrqp1y5TD8dCou5gyzBRjyuCiPnKcaTjXZjfGWPhB1mLv1WHCSUgm86e61W3",
  "key16": "624CLTVRiNYZ47WKY7Qey6bVPuyYMWsKWNsuqi6coaKvWDGgeHi77nmW8jVjzSTW1E5aDeakeTE3AjfCN3adZrog",
  "key17": "3TPsLfrC912mxj8bdcPuYNdT46aEhE87goYRy2Q8SHz4pgcAfSAgkWLy4yYxfKAEZPH8dmAUeD3GjBp5zcnUBz3H",
  "key18": "5SWSUci25kAsSoaZENKjXrYkskcftzo3tUyiDNKQK3C6d6xnNyPwhShvh8NGyVP5BjGNCtQm8VoH7PzUqz1sKZkb",
  "key19": "2XwRjm4W41QyyyHnDLTe7moaZ5fgD4gJb4jdnVMupF1AsAxqsAWLMpr176BmmKdMmNT1Q4wnPSfTVhgnWn7PX3D6",
  "key20": "5dGHLpc2F13he2fH6NKKZCePpLQCV5c1EoKVV5Zv4qtX2i2B4Xa2mocX84SUTB2LnLEcHF8zWemts5k5UED8hSNH",
  "key21": "nTm9vM8GVj4eom5Y9hMzm5zewQXErucg22xuhjntNuTthNkHjxPKPSwAkmifi2AawciWfow7icUsPiJYFx6KVK4",
  "key22": "5Zsw2yUEQnPSAwp6DDc5kuS4gB5hGxJ1eQoLtDmrRmxX7omq9XSg1d2Mwfe4uLXemxk6AhLqsanUMdQW3b4uSsxF",
  "key23": "5kk46GgaJY6PQ3TzTYkqiWgh2oqUtypz3y3iWPMErCTMzvsXm9kVfmVbTLwthVqpNdqZhmjW1wSY5bb1zEmEJf2J",
  "key24": "4HWH2fRbcF3zKM6f6Yff4fXNyxbTNsN13RtvaY2GDEMWsEiJMw5stX9s4TDqjqub8oGBsSBCYmcw3JrGsYbTo6dG",
  "key25": "25Dq8AZ3aUgFHUhnjMM6oNV92qE29RHM8BFFBQmTbMbN4HMDF1YTM5btTS6vNPyqUtmGQMa9AG15jrVTt3fvcsqg",
  "key26": "2BxLn7TsdPeZjaVR9PLs6GpPHt13UibuVEkqDzX9r5kBYu6zVsbtV6JSmPU9NRLvXQ55TrCh2KJNJ2geDV8vc9H1",
  "key27": "21aqbuRrKfsNX7ib1kCToEaSd6HXbAtN9Cmoi6AyfTTDSrsNMFDdawD8TbWBiBpiqZytjppJQ58bmmPj1vtTZNdS",
  "key28": "2ec6PQT1VxCK6rqs2Zih94ZB8kZtYNwqn6wPSyiboVrL1pRiVtMPqZC2EVrgq7xb9j4G8F6X5MYvUgzVndzetZC9",
  "key29": "24QsN7Tvz6xhQ58YB9qQVQGeJn56fexAs45yeyH4T349BfdZrVHX9RMF75SpbW5Z8tEarKQrWWK4CNvXKYyr6xPw",
  "key30": "5UuP453Aznv9YG13dCGjo2G3aDB1WCSQvbsc4icAc7EZfJNHc7bUft68jeNngZs55xCxdS7BuJDAJ3qpCpepAfjf",
  "key31": "3N4wGSh3heBGQq5qc9q4EVKAkL4g9d6ax5ohq4EHXgsSQgKCwj97e8x1c5U7XUajUnfoTaX5oaSNAhugMwSmm8ij",
  "key32": "2tssSr7MY7ExeszYSeH9PBbMUdkqgHnPzzX2yL1vVP6bT3kiufP4F6dDDYg3S8pmJBud6SNirSVumQkeCtoKdTYD"
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
