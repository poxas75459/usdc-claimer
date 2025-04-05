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
    "H91swr9qcMJMNaqSDtK2rqRFDjZAcRk6tBwGFGKKFvoE73zKkoVSuWBTQ6PVn6hJhfRc4DjTTvd7uwnmpkbRMe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "125PzegBq4kSBwX86YkYgr68HkUyVKARMNhus4xwY6PQJXg4LtY7NB2aopmZPc86WjozFaWajXrgdPqDGs3cgofS",
  "key1": "5fsxQAt1neHu7WXFFGFVA2cYdiz8BmubVk681P6hdD1mgPfzmHS23pc48sTw95JxvbgZcV9kfexnzYxG6pM29n14",
  "key2": "43xZqMNRRLmGTS1ag5GdngZqYddmWLdBftpvzrty7bZuaDuFHPmYSETHzRcKwMtgUSUWX9zekXEaWN3A2GfQekeC",
  "key3": "48MQymgV6tA4oY7TeWHHjQKSJ54E1e7mCtgCzzZrdQFm7oCqic4EcXBq7is9h7XhtaZFoGkxT7cV5oTs5swGEvuV",
  "key4": "ZviM7R8kyaaHszsu3cGhx8xeEQ3rt2VX4eeH5G6gvwfHHsaEb8UJ5iPQ62tT55k4jiA9Hes8xUp2muKjtTHNuAQ",
  "key5": "Spn6HRPjAoChsqr7BWorqmwpJPXCK55Ty4DjxCL5mgVe9bzz4J8RXRaebn8eStdnRGPUgPMnG6hDWQbyN9fdYbi",
  "key6": "5Ykw9GD69QE3M4evmmgxSFcYB4qFL7C4PJbagJs743MjBVrWkRLhEt5g4ZNsyfQSorW5DBD3hyNBVARmCBGUzTeg",
  "key7": "2LiULwFYUHUCG5kJq4rVEa7n7JWv6RQJamVfZojaiST8J26eVWTg6HzJ1TBwpDuX9FisdEiqxvftPkMQoH9LgnM7",
  "key8": "1iAb7VNcCmZQWdbq7EKhbm47FW3gxBykwvqziR1eZfRihvWzGRQdnGcGuof6ZyCXDERvyBQe2SQVRnZTP6XQBnn",
  "key9": "4XFbUDeEMdrGQQBeJvJwoB2P53GxqDF1fEkeE8EM3fLoE32Y8itUjpKbKwsXWLVgmuNtputr8USz2qX3iHFCXKqV",
  "key10": "31U6UM4breuhPPn7iMMFtob1KuhBTbFVh9mtLqvxJvBDbLYoWPpcPJnFhAJQth7QQ352wR18TmeMkzyw8HpXPzgf",
  "key11": "3KTtt2yMZHXKafJFcmX7MKKZJa8Foi3yBioazcH2Wwx3RP9nZTjtdodCneuN98kpRrBxeYASurDgj7uw3uPCuWB8",
  "key12": "24f8wQ2CinSLTPf7WQZeJci1KXxQtU8gZRGU8wWXFitRDhMFWz9ZPN1g587KuYmQmUjgSuRnXZjtQ8qNhxJcoeE5",
  "key13": "r1v6yWXgzY2qfQDY1FKKRHt9BLtXAY2FLgJ6wXCVtGZpXNyKAWrXmmX8dfDx6zvn8HKNNhoDQwrh4QmnY7vsJam",
  "key14": "oxiUUj1i5ee6CBbaqx7xFDDn3ffoNrxz6m78n6kUVA44qJj8Yv7GuSgiwoauKJVtvZhJofRVUKGRwhdKfZ2w3ZT",
  "key15": "5a47vLudRpJGx1c1qv5NHNsNJ2bVvEnESfVgooGvdae1czErgQaMzdpN4BdFxPJHij39eS1JVacZ25gHoPkkr3DM",
  "key16": "4qHM3aQo1SMMK37aJnUeaEHAjvs15ESJkhXr9KoqXRiB7X54gtWgSVXtf9M9enxRcRZdGBv8pjhGBnQCMDB5X3jQ",
  "key17": "5WLyMsRLczV7jyCJfWrxZcF7BqQpLJf2e6HEFFpJMHvzYbjoCCFaQKuHeWSMdMA8UYbqEzL9D6ZeLodxzJoUrDxa",
  "key18": "JFoZLHRF2Wiw9QRZisFWHFNT1a6h21Eenft8ri5Cm34dFkmSBSAMK4YFwmLJXvhSp1xe2rszeei996TVFFzmrsR",
  "key19": "2ZdQ3pmhpSdF3Q6jS1H638jep4SYggaHiQiLrNcaRVdMEEaWYeyuTufwmLUmLPrLszT8MDeBWQh4LcGyCxj8L4AM",
  "key20": "4Phw9q9hMEwucEZvt3QWZcJeXKD7aYwa1EjPyHn8zNq9iLdJpUFQTT9GkkbjHMCBtXSudModju76P2QVHHMJ5KhV",
  "key21": "3PGWcoyFGyLLzy5BWg5C8XcaUh7jNcsK9mZzTxSW6DLEXZXR1dntGcdi6sJev2R7Mz4Jj4RcDc8QaDQLCjMuQn5R",
  "key22": "3GmN84KhW5371A5HJ8EqMtY7r7dY2EcYikeh65UQSGVQgqgXiZx13SUNasWS2nnw331X9Z91nTczfHzR4xbdzVj9",
  "key23": "4cWHwV4kUC7sDMA9QvFrGjWPdy33E66mG27ewjdXuz8mw1JhmY4ZNKo6oQ4PE5jzwMesRaDTXNxP2yA9TUKEHBSc",
  "key24": "2sytwe5pTgMKUP1AmLgw2b6erqdxqfQYoUxK6Qz5XSJEFBF9C1QSXYopX7E6sdPM7M75YLjqbXZ6MvUvxJf3bzCr",
  "key25": "wMvaMUVahnAfanN5qWcqmpZutgbNsFprBRyb21NwA7Vw3T3UqCpVeP92qP17mfnoyUbuL9UhyChR5RPUoVhXUuD"
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
