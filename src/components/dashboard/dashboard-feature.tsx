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
    "2KtzkB8LJer7WZMo759FxihSwkvuGND694yXiUtWhFTLfdTMJdT983aPCmTdpYoHcALPkEdEGoKTu4oqnVMhDY7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UNYzmTMFFX3636kvEY5b8BrBcWwLREKmmeKmTpGr9x7Q11XW2JxE6cNqRfdZo7LuwwyernC6fK9S81qoDY6miqQ",
  "key1": "3NJ6G9xhkKHawott1N6wh5yWTHqh5ePriAMcUUh2Aq5eXLVBdzDtfGNtNf2dxnaPLgeVBzM6zvS2zK5NXf6SKMmV",
  "key2": "4VL65Kcer7veYgKHuoFJEw1vYkFdbfc9wiwox7edNZ1k4os5KkmjA8xHqb9HPVFaRdzpxsAteuQzP1NHeTCDJxHz",
  "key3": "5bm6MQtavnqenSUkGYRq1sXpjbmzbq8mK5dwxgy5AC9ejNBkWwfbxMiUkDZxjRf78WwmjyYHgnVwSG2BhXq97rhg",
  "key4": "PUGTfLNYTdVsTdtVGnUc1nk5C8WoHYrqJVJoePWSgV7MvRETakc7PW64E9pT3h8qtgAD83JjJ6jr5SNzuffiYwh",
  "key5": "2R6GcoiMhKzGqRvYGuqGkrYUx5UAHTEMTUoHZYfJzCQtvjfwwWcFmkNHvJsYHRi3PwGmfTbCg7AiKDjpJWysTzzB",
  "key6": "5s4eP5KETnqd66PWBtuLy9BrUR4EUT66zCA6fCFoNdJjgada4Gi8kgmgGMQaaGysfFKFdQgZGE5Q4VdzKP2TTgHo",
  "key7": "Z1Kw8PJmJ6j7ZCuP4buN6a54zJwT57W6WwwVxZvCybwSP1bXNALrz15x9AQgobrzMtXekx9MFdVf4hT1RjcXr35",
  "key8": "5DTKTTknENkvxaDAR28MKiQK7tL8KDH9qRgBT1UdqKVoYYmMQ3X6LSSjtTK9GfxrbtQjStHiPR9G4FbdRYupNwTC",
  "key9": "2s2HTyRGpGUfQqJD9yzqBJG2ha1YnuEjRJfGTL1PQqcJsQDqaZ6mhbLKQLMxYduXHUtkrTx8Pqd7cNRWUJ7x1s8t",
  "key10": "368XpQEssyhStCYBPuDy3fpJjDmWEEaHJKq5L1nrog4c4pf7DBCBtus2Xj9TDQ3PPRyJcJD6brrmJjPTfNym95dw",
  "key11": "63u9pMJ2dziHmW91s2y7Rcdcw6Rj2mQoX6FC9oUQdeYCEzr6EQ26KRQ1g8Ue6oSXpwMQeTNEuSNuWCYf68FUsaVw",
  "key12": "sYgPLV8rMCqEKc9EzMT86aniHG7m5fwXT53CigE6C6ywYLZcxzNJUTqxH9CKQz6yAWTYFzvR5ZVC58KvigQmmW1",
  "key13": "2CwLaQejtFbYDsLqR1qAxZkveqN35t7TUhDomu45bhp8yDPhdpqtnZVrudywxhVbMpuivF39KFn5vhWUvNCKaR3T",
  "key14": "3Pc2skd9GfCC7Bs5vnxs3SgUb5Akm5rehRRJpNyeripgqHQNR8gfsaetsP5LFvfCFXjNMJT98hJYuMdZ5MXQgepB",
  "key15": "633ENUP1diQfhRRT6e6ByQhVeB7nzB3519pEvjca5L2ihS7pYVTXgXwJS91hjB8DVj1k8KZLbnLsXbSx7MJNv3YS",
  "key16": "45qAhTBrgYYKcXxebHfPq1Qv9L8Awc9KpfRRLaXANka6bxSrjeb88aQ4a4PxoCTiSX1NNPE4s8GcipTM1easCbsK",
  "key17": "2NJU2TmwPWXCW9zC593kviycrQkS8RvDSH7y4sHpirNJF53moAX5ePLrKNSvwMRuHZSu6tmBWUF4wUVzrWD9uATF",
  "key18": "Th3oisbzuLRDxWcUNtkwtaHWLF6Vr2Zu85DZnd6gezzr84KDCuda58xrGCF2vBPWJL9RzgWPwN8UwNo7xNDma2N",
  "key19": "5LbZYK3CB2iZAGFQTwCKWKVz7zWsVGJZrptwJxsMe5TFTVcZeiiiZtFdYcinQeu4TMaJizVZ8NDZq58MwB54Dhfi",
  "key20": "59yZW39NphUpoAS56Dag5zhQ1WZNknvaj6Ld9oJkiPFajyVvQkJoBg41HGbXhkKtJYivBxQG7ibMLnZmXChm76bX",
  "key21": "4rMLYUD3mTtzRB7qcVtmMaLaH2D7qsUYMW24zhm5nRoMtzfH43yejHXm7APSaCtURKpBuFnrtcMsc3ye3AmHHZ33",
  "key22": "4A8ppnxo7NZuLe1g65292gUqQGZ6Vz3AvJH9hYdxReCJS2Cdc66CjdsgJauk5WzKSboRsso56CXi9jXmacgWjx3d",
  "key23": "2TAN7NAszrzbxvPZsB7RB4EuxZmYkeL4nrqziDTSuC8YpydCPiqnoXpx3YwdaUdDvC5ZUsP1cqmdCBZMPmR5w12c",
  "key24": "DhT4FCEQxf44xysfo9Q7isPNB5aFsefQZke9w7yAKuP9GrUw1H8c8bDXMimDAxXpD95jmxpC8QJDEnZ5Fdw5EYt",
  "key25": "3Lm2o6cGYdG9Ms9FpffsDo1t2BM6pkkD2jux4bKd5jbj6sdvNWaF3BK6iog4WtzjP17xeLQCwqCE9J76waqUvVhw",
  "key26": "3A93VhHSVMkh9dwDn2mqNtuJ1MWoPZfF9kx1eLAZEUw8nHiBnfyGnznqPrZGNJva17KMtSqxonE2rmpHX9mcwGqh",
  "key27": "3NiNyZBLZLZCTAwZV1WNfNPjy1iqMvd1AgfX15XefdigfHe9YP7FywauKgbmqdzaZPTMo3EL78LQGAzZU8h5q4JW",
  "key28": "gcvSGnaJkc7S9QoMESAr3ASRYJ2txeT6b9qTkGQL2MAzYkj1BupZTPEKBeHgAvNzxPN3HrfUkRcogtzNQKEWeyC",
  "key29": "2KGZFbyn7T184UgRR2NVUFACE5p7Hs7M1TysL5xiuQmDVHP63pugXJyu9MwbTSBHxfVHnHYhbqogDcStaC24BXNM",
  "key30": "5L6GjPa5HDrkWHaVBQDGcmftqNqFqY9VBJysgeZVV8gc6YhL487DCKpuSHpj9b3Cet3PKjZj9gvfRzsgmXFYG1Ds",
  "key31": "3QmgkBdLmWa5b7bCYwbDwDV96gJJQHfiXEWWma1BTpaUWwcck7ecy3WEx5Nh9gd92R9piSnb4eZZDQp22i9UvqE5",
  "key32": "2d3ENZWiu5xqyb9nTdng28APpgBYCntU81yDEBzKLbEGKfcYb91t53Ugg3FVbAXRpNBqTTL4JRgN4eEWDPpWXhzJ",
  "key33": "3Zx2zUxzotBj4NwAS1CH8FhMv685ZQ92MEX91QzSVewFCWZi4WS7nnioNARymWExyWb7uUhWCTBVBdBF6ChwiNMh",
  "key34": "4X5gLTVd3uRMnkX29x4MLTA25qnuvPQBAd7S8Hn3RiSjJETMyT28AwfnieGNohhjH5EjaczUuG2f389914vcAnVP",
  "key35": "5ERNYoBUbxCRid4B82Q9LDzgHu8KrjciEFTrgTNWJQhPZT8FrJDehDFTBVjj7L7fV5kheMTgDH6ehPTyCS4msS8B"
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
