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
    "U9bNWM6hQqQUSoDKYHz7DfnfoDKAkmLRsnmG1SS9LAiFg6qsHmD7s8LBPhM1LziXk9gnGjRrmQrTXdPtu6G8wEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CMTfEzV1XY5oM4uki8ERNsGfgQi37vFwXC9nk7qjX3M5mpAihoaV5tDFCgvUWZV1jZW68Fce5DsLrBJuqoo2o7",
  "key1": "3xpNFDEqQFCda5Vs9WPVpbuq8q2DFEpyihUu4bwmDNcJ9jqzCrrHPtZoJtM1uDdrkUdtcwepiMSRf8tjt4kyrbwU",
  "key2": "4gn4GmUmVsy472nPHF6gD7aNLKTZKWn1dNg83FJW7kE63BoPfZLWPKrB1cNu5PohMA79A9PxATteWy1rPZDJLBmh",
  "key3": "3GeCQKv5pzFyMyamuKW5y3mG6kPLBk2gvXSLt6ULJorpirywAo6LmmJPvWQgqSynUacDGR7dLH1GL5J5rUophk5r",
  "key4": "2ESL5kos6vk9ALB4HC7wceNf6pKWrYWEKnLxq5YQcn5P9bHpJSyTqK4NjEc8BwD3SzWAWgzsG4t6NVkFRCjhYkcC",
  "key5": "GSQpu6nwTQhVKBNuYayQEZaLB2pk3MLWPYrRpziZLt82RT3tWQFkaidNkp9BbBFHreHrCMj9TEadYmFfkHTnJTp",
  "key6": "57FzunrZzeo3P4vmgpcZtBPYnb1Jx2FLTr8a9NRrA8iGM9ik4QwiebSs3CcrK4tc8snX1HXRL28YeAjFkQzUejJU",
  "key7": "5Ptwq9HhJRsjW5DsjsTqcU8BxTBkJifnhhXY2pRhHZU3nDeuB2CzA2HiXSLTaBhAdP3jXspKeEdTUywadNuNLT4a",
  "key8": "4rrmBUcvQmXKJa7QbhgE5qdhTzwRWooHvFAEXNiEUC9gN9WxhLh1ajSZwEFYakjaxAJPMiNfTFTvfy37SaNQ878f",
  "key9": "4uvdC39TtVQQQMFuXkR3NmiiAJaB6m5S5cYmmzar6JyLWBqUbNNaQTEXWNFCgaS6fXdJVNKSsMxkSMh9DPv8JyuC",
  "key10": "3R5ir1TKcmXEQg6h9zLHhmepfEigbsLuteWZsPmUZaePaZU37L19d5mCx4p1WMygS16FaA1JQ12fy8eW5C9KvYdo",
  "key11": "56h8MRTwe9sv683Cwot8W99uLyXWAMcSHZbZ1uqomjPGwQEKBwcoJUYct45KbmS1HiWF9Fh1bLSVH6bZVR3ETyLZ",
  "key12": "2zpwMqDX7FdgurS2wJ4HPv2xL42u2dqN1VrX3XHcPsCKxroqDs3oXAh3fyawRgABEBm6Nod4VBvDPWV4nMwD2hnX",
  "key13": "45MKPAauueeim2kVo2zZCyz8kDM5QXoYUBthRK37ne8NuHzNQD6E8ox2gbZkFZcySMTbLwAGb5JEBKAdjDSrWYoo",
  "key14": "4oYe4Y9Vv9QSguxcQQ8rWa2YgCmv8qeJ6u5abaoKR76ELwVkZc6LGMGEw4ZkNkFMB3Fx1v5oR3UG9S9uG2rGiDTJ",
  "key15": "2MbFaPoEfvfVS4uE6oDzh52QSCKM2fXkusZkEzEc4W2Exd9if9bFvmt5qvPzXGNz568A7ZsyY6HCgSZs3EEx7ZyB",
  "key16": "5ZEjcoqtQLfNSgcjLt6TtY1K1EGDsj96S6WXTgC6fHD57YkzUB3RhNuW564TsvSQniAc6jTQipac4fnQqdfPxLRH",
  "key17": "3QwYgXPazQZVG27e1KwXrt83kPeeW8QUf7QNAyzGiYiKRWYLjEsYTvFW2FVpWc7eKQGi8aFYe2YJvUK6xGwZaAbh",
  "key18": "5DVLyeotcvFTQmMPbxxPndZ6aR5zVpBHKaQdjLTrw2ZGo2n7h3cjte8rQPVWbN5Ph9fs8ubtpDTkTKkujV6NpSfN",
  "key19": "2XkTqQhY4xtb6wZN1S4Xt1oHiD322Tz9kimcxowQvJA1jDExJVriSesssmwTpYVQsHhHwj2aYNzQouCZDNrqcZko",
  "key20": "3WHowbgL6dhb4vmYAffcKppiw8MNWgc7LhoCyWjCpj3uqq3FGW88prjDXFJcp8Ui9cXazqkG4WVaUiseEbsvkD2w",
  "key21": "2qaNmV6nc3XSNdoiUyxXJCyJxMQS36TzVJfFjtKKWKEs4AwCTHDAPqX81iVmYXErvYk6vnf3Deo9ttmVLgJkJ8hb",
  "key22": "45JgHJ9ZcfjkDRyGM13wvursRj9NPHcLLkcjGQVaUMViMdtxboVotYCy646EPVD42BA2YVmEVxwPFiNim1o8q3LT",
  "key23": "3mUuTJUDzsypuPQH3yPBgfPRE12qKxRYT8TJsxp2yBLFQQ6qnJWosQfdcqfurzf3Lm6d7pWtg3vC3hFz9HNhVBKr",
  "key24": "4Vs1pPmNGHBzt1XfhHAYwnjjCgJ3xx9ejHUfxhmHEvzz1MQ4u3p5qTkM8rddFieUQBYacZXtxrNSNFCtfHuH9Ncd",
  "key25": "pcTgLd6AggWLfdUVt6BPDnYsdmhRF7gDKwNYHL1XSCkw4G7sYZoe4fJ74iZwMn8m5Y2YUeqUypiJhfiLKf171oS",
  "key26": "nHjyRweqobWujdrGWhyoXUr3GzBrChiByJaW2GUxwEBkwcRfywiMzMDuZhJXrNGrbssXuBjehZYt3mPXeXoqJAz",
  "key27": "RgPxYivmQvqc35eP9doVmFwpShYGA3zKuX2vj3Uxoa6X1TFAXxy5zsp5LGT7JcRaVoeZgBVknRJaiK9F6TBLLWe",
  "key28": "2kS94hiyqEZ8mHjVn2CcpSepbURkiuEFwVtsMskJ5UAoMvfCL1Wsi1neUWFPsWEuLVuWbNTvRSJLdzSmCutXjcmP",
  "key29": "2hrrDHGMubNbyveLqrrLh29Xp1Fm9NGkkX42X9cmbxMfG92ewg5ZepRKo1QNGW13tjsb7BzrPNm6ZydByZBwtwjx",
  "key30": "Ghv7dRxePfna9w82eo4HkwhzpPwrubCiqus43EY9SJR2a7RjFRNXkkoAoGehsK7qmqp1Ae2ocuj72Zszc12WQ5M",
  "key31": "4pvdvVqGMNFu5dz6Y6dQaoJbh3At9a38oq6kVwNXosjGnPRaQFUF8n2yqLVmmpyjLXdv2r7fAT2cUi2SWFZteJxK",
  "key32": "JDNXo8nCS1h4R3zoxTJyHyAijnzo8pjRiP5CNNiPK7Locj5RPc1fVusdAJUr3QGMzXzx4yNJm4V5TGscpj3gEWm",
  "key33": "5aCQtwpUpcpxX3SUJ9LCHrm9RenzkSqoyBxrQkevEEAjWj2GNZZSZQeHB9tu3jJib7yuk8ADCFUv1mjhswGv1faW",
  "key34": "RRuFoZJzfaMC1i8fEiqxhKTJWsU1fn4NTNH4qHAYjCSGcY3sDUJhrBpBmPsnMpsyd4cRTHxUXFQ5JAZqhryDiP7",
  "key35": "57QMGxLeXVSkDhAg4vndwLDzZ3x7bJTs1zvVsMQ6HkApbDXT3EVzAAXxfDyxciV3iyEBTFckPwhi3PuwHCdWSHCz",
  "key36": "tJ9L1C3wBMxXEWdMrdrod6vYeBb7yEFU28KmBneBFYbRuJ69XF1BifmZ2HsB4xmiQFRUaA34X9pygVT3c6UMeib",
  "key37": "2AMawBQ3QXpXsVcnvo8sFxVbpWqoCi3R6wbPz6ksW3b2aLeafyDDpab5gbLzk2SHCChtJrZYxCAurVmA3SdqeR7n",
  "key38": "54ZKBqHoZgjBcbVHpMDSm4fMjzXKwNJqozVFdsCHAqHJTceEUYvpJ2K7PAyqhgRy199ZqXHt5erwxFxxGPGopwM5",
  "key39": "46hR3J7MahSUFt9h8CQBa5n21bCumWKdXbnHwvpRqAwjXHXWJjUwiiRxsgpai2s5gen21T8gtA6snkpJpPtK6REE",
  "key40": "3cdbt3FwqpnNCYnahAMfsMghB5KHwgKurZjE6CnA2GxUgVAUurznWmh23fAtQyZT1P5YsUn75ex1vdbpFKxdsHBy",
  "key41": "5QyiiLTPFjm1bBhb1kc26uB8mVQBdGvbuzDgkh5HGP7NmWAoiJaQFsxt3qtYJ75VwY5LGU2XMwLMeumigxX4Y2Vb",
  "key42": "5TEfCcRWahEnjyaq7HBnCkApC1tjToRbjQFk4ApPGvcR7bxxNyFyYaw73tA5yaTmNe46VnaJDjE2kU3t15UzjCp9",
  "key43": "4CfvhPJhoxJ8Z5LyEZoSZBJb3NNYwCE8U3sLEWKyVZ6zqf9FqbXSP1xBevSZWR3rPM2eZnt6WK9zc1vnT7FeUTMZ",
  "key44": "5NHfyGZwj34gFwNzAezzjh6Kxmp7SYimpxYvTm976R3W4tnGZtyVjaoxReJhGgpJE2P4Pps8Fb9YSR4LuvZxTnhJ",
  "key45": "5fkk1zc291py3Wha2dMtyYUo2gECdJgY1Z9WMfW1vataAM7UQqjeMK3dz6nvLbjnR3azAGuJ1en65o2dxZPdQnux",
  "key46": "5Fm7hjJiqGWREQZKqecgpgXqbXjUDqu83gAuieGSVKuxdiyFgLXKNAYz8LHAoQfuEE569SF4gqyKkkUEXakvJtfz"
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
