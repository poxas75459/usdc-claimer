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
    "5Y9BC9DvrLcVvx7BAA9wrd3Rhj7AAaBUjfBxTBR5nk6eYGaWvYPPTNMqVcP17FZX9TAZRAcfpfsBtcQNQaNydEgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqtWsrTLB2QnfVprtyx3Su1D7C8WhzAsgHQn8x3ewd6owQg9EEN8ingvnAmUmKKofkx9rxqCRBWFArrfcytnFai",
  "key1": "4WCiKAUgJg22pPdyQZe7gUMQFBJXMV4FkKobGSS4yDEQ8xdzYFueBwEwjbE3kawBdwzHi1xUZ2fzwgywBkV34djm",
  "key2": "5DhSxq9EPcV7vJV7eS1u3a6AaBDB8gV9FWA1ytJrbBeoxxESYa8GVTeWVp16APTQ1S2RWNmuGaBu6b93jdA89tDf",
  "key3": "4Um3ZZdnfVPQz3QwQYYEJc44B6X9NNcmKj52X6nX7zZbDpWazr7tPxoh8unwEq65ttMQFAsdzA83utNR2j872eFb",
  "key4": "3CeAZakZrunyhi8ik5LzuRTrSZiC8C3EBMFMN1sk5XjpLytvb6saRXi5g9XtEYLzJ1mpXwEpMS2V4omETgqC3Ctr",
  "key5": "63zZpFuDdkWM5FmwQJsywBZu1jPBnY78zSGB2RmkhdRCz92n4YjuGw8XFujmJTPWiip8Yzb9RBZ1f58EUPNkbS9w",
  "key6": "3HctTTmY1BjhBjERd6ryYiNZrnPmpWZ1zfsihHxU57uDKwNF6gCraP2BPx6d3YF2v6G2eaHawjHSKHfKGDJ4Y4nE",
  "key7": "5Qd2uzxfG9sz9PWXgFzZAucWvADvCPEP4mhnxA9yktXCv32G9yzBYd9hKbvkZCw4ouths5iw67woFbwaBPfwpAoM",
  "key8": "34QPZ86Gjj5HLHu79jdmYXJifYN2MRGJBLtZ65kS97YpvAWueNV6JxJF6M8R5Gv7CCmRybZFA8NNw1fSJmRo4CPN",
  "key9": "WpwD992fBkhVyvHfnBogcTkP3PPqz89UQqdUtNgLWgFBUmjM4jyMaB2Xr6pj5T5UThnsN34yg3AYUidoThXT5cY",
  "key10": "3zX3iSzEuHFujWiPMnbCjXrDJKFT5mx7D3bNaLmSRcvm2FY4ryz6tdXzTJgbYJuC4TFPWKwKeeeETvCt3DSqFtXm",
  "key11": "748fbUkWRuGKjyurnkqEmyYhmxbQfHWD7izMvPAEJeCy9ZDMBPnMQj2vJpmmFscSG21zBt1bK46MHPdMMsWNTRb",
  "key12": "fwoisyUQywEKHJR63wDfUFsHH171nHV1A3Wb8hxR2RXGxgexokMMd3RZ3jy63zvWvq5w3bwMriUzQkdxjCiG7yd",
  "key13": "3eqR1htWwDanNKk7SxwMEvFXq7ujQsbjsKJmmWKyiUFjKh1tDRY7DVWsee5ghRpse7qi75kaDCHpExQm3x4hMyfK",
  "key14": "onHQQVmz8faDpaaVb4tfYEu9aLxcaNyNNDg9QvPmy3k5byJi9MGTTGtqnVBbEKmBfvGtU7Q6wZ1V4YbsXUbnQj8",
  "key15": "3yzpqjLwjUdY1aXfETPwDucpwnVyeWtpizCTLVUGPzPfd568bxjXveoA1YY2fAUffZZP58dgvQbto9jXEbZHEe6a",
  "key16": "33zyhPvTUAPN4o7UvsnYdBykXHgzUPMsLL7pR5tf5f64xdq7RGCKkz56sGd54b2XrLxdaAukiCHnD7Z6CNfbGThG",
  "key17": "59sgP71ZyHGNrqMiSwy2YRjW1WxtoczwKfdRzkCW6tdMDsm6yU5grRr9ETGNWWScNYAVLVyVUSwcrtegV33GtxHU",
  "key18": "2M9YNDGogqdCsHKfZxuzQ5P6UCpZxEdTRWqABoWRmzTCUu3sP3YXLShJ21dSozqaEmrfcoZSjAnnGr2zp1te2dcH",
  "key19": "2JQ7cTp9F1wp96daNwNkC1QHvkjuQ3Bnc5HDa4Sivn9LW3qipzc5thMP2o432g4K38RKr3R96eAgYVFZ8dFys4Xi",
  "key20": "G4VDpXDJueZSFxRusWTPGrXwxphVXDh4wE7UFj94r8ccFBtxapsbvwn9yNTsxTymicBWJXCMdrUzU77Fq1aioya",
  "key21": "53KuV3uX1Y7Uz3DrdxC5izarGi4RAGx3zTDfmFW2fatXywTz1wVU2KfvxN7MMPwKRsyg9HTqBrhVZaB4BQ66P8v6",
  "key22": "2JXzc2JkYwAft9JyNV4QKZq7LtGKXJFeAk724XZnBSSmSu1WVFV8jZc17qpv8Q85HWpTTfsSqE2cqYh9XnKxJ7Y1",
  "key23": "9Pzz9c38op5DLcwUNdpF4f24SonaRY5T1siubSR7eQbVjxyKTpbCEudAXEABnrBGTGSpaVFdfRApAnDQKmbtXuJ",
  "key24": "5Hzd7hhfwmvhcj82vMYqrf8sbfH1CDMTj5urkKjxxQKHPC3ap6UkE7rsyynhrhWKihkQ4RD4NgidR3W5m1dGTUzf",
  "key25": "5oEBXL7QRoQ7bV68V3NKB1gHr2SzBpwynhx36fouD5N4i1BFe412gTBvwgHQHr1bFERnijq4sHJ3br26smTnmfQD",
  "key26": "3NfezqjYreHcKjkAA8T9dyWo8icLiEwNTZZ9aEPnMFwK4vboe81epUBjRsjQDfiotqELERKtSbTK7D8MfULKgLh8",
  "key27": "62KboSuvi1WxHeV2KSZxzGzJBUFvEruxhgCta1oCH3vaEg2sRd8izNb5M5cHux4ty2VL9zhiJPRaL18nxABfmCVT",
  "key28": "5N6f649h4mkNw1kXHPeNMbyZ1uHHG8nrnBer1AoYXLNhCWBqtnNw97QZMZwhNitjiKgUEqoysAqnjXY1ASpYUDEF",
  "key29": "5zRi6jzucy1MTFhLdobVetmw8Cq1zCZcKDEQyKYik1GVKHpzmZMghpg16emHxsBvsNawN6p1i8C8HUZyuXc5Fm3T",
  "key30": "2xcoGPtaGbjuVWSZRm2izHZ4NY2xvtX9D7LMBE75813AjrzZQy9hLtosHo9DUMPcbE6wyjKsr756PjgcX3H7Ehgv",
  "key31": "29H8r7ru9PTsYfHKazgv8WsxfATEUK1DZUVxPf1K5AqaBxwWJTsUxDgkdDyUH7dpjGzdRvdkA2ir7jwcLktDCPXs",
  "key32": "5GxcbfNVhb6rCjxBQzrNq2Wgwev4U6A7vcRNY3VU6b4R6uUQiui1ANgozx3ueH4xbQqn4XPRG3pvTPoNUUPre6bQ",
  "key33": "2ypJvVtJU3dM1y3A6wF8FUujWD9YMi33b4fU6WUFy3c1aCGXteASg2AdR6qeS6ZhDf9n9feDz3hg7E99ZG9F5AL6",
  "key34": "3bhcYofSbuPvXJXJ9jmVpTA4fD4kt3HjKfffPmzeJx5Ur6EBbLZ2YgWBNDoutZ55WyhncQpnzkfWUzQJhxsqx1i1",
  "key35": "xzGJvPith1oPAwjZT6CPK4aBwCBKMziEBxNfpGBJynWymerMG8rBhYmLEihKuh2yZkhLSURCyNiqBuYLyyBqnaS",
  "key36": "5oo6wHNDc8CUQfDAPueQviXF8hhkyRxeqz8jUB4bgb8yaSbukmH3yjZzdpRwFqcH6P3Z83Zo2WEApcNXUU5D6RYR",
  "key37": "4kxA3u4CrE5XpqbhxKR4EX31LsDgTcgcU7tspyA5svL7ZdPoYS4WNujBir2bQ7KmM59yTrTrRRmoBnKS7ScDktM3",
  "key38": "2HYVLRfeuyix6JnWRwih9Vfyuocd8rQLjFUKLhj26oGpRRw3zHurF9oPP296sYAJzEaWdfp2t81ytbh1vcSVGcUt",
  "key39": "2tRgrPE2iDogeAxZLRghWPFvCZApp2neyLWqFScBiTvwuZRtekeQWDNWeEdzRJVz7SRJkRKGLX1yHnbWrTunTQHx",
  "key40": "67fWkQEUkdRk8XX3qZ21C8fBy5xE57KqDRFqytHnSo8v2Gssh4CqjMetG8BzJL9JDCXX8tvp8MkWbaSqavGtkyzY",
  "key41": "3zSRd24A3g4PavSDqUrVeb79Vn7t5vvx8QUZFZHDfoohJhh8dbtZvqtnWTh6h3N9YS42fvTJP8mRjqgdzF7XgpcP",
  "key42": "2C5oc6riyaqDhkqfctCzDBjNnDZqQE2TPKZtJzrLLA4Xa9g3nUotL2ZHopNkRh66hZQD7x1Xyo3oiN8AcqdQVvpQ",
  "key43": "5ndaPqSNfeCVxiawUCoAtM9ZGZoaCtVpXCN9xXA6go5Z2qyBHVyE2qcHksSesjN6eQTSuc3LZVtPZgafuULVNY4",
  "key44": "24AKjASTHu3wJrSFeo2ymSoomtW43cvrHZBW53ZghcqMkEGX9QXsUWzUfeVbn6s3YwvEVpY6i1YUHC8K4EV8q1xu",
  "key45": "39AGLmwtM1Tf9WYTa9kGTmZmr5UBPBLtqspkQdd6W1K7LxZXUmDTeAFDCrPECLjqVTswxUFy796nsLFLzhvywS9B",
  "key46": "nsumS4EzyXH7EhpLn4knrPUPb3BB6sp8J26TJ9NkgGX4tjC1Z2pAVwqcx2dbpfeXxk2dUDg7CEufp1KE9LEDEmF"
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
