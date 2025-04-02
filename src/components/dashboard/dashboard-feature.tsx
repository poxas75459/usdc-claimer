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
    "4PxCg1C3rnoiVHmRkYVrRHXSXxsWgWAjJPAPW6oNodEHDa3W5MVp8H5UHhB9EgUuaeKZkQdRrxmDomWpvC3dgLKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xUGVYsBzarS36tJr8mFN8k3bg2EXrG565HTWeg1YAR1dU4f9bqk73g8weqs6o4ajvjAPNWHvfQUMLgCmRLSQqcL",
  "key1": "aSYVDBVJ9RiKGJWGztv5hH9LzCgfgxuqDo7i1Yf5GRZzV4wMzdQ9ThxPMTctEToEKQULKEPZ4GFN6wbA9TkyxiG",
  "key2": "5KZzwnAjVHXRnf3Fobmehhyxiw4xa58LU8RRTr2KCXpyPCTEABMcfmTCWyTQaBsE4Cz2QewhuRYPfNLGngXNKtBT",
  "key3": "5hLWFyJYfUaXhh2YDoScPSTuZ64y4D9wSqAcyK9Wb4s5GcfGmpzQXnsic76qDNzfWd9TkX8QEVEJZL4VxUzEPQbM",
  "key4": "FUuFr3jcgJX7C3UKjiMGMwfXgkMBdqddbRfcASCvRUrx6Kv6BcxBDL6uptX9jW1pEJvRZFbyYqahs6gETjEQaXh",
  "key5": "4fgDaKJcLBJSPNhMFd7yByy9XfaM68f2rd3NxuEgA7gFEKEwc2eoNkbvYHjrWCne53Mi6bpa2gnQ5UD6kDkF1dEe",
  "key6": "JyeMK21YbJKdwF9q3mHgsXYh8pLra2PGEjRewRHSptoyJfUVQU1ozTJZq1fLx35M3mH42ew27eg2A6egRc5SLqF",
  "key7": "UEXCLJefPowu3cof7oWJxDWWL3HKhTaEpAskULc8L1eJTfa3KfzvSCEiNuWXQy2ctZD81NMu3KEwKuFhsNLbaWQ",
  "key8": "2WgxnjZRo5Y5J5J81um3o3iryWkh2nZicAYF1hJguQMQ7deGcEm1wrwhDNvANJzszpuwKpANenDUunjseCwJsfCp",
  "key9": "5dkJfkGYbCwz5SjQ8TEEbt3cQVk8mSFoJCBrRVXcqePJknRKmYmJvsus68CUAEbyv6bjJQNJbH5XmnUTxLhHuU1D",
  "key10": "99uUc4AjTfmxr2AsJWtppmqtzE39oATccXMaZ5cC49JHck5WUPzfrvgUkMKXaYA7711hvpCUvsQnsodzBQraPia",
  "key11": "2dG6uyJwwnzYN7wnPGyEM6EL5J4sNF3YxVG2UEQbdp2XMijkiaUdtMcHwdcbi6rT8QfhLU3Cxrxsd1j9unRj6QhX",
  "key12": "3HhBM7QJaLBsvviUuy5kCxKyftGWcC9gSSg7rthbud5fRTYRYjQXsHf2mrHMuc7TrpQ3eiFWJBW9UE3J9kkmX9WV",
  "key13": "2EpiUsKWojW3BkpQK8iVujwyyaFQdaP3PqtVPbP1bQzsp8hd3n93mmEdm14T1eTRECpmtwCP6QBYbsoJUWPDwVkj",
  "key14": "65MrxANUZMt194fx61YqcNUfWdYYQebmrKRRoscRESPotJuK9aLE9uW9SpSXpAqxwxkDg3ooqwcwmhPSo4FcdTbM",
  "key15": "45XYKBgXpXGmpwgdB3cTFbKazexzCLRTnn24mdc9Px3KEfFiHUoTBCdmrd4unHbQpnFk2L27Jsar11knzvoFrDwF",
  "key16": "5nfo5QUjNM3tSL5HSjGX69S4qcN8fikdZF35h1pufRXs4jvM8U3aPgR16kUjQ3KGdAnY1jvzP1YrgKXVh8mxjn61",
  "key17": "4mH2pWBUZ9MFGdSitcn48LPJQU4xC14nDvfgAqTsZibFtr4xQCYavjFoE8HL5RSzzVomjRraqAdK6f5E6EJm8Zzb",
  "key18": "3RvTLWFKcn2cFnJKzu2RDhCKRqHvxisFdYNfM5domumbu4T8anK2QKooJWZs7hRyfp31ubPXth3Q9ckqXBqDikwG",
  "key19": "42yEkds5jC2ynaMq4X8mhKJhwqjDAsyqSLHgqTn6XsKzKqhDCkpaX53fKQwjTouFjgSy13eZXzgHyW1uLrVU4P8a",
  "key20": "28tj6oGCJVQCzgRRZ4ShdW8ThMj4iFNsA9UZzhvNw82KjDm8oY4vdKbjJZBm83N8FCvoZ7KfFyGy9sXktm4jXDyD",
  "key21": "4kD47pZ35KGYKkxzBSpT1o9QD3auPRPrtiWggQmGHPbLrY3ofD99k7rDdsXUksvBwc8wsFzCLV14jx9rpu8e3UNQ",
  "key22": "3pwnwy313Um4hhYtaAdadwEBFQhS8oXNHyyjvX9sDotvuZeEiFq3XGdauMtyGLwTgd6eiiwF3aaTQZJNVBKi4aw2",
  "key23": "2RL41PuhAqiQko2cECmXZaLaTiVzcxwaB2sgctNMSaoFC3WTU1myBLP9QUVnwDwtkDBWYFYvh1WEVXSXDdCqWiCZ",
  "key24": "4v86eejgiNAvtEj3dZNX9d1bT5KgYzYFnNhW39z9BpLx3whfXVJCrCVnkE3h1a13M2LWYnZugBT9ZmEUzHFRn2Co",
  "key25": "4uxH2PocCsoyTLFtZZepE2u1B4qmHvMMynxWYVJ7xWVGg36F2H4Ugwp4fLPXrUVZQeN9gCkVahyCVqnW7WuMqwEa",
  "key26": "5Qeagzo6zRZEJLX5wCLFfQg7DowBEUCQ9dDXasDmk6iWtoAnAHMe1sDtkUDVfbdtLxfVdFVn6hremBPDeznNNrbB",
  "key27": "3wZq7kaVYJWDdSAY7zoBcN6EHJ4MpJXbWQ1wt1tmxBDFfJDCPHibmWHByVSC4VdUsPwaYEjfFTQHjuoj17Co8FBu",
  "key28": "3izGwCBSyL6BfHvRGmhRadJjYgf8xBkgHwGNcrv7AQQMgxk5QyQtZrdnAE4gwKbpyLrdB2XgxZUomT5fGFQxrPRD",
  "key29": "459p1cXqr7Liusv2xrACYNx6caKRLGimTzRyTNgF1x9QJPg63k7CAmt5z5fH9WQMDoDA79jaugnhRJjQcmJgNuV6",
  "key30": "sQCjFokHdntChProaqP4gynXTxQnm3dMgxFQ9CCHvUsD3JTkWtHji1RXVGESTVxKYhHSYsKaMx5rdMifazirBvk",
  "key31": "5P5XYvWrww5VJvnB5fYuoFn5xDzxoWtJNMe83Z26gw9mP9Z2VYvAGE86HfW9cBQvFxhzkTHo5Q643iJHXGL3N1Bb",
  "key32": "36RdaPQDykjH64fqp2Dk8MbzGTPfKQkn3FbrntJ68CEgmfGg4LS4rhR6UCnzwpJw86fNr3SfqHrGdrr9Yhm5NDid"
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
