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
    "2Q3b81AZFbpcVDHdV5WQ4xBfBQGnzPVPsHBwUJTAXGtd8KsbuyCneZsfZ4NdpYCMExNR9L9TshTCuv8Gbm8wzxVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yRGpu9XK5pS7aRV89MN6Pp68PYcqw4siydqr4S6gNNae6VtM3RRSg97RW5vHe4wfg5ZUyc2HjdmkteSJ7tXD5HQ",
  "key1": "2nBmVerneK5EipKDT11L3Ax48Uoe8RTktfUyquz91Hxx2je7MmcT6fDihK3pLoXRK9prBmM1Wk8oFWmrZ213PLXs",
  "key2": "5cUTKQRBKXJmKSnaEnUpj9ip5ZQqd7x3D3vgn2ZrfBV6RSfxVMScRDokRTNQFhVcMTKG7djjbeRtp2dJT5yTMUV8",
  "key3": "62HknYZsp8uipcRnDPH21uSSoMGeHCQyHRyNSAPrbEcPjh4Q1T7Q6pjE6tvdwfAW1PXkH2KaoBQSYRSeVD9uCeW",
  "key4": "d9qJ6MKbFanCtBnwaZq7xfsCEFb57cREixVkt5jdn918AFtSBHAqHAWqVovbJPvxhdorshCGykZLNyWPnvXzbju",
  "key5": "5vckVPPPjWZDFffZYNF6dwMZc4u4SPLXwqZPzD23qhcR8Vd3z2q4TWDk9iY4zgabEhf617EugAdcgFeCAUnyVxCS",
  "key6": "5nvCaXAKS9KeZy2U8CFgefgBZRTR4iwrTur7XJZoPMppBx6Ym6Ec15qdEbc2ZgqLWFwzMH5bZwmzTQ4dz9EmFPmH",
  "key7": "2UGnpjLKTp9fswrYRbev37qhLU1opnH5y9eeWqsVRZ6jvoZE6cRs2ZPuiCYAAfj4qETW6nCw34HXSAwayDMPCrk9",
  "key8": "4z281QjCjqgACErzkK4nWZTLDbHDqtniEPvuV5zhprKA1R8AUuXtM9t7zBNNLkK8PPZMsGRyaod61JmcERrLG1cE",
  "key9": "9D1xK11Dh7yFj3BL427TRJ8gcBSJHQ9R27PLSm3ZsAaMAon1zcEqxq8gKHdFHxzDdj5NwMhikSmM6dtJ2czCA16",
  "key10": "33aNSijHckDfEv26DRSJhTf3XnKkF9VjYYdZZ76KeSJ7GtXSdXqM65dZmXXLxFaMsnzt3z53GHz4tLPQWLYthHwA",
  "key11": "5jBHh9Ed28ZDahk3FBK7LLDoZ8X3tZk9eY1TbnjDdgWQWn32vyZRQVabKubc29sAq3obtT8x6TYkQ1SnYMMjygsn",
  "key12": "2L7y93qWMJ933DBVX14M2JX2cUBEkzCeyaFgCLeCapvLKjUvxWcjyKxG1moNvmzybW4ZH3pFr4n1APpGMWPWWqmQ",
  "key13": "XyuuEV42kPnbfKDjATg1cZXLpbMqBRbhkEUtPH1fSY6KkYQPkG2UgWhym35EnaGrEstMXx8DuyKG65LWUNFq9Nr",
  "key14": "28XdPvWkjRAvP3SRa41MjP4kdoK6mRPzGmj3gJHePA8aN9T4fEdr2v7bYvKSjLwxkj3U3tSJ9dzGthKS551MRzh7",
  "key15": "4zgwJwcnunH5C9cRVx1nWVSHZQ3WtE7ydzSZoAUrb9Rn1tX8FDy9wpmuCzhwwxAWZJkHHPGCRze6eGmh5amiiyNy",
  "key16": "P7Jy9rfDsAc9k6egDL61VYNzPwPh6tXF2c5dNboYvJiW4UdGJp9qxQxEDMYRuGnCi96mEgo7dQSjFuEBdKPid6B",
  "key17": "4ZrwBHuisuuoBqk4MxHjaZEZcWBGQPEEApv3sUYeVdxuTDHrevEm7ar39gaL4w2eQY5RPxbHf2EU6Ra28v4r5EEi",
  "key18": "hdjGzhuwyYBkkUHxM5LFpxKWKXx15d2AKSrgDDmGrnTWgpepGyPTe2ncMzzaJw8TFhVYEFoFCr7L57KwEoTxYfy",
  "key19": "4QvJN2wWELTC7KQFLgkywmsEZskWXRSE3u1xoCTsHGewrzwp3nPX1jRp8NCpBRrgRhFXo4VsvBzTbSwg3fdjMgyt",
  "key20": "55VMkUM8HMFhBC4WqnTC3GJ35AFeoGKkZp8Jnu7vt8ooVENKiBZNkNdQ1UdN9g5o7Vt3tgi28gnJ8kXyRLh2sQ4z",
  "key21": "2ADMMqfraYCRsmhYD3LCkib6XSapv3T1mz9HynG3gjgjrNjtxLNZXp3F6w9K4MHJpQpktd7MW4QsQ7qPF1yixkMt",
  "key22": "26RiMibUJakyN7qrcKgs8bVooSWXWgTGaysPtLsb2ZaLcZNnYTJ2R1QafiVNuahXNJQSNTfxg6skakcmMGHHoXKq",
  "key23": "5kr9AsWgaNGA9MvyRD1CrQeC9ngnDeQf8WKRqRJUHqnvN5RVG59HmebqWMLxuTXxTCJk5XPGwqVHumQrGw9emPTS",
  "key24": "2KexS8cXuNLghFSb1fVrHvfRJudduVtK3hFt15pkPHTbnUjnBK7EyVry4W1mzk4sgN55npzr6kTkZs8QzmJbLNna",
  "key25": "28ayeAXr4URahEiJjxx2bkgyCPZPoZy95UyYNV6TFS7r7rAHgsprF7si3WbX1TtCDFwgfE1LQqBdswzvAXsoZu3B",
  "key26": "T4YmxvYWH1GDsHxaFi2cUKf1KFa8VfTY9a8vG558nojTVMt5p6BroCGQ2qGrhcg5bjaQqRfwzqvghBVRCSzkcpd",
  "key27": "65JnZ1grsfAYUSHQk1BLyrPQddXghqPQnZBiVUNb6srY651DMsuarPGcgKfxRcRAUnfM7PHmdx1HpMptocn3AYTT",
  "key28": "Hy6ggJvFYd3af7Bgn1fM9jd9VgrTGhaKTzT4XK9HgmiRa6a8R9B9VP4EXXz6W9UunQ4j7dLnFVFsSP5amrLBHkR",
  "key29": "5pwsvojw6KeLhRvEMnXJb87x4kLtptkYB1F2PWjvH99G3wQ5t4LKbfcBeV5kVygNoyhdSW6yPtnjVJ45urmWjQP8",
  "key30": "3WfmSFZMcWAe6oivPTHc5WqAjT9WugbN9ee91M6MKLDp4gdtzwTubBoFung5AQRt5DrL9hYfeypEmNZ1K7YteFnq",
  "key31": "3a22TsVN6NJrEwDQQWWCwVPgcTejaq4agQVEdKQDzncvgLd5MRZiPwVTNqJSkxchbcw1buf2vayGTzXYXJRQjMvE",
  "key32": "4aWvth4amsYupvzF38MhUwF9BwMGKFvp3X8XNhZHTtFpRg3AvUrHL88KF9dJNDimh72C4cADBnkERTsDjmT7jx4B",
  "key33": "5V9tD4RyvcfneKmeZRwZsPm9kxrhyQK23YzPsXXCCWeB4GU7Gmcu6kqDbFvBkZC3E1vHvfTnoRCx4TcoU9gsMsBu",
  "key34": "5YwJzhG9ZFjmZvktzHHCFeSDPnEqMJjywYPZp3NKYbjmxuThYaK9w6QMUiDuZSh4Hsg6B1DBHABXRKwZjh14YG7w",
  "key35": "h4FCbJ3JQPTWMQXKps2aA6GBnnG76Jhio68D7iiBQrp7mTRevRPCWsZ32CeNizEW7F4uMr7qMbfhr98w6VAV5rQ",
  "key36": "2oTLVcu6u1tEwSNFoeRBi8ETwiEq3ZgUzbaAbgFCR4u7iTkypxcwUrgh25LckxeaoJe4WxRaMZvaP2aMhh7AG7CW",
  "key37": "4Yhr8jWfUiSVjcmpSho8zfb9MqwNJqkNGuMHycUrnw8eGzHrbmTrV9BaB8F6QJ9WvdQPPAu14Ca2weqfEHiQnd3c",
  "key38": "5VqFuXjsFVsdKKExZPUXkatG5jM2jSmwEaZoNxDhoeJ21FyiYh4usid59Sf9r9YJnqkg5YQw229JmyBpKEdTpXjf",
  "key39": "4uDvWaMoamm8P3GA5BzggZfJKJu6nqCtnFRseMFfS38Bscji8SLoKWewHRAjPAUg4RwQw3bdR5uCjFZ56ZE5CcY8",
  "key40": "TjbVjjq6BrPgrj9rxm1wd8MJjbuzTNS55vquh5nzn2EfycYBp1n1N2PYf5meg8t3bbDYAXSJDsFFqMVMqHY3bgf",
  "key41": "pxRVxPst8UJV11SVK5fyQFx9CQZQzr5gUeccugjqamKR8ekMzPDmwpnXwL3Pekia6WWejCTL2tr7CxAZUhRmw41",
  "key42": "495VCnuZtML5kRJPy9zsDXADKkM7cPphx5oAXyUyWXy7Uw1MnGp7zzVCTBpYzJHTdWDUVLD9yWvUSB1rE1oJhCLh",
  "key43": "5ArYq8BU2ZfjiXR1aMFCLoJd13jDoY92grgvcy8VSEBAbTb5mM4poUCYao1sLT4KNnUeMgyuoRJh7bGtHKmRqxte",
  "key44": "5yDak7nnXCNLETzmW7FyKDpD5nCBQkcsufRU3ZarRh9b3nkw2fjCaez7bwspKUZTMCxW5V4uyu14atmrbFSL9WuW"
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
