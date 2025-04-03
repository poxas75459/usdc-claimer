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
    "2b8TZdR9LTNuUyG6mF4QfwYYnmMG16cSNVhnQ7YZZnGGhSwQJSCD8icjvX7TNYi7y74HJqvQTDUNtmPbDGSWTPsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JKMafcEw5ML75aip8Ws4HDf2zCP7K29KBcJUDgVohdBEti2xDXfnvzAnfREbSGDm2dDw6Lt7yPbbJZ59SWgR6nj",
  "key1": "4Ryg7vyU54PcAAzUjbcjZ4H43A1qyr9N93ZGFWvw7ryZ7pZgeivzQHY5aS1eV7Ki8U6yT657JbL2bNuVqyieaLit",
  "key2": "LfTcBuTHHYRqYARLATq5K86R5zaTThZqCjqX5SxTsSPHAG6SQEfH5XbenFhBxd7iW5zXWxC49ZpW9wy9QvLCmjj",
  "key3": "74ys8rpXLQ2UFPtV6s9EatAAtmucwcuXwjrHYLW7Gwk131fbSm7Jxbcgs4bC1d2jiXYGzWY3wo6vA1YVBexngbT",
  "key4": "27UYp6RiRSj9pzevsFuAWBx6tLFgRziUpB4xWExJUYiUmd8CwwDSWzgBcEoqx3kv61tUxC3hm7GFeU9L57LSdZyx",
  "key5": "GU27AmXnVPBuqxHtejQBTomA7dpxdZYqV5g52qmQqe2qfQEbKRLZCScbfN8EUqjcVGXxzGGMTd4iQWJDczUxc1v",
  "key6": "4FtYfM4ta3PDmwqvPGazzLnGoN2EzEkm35VPjotTbwDWJWirrWmkoaPiebS2qzzm2EJDuj59dBeM6ZHtJbJVMpu9",
  "key7": "2TfTXeYgDrhPqy4u65vSsVCrNRiTMd53FGy2w5JA4SY7HeizteMeddwAdyq1cza84KeyoLmswuBPjMyh5X7EaveF",
  "key8": "2qzMr9oq2EbGi8yXfRkwbdeh1FyfujrzNZ2WH11JpoQ76QdEGsGkUYM7o16JK7AuQ4r4hfJduR9cvb6w6ko3mbEk",
  "key9": "ymWJaKMRKGjkstJ8j2MwDuBSpWhmLFTqGninbRaT94b21oLpvLuU6oxdmwgLexeMWqVCk98Pmu3vvP2VE24utv4",
  "key10": "3KC81W8nn65Xhf2Qn98dtB91KRQfsmdCQJAiBXnt8tHB5GHaNCn2qiZnedADLuUsDd3LB2Ym7nNW2n7WgBagSNGG",
  "key11": "5SEkYqhj4ashKEc2AsSoPHURJLRU1K9MCfsQ4JZBmevFF7Af3kMSZgFZEn3nHoDWiNcPF1qtr3SCHmiCGAoVvWSS",
  "key12": "uVLpKxStQC2HTFoC5NHNjTy77KGFgfxJjAV9MHBPZ4sf9SSCwpkcnX8zGVE2j2dcQfXJKzDGXRBSe4WjrriVL8v",
  "key13": "5KBQRGoiic2HQ6v2QMXHfm5s4FYNkfYJng9EhVPM3253BSZ5uNeojxVJwUQx7d3Rgn2n7DMMoiWVqPkk2s58whoJ",
  "key14": "jaEUetMAPiu8QJXjPqDo1iBsz6yLNPh5hjyH9rUHNuo1VcxNyYLRUyGnKwbZJPz13R4VuMHS1xmCZJdVq5EWvK8",
  "key15": "5vjAfWXSUCVbwUpPAmiZUy9scSs4UaxVz8qH7bp6SRhKxrEjCbnBgc7UBFu7invhXGHsxwsxzsBBabScAqKwXz95",
  "key16": "57iKrjxPAmG2YWSDUDverNDmAW9KMCkELawakCU65bqiTfoHNdza3Fik2xApWs7hiMxxdKa3bDTY9MD9SWitK5QP",
  "key17": "24TFkVW2goZP1Aux9C5cVdBS4ukbkYr7g6kamqG3V88J2VaEPi9SMoiD7H2eKMiPvyDspUhEBhgPSWTebUoeUMhk",
  "key18": "32Emv3BmGagab7z7baiNsMyzyqTpTXekNG51WxPkRGBh9cz1QbMRZVK8T2szsi46BoNBcLPaT7rpcBmCyehzZFzg",
  "key19": "EVof34RcRVUAaxifRCcu36DPcAPb4jnXbN9ePkcRrqDjPbdGVb37Et4oRdnje2H7w3zkH7iY4SVRM25gepf6Bgi",
  "key20": "4wZRXE4M4AS4TAKXVs1LFUXDAPWC94m5JThKYGC7LmjvgzUWdcVoAszWWmYTCXsm4aFEwgDEJbBmuoMCxx7MFA8x",
  "key21": "2aaNF8Lkp3RuWJp41kiVhFaf7jtvoJzZrTM6hiePWtYea3iby7gcVW79Aixo4j3n19aoRrgrWPpVp68A1fWdhGM3",
  "key22": "4m2Jp7jcRms4z2vN1eMgfr78CTTGhbtrN2CQb7oxKJ3cgPkgbWArmxm29QMZiq4zsyfEe2diYDYfXZDKh9d1NuMZ",
  "key23": "JRTzUsPm4AZDZ8VpAu2tp2AYbAQdEMeerH39SnjpAa2VZKqpyd8b2QPZbz9P3qFhuGqZYNeiLvY4z5X5ZFGHRS2",
  "key24": "3uEfcEwxVRUxBEtwH1Ze41EoCThrr3DsL85L69cpog4fMNcTWkJZxVMbqdXUX7yowm1c12K4wCzyTCQ9GyxTsyvK",
  "key25": "2rnm9BW51VtV1T2VvStfP1ZNNkutDJ7QWkmj1SY2bekPegPtRj13eEvGCxbkuAu5fqzqEXfwx2NTo9AEnqJLyna5",
  "key26": "rJSwLAyrpa7CLFNKUeA1imZjj18v9VnKrvQMbpdttpipExNbyVfR26yNkHvRVdKkDvawRaEv6dC22dP7EGf8AZX",
  "key27": "5k7GywhGdAwDBjX6PHtSSfDx2Wau9HjxGEg1rzd5FudJWtgccwfeEf4YEmKDJ1QjCadg3guHXqrAYTR6WTAJEePf",
  "key28": "4JPZejqGRPwfGqYYutpUF313i3HGLguvbcNxrBahkNrmRTLmsLsSuECuCnPPdteajaCcdQf9NDLkc1XWqFATLEoN",
  "key29": "3yubeXBH3P5Qvjp9fdhH7rQ9PCYghFBCS9gjAJJ28yhG1LturUq2BYAMb8jkrDwptNAfQ733tYzyVivRsSxaDnpb",
  "key30": "PcjBYYvB5GJVo9s4dprN2vCYjxJLWuSwjkGA2oLHxNe5J1jw1QvXqcu4cCsZiE9wuRQY1KX1n5ZSCiGLTrewq5c",
  "key31": "4tmkDs8Ny7HFb5ZZVg6gPVhgjegVN1KCG682hNBAjYqyVkVnrCT9XMS6TZo4MjguEnbWErDLSt155oqwK1EAZaJy",
  "key32": "jr9mVoDCA4TaEQesa39UiYAuwbYWVvZyFxQjwQRJgUaLCzwHB7WVTM7AsjXWtAeo427vTD2tFMceHehGyGmJhcR",
  "key33": "4vrycXognv9GbN4LXci39nGCiHZvvD1WuejuyKyFkFXuSSMZoV12NKPTRfQh6zyWtEuAaqQ5oeCDQ58BL5Rhzkwv",
  "key34": "eiXCEePWxj31kee9E47AWB6wWmmDFFibvV6w5BSLkttayTpDQEwporSowEZyZpGUjVfusCxzzTKwkK3s8TQ2yPs",
  "key35": "2Va4sZec9jSwePAQWx4FYAiu7Qh1qcpVQpurBcYkZZsXUFm2Djo41uSM2JzxhztfDz8BQ5fgCohvZa37fdyhMqqk",
  "key36": "4BW7vavZpGU2EHcvjJj2VSmjqX6bxmfMqUvtJoSNHCM6JwgPLqJWPbWXbabbp8fdL3D5Y2cubDwM1pRMn9d7kqAG",
  "key37": "38DWB1sheeBWtvaPNX2yTTFxgyBgwqNd2vMZRUqj32yxC8cHD7qXW5Gsy1yP8jKnL2qRDGuqtPuTYHEDPqA3EC39",
  "key38": "z2qpXZmNW4Doq4ZQvb1LpsLynTF2s4kEnPG1k1sAdEwEM9mTMXDPEgGFLqXuK4m3E32C1a5tynjLcJb141h4Nim",
  "key39": "Gxm87TSwJ4bJny6fBUSfB7mtntHkH69ZSWHRRoGFWNLzptqyrugQzS1UTKwUeosKGS7LXDEZ2au6LczdJ419DWH",
  "key40": "5FLyjb3Wij4GwuUwZyN4hZLXdL1QddLocqc1PopHsocMdmcxZo3GogpcBHkY2e9r8t7ty99nTLejnfY6AiBhtiyp",
  "key41": "hdyKP5NVBNE3SDGWTLWH2GafNz3vJ98sVz61k37feVZoW5bouT4Nxf52esb9eS3eFUmPDKSzf8bUMzLeDZM45zg",
  "key42": "4z1SKWhum5fYn6XWU6RJMNnfHMN7vY3GruUWuwdDh74PQLvJWM8n4zM91HuvZaXkJgS1GctFRUe66WU8UyMvwaPD",
  "key43": "MNzqHSbNKxBsYUbk8yaU1eA3ZLGnGtfrmbTV2PQWveqB84udJQFebMiBHT2fkU3xyZmGPTXNuTWHo4JYY7j2ZGc",
  "key44": "NKbRBc7amqghBWnp1eqoJxHkYgjjgELSCpYr4baW33CHFB8tBaBj3VYMTDL7yEVS8vnoTDtTUmmZZ55yNC5oHva",
  "key45": "5ohSkUrhWejVKZ1bitKe5Ja4KBDwqX5uYTn6BU3Vhbo4NNugDi5gEr9dVNBAhBFcGnVRybGxP1jWxdbrrjyZgeos",
  "key46": "2pPz5bSpD7EmFeVBw4ZZXT2aWx4MPrgcXKZjiAXtYdbVvPRCzv3bALMq9kxUodVpSx6498S2ENPuzhUw5APg7mn7",
  "key47": "3pVVSHvHNZx2bgsdD2LgcYwxXbtf2977tmFmGaa43s7Dn6pMURkz12AVt2yjjLSK1MWye4DRUbpLVckyzsyVvHW6"
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
