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
    "67pfBbfgTgAyn237hk7ebUy9BhQkz33g48XBm7yYKkvYri5s237edk79fZSyWxdXTx9c8oDfUppkqUZ37iLK8LdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ajK3kDxgo5j4uCukifX1UAVBDFTxDfXBUECqGzHjUeJdVVyJFPPWMx1rkRV7sssCFzb49py4uwq79z4aarVs8jp",
  "key1": "3pMfY1D4zAiKpJ5xqnd8eM2G7R3qumHAsXewPZd1QkMxqdjYweJcT8pTGnjEYJbKkgGyEu5S8XMtWpaoaezkaRAU",
  "key2": "5sKaAy952a3HPPKpy7sjuLCWufqvP2HPc1fwhtze1vwoPJji98MY3uvx1T2oxgNoRmpSQFp1EmaM6mBZvaoFLs2u",
  "key3": "2BXmSs1U4p49fsVAtSqCULmUprg2Kk6bBzkgVcVZNKVKfVBhHjDcPT39DkymdzDACSMBxdkHjioJtWuXtaXRte9s",
  "key4": "5hEHT8mn7188QmkCjPXd8EWLp1Y1oN7phfxGjRqPc3XVFjBgeXDNmLcrZo1hVPbqtyDxH1SmwbkFtv35ZBVFVJtL",
  "key5": "3uQXUBa3vZqvbyhNPexjRK3qbUcbceMWctRDyKV9HuV55XkmPtDAT69F3S3UxTQu6u9xJHWqtJppuUirmmnrYmZT",
  "key6": "5ZebPbA1G9Rrd2sA4EuhpgkgkEckdbihAEJLXZmookMuMbeqWN336Lx68S4vU9a6xvdWy8kogYXCvnoDEt3TcxtD",
  "key7": "2nroEyvSA1mSisQzP72qrUnvszNMPEJVDrseXpTmH3PLBPEj9JRDWB5Up2fmyJi529wxYFa3U5cemoEy2DNVgmNL",
  "key8": "4MT5HbGsdsiwfHmpk7YpCCMvjrcKayoRLLoZc4HpSWZoDEj59YRs518Fjwo8LQofftkC96CvrMo121QUbb6ScrbH",
  "key9": "27bdTd6Xxa8Mxtkz298DuXcE3xn8dXMbTP8Bjz3C3aRLEaJxk64GaLuDsRsQpuojFjCcGJBmRd3fwSeMtj1pLNiL",
  "key10": "s6efzpU15f2d1jRMfA8Jp4CNuPANhbzzGMt9BhzvPTVsQEyu3T4peuxteHx7eAeVtWPcsdMh67Jiig2wMzkZDzv",
  "key11": "39PG6YKx3tf3qgAKqjvx12XuZDEDwdfGkrFn3juHfm7K4XwSu79pXdistxk6TcbjxSNeEXkSyep2mZ43M5z5CuDf",
  "key12": "2evoMDt6d87XiZbkX9hBziyCxJn8XgRpyZUqDkGcJ4SS1ujPXjjFd5NH2JqRSskZDhXqTBarJEyJj1Hp283yVsqx",
  "key13": "zExYb1NsLWLR6AFZ3KV4dzXYphbp577cjyN99Xzumzf7aeK5bZ7a4JnEuoFmJwUafEHhoEipUceMfk3gzMnXn7o",
  "key14": "5L4rDa7LaSnJeKdorfxDkMP35KZR2TnnqKdx9gWcAQQPXqnBxqvCFWco2V8kpsAM8XZ6V7PZzLMDqzXwHxvskmPg",
  "key15": "2EhE7tsBGtAu8Duuc6YGe2voznpnKiZZCeGypt8upEbi9UsiEmdfRCeJzWfzB3y238Xie6n5DPxN3AwkxnNNbW7T",
  "key16": "2ge6DorHy2G2s3JEfXkMHu1n43uPfmpp2N979kmQCjkF4YrLYQSjki5Sb8hVstTR9sAvqXCZ6q8G2FaQtVo8EmbS",
  "key17": "5JdWVJqdhS4re9VXro9tau5LqopBAb685gjfTNxwEkdV3JHoWNmi4ME3jqgToXkfYVSe3cvsj6TwDmC3h1vFDNzn",
  "key18": "5Hnif8qaMGG1kDTBreRy5QjbodUzPBnqt7qZgLR9T7UjmijCGorNVfysgtJpApWwBbfMmvngtPPgsmLyHeCwgnUa",
  "key19": "4KyhCyCgvv24Fp9hkxJWF7Yzsmt6RpVnvm4RLtV3E2ivbrN2KYu52S5Lp6Aepd3cYrq3M5CkprTF2CDyKYkJk8Jr",
  "key20": "5izgYiAMLwpa6dRh2DCPTt9KPExhziVd56LSt9czARxqBYCjjA74d1CDZHHb5cFhPYN4ZSrST4aCvQfGxiZ7jgkX",
  "key21": "27CjB5qjiyqDnnWeypewxvtZAkNTz8YFzVX6xioJHoBJPWwR3N2MaPcXwkT9bPgpNnvR8YoHyND7oh8NyA84BD7i",
  "key22": "2qY8TxXm4oxGCPKkCxsyXx7ba1PXfhekXZSauQNtcxg1a6iqwJs63JVwFjSEfZpNNuy9CUcuQwEeZW4q78zEybja",
  "key23": "2a7nKS4AcNrAfmyL5zGatLAdwLZTB6WTVfzHqK8ieAW1CcwUzseRJohwWVzRC2wvHCNPSk5Xo1tmTexXn6geeCE5",
  "key24": "25p3EpXtbmX7jkY17SFVrzzPdzqQ52FzGC8vMe2GvFgpPh3gPx1ZNwgXxJgdQoGgFJf3cCJ9Y6uwHjM8ayWaY6jv",
  "key25": "2G4ytz1RkubK6TrL4c8THbBqFMAQxcgyCW1ZYvu87n3zMB7sCe5DVfa73qBUni5CrBocxAjXMNanTpXiQ2bgioXD",
  "key26": "2MiSm9iUQKZCmyGRD1P8Ci7h3SmjkoPDBf5EGr7sAVecrkyt52QvjZw4k12EKz5hXdWzCiqCjrW6wkDZWbViNSX5",
  "key27": "4rdTW12uGtFqANEjEjNdQAEGdSFr9jw1vHwjvwE4qDRWtLUEt1J9KNMaJan32RGhAL4EceaJTUx3Trmx9NzTQbv7",
  "key28": "3Y4YfU2CY9RUd6af5AzXmMggvkK3cJgbbeR6HfEZ4S1UiBv6ZciCfYh2WXReTvJ9t9SDg2YYxfntwUvbARuwNvth",
  "key29": "4yFJkua95GnnhewMQ6iPNhERSUu22p3JQShpsdLF1L4PBngtCLYdhN1uRRfncdwgKbMGYdSDAg4YqiXtUVWKk2wt",
  "key30": "RfT4n6imGmBQ6qGXhff3931WLSSxcPJN7VQHZXyc4bLZaxtvhTooA63vKDPV9Bf9E9peCMA36GoGkSWURn18SnE",
  "key31": "3VcHAxMkfZknf9a5b5YozX13QM1p9ghk3DUXCcz82EJYZb7Dzxjni2PW2VqHHLD1m9xgMLThkM7Gk3wPAYb9bQ7K",
  "key32": "3KFD5RW9zyrLEKDnugVMFR9Dm24d6SkjDQ3unY2K2cd6k46vDWbnp8rpiUMAVshsoDJNPhxf4r51Di74Y29dDduu",
  "key33": "Nhyp8Z5r4vhbyuuH84JRC6YTApE4zudPy4qd1Y3e9ri8GzgCRS1uty1rQ9fwXCivCdgpGHEJT7u1zK22VSjiYFp",
  "key34": "63Rw7iuFP1WhJquAC13GYvHUDYso7dYFYFnGrFdLFpwE7mUgfBYmK9EWGftaeBRiJti9BWpAR6MP95CLGJd5HB42",
  "key35": "47EYJJYE5hTtBzV1bKiQBqTow2maWTteGCacvQkhkfmKuAxDssqrzCXm9ScUYYUdPhAayd2vAwELCX7tqTEGagVi",
  "key36": "5Dpw55PMgvVjmGdAHKpxxETRoZS4XuZgV4wGpsCdzTvjdWhrsbJi4DsZXVXmkz4iDMPVBXpTc2iD13y3RZntku3e",
  "key37": "penJSgQBM4YH2h6U9sQAc4X9Pn47WsV8E734dWAoLvLmLhg1bBjgXgrmUonYyfLoGyqLx4Vza7SaPACfJ3cDHTb",
  "key38": "V2EwrRkdrz9XAekgqubFAM4jN8mNYcyjPndNmmJhwsBNAdEFVgmuHDUMkG2okttDiiYKu4HKv3AcPvzB3DFTzV5",
  "key39": "5qkVwEp1fDJBsSNe9MtqisGzdwmCuW1dHqV2k5fjJw6myBXKmVeR4Hg6aYxJGCzAn5ytWBayJ4zasqtJLwD3TLbN",
  "key40": "5n8FcH7ibjzhQEuH5a1ffYaBvdnBXKioauHYBjf1A2wD6rkiDKHoZCZ7qF31THmmx7W9ZFVUPFurUUAoKh7bsqEr",
  "key41": "65WKBPhZTr6mzBvDi2cjTrwFUN83RM65efJzd9KCWES6PvhPvhNtdyoBuRUxKiQ9uMVY3WaCw1McV3jkpsB9Rk6R",
  "key42": "4gzEGs4RYE4CcWzmfBaB5NHXv7QKSJVHdtjXGoqsDuH3juCB1vooZphSqiYh5KQX5DAUAzzCu7cCt9dd4eXHHt5M",
  "key43": "NtWeHb8hgovasSiADrH1TbubvuJQThXPwgCaLb5NN3k9YnWajV6rPwCaYKHqzji1VFPrSCxZQrdwFQvBwVs9WFm",
  "key44": "53jmv2YQygoTJZK7FMfPigLEtVu6ZJwVwLPWyu3y5GGcWmZtZG1knUyg2bzBWVaFFnSs5ooWGKfYjy4y2xQovSZs",
  "key45": "FK4Nm2wvx19AYrwbPxxvTtB9evsyWma9Fo7M8vXxDZdL1sg12qLBihryr8wTueEaxnGAWnZPrqXAD2Nwv2nYfAF",
  "key46": "4UWNmJFmBWemiFNyd232shEiTwZ8SEKeXAC9aUfqQrwz7TAqF8Yb5nMdP1d48UxbH3ESv11gQozDjDU6hScFmtmz",
  "key47": "31DCi9f1jsUDk2akTbUNrE6nb3KRQWWAtA5D3p2jjxD6zfCepuWNPfsBWnkFMHVEs8aYeA9kWPg6FsujAb9rMCfq"
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
