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
    "5WtbRCn5uALh4qTrkxibCULXpw9deMHsyVewRGbiEF39XzuRRYpbjYER3zYydwMHorNFruinbm3EKcnDoVKF4CFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DqWyD3y7PpvhUkmNb9pTtB8u2D8QvFkaZPs4Q6XtgyNYQuaba7No9Qp3GgfihUYy8cJmxN5qpjyjPCy1SseWbh3",
  "key1": "4fB3eELfcmv4sgmzuJtjXBZUHqd7WLVJn1ZMkvUz9jaDmUEK9CuNXKpWvJT3Eg9kZFfme4EjUx4woa2uiYbRdgSf",
  "key2": "WvQhtuMN5Mhh8ptzm6XQz5uHjR5dkFPLbM9VWaavrAfCr3M6LmJh7w9CfzxNtEoQTZsBRdGsGJr79bnAFg4DqPu",
  "key3": "3yBqqJNRXQfowS7A6CstiEhjsRTonmqASj2os1Ay5pa3bTd2xJsaGtiAXoGiSCUs3xcSDdoq2AVybRVzDXjzJYVJ",
  "key4": "3x4N1w3ocSoAbKV5kG1fkeyqTV6JS5dT1eVpmEeDA8Qsq2tVuoE9vjppN8dmvFKBNrrfryt983SZspL8nfkL8KZ4",
  "key5": "2SD9kqvzsxXDewLFUGkxdykTZwFWXNvtqYGo6FW4KKDJmKhT4oKcDEX547f7gr1q6WsuUcyLgTwuzpzhjUd2qkWe",
  "key6": "2Wruzt13mkygCJBT9mosmqwiUF5AAK78GfFLyMuEpLRTprPRpMHpLVZwFjTxwgHjgVuuijQ9Q94zbSyerniPWTev",
  "key7": "65emXUpuYNWDeszqa19TUXuZQXL8bxjeTeJ3DqdEVVykntEwEGpi2yiwvE6YyBeWvdqR2p2rLCKCbBQx1o3x9FMs",
  "key8": "op4E862p1thbcrMYsesaM3xmRv2nk3fBj9mmgDrf9tc4a18EZvvUFUBpjXYpL7UEZAMg2E5r6U2REV1EqRsbSfv",
  "key9": "2KjcBEAtUCmp3ecWrBg8FVfSPY7mRTyaUSvgzQBmj1DKeaLor1pjYfxSDxnRCLMFxNY7KMZ7RSmj7w2iEEtuujPA",
  "key10": "5v5uGCFQXLSpEDuzmwvpx68PzTowJcnV9fsNPtCE4RzD4hhQVFvmeRphpcfoBFz5uF7qeSEdPRg4DDf8UEvq1SMy",
  "key11": "Z9k18EiWSNGCEzZGLvodNqcD3s9DzhmL8S5NmLbLULCiJErQ5exnDcngUe4Vdi6qxuPCpjURb15V1Xu3Cwgz18X",
  "key12": "3yn5YNFupCpG8Pie6a8doEWjMKJq3j4LUgUoX56zMhDsDVvJR5dvoqBD99W9rRh2kF5j8qorRposfQo7W9drAEHG",
  "key13": "3tFJ677dNKasMvJA7YGA3U8Dti1NwDd3sgRnoYvs6JqTCskF1dmvejzZ2w5VdFY1obzf25ehnDtdeGtAgtDsf4ob",
  "key14": "5VBEt4bjDz52LuXsSokd69cLsUWSW4y4RKvD9T1m6LZ1WgFqan6Ugdvi7V9WQ2wxQxbYXSEMwvQR416dDhLWVLDR",
  "key15": "48cdM2AhL6qdm2kmnpYcHj6YGzkyaR235nhFqQVCScYMwQgkZviyXr89CfSjcaKcojeqTFKkYdPeaQaMuVmfUdQg",
  "key16": "27pfHVT2PpTakbh3sA5B14o48bhwCMi9B2sTkdL8Y4pzb8RiSzKRxMx2UDiNoNRSXwhdZXHkpHMhFUoGjZNRh5uW",
  "key17": "7HPTptJzD2WKbDj6eehMM86raLo6mWKc5dPkR3DQJezvaB8Wo76d8j2DrPaVQBBYgtQTNif1CSRg9RciEpo5L7Q",
  "key18": "LHDSxvRzfFok7xpM1kqPXkYzDgfmqZSfxxrrMLZd6jKTEu5DYpfrSnhDAwvsjncU4H3EoodwUWjfTyTxBgqPPDv",
  "key19": "YBrkcmMaUDfb1SXe7XL2UsHXqLCvNy2zsFok3gMP3JKULS1rDUYMimL4oZ1QscvYpRJucVbGoXqpTTusE7uPiGM",
  "key20": "4CX3siqFEa8iyNE8zQbaZtafzZ6yJtyRR6tQqe15WjhyUgHYPaTbCrojZMyL1cZpn4fsNZjCuEU5yrupGjy6FauG",
  "key21": "5vh4CaaUEpe6xy4ffjUATtsB7TUbW9PTT4UXRd1ZB8d63eCATEG8QzBL9r7V5u4DtCkpSKxXqfGz3M9HYPEEdsgJ",
  "key22": "2y1KagmPLeu2khb31FUBGBeLwUHEtNY2WG28W9ZSapdrWgrTXRqLgyv1eQd9WJRRPBUm5GpWAzwQRVQfjZZmoQim",
  "key23": "4a7WXkshrZHFzoRk36DDDZby1GLcqjxnSGGT45Gnrf4oQu4Li1d2tQU62daDJKwYM6A8AfnngaazVvzhytVUz3T",
  "key24": "2TU8RRDb5FXA4t7j3D1HFFEW889Vh2Aq5V7txctFp3RzgcwsaUCoRDTrbBzgrs8u2WEZanQ5eAaSM6ErWGVyhj1s",
  "key25": "M4vMZ4oQEhKTRg8K5uea7zSrFWfuetdks2zARj228jNGMcogvtU1xdqLVvbGPFZ9UbVUb3faMBjgWtywHgNzrGP",
  "key26": "51LfGk42uY2sq2Wo8WxdYvhc7W3bX18YHDPjg9p5JnueSBvy4ea2kRtXtErdBjRNnCoT32Fz68qwy3G1vKxgQzAU",
  "key27": "3URfAz9asxteS5DBXPtW5J4nKiHt8WNasqqC7PFpeq5LmY4XQmdrefEst4wRSxFuXR6aqFFuaNJnNtSEgBNEJdep",
  "key28": "4uGnEb6e63DpGhtfLa3u9c7ra7XhciERRYp5RA2d6yHr14ZHn4zCWVrePcpfyEx4pYWiVLpuXvmfGLG7wCq77BKq",
  "key29": "5bnGSvQEDso6pFq2UM4HZMmscwFYH6MV8wvrVGmbZy8WWzgSptZXdVauW6uN3hSBLLFbsmCQEFx2A4hSFToZT86V",
  "key30": "mguKbi4nUaFbRu3PdTxDnW8ugcfSNd6SDCndhMcwYDvpFPKx5bfTwrM3uhy37NKujAg7ug8ByZApvjhRNhLc5vc",
  "key31": "5u3ae8u3et5Qzp62E9GsyX5NUfzfdjbg88wgzvarSwEt3rf82ScJX1FNVF4uJdcftNZsbaEGEJgmuVufZYmLvXJq",
  "key32": "safkSrGmAAJJqQLCL5SqBfhktbwQYts7Xa39DQNfbqrofVoJ3bYG4X4GpdrkxtTTCPN51uBAi9V6eqpQftV6DAN",
  "key33": "5URXsfdNRxrnqDGFG1mXnPzRLgZYyj3jqUqNZ4LUV1s4qns9HU7reYvn6BcUmjyyL6oYUM7tV9CGki8G8X29JVwM",
  "key34": "5Bf2rdBLLvppaKNsPrUkEHbj5FqqjfmThdL21Q1kHqNbreQ3SokazcaoMGWAtYmRSUPLV3PLpr9Ei72YBkG6n2Zr",
  "key35": "2c6EaCZcmf4UMcfUSnHAxFtHWicetRMcoJDN5svRZR9oq7WgsU1wgzMzj54Z2hAGqADbUcCZ2sWMN8L6sQBa85RE",
  "key36": "4T6JEsGajWBrZM3ABDaZkisHws8TZQfbpAx2KRcGay98PmN4Liq5HQNcNxSbduXM3V7cR69rRgBcjeLZq5D6ogTd",
  "key37": "534wNWdLUow2L9ZWshVwnrZT3Wnr2WuP9JShRmSFc2nx6AfUqquCsiQ6tksJ4VEWq5fxQc47Np96UH8oXNmCdKfW",
  "key38": "5EvGWaY72fCKr2QgxfF4PdXiENjviWTjzvpjcnrBGxNevWt64SRJNZZ2w9uSqPE5JBFGzHCtFWzVtJ1dRzmKmYvN",
  "key39": "3G6puTzSW2BzmoJ2CzvYuNsjcV7V3NfAn9EZhvR7SsxXLC4rWxaRG6sfJAsBrTMryihf4jMeDbYxCt6BK2ennYhV",
  "key40": "57AcuHuZim6TRyD5vcG1do7cMG2mo8qG6u8a9v3NNPjngkLiYwHLDWzb4K92hTk3vEDnK6EYuR6bCHqMcMH1msUr",
  "key41": "BtghAjtXzpetrxgaUdi1qbvVPgzPXqG6AWyp4JTuRxhh7khfkpbJso76keqzqimybkJnNz2mMz5RBUtmBpybqKi"
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
