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
    "21L8pga4aufSv7pqhxS6XQ4EnEdSNGeKk5oMBYPwQ9t39f57yeHA6qr254KY3WG9cQhLKkggSUv6qX7dMZwTmTHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6MwBoYaC8jALV7t3XFkVeuewjmimq2w1YPbaPY68RTy79wyvci3NPBr5Y55uPtmejJETXhg6rUSuc3paasLxu3",
  "key1": "2yde5JhE5hNUFmw9DQwcyLPRQvmxgCtGXgGxZ7W5jSMzLC5n1WK4fXuKqXMjknd7q5b4eTR7oYQrWzbR9eYDjoQG",
  "key2": "2dS4e3t1pvJDfSzkya8KRTgxmRpTsD4DoSsUUvtHiKvUarkEFXQsGNkrtF56qrQverQDoMKBjqxkhrjAidQjSXP1",
  "key3": "RsyJzPjPNRovUU3VhiNZScfXhWUZK5LfpriPKa9Lw5WUBXqhm6Qn9srdy5AHbuAkbbhUSHTU4f7j6ZAtbvFvbAt",
  "key4": "3eMCm8bchAp7fyFo8X7WsMocacVjNEhMY8DiLdjyvafRg4EYeUeqvLJQ9HMX5xzWPrQYpscg736SyGk9kcVBuRZK",
  "key5": "bG9VgDJw4umunVwjnmosQcaz6NsVi5td3EDjeFw5zW1YPsNVyT1YaPni5mWsMZJRz7VamyTDZD7oMVvW1QtPyzD",
  "key6": "64yr7gCJSqPnAPekesks5kDBSxfh9nBroSw9BpiE9AkiXGnvCYRZzcp52aYx1b55L6CNhXJGRA1BXtBZ2UhnLUqe",
  "key7": "3umYUD4ti8gCCJCGgDJHjnPM1ox6mFvMJN7jVcPuMSk4KQ6iAp19HibwwtwrFNb8KV6XXaDpZpXYUHpGY6zg9LHm",
  "key8": "5unfz7ccHh71Ko7Lq2vPSxjFXtHAmJQ5Ayii9QXtqWmkGydnN4qZhra4xzpxTvbXpYzJ54f1f2HYobkwQm7G2zzY",
  "key9": "5TZJh3ahhc4eLUMUtPvf7NWX9dMTnRCv43fLDoLECUK7Nebbrs8YceWuSr5NaJCa8jzrD1vw7DL5JcFkNoWe5WLv",
  "key10": "6xx5BTVFmqQe615eNJ6NaShqpQZJoytsHctkr1kNB4dLebUJbzAVyBDUTuYjJcUKYv6LTNTZxhULiNJJXtPvkXd",
  "key11": "4i1FkTsWWtgkqMb14JNFjPDTs9GnY4rSJFn8AvEmwBXxCWSJMZ6egS1zrfiu1KPZdupgZgGpgF58muwwTfSPSt5e",
  "key12": "2NDh8Cb7kJfBLxx6qdruqdtKWvtpEe66LajZ1nLziVW72WNDqyQc69Ft9aox4GH3gwpTu2NEQtPYmb6jc5SZ2Gck",
  "key13": "2AfcCqQRangareFadfvbnmmEm8BiEX9NokLaxvsjexG3H3LMQcTvCYV6kW1sshgRx6pXqczAoU6ux9XnTJ2aoDe2",
  "key14": "CQzCSZKvDcfgq6SxAKsjJ7Cn4QW9igi2RBmujKoWWwLNXxFZXWRBQSxJfSBm2CzLRDfGV66RVQo99soc9NU7xQJ",
  "key15": "8QimdhTDNeMj2HnVDn389MWRskof3fcbM2uCVh8QDEbkrfNV32LbWFVNfdq45purx4hLk6ZNLSEHrjQVGtMMk87",
  "key16": "5xq6avpzHkKCrZNBcPMLn9qKwTebF2GFSwGeb57WMgALmD2nhKkteHbosdkJc8sqibe6NWUGba8oYtDA4hYD3f2P",
  "key17": "6CXgwKdCFdE9vbZbZ1MjiX3yEKQKmF6sdVNVM9ypd5Bp2e1YV5m8FA4rBzN8kEss9Mfq2mL15oE8jWoTockRBqA",
  "key18": "2DhrdbY3FEHh72mmeLb4zCd2j9acjhTnjCbjrkLfW14BNeGW9i7kAXXngW87JU2boDk3obRUJsvxLafnAaNTZXs3",
  "key19": "3RwjGFNdg2vQim9PSqGgaXWrq4e2ATboLUcS6M3t4pSZjyESRxKrG3KEVJ7KVfrfPgR9bk3h1XEBGCS3FypxGKUE",
  "key20": "4FY2kPRPYCEbe6yHM2dgnMsvJjoSUS8x1QnyH9dW57ZMTnzwwL4GYTNHRAmdDy4bZ2AEKvteGmrNf833WZ2tVEE7",
  "key21": "4io6Kdu21A79bvzTcn3oxde5hrKkNbKitoYd7CyQuK3ScdT8wFi7KEkkHRV3BvsZyXRk8Pd2ifdXC3HEfyw9doTX",
  "key22": "313dXdXxpRHrzmyCnUUsKd6kPsZ6MuEGAkpXz5jJy9jvQU4VyecpKVUSWRL6ZcP5xhbja9qAmTbLTwwEBFViQS7x",
  "key23": "2E6qD4fWZgHeJC8EUsVTvUw2iae4hwDDTj6t7wyEDNP6rH1JgZujeLZpojTsaiSYeamKQu5NAycjFvBubJAZvLko",
  "key24": "545kj6p5kjbhYTFp5dVkDsSuz6cLBinNmymGMC9JFzvPdGJw7YMBJUb7eoWe1WpRxspkVmxs2nzkmX8DZPsvCe12",
  "key25": "5aZ57yryaxS9whcRZow5JpTYYY9uxeigXswWY6Y8hFM2vjZdahdMWkmTe45aiMfgqzEQUKHZs5HrV2C7W4UNBacr",
  "key26": "2CgkfMaguVCAcciUfzXD1hiXYpt3pJp196px2FKMJgDBgMwfB8zS2JeR3Sa2sckWZ1zNedR5TTQow3PuJBJtEpF4",
  "key27": "3TC98goUiJPbQajkNAenKaEzXFhW4vUP2KrT9mdLyW5m4oGeKhbgUWbSbg1jngPtyJoevxfiqnh2eSn2WcJkhgjv",
  "key28": "wKGhmuV18nhLhLccNDDXRMsw1tAPDjtCK2GxDmVXvTZ3etkGgJLX4hY3hu5SrcBBo9yc3M6HqBU6ZJRiPcWuJo3",
  "key29": "3fnw6yzeDawSaeeSPJAHQYSXm3yXk12HPbNFu8fX3EK36Gu9C5QUHoof4gaEVjD4agoAVSJEBbXhZgtuC2K2zCgY",
  "key30": "4xsq14zkwsapsQkcJ8oVh77gfGp9qYfgLtnZwmVTKkWyF1C4XcecSEo6SYNhmZZCiMTLmt3ixooSqPfSoZusDNkS",
  "key31": "39ZQvwGEaR2GL5HR5NK43btoUxxzqkXkMhLzxyNFexVYGKqRkhLWhj3cozihzqBPtuwpYHZeoTRqBZdtQpK2F6pR",
  "key32": "4QHfQiX6tdwXj4SUK5SDB7ysGPLPLzdprzREajxzfBdJP2nn9cCwCpiWAEPXkMJ1ZioXU5p4Kem18qmPYtETMxw8",
  "key33": "2DMYyrUYF3ZZdNb7BA7t9JhkZE6K76wY7KjnZm78mDphmSz4Ew2KSkevmKQX8DEfbUQM4rzf8Hi3LnawuYpnM2ae"
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
