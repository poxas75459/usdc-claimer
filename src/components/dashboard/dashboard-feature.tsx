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
    "vZnGriBBeN69WQb3zcepK6GzLGu8Q1c8SukAbZqNENbsA52N7mj5nYxnVKM84n5n4aKg4kzQmuS4e784wrfE37B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zg5SZ4U3fNMzPyJiY98mWata87zWVcThtHH9YP5jW8zbaBLFyDYU16dADXUSdGUuARXfNmfZtVT8VNDDKFF3bej",
  "key1": "2y5H7bfjpCaDUSeCN4E2WRHZnrX2BCcKjnQQtTSTioyTzKF4PffpFQKTs1Y88sQ4Zn8waLTmp9e579Pv9nq6fMtL",
  "key2": "5cwZtjsk8q7bERDR5bA7LrkmbPdZ8pm3TpjvVnCn9mxudnnv9wsF7ZACC7Xgn5J6om9BjH6ttRWAweVoEhJyqjqq",
  "key3": "3oZwf7xcaiydZmZwiFDvGtQeq6nrtF35jaPqqC2ZDpwGUKhVqsWy92h9LoEiNvVuH2E7i9xnsV6uhMH9TX3gyjYz",
  "key4": "5uaibTvcEbf2psc9zYYQ6fE8i3SGndsnELWseAs8VHRXBXphByD13fr9817kEsbn2PHizDoTPzkJ4tSzTbSrjYwa",
  "key5": "5HjEGjNg9YvkEf9u97htG3VCfWx2irtc8KBrUh27xDsi6yyanrf9KoaNyM1RnYn3Q7mwheoDjNsXLW54kKp2u6Ns",
  "key6": "3Ks1kmhtBtZifVmPyZrzBvn1KtxGhaoxbjeHhJF59kpeN9iihVAt23sT3oeN6n6Cy8wiWMjUXoiL1P88FxdgdPaW",
  "key7": "3rMScpdxrbpkyfdQpKLikG3dUPq7NqD9nMuR11Cm9m7YDuDfy45MepeNDdTaCPEdGXt6gmdgrRdBz5FPF2Hb6ywo",
  "key8": "4kCq8wsvrGkug9AfcWhjCgJzjTdJACQWNdJK9bbtVCN157Mo3QQFyw8Q7EMR94yhQda8FmfEDMPnMU2nRK7Qggge",
  "key9": "3uzzgish9V4ZXdMDveun8J59a7hyFZXxPWAxcdSL1Tj7b95JSySpTp3p3379EQtc6XRou9G78fbiVtw87xvFMFGV",
  "key10": "4oJ2WqtEXcUdpH7WUGf5t1F4k7m2uR438T41B7WywRrzEq2BBkPnq9ze8q59FGhmoNnPzXTECp7oXcepoitzAoU7",
  "key11": "3qnNj7ewXbonJ39pRZcVm2WyXKudKzrbVr2eKkUMdm8rDVv3S2kfRFdoqbAHqw7kW951whZmZSTSc76d7rCLFnCG",
  "key12": "62CNDWLL7a8pJ3Mdz6rz3hUxtAuhYPJCLWfDRKNd5ARhu3WgpyeUiccZGGoX8MsU5jSAnEdAxV7HatHJn1HoLDSP",
  "key13": "3MNQ2QZghgtYY88XARrMGYaLAhPMV16wDwbhg29DhjKEYdDPdjEZvbppV5kYQSTFRCd1WJ7SdRSuwPxxHsPdig8q",
  "key14": "CcUogF3HNFTXiHwbGSC8KmNVnajvbtV58FYoLVdg3rXATEb7QQ7PgLrSNT6HgJorMVaLtr8Aib5Yiy9MVS6t1J9",
  "key15": "4G84gteGhi9MTesoTRdhC23QcFWA5NtURjXBh4uQQ27RJTkpKFsZSHF5k13AbMPhB9HaxypQeNd1anpmxpVaHhLB",
  "key16": "73NkToghamwpRWHM8cUhUwak3z3dT9KmVEUTP2CAmdVs1Tv64iRe8Knv5SmGm4suyLqziST9oo2AoeLkHbFhh1Q",
  "key17": "43x2rzBzV6fwX7qhecTQuvoGKDJ98gnTVSJ64R9LbmnXmCGsnzmPskmaZBby87gC9eyRftTQWKZYtYQNyUCmrD3S",
  "key18": "5ECcKzcWVjCkDpUrSch7W2AVBaeoDmCeKt6pexnorb7ufKcVi1J94co9z7YrNaEvmbSX9qg3pLjEUdqvCJVufB4U",
  "key19": "531NnBNETf1oreYTGku3mYndmAy81P8Ggh1njTumQLYSf2N1tuFTYeX2rfANqe2o1VP32Yhwtqe22geeaEppWJoz",
  "key20": "oobGhQAWg9KTwMCo3J8VBNmATXsVCHrTgZyw3FGQKc6JbSQ6fD7JLJ29Dzm9jmv3Q4mFwGPaxfqsGJAGoZfmsSs",
  "key21": "5hXVqDyUxNc78YcHUZ7dRGJeYonzcZ32qPmjphA8g7ZCWUn4UZPsnws9EcZKdHHnMvaAtDcWYLDjhLjE67AFnNvq",
  "key22": "5BhKje5N5L4HXeDkZZ7UTMDDU3FfsAbZcJ1XcxugxKjCJQ2TuHvCiA3W9DUkXJ4E24Gy8ret4aABaNzNYdtNTjxP",
  "key23": "25q3pxfoyb7n4k3u78eHDp1qcHdjPye2eMwJtBNY8YDzJ6pyFuwmNSyr2bTchJekvXjLQegZpq6Zi3JfuNJamiyF",
  "key24": "2Zj8oU3itThzrFNiitkURA6icAcTF9th59Aoe7JLnesNgnNv8tKQAKKYkmtxC5E8dNGD8cz9eWhxxfYevofhbcTv",
  "key25": "53uNFqyMDqFbatLh1iJTPoRLKbRgnjfigDXyx9Y2ifHRDdaHKCMHBvFR5yWK9844ekcy58rK5doRt8WTkKs6D4iG",
  "key26": "3oZPPYq2bFSWSWmj6AbAcHzRwdjAqxchRKjhAxUfMcqsJvpXYrDrX6WCiPDW34x5VcGkNFEoDmmR9SAVuE3bcNX",
  "key27": "4dpbqcSbz6xk9bKY5euGEeJe5RzLFfftJSsGtZWt4P28De3euDgYT3JyzifVbiionBp1J9ZVCe2Vp2mZ2RFFRa7V",
  "key28": "3kdSNzyGjuNfvHctXjKms3EaBAibniPD4YwuNJtebSGZH1kXYRZZKUDc23H4CW8vaiRDDfowvqQXgFUqHyEvVgae",
  "key29": "52ghYRAp7PU3rEyKBU1v9xBqpcHWMVTc9Qh5sMbaifzv1nX9aq83ii1r9xr9rPXnnk3JVwtrNJDJsDgtiq6Yw5ZU",
  "key30": "heaucxSrJExRTxj8eGPwUYHxMvGNBbW2eTNo4Y6VYj5h9VBX9CgnpacUsiRxYNkf8XJdz3nLpp1Qm8u4L36rSvo",
  "key31": "44th5oNmc3fFcCJH2CuzDqFuCmWJmq9aUUNbnBkScMy1RzKRdfF5p9oNexNJGicaX1j7gxMaWU83Y85DPY2FfR43",
  "key32": "2eFCXsHNQ43mYpg5MzbMurDhdjrKDjjerv3fF3VFco5qkW2mqnYKsL5cVLhxgL3eEjyswLuPSXQegULyKndMNmEg",
  "key33": "5i236tPqjSrSrAKa6BkYJG6EUo5fcdTkfEpaMFTYBSiGE8pmxbXf7LuqpbtaThoDDiKfXXA2WA6yha2cdkvEmynN",
  "key34": "5tumDCrHxzeYuNs46hv5u7VPenUWGhUL94uYt7wUdmqaWxWdHGjZoFcUpbffwWKj7LYQBmU4fG8n9CsQtXh3nuvy",
  "key35": "sNSwSJ6Qw4J5C2ssnAVw5jUw5UBQxXFFsjTbdPP4mdZFQjtmHK2jvVN6sMqKLTkG8aHhTaiw9684yvHvNuPxSGp",
  "key36": "31Pk95gVEy8KaLBtMxbRFZoZKbiAhhUAWFfnnKJqcs1APPhzNSvRRiV2HETVigymkv4FfBiYWxsbzihj7WRHVLAL",
  "key37": "4U9ivBjMhRM9czW4z5Y1XA9ootByVrxrurUBqEznU5zfJ4Nc2pkTBrtP2mVBuSN6VHpXprhSyKdC4D3VE7TrLT9y",
  "key38": "2De5ct3KBcgdByQZmrNxEv3RRzf7sTAhcuWGjP5HJxehL1J6n5ibHozkGGiDV5o4wHgSLqja5aeKJ1hvRqmnCbxK",
  "key39": "3ECFSyEXknpcMHanq82g6EuGVwiB9d95rxo9PooqhLqryJ6a2mfwqd8sQYQu9LFAVAQydHdyJjfeHxfy6mmpDp6f",
  "key40": "4m4CLHJUwQ1G6S52edtCLBsVx4XzgMxqKEc27Gnpc6W5C8tbPdGdP1SB3wRd1MwiPjGp4Rvpszq4wa1unP8EKr8N",
  "key41": "25yd6cDqbyU7CcsALZTEo1paGKnd2ngqx3s8zs99LYpiU3RCSEhEEkLTPVrGAcp4mFFcQeChDVNxJ579CUz1GUEv",
  "key42": "5MDDu9G6ogEyKdjQxkkkffc7LfFuuYmRtvusdThVKhaPDwbjzV1fMy8cRH1GG7tZ8R9RWJ1S1sDmmEzsV6asL7pz",
  "key43": "Q8BqbV7ujtdybbun3XY1BgMd3XyaAZGE5BVxWVBBTfLvZnthKuW9k45Qzjt3Xa3cyyXSUm6ftPA5R1Fu9m9B4nq",
  "key44": "5SaoWvN36r1iJAhkWVANYviaoVYSwPVs5sP7cv88ovwUDT2MVqQxuFBeKCbe4ouZSz6XfMJ2ia6AK3qT35cimpcc",
  "key45": "4GQYdsGUmVVvboQsrJsRb3RDAUQ7GfxuwdYMFzoEA483S8sytaT4V4PYeDh4qYRCEqj6WgPBnSczbP1e4MzoWcaC"
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
