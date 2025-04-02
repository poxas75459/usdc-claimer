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
    "62KB3NKcyhJ1r2D6R6Fr23EaesGaGzQDCby25a5fG1parqBVsWHMSXpMJ7TKxRUHprf5BZXzcMkazvJWsCxeyrR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5ZFKWgy3PyEYibe2xESGAxfQk7xWjv8m6DHbes6zpACraAyx2oQQyDCjVKRUFES1Mpvt11PziNktbq8v7fa4oK",
  "key1": "5Ro5s13LaEGFgo2HfF1peYKUhQWjfckugEuGYs74g5McN3MG9WfWyZX74iFG5RApd99eUYpX3GaCwR795SA1xua4",
  "key2": "5E3oSNdGsw7CAEpuJzVSnxZRnYuwsVR3D71CEYGJ7YtGv6QVA4MkTrfDeQ1w72HZBR8fgREWkSh7U7xm2NqXPJdK",
  "key3": "3MMAnsEn7A8kyMv4v67HdwjwHAorns2f1GwtLd4Fzv5wEQVL4ZL7PWbYisHfqPyxMKkwsUZDqyB8GbnEVJti7Nx1",
  "key4": "3X7jRV6s8LyMtKoMCnVWZxfLwNS4odXXxqSE3H65BVYfBF6GWjFSSzVupagwFu4y2YbReN1R8AFd2HRbcKDnYCnp",
  "key5": "hSp4cGCYumBLNFcfTG5VRRGJTLNQpDF4CcFdKoV91Tra7ag2CvnCUaX5By8mqZZx6DJTQfJKeoGmWYPYrHLhVuK",
  "key6": "3jZyZDUBGiSU9G9nvgveziDGkXho2PayYqfkoN7WkbiGCMpvBnr2Ce8fuY3nEva8FZdZEqvJjTqgYvPwFcf3qz3g",
  "key7": "Mj3uj6mAH2G9CM14zEkcEUHKV9XpQuyGbzDRuGRbC2Q4FKXRyVttjjHF17Q8ycFET7KfTVMS8Cj2mdu9csx7WDF",
  "key8": "25KJExLgqqKTKC4hxqKcKwqKC5eiUojeRt64r2qZPyNgfazJx1tdk9uggu4qEQxuJ8C4eZRo9bEppBsJijVEGPSK",
  "key9": "2ahbU3t29MFfcmYcFN6fqSDKnY1XJswwfFPVTPdAsZx9YmoCghkm6jn6yvvUWh1ak4yRx8BYEKm4P2UnYJrzde5n",
  "key10": "4D99ZJP5Z9yn7yQsZHgAAQU55aRMrXB3UrCnyDU5AkMZNUgCLdjG17TNAbkabthwRS7NGtSwUNKy4JEjDpZN8Pai",
  "key11": "33GYwA18Xx8esi6ZTnUq9AELEV32KKEahDzc53e6137p2q68RswXCpjFvd9m8htPCq8PVnMW4X55HF77tiHTaiDv",
  "key12": "2i3aMKP4anaF725pPvQjwTawSNM9XRo2CDaXmN3yDsMvXKJ9939gKZ4rHTFURepgDXvYJFpD9yNet4e8quYwbnwb",
  "key13": "wXNxB8Arx8xbc3sRkxRPwEmCT7MJbMP7pkzrjq4bAa2pcbau5nNc4V3SQQAexRMZszKkr4ZxhjqUQueAn2exdHy",
  "key14": "2xVLYXRH1jibmf3tDsSC8pCLSFc58k71FbzDQmPFSqEbNBgcLr4GTo8WphZm4gA6de8N7A6S3cHhmZ2JvD1cSJwS",
  "key15": "4UQsXwwsVmcZH2X8ERmznSHzm783qLLzzznf8vvoZ6x6JV4cs9BdHLPNuBRdNr7Zpt7yc3Vh35uD4k7M6zuqTZR6",
  "key16": "57drcUZUxXTk3Hi4bfq2RC76XfuNL2BSNkRTxEynEwN1UXegtw8yRVrunmobTaTXKZXqWV9Lbij7VbyDo8zs5EJu",
  "key17": "4KoTXBRaugo5WfcquQ37osS1ARvozodnH7hZkWhmgE8HiyfnuYX7eDMvMuTHnU58tn8SSCp9H9PpYFBSVwFG1WB6",
  "key18": "2Q38M9q9hbp5KXbHnM9AzSP4B31CVQqTBVBragHwmFmWgiEmMAegX1HdyT4rnUnvuRecc1WJC9n59uc2V4HN2T6o",
  "key19": "2kHhcoDoouoVK2BRbtRbUwX6T28725EJGCMkDqeRnw46Uommausp2hCmjzUKpFj2tJuMJtYt3ZVJUBLEdxqNJVrR",
  "key20": "LeGDdnKE9UKm12L5SmM6yYQ23i9EZqgDhFHTnhkhSBbXTcwtJHgd3DPSfSdrhqLTQ5qSF14uUkBMiHiCe6jvdN3",
  "key21": "4kJyJrSTDqgLrtxSF542YpEMZQ52cAseBJFYmwrtVWutw7KbHsTs6LMWQMW8ttQgMiJuYyNmauQzJfBUmDFRpskA",
  "key22": "4wgu1m6PxhGvwpj1L29xAKzGjBtiWpn8dPg7Nip9XeVcvTzGvVYrNDxv28euJFcjw2kvhd1hpZHL9W7oboALmdxb",
  "key23": "3kvXL1QQLn2sXPdRiHFxb5y13VsHa2CEjFcjtSbzfsoYoeMNRHwnXYB2VDhX9Rsb2E1K4dtxDu6x4Ccho3tmdZwn",
  "key24": "4DcXhbkAzvkBiE9ry9kWwpbenEyQMVpzXhWu1LbM8kVoLQ3xLiXtvkVmW7yuuwmRYuQso7Uvhuj5a19166ojrkSv",
  "key25": "5sLwULeQ15UmjssJg5PVraama5KKjHdFhzV5sX8MwCwAsJfYspzh8REUQUq3XH83WfRofdYD2QP27RvszaXw1AFr",
  "key26": "CQYw5Ex2DNCMxmYn6xZkifJanWSobzFdaWVugcDhBcW6mm3yJ7GHd96Mzrg7LuCyeoLpC1PxuzyEh1QdpTizxit",
  "key27": "651hnabzwCXHyxjPdr46EYfdrPxXNc3nPiYmWF6iXSoFFEpxGdKgjwk7safb1gneqRNx51gL2oC9eiMXqYG8jVqE",
  "key28": "4wadkRL3vFZWxSyqwQywC8S4HF8MM6ophJtpyupzvk7kj2fzpVoVfiw2nnpfRH4bttnfpZuaN51ae93nFVMJgE9t",
  "key29": "51o47NAHp6eKgZMETc9XCoj1njVFxTfxwkcWoXyzHC9euQhFfHt7twWw8Suze7C4NXtFtn5XqxDYMF15AjcAHjtQ",
  "key30": "2wHsCp3YKwvjL7K9V2f3XLpcizgTcFazWDTVzFco25LEgJEdpdnGzMjYAfZkNiRfbxdpgcLYZYdbGhYgx7Y1hcSr",
  "key31": "VeRVV3H48qbFQmZLersyyLCmkyrYen5aZn3Ri3UkXHeaQoAdmea8aYS9ewBfPYToWEgnvVAePYps8u32dE33Y77",
  "key32": "3eKwbvQuDb9P6Smh52VDhRRHafgVY3UTvqrTpX5Tdfad2zfXfY4JB33EjZdZbdgfe4m3GczUSZNWMJBv9qUH86to",
  "key33": "2rrW6xePBa4usTV4bGpJxAKdqyYHgjVvXGMQtV8QicQLT2i2JJdukirB9hBxCqb7jhMa5iKMHX4u89X39HW13a6o",
  "key34": "46k3MrKmB7q8jrvHth9aWwxCotQAskPQjd9anxBu7VJessGDfc4BbZc1boVotbuHD7ihmoGZhdSJx8LNVYJnCHu5",
  "key35": "2572JgnwSrnVikeakJUhctFPobANMp8T2GrH5bBnuT4d21LNsqAqb89AyQLHoRxkv4t69j591jMssWb97TRp4wfv",
  "key36": "9soatq4GY8sEBMZiPCbgK38dL1gRpYVUscnTfjBkkgPJLnBE9faApscbuB5HipppSLCSZUmFqCtSs1niFq5JXje",
  "key37": "5EtTPKSdj8WUY6BvW9U4zdzaTiGudghhigbBXreTK3yopt46VrEAdc7FR1cE467wD7wJiNZRdq6ictFwfXyvfmCC",
  "key38": "3gKPLGFGxWHaPKq8iDcs6Cg7evPrj9G5CoTFXvrzkzs6rst6ZHduDQGkCJPwXJoWWPeQ9z2f37L6TwSJWa964Gqr",
  "key39": "4nzb6HhDvk9vnDmYic9H1gKFfFkbiRPDZQTp8Nt3fosSD8nqPx2bfVwrrEixPysChc5ixS83xkxcSgEgYJVGrSPP",
  "key40": "2WypkKeHNLGU4oDgBLvVgGc6PYfCihy1dJz2Fp5Bm7rYj1jCJdEr3moSpUSvggCi22J3vgqWg2Yz5FgVrLPDP93K",
  "key41": "4iuLmgLEGv1PgPdLuqki5w34G82PD55FcUcd47FmGcvbFGdJ242cFJBXDhFu9kKq2NJxfPUmUGPcteEedufeeN56",
  "key42": "3Ax8Uug84SXHwQ1SHxzxr99QjQfiVi8S39Yd15GKaSPj6BR7rY4eYD3w7x2FGp5yEo2UNG7fRTE3VAVQiwD4navZ",
  "key43": "4oGvVY9ZmqxNVkbyGqPP32tXpvjBmh4ThNMBDgsruw2yZcXKZCUViLGdFFLegtEJ1fh482EKiNfLHjowjXWiNyV1",
  "key44": "MmJ5RZtT8Dy5wUyNVDCXJaEFhozQNtH4yPEBFuPr9LcWvDr3PhBo6my3CRJNtyKF7uqmbgvCMYmun5CiB8aetbJ",
  "key45": "3pEhyn1amjvnug4r28KhBZF3srndEjXc86QrFgZoZBTVgnbSEAk8tzhz1TXqfNC5xcmi7KSUdzaKJwrQ1rALrneN",
  "key46": "5ukoSrNJ2xUKvxoNY5mVD7Uk67HmiUNzB2cHR1zvJbzi7bvQoTryCjfdEvbvHQZ84HPuhzrcwhEHFzqAbqtuRdVE",
  "key47": "w7oKw4SFqY5LcZQ2fHxHhRDECpBgj7mBWYTya5ycCvo84Kpp1w1pdcHoqzXqxm5HBDycoTkaZRLaTdjoecrzyi6",
  "key48": "r9bv3AJbkfEJ1AwtgVMJw3sfeboqWDBzFnfBrPwmWF1ndKmerLjEoz5TniY2UAqxhYzqHcZnMWh9DwpCg5oLqwk"
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
