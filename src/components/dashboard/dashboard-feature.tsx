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
    "3Sh592hGUB7CKW5zB73Ka26q6BDQd2dHFYnSgLQNSeyeZDLe4AVAoDpNShgpD2Agz9ePMEnQ5GtRiSEvBmyQ94F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3co19nLhQXKzvNcyAKsZjiSe4ndjebS9wcDJEjhA7eu9JdJw5PfFWDEygWQmLGmRsFUUHRFdVU3pAubUJKFY8DnT",
  "key1": "5NtdiSbVP7vBw8VFdAynokmGHLV5Zc6Qmsqb8Dxa5nQvSfeQ5LAREcftS2WqCxULRQQZaB4BLpC9t2fspP72NqS5",
  "key2": "4LqaC9UpGjqiBm6DZ16mq2oAah1Bgi2CXvV6EiS3ycptTDnKNfPxaiU9FGscWGas5A2YqU2VMRrPVeNsEwPys1xq",
  "key3": "4V75RuSb3g1DRUTm8Fu1J3MrV2QPsc2FB2xs8nF9SsjtUm18UBrqL5xrsXWPGDzmYkQZuhzje6QPTnBG6Z6YEmmB",
  "key4": "QwzMDFNoR2YFwTSV7wKEp5Dote53KtwQJKEnrVrb7wEF1GRNY7ARzNdRDq433WSRoZ1LABiP59FkY4As3LueYuR",
  "key5": "cWZKBUPMibnHYauBeJxfLV5XUnsDR1bADwSA47yqKVJYCB6prJqFYdLgexrmn6RqQSxkcXjtKcTXPfPUYAvnE43",
  "key6": "3fnsvevbHRuzTVT3eyvSDBsznnbGE7FiYy4fmg2CyGKVMJtUF79T3mPJdSw42JaDkFPpbSemzf9vbYz5CgLEEcgS",
  "key7": "yetFvPoVC1ZDS8yoBNUAShScLBbcnwe6dpyYwMA8V4eU67WEtmTWwVNJana3oqruFxAUmKcwStZmFneHobc7TxP",
  "key8": "4iRGhzfoHgr6PSnEJFe2mKRjLx8mGxJVhWY5vk4TjcS4GMzLxUq2JmcpCFmtcGXLDu9AhbA2mSv5pA4aw2RakCzX",
  "key9": "2ZgotKmJmEev31UnzEngeNTUpKLYiCs57AgxeZvN2hk3ZrdwCxnK8KtKuUiBb5AZMb7MCbr8PELS4CpqwKn12TfC",
  "key10": "2sJNJBfBHzyG1LfrH9ygkuQyGtw5ZnY7id3kerbbDKaYbnfLvYKC9cr6epEmybVBsqyxw2NeHJkkGr7XWCWWXbwK",
  "key11": "1XhP5Rbvj1hhDrtZH1pRU8LaNMB82LC7zW7NiUh5QUtowpyNBsCtEmL6gWiPSnegEmc1pUmi7RCHp1WxEhgnZwL",
  "key12": "4WBPRC7yD12xtmhLT4nGiW12KYy81Bpz76Fu7RJHSF7Zr6yNwjoPGNZdpXuJ441mg5Dpez9SBEKePfxpofiAHYnU",
  "key13": "5m7eUUTog9B8Q27VDHQaxYZa9SCcvY4PRHiuWtvKFEsQ5y5aLVbRMBgYwrF1tobCRNazvr6JmbrX6EcywLKNdb3e",
  "key14": "2VviJ17AbDi4Karg1RfFjPF5hfCd9WyBiGMqwSTX82NC1LXvMLCTfkYA1i2kk7sxEYgnTBAH2Z5xamRg6qQ6Y89Q",
  "key15": "5P9GfKhC3wvZi3JRwR6xFH8jTQ93jLfinEEecMrsDRa9yAc7C5puYnwNK5t3DQNKvtENpTqEuXRST63D6Q1C7CRW",
  "key16": "2UucnfSkxupe6Saf4S5Dafvk2eUoTAtVF6tCe27bke1vnQCBvvwQXxWU9yW2YinM5Rgt8YywscTHqibsjex59X7f",
  "key17": "2qJ7TKUgz5LQD4Gu1xs4RzGYFwzHLEEb3Hjr8vsN7bA8Dpsxw3LzJreqhcGCoukPEmZiwhEtGws1YuXsH6BVaNeM",
  "key18": "49u5PRXr4YFZF9C7AW7tFB7hfHxGHLEjGTd3V4zXMJo9D8NhxPYqnJMr4YSzJ6vH98VM4tfeSgaKnHvqagHKRf3w",
  "key19": "3kRCBnw1o9BNamJ635WG4iv2sBHpmJk3ttJaSGocjbpVoggfG62LvnE97dXSbU4KBwq7nsrsP4jNfkZ1YFBjLYWR",
  "key20": "3U7tN9jeETURonNNcLeb9qWK2fDBBFZ11zws3uasGJ8Xrd3VU7Fq2dEW487swsfDZZU2n6pFM8EWE2ziY4QGWKc3",
  "key21": "2wnjZN7ntqgVx6EH5DNB85TqtLv5H5Cw788v4br28w5NAkzGJ6ERcjUEerwatpG3azTApWbBw3DdBRhCqFTtDacD",
  "key22": "sj7gb4Aeino4KEv3dBQHDnS1XhcFLtuFzPnXr56CNdLoPxoPSwrU2BVRYv6BhApUqDYozDMF5AFY1BWwM1gzFgE",
  "key23": "41h8PmSVgzKzFyG9hE29BsdwArkuCpE23abdm5XnpBVV3h4tMT8nr5nanKiLoXbKqM3tgHMgUxR9AMpCTYjpcfay",
  "key24": "5gj8awkzsaguhMcVedRYCN7MpC7Ehg3zqykwxAhs9d2NL5PLzFEjGus2vLy2Yh2p8XH3fHFVyJ5eGFScXwwUb6s4",
  "key25": "4Wucbtqry7VsdvLgyXr5VAEfagEBjyDaas8WHp5MfRL6oBNV96YhD51pkD7KwAQ7vdC49gUZ1ZeBME94U37viQyR",
  "key26": "3nGeVk385XrLQmUTTszkw2Pe8cHiPqWL55WL1UXQ8zHHRMDfNDm9BQ2Pj6GM5bp5TJo3pZMLwgg47zgbJPus8HYC",
  "key27": "4y49g3LxeBRFvcY5g2cYQf9WdEAfZGEZ4zjqAraAe9ou7rYsJpGKFHZXv3n4dYR2azU6d8QiBGnicfGzSMQguf1d",
  "key28": "3U6wCK36bM2LRtQPFti14z4gqXw2buSKa8M4ptBd7HaxyBbWR1hYbHR4WJR8tZRYGecyGiojrBuNvgcHAxjo474X",
  "key29": "34X1eJzB2BJZk3F8KCyzWcwXiiadnWm3yPcxGc2mbXo5Yx4Xck1RNthVoNezgN8Be8V7fC4DvkaTyUrL3e3Cx5FM",
  "key30": "3zriBxjBDtNJfTeeZnexkMVu5Xc8mUcw5sMMdXJrmjZCzwEPcEwJA4zjtoKySPWGNhsYGvtpZkF16EeuhjbbZGzT",
  "key31": "5essm18ptdSqoKkTKSCFRW3YR1En5yX2S2JNvjr3Gpdrko8p6rah4WDUAy7peE8NXpr19ZhXJtu7VAwe9LSwisS3",
  "key32": "5jkmWF5KMaC4nXZpiaSMdNY46Pwr5GsQ9ZQvp3CiAQXUf6m1L4HNp9Xmc7RnwGwKRYedtAK1abXXmSbUUJyvdd81",
  "key33": "8A9MqgJZSh9Z1qpSLK2Bo83pmJks7ygHxsFu7LRrRSQmNqC3vzibG8k22ktnh9TGN6tk2cfSTN8a4oEBG4HKLKW",
  "key34": "49KToM9jQjNnQBf4Azoh3MJBJUYBBDATpfC31s7PSTixoXQRsHhZKtHA5whdaSAmRUWH8Cxje6EJmdsGWJ7JNYB8",
  "key35": "3aMk38tu2sGt3gZZd1VmGLtTQEvXttjcrPrWm557WPd8gkQc65LB1zRxEHSooaTWLnJv5ZRjYvcWqWZbGe4XXCCa",
  "key36": "5QCZotrMwm3vZCEMEZ7SgTvtivhP6cxdQKRjFE9zw21egadhehM1rcH9gzQok8FLwBpETU9JKv2EwmowNWnFxbr5",
  "key37": "4iFvrmCuec9X1P1UpkiTGqfWCM4K4nK3KKAKmEQGkoDdKrpPbMAiawQaBXZTUAmMdV17Zw1d3nUAmNiRnENhdd39",
  "key38": "2TCzwkZM1GRWNo2BQLPsQhG9TGd7Rhmgkdx6NWwiLagT6Zr2yRL47fyok9FG3RG4n3ibEM4F42qZr9ZCy59UMjiS",
  "key39": "2c9n7pC6ndH49VZpDThoXHUnZ51XQCE8N2V8CMQMmfHRemsGitdo8C8tHm9ZGmRngxMdrCDjTqKLziLKPbpZBgvg"
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
