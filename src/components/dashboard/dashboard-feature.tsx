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
    "hFk4eVtihzYTVadz2Y6xFEuKVkTePYjMYAJYNywPPwCVFJDKV1RtZh3pic9Sn6nPEPy98ckFpaD8DRoNMCYzpQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhsAguj5Aea4hRh99z5XhP5dt9TfpWVrcN8JBqyV7aSWtBWh2D6RzhWq2f2YrqxorRNQfcpLbY5W1fK5DBzTK5L",
  "key1": "5DSAJL92e7p7TKAN82rnpYfNPoWyaGvKmbcUP6sKf3a8QGRtACMDJepumyj7bYK9QPKXttVUJ66bEDKEoDMrrdH4",
  "key2": "DL1E8gqz71cFK2wNHzZdnw8ricTwUnUEuXi4YCAC3poNAWDyJZUxD66TYLcyxFDBiZq5BdGXgUccpjrCnwDqRSr",
  "key3": "XkP7LBG7jTAA5PBXWqGrcJLvzjL7Khy5gZyuctZzEbUrt9cgfF1df2fgenf17wKF884RjRd7UfnEvh8miZg2bFj",
  "key4": "D9bi4RgnpPmNptqt4kc3ALyjAGsFzAzJd2Xx4WLxT3rL4H53gKavLcYLLXj5FDG5pE3fF4jvbHzJMiDNttcUbMM",
  "key5": "56b9DGxvSABg7GUVsuvXmu7jZiKFXEmmgDdn5jckBdrY8qi6PVrsLsaAixu3dzd6nfdaQtbwrSDZadykrsg4nbfF",
  "key6": "64RKDqLZya46FPmfK7FDwFFpmZe7RWHXhouX3yGNz5J1NEyq9uxEPM8XFKfxznYXKTKw4rbhVpqNRdF3hRxDgNSM",
  "key7": "5wsJQpuUHPfp6Eg2zvze3JkHXG9669Ts1hiMPn8itxYQnbi71CLFtRycLvqB4Zu4k7HUUHKxEdpu3vmxkC4xoHXv",
  "key8": "3iJBBn6WYWEsb9EvVNhCvzeYEEkXbAm1JQPYFnzPK7bPkjZKFEYHarzp8TRewRi5dGYg7nEUdHqKS1aLxgzB8Zwf",
  "key9": "64PNXiSyL4LN5EPpgjWAiw3QvHKcVbsvHyU3q7cDjw2kcShnEggFWybzHeCLnCGqdoKWzbmyzu5JtdaiS8Vwpmps",
  "key10": "hx2ydeekFLaS6pjrPKBgtfazVJgPfbnrTEmFP1sWQDrYkAf4W6URDKZ1SMS8iQcrZqUdgAjsfM9c3KDqz8sNnDU",
  "key11": "iiNxEd6csRGX4j6wBUrtV7mtGfxbaDUnefn4ApnK6cZ5ybTXQgTfvt5HNUSkaeHJnBbncXjAhw1udVGoJzQntRN",
  "key12": "2B9UVaNmJA3YX2mDsMF8PvnUD1YyXYndsot5xS7GF2vWwR7gHFYv6Q8P7obECUhKTDh5ATdFiKzmdKoJL3UCfWCB",
  "key13": "37hN8VNjTuonnetu9hx54DQUB4fTnzJXhYuudNqKKg49qQoVSC51mpv4HBn1HBWreiK5A6B5bYNXJgeoReRC9BL1",
  "key14": "2ryZMLbVKpKy9DX2C29b6e5D7yVkSsjasWB4izhEvR9Y6RgarVjtCrrBMQouXn3c1Ezs1WoBvcxm8R8BwxpM7ahv",
  "key15": "4zQ9TStcQLR8ALDhGuryYGVPejkb1FKWbtiXks11LZDi5QZ3QoNgcigxtS9D7ZwFfzoKVM4GGFJKruiY2M6oHYq",
  "key16": "2XCbZ17MXnAb7aeQH1HHvskJRAxQwSnbNpecL6QTyu9nHFbnyhaTyveBrPi2aQ6TgeHYz5x3NHD1HMDKapmLziUf",
  "key17": "371KvrZm9VjqAicSSaZBdnJdptAoF7Qyo5qk6Z1VeZqaf6ipKwQSYiSbyrziE2PsLEgbm7i9BgZnh63xNNN45Yww",
  "key18": "4ZSfE5UygUhcZBfd1qGvPy4b6NVoiEthL8BmEHcXSchKheKeUaQQJboZZb3oBvyZrbsdkYUrgCUn2P7XsU6hqQwo",
  "key19": "3d1F61GX1pAktGtPFgu2dmVWUgAA37rW5Wm7sUGbAGo9yAQpHE7KMFbDJzc5Bw8FsUdXf5pVJ5XDiATQS6aB4zid",
  "key20": "4eJigG7PxPA1RQqe8XWt8SFEPvg8Q2XF44wLWEf6NUmZKPFY39sncvghHVuCoBWjDfnj9pspHhuu3ypG2qkjWhXP",
  "key21": "ssudwTXRhJVrbbbZBPJcUjM9Ggadhi7zeKhmMPPJTEC9ESt9ytkbPKKrAZLvX9FRCr6oGeo4kY884qPdyQGHweJ",
  "key22": "5kB9ASGeVoi2KDtFxjt9ZUNLdT2e8aadbHybMMGxcP5dGsEASn5XJua1FRkVsH7KsuMTqug1vJQXy8M1vHAGWtNr",
  "key23": "3qYJQbnPRtnsG62Hqa7g9jWKMrwAn9Q8FuTvfKNa8twzEqxb6g4jM6JfA6dYV1TAKHvvyekcN3BhpVcf2LutRowK",
  "key24": "5SrUx3zmxpigREnCi4UQa88jqqKj18tDByfLHnWa6cAZqDjqsXWskBpGCRLHxjXMua2Q9Dre2kyJKpyTNiihvGLk",
  "key25": "5YXAwavDk7L3v6rGvQabwNgKgQP4heNrtru7tSL23qji5XQxbcHYowC5r8YMyMWFwMPpXDKn4LCm9bmvCN9EJ1Mn",
  "key26": "287Jauf3h7xRnbWQq1K1CDNqjveFbmxp5whjvycNF4EiRqCfWL64j9KGJPMSjFQHohCRcRag3RC2BYAi75XfwgTp",
  "key27": "2wcZYgJ1KQ2cT9EwHvvFSihBoXWjadNy5zeLW4FBsMtYDUt5bBx8CB8z8mxqNmHBfKTpnZ6ZrFrDURNkbhbFXbNT",
  "key28": "47YL9JpLrfZocK131biSwofejhPV3qYEy5F86reiXhQRTa8aeZMdFr3DUuC5gBeTuRtoTvs1Me9M2sN5PY4qTbku",
  "key29": "eK6CSaNhyUSCxAegjFxUbTHKSt1AUmQwVMnqUy4PmJT7nRamKoiodMyKnpLu6iA4YMMZyBdSYAfQbhor2YiHKcx",
  "key30": "2ag9tJwDz7HWKi4QDdcjMnwxhyp5xb3jQkyBjU2ZX9tr2H35aR1YtoW9BnpFvNkVeULgUuWCsakXiUDCgNwja24R",
  "key31": "5YJ6YxRE4HamWed89ASEtkfvbkNJqM1VZkf1jEPqupWsAgZoZKup355CRJjKYfFExvK83SRYpdryKHJpU4uAa8qv",
  "key32": "5fzVfG5aUX11doKp4JiikPk191VZKhcSsdxgufBHwpxpABsCJRjYCLrmz6eXkJ1pKKH6B5hXb3TksjK7MGUqHrYS",
  "key33": "4GEiNydxcUF1BspJKyXApeb9TtHzL5wXb3BRCAoByKWSZXZKVMVfbRtU7PmQqGFG7e7oELsPHuyPtFAFSkg1DgNa",
  "key34": "57v8WNM9UCw9DPfpgwzeprmZVcbD6juX2uQ4hgkSomh71Pc212cgVFrEWyFLJ4Lsum4vvuM22t3T4aPMx163QaVu",
  "key35": "36njZhyGUfCqQgJPcTuFKCaMovXJTbY3LTrYhv7nmKDiiAmF4WkuWdEvv3puNBEUGMgv2EY22jZ4B2ftNQJDYjcR",
  "key36": "5qrS91WpA8UbPt9yfk1PPvDvhFPHxguKfwmP9pTjeo7WY5yYxhfimuxbxPbuYhfaeWYAzeYNGByz1E8PZqeQeUE5",
  "key37": "4yw9GMA6SwWm7v6QRhnR1yu8Pz4U11pfpzdfNwWPndDrMC9GRAYgQAAj8S3PjZ55yPCfUQoBp1Qn9NHTJGFsgJvu",
  "key38": "2nKnKw4agc7SQL4cuSqF3mVDumw1XMLhGYcL8wjWRscgcjZYwMVjEtsQpWMrLKgKKGfdfdv9kngF4XjVwudxyxZV",
  "key39": "4qcWX5dUDNF4Y6WgU1UZfp7YFsbEj91MJgEeGMbKbvLQSSzLf9XaJRFNHbDAbfbFAankSvSmkqXWWgU94LP9pcZx",
  "key40": "3Y48UJiSVP52J5zJXeCo7rK32ipQJcsVVEgJ1rec9A8iJ1vjG7HHZ9KPpruQ687s8V9aVL8pTDS6bq87DmBsZXuH",
  "key41": "3e2KxCSKHmoTn2Pf6iTRCkk3dLxftzur5TeRqJcmGdowxtLCKUnhCQzc3TcrwQaY3kChGLkHTqSCShrNUxWkpCgd"
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
