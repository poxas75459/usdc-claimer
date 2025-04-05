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
    "5UzVYH88WQJbtkyxVEFAmnan89ZBMv8MXMgKCM3QYU7a4DTL447xjjVKJ96ap64RQpd42pHTtc4XndmFm1c1uPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Ltv8VqiktJHJpbfSkS7CKRtKNGocB5Spwje9gkKzZGPUCkNp67StDvEMC76xcobM4yn5QCheUx6oQDs8ME6vCq",
  "key1": "Z3AVYpQodhpLJ2Ctutkp79RcohQVFbjDqzueoZYyQiyQ8WnD1Ma6wScunyUX99uWmjQtBEBRcdZ9EHyNSSLWYkb",
  "key2": "3kFM1HQ6rrFffnFu6ELR3U2tzVdq6HwEA74Pv6QDSQNKSmLZ8cy3B9UVHifdQdnxfwMohU6Dg95ktVXv5GyVr1cy",
  "key3": "2oybmMCHeWuxy7HuM8AXbV6hXuppof8LmJRj4PQoTDSKTA8heEMo8kNsLJG1bM8mJeKfoKqWTgJbXT41XpyqkJ4T",
  "key4": "5zfrWJz6VRuc2xkHhC2BjB1ZmuyyD33QkgBHWSg7c6WkuXZhNaV8C2A34SF2eLmdcLhYU6Bmd923LHcqYncdoFSL",
  "key5": "3HfBPjNPCuwbR8pdRNnzkHcDMkXEpJJw8fo494XrbdVwozzfSdWUSTP3fhynjVay2aPRW9BCjLwBA5weMWLnuGTg",
  "key6": "2b4YME2J1MxNucyr1yHwY12h4eN7wP5f3T7rGfkiWxvgXFzvpG8EJ5jdVx2JAbKVuTy8pev2ntekxJMMfnzFDQo1",
  "key7": "3d3GzhEvpKk7EWf9wiRDoPdyCbSHAuAFqWseAdDkHcPSUc2YyFbcbyDP7h8WdpuaALwfmCLcNWurBWHDRBmYyrVU",
  "key8": "3wPE8wmPAiu8EW81MoFGtWSmvx2jBv3iAr111RnVtoTKydzPo8m9JmxgfofLMMeKomU79Bj4KPMKpdr8gZM1eZAg",
  "key9": "e8NgudBuDsTpVDAvcm8sYDqc49BqM6uQg3BcDXpBkfTDKavUvVVZYirc2HTyeS88UBdbxfGYnMv9tKf56Ej7gLc",
  "key10": "3hafGM4WrrKSPad9ufENTVADdh5CLHydHcZrxR6eeHChEHy19kwERteJzFb4WjWNJRD8UdH1dg1Y1VohB32CAvAh",
  "key11": "4uz3zpWojMn99Zed17UeDYMgbgirwrscTAsTJKDJcCpkXjvb4p1536bFSLLxxjcWfYinSJz34B4m4fDfixyCkhPB",
  "key12": "2aorVJB4MeY8Zmp2ToeHmP7o7tBxhC2mR7Aq2tT29yu8gNJtuxXkdAbRrz2mZVFhrsM4mEkJ1UNdJUCTWoDKADbj",
  "key13": "2qGoAJsL1xBruYGYmLtRLpMDPJSsErFDF3ezVXrUnLnhWkZit7AttLX2ia5KK59wvdW18jcVRKsYLHLJYoTHBiLU",
  "key14": "294q4nEb1GxC8i81tpEEQ8f8JLfp2eepURNH3VR3u6NmSRWmKepCm2Tk5A9GhJ8FRRybmdqPy629tzU4suB2uD8z",
  "key15": "3xLsawQzM2ZTAqUhQUM48o57azPgZEn41NM7w5g5zU8V64zvD3Q8nvSLLdPZHRZoWWMy4X1C54u49TJMgx3DCQTv",
  "key16": "3bWXq8DLfswsXMGSUNRsW4oVWmXzgcouMMQvW1ApeAJT954sAm7gCWgjgcq6bJpkLs9BaXpMTgRffk8bLMh21h6s",
  "key17": "4MMMSf1mzRuMTnGF4buUVE86tmXqavZPbXjWN7Rgbm2WHjhzqfiCmjGdmkAqwqQbvsrFHCziJx9G4RvfS2KaSEbN",
  "key18": "2edzMwemo7gQjLpHxANgv3aQJUmLXkiyivanf8CTovc1hQBcFeiigi2D7ugYfnLPvRjucZwB4D4z9widBNwLkrxg",
  "key19": "4uFs2aScpsjuHa1FtnqfZ5CSJnArJNyET9CTq9tdtHoMG2jBDyyF4HEm8HmNFKqpXo1QEGtWH6UMHFVvVYMMeATp",
  "key20": "4V3LERKLiNeue6CPLSKFu3rUVcpVHURJfjxtnf8FLJpWiUFCV6g5Mdc5SE6qWM11xFbnq5xsu93a4BAj6Q3EB1wp",
  "key21": "5faeWWvWhcwcsA19RsESMx8WX71Uq92TApAwyY4eha5p9eo4zQVT2mWRJdagEG51Aa2Gs7tk1pxTSCpAgnNfurcx",
  "key22": "ynpMoaSEY256YhmATsBSFw59tsLNsfrarkXGkxi5jmS7mYyNjrFpF6sQTfRCCVCzRXdFpHhAnvePwyW47CWTcEE",
  "key23": "5czU9W3cc7M5HNC8wjfue2ykiKBNoK3PXZgwyHHx83NA1V39uefVSLRaPFyZoVwcHhqa5vLVeWBQiVZaiP292QKa",
  "key24": "7ze4TNkBfG9hUf8oAgHT1zR4zRWyrPn2YNFn8BRFY4JRxNsJ2x8uzt79MgJRNqMr1WSAEJmVFzSwBbZsxtStoU2",
  "key25": "2aCpM9WJLjBp45UPKwJ7iXH18hBVdPuPDwzKgD5geTwWtmgCjJpAKRyRepBQrrXaacaFFDaKXGCk5zTV2AUuS17J",
  "key26": "mpasX2CEQbKsoL8rTieMADQUZiRrQigKbMiDMWCGRQZ1N3ZHou9V6xBKgHtfGizPfmHhAP7t1UVpaKER7NmBeSy",
  "key27": "2oCt5usVqTb7X8VC5hfsfGy8xKYXQBPZdg7BBXkXrx4P7uqxvzQyY2quc2Cvhr2u9FqGEbWyVXn6WfsRieesZdkD",
  "key28": "417VNkRQ5ULVHR8fSov57Stb8gVexeGhwErETR36YhFPSZrQasjcNB8PEQWW9wJjsfpVp8dL2ZJXm5zwVbEmP9Zf",
  "key29": "4779Rx5hr325Ksmezs9B51XqKHPGEaPRnez9XJJLwEjM5g4a7JTX8KkyPueFw7hxKZYGKk1fggttZtm3MCcZ61ax",
  "key30": "5MskFHH3pZnR82FfktKQuuDuv58mgb63BxgVtzkGUxRRSR6TnyA1Yx4w51GpvCQc9g8FvkzPL9bZCoYdGuTPvgoL",
  "key31": "2FjRoK33Bbnwu8mmhdkPnP8XEiDKSTVFShBK2KWW6m9fV6vvJJioeK9zU6vNz4qc4QsTnoGHWy3WF5fgGmSetPHc",
  "key32": "3ZT8PhaqFw9V6PJCEhAmAHGJ2jMqBFHWtpdA7KY2fSSi5aDaQLXYAY1FBPGNAKQtEAJUT2UFCJZjTjJiV9UpDd5x",
  "key33": "5DmKJ6mhRLtyUtT4vo3fhZtncXHMcjtHLkzES1LH6bBV1z7VXbTtzbFS7VSskV7GvY2Ccmf8dBxaUwTDtzi8wqeW",
  "key34": "4XuBU75tdjN9dRArHeHBnLt47dmvbqBs3Zoa2edW1UmUCvYXn4HQrLzbnBEvsQXayHMWXGUq95aQwXBuL5GTsLZV",
  "key35": "4sn2aNHK412RZr3TfATkfotcUbC9sncCQ3RvzbbMM8NnSaGK8dRe4niqaNFJTweaeyL1nWEykXKD5RdNCVUfSPJM",
  "key36": "2Dgf6dn6P7xMj13dd4T1vAiyqqSRZdSbfgH5rBTPKHrTHfe5riDEcPt67pcKRWBsHVfEg7MgtyEJPynjk8yTh2qg",
  "key37": "4zBH1LvEdbU4bk9zA1okQCgQxdQ5MHXHJy88kA4y5TmSMDG3NhaQ1JLrDRCvkUFyCkhUfZZBSEtddMrJ3apoYc6T",
  "key38": "5yjKN3eadE8DTgUiRwA9qDwjNGfquNN4W3nYCr8XMJxDZN7j4pn1dKPdA2UzyhJuTKZbQVfvpovxGbxabDJLbq6Q",
  "key39": "3LkhpDtxUeo3n8DiPtXFMj4KEMzQmT6pexC57PJhcWjy1vB5VowEuAHmhjFyU9cpLkFC1bPZEpVAxb4nDGbbTNvG",
  "key40": "3UGUP1iaWURb8h9gtjgepuYxtbCMQFwT41Ja6QtBPBoZLZcBzAe678XgCRq8TthRHUeoD3bKY7wA2Msx7qzh6MfR",
  "key41": "3qVRZbsDwkjWiRgnTezvvZyjKWi2tEW1KhJyfwaTCTqTNXAu73ieNxVRi3Aht3uuabRyeF4xVmgpNvNWwrwyVD1A",
  "key42": "5MRSebvDXqZJVeyHsBZQFdM9d5P5iMwUerwmndnw4ihDcfhoxfJPzrNeJxHtjRSX4ByyMLmmWnJmmSGC4uyiFPvw",
  "key43": "4zce2jigcLGxpe51VUvkXfYL55ENFzSAYFNGp9baDEGLoN2RpfE3qMa8XZr5Ww4jt7a8R7Xps9j1GHNGzbkYrc3f",
  "key44": "3iFPwsqUvy3rHUtgXq58eZRnV9otDH9pj5nJ3sUV3y5Yr418ZtHaeSaEfZrS2EopnPh6r5X5KpVySMu7NoLNZoA4",
  "key45": "QPgkyuySUKx9Hv9rkn5UibNibvGvn4bXLGMdwZUTwiFc2nxCLYPS7wmVFT7MxqCAzkoEtgSxwigUpgNvDsvHZQx",
  "key46": "5BsKBka61KDf7Hxmz7VxgroDSx4Pv9rymFKBQXC8yfRtR6ncbNwmk1LF6b4ttdS3CrPAbynzrN22Va6CYnaacS4Q",
  "key47": "4PAfxjWJGcgRkEt6ptzPULch8U69YVVr7auM9mQtMYR5pm7kExF6YPSEKkBrYNoeBMaU7Bzi64kHgk64BQxvcEfU",
  "key48": "2j7k3KeXhT6czTJqFSNiGFiQCCCKR37i4my8mfx1VwGNscxiAXzq88u9ScS5sQ8RuuM6x2FWvgWB4MNTNRHwAyHF"
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
