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
    "5D9xzbpHTUCxirbkSHfPvaN88CL6UwSW1kTNeTbTpjkWWDhoNkAsTmsVanWcZHHhNgj7hHKHWUmaoptYWTf3zRLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53hscygoG9wfEtuxUcwJro8FYcT8YsesiyEWGK1d3UfgNWkRvqGFGGW8tzS5biBzwZVtjd8At1KvrBEo8rkzopAj",
  "key1": "4rKZSiB8RJxKXDDbDgsJPWu6FnL9gX8b7HJECZgHuJBwWFoKQxw3dTRue6p1GZpbqCaRZDLUHnrGVPffTWawH9Pm",
  "key2": "4wkLRmmjpRErNqNDzyiqm2FrFhi2Lz4QCNLu8YPud7jFNZ1qFEijdUbqzPhvmzJQmDHQJrkAoZKgYCdCWVtuMVEc",
  "key3": "543ByHGsTdkEAveHueU6eKJm91DVWZxPrfmFKokxmrVHgrKVVjXBgpqiJbvwASah8nfYENzD77nmvBvBi3HdoMzw",
  "key4": "5Y6L2fHvCB8A9QNY5d9wWL7FEJKnQzU7CKtPZTapScYjaYiQXTr15zPhKjwuUxVGHKmFKbyib9YeBM5VzuB9FZed",
  "key5": "4Ukym7y6CtLdEu2bRrNUeEgnztCwobxHcJ4jzzLY8cJT5KfHrwEvBiJrZCLcA5KdUuhhJvG4CufG1FPUk9JUdeQb",
  "key6": "3W7zQn1DNJFfwZdRANyYcJY4FCMCwVr5ycN3PzuxbFAA5dCCmXfBYGvtbxV4DjTb5jjJwQDw8ZREU3wvCVaH3xnC",
  "key7": "52Cj3iLeMUTGb9B9gsd1mvD8t2J1nRKsRmKfGkDV2NmBUTkFjt4uU5ogQU4JEmB44apiZ8FYXo7zbSq1ASXLeMfr",
  "key8": "4aEBxHPkFDfiBPTaZTLP9jHANzSYQCFf12QRdjfxWEhcrszDm5HGySvjXAarnjmDcC8iNideT9suBFvNt9wX621P",
  "key9": "54BqUs1YmsY52CN4tpPFFDW939mPBmwjhdxDEnCaXqtKkDEgCwJmLuCqy9JtJKDQi3cAB5yiTmUAVFjbFt7GipcE",
  "key10": "3vedeDFAa3PYXYXzNbFhK2uSQinqdLMkkQgRYCBaqA1Abt76hxTjcZzsPPJgs4csUK7iexL1L9bPqa9fzFtAKdLj",
  "key11": "48m2F6MZRUwqZ44nPP7sgxF6gM1sUoYJ6dfDA2s3DL3Syy6GddLF7Poo4ksS6SPmxQ8N2fo9TBBUwwBpUHQjsLo3",
  "key12": "3JZ2CbQTpqayC3UnkVMRCpBj5FxN2zGcyz8XTwUgzemTDLhHduzYszngcq46THef9uNqZ4MqdJMbFVeYJxfPfNkf",
  "key13": "2MkyfMrLb1FsrB2J6JHBxb2EGsXykHwAU886C86TVFHaRNB7okmW72prDcaBcXnebFcV7RwHVrhNanKn2uFzzRFo",
  "key14": "44XJgQNEsbUx43hXzQGcV7ZUhQLDaBGhc5DznbgJwvBwQ7sFop8CbhZsDZLEG5HX4vibKoy4FrdSzLoy2UwrpTQb",
  "key15": "5r219zeudzYoJqC1TP12F3eNzbEdJhouXSSRSDhFAYqtxHursKooszA7zQNkjEU7kLYmFzG8h1zvDxHsE3uz8j7k",
  "key16": "3w4Wgt4o7W7X4Q1uipUuLg6aSokcNWyZymw9CfEiePCtauoS1FSzqRS8kNfnMKCAKqQXsAZY6VNCXEBiJiNPguay",
  "key17": "4jXwTGYgV7sKUvRd3MmnzpLHHJdMwwNMPjx42B4kFiyG4JomZUYQRwjnXLJmJMkt8z6SrZRcyx8yKrrptojPLscB",
  "key18": "3375piQ8Uq58pmpQj7CuhSCnxSBFKr7PypfhDjvcfZmtb1pC1PHFmpDVJEVWF5Qk27MeYGNt8G4s3CrChrKXeyvP",
  "key19": "4LicQKvUGbyWcvszb7ddhYf1Rt9253iStBaBNjsXkWVjEZdNGTiiLtjCCWTK3ypdevnh9KFhvyvNSz9EjLvS2Da",
  "key20": "2mxGvvrrWXFgE9BW1kGJx6AsSmS9qiQpneBxm5RQsf1ryAghEJxpuWynb7SPkb82tom7eZFbSdLEBBGHzE4iXY2g",
  "key21": "3PrQT9ct4Y26gZpwjGorAsskrv52hGibBqNvqX2Ss42jGw4DhXCfjbozr1fmmTFJTf9Z8rtdKjtDyLJpnFKdFkAe",
  "key22": "4K6xdXVz48yHr4XRSpPzV1zFTHbhRBFW17k3c4wXnZyrRV7B2sMzB3EvEkxJX5c9t1r1qQNr3v5MhfUgA9cyb7KD",
  "key23": "5vj1JCJoc5pbzxKidCfMDHbL33KFmDEPGqarha51QUWvp1Xj5qdXskvWwgCYqaddqKHr3UHQ4hys49746VUZH7ur",
  "key24": "2TZW5WeVmCBKrm8Zv1nQAQnWtnpep7yvDmabpjyyyiJ3zv5gKcXBvnfKZXLYc5h4CNB2Dn9uDgCV6tkGQ2NVNPni",
  "key25": "53mwRuxf7bbSuw6LQX8fU4bGfA7BEFDxpvTW4wLLmK7wz8SSSuJ8oFomWZ6aC2n8fRzHwtDMUFwttybuHgsb2oPL",
  "key26": "5c2mGjUf37GTmWdm5LxngXvy8LgtMGMsjXPoafS4TyVEr13VhFmqXYRDpFk8evaAfbBumHq3qVCdoQuhcdjLehgo",
  "key27": "41kL6a2JhNCr1QuM16en22EvtJ9nC3QQ5ArGJ2bLA1pbnsrvmEdwwymgEeGScmWn4XbVgE4VAvm2wJ4SGYD7Y7D6",
  "key28": "5NSeSXQjYks6cv4SSDqyt1pjWyko5UTf849ng6Fi4Bj8GwA6KAN1FGdfvcdTVKX7t34tj6yY5aQjXiMDCzLNPNXV",
  "key29": "57hYdNppu2Kw7mrK6cptoVyY88Rd2YPTtNyA5zQHmrqtxPpzxo4JV9TGNjiXti8gDxBF66cP5QPyE8oPxtw1cAtF"
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
