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
    "26EiAx14AD9pX6FyMV155kN8zC81ohcGw8pw8a6qXnSUs4T7MpVcshiWiwE96vqm96vv6EAk4uZ3Y8Sh82yepNoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVnW4UTXAvyKJUp4pkLHEGPqnsHQsyMnbybTgGuDZASxhVfGp5ddzLWbrWsmhLYxfNGnEXSnU246yhmHk5g22rS",
  "key1": "4H4S4qswjHxoezuSrnMFTDntcRgFhehtMyACrZ8LLhuU6Yg4hshJKgLg7d63iJxf6ZT3HUWPy2dL7XTpJ3ScxfA3",
  "key2": "5GknygH3w1HoduVKCyPNjUU8i8uWFetneKQjXZpDNZ8GWcv4CuoW8KvnJb8D2VkB3uV4wxRfDfRiGup7Fkv8ugR7",
  "key3": "34h85SQPX1AXAkGGQ3amfna56gjFYgsgEuVDq7nueKH2n4W9b3EFra545KTDijk634JAir9PHM7xMNJersYvJqGh",
  "key4": "28Rgt4YquSVTUPUZDz2SUm6FuLC6AApEn21L1xunhzZiAUVT7qmcRMy2p2exU4A3yMjqcSffA1TRJpSwcW9FezPh",
  "key5": "266mvbPGsZgF52WN8NbB5ZsaZWUygyojHaNRAjUFowyMrZwB2ZmYwiDxcWox514pprgfBP9gGLKrtYCtCVkfpeRK",
  "key6": "2Xapb9XrWVPe8vidqjXc92ktpVhFwvPGyT4pvUb2ykZvnMqvD4WG2tSFqKyHvtBiJWDhBTGmjmguv8ky6Sp5vWSx",
  "key7": "4FWErCR3YZVkiTuBsjfwE8wHMpvSJapWJpaWiaFXLL9x3Aw2a3jWH9DWDxrKS7qem7JyxLKKAQPWjP4GHNMQ2cnm",
  "key8": "4NP1GYhNnugDzHdMSZWeR9oDeSmtAgzdLqPphxjWUupXjoCpzeDNeHu7zX45C8NXjEYUeyjEVHaiQhrZKVEmKLSZ",
  "key9": "499eJoEU79UytyE5r1GvjFm7cVnaszQNpzLCRWm8NcPxtLk8hiYJCk5gJrc5UFR1N576Ptdu6Nh9kK2KJRt8AWAp",
  "key10": "56gyVGDDuk6Ud4djSBNoon6y2JhoUMkUZnHwiBmZzgCcFxT8b29uWWAFGHmzpN4SNJHBQRYZiwFpg7YDanvp8yFn",
  "key11": "JZGNoaw43URevDHoqSezkpL95uSRZB38EFk43UBUjLBeT6CXA3ydQR4Mr51gyB2BguzT1q3bA2NXUD2cU6EQ91N",
  "key12": "2ejmFXJv3SyqiSrWAgJr97LTXVHCQRL256f9YywyPGEkzEKDQ1SYW1n4HTsedpjMFzJ6RbfxPDHWC3vtZoPNvAvi",
  "key13": "5Gq3MDMuce8XczYB7CpUCT7146mMG4ge6ZC6SSKCe8Y6CU4LX1rC27sFkA1ecFYSYha5KSGpQAY1ZcpBJUupi6Ex",
  "key14": "3SHDB3bgkHJkt4VsDeR78zDvHTiVQsPFZtUE6WDiPmbFELe7c4qXS6f93WE2GceH4RGQBRv9MmnWGqUu2qLX5et3",
  "key15": "2DEGEEsWvKQ89RYMorTavJkgmfJwfhsQhEb8rDYfjmatULeyC9UjQsGzxZYsEGVFQusaHAdEj8tuqw5sErGCEz5K",
  "key16": "3gytdCg4C1MFkBfV4q4mrguEr7hU333PkZqDE99vPCrvv2fa9iNSwRYk4WNud4vLq3h6DN27cS1uvREy4WvKnN7D",
  "key17": "P86UPL18L91An9W5ae1kpPA9XGocVjQZTWTAaECPVpyfNaEvBPQjKFeU2wjp91yJw2htjBxCqeSD7ZrWEDqhfgg",
  "key18": "5uCtfkQZgjPgtEt9nLPpx3YrHGvvquMidAMZLT3LMRMzATzJWEDJykFfzpWdbTp9B4uWK9A5HSNYFy1athRmh8zc",
  "key19": "b9P45Vx4GKYdezEKVPvdQ8QFwq6Bk9KhaK8tEQUTSvZi8xbxDMRz3LnbDLY4YcrhHJa5jqXq2ZGS8LDJSEN6orG",
  "key20": "5SMkycrd6oUP9diHXkGLqf6yJrRWwnCYf1HCLYV5E4ApZbwKXzoa4YfkH1W5q7jHpLsasNsrbDMYhAkCgMThhGEh",
  "key21": "29LXdLBqKvsEBqAVyUQcXiRty1eWD6L7jrVWXE3fCjXLKTaSFs2YH5huqnb9oA487iMr6jus9KQhWX3xMquNYBrQ",
  "key22": "3vSDh9rxWa1683H1fXsrTZiTFVNLFKYvCXV32hYupSEXsqXudT5g8T9tsMzT8xzvt5fCdZJgG4L8YWX2rurDqUme",
  "key23": "2yvx1yHJKpGAv34x6sRJDA3cY1YFC5B5hbDAvq5TCmXLvtWg367z7LGfmNE7ijKFEAuyYBxWzPohMSR21jrYyP1Y",
  "key24": "31r5qYaT99TDbk9TjRwTSSAEVHbX9ymcDVUwGeYTzQDQsCWsUAr1CgqzHzu2pjqyZVnRXw9Xcyh2BFAs167vXFd5",
  "key25": "4bwzg1rbjNRu3THe75ABzncXo6SRdBfde3SUtT7bHqeJmBiyNMAMKAsx9532zAy4HyEKGQizUqoyujeaCB2w2Ci1",
  "key26": "23SWPq6XckAPAFytF994adMdSi4UtQdXfixWYCqhetHze11Cvw5Tpiq1CyuU3dsQP1DrjVp5V7Qjp4S7vDk7Gmuv",
  "key27": "2dKKniAvPWWqTzhAcNkoEYjuzjg57d5957RfSLEfwWFDY2XHNSaPBnvJBNRMqzJgiwMasrCTP1Qpic7p4H5qY62k",
  "key28": "3iiU1pomaAv8XmfeRiv32nFsx6BTBH9V6erxnDFQtKSykFWiuzCyUZAt6S6tenukd2WWZ4w5aLLXJd41SUQqiRth",
  "key29": "5FWJyNBsgiaiCxc3iZeVmB8DJKqHDLFZ1GuyvaMtBsvAfH7j6EYfzTieZgiTbLi62bhxcZTKd33LmqaTeNa2GUG4",
  "key30": "NUgvDnp4rWsE6ciB5pEEnJwFUiYfA54EyJLmDcHgDtXdibV48g21vy2Ma1dKMxjjW1EwDkCn9oZqVPTZWL8LCHg",
  "key31": "5nnUn5LjbS1bYmdAzwgukD6wS7pL45QVcBGoo8qMoVDdnGGEAXkg9kZzWUoVyoVPKNQMeeMJeP8noamyudpJTBCQ",
  "key32": "4iGejyUwFRtUbt5RRqifaUtmgEWPhZbEzEJCPnxkk2BG1e3499HgaMPteKvxXMm6htb7yYekqHg4NEpH6amA7w2N",
  "key33": "56PSu1hzAqgiSk6cH2NpQpGK6S5azMfYrjKcF1ZRKL7oycNuX4f4rAHFC9dFP7nrr9a31vNnNDLU7KgpETZbBbgy",
  "key34": "63XXMEV4qkWDG7CWh3TsbhDKkMKPwHacKLLjuZdDmJHVL4ycbEYiGeczxCTPenA8K1ggBpYzQeKTMj8B87yTGFTS",
  "key35": "nqmKwdjwz7GNhi93ESDPhGVCPV2QJ5LwfGJJiwBCVCgCR9dDQbNVsZEbHb3jay6D6dwKYi4iFTBbXcqKSRmuK5i",
  "key36": "4BzwJaLni4ndS2BRyvSBuTiNYfJH5onojhQ6Zez9VZiLanDXquyTUc6szDAdKbBxopM8Rav5rhj12ogT1U5PmRca",
  "key37": "52g96kU79nrekk4mAxae34wSjzJYa3HgRYMozYyPbFn4aePcFxQKY8PUnExyw1GSo1LW5xqYZ1hAFAKCk6DEmfUM",
  "key38": "2NhGgBmJzMGhM5WTS3EzTFQnDF7wnFJ6wYCR79djy8WnuG9nCyjvmPvBfELnVDcg8sNUsmzPiTF6HQ6RvDx94D2c",
  "key39": "25zekSjQ3wxsqh37mPuu1hoy91cTCV5kCT6krabRiZB2ngDSDGwzqJ9PupjyoepKh5WsjeznENitD2ALNgeVmQkY",
  "key40": "3VBTc1DdxhV9hq2dkJdF7hw6aVjZwAzAXxiVRrw1iyCkMhkCHBWmQcf3W8thq8dDr3Vp5LRQuH2efXQcw5cV3rXs",
  "key41": "2g8thA49WfYnCetqWnMnY8swUJbYuZKTbERNaZf63ne6ehqgnqhgTkzuzsVFhUFKM3VLynDvJc1fw5GVmMaDYrzn",
  "key42": "492kTeGb88AXfkmvWgYQreXR59Z3fdwSry9go71GXBPU6kb7A7DpG6mftvK4ES8m4A1UA9UWnLBc8NeqyUJoETRG",
  "key43": "3ZpTdYgWvhvT9a6PtzLGBkMjUPKC7L2Z5qGyFGZXVG9eSyKzfmePdLbcDnXEMhDar2d7JFAkoNp4iFzCXrhKi4Xu"
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
