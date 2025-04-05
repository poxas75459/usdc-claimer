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
    "5uMaHb6iRieSeq6Rrf2M2pjVeuNFuAvMwu19iHZQxyAkh3Rc4aE21UV7tmGsuFCt6o4gwu3r6uNWtLnXWKZJ6Eyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64wmhDkwhPbLMr7CK33woerRVLmu1YWV3Shejzrz6wBadoHp9n5TWgH683iF62waa6PNBUgB7RPJmSn8jnDabV9L",
  "key1": "2v9hjk28dKh8HaGjCLGXnaJ8EYbMzaEqq3xYZravUeiGZE5vdV3jXX1igPHx9nRK11BNHnrSMGTbQ3rKcJcRtAWX",
  "key2": "LUcWVgCAKk3DwueGXjHKrNeaqbRo5iw95ozCvZ6pC9TpZerHV6MXhzb94aHXA2se9q94gNy3HZVVz75jBspx73c",
  "key3": "4caAMQxYokFBqhJc3GLwmY8kXRFEdbCJtzLhHzrJArGHoQ6TsP5QPMust6NPkuPVVVQsHpy9sJm3urw7D1wnccjR",
  "key4": "5ahWocQsfz5ujRo3sevZVmb8vMX3i9hrU8PK5Uf9SuQbLuTSLgQ77URiQG8gCWrbiLuCDwob2Cp1ViAGjfBUDcQw",
  "key5": "2Dep1ei3yjwAhJNYHfyEPQ6ykJwWwayhVrHuWG8gWtRp8yCopqKn4T5rdfXSiqLUL39rZR295PkokWfjDotEocuA",
  "key6": "2PhF7Fz1RMNdPTQCrJNM9UMMQnorsVt9vdjbTnVZSnY6HnuepvZe94C5ZSP5Bd2WJrzKj6iKS4pMrrf5VUZ3eRhh",
  "key7": "627KwUPJzPdnBWk6u45VpPDUsvguQHkMpsm5nfHK9QqoLcSVW386sEiyaeNxJaXFBdods1CcbfGJGVATcEDXp73L",
  "key8": "4snvxYEccBJN8z7AjzpW6DQJUHNsQS6yV9iMVqMctB6wsMYaebyUkWHxeTrEvEoBuWNozVMUBvQ4bpG1zfzHxTNS",
  "key9": "2Yn7UwM22jGVRDE4MAGQckxhJYzMzmyEjKL6F4SR7nsXUPWGAmTEM3pBFcDHNTKCVRGC5RSSkrGYUKDa7TT9vGbQ",
  "key10": "3Gmruoe1yjzPsQVdLW8yaBZDFWskuZ7mS1K3EVyvmDo8MuqsrTVTNgrdVKLN9TmRmU9H9dSoV5f1RgWVU6wxy2jf",
  "key11": "4febMNzrfByhMcbNJSFfo9QEFd7GfbnSfWgRibeWF3xpFEQmDZ8q7crfCSM8mzuoC8Fathxwh5XKa3CVrn4tVvT9",
  "key12": "5RuYkkV93u4iZBZ1ggbWcp9jzFvdA5c6LboMEMxyLXuengHNrX4X7qzgFKGvKuh7VUmWVztqkrFrsw2LnPW19Nqd",
  "key13": "51oVzobHDuVp6UrFZrRM17P1w36FV1EgWLLxySBJuwSpNuhH6ke7BySNVZzK3YemM9N5AJDrv6nKmjHrskcdtZN6",
  "key14": "5ZmCe32pDdD3fhGRr8arFvfN6UkEeykopJQm5AfwDDoQsxpjMGixFFyqnhv6mT1mLB8H2XS4zxVE9YoDu6u3Kpyn",
  "key15": "4PU3oAvGcJSQeDKqTvSwB7wnHJ4qGannFQ8ArxtPbsVocnysmj1Qo5qDfTHZd6AfnuwrTzSjosX81RtAmfHmRLpT",
  "key16": "5Y4JZSAVVAiiNbc4koDmMoVgSwYcC6sWf2TiZxmwEsCy6Xpmmxa1mAPZTPn6Uk1SmbV9KUjxWGDWX5gm6p3UpQz3",
  "key17": "59JvrHZug8WrGxfTJJWWUpczQgCr9PkgQqKLmat2gaKuR9yptDcaMPPmPrit3mJSoQUh5CbPVsB8pjnVboBhTRdK",
  "key18": "34qVY33tcUhfbQnPD8DwpuWLdeL7hvhJp6syQLjnGdbMeppxZ68abkuv5Bj477yYwWXkDeqBM1WZzqofqKBu5cg6",
  "key19": "29AUHkA14tvTTheB9YyZYnQxNGYnpffd2Lq6j5d2VD3wM8y47PadDRmY19xD4nCQDaJEuvy6oNfZRkiyR8kUxPjA",
  "key20": "5GqC2m5cGEDEvWgQEKknRab6RLNdywAkeHB3K5w3RmrXBFDmtEw1jwqpmW1tiE1W34CgNoHkyPCuP948sT1onxp9",
  "key21": "29MbcrLFwnCPdUxiCx281azZbyiTV9AKewGCq4BsqURv2XYdejEBWL1Yqj8E4yABF6LDtGsqLTPbPW3swXpVSABo",
  "key22": "244pbLL6iSu7kByg1YsRWedK9F6uSVhRTVXzD8e1PSwAiS5rpXCVhsx51TMLuAXJAXH6KpyGXzbc55sZuUYg81tU",
  "key23": "8rA24iR1rkUGeqpukcerUDvHcLuy1hLvjPnppLg2UvuyQS6CS7PAj1gwonpYWvp8qHRxLyp2148JnZMUeNYhMkd",
  "key24": "5bfHKqxh9DepgTTXDdQVsZrRrq1SKaxDEpnGMb9c61LzFB5i8ysZnHCqpxNtQKDsVRgfK2dm9rbAPnmsA7HFkn1E",
  "key25": "2Ji33ZzZTpNem8WpNxgVjdTymeiK863PuHtU4r1EUqmWEtk5vpM7pzCoVX5eyPftzLsrkm5cD1ner5wavJes3FDG",
  "key26": "2VNLcx3YxX7sQzU9LwwKXMvNTDXuyTWThWbD18tug2JTD82YDsEM2bmLJPUnNi1Q1gJVy5DeNVD5kyZb3SGJbVKR",
  "key27": "5BUTuwmbVpML9JNPeqobbbupGds4snRAoGB7uSvBR21Rja5ypiYMNfqETt7rF6W7PSuYTfkeocdmHtwye3iFPn9q",
  "key28": "5a8KVAjPsNtxmFLdcwsZ2oSQj1J2ZuksgS2zQg8JX5BM2BRcRL7HjmhnSWbgi1ieA6dnPh3Sn1o5GuJPEb3DdLqC",
  "key29": "c5XxoD3QiubS9s4NHnHG3Z9Kw9KZPRmPS6E5exPtn9NRS6f7XuXPLETVxRHmaeHP7xDdoQbFTFMJLso828WYD82",
  "key30": "2AZiJfjPXsjToEnhLgvu6qoYS1GoyMxrwPv2HHc2pDZNXDtuLnxQoE8nAyGVmLxPhrjPQKTW231UY8hruWxZaSkS",
  "key31": "57PCuPKs2YWTpEfyj7rGftLVofJT37DF7Kd22WqAXvzPe7YoGtcXBpHa9iGtRxHHXLQVNF8Mn4HQauU5BZrmcYE9",
  "key32": "2bN3Q5Qi3ovnK1V9doobb91mY9jAUd17WmMchAks7H6rgLLChKVD6SvPgLxQu4z9dS3pkofDBmPSgcUBVDXrHamT",
  "key33": "5vjiytadUmXUuN62PCJDmETohiTwAEte4VDhdFiA5PYBeq1rWVrv41JPqqvr4Dnrvxdd169EFR1mZdWWS2wRoXHa",
  "key34": "m4WQq6QXuMNvZxK2qFnASbRWiXVu8NWJJRmiMJ7saiYocaXw39g5xAajyRm1dqBLzYaS5GWADDDbSzAKGNuQoYN",
  "key35": "2mq7dFhmvjvcoeAdfKm8pfZFbtBk1oi1thmnMuCCGn4ksBjCxqH4UgQhsB9MHf94vZxQCKm8CCC8vBMatiaTx3Sx",
  "key36": "m8km53gJzjAZhyEAonU9nLETMz8jvwSjnTasnWpFZeytZNbP4DxoithDPDznTnmfw5K9KvBbnGbYVoXFTqVaWYo",
  "key37": "2QW44azxbYYytpX4DoAti2LLaAAcDDz1xPWhHAheoJnQMFGPtUms1WdAUzrf3LfVeoRdef9zMqvJhQmd9cFSEbdC",
  "key38": "2jiLxN3LajeTQePHfmXMeEtsTwyCLXtgYEokoPKsCxfmhTF8e9H9N1qVm7jxqQNYxjwNTtXNbZMV1r6BXsxuRVZz",
  "key39": "3AKLP1otNDVTV2Xj81FPrrUD29tYtEFBZTrpgeDsZQoaJ8LXAzzFYgYQ7ZALCJoBGievfqm8QSAtBhxqLYziTFGo",
  "key40": "FJSakxXKjy6e8cV1fW7w5u9GycbAAjyYhbJCkreaJc2X8vKwLA2DNsVtcAVoyZJeTDrGrL9D8FDkJ7tXBLbp6yk",
  "key41": "1jiB5PR3SPrm1jqpx9TxvV5Kc3BumH3jiNVxzHoS7eSq3fuQLPxGYQ2Bm9ZPMxtjRrtb1cNNkGQ7UriPcHu2612",
  "key42": "WdEu6MQG4m3CizDGhKdXeNisJ7tErqhEn3GJ5g9pKz9TbT1KqQqQGpcLjYomKvFMpJVCLm7i3HFhw29Jb1h4EoR",
  "key43": "5SycFAsrhT2tbwLWGSa3CTZUg7Ra8YnhkzgmZhhxVbjpFQ7MKLtxPkKzKaR6Ecj92s1GHvtU6kLh5Q8S4JqQQMec",
  "key44": "3XYKSJXAey3uBtVoqrsxu7viXC73DSaXraepBkrsq34oK37TvWEWoUrF9CaE12NQmuCwsgGKmFEGvKU8reiPe6Cs",
  "key45": "3eexA6gg5YATStnCJ6FPBsSyTfMF9X9FrTdVYMTtif2pTm9YWfDCnUXM1UMpD5a3FGRqiAwfrXCBGcsNpo7dkqHp",
  "key46": "2fpxPiNgGo5uCnW8Rs2fgsm5HvftbmYGVaUL6Xbab2QjNTQng2x8b11km8S5WhPMs43w47Q2ppxK5qdoTwbg5Sbz",
  "key47": "4VEEDbUouXECebfFW9TAfG9Dwt5a7b4PXUwy7bmR5FpsKrnRAEVAderh2dvsnVamJvtq3aoFyQWyqjsx976WjwKD"
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
