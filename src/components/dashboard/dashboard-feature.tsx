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
    "6KcWrkWZA3ederT6qYfhS92SGXyYWLjqTjREyXwyZXbnghdyR7znh6JwYP3VoqFsR5hgWLcp5exz1bdvmMhYUDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDhLawr8JU45K67rs1b4vZUG6pfM6V66UPw7e6STZuzVu8socLWtXLAxrGNQkJXBQM12JEM3inzsxKa3SZJY2ou",
  "key1": "46sEwYjF3VNNaRmN28xcVLFtewKe1K3nK8jQBp2NVESSCaSLADNimobpRM26sTVD4Pazg7i2JewCzLL8gvBGf9Dh",
  "key2": "MYXggUw1MrKS7vTnjiCVVdER85idtNv67CX9xjeDA583LnCV2cbbHyZPZwETQM7MrwML1fgQoNjDMY7dzTyjCFz",
  "key3": "3k3HmEgtnwdRiw93DYVcfZn5KkozSzu5ng6C8SGRDvqnz9u15oDgAb9ruBAvwf1LaBb9u9zYh4PMJUwJ2XDLNLoG",
  "key4": "3zaWcdU3zmia5dWA4AKN2GAx1ynqBjc5tRSViyEVfRBy9EFN4CJHQpHwwFJQieb1cLyrQzzahikbmp2CYWL5YYVg",
  "key5": "3hM4HBtEpkNmaztpwuZqGAjiUgFMfH1hRmBP97R7xcxj2Rb6rVpniK8abg25nxgJtV1osd2dUXQaMKddnLmVmftw",
  "key6": "2Wa5eHraGskf8fXkYoAGEydy5QDL5af1KwXXPyjryAWawdLKbn6GhiLmq8VWiNsTdPknB9HZDrFuzVmakKQXx3Vd",
  "key7": "5SFeuBr1sM2JBK36Mh8CrXpUb74MV5ygdNL5TvSAGrPm9dZ2AEXRZJjWtPnHqQvViaGeMer8aRAnAV2bkDDkZfts",
  "key8": "3MvwMZxU3CrMRqSjPyg7hdZDPaAiJuTGgsxgt1qmks1W8NCJHnPKxLymsYULMauQ8ExacUZjFPeJpM75AcHJA6f8",
  "key9": "2gNUt8dtfdBTFinPaDsrsTN8WWFz1Qf3iELD99uC3NYKGQbTNmCQiq99yLKyJ1YfLsmM77WkeDf4BXDGA1hx1YEs",
  "key10": "3rf1AT8BGFbvXMw2pY2J75PRJw4WsDVRKDXhxE1Mjz4bykZdmCeMUbbXaQ1WTny9bho1qLeV26RFXWkbJMd3Ha6K",
  "key11": "28uxhBP31WzWp67XJD8rsiqkKjVHQWLfwKPSY9fiMRbKwgUFFn4hbU1kBQUySCXnrkJoAGwPC6XLNzuNorEhoyE5",
  "key12": "5yiNwTwVdYfdgYhcK6X25MdGKL2izum7iA9jk67GUFXZQijaLarRM8dz2qqn5ae8KU3G8NpxNgRi3m5fHY4VuASf",
  "key13": "mvpaEKjHqsQUkQPZkkonfXLa76tyBsotvQa5i2aw8aGCjLCZY8aicyBJxdzdJhe6BX16pTQSeuWiDAzn2d7HbEs",
  "key14": "4CzmBeb5JkqdCmB8LPhBcjNjnsa6yUXQbR3PWgFJw4Bizh3p6nw4HvR2cQCk7AtKBsJ9hNnfeaqnD9QdbZtwVUPJ",
  "key15": "mQ7EsmiPm58xzdgAx8xWZiLF8pUi2n9RVVrGVYNfK4quEZXAiW7k4QnudPepfbLiLXwk8WJsf3G9DYHVep9JhQ1",
  "key16": "66pUp2qfpxbnMJFhWoZXHXUbBFK2hB7RqLBbi7LGDEKXWmDqGZ5vz5phzAyvHvdpmF2MT1k7zJva2gZ4UqowmqDk",
  "key17": "zWfaGkfF5PppxuzmMmXFqxsVgTfgJPgu5tzwQSgXsbAYAkHWrNryHqRYvCMKZHz76rBBvECfY5rmqkfHAQ7afVj",
  "key18": "3fCY3aAyz1f4hHS5W5oo8xUNjTgcBhEBbKFpK43dwDV9bSAT5PyZRt23p3orygRrFd4zUpRhxKJzXKAmwnH7rTjS",
  "key19": "5s6MXFHXP5hfArAfqNBKajBjDgXShCJEwsKRDKrdE4ZusYQW2jt9YwA2Wu6RRiwrU8zivvYgKZvBsm6AJ5hs5tMS",
  "key20": "5naRVSSsk321aXphvCovrq4Ap7SSAoTqSUJnhPbyTo2NK6iRq3vfivxh3wwb47tGRGQSQ6p49Y8HGUpZmqdz9eKR",
  "key21": "k272CQt7X6njAQuGrCiq16xLNkWQWLnLQKDUMPG1KCvedZFZCTtukZ3JUNzB6kT4BrVXTmw6kZVKLuD8ASjmZRY",
  "key22": "4vqVR74NXw34s8dWRkj8XQ9pFspfkEVYTaBiw3fWrUTFDKf2EwQjDqTVDPdu43Q8JxA8wcLmUabg3KFH85CJTfRS",
  "key23": "KpjHkJvNZhh2svVFFNBRagQQEC7EnrQKivfAp49wETPK2zoMyNooNcGY6xVVGgPogTP9DpsbfxtxTKau9W6Zhm9",
  "key24": "4RX2R8Djc2ac2YAB23jPQWsacBNWLkYpGd4mLuzmr2J9TaVUJkYDYfDKeBrYDZktyYzh9Zo8ATQARVqJrtwBKJBr",
  "key25": "esbVzAXHDS3a7KTnjXwE9BDeTzgWYnoECMQ454Mw83oArK4SjkHYYevcYQqjDYxKDSetaZwvBgNkRdmTYQtvHcd",
  "key26": "2wrtFhYj9zoqYi8sZ1cAwuLi61mnmcozVUNbbYYCQKdBujRBV8FDLvvkdrKvhTGe5wxpMBFZkzB8nBDuQGwDP91s",
  "key27": "FDBNZanASXMx36DxhHKXeTcyeb1n9uGD5G8mnDpFHNQ43wMbQKrQxzSYWRhEJS4TLhEA9kLZPc8tJMpLZ6yoUtW",
  "key28": "5L1iWPVBVjPhy5Rgs6tYEbmxKwc4j8PpjX74nfz5EHcMG6NuQVwBbArSRi7bPwXrHvKu6qSn8xdK9EQ5rUtoiUNd",
  "key29": "2jmJdHzqdQjkdPeVQhxTZKeVe7Ud1YiN1SGHQsksyV7Pvu5jLsN75hpyeX6aFhpDiGYYki2s2yuvocQeCBpqjv5t",
  "key30": "4FEBBX2AVzMvH3hS9oD7z3y1D3WAKGJjkMRedQSdPgCc27h3HF922aqzXeRVe55o4trcDP9EPmPBSxb8do4JhxCU"
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
