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
    "zmXbqPpG1GKbWKUNveJ4UxyXZCDwKkUv28S4fd7myLUHroJwEPuzdLC6omehh4rE1wQBd5yYfuLaK7CZqvfjFkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XPcR59CcDy73jAQZaD52tyJ7Rw1ipyLUdq239gdNeXUeBJ1iyk8LbR2NhMDyouCxQCVVFgRXN1McNSEUuxmYSF",
  "key1": "4udLgxFr4rhZ2CLDrB4rKSdjZ4H4ARTSs6K6zUcKMeppvTBwX9VGyd88TCyjpX51yYRPtjd7c4B1xBnLBv6CM4h2",
  "key2": "584NrAzF4tGwhHeXYTr335ZwuMDXRUhVMxV3QcVX4s45pG5CXvEfWeVGRnNeHnnTk5p2RHJJxUqFFKPTBdpGB5is",
  "key3": "5DRjmLTz26g1txLTcjAk8QKksXXrxdYCaNPjaoTy2iac2XPBC3w8LuaV9oVS9yX4kvvZEoYVP75QXcGai2EGBhXQ",
  "key4": "3kHXocVFnoxc9effVXWJREeF2cQP4qhbcv8aqFX9drkhWm3LojM428AqpmqWPypxQ7Zi4ERXrkKpevNegy9GkhJW",
  "key5": "2qLRFbnfbouUmLtAeEqfBhoPq5zGtvKwuHQbDYTYgPxt3WqASG9Yb2dCw33rA6b1QfiebYq5KuNpKLRw3UYrGpob",
  "key6": "5ZJ1bCZnttDwtHZ4VHRfMLF6TaNUEVvJnTYAArFhLjRMwdZzBVweUWJ7pcoLBTGzitZKqrLoKsUNKxzhvBpPhdGC",
  "key7": "VQpNihLa59NmJruLFqBa26Afm51VeWAz9rGnjpT9f96YLoEeZCpgEZ98N27DFr4L3aS2sDPqpcRfbX69uCyVUEC",
  "key8": "SU48g7EHvNToCCtHMj3g3NJGJmAabkiZRaKcuSgSVpcTMKthv8wjsHJKataEWCgGmfNcAGL9oZwMBsdNPgqK28B",
  "key9": "3mYW67ShLKWdmdt3ExXJ6ocAezp5Qgxy8wJTxn5K5gJSP8K5nDSUfyNCYxeL1qz4UwzBc2crj7yZYUpqRUXjVuxi",
  "key10": "3SYhA23EdE2VJqzEKKuK5Z7fbV6ZPNCo9BMxe5K97mKhcBReBmENgtWFz71XhUjfLHQxD6CZrSxPX8BJCZtLhDBL",
  "key11": "2BhtBqXmUtT9oqAvk2VKogKAa9pWkmV8LuMqtTtTkb4sD9FZ8xpxMj6ofRsdDHbXt4AYoLmyF3AFNxtQLHxaqZKs",
  "key12": "34y4Hn5vYmdQUd8JYwkPU5irbYsh9rAUNnWiy7NEha7xwBM8ayKiPuxwb7tGUZQsX7JdbENR9qxa8nEgCKhTHS5f",
  "key13": "yGVn8Uzuhifn9pqKC6cwZJwvkM9cB8KxiAvRQ9hAickdjsJooqheVyDmXyiv5Gh2QNAH8wSqftjDVsuspunZZJk",
  "key14": "66cGhZnuxcZFtpzMQegdDrXn3wYN88C2t8vr1wSwhKadntT2r9ejRijrQJj496aJHcUrU61veLAUWkCMx9L9XjdV",
  "key15": "4R4mhhNLrwmwFvpQm24wKkNw8zSKw7KriJdHL8CnGNXFT4imKpJPdH8xwZ1LCMHiQxa68amPfNHuUr5bNzDe6g9n",
  "key16": "5YA1wRbwc9gPYNucPC8miQhQq3GCNFcubTH2JS7MMFLivPWNxSdZPqiKwTvffNwfQry3aB9iNjTczdSknHhiFERC",
  "key17": "23PT139BzbLgderTn8MUg3c21jK2o2U3JiW444NVRndt8HngEBr8w5egWWygs1jSPmWjosqRPRC42emEn5XHBj9W",
  "key18": "52RXSwQUwvmbG2xiTx3x7Tu2ZaBy7L3UYVhoDAnF61k3tF4Zau4s9Xi2CjPbiMYzg351VQMVdnhy65uyYkdFh5tf",
  "key19": "4AWZJkfrgiqA5PRZQTUQbW4j4RSFPFAfyCo68uSDbRfmFaUjuj76zPcgQSuy4yWiAwhSuZwxNH9LkU9exyF1Rmer",
  "key20": "3vH8DCafVdaLYFdahzqQtdvatQoCqEg5A9UfpDRftWQMU62TbG7SJiKATCDBpoc2VEfNwxzmHULzdjL2TChYkAEK",
  "key21": "2ebdqknLSQ4ya1Zk2a8ZnnwqJuq5Zq4hKYLU4RAG35S4ptSKpWzqU81XA82JAEfeZKYWwCAQzB96ppyhzCE9iVv2",
  "key22": "3eKcwRWGAc6skZEqHsVTJEUoc3ULX5tzrdSnvxvxsoULjdxF9AWK41QPadSXFAx9AHmjYL1uT8xrs9xdcijdgLDs",
  "key23": "4rEdV4oYcDm2sKpyWHN39wBNBSTnDN8kFGAMzv3MGTGrmhw2gXbEZCyvAfh3hkoMoRP3SRoNuzLPVheiX7uZ8WGN",
  "key24": "hGKybRUMXYwRjxV4opu9WC1ZV9CY2ZzyBUEXg3if2TdHrdMRhhmnSZTTc23CNzqUJUQpFPocNUD5VJHPy6UbK7m",
  "key25": "5UhuH7jvGwwVZ6qWQKPK3XbTYjJuJNByY618jSqsokxippm4HvbzCMdML9APtKZYNEW8VagqePAMSRFrPZH1kspJ",
  "key26": "3p24NknrpBgzXJfETQRzRsYpYMDJVM8aQ6WSeZozrBi9YWQPpdSAbMxK5cY4MnXMqUdnZxB2QR8m2CQivzD1oVrh",
  "key27": "2NraeuE2ZaQ25fMRbcxJc6ie7p3gqXC8bJbRWVT4wEERDDngjDkGqrwPZXeJyHaBNJdViwEXCuq7LW4ktbKGaX8d",
  "key28": "3WZ6U4XFW8HrTZfYspWPueRDw1bcaHBHHZ4aZEnDjQfFFaFkiygPNGZiVE335dSoaTTUoXAWYSxu1wxF3keknj5s",
  "key29": "2hz5tfcLyctRVY2Smp5kdyeisrvWAHTAvyYLzv9rAY2H8cFjuG8a55rLpyQtUpauTqF3RavFzjFQUi4JEEWowMjb",
  "key30": "RJ9YE1x3C5z1J7sHVL76rXpF3JgcVj5thAxJtNuLH8QnJUqZC6Ws2byNZr57yodBmNKomSYVCQK6uNBwco1V3TA",
  "key31": "m8Gh6JKRa4bQGX8rT4kJ5CfLHbr8LKVSEogZf4nxWrbsKfwf3dWbQkJMHNEtH1nudg4QwcycNC6hHsZrdC1K97u",
  "key32": "6d9tbAjJvzWAPWt4UQqktv4VnYhSirehtBZvxdaqC2RonXssEgrvm5AdaWoUyR7szu5Nw7sK92gNufZgqCnEqg4",
  "key33": "LfjWwVR6rSVki139rpYgWUUeQDyLVsoosog8CyESPkfz5iVJ9bUzXahQNbfcSC66P7vCDqXiRXQ8CcJn7XBN1YW",
  "key34": "5gtV4V1EKvDMncEeXqxDhZPWNYBzjNjCNzRLZmKUEEe7e7y4qWEPAmQyjzuHUiYvw8imv252vhi2LruDwgykrdty",
  "key35": "5F4JknMR44hV6GZoZw61hZtUJB9tg8uzJ29RjdYBvTkQFV43mkdbYxo7PNbT9KaBBShDkhUJLWA2vbHQugUj7cat",
  "key36": "hskfFXGemmJqHbUrWdsV9VVKKwp2ZAtUHTyX7Gpopabzk8drGejuZmwoV2JcwzkU1Yyz3VcuNcGugNycnuvVVob",
  "key37": "5yNzv411cP2h5dP4NAcA3sXYr8bY6VSTBwQLHg78fPxkDsCYkJdeXnSBrYQR4g61YJGPhpKxCAZjXfdGx3hA3YEq"
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
