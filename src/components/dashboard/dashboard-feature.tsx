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
    "4M85Gj1qoGrciYiCwSvewyq4Vkr4FpRXVWpW93PqCDM48jsRxoiLD6uNKLDrY1c2UkaT75WMGER9tPqUmz1xUw4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mD6E9YDBcvuiQSshGwyLPFeqRXoXb75gDMgmXYFLHBiy6URxQaRsLkQRr7AbtzhYy8SvkY26majaJuXU5LbpNSf",
  "key1": "5eNTy7PqeLsWDYSeenrS3DJZtb6GhATRgZx13sZVLNJmkwhTkUukvV5WE4NV7YzwuYv7F9m2mFUUWEEoiVsDNzwK",
  "key2": "3VrVpDP3FhNAABwff9L4uHGQuWo1MYQPB16fdiBCtKke1kPS5jwN31bAgzryjYuyLX8Gxj45x3aozxguXnvk1kWx",
  "key3": "4r32cgiKNHpknnsJj7hzU3sdSNDVT1eXkUdUma5bjJwNbPxbDPnE1cY6AMZBEPgJ1bj1GFn1Q3a3NKw6RCLC7NLL",
  "key4": "XRqgJ5ygudiUqKJXFCwM5NxUEBXWD1waeAqX8Z1r5KXfxDMFjPQPXbk2E3DGQdGb7GWJaYyeNRYfaeMa1YteeS9",
  "key5": "3iZspupvYWpvPgs8NQpUgGFmMT1gu7WMTQiDxZS9pfSUjWhyzK2CcfjcPwd1K2W9cm19Q48HFxWvTtNnrsbDHFDD",
  "key6": "yacvXiRGvFGgkmaoENJmv5opbPPWg723fWjixHW1FW6zAQRi6ApdF5zA3yWyZuewwq3tLaYG9kKuUu3JcT7NJnd",
  "key7": "2YwtsnQLJEm1oVHRU5jZADjP2HvtSMFzk3BHLg5vZ3nE1QbCXufcceFYh5daPuSzbcA3GuRr2xYxLrmke9JnSmPi",
  "key8": "2zFLNShBZz2z4EZQsVYmi9woJXFNq9dfCvBwb2y4okif9T3m641LNpZiPxkMKRokLD4LUhfKd4Qre5NesMyMWWyZ",
  "key9": "64LHZ5ueYDp91DiNq3ZBjE3SGPwJxL4KCjWBZ2dxghTBdq7B7AsA3RWfTUHHTitSZnGXVwaor7w5Gu7TGtQr6w7Z",
  "key10": "3prdkDDkMUhS8nsyh4uiuY26AMeSvXqNWsyJpeEDm2vkjp2cfhZP3ZWkhSozQkeFW96c6NtBAthVayXPzmrBwNf3",
  "key11": "45NCHrNe6jfZUZ8nuoBhxMYKVUfzrS28jabm8Ut3TtwBxotLVftihrPfyFF9Nhji5ZjmUndXhc6mbYAwyY7XGUq7",
  "key12": "21c8xwCAxcAB4k12P4omiLp7gMnfpU2XWsb8ywhuuc5i4FmrSMtVb1a9xedx2t497aQ5v52rQYNkXv35bx16ab2y",
  "key13": "3NuHBVteup8TXcykjqNSyDJxDyVm18ByUew4mmZBKZQsugvW9Yw56uW3ZCQCT7GBhUne6gHX9howRroDRGX9qkYy",
  "key14": "gJZnc9rcLJnvsopWkwhdnc5KjwLX5CtRA5CKeqHM4pcYZ4s52S4HzcoXahR9gVjEUW1tpjctVLyGD3gdGdCrhNN",
  "key15": "iF8xXLJuxhif2kBxUDPBd1M5W3hAn4zpccfdk8apss73qkVSmRHcaFer3K5rbZobqYo2uiiK351JnSt52zmJdki",
  "key16": "2c4oGio8i9RvR8fQHw9MceWgumPLnaagBv2mQmNT7L7W7iwy4ki9R9G9d6aFdAfYuSrG39i6PTHz87VQBDkQJgvC",
  "key17": "32U73ZkecpP7R7MVc7bDoV3xvJgFEXhJ3CuJkSpqea2TGNHCpfSMrkQbhSAD6AGNE6Mf1yuQYNWdwJcHsmWsu3D8",
  "key18": "5koq5EMMDUV6gw8enqoyX8QYK4GhPpBg3cpG91fZZbMSVqt1GEXiUMTboSqn1iuHWwhLDveq4BYcYTris6roAda7",
  "key19": "3bpAci4FxzQAqBEKydXaUAw9SftDQ6GrFPP4wAtLMSPomnagEhTeTyAAuZE2RqyLJ7PMspVwLRnBtb4s63NSyFbr",
  "key20": "3x2DL1sLe6zDjTvw7FyxSBoXTrtyWyC7uDLFHbkbJyN433cwn3DsTwiNuzBaeEa1ESS61h9UE3uWs7qtU4mszMnx",
  "key21": "5hJ5ZDMpTaPtrHDhSWxMwyYDouviZy6bVqGkfxqdDYXs6Wwyos5g28N9Q6GrzDPiEHJKpwcu7Hrpc6EpnJJoNMEn",
  "key22": "xMqUUx3mV3LDkdjRPGnKDVHWBjLGTYBmfBtHtu9TBzCQovRC6Rz2piFAorDUGLaB9PPQWVfGMkS8dptitMsirBJ",
  "key23": "4q3Ju3XFrd2M1tiW7LZN82SY6FT1HHZmHsTiPjg7PpnVXkGBUjAkj3fSGjLFa91ddZFQ76S7VEYsezayi9rkfDDF",
  "key24": "2StmfJkxe5V3raz9QGaLrP8xyUAoF5Fry5MziiWQLpQg6XXFpKnnRya1Rb4KpiPQ7Rv3WYfnSibayKs7EcgJhcZy",
  "key25": "7AY3CrR6CYzKsU54yZLrLmMMYwp5PdyWEZbWmbVpJ7P9JDcknzFp39j44GeRn9wmkXSCiBXSTLQNnsd7ZCZjHaA",
  "key26": "3SPFTQWWBMoAdqzZ5GVTTDpQjr4gWrqnoeiwLUdWZiezAi2mX266Xh3zccNkWpfCtnY1jUMkA9BcjC2txwwCDhMo",
  "key27": "3VijkT7fafUood2qwvB4KeBUHgd8WFEWKVPGWtmUx1XhANsxk1nn5N65DSuqb49sr533JH12dVu6Ndjiggjvd8Rs",
  "key28": "3i2zrAwGVZoGHVC65iBhqKT8N2ZFw4mq5FKEJuWpxBSHj3ax7caHmDnLwGDHwpz14wEDR51LtenULnSddxnabPvR",
  "key29": "BZByVNCBkJ48fq67LA6qQVncicLHBbtPg7BgQbHTYnSnsZ3oGVeTR1qfthfBPb1VT8i9oAvdz9xegi4S4XCCT8y",
  "key30": "3fNU44Rg1HWDLjaACi1iHsP8JVUbAc5PXQj5bKuxDL6yeqyHYkWvWSseSnRpy3mwMyXfuVMojghnpH3wU9iBQ2DX",
  "key31": "ZNLH8tSDMHj3uZ8id6MFqBp3XhcYYKRhK17XeiZncYsPDog3CgPTXqWPkt67XdcJ5bWyFHTkt7PMctA1LYGpo9D",
  "key32": "a6QANedwx858nLRxvgdocqpKA92TeEpWSV5v9KahZcaq7qd6GC7SQVTqgfunEWiqQFMK8RekE32CkdVZEHd8TUr",
  "key33": "2JTHEDtrR7ynag1sdvQC5yg6c3K8C5w8LeTmj5gCpTLFqy9xGxgcUdViDAZn3cXryR2UxcDotHtGbHpdjEh6uTA1",
  "key34": "58Qczxeqd5S6RRHgHa6Qin7BpLDxoioBWXMiwJpxU9wZUsEzugmfzVz4HsX5hiBg7CBLrkVeGPeV3pJPTb5AEvDL",
  "key35": "42BNzJYdJbrUBGmqYbK6KWwoNyikQHaBhG6ZXhzuvCq9HuPLVER6WXbnhuSm6dZJbbn9vLyUuLKkCLHpJGrxvAng",
  "key36": "3dy9QC12a1Pkq9PyuKdw4C5F6wgXo3mLqof74TBeMNJoTXqndAJp1s914KXuvPTikgkCWC4dgR4fh3PMMZdMBTVg",
  "key37": "3Uox6boNYWHAwYjMVURr78hzrsYf5J6VePsaaDrCXnuBURhwMpACqUUNBnyuEsWCDYUeb7aArhrPF4MeLTbga6Jo",
  "key38": "59Vm7ck2oxjZq6JAoayQG1w6vjtzpWLPze1PeTddWZBR4eAbEPs3Lb3dWeRWS2eYb5uq8qEMwzPTzUmifzjUQBm3",
  "key39": "TnePJ9ERfbpU67i33szy1EZhMTos63QRyeBMssp4RNryLGqLSNqSw3WMZJ5VsCkDKwJKV56KNEv12VfnGpy7Cz7",
  "key40": "53SNqer9FJJ1pRpepCwecw9REwXSgTMsEazYNL4nAQnACPgwyyh4XNcqyHenFzxqsUhdwLoeZ4dYuxJKowHCH2Bn",
  "key41": "464MHfWtfNJKFGfxeeT6p3yP91CeacBBCnDcazJ7Q5LTfmdsETkPCp2bMBkmaKSp1nqHHKhTcddwqfuRsspWWLzb",
  "key42": "3mtgU5q9GcqZfKDspyfuCk1Bh1Cb2CgtUCTvbCVR3fEVZLe7QXRA4L12Doq2eoEA6wY1Djek5pvfnMkbPQttTZhn",
  "key43": "22ATittuvhFP4RRFMagVnEcKWXBjgGysXrT1Q1Mk2AY7kr428Vc7B4F6QqQ5CsWFJ4ewjGVqxKDtzQwowCP9SSTw",
  "key44": "4Yjg3QrjMeqgK1s49LQmMRgjezHHTzVGnWozi7F639g6NurjeTh4GBYYpxw4gUTrbTPtie4vMD5RiXJQnAhiet93",
  "key45": "5vnMrAxSaAj8DkYHm9U75nLh58jPeHMcncLuToRHLSKGwoEWvpHfSnLb8wKdDsgNcMrQRKEGU6qNWoVGwbcb5A47"
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
