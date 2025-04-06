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
    "4inGho6YtMzY7DbrYNkjUCWd76EVKZFijpRwUKmAN2aNj6ZQgR4aziRC21XyNCNtUSc5qXDXQ8J3GaucERGbCjkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkbVVYaGuMJbV2hJi71Uwg5qCyuGTkGoJymvWr7TpxiFpnnijRptDzscLJYsznAmtzMxj6fhkw1b6PVPkf7xdfC",
  "key1": "32VSDXjyxGLWVEboFhLWeb5GLMdLEWUaacMP7PciHy5mQRq926G479LgtqG6YXEXwRPKMHEirMUYPGaeyesduFQA",
  "key2": "3AY9wszuwcFrVTAanRvuURFy5TUHDuDBkwMuF94xaxZ1nVfG2NqpmTKd7eHvDegHjsNbvrm4Cqc566i2WFeJg3Hm",
  "key3": "3xY8j65CzyZaUtcT1UGAsWUjW25v8rVPVrf1vGECgoSEHQpF7VDr3BRVjbiba4Poc9rLGAksydXDbbkejTiu6Sas",
  "key4": "4ZobzoL1HGwE6R1aWUuLE2Gcx2sJmjtBDmPC3MnpsYYW2Pq6B2AwXnpmtRUcSygNhprR9LA2VuwCSd8Wm759rSBp",
  "key5": "672QE6HD6jagWSWcCggUJD8kZxHuHMDamwizV8t8bfLH2RkHLN75h9TzStB59Ziu1PepK4ikPU5Umt7SDUDv3X5C",
  "key6": "2L2e8QQ4yqRMf4be479QBD9iV3oVVm6fnqtL95vkfLpaP8WHNRHBosUje4CcrJpynaVCLLmVvrN1wGv6XjDmvgFk",
  "key7": "3KgauH2Mju5G2xHWCUxHjh6a9sKNKkVDS4jbe8ckUP7oB2KkCAHiFTZAXBGmpuzHXm47hAcqUDWaM7BYCTzVWCLe",
  "key8": "41Vc9sTTcGSVQNhfwQDL2TftCkB261ggT5p5TLb8AJGRpAz1oAvx4ypQoX6TSxYNjYCEddW88ohdbADTvXyvN7cP",
  "key9": "2H63fZbkZh7mwcNJQwptLMueLxt81cPuRWzCW4CERwvDE4BQABVcvZCqB9ty2PCcxp6ZHbCrAzQ3Bw8yL36AeTRX",
  "key10": "3Khrd4TNbNE8RFnjg91zQPEepX4yvG9pjtY3v26tvyAqQ4uXgrxR2bcb3qLjVJbP1E5dToxWQjtTdLaNvVyhVdHG",
  "key11": "1C4FZzPsr2tSjGiHg4fU2PRiaixC6Ep5vKVLZL8UFDdk5FhXK586P9e9HWZo8G7W9E6zqDy6iXkCA5a95VcVT2y",
  "key12": "2t77APBuPUkxVBt8tCFfdsa2SgU9bPPgUtjZ4M1KhEayhM23Hxa32JyREWFDSs3B4n4qm9gtt7Tyk4SgKUb6gesA",
  "key13": "NFniB9qQxrD39ZWaLyKT3iJRKSZjvpYj1sxzbPjYKNqaSxKWQScLomJXNV8sgTWY8aKCThzkJvyJWpcbQCbd7Ra",
  "key14": "4buWuqN1ZfjxrUW9aeHsm7zTRo4ekziB9NQifCfJdoT5NcX5QsPqrk5iyqpbGKpp88L4kquxEezUamEBRbrbXR2c",
  "key15": "5m5dQ2dMn4GwMKAoejAazVirgm4MnZgJYRLdnkcxeR7Sf3BcovwwQpJxCi2d6sZYzo1cz4KwwimBW5CaQaSxpBB3",
  "key16": "nuD7igGCSwvDgfnzkub4uJcsqPJtRR5xFFPhdxkHtSsYqA2Uby67d2aWixzry2NbZxbotwLov5EiMBkoK4pnw55",
  "key17": "4biiQp6X5GCTXX63qcbiwv3zjMbNi3JxDw7wS1UjmTeQdE263jtQQJLzP3UwNBUEckwJVYp1HZkUJo1rjg75QwxQ",
  "key18": "4y2AUNed85mzLrrg88gmSFvC39TBv8D2wrguGpLatuHUxsJCyfD7oRwNT1uW4bpcCKkB419bf5qjySUHp6QoEVkt",
  "key19": "4x4f5uXGCXbsHSahdq8y7sE29uizY1QozwLv478EZfUAotGExbkBLHh72bSFej6Epk6Wjn8kwE54VBAhrQASa51v",
  "key20": "3w8C9UswCTr3Ha6B35W9RAvoYA7NEgWyjbzVMMHTrq33AAfkuUQVE4TuUc3YCmUwajgJzTZrDiYvpaHvq1ri6oUR",
  "key21": "28xow42X4sH8YEjnALnSa9hGHHFeuB8bADxTsyEFwvGPTMNfgRPhoGAsM9SUGNNhyvK5Rn53pbE51HZYgqBnkW1U",
  "key22": "4xJxADYWgXCGKFoP1xzv4vTwKg58nv7kzR69tRKkZrvi6R1hS5NNyN6Qu4aVmgYmD8thKxV5Hkb4RKqd6EieAshK",
  "key23": "mckV2Aki5MNGrfNoMp56GSyxL8jvHpXKns6uGVzusB365VLgvgjNWpUfDyW3QNbXX4kKVodPXKHjpbYhpb3DAXJ",
  "key24": "21CuHkjXGfYamDJg9f1imNPxY7bkeiVtjQTeaASc485CPb8rV6peM1zaMCLE9SP9dJfaWMVCzad51DeVr16fPrB8",
  "key25": "TZRKkVQo9fH883atY19nQw6PtVcBkKgbgq1B8oG2rsVb5WPdqbwJdNyKQFedUYKCuC5nZ1ZKYkyt3iQmfBgJKHx",
  "key26": "3PDF6hZQezsjf6FZakGnCySA2rCNpxdJSVcJ9DLZNrLJoGxpQGeHgvnAmrMRAmb9obJ2JotMDSHsDctrPUuUJ5T5",
  "key27": "4e42QMJCwpFZPuz6txSFNYdMkaa2NFpwYNVd3vuRqzf3tusn7Drifdjbt1VzpfDT9BVtpetDzymHGvapVD7cXFH8",
  "key28": "EtEQEj43AGGKSamSYf4DsAcBH4Se49EcDwGBfDiovXsSgoK9TX6rwFFuU3fHQAZ8D2EYmobZGbvFYSLgZUYExgm",
  "key29": "d28XAsMrNdGqWRxf9WemzLx4Ma2cWa56nH154pnxq8SXM28sD3VVBoFTGHb1Xwic25ndhyaZ15esgmzwWBoutLi",
  "key30": "4qfEbQruQ95hJdxsX4frjDhdrsehe7NpnhBwUS71LLQRAxWy3QWEzTLWdYey177Pwxaic2erbCD782KsUa2QfRVn",
  "key31": "heHS9xUkHCAPszyE36de6q33c4GDbH6ExN6UPeoQEWdQG41bBo8wbmN8aimNFLervUskkkR18M6BudnVM7TpfBu",
  "key32": "yJ1egsKgYss2moWUyiTa8RevAHjsRC9eqcFcZsMMNUMdqNGyHfVN4x6KNtyCQ6Cty4JEtrxp4XomrNoGueG3ZX1",
  "key33": "4Gb715LtHSkRxhxRqZyzHd7UvEcWS1971z6T7Q7JkHQHv8P2mkpjmmjuvPy5krATSBuoYuuT6r7X66K6MP7PjDwX",
  "key34": "vBDVB3pj1UvVLrcuatTddD7PwPxYSXPnPNfPHKh78N4J7mpWKyWHe2mwGEXUX2GR51w6VMxMx3H1p7PWGWaKtJx",
  "key35": "esx7VcHdyMYKf5h7qLcHUKCFCntFvAfqYNDWwgTzgTdPF8EeXCckBXQ9XF4F9DGXHk8D1RjZYgwjixeVi2aMRFF",
  "key36": "2DoccTjZWSthEJeibMQHK4obtDdDGycjcpc1xAR91aZrdjXDcxukK4iVgiMZs27XnHjVojR2VNf32gghZTREvNRG"
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
