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
    "3X8pmwyqgKPyQWUk4Dq3WEbAZf7xAM2iPXWnMR9GhzbKE33fp1afzkbHn3DFeQ3jhRv6qJMFnGNtdqkAcwBtmchW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiXFBjDio65kh4Q1rsSZeLsPi2LmiKbCec3vceMDvGmcNUg1rJyxF62NF5w7zktau1DXUgfpXxpryiiL6qDtdS2",
  "key1": "4V1NfxKC4d2xjagwgSDYMLYZ82tQRcjFJkhdtgcfv6kQa8Q92PtJ3jXVfANtjJw7F7HB1Z2Xay3iBXrXz9J7gXQ3",
  "key2": "5wqauYoUK3KdZv54buvLb34codbnnqC3wLY2fEU6vbBNWqEytdC2ascduB3fqJmVNFJeiM8T9enwmJVV4pqktbUJ",
  "key3": "2m2mjxJ5yDfTdNn7PLJRSZtEtkbtyC6pgDQUnFpCPjaxwbZEXme2MGijiyYgnKw6vvrsCZkSjJSWdis6Limc4aUM",
  "key4": "2VR4X6kR25Wnvr7qqmsYK3HMpqmsafNsVibzeyHTeKZJh3YZ954W3AsWCq7uGc66NyeBAQV5HXFT3qiwiprcPxwt",
  "key5": "2UJofyYEkrtrKCgCETGutKyuZ9Sp5uYxj4pPwEihz3zrKqKGmAK4621Ud5ukbzCXkE65SiPqr96WeN4bs6TtmSPz",
  "key6": "3tQmFmRgLnkFzSuMjPh63X8T8oyfMFQGS8mx664vXeXei484bxpwTVqRXaxQ26joVETTt2JhnfdrNiyFtFxkJxWE",
  "key7": "4wx2x8V7s3X22Ec277ykzU4CoFEEQ5i1S2waRjMAqM9fK78tkbs9PD3iGQ9qLFNMddFyMRXqVDVXbZnxQpQHkAPX",
  "key8": "2rF5w57kPwWzG14EC7p9cGKqgoEixayCLAt7JAgX7MPTiTv4Cq8e8Go5fBfbBp8DsiP88pBXrUyR9Wk7D5cfed4Q",
  "key9": "66cyw4YN9yqwJuMohgZSYxeiiHuLC9Rj6tk8jq6ceXEY6Nr4ksQSuB6rpE4jcfrbknfvLNqEPK8MuUjL1oohgMuy",
  "key10": "6NUCXz3FkjiLVSEfqGhfmrH61KauNcTQ71ML2hn9BD3tacKGbCTCskQhbZaJw5NThkmLPmeMbzZL3n3j6SiJ73s",
  "key11": "8Ad3SGSnjHSYcXmeZGJXNRDwfJD1eA935CxjtV218RDKd1WN1YmdnznQg2fQZZi4pL72w5PduAQ9C9fXsJbwNoz",
  "key12": "2bq6jymTgEdNNvBVjG8Z9Ao71P48gPKsWpkdqVw3HTZff6sBBYVqkigcTRPcQBUMtDWqJAwuCd96uPDJdRda1N2N",
  "key13": "3GhEcvA6c2UbvZcQTZMbtp7kJtwac3HRCN14zQ2jXVgD2RCmbaKTrjc7TSvt2v26UR6PL4HM75dz9itcAS7njkQk",
  "key14": "2h77nniPaJiMoa8mxUfXC8ARLVsymQooq9uPUbstZkoikBUoUMgk9TBnfvA3LFc4r8DkV7UFJveFUD86f3gYAM4o",
  "key15": "5BswZGoShwEXXz2VMPWM58JupAeeoBEfJiCj8jjhxrb3ooRLyBxHAbZThcXinHNHSAnvWBdQtVuc3ffthnoAmqoP",
  "key16": "2nLCxzVDf7sdriNNhbQcZuvWdbpuFZuEKvW31fj26yZrAhw8btZozS1TLYxsThv92zBiTGdyw6W8JifCpbfM6yFA",
  "key17": "5dNDrjnacR4Po9sRReaqBU3KpanVYP8ZXjsPjXWW6HsVYXjvUjKoZ7Aureyo5frWHxGVeoSEv5YRzp8bMMG1undD",
  "key18": "4R7WrqFX1cXgx81Pwi3h6oMcXKsq1ZW36G23xmhSx6bLRUfj7v6Rd6Qvabb3Xe9ZBSCXtFHUcj8aGJHD1DfuCMDV",
  "key19": "412cU68h3NxyPQ6ATcwF3BeCkY9XoHnnz9wuJN6T76fUquxGP45njA6isTLBpK5eqPctpKa2Ld8MNHDas8dHcxqP",
  "key20": "3xz8V3ESEkS4jDtCbAVXDyxcPVB6LbhqvAnE4YQakUNqVrcQrR4pH46RSZUvLEE3dZqr1KHaeXRL1Y7C9B8ZtsmL",
  "key21": "2SEMNxr1XMZDoMCCJirdyWvgFF4adDfJ15qUzFxA7ffiYDPvwqoctg4sbQe4FJUk5XcYtVzK8TdXP51ghojRU55e",
  "key22": "65jpqeF7n2p4n9Y1zrkH8CwpkqENtFCQPb4ZGWAp6J6ZZZw4Sk6Yh8kHDLs9foLPHjJzLGRu82nC8mAubdYjKzfj",
  "key23": "na5SLGgjD7H8f465wFcMyYKmNuS3b3CAaDpBt6qNmcCAxRd1N1mYDnLRJTcWCgRSo6Z1aTXtHGxuAQW7yH1DAmk",
  "key24": "2ud5UnZxbJLgtoNuFPsZ9AWn4gPPRKp8hMPhfYVLd49QtyRtCgCC1KnXnw4vMvHg7JohK6XVxm3QeToy9eaUkZhY",
  "key25": "221eKJ4DLhBdYEeHL1VuCMjd5VUyyPnM7hFxKpFfR8P76zbuowJwjAmVtSy6RuZx6bKGeUaKSWpLMHRLBE1HHFXu",
  "key26": "2RT4W75tQf2oFXPU9HcE4Bie3jqdY47uzTaHjRKe1Tkvdj8oUqu8ER2gzdLpw9KXmpUrqfzMpJFDD2nLhKXieQBa",
  "key27": "56Lc4yFEghyh18FTeTArbCv9PRG8PVMVa6YCNJd4TdotxuHhxYSamwogx5NFgRP7DD7jkuUHxaBn35EAPvgKaNdM",
  "key28": "2ebE6XXznptyS9G2ZuB7zo2Zx1gijyXkbey1NKmxMX7pSkWig1FM3jQjTmtmhWd1SSx9vbSnorjEVwHvyR535CQC",
  "key29": "3hQYqyZWKedMQcGZBtQECrfJVyUgmxGTf5WkgWzs1yVupxxhHvmcsvAA3AKXSEz9Na9PZn9NsTcWDXwSNNxNumL7",
  "key30": "4aF8AYnct55QA8iGzXzsJxAKQzPTNjNBzNfSZ5zt3U3Z3ES3fzbPcKYV5EBC6BwKx4K1G4fWFr8caLppq9hhJ84h",
  "key31": "5uvE9CxDKo5bmyowHEmY3fbNRdQ25mEYfdh5eP2Mx2AyHjYjTHmxhH3g4b8gBVTknmMN8mFmdzsyEwNwEBojU9AK",
  "key32": "41UEZfgDg1yWuWfCeAXD7yr7DTWhGr45xmAmojxCiWHWx5SLsHtbPtgkjZPNX3qMhoPcwkTXdnwBXMhMWK5Mvb4H",
  "key33": "2ftryaJjq8QLkQprvJL9cSe3jznBkVkVMjzFMWSgRNpYMBd7M9G2wvwx3Nai7WfUMicV8mHTdnxq51b4osEbYpsW",
  "key34": "2nsShwvK91wfRziD2Bt86XE7sadPqhBdZ1SaqKepB5YqHkiQ7kQEwo56BZULeKgYxL4x1cZNxYpiV8QXewqQuexL",
  "key35": "4o159NorKoXCVT7NZ7y5g7BWSMeQqKkcDNfcXU7XM7KLQXCdcDVZdrvLpEFverByKcKWfCrXbvVMP1WxCA7Xjb9e",
  "key36": "2Jy6HBAoNM9NoqsYo1SdfMowwu2EDkbMxn5bpJG3cjsPn6ThPx2QUyJnggkSGztsDV7mBdGGZMsBK9xLux6Kfu3w",
  "key37": "4N8Jpw7JcF2WSvdRM6oSmvQdsQHGawaXoVHMZ9LRjgvRAyFaAfG9JS1hkCM6fRLydWSN8dwLmXFLqxQb97Hn91qw",
  "key38": "36CRdVce1s62HibucgbNAhHwj5YMpYAu8LfWKU4KtcfRoGYYPCkqez2gkQ2d7nwzeaeP6qZUWavrgBoLVSW7kENT",
  "key39": "2xuN3nrVkDewNhjdthcbiY4AtegKiMenFfjMqmD7sXL26s8sTqn7o7HjVSaJHP4rodBRYvK7oC6afbrABvLKt8Mq",
  "key40": "5Zzvr9ivjmph2SfJ2d55bZ8covNn87kThL8zSmtrVW14zzh7jAvvLjoPNyLBGC4xjw9MzNGSETt4TnxXQ3bJBNyc",
  "key41": "66cM1avhing8xGySA8nW8zfiiGqir7qSDsWLgiq7PrGaXwywgry1kdm2NFfFFN9CgQ1FjHUGQYXYSo5btAUYjpuY"
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
