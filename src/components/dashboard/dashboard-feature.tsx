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
    "4kfECArsmD8ZBEt56v3gwjbaXZ34HTR8aegHJd6btrhZDvBBWDy8o1sNAXYXVtPzx6t3h67fzuzBQYKVjXr7Zbhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqMsF7rwZPHe5paHh4CHBLC3GLu3ii6f8aSBxqUB1WaZ8yg16BnsZ6ZfmmrVUDjM5AHcDxhV9fFrkPmtXLWZAdq",
  "key1": "3eGNmc6bk3kSyTtff2WwE1q7MdbLKY4hRPbspCzHu2Sa86fdUd83Nn1xG9miCK8568UfKo3kH7TeWTwbQmfw5GSs",
  "key2": "5Ex3bMEDLnH23T6VwqdMD4HXjJ8Ya7KGaGBKrAPjZd2o6ctm2RNW78mtjKtPedHvkCb7Gdr7choYcyhnRhHn94ee",
  "key3": "xjDXVeB7Mu6uRaLgWvpbHqGUX3CfAmMpRq4t8SQdnqdnjFpLjS4BauHp8wpQMTrzNZcjeAicu2eyExqP5wyeoY2",
  "key4": "23SkiMcSzAe4eZ3VG9Nx6exASxa7sFopVPU69SfUkNmHjXigmX2QLDpEQdVtFuwGiJoru8xT4KaeDhXUuSGHLX4S",
  "key5": "5xW2hDL4Rdm5cR2jwNxeNY2XxHKpeXGLD4R5eK2XyrpJSrfBqpH4yYoPeQUot7aF2rvcV9Fvy3AKCWVCbgR1Nus8",
  "key6": "2yiCh8Bhkw21QhmBh6xJ3SmUwbvMwC2GTSdt9xHRfjQM8D4vSpoUrcPwD4RtrhjdTwp8GjmB9ZKwY54nktC8wueb",
  "key7": "3r1wDVDofVa8fDpFwTNrwNrVU3qwePW5vaRDy4bzt6XCV53kXSs1AR8SoArx66fniGo3T1DVCy6TU6Sg1wGiSJM2",
  "key8": "3a63LRDpqQSaPf5tNXXYQBut6RTq1mXatfozvWYyRn4D3bMTFKRZ9TsFkJEL4r5Uc6ihewGnW6T1C7PMD6AgFP4q",
  "key9": "obTqfRfMAfFUnaAW6aKT35BUDnEryChAAt668LTejV6dgKny4qk2h8VKPbfYNXUmTSRQftpQjQ7ZapCMHwe4vba",
  "key10": "CzM51xe4yZ9TV9pAB2s6xC1dvt6o8Vpyw9w3dzipyvMMXaL7AJpoVQo7kBMkrmNFpCkXYpd4MgmALTZiJVFtMtB",
  "key11": "5D76uWuH79DBq7j9ntQtKj8xwnh8ru8nQcUtRE18Xr5jxjr5XXFzhLfZ7V9Z1F5XPrsS4w9hvDUj7BANzvDAAVcY",
  "key12": "5XGJXXKAvcMyWvSdtBwqY8icvuRFXhD7NG4tuxuRU7oqKgZ9QpF4pnayNfHbKtWZ5CmaHwBuC4B68tEh6BWzzWCX",
  "key13": "31dH3TJFWQvdsLapuERfC2eDCPwLgGTj213mzEphbKrJHUTdL2kgsfF2QanSpSExvB9x5dN8BW5BwcJt5J6PGnFK",
  "key14": "NnVhD8VSbzEWCBEPoEEZtgDWy42GDUx2fdP54gT2EuanZQRmk52ws2qn2xSPSiKvME74vDaB3QAmyxF3KGo4hvC",
  "key15": "4adXjng8Nq5S2awUFbPVrt9BJsH95JwvaXUi9p2yoR2aFCWW5V7VZMWMPX9A8Dwm6SQ4M1FQHZs2z5dCxq2KTokg",
  "key16": "5ogT9jpqB5zShpnepEXZHXtEsXEmAxi5k6ytpRTD1pZfMtsvyFUi1oZvmhwVUmEZkAMaMrpvEXkx4CrV9Dp8gArW",
  "key17": "5aHYdvMvuS99F2t3GcYZXwyh6z2EQZLpb4kGuTVM2htk95onASWJpohLEFtSYVgdxSD1zMh9XPbFESxfJWH4GXx3",
  "key18": "Ukz35V5tXmLGERXaaHaaLtbUC5pr8kVMZWpHAPXQkFiSmsZaRkeocJYeq5BRu3keNcsHhM3Rp4RaomQEcRD23hm",
  "key19": "47WGZyoPg43Z8g8Avby3x43FKw3LEqxieE9GgqZgN9tdKdyaQ9zA8SCw9TK86LKa1wjhZwEsSTACcwU56pjiyHA5",
  "key20": "5jg8zC1c5Vg5MvLwkC51RgYVDZa7sQMqDqFvexA5BJxXpQcdiKGfh6YaGCL9VbeNyKu37LY2KaNc59Pc2ykEjdww",
  "key21": "yE6wY5TY4r5BxbXDcEerg5QTxhnQ7JjRr6f3SZj5LQF1qFhKU44bxdLsTUfhEP9eBo9arMfQSVrAdTbVicWe7Nn",
  "key22": "3wCHCcqphw9koEVSVFsnJCZ9cPgC8GZR1S47kMjsGQvVfuds9QYJmU7i7kUY8qf6EtTR5wXujpAEvfvwSmQWzSNn",
  "key23": "5f7VcUviBcExg4RK9HVMT84sHAAP9veJJfswp5S4hh2qy48gXstzt7gh3mVcYfRvnqZENXmFm26ntfTazNQBEcws",
  "key24": "2WvntfSSyNFJ9CmbRnhwknbqGcYVhvaG5DE1LrcxT5xc4z5TZ68SEbHGwNzWHRVEizz9bcQtKebk3BawSWCx8dha",
  "key25": "2nRZEb6Fa3uWqZhLPSmbsppb9LvQLquC9FhZST2guXkMMMWCrUnXVLwzKoswTqoYAPr2VZ9W8b3T3NGynecg7eGV",
  "key26": "3ZW3ECnGjbyotFZ6Z47etKrTZHGwP7uz6F6dgxUhu7uE1Xdq6tUQy52eUg1eZCWkckhLNZSnGLRyKaAxuhxv18Be",
  "key27": "31bQBKyPH4R58kJT8d8UBmi4n5fjTQtEyyoYVPpsfi1cA28x7pxf7ZSTi3Y6u3esg39ASBfmjW9egSKiDbQepT4b",
  "key28": "2jfNVndFnPh1NsMhGyZpos7wczyZyPdFCRwkDf2csfrYxkkMqc4v5qG8Qao9ugvdQpyqon5jQrsAYM4cp28yHFzn"
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
