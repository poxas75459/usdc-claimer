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
    "3XaZD2qzGX8xQ1714m9Q5XbK9esiRxzVksFm2UpaV1xsMGiNnPfZ2Cw3HwFtLenDs9gaQkYi5dSeMAct9g5RTuiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cbEyPstUT2Znq8dUdzSP4vu7feSK6TtBft8sKq9fuRizg9bo7eSUtZEjf5EgcuMjchDD1RrgE2XyVXRgTCpuQKJ",
  "key1": "38mgmi9fSRLb2p2Lod4huZWHqbmcQZtcctKRLnqeVELPsXH5XiCG7YDVRnwHYDPen6qcKc256wfVhZxmQ524uyr6",
  "key2": "2cGFudqFy6DHHTcJArDWwXhN5qVbANZg6RwBg7REfCLzEoKe22c75Yv9BC66GkETANHzbJThKW4C735d47KMXd46",
  "key3": "4PHAGu2GzMXs8rM3otpxtsHkeia1G1ET1Zvugg6vYybwXuf7anUVRxk4yDyFk942YK2ukBGmzPZUtkcJGmJuvxrF",
  "key4": "4SbKXuqRkxxHr8c72u4wmmHDMVfZLSohaPtcjYFJfhpSBjsAKVyg61dRkWdm54aQ71b1GoEFsY4q4ioMpfiwbMRD",
  "key5": "3eNNY6455iR2tFGgxFuSnFNJkoeWHZgoUmUbTsoAkV4RHwKAaWG6DGmQDkk6g7H27y69ZBoTHSL89CRa3mkU8hsw",
  "key6": "BmLuc6r2YnfiHWwDi5jWPRKxLsb6ptn8jkn5hGUovqnzKR1vxtLk4fsmtzhrA9KUsLMJRLrbi28N91H4u8awESm",
  "key7": "3JKpcXBLu4RjvqrkLgxcNFWBLuQFp1j7q28A43R8o1CAApWobivgGK1VyaGLwGDG2memWjKbLUSufEEiv6Vjvppj",
  "key8": "38yhnbjX9v8132E5ejEHgestK6TH58VM94H5S5yYTv6H6QFnDfQ9yLx7at67YrgCHhdYUNX3irRhXqLsxhHwRrae",
  "key9": "5XuqJyUnyECqv5TAaW9iDEn3BwomEqH4Fk2y78ByYxJjwpGvSQVdN8JeQZUszD46rU5ciHkWb8wrBnt6FpqEuJtB",
  "key10": "3zGdrpA83WnajXcADF8hqAV8yyZYPGKpcKFV7GRTRJAHLSi4rJszUiuuTBm3JoH6ECAUoAYEu1kWfRgMsnYxE95g",
  "key11": "2p5zZkgZcJT4tFB3j62vCTdN3CmL9gTU28MZSR59xpx6fizp3xuYp7SkHcFDPwiMNuFQxBZUXuJsF2botZAqQmjC",
  "key12": "2euZ5SkhG6WjaVnh9MXQgNGwxx5KVjVSVkKBuQMUQpjzwXKbPgbTeGVkTjFYipsnoVGhouasM6UMuFRasdgHDVAL",
  "key13": "52fEdQta2pb6aDaWEPe8Nym8Mpw19novc6kUrAHTK5vkNKtXDhjWN5BV1MTEXtsJh6WYjRe76R7qSFeCk5e46eAY",
  "key14": "5V2CDGQC7MGkCbcYigBDZvCJcJDZbAtUjspF2bWpcZNwjyrrErPkgCcZsifngFatvcYumeWJX6cJKt41B6db1yk",
  "key15": "2CgpVBoiKoNed8TPGfqSaQTibjkrKhdBBbhyYAkUeq84m4Mm5RBtNtJMGXQkyf9BfYA48vrPTVwsMrN5wZaUCz4e",
  "key16": "3uepP2VuJGoASEHj3tWA3A2kwPA2SXR8z387AJFjrkDkhLtjgoc1o3AMuDWuCrDhbqqoMc1hYDF4Dt6m96YBGFXT",
  "key17": "4NMfHd2xJtoabrrFmB25RVBMS7185Te55AhnDRBmqyeAd8dcwD4pag3Xz4prSCzrzneisdmWXKFWM4ijKY7eopg1",
  "key18": "4z92UEioKRYPCBTJHAvnWVgqgd5veKSLe8fzTRkxw8Y1dokpCEcC3BvhWMP2kWsntXLPPRB8Xf67MJrgKXDjxEgn",
  "key19": "Ls2MwTqR7xER7nKqposC9hDccv27WhyZPoowSY8vtEVBirZM3gMbwPzBQ4dRCx8cBQgADvhj12J6VSuHTmc7hH6",
  "key20": "2LK7LRjzpbU6V67Nj4ANPhF9hskSWoYdRjSjPkJJ91HPj429JzEX6TXYfWFXyGqVJcmvQokur4eRtNzqgZwxWD22",
  "key21": "Jr5vs9kZ2GPQcNV3zJk4PuogNpAPDUE9YnwN4txbynbchD7SXRGtSoAdpr1Sy8HbCYsnspWc6Bp24HLvxKfTXuA",
  "key22": "62UKgFwm1JrwhYt76NNuP7F2C9pNRyye6t5Bvh5tCVkwyia1m6F7ruyhFjJmBq3FgARvnCiXYBu446hMcrzueJdy",
  "key23": "59ejs8vbjLpH5xKGEgfoX65qkwGvzxD2XaQoN8GXmcwj8qYWB6Pdgc2tFvf892duxEupYVLffyNSP2fcG6Qzn9Xr",
  "key24": "5wXqgGkbpo58bw4aEmKSBfmtx6bREW5ns114YX65FvS7E8KKGSoYUVv3ckcCfT5BQs7ezK4JLLSEMoVjiedpzbdR",
  "key25": "5EBAnjdcKdtKenuEpMaPLTGBGrsms1gRJc6wWxFg7ptJdvPJTHCWmbb8rcoyTwNDHZYQz7ada8zyRMjDDNjKDjbn",
  "key26": "1BxgvF166sSNz1CXeRoi21zjf52qJ1vnM7mBQFi5KUy38k9DyWg6XgUCKy5iiopTCSF9vU6AFW9uYv6et9MdMXa",
  "key27": "2Q1gXUiAqdGrmqk5uSYLGZJgkpiUQB8hGbULbHLcp6kZSGsj6d4Tb9M6uvk4Atv12PsD9BTBdxm1w8PpFqwMf1sE",
  "key28": "5VHmSpcaePWn83x6Mwh6X6LWQmwKPstGNnR6zQKZkQ6MkGphtj5NNkFXq41ydzHoUG7vKbFGXigmSnqiFthjWBAZ",
  "key29": "49x2npVv526AP5NpgYEUz4YhBDiV1mtNKQFqqM8S4gYLrv4GKrcn8ps4CZFeyx6k5viKRviU2B7Go7W4UCZimSg9",
  "key30": "3YAJmiizxVQvm35KgCMKLXVazvgcSHnffhGM1zoGyVtSkHgA7FNFhNAVVvjtPJp7LkBHxbV8x1tkEHGTMGyXno3S",
  "key31": "4XrkKZ8nmWghaeG8W6L4N43oWfkjSWehQJTn5MwVcrs513QaFEEAJhCoEHz7yJj9xCeRx2arbGZGS15bDmLERUz1",
  "key32": "3usuyC7g4BeQn3LRt1P6WnBqNZeNzZwSkibG6gvnusnu7yzJGxmmstutUXabkzm866B8C21c9dNpfu9c1KGukPXn",
  "key33": "5VQC72RB2oKvuWz4U4uAHbT9AB7paNvR5xVHiNxS66bKcvD4NLpct7gzTfToCPL2CfXrjqBVYhfcyJaxWcpthaXo"
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
