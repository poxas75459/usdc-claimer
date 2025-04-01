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
    "kLXWLRLwpYKJ2YMDrdDCTrr6N9fiYgb6dUEdw75947k97PXRRFzCToH49MnHgh17bN8ByCc3msZeHNS5cxMHBMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjbdFkuq1iGAzT2DBwKiSdsmTzKYfCYg2RZCtjQu6H4xk3bvB9szah8u9xcmKq7VaMjqz8Haef6MQ67fZkAnpVd",
  "key1": "4KdWKq235XkWU59a2M76KcpMAcGHXS9ZLJMNjjyNxtD7fmeMk9PPQMP8qAKv44CWmBxB5MtPWcmbLmeKawihkLzu",
  "key2": "5AMW1J55KoPpsUqzkkXJF8tooEopbmf96AJh72RnRcefKnnC3SgF4wyxmzMnFK4eBfbzKdyZU9bU5LDmvnAGDwse",
  "key3": "4p4pYr2f1TR8fJ8gVH5AGEAmhi6H244PWCHXmRyGxLFuASb783bL4tWNuChjBrphj8nmH6wP29MNBsUjSJHB3dZ5",
  "key4": "4JRYLoUsYYK5meREtyqrpUm71sUy69WfRh5TsGi6W6jsZBq9EysNo5GHVRc11HoWKiD78dxetxbXuTrjSXdrdwg7",
  "key5": "4P8uiyktDi64trFiZs6GctrfDybJmXqnroZqQBGDnZgumzS9HAVi1fYFPpe6FqTHmiskTpFERGiBQW3SvV5qK8if",
  "key6": "4hZmCwZNKUk8f3mHwGE7x8Jp3EY9QDW69vnnHMm3zmB5N3vw6GGmbJCgmvMgk6UuYLcNUFjipX6axwB9Y8UHgvpw",
  "key7": "5Aw1gsdjoczhM5k2LKivNQmKeLmMCpW9XhQCDCD3CgY3qe5AP2AhZYo1JjGYtSppkAtoQX6DAV4AaLr8pMK4rfhe",
  "key8": "bcdJRxNYj895A8sGdJpbgedwwT9FFnBjAWDx5S3EY37NPLTiKbVUaYh3C4XiFcXmMfLjwd9Jn5mMLbmSNbuaCFd",
  "key9": "uBtTFNnQCt4saqEm6wabvFzdqLVb2gTgEFN2weCEzJh47FVvB4LKsxvCTsfMZs8ADHFqUdx2U2ajL2WA1vXxcX4",
  "key10": "3eWU5kHZGGPrq4FEtGejTjzQXvysLVr1iXuuSb6aph4qy8BmTE2quVKutDdUUiMScAAFNC74RZZqTEmA2Pjjcv8P",
  "key11": "pnC9EDbTNPE3KaCDxk5Q2VAhfFxXoD9UTTiccqSNxmf2A7W4BEpSuT25YuMM8X71q5wy1kPPU96567iXRrhdSGV",
  "key12": "5v1saND3Tga62kRLjGtSDLWosm7pgX6GGxZxadid1tS9JJ96WJSRwsPVJ8nQEucg86XGnydUwc1Htc2sq7Uk6CGD",
  "key13": "3fFGt4PGiXmpTxNmprvKsUxGBXd3FaZcD3wNAMwoo6wM7Rup6ViVXYDV1wGcV3bBFbhqvturNRwCcntF3sHS6ovs",
  "key14": "334JjJVek4cDkDdWMNRFKSbimFCw6cMo5LpkA8AGFwg23fFqsjyXkoWSMCWD5eEBHJ8oDcKvmjBsBgFtBs4Eukyr",
  "key15": "5Yxsxd5L2iPTxDa57ug1dWeoFbnkHJ7SAn9BWyK9b8DEbiAAxu51QYaX9CcJcQt9nNmj91fjTSrvJXev78H8iQ62",
  "key16": "487HkDSRfBMpEfhBQnZHcbtJgHihfy747JuSK62v1BymiazGW1QnpbaMsyERHdfzFgwRYotmBifp8kDpBesfotVb",
  "key17": "544ZAcKe18hqB57LNR2dwddVjxqYS4HkAuAgNTjX66E5sRtj2nLDXqwCKTfwfr5J25cHNadr68zi1BMd2FzedFNt",
  "key18": "2C5nxrFQdKp34EoqSsqzCEKzxsKhyNMPiniL8Yps26yrHhx3Qf52PrQJeAJaPt15HFYxA2Rosfh5AMVwELFQeMCz",
  "key19": "4f1DXCU29dPAHFVfzbZJEiquKftXWCxSyL4eSDaeP6QQfCRD8eZeKbaV4hrVZmS2z8hka7tYcAEQ1fnhZQgw9mme",
  "key20": "5uD7qwgBwp8nkPiaeixBPRLCrdYGSnUWiwCx5eWmQVvdDSVCqc7CnBYbxigbK4DPHHcRRBwN9shjoKiDutYGT4a7",
  "key21": "5WB6MWkGz55mhJtpxCxWyc4V7SFsb6zabHAs4izxkgw51H4vn7caZCyqjoy4CyauzPwyjC2zP874z39Xe9ZxcnZg",
  "key22": "Vsg7C5NkFA5P4E78k9R8Qq56NRPL95iWcZ2vvdHzdR85JV5KeyVgroKKhTQVxpdHKTuAsQKYh9pytYwVKEcdQqA",
  "key23": "DXxrXfxGzyLoaXoPh6cDjTrkA3ZFWGmxUA4RL6ThBadJa2RefKRM7WKLdYiWckcHCdGmgtSqRJA8rs2kqdPqtcX",
  "key24": "8UUxujmTFNe3HPewjLkVMMSXzxZpF4VNSmEcHS8DtKYf3zQGFBzXyUHB6ESYgKNb6hvkUygxvG9dcfGiuicZrYd",
  "key25": "3QJwitFkUU9SiVU6qq1ERvFSZTfKhYX1uhoHBxW8kda7orvYMCd19Ha2gb6RcoZ51zHj9QTMrdYuWmMBbMvjUe2a",
  "key26": "egYheTWgfb7jRSh4LGih3EdVp1LPUCz9gAwmai9pkhTyvmgNU8BqFiTzoZNhSaR9rM6zKNbJo65iPs3iPBaeLPd",
  "key27": "4jDEJ4rDcJ3qbbYXpfw4smVB9Fa7LcHoUrDABaGQbpcwADs2kCszsWTYvMwFHvxB9y7FVrM86So5uU4UBxGbXoHe",
  "key28": "5uJbsEJtPg9ofTPJuYQF3L3D7B8gjfi9VjAojhjnbfJeNJNS3eVCLu76D2ABb53WsSZLTFEvDjciqeVxc6Hh4nRJ",
  "key29": "2QLh7HdPMjWfHSUcFCTvBS6qScoX7xRUjiZu9NvJBHUjMgN1GFmhtRqLZDC4YftLNNruS6L6VrD2Mq7LEz4Tx1eq",
  "key30": "5GxvkEKtFV2cnipTrdR792dN1zvg1JT38MqGN9hyrQyRZUEhPWPVSfAMJ6pe9VYAZqcyvLoMXJJu5iEhff6F4m9p",
  "key31": "5AgWjpqNn4EKDwGAWLttSkA6ESCkkRRpguhwmbZJTxM3PvykafNAYRpYqaEZVQfGfE8UTqU2PrBV9GqrofxnUpyy",
  "key32": "62peuWeFQv3H7LdEHimGnmcsxDHKUYt4uBLfFm1fAfb6RMZwBDZvGRLNxUiSRTNSVtKL216MQChYv7R9VUK76RYL",
  "key33": "3h2BYfe1GmRs7XzCbtBGzniB85ga87UKAWU973ahpAbHr84GeqV94yJP97pd5Xibo1RhgWXAX97BV86AKw32aagF",
  "key34": "2GCoFD5CxkUPQdPpnxuQMXPZfDDZ98NefBtTzAYmkfu7G9pimUEwAiFUHQaFY2oNR3jMBTjYZfAnzftynTCyZovf",
  "key35": "4QqmS2oowt8yjypLSeizL6xCT1sgMEn8u7CZbqHtw8DcdaiwK5u6QCkYg5qmaDaa9BsQYZvRqxvkYeRozVxszfDF",
  "key36": "3x7KUtjTqbjRsmfhfkwXiL1cFfQH4nswzNDQfV79xARLZ6Z6nJ8AMZcjNxiTzDR7RxY2wPC4H3DPzuat5sy9vN6E",
  "key37": "5v4axDLZGLCFQ433zkym6pyDqqbG3Z7mLaYYTjq5jqoEg5TbeYaBBscc67UR3nC7YQW23E7SYErWxUC9r2DQZugg",
  "key38": "GfQTH5w124mjw3CepHpnbvnK3UUp2Y7tUtWV7VyfSuRF16poscdjKsZ8oyRLKzugtHav1G5A9UKSkq3u7rtDQUC",
  "key39": "4f19TxECE2xcaouERgnZSZVAKBUK647nesczeBLU2w5nQNkzHu6Zxr1YN331nTxkMhC6nxMXXbK6tRZz4aaGXLoH",
  "key40": "646rrVEw2UhSyXPpQW9ytxrsyHCzRTnWBNbzepAikRpfGCDe22JtQQ9DMkPJeTG4yn9bxSm7RfLvDbCdVwhft6Zb",
  "key41": "2rGFiT4Fd8bf6iMzgo1BBYML1PWPVtHmQHytLDVsWqYzohaNEmNhss3ghupNDAPUN4janFKjbJFYVDpiCBBmjLy4",
  "key42": "35rUh6PHbADhQTzMTMzgZMo7y7FU3kHdt6FsWzqdJ8TVTakUup48E6GBT9wf3EQ3Bg4BrEqpzqwrsEFjU751QerL",
  "key43": "2rYWEUfyukrgabwAnz4NkNVTzJ5rBSFQ6E8GK1yk1e7NpKuSiybpGxoTde12D1HzxCx8yjPuN5JusWpdMktjQh54",
  "key44": "2cgazahgkZ5zupRiJ46BQyxw9t8AiqRK5DU3JxP3ejJo8da6PggMwvDFgsSZWwAzwcPswrRtfzX8jg1UzdtrCDPk",
  "key45": "3cwK13dgMWQTX4eRhfgzGU6WFPQGxbUCaJ4PZX1k64jBJMSRHgksCe3HyZ9myLqGiqKNogiaYCw2E1JB8DMapMuW",
  "key46": "2Q8EGV6fqY6ybNE2StTXRsqyVwFpV8kNPiPJZQ2MRJMGUeFqCJ6bGxrtu61gLZaXbvN4Bidfaoe7e287NmCC9SDq",
  "key47": "62bPfJyL2LsVLToep2e15BXco7MGAzAGQ7XemTwmMdPqiN92fyPoVpFCAaDWWhP7xcxs37dnA4ZTNVeC2eh8gCPg"
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
