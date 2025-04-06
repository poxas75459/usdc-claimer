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
    "cPpZLnFBaRSWx9ApLnKaTVstyaqGFkaGuri35KEovhppicuD1BZDv1SvsXnSF4u5Qqkg9SHBLuLyPRujY3KxuQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGGtqwS9Qiv3zEFn438NfCxNMwbyFdyuyomk2ExiShw6uB58hRJKxoCjwdckAPq4mAHqswTqcC8iDjdydYBTFXK",
  "key1": "3ALjB9dpW23a8NUAQGUJ8yWf6iMoHVxsAu54FRZYtmh4YpGWNnAupsctqgmRKuMGWiLQ4re9GkZYG81dfJVkY2eo",
  "key2": "FVZgk6azKuDvAikEfHm2Jvr7kYG1hkA95YG8Zpt3cntQpHPGs8fFxRxUqHwhMw52KjznonfwDCsgSP9m24o15kV",
  "key3": "3SPuvwvZ6V3hgDCm2CPZFKdU3oHA86MxmaSfqUZU7wFcmgg68kncjxeWYKB8ie3pGfk96bog2iFPaWTLk3x2KBUM",
  "key4": "5rtKYyeoHuCEi4coy4rFa5rP28poowDahhWKtgomozvF7NsKbWN9LrUtb4NvdXHnHf9VUGbGkxgNh6G51ycV5SoY",
  "key5": "3RoBi36ixfNcooJx35Rb36sHUHEALzybBZY3ie48k3RBtfdbifi3yty3voKb6x44s76g36LPw1TavmUh1eWnqe5",
  "key6": "c6w2JHrpv5yfsAU8Kd2SN1cwXYKcb4hwbYSwb3fjpLtKRrMGo8swD4HwowwdNBcRGbxEGwPc46KiFBynYbdmwnd",
  "key7": "54tGXzGDSUDHxyigHYKiSFUMJNCnmwzZgrzN7A8GJBCgykRcBSNeLD5wGjaAgwuJAgHava7uYm3anSRGyZcyjqtV",
  "key8": "47wLqrF6wagLsmMjxenXoC8FWXak839K28x5T2H55Ru5znU6JKo5vkNTJR2Gy3xayheA2Hen1H1roLBoeeGYCaEi",
  "key9": "65ky5kFyB5AawPH34qpswiev5CpAaK2C5tW2V98Kaq88rzn2RrTfN27FVCFYP3ePHaTE5Xk4LfxJQY35A8CkiAT3",
  "key10": "4Gts5QGPJ6Ak4sSznBx8VFzF6kEGnQ6dbwnLT1PmGiupPoRGhS11A8gcvvHQmyGfDbXNTtBRLKJejHS79fJFBkvH",
  "key11": "4ZrEnAz2J64ceAkSALecFShpY6HEd7y3PsU6bngvEZyFcD3hMB2QokP3jDU3n1x5KXcCcxTfncLUwTW1D1gZRWfg",
  "key12": "yzELGykHQmwYmQ96jE5E3Dub1Q52Nbd5X5SyVQbkEb1zPJspa7r2U9EoqNxt45Fdkeq1fbXYLpLrgY1JKtwMhFk",
  "key13": "3Q3A7JXtGBVtqRdhSqpGxPRWPpifRHp1mMtTTxCQwg6HuTTd3DhNG2mxM14Hqrw4nHHmBtS6aYpdDfRUdj6sweMW",
  "key14": "4dr6HRhmbpX6iHHmKLVJpTYiBgDY4QPeEj9WCiuqY6iZUqErW5nodxjsxk4dbngTmWqWFPiAaCwZfB2nk5Huq8zB",
  "key15": "2tWvj6CJbd7s9DuUUCKaepc8rSRTgyeXTFvaZsLS2UtD1bA6aSqjNf4JKhcGEaBGz1WDkaQr1mA2PCyhvSMAqtnJ",
  "key16": "4shazQudzpUrc7xKZPxuq5BiycBFBWphPvUon8uDhz4gkyopBWU2R92VteCCeh87JG9WutzjiXH41kGZKfZ7i6Ea",
  "key17": "32QZdY6eGsNjraHeNoNZq421Ub74QHvmzxFKcXra4jMz4h9FRkV48yvNdZYmvyrMG4t2Mky8rnNbWkbTwmb6xgQ2",
  "key18": "5MeKKgjQtP7npNyJ7W2ZrH7bztwZ1hY5AiVZMu3Zz4bddmKYxzsCKDX3GQ4MLe4n3ths6r3pKWL2CCJEmvj2zK2i",
  "key19": "2LWZspht7X1MjihzEeUmhc37fGo7yaTM535LyKPQ6brXKEGmeJt4TVr35UJikZqjj3JJ7MahsLSw2J5cfMLUvDfm",
  "key20": "4cUnVjFL4LCGBoYiwa3tn2pfrMbXJ4qotbbaQaSxfsSEQwxn1vDnDHgKJ3DVfQtCbKHGu8nfuSndvKGNNqKSvDqh",
  "key21": "4ymXbEJc83apwzgL2aqCGvf4Dy8ARwEQcSmY7AcNiw5F4yR9xUHFwKTu3rHvoZmFKQcs4fZXRMjVB42tQpDFgW7i",
  "key22": "2vpDcLvFZrtFwX687KAWz1EdWj32g3Y1R4wgz3RZhq6QngwHCELaJEzuaDDmRsjF2CxGzBaEH5HUF54C9XeEh2ZS",
  "key23": "52Ffx6NE9k7MbQsPF8L2Tk3d46Vx1hrq49tmmSBDvCQhReu6wU1J3WFtoKPja2F7UYPAUwwiG3MizQ7dWD6YjwwH",
  "key24": "5HYPJoNHP7URHB7Cd8J4GTBQ6ZbFH61mGHDvoc2h44k2YsfEKHjyYh3LnX9X4viyAPnvbfEcThYK6VgZFJVWTFwL",
  "key25": "4Xb1ibrBaFZ5AsjnvgmXB8h48fVXF38GRa4nrBB416UxBaqr9FNiYGex7oF77gueQd82GUpgni7UQU4V3RLEZpWX"
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
