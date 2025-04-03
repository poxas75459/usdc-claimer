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
    "3qPiZ5sNmVeAjkzXLZzRTZShT96Yoath7n1bueXZrwrdic5XQp7gp8iRvrEagY16vn4RKKXxjsR9JkPmKpQjjQjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qRYaxJYMXdh9Xbe33VXu94P8PW3V5cDt8r11QDUQzasYGBvGvP1uA6V9gi4oDAXTh5fejo3v4smoMhgQWEBBdeM",
  "key1": "3YqkjWvezZ6thj5vTsGq8amZnKDBXBW1ZNHnjysaEVCsqqor12K23psp9SFFphvpNK4wmfFHpfGd73kpT9ereuuj",
  "key2": "2XuGAY85t5VEB2d1pXqqQffUQpPjxnYuUUvLfsaeFRKUoTGMceT8pgyxAY4KaVMxhYkXftmXri2oKzFrLcnFFLrq",
  "key3": "5s5gpR6GDLXJruR5ibDyc5S7E7c5ghvQxaNC7Gy4B1MUEfRWja74fw2PAhRnZKwLFLMRQwYDeAHcUP7WUv5NCsgS",
  "key4": "2hjffp9cm7hz47vbDswLZpxds3CinxFaU7ZDs1DoAozb2rZrEL8WNS82pS4nS3opXLvLJYpivySTt7wKGmTZXt9k",
  "key5": "3sAELs3DQMAyYREhqnzC4hJ17mWBuWEm1U981duSMS4aE25GQeCiBcTkTr6BtZbWXt7kBBANHreabkGU4P4qgbnX",
  "key6": "2MhURGLtqJw76awCtGdVBL5zJSS3dyuTdGRN9M97iEPKBpRaBpjxBd74T6a6syvX1C1jnS6NrbhWFfX6Cr1TaLj",
  "key7": "4ibqQv2UGFkfkJ3TGikXgz4y74EgiKtsBhm1gWZxweskyu4zanCMLUzpymxDUodpLhGoYrPqRNYzUkkUCtevpNRK",
  "key8": "2LE8eXHMKP6wg5BoFNaewWNQjK827WRyhd8vGDh44ygWy4bcyt4zDAAdEth2v3YFMZ8m89X1JtmdbCwenpLXPxW1",
  "key9": "2nY6bdKmSkwwjwnY6D1ZC1iPNgEc3TNb659kYcZnw6hhYZWqjEpac9arCGBugD9eRxZAbHQo6MX5LTfpKSQSUG7d",
  "key10": "7sQF3N26QEi45nhtKN7q1yR1ZPyJeEhtUQ75sjwWXAJ4d2EGfYUqBpSf62iarQyJtdVLbJ9cyxhHN458WbGFFdP",
  "key11": "22BvtweJhpHLyydumG8JrDYEQnWzGDoMcP11bpcQsXKDZnwHruHCpUhvN1TzNyEXesbVtahsFueJXTg3TfaH5ex8",
  "key12": "5ZoJWViqjhVkDcqAyNZLDDLNL2yemkgggwa1CrgHVUMANcjVDNQwPWYGPrmh93gHJmyFsNdBCMaUaFpZ5PvzNZYV",
  "key13": "2PUHTikJBRiE4cuMeQAH9YRounj32gbJoa8BPd2KfLFay5yUbJ8AvoFuf78MekdVS5Yd9kQGbHzZkQG1C2dyzpZw",
  "key14": "37nuL3tNt6i2NdU2iM86DffzoCsNkXeFnhfSu5oVXQKHpVZ3YNXdikwqLmFHRcr7J1oy2rRyQaUWEMb7ELoSuYqf",
  "key15": "3KXKkmfPz84MhVcwwju21gBCK2iX2b4mapJ8JRJGZwQLvfQ5tD3oAWUAPg6q1s7X7x5b2vwwhBrUBqG6Sg7HFsp",
  "key16": "2mi6bUAiFwUndQHvtYapKKgQdDQpQjhXmxN7hVtzEgZHdv6KoYp4SDX2tbnGiNvUh9yJ8nng4kFaqf6aVPWnBv5s",
  "key17": "3QSNEVzXPcJR8RZGHQX7nA4aD9Ak4LRTTCh6gajPitUjQQ2P6n6Ua8HkckcmxbbkhmLz7FyGLyu9KKikbG12hS3i",
  "key18": "x3x7FDzZcN1Qi4kMs1Vb37u6pPHRMUDGAgdXFou9Z27pmkCZoJ3KZrFKJUUyHpTGcPzohWq3iE5EwLY6g72aPaB",
  "key19": "2bUmgnzRMot6AdnMt5ya4bNjdsxphzKcHrCKzLrXGS5ZiKv4dHKyZbyWjvAtzGbT6b5KPS9pQotSonUhm9uR9Fc4",
  "key20": "3etjShFSN2YkiTZbh7U6JHvuq9kEgRYyKG7dm4fpDDZSrX2CZx3Vd7AaxqVvtpJGJ58wpDmuZZcVVujtYbhX8QSW",
  "key21": "64D1dwqgJoh2aGiLPG5djCjvy5ChPHq7PsjS1Wr8eYVecnoRSmhrFr3gxtrUSd3pPiCnp23bHnig6grCZRkzdbbB",
  "key22": "37bCyVGe1wTZY8JY6aR32JPyrA7JndpBrjWMKKgUKWktgVdgzn1BUtVGUdkd4JErLG5cte8Kf343LU61Usihrazj",
  "key23": "37fAwwm6JYuuzsu2h8ceMLoyzRsDKPU4DUEv6nTKLmWs4LW8v8KY6RqNTwVntpjGB1NkC86MvnmRDxxVYtKbJ7vg",
  "key24": "63enwoMUQsxnU5e2gYdq2KN8jt88dtjcWjHLz2Vwo64w8r5nT6nWF6nmueyiJMQvmx8d4TVkVmG8shpoAS31Cozy",
  "key25": "4GYCjV9KdhsAKQU1o4ZW9FgTHhX3SY6rkvB2xDWRp4MATe9TtjWT5E5ReHCXVxrWGL4qU1nqb2mJ6a9Ej8W1Qdpx",
  "key26": "5xbcXrP1GiRGovwLbj64YLdfW5xEfgsFmFw5KHSrU6XgPvJVLNvfEm6pyZX5Qd243CZvxYw1DGg9SYWB4JuZMxpS",
  "key27": "2Bn9qAwzMhoxqq4xFtcCmc96J5rUrRTBVQjsZwmD34GPLGzNPRADYUjwWZ1XEPJxoCfHhGwLkCEacLfxWg82qZdw",
  "key28": "44Mnis58Fo43SitaV13uA4c7iXqDqExmguBmpvMo8ncEqd1EBYBB4NYiHJ3gmy5eHJmkufPs1CgV4JUK7x7hFBEh",
  "key29": "5DXRpYyXDywZ51szN9Gq58Gyq84jRCCvcZDmzQ3W1R3hqNatenrqgcbQY8ixRPBTbdTdeMDxbkNP9hWc1wZaLPQi",
  "key30": "217LTjMZgSnj3Byz9w73bHSox8xJyM7WadZtC5da6jwbW65Ja5tgYMu5RbgJsXV3McNnnBD5KH3QKPP47DcLEzSd",
  "key31": "3NJzZHFyeuRG1Su2CMsUNFoct2jqkr3Yfzu8c3rv8Rf4vB6w7KNThW3G2GW8ZqovzScpqJtrdAAWmrbNkDGQeuJL",
  "key32": "2aFmqq4BTMav3PRcshaxKSpCyFozq492uxzCC8gmAQh8DPYEg93e1BUZoHfFPJJAXjE17WeipRaF54AVRD1j4rET",
  "key33": "4T58YNmY58br4Aw32BFrMup2E8o6sZxov1n96WU8VpW2yM9ahsxgwXxyA4w4XK1tq8VF5Ru1VFAdTQ2spq2Zh73B",
  "key34": "2zmw3UVN7QXBZRPEAeNj4ZSyGmiGGZqar7AaibTdbtbhbbhGyX1DREuFSANJ2EcfwdeBxV31nRFu5LLNpZeGVaG9",
  "key35": "4cEm3kkvFNwyLgLvgYBXJZ8x4GNA3H9yicyBmw4UVdDyEVnn6SgSFHKJdb1Shh8wtP14fnyaK9xiWwDou6tJZkMx",
  "key36": "35BSGXVwRu4NjhaMgbLj4WNx6q6zRypD2crgEzmrEf2fssXFYRv9poP2Duv36QFp2tcPjfey6YjnfQcHomwnjPcg",
  "key37": "57yeGsLnNYfXppvKZeiQ8FQSS4urjAeRc35NQKtgFiNuEj88t2GF9ARHuC4CfqSqyDyU24UDiKPt1L9zEWYV7kdZ",
  "key38": "2cBQWxxvQgnFqChNFtujffJ6gymBHVZyLcF92gBCYQYm8KFCNJ62NdeG72PjQL3oJRDZiW8TW2CxHS7Y19pLPLh8",
  "key39": "CeYdCGbMDXeV1sBxCviJzqHs3Jz1n4YPikWehhzrHnDgL8kCkuA7215TtpTXCYZFHXDto7B6tpmxYo28mLe1GxD"
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
