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
    "3KEoFEWettJWUujj6NuSc8f2BeUitr3ZMttH4FRVnaaHrqogF8S9HiapNAsMtHjhQHbAGcPS1kvRKMoiCC9FndKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6hqEyKANFiAK22D2ihkcqBLW4Z8pqRBjEPFaFJcKMF9A1cWntiLwKWJwbnVHvn3jrQ4Cut5KxBCrUjaPeS8DN3",
  "key1": "4mFzUdSXv9HSeLSgX2FezvS2WWJFFLkorKrRYBEMF7pbwcVPG2QZcYTeLy8pKBm9mJEbgEA1BjWVWXZ97LHD7KT1",
  "key2": "3HkBk6ZqHrivyAo84teGt8HwrB5DVPHwYidaTvwma56ZmiXqVbqhsygpErLXsEFQJEiQeTcDedwsShSaJEDSzJcM",
  "key3": "3j43uecEPLw4czzunb9kL2mh5UGDWT7xwz6UtccrL5SExuiymNFMCTSPpaxv9nsvammqvmaaXFsyNZJDKxBK9HuL",
  "key4": "4FEkuKXHqZQdEywVeEagXezJnHkWMjEkcLzmHPoBX1rmrBQ6GBAaPeeWgiZHAbNL28jZnfY2XE43NVsoTFMgc8bf",
  "key5": "4D5PbieyUmZCAH4qMJ9FAXS7YJbJPvW1f8bs5Hx1dgfZsBZqtu2rPx1qBk2NW2v81CfvjTeUodQTHWv4B4Q1Ce4W",
  "key6": "35MeZRBY6sDsp4Dr5GEywkaUt38DMiSAEWLeALArEvptRgMto3S2cmZqbcFRwKQTuzdkrpfZiMe7fudFZRS78LRJ",
  "key7": "3E8t5P7ZEaHMbkwdmehXY7CwkcDrfFPJieY2TmH6feSzy4wDXnYyeM54DnveDxxAPzc9YFE6AKMaVBZPbTx6xwuB",
  "key8": "4NGrYhr3Mjsdq63HQ8GqKG6vKmxbzuzuwix1GrLJoZSsW6JwD8XBmSat13c6ghh8zH1FEKnkdigUqk2E34VyNwk1",
  "key9": "3mr8icUebtw6EbbDpD8HiNwDUfj4HFserDGB4kqFLFwaf8mv27uGMm5oaJExvXwZVVxT92toMNR3vuz3tF7qZmQk",
  "key10": "2iLHDtLhF25Urfq4yWuzKNQAJdYHhyqfnuYavj6Qypu4SppcaTeTVmTqniwVnMHL7dkJrS6SR54HvgFCmqVsuko8",
  "key11": "tjw11rFamneTgF48Md1yQGDyHkPhZhDZBBkLAWcsfVKWmHzsjzdHBdN9XRmXLmRZHKmScVxYhzkwRve9JYTjpFR",
  "key12": "5xzRVJtTUhXTvs3gPjEMB1YnzxSz25nwPben5Ud5cZUoKb8wxYN77SNnMWer6vEjatbPujyi3PN4vvDAjxK2Bvcf",
  "key13": "2kfP5qEpm1EycLRVYorypEb7dYmeYj64zoBGjgpmFCY7iH7WGQawYf8Gdm5qkGsWKHssxk7Rais5eowGzTxb2QSj",
  "key14": "22kc83oxdMDoNCrwoNaUwfuqYiRuM8CKcvFmunoknUyYg415ncuaPWyzurFFqMgc4Fc3oqBNbQM5Bf7FfnzVfdfB",
  "key15": "2S1nB9UT32FZgPPtkooqVTJdLCw6HZJD7x6GY6NheF5VetiaS26N9aaJPcGM7oXGn6Y4xjv1wfwaBaGqSdxRVjpk",
  "key16": "4NrSpkfjhtcPvo87KftmiWsofZsRTdHZ4KXNhBTyvM6DZ3tmay6TmiokE1TujPj2jpgX4CnoXzFE81NhihsSqeY",
  "key17": "2CVoY6VmVANVSYCuwfub4iewLZYQ2EBwnwqQsGF17dcDBtoUPsFK3ZFB1U9Npw5J9jxYTTyjeiHZCVdpZmkC2G3z",
  "key18": "UnGkt5T14jYsjMWr6PwoSXBwdZ3HANUZvxnJcZVA55AJeRnrWptNNwK78YPVVEf8f1z4NA1DryMcHZqJ7mEbM17",
  "key19": "28ajEY9P3qMY2uEfZGzLSQUguBf77avxxZPVuHCEcVh9NZEAEazqAEvDba6vrnFbnMVJrFGPgjHBoUcn4tXpSSNb",
  "key20": "9N7oYUwt79aqbwWUBbcp2C9QLpj4gqSw54uXb5HYdogv7ybxpf2G3nvk1tkFtJFDVDJ4ZJEzmFiSSQYRMtPxN7x",
  "key21": "xCbZUyU3o9MAi9M2yEC6smaSmrNSvcjeUMPLHe1stMXWvXShvv9nYrkZNCFBB3wWNMRtdUWiQeUDVUDseXPwVR4",
  "key22": "S9ac9vcLNjUmKuvKLjRfZkKN5V6BPgc6Zo7m8ZgiUUQstaDwD8899aCLziDSnAe4FDDva58EKsSxjRXXbgR11ik",
  "key23": "57n8t4cADRHo6qQFRvS6QgrWnQtn1R5gN1WmrXgKymEQowoXfm3hxYqY23WgeG9vxq23DntjLFWdXmeELUVAE4xo",
  "key24": "7R5Z2E6LZkEZgTwsNE6PdFYq9F5XmguSn6Bvgdpzoqvg2jQAAqPWBEjyBCKVhcDwiYE3mxSwimnjBNpxGt71roa",
  "key25": "3WSrutjisyeHwJq4GRggzYYCHMGrkUGzgoYPnJVeaQ121PcCDWPwn9JXjcMFK5aarGDjF4yoqVH8v9hubYJKSx1X",
  "key26": "3qqjxNhn8Vp9rvgrT9qgYgtAAj4xYX8QG2yeF5C2RNKGbyftRYQyTbVFDyYXH8LrvWAdTX1YvMhv5escTY2cbC9m",
  "key27": "59Jw4xfxsu5d26p2moAzBqM6Vg3VWnDFHtWK8vompayQCjr2b6DzxQWAGJUPWpdUymAwpWUeUEeE4yvCxaJkDK9X",
  "key28": "5h9qiLos2JGrgygPiQWpnUHoFY3m3nh9cQLBdaaF7qVCvHqy8NNw5WPoLeWEyiCWxtg1y29Yv8jas9i3dfxF2cWr",
  "key29": "2rkXkLgDFWFbD6rmETcEc5prvDMMxJ6aiGLnJx2nWoCLhNHTmw4aFPBSJX3bFaLrLZvKVCWgS3MBV9nJjnWrqmri",
  "key30": "2BiaksP2u6PLAi2chZPzHFhS7sBQM3jUCssMFDajbVFTKqsGVREqn9WtCmDnfNxiNBsszZTqUrFevjzCWsb6w69n",
  "key31": "2wFU332Bdjd3iueiAAiQGAjp7wpEDwu6dr6i4HUfJPMkfGy5oDepgMy94ZCWVndyenDKZusJphCEmx3R13BGnpVL",
  "key32": "2UgTwLe8zDQkebXQbj12bhRcqjcdgLDnQNYwdJ95Vnsusj4p5cJzy8okK3VFLDi1wsrN2buEfzrS8gRn4TnJKV7q",
  "key33": "43X4c7LrhZvhYumac9sQS7S8dtb8vifj4kAqDm96vFHyMLDesXGNp2tw21qJGF6LJoXqV4Xc3eYZyjxYVa4bWnMS",
  "key34": "2ZFZdn8HinSLJHGc7ScF8SfEBonuhUmWiuGKPxwFyZjjtVTZUg2xQD8WxK7Np4SAo5mC3Jqpiiy9LS2trtpHhriW",
  "key35": "3DXyHZoJLaRt444Waqepyf255PYuYePRuNxLvS3DWAp4qmiK8gEsmzFi2qhEgFFxDt7DWn1JDdSjWqtnvopT1F9F",
  "key36": "5R8V2LkjhXwdGfGSdrgF6VLmrs4zNDMR8yCM4v1wiXNMzf7YiR4XArJuWQmz1cnFUeqkb3CEvYy9ZnFNB3WvXxVX",
  "key37": "5rinTVRVBQHSbdWak82gV47nUBQEA2itrDouAfZnS74UVD4V9VB17u7uxUVPbnJB6XrJposGoLzaA3gHFq4XM4qc",
  "key38": "4Ra5EJ1yx6W63FTeMPXCDRYBhqTBQQ6B79spLmhiZXHtK4aK3w1jMbc4KMmJm3jkmem96BKFmzUEU9XF3qDMs196",
  "key39": "5hbiW6EwCdqqCDWreEdcDByzp7mbL76VRJcBQQf9uNnpJ36RKPbomXcrNybEvKANtdYoxMxgbVK4CB94dTHBjN1u"
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
