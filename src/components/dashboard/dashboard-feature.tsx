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
    "bTTSNxnbWfFXkyNRcefa6sjbM65Mcd8EQQiskFy3umPjAGH3zL2zw6o1i6EGha83zqtf1o3TUGGnM4MqPdwa1uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcz5TzX179tb5wz9iKNNHwJ93VNYKqcWcKhtLkefvx4v8RNbpqxHwwdosLsxfNRwvnUS1ayquNqaeR6VGgigLQQ",
  "key1": "3UAodWZWoufJmW9Cgc56z9yuuHCgvaTVPV55vggzRk3goeNVo9VkkQRdULYwJGS1Ar1U226RHRecEYdrwuckP5cr",
  "key2": "121D8vWyxjnBmmMhfGFUcL5yvmCrFhdyzUZr21HEpmJVvjyZNsL586HZBHPX1KZqej2m32rgwb2qaGGfDmwxR4f5",
  "key3": "4As6ypAWWHrVzChENixXpbTiThAaz6m8SaTrrSvHmhdhVVX52XHMnf6TwbcEJHKAdb53uDjy1h8qvCF1z65BikTw",
  "key4": "5NDeupFmw4CqyJRSXivSh3YzWpXXgX2DTPCsW6LT9hq6aYFsdXETqsjCY6Lso52Gdi8rh1YLcZBwnkzHcgev87ye",
  "key5": "RLF7g6H6eXDknG7rqok4AsstufE7XrYWLMt6aJbaxwZcPCpiaKGEUgFaJX4LNmsRsGTmkTVU2w19HnNC8ZEENC1",
  "key6": "3PeBpkwTPmkimqorW6r7cusraGbSZooCGszFQk6tDH8rjmq4rGXHjsRUBYg235km2ZKRKrKeASb43Gc76NrCoHxg",
  "key7": "5osoFvnJr9kgsiPEbVQDTDFWYsNaa1EPze91ZWdLeoSntvhrdPqCLhVT2qKWxhEwzuKQ3FE1UcsKSGYt4FwZEkrr",
  "key8": "T5E5BWnBCGEwT1V3CcPtBNBKiwW7vLbwCBLpA8qY2Z5CfSU4QEjJUhL4AtN3gLwmmpDdvamPURq6m9Ua56avaHB",
  "key9": "4WEhahyJa7m5fbrFumfqD41Me2C5vcvhNAUgBFmwBM2yJf7rxF8bES1r3QgSxZkfSwDpKPiMBXpky3HqMiRrfzjy",
  "key10": "3tsmszq29QVBo19JHHQwmosUMmAnFdAN3hAihJgtqkip1SgkDr2aypAC6hezCpb4yWp7MSNS1TcNtMp5DeAUqrWL",
  "key11": "4XFyNwuAQyL1wsXvcgGzDd7oQ1dzBoZjnRR6Ef6Htn3oNpNwLfbRASoEBodN2uA35832ouKancXbBQBwdBRiF6Me",
  "key12": "3atAaKh52Ygb5so29c1vK5ATvXWxUrBzVA3Ebs2eXTc3Vw8Ax4Sxpk4MEQKMeEsertptER8xG67GhAzJR1SkN57Y",
  "key13": "49GdhZPzKPBFyQ7t3nKoqecSVUr8PbQBPEjdPqzRsEijqcXC1fCxb2k4T2EMrUr8YNFyZskk1VBB9maNMP3sni3E",
  "key14": "2718x81gFkY71oTd9Sw73UixR1Xz4GXss89c5yK8eFNkYQdh26erNKS4pKCpwR5Vxf9mB8njSrsV2MWTHKG6UTFM",
  "key15": "2rqfhQbHboDcjVPNeziEYL9K6KErq1pNHKj6PP4cjipPPeXgosQz7gEWRyAu81s1cGv19QPtbLjEVFDLMG9Vgszt",
  "key16": "HByRBdGBiRj5aj9qFFxGhgygZLP4HaNEQkhj93wHG5cwMoAmK6YZ91pWyCZpziVTgkYiDTkoTK7DkLiYjUQTeV9",
  "key17": "2QBycL7XJgcX3QCbEEUHvkW8yWNeFqsxHYe8Dkn1oMY45LM7TbFXkQyZxVV8Vh2s8pWymmff9k8ztmBAvDJD9qXt",
  "key18": "5jj6KM8W8naxoyV63qokKHqf5fpkHP9ck3hjvFBEZTTurbq5pXPd8MNJsj1S58fD2oaQ86Ddx5qi5dhHnyAQ9iXf",
  "key19": "5tj3Q5GMnFrdfvZ7y966MN49y16WoKw5GJdKFatYUYqKNhFeLGqmjQSq9HP7sJaSc8kgszFFAF4iL9ZigVjbRms7",
  "key20": "HmASgVwb7VEVjJLpV7Gj9uQY98wC4CMxcmkwT64xXKTVAALbF5BFqFZMHsfjD7zdv4N1mi95dqzPALGHM7Zy4qn",
  "key21": "mb9Y7rVMShZiKc7VeHkWZc424AoFi6DqXv5jnxUi9jRVwWzE5ThNMnAodWujGoNq1iaoEDfREaDXuW2j44xp4Aw",
  "key22": "5tK7NjWvUouxQeooe1PVLrQMQFRAwobvqGjXgmF7E3ZbFx9ib3eVZuesteGg7XwYzMgRbS3tv29Xet113oVL643s",
  "key23": "4USZrLi2xGJUxjffyHXG3Ewyu8sUMoeySWwiHGoLjK7ppsD7GziJVBuNkLgpCLRPfDNDrnTWSqgyn7SJVaGgYQrx",
  "key24": "45J4TLoqvyiQJavCMR2vNyXjX4oqSTigwktyivTk9BkutLMWAr4UVa17T1Bvs3ntPTCiMBXMwW9KAzjxM7KqAtVd",
  "key25": "3MCwvb9GM6S6oRVa3agtZvhrBAaNiM8rgTJcmQedBeygErah1kz4mRwWpXXckfSe481aBm72eRQ19s1Svcss52Y9",
  "key26": "X9QAbh2WjhrKZ3pBH45u6rc55thLN8mE89i3Adrc1kDYbi2UwUjFUj2Ei4SYhzJobQANijdVj1ijzLu47YrWuSv",
  "key27": "HuFgvs8k9CeSUApFU1432wpdercLV6cU8etsXXaivNdBYi2my9puZrY9enJcZZ4h7i9vidBttGKQ3QoSypJ9N7s",
  "key28": "2tr3r7U85731MXfSYWNKwnfLBHxZ7eyqbg1rT4K9HWYj63x1tb2HnzKDFkpAjWWKQDGXj6y4oXUYjpm89fVnpk52",
  "key29": "3spLUr6GBiHCF9qgkzxXRVEgcZTq3DdeEUuqawFJz85JCLvGZjp4qpupCeVs75JtyXyk28RMxWgiYppXYxwQECnh",
  "key30": "5ydC3UBrysFaSv1Dz4rMyWUqjDetJEkP9om9No6r2FcvHGKE5VZV2z8Qdgyxq7MpTsJbMriYSBMZit9MvuzCs3BV",
  "key31": "fwkZN4yLMhaw8P1r9tjq3BY8GXfsvZuvFNiG36eGGPEtG4psF97WRXXzdtemozLaSg3HRZAXjRoQtHGHjr5LUS4",
  "key32": "5n8aWFaffT6jRPR5JWkbSeGHY19KxANrEPQsgFbwhySQHLV7r51AVxrpvaZv654LkCvtSWALpA4dhJNzaJHzEe4Q",
  "key33": "2jtKnS7pwA9ZYAh841WkhwixXXhyUyJyT7LBFitYfckxyX2SZC6cCq7km7j4RX3CzXvkAdSXCTiEsPYPLn7Pn439",
  "key34": "3e67esG6U5UrUC2Si4jp9mPFABQsCpkqJWSHaC47hbVEMVqAQJqRLJmeR1CPj5DLmWAXvWCYwN8K4tF5R1WUe5Dp",
  "key35": "2A9TuPMpvdPMzjgN595ZsqeXzFWJM6muzoH1KuoqmmJxAXQtR2cyJKeQP2kvhQW3sad45f5xaToZsBcpzum9E9Uh",
  "key36": "LvwuBPQ2GZWN8TbcasbU22enkZ6D9aJa5QyMGVzP8iq9Xo1ihyGqJ6xrTgdmktKVWm3xQhYS4oRtkzBt95kyJ3R",
  "key37": "4XRpS9jP5kE8f3ThHWafX47XNQ56d2HiCzkHMHvdkNuP1uC8y1WGsZr4iMbYsRG4MkE38hsg2nostFHi9A7Q441d",
  "key38": "3N2DzpaExbj8izrrKB87qGfM1xYkzxhGpcbQtY52M5mzGKVAvRDLMsTwtS4WSdSfpk1ktWaUTd2nxcbvqZr7zTN6",
  "key39": "5Qe2yN2iRppNCscBi536khUatWBvRi7xU7oWqEXeuF6BdJT5uCRTT9bDvf8GgwK3R1Jwf496f3Jei1xRmyCWyxh7",
  "key40": "2mhQuTxgYKtehRd5o49hKMzmWstm3GNFhemAkMi64qrKirGCTDmWioRs6hDT4xLWp2BJyXWtYAaDMiJEEHJngm37",
  "key41": "45RGbCUtP7eM77jobnSdARWGBP1vgg4DfVXxExMMco3nXK8apUohBC5WQdhHueoR9qhHcEx7mxAThxMTtja8vRFy",
  "key42": "24UWtN3rU8if94XLk2m2Ceie7D6RYhsKF9VkWbjMZqU7Pz6U8W91wL9VQwDFY31NNWNwf3F4BaQKNci8fPUjqFWX",
  "key43": "55JbY64ubsjiE8obFrqQVyfcCxopJcmaXrAMmEMYpQzGATvxpBG7UvePhxKvLib2rD1M2WmWRioCHJkyfaifTj41",
  "key44": "ay5sbtxPnzYkn7phChKfSUZQbcEwoGxvRUsK6uQbFb16necPExwirHrKE7Hsw2J5BVSp1kF4NZ7cN77N9NLZwCj",
  "key45": "3HXCL5Myxgbt8zfTcWXafMCKGadqcEorft26whkHEEUee3v48toeHrWiexQzbHoLJQ9HoUKxmCHpZWi1Y78TWWrt"
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
