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
    "zc8EWS3Jb9ttMDBHmLd35m9zCcEamxdyrvymHE2H8aQmkEdnLNHMPYeiVJbMuSWzE8iyPfFr61eA5sEu3WYi6Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVH1APq39K2FNCus9NpAogeLRMT72ttAo5tzzgcXmc4yqmMeo3KvjABWBowqYLKm9JFxfHExtNcEpdxkwYiuhB8",
  "key1": "vL56g7B7CGArD55CzPPQoRCq8hArnMvKd5y9Bc44yGccVGjyygQADgiH8oQxJjicq7C8LvT29YLeQeb19AHyALo",
  "key2": "3zEBhif93hFVkXB2SQnJ12TfXbUSfJ4yNeZvZneKYcs2A3zLJ78FxQxnt2et3TB8CiuBNmg4WX6TGTVYqL1TfsyU",
  "key3": "ai28AjzJMBhNTSKnyZCYtb54E2EzAeF3xbcvMcCgKwMkcrCYGQnFbdHJpR6pwxqYoXNsYLXNDNQBCXznrqg9Nxm",
  "key4": "28CH99VgS3D87BW7mViiaudKKeYftmgbpWhdJmHXjptipRajZFkzANrWpZXgNtXZtiFNLqGvCWTeTMUnGUmYyeVN",
  "key5": "23eieKJV5AjBTaQPrm4qG1JNGqVp3Z9Z7hNuAGhqexjmFVY1byAnWqNK1JEUxiSyzyNJLCmJszCRNpJcMkDnmKvR",
  "key6": "4rYS3uG1vSR7kwYk5FzvsPfdgg9sZsFQCx7WJz3rdcNYYQGANjzeHVfY5gM9H6JZL4wAdXx4Vy3KboCNXuzvHWdK",
  "key7": "56nm7gXxWKyXNFuh3CutZLaV45JUMdCsYgbSKLjRtqgRnAGsh9k8BCYpSA9XwXxeotvRNxm8m4i9NJRfMTV3GD8o",
  "key8": "4MWqgRGLGYHMV6NKJgUUvEXrwQicJLdELJQ6hxXPb53Wk2FVLvcJ41aMjWx8NEFSjQHi9ULhSB3JTwDvp5WTTa23",
  "key9": "4eF57XoPhDp5mrc5AwVwdq5p874pCUEpwS7wDvz8hKTsrUMtunFazf8xfJC9adL7K3yM9uFi5DW6muGpiAiwQwaR",
  "key10": "HHpoG2wHjyu68TBJpiDCM7LF6Rv78r8K6SHFZg6vUAqgsR36zA28MMhBmzbT4L59FHZmGgax9oJGzX39AjhctUb",
  "key11": "2C4jQxjDL6CDDcpZWtkQwwDMb1AMP9LmPLPbbVUT2pHHARspxJNV5Ke7Hs1HoykXYi9MABjVwwAc3qNBRWm6w5B4",
  "key12": "44otZqDfnhxbfj1HW6kyhQT5NMCZmkKrEvDXWEPKx3dXtJxSYpc1vMhzmdMUYKishtYqW1JNACknwehg7FJ9MP9j",
  "key13": "FrMvq1anmP2czkBoTYVuv3YortQvSVtEAC6S5Knz2mU5kALrRNZpz7ZLdzZtBnY8vDEDc2WKiRCZ7nZZYj2SLRA",
  "key14": "4qQT4YTsivFAz9G6XRX7k6uu72Xip9JcKmYKN4Xcn7wJkEexo6kYwnEsnJ5N4y8x8LpCVvU39fS78Jt44Ap2aJP6",
  "key15": "3YXagNshKnxXiuw9G4b44mQEN6ZGAKRBRF1TbpnmxuUqJydEkrA38MQfPSnVpqvwrEUAc8YcmB1L9SXjppNu2TyD",
  "key16": "a9CxRVkACcbHtdVcgByxxtcAeEqUQhZmabLZxKtmNbtAk3z646qufg4HeQVGufRoC42QJtv5dpZGycNdKmzQnRC",
  "key17": "3HiiRjRNrasYwGpb1RQBb8mRQQRes6QTpjD8kqYuY7BN7hfEUUFqwMfFfMJXPqfUPY7ku7BxLTwstAnYN9fcpkaT",
  "key18": "5J8WxcYyHx7HiDhisj8ZWUurk29tTKtn15onftqPfHWeCNij52qyYivKbg8kU138mXvijVTb2q2FujwuJNq5yesJ",
  "key19": "4aUWAsugH1ZWws9geZBL9Pm5yGctx13MxYx7kJnuD1z5NmbKenZyCKvycb9oiTfPb5ynS5XRFPB2Z3Atobv6Qj7D",
  "key20": "37zGvuNPJqNT4oTrAbPgfmEeuzxwvJC1LCAUcfgQcRnZKMkALDdJWBj8Y8f8ADEVSbXjxhMU5NdoRxV4RfzkFFvA",
  "key21": "3uhNBSwWPHBVnjUwWZYuFutwYnVsiGfpmFuHgWSpfSg7W6gf6KXftB5iXMXt8XjyyZYb6vrANP6kXFDrSzYiQ5pu",
  "key22": "3pv5XQojijuzkREW1iKS5YvmN33hjfvKsY7tyQbiT7dieYqKKYvqQmUsqDZWQsLSWoja1kppsi6yNNesVctyFDyN",
  "key23": "3cz3ZECuKFF6V1yKtvkA6LpQEkn1miDDzdZmVdtURpxjfZLxguoaduzPKnBU33U8ExRZK3LFmdJd8STC6GUAhTnc",
  "key24": "5iRXg93Zn1zG5szFD4Ei8eyMzfNy2d2wvxcmmT714f7zoQzT6fmYtV92HsQJBXptM8p6rdrHRoxwTwGsc37qEzfF",
  "key25": "2bZZZYAGDzj8KA2WWMcv1yxtEzh79MN6Ec9TqDR9sdWSdVBm5N9mSb7Jbhs9XUC6kUzr2HcGFP5qNkrjyxKPxcfp",
  "key26": "2dJ9sik1VcS1yNPEVVfZQMPCUnQk2zGeKtW6oQn2QobTGaZrZPdHvsQy3hiBcGoHppCpUmaswWy5yRqgC53c34oi",
  "key27": "WbHqDpQG4Dhk79vzwDYR2uAccGwP1FaQcWvLq7jiEay4PqQmoyvSYTPURjkhRejoFUjJwjYd1DhgU1uu8A5wSmN",
  "key28": "yXhP6joWmN3nfeNpzRGdEAizLqzixZeUC3KkUDVa8QrraLd8B7t1RAoB2HLByCjFWcJyyeJRgmdAq3BU15HWF3f",
  "key29": "4CmErEgehzAC3YL5fAgBrVyW9waYvpzGgwaPzdB6c5S3oAPofPPUyFqiEu75fTR9YdYGcvhLoXfHLXDtwj3chmMD",
  "key30": "4VfP44C2Dvwam7ejhR8M7BGbFeELiDwEyFr3exUgiyLDMNnCgMdgLdnzCQgZAkJumyb1WcekVdTSfxxwar8k2ko3",
  "key31": "EUC5WZ3QoVDcZVamnKr2QmoRo8ddMCEKuW1EWCRhYEpPFnyBCWhWanRfB3cvM491Ue3qKG5XaujsqR8VePiPSMW",
  "key32": "AVnHTKLKkHD8ZEWh7TDau6kjsdXUcKYGyHt8TFkMXCq91UVNqkTNwbHdxMxAfCVKyuCKT4C2rMZvDty7aPwo13T",
  "key33": "XE3mBs1viyZTBKrezVX112zWnxabMupPnvJwtWaiDZA6dk4TBRZ2v1MNSEym3fGruzavxjMknT94oRxDdTMr8X6",
  "key34": "3aX32zCgk61sbmYvmeWLrj9PeRm6NBWiiV1GgzFpuNCSoL2qF4VofGnv7UnVpRbUz5tiSg8398TqkQiqVs7VPeJE",
  "key35": "vZKBYzijmDfyWW7QD8nv64AXdF4QGj7va7ELDtc3EPY7tosr2jFPYGDSwjbDNVLiUCSf1PJJ9qMVsWtDwZ9oG6Y",
  "key36": "5T1g5cRqs6d1tSyDf2NNesTHmZ1Qe95mQgot87mMNxsH1SaaCqwahcdqtTY74NjhwD2hwjN4ny29ECRtPXwuwpeQ",
  "key37": "WL2siBamvXPuVcySk9o2NQ8vqUvNiNAbZsVTtFNKXwdCQ7upfsbxWHfai9uVF8mSs1s3yVkba9zpdEYpKYEuSPZ",
  "key38": "5xGq5cRBTdd436F6sCqL6NMu8YHCPiT16g4AdjVUpGeMCY57DqUqgdiNvYdvH3Aqy3LcZUp4J67CY8dkZzk3Jruw",
  "key39": "3KFECQMtvnF9NrjKDtNBtbqTGZBonjN8inre9itc9npM9sHDS22Za6nZcNZAUb5hVyCJRbwAjsAJZ6yWL4tJundB"
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
