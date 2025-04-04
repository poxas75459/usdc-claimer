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
    "ETZJn6M4HF552uLA9U3dcPW9CewLes12mQmESfuDX1AHjwWZ5pcp7m5Pw1hU9CxKRr7nq7ykiwUxjXCjGDK7mr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJUpiyxESRxBG1Xp1pxvixuPvjEg68X3TaWAM9fjxoDMNcRcsyBGxN4jp6ogZpJ9dsJE3r9NQ6rfHbxT9KxJ2YM",
  "key1": "3Hp2Fk4V3k8WZAQVH1Xw6o1jmxpP71jwEQnqkJ9CrPshuseqvye5wbHYf8EkNcFP3k3JWgg7ss2svMvTVenF7Ffe",
  "key2": "2u98kQ9aMhpenS22KoFUaodh1aEtVVa5sfvbUtB1wSYZ3QyxkiGSSxwkD9YwoZnaSMAJwYBgd71da5NHDnUqjFZG",
  "key3": "52FkwWeA3vN3gkYdH32UwN8k1ug364cugzGSCpBwWKVWYNTRRbjnmDdu6VDKepbcsAtAScUQUC25bHxbZRG2MmQa",
  "key4": "gu6DKwKQgFpN7KeGgsDer1kz53NYBWi24kKMc4GR7s2ytsneejcovzKMUYXA75Vvb6HLQqDHoP6AswPQhF6bM67",
  "key5": "4eXxsqQbo3aYtNPuU1Drwx7JdSQBSY6FTe7z6NP73VDg1v1pAHNtqVtsFpD7oxqsvkyztATe4jrxzeCA9FknqSWJ",
  "key6": "5ctsVrkDQcQDXtqjZhrD6dwhZy41jJSJfp9ho5Ndb7zP4Ff1xeiRTHsbjH8Q2wmwmdUBWjsTE6gKqnNbSU3Cvrwq",
  "key7": "4f3RZTm3n7v3oHfVQXtLhGRuv7LmvgTWBSJq56VdGUwtC3mLhn8PAubPrpjfRJidyNpUz74nMJ1yKkGWFE9ToAZf",
  "key8": "3sVEifYfrzGNujFN3UjcfSqngQjLx7zQ54RGDhT5bPMZiqgN8jYXy8rUSCFmr8Lsx5eXW5Z19CNAAf5tvKNbqTzz",
  "key9": "2z3TvhSNWvvdEMbmHs3Jx5Q4KSsLDhCoufwokp66VmhzUgJbFUVBSrjRxfKG3gZpHqXxKcbRj8qHTQx9GyNRqtoi",
  "key10": "64eXn59xF2pknxiKdH6xZURnj2r8xRhFhRwQSdCduyPnWMYHbGZK2Cm7nfQhe7dwpCDC74BwNSTrDDYsh5iDSFD",
  "key11": "2DTaauAvPrzFDSQ6sW82wrM7se6CFpzz3ybBYR3ZnGDkdGF8EZhJsd8Ktv4kSUezzWZWXxnV7VquSXGt3okmdyk2",
  "key12": "3rpPXSs6zgDuLPcfy8vNvSvtfS1UUrjKXoVRzbzDGaJjK2GkRhJhmeNCdAbsusNAyCdnCo3b7q1ea7YRiGHo5VBg",
  "key13": "2MLSTbSpAmqjpoBkLfRSHmGBYuPUv4NPjXmynoVsNz9upfiatSQ1bXQep3tS6erdzPXtNvrFqdazngjiHXFAXSVq",
  "key14": "66PJJNVq529opfJuYyteCGp3ZGFZeNPRXw5fmc7D4PytgDxBo2p79yjdAnc82XM8jhLX1FdM7pEy7raUtWpTnNay",
  "key15": "5THXFLd7pJ8WVG4Fk9jVjtxRq27EgEjWQq6G6fU4De3JDEusXgsA97CMxUGVRWLhk2D7Hh7AmcyWVnHVUWCK7gk",
  "key16": "4Xv18cdnzGgAS8YfCTyW8YeTqKPXAJoJv7PNiBsnpWhLGA7Db36KFY27yfRpksbVaCg5hVNW5WqJYRmmKWDV5xhU",
  "key17": "2mc8RwYv385J2dhsBeBVPxDPkcSw6aV1SpkZ7pArFXaH9EJVvQQVjYjJdSuiBZy4VwtKwWsC4E4Qpv4tSNrBBr5k",
  "key18": "4EeYyzr5br47wES16KvusmeVTq3wa3N5jAU5LuP2Wj1G6QrVx2hTgr4j1YV2saYtfRA4RpheiP9XdbcCP5bBAgYP",
  "key19": "2CPZRbRtWVifdvDBfXw3xH4A421QzwhS8qBApikDW3PYeczg1KPdUbyTmv41Szvd9hMRtXsFsUqzqhanPpTHNfKc",
  "key20": "skQHAjAFrRGxooggtowW8vDuEkzGrqCKkiPrk8xVvG1oiWZY1geQtmwJG7nj5hDiQi9n3Dcq7mguKiWUXPJ6T1N",
  "key21": "EBWPc8DqzxF5STVuF5Pv5mrQ1Dk7hzX4ezzi2SApHv6HUvCgyizB2XUa8N3Lci2eydthpHSnVFgarA8KnTM1K61",
  "key22": "52sRfiYD38gD8YiqsFEEqHpjjD4Hyg1Kba2MzsSH7T5iLC5pgj5hPBq7nU9CDt3zZQQrLGySGaewazkfyDsiTqzD",
  "key23": "4NSTwHxLsQUVDxruNTVux1MQznjKJR9Qa8jU1cuweboMZ25J2tBGVTZHu8qcm2Jv3VUMEXcqb66uUCS7GNgs4y5q",
  "key24": "2z8Vrogq1XH7NUrp8hCLcsjEjcEYKSTUKvgtiwjp8RAt7ejYJtyTnT4zLffi1APsoyVgZWcvmAkcyLNPSCBU2gqP",
  "key25": "wb2xmqU9X7zX7RqEXyC2kwEVfKjXJAxBS9ZcVkoBaaW9DTK2YQ5aSZDMtBxWSQ8odB3s4RFWEYGCxcDLwwt9LH4",
  "key26": "4EYk6GZq65U6L75NtmQ8Xn85MkCJHhof3Mh6xHdGy9G9v6KbJWxK8e7q5YF57GNWQWpnzLT4DXgNXAz5RC3jeae9",
  "key27": "5y3nXtGfeV8U8HdHRi3TvqLcdaxretwjN7T7j5MQm76PTLwpoL6yihGav2G3iT8DkunivbLmq4jNndReXfHoTMVL",
  "key28": "CmYk6wa5drxcY3ye1f2ZBEkMQ7fuJaUQ59c9pNW8tseLPSEHtEQMEwvqbhzDgsR3Bv8rwWxd32DNxZF3zSY8Yoy",
  "key29": "xRTnRDwph6eDDmjRaYsRQJqJJbaycWUpucwnJKKUUyrDajw9wGBkXKtigiyqbJFGVbpAVMPKHRrWT2JXPPPRwTJ",
  "key30": "5G7VN9VkRwFAdJD5Zy53wJUuSPRFv6zD3DELkWCqBK2Jz3sWDqdjCCfwXnyYVdzvedY847VC8bKJ4TD3s7VHianB",
  "key31": "4FCQQ5oaTLE7CsTv2mUAQ3dPyUpDVf7MftwK92DXiZkRKDAjvPK6WC68PZBP1E5tP9Zvmtdzdr3bUdDD8sV6uxU6",
  "key32": "5NqZZv3KS2e1owYdpvwwQQPgPKUJmham6sEw3TvnQHZvDWJtnn46HQ5qSfNHX3RC7FAJf1Z4s8CcC5G3w9vxrNyB",
  "key33": "3qhPLumyee3jzGUrSzL91D3KbH9ay2rE4iJkhDJpv7tz9Tg1D4ETXNafWTCXYFzFenPajKzT5ys3sGsxbQhY5aXw"
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
