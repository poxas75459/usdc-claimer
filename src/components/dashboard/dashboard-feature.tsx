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
    "4x9km2PY7YkDNKFZpZiWqXKKAWuNGxxiYJb7R61Jpn9cgJrERx6gZwsohpfJ4Zt7cSKKuc971su7yozuEQZkjyPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2hRfp9JuWtVkzU7SLFxfsW3gdbRH5mkg36m2NLP6K6F2SnruJzeoQ7nEkSicgKpVbb7KK41dkiG6LSEiRvg4DB",
  "key1": "Bw8E6AufEZfFPdwgqYX7NrqEKA7JLSk9mt4YroGNoG66YH5PnRLrZUaWbfjQjCBCVTUkbaWG7UFRGcvMrmFbB8L",
  "key2": "5c8CPcmfSjeyDQg97DUvstopGxAuHnBX914fwhnXHLDKTMhRLP8uTpYpNHHrWgHT6124FpfVpmcG2pmDwX9cETPQ",
  "key3": "5cuJsYyfwXNEaQyPqYZawF5ev1VKHeC96yFFErpZWeN1eT7x9XqtjYXVWJnc5vSGRYe23zrnHS9A2RYwhs7cJ7eA",
  "key4": "Zs6822w1VwdfWvq2B1sgBGE9uZfBVDaE44QKebJkk5GvJBckdVZdnwx2v9YmKfsPd6Dhu6yaYV5T1rZwg4fa22d",
  "key5": "c4GgGuGmuvihPSGurV2eaVjfic1Gys1hgcHugbZtURu2sKXDv7JHbnCrwSQ31sPpGke1rumLpkGPdDapy1RGCJ1",
  "key6": "3n3NQCcaqwKorfDmU3pmf7VUBt696c7H9kmoNYMjfG4peGKhHDXLxebAGzshHsxeSVKSup3UJAwumZuPLEMunUV9",
  "key7": "QY6QobBjQQBsoLTGSmY1jZhSJxe7WeXfNMrgYWkZCE4a8McSZLAihLwdnBwWqUhTFJPZBBzVNn1ZWgcc1KiNVaB",
  "key8": "5ViPeXV2J6FowB44kRYmfsUKmzykqsWfGPX1bdSXL8orJxxV4yqcVfHxYvQBztWwegy3VK6o3GVnhwKEZch38AXy",
  "key9": "2vKrLrjM7Xv7RJJbRMsBNi824vuiF2HnG6Uf2SyuU4LkFMAH8psucfzuza5GkHdzFGNyUvDVHUTejoxzjZurKfKD",
  "key10": "2mtg74yh2DWrCaaAhWsucVjHE9DLNHcrDkH7Bo7DBAQUP9CCmZ3KvG9embwfm8BafLWMcbajE4p8qBWXtUzb46AV",
  "key11": "4qJSgZPszuqgdAgq4CyKKPc2cunkcJMbiDzBQbEy4CNznXbdheSanGUT8em2RAF6wSEJ2Ttm4B7663un954c1dV",
  "key12": "5SKKha8Ay5wG63RheHrVh7qngnVGiCzo41oTViqmtkGuANGyLthkm8kL1oPRNWfn93dsHi2cQQQWbp2qTfH9cKAV",
  "key13": "36tLNp8cHPEHC7oNGnmQsJMHaCHxdRZAwua9XUVYSVRHLsAajUeGuDzLZgyDtmoGuWwWDJ5Pc1zChZEsABTK6zH9",
  "key14": "49DSDJjAdRM1w35ozGT2X53EagBKZNXLUacPvz8RZ3o28CogTc82h5pkk4Fhn1swuqtXbYuJhFpGthWWBFFWK5nR",
  "key15": "5EJD1oxtKGbJVHDGUc52E3eDWwTQrCJdjPwMp7Ea4wB3tEbst8Pz6WoBKnKp3DaBtActb4rqTBqeBsNybSzRWaLN",
  "key16": "5ZDYDHRRo3LX2mEb9Mh2YD7GnapnVU3wWRJNz22q2qWzGwGasE3m94r1B7uPV3RkreGW4YoGoDMC2qh3i5J5htoE",
  "key17": "46RdcBxg1fA8SovmumNbip2djAFuAqUQ7UF5iTXkozACS2WLh9yoFBMietVG4wfaYrfDrtHzU3gn5LFw2n6CPkTU",
  "key18": "yBEYgcdzByqR2JcxT6aZwUH5QSgoBPEYKheAa5DfUnaE74Nuto2qp8fFYCbSzWwAUatWLJNG6grDAuH3rHooWmC",
  "key19": "3akMDezpZWwsk7ehFdubPUpgodnnQq45NrmrnqbzDEt1sFW5TnEDFo3HWniT2MF9hmZ8wEMJp7gP7XhT7zhxC6vQ",
  "key20": "nNMFXHjpMbD9LwunsMBmPxgajAqe6BNj8Xrcd6YY4YTNHFsETZzPQM77PasTVmpddpj5yhWaMPSq2sSSJ9yK6Lm",
  "key21": "3RWNQHXtDWJpi6Pcuw1Pfw9fNSZGc3HDAoiCtB7Z4Zgv52MqxLxHDwNf7R5o2yqhCHZ4U14iEGyUxa19pt1tUEgB",
  "key22": "56JoX8dqE34a71vPoYzsSx8b7fTzDdD51Qe8ghfhYWvBENx72Vika3pGJ3dEDdovkPimHuxgGiANAxkzPfVFMGay",
  "key23": "3ySPuPY3KFbiKFW6Xsrj69dp5kXYuKJNGCQuKQzjjSFVhZdPMpcSLWXUpSxKfChGnx32ULvhCeuryUvmt2frj6fU",
  "key24": "KJsAAQYWNmRwhzj58rfiGSCaDfu5n11rYovtwftpaYu3e9W1pt7EARLWer8kr8RsDwsyPLxz8Ngkbj23h8s7KP2",
  "key25": "4f97aLJToGKw3bUBRLKTJo4xcVDSZpj1L6K98PYAQ22j44a292i4fBQXrTzFYP6DLSYeAXEuU1gfmQBXGiJhj4MT",
  "key26": "3QhFhnaWhvGqvkuxKosytLzkHbM59o2mes9peob7FCTE4YGCjX93kwhKVxQUDzB3TE7kXD74F4br4o5wTnnMaU87",
  "key27": "5wffZKPjPgzrZ9sWuDiaq2C3L6cXHYpRksRbgvr7cT1kW7qp1DcbBM7RP2kynLt8Bjte3NbjrvFSHgCg8RYZ6j4g",
  "key28": "2YsLMvEkBw11SAQbaf2Zj7jaqXkA3zHY2w7jrr7YEmypFU2z63RqTHA8P6Nc6NC2Lyh6g5S6AhxhioqQ6UKw44BJ",
  "key29": "5ze7R7BzT9WQKfAUMz1kWwV9n6hWdx5J91onGNVABEaVo1AQnky4BiWHx3uKo1u5zisGaAY9eqxGMvMtkbhZojwt",
  "key30": "5Fuzgpu3vnSmXc5dm6BpAHE3qRTsvujwfg5pKnjuEoPJFDg7s3hr7BvKJ6srFvSYETidsHXCMZZhYzQEyPhWtntZ",
  "key31": "rUL7G2ybRPXwErU7wec9WejQRtSjCNBMiKNsM8jxX88SC792keRMCkNCCzgnKJ58XZbjanYSUuBwbH3muPWm7X7",
  "key32": "3cz5fVqn4xCLD2GjwTCBXPFcj4y4L8RM31axArakHJqfc1i2CXDPSmfv7meVT6jrKvkEDDjLTDTryz2Z5h6zpxxC",
  "key33": "4McwLDjfYMPqgdAX771eS8Uyqqsjje2NKLtcEXQG4oHZsYXfHaJVRD5haisJWYUMD5PbvmVT8SkF9gy8NmrZJiBG",
  "key34": "4MS19fWUMLgCG3SsiqtFdr28hiBav6D7SC6Jq1GAgiHTpFFhc51N8LknbG93EdKup8QJyzyPeEjwA1YZsPjzFteS",
  "key35": "zhHJp2V7Pzo7k7hNKbKSW2FUuez6HnptRyyva8F2WPSitLmibxBv3up99MSmFW8H7eitZsmXEgX1ouHaNmNuSEu",
  "key36": "4pSaUQ6VcBYFUBk3QV4QkG4geabd1pXFed4tA3mKE924gyP32QmvCbaoBhQBvTzcZgzPZaWLmwS7fXTuxtwR9Vjb",
  "key37": "4up8oEBpvQ7c9QkFLbbPQBqrCSwzJSdKeYdgrEbHRKpXeCpAcv5FDawFz7oAEZF9c647pGZcKmgvnwp1gzmCmLJa",
  "key38": "2Axb2oExPWrg7DGeU2zoPuKn5PPsewYwDk5fBG4METgyoJNGomCXCH4RiLnt7WLLckbAhJRfxz2hN4dJ6QdWNCbE",
  "key39": "3rw71CHwgTqQ3aQ26NLFXt4wWuPRtPqRkfSLd9r3T28NdW8mTSeqzHE6DQMbDoCiVzDRGNSACzvbSpvcDQij2yC2",
  "key40": "4nDBwUv3qStDZuUE82KJ7VSCYvSLNGEiSxVQfznNkkBhfUkN1ReodUYFwn75ziQctMhZRTWptR3Jv8WZsR7vUBiu",
  "key41": "j4C1VVC8HKvuJn5DVvjBsXxWLDiit3mtJK4zXWNMUmSQvoZbTK6LurcrM9bkquDWQqr8N2mPTdoTvAXtRTWfpZL",
  "key42": "5buNBpJrxFq4YCH3D9M79c3rBm1z5sxP2qcnRF2T6Xryrpwq4m2YM79ZotdMSUiQzQCokmaAr67foRArMWpdQU5k",
  "key43": "3fxoAEK6qJdaDhdb775HTNTq8nBRVPx75wuZdTpH7CA5kocBB7FKzAfd98AGZ5BuFfWzDC3kMQu4R14XBMcpP4pU",
  "key44": "3vFuXyUAvwnwxEfstLRnj8At9PCz5hprMxwurkWnrhqXdM1KUVZuWWPBrvf9HvjHrDgxTccLYfSRYD5UYSMAiE24",
  "key45": "3yRJqnEQVBb1LqFBVsKC5RnrcmS8Byq5XxQK6tFKSTmARseKLCtwWArBvmzkLvaJchto1RnvJMLnPFT4A14Ra2vG",
  "key46": "4ZjCWR5QbWF72r1iHTUc93Y4gozxyBk9bHw61eoDRDeWXaZdp6HZiQmnnHwetstVMLN3uQeSFY5b44UqbS3UKm2y",
  "key47": "27Yir6oFJH1e8hoWU6NLHZEhdsE73hfW5MV9m5T63Lt1wT8NdeFYn6LZZG4KKWFXASGbUgnzfvL6XTUZP9hABixu",
  "key48": "39Gb1A4NjaPMa1cCDuNDWfbvujdz4ouuwe8HZmztcr7UC29wHtyhyyfaZ3ZDN9hqdank9MeLuHBT5Qq51gz9buqt"
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
