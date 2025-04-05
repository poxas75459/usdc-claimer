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
    "4Hv4e2YrC4THUh27PeeXNUN4YBUi2SxBbHNwSSeZpC3rAGPhgqqwCsAVWeRoDmoEC7N95NQx9mA7ftzbRs1bQ6nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9SGyf2wbLVJr1v3CDJif7tLPABh9YjJRN5LwjN2Pc2TLyQFnEEjSinfZ5QayKgixE3vGcj2UDjvQLGJSwjQb7y",
  "key1": "3cju15x6AP8uJhKQZWczwwYuUJXSPxLavZWFidEAqv9K5ApFhCZZMp6xWTV6QAMMJ4YyY8UWEts3MAJvKRB5B3Na",
  "key2": "mgWMwiq5yxsebm61pVQPXMrcbLXmLwoSMTua68UZFZowqQKzDRUpPbPvPDsn6bBa1UrFZQsVxXg9ooT251JJcsE",
  "key3": "5XoxNdowf7jc5gbxsD9rrkByjHz1u82WbwCVAyeaNZy8ZJjU7dX5731FVpb4FoJ7YX4NAUfhQJK7KRdt9KVhZJLu",
  "key4": "3exTijTrtmwZfweJXL7GL1BBkNy6gN7eo9eeEAJ5jkjC3NCVDnLtL6mctic8gZiCSTLmm9A5ZXGJJuuA2t749K1i",
  "key5": "4zaqodHUAeqndRZ4JYDwto56mmFpGiiChTU3T99zk8Kq7bLcJwaCauNLJkbp7oxduosS6e57X4THAxRmQUx2LmfP",
  "key6": "44s2LZTQbCgcrTJcuLtcxkxEXRgPpSPHRLUkNn3xptjRyeEtoXmF83Xt2tAUUDEuhXUaiZGQVmTZkjGriQ5368kb",
  "key7": "3kCLqDeyNvi6vs7SQViGRSVzSrLfhYYZeb1DPnByAhdXY1w6tX1LifUz7cu7tugo1ZQQMaLy1G1N25Ze7bZum2Dz",
  "key8": "52bPGfFY5nw1B9BWzzoS4gyQuyjMjPJMXtzo4JRvaGYSn6zrP4oYCZPi72if8PEKxJsogfuV42vhUUFMDZDu8ksQ",
  "key9": "EQ9FYuVtVqY3PQhpqKmikbro4royyuZtdFDoYiCmXN674o8dCcZxnyEgLxM5xVBV1B5sTEzixidtagyLoqBFVe7",
  "key10": "2ZHh2RwekPKAFEonJiV1hnKMRexnYS9Qxafp8u9vpE8Ud9DWMt3FSnBcSJzPSfugGt8LNaeajDQqYUnAKxmZVvCE",
  "key11": "46aNrr9b9YnUi9ymogkhj2PnoAFGbs3pzvmkff4N8xc3aAfeLTjxPo6rSiG2U5qP3jCA7QJjHVbuqLPHJ3G7VEcu",
  "key12": "3dMiy93dFRXkXqjxJs3vRTEnqqh4YtpXY1KJzwnBWatdigpND8SSgWRZZkoHVeyHwpX3VC64eCMyUs9UxKcTHveB",
  "key13": "3hPKoboJJGFY4Kdy8vYtSveGx1qgHBJMR8W89nsgBKfzBtGmqJsjipEHrGgy5rC6gn9uasEdSNvJSCkcuK1v3qJe",
  "key14": "4e7xV15e7rnxBA5AoPARP1YzqjyguSUFK4i6DVWw9449FbUQsVkPzrLnoAKssQLKvGPWR6x8j8LHwpiCDoVWmBZ",
  "key15": "2Y22hAE4Awa2QwMspTVdBm9tfaih6QMzRsZfMomXtZmL3GzvanZvHbBXvQSNVyd2jtn1exKAjJPG6PFJvq878kEj",
  "key16": "5LDG8e6YC7H6d8dE4p8XgDubNgrmvQXfn3xEshvL2EdZ1tPPbEd72CNd3rcz5iTPfymZ2pmydfuc6QQis1yB2DLu",
  "key17": "4keoRkfEiYvAYwi92JzPpmkdyyne4Mrv61YpdeUMuLyCHRRkbBSQewLv6nMmoVUbqSqCWLiusQ3Y5j7YfnWADzur",
  "key18": "mqyx5nUQLZCVtx66DEx2z7UoFmFLFsWtzS1c5ZeApKYDa3apidqD8HbjvZCwrKVk3CyJxVjrWf6sGSwL8cbedAF",
  "key19": "4rvWYx8rZiWzp9LMAhewW6z7stWZPibN82wJ4ihrN3MdqVBECwNY7cBvCgKZfbbfbeMJpWemHLwsinSWYq1c2Gm4",
  "key20": "QHTwJNrAvUFqAjtQzDq5BmtaczTrksHjS8bfFrL32DJPfNNuAgw3zFGhVNUo5tCf9MzFnxZQ2pgGAhSuvyiQwRj",
  "key21": "2hYKxCpMqqnNL7XVbPXXhkXBubAvr2LghS2QPSmeymBdfdAEfdgDDdFy6D4TKToEptzMBWoRBuNs8EVm6GjK1yyi",
  "key22": "3GHNK7L1jm8eU3m65m7JGRrRnShN6v73HkUfdXaJtZUq4EGQawJVxPUq1Z63HwMPJREsP9qg1WHo3V6EQAqhdE2M",
  "key23": "4wPLdpNAdQnmASYsri1ZjAjBNkXRCbe4zjPvQiZZnYhhrHrQGBPDEooDJH1cG6m2u2VaVFEGCiBCiScEHTPpv38W",
  "key24": "2c19MTgN5kZa12FSTwL8nW119b3N5VCRRmBh6ftGfFjE7MjyRLbxGVPZBXuhHGGqFEQE56y1byAT1amvJ7eZk4ba",
  "key25": "35kHsDvxzaW1vqATrbxrHYQ7zHLsdFvfzVgpNExRZ8FTL4yqfwBHXD9Wi1Um8T79pa32LeqLVcspoPXRW3ZB5YCM",
  "key26": "4MUKakrbpdLHDT1hw74pD9TBxr8TXWk5GfenVdRRXnjZL8moqnVajht5soJGg2rPFPuXNHCDZQPwNjQKru8dcMoB",
  "key27": "2B6QYBt7jtwJ8bAyvJtUrrcPBMH3wYASFg5puYoXAgypphmNNrdNXxP5mLRFqRb1XZtXSAkhk8eZxvGKndxJE3wS",
  "key28": "56kibNDNwr9FH5Qb2SUc6vyrG4yqsJChRz6wYKtUnyCPfE5293kHwoKZqAQe8SDV8Ftuoe5xkF8xDvjst1Ftg9e9",
  "key29": "2RAE8xrnR7MGXvLyAU8nAnXjAJJ8BRK472vTrqS2xJs6wXCaks3KDemJmG8aVUYPT6rfufFPQN1A8RgZggPNfGfy",
  "key30": "4kX2RgYPZGXVjyfcadoY2bCuuCaYNGbC59fuYTtEyUZKVPStAzNMYY5JeWofbGNDLoPukN3nZ7yCK2MHAWKdghAm",
  "key31": "32U5YHor5Dj6HqZj5NSM3dfsgLPderFNay9ehqmfczR6yCgepNt3egMEskwahg93joxsKijEQLJFCy9vBwd2P7N5",
  "key32": "4A18YkcgkxzZVJBZg3Nj87K3jPi9RKVvwHsCWyKYVTwggbjJ4ztcCEep2MHFQ1PUGP4crSyFDVYRVDs9hfVaF6Vw",
  "key33": "5NciXsnfwgpw4eU8rfR5T92gZpnsnSPpKbmCeCb8jtHSuUFGsJ75UnWVdboBowML84FS4DycX3DpPL1ftAKvkKLh",
  "key34": "4fL8tdZeXiX881Si7SWeXAacvXcbxiv7ngid2RkXehZWPeyU71J64QVKJ9A4gBvSzDx7ifQREurwsv8MGrFk9jHr",
  "key35": "3392Lht6Xv759sRgj5CzhxeQ5dA2c1uGqDvDr1HgA2gFiXhr6DFX4Noi6GHXT1yCkFnp9nD8Siq2pL1sedLNiMa",
  "key36": "2yr4i1pLL7cND4fxZcQMVRoAQ1fNMNA7tSWrFpSfh5BTrSUpSx3WxcdhygFCoK6ksNxcJ7ZPuSV5n9ocW15v84FZ",
  "key37": "4jMpgzYHjwnzXZMZtZC9kETwii6ZC4NfSZYrbYXdj7gDfWCvVQcAwxPxvpdnKkPNU8FGqYmjFS5SFdcptqPG8nPL",
  "key38": "3j2q3ptMTkKm3Bbp1KmTcKVE8CjrcrTpqQzao2Ypc1yBZgG6rvApLPFctkXfMdMMma8X3MPTHoUP1MGya6MAChDG",
  "key39": "5UrXo7SUznhstqftuU5LfG1bKvTgX1acfxiV3eAGvThk2EnhgfpeYW8cHsN65svqUk6reJhVhg6bkRYFWRZ6C4ZN",
  "key40": "3yoxt2cTab8vjmWsZ6S4FgJJUvXzHKkziezDwxAPEvCumnSVcX1BK6tcrGi5goSgE3d4sgscPszNDUdvJXSiupfG",
  "key41": "nwz8wVy6WYsqaCBMMwriLMEkfK1ZsyJpEZYGVzRxThgEMNYJLLVRGMqhXopcCxCW3DcPNkap7cmYAcGfV9g6ezu",
  "key42": "5RjskpDXts2SWzjtf5wNBeFtZWbAon4jyn952t9ZJ729qauCtyaKJ6LyKNPCMEvTRdnhignrwdgA3aEjzyg87v7o",
  "key43": "4NsNJwSwmT2qRRZBcTfdohevbNXgntPvyayGkQGgw4x2Mthc95LHhT1399pcGEKKFxgc39SSELrmmx2DTGbY128L",
  "key44": "8ufrnBZ8s1e5HZ6oWeWReK2mK91HK45c5zkL6AWBduZQYkdxUEFTLctP5aRHqM9rkBApooJKvVBf337qvjWmcta",
  "key45": "3u4mFCkkqkkQFeQqcHjzkgmak7uVE3K1YF3ZPnct7NBZ1Lftj3FmFzU4ANsds7BJevQLp6SwwYho7AGBuLSCk4bJ",
  "key46": "2T1FkRHLXEUbkZ53bvh3BH2466UawDwiMj6Rde7UPuhKSy5sVpP4JzJowRYjwjA6wZLWd5goPrutZSLBzyR89VeR"
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
