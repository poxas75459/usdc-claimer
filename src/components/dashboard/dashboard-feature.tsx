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
    "42hMsBaW8h89kYFvkYhN13sPjVS9rja1KHgrv9eaev6U88HWtgqAHzKamUUw5PRqFnz3adSh33ccPDJGT8WDo686"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zuWdGmEfaNfFdpQfRP8ZpxsBqS2iQVGJZ7vYyCTnQbWnyhY84oFxEJDJvta83nYWCJySyRUTcsvRcqbgUKc5bcY",
  "key1": "24H9694nHQ45fpGrFmL6yjGDkG9YfYEjMhyABKiTARfXJ6q6dAJ8s9YatW9fQDWKCUduADvbD5yaPbFmJ7eFqAQ9",
  "key2": "4wQPBQL4RtgUM6BGLLs7hFAgbDbCMdRvXjivDwonoNN17EQKLi7N3mjhkeLHz78mk4Suvd4n9jjyGKFQqq2F9H8L",
  "key3": "L4KsnYR9uw6jd2KGcU9M5MyN1ySRHbXfho9KfvxjkcHgFYEKhRFdgW9vnqmJYRFtpjxpo4M7MAZQ7hExC71dqoe",
  "key4": "2d1SR5JfuvaAc9m8XiD4Jqg2gVKceWREoYzJFeLBSDK1crQjys4ctBnurTJS7oqYvSVJeFuf9H6GnzZhLcUVSG4u",
  "key5": "62Qv1TCtrJ31FLiTsMBuMuVvapF7vFGeFJMFMwTQaRwBjoF3fq6fyBGepXdCadv9PQLL3ZW6g5As5tzSC9c6kYwU",
  "key6": "fH5BKvWy7LNtXXUkw2HGv7p4ZRZAKYVhS4zQqvKdBwM74F6eirfsFw35Zx26cvGCMtjsYXd2QGMC3qBnMUTcxa8",
  "key7": "CL8X5w7pgj51bNSSbpq93x6XDGegePGnccEA8C1RWmHggYFT49su1dZdXP62LJPENKNQyfdDyxAY41nqnJo87na",
  "key8": "3BtskuTpBAjFAomyFxeraPz2PuZrfPchprP4QADuDTBn44SfdX6e2SqmLLAjnjeqQSbVig4awqHyCqFWbEwZ933k",
  "key9": "5YTuQrf4FUmPXLV3WHhz1N3jjF55X8jn4Rj1X1LG5yJM5e4giACy7YKNAhidYKYWeqpcah3fqAS4QfprnUUaoqhS",
  "key10": "4YUZhXDzGwUqU6HL2pRVogZFnX6yjja2ePzPG2wEySbnACEGj3BMHd4pFQd57acjS6EssW5is5aZh6iBGLDYUCbG",
  "key11": "5XzN9uBccAPdxbJ7LaK1rb2rPCqLsgpGQBvb4X6PB6Ue78ZSFyWw8R8ZaupCLD6j1Y9jeCF56WfxHPoaG7oy83mc",
  "key12": "4MugxMUC3oxT7wfwpjJM5P1GkpK3G972MQrwshuRfHSC5YC4YzStirej6EBDdY8Gib85h6pUA8wmT3a2uGHuX1FY",
  "key13": "4EDXFzH6bw9WuQwh1n18UoBsQ3mXK52EZuxxCfdtT15hg1SEf82SbZsLpocPAVDxwBhnjvjp72VhMNXpAr4fy7Bc",
  "key14": "4HYzPs6yxXvvrnf5tgUjJ29AwU3Yqov1uLmhvPqNm6GvmUjYLJJRmKtsxzDPw1vsdehB2ew5ev2Rjfw41bJwuAit",
  "key15": "2csYNxxxYN7ajhH26uC1pCJsXoeqjU6z7jzFDbYgJUM1VTkZcaA6KHFs1UXgdS4NbgPFTWtWbWRaD92yWVGmCYX",
  "key16": "dB4nGY94ffcSnfsRjtgq3UN1HdQKJ3c97hS7HZVRX7VCNXckzCgxryUQL59bNs6oqAsR5EPobu3jCP4aLMBcwZj",
  "key17": "54x4cwnvGC5HnfzRNQsAvquQ8w4EXZdXxmupBwNcSDBf2wg9fP1KPUdFGFSsqtDc97vwmxfNRiLm2kSusttv2dZE",
  "key18": "4VXFtLnUzFPXLZDCf7mCDd48G32TpYekeaFHcQXwhPBF4CiyuApmJQowFDfsHwYibSuCVKYRR9WpaEDnCzaAp4XS",
  "key19": "xRijmiWbpjknyn17aDVqXnXrFr3JCWwU1MRkjYsc7hGo2cs8tTAfdgbtFdnizrNZJQfDvNw7vvSmp7no1e2vGQu",
  "key20": "2VMF9y13QGrS14mNQaunyieBjZEeqhwydyL6L3ermcdTekDHj8VUg7SZfYCAhGP2ALvwekdT9czfNpQ6gfQbjh1q",
  "key21": "4MNwstoZU9q3ZJrY6koHeHmNySprrEAxg2A87Ttce34WBZvcgWmYbmiqHqjFpmT8Vh9cN4koLfXPUa2p6BBgqmoX",
  "key22": "5pXKgarftoECQM6QNSKinZ9rP9s2SGAVCtnGvrn47N9TgN6qwErEuc5qre8Xdm3ZVFeQcbxE1QfxZcnaASrkdRzj",
  "key23": "4Tazw6fBY4BKwdCLB3S3ZeXZBr3AVWjMe9KWKT8PwhtNwTHgoVYrd4JJx2HWCjzYLuWLDH7xfrp3jhVa3ngXwHdg",
  "key24": "5Mn78SW5Nzrkywe9FgwJ6S15TjQbVyMMSCHdHLEGZm6uXaY2wRuz8PfD5GViEwnsi5A8dfh8yHkw9wwtrLLZ8q3",
  "key25": "316Bhd8h6PXdV7ENiMGRaPmXbZgMiQrz2fdeaD4MQUNBARho6rBHtrvmNe76vdjhtZJoTRhFUz6FDcV59Y56zkmJ",
  "key26": "2FAqM3MMiYFmfVGnw761daCG8FbFwEkCfUYKhXLK2N8vrbFzgxsUWe3iXstrKt8Yj5ynvsJM671jsmDj2U94U63e",
  "key27": "WK97CG6T2RD8HLULEzfjQaEcknt69sLiLMNJZHGMkw7oUGiVUAqR3CApEPmV5E9PPapbU5oHMV9S8FwDpjWai4m",
  "key28": "32MM9W4ngnwd6czdo2x7St5jwi89PamCaV4nE2YvYrhFFBMc8wKSPzFunFHiYecbqYtKxGPKtbMV5nabWWy6tCAA",
  "key29": "H3c5z5nSYUzJSVKXrSQYevKhhMUX71WkMECs2aMVN1NvXukJxubp2hr1zvmKsksoKQCPKxzdKHqP9tfZyPRf8Pd",
  "key30": "35cpNEGYniBYNribi2GKdazNRZQH5jWP89GZUQzfdn8DuzymJViFK2immr6StU7dkG3hpyH9E3RQt69oW21ELyc9",
  "key31": "2KLdU46pJTgEDjtyNdP7L6v8xTdpSenMuuLazVDgSuvV5RgkEWREu4Zb4X2KHva4hnP5cEDmbzszXtdGCxgHswZn",
  "key32": "4xnY2mX3shjsZ1yWZ1NwxqMPDzkDgERHzC62Nx6HJWJzUsLgiHsrmaXonPpwYPY83B5RtR32BD4cyk538TJxkMFM",
  "key33": "3ZwepyebgtgyHqgNGodrS42fuzY6zBRHmdtKLueEAZqGBcjkj8dUH8tub43SjbAW2gNGYhnato77VdsLkWipvSDE",
  "key34": "2DjBGw9RPJPMjswnzLmEsPAn6oBuvb1eA9mvgRVaLhgunszZzdzmJ2RijQ4S31K719A7RtHf1zNNyx48oXBTr3nW",
  "key35": "28hNVmzH57KPomGQWKCBFBLsn1b4eReixs9eKCC1KLspxMAku4mknDWPV8EyXGt4MXvv4qndN5YXbrnmiuvjd8SR",
  "key36": "T4H8SzCGGbqNMEmeJ9vzvepmti3Xvu3919Hwe28zxQ5XGS7kxLhJCDSDsGxSJWD3ugfftXK35x1gVbLbo1XRPDR",
  "key37": "4Pv4tPDwUsXa8XSrHtUCTnLVbEyCNpwPGik1WSW3bv3Lh1tn4MSv6JZm4K7n2NyvLDf5KJ6ferCAcxZNKpVSacte",
  "key38": "3xWGeNahdkx6qGnDRjprmKQbsMwubgaygjQXJDppeKdz6BnUpqF8EnQNXV9CM1UsoAveY9Neiyce8DrinWLHynBR",
  "key39": "3qRUBBKr67USgjXFy6YewrhCmvbqkXLPDqxyynpc67zYfWjRUXazJz7ZpaDroZkgKq28b4eQechJ1T3d3bAW3SZE",
  "key40": "3KTG6i9fApTBPjuZPah1QyBwBAYm3yh92RVSWY9bJbrKcCoSy1KXrsB4MBWiSVZPKFouxtNSEw5gcPYJe17PLnZ7",
  "key41": "534ubNBU32NbvoGq7twWJJw1kmQTd9wkCiyCopejrxPfhwGuB5AMiQwd9x9dc3d5Btk9zbMqjDTvLXuGyhe1x1iY",
  "key42": "4GVzDSNPLbhaJc2x9s3Zo2gz1Fik1R4stRTC6TGrFotrVDBaPksBZg5JypSu1n5SvFgB379yJdZaUKYUBTfyeVxg",
  "key43": "2ZsEERKjt4nhgmharNiVeB3CdD2N3YXykFVmLaBmqNmQrpih88DaBkkZYf1MHYex2JGwynE451ted3qDBhbQvxd5",
  "key44": "5NXYSE32KJwNNouheEyPsB98sAmELN2vGetyxu4hpu7TwQ7QTR99D6MMMU1Pa2JYoNizD1Hbwudi7tL1hWzaQrti",
  "key45": "5NmHSa1aU5zVL9i5akd5rmUx67H6MKovtH5CA6NBM5WNF7sgSoRM4e19VzRqHNoUghJ1wCuwoEpn28QGPmqHqdgi",
  "key46": "2WFxhD8e8CvQLxMBioqyrun5essbPgnLUfBTWGqDckEfGMJ8QYi3waoU7pNi7xpdKb2xzW7gF8hERLYN5X9uiXB6",
  "key47": "5oKXoT1Cs72pm3vsZn4iVMAaqHK8BSJk3rNE6Agyvrza9GnQQf2pC2r2GPkPW1Dg1QYSJ5EcaVFaKkcbdsoSLBn9",
  "key48": "4PCP8AbkVsFnMnNpgBAvV5VhkUgCFSVRV7S7SsExvXSFGDSDQnLS6HBSaJynMmZReH96yVT4DUDagdp5nPgBhu91",
  "key49": "4rWVSBNzKuY6D8vyvbPgL9VVwd4pdSdnN5dnE1vCax7ptxbMEPZun7jQx1zyCsqt4KcLawaPbs9WJaWE5SVj1kuR"
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
