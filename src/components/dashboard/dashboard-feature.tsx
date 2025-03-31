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
    "3SMiHnpwRKkc6qJc33Y6vEQZenEi1ChMYuBrwHHeRANKLmF9AzhGotGgvV4A66DdQY893gcsQKbEuR1djH6xva2R"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4gnJPEYXh7cSVy6NbxEBjus5kCcxKH2pa421c3VRcGhUJ8dhM6T7brnNkTUk9eKdtSyiWuEN2mFi6SffYSZGSK2w",
  "decoyKey1": "3bRyX1cicVea3fHGYAi8xi887b9hTfz33KftNSsCRfPwLKsLpaUbT1cZ5p6dxV4hmbbS5Sf1Ayoib4zintGKf6Rk",
  "decoyKey2": "5ay8AvsUB7csWe1eUtqXip5mCwzaixzfxJLP66GAvLNNVBW7HXMETBt4TRYHxtMe1xfC5P5h1Jty7KWarqZKzD1g",
  "decoyKey3": "3YHtWC8hC6LEd2GS7grxWhn3tr5t5rDDoYdBmSYCnVZNCXbzzW6fo3Q8WtF3FYpek83HkgnyZUX3u7xukkDmvZAC",
  "decoyKey4": "4uj3TxhqZ6kcHoSJuFcP9c7XEav2VRReZRnWCNepvXGknNicDY46zMv4tdHJ1dVCWg4pLYXtkBLcTJ3ka9KXUXgD",
  "decoyKey5": "1FZSSHGgFe6vAX5UtHVwBzZVpjZnAdYLZJmuvspjAm6F1VSo5UjcNVmMbE7fvZMsxfrAQpb1Djvqv2tmcJNxj1k",
  "decoyKey6": "3QKuY16RQ6KrDk2ZJQzXQHqqAaJ57qs6eKsUz3HafJ7W9ZiV7YGqkakD5mpVDSLj6tsZ9RumFzQW2w9PPqtuHSUm",
  "decoyKey7": "47AB6auxpGurweSLXeMHT5sf6JcW1iiJj8TxME6GK1XozAL1KzKJR4ztTiXxU4ZzjXjzLAGs8SCRfRpf5jvBdCha",
  "decoyKey8": "3kGtTDxX8H6Q6vqStEmt7MTPLQeJ2tPZddcJhUo4eGHBW4x7jUwwW85bukkE6mKVztPGJEDi3EQagTUu7GCQAXYB",
  "decoyKey9": "5TaikSZHJ9m5ZsYasyovp8Z47gQq2fdFpngyGudLKPAy6iDmpKApWuhHNeBFEnUtRpkYVtByuBTydSmeNhtdBjUS",
  "decoyKey10": "5FvEUTz3TnCtDVYizjJq9vFycS8qLnngsnhPDJPkfK1GUtinJ8eNLQMZDGoU4CzsRbYhugZF7EE2xXpo7915BH4y",
  "decoyKey11": "kHJyyVL6PJYy2YBG3VPMq3Wj2pX5rgUmqv1F1vW87uFcqWLWeJuQywVAYmHVFTs2ZvJoYE8J8scnRVCV7wk8prN",
  "decoyKey12": "3z3uC1dz7Ug1yDs5QoGbiFZ45F19AqbwPew1S5V3HM9wJDJdrJt3EteRbYz2cyratfbaASrJP67ezWaAGb1QQGwG",
  "decoyKey13": "4saSmJXX5Hx3dGK2y6vYzHourfTZTZrgjGRhypMacEnb73Hxg7ixvb3yN5T6Bxn4qaazSyuN2tdYsufCcTHVoAJ2",
  "decoyKey14": "3LzCpSpmgkGQDtUR11uch5GjVY1xzimT8VPyzYh9uLDeNn5VgqwjQJe22WrUa1Hbi48JW3ZFZbghd1T26axJnVVU",
  "decoyKey15": "5Mxcbi9Gr93WP9jdwHG4SNwPJWP2zGp9wCD8Hv3WHvce99tfCqwKMgrcX4Bzt7fSwqe7Q5eT6yKk6vWoAckn1aU6",
  "decoyKey16": "G1BULi7cV2RwZ9CARAEToyXZicdSZv9Q1GUeZ9hrCfjZPcUeJNt1QpUnwYKMm3ik2WXnQ63siUn3gEruy8qvj8B",
  "decoyKey17": "3jYttLMVsZG8qTFhgnGbMgPoDKa46xbETyBRefZgQAokZjPoNwEoUnHRxGZFBugb3Yzu6FMajhwQmPBbHYcj5s6J",
  "decoyKey18": "5Y6QW2GivpHqdfcG4dzNjPUscdCp31dQVBMY8dHv43FLbGWSN1nZWGdTovSDttH9xpWqBzCqbBdRid6ngjKiPa3A",
  "decoyKey19": "2UnhQ9qZucmpVBcuZ8cU9ChmHUxBTtiHifpsRMrqVirMFxgR27JyhPVc28ZwtB52fxK6LvccE3j3ifEW3Z35WkKw",
  "decoyKey20": "RMSLCTnpSqAD5ybYm9b6ZBiJyYPSRFof6LLmDn2hDh24LvVr3xeewyicXBNF3FpiFzT8Uo7B4TL8irQ1WaVE47u",
  "decoyKey21": "5WweH4HhbiExdHWKbjUG4aPHQjRCY2NTnPma6BFrg2rkkpga8KgK8CdFnLdane5eiMzbDDNPBgyWxe9TEbdA2jNe",
  "decoyKey22": "5kyt6qTq2Lcdc6BNpWDoHb8eaSmwsZRGDF5uWUgdukNuAmNmoZCDNCrVAnGHg9psD23rDRxaRU1uoeVGMp7dyAWz",
  "decoyKey23": "NjNJfY4mfmqt4gFKSCSeRZUthEGTCMRFKX6ppFc24r7X3E1eMZzkcir3g3R8ioMu5AZRfe5wz1M1Dy2uEyfEbwB",
  "decoyKey24": "5P8UnMG7EfPm8G1P1BgcrK8v4bipUPx11JMQjCqvEocnhuDnw2jbGBvnd5pGhtUsCBVoC84943fQR44D1WKFKfix",
  "decoyKey25": "5WoNMMshmhbNHRBocLZ6pvLddrjS5ZVwfih21889LAMpCT2WbW9oap9E4sPvyribmDMUcwh1wM6JLzy852aHQfmi",
  "decoyKey26": "3DekNb4mRos5raQCL8eT6Q72yqC1Nekjs5FzVsS2rgnHBgT2Lee3cR3XbX8jLGbHw2x7tujujZ3xHJAbaqrYG2e4",
  "decoyKey27": "4hWCcoWawr4AjBdqBmUfx4QvqbvadFpdhBT7DGVaNpZcntZ2xwcRMozEZC9swLpEFxUnQW2wcV97paTCPaTizxXd",
  "decoyKey28": "5oqDKuL8Uk9u9t2dsvgHUomwPYbJcBRvHV2ByGt8DnVCCwwMbWudYcV8YedFtDHaUEjUFpgPBKSFQ8ZEKZYSd3au",
  "decoyKey29": "4fXawbzGiXnrYps4fdxEhUQrXFk7CxQr7JxYE9QvmwokVsfCsviaVGNbhjp9YsHJnN1bNi621z89HE3pGHaPUXin",
  "decoyKey30": "4DPjaZiS7JUUuZ2pokWYVmaDE5xYAnJwGLAnbWC2SvgsWoRTZYaRrm1BsDo92BM9aXCL7VkkfoPnMYgAu8z7yyKo",
  "decoyKey31": "3BCkb39ZSuGGYrpavsUKGQHqBaycuCgvso7A3BfeawjQDfUoxD32LvPbSxWpgghH7V3XCbTeGkRFXMJk55yjUzQ8",
  "decoyKey32": "4CTPQAFuHd3htGPCXtp2NPaXBqSbhMU4prxpWHMEPPQKbccbhBh32dttB51jmdVLfAdSVvp7cqekBKfanPwvYGqm",
  "decoyKey33": "4Dw1XsqXcAa6uJFdHvSVyn3maC2uufxamGNPzvdFiF1tcyyX1Fku8eJWudjZXvvJGQ2Ra23BLWTXCa1tW3gEGaqi",
  "decoyKey34": "5xq74NbQA78BiPsNYa6H2QGQGVRZf57oBG13Tj92ZQFHjvVR3Pw5e75uPw4vGPUPVr5rEL6eaqGtS3e8vsku7MpN",
  "decoyKey35": "44ajZn8MEKx3bgUccFT4jWnRxPAepn85kS9b6Pz7BcyVfqYmcR2zRtXnrfhNoHdk5sfMgSXvDwrz7NUvPZdciPPZ",
  "decoyKey36": "4dtH1JcXinkXYLFUa3xoT23PSbasCbMeQNb1232NKzmgtK17nyLk6ZVcjFT2xoSFodmbAjXQx7gz6DnKa8BpMQZo",
  "decoyKey37": "2WuiPmL4cHWF9jhVXjvDcoF2H6zHJf3KFetezTfeBr6jsn6ST6fTsEuqdq7SMzxNmqm6BXRqHmmiKoC3GHHGksb6",
  "decoyKey38": "5PTHLbNw7FCCBYWQyGz3rWdTtosfV92HA6zpJnVJfZ5M3YdHX8D1h1BvFzmMjKJvcLKUbTB4g1oRBGBZ77j7Ys3",
  "decoyKey39": "4t45UzMi7qkEzJsZefTr9E7s3qMPAf2hgJRTRhmrqW9gcxmeEWiwvbnmqaXHYtaMqAfSW7ZAyGYG2umjxSc9pYSs",
  "decoyKey40": "2nzPNJ7WFeqD2KXurcbsAvg3NkbUBA68nVUfBKib9kobeShZGiQaq7Huib1kUwF6sUc3WieFsTL4GiNqdKue4yT"
};
// DECOY_KEYS_END
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