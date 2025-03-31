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
    "4ujpHvVpknabzQSqqu88NyrbSRzWK44GohZNFetRup1Yw4DC68L8YYkAB5oL2uWuNRCmYw2V3tiUaY26ZQuPaxMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tCqoyxD8xZ6yydRfWcaEagR9fxRetXWP7UgRcU8tvSbHh2tKMCuGRbaa2hbpXP1JzDuZok7kh69wHT4kGY8sAu3",
  "key1": "3ZAP7mciWkr6kUZ2jMuDZ2v9KucjHtWk2nLV5toMxqr5eAowH82C3iizYJ2GgEs9AaJbPXesKvhjSAEj5KkzjwYr",
  "key2": "5CLsgHrzCMpXQFQ7ACNBhukbDB1n8oXgAkkAqQSAM6ePthYg68J267en43rPuNwXN5zy4szeomWFE2U4ceSXruQJ",
  "key3": "UYW3AxKQerHWgMw7QdwyUyV6xwJS61bv3hCgu98yYkvZ7RoNHncs2cXdNBcrUSgeZUAkPxM7vZSjvxZ1Qawqk37",
  "key4": "vYoNeiEktYu5TPe15EXbXcwRLq9au8bLodTPYb3ZqZ32mL1Ui6kmFuHaqQGZybwvPKmZsS3suNebMF7BUZQoBbg",
  "key5": "V8uL269VoDksi7x5KTA9oUoWH4fduZMbpN5tJNgfzwbNcwpsF79ghz37HFRKFkjb7PoakjRBK4ZS4BVKYR3c23t",
  "key6": "2fwXMrB2RgzcnGNYcUf4rFysypc6SvyYxXktyFFAgJoRNhu835maBCQSjwFUcJiDfBAai8yRYwd6w8yNe1cftJmc",
  "key7": "22XoSAjS5krtYaTsTwWvogA6xSWvvbJMCNVWW6DXPvLdfQ82vqmjh3YbYjZ4o5jQBvqUDbwyTmq4e8C4vyr2sDNQ",
  "key8": "wru3TnTBREUoYQGYFUJCnpPg7HBxmxea4kdsgsYdL58HH7EYbjs1v1c27ZXjmXjhpMDn8GYb2JahKALhp5q6CK9",
  "key9": "5dyWEX1cPLxum6AgNxRnCv3WjYfzNPttNmUAj1oNBbMPkWCPckhhRTemp3YqSyQDQsCLMotoUyQ6HUxDe8WZEyyf",
  "key10": "4JPF2fAN2GYaLr5nphpRgYh1hWEmUSdfTPycjpEyeFLPCwBL5EemfqcmWH5VdrX9EvCuLLyE1Dx9tCPWXwspkUWc",
  "key11": "44zQ8EBUtfKB1q8Hw3jyvZzpfsJtV3J2mt5PzNQDTMAsoDRabt6NZ43vMoGEFebmRBe2WRtFcd46LdYVZKL2smo7",
  "key12": "4qLMCa7esAMcFcHJQYniK7Kuj8JPkBjQZQsVebSWvYKbWHb1xHpsgw58h7TBfgAQQ936Qx8dgpCnWYo5wqSDCRrg",
  "key13": "5YycpMBvdEP8nbv2JtBs57meyQrfPVRaGkZsqyLJKq8bBBGH138S7WhVsK5A3ECNsriob9PgPW6gNi6ieJQFLtXC",
  "key14": "5Hc2iymfjDS2XhMYRvXC1FaK9USgvkPnfEYr5Qe1F5duckGbn8k3Go4qw39R1JfZcCkzPfCUAaJx8dWNM4ymjYhV",
  "key15": "AjjEcj5wSC8F37g787iiVSmyf8QCrz2sdXikLLCUwdXmHKoZeW8Ks73GFvKJjC3WZokMUqsHLtGx2AEFZxZRCCp",
  "key16": "2KQaJiwjbuWpqHSFAEqWpGUFKN4kfXwVUXyxXGGkaGTXPA97rWEbHJVeVmuUwZBJyQ5TrYngHZ9qaR4MDh8eZDox",
  "key17": "34iA7Wwbf1dioYG1uDkMpM6M1ZqbEx9LN8Drx8Goyt5xV4kXZEJANqdkeALsM9En3W7MNJsTu6ZjY2i951GzeGPN",
  "key18": "wSRv8BgMWAqHgDQ9Lx3c5Nnmoq2ZKyxhSBh23G6Z7Q3fAnBgfSjGMjDAQpkyTH2WbpMMA4TMkbnDBJeS5Gya3kH",
  "key19": "3qygSdnUuSW9qKEDLGfeeVepT2Ffh3o5zNgsGg3M4kBvotYGQT823ksxVm3LGCyg1bHMWrBp2SKTohaqje6xD9Gz",
  "key20": "8BNrs7VdMoDiLux9ZLuLHSHsmFPAHk573ofjz9g15fQWLQdRaii3SjtRVWRFQaaKixC8kfViJ36RNCsaVxcWcwG",
  "key21": "5y3yvoCkzkv1MPA9phc2BccRei7wLtiuD5BdpPZv4ZUf8UVyXHU7agLKAj5Pj9pgBbczVhxgu7e73gHqaYRLiXYc",
  "key22": "3VGYHA76fen5r4ZtN3Q4AABtcms739cWnLNmPqLQB6AWfscqq6jCtXM6NWtYCED5b7VMufUfvcam4C23BSKf7Cit",
  "key23": "4BBBvGgderexsRAfLPeZeJkiX9jZ2Hm1nCyjG7wc1ycVx6pkHhuNEWzSk6GGHKE4WFHif85HZErCrMFNCZNXWE8Q",
  "key24": "2ptReRYKpHyngTrqF2aUV6en2Ys6m86PbjE55p9yKhmwWC3K3fJS4FZjvL7qnRESBPpcFLxW6NHeF4N7YYeCQSa5",
  "key25": "57FJmdXkvVGhQe2riSm2GpbgLgLvQXE6RvYRxWGm84N3ciLg8mqkWGb6y2etM8gwbeSYDKLmDiQ45wR3wToiDBq2",
  "key26": "44D5LA5xZmRWrnjomAHR54MEbtFyaDxRCR9Tw5mVQGbBD2fRjHtEckAcQoQzSuyQeicnPpzMrhp1jxSEV7zj27Gj",
  "key27": "28X7STJTWBfJFRqL84waR2sxaHwzSbLjL7425KigvShRvFhdoy1x7Y8eUvroFA5VidJtXNPkKYJVQdkPhEC4vxvw",
  "key28": "39wAz8LBpDT3hA7sdtEau7EzyyTcbCbXezjMXhuK3ypYDncrbVQMj3CjnYuvHKf3QfTL1R6A7wzVmHuBhHutY3pv",
  "key29": "5yBjvPMZX3Bfhsv2pc88NCf5VJBTnRB7EZvt3zU4YYeDMzeuGA8JWPnVspHDZnS8yB8yYs89bXdj5GWVmy3JXLmC",
  "key30": "3KyjdZgpFpTSYcvf3DqHxaNbZ9EDh8Kp4W8DjuR4pDFzHxTqWXxi8thbVRFuvSQGUf1ikFMbeNQ4a3c4AAjRHt7d",
  "key31": "3KwgaQfUP9SEgPoEirK4jen6VNadNpj38nEobk97W4sAooMBDnkMS8DHrTKUZeZjyLeEKcSqQRha8NG5ApWKWFsd",
  "key32": "5SuUneFsoExbDKUW4zGsta6CCurgqkbBxyHqn1eYBwJmhNfYFzWexy8PU7raESJ1gsYWXkGoDYfn9C8LYgQ1neCT",
  "key33": "GFoS8Ptit136edWmWJZBgGByCQ3mKTn8vnLL7peh5kTE7kJCCw9qejnCvASrf4q9wZRAiEmVvEx1LmbemKd9Y2R",
  "key34": "UaSMqVz11H95tqeFA8Qxs3pBPsgK8tJsKVD3sBmwKq4A7bn4Y6KEjVBe2uSWMbr4C6eyoiJoMZfVG73x7n5QWhW",
  "key35": "3aasTiSfXTEthFZUFB73djx7msXXBdk89SpbxTXS1HkjVs9E4A9SLH8NTDUUwEwTvHZCUQFatypS7u4NL1zJeg9M",
  "key36": "co7FuBTcMJThqBu9eSqPrFqX3iMYhCfw47HhPHupcePPd1WvV7T3P5NNrCvfNCMSS7BRr2X8rpXswvmod3GDJp6",
  "key37": "3iHrT8yHB14guR36w8WdYQQ4jpiagikxyKgkwtYL47hiCwRt35aRhEQjDcnDd1E8sU4WvL8Cs6xpmZFzmgeHHdrz",
  "key38": "29k4uyTuBLjeUS1tuxqRHYbSJM2qMmUvVPezDdpZB1Jk3ZCSWwP4VX12ShQwvcEQP3Hc9wKXDqbNfDmEd7dLh2bG",
  "key39": "4XFDFKYSPvk2W4iPvELQ4hVDJRGyyT5N3GZNA8Z5CFNeSdtfGQFkjyBWEjq2NBsDdQH75Uksr8FRwBhfVLiaeDwz",
  "key40": "4bh8a7V5BGmmGCCu8wXeYYJVbmzbQ7QA7ieTzF3Yeuf2WHPp6usVk29eSUKMuDsSiHS6iiNJoReDdmGVSTkmrB1z",
  "key41": "3gvkkZFm6vk1CfnQAjNcKVQSG9vWxP84izjeGqizi1abDKdYgFmuWcsa3Pc2JBM1FjsEuPLXSzjcbWbcmjCp44ho",
  "key42": "3fDFskJnX3TuF9WdnukHSbQEstdeLxgD7Ss8Fskay8pyX8jdeLpy2oizH4F6CusCAFMaHGvX1HNKfrjsch9K9TQ8",
  "key43": "2zmKFvLYqYrrsXn1D7oXwUZggN2HsU3UwwwCy5Koa3YgjwQ5DEUSDmU1y4pUnuXW5r4JD11NfkSWH1LxPfp361de",
  "key44": "62tMJFEkhHAWadt119Vw26KFWvD31fm35kMoorXBKhee4VHDHduVuE8PiTbMbNcN59EqV7hkdQjojz8HzySfVtGp",
  "key45": "3wv1mmBCGfLjNMG29Uts8rMsX7Ea5xCtcSUZXP1emiFMyopR43SeNicxGRpk3rBEApP9CYdJA3jVxsEe7SsAAdic",
  "key46": "3kCDvK8pidBkAXP8c5t2pWqLxn852t56hJHCQYCRDtiBkmWvTaZyU6Dd1yqmtbrgnyRKwqu8aQJAPprmxCyGah6M",
  "key47": "5bs2oMgZtdf79sBUHFet6AUk7XgJPHuuoB6vxTh1jrQ3vsGNBizpZRtFrWycosCVuN4VN4au3fSpu9rKhZePYPzg"
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
