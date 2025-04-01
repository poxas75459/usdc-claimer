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
    "6BvMu5vWB4teQ9krbpmJRfGZ4hAbQzzeDRJmEFdJJbRZh8nQuou861hUEAgLMS9nhFrX4E7ZV2guskgxRP5rZmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vaqEQzhRtwwDzHwyuFnTDAtgd9Rmx6TDmPnPHPKfSVnaYaCggxFvLpAXgiLFGVShqimBKMbgxBnTxe4RBk2r9Ki",
  "key1": "57RirNHbs12Vaz9iDXSNHj7bCambMX7HU6a4NRugwFc5WiPXPvYmzC57xWSNJcKsSD2q5ktfcNLhSgomZK5KZcfB",
  "key2": "2SyDhFqdZoeGW8bETTkUm38ZMN9EmqFDsCqE967jynMDuVcGdNC6Thn4kyHVAXj822i7boKLco3r8K43vMRDY8Z5",
  "key3": "5fHmLxMDbjGmU4NaUrL4jV1ADhU7cq9aMnWiMd6riShHHpxCdZntmExaDRVn6EN77PNC2uVSHv5B2CAvrALh8xu5",
  "key4": "2sMaR2rEUNdUmXRZsXu4g1FaReWUU4ZN4gKABjF91sgikNMAWe2xB6vF1fGNCrNLUZ7udhDGvjhnhHYTykEx6dCr",
  "key5": "iKyVM8cpkrpyxbHvbM1uwxqKxXe41H7hivhsTaFfRrpqHeqa7CWKxesYgYc4Msv8YRavZtM8BXUHZwNDuhMDmGW",
  "key6": "4TbwD5YD4XCSoiiDs6mu3bXuZgZVitWpdiMcAvknAeJZsAiAXVrx3BeiUvcbei9KH3tSCjwihEXmZhfrzyaobv4N",
  "key7": "2nQyPXqTJq1ZdNSHpEfPYw59RLkNivQR5tMjEcQShJz3HSNek9eAGzCJQNSUVKcDhuvviDYXp3eYPkFCCe6XqYSc",
  "key8": "3q4X3Y4RfMWy6HfXQhG8bjbKvDK2i533c6XHhKB4vKGbKFxAzJeZWvso773StY8i7TzsNrDJ8pbWngMGbm9iuNEf",
  "key9": "3XZpMcrU6mj6NbgCsR27TNeKcyzdgkgyU2tLW2bmaysiXUfbAVL2pFxBES1b5fy8LGwYGrKbDNoQ9nFNj6LxvvwG",
  "key10": "3cum7RNSpjxs6jYD7owGkZ9eaMq8ts3vhPfSHWmcYNDr3f5Xceb8Q4PJxhXzZ3oYRHoebvsoqUH9qCeYyFcDfgqJ",
  "key11": "3hBLv457C95mHqmuvyJNvH37LY6yr7aRz9LnmTUiW54B43aiDS148BKWghmcU7RRJDzSPVTj7hTtRpWJXzAqiSN",
  "key12": "2RSwCDEiwkQP7Q6XseMBzLn2dRQcNHTEM1kjwyc7wMqDocqPSitRNSEk3k9YucBhfvS7RFX4cBkwNvZ7h9CE6c7i",
  "key13": "vjec3MC5hvEeNFByQg1Ltd6u3XyJi693seq5GMSrDMZpN7FdBmrQU6f8j5xtDZ8RpGnSaJRm8Egh8kR6YMWb4ik",
  "key14": "3FDVKyu2xiApCcG3ictiCD5a5Ao4n2QzCB1YD7YtQiNLAgaYqCNySScm1cAwvBPgDP3DmjUDh2aFjcRdQbwEbFZf",
  "key15": "5aBNPakGmSMwSWEMyBnoSc19s9j9RG3v2r6ZJJ9DqwkFsq9ix1FDHMQF4HjaSw1nkPcwuKVz2zrTSML8ETNvJ4ym",
  "key16": "4FtJq6BdaGgMm3UKjyv2BbYVcFmH7LBJLkW4T9rMhH5EKueKwfHNUTNghyGWobaGttoNupG1XHkN4WpAKLfWCwZf",
  "key17": "4pNbmkjwP7zoo91WnFd4huHW8q8UNGHkBpPHyEmsoQSPosQeAoti21uC1ei6iQA7GXA51NGLWJYphs2CcSga3LJX",
  "key18": "2Rk7y5vBo6xN9mDzobVVF8hEcCocYv6eio2EiQzeC4Kbf6AtMgGmfhekzDnpB2EdiMipi9zF7t5aiLuqszmWE7TB",
  "key19": "51HjpXZ4yQVpz8WTNDri6nizswG8wMADH4sZV8hwG2mBH6pofaAEz1KmyXRMsqDAoopPuhGaQvEJeugbKcNu2LWQ",
  "key20": "2Sq8e3vcThQ3rhtLmmEL3Kisg94sz2tppU573HtQbUwVWbjSqBxPnnchizQHdoyQ6gpdvKaVMVL6McD9T1TGMGio",
  "key21": "3g3CrMqme88KeziUcNpqvufvGWTdVEs4X5QRG42mEdYERe8RyYWsKRWn4PwveF9AKz5APDpaSHjYJvVB2VdujRkw",
  "key22": "44uDXLZ5q2apvaz9YCinZEastxo9enJShC6hcpK21ASfEGubWsUfjSJPNzBaWYyhcqyKBFNa3F2zkbUB25aToyEu",
  "key23": "5QrASgh8DCupSj4sk3b41wv85sM1HAmR5v5KNo8KHSCPUUghLWPBaUee1C9ftDYUJffsEAZFzswrS79EJ81UKWyn",
  "key24": "4rKvw8V2byrtoSNwsKyzxRWrYLxyYzvYwvHbQ5Me5RvTDL8M22Xi4HbKDrsKdUdbbRYvBgNXhdx16tGxzs5R3cUk",
  "key25": "5CBnjKBRr5YASMHfvzrrRoKwMdQ9injt39Gq4VNHMM3D1iZtCr2EZTL44V2Xjb7NAuXFzGCVPVW12DhCMBREqyDF",
  "key26": "4GVvaPyP2yhdy1255FfMDFk2N1ivEK3mnqo2eDKvJTswPnnPnQeVFzkYDANr75Ayh1Y2PophSk93cN9YHyW9bQgb",
  "key27": "3UVYXR9if46vgJsBcMX2GKEyv72GBNgFoQLLDpkMJB5tne9uq8cAboHC24XPuyam1Zc5dZGMwZ1rqekk2ZMT3ujY",
  "key28": "2MWPfLpZeZ5fBf6LXSYV7D16NAwrVkNM1CnQdCGu5kxP9rr4gdCaGDghzjQiFoGqHP4ooXw3cCuix8UbbpBceE9c",
  "key29": "4NSVyAhXs2TGywGeoUgRQBK8Q23NhR9jbJUe5db8aMuULUdqEs3WCSpeBv9QfgsLStXHF51ZmLcZ4YhDfa2eMbpi",
  "key30": "2TNxVVkhn8hgHiG21h5gxMPdf5A4MGidhH9fCokmczYJcs99yWcDFoWpmy9TCGkzniWiDX1S1JJveMJV8iEusyhy",
  "key31": "5rQ5KzixX8qDg2WLpGjtjzN5yp2rRxg7UoLz58M8JDLR7CuVmYHarS7pLVJgyVCTSWVo2wXUMZLshu9Y58bfePNi",
  "key32": "474KZ6CWepfDzN5CcvG88qp72CAwiJSvrRPfXz6JbZhnFrz5mJF6E289cRMunnJaHYGo5advTvWZtQnqPJBDX3BC",
  "key33": "2w1Wog9HPq66oJ28VeAgoZDMxuiYp158aN5UYmQHy3kAkcGrHE4DnviauWncDtUtUdt9n369PvYGDHWUqZTUpgmg",
  "key34": "4VxTTwqMSmD8XiFiV6K5rqRdMezVtAzBTanx3L1DU5dr4fhpiN7Y3QQ8t631rhKZrzsKZXcrwLah8P8uR8e1FVs9",
  "key35": "5zCdsBF1jkz4GXGqRt4ZwpKUybxFv1RohxiqLjE88Qk9mnvk5GiHvXWPwJ2V5Rz5YcK3VZiMo53oa1Qsr8tmb1uv",
  "key36": "5HBQj1w45bdgeUJujdwchwfNLWUfZrS2qRBiQHyQRJiwnAxKU6xrPM25mZZ92x1qD1Q7kJhE2ZgbyfknfzzW5D36",
  "key37": "1CSLbuRRo3jEbXkxi796QhcDGDcPK698Enqo7tmKBVXXmxuTDEUtDdDBdFTG5WddUFcpvteZKxwhWx6M3hhjZPv",
  "key38": "3W9dYNVXsPwYrgMj7KyBupHnNioQvBzM1sA9oe69Z2jzFMadcibRGHKVGakM166XUbFi54WyCtPyyFLePTBwSuap",
  "key39": "3qWJZReVBeMTGPKU9Ww1LCu9xjnGksNAXXTo88DtnKyaNWafZPbtQrWQwaw9Zif687Ejy66KwGciG3SHBCGTZnRG",
  "key40": "3qWcywDynmfSLf7wJ3uj7EqPybvkRgMDqg2BzEAEPe9kjMrBwvT4f3tB3LS6W1VdfDj5DzGMGSKv93i2gzJejFLH",
  "key41": "BhPSpJG2oXcBU7VqEZFWx3D263RnqwvTQov3maeAHqn7ZFSJ4YRN2DMJtK8VxAiJzM4SqLwwiN9txpPW4J6r2h8",
  "key42": "4uz3WYHteSKWVRJ3X7XcU6mKcT31WVS576TMEWyacXVVcaoniHDdV2n3MHNeiFvJjvxRFdw7LV2d5ZK8WvRYXEo9",
  "key43": "4iN4EEEc7FYN3795rxMw3ziUarKMHRg35xjFWmZv6PVYe2f9daBwpvK3M5oDdAKPVDFdvVBYWPRyCtynd3UMoxUv",
  "key44": "44z3W5afzGvf2xAn7QfjQoUjdGV2LuwnGim2EdcjBPuQxeAt2c6Fb5i4ZzWDwCoHxSnuDfDsNXQ1WBAiUYWaPGyu",
  "key45": "4zoTvugq8wYftvm1cWVYVoXFo1fGjtgteAeTfLNj8JogSDPz2ckfft8QextN3b1Z33fELTGXQNPgz6GuzT4smA4s",
  "key46": "2UWKMZpTvevLNczLFJcwXEptCoTxiDvmTxCR293t2T26ezT4gb4a5mEofrCJ7DYUUDErrQBZgXKLtu9szMDyzGYZ",
  "key47": "5mkdMwSv1EnMNmVTPDaFSr7gY6q3QTF9V9ubzZw8cXkeNMRayaMBERjmWAYxDBZm8hSKwrsz5uCf6yWznGapSgFQ"
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
