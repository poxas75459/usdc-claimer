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
    "5kJwivQnSBFyU6oaLKRCdbPxJELz6T1SwUHjh9EHFE8RUcJ1vjHJNDk4eXbfx4Qodn4w9JuCey5wsrY68DwKuenF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8UdsQ3G68tm6RG1PYfunNJpYbiP2C4KsN8XU9M5NwpnGGsSRs7jpF1REiMnDByo8XAeFpEYuei9Z1MbUbDKy1F",
  "key1": "2HEWRHGUuKSjVniVzSZpArWoEfCyvgnXVmGicyhhEdkbXashNyCRLSAncW3eQWff9uhBW9gWkv6TxS4moP1nB1Wg",
  "key2": "2kkFNKXTQ9dJ5j1rEhRPVUiydDKwWivejx66hH2V89ubAKLHmh9cMLpLEEE3HjZmTC6uawi8JiKvd1WQ91Gg4vTs",
  "key3": "2TdQ4cPDMjRJg9s9tRFs7Ro38xnMb98gx22Vh8Cy8RH1aaPzSvvKptYfuRnpqvyp5Y2uJD2R1XTtoMxvVa8A348z",
  "key4": "4Ky6neoF5Rt2u8MH79YbzLMs6N5erFcT3unvPZq82uVeyzV5WtuFkF58jHtcmgmDPJZBdhrcSiYBw7QHsR62utC8",
  "key5": "gom2N4XLcPumtxbDscPkTke6zK5dzhdaD3U7HrKh1LEm7ZiiZBTrUMsaNwfAx9t8LbB438zs6HyRMmsNDCw33aE",
  "key6": "3ecQWmQsaiFLfEnAxBRpRREk1GBjcAeiKTco77j1bXvkCedar1X2XGZFbs2bZiK3MewKS4TsjqJN7GzU52Bdiksj",
  "key7": "2rWubRpj8YSCUCDR1U7F5wBYTgu4hvSEJumwLfzFtdBpV34EZVvrkvJkeaMYoHrkbbSCsAPU8orJgC4urpd3UnNZ",
  "key8": "5R6fHgozvWZjRhUWerFrQAhXB9GV9r62tdZUbb76G1Cgi4xuS1PMjDfBVFQByjAdJJbRYrzBA4Ad3gYay6iUbio9",
  "key9": "49DPA5wdytfGM2rxsYf6cfJY7o4qY3FS6rvJMCQbktDL1wFNFEBUDznxoVpEFeXvsaUsWdqBrt7Zhggd59pgCDoF",
  "key10": "ggfMRRh6YR6PDQUxyYZ2FBwB3zNoJb3S64Xh367bpzLBCsBFwZ7fZePJPbi3p6aCmMNNcz3wHvPFAZBr8Cfp4j4",
  "key11": "3xURtbFbSfRKgmLgmvpvyUz5KAu2fUAEdRHLF51c8B5rPYUZc9zrVCiJRCVeHj3PzbuUPzBKysDyN1g5rwtu46wZ",
  "key12": "43fQg4tSJaTmn7kG9M9kzKFDhfNyYUnvLHCw658R3HGFpbgZxR2VdfzpWPP15xWBxHfEGgY6q8pPXoJNZkTtgAFH",
  "key13": "55EMSd2UTB3Tm5wGJd221nB7ej389TpACVyigMvuDpC1qzUcUmLPJMTGh1x1Hfwv4uR41Sw6vmPjHyxppELSKtu4",
  "key14": "4krqkiFJi9fF2txS2TEAMusCe6hM4jNtd8rEwt27BpNrxY85WCn8BDG9f73JnSZPRDKsy4oJ7xLjYjT1Egc2jUKM",
  "key15": "3z6oQ6q7FTMPUF4bjEnd58cLYtKRvYfKGTgkC6bDnGdScQ5nSmCrAy6mhjQFoSfM2qfiwFbHJooGAFi6SpLyVtk4",
  "key16": "2XyLUWHxdU7wVzbXs6cREZBdd7ZQP27BMicF38nuJCd4ZmfKC9HabdPtofFWAS7aqxvne7cQvpibFwHx3o6fDV9e",
  "key17": "5UV6YPk9LRE5dovE3m3WdfhSoTPMYgmHq9PEUeqxpLoF6EhP6C9DMvWfZ5R9fLNae86Vs2ntfkVR5mpjWKsSUupd",
  "key18": "3rGh8yWsPEtVo383QuaGGDjAH5BoyVWLUtC9ugzcxmpJRxjg229vAXDD6BFNj5DmdrGCe8fxSXCu7K3rs2cRzEnM",
  "key19": "2CGHEkdxh4g6MKuiC4jXqhAxKvLnE2SyxdoDPkTxzteHVrEmx61QVn4G6KKaTTKLFocbXthMVnYR1J3u66GWtdzC",
  "key20": "623L6RWc4e7TbQjbW6aZGzA4hjmgZbWaEsqGV2rL6D1KRK8udMfwXgSvTsP5rjxQ6WvbA5j9zB2YB1droxdZibMs",
  "key21": "3zHaKp2supx7NVroQVxpmib7K5n7rVqRLaZBLWaNHYxDMnmeCbKfqPqbsS3hCL5akB7VTHFUgrKDcr5dypehFtQc",
  "key22": "673p4MqPodJMErANvQuoPasaQW7U4pajgyj6X3mtUeGrRRAebbkmpPMyHC7ZPZ3p6HZU31nMJr8jUudrUsUsxKjc",
  "key23": "4eBAZJeo4yKiWVeyGyaH7F1KPV2BFaQFDPKH5BToRf7EZcVUPsT4Pfu4hUTKk2GMaLHFRcE1XznxACBq4M9c8Vhp",
  "key24": "3LU1ESwJKzR2AvWmHstwXtGr7DbWeBxvSkzM8NhWv5bt3ABbh3q31J88QwE6LkXvxHwJSQzYxGPoyqN45NLguZnM",
  "key25": "5qVDUZhfpyzTp63zYodRTHcpxy1GXnEbGkxXYQLBuKW2RzAi9J4Qj3J47wWubwA4jWc8yMU2wWvrpD5UNBvDgYXM",
  "key26": "zNDTA9o3CMsQ8ViW3TjhT19jAEX74BijW5qVD9S7vvimNEgLFHFbGShvZPyazCE1a9tohwKjXnWDUVBSSbCs2np",
  "key27": "4Xtn9aBjPt3k4i5fDN1VYSHrwEWpZ6VmhADbKH91N75wwVG8XVGCg9VcdniNee8qRWzxB8veMXRnMj2nVYsVPcUn",
  "key28": "2G3MXZgAeSeiJ9xSrTjPSeMzvwZzf1hrA8KrhR9qfE3BHH8v5vr6iagmgDRVfEXoNA9ebAPnfQFHf6EmLqgSzxwj",
  "key29": "45FuaKi4WqMBht1XggHERMzoUTfY8523D2DXicngutcCnydv5WFWiHdtmqHtYXze3fXtPTp7qupYGjwmW9bNTNex",
  "key30": "4jBELe7qG9tkJJ4M8xNbcVkVLij1bnbcMFKkCtq9mJ6TjqYr2UahZFhW9nBRq1My9DfWUQDPF5MUq17QtANDTdVe",
  "key31": "CfAwDfQFwfGZ5pbJKt7mYV7XvHeWDnANR6fdDi7fSnDRwvKCpR9WnYMZ7jbNSi6sV1ERnqUnejrqo8dxRu1DaX9",
  "key32": "5uVo6t9Yx49yfTQcdon3PEDKtgBFhRixqViB5bRhWDKbTVMb3tzA9hSiR71LoPVdTvg5cpdjrh6BRtYCKg447kSX",
  "key33": "XuHAqS3jLVpyw3C3RjjEUDfDmf3zLpi2fdLypH2dYkV5yehUfNMTkbAbLgvkdGfqHpwTzt8gYVJPDQAcQHGd5CG",
  "key34": "eSgGzhTyH3bKGFxQs5Q82fajV3KspqWWQgSBHkBjN8DvtarxRGZxPaZY165ghv9FUw9VG5cMa32k7ecZmtQc5gf",
  "key35": "3bL9PzyBH6n7FaZZDh6ta1E6JNwBzecdB5YdDptAiiRomGLvyRMkYDUYvbKnVC6xfHzS6HGqnuBWwFYrJNyDq6w5",
  "key36": "2pDgNa3pYSQWtc11jtGJF3CGhMzRkv2q9Jtir1THAkSGv2HdSRo8mY2chNEh1aU61UL6DMcct7Q7ouXyjF7mrDxj",
  "key37": "3zueW15ZTkSR8DgKimkjvs8J93mcQhWi1jpMzgPZUz19joPCDebm5sDt16Kzt26mMYXtDSUE7cPrEYyqVnC2Ypic",
  "key38": "64E2ueMmQFeKbMDNtN4MR8AAZUw1AqhFVkhad44o4iN532yfPtome2rFemtUrBMryEgJwPQMCj6XYbaFFsKUQHBA",
  "key39": "zgex3VK7t8bJaEALTYBSvFzUrZeEMXCY8zy5dHnjjDYsG8yBGBv8EtEFmmNgWJdGh5oR1DTBsyjD95E545CzurB",
  "key40": "2XmZ5y6DzNLrgkfu5cdnovnoVvdzWLLV4DtB8sCRnCG44TADr7VyVr9yrQefwcVi2R9hnkn8WaxAEFithHuUskbB",
  "key41": "35DgD1udNznWww5QBzUwK8n8qrVAALk9pkY34oTGR2LxtsuKESFB5GkX7R5md7VLpqr4hLvq3b8SR6Mdgx5QjDcx",
  "key42": "5QqUSYcgydW7FUBTys7wRsGZjAFgMhu3KZ7Rkswvs2hR8JcKLSZaJQFEfLKqv2jv6iq3Wg5Nku8xdysCHHBkXjAR",
  "key43": "4WCakhLviRpVBLs65g7Qz81ePFrYjJXvFh8TV3ovAEKPUPvyxX872wT3RfgKGJg6WXsr781iKneychqFXv5cj4pU",
  "key44": "2EmGpBcnMoQ3xKAw7CrYpNdmbE6Y5q5ED6rRKuR3VPyTS5ZA1rrwMVEvtnBapdREsVTFYztTPs2F3ZF7c1xAMP6E"
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
