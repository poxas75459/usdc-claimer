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
    "UEduYbmHhToFMboiNMcN7udNJmBcRdH6mY1kyfnZJrqqmvXvMkNFxaj8V4KVwhW2WKcxFDyVRhbzqv2wfqPowRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dbC44wWt7M9bMfbp4AQaAz93xihoPqjXzgyt1aNQijJqqVzpbdRKNEARQmep6kt74SAnisvzTLZjE9tTqC4RCE",
  "key1": "2T8fJ9LPeEsuhsEMJb4FsY2hhQfRBrZmX2HDeCPunyM4xg161mSjNRmeQAbRc1en6XekuXb5ev5QhDPbAqjG7eSy",
  "key2": "5UEFeWnNbvcGF3EJTFMK2m3FyuNyEEXvEawH9mxjxgLtUC1zUuRtxt3r85xASLpK9Jcfw4J86cQ1pt1uLFxudb8G",
  "key3": "4156j7rvAiJfh2wbeJa9vXcpQLSPCtMEZ4VgeG1FraDBVDub7uqq68CUHQV3WKGj6f3GeqPSd7yhQXJe89Hg9rhP",
  "key4": "49XVmU9fMP1MV8SBvkXu6M6phemrTQ3fyq1YjzUs8TDeRA4r6DF1hAzTvRQPCh3KNi9nFxFRV3KiJaf1hziX6pqB",
  "key5": "4c7BbDgQVJ9bhAEYDKUNMviQ6fU5QqHU4xMkJV5ffWwfyyEHxMK2m8dZPAVmdkpzWamTYsjHQ7ipRXEVkQLRUKEP",
  "key6": "3NPV9i2t97pzWhatJnxfZX9vwqouRkMG5djMbpn4fm4DEWmQr9iAAo41kTzBLGJsZmhg8qgAbh3KQhHJwWjKiNmN",
  "key7": "S46PxbkgzrERKdv8oVWFb9AptKxUXhs6nKYhZ3YhTcyF6LBsBhGpkJHL44C9FsYQTd9VMsWgTjtioeq7mhCA7mN",
  "key8": "2a1mFxJoenRSH6737ApiUzDpFnNFoBXdKMQkPeixQMFTfMP3iftJyeuYS8wjCh1fxB4MMsHRp96rxNA5mpqBVSwL",
  "key9": "4HjYGFBcg349HN5UWynEpinePYsbaseJyFxxyEG1rEia3tB3sigaTG9TWxLLdZ7azv47kHbexmQaDp5S24o3uCX7",
  "key10": "2cCzYWV46YVqXHrDprsDiYGJW8kZyi7X5c5DrapQBAN892Pdf4UDuC3Xd23mqtzcqXB4t6FPNjWx9nqHZJ3gpmnv",
  "key11": "H8SDA8owwVGCi53yEfeiZyJXgKwV9ijr3kGgF8DR8NTBtZFu5Jh6ZpkZh4QUjQ3g4VNp1Jtopq9ESXWN1MrCqfK",
  "key12": "2c67qH9txRcn57Bdb2NN9oVETBm9mxRV5HE94JSTR4sVrVv3BjUinzsGt7WAuiFaXgUFpKkch2z8QQNXfrNQbcdQ",
  "key13": "ruVZQJnfA71gTFKBnXqRSBsC7QieQuB56ZuJShDt5YAL3NXchpLUXSqtPCbuPGsApJSL3qn8mqpBynVrg3zRqNr",
  "key14": "31kFib9nKTpCRCHPYtXQ61TzLqeo2qYxFQRsKwBiHQFD3UkvHFh78C3xXhkyZZ9CURVUAyLi5YfREuqvambBEdpz",
  "key15": "2wSafqnxYfdwxe1qsedKCi7edYNT4tz3Qa1rbYXPFonNDsLZB4G3UpUS3PQxgLbNr3c8zxYundvx28LmysLixJ3R",
  "key16": "4Wb3vP1zaTnQLCMevVBH56Sf3XYDQacKxb8RqjDTuVcqccsHqXz98e7KJoCg5Yj6RWtsEG2s83Wjvn6yzTxm2p6r",
  "key17": "3yqr59zKoV12fb99Zs562neafeEprGKkWpuRzfgWpJEfzxsEJFJ4RiZXdixe7Rgdx6af7gJjKDjSg1SnWaU3YaQN",
  "key18": "2ri1uqFZxhCqLP4e7TUFtahrpkmxyyfMhYHS56oyjjFrMUYpy4DBY97QRctFq5PvwN5oFeBKymkrHTdwnukGeqGS",
  "key19": "55xrZP3wnQqDBrW6XAodJ4TPXvkXCjaZL9HXQWLv7kFQZ8bUQKQYSKN3DgdUXPAfQbc9zUrqJ9EvdS4yUEiwKXCL",
  "key20": "2MbiaHSnpbZhkX5hmarhuc44ZXsQGmZUjUmXFVC2YUtMsp6NmkeMwh9u6sSKuHNBexYLeSdbC92YmyStN6AuwFwi",
  "key21": "nD1mRWUACLCxyH3BiMiHvRMzrjg7aReyggHWXmiNvdAH5NJoNWRKciHHPJpNndmNEjitsjnEx553wWhk3yZbCMy",
  "key22": "E6AkEyedk5aFDtSGRgPM5G7miybc54XKdyUqbepnXFHeSmKtit8rhJomJyXGXLQ2qjyHudwhemAhHPKGopGo5tp",
  "key23": "B6dYjxhHqLTMTUyZ3Zo47u4mcmT8xFD4L7nAaFyt7rWmXwT1N3WxbVMTGuZ8bkkdm91AHQ3mkZ4Qnmxn453gWB2",
  "key24": "466Liv4pJ65W6ovA5THqD3ycFofrHPREeKPNpyn9MC7cSuinVqJmhs84ys4ij3BoNoPKHBYV2KRnv6xGsU39wjR1",
  "key25": "37Q9QSHD71bgQXtnZCBRLPbYZJ7idfmjhKbGZsFDQhtKmKPNh8huXhbB5TsBVUkunspSHSDAbcJzHWRr4bB52fFT",
  "key26": "3ZLFdu5bYzxKWo6YSLmUE5tEE8tji6uQkCHtRfw24gDjePPEGcT3ayzYozXSMvysE53ecwoAWcAakSuYz69r1qRt",
  "key27": "4uB34UnxtxJryxF3jDANRe8mhvymUVGTuLNjRuSQKCX8qBjyuXEDJBtMh61mvFbbmn2Kk4qP18E5X9NppZ9MLuSZ",
  "key28": "4xkebZk2haBCJDgimtXAoqLrXvc89jMnkAYzg38uA2yYPDNNRhbk6U2Wb8CsVRvygZkd951XWAU9ec75nJMpLycC",
  "key29": "KPf3m8xK2PDjMybHYPmv7CcPhyhtnnjczK2ndBLs329JWK92b5sxMisTeaC5uUEMPiVvzUiA2U3gzCeKoXWvzFX",
  "key30": "3PEZFuLUydc6bnukNoxKyv7JYH1oSbx9jwLEjNUCVmZ5AajtKV5JDq1w2cPC5xzZz7HB3PyR8cFzqQNF68Ncdgvo",
  "key31": "N8eWifLGt8FxioQGjQ854ox673RxThDaGPr1fEErctVV1KeoE5NjHvrnaaKgjcBiy3tRmXpwmYjseu8GL3aU7PW",
  "key32": "eevzjTgKj1Y7sFZ8qcHQLnWVLnLxpN9K8aAENDr84amKo6j4ex1xNj8nCnB34RuzZDR77qi22s34kT4Qtpmwe4M",
  "key33": "2AKx8hHqYhvAMWsJU3EzDG9QusMii1novAQ2Cv3mwTaYEkSTPoxZJSRG2YLfJcANBoHDssheeEiNkizciEyeQBwg",
  "key34": "2q2DT357VP9KhbUae6mMFvVg8TXJsy4XGdY8N2PneNcW4N64qtLyofyqxvJvCGiNg24Bd2YvcvpWEzN7Ca6sWfs6",
  "key35": "4nQnNnt87SZQZFVNniofA6vpqJfsXJM1PKgL4avJD2pAG5znPdVgukArYtqNwZefYxHzPt1LAH7rUV7afNvF4DQp"
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
