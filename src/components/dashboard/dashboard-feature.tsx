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
    "2YAx2p5UE9MAiHgoPmFwPoUjNzYpf9n4ptmXzD5zGRqSv976HnzRtQXpo8BivFkMBac69NUR2eL7CdeWbKbYVhG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGdz8KfEfQCVD9t1PvKLYAkcwTAsr1zoezpt8EJined2uNyrKXBJu5nBX95xHuhfL5Gns3NuaWcxfKBZVBBybo9",
  "key1": "3kzYmiTvM1KFY6GsgAR2gKSG6STjY1gs7j3jV6HhdFVoGGrKpVjDeW4bMnHBj3ipKVC8FFtCVwqggXR9CoHYWdAP",
  "key2": "FoYpPVo2jzvn2yUZLv7zpxawxXrAc9krLeA8E7mAApdhHDef4xXi3ruYQiAHZWxsLnb1QssYZBRXA5UVE8trX8C",
  "key3": "4tMQdpS5CXWRguQR2pzKmbpcDe4djyUf85LnPmvp4fjFeTZ1ffZu4DwjkjKm7PcK5knwJg8vTJLDRS2tf3p3xGSR",
  "key4": "5vjivmfLMVVkWbJzWDCzUDu9MEVLqs6hp1bGCuZ4GNnAJekV82xD28yZUWQPboesa5TfUvtUeBksj5T1ftk1mij9",
  "key5": "51r93Vbpmz8bJ9Ag3J7ZXDpB2wsvVC6CX5hN7QVUQG5MYZptcD1qTWGkMJaxSCsq3tgtV51fFCxEYntkFEkJMNfh",
  "key6": "4NSyCBYeg3uDKkxYyhpzTixxsQGz4h7FCgiWUJUzwSsxaoDGK8CM8jPPdvBJJ8zn7eVdduQqqNsKYBfTPBAsaKe7",
  "key7": "4CgVjhq3jXqz3gZP2BX9BVeoumLxyrV2jTkETEi6J1Tea2RwadjyGFpm46gFVNGYfnsFzRhQTSRGWUZnJnBVsSb",
  "key8": "2qaTonPXQUBKdhMJZsYpQW87ccbRPMPR79ph8q79xpjdFRA9X3E8v9g92DRyNhGfc27YAUihZaALp1Rneuwtmy1p",
  "key9": "4L9QrXKhC9d1mdxyfcW7YmcnfFZhuj5SG6CMfWPS2c6Bcc5mhvEv2moH6zfsKi9zBraUrcLWm88rR7jdFd8EkuoU",
  "key10": "61bqKXL8dPNfFCZvwg6SvwesDrRgsZ1t8yG5vusWtEvPWgHAo691YHDBG9fjHdcauT2j9dTtMnumyWxq168gues3",
  "key11": "5yuxVUf9HCSh5cQHbM6Kno54tc9wMTjFmMNFUty8cDJG9Na43oR4V35oLE8DRpbKAgZ6bMK6HMQqCS96GS4yUT9d",
  "key12": "4n7LxmX32dS3Y6qoKrhz4EgyzGzw4d21asetA7cgj1fpbHgKVPZr4oKEdaMcrASPQ8tP75qWNwMzsNDqhgWArZi2",
  "key13": "2AQdGNByGNf2kzCk7Nmb6eA2CRfTSu4SNvEC1uXKvxvZb7SkPQBkjWzeUnb4C4renpA9e5oqKgBLUD8t9hW5cn3D",
  "key14": "44Cor9Vi8u4dfE6wU7J3es3omZoH8EyGbEXJzUNQKTYREk81Pm71MBHLYUtBs3Hjbts9agWTn4Jz3tVkLWPdhbwX",
  "key15": "zPyeXFvKBa7b8HCUNvZMHzRNM4ih7GzQYyCJ4bft7CwJHA6VvgfG65PZAbv6mw3Pfpy4BG8S3mna6yxscZbgAj5",
  "key16": "5DfSEyJSfyFtfPQWisNvKFk5nMqHws1prcQMRZ35dPR2Cmj64b6Gd8QK8NZGiNeMoGentWJgHhve5UzV1TA8D817",
  "key17": "KUTVX3dv8o39XcTZRYPjR7VY5PupWywTW8v28biJRLdS4rkbAE3oP187vUAEPHqcKBr4igYwSFQtqVsS5ahbTfy",
  "key18": "5WEKJChBLvgukEENXtbVt4XqYie3V61gL45G8MT7141B1Zrv31xZUimChXdhFuDWZQZGMu7UiRbf7rwpp1pLNCQZ",
  "key19": "5QveG4raWiwLoPeBvFgVVP7HLhdLgkc4EaHg3d1pxT7MpU63iQSn1oZ7i33ZMHpkPy5ABkjPaNdS87eBpvssUxMB",
  "key20": "2EjnPxhwsAvH7MjVr8Qyb8HqQQhw39VyZtg2fgLrvs3oUu2xmjyE7EocvG1c1m6sissT5QtCwKGLgL6FVS1Ncg2Y",
  "key21": "5ATMx29cNd6EsPidQCKQ1FzHvUbvP7PBGsW6XdD6B5U8ab5Zo9DQLZERGbvFnixabyQPaNrfeYvqmwPx3TuLUjki",
  "key22": "36Xu6cH1aBT3Jr9mw4RiRjd4bs2tFTmdRF9mVBVXvuHuN8iVhHphVGmmWcysPek579rcmaAvN9A3vbEfLeDYUyWg",
  "key23": "4ugnb21byhCMqkBdmk9fbCCHHymKkYw7pA7iPrEpYPKqr9RE2kMGSoMqubBrWhoij3e4yecX32meru8oH8ijkxGY",
  "key24": "45stC46UBE4Ft3e8QdioDbynkMhLJCirLdpWKDdz94ENCpNWWsqaQYDkfizoTXYUg5fBxFW98UuKgsk8tR1k1iuv",
  "key25": "4NZbPfbi5JK2S9tAn1VNynpDeUfLBBPobTwg1KssUp6EazK8rKFZ3N9nDdQpWAStQNj2wDmrssyiP8fE2vJjztca",
  "key26": "4sagP815rkwHpR857oYvK8a3i3wWUzqVBWFSN1LsNpmEHJfbWstM1vAzJZ5kFHgggycyiyGznK8xoW6a95jobiAG",
  "key27": "481LXKEzagiarEYxyGQxGbDzYQ14HY4RiEEB6TCaW6mMerNSNiWwVEVYuh6qM4vySYhsf2WPdyuP3o9AqQBZJXhc",
  "key28": "2jAp7Q5qZWvR3iwo2jY23g267mfoN8wR7fjbqfdg4V29zMSnDSwBa8U2Jq4aSYhajCqxPpMkYaU7v3kyuyeDckdx",
  "key29": "War1Q898wJUk1KLV4x4vd8aiXhDADgQY4SvVmDa4bwFR1MSr9rCBdbLRgqiX8CDWfNwu7ZXQgoXfaN7FbLz36ka",
  "key30": "4xH3pWxtCA9HVkY2vmBfVGRV61JSTiZqkMt3dNmn51yGy3gLcN5GaTepm4iAX4dwNw6QVYZvHsXUX8ee9SJbt29",
  "key31": "nBRSTzfQvNgYF1UPG6N8n4PjxBT5RZNs5oscmC4rXnt5BeQFDyzJYZVNG2Fd8jnEtE6Gjkg6gJz3BTNMmQ63EEA",
  "key32": "2rP4T5tB7xQxxg5R9hpdkz4C4ro5PV7UrkRnLwtfRt11J99MtKeypynSUHxMYm2zqGoYjArbFLp4e1azmHm1qV1L",
  "key33": "2kFx567fBnvdLQJwWvbn5zqJMz8bGdBg6US2JaDkoPM4MiqZed7u5sJUMjFcVUiUNrbR8UxjPHv8x8vkVJzFY2SV",
  "key34": "5aj6kyPFzzmrxB9AuTGKUFtqRaSY2BVk3uWc8CVbUng1fgPxjMSWPy5GRKgNb6uArRNVhvEtT3tTqKuyCw3HLdP1",
  "key35": "5koFysLCL2MnoA8wQoPELzYREK4QRq5csrcH6K2dS1Nqzpp5mJyNKr3CQvhBnX25D6CR6wdZECo1m1GKm3dX5cJ1",
  "key36": "k2RjPgrbpuAwyNqwamBqQVtFFnidhytipGeSNWVELgHG3q2wx3de8kvSqkwLNWxAdWAC5EvaX4ziYHzBFRuDR2m",
  "key37": "3fze6uCtpisba4HFB7XkHpDrpAgrvMcKj97iGXW9xeda3yYo3PCACXWHFWTSXqtcEfidAZYZrEAWBvmT53vKXpRK",
  "key38": "4GoUa9HZSpsRcaJDZr5W46W4D3i71WiqpmYap8F7ygtzgDnENzWix5g9JcFwdJMs8WHffAF97ibP5U1oQ6iwZEPf",
  "key39": "5PguPj7rMMhv9BhMN2twFevoQUmwinVYg6ASPsLhzFtBXqXsjc6Zwb3etmQyevtRpxWpvYHZs8MTNiKGjV7vSnFn",
  "key40": "4fCSB43zJsGFafXpX7cuG3zJsnUq5SpBcdXPVrwC19nezeMHXtxTDoBPS1ARom7QvsLGmToqsxVcPNwEt8K5jLW5",
  "key41": "2zuP7kEcuBb51CLdcGdT3Bx5JJZY5A65vTHCDESYoPX6EZQ3W99Py9VXy6Qr6GwuZp1VX3HbFMKQT7yeK3yQ6PTi",
  "key42": "vKBVE6KxiWZmbK3TDpHeYFy76uJJxxT7yp3TMcLXBoawDV8FUvkLKX6LKDGswnkNsQq8qwksZ283Tp4YE8HiRki",
  "key43": "3sfiSnzLBFLFcaHLTjc7Bpcj6jeSYzga4avLFDwfb4NE2zVJK9UDKVTozabSZqLrJHaTaF7gBg8BAAEQNPGUz1ej",
  "key44": "xjNg2B7KwP6363o26QPHootjV5iMLPhxbwSCXSznbfyDyfKB1CEYtujnrAp3psTwVnvqSeWXVdW88YCHPy93dJp",
  "key45": "4kEu3Z7Mui128iUi3NQdyyppBL2fm7jzvZ4igLhzqXSFruFjchkvQsu51hsTvXXTusKRjz88WtBFgHfxvEyJkTLK",
  "key46": "4gMWfzFbKppWt4xXDeRUVBrxfD5ipV1tq8mz42vprxE1hjAzeauLmHaxgZ2TonXgbauF755n25wKD2K3955Y8rQ1",
  "key47": "38n1Wxk8T6x2okpDwXpKhF8xm9hTUNRVMJvmQGygqRDUCu8Me9Z1wQirVVCqjP2JrPMDBRjaXBXeCxyzZWbCJ96h",
  "key48": "Q5modsYubVtAvQPv2i22Vu4PxTYpXNmFB2P4YpSQUHX5bFdBux9zBqtjibtyzbg1mHwwfB6KVZC91vFw7jrEmX3",
  "key49": "5PX51BV2Y2fLbTPHXxcvFg3fjXUNzkrRGQG3oVVTxQiSCvmL3EiSoJbU2gQVDuzXqaqPwPthRBpU2uWBgkr4nmJc"
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
