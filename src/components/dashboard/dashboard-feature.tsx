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
    "3ZBwGo5YfUsbyt4QHb44TTVVge4XfMsm73M1G3fKPG12eCrhAgkezLL4ouZdgsmh661KwSSJz9YanmQkxMheBiKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gSvN5EYrRNj6XommWpYpT2jYWwJ5s8mwinzuKCuiUgzDTcnqHqcruxsY2JgvMeYxizJGHGKXmvSZ1z3NjgpwW3y",
  "key1": "52uWyn7NqHLdSgF9VmECxa2tToi9wfZcquh8B97sb16hPz28Y5fRmXLHei7BJ8UGDRAQkKuuQzSmXB2mvwD6EFnm",
  "key2": "4crup68WVs3c92Y39DRRCh5HMxRFxwqwC9inZkoB9KfRcn7gCgkT9EU9TUT32BiG7rt3xNBQmEQLWhrgHj2kAVc8",
  "key3": "282tidqAQGVGCyxtXTo4Jfv7VZoTfHM7ohW9j7D432Y8rn3tmmmwVcw9KTGk5Zso6hirtN5ZZpxvwEmPkvpJ8Zc6",
  "key4": "3sKGr4BfjsmzjLtEvw63iisHH528mkvqQ8uDbiaKd7rZtxf3U1dj7P2bKTJos9dfQhFS48UVXezamjm7fHGdbexa",
  "key5": "2UPHzWEmNGsXBPeTUbZxuDdVBFiyt2yZx9ZEER6QLDbFnyFV3eNbKM4XLDRgd4A3JvTsG6Q8CUdJtcFzsLvk1Eh8",
  "key6": "2qWaa3wkS4RD3oEANJ2E6psWb5Dz5MHPidsP1YWD7MYtYjvKDE1rDruX97VNhfQ69gavGP79d7t47nTcpzQ1oQXm",
  "key7": "2Hrf2jmrGa7Kr7kqF5tjz2jdp5srx9SNQQh1VZ8gTVQ1gmEVe4KFSqiZL1sbhdZiRpGzWh9rMTGiayLpkMaWPdXA",
  "key8": "4rEMcs8bJjs9GxcK293bHEAVeeNKDwncXRbxk5Pskpjp7ZujnKbAsjjf1p5DuoFUKETZNFh2Ujq9aezL8F4UzweR",
  "key9": "4UdQpn9Hu76mNdkYsmW5bpnLkmXsFkwNoxpZzwJ56drmDooenn4DnuPixgHSQ7g7xmHKrAXbRLtcVeqhSgEMg3PC",
  "key10": "4UbzXvYb4WaaBKG1sFkUjykK1yujAtsTQXhrJpjiFN9SeWFgqovAGFhiNaJm5RTpZSJhtkd7YNKFSKCqdvD3RDA1",
  "key11": "39YazFRLihkPc4WnEv4ApvQcbPcsRMWerUFTXyRNL9tfpRt2RmGcoxdfnnTd2QJLShGNPdL6gMHrpMdYU6PbZ3Cn",
  "key12": "5oTTiTDKzujaCyFCaR8JXkqprES924PTpezCgpHjJCVJZyARgdo97x47pqfgyRdRVoFqa6SE3tV4RPYzo348Qq5g",
  "key13": "37jr4tRAuU78GoXwHqLQhS4MhBJdBiz8mHwPtATzs9UFkbDE2csqGfh3rCghE8yk7y7f7gVvjKkcC6ySyRStFB2e",
  "key14": "5g2Vk728Zhiv58tU6c8osxPYAaDZayGFm16VjL4zuYgpLKd8jDNTKByhML1Bvue9x7JSwJeLE9Fr2o7dW3NvUasV",
  "key15": "5dBvYsefhwrtu2idvUNzeg3a2wmKoyPdWfFBRqBPsVoaqu96gFUCdaXXpQakmSQKRUB3ayE3nWS39t1GqSucjeMe",
  "key16": "2Ywo3UPmVRUqMHmPdzZvV47VFASz5A7sJQe3rtY6Ci2XDYyqcUiSiYANSAkmBFYADsUyDJTdLJYC5vJtsDYsJ6H2",
  "key17": "NZymQq9Boymutu7oVPymgFdfbYinxmamzdid1uSMuhCx1CVmKtH8FcMy3w1nB9TMSTSCnGJsdBMyHtmxvGJU2V6",
  "key18": "3mdPV3w17y8jsgSP4mXJffge3tNCHouJiedMuGTdowgRYvFrEy7fnZTas6Pd4FDf4QeKTVdPQX7BKZgodpb9AdFX",
  "key19": "44km2LNFVje2nrMcFd7Qdzuxe41Ec2pFihg8QoRMD793FPX4RSC3yKsF21cDzwzT6N5T89hh3SvgBXG368SWvnx2",
  "key20": "3TADD84GZvoxxkXwwKSMaJUzabLoPndV1sSWYQV58ncb5cA1dRmhJiURDhCLzJ2f9NfHfaPEobsa5XzAKZ3tWcAe",
  "key21": "43YfCg1jPME1u9Pn6AzhfHS8MjCzgB3f9rdsuZMgVKHz8qWcak3EkohTHVm3xd76wVZrroqs4ygw3QfkZdRAAHVc",
  "key22": "4ucxuo1CcSFhSMTp2WXoThKMTvPFtsU9L6vmkYfp2pLTbHhbaMdJxrtAUFXpFYxb3yNfd72ZByFZhFdsKqh59wJo",
  "key23": "5QAoy3YHAtkjxo3KnPRYAWjr7eEwujgPSUksdFbJdkQYYx9vrNPuE7dgkPMX121U2JKECNznySwjRUyt9w8F5kDH",
  "key24": "JujJrDewGERwL3SXskpZcAY7gN71aXk4uThYxG9vLDMN4sBjrKwCRsTZ9Yv6MJy5QdJnz1pAAjXcvvkAbbtBDTy",
  "key25": "4Nqi9BTPRtvb6ZUCt5uUwqSdoTQ2DPbkEbhgch5wLLUM5wxjmpd6tUEHg6kYuWBuSkoJThwBoDosAWXtCHejN1rH",
  "key26": "4AtuRHXru4fFqNJMg1QAvN8Sv21gv5cwpSYpcYro4ghqXHefu9NZtZefx1c8cdYdNzqn7UHCYMpqB5sRWzraiEv4",
  "key27": "4BpnMnDxBccPuMs9i3y61Jitm88GXyr4rdexHWk2gqF3YvxSDVQQ6dkq3MRw7y4KvHbVmJUP57DbYstvwL5qufb9",
  "key28": "2tpuQTVCiw67CamhpVBo9wUi2C6hmbc6bdGN9g5Sn4ytak4tqndoEPK3XCLtZfHPmkAKzgUMUBbfQa54YsYa22y8",
  "key29": "4jR8PS4HvPzeR8cytrLDxgpWTYMZ2gibtZ7iYkC2w3n1Pwm6X3inWUiJS3wantESsjRCBnGtRj7YFJ2cbLjGWKyc",
  "key30": "5EuUvHw4cp6M4jrduXeHjYbMBVqmmsC7xTqymMJDZTcAfmsQkak2LMa4CmAeCPJsCbmYQAE5oczAeiyk7v5kbPA3",
  "key31": "f6wxXqqm8Dko1DhBYnsqwSWK95cWhPHX8aWWY2mehwoZRkhEwFG6cqyZhi9WSkkQn6BvRtv6t46Bq9HLGQV1xGE",
  "key32": "3krzRWodoVQJBMjTk4TaEU9K912oKZ7sAQV9yLX1qUBPwmm3PdzDHibb3XMHscABjZ3YL8neducba25ZYaHgCHhX",
  "key33": "51FyezpbyNDrNJyZZurgbKRvFXMamyqwpva3WQr4Ay38dXUyRUdj1ibfVfTeTEJHQ5HZB8VckpUuM7QobAKRRz4G",
  "key34": "635HjuMWPpQAaj7WdyqGhNfocB2yqfQTpuLbVrxfk5DrEFkDs1g5Ca4ZvFBLT9EZ7UHSperccZknUgarsZPeJDiX",
  "key35": "2FZwrcGLAxrA4dFjrJi9CHW2wMGbqpF1U2N4Jedte7VPBpW5h61bSmixxw7P5dfA73UVfgkjgmqfoAJFXqwoKTiS",
  "key36": "59cTpBopGyxg4tqnxJV4m8jZmNSXQCSyRZt7uvwNw5Yap1S5KC96AJUwo5tSoxPqD3wKuMcwHtxmGr61CFcRN3Bm",
  "key37": "5CKEMYPbkp9DfTu4536sPRuvfTKnT9Eeezq9Uz2gA5XMXkEbXVrNBoEpzN2YNgasej6MF8QTur6ZYAzfLrym6U5k",
  "key38": "5ueFEoHDA15GzVXXodQrgycFwPFeZavWoRFYiY9fEHLX4jRM7MFaDPjiYBfHywAWwuhhsVioJkXKokG1ZkrmFMgG",
  "key39": "5kftoMN7DupPgRpFgPgPVbuq6npC4Uc6b4tbt3dr64UAQ9gm9aeEs2GNbBqhmeoV4vhX2qp91Hz4iR6S2beNUuKb",
  "key40": "3oWSojWZDfFYNsXTEDrdMHiSv6cjm8NM26gbzJC2BwzFTN1DYU9RfYtdxQh5aa1WfFiHxwBW26VAEYQ6epc3UNYY",
  "key41": "59xRia2rxGwWyE5rnoRz67JJnGjjgJpwTRbbuZTpS73qeyoJRtt6tH5hYJzt68SRZ2qpm9PStx2EG85EpkB8oLTt",
  "key42": "FMdq1LZ9b5N9a31wKVzfxb2eVCC4dNU8SAwx1gjXFebAmSjKfVxheMKZGifL5iEhryFmU4HFwCKcsUHZrLGLu8q",
  "key43": "2T2JpDoN7g9uhGD8uggBCcCcNDnQmGL9gRaZSSn4T5jmpnYqaVJGHCcJAS5v4rcY78shin14Vw931a9b7VqXAqam",
  "key44": "2EuVebDhrYiy3yiEpk1HKnxsxefqMPvFvuRQyDpSysWGsFxEo6L7SnDxzb6XvHnnANittLfwueN1ft5fFzod7G31",
  "key45": "JZQJDajGcVrzJLiMzNFcsyKzCSaxgS4dfhmHJYjG6ftW2HUvA6tWUSF62BSYom6oMAVAECLMcWdDNVYCuRZkn3J"
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
