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
    "28jzZMsKP11SF6YuiuAu3x17EnTe5b2dnj3Ypk4H9dk4BJr7fvLi48s5qa71AXMhcxZzJjf2n7VSqS21RDasb2Qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsZ146KbodswuZTBLQD64FA9NMVtS8Aku1HacLddQEgqRJpC7VhFkoXkyxn6YZdAimHFM82uwaeqc1BGK6vm2BT",
  "key1": "2yTWaTsCvndrm7Hpam52gDQkjtsC6Py3u9TPpsFCcK1YqTHGdSURoCJ3W9KpcoFQ7RxfsMc6WEGxhe7VMRtLbMbt",
  "key2": "4QSbjaEg44AyFQxu5yw5ran6KhWUjnLnMmSGm7cFakBuESeYrNwcpoEvgYVgSmCSzN1vnKoChFTsQxSvajoUm7tN",
  "key3": "2vA41Ubb3QGBSSop5t8zJKyvqgTHNPAx4QhfCZhQZQywnv4grH9cVW7H7N2XkdMTum3ehZNBC66oU5jHUXfYCK8s",
  "key4": "3W6f6kuhq6pump32FYf5qyB2ia3ZjLbDiL7pbA2TTgEGWi6PEhK8tW9wMCEeERw69EZ4gXkfdg32jrmBKtGrzHzh",
  "key5": "2jQHnwNUFBwVGDmbQhmLtVNYaStAtYgiBwJL7CbbhRqSvdRzzNDZvcBm65rH4BYJCrac7DuMFMsyoeht2e8cRinL",
  "key6": "5KfYugMmVQBZXK78HWifksrhhg23FZyKjXhUcHqSuT6qfxZg5CW5TGS7zAGgTnWk9SUv6fLmkiaivSiXUiQyH3Rm",
  "key7": "5CFZVNGbNEEH2UB652eE7Y2eZnBzAZ1jFEydh9dKVohrQk4nNbZ7CSwDn6oMku4U3ZMoXRkBaAj4FyG6w7qzKwUD",
  "key8": "5egBpc2EBbpnzMoD8BpHGfgif6mmnGNbnw61b1TURSYbGVc8XfvCjiBe2kZb83uxv6wpuwLqUHq3Vyd9CTsyQDn4",
  "key9": "5HYn3MqKFMmHLgzt5ouWet763myureJoXT153xvuCmoosPA6cLvstYztA5df16uqSj5CyuLQHtwmTjtXj6GmPeyr",
  "key10": "2UBZxckTUfY1XwnmeEAtY71LenYwsUAv92Yzr8zvqEvVV7akLAKNa87VbVG26fxoYPfHWi1xUzFqusKGaKAHpuW4",
  "key11": "32nZSwTX8aSYwFcMoMabrJAdDXZjUTRTEYedxtFxnb4a7DCTgiLw34Axd5WRQhK8kgWy2UFjq5zaLozaQYH5DRZH",
  "key12": "3oyHxxqnvNCLwpFmccYztNrEH12KPsrNVgJb3rCmuGZJuw7AXyVtfQWKh9JmGVCvVThYF3HUsG5sXsKDFspfkMM7",
  "key13": "2CGzRrc649aetrYv3RY5yQTAQp2GtYhfWehwLSQPmM1GEFcv96bwzzBbpvVzFJwWDXbAc671sCfV6t1nEWM1P2s6",
  "key14": "5ETjm1hXmdTekQHC2GZYCPJY912zAU2botWhqHHA8Cd7djmwKFKmR2Yzg4DGjfyrWaAW1wj8WBGTPbshhBgBSAaA",
  "key15": "4rvnuH2viezJtJuUHpvziZRK57oBeQkuuPsLFy6bA2nGSUigoV8KvVNpmSBFzash3LpquUWi2mjdQ2rzHBdt5NwS",
  "key16": "2vAdYWs9as3GYJprQFFJUfiwM39DfMAWvSKhMaBXSeV1THtcHBUD5WyC9yASehwEMGEv6KNFYSvjX3CmTihNRGcB",
  "key17": "3LGUDoEM2kCFbFrKkuLDj4KddvSvLppXpBwUYQFE6XCvMi9G56ZuCdhkBiqqTgDQZPvHhALkErgYepZ21FYgQwFL",
  "key18": "64w74V9fkkCFdzNxGzTKbL1PRGQHzjecXoXYJR6JTDFaxjjvumW9a7gCfybPKKj2qPehjAUvNMtqDy5SntpX9vRq",
  "key19": "yVV9YuXhAtVgBh9qZWfrhRjv2Nz33aViUL2NuYKkrfvA97r65qywjWVvdU6ZaJY3g6WHMNdNiguzEqtvdBkEGSK",
  "key20": "BMBsnUi6bKLRJku21JTLZAHCgHhSh7GUJ3qd9g2mr8caUGSjLdgsLrQqHvpBxpPLLwsy27CWzC5ZT4zWQT3dfBX",
  "key21": "5FDfh3K8SjYJqFsqeyjEA3hxfVP6mZnTTsi1He9JTKryujN18iYvhP71pDYzyCkLyrg1P7EH4sk5omrWw5Zejbym",
  "key22": "2q2G7UCNoNxpvWRBBYfD38NoVyer8jVMQhhgDeagRyrvqi8wURGSyV4X4wim5FuHfbujdbCgZGu2mSJSyoSNp8Gh",
  "key23": "5bzhuyGEKcmpCyMVKugXsMngGdLfLp9k3cL87YVXW6CQ7JU1AkTqKNk1Z61nhAXPhHnXaHFCWsDraBLCHTKy44yF",
  "key24": "S1CEd5dKvaxKiGxJAg9ZvwSwpjJjoDuG2grEQTxvoVkg4TbPGa6pRHutWYrtPRqy2btzhN4Sx4KYuyQtP53Xwoo",
  "key25": "3GhkG3R4aTyKAQqu4kxczfomEiUUbVshUwmikVGkWfzeVTHTzKYzPbVqtncY6Vn9cpUkctaSHutMnoSf4rDGPLfz",
  "key26": "3HeVqAfdbRKrJZmGeAL9MdHLYGc64D6HiNY1Xk2i71YwGoQfL5KaXaPXd7FJZcHoXyWGjLnoCDeg6MrCxkBqx6h4",
  "key27": "4N33LQ14CrZbK91D62tkTBzDFP5cR618ujUWffF9i7qTmg9cQFNEpRBg6gbJbpiWNU9M583opgoYjTEtdSYWgDpU",
  "key28": "BXVn85dFDDfnLdUYRWJ2ic4sQDH4txrGLm9tagUcJhZuqoeZTtNSaAaeZapFHzwkQ9oY6ZBKFhSF8QC2N72i3QP",
  "key29": "5JWAoDzUZkcUR7F2AkWFjCkeeJiqMp3SzAreaCCLsoBn7VYEmpaesW9WrR4FUzry52AjPHydMLC9v64MXPnQre2p",
  "key30": "5FfCuRLToYTPgvYwoEX86huoNry5Q6tKymwE3WacyYRps4bxHXzBmvRj3BmzAQWdj3W3oscViF1QrBxPB8oXs2PC",
  "key31": "4u1vx19RojiG29kom1eEhVeF33n3xJtRQNtoStgnruPdx5CurNCGtq8bbJZVsqWstxUGsVi1u2EaxJGdie2BfeYS",
  "key32": "3kmFd5nWmVzU9ZGSbKLy5G3ZBdSvamPKeLB8bZuoD63eU3NoEMEKGU6NUHhhyFTbUsS3T5cER21SgqyG4MKJa4XE",
  "key33": "5m7gcynVGo9izDvNA9qpYeBRLXwTpYJjJipyfV16Wv8CmWYTUs6QFqBmpGBV1kQBgmydj7m9MGknpnCrV6PF6khK",
  "key34": "5Vwt6Koou187zR6NyX6WVqfwxW3Jp3fEdjeigYrBhpKoNpCQV5T6hwUgJgZBcRunq8S2XGyXUV7yXGimmfbghVBY",
  "key35": "2Vzr3DCwee76fUChBY2hjzsXYfAobdQMFgAWoA7qfKpYiL8wSGBvDBHptqKdbiynHi9oW3w7MRmAJbbYik2tP2XN",
  "key36": "tYdtUm9pMJBLTq2tTXCtddLGPKAu3JkxzbBHzKjtiLpzed5NnDshBQ96Bs1DvaNAKPcdhzMunVxfbQKasUGJdJC",
  "key37": "2P9FMGAs2aDEk3GaR8qSY4LH9Cvt63fa6fHBfCyd8RBhK5JFKywnEpnLwnJFxnj6uwHx3Kcv5Pvwroor6xfFiiuN",
  "key38": "5iF9JRnMun4ZyQLXhsYkwnn9pTAvPkhvDgAv9dg1c6Xf3E7e1YRFtMsoqucsgHPCMzQtqJ7y7MWwWAJ3i1r57JNY",
  "key39": "3ipqVa4eXUPw1irQaDdxiokb8g1VGZDQhLRz5woykq1km3tgmNftEHvcY6umZao7scfPgrqPxFGCLraviD1bfDbY",
  "key40": "5unafUPBX4GV6xGEzRccHVWMLe1ELZ5BDK6hP9DrNJazMXdBGEyMowV11j1isf8DZNPm2VWN2pX72XoX6gTdfASF",
  "key41": "25We65cj7cviBnBMS7wSJuJvY4i5fTYN8R1oV9dzUnMntPGF4k9z8vzbsmRBoiHEFukkEQmUApzshQ85EXayYKaN",
  "key42": "3r9yug8zWenKAB5DpR6XTY24ccWq1KfMaHUmzRb7pNojVUbrSPdQVbb2r6YJ1eKE4Y9sNijAQByLZTdEVRbXseBe",
  "key43": "5ckzJfsHzzfmxrmq7WG7RV6qfUBsp6ZSNbMGFoi39PhFWBc2AZa2VBqPciFgoPPg55dyNgok1ePXAN8PwS3PWMvC",
  "key44": "5rLT82cnsqRC7CyPbTDwVtqTP3ey2WoLEMANd6sdBh78kLs16vodkQMUaPApaFjbeTNQbjaA9DpD4Syzyu3o3Uke",
  "key45": "5XRr6YoKy8nQP4W1tapHqKo6QEhb6fHY95HQk7f8HyRw4DmjeVY8ztcpUVR9auiN7uxuysFi3gnq75yyH9hGs5n3",
  "key46": "3zHM4VB2okKpVXL4YNw6TmYC3mJQFuPXWYiHGh5253f1NYTxNU3SintAx6Jgxft1MTc7sVn4ZTXDWgd67MzrWJiN",
  "key47": "5xdXKigyvXon9uLLmXAwE8kaVQf2RQc14TWrmnyqPNLJBLQWfibZk6LzMTpF4XB2GkwNcXV6yMXEy7jx4TLgB7eN"
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
