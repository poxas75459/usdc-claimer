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
    "5kAtPPPLi723DXfEqkAYc8xo1rXfNv2B2cpWqtNKd2y3THCGTvYWQtx6hdzK9tXPDgMPZyGQyjAPrrwsh4xSJAs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hoT9jwKYAvHx8LSZGFwjhrq4GkZQJrogTcWGjy2zPjFEb9HDahqXtdD6d28GPvzjGsaXD3iwhk1iNMUNcReWFwK",
  "key1": "2Caq8n9Z6hZ6EnFgWpTZCujZwBYxRwaaRaAd2JYcjwY5EhefYwm2NP27uc9egf1kw3TnL152NpHnjCNFnEnhQbpR",
  "key2": "4hvtZawiUHheA4YS3Fyx2xif8tbKYMHFLyER2BAcZ5fefYPgA6r5uqX83KwSZ6Jdz5T8a9NZbvMfoiZHvbH4oRVU",
  "key3": "4Q7HdfAevPZXfjfydjMvGv2dx2WWNX4XwmtdgX1cCEDpKiDVrQqQGihBZqGB7pgHMZ7KeaEjuZ4g5zj86bYMTSJg",
  "key4": "22FXvJMzQoy62RBU2JR7LTkPDLaByCGMTuYoUSwSym9k63CRomL6mmXS5C7mWTZQXzc8iw2iirHYzxRhKpQkYetR",
  "key5": "5pgWFpDTjrUniBMbyGCPZta9vUy3cJaz8cksEwp4ZD76g3HkszsZDKX45DjK6DapACykcVMdYQPuBT7NodJLX65D",
  "key6": "36kFenqvR1BfLfUy7tyirCbs4qyruXKXsyi7LhN8SRzB32fFiaH6Kuguv2WoSEDjpqwaTD63obnf4mTK9iWk31NN",
  "key7": "4YkGWgzV1P1QNGziKXEavPqA4bRjknPYota18eaq4jjo83WRr1AmS8k3ur39unBZM9fiFC7rYqka46EhHxiJ6DgV",
  "key8": "ejK1v8GoZmWZJKsS6hDevW1gBzSZKNsqLU9fZ9uLe9ehhjKmpXWHagXMu3f68TWxZdjmoHwDBUqD4nNM8RDFVe4",
  "key9": "7P1VAVcAPynuM6wCRQoLWk6vq1sUQ39ei2yzwGdAcpYbVz7qiX2f2YfCyW7Gh5VtgGNUuSovnQirFrKHDxZaseH",
  "key10": "5u85AaVtwc39dvF1rymNMvMCvKBhiarDGHZz566FWFPTurFfnfGeyQBxkBzETHYBtR61QtDcZTX4rHRNqegRpEGh",
  "key11": "5YjpXreX9z73THZjhUpw1eWXKsUBmnk4fXRS5NAhwXPTrErAE6p1wJ7Cotbv7YwcKZ6nQsGVmNoWUNYMjofbfTo6",
  "key12": "5Asp5UbHecA84iThe98KjnR71CtcYbp46348j7oh7UwMzDqEgzvMGgD6KbJXjJjwKFUkWGVCsxCjFRjVTftqVXzt",
  "key13": "2rCis8CR26bYrjjqpQecwujfEGjSGjREZzN1X5w5DZHNPGxNVCJ7c51M96hK4qbanjTHA5mmGtR1kGmt9pFXCKP7",
  "key14": "r7gqvXNZo7yfMWbMxzTZEtRpgjpmbFW74Ur4L32kdn9HU482FFVWSWnUh9DrEFY3uaVWkWcpishAah99RwUKVxU",
  "key15": "4yfvZdpYddigKjFYfgivAs6Jh9DcyvgRC7mMwkALAt2qiiPdYFHQ3mXzXLUiqU78AfVadYRkcGnauJjtaFEgtqyQ",
  "key16": "3V3wzByWsZqfuStynpnkdrVEpn29LvSpV8Z1Q4CYzdBLmq6N5bMU2os2UeZV1sqKGbmuWK8eifc1qmjZH4CuqF6G",
  "key17": "3YeYv34R3sR8a6HGQ2Dc4yZiG7MWhngXWQmceFhWmVh8oZJrHmXVx6mmWLoL3Lcx9Q8uSnLn8Gt2dEQmBmZkLJ9b",
  "key18": "ZUimAy3hePxdTJjvsx9YXVTFKizDmd6fxCAubUbi6K9cwX4rGFMsJahg52234ywaJ1TAz3NGDzFsokcDwMYWD1S",
  "key19": "5N1P6sHbBJxA1miD22wEAvv6nyHqiCHMeeok3VMBBB7DNrRcE17HU4dBbQdVS2d1FMt3MpHq528JtCp87XaNcmJ8",
  "key20": "xRQz8Q3W673MLDGkwGJKYtwJFNsweUWRfgLWQWanQ83fZ1Z2qtrqtgsDZy4zDiubKh35BWxzYJCA4hqj2j6LYWc",
  "key21": "4NWg8dgPKG45QDNrR8BucrLWvoTeba4kuvonNNkQxzLMmbBvzzWkNEZQFRfyZGB2bUZ5CrE3XhJRSuZ4hnhrK51p",
  "key22": "3pZvNVPZFGGw26gDUTWudQQfe2tXD7pPLU5Jq22g6wsoTjckJCS8nSM5W5okhD4v5vriGWp5T5bdVJfpZ7hsrhcB",
  "key23": "4Qmyrk9oxboxNwK6r6wbAVsjqEYfWTsQUSFyZsemGGYeNbyQaKbnsMBoE2NgctFEJSCbNUKvkqVUFKxHJdz35Kih",
  "key24": "5GgfKyVJrXegHKXtewGwFXdkJeDxVT6ajNWJg2FfBJerqbPL9oMd9qtUeNFyfbqMvx7wtFVvwHuhHNmPXdQ4p1WK",
  "key25": "4NrV11Aj2evkLZdiCBn27e4fKiYhbBA6JRkV9Spmo73WrbT2dtJXXWdHsJyKzzuDRJxqSDbwueVGN7Whf6D9SsvN",
  "key26": "3Nz7pJisAfgXC64913qZsnxPdwEXBAQDL5N3RbrWWhPQZATa6wEKCiKzHnjCCBy4yZLQKgmDzkVDokHQxU8qSzpx",
  "key27": "3fn37rfZqYdawbMKHLXG9kHkdRMTASJ7acbCS5h8aGiTmBv13G9d2Zyenuk4S9V7QTfBh1mXcuRWaynhctG7sCxY",
  "key28": "66ZgUazAGMMJdWb4Pe9nz7erJ6NkvP2USQ6ad11KL12UCVrdbZJD7r8RBvLg1d3iB7dyvR7YD4zFAsjM9gYBadNf",
  "key29": "4ijfcQR7MHDeQWUB82RCmmrkyPrRhWX1QssRPGcAYwPnn4EmDc9Csh3aVT3XUMAYH8bRLZegX6LmYJPbmBxACNjv"
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
