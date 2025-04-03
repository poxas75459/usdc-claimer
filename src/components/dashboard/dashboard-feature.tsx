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
    "22EPhNYj1oEcpCaxetEF8kyg2NY7qvxbDJUSntL7Zpqfo82ZB4iKY5G1FaBHKfR8zyQfg7s89igfHpvmJSPoZ83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESaypfbYjxCe4JXLzRE3ZKjgUAsf1FExh59Qsj1mnjmSvtHCrBn7MVaciRF95CTn1MaEAZARdhpidPGo1a54hnf",
  "key1": "5ZVBVg1b3J2k5CNbVvfpgVfWu9j2iVaARW2ycGjEUVw7K6CHnnjNDKocABiXApgKJNnXSbLcSnSpDArF2Bgpfhsf",
  "key2": "32wnwkEet4WYbPo9oxjBbvSugj9FHpkjrVmXQefswZCDboEhXbqUCx3XGiD77AQ2rd6c8JhtbujRQdpVzym1rBr",
  "key3": "21nCiryunfibVyZopB5VY6EpexMQXmSjmKHv3A6GWTmXvftJ8uxaEppsTiRD9m4jWv7TZmBFF5ozfLMcvxwSenvC",
  "key4": "3XtbtyrYJmuNVrqwn7J39JyPoU7t4sa2HN73oySwVub8UxwDz3qsyBKFUvjFqznHCQTEALACasE4jw3ZPmoH8JVM",
  "key5": "4ENRt1txcZhoFxbGddonuBatPyZh1Fpz77Kr1tgJGrjdUxrPdxXE89Nti5t2T7rb6dHzw4zNY2MgcLE8grnQGnBT",
  "key6": "229N57sFnGkcqJj1oDA5kmDffi9ia5KXjxefJEZMqAMQb3yncHsBEX6rJnwTYRaQqBhyuzmgRdBzw8xUhxnDqX31",
  "key7": "52eaotVNbHBHswBDK7omjBpH1ZehrxAZ9w9349MhExFGBRGd4MWsbruHhWVr6gB6qbDyH4RpjQxKtru4R6Fh2Bp2",
  "key8": "2p32NivygFm53E5vFAJWc4oe8MxsVwxNjN8k4dfvB1pZ5enepozMMeZqLR2U6cd1TmyaJXkBafuSYGDzuhkUG1yy",
  "key9": "2ekksMYEEX9nEmQPaPCJ79V6HDnJJyZsbnzJ4owvvDYxfHihAs7SWywo2LhPXLt7JNuEGYPryKrLqDi1uhT4gJMa",
  "key10": "5HGibUAuqXi3xUHHMd6CPNRQGW2SnYF9ZpqAVTzTchWBsZFDCcTRDCTbo7y5nX212Q2MLbSQEbZNr3t6kCxVUyEE",
  "key11": "4Cfk7aGPK74ncW54myynuT55YoYe25HTf7i4YP2QFGxwxhnsDgbPLU5qJiC1aNcs9P6wFNakjRbwbxsj6bySXbMx",
  "key12": "Z1zQo75xodDT5rYk5PuSzSa9FQ9MeC4o14y85J55qet3XwZLqaajn4pGkgX2EGmjUV73x3Kk9nx3zj7Sy5LhKKW",
  "key13": "5jvertdMgGBYygeQAALhEGPKK9ZkAUaqQBDucoeDJZWUMmL9wKn5QmF6hJG2fbKhVifGesNuHrsio2CuSCvrLpgf",
  "key14": "3YvxGhEWvbqw7xgwZhGW8zGTgRKUwNecJN1svgAT16vJxiie8B4mhAu5HvnUj2AtzfnGjB33otyiHT252wGVMwUH",
  "key15": "4YQUWtEUgTH4zKZLaTPTEU1K6Q6qEuGrZrTq39ngiE5DhXvN9C2BPN6fuHfiknabFCFeUejeGdEB4NCmTpqgs4a7",
  "key16": "E5o2ZJXPeME7x8msmhwhbU3VBGo1VLihYPZFMKczDQGazA1f9sNa3TsNLDpRFNsqyTgXDNLq8LrTV7NRGgbBZQe",
  "key17": "4WWLGjhtpAE8Q5RXVnHrjfxmbNyuA11dyfXTGeFo9d59YydHfEhge3UZkyuYjgP21WtvouTNtru8eJo89bFwynni",
  "key18": "4FaqxEC78LQAJqs6zaAskLaDmeHxgPUv4ZaZx4vPk788DxNsEZ7aYU1V7Va2GjD17tXqnUsgC5szNLVBn5XT8Ad8",
  "key19": "5cHabHuKpnHnPAtY8aDuZhLRH8GrRdtXwwqLSwQw2En6ieWL23LQ9GRncmrK9Zx5ZcTdHF7cgs1ntpai2NtakTuA",
  "key20": "3mUV9kHz6Yi43tfGPmdsGLpQb8ja9wmoXYEAniToHRKUkT5eW3GAiv6VoH72h5EssAoqBZq3YeCKXNgBQyUtpf4H",
  "key21": "4bWg2B9aYWcTaEyP2uHQFJvMKrm19mWcNRHGpv93FSmjHWziY1Ye4VN1R9J4ncqevyPBann9FiE2ueeMdpepiHfQ",
  "key22": "46i6fA62wSAJC5dsWAJFUsQkNys8hM1CZhaxdqeDAxKWQ7vLAYKnXshdR2RG8UyjFGSKR8DaXFh6sP3LKdkGYT9e",
  "key23": "4evSBM3J6L2Fv9ZtXWf2c4M6tRqNmKrkq9iVd7ApB7SrsWD5yd9mvhB3Mkb7qSowDQUWq3WEhTwKLV49nmsDyA7w",
  "key24": "3cnH2AQKoV8oyCKihd4vZ7UjZvzjWq1nZZkgkphWNmhHbzEPPrXcTu2z4Zjm2KehWDGKEv8FEbQL8eXkpTYvLuL8",
  "key25": "3gQnbunZd3TB8uRpMkuFWpHSFoRSBqX6aY2znPWtVkZdcMjFM42BLL4nUmiKHS2Yu5y4HSqSgNDTv5BvMjm4kgzp",
  "key26": "2NFauYh1jieh4jg2zfZ9dWS1bYck7iVoRq313YTexiLqS7YygbBGMphCqAAHWPnQRHRRJG5vZGu8PACd2yvnFkVh",
  "key27": "5KwEx3WVjNioXBzbYV14rTeN4aEGuyvqt23hnFBgaFzcsXmTTipjtDihe5j9bLHJd1vpbsr6euoSPG6e5sJR8Asg",
  "key28": "5x2q13KbQ5qrBWzwNNPKZZan95odqQJu938VLaaV6gV2aAerU5oGFf8kkWxTzXE8WLzobiNs4a4d3p3QDsRBGp3F",
  "key29": "2u2iHRbJihkpN3NsqH2paAgyYnQaYF34t61t3o4n3Fxr3Le6uJvf3isZZL5BZfe5zowUxVKkjQK47B6MySyVh3Lf",
  "key30": "5hvWmGVZFKEj52LBuokoa58HFz2YfwfJyA9efCihaGwV2LddMF7ZsBNryzLxyDhadKuJouZyzgbE4JP8Gtj96xGC",
  "key31": "4YdAnP2gznjp2aNrKV6BZhAGhPmM8m9zGbYo9BzSGeU7f5KxMDNV7fRTcMJtC3TsjcyAGQiv11ieDXJUg7F858uN",
  "key32": "h272zi7caHQTFzUBetwatMGQZHfU3mniDgXUa5YVXQM3aBkp6KXv8H4m7w5sqBjLBeCQ54JacbEyQeo1uDiPGvK",
  "key33": "2bajEpBLe4Bw8SAkBUd5yJgopdzMFwWni6juAcfMWxbTX8NjGvBfKhuDp9gpLsaFwGpNu5QPDCwyGhdxvTkhar8T",
  "key34": "uVgPebWsurFEVY9MvGKeVbEFY125Wihvf4K9MY8aPJ2MkfFgBw5WuTnzJWdnv6VbD7XhDezy8ZZX7f6P4hNVdjt",
  "key35": "4axoBthb3iBYBmhV257GmpNFRfvHbQgqUQMFQwBFsKimFoi1HdCP2j7XRgStTB7wnsrDvFYBNbcPx1cNgyGut93Z",
  "key36": "5S8kY1zS3yLZRA69b9HHwQMDjfVm7Zgq9HLALTQDMtXgJKh6pPTJiPr2zETyqNCmZRaQUauCuWoK2zCG1uCHPXxx",
  "key37": "2EkdyUZnd1rnJte1SFnnUSvF3hdzga31XX3GPb8u2HNTGP9ovpRF9MaVvBfjHHSKFQrvbARzAQRNamB6erTV65nU",
  "key38": "7qJb5REEQAoYVKRZFNqFGAiRGPFh5kzYRy1pejq6yNX1SM59Ea6fq8SdUHDJMu4JyJt9zUkFtGU4gwhLKQFV3pH",
  "key39": "23FFttCRTVJ1Mem3V28rDJ7ZCYHpEja4ZXZ9gCpyxqDvngWgkEWT419TatXSFeeEgWuPZi6u7RkVitNFoQcn7YNC",
  "key40": "2QDWabc5zCa4CZXPhJNRRM5xYZ3YoLNaDKhaRTxBLHdJWU67PqyyNy7Bpnyfp7DyHWBn1qXGu5pJzwcDCMdmARNw",
  "key41": "3UUHCRYc2coUnyt5crmZrcK2mxgHCi3qPQAcfH6AnjG1AUXT8wHzUPJSnmPpdm7AF2n4aq8CJq1XpNJFQftScqzV",
  "key42": "Z7tPAysT734J3Zc1dy47fduCBTHT1nrEJsCy9JPEAJLXQMnwnbma1NWYsRm9HQ8wNKepgGWxqfmiYn2ipkeYf69",
  "key43": "unEVbBTt1KXtcPh4RKSyCihDfXc4T9NWHDUtAPdeUw1dXwdS3heP5aeGjnA7w1HTCZcrLEC4CXhGMLn1nPhiGHZ"
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
