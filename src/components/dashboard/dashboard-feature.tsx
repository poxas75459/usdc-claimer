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
    "3aYaRjMg5saDMdk8EjZthHGcfAuCVoT5puJDy3qemdu3b7crv8usGKHZJMzHJhSyEtikFQYt93uqb7yoXhv8Xro5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEmqNiauU6Kcz5LaH2iUEiH5Q6A6H98qa3wbTp2JjP1Sv5V5JtdRpfpXun4616ZqbYyijSrAxTERx8w3yUUNDs5",
  "key1": "4qwtFA5khfP4gDYzzTqLajcFEsGjhW4PHdfLXb4etUgbL8bTSM9qUnZWdPNhvretMg5WEnsTTv1mGxJ24LZNQHDE",
  "key2": "4EZRCfV4KUwWscK4ncNEzFFHCVpcHyWouYeBUQ4kaVYviPjrWcbmXgXCAqgkWn4VZXz2xs5hXHqkHusTnAjJufFb",
  "key3": "5psfgyrjhNGde4oL5uK1j1vkyoz5ftrzRAQkVqgURd5MdW5CaLmVYrQEvMZQUny13Ln8nKjgS8sMhNjdnPEfCLZz",
  "key4": "58XmzT5TU36PEYLkWdUbhDsk1G5QchxX7YzDmqYKwNUcFbELB3WeWPunyDpwfrjxQ2e1wZ4QWBFcY59HVE1v7ftX",
  "key5": "2YqDvTPRZMPWankhQJJNZtjCukTcLvLVWQYj6SEt5o5hedBjXME1AydRLrQtG23j3EGn1ZKUT4Rpt36sETMQTUjA",
  "key6": "4FcC16MSYzQY9YUz9Lwi5SVSdqcmLn3yUZbbymoNN75PrNuHMryufb4Fz3jaGh4KFiM46KSGvCQ3kEUqWAMGXp3u",
  "key7": "2N4q8uiwpNJbiJ7v5Xto7JR6LvU83nY3fFP7tZX1Nz49zJRNzUfrdZWMSvPUHSAguVxudpRRQzP8rpFg6Zxk8EN1",
  "key8": "2yPTm8amHnm6nU5fqLz2jXQvV2Xok9ppikKepyRJiasrr658GdRjVcomUFr7LY6Db2Xczp6nEG5pmbPqFHVFwj4v",
  "key9": "4fT1z37qhymjCx1CDTaLnDisnaxvxYdkQ4CxM9ERrPjU9jH1zjyVUvLvaiYc4n68sAaSv67Wbzb4xpGH5e4BqXMK",
  "key10": "4amP5EhVGNQXiF7vLdgGV43dN2o3J2YCj1DsNLB34s8gBJrjirivekCPQZqL8vsoKEsnYuFmc8ZAv3yr5PLibpKo",
  "key11": "5A7Vw7tFL2qUamGQ8Q8iPH7Hrcc9wLZMyPiQed9LjDSmXh42rGLLmMmfH9oRYhYHEMvaw4EtUxhKsEy4hnAx5yLt",
  "key12": "sscieR5dhprccYDSQMjxY4oQgysSb3TR5BhwJVygDoKtVCkKK4f8KqvtVowvi6eSHqLUEJKHQqW2QSGw163s6vq",
  "key13": "94dpiGT9Q1dSK9Yu6YsJibTENYi31zM4cvEgmdEoHVTcBAZq1xaL9H6LVRUDmmXm1QkUUepYMQkXNRS9vSmSdjV",
  "key14": "xE5ss1LwnCjuK3bY6PRg7nNx33etVZ4fr2bbwpj3sosSiYC4yti8vnv7vwi1RebCA1FCs5JmfFEYmUeWZAULr3P",
  "key15": "LpNyyUxNBYZ7hGGSNDw9NmpAe3YrckEE3jK9aA5K4TvQ3qaw76KkhgsRzviuwKJVgn7CTZk88uu9jcRUQtUhnbo",
  "key16": "3A1SJYe5jLP4R12AaR2GxdWuQWaJhuQAUKng4HJE19VKKv6ssEfKpgrUJtDDSoi9TUyfaCNsKNnNH9V4Pvq5BfPQ",
  "key17": "jsyYsFGunrsHAWRe2o7qxhKnbsBCUrgDWFCUuPa7F9okL2unSNumjxMwhHFJQN7YYfzXChck8pbzR53o3MnzjdB",
  "key18": "4BP7CAsjET8Y3e8yGpi39a3HeTYcGCBX4uBEEM9ctKMt4CT9ZcPZDUTmToqgZTKxVds7bmPi64XbydnXGiEf1R3y",
  "key19": "3bMB29Yv6CrYpfUifm7iN7C7KNkHovn6z5ymePMHa9dNp4BeeAVJaGc8G7vpZ6aa8o95AMahVNAn71YTYwUYVV8K",
  "key20": "e8eRx1nS8nLTeEmpe338UWnxQTdRkGzrvgM57WvTsaxGZMgyMEuFoqZm6ubgEGtKoiGxACkosLr5d6ReBhwRtr3",
  "key21": "269fSH1nnDTNDM1U7gmAXaFGDc21iwZpFq17J2LkK5t3CvXhEqMPKg3JwmCLrekkg1nRjScE9Zj6bMfBTxoLGfPY",
  "key22": "4iwENPEenxfyweT9HeKyb9q7VwScgY15uDCK557jTuGN3fp1mVWXgo3f7GShBx5jdQsotL56AzZ5KCE5qKgyGsR2",
  "key23": "3B4cTJfukZKQYk9G85W3vLcREJd7H3ezQP2u35enpL6VPBbktFr7hFfteGUGnYmDsYTTjcBfAEAz8VCggjyR4YyE",
  "key24": "5J2JmqUpswiwDteh4cvSkN83VGapxw8MaDfpVQaHPGSoeSaTUHRYkKqQEJ1fgDMq6gZAmCXSxeUihn8KUPFFfirQ",
  "key25": "4cas8gfagwM2qE8A4Kt4GrmCmi2XUs3hSPSnXkEQgNJ3KdR3kgoAfd7bjTvvd7JVrR8xhU5H9HULYnpyiVR7MUV7",
  "key26": "QEmsxhb8d1L8o1ezEqHPcmW6PnP7cYnjuaE1dZ4Bjh7AuqJZz7NhS4Y92aX3Hrm28H6avpB28PEgquJm5F9SgUn",
  "key27": "JrCgTxoRpqxx9JVxaHCe4eoLpqM42V2WpnS1eRuLggDKNNoofqmgTm3eFdSXquVbDqTZdpxfXVxZJhWrT3UDu73",
  "key28": "5U1AFuQZFFv4utwz7QoBNPykBJnPH1QT6s2BR4M1cRYzTH2HaQ737shySMydVDe2UvRv8APcxFdPC1vedfNu1f7k",
  "key29": "2rSXfo3HJgk9fSd2kPZ8N2RsTeF8qjoiYsYemK49SVcaaW9o8UaXHBsboM9Xbr9gF29ieTZHauptDmXPxoRiTwJj"
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
