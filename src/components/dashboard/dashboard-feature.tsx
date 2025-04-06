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
    "HRFKPcMFeXoXmZCcVVu7SyjRPpJdjjgYvyiypqd23eRCidpVhXYoPepVZash7x5p7vRMg2CA5scSXcqHouoZzCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbwNGt62rzGYSp3AQS86SytpLPHzExWWX4WYUnRT6eaRgXUvt7CRFym3mtbf68bhfY7GTQoqWAnHWngUHHQggpT",
  "key1": "4wbv4Gj3EvWsSeV1SixRbStPP6N8dJsUVStRekXWr1fucmjN1xjcbcPhatjLQoH46TeFXrVWiTibMm8T7exnPeCL",
  "key2": "4V6Bk6nFy4deewn1tACPMTnQKQDT1vwbNM4pg7s119PsuGXKMxNNN1Xu3jx5GntKVxZNmmktDLu1xXmJH6XyPHQe",
  "key3": "3FaWrZoTEb4BcoeJPGEFbWC814eq5rRh9PYABEcFtFsuxUytF2iHD3MUMRvJfaERQWzTSPxdo5FjcJPDrkYg9QWD",
  "key4": "2sdcgTHVyuAyUGkWJ733kmTvFjAYJ3FrgWVcfK67xEfitJUF9cyoLvwshFDsfWKz9oR8Uz85n7Hf4jw1s9MyB7x4",
  "key5": "4nSRemQhR1veBpATaJCnmfZb8CA88uvPpeUnjb9HeVJFHtB5ozqwoTSFsoKubueFtTNsRdibcXjREwoJWkeo22fT",
  "key6": "4Qg4MJ1w1UVeXasxgfvS5PZcwk3Du65zGqW1xhuVwcjNNoASH8DmRjrMj4Y8dkHbVFEiQ6temvLEfr2dS8bBqNY4",
  "key7": "4MDh6337FC7L6UuPCb526toaF84UTANzDdyuKwgUfn7jkDRWQk66oXQ8d6sc4qbYDBpAtyMo2B9UDG95JqMhuPiZ",
  "key8": "2KCkWqSwKQcqAhhyZvchDJXJwLqxjMadHkqFcY8z3hCQWvKYdd3LF7mEAXUdT62fbbVkGx3phWXMKsiLTQLFkrf8",
  "key9": "2x8HgiDFsc7pTB57zHz47cZK8vGx3gejagv5piz6J61mhVmtq3mrjqfupP5ED1Fyi5w5Fj4Vt4i9JPKRceqnSM3m",
  "key10": "52tezz7728Tg87WUzxP83Ee7JeXt6Ein2fJTEuxDgM3mG88XhJsRGc3q7QpPYMqi3URhtYjnyuMmSTEbqMWiuEJD",
  "key11": "5YH3B6NuJE1BZxoiig5yKEGskUHZpGR3j8UTEzwL5ZaDBEcYJ1FWGomb52SyknC8rQiVoVZJuEst7q5iPUUnsbGq",
  "key12": "4fC4aj3FhzfQBYRKCA6s7BvnCVefXyRvEE6ubaUuzy4rcQfAhtbvSLobLgVavFbSMoKd5kj4wHz1e2ijqHxKPmzM",
  "key13": "4vAPs9tzxJH5Vzt9eQC2cHebNbCJCjhpdDWpBATKoYdmCyPrB8CKYdkBhYaS8rQbz1P8FkZurF4JMmpNgni36MBq",
  "key14": "5RyKYVEJ3kTXF3fcvNGhh5pFSy7ELBaCUvoPEBUNNzumjKhJVpX9Po4az2RDTuiLW6xr7RqmLsNXQ9BbRrbi3sgh",
  "key15": "4RaaF8HWyoiYgxZw2brEBEP59LLuHjGx1p5UPZrx8DizwyFdentA9cFNwh9eCi1bTti8xAy2DR8uAFY2T1jygSwm",
  "key16": "4vKWCP53yLZCrRgGmp3LBpLHfSRwXJp8AN9W1L6xLSSDYjXRbneKjDAM4Ct23zbPfnyPBKsP5xvvNXRxLfZqBsck",
  "key17": "2nG3XAoUFf77N1LT5hLxFNcGLh9tiSAHbwEggCFCMz92ZUhD7Qbis4mK7M2mZ9SgTL2CMA4GaeLqzpPf4sRRG8cC",
  "key18": "2pZbYpqwZdKL6h21jY4rLw3LuUoX383LXy1DGbiYAqqgsfbE19pWcoodNeTWVUkVX9b4s4r9pwi65m6ubhJfwHoU",
  "key19": "57iAR1YggV3Ym7SCYf1qNc4b3bkWdKJPRgNnXHMGCXxufwu8Qw5bTLcSPV3SwZkspNppqeSDsj89PajzDGfCCwQv",
  "key20": "2v5ZhMXh8H4k54ve7EQgcaYoa2anw8PrXVDux4pBkL41JmbnBBpHPHrpxyic55U85nC9HnqWCVeLtap2HDErK8d5",
  "key21": "4KEuhknVpBVc3sz5TBDkwQjxKENvmMLQMqPvP1c9VPGVvx498tPhajYnMGWtnF2yKMNzJ3wdBWpJLjqoppBY2Zfc",
  "key22": "YeYY9tDZwXwFzjTeCGRvEGx56pBfSrL4SuZAYRQH83CxXET8szU8gdXbymyji8RUfMe8j3wRkM8xRxwmoQNGFNi",
  "key23": "4ESQhfMNpRYiY8SUrpHdvSrhR2fr2m3A9gBRh7h9eRKAYwzx7LtgDFsD2zUQtHKw513XHSybQa6TWm3KeWZaU4Rr",
  "key24": "4S6vV9BNagn6XxxCxwisBu1ff6J1kPd8GGvLBQZ5i6YAmqQFV6jdmnEHLSAoE9uR7W6p8aAVjXNXvuEPA8whiMer",
  "key25": "51Jysey81ZJoQuPheTQYLvm5raHctPkc4LzbXPFD46Jo65hDSq7krS3XMLiD7dw5kPnCRnuFAFuKf3CHRHyK7f6m",
  "key26": "64YKRixvKB1NgkkmfVrn6JpFV8Cf4exsjLgcmjc8eWJb7Q6YsFrwin2CFkNrmU7pyotCfvXQUHYobFzZXBQ5ndgp",
  "key27": "4xgsPneFtQH5G8kqD13y5ZP87qnR1JdiMKiTKQu318mevAXJqKt7AWJiGsLE1A5K2KRo2aecWZVni5cXm5baECXM"
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
