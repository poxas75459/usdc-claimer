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
    "2sFYi931pSw6vvQpDyeYoGzEcZ7xMYdg6mAtBVtWn5B8ys95XAp4rbU4gBMxVkZpTfEU91YvvKH3BbqVr5XCcd7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBtfGgmWad8Y2XTHhmSELVms8MPCgSYRqvDqbZ9D8ERprb69wpwjmuKx3UojV6j77L1guCeUnkVjG5FnQWmJbhk",
  "key1": "2bHMeMooLGSpiFkZcaYNaSzvahqXfv8oUswPrD1HsAJb6XLoeDA9YMyBFVor8jLzu8XVoGaFMHJzMdrXMMdcgR3L",
  "key2": "38rRF3Sz1kS6Bs7qS4ThNPYn6QoqPcm38WSmb1kJhCmfvAZg3aiPU5iAXeeC1SkC47QYD7BrhvxJGQzzv2Msbqxb",
  "key3": "3T3EWTzHqX4pjwWLxTFLHjpxpKweNSKf8wvxX8Rumn4Lyxwc17SEKdRBJi1Axe3a2gGFDrQrA5KWZ1FrB5s91iGA",
  "key4": "5cj4B4Bnej2uwNFJbB3wY4zGyKtJXALcYHBwJXYFbNuJLakzB1A51oVptLSFNEwEtMv1tgBW3eoCNfmYVgduURRM",
  "key5": "cc2WRYXJ69yGqjuGkNxrkLpuosUwyySReDDV81fAfct8wGo6DqFVyvhQsCap7KPat2ZEY7jahYo6ztADL46wCEt",
  "key6": "Rij1URFpup5j4fD3gvDB9Yv5nSKBva5GEsud63kW6joyKx5mrsmEQMg6W5Dkrosu5piEUDzgoJCZs8hk3cE1smF",
  "key7": "4NSH2ExsjhZ78gukFehmQxZVJ3LKqD8tvqKGneRoTG5TkWvtXm2vGSrC3yp1isuNvNMBsBaejAi4RpednE5im8w9",
  "key8": "44bmfXnL1oTbpY1tZ5Yj8zqvZzkzhqjvrWwLDcwQ69TYBCTM2CtDiZugvj4J35kMdyLBtCh3UiQh8CNgNU2Doo24",
  "key9": "3vQE3VpwhniT2rPkg2j6d3YebgL4VEZfhLiRTdj45gVasmp4aVTgwXH51y8eKAbe8WBnCEHsfkSaXNzPrq9AZJhs",
  "key10": "3QgBGGSkthF4ScPwKGqrtRMU95TQoELEbtvKWoxPYxxaca44fnvwNWdrk9oWChb3PfR9s84wpEYsWqk4QGg9X1iy",
  "key11": "5c3AQSzppNjGK9yVCSPVTvvXzmvWwSfiLAgaBhmjVBf5Q2Yu3mXdu9iabWNSK8aadbaLmsWvS6Pyrx4s7MMutAkV",
  "key12": "4DyNU218q2k9C21MusByTghJxN9335ZqfC2m42XTcSdGavZJbzVup51mcz7LhmLA3RZJQPA589MBm3af4BNusBFC",
  "key13": "cG7u2yxZjLWftr5KKo9CSPEniACn9zFDiSaTCmJapHVi2mfboHUa4NqWAua6kid8K4iVXxeS34d15e1uYQVZudG",
  "key14": "46FtDarmfDySgvdMY2Y7WWhkZXSoVowEVCbdSHT7uSbEnpdESq76KQG9aZKtTyfdcYKABFGMUzWvdgiwoXZdFqJ",
  "key15": "2btHSq7e9bYzEh4ranS1U9gTyM8PxrCdrhg1w36aqPakark8iDyamXaNNrfDRrPbAtJGszD3N4S6mbAPYJquzM8b",
  "key16": "5hYqgaKXkBiAn6d2uCn1WUYnGjYspkytczW6Mh4P7E46WYVRS4T5a1CY3JsRFqPHUy2tdD6zXY2peKKdmz3P1Ydy",
  "key17": "3NAeqPT74aybJ81bNRqynSV78oH1gaBawAabS1XoTKKfN2v36cJdBPHxAKCCvnxk2oWVMnBccNBQ3W5q2ZN9FRQq",
  "key18": "5fY4i9Jdr4RCJ96QnX1wpyryzqPhFgfrzC92MvdFfBJ4sf3MEdD544Z5Yxwf8m9viCyWoAXxkYEEUFcjCfornuBW",
  "key19": "4c4c8zbZgCDQ78H7d3ZkXFyrhACQ932WuKySiLyCej4HkVrgHyv16Vwy6eJErKeuzw8RBK2HncKmbxXXBNQfzc3c",
  "key20": "udmoQFTgyWQtfE5zm1DyXvCmKBzuJrHKR8ThFb14Boxri76darK56B3zNX7HtZW6uyyf8Hs2Enx4U6FnioEH1EH",
  "key21": "52kTxcckNV19nVbNLz1Z7Hs8FDZoCvW9kFsecPu5TVyibY7Xtrq7RrVzfKihtFPhvunTjWbBjATBzUMuZ28ZhvTk",
  "key22": "iPQPp7pToV2ibKn2ZjSwekPQ5yv5Q1uW6HYJcSc5AkuED6rEwbGB8a4BZ1xRYHLDWa8Tierd4Jp6GEMgh3KX5HY",
  "key23": "e7adYoKotMDgNuo2c5YYfDN5dg3CLE7Lq3ttFCKSar1FQzSwXT1Keo18ULL1i7QFk5cbTa1YDfp531y8XVcHPgc",
  "key24": "5wADQjB3jZ5H4MCSEZ7X9eLxBwGq3gxUKju3HLqxNSR6NwSJGPAKQtzseFLSyk31comAQV3RFiQBJEY1vQ8o1yR8",
  "key25": "39AXBjkceMA6MVdrfinhq6CXN7c9pWKHqcFqhQDhpeqFoc7C8SF8ubXxQF2PHgLrDGzhbEHAZXpngYC6QybBE2HX",
  "key26": "3mYzhTfieemdbrwyueGt7fMUfd2VUW1xrStPPRnJeQJBtqeUuhFtpeEf4ZtMF66shqFespRwu7saej2NwafJNcx6",
  "key27": "4nxTAFSRX88Kd3qe6K98uqMt1V1wMwGcaP7SDveYBZJBuBaSyzXQgMBXhhtgCBeJbN8hHaQD68cf3K9ssTQpSEzZ",
  "key28": "iDT7CPxyb1TiHjiUy2t8VeLRjWVRs9Wt8eSAvcZ75gkSii9vYiSyoD1QTWrPyCv7vxRoXEkK2G9GRxF1wNBv6rj",
  "key29": "2Jwjv63og92puti3HrYzoS9LVy1nxeWNSV8xjJrMa8mdnSyi7vX75ztZEpoTWKLqEtPUmrWEDaYdV6yUrR8CugR3",
  "key30": "2ZxW9ed2uvCf1SxsShjg8J8bw99dPpzJmGSH9KLAQAsPoz8P8bUZfvMY2t83HgFptkVeLNdCAZQKzSUqPC9H4g9i",
  "key31": "53L45hGRFt5mvXmMPbaWbA6YjpcEMCRqpxCsTSS4RR7kUjvccXpsMYbSZ7EPHVeDeWjQ4GwyKtCcr1R4U4hWs4bK",
  "key32": "44CKAKaQT7raCu6YQrvHyWQb8zLK1P9TrgkEW4ud3AYMvhDoKQ3dHjxv4tzCN96fWXeSiq7yFD844hH978sGSY4A",
  "key33": "4dN6Dqxb5Fy1ckPBg8zKBfzfFj9AUSwWguiQr3xANHBLkFCbgkFdVCJhCWuGA4KPu8RMfQ6dV8tkRh52GHPhuR8n",
  "key34": "2ysAWcC4wJPf4gffNo816NachasdinJw9XHoADpvEG58iDBkKz71WWFQQ7EXuCfMkm9vwfSzLc9bXjfytHDuBFFV",
  "key35": "Wc3unaMjCiLjbUVdffLFFKGWXGX9gr6fQArZqJy2qUXAR4W7vAgwBTPLUGi3CzeZSYBg7hvGuKwnsCpbtugkuKE",
  "key36": "nVNC8WajJXK3pMDDpviBPdtHreXsqeU7vMetc5rYU9oVcmvvumtNSTg36QQaRe15vcv5P2c7nq3k3xmFv9Bh43p",
  "key37": "aCkczSTJv5qMPCGMBk8dRU7dBr5u842NCoWCtvXLVtn9gv4kYnU3tGem4n5SLGVBSYwaY8mjEUBcd7b2sDiSmVg",
  "key38": "3nTWxPwoqDCnEzyp6rY76zomuNhgTcsE448fWdBy22hNnwtkHUHnsvAxn9vqkDveDdwEkcfSSaNeeiQvFXXpXaQ",
  "key39": "3EerZYHhW22X9RbZLDhyfbCvEnDwkDgiyecS86fp9kjhTr53TQaEPJD2MmRRf3BXrvS3Ty5cBkuK9bva72JvmZ7h",
  "key40": "57GWiwFfmKC5aASafYTgT67ojfG13o4h63KXhnV7uiVAYfpRKt5VNvziCvsqpAPvvqvatUTEXsvXUC6XYSTKsFC9",
  "key41": "3FkNLS3Ej16NasvnET2naFRx17ZWNgEkPuMrtfEonwGWx4mFCjab64YBMuYa2jVq7Lwa6r6H1oxRryArZFTv448m",
  "key42": "5NHdSR7G5LtUjmWBDbjQ1MyetFC4r4MU9pFZ5CWDSiQawq9SQqs2HvaxbqHsrUKHXP4ii84vFhK86PAQazb2cCkk",
  "key43": "4kRg7418ZAtwWVkJTxi1tPwFDZcy538CMgh5qyy7Uc3QgC9WgN9zB7eEx9KybgLUNk5sNm3Nx7sYvQ7ZdnfxJbDb",
  "key44": "28ANmXD5U7PXdCvGgZ2NCyyZZQf3ghKZJh9WWqqGvFWx9SJPesaeUdVGhweL4QB7QCuFBhRT22vo9SfmhDUZyYsk",
  "key45": "5ZUYqR7rsH52jYBRhMNc5kqVvB5uSLnp9yqPgSyhKdACLrSuK3uroEjoWrTVyXGFWgCXDUVSePRj1JQP6njWneq1",
  "key46": "4QXhBQPNcKAyWjiEAbioiKPtWXLoaUzZEV71gV8gjoHYSyzyxVqHMxitja17pFhVGGHBiresCZYt7raAkuBQZsk4",
  "key47": "2Kt6eP66VW2XcX6aMfmVGGTY3W2hvfvs9H2XC6tuZGpbZMSAe8pBGBgdDWkfJQjZmaBz99rHPo93ru2kN5KZGWhx"
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
