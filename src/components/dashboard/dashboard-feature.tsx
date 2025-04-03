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
    "62pxvQW1uidkGzpBKbJJShp4iQV5c4ze7nxvfarzhtp3n5nu9YFGE2hvMK7d8rN8YzaDfN9LTGM5qKJxmxqNBR1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48DjyvuY28NA6HUHVb7aQD5Xe843yGeByXo9xJ6NXKdrqKKQKCApvuX64VDYUXDVSMkQ5XZquRxqyBvR6F41jJXH",
  "key1": "4435Rc9yJ1d5ZMr2qcQn6HfhvbJ1Ri3k5HyyhSW7BR89YKQNx8T4S2qND96ywLUXHpGJnR4ubwkMvGmypYWnmPA6",
  "key2": "2Ng3tAosfDZxg2ekkZwMcH6nJjtUkbJeJkdozM5nmbEm47EC9EWh6RxLQhFtFqTBnPTGC6t3KiRFsVtHnT4D6QXy",
  "key3": "aCtvB2vHdUEnbmVovALx53HvF3ZFJEUDZe81MCr6sCX5w1PQs9QBrxJDMS9dNzwJQhnfFbSGfKkvqhem3rBGdmq",
  "key4": "2NMC2HmAe15wDmPSSrzNvsPq91LTjkVpGa5vMrTxbAHYQtJm38dK6sDuuC2aQJXTnQtepYG9yXSd6HviGW6ebU6P",
  "key5": "3wckGHZaYv1HrZA7uTUCzWoshS8R68hRBUrgvJCbZEGpbgNdoUMA8C4DCVs2FvF35ntaLSTKg4sDoQsFnxqiMUed",
  "key6": "2WbDR9TdSuFieEqTb1v6D7h43T5SHQULAzp9AFUNCVesdLRG2UH3H9YfA6homfcwA3WDNYyDnTEa8urqoRwqEbTy",
  "key7": "55q2K7mFLrRzgXs2FUXakx52oCFWmv636cgRwUbB1tcjHTSv9RZRxuLfdbdQnNqKLj23QSoHS3fCvCCmYsmocJ2w",
  "key8": "26aKAMKqDdMZ54kFjaUdAVMHHMB2kjDAHQ3Qnc7CQZG6ok81yLwojk1ZbnXDCrTBJotLKoAVviVkxj4ayN3VqGrm",
  "key9": "5p3hftohQhFVmTUREfAppAH9HuJVSBA3fUJkN5LPGeftDnYnu5RSFfmzuVA3GptbCz9VJ9dvxKYsBijaYH2SN6fe",
  "key10": "3FZVkXzFbo4yhVzbsk3pTwP8aMwpSpZrXAhCBErkiKqaDqHw2N21cXL2oPAg3utjc9ieWqddMT3LTrV6Dk87hsMB",
  "key11": "iKzCSfNoTMo4LmkqobaJPnJSrFDoA78oHk1myJDH5jYBp22J7X9SuEG8tGknDZ4v4kM8pD7AWqgDd7BTjyBx8g4",
  "key12": "YmZ2MVdnfKyRVXVvdXph8WPfqqhZ75dv11kDyc8zXGcyXqb6fQ5KiDXKjFv6mt6e6hdUKz8EBELyk1zKMSvvZwR",
  "key13": "2x8i3hmyqZXToyiuZNHBV7tMk1rqapxtntZapK6p1smAreuUwgtaD3vdJUdfZZfGFSxErFSKeiRKGiq4N3L3ABBB",
  "key14": "22FEyCcs4YXb8DL1uPLULZmYhvCSynwbQ4Y2kQYBYvqSkrLP5hvYASagPXmxgt8MwmgRa6NWCdYuus9URszZCwvD",
  "key15": "48SCAk12gApE1TcSthVy4WKzGdqurbWaebppBpXzcF9wSwfmie49KUiYgw6TQ28TGZD4EbkKYroiG8DDLEEV9Zox",
  "key16": "5EwtVvGxzav8eX6ahndb5spAPsTyKCuPVmdchriHTMAi4uCJbYe58V4iuMLMPEf1wa1w9GcHPRCjGYnQCCPYGbvu",
  "key17": "2uypyzbViJ7596nJSQDUD75U7ZA6HfXomWX5Qj56sWRhGxCRk4diS2QvpyJ9nrH6QKnWaYTDXeCBJ44qHGzGxQhZ",
  "key18": "2RhcU55j4WCasPXCKEd9ugHB28DDJ46bELg3VV951NZeLFg7apQJ3YLddL5R8LSv1Me5RxgE7qzzG4jyMAjauqoy",
  "key19": "2NreEVtJjMpwvxx22rsdSyxbuCi8DtVWkXBzx8uUZmJumWvF987qkYjo2caX3TjtJmSGu3wgt1Wb5uyhhSa3J7UH",
  "key20": "53MTymhTHyjiNEzqhZYss5o2nq5ieWoPDVsaBdGtvpYEdjUNC6UyFd1YccuemuTWNs3PVW2YM3gubue2rWPgYxm5",
  "key21": "3FMPeit12HgmQp4kxVG1aQ5hnyL8H6PrJWW5PjnUPy98rkDY6nFgvU5Q3LuWUnpQLpif2SP6ecxAazAosGmEUUne",
  "key22": "22FoEXk8HJ3N8QRV75kL7G3jxEy4zp73Zo1FAtffCQeKryd9wDZoXZE5nMJbAfoQ6axh49fZJPNj3RWfvurMJNJa",
  "key23": "5Lp2CZgtksA7wPBnPSsVkDj87KmbESHKm76d8WZujTeTNtCz5NucPxLE9kNf1eTKQNJ4XMFSPrY9ZhVARzoxmZyo",
  "key24": "3aqiRkjXqoiosq2YQKouqXrFabjv6BYH2rw3S4bjBHyTewFzNFoWFgsSVtHRncZL3rP3zgMuRrM46LCRnvKd5y1D"
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
