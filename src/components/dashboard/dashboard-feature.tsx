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
    "4VaGDaaqyvHRjDpvboX7yZt6ChvCp7TQnLpjB2WKybmVENzvqvpYqMzGZqHvwziJ9Tq8BeZuVezbb7YfQ6HSg7t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xt7j4eUTkhaBKU9No2eXEHhaPVsmnYEfmAnNKKUWQCLDCxEuvVgTfBwYiWfaupvEZ33NiAjqYicVkm18AewxUUq",
  "key1": "3ndV5dMjFkNw6qmNxWfREgRa64E5nDxHQy4pgbtF9PATYRUADEH6LSad2GCLBNxkpru7uSTgq8eebf8BnAC3bgyZ",
  "key2": "3uPJyBwifA1xx7Y1m7L4jVmwDDX97MR9wbdNz1PcmKpzgZS2hfY9HRTFpr6iJrAWsSGUeqnrwyAiNjm1uuy26vbs",
  "key3": "28mszNG5szZGmtoWcCXQqF1PQCQFiUdZnMftro3cY87kKaieMyZp65yrLd1LB76JcXZxMEsvf9UBCy1Ux9suP2Hx",
  "key4": "3wnXCfm8s1NA3pCwcbRBHkHZrRoXDjcXzfx15ajDBPeotXnuECAB1njpifgoCbWTfNUpZN3BnxjpKyEsEWDdcXJ6",
  "key5": "31ioRuFPW95JCqa8nHUjn8AKGEhCcdfDHiBV4wSHFEMbZCDazy2z7rNWpCTJJMcu3WD5kgSUEjRQz1wjJDPzw6qB",
  "key6": "YXPHudU89hQT9yz8NLeyca4JKnBstgwosqqm7DuqnNF983sTiHLLZKbSqkZsxceqoXMnyUYX5xGJWkoT2VmEvfe",
  "key7": "4C6hDBuQwoqUEYL5uveKYopzYt9kBtyGB88T6PLok4uvWZjfWJW2bU5MH6kotQe2AyvGteuys32ZYbbJeA4kHaFp",
  "key8": "4WtJFzBt146SGnpaHLCZzqwTRoA9Sod8bj4YbfLUEARzGUdghNcJFSwGjDL784JfWQ5tUns2hnnS3CoodMCbxahy",
  "key9": "3USJSoWVqYgHQAAmJ16dpKXArL74FQtgmP9S5CZvzhChDYkef1uHGuPbA1auN8zxwAK7bhEdiL7uf1YLVeKYhxJV",
  "key10": "H2S7MVJGvzh6eBtDJLKJ3yBLNA7ULHg3jSoSBZxVhXGDSpvXV2pub6qFLVms7jWJKD1ciuUUsqzbEpRrZrZifip",
  "key11": "fmC2QWjvzuhDKSdES4v8UohKyYQvgSoppCddAoBiGjBfjCmucinqcwLTn4vj1qH5FNX1zedN9o9xUVdduYqfCC8",
  "key12": "2K7FhU3yzfFcBfhWKLEwFVPRRrzdqQ1vwbCMt5PKokNJFw6f8r17FAk6oP8U5sXsMsAJdWEGULm7Zn4h216AJeFR",
  "key13": "2uz3CzuqrNzfv9R2u1Xqw5Za6Mo277j4voyqfEHq2TXd2QFwMWg1KqQJus1ji8EwJeXKrJDFdPZpzuVzv8MsUdrU",
  "key14": "2eKrxDEEPCSdV8V2XmVb6FVgwiFEPsyNiMdkKSuTKtaipvvVGtVDJ1zuAwHvCvh26KwaMxkfygriV6FF8TcrqZBX",
  "key15": "4TzbUSvzfi5gJzeQ5xZ42t4uSH1C3eNDtQBCPTkcJAt47YBzJmyyWm5T2sE5CfBJhSTxbzba1LuJZgyUaZXjigLW",
  "key16": "2KZ13rhqwjm6C8ceZesvTChtxTFYe8dULrVS3JqGnHS447xzD9TcFNE2emFH7C8bzov5i2yreYBt9UKG8P7amJ4g",
  "key17": "4xf93x2EFpBcbrpKheR4mZMU5PCQA3uYMBE7KiNj7u6XvBmDkeTrvzQg95NRz8bkW7zug1XrFcrp396hXq4uhevn",
  "key18": "2hDPSq8HaJT87EmF8azKSP8ozWevoR56SCFbXhTnvGMv68Uxdv4WVvySHJdr89zG93c9uJNnn8GN8nrXTCGBv9w8",
  "key19": "5QgRNfC14xLsGmjZt4u8YriKSpYb8L2XNJghBoNwMqWdLQr7s2VWxeVYkAZK4mEHdyc12Jmim7pnPSWxyLPWhPpn",
  "key20": "3MBkGsXzxWn2uw1BL36dCBvqVsQRQ9kKXbkKhgMuiNE5s9RuRw7SPuyR5UtYQ1zkjLcU5oTP9jzcXRkPQuYzMUbC",
  "key21": "2dfajvyU21dcbPvgjQUkxc8huQrdjW4Kv46UB3X4CUc875b8p82xrT3Z8DHhwKymkr1J45xMkBpZbtN82rjbMFRx",
  "key22": "4Lrnm43Lr1bXjztzWhGzMtJpjRmtxFQj9my7zHtG3QFFeRoJDz8LsW86v7afT5yWxkvvEPs6T3J7487ZMsQ3PWUQ",
  "key23": "6373LoT251HSvNRJ6y7cEsGEGZNRzKcUSomzGiZt57EAqSFjkaCBW5DjEYxEkxgoYGfDQAi6LcNBj7bLx92fDBPE",
  "key24": "62F8N1H6nauZ7vXN4dH2xn3YUPHAWn9cbLEkFe79NKpQwCAgn6J9dv4HsSPSHvAcPsiLqhXgqPBhbXRnDVcUJx9a",
  "key25": "5yKmHMYJHNoagsu9vLq79pjdbdjFbV1oYSZQU1L3mADJbpd1C9PeZpCRGKwUS499qgaXNpDRZeARRE3t5HByJPUJ",
  "key26": "4pbBBqGKe25oy8D63Uss9R1Zmf5ayNJWBEqfQQebRohGsQbqWFhHDq3taxqJiQm7snNWpKmG8A12tfGLQCju78VE",
  "key27": "55akFdB6w8BkTmtCZqGg2APyhUpN4FAhL7foqHMMoUmBTLmMLPZoUV3NwtR3yYhtyCW8MSRgEeE3MNeNKnqyqWhc",
  "key28": "3UkZXvVC675CgtTYBjUqiedCx2QuZoyL6JedTYEgtnq9H61naGniEzLVag7jfpMhjRiEv8JiZvmZWqQ4UtispvQf",
  "key29": "TxEs4EpkbdwW4W5KEi1r5J8frZSrHLusZ9oxttzX2NWoExzkfHEmC2n9rHuV4MAjauiXhKHtMBz9iL7L1A7qJsQ",
  "key30": "3XuTSWnC1tKhUHyhQumJsMvdiicRfaJjwiqhXPg2wvHWq4cvF5RurTPwCJiWCLiioSuwNL7WshSCYEnpvAKxv8Db",
  "key31": "66iRgTKbUkp6NvmGhSCuMJWJrDZNcmRSdMr58E8BxVmdhYPFqEHr8acadHaoBroETiNnUhSzyPd7GwmQXLW9sVdJ",
  "key32": "5EH7qKR7bu3ZRvDNDPn8wxgiF6iEGdVjdHhmC2YEAGcyqT5k95rPCxWWnn5jymZAYmLSdMnTtJDa3DNTeZhj6LvN",
  "key33": "2k8pKtVomqiSuWv2gyPfPwTn8p2fDFE1UZG5Lq7UAJbiicnh8JNKv64271fDYxmUQshin6f9QmbXA849h5ApxJ5K",
  "key34": "4WkUpAvTaEWYCkAUHvSvDNa8LMSpWt8dSq6G1xU1jBrWqaqZ73QpyyM5s4do989F25n7KovtTk8xhB5hKN9RKtLf",
  "key35": "2xhMWFiZhE9LdiPWGqQLEgvHwWaHsXQndX83kF3k8bE8wmCVZu5VqmUWzT2fQcdBar8xcjGibfAcrfETGKgzoXUf",
  "key36": "5ev4T9JAQzx7EACkadkK9tzRm7x8evorh8g9jB4qPVx4Up2JfrcgMTbhsK5JK3GjujBsxYjGXMsCe5upn2MMBEr8",
  "key37": "39A1szu72a4WbTNkdpfQthNHfiibvN5BR6BiP6N9pRgwb8MyvXFcroRCT58KvF4RJ1kKKv1QxGwjkDSj5vhki1LW",
  "key38": "5mw6DPfWYKKSLuC4y3uZNQfKMz6HV95QRcLpFmFEyfBUo87jFqi76gxFP6khoJaUci2Qh8nNhgUskF1k4Rm7DYJT"
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
