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
    "3VX5H4S1HoVnUM1vfuqGLEHszGmYX71ytwZHvRF9CjvaoXHgYj1osGfBjyTBxhVa2VaZmfbYVszc6jDBsr9phCTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddDnafSwMmThgmLHfuFVkVEGDgPWAZUvztmVNfw4s27fxm15PiL417yAU9Ko5s87GjsywSwV3GnPKCuxA7aU9ZT",
  "key1": "5viMwFKBXPW1auf1ZD77xRhN15NKiXHpz3H3GBZ3aJo5sCgwyiqp6p1yfK23LS5pbTTfN22CSDv3YdwRWiXFvXjC",
  "key2": "3P1UcxF4MmSTXjyHJa75wNPQEEa47qnrxGJymWE5knXZszFDSB52pcHdFwCLWB46sR3erzj2XFq3vmGKmtR5erhR",
  "key3": "PButyHW2V8WEVS4DALZ1RPw9DY5kwHkqsxSWSRGxHguZHTKmzPz1gZm6mpGy5t2hdYCKurZGG2TAKZaSeFAb9wA",
  "key4": "4tmmhRcw7ba86naESC5venU7GwRccq3RPmHasLppYLtkfS9GmkhVeBoC9mnQkA866mgcGGWSD2cJNviNHtUE95Vb",
  "key5": "5EfvFbkfizpPNov8dVUeC5Tuu1EEvyMXY9zWdwUpsDTzGZdZP6e4LXEZ6ka7Jc4hiHSTfGG9nKzyeWUhpQstHz5L",
  "key6": "oLHPiyyfGajXJ5RmrYcbJiDDtC4391nperbgGFprHUXLbtTDRawt3feeiJg2ZjjYJY5bJiGnr3BjxCctq9oWF4a",
  "key7": "3jE9sSCgkS1aAvGeoikg7niuo7mZaK7KvSkRXSn5FQNbzqpJN8TgUmzBsn4Zv9ChCpDUsAegSqrkG1KwgH8VShEf",
  "key8": "53j5sfS9346FNSbrkuYQkFtG2XEctSWgfVn8PQhy5GCzfXBAhpweywB9tZ75Cnh66UCMmQuugKgVuyuGmRgqh56f",
  "key9": "5vFe65uEnHTBJNuRX5kCjVghG6kc5ezSB8hcLgSboiBWaLGFVWaepve7xTT3wpUsZTZdoiLxeq5JjitXgub2W6a6",
  "key10": "Hxzby27hN6db6hGtSZ4oQDmHnbT39twfAs3C3Nsir8VwBhot6smX2Bj3UxhggMcRyGL8U6ssCP47trisQxm37wR",
  "key11": "3tsHL94ypvVNwrpGegPWP3n7avxmf1UzcFtERmxUMtDiBFoJGCEasUqsmCKVNp3hNnyct4WKE1BKPFowqoGzXB1B",
  "key12": "5MVXVJ2Lvne5Lwyup5uX9DWJCWkNvu23M4XeVWWaAZ7vnt4zHJRmvQs3DGPHDtXrAmWswL5BJ3CSx6QQaaQn4HVp",
  "key13": "tDsVizLBB4t6kMCLrwneat9k11R33eqg2fZkEfAWtKyGe5kGkBmCqbUpHBmC5AAZHDXk7cPTnxuDhGUyH1f52EN",
  "key14": "2Dh32MGtxjKMc5bern52ZhMJ5bKEQDU56RpBodJM1VbVQhoZR2hZBAJmbq8ZLfSH5j3uZVJV56gphWJWrKWTAgna",
  "key15": "4utQ7r79K18dqSUreQnFQGhajgmddu1TpaTbu3v5vXR8ARTE6gBwAXDy13XRzifQLWPGzT7kDneWwT34oAgZXvD7",
  "key16": "yf8XER2nK6Fd2dSK1zBuGPefgei9QduhPc7umvXan9DHAUqYZR32fT2SUG7p9eRqVKZwU1mujVkxEeqyFcq8UXG",
  "key17": "aZjNZfQrbaXn4qppr99iNsAeVcLuJzeJfU14wiZHUoWF2udFDkxsusDE9KaugrLC9AhFophrLw5dJ643T7EuF67",
  "key18": "nAw5ZAePzgQNnLD4RNFjNsgs89ScVC8AbJZHaPcbdQ6azWqzpnqwXxi7gH4vQSdkHs8UuRr3pSRJGfRpjcXU9SC",
  "key19": "S5nXFb9B1iXrG1r8HKFo8JtzJoLGZiscLCntdVVDtMbz6PaUwgSeBrL7sy5JZHLt8YCBXNdq3prFPHf9u54DRVg",
  "key20": "5P6DZgAYPS8M5miiGFvDia3j1r8XwUZC4xFmuXDpmWp5FvHSgqE23NqQN89b2iywq9Ayw4xwMpHqHfjVXPGycAez",
  "key21": "3SS4xsuLybfFQvyVxyJZQSeDMhDc3NPbfrSpbNrM9ynHjyY3LZ6dLfGh6aj2UWRRGGzSSFwuAMs4vCUFWVHYq1oU",
  "key22": "2JHPDHWdfwx9YtDHCzxmLwyr5hqGPRRu3KsyCRDnGP7SzspVUirEjauGfd2YHKjPD5YNgHfFr68RLy2kUmMP5Stb",
  "key23": "3yVCnmBbDUDc2h5oZHphTWESd5r9ciPVbqL2KXwGABMJY9nM2CHJ4K3sLyekRuDDgjagAZ5kuzKpGStQW4Vz8gaJ",
  "key24": "4AvANG2EDpXxsrJweYKj7ukYynj2My2p2WgVXBjPsaVJm58FmwTUjRJtKfvaC2o4XVUNJV6QHpmZX1ttnCW2arZ8",
  "key25": "3ppsaDHFH1V8eB7ThdZGzvo6pQCFW2N3PTPmQEnqyKt9Scoq1nNS8EtwAmBscvx2Lf9sHWSpp782zPu3nqYsHcGY",
  "key26": "o8pomWFsRWeX74LSbwoYAM8oxhXHgBySESB9G8QjMoYmXCcy4s75pSjzT9YqUmn2gdEiqNdjiJT5UhpJQmaAgpU",
  "key27": "3GYursUivbuXkCb7wz12LHghbFBDE6okBF6B9zCAAaR8JRvcet73zxzBJZ7HUTsheSSzxny5YXsPN4ZpymSRxMSr",
  "key28": "4Di9KXyoz8Pevca24DtXTbe6rczjbetDvC7BKLAKZ8HtUmBRYNfFdYF1SPmXhxECizpn65eiMKMtA9evrdZxZ6J1",
  "key29": "3xDFpe4NBy5Q4JjAvJBxFdHGaHDN6wH2ExSTVRaYJwZXYG5naYMaoFTJSur4venbS3ickUNSfFCsc2VxZVeyRJ2X",
  "key30": "4crNMGsvnQyJhVb56m3gDj2cLd2GDoPRtixMtTRcy3paBKpubwps24Cgwx8Sg5fzrv5upwQHfJomMVkoHmBph8jE",
  "key31": "3nUZoyNSe6g2Cj3oHc5ny7JHZbefLiW7puocV5V66zAufDsVjreoMVtw3gLDbW5ftAxT2q6RR6oxR36P1RWwhZVa",
  "key32": "FMr5RiTxwNXEBaVpHetiizbcjCLgyXxAofeYbZTGQEMUsLfBQdowtpNLp3B2pUaU6D9aF4LqnaMG8nUMVhpXFz1",
  "key33": "57GiobUSHoAQx5XqGeZSFFGX8dUsg26TLzkKextL4ZZkeoRWnpkM67tBe8DtXxzms8ik11miGP6Rease4d8BMG5m",
  "key34": "35RyusLXpNtDUyEppzB6qSspsGo9a8vS8FwX2ByYRfkrzgcSvsu59rYXuNu8Lp8amnsJZhyqhbVe5Ur4HYk5xBG9",
  "key35": "t1nfPGtFf2vztgiALamiXK4Cgm4hFoVaHqhHDRdhfvUWnJLtExGF3SQgdDDC5afaQDun51GhuZ5zhLNbSxfSyp4",
  "key36": "5AEMdZGgXQW9jpAnDXZATRbiawo1YRXxomktoE6hH5HRybN2GBEdvo6zDQxgY8i3BryhYqmZ4NkEaTXwTh2E9SyA",
  "key37": "3Mb12mc6Xj54A4QZDg7JXSPMBCHC5XQnYC4K2fVWo7E8KFDF2ZX5BP5WdrCUf9UgfB1pCYsTiDUqcAwPnRy3aCy1",
  "key38": "2ToS9vGe9m8JJRgzkTYoHiFxwJqvAQaLcKvBGgMtz25h7Y1FTLqwZfyGAKbgBRvNMBPhVyW5andpUSLoshCL15vg",
  "key39": "3s2EPmQj6nH4BpPoKDJbqTY8qMv8hjviTxGEjb3c9RFkQS5yCS8NXo2WitToJLbtyfLWHo6wACs7BwiX8Ch89coC",
  "key40": "4GsLcGmoaMNhP1sYgXjveworwH4zKiu2D7jM1yRLTMr6TGgZvMcrjcfuEjWXrMmnEucYDNdj89ewfXJ39J7px7Ec",
  "key41": "4FKEKCjoaWvScfEWNHQYf81rVN53oGMkopBYVdqKnT53bSJrgkE5dFP4iywWkCdtBGTrKsYGKbhP3Q4rxPXSPoqV",
  "key42": "47SrgkupFvJRhrdSjmbYGsKt3HAR7d5Bs4AmRzht7wirP6ZaXFi6ECnwngrX23rYEnJViA4GS2yCbxWXFvKK8NJ",
  "key43": "2vwCTSjokeTCBczU3gxgpSnddPRpKuqDNXkY9fgFqEJy8sPfDMpjTttQJsXyLtYs5pi9qzCSdMtgg4Q4ukHzqG4V",
  "key44": "4WwAJdq7stc8pojcBtXFpd5VyLZdVGRwtkbzd8JFDKR2YKSw6AP1hZq4VRKDfoBfV5RDSUaZ9Ae8sjzrmtkMYt65"
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
