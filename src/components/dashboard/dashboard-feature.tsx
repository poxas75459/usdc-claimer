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
    "k7Zxh3jCwBM5iRCqu7iZDEsTTF4MM7W6UiAyx8uTXtRF8mnpv2kphWXuV1FwSrLn6R5AsRDZ4fPbrrW9oK2knkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzXz6TBjvtt3Vm7YVbjdRPdN5NCioBAvzyKUs2e48GSKzyWavnMhRh5gBnr9UPhx4qyweHdENh3M8etNE6gCcHi",
  "key1": "3FNUL1GhkhDoCvFGEbWGWCdFecfFSA6AvQR8ZQqCyWhZ8evDMhLfYqndLWnawXuVqsqVn3FBJHAugua3PmXB222R",
  "key2": "5E8CoFQ1ssfEQw13iUBKgZKy4RUQQfPUcYvravLY68D8p3oSF1FEJeDpZ4TjvCrutaX3U3xweaVYAXozwnRU4UER",
  "key3": "3Vx7jzVt2HnTkn97xmLgAHamB56obbnUcSx4uWfvpdZK21UWStczTBFu15JcjgW4txkYJH43knN8Xb2HQvbAXfS",
  "key4": "1b3dUanp9u7Utnq6xBK6N6qocTE4crEYbaY3vJQLoppTy3wgdarWHeo5ANnLKkNCAFvoj7BarbcppBvpBkoZWbS",
  "key5": "4fZ6vsecnNyHKdoBb39ACx2DGzoZvx3uWtjbBafN288qkARd3U7gNAUxnzT9L8pHc2BV1RLXuxezWcuJLDXwqwRi",
  "key6": "Go7BCWySbQ3jtj8BELJpNSd4bMU3eYQYNb72FABNqdr573QYixGq53z95wFqoK7vNpVrCMi4q5SefAyyXvpPF2q",
  "key7": "51z9Pty2bxg6pK4LQCj6wzePWLc56iurvYGscLU4ZzYV2gZVMjGMyTx9Ly4KZ79qiy82DRaGgKKNfC6cz8EPbNbt",
  "key8": "3TrDkBzPuciUMrdSsNJrzYMbvcSAXZQQhwZ7PV4zPj5MBbVXp5v1ryrCH8cmoCtrjJ1WR8JcAWgsSCJJNbKgMMpY",
  "key9": "3UxEFfTDxCh5J8bRob2odp7AmYWiqX57N2daEzBbZWVXMhjQvbgmqNjBHDxrQntiQwwYnn9QkkXNst8YQhPYd4A2",
  "key10": "8GcC2VnsCMGu8NkqQJXsp77huqb93gZ9QztqubAK6nGV6PdJ55sfXNnqisCeLoqEfYoUqv7LrPJF5zvx9xn61S7",
  "key11": "3bjmCW9XbVxPXvmyG6bYxhnTsXqTQmbQcvvFGLpRt9igJBfFwBfnT7qQZfLrj17jc9LMAchrPye7rJnVdEkGoDfJ",
  "key12": "3m6t5R9LCazMwSpuGRTTJDkWPmc1ucYajpaZ8A7wyTLCpHJ7wWoK5MEWshJearsAyksTkgHHdX7YPqj4NnQaBNm6",
  "key13": "3YdXLAb9PYw4Pm4TqfTq8Bb7F5z7a29Yu7PWsH1DNbQ3vxS2XB5R21Ux6wtgDuk9KQ6rXCNcVL979t7MeHVumm9m",
  "key14": "5kuKQGiA31mu3Sn9r889abbjH9d15trui4W1HiFKAjGEnjEQ8J4xmwByoeYNSLAgP2uWKiFcv1RkLZccyma5sU8k",
  "key15": "euAJ1iewEozx3gWZiLMiE8BmgZFRdn5Va9gAi7j6RZbbPRX42twsEjmdiAsU4mo4CwwrYieyTGQNFBJVvS3uTuV",
  "key16": "5ZqZNCwFkcUfrpJy4umLSqyPXX1cxHPJTYvheav7X7dAsSZtRtQXvycHg4nCqa8xDZNFdAnZTV9MrMEx75wVW1nu",
  "key17": "avMbWQ5DaCDe2XrJnfoq2jAHw2xFA61FoeNEFocmvwVFAGvy5fpwZFQ7kCouaahcqQ6mE2QpWu7KsB1SiySrnkp",
  "key18": "gYFpQkxrdrgEU4rMjUEcQuSLVsSPvZcUNDCDind9ggJVzijFnbtzMTCifPuhZC9b2GQSYgFV5qsupBVxVmtwch5",
  "key19": "5zdsrKcjoK8VXGS9gA4Sn2pvXQxuYTfBSWdtSk4iUMePmGSwajDGgyicXJL2Get6c1XSTazm8izkd6NNGhYJ56ZC",
  "key20": "24EsSoH1pkjESPcw7987AiVjSZoVdVgsBvweXf7bo7NEzq1dqj1M7kzAavFcCoN8DZtPLMd8scd3AcJAP6u6L3WR",
  "key21": "Nh1MYBYNsJTWjGSiuUwiEThRZ2WHaiN4NnMqMo1khxdKZTxn3fWo9mfBwYFhQDsz1VNF27NcbD48pt1V9RUM324",
  "key22": "4cZfwfHz6DCRNa3B9XKVoPao3zUqnT76wjnu31wAGM3suGq1Z76qL7xAsEexwViKaMFJM7awq4WJktTHrobk81eE",
  "key23": "5JgrVBrt8rTUJG6Y6MUajtxE95gAczxzbsJLA9xW8cYvykM88FLTZ1J6vQDfYAuNcHsVFhegbQKdfXEXc3LpfDrL",
  "key24": "2MYBtammFQdDr4eaYZ3U9w827dc7qk1BG17C4u91NxARkhpjL4TPsC7EU13Dsjry8gaiUrBVWTZQwGUF8vPB8xGU",
  "key25": "nUgDTAVLDGFBDNKfDqQCELtVxosjihK3BBUrV72wy1HerXzyBtEKHrg7kyvawJKBkJM9CDi3YMP2t3CTZzfoVBk",
  "key26": "5yMgZAgPYCTx6BSjFE8aMKgB1Wn4dx3xk2tm8hGssA4U9DB97GtqQjeuWUNAMEpZxV6DqZqv4meYGpY9cZgxeQkJ",
  "key27": "5c7SugZzBGdFygVnxj8JbY7J7YkXLbJVxJRXGhY1ZKu7bTL6NzTVyQiwCZZNjkpCN1mUqhH2Mqo3BiuiypHjX2Gi",
  "key28": "3kgHHR9Dt4S1CBsfkYXTqXZsr8tuCoCcjxssGjyTR4uKQM7YAzcUERwu24TvPn2Z53wnhn7tasJJQ9xqA4bsgBVA",
  "key29": "3SgeosbqsvJ4fQthLn1ByYwNC49g9Z5zPY2bZZFxn1yBBVysbq17ELa3Bx8ee9TY8eyQeW11jtD28DqDEHasRrXd",
  "key30": "5w25QnWs5WZ6cmq45jKAmfVHQGxA3aVn2jyUkvaMNzU6m9eSEJTJg1T9a6G1L7mMNTRANeLpeCW6qPBUAvwRs2ED",
  "key31": "QrptyK6SymjsE7kQhB9Ub9nuuEWMCw9K88Lo1AJ6puUD9TfgYFkfmAmkq87RUdcppsQ5jZLrgZZ4biF9u3D8BGd",
  "key32": "4nazoQCJMMKTiGrktKMhtr5v8pnzCRBTYsRMvEaZ6YATwgYDQttLDV91C2ncRCPE5EJSPK7xoMUHFD5YfmigzD9h",
  "key33": "4438oJEccKv6Pax57FEBYgFrSYLdFQ3GiqjisUZK9ShPGFWao3nruGUQTnFwVvJ7GTDhvke9k84z9R7pfPwKVdJu",
  "key34": "47EfJFxxXTJRrmnkGEYKCJoUprPNPA2258ZJc7urMHMSvdqTPmfSePecb4UyMHs2hVd7Ne7ZA4j6WLNfpxhgwAn6",
  "key35": "4e5hM6bqEYnLQ2qAdmZ3mug2Dm5ELJaEknrwp1m28X91gnGryd2X6ZfgeQ6NHpsTHmfFW3RLagN9EX8HHu7Pk3Su",
  "key36": "6Hp4LNfbDENHmgBuWnnN6RECQtog87S1Z1NsmskVzNQhgBFzGkW6PpBiGtCva9kSeCLLc9xyndQxYPg1oQ1wEST",
  "key37": "36j3n5SdEDmGKJmF2Z8nPM8U1fDMcUX4kzebBTetcrpGKD8VNcDRAndreJnphe3qiroC2vYG7QSPQZ9yKLwGSTpb",
  "key38": "2hf87oxx4iVSeqUNjjPCb3YGDmnbvZv5323areiBoNAWSc6eC3cEzKNBXbrvoogB8jndATs5BJXC7g4ZZ6JkPGqT",
  "key39": "5hzAE3HbVp5LaDZKSgMvWuWaWVTsMn6HCmuwnCAzSN5fiX2QSqTSC8z69QEUTzA5Lj1xkJZZxcXtHFhGiuih4uoD",
  "key40": "3rPHmVs5ki6xNswhukaHUSunhpLtmVpAzu76BrLYGe4Rd7th1b17mGqkcPYrae3d1k4GHfjcoRxBH8mmjLUxWzUb",
  "key41": "6JyEPaVmfMd58WdfH4f5kaGahiPurTVm5bM5QXUoXUj7yTYXPkzGK388Q9dHjqcdo15xE1d4n6mVwHgMnnPhrkk",
  "key42": "euTAFq7X8nXu1C4k7HKZEW6LbRmtrMf495AMAEMRR9Kx1wjNdBeE1qjCDVbsjJqL1wczee2CosFcYHyjNhb9prf",
  "key43": "556nzQZGzy3JXgQT4Ek5YmXAepAkq3qAqos6zrwKeLwv8F2B9sR8dbcAxaUGSdWcyaLut2VwDbW54QBDyNHn7VUg",
  "key44": "62nAE2CgkLdCgZowmnhskYAPq5JNzCWBPKn8izeNQ9UNxy7x7sKxMBqNNwUh4Kiup3X81eAi1c2uNkt7e3S93bUX",
  "key45": "2fb5qCSgdWm8X5XLyu13oBcAAdyFexSmLDqGbTCc9ME9CvfkwNN4ve5PKJPmBpY42zXbirpqESUn6Bu1FRaEMrJG",
  "key46": "2aVkdFukL8DQm2bybgx2PV9hMjeL2LvWPPdyAP5Ycat9gVC4WiUg24q7uvkQwqstbgrfRdUiJ9zQPJcRotrULdKx",
  "key47": "4wra28Ckz6XotUc8tXe7zt52QSqidWvBqszRsYUgd6WUgxhFBfcynDbrzxMGrk7XP92Jv9jqr5PG13EgttYDDgFC",
  "key48": "5dhiFCM38PifhPqkadX72YWgQvTwr7K3qJ9nbeCyMkbEKVZF26f6DuL283yyqxbJrbUZPF3aY9dh8fqMDgSQ7ikg",
  "key49": "272Np132VdHiiDiVdy6cBNQNN7kCdZUAzFa7roKbPm9zJzgNjCrEFMtpwdLJozaH9vPTNvjwZxEQq7DqCKT8DorJ"
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
