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
    "2P9S3ZKffJjWbtjXQy2hb75NJBSAzeDxiqT6jKDg5Hvupfd9y6DubcvgxwnUCzcPSvAxUDd1QJctg6U8fEWiUqT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRKhYKigKnHvJd749zWfNJ6DFLXbrx5SDuJAPrNH8CYTEm8gDySSQTPegukRcVq7dAM93CbEDGpqczjEqNKki2V",
  "key1": "QjKs4KcHxSGc7S631K8hthZdqykbYt7YJrQR6bXEvDsGNXE6W19qeWJ6SVwowMESyYg6EbSprCXctz7645YAs6Z",
  "key2": "2DbcVhjrhVcsMVczMSLCPFgNdJAaZtGUvRRrrwMUvf1mfPLsnaWJstWWvLmyNfXfTaw87FpMqhaDWEigyoXig6YP",
  "key3": "yPJiAdU5mNh7Whohb3D6E357GW3miqKjBbA9VsUmCHBg1EVPDuZKZ7hDhP5zPCfnZMm2ydedVbWPWjHTEnkP2M8",
  "key4": "h3ujGVPJdbVQdYptJSafDgR2swTczmTTq6uhYFN6mVxuiN2UZcoeVhd19L14H6aGdTryGWA7oGxwbYmTQ85873a",
  "key5": "2B9keqmRJx5WDJMYLf49mXQscSgSTjhVJtf7CDUpFAEqeEUwHDyWKL3X1pDqfdrcKdCiMqSeypS6csNDjaSP1iUt",
  "key6": "3K2G9PhSKq72tMuVxgwn9HHEGo1vfMfWdmoFY4FXRzSs6FDKUUAoiK1Qd3w9PX47R8V4robvdbHUUXVzg93DqYX7",
  "key7": "2Mj7TgqZaf4hDr9grngKSw4GXCFjQmNz9c4NXdAn9T51FN5LTRoo4YS3PsntRSJfYE81kSQXx3ecQ23uDm3swRrh",
  "key8": "3vfySQv3okLQYhjURwdgxsbsREC4RPaMYLH17XVTCipZWoPhQYbJtawbRr4zWvBJSbnjdinPJ738kQ9Ng2ccX5NU",
  "key9": "61vkpPyZt6kvzwnVw6AgdgxyHeFrfZR5PAPuRDVMBK3HwT3USCGXHJWLimcyxMhMV7CaLnCtxAiHyYUgaALF4NpE",
  "key10": "L5vpei1FgJKapkias5gVvxPGx27kkJggTYuF3zwt5M9BeMh5R4mE39RHNd3zGkMw4j1ah4ygP1wkYabQGDk6jAf",
  "key11": "3BM9sVJN5c9cdLZz5fxsH7pBjSAgjBx9XtU1cxXa2dzqA4tKCLaYBbCV8xUbJuYxhKTpYJcswCGEu9A3SN8vcZBF",
  "key12": "aPAnXRiMT5pdsUMLFP3icUb6qY3oPhEtvhFz7PrQUQ5bPyPti4NZFMxs8y3JG2k4FtD633WHg9D5QBmi7ATEPsm",
  "key13": "57wWDcW8tA2u3cR6pZQ8iHCXoAchjsxabGYeTDWPy4K3v6FxB49tPfGcwpYoj84kVYZxHnmJvMLWd7MEFuuBXzZK",
  "key14": "39Leb2Fpw6kzJ3X3RUoeiDPRS19zKT5GG3z9xPew2y4Gjf4bDmAimdGaaaKGQfMwXnpDgbnjCJE7BX3UWrWb6ZU6",
  "key15": "41ohvJzWk2Ad1aNe3rqbC2bKkxgH75FV2n5zm5QRQmS5BtYX6Fd19f2oHfYBRDfoEf67bM5kZWu5Q2q2L4KKqyhy",
  "key16": "NXjxetFpHShWpUmQkXLw7NKbKUmwyYiQWAjTr79g35UYfCG5SP5Y4aNyibNojeHBeFrh4ds1WndL51RkE7nxwWL",
  "key17": "3cL5NzMR7Zthr9VeZTDLHT42JkkrE76qVYec1uM4Bu8vTh9SH71fFfiFc8r3FFfj8ogVYkDtdbuAQH5m466B48Pg",
  "key18": "3YhDwtvxx48GjtQFLbGQa7zqQ9h1zLAtEfnAJiXrY5wQVQs9gRd4D3W5c9LmC9MoXML3MDP4LC8RPPZyT8y8pE8f",
  "key19": "3ygUaEYC3tLcPiByWnfkN5SiYKaJfnV8TFxqzgATBj2dFZUqBANkun7ZNH72ieZmBk9x4gDNYitigvZ8arH1UUpe",
  "key20": "sePuv289ct557wWSfaTVrHoedujzPE8iEYpAfddrtvLkLpDyKyngyxJwhsiZ3Xhyht7s1rnduy1pDcDmS3g7X4D",
  "key21": "3u6FQC1jkdMcAixEqUfUk4xSXnH9uJ85dr8XSSiLuwEvx1m9C2CmxvUdWc3f8sbYZUVxEhdHe6857K2jUMEMmWhs",
  "key22": "28KJtEJX2cFNY3HVfjzhiazBux8Jh1GG4h6GzjvDDvTdbKMEraaCSXJBCfD8mHoreA5bmvYHdEq6HuYRbwVe8ovC",
  "key23": "4czhzMBH8byim6pciznR1Ydo3uQ1cYRCTGbcdR4aBGWda9AUzC8uoQ8K7sNQUujux7Sw7996o1A3KbQqge32AVTg",
  "key24": "5UbG9fTdhFsbQ3JV8iERjSUyyJhdfuTyNznsb78gWzQ3ZvNsJzRLoAZxaeyturmKP4HKEbmsCYhiqJ5qvZcKaD5s",
  "key25": "34Pkm4xzBX4j5VZ9g2diDcgFWmh7u8XpyGu8WkTKqZj4HvpDt8M7aWjvSLgpqJveyX4HMABiFwA4aozFAyJqyfWg",
  "key26": "4JQkio1CcVWQsd9WGKXDhJAjR6i8FUbQcHmhW2zA4MjUw9ToqTLsPc6FvosxrYBxzXisdDRSDzTu4y3psd6dwkNK",
  "key27": "33f9AiGgb5wJHRLy6vbXXHRkWfRSkgPyMTrwKG55aQ9Mg6dAxqgXiweXwrtadk1di9jWXZBJiGfnQxQUwC8MnwTA",
  "key28": "2dY1YHrUTsta9gpPapTgaZ7DNNySPxXMcKrpw5Fvg1f3AZv3EtUN78W5VSHFoMvTHWbPXPzPi1Aqh6hbtqqe2b1K",
  "key29": "5PsQeTGvBa7ktUK23NuKstzcxLFBYcPpcvNjKH6D7WhwgKE66mw4YnN5qS8pKMncDotPfPDxdo6gn1juYRvBCwqL",
  "key30": "JjwAbSz8VEFELxuzWRxSjEBcVwsnF9ABqEG5FFVapXQbasZz2nkJXV1ZziaboK1nWsjwXNDYuSAehysNxjJAMEm",
  "key31": "crjKnYo6LF7UUYSQu4hzdSH7BVD4BzLvxqgN9CGsJLmZNAbsZboQJrpYi4TZr3dYZpz6hvaxHmiyTWhTGLGW5Jz",
  "key32": "5LsMNZqZQEdjyDncfSKCYTFy86PnMuEeJYc8s4px5kASV8W8k62dBH3RB6fYKBrg5Z7f2e41mr1uzVeJiWvCnF2H",
  "key33": "4xYBoPvDoqveBNjktNSDemo57gpieWmbUn77TzHc6piMSAFkHySpufsUFistZRgZ4yMTxzdQXSkYbbxuYMMi92bF",
  "key34": "5MYJU7mLt8Fq8FqyPQpze2zY2ULuMNoSk5ZEmmjMN3SrstiYK83uW7fUdkgBY28J9hNAASv16xq6MGbVq7UQsfnZ",
  "key35": "2eq8nf9dNCehhGEXLswxkvtWePNMcNoc8mV8Em7Z3SeWJbmzKyFEXxYs6EzZ3LubQLsXrjBunkSFALLM3RTaiBg6"
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
