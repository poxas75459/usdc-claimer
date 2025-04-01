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
    "4oRjwLykG2vE81Hn2sqLFfifYd7BRmBTZoxbv8k3Sn6Sc9hnKyrY9HnxFo2U8zReHxsCyVh44VszraZqPxfqDCyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsMautt5p7V5QKnCXHGG6aSSDWcJdvK4SEjZpdpACfRccdbjirpmvwjMm5s9dgpn8k9oN9H45bxMay8FQZyLUhT",
  "key1": "3GdmZ2jUn29ngHWJEv3oHtJkLzEceXESUxw9Rbd3UjSnybr2haJrBiFQURu7av4etgaG4dLgURnk34e3w7NiKjw5",
  "key2": "3DFCbGG31Ri5HDB6mqiPojDuicVdU1eBRZdKK56CrRNHNnqB8hjPMG9GisNwEfx6YefhBJWqa6yZWpppRHFbPaba",
  "key3": "3R55GCkkvRBDmx5Zxtu5V2WHqQfetcM6vPQUDP5YrQasnMA27uZPDgt3MqF8i4EFtoHeDRn9w1cHMuFgj3vutxnN",
  "key4": "5KXsnN5LCs7hVFrjDXLV9LCMhUijLRErd6y1VjVoBL1nXVCuVvcPvTHbh2YCLUvhXJTEjV1g3VWS23VtirMAziY8",
  "key5": "2W47dkg2gosvqVTVFSSxbw6N1SVcxkRN4LcbtttZEPv279VK7N6aiezEKjKBdBHLhUsZFc4Y9jQBpUzgpDtNnXpr",
  "key6": "qbY6Wiw517NfkVSTzdS5HfV84XwBBUjhyFLJ1Yx8NtgYcmzDFvrhr8MDyQeRXNq5wubcNqqrNb7WY9QrFabbnpJ",
  "key7": "4Lr3F9PY42a5uwzVWgHdVg3UE5UUcPDztj3buthTTcLNW4pdh9RZxb5uAzawDiiayqhVbn4a1wXwfj8HcMmbSiyb",
  "key8": "CaXkhWSc7u6Q5jPncyBEDkeMaSXCS8eS2xufNov9cqi4bo3KDyGKhq624GkayJa8LmTK7tdqif5qduxbgLKZnCk",
  "key9": "5nAonDk6Jg3bhynCQEvXkA8QESuM7Zh8nRLby5nKTYWPueetKJM5wtTNtKj1SnUM87cSERoRu3Kp7nLAJrTx61F6",
  "key10": "2JmtMJ9jG11eu6FQxu99QFpwVYAeWTowT7XGaiZ56BFYpFL9x1rBcqPy5XAuTXUKZF5WyvH9wsnuZcpQZGCdZ9FQ",
  "key11": "5wdY6QCRh1DeAbzM2kNLCdYSXSRcLWKTxmNiD2knGnnwyqeZx6NAr3SjJ7Ad8wTFUrEFfdYjzwaiELAa8GG2cqK5",
  "key12": "3XmD8DYRRZe3DeEga42SSBYyq2yY4D3ZPcmrsXQtuS1p47Q3CpzmPSv7SFh4yyKTMoj7aGxT1xSDpwZ2tKCyGEz1",
  "key13": "4NoBqBWHhdz5Yo4hK6dntf7Kwgd5oRfHSMgcPyVpSAfc3Ng4NMrYTYhZ4gRgq2PLrHjCztWMt4DzCxswcC29pH3n",
  "key14": "5PoHMdh4nsFUTiQR2E1ro42NyDF5SSsE5PguzV9Q32itkCkY8i9XBbfRDfiGG1JScwDgV5BJw48uaiqtWGmYMMWP",
  "key15": "2HZW4DhH7msZizLLsCAswhxk7tDo4b6RDrMfuFxopKx7AsQB4HfsddtvPbnhNQzVMLLugK1XBPj9pHF74fTsytgh",
  "key16": "3jkAEsYA3HCNA3CE6YWJMwsbMEDnVFV6qbHxs1tpi2NcdK1Es4cbWf72eWabHgLqKxCtHBEqaZzyFQJmKZp5GjZ3",
  "key17": "zqTZjoQWcvkVapsYt7bJK959WQuxpcnJJnB4SwGBcVJ2ouyLSBjxxhmXxE9RCLvVRjNaVoyv2qS44UP5aP87Hkv",
  "key18": "5SWBYiAFQSQ2ueD2KttWt2hsydyi2bjTj4Aj36mqd7cGW5RkyGTnegG1hANRgysGx2ZEsaG1RLL8VUkR24mNfFs8",
  "key19": "5CewwtrJxY46vH4xfYRhFvf1M3nXuzdBNuieGu8mwLFoqwV37sfdMzcgjqiaQXQB52cFb7rfN5PLWRQ3fKnXWzTA",
  "key20": "4JyHCFeEYjptK21G9rp8SoTtE6iENbhTu48ofarh2KFjzresvynUt5RoEEZWoK9tjcKiTzDETvJoQcsYaKesQkyi",
  "key21": "3F4RhkMqmLBL4wCGcT3o66yc3jE5m643A5VfULbkVNmLmMoJqUd83gQ1P5jafbteyYrigvCPLNbcBMvZDqNQA5Fd",
  "key22": "3Wb4DdfUDirrCsFGL89FXv61qRudWQhL69E4D9egUh2Ms3G2XnE3ZBqsHMwMAvuggAKW81XLUKAQn8UzHgyke6x1",
  "key23": "3wXruPt5PTMGk2Z9JUWBvBNpzEqtirfqRmAj3Yv45Etx5xy5VpFdRKh9sCfqjFFzBi4GqVNQoqLAa6LuCNxMqFMt",
  "key24": "4ed2kt5cnCFpeBKamw1DkH5JN5XyEFuQHa8FuvyhqRqS91fB4A3oWbYhqiYTK6vfZuWDNrftzkmCxELY69bzX27H",
  "key25": "42xz5hbqDDhJFGNBcV8EJ7JntJkTskCtU3BdtVydHkkYZx6bv3hdA7kPRvMXcCobbDPc6DhWzLMcFU2HjVMEQHd7",
  "key26": "4RyVXxfmQxqSmU3WUaMLAUptuJ485YvemGoG1BHpqSjf1EX1e5eRh4mYSVwhrF2XXrchwKygTHPuReRryyGF1sNB",
  "key27": "4BeKfr7iLQrt6JFdHtYpo7oUHfsf92M8d4kAgoT5A6kuyY8ZaxswzdwjMFa3638Qxz7yWC7zZegYfvZWeNYvhfF6",
  "key28": "4dFSh4XwQE2x1DRMyeioTa2RuoySGNvo4pHTYyUsRZ3pBWKbF7Fcsc69zPyNhE4TUJA3k9VXdUUD3TpEs56fUZpu",
  "key29": "22mCdbo223hjjoW5tNVkKLTnRsLbt98c3dATf8nsr7dgR7sJjoYyG8CU8BaLxEaEXsMPn3sGme8KF7YRkFVSP99t",
  "key30": "4oxzV6YFRma2Rn1vS6PuyXWLXjEnxHxMmZqGssdS2v9qAqVbEfzsHUSNi5CrqFnhSqYRy7CHRfCMBS2RK4nVH4pQ",
  "key31": "aNNXsMFzqVCEQ9Eh4aQrUiNotCAkL98AmVszv4uAGNbYyJx5A3XoDhsi6nDfgMNRcbCXbMpN8r3fAKkocMFA844",
  "key32": "3ByvtXxwVGLoiaazQkWaQUHqW56Y6tkBgQBd74NNUGkhXKmdbryh6HNBro6MHoMmHLDrzrQi3dx2e2v6Uyz1fKkf",
  "key33": "5EohQTGd3WSAHfGBxgHh9Ax61mcxoTpCHdhzuNHkFghzV83NHirreu3AKSyi63H6WqXpkKV1MJJFJZdfVNtpG1Bz",
  "key34": "5n91ehnLPnh97oGjiMAJTACZhuEAE1ynPMC3LKqJGL9LFVYw8L9XniTW3SNxqww46tJ6b14DKjeeTCiaEFDh1ZyR",
  "key35": "3kjCwjBojkoE5u33VFU89qG1HJ1BhUProH3fw2c7qs5Gq9V7mPWYjErx21hWpnHkUmNyL4ZWGgQHnCxDqT44MVBb",
  "key36": "2d4XktffrM9jc3wCBpE2Butb3cC8dUu3BcJ7SACdXbnYcLdSP4ZgdmNt38eqveHRFrB53Y3uFYKFkj2b7XyJroBm",
  "key37": "4i5AqTDWK22b3R1HSE2ShTGMjePsDQXCX4qi5wqUFZcZvZquiqKCk6dHELGVcuZMFE6y3n9h6Lut6mXTpyc7yb1r",
  "key38": "5mftcLu2jgrDJvysYsdiTnbQiQf9bRHGiCUgumHB1ogiwrqLr5EUgN4d62Vhmbg9dD5SRc3CYypzpJT7UZyyFpbQ",
  "key39": "3s82VVN3k7u7F2JGb3HVrfvrqww61tDtbaQMxzRkGffAUPsTR3dzx3dvcAZfkqj3EjS5cEb312TGPFko3WW5M1nk",
  "key40": "3AEUL9ELL1DHzQSPhahtUXY1REAvaqZ4piHjPWRwsUA5ShCjQmkJqFAtrfFnR3Tg9te85cs82Lo1ti9gajSt8wxM",
  "key41": "2GwLPeZLSWWiRRTHpAzTnwELZ6RsAUKHmiZZFk6an6vwy4ykBDKXqCVpyA2r5JbjR6DZrZNrrxLEa5srMuZioc3y",
  "key42": "4EBhFLsQx96VsKUurDBMtAykZ8tVdJjN7r7zPhHjmN35uvkkx3YewY5vmd1m4j58L5afaXyx8juM8YZ2tEMuJjwa",
  "key43": "2ZP7mRb1MKwW5nb83K1JaArpEXwCzRf8G7iZCXisnuNfXQxZygafTgTYf8cNzeSSuDAv6mKban6pkz5yRj5CWVEp",
  "key44": "3FyfMzxo8DXG8nNU7GBwJSn81BK6pFPUswoUDjekK3kTqDW8Lon3MsBTijX1E7W3iSjuAiFdcdhrv4WcYLrCeo8",
  "key45": "3RLAEF7Bn1s38GZ9PhHFqLiwnXBr8RSMUDcMWTVWypTCs2XuwDUtdsHLQSy6Zym5zMKYnAHBnE7MKS9Jcs8Rq3zZ"
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
