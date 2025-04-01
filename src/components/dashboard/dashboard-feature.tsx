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
    "5ZGeTcSdF5LVXFztCbSBwZYcGCVs1fTqpyuTrQRe36iSZVRziDCEQxvKQYAYzQSQbW6oQnb9cDArQBwHQ9zrSAeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYi7bAXSBL8d3TykFVYSuxfXzhJV1mxpnHcbJabfwmN6tyYzxYd7hHBuHAcSNQuhejbU9arPxt1de3QgfmqjE7o",
  "key1": "YtfsxXKFDFRjihUNg3cNdBry5HTbUi1kPqbCsmd1ABeMQy8qVFhhnqXMaPVcbdJHYEEVFnvHVns3ep21KQVAALe",
  "key2": "wMCHz48R8xMypoFBeWHRyGWKNts4THwLFNo4v4FtDeagB8NsqEk3phfhN1euP8QV5wtG62MtNzyuLxcYPxzwYrA",
  "key3": "2ooYmFe4VPu47BN71yrraG5MqYCkjMmVXxNrnACthZ4JyyAhN6D8pDs9CsMxDn5pDCYXkUXubx8Sk3ELfmxoRNmn",
  "key4": "2tDurqaTNXCfqyY1cz7nZ1sLANiSdD49S8FXkffyjuppFE9pu1cKwczdttBmpTayPNig9s85h2oohGqjvS83M8pM",
  "key5": "34Vg8LKhuJtoAR6MNdKbGRFCu4MP7cpfWu3KETrxxZaC9pTgeSLyCPZ8imCbH2QkpJ6E4PzkhjT52cHvaGdU31BJ",
  "key6": "3zqrviGAA1dcxQBc4kwJQHVef4TqTfZnQcFnJGxGnF4Fh68CVHg5Xcyx8w2hdJhy5SrLncqyTt4z4hZ1tCz6HTq2",
  "key7": "54oUMTvNjo3SMDdGzrGAdZcEWQ7WuQKQJZJq5LmoBFXCPWY82KquFjp25PT1BxnR8e7WEXj2TcgeyX65WA7CSLBN",
  "key8": "2CjXrYc8xmX3PUJHYigPC6Tn4HwcS5HRWgsKyt14hSDYLxSxLiV6MowwNMmqNgX1F5GR9qnRFXZepTn7CtmPUfgU",
  "key9": "5d8MMsN12NvMeyTaxYoyMdbSWXuw9fiuJ2n21dzTLyv43VV2Vb6YPbfwbemjN8UWgRx7WCpf6iMoXq3a2ftUa7UF",
  "key10": "4EuJcuj8TFZB5nNJXiRjVggheSZ4BrvxKKy7GteELpyF4nTQQFYAjXsRbK78JdnQHfdDqBEBmSnXJeAZC6gudwdn",
  "key11": "4HVqcgLDkFt88yMTktb3X2n5Qa4pLtnxecVHu2DUPn36vhkp5dHk46zRPxnJB2eKsS5woEZaG7tHb17L5APxj1sk",
  "key12": "4wknfjAA47sBDXsMvVKNkWov7M8QLEsFrb72WyPacQFMBHGvU8SQhnzrHLKAdUw363hemWP3hBn5BGUAaCqCUQKN",
  "key13": "4jGmDw29FAyUck6XszUg5WbFcGrmWnks8b89ayYYRzUTewvU4TBaAfHcASxvejDW2gReb29Qd6DnYgZPe75hwA5Z",
  "key14": "5cf1NYvsZyFyAgGtmfBnvJovz1KNVzqKFFjAAQZKuUThMDumD4a83yzcKAP8kTbKVUeX5224GNE8n8PkrLXXKG1J",
  "key15": "4YYecfaqHJzjDBCJx9jR2cuVRUrK9Tyi7ZBEFKBxZDmNwQW9yjPo9mfSb4Ysnkm8cDmzExdGGZ2Gnd1WK4v1uvrP",
  "key16": "S2RfPGwWGnMYMxDnST1Nd18NUydwBW3gjePW5z6x15XRo8hcLKuyAGT7iCdPLKT8JRYo9bXubnHqs5nGCRA1z9U",
  "key17": "3AK6UBhzbPCZmAyoUXjfvoNf9zfxoJxKQsks4SyFGXRx3MHjD8yFWYXzb2fMbJDU1iA2vqDXW99Mqi174TL4Fwzv",
  "key18": "29RKEns7AfiSMLJzEpWpATgd1bnqotfThuM6VDLWTzmCnm15G9GcRzZQEfCQdagcC4RrVsGLAJ5CCg11yLETrz9q",
  "key19": "25o8DTmXcDXWkVsdfyiid5jagq2UWUog2mRwvwdnm5GoBGmdrS1HStnMGRi8mMdxGV3vwnsyUhPHMGf9wPDh9kdq",
  "key20": "h7Y5iZwmFf8CmKw46wwmLyTCtB3KJx9GtXhnidV2T2ArRvLCjBPNxZMhznfy1ho2VuJ6qJ8Q3hRXCzPXPUjyaTh",
  "key21": "rh2q1LFth1Uz1JUR3BQyXBE1bBM1FE8sq9L2pANkWqsfp1EnjDpCmG9BcdQrfF4KC8o4H5U4LADZhVtnPq68LEV",
  "key22": "7gnmBcqehbUUcjdJU6VzZ3o26jCioYwb2VKPvttQkSZ1kAKdFXEphVZ9i42PAYup4bfc7cavK3NCUFyYoohRbzJ",
  "key23": "2oLnpizNmPVKrniGAsNHwZgKKrFAEJ2pnWijPxWKb1ixduTHbo66SHz2NWERMVUeakevTUdnAFDjgf6zWvSN9EDW",
  "key24": "5nKu4Mm7HxwjhcFLWVetTJS4iB8zSstkcRxLLMj6EVY2jrWhvw7hVRikf8HXRfEQ9EPPwBnGSsnEBPzHGDUW35oC",
  "key25": "5ZHdntmPe8nobjPkUiZz8xo59pHhVNzve4gFQ9za5SybgZf4Qijbt8NbSUPDJefePdfdcCZZcgtX4tUgZg3TJhWT",
  "key26": "g3Hz3dMzbBzyc3UKB5bZbWvPVKjoqkZzkP3hSv63Y1H6qAguWtW4P5hghrKZVpuaaNPcagSZKxNymUEPbDgHF7g",
  "key27": "36bM7CXd7STT3WwA2bTRC6K7v5Jw3Cr4eXA3juzmQwZP8FaLbvp2X82qW1AgFeeRbZbvHd2T53Fh37Ke6XkVchZG",
  "key28": "2v8VvC4AjYUbsnhbg9kHtKeewb7mQ1Da7ULmWKi6wtWudnxoAuZqnJqF79ajDSjJakkukfGPpV9YSXaoMKuEZ5ct",
  "key29": "2ttp9SGMJGhWrmvt43tfxZaiiU2rbH6Qu2HUmneTZ8jEypLMHwka5pR4ipiSSUufbMtrvvtDMxhP8AZc73topm52",
  "key30": "3GYJf1rKvC9rgWhX31fshETn89XVjBfx1Qy6FbWE5wJpDcTqQ2aQSj16uiJdTEeNp5Eb7TPZZ6fvSZrxpd1Kb2DZ",
  "key31": "4AHLgR7j2fjwnYWhfznkrSioQMbL3TuPUKvk8QNArWZ59sejDoxXkFfLFJak2NVeRPw95WtpvoxBkRnt7hJs3TEp",
  "key32": "5cW936Rx58NxKWj9ZMNUCLvxg6hFBfN158xKRgv8Q2cYEYvW3c8Up85k65XurVf8oys15UyqsFU5YdrjBvQ2QuDL",
  "key33": "4RrHC3Lz1p2NqjxsxRTwBfB2LxWG6iyJ9hTvcTgD6zd1uYJ7c649ePB15BNP8DTMPk5zGJFpcyhjP7RJoVkhBHAV",
  "key34": "5946J4tmNjnaUsLi5Rz8jDLa6Q8RkvsczhtjXWY2FCfwFtwLq9CqTLus738mduETRhWsw1vHqrrLimsEuLgLjJAA",
  "key35": "2GpyuSn45ZjLBF4cKEUwdWDdUgQsGbZNaRwr4cUX28uUZP9m69derS8AXevKDp8BJkxmK7PsJcPXRDJKM5v33rzP",
  "key36": "3MzrCwx948xBLAg9KpwciUHHfvMiLV65c9mEwAr9QqGeBJAzMdbRSphh9gcxtYE47nLX1WirJPxL6phcUQrhJTJm",
  "key37": "3m1vATFho6UEUxdDCVvYzzRa6Yfabk83bhZWQ6QUoeGt36efhQhePTtwZAM5bnQgfcNSbSB6SMQ5FmwuvvQawbh5",
  "key38": "5CDzxjbonety4pRLxi5shtURxcNss2nA9tVmurBgKT61NBpseip8hWGN1fX22koY4jzXeb5n5LrAJFpP8gBJM48s",
  "key39": "58WqexKVKwXiWcc2WTaNiFfx2EXhfWRZp8TT1vRkhmRfWa2MrutkTnd6o5wYJWbcJ8zL71czwwRZJR7LwEho4iVR",
  "key40": "EtGg8YeEniPNhUv1emggbkQ3NqyZKsTCtUjNBdo8ETZV7wWdjSntwETGK6vw66j4pP9DYXk4u9gTfiX22iy4sQj",
  "key41": "u9kP2Qk3RbT9Ju18U8AkxU4qkN7NPbhWJ11dDwyfL6mXUqabs6WMHSvze4NPRJks68Fb89AsSNKKTiFDUs5ApGN",
  "key42": "HiA2H7BaS4H4JYWqybZUS2KGYXpL4yjazj5wCd6nxLAEGRfL2Lok5HMizHPcR3S8krguYC1SYDJwF63vhFeYaN6",
  "key43": "4zKHn8o9QAzV56qQJDwiepm2wCHpGcmCW9tDhR6hpFknj6idByrjiJFHiKd7FYM6d2FxmdPJCeu7QkkcFjtmQthR",
  "key44": "5Wtu3i6crcXBptgUZJW4LT7TYizGubQFDdRob25rmdMRqjjZj5xFKwR4RmZWqb8FRBcfKqiNEng399dPKe9iv24z",
  "key45": "31mj3XGFZCjkbKvK7jaRfVwG2n2MrKr1NQY5fhQuxTwfxkdyEaMBZQUQKdGjM1J8ZLMXBSesuS7XvaSXseewknG",
  "key46": "qaJ9iQHWHFWp1fy4bQTMLqFfneVuLUTDfTQiwyGi5ELa4bxRMKueJq3GgXVrsHK41EdNeb49uNjZoRK17pXo4Xc",
  "key47": "4DNaQ2pF1w1s2kLXapoCLuNtaGMV4YytYJCpq6iYr9ewQaAZ5yQkNmhUkajVWEyNPPYjHGurC4gCKnSoJzZHPCUn",
  "key48": "2GniPieLqmgs5Eb5aExUgTwwqbv4Y1eFoUTwnwcQPY6outyLJdShXn5Khi1TaTA98c3gvu1gA5pZqy3Wceo8ioM5"
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
