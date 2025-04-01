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
    "5Qpi5ndrBWWH1pmDQikpdLLr2zDYaSkHbtiUsfdy5eKKHaENGqLBtCphGaod1gi4Stj2NwkkqMTDhadd5CmsLcRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yk2aSHpfaaXYBmsUACLRjJemN5TwMYYpw3bwWoV3JX8mj2vutsbnobJ8mvAHg4ZdaV2aHXUCfmJVAm2VRgzKGyC",
  "key1": "5FtwxD1uVpCbwJb1eA6QgWYbcMeuGgfXnDTzciWGpKmCPcUkbv5YT1dxsmzEMvMRF55BpXDUFoMbj43JmQRejYYg",
  "key2": "2kLisHYCtCZydd1jVZeDs7qLGLacfJpWYnESG8gQ84fwVJ8zkaf3Xour2eNPHw4WmW8hD1izDMGyd6hKPaM7L35h",
  "key3": "UzGv9tR1mwLUC7SDcQin74FX9HfKUzo3TvFnTjyuECif2Vev2AtH63CZ5XEjQTd3Nb6VrWvoqQ5pVY9R6y67W8y",
  "key4": "2FYe25hMebjv8Fq5fvjd5GuVBSsVbpwsFscnrJqn1ffEQwomjk8HUMWjbR7Az11vDcu9Wbp3RCmAsCziMyGUwKuF",
  "key5": "3APPA81CnxpJpvsU68yMrKk7YZC9yGpTMntggKHhgPnQFQnKiVukm5LKEWgWMPggGrRqwd36w3Pgaas8oZfgAKQ8",
  "key6": "2M8K3eGuCcmARYjg3Cng5CaGxorGLhhsK43uu5akDHgpPw2A3fKWvSvyTBHkXFnEqZtuoiM8tqyv9qvg5K7sMFTr",
  "key7": "2hFDkeNnDX6cPsNc9fAxi1D7tjzusiokFBPdpep6uHBuHmv2nQ8cSH1Ee8TPYoXCWkeix2qgE58JtgYMWBbzRzpf",
  "key8": "3KY2itLdF3hxEGy5v25Bg89416Qz6Q6Xvna7AbsKn9sCdixawVqeWJhQy7KadJNqcinwx8ajodNRPMPSArdn9PkJ",
  "key9": "2ww8eacbES9gVeAjcH4Lze2JPXqPV9u4kxvKZWvPJBuFarAdsAMxHoYL239hFt5fzPP8QXRJM6c2V4FPTSRE6T3Q",
  "key10": "3g6A1b5GBidbtFpVUL9cCuYCUajmnMpDdwK7XcccvBUnMXvWNmV6AfV2kMyqQnUXTWz2fNRAsCwa7tc3Vuw6jCFd",
  "key11": "3CcWqQMR75Ja3ByXqkuPE3GtGywYsSWgLZKZr47718QQ4jfWhc7d5JBf5p9DGg4A1fGAmgVorsaaoEMKqbJK5kiy",
  "key12": "284Wzj6zckxHBTnz6Vht5BSQWNrXp4jjJM7nceJma2qtFQCsSTtD1GZqXK6i6CApEs7hhmFjkbqnw4h4RQAgb82b",
  "key13": "aYWaN4Tw4B4LXNRSFHKpj9YAyiG9xmzM5poooDTyx7SKwzENFwXD6iGKpKfMKNnVp7uh1SQMT7oiWC2kfzGy7Xh",
  "key14": "4kXMuREFnKo9ZZPS6jd7JL1CTxdxouSpAFwQ2WrZuYtnMtBxMw5uSbhSACxWushHAFdgwxfEPYqo7MG86n2SUzjW",
  "key15": "3NLTz3JTwe1jhfoZo7PPx3TZgvpgTDRDhEW9ywjuTLjaSsfNjsPgL2kxqkcxjin6affR1RXVpywiMevpgiERrDFq",
  "key16": "4kiKAEsmvvsrxrVhzjy3Wea8ucDZs8Yqj5Gyi43cHv42XANG6wb2PXgprxCo4Lqg5TiZNbfB5PVQq5oVgBMriDvi",
  "key17": "2V5GQFdYmnCZF7m6FiQJACTGyoDBbdA1mXHyZkatPrR6mRqByi8mataNkLsNZA87LpraUcrPuvAdtZEA6eKE2NA5",
  "key18": "5bjt2JuqnfSi1zeoc2vtvqzEwACcK6SGKGLrmwxc141aHYX2RTvZL4dzStLctfVKa9tynqx9zyDGroChRFr4vKzb",
  "key19": "2y6ySXKRtySsvhFbScSXMU2oUSGH7Wd56hGDeJNXsUhQ2D1by2ZENnaaeGxZkH8GvbcPQmNDBiRb26J7L4DZbMiT",
  "key20": "2oLDCjqibToGXaQujRjtYvfmHXP3kERAyQJSUoLpjaUUMxS3gWgmTpiE3GKutVmozWosgfpg4cvgAPuUQUftMXJ2",
  "key21": "5hBP77VjaE6q3eq8L1hW8SQETkqLcqg5Ft1VAk5gNZtHi1ULmFnSHz2EnKpYycupGMWZ5Ti2Ho85WtPG7UsZySPS",
  "key22": "3HmnFxgTeipaa2GpoigxipNcR6ofSFNonB8JCY2qgmVuSQoi12R94S6KNjZn9ShLLbiLWorYsh62WVaExF6z3qNP",
  "key23": "2VAGoy9n41ASzLnPngKiCq25KMjytEghsnveiHYiEtqcTqEJUBsrRgDCncQhejXv1yvSB7xVmjSTYtBQVs5gUKj4",
  "key24": "3Hp3BV7d3VAEqW2uqafNoTYCBuPo7LxcfFiFegBWYco6GpAmoqrQt7CsyETDJEj7xVvpvfyqsvDFKDtFzgJNfj6m",
  "key25": "4BRDSeGKRhM1MnbAEwkxTNyT5aC7KpHbUfWjsjVNYMCbDUaGgywJj8q7RjZqR7LrfztgwL3g7aioTfvVksf2XbJM",
  "key26": "4p2FuZdNdbRWyvpEZGLrQuHXHSRmJcRwH9Kxzx7kW5xNESma9GRfruvGZoG2LXy5UfYUdmzb7vWvzyU3k4r55c9R",
  "key27": "Kmnxa9prtzYi8gkgBgpoVB22rKmBUargqpPBAuVFqwV3jShxPjpAMQ7oXuHXHDLSBhrKhhtDbRCPY9XnYKKTSkR",
  "key28": "3eDZ2ToByFwULfPiUivhHv2rmLhxqbuJL4zmPE8qZStkcQiMo2UWvKLFanCeBw9XajbFhyYw9zNXrqoezPkftFKT",
  "key29": "5dXvrZbqMNrLTdLvt9aGKrKUcnxCFjNmf1xSAw6KqtTB4NWCY8gKVTyweMNkVE2Ave7qVgrUK7AEjq95TmAgbj71",
  "key30": "2mCxod8cxu82sNCuVHiJ1sCt8fRbGjPxjqrQvyeMUPffwnq87e8V8wzjAXLtC19v3GtkQ3pC1NhXFeVW9ijjfNHx",
  "key31": "45kkrSm8HFosiiwUDyK7avYrKECmYrAA9NBbfCByME5TVCWJvrQqe4mQ42dpxiwRH3dst5ffq5N94PFyzBWGUeAB",
  "key32": "9LGH1ZZ3qkqr11E44ymot7jvkHmthh8NUdtxaXqg4fxKEWiQMj4P9qyh7sgkKNenfFMgaLd9LCLhfETY9jJHDtG",
  "key33": "2iz68ZyhPcHAHLtyFrtDC5AJC62mRHf7C4zV1oaDusagMdkeNKHv2jw7LNRg8yzHMxPxnRBcDop7T7c2ft4RvkiH",
  "key34": "4Ko9Zb3CModEH1MTgGDQqNmjXP4sMMUrPMSTEVvt2BhrK4TCrH9uMNdbd8BW5NLr7xCnm8YvKUDVvaQwWxNPXPUQ",
  "key35": "5TyuHyBzrU477vSiZPdKzc7WeXdfRWvoLpFCZM8LyRT2N6Vo9iV4ejjt6r8NCH6ueAw1UELtrDDKqbkUDjqf34qJ",
  "key36": "21nyf6qYPQBFvgxkpHun1F3V8urQm9XTyV8WyifxE3rY7VNGJYPNKrtAP36NV5UjB5kq8FTP6W7wcnMiEYadajNW",
  "key37": "3CHAUhTNiMt3jCfw54B2eYVcNTq6PGEAqhdgW1buTqPDzANzBk6ZnrEnJiAbstXUqWkpVZagvJPPP7WwYTjdMsni",
  "key38": "361Mi6mzT9iENgdWeWde5gRxW2Sf5U4DiQziSoLdcJqUVFH3SaKJFsNVHshc348NY4AviDq2xxzc41viZArE8ppq",
  "key39": "5jyc7hELtTdRh5ndWgaHVHUcRf3Z42Ug3cHEPTcGseQTdvw9NbqDZHyrYsyvGUrCYj6oEVS3dbrhGPGDwWaKeBcE",
  "key40": "5EGWBsDaTJ4UJMtb5hRM2WnHPTM2PSXhBMSRQcEg1Me2e6di7vr7KAnrngHNNEk55bDwtuwjA8uuMCHU6xHXKHMs",
  "key41": "pWhrunv59dymSDnFBtCfg465Q3ziC7AdRtTyzGrKJEgqsB6T734ZAhEtBe553TTrKpuAP1BzKm31dv8PiSPJb92",
  "key42": "2uY7Ee8yTzR7GKj5doLjwWNnnx4UoCpUHEiSddtq8s45ZL4jbBDZ6rMMLX7Dhf9PDiZmYdafcpz1Qjv9hF75wVcx",
  "key43": "3TQUxsLERjbRxKcdFv8Bui7hkxmAGWRLJbEXKj7bzJMgkmouQKmVddRGw5g8UKS4gZtxbxFMeaJ7LtoaRPYZWBti",
  "key44": "4qbUBi1EHSzi2WsUDrF8uqKJcdcTAYsLTKdAyqdmdcyv3dSKvRGcEq7d3apHwim7UZ7J2C3UkJ9s6bpKhjsBMwYM",
  "key45": "yNuDUBB65vLaJQDvoV3ZqQzrDp2ej8RXHhkTUze7WxnP19icvLX6TkuNayd2BNzWrD2HawNae1fmfhkXsJJFeBf",
  "key46": "5ysLoX2StBFuENfdB1h1qS4XnfZURjny9utGw6dJPYueVq3thevuZdioF9SdnbcERwthSGwVTTb2uAAoM4vbRyxV",
  "key47": "3sGUYWdBCTXvPxbo7hvd6YeJczbNBkT6BMnTZZRktZByRxkLLpakB2xiHnnzqXfuFrQgPfpbHXSmFnBZm8UARB7X"
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
