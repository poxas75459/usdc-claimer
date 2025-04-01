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
    "4ybcxUM7oWacYetAjDYWnhC5wD1kfpMYtLjjapvYtmyJsZayiB2twYv1zachynwZgR6ksT8XtZk5JVVtkseBBbye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L71frhFEYX88vBf6PZnetsnFEpW1MtRopGsSXxLiAD7rNUtAqHYznbvatNVqgtzUBSyMVkpCbrnAQTX4r1aNieN",
  "key1": "5CEmkndcAAV9mEaFXamisEBopd5qQoi4EfsbNGv7s7LfPAXgjkymebEAL2HM6GA4n7vzFU3eiyadQ8yNEb7DfsmN",
  "key2": "3ZNgzwrhMWvMaWFSCet8e4TGsBfgBXbqjURSprVYHsRHCvkcXttftYbEEDJ7Gk7mJmLcvvfPyZe6vVkBaXox3ieX",
  "key3": "3cbA8T2Ya59e5c3fTMvzgapY1QWzHAH1yzJarr38ZZM3SJauPWupZyoY7GTfv6BhmsTeK12PoU3sgL3HsZSx9Zof",
  "key4": "44GUmcAFnSUvYhLzkNAu9k5Cf7VNB7p1deh6cNvHcATRkDf1zM9TAVvM17L4XCkz2oUtbrH449E99Zd8YGU9DrW3",
  "key5": "2skDcpJQD2M6rkSkxBiNfg71doS2vuLKGdDK48o8vgGyyKu4vRG2tLKpPsJ7r4qTHPhUaBUXZeagAgU4Hic6bDiT",
  "key6": "4eM2e7K9czDYY7sPW4gnNbdt76imxZc4R9kx1VEoi3g2hsv6pHAC6vamsS5LkVUTZQY7ffZ2ouEGfEYoHC2eKwx",
  "key7": "5878oYBav4z4jC2svAp6DjBnoHosRBGSvcaDo8b7PySXHyfYt6vVcQQfqgQkY2ZT9ZtrG6r65kBe3CFxGXA6GoYY",
  "key8": "eQk3vktG2rsZqbw7CXCvbZ5vTcjUDXMgyMb5btusgrnjvM8d4jeUt7tSSb1Aq9QAvLtgDwY9Sv51hGSRe1FTt6x",
  "key9": "3X3WW1wRfi3UMcsRpntzQ6SdvaF6iYH9bxooK5oSitiQEUqbXufzGGB3pkNvoAVwWpX4pVLTfSB81Mkmvgd5NDKp",
  "key10": "3MDqSLRDyEdUjft6dBUtqK7WbggGJXhaKrxmXVpPdLqEWN8hEwYr9kQfqsMJsuQX6bxDXbhjAKK4haGEguJ2TVZE",
  "key11": "7unD7EiDLJy16UqRSjGFsL9ikPwcW9DfpnRmaX4MxVFaWUFtuEGo8kcshrT77SCA59xghYNdttLupLcJFpS2eCz",
  "key12": "KXgAFTZN7hWc7Qji1YyGfitPixxHSmuLMBaE6tn5mjEurjF57dVVvyRwY6CZG4G8dWhR7gouii5sLd7E9tnWYcY",
  "key13": "3FJ4S9z57sDrJnCpUcMyyp2MPxc8FppA6unCQrryDftijPHq66NFi7GV5Zd2fYoe36EAnaKhP4VjESg7ttLpyivY",
  "key14": "3QGAc2KG9bTq3zUTMB7u3nUB428ph4ueopPqsk3w5LSeG4h8FECYDaPvKXtgxUvTzZ5bH63eaFyrLWmaeLJv64uj",
  "key15": "2g1RpxqxCqHnbApGntrT63KwcVGjtsDvuWkbYvR9ESbaxeDjrByj34LkHgrdNAm8Nf125Z1hUjFLfx1uUQgtwQvd",
  "key16": "2gChwYdDhNHD97KJ4bYKivKrjzuL6ccxJLVdEMozeKdQmVqF2dxZ9Mh7yJoHY7esCACUgdVGmUzoPr1GmhvX1Lve",
  "key17": "2xSH9ZKdgD4RuWVojdi7tBMs1u5FaUxsSNuXaYbtbBeb8xXA8fADimmjH7JXXgqBcCjwrN7j5bkKdihw8HyqJkd4",
  "key18": "NagrSJhsReU6NRi2XxhMBZWGTXB2c28oQHwghv35DsJ59dcCxW7cqr133FiRjmmj4Q564E3oGvuEoH9odktwB2s",
  "key19": "466zzYjBc95AbdZ7H1tdDFCV1J5Xuib8RhH8YG1BRXmqb5pphdF8WKgzLvR4vDfZFMFoFVRiajLERkyzxYaAShfd",
  "key20": "3acVUSLPybYUK7S7MsAX2eBSj3rbcawey29RkVAV7fGKFpovWDqVvcEmBJUvm1PPdCpxNW22DtWuoqAqh9SVTZFN",
  "key21": "5PAV7jmDuEev8EwGsSDGzTtHE9qE1kK6UEZjcZAaNnwWxmM8252MwM3TPLTtnVGZJF3ZqNXUQX8nPgiiv9zwvY2Q",
  "key22": "2ccQBv4GRaurcj654r1c8Xv3EvWDCPnCc7YNbteBrZ8en7qBfuVyvGouvHs4SJzYiDvEC8LT6bZtxcXmLMC2KwWn",
  "key23": "3RFUa7KidpMW52MyN13efkoeiPcHkKjNopYEgYx7PametR9AwA2j3nTmLGSiwcJVnZKLLPoHqqEPaD3w12gafNX2",
  "key24": "3UzRUrHaj31o7c82LC1Vzohxgj51gcUcEDXvqSq6vdLiETC4T69mNK3DZ3s4FPV5LRAzGR3gQcoMsxmZ9Sq8xVTs",
  "key25": "3uz8TTQ6BZ3SV4tTgVdj6iWXyBcTyqbz44xxqTrrThkzFrT7kWmHh8jeWGQ47DeV3B3jLveAYLC64rUg4bnz98aj",
  "key26": "3eqexPCgqz4VcRRLVqcRHK24TWkLfhqCcXEXCFUwnZjNF1gMvrk7eW7u17P8p9a6N5wDiMrmZcWJMx8k1wBEHFTJ",
  "key27": "35f6hiL948tS5GXXQSsJ39gSRi5tYbeD1Ykdrbz5t3xtosgEDmXUChSSNUte1vMEpXXk2wWJ2mzwrPexjLZmEDDv",
  "key28": "4638i3F7DGBvjANQ7Ek2HmecToqKj9XHwRKpNbqF23fB4c5b3NzMudQsh7cN8vJDov2SiBhY671xaKLPnPtDQHTy",
  "key29": "35Tn3MkofHSAU9EGsud6XycggaEVQXdmngVUtRN9RRsMj5G8vnBWrEQ41ZYnxT3qozRjvu8ArEeG9yUGzjumo1F2",
  "key30": "5CZJotTRSNuh6HPuKxyqhx2s2vnnyzMpsNbssc4CcrfR5gKriMS7Hmne8NGockSGVdk4mg1VSeDsiYUvajKa3sTe",
  "key31": "RqfEPhrfCLmV9bqHPJCnhHv2yYHfMayEBzNQsgg21UR2NBYcSXfBGxjxqj6VeFy1SjFYN7cbUX9J7jefpwVxebV",
  "key32": "96JjUp6WDA95b93ZySsMgvnmJf1qYbj9ZPeCCtz1DvvUxGzCDVP6DDDaMYxXTfGwfDcahgLyAbqdCybB2cgRCbQ",
  "key33": "33UVkTME2onwhDqxEJCFYC7Vcjw17qCGujYQNurqDGPMKdCQvqYGqA9MwDQdh9bjUyLfFFnWaFY9U6R7LcvqtSLi",
  "key34": "DZcmxUXHZ3veHa5JfX5v62WB3uWvcdMRqsgZoQeKVMmjJvmHjHPVKG3FHJJi74ZE33D5MpgVNA4ns8c6DJCb2KK",
  "key35": "3ZAdZFTHWFUctnxwdHKtAmH1puUAQkbrpDxK2TyCfWECSR1JWMjPMDgcrWaSrazVEKtBQUxqgywXM1ZS9BYRPA4k",
  "key36": "5BPq47GVB2vPt1Rd9VL4FkTbkGLxawqjMu1h7YrYxq3PgVuyQXVKoXroWd1S2AdjCA6RbuxsWLtN9DExpwJ8ZSfY",
  "key37": "52ohz3qExJ99rmuSwjaD7NbPk91LmegCY4fvLCJtVcBXduoaJDEuBLvVJKFV1LwTTjEFyHp8gx9TjPSNVDzUgmwU",
  "key38": "3Dpys3TjU9zLQdji9gCudP5rWxui1ZWC2jskzWMpGo2fjr3P25q4SqMTN7jcKzSCvb1i2E1gZZPZQnRPEvxi5vhF",
  "key39": "2yW6p3dJ5pghkoyf4GpAYvoqQ9yKTYkz5kuXWrJT73gdkiAkndp7LuztL5jkNjR1xt6fLezkdenYVYnGUQZCaaDP",
  "key40": "2r5m9sTrGQ7e5bwyLjbW1mqebKuAEYEfVGnUqRB5ktjke3TccAh53WhKV1zpHPHA1iHEttDNKRHePUj5bAxdHcUK",
  "key41": "4sKbzcSayf68nUEvwAfZAe53nmttypk5Wp3ex7uYkWmBku9QEceRT7gUYtiH2JsFWcyVZbyXaRZn64JLoyoVNuMv",
  "key42": "5XfZzJgSQaMmieNMbhZ3Um4MBTbCGDB23KqXYUYSjB5PjM3auYjQbX5JaQq7TPZMBwV2szGrGbqBeGLnENiRJq2p"
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
