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
    "64f5eDBqwaA54XUUorRZE6h7GmbJA4XoG1wLbeASVz6pvLJ1kK7qJ36yGDytZKiG9ZYTebrRPUkQRuZjH8b8Jp2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MYWSMurSrVfUaQReFsvCUVwR4BpiUqMNdi2QXTWXaS5rexQMspqoBkLzVhH1NfYfMJe81DMzSTMKyJMfoCwUhdF",
  "key1": "2Sramv7ckkz4LEBm8D7yYZJff1uFPRQGVnW7PLUMYRMu2uLp5NdDL5kyUY33EPPvFRL3nBJb7FY9p5Fm3EcCsPvK",
  "key2": "3Cwh2RFZ6osWGxTbHriywWDhjJSdo1y29QF8VkZCxUPVaPXvEKJZpt3ZZ8EUFh416PSw8ZX24WkbKKsQv8r7g4Df",
  "key3": "3H51RqUi1NyvGfZoHqgZHEgeWzHPiK172FUXEPfZX8RsWS38sHRM9K5pGWwhQpzAaGjrxVF8wSvhqZfZhsA8uD6H",
  "key4": "2ZB88jyGwHmarWZHWrRxAss6kgh4uKWX6yf9RBiBVXV8AfiecHRNscdyzf8tCQGuvtV85EAhxZvYUmM9fANkRXij",
  "key5": "5eKEWCDS1hY8V1qZoV2U9R2xuAQgasG4kmBv9qaybQvwJjqi9YPGG4RT6DcWZf5QTetkY1bkjPJNoi9SndqnaPct",
  "key6": "2FS1m1ocvXJ76XJGkDuYosfDAQmWngSRX95enDbuFjqw3srAvWHr4MuzHBkE3VHrRreLFE3e8grXJipgCFHqL8Ss",
  "key7": "5t77Fhhz8F3yspKRRbEjnWsKDrhT3dhGTFg8AUD8DhHQ4QfoA8azU6Q5PLRJfgXFKxXLwJs2sMrTpVw3WvF6ZcCq",
  "key8": "aFLEgnBJvcisynp5iW9kw72pqmjBePgwAGW9WyXdm644a7D7pYi3x3qjg16uBk94KTTcQGYvapnA7387PWZJrji",
  "key9": "2nuDHNJHPaUfdZK1XPBU5hNUBpN7QFNHcdDuqXE2dkfe97ZtMEsz5w5bgpR2kRSSuUKdc1mLc2isxcGKgMHW2B49",
  "key10": "4vABu2MpxogqBdtjAmfp78GN9EFfww7r6g46F6d22toDeA9bULvQdSfKebBXuVh3Apru4imqbnh3nKGtpkK1ywT2",
  "key11": "3DMR9bryhmAH3TEeCVJV73Xqfh8ozvNiKo3qAq3taZZ68eTRpgNAcUNiMqZHJNvow3nMqhasaTFYuhtTpBauAG2v",
  "key12": "4xurv7p4JTZo5GXBEDbV4akhhoWMrpsvsob8DPYjfmuoZFQdgsheiaNkFAvX9aUZ9Tjp3tnRkA5rDjsU6vVyzmPr",
  "key13": "2nUXUud8HFuxG7oXuCqm6nsxf5QkWWmjQko6aYtB4efpimadoB1CADFJ3XR5BoXZzr1r5NUFMKANuMvf1LkQurjb",
  "key14": "54RLVnES9UQmwRL6zQNy89E4WRnZ8637dtSsxqtE3967zbRZzfbUvFRpBFGM88tUYkDdNTyRWqAX9KVJM2PdPqVS",
  "key15": "454AKQGUgnF17qSJFqurcW3nSbdfQnBLHC3mWJHbjLGU9WQuE5h7U6shqk7wy93nb1Y8rpubzWL5UzF7sXsPEEwD",
  "key16": "2YbjSgknEeSmfCqJa6fTx4xrEs47KTx1LmFRGLkPA74SdotnwSJegrhEwvr8J4cTcGDn7JPrWVGwW3h9E7fr1yBJ",
  "key17": "2ZxvaUwEekJUgd1or2hs896jUHQxdMnfU3YCzf2VK97aYsmqFg4tQW7bXYYdkHfSY4Gv6gyJRM5qEcHDHN29cr8C",
  "key18": "5NTozUxX7UnjH7eHimTv2ag8CcB9raEWD1PHrWyHechXUd9dQkLEYkypMNDp3Nb4TQEVAjvbwhCSaewp6Qm532Wz",
  "key19": "3jnzCm5gLSzFaaAG2KrPywYcL82ra57kJz4p4qjBLTyuUFyQRZ3oTNJEcj1jBADDRqM1Zsn22qs1PPPGri3MSqds",
  "key20": "5b96LJz1NYNi3eZMFEPM2G3Z4pPswdZV1xVcqEt2zbHfUDxG2ypf6NScfe4iWD5Z39HjXdLN38SNHUaN8BLovCmf",
  "key21": "5Atc3gJWY9YgMFLAsRnZB1Xpvwu771V7gj8eGciFPbUHfwmpo8EZ5Ced5fpponGHZJkHWMZ1nBMa1L8232uyag2U",
  "key22": "2Xd4jdG9p7vh8EXE7BVePuiceeL7KQAaLrgVra5quGCC6WuAo6KQK3uuYnFJedsVutrRh1tFkThSmQSinXTohVdJ",
  "key23": "5yPEXLujP5iieaHLEo3aQbDmLDafgJNxVX3rtYnjgffNe2fUFdKy2M642bgUUhi8PtEsZez6zYXynwXt6kG8LX8m",
  "key24": "3Dn2F6ru6ostTWJDC3w9fDvvivEpkmdqrjVGNJuY6dLLo51R3TTBBQBWY2NVkRpgjsBEPQrQsC19ezDFxyPMkKyz",
  "key25": "Uafa6kp1N3NJmXmWG2b8chMVvHwodqXkGAVNsshB2MXgX2dMX17v3N79AQAMvvtpwsJitfdotPFEfTBKDSMXDp8",
  "key26": "51MMdCwHxgNnJsfidE4FYEKKc3k3ccPRk1fXZJkTa3vXJBmkNvkh26WgZ7LQ8t5HhLxaYUquB8LT33NUANcucRY5",
  "key27": "DPSCDYXNvXzd4YMViTtrsxdwv2naxcDEAd51TebF5ByAE1j1FSeCLuUJvgAhrB78j7CbiuFxJ33Kv4zuKKnSk7R",
  "key28": "B3CEcJDLKswvxzW5R3Wq3jB6TRUCE3eAYWzXMsZc6F3Z43SQSLfQodVNrg5YZ9T9DZrNeNmsu5UA8dfxMnKg82r",
  "key29": "3kMBAyZEGaeV5aYrzop67tDpo2hZoJR9YBrzvQAvQEq5Eejf1YyT8iMtuxScUqSi2UxJ8eyXXtHAWCtvnU9xFAW6",
  "key30": "3vs1PhHTTjuqcajmDmnW9xeVtd1NKLN1VWLGc1HTWzWALTkeGD9aLNLZ8yc2bJVEWXywmqiWRRbUYAsYaubxMs3Y",
  "key31": "4WBkKgBwjy7a1mxpDENqciHiHS8knaHHxYL45VXeAVioyh32VS2tmXcre3TaWQzhq7hJb2m7NuRkoC26CPciSYTz",
  "key32": "mZkYi3rqYzpziDLX4BZb6KcqXSxcmXKKcKDnjwwNef9RdeohHDAA8rxVexHsx5KDfkWnqqK7ED9Pxyv3FPFq5t1",
  "key33": "2ttMRerph6Hk1snerww5GsjxbyaKfEnfiDtEi9k3H8QYHAgs7SsTNzugqVLxhP7ZD8gupxiL4diDvcoKhnwYvLKu",
  "key34": "JhweotbqNGGucWKYjUnsty91YooEbUvxEU41nMfhixYE8xU1mi5gzY2ovtWeaiSQZ5jt6oSAbMsLcKKgbXwb4x5",
  "key35": "36bpp7WBJJ4hUsYZJQLiEBbHRyzJBEoitRcQXnEhBp7HvDmkZynUe9nGTQxjJhfpFVvtKmoKsB8boTDzdb5VJk1T",
  "key36": "5QSGV7JtSpTdenLQqmWNkkKAeH61iVt8tPs8N8H3C7ULVgjApLvBhpNnLFCjkKLs2Mh5QrnvQmCmfHgDQgiwePxe",
  "key37": "5JVfVnJSAAgrcLA4i53T3cf6qRF82pJUGwD5Ww3C1ZZwjXwXkJybzXdztYdyA82SMvaXZM3Kgz3sPnkHPneBkTdG"
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
