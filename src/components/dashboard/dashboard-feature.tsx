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
    "5b1vvnDmt15DysH4ss3GV5J4mZ29GKqZ9uz32UFkwmAmigzqFa82nBGSyYGURyZ1h481qAp2ZBqigKYyTeB2eN1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2iBT36Upxo8Ux1o8vBoJoQoNwxLQCpBAHUk1fQdcdxSp57VeWhKhzHnabsMiaNGz9dTJLxiWDvKXYYQqRZVztS",
  "key1": "22ignQK3DhAKE7f6KYB7BviQAFYfhsKCgrvSVSYpfDam4Q4m8X1VBtG1wzz1KrAnvvALEoybrWQLupqRMHGDQc39",
  "key2": "6FThmy8pDvqAc9syJiZ9nQMtJo4jBfrb6H79NZVjZADD5n6DAnRRWKBmpGr7vvBRGZ6ua3SXr5d9WXZaf4TLs2o",
  "key3": "4RieNojeKe6wfH7xii5NGzmQW2JQfPujZ97qjq2mdjRXr6ehx1YYQ5mFM9shKhqwPoyGgNAGY7dR9YtgPRyPoyBV",
  "key4": "3SAiwrbdd6x9xuzb1Cmszq61ccSD8S3KhKjy6YHKsDVXoebZG8GYzgZH33MVpfkusk8wkRSRigcUqu2BhCth6Teu",
  "key5": "61Naa6UZjv5yh4YRVWH4bkeNMWzQyXmVW9uDLMEwL2swRHLS9dLi9htqQ1HbQtpFD8AaRuJhFLpKG675qrNj5omt",
  "key6": "3SVU5QzTnpRvf3aVbFLdQD24uYKXxbpCAyuEzKjwpCiWpr4q6h8LZBPjiGNdbQV3BNpfxSrKw78iHGcp1vdWYdxe",
  "key7": "5gr8ZjdhLANK1VAXEAyCFrgzfZdffdRZGYbXhChmKqgEJukexMS1f2c5UTND89MkCJpNXJ28D7m231pwCHwZrUKn",
  "key8": "2yJZz1UVEyRKJjnRgfncVkMZRsywFJ74cUjh41hsbLC7d34qYBWmN4KRq7TiDmjvTZpHngr4GL4vHcHQaYeXifa3",
  "key9": "5NWxznyCmnUqPsKjwRKfToRKiSV8RtE5GGmf91QbfDkVSr787kcVnMY36Ec1MD8aBJ7ubSg9yXX2hBCBKGMMGxeB",
  "key10": "3jcZmxXMTHUh1AVxnCjoFqsWxyppTcPDAdhNMbr755SgoAMWTj1RyzsxrMu12gqeTDDf1snfxYwKm9Nucog7woma",
  "key11": "2agzsXi9gaffhg94N1fLt1RavnVKACJCB4HLyh6m24GAKf7RbCL3f7ExSL3EKjzfio9P2gQtKzXweBfy6YWkqgsC",
  "key12": "4EWe78WJb4nkm9Gxvr5ktraEmT863yh6ywdkUnNgRj4yJDMy1rpWeaJ3GVBCvukEZVQpuhNqCXVYniWsugmEYAEQ",
  "key13": "3GyVe1oiP6J9HBQrgDGtoPAoFas4bwLNyhFpDxpxLikCABhuG55mzu85RbAZqqpL8PD3dx8jyAveX1zYm391Qt4z",
  "key14": "gzCkXb37CTZYSgewAva6LMw83ezPAxZ5duHkhRUpwMC4weUiLgPxSj2hEVBaD4MP43jm75H9RmVwkhVHATkHRWA",
  "key15": "3EDSwB1SjXgxCey1expznCStnJwPkFvdREa5FfSxFqstDUDa24Ec3RuBnfdEECAxA5FvyDorXvVMTyYrwdPCEu8H",
  "key16": "3tnAHqxkgMNjvGZEURY7XhVasRhajmiFMyZnYoeuZo41SqBQqBxBo16Tn5xwG9X7Yiuc1pbvU74apGkRcAp8AqXX",
  "key17": "28NaVSxrK4pbK8zkTSt6TXXRLST7fiLAVovMNX9mV86A2b5YYfWfHkBTBAXDtLm1PgvQ1skeSeMqUUMtSmPii2JK",
  "key18": "23SyzUxNABXXbuYs1A3co6TmC4MvHF3bKpnwKRrzYUf9CqhujYJYqQW4fafYgEayjk3f93pRA7fxJjN9BwhXiEK3",
  "key19": "5MvGeo3dbVQGJbtPo7CuFCmTssG5sVF3Qb62bQexSBkuShmUMb6SGw3BUjnmsG8FVBJSvgjE5j5SiT1YvP31yhbV",
  "key20": "5VRJccHVX67Ak81mT7ctwoQpf8AJdd4sf51ACCtNMV17M4saz9zRcnbFvwk8egqEfk1A2s2h9kuv5ZFAwjxUBCGa",
  "key21": "4a93RZfHUCQZC52mouzVwbQMC8eXrCmkYDrBVmLYZ43wNNycUQSP2N3NVu8wx4JL7gxamB8Aa2qQrUUQBEgPhJUR",
  "key22": "2piiyPSnP4vbXjtGZLxk1gSSeauwM55EFT3BsQWwahoRM8puTsEfWhvcVyVppTBj36Ve7BCTLMuqRhfCo8FYu7sE",
  "key23": "njPqAfKpLtB9hZWeKvKTvTCG2xumfBnn3Z4to1N3osLvdjaKnLAgpYxCaCfA9LvwJSQ9ggMGGP2NiBuQbBgLstp",
  "key24": "3mmfWuFL6gPMXACoJGTv5jsr9ZFsu8ZjHmy4jmXUKGr3nsvH5NLyTQ84Ye3TMrh3JXLX4E6ae7Dh6BEwLyiT2Xt7",
  "key25": "5NYDaYGLsKpwDvRjicCnMFpL2f3gjv95w7t5CCoSPrU92r8BJ4vZjetPLTGVbfb3n4FLsdrwrtqL8SRy1Hu3u12n",
  "key26": "4LBtSs2F2c1jsKxRAaL8MtoMMUt2BZmkfnPFeQauhPgfBvqLbMPqnhzxUZrtZ581ivaii9MS3i5fBxNtqSA7zfNM",
  "key27": "4FfUH5waDHtDiGT2tA6i19NL7LUEorXJH5S6gPtHWfRGcxanzsoYQP8WhPjkExgTcGYyutBPtQfRxdvXaRxgppyy",
  "key28": "228RQoJkjB5g6iv8kccFGR8mbSvqoDMXPhNKCqhs4AU2UbXWzNda1AbVbKcq4wfACAbRrr2jiVzpDFmQceff85dR",
  "key29": "3QVbnN94mei4XjD2m1NYVh2xN73e8VouTFqM8eKzJc4uC7v7nvu4Py2hVqvC26kGNW27dE2QTPr6rzbsgZ72Dweh",
  "key30": "55sGchRMFna5zN3jeUcvKgyB4bTSaFrN6qF4etNcBNABNHhYLx1pjVYB9BJKuzapPgbfDm3gdHxDedfrXhFShwjf",
  "key31": "4xopQeMd6eofVK8tCZvy4WPk9Uy1Jy119dp9gfMiZbbMBr1g18H6QkJxTVRE2ukDXcma923hF7ASZ8ZUfXVJvhPp",
  "key32": "2F9H1aygYcTdKQ7TnEK7g8n5yiSiyBVu2jBD8EAoKNLuKRYRxhvjMixGLZU1Sy8M4TEwmNHebYnUWRgeSV1zCypN",
  "key33": "5KbF3JLr7wKC8SbbuQcRSp4CAwMaYhkEJ323yjuBvtyesK4fExeZ7h2ynAiz76eW2nLz9btEaHb5AoiGr9nNQm2e",
  "key34": "wntdWBNhnVEm3x5sdSKUtk94xvp1Wp8PSyL8wQ31GFXKVhjbAtM17wXoRwRaympPJu1aDyTMzDoWKTm9zhXmhLD",
  "key35": "2xjzBSFRsJAir6G6JSMKccv4bVuaWtMXTUVMKXsKaNZNUczP259LcA16zPtbmdYqQ7WSxLf7CYY1BYNA5oi8E1xG"
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
