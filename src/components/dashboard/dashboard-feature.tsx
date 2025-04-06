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
    "3uXwYnU6Qz5vwy7e4D8E7hyEMiKcjPVe69eJ6s8GQXd2FQpRKMD43rztDLP1NS4v8aKTj7xQbJrAZxGc9dr9hY4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAD8Bu6wULLGUSMwr31RsNYk7PNpebQjVwPiX9ap6huAyc3PuLaVtAVNV9qKWgVtGnUGmic5Gz7vEZrqFdHRrew",
  "key1": "39UMqgNe26LicbdGJ3FpTG1Hicq6V4wrS77VytY2ZRoF2Tk6cF9HrhiyskVVSha81UKDMtQsQ68GMYRg3CnLrGZP",
  "key2": "2a3XRe2i3LWjo6cFminYieEUJX1P54BBbHum2npU1je31bnEpmWpdBjtQ5Ce8aE4oYiswd7kJki6XVXPmbh5EpQt",
  "key3": "24AcGddqxVoq1EcaoK12AgU9jBEj4sMXeVyo8Zu3ACBT2qV6kUSpCrmTBk4CwUbnCyNTfJK8JLUskuNBgqahUAR9",
  "key4": "3ZduWWRc5dDBh1Q2xk1VY7Ztmg5mG2xZhpDfQ34VSMZSZVfxMBNpv1NwbxXQdkoLsxvDHrBJGdRSMCng7om8VhfT",
  "key5": "2weVfCZY7Z5DQSCtdpo5zTnQRMenG8TB7WHxJGzkNAqtpyxJ5gspfm9P5tkDgFyo3kLv5Gwm8zcgLzV2aLqFtiTe",
  "key6": "2ZnvWcq1CPvijxJroiRTUrbQ3dzjuNfQkpsvCBJVrpW7qJA3kZ1QwtUsNaY8JtrLuN4Kqakbfd3JoaJCcdpqovSE",
  "key7": "58KX3bv5ZV9iKSfF6Y9iFZz2Sn3jfSLvKCcWTYR3wE1ccz1d9gGWVFieAt9dpZJiosd3gcFWKrHz94miD4enJRMD",
  "key8": "5WxCaVMoMdWLuCdvddVcELwjxcyipx3YqaD4gVyqSyVwrEYCVDGgdMqg85CEQVCkPZKpTinPgHvCm8QGRwzcfv9R",
  "key9": "3rUkyiV5hR2uRSDxNnjtM6KyiEsboD6ACKfek5iJ5kUsRfPU6ygRoE2JiHt7MzgTytQ5sQfbEhzd7WUJT8efqY9K",
  "key10": "5pECKjFgpsrW1k9tVBWerNjMVEmDgtMwFAEBHskDLqjXXoaki5mQ7ReWcNgBZEtbSvau9qT4n7bLirXYBhYJG2qo",
  "key11": "3J19e3QM5rA2dmdKiG1Dm9PGshwDcoVTHPmmJyCPRzqQEp9ZNTppeKNKonibq27cgne9adR1mkztpheqUYVP28K6",
  "key12": "2goADK7fY8YKMu7SvifeZKjmpN8LZhrHUCr5wNRLB8Cv67VceyKqrWcAkJJHLsLyy9XNi9pjaYidEZjD47z9uUWC",
  "key13": "Jy7NzB2pX1qJQ52TaLsdros1JiGYnkfTGfF1hEk97Vv8YtBSUeFBXF4oEFUEkmEA3UvAyCthc7PJvLctTLk4dbR",
  "key14": "2cRwQNfh4Uyoi8Uji5qoEH7i2wRJ5NUduLXD15xqHx3KSNZzJm9Wwx4387Vu8ECYXn1dK4VrgUKNh21Yk73cuUuF",
  "key15": "44W9iwhN2hWkQ54mYG43o4USVwqhq7cZD3NbvTyXcAg2q1u3h8QiiDMu9RUUpd9PdUzSshpeTgVPVkFdHC8gxW52",
  "key16": "23VFAz44neaeL4zH6xCDjqBVsSXvW9saC1hzyRpdU3sUnKiGqYFgTopQDbS3m37VovcTBkCL3zBECudbEA1kpzER",
  "key17": "28tRvhKQ8q722qNUK3A25WfCW35c5eRNXcd1vqitCkXzPd6rumVpgiRiZdGz76tdPyZ5KTyQ8d781d3y9WdNfDEv",
  "key18": "66XS3nwAXLMmJpFtTsNwZx3szxUAkbEzG2QUusPbFsCU7D6sqpYey28WwCnD3su829vE3a96crQWhWry9RfS8mUz",
  "key19": "32CoCN9kubXRQSN61LCgcETj8WeEuUPeE3cxDqKrvnSw9HcopgPXHmipGeHC8ZTtYGtT5suAbx5kyCd7ikrv6je9",
  "key20": "2b9DDbeSvfztHARoK588Th2t3cNhgfQJrQCSREop184GRsBEoPx9HrkqZubpMyKL1TJxZh9gRyxBENrLouCvY1Rh",
  "key21": "3oCaT8S3vbQKn99KDtWjrTAX8qLzXyCsKSBBPcRRKxzZkwjNpJnaonqhu5a1GimY9QQaE7KLZsGkAhSwF6Uu9UWc",
  "key22": "2etyX6uFL8b9LZTaRRmRKuD6fRnVNMbfdgzH85J2iYPSsPYHHCqpneKhAM8aeTh43425661nGxA2eG4Ufhsoxt7y",
  "key23": "24ykYpCqbKybgtQeBsrfLc2h6wXPZ5H5CqJiG4h1QvZMMjJ7bLAGtKmFzEp5FVLvFhCbJuoqHqYv7oP6aeYpwRFk",
  "key24": "4gC4Ym5TNMuyND2dkyugM9EcXP7kkTN46Zzx6D4MyY6uap1Womv1FaA3cPa8KMSMe3DDxNXvAupp7Dpe8KgSqJZp",
  "key25": "iQcUqa1Ma6Nccp4bfAUaN8nLtCm2QqTA4pQJtfukRH24yba9XtrD49ARBmvCt5JVZxQUHZMjRcw4buURubFfVeu",
  "key26": "2MLW761TsYgM9ii3t4BfBC5XZd686pQTouMRATVhdeixed27SigbgJVDuKztiHminbLLyPhAYsn73yUaBXNVMTaf",
  "key27": "4Qp6iyEMXdjQWQN2NUfkE3exhjbnjb6bNR2t9F2q57H3AJ2BwLMkb34iBCaMfX6Q1VHpKcfQjj5kDnkzwxs3P9Ls",
  "key28": "2PcwHi1mGfnhdwap8aFXK3PfM3QFxmSGsynn4pEbJzUXzgUAB9Gz8AYx6XjCdErx61EHyQvwhoUBK7x9Z54C7Kst",
  "key29": "3e4aZkkt7LJdVjqVuN1bWnbRLpEjXQCBPf6CzprL9ZUwNsf2gQuetmZe3HgncYPZn9CSfw463eZkME1oL1Qiyhz6",
  "key30": "4tZEjMpxWzXyh4jyT2eBsw1pR7AVw16q3DWqDPvuWQ2r4oEeGUCABcL5ajtbkHxaWp42FRA7WgpTDH2GhncGgr5Y",
  "key31": "62W7upmSm3CU8UDTqonmf2iGjfo25QZ4EQSymGdDGhyU43C3gEasXuvWLRt3m5oZ3tEEmD5tFBG2GPsXrVsSo9HG",
  "key32": "4EZBfybgbu4APxXAcs7Pn9PTrAkgPeWJ4mUQxa4C2b44G7C4DPyijqayKES1Hrri9W4ovsy6arz9Zm4p1LFrwiG6",
  "key33": "62HMbxsR39HNVoj2VNNmPF5SawMv5YAkH4G4sWnCQhGsNDYjCPrQAuFr1MzpwGsCsTkrHUfoK8vfca9FSjMPo27E",
  "key34": "5hxmfrtoWXQjHC7xNiZo6SEwXcuYAg886YvvAW5aBGu2uM23ixCF7QrrnNSj8Rse17kGJZ6nxtiUYXJd3JGdifhy",
  "key35": "5HghXbxTPB9jWsn91SsgaCLEokFtTp8faPsFmgU45DLknJG7FFsxZ57C6UokjASEqdB2B4H2Fmxh5AJwQ7yU8Taj",
  "key36": "5qCHpv2EfscjK7GfGntLzmfvufSWEyDS8btLKE1wV5dWvdvau8ux8TqNfoPGKfQ2UDfrjJXZt6nWCPdYqyJpxrmf",
  "key37": "4JQ83evYAfFKsjDdWb5eDa96AbnyQCnqo9SDsPsJb8nCgfu9daXPUFg7eamJuC25GXLt2qCwGP5X97fCtLvqC8S9",
  "key38": "2WAfDPS1WzpAVNGBPpYGR8vr3eqF7uFjsdDRQMEHKCjJUSWf2CRNMfzQNkNrtxN9HWEPEDQ9k2NEv3YY9VMkhDWb",
  "key39": "5XR3jh1mjoujhtDHqjgssxS7GknFwxFdFTzVBupKvndNagdYSEdgMa7gFJrafMjFXyfrpLpE96atDuS9hLKLHEUb",
  "key40": "4mgmEAEfmuAzk4WHxNzWYZjbHcupS9ZrpVbhXfZeC5Buxh4uqg8HogVEcevZrSjiFuTbdMmkoLZ3vvgypu6vHaCe",
  "key41": "323qrFsqrshssN4BuDgnoX7VgnQRfD4pUTVWTM3cNiR6eUuWizUDgJfXv1oa1j828A2EkX8bmRqXC76xNVUFqBqw",
  "key42": "moGsDYhhggzU2c9AxnAH7q7hJHu38smuKeBnr1ptQTFSKkpjYEpVhhKNfvkJ9qujr1K84KpWA35VdtRW5FNSaBi",
  "key43": "3ZuhAgotL9VmrFfZ5yzTqULVf8dyJWUm5Qp2VEuMQ7oAS2WSVZaKUQ4CP64S8k3B6Kwoh5kEEoN3t9PAQ5Kps6VX"
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
