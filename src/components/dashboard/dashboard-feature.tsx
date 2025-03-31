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
    "rZtdKXZosQJYG5foWDK8Qh32Xh9LHrPhXLBURzMPGeetwS5ABXu4h3rUdduwWzDV1eY51ajEhQVjkz3M5u7dSHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UDFXhNuokmYPeUpeHziy11mKnXALXbMPF5AXnSpLawNjU7D2yz9S8KYAc8Ce6yeFjKEwqcQ8mYYbFyUfHGwZWs",
  "key1": "4dYz5EiyT2S2CXXoWXpRmZPMwzWq5BA4jtpXvxiu3QKJJjVnLTixSsPoffGuCWYs9BeRFQAP4KE2wasZat3RatuT",
  "key2": "53vLX5Nk11Raui9fwjMF4ZSH7BGDYtxwsF1oW8epyvHrkavuRepRXBjjYRBy1rE2kxfbWZFEVqeSpoMg2r9S7gU7",
  "key3": "2jk2VaYbva1kpoxwHmiFVtocqf6YbPfoYtNMaztCHw58TqkvPQ8iUmQZZnMbbmDfEoh4E9ZXuD5kKtCZMRwenCc5",
  "key4": "3iRgnK3zcQGWWsrDtNdCkkbHzQwBqAGsygbPUco7CLrZdELj8QdxtqkeXfXfbHcEvRBuZTmXDKhW9dE6fahWRVff",
  "key5": "3PP2YDZM3Fb8YoySbrqbBbBJNthUEU9iUjFZp3zEVxBrD1RTjEd5zChDfdwRBBuDGP6oN8NPRCr6tRb7kzgFoR4C",
  "key6": "5Z1JPLN9dcwpgeLMNx2rZUhopY8dhKTq4grCNUCUUtpgY56wdRnp9MvNygw1Xh2eomqwdsKhQt2RefJcxTMtzc31",
  "key7": "2X7G4D6Ydxad6PAqGafjV631ixEM1HzCekt6TzDCFyMfAonKVW7snVhsvFXKQNLR4Yr9ofLuxk8LzPGXJ3FWzkBB",
  "key8": "5Qv8zMT1c9GpTwFdQNiaL5uTjgLZ2ACof6DJLU7zDNiB4y39JFVaKAaU1LnfqDCPRhwYctQ972iMN8jDSuBpQABj",
  "key9": "4Z7iib9tndWTifSTRVdc3V9s26QybWYrMVicdXdUix9MSjYvkTtGqJL7mpaBxoBfW7JKjx48wou6HnxY4efaLpL7",
  "key10": "Fpwfv45eUmfc8WTiWK13oyfb6BZf9QwNnvsCkBxsvEWFvFEn2tnQSXRdhsrWnKEigrutTmvNXqcvfsWU29GaiV4",
  "key11": "3ZTCZ3qTErt38hNuSb7wWexeLQUMQq12Rj9Sz26jJtKX4745r1328TugXg45UhiRabtquK9XsJMzLte666VoKAv1",
  "key12": "dYLtH7415wPv8QMYujGTdegxKzEgZHTd9w8xrctcZcVF2nzcGiXu1ryVGogEoAkYSwZE6bdp3tFy1sQTzDgPsoB",
  "key13": "2UDnyxxurp9SXsjdLbnKjkfK8r4XEsZsGWG6r3RttjkG5cWWs6ho4WaaPftR2LKW9hjKY7rUrZ4da7prbBXhQVZP",
  "key14": "4RAEyBA1kHpMSSU5w3mtZVWVBqTeRZGWerDgFcos1zbuWmQ64xQdyYHU2jwV1wCrusYCfAjeh1UYSh2T4PiDjw1G",
  "key15": "5L2YurKsCMgeuEzU15uVAJLtvHgRT8D33hoKHtPGarAcrx64SXktR2x4iUjp3aEj3f1g4k81pnQ4EP6J8X9Eqo6u",
  "key16": "BJDp2fb3oEhTPbBaXGfnPJziC6FpDGV4nZAmpQ4qp1ycsHzm1zzycwvNU3HJ9J5UYqni9TuUDbfAhJjF51QkAUK",
  "key17": "4X118f22HsWbGM6N9UtyjNaVMv7snda6K9JDT9wXz2GeigvgjK7ccMXvY68jWtE7KjjoEkwUse2uKaiLgrVdBZYP",
  "key18": "inSksM5ofN3F8t3SGnoXsSARjBKmHHqCvb813KzZEGjCwLuMimgmnjHSQQ1RSfUEEoqSW5feYtRERLwv6yr38PU",
  "key19": "4bSMNhekSfn8xXpoj6ebFJDGxkzaAjNf6wh4Q2pww1bSWUZsHQqLNDwQdpJ21bGKTkYfUuLxnW9xrnBPnEQ5557j",
  "key20": "vbSkjokcAJenKP5t1Febj4CrJooGURF24V6gYtBpmXa9u4bFYsuKuaCFukvfmdEkZE4nrKgsisAJU6kDqgrx5uA",
  "key21": "2LwfRq1pq45YiDWwH6Z1ciEsZDu3EB3QV6xTHFuNEgLMtenD2bA9QWrotBenQUqkSW2bAUkJyZB1mRpkxUeumaDk",
  "key22": "2UdGEsbY8icmDkaQvWB9cwbXQ4ovrZutUKJknFUPvy32D2pVV5kFPQh3eFZ1HcBkdgzwDLXme5XMqtjf8atTXqFS",
  "key23": "3BNbsuhy1LymX73a2sdL95NJfHa6b3PXBJYEtWaGqnZLZGj4VjKeGuB1946N6TC7KnDwfNNmMRettZzasdK7DGKu",
  "key24": "5B6e6aVyFryqLjDhXQoUtH6YZSATLCybQEQBvWG236grDHnGMh4pvvBP95bPV31Mreqwn2HT1cvkpKTLqYs4BKyK",
  "key25": "5GtgTJaSQ1GCFFpYTCguqMv9BWchSvMmh2kY1n4mSVSYEiZZGfeC7oRMK6BktA1LwG16MrjZGoHVjjKkvMA6cjRS",
  "key26": "2d1R5Joh16F47XkztXgouvapxuq6V2xYF7DNQHrz7Lc2tUN1oxiDfJm7UA6dWDVuTodcVciXZSyR8TF44kyZVchF",
  "key27": "5KimSdG8XnqsNQpUW6gaL29Jq1yJ5Y2RnvD95tN1QAZG5Dp9KjzodnxgnBztbcpQ4QbKBFfHgBekKomvVMyYDZwm",
  "key28": "3kepzvbGhLKrchSrjG8aK3i5H7u4iYYwBcXYDvVZbJNfRuKdAeZzuXbmEdqArFE3hZ9mLvkuz6z12agXfLiWZZJ8",
  "key29": "2TsiXuWLAJGRRgCFcZuhWWCtBA55U8patMK5NoCFgJZgUYEjnkbQc8sUxX6C88QUKQ37fLpLd3WjbQCA5avvjrko",
  "key30": "SjYtpf6nQSieDjdDBQVCu3bjDiKdL1egR9SVtv1kVmb59oH72i4Xf3MhRUE9rxS2fbijBEj4UCZzzVX9QCEAbPi",
  "key31": "5gh8kGszgVHCAYLCVMDWu3ZpZ69gufBuucCVzAbeUZL26h3HSHo8Fdr62Vy8fBRowzknX4p6tmTRiF8Lwy7NZPec"
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
