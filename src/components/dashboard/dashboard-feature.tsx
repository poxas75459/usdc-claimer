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
    "2inD7cH8BBjJu3jKCgL14V4dNhPtydruQCCS8cDUdBtEwxvT4SuoFg254gdecYniHpzhqEKZY8daNVXPcbEqDWwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQ6tH7Sk2zJPBk7MqnJ16aNi4srhiGSGypWNTLKL97T66ctwvMuRRgPYg8fvLyK7NLVdpETMsGfEiQaaWDy9RGD",
  "key1": "3VQeyokxtpPxLeTtiA3d7u1obYZ28LJdvrNzyKdK3FAB2KhDhM78G9JxSdCVLb8EHz2i8M4zCuE1dWWxLbe2wFku",
  "key2": "3j5oALFgAdtMMRQRcTUgSZQwNVfjbWJ9yxfQpLKmBZh8UvvN3S4Fn4XRemPvkJ1Jj9rnaSZeBbdXu6X8xeSZ2r7r",
  "key3": "26SK8shUSgWQWwXoU53vGNB2GPFPUaBG1oA3y5NgDf3XcRSDLQqJg53WfVog1y4ZdrpUaAJTdhyB1oKowE8VFiXn",
  "key4": "2rWbLYrbFN1YeG8xaWFx7z2XKoRzZDqHFJqsyo2fiyjA7Swi2TL3gAettn8RmdQhNrPyZceBBeq7ow4oasJEmXy1",
  "key5": "4SuGBkKjWaiVmuMMw8BmxHrdfPG1eSssiGvxP963YeNvhFNTHfMuw2JhWi8tCaPoB8j5RR85LBzx9jGXSAbTH77o",
  "key6": "5d68Mm3GEzqUfcvZJubBavoejHKL84EKHFMPnbiLRsG9wvi5oSseUt2nFFbotB2nuaAUwCFhJwzNcyDoxwkdTKj",
  "key7": "4u47Wipboiod1w15aB6ou6oCPXT6EjnbPgVGTBbSFQb6LfLAFr1NPM4L2wo8CZv3hmU6Z1xKZnt7kPMQQUeKX7N7",
  "key8": "5sYaZuKMuTbW6WK6e4rKDTxSkZjt6wnGid6pJimFYBKFRDXR7KkJ8sHyZrC7wMts1FR6tvkCxjySyDvH4H9j4Kw4",
  "key9": "3vnbGgDJsXzEnY77Sp8UN4qM5B7Z9m16G5UFtTx246FgXC7ifQYgV2Es36xuwKfrKdDt7fZECKdY8sJ6u7zpBNHK",
  "key10": "3i9X1tfLbwczVcjATBJS8ttCUazZcXK5DoSbbVWMXDca35TSRCqw31PsX3hSDDmLvKqkDZfGt5fKzsb1cPApLrmd",
  "key11": "2iF1u37dQ31difs15v1S3B78jBDjHbaSkAFCCTVS81nUQk2a7iGCt8RvGt183cr7keyeQXmZ5pfUxd8mcwua2FGG",
  "key12": "2emM7sLEyqEz9YZMizc1p3MkWSU1uXu7jCBGAcYJekXHY9xeq8v8B2d51etnkwznZ9sBWjcDGToMW32j8gsS7rtq",
  "key13": "uP162vNQWRUV1SSiLF3qZHGHyr9M9PhMe5brvPtwuMcyhXdjdNwzf1MFVJ6FnBCuwwUS33zu1WPukomWtUEAXY5",
  "key14": "5oz1SiU61seTXG1FrgTkXdq1J23YjC9ZNNVt9J26DdjL2yfFBnbdTZDocfR5CqzXeKirQBSRbQMif9RQPMUwDqkT",
  "key15": "3f7XdE2VAP1zvboJE2h29pZ6K86raeHGbPoWJtq3RAiJRVHMLv2mXAa8f5ZYqwDABMKQpDoCoumQz3zYSsfvYXUA",
  "key16": "4Ji1G9LBykZumkmccZFkMAxg8PTvjp7P5KCFL7Zw9r7E9WevqikFdNZWtFzCe3MA3sypJLUURrnssv5TT5fUa8Nf",
  "key17": "457eGzDjzVDKzohFVW5B4JNojGyt4sQP5WQtb6XXtMBBaR15izDUUMg17Ee5DoPiKdmRJ6H1fRpnrjCn511GPf49",
  "key18": "2yoERCLJd3v33xbhFRKyjq1JCw7xK4Mt7LEeU8CY6MrSmCJkmxSTUD8W15AnnPdrmrpeTHUbP5MNkFuubFeo2Yr4",
  "key19": "4oq5yWcmwUvNDJWemCC61u7p2xtq2Cp7BrCJ38Y17jvL6CFEs5QpEDwGCydFHoeyTYtF6LNRnhdcnWnK3iiVEfV8",
  "key20": "HcHPU7gJ1mrcPGP3y4NAZhLMSmd2z4Fb7S6uBdMCRzHHskJCbxy3iL2BDvgiqgu4RDF49mxtmYFwnpDDt1Dw8AG",
  "key21": "2hbh38AT9P5KSDU68jBBouiXa7H8KSG7ut23vWWb24tdR36Lrz4XYKi6TH2wkvLdS8atCZeYmANwuXN6AZpBe2Zh",
  "key22": "63FpxUHgm9Da2sZ4qLkGbhMnBWsHjcw5ZmY8Mhcm2usUbBCLW2gH8dCfF2hRLz912eR9ARXdDdkPQhESWs8sjJab",
  "key23": "n9eie2secpb8SeDByqoGccbQQtm9MURCqtse3D4nPQWznRaoSXq2jqdPxHgFrJ5oSGkrNMGWbYQM9XNcxiDyc8U",
  "key24": "4Qpk4UBSaAnpahNQJkmQXBtHDxFTvSudou6bKW3eQjPx634b3vpuNbhWhbf1dxDExSSi1kFiYCcHnsUhdsGsWKrj",
  "key25": "2LErjrZu396fwqTQ9x5FX1UFJGfyKkp6UtbCQ2w2oCGgSE6T5HuaA2vZ2LEihTCvcn8g7C25hjPJGg7LhfEHta5b",
  "key26": "3KiLJPapuFjBkLWnvVcQZNkdw4wNu14Gjgm4RJBSqfYZmRx5nfb9ktfGuo667VYxjtyPYUBxgeDQnzFkypQw23nW",
  "key27": "3pKNheraej4BNY6XYAGry3CVjLLcSEkNqGYGevYTtm25Bxa6wrXLd921fZt37VuxA6eLQ6GpjfKde5eS58FSRGYY",
  "key28": "4ZyS218M4cS3KJoDN4mVtjTXmb8tiuHwKGt6QRLirEXQ5ePjibd3Uv3GcezqvHhiHN5GJA2cQYCkyCGcPg64gsqo",
  "key29": "2Ld4keb3pZmiRKBPPDcNTnUQy6Z5m3SJM8Mb5vNEVw7JLrJ8FhXdz3SFGjipFEqzFRq5xWgcLvtYmwFNx2Zuz1R9",
  "key30": "2Awr67Tn2WniaXQXhSPbQGUccpshMG4EdzEt9mWoMLfTtu42EpxwDVtWsQFWx6oe79MGMp4hN4mTXFWnjt9tnF8U",
  "key31": "E9qajV2zswfd7xZwYitNv2T1pmbWu7awsYGjuJK94DfDBzrRFgJPsMnLcWxtJDeCGfrhd5GsKU3pPk8Vi2c8pjK",
  "key32": "3PCkqBBR38wGsdE69vNkS6gwpgeHwxdz14Mu6zfRD2rfJyrm8T8TpYXNN2kBEhXvkTP8DC1HAzFdQrHJgHGeMEDS",
  "key33": "3gfaPt7yR8XbKwiNqthAmpJVLEKEqXxAgEkbB6yNmmrKXJhDc9Av8PRwzFhZGWjfrnHmG7UU4ZNyRL2PUhBC4uJ",
  "key34": "5RCcwsqb6BdKVD3vpFGHv234XiPgutfo3h65se5zhE3gXk1wurNiLJGsUZsmxfSWLDWuBx6KGisY5g7ij8ZM7Xe6",
  "key35": "3NWGaqA7YshLaQQracXZ5HjaEvtg9sJRiMHCpenbXCX8xNAaWiw31hWLsntL1WtzNrTVk3PHYFpvG7LYkYBqYMRg",
  "key36": "23aHkwuoiHGFtAgPfN8a7ub7ET8ZtnkqqV8nT1UCQkvte7kjq5uC4a1JAc5ALQaU1PEgDaGPLaGScHsiHHVSYyU4",
  "key37": "3twb2jZoBur9ryKDXB7icXpJCcdgZDmgQXXwtA2K9HMb8XycWXUdEFV3RpFjMju4zkCUFKW5FKYkevz6tEPDqgsK",
  "key38": "8a2hyshof82FwqNz2eL4BBZpcWZ7mtYAR1c4kALg6gtHn5FK5KysX5HsuBYN8sf9zmuFxsyJjxmgGXEpdgd82Ba",
  "key39": "36bQ1dx3yzoex6236tWffJmQ9tRqm5Ffg9nXuaQAgK5ryhTJFFMGrxQBUDM4L8wXQ899JPT6j5FYF4a2w8MrYnzu",
  "key40": "TANgp9jNMSCU7LDpgjrc2xiMcdjhDa33pH1C3bW3AGYew7GWzCXjvs2KJirbHG473TzZQ4z1ZejYmhKsvxju5kF",
  "key41": "31DLFx5F7E2c6pHHB49jCezjYchdgUDEhKar5kJkJ8P95MJoY5UTu9qyzhJviHND8cNgsoNaki6FiyvCjwCdnuHM",
  "key42": "2ZrxkMJPQd8HBHHxNajpYKZcghUknhUB1jctkHLWoQeTGaJUgj5rxBWXJ2UoNwRxyF1ZAb2UMUugo2dTZ9ZNYUtS",
  "key43": "5axZ1aHC1TWV8FDTExuFoNG5YWzVEwDdWeFfCcBaGVbe9Mh4j4zpYbuyfpVJX1iNK9y92qUmVsCT659eLvC7xoQK",
  "key44": "3qrhvGsDF6CMXUnxWa1F5SPwSRND8XXbVyCPPsvFMEqqtAQv45MatsNXkvpQhoksnDfSeyzFZdtbkKynZMycqa7t"
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
