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
    "5r6N8qiKBxvZZvGCH2aCCmTSwz6sAZ5EgguCkhhpGTihNBueRWH3MYdMSuPuuK5G3vZbLRT14YzpiBbfR7cNtLQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gtTPdQ1r8zwYZQSMuMzLnaDnFf5xXCj8oZow7VKjsZFRQmXZW2444QQcqSe6aw55zxXtou3stfTFF8etF6V9uzM",
  "key1": "2fYer4DA2YPDv2xVb7B8rXf9vMgUAhDTrWzQe1nmFrmE8FNaaj7Z2PpzF7Yp2X8GkLEn72AdQp38C3EE9NwW7Y5W",
  "key2": "zdD8z3kkdpz3hRn4nDtjWponv2YnrcFBfWZAnGCb7zHhKxZyhfM4owEokq5E1ew4GLffsXFjmeJ8J2BpRg37tyi",
  "key3": "3u7U9Sp571YtVjrixBtT5gmue9gCKmiknXMQCKQRTYDvYNPkejqivH8Duh7MpsZKqW4XwdxUnoqfGXFehpKdRFFL",
  "key4": "NDSCSyvt69GZs5Jsg8hu9nXCEMTpSfysiGKAugtYvDLoQAXYavR35P1NnWDjhMfQijXuRVH9q7LvVtuE5x2qC1B",
  "key5": "1BcVKQx4oJdqU2oHpgxdNSaC8am9xugPjf43nwRBFhvpxVPDkdoifXdov76WyVaf1N74vqQoG1MJW38wWgjXvFR",
  "key6": "3bcdyU6FfaZJPQLmvoUbfUpDADWNn7S1vf9h542iADijFN1dMaoDKRpSUjpQMdoMUrQTE7VS3Ls8tAJTabz4R7L8",
  "key7": "5KdhHUv9ARnAKJB7qhfdCp7CzJXtF4qbEJCxvQTQ4Yf7SycdR9Wm6HyBYYutisVRxQVRa6DvHD9UwgfXUhUrgajj",
  "key8": "3YQUjYvUzapbLdgx7HogXNRAzrNZCjUvdwR8JmRJno9An96sCWuvzsw6U4sMb2y8QKEtzMJsohC9KuFioGAhgTa2",
  "key9": "LKTQxZadUUD7pje1PiffofAoM2kG8tUj67ghqFosYhZPQnZc5mGEj1PKThqE6mPaPzyg9xyp7m4ozWh1GKETq3A",
  "key10": "3VyYUWcHqouDonYuZ6Fqw7pj68bb9xTcCQX2iKpS7QmmVwWeANjyz5tD7bSX8nDe6L2JEcf9LaQP3PmGkipPDHkX",
  "key11": "5fLpcM425kdpPtaYmmv4CgosPzmhU9xp1jt6xgLhFfoWvK6qCeBZkteitwUoHzaKFSMPoDaWZjKT1mnPDXgnxEtN",
  "key12": "4vGfLAS6MeAsvjLV2PyqJxeE92YrNhS5hZoNoj6NT1noRSWwhnvETTNsmwv3USHkeFHVPhaibYkP6Fw3mepf6xJ9",
  "key13": "62PBMNvYXCGUHqPqP4H8aAfRuXd7JfvehSEAt6ufKiC9kCsWonhhSG4nMdF2VN2TJzCGoQz1gLo2gYadQKRZ1Mm8",
  "key14": "3PPwFLyfqazVH9e8bsCW2iGakpLmUX6kP3gtzmfk6RrVmhjjqpBkTKFRWiZVjc3n5eX6xZvyXCN4xNZBM6fpmarq",
  "key15": "4RX76JdJXi8hzX8WUdaNd2YiNnX6G2YDTXC6mTCWFLPtimVZvx2wNn1P4t1jJRq6hoZE6prAUW5J5BHPTdXswBGF",
  "key16": "4L68ZDtgnXDGd77RpuKqPpQKBqqW27oqNVTVLvHYgKtD7FNGaP6ibazZFiSPzQLPR8r3UAdC54KA67dhiJGsyUyb",
  "key17": "3RhSTG8F71adPqUB9gNT65n8G9dMDyhfZeqzb5oECr27fYQKGiykRiR8ZLyuGft2RiDuBGrdzyePS2wu3mJpLde1",
  "key18": "5SKCKJKtRBEjJuUtRmhfxB3EkD8zomWNA24JPzcQVv34NBnuifDEpxaETKW2x8crFyCzUbJatVt9fjf7GeFQP5PK",
  "key19": "57sNfBjCTQPXNfj7cbryou5qb8USmMTxxXr3SxTBkiYqw3EuUWP1XUeBMibNUUiyBUdBJeENsBeRbaUK6zc6P8NS",
  "key20": "3ZSc5V2S8wRJBrTgh8Doopd2jixzGuCVUznuEdC54cgj1XAvbzZJonyLdeMRy7nh2KPAvo59NNTTRBVz9s9bSwdJ",
  "key21": "ZCfzm1KnA4UczJx9bfcsoWpmAwAQ1tvDdcQmf2uV5SJoJH2KZg89fhm2xo8o5GFNRZsMDPxtEDx9vPjNzeri1sX",
  "key22": "6JRfUfifqjqFkQjqUVu6ZqLCtGfMw5sFHxEjVAbTfmBWBopfpBn8kjVc7rf2ARnbhYBhuGgYwwYaXbhLyTMHxAw",
  "key23": "MR9Ywu8CgUALDFEKsAvWFJzp6XXDUyAKeo1bF7EwKj9V7QFePKaHvxrPvU28FM5rKanVhQP1DgNe9wS6DLtUvQf",
  "key24": "5nMa9DZhJ3TuvetdoRv8XUrkoWhJoPFAyB2snFBvZQsK27fDAUQFjkfGxJ1eoe1JSofk68KU2T6wW32ruCEhm9BZ",
  "key25": "5vFdEwzje44snHnM6LZMWLc69UibxNyiPTCL2oN49d44Mjg2KFeg4z5ZVW665htkQVfT1BPVx4VXoaE8kGMwLY3g",
  "key26": "5VwsXeSYqYq9jC4mjEb78k4yV9arrUtqDeerWCccPvaK8ZDNn4D84Qdeytr5v72wnRgNNvkAA69Gbc9BTs8Pepqt",
  "key27": "4PziYhaYKusP11Meh4CxKuNXdFcJtyQUpaQtSRwSfAZ8WPxqByQ5ffUMiRhp9T252WMLtkhqzVVtaTZydmTC1fsA",
  "key28": "JKvjxK549BZrZUG4NUmQGY8CpDksx4RC3c27k6E7gC8GnHaC7HBawYpK4dxfkZ9nZFTszUbmaCCUKTbNXQe4pn8",
  "key29": "59m9VugrnZXE7EKQ87kt5Gywe51pU5teUe9FcjaBYB8XgoCJBHpyxTPN3tkEf3UKnET6t8pGT8UiJC2XxVu43zLG",
  "key30": "2QkbnkmNG7PRKMRNMLqRWpUYC6VLukbepqzupt4KN7uHoFiC6mKQhGfvvePJqBkcsvM8Cx9hZByARtJmi9dzem2k",
  "key31": "5qYrxfXtZug4tpn1PoaCnw4gdnNkm7zYGxwJvHNEDkCz5EK7w62zhusutJtD3uuGkiaVHa8TaQWCQm4epCTwcarJ",
  "key32": "2ftdKUTUetNJfKxpyikGqJrNifS3vH7APYbnURcZGV1sAqebRoeL6XGhfmdrB7xz1jQZgfBNA9zDen4GgoAhrve3",
  "key33": "5C55Mtp9ZocRH74VCeimp8c4gpLT5NxhcinDTr9s4ouG8f7FAc9DAq4QNynCcomw5dZ1WAbeNrauLwhqd8LpRXji",
  "key34": "yfYcVs4RWH9PVJBjDDTVQcRQ4bUN2tdGE4yQ6WowLdbMjm3Mumg3uwRpCGGgbZ3eiNowbQLLUbyLXSH7itfCbaY",
  "key35": "2QrXhKAjkeRmTZYqM4HBB2wtt8ywJnY1K6maxtprWWUvLCKoW2MT3cYGeyrfUCGHtCXwURresKNbzSLt41t6QFUf",
  "key36": "5hRqi3r7RuabM61fczjY6zzNqQPkdP6t6tF8QxGrXJKALSs4a82EgiQekkP6DiJUBT9zC7r9aeaRWQBE1tN2oHZx",
  "key37": "ZSuWPE16hnrH82Yz9xfWY9Fu1eGBunpVDMKSqWHMKMvRkMdgCVp3VxdQoT2HML9KVr4FKJ44gpN2zRbn3qzL4Sz",
  "key38": "4f1ZTvSmrTyStjT2ZGuvhVkzFF9xGiGuyyeWBC34cdinXq1U2FqdTuPz6BhPt2T6VCW5zWwC5EyMqAU48Uos2n6a",
  "key39": "fz6C6C8fn8cferEdNKAUgKxWsgsmSWWHgDWt9Q9hKoa1LBamEasRFCJmSaw1MbpeCobVhF5kb9LSY5aDMzZNJaH",
  "key40": "5MLVTD9usqnRPVBebvfMzmLqUcjhSTc4DAR6RfLop65CGbZErRdwPGuGiao5mNVyyTsbbvKGnrfNPb7gJUfPL78h",
  "key41": "xqfFvg9NgUAtMvNhRtW15FGtc6oqb1TsmVgseYyAAr9RgCPDXTV1BomjB5yfH4UvKdRiDEtBJ823FXqj4aLF2yS"
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
