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
    "3TG8jY265YkVMXzCXQEZk9in2wCZc2AuFk9BJ3NysQFonrUC3d6P2eW8YVChjPbxmeaYEvpWBSBxCo9ZEXYdTrhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K5KShYSt1p8CN7cVsxNMPkYoG9WAMGqsAnh6BJdbojbQBenX3rx1m55kFo44jExUm686x2Y59GTwXhWyEQqyhmY",
  "key1": "4LfvvmRzRTZWjnHbq2SJhWNLfAkzYQ11zZL8c67PfjYzEu2XPAFXRzVzcQBTcs3wba4rgiMJi2XLeQQHYcHCc31A",
  "key2": "4ZNdNaUivEpaffFo7WNpE7M4RsoXPZk143vv3ZQn5K5se6L1cf2BfX99pYfRGfrDQAFeW52CggixEbw7ZXy8BjpM",
  "key3": "63vk12MC5nz4p63AxPcnBNFWuUF5RA1pFH7ZuGMujdeu9DMnYiAyhuQTusyBQwsFUgza5rkZMSqhXzXUyUnApKLd",
  "key4": "2zMY6M5zQKT6z29Uh6ycJ7gDqyng1krAbnKFv6mJ1fxWBxfeyBMasGDgLjcBNVSFK3JCbK2hfXVXkue6psz66L43",
  "key5": "5XysShkJbWhdeM6nr17AYfYncF1avDoXMFCJdiT4DWxGXimBAGAsaVaCH3GgkDfG5bgGWu8USCnFSNi43Ru41BYP",
  "key6": "427okKeWpwGnsca8JvQvLQ7D3kUXiKcmoqv5921uNiDqSNPeceuNQH7JHjQ4Eus23cvy6E6LUd5UmihH4vdVPmtn",
  "key7": "QHtQ1F93itLwqfPhQcHMDPU6Uru3tLNRxBcQKvLygrpX2Cysk1AFg1ZDkJhvZ78Q2sHmNoyxmy4vJGP7KV8mEjF",
  "key8": "2W7m4xL1UQtbXVwks5tUWeoByUfW94S3Sqtd1SDsiof55dZLxAvRTpwTXHZmxFEZCng35oJubyFMbvcfto8hbs7y",
  "key9": "54PrSQAxumVkGAfR6sqGVNXyQk9qCnU5y42M2uDjotTPw8QCHnoM86ESPQN7JzJi2RVDrsPpFtVbMt6rP58wQwxT",
  "key10": "2KTLaUER72ppZpz9BytLnxxa4rC1Tyovoc3nbtuVZaTEKbPQsyfxcWxtgTHyNsDqqZTzdsd3S2hEuAm8BWc58BiN",
  "key11": "4kQhrnWGVVZ5383kXXMPhsAgQA7te8KYxsB2cPxPtfMEdE8UDT1fH9nV2HzqD5Ar3uDEfyMUBPpG1v2zLsqJ68P8",
  "key12": "2H2qYcVebTX1M36CMm4A22zuatTn2nRJg1cFDMNF9kBMCEGtq6nQZysZq8qybrbTAYR318vHfrc5wpffLVRvEy5b",
  "key13": "4DfbySCHetmA1LczNKPXXnAzqrtTXAb8X76rC3M6BC7FKi3CJDaPrAQxhBswKkU57B9t86Dv1AVjTNXkedpPne7L",
  "key14": "2EYToEdjZYEYH8XEbuMzdqA719wZ5JhMimE5RgPhxr4H3eNobKr72X9qtt6tYNNWBXBSDPSnrJHUc5jzDezdCgZ9",
  "key15": "4w9cSk14xaKg62tunmgd1iD6GfeRzsyCezRwngcHmDBBCj9Rtv5aHRGSaQQgHexopUKrinzNg5R85XQnzJ38ocuJ",
  "key16": "4GLSd4YiHXBQWfKSiN6tAEJhJzKkTpVh8yTZTwkeT8xZ8cEHnaDnrMRBquVsByMLRKhndWRuQgDrqxsryphK3SzC",
  "key17": "gmZgZdaNqmhDQyeTFK2NHBaWyinavrQATezLS44z4nDKdsKyhoigEm1cjzyCNMKufDHSeQA3n5RxwvMTPp9Q6k7",
  "key18": "4oy9YeLMMbcie7QZY3EVh1wmLfDgUWmNLsfYYuqWrjFo4RmJATj6mvaAjAqQ3BFPkqJj9AS96ur7awXtVPmonMFY",
  "key19": "2vgnz4s8E58tVsAU46WJDwU6ieMCuGUVLvJKLAkYEwYtJbUKLbjN4g79xV6jGRByChDtiHto8F4zzEiTbbReCdyT",
  "key20": "2zSdCE79sJM3TtAiXxKdiqSty4Z7Rvtoxj5vbCQo2LfiXYqx5z9fALCfKhhkimduKPUAsHWY7CY1QNhHxZwg57Cn",
  "key21": "Pqn3MMPQRmpdCDMKA826EcQKedNQxmU4D41NkCwApceJp7FKmrp1SYU7yBhKLd8SpNeVPwGdZ97Vs2Jbmb2HuG4",
  "key22": "3fEretHXKejgQVWnUA1NHb34AH3neL1wpSjzdTDyv7x7t4weCaUvKwqV7sKoLT61BEpHmZ7unHNAtvoi4vn8BGc5",
  "key23": "3fMr6JGS2CULqPbHQphQnChM7ySSJBJrZEyfA7pyvEJgMpj6ijgQYqtYK1qyaxDmzXCP4azHrkwnMdSZAZUjZk1y",
  "key24": "3SfyZTiFt6uBrFxHP6ZVGEkPH8BXxnCF8iiX9dJRAoWLZLGLGkTbsBzxAqzMaiYLgyMYfSPvAAPmBFNHrTfQhkiL",
  "key25": "4dr1i87dV1LFK631aybaybrcDfiXGceu7p19WuFDKayu5QwYFZmpfd1rGrBhgmW4A2ghocQEnyuqjuPGHeVNwWjn",
  "key26": "2QTNuKFqHfZgaSkUYRzGtimdY7Lsb28m3LNVsufNtrP3FnYo4Q4crFKRUQ24ij6cAUUrjvHtZRVDYGRxQKd1R7uk",
  "key27": "23eWAcDFMKkcSFeGtnT2xJ8JJpX32QPWpx6G1ouRFQPZxhVjeKM59BHnG8zKFdBfHhLRsJG3EVadFdddHBHQ9KER",
  "key28": "5n2KcKk4TCfSEuWSAfEikWJzYVXrDYVPHQ32giBEk1wyZvnSHF7i294iVG3YFy7UQb4wrAh3Nu3a1HSi9TeSR5F",
  "key29": "4gzC4sWSFseEqrNzLZNaQFkaaHrRoj9uDEaX2oigDBAdNpxt2QEouqT3KH3ZDPz2hnG3sxmMWAnWpdCZeTcSx6q6",
  "key30": "4vdx8GVLBCUyAf5jxg5hczTfW4D5At2x2kVehG53nPiw4Zi5gykai9Nk65FLwMpRfdomnhSWS7VjNK6T9VjqQKWe",
  "key31": "5snJBLrqGy4hyUMxJVJCPMGWPeEBaVtXnLKtM6RkDDo9Mn65H6QnP2gNHCBXERo5XyD5TmZJQfDZ61j261XQiGsD",
  "key32": "3q3ryy98mTt75MAonedTXhqFurhpZ34L5e7ubqx7MQg8ZQ1o92y6VvX2NSX84kJSYPxtp1Emcd1Ji9BW2t2UbP2Q",
  "key33": "679xmDypppef8dPvEtqTqWuT3mVDA4ugYGTaY6pLbahkRsvtXmE73A8N1yaz5hzUjEuno1E2yQTAPFLjxjvwmgtK",
  "key34": "4QnYg7cz8rnHZyLhurm83ng1U4gbrwmSfQ1chPChACUs8mcqrhVxkwsRHsNtGgq78KsNi6Vfn5GSxJGUigu1JZPo"
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
