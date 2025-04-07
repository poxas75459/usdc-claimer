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
    "2fYGavDKkpx12bX7kAG4qhCf67319XxWGubGNnMFDoTn11LprAso63mNFytM1LHoNRwrkjjkraTACp7Hnf2YCAYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49rh6yLn6JDLtDFMUTPYrWiW72dVJxL1QrFdgkyDWqMUZiXhFqXrenoG5QtnV7965gZuQNFSHg27bvhqKMdDjePr",
  "key1": "46jEj1Q537dKMWEjKtY3JpXcNVNsa5aheUDLRrhjaVXnp9rp48cr16YoJNtvsknv4i15XQwwF4FgE1F6kL7qUPwx",
  "key2": "4MFTG1ywVowRGxZMnar1eEZRR61YmMsBqFviHxXdzLrEMQUpnG1eZURDFMdHSU2bfjR6itdCg34YYZTrBVQ4Qrq1",
  "key3": "5XZ6BxDkj2KuaQD3Yesb2zLujwyj89F2fneJpu8HAiQiUgdqMDBGJH916tWmZgjRyLT2zaEnModtF8GxPqSvETWs",
  "key4": "gq2Mp5ogqUp4N59wzH6Hs1bsfi2PSYMEpYzLdthPqd871DphkJmMBSirCCKrwEnedsARtSweYjTQ7itmaiSNLRu",
  "key5": "4EP5aRTha5uzH5c6hD5uiLeRuR6RbpPS8Q1euZTd2S4MWKrFKS6PQjZ7tVki6FE9idZZWN1ynWnzaJsHSWmhDgEV",
  "key6": "2U6qWV5z9urzwuZSJa62rMBbRJDvRvKzW2QhMqxHHBw3kRuZz6C6BUzYk4sLkDb64zdZ2HDR28iX6YdMAd9F2jZx",
  "key7": "4UgQtyX6U8KUqdAV9KegxBRJ4Q6o9TXnvrBfv15CnFKvdHYK5c5eTUiPkyAVKc88YGJJxqaFMHWoizip2vafwUkx",
  "key8": "3KBb2Qb2YEDJCUWhYy7wcBrfbP4QyjFAc6BzavJBA4zGgvSJY8jJKBwDPLwcQVNfuBDgsJHNsYYBaCRod9Yd7MsJ",
  "key9": "5E4i4SQcBoayQRqotcjrVJDn5TiemgtK8sxPSyqYKvB16zGivZsTZcKNhUkHAVYc619J9XpE8DBwgQsB1PMmCciJ",
  "key10": "4SGULA6vwKVJZM6KJ2VbFRXbxdq9g84skGeubfeRpTrvv3MpWBRdzmwabagEbbZPyQAhuN9t6vxk9LG3umTykaZ9",
  "key11": "5snidxemoLmvrVZ5QGeJbM6LZk2HknK1fBquV4YwNeUXi53iZiqVD75c9Yj28h5fZWPbut93Jho6WzPikVzWMSMC",
  "key12": "4oj7W4VEBTah3thXCkybnmUPDPbW4u9J4msNEb8akeNT2gaQmXiZmpe4CvUscsvBDqkgweUsEPmcBE4ntbPtvEos",
  "key13": "3CZpfRFNPMyz54Lynhyq7wU2SroykmbsmtLSVvWkCbEr9HDJZ5HdWXoMKzM5fuPi8GvGq5iYvhnhQVCH4eSXsd51",
  "key14": "4CAEy4uu1ZXbt3KJhJQejGR6GcRxduvMQCZg2twdfCVekSn2NkddmG1qzV9Rdh4gnjsM1aebwTHkTUMnfw7CN5KZ",
  "key15": "44ZyVPe7UxkpHkLR1NoDie697CUXbSjvrxb5xSUUr5fvDqDWbQhGn5wDR6NF47EFTwDkYSryxaqZ8vipTTDVhzfn",
  "key16": "5QPRwSDLgsufP1VKJt89eyKAGaL1CkQXE3mU84D51WTCLQVtxqYyQ621wkzARxJEJpVU5oYbBUp9j28hsmevi66S",
  "key17": "1v3y1uYArRiizmK3xkN8XqW29rr8X23HQUPriPvhGMU1uG772A1ncxNzNzBvg7KUiBMR4CAWnHxri2kvzfdGaC5",
  "key18": "2qaPHPb6GyicpuSXdLReTQ8j7M2Be8k3Kjv2U26VMa4fttwUPTir8CUuzXdu29sggKP3t7yFxEowJhissW1AycEe",
  "key19": "onFJSandKitDHMnMVgW8SJR55osY5mXLjT7YaHB3E6Pk5NyH2GozATkejNCwWVcCVQf9NegS4qSLFNkSMENEm7T",
  "key20": "4cZRuMaj1kZzB51ZsHMa6bH5bcQDDocWjHARahuVYVq8wYfq4ynSRDGqxEL7zgaJTpQPukbC335WpCTJJSuXBcp3",
  "key21": "3EeVySzbQNddxxNkwTwz7iVNsqFaBtmKDEWn9PzETYAZXj3Vsky5S5jt8UjA1oEdkhT1M9JhrSejw5tmgtRspm2x",
  "key22": "3pFJXzW1k1aV3S47Hy22cEXQGzcte8qV8LRThVwJ1z5qzD5P1NBu3FY3fUBQDoCmzZTuHUzifeBoGdhpkjoXyeH1",
  "key23": "5VKJkmDSnJvi46wmSDfiQCCyMRdX4QVP98xaXypMpGWizFjtAjz1rZCc9Tn3Zx4xXhPxic6FS4tA7GoQtDgVeesK",
  "key24": "5NqS7VDwaW9zQNJbQHUjBcsmTPUnpB4TZm8iu5NkxDEJA1iCJEZvde1WLjre6m7RfdNwZhz3CaXvLQVRqtssiFnT",
  "key25": "4zcDGHxSn2ZDvdr31i5t72QCQQjjcV4k6ZovB6RzFAFDsfiSduvC93RBfgCTbFragBh6qnATMGvTh7mHpfMAcE7v",
  "key26": "4ysKX8TBpapMCUoHxxq1E5d83wvRaG6BEW4brQNY4eA1WyNPaf84dYV9iPJCBULW391MxQ1F5bKx4XRtDNj653eW",
  "key27": "5H78VZxenrJtV7r7chkmF9sLZNwPvqgJCyMmC3QEiua4hLmjnSx7qPemfy3mkFjQFJ47vRVMHEoyWQijgo99JFkh",
  "key28": "37ecdJaq4TuaY6x2jPoCrBPxVVwWBFen1qEEBEPgEDeXkiTywdLjUdsemSUGxXJgHXXeujKtxcQemTJcSZUNLvW2",
  "key29": "ybmgYwEhxDWN1Rpr9zGtmfx61tkfqnBVUQ4oqXYET1KJMVMzranPGyz4SH96LfY2SdBMa8jj7JcsTM3KpLVv329",
  "key30": "5HJqyonirXQ88zs2S7zH2sFiCU4kGAgPFh1TYeGA94L9gSDyEMsiWYs5YaN2gdUygqUewdqZYdNCbgoZLhuZwfab",
  "key31": "2YAjzCQiP1KSgCHDQi33QW3vZmF5etYc6G5uj7T7YZ6hdfRSHt7P1RPYtH9D5mB1AaMEiJnzuDgtWcoXXwWvxDLp",
  "key32": "2goA8DuyHhxbAeXc67dXFczWDU5Kx3xoqJNmQEMDhf8aktFZozZ4ARLsxzt7A6G8XbgKwXQRN2a5Qedt5H5v8hNw",
  "key33": "5gfFej61uiHccQRnn8R14QZhxs7dbNt96iKHMMiKzsDbYxqrBZ5eWHwjVfALAiY14pjJExi6KWKo6GG5zxDJwVwq",
  "key34": "2ALzqdoEWPZS9iP7jRcm3mX3VoMjmDZuadNbcXpgjKvQLnDDys5m4uTfuwfzDDLJKQzDtMhqnpW2DAPGNpmXNtSv",
  "key35": "QQJrmMYxZMcU62D38FwFwHuUaUT2cFd6FTkafJXXoqqYqhfZnmQ8ibGy4Z1mBi7R7ywZySPXm1iyGBJaQfBsrMD",
  "key36": "3LvQWifT9UuTZM3SJh88hvrXaLtf8e7hWNCX32rVpCLN9zurZbZCWcw7MDLEKompW7sVdPCzxBVGm52tTuvNDx5b",
  "key37": "5MRuwWLH8A9fSqNtMZJbiejfuCVrYLtAejVtGoq9ZUvP2YKLEHRP8oCJjfw72uhd8eiy64E15fz43QdM3dRaWQ5d",
  "key38": "2PSp2pMdnW6NzTis4T4fdDXLWq97fEyF7RqhjBRfrAGauwhiqLDV44dMRTLSoHEV2PEJ7ruseY7sqp4UQkrkPRkz",
  "key39": "24V3TCnafUY2uf2dVXURK64UeHf1hA8hhML91BYgMb3zT1UrnLLEHfufwvcxigf4tvR3U2XDqUaxncWY6yiH61Dh",
  "key40": "29wDmV1vKQQDUjctAhtaSGHE9gEbfgVpP1MWTqSppubSYNEWSCpVN7pCwtVwDmSiFWjNQsNMStLTrachQFEKg5f9",
  "key41": "4QMAQ8DMMDHXWUY13xsrwfHZuEcgfeV6Pt7RwdrLnK5b4nTEt2HAvAhnm82RhuaX9cdq4RT8hY6KmYyvcbgH4kxX",
  "key42": "5gu44FJe6fqGGRoH2PK3fzM7GLP4dgYUKcCgpiti6HgcKy5tqodMat7eGfJ1wXNkCBMVaXtXhaoNJ4DrPQYymnsZ",
  "key43": "42GZ8RbBMk9JRWHKjMQ8rPPkKtDjPKVbCSmR37f5SN6xQw1kLBLcvzY94GJ31hU4vfT3CS5oydV5Htj4hU2EQFrN",
  "key44": "2Cudvp62QAVs86v84t2VP86XdufK25izeJ19SYtiNse6vCgx6qd33Xgu6uDRV9NQKdi8BNxy4HgTmg2w6iNdxjNu",
  "key45": "j8eyXdKJBNBeddckmCPzzKf1K6C9juxFVDp9LTj625S4khmMp6pKs4pXVUvKhkoTKdEybKpdAG11Y3V39cqWyAQ",
  "key46": "HTms2EtCN6VChKYyyqkfV6TPj7GDxWYdtNkgFRrUHG8Gn4L9U1twTs8KbM2X7yNeJ5RnQqJJYvq1WUZ9NEZ4Me9",
  "key47": "4QsBjxrk8uKivP5MfCMuPeG8cnYw7GPYBuZo3zcx3PiBQaY6TvbWCkWJcQVzKKk2Aq31QmAWRZKd2tVzGx556xrr",
  "key48": "2YFm5WtqXNut5MYYdeANZHqv7AsCaaKdtPAdc9KARkp58bjca7hbx4tUc3rp7Xve89N6uhEGVV5ZgEck32v6LamG",
  "key49": "5mErR8oCvq4yLsh73Ey829UAjpevFj2xGr3HF8Pxd3bgfuywANSiW15nmnPbQ3eFpgPcpjyH2eCvVqye5BaN183d"
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
