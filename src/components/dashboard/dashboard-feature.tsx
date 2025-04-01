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
    "2cwz4h3sitjeXzHo1XR46TetJNThz6kiwxVbXM5Y2MuTMQdPZb8kvuaHYw2GSKRLt8p9ivFFK77wFQY3gB6hVRxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTDNU9EK8XX2743wbKVwRsb9hqyqgRiorjHBLEG7v814jvBeCoYzjqefs429Puidcx4tfYJVCY2okshDPxmLrVQ",
  "key1": "4RtA1ESvMxfNZ6UrzVGdDkhszfFm5dd4BPbX2Qf5C7KWtkzKrxd8oV3aRFtwmVoMEEMi7BVQZmwES6jS89GDaS6i",
  "key2": "5XXjTPKwMcejAfhY9kgmntURttgAps4LCZK4uXB3AQmhhcP1Kw4kqhJNH6E1oYQeS81GVVR2D82DUxMjvAwhCdUG",
  "key3": "2snA6x5yEVZYcTqkW4Dd53GQyxC6W8ip13aryJnwybDBSDmDujvpY4yfYTGY68pnkJBd36qE3b44Njke9tjytqna",
  "key4": "L3EeNfXAbTS9W3MumzyDeJej921jr3aTmSnMeyusPn1A8vFtNUTaurMk2u6xhXhGeQSioLjDwYRqvLucGZ3YE4a",
  "key5": "3w2L7TUbgoQuaAjj2X5kdcYZEdKH8yrgTfvg47UWSSm5bfei8eyuYn3ADm1ZzfdkzSytrvy4d9iGV2JUqmvN9nRj",
  "key6": "57SoVMbp4Cpv3KRo8h7DMuR28oBfxa9aHs3eK7eUJSjV1NFgsbnsnsrk41NCcQgdn4FnGZyFiatEKitYcFTZ3z9k",
  "key7": "41HUvUCoanfL3YKgTZvkCLC1mXeryXKhVKL9oz9R8bumEcbmmaFxqACftdiTwE4kW2mUoBEgKeayEnn3ckbb3DzH",
  "key8": "4TyLEdAFL3XPEtQKUZ9AwoL6ApzmeP1hSnFSKSWJrt7KN6foSwz64oFVXdP3Zi2Jv3dJHWnKLa3TQp5BkQYZnNTL",
  "key9": "WhyxNSsNVZZb2CLjZXa55Lw9GZHkUCx9wqQy8yhdbJst1vQSE1vs8sLQmrcPPBr3boCaYSTyLAFf8pd361pXV9u",
  "key10": "4Y5aJv4rAFhm6CDFKgXwJVe3LjJKXZvzGm1vKeP1JVa8Tt77phtSqV5Hosx3vL2uiiS7Y2L1wtqradpgZeGtthti",
  "key11": "3BWg9PQ15WfT8iDvuXZ4mxiPgoiQF1cJh21pNaMTbVKwAMR8mBCZ75ozRDmzRiegc5KR2uCd5YSURPBriiWcGWfJ",
  "key12": "3zHqGEo8vJ1u6PQfJd1teGJcQa5LDZKoWAhBtSdvQhFbS5f13bJWWJkFMBSoE4kxNw8ky1vYnv99uhvJF9UaMWNb",
  "key13": "4XkZ3tTenNmR5cUb8iJDjTRbkN9TK8ReDr6o2UEjM3x9eXX4vSC72yKYqHwjeRPRWZv1jGUD8BbPAZDb4BHP6BKs",
  "key14": "5niDhvoGsPu49YCqm3DcVBGi7EiY4y6QC12RPaERPvdzB2VMr5X5o2VCFQSuyrX73eCEBewUMqvoS3D75wqr27gj",
  "key15": "5jh38vbLKP83ni25TNZoJMg3KGQvgv65T926EBQUjimcB75fY64zsdAGBBtrSpxYPuX2omx7BCyCEjNmSkeptedw",
  "key16": "4WTJakLJT92txWTMRNr5umkeqTeEx4XarDv5KoPrbvtu6ut9YqNjR3tR14jAMWHzzpWJCngYMD6p6udeyBBHAe7d",
  "key17": "5LYuFyt8dZw7JqzMQ2s8cs89Tgoosg6BMPHSTXi63McsWLFEf9grxuyhoFh3dizMMc6M7WJVe7aEfSVqRGXXmXUw",
  "key18": "nvULPo4AATdwqoPkaivHo12aSq7eoJzRsTfc8DvQHzsouYyPp1UmXnMATpgwHFKc8KAcFBfZVs7hxEURw9dNRWi",
  "key19": "5pwmH5H2dvCVNXobN8jMgopRn48tQkxKd1XuQUFEfkDap9cYjiDeZqTFwiD7sArbHMpE5DhiP4bAQdc3a6HgoVtD",
  "key20": "4vtxFM2PcFjxeBgtJjgEhFVdnkHd2und25aSHrdpHhVoNxyjmrW2VYZuz97QNyqHk98gc8kPJfW3yETfJhQpK3bT",
  "key21": "Qf1Gz2EE5ffdJDV8KinW77TRY2JPCHwaV5DQPMHLj5Ha4Tiv7PnSH8FEGCmB9CCs4VKpJNW7ifCuxn23VE26xZj",
  "key22": "1jSYJYU5YqbTR3X569ZBYnRPfxoq7UawnAeWNLZ3oCtcquShHqFfVGeW8N22Ya6GuMfxypRzs3DkkysPnDfmDQw",
  "key23": "2aiedeYib157rLQ9s5DC45YsuFLs9XbuR4zpLPaCgn3Fkc6VYhcP25y21rGQeywE8ZCF6pY7K2WkdsdeG8L98ygx",
  "key24": "2VFHrsEahDnH2tM7PtWhjnzuQaa4UYdP8RoWVkRNHZMufjtE79iGizUvdF26FgHFFQgvLCDQTNtySJCegELNcBK3",
  "key25": "4R3krjU5qczrZfa6uaDeobsbXBGBh6Sk6bLjxB82Fbq3ijeJXtqwCv33b5N7VCHS8irAKaBo51foqM7BbNUY7kaM",
  "key26": "5iyjMXtcND3epCqeJ7ydNQSnCb6tW3yorU1vvpCSjej488PiQ9pBqF3taPEYAmMnS5ncyj6x3WwCHh5us2oPQifQ",
  "key27": "5Vdc5ZpQgHQKFoentG1kDNsZ85e1hNB9JcGbtFHNxzgyHevv1T6kvpHZ6b7K6S8ToxESjDCMSG2gQx5UxWbx9xEY",
  "key28": "4DuenQys1DzyxxUAUKTPn5oDhDUnE4fyGni2zQ6s9xtaovA4BHWdoYyKygEQ4h7cUJciML2AJfYs9xaT7i8frzsw",
  "key29": "2pqdp5HQiK7rQ3DTanzFHBKuVGtAfQHNZtV2v4CdPqxbxfXXWwTpV9aehJdufu3jJAhMnpXiR8mbA5t8tCK6ihq9"
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
