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
    "raLpZ2ALVpYeZt8bwLQDVi3gp3jCPD9GXP9Jmfa8YsgQnviLVvi1UdaDcHGvytd3ANsyd6BHue2MzfFC8AZCeRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eDhyc3tpXWTTxnZUyRNWopQ8UYG3utgGWvEfA2uKPccHPUQrzzagtxomJNTSS8t7W9eBtVCRix314fuYTSD7kvD",
  "key1": "5PsHjG5bnzNygSH5qQTJRYrGf22oKmbUCSVyFkVgG2GhfjXnfEjY1ohBBxmookKa94pUwUJ38CAjoCNCsw929e9",
  "key2": "2CVqTroYGVYpeAkKidQREH4922iGaUBBu8J2HYTf1zMiMREnmn7QZxeBpQqMyxfT73BfPZ4CmESRxcszqDz7zVKj",
  "key3": "2rsSuhwthZ9g55AzLssoVPJrkV46d4ngv39Rgtxm35MkV2J79DBmmtUXAMTP87swmbZBYDuAvf5fdDwJK78VzqS2",
  "key4": "3hWrknkczQbMACYScrztMis7BSCWnQoARrF1bQ2xCGcNSQ39apx1Jpv7qgrApo9UwqQm93kJsd5norKcHMNNzX5H",
  "key5": "4gWibj2YtgZmxqwKGWmA3myP6vhLXR9QkoGiVhDW34F3HsKG4ki3oJ9qHHM2DUnF2UVNBMRnCpSe3PCm9qfxa43s",
  "key6": "3paoqzMgiJUcxVUyFuJUmRLtwvkGNq7a3yfxdkGtJ5wUte28KuwgeUj8yEkKru8DzyMffAmCH8aa6zfjS8psGZHL",
  "key7": "41dDSfvBvZ7YszrUN1f1BLH9CdVgNWn3j1MUwEvUynMVFMNntts1vXRAQEyXvRjog7Zmb5WVd7EMkgKmHaeqfyAS",
  "key8": "5ABf5yQcF51u3UZtFUg6D76xGjHao858rBi9JveKK34SPLm7ZyoJHsXASaCSRmKTkchpsYQNLyMbEZyibS1mBj1A",
  "key9": "4ZLPbEsp8QD3YtSy2TDbNm9LGgGYLqN2fznW7zDy5MqyjuXuiGubBsKdvj8mpL5p2eBkT3cS96NokCEw9sLJ6LF1",
  "key10": "497Jhz2gY7fa4JZu6QTWr5YVNrEMwc345KhNBg5942KNPv3dgxTFxLqzoo2JUmcxUmpNrYidKZBa5JmGVujAUJsS",
  "key11": "3mVixAakGC2WjLFABvzabjuA178X3M4Bfg2XhALucefNzJnDDgTiraBvmM9b5C6MCQN6QpD4aQRTqnnRt3giEh45",
  "key12": "2RoivkdmCKptgb3PaifgcxbupbHt2dtnKW8FQZHXE67ryoeSowhVZqLGGoD9TpySrUznWHWa9gisJQRsfrSq4hT4",
  "key13": "4VRpHmzdLYmPjhvD5HsQqVM14YChz34ZeBt2R9sXSMPpiaQUn4oNTBHvjCCnQFRKjQ5b1i1qC2ZMZY8qyFJptemu",
  "key14": "4UGsrKb1euczpbKGyJg39AadyyF5TCDDbqchC1U8k7ayfGjZNHjukCK51dbgYrJnftCPhx4zgiZG2Ht4YiYts5xH",
  "key15": "4hTo36nKZJnAY8PFuyU9ZUQdKiDU7qWjgLJi9u2aoCLfhz6LhT9TX5KVbc2XDZQvdLHyZZA8oyVqN52uCiksEbeg",
  "key16": "4Qr6VP2EypQNzfinduHmoGwhUkTiZ9V46UEy5SvR9JVbejiw89CiCW4LxKiderpAtDMxKFjUmQGqAP8VzoHXeTH9",
  "key17": "5vN5fDRdg2oDjYEk4vpdzQpkN1TkQWt9QJqMNvdG9QWm6qp5Sj2npi9Zx3xxKzAXA8ynb6AgTK1iS7Fq9ta8iQYc",
  "key18": "3cnp4QZUSXaTgqEEfbED9jzPA9Z7ie83U7d4yCAGCDRqN9DLAJK8vdXANPJExZMC6duGkBYkQLWykgS2YrTf9teP",
  "key19": "2RnZ3uDx4mbUjcakN5Zz8vknjEtCzE8sBR7SnshbBE2r26GqFhZPzUbvievVLGjj8YZycymEuPLRyYFLj6r1QERc",
  "key20": "3oQunXygbMsD1NgWJc9GYd7fqcrCbDWfUFCxzHkUHHR9Yn1cKk5LLjMHAx5VUPQJ9VPp7mnqbD2BUPCv7RfDVKRZ",
  "key21": "466Z8TPfA4aSyYtEzGAo1KkxxR995bTHnBdbzjbxsJN3yFbL2CvFc7PyDuSQAVaeaKeUx16fQugJ3GhNKjbbu22b",
  "key22": "kXXb3rVDWgUUWLKxQhYJZMLUv3wkKJcdEpeDwtSD5qKRgJaA8aPUummtzoXwgnC56pjQPsP2uKXpq4pvrTz4j8B",
  "key23": "2vJWvtddj9cC9Fa3HwbRV85XKEWFdt4onLQJLQKPY9ufu6MkD2rmx8SogpqztxvK4BK8abUjfcFRkNKGgtuFDuj2",
  "key24": "5i7nDSCq86nBNvQkFvrMkVX8CJex846R73MqDQEpHWkRCSmZ3LoHTNi8djZkFzDBp4rbRiyvP6DATBWzFHiUWZxt",
  "key25": "58KNSXfyiEhsKmQ9JAy23zwqsnKAoJYpfPuepsvEE1Sg5zaTrZJ3uZEeCmT4HrQcVGHzr51C5m4KDw6mnwKBQjpd",
  "key26": "5wVoH5GbvkEceDt14nhxvMYNq2a3Eh5rAZHxSptrVGLeevBX9T9CbGHWpPCNPZVwMQVhCG3dLabNfh4XhkWJXJoU",
  "key27": "3c2f5DLxWKvma6Gc9coaKFM3bqoFvh5w39sNMdxBsSE3hy1ouAzvJGEnx1aZm1jFBmjbtjUVvi3Mg9sPoobZKVNF",
  "key28": "4Ecet3NHM8SHLSeyPmUgguPad3J3ioijmfXnML2AZpgN1maTueFHYYg4NzSrza7tU7rS4Y4QhWmKkdRsRBuKt6Ug"
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
