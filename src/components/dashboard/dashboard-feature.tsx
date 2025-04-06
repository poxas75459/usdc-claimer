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
    "2rFMkrLFsSWQFou9ywsfWkWV4DKA3TsC9SRciWt9KJzhCAUE6vLj4XkmYR3DZfexEegVaGtmGBdcNXAmjae79xcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TeXgXokBLuyqj53ceQioab8NAXXDU1Zba3Yz7tKGtp4RZDHQMZr3mPn7Y6fAuqm8pD3cJqxSJdbDtf5GC8qrqX",
  "key1": "44quA2gsPVGBgCSpdssPdcNRdxrtw52aMfVfeXCg4FJzFwBn9PKiYYjEGNXYQLGnqWZdxr5X7XdoQL7MchqgMUu",
  "key2": "21GP4CEfUFeb2LTEXJh6m1PHMe5iSHXgLGMsFpoPw1C6toaC9gjkw6FxNv5VCuXUATKz83evA9FwXnUHA9mz4w5S",
  "key3": "3pSN3DPo3vFzyR91fszcjt3KFJYgtUB45e699N1RYA3yyhZ9AZedU7Qk4acrSrsoqLNMfTVATrWQcNtBWm8tjD6v",
  "key4": "2odaXaKwQiA9cZdw2F5fXTwhPPumh9U4WF2t3U14LhPTzkZM4FJfohbxe1SKCqaJXvxDW2yUYUs98UT5P4qMFh4t",
  "key5": "4Q9SGFsNdLyCBkyFRHFww6JKrRRmFdNGJ8gmYzscKDMaMLWPS9h2mRhNFbCipfJJQBmGodZNztrbHs9cSCTV98yA",
  "key6": "2vRQm4ku5B5heuYs3xZXibRk8BfjrtmqdAQnXn6zBQTwLuVYW6rg69Y4b5bVsT2BejzmQwZf66anCAFVFtEU7XCn",
  "key7": "5vtxmoNfvQP8Eusuup3Fnakz88h2hD1c1D6DArL7spL5m7aaHF6ucWq5TuXKXnPQs98F8nvhMY4eVeaasoooDnrq",
  "key8": "UBeXCLr6AS5sSiornG8iKDissMWnKd6jdpy1PKxTrMqhjRE5SzKeab5jvnQSdequqFNpHgAqk3w5Hu4i9gUswnf",
  "key9": "uBYDNcq27EPJ8bLpMGsEfd3WNCUb4M4w7ZAneMRRAtRZaBPpFeoH7PmJUcgQezVBJRtaWpfzip7ydkjfit4j91Z",
  "key10": "5UPmWW1R1Spa1ezbS1M9e6wRfvD6Hwtb4GWxEXtBViGPPSyybSkQLJm3HhJkSNiXacjzpHDzsa9jkrDXETbJSk7n",
  "key11": "CHkeHHSxPc9Qg1yXNKsEQPSGsVu3yuotvZhNLoTfM4zxEfsrPae3gJyZSBzuEzve7owbmcguiHpi72Xdb8A1ybM",
  "key12": "4Szu4oj85nM3tMzrDJ6Jw1Cm3qNo6BLbL9j4wd8qFe63RXjn69M59i4sDE3mY9T52oG5FWYRGn7vYPN3x7eDzdtJ",
  "key13": "2VrrxqkQg11q4S9MMR4Y9RenVMYW4fLowySdHnQK6cAHyYS9j5RDEVm4zgsqTATe2npVX3shwmnjEtGp79E47gq1",
  "key14": "5JZfcz8Lq6FpmDPChbdsjetY8wR7FosCQUBEjepyEnzGAgcnLDEYc67EiFAtr2jzqwksUokiAU8CooKiJEnPvUig",
  "key15": "yq3hS7StAc4w4iPoDS66WhRV7uvZj3ipqsa6zrGdhwZZrgCGoDan6QAge93njfPSt4WsguqCfkownDdjxJ7n7go",
  "key16": "4yawh1K7YV2WxA5ckY1iwSfmsvR41Zx74Ysvh6uL5Ug3w7HVw9upYu7bgpc3Q3GpzCEdu4J5ZcG6qsnUxdLPv7N8",
  "key17": "2y5d3J3roWEwSTRJM9BUfiUWyE7CWKMahcbKdrihHyfUPZfmvZ72G7U8zbw5q8Jo2yxEzZmgZ43FuWCD9XKif7iy",
  "key18": "3RqGrQVAQv4hFsLuH4VzZoQmRirQEJcDhkRvBWuT5k5SWt8EHVtH6F3981Ukq7B1ndKbXud93KjB1J1DeebVqq6y",
  "key19": "3R8aTCmodjKetgvxiUiigCxTSAWyBot6HCbgNEkcHL5d9cQk9obgnRnY4smSkA2r8RBBUiNjwkTzDbhq2Y1UNwie",
  "key20": "12JhYCgmoJPK3QgRMxRNV2K8oyzmn6AQyceuRU3UM6seLJYJCz1BKY44NeJ31id3Ci4Bbwb9d7KtvPpWRUBcRjW",
  "key21": "27QJfareKfUFoinfudCtvwXEPJzHDLYFLVzbkUvfN2tDExcsfM3XKptPFfsDxvcPk85jeiRzCC993ffBKMHnp4XB",
  "key22": "5cDiM6WYQdNSnCo4CtcgUQWib7aFeE978nRjzPwgRoHWV6YFMGnx36cahQbNwVFrq3TTdH2yDf9nEkB92yef4ttL",
  "key23": "2ULgS6vtKTydEPfWESogHATYNQi5GpR89agwaxX8shweUBN8sUU2BoeeomGzfkvGQTussxLLZ2mJPse7MhziMDTc",
  "key24": "4apFNMoLbcZ46gUUWrxCCx3hgMCkejxDf9gseCmJJfZe3c65jqeaCAwxYdStMCxajx2eCkUzYGN2psJJYDqW8M7T",
  "key25": "2GJcmMkESeNtKsSt4z7SE9717Cn8UDuU1QdCEVt7XMvWiWTSTPcuBe6cyGEvdE2d6vqxbBQQm2t448QtVf39G9E4",
  "key26": "5HhSyQn2UbCJZHTfg5kGKFuc39timR2NxcK6pzVUxCbopqMFAVTxdNdndHXze68D8sLD6PqetMoGpULosgnbN2b1",
  "key27": "4qPsCfN7diyWgsZkL7cpoRGRSNF9uHPngopQ8NRpNRQu71DQQgCjBSPmcwszWKuf8eGfUiKZXvCC3neZWuHbUmh1",
  "key28": "59GMqPYaVeK7zjwU2Dtxbmuu8JfYSqA2RRVv5JjvuLyzRCmz8aX6Brwaf1GAbjSYUS58N1UyZq16CBkHRtjpkCgL",
  "key29": "o47TdQrbebfsTW3cvMpLn7B2KiDF299qKSgXko6EjAiYE3QYpjk6jqCRVQZ2Qkia2RDBKKotFyNGze8eWja4Udd",
  "key30": "5DKfMbTvFuPLm5oJs6UhE23VhHbcUQ33hXD9XmiPRzj4qTQumzW8W2bjV9H4UqqUANRqPN4ja3BkoCyB4wdPyK9E",
  "key31": "5bWvybXG3VHXL8XTXUo4qBaNM9sDwqCjatKm3DvVDzUrQUxmyyCVRzxUSN47u5wNLS5Y7oEU6UbMzNvDcC9tVcbt",
  "key32": "BJ2fGRP7WdbZFEqSyNmUT98BHZe8M1bWgWLBKmWqjiGisJDNrYAQs1gnT9spQJ9pddJLLJy7CGpQTjRMVgbrHiC",
  "key33": "2bfoNhh9kFzs4H4gaSdnhQdzDqfkDEnFMpRCAhYfrthsbyZAikGqnRJiRLXuJHSzuRBEvimvkAsnktt1ikGmLkbf",
  "key34": "FEE7ReGKKtzifPmikStB37q4Gnrxcb4Nt57xbFQbT3ffS9kRYe1CZNy5FwP6ArPZ8bmBUxUYAtdUyX3UACpD1JX",
  "key35": "4srjchY35Kthk2RPYdFtQDwVGc35nMUFVaTGzFm5t9nRcdSbA8UTp4ADvwq9P1znDNKdvuXDvtsZcy5Zgz9rTzcz",
  "key36": "4E3V1EvhqMgtZjUEgH8JzqYSKtKbB1ZHWbiY16pi1B4P2LaoVrA26QCp32R4oNzNWUmdbqcjvTUqipG7XKuVFQPU",
  "key37": "czH6SJLBmzSMGYZw9bjobdpxTq3z2qYrti5dF3AWyhKnSy9np9EAE4d97Bbaqvg1Tu3XE6pJtGxH8cHJb8g8BTe",
  "key38": "3UnkX9LaswefhWUXACUFY6CDyW8YbUbkNaMjYy9AiRbvjyN8DFL4HyMz3jS8ZgA5iCmvBcoZBJZqiq98a4P3eM68",
  "key39": "3nj4VwuyDZ73mRbUE4w4aM1bRbSva2uskai7EymGMTjqBsFe9ecMrK1kMCh6R9hpg5223QsyJzAgaAS7FZ9dyU4s",
  "key40": "4j4dh49gWcjxtrQ4gyZ9Jt9CnqY6g49rdeBz6SGZcRPpT2gNCLbEfQdhQaf6icwMWc2PbCsLLC1aSCAucpG6vTbz",
  "key41": "2A1nv9GSiCmJjgiYnVE5pi7VSRiLumDNVngNVwpVS3bSK9jBpCiuuVKU1cv4Vrpo32nTf8vGoStTjPs2A4hLDeRj"
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
