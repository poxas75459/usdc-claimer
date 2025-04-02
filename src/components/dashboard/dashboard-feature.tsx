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
    "4fr5ecU54GwZs2234aQuXQ3s9EyFNyHdJSnybuJ22TFiABhD3pnmrM8iv7S3NHAeqU4WPZ1wrtg6oQ1DWUaU39zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mKV1XRdFEp8swDHdSeVCPWSdyYny6vQDTGmwXYY18zL86Z79KLzd1nNwwSLoacX1Ysrn8vgpqTe1stDrcdAMt1",
  "key1": "rxyToKL4xnRqyfNoKXBwn5a33i5h5dZQcQqRbdxHxLur5hWvSKKDYehNvcn2SC9PUkoysgG3uKYyfvf8kftgvoU",
  "key2": "uwEJutnsqtTcDLxeb8tBZ9cQYhMetaJVP5ou5LPXyL5PDcRoPTicAeiqzWV7E7J5TYRZ6Caerz1qPbi7AQTijY4",
  "key3": "5ZDVZVeGcarHU6x5hFrxq5bV3B4wwndTWJnaLbQgMFgLq2Qd3AmWjYQz71U3WVWXcdkCmBSu6SGwB1t5ZgVa5yVR",
  "key4": "5beJH57ueRXMT4PgnK6wC8F3eBdrEn1p6JdEhgmLjG7f4KCvMLGztDUCt64Ye1k9P1kLkDLHKGJAtGMxg5d5m8Fc",
  "key5": "5PgkdmpePviCfAYJSP61sAda9uY2ZQXnPsryExoKa3Egvu1nuhgbkcwBv217W2qre1jcsDgi84PCJiD8YYEWtp7h",
  "key6": "5qYvnJt79o7gy3ygug9FssfwaBnPKyksFfxqBpWbhM79JjjSRpE1pqqQwL7Z8wpYEtKWbpXv2UCVmEgPX1tEanQj",
  "key7": "4ZH1MchdZ7UUpnbUpFLH3WA5U2eSkfdCF7UfhDSnkKzMqdaoQznYRfEhHyDKYEUR4kdDyvfQgvcYadB6fhQkgzyU",
  "key8": "47iJeaS7J2asQQz5WGX1PJXP9Vup8ctmv6sBiyqfqdsxsMuVipzgG9QgZvggE42LHAQbaCdheYRj2YmidjTDfaDd",
  "key9": "LBb7qKJ4TZya7sNHE8FHnL6h6segqXy2AR6q6WokfujmE3pU9kj8H82LByGBWWrJQcQzDsmUzDYUEA7YSTcbh2w",
  "key10": "2pTh4vmExNovc7Y6ryeoieE8HfDTBZMcnVneGcv7h2ygvmX4FWnT7uFuVwveopXgrRDXLxaoxMqsNsCJqUv7yN24",
  "key11": "2dWBjMZrmygjCANpuvCYeCFa3ff6kUhbqDC6s3Ev3JXA95yM1fbFCyBYMXffGv5KLFGYvJLMSrnXf9zLxuCyrpQ3",
  "key12": "578PFQuaQUD414YBk8b7KxJyQRXTYBJvzmWpcBe4m5Tc9ifwnu5d89nGGspsTDYQVyUEkwxtfwmUZ3HeavHHx3UD",
  "key13": "2HvsfpSY5B5PiHkTkNF6Ma8vfkQfNnQuKej4AEcuctK4ypLrqSKHvyXJUuFYVWRneyEhgd6btjZEDU8fdSdH1PcY",
  "key14": "5bVziaRA9NgZnL38LHQb16y6SnnUTi24kKZXY3c7rVUip7qYMfoQrHFTHrnKJzFyYWJiYWyyQZJwDLXj19DbdJuS",
  "key15": "d1HjTxb2nz6tyA1cBW6bq6HH2iMrhVgDbHGgiNKRWeCin8euqfCKnjZ6aSf1nkaWEW4sMsWwNFVZUY8ip9ncU9v",
  "key16": "3CdNbmiZfx8WErA75UcfCNRkugpDFhsMJYTRiiT6HW3WxEte6ffTgz2wVSSFMqLMVzXanpn9kwXK6BjnMX6N6YLy",
  "key17": "3kt656YibtjLh6yfSkEAwt6Nusxih3h79usDuBZK7MxHaU8VkMHp6BWWfbupCk8fDwJkTmD3dg68kHvZyYkWdDWS",
  "key18": "4c8uzFs4cLuZHsdCiyLJBZtZcomuVWMUwC1Kbu9HgvU4xU3NdE8SCeuz4cfpXfZZhfzHxFA9dCMR2Gqar1iw7Jeq",
  "key19": "34N7cRarJHhe7AHtS6d5iPYikShidjCLaLCzD8KJA6h47YsoYx9KpQqDAP4rPVe2A5VyAyJ6596cxHQdEG7Ai5uw",
  "key20": "3wsfehEicCQFSCLv27oZv7rgXBRV3G3c9bkGdeEukMpMJwdTwi73C9x9DojLusc4g5SfXYwYJXs6fYXH4WFQa2Fk",
  "key21": "4msehmFLd7bdpK1dgkRY4yvZ9xdTMpuECD275o9YA6YwzP2ws6WfNpShJfLCzapSGwoBzE625jJF2hayfZxssb78",
  "key22": "5yY1ZbAm85HnCZQHxKMz6uoo4h5MgR6YtvV6MQ92PKQ42HMrhwBfT5zD4QNVCzP9wXkvxjSCfiehgegNJSozFFNn",
  "key23": "4upsXwS1iTjJZ7svdAHJXQvoNoKwas3VPAZhxYNZK9d491wDcrX6k5fHxQPBRAkbd1M6wgJFexdVwJChDHW2HW6z",
  "key24": "37TTcukbcm5eYEAAw3MWoY9UHurhzSn3niao8ny6Gwtmi5gdskq33k1wu2mg3PW7Q1tvofgx6x8U5Dn4rc2eDNkH",
  "key25": "XSAw9UvxkweJDg1UA2H5WNfZcML2NQuoxR7Bpawv9DcWu7u4tePvqPRiGK1SS6MKmX4s14aeqVxvZKCsoKZyQob",
  "key26": "5xjfbdZQ7Yz47s2aomzd7tigmpWbr1KzuKZAAHsePpfPsW27XuqsoJH2ErkuJdTWwkWffdKQvZf9qacVVuHS2zR",
  "key27": "3NDB9sLv3GaQnrpVx11KhCfv4ixDqsqpJ51Z75Q9KHVXJcSYeMvKG6XZEVt2wNTEhhiC3DXgyVN7KGyfGu21YqJ6",
  "key28": "5mZE4KGoDfMnQ6BFr7EkVwWrZapw6Cg8crQcP2ZiHZbpioEn7e8soepQnCAVsWKbdSLgixyJD7EGLzC7FZ5ZnFLC",
  "key29": "3swfxc6DSeozu1EeuXf4iiAHfpsDxXsX8HzoMqXV4aDfk88mThdycest8VGcGdHnxhr3kLhEHVvPgztTJvzSGUKT",
  "key30": "5KeSgT3Ky3RLSAFoGzT4jfEAhXPSvyZADcH2AsxdwzFq84YNpQRd72QB88FfmAUAHWM9cyim512Koeu8bprR9rjn",
  "key31": "336KfJxmCYebTxB6iGQJFYSiJhvMrwwopvUzxum5Jd5teud316vRUAreKGyCDSx2Gv3YjgEQioM2KiR8hAUGa7zx",
  "key32": "a9e9CmW7kuTbsQF5QRQgkb2vtDne8M4XLV1o9hgveBHicJesxC6sUoozGR5fAaobWyP5jbmVY5WLPyoRTU6EyrF",
  "key33": "2MbQtymcQyumkRsidMqMVvq5gzAsLeiYLGch1VgYg5kpX8TfFpBCKrAbTJowncwjvzadJSj3keBRAypXkSLfcLt8",
  "key34": "4B7Ee6v5gKF3iSn46rjhzcBLn8JzUqgsRt887MLg8imb1mo4z1SCAToc9kTySUdWeL4FQhxdaNKyvD8cjUz8qtPx",
  "key35": "kfup31CttidchNqL4GGJeC8mE56FPvFFz9o8jc4CxYVrFHgaZD2TdAQU2ZcuYoU7pgmwL8TiTYuZEdC3LH5hMUc",
  "key36": "4ZiGT3LLqL8tBWXxTGcLVUsWUwgpJUxakpvkH3Tn3ER1PYRwUi2Eyy8G4db9hZdrGAjM19Q8WuCrxWv7W8cxaDRT",
  "key37": "47u8Eaw8sy4KVtyPc4DextXrk3GSpAjvZmn9NJPuTqPdoBScwPymPscNdtGQhRDArdzyy6JBR8ftFEeTD5wSVjeg",
  "key38": "2mqAwjspo6AHRKG3xk8B9JpP2a7TwXNCiDonA9SQz47pPRx8TkaCJS9nTqzXpKvkRukbTs4WMUtkEK2pw8B9Nft2",
  "key39": "49pwh9QytnnDcfFq5K2hsHj3mR4WbqqxyXfRRngWBTTp7YdMwSdZDcFHjrLhQEd7o41gqtEYmUu4RM3BAtZR5dEc",
  "key40": "2r6MtaZBc1HTmnjVy4RVJJP1UvjPAKwxk86qN1mbhpZrz8E9CsS9TMLjexQk7FE7KPWzjFkyWKdSm7PBZ56etJsW",
  "key41": "3rZaSWyN2r7pPFCRLkhuUepPry3e26X6X1WhBeRNErWQnXarHcsACnWB2jgZYR4RZbv4Zu19Xx9cXVhvVbxx2b7n",
  "key42": "4Mj4q3uvib29yxas5HnKjtPjA7pVwxjB9VXoXgyCvoBT4VycF2yZbMTV6AGo72KCgXcXvVyY89kWcnUXUxA9yqAx",
  "key43": "s47FzfgtCAX9VxRtAHNBB31MNxiXv54592S3UNtVhM7Ff3xRMDdxeZRAMeWSAFfn9xF7ZPhTGwe2ZqaKJB6Phuo",
  "key44": "5DNdFNDbF7s1mmm4zfLuWQ6RSoZQ91z9ttvrLF8qRjuj28EKayGSKcrHBd8cfNaHHNip1uMtvn2ZZiFu6pk8KKzk",
  "key45": "zK148JMN4PfgCUWumwPnUh5sFuFZAmkxQTHthTeoCr36ZTSKxouVeUhsZXC2NRLC58f7YfxENC9VWNZNwZPtUfG",
  "key46": "2Ve5yvBzCddm6AzvsvTcMSHk2fHuf6G9vnx5vu7GwKV5Y5mEA8QkeJonJe5XLGkX3gLto6S75UFwAFe6QuvWXMHU"
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
