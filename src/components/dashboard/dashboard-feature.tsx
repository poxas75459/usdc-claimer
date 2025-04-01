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
    "E6RGyqvqceeu5X94DV2D6Nyec73xtgy4n6RW9gxvokFnBk5aNer88R9GpdCXCYbMSeDS8pW4mcAbZuPtAoJYtxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N8Tbt8xtvsfi7GDqUACjKkSSTc3WmxSknAraWSrBF4K9UQHKXiBFiud4TUkfJSydWQDP8A5CweKFDYmBicH4UCq",
  "key1": "4TTcPgWJN31DLeeGtcpvPTCnf65gT2N8XDEaTPA6vfCos4i54oZCjQhu6teq57eruKytL19g8gTuv9sxXKXcbtUE",
  "key2": "66B6vxN1UiaubgrMaKzaCnTozG5Pb2rNZbZyEa7vCor4iRUkF91z4n31ZZgSoGAUqEby9VFXN58u8aGPCM2Lweiw",
  "key3": "3ydsRtxmAbpYp9s4JD1YCRLqRSuajWNV1s72WLfyvyAziFhGLH3PVRtnNTvrj5RVojP47rgrE61VJKhHtaE91AoS",
  "key4": "2KUPEgUtENcvzDByxzKeY6gK27jztv9VRJFedE9pFeRX7UTruS19AtVRYXGrw1HKDE2kpFx7QenXdGetQKu92HwY",
  "key5": "aFxkqJEzkRos5Dv6NhU2WRixs493J6px1NkoNRR9iGv74cT8PC8TmuGK1HZTH7U8Dm9wJK1721fEZ1XgTG7VHdX",
  "key6": "2KFygyTEr2iZy2qFB2F9scq3y9AyJHAgcJAmBYkUtmr7GVx9tPVKdrPPZiEPoAeYocK9NccyGmSt2G9tk2N2W9Pw",
  "key7": "36Jd48PTrHnEPujJnz9R5bBxNsbpab3h8jenV71nwDXiwR6DGRYkZVoqVvwVT3Jfhwk26oN5ACh4xhqfigz9uinQ",
  "key8": "hJ6AYgJk6kjV3eZHgSbaLLvHhCa46TWi9DBWNCXB3wtZFhmr9ce3hX2WsBUaMVg9Ukm662fFS9ba7z24Vw9zmpK",
  "key9": "5VDPbEo2B6hLjR36bhUtr1dLmdJBfi7HRsH8qQsHLXhXzpoaSYXGv9znSUR7QfjcDETWuZUYhiwuX7562mNh5xE1",
  "key10": "3CQ4tsKL36SKhNFpnhkm92nyC4NBzfvonZc3bWfHPT1kasYHvscR8Lnq5QfxqAQKQirGpyTYFqpCDGqRHdV7FRH4",
  "key11": "5HByH3h3BrTd1PvknDKeR3y2sLgF4jYvDVjF2VxFYQ6qQNCq9caKqu7svyxTUzEkdZbQE7UCobKZDvN2Z44VSgs7",
  "key12": "SSLbsmTmyebwJ1RiyNcAgzehyRoGihFGBQGUBQ7gyLF5mkdFymS1rBbTCvsMKEoHfEtc2ncEJLCR2xdPp2hNAAs",
  "key13": "3CYWGFug7F9niBFv4Uy3U1doihxN3mLrRiznAfEZpBtoyUg21A81zcRAbgcsAZXYmT279MYvModq2MTEfWEZthJZ",
  "key14": "2AZTKKTdwJuxwAqZDMtfBmPaWNoa2PVjK597pQCSZguXFtQ5LBSWvKGS6eefYFo4nqcryvpTcXt6U6Jgqktwtjii",
  "key15": "5cTEoPV1uwBerP84k25rkpN54ALy78x4nkwHhJRUMo8Mpr2qQ8xwgdyv6JcgySfoyWRVooRrdeUgDDdL4EvFkiwr",
  "key16": "U1YTwYJVXuGZcAu98J878DVf42sDW2f96kyvdmW14fGQs49XGBRvJKiSphqWbz9aL3SGJLgeb2WaTjM1Q7uP6pn",
  "key17": "2hbA2BVGNTHt1mKNqDjignqQ9p1WS1LepFR6Co7dEs5Q1UTraqnVn7Gobep2FdnT1pLyiZdR8ud4zQLHYDLJZ9iE",
  "key18": "2gwPF8PUxEiPbTTZBdETMdYuqp57qVf6RgLkYhHghqtCghFLQyGLzktRBWinc1C1PQ7PDTW1eAFMD9o17Gr7M39K",
  "key19": "4sUhxrB4AwdxyKvf3A8ZEisZ9ZjBuG7gYe1gBYLRUZkruqwWL5LYFYXoMWrMzsJSt98m8GAarLZyTHqoqGSDbmU1",
  "key20": "27dbpVrU9kn2XSzvs4dPRmor8zJJoAxCUh9JTxB3HK4HkeWMubL8yhBJKfY7dCx2kgGPQubW9KJ933zjCVgBTUsJ",
  "key21": "4JioaxYVK5Wts2pGmhQbqRCi9wxFUgmqnrzv2ioqYCrWmQj69fbCuRPEjKP87hiHa6Pm1PZHiBzmqez9N5CsrFBE",
  "key22": "5L8U7dcU7czQ7ZmwAHTWYSSByoVX4xpyvZoHQ5MJe3gt9Lsk1GY6oL17teivJ5GwsoxUFby7Xxar8sTrKrEV2NKE",
  "key23": "67R87xCTqsKDNftappszb5bPTVF45Efchf48piZQ6c9K1mx8E2zt3CXCniKMzHv6NFf69nD1jjMBSyFhqUaKKMff",
  "key24": "4HffdrDmBnw6Wax5jbNmyH2Xn6rv4riDn2uzyAjvZvUgAZoTmdUJhj4jme8uVXaJotbEjdeEzeDYNoRwNwada4QB",
  "key25": "57aGz2gP6U9oGWscEx5uhoXPi28rTMAFT1Qv1EMEhT5EMsgFEEVBws2yCx1L9DYw43hLmiqFrHSHSQLVR4xBYjL4",
  "key26": "uA7JAjKYpEKXtpCc8Dzer2HkvwrdeaQhu69j3TrBB4zQUbCDXzQBxYZWSnrARNYXFMLNU7Nm7hN4nnTnjdHABdR",
  "key27": "9MhyocXA4TacR8CocLk5oa3wi5o9i6C89A9PiANPu4AUHDkwT7aXhMFFXphqgQePutrMbsB2iXvyQEFqnsisy2N",
  "key28": "5HNCNoWN3A9g5hPPdjppcJDs32VTn7EgW4hKF85hchw3pEVhmN5j7R7dTrKPSaqzDVjaMPzz2DXn1zq2iQ3nQ25C",
  "key29": "2gqgQ2STQWW7Upz41EYEqBxpFDqgowE9dp4s64xZCjascNT3LBQ81VqsBLcPGMqt3zRAvBSZvNwCx3S4XK3t3yrX",
  "key30": "2FD7FApbCvvxC3B5SR59p2z52eqsNA4RMTvxwUgfDSmDDzHZ36LiQq5xoH7PCRtPyrWXNs5fMCKHBtmzRARA8ZcZ",
  "key31": "4N7adW1d2KZYD9nScA7VZbZZ3jU5TWznWUegwMCBuVKYbVoEk59xot6qwu5GQQSJqKqSRQiq4B6yXTLoEbrQFVAU",
  "key32": "4aLvr1EyRn6ZWzET9Q4HACUZ9nBpQT8Gpo7QbGwxXAeKvCWvPNxMnyUK6yzwf4HyMUmw1myrF5Q928mQyjvthpYK",
  "key33": "FM6dNCz91jSz9WdCshKcjf6qHBqXqwVY848cYVScQuHttRtsUS9ktint5KApSorPNDgZy5erQBMisGcdeDhXQLz",
  "key34": "NnAhM3gSz4YPxzcsUAhMzxvez4mjm8TMHnXqbCfiBD2388Zyx32ir1XiX49N4DCQWDS8TrddiCKETz2FQVRFykv",
  "key35": "aQRjzR7WPR9AYsCVN5msE5cdf69mipjJyzRSbeGgmkuuGVFuxFd9okZfgbidcVAc9VerhMShFAtsKP9gxt5No9j",
  "key36": "2f7PA8ck2rMQj8JXfTkbDfay598s89ZY6tUJV5mBeyZiRAf6WukcXPQE3J9d2peEubRQ9r3zWfzRM2vAwnReAfoB",
  "key37": "2fMF5hoS67y1K3yVmf7NWu5JF8q6wa3vwrQ9L8vAmkebJ7E529tDf4C7K3vSzCQe2jmLYS33ZLiM3Cxk3eaSqBpN",
  "key38": "kxkp9kSpmvVjTPJ1vuZJ8mQo9dNxX6PWDy7UKHeoMDxvVpdcftqQEV7dQPxDZ5UKiZb2ys3fuMGuh9YbJrsufa7",
  "key39": "5rq3PCAf4TDMff2N2pYCgqFCDCQhEGhAe3VbqXDBkXjsUdXKq3ZPEN2No1T2uKncPFUaxkAcxFL8QPjZFHZJdpWW"
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
