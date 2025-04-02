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
    "4J8weVoUAkkFmixEirKbxgs7tK3VWx9JU8oa8tjk5DH5tAgRPmsKJ4kkadtAyfVgRtAH6ZMTxNaApgBmar4oyAvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EJpuMgi2HVz99B2UcRNWbGHNMGmn43B9en13QcVcuc86j5gkeodQUCb2whe5Kooca4pKpoNM2cL5PKjJk9vGZub",
  "key1": "4nqWxhXGGjr14LR7rt3PzRYBaVxohJErDTVUrt28jnwvCHoBsFepXCybEpMD91XsKtiDSqhpbcgFoEwVC2ccfWfS",
  "key2": "3sJqY3dwbNLhGL5zNXCxNb3SMsbfZfB529Nt6ctwZ5DiFhTv1U6a14CHNj6k9uvp6jDDRWM4H7pBadpmwUbv1sYS",
  "key3": "44Yih5wUy6GdqXzoxkea4wAtxMHusHMBbGDkciyDv6REhjGgyAJfv1HejtZyjsoUR4So2zsomaLwF2TtzBLrH88H",
  "key4": "5L5gcnnWdXMiKk3CSf5kFBgjTH3v2YeZ4aD8bwXKzHWi8P9UK5suRkL13XXc9KJX3MD8Lwi5f9G66RmRyh6y1tXs",
  "key5": "2VGmNtddzQBTRPmh41ectcwntCQZ64xxVyz54TTAoVYkcXELNBxP3dmYSMiUeX9AMRdWJNCQnJKu82mUE8PaHsJD",
  "key6": "2QL8kTaTuHEgQmTekrnRVRPFajNx5p3yCRj1EVP8yQVDDMGJQAw9yhgmGtRfBHXvauLzTkygxGa34BXmuEg5oc2e",
  "key7": "36AkcVC6MuVyAVr1LHozmnPweUpHjzxUaeCniiPz2mNHPGG69pAp5a6zFJ2mxRwYksNrAR8jC9ZcrFjbhDJDdUxa",
  "key8": "2wbTo1TFN4y3Qn1xkuE6bBvfB6Msay7yq35FjXxPEVF2mL1RbdD3CpK2eT1gE4UFzDU39WwPPpQGbEZaCFozMdYt",
  "key9": "4Z94dCuSB9H8zb46wiWQEyq5dWU53T1Vo9hyPpAySUKi4fuu5odap8Ahw5y6iiN77dbXZizXBnpQ5Y7AzLoHsNfn",
  "key10": "5ypuTeh7qYLugyBi9tkwerR22aphjWGfUKQ7xXkTwFprcnDSxvmqmpuFNxqtTeBgMC7bY1udmrdh16SQYrPAzS3N",
  "key11": "5qN8P6DYzWpS1NReESYymXKrzyxhBtfS7z3V9qAmH7q5VZYQ2q82qZx1hXiKp917XsyaxySnxZ4SE4a8TvyyXVgQ",
  "key12": "2fD4Mmnqa8bdmp6eSnpE4desASwwbch4Si51sAPDQpnJW2T5cZe8wf7Xx7yS2G9fmjxMpGxviHKvAHHiAifGrA7Q",
  "key13": "2cWv7qixFEMVby9P58mTzfeV9bf2yEGyv4dipvTUpRg27Wb7YR2PVNuD5JWvDESSqhjocq24zkutyhwPBSiFYiY",
  "key14": "4Gpu5NNGSD9iPEHgyL9NE8zXqqprhK5TquX24Jyo9Q2FFQnw32VXBrBpELiPqoAMuJ9pamCcZz15QwtsbgJZPrg8",
  "key15": "63GdViNrUMeZkeDCLPXz71xpTc8iFjafNWf35paQHGYHmEViLdKXWjJN4j4raKoBGhVFPsdGpsVpmjoDS7LXR1oJ",
  "key16": "3ArWg2QGm9o3AMMpqRgXXV93gzActbFTaPkPcbwfUgseATnwaEBjY4jK2ppjUHbn86VCeYNB6KSC6zoKE1dxSark",
  "key17": "4TUPS1BnzWApe91UW5xWqHeTLhP7jt3oQ92AxyknHwghrFx82M6bsEJRrtkw83G3p6yXfvtDW4Hoyf1tH5Wgv3tQ",
  "key18": "29AgUAsoM8wGNjbdVFeSFeYTPfHHvukNqYQ7r9WgfNC9xVcZY8WnEqrarGfqzGE3AbsKwDApqjmmZLSzw3mWMEAv",
  "key19": "58zgWJbm4wtQPcZ78MFzazgg2H8KdRNwj9R7HdsF4GoeBdEwS2P5YBWAMFf5vHMd1mqUGgfkFuCsePBkWSkg1ECq",
  "key20": "4e6t4HD2uCYbMCyQ6676uwroagJmshUmSLBdQPS3igEAysKjHYTHHNjxAnK745K7g67KinyafbhzP26jbGGCucC9",
  "key21": "41sQfR5UYQmc1UKiaNySJkiZF2bvSKQivv5KwtQJ2bPeDGKtQGo4rkZQJfqQjge8KKARiFW3Mv6dNoDYPq31YWPD",
  "key22": "5oyk5hvz8SfZGLuUAAt4Z6rAUHtfUyovxSwGKf3V6vusMUkKewAYeAUX95ohZ6Fys1h22sieS7Z6s3mrarWWgqhi",
  "key23": "3wPT3JrdzcT36USx52YUW6ZcUdBNGNMXpbKLCSieba77c13r6bU7wNDnVVHqrvpJ6jyN87bqafNYy7Htpra5aDZR",
  "key24": "5LeB23Ey8Sya4pVtK3ewSgUY8mVoMFnmf4nWg8sufKmNzDAru1kAYXZgyvigW5MHoP3vTh1YRq75Us7jWwFPjVP6",
  "key25": "JBqZ6gCwq2XnwFPfmWTyExsBWoLKbKbL4DpNWDTTiM3oHQjaMpAHXuTquqcHYpNHHdptuEjZ79q9pDCfKvnsyXW",
  "key26": "5cjzvffyDRbjVxHn2oFiD7STFXKUjdDMc5TmwMH5srMx964fzKhX3p89eybPkFfKyWHAwQiSadAgACpS2Rzjb9Yf",
  "key27": "2RrUWisgP1QjcxbQwBg1nk6wZVj1BMcCQSYFChT4KcuuKC77PKvaLPpds2teKrdtqLQtTABBMdLM7CWo6it3DLQ2",
  "key28": "66hnMHw8KZsxmADPjbo7EYCE1ZLEapdgkG8HLBnGwSPDNts4v4rnsKrr6VBuUUfZeHxnwbJJWcoHHXvFs5jTBkpW",
  "key29": "bZ8RRcw8cyUxuBFy9qKTvixAGspkhXD4u6soTPhQra2xK5bSacq1x3coUqhPoqbudDiVQQen7jD6xuVJTZuYyHi",
  "key30": "5wPyfrG3vt9G7KqiHYj165kquV2hTzQbz1913YfCavZHLpJyfTRZvDvWbaFAhj8HJmNp64EDdey2KCDm7WJ6U4Ma",
  "key31": "429DXGXhfdXyRgWhqTC8EMYTCwnaRWbXADfoGW2sKubEhyofjt8TEm4pDa4PhMustAo2w9EHxSemye1gxxfp5NWn",
  "key32": "345izVyVdX5tVtjbgfh4jJTCPftJvDs27cdzifxk7fQmv2cZ7zTEaLzdsxkbxQoomwUSSDDQe8uG7kJicf76mub3",
  "key33": "3JWYgfPWM5m6LQNNx2tqDiy8zLfboknH1XZ8eanvcjfaF25FJzJapav4c5k6Y1aM6DKJbjWZMdri4zRV5c7UCYFB",
  "key34": "596FjdgYBQWHbtEKcgCGEmV6bMkh9sUy17unckHQcD9vorcmCCci6rfmV1Vk6UwikT2XrNrS48tUKEcJpN4kAe4j",
  "key35": "4zZ8GGd3LLDCZQpzvPGKkUquhNm1hgC2kdcvLQ6Q3bJnd1noqFzCgaK8r5SpYe5HRwwRogiichyq1x9NQ1cFuHoa",
  "key36": "2PZPt7fBa6HA4YZxqvtmKtjzG8jcjP3eKMsPnUUtFsowdvzBiE2sVPq22doXhJWVXopcvSqfKkF6W5BiJL9juiAV",
  "key37": "3JgtuaPYU8KyosofRXP2sk1APREAhbWxyzwZXNxCFycD3cYDyd9izYxsNGK5KbEdFtigyjWkPR1Vme7FBQLMhG9i",
  "key38": "VET3Fs55TBeqwGPMicDGNVq5CqbhTzUJmbGdT7cT7DYWjrWfDoKD8MTWSJwnNdttx1XYJoeXfBDSmhPBkTUGy3o",
  "key39": "52bhL61CR1VFtUULnV1SrTJysqGvzLhKpsxuKR6TX83AMfszUntbgMSZVwB2Pe1VBK6sGm952MvuyZvgmnAg5A2L",
  "key40": "3VBXupSWgtpuqkQfkTT15SJfma1YJNUhuqiuFw9oQ4rz6fVYZcNEqYxFEZDbHqRR2zyzmbxozxKL9wCcdnfAU6ug",
  "key41": "dBzasFqHk8g3yUnLzi7eeGY3NYKzH5ufh924613wzPxreErWguwGmTwqRSeKs9byCf5QcbZ8Z64FimMHdgTwkJz",
  "key42": "4SDB2g8PUTAp4FRxroDAAVQ5ZhGuS87YWMknrty5RJ1U1ddeMttjzoJFM96ECeJBEfjcsPHVqMPK1m76kXNKJdNJ",
  "key43": "HgQkRxEvfcQoqhxPEA2mAix6WdjKvrk44WdTDHmoSGETyC2QoJKcv3g2NnCpfM7G6ZGDNSHdyua712wHxJHqazn",
  "key44": "52RuEHBqzpCNein1wDf18h1BkqqGz6VMBM8Xv9ArkFzG3833KxXhcWESSv6LekFdhwZiBeVYUUmBN8XDVqtkKdSi",
  "key45": "41SQcxYFMNnYCSya9Lh7DxbigWg1XHcvB7Wh5NxxuXyL338N3Kyz4MyVYgQGUzHHYkTbQSrFpXWhTLngiAvKxBjv"
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
