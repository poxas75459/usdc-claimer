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
    "49MJDKdb3LCoRasdTV51Fz59yG1H6Brgc4h3Pd127nzgBNtz9RsP88bLhTBTdGo5LEa8UCiVqTmRimhkxxzpJQH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vYwVTBRvJ4m33Qc2hZZVBwXn4qTtwxanquYq6jsRgF8cQqdbrbC2qExvipuLexbVZpooW97HfbbknRCg8HLj7fM",
  "key1": "5x22nQ9wBUVCVkLRKnz2eUD3NCKHuFbECAxmLCd97oDBfFpYYHXW5BJsEn55zhWDpTY4mUef9e1hkbnwuVePCaxw",
  "key2": "5ua7yWcY2Fm1zE6NH83bwjP4ku3a4QgtKkDtWZrAB8SKPL8C1ndqNMe3MQ1grtUdar1zcFQgqJAYjNBPzbjR7jdh",
  "key3": "3uqL6LidTyxNe2M9SbFy6Hvp3Gv2gWXvkr98rWbvBsGPJC7ccrcpT6ah3BmzTzn6XZX3a78Gp7cSK42QWz3hLscM",
  "key4": "w8dPnFv4hLZfB8i9p3o78Tq6U1zFqFCFV9BApVWDxbehTGurcu4bmyeGppyj13C2wxDwdMFrKUfRiNXidsW43aV",
  "key5": "TdCDWh86Ggc2kjiMm1rmSRkHhRCL17VUF4nZYn1wtcdm85UuGfZdabCBsnXYwaBgy1JuMdfF91W9AHGunSwpweX",
  "key6": "2jQzajNjEdMz5V8yqmebcbtJbfBjXWy1tSTgHijkH6pbgFBmoEYdw9oFZds4F7fDVqu2v5JnNVMHFgKnGwB243hu",
  "key7": "5AHenNPiwG2jUevS9ZLQVgRX8Y2J9gCxfS6QFkCTsztW9Ldj9N48wi8ZFQFfJJFzLxip1MbKdisXTULJNeVH9akP",
  "key8": "5RrCojNotTcYGs69aHj2gSRj7wrYLJSUao656pzL7B5v3hAcXRP3JB3eAYeP8cVMB8mq2vtFdzK3AbgALBWomj4M",
  "key9": "yjKH6NgsPWXHdCYuByhcK6RRca5VbcGoC8iGC13NvMkcyX7ctW8TYN8YBUBsHtPgte5w97N7zfkmKqm1CpVCmGH",
  "key10": "N4Hd8RRitCMTzo7RSrYihvPmyVb4WjLhSneQhczxfsa6NsDLfLn4R4RuNcroTvbuVMHR73rXXqeGyoDm7shHXL8",
  "key11": "4B1hPmX2ZhjTjTikEYMUNmFFrUanSKCPvz6qrtBqjgir1iW51zJzruhWXAZ9n8zwkBPPpP1E9beTkSC3FC2T8JA5",
  "key12": "5Et9uKtf7jK37TaZQFiPjQMuhsyVAZnRHGpySxRtGkZsHDBNxY63m37BSEiwoBcjnTwh1Fbscfw7pRtNqhJaXeAh",
  "key13": "5J49vk32js7DuChrwvph2Mtm512v3qZJnjzCN1KCndjMnw9ws4wephDqnSNxizYpT1e7fsh9KhwQDzzyTAdWMq8D",
  "key14": "3dbgYEpWaJai4icp4e3SLm7KuEEskZMXipMuw3AXFXQFzC2iqm8SfZ5Sh57HebXN5jEvnrZf93dXminnCgna9Bo9",
  "key15": "55ezwuUVcvWgFvNhp6ZqeeUhWzMYVHHXWZnVRRihBFMGHVeNoyLjC3drPVZkJpQyP5ugBhKYGKHiGKiHoCE2nGNt",
  "key16": "w6uR3y5WayPZemQhFUsdpSrp4ciTVqJQeEiYnmctsxjf3rpKRRm69Gh2tozY3d9ZwrBjJ33ygRsZy6ntan6wbEh",
  "key17": "2cUGfdkQtAaG3iJBK23fYRjCArudVYeohNpopCyrWrpNeMnTk2we8kH5sMQCHtC26f334NVMJmXGpB2Az72SLDgy",
  "key18": "33NiYB9AbByr7JQ42vrkGn8tT8LAKc25ehXV5SCVfF5ryBSA2CE7XWFjsBcr148e24Y2Z76JkqMextfnPx5SAQdn",
  "key19": "5Lnk5eSGJCxnsuFFpyvnnZU6Y6tvQQNtkwBV1Y3VSTa4rU4LuD95auEPiK5gFVuV5c5DpbSpGT9Nmv4gYTxCFCEt",
  "key20": "62qkxMPFPoXA9EN23aaWp9MbFYRy1KvnWcHFJ6atbcsoBMqwivCV71FS9u4QMLkgi1NE4sgBbmYgriYiwC4iDf67",
  "key21": "2oMArLn99VS9yN6MJEDzN2dxLWkfpTNdK8okzvxiJ9VeJDVJyD2HuEFQGrA6muVET2AgYp1sS16jciE8BUDqUmm",
  "key22": "2sUdVuPNDVyGFC2gUyvJDuB8P81oJfUpgF7cQAJ2vUnkcU1KaMXLS71AmWRmTiFsASYVfKjYYTWxS1iZSFcK8Y3m",
  "key23": "4ZfdiKycHfjV4SAucCEccgnFQNX8o6EfeLuZfmMmaeKgapA9FsZ4oiWHWiCwwJEXzAvKHikzSnyayvvpCvpxyPXZ",
  "key24": "bQuyVSJFxG16hgud1eTJAYyGyX4LAwi3y5Dpo3snYPkqtyWMcepbp1BspiMDFe1BE8Kv6W21872pEAjTiuWosQt",
  "key25": "2ph4i35dDENr2SioiQiYRB49K4wvDtDbphvCaPvSC6qV2sxz5EFEdcaVnAwi6P3L787D22HNKdDxhgtc2SDtD8yL",
  "key26": "3E3sVfewwG5eguyqHt8tTLwWvtRSb8WTwJx84v4s49TCAhDFnkBhWX3ESdH2CqPvdWsmJgspcyoiEqRF6uN2F2Fs",
  "key27": "e53542A3zm6Uq1jG2D87LDVALUxHx5GfinXzKAWPXK365FN1JEGvhsQCPKescN3ebnvCrgLGKfN9F2zvbXvwVby",
  "key28": "3L9b7z9XNo5dndKtnpFeDbkH4gBs2TvFZik2pufvaYMKNey7G339g1uJb3QtZRoydKTXNked8aEQEFDow6ezzSFo",
  "key29": "VBp5BhTXsnZkU9UBoFBn4RaCw4Rmg5qMaooP2inm97b8x8qchLvwMvoNTCn7ULdQsTWrXwirvUx84pWFVZyFkB1",
  "key30": "63zZLtm9X7uK5e3CCctRnKQiedNrSKsFN4zcM6K6y9Mga3RDeohBKVGVeHVUXzs4tVTQhqyqDmHDj6YRMkVJmdMH",
  "key31": "4JKhSrrZ6mGNLNrSKwLSq22vL1ksCc96ggR3P4t2NLdAdu4hG5n7JvkSSZuodwM3jbwZFTugwEPhukKtfsp1XAHL",
  "key32": "5s2NAGWu4rRvg6fQsRtCrVGm4ceBKAsEP24vv897Md5EQPSp5DdtBnz8U4ocBWYrReUMT9gAkfnzVEtDhssdybmo",
  "key33": "3LLfYjhLzT5uFdQTR7JgszpPJhDTEm7bDdtysrbaDwsPv4ejQh6xjBT3T1ssC9y1FroALRBh9XvcJHT18ZbcMwZ7",
  "key34": "5vQMjckLKKTLCCSc9awoDthyCcYhy4eQ8roGaNvRKGW91a1YHbgZYvZYzqfsXP34xoSzfdSBvU2AuJT8551irEEp",
  "key35": "5DVNcHvp46sw7HkUs5CwAeXPZAFgGpzruYUWnHCJQa1jdo6sdPZV1reKVNbHahPXfkzbRfhj1sbiNPvjsD6e3366",
  "key36": "GDprfwMueEY9jxUkzZAjJg1SAAYYXzToAgNkzdL2J7APQoDokQ6yNGXmXPPKyq13vvp5itzVFB3J9c12JGUY9xL",
  "key37": "FhHG5JbpeeiVbS6TD8icsy4rvxPwkUK7CLgUo859pnoy5Mb7wGZP5imWpreofu2dkVd6Qxj8uEwp24p6ZyMX2Zr",
  "key38": "4eev5zyeeVX6WLM2dzXPivJ6epP6kb5vDRaJ4VST1XexZm5pmyQrtLMeEszVZfG5tNu3yMCv3XdRPSoSDrn6ZAdL",
  "key39": "3iGgwzjC5VaxbezXUdRAQXDiKiY3HYJnhFQu2UazkQbboj9VFbp9QvYEDY4huhtFtYQoBmUNih8RngTNw8JwVEcz",
  "key40": "34g9wsqQSRif6CB16Vr1L2xLpqLBmXZaEW9w5E1y2mQ62xTqj8592fixgDNPU8CYDiUBYCxRY2EcQZx2JyZwak7H",
  "key41": "5aJip4WwAyDNYXxzwZuiLV9rJKFMk113UDmnjkMugNg4BKkWW6TQnesvX8fp6JwocAxwwSGTHy5mbuSSpRNQDga9",
  "key42": "2yk7EGgn9HmYNMhDZaJbDSkiWgwMccmnmt3Qw2vZkTfTHJqo2j5BnZhwXSv3ZNMbDQfQWGUQfbfuvFtAH9wUr9b1",
  "key43": "5aQ3bCeYbv82exA7YFLCYx6sGGyMwUP9QDkeTUtTih72dAfEsrmaJMvFbMHJADSxLVBBuLvG7ArkJNX1hofepJnM",
  "key44": "44bcF9jAuUHkgfqt9ekXjMMDUNJD7ahsUBUYALSo2G8W7umf2thrFWboVyNiArvYW8T1LyU5xAaC5xxN8uyKYkCY",
  "key45": "5rRx9WSwexpNz5tUi9ETd53J1oDJebVWe8HD1ke37Hz7txa9faWtU687Rbw7joLsgPc8tL8avvU8vdDF5V4eB5Ak",
  "key46": "61F8YH5QYLMEcuWzdtQL2V2t913STV7Jk9xSfYV7AAKmUWXRkFrd5mdrp2UhAtXqCQzpqZetgqi2mgHHue4hWBHz"
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
