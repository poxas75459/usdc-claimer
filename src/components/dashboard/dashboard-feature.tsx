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
    "5ihEdy6eqfpa9bPyum6gtkTwn3B1Ws7qDLtLEqeiZENzucA6NkTcEdqVBniCBZ42jD8ML7RWEnWnyRHcaxTxs8iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvHQvM9w9H5F3ATyyQzy8XpeSyhHusN2vFqR7bdC3MvVDZ1cywJE3CEiXVAvq8Kqq65dH3edqKfBSKJ9FXsyyuz",
  "key1": "5bT7xF2SawLtqL4j4x4Z3xWA8Yx8FQQc5ysatuvViuopT74WdM5X84xJ2wVQoMtnYvZ9VLNRNbQst86rjkxWDApT",
  "key2": "2pXYMGDgAU2pA44VqnBELLA9HKduw48QZ4qeTe8GuFSansYYXcSThnxYw7XYF5uZ6QjTHGi8A1n2T9rAJW5siSw9",
  "key3": "3P5fUzBi4XZU4ms7rnX5nFDzjGam2seVQpFcBPSAoCw93gNgt1VdzYA2nMZiuRVnWzjhkk5obyz2DdLjVkLWeiRY",
  "key4": "AorJNUnXMYT4VeM3mGBTcrhZdgntZ2M8hfU6kmFSjy8YEAokubrWvTnHtgTs6NuaZ7Vb3VbioH5RWcAL3H8UvEV",
  "key5": "2NZ1teo7aV9smrLM13gEw5KkZPkbqdUjSGTqYYarG2e6UYWVv7vnV1p2T44gAcyyX47xV8ebt1juW7N2CR4xgYmx",
  "key6": "4aRnHHA2m6tdSHpRRQoq31YgwTCUaS77KWaE1Dp3sZXrLvBsZd258dwVq1VC2eThq6pWhZM8U1XvuN8aVRUX6TqV",
  "key7": "CQxssy234Ham1oS4Zn49MVqmTcsn2AXw8GrRvYBQJPPz5WTWTNJtXYZmN2R8rrmM9KNXQeGjAwSRtMih5SNgrrp",
  "key8": "P2BNFTPLuzMd3vxK7KLTXTgYMQKP59tDNkLYtcBhsgb877aqi4YDyAqziDMjU9y4LBQeVFWjfjhSa9qpSvp4Mmw",
  "key9": "477NQRd52oQn6yfXvkQgDE8HtT1nxCZyXjUXZ7dEJSuke6p5D2AzgXyTFLDATYe4jXfj6NA4eZWv11G6ZXJPcR3W",
  "key10": "31XMZkGvMCFzYZsnYNqRmtSMaVPhnGNs8fjkKhxNjs4VcWchSWedBcrDjXKaUDH9pqH8ByUw3Bu25BJ6BJyz1xRY",
  "key11": "3sa9SXx6HpgPhkiTvhLqx26feVy69brrS2xsnjWG1Mo7zUWJ7Ypt2wqTZnGa4xyA1KSVmR57obYM9dNVuX72vMyy",
  "key12": "2geN4b2yo9ZcUfb1fTH3tzeGCudBSh2Tn4gkgm8SP5s13HXDMWEgmPz79W1fCZQBZoek67gzKf6hcRsFr8yB8cPr",
  "key13": "rJqspE4uv5mobAcCFGB9QLauaWAKy3dpYoh5BFvV86ouPxcoVFAQMVFVkmDrfSMtkF6wVvhtYAryTcmAvAtUGF9",
  "key14": "2e7iUxv7PuNFY2XHaDtLFgEadeWFvmnyQCkoTd6LiFHHeZXYtpg3x7nGpefCdzFz38MGoWxx3PYZMYm2ejC95S2Q",
  "key15": "5pyRmacQLdjLqNTJFViq1j8vtNCW7enJd33mwBMwExwyhVnLqAFMn1WBJTcTCw3GKyfupNiVzkUPGjXJVFEKzQSt",
  "key16": "3BSwwzfqYrRn5NvDufHLhsPJsVUVmtJgeTdDdZDXqCM5DPyDfBFwBmGLnoWquW7Eq1iHHVe4Mez8ViGiQdr6UXuy",
  "key17": "3pLBPDQ88nvichB2ZDAR8Gpxyc5nDYgCdyBmWCVxsfMJ5wiZRPiG8qVjAJbMgLcPAASDSkxwnJ38mLqWvhjPbo2S",
  "key18": "4DuYEQcGBj8StMtXjwRLwPUod5kLDn2ZWnQmHo8pJyvcYEJqoVFdpbPg5UA5TMANDtUpArtBnipunGeYbTRw3Xux",
  "key19": "Ur1745kHRiKPU4HVUKCceaXGWysjKHrGz5ha9BDMRtBAyhUDCimxaNo225VRs8UtwBDieC3XU7A8x3dfgkWNLua",
  "key20": "euPeowbXFBYHQhKYuDgbRpkD8TW1fsJXSvj75C2ZdChuttSG1WSTVDGPqsotMF6VUGEpfacti1PBqSWK9hMmBe7",
  "key21": "5X6ZhSrbNV3zf8oEY4cEfUT4LRMZFpg4oHV5DS15PzdoTs1nVQkAgQiUdjrjw9NPrQk29fqct97S9gsUYEPkZuSt",
  "key22": "28uQsZEAkiWXW8bz1HQCyUFAMignxHTrz5K3kRozGPKNWyNisMZc4WiX84PrjPABpzQh7H5eP9fPpmz5BSL9ihUr",
  "key23": "4Ed4p7adPEJVzS9bcn2KvU37Y52ZJLg5jY3pJGijsygtCREnTAkEtUa2wZw8kTf1xjHDKk3LnDzwwy7HHrVyPZZV",
  "key24": "2S93cxxCng35hUP186LxqfKeUpfqDHd2LMS99Vyv2M5oLXcgv6pkm2KkFPGm3p2W71fPJirdjW5N2vPFD61gpo39",
  "key25": "2ruQw5LmfGJCn3LaUp1XsMP8fMAZZhCKzCdJmN362VTgzbcpFxu3gufxd5TNBxFT3GVKb3WDGQeEPGn8bhbXmH5C",
  "key26": "32W1SxWVcSGyT1kMAj7EY1eWA3ZQoQwddsAcf992pjfi8kaGdf7CaFPvr5zsrPr36qhB9244xkhDNW4jadkqwAe4",
  "key27": "2AUzwvj2qX8iPGCiFHryLCq5MxaeeLF6jggH4gCdvz4nr284SnYnFx4UEks1te9LPxQ8Aur1a3KWthNk3k41TDiy",
  "key28": "2XmnJr7DrVsfgRw9ZMbAqVVCLg6ddHLZ42yATMpNW9tPeU44ZP4sZY2PVYit8ZdgSY46pyF5Jpt4qsbZPPBE65D7",
  "key29": "5bUP239TphfgCkxygW636Pd8cJJqkRn27QCPFswbtswmJGz6t7FA4ENi8wM96W1dnTMfSiDVCAu4MZF53WREVHYv",
  "key30": "2SqeXEFLetMb65xZtRZsFcV6hrYQodCTwwwP9WKweFJWp1RD9X8AX9RkrRwkXhjghPRzzHbitnPT2JqDA7MpqdPT",
  "key31": "5V4nqZ12Z28faBuuatznsQZbvweNrwyneXSxSQ15P5Rm3K4GjJ8mSRnoZHgiDTYR6yZkEDCH89DvFBwLA48RFc2U",
  "key32": "99qQCKiZvuZAKYYaZ1RMqCcJMGMA62RutPZA1peki8JNWCe2oFPEdJ916usD5v72oCBCxDjwCMhWfF5z5uKZUz2",
  "key33": "48B8YAvq728GkYngqpupMJcYz5GREubrrUnGxX5GhQTXGzMrVweCxdVZU47P6gAYMaBHR1PbmFENTEKDvukgmxvb",
  "key34": "2S8UWdyJgczy2LPQass59Pg6AzXjxG7D4TsqpRxoLuTLnYnXsr9Vg4mN6AThVLoSVHRM2z9s4BjhkMH2G8tKLLrS",
  "key35": "3xfxXqMpFGrqJEeT9qqp8uaEfTVjhtPFTyx4jgJYTB4gdPYhMS8ByMVPvjMQk82M2TjqNiZi1c8T3znQRrVj7qdz",
  "key36": "2SbG9AQ51JnWp9LtmcxUQVL4mHVDxb5Q8pC9T7YoXE1S4ZVL9BzrYgVcKB3gMc6BkvJgxmmKHojYuVpqwidLgSPH",
  "key37": "63sw1ottWMvmLFENRRAny7ZnE7dF4d9H3nWUbNrx2E5YZa5ayib3C6dvXSwxmcyUU3i1chKqEoxukx7qCQFbt8Nw",
  "key38": "3RgNcca3gkRBYMzy9YTFkFsVtWE7V3zEEYnMB7Bqy2Fe5cQV8QRDPHCqgUPe1tDB3WMjXR3CFS2WvLuXY2sy4X5C",
  "key39": "24Q84KHBTZDHoTifcqvsbEceDt4hRD7wk5m4Wu6AwKKtxR6Fv8EVDn15HnHegATBz5DmwWihydaeJaScGDv8iR8d",
  "key40": "64tQeVpDiBdq17iHT95oJYBJMHshdVSzZWdX7L56AM3HTbbRT9dopyey21CMP7fyDXx35oA5VM97eRHaBuwjpmXV",
  "key41": "4pfm97fQnSrjMoByHqcPXbSqAyMn5zoBBSs61tzPNgjv8mZqwpQQUEJRgsNu6y7NnBMUUKrHeNCwBX23nidnodCy",
  "key42": "3tujh1Byb2jqGRBZLyYandzdTrTViKUhHbVQc8i3WtDimzdtigYVJuTW34Pa2gtoXMwQuypm3SuwEMcRBfEmYbht",
  "key43": "4qBGsj4kGnnzxFx6fYXeFNuWa1UJ3VpxsgUxUhv1kLGrbb5pnkLh3pzLfBoAdjTBZPiwb3kzamQtjbMUiXEPzuB8",
  "key44": "2WZ7xHBoEe1JGqRQMYQQq8m1tr5WX6QGsCzWCqF7RPuAvVmKEFWx5CnTJJSD6v4Kqwq2tc4gvVRrUCeoLLkYrjQH",
  "key45": "63HrSyZnNa7rcossohnnd52kKK6PFWMANU4dZQG5BtjCevYrGwVne8RDPxTEzeM6MttTVvHcMj6SqHJoJKe6dQJM",
  "key46": "4jzAJLUqXJdeho15Vfnq6mhS6KM17S8StgenhtaoucXvzi8Udk3jrd7S1hbFnxySPcqEgAMnrd3F2ZmPH6nb2zxQ",
  "key47": "prxiV7rDCaAQ5mki3hQTWGu5gMKXSazp7ChubTfKpMRXUVuz16VXGU5YCUFQPDAiMiBoNCqeHimTHkQQFocxjEV",
  "key48": "2qRn4cvJLk52sD5Y9MiPWphqoaNfTFAWaGCcdrTfGQKKmV8RGHX4up6YL54tLLofSMkZbXcGu34xUxDAapvEBJbR",
  "key49": "4y72HWXbfAUAbaBUvbJeco9TqdiyPUJGKz4rERZQKPYDjNGrmdb8g5tvzZgr6RH5V4YsQdizWfpAwgCKXPxNFbvS"
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
