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
    "52u3mPmaipJ9bukzoeSmQnJTNXTGKHCGMgVMZTQJroqT3dyrrzw3ibsZKR9AESGcTHwoKULGfRE2kMK2UTYPa3Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMoXAyNSsdHgJ2sd22uVssJGMKDvdb4rhDKTPooUh7tAGX9gooqt4jSiYP7RqdXZfrFGcF9S67djaxsHHS7NJCg",
  "key1": "44mk44X45csNfutnUAkAmaWJBeDeJkFDpdVeS1wYXif5nDGq73AoZA22qthsw6N8gXmPAn6EiSnbzmE33UBj6oPC",
  "key2": "3T7JVYy1jAzDrekTsVJEmzj9XcC8r2AVE5eaHdf7q2xDZN16PdNA3E5Rpe5uGDnR4wUzcWdYkV9hVPfXhTYCm9YL",
  "key3": "3o3r8j93QusAt8d2hQzTgAVyhFdyxjyrL5ARr2yM8rCP4cgnm4azozhFUtRBZBGfo9Ctw1odRxwMPwPhdg1sLuZF",
  "key4": "63noARA4StM8a1szM68M4e63miwALR8rj42fQrSdU4encXhvzoKGu3hqxpz7QewiuyaRiCEjxipT4AUX5gWNUtsc",
  "key5": "3YYZZ6g8ZC4cw5GaC5m8dAZ7h4xptHbLBVtoMMNEtPF7sFPbirUfSEohsvg4WV3QWjhDSD5d6xZUL9GijLz6rZTr",
  "key6": "4u78mk4tbKy7f8wpTzMkorpb2T9Zgu7C5haWhbrdjPu3gvnuth33Zhcyhh2h9YPgM6hPgkcMCvm6JiCBhEj52cjA",
  "key7": "4YhrPjfKPN6mBpD73mBDpxraWaWMPiFa8TP4HGCxNfVi2HAnHsTp6no2Rbjz6WVgK7TrJEqwF3yzGYKZj81A6bJf",
  "key8": "3mvPmqXzXTkqAHDR4y4dNqmujZQTenmipD5nzit28thXZXmD5XCcxCJunLBouMJRzpux4i3k8FAtaVmYdf9NxZaN",
  "key9": "3GkKU9MzwVYegyDpgptReEvtYYXf671pBmnevyxoTqqnBnUGmEUE7gQwsWVeruPjihUzuGVky8Xpjj1HZfHjtNse",
  "key10": "3XriC9gv5VWp8sWcnt9yMjzTukPiKx6813Gw9jMs5dn9YD7hosAEh5dcGJXsNfKuRQKNkqHmfPsEcVxaiK6wh6Uk",
  "key11": "5JQR3GMA4gUzu66NBwAfry82TBus3tcFbBMn32uYAH7Bsax75zyBKTihHcb7xcu3pWtKKZ44fZ2rCVw4xXAeyA6M",
  "key12": "4iEkC4Hz6Y5o6xTRsHh2Xf51v9FgCaptA99XtSWf2V432zuTvUUKQeES9t3grndWVvZ6kHVjViFNQmM7YkknubdQ",
  "key13": "5HpStRvMKSS6xB1q6zEYpbBmoN8PVDmPiH2hnVmSLJbmzKPsGTkLkM3k728NgWvELsA5vS8ww9BsCHqqbXaTygq9",
  "key14": "4K6bTV4BAzuVjNFbwbyMbFGLEnzKqqc3atnJVZ3gAYxhhxqCSgpghTs7cGLg7LcL2hUCJZRZStobyWCMBBJSBQbz",
  "key15": "4XvvUBxbAm9r5CxbSW7ixP7ff29GeUa6y9b8zPverzG24XsSj4ffGQa48aQzqMYQPjfgL9JCFswYEBgyYcyfrDKx",
  "key16": "2b7WYLZzmEg9iPVjf7qkfLTSS4BYL5wtmXbDCwrnjNxi3FqaPKxh6VxxPknrYEoBVAk2hbLkKWYHK2F8qAUJG5eH",
  "key17": "3JL7aD68vhsUAPTaNbeUcvkH1Uvike362n36ybgr9SPtcL4ahLTrD5GRqv193Xhdfx26UTrnvx1Cx6oSWf2M5wpk",
  "key18": "5yJVw9BNibxuuSeFcVHyBnGTPfet3ExxbmnkYitjdrCiPGiSnqjRCMkD1cz9x4tqVo1Udwdy39PpRwwsAbTVENy1",
  "key19": "5kwaqyWeRVbM11RvrjzQCiq2dj6eauwD75uF9MLw9atVCJ7H72AVFaVg8F7Pf51AP1TaL8RfuJxXEah18TLS2mJC",
  "key20": "3FpfE6WKwo8y48yUeRpjvxBghcc1VbyGsYNtuPsnGcRgam4Z9eEZP9L9tGG7Ve4LUuxAMCHHAeg8xkMgmppFWUFT",
  "key21": "2baxmdEBvjafcFfMU3vi1ES4o3k4NxoJNRzbJyBBbSdcisiGsYoNDvSprCDQZa8YJNL2Y2dyfHNTvAcJ4RAMFVWa",
  "key22": "4v3ZnYhKHHqSBjLr2LSz4yHMfTzBP6CRUSuLCrh3w1KkNhDXFuUBhuNT46RWHCCKxCjycsxcaDqQHBaXoUcRy7qU",
  "key23": "22FxqzR2dsGgFFMeuieydv89ratKzZD3UsAJjXGdYiXbXhWCcYSBWB2ncL8qwiyvZcUaoHarj3ktK3fFxDTtNqpZ",
  "key24": "26viTJo7WA4CS68vazyBfK2xKWWXXUF5DcEAprhiYwQsfxgTY8efSAXHdmM96gnQLn1DnmY9yCUxodvvnyyiMWEW",
  "key25": "QC8zGQ1k1adSsda4KraHPkd7QtehUbqWqgVWwuJq8CfRDCoV7BQm9pWEhnEx8cRZN8TaenzzmzDHjde8D3VpD6W",
  "key26": "3DanZUdpRPW6sgsgn69s5x1rhFJyHZefxijCFy1ZcKApdZQQ3wPvLZnTzA5QkgTsym7TzWmiJidpT6q9AoozRqy2",
  "key27": "3t34NfmxGWCw4mGQmAGTQ1S8ECiUtVrC6Yb2rkbUvreE199cdsuGXu9kkMPsvfX6z4mEJZ8D4uE1kK3c7kjazjfT",
  "key28": "63cj6UBWC7fzzAwaK6z2uydUmM2UW5boGPpXqSKdXN1gCgGnAb43HPJWNxpNcTtbRNvwyuFoZ7LpXKqirrg52vBL",
  "key29": "29LoGjCGWxPhjJVxUi3Li5mcZUos9ZXne9rPfM9Rezmh8QMgzAFaNTjDhUwDbsKsGp3zmqe87XmBVwv8p1dmuixA",
  "key30": "2tWqf7muJnDWJygbCREUs8B2ua2kd58ieibk1ozPPPADb21JfsqMo9NhN1CxUjcSMoHVL7AsLce1Ffz6RyTTxNzw"
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
