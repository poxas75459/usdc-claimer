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
    "5NahNzhymkpZNG4wFW4jg8NAjsMFYz1WemjPJWVhjVnK4QbJphBKmq1C5WH6D9u1akehC1sdSqwUWXEAygjm1ppp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51qSaby15NrUSthUn7pH8Qrw6JA1s9cVYWcuhShM2M7hu4Hh1QXGP5o9CgXYvuNj89YVsENccKoyVP9z3oUB9wxp",
  "key1": "5kP9zRGv55wJ3mM7BeNifLo5BorXSps8BomDCxie9NaWVdZZju2RLx5nxZYig2vNR2fMgA34Y82DhW4iG9qDxDa2",
  "key2": "62xJnVDVZJNUfxAHJAWgdLof5PpTnkMcVBP5N2vLiqUyZysY9dgZ4BFnUnG34S8TSZkqs4YJxv9sgXJ9nSTuhXm",
  "key3": "Y9C8Q3erDAZyfRGbwDqonQP4eNAYo2jmUZGVwvu4th77D3XuNiFoK6KLdaK8NB28jnyLzDJXhEyrzLJaBWpgmfu",
  "key4": "5QaKLeVJKrTPjYYxW1aGjWfso3YbK81yGqmKUVW8FpEAUhi99cS8jsGy43fwJwLvvHtSwXpLYT7GBg2oB2mSTtpw",
  "key5": "4xU6gLwFmLVczoLBC9gvLbBdJpej1srN8bunyG1arCrgKFGSBRneqbTrF5Vnncn5whwXYEYfo6AXgLgV5p8gMiRu",
  "key6": "4kmTFLGWHmVx4yoW4Xy6XaWv9RgJEidck7XZVN1gG1tAQrZSsgqr6gDHkKRs4SkfBGS1vkdsAsZ65hmWpP4VQ7Tn",
  "key7": "5R2V9JjjdFs4NVCCqviZCm7CpSjQPcmz93aWd8yjKpEpgkUeC27cPzqsfamZ36uUGhwqwnPMgaaqvsMfh7JHKitN",
  "key8": "TEGLoogvSojWHTtR4g5qhu5ezL7LFh7zHDsTpSJQMLzkMRr4EDHtHY2TV2xaiXBq9oKYFTG8B8LbdfMeYL6tYFz",
  "key9": "3j13MwApPnXFxBtSPPSn2T6saH8hhCXqVg4VVmf7vsMN37UADGC3UKKAuoVn1FP3u76Vxt2juhqBykxewVnsCzRU",
  "key10": "2XWAmwYt1JEmMmu2minhLsNsdp8EaTvf3WLtiean3MRhLw5JshP976af8uw5WJza6rPaR7GsVBGEXLCFbrhxDLim",
  "key11": "4yqjPS95CcV6LL6K6sijNVhiQtDMD8sFEH24tVbMGHA9ZtJ8m9w2DGa5egPCR9TvfKDyEaXtY1SDVA73G2MsMpki",
  "key12": "37HNuHRNmYrpYokcxJrna8fK9UeUiFBRw51KLSVJ2uLjnmnVnXnLpvdveKsVsz9hsqCzHh7tEVCMEm1QYk8AfgWx",
  "key13": "gjbVDVzyjGVbNT3rg5F3iv2KxPim6ywYdxo5WwnfY91enw7BqL4DK379xf5FzC5e1vfEsjb7nRQ7qd4Whyd711H",
  "key14": "wjCfwSfyvaoBTWCVcoE7R6rKtC7ezTVGcFCwQHVffh7QEGUGYdQ3wzfJeen4Zt9FRTNQGNtaPn9UPwS39yyzYU3",
  "key15": "sCLEETTesd19U7SxHuATkGPeqHFaazeHPRaDYDTanw4K1i2Ytb9tE5HvEa9Bk8auVZrMFAL33N7YszPoqy6ST5v",
  "key16": "uM1xGDQPhsivdmmkuHQyZFDgxwbwsz3BkbeeDjFoc4fqRZ3MxCz37g75BPVho8doDYZjSXVGunTtHE9i3YAvq6W",
  "key17": "4PReG7KFr8E7GemM2C1BSYMVfR9kCVcbk5ZG4jjFyFd7GsSiZm89mCLyYDxGyBAgsmdnwveCsUPfV83XFKXZjayw",
  "key18": "2DT1Tmvvg1LgGdPshddHL4f75C4QkhenJsAUDcoanCCCSnzXBSDPcD777jVtrvbsZdNLCpiFa27Z5AJUZB9Hev9p",
  "key19": "3kzSZFPgPmMwZGgMcSuHUZGz3AwWT4kVZecRpUGu5xMbXzrRoTyNvhCG2wCiz4LRWyaneVe3YdhHjXXbhzohPzXR",
  "key20": "4XLoPBC9SNcfWw1Q3mZKLh2hRbQy5Ze3YiznW8BcrgG2ht8tMi93jVJAtDDwG4P832bKQSKCj4UyVusX5yaWTYQQ",
  "key21": "4YxciSvDmKDVJvPuJpqtPWDvMD4FHeuS6Tv1oAcm56bP6U2yMZhyzrvYuAr65qcvMbkRjffdWZECR3FDxroiGwXt",
  "key22": "2zPYbyUhC1mnzkKzParkf38marcnchRJkuGbjxwBTsWVvLmnJ8h4LFqzvhVGHEqMn79sdiUrPTZkBXqTcnTFQrmV",
  "key23": "bd1eoR7SMzmdFgP1i5iyzFaP2RKNXhiX5DhNnGLhLCEnY9nz5eABRyQrduavMiDXSxhFqXk7cj6aUWVBJPWsBES",
  "key24": "4r5RyqpsdYVjeU5X1AiGyDRxGXpAStUZQAV6HKBJJYRztv778jeYxhLT7MyKnSHaMCqNFzA5VJVDqDCAwc14ekvC",
  "key25": "NZ73utAQD26PxZWKdfEAHFJNYePqpqttBhpgaRenqTNKN7YTtJzobcunA5LpKMbyXEn3ahU1dEaoWFzSMF6XbEY",
  "key26": "4YyHGmtziBeYmxzd9YXmNLapDagnnkVZsWeqRZVqg1wixWUVkn8xsDjaBFGpsrBt9cbHfv2yCVFYKBKxj7BkZjqq",
  "key27": "2Zk2r4PpQJqzRGuPSy2f9Akb4dwMbB6s4Z5mCTETmcJMSk4bxGAuHb4E6T4Kq7ZPqTYtsHxRGeGGKsdXJkCHD9Yi",
  "key28": "3eLoTtSLuwR5SWvEyvU4vTTcAG6YgJejnRE3xg1q8AnbkLqDKwF28LHQwb7X7J3hdg9XhTFcSMVJ57YW6q3Gtwms",
  "key29": "53JfE9Pb4G1WvUKsRGDkPfz1z1Zt1NKfVVFqZQM31TcmE1MLugVxjsUQsMgmGcdpNbfsmxBKiYjVsUj6tAgk3X9t",
  "key30": "d34FzqSJATn1LxXbUmVB68mcvcHoT6VNVm9yJU96WcweYKbyfKtTcCyjZz94uYYkw53edh4EC2WLhfaotmNHP4d",
  "key31": "5byHECS7HDVBP97aic8R3mVq9PiophYCBZi3YAcpck6h52SfK2FVguKP9ZYgbimN4teZgjSowqDPxngv9U72eLmV",
  "key32": "1638LGqQtarFZ1uGDswSHVhT4F2Nq2d8PisBR6VPsMNwz3jE6PmGgsYibFTTafMGU66Cum8Vy8ntyystosJDpJ3",
  "key33": "5XkcWJkqNHq9NHUY2vVnqT1o5rurxX9x2yDSx8WgPtCotgkCPyAvPa6ymZW46cXewhUkc8b4ZXnYCCmEzbZEVs9k",
  "key34": "4xi2GynYb6MXvsWqsNS5R6a4Q9zHFhE5Ni7sqH4wRrG2AevwbGSsyupF79JH489AefZmjEpbfJ5iUxw3qBYw2szd",
  "key35": "5imFUhLxoR4LD5kQFcC7KdcQLQcHxV3C4zXy6BzvHNdZtxLiUtVow6KsA7m61YS5QSuF4EunYV8BbaQ7gw2Ek8wP",
  "key36": "2qYF5Xe18RhA2pu8MoMrssmRyycyRb6t76c1FTuCGNBuidwWpRZtr8WHvRzxXg2dZ8dCzHEmJwsh2SoDLMHjRctg",
  "key37": "37UcRg2vaVUWfmgrPGa9H2ogLX1kkDhbLkff4wpDrMUj82Bh7fTneptPWt9ZLGZu1c85N4VyM9FjUaKKUzfzL4Xt",
  "key38": "iBxMJvUtUjTsGb1gYub7bWR8o7ug9j37zh8LVQGbjwTkKpV8wW9rn8nFegSDgpGyi6x6XLLJyps68b9BRu8gTaw",
  "key39": "36vTrZzTxjReVWrPozBoqqHakbzjh9DdCkSj5UPQiSkU5JwHsSy7A6BqKQJZBkJDNUspxQ6Sz7cCs56FKVsTfuK7",
  "key40": "osoXbQmAto93vvnX5VtDUAySaSfRMr6mrbPYq3BjufqrqNy1V7RcQjvepF7vxBCgUW2xjjJjXYaPBTB5U1vUUen",
  "key41": "3WcLa2kr2LF4CZQXUo1wHGyvAxghEw35JX81gvxreuo87V7c6qmPho2yJi4Eus7gzVkWckBMquC5iK1RnNK3eZeH",
  "key42": "2U1PkoK7dCQReLMuUXPfit3UFbvDnfGxCYSNWYRpaiZkpr7NAvFRGBdfA3rrVgKHdUiPruxS5aETht6NmJ7NZjo9",
  "key43": "44Cigobd8tDi7KzZ9wDxXQxmM621zsFEPCD9cf7ek5t9WUX3qvMajSMoq73kpX11zqWnNxxrofHcXxMew2F9Tc7W",
  "key44": "43H4ChagGD11La193UDnYYjavirwNimTKRbyLxEw4LvbjqbjM9DaePYXbUYEPWQV8SUyNjrwuHjrMBUM1Z7PCJ2y",
  "key45": "5YNLk4H84bq3YMdQpMvJ54sBWBUQV4fLSjui24UkrqkLBtj6qYGgugpw1wU11oWZV2FWdVcF9VYUMG4q4p23HEAr"
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
