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
    "EucMQSSRMZZAoLfogkiEMJzrbXsy4g22kdwsdiFveLwsaYnpF5F9mcn9iK4D14eswQXeDbwJTc5F7MtBq4GEX9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oW3jNvsThTqE3oiR3kJyam7UpkE1B7vGPxYcAuftfH1BC3ApDBRnnJCqyPt1oEqdFFnXa3qqBUPSXmJaR1UQ7G",
  "key1": "2MUjcQL3buRG6GXLBcnUBoCJrz8V8bmAq8oHDjGSsPsooLsDnS58bxpuEqxmAiRp16TJm18pUmD63GtxR11cuXGa",
  "key2": "5y8zBAjLm8Hc2ugpddcU3fuNjKjJjxj2aMBim24Tv34bbPVzni8rBYhRXxei8xMpZ8A71pJzrXjotFBWXMyJdFLA",
  "key3": "26ARpG6wBEvt2eCXPwpkywBi7kztewsdvF1UoHSsQFd6qP8HnLcMXjpzG4PTaeSnZoLsHM4a3rxeH9eca8MC3cvw",
  "key4": "257GBDRycFd8NDingEX16HmRTj9wRojBXJ913AzjXUJJnvASWmDaVNKPYqNvQdSc5wLT5kmR3ok6AxjXxFPvTE8w",
  "key5": "omsEr1gv9uhvyD2ovRzwwu88JX4eU7zFrP9tUbJa1DFuwjoy15MZGptL2krD2Tc9x7yJJprk9rYctsDFUoXMBJV",
  "key6": "5dMa9cmsbuL6z3SL7716sddq1L64XJgoWgRUe5p87WHtpchwJ2tgXMu5974fEHVnND4hd213k1s2k6HB1krjU3XE",
  "key7": "4EvTmFRneUc3pAPj12zDzyHYR2ALrC4KwLPjCQ2aTs6atNz5TAtCtbRHK48L7zW49TNknzZLW1erfdVUZy4t15j4",
  "key8": "5BMtVNQspJkGLUxQqhDWt51oG5Uw9eDXXp5rjr84n8C14Cr1ZjpgHpVa93Fnju7XLn5zbyDs3CATYM1LBKUM6ff7",
  "key9": "bc3HK2K9KzzrUGkFo8Le43XrmPBLX3KBhM6AUBPJGDBgqT6RQi8JcFFupKJdJELsrajdQnVsc7GjaxUdZYhNGgp",
  "key10": "4dcNMxmmUNbo2CMMuuUy8xbdKndyyoSTzjtfxxXQ27WJ7VEjXveedcz1xVmNGeNF3ehWHxLjZQUzyZK7ew2LThU7",
  "key11": "2wdPaDgzZCzQ7gkajCU9zW2MWMHXD6ztSGzhaqJe2otoXBYCfUrdhYAHf5VymHpqa3KkPH7oTbZK2MBJE5MQUgUJ",
  "key12": "yqVqj4HbEQQaNw85DjZEX8MoiE79d9vgh9tXjZSEH7WiqoJZ121gvSpT7hFJN6F1dcQr4rFq8r1LmnNUqeBUUHt",
  "key13": "3MW3RabHx8z23bWb6RkXG1p2MQfWG45Yps2xecGo67JqJwpSKRiD1bAnqPZVsLcJYvkNWT6srsvQmUSGaQraQ4dt",
  "key14": "67EqMiXfJiiC44wobTTHP2QSpSzChNtxFvATMUCu7SGSVjBHSCnTLuAc5ULiQ5A9ZXS3VLQVixQobGqmyJYrwPQi",
  "key15": "2UMpi1tKktrWmskw6qpSVXSMzepwjaVN1MAxgxEM1aGJamo43bi9PwzKAbg3p7owMfXpPbWy5XA8WbuhcMLAH88i",
  "key16": "zNoFWDkAjoQebEpNrRgFgczLkZ5QwKWWpV5BeTq29sz8P3SmPK2WHSN8dnEC4Vm2NRnqUHv4bEJNVAVoZJDXBeX",
  "key17": "5MNjFXxbdg4k9VvrURs6wdS1bs3W8FpRN8K9ASFmEwEmdD3Z5YZ1QMxn7qBJSHZus5pLyixH8gWaZdJXHQo3vUcw",
  "key18": "4KRsChdfdv6q4eFuLL1igUvJj7efHXy3cP5ui3VZ1ShvfBbB8V1RvP3hSW56jAQW8jn7kn1S6tcmJRXrVEQ1nj45",
  "key19": "5RyBqzbdDYW21toV9pb81tAD1YG9XLNB5RMj36SK1kyyuujon9eZ8wWrQnyYXkNAYoZf253FBcztuUbnCTEs5wFA",
  "key20": "2xkU59h6B79zgjZh3qy1C1BXETJqQcKjrG6mHXNrdNHiTwawJx3v84x1nGCEGS9Rd2V8ryqU4HV7eoMzJRFqEGQT",
  "key21": "5584kQNczrsHsVgQG3C4vgvFkeDaVtWiEdrebZoGnCHzkYwbVvG4AX9ixdqxrUk2iE8nW2X9fLfDdoKXgsmpnb3k",
  "key22": "3PYU3bKJeSnjiXHdmQ8VwPYejbUM3iTTkR2pnCo3e1a4q4yq6xWmzGcsHnHmjX2wEKaB2G3kHyhRspLMXmiRPb3Z",
  "key23": "3eewXTLQrYa9UBYPn1gk5fp1jLvdQNfzKYKB4ZnpUESp7wMtg96bBKG1zbNtMkBEeZ2cugESZ8f45sv5TG4NyCKa",
  "key24": "ByCZ2JUMdayXESQbSqqjdi2xk2rmFJgmgQ9biq2RiWw85w1aQJw6HHnYw8PoqRBJr9ZiwWcymeJ2Gm1jc6XfevM",
  "key25": "5a5SL535G44xeaQ8y2MHWSvVSdoJh99nLSGcTyr1K9BtJo8wuLLo2Y7RsKfbAQ16DSG7469LkPLZCEKVcZjy5fns"
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
