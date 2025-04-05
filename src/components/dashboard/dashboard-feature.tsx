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
    "2L8ZqBCY7MimMEKn6qFj5iMyN89YJ3bsdcpkL6AP466kjZPYS8dMPGrvNKt7cfJALTVnZkzucMgymJDc81r52a63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yKS62NtSQthwNbDg4bro4KAUVeSUxrgM2MHhaPQABT4aknU82bworBc2rvbGz3UiFtj182jpv9XgvJfZKDARQYX",
  "key1": "GXth2yjuK5ARQXzD67xXjQwLSKZU1nYMkAHvEu7U2KcfTdSYnfpStvhzkBp2KtniJ1KAbUxR9NT13ef19hPqUsB",
  "key2": "4icNusTLKU78AUZjp9UZnJNbVA3fcCN24uoUAWx6Eaf1XSAi6YoGZf3vmvDLxyDCqk1K5FPSpeRj38BaRdY3SEwK",
  "key3": "5SCEyWarHbTc5Bu3Tzzhy3qsR6drUZoker5LJ3Zx1nyXWQQqzwWj9ovKwRazxRngsawR2LbwYhsQpGZZPjVAE9gg",
  "key4": "mx3DuF7TqfbNPKMGJNHAQLuYVyA6pzqRBreJ2CeKbtGstvMChUbst38ZTr6YESzsDQEhed4oz5dMbqAheUUtim4",
  "key5": "4yQpPs95K6h1s2Jh5iPRUTzqmeMzK9ddPYcG3ppbBC2YX4eZMbc3duBAuMgj5QxYutj6kjDajsfSHgkFwQ4cPaBn",
  "key6": "2cctmzuyJYVrUfzYfFSmSWF75TRxZu79X44qpvjeM2p5JEGJeZd1oXnd1ynjjG3jEKgSG56DArvD57RCG2myPFLG",
  "key7": "aUZTDuJMMSpzC8C4o3UBWvaxf2PscKeryxWhgpA8FbtA6sPhSDesctLxWHTvxQU3YbAxU985hAan1NvD6q6kqBE",
  "key8": "2bwFLvLUqmxdZtAQo7uG6Tf9r1SX1io3dkDwFJyXoAnE6wtTR8jNMTayr5s8SKNuG8ip5r9WJVhZFiwgEtEzVMjx",
  "key9": "5j9pD3avzEBQbJDTrDyrP9DdY4tkFGQxYBq9ewjnxKwkGTbGRwL21pwGRAbRJ2uY4GPoFBkaQhWAT3dmpjK2wm2E",
  "key10": "2xLnoqY22JdkTFr6AfecGKuxXUYrFjisX2PSm3wsYdxcXtT5or7xyWDMRXEvkSALVD5XLAia3Yx2LYyFaHz4GLwY",
  "key11": "iJgD2BkmHg5P5ostP2Nf2LmxC7e4VXFfeyKWaRvMRHrHY2JYdcc5BppL9gaEz663MBSuMyH3jeF1ucenNj2Zkcv",
  "key12": "UdB5HZ9x7WX5houLatMWhDfhiudEaPuK3oZsnisTUK8MgTQQfF9inPuWLykQ3A87EwAn9DjK77Zg2PrxrAxbKZJ",
  "key13": "67LPiEzEVdJMvfFHRJ5dFp33feCiFXTSvqJpcDqvX8Vih8w6WfshQ7t7aFuZbUeqYeAUrRykCsPdgCDNayaNSPb4",
  "key14": "yNperyKK9R4RCo78J562Z9hCKLrnkWzUmft22soFD1miNJtgjAt61mSvkSFx73sWsDidegKUDEbMrLtg5Rv4fDw",
  "key15": "YWm7LCSUW4mFn8NLAS65xFuMWR1dbFWB11L5urXFCeQJyJYd3PsgTU8rfm5K7FxdncvqEGaARa5YusLh2drVto4",
  "key16": "5UChoMbdRRzmGszyRWUP4kFANPknropfCBWUJwwgEe8menQxVs91KumVESgxA1Cikd6pyGT2G9TqhzbqHceYtksn",
  "key17": "29ARbY47vPvhDk3Mt6ssWU4AELg5ciSaa6dj846D6cvqYisUYf3AN1Ln7rqWaYdquGmExUZ3G9c5oTm9r1mX79Nz",
  "key18": "uYTAMkUnfMS8cbD2kFpSDA7GEWtVA5RUv1nXgBD6FrYqpc6VQkwTmN1BAqJxSaY4ZMYkd2EA4t4arMgqnZP8otz",
  "key19": "317V17dCwxaHcWqctU4e43EVy3SgKd3Q27oSR3zBKuSBdC4ccSVL1sxJMm9gj8i33Bhr9H5hca43CwoYfQX12eB3",
  "key20": "5M9evKeeYThTpqf3s4MXBN3K99wUbwxMUmDnb5nTbE51wLXZkrM6H4dCzYmk4HMh5JGhiQKtxyQurmjdRtpWYNyt",
  "key21": "54kK91MErAw5u4C5uB2A6dQmfgK4XzG39gaNp7vhLq1uVvGUeJFkuUijytFQZg8cc6FW1z1WCUpGvLGxHKbDLWDm",
  "key22": "5UWCjrJ2tydiYHpFEeVy46bWwvbd4uhvpesEGAtYfqpv3VaZXzC7Yn3rBhq1hGGKJNLBRaYywnrnqaPymaqypKDr",
  "key23": "G9Q7HKPzYFXACvFUK1Vy6mLhHWSZFM7PEHu1ZxV1cvw3kGPUk1hjP39YHzi8P526CV8cQQsPz4fsekj46Zcb6Pt",
  "key24": "5oQySnkQGQNXqzeb2t8F8rpWQA7nY4zGR3EQ9vawRbdFDfiAUYNF3k7vd7VbQS9ZimguTDufRV6D3NjR5wg7XSCY",
  "key25": "mtpB6RguY14kV3FibCrRRvdRTsrDvuTKUkEC4L457XCAcFysjddRwQY2o9DsMePwJzNzfdM256kafiPpX2dVwXL",
  "key26": "3yWxpvtaW4VReYWG9RPjveVVcac7kb8ZFqX2XxvQyP7b8Myg4TUYU54z6VBAcwaoHajX9ioVJwCuHswAoCkbHqzP",
  "key27": "2a192CKTpEd84wv4yEyTPdZdfetKMKSZt5Ne6buxk5kT5S7Bn8RM84VRbUh2xpPXbJX97KkCyvNHyqQM8UDnL6iD",
  "key28": "4rx3QDDkm787pXNK9PvN1rpb1P5df5BeNdrdsk3t4P2ru9A6nFgXmttouRoNWAdqS7afHCUvexkDT6Ncr51BFwnE",
  "key29": "499K9goiQw8mLES1pRhrsGXzgNwD4wngkJr1jpg3hqWAuLCmuVcGLX2mgeB5wQm9wdWzZtzy9L8eGoJpPWRSMZQ4",
  "key30": "3PxWhqR1XqZMBtNVBCoQHs2hW1fxvzHn1zc17JNC2MWnADW4mwK7rAmsqjJzAiFR25Jpw3KgDcJcRmYZ2yTShhQU",
  "key31": "5ckZ5HTcQJjnJe7ZEW8k69CE6HzEeXnzAPuejCKxeKnXxP5maKwJvzL4dxiLHB95jrdTdUSeHgKZQFURq2F2HEyy",
  "key32": "Rd4acoYNS9xFCs4CBSXPxo8HqAKGFnoB2sEHq1mtAXUiarECRwiPDSKo6ApGMdyWUEPBUnWPEc6wGXq62kBXH6u",
  "key33": "3AXdNoLMQw2ZDLWtjFvkcLrugPGLEqnBN5qM4BgY7B94odqpy6BJRFpkVq2V2VtUGdDPhV9Q5mvTpit1zijNMrwm",
  "key34": "4sjZKt7t1nLedFovU9hRww9x7KvkedcEzcUHSaG8RByD8Uk9yGwnBSs18Q17di7RHkuKPz3VfofP714q3idDGaTF",
  "key35": "36wKb7gZazG9xNs6qHsMJRYBohxdaV1qEZKb5H6fapko9743ZfzmmgLkCsUXLrJKrjuu4eKzXpn3ub83YQXDUqtA",
  "key36": "2P4NtyDtvf6eoopRfDUvQiosSba1GMVq7u67goxx5yXju8cyYqZrbLZRTSLM8r6Lxp23uHiXfSdz94X3MyhzjAfE",
  "key37": "5ZhyfzENv9kZjAN5NLtezapkfkXSs8nEy9tANNyCWkhRyW72LTmd6upEeeqKwdJmWxxovagJan7qmEENDB9HVVKu",
  "key38": "86pq85GYqXVBLMBJ4BA3nKc4Q5XynadQW7fuzL1VzjjGvLgqX5B2t3BHpfaDsfxgjmuYDAbk5o6xCRcdBhYwbbT",
  "key39": "4ea65zEQk3suWFtJGuuW1ozNAkWkw7YAn3B4nKen9LxwjRKeNU9BF4etZSK9y4wmcxQcKtvUgFHzGDU3RWvFz9fH",
  "key40": "5nXiL11cpvR9dA2pydKa5ey8bcF6zzVePP6jaFmknT5CBvrm9fSKYc2GBL17PjoUNjoc8fKcB7A8eEfxnwnsts2t",
  "key41": "hohXAhNX4UB6peAbzrvT8r6RK1SezxG8ewqH7pa1PEZ8ymAN6j7x41s9iCi3FUUgxHYY7kQAxNbD8myDrXTsrN3",
  "key42": "5qTidPxiSLSUiCmP1uw3qu9oRVrKtoYs7C8AcoCRW5XdgFKT9Jhbuy4bm1eZdn4gmt7kLbdxG4aK3KivPH68e7uf",
  "key43": "3LtXWrdc2rvD9z2VxoM8vuh8hQPXnSKFJmzhbGtXDv6APRMyTsHrxixqK9FVYt8wt298hBGswifYy5eNdz7oG5fB",
  "key44": "3iqWknfGcL4freWeAu3CSrPXY2CNTZLTakaRuQaT6b45amGERqMHWZMFqAStQSFmXwYo3TgekWkY7hoHwgQ91cAh",
  "key45": "kHbfG2knCPucQj6tE36FKemVQNP4g98UPdzBPd5kcZN1rSLysyLFfXBcqYe6exiSmdA2jRkgkj3w5tHp2z62pfT",
  "key46": "2dNSzD7VEjV95ctdQ4TqB1jciGHBqigRe9kpcSs41bia4v1UdHuNU1F4wkr4SpUmgABD3PrTnZYRPx8uEurXN8zd",
  "key47": "2auu6op7kKRe1rPb1ioRACqqEnXMvf41JKqurpvTRsJeZFLQb7MZPTVMggNt4BAdNwDazktiKZJBG3TycZrtoiDe",
  "key48": "3bKRMUutjRVYzkmRaZFyqWho1AD9V8UfMZ9JMP3VZQAeGF1FppdiGZ1KyH2QyKpBBBH2Ezj6wmZxdcqeArPJmGK5"
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
