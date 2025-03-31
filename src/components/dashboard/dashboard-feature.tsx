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
    "3ECN5R1LNpZFvJxhhJHy3hUWBVbGc3P7LG3dWomRmAtJgX1g9FtVmKPxCNLYAQ2tMnbNB4YqRyizUyNXnzXVuxoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wN8XpT2brp1fvCpYwkN4doyHtTVRggzTGGtCfe9jhx4iikiLaSfPx2LKqzENGaB7xjGTTnzvTVb95cqcdeUUTm",
  "key1": "4sSZLSfmuHSgoJFWCYM5ydbXiWM5MSiyuWM1iLpW1HKntPSM8X3th92fDBoy7Fyv89fwMGwL2eYRZWxFep1ZMgbR",
  "key2": "5p5aosQVdez5EyqY45dy7uK6Mp5FkiotPNhZpxmPeyhZxTA3dzSzi8fmR5AoyCWipT7R8tCc3UKZfnU8WpKi7XUc",
  "key3": "4PJmN3gubf2yZhNyohc3Q9P6t9upvTUqhhSc4SKbXyqod1ZhLEyht6Kc8KhZ3dKVjXkyraEjxVApTpUbgtGRymZH",
  "key4": "XFzwwkBDn1yPQzX9aEkeQY1ss6F2Pw91r36M57N4MJy4xCUWXoxg7sQaxpwPw24BYedPwy7zPhmedZ8K1cyUVWX",
  "key5": "5qe3wX617cTXnXzLbg3nj6ai7oGsJ9KtewcCbFAZkDyTkMfRAyBbgJL9NWd9HCY6XABbtqtVkT6vcsUtmEEHdedd",
  "key6": "3a5BtEZu25pKbiTrLpumdc5EEbxprqjCWeSziJJSjkeJfV4pZFm1e5JSgxYd2RM25YpxepM6DsA4Tyau8z3Bdh4S",
  "key7": "x6syXdTXWJxV6mRYNf9RQ85anU3xVXd33E5SKhn54To1fHwANb92SGt7rEZR8XGQGqcJ6tfrbFfcsRCGmi9SHtE",
  "key8": "ACtRqhqTUTkUFNBtMhixMjU4gX6i8Nxf2B4b24g2FKQ8ivYWfjYAirKp5VWbV7ydFzEZoMEx9yqLrpJ3KWhKmPi",
  "key9": "4HRtYDipB968RGX4oq9nZ1aiysxyK7iZy3LxrT7YEWV1m9CVLMaxxnw1GeotLtfQ7sxFJHDHJxAGxrzar2UHFGNQ",
  "key10": "4EAKVj2nuY2emHc2r8LkU3YV7j2aQmQYQmgEHmG9QLCTu3McLheiJAfWVztzxC6tHurnJT7M8L2NfikmYvMkewZX",
  "key11": "26puBf7X8At1h5ihjRj3q8bgsC6J1YpxrGGpKBZzSi1VnEYv4WJzpc5o5DAQnRG3GVfjNgQdkEg4e1HBhT61JAcb",
  "key12": "5NzSC9AfYmENFmsVuNpUwAPLZM8WaCdpDN6nEEdRyZkxRHQNZsDcweLj9xpPjHwmAyVcEDcgCTjaZur7RqigBYhh",
  "key13": "3nNBkrHcXWxsbVPSF67vJfSEJX7ZtSJTcATCA65KaEiAybv8Y8pHeKES5gHAxBCa1EAvDahZ6RB9vRuQbQqVR3P1",
  "key14": "2ZiffNchNjpjCXFmXoJnSHXs3SG5Nc4nR5PVFqfun5Tp8QMRRFQZqPXPp4kyDvBLxS2MT92M28LsEGoWGkdep19C",
  "key15": "3AhS86WwtyPsTJpFtKvWxzcjoHcTUAPV6m8kN5yajkUCqUKD7aEUVvo9XXg7sKD7QMrWu5BUqgCcAbiHh5ioKYZh",
  "key16": "2AZR3gJPb4ABawBaZ2QHxMfBXztwQmJSuxwwhrtouW2GTu6Ze9iwSj2FfLf7Rtwvbbxc2c9Zfir63gRuexz8A2Lc",
  "key17": "5oXav3i3FKLaNQhm5Ejxii8xNMVbwyuBSsM72dYsyenvssCPQ5dRNVitt2RNpcHuRUKGJByiwuVghL5cjxmcpXSu",
  "key18": "2ZNciGZxz1nrVRg58PuDNYxksN8xb2Aj5cvoL9XB91RuUSCG8amVqPtJphQCfeqYzex6BhogMW8JKRe1sd7vRVHX",
  "key19": "kim5UVmnTjJ6gRuDxJx5UTTq8azRzxQU87go2unRzsvSJ1uTdsHquWw29HGAwahue2FaxwUoF6CdBkhFkom3UQv",
  "key20": "3YNpmasYQ3sGfXmAdBRCHdMcKPBjShDD66PTmrPNhgj9NU4gFVrT7bUbR7RVfiGCgVSgYsskXCJB1ZSHZu73rda6",
  "key21": "5BZ69N9gvQdmEkXSBeX5mzVQQ3mK2dFcXGGy4xmPmCyKBLKss7JpFzbjahCJWdpCtakX5YuhK78hzWrKzKYcxQ2S",
  "key22": "2DwJ7jctmGKRmngVXNhyCiqfwsBUXr9sivpnoRdX6ZUEMSUR6RzbV4V97Y2dgKhABzoo9xuiAmrvwt7WW3zxo5Xa",
  "key23": "21h9K2P37QHwTW4KmXjv8sfRaEJuBeuW7ckdMX2R6RtSqtDvvfwQqHbK6rFtekdEPWwog5CLScafa7Ho6YYNZJ4v",
  "key24": "2MMpiwUzuMhR2BhTzNwWYZ5RrmYfGuz4dpir1bVYhGnFBf2AYnSGFBHuPjYUQogWQ8XCgkq9hktsHmxjbscpQeF1",
  "key25": "2KCaekp9hLqiaxKJAU4zZtgLaqqR12drE4txoiPDSrf8rK7pSxkp17DRdoRQUVL3TRvrcJP5FrXbQb8AMxmMbH1f",
  "key26": "2rFZQygwHD888Y8aVv1d4kyQiVeSr75nHamd56RKfoXwzY4y8W4VH7QLX8zkEwrstuLpANSWFqRV44C2k1pt9B3z",
  "key27": "4LuB4xKPR3CBDVHXBK76wHavLeWxFmcGiCSn3rj2sVCUQ7kDNqNHskv4HYpop36RJUC8aMXHbHyQU8P9baGwuwh3",
  "key28": "2bYJ8PXB35aHPYnkzFrWjtxTXLvffX2FqevVFw4kDQc86H57uxii9zBZPydd1J9Cmx4m6wcFszAq6BanfRFABRjL",
  "key29": "33LJD4A9CCq8MCKgCc56wLDBZuPhR5KpoCx5D2c3wzEQnQQKyhgZepGtNji5rMDb34zNqhuzdztDNS3D73HDLnt9",
  "key30": "48CF5kGZ17shYFosskTWaCfTSivvLprf9ZmJpHqBPL3Epcd2Zwg5noP7ADRYRR8tvBgsBKgLf2WA9PNDGjq4ZhQj",
  "key31": "2GL2zLUwqSp6cUppjMGjjpbPeu4EY4U2hL4jw1sLkTy347j3bYyDRmrdMiesDHUN35463v1TVss437DAcpe4QvVD",
  "key32": "3ZMawsf4yT5HboXZ9PAwzqViLZdqtaQaEXT9fpqW1uWLij2mmcMXJxHm17rjnwhhqrqxbzHZd5tdtuQp7PHUbd46",
  "key33": "5yvwjW5dAfZoq72K62v7gJ3fJ3dXBnG3XN6rJkGivy7FVR9Vj1dYSkiHvQppZpurpjEgPoSMjsu2eTpNbWTns234",
  "key34": "hGqPcw75Q5v14yYt4aRGuHx9xJKZHJjJSUg5iuWiRACugtLuvENEUhU8hppHuM6NW2T7vVWvhU5ox6548YzaVsG",
  "key35": "BgR9JHWekiFYgZUfM3FkeWQRPrgdv8YVdbnajEfUhg4XQh5UZgYNFPZ8zhWSmBR1xxLYn3zerVEqWkB9vi4pSdz",
  "key36": "4LSewdCoxbnS5A41EMBrYr36UNvHm2tB8KUbEQPo9uEWvXYYi56oA3Sqwn4E387MwHfBG1ABGEGSiJtZ7eNRr9nM",
  "key37": "3HC9qZtzviXtQMDuHktQhLhx7fjrrQvEuik3njWS7ypcDsrQCfGTytqV5Lyhko7sQw7QZXjyn89gViZga5YWZkHJ",
  "key38": "2Lv8aNrxJAwfgR4i39LCeZugpGN8MaxbWMqqn43GmMPqnTcPb5ufBoj9BEkoH3yjNyhYyfaxLFnyHiQXDdDshpNx",
  "key39": "61hDk8NtWJ1SCTD4tp1zpQy84AzJApyCbZWxV7PfH5RciAiZdXeNQ2Jp1fg5bUbTav64zH27Av6EqzD14ASbyPUe",
  "key40": "3qoYTbPar5C6mfmjbnyZon5Kd5XWpLq3rGFASSqhb49PjHm8pPUbBE8mYnZ8teUNDCAD6NaTYatTqJ6rGKmGbRjU",
  "key41": "4F77tnd9JVFgk4o592isVtoywxV9iuv8M17W9nUQRAkAiiFbGxY47iix1oG6SG5WFzAunRTyYL37HwFY4a5jgtyb",
  "key42": "329GFZtspa7d8C3igngKppHc2xJp8h3ZydzqRJ3UvZs9ozCyogihm2jLUH6B77CrukZSYMGomT5sPdF4DD3bvnnz",
  "key43": "5LHaFHxP9SHoEShKycjRNbfnZfKUNanN17uyJSgJjZ2fx7vmthKRDdBrAZt5UkkJmWaDM5UFgJQUkGaVASZStzNz",
  "key44": "598gC6Jgp7eHbDU7CubmjDH2Bd8RDvjRfdAxiBzfpWwg2zS9Zm9yNkvQBJ4n4ewe2UQw9P68ybhXJdUtXAaKMJm8",
  "key45": "3cZvYT6UrXkhFZpfZLMyZxX7wGXmrDN1WYPWREnxLy1nszZjhrHHm3HdJah7xPWYL8MLZjiRvC7h7AN3XJWwNRLD",
  "key46": "5ND4ZpGgPU6QNHBQK38CdEaJNgdb8hy15w8K13JzVWTbRdLegiV3ZqmFCrYCE7LRM7kf42thZRcmWFedGaZ8PNpS",
  "key47": "EfpfSD4h4MK8NKuTVvzbHYb1BMnFBn8GPWJxzv7WFAarTYZfEB7YypCYtD7jBn43sWg92b6ZbZokb4NWYsW3XGp"
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
