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
    "5XrkFz2jjhEWw3QGVC3MtDmUkFt2eYuszvKprCCrdJwrNAg8j77Go2mA4ZeW12BYw9e4DScZdQD1JgZExSCsKbf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vyn6sPkF8rYmnnPXd3Dimf1Yp6dhtwFt5h3Xkwr8AiCWkifXsJ2YNQfpXHRiqyMehanysr9jesyZwgvfTabyWT5",
  "key1": "64QfRYUHZvUgpTqDd6wLeHgQMZUydgQCw4NvAWfKDxhkgS9bgoq73iRpRannKQY8uHCBq6hGSgEGJddwVKkBR1sN",
  "key2": "sXZSmSpP7TbYiaSaHfTAEGqWGKehRUmNxVBiDoj8T3HYRQiq7voSi5VFo4gLQycD3hWDG7RziZW71oVpW2p8Ckr",
  "key3": "2begMqwU2MQjM6A5vYKsZaCuttAFkCD4oR5R5EA5gv9MLpQrRZbUe1pGnmzr2Up5LX4Txzmk3A6Vo1RDdYmE1MPX",
  "key4": "2eaVnmTj2oJnQ8Q2zLdUE95SREKPRWGDrU9yybhbGfBVetrZJr1hs6zoWWRraL7vpFpeXGGPbujc9Vedq1JLMgjr",
  "key5": "2fGkGENdfMZfxH3FZqDvNiRND3zoRxu4EFd5sh2UMa5VYjZx2RTCptWWvUrX62AEtmRV4ctzAHrEKx1FqyRMnwaG",
  "key6": "4nKSjjiZAcqxdTybnspdfKZnaabjHzwMVxJaX43rJdH1Ng3yocgahoLi7Pj1jrrFKFzjetz4mx8faGz5sUFQEZyy",
  "key7": "5RiPk6S6Bnq1Wzxr3UjpT9z5uSRcsZZGcNKdGyjFSZCHfqm6aEpYwpVtVE8wy3tUECrCZFTt7yqKsycPc5bX9zoc",
  "key8": "8WUDkHN9nLNCoP7mi6SZbKqJVLPZr79JCEi5tusXtWMBWoxD9ndNPSQiPQuuxLCM6QRhywnXyHt87f7nbqWyQ9B",
  "key9": "5EzZoAs1yE14W8W5KKKGBSVXoMqMF9eRanDAViz8Hwsyri2PEMDGdgem6Xpouix1v2wCRuCUmmDFKevNQvP9ENGV",
  "key10": "4JXPbQgeeY9zUMy1fuf1k2DJux7CdxXVoBknTfMsTcYwS9xYuyuCbmowEahrCYXiUNsE3ewCp1kDu4AuhFFUEn8m",
  "key11": "2ctTqFYtnSyjr2WbqVHBerSXfA1BPeDXwKo9RpRJRhh9dKfQN9QuiBkt5D6VonpPJdHSrjk178jNQGZfdeuXvVa3",
  "key12": "jYzRkqmKbD7hAnbYsjDSZJiiJgcTFheDr6JfKjTTxP4wLmt19r8QtuVsFx4BZUuE1CVreG37zwiF8tosF2yDFaS",
  "key13": "55HrDJVQSjsjD5PUpsCCA27pRgtS8xLcQbgMupvdURNSjYYFXeQyVmtLiMV9RWmuFAeVPjteCSpKdNBPd9u9yDFh",
  "key14": "XLw1Mt9gZmAfiCPwmGBBpMZFRvyqKXTcdyvm2bPVcVadT9d4MXZ4wfaVpwi794nq9nGQyvbekzU6ksj639A2weV",
  "key15": "ZVwek8VARRN7HyjVdQYEiq2nrW89TCVT6LsC3zqdNBkJFoMjY1ZNexTFVZXZY3XJfGrLRq62PdTsrrVHggPxAJh",
  "key16": "4DrcJxQppbHtdwPPpDr5B55YxzUsBAhfgvMerK8hnE6aPym1gYaJHcRcjyuUqHMbqm1j6D1vvmtjR2UcJyHUEKnY",
  "key17": "2m9zMZNk28eq2k52HYUMQdq4cLctWvho1FNsCgfeSHuewzPb5BsTqbLc4zvH9PL91z7uxfYMSfiNkh51GHP7PSoN",
  "key18": "3ezEE3fEixvAbuTj11qvqoEKioBBWw8BTaAy3q7wcyeZCaFrzNdHTDdgggpBNyckWfazbmJSfxRRAcENHeaK2WoJ",
  "key19": "VFhaSnQui2zuQeeFy3TWyMNTNvFsieTG4XbBHN8fdhbh8ufDaLKWdjKrTGVg2xmc4jmfDgHUsvVbz9cP6f9oZd5",
  "key20": "yHN4CjYy5UTmvwZTeKNqvJcfNtGYnMaRoDyxWDPeq6ELaCYocQ3KaYFSGmrbSrUtxAv8F7KeBdt17waGKNGZ2AC",
  "key21": "5DvK5W4mGiP9F9YLWTctGsX2EMzwyAHFcnVcRxK77WucJopqq4TG7Uhi8VoPMYThP7TegZ71HgGnWd7fScKs564y",
  "key22": "3z5YHsTCXXpXyiwhfAtHqtj2TDis4fpGMMuDwCPABaUrMoom5xcrM7u5fEhY1ZRrbhNWeDXCSvW9f38B1Lji9Wco",
  "key23": "3RSZg39Zot9pjYCGcurz41vgVbbJKr7W6MwUbabhX9gjbCxmgcW9vn48KVQMZiCejh5xeGueNSc8zN5YBKWsgLUz",
  "key24": "WvzFFma6nvqYNg6iEHgwZaWuJZ8WjuNbfTmD53qecFskxVpyxjADCv1shgC2JvDk1WVrpup2MikMtiu7ovdsSRm",
  "key25": "38pKdyFH6CqDB1NC7DYPcYt1WepZ9NZcuJLriUufisYbquMVvZxGe1MP6wcd3Nf1CXAnazM9s3d4F9hJujFgpWW6",
  "key26": "3hFcXjiy6CHb7EzMxuRdW1nVshj86cKHTPyHiJ6CKWYBVJSL9ST82TxXSPraaCtQtFUPqXqsP5FR7UCp5mogCR7p",
  "key27": "4fThDkeE6d8Z6Qosd8H4RmTSqiUtqTWUjzy3CpSvEburgiusWUEoiJx4SaGNgpqfNpxc7ti4iQNhWTbMmHqP6i1B",
  "key28": "5jXUBrSjCzexr3r28zzwSmY3tDvicypoaFpJN8huKSSjxjuVG8LJndmJ6pLfGoEn9tsm1aKDt596td57V8kyqvbp",
  "key29": "3bemYUPM495xVnsmSea3YXhyxbKnTnrrwNJudpscfmuZ6p63y4ug1vyESvUSchqMEie1aejb3Dbvvw3Jhw1Qb7F1",
  "key30": "66C8p9qhMHVGXbDR8A3z9EaazHyAv4ZEbosFG33ZjVoMVJxik76DFyJJazGE9d238MriL14NuU7gWg8bqvgQQ25V"
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
