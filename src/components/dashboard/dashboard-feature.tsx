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
    "BwGJKz1oaSWK1daByXknx92Nk7Lj6kwfxtyr9ZvKjUVdBHuzLNzukCUmchgQUYvPAzW4d47zCJPrYBHgEm9X4F2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pKqTC9VAiC6qApj6Pu2qUStBLJmZx2KMSir2uNJbVyjK24zUuu7A83ERT6Ck7ZtspLQV4ZJgUvFsVdojL7peLva",
  "key1": "32y3knWQ6tvyrAafKuHqLzPxu5Jb9YUFUDBz1HmTHVbPewc3cK2Ae99ZjojP5pt8junVarExLViUzzsHgvhG9VnQ",
  "key2": "4BCKNpAoiED4KrCMXyLF8QZb81yYR7fqvSVCnyPvKEnM3393P2bSvjs32fGRBFipynrQFrndzBRnbuBsg6YYdVBg",
  "key3": "cujCzyo2wj4PfQKg7CxXGmiZAvt36ACiRHvLKWZLq2dvFhYWvfvC4cR1fqpQAqkdpK1DBumbj6Roa7m7atkf4nU",
  "key4": "2XWchsvrecPaTieckiXwcXkTm3zJSB5up485SQJZ7zTfepZdExeaW2BUW5rKoiecBMBg6UiDGnxRnmskA1uRi3cw",
  "key5": "LZh7P3yxnqnbvRWYyaEgsyKJEzVSS7rh2nugy3Vwzctwad7veM1RbPkDRfd862xc2s9VNL5MrTspoJM6WAPAKH4",
  "key6": "4jAD5yu6TXEWS8K3B9iJBLh6xxnRsfF8tg9pQQi3eDSX4HJYcUNSWNWCbZrE6cEjynQNmMk8dTsZ7wa4fyy3MBNp",
  "key7": "2vBRqjCN5qNGsyA2DotUyehnsrFMtVueDa2kJyc7RRR78NKrvy4B3zaexAie6zPWcWJRUuSYc8o3RrBNavPLU6Xb",
  "key8": "5kwhSWhqhjSqrqthLzwQhZNTme2NyxkdNS6E5rEs4EbsbkRKpX5d9eZCBdDYaiVoSBaVzGpxR3KjtEZ38L6krvwb",
  "key9": "vbG7jVPjHeP2yCXAELwFm2qUU8MpR9icnvqo19D7vL2QXt3o7DpUZtpCiUL5gt7yJvn9SqZsuTYF5Rfcq8uhViA",
  "key10": "61uc6jXwyqD4VQLCinXsybc3Uefq6gVHVBWNdJyR5KjjBPA6KxJnZ1DPrkE8L5WvfdYhgVqadBwzaPmrymVXcDEz",
  "key11": "35hGnScLsAghG7nKYy8Zxm5PxYPy4M1arWxyoEx85JeZGCBiarxvrjmycD4E6xtJPMzismZrqHNq9kRB2TWXpj8G",
  "key12": "38N1zhpEjHDTdZLxuhjEsZchLntHnKPfG1NExvZAyq8Gc5igYAAY1R416PkuabmmKpvCRDnSdhsTAEpxyUMTnVQA",
  "key13": "VoRzLgys2bZo7brDzndTzuXxPr3JPfeJeQy24BGnY13379M5MyFf4jez3TY7VYUW61qX7qR8YBNcnoR4FpBzzCr",
  "key14": "53tr1YtJh2QiX8oU7dBSX4W61gw5QvZeTd9RZ45JU2vZAjRrxubHwXVG4ckmhYi3a6dh3LiimQU5TZKGXDgAvmf3",
  "key15": "3HHLM1QBUn6sL9YRqh5yfzRHTaDKmPYcyxU6YSNvNTF6dR4S7UNhCK34iav6TtYyP49w3P7YwyNZEi4khZNtHo5R",
  "key16": "3B6jZqsDxtYYnV1VanLXMh1MwEwCWYicUxWQR9mtKaa2zd7BANS5BZAkGQgH57iNNvSBeGz6JaC8WvqfLdiG2z81",
  "key17": "3vw7hfe1foQBitBNe5eafFdVzEXzUxEc5hFcc5RDvK4eaxs5ECCFcWoLxrqEQNcG6oahcK9LoWkjYVPU23RBZdJu",
  "key18": "xty7nuPT7rzj82Q7o5ecLt3ZppCt5UpWwMqtk3PJGB77Sbb9iyXnou8XgZuvFpQAwGQSRFwmFHKh8EAoUsXzKUY",
  "key19": "4eBmybatuTGrL28WN8DhfDNeuP1LZyQKY1XSSJhHww1DhF1vrTDnAQUSGzZxEwGr6RYzvKvHgc1Jv8ZLoKdHz73U",
  "key20": "5kVRnLLpeHjm18YzepMQYw9G3Fge3k5gtEvPATGNqf6GrB82bRvThFhixVNDcGcjSryQ32Wjg3SaPbtNwdjK61dw",
  "key21": "329UFngEKsobyCBDpr9xj961wY54NCcmgXFRAj2wfXqnnw1GHDmzY683WtuiNBTkVrLs2AW7MUXXd8NAtygaeyMA",
  "key22": "5k2FR9JRXNQiHcfGNvFWyJPngtKoN2CrYD5ucGizWECxnCwKsS5NnvhKaepWC7AhKvH6Do7Hpwo3u1wJiANGJz6d",
  "key23": "L1yH6wMeDZArhYwqwsUM7sC9TRSSbN6LqL6rvsTSANhwj9UbncCdsk5TgHgzR4gm3wrYq564dYsY1UNCvbT7WfA",
  "key24": "5qHGBYpQSJqtocGXHaPEbDSmyaWHMAFSpqc2hjSLZ5bfSYfapbfiTHvrcpKsfqTm1odnDgwEijmy7ZN483XzpFmW",
  "key25": "3wLr5o6x1LVxh9ntUCyEJaYia84A55CxEgFfLebdqsV3jzCkyqeH3mUTERbeAQzaegPjqeLsKUPppxKoxfdJD8TZ",
  "key26": "4JMVP2EvJVq59GjjuoFBA9bcQSsZsd9q9BKD8bDhf9UdqaUTosmuNPHPHCCsfLtyWKEsD8CztZpUncroVJ5muymQ",
  "key27": "24tH3abdvhAqdZ8M7W4VMfkWJtNeyEPjk64YTQuUXDkxerKSqMNjfcFoPzj6T1KCAde3TL8HpEiMpRABy9WWy5XD",
  "key28": "3nEnxWTEKbxjJ3spudaCvL3ZEqLPr3Hv89SYtLoLz8YRaXxArqE39rtCiDEW1S4J3QKJB1mdLnpBMfqWVAkfAer8",
  "key29": "2h2g2x784iEtP2rRQkXptdXstFJVmVcuxHUXYK2xJpg3ivPa2677GAvzBCJZEyLXRhYUdR5KvBd16odvChCcrNEG",
  "key30": "63ofbUYkUm7U1h7FhWYBWyx6V1vAjG4v1gNTeSa636aa4hfs84J1vUKz9G3K5sYSsJNCzm6Za3zDGGivbP72GG3z",
  "key31": "5eB2iTM1kcYdVxdKzJyTRVjgigFoWx1mWNdGkX2WzBbE26MtpVMEScYLBWuHgBMWGBrZz4BzWFJDc1hYt4d6CzCt",
  "key32": "2BNtrUVLZTwvMBrqy7aBGZrLteGuupEiheCfXCvMicYAd2dXc3Mr1LDczyG4dRqaTtajA3gHFnUSqiGF8MUuDKnT",
  "key33": "63xeHsJheYDhEUkd6HtH6NZE2BxvjhDFUPtcYxVgXBjLhK1ZbRgJ5awqAxBDswaMxZpuoG2v9K9sqrRqYfTGuGWM",
  "key34": "67anhfHxdp5y9TqdtP3DbKhaZ5xBikJwco3RzBKWLniQ95y9ipJny7vHde4vkVcWDJCEnL785cCFacvC5ESRDEQJ",
  "key35": "4HHBSTjxDYGbBzyZJB7mGWhdpnHqDL9n1C7hLXGQi6yd9i2Hp4CNZbnNf5eGTcDp5P42c1c3j51JjQrkzNF2jkcP",
  "key36": "rgp6haZpc5B2viyCJqxvVZ4vLnEDTdnNbuWCKdjDLvsn7pxNKi899KEwScFre9Djpoy5tWewSyiYx1HajxRPfby",
  "key37": "2vRgvJSWTNGGR3F7UssQQ3fFceVHx2SNpwLpTMxVeWJzxN9kw2yuutuZ1JyZwn2vj9gWBpGHrVXLCaPJ3NQJDNMf"
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
