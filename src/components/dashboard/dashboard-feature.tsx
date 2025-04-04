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
    "25ztzs9xYYLCsWqYeZYPJceBwSmoAnYRn5fGjp88XpmBvAqbY98uxCHYnntQuGG6ZVJkn9p95YHTwKH4q5ALU1Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5rPxwUtFu3XQnp4hdLsQDGyLSm9F5EZ4UeWsinAwbM4GBFWbFRJLqe7UEazoyg4NtS3FvcqD7kLAnxP4muDDM6",
  "key1": "3JUeN1ZjjeTpKALtRtuACVLcfyxtU2E4kb4NMAbkkYSoKYSFZ2PynWGcvXu3qxkZtfRv6dMEV8GVKc5kWMCUxSmz",
  "key2": "2FCUpcXQUn7aPcjhCuWVFYSuxNK4mBtMjpAzio45BFZukTm6NABo3v3iFfLHAPNn2MRid8xkBCtUGGbUyLhEybYi",
  "key3": "2GFUq9p5nQwv1U4Z3WkNA3qNYU4xnKMVRm96bgifaohgYhYW49FqBepjxKUk3UaVhTmqHMZk1p1zZSvBwDgo8TGj",
  "key4": "2Tj9SYhc9czUuqeVZ74HcHhH1v3hM2aG6CMpjTfFEQkfqsJZ8nELEyKek9SGwaUjn8BhS7Air2JnMETwEZ7fkB5h",
  "key5": "EzGeKz18HjanvEdtMx3oxVcZiVMwLukJz9441YcmyvJXZc6mdrWvng4zMmpeXPeFgJUoiZh5KckXuxLXZXpeUZe",
  "key6": "5JQKj6yTEcigTWSMDYUe4MpxRs6eCK1RdP5JAAjn43uBPQSvJiAbXt2AU5bjnhbAtE8rCSaJSbruQxT3CYzpdBi1",
  "key7": "3AJAjrsfJXWWtuSnqoNA7TnbCh59QPuT8VTZ1mfcFHHQe7y52CSagdpT1KR6DuF18Xwep1ZEJsJUWisFY3AAzrdT",
  "key8": "5gARcjKUg1SofzBbf9ZaQ3xFXBmAfk55QgKYmExe6orPmysVNpwpXLEpLA4EkcKoC7RNXXvi71dKwJ5ay8wMSaoP",
  "key9": "2CooRp3jdE6jKVV24FELPk4Q7Vvud42brMiDp3356CLbyztN9BVTWJRFEwUMzWcrW2QHRYTPkqydS1QzxSUPRhxd",
  "key10": "3YFMWGeXNDWEmd89ZBqn1GwNxESb63w2SEYLFWiaKijNcYKCbLfKZjhMNcM28MiZJgn2i3MUa4tp9YHnT4hCunL",
  "key11": "4HCC3oToANpAHE8gAP5cuWbwfvr33siArSt9ETmN4H6FmATEPqVKQY3p6mPLCfQ4X4Rnd2D8E8kTXpnT7RR3dF67",
  "key12": "5GHTeuuurD9LuafVdy47VuRbjmwEPxs7DKJ9inPuLaMZT46Vuvq1iot4wB6qMEJzVfa85vRxDufrrRU5GNgmTCGC",
  "key13": "29Ju3gPuD5Kruv5PYZYAWxnV2BLz7EdnQppE7jpurvAmkcxwwfSW44d68wAtCnqYtZK5oWE9E6dZ5rCEDHRHJFG5",
  "key14": "3chYYvYEAZ4JQiSGWRT8tBYM8sdWSPYvqaaJpNg44CyuqH1fnizch5mwbapbbW6yH7BzK8mpM4pDn31fYhMbJ87",
  "key15": "f5o9tXpphErNUWDzrnykQ1npZRGEkmFf95xoGVP2xyGro38WXJ1C7yd9iU1j6shWhRiDM8e4CUupfdxeS2AVEYk",
  "key16": "5Z8hXPNurhWBxFNLNXoRtJui3MXWBwrFErnva1v8AiYPw1ugHVzeDUjXLmr9uYiJteaz4hiapigXfh2Spxqm7JVu",
  "key17": "3MJJa1jB2Hsi6P47YeCGAd3kfTfGGBJPeDRoqsoKfKTRfJwD9rVcDpHDhseG3fmBYXx7N5LapQ19MveoGseNLRLZ",
  "key18": "5ZxDDkkXr5Zh8zhyPTxhuTf4ZvJbruVwti3segTsYWZ84gjMeGij3hYRm5Dacagc6NFeRGa3JxJFxyXuwNmwy9pg",
  "key19": "sscYPmRTo4g2mEqFDcrkCWkXkP1NhLboniCJqG5zXoEsy7MfpFyVnvfNHr85zJWRRsx55bvtd7AQtHnL7NW6Qb5",
  "key20": "2a2uppj3qa6xu1ChQ7xaZuE2nhQQGg3pun9XCxijUTsx4kQ6Hdpt2DQm6W5oQCrcL8dYix1qHcZoy44SFh8PphZo",
  "key21": "3vTNJrAGJM2Jb82i2oQmVKrtPuPZCifpWRo5K84CQa28VoXQH88uBeYFpzgCLSQkmyaaUnkYRtfkvC5BnEQHZnGT",
  "key22": "6RZJpiAAsmpsRbpxVPfb3vmUg9SWYbMFD3rMkmTGtVMAcnJeZ7MpvxChU8VL63TPWiPCHqpa95eg4bTBtAwP6MV",
  "key23": "3m5Qjs9qVGFFgNZVyFpkYo7bf54FtLHwhc4LL2XtkX5USrBDna419NJ4f6WGzSqJSzcZbpkp95NcMWSMhMDJz9z7",
  "key24": "3iCaZzYRnRYbbJ1rKvUUfhkE6kvzjSq5ZB787UpvHpbQrTMaucoSo1jP44MHJBnyVWe5MmonkTgLbJF6bhMc5UQ8",
  "key25": "a7CRRKVBSeZ5KqokWPoAVsjszSxXLZETrqYKdikXzxKpbuDB9nR1ZnVsMQ23rv5M9A5RuE2T7XtEqNavRbspDyh",
  "key26": "cu53NYutrkpTdx1xMtry4pgHYF74cbLPwdAmuKkRU7EtpK54y71csBvnPXiJnkZ3YVGedCBqeckgc7btwuomxv4",
  "key27": "5zq4kA4Wb3BRKBwddwt6hoCYuyhua5gdRky8Wp648RzcejbyBZVHYxJcxPDWYuCmUbWfdqmvodQPjwS6aJHKLV7q",
  "key28": "3eTeiyM2eYFMEHPZ6RtWyTRThpjLcZTTaYkE95KywjutoXeoE91YqjvJGqPqJiDhHJoR7iCX5F8QDHKs75mBsQZo"
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
