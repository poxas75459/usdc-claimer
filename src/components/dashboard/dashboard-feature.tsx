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
    "3CShzsThgNqQk85RsE6GnxNbHcr5wx4Z3SCVWJqC6jvRCmGp7QCzXmfszUhimA9BYJbzmkhkWW63FhH1HAE8suP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JWQ3EsyCJP2BqgVHEMyYGpgXVscZNcZoek2hoQ8Ks9qaWLY5zQW5ndLd2cW1bEyMZLhYiWVih7Jm3PjZwKEg2WT",
  "key1": "3ezYZLTP1B5LvLQwkH4nJLmZE2k4NXkEewmQBspteXUXGXN5kGyHCDAazCqSDdinjAufjJLdhzZeAan5B3EsZEqc",
  "key2": "2EWb496zdn7ioUj472KkKKGGhsoePghkeBQzhEZ2c46UoQBEjKsLYnyrz5ug5EcxMg5oa4EL38uxUoiJMgLAhhGo",
  "key3": "L1SCsQzjkHTcKwTjUcf7EZ61iVZzKnqBDt3rebgf8ZqyTurdGBPbQpFHWPfhJ9JXskqyEBLo7NzdTWeWynkR7jP",
  "key4": "5ZDE6Z2gQpsDXMSfPDhCrhnnbNhTJkGCZxUFhfi5319y1wSpu1S2ZscdBNKArrQp45CqA1jLmVXmtT6xKwdjDmSN",
  "key5": "xFia1JL2nr63cNXX36AubiyqLqnuFteBoxKgQGrYLR9USh5iZnY6y8HkBLpgEKVxeNLErvMrzdJWPLGtbEGC45m",
  "key6": "4H9iGeBfnecbD3zJhUwzCsyUYrJvJ7WaVJoCbYxRTnDKuQi6TKBL8vxK8CToQyzrcbSvDezknRX4jhgiszGccSZS",
  "key7": "3NBB9akpGtMe4NrL6BU8b6qfmEX7xxmUJapZoTHKjy4X9XYcJvGXEbG83tMm2W6B24nvqK5KjbEFV9MUPmxKRVmV",
  "key8": "dTgRFuFv95yuzpQoT5BjPp8ndNN776eHhMBHJj6WibJe3NnPHx58n2cEWjMkVe7yLHMGux7Ej3AxLvuM8JYGg3q",
  "key9": "oLwvPjqCSTteR7HvGuUHtXTLEfdT6MsZ42qyfFKhmrMaDhiwyCUuunzkyWf7FAPPAEWMNyowgdfXGhyL8KsbmpW",
  "key10": "1nKmuBJjwmse854kCLyJpNVqsXuMB389MgcnY6EJUhj1kgYA49jaGC1p8B13G2Xk42qe9kYSuEmRfjjR1aGLmp8",
  "key11": "5GEHnnLBWHGLok8fuRPnt9toEiS8rMHKTTpFZYp2qTPHjb9Y2qYJxcC3J82SjkEF3iEtJtdb87JjQzfeo7doANPE",
  "key12": "3CuoVHgEwpcKwuKNwB9tBDrx9uJNB7Jo4teqL5YmowSmui6TM8UrWR7E2agesSR59zRkc1rQ4w4VKsC3gNTPVvyC",
  "key13": "2rPYKmkYuuMBhSvg94jS6fo79bqiRSSagr51Jm5JwgpTpVdx16rAhAfb5Kvk7MR4SemcVg5n9xugcaM37wuEpcyu",
  "key14": "3AQVN9ZqkZL8XD8vtcBAN7KMWTXGPirFhLwj3wzqoJVomW86ypBkTUwCDo1nJf98mAa7yY8zm4AvMM2to1AmV2jC",
  "key15": "gJ436rD3HxhQhbn4gp7mkJtTfA5ZykngQJ2cHHFYxwc8sfvpQo5aTACz5yUhCcZL3FmUEcXYR37Xhy1udxEJb5b",
  "key16": "3Yrc9GEhuy96J8DYUW1bkA2XdhXKErTMyyRwxemzxDpUJUkvwFLpVQM5mXs2fnPvymdyinnJnMUBgng3KyNavoxX",
  "key17": "57VfiESDeR9yaK1ieAEQAhYH9amRU8aQk9nrR3XCRAhLs7nDo4q9QDJBFKwLSVYxisy3UfXzwxTMJZaqR3PQDYDG",
  "key18": "vkMJj8gLjKfUtv7aHQqtMZbPxy7widrh5Thj3E9hb4ZDvCYfUn9BhLHCMbmKnqR5tWM2qVmqXsmvmgUimG4NXGD",
  "key19": "4y1H6oXRsqKEQKt7G97R7pGsdh26AM8HFj7qS6KfiyxfoiyV1DkrDzAE7wTbUkwvmppNR2pfpop6Tcss9kJzmeRc",
  "key20": "5ZggNBv7h25nyPLmMaHKxtShcUzgjpWoZN1nQ9saVTMb7bJAPkdauu7aXV6WEzBMShMG5pSivtDWvdjkkyVPvnpq",
  "key21": "4UBqKLLmHE6JnMnZK3ScuewKWX8jNZsuhoKoGWXwM94jsN5gqQCDWGs3CRCVVPSKR1naQcAbW3qNcvJo8bzmjv8Y",
  "key22": "4uewtaM96FPcQBCVq6L9dMmwTGAgRWzjtQGXzWva2TQEPdm5TqS8GFTppjf5FTUZau1g1N1YvURLVDfdW6hTvKSs",
  "key23": "5JwN28cesSdCATsNVMho7yhymq6hdZTm2xBhfyNKoWVMvoWRq8vhA425CLB6riRRkyECUtxJMZC8gadcX4A2QsaJ",
  "key24": "2KWa4yM6uoaXb9aFqzoT58GPkrn1FoW3B2N6juwrnPcLvfUjzsnAXvy7tXsuzwCGwTCPWQFUKBS2u3tBbc2QJsAa",
  "key25": "3iMVn8ohaCpzBDAmUjSzX2vqVpSesVdnxx3pTyRMSTsSP7kVkbv5vckPebysVxvRqoUY9Ygm89tTJutCfc1MSLmn",
  "key26": "v5XjTsKgTSWWoLW3799sJFxqfFcDc8WjtHTdegtV845zuvaRW7Qafe5fYde3y4vHPh8EUCgdAW6oA71xDntp7BC",
  "key27": "4axdpFFFQjGxn3bMA1QW8RLRXB9M2EE9ZDYy7gVDgaGfmPVR18bAZm3C3bu7u9bzcQ5XzUVqgrsAtznprfmQffds",
  "key28": "3yKAZdBpkYUfFhFQNZSvLfHFiuWx9iZQTJgFmfGEeoxiAgcnzDeNveVrsR9Aa2Nb7FQZvEJUyT5DSA7p3g3otv9e"
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
