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
    "uBKCuhHEJUPWfovi8nF2xfKsG9zLVkTN3oN5ghA4WttvNaN1BDin1hy2imiCZBSFrNd1hkZA5uJz16QQRZK9cGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNMPHZXwTaLGATqN4vPdmHYMSSzGez9kU39zLpG4Yp58MK3eEZHkYSmoqQAjtFdLPr6K4SpaY5UyQyFS5FzivKi",
  "key1": "478XdvpbfJjZXV8uotH43nf61uXKU9Hm7PHSpwqvSAzZunuZ6Bo1ueLgJehK6yRqsvwkhZuRZwZmVjyRDgnv3Sr6",
  "key2": "5BYAH9q3TT8snUZvFS7RHEe3DPJjmhEstUKgz2vSUwMhBcco9ApZCaVyMMzMusyLmFK5NngJBBM6812pxu1PpDFX",
  "key3": "5jYKoABysXiGXNNJgjtc89uDZkCxvZP42b2BCAVgZQs3n4gk2xo9cmu2nbHHYFdSzJUhxNPBbtSTurCMLbE6X2FA",
  "key4": "u3ArpFju6BMsQemEC8Q2NuFsGH37Wfzeyx8hPA7A2pUvyED6BG1itR6EEzSiNpnymSAchfnabhFhqZzkXE46tG8",
  "key5": "5gbsKPBoDqRtNytb6g1GZk2yQo2EKTtLh7QyuZs2oC135u6NY2rnvWnwsMkyshvbGccAiNnT4NEQtpxT7Xj8e7rW",
  "key6": "i7VTV1e9FiNv5K5RozpK2u1uXqEg13dwz7K5NewJjq6Uoo1kd6n4dXsTWdWay6KCiSWPb19UnHerHATe8TSXhjU",
  "key7": "4WyNxArxmYKCam92UCdxvBHk28Ad6SzAtAcCh1zpiAhLwFRKLrqHsTE5j4NNtTmt9jvjAY7Hr4ZhPodRbeYpsYwf",
  "key8": "3RVykMFPvXexAbHBKwgo5VXb2dRnFYoqqEHUGTiwkDu1v1ApquMmTj9VtENyJxk76hPTbTPX2mp82pYkz5NitnbM",
  "key9": "4vtxLD71KhtbM1H9z2yLbVuk6EijwvzgU1TwGUbsZFsRBgjbqKuUNKMPRwWLNRKXgLwDzq2PtyHJiEfrdXkFNkXJ",
  "key10": "2Emdgf7AuUQ64oqX9VL6RynVrdECZjnC2pvU78xLQzwC5oY8rLUk1dVnJToefb4zx2eteBhJXMJb5JffsdK8v2DC",
  "key11": "4hDdjuPzJzrDzt1MTARHJJm8PDZRFiX9N6faf7eF3hUxjd2PMiSq1uV1AVV16XHSQqNv1WsZ36tq3DnZFEHTKXvr",
  "key12": "3to76LxdvUQLJuQWerWVqKZfAqhdfkTwrfWRWwQGhLY8PZSAJwQm35NZ1q8uxYmMFoDnfk2F7iHcmSVRFYfHEEPJ",
  "key13": "2hbFc4iRicPi6ZCTG537BJ3DrEFiq1koY5FiGvoyokkDf5Kq8PznXrcVvGYS7KZrFcgRrJJaFhvbS3eAoGP1aB4A",
  "key14": "4CifBnQbrQEQBNKAxq3nUwMft9CygaoKWpfsaB6nzFFF25cuGQYCFwtGEwdw3Vhy2JyqmKjuvULTFeTAyeKvp2iW",
  "key15": "25fjgaX5CRkSWhUNAK2iE3eardKsikhZNjULukR4K3ACDN3873dLWuwMLe7RQYJQmzRKzo4fFYvA8SCYs1XWQjMn",
  "key16": "5CAac7XBb8ZpriKc4p3ZHmVUBDBU66qGLpkNQD3pzA9ufZyGh4s7k74vGK41dYjFhv6uRFbcyZFa6SWKUJtF6qD2",
  "key17": "fP773kPHwWjCiSLiwP2Am2GgEGZ6Tmo5rX9T8RuEsCKykpSbZ3zjYWaqwwnUs1r2budbsKsg2xhFSTKeXyhrftB",
  "key18": "4m8pky6sgpE8ecAY9ud19XPCDnbtno3p6Rjss51amRCj9CmCsSWtYDZx3Amo2pi4QN99hDWE2Dk9M8iZuWNniAXW",
  "key19": "5RtDdf6VDYWR6vmiPn4pumjPicriE3Tao2nqT8QdngiBBNRnvTqqfARQse5zXES8AanE3ri4KURLnSL5vtTai7fs",
  "key20": "3cmffSNoPtF1cpGigqd9qwBKPsTFmNY2Frg12hCFV3ycBEqJY7PQbcsCDn6TK92Q7HbkqQxuDrZjejptK66bZnNv",
  "key21": "26J8NtNUJkqfXV9pkjmRcV5dU6QwQhPHsSHPbo35PViHUtPvPqJnACMBmtDePBKauxGAF9RK8y9E6MtWqtomDXiN",
  "key22": "2ASBUecFxEMWAsyyTHWJ4wYxjJYgFLkuzu3TYaA49TXaW8WKZcspeYUdyC8wJFRocHo3jwZ5chaQAN5LNMv4YVKc",
  "key23": "278qZ3HyWShAutH4CZrWit1whZmg2CWPWAxbk2Nvw2URv8cDL3nY943SpRRzqEMx5TrnF2mDwifm7DZfSQyiygZq",
  "key24": "2xre82h1kKYbWxuy1ELquDvWPBqyvVRqAbstbhTuG3ANwYXGbWokX3HM96Lu5TWHdAEEEnPHANVpuBA7sHc3mwka",
  "key25": "4C3oadM4HUyPX1fPYj3bZETotwHXyxHXjiMUzjEWJuBtuV2J6tpbePvS4V3E5YMzeVAtNHF3nzvZjx6BVbs9hXjJ",
  "key26": "NbTvRbXZp4tYsKnJsSfWxaS3329nbEhGtw4wjBWxTJKZnkbrwa8jzTw1x9ZQRQh2sgyEFWp7gh8yvam2H75xgUs",
  "key27": "3KqpWFp3BDGyBnQ5ET4XWZt9RnW8hEekVXg6Pr7S5tYxQmTuusvkNLP8GGBTuQp1tQnztEMmBxJHH5mtdaCNmhmx",
  "key28": "5tngWk29Ng7iByKC4kbQEQFhiYzo9bqfpxetkZBun6veT4BSGnjNv1mB15NMhfTg3mFFaBfjP9T9UU62RkG7aTrH",
  "key29": "2EUjwKLivfe1BTdW1UVzsUueUZZR7sRfVikTBu7uYYQijgJMxWFDjLisoqKyNyFLsq7SV9yLi9DARtb6FZpAcjH3",
  "key30": "4z6DchKkxUs6awLKLdhbjjJ4E3Dx8YFvFUWSCMM2y4k193Yq2SESXr1qHP6K1wWRRPYNeUZVQBuZ6AwLzn3RmXYd"
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
