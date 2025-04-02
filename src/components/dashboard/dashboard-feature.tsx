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
    "4SkX63WEnUoro75CPdUXgt2Er4kavNxdxJrLBm8qrNx3mK2pDJY8xXSARwDnJU8RsbxFDEZ9bB62zZQgSyJJTnr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64MNr6GbuvrhwtfopLBxH1m8cWogtcKN3nTGXTNA6PPiHuAKPbg1xMtXZqJcrTumeNARS7z1KYfyrMTVXuoGRRaW",
  "key1": "5CSygJobad72YjQAEESey77853DXRKHcX2J5CStg77f3L4Ve1ea9VWdgNnMAp9iSFzqUnLnpcMHceJZUo9F7BVcL",
  "key2": "GGfDznxHtAGCmPFhvc1mnqZZo8toue9pYuSGnEYPzEqMjFuKmdNpjDAKRBKA914KFhe6dx5gWDkL8sHLxfnndRf",
  "key3": "5cV6gc1g5h2voQzZVsio8idTkNR4mr1vYb19AN4iqof6c1yrsF6S9JGgyvCwdoahedz9Hqv8kkHX2Br3G7G1gZRV",
  "key4": "2sn9y7Vhj1ySJfBBr6XnKkMmurcox6jPpYLbdZtP4xwaFYWvHUaZu2c6bcJ5H3z1nL6tycdud9vpm4MawuDpZPGo",
  "key5": "24BTr34cD1szMxzf6vQrLctSn96jAcPJ3zH2QvYzar7JT7XXo7GopR4TdeRGRJi6MpPyzJtPuBBCHMLFoSfmqAz6",
  "key6": "wQwYhpV9C85iVaz5mv7358askZFy5aTA4iXqANUiuY8Nz5GqpHmFMEfvvsChhsJKYrdpFwdYiDiiYJn5UFAea8y",
  "key7": "65Ff6v7i9XtSF8fZZykoaeQGKgmpLAK1tvU4T7noHGnvXiCKRQQzkR2sRe6bMFtzKoCh679k3Bkfcii5aMLsVp55",
  "key8": "yhr3xjVMcyWavvMiV9bQnm7dK1GdXs1CuRVyf5LFgwuGKpYzqfQMPWpDanmkJepwBdE7Tj5dZxDfRf7nf8Hd3qe",
  "key9": "5SuLpBieGxGTM6NgNUeaUzpK6y53tfZXfoPVcHoPpnamhtVYfQ81dEDRxDg6NbVdHFr3oRufpWijy6xfDLimgEyK",
  "key10": "44iWE7RxiKLpGVNCxDao3DjsGovgVhCHbkQDH4p9t68REmVm5wNPAs9yCehZM1UKN9vNVuMZKeDqZ3GLpZJNvyrX",
  "key11": "4DXq82wa2KvWYVWcvLgpSSrRG1raxASrzNVnpczydim76wKtGvpRjBb6BNfMWVc5UdqZxmAB3sYXYjy3AA5Tjw2G",
  "key12": "2apc3JewafNQJbFPTFza1nYaGqgX57pdAJf5CH6DSHGvmP2geFrAoF1UjQer57h2tdqwbAsyLTGQZmM7kYfXWLVC",
  "key13": "Zxfek2QLd2NAWW3DeZjFPZmYnF13YZckvUMxLbko5AZKy5oiUCVLA7DEgc7K8r4iyvTsiEioBFrNHMSkbmacCts",
  "key14": "5xN9YEbdVpEveSu697SGPox9RNEe641fHWYRJGANxQ9RSQSqWpgUta5nyaN8caLBSNwEwHYM9hgqEWEyAFVvqzHx",
  "key15": "qFCgfpb9rtYAiYptmGAQ2Gt66G5fZRiEpK1xhpC1pN9QcLX5U9QyL3BSx8DDxLTd7gLpnYyvGXKJKUtesYA46t7",
  "key16": "3EJ9yGK6eu9SSZjjG2Syi596a9PZBF4q8qNjiDG1XKYwyu9a3qXzPp8f9HhLCJ7aqWvtNQB1ZfsAQrF9Myh11fNj",
  "key17": "3p6e9oBzggACURkJqFiusQpoVrftVkDXdoqLGkqdF7dYspenHtYpBxGD5ogzfS6uNzJU7PgeaDvNLx8U63tS3ThT",
  "key18": "PKNFTt5dNi9pbSruDF6HCb4V1kbCKbZLsJ4XksoaK8RGqumrH8Nt5eXRDm7UkCUt73uWg8GpwTVZzDKnmCKFYwM",
  "key19": "3V4qmDknYGpcTmkyuTaZPhnjVntjHHjJRs1ZGPSk5sYhLBhr952hf1nWeZSQJyp3rPw2TFkjuKPWZxmEZwrawsiW",
  "key20": "3GjMcX2hNqESYYzWuo7xxKcFCysKAHTcWJi4De11b24cZS6vqhQSvXbiLRHfXWLJT8vKd6ibzHY2MM1KQsKrz1W8",
  "key21": "36sA62ZWZeiF3XP5Nt1gFq5QyATNwGAYybhnQzMW2UettTuohSwfbdsaf1MkpEEyrsNEK4BmgyyhKAMaCxKiw1sb",
  "key22": "2iUB5JFvFrsdBq8PpE6mdnnBww3oKZX6K91CFR2e13B48yn3B4pqSttUj71cRxaWLS26Q8izPVBjY25yEd6V4nME",
  "key23": "viMqcP5gGrRz2NHNCZCAnAyrzhXjnRvgr1ii6QZNxCAGrVmWY6BeTNkNuFuxxzoKjZWB6Y7Qy3VTEZcWSnkfif8",
  "key24": "27MWAg5Txis869HwcTC6PMLKgpFpwhvBS1viyZTJmLnmryYi6dQkKLvr5ZCz6BFQ4vp7m6ppUCByaonf77E2w5HJ",
  "key25": "3waEHNpRphPEc9b2uxXhY5G5HWgL3kvdooqT6Sbp4hSq12mRphjFNm4yS55QpMpiuNPeYfHmyyv21iTv3g4oLT7j"
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
