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
    "4teXkuH3bXWL58otWcGJEYVbB3q2eBHVZm6VXAfj72ZKUpta2a5iJdyrAKt8XpXEM2Q4jwBY9JSK7oLb6Miyapu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVWq1waCwtPuqF6sJuLN7pEj9o5rWnzoXac4kyGZFrt6CEUZpkAnaRmazRg8S3CSH488oCoJwKfVz5eQxE6Hhm7",
  "key1": "38hdtbReWJ9Jkn4Ak6ZSYURMUHzgCi4o7RAdBJ572WdTdFSo2Qet8etcWCjiLLpAwm2hFTM5VrkWkxkZpUmgBRc5",
  "key2": "5KyhVBnhhPA3UDgXVprZ56A2Q9bWPvGNSSeKcnsJ8rMnP6Jn2DJUZzg1ZXqxBGdoqsoZ4LaaSG9dgFTzAwBKbYXd",
  "key3": "4dc8xU4s3KvJ3HAs9ibwTZjmvUwfnhCkLvg1wZYZjcrJFcXxdE4tWJUNqRDoPqfdtSRS8TC2tQULVXztrBwVoqnd",
  "key4": "65Dhtx9Wgv4QihCLUPeDNn1Bgifmk2QeGBaJdZbwPBB99ijz4DKtzaWdE2RALnaK9cYk3hnnDDE5SXkPV2NkfKRr",
  "key5": "4KBW9GfeJtLuPzPFiJ2AZbNoYSsRRpP5DBwo87u3nCYoH9onD3gYGj7K6xpmAKwivmNMgi48XPtTpGeavXh94f9v",
  "key6": "5zp25ETWC6JL1vfta7P3uzxG9J1GddE3hYwnBsQhhNpLfcu6xzYJpQjgRGnFiVSYqR5Fyn5Fhq4MD1678Dyaw1jT",
  "key7": "56Td4En12EC5nZuyqPvr11v2WqqomrDPJmb1zo5CZ7eTKiRELvKmQBk97GhjgGxXbgHGUNri46EzXzHjj5L6wd7A",
  "key8": "3GFKPPn8q2QSe3Zx7Lpdkv1oVuH64Dbsp3aZ2LBEhkqXZVtjiH2RxUYaBmH8ohSqHs8s8JheFHngjLA9p9TjqfhL",
  "key9": "5tnE2XW3ArNL9iTvvZdGtkUGzi2FArysvcB7VYkw51uzc7qfycUZc8QR5Az2tpPXRbCJcPDc9cyND5gy1L5y2aJi",
  "key10": "5YCWKizoeq3Fmkn1AAPwZN6BMJBzzSSCGJjswraTNxWzLhyebT7EKJvi9VRq3FLKjgaiaAodCo1bF1rdAPRcBLoa",
  "key11": "2RreJAo9JEjhHuSid283txUcoEwbbirLueH3fAzpNCsgm2ZR7qoZAU3jg9C8qneCz5vgbf615D7F9znfw4w4DWgD",
  "key12": "5pMEM3tCPSCnxYzA5T6Tf7U6xYVEFkccwc9o3MNJzUwsM9CwEkmrqqEehEscxevdKUCsruxP5pjQ96xoBNLDqWS2",
  "key13": "3LpWSgjts8hWLGJVh2Q5dudUSgqrp73DQhk9sjftiD3Gq1LCu2EyzJCxXZns9ztNwroALjuArLQ93AbAF9jaVpVh",
  "key14": "s6WteqZyGi6npsaVJr1D1Cr5ZkmJsz2uPjpcmG8VPs3YGrdWEVGPT6dc27k5B4Zj5eqEQvpA6Wq4yUM5MEBEbUh",
  "key15": "5wsJyG7U9G76MD8AYFfBaQ28wVrUnipeaBBn99dSKfPmHGtWCxaiMX9RSauWUdths6JY4WPBDXiC3VvBecd5QAQm",
  "key16": "5GMys7vzFUVt3W2JmuRmmrfLVgs5iBVciRw6BU3Eq6qHbocXacyDkjvo1tYaGwiwqPUQwFEg6zhELihu6WC5exMC",
  "key17": "3zENB9VbG2hxFyxxGaFrqCSkYvs5J825U9dUVDBJQXRxESqSvgeCFzhnVVmGM4EQ9QY4uJJ7K7einf8zXvGphiCJ",
  "key18": "5D3bjNEvwnDoA4obA9QprRpX1hmBmY8h8ejgsqauyUKzjYU2oSVnTwr17Dr1FHR4Xa1AKxqP1LpU7xa7oSZ5UCix",
  "key19": "2fWoh2jSonHxby3mrkozZBAsNLXTMy4RV4LvQePoSQn7HJwnPYEfXERQ22Rif7ArnZ4RrvyqiLMq8UJrCu7RQeCE",
  "key20": "3E6EEbhPQXpsf51o9iUPo8Uj9VdpdeQoF394JvWmrZKhzaSkr8i1CLvZdDa2UeNxxpS5z213e4M2Cr1ZjZFtaMjA",
  "key21": "3MRimqbvjtsk5QFopVD7bL2yuDRsii1XwJi5q7AfBH9BF1rHJ1H9VQrXhkZe5xzi5sAwKXsqwcJfcL8t5yiPDeyn",
  "key22": "4oDn91xH5wR8f4fLZ9vNfT1N7u6UGS8fMzPWRbs9EgRMsTituwnwNZZMM8USMnyuyqK3usLzTUgUp5CoEPCNnPVB",
  "key23": "5LJLQY4gEATWZC6ZA8aTHPErWGaUvFon2j7hQnGAHagC7dR5X3e24yz9ZovfnZEG5Bhw67iNdVRfvzFz1NDEt6MN",
  "key24": "GyZdsywEQQBgThiQDUav41Jso4cDNhyzhGV5CSg7fwRLNyrksTmJuU6Ka2b9akCngi3GgtxpNXzmZGKKJwS2yp2",
  "key25": "3SuNBMgNVYs19yDZGugDxBzzxrbt2tYhByeBF1MXZxc2FgTG2Jk49Z51gpZUr432nvyo4rgvSU1KyjcZXQp89hnQ",
  "key26": "VdLNMP7U9F3f1cpNHhK79NhkibTSB2VWC3A9tDJn44hpMeWRfyTjpYQzh8UnMJG343DLdjDaem3Cz9GQ2dtWnxc",
  "key27": "6PYi3u99UnuJSNpT4ePgMUVTVUzisJgN5Mi5a8s1AhhjrCUrPn5U7WCcqhvZbc393hMxZSxGJYwPmRNBg3HWVKu",
  "key28": "2BSTJQbPW9h2pQ1Es2CsnZVyi1b9R1hu3fbA5HqV1xqUJyEicuc2y1WxsVBaPJaHeudSmnwYBuUwbzajaVf8fWf9",
  "key29": "49brb3E1rHi8vHm2mDNhn8G5tVppSgs69aeWFLwmegSizK9sinruisgpjxLiwGev1CshVWF5Dc19WbxfJzPSNaZF",
  "key30": "337E4ky4Rkgnmkg8KJNP9Wta4cGXPcPRKoeURrw9Z3WXDkR3ZxveLztsvm9NMxgWfMaG3xzZ8FxqFRZwNryyDaWB",
  "key31": "2y88YBdtWHGC8QUmWdhLPtNgpm1t2NHCzZRsEMxC9PFQopff1cfEqNL8yYoUxA24fHujyz7gfU4LNmchxw1QCJCU",
  "key32": "2JQwHbCCejBvpyZVHsMoAz8bCApWoyJe6NPHXBWqDXvy87NhcjNWVeyCVGmu6rd4GZivJKUYHu74iSsNfgfQ4TPh",
  "key33": "4xNRuw5hAWoUxKVGSAQjc3BB5v655x4pNmwAea25gfmZATJg9iHXQgMwu3836QXNu24uUvNSz3TfqjZkxfgVsBLG",
  "key34": "35tVQuFYV7aLiGeHgp3vYR4bfNWgBUH9LtarA7NpoRroG8a754yTyv5NrToY9sxMcMEpizu35FD9xjaW7jHiJ3Gy"
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
