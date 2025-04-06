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
    "3sUDyHQm7w8KvbrNptry64XDHD8Q41RXUwf2oDR9hAdafzKSVVXREqnqacvHPpzRRczRtCQpvspwXr8ytjQmncBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yqWK1ssUVV9VC1ecJDsrpm6XjtEUTcKdzUcsLoc3uy2vavYX6ayf8t9UZjGTTGF5dKD4iMSMcocYsxtLfv99Tru",
  "key1": "2E8opyzTYjVjBWQM6HbRQPobw9QayEahuwhgp8DsmaBbsemfVVs8NCoZk1owcRvim4DxAR2ysSvB4onshk6EZ8g",
  "key2": "4JfawTkS1wY1oEYHLKCNFBvrcXwXiPbojCDZcd3YCRVP5EdiTSUUJs8BpYMhe6YB87o7NL9qi8n97tyBy7xcMR4h",
  "key3": "2Du6SJLAqD2CLsb4ZxZUT7TtLBT1pADz4CLAxqd3srWCYTCfK52nuCNYd4ir7dnLfTZZG7SCnqpFf7hPsYmwnqXj",
  "key4": "5mycJ7hLhB5h1n1nNU8ioU1Gvvhmm6yD6gNMMqTqqz8JKxe8Nt39nNBY4cb7Jk5LfaUgs5D7F7gRHEVGQ9XHRGv3",
  "key5": "dw1cJxxTDHw5Vm7H5gmPZ9YNMFkzMtYhD5zkhdtHNNFzC5H2NtbvLeHjedEW4vGRVdKwhH97fsrhp7kAKpsnkKB",
  "key6": "2gpucrJ7G8WbvdFhuLbgsnodmj43ZA5sH6Zp9snXHbFmhNXa9EtidonyDqJqnPb3mbhCcQrJzvk4d7xh9QYuSFKq",
  "key7": "2KThMzyCGVsceS93rhUApyResRWrKB4oHCbj7XuAEqL4CF7LKYUszPGQgrRJy7XC2f5Hfh7WtobdDaijpa3WYP14",
  "key8": "42SjNMrETWg8d4LBwJ1DVYijp4SDabDk7qaCdBdUpjVCpG37jM65TU366HN8LnxkQw9TC8ANdn9sn1SuUbgKD2N4",
  "key9": "6yZ5yXhsqgGoaWRj4c9HCiJnsSoaaKKmoswpZpqa9eBgPg7Gvcw1DzeaG11H91RtP25EJ6ndPNhxJ8k3JppHWdk",
  "key10": "3o6nkCvrfdunZwCMrE5ghsz2UYXg6LgZXp2KGTxzKQWGjEUEdVBtsdVigEiRmNZ3Yn4YoNNJhqEML8aApzuHSQqo",
  "key11": "34D17rbUZ9bf49hcRHyEphLAVWpq5sJKXEvTRFqqiRks9zpKY49uAhx5cadE48dGUEhdottqy6CmFknTRiXbA1dU",
  "key12": "48NFjGm84xfdFk4ArMCFR7iDSNWebxvdGkQLrwHfofp9yfJnrxDomP7h2zafwdgkLsNYazYojcqPi7nsRVbDq9HC",
  "key13": "4GYyXazMHymV2n4v1WfnvnHd6CRMyBe1B59wBjZaE4wcNubqxyDqWyGiPCR3zYVkP52LQ57rPnxSzQ92HEt4K278",
  "key14": "59rEBUuWF7gTVCHMJFx3YZYokV4omAyjYsX1vBJzF1dAhKpYVbUGMM47dLvgXN8JreCG56cSr3FLbE615mMnFUG2",
  "key15": "4wHsGkWVMyATtaATpizTYWCAVW5Kyzz4aVTgEVStwP8riBhMumoYw2zLYtgPuFfALsXtKMysdsZJ6usc8BxYEEXF",
  "key16": "5h44j9nwGfUntkfmpTn7qjFTjH8Ar8vNm9eduA8hzzF199nHL3KxgMgMdYvnxfDKw1rieTvvcUZ9Vwk4UnKFvQhy",
  "key17": "3fW37eLEymaSQLbQa4GhYcPzccAHxaHidUk3kohYMhbX7ZEYuJRSHumFkwuWipKNtBLJtsWBRMavHzMPrj2AU6HX",
  "key18": "2NGz2pGVfVTNYbHWNBsDjMZpgoKQLuyQK4mBpzCcdUvPMQsGqYCP6LHs1dYLVHMfAJqAoV6xSJ1P5PSTXCHNowL1",
  "key19": "58TmBSPnZVYwRndcAyKeMc8Vh4u3bQZYkcxwe53esHSxRyJ5b7Mz2q2azfw4dGdkNYRTpCWmyepquDJ17ebvSzJp",
  "key20": "2HF2GAcU4NQJ6N1fq6kunQW5Yx1VuCoNw81JwpbJpWiePejncnXzwy9KYQpYNdqUYWvWMxBGphdb64vZENoJi3NS",
  "key21": "5uzXaqyrzNA8hB2dJxr38UJM3ecn6ipuFWbLwAwpg2Dc4vmZKgEK6hivrvc5uKN7k7nXSiMLBEhET5ffBZKk3f7g",
  "key22": "bu4JoUX6ZY1TWmLZjNTdyR4X3Fy8zL5SGZqUBo5P2pKbyaCSZqny7bHkhERCQYXc4HVEESaSR5nwkDUJC1tFErp",
  "key23": "i5jVXh5ZizGTxiBzbE8rdRVktvbwuxqBnnY2iCJkWEuYuR4vGv8kDeYP3X7qzHHQEug5n9JqJbLk1nWb8qtNxjc",
  "key24": "7eWTTKK2avR1mfZUCanDtP3QYgJygVTcdRzkJFsXTKdEWGF9R7aJDSHonHBqGH34SiiYrpDXhtF4CvWYhpbiCft",
  "key25": "2nLsgYfZvKxSc3AtSSjxkX5apjQzZndPXEGGBc6vF5K4QzZzsYMsWJM49QDRjTdL2qoc1aLRG9fvxcxNNfxek4ps",
  "key26": "5yueSwGbn9d3um7stF4uvt1wXCYJNfaLWyixRmBu9kFq2XBVyn35u6K3FPAksVvuj9YrThy5wEKRFsqLCQNibMHf",
  "key27": "3EfrB9a8VeoqvJSgJrwpzTgG6UbkVGwp1KDUPvxzjRbLuMzTA565Y4x9ngBhuSvF18N4MbS6hDJ3Buwu9a6uC64Q",
  "key28": "4eG2Z5gPAbiMoeR3SaawKoRCQMb9siWbo29prXLCWCoyfridV2bVgY3YCWx5KE3NUBnfoLmuUabicV3D2fNA7FAG",
  "key29": "59fKR4reCpGAa32ahNe2wztgey4561GgcycdKrmBRaPh2gN5LBrbcLT6kNVAcDNwE1iiqkRZWRkWrKcBtVWWFAQV",
  "key30": "2NzHMi5BfVNPqJW1S614zLugdqqUKLEdHjn9AxxQc4WGScb9aF8n99pXqg6hJfaA8ktRVVLQtjiGchDufPLFKPHg",
  "key31": "4w7BwmgNvN9hEfqi89oBWsEKxVK17TT571t2u5NefeK2BoPLFhMujZDN19FsUz4DryLsGMjLY8QPukaUcKHTEK1c"
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
