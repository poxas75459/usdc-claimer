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
    "4fSpTqCB36qCsuk9DCmCANBBp7zx1zrzacdqXvqYfxK5pxGcojDNCYeAuyhamu43ABaFvEJfdpaq1P25MTH3g63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvGLpo9w2H87QDF61mKDWytK3b45vDUrSS7hnwNpBi2nWsZUKqRzmEbhNryUm8W6aDLrJo6Gm26jWXLFv8kwFGq",
  "key1": "5Qm4w2zk4pQQrWmXCALnY7HxfyXu62AwbVRQwqxyr7hYASUrd6f6nrKQyc8nqSy5CU7tqK18XqEkH4AeBTKHFw15",
  "key2": "3Yjee6C6jEB9zay4kMGn6ju1jRUTxNZzr4L9WctAVUUEqTC8kRUSXoNDV1V8ZGNzSfpiMW84KZBYh43kbk7RMRdE",
  "key3": "4wKAnZyZSs8vJwk1DhojTRUGwjaQVsSviMLnSz2DkZX167bNCyrAnUYqZHHhatWi9vb72L5QRHx7a39bsmfZCcBi",
  "key4": "286NyDUPPzhZiUzqBeL8TXn1S7jRx7oftdfRD25xAfxKQVSbT4hNDk1koF6c9f8AHxdXnQ1sFs6QEPHT2McJdia3",
  "key5": "5wE1i3kd3gQf6MNBo8QVG8h4ZmM58JBumouAwN7JaeqBhZi7NzpNmHLueUzz8GBkHnrMphNC7L6JSEs7HHwCBQrQ",
  "key6": "4c6L865HN9x39Si4MbY2mKHDQk71SKhZ6txk4EjrnUVqiywwJTjtFkR49ZP9znD2YdTsXi89shbXu1wkNZKP7GFd",
  "key7": "4HppY2VwTQ5hWhMyv2BDGJwEL9EqQu9rpX6NxZr4Tfb9Knv5dPsz4LukP16WTXVKMqgKHvDw7crdrULNKEU84xbR",
  "key8": "2jun8UutJhvoMQVM6DFCFgaTX1TQ2zU12XiNXczM8Mj4VW2rWcMZ6KPoGRjw38Z3KiMQr3EHhcGXzb2mpvqNEdbX",
  "key9": "3JVv9Ap7jJQMQcKcNPSnENT1gLgpRdiosvtUE1isQT6fttvyPReydxvRrh2AxBJiPLfHYhg9D5tv8MduC42ECoWK",
  "key10": "HJvxiFsADP8WmhvwYP2vueWkkmYtcYtDPAm5DzsGMJjnjTi6VpyXQ8RvBLBRwWS9bfqgd91G3JeyoSRHSXeXCfM",
  "key11": "2NMn5t7p5J6a8dEMziQxv9VzTHQPdueRMmcVu7Rc36kXVZPXHkoqFTwgU93wky9XpMyNUko8TzLkiwieAez9yCPD",
  "key12": "2L5WznuxCicCXKguVRncPLbGaJrehg3uErwy9gdGDbJThUdvhJeKbtr98wqcH9cY47tef4rYqUdvE2g8jKjVfkMy",
  "key13": "3hPzEynvRncxT7kZYVEASutznxQCmcE4bpHppNUpaSdMK4P3c47GtwBcufc4gx2gDk5eiFW9trUSnR34zHe1FYk",
  "key14": "33M8UDdzvY5D5G4w3rhUuvN49KeijFmwYHERNurTXUhdpWV7Xj9s7w6fkWhq5DZfckJcKsasnyp2VWoQwWAaiduc",
  "key15": "4ndzQ3hfbwxxmZZLmKpFaSyBhF3jq6LPMEbAfzNH1m61pkq8GYaxsf3K7zb1apxqttq4fgAxZUNbbGnJUT5B7two",
  "key16": "5fg3CVoDCQebaDroskmErcbPV8BgeQCofpRZPX5LrEtPx3PvpkqyjFGFypx2rjbAeAnwUSGXAZNPh9tZoSypMQFk",
  "key17": "3QaP7tTtfUkJENPkTpSLVRtuJHXZPXWLzCJQp9Fwe72kxBduWNCgPrZVoANrFWCH8c4cX4nwT5YWsWpRnBLvP9zf",
  "key18": "3AtTcr9AdcMfh7HADzNbc4ed1UBbN9Cix2MiiYny4T3oeQRTiMPyRbkYLxGLYm12eYAqVTTyUn5zXQXASdXUT7gW",
  "key19": "3pjcyc8C3oG14vU315ETUNM8AZyDnysZqvj1Xq7nWVXn3jUdXrVgHp1jHQr5JgGh7UdkAqxrVYoAtPXUvau7QLHE",
  "key20": "5NY6S9wJoDM1EaV3MJZ28vhLDp7vpH4cwV1Fp5BDwmzBeeNhzxfTfXGJwj3J56WnpsrkY9maakySz7yEUfU7VGNE",
  "key21": "5xfu7YNjCVGShqUBExP91o2Ax982LAa84etC5M4Vin7ZqSQugjddCrdtiCcPbcWZRAKKTC2wE2Lrnz1MPTSW9SSF",
  "key22": "4V8bfpykKuiiPZ6na6MMGpvJs7vAzkiShKmVHsWoPFVc2LKg7QMAtVTDvkwrcUeQi96fBEzDvECmeRBXVrRoXHnk",
  "key23": "4Nq7WFWgc1xcNbKWozBK21ABc5pTBZVWzKdrdErpfDQyJz23pQpFGTuZTGYxS2PnaVjcrDvZpXYSuURbRxTpcgCV",
  "key24": "3v8M1rM7QDdB9QfuQUxHY4yCya8NT56mn4WeZTn6sZd9RDPLWipePXdcTDzzoXV765XmVb2Q71PLqsfQjgoE9Kwn",
  "key25": "3bcd3PGaRe4qRY8snZf4dYvqwWSXqS7L63m6GXCKXh1YJjAqgkMuub15heh6n3dqcKY4oTEkC3BF3PwhqQK8wcuf",
  "key26": "tqVoJr7VaXFfGFmPwcG49kfWkxRxBjUr8Uign5KUJ6J51Gah4dYuyJeodECfZzk1GzReZo93rqSKxkuHy14oZGN",
  "key27": "3Tqhtw9VtYKvHE8fBfNgDEBM5X22n2CJ1viErmUJ5CgxrCYgFtTfUgKr9k3d9xPRi1m1DZwfbBe18GF4DwS927aB",
  "key28": "5brdWLpK13WwJ5yv3icY1R1YuuBTa3WKMLzWnDAwNZRZggou3dchRjUAyA8xYASFDL7f2fpRq55XzLXYMSy13Bh4",
  "key29": "2G8YwbGg8tGnJaJysnAQkkVNSVjAmKQnvYoSuqSPF7qsTQwTBGUGjmHW3rmKhYr9NLDhtwRs6Bf4A79K18pZWH1i",
  "key30": "24ZNv4uwRaUZUsZkPSsTrdK1J3kuL8WGu7ne6wGZQCvuAiJQmtCje76BDB4KbtCXsVjtuaocc3g4sFS7gtk1s3Qb",
  "key31": "46pna55vsiXURzXahVQoW1doJWyRjnWhjPZ3nWru5eeMejyTt1sXc9Ui7JsNocLfYdn9MUyUN5WAiHL2wmhLRsJz",
  "key32": "4VHQMqqZDcAKwepBCi4XgfSUh5QGxYNEGm2zVcpBXTAr27xq46z343mkAVnjTaSUCZRk5BbtTkpKxv8i9kBQHDBM",
  "key33": "3DX2eUgFuBX2r5Re9RRzkveDp1nzTUsj4vgm6WH8YFrTbvLSYwSz54zz42nXepg2N4rSPbBtdTW59CGBKTJV2gnd",
  "key34": "496JyYovrc9kMk8CKhKkZBpHtJavEdb6Jbsyt96Wbh7PuYpiEJzRLa83HvKpd6PMueNyzL3W2DokuGoQMeaoigKt",
  "key35": "fCjrmd84HgVnXPjNFp1JjFBzQW4kUajiEwA1JQUronbuqYWPPCFrT6FJJWkD5URFgfJLKyjF5zMHjDaHmT94RLX",
  "key36": "3X2p1oSpUbbrq5mcg3PUjNQKtMjmtfzmGjsePuAV9XYH1YUdEAa2zgh1aDXUNkyRP2aBFH4dr2WKvAHBWz19G8wc"
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
