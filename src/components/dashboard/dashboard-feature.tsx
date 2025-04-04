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
    "4cdRwSRX2Fb66mLszmQ3abtbZqbwzPasztMJzoyaVPy4MLYfkBZFovLSBW3HE53HMt11EiEHt3G3YURUigeaYx7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G3SRdk5t8GN3dcnagFaDFSHfN67NmzHRhYqfiP7ut53K2dxkSxygceVugjZ8dN9xD8dntFadPRrMBMwzXFpcidV",
  "key1": "5bEwK7XLzdxab2r2d81fQc2QFC3jecZViT1nQR6BAVCU5EoHHB4HSpBDH4FwMsBDJxJKj4ERwdC2mLUR6eqVjAEV",
  "key2": "2oMENj2ZTTsMB191sh2BWLgXTckqb8rDEA24FhLXUiv5QkVV6iFUrdVFRLtx1ZpMwReRrCq9MUPDZVQakixqhBJT",
  "key3": "4Ckc6QynMTVmPvzz9NWLoPgtottkANPHfg1SvgFF2bu9BViDrFcr1gaA8vZSfqfXASdLmhvgPv7sH5oFbejDHcqN",
  "key4": "xPFCDx53K9SjSw44egFibyEmN86qVQ2jUfNUg46KPukSzN5DbyUihWTsfX9iYTiDLRiRnSo5bWcwSdjUHEpYTLV",
  "key5": "5t4HRontK1CcuShh7cwk9hqgcXmMgbdzY7o7wS4aNPzMSo1PZF1Fx7Nfw799yQiN3REnfHtwtXG5Ku3FQ4SP784P",
  "key6": "2HZMoLzChocAb24jx4hzrLApBDQCeGngpQapWKmm1kMsmPjX73rxY8XRXcehDbfCusK6JCGPy6geCS2DpEhXNPSn",
  "key7": "3ZkrenkyTDFTKLoeVG1WU21xNH16m1xGdw11LVjspVdzKcTU5QdEZCazuFSbQNVXswYzj3ZbYw6uZtXbjryxh3Ge",
  "key8": "2czvPtbAX5Edq7L2J7cMtKkmR95bDzBJV8mUiGn4JuVkL3YErVNFpxAHDCRNtysfSA4A7mHT4bdRfkrenmZLvD2s",
  "key9": "7Q59rYfCHsQcHm4m83Dx2SF573dQiggGs9NuUPfkXoWpdu1xqzaVhqr4V57KvF9kGWRZnJ1VM7ufCR66BKeaUeP",
  "key10": "8bqfbd1ihBtcqKW83TK65EByyhb8oCW8sWAZYefCp3fHFKXnjcCv18MrmwPsYmHD9cgQAtSX5eFCmVFnc6KuApm",
  "key11": "4eyZvR1WmW9MPpJv98zXQCBcv2XFxUc85apvCGw1bMWfvFXwBWg4uE3hfPuKkkQPtcKmqBydDTfkcvcQfbmbLx3N",
  "key12": "3hjPXDtAdqysKHMydyU6Fin8awfrfdzE2TpU2BXgdyRKDDCkrP7ajVa2LKYxX6GQLDohTSgtLULML21tx7vjCDim",
  "key13": "2WeYV3jC3jy9w1G5PvHYVu8fi2Swmg9Xhio2BDgfcMmASoXbjEqXQru74xsjL6ZYFddNobD1yTXtnhWgJHUTkAcc",
  "key14": "5WLRP7X2dofN4jPyG8X7GHNmzy4e9edck4WV8iL17YMbSFYTzvk5sDKMgWWUbyDuvUMXSFk8HVw88KH8bn1a6uH",
  "key15": "3uVTod4jKzVKmvwnifcb8Wi6KTFoY7Pd92g5bUjYEfHhPEQmAC7ySiLRSfqGVzZV9qCoaZ1JsYDRfTSKTSbhdgqs",
  "key16": "4kg7mHVvs4Gj8iap7h8Zgz2Z1DyXURvhWRfgCXKiRXNKQndpPKDPVeeTfNKRKanftrYPvfsdkusTgkPnTCTb78z7",
  "key17": "3PteSYDqZNvwGRZJCeLJJZ4Mwbd2P4FZSJ4wr1N7Q4bfzJwGsTia4jxy3kduEMU5FwUWjcLr5xDHaBPMQkgb6FDJ",
  "key18": "38VsSA5QxQU3CvMW1LqVU6ZaqhhB6thcqEAdxbGEUhr8h9yZsHbwHhrcqm8kWQ13PXzp71u2VPAz9jyMsxDYfRg6",
  "key19": "4KeS5hXZ7yA3FtE6faxsR1vLQkyrt2DLjCz3FcFkWcjPrKdnTJpzzoAZiEpLKE54khmJDH5Wkxt7QFc1uaJ6UrRU",
  "key20": "2HvbqbUDgkJgKtbpU3qWptFFtoEJoEgmbUoGpZj4eDYipzTvawq1fXirvotj1PLzitcCquFVLft98Ewen6Rbiez6",
  "key21": "2sNJVfq29DQCJHoK3gWKsGWiNKoktS2WGfXfjv8T7FHEt8vGn2uY6BAdJFmn4eM84zSLx7CfuJ2mT5eAVtyfEQWq",
  "key22": "4Wr9BxApEBUStQtELuvgNrFtRTQnKxyXRiUsDxMaEQTMsBGcFKT3XWVEEtp9yC8sAcpbrWZQCYo1iNHPSkEUgyQ4",
  "key23": "34n6nu4z2DD8qzivQfZWgN6eRFZJpMV6rW57GcNjCk6FUbqCpenwNQyoHHTUfQ4t9Qx3u5RYbQAvEmfGnYVNxgoZ",
  "key24": "5m7c7WC1Z6ovCJKBebn9UHDEcX1UT5JeMnaoFn3fUiQHhPn6yJiQZXGerdxjZ5bRwuV4U8D9X8oqr26hpK93ZVaq",
  "key25": "5Lk4KntGsw1yzrFFtTJfF8ALaeYSApPumw8W5qAG6fZmb9M6LooUKrDiosj54Pz4cf217NuzeiVwDMSAARMnQRLb",
  "key26": "5ts3wA6CH2UGbad2RGmpFSAMWjiMUYbpfjyJLm3BfitXR5yR9C6G7mfhf8BgTmEWpVt3cbGiJNAB56vu36nKnj3N",
  "key27": "iNbkY7wMCkD7JdQDk1kXdnYrYvyPuYPQ8oj42oWLqRSk9nHhK4Utx3t7n5o14titNtw3yq4nxQBN55PX2tPXEBu",
  "key28": "2XB4HcsY6w9X1kbqRKMyzsvcQPLyg3Mbhw9w8NkysqTHXQBHoyfuc7qEVHwAL4za1eVUP4HNnnj1jVgTf66dtted",
  "key29": "2VyruSyD8BekLDc55gxYkuLTPuXTdtnKDNQk6Pbjtntda5nMtvoJy42iDZ9Sh6QogFKJB8611zShckCZgPHUVMWX",
  "key30": "3LPQgTTAAwjFE9PkDqbeyQcyNTPpPxgMhHpW3LuCRWTgpyBSokBHUY2rv2QVUg2teZz4oa3NEk42RThmpvS3g3s5",
  "key31": "4QAmJNS4DDjFuXfYLjiZUNa7rNZ4Vxj21EoRqx4HQL5GsUpLmsbtWHksbnxxE38P75NvFdHhtceKcF83yQdecHHZ",
  "key32": "4xK4Xn2RVoKDN32ZPaHtfjCs4SJAHHhjFTx5b8EqswGiepe3pt4fAz4yXaSP7uCx3ZmrS3UJsYdR314EQt5pd1tj",
  "key33": "3kwiGMQvmoPohQfRgfP3T3Sf7quwxioPUoHKhcDeyoKnuGNLNhTKyeZmwTVHGrbArhj4APHmbGqA4zCdpYSDauKE",
  "key34": "3L6Gyxx8rMEQpX3sKi811ATc6SVyhb7BhHSjaTrFQULwKexsqtRe3VVJJasduLE4gYVHTqd9b5MTKBFsDS9pbx9u",
  "key35": "2fwV8g8hfU6sipWxQ5WHiZUgAFaPpc9sQZqo6hXLnk5jJL5TRFcyNAdXsHwcUJUDSibyw7nNoUvF8cFkeMSUs5rP",
  "key36": "5Ss1CH5p6DZhqq9sjixZiQH1RV4kUxDug8dUZ31cNANBogqaGZzamZiVUDXxRgioF1jyJbx6W9Re4aibmK9cXYJv",
  "key37": "4nPYcXLSniwEHs9mTzvmTMG8tehooRciS5Wd6y11To45FZSHr4PHCjGiQsKJCziy9rUr5TxacdYcccQjiZtcuYUu",
  "key38": "bAaQXvqGWb9UmpoXdwWe9b4GFpqiYyZXJ17hzqJC3SedtamXbHJ9KnRWFHbKK1xW5TVJo3nUkJPnhBxJ6U1vW9B",
  "key39": "34ecU52aXm7ZGqcRCy2A5VVS2FsZo9eUiTSL1D4xwF3ms75kPVKutofXr172bCQ16ens6eMCxLFSWBWatnPExJ11",
  "key40": "5uCu8ZznEd1LyCCmAfn1UeJr8q9Mv72HuEz3hbsrzxRpv4MphpRKQiwVRDb4uV8pxyzxb9qSibuphGz4PZGjftJM",
  "key41": "48Lkg5qLF7PRwnEcDXJbMCCiW9enim2uyGh631Dv2T8QwRpECmQwiQUc7jML7dxsbQWw5PmJUxq3xEboPR8Jue5j",
  "key42": "4AYBeDEXYGFtpa6WPuEzjtTWviqo2zXCSVKaD7BAw4WfG7y9qzjg2Dqjqj2iPvniLqGFE2szJugcJnQYEJEJRJQ6",
  "key43": "3U27egB1x2Wb9uSzamqXyYb44eAQzAZE6NDk7LesPvR8PHg2pKwCTtkT4v32Lh9VjxzTGSKhgpgvahWzmMtnfMPw",
  "key44": "dUoD4R6HAFTYTDsWAu8DXqFbdPYKoJbURbFpStTpP3iCbMrXPaLBaSejEPYJK2Lhrhy8JGvwhxqe31jmb1GR1nD",
  "key45": "XSVBoewGDhT5iwEtVXPkjEvCJ2h4tFFFBDfjYTUQ7BKbLyJrjVPXeUTH9YXcxZN8w8Zn386pxsD5RMNvXgUDxba",
  "key46": "4hyLiKtrWfKXW3bMWWJeh8zg6riugd3QQVnyxXGyxvYootX1CuNkBvpJiiUaUvocey4RpdtYGYgmsCo7KLb88LuN",
  "key47": "DJHUMkF12VFzX6MEkeihT2dbSvzNjbXjv2RCz994qVqc3jQ1BZzgaB7zMYtwBuj8GvAn3fBKUybxuqGhNpScCCc"
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
