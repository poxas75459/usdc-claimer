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
    "3Qj8TiwuQafQmoHTc5Gohptn9Zy5fT4oxqiRpVYadB2Q9PeKYgYnyMVzrdyQ6fe3EKA7NNkRG6WYZxfhKQ1RGtJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52AyTKiEun8ndTjKnj8c4HCHRtMVKKg6gRzaR5UCc7eNBbH5Ej4PngsVRDHimLz24RxjJzsVsUDYMm8rpsBxNkWu",
  "key1": "aTGP4TFVMndaMhX9e9Ug2JSd5Ez8umqxYBaW9pS7SFDhtqVcPy8r4vVSvXXWjmVMvquVobPjSa3W3hV4oHejomr",
  "key2": "2NhyRURmTDsBJtMcniDrLHoYWVdcuLE36Fi98Uji4s5do8n9SbYRGHSRdm68iTNdxzPBseMrMBJsyhVY57UbzzDw",
  "key3": "5UyU3NTkEXfppYKdSbsR8CTgfBGWyfxkjd7ty6BhVh7XEzakypKjARkoixafsF2E6PTrA4dxLz8h9MWNu3sBUoAS",
  "key4": "3XXcCU8DRjfzERMQwu1uQzMRegH1rkcoWFAyafEMvz5VrETdLqSKMN6pQA9ofWTmbRPr6NS4r6ojm77DMHC62FPp",
  "key5": "WfFUerGTFzAVgpA7FQR3sezFYn1dU7cH1BBLCouZ7wkoYbVDcDtmtFG8WEzUGSYqnmskdC8upPdHSUS4mVxzE9h",
  "key6": "4SFekahLpLbSPtJZmAxE6ewVWjK5HsxfwVkym6obBv1TakqUHZrbN2Mnyh4h6mcTHqjdmZhYCws8ZSvU3t4R8LwX",
  "key7": "2o2zkxT1T1fzXSnGDhVgHGa5d1cFJtvdMKyhZh4jtqdwk5dFMUc7ajBkK3ogurGxdHHVDSgXSaLG3QFJd7ihuM3o",
  "key8": "4ZakN3zArPtqTU9KcPCX1UkTQnWFML2qu25ENsG9noun7uPZkDZx8Gw8M554eSKMdDEP1KnWb9kyXRmAQ53kzaCC",
  "key9": "4bKc5iU6DPEDyGKTgPdPq43rMqUBQXcSE2m7nXRWpW6yGEB3rKgffvf3WAiFc2PtyiyMEbdrZM4D9qVLY4BWBQC2",
  "key10": "5MyiCvcCf5DNj1wCHuuUifzbbCAxwjuwXuH6pbBngLavgKMepnURwkM5LH464h5mP1K7jVsA7YEeJ59p1juKzXpJ",
  "key11": "2AsYidf4X6RdCUWTYK8B5fmGLg91Fk7eUs7uEsBBCeBhShRropdcsSxc7hYkYFSUwSPbuzpYiNESHdMQi8CBdqHA",
  "key12": "4Byb5hPymmGUpChsFEqKAzv8WKPVsrSCR95soMNwubQ2zucfZjeTe7Z3BEBFs5Luiik5kfmudEQzxbTn3FiPmhU9",
  "key13": "2etcU5aCpd7VKcuwmZEb72ioBUE8dHZvYzZDAmLQ78odM67CvXVHrQ6jicapjcPC9ywLG91a6wczLsZtQ5YoDrTn",
  "key14": "5r856ifEjwGSgMpcEWQP9z7UnQornuyYT7YsSV8Exe7yRJDnxNvttwoFdnnNriY7azuE9nQXPkhry3KU56jYSTma",
  "key15": "37xuEDdFTgC85Dui6r6uE2K9P83wRLtVi9nwrPpo3XUGaf9K4LkGeJz2siXm4WTNf4U4CmM4hLPYNdEWDmLeygde",
  "key16": "CgGnapWVvCRDGYSVRWbHVd4tFh9h8ZfpvnV6JTotTK1k6dUfMMa9rzEXDX6EjJBta4D6KEqtxPnHe4WMGChUD7v",
  "key17": "643TjDQZ1wkmhN3NBTwT1dk9hN7iT4JyWDfK2Xa24aDVqWhYdjpAgVjBuy6mNP2EZ3FcHf7oqgdY41fXsuv2L3WR",
  "key18": "31fp5DXXxHXWpxcYGhHe4BWZEU9YnR966KgKJkLsA2hWzRyGcMRTt6RL4NQAoMCSCGuPGJZTs4qRWv8ajWyzcbkQ",
  "key19": "s8HYKWPwGqPMjzAhWNRtCDaDS7EwpKew5aQko6UUYRw5kxpkfCAkgikWyG3jAViFgxb47z7Egv1jcxPfgtoaYpq",
  "key20": "5WNPj22VJbngC8mrjGGYPEfEArAgXVm1MMa2Txoc5k5Qnf2Y3b7LHGX9LJUiwiUk37aFNe9mM4QNLDPXFFivUqua",
  "key21": "3cu1eyHjJ8DtAWTF64zQJDp9hwpzdVKfUAzrURnta5mBT3GY2qXofs8YUgTBrRPktQa1jByNyZAu5LaaMYGrnmad",
  "key22": "iDcfqwrCPdy4PXDU5r87tnuoCDtDQoRFKhc7Ks6K6hSjjBhPAgFgDtNFyQAn55drLVwAnUHT1LHH4PAUMpH8SVF",
  "key23": "5wSCnZDcjURAFi3SR9apyKv92wgLG2wbfXku6rMTX1qnUP4tt3PCmMb9P4t2U3sbh7r4xunnSbqLNR1DV6XuD3ac",
  "key24": "4se4QQ2qRiHQbTGnDuJ2ckveeDfjmumHa8MzzRZjg7BTbPRiy6Sq4kfXaZnDNrNaQ5qWicyWC3aVLdv9n8khoWZG",
  "key25": "3xGx8SSKqzp2P8nwLFvrintgz8YuromyCKa7FBYyUpgYkBccYpwSsKfpAKNHsDbnLKzmgerH7Bv2RDKqYggWgHS4",
  "key26": "3f524xLKWWLyZDruT6zz8jjWVkVuNkGte2wSfTKwXypP2AGoWmaCtJpErb6tGp5J5o6eh6CvXqu8oyrNkeceDYvB",
  "key27": "BcZxyVcrqmBv8KMbPwaUmAaWeyuEDgYDjxycLx6E3KL9rj8Xu4vZ2ZGgqNDNjF8qbiQmMJKuz3Byj2s4tq4cfFk"
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
