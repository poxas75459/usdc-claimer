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
    "2H91y4PakYjuJXriDWRYYF2Dc9NKcCuhUEiWppsM8sQQPVP4Nshhya31KzgrhkP4FyFGbhWcjiuQxg4XjJDQJDrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjAQaKgL8qHdg2KF6HQL1nnGVh9x1T5oCpFHc3XbS6TpkmxVubFY5e4K3NhYkT7vXqFoD9rTGp2aBBKK6wtL6dG",
  "key1": "crgr1uCmcr5NyuiUhADf8pEudb1PJ48cyqJ17ABPy5vqxKkvJLihZGxLQ4DgHJp2RpMXECiBiLJJF54QnqpF7HS",
  "key2": "3CppokAuKAPAmwim1LVDFi53TJ8DAv3X9tu8Yy54kHKHfFWus6VLG1DruKMmSoC6QHiDH9r9pDgUiQrb37rKUei9",
  "key3": "31LH4bUMcucWFcKtoCBr1xaXZspMUNXbhP25H95ZcC5Qfi2xbb9vTCD6MVcXU1Uk32pUPm7sFVaTqNTkgSBPBjs8",
  "key4": "2BRuswbi3ixmsAhWPA5Evc88vrCXuZRTPFjm53gVZGEbKYgurcQTqcvRPR6wPMDWZtTWM3L2hmkxGRj1bXjjyW9o",
  "key5": "28d9617GWfPmPgyerofGvUqBa2zZbGQ299TkvqxbSmfD1Ta8krkpjkEygUttiLHkkUukqUbCADcWAsgs1fTC44fY",
  "key6": "3xXoDv8szuYBdxiG8GuuCxroaifj6jTaqewUcNMjd25ybR6y4qnwZxE5K7B3amCoC7GWmmZyqkxApXe5y3M35bw6",
  "key7": "TjsmfWBCLECzYLeaYTEgmHJXHer18ZMsAbCioWTLeQVUqGjdGFC13AH7oANavJvVkLDuRzUbwvXrT4rykMuZM3L",
  "key8": "x5dLUqdDg6MxVK8xKJ86hiiuLqvzL76TtPe2kPHWWi3S3WAtfUJcayr43WECyvaTapXsn8G66xdXNap29gXiUjK",
  "key9": "65keKYDnvk2vMuQontPQXsb4uu9J8f8TNKJ2v6DHJ7wuPYZggohbE35gethWqd4cE8BPVdbFt6YPMBkeKvdXEoG4",
  "key10": "KVdwcxDeZe9E8voPzvQ4HiGLcmznEVim2k1XHcA8JESY5QxPrcVnbZFfx8LuuSoF2MxWLmR8VcYB3K4TAytom78",
  "key11": "2fRcj5uAA6iLYufHBEMKmuT8rcfpXXujoeyEtTy3pX5z4VVBGxQDz8nncATXRpZoL9PP1E3AusasCsAKpLe8wSVR",
  "key12": "2y7RDJxsDQHSnfQoSgD6n4Fwzti7iicyezSC7B7yUC6TjQ1LKLpgFA8SfznAxwdyCe5bGPoeGu2Ga2Jp7mGUKA4J",
  "key13": "2SiPBJL7XEET3bhVmAFE92zBM8WEwgEZ6YWMW2VDFn6iGPTmijK7z9CXYFZcF5Y64a5rFq8EvnAWEWrpXJY4bq41",
  "key14": "2mE1UZcu14rzvzYc6135N32yPjniPYYF8Qy3meTW67xvwfTWk8WjcBhNxiiPumxoCM5MKZY8xzRKXM6k4RQsgb2E",
  "key15": "22oXfTxirxeFmRbK4Kby8v5KipmERP2QaeijAaRwPpLvsXD7Cn71gDsUrhvvChSGshASD7pj19RAigjH8eyyDLWN",
  "key16": "NMqJiHNc7m1CkZkHwJf7PyDviUfUSbJkDvLqitKHYLHR8ek2sTYARLyT4xyvYMbPHnRMCiJdM4jXyEQR9RA7Nyk",
  "key17": "sr8y7K3r83qW3kKZnY1BGHymoPmTa3w66yRawY5brHMdJ9ZGup7aGFmih72YmxpiuhiUkfMSVuVjF3UiczdMJND",
  "key18": "4e7Qhj8bkPNooYAeGEUQLWZtB131zsGxrrd8eKrseZEd4692QWjLYSbMycNt679bGwBY7AhA3BHLL1q6brzgRLZT",
  "key19": "5NnvoEbJVtzm7X7ya4Nze6VaUNLWNWhqtC38eCRf5kSNCXYPs1CHvhoZWhdfyRvb9kYkSK6fsSCc6X6dWAJPxzsY",
  "key20": "jo4hvkAiXzgBmMWH1NN9zjRzLtYyqNhVP6k7Ki1ooBSaPafj6JLMBGb9BorZRgL6LHQRaj1Z6H48bU9sxN2QY4q",
  "key21": "2JKfSCPWfoRezkBqACHNokZ3cxiZDQaQDnCEodWCtnqeRut2D8iqQbSJChUmfoWrz5drrJCALrm8HjGiG8SsDoqi",
  "key22": "2H95T9jzSvtpGdYK7xswMdQ7qWpkURwvSdzp8dZ6gqgwKjaAEyaLCE78g1cWxzqpXDceV4jrEzsncXyBABehYZhk",
  "key23": "2V2WXPNXUeapxEKaTDubNaSoG6Y4gLiEnRG3GLGB8oQ4gvmmQPnKsDoPm75ndFrfy1wRq7rG94aRUUZErTw8rUeH",
  "key24": "53aYMNLgYTjvbwcnnWGotfzPtfQdEw4qCNMfyh9sKLs1Bzpy7WTjJdD7XbDETCSPU6TzVttrj3e3tw9TG7t5bwUJ",
  "key25": "5VH2pq8qAUzTCxqu1uNqpDsyeHmaBX2RHSBgyeVhbqMHVdE5RRb9UMRTiUiRfPzCHLuw7D6RG3ZUsmJAxjahePXE",
  "key26": "5SVKTtzk2EYqqJzCj7b6Bs18vNTb7hPhZm27vBg8uLW6BkdqHHwwByJFM1raHZTKEDKNBW4pXco4TpEdQVFh7oMd",
  "key27": "3RBdhsQrKpGqmtWFdLGJR4oY8ftdfSjNCpZKGAwNeE6JaxHH4HTYZqzFetcRHvygaqnNY4gQfXRjB3r91CCP1WWr",
  "key28": "2s97tzem748pmoBaF6uctdTci2ixsmHRjyjsbMnWbj8CNW9qFoEBbsB6T7ZyhYc9mzjxQKSUGBVpwWLAnz9eNeW6",
  "key29": "2t277iKvL1GYNoikopZQEWEtvSzuPFEEfryFrdtVcv5JXNSaVsSyhkxsCrA76aYELaGnkFW9qDkcCzssutfvrcr7",
  "key30": "4pNdxBT4125hkSsfRE3TbwJQ3z4xuieqKXqLTp2ms3zQHJcpZedbarGkGhMjLnrgWinu1Gh2BEmKTK1E5aw5tHdW",
  "key31": "3Fr1gXLUrvwxNyCswy5M8aLECZQugiXLcgFnWVUqQajLvSp4gitJ45jH8ZqKgfKE5bytaBwUD2mpnTTRnaByuK6x",
  "key32": "3psK9mngfRwFtDyo5g1pnfbypJJN4QsNryHpyWbaDT4JwwLma9LpTMybVNoRmjtrq7S2aHyseH8qiA7LBJfRWL5R",
  "key33": "3ebFfuYLvbe8u58ri54nAm4M3YPKDLdD9DFBUPFxszYfMSJyToXU7toUg6RPAVEA3JPrWEvxv39uzK62ozsKTuzw",
  "key34": "37TqimJUNoYHvjWanUCSQ2aZLyKfX7j8nSAy2WTH3iosknybjgFGuLpEZaQT2U4YBQzygzjoFwEah2LudSAjcaxx",
  "key35": "qvc1vXqqhcMu5d52qFaCFf5N9g2T6xzF4hc4o72iZEpp3adjQWjPRk4w27hEfs9nJ2ogPbcByiPzgqWUzd9rQSB",
  "key36": "35FXADmVcL6miyJ3JNJkZ7xwtYDiLC38GTLTLjeyr5rAiKtk661iGCBLMZYgJkyQeihb6RsQAvHS83rbUaPwazu7",
  "key37": "4SCmi7BC1Ct2sDFZhVnVsetVsoKvfDhqyaPDRXkcu37uzPaC53BAjUbc4RFscip4BjyWTNx42Gn8yYqdQzgyjzGi",
  "key38": "2qUz7XcRTEm7rbUwWneQ3sJ5dyP6y9hHn2YkLR4bxtdcJ3TgUeviFMcGE3zLmrczHBCenqWLmQg7WkvfSnN365Q7",
  "key39": "vE9hfDjxLDJJRvMni4yQiSeU8PDoP9AXftnjKysxJ4ecfyoYFDfweyB9q7aNRrbqxb27JHfUTBb4awPfADXxEWk",
  "key40": "22cSFKuQkQP3tgu1JbnnMhzzYyUP4u5rSnxt8Cb9JxiUfKNxz3gj7zswgSx4Kpe3pjFoDfgwCB7s7VRUn1zkcHUW",
  "key41": "5ApnobxGxjdQdpU7cLNEtMHGyKRA8iL9bQaAdtVz2uRJhGoHwCeYn11wGnyStkRXDwpwoQ7GLwXw9w33ag2GHkzX",
  "key42": "aPRDAec6mhjFRidg4zU87dNTRuwodkV4qXvaBrypxtAH3sSnmtdLhd9ojAkEDpDoohu2a5kFVzrn3F8bWq9Pg49",
  "key43": "2ypMXjYaK8bDKUfHJXgidEgH1peJVCg22JPvXyDqVLXQC7HqWEUucPRypxAPLCv4upaWjmLPbseKmh2UHtSDigaP",
  "key44": "45is8F7vn7Nxnwit9H5NhnXWvFTGUZxCZFfc7rpW32kSssEKehm51YP4UW82S52eqfG7ULtrnqLko8aQ7gRVMbGc",
  "key45": "4oyTozmHHxFHy3vAkhWNMsoFYSnxDqQv27a49MZR5AR8iswRfqdc9tnkYssvmnPCacryK9X9rCXESdo6HDYn5egW",
  "key46": "45b3hZJirbk3TYkM8beNgv7yW9ZijYwsS3dBxUAkUKDbHdcQEmRmVTudHhemzE3Nc83RiRj8f6hpLxRJA6yBNmFz",
  "key47": "2ohFRqFTWcVyWELqtJQhwnx6d9JBhDWPLZ6vDZEJtJMsGFR8ZrjgQWzokrRVmNfKUfNrqa7K2eAxZGBQA8uSpAFw"
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
