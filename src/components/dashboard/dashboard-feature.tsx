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
    "3Q2m4QXYtMhDSduYCcopkg232ftWj7kcF8Qsc6eJKtRCh62kQscMehFK46PTzGMdFSzr7L1PzwmGDSq6ppDL1smV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WibRy3mdGXrpgg3o5UAeXQ9FrjogVRcdgacSZe78WAKR8dfKGppgabYcSjHhhSbKU4L9685fAvKkVqrXgNe8Mb",
  "key1": "2er4PvSN5BniS4DkGs2GjA5UC2DrwKULn2JCmF751kJYfFwrJXPP7v5xLuNVsmGMECVRmUFpPpoRfqg1eN9vmwDT",
  "key2": "4yh3wEMKF8Nfc8DwqCxwRK7D5U82nCjcVKdmov2YabAUs7EyuRVU74pfyRpeBPbq3WD4NKaNq9U7cNV19axJ7Xxv",
  "key3": "4RjjbhsYG2x5kkr56YJWsaC2V3izfp7EB4nRFHroNPWdQRKpJZnazABzDgdAeLKzwbySkDwRx4i8BeoErDk34tEr",
  "key4": "5T871Z2hneJyLscLNgj96s7A12wkUzgrZjjQn4XXox8zGaLQFeHJJP6N4nJnTe8CBMBCk2E2Sn5LNkysuaQhUQis",
  "key5": "F94wEcLA8Gm2xBEwbnHRehBtXGtFSwzGSaKXGv2Qc4Pm26UoFkGkU4UGcuBtnHiiQJrPqvWnsamLA1Dn81uNrRe",
  "key6": "huGuVLhLBp8LpND9rzZcJYfh17hMJCsfu7aTF79Tyroiwd4NnVrMvtYc7T2eyNnAcrtkxJTST1ysntXYsEWTSL3",
  "key7": "54QxAR4nNHHMSTuVtB1AdQcngN2NFvTGiPp4o2M7h89du1XRGx5tdn2KKwPBXMg6sQjKPb2778eNTMVLrBQQh5Nv",
  "key8": "2eXhL9NGDeKa93Mk3x59gXoJL9pmudzdKCB8Gn7YXFGteMhLsSEJZGTkxdrYxK5EStrDxKimqdzmGfYKuXWE5cr3",
  "key9": "2dLLFSM5iNuF1JjwtcvuQjANMo6uRVFdi6V8zq7czkBHjJpXffupZSAJYLbJF4jE1BxZr77vAJHVa44Z2cuLXGTc",
  "key10": "emLf52xL8Lrnn6S3a8v9gYv9aoq3AAahZroRpLQFBeN7szY8fcv4XppcsnaHyBphA2tbFecsbhCkoA8u1ByibKv",
  "key11": "4B5zfT7S6RHiGNvK2adWXqM4rNrGNpP8caykLSzKbhQ9XJR5henkJcTzDFDgjTeXFiPLgR6BYd7jAPBxR9R4AY4J",
  "key12": "3S57xZ3J54AWb3TzQSrf6mHTB3YAuVD29tnv1U3NckFDFeY98f46TraQbEJqQU39CbsUpYZ4SFU8Sdy6qa3UmZCG",
  "key13": "2HTEd6bpf9edN8vEtY1DiiZKR6jXnETZVatrHBcTMdrZYqnxNTyhee8LXCrPDfNbJ6mjXVZA6ZSAauZomCYPrrgp",
  "key14": "4fJxzKV971d9LSm6GSjqBwhzV8WukFW3ywA4tzsSikD3KV4DJoeKtWKb2DVGcaua1vM7B1U7Jv7mVe7YbVwbNsm3",
  "key15": "4rkWQJpQKVM49EqDMu5KXHM4XKNN8MVgLmCxs2Fr5fPMiFDBqJhgDYpS5Fh7WDUvzbwdb4gJvmffyfpBPDQ7oTX3",
  "key16": "5HRmm8oatCcNo25VTTcE84EkwR9Fh4Vk5JMErA5RtJYuxfwuFf6h8sGaFDdaYjfWrJXeD672PXyvB8izyLqDPL55",
  "key17": "4bVYdzCmr7NEjry1GXhYw5Jnka8X3UXfBnN9en7qytkgMnaneCEFAXo4YgzTzcQMK9m8EabYvDdcy8VSKszbFfSy",
  "key18": "2MJ1usiR7g9S2aqemSbQiGKamrc6dTdKCzWe6Cumi1b1PXfR2By9v8jbA9vbbcmbN5pYd9hta4XPUtXegzUiiG2n",
  "key19": "3c4xrHM2Dd9QMY9p1Rmey8wT1dtdxDEYxFHNiN44ts28wyNsm7JdhJjsv31Zs3ppg411MAFwFDPqTsbUem7vwB1F",
  "key20": "42BhHSHLJLVkbBTixoWodjhFHSzLqU8pXJqW9an85poMASddVMcZtnCMeBKYxW1byfefGzjpgwg6mP9zEePtAhrD",
  "key21": "3ze7ErrnGDYLCGGcuUBqRSiLdWH78X3Y8CMF5RJqneRLzEjscXGTuwuNPhjsmS7ccodP2DYMySrsXvfrcyfBdLTt",
  "key22": "5UoAZu3LnksAeZv5571pLpAF8uHS1X9ggKrd6mHfwwkZd5Q8vvMmRc8i9wMAEYSvuffs9MZvr1z1RKLTCM4Jqd85",
  "key23": "3Riqf8PXWhbE3ybzN6j37LPj8baT8ed3tZfFCLddyp2UFy4fgryKZ8p6X3Zwd6J2qPTftt1FMjrZUnptLMC4R3Qh",
  "key24": "6cp1egfxv8JEhujPvpP56NpBGZMHF4fPeBSo7tGQEaUfvZc9g74m1KGL4CFhvfehPGAnS3N1aQyAnbantX4dTXn",
  "key25": "4hfYv5pkbHJC6cyzY21PKYtVixbPrpQMb2e4NyFfo88S9pAgLwPgWa7DyeqHadkmEswMScWoUFBbgywgH4eR6p6L",
  "key26": "32cuzgSEfEPjCpx7fkk4hmb75uJygKDCTeCbZPdEjAkxLdtim9zwZor1wGHAPtbecKy7iGoM8WUV9aDAqKQLvt6q",
  "key27": "3wXHQqvnf1pMfx6zhr65jAYyu4SmhJahNxyfqAHt2Q4t2eJSmuvS977GxXoaBdhfxmC7BM2HGoceKzicdGHubfea",
  "key28": "2wz5d9ijVDwEJ4uDBSVnrjWtkWif1PzYa4cfr7kCB2AaQwoXhaBgAF6JufEtnw3KJvLxj1tnWXLNwxcbaxeSntCt",
  "key29": "xpDvynFXB3716tKdCQeJe8zLkL5h4GDur2m1dYbXdFqw6S7X5HZauAswSjbarbGwv9NdgjMmDXYG25vUzTw1xYN",
  "key30": "2gnfjPRpvrMaU2NXwUVuBgCroCyDu5N1oEdos5kdeXYkEAQMZ3aSyA5fDaWYUFyWJzx5f8LecgkwREsrq5J6YaNm",
  "key31": "UVj3fnHyp5aRumUu6bSgiyjgnYQwB6EqEUfKNS5rrQUdGtNAAy4qngUm95R92MqvL2pfFTR8XSZUgpCyYsKdSJM",
  "key32": "A5aRYbbZWxz8CxvFKUMvqdLuVGDj8WzozzWuSGZBtnEsfttziTm941kRNP9ssVXS7hDmrYTasBw7Wo6kMNimy6S",
  "key33": "347K89PNyT6n1qR1714ohM1qbFQcjJifBV9GMuvTe5o3uspdF2jsMP4dn7ARjVANN9cDHdcZtjWYeF1jdKGpDG2n",
  "key34": "s1vN2Kz53LZVo4dzR479tRTTCxRX7dwew4G9pJUFivHhwd94dc6FtN9HaZxf47nVAkLZWtKNo6dXTzg2z88PcTX",
  "key35": "3uJ6eLg9vBLwLQcNHPxcxe31FSTfPhSAdZvvr1JFbPrvkD1bMUisEwDZFxLuXeFrfS3d1MRzktL9zzbiRRvqiNHr",
  "key36": "2SEkpfADrGKKu1Jua3NrihFuiNDW9iR3X5rSNkjhEkg2E96ALXkbXM1jEtbpqcEENjNgGcMdYeBagg85sbkpxRqM",
  "key37": "4a8njWogU5Uk4onTsngRj7SnF4Bv7wpfPoYZPzqbHBbUNKLFcyyoJeLQQM84Qd7s9sK35MK7MDyWHRoV21XVpEEK",
  "key38": "Y1NdQp5YokjZDiNXvPVmbffZ5v5sPLZZkin8T7kVfBHdbEoTjTskbidEwDCgi8s7b3hDLCBzVm1ZLsvXeNrmbK6",
  "key39": "4qs5qfT22289pdacodsurC3hD6fwpmPKtHb8RukERepbD4cM5LrRDNzRLhC713EEMv7npeNgzoUbfATZFAEvjYya",
  "key40": "4Zm4qhyuzR3QciUw6WVdze8KZxPSVqFWHXDEW9ZGDn4jw3T2pZ1zKL5cBGLH1Tf4tBJNTxBdiJWyY5ka1ecYkahS",
  "key41": "9u3KkpVX72MtSFbKCVoRf2bQVtAvdfdw133Tne4L3UuHbpuhCUhrvCegwPNweasPF6XpuBrWUQcdMMu1VgmYU2y",
  "key42": "4t7Qx3x5QZFZsxXwVVqHtsYXo9uMXmnhASpVSvKPgHGbHbdha8oqoHiJG5DP8EZePcVTdrMPKaQznCUbkbcgsnXJ",
  "key43": "43W4jQ6agtZvaB6PUmgGaXRnMsSyfTFKswmdyRc4rrMaEhpZrXMTMJWNLx73uiERyZZKNoAUiTpA2zAC918zymKV",
  "key44": "2XAAJPapoFQd2tT62xxtvQvSSgB8mpzy3SZydGfTUcjnbkfLEihirWnnnrQm6A8E5jadF7cn2FoudoYHf11przSx",
  "key45": "3eTGQVDfdszT86Acm6QTCmhn25TsdBMFbU2uFrBjpfjzFyXJJ4d2gQsTPQ7aDGbt7LdUfqvC2j3vDUrgxgsS1i2A",
  "key46": "4HbSp5Js5D7Guq6DcSYgpH7KfUdcVWNzohGxiPyX4UFrr53dk6NcbDLvAmi8NzqiHdoyTDjf3oMR2eeUiQSswx7y",
  "key47": "uUf3tVni9akxYUYJJZqWe4gvW5vgCpQKCT3dJor9whyNAcu3irHyA78Zme7nj5s1aCnYGbA25M6CwwWqYcM571d",
  "key48": "7yfo1xDjqKbMKwPVwZxMC96mnfKLR1FrDDemSD2vRgMSmtqNAJfS8VqCfV2kPmZPZaY9uHnWk63zDYUyEpvfCzX"
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
