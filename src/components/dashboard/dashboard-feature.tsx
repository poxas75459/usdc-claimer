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
    "4VgvGU4uCyRKtQ3qaFC4ruqd2SWnKVKuT7UT2ehhmXRmRyKxZR42Xd4Y7NEvTtyuFRy6CJY6uCc2paxr3SCWeX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnDp8HrdYJVM21fQYe5gHB1akjde1fFFe93wXgFkKPFdNFSvnedsY8HrKF6E78WkwTTCUAPKiCf2HtN6h9KvunA",
  "key1": "5HNJYUvHW61MdF28QJG5gotKQGTGBUDXMBfBKhV6qA7vLtpcBcDJRLB15bzfUmLJbHkMiFsDo4D27W9pHVJBQy2E",
  "key2": "4uaBfD4hcX6sPWZgswcn4uZLscEv65eBhLd1bzwTo6A8TF8Zis9SbvsHB3qTeFoA1dQseWtEtiQpZzeAW6xQY6Fa",
  "key3": "4YNcsdNzmpcKj75znkPWApx2TxP29g9sbzsXtDQxkBCQtabkgi6fA2fCCKaUmriKGwpk5ApvJNCfFqu8KCAUsz7Z",
  "key4": "5pR5FNff5MzTap9DZznK8qhqYzD5KumZFojmXhLhBCFBX5TM4uiGrsU3QUw46Ev72HKg2AWZ2QqEvrzP4cfD2b7j",
  "key5": "5HaUQy1GBy45wYMjqsCgjm2e9P18377dSdR1hWfMxyRKfGKKFcqrarU4ArB5AjHETpcuHUtceNoMhTN6JcTeh1yN",
  "key6": "3uSMBGVXevTTyfoMT2bW4vWS9rYsdUkCz7oH6852j4eoAvC881639u82ZNxUs8i14mJ3ePEWnbttogmVNdMJ89BS",
  "key7": "2kRkE8qmqBSzXbtwkovmdA8m5n8EvWhCuQ1hBy65Goj1KxWJhR4ibdYLhx46yXBqCi1eMo7WamhAUsqRzuDj6GAM",
  "key8": "tcE7VMg4HbwqtH93LgVE9mMi45z7a9zncB4Ur45En7eC7KZKZoB6UeTTAP31mCCNq1a6Q6NLzxVLKmdjbGhzsBT",
  "key9": "5NtqXjnSAwS4rQL6447ZADcZqy6ZBrbrdQYx4RHNV8PNf2SpXVaoSisiZrPnbh73d9LJNY2f732iihTf9YVvFoeF",
  "key10": "5jJxQBbiToWZopELjTD7eQaHy22MyxemcxBHJrbz1gPajMLUgmRfywrJVmeETJwmv8TgrKrqvxn1BHjZcm1dgCvk",
  "key11": "5XtVQYE795K1bSaw9fxkSqbNoVBjrJHPbtuzRdHoCf65ViRc2JoAuRcDhtwHRPvag8WhLxDkqCrXUbpcPx9S9iYt",
  "key12": "3w9jEnqJWTvFVzdnNnLRAYM419UxZj5jN9aGjDGPvyTL4aEMjN6zFQK5mmyEB1Mq78Qq6EEP9HVrFBBb4Re6QX98",
  "key13": "p8NWRHuh32xaTAELu7CbFZz8AchyzmYdGtELSmP7aL4Js4tjeM7fQkjj3ZFpdAfYj9zTJGwKcKnT7Pjt9rykHQo",
  "key14": "48tNWSB5QJdyaSHfUbWgQPBHTXFntKgWJX8B51posQgwKVdaBuBRbcd27vSyVbb8PCZ1Gf9WqV2xGt8X81EZttvA",
  "key15": "3dr9iW1D1n9WQpdsPDBbSJ7MFijLzs5G2uggUeBtWfpV5CtmqmeXgHii4CwxG94JAvyPwBvBREQgvwoqMho2S8BS",
  "key16": "3Fceu7Vt3KiJDD9ZeSVErtA9bSMWHJW2sHm5TPmyF8haYFwGjViD1hvHZfpetA6GUCCdoiWj5PfMUQh4wDkJ1Ds",
  "key17": "3Kgj8MPeKFSxqbubYHaAJAhjDchGPnya2YqiXa9FPmKyF58gh9fWVRYHRh86VSW6HY39FejzaMyBACiJJvgJowPK",
  "key18": "4Ti8bsRrPo4YgeqhWTBAC3YYd7wcz4ktghDyhLHyjYKzAQ5jrVjMUs2WfmMcAM5V1e2TyLT2eL3QKxUHJdozxxw",
  "key19": "47M2QDUUoWWi9GacD1rP6f2reVpnS1xKWjT91efSPXFdGNsS9JdSUNjRkw6FWMfV8DUUXdCKzGjw5WDvuDEgSrKb",
  "key20": "3QaNAKJAQLo9B3ZE8FofVYkkCKn3aZ3P19D56aSNDaUiJHFcGcvEk9mbuorpr3dqL7kbFcMLcSWhFrWHeh5DGzFF",
  "key21": "3rtX6ZrAFPrzqaGmXCqX8AJjTY5cjnQ2AEsSHjR5qZwQAgdwQjt1UJJwazBEJXwGqnbU7C7pz9wPz748ny26QpyJ",
  "key22": "5pDGQTUX7b5BiVDBRuJZyQfVQsVzyq1WCeLegTpitbEMRQJ8LvzXzm3vVNqcWvRCGwyp1S1CQfyytBsX4EBDrWno",
  "key23": "4EaFxSkzM7ZAySwCrc5UAtj95iXGJ4wduES9PqNbzjCCaAt7v3aUqnwkEZpFvBhgLS4WDAghBbhVQbzYBABsRJky",
  "key24": "2t1XEAxGX2XiLPRUvjio5ujiWQhDio8318ZRXe1fTa1MRnDZWPSHB5aNrpBSqBLwMZDUwYY3QX8Riqk1V2jSorZt",
  "key25": "2FmZ4RPmejG1ptjMcq5UM12gniWeEdyTUVXuwLHK6mcnv4F5N4yKZrLD6YMYfL3Tw4j39VwiXWjF8CQx5XrhDy25",
  "key26": "56L3aE2xkT7Jbn4hT1Nh2BnrCktZB46zeTmmevyCoLagFo3hJS3bDgFA4WhwA9swwB6H4Rc92YBogLRVLYmmaFPC"
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
