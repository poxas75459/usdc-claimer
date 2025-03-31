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
    "66coT6UziehtK7DtbiooPbRxyYE3n4TGhUHrHVDPPFpYL8o2yxt34dW8dpX9poh4CxikYyEUrj4WqYnguT1b1G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiqFhakbWF8EJShmoB26Fs9mhGUGrcTan2pHWEc6KDEb5XmPP7gzAQoyxortEru8tV7HrTbcz9eWZfsSqvjW4hh",
  "key1": "2pPew31BbPb9jWjis5Z9dyE1xDUBCnf7nb9vbjcPNSU3UhdU7kkqXvZXexCokRNXzTNQKQN8CN5FhmP85UNZ1oHP",
  "key2": "34KRVsPkEwwXgpqurbe726YRSinmP4rtxBknD2XXmoAeXnEidykcakKWYYegP28Zcs7RkAohoLbRpCwefH9yxQka",
  "key3": "LBwKYGefPSqSC8FMn7MbMhd6Vs4kdw1f7spqrfr313fGimB8UEWtfYmKG4QLEyJvkwSXroDvYi2TXU5ZPpDsqA5",
  "key4": "4RLDtXs5iWeEYmRnxhgFP25iF9BJeEqnAWjcHiuvb3UftyCjEZSiFTJQWrGNJ8k7ct9W9RBHt418kfq2qVKpDecL",
  "key5": "3Lkry4Li6DbnUL64A4G4ZNyYqsZ7LJyHCJdWxEPuHyW6rnqBh9hSyaWrGHA4n243f66rXGueAiRkkiMbRAgsc75Y",
  "key6": "qw2XmqCWBSSJFwk4xTF5BAqRZigNGVMg4QcJPMjqiN41JZJd6EtykMVZFN2NFJmpNGPGYkFiVeNheFboiinRHAt",
  "key7": "3q6bVqxJdibHdkqut2wKypKdSrT2nx7ghP2mAC6R9SwCY1N9CrAq6rtH9z8bLF3xwK2dv9puRGjaKjvGhkkpCnkU",
  "key8": "3Q2ChpvJ3jveYCeSnvc1QsQNmauNNddWjEwpAg5QD6WZSFqjHcyrWxF3CtAfeohVUxoBYfmKzbpUjY4yQS1fRztF",
  "key9": "41S4GwDg4AmUTwYAnR6pe1d8DsP35PHFphBubVU9rHx1Vp7vahCoWwb1p5z3F4LE4msJ3FWC8bTKLFJvepFAHpQM",
  "key10": "2smqbvEH7zojpPKt19Zc1LXGzy4En2Zu1ruVxMRn8pNUEUwbTHycZPaMHNCxbV6VoxLyPD2XExvCLXcEVseDceHr",
  "key11": "37EVE3azSptzEQt5GEV96afha8ysS2bQQBzvcuTEsL2nw7b4LGMBAmkwZqbBaQbaPAZ8K8TJwNe1hf3BUcT4kcR2",
  "key12": "KsK2VxY8KUU12b1KC6uNwLfiNP8KrwnSc31g98fspPDw3ctYeRYtvPoNh2SVEnFF4YtaaDNeUXKE92XEKPEfbk1",
  "key13": "5h1JwVqN8irWzB2UUokfLPB2T89kG95gD7TEt8NP7v58em4ewyAHQ5u9xVxjijVSrUkQx26FDiUs9vdiyaAzv7cs",
  "key14": "4vuNeryKsFwxFYBHTgJyJ32HXt3ZFchF1LZY83A5VpadsiJXt8kZs4Chokg9ki4XpBMhbGkdsMx9JUTVT3GMnZrY",
  "key15": "2tnn5uM2HdZirinCjBoUCneDGRyA4v3FZv5yXi2jtwHqaEDo2JFrdxr9MiKTFh33Q4wGZ6qwzPKTtJryweVBDnfH",
  "key16": "4zFpHmz284WRBxHjGZkR7LGxHzzkEKWbm3zomH7PukADDMkJyDF37KxbMbqkqRze3YjKhFzG8BNSnZ1keMJF8mbW",
  "key17": "4yjRZXmkXMijn3JbXDgM2qm8p9XCDzTZMzh1XoUMJSUMb84QXH1yovr6JqWJKQC658T2eHbcabHrR4u54wq9Dema",
  "key18": "292XVsk8gWis5wU9Pfg9ogLWLFUrNs9gnsj6JrRCSsFvdJSTpPLiPDRhLspV2fbnoMRQfkirMVdWfFfZA4uaCFdm",
  "key19": "tLfLCL5zezRqisbhWZuhLWpHvU8MKVgJKS2gjHEWTPSrgfkXbg8wEEQLTF1pfuLkiHvshJxneBqWnkC6prsdZC7",
  "key20": "2xAZMYSTvxSU9Kopm41RoeKJf2Q1WWwAKLUgjeJQFWDw5u5sVeBP2p5emBsPrFdftY4po22N4fwX3F4YGDFAGZdS",
  "key21": "AzP2cKzPHReC5gVAxGVVZR7GAMXTs8qFD8dDP53YwuCeQZxhFud7skzvrDGj5ig6nYjr4Qsn8A6gSwQVpY6goGE",
  "key22": "4Rzqw7XPWFvcUDepPevQFp4VVSCjurLPAxviLF9uyXvfhi5UJ7TbU8nQaEqejtbLkL21t5Yhf6WahQ78Kcp5n476",
  "key23": "a9dcvjh7dg4AWiJnn9kaEpfGL8D6ZviUHtY85BRPXstqMeXUoAvHxfLTdwTk8pp2ZzcwAPULH6wCEdqvmiNvg97",
  "key24": "5krjpRETwpfsSBtmpNwsEgLEUAHszCqsAQ58mcnmpaNhmyNMuFvmfN7mHtpEFF88EAZNwTYwvDsVE51eVP8kAZtJ",
  "key25": "3DbF2KmH8F8kCmSt6U7SZtjg64H362ptHSvzWq168hAcQSTWcog3UWWnscrX2FkMSvDwAX89tc9YPmxG8jW279e",
  "key26": "fT33uxxuZCraGpoqfauKCeRhUMGL9M9eqy9DcTC6TcGaG9eBx8vw2CuCBtd3BVD1Kq5zfSdHwYy9i7KFoLf2kVx",
  "key27": "2A2vUygWYXeH2BXBRxMT6GRNtnr7W7mEtmm2SuYDCmpfQLR3gjQvE7wwdBLxoRSdKcMZ1FHFX2uUe87fPGdfbtEK",
  "key28": "5NLRBE3xNqnwy6E7S3CL6e4MrQnMtGzFEBftUCt2MtmF5zU93fcwjpfya39orSh9yzr4bxtssxDxtCzWd1Wmw1DJ",
  "key29": "3G2WFgFwap6WgLxsixvsaZ4DiCPtxsdLA8AuH4aaBBU7gGradMQpb5XTM5yhbpEcoRsCpCkm1VK7VnquCh75VwLB",
  "key30": "4UWXGW4TQ6NHeU9Da492NaiSYSbXaaDRF5qnfL2iBa4tWhYBRAJ8EbcuWH8cqTQAk6MW86nNWtwKe7QBAz6HKGEA",
  "key31": "se4rghGDEFaK73uQFXAXhYDqyRh5iruHVpatdQ6yj5FnVmW2QESFDRJNsMaWT5ATtybGpVyD2VE1Ugh7x5GFR9N",
  "key32": "he5DnwHp6CnTqH9k3UcCWgKsgbYmAELjuquLt5rVMUwG9C1JXmrCgKPXNWDkeJgZw6k51R3AdMxenQAeR3bbPBB",
  "key33": "3yZqxtaehb91CCEb8ySHg3voxwfxWgsoRFGfUbdt3zX68JZ13q4Md8gaPWyisXyPu8xqU51eRexXghfxBFsCi2cE",
  "key34": "MxFffXd54EpgSeJCPsEwsWMrB6fVyCY1rWSbJ7ZQycL5UX1X2X44xAEszSki5nThjVqWJcWPcRXRvAEGirDs5pw",
  "key35": "5pPPnkjgxWksxgWQKTP2aEVbNNyP1PLY1SaqYy6vCTPCVuNRxG4cXzvkHE2vm6ZVutwaTSTqTnTHX3HTr3FMsXFf",
  "key36": "5fYfkj8vKzzMS32WcKD4LvkSi4gHx3EN8USg4gpMupMnY6X19protmaLfHgXMnvo6eD4Wxa6bnZyz9Mq5S7gPcBv",
  "key37": "3GZ9tSpPQNpucCAHfCSJ7FYaBgPDXKCSZm6vvA5A8R5dbRKAnQvwpvDWXAgjbb2SbNuytQePTWioYnB5kMSyg9BT",
  "key38": "3F5B5nhax2JqSBwmF9hmBWStamqKvTJGLwKAKrFvFQsqaChb5ynKHggVCtK4SFELvpNQU6t7LbocZ7spVaCxMJMj"
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
