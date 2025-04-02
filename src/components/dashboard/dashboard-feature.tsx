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
    "29qsNKkkrymryGStNfu6qBRzDTSyC3tC8ZqZF3tzM1sS2o8g5LYrpYtqExQaawJyitNt3SMYn2SGpw8zAHrvMcao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eFsiAAuN72dqYQNSnDaQncM6CBz9zx9LJhALgqUipBFUnPtb99TwexKsEmEhvos5yUZWSha1zp9ipLpEHiYadYL",
  "key1": "4RKZyu1JEZKNS1CWJpS3hisuHVqG8rxatB9UwYPf6CaUQxSx8y4nzTorLj2WRqsykkv9a5fDXA24uJuqz8h6ebHa",
  "key2": "5W6q4JPwA5rdg6nfeix7cYdSY8QU2iHDz5CevKFw1ew18EypneZRPdqLfAhY2CushVJDi6bWWX4VkgwoaXXEMxE5",
  "key3": "3sUtBuXd6ZY6EtyBjCoZ8Zq54v7KBsqhcsmKmzLgWE6aRq2U3sxYowdojQrX3ZgxXLUd76wEagrzdYycbbuqbR1a",
  "key4": "3pNGdGRsQKBR4zWF5eUV8U423JyCUnQTzX6VQBJuVKi9pDEVJjizjPghWw9J6dKJJUKAZN5X5xj6hPHciXLSYDCU",
  "key5": "9fsEwyhm7oFVrcdWB6x9dpatsMKA5AThig5XQSEVQK2kMhpM2znmAEG5jRfzPYDgEYoixJWZ7y5YUXZeqarhb6q",
  "key6": "4WJm7Re2JdqGGXqLTYGL9GBb2kM8tnrvJysz3zeWAP6LQ5Fp7XxVvJCETTTeMmouJJ2YK1CgR5JKmD4cpYDZQgVz",
  "key7": "5in9ACjUrGwWoLh8cbJwbjCxg1pPoN13V9Tmq9kM7gnBpeBDLLH52JjoA1Eu56EGT1sxFKChs8ziUDSfZAcMSatN",
  "key8": "3BBKVaVRWBbAEF4dmdTe2CkhgUyoMVKahzLE1m3Hcdx6KhpBmifAHMA59YodcyyjGnU4uVP4gBFaSdXmiukf3JTm",
  "key9": "25oeCv4xWtDsFaWSAdDEsGtpu6QL9qn6Xo3k6xHhVHnhEAudHGCAENqZNkM5XZabRmLeUXnwnQn4zAuytbA87oqd",
  "key10": "5ZuDSyVN4YFvTKptegGStnUmztDxge7XvUKXCDSJVkA5RDxPcUcPzFay99DwL7cEijv8j7uqVqFjysTvHk3p6f3K",
  "key11": "h1tRr9oHWMuTndb5YYnrZ8pj6ohtTxBBa52iAgi8PzqK5EDkrajPcNmL7UFbrG9GBY8MwEJFAfXwinL8GcUV6YL",
  "key12": "25q82UagGMSyX4Sbm8myAr8Pjz8tWv6tXi3DkmxKgXcMTBXRoWg3KZWH4btQUHrLCCDkRffiEBBg8DqPMta3Qece",
  "key13": "62isof69LhUNa6BL9DhtKM3ph7a686ThqXXzugJdqrqwWYZWKnXrqr2CsDqFJLFrrueTTUwXq8xtmJrfCzWU2BFs",
  "key14": "2QMWvvtEnAbK9P5rbLtVMm9Vd1WFzypXrFC9bSU27Y1Z5GJhqxv2YoQmsTtxUWT87BLAELVbgjmrW1cgXS1EQUve",
  "key15": "uNdaq8NC7YXTPw9PfJAwMo5bSYshAZ6Q84wpLPSUj65jhQ9s7rjPena27d31UszKuo3pm2HwtV1kTAp92YE2KBM",
  "key16": "5iDaahKFqPxKSHau4XA6NGdNFRNCgmuus4KbtFURB1HDjg8cYN6njXtLgqz7bXaMQnfs1TKb5K2LSibRytjRNCia",
  "key17": "ZQA3WumkEu98daje4spsitk73Bq9QaQqB19ZQMo4mKztsNNh3BX5WxeqqXYo1wXC1x187bv7pWzE4p85ZkEt9Yn",
  "key18": "3c1qb3sA6JNZ3XNw5S1Ae6xkCRjUDKN7tS59S93t8uNNPuKNqU6mDZca83q3rRDPqj4F8uJnNc2SvGX9JosSjaRQ",
  "key19": "2RTvqq7WcqGf5oTu6sQP7QKuEDDEr91qRVyT2vMdoJjArpkiFn97pE8Fp7CHCTxU319cUQzyHNHgUrbdwjRcBDR1",
  "key20": "43h3RFVPKQpWqUEZS4WEXXhtoBr4tgignbPXyzApL73Nch3BHte4D7TNtvKQpQ3Mj798MmNenqi7XqvB3Knu9m8v",
  "key21": "4u9re5NToVJ81JpFGh2CbkK65whPTtSPBZYLGPDjtMzjxPARG8Kr9v2bwY3Kejs1Yik8Uh3nrNdBMLA3jbbxKY55",
  "key22": "42SmNMHEmc68G2vsyi5PEQ8K1ENcJZ2UnkUSa1nMg15bp9aBgWtGq8Pr5FrVoxjSQV7ETygBxjXcjsXnCggNXvtN",
  "key23": "2YJpFNDZGLSrwTriqAufLnFhWtCoWidWQBgMaWboHBqm6WdRVFtueCio1SwBcrbYrbFgTt1a634PL7LHhAbmo8BG",
  "key24": "5u6wb3XeVrwdD4Nki64zdfmNe5cRMCtUkj8rG1jyAgvws4A6ZjMWtNQhfkF8WJSJaLuBbPDza8n4SxiuD6v47BKd",
  "key25": "5sygzLVWP7X4vDpiEfWTnwjwzDnH1ob1h6fEturpe2hUyueb5nyu4M9PruPmk1prpaM4SUCv9PpqY3W9mDwmkjkS",
  "key26": "yLsZC76js6tZABXxVKCxXQ6rrzUfx2k69W5XKk2MByjdq35z3R41E5XmLJLh1pdVcB8noPXjwS5rdydJs528WDk",
  "key27": "3La2RssuKs5bCDsgNDaKBpdj6AL7zNWnmeGJ3X5QJxfu1fRtS7wQaqx4eRS6QvX5nD9tWDKbHAhyDF5qoE39xFdV",
  "key28": "3VceYrL634dvj3Ks7z7dt28iPnpeUHKBRx8Tbkd8DdayeLJ8xRhkccCsXJsNES2JjXtWhXL7M9LofmKvs6HqQefF",
  "key29": "4o6LjTHzrQ8r1VQmhzsrijnwNPtYxWt8KdojcdbTr2d1mMJbq55zS1Xs2MNY8mXWwVL4B81L1xrsjWFtfj7UaXqX",
  "key30": "5uCWt2zTB13mgEkUZ2sEL1trdehuQRSy1dLDnvwXCLKC6mrQCCi9T2AhpsSBaJ7TL8GxoNBGwNpGWAGG46E12bgA",
  "key31": "3EiQEiWimcnYwd72ZVsbxYFg4MeFBqMVui9fvsPELffZkv8BWiPfVMvMB6rgKB2JLF3MPhEsmkXBnfPMU9w9jXPR",
  "key32": "53x91sAMk49LacePZ8HgCYJa7EJXaGN9qizmhNrXp2DR6VSFtSzuhjWAVhoAYTPuYNrnXutwwLj5arP7fRWphRbB",
  "key33": "33rcAc5psYbtQWGg7gp5R6MyvJXBtifnRBPXToJVCETV7BS3Ks9CYCaSdnoyrDSPoZdT26BPV6E9bA1iPs4kUeqk",
  "key34": "3KxpvLYeWWT1ojxnKkG3xoc2KCXkscYUcrgCnp5BVjSffbNzhZ8Ei4Pn13bUwek7TUfc35eVcBssqVVdU86X3Z9n",
  "key35": "63CVisdPqWQwiCAFiAGPGUrKMqRXwQLdPyWeT5fa3B7JsedqrHDH7xeMkuRdBDjbFVrbs2gcTWgNUSBAfk1TSdf1",
  "key36": "4SZzXsW4fpziZhH2fWAkwK39VFL8MsXHWrC18MZVX1jFZZJHwG1hKZvQNyQNUsswXLXArJ6R3b3wgh2iFiPZzmNV",
  "key37": "YWPDfPzCfbadqVpdn3FfAymtDnHpHzRV9z8zfg8svKAJan1GfumgJN2jCerKrniydoZGptJA9az5R1Hj1Gs54pR",
  "key38": "5j46b3VAh3XW9uBGD1ZmZrzTc2mrp2qrvND1PaP2RLrf8hM9ucz2PwMwntS4YfSNGNyoZC114YXdft9PXLWgegiq"
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
