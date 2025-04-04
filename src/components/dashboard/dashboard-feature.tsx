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
    "3gBtS1aR6NzWJVLyQjbbJR1CmAApqVbBH2eSmw694tmNo7MjXnb5Gh1CNSy8fCChVrRgKME24mprs79yUunfXLEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNiCMSzErZUdrdbBqEjR6z93FP8ehi8mjKGqXdjatUx7MQLKnEt8q7PTXCHtr3fDFJeFfx8pXWyPmbPLcBSiWjc",
  "key1": "Dp4rCRMeRMjdWhd1U3sEc8B3bt7st8T3csemt58SpZVPAVREkkhAvMjVrteXhpsD7Vpyr9hKbuLYvp671PUaBfT",
  "key2": "3Uo7P3rHaA3JUSSZyEdApiSxDisHrioEHz7ZHKfi6j6wcbXSutxFnAcw3ifNfJ5Z3YuNFFhyWnDBZzqk7oWuwFVU",
  "key3": "3ZVWwQcLXiwtHa2bPHEmVisoURHeFyE5EkYs9r9cmMXiT9ZGyGnSZUJ7UUF4D2iuuE2Avwy1jsVL3U6dKmRdi1L",
  "key4": "1NZQMwoUt2njNjZdga8qFtXEzaseu7bd1MDWWnGRkS5TmCmiVo448DYF9PhGGPzxLCyemZMDmtTNGrzwZvUqnwY",
  "key5": "3sMNWJbh38A54q7i8YxAVksWXrnP6a9NBq4w3Uzsf7yxWirKhfhiE99zCET5KG7F4gHrk1k2VfCqsGge1aXJtuqV",
  "key6": "22h6hMV7o6PYmxuthLS3EzoRcBjMSttmYwwRHkCNPo2iFPf6XLnKaY2VygJqjav98mLbkpjfYK3e1JVvpsQvBRhU",
  "key7": "3gKgzPZnCy28v3tAfNhyrhFsjS3TTp33cPdWdXwtVE8cxkhzRNmcSkvp9UUWQTtnLyrDGW3YznDXHACNGpARhSHB",
  "key8": "5p2HZvny39418gSDyLhVsrhHPf15myyDosGzt8VxwkDqhEBvJng4nrL4dFRf3srE87ReteY2Cr4dAhTb51GpSx8n",
  "key9": "2m63Qhext4JqRGGnWBAzT8dQUm76fV5WpKHW5DnAsnNLSjUGDinSYzbUstwfzBPVpXnaqjqK9bKn2PfMqis1bnsx",
  "key10": "cFqLxXB1Bh5CvUXk8pSEVYs5aCcnaqSssvwAvQYEpcSsRAUB9PKdvyzohkD2mA9pxWP4hRJSqYVitxjt82h5PYG",
  "key11": "51PnRkSTZFeNzhdoAF55proi1X8AYjKVgbD3iUpMHNGeSv8EmDJ1HF5VG3tYuHsCAWaFbRBQTnJ3tzwqusTck5Xc",
  "key12": "43wT3v9dHWn2N8mbkxzT3eQbzXZKJGD6YmhM6qB3UKR1GMSGZHUtvBgFyXywCFPbLb26V7x2p3NStazWJP9XphGE",
  "key13": "GbYqKofDHKfvsu1pmVhtSonj3nQ47zACZtU5MY4L6T4yGqhrUy9WfbX2rQ1Qn12r7WAQ8V8u1JKKtTypMyr8MU3",
  "key14": "qzvw4ciUEnfKqNid9VRNTXNowKY8fpgZ2LmW14nx6vHDLSxH5s4i9jPbKVRMQzvY4NBr2Dyz1rHJGp2HffQ35f3",
  "key15": "4tYmRpmcoGQvuaNKFESrEaUGNpayovPFghdL7vrRVN72kUXyjuDGdfuqqmgKE8eEjEK6atVUM6rwKkjYr7tfYZ95",
  "key16": "4SCNTZPQeXitFMLGWaNpYvVZSNbM8Sry1mrzKyz5bEJcHY9f5CiSjbvLSVqVcY4fx5KX2L4ZeApF569pesgxxPst",
  "key17": "4Dd4Yt7MKjbhZVvev5guCffcXZpbmdYukpBw1j9BQZV5wfLtRSiEXiVkQsYCc3MmPYn4JvHpP45WhhstVdGfm7fF",
  "key18": "2cYWcjp3cMMH3kxTqTWJAvkZonWpR6CTG1yTpqLyYYCHj3HSdvLR23pc3AHKupAjNNDEQHf23pog57UVbpDmZaQP",
  "key19": "5q1rkRe7tqt18fZfWJYeCaNGKGJVY5QcXa8uXJysdnsvD35xn4EapJMQMGmEVV3UPwphJfPuTckPFdBWgt4vNwu7",
  "key20": "5rmTgqEEvTvV916RGdU68UVvkGL3G2PonzubzYniFSj9LaoiLzD1F5RT6xrV9BHDYAxYQAJ8C3XzMsTajfaavMWH",
  "key21": "eaXtBXnaUKA7yiFdjjEJm1r7mcfUyJzE6GTBb3DhYiLvqdi3Kez4wwZ8Y3FGST8T8p7xVpHtb51jBmmfTLEpEcX",
  "key22": "581JbNqsLyffpkaqvuBN9MSw22A5YRatwAhtYftUb6rDpi48JnyTFDDPNzyjV9PNz4gqW3mBYfy8drgVQ3TeLSfX",
  "key23": "tqutgfSpJ9aojnqyi1h6KurN6pq894f9Tea2oSQaLiawe5Nu9wJ8MseQXUKXVwbvJqULtAfD67pQGipxox3XJ2G",
  "key24": "TLFh1ForwWhnSVcvD9iiQzXdDyMtp8D8xtpWAS31TaoAmm84yWJ2HkE9BJ1j2rS2bDY2jRZpC1WxPXTdhJeQmkt",
  "key25": "3uHf8CKGdS1ifJGbxYdgnxLYAZC9C9BrVq8GGyghqy2FrH1xFTTiNm9vUeKn75YckHtsemR9gbRpJKyuiMHG8R8s",
  "key26": "5SZGDPCZgSRDsVyQh6XFq2cqi2sM8toA7ze3x3B6FtGLAMbG3iQvCYScGTPn9fnatMs2rc7CnMzhRgGL8sRWAswe",
  "key27": "qH2LaYa8MCYEJSUaKh5ojMwCoCTvZSGXyPo2yf5DDJieZ8mCQ1ZwaaKKy8Bh5VXimUyYyUqNWwwnz3cEJzwyJ92",
  "key28": "4MGv3x9QCiAi6AYxNCQAxN6orhBxeNcrD9XZ7qZvxYiA7swBqi4kEM3hxqQpQM6eQKmtcK3d2rZ9Eg99dJftaFvX",
  "key29": "2XK2d2QfmdtBHAvuwWXujZjn37F1JUPsK4zn5a6cnxFQMJXtYrWg7itXeYtKm7mS6dzdJmB1a2cS9RN8TVizSejn",
  "key30": "384u3EtYPSVqhhoUyrAdjyEmrYe21TNx9XAsUk1Tj9tDSmLiFUV2gvrNtmoYewoy7tCQEw79o6TM2mdk4swWFB8J",
  "key31": "5LpELU8J3R8MiNcK5yctTpqtHKSp3Sn5LikUvmThLL5WD9d2UdVbTYnvA1KUqKtLn8x5kUH2ce6UvRvtUWU1EHds",
  "key32": "22TDkuQnhP3D5faZMVeVbGQWh3EEFvi67YN64DfrGDS67LHjeRfdi7znKLd3xr9sYokVKeYxafzPazW7qGuVqBW8",
  "key33": "5jkRJEVcT2qJGzQFziT6RXEfNkfeRpvTm3prWmMN2q8QaR4FqsjMmoeRQvDMQD588DmNtmD1ust6Y12V8A2e8srj",
  "key34": "3CE8FztyfxYBEARL7fxzbTCL5eAMnDh56jrHtgdNV1MrTH8piSjb24NsfpKEAHGunovsFXqNCzCbYVX8Z4GDsWiL",
  "key35": "26HG5UHjmhmB2jKx45apUnn4R18HFyineC5Q1iiMtXnCPuBWad8o5tD7MVdtKxbi5jsTpwG56XEMyQ1MeDMCkEtT",
  "key36": "2ypkYDAJBmLmxHNYPLisdkx8A5vuMsmoGijjiwu3EbEBXmYVmyqF3xcHaE3nbRgpwSCKjcQD4FNbpjhASR66qTVa",
  "key37": "5nSjjgLxYjSSCLb498QWjo7Yx579opk9HdQ7qBENpbsGREGR65oz9Y4tTgEXycuNcUyc7dkvyuGCtNXWuUzYhbd3"
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
