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
    "7rEimVRNNkXxYoW2NFec3vpikepMVShrfHTioE6pv6zch4XM9rBorRLZru9gMcYynSkUVZwM2mnsyQgZ1myMmqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9jMa9BapS5NNwZyVqGsNrSwnJgqWExLavLG2GzVAB7CVNkvJmozfu5vugrWHthw6nfBtTraKZdQpFinoEBqv9T",
  "key1": "3Eg9DiWHDGq3NZ3u1Wy7vGWT8MCZvY8fuh4AG14C1fSg3M82RJNHMoHAy5ZEnmkT8bFXJyP8o7yraR6iXmcz6CLr",
  "key2": "NmoQGXgRaDuWKpxaTJtqchNGXF4VbmKxCtW4zjr6DeBpjeaZB2y9cucFPpGeQiEcQVAwy43HxcBqjpjCR59UEH9",
  "key3": "RQvww7SPPJTvYRH1izP8xAZPJJD4qjXj5nYDkFFAPQrUghyG1xJPLXsSu4Ch3XvCRjUreiV6tZpMGMrMepe52Gq",
  "key4": "62ZNPwYPzV8Ar9WvzcEAP5BPq1buBDyRgWAy7nnsbQcMhVKXCn8hJcDkt4zyhibe6WRUZQKBQzdp3eWgXFxvpPa",
  "key5": "4ESNMnyvugJtjo99bcXt5JWCEnL6GcyHrzzPp5y12a1ymJtdccBznSU6yGryz7LauAobsgSqY1t8G8b2K75G1n34",
  "key6": "4JMMJqJbfAy7A1JetjYSvkbbTADRBVHPbh1SRE7gHNL1ERsj9ns4XeeaTogYNx5CiQuqC2AfErryUpjgnqAenrs4",
  "key7": "4y6x1DYiziuD9vUZM5pbBS5J42oWutbEwnTVZhF8MBkjiPqFBXxK1rRwtGnbLmJKhhzaVHZL1YDDLHfsWVjQHP4r",
  "key8": "3WtsnEbaTkxJjge8SAc1DfpnPiHMz2hv73Veyk7uiK4qyAoRmUAP6ubiDKfcWscF4p7dQ4S9wjDn69X7cLCpvag1",
  "key9": "V9VJSKhKphLR6QLFEVFreKfDMX8XE5c89NuTWEp6yzGzynxcsfBJTRoKBhTxqNcrzh1hpQTc9NsL861mr3xW1wM",
  "key10": "5UtqzdFcopQxcjdftMdzYJueGPP3mVSUJCuVXmCaVTUqkPKSJPLeZzGeXZqiYXk2o9VHH7xzS9Ui89p7miXrdX72",
  "key11": "2Wh2ke4iKF2XtwikmLnJQXK812FSdfuFt1riisWvypeN9Pz1qJTKZVDatLKsCZejp8Z8xWMkWq28zmWJ4aht7S6f",
  "key12": "5auT7ijDSdiGS5mJyqFywe2rr946qu2qsf7NxtjMpWJ8cm9c4FmnYyX7cspiFc6q6e3zQdUKU9vMT3T3JBKWQYZc",
  "key13": "4MQAhgXo6uCQxRDDLD4dyjRjhJ5HCxUTGCZnfepdo5aVArAKbFusd6hJZocPLP85rQ6EjLu8qBENpkvdB4pigAAn",
  "key14": "3cfpgszjS3cnCuXEeijfWyuRaNnF3jWhTHzkQZrc83B6ci4MfKTzr8UXr5Km3CX4RNawLvDTqh9HieD8BwPyuAHc",
  "key15": "FRBu5mTG9NFJFtWaZgEH3c6xgBdcESXbLiMaf8848hzHq4Dv7EupExpyWK9wvAZu9W4zo9JyKUsbCGAmzvoteKB",
  "key16": "rEnHhyv1xmuabxjaRSLSLccCu2Hc9NxWkpPEaG4tuk6G3MpL1NsvC9uzvNvBTLemZu37PmwBxy2tqpZA5CnMpqC",
  "key17": "4RJmHP3XXy61Yw7H3C1VAQrrh8uxApj2atEkHX2HzQnjpy8BuWarLZiXCh3TMBXKiZbd7Q2AgnhqqdznZYBfuaxt",
  "key18": "39XEMn7vL3idpwECEyv1spW79dFFSsyXWx5BBm9ULrxcY41yMTBdwGRoBCP8WPSP6qYYaWSvdEA2e3pK62izgWZa",
  "key19": "36qcMaJiNZT5FUuCvtBVKovJBidZ7VKvdWTM4BMWXhaj5nNG1MHVj6W34YjNNQV6pb7L6M725cdxdPLiDsoxT9Uq",
  "key20": "281nVGdMLMiuWVQfJx6p2SjCjdfThaFdEBpZ2A4G7SL6W8w2U1ZKPuiTx8hXpx3u1BZkPWcXDTSGQwvqUrhqj4qi",
  "key21": "5GArEY1AouDDVrsnCeQF1ymEVeF2XRNv1d7cW66dvccMHaViBfmWXfPbM6fT8boQuxLneWSfRVRdEBwCpjfoNE8b",
  "key22": "2JCkxLJwdpt1Dw896AW3o3JSddrM1yDFkZSDZhah1dmHhqtDWSUxND78yPAD4P6eM746c4RArHoU3B5CzJcQyQ6M",
  "key23": "5f5NFXmsrA3mqfgbbRRKTkvHoGZPSBawRL7McjvSrKZiz87xrqMmUPPpe9wG8pGdRsSEAz8vGbgMUHXmibqbcFDM",
  "key24": "59Z3qjJg4MeNjZ1Uv1vTCbMtpnX8umEtpDWXMivAmM9yz3ZGELnUVC63NWBUTahcuHPpTdNUXk1GT9rnyuzU6v9R",
  "key25": "4af2p9C3e4rqQCobbcEak5Jqefis52FyUTb95Z4qYGowdcwp1YRGEUfCtgsj9kG27ayHU4ZNzaXks5if5GvfLwTy",
  "key26": "62oyZF2kbn6EFtoz3dwiXH8pDDmjYcyRAggvy4atArWw6PmBkZ1xxwy11qX1WebBrzoK1tx2y1FNR6kJb7aVFPcJ",
  "key27": "2pA7gjacq7561nPm9MKz9r6KpkDD1XXCqEPRHeCq9KAFUhcFtdQ4Sw3zE3eGupe4uGfsTdnt6LeRBTS6iXKyeEuf",
  "key28": "2w9iTcpBSWCUbiHUC4y8tkEzxtFjt2fXQMdHCQPa7op6rnXAyQY4YUsRxdm1fVZWzwdrPPopbARouwQCQbnC8wWL",
  "key29": "4MBEyXgzhs8Do558XbJqwMUYYBn3dQ968y5taqkkDtxnfB7FxqMdz1cL4sshtuu2oectrvcuVwNhMRiVpUcXMNLJ",
  "key30": "62z5Epaqs3XqKHzHZhuB7dg98o7rpk9QEFeLsj7r6JYG4nVX4XZn3yaATXVD3KoRPBrLnVhD1tBJx6DkGibyQWnA",
  "key31": "67LherVdb6JVRRh1wdSHbWMRUebcUPaZ97soHnMpT33CTJtHQpgw9uNSXkDNVtph7qbTTK8F6LvTF3GA7ZSG76Ys",
  "key32": "49HdcsoZ5jRp8nACi6DTYrUMvK9qqqEW8QV3rSPqtwk3r44dXamCEWpdi1RHfnRfGAcWoQY3JkDe9tj9JoQvBcPQ",
  "key33": "4LzMxYqZbpxMaBTmz7wUcyS6wCChNv98fD2r9DP9geP2NXDE9Djaxviy385n9g6RmpwnRcP93TXowsQ5RXFaM3T3",
  "key34": "3wkkK9vMEfKTQ9yA3BLo2nAiLrfdDf4mQFkm5UTx7AZz7A1ZSXuuFtwcfNUtzUT4oSg8JYVRXWomkY58QEYsVLdx",
  "key35": "4xGWY2jhiYbmftBThWsGpxa4aPYC4fJWYXyxNTjX11AHcnyrYqhsNH5vxXKbjbKGCy7UGsvZvfVv3H6Bgp4Uwurn",
  "key36": "2oo7sheJ1r1ut9VFwhnvNH6SLTkhcM26PMNrxyCgQsVK5DcvLiupeUM9TUR53JW3kYQLk3BaJAFcZ283RLbQi2G8",
  "key37": "31TDojM19ZmNXJE3WEZANZCMNaabwZfQmhaMFApcEgQafFmivfsP5Wrz1fmXHwSXnM8hzdSTut9eQnYuCJxVQ7sd",
  "key38": "De5gqBa6oWFm38XDL99VXeLzVySDv1fFw4F2SrFtRhrNQBchjtZGPqTe2QMFwW223rHBBvVtbfwzoyAisWW2nn2",
  "key39": "67pgUJcaQe5ZchLCizXA61T93VFSFVD8Do7zKqvM4aYwPmFvuznQqEtXSP9hRs8XkHwCuPgXSar17qCcpN6eiSfn",
  "key40": "25ZcSYaAge4JJrG41vaHD2PfsocewQtfNkjU7VdU8ENCH8StJ9L4WqSMxTPe1xkk2DmQPhMgXio31L9W8WUGJcCA",
  "key41": "395aaHMsAEz8uJ7SiA8jMXwMwsUu8qUnn3Hn7CqzrbD4Lm5PZomGB2T3RLBYJ4CakesjSCdKc1zmmrP82s6JqigM",
  "key42": "4hyjarKrTHzxn96KXzsiEFDVrE3CAJQamAQeTP5KCTuMeR945ZRcJu1em55LQP1UTugLJPjF6FARzXJ56FKLkk76",
  "key43": "4CdRxDjcnaL1yUuHUSTPWGPoqrhzynDJu95eJGYe4xn2iboYnoxmWE1wqhjc2GfBqWZPAAkTK9686X9jHoaLnrjt",
  "key44": "5xyoMFckcx7xnk1n2cfPuaJWgUtXkRdjs9chfNvqukFRu9Zqiuq9hRCcx3Ed8hTzo81Tcifb4a9yk3X7tFDHrMCh",
  "key45": "4aFHwJwjm4RgBQFVUqUrkKRsLj36mJN5quu5pDJjgTwR4HgnPZc5rbuX95VDKB6Na47jqT7BBLYwHd4Gc6DEoHA7",
  "key46": "5bmd1tEoNuE8nYsZxJCWGhQUDZbMe7xyPL5WjBqpspgRfbi1rbZoLF57ybnKM8jn6Riq6noknXi83f2FxAH9AKny",
  "key47": "4yQPeAu7qN7Y1hyd4HbPoyQEpYLP3Zew6miH8GTzZeVhvu9vPY7iHD32TgqFrUoGRtrZvv2Je1Ys8NAkZy9aKSY2",
  "key48": "3NqTBDDnpnSTgHhTXeFpQjvR2fY1rJ6VNk5rvNUnF6ZudKrVGFDE7kMKM48pYhMPYMbarah5oD1PcEHw2nw6dKXh"
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
