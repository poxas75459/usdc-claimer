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
    "3ThqXanr36qyttszbMd7mpBvXTbiVe4QuTXuvWYeH1nMYFvDtzzHbLKq6mNTamu8K83e6jZeykwaUsL9xMBHe48Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJXsYJaMJnnNSUxpYqS44bxLcnosx22WDPJHRrkXHzS4DHP3HG5Wqn9NVKJbRzRtdRzocTY45xxSmfhzjJZ6rzX",
  "key1": "Tb6b2mGKgxZf4R21uKLVVARfCjWLnrmgiRFjtoEqigjnqUAphJHRnzj1WVpdC2k25VEjqe2nV1tHgVDogQLaMw5",
  "key2": "5hRti6wRvrue9HjvaLoQhM934VkfNfmPM6Yxn9ocfsU5gCzoUF9TeTRyrNAVzg1PwZu7ke6SHMoBPkRapg6ECtY9",
  "key3": "2bARpiJGa8bSxdJo5G7486UhgXiNR1xLZAtiv3kHjS35hTJpxYiYZtkiPXEyf7JXMG53vNNvjuuxowstm7JFDhcm",
  "key4": "3zgSK7B6EqUFsRLpPDKy4SSTCmGwaUNAztPJyCfD3HiAg56FaAgnvCGYHQAq8NNZS86yc2uXX5JxULkvhMRoD53E",
  "key5": "i3LRBxYhNP6DQsn5GboT1cn8gC6nTL1S6eRQUiSe5MfMgMxcXuYrfZi9xcobfFba6ssHAh4ytCsbBSAtzirn6wh",
  "key6": "5C3KouJ939CJnwF8p5TBPfhmLZAM3y1wEY4eTWXMtudEgX4Ndw7z5QVvENwUwK4UAM5iMpyfYU1527NiEtKeZy5t",
  "key7": "3aWwZeLCsUdnr2zXG6WCuEfFCdvH4u3Rqz5LgDZBQ2iucrM4dzStv6EQNXCtZJvRJxJo9cEAwnxWGenAEmtj2yNN",
  "key8": "4sPDTKuprhnbSe4DFZokSJEARuvjy8tk3CMNNPVEMSFmb1i2GKf1a14eG6G9YJBzJjDF1PevDnsvxqYd63TWurCk",
  "key9": "2zQSrRs4s8B8D5b7S7DKNDwbeyY8mZkjENHcYgeLfN2qodoWob2aJRpkPrJLSqkhRDTQ5PFA6MJZ5k2CwuTn2Hni",
  "key10": "3qyseuKos942JJ6qKebVS2aB9Nvry9AMHK1mKUsLoaqYe8DKrshgA3rZGRDNBj5HDsiseeAawSQydL1PZVwKVFVV",
  "key11": "3mLwNJw18vZoYUF7sGeo2EyXRMai8P6DigBGjXLNLYNQ8Wa4p2x7GpbXHetkbf4Mj5wE27yPjfGidpvGyUqnzd2D",
  "key12": "62RW34ABFzA2W7pmudTbW1wZ2DnN1W1BZbk37rjWz84uy8jAev5wVH587aAmP9N8LvaHERsqKCrCRpda8U2ehQan",
  "key13": "LdZ6fumqfjmeVqw1TGRDuh2yqNoPVsVu7KKjqJgUdzUCgmFK84sYoC46ZRWU68J48GjzUMxe8nuu2bHPd98AQt6",
  "key14": "2tPBZbDY6pUR5N5ZmJfg2cwTebZNzXihXPMTBDMG5ynRcQq3k1epzWpSY7RFGjiw6EMmf2VHkrPghhwt6PFDuzmr",
  "key15": "5kXBced7T9Ga4f7PPrL7kFwoHrrnbh224jc2Ns4EPZpQ5nrcUZBeyARUBP1ZnMk7Gu5SdDm3et2FzuoQTXFfXDtg",
  "key16": "xcLUxaSkY86ycU9qT34Ns34L4HTXZH2x6gFyWTQ73tUo5LVn1gfQxRAihF6CiXTYLyWoL62cthiY4RUj3MFGR2F",
  "key17": "5qkW3WRpLGjktNp9U4YmgsNmbMhQJpGbC1FfA7zbn9itSew5eqDdSKnc82S8qpM1EgSKLV3EngdmUsfSfG44zbHd",
  "key18": "MDTT8Yry9W6JFfgfH6hDE4V6u9qVHnCYxD8mfdEPGX4sU8E5BJETCVgsYBGv9C3F4ZePUEx8DADCipn6vj6GNFf",
  "key19": "3ntmU6WnX387vYcFNCbbHQQx76M7TVijmoWyFDHhKAbrJPRz45jKAcodiJNXgLkKCFN75Cse1RvqANR3sMsq46nc",
  "key20": "ioNTzXVuPvfvEKdYGZKCyiSV5axJsHLyqGwRGUm6d5q33zWZywM34pMu7wZU18CEGujLfxNx35cXiuzdhCgWMan",
  "key21": "54TGpjrF6nYi7c3CBetjzBtTP3uX8tTUjUPjpt8V58rqfZHEHrx8AUyQaf4SW99pL7qqUKRfju8HgoSDLo23dmp3",
  "key22": "2rATJV79qehSfL7kp7LDy4AvGANtKPBQATPXBp2rXvfEqvXZsKg6BaETk31oNeeYzqobq4XJJwBvEGYTAqgxrKFC",
  "key23": "4ki5SNsAJTERohdwqU5xB4d8wJQJAjZYiMQ5CwowcBBXLSszJBxhNQkmAoUwsdp4pHiZZpPtrdCDqhWVn88NP2dp",
  "key24": "63hFzDk8Q5gqVDR5MEBdVDLYik4ds4V66vXSzpRe21jXifcVXHGWpx7tKpPTzEPxeDHsmqoHAU1uzmGmeP4riEXG",
  "key25": "3XdB9CzsScfpzFbUJfZRCSHMPaMeHNhxwVdEy5ZqmhUSGQvRqgSFZkrqbM61moB6YCpFEQyVBtMbhtQ6F5oMsCNx",
  "key26": "4w2qZPLMzbEzREgdgeAZahihNZbQM6gBCXHLdoD8jDFDdv8YH25nJrBS2dcLRgXmzoA7jQzgwzHXwfWgZNtTKaor",
  "key27": "2tqxLb3KXnp3sKQfqbk29eXZzrbSZz6keoKpxJEoPtDc8WqnZcP1pXQYRAnH6sAzMhgMLHQbEvdiKChQWuGxDosB",
  "key28": "XtNkZaCbm5MtgrZULmMMvnkArpECw95f5hRpAxGdmwn7LXpY1o8APCs3mQ1ce66YTtPWsbnP4im2Ed77MZHRPZm",
  "key29": "EBZkRZ8oe8TWNBbbCNfRc5JNN2o9WLUZkkRKYdaAe7QWRAFnG4ynGAh7phEoc1YK4i3YH2nqF3Wagp9bT4WTrBV",
  "key30": "3EZJSWpwo3HcehQn8p6JFMfiyJRUj1d2TuNdJk2ms7FoDAdAoY49rJHvSnFbWjUaaaF8635RizCaPgvsXcnppWq3",
  "key31": "4ND7XwHp2EVzkmjkumWeyb5rDkWGLEMHm9NVbaeVRh6dqyTqK9imEWtNRmHkG8J7FrzURHc9c7xMTnjKvjg9n7yc",
  "key32": "4yf99mUiy1t6WXa35NZk2gurGHe1Mw4piKGWyVmZDg3tTVbKApMe6HpuYsiCWw2zadM1AXbDxGUdNF1YW9FpN41H",
  "key33": "PCwzvVXtrNxb4CsF6zPGjZprAU7tHXURxbtJRr76gd44DBnTLR3UKayUFTkXynVBig7h29Pi4GHkmpRfKgt5f2P",
  "key34": "34RRD1Ps1KxtJ1nifgfo7TjQAhRMmv2pFGgWGKJL65NdxEzkVKU8xnaW1GafQKVBPWg5EBxo1ByWvNqf8uCh3jrG",
  "key35": "5sGLBWGZxdHyjdTroCpUaq6HXtdpaDazPE4KTbageLU9xcquKHYyDtwBqNGbxw1tAjfAd4yYTSNGqQAtigmbXMpX",
  "key36": "46sSgCbh3r8EyET1wXEcRdvyfcEv7KCXyaLpvWRTmUDiz97jKbEDCMF8kzusabmaZtFwGh48wBNmyQU1nbiekmcG",
  "key37": "CHfb6UWRoh6hBAw5rJsTNs12oJpYPbVn67gp639YiPd8g41cDSQPkohQvku2CFUwhvB6XLmVGqqLHt8aJPZ1gPv",
  "key38": "4e2FVK6MV9ZeMXv8JcPBkcTAMWpmkVL7kiuVcDxQWdnobiePDMtVDuGNfTouCpRMqw2S3HeJaebND6xuKy6WkFtS",
  "key39": "ZVaupVPKMqDrwWGgvT9uhp5MaSvke8dmzWrja2kysFZwCf9iTe8a9B2jJ8z24iiWkCHuUbUBUsinmcJVDM5PUwC",
  "key40": "diaTB4VM6BY3sRk5AqRHjDCas2w9ZhrY3rjwPq4AsmZ28oxE3aACFAybgvDxFAVmoNpi9D7NNYKRW8VTcUxj45R",
  "key41": "2fkEb8GSn7ytVB9gHjjtDBJsbcgQ2yAEfFRnCEDqJ5LxUeafEiJiEzozJVFFaA9osGG7Wrkn7Ug3BATbW4ix3ALn",
  "key42": "38THsTmS4HUkgp3VTsTMMUKwgP6Hi33NYNhSSxVmxHzyL7ZKf3ejSsmYm95nk4oz7tvJrqBNpMmXGdks88HWxDX9",
  "key43": "2MsyAaXZ6eVEvdVgf8HeQsm28bpdNDnGEA3Q1mNif5Sg3n5NVaeNpPYBbghRQdAoV38J8SBNbc7AMVWqFF9419AA",
  "key44": "D3U6X5HNQSnbRcj8bRVCZej67VP9hntHgnfQAJ1MVipdsxHdxMy7MeFkvzCPWmbtvfvQowyrSkjuku9EsMg7TfE",
  "key45": "4SX966W6TfwrkUDWsLE4r74h4pWkWsrt1C8JXmfhiSPee6X9VFsdkPT5BGRdoA8377cAuU7HYhXJ7F2RbBKWgFAd",
  "key46": "uhyQxQHswvwhL7g79Gopj9TjFpLYm5bvqEgcJRgsTHL2FoV3GBcYoLnHXvpFU6yWGBc2igMDpUSoXrFoVXFtcfi"
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
