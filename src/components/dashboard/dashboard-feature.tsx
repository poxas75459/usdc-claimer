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
    "4A8dUtTnv3iobotbMx3z6QnpP31YKwEhhnN69tUitiYhJzXm8k3i7ZcHrCuCy2QDSwQLbUh3NnoLgCJyJ3vNNwhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q732ZjB176uqZi6EDd1D5o41CV4cSHoh5BPd697GziCQPEqzP3vUXZmkfkapwkJaHcssKFBAx1FrEUEePNvqChM",
  "key1": "5uqQmGd5iduNdLzhb2etEkraP8BDtQf8n1tqfZykqEcBUTqPAEkkUszyVJ9TSwsNag2nmW9G2RFLmzW9pHGSGH1u",
  "key2": "4UKozQnMobupABnnMJjpfaAHfMJbt5LicBHybBFWRBxjYtAzfyMmAfbwiQkC8Gcbk9zJECdC72zMkxsrq3uDc7CR",
  "key3": "yxyfp9eZYx9Ct48227HmzQQWrKcBno86HZ25nnXfespFFwjowyhFL99GxuWkPKkexCcGR2cD4e6iqWCmF5tNAk5",
  "key4": "5xgB3VNBqZZomN79roxyFvpSMvvcMNnvxJYSUBZJTzPt9UWXrvvQjJGLjc1Ya9mBMU8uBxAWShaH5pRU7H7KLZjJ",
  "key5": "4ESu11B5kEurbHCdkrom1eTcvr91PYFgcU9Fv68NUV7XdHPxZYatjhUCkmWn97Yx8eAVsB6BNnaZeYsRR1Eob9xL",
  "key6": "uv3mqikSJF1rKZGjn8qDAJkpH6cnajjN8zQ5Hz42uCvpQudz37e9wsJugfzSCkYpFa35iADPWGGw6ixtNe3pbrQ",
  "key7": "3v4BSmnvnEVG6zWJhHZpm9ics2VXJ29a7d1LpHdyAVCr49gMyZ6kwc2Q77Vthc84KUWrFkbhWiV6Sfoi9ZPUmS81",
  "key8": "23h2z3FeM1VAG3TUVVvDTXzhbe7167B7JLNh1sy632Bkzd8Nog4GHrbkZ4zzNtG99m5EpBUEg6mbJrhiwVVdv94q",
  "key9": "3gFQXuWmL7TdBp2NVpbVzmV7BimyJ6vpwciWHxhagbATvTGgrh27635TBd3YCTeADiqUX4entxc5mhc97nCwRsth",
  "key10": "2i94WVR7Thbd8fJvmijyJHyUhYizXMxTfL3JdbR3NjGnpfcePz1yhdU58bTdMsDszCwcLievqbejorfMa2UqBFCq",
  "key11": "3MavYNndQA5P14Lh68xsXhvZcMCViCax5RMzWoECRWtHfdRquAmqZ7sXx2cS4TKHAdffaFVFBLgi3KAvJo4X8Z4U",
  "key12": "3ZsdcCphURYGtUJqS91UW5Z97VZJ55iEMSEXhGyiGKYNeaqAHdJrXcq1Qi343dQqA35AWxBfZCoU8VbdWkNQ5Bhu",
  "key13": "2cbFhw7prRXd36uhj5uKU4uQJPbUbyA153g1Kyk1YK1VChygUUABJEXcjcFuGcESAWCbbcDzaeATcxTJQFxgi8zC",
  "key14": "4qezVu9bw5GnhZHifkCj2HUgWExkHn3iHdtjqHim3zwpntgwa8o4cEshqUDfLu3MCwTeYY1aw8fpnRZ1mrnB2FLS",
  "key15": "4kYtQ9s1tp6zazsbRgMGwtHdsV4AcQv5rqDvFE8V7uhTPZa4gTNcka8NMZhT9id9gin8st5dUD5BfYNL4eUuRr2x",
  "key16": "FcR39b2tBZASCRtPKNNqtKQMJ3CgJeEvvBRFAGMMTYVFPzBi5gvv9G488NbCrZMx47EuPtVkyEdedWcbdkpjVep",
  "key17": "3a4yafqBVy2uGaqKmQbDMM9L1a3gyTf6ZDqznKNB7K1Ahq2W32wjuFpKBX4EsS2rtsX2if18NVreUXDhyNwJVa1K",
  "key18": "51TWHAJUJMyrAZ8pUFtTqXAwi4GkUu612wdqqL2HpRw48QxUbzGpKMCJZq32tR1W8J4SpwYaGvDibUim9cnyeVd4",
  "key19": "2THntSS3GBX2ePw3fYWw8mfNMg7EHAXufPV9BEj5T69MBRYDBHWTyoXrGuxFxfuNhj74kzynePAqMTtn9BFx5ajC",
  "key20": "PTzcTAbEWRFZg2uDKZYGCHdBJzC8i3TK8YtnfCWNA36TW3T7BPjUFiiVqoyyUsPsARMnd85d2J2uyC14rvosCYB",
  "key21": "5svSSTE3WrTkw2BfNknsEQ2sH65psUWqJeX1oZjk6hh7F7XNTa5WjUQaGew5z3Evtd89TPzcaPBzG4RKu9f1o9Ra",
  "key22": "3Dke6W3gngkSzRQztUTwDv9owA8TSmKpXeJcAnw3cKb7Y1EtcL3VUzPME62TKMrcUzhC7qG63dpctEerNFHP16gs",
  "key23": "5WTdEacPDBmxXQgnG7jw8kA8EeAmds5Wew4TRK18jREubqk9p3UCRa5LjJJaBmuNzUduphZDRJRUydJz4cQcvGws",
  "key24": "2JmZanj3Mn46a2f99GjJauSxQL2JAarK7qqEXBKXZH99kXAfUCYdRJnQx86MVeckXJkS4fLBDkeqv1WK7DMM2aSn",
  "key25": "5FY7Dn8W5y5LExExSva7GTp4zHmEHmRR2NvKen693D51aQQXs5SYZV58Tu7TyX2hKRbPNP5dNcPqjsMtPfRAD6j1",
  "key26": "4TgktNUAmwGeLjKgmy2sGXfDFSE6E1gYkKCjFhgHt8VEStPxMUKL3HAbjBVjgaY6EPDTRjiCYKgNDHPuZfUWkuwq",
  "key27": "jAcqz2xSV95UTw1kaoN2A16Br3y5zZskvPwqN8JaWX5kCmZQybC5pg4rKaiJz1tGKCDUeaY3v2dxJjyaUtKHspQ",
  "key28": "26QRRC55dsvcWjUU1nHhb632T8bQfKxaSSADqPy14uSWSKLhXzQfa8Qcws4N8Tc9bdZagvKPAqbzMnvdEEPypxsE",
  "key29": "2oXWWuB799cX829GX1SbcMLxhvkQLYYRtgaf3Q9qJfPoioGp6L8g87N3QX9HamXMBVi5Lydt8PSVa534kqefF9jE",
  "key30": "54Jic6fRQLRDscEY5frsowRAeKPkVhZoDD1TJc6qeKfzcS3DZHu3GQXweJQEQeUeh8CpCKrhSJpffByht4joiQkL",
  "key31": "5N7vpcUMeDGswh4ssJ9uqondxiGakvUzgJEvUyRgcwyKZSDgFvdfQPcb833YE6J1oK64gxEgPfkMcyLaeAJ1W84T",
  "key32": "3tvQn3myQi6eoVdiTKXWwxxDMDVygKhRR7wbyPKEpUK2A2qaTxutcvAijh4Zpt9Q3xK3JMa7T49EUdMzXnQCWoaQ",
  "key33": "5V21r9eaLGmdMgSsheZm2VFpXiQReS4MeC7ecbD9nijSzHEXznBRYFciDyE8mbAkDVR2yeBKjfoDmWyhrZEJXL5K",
  "key34": "2tr99kH6k6LhG4V7HuBPVX6WiuHx4cQdpoEDf12VRZzTKMxKqCpMVyZLBJ3Uhp4pGe3i5Bz8TdiVVd7gRq1xkrUY"
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
