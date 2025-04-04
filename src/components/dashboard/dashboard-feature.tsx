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
    "2USTYERYuxpd1knnjCFZi3BChi1QjYaJgb3LamUbjCjxwk2sKMMuEQPTNXLUkrS5T9xsGjnKhY6fDoDWfJXmqrUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDZ1EwTKBB4tiCtREayBckgNspu1ovvb5xdbDy99F4twWrTVAdBsQTqKCYChCqfitxdajjoq8hHutVxaDEq2Wqr",
  "key1": "3B1Q4xLWucNu7PPtr6Kz3JkkiAQvx5Hd4csgXhMnJgCj1soW8FnhxybQMa1wHA4jL8ppWx6tfd55Pa2JiqiL2825",
  "key2": "9E8gi6wcr9HWbkTifTW4kATyhozUPQ378L5v7KHGPXg9hNfAGD1vmA9gtjBdjoEkB4YK7EMg2pPAEKPrHJDjtuz",
  "key3": "3qgp69BXnwazzcLyAJBuqoLEkayWgZBBckwDmUgCQsMJUPapSawenJSVjUTBX2FQEsw5KSdwMX2ebCZA9WTssR8g",
  "key4": "4CDVXzfgMAh6m2f8x1WFxSGzLywzW6WFWs7yogpofPKjrpvKkpuF46ZPhZXATskGY4ifweYbat2PM52AweeBtgk4",
  "key5": "2QiUN7WQ414UKAma4KQUC7ymi7Cok71JQee54CErhzFzeNsnhVLC6s75c2eUe34qtXYqpEw4fxCgCn4HGHzfWsoi",
  "key6": "2NcndoY7LCcMohKSCF29BWTWh6GYTe6VxH33ND2wnxE9NEzDJd64MFGiTuJF92YdsKxFEU1YumAjimAYrnvu7UK6",
  "key7": "5Y4EcGaCNsxNXCtwT5bTByDiYfjdpjhwWEYwXpeL6KvXGPJUQfFicCjGEyHYYhAUJXT93NFoBQKaXCirfkhNRC66",
  "key8": "2o9wcHAhTgfw8YLC8qrVmC6RtPsBQStTgDxrabMcEGLJ6qsFWuyMoVwXQVQhnMk1Xv2Hzio97pywd2n34dAfbHp3",
  "key9": "4KdVFWeCUg7w2gnFbPgAYeSZLsbdACUnvFLfCzDftEF94vG7J2MbJZkJDeeuoHVdVbqUzvA8GG4R6jknoJpetbGb",
  "key10": "4KCb8PKwC6ERnBUmzDx1SfCGqEoq7rqMBCQbUfHxzDj8JkoZncJjGdx95mCNq6o5Y8y6vLtRuMv7XfjpakrXPKtD",
  "key11": "4inSZ8xNBzXQXoikD5Dwte5gkZr3NE59oRsQU2t3ZjECjmG4am9a86c9tSQqag4b2MZENSwR1LMuEWXSVekhygyB",
  "key12": "2Jo6VCe43Zmv4TYk5aFez8r7ioxu2WkxMN7MBcACrmzrx2j2eitJLQX1h4PDb3z4RunzsMYfaaLBJCzsU76935GN",
  "key13": "fTrTgPQVBv6wS3Dz4bTimiGrTfnZxFBatbP2jfSoABrHADnkfqdBCucWY8RnTU2D9Kc7rKHdc9fDXwxx5CuBmzB",
  "key14": "nyjHPWhbwQanB228JTyqz4w8ZE87ihdAFJfHvgjSAvTDtCpccKCRrJFubXB9YWEE3zwwcZTeWbLGbSAreBcC6jz",
  "key15": "2zCsZ2t7To8mBR73DbfY4XN2TnaREeW1NLYtEqGKYahRPWzoXjKXu6toxGvCWnZZK8tPBxJcYQXPQxhEuWrdD9M2",
  "key16": "2NK7xm1SQrZ2KhKvhU4ybZy5RxY6yyqh1GWYrLwBeoPSuhk7jBf35awsuVMSqAWYrSkH7EVoVWXZqunTQwC7o58A",
  "key17": "4ZpLuVCnU1LrypeFRkz2VxCG6WJcMrENzmiAqnka2B9HSyZryp7iVHsnAJZ4xT9e71zsWirjRUArYmjayaL3BwFf",
  "key18": "qzzbAqsVeVNZwJYLuJH16yBPcRdwV2Nn8jePHid3ijjvSNdLkaZkVEwcmvSQLfESzDLX1cUu8LGsdGouTGtiWub",
  "key19": "3wqWSmFb9zsbbhTxp8wVs2yMDkybwDRXgLvWpoCooERpPw5oDYd5uMR7qc47fdhp4etnBnyX7m6pf5VDZ4YgFpyJ",
  "key20": "2FxgaXVhC9y1k7WFrKqc1qTkirx8vRX2kfkkX4QnqsHfkWiLv5RDNRr1ptMTw1WQqiQP9scTy9Z1HJXkiTQkf1Nn",
  "key21": "5o7mfY2x12YhqmoZ8hqHZYZtUsgGBoHnrtYbeuVyQmAE3VRrEHu5KZFExjpRytZVXAHA8f983NbLsnoizWVzKWyH",
  "key22": "4P2QNbNK6ca5ZYwro1hNacEu5KSgaGcHUJQsPn66k4HTsJisamHyXfufAUrZJrjvNbtbXaoLmqcaErJBaXrno3HC",
  "key23": "wHT5aJ6mreTm4H7159m8nst7YzKmP9cJxbdZ681ZYqSzMW3UDxZpWmhAbjgeXB821uQHwv9ZVNA85gryEKCpsBc",
  "key24": "4ipg7iPJmnKXiVCQv4EPVMuP2t3MkzFZVAZXrv1rHaTwtwV3BSFq5rg4hsPjtwf9zS5frUP6yKm2NvB74MW2nCEA",
  "key25": "3VtwhnPtQVoiBgYJTVnuWmfmUh8crkQ93Rmrsk9TJ5djnh7zVDNcYBhcQuPnxjeQpXM6htghvE5d31s4W6gAm27L"
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
