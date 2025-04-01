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
    "8G5GucadYf7VXLhqvTZzyxLwqppwytvGqY6zX8UvVAJv8tb8pr54nETamoVALFCGpBBHwDPqGjtaWgNdLa3W1tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMgcWrs8qsQrtmmKmPf96SLArtTZJL5HCt8GWupgZZkSCQ4jX1BoohZ1HbmfCKJAjhu629hcyqvPR5DewzVs9AT",
  "key1": "SGNKhf4w26NVy4d6RerX5W7jybcjSR8uHe86vTPFAHrFh2Ac5FxsTvtaqsgrQAE6jtcsr4XDCqy7uSw4hxRKLLv",
  "key2": "51tyrhWdTc28mTeFry27eDawH99Jrhfqfrc9dcpMeAzh1fK3KCcMbcx8t4BatEnJ9rtn76NUoCU1kiMGAobCSxye",
  "key3": "oF9Jmx1qLPkTH5QBnYWHZYhpsSu8Pjt2TnkYkNo7HanKfC4HFViBFyju1QKTSJNgvJMeiktpmvZXLnBUdDr2PQa",
  "key4": "2zA9FyMSe766Q8VwxA7C939hbtmPfA5jHgRYGs3b9pohsvMRuCTWSyVNTcMk72cYWxm4E4iFanhZY8vJKtQjir6o",
  "key5": "5PnHiuVqsUH6xEXcSCBkvDCCoqrqEkpE83ybbus9W1EUBvQQ9Et6UgwCw1vzk8J7RQRnWwtZf31xWSPT7hbDfpSH",
  "key6": "2gerDeJEYt1o2ixXjQuoBDF8yx4D6Js7SPUg1S6bc29xcVq9yBBsrd3sPrwth1MEYLdKjzaxQTfWmiuTqrWQZMCN",
  "key7": "54rx3Q4TkLRZB6GWcj47ik49uYteb5tYiWx1FswcLcX255N8NujwftrL1tUMgPmWHwjouvEQBnqpYPFg2jPmfcX7",
  "key8": "Lyz4EPvtpCG6J87mFx2QbX2SmdeWrYHtrEvn8WAkSqQ1eGbxURwYq847URUUuJca9kJNJyncTNF8SHDshQPYEw6",
  "key9": "2mAMWN4TJMYXZWQVdE4anw3Zge52KHg2DWifa5q8yhYCgNQQGWh3z9oS2DBZv1sqG2CWVF95tUTUxm4C4TEgPTrn",
  "key10": "2TbvTWuvez77XcxH135JXNu7SfL8WMmFVRrG8tA8knLSGv93t1Qem7vJZJ73MNBXZYQGqsmJV6YHy6bhvatu76GK",
  "key11": "2x4i4BuVh1W9G1NBVBMbwzyGFaKFJQJ4U49cHH89y7e568bxKirz4L4u6pjVtz55jGkeBrSjFY5DFVbay41HpbGT",
  "key12": "5NxSvkYHo4UZHoUE4aCReVvmmfqKhGhAXsWoVogja11x8hDdHE7ydsiCPihtuJJGU6LdUURjSfZv4muwib9A4KRr",
  "key13": "2naEcXBkftBzHDX7rvw8h1UMtetsQtRrRYok9XHu3AoWAWKugpZFAUdGsE9d5b4RBkNbM5FQgrXsF7ceNTM2jp4i",
  "key14": "5AiJq596Hu3W6pcr4pP3QL7X8gta9WzybHnhC8hkgFa74uoF5V58dVSgeCcFVPnLAvSiLYqEPqSAcWVNRZv5Bgux",
  "key15": "ZinX9vT2Uw421reMhC1b2Ype6Pzg3dyojebxqAp2NddQJYY7Afj9k8Gpjnftmy28gZP8wZoFLc5ChTGGjJB3ot5",
  "key16": "5fCWQuEWYtZbk2RTJD3ggrFEMCW9vdhEB9117FqYeAzBbTezq24JtdY5564GLexHxMoyEnYE34rYod8SxRGUooG1",
  "key17": "4SWwV5xcxm34mAf9jZCvAwEW9APJUCGYEXssUs1NKrgaeKnCoZm2PUcXa3CWQ1ugoxdeqgLsLsG4xsyZ38ZzS72F",
  "key18": "57P1ArVKZvjVA5gGdCMk1sLJLkqpscbTM9FgHfa67Cc6YAqiNPjDC1khDk2KKDWCrAGsTfHYaMzfjYxjxWyXiM2v",
  "key19": "nUcmFd4cHoQ6MhqBxMJyeQYzoW6RnYhf9DtmwMDhn88LLjrcjTBrrA4Rw5Nfh35z6axNHa4vfSE6ma1HNod5Kc3",
  "key20": "2kreRnse8N3K33U51yzrcD1bq4hfU89np5CVECUUgsZJCjCFJRWS1HgpshQmPg9CqyL8BDKatX4GH7Z5ht2SdL7D",
  "key21": "2rEwY1KPegaA8t4MX2PvdTX2piwkR9ucCM9zqpZRFVZ1rbfunkwngoYoknMB8cTPopNjMMLXXbi6hxXrZg98MBbh",
  "key22": "4XCdiY1V52UqHRptcMTw3hdjkVvSungBSPGm1M7fXBh9STKGqm2NW6tjFnPmQaCn7LdQxwpu4DHxqSjpieTDUDwz",
  "key23": "2puo6rz7VHQdWnAsWEuwUMneb3B2C1FnvzXAPmtJapkgvfJNKYvHc1NK4Z364g9pPD5hz4FrqYeAu4WMJvHGgpw1",
  "key24": "4UD5RhRsKUvQChvXdEXvKo8gvXDQG1ghFbUDUn8Yqj6zqxb1HrMnvTAs1hHyPEVZJwFYRRpMfxsVvn7QMbgiSddM",
  "key25": "4nbBm8TFjnKPk4di4S8HnHFNFCW4xGApvd6tuhERxTJ4ow7QTYWuKWTJqWWhQD5bsixasPQddrSxbzHS2j6wxaxQ",
  "key26": "57YTa3ygffsb8MBXW9Sps96eqyic7pmEEBtbpD95iWu1t6Efoo7ySV73NkCs8WqfKwdZALjxc3JyTrwFtQ4QsV4m",
  "key27": "Yy9g9AcDXK2GZGaQjej2kQv7U6McPpRW7J3TecrszNa3GZ1MrQt8eYNj11NsG9aKpARQbA7EKCb7BbLzh6KUxGK",
  "key28": "25vq7sJ8EqKAL3Cuj3imrEQYZABV36Up4QUESUadLGniXPYgT99zFcAWj5oQEkkzibe3cpezYf1YJ1td75sDKNCi",
  "key29": "3gDzM98p1t2DHAmVjoKK51LbKd7vtD2KTubCKqMFr8kGop7WuyPz5gcqZjRHEAXpSMWmXrnimx1uSzyFWcaq4wdm",
  "key30": "2ttp72pVZBcfByebZgNoML3SXSCAW1RJBetA6vhLKXipUq53e8mxUQX7jsNj1TM5uqzJ3Xg2Tacuc1euzS9vn5jW",
  "key31": "Hryvmk7WyTEvGzRgkF1DzMMBh1Px7ui3sXReWzpFDgmfjMhwzRZntQ5tEdHSos9UuLCi18C8rVJ25wqYZDHVrXC",
  "key32": "5RJUyfQzVbSHRVfccA3WP3kKE51kdrNXb8t5N3FRPwoHydaHV4UcgYBmRXz33yxu2QzD5mS3sdfJWiJARwE2MhmY",
  "key33": "2MEzQHrKAU6Tnu9eqwurHDKkHqBqzeB7daSTgWim5Sjk324jBbLouiqdpBiLQkxiSJM1c1zAjfGC7QmUqQagRXJ2",
  "key34": "5ELmDUfd8NyTG55icSKsJb33rdbVt94cfwWyVkUajdevChwrXsBJwC7HAYTf7ygPCY8PaCGdVqkm1weNdsZMzLRo",
  "key35": "HBiTsUuFmFfHhRnKH8MYe4YFG4ZsMV3Uxnc9X4zFPfQ5N7qoY2TNgDfX7HZb1qaHZ9Yti8i7VY9xitpbaVJwR4Z"
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
