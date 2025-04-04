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
    "1rFUqkn9saSNvqa698kBprJzF9SH22usaFTtJeDzAU5NZoG2UXbwp6gyDLVhQeye3cu8iPuSeZ9nqjphTiKgeh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhH9ydVagHr4uqLNuVx7TKdbjdxjNpM7dtL4Z2gjJ8ZNsWmUwrH31Wrq8PQMCrChL4rwRZsLdqpY9qG2kg5qqFT",
  "key1": "5AyvX9uHpTeosjRkiiBrTF5AZywniwqMhbL9KaADWJxj56GAyP28fe7uE72xqUiufGWojywjYaWz4cp2sbwbmrEY",
  "key2": "64sAW9rsUktbkrY4wWkJ5dJmncGvaz3rKR2g9sJkSzW7QGgh22BVVUcFXmwAWi3wE1ytrY1ybu3ujxb6fAfQkD1F",
  "key3": "3BEzUXH5DD5YWq35kFC2WR9HeJGh8ZhYftnsyWvrrGxYhUS88AGPXqgZo36hkVUWNAcWQaiwThRpis7b7xugGTs2",
  "key4": "suARYZMN36fgkxPKvdqxTdHM8JEM7iPkNMybx3Dv3XvUqgGXCaCVLaXtSHHbNc2k42WFY8dQLYXjXnXRCMY9wHM",
  "key5": "3FQKgtao5oB9DZXqs5oPSFSgP7Qng4HP4gtNErR51ugSUzutW3PBwzZFtszvGophMs6KFjwQeWWyB35G8ZcBniLx",
  "key6": "3gS25V56sYP9WP9uCFVAmUKbVooitY9tczfKKnrmL87FSW7qXP3zV3x5XDg7mmu2NdDoVneniwWj5UovFQY7vkQw",
  "key7": "62d5VJFArK2jy7ST82mAF35ejGkNozSYhFuvYZzw71whfyK32sBjyBkMqyn6vxfZ26SNRWR33SjVDNoCop7fikSh",
  "key8": "4FoYovb8wk8htkNR1YrNQ2KtrnXmb2Qcj2qoGmPVpdJwLdtVsQsa9zF2UTJhebwKDTvaEovPweA2tiuy2u4e1L5q",
  "key9": "59Lpn2HMmpPtCiZzFixdgg7bLZc1PqnrsbnKWQY4qKekEmpHpe6JEHhPvpmQoWdmGNdnGjn7gTZEFFCvF29dMGE4",
  "key10": "2uq6a3tYCCE5bzjYTqsQxaD5MQBL9xhBSQb9JA8FPTycwt3djomvHHqx23kCr7ekmjjTi1VuFp5DVPCeqNfH6UEx",
  "key11": "3RDyUBQtyswogAr5ArkvaaZREaprag5oUXWr7AFUHVe6HmMiWFzM6y1GZ1VcHCL4756XL9w4aHGUY4VTyamYww1X",
  "key12": "Q6F2qjknzVfjC3wKwn3f7zdTy4MbVGxnLxBk1MW63McLpNgmGzCUZpzTLKJ4DCizr5dpj4oY1Zgb4ZNBNSuEu4m",
  "key13": "27Zs4wnGV1drmA7k1TERHY7c9exrznkTZE41CiRH1bdpZJY9KVCZbrinxdU5qLVU1adVVmdksavwx7AuR1NXgBH5",
  "key14": "2NkJ55j5h7x8k37TQSiL8G7TnwBVbRz6z2jQdPzVA6HxMWMHjy7Hn9gwCxcgyQYvwECWBnE3ymcnWCx7AojuHmmh",
  "key15": "4HY42xtmmizXD3mgSJtT56hXZuyHqSLcQz35DMfkH9bNtHc6zaiWGsPiMvugRicmNX35SsqYjnkvkwTpz8f4WXhK",
  "key16": "2mXVm5K7pr25bqz24mYUftav5bZJy2QN2aJDDjda8uKXwtjYNoZPh8xeADyKt17ix5gFtnRbPzCFFqyXP2BpEsyv",
  "key17": "52uLQfDYEuuBro1aJrDQtr5Se1xeat6mczHxzRLjH7D5TrXrjCSqid89fCf95zP5SquvZcbfanLSpv7ZQtDXx7nT",
  "key18": "3anwXYPmTeMHc1nNGfVjDEk2TDjUzrgVc7HKN3rtpyV4U1PudWQXB4Kpa2qRs39fpZGtg1oKXJbbX1K8SVV3aZSX",
  "key19": "JuLcwsf4G2yyct6SXvUk2fhvCdUZhAkLemwK8UpXmGTn3M9M5KuXTBcx1qsj9Yod7BBEGBJt58Jr3sfRV6J2bch",
  "key20": "3NWS8F77RecsXY5pQeiyfivw7HfBknGVdzEqScDLxhziZngrVTW3kwsxsnVqhgLSnKnS6VB1tDEGFesnVQzDiwc2",
  "key21": "3uzMvdCfrMQndXSTAT2D8sUo3pjxd9U2PbA85fEN8Lnmedc1MtwD6Tjn2hYYUKRW6pHsWi4mz5eVwZktwvkLLbqk",
  "key22": "URyqVydiMLiRCzGjRi1Kmza5zpZtuNmA1EbsfcZFcC7umab1TvFZ7y8JYNyrMCk9aAtBMgAGtDyGdSKzHTBe6ma",
  "key23": "2Fqq5LESw2cnshXxVH1byHmhoPV8kz7xnLYWUoSSaUn5jkaxWMtCsPSmUHQ8Jst53LiH19JedfNUfiudktFNHExX",
  "key24": "5r1cNbBjnuwGpBh6D6J9UyJBUQ7cXyXsf7feuw7uR2uVzJmX8oghsUrGirSciuEyWR9cS1dzkqmNSs9Q7RiQAYAC",
  "key25": "5QcgdDtFfvSFMVGTZXmkbc3JfybsS4T8vetPmrEoUMZcNPiLTpP8gWkH3kY3TNRoqoxXg7GZU6oRCWnXWDF1wiE3",
  "key26": "4FBqybYCeZcMvVrGQiJAAJjgTwj6GJUK2tyt3gbz7W3cuYc9396NcBK8GsaXmHrEVBpFmvjdVwVuQnqasueWXYhK",
  "key27": "a2HELGvX1KUoarnebd3WfvR51uicwwFyoMbq75hvyEawx6M4R5a7ouyeDMdPho97FF2K5QRqGnJj9QwyBQX1Yp9",
  "key28": "5j7xRhZQHQwXfbA64RFrJaHua8fFSdNstpRZRJjH1G9KbvauCZwWSyLXXcaDuV1XRk5U5KtvGbnJGvCfwdhEPKUB",
  "key29": "4bSRa8AN9m5JknG97Zr9MUA2sH6EAPfd8HLTCjS4qXASVvvKR1rL4Wj3YNth7Aa94sbf4KVitfNiBcChPeh1mPzK",
  "key30": "5sbbMH4utusuyEQCpFZ5kGHqjSEyeJGpHqqyJfHZKUGQVfoymttxjmFjTYeozHyay25M1Q11443rrdvBAo7PvAJ7",
  "key31": "5purVHX9mcqWVMvbB3vuZnnNtPprJ3uc9mJDhnXJVhNbodSRXcth6Xrmw5J6XpyCax2Y4cD8dX9UXPBsXFxWpnfi",
  "key32": "4c5urLZ4KSGnWEuec5nWKkoweqMgk5oYZ7wUAZsQTMY1DMm6Xgi2D3XuzUnNedg9tPvqJWdj7YG9Ei6saerh77vK",
  "key33": "1HxaQTos8AuUEyFTM5kagiTdz9h19LvrqKnWG5TmZnsvdCqndwV7yfguG1iquxhuyToabEDDfCteY3YViCNfCeh",
  "key34": "3zTLtLFMzeaMtGteYCYadRUQP3UzcDMve1br6g4k1DR5AQSZvRkRfbghprrzUdkwVDnFfLktECWaWn5UNaGGAue6",
  "key35": "4UfgrirHVioLvZys6DR9RVJ2DcRZPUNDWcJdhqdSKiBdZfbTqKJAXNFoR3Zuv2Civ78yQbUmMmDMCRX9uKJTrR1E",
  "key36": "2AVUJohBL1VKEbCNYNBBZyQakPmszyPzMbD5o4j8Tiu3EVSA4riaWyk3YCpkrZwJQtY6YJ5TUzk9aZckWT8MJqHL",
  "key37": "4HCHsz6xZtmapuNvPKiZZvNXECjQ7WX6JqraHJasi7M2cQrSuoyp6uPpY7gLeJB7ooW3G5rzJ3keaGxt2tVFWfRG",
  "key38": "5vBavjRpvDhRGk9kedruw4o9BAYQZYo1kWM2yH9tcGRbaJQBDZ3ZQRG5Q928wCaDAf7LsvZWLXBiw8ckMqVQkd3E",
  "key39": "4AquCkv8qSatgmCimGiH1mDVsdAAZrYFD5kqcnZACytP2GnruCCYYAwXgCVVcq7wR22Nr3dxsNJ8aaKTK42uqRSN",
  "key40": "3KWdzsNMVGaNWiWL5dkaTLxUoH1AKo1RPztiENhfY6k7JT53NbMtAWqkK7wFMJZj4teQwTkRdHdT2KmvBziEVwSx",
  "key41": "5cJZ6PsMnP8JPFwAGxgkpGDbkXWYt4saCvm6ur3PzGEz9SDZtHsacqtfZFwqST8Yfxr4o5k1mvEB9pVwErqQpHLS"
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
