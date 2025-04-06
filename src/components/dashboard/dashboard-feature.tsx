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
    "3EnoHqswB77MtTWhth7aKwFiMAYn5sMS767n5JUsAr9rhoDJ14zdnjsm9Z3cKLXD3u5FMuoQWA1FrSmbzjxnWEhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQrqMK9MENCg89J2KAuWb2NgfR5dfWqwpndo9eqR8CiC2cACoZsXqPkmqjzjiu8QcFzHNds4ubnSof1ukqXSwzG",
  "key1": "uVtpMdpRK2DLMBWSZZprfHKCDaaVQzpckAiQ7zx2qjwR7PwRP61BHpUTVAAKbbfxUKAUDK5D3Zpr1gzEwmJnmB3",
  "key2": "2YZo74gxFz43VzYV5Sds7AWaYquTrGrBGXFR5axci7nhL7ciBENhgsWQVDKdmcWYKDDNu7NnPxyKRYQCZXGJvTRA",
  "key3": "4uhCP2hBrcQHb9qaEuGe4qq1Eqe2PfK5fhq6tPy242R9QvoAE3hjWekfxyL1LkZUzXeAkmN1jn1mrDfwTjiujimc",
  "key4": "4JvZnKD9ys1rDTuDzYg9Z6PSJ2cPw3CN9P52kCf4qdB7HrAiyUzCtFCkpURF5TpDtFZeScRop3bQ613RBaonZFbM",
  "key5": "4oZJJKntNEYx8iADyYMb7VSAGWaMf1tquFPjWHKzJe6egQ7JQKtA1A7ZFFuPHFJPFVvHf2iXNK52tzqyegdqGuoj",
  "key6": "b28yPZX71RxpiRUoqU7k2UH8oYwhypJ9MJaMignz7m3YyZNpeDfV1KZFznfrZNbnL1Nuez38HigyJQeMiLhypj9",
  "key7": "4r93w5Jpnoo4t8nF6Jw4aM9Y6uQgqseHYzowLfuyE2X5ZdxLRP9BuwSMXRPuN5Vy6n57KocGdBvG1BGA1FTAafqW",
  "key8": "5ixZnHGgeDpzvnjuR1n6ayq5UqXUbhg4f4d1u78bjTY32oeH4F7SPbV6vWhTeAHZjRSVdVCwFV8v5LCCKHudmudR",
  "key9": "496EvZdwyn9LCvAnbvg7rj4ZHevkVrt1RHtfVmP1fAMoajK79G64ZxuvMq9MiEGY5Wdpbam3HAJGB4jdkmwxMp4k",
  "key10": "2R7HSD3zwxHkPZCGgmMoh67MqUXAcDUpsfRpJKkipkaPgdv7gzthUmEZqdMZKCvdX5d3sC3CqfdkadnkJsi6ssN",
  "key11": "2WnWzp5YT77gPpAXchGisgPnw63QKw2uzVGbmDPuZ7bMLjw1D8FbpDjquARWTAzdV18N9n8ojPTbyt9GS3J26TH2",
  "key12": "45WRj2uBnvByWvi5kCeVyKwcAY95c8qi6qjaztaXK51mQVtMLQioGRDakhsGECXVDHvxGAAiYwud7zk3XNqKHpG5",
  "key13": "5GGNzduoLJvCSqyL7rLp26r9BmGR56PddzfA33HEdfHDfnJVri4wRBA94b4ZZZPQRkZ8yhvQeh1EgdeoJRQJM9pi",
  "key14": "2NZhWhX8f6omoauqt5iQNATXaBcA4VvXELmN9AMproyUnNS4NMLVoNmqEnijKctK1xARED7SC3JKdrTMEX2gugN4",
  "key15": "2DKeK4SampPKnCHjvs1PaCm7szLdsmZPK3vJ7frGoTEFNKRL4nd43kL5vVntNeDRn82ys7fbXmseRqXquehHLGFh",
  "key16": "RMQ1TAoDu6K4bGtL273aKGCrspQvXBxrt6mNmWL7ck1HCLVcoeAd1An74DJ6GEe9EMffotMbPcj9SSKKjmgqFfi",
  "key17": "3hMdPX1xjT93gMQqGZmJzJT2VHzwJwDRmg84rphD7MtCVcm4gvPEibwLSLPNzNmwTAWcs2bii19G9YaJfmPEw1mb",
  "key18": "4KMQ5oNgicFdGkEBXA1GTgThzuG6HV353r7UGdZaQTERyx1rFUpBZJjtWZByGaRAPFuWeq9mPLuLihUHJs2LuMcK",
  "key19": "3FxGV7F2X5mDYUqNRNSBiJQoYs1Jq3Xw3r2VpMdT4Ytm2qjTiCD7mriujkKKfvNBMFHB6d6R18q1yuix5yTSw8vp",
  "key20": "5xMFdnUtyyF8Js6A2hfcTWZD2optD5geuVbYEtTUyh1cfUp6iFyz6C5sX5WB7gTgLaHZTQzccz53vYak2DMTmEbT",
  "key21": "3XW11YoiCkCxBHAZgrdDtjHiihQng3F9MVWr1U1Ki2yR7Rkrj2iYqrkkGDgR71t1eoi6k6PX669JSQgjg6hYr8NV",
  "key22": "4GszoGAHen5mogaEnk6amQxPsqyxVjC3CVghhe5FM8gRFxkhR6dEkZKuW8msnUQ7CeHWuGEaGjqkyC5twCfCenJ6",
  "key23": "4896tUQjyEUPuVSeS28EWtAUEV2SoX6oWZ5hv4NpMP9PHVFAN46bRNeFX7h8y3cuMfbothvSsdnZD1KxjQbBkwZ6",
  "key24": "fQ7JFYRbwmvzaijTZowV3j5yoAXTBaChR3dPurPXzSb9g7ubsFJprvsVkGreybAvaeGKCxB14ijvV4wTMCHK2uF",
  "key25": "5KJAKWoqGdqZHC3q5gp7i62hs94AU6vPyZLMM4o9iBQEcWHhBpx1to2cNtwzsPESC7mqeQw2aPdjNk3KRARuwzCN",
  "key26": "2T428ZPCVGNgKF4mPQhfLXRtyF99zAsVUGgzVhFC93KU4wrjk9WG2VWdE8HPgZhwqx4KncPBX6qMqAVBrhsXRbGS",
  "key27": "25z8VTnxPkUnmKtgPcbHtANCyUYWTGvTcUdV9LuVGvZkc1jUd7TYWTrNrkFUwEJXzYu4gLnNTKcrcbXZ3FcNfXvk",
  "key28": "3SdiEJXfXCnT5ww25yHPMYcoscdDnhxcT1er4MYrkooZodHWJjbDzeKZgHUcraBuyC7cR6mqZ8WDqhfiSZ9Ljmmr",
  "key29": "67ZgXLhmHEnmWio6uFfdLPPrKesjRu1VrrsZ1cuAsAvLhmB9Sd6iixqBYpTW6sQmW7o3JmJR1dptmnHkvKuiAV7a",
  "key30": "3KegrVp7wgnFegqwn51pWKRd1yrVtRNhcZDXDr3ypfjYCfsXmq6oGCHKURFFGW1kVgBVdZPv7yxibhrbR8RXrHTS",
  "key31": "tgWiPp6v9umL5qRmHqxgjWPVhojsyrQCJBZBEtVb5kNPmGU244GyBSsZKzasEccFTJdHEsJ9XopdMf2cS1vccBg",
  "key32": "2w4mdmaR79JriXqEPkj28mJpgP7Ma7qcjUazbTWktxM6Hr2dGgBZ7x4whfcXKXHu4NFtfzZ1TRT1PP9fCBypzuMA",
  "key33": "2Xf6vzzJuxW1wYWftuSdszBUQybMhFCnDr3Ae8du2uAorzfhsALy7u7R7566UrmE8B92JbCQsPMNBPHjha93xTjp",
  "key34": "4XVnQaQ59xt76Rehth7ehuKJTq5vLsRmE9UeyJeo7pdRKWYHJKF3D3DzHuu2bMSw91CsqRZMYjpPqJSqghoDaaNb",
  "key35": "3NHWeWi69rMZWNNi76PZug9gtqreCHUbHM4fMeAMC4g8q426LBYLtWMZaymsUsebdpPCbMSeZ4mdeeHbqwK1fhVs",
  "key36": "3cAoCsMpHBLH33djXFwif52pCLm16299AGCMnAP1Sk6aYEZMCBZWvDxpkA3JtmKuFV6bpFUx2U27vh1R2z1irbtp",
  "key37": "4TcWMeRebNAmRpjRPZGjMb1rEL9FVjCcSxy5P6hF86bbLqvf1QanHgfhForbnFhmxwNmRaXjbPVfDCzUAY3ipGXN",
  "key38": "2bGyFaaLtVPkqGNse3h5crrp53ogQCWDenXTMtEx8JGuBryRdCaFW44o7RKFXkquToxmhpdYQnzuwqVUw2v165wu",
  "key39": "4Qtm4EG2tdiPa2ZQk6sVVHKTYTEbrBQEEWjtQs5oNxL2E2BqGRgRtfx43sbgtN6R7CXccNijUSoU58CZ3pGG5bwd",
  "key40": "4WgeQ8LeJqtxbLpaRLe9VSADz4TNwmiPXTkPokuCF8bscVXSXNcYyn3GuaGvPaSJGkcL6AeqsHyfaKS2EYgzHw5Q",
  "key41": "2yEipyUSFZiERDuYNNpdc2eQQVYTmVfdwuTFFjRpoWtzSEBjyZ9uzxwJog5SVPcL5rUyVFJ6E6j9FdiNUWKDZYfC",
  "key42": "3qFKWZafreUyuo2thCemBFWxSj3JgscUvT33v28FVVSRQtWUUG6x4YtmGiLxUCHzCz8CNJjN52UeYNnZuXGHvqY6",
  "key43": "3SADhDXt9fNgBLsWtmi62BRrcWHFuvwPVhyyaif4c8DSAFdpxSaFV8zT8KU68jnyEaRXCMYFyuqSz6wMjWLjvahR",
  "key44": "5sQBvKFLtc5RqKAqExLGfbwnj4LUZqqAF6aLUJagmMLCsnmnfFgRdDJJDxALfZGXLvPp93Zd111P5CDiunFYNYGE"
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
