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
    "4EUKQAZxZKRG2SjN7So8XVSoCvXkotvUJHbPhAFL5YQqYEJErTQ2suVUx53nkcqYWm5n81w4MdmGYBWC5CvmNRSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLpn19Coas6WhAKfjuKzyjiVperLdubhUZiMUGSWibRFWRsoJ3dWu992s4Lv7xGua39XDLsd4Tew2oPWLhxzdmV",
  "key1": "33QTqn3hJFzAYQPuFqkpuPkXYPK6ViJQczyPVhzyo69hp7Z6eLjinzqEhcEFWKrRUjXbsqyQ47tb1xVUszRmYgVT",
  "key2": "49UcYJ83pw8DmXWHftuRJfi4TAH379cnN4uonro13ynwp4swrZeDCNgQWwqfitgvAWToAcsRRc8RBjQxtrBhmmFq",
  "key3": "q3LX7mWbEWZkip86xeBusm2bJRVSXFYgXQSm92F2HkRwyWdmdByYPqxjy69H64dZ6QXvuvxsx8Nk7ctS9TzUwjh",
  "key4": "pRvJ5TfPXep7E9M6ccBB64A2SQP4wxfw5YEAQvsETNWnXfHP5cYtWvuhgwReS9VUMxiCDMYpXGeWYmzvuLQPpBG",
  "key5": "dNj2U9iuN6pCxhJt4jaQJo5eybG4sYcaqdMVt87RJ2nkvU5BwzWsmZPEpjdGKr4vV7k8h45q2JKgzNKerkimxTn",
  "key6": "2dESvRtdVPQU89q6vXzjwfPH86YZeyVnnexTrVRZ55D7xS86BdyoQwVMCerPhzhD4acBPi6jSmWtL9dRYKjHw4gM",
  "key7": "3qU4rX9CG5ThV25a3RdGGKviE4qchfRpZnb1QUuszzA9HXfBUYNQ3eawVM3CibakhQrMWY3UUxzxugaXAhSC7sT4",
  "key8": "5iLP4swQiqkpXjuHi9YLVzhcC5w9UGiRv72iUuxmmhNbiP4Z1nARpUH3MBxrGuJ7ew2eLZbFZzAbZDq6gdyyrKzx",
  "key9": "3GueCwSH7SjubMUpBXX8zhK2WT5uAPoAL7vFsS65uhAfgHDmiUZG8qqaV524bGZibgpncnkcMeSe35w8PzHKnBXn",
  "key10": "46HWCbAU3zEZeFgK8sbi6ZvynRebY2rUhVFCWVDbw5hrxaaqtkpiT2fZc9XYD2LdzBm4h8hCDK4fwoookoD7sYjf",
  "key11": "DK6RpaMkCSD2vuu5J5bQ22Z9ukH8LZ7xna7csSQqYZMb3hWtoPuP3RZwnYPPXuyFNMjhSJ3rwFfvL5fuUL9aTPr",
  "key12": "DmByK9issbG8sqrsw3PGTo7c6Kq5ASYTWFNbU9hsJYvpGbjpiRn9BxHfNCWsMuUGJo9xfgkvFFKp72x5CM15a6o",
  "key13": "swYrUEMsUTEN5P71RaayfEi5uMEfoRnF1GmMY75cYt6bR7NNdUL29FyyUYCQu97fhZ1qnrFKJQVLdJiwLBRVhzi",
  "key14": "3XZ4tWwodiQFCjPCrjxodJBdfMLjukwVrmf89oWhpiHPnSRATAezMC1MKjGErwShfok9Fkf8Sjh76vk8PbsQTXg1",
  "key15": "5t1KQkNGWPm3T1wsb6Pb7sxpmo1krvwzDCCXPMUHtA5oDyPYKqcJbDNDJgS43HQYyVuNrtp1VPpEbxDcJaAsADC4",
  "key16": "3Xoumjfp2Z8MhkT8Vb3Bw6FwV8CqffjmjqeojHFyduZFZfvgXhpK55CVhrfKnrRcTjXeDAwTds5gbHq9kTqWfbpQ",
  "key17": "4J6z7YbyCZWfaVQVkXybY2PXhuru6YTTsSbyFCH5Mr4kABui2wG96EgWUv5sm6cH5K8zzZZQzSCrEUghu6SHntY7",
  "key18": "F4qYMo1zFXMXDH2Sxspj7WeEhXL47q59LfjfXrzTyZtprUNq8EQtU1NnqEPFd5S2C4L2nCxoesGV9zrQ52FyBVi",
  "key19": "21MbgemP2Zc5wgGbYbtFkfYfiLZ7RGBLXQB5bLYKrMgt69mnFKh2rmA8sv9UpPbN85RcMAGyZ69MqBHArve4ZvBb",
  "key20": "468nj41g2KtWpZJUx6tFebMJrWD1KkDM2y9hb5PhqMRmErKehmqi7majNr1Ax3SwWYJYk9YRAN9AcxVp4vX2wRc4",
  "key21": "4eoAdtbvEdhQT3uyA2nhUuBk8mp51Q7GkoXbmHX3XzBHV9oE919UTirQ1GAN4x74ZEufAG9uqx56pUYXb2NzF5JH",
  "key22": "3JNevnNVGguQbxzj9KqzDzrhCCbaTatdmuM2GtnasxiA5VUg5w4wNxWyGiHvxZFLEWkkazGB24KWtHSKga95G1po",
  "key23": "W2yECSUBCxeoFHdcBFrQG8VrnsNvehFMLXXhS2myPGP8jnpiW31UWyxuy9ZG7wSfC9uJTPDYsvjE3dGVnCbvhyJ",
  "key24": "4aaXgkTyLn1ebuYhRkPUtyLJN2Y3f2mt1WpUm1Sjd4Ez2T2EmNJZKA4mL6mBF36jsQMHhdnZ9MZfGHyyyhdM3KfP",
  "key25": "xz1QaxYAgezhE3ymM5RjB886cMY9bvAufnMmMf3QFezs5MdHTxocm7E8rrWyYBhPvJShRmk7huwbzqXxnjkVZok",
  "key26": "4G4B92QmbZFsEh2h29fs9quaXcYAFpWABcCZsdUYpD7fYSF9RLDjTsXrnJ3u9M8coFfrmZy3kRYdvxvoztPwXDGH",
  "key27": "5osh5AFKuJrjmb5te1vrgcJbJyzBHwFUdgumsmenj1Skec3bd5M4KYpc46o2UgJarkWgSyTnRtbAckUEkFKZpAgz",
  "key28": "5d7HjT6wwP5yenj9ag93RTVqGTpN7SAa7kE8c9vsRJ8dQtKRERjVGoWPfp6PyT2vjHqLtq48XuF2GmWMB7JQv9Bv",
  "key29": "2sWdY2VBKgGhQuLFtbgCbUkHqnuKR3tqUiYx2nRk4JqFfXZLMmyJNY7JrwZqeEMhFC5domBpYWT2E9PsYwNsxMdK",
  "key30": "zGCRWiGeddMRhL2pGgWvA8WCncgvNSaV1cr1RgcVR5x5HY7jv7AVVSWp9y4UGckJUGygc3E9q6uh9R3ahuvN8Fh",
  "key31": "3KsqnEpmUfv6rej8Ne4seh9YNMcw6QcDFE4uoahBFXUHNQC4ZdGFAZutm4gCXbUQhyTzzds7M7GN7bb4ajshsTsX",
  "key32": "5n3xHNXbDvsvPTqaEUtKrhjRZ49hpBR2ykedTEUQ9izUf3Wagh8C3L8CDgxEPZLtFjYKBKtjRq4Tb9uo7dGKqFZ5",
  "key33": "3vrUrjEtDR6T8zms2pXXPQHNeLSxJYwSKKUjkJ5PXpnNrmRMAwVGALF83hcAGbFTk55BbzDwWrvoS9KLKeGda8Bx",
  "key34": "2XX4ESGgyFvCyALtr3NCeQknEkQRrMG7mLAi5CVXuBZZQeoeMpNUA5PUHoDeQaxKagETNEcmhjNv1rX1fZL5LhY5",
  "key35": "EykgVjFQa54TrUn1cbgoTcSixYrAynDNNajJcx9gEZaagTn4N81FbB1Wi7apqXgMsFp9Tc4L7SgQKLSkEsLaT8V",
  "key36": "csdDnHKgNuSMEhg6kF5DXxuirNFceyUWGkpSV9woB84Yn3YwYcSsfbUtapyR55LqznmD6eyjT8FMNJGUujJ8JxV",
  "key37": "5sDsfyfP4XVqxK8UmntnAuK2kMykrKoEFAXCmazbyP3sLDNZ5acTL8muGSoowcvDHWRVfsGmGV6VG7Xams5Fg62r",
  "key38": "5ofKfe3XEqVbw3Ew8UxFj3z2Ldg48Wgt23f1do3ApuCsrsAn7s6yCbP2PHXGmNT8WfheVZxohpTLD9fERqVq3NGm",
  "key39": "2NHCqte1g7pNfCnywGhKc88VzhofguUd1CLUD1AjECCisttUCZGQC6Cjae39ksu8v2sSRJApQpzxk7HdZY5pJqjD"
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
