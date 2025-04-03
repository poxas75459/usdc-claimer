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
    "5DdsSVFTxWRZum6mXMGGcfYq1v6Zvnb3ADfM4rbcNe5hiBHscWRGUAN7hsgdKFnAgxWmpZ2ugCC78RUDLXCu2rc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APGMrdfN7XP9qXi6NPmrjYiRCpffZoWSmcu4iLsSkmbst8xvoXMjVtsBHHN3mdUZSP4ditmrmD39zSuXeANX4Dq",
  "key1": "5bsQ7RwaHr9K1Y65UkRFDtQZPMRQpSzYMQJfoTrSw3w4958TgrLisXZcWNQ3RZjTb4DTY9dcqRuHfnxjQx1XgD51",
  "key2": "cDjctBWnLh8JLRQMZLV6Uqmqii8QkGFWv5766M4TzEkRN1aN7rA1aL5vdwQEAF61etBpDW8DSVqpF2cLpyJZeXQ",
  "key3": "oZgr9UvhHVmHKLKAg8bmeWko2VmGi9heWYNaCQqfgFmZMDjGcBRVnyRopXaPyHUXzGhitW6EaCM5JJqTtXvwoJR",
  "key4": "4ri8oa2T56QGVtYkZTnPz5vRYcZsVvb3GtGcQJKe7c2Ckf2wFXtNfLedhz5BGafMNuTGpurKe5NKe4dpVEcueLes",
  "key5": "4zfDQoH5a16varPbrVp7bjTQU9wKFWJabXHhuUmaXj11y41WjTvn4oxcypQLVHwTJGFATqJwiiaVtQ6Z4tdNn4A5",
  "key6": "4x7yh5CqnrJHkPYU33jYTpptFtGASnPefrmV322YKnk8kPnYWxUCyt26DJFmqQS7krihCo4XTKBog7Tiw7H5b7cA",
  "key7": "3p6m5s9J6vVeUYwWQBxfsZ7ejah13MUsdPPHe3n5bwxCdndJidCv6oRr67NwXR2c11Y8qrHfsgG7JKCqoVRy8t68",
  "key8": "32es2WoUP9jivaRt1R8dKiZ7671NcH7TmXKdmVKaZzzpCeyFcFK5goqWtYP931f7zif8YiaZ4iY7hrxeuPmx2mL8",
  "key9": "22ji8kAJXBWKfuBZKn8oWSU2GcDLKX89mL4SDVSaxZrLXYMUrDksxqSo9RySh7Vj8ec2GZEiYHEERt8YJH7jVykb",
  "key10": "5iVKyU3s1VsYRGTCUEfTWsE1maHRh9pq667atuye8YqwYux3eYgK9aXZZin9sdNVrgJ7pXZQpe1j1p7sqFRzkLp2",
  "key11": "2FU85oGJhy67qotCbUwmr367XgCdWV5YHAk8Pn4cWhsFJ3eAvVscxuCzB6aJ8sceCztGAePxQ6p4MzY7XprTQ6V9",
  "key12": "X5WtJyzPt6qsYGS65fKC1pygWGU5NHHkEsNCxJvGSrT3zi8kiQQiVM6ghW2i1Rjz5QsKZNRgczJodTRvztdZnkN",
  "key13": "2PoPzVWzectQ62xSv7WmCDw8BhbGmUHHDfqv9DSnHjVziVtUEPD58QrZ2oURgqGQ2zSXWF9936BPyaAhJLkDyfdo",
  "key14": "56Fe8TkcPPFYb6cNQdb2VrHuvkfjRgp22buG6wJaT3Vbry8rEZuVqoAamAinv7t1nGwz1ezthAikR3qndMunpYF3",
  "key15": "NASP6ychAv3bP9xMrsXhNk7bgaZrmmSE46WXXGu5UsnSxgXrXdvMXu2r68QtjZxoK9RngQuNaBwHuLGoyvZbcw7",
  "key16": "45bAWiXt78zzCEiD6zCRsKPe5qnodBKLMRCqyu4x7W8LTtgC78Lj8tRRJaZ1rHdhE7WtFofLHbtF97JdYTgoUpUS",
  "key17": "63fv4QzMuWb39wtxv9HmGZh6YAx8CvACiubX6y2AKYJ2CGtpucdjxgk5P3G7dQJMRABwdDVAVxS2ese2BREjNbnx",
  "key18": "26tht5zTyJfF9KHQPLowu5HH3JHzBnsTu6orXsXhnR6nKBVq4gu9wz6GFLjyv2ugKG2xbBAxVycVo23VaKR5mXKR",
  "key19": "3GdWpfqHCjtFNF4Y9pn5fCSfTmuVt8SvrKXnmKiGXYR4QnQ8Gn7uJE3586Aa3Vpb8W87sGknxbT5KCdeUheFGeNC",
  "key20": "2GApMN2k5W9VPcbFkaqmEa6GohnUHAbdtpqF8ZYjpe4kk7JpnWszpjkU56jQrRGctqVr6cFiLyyC6m4WtooXjnwi",
  "key21": "3cqbyeSF4zTRPkiCkLACy9DN4VjUzK6RRjd65D9X9S8Hf8hyCVJufyg7ZEHZKr12dN3hk4j9q8nMQwdwEGfRT28o",
  "key22": "33BvRGDXcVpBJH8yHHVPerST5j5gVAVwkvzoJaGwpU5jfLwHGMWqkS6sBF6LGxFM6P59wfu7axbRQ3EiWrD5UgLq",
  "key23": "4aZLeRDeEANJEa6NrkicaBu7fW39nXmSUXiHtwjNQPEY94VzRhHf5ULmLAifKRs1gzzqQ23Dtqv5VjuYSxC6Pz6m",
  "key24": "5BtaUSwV293f2WzR3WdJAk1ReK624JeYr3mc5xN9ZfEe832g81NFbb3ssxwHHDDw8Tg4gyDYsXGRLfJrYs3wbTzq",
  "key25": "3pXTaKFijjKJhiZrqh5o4QLkvnvgP9bfQSjV3pk83vUwKUr4hyJASdguHxC3GJCYmLFNiXLM3Aa8AAdAof6ywp4h",
  "key26": "5aZetnQ3vhnMBk7LKDsU4kPtD5UE9dTqaMkkkRigtXEXSkJuXUe4RpDXCHTHgk6WNa7DwYGLhuSVwNPgjNB8cUwD",
  "key27": "Wu2TQ9hzsJv22XjmU5khaVM5foQpLDZi1q92hiLVCNM5DYa21puafJqcQKJ9VoECQh8bcTRBsXHcK3oypyJ27sV",
  "key28": "4rX7Lsg86ZRiM83rCTq8k53ebuD94b6HqGgsagrgUwjX2ztJYHV21z5Tys92deP1MmZFpCJeeAaGV3TyJogrTrvs",
  "key29": "2DgD9dcGUBiGJmvoqcCNCEQV66tpXXkmn36bx51UFjiQyHwtabsAhfpcQdR4zuwMjN4DffoSQDG8VFMouj6xN5YM",
  "key30": "67kDxLLBGyBvXFZe9R8RcbmgHNkJ7drRbnYksLKy8C9t4375oxuwFh2HkAyT1C181EShfpeJeA5Npgaqm59B8UL1",
  "key31": "4XuGBiKnAcjMrkGDbD4bdwwQtA7kozYCFj9Gi4tyF9UfNWn6b9115z5CmAY9k1Rq8ibtAywgvsesDzSSUMJGocP3",
  "key32": "3wwdjyLHAuZnmeGX7bG2fkBtfXcr87Y6LYbogDHCQdSNXb49rRyu2mRTzTVvMX6tufzxu82HX8KPcXL9NSJQfeaE",
  "key33": "5oaiG9piXkSJH1CgmaZrEnY6eyzVUJqQpsupknC7NTiYxfVctzSzWPVAkYeqqnTfizvwdaMiEGhhGReA53v1j5KQ",
  "key34": "5oA3Qtizfbwys2EBZ8F8FoGvZ3ncCQm3iS2NcYYtuWWpPV4SywSGnNK86dFrWw6sJZRPeRD7Yrbq83Hwq32j8A6D",
  "key35": "584kNDaspGfYaZtT6fbtVuz8EthKMF4apxnJSjTQPzALiz3uMmM2r1NXCABrTy3eRGo7hhP63uUeTYkkkgGdkgR6",
  "key36": "2ijVz4Soc1n6h7a6uT2iVQZqC2TVUcchn64UuqCRXMikifvwbncpxMWKSEkMyzfzPi6UpJESA2P7KAsqH3JzKJSz",
  "key37": "Kk42Qz1m2FfJqoMfwDThhJSv3W3rbEAjxGSEbwyjuhGhpY7j4eZ6dRLTH6duizorgSiCpdqyP3TtzTMT37Fxczk",
  "key38": "2ATVcA7k9VJuSAQ1q8Wtv1Wa7JBBJRqV11uX4uU1fbAdmx6MbV8m3hrsKMEeo8oiti8DxybAKVjgcfLY6jcoBk3R",
  "key39": "beGjmRgv7nUjpx7MzYy638sjEFoKtppXgwxXMsSyrE5S4BNbTigaFpebBiTLeosiCzNGkujsuEBjaqiXbNBYC7Z",
  "key40": "3jKngCXfvBwtk2NURmj9AmwG6d8Vhfrhyo59WMGCYNC6QxRToDBT2qWsCKysJhmqYs6LtF8LxtYnniwJsuKW8CGg",
  "key41": "5kEz1mXBYttqW1pPZNbHQrdhftt4nHmbCsrJKQTHm6n4a1XtM8DZ8QnWs9tmQRS717V6Hn2TggVuGWXkyqzphKLr",
  "key42": "4oV5DCCczECmkiZMdKrjG8UJ9iJrrnWkttCSDg9E9jdaRYf9MB1kmWqhNYHqPDvr7RBKj4UzDhxqaMy6S9eDkjS2",
  "key43": "3u8eaeThK3K9ziZJUccNMxm8q8iF3d2N6Hd4UovSpyKYFBwQxfT7JMuSdW3W8AZ5TNJfrNprvN3d6AHwi1G2nRsp",
  "key44": "4g8wFfddTpA4jFaYtGuCaQmF9Zre9VG1Zrp57MdKRGuf1XMmYtDUY96qgMCJjctKh9CVxfo7pRYcFEFPo4aQC19Z",
  "key45": "Amwc71TprybnTrEkoeX2hu9v4gjnC61mTGLLrjPR6FwNfhGzKsz5VwLSNa3iGoDGzVVuCYiD7ZjQ6C2e7VoxABV",
  "key46": "2S6sD6NQfKsyX3iFPttd3ZN68REvzWkqRQTBssdxDHAkh7Dw84c5PC3PLakcKqEnAbhHfvHJAxTBHV43PSEW56Uu",
  "key47": "2uzezXrD8Lb6SXbQocTLoc349stPn6tDT2JEfU1z6pWnLNwqqTtZ8YpwrdBfGpYz2wxj1tbVyVaQY8YhggwPanf1",
  "key48": "4VGiUZd1B1FTpQiy3pMLddLrjiZ6q2DDTps9VMi2pgvscnk1GVkRaMEHiRBsBFTH7eY5pARXfVLDWuX4uqQcBPnP",
  "key49": "4qU9r19aiYpFnPjCqAgCKfsbtRaEh1BJeSN8LN3LdYtmsMgUecNSgbKj34t4mVJebEwVmjcod5aYYXxPB3sBrnVL"
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
