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
    "3xWMbTDWewxn9Wn8jmVmXckRbVsCXyUbPh71Jam2ybuEU9HgnHgpuT4W5sjBJ3teJvSJ47pt6Dq4F79cUtvgvDzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SmiTQzLdM4C2qLsKU8846X96KGSRNL1JukmNjFkiYos9FgG2hAgYKwbXNTzBf911bLZAizNetK6TFKrBSg6LmNZ",
  "key1": "Qr1fxJSwN6HV78dknuQXUcg4KSTeAP9wvWiATkbZJJHRCAzG6CKxZdUCeqJnmPSXy31L5UfVYvinYQQC2T1cQs7",
  "key2": "8Wfwnr5RCTDZ5zyEUDtxAqGBZQJyB2dt8mNj1Zd2SvQ2CHRdkeTg3QLdEvM7G1syfFAsKGYJkd3Mej72aG74Fuk",
  "key3": "4ErBcWDpygNXWBg6GoXfHr49i3D5sC4R3AzsFUnbX2qKsnuNJWurWh6c3r1wntRDHJjEfHrsybEfCJ57hnMbiZh5",
  "key4": "x5USVDPPALuVpSzCu5dttEGFF7eKt4WKPxcmXqhawaVuenM9BjXh7ATGNbLjZj7VPaGcchQH4N3jrW9J9LvGZBb",
  "key5": "2BrEiMW2ce2aRwnNKoicdqMonzVBZQUUcVD8d8yW6dGTpUmTbe7QEYwPGFGCQS1M296KMAEHaroU8txCFGGtVd2Q",
  "key6": "5izCTCi8fcWVLZKPBh9Befnev8raCFNoJNt7x3Zi8TDsUnLoQdy9N6cWn4NPoPY8B9HFH6QskirjBXQNx47JmRbK",
  "key7": "4kDDKw1gg1bjU5eA25eeTu8RuHfgsW3t5tCrvwz8y1MG4mqMi4TppivokbFjMxMEJRvrhDySDBGTrU8EeXwa76bs",
  "key8": "W54nETETMPKj3r612QLJLJpumSvnQSth7PTkchf4c56WNDTUUbeVjexLTdhEX8gYxvjMuBibQzYKSXsncrmGcaA",
  "key9": "4uvdeHSGppKXpLid96EhMwggL2LGhVABTWD7yHQs9XDPeBesEJCpCrN7Siv2FDWtBhkarpg8HUDu5LYEwTDogvEF",
  "key10": "2RNhScBNrn1raptQbP8hmrCBexVa7DtLZGEnBFFLSQRX8uZp69wZXLqVn5T3GjSdnZhHMTVRsh74r3nNBP1Hz6NU",
  "key11": "4VJSdFVyN4VS2UKjrEJnSMcHvbE12iyYF4GfEC1K1cHUBy6eMNwXtm6yEXXY5bsuz8yNCNJyTG32EEKUuYJ4yxMs",
  "key12": "5hGfS7xnx6pqYwaSer2w3Sd9Jfidm1D1GkGBej9hhF6hcezQogNmbDBTCprGWMvXUJn7tkUTLQHrYhuoGJgSjtT6",
  "key13": "439UNUFVQVJrKibHjMD3Wa9jWhifAMmw387ywCkWyWheYqu6jFhGbYdJXsrVEZ85uikvvNQsfA6tX4jB4LA3bMmx",
  "key14": "359bTn3LcaTh693kydLSvG5WXdRB1xZt3b2qxjwX4q7aWVN8YSRdKa8bVF2EbsUBpKi8fEWiy3jTcwEzQumFkBN5",
  "key15": "rde6UxxPbrDrqcoUKYekNN8GnsitjemFXDkg7bV58HJBixzYbaguzXYAQMvZ9LBYYPR7HxeYTHyFzBwYxcB4xZW",
  "key16": "3g3UepJx4Bv8m1TWCd99bFxVquD1STmGssivRjdWjoonier2eJUNbSRLWLta7NFDNMmjHb9t6T587KGmwMA3X8tn",
  "key17": "4t8FA1AXbWGs411NR1xDamP2jx47PhFFbV2Zw96zMhh25v8wRJY1YhWtvCQXpCMy4mhGXaTiL9VtkCFv5DVPbgjG",
  "key18": "4CR5bDwp1DnQC7d13nGsrscetWchaX2CbYtxqSt9DsEKizxkDu55WNzAejEb79WYcK1xDDJvwXwQacMihxRmFcnz",
  "key19": "2kt62VMKtpM6DMW2Swj4WrNicfsnQ2jpDs6ctywuYS9QCJNmmwBomtz4pifsDcpJcC9dVXGk4rEptv5rP3R7QPQu",
  "key20": "57A2bVnYmBDeBjMCRbfHu93Rei6HR5echUMWs7gL5MLWF6bVpaKuJLUAwjDWN2rhGQxvxo6mHDZkYJJfEXw7YFMn",
  "key21": "5pst6rr7wBZjUrAPGgtKcEYVhaiP7GkKS9itzE3SeHYX1nKGcWwm4VYqSE7MjomKzpkvyqXDE7r4HTQfgadXh9L",
  "key22": "5gtZ9J1kSQg6KxYnb1jbxngrwSoiGnjtKPqUMywZB89ftJ6f2VEAcGGjgmVW8G4X36WQhpkLLMcAGgdMY7HhbKg9",
  "key23": "2zq3WbdckC4JPaGPmknZEocLNw1o4cbDujrQJNLX753ykTkxqB4jyrvPAuHDoYEVSaVJFHysodSomKjEz5fK36rj",
  "key24": "4SxUnbfK7PxiprXUz2LYDYP3oRHGQ167CzdniTkWYHoyB34n8hNVjufX4LxGB1gDG6PhwbUyDAHLUz63fbYJcVFu",
  "key25": "gcCUwA1UiUjGPs2wa8fqcUxZRpyKbjWgU3dZHhW3w9mVz1rsZt7ByNaVLQGHaR7EKgVhUdYb6KfN2UdZ4FJri3g"
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
