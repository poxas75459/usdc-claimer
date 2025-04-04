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
    "5uBNdrkUQbbDz9fzsWwXAAtNonEQGehHASRnXfk9FrTXxw1YJJXoCbPFNoHFHwThqThRzAdT4XcQ4XLQJw1voatJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QepSattsfZBo5BPsZ3S84XrjfY9zk2zTuBNDLyHB2wJJY35jdjuBY4sW3hAS1r5ppT1J5ifY48MvuHEbekobfqJ",
  "key1": "2FiY5qJkELVa39UXe1KrKac9qZSNkrzXHZn6HywzEGbpQxQTeNZnjwnPdVdfJVmSp9Dno2bP7anm87NWRq3oaUvY",
  "key2": "5eZQfYQBJK1VcjQLHxgYBEZBbNd6fbburA2MKv8tPw1LndVyfU48yNHBc8jJrnsy9MTHV9simqsJVMYVfbwAybq3",
  "key3": "3s6ZVFwpLZMHLY2hcyigCbYu1dG5TkKxxVgy77C4YTgzTHrJPVNrr7B7GBWCEdLz88jmEJYoFVrE9g3bqfRFKsxS",
  "key4": "3qK6FNdKC3VmJ6EwD2DEFNeZnDhwUfni7hg1v28kTxPiNst43kDeP7QBp2asLM3We3H45HHLTGy5TAKPgv9u8CxN",
  "key5": "4DG71itnvypbvVjji8sDEeLMVqshQ4Ucx4XGNtaHyvHjVTPmox1JznatqeWquELo5SyoZnvi3Zi9EDvbxRkXwhbr",
  "key6": "3LUg71eE4NYX7WS5HPaARX43EYP1Nth2y2kynynSwdaH6YyuzeUDtTNMr5ti5ceXkSGYkSZ5d6WVApusugjziuMJ",
  "key7": "4K382sqQ3SPEMjaCevH7mDq2o2AQDUvVjhakUSeJxp5DEVe1MWXCBQ7Pxiux5eHbDzm2tPzeovgAvpdYwP3QBHCf",
  "key8": "3rkX2nmSKC1wpS8vujo1BQGtoFG5JZ8ij6Z3ZqxH8SquCc9suuYBxJLRbCXFNeBT3s32ydmyMhnLfYXVxGAga5SD",
  "key9": "3zauVwWxTAwdJ8ka3DYQzCUkcyTvofKgd3kN4bcP7A5ywXGn5KfnuMrSJyZquDbWfjf34UEUZG53fRp8mUGk75kr",
  "key10": "RcJdKRHNa64oEGfTvX3sXBN54LG6P28MgBojYSLnWPcsgzquLRDRN5V4AzA9MGHX5DSocecCo1NLu3esmfUTXEd",
  "key11": "4LtXvZPkLdFZ12qR36QU7m31AoJ4MjHurMFBc7kUPCcyS7D7atNi5VaqLwmoovqRY9CfkkqLiRtKJ2Z7Y9MdUPox",
  "key12": "5xi1YKdUnhndRQ3tqkE5G9w7cQZHt4w78Kh41jEBWuV3CE9mF1zyfRDA5UZY3grQYWmpsnKiBvDmLH8iVtxwK82P",
  "key13": "4e8sWxyXc217J86ziLDARHpLZwgfFtW5Q58q3XJtzHBV9BsTED9YQbiinBLdrDn5dSFNqTZoL9T5TCtZoSFBvD6C",
  "key14": "3F9FB2YrtKymWcdq7sDN69KQeJcejp1DHHcLtXvEoPG6tAZ8ZBMPhQGkzQ5Za7dBvKf6t3jsZQnj4emmXS3UX6Di",
  "key15": "3nvfogUdBEYwA9kebHLuvRpoCDLBXQC1EEN8eXkyDuzPP3kmCBgj3u9aZ8Liu82h4T2RGP9YQ2bykn4V7cZZMFDa",
  "key16": "2Xm9KA47saf2i8QK6pEmnxS1oeGxYhQ1VUpiV686A47BS6NScVmP5uBdusoawNL1cPbXNJGCWNroDgAuL6NyWjER",
  "key17": "31ZZ5yGY5xLaNVVatoNTvCLqch4VkULp5HGmv5Pt9ENYCEoLKZCtw7Bw4pf8Wcx2qp6C2vxQd4xiy3qK6VzNFQoe",
  "key18": "2BV7asKm19XJ3GPEfRfEEiXwnLLHkY7emcc26GfowFgzre2gvBDF2tDFmyVi2S4WAsV8RAoa8XGyrhCbwRV1mEn3",
  "key19": "cjdE3pZawv3k2LYoccuUM8zAY2gLJk751UwpXw4JrisUSeziCEYsZD5etqDWBLC9vxMYRobUyVFT8dWZKbHbJZa",
  "key20": "4yFFM99usKnpuV4mzFFBngoMUq7kdUpcSJdjQyfWuyyTooz4NPVBpyfusuJTzse7ZB4jK5icQBwUwnQn3szwaLEg",
  "key21": "3tXrVrocGimz8GbMJvy1ayKo1bdVELz8hFMHpko4bWDyrQqn4JZAR4A68Rk2SCuABNeVvCQBYpEAqahiNaRypmVC",
  "key22": "3YXnkSTTmW274GCHqE2i7XL2k2GDdPTQokbGs47AZZ3F9ZGWzA38H5qsubVVDNiqU7fpHmdNMsP5c6aaYL7M56Gs",
  "key23": "4X5MTLJ6i9o178XGKGkxyJrCaMwhFhTp6cdCznAuU6V76oWJkujXzeHdFkDvae8kkojYNREminSj3YHJkTM7beaG",
  "key24": "5UXWenMFheMePa9GmTsEq4iiFqi3NgPgohZThTxuJmn9ZcFym35hGQpEzBLQzYpA46fkfMxZdxjdp9KEFw3aBh1D",
  "key25": "G3fP2eivtmgHm179i5qk9rLKdryWTpkZ9QYBuB5GGLPMCbLwV1dJ9z8mHQvVtYq44NVAVF97BEH6NTQRmtDsBuJ",
  "key26": "4TFuB7WfBoHLqBM8qAzSsxJnX7TZDuefschYphMUja28rq6BTN15WAyQgMn7YM1WEep6G4RRrhR1sdsTU9pDVbfW",
  "key27": "yQBxEvbsCXBPaKviTG5diXRABP8RXEDZ72hHSVdsVSFoyEy8c3Qt1fpDo6PkxCPmU3CRut6f3w7J8M7U56Uwdfp",
  "key28": "3wVPeM5LfZjFdZVyzFTtQdWnJjx5K9UPyHz4R1z3SPgqCxp9W3gjaa4Bd5vQi8YaLy8BmN8u58KimpT1FVab2pMW",
  "key29": "47aDc8cpfnBFHemSq1c3jZZ39V1bGiiDox1T5UBQzr5zPTyiRseregLrbAiLJSfZyGVBSWQun8SRJP2wb34EYDHZ",
  "key30": "3iJ36KqprDZy9VWyp69Av4JZiK5ndqvoMY8bk2QQQQtyieW9qizSYk4yCPbPAimAGPAfooP7ikmGAtVS723nh7GM",
  "key31": "5HHNThguhQctrxApVTAnVdKpUyV6WgivkiMEpRtwZdP27fPmMdLTpjYuXXpxoPRbYvHLY1gVRiKKhCztvJbRnH7E",
  "key32": "2d7hCRAb7aaiwR8BTUcLSNbPmGESPBdeCEAJfUHJbD1iboKXgvGnLSsyv24Eg7Q5bxf8JRFVUjsDBzaLTp1XGsCv",
  "key33": "2LKVnJhYZ1e7oPe2tnfFxaqjQ7S11dkR2RuJz8jgY8AMu4Y1t7SJhZu4VjL5KDdMBZSQA68Hwz7ej3rCtt6ZhQwd"
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
