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
    "4XmyqURQEP9rWN33Wh4ANzi3omdQ2f7itr2FoRnRGbX1XLiaomjtpndaQTqrSqz7UtYBaRQDqHA3ECxL98VotPJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pd1R2ygETk9NPvHNWjxhgEv4QFJpcbrzLex2G621Eiw9ZwudtdYccECgbcg8ecTnLWA2U9BZi4whqnSu9km5F8x",
  "key1": "3LWyhBKkuEDoJhJgV7yQxmAqZ8FuuXaQXFY5VHkmdgEBHa2bEQ6DUid7NmpSCKUmAn1qfLGJtuPFjcSBYbmvNLFw",
  "key2": "5kt76sHk7sqxiWUP7Ksy2NeTXoSbRo5iGtZjeyxdE5JBe3eGH7FW1Y1u6nCwu1Su5b4a8Wd6Brycq6uLL1fZb1qR",
  "key3": "65co7ogBHNcLTtPyQkMBPiF268hqhmbpPXCLdYx3FaaJeXSXrbCqAt2CupdUwjtVxbnj3G7EG8oa2ypKHMmdXgvQ",
  "key4": "2JQY2erDp8so7dMmZzrgTQaJFGHQ83f7MAaRUVVd4xpgwTR8KLz8Z3pQTdn4495rT2T2B5xLakK49uecMcpN3CZH",
  "key5": "4AzcXdDwLp2epg5tspRhxJR9vVuj41yG5T8N5Lr5cbBJaunGM9WNSmag36n7coHZwHYqMgRR1YPVn25fR1gFKuF9",
  "key6": "2SZLchfcqCJ9t1TocaXtVYNC2Di1GJEWFrKbSqFfDWmhCDjjUcYAkiYzKS3PP58QXMd4Sm9aAoAV5Cs2Mtkr3Qgc",
  "key7": "4VdP3WwgzexPnjpkfgDqXyZAegrsbXnmRfeGSsGuevad4fi7BzcVeMKRR5cMbSzJCjqXTmWdzoiaDNPkBABx2JAJ",
  "key8": "235gNnDeRuHZLui4aiLiK9bTUycheugahEkybkuWrCJW2LThB6sx7mZEJn9xAMhPfvQy29yfe1fmduCEudK6CaPL",
  "key9": "4jJfTRrbsFgnGGTMJKTgxTwTSPmE6iYZwLuVRDThUfjmMMn7YsNcA55sWwEforHatpn3SX91dgj7z3hww8FgVE1X",
  "key10": "3JDxN34MMt3VjgE4rWPhH1zYaBJWMhvJTiPwzGimHoqTAb3RuYahbYRFC17Cs8TeBcihw6eg8952v7Mnhg99Qv5F",
  "key11": "4yE7VdPn9koMK7AzLwkQ69gb77hZXaQZPKiehss73LQBqi6XMbE6ra5cUJj4BT6vLo114qS2CavYZNBzeD2VG1DJ",
  "key12": "2p7J8eHUj126sc6w4rBumVwoBqksQCHbfZSimUJJTaedPo1JQyJc8GcEQ3z4cdQUgAtedwSj6agodMQL2hSRYZoX",
  "key13": "2bxhtrYxxhp6kMcFoucpk1Adpj1CvtAptYLXL8FctGLmwCBNYSgUCjJqWm7NHKA5ri4a84GxpaYZ6CKomnV71NLp",
  "key14": "3HhXQCFHWhvUyUR9ZFQ9uzqo5Mck5Usv3E7g1JGEGJfAiD9GKS4pqs4ig9Nbwft9Fxv9PT548Jvn4hsWg3djirm1",
  "key15": "4A2zL4gKitPgzCLbtMUAh9YEMEb1cqeT1uZc6Fer2XbZnNX2Hn38xFruDPayryt1tnfPRZCMHvqwNYagXGNyefj4",
  "key16": "3K6z1CkCVdsxWLZSQZ1x4NzXxEdFMJmfhQKiqJqmwtpN7ADe8zMAu8aE89WzYRx6Jxj89j3nBG8C7skTh8n8SNsV",
  "key17": "23MBXtiRorqZscyw7LscW2GAYHCaRZhYF9DBK2peYtJDSNUV4wWbwPzH6UZjpePBtP5BLcMAnuNjsC2wSHZs1BA5",
  "key18": "3tNBs9JBMGtK7iKUh2PKQCRujDuA9DX2ivfxx4Rts4gTSM1UeFTfs6T9syQZr4jd4XemQosaig8jFPFTeSnGEboe",
  "key19": "2zgvYiDzWH6Y8cLSpMLCgL9XXL3EGZcqv4dHe32TbkjdMtviJ7j5SH5JPWBU35tPCfhfZCmmppKHCWd52PpBWoA4",
  "key20": "2RDD6pqDa5frdNHWmdum46ecPWj6rMEG9GWcosdiTcLehDrZ9w9x98DjrfTR6M95hP6xv344gfyHTEMaEEkuQBbF",
  "key21": "2eh5cgfBLC1JNgsbg4WB47vG6hptsXsVRovLZazAAsZ9fPte4f9d4KLeQv3gGvfSrRR249qCS6Dos2o6JBCes6ed",
  "key22": "2ezbo8xmv21Yh7MaPTzRJTWL9A7u2N37rZTWDYCU7ird2xyop9hgmo7J2sF1BX7ugY6SC9iBc5Ku192ZH1pEiD5W",
  "key23": "dgWTQsSYJcAftFe4K4Wsggxrg83Wo2wrBAbud2cneKVKizBEyxiVsh7QU8YC9YnMyiv77B4KgwWkMDRYtpu28qa",
  "key24": "XnJ8nR1hSz7j46QoViiouMVPzX9MPndKgH7vpSvbu85J5GX5zYM6vo22E3adKpUXnhuUhCKrHh47TX1fz27Spbe"
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
