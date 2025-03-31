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
    "3nSmNUVEJYn43HVgnh2mDzpaQ8kmomiF9p9dCtDcaMbiQjAoXZMAoMxw3UFVnCNjnTwkK5LhqGkovvx5jEQmGmdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzrK9TYz5dA3rz1e2rz6jdDaqKtdJNGoMxmapE7koC5jWUFeze5XX917XL7qDFCECi9P7KrcLF3RhhhcsMRDm1u",
  "key1": "4gBZCQB8yDd9Lz2qA72fPDws8K1kjbUCRHABeogfNRphMD7bRHhTVxN6z1LLCPNnTx1RXcsqNYRqDhQb7KBbMHBQ",
  "key2": "5JkbbsojZimeYX6gLex7s13Q8ebPLxtkg966jQvjKBT6de6eVCm5RJGTpyL5nNqWcoMp5Bvpi1VQAp2oSrbweayf",
  "key3": "QvZ68jriyFG84eDdTARVyoXkkwXMKmsWtLt46Tt4P4Loq35rAoFaJKXZisRneRpCYE8XH2g1hyzZwMGa82hE8zc",
  "key4": "4K5QCwsP6NEQP9d2gskQJu9veLNVaWuLJVPdtec8nxoHZ3c4GrFoN8JEyjVNWpmPwh89MrQ94jzuRsq2DeEZVSo8",
  "key5": "2Lwoscmtz34E3goGe6PQfgdejDRWQ3QR3fkkcYVM85vnmq3TEEE92yaSq6HKyQ2YPvE5cp1YqU6twuAZ6Kkx3b7g",
  "key6": "36Sv75YiscMj3rsbabdFUbAokhs3K3XuurDTe3AeDMNvMLTQhgbPuDcWQGVu7nsyhgkGVkatnVU3tSKLcpXXHiXk",
  "key7": "GSSLPq2UheyXEQNnAgdAnnNiDKam4iCitG3HUXn6QWUtxd7U9b39HWdENqQqiM8Q4GAAYvBHNX6NpJh8Jc14nJt",
  "key8": "E8JKvQCoS58ZDUow9rTAL7V7sqFb3iBDDWXE7x3TT4h8HJKftK8XuHRXLaVuekCYtof7y8ZuDyTRzdaXwTUyPXk",
  "key9": "TE6wuXsTmffKYq1R7HdvgZbcbvaU593qhs1rEk2urkfMnap9CYQj7r6Lqi6x3xnWHM2TNmdz9jtF72NJpQRzKQ2",
  "key10": "3HD8w7FbZHqWtE32K18oEvFwnXEKo5BmRzPe2Kn86vuuSS9PJxHZeQ8NLJgSoewPnSreajQ2N7uwwTbor8Lf7pKy",
  "key11": "vqoaeRWS1E5W4DF3gt9AiWFw5cSUxBQyfKoBgL6ZSQnRWq2dUicmgoNZWj8vxQ6vqTDGjYf4zxFHh4VeSCNkahw",
  "key12": "2XrSsE1ppk923kRH2FCmebgTB5frC3xHgFUYfdTjuL4HrdQo6Ly8np3J7hQaUTszjbULGcJPxDTsYKmp2BMXkN4F",
  "key13": "1pi1gy1iabuAgvWJLZtsPtiDGsafSdda1uGdsPY2ky4Dj88ZdeJvsQDHr2T5stV8uzeFFMCTSAJCArcuhhy9SMu",
  "key14": "4zVagBTqXS6usUrGdnkzJwv4BW8z6APTzYoD6pue8kGf9AuWfWUbXKgEHN3tR9BTerXBdMj9CZNVhUWBWXjyUoMs",
  "key15": "3duQZDMLvGWEk3jCFxWDday2cq3EA6A38s9UhbF4vtqqQ92RT1svZ4YXUEcTMoEceJt5qsHKJKo2fz5195YHr2SZ",
  "key16": "255RyWyN5B3fbaZDaWfNZiR5hTtbafkpzr3b2xw2Lz4uK6e7gV4mY7sR9D9Gk5XzJZt2HZDNQzgWo3PhERZ4D3Vr",
  "key17": "2yDjLLEY2XSguy5MQJL2bVKgzhkn8qMB1vk1iLUkfdgoPGKFJCz75q3KoGk2X3zhoYG2qp3yePJc3ezWfRoGsAnq",
  "key18": "3zvb1ARFHLfP2QNSS6iJ2zb8ErTK9J5U79yY2VqZ3eiGe7WruVTZfwVdoxQt1WrjQy4xPMCG6naXTQEUHxZRmias",
  "key19": "36jLfKAh9STajuYto2WmhC8v1JpgzckKiHEdXv7ExnRGVkSaPK3k5qndWPtNvSaZxaQfmGdRGqcsKbWRfYVntQaW",
  "key20": "hwGoLvoQVaYkBJqRuUepR6wupsYZtKss7dQKQJMENceLjGMF1us4Nun9WMK7hfv7q4TvtEMwmeAWHdbqTpCDSz9",
  "key21": "wgdocsT16NVVKfdY4Qwvx553Joq2pshE3dhpn4PTyxtXMebfGAr1KKmUGTHQSxsd8wEWrJGFF8BQBx6vtviFDvn",
  "key22": "3uyQpxnQ7AfyJTNnojcXKVTLS6o9tEEukuQ4LHGsznA2YGaBtTGRDxUskF1TUnorTsbcQP3cFKD8MaroJUWqBSWL",
  "key23": "hwDf1SyLfirS86EVREUs4PxSTJaiEeVMMbLaQnaCWjTiYK2mWECAfUVUnXgZLjNG7oaYrpw3g7SV2w9WvVJhsT9",
  "key24": "xehUkZeQvPqLKzFC6UVFwvqer9rDBHrNLAPcQ6LDeLaKkC74KvVERfL7Smpvr7ZKE6JZ7CoBnxngRfWoWjvpZGa",
  "key25": "3a6GKtEsJ6tmnwHhmgUtnYUBU1SsY7ezrxo8z5mxsCyPf5TFHgt4wRWAq3xnUaUPy6ce52XNE42CnviUMt6wQ2tH",
  "key26": "DvVQYBkm9AYYG2X7kKEZwcoEHzcBtsUawpEebAQMgHuGorSN5Gb72mV8YPd7bBuksNsqBJXpmYcSzh2SYqix95X",
  "key27": "3Ya1sxw3frA8UD2d65E22GWzgpwJdT56kLuRHJQKWjPy8AUyc1kZKKpBNHbx61Fw3tDo3B8uXnx5usSTRETpJNro",
  "key28": "42qLbsHmwxtsnKR1fy2N8fvTbtzdPQ7ZYTU4AWmwUs6pj2aUqyoSYb3Shy2gWDuhvKkfKgzGNMvAHXxV94YkfURB",
  "key29": "2eZttHRcjY3Cdg7jyNcLzH5cVSjBzzpLamWvw5436PD3ipdwu4Jtx2v2r22tYZp8LKrSofPiNq4CVbGE1q1UrWN4",
  "key30": "T8YeXUcoT2N5maf6YbuPSCm15jgQTirsFSVyFqT684ZCSBzQWwRuuEVGXjjLBNWXH1qi7T3BpyE4qoXXizpKsTz",
  "key31": "5cWZE3bJZVC4eDDutDGQZ8y2CpNGrRcn5zXrcE9tw2whsAqT2C4mncccr8fDuCWQqGJRDDVwPqxbpGdTgZycYD6t",
  "key32": "4gVdMZ6gLEctnuUdLjSZuGz7u4dxnY7GJywrpjXRJM1RReXo87LGtyHQs6cCHtKzTXKWsaRgTkHePMzCUDVt4ekk",
  "key33": "5vZhMGLdEgQdeRG6rZPhwTR7FHzowBoCKfFf9aMAZUPd8J79kMp61qPGWeGq2SNqrBMiRak8p6w8PSvQcZyMymXM",
  "key34": "5tWmEXZpntoexxJsEti5qP5GEZytmXu1CfVqg5oaAh7fm73Zz8CYPtJnza3LvmkDCYidzUoVa5aSfpTsPczmbHqf"
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
