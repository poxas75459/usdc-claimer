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
    "JFniqoirq7ACqAtSPAoS3SMUAbeznFA1SLeqeSgAuEX3Z2kqKkB6m5Xt2FN89nhBoiASHmvgtaR4RfLgFobUqL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYijGazuVvdEShyN3WZ6inMT68zvkUis7w1rvJSViaXJZ2WwMbBERoKAQapqSPUf3cPdgWeEPNo75ZPocvVn1Yt",
  "key1": "cAzBo8WNyMUtvGWRQPtbCJynLTYun7dfKgTxWts8s156bN5x9KtAKspFGc9rNgoC2rgoVZD7MBsLiw8vuvSwd73",
  "key2": "5VTTiJCSqFdTxwgXVCoMKPcY1p2JtgpmP9EeWzRyhLAmuTeARKeHoanqv9RSMjrVEu2J3QZT5yq36adSrbEsRcwZ",
  "key3": "4UHjMiJzWXiZq6Asz5dewu7oEn4J2w37onx77cjfgczBJyKbwuKgkrVb4W9Yc3rMNUB9qeeJgetJsXCvW7C269Un",
  "key4": "1qsJ4HDNTNmriCyfohVfXAkavKUYnbKtVSNPfRMiAYtXtxy7GU43xqd6HF2uCaC13AnRdpqTCbsv2umNKJ6pZgT",
  "key5": "21ukA6ZLT5WMDHoZJoNeNALupHhJM5z1TmGmraSduTwhTSFAXExyDKJDhvosevyCV55z65dwNi95TkuTYQWk7Gd2",
  "key6": "4TsoHAGseKzT1mP9XTPRwNBTvAEimQESbrPoU7ix5N3Uaak9aATvegc64ZVSPuQ7LPSYXsePwiByLvVNqekdmrr6",
  "key7": "2GQw69Jf2FtSm2HgG5GLZZ7fbgBFrxJoizZL8txfNhoBwSUC4uUWgL8xK3EXECgCVPsMY8XRP3Dk8YsBJPRZCLa8",
  "key8": "J1b9iac2dZSNcZh41gr1Uhi8C1duF25XqnSKCjF8kJDocuzUZVUgWrPXKVVSuv3tvPr3diWrhWqurZFpUEfw81i",
  "key9": "PLMCW6X7h6YRsYQHsobftpMshg3RVmnr4AtGyxvkp2DVWPUAw9WZeawGpz9kJfhpiYJ1s4ZwxMDHcr79ggPKpd5",
  "key10": "2FFScfh51NUYp2NnrVsemhMXndYdFLMzis8qr2DhnHj3PvzsHDYZ5FTPv6DD8iTQ4sZYZuea8Q6xHcey9BhJTMEJ",
  "key11": "4ev8yvdUAKDtsmKnwKnZa93RmmdnwZ7bS7ngrxj4xE5NZT7SXGt9FW9BUYfxx8w7K8EUuimTEBcPLkyyBS4GNEii",
  "key12": "4rHySkzNEZfBz7SHskr6zxX9drbDZdESYK2cCH8TEwcS26KS76wsBcDoNvEjMWy6zjXre5RPeufQBMCutpo631c3",
  "key13": "5AB1bfEVdq76Fa9rA6of92YXZRKL9CgYCtcXqdkhb66xV97yJTQbxZAF2m76STCbDcVR6jrzyUp3eHVuyZkZXm76",
  "key14": "38Ph9HmBmF7Do7mW3f5TLan889Cp7oD5V3KVPeph5VwKqaScFMFA8PmKVrtNHbvE81ZSfRZLcWChgJMkwJKQChhs",
  "key15": "5ZN5BKdqe424fxbLUBwv4BJbuo7Lbt5GHK7ZVjFC36vXJ9B73d1Km2tKwbdVSCUfkB7yGp8Hvt7umFFNamZEbaqZ",
  "key16": "4efpDa8jCF6fsZ5RtszPTYCW3X3aHh22qQF9uR8NQrw4m9QXTsntVz134ARFeVFTqcXWX2d4efaNUwU727guGSNK",
  "key17": "3BfbJZCnsJ9cUbLE3wqtQqcApaF7zD3xuXTEsbNqteGqMTjDRWCFSfeqrsriX5nTLo32gm6np5XxuzwZTMLfFBuh",
  "key18": "42wgW3QjGizcTXFBFV4Efsw4EniiGbMGJz11k588YEDrVKgYgBLxgWVUb83HcTWt6Y2b3tafdyniUZzvYQUUGMRe",
  "key19": "3nZZu6SpmBgiPWrubDeN1TEScz8WEG5Cco3J57VdjxrEuhfN8iRUUMK8u3ChXb5tFEk8eDtLXtDccmCn7mfxCqSx",
  "key20": "4K35AvRmj25NjFTThhnK2guJSCJKvrFPbd6krAptCzixhTrxgewUqSXmk7y9emW3p1tLYoPBwHpi2DEWW4a748vP",
  "key21": "2q2aUbGPJ2iKCNJEVDq6N13Ye3UpUScinXFK6mQjmhdYoRiUunaForUXzrua5jjHdyEHGuqpjh6p6RC4CXYQzPQ6",
  "key22": "4qjYyya4YCmXz7gbpucCVDBfGEi7UT4cXFJ21Ey6uh1qnMUzPdf9VmsC1cEA9QjjkBnXkkxukkjr3Si8uQ7PKMmz",
  "key23": "tXU1Xe86g3UYp5gyoisthMQ6G41b8zmbsyc1yEPMFsy4mUEwAWfntCM6zXF9Ysf1F3cqDBc4LTRr8UKghbvrLbB",
  "key24": "5vpmfT95tgLcMQfsv3LZacHC6UTxyjF6ZQ7C5P2SXdsd9fazo7VdJCdpb9PtZGpP2zPV6zZpdgAhZNjTeUoLBm4T",
  "key25": "4jmmjVahoTUFF7RcYdnpGka4GhSNuA1cRatVayASo2EPCtkF88xBhJDNgV43DMNk8SJrW6BnrJMqq4yfVnqPnjX4",
  "key26": "5MQJcNUnw91i31fTPpLdwbHzEZvtKide9idpvcuzFGAzFRPYhNA8ePZFzgijv6hxCnF4DqV5UoPdSb2xWk8rTpiu",
  "key27": "ih7CLmtFTojHj6uwfYe5DytyfHBohdxxjasNzwsVAKag9HeBgzeUgR7KVncFAzX48qcjb7tCAS8TjrckgCic131",
  "key28": "4gFHPvPpD75crXmzRx2UFefqqVwUYVfgXviDqu66saZkPG2gYvCVYWpyC7hR9zf6iD3TQ8uQTZZ62xxFxXMYNYPx",
  "key29": "33DnX6Qg7M43P3mxsK9vyhoPKWktwcixLKJkd3vrgSuYomvdi5oppaGNBvaZCwrVeGZLEG3TURxTUVwZE3YHRCtM",
  "key30": "3qqtPaycehbtdLgrCSfVXzJjt4CREJxcvkSpji1jF7TffoVThB3emvJKSedbVYPvcx4QTxyah65g3nyH91A6yew6",
  "key31": "4gGT5iHSQkepJywfet8iVJyuebJokJXmmqRRLaz9v1WnGWPT4fMezsJEBsjKzS4Sy7h2Hv5uY9GjwcWhEandoUCj",
  "key32": "2ozjaCcVph5xcXVgYc5MBgDiiUEkaL2a9kkRhxKg7bcFzYXhYkFqXN7JpBX74c9wNvtoWxomrQ6SRNYUaZUmwgCo",
  "key33": "2pBzsj46H9kFbJg9YVdesexqBq8cDWGvSqu69MF8YeWaAyNMFMTXMA8Bpho8hjp2HywieDyj4wQDFGxCXia4Wd28",
  "key34": "3cdRweB4yRjhQBuQ5yy3CuYnCDCH2DGnFuUFYqBy65W1Mj6RjyLhsmsPQXcB3xSX8GiS5aPd9KhvgGmJweGnSje7",
  "key35": "WwQVasrovNnrRDd5ANzyT5koceUvtPPGFiFpbDNbS4U5kmfUUhNNJLk4CirMhYapAcwi5GN4CnYWveVjzBodWnM",
  "key36": "UMwYmGM3coWyg2r755bdpXJk726JZQoaxHM7BUv2dHyQy4xKtEdA5BQ9gRu4kXQoP8StzkuBZcAZtibspKmiwNz",
  "key37": "64hRKkNjCUnQfaZzYmX3WrWyrh3xqoDha9xcQHoo48Rq2aQpDnoJ2gkaQn2WwM7ybLgWZ78JTUFY4AG842i3hchA",
  "key38": "2nNuNjzJDQg5p5dQxmkYy6KdbyTJv5Fn4YvRHzhaP7cmucUSUAdKEKaypiRngUnUwHWkRnoqZtKWLn1bu2wMEP5M",
  "key39": "3uKSndqe2tjTnFD4LKtJrLaXpdttW7tzdZ3jKWYSGC9eeJfdeasFuNR4gAnZvKYqzLitsgotsGfiJCjWDk96Yj6z",
  "key40": "43mFBrA7ZeBWn6HVgiGGw6zy2P7NsUJw5Ate3Qi4YgmhV739ARXQKzsB7vxhP7Q3SdKqZtnoS9XoTzzDkfavqghR",
  "key41": "38P6YGkqgYxRGvCw9HD8eo9k2vmPmDnzxNxkXr4esNd918Sy7JGFurKjc3AeLkc3Sd1Kp4brajWpepyTuXApyFfR",
  "key42": "3n22ivDb3NDyJWwo2Vme8jMmmuybmAKTnqzW7AfR2GBfwv21Dp1LBYcr7XBu8DEeTQ3QbwitKJTMW3zqjxwwD7Pn",
  "key43": "4Qd1wwopT5FrDaXvynRXsWK96CnAK8Mpcb1EL1YMgzvqz5Nm5xQ5Ww9mDQsinNrw53zjaqaPQtgtegkcgxsRqit1"
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
