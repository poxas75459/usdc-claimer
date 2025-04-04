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
    "4wu1GLJzyTk7xqCtaPztoEyFamraKJMeBNELexHDGG5a9cuZ2h7wvG3bdynoM1XKxFK5aa9hxHtmfBGZ6vxYgxgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bir8Ud6H1m7QYV5L9R8xckHEHDraPbjuSvSxaJ3A1LwEzSxAWPsXNYM34ahRYDD5x7ttkL9cGPRVa8jVY7N8uJt",
  "key1": "6317DiLAjJW9NN93LK7KgGvU4b3G74K3EZ3Vad4b1cNSVYUsYDUXwcqsEWMH4zQq9MwZ1FojDpWHfWCxTREnj68J",
  "key2": "3zxrdahhCDT8UGcF94jEwgCHo9QhecAbBsAN91enCeYaSHWtXUjwATQwHbYnpKswiV4WiAiJJhtcAnHo6EwigYjS",
  "key3": "2gU63dzPQ9BLYjhUvgkAs4iCBnEgJyYQoFjBwkpNj7nhNauZzd6oSMS5a7C61F4ebUNiQDwrLZCb8KDVzitS95YN",
  "key4": "4hhLY8sBUmJpYQdLKSZazXuFZCTkrXeJu332Xbp5k15p4R7NqXyE3LRajL72Wb8enFUo6ZLEZTNEtUAs64ScvKY6",
  "key5": "wrCxvPZuJghQ1SqZVL8mhBnoi3EGUWmppY7zhCWRvCo45UKDZtAB83dRPGArtnZGkVtFxH3bGQsBD9Uq2iK24J6",
  "key6": "4TEKgDcJm5h1sRGS73WtCGFdAoipiiUB56gb1Q2xYidEz7NjUxcgAevucgcfCwJnWrPG4xNEJocDazgDVqm2kaB6",
  "key7": "37qGyDwJr3keeSYYfJoteTwqFdUL5BztqZQRem2Kga4BFcMJLZUzrY13G4kD7ACUV7J3QNmBY5DFtWVAfhDbbZYu",
  "key8": "59BPLhM89cieAUHeAMetQmMGVpnEWCACsuj8wtZcdn6D1qKSe1C4JLm2Da53kmoPaJXxroMJZRqM2BPG9QG5DAPW",
  "key9": "3wsqZGVkKdPfSTJzZu9qSpzxz6FgVqHSqD7geLo7gJEbyRuNBzJHWfMGhTJTcMSG1fQ3ghQB4xhbrA6NTUR4Ppjv",
  "key10": "2zxjsrzn1KY2xoaY3iVTxfjr8XkFDusXoz8Ujc26PmDzxVjNGxNozSiiwJh55GkTBYzNvw7aaic8B7NAhxd3ufKT",
  "key11": "2w3cHQR1ZW2phr7cU2msPSUkxyksuwZcssYWQ9nWvBuzs5nkUxZJR3js7H9twyGS1hEUsQY12m2zjL442L3JpNca",
  "key12": "3NX1gN8mXmYQ3GeJenZtNo2j7Cd6La59Zrb44qTMcMC3KpP6a5D3JKHTgr5i8QX6AUug2o1231VWjz6ZcdvnxeiZ",
  "key13": "5Wm2ruDVg52qrpLwnDFtpSvzYwQ2qbQbFwGUkbpw4Zqgpokcr5W66q84KJBywvY4Zfh6Z4kv5z65Ami5hqV9uLqi",
  "key14": "4nqKtJUcDD9LiQVgBytKtrG2ktJPFChLnMFFzrKZWCFMSEHU8PmZEwshQtQ14Di9pAe1fVyQ8wBndSBJsKzDjHd7",
  "key15": "5DY1Poa3XBok5WquJMgYP51NpT85EtnrgT8ztjF5USj4Tt2u67ABFJkrfpv1JN5cQ3WzCd81hkVoTUUByc5izxxp",
  "key16": "589BNJ1LTcPzBpm4XDZu3U55dRZk8FEsfrMn4f9nKrw33NfGTH8jPyfDJEJNVnKJ2HnS4m3e5mmCN51xpQSwsBVp",
  "key17": "4bT3qd7Uh6viU2MHozDNw7LsqeNn8cH78C6QY9u5egNzV3LV9E5bXYTBMhL3Yy72RMA5tNt7uBkzceYqwrqtzLrW",
  "key18": "2NePNZReApg8M8Vj3ifBrWHxqqwUpTe5JZZ5eUnN6hJpJ2xe8HXi5wdktaHcTcjDnDELR9GSFhzHyngZtwvUjtnf",
  "key19": "4QNje8y42euse24UKJq5vvcc91KycRqYEyLg55PL9LfkqQcaeSQ7Now1UbJY5ptQpRbNyitWPBnZvzGQdqxBdpAH",
  "key20": "3nfAgGmdLqMHKnPyJFBSgs9dBKES3oK92uVia567eJaQ783YoeFqYmFyX8LC9TJoT629rX3BcLWJf5D5JdXr6PkY",
  "key21": "3zACPmoFpbAWHwMUgihkdnpWMa93D22YVtytSXQiYf9wYzynPZoEjbkaaxDZhvewQqAJgWqn5KiAw8wJWimLx72v",
  "key22": "4VtcjGS9M25oSyTme36ESYAwiLiGgPEyeXKAkA18KKT7GVEhdDW138quoEGU2ARrfoniR677kyfBFBrf492gHjUd",
  "key23": "3XG2JY3NUb6bWo8YQoLzoHymFFfEwvqbXm9NViJmpC5krEGtBbzJYHooQgyQyJxJSLHrg4x8mag9CLPRh18HhpAP",
  "key24": "2MnzaJdcrt32X84yWmAErUht7ebvS43nZizmeeUJJiKs4jyFxifFopBPD7wTthKLgyAifRevLsskZWyFyhKwgskp",
  "key25": "26ouJGp5KFX3qcFoQTaMgbDFZpZ5n1wXQ2nytyfNpWqrUU2mdCDQoYgo4hW4ovctKwoGjhR9AUBqDaa8obz7hNbQ",
  "key26": "am8PvGwLQPXtJqg2FincUEfMFt7HpfbeMgAP5Gd5tXmgCp4Pesh3e4HBR55cc4tguZRMYPyRpcTd8m6VULghKFM",
  "key27": "2SGuntkTcu3jykypCpC6Y8TuhP4XsBc62Rqdha4UvuGK1Kk3H16TT8ag6aUi3kiatLqSr827572WftVizWyxtvTi"
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
