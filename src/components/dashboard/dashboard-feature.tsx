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
    "5ekmsRHfugWZfMmbtntYxHxxHX7S5MK3d9FvvfaUWxW5cZp1TCqT3wsgdjZY1EjGtQEo4ATUSqm3TrhRbg9eTVBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgEyNCUrUz4JPaLfcnxVaJv8F9LhdmPrm1LkE9JpgqnBMcyB7TyJdJD5E1EGNrBJwNuK6Zrhjm84XEwamwnYeS9",
  "key1": "2ATvRshGU4824jpSxcv6aXhnJaWUQNzfKYFnDxovnzkdmuK9wcT1UZdLwJ11XYKTZhzXBTwg6YsyNx6BL5cTAbWo",
  "key2": "2Wz8VhNkjwCoxZbS6RH5fXJwCXGyqHciTEsGGorE4mkV8fNy4Y5cYptGDBhsXiHeZW328oAWnC81LefvYw8VLxrF",
  "key3": "4mc4XqgwrQtKGRqRFbaaE2nJDK5r3eR8QKERtcaSSa3z8Yb1U8GbjYb1Rw6csYZJc61fCyj5Y1vwhfxVKGTJ6w7Q",
  "key4": "2WdfK1uhUv22XGxwMtwvUzjpPrTAQLnGtVrEWRrMkASNhVzkpLKjuASSwt1NZ7sVq1crEc56SjRwR62XHC5a3m5d",
  "key5": "3K9FiTb7QHyvzQ8d6BHJ4hm83Xzg4NreMAtrGUcboRVw26orb8UAVXKPKjtikwg59enWQUw6v7aUJJNXhDdiAJ3R",
  "key6": "FyXqXhnQTuUvAN1ML7sRvEG15S9oiY6n5TL5ZeFvL7eZy3AMoEXinss6HmnmFwb7kG47pgPQLk72TJqmCRq4BYW",
  "key7": "65r11BYg6As5gvAhxBWZMatuBRWKsEGFD6mU2ycdVPgT12Jy2gQfEMtKUXbq4vQpTAzJPwX9BqXsQermL2mHaQkW",
  "key8": "51ZpJuGU8gGNQ5EYuCNPwyv8xefaugvZPjpvZcjsSczFs3SkwQ3NarnKWUT9nHMCE6mxeGN2xcJwHM1pdVTm8AHL",
  "key9": "4mmhGGQK9JeShdfnwW5JcvYgXswuwtJ5d9WMjfxQFgP5TPsynWzoULUZMhen9Wu2xcputMqQsPHzitoknBqH6bwA",
  "key10": "5a6VJtuiBphedqTAtaceaG6fumPJuxmuTBGVnJJKKUCSU46V3jZDqRbJWHhFW3ApfQZhpBvXxudYgMeWCJ7mWtkP",
  "key11": "42maqFSbdFsbNcQVkGmz6sF7N2sXVB7uApwSGC7rY7Va9YjAr5S3zzKGGthqSYiBx2nSAEhuXDKzktjzdMyJCjKQ",
  "key12": "2ME78fpNu3veMVJfhjCP7VYDowbEtx5MeuMpUkJ2YUUHw9FPXHDHWjoGgc4kk9LfxSZdR8ydKUR17A8D5bgDDKXN",
  "key13": "3cdy9tvCRYopHVa8dDjcsgBYaiS4M8c13cqPSbu2J9CRHd1Y57VSunpMBAZYAfAR3PMTdQUxAb1F84PEnRvGtp3d",
  "key14": "345dr5u4tmeQjLsoDDazPA5r2fVd8dU7cb62yfAaXD2pMMpWr6jP627T5LFSgbMsKVXTCFBThihRQsmcqkhgrVdT",
  "key15": "65icKWrERAQQt4y1UvdQfKJHvJnVon7M5cXCu2xExAquSE7eFfVjsUCvNqV8raKBvXCZrQsv8frFpPtmyFWDFWQU",
  "key16": "5d1PgukLcP3YTAFJkU5eCjrmLcVcdVrqaknyDqR873LtDMzca3Baq6bfAazpFAhCfVcbLetBg652eBWpxgSm1VV5",
  "key17": "3NHTDhpEGbVzJT7Le3bYhGYVWUhFYswyxQyxpFBRpVkr1Zded5hSyFaq8n9VGiowW1pFoCegG84L7bHec8VQMfN5",
  "key18": "5pRqYaPJbUPJiKhdDfjAcF3yv3DqpiDBYjj7EmVSKW1taFfd9h3mKrCXKAX8jfhRsQMT4x68BE8XXpWcuNxcDsXu",
  "key19": "1ES9yZHtPBYFwPHXsJnznNfCJYHYctS3N8AquLSuMvjM9raNtoCa8gLEx4wwAPFHefyfyNhH1XSvrfsiAMBVb4a",
  "key20": "248MNMST9veGmNJ9fceAzZ8VonRT1Qiqpqe5beezVPhqzrnWJrJW95oj3H6s7Rz7a8TjNiPcCuuzhdLSkeS4xcYn",
  "key21": "5GCaryx2rGMJZd5WewKQvhkfwqoL9DVFmRLgybNiGaoSQcrRWduxvSMxmpzQKtPyeaF4BXN4U6mfvj9D6rWb2v7b",
  "key22": "3xnojAoba5JH2vQyr58NFLU6CtRSdEzqm7UnJLVPgNcJHnkP8jhBygDLPuqWV5cZDvRmd9YfX2FSGgcHy2isoGvq",
  "key23": "5C99UCqSMZnh7Z46ZtEardAo5gmBUBLRqoZoA8ZBZQXcq45nDegpU55HvgMHihMMC3Q51ASUmvLaQMsKCzZ5H7Lv",
  "key24": "3VxVpT9Vdr8vE86E7NajPtPAsZgYVySsnGGikGJqM13e8HrXonXgneBGtzyLimkNv7zKtrRBD87Bo19YEkSikM8D",
  "key25": "2X2Ksh1AUEt6b9Qz2NZXCfHkPJv4t1K312WPjiddYe227mFd1yNBbzeZ3MWKnqGcYYzY1maiu2pE68tw8y6Mi4vE",
  "key26": "26Ztg7n8fsuCg34SjxweskrwzLKh7gCrXe6MRzS6fJBS1mMhWLvx752DkBBgndGerigFvrpzX3YdY8gqA9eXscWw",
  "key27": "4UTMWmeaaWtiHQhYBE6ikbyEx9xuiFmsC3SpYFiqSwL5vj9Y98kr5A6mJPh7y6JAyuu3zGP1tMgDPkWsQRUKHNgP",
  "key28": "4qHV7QaarwbB3vrcpPnavyTiqmkfKZPEbeuZqDSpZsmRFRJt17WL4be76WY8d5tDGAAAmNJw5YfsT2qgaECmKML2",
  "key29": "5mhr2QdSfSy691m88D2mHnogdeicSsKPjpGu5RoarZVSAe36ZRhgMotxejhHqwxBKWvAvuhsHdzF2veehcygptbA",
  "key30": "ubxpJrsQUEcaKSTrK9YSyPjTdvQriVWDxddvDBEbXJe1Re51mZLetgNQraf2zzEXeHuw4d6bXJZvdjUng77U3m9",
  "key31": "2Gb6TXtd4MUYpmDeKMyvES5jG2JHJJZwNvNTDTgz3dTFNU8qq9fipF6eN9JmyzwuBWBg7VmuRu6rHcGcsPfKJ68d",
  "key32": "5TFR2kByCmqEpgZYWwdgExPi6HFKs4DWxw4mtFyCZvYhzUPL7CncQZpFZXgwABdJrP9FE6Wqv77AorjqE4TLfwnT",
  "key33": "3cwxtv9z23yBzfrjmvHKKy6bSdpzT2tt2m1WC7qjAruUZb7qe4RhBpN73saKgMrCy2bDQT7CUpc7ymZCTDmZFeqn",
  "key34": "39r4q9C2DsnFX1ejgjy6vZiiuyVrPXWeKta1rY5NudUumEAUqjTyzDsuCsVNM6A7R4WKgzcSmYofKcN2eQp7Fqke",
  "key35": "36o2QqsMyLeMFps7DBxB4SUDdRfZDhuS2Lp6dZeK27mJaDiqMLRLChsCrqy5SkPRU5C8YUnA7Ayrdz9AQhVXuAY3",
  "key36": "vHVnfpHiZnYCkDMkh89PemAQvmyNHPzLnncBX6JnibYAdy73NevewUGtAJK6CTze2M2kLSYELH6M49u3TTaHEwT",
  "key37": "UjjZHV9RvPuf6htn6GkmAHztfvp4SdRETm3RF5KB9knQwwzuaQMWCZWGqARNBCmV6t8bQLBsU7WBCXw6NsvphZx",
  "key38": "3EuufW4KttMn26DNp8zKDyuhERFRuzDnajn4G5hpZJg7n7LadwevDVbQLGchBdWtTonDjjfmjhXinGQ7UR1PA7NT"
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
