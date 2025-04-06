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
    "3iRWr1KWxcAhFdF8Peme3uCvaC5uihx4PnpiP7murwFKggbZFgVcWnZ4DtgtFj3n6SW3M9TiKdFg422tJHwZznYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296aCwhbuKzwhMivZ3iPAcjfKq95VUAtbsAPodK1F6doTimVYEBkXXUkny7cy7Wa5LA4HUbhBFWC1J2x6QMKX9zu",
  "key1": "2oAyWVGnK4sty9EBFxdXKfwAaDb9SiYtq2i9J9jYXu9mkYBP5qbqTFQemT4PxzgNNKktm8Ju2ATsyCPJLGpTNgsh",
  "key2": "4uKoqTBDFV75muTJPtXRAtgcsUac7yBQM8AeNtAf1qdaCak92aYZdvX5J4QyAEVsVzDWWkDgKmxtCZ88pmJ5TvPN",
  "key3": "32mJQPDiX4EuYCosftSh34611Z1mUyv4ye78Rqh14vNfgxxGuynoXzRDvz28dB5BJL3P71MMmZuNzo2exg2pgcK4",
  "key4": "3o3UWxxfKCUm6UkZpnBy4KVTsxnC4g5JfT184vniUgTHz2yriQ4iNCJ3SuDbbi9PurYGRHC7gKrGMPFd7zTWrVLA",
  "key5": "4zbFZMFa6nyuT9NiAodge5mosPQChuPrWhdZueqK3kVR3UwHxgb7kXYM53nvdDNsZgK8fZ5zt8WfhgisAxrAtDHV",
  "key6": "2pUAeuCwKaQaiqWEEanmCmL9ExQemicg8hMPxDR2kbsk2qhzreDp2F4tZ526PbhNDNCDsXBPB2oDPq178XLb5hWU",
  "key7": "3FvhD8DHJHYrFoisWX9wKQ966WZJ2rz5DSLi8XnULVdnoTXPBW77nLsFvnDacgVFMXSQKvTsy836AhW4RQy4ovtg",
  "key8": "5ZoT6akoSNibUqTR8kNSyiBq2vVfBzmmU2dqyNwMRo45fZxUZnefpJuvog7CT5CwgXy1XSQw1VZc6RoHxzLygY4f",
  "key9": "5UwtsN6PzfzesMNWzwvrupUvbDD8jt9omZfiGzF93XqJa7KRZgMoKPDGEs899jr1KjaZAK7Gjf4SdubrUTkNv12v",
  "key10": "CkDNaPUa2U5VrYUt8ag39ZKNB9ePtwgFSJkjDE7rfwcdoU49T7J7ejwyKfEJfwW9yrCcDawAx1aceNULoBkn61q",
  "key11": "5fHQvi2yE1RGJgxEJGP1aPYNTn4oQGbqABChMFNENhvf2HRitNxE9SqZsiRJG1mZeDXtkApKRbhNLPaCHVormaAg",
  "key12": "3PMqZBvzcYDHfwxQ8F8fb9ghNbSKcjDqKVZvqE6GkcxEJf9z2GU2xmabwu9C4nhhC8b7bSUNCRfskgPtVBcPZn81",
  "key13": "2YUjFMwa6oKXfEJjvTGjoMxTxWT9DYhmasWqW4apZZ4ToQMfqHA4pPdmAkaEeZ7VxPh79rqTyY81nHdv5AnxGVi3",
  "key14": "5MwiniLowYbFvWJtTkztSC2MAjSMjKeHRKJUdUTAjSFyLXzqfysLkYa1bKtTMuYAoqX8BDxLxgjh28vvDbgkAScm",
  "key15": "4G5mm4LjSXcqW2uA6fRQvE1NiQjDPVpZ9Yq5fLqg1dbFVfozD5tsZCQmKViW3F1hK39Toq5KuGxDeC6BNQZSn2zb",
  "key16": "4EDKK86GAo4zn8F2WBm7rbd21xsuBmzD9K4Cm8qMqgNDZtENDEHoxNxzwphjE7xRMGMj6w1JT7BthA9vwfHde3uc",
  "key17": "KxPBQXqcmysyQVUpvchhaaNtNFguPDPYxzi7g25S1JBhd91KNi2pzcD9sQ99du9uT9t72Q5KbK8MZC7QwvhgXk9",
  "key18": "5gmeNWMo2rUhG7a3DhYxfZDAuWkQAhmaLbB2RTbDK5jzSAa37wvPbhphvT25esCeNTfotWfYZfrgfuWskSm8H3ys",
  "key19": "3Lrxt6c6dEskgu1yJnRsEJtCrYmRJXRAB29cBBUUgo3XcTAEQXrJNMcTSVSmaaFz8zqKjDRDvLh8oFfeDSQW582Z",
  "key20": "zrzwFg8ve45A4eaS2wBYf7CbuBcxW3j13ToovDbNa1v5Q8gVbyDvhNEaYNmSULxoXNd3rMJAjS7EVS5eK5ffsca",
  "key21": "wVoXMjHQHFsgm9QtZB9JsGWHvJJKuNVB2t9EcgYc1VTsejwmWXtQTCmdghKs5rqgKaLwb53ubkgmbxQFHP4FiJk",
  "key22": "2QHR39XfUdWqpNrUfdLQPvsHR76T1FmWeavkMVcRKUBLN1GxNhgUpHbXV3VoCW8jrwheZd1avWExwD6qR12AaRX2",
  "key23": "32P5e2PzHCnDMfmW9gRUcqPBdHPfDNuga6AZi5VX78cLJK132HRFNjYmHHncx2B6bqPsx3PgBVXSk5WcERMVwHve",
  "key24": "5ny6fQfX7rLR9Ja1JQnfGXuANQpB9S7ao1VysNw15JUNLugKf5uLt3irvNdyFfnX9TW9cj1guA5s8QU1dbGTNBqS",
  "key25": "5moXnrQqJQU5w2B2mz5iBKZTErG8QmxWEeuFpnHFuDN4mGixs9XWXu6r6Rn97PG1yUbaTb7zLVQ1hLe6ZJ2SMXYX",
  "key26": "2KaFWnmG2gzRqdEEgEsEVzCE8Si1wcXe29HaK2T8SYC5PRU1CuFiQrwBPNuq72E7wtkfbGSScMjq2RegXdfYPGn1",
  "key27": "3CMD9zLQSmrmJG4yfHpQdodDNjoPF8YexRsJ3Cz61b2AUKvvZqDy14ut1Zr3Rqog7W8Fhm37qXEZqR62MJskCu4J",
  "key28": "Rg5bdqv73yXYfU6ESREJw8Jp3xnVFT9WrtftjfmunNwhDQcqLx6uvncdgm9JBVqLREWqVMrU2vnjv2fJxcmMesY",
  "key29": "3z8M1ME9UdfUDJYTUsaYsELpmRjA89VMyGKsMNoi87LyABW765PL3HJWWpvykZ64Jay7RbpXYSUNJCaY4DqACbUk",
  "key30": "4N2qzAuXqwRrjERF3QjgtzyLL5Umjeu1ecBav1diuuV6shVDCboqA8PwDboNo7bohBtQAAaiW49TArzF7LbTvr9U",
  "key31": "4xMWcYZjWXezbPnnzeGRVnMoNhJGXUQnqCv45iS3cCEFTgDA5c6nZUN3sCgmzERVuUuCXLpAP3rb6AKQkHaLxS1q",
  "key32": "cRwane5bDhHdRFuZUTVKAdrfjEJusbvA4tfFqNhji8uL86C8tMiUfvLT6UznJTs91bP3xku8SGoXknJY5tS1G87",
  "key33": "rQ2qVarsex6dZeZtUU9o7kYqSzsiQAMjhTGLCr9DogiYctdmFR4wRrTcsJ7CEy3tsJCyVa2Gvo9f7Khr2ToHQrz",
  "key34": "3n7ZbLi7s6Wexq4N5sj6uRzYwfZSmvXaZX1aE4o33RzSgeVwhVbvLMPVegMDnMN8ueBdHU2RWJ38NCqWiCqSo7XT",
  "key35": "42rYKNXtXUHPchJbpu7b4Krik3ATwzF2JgWziCkX6tA44qhHgSPVHKHUKDtqRqPj6Age1JVfVm4QnGLjT9HWzb4d",
  "key36": "3j5cc1fsDcfUnWZj62xmzphvPVgrqL3bWAVdNX3taKRpnTHDKXog2JZ6YEtnXXdhRN8ePQPCR4XpJY6ag5fjs4zQ",
  "key37": "24ob7ZfjBxu2SCCzrwpS39PTrLq2Jcygy6dHghXqymSgoS67Tgwn4tyF2nuXQDMvduzovFVZrNmhj4gq9BuVM5z6",
  "key38": "2dhTQMdxe32QeSbS3MGwnswrEvZuSygD6LfthULoaNZEqEuoL5GXwdUstLz78azEhsCWpPJ1iVyxSwLVAGiQ8kKf"
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
