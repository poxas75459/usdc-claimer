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
    "2LG8Eo5UvzUYSqSt63iLVdgZUV7D1j8HLpt8CeVtK9t17rekcpW4h7ixHNoYLXqaG1gcmcNsrb1wY28o1cnAfYmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjBXLUzP3K1pWxRmb1LsGRwmdqFXzwkdwUViut5en1AKQDNoB7BhpTFwzcr1aHMXT6nkCtytXa23rQSv5DgE4Vt",
  "key1": "3S3ybUuwSuNoWdRQb9YyZfA8ZWNN2f4tWA3wnm32EjWYjodyubaksFmT3ZgzyxBDLbKPq2YPaCPUqr5NHm3eUaCn",
  "key2": "54eBDiBAetiVkpazwXwVqsRPyuo98hctbpdjkmJ65QKdrNY1GSGUtYQqs4cWyJtsjpYpGXcTjKnP37Pzs1Jqr9Zn",
  "key3": "4n8bLqsX8q7b9jD9ERawnMbMcW3UeBQFk4pmgLh4QsFXM1HTRxb53T5qbbmUqacCceZH1VNu4asQqBoLt4hPnu1F",
  "key4": "2ntmRwPQ6gzMFJW4pjDmgDZuZ2xqANDmvRzmToKjkDqVEbURtuco1pVaUL4nHbRV6xTkiKjryumWFhaUYZTPcizs",
  "key5": "4tpK53SawDHnm2pUsZCGmTX6VkyEbQ6cb2gwTfLNrEitkFPv16aeeoKiWRcqwz6EZ5qFX1Hj43sZT5AkbwMwgU32",
  "key6": "5h9DQNezKabW1Ewrh1o4pSUZfJQictEKQQq4rd2NuVad91vctbzUaJdwGAS4hybcStKThyxJ4PUja5Ar32zrKx5r",
  "key7": "HdMyFp1zwdC5bgMs46mseW6NTp1HikCkKf7dFDNoRgQuZkYxQYxc5qXPbVfC2h5NidpHr43BKyph7L7JM57uKQN",
  "key8": "5gQwBTeBh71WpP2QgRMXUMp5A7ybWnYrVePuDNMEBTSaWkNq799dRWXorMrgSrSqpm4foytpp9bvQ3oFhSoMQo8u",
  "key9": "5xTS6hMjK2C4CRHAuRP3ZMaqpCm4uPsKr4WKwDB6LMkoW583EG3BCBsvRZymRq42jGuzeTU16LnxSqAJCvbTGMm6",
  "key10": "4t2psMV1zQifs3kqnmNaosa8LHLr6hbtFVe7Zxu1GwBV14GZRcBJWm2Z4hNqifTCw4QnLxVM5pqMkmiAmPPxeFNy",
  "key11": "4XCqZcPsMweYXSNKsbKD6E6Sq14m6wNKFKqGwpCV9khsU33sJ75FYj79rQYSEbrdWd8EUNYwNNubMcu8DqxtiFJ5",
  "key12": "43oTk8b2Wh4J13RQk1cwg6gT7gQt7a4wZZWfXjTfEHYE7SVFhjDSxbhNT7UvfFpSQ1iZXXrGxuhRZXBKA4sXKsRT",
  "key13": "3BAAWneJkWTqxcXcvHV5WgbnuxxBgFX5DUzz8EoEjK5t231eop7XEYZnPjoXggc2M6Z9UBgVXF8GycwiSKYVuhgM",
  "key14": "vYJ3awPr11TgfWj2N5ar6xAKkJjsoYsckULAAmmZLRejWPovaXxAp2VfrU7nxjdFReFwV5nMybsqYYJ3nwTfHsr",
  "key15": "4EbkhfjPYwGLdCDvNP1Gj6vTbCtmm5ijq6yVVs97SXgmzyYWt9FREUTh5yDYkxThbJhai9UxmUFN2u4psZnYreNQ",
  "key16": "5mTDtdGzC4Pgqv8FkXDUsw8EPX3bBcwogX7DxK7V5YYri69RoVUSwUo9zEutVABGco8mXViJrMqSb8NXHnjY6khJ",
  "key17": "3JM3HnXCk72GA16mP2xPUansdVsxsgsSZFjY2e29XJ8aBY7oEcXHZ3ym5H1TDh95pRKVSM2faxY7e96whCoeBbZR",
  "key18": "6Bf1k4dUX2eCczwiLZFnoZXrcABk61z3LHtqQiUtYqjLvNSg63FnpkFwNVdu4c5pGNhXB9pQycd176sYRhgu5hz",
  "key19": "ctt2z5yVPtm4cdAoHBVu3eaY2rKwp8SroYuRJXpmKJ8U9BCgiozjQnRzhmEDhq2rkTpzS6Zqe5DdvA2y9wtuWZ1",
  "key20": "5Tai6nhpkhKfUum79Dnv643PtnnjmP1kRNrdFTbopyjirGkVqqBp3Ghw696NimyRW96hhMBjpnyxgQETjnoKsVwN",
  "key21": "2xi3ST8D764cpF8bu1wMaR2i1G7Yoj5gJnR6chfCEN6jKivbvWQzM9tBuMR7L3UY3KwWRMVhAyqjDm3mxE1VMSmN",
  "key22": "QefqjjzJY5DHUs45UtG5XPrFuu12fAgUcCHJVqhXHraFQ2WVT5xSeifG92VrCbJ5MzqUnknKib2DU5bmuf339rh",
  "key23": "3ERbH1aJeF2Gxd9QgUD27T6TQG4Z9qzsUJFxbbgtrKvdbFWVVCycLXgK6JgzVpS83uSVKGTxqRtbzbwfsEG4f2iT",
  "key24": "2MB6ncCcj7T3ZTbPzKSWwZUqZoDu6nmaiiVQc2vVmwWeJ49huJWCBjaYavrKJEXhdXKeaFmFSpQQxdLECnfFnVYc",
  "key25": "5Ez5gCGqPGpqyuaVmtVihkKagde6FfNe3TELKdYR7FEqPDzXTB9hWdZ5wPfaZMD1JRZDfw4cjJWginBZCCmvWhaL",
  "key26": "28eLL4ETfQnakmoYsrnXW1r2H6fJGhgt8ewFThKuzq6jy8iqfNBvGuVjh3JJ54yUtRfyRp2PvDgMs8M7F2uf554w",
  "key27": "TQk5nJwh8Bap6FZiak9ueKX4GkF596pdndapEp5kTo7Y47DKYNGdzqP39t2Jc39mg5uk7uhyAtneskLqiPoATNM",
  "key28": "5hmKqUMxsSMndrKPRaq6jPM63ZENiFaeVzJGx3vYsbaMWU5uU6jVNPjnoXNay6k82qdX4wNQ8mZ9HoPfDvdczCmq",
  "key29": "5rNUVt6bYkxAGV8aRWJDX9zH4AsYqzC8CaTzK3dWzKAs66bHqEp9LehKaAJytPcFDQrL9dAKa4pny2w7VEA1ZDCU",
  "key30": "31SYVoZvRuiTEGMACUqZJ1CKkZgqpmf92WPX4G46MucXNYm5gUw3rW1dyQUKhuBagF2tKTJWLnnPmFSQFZ24PdTJ",
  "key31": "ghbrf2kRTp2ptajvNfDEqCSSMYxMN6q2wYazLoySZJsQhv2uwJxV478ZHiVMpjJbo2JArR3aUux7GwZzVwFZ4HW",
  "key32": "2kwoYMp2dU86w5h4QiWT1cZg3Um68e46rBEvnSy1SihWvXe4JJab2cg8yoQcHtVzELHGDmJYVERuzRfoyDrjRUhY",
  "key33": "2GbU4dzCzCefimzyHwzko31UBi9irtCgVn2SyvAWQjjvnp8JSdsXxcrHTiEwf4HkqG7UAtw39Z62JiKM3GosCGU2",
  "key34": "2KWrz5yLTgA5Lpp9vLGRjNwgPr4omTF3kUeKJDdSAA3g5A75Ls9gjaJBymiWJWMA7TAozBEZT3e1v3xtYPGTAfa1",
  "key35": "ueyr4pMTbuNEgoA1ynijtyZKhEqaf6CPRZX2QyGYmaXK7E3YCDtVt1FpsaZaKMJdqwQ82rFBxuMo3r6qEp1CH43"
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
