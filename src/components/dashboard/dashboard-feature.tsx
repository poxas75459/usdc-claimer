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
    "2L2YJ3PmsDFkhM7RGhyqRux6RBmFTeV9zWLSpq6fGUk8hWweX3xodSvkP2eUrjRqTx4Udv7VAZGUwnBg3hYwscXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwyxYWjAYbh66eH9Kt9cnm2RZ2r34XWxEM94jALWFKxEvsmQoi31oknKAYSJhKh4QptQEoiJ5cTFkM4ZVJ6hS4j",
  "key1": "2qmEii6pV9ZJU9DzYZvjzUzxJ3cvSGduBcdyFiAmNB5ENS2pu69Qp6eLBhYiqqx92FHVC5WfRwTiN94w7TQ7BTCs",
  "key2": "59PzosnsmnQvx3TVxGeygstm7UpLAV1usbdXSzWw7xmw9x7L9KNCfHCo3dJnbn9VkPm7DBtsLZE82y6XLq2E5Pih",
  "key3": "38TAohdbu99hvbaMpd5FVtLa7EUteZW2PdYsnAUX3aPnic3v9wSVWxSxLbLemMvCf3gTMg7nVa8GUm2C2W6wtojk",
  "key4": "4AjDJuqVzjqk6gFRw6RM7gCSFsPi7Z6eYQNoE3aMxKQWHYe9FRUabxWrqeBMrDyakbdBuoiXBV9gFwc6SYVgEmSq",
  "key5": "4QmBZQvG5R95cuK2c79UPw91eF8xDp2iajGfswt8WJzyeQDovsFhnwzgTSvhyWouPmuwUzrW88xHP294CxaAn6je",
  "key6": "23sP984uqN8JVZPJxHKAt9526uhm3SvCWZHWEuA6e5pY2jZSBB9BSKQtkvUum2a6AHwdom1JzyadpdKp3aGCo4Sa",
  "key7": "56GQVRPLnuY5qxX7J48Mevs2SRXveh3PkYxBi5Fp6GggMTiFias6yCgmJDCEegLG3MDYF52qGD7TTtpQTkqDj8J5",
  "key8": "5GUvtYpy92M8Smy1V4MssqsQvdGfsobC6nYwyURsf26dfEejvSp47zcKG4tr95mb8qJKzEfFgmJaRhkYsn6SchnC",
  "key9": "5wqEFsxgNpFKjzhNL5umxGDyBfn1rySnZ44CBPCMXdiwPKeMyBk49TPHpgNnAvd1pMmtuGV9yvwJ3pnXRasGZpGa",
  "key10": "28zbcVjpQe2foLkQz2vPzHctx2Mr8Da2hkjJtERn4kwYubQELK8sz798moT3DtQFUnH8siixkfoEuqVnmnmbwTA8",
  "key11": "mGwQoAR2YSqQZMMosUEEzBSFhMKzTMMsauUecuZX8RRKJKcGyavNHtmjfjEtcCe62Libdc1w2EwAqUXPuLtRpCn",
  "key12": "2L1sgwZbXFi9F3jM9yvTdzNDzZtKG8LTFEofuQjjRpinVVFMyc3DPWDGf2aWp6bJg1aJWZyQMTvVXHurJrRhTUVX",
  "key13": "4Qn9XT3D67S9W8H2MkG3EUY6792rwHBNnQWwvKKh5bFvnG95t9DBWev6U6BxnYpPWGLHj9TKEwFqZ2TnHnPSSbaL",
  "key14": "3yAvUwbhDDZyczNcDsEmjAXisMU2bDUBX7Nc31L66peqDArDE6GcX4GPa82qKzP8yjw1rMWaWVntoBWnLUYFQUuF",
  "key15": "2zMkUaaepyvPtYi9t7aV2ewVKyfbZfz9A5R7Vs1PUM93v8gboYJcSYn6dkfdXefjsBdrwwGiUyecS99xzjv4qEHF",
  "key16": "5MsmUc7PaGgEfxccawyhZnEdzgU6nx3GGFd6w8FpNn9Cx4YFP6T1a4NEAnhJG3wZMifQYr6JFvaukKAaXFgs1hsU",
  "key17": "2xWengUYgCanXj4GTF2SKYj7oedtEhLN1g8b3c7brvpfWCjtdH4rN3saFd4xWrg2KTyf81tfCkeXdsQcc571bDZs",
  "key18": "5W8sxGaRim8kzgSWvnPi4GiYMSz9ynVopyAiof8kKQcCnHUoWQrPQdJqS8h6AkiXC5i67tonYdrWr4szLaf8PffW",
  "key19": "4YrgXkRNLHTEKgR1wsMHRWhZ3271L74kHiLpF6rM3vTxBXvKDawXU5EQdkbFJkCwvmuBu8U47wf8NEU6FZV17ddA",
  "key20": "4ejqmcZ3JzVMLwKyoPHbdkZjPtPsYmieaSgCozuHGJ6SJZXrQx8zDFzBXy31ggsitERHVxbKJZqJmqarzkuTZYnG",
  "key21": "5v3QyGJ2qqf3JUy6XSrMiyC7fsQymijQj6AgBBw4e68pyyZUd7zRywZwwXxrnQCUYKM9GcFKQMh68zFrevC4vpZw",
  "key22": "2dS9kbAnK7ah7dzvx7ywWGTrCxM3GNMp1F3sQXK9MQPXd7iBC4sYPaECgJyHQ5xL8JGwc7v6dVmJS4Ai6xLdYhcy",
  "key23": "4DsEPEnfNeK8c3mJFiwxvPxxoxGSG8nGM6jyVsFjoE8KtKbPUTcpxzFzjjYixPYpKGidx2FCyaaTma2ZYbB3gsX4",
  "key24": "etnrJQFA7WA4Qf2bgA27BEnnV1RKos3yUUrjAgLR9oFWhvpdKeDNsdnGXY9jc38tAL75RShK3b6FwYTk8YBWQwt",
  "key25": "3AsukFwMM2mWMUmbmFQQjz6y1jZELber6GgkygDbSfSkYLDPPW46rNL5TsQnDaysR5qCiYKcc5N5iPPfg82NYwru",
  "key26": "39b4jtAruLcjBVfx5hBQbhskPmJ4FuwEZwe89Yc23NRoN3137oE9mH6BsrJbzhX2LwdxncNSjtNyTJcRkt1zJwEH"
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
