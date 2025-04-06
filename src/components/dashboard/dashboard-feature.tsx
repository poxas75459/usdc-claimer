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
    "3RP6Yr1tRButQ2w5fQ6sLuSiuC2rtL7F31qiaDmcs6Mjkw4oAeHDvTSvNBUBfTo32aiHWdEApsQDiyHGLCDhqm7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417PUr3ZE5yu866bCHwUK1B2F2c9avjgZJYM3b8GyvQDnTpUv56SVHn4UMP6u4bViWLH1E555vbYX7ntJMQc9jyQ",
  "key1": "4WTNTdSqrAhCjrSC8fhFLhCyo1Rq8AVeTFTtXT7idCqQLnpz9G8TgmZiaCXQjTppwLBxW5omkmHN2euS8e7HHAG6",
  "key2": "5EoB8eMrKStZDiizYi2vvWmh5nYq53KgxHwNESGjnXhgfcoreDPc92Pa693EzVt93qypsr9LNBMeVAoSFcYBC1p6",
  "key3": "2KUt2v7hRG1B62LZpdLMWD8atD9hTLoxLqGyK5do6swyehSsqcAAckj4DD2fbrUZLy8ASYVzez4QTA4w97xinJKx",
  "key4": "4T75UocGWTWaN1fXiRWgUb7F4LH7pDaDSch1K3nhtSbUQxxN3uUyzQEzfPYD5i3TC8zwqgeRAXizUHzeWLvenBP5",
  "key5": "46kxbTZMyZkbwAmj3AZyg1qEWDwY3Hn67sFYUS9kt6tnmwpZrQerjfbuFtYddbXoB8GnSrUeCQqoZW4kNrzz3cE4",
  "key6": "3UKtijYPZYFc2WnHQZvuh4ETqmrYYo5LjcwvGQyY9sRtc3E4jEDsxMEfDcGZkjmxNQR8FPUgd9io6uSCgMKJ26QJ",
  "key7": "3xT83cFYftiV7mSKMjxXLgW9SesYFS7jmWK7tbyz6vop2LWjCZHujQRA3mPWckzzfSV2GT1A8qixyfbDANFjGr7c",
  "key8": "4MrdxtsLGGYRE7DjQM3ghdnuW3KnnbM8Eh1fHvmZgQm1N74gAri2qZ1gGU3tj6heRRo1TD3iPiZNqD4c33RGhusu",
  "key9": "K9JV5Q7tDzgrxDmdayd4dm4hFdn879aUJFcERMZ1KuSacUQr3tPV4qEB135qxtMN8X4umRGrpHTHnUhyRo3zjB4",
  "key10": "3LcjKpp11mYt4ZPPmhGYVAXpm3R1aU79GTYQ2UTbWaa5fMq2wFWMS755Kt2V87WDiQeZsaEcNtrYtgxgWFpdPqpn",
  "key11": "5EKddkRwUhGMMb9bFyB1NzzA1n3wutWZbGWkzfBrfG5RLzYBHHMtmjJJvD6pJtNvdsoML3xY3w7pP4tEWVfceFKb",
  "key12": "5yWTMZxTMFqGcVyZY15NPcHp8VWoR5c8FSYt3SeJTqUXpfrvFPCG2c1FEzSHThxnZzXjKrjS8BWy94AZNWZ9hbyy",
  "key13": "FN24GyNVtaUrUkyCSRe1BLsQYPQn5j9VRNCHnbHqkNnyb5xMvjmqGqAUngWRNdwH993y3tWRJZ1Qo5rqZvbFosS",
  "key14": "23SnETANSbvSguCM1F2DxKZE6wCnoZgeovebpXt5dqhw5RYNah1upbkra5CCVqRcz7RixNVqwTuYGutEqPu7ufKJ",
  "key15": "5LSTzT4wm9xNk7Bo41sTF9Jg8s7EDP1Q21pUefqBtoEx9E7rMrRd2KarQJASLcQqcSnQ32AfBacQLQDZzcg4QtHw",
  "key16": "4EhofRq7HGJ8tiyoXXyWW51xnAowFNZ9dKfPWJ2PfisrqpdxkbcpDdspb9GCVj5odbzMwqHnUyqWmzFAsQYBP6eS",
  "key17": "4js2GEeXam4XAW8oXdFjpauicmFpWcmx5Y3Ww1wBpgR7AAxYpVqxLyzsNyRu7epEJ9sgNg3B7eDfo3jBeW1JZyMd",
  "key18": "2KjVNNYG2EoWWb7H7F6Dw15vnS7P6PstacAnnB3MdVAwAq4D75SzW7QvKsQH5RMzBttP1S9AmmWyrJm5Em47PKxL",
  "key19": "3dLAeVk566a6kfMTHXw2a6wsLkUSy7yMx1VZzg1nGFCmeJzBUFG6ecLSBU8weg4hZC3mNuxuD37HvapBYM2kwNsA",
  "key20": "XTTZzZv4XVtwwU8Tup6ccD6H4pmC8RftkDtZUNE2FqCmStMsakdYYUatj2JFrQpw8PcYRkRT3p61zzHgfiWd2rG",
  "key21": "51rjSWxNEHU3wf1H6dvY78qyvZUkUNUvDYefRjCE7UckTzkKGSghecNSbw5mpSQpzGenxLniT2bqDGT5tiz24Et5",
  "key22": "648ieQyywqsR6DBKGCdS8QkrjMbjmxWZhzYsJyypZDxTJsNbTsU2qhuMb9czuFSjdYMC4Q9CKesT2LjdHsFYXag4",
  "key23": "31jDRNsn2FZAaRN9bh2yPpc5CSU2yNqBy6XVn6C5gSeu986NH9m9ykb9ZQYCyWxHrvmZ2Y9zYhqWQCW1sUtY2RBP",
  "key24": "3Gbi8bMA13VubX81Vrtf1ngRs23RffnN3ujkqur9u6Ur8vWEGjMEwNmCrkFa8z6yHzgHPSjKsuzJs6USwDUdQrkL",
  "key25": "3Gjdajt9SLptjsRA8b3sSyo82NuJf2NoLPfsDogN7RrAFf6CzZCbcmM7viGkmD7VExZztPg9mWC1avL2yPYtb3fg",
  "key26": "2TNBrreUUKy6ox1Ryjj77EhMtq6pzHRm1dPm41jFqTiXbjtwiNLr5FvKYXeoGST1yLvwEeFhaa1jXvUBoYH9zLjg",
  "key27": "3eehWf4fbrE4mkbGH3JrtfZTUG399RQdy1o2UwdyMXQqNUF12Foyq7fg2yebiEADiVynx5x5Rcscx5wHYfwZtMuP",
  "key28": "2MTHTshHXgPo7f5Zt2Cip4XhfFTYAF62jFZiRASQyKeyRmMya3TFyBHbQY8jfxtAhKKVeykv2mxkNDqNCf8VCVd9",
  "key29": "2mVGMmL9jh7zW9dNGGjAv2h9y9x2Jb96wQ2oYK3Y1oAYkFuAkXQddj5T4X7PkZonZ6EoVVZ6LDWrJXZwN4rynHZ",
  "key30": "5L7muNxCXBRp5mAHi7qHebvp4vd9ETzcVtQXFtc5AMTtez84au8R2CK54HYqgww87WjLyAj9e7PUoQTvmA4h1PUt",
  "key31": "7GXbgikumZ5iVzMXnuGxgDCxbaDmPpckZ6aY5QaFWkbjdNge67ECPhnQccNd1NszcNEq3gy8ooci6egTzjjk9Yj",
  "key32": "2wyMaK74uBXviNWJuj4Tyfud89oCvB2xrCLubV6GY1pU6yTASi4NzSsE3LHSFz1QDC1StkGYsHv5SnmZTaow8i5q",
  "key33": "3Roob2TThQ7SHTr5hnJCk2tQrWkAe6z2gNRVnhAyzbHSk8XwDSf61UTTF83SrFKMZ7L67wYSJS6qBaQMKpnrhePp",
  "key34": "2Duegfzx5bKJMjGG1pantxjFu1YvfFGETvqpEsUpEkAZrp29MYjioxSxHk4RAVafcVz75h4eBfbyDmY41tZT93MN",
  "key35": "2hyWQeqXmafEgCEUGVgqxMFUxeUMgbwyZCyEWC6ca5nj36RCnt4H4i2VRrFwXUDnsZauH16qxtq7zYfMYTdiPwjB",
  "key36": "2yBu8oQFcnkkA9jFUNAuKtHa2fE6YaRo46121tZfGcTR6QRsSLhzXovsDdossLQ7vSgRMjcYzvBhh6ik31avHG3n",
  "key37": "4Nnj98yvagmnvuCeTtDc8xEsWaMsRAeLZUEqLEtsFRDGRRQi79HnBDnsrAnq6NPvz5yKDGonKpQXuzuGArBFoc2H",
  "key38": "2DsjkfYmaKFVZkdS6FjVxX4NmfCQhBomE5buA4EjU7ySUHiQYMdU61aWZVnS6sRerxFrPAJr11B8KU5JhYVy9Xw1",
  "key39": "wPEJHz3i1VBErQZxwd4CY8cWjb48RAZFiadJHoAHsZ2wgxYdMvKU7TVZs5qkv454FVeQyBFWAcHYPK9oL7pP25Q",
  "key40": "2c2sj1tgWQePGqPbES5UQundhFcptJmyoRodVfyLZtBKKtB1WKiTy71fGz2bcTjpbhhBstmL3oZTarnMrYmGHuuj",
  "key41": "2775qfcC5LR2i4V53PkeChgDSxG2DVRZZ2hSfrWDKVPXE7TQzJCpDQwtEbvwBotG1mnE4teMkufRFVztqzqLJNsh",
  "key42": "TRTn4b7moTUBxpz6a512bCVzAMct94iQJ1yMicNpQBXUWc7bkfRtYB4EStU7JveprkbzqhVasGUKJ6BAun8wdRt",
  "key43": "27ZYsmKiMgrP7bec1MrpcY1baui2HbQ8BnCvLVUSLUDCwR89PpbAUL2A8hu4N3qdCCXk8oDBfmu3YUmnMcmqotJX",
  "key44": "44ak9XNLpZp6rTqAUmS8hBLLQ2JapB3jDKBJDaD5mctV14RHWGbLuiBd4xr9ragioP8QP9L78JaHnQrY6NDW1UmA"
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
