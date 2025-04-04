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
    "5yS8pCQ3UYoLqx6ynd7ZTXngpofRMSTy5RjQMPn9A2BBzja24hqbPgA2Hq2y8NcKu9JcSEJ4Aks6aRDRZamH2toc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWUpv21oP2RYx4Wiu2ybq6urnYnCG1KTwLY6d2CKBGxdVSxsATqDL1dTejZWrsVoF5HNkCbSQL8PTP3gsfCzDUQ",
  "key1": "3Q9swQ4QJCWYMxYFRZiAYzuqeMrtg8c1E4EoHJ5E6xzNTGKzfhSw6umQp994TYRyabMepJCAycovpQt7LvUNCAxo",
  "key2": "3vjdfH19hz7xof2TWn4GgGi2fTeEEHSaHuS8K6AspTAbokw4K9nZaBuwfrU8Ua7RxRFo6LiQra3bRHcbhiNMHn8c",
  "key3": "3QteyzTHwzS6f3tjwH389WFm6cQ3pYraNDVkbnxNN1ZGD6MnsxGsVKkeXP5QDUFvcCpVmWvErU9TUoWkuZ7caMqA",
  "key4": "3PvqeugfdNpHcLEz8ebXyV9Eua7oYQb8nQ5pBoXK4h8eUYd9WwoGLZ38DzSizoVvy9WfCkmf1oFTrFudbt5CJdSU",
  "key5": "33jQVHbWrpFpiGHeiuNQXfa9YrZ8gGCceJAcdj9iJ13uxbxrWd73B3NXW5trnjwhLKgHALi4gvbTYC4vigXWZy14",
  "key6": "5Ws1XiVwTZpWZm2FJisaewrbaZLTLvx9TMs3YVaE5whxk48kEzNPSH7gQidpCs4kjpTB5J6drfSvLYdKYEUxYkQv",
  "key7": "3Ck19o5qczyitbqNDBeKuPzL94r5a7crPhymuibahQVgkQH9touccbQ9pZMnpVz5QqEzX9xaYZAkB4DiAwVfKDuu",
  "key8": "tjubA4nsp2A7LoY2x43uKSFmu2sATGsyx8miGBR3NDduTVvxcRSttHchd2XHCTM1DmMMWnnUtPvxbTn55f6ffaF",
  "key9": "3MHpoq9Fa3Q1LpVgnRJA6Znr8UXEkn5fwLtkPUVHGFe4zmuVmFvNogQWtfnfDo7ofHCwniYJkuLssZ9tGG8gWhuH",
  "key10": "J5Cf2wFpm2VMCcYmcfqF1o8ddSkurVTfWtFVYatBExhbAqeiggbcXEsdX7ipvzjoiE1TkrS9Yy6aG6ia4XDsTWF",
  "key11": "4r2wGhzuAV6jJDKD5KYbZmCQSE2iwr7YKroMDWeDz9c4iVoWxgfpVGSop4eoW4fdhuEJbdnwkjHR6UM6CVphYvbD",
  "key12": "5CdkacWw8DimMHZm7831uFxQDzvMdnFUfZ4CatpG4rpsLyftm8TZkzYPeMcQCZEiJhfxARWTYGC1ce9vP9uHMBXF",
  "key13": "2d5j5iqPcbRr2EonzErt2DjBimZCFzJmofxvND3BviyabV6jc1Mbs9CvXB3AjsqpLFBgH9FkQDYzqmMoXkQ6BbLb",
  "key14": "gnUpyyzdLGqBdMdT5b1sU8D2FmyPPmx23T6SSTifGqoKTsZYotxuJXdPhgK8YfaAtCe4mLapJqF58W9bdqjinnP",
  "key15": "4SvTbsxCZB57TeHDjxhKobsYyPKXx3CL4oFxwB1FZ2aeZRZrTS3NGv358YkotDt6QVgbo71CnoaREwgULJczGhpd",
  "key16": "2weaf9WCgPTTvTYaTZY58UFb4pdi1e4BKtvV7EW7AtLAVWPKRugjGdAK7HohRsRoh4pWJv6BPbV3hYzw6hUhWbNr",
  "key17": "49EBQKrWdJgjNwaXF7dh5Uza7Ypqpq4j2R3yq8NNemmsC99iK7gRuYjvqLpxwYeQ3911Fv7QnSWoGehfn54M56HJ",
  "key18": "pebpsY5EinrkK2QFAGKnVXyKccE4NisyMcYAzDtWoR59zaHMrXqkzYhRHq7S37YtjtARVyXWjxUfQiw1vt1TkYs",
  "key19": "5qRS3XxKGs5UesmpHjqGUutL7adzrzEt4a6PfvpK1oGnSrdsPsctx8wZZFaQTfZRGZWm44G3e7xmym8Wbu25tWaV",
  "key20": "613rUTUgXUcmAAW6am59ccqMmBeH6sfXjts2x4dpkSRwduntBnHARwxMUEn6DuwJfTsegn9HGtwnMr4ZhdvqBN8L",
  "key21": "4RTMeGjvHe22F2wXuCwdEHy74uhicL4fWzQLzzSr3kzuoc9WTw3pRQHviBDyrSLvVenaXRTbAtfw4FXgi2ztt1jW",
  "key22": "4mHEW6DsP2sLCuSy6oLbh83Ma1JzbFJMZgmgZQaWgnjSxw856aBUZ5ViK2xqyrF8EqE6FM5iVifYnUpqBYgYJomV",
  "key23": "3UCSv4M4rwi9Lv9jcsCriDdcucevjiz9ykFz3rSSLCD3rVGBRTuWA8mF3mP9hQdNmeYr9qHaABgCpYZLY6qFf3iz",
  "key24": "M4tFNCRcz1BycrAbtBYsKpbrHBy6hgaxXceiBHtceDAtVrPUpmJQSHg2se2AsYDpa8TwGUoVceS9yQbCRzP7eEm",
  "key25": "35oHHsd8piwSN65ciqtU7zfx4VM3QixDwxiCYZ6EssGFNkfKuxrMUNyRxLxDW6BfLBSDpDqQ9CDirj47Cb59TTK9",
  "key26": "5GhjssPcL2b4XY35wFmGmvYpWP2y5feKcNxiR92YBQmFsRjyLTSWnY3e31quSiYYgMV2CTaaXgKTnwYaPxR9WHXU",
  "key27": "52CGqPYJxPmoc1W1bfNHGsgAuv3spsDpqpvx3qmXJcvhHa12U89J7DEPHDNXSVv4NugySXCmD1HPKDskyF7HHG3Z",
  "key28": "2nqx6HGxP5SBKLy8phkUNKZWMWkjUEn5drewrKzrJViiBJ3o9qyJBPfCJhR7GRDthM3oXgPqfAhQUbvq8cEnf12X",
  "key29": "3shZWhCa1eDp8jHvXMtgq4aqGtuwqbnDfYSiGdjjXSQaknYQFczj1kUTegWnTkS2U7gZuCC5UggCg6MWJUsDUM5g",
  "key30": "489BZAbg93kUtwAF6K1JRCTYysop4XaAbU5MjXg2opgcL3ienviUWHZfRM4n2CoQS1rertDPNwjsYiE3jmtkbpSt",
  "key31": "5zkfKaXsBdKZk3HbZCv5kAdLVzxpWPeehTEqWcWSE1XHDDR4VmN8FnWfckxC3zkxqXTAHdWRFDqVcTBjqyNZXEUb",
  "key32": "4SNRX6PpPYZNRcPKzUaBL7iwua2bD3txD66z6AUzxNM75eFo9RcqSk23uWxwQB7yjANFzAXDtKUdGCe9TgZx2QaH",
  "key33": "25fnxGPakgMoTZbBrGCTEZPdUJabg9BvFS6pxMxndVgCTtsdVL6CArW5GP129FeeYKdi467d3waGZkQ4jxT7Piw3",
  "key34": "55ZRfpfUaKn2g9ycnjDrUsaguru8msvBkxMj9dsu6SJaWEkRLyuif4tzZRKh3xUQRVmeNw1sRNWCsL1YaYad5GFw",
  "key35": "3R19Xw6j9GCGa5sd5WD3R7mH7ow2prgsXBMrsXgdACzEH44Kte6x186Qc8W4FHSboV7PtzGg8mPBs7NCfKU9cQ9o",
  "key36": "5qJAEQMncaZVTfqB4B6Vg3HnyAetB4uFkHsNyTe8uEnrF1PHeWHzph4u47Gv47YZKs5M1qKGqzgUibheXVWNUiFw",
  "key37": "35fHBqAfBbytwEcfWMfScPRKFoVz6DdCLpLXRafE6u85ZSWFqeCJ34ZbwMdX3n7nHdasbiuS7Vr9iPgDHAq2dNEa",
  "key38": "2957zcb1sqanCVewEZXNU7jxDfikCYzFnNg2mYfKDgnzz7GEwpNrdQtQGJtpLSsJaAV8oDpMcT6s6rkmdSfEuiwJ",
  "key39": "3jnoh1fxCrQs38UCoii7bVdKxJzSagL5L6qXbrjHTkZyjtFSBeTauZydzeLA4UXXJXD4DFxF2a1VL69GfkFCZKDA",
  "key40": "Wo4uh2LbX9jhRkG9A9hDBbjvNrfLLerc6Woxqe1hwKY8eD59mAn6jusvujb5Ky8SisQ7qcefPkZHA72HuXtmAQu",
  "key41": "5TLiEAsxkAhNSatiAMDm44LdFbnFSsUxdKYRWUD9yaA7As79W9oF8v5W2MfTsENFHbS1DVxJ2uR6jhEZ6bqXmbzY",
  "key42": "4kvfXuR1V2niqpbPcLU5HSEe82tFzHXzZnsJTmNdRStgdGWEKes3qjmNA5eGU2ZsBTrMn97rdpgLnaoieQrvf1sN",
  "key43": "64uSgCdf1VU7uBDtCJtGNszjpXMuCfLMbqV8E35qGxJqi7VaCwC62uZVX8atfaozUXrLkCSgmrZfspYM7pNDY3dQ",
  "key44": "2L3EpKytRNkGYBjef7n6nQPZDmfj7ajWK7aRoAdraJ2r59YndvCTXmuB1yiXqzrhmduYUnFESmgdXpAKDpHNmdGZ",
  "key45": "PqucscskCAu7pTPxbCuHxS3y2ccYYNWnKGRHT9vfg4Z7xvw5kuiaqEd2N9MBaH4nB3AD1howgTGZJRSN346KCuX",
  "key46": "3Rgw4MmyYL4et9Rv63UiGZuN8dUrsTtm13WTt6Hp5VsUXSSL5VXCEMw6cLb9A51jo7ipzM3y5m2RwHWk8UXhiV57",
  "key47": "37Upv7RrFbB3YF1Da3TE4UMAR6ZvmDP5gJTQEBThcWXJdzWd8NvqeZPh6yobqUS4m9YHWyV8P3HR5KWs5Nh5aq6A",
  "key48": "zeH7j5T21FRbnShQDbtVWLmV44BucDh7NNc9fSpeiNJMBswrezcK4oRiuCLcMvuWmdPm7guNp9t4PD2v3UXBX8r"
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
