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
    "3Uu4AWHPq4brXk3Rg3d3xCLSww7oLEY2gexrDetse996GWeprNB9a9rrqU432P6Qbfn9UwC3r7PmrdreN25opcd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eppY2ygEQBuGbePwUajs6w5u9Kw7zTtCPYTgPprwxkuzXMxj2X4x1kfrUSx5eDWcmxWx8xbu6ygNfBwhVHsxmkj",
  "key1": "3FRWKu9ASLkFpH7V5XyKuGjdYTYhub74xiu9sPMsn7q4WSJcC1v1h7ag5khvXEzkQ4G3F91H7iy1g2gMcuChhojw",
  "key2": "3DrheGbwBRsFLr4hSeem858Hb5iXBwix8ku2WR3FnBcRrrP37LTBbNeYnyCrEC4PxpWDAjAki5zvPPRkD1MeBRn2",
  "key3": "4PXxxsKH5aYmU66YHAoCcdjSHwZH5j94iG523Fer7yomx9BWuvWJLVLsBmMZRJPvaax2FipyWi9tMTGJzpvRzqfV",
  "key4": "5y8fkYoruNLKLXkotJ6UhjSF3UbMMfMriBSC5ZuPCeoxJ7XNH4nyFVUQnAigtYkva99E6UdoSC7tUTPtFGqZ11sg",
  "key5": "4sTspYBCpWt73AZMNSppsqEF9xAvFJXYYffpeq1RDF6FeuBJdzftEreTmwX1vsQtnCcbLsZcTH11h4kfquJkDE47",
  "key6": "4y384RThz4fdCtrQrzJAPrVTP1vWd81VeS5APWZcs6gZHuECMuRgKGxKvb6H6wYb57Ms6UdDUb3YJi8RRFdpG3F3",
  "key7": "28eF812ESxx32GYjojE2zfeaRs936cZwQrdXgpnrW3gBCH4qkkg7PjxRyQixpfWEBe1HD3LwbaWwYvkDhcn8kwbL",
  "key8": "4ofSEYaJLHmMAFDHoBVmpF5NdxcV4y9Muuwzrr8Tfo1y2E4XDtqRbmWKiu29161qabtZoPeUFWwrWhdMigS5JJvY",
  "key9": "38FeEizSAz57h5t7VnDdw34H3vuGQCzA7LKg6A1fTH4RdWsfDoF1MfdxiEbN3EedNYEvZfme4evxaiP2T2wVJCtf",
  "key10": "5zTMGqPz8x4soysGP4Ji4vcZjEP6F4bL4Gc5bRRLKqdd1LEKNnqDsgNLvmXSyJMhZVyjoxgdJuWUsrEqfTaMfC6n",
  "key11": "4KyXtwCMBagrXHYMio2q1q8EK7ZtvkwHXFdwCqJagjHXk5QXQNjzRvRDoQRR5fj6nGNaEivzikmbRDy9YQTe1gwf",
  "key12": "5ZBzdt54ZFhUnbsSdyLf4bYv3nEVaWWTdY8Def3qqZJQaA2ygKoHngYUgMoM6qn9R5izPcm2Cx4dQjd1ar399x2f",
  "key13": "AJUDzKNoQLSQoeotvKT9GsobNqnwj34M4KHeeHWGLhk6E6KNnm9t38QMCZCq1HBqNARLPFiJkmJoKzd2jvLEBFR",
  "key14": "51hgP1vp3yspq7jWzd4EdsN4Qnyo5cY6ETQhWLwwav2USQdFUFdbUPMzVRVGgRBMNc2t3sFCk8ehvKXfFp63LWXj",
  "key15": "4GFfDA12wY9RzYWFsa1N2E7d5B6vLFWdGmDZYnKmnNCh7vVvZTZoqQesKDSqF9uvFShFBhbwkPGCvkNu6RSPqAdy",
  "key16": "c1yAiX9vUCkqZtEX5NwaJXHXvG5AiaNjLUpH1E2FyvayUR8erT37eAiAxKSUEKDnHk9SrDSuu5mFzqgkUfANWbz",
  "key17": "4BtrqcgsNz8fb7B5dS175xSWxZK3UTLv1W7Rv8b4ZkdbfwXGvrvdBECSqAfksn8enfB6sEVVhQyU9ryLgyJzREL4",
  "key18": "5RQBvCeBYgDr72aCRX71Hco6qVtETDYqTPRt3QusZBhKJ3jNeM4ehtCxk1Urgsz8fJaw4rhpi76unRQZgt25CRZe",
  "key19": "4jTzaqZc6tePMtAaA36mrrdQuCnLbmwvtYLTza6emUAMDtnADKYhY7YDTXvfNjAVv5dphECiBACwUCXq6G1sYvR2",
  "key20": "5tni25N2QjPYFAHVd9hVACpMNWuA2xabbDLY1F748BenVDvonwfNWQ3wPr2txQrVav9UMKd4F1DLVUVWbFWVhLHk",
  "key21": "3YcDS3W4bGsthN6SkuTQj8T1ZzexDGAMpKZoeNt2TjbEJgckF4e5eCBS4WXsk3UGDbBKCJQLYT4nPzENVNj3YAQw",
  "key22": "5RHDzPF3T8F9tUgU5Hb86hsaX987i5m6mHbYbmpksEdkZt8qXYYus4tyFQxRJznEuPFdb4nEzE6YTdtg8YWvKcQt",
  "key23": "35PhtvzrXXTzV6gSpZNk7FhpypNNrevJwLYr5HMN3ukP8zPqcf6zE41cuenDkws7EvRVEPBakgXY7axypRxpGWGU",
  "key24": "2edujQThwpTqLvy8yeWwBkZhtcEUpSkA8124jq9FYEBPgSzKJuYYV5rDpAkhKow7tgcS24NLdFRagunVo7ikpyxC",
  "key25": "2arFuCFSSoydN5fB7T4hLDsEiTT2kxq2cYrVPWepgwaZ4sSoC3iRFxgYskUCnpUULMKsyPe7GtE3feWF9JUSiDfw",
  "key26": "127rSWDd4ZFfrFdc7GvQhMLbdPa6V4gJ6frrV2R2tDPGyQdbhZJXbeX6Wf3RVnSbsnNk24VrUzJvHGtvqpFSonww",
  "key27": "46d1dTz5hd6x1hmX1n73pKKH7NkzaxKXLeARAM7BrFHTBhgp4ZUrqo8zUHsxbsKh8C5L98655Qybg7iV82kERsmH",
  "key28": "5McNn8hv1pnvFXWDenWEcAQtpGozA5UGiTv2kvBMYeUXX1LWqrmuxiQ9X6q6YtGof6rStPFLS221TwGdtNY3MXGR",
  "key29": "3ne4arzYhXHKNPqabX8uLZ6xJX2SG85PfDvUMFWPUtbZWkdcugVZvcBqfKbfhm2PxcAX4mKbaNo9rQAXLLStqk4L",
  "key30": "47j5L6FL1LERFgAeZ427Eu1KiBGx3CgpjpRcpvY4bURgVMbQLEkjh972mGyzW9UEmMn9FSn5re3YmXPwVNC8DcZo",
  "key31": "3coksasinALEAAoxUUKcqUvw2wedisti9GMmmmSFawEcaySDG3R4nL9up7JaUc9gLy5MrpXPeZDDq7FuQXaRUzD1",
  "key32": "495UxkFWSV4sMoF2ixC8aMx7iYb42jdjWW1TztKYjwr5Uf1zkG9fCCmnmc5QfXuam34TtUATgW4GKUQnc3Evy9fN",
  "key33": "3Z3gRfgK6Yo5k3zzQzuypQhMb2QRagQWprSpXimrbf94wUzjZvTZDq4ipbYrnU1m9qipx2qnQvBEREyMty48n7Yu",
  "key34": "BKMS1fm9VprpwqzeL4f5Lwz3aqEWqk51197dTpV22h787WSqKDxn7WKfT2UTbP14PLodYnd6JcdMrRRNZzsS5sL",
  "key35": "3dhDqSPDQeVUaNLrgDAwtUo1G4Ec5feJU9mvLLGZt8ZqCDWqa6sJTKMJBDpb8Q5ooGYEGcJmYrNJam2jXsaMgg2n",
  "key36": "hNk18yMVAyjkm9TtPbjp81FYeVjn5Bb8u8UPmLYozpy6atyh1C6KdAGMJ6Svw9mmFEPwhZjV6o68dmgPVcJVkGY",
  "key37": "5nmvz9kcAgoT4cYdbTTDnHgRUN5JHpirkmDRxcPuFtSKTVN5fJJ5ezGyRBJkqNS7QCoM2QBbZ1XMNHoPaqfrg8c5",
  "key38": "2QqRCwQy2WbYGrChyPmi2oaSeXf3qaxQyWsRG9aSD4Xf6pmd7ijGdK3FmGCJzYnpRfm3NgWMD6qZ4ajBDfdTrSiE",
  "key39": "3Ap74u6RMz1oqBpeP1ksqXXMt3B3Msdd2PYaMPfGTdxnn4mQPdEiNjabkAUBRx2vdYJ9Xvs7jon6qRHtA6aRCAbr"
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
