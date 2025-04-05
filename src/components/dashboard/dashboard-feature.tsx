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
    "3Jg2QVkRobXhoW1quHtNJB1bVy448j9QpdpzVEBqSB26RKmLwP8uFr2PCZZEUNnZ2Rfb5dsqMLCUiDv1tV4BLn7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qzyELuobgwMJe5yoeax4zGHEvAXFxnX7xNHaWNBseqv4MQQ9AUe3q5VDdMFyXNmTmMvvUrQF4ZniVBA3F4bPJYu",
  "key1": "yeaw3poD4C6qLyc38MCgFMrXoCZ4oSXxmidQeV4Uj3Hr6d2mvbzu241dyRKMsU4tEbX822Y3mTzwnD428ieTqwc",
  "key2": "2rykpK62bUuLcz7QxJvKM4rY75RweDtFbNwvfTYGmKdhn9ZgYgVUWvMnY7ot7zgRV7sNmG33tQhJeRTqzXD2XsX6",
  "key3": "2MBWW2S1afPbgeQSPnEp5yVDQbphVJQUawjdcjKhrbq4gyjpJTk6iNdDVK7tkL9HzT7vTys4vJTC8SfZ3jGgveYs",
  "key4": "4x5b2RGnZn6AVCMeyzBUpRT1SJmD3qwfw3WDc6qUTagDja8VhYJMFoS4uhrwmrfiQB3WnYhBLz6ot9nMXgoAAVu6",
  "key5": "5iaJpTbRjF1qHzydBN5NKWk42WQqQmMX1W5jHWMwv4iFLtJuyyKdruNUzGs9cBLR8wf7arAf2YpgVQ6yjXJyXQ7",
  "key6": "4fUT9F4CtLe9mqT7WwFgF1QVDGEHa3eYHCxc18GRwuw2C9SLQWqUUQTbL8ERgdUbZTwk3b82M2ZEZdPKdpaS4SXW",
  "key7": "sbY4FdzWYnDkQWbXvCCqU3AFXcSKBsMmodY6dbzPCJa7fSiy4e9KVP97b6PBvwLTYz8iZpn4ud6jbSvgPD4qZQ2",
  "key8": "5Asge7mkpJ1kp6oqUjjrV752Eua2GNCdwPzoAGaCLFu6Xfi5Kp5JEAZTUupPeXEd4pe27XSNAqjH4s36BjdFpoqb",
  "key9": "2B9xd1FFtkwRboAtyLP859Uy3DsL4Ei6runSHTrqTpisGniyxVcC3FoHY4JSHHzYpnZnXeXtNCwoYhGPhVEoZSjW",
  "key10": "4tgyastZ8Ug2Dcn6ZTF7fdGSsXHGu7tweQktagsqFLM53qTTrdfhVoFWcdif4W7FUCzQfG24rN8g8ANQv8iW91aG",
  "key11": "2vfx6hRY6RUBoEBC5XNQXPPhFRPwrXsazR4CuHTvhpFg4GoLywa1rTdE1VukyUqX2g5s3jUtKjnGLbhsr3rhgef6",
  "key12": "4L1dpixTgf5BMGVReN5mw5Zzvhpz3uh13dhJriipWdN4URGNN2S4ruU1XpJrjVzdwUuij7mmnFRFqzFLJ9pgJKJp",
  "key13": "4Y4k3RGXGgkz1RVLotcxxVDbNRjWQo6GgY5ghTGn8WHKK9mfYsJcGosiNqd8FVnYTMjWXpEggKT61qgeys1qCAQ",
  "key14": "3VBu1zyd2mhty4EAXhLnsjjAisso186nHR7rd1VxZpviMNxBNCJdU47dPBE6KpQLUVtX68SMmEZQ5Z8grcni1hPP",
  "key15": "2EU5FreNcVEwtSfeLPbjTRLs3J9uZAXuQGGWtMnrTqMRTjrru23AwTPHXbA7p6d9ZkqxHxzXi59jAVVMV1poiRah",
  "key16": "4UXJoVLvkMbVaSsReAXRCzPL9nvtraHScfEXvcUrLRBcY46M6KFsvdCtH1AMH89Uo1fVShJt4V4iXg3uB6bZqJnT",
  "key17": "5dD8E19CRmP9WjmmuXBp4ixL7L19HuApLpu6cUB7dyt8ntHg3gWmJnhCrwvTvsm41GvsPbRVM62zzsVtdtpy3NvP",
  "key18": "5jQseVsN9xvszn1wwxVxjm2EteGb6uXh6CpkhTXTBqBDvwWFpB1KKhPpnXdFpnsua2qW9dHDgJUBtK6qpbk7VVGb",
  "key19": "2Sr3oqNBF9jk3TDaFqWUY29EjWapjxw83NzUqWjwFABSecKN4rkxJpcuu7SyjMunbDRJpHxyN3P4vA3Snz28whx",
  "key20": "21vyo1wcaQhUVi1uNvGVF5HTQaQip81qVpkibzKhAmK7WH1m31uj8twusJRGFEzVB2feNURhNYRCNnzZEJfRb6Bj",
  "key21": "xGXbVgX9Xj6k8D11MBkWNCdM4HfETui8SMNL8XXFP66bifE9buFRQg7dEZ4NhB2qMGhQrBXm3sfeMMGc831jRXY",
  "key22": "4DaeymBHkNVjA66dSgfbDebggb5X5FC6Uw8G6YEdcjcDm6ZtpUXxdvMTHb56XtmhmE7QEar5DnVfSrrc7RjvJie6",
  "key23": "2WG4qtvTdwnzPW76emY5KcooJUvrW2GqQMZtryS4ki93o7yRd7UNs4mY3zLxgHzumFWwhPqXyF42wHDUvsQ4i4bT",
  "key24": "5jUqeH8YUHq46bFkrHRsrPxJD2PoeMJdDGy9P3j9efr24Lq4sNNugWBYzGJMMFeTGEwGggm6aJaGboxsUA4NvHyU",
  "key25": "3aZyPU3pB9tz5upTyKvz8MSwRncPVr75i5W5edhMqFGczr7DhH3XwtMZ3p3otFzyDWS4XwGsNdruu7N2FRaMNaan",
  "key26": "RoR3mvaZWR6Tk3rkkPNMm51SAPGWekUuSciSjNjY3AdzAMWVqBofpuyJuat69px7KC47mhG82wr8k38E3ekvii2",
  "key27": "2BAvR7HidPfxLDFgDmcuYdJbYLoUHsZsfyzkvcTMY5NfGLQ6cVzFVjaD5wzy9cptWJhomKURskvUuoLCgPi8oNhr",
  "key28": "27NrxDsMSPax54D9XzHHSmdmq1XGHfY9e4bqzt43KFm5TJnWMhAGMsXKX73ypf2PZxSZCywGzdBtE9ixRhkGsRZd",
  "key29": "Kpr2joCQ6dYgw6kg1GqoqMC2oW4S6TS9FfD3t2gnGLBvHRcV1eEZVXyQwZVurY3cLeBun2Qu32Bo1HtiQ6KwMYm",
  "key30": "hg685kCunZJMHcCtNpLsgFqEeAudnkheWcNmRPA8xrWMXNtUNtcPa6A1WZipyDpqqdrUmxEyw4FSrnFaop6oVys",
  "key31": "5tbPS7HdTcZMbmHXLMU5MD2mx4rcsZ7XjspkDtcRxJ5Dr4QaiJkprnntcyLYzbRNfVAsCqpwUpgByVk7wTR4pQbE",
  "key32": "431BH4wqwWqX3FF4whysjcDL2qHM9UsfegMq3ogbLbcfumkAVFcWKCj3ecDTsxs8L5T9ZAU8t6u6q1uis2bnptVN",
  "key33": "3dE1GagPKsKDXwZ8se2RYDJ3jZzciPsb52VGH2RDGHk3Z51f1TSrEYrH3WrUPDLsWpUvMkGXcK51Pnb4aAN4bcEt",
  "key34": "ksrZU4pumm7FTxqQViDDvxx8kMbVPg9DSnQxA8hgHL7LizEgAJdP8Xa3QZ5WkyhB92bkX8uJT1d3BKJn7h5rQXR",
  "key35": "5SeZo8gj9ZbbvrPHG8VSASoyE3vxReh9ZtnpZWi1PWAGivKWd58F5bHXJzjHwGYmprzgBkaUAmZ1crCMomHfem4S",
  "key36": "5ug1W9TywZJQrixCW92fDP2SMUY1E8t7QmMdorhj3yHczn2X3UgLsrCUa7KvNHT6GwLiMr4s3eDA3r4hRMeDxhKb",
  "key37": "5rq8ZmoHnWR6BTXpAmwMnx2ek74wwXA9GTA9GmJSnjZ1TmUEkjhCX6re3KvPQzhJL5VnbVcwrHe4vxacc3sCYua2",
  "key38": "3wQ6qfMtxCZcxNm1s7uVQfUchEHYQQVEbT5fm96dymz7p1QAMnmfppC8J64BTkxXGi2vmDPwduiMdZFFW5wEAzpa",
  "key39": "3V35QNhnK8H7D841qAa4UeynvAnjNvjiS4nsT7S1CHFK7nmWn7ce2tGY9FvjoV8p24jKam725VNBkSyHvWQvuiai",
  "key40": "3mHHfzJ39pW83bhBjQqdbeaXNzH64jxj86FfGWRyv4dnS3SCtUwUzvbWA83gCVZn5JL61TTMHidVMS254ZBQZDj6"
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
