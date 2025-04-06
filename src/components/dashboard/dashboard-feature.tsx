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
    "5wqH7LbvGuLFzh68wuc4ATYEQJHoj8PjxJeP3nxeBJ7jM6hRgwkAjDZHfkiKVzT6ZmHbqVdACZpuTQK8GkkNcYfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32S1u154KJbNriE799VkewmfEg8KT7V1wvuBESmuQ2oXyDeJLU8bfDiGDeWwLJ9ZRDLEKVJCb23eWFMhXeQrGfMV",
  "key1": "2yXBss9ohqESswhA31eE5yTkeZ8ih4U8VUfhQVRHwuiakfKpbpTPeVeDgeEz6JkCp3X2HD67KDCm4F84FxR6jdoe",
  "key2": "56PPvmgz7gbEMEdiENXA7QRFt3Kb3y6PsTsnvUSnq4UtowSJJL1EWjT9AtsrUsJCPvhCJdGpnkWZiwHEzCGC9GGB",
  "key3": "3zFo1fUgBrhnuSswu7UwRizQphXUTGBEDs9KVZc5ZZEYj3Ez4kFjq2C4ShfyQBK1bHiKMgjgqyFK7iyipNoQfSqm",
  "key4": "42pBx6XpFXxQf6i98XMhrLXkNAnagqoRwNw8GKRubSCoe3j9phB2dM2aydAKUQixxpxL9wWi1dadtVFk1wdNJAxY",
  "key5": "1VvoKiBYX4JQ3yvzuwcAevN2QLtFwddN794tBuQ47KkLqem15FQBAFXziscpErR1KMr5cARkYpSMiqbLjZX7kee",
  "key6": "3vAj4bpDaDU83uCXof4mcQvD2UsDQDxUaCb2zfHXpPbzi16TGPiKNXCEaBze681gA9KrEyaTceuzFG5cMZLtw1Hq",
  "key7": "2rL58LWjccMfVMonBtkjxHsNWtMVtb2ABmNPes3aHTDzYYs8BxNVMBePRbnN27uYnB8ZrZ2e24kHoEmCkugMgGJo",
  "key8": "3M11ETPA1HG4vqKSbrZojKoEyJpvg7mGZvG4RUxjgbLckVD2LsRGQU8UotXRo6fkVPcMjCAWrNrPDRswvkaHzso8",
  "key9": "5834m9Pvohj8ZsVWV62MCra7gbmbTeE3DY7vqLKjBwtcACvzeMD2Cbr5HLvRTBhKLECuRpLkJuZ14ndP2QHN37a1",
  "key10": "5rEbZNQUyzjQmZHs15aVKfSbsYA8zbvWxY7aDSttwAyu671dDSSC44SVPWUsA85abAyT6nmhR6h43pg37gCXunJj",
  "key11": "3ByRRxskbTRJLTpkbjYe2c8Yzc7PXp7smYBq6FF4ycWfZT3JVGdTqQeZoW28wQbpkwx59FVi4npEN1UUPkjxiegy",
  "key12": "29UDxxXSarYwsTsUaMya3jZyf389bYeRHGYqrJZJMHNVp2RzEKm7uNm2FWVo5pybM4wWZNiR6d22U34qAfVzyBvg",
  "key13": "3W9jqB4vmCdWdJziqBnaaVKJ3Jt8EqL3jsmEPmgQe7M7V4kDnpa3LfG2S8P787uxoZzEs56LbqmKcCbYiGoae9QT",
  "key14": "5wkPCgrKqRSsCuKCgePeQ5BsQurAqbN7g9dLPZJUsFGxC3o7KoKtah5KoLKdJ7ieZ9LsgLyw32ntRJWU16A5m2Qh",
  "key15": "5JhLCjTnqyX1froChHuXGKXZq5CoBBJPzk7aferUCv7HExBWMAmwaRLH5nkNFYF73A8FKQUGffjZx9jr37qeCHuJ",
  "key16": "5913RyhWk3FjCLCWqDkitdJDckwHiqq92Vbo6mcnF48WvxEtNMdd5cNGTssGtM6g5cD93EbG59qCzDHnD3spkz7x",
  "key17": "5F6TxcKgdaooEpb4ifsbVuGBCrUUCRFCtCYVT9vphmN8i44mQhsJgRfkqHJ113zmfXU4camwnREs9G18FXXzmYm2",
  "key18": "3cwhK2gcqyijLfbTHB8Sfv6ewoddZc7xNBCGgVfzcACoWFqyKLg1kWQZHPcpiqMPgrvQd9BDxmamE5Ma3Ve4z2gc",
  "key19": "4Z4fCR5Ajtxbt7egznjwp5BwvReS9nwCFyb2z11qY6fkxjsSuNUq6UWx9dRXyuh4Pny1Y9fva2EUPa3RyQpFjVKA",
  "key20": "4DbS52pYYDsXzatWwUkz6uWhewdUDfiX5JFj3PPvxjb7BMs6iB2P5vgWrTYpcCrSP5Nj2y5nrS6HhWRMiwRaa1Rn",
  "key21": "4Lta3bbcVHjtuMGdYaJ5duFtJ8LnbHAFsSoCs2Moj4tgovSSVNJot4YbSDbqX8c882jYMRRTmxLHQDGeGSNwdU1x",
  "key22": "621e8Z9TN9ifZtS2ALJoX16Xjkb8hrUEBhyNTSRT3zk7BYFYKNGqMtWEnqgmececpgxzc7Kdx34LXhx2cH6SpYrz",
  "key23": "5Tdyr1RGNvnW8aVMh3Wc7J96o8V1EidZQ9mKFxq1wXV5nSD731MhS5w7X16LeEURMYqozJ1h37gmXpkabMQFM3r7",
  "key24": "zJc9FQBN6Dp8Pyg6Tf3p9N5CEMBWEdf1m9u7NzckmnHeCx6DbYggxJ3QPYLSQLcASe2cnQjD8nCoSLNud37ujgS",
  "key25": "2c5eQqwxR8Fqn1hsaKmmkbQi85fCUqv3HS31tiBtgHigGAzg7LKbbycS6fQ43WePPJU66cC12pW6xfsvmSuHQypP",
  "key26": "2MtCCrC1REagDLTasDfAE8JaxnRCmPcwRLNsssezkdMZdWfSeXpQjpf4kEX3a4r5ghXVHmXbbrP7Ywd2NhGZZzny",
  "key27": "5fQ6CJJvQh624fyNZHHvgX7UFCvF9jmTPnF4jNY4LcYgykaJvizq4o5U5rZm1xemMpMSSksfGQ67yooNkg6B5zeL",
  "key28": "2hkJHYMcinczg9fWqMhHJmTaFK4F7NKQdsKRfRprQ1DziCRH3fLrDMe8wteqALC6LnvT98QU6NQyMsdusDwefu44",
  "key29": "4rdvpK5mfe7qHi2HMPJJbZahuCRKhEREV1HtgArxfyQbwzMsVsLWoys3j2tETCrDVViJTSj8pFVtmugV4Af7dQRd",
  "key30": "zvxePQpccMW4LD4PAsMG6463MwhhemFEmEvP3WueUUfjLRzQjrHC6G9RkjTj5sVZQ6qHWfu3k3mYVCbf7Zm9ohS",
  "key31": "EeDA446GpJvoGAg41qQiTSccesMRx53DMPEJioCNJDjaYKt7YBXwJgmtG75YyQ6wi294xqgZrcCmWTucKKhKcxA",
  "key32": "4sbgd3z9Q6nguLyMKRvQJs6b3qzXaHp4q2Lcm7jxUo7j1csscDj3a9pcdiE1ojZBS8dBREHng97XAxRPgCdx2Dio",
  "key33": "27Qp6HQ4QcoCt8rpmbRGuJbHAvNEA2YUhJMcVGuWxz9xFrVMs8rpcs3xjKFrqQqBt4PeGcbN6pziDFUsW3nZd3bQ",
  "key34": "4a12FAcMjnMhQaxcREytdFeVr5Szpuoxk1FHVsibgvDFepZ1SpRp8JWtYwZeznGx1iWVHdA3ydLAg2kYqGkr5f7E",
  "key35": "2EL3CNybDobq8mxhu9S8B1hfkJpRmuCJfPT52SPz8mB6RCxDkgCcc2Xg7VkRpXhTY6pJvePh19fGHcU9AdVCT3rh",
  "key36": "3yF4hsWcbTAuPDQvi18wDRc9Gmwk7m6LbTspqPYPjM4xSi4SzPNcwhmGYyMT81xP8jcVYnhtLTYnpAgkqHDTho3x",
  "key37": "5jMYaNDrb2A9W8tQuaBEqpLV7soCKR4TxCUWcm9VLunyydQ66BJHHQBRsP1hzAG3ki99kPBAARAJwqcM4pkgRNST",
  "key38": "4nxVvkEHtUvA4mawTmyuiVAHauJYCfeEkUJTjkreWzQCnBDkqeNPABf4i5tpdBQHqqefEttyNtMaEARcfCwPDLnR",
  "key39": "656e39ux3TSwUYCndyAknd6zkRgkcicK5n89btusADeVXF1JAiPnizmkNf6KcMMyZChqBt8WRWNMQzVMZk3DCFgC",
  "key40": "mxfaARGM3b4SFCRFKdHDa9ALULJgzcAhVzCBR1VL2z38qQKvFD6ZHeao6SZaR9KeEAmHSiAwcqRQ1FCPUPoeoaA",
  "key41": "2jZY85Eq4LVHWDgQQaS5Jrrk86U4tt37smkb9mbhbYBb9XXhq6uPom4fcwNEHjquKCma93ionNZ4NzcqprrwHwws",
  "key42": "4UJMMsbFSeev7uQeWK1x3DvDLENBzRv7bcNtueVVJZc8KvPdEiLDN4nwhaboZScjsHNf2AUnQZAHtBpJHWgk6tnt",
  "key43": "5dM6TgUXPXBmfchHxcwz6yheV166Am9rGGFzVybGtoA8ZMgnQDCCmHSP2sBtHiaqyiEDZJfbfzwwd2k83DfxM1UG",
  "key44": "4S8k6oZyXksgGC5VCs4s8XW7ohSaaWpJDawPN8Pa5kjL8figxE5RcQRAPRUnK6oN8BXrpGmQ6aAiCVLp4xCzTUcv",
  "key45": "4kxhhM1DHbUabfYp8uAsNFXtmaT9rdtSnTdbpzLDfHzAhedzHVKSa1zkwXD8ksDEL6G5vbasDpBRja85XG3tTAH4",
  "key46": "5VmnRuqx9S2c1DugvaxRMpDk2JEMt2hz1s2NfvSCbotpakj9Q82bw8Cy8yWF9s24EX3BLnT4RTGtSi17T43mEnnW",
  "key47": "4u48zjyfatAHoUhdw2tJCMSjaMyj2zpa36XvqW86ccVPG7k5M9irPPyZRE5dvTFHvT7EbgeA6VRJmDQ7cVBQ7cX9",
  "key48": "22NdvMDvngEeu9HCgv2ktrtdDJajxkmABVDYUhqhqAsMAxqZ6teRApAXMdVtxmhrExPJSeYeKvN6xgvMcMChYRQ2"
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
