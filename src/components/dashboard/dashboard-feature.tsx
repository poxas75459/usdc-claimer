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
    "5cV7B4BQNzhiPthEwrpTdBgs4hcthS1UnDV5Ubkm777bw28KAdcrfQaUpYWHWQK7TfnmvYdQBVN4CfpZd2aQsuQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjLuci37TNaEVi8Vj96mVF3wGEg44zTrQKduHiisw1422oQR9giAdyf2Q3RyS5ccQ2YcifzknczYjqfnSbeRQJP",
  "key1": "jiFugwWCaURaZe3LCe45rW2quBuYd7L6QuDgzCG65bYY2aACS56yJFaZNVHLM8WmCwthYnQJEvECaasSDXChu4r",
  "key2": "2ucQkYPsE5g1kvkZ7S4rSQgme7UL9jmNZFmGCCw9SMmkXWhSq3RD2A1jTMeCgNbqoUgcf9oz98TZKZBoCkdLxhKR",
  "key3": "5JUFeFFyMUbZPxnX9hz5YZABRVCssiiBAdR4VGLxVZvWpQCF9mcnRcCXtN2aza67FGxoVNFX1W9SpUsJ3LyyW2K7",
  "key4": "62SMNBEmGnGM1aE3Gx3tzUCi88tNctT6Rhx7FUfQq4jedfQMkrPMwLWSaMbLEqGbDH4bhDweHw6CdRfkwqyjbAYn",
  "key5": "54zr3nqzuT9mh1NMrmTKN8jTMw4CcEf1aYVPrRNskNbGS57XpJBMcGC9SEc6mxbxXoVmqebgLYQXQxBWhtawJtE7",
  "key6": "ssk126BsnPS8pc4LY1uCTcn5Jue2V6CRHXxKgd8GEPyetNEfbcuQmi5ka9niWLAUHHafD4uBfRSdV1LXGye8nGL",
  "key7": "5KkrTFZ6qdubJNdgBSFNkqqW81w7mECesgZmcMjUNL8NwiBVeZsMsrWXxky7BLeEXuvQx9QtaEBXXSe3VHFtsLCV",
  "key8": "n7Uw8ofyFTkXR3ebw5as5PpfzuCWEED7kbQoJdAhKYbbxWYBQ8iyJj67dzUGqJxBjZn5EZY276KyQ6r8uPxfiEE",
  "key9": "3Rzqm2VpL6H3sCn24fpTmuAmrKzPndLEfcuzjEPXSPKGkXmR8Fwcf3PeHraGfZyVRfYHdXzSsFq51YN8R3xpS5Xr",
  "key10": "2y22t2gsdh7uEkhMnrZ8NyiPFazbTyiuT9nzaxHKPoTUWRPbQNDjnDsWsbCL3VJFyhxF89fLyG1ownzyWPACF1g9",
  "key11": "59YVz8pdesr7ZJWCxFD5Fg7Jd8d3UsusVGHP5cXDptRnF33qrVWvAvLu8GcyuT7oZ7Lyj3McDkzfgAdBftSnWZro",
  "key12": "2g7JzHE4QBHtyieX6TVMEGAU1GsDCX1ZeXfHQZ1UCzv6cUzLXEvYjRwFSQyKnvgTDPCPrGSJy6XtaDW56jiaDnZ4",
  "key13": "3PxYx855k8yUt5xYbpE2DxZRB7LH4x1G17aXXZNjjns9ErgNWyo7dWSUYuZ7bnMcdcVj5UnxUCngbcJyf6ZCbyD4",
  "key14": "3ZZep7D6Af4gzu9ZfzuasjeDPc9KMJnDNB4sfjAduPLvfojZmZnQSdNMhXF3yt396j8HCmJygv9Q4crzv98f6m4W",
  "key15": "2LhVuZXd33mNUQNwa7ksyBCkE1RxvHa9NeEPEYHRc9iPDUDYBV892CUkpw9of5JRhNA7ahuxh54xEZ3Vk5PDkGK2",
  "key16": "hQurTXHXhKnAQbDHQuDhXtVWzJmLBRzAfGWb4A8ZXhjBgxwdgzvzGzBpWu7xveWYtutwpQGE4cbuE7MjZf79GUz",
  "key17": "4akVxyKQi799TFPuZpysPRM6xr1z7hxkuVFkCuNDoetaxeh4kTHKgyaAbTwtBMkSQkKUzPW8MVhYVrh12KCF5X8J",
  "key18": "5WczEktjf6Eu8gZMSctbD7JQRb7ZC156NA7wtEa1Hgy7haMSys8bundP6gbPUTQnyJtuQpRUwfzS38w8jHo9LKtS",
  "key19": "2XTvaUgDs6UTaKBPnws1kMv1y9bVUqgS31Uy3rrX6QG16iShogysJ71sPYqU699GdzKHM8dRmjVmsCXEondEXxFq",
  "key20": "5XJo78hCe42GkoPUxk2yZ3tQuxUADZAzjarGrgyZ5uAFE7C5VnBM2vhmyLMswNwGR2up3nAVKcFeagdiAQAu9gG3",
  "key21": "3etKrsDjEkEtDpb1Tc5RoAFikyFrBE6H1tqgaaBynSSFHAQPtZuo4XFXdcVtS14SXfqwrPFrHatxtdkyGGUrTLSg",
  "key22": "oiqw3hQUT6oD2hhrkb66owJTBjKidZSR1zo6yarSpahZQ1DQfdt5z4RhSvq8Ndp4LLc4ArKP9qxvZjg6QEhYkam",
  "key23": "2vKFU1y7zHauMjshxtXTUXDrsPWyFzRRQXYr48tVbYtuwZKt2BQUUaQVejrsdxWjq7uKbePoRNkh2fyLjd1U9hE1",
  "key24": "4b9k9snixJqfAAAK9wj6vPJzok8fSfvvaoXzeWnSBiMxQ5YPAGsTnt5Ajb3oQhHzokHr89JgYt5iyCFtartpe9zW",
  "key25": "g5gqDYiCZViefUW2VfTXrZzrLhZK1L5LQRHsCuHPtWifPMAA83cjA6Zeu31M36k41NzMyMi2S2dUz3NVAhyGHHn",
  "key26": "29E9ZZM1Bm5jGSi4ML7SDqasczskBF3ojYFiCukKW7SrAjiNx9VHpretuyc53wY8P4WgvjYJn4ugSH4DnqYFe6Zt",
  "key27": "RsvzkRs3NnSNGWbRBwfBLmKHSzaPjnPkWCxFxbSsV2wx5J9omU1P8y49FhmFRZANAD8s4zs877mmac5AcqDexDu",
  "key28": "3q8yPaFzt6mAMpDUe4G5zG6k4kVVzqakLYGtkZnJK92xzkaBjNDiqwtn4W1ZqoXWPfp86qbS6aGfZGcTECW3DBP2",
  "key29": "2HErgMyyUgT3XV3dXUd7isFSsRNYadjYKB34nx2q2oZEXz6gLLdpFnAwtRBrwvbgeR42LtcZm6yAwufZXJXYDUVS",
  "key30": "2wQNWGaBNFhkgb58hwQ1V9DWdVpVSe62E5HhbWSeDwvpLCgGAkQFWdLSqtV9epagzpdDZtTQBAqHz2AhPQoSJJoM",
  "key31": "vopsXDRn4qtJ8ibvwLFtcFYjgQmnj6vpX3vYxFWGqj7J57UWkATAzLvLaxDWKESiYGyVPD82eMVZmzxekkT2RHx",
  "key32": "53cEBjPuyFxVVoDP2aPbkde6TCsHFvXygEWaAaG7oRiGcCAz6GPyhM4YfX5yPWY5W3hSzDZsYzYzmnF8qt3QwAis",
  "key33": "H6S3xjTfni9NztHp75ngsnHd3gModcJq8jEwwgifiQAAkBb25tLjFk55kNjLMG4BQU9oJjPEMrtCdisYNJmvKnr",
  "key34": "4jJGuQUycMgp5n9vMA1r2SLu4vAVepKLk5GwXqAH4KDFizwEALi6DQdZkR7aLP7P8TZqAv68T7mgtfcKtMkdfCJJ",
  "key35": "5KNMHaP762bajGgKZdtiSkCMyLFiNCgxkdK5EkKULXXhpW46WgnKStzb5ciweSQ56ZH2G9Mf8egnG6guvPPtMyE8",
  "key36": "5DA783GiDEzQQq6Hp3xJ1vNBRjZ94kRU9X9Q2jJejAis2FRL7bEsrtrBPEhh4S9Lb9eauvKFjRw99fR3bHsWbBAo",
  "key37": "3HfqdN2DW47jYuYAo2vubtejThs68acnXB5MXCpE7rzxqg1tjavPP7F8imfjEMUiYgyLzmSfBsC4r18NUdjFtiLw",
  "key38": "2kpaCmQ1NB9RrLdmzxsk5FCTUbdiutR2n1QhmyHemabTvbii2JkTnGzZAbYMMsfafXLTMcXbHudLc9J8kd4ieZVX",
  "key39": "nVQ3oWJk6VvEGX2HUQmekeFkemc2M4w3bFCNxwxvMoo4nrb8dQHeRZXLFth5XCHKDuUJd9BfKfXJfurD3Hixc4K",
  "key40": "3WuLCwaA3R1vJW9stj353EMnGTnk2qtsL2XGDnghXEcoGiivq9VPJp3FRZari1VCoztS7k3C4XzKvxvtobS3oS7c",
  "key41": "CqmsLL7zjNcFHQuuxmANJEnzncN5fpEB2e1hT6ggUdU3pdjbqzW38es9J5qgrNbvfV5MnCuzMnf5JDEKdDmfjzP",
  "key42": "3RBW9hn6WZ1AGeR1bVqmewK29rWgWY2quCRRMskmUsMrtExqijR5yprL8j7f3LWAf4g59bhUQr3r317VCoTRvNVG",
  "key43": "2UQttv1TpMkLoQ9D7vytb4zDZHY32HodCoqCNpdMjfAX1xqBrsTB7sbscqxJg9aXa6adSBXYdjpRzvcsfytYxfe6",
  "key44": "5mVqsPYmaxMpXH3zT9vkaFYdHa6JQ9Mqd3KpZ17jMMbgcbpnUHpjaQrRTbMVzhoRMrsLcQba5PsW9d9YFvEpPLA5",
  "key45": "5ddjx9V1ywebEfqVohaPtc2xkdowbrAYQdV8sknrxMmpMDFJhRMNSmjQfi9Aca6y55BP4Y3DrEPHTZJimz4Q8TUg",
  "key46": "2GpNCyiiyMcLoY1BjYSpSMnBTRxdW3YMePYZb2SHQ6VntRwVcrQACVdvEnCpJFo4NmsrocazB3brxbq5NaqbYnyz",
  "key47": "65LTQotjGCUYMtYG11BpPDuyQ8ZLTUFCxwtoF28zac6SjWWpMTg2XxdHQURtqm4otDDDrSdMovzJohR8t7NBpus5",
  "key48": "pP7rHoZnysAhgvoCPN5kite1UfB1ZToG4L3XDYXyimAvXtNkvmoxVhfgCLjNcSF8uuCPrWQGsHAmimPgdybx6CB",
  "key49": "uQSBmAwx9kYSuUnQk3K2XNUa5CRp2NikoRc8DwRDAr91dimqcxLUH8iqLH68ibWEiMeBqsewC92sBhAdsA1J7tH"
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
