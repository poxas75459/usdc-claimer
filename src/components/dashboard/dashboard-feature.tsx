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
    "kyenSdZg1yEbvhpWJJBVYeWVmCcoe4n2oXDmgbE2khqowSNGgUKS7xQTankY7bCGewmy8bQTNCyNFuw62p3uTVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivJsTDm6dcmTmEx5bFZr6C21F8m65a7R81xPNEv3r7qzCL3VhDLJt8oVvFAcP2XM9hRRx9pVTbmexvqoCBejeAL",
  "key1": "Nop9NYT1L4WkvdaiLZQFGFr8RouvqnZe4o5VxHwhb1bFxExGmJMmM3p1pUhYCDQYadE5u2DWHMvXK6qhRgAY3iN",
  "key2": "2DuakyJVQNLDm3WAS6r6GooqLMVH3rZBNRna1dxY1BZBX48LpssED9cQ25b6W1oZPG7AQFDEws5cu2sf3aYVCdWy",
  "key3": "5CmHSgJAdAM6HhfYUs7SC5fbAUDBzVUMkvKSLe5HmrQNFcYBq5GkGd91drZFxi98mZMHoeStqSzNkLkyAjqheoKs",
  "key4": "3hLPq9YFKmhwn73Qxsjycp2ejnMF8eJQmnSsByLX1gbqSgV4u2VzKPuB3mLiRpKtFaGmXQBJyskvvNEeG2m4CoL2",
  "key5": "5NbCwJSxzemuPETUiJqpMLbSSSFAfF6GdFLBixzTSX6EQXSj35Mv3t7Rapk93Z1gUaPHTcSasMB3FAYGcty5VZPr",
  "key6": "2C2qFhGCwyqPmvgLSyimsqChSxmEb8pobKMZjr6pTVkAEn9jaV53yA4zTNzA3ybQNsj9vpSLqkbPTCLKSiQxxn5w",
  "key7": "292YamuuQtfB4SNrkXf9VkZvwhDMGmD79BvahX56e3CZk9hCgCgnuJBQScj8LC3k1gnbnFGwj8w6XbAEpTAk46zT",
  "key8": "49DGptocomMCSdVYfmVajkEXwrs9426UpHivtW4tAYvQLo7Pqq6T57YeeJjWrnFNB9Sx9nhmMDk9dtdGqdfxxdpK",
  "key9": "2EtsGsEJ8kKPQiVNjiAK7zoKESz1oynEe79WS2XPmPBZDaYQvyYxuKRiabiFJFXDpEgxMsKEsmDBsJZsnknZy2jM",
  "key10": "zxkhwaZmGXzjgWQf7qypRTQ5RVJzht7SwrEGUQFADDb3VLwB97ax9cKgAkRzxynP4sMzcTSuGCz2XYUvazhv9kN",
  "key11": "5AyusV27MxUD5gvfFubb6PJoM1P2XYSZT5N1VvDXGBhS332FtFDXTkRXaU79TmHsFXp3FTs1DH7PW4yT9pvBqtLw",
  "key12": "5ytsgZ8eVGBYeCZKHnWq7SyNUNjNdvpa9wd6bFQya2NoBjQLbJ3hqpVVsbVpqjFHBr65uXnPz5hhPi7UsCKuhoYw",
  "key13": "55H41bPQPPpc7E8BdgdPgBf7qte7UsCPdikcU7aoE7XkV4gqZwu3cYvv5DsmRAtaSGZVZPhSbAY6eLxxvg9Vr51",
  "key14": "MpXHmvjAJ22f2LYFJQ9y91yEk1MHV75d8vRhc6GbfX8fscc6biZoq5esbainhghE4X1VgToVfPMUnLioTbcBowt",
  "key15": "3p2MQ9JrDqbmPncwmoiBVAiQ1c7WMNTudn8Vu3SVrAfrBxiofMVoPx472LJY3csjejSXNuRKCTs1aPATBDJc9SE8",
  "key16": "27NmAvv5rDmZAaVcgkhnoUsE7EgVD2hFEQf9SWGGtLXpGWks3iX4Fs2pTCP2Y8mR2dd4E1hXShkiuuqKSnRa5qzG",
  "key17": "2Ricmw62dBsamyosmWryPiRqsPaU6USV9e7KhEw7WqM4MgKMaGYReMybSehtmnVU8KV6Rd7FiXzYciPD9DSS6Ugx",
  "key18": "68u86operL7mWxffGf7hrYGVLZJRwSo4Y8A8BHRwn7s9pD8rLy3DhpwQby87SdbvybimLjmhDEoRiJszkEvRm1i",
  "key19": "4vEvzy2gjtrXvmnGjXubLuwJpW62tGbug7R7etJwkU4Dkkqq99XN8DbRTQ6NvgbURr3Te4GthSmhPoVm55mxWSeP",
  "key20": "3JtkVt4xFwd2MnBrAy5hA6G47kNs7aTvXx5DQzDaC6pXuDNetRSfMdNiksr7fPgUm6c5CaaANauqA9jrHhCHqPFY",
  "key21": "ZGMnaLubX1qorZPomtj9ucpmWbxu2txZCQ9Z5nx73QyfPX5yWT1HzxyD9tgBefVk8AgCBnmijVqCSnCyhmj4Y8h",
  "key22": "2RXKXCsWf4qXZDnKnXbcJCpsxxCENrUvudBuUswH9ARSvfp4tC31uPVxEJosMGmXUwfMgybLWz6MSww88W8FDsCC",
  "key23": "zFWYWJ52wnGxgp3pPn1197XNZAM99zWP8mHti5Y7KWBSxo5YZkcWBerpf2vkiHL2H3sBki64PKz58ykwgNJ5i2P",
  "key24": "32QeEo5nEdVabh5mNpVHiQvAmLMRTFUuj54pwErMvzQPC8yQBZPHp973HW5qaMeLZQUbMWbt96tyXc8wYNcp7xzz",
  "key25": "3q3sXigLETUQcKbTJi62xHkr7iM7BBAfUUU8gjLk8cxyKGqUr2Ukw6hSRVejLeZdk71z9411cQWRrDU7TVfm86yk",
  "key26": "3Pq2jCAnBmiYqNL2mRsawnABpNpV6KRFywfqgTHjqtzJK8s3rtA3NWN91yU6XyA3SLbGr39NRkPhx5NsTLSTf1gn",
  "key27": "43JYP5MF7ghgcB9frGB8EUdn5uhrPxKhpKnNDvxCv8n4V4QgMBtFRhvEJeqPdpvHwAS4rZSsP32EunMyQrNyE14X",
  "key28": "4C5CuKmZhRMLHwhQCv9rJSVfoktGxzz6FNDEHyzTrNJWEwXakpBt7nUxcG3UYTvcg74xADNkNBymV7rzw1eYbKK6",
  "key29": "45rFK2tpm4XB3fBYUdmoHxfp96N4vM8GJCEtcSCvLQg3nfRqjiUuNsWXsMZXxwp3nYT44daiVytDgHdP3D1mqkbi",
  "key30": "5ZcZw8jULEkHDUTNdELG9N4bYDVWbekSCKydV1ZV112T5JN6HGuNigY2qD7SRBULfg7hWi5YAj1AejPRraptiCzP",
  "key31": "Yuuh2PutC4J3zpwDmFMQAWCsRX6MwETEAB3GL6sSbhHxzPDaVC7DtPWXFcgWBYZz9NPySVoeiUmaHJL5MrHzqUo",
  "key32": "5zUtjAgSYFtR72hDi2Q6SRoMBjuB6aEFiC1iTYH5vj6X4BYZ51WoLjaxWZs3t8jC6odxzruLV7mFEdP3rFyqdHLu",
  "key33": "5sBhN1Vro682AZCW9eidrjiMdA3r35dKQVMx8uFPv6aefioiFvSFxhcdjX34SARBLrAifyBjrCBxMBzSnv79LbQY",
  "key34": "3Di7uq4a98JZo82bQF8tuX6oAgtp4oU5StPNFUonTY2B3W3FNBHLL4UnBvdm6zAdApZRXKY1kTr8Fo4DYeYKiSyC",
  "key35": "2PPTewPf4MG8xGjfAtrHoffaTPWD7dNWbWjrrjS4sYS29hvXxuLkreRSWgNGKbuFEM63HeQGWGZKybGbohckdsF9",
  "key36": "3af3K4oPem2spKF39Vcd8ryEkr4cGMVCiJUhH6HKCXXHNBpwGvmoViCX9ubJ9HmEd5jF6F6C7teBAbvKWnfY8wjt",
  "key37": "43b52f1B1vU9HgP3i1yoUG9RrUfU9LLqGvUBi3GDQvenZDqS66SccyAfjY4sWT1oYUcxxV345NUx4KdMTE7DQWtw",
  "key38": "49BQG13sK3YmTp12eSSKc1eg99yU3krGioy5jnGkAKjkT8LtFdahHEze9KG5WHtMN4UiiKQwSNdZdYTELuZ9YgqD",
  "key39": "4dZwb3TuyQ7RYStzB2JUzBLx7fim5WwcrCScy3qJHn4zw5z4fEJViVbGK3eUYZZ5pXazFi83GWuT4r67UuwQPc9p",
  "key40": "3fgHCXM9DP1Ubm1gH2brCcSPGVczrc9dTN9VKXLiXxZ5iTdxMVhtSnGdMjbZay1GtAvdXTBDE5K2ufAHg17EDmHd",
  "key41": "pUjQLm59LhqFADoyNkx6NjnAn4uX4qib4qUG6QzBNjkzMUyqYezKqGuB31XfZgqbjabapQmyaimmTcK9k2b7NUu",
  "key42": "4UsjgCai3BSR2GprZZwVedgt5H3wNAYKAVBSJHHa9wj1eWQ1hfKmzBbc1RSxmnmjrgwBiSjMGJDrsGqCTK1bbaJb",
  "key43": "2HZz3owkybrLj46YaAi4iJw8mdei38URsyL8jGYNdfK5uDkXvRsqgEoF2GpzGAjmqS7RHBpfG7b7Yu1VxWkqdS1y",
  "key44": "3vLM7Jfd1NMcnSt19s7qWkxgciZTZBLi3tnevu2JiGebd7NELUHejLKLhzoPFjBSu1uqNmytbcDaw14RCvgghDj",
  "key45": "4BUX51fXJZxp9iLFf9vCiENhse898YTDr3rPnANaioodrEKMeqaGhxd67msJjxLHBGsJaDsC1rpmtHgtcJ8U35cv",
  "key46": "TWEuGUmM4z5FQwXqaZZ2Vs47xoDC6PNeLGGR3ZYwNG5fLVQKBx2XrWvFyCxcShqeUZaqQMnVnJdFeRo6p8zmWfi",
  "key47": "4UvKUGcvBmid2MmkLGxdCKRGNVw4AyznBvA8d4FrYUzjuMtmMfkyhHUZ3YbQhZas9Z6oQrmjhCardRudFi5ievNC"
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
