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
    "3TBQ2VsQq6Kj7RmnzGpd19SeWTYQgSsPeRWHYAaYdGtic7tWzSmxWSvZ4Gmgrj7qFkpua2LkQL2r2cQqcLSMvxzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbPBGRWyCmA2EpxSC1A2uzXv6HiQdp6FQNAfrh7LrEvz3wmXgABWQBYiVrMc8dmjAteTGoMN58XdpiSy7L52sHp",
  "key1": "5wCDspsQgwurr9hbJjGaGgEBngu4KCaAwRSpiyUYeSYkgN4dvNdk9H9Vpt1QDaeo7ez1BEKEPjBVf7SQtKSkfAM5",
  "key2": "4VdGt5tVKgH4DkG27qYyYYt45cKNSfWcrEM9KBGEQkZK2YAQu8QNrHd7rgQpZqSiQWo58sytf75gxXbY56dnTmXu",
  "key3": "25oQpPfRT1a9gwXh6jv5hzmi5DvcgtS22jrFiBNUZ7zNXZ22pbPAf6n8oSHkMbp2n5s7AfwkS87deRpJLEdE1b7Q",
  "key4": "412Zj8Xkk8zmz1udXLsfptXpdjHefD4XMEBCBUWfYGF89qTy75PdHdQsFcWt4EVs52Uv5y8DZKyprH9Ky2werUdS",
  "key5": "LQ4mAjL2Zsq3Tp9GSURsoAHn24qDrwhtLiqwjxyyx7r52nXszNnf9b3A28AXfMkD6JBUNmxvFni9x9AGQfWwTzN",
  "key6": "B369K3jKivEGsEntK72dM2kNe5zingx1CzBX5wYxU1e7H8Fecsq19HpVaN2RGJ6PFJo5J4UiExn4dKzSRZ1bbfh",
  "key7": "4QS9q2HcU2dMXbVqNUYkjpJPcbF7CtdJ499Ryhomq37g1e73GzNK29s4DLeMMd9wpmGm3rPnDUqGcxeTxHkRMfL",
  "key8": "5xdXCQGgiBDwWzwcX9ya8LMpogvCmaeSRMtrZNDKqUHGQLivsshXFznL7gmh2XFhJUQjsfjSAKWyAGFA418xJcR",
  "key9": "5SjSJ68DFbd5HDQKWF5yiHbFBgUukHddfFAX8cshzNs3UTjDVRPrzzoxWfY3VhFKotBNyWcJsr5DPD4BPaWUuAbT",
  "key10": "5TfQT6fz5E8hqFoNPeoVkK6bosPnWejgMArKvWM84zuwHinjsEFAWCPkzHDrq46tLJ8ekteTDjVSHkBugjLg1qjZ",
  "key11": "3WJMiUx2sNPUGDQN7UksfGe1EWCxHiBcopV34bsRMQJYUKbdwFSKz52YuCVSqEzdUi8GdcxvM2uMXAWwJZS4n7T9",
  "key12": "2bjRkAayb39KtGXwF1TQLUmBWM8phuGaasSyPyCPWtg9LBdHdXKprzq9cyZosyd9amABfXEHdSLxXGoznXMqmh7o",
  "key13": "5rdqPAYLLdQrQ7bnQnJWtHryqyU8v4wjP2PbX4No4CiRsE7eFDorULKnkU1v9UJbpJUMYohCrw2LXowedHMBMboC",
  "key14": "3DJDtToatt49fCrjcfXYBheJHxAdNSRWZm1gw6H8tc8tpbHEpSsg93g1GrcpGoD24BRoPBC6mDDdYtrNftNrMdV2",
  "key15": "67ZVdckzaUe4ci6mLFvWGoqjv8PWGghemPchPTa4WXix6TKnR3hVZAcojqAcTPTm7i5A58rtGtq3hi6JrTwtRTiB",
  "key16": "2U6S5tfWgk2jd7cuHCb9y58yRvSzYGQ165ogPP2Aq23VnE7BsuZoa4bQjPyQpyC2rFehUcWEof68VPX4CmRyD7mP",
  "key17": "2XquhCM9CSirbnGzecTAgVMChfnTZawQftSmhQ81gRxSRet5WmSLRve4qgCTnWpTTNnj1vE6quv9DHYSRX5JPxRq",
  "key18": "MMmpmRSCnfjYYqt96ugtD2arpwnW63Zt99sSxgvRxsNozjK1ssBpT9M2prgBjGE8s9PoQxRFW9hDigg49MMhrUQ",
  "key19": "463vxPXjMRAnZXCEUxvUMmxDmUBKbnYdFxPU3TBut2ZwbUDb5b2KoCG6fFFj6L44CeyHP22pqGybrA57zcP6vAXu",
  "key20": "4mCfLmM6ixA6GW6k6KdW1Qd7xU2MrBWAwJ7zHQ6EToFu6UoEp2nakCqQfHF6vgimFBxtUHsKm8gqSH1cqfqSdxFw",
  "key21": "57szSM6DHDc7ff9gVCE8c4DfVNJU4iEnc29Tp2EawZMKkJ8jo5BHycigPPQpx3F9Aqs6qnGFBnQTEuR9EtiLW1zp",
  "key22": "3oTF3L1mw4SQkz2w7w971DH5bRdBjmSrPwjrQv3UA6D1mskpdL5hvqKe8k7y6tY8HjzXzm6kzQULpjYiNE7bFz2K",
  "key23": "poU6cujQ1WZgKP1yAxDL5wSr8TWpqwRddccfjkYW9vXjAtcswdWTGxyEwqzLsoUgGeiKnMibs9GMwjFVwAmiekS",
  "key24": "5GQWNN2W3qtnrrUuU4zSbuoDYgcXY3KirAX2dcY1fi3CJMwhDDQZPDx5H9HFUPAiUKhcSEyxNEWP56sF793jPKUH",
  "key25": "5w9pEALyT3KrzcPuhsKXPQm1GpriFZgs2o9ceFSoAHhR3bMrdhNd1gVZxHJSB6GvBpXt7FwGyvfuMkRExtE2pwX3"
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
