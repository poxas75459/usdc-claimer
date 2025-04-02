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
    "2UtkD1SjMTnywHnc182ig74pHrxxPXcbyYWHbEmaYwfUAoJzw6noEhyyByKhPfToeKQnbXWZUUxBChcGj89xMiHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCdk5cxagE7nvmwuPnqBuuWu42iyinVZ9ZEk5VZJwbJwv74ZC9hxAjxPyPB8ZSyVazbcvqVXVLFT4VPxBu95Qgt",
  "key1": "2xEV4C5ekDXs1sEdt51wf62ZPaEC7NN8Rtpy1NYdzMD8VezcZXZLetvrNdwUDDFWq5EJ93RTH4uQVSKVaUeVG5s4",
  "key2": "5UVhnyC1p4yr1HmpLQDfU5VBkcGeErc5bWDyMyAfgyNAmgrp5MTDQsCNXFLVUnWLo3WJEU67uFBvGFNHgfSNG56Y",
  "key3": "5PxKbFSXScUoqH3iRSnoA65UQUUHko9v4WMg6PG1DhP7myBmRQkU8ysn6SQpv1rxCszxem5DT1vAoi16HWudtRAZ",
  "key4": "4RCBX82eotirTBUfmtWa5H1dN7NqrMr4agyYYarLY9TrXexWipQH6NHP2F65c7ZwmqAxMrF7SHX8Mqokj8mbLLhL",
  "key5": "5kjDJDZQet9FRvEBFMKsUT82gRewdZtZkCY44q8mKc8jCWdmucL56u45FAoahL2XuGMqcYAStVCHyHGyirdujSrj",
  "key6": "5K4uR6hDtMhcH5SL6b9nGDtWdtizGkesgvw1aYVrHn2QhHyqgiRkaa5zAN4H5kuSBifAUjJKPpfQUJFjuuhrtkg4",
  "key7": "252gKf1EYarxrCxPhbzQvBZuePrwmWYXh71TNZaGh117qtERGwr2kGaMPJheC1EQipJyGkvA24VUB4xMQ97bJCCG",
  "key8": "5dzNSodBUMVTY1kepr1RahUjfcjEPXjW2GEkSoi3n4xptgpT847T3CEHPgutFu2WsWa5Dpivge5Thm7wMgbQK2vK",
  "key9": "3bQSCwfG8oTCwbR9ud7QsAAz7jHciXD72XujS8cVLtSK9mWmkMQ7BgDq4CGxHTyikYuQuQxFMkdicruhUzFo1Tma",
  "key10": "2rkGHUdwenYPFeXj1D1ZNWUnDPr2pPYxc9xYKtdKmAmqFLtYtJd2jYp5zX9L1oWW4Ngn9uC6rp7sZ1tvEHs7wtoC",
  "key11": "5A7R42psyCW5nLBDmwMFUipDaWfS1wfG7xYhJffBs2fmeenKRGZeH1Zk3TR6sixU99SFL61e8A7H5evm5Jwb953q",
  "key12": "2aXqFuV3RYWPu2kyT9mLxDYZp87mcBUUXUEqFgYZm6hdmTT4cWK4Dfjd6RUMsd2fM78Tm7864RWhmUdo71t13mpT",
  "key13": "5hSVqVGxx11wSrM6pSEa4RFYsxExYYjyApQWuyFMd9XUAj5WCpG1zsU52pTaTmZzPqhpTmMZF6A3jKorR1mNRvkc",
  "key14": "5fG2kuNw94gTEqy6ywpeXGMoLcZBNBHsAfXS6FVkiPDVzQ72NZ6FqqhZCgZShdUGEqP6BE1gyUuCHC2psq17odpR",
  "key15": "3k8kkanGy61VQpaFVhegNWwUzsk53kGxBoT5QwqKQkZCxxUZ9oindSFWoui5QSdDCGZP9EdNPCbUNAaXLdzHXLKW",
  "key16": "2i9HnKRQi5EG739CCKP8koiu9g9pT8oAS1FtXAmkL1hKWoVQtCF2taxWsw6UB7YTkf7Ug4qVQwYC5eiU2zDZrVGm",
  "key17": "4fK8b9WEkCk2mTxkGgSJEX5Y5RRc5Fy1pbFCdmSM9LedYCExozK8ey978hCmwAhLDJGANpjwMdzAsKFJwhPzp1is",
  "key18": "5VL4fBXZBD5Ns8ZxXmXZQ6BmW2WGBxLSBHnBGDfEfRriHJ5tKReZqGZJvvA7FRQimjQttfkXpFJ4ayyqig4s8GPh",
  "key19": "5uBAaXS4hpy37yuxpxpVT9CfcpyTj5dV9CgngGb48mSvmBK41S37ja4V4WvU7JKwbg7ThdMyDyU6JAaScjQ9UoNG",
  "key20": "62SSSfpBuoEztqy2Lkw8z12vY5YFDac1dMCaUazpygf3M9MmC7vQ5dGb3yK9xUGrvWDvdJr3RmyDiDcdXB1dTrC6",
  "key21": "2Rdi1XCzfbcU3Are9nba6rzE58ncrKFsgsd5VmNx4JB88ngMQnfLPntiJJ5XQL45GWsbZY6T9AtwhMF85ZPZf9hK",
  "key22": "WX8vx85V888wuPXQFrLyLoFZXPxKfuGwkSxNoixUaoGXQQXvBcJZfAfNPqoXyQemZLLcqEko73tBLye5uz8WCWg",
  "key23": "3WNp4JwqQoJm4VHC5qDfKy3WbcJJnHkGU4BEQmPCLuGzLakyPMqxmRbaMRrSopnDufZjyK7xJBSTrvJpP32eC77i",
  "key24": "3nF2zqcnMdcVZtZqehopz2H8ifVyxCHGDdh8MfhPAFTxtSHg1ytc6Co43CTzU3fHHBSvA48bDBuJVtkmPrb6Dq5J",
  "key25": "SSTUe3RsF2tTJzLGEqxM7UbMprnmcgbUt2KK15zpZLEramuYxtut7BGtRtx4qrJjJFAi3frJWgYacGCZcuAn94J",
  "key26": "2YKMSDjjK8rYtAFecmnutgWEenNuerX1XwRMWdNRgxBeKd1tQNogTUbctGt3NUvUvv1PRU8J8ZMAcGhNnfMsFS6C",
  "key27": "5mbx3uT2eDevtaMd2SJmuCwbMVNaMqvRGZgrhzu2scjTXxmZXNGT4i7nWwuXZ2AQhGgVKLsaqMNcLZgFa5yDzttc",
  "key28": "2mV3gXxfah1NykbaZYU4MHMQfsvKGxGZZ9Ct1fSTA8bz25dWeTV8k9dXWLjaqdXQFsp7nU74defvmzGxMZAL6tZE",
  "key29": "2UuwoAwPDYpM5oR442F5MhG8h5kwWByNeXrkxATDRtxrfWA2RwjQJGATwsemjZ5LzNSqRpAHVCbaGM3eATCGQD7A",
  "key30": "5HZ7yr3fX2S6WA4YfTutxrx55KZNEoty45y6ngfk18BuseaXtPJpi9E5bsn8Fni1wm7aMUvSyfKpiejLszyAEhQS",
  "key31": "5XL6dBz72UUJW1QVvNb9sTUg3pcXUUYWEKorSG4rZMCk4BsaMArmVbrvncEUBeE25rDfRXc5ZKQo3q8pHvG3euHf"
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
