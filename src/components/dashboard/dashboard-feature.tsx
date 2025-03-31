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
    "oRtoBiCkJW38X13k14CWJjAuoJwecLEEYCZQMJfMcXF26gktRkm1H4wgeFDwdH5mtuW1NkayjQ1VYvcj9ZxZspm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzmZmbKbni4byPdesweihcYKrdkUNeyCqArhSx6fyQbGKCjuedmshxHmY7FTCgTQYmMciFygy3garTexZhptccu",
  "key1": "5LnQ9mvb4kVbNjYmoz5GqKQZJ1c4wF1NvvASAiGaGaNU6xJDRhUs72SFx5tQWGfWjvnzdpAfd4njPJHoQb7rgDuD",
  "key2": "5TMYZAyBD8cuWZwm9um4BuewWUzFuafeRfnsu3b2wgiLVPzTtU1Ap2H3vW8LJd49upBexDRPuJKfcofWeV2qHHUn",
  "key3": "4N43WDuS1Vy38qEEvSCy2GrWFSkGNkZo5R1yjL13wr5ubayPWEN1oXtL5Pbrzx8SLxsNv9GGyMKR6BNb6pkqZaLc",
  "key4": "3m8wtasCUfrcJC47fgLhe59bJ6kUxwULPosuiLAzXKzPPFjEbC6ysU4zV5RKoBkp5rwVqVUnkuWSKvzEaRBwgySd",
  "key5": "2hQ4u61WcBzdFScpdqr36wUZx7oGYhLgLm4sjGP2dx82q2bFZrtUhuuXNwW2SK8GpHPdcHBNi5EYGtzdJyh9vyD4",
  "key6": "33fijXJ2yrT8TEkXKJFrxnXABy5tCQQgHdAiPPyP6stvtcU1Mxdu9JuSYfZ558hFr1JdVijNbpcCRCo45B9qC9GN",
  "key7": "1naoS2QLBDkBEskVGskKG3FUU3N2VdCRZXzURjiFj5QoaHwjFz3G7yi5rLwhddEGLVvEZjM8ZauZPHgD2Erydgi",
  "key8": "3ndAKaTDPYzU6kdDFqX6MDakNaP77jwN7JMCLAdZC7Ux1ZCPKCk3YnRMnu8LMxVhn6wgvJhqXUxayxruem12UntQ",
  "key9": "5gNuwakiYXSTqJ999vejM4VE9YG5HRyK5k7wGXeVAoSPFGJHyjmfXd4agLHA4KVMgGsZzjB1sVmBgUeDEihbniMg",
  "key10": "917W8oNR64vzCUndAS6zm4qAqnoLqb5SPt9bXuyfmgpbHXMDyrGL3ThpwQ9Kr288vfzHCAvwz2yqJV5nLjm3yr9",
  "key11": "2kFCq4754yDnTMhc1Lp5YZR83CxZdsJZeyLpuSMLUA2psVGc1vjFKg4gKEHE2DCJJUKHcQVN4VZJX6Mo7irevAaW",
  "key12": "3JfFXkLvYme4xmcY3N5YRJpgqiEi4zLMZ8VV7jj58w9ivb8rNm7jo7YJvNez7XNScfJKZbbdZHM3Mt6qepyvt5rE",
  "key13": "wxRW9LoEg34JoZJd9yVct8K7LwLW11p5qmdHHWkE1BMUCV7eXjNfrSYnQSYuA4n3CZKXhniuKviSo3QyqCDFhd9",
  "key14": "5MSS8rECNjf8SfDArdULHyV19hmxEQmpLbCq5Nibjba7d5js3eftqQc85Wpder7BT5HKiJ7mSRGmW2GHDVzQ67Y5",
  "key15": "2qJoDcnpskqzPGcZd5ipavQQg6wMgtJaVGMoi4JkjmfJwgyQnZf8YgTuYrP6e6y9HTUAQswYJeELN8xX2HHkQCr1",
  "key16": "3zimqVNwyQFUNVaS6wpwnR16Q3S2tywFLKJsj61tbiH3TtPBXcVxoSuFHG8MNzasS2rPJuEufRQu5qoCfJcPMK6k",
  "key17": "bBPCaH7aZvtwgbenjCRQ2Abd6TsEcNFC1oDKs7DZgaFnbm7pXmyqmQmdv2CWT68uubf8tbLXBryGaZ7pcFzqC5r",
  "key18": "3GqYNQZDr3ubmNsxuh9TMxAMFGN2iTunqSkz6XyB1JWUGQgzxweiDRaYDXB1XjaLxoLzeGnEjn3RWLJZA7aTid9C",
  "key19": "4VzVuskBZyfWiX1xYsUVJYgLEQszic3iJNG93666s3DHJrMcpHa2NomtX1QoYWCuCiFiNuLcTLcE7aqKAHJJa5cV",
  "key20": "3zzRNwvXPVjeTkLpuXnfD3DkbK7XHah266zzQN3MLWi5nQAUwWCA8auE7pxpSGMwTYMZvuMdMRwuiXm4bETKQo2X",
  "key21": "pbQHxuFYiG29TDVQJfmQ3GAsuHYaXyTY5VPTTH6M5oW8yybcTQsG1pLKk2q7FFDXumHpdS2TCotaEX2nPweNNPe",
  "key22": "5hLQBzsknf3jaNYTnVDV8PFzgzY48p9tdAVhB9NoXJDnsBdA4hn1PbTMJJUB3u7TWzVfH9we43jVv3UBuCBozsZr",
  "key23": "2dtK5Jk3JJwzg8ddBJjCWMT2YJWr2snqTzi7YRtGHQ4E4c9axGEns45Us5Vb48fqugTvid1MmZgxBCpYL9CGoUYh",
  "key24": "3rV3LLfoHKpLJBQh1o4xzZiriFWNXYdTXeAArBXVYkJ2xNxMKwUi95jWj6K5hnQwxZGyqq4xUchNtESKxx5LK3q6",
  "key25": "5r681KSCRf46tjfMY9kZG1NvrsxFf1iUQH1ADkrwGUevVvdri4aE1JokdGLFPXRNmbbRKFo2miCjX2gGfEHop1WD",
  "key26": "5hGfCyGYKMnr1xEepLYKSWLdDU4sfLa9rgFcecyaAyhg7DJsCDmQ53WAgpiSDGh1fuqBkPQXxhYhZd9DoCtfHsvy",
  "key27": "vGKmpw45NdfU8gXVM2ZAoXXnRtiJxUJ79B5MJY9wc6XXPfvd9uKvKSuV7fLfGXTJxLjmfLCkmEqZMUSxy7u92YB",
  "key28": "A3DywgHqqsD6ryvXb81hMYnMBoPWmFCZrAr6vUtMhfyDjpZ4cCTusyS73zpVcfzhuYPi2PiX94Q22CGqF7DxUUr",
  "key29": "4KdBkSpDYPsM1pKBVH8GEUAkDDK5BsFNr8WW9aigEPunQaTGvXBDYHj5ufJUU3wvhdtfg8HyYWj5nifRFr8frgXN",
  "key30": "dpnso2VJn6x6GEXeB55rUo1QfZiAGpztob7fApC7PmwNtqcPQ447vCGbrrowoaDMNPP2o9cHafxG3RqJJhQsDXV",
  "key31": "2Gq7oD1vNEFdpkxwae4jRfR827bSKT2do1wZniQky6NfFb2kSQvn7u5ud8Jo3bJpeHvA3c3APY2teZPynq5xigEx",
  "key32": "4Yw6JZT44S1CETdGyz5tFWgiwMdzNGYbETRXpNeovr5DYkvA5wBPwjkEQeMQaXj35LaPZ6EVbyyYTaQcye4WXrV1",
  "key33": "5kQXMpcmr58D5zHDxRCMe4SpmadmrtUdxzqADCsP7gJfNhxLE3BwqRnDbfGQdY41qU5Y38bPuNzVsyWB7GZUr6Fx",
  "key34": "4DRfBF1pmUTLgSLAqpmGUqqj6Vt2X3JsdBH3fmEsLsVbGvvwpo9xqUCypXDBAw9TLPyCZLVMjhM8e9d3AE5iBqZ9",
  "key35": "3S2sKAsWW2cXfex47KyDDZcYUC9WgEZSh1TJmZQRfH8SmfTJsCAjyDkirnzXCoFQLHrsJRTkhYnyu2oEGfLnpmkD",
  "key36": "3ZqK33J773PngF1ZPxoExutVSVvp5E5b1kuebT3WD259Ha6B5HmKsUaeXDJ8DvMmXHHR18JwVNDhcioh9znwbNF5",
  "key37": "2Z7Qaib2M2ks3ucxy1HgAJJEiYQ3GfeY5MEEJoB5hb1ZXNkXRKPNohttrUtAu8aFPGFYuydTF3RSTHXQSsSG9e13",
  "key38": "5oyzxgay5nyCYbrvXKVWSxPQKB46WLX71iXt7XYyYgmFD8SBEXtBkUacpkyvgcDfSG2MD7nE9FqANx31zwvGXNXc",
  "key39": "kR9VM1qxSbeyraxdYNeCQ9bsHs6bcJBE1w9vnzXz4sw4zHvzy2ufCvtBGQq8w6rzSdh8Ao6fdN976RKk4rxcu8m",
  "key40": "5KVVqJno59ZV4kLPFsmZyin6YQ2euAGwUo56Mt7qaK16LYPhB5eHpWJ2T1cu2ypteXcoSfBaFDgFu19JDawCCWMY",
  "key41": "3xwLkKgbkP4yWbDa2fMdKhmM42mndcztQLB1KBhg4c3KxkJbMWNVNk9wm5SKd6x8cH8qqijCWRmtLaNnRi18yBb4"
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
