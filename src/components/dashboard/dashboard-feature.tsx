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
    "2LkMh7zP6WWhS9i7mwFWnWpjgMMoHEcCPtQv2zrVqWQ6zhwt1r2vFYBpzGyme6kVWbRLS3NsK1Fe7s2j6jQT1fVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HE9wNkBhF3t4QNyS3ASzhrK6MAw9NzMTecYi1ndqKk4bamWorZk7QLKfPzXs6yKfLfBsT1axmxuZrjq5B2xtpCF",
  "key1": "59fgUSecEyH5FbGUVFbTfk247vWZn8cZ5LrJNguzJE56gC1oLKUhWLJaACCmVFFBpkGgBXkEasyUQcUeo9HfeeHx",
  "key2": "4Fz7JujLfAXjRRs4ifH1xbxHf6tahsCp7yHvGeTpfcwhEww6hhSGYNbqzk4AMEbdMpyEC7v6yx4gSyi6Kn2ZjMF6",
  "key3": "5K427eFsD4CjbErgpJPnqtVUa7vU1bwPUs7Mrkpoomtn5r7wgbHvoguVdYnwTH5Ukw8Krw7Q3vzVbh8Am66eLwMt",
  "key4": "45MabP5dcCnJnSqer87FQAkEu1YGVH2aWfSDpib53sb3AiYbzHjcSHpCCYrp6mSJWzUgycwScJYRTCXNtmRQwwM1",
  "key5": "4uJ5HvYzodZgcE4f6feZQpVZpbcnUTGHBf5Rqd352TxuYtkURMWCYsSD4SSrSgnQBRYtadHtzXtmpACXJDVX3XWZ",
  "key6": "4Fbw8cVvXdsC4moiDL6dTTtLXqgU7NGZ3HcHskE3SEAETKQGaMkv4CiFQ3ryEeSz1toJa33iUHbxtnUhyXY7CS8c",
  "key7": "MJJo836dTTnpsDug2HizMgA1ZeM4tfdePiNa6iTmq2UM5GCb2UUzMEZPpQqgDMKs611PTZS3u5igwLwf8MZx2Q7",
  "key8": "2NRhGRDgADnuLv5UhpQN5q494rcp9MFXSghTKNUDKomwsVu6HbegYADB58YGeqMsffwL2YdycfmcxSWcurgKrETo",
  "key9": "2j5y4UGhqZHGmTEGKaVBmbYyszpPtpm5SvYQY2e9d5xbpmMtv9M4ga2yrPdiZVLmy9V22UPZ1KUAVJrdQgF3wG1q",
  "key10": "5YQakfBq1mwuiZ7Xyv8TyAJyjJfP8DMG8UgSWxiGAhNYiGhGHoF5b5h9Ma8Y2rayiGMcVM9xJeNt9Bfkbj16WZzi",
  "key11": "4BrtduJ1J9BEo5W1rWyWLHUmuX9x6eXeDYbVzAvN6Bpy8bB3MWxGnh8nTY3VjkRt8oozYRTF72q7ykv4oKY2uKEd",
  "key12": "46vZyuuF1aeACmbw3nUwAtTXQimXisCvxtHocoDfkq1TRLQ6X9c6chRRif4w8srGdZ2YVHQhNXSjRL2YoWYQ12Zo",
  "key13": "2pu2cDjhCUUDd6kpB67GpnvW7X8D5trCKLH7KKvh5HDDvcgGDhTU2JPeNaUKD31SfRxctyeLEkCtaF2cXvZJSzWs",
  "key14": "4deTkm9WYnWSGZENGu7sdxKVPs1JNh8bCUX6E8WE7xixZov4yogKdcZvfbYJTNkpD7kh1hG4gCkmu8ZC1Z57QZub",
  "key15": "4RWeFKW5d8FAZ5wrtGTgibGAX1T69mmgUqEkq9ReoJvRPABfvxQJN7bC2t6NYMQntkzvvi1QgrEhz2Y5HPmPo6QF",
  "key16": "36W5CqKB6Ejm4MouwQTXLxFHnHgm3Htwx2J5MSXMjHmJ25uRJ15fbDLSp981dym67dakvv2jPRGoiQzMBrKwb4kj",
  "key17": "3G3cwwLwATLv8a4UAQKDNK115ti3tYmGHvbxMVfKWKjeEZVbF6iaPWAYAW4yCBf6zvUgkmvSbRetAegBqVrT5w5y",
  "key18": "27JDuBKSsiBMEJA32QTnEPhNzoKS3W675Ns2ySh7ArTGfVHUKmHaxfYtCKet1TfAgy9inGsEyTsfUGiUDJzf5pG1",
  "key19": "5oVr9mzxSs1CgqFebLqoQnCqMusEn13uVivQRyhhZ2zTKNxi6FTWB3ebm76r2zEUkW3uZZ9Wzr9Gz5JxFL56mFJb",
  "key20": "THkE5fHDRBvUR5NjPijzqGTzJ6qQGfBuJdfficah9jUvVwdz8gfXBNVsuvGiAeU7hwgov3ykriwwCbo2jUV1TTr",
  "key21": "51VgeY5bfNggKUCrGkUCWd556TMQnghtyTW44YKDJP3BcvSjuCYL6tAUPMs9vF56n4uv2tgfYuq9MKLzi2wPifKM",
  "key22": "2EMqh54quVkNAFDkM7iFZs5RfmPbsmoWDsYsovv5i6BMBCRgmimXWsrekySPCYs3fvbFdbUiiWw79nTGeTaLUcsf",
  "key23": "5QeVy4nBTWfNci9Z2bEPp2ezMUMz3WoQ3butd5iBXBiWtC9QrkAHEJcEsP5hK6UnY7FLV7kmJHLVDdfScynqMeQp",
  "key24": "5U37JfX5Hq9j7XZmgpHkdi4zeMeJJj3xqekiorvusRoLxvd6ZKyVBHzKaeHYwvi6wrSTus4WsNWPFsp8xiLYqB8P",
  "key25": "3qdUPBuWSr2re7BWYSZFXDFgxZ23ygwf38HFQED6E4DARTMvZTKsEvFLagbB2Tx52gg6b7YGwgnfvj3UoDqZjTyu",
  "key26": "yZogg1k6FrBvvpdCBx6MSogs9mAQuzJxKgBypJ6QSJUtSi78UfDr9wyBH7sbQ3Me4g65DfuYs4udK3q6oHpsNjp",
  "key27": "2TCjPhTW8njRzqYz4xwNmx9B3KWg9sPX6uMxeNZz6F94AEQL8A94qUnr8aTAUw88jDKe7rEBCJa32dnBew9oRJdp",
  "key28": "4HHcR15fycCuix2amhjPz1tMwcQdwCDopgncVuMRq1KHSGABghbRSkVS82v5NLHKjDWRFacLiBc2mB5u6C863Tex",
  "key29": "5H7VJrx3KF5eVnnYVc8R3qzH9jGgsHSVgbUjp9J1yYHeHVVXmGhphdYSCyTyB676eujr6kjsC3fsjBYma5VTxJBH",
  "key30": "4AoPrp8MVf81CewaRd4RxET31f6eKvqYGa4DDNUi3Kogn6SzWeyUyKKYabxiDRWu78VUpVcVb4xWKDDq8SdjYqGH",
  "key31": "4yYRQfmiDNz8kiQZn4KHqAfHbevsoBPtLFnM5D3RJkQan5NHiwFKAST1JTf6Hz5HVZeq42jdkQdxyLp6Z1inRtBm",
  "key32": "tkwmtJsQiGsAjs6MT8PjHWu3LJ1QV1BrPcLFEqN6mqoHYM1uVgRtvFjNGjZTca8C6P9UphsA16tbXndrUGePtx3",
  "key33": "4hEqAfxrvPYuatnjTRwr4pHRXKVofk4EvVkJUzSyjbVzKi6xvqF3tSUGnVtCsK8bG9613hXwJQb1XjxyUxgiMfMC",
  "key34": "Hyq89n6Bmm6U3dYiviChFu9kAmJyLFq7dT8spgkdz1X2cYczTkgAebAPdNrHWqxZzNHnSqz6j3h94H4Jmj8EwfV",
  "key35": "3VaLHXXHCYdhFYYATUAJSpMpRUkQCbEauZ9GjShhW6QWQC98YDRcZubyXsoFqb1UrusycR6ozwFdu2EfSnPGNW8P",
  "key36": "2kHyL32tL7NbkDqxb6sr7g23UTD2PCsjqw9RWf1wPK2PQDcdaAwQPhbpb56gm4AMeqPYttc2UB47UnY6K6gfzfSb",
  "key37": "2vxiQkKcJsHZbKqBAepJXaMTdMXzV6hqNhH5spRHmLUGxLa8hsQ8sqoQXD6yJN27V68cw89ep4tbu7mTb6MDiNTw",
  "key38": "5d3vgrnRJ8sbvjj84rDJ1hyiwLkSStniNDF9xykL2tmsfPMnYpz9wtBt2A3YWEMCEGmmKp1iXdGLJEevALVyzRiV",
  "key39": "2JruzAiFoV8zXci7bomkVnVY1sUmUa2j23px3ApeRxa8wyXk3r54PMzYQTwAMM6dwjC1H27mqfEwm5TNbttxgsZ2",
  "key40": "w6PMBG7d5i714AAhhC11U9uadSmBpkAe2Vf5SKYGTx8QFaiPKEkVp2L2rN8Bq7vKRQQejMCwUMLB3HMoQPJsDHA",
  "key41": "4XMafLyb59U32r1KjfJkM9A2orujzJmWN4vzTw1LPsR13EaLuUDknn2dUrAn3pzWPHGybMMe9zGtRkSVH5gyS2Y7",
  "key42": "EQpCqCE3ToexXiZSypyK3tZEA2iknEd6Z9GSZSuvvUdWre18Rws3ieM9Bti4NitH797euo46xqUCieeQYkK3288",
  "key43": "4G2cdRHdGJD5NaxGiCWFjAZQYTTrubhT9E1QKYMZXSGGpkVARkz1dvN3i18fCT71yPJuftVcSxN95Qq3f1jcZ4vf",
  "key44": "24xG3SGuQixDhUrHdJ5LZ5pBuPD4GJe3C1f1DwkwcvV5Fj1oiLoAYEx7TpB6s4zk5pg1KzejzneHcDKrYxNmBXPE"
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
