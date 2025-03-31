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
    "4XxjeG4wFw1YMA6FehGyPQ7aUKJ52atjnqZk2BU7k2bLCYwTZeuvMNoyQpJCYKheseJZgMnqovrceVvGcVjWeChw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFYMBoVUFJDh7nPYmGsMPTeueGowD9SJjU773kz8a53TDMAWTM5HKHZWAwH496AZ27YDGNwQG4vhGRJcAbQ5ScE",
  "key1": "43JSAdJEtkDd6nHwTDCsexCcpBaxLzRK4HC3momZgwENjowYiF7Lau44Lae2n33N3w47m8JDqyNMPLobfoDqNF2Q",
  "key2": "39sM8RQvy7gkyvHD4eXRrTWtLggkUqhFiczDnZ6mRbrm5WJG2dBkXVfGqgqbWVfDBxMdtxupfZEKk7A6pQCJ7Zp",
  "key3": "4u1uMGscKVbM1zJGNNCCSZs2PH7Hi6qpz28J3kFhXHfkyDWPRPUDBkVhdKTMDixgkucQJoLCx7MvBWzHMyAjcNka",
  "key4": "39EdSEYLPs1KtvyvwPpQnVpT5e4LoLt56e5a8HVhfM32eqLXWHdKSXNkMcNivsCgd4eDQpUnmeGxqe7vbjjpe1nu",
  "key5": "m8sqNymoBLb6VdvBtfhSQy3zFkPNXQs7bEjJWmmhFeDv3nyqw2F2xHgrWQXhufi2he761EdNhRkBx3ELRr8Lsvn",
  "key6": "3U175zAH6FFCQLEdA69rQdUTZ6LcCzYHCLjw5fRUqZEuyTjRySqAiFtTrgPLWpXEJ3tMib3SbdJb2ntTQGbmT666",
  "key7": "391Fp7smLYzzPaYDyvcDjeNJSoQFRiF6JchjJkMhF4shtEjX6MLtiszXzLpLL8xtVJrAyRXwjW9jmJfEn2tTzxtj",
  "key8": "81YTPrpUP3SnhG2Wcac9wVU53RjcxvkodR9nqneYCeWVkPVorRyX9ZvE9mCgoxaFwvyTokiMaTKat34FVtfgdAq",
  "key9": "5FKMy4a8H8y332audwdKUnDjNP2LBnoagZLDSGanwUB23TC4Z34S6z3isyN6Jbn78WZTnmnvJrzUDDRhxJJJ2f1T",
  "key10": "4xUWsqzaZNsgjm5T2R7ef9ZoVwrNe9b6V5CQ41BZ2RHkWkzfT3TX4L6Ekzv4AjvTR1FdCKADWf4n95RjmYY3isik",
  "key11": "2eWb3Xrg6yfFzbkky4haJbo4fgwK7GMDGSjxXt3ED1EjKk8wpdDVbfLPW3Fz91f8DPDds4mKgdECcHeT51vXjrNB",
  "key12": "RhGzb85wJuaC4M6RJxnmJKoYU2BV63maBTBURNMTx4Z1Kbzxkk2fzRRxZfqSFnjgcMTd1EMGz9S4QsJscxJGNpQ",
  "key13": "3xV7YuEduwR1ZmRGtGiFcA8s9a51EKnfaavH4zcsjjphAojEvqtS8ssLcmS42k4vKiBXSpKFvxGTAoU474jU7HP7",
  "key14": "2PvPdpdLGsZcrTKrm3K9J3aLsvAWWUJDzHHFVLeWn1vGSVJdZS8AkdtEaNnuFemgx2mGodaT55D49HHdmJYjsXQD",
  "key15": "vcMGDp8yroxd8BVWrwzTouaVCXbagZW5kbY3FKrGti5hUxDg37LqqrKWgaogE6QWkxdWhFjJXHvFB4peLHezeRU",
  "key16": "5p1NMN2hdJH4DBhqrAG75vFS6mXMkmZbyD2CimQX6zoCqUDD1cU2kFbmsyxtEnZHs2JN34BT5D9KoPy8B6eCxdBs",
  "key17": "362D6jC19rDvqvt5Nn9eWBFwbbg7FGGm7R9pieeDSciWQBHZUuqocBUu587LaViYAvuEykF53bFaT2eAE6dX1T26",
  "key18": "3bibBPHzyzewwV52sT7iiaW5mdNVyQsY5WpgrTtV3D58U8dThJYwUaf9aRBiEv7x9muhLWSrSn4vz2822cdZ4Dr3",
  "key19": "59VMdtQ9VH71nh5R9uPJiAjYBEBXfvTzMQbGbsUXrBKjn8s4x8Wf5DXdmqboooDikfNZSBb4fktkf9eVNW1riEnZ",
  "key20": "srf5EaD9RsDYK7GxG6swpV8E5vckXsRNDFQnNXxV6JzwDUwv4jM62H4HB1GXME3ZeLacxAcnR2tQU1PG2svTG9z",
  "key21": "3TARExRBixAg5EqZYhTsijyFyF7KnR8GSrxLpvZ7R4vLGu6bTRyjE5th7aXgT1hyjE7S7rxxssDAQPV3FmvVeNzP",
  "key22": "5e8YAWHxPB3eaPrJ4THebh58z3jW5cCgxCqykLmxPQGZKqePvdVLQMLexqJKU9ZDgnHCzeTJxbuoJ4Gq1cEGeNTr",
  "key23": "GWintYgPjGhfhsx2wHk9Gr1Sd9eeo3xkyihKxZefNDJ7vTp2UarPYQrUokXzpKLxf3FhhoHK9yoCK9kAQXczvsz",
  "key24": "52B45LUpXnqeGQZghj1nZuT7TgiFCNYnHxsbh8MrzToKwUUBRoyFVMGhqM1yhcno3N2MwF1TTVKqyGRePiDFZtgU",
  "key25": "5dZqWAh8VxsC5Zy7WPUWWgMXCAZ9u4wfqnTb2ncDkT8CvNiyQfNVbJxduuAdhbugwju46iRQk7Hv5EWM93wzUwAZ",
  "key26": "67WuyBTA9fz5MtWucLkRcLgXbPsr8m61d9ttZg1FxeGi1TkozVykKhcigy6dDb3fjxbkNmPy9FRnwDR7jBT5KtVj"
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
