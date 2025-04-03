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
    "2tbsMGtTJ1PQw998n7TPg8oxDg9p6WzecV64kyAdxSrUi9oPahwfh4JAvd4E8YQFVZwp8p5oi4gTmefTe7eB2bec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KuHpPkmdvSmdGYbT8dmn6fxMzMGvuCckbF9WTeyihxp9khpngGoh8uKmDGY5SQ17HBKf62Ko3Knbxfva5CNyPCK",
  "key1": "3aTXP96WkoCtDuoro8rZGyRc2xLQ2E3GS8JRnwHwZYg4ELwveBmkhZNLpLr7GftDrsyrAwJuDV2SkaPaQgeSyFVU",
  "key2": "3kxa1nWQN5AukgexEsAHV19CbTQciEN1zeLFAVcB8MLufA5YwbtsbnBAnTBPq6Kkr8HRjhgXUfDYDqzTZxv1PGwK",
  "key3": "3DqGaN7V6CbLz7C5iCZy4GANTism3U125cj1R3qsEEQjpNFKvaADqT4fNTCT7TCiw6bzxeuimYo6gR4rrHZ1UMfb",
  "key4": "3V7vBxy5CHipb74pXiNVjL7amcqnEvryZjdqW6MWGNrKj9vjydMTyVrzuVPErEqMJxXk4trEx7mJHmdWsvSg3x5Y",
  "key5": "4oN3psbNq62HDoUGHhHQk87KykZUSB2wosjkMim8Ls6U82x8ZjRiNBBE7U9YzJhQKiJBcZJjanwtocxM6sX3kwvK",
  "key6": "4USBp44i7zFRcRLaZYdezSf4mo1iYuHCFQvg4Kc7mgDTWYt98jST4prV7nGw5GfkvS3LC8suRptAEqQYCCBe4wTD",
  "key7": "63pURDFR3hTnSBVFEGCb21iUgwfjRrsaNSVDmJM5m3CV96gzonJ9Hf4bCgnwbAvn5gPq27jwpz2z276JwGAnvDam",
  "key8": "4TBz4XyWPCgnpZkV3AQNQkF3BzxYkvBJQv6byXVWiF6euowJLDqR9ALr5QwVdkn5wUJ7J4sEnR5J7jMkVehaySi2",
  "key9": "4p1a1o1REwuczfuQ2Y8bu4qkgkyTt3vTs1k22Jx1HAK1FR2nw6CGauYnGTxR6a1U8og5CHHYWCDswbQfd8TT6zJg",
  "key10": "44BZmGQFi4gRNCDawYjuXdnjkRJVbRSGK9GCsK6WRStP6X7PWj2JGiSBmjdPUTMjkGKkAb3uuDi6xPqETC16j853",
  "key11": "3iuEs8sYK6DwWZQFm2mbtUiVXsyHNbEs2uR8XPLPmTjvu3EYXq4nCaXSbrMzr6CdGJzAq4j1vsoaS53LZJFBz2WE",
  "key12": "Aie7isTFNVTPBxrB8mVkGArzpWHaup3CocMqXRz2qZXNu5igyoxXbU9oJHDUgvaQZqZysBBShckUUboKD6juNMb",
  "key13": "3cTTNXGa1LuaaHv24yUpioqCKJLEZZ4oBpfFwkHsZZK43Mi8nwhpGZejPEtjMAdXieFjaJqGumLZpJtHjdwWCtpR",
  "key14": "5xjikqqFftQwiHgyVQ86V1Jzw8P1cvrc2agrLmDLKEmZMPoycFeJzG1EFkpANy9TUWg1YzHLpQk9YyrfwhueUW6V",
  "key15": "3nut8cwiRcNGzNeLhSRqpub1QgbZJtE3Xv1FMF74vT2Dm3vsRv5q2a6RBDVd4ZaABRJDrsZKJ2FYXDkH8pMk2Ein",
  "key16": "2R5ra4vhmiDpSp4z3jFAWvqPHw1FqHj8WT5WodgCLZttBGaffWinN6KMgqKBRhiv35Xn3N3aroGPjveM8iN72v87",
  "key17": "44H2tZCgwEEK61vcwaXgxRd1tUAzR5YXmtsZeETd2VTx39gtkTtuLNEgoo1wHFWuBniaqvJzF7XNTD1JU5FW13ch",
  "key18": "5L7TRGK4VYevPEg7uCtkkksGNsfmPhET6VoohiyoGng5McoEPtBrZqmDz2hXeU9U7nPuxRLDEaxvHCXEJkiZD94K",
  "key19": "2cNnqumWx6QjMJiArgeLVjct2ah4RjxrpmpsL1vQLsSwFQoaspwXQ3PYkDsY3y18KHKPSo3BzmYswvShHDgtEMfH",
  "key20": "4nxHYERpwDnHyakNL1WxQPAcPzbQ3jxXJYKoaaZ6ps9SsdNGqyrVXro6dku2W7SyZxbPxJbtw1eerDA6aRPK5KCv",
  "key21": "5KE5cXZXUJ1SYNAD1XQ3SxUr7DKxgN2nDiAi3uwchzqhkxAuRpu5cbooVcz4EPG98BGcat3tFLe54WfkZ6BbLv6s",
  "key22": "62uHxGkGWTHhn7eCsnPYy8z3YmXrom9yifPxruQR5r68JwkKocbQwdLtsotwi6mwYSr5YQeB6BRBk3Ro5m1JwDGC",
  "key23": "sXqmMP815DBpWyXCbcKRAdncBhhvHvftDp9LL6bEmLFjQz7j3jUZqB2KZS7erRfjrBKuyBodqJ85kyrNvrhVGXv",
  "key24": "ADJMfiE23QbWSaiv299Sj2etkF7Fdmbx8h4KTt2P7irmT3qUeyC5L2aE5JCY5EgdJqSPh4eW8PjY9D3oohnER2Q",
  "key25": "2n8isifcrejVLxKA2bf9uGZr7wcPGriBwAGRJngKupgzjWDCQa7vngidEwGUFE7iev1XLmv5JXdrnVQzfBnJ8xer",
  "key26": "4vakKiNqD8ZA7FsuBgFrFgH4MPB6RmcpAh2nFqmwcVBjQtfQMp9mCMxnisJMzmWmaYRviEXTAmiiMuY8SsGLY1WR",
  "key27": "5CEGrirSbhttdGo8RukyLBbNkLPx3BYLRFkHqQyY96SRCN5Yktjxt6u9Nj6yDzbPDALUkRbXnoLawHckHP5RYYYb",
  "key28": "3868mQ2iDDSfY5dkvxZN19xvhgwypLJqDXpSNo9BrnmeupEnvrnRLzh1EM9AwfyxwsyjmgjeZMpUzgTS3cimYSjf",
  "key29": "4B9FqgbCFT1zHPhLKQ7Ck9AAxRdtEZFTUbm3CZg9845vMbBFT6vzcn8uv6QdNay9dvGQqdn7oUxhTxX5QqpB5ntr",
  "key30": "5ZZWvKoLTVkkD8otuMKguBDTmpAsKPyL7Bwu76QGiyGj1xT6inkY5DerH6P9crwCcdr2N66rE5UpEM73cfDQzpna"
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
