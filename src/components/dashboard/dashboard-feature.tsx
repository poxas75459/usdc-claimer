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
    "5mdWMdzqQMiUCAHnDzad84wJtADsuF1aFtMUmuJ9qrNVKTGMGYvukMPMwuWqbJibZaJHFggYTMMbbazGyN73DCU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nzk8xd9cAJFbVkpMgLHVxCZVprTS21hGPTcjNcm9PfzFLpYqY62RgrUBNRfvFHpEnLVZ6iCrW9mEXe5LFpu4qza",
  "key1": "PwjwZsDhPSbaWGinj8KxPM2g4piq8Rt5warSKAqrA6ts8ed7KNfidWZDcYn8MWtm7BYP3CHoktzXTNSYNxrgD7F",
  "key2": "5YNrgCd1kvSW5WbdgFGYFnD5tBRS4amFgtQwNJCgoZhbZg7EszLBL1UYqMANoCD9nwQ4uvqWQqxqKSodnp1PGS5H",
  "key3": "3rechRx2hgJr4G5oikd7gEgL9dW11a1qZbuEtaNH5U9FBs6XSxkLPUiPXfo9WxvbVA9JQNc1ZBHynBgANpx4H9BX",
  "key4": "31uUXqFgaa5UMsudsQbN49qSBkaXDq9DUEuopN5ZLUBBbzkqtWXc4d3gmEQ7svuGXLtk6afdVUVD34UGkuY9wAxE",
  "key5": "3pfMkvUo2Uy6msPLRAFCtfvZTJUawQryDrNkTSjMYxRShNms3QntAMNEZgqfCbK8ADYH4GaVoYJjbY3qaRhRXtsc",
  "key6": "3QS3Br5UFBZqxTHFLhhEFjibpBzDwTGWeW6SVhBuQAHqtaUhZ2or5kWoNGb9wzBCHf6QS4wMGsk82UzvdgQVdmsD",
  "key7": "2ubn9LhXhhPT4LbfJr9wnawBjLiTMy1pWhYk27LLaZu9rRx9nb8jtx6ExXzaZa46G6gUz8H2pAU2pz9vYQFFBz6i",
  "key8": "4u7XmBmF2rkSZ1J3VjEt6vChsQaVz3PSCHH7yPM733J5uY8xJHZt9xq5oik3jWVV6wF9rRBAAKBnSWUgdRah2BH9",
  "key9": "2iREQXoVpXoT7xdU1Nwt2JngaAtNmKnpYAuCQAmZ5y9ioUBE6jDegT1a1VwgetWqQex75FsH4VxNNn3jkUaibQ5f",
  "key10": "2REoaMYCXVemfDzgwqsN9WJze7x2DXJQYJ9VpAJPsuJe9WU5HxdYfB9h4hyTZW1naoYzSH3c5HhB6wfg8f1T7LX7",
  "key11": "2gFCDwdhg6r2hVLGid6xBReSMRCFi6cRMTvYaE3NBCEYgo7GSXNuXSoBSpo2LqtbcrqdoLCGHUFTJGWG6kuB4azk",
  "key12": "5J7pXBHefjpvyb76fcc6gREcQixuts2YGxwzMTT2Qqb2PezD3pU1SKEwPNJhoHaTsQkjbvPPx542Azxh9Z7ysg35",
  "key13": "2GUWNvpVczUrGdnb2dqveNbdYeXVqgZr26T3pzhgTY7BFGqtoo4axPePboiF1o1CZaB99488nnhmBnWPQFy2WJDz",
  "key14": "4NEL16aJGM4CrnVd1C5UGp6aDj6MW9yVSQMrdnJAhgo9D5kk9XU4avtu5w4Y31aJ3LqsEck65EwFNk5oEJNqDjR3",
  "key15": "4TRjtN9j2qu8tYRBfWfxKRrKQpy7MHjV5cdpKthia2uJjb9f1qrArPnLhtov7icnFykR57zibQFYrCqhFrBANsPb",
  "key16": "4nAwyGSWH4cLKGkvLahExgmsv2D5WEyjuPW3waLqFaaTXBm3k4ixhn6roDcqwCgxm8wdS7pPKE3d7AGJYcCkFK42",
  "key17": "RExSrcro3NZkr8W1E7CgYc2fc7QwTkKDiwusvEXd6TSBsa1TNPWD9SDBesoVfiQEcq3sA9Ev41PhUjB1c1R5bAQ",
  "key18": "4FFExGowKNivyZMLwvxsCfRQhQvykjJL99gBMhLeQma2o6ttesaCpsJgPhPz6jNjJim2qApKWrNcHEjR796uD4Yk",
  "key19": "57LdFAH6P9zLcxqtZ2VdX67P4dWAE5xMFh8UBXN28esQyDn4dGKuATfiQD3nBXr6J38rLrodPqc8JcghTv9GK5s1",
  "key20": "2ebx4acpZWbWTdWaAZKxezVKvq9LUb6WaLFpA845pr7zrPAfLTwndFoaqAjf2abqTUqz8qrXtHfk1TZUitMQrDRU",
  "key21": "3ToCtTgaZ8oD2UwJNV32nKazEY3YCGbWp5fxEt9oPXtafAV5CXRfmpXqdS5uEqfdvcKeVKWGQKAAtdCZY95NHTYg",
  "key22": "3CaWgd9piHCjZ5Ki4AMR5nMAsn3LAbPfRFX7PD9a4Jk7RmBiTEJR1isdL8b7KifGBS1EiRBaemaY3JsdtpGyCWiG",
  "key23": "4nnL8Tb78Fd9WNfenuvSWFZ7wigiAQx1jig9B2mpLwbc9Nz8dpwMnAh6zHTibKhkeZsLfsHX6zxTawYsRuHgoNpo",
  "key24": "4UHAiPYVUiShHk6c8zboQy1RfpiC9fYfqGMNWz1HsLUBVC6ZNQts4gCwhacub6cXG3zV5QQwwZBW9hzywpVixxNi",
  "key25": "4YiuBVVcEswrP8vLy17Xdsxf87zRMppGDe3c3azteHJdyE7ab7S2XnfnRVLR4CmjgRqS2EQEDhoJ5Kp7MGAE85Bh",
  "key26": "2dUQZnkCyXEGEK7Bd71qGRbwGFY1rfvkCcgxPsWwe47H33Yb9P5XzrBiEVt7c3BYqdcgL5S7MtRxhcYfFD52foDk",
  "key27": "4cuzLug6KSq9mTXWwc8MPvLYrT4jtqZmeVFV9W9uk7aAc87dX4q5G2xCptK2YNqTomJ3yGgrPxeBnLEDc59C3dTC",
  "key28": "3AJ2bAi9BJswurLvUrRETbeFghANKr2ixZ6pMhpSZHpvVwD5BxfyAGBvESksLq3vAGE14mYQm89Sxcz66BmrWc25",
  "key29": "3hgUDtCuR4irbB6Es5nVoLeVRCVT52PVqempPxBRAkQAN2XvBTyTgH6uQsaSzfmHujLNDDjAUBcoAFdR7TaFx7Pk",
  "key30": "2bQVZ9En9F3jdCkEcUm1XZ2vSzn8sThYew7Jo7aFH5Nt1e6LYV86T7Eyhjt1rmUwbDK3FDt9nti5o7rkDwyuHo1X",
  "key31": "4QFNvLWUcAkhdXbiGnZ8B9HRhKvx7U85KVnr4p5E6pxbUMTs65LbLSsrQMgs2VY9kBuR5tCWmWSZxrSUvkRPG5gW",
  "key32": "tTJvE85foYwPXwsa78fzJgt8rMyy1tSCkZMcjYVFxFGw3eDquMT3cnS6LKv5W5KcT9FA1XdLFK9vZ37W9WV4CDD",
  "key33": "3JiVMa5rG3Ug8ruu9MBkeLDWJjr3Qod79nBUahNy4xghLUKeKbPDBCgX22dRAMGi4nafnd177pRShYX3oT944Drt",
  "key34": "pnsMiPzrKDjaSiKo3hzcRUV3nGDfLNu4dvAyxw1GvyQbFrTwxrLKMvRj8xQsFMcS9DRHnXcDFnQC6kCgxAhFvSf",
  "key35": "5gopZVEZh3mQgr9NCDaVTJhh7JCnzonza8hrKDLZfyYDzuQSpdV35XDop4ivpskRDD2krGjH7AXsLKt1kRiUGVbi",
  "key36": "4dYUVL52hz8TtbqCFEtJFJ9r9YDnnnfP7BryXy7TiZCB32HaqiAD8mWsX7j3MFdhsEbhCPhorRbPCmcMxT4MRXLc",
  "key37": "45WsM4acz1notFUnNR6EBWiTcMrspMJipkqEfoCpZCnz89tF1UPmBGuYQqUQnYADwCxxvAqvKA6N8i2WmWXj2EGc",
  "key38": "2QTSUonmoZx5xReHcnujFzsUcLs6j9Ts7fYXrLMA32yMmxiCt9BVEvwkPNo7BoWhREW476xHQ8YAg5t3cmYJJdcv",
  "key39": "2gGutHgYDE34vT1Q7D7qAZ1rXtEapC4FgTjGQrWSA2Kh1kxRoYZzh1kCqwiiyPEgBQXevW8xTh33e1xnCib5psfm",
  "key40": "ScrfXUjn7spsLSGJCgQzsgz8M1LhXi3nuV5z5hdVaVMFBbgmu7m5qhEQDjqjgYTiDefkBFDXT7gHzKR8DTDXNSj",
  "key41": "3zMpayGYb6pbVmSv8CPHLxJiK76uCXw6Xym9AmrxcnGM3MPwfZdgReieK22o31KLnCrwEqyqWKY5UJpXXJ9rEMcs",
  "key42": "3ikF6Xsicai34PvXLcyUwtrXh5SRpjpuZpajbVG36AsBBmpAdWX8CxrnAcvaCJQV6Ca2vLhTysMgv633k3rcsprk",
  "key43": "h5Vazd49iC9TrNDMoDAUiJnaVmKu2yKAGCqN9MsunqJrB9P9KxBRVqHTHovpN5bTzUF2hc3Rnps8dga2ZtJa2oF"
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
