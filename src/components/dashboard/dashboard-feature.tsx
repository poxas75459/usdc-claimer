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
    "uf6ix5FS62B9Yd1wpVQmRWs5ZUxLKYt85EURBHBBfBqgyR1ywzXaF4aCR12bpsE2z13PNcFtJTtSN6xLoSQHdRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtCy8Fo1rcvipphLyTkXtqGqkwAA4YQDABzeBRYdJkNx5P8Sc4vgjKaghtei779Huj2B3vHQK77kyYiSPmcq6DN",
  "key1": "5Um3foazcnYHMPCrnzNMn29YnhnrW8T8yEEC46Wa73X5FYtzRTcZVMRE4zmy9sgWmG8VzQbgZz6XE5mxb2Qx4X1v",
  "key2": "3JFckQ37Y7mZethu4uBisC4SyzLVrnDUiK9zh2yh1PBWcqkap6Y4YnZincX4Cq7M3WfZnte5dxWqETMwu9g18fsA",
  "key3": "3vZyMgFbLhdvjMgR1PkKYH7nSqAWveYiqe9DbWSZyg81heneijduyWUP4rNuGpMaEzbpW7yyo6m5bqGKfevKcmUz",
  "key4": "5SrsH8s7TxG61gCC54TvDP9n1kva5mu9m61okVy2skpG4KdzJyHYnXsBK54iHZU6UPTuZSJjDjA1kBB5r8wFpsH6",
  "key5": "yKMLtPu8nRmP5s46reFSVsZMBFQfR7ptMdvYd8CyDs2cHipQTFejFJfC4sEqJ7EtvYtzv2tv1rphncmhPxs8wF3",
  "key6": "3gNgUcCsEuhDZBMAVXCVbxPQ91DEonkeM5emFp29MA6xE4wDZ27qweDjjwKbzAwYLmoDUiMvjrdNGpRxRWVAmot9",
  "key7": "47fRXJdqVToACYnw19djyyJwk8JzMwAZVMaj9h8im9oBXCBVKe9gEm7xQjJkXqUQWsw4R6Srh2EDEGqQbe7q9igm",
  "key8": "3N8on3ygfSNd4xmqsapthjcHFiS7A8rkidzNFXNje1is65vMmSBZPd4SZotZc9uwtcJmLXargmEy6jnbd122Tdqj",
  "key9": "jSobqqyT6t5LAs3QqDACgqtJu1ZTbgMBrJ3Ntu1NR34FiHzuqxMFtodjoBBc7pn4Vfoew1NA55A4z6gbrYtVo15",
  "key10": "2HPNHpjFZ89XjZMzMMhJCsMsebjy4EURTFCm8qoGgLgbfE9PjvhoxDqBdR84C9W1Sr1KXbJFX2YVpeqxchUbyJte",
  "key11": "5toVoCindMWrHGdG1HVc8MVngqGJ1qEq19kKjHWVeFzQo6oa6T2LtJR749yRewBZj4caUQbuSi7D1Kmt997hAP7T",
  "key12": "ijaUzcWfypew7yrAhL1DWX6KmNKNdQ11LLZ5Nvjm7p6uPBKdvPyWKQgaBzxXZhGeypiJsVx6e6Y6iz6JWqvCn7J",
  "key13": "4qCFecFRDaFS1sp88bZzdd7cBPMqFceLpQPvYweXZhNeWdrLzd7KnDSRyzwmzHBy5bFq8P6u7SwPZ3BQDXRbMcLj",
  "key14": "4CnerZB6h9FjzgeT4r7SxBmNq7GRRxge2sTPSjn7Jshsw3joG2xpGgNiMTD2ssLHQuT6yckVkHbMNXXgCrDmvYkB",
  "key15": "4AunndrwHDz1S7fpuMGodjJBzfgKNvCDeWsrNr14dVf2dBXoP1A6dorBedL6WPaFL99jDxcmha8qnYdoNW1k7rsR",
  "key16": "3qPQUpRkhFSxbAnW9eUjqJ4PoziM9mmEB8ayLmCvNJ86jjy2tQ1tG2mqfCWcxwrUwzAcCmCkZdcEteq9o4F3bJ9e",
  "key17": "5B4Hy5foTWNTjtqZatmwghmTmGwZXi8e5k56A1WEsMLTxYfVAG3SsmssM2xfs1dYYf2uAucT2KP3ZAFfEgqUhyJb",
  "key18": "3RN9N6f2Un2Mn7k2cg5XYp7WSAi3F8wB27JJP1PzS75NA8RL1udn4QrWuiE83FuCjuYqh2bBGKfmYCg4FQBmuBWd",
  "key19": "3RG54znoyCXZaPgkAbLUoMXyY7czca3zY4tg33n1egw4VpSE9XJ25gCeLqUWQJUpgT85eqhNHoWM5HXBpY4WC2ic",
  "key20": "3YetthA9tC73ZtdSvFRJioPX6bS48zdy2BKXSeVngux1eBJrRQ77FjMTPPTiVenWbcASFucXyfRDHTRST1oEEynx",
  "key21": "4iCLqa4jPFWMq3z7nXp95TY9fVU8UtwSEu3zYS3KnYfEu8KQTdfyFaC8JyYwK2aV1t5191UjPVtn6P6sE9BT3NxL",
  "key22": "5c3YDyV1w5LLx376w1yJxEmDgaj9hAJVNdCjVNykhohRdf98ZZBPf6cjmuYDy9Wty4gZPTJbEuehXsGs9CScop8o",
  "key23": "C6uZGX83jynchr9718iGFGNYQmYVdF1pe4pLF4DK2ooYtsNYq9nDsYtCaLqHcw6FXcx5Lx2cBeP5RvVCp9NYggE",
  "key24": "51XvRXJjhUeAi4VvKbvwzYMD9oZ2tcKEUfdWbcehoxZeKKTev1tmmKA3oeo14NYCYsitwAvPYnCKyGsa81xsA5KS",
  "key25": "4nAiRuxZn9UdXfqnUn77kfkKxwZXR521LQupSNJMofXrHStbmc177zvjaaHymasMbqwBHVZaGPzFhGMAw5DQwy3q",
  "key26": "5wnY93rwn2a4TC4Ewx8V8kMMMcvE6J8kArn3s6NpHL1Xv76X5ZhHWY6ebuyUn3VBVoPxeRsRsyFdU7v5pNfFtpz9",
  "key27": "fPbq9eLby3xqBKowefBP9cBiFiUZmx62uxxZmf6EyyifuCJGY3o17Za37crCTR1rmzugdZtBE2kAepPHWtXdzVm",
  "key28": "4YtgUip4uycY2JTDQgX3vKZfzWYCxpmU5S9ZKneMAe1im6a6RKaoKQu4TTmpkB6BL9sLUve1uDggnp7Stf9RmzVC",
  "key29": "64XTukQgACQuXNsZbM2XTDZ9m7cH3Zk9g1ocksdgr6fXrJ8uq749h2hdPymkW84mDF39oYUi5E21wtHfn1r8Ztr2",
  "key30": "3z4S5MuEfKWRHtmk9A5ePKCb3KZrFSrfwWgGLyQdYSs7ENhQ1viEsie5455DRC5yGbAWhCPMevZMVMd4J32HrKVW",
  "key31": "cihuA9pLBKVC1t1USYZZFwGsAkKqCTLkbpSTJ9Paq7dzC97fyrruvZiAY8xe9VroumKFSkH1NkdpqVd1JrSb3C8",
  "key32": "5No3Gi7JjR64dZ2MUki69qa8kSL6iZ36udk9i1wG5ZM18PfhifJ4644gahUqrMimqYuiWQr9wy9wGN4NAKsYZvbu",
  "key33": "2xZTHCubhZpoWJCYiAH2qhBRzCeSy4xRCFhc75jEvmQTbACia65X7TXWj3KJXUNV5pcvzrrpWZvsLDrTSN8X3Cte"
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
