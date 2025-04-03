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
    "2cvRe2Ld5QSugtd51GZrBPDjNRdbFJinhoeT813JBgVb6ur7Lh65UqfAojkB8Ct5duvdQA4s2Anhq4NP3QHfM94a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "228iTYETt96S33ZA6UoE4mm5jQTowMe9tFvZBXHsw9HwENTk5woKJw26d3mFGRBhgAXui55dKzTV5uyj4XDnPD4Q",
  "key1": "2C1WYAoRbSJ6EFUgn3XAmfzRf8f2WCYLFNDa6bB3zYLshktJS5dpqo3KKPMDbjhRygSkTBDV7VF4n6FNUkgyRSp3",
  "key2": "2WBcaVicN1rDN1v8fd7UGY4YaLdJW3E4gqCr687Z7Y1DmWjqFpRyfZrvmt3nZWMZaQSAxFqgDegEkHeeuYqrogAR",
  "key3": "624wG6ifMoLdmJiaPpQAwppyyGFrtd7oASbwX3ivsJPafgw9PeqDteQ9FW1NxcX9ueSp5YuUgkWQWV8qmvtfRqS2",
  "key4": "qruCNiSvEcaNPh2pSAVwA9PTiMDXhaihd44pBy4PwTKuC6AL2cRfq9zakAyQeVeFVEYic9VY4X723htqgo9U9db",
  "key5": "5EhL3gT6EiSBQcNCtYWQeyLT1UDSfFLvZst1G6YHYK6UW66TuyuUhbTjgUTqXgiUivny8251P1vhCoKtrucaqMs5",
  "key6": "fwSXXXcVFa1S6F7XNdZBo5NivrAcSkUEdg5tJhKTLtHsiE5H7Mb3y4GCVyfpVF9jui8opGmPYM99Cpo6HamjkFH",
  "key7": "2J84qjwFNc5oQvWpMid1bfRxd4EhXD5ESRQwcv3XXakF1frG9ZfauVsVGFgw5sqhuaCnk7wZq89BBLBqgzbiV86u",
  "key8": "63rtNz6W9QLEY593KvdVTf7QhaHFxwzaNNQ6NhTTng1AUpi3NVDZVJyA5UzdtMgdM2zSTc6JyyAsgvgqLVUk6E5u",
  "key9": "4fqEv4Cv2k7ynn9DKybXmfGvHPT4L9rKAzA4C8Gjb4zfmbP4u26KvmL3yAumBDiMdDebY7Y4JFoR1nNYjZntm1At",
  "key10": "4ykGCT9G6bAZJpbpC3fmEKkpdWEY5fLqbX8DbtihqTMZR7Ga6henwKKsW8G6QZQ6dWALwgfuYeq6rN5XfGsgCE4f",
  "key11": "7bZriJnYLufKpCEWTv1b3dzK9RPHLfShH2ivp7JL56BUjLBwhZCjfwyerMUtc9hJ9BXeXzznzMeqLEFfxc5KiBB",
  "key12": "41igBEGinKcRnQCxR7bZ9U5Lc899P3AWEnmpfyunUMJyNFzc8ewzkFZtgqZ1APqDhY7MLbfqJomPMzXv5qZbF1W4",
  "key13": "2BbcFw2utdDTktxT8wUChQgzGj3MJJK66UKUoRADLGYWz6mGUet2ow4PpR4g7wkTrMKquJd7m4EXRAPVqVRjNVKE",
  "key14": "5dwH2FPeqa5n2DyWLDff814QdUUqcmquzUK37wUi2wFALWdQ3X5Qs7pZSAXkD52Qs4pZ4VLd1eUTEH8TPc3upv3P",
  "key15": "2UQVKgPQWcp1YeqkCVnS12tMhHBGoTiQp1VD9VPFUN7Gk8NwxtXNiP74bfVbsKz8BfcV1jnv9qaH2YuyYBsuGVub",
  "key16": "4PPopisuEVTuALfwET4gsyqWAJHxGiGV8PgUqJYT36HryQhr4rSy5Dc6FrDBt5NR85dYC5Qa4bCYHNwwqbRkXWXv",
  "key17": "tj6Y2wUPQH7mfwwvLnCw1Dnu1mLB199rqEZVf6wZ5PrKGrw7iHTkEaFxsJPHnJdL92tTnLGgmtV98mDGUe23HYZ",
  "key18": "3NETrGP513N7DhAVkP33TdSYdaoKMZVy1axPRMwdEBGbpJ4AxnRkjUh84HRxmNcxAWV4cFYxCAL7P2ukam7wwPQX",
  "key19": "SCCgP9N9hWv1yJrWrFAKJkjbqSGnvnnKxc9rYUxppx3gUSeYDTvcUH7frMPyacfGV6pkdgrMMSDpXj2SWgq7DeH",
  "key20": "4RjB1QRQLi4KTnaTa4w8vmYg79QW4R8AkuycG1dNrPWH1HLbZVtqdrnXxUC2VkRCWvHPxWMfkm5SQtio5pWhWg29",
  "key21": "3FtpXuKup2Z9kG42iQz5518TxZgfcLdcbyMrJWQCyRuzsqUSKxnnZSPKMc4xVBKJp2r354f769u4ukNY2JZA5LUN",
  "key22": "5PfeLH8Fjsngd7qwsipFTHgaXcurz3nZjUHqyC6cYgrDzNcz16eBY1gLosJns4TGmQ8V73zgRiekoodE1LNeSjAJ",
  "key23": "222ndGNkSvXdWbfHJ8TnHoWEMqsYxXSoBoxvvF1uzoZidxMfMESFMa6aDyj1QtjAG3mEgP7rCuyCa3M5bsWusNt1",
  "key24": "tX24ehtHpxJGQp8AkCs9RFaM1jqfoNNugHtKpcEMf957yvUnisJkyVRLt9AyDfoLft1zhYYb29Uo2VyBeoKG5LR",
  "key25": "r3a2SzQiGTUvxWHuuCx8Dnermii2AQmoVRf5Rqx1EWFrfscMKvBJaXZWDXfFsqqoUcE1ePb7bRNSJvBw73Gyyvh",
  "key26": "MwzyHw1etXUu22qWyhiqSzCAADjzi6egPU5gJ282PaHhMFr8PadkmuZASZuRvwJfkbW2GEKtWmoE2hMoqZ8Ju8K",
  "key27": "b5RNHHDTk4oNrSdcoXwsTCZV9gGBhhkLg5DEHUHFZoJqxN86Ub4igPJMBnifTVYvbCRZrLq7b6b6xY7jS242ALV",
  "key28": "46CGLfic8g1ejEyZGZjh26MbHYQsfJXdhMzTEUq4mrcLB869ds72a9hkDdYMKXG1pSkL5gFbLcmhLyqevEaFfQFc",
  "key29": "524V1DWgWkRjSgp8wR6nChY8sroeRjRUeNjKnhrFkyYx1vf4HXfifn4MBabdS2tv1zZhznEV9MwbZhBqvwLyjSFR",
  "key30": "RaYagP942HVHJ4jizNVuvV41QKdwFquAzztoNXQCUnUUAAsiGfFyTK3TMd3cMbLWVJgyh3TLXZCB7ceUDCphP18",
  "key31": "5sVaKcMuWUAsm859V1kw9AxTf1wJ6qfFbmRf5yfNsLgcy1RnUVT6ZpfATyinwGVUN1KvALrtg9A6EmmSV5Lido9c",
  "key32": "EY9WkBqavDDD9icrKX7GV2NU6WXYBJaL7BLXSuhFPj65bTKN3XfVFcN2pnL6pnafhunqE2VCgnVfQXRiRKdgvpJ",
  "key33": "jFD5u1GdB2p19HuMCvVRcSVJojitoafDqJYvMfJVW7e6QveJwsD18r89RMyb6qsiBBVNbTU78JhJkxdJUXx2dBo",
  "key34": "4vRE81DaaoenGLjSExDkm9WWprvrVeGT2xqXiDaYRHQpF1n9U4JkHsF7ELTS6dLgmWvCewq66E18jTC34BNV7LJv",
  "key35": "3DT9zro8tNdL4WxB2njmyo6gvY8ec3TWy4UMXh6cmiBqVkTSz7ir6XiE61ASLY8Zn33mwAVwRiV43h1SoogTkt8v",
  "key36": "3simzqA3mZCYpTAm7s5uqQHPRP7pN4wGrdUY5S1AXwuX5Pqy6PF5mfNMMz9iPNEXTJk6n8MXnjH5Tqmk1CxjFmiD",
  "key37": "4D57Yjy6ignZM5J1p3a5XWKtGqyrmh5hb566wHrAzLdyfL6V57jsN467WtWJQZ75KTm4EcH5QY4v3Pq2dNAa8GH",
  "key38": "3v59zP8knE5iegKP1iWsNwQA5szvUEdS9eenbU8ddsqQ7EQDtUuMBQP9nmMEJVs4UDDKe6xyjPYtkcuMj9wN337M",
  "key39": "2Vsv5NvdqDPPo39TMVaATiHYZ83pu4j2tvZTjEz11UwsP7tYfC7hTA6XzHo4sNWDmnJkbsVpiqXTSLGwQctXeGvN",
  "key40": "5ysTeLjrP5gDVVnK3JTnnpNdTc1gyDAzXMms6py4MyNrLa8Fp5aUta2bduB2365ggrCJMHHcKJgiksKnF5GBGpwT",
  "key41": "4pTmDYNSfVWkZehvuZ2bmMjnJcphfAG9tbD435ToVGmDeJtUTBPyMCuZpfM3R2g8kiAV9Lm7LUdyXm2JE2NHPTMs",
  "key42": "4LtY6XNidtwHiCZYirzKys8nthcGny8pRHaSDCE9MQnKzxnMfSrZzpXBRTgwoKMjPKYNdnk7SDTzzGCrsd9s7KmX",
  "key43": "2Sy58SCiuSyvPWZGbNQLKe1qRQCywFfx6TvNj34n9Ai2cg7R9G7gg6CZfMLtq5X5ckDRGj1S39tU2qzXdZzEoNSc",
  "key44": "4ZgnFYFmmTKNapxZB6H1kyGbXP2nN69daADveYNjnPnMmvwNCmzy6gQcCC5Ss8Hji7XEZj9zZptNWCrdvewyN51d",
  "key45": "j7c7KFs3Uk7jwTKsJgTGBunQ1n45LaDessAG8ZYZgvSogcmy9GP79hxvwQYusz2HNsmigUSdtgWMXNLikWx3SzY"
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
