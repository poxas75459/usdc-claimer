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
    "39f9PXtAMnAHiuy8zU6BBiiJsK5vh8F9RSuApU7R3RYqYNbQmKkBLRBKKKYMfX8mz4AYTjPUh7ZvtsfR4EChuxdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d8HA2eZZ1pSxyHR3T2b6tQqcEYjGZvrdA23kfqsE5JaEH2LwNNLo1RM7yZf9z8jVQqg5HBwfimxkxbGPQLTuD9m",
  "key1": "qgx8WBBLJAfrGAwiCfvuaapvGqe8fHKn1ktPK3jh7i4DNnu6Bug8U4ncXYmc8EseY1wpEXsjf24f1Q1vAqm71u9",
  "key2": "u1oZYzFFmMbejcu66JGnjYAKE7RJ1nexajrz4k47bPCKXFmKt3HokHkWKhhQY6icAHFd5zpS7mh4PtFzmDdyN94",
  "key3": "2V4NfMonQLQp4MrAG9UW2yrGGWvDAvZvSXRSFrNU3YkTmFNtK8dRaN831fGHuaB93jdFesUQq7idZ25HifXDN9eC",
  "key4": "2ZrxkyJM2NkGfsoQTUnyKyYfqMuh8K8HSTd7ur4EoNEx79yuX89P8H2o8afkVa7hi2eJ5UJfC3pgSqR1XuHaDGVm",
  "key5": "4DBmxWPbShj6LK1KX3ARJLtx5FoEuy1gZqjFSnQLXvUtCRUzAdH77EnpJkhkG474sZD93fUS5dYjvQQgdX8H69Fb",
  "key6": "44TF643p8rrg8xd8h2bXnMUiSzTHnHgvmhmCuhcFcTqcaf1unnggqqrTqkpo1pP9AyGR2x8ZnBXVFQy3PDep5312",
  "key7": "4emuzU13dteu6LSJYw4PLjA1iZ39MiazNAMJEoaswp1tEdaoBr99J1sHmTixS4SJFBqSDbveSWCi1m3kxQKyp9cH",
  "key8": "PUU1KvYaW28KCy9hHUEUE4EMDWdzZcshm6azAbVDfY1cXeGhvMSWJmD3NQhntj4TYGHgQ2Qssq4ANfoeTWZPV9q",
  "key9": "5SySrk26rpisvAyECmqBgRhg6x15XJwjJxp9VYB1scJJRFFjNBvBf45KWAZP3gUQP4NouDqZuK7Vc4oyowkGByHM",
  "key10": "4tiZCbJroWPcDETWnXYtvRSR1iui8er6TkjwSNduCAzcbsUJA9PjWHxVs3Qgb5UXKkiWtrrFwghUSitdZLh4Gf7G",
  "key11": "48MjJVciFeCpQqVLZHDuPUWg1DLqDfPs99Br7Magh4bpDdnUQJbnSPtwF7GLp9YyxgzZArbuoYXKw1ymTHvsaVxk",
  "key12": "5XyWqZhL12dA8nm2sje1CoRnk68tWL3UkmPNgAGM4Uooh55HN5cXx1jbgaHFHzhujh92itcdf2Sm7HGD2U9oSV74",
  "key13": "D3Ck4i3SAorfxzw4rdXWrF4gDbpZVsY2FnW9Q3HSgksGDF8vt7yRZ8TNcJdrG8XnxmNSDJqfvv341zcmEM4trWY",
  "key14": "2GXaH2YjFK9XpsuYQAHwwE4vLFekGoyWyDPxTXcHssTYormCnmKyK8cx8izWjKtLR5iKTTFfrttWbyiwBzMxRA6o",
  "key15": "2ZjLDFWvmZahAx6MUYwkVySBPhDNgbxBmE3LdjE7Fa3WaKzxfKdQe8XCgdTqMRXT3rDo7F6eT9PpCiBVPwRqgRPu",
  "key16": "5BVMBn6XtHNJoW2hjAYMSfzVR7z64tF6LGzyKvKAb3CeQweFiCbBgfNANqFHsDQngSZNw1sjo65zm72Q6YskXuy3",
  "key17": "4UjReThLBQne9xWH7TCGbuXP4xD9mSo7U9rHiRiJBCnpR9Q2ZEdNmFe2tXr6jeLXSWUB6dVrqF7cXWgJYP5ehUS3",
  "key18": "56NTAtPkSCd1J7RmwoCAvFSZeyfckSBMuxQWQeWkVRwTZJ6T4SrUj1qMQpUJRJzbh6o4MdWuY9i9nNZVUvRzgvTN",
  "key19": "3yjvbJp2CchfpnSgTHsHUpVrynLDXB1h8STefx235T6YaJ5Ki9uT71uszVLAxpYWFzvffeqDDvnUHnCsraksH5zc",
  "key20": "3nUF3hP5DmyZoT7oMW49Ftwhddybghbv36nM1sFZnUbsunp5apgcCvbV6cbjWbJU3BrhrP1iuXQdEgQxX1TShPZk",
  "key21": "5WydZbAtAUTACSjXx7udM49r32dxEt44XdDNiAT4VSNkejaeoNLiKur1gbNcT49V9Dui2sCuSbsxuCX2BDmHXcFj",
  "key22": "4gickKh8x4CWKKDjAbSaG2QVThz33Cgw44aLpgmv1oU2cqFmSDJiWksqHyZPcdbPbMrJ646NJkHKPR2SY9EHKPub",
  "key23": "4dKqSreNEQ43pLp1qNejBKp33FdYZEWAXWDvsrhqvutKGQ6q8EbRZksTyZnyxhrvvJLyyszqkct8tbV1ebHK6jx7",
  "key24": "2Si3bBt1BEhnshsqFtCWEM7jVnoY2jSGV5RwGTJZPVrdri5xyeB9ekbSnR1z6DCYnyC9rewMZnzLy1Wm1zcNKAey",
  "key25": "5w3S2bJgyWrbPYEFpzkVBmwo7VJpRnHsoRjauw96ThzA2GuHcHMjvCS7gk8s8UYN53zWLBmPnXnQMV9Q9VvMwuQ3",
  "key26": "5TdhYHg49MMHAcjCjiX94Yr8gpY5XXCUqPm9r3XkiHoiT7dgfyvCxp9pUBVvBuWQzMx21dgyL9y2683ecQJYsUAL",
  "key27": "53h8KvhQWXtHJkQ5HBQ4gc7fmxLjAxWDnN3gH7NC1AeUHwQ4xJ3SrvmZ55Tdz1MVG4snfqnqzMWCimgtE6ES9tk5",
  "key28": "2JteHi9ponW2uw1gBFJ34AMBc5b3jNUcjxerqQQCenH1h7esFzqtFftoqVNAH7YKdAghzqGB8Wt5aZxh3dFRy4H9",
  "key29": "3f7aNcud7Mn8Jjv2vq5NLBjaZv3i1Hxi6D6UXqH5n6VhD7s6ERTE6jRyD9MwCku1bDm4a8FSGxxLiNrnUcjMeycV",
  "key30": "4ZJGoxe6hMpbiLjSdbedR3YeWD6tyeuRtjd1C7qfNZXXrBfmUGsRyu7Vf2u1dq6pYfXEKD9pUWjibs9sMCiLhbux",
  "key31": "5Ui6xDv5dVCv1WLGHEhghHPkxnkeBV879jDmc4PaWgemnej2m3EcepAuFvEUr9AYpKAMW2dywFrL9N79oV3JpP1Q",
  "key32": "5oWXwL7ZUomh4W4ebaCCovwZycSqHihnYyQ4Ub9snQFndCThUaXXK7Jgfn95ZWjgeMW9FoS6HsBv8fUNE1C8jew8",
  "key33": "5hQKRcMUK2syCiFUWKDDvaLQ3Jrt1TpZbYD6cGGu5m66Vt9Z5mkzZNACRhDz4ykvSKeuzuCEZLfrRPk3tSokTbJp",
  "key34": "4BsJA49qeh4LeHPq6QE5Uhf9uyKokM3ePoBQEsmy8sRdopNqAXoR7YGXVi1ViJMCEYzVASixnR6PjJVKvKLmCmYf",
  "key35": "3dYMXxkwPJ2At2wdrKGHRti4wykpJgvixiM6YabgCQJfU4JgtumLXdWrefYkvPQB1ymMcvTP3hyjYJj75q44iVQo",
  "key36": "34PzDKfUZKMkVo5Ewb6uSsr6md5Mt6beumUTh21PqjqwN31K7C66V138rbfL1KkrcmwNai3Fw3AkgUQ3QSV4h8HV",
  "key37": "2wYGEuPPiotPJqRnyFV7VFcBGuvEZqgSfKRcGxW6XRR1VPRkRkKd4UHtz6QwT1j39cjigPxP7BXw8kPnbJk5zPDB",
  "key38": "UKrBKfet5FHVZNZeEUC5qpeAv9JQd5sh6FnQ43jRyEKp599wxm3WNm2FbbXKR4WZ7VqdZx64Ej7QXWJ1ajvxCNs",
  "key39": "2PB2qqktHSRN289ujLKcKm5U5BGB3MiBcXM17g5TAL4UMEww9vFc9tG5rqutvnQV2sos7FNqRmxYhmq9muNhtPP",
  "key40": "5aZqCqMmTqH28cCESMYGB7WfREaKBedKi4zExAfp4dc8A4P1VyspnXAxhznNLojeQTZhBPwEkYdmyoWSDgbhbuAn"
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
