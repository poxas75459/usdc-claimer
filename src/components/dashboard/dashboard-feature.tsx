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
    "2iNu9EeyXq6snmoCCZXYnFTjxGnsStW3RdNamcGpxf6oGt9ueNeHD1mcbdzbwP5Fc9dLeTL17KLPhiBFYZXyaj6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVbwMSJznrsCG5f2WdZ4N6RjPLA9Ma1KcMX1auQpypZAL5dC7PzpyKdZdoCnD24UyrURyiRwGuRwwSSN7GgsNkw",
  "key1": "2uWtZeBv2tYkrjMk9jp2ychWUassGfbr2NjdY4cbGkLLeM7pRNsXGXKpx9v2ZYpFU7BHt6NaCmgJsVzeYJMRuuj1",
  "key2": "5SnNiHiRmakCB51euMFwxTB1QZzyrRJnGJnezUNJafD7oqWzwqoTD7aeH4sB7kpeWCA2mvKWVSyZn5VbT4Spe1HV",
  "key3": "5xUnPJopidbDMYxEZb7S6fQ3FkWYnszepUK9DCpLUHpGCkhqdvwmLdUMK5xU4Ci5ejg888Zih2Z79U8rzKSVgrJc",
  "key4": "8pJDMxYQRYnhC7Eicy6Bh3zEnHKeCSXmwgfF5D6yEoCfoBTFXgBUnuXH9CKbRHq5CDUfdYwShNJCZ9wzbaz7ukF",
  "key5": "34mCzurf2XnAVqEBB9gKUyZafgJPmc776ZxuRuKzDcLBtAX3cjGHysvaEZLqPriFVWzYAbQUr2tCyGJhxvhZGYB1",
  "key6": "bEcDENPe5NV9DvCwTqHhgPSbZwRsSLdbdky3yLy1eqoBtdn5DL1EqSinnLLd9mxvQkfgsfpbEFRhi4iB9uPRJYp",
  "key7": "61EL2DTWQFBF2DMEZGkUtLZ4ZWoXFnrFf37XK8UFnR98geHiW8h96onidh8Rr2ioaSRCHmVaJrdHkUKedLDRfQJG",
  "key8": "59WotcG7o6o4BBHW3weQftJaVgHMK7qJB6n6mxCXvBN77Y3qvDbtnBnYms7ekVMQysb7nLRFMmBuevsf5KcdZKQD",
  "key9": "44H7ADrf71LhyDaAGSn3HwyKjV9SRu4i9NC7TbZEsCjpyCNd92ZKh8gAhvxdM6TsHsJqrotzwTg6viSy3aMSVYyw",
  "key10": "5PDY3eo6w8yPGHQvkAQhUtsAHx8Et1mpwa69RknWTXGa86QcoidhX7WMLAKg9Xaz239PcpLdDRFLQpwWycJTUVp5",
  "key11": "2bhYCWNp1CUUdbhVc2ypBm1JH8ZN59fiC7dCARcpnDj3a1RobcnWZ4nXW5SupkP5W5vX1cbV8QYWQ73Ha2YcjWP6",
  "key12": "wWhZAnUsgSdZd6GGscg8pyhWG3UkXBZdgV3zHvv8nBhJxW45U3iLaxLRriiUDogsZziL1LQ1ZT8PkCqYQuu2cy5",
  "key13": "4eEL2QvSFfe1PBoxeRdzsAnzoeGoNTw4REcfDeYnKqJsRnTxyuqGADvgL87yLdtGpj8uQQbQpPa1uXw42NhYvBBp",
  "key14": "2JSfMHePcaNN3rWLGU88hTZSk7J5WXh7CKUHxy4293pGYbNFDWgS1jpfqBYZZBChm7cdjhEwfZ8D9fp2s59r9SY1",
  "key15": "3QYzAahQCdVbrSrFobAmXCRkD8wrbZLH8L6Xt6isUK4SHGahzn3kTuP13ZusnG7hQbEz72rZq67Sd9eg4pNVYRhM",
  "key16": "4spSoZpsaeToUZMTGzaK1JEFbdnoiqkaEEaAD2zhcJN61meh3arQe5sWGRmyUrW5SRc4oZESgmosiPmuBBZ9GVVA",
  "key17": "5JFDL2LMR69vGcjhhZwfMEiNyFHtSGtiknBMJ5NreoURusX2guTQTAyw5AatP1LL2dmbtqPP6Cv21J9Eg98Lgj6q",
  "key18": "3B9aaUEyiNjPiY2W8NK8fs13vEhD9WrSaRjdHapnACkuJF2CFW84bCpoUbos4ekJuQDDUJG73vBUpdWAoxRxXrBZ",
  "key19": "5WMFkrZCNu9qjTC2xVqwjjtAfQ68GpESUaVfo1KF9AW44rki5Kxp86gsucLD5qBXW9puVwp6wbMLNgq7HYGQEAdW",
  "key20": "5Kz35gzpd4vDRQN2UsXwijagws7AVJLxoDdfWQUdEN7nvcbLxUB24Rtmzfoibc1UWYfDWvmRferDD4qAZbJXtg98",
  "key21": "4WiTSf6eXm86BmUADoXUBfqagDpruJusyPLowPi2op1u4oireBeJJE9f7neHpeBrBRHgT5FFUaaB8LWw9sGFwWsf",
  "key22": "4E7Y6ickdP1DroyNYjF53cqkbvsdnVRMPs65RaQTFTXRSWgDLTq5RwB5cmeRhurqAW5XhYqjbc1BQDmEnaXeQXHC",
  "key23": "tqw245ofWk7kBpjpydn9LkogPURudCRBNX8VAiAqUEhzf6nL8JQ6SWD9Fv9driaFuhDPEMqQNMtJJfzrAEBP9Te",
  "key24": "4bLh3Ui1288Ppq9EU9Gz2Dpq9Jq2bin9fynGY6j3wFNGzVjt3MMu3fCKRbBsffYhEX1zGA1s9opLwx7jLmxmxdzZ",
  "key25": "5AWNRLXzBiwXpzj6VRNZD1NLU4D8HhBAk9iL7gVLBKAno9ctySE6n4uiUFHRxsuhkcEyyj4K5nudmhdsNbnWRVDC",
  "key26": "2cTZAUvn6FJggEsrap7mm1Qg9ifx3hJGVWRJe8uW9VU9Fyk6cfx6MXFvBJZC56rbEiqUixtvgx8YxPTYJJmzScjg",
  "key27": "2r27Cb3MBM12agUUahQTvBNZSPDFc9Gu37zct9Mbs2UX22K2fXsaigQEQM24n7ZY4gDHcPV94vhrbCgFuiC5TqJe",
  "key28": "3sEj7KsNvUjPQfr5gBKMCYxJasfiZsyijLD6f52zc9wC6aY5y77j4BqE5KqtpckT1N3G2RYZ1VAReeecBCHQyK8t",
  "key29": "5ek3G6N4TRrbEHc47ffyfXgfvYx8GNKqPxnhKkmPQzdz54S6LPhJ6FUkScDQJX4dpoB5ykSATo9KBdRaMz8zrfJq",
  "key30": "XexFPFpRkaqMYH5ogZuo2SyCDvLGPLPjt4vvtx4bDogKRiVxwFqVm2TzEtVDhpDRxEoFZZYyiTAocfJidvUJ3AR",
  "key31": "iPAwEPcvwAD4TrpLjLvjKLF75Hkf9FEqUuejzeysjBCKNGNnE5yQ1iQ9PnNcuwpaykbbPUmAqG2n9uwb3ja5WUG",
  "key32": "4nNtqgF8mAs4wVyqVXw4ibzKqX1VyqtAnHWJuZyymZjNVmcMXpCTYL5NQDimH8qtKSNnBQoMpfyZLGhwygR79FHB",
  "key33": "4vQnATvNvpwZNRTnNEvxse67D5uGcyAnJDDy2HuCmRKiFXjsBJuWEjDpQS8BUSdqYRtA7chrYGCJzn4cs4mcc6t3",
  "key34": "2Fhit95VJdcDaaXD8wrWHKNFJssVDrurbSBv2Ywcc6vHRMybYWmVhnFsgEAEqSHPePEsWX9NvzWsaG3c815PSWqg",
  "key35": "3obULA7WHdabgxpzt66X8qQXxL7bv4uSquMMLiuE6mfWNuQfh7XtW14J4EPoqy5i9eXkqmGkYBEyi6Sb3kFWgmwA",
  "key36": "sVEqZK1rmRWfFAX1ZNYJ2Xw4tN8wne7kxnqL1cMB4TMpvDW24dxDsveNdptEGxshnQH9ikvo7rGo8JFJzuSMx9w",
  "key37": "R33PXWNaPFMe8V4HsKS9F16QqWkRLPgUT8Uu5MtrVPeMLhRovV536tRuz2VkrcCuKTWPvK458vNMq4r4rCmB3qR"
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
