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
    "5mQqfbPTF4gW8sbAtr6vJ78AptYw41QMuBmzhSCtDzWnYuenvrw2rD3QYDLgKaf1mPXX63xse369NhxP5osBYcLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ytzJKbbjhncUnDU9i2zh6jLuLamENzTibeMQkDxSqAJaJ9yEGaGMQCV28W3Ze1re44yQrGUgsPq8trepaifkFDJ",
  "key1": "ygrBBZnHDxzt3rb69DXpfETvqK5MzhLyoGgmzZKS4hQevjH92bMtNk7UcHSs4ZRNPfUUsELpqujHqZ4YGDHdXVe",
  "key2": "4ScVHyKM5TnYyq3pYWjcvVQvQosPuzqK77dYrDN7XSM2DPzqrvt5M2fRTJF24mFki6b6f2a1y6pUao1bYYcqwFuR",
  "key3": "2Sw6gZEtAfnWE5963vGZMGxo1ZyhcawkeRBveut7xypDPpFvn1kpucToGGSJuYs2LbY6qRV5N3Emkjz8Urk3ALHi",
  "key4": "9ezS8YjdySgfw3ociY539ASFMFrw3qys77h5BTszRsaZFrwWHW7JRJkBvvxTcEtW6vGsofHsKQgehoGdrvQj1ic",
  "key5": "PCbyLFsn4t58RTxbxoobXdzcXe9y47c5AhEovZj83VK1gS61425CJ3Ly8xeoXoAtcT5B3DTBFdJhcAQPR25M6q9",
  "key6": "3j83FMauSvrZM9zT12DEFSAtpXikuCaMv3BqS2fP7bfTe92owfnRSyzdAr9RnFJwp8NTWWKSnwHpajkazB4doFuw",
  "key7": "wpjgE5SNthZ56snsMSZJn7VRVCRLvBmvKzERXB744sR8Mbhihz1NQWEdBFvXcwjoVWGCKbMCndP8MsFu2VuFr6z",
  "key8": "5tsw3kqrvKzPJkZ8E6wPpasWt3nfDpGrSgRtFewYDyPEnV5Kae18ifNgnhsB3Wg21XnYapmxTyawhSmtwDWXv1Dy",
  "key9": "3kHPrtSPpS7h6c11d9gpSVWkp6D3KJUmhWArfXf6DBX7kiWQxXBVaYuvvfAZKBDM1uHdjLqES4zrkRQsTXhrNeVb",
  "key10": "AzqmZQKN1T7mcjrDc8xbNRGxGH35AGvnJWjfmNjj13s1mY8busGb4d8HSmha3zreL4QMt1LB4XaHcbNC364mhFm",
  "key11": "3w9hGqZapnt242BJpVbTdg1wY7fsW85JmUMDC3WZBhR4ijGeS3rLq6U6yMUfy5Dub9FkY3SbzuVxzDXgmKkkovxY",
  "key12": "4AaLpS3uRbwiPRQVSwbyL3kDnPiCd5zRgmDvSe2otMdJBVByj1JZQU8Pe2GfD5PBy6qG7y9t1UrSVuVNgZ98HRYw",
  "key13": "2SJuzya2ARyGEQt67FWgiAWGnpXR44Kt77cA7WhUUA5w7vduNR58U9yMVsLbQMSnvwbitBtBheFqYYu4FTBGBprR",
  "key14": "YKAzjPPa4gvoUuEbgqrXBjwo2hTeiZ3ACq6w95ZkyKwTbb57UfzYBbDGb6a788AsbqA3MRhcBZTo9UXqHAQHxAE",
  "key15": "Ez3Eb2qiBEzE1zS9v1c3p2zzfHPSpPPzCAQZReKgaxZJJkYQQfNsdYo4Rc5m8YYNYhWqXLW6Md1ianG9WYsjGjr",
  "key16": "4U7LF8r1gEPnUTrACcKrtBLM7YxizZTb1fMLEBcHwK2Gn6aF3F2soaJudBibTVot3NcBCb62whHxDVuUn3jHYLWE",
  "key17": "375x55spzN1EBuh2uyN55omD9tt6ABnJJnSwd8g4NXWcrxpEiHF9JAsYYuK3kWLMyDi5GuLbewLHMBCM3KDFWmbr",
  "key18": "4VhqBKvVvi8EudA7GsTyyExL8Mcn3HYdB6V6wAhNbohW4jRB4A1j8mEPy2NXNrtF1eoCfwTQa3TxEPfUun1WAggh",
  "key19": "5RjG8bvuP7CSvA9BkT3CSBrmirA23gj3ws9CqqrmBGcU9rrY6EVwrbe6S9ESo2ggtHuymho2gukcotebeQGewS9j",
  "key20": "2tVLxbKGvK4yDfpnzhokppFb5AT68jXuyfoLy1UtCx65ofKtFNrt1MkyZrn3N7Stx5Sa1XALbsJYkpMP2LGghbS5",
  "key21": "23XAhnQVnRL6VcMetH85YWmasUr5ZEhJqjZjD7yFSFLAoosqumneZvJmEs2bcmYYK5H1BNh8muMn1gsScdunC175",
  "key22": "3J57tnE9qMQPQ97jyXDjwbeaNHhnjyRSW1VYQenK6A2NvkZ4XLgMikHtodKGGXw34E1Jqic7sVgH8CVDjhqbt5Wr",
  "key23": "SXswyqwigi3Pjsust92vxEK2pAYbTXy9yHdPaczexty4kUGHqafEnyqFycbnAzrJfdKkjsGuMjPz8jLQec2k68o",
  "key24": "51qR3HwDBC5jQRqp4xDdCRzUqPfFGZq3faJQp4dyjLntj9qd2WbAUT6Q2vz1acztb6KZZpyF8bw1AamBXHoaXMWW",
  "key25": "24p57PR84wFsSe2pAggVNnAMSsGijQpG3LQETRqKgs8hB4zM2pKXPzm5w2USvj8na2s85sY6RQXPXa4tsLDis3na",
  "key26": "rHhvzDuGya1aAWvxg2rWWWDyknAdvMMTwcQooxcG3QQLGNEZVwQvKmxPF56r9Zpjk3TNx2hLoyYNebJPtQvHkF4",
  "key27": "2oFYGzPSQccUSUUfviV5ab9L3dBqgcEQUTmeGCPJisjZeDVD1ZCdkmE8iQNAv8QHaNKGk7kTDwGba9SBFC5bWHZ8",
  "key28": "5QF9XwDLtSEBjCNWZcNcZgUqH8VPn9Y7oCjpFDtMM99PqKDsWVVcgbZc12QWH8V3gtQMm9CLHuBNVbLJoaNauvWZ"
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
