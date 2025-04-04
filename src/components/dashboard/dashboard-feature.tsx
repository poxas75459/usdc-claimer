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
    "653NkjycCALYvW9XKkJ8a6JaXC8ixucaJCWt8kGMY2kRiw1ZGzmqWdB8GiV4muX4CbWz69ZpHGXmqFL6yKB25JhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qvjGgFPgrBWByVWrMg2BQ2Zdm7KhvuPiybYdMdB5639fwNqnFGxuxKTNDzv1kxLyo1h8zrJTFQPQWi8EspTRYFV",
  "key1": "35hJPbis3YK6ytQv5uqXzySUDcESJvpqbk2BFWNumUUqVNU8UbJpKressuRGa87ohHJb3jxRsCZmN3aVnMN67kuy",
  "key2": "5xqiMU391gayEJu38TU42ckMqWLsNYQ4gGBAWUHMtWYb9hDqDea7LCM9pd7eTZmrQ2ebU9jP3pq79xyzLZWrwc18",
  "key3": "3igqR6Gnyqe9qUw3MEjTwUmGwQxWoCf7YdW8B69enLNjvsqmxJAv3r9WVJZB9ttiD4sJr5CNPVQ7s9wkBVPYXrF8",
  "key4": "2PFSrXatusgqcSKXkA6enxMBBeGeP9MSartStEHkTngSfTPmPCJZfUqAbCFHEqFhbMRQhRk56YtbAvfWZczVvWYi",
  "key5": "3rTqm7Jt2xWMen9x8nzzi199PL3zHAaaVGXSRe7wBsAMgfd6oN7Y8qs6Zmyh2xZEADiqWegHgTY8JAq9HAwn9g3g",
  "key6": "24s4YUYFd6xE6FqhzPWyT5EGZydLzee33vriLnXbuN6E4xjQemXyzvB1ZnP8HdU2ZnouZba1dEVdxH3RTxjRWAhP",
  "key7": "52QoXdMK9h7CumfhDSnddMhHCuLz99FdQqdW3jTLqQh3n6FpMaDmNnUKDtyrYD1syC5Qyzv7DKF72yrSUdVjUnUi",
  "key8": "62mefz6dpZoueCfPf64axFWsrWTspNt7HrmrKF3E8Brm92v68NuwxaiWKAwZEXjeUcEN42SxPWC2idJ8phGr1sbj",
  "key9": "bodmY9CrDSuDJYCSKBS6ZkqkmUhsvRgYzfBzEva5DfrBegYTX2DFXuSzwjxxyfN5ieK5xRir4RtX3SwFWKuu9Nx",
  "key10": "3oXR2WDw5h5VM9767dcXWRosbhwgJs54T9EDuX8r27scugcyYdNSXZ7vnvG1kbxN6sX9QwHn7c4U4t6x2Dx2UsBH",
  "key11": "5ATqGyhmoSphCWP3D7ZsBcfhW7AX6UX7yBK7amAjot9b3L4o1EPuv6iy1xJ1nKfobq8kC5z125HpZi2jf4BkxexC",
  "key12": "2wrKRgwpNQSn5wzdWx4bLSmjvW61TA2ai7ec2iHrt3Pgkr3FDRcWYdYsGBrUE12zigrjjm8i6XJxuuStoxzxWWXT",
  "key13": "3wj3EnN63WGHq2vYZcsepUftiJNhEXdpqrzwBxHki3fDskVaxW5YE5ifrU5igqMFwWTTfpUrgYVupsfcnvNCxtA",
  "key14": "5MNxcDXjp2rXig5NHJC4XwBCdT7SkkzqZFJuGU9iPWgkE5FiU4SjqB5HRAB4ZwYhbvYkBwhSJXmqKeV4NGVhksKP",
  "key15": "PQU6Wjdsx8z8wY9dAeWuK5uRBRbcKe4sXCmqBitnmZpS5eMgtNF5UrELX8TGgCRanJE1GFrdbjQa8NC6QrHWK6b",
  "key16": "56aouN8WDxqtKJqzbFWavowCnpfaG8Yv11fACqEJrYwyD7QVuWLjeABVpFpYu4tHsZ7PTdugkxztRpQ27a7QFDMV",
  "key17": "5EFDbKTPW6TAhbPHmL8zJdjAZQeRqBPnvqHzGr8cKpRRdQ1BSZCB6qRomA65GjqRgjnLPtFcZTkBQhTn6FME24fi",
  "key18": "55fqhmatQHijV7SXo2uivaoASKCa4L7JmW6JBqEFt2CnRSEF8eVS9pwkeyuyWrooYeCECHPF4Cs4LrpmXsczaj1P",
  "key19": "3xgJkzUeASgS9bkW6Jr7FP8JUCbyHiAS3THikL6Vhyae645rjJA72dvkKQtJMuemwZoL3GxWdG3ZDXcTcastMsKt",
  "key20": "4a6BnnuiP368AAaoPZhbiVzBV5B3v7cUh9ZE6NtkF4tPLWpvnw8fwFiQ7T3agP4L83fADhHS7DtbKqkGiXUEvMBH",
  "key21": "5bMJ7UWdBBaXeu5o2tY1YShdsVQgx9xuA7Wz1nFgrsuxr7aewxMVmVwjJSAhuQBeXfgx6foCFDCXzEou9rvCLLUe",
  "key22": "FAUS3UgBEegQXGs3ZsxsJDRHmN7UaZ9WNbb6wZkUy4aTfAwvH5674eSkud8vSeQCQDtHHv8bYyGQf12ZALVGfMg",
  "key23": "4f8dPnyDRfUJrXsHNThHvVBvo2W5x6M7pjBp2MC3LrU99j4yHfsx6piJ6iuvVeRpDuVbLrvFHQCEGsWTtXRvbdDf",
  "key24": "24gcmRzX2QjGhDwFZSnfXbwkZQdzaVhmh2QGeRpSDbtayYGfnSmfJNFYcLbW81R6ydgYDMPx4w6XRuPUvr2jcY9B",
  "key25": "4Dwrma4f3WtwiqYpRLfAFDi27dDw5kEwmP77Ykbz7GV6ntqaRTWgaSThzseA9VCkoAVEEs9hkjPVwemHddEPA4r3",
  "key26": "55RcVDXoj4eRzUfJPzKUgHWFgFCzFKkvCj7ZM2bGSkLQiArsGwm92xYegskJyDfEHCr9vvTf95RyiNRosFNa5qzP",
  "key27": "3K8ZDugLpf5Pa4F9gELBWmhwY7PbgHLT4yJU8iBF51a3mEjZUZFsDVxUSmcdUjsfxAZ12X191rfWLVpKK8NT64D",
  "key28": "9p5WcGvVZNb1Aetz8Hr4qFSBJAiw2jKte26AhzMqaBNFvXXrLg3LGSc1z5K4xobndjv931yfKPHQxWTodseYFFp",
  "key29": "2VPKWX2hAbmczJ7cPtzpdCwcpetNHmCmy5i6Guk3KEHPmezojg7eEPXMbvugRhRmjopPBq24pG4X6jTwSSB6wcKc",
  "key30": "2rDWpCP2vozzhQQYWw3RTJrjQfzv9rCdjjNuetV4yWREzbhy6u5dYHMgzXmqNw62yV4nmcUJbUYUpiR23aV7tgZR",
  "key31": "5pqaeW5Gwmw5Z1g5A36urQKdHSojAJT5SXseVJNpZChQL5zva3WT8s5QPRwpieg6tft8iS96v41uF8dtQ54eqNjP",
  "key32": "4212qwfS6Ahe234FvvNzvLCD2emVVQeN88757EJM3BqPaq94CwaKBYynbwrFPnJ4GTSqn3BrU2CzrRXjJkkvD547",
  "key33": "4anFw6sKmZgVFz5Riok7TmKZLmtp5GvdraEmqexWtPg1oVF9VLxgxcEaadcLtUdHxUuHcu3BRcfdgqc2fujyYBeF",
  "key34": "UN725UYefeeqsEcVsqiT7DV55HMMsAVwZ7sp7LsTyAYXpdcTcKP5tEDA2Qabi8xdQCYMn217UipHUcf1wYoaMwp",
  "key35": "omDDJvKYsGVaJqeZp1nvSTzhdrCBpot4Cha8k5TfiMVvT5C3qFfKaUEeRNFwNKCT5Lbme6bx4Cschp36xmMjBNY",
  "key36": "Wz5ZfZtCKwYq8MvnXPaGWvUkwHW2SyfSshN56i8RmZfaP71FrJRUDcS3gnJWugFRNx6uABQoEGjZp7PSzJApz2f",
  "key37": "4X2fTU1bFbVjQ3bMyUwYmHhgLr6rWFQExdSvNkTzX2gXoHcs51YhTv2Uyu4W8EaX9NNoA4w1WuVH7YKD5z7UeHGG",
  "key38": "5S5M9bGPgJRLCEErGhfANN6PxEnZoGsMacFx6GEv6UybU3MfAFxhMsKEEjd6S2JCfdcf3CN48NYziobWsEAVaoiZ",
  "key39": "3wMvNvCPWzcRmTiLYSc9zXgX7RELt5kuYwSEjhF3FA1MNTAJsufx3r8anjT1Vm6ZjBeG4MN3hsV5P48RgJwJ5ERS",
  "key40": "ioDdcG63T5cvF9gyqv2DDHY1oTRvoFnyd73vSnbuQoegXRFFqFSbnczMgMRQQXMd9yv7R1gp9LJd8dnJj3boAiD"
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
