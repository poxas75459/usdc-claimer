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
    "GTs4H5rUSK9cCLNqskHmhsMZCYYTAmRz8iePLcFzuKbu2vxLtDiXyeYScMTQdVAgbnTHaQT6KtHZGFvJcAbJwk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKv1kYeUp7ch6y4yFG2vXpoTpHrVRo2vsWbo11pSizuTCk5KZVx6YopYMAKzusPpHn1sbHMTaw7Xg3wRJhNac6j",
  "key1": "3A6rgENTADpHqMiAzJoo3L6FxbZkyxmqCiHLcxHHtNtBc72V545pYtEVynkaxJg6hjD3953QvF5F13hHz8CPTfXa",
  "key2": "5bynj88gvvzQhAy9d9ZQWwScGURQ7YzDKHF1fno52tQRELeRV6dUUSbtK5v1F1K125gQh9SiXYKe9rsbke7XLxxG",
  "key3": "VhywrVuPkbBpL7X2cbUdLe1dDBD2omv9a3c7DXuoDuBiv3mFTJ3Rgrm2VFx8ZLoq41EL4cvP2ZvcVp2TKFH1EV4",
  "key4": "8zhaN9qpMJAreZHzrjEEvHXx6vXYgJn6zzhWTNYhTpcmfjsxj6dL9LnvDzEiTYUKncL7dzFqi4hVAidZy4a3X7C",
  "key5": "3X1cSMyNzJ3uUGYjySngga9gGyLv2cFmmm3UuSeyHyCSYiLjdg4xHHYUrAzWuzQxuK92WptDJ1XJLAXrM9vh4g7z",
  "key6": "5KpnGHWQ3g44h3aidfwEzWbE4xNbinWuxxCgTg13LrPVUMToJRjmB7ygWbDJYNt9BU1iVbokQKAdGrsZ1XkT2Z7k",
  "key7": "2naB6s1QfYse9ifARf6X8Vx7b1aBoyoDbX53AARviHGkrSBGuPSVLnjiADV6ze3zMic88cnfUKK3MJ5fV8BbJR9B",
  "key8": "4eFFFfua4BKxhEoZnZPw2kjU6DR7ameYdpkmJMu6nPwvDAY3GaPjwPiygjrowWiaF5tvAz6JxQodCGyhRLXoEuzm",
  "key9": "3AkmWNZ8VP9fsqBezwkpLQVLqPVt3KqsLYYndS9FGKaU5bfMAHZ5oQseeoeYP9WLNW5kRUkBYxsJDbv8JXUbeNCy",
  "key10": "2Ju7Wz4y7xcwX4zW8ZkRnRnMWNM1AbxJuXwjsKU2fqdXw2JxAykmQmawhSCezNdtfSzMC34e7gE1gt43B4HgP2si",
  "key11": "4j9CYxk25gYUEvPLNY8UHQnKAMe3BGhXtTo3TLE5PSixaB2HnEEx3nWKBbX4bd1j43UAarz9RuTkvWuAgXG5vihg",
  "key12": "4UsZ3fPFP9DRiQbVQEMpQQhjBpfNrVwYBuRqF4846g8HiuGJ5o7Bhjv46pEtYeC4wdu6qMMG9N5NqTDVqzg7qhoh",
  "key13": "arqrbn3izHC2Q6Ho2Gx945rfRyCdnvBd4dLo8TBRn4Za7e39jWw7enARXcK4zx6BhorxJtAkhgu5UEMCRGrNd4W",
  "key14": "vHArKJhyYDZihnR3UGfWPW9Ln4TMoncFuoZ4BRfiXZW2KP43XqaLSgLMuJzQqh6ve4awZ8r9VkgpaqmVTKHxssh",
  "key15": "2MNv9qZtsjzYd15WZbDUBYRbGmebLrmAjVjk6k1neXYF785XmENNsZEJkRzinfYviWid8Pxpz9148RJ1qtKvqSeJ",
  "key16": "3uQXeiRJZRXQsxxxPtaDWts49iKxYyssKwAaLbv9WNGhXavKMwet4NUfKdLBSpPdtY6pNy5bHuTbCxvNNJbSD3LH",
  "key17": "5i5hh1q87DCgYuWZ2uKBbduJ4XFvL2eY2aERHZsZKgz3BCLkvS39ZuCxyDd5Rg4kyktuaydQ6S6Rt26VMLeyxYky",
  "key18": "5DWvB465i3v84vg2ud1C14xsf3sL86d2yLT53oFcxPAS8GA5WevGXimxkqctdAMAcBFNCA3uagsbMbqx8G2k9jr3",
  "key19": "5ZDg4BHeEH5uDdKdKHF7eW9xYVFP695inzrBnDgs2WnK5TRGpWssRKBTcKQdaJGNiq7Ftaj2SzL4tsj7T81EnsZS",
  "key20": "5QpuzUC22UKaGvJZD56QpLqeSFxWfwCF8WxfogxiXuzkWUFGjN1RvkV3Xv91hzcUjQ851MeTKoqoJ42VQkWJt7oH",
  "key21": "5qfuLtBija5nhfCpxqJufnKordoPHtoidJkCxpekdbZkpCr4bhmYEzrboqfSUtZAXDR7T2HxLUfZqNd3eMxzMgr9",
  "key22": "5jKTmiE2rhWVP9keGiQQEcivfpiBix5shtx7fwDyefgozD7zBvaD4X4AoAr1z7eUJuBTCpa2m3d81bDQ1deEHjEj",
  "key23": "43zgtusd8GBKY57rRjw829bAtRRHUu1Nh3L61ch6bjVQYq9o2bdFV3g7FxHtvLfDG8dRpxc5jiqZ4iwpkPZuQgda",
  "key24": "4rc5j9Mc9iEfL7uxaScJt8Ujk9qPCWDNQ2yJkkCgkwz2BDs4QmasU9VeEKoMy4ux7BgX9wv8VHAvYcGJU3aTnrYo",
  "key25": "5EdXEqx5LonJmw93wF9CurwG5gyUoXodqqKdkv4h78b8zWAm89x9NhPdeZypT2KpZbPtQPE3qdYRiigQvCGTGDxV",
  "key26": "4L99TdTi93hg7UTJx8sKvbZ4hz5W4hQiFzzPDabaZmwgE8phF3DvVj9CZPhLPk2UTm2GiEQ9d4ji1nnqFgH82Fsw",
  "key27": "4CFDnZBfecNW96XR7HcHTkvPMQZTKUgDRQxPV85LVN4tsLdFebqexptSgfKPoHLwVNqLyCLrQzkF5DPXjTfS4iEV",
  "key28": "4S93JaD9C9ew7NVUPnDfCedYWFwDWLqq9ihVXYfUN7RCkgJ7gPN6U8E9f1pAso4hipeDinQXSDoN4n4Xk7wN56N6",
  "key29": "3bFhCH5fZXSWDzUmffvNF2bgxyiCgBhMYPqri58GghFDbkKGqeQxpmVzim2upJX1WQBRWHqXPMwWnToQXudEyCPV"
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
