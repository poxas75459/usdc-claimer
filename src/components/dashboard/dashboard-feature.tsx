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
    "5Cx7x6W86McfRCZ5TXtsmfXCX862Dw6rHDVmkumtJCdqsx9ANwohZ2upeLH9HdBgrepkGGMk7uREvfAs21i7trb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTKqsX8wi3cQs5sR5zU4mvHXHgaNJkhN2w8GdGTTAhqrZYDi8tSe1tKRLCX1DPw4TacfVxoRYviKq8FCGs7yHUk",
  "key1": "5Swej4YonncGdCgGbePVtiFFHjwFqGJX4HS5jdcg16TM66dUcjNyKipLNVETvJbLhLZGL4WnwiwwijSTHh7joijS",
  "key2": "4zn9zNUyJ3FgXwQbH9CA4qAscECQAW6GUsXpRmbhpCyadE96NesLxhKsf5G9BZQP7gK9fBNSV52DCiaE1oKhrxWA",
  "key3": "4e6bXjiwUFp6qbPrYezbpEHygq1Lb9vyhEcWEFDhJN5nHBQSiauxrt2LU1GmrNZjziF5MVtzYVSqAKyDKfywshGK",
  "key4": "tFBFQ8kxKUXsYg1zdxqGbbVjBw8hkpGzPQTXRVDDanCzPxGyiCrwW51XrvwTUF9w1At5rFXqY7PZQG6wBBs5kty",
  "key5": "617hqcVsXs5qJjY2VYFLg6vxVc3efFow4WU93jgBthoiJ2GU6zNvDxUTgxqAHMEGzm5bwGdqyBXUn1G5hVGojbG3",
  "key6": "C7Wa9C1qwAePW3SsAZ82oEKuYufHQUt5ww1EYaHBG928EvZMcd8Rzp5QbNFp5jNnY8oYt9WRYTVtvzLLTJuGo82",
  "key7": "37HbApjCt1UvXgRCdTDqtyE8gnTv6svUymkc2VrWLkwmMoJw76xq1wE6t9AGzWLkC4Xj94Pwu7vNV96xmdHdaNLo",
  "key8": "3kDgMpUDvfJFYSzDUcpZ5gk4sKe8Pzq99JPe4rx5bjBNmF1rDRgFQgxeAcygGhzpcPGSMJrJTeL3xCY5FXC9ZA5u",
  "key9": "2kHjFWajfYfLu8a21j1aEjZiz5VgnKY2poJmsbxmfqN75CmoJyJihSDBYk8dF9cJu2Uc7q3hkzWu1x8MBpnvRECC",
  "key10": "4bJR4ezW5ssRsxZ4bin361m3NALBsDmg1SAiHWsPC3sogQnaRSxMphD4Nha4V6gjfF7Th4c6tUAA9G5qhanVhzSs",
  "key11": "4dtw91MUSEvdMQBHFGWVWCycqCiJRG2ZsGVMfMYi9qa576FyqQ6HGXPSUiGaa2zjMsVC1Zt7H8DprgPJGtUR6e21",
  "key12": "21ninGw71PbiiiEzdcFYsRTAwv7E6qGQT418pHQeKN3vAbyragx8jKGv4p1EF1CYQR197JXQz9sT5YWzEuMrzacQ",
  "key13": "9etKGbxBMvvKXJqbXf8UboysPfwARA4RvBGL6FY7BECorP12xxA8kivvPJoFpVFjdsLcpQyDUyNiKXRSSjzy8nj",
  "key14": "2pedBbtALPUgtmLjZaoLBD8WfPozFjiC8sZwPBuRWDxQoz7G2YUtJjZTvpcMGA2c5oj35CzAGcg1v88v5x6ht3ZQ",
  "key15": "2VG4RXUC5aZbcb2ckdC3sphD3P4kLhe1NCxoAqviKESEDgeojyJfqLWvqKzKuj1KKP9cHibP9qFYBjMKs6Ux4hTe",
  "key16": "5Y1WWZp8xtQGZQ63WhsYdRfrsszi8FWPcn7cX8hZtV6VpFe6pzT6z2fcezCeSuTHyYKPymMqSQyiG8F5wKDnGic9",
  "key17": "3L8YXAqZCzAvyPancbrSwm6rKgFqjHCQB3GcpTm33YoaTwY5832znb5uq7eSL3eJZsfPBzcsg7gRrPyRKZeAAV6V",
  "key18": "3Xpa9vwPvxnLFLnnuFX758hTohR1ijKD5N8GApuoXvcef3c3J7JWvawDQfMxaQVpGzLRQ1KoboNJJDTRzvLW95X8",
  "key19": "2K8MjnSZ4QYABa6ugw7ZMgxPnPTfVKPXptyiTyqeonaXLAe8sLVaA3ZAVQ1uojkWQFFH89ie14NV6bDrNoPiU1ra",
  "key20": "YWRmTG61jSvZxYB2BWpbP3KN1SWjWNe1KqAyTAbDMNSNEdbZUBbqsQ3xzmPDb3yie98ZSkWyRPjbvs59buRk7RU",
  "key21": "N9gCRrdwWmaE3T4gnAA7yENwzbWCyMefqzXP4VVo8HFSv5DCvuzRk28av3uJufgz7rVgRRF4ksuNVdaHBjoiWTi",
  "key22": "cmiyFDu24fb5FuBbQp5p4hnkqpYvARm4KH5dyh22bKC82tit2uq2pKYQoY3rbexmFDFPeWWZgweB4Zn2akZ85Ue",
  "key23": "2k6PZWJRGZQT6PaFJtVojzkYVARShzTm4LiJzDojdEvZqecDFtBLXfEEN6VNqugcKCsKQBaFvEJPAN9duwMLYPwE",
  "key24": "3tT7WkfXCRHM7hEvjxuCxYc4ABai4K1g8Jq28bfVgvjKvMhQrwdVWuucPYTTYuUAyFBpUPKxJyMUHJkxFMUp5iaD",
  "key25": "iXkNMZMroPwbZUBFttaKLdmX8ULZkfh9oZaA7T47hVjst6jKbrZXuustyKyJ9HJfYpv693iYg3wpXXJ3qcGS26u",
  "key26": "Sx9w19WvDrve7wrjBGMUuJSLC8u5WT1sapsMEMLhuoHn6gRfvdLFMDwEKc5WsfgW3jS7mae7jN1rK49WgYFg4su",
  "key27": "4YqnPGvVopcQFHqkwsTNEYFLBSN8oz82USYS1oaJHnr8RM6EMfDXJiMX6pWLUfUHqDC4ujqJYKGZJ4pHUfJJESnL",
  "key28": "3dmPNA6BHAzEttusvSiSJ3KE6gSNSvxnmQYUJQLo39od5pYRFf6P4otz8fs5U4yaTCuX9xVmiXQGTP1VpszYMjNi",
  "key29": "QyFxGyDB1qeH2nZFdN7skHJagUDTvECiV8pFwofq4gKawuPFuHEnPvyQjayVp1izWvUenySxiP6TrMxe9bdc8iK",
  "key30": "5i8vrKbDaZ7fx3fkSwwtTqBtHZCZh6Qn72fmaFDKc5XfJB7eQWxQ4rpXEFo83ywBYL7Xj5u7ZvkXJtrurmoemG3t",
  "key31": "V7bjkr2dQ8sDhKFczSMau2wXF12Whns8gvTvazrLdQT1aCKyefWFuJL1BC9aDrB5aiVmJcrGy7tE3sfiXJpq2Wn",
  "key32": "2CFE1DrCMzY8395uGnKZqv7vRdqYrxnokokYBFjBj2BywcL2Kx2JebEHYiSjzPadNAoKdEgDMVUmYZX4NPwWYGoY",
  "key33": "3XdPqhkvoCFTyqPYCGgkD5kB6cVqdJ8uMvYQPnczoC4rEzzmyXdZnWWjyPuiMGFCV3PN4bu6Q7HzR82cfjo453Ey",
  "key34": "2kAQfHgUCptrQ3UHnVd3FnT1hjEn5Exq3jDiwRfsBTuULz2N7VLunrgpFLGb7C4Fck96E2snmUMytbKjnxMEDfd8",
  "key35": "4EbuKsc7BEXBSiW4cZfuj66KK1NGufEijW3pyMfmvHmoiGJNUf4UXHocAZAcndRrVzfJ3G7tzKywws5sChFaqDHs",
  "key36": "3UhA6UmucFYeztqPnp4e1CcGVDBkrUCiuKkhZrFVJV2C7S8UsLmsvp5P3CjmzARaUUpnzuQSrjWp8bbwrijXVBmB",
  "key37": "P6jGhzpPV1G9MbtTnQjZUZABcpsCC5469rXVHTcBsSQgjZykDvYQzFaCAvsy89YTs5tnSwSQordvc6sqqLks6qk",
  "key38": "66zY3H3yVdbUyaMGnpb9DdrjU6qH2taBvMAuredBw51DkuS24fVvWpCh2eDGQHcpci7Mu95tXn6eKzkF4cSWeY2s",
  "key39": "5K7Zw7Nat4MCkhSAW4KoK5sfiB5jw5chSuEMhqbmL5k2wJawoFNYqLyhvyLRxhhQTJUebHE4bnDgjFtF6SHkE3zZ"
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
