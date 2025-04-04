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
    "5QgZzqznWXmiZKWdpM8x8gr7d69ZhKCNTfSvkbdeWiG7KSwA9jKLL65rXPtBVVEXTaQm3sc6XHyCNDLFYhfxRtp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNvEEw7DMqbcKgjiG9h1LiARjuqLxjvrizk8itX57Zj8DNECbv4EJbYeKGAc4SUuzbhAam9TdCGoU8bbBYmqtBH",
  "key1": "2bdML861CUjZkKALpCdw47vBWQNk2pu9opV8TcxEMLaXgvvgcXd9ySHVb5HN8amtCWFHdM1kZRFS1FuUUA5ebE2w",
  "key2": "21CEhbARAUbLm7TCp2mjBy4pGQXYGevXm4h3edeboNEcR3rYuEQ1QTZB5r5GUrz84gcXqRCDRP68U7TNHPM9PSKY",
  "key3": "2A7BCHDyGp4f72rCnaahEyaKqw2wUZEdZdBqiqLuhqdPkWHcoMTpyvSEhyYfnzqYBmeeyMhvuvMbPnEgNH98taLZ",
  "key4": "33T3KsX2wEPcXueLnwAkX23PSsUfNc4ARt27XBDAdQmavms5irpeGv4seVi7UwC3q47Sbueunv7mEaMSoTETHNNo",
  "key5": "3Ce76wrfVDSJYDYxgg5wucsCJhkepNTHD1J6Mskr2Y8gezcoRDfx48CNFMDQJ62rGGvTkbif64A1DKNi6VoLXNmK",
  "key6": "43N1Y16AVZ6kekCsMzqCeCkPUZKVAYGaw4WV2cfaVJP9HrcgXYeqDPT1n4kKtch1vUMKkhBeKrPRsUk2pdQkR8Sm",
  "key7": "3sXzRsGSNAhiq8GPBZfmxeTLwFhh3tPRqMoDCjyKAbXLJoJ18zYBEac4BiPZWrEeEEzxvHUQLuH8JCkD7Gu58bxb",
  "key8": "5GyhHoLAfBzLaZPwMns5gYZqDauiTqKCMgxGbGpNpNAB6kbqwks69TrwLpjDVMypoP57ino6xmSrCSzP9re8J7zK",
  "key9": "2gTrSZo5HUQTDPkxhdtYpSfi6gHv1da2PUYJhLhzmeNJqX3ZknfNqRbQoA7MsoZWx1xCKpuoeuF5uCourUrgA9vu",
  "key10": "286z2wuAKwWurxT3k9f2cRwK6cpr4hAD1UwecJcTQdtvsRw4pnb3hoLFG9GutAkqUhrNoWXKKshhNV8aReqfSqhQ",
  "key11": "3L6JehXxKwqyxFPWHz561dKxyGpBPuxGaP4qopwuNLRjirEJDdAoXP8YGjxMd2P5DibEnbmXDufPxeuf1n7uSGPS",
  "key12": "3rPbQtY8CQyzXheRVCFci8c6i8g45HnYqpiUvGZMWHsaFb6438cZDdY1ykdqKHeFB2vuwH2hT58kxmCsv2NkFkey",
  "key13": "qr9EpbEy4dpgkBVvW6S2cvC6FiU9FMtouNjnpgHFZXNAhdbAGxGCDn3Xvefg5PuJgvptB3zX5R9zQfAVQtJ9e6i",
  "key14": "3ho3gG7P4tKk9BmjKmG4vG99qBXjHiq4vGRLjZQsY27yBJZqRnmUobHTkFnUAakxSWYYqRWYXUFrinmrNcHyQcjY",
  "key15": "2NHNPRTcpf7RLUj51BET97LqDT5zDmkdcRZwPXi39Lei3jM1xsF4BGhRKxZ7FTZzZKhv83UVepQgrpzNtY75DDvs",
  "key16": "2yqivFVd8itKfK5LPZHftxbwJfDtGAMPWDSRP9MtZQk8bXF3HzhZwikDyYkgLAf34BoXhF1MHaNpq5wkwVU8G72z",
  "key17": "24s7BHfdETn8UGExAogYe1bJsbXH7YaMsfyV1BeNEFNjjARDV85UdtGD4PokETtthDveZX2X4mgQuX1y86nLdXGa",
  "key18": "22gmNvta7SYYNJn2n4N1QuBTAdwjc95ppqMUwbNA8ufdvtb5VhncusSxsQ6Cx7YpSaMfJvxbvjc1mP1JKyMqH22Z",
  "key19": "2NoAR57L4XvtNyiCAHGbdFnEzj4nNcvZpcqNMEwAPLYrwyNqNAtsupAjj9ZUJTvdes3TcuSNXXtdXzG5tTfVsP5J",
  "key20": "66MxnLdyg1Zxm5nvP1D29zseSqTQgGLFvpXNESwyvthCEh76zdDcxcM8S5yfwQh9nryCJmru27uaP7arPrDZM2wR",
  "key21": "q97ksHUBJmPesENTtKTHqraobryXMk3XvZ6XGoG4UvEfqFAMePV5dFcTjk2QjAhYy5CYkfrGYHuquBi2SGr5YCR",
  "key22": "3kCqdHzmnbovoEH4wGSopMmQQbdpkw8c4ppXSha7wvoCEjwz3GQzExWLqWEazrHoeRtER9SnFSepypKKCYQRcWEK",
  "key23": "ZR2YdtNagn4cJBUF7EWqi56zSSXPcFnci95FDDVWYnvSkkkbFqagnNdJM8jp3TgCACcKCiKXcCoHomMdbzduy2A",
  "key24": "2TkaSxvuaBW7b68Rf45sTeYJ5mYptosqgv219kbVx3fskeQ4DEknoowQ2y3C2TQJGficLMJjLdndhAWw9a23Xajd",
  "key25": "61nhyy35UGYfKLWuSghf85UuB5TeLyRFMaThbsaMHPp3gLuWBZ15PCJZgmpusZakef3dyxr3UaJ9GjmwfsWu2TTi",
  "key26": "3Qq1jjZ8UvriPhaMNsrgfabVHph2vjs4wKXqcwK6fHFwnr4i5cNQ7MH46FAcpRCKFJXZJT6AHmRQLtM753cp7Kw9",
  "key27": "5moyUx9Rs5BRQiPFQSWWS749mYeY6TqxSktfjwETpw8MWhzMMJSsnpACpDL6VFZGteByKCj9uwaLuWg5zPA1vtws",
  "key28": "5oSSXK4ixGbs5RcXeK55Mdje3bZVqtdsg2qQpPvrDUZZi1TvWx8dACcYtrvaafdvenPFT64tb4k3LuZuEVH4jgo3",
  "key29": "mvwNuhKmNQHseHq5AfLV4XevMUDo3cK6yhDMz5WwyrBprmdFioFjH833osZrfoYodL4zhE811FZiZ5DHsERC89E",
  "key30": "41X2g3qeLDCyVC7SizwX95nc94Z3dGizt3nGF8zBUA5KqJwVGX411YP2vETedxpJv87ipkdeiBoaWYf1V95hhngq",
  "key31": "4uYpG4LVZj3xfbsUpPQRHUYHKf1XbcBtjQnjyNdskuzcePJ6wrx2PoXs44hLEou7ofJFHxQpBBgY9TbUsp5rVMuX",
  "key32": "4gYTG63uyN3ukaUQ8p8tcq583u6C5whL2YMWo6fxLoU6m1F9ESWqGi6K7pW1xjWea3Wb32TzqNb8bbMMi2FAFdAq",
  "key33": "3iRMT7pizyt1XhJnD96AVUxeVtKHYXAgLVJSJ2QdLJeeZunGkXCEaobnSXMPPvFGz2j3rFMR9dLquZZosEHgneS7",
  "key34": "7iuuMdmVDVifMhGTZ75fzFb7xotU6DQkWFPZEf2SKkByJbRwGy12EWiSXMg3JpjY229fGcpCoSiqfMdr6HdA2UC",
  "key35": "3j2U7dmi5EJeozTQq7L7jHoJRXokzzg78b9LDXegkXZJ6cangaPUHJngPXusqBETuRBbJy1DoMcuYHgt88QHosZJ",
  "key36": "48oK1yr1mrPVcXADFGvCJK5pQvqct8fwTZZsnYTENFeVed5yp8oc3ksdjCSn9r9QH7bb1EB8d1fDkNvWvmu4217B",
  "key37": "3HssLqAXfDiD64QDDDJoDzQwj9Ss2QvMACVq9dwHi7nKwiSTcjZ161GTSCktDUGKLPR5jTwXhdaHehStThE4s8F3",
  "key38": "3AyKuusomfL7G2DWrXgDytUDpQEFw4LsXRujtWCiDjM7ihVZgJJcYpiXaZpQAdfUK3s8Qh3mnhdB7o8bxUKr2R6k",
  "key39": "67rTgGzjBv2KCGq3oVE4MHRShskPf5p4tjBaKe261kj8SXJohHtw1pxMwgfas4etE7ghJ541npGMDeZHzBbmnc8j",
  "key40": "5dCEn5AopKj8PjWsTAbBKqBcvVKGRz7EpXTJnhJYKN1B3oNiwL4wxCC75YRohe4yZUb7RhJHTJjoUCYfJ9FVWwcc"
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
