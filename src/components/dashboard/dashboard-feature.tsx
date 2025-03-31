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
    "2UzPEmWhDeyWswAyYLMaosGicsP1wzRnSZuvBjrRmvaWreh4D4vfNo8LA4H7uZrDFgFY3jd9WWKXXSCJXNJm1PyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wt4w5SwWnuYyZuAtvUVGD9A5gGbn4ykr74GtVfhk2bKuaZD4TRE8izNzi9aLwwxFBUzXbqH3Hu842VCsVEsWQTE",
  "key1": "3zYVEYwes5GPoxw7mB3XbjAz2REMUc8f1PnTNF5xPUdpwGCgaw7i9k8RZWqvVgvk71zh6PuUtRzAty4RxPCuNu3X",
  "key2": "2cvRamwCfpTmb9Ffp2RpAxWFpMo8NkmDKvamZm35oKLJ4QpMfKxETnc9fbZxaxKCqvGPv1ji9U6M8jBYTvCqF85j",
  "key3": "g9kavoQpB822VJ8CUa4gw6cKXo9JE1X31nLhoASFPzC3GY68v7PVgLzZfBJvnRvVcDCKboC8Q5jf9BeHcTKBL72",
  "key4": "4ZcVrokarjHsAsXEwQ6rHVYKH2gTWM2mKveSD7ZWUFbEigx3rZZX3n32HZ5cut64yQJdLzKVzC7ccXDNchDJhN6R",
  "key5": "2JCmb3n4eWUP4DGaX8BSezMXb5yeptFGs8RNDaBKzCguTq7Uz9mvQp6uF3m5Re2xn4JPGtZMwk63cj4ytGVLYEGL",
  "key6": "3CD1qMi6YDfFQVmLBtkb1w6zTrQdRKpioBmJQMnYSfxQpJjb2LcNcJhUqZQZq9H8jYbJ92ZXqQZDNnw2B2s1RmSi",
  "key7": "35aZZUt9VUNfTgSmWGbgf4XUVGTmoeAECmaowV5cSFprZf1DnMihdTHihbvYnqnu7KgDH1p8Cn4qmynnxW9nFwpm",
  "key8": "23ZUZRSMf38L3mHVTDCXKiF8YrqyY3MRD1AFRejLfkpfMY6CsXpY2xG35oMjD38679dUmnmbgK9Da3qjAJhj1wQJ",
  "key9": "W1tsKLopceYx7JfUdYV8GVGnynihfrXBHKX6Fm1hnoFFQdBxT1oiZr5xJhr1ff7ywFncHYFd4bfXS8QnHwJDuYi",
  "key10": "4sr3XAwrTPxC6CbYPG8bkTBiXc4TTwAwkyh2aLyQNmKRP2X8jF7D9pd4N2MuGEzTMy8mNbL8vSQXvaNSwwgVy2jc",
  "key11": "4Z3jDdQV1y5DjPNJsaj1VAvAfnXjqgx7LR6VsbLAwKh4mtMmx5ygnDuYg1QjqQBxqSTaWVHSa8DrvFstig7y5X8J",
  "key12": "5o1CkWs24wgMBkb4Qw4SacegV6c93k8FQemuJTBHJctHy6AhpewbnKfo7cYj9iCToUmJAvyM7UCeyFR1Kc4gkeW3",
  "key13": "2Hj3r2nQrUStGUosSh9CMWh7MPJ5T4H3ZziyA6ww673ToqVRDFGSRXRDDmcLCxnDcTDCyZEat29SQy5qEWmX7Qrq",
  "key14": "3Dzgn3xfTRy8jF4cKXB7cU8FZSiSkkVFmq7y6QTQ7XvwYtz3cWKvRrwizUJzRCXhgaNDfVLyC58ZX25MRMBWm1EF",
  "key15": "5L5QkGJXotgho9pujBhuKxosanod3rSHb6wM9HUgexVNvbQndDe21Wyij9nEfJrdEWzrXVCAYW3TzMivM4MuGzHN",
  "key16": "49YjBYCHtD5vBon4f9UdoHEDy4hkMmamwM4GhQ7xXzPBBLe2NMis8mhxtnHWRyCFeobbpPz6up71htWbKix9yJ7h",
  "key17": "3ncJqojrECZq3PSuuJtHhp7dPMU2K67eBU8LJTXsZ55QQ4FLxwmLE5QRbz9YnmykFuKQFFvVPLcr6rYczpd87wLd",
  "key18": "5k7GPQRK9ccob1HQ53WC8Ra8gGDhNLXe7kfoQgj2CK4CzxnwYoFBzEf6iBiEeE8ReYZPPN4fTGuk8AvnoLMXqc1x",
  "key19": "5pHn23J6tQZ1XDpJd6v3g48XDvg9S6JVueLfc9dPGqHJFbe1RQbn7TDnp71b9aUmPXKyAeCNzHVcxYNWcBTP7BUP",
  "key20": "5E8FHBDAbKLh9stn27kFubpvUT6VHMAmZq8BaYJMcyuqN62o1Vpi7jdwYgCQajd14rz4SdNFmYu5RfP81f2RymMc",
  "key21": "Vb3K5svAWf6ttxTcYJKtmyNd65o5Pavgeu3HF3GY2mVGr3DcRkVGxZZ8UFmvu16mBctjdrGDvLSHvz67mf6pzpd",
  "key22": "2TSUWWXFsE51Kx39J5u4JMFYadVYWaN1VqXa2aZzAJHNPfQQfBBENS1ogiPMZDALAZNmLTTMvWbudah9vrfB9E9r",
  "key23": "3sXhDe6GECoDSEF7k9kbd6DSRyjodDdW4xpCJJzreUJcqXAx3jhPWKNVRfHLJAEYqLsVFsWr9YNCERpSuRd9gz7f",
  "key24": "5GWKhAxS6invsMP11mV2FuuvwDvD7atRH6FDLeCgujo211ki47JDXkjWiUsvtkcWFyE3tQiNRfK1bCS864dFqf25",
  "key25": "5yM4AUV835GVpEJMiH3Ne4C1Yxiisc4aBZZjyDkZvs6kSwNZ15mF4ppMzwVqa4xY4ixeJb286vj8dua8mq9rtPbi",
  "key26": "34zQGjtZPi99y1qzJ67D8jJikdxvGkHWt1fRVtkpkoiF4mtT6JF9aHz5SEky2skvrepvXF1ZQMrkMd971XmK8v6W",
  "key27": "VUnEjKE6TCV6xZWr4PAkaibhayi5uBFCmP9A3DF56reMJ9BTkoz3voWqPxDxpaRZ4CMERmQ6jgbMmqLpkAToZij",
  "key28": "zqoMua17kLfF5pwNFP63PsdG3fqEEGkPAGz4gBXXvUgjjQVQ8x9Xw6jHYU2muZAS3hrU4hNU6AfpSLAs9qnk7Ju",
  "key29": "N8Vt1ZSvkJD5yswgjRMTWQxGroR2KpyGzP5kSRdtf6x6gGCEtUuJHzd5ENnCgR7jSQyZjwDXRckYdaRcjGku6r6",
  "key30": "3DrjrkMPy6ptRKLtfpqm7mdjcPw7DH12xs2YQN2Z8yfj5xyFthDkhH6jmmWxAPnRuxmMpQV7zsHPPQPyRc2utMwE",
  "key31": "ggrfG6wJE4wHKsTMUMonShQ7ER8ptqoUW3Niv7HVYySmv1GH28T2bQFX2DE4WRdnX16unw6rKP7C9nfUKDcYAe8",
  "key32": "4XMuPr6mHPpQS54SvZby5WnM25k3kuq5vUiTmEUmvCzBKHmexQ4ogSXDy1k12v8Jz1qG3viBGkwy7D4NC9Gtvx2r",
  "key33": "C1DDnp4gTQAx74CLuykUMDDHK3Fx1FpQrU8fyySeHuD38WN9dRVN9FN6CKGECjwr9X9Es6vV8QrNEyDfTAdr65b",
  "key34": "4yoK4ZV5ngj9i1ZpC61GuFSyUd8DQSViQaLPjt5xAowkbRce9sgn6pczhZ44nqE3Dtvc812Wagq4DFb2av5Dmspw"
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
