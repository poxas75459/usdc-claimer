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
    "3toTKBCxGaATZMgvxF8pKCb6N1PpFJxyRxXXrCCjGEYejFrzswrosqkTj6nXcMGvpMxN91yNPxgcso336gWBA8mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5es1PxfF1UxBbSUWndWvFxpt3P2zNzx9FsVACioYafXNnDnonC2VZJ87kBBXZNky8NUFpmS5eSNBfPDJtuCgfN9N",
  "key1": "64WbW8M1T4btUeKs33Wj5kEgdN3s9sCoLZzvLBrpvEbCeaGq48kXH5eZSPv5R1P4QTANVMWuQPHTSjuMDwbYCcad",
  "key2": "43QhgQ6sZhBWdb25t29C2DKaCxgfQ5Q43432piEgCkKwaNkVsVo38FxKAb1pVi9L6LRreQwZ7GkYSrhFDJ5ihWmR",
  "key3": "3rfW21VS8JP8dNE28yKbooebxNdqxirBCp4hWiqv52Mg5PtwP8zpJAPaB1HMrC831pFdPKv36kwwMMRC8rQGHLp4",
  "key4": "2MgdEFWx7x5ajcMLSnKySFCi77FjFL7CDXDGG8W8du65pwuxrC1c4v76v66gvYXkqFzRXt7hMdP3jPfvZFk3uhK2",
  "key5": "32BnPyYYJqSW6cbbHS2Ls8u8RR8nZTUNkB9bjVBKJTzRE7hVUUw2Z1tw7zqaj2wXWQbXuQBh2ib1A9MFPLmMXUp8",
  "key6": "4dhi4rCrzdNdE9TJGLeQViYudaAS2xehtVZn6SJG3zHheyypEL9Ya1hsTYyFeKSBHv2kJwrgy8DK9ZJ8o7MvzUpA",
  "key7": "4iTqPzKjEPLV7b15JGujouPwbc85QdY2LpYNLBqwsEdc8Xjus9V6QiXjrRNbHMSAiXssVHzbwaNMpyLGMdzRzEiC",
  "key8": "5YARF8WashfFc7a1Yxc4DDjhAWcFicJ4ptZn8u9ZPmCxrfvq1hYo5HmJiA1hoWpvJtmXeUHPUoSjiJhw1WFSSfGt",
  "key9": "21mNBn25ZYe8WRHbyps6utDz5f5WrnMMaBaXL6BGD57FCoqcWFA4w9TnTVroG3ysiAVTKPzQ2UUjcWS35fKdxjBR",
  "key10": "2KHL4zJE59hjVx2ZreYt1SVN6WN4yk3LD8VCCgrF3tKKqM6Nmkt6Ga3DGGoYiYhDJtb5MBYxyySo9nUdwE86yL9J",
  "key11": "3YWcbqc6xdNG1qguUWSdhJVwJoSXjnfFb6pxDuTN2g8mqhscmfqG2uTp5p6iP8p45UEGGcRwkwVCnJ4JbuJEp4RA",
  "key12": "628zgKdM73f6H5TLWVnrxbNWMy5r1YtxrjzCoi8c2fqDBHAcyoDDuwwkJyQ9VY33hDyBsNARCBDvGn1GezSqdVCT",
  "key13": "3MmUTgkDVadajT8gHQ1YFPu36ZjVMkuvp3EAxxPANafeDozLhga4TtLa4Eu3418YP8qSADMEzDbxxzwATCB5QRZA",
  "key14": "5XquLF6DToRbxfB9cDKw2WJXiDDD5oHQExKkEcJVjrXeygxiU95z8sRAZY9US8RvYrWsNrN5dQNnnk6obHXWJtaA",
  "key15": "scL2c3mf2EnFE9R3NkTuwMAPKBXfDRuef1AYEgm3WWdMtdg36G3YG3asvpQ6pSXnFoE6V4BH6yxhroBe8nJSXHL",
  "key16": "4T9NGZxmhposTWfpubpgGBw2y17wDYACms2bi5GCcxRLqo2rr5HdwY1WaDvWbShvDwtMS7PpMkzDMvNRYaW4WwXo",
  "key17": "2YsXYnywppL1Sxer4wVC9fnCvbQFy7KB4VMqPBYGrqQG786Rgq6moR13fJk27zFbkiiP6QjZVJYjAjRn3viv7Bk1",
  "key18": "22KHv6JxkVgHPF2t7rpTCqeCWcrKRSE8YwE25WZpwKzD6LjEaS92AxYKCMW6bBRUbNzQkCRuHbqNe63Q8PrGEQTj",
  "key19": "5u2XsuQAiawx2dto3BeBaLZgKaRjeTypq5AgBj5nQq49x5qYphThaaPjoxfQjMLK6zyPYG83K6DCmR4bR7jfongE",
  "key20": "3aLqkdSinU6oq7bqP3zjgiTES3rMHsQTLbTuDo9EFJ5tLn6Bg3fDbG6vvS95nmbe1CzYLfnV2wR7niaUPetySHWV",
  "key21": "2E1D1mL6YS8LDQ7rVGgmSfVxXQFXNe9AmNV1G6UfN8J6ubtzz9RQGZhoYc4kXShbQZE5GsuHLwrHCTWQ7QLW2LTS",
  "key22": "4DqFk8NRje9JUcJrqzAR4VoPM6ajzygXAqHMLGyyGL96DHu4XBc8Y7XKfLULDS4u1yDtiakZRnR3A6kPDTLUF2aT",
  "key23": "5YFJX9jUs6gCeuw2quYZVQVqNFvJGRQMTfbQQNxz4QUxpqWWVSefQ1mW7nryckbjer7peePjwfCNVFNn85ecKu8p",
  "key24": "jAnaFJGdBsJAe4vk4HWkBKUgzfUPJQRqWTJFdPrQ7VPUA1weaFkxodhLKDUJUSY8QnFPaFS1jNHr9jhLro5B6Vs",
  "key25": "3pBqBqpWxLcWY3sGjq8VTpYb1N5ABqPEA5QAXnMw21cky2pS5LtFLzATQQq7KCibZUsjqPqsi6YG82ob5vJPNDrv",
  "key26": "2y6qMseHSmd5Kfhn6aJcC2xHqPutcwEASTyr5DZuTt48CQgjgK4BkWd2bLiSv3GLZb8JezvfZxymaDMAe1ivxY1M",
  "key27": "MsdNV8x33tpszZhLfenLZ6JvJ3Qvxt8i5D3tEBRJa8ZZArtwPP8Zz4dZXayAy3oUs1n7HrKpjCzUdjY49WYvBef",
  "key28": "5BSu6rSuzAWJCtnNBbGtFJnThmpajSjj5VfzZp9ecb7FRSb5rzrje5RYSeomeoVCVGbRCPaAEdEcbEtuN8m9hVNB",
  "key29": "2bGET61dbzpBH1Y86cmys1UTmxYZfef4HLkM4NvSj2dJSqCfhkgu5Xq2wibYJnPnZVie4TxZXrAF7KxTe4Mr6gMs",
  "key30": "4Ri2jiW66HRFWSYdbYEdVQVMnP4JnuKNeC2RPs7XSwPbEo1P8kZ9Zy4o6gxkgvBWrGQzhUdckpjAyjk7txvJdh6U",
  "key31": "CzJbs7RjiEC9e8HRswdQhFrZsuMvhm4v1KdvnD2SfshnHu2E1XgYgTuZoViFcVbHYWLBUgepiWh9CkniehPVaKm"
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
