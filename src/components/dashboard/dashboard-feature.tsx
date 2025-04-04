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
    "22QgzK5kcUUph9MNFsWYBuvNDLzmbbDAh41L1j36J2cZGJmPSjvZAwCMv7uDt6U39TCvpt4gRpKbnQqSoN9hYTQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygU99kPWj3crseDuENN51JWj6Nrx93rJbZidkhqwgyDm6DFEW1wbhxbxBStaDPpyNydzvApadk1bQETWCLGYHmB",
  "key1": "5Yf2m6NBh6fNDqL65L7Hb5uT28gBqoHFJkMMTSaLTMTHF6NdQyCA4iPiw61qH9Y5eyEfs4JkAMRyYbZXMqDKc1WV",
  "key2": "4rGrkyr4ECFeXFVCNxYTsvedALi5bsMUfUEaxCpSMEdgeiC3GMvdfXKHaw8hE3iVWKWQWpEAyP4j6dDh4DMY66N5",
  "key3": "5JYcQXHaKhzVdgaMRGL5N3EM9rH2Z74AvEkcbA9KU8FEkPbv6jNjXn5d59qjSUynmXXFEVKRJCPTbvVF1ZHPadRY",
  "key4": "5Lv9nPGLATvXRh16aJzDCtmwt56SzYmgQqB1gEgvqhr9cQbosr2BBxwPsEdhhJdvDY8TudzwxTYRdEX1pKL9z1L",
  "key5": "2g8w1bSHiAptTfCS8ZJmNGERvK36MKv57dknvQKvQzZ5bEyBdvpKR8JAvqjk2vdmJExrB9RvfSAccAakjtdcnD9u",
  "key6": "4qLMz9wQK1ZUjQaDqvue8SumAJG7T2YKzGSHXvwbw718HS5CjVg1YS8acKiHP499VjSNxrsvajUT3GE76i7AM6Gd",
  "key7": "5uLM1sdXm9NrPknXL9kfwHFh2MVNBnJQtAEaDw88ErYvTPQFF6vUUmbQyrJk3Dm7393BxeKYxg8oFJSXhvVFRW9s",
  "key8": "5fixQpZZ8xnixt2bVa1KC7JTc5gDiZyVirevsF7VQi9QSCndkEBAdwbxEPTEMyiWnrkDPiEQhyXrRFVGPDHo54X3",
  "key9": "4CGKGYyUgESU9jDoBeFJxbeshoNSqAuVYW3eWA2URaDkRQXPPhs7iGUeBUt2Qi2mDz1tXU9K5q4oSVrYzx4LaYzh",
  "key10": "NyKaEQHFAz4zSiqgfmYU1m5uAevoBbVgrErU7jkwRg65Tn1xguUq9xp7wtxYHYKtFZ8oSd7HitnwxZDWAQjEN2k",
  "key11": "5mQTQcqoZALC9ix6LuNoqKa2XYdA1qYm7nK1e6kfm5fGMVhL6h3vXBD5wQLBbFLvSq1wVNkx2dc5Hcgm9Q8NfWEN",
  "key12": "5ZsvBjfVnTMvoRrsyPMXvzinMJcMJZZhnzZvuQFrEMRVkzG9UchsCBLAxpQCSWC444x3zvEeM2e7guTCqR2AXq9w",
  "key13": "teXK5HcUCL2YuKQexKsk4djJipQEh2oyXfe9XV9KrsDMcAvWuD8hFcip2iuUWYKMK1Rak3ghM76VBrWyFhv4rkz",
  "key14": "4yie51L6e8E5xV9rN5VtA6whgVdnd8XKzg4uG7uwZgvN6tS6D5ZxzeeiBskhbrbdrjKtswrb3yQKJBNHZkctqbh1",
  "key15": "3L5X3aYEMuGiKPvcMvF6PYBpR9XBuoz2hjxvXgiR1S2uJZZn758LHFQC48chLvd36RLPC3z3woZM56iDCGnhztaS",
  "key16": "611SzR3Uja6u49i3x5v8Kcp1w8Myx7ZxZn7VLUWJPxmfHsjCidcDEGJLgy8ReZ53UeL7npWT3x18uig7Q7m2nQCg",
  "key17": "45GjtfduujLqVKaMksCpw2f8cj9QT5Yh6kt8BM21uLC51jBtJ8HdBpW86Fz34VyzQedUHYHGgrEJFWfBfkpbCY9H",
  "key18": "3c6Hp3SM1pQNRvUwf2ZhF2xTTZVbGz2ui1xeP2SEfo1vodQzcKrM7BW9SRY4ti2WDCpda6ANvLPc9rXywESSM8N8",
  "key19": "3wCZrzKv4omHF1NVoRvyDrAWprRiT36YPvhW7hpQtWiLwiCcsu1wsar3C5UJEPZsQrVLphrUqgSHNdqNpQgQFgUr",
  "key20": "4NQLARM1pmd99W1qmNaWjZGpVV8wScP1c7nFtrTfiV3cKd5TtaQFq4vYE2H7pxA21r7ukbBVzUud1kLubsKSAuM4",
  "key21": "Dci9hyDnpCq6oR5Fo9HVe7scmfC9m2nRUfyBRx6oSmM5XTWCy4ADedwiyrBCfe5ui6TVsB77HaYC9aM6eZuRSbS",
  "key22": "3etDX88ziRP1YWbiJx6G77WJsHXyEVXHuvfXeSDSReyBdmrCk9HGE4YNtgQwUHnVkeR9RuNjMcHEyY2ckysWYfm8",
  "key23": "yJ1JHcExtg5hPdSSB423DXCibnjyjXjR1xSj5xsGREDxrVABU93j4t5Uo7YWCrUsy2wc6qvQ87HBpd22X9LnoNd",
  "key24": "5VaxeMDSotvDSXSPAmcPAkkjMsLiXEmXYnZvvkFtz762kjaFGHm1ubqdmPUFvMLEoFyt6CMdC5xeML2h3JY3dGX4",
  "key25": "41DUBfQCXmqGZWJsqSgNy4bagEUKir5aEfudZFfu3Dw63K4HiEJKQMadbuM5mjx3LP83SCVpY8SaVTkqDfTddCXv",
  "key26": "2DYktF91uVE7XQhQCgQBJaCb5CZ3JcAwHAgbW46mQwuWSynU8k7su95gzEwGjGGzmz4GmMAAfCuQsDXC55eAX5aH",
  "key27": "548yqW3ineVvjE9zYtazPb9t7RN6DgbhuLhMPV32rW44LGappTCnrbpVPRaBevdFwSEfQ7juop1TaJPnQaodLkFS",
  "key28": "MwtMnEN5ggGVdpCetpF8Bhee8wsLCuJXN5ir1uBmrq7bFGkRG578dhW3nAqBHkoesvkmvEQ9sMqo3p729r6GcXS",
  "key29": "2K7XE2JsLyM1rBLgjTk678YKhYyL9z9URE6vrVK3qEMQqX3b2Hj1pgrt19XvQaXaWpGHJSNfALaCmohFv1eJXEnf",
  "key30": "4p73Dofg5FxgJBc4dHwEiDgUdwGkZp2HJt8Zy9gJtknrZ4Qk3Qtz9MTrEA5YC2btWPb3fqLdeKFL7QPQYKTu4W5y",
  "key31": "2XAvojeMtJuQnSJnq3ruKgNA93jcGTbbe7QetXUtuz82cqSNiZPNLgg9VNSpY1hEKr6CftchaquLdXaJdJi44T7e",
  "key32": "4agoxy3uvP9EvGTNymjDk3FTWau5WLaKN8CK2tAPbH19D3jMhuPrevHqTwaQcZWqbPAfVGTGWHizEMNy3NmfcEqG",
  "key33": "2FnQF84qv4rxyKtHDMqLdcqm1kTsTiqyAQ2jQWTmMjDNhqmQH8GUxYYH15MYGkdiffAgumSLH9bx5eGF5T7RZVgu",
  "key34": "67j4ncBN6vHq5hqVmRT7enXN4AmHoQ3UjGhRX89aVnDgtGp5MsbDcbGGWHxBYFaNjnea1gauYMM7LDFEyuJoowLT",
  "key35": "2BNWzjyiFgfYkWcKiQ8hw7KQTdWTvQCX4g6BuitwE3jbami6d3cmnj3jmFdzUrs26TPxzWnYXwgoJJ9vfuuRwdV5",
  "key36": "4wJqzxUexDTgj8PvJcYtc7qepBn7cHzu4XiqKWwyktEtmWdiUZsM3jYCRu6uNSacLERT7ugwY1ej1WdXrTfJBsXk",
  "key37": "3ihP92qpsw9R1hKZiD9LCef4rBE7ukbvu3ZPpNj5fnrb3Spqcbp8zFxLg9rFAQmYUpgUc9t2ChpQL5XyZQYjpjKQ",
  "key38": "smJPMvq1eUzThxmTzQqVLDWvTLXT6JnW5rNa7k24gZr1AKBuWMR7uYXGYbGK8cky59CBkm1boaAghrkCAtNhwjC",
  "key39": "52eE9cx1hhYTbPHTjzWwEZAU1HCT8qMYxyJyf12t3F2Yo5hch1dD26KmeDwG8jWgtcrUbi5H7H3XunHqLF1j9h3f",
  "key40": "4MHmV87kVu4JeCg7Y7UxHW1pcsPiqjJn5u1z52NG8PgYDp9X4eM8XpbPwWw3f6d5U82m9sApJYpGWC3U2b2JBnhz",
  "key41": "2uLu6taHr43Fa5ndqHgebbX6tBBhFupgJYLHUwERBJabDC2cvUZjVs5zJ74LqkCP6xaDNTvRT6buySsQnYS6WUXp",
  "key42": "3yiHtb4meSqsznocdzQqMos3qSAHHah6ctrEahAoozcSq4XvGfoTHL5NBQqmA8Eyn58UkHg858jgKdzjz18asG7w",
  "key43": "2HUdToKuYPBKKffn5zH5FCcwF4p65k1DApxXscSh96NiBT1wHZgzf31q1UUWhwkj9wayL17ecs81GX9pumENYD7c"
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
