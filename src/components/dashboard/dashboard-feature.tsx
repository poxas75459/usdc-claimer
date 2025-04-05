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
    "WEAFRmrGB15RuCyd5z3qFZ2F3P4ker5s3BBu5MsjxCBeSSj6U11J6nFYjV1PagXVzYDmZAWtALhAKBn5xzeXq6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjM8S4SFQ3qvcsTi3aCdi3Y11FDZaJBJ6r7c1srMDcH8H5FPbssFfN4k8iAZiu1cgh53aAPMYuXhz9GyXYUN3AM",
  "key1": "56F5m6ZMNxZgA2jU4BrrqsXjj1YfpR69G5Sy1ZspZtKqCsDEWN92cPVT12TfdBL2YfwkKJsW8tteCZyo2DFfd6BD",
  "key2": "5Ktr5KzL8Kks6A79dySvfdYU5h5zeVs3AabiJ1PMw2ftfsF7FnkAvS3Qh1PLw4GuPYj1xqDzdtZwYsaYEQVjwsco",
  "key3": "3FUQZMesXAf8hi8kQTFwpCGkH1kin6zVKPW5XxUbpdyC6XzWdZiqbBkYWmXkTo4URCnoLXAwhruWhKy4czVqCxU7",
  "key4": "KpvtBALMdhzr7gXYTXWJyJaaHAr5QaPX5xFejUy1pAVxTa97LqDje18V3vkxarcYKVKE1kxTUJ16eLhX4XMum3A",
  "key5": "4ChHCCZPU7bEvVYN912Uc9zbbReaejfpALCtzHxDMqJT9ej6Y36dd6sBkN7HGj49qPX5Xk6MEVN57mMXEVqAx7oW",
  "key6": "3vSHZVJJ2wVqUXVGy5iTxqdc8tGK4vJ9Lb1EhPpj7dbrf23WB5gtA2dKyQ7fEqLp6ebJC9XZBDpYee55hVQ3JBtw",
  "key7": "3ZXJZms5dwQjXbwE1hBryHKdRWZP5871RwAY44M5ehgQzqw3JyqGRrhX1MEQmvCAEagigpni1SzeC9cEMNLinWur",
  "key8": "4g2UAqJMYRZkrWZYCzw1NbG6ar7tgaYw6jV39zdfMsayZ75dMHgq92Z8gpC1ZkHRTEptpwjAZPMn33zpUmczL8qx",
  "key9": "TRPWocKtQrxxSupunvcJtytxVkBdG9VkdQuYbJiNGxibjdrnqYMYSwiVjzK1N6jagXeSx8xPx6QVTtSkEwq3u5u",
  "key10": "3cpmiB6eScehAC2kDwr83BJByB5pCBLh9YcisZZDhnxc3TQSQP5FafhMuxUWCoHnxtsGP76Az1aaeHyXkhrg5Fxo",
  "key11": "2Eis9uUBHwtpjuCipStCLk2xHxCuR1p2AAbFuDSmgA2rLBpszHEzy8AdHJDG2abKQa4vUzx42DUVG3kbXnwmSg7a",
  "key12": "gDUdBXHdGU5G3c7u9HH5hW7R4iTFqe7vKP6t8TLZByzd1gRD7Fh7Dr6DuvqJvjY3NpisiCcNs4gM1JNSccCyXmH",
  "key13": "3bwhJmvmeNTFdgQmTq2AyV4kxAp2LpwmSrPfttwYn9BLVCa9gCd3shNTfywFNvRYZFfvmFuaD1N6xHv1emUiWkcN",
  "key14": "YQZTiZNuDWh93RtKHaKK6mBhXCtEiZqdZRTh14upLJVK49SVeqd1KUfh5D6SYiphWzZyGFWJYNtC7GfYo2EznqU",
  "key15": "kN8wfThkctyrnXvGiprBbJn9fwQc5ZWQw85eqVdS45zyQG2bUcW1pUegHcLQ4mxTqu2FeAX5gt86t3ga95Nkmni",
  "key16": "2MqW3ktn2wpyhy1chhoChpVWKTTxKVwvtFrZKzWoV2zJ6bjrAsjJyeAUKSJ5nGejaPhDeWJJXqUruRXxbpCX5Fz1",
  "key17": "2VhXt2hoSpfMERZunb7pFG7JyvJqV8oQAyDn3rkKxwpSpgARykCENNjoKgKKhftTSarsedWEYHf6SJ6MX5XS8xrM",
  "key18": "4EVj7hJmRQbdb6RxN371C6kDoLGhbVs5nizWRXTDusqhLMt2m4BFHTpf2YTc2pYBbXdWaZQL7C3vt5W1jiam6LLu",
  "key19": "3agUjyYsZnBtGC7JfUaXn9jbWQPht1WYP8gUpKeoD4q23NuonaLbSMwp5mFesrznovJTU9DSAryyVtzMF686JjyN",
  "key20": "oEiD96mT5poFu5Nyz14Lfp3M99efNJrCydknXxGiCzCCMKZVNKgPFZNiNuEYprjScPLCdp5p8rYeu2a4Seysni4",
  "key21": "3CWKpdmhfnkdBzc8qBCnar7ia52MDZSNRKc8zyTRc6z5DZ7WA5PfbUNvE9RuBzmNr8gf79niihc1CPYy7yZybui7",
  "key22": "4oLd777jEGMKrhPjLxsv9Y7WsNkAfCB3VykTAhWoggo4RapsMh8tBRtxnuz32ofsi5XcRY9xd9UZRQqa2dAbpoM4",
  "key23": "HdBu8rTBezFN2Mbjcdebh3nWHRK2nmDiCE3rgJ9826CHnc6TKTttnkA7ZSkGynEZwFEH4znSM22gbsDtjE6DhuC",
  "key24": "1eMjT3udbixXaRVbBvc993o2gt7M4TSRsgCcJ5ZmhsCKsjEg1DCpfqDoc8aJEPHVdLgQ6ExTjetMabcpbLNGzNx",
  "key25": "WpXah5mifABuBppd5EwMEbg1NwnLjohNRCHTDSfNf39fAm5FBZ8v2qhy764egTAUxiu7veBS6RrQQrFe5gW53Jw",
  "key26": "2Eya5UCf3LGrv9pbhqEqfMqpzcm1jdrjDdQv6MR3eN267niTGpE5Tm9UrTGtXDZwfP91Lu9eAzYquaET2V2fx7mp",
  "key27": "3o3vybS3N2dYrqrmasX9RvqoLnLzEYRJL8nXVtPTQV7wkGe8AYwVeKGPT9AXM9L5fkU8rKSCgdNVwaWUGBQfVoz6",
  "key28": "5U1HYnMjFRMFjk4frP1KWY5y87R5uEQyj2bm6vdRTgJfGxMAUKcpAgKhxCCjzdaXgJS1PtJANcJV3q1mY8epYE5z",
  "key29": "2672VXpfEpV6gHC6JyD4maKcVFtmETgiNDVor3vi3pjnXFgyt547EiJhf5XZsPdi5a7hCg374YVD1LjoK8YsYXC5",
  "key30": "2c19myXeiznwhNcykxeBeay9pEUkSnK9jworm9V3pEavULYNfGykVpcJMfpKUo2DC3rU98DmTMk7gFKpzQgMhwMA",
  "key31": "xs9QLGGQYD2LTmaKe1cqSTK2VDpqGyx9aDjP7kBaeuYmdEoxLNLcRBN8xhQVbbz2eD8WvKqG6peW6PQMt96YeDp",
  "key32": "4LFzJqzfmvx8eKRoR6fmgM99sSK15n7hzPbXDJPG66WPGBQPuv85qRaYFGLpVVa97N59ezkztsbtuyBkCYCJ1cMn",
  "key33": "3JRCuc9uSPWTt7ZqnBM1Bify5C3Q4KrT8CC4sqWCq6d5YuwcRPh7NzijE9VJUfeJGAWvUQVfBmC1ViDDbUasPDBc"
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
