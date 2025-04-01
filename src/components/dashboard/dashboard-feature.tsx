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
    "2tfuN36krYFAmQGDRzwKar242FVmc9wLibNdDkH89ELcjXyMcYKcxRbTiqiY4iUjMp3Xn15n1ZTptaXhC5X3tBph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xHZF4V91SE6SrTqAMa84xNiPExMrom5sNN279FTVCbBCgpT2SDhhbwHHmRPkXGeMQV8LofitmFUwbdAfCy4SAd",
  "key1": "pdBJLsuR47YmbazDkZyZ1bYDiRtds7ojbBsUvXWgJtnfhMQj8anzL7hMdrnEfh3zRzWz94evSxPssCRSgTE5sg3",
  "key2": "5XouFiN48tvNKkeREmcBCwAHoX6QW5Mi9ybUWj37LhSENmG5pWfAz1Czfnti7xdS1pcQQnmtXVniyDTJEugwj2dr",
  "key3": "39D1C2V4Zg9SazMDWtccDTN3Q3B9iP9xCmi38gocB2HEXZmDHYj1TYjVnD1NQCXXxyQb8NxpYozAX78RQa4Z6xxQ",
  "key4": "387ghrDztJnsNwCWBYaeqYZm41MmRGAgUQ8aGPW2AiNQEFBWMV1C5AZHkyuSRjGtQFCjTBt1ZEPkJm87LGLLEseC",
  "key5": "32p1PzDCHDvjHA9avWGEzWdPRnN1V2zkBhHuSmRmwBbQ4arrbcj8H2VWEZnsfm8siZcoGr5fJKpVMRv2Enxm2ewP",
  "key6": "4NvhHXZ5178GV3maifM7UZEfMbhtofMSTmJ6qWhrdXzD4ZN9m8NJEDhAPh5vzPbirf43dq1FCLSf9WmZw8NiBGUd",
  "key7": "2mH6PZZKNPwCYrPDsub4RGdWFKEaQUeJDFsy6Z2wGRP1tHyWLJpcnEjZhw9pGHcdeRrhCkkEdpxLGfgVdCB9gRBd",
  "key8": "5q4VF69Z9qumdVtRMzr2K5MScWUFaa5R7xT7aLRzS1V8W89PSpsWTgENa7wQNE73Q6DLeN721MZ8UBTLcxKU5tCU",
  "key9": "3m4Grm7nGvrtgV6hTKJoLsYb4ckFDR18vpEtxPeYU7PjW8voQ6joFsGHjToxGVpu4SvRQ6XhNqSNpMfk5ZLXTqEW",
  "key10": "5r3sFcxtrWf7AcYhNHeTZJ2y1sCANUPGxAU9f6R3Bgz5FKPykqAuf4fYJ4rru22JaVMQMbZ2KEDvHu4Tfsn9AsSC",
  "key11": "5Tmsbu9fmFD1yph1DgzZN1QuNoGg2zSxnR4tFTGLc8PP4msVzZUbA4vRxWVpck2XnWGrwgy3fCh1xrtYRHsZ6xW3",
  "key12": "2bwRKP6JE7MpmkmazgjUQM65pZssN2bdWN2bTmiB3G4myBZxm71WsMHySgT6aSyKXd1C4L7C6PXKf24tb4XAbmzg",
  "key13": "454jcXF6b5VQB4Ebogj54MtqGBmskD7kbwfFLs19Zpp35BQenJdbBs9BzpFpnHarZvjXheUAg9FjrqGT4MEXiRUe",
  "key14": "26ty7eKsBfPh9ZdEgk74jdfcNyTTZitNHDLbbuTLMQ6q8coB3MhMJ81MdZXQmao2sMeFhsvWKxb2cJjYxeqZfZjZ",
  "key15": "4CWF7bZ4FmyYkkim8suvkcSeputXukAUb5nrF3cyUPw48BADHm9JdCbSSSyt8ppEaEQepau3LRYYhgCZgyHq75ZX",
  "key16": "38Au46PaijhyE5vaXUt3uMro3HutSSJAV43z1Dm7BWvM9wDBF2Y1xWfpTfifM7rUkMWRUjSY63ZW9wivxk6zVbqX",
  "key17": "EtjXAVap1bR93Wb41TgRXDAaBRYavUmc2azSos4f1mbtdmnm4tdJL1AL4WYGiZzupB5GqXFzUhRupqb7W8JYgEM",
  "key18": "3vQmQvGRpWDSJSsgjigXkKtfQGyVytrSKQBsdfqTtQRzV8gZf8bk7uCEEiYVpfXatChug2bSb1SKrPrggkpFHXW8",
  "key19": "QEYoiUnedULwEMNx8StkbWB45gXiaaAGBJEQhKwyLTH4Ksf19gWLTJfV7dx3J4MjVBhL4L6kch4ufjHDeQVoDaw",
  "key20": "3RoE5RT8gU8BKZ7y2dzu8ZqzP9H1yvg9xecwZo2nJyZtqn9AVqG45XtAuGMX34FnRbBe6pJTDPUpQ7sdoyVLDiyd",
  "key21": "4VFMwPQQzMxfPdRhFXMYycDc5L3zH2Ke2nGSg7We2EDtFsSsHgn2Sk5QmnTtjQDreZuULasXiEX6Xn7udYAoc3oP",
  "key22": "D2PZCokQtYtHh5RC4XJtDmcGH5h1qwqERTTjxNLf9fJwahTmPrd1XWDqquDN6C8HtNJb3Nenz4HFmj6sN7BqmK8",
  "key23": "FyCCYXTnBtQiHCAo979gzhVg67bNvXeRoys8DArYe5UaRw3ojkFaEegDvVBJXJ9n596oSJsPXBW7JpEPnRzNNcw",
  "key24": "2Ct8o9xMHLL6gsgCuU1QRfwopPPbkCzoRJnJuozitCCfpb5f7TTgFVzBgNoedoBujcZAwD5PiFBBZFp5eCm3rHsg",
  "key25": "5AznSL1eRSpKUaNphKveCV3Tzvx638hCWWTpq6o86g9GEZvwdqjb3dTfQkrPbv2EYzHjnjkt965dH5FVfgcGmo54",
  "key26": "4TeAHVPTMuYs2dddwMgEi3fWuzGfNvnsY6ggMSJMaQz7NWnXHsrcH3YuyYYbUesj3JMcSPro9qXgp3NfAitdW2kk",
  "key27": "2PQXKMDSoFDdUzBDxPQK461X8dDfMcWJUDbvtuByiNLo4mBYC1esrZqVrYJHWfdUzgJnMBNBBCkzexMMevcvehta",
  "key28": "2srkx9HwfrhUgpj51cbYNpAxdoQAm5ts3wnU8yMeT9na155ksEVcRDwVWJ6F7XgYS9RAnXeAPfTGFypoKTmKPVgF",
  "key29": "5dMiBoYzZgA11gwPYLbsePGrsxNHQSR7zXWvsQpmqGCdUqfyWYxbEELLoRQ616Qb498wGfpAAVDdfNC4xjPH4Dng",
  "key30": "2cuvtBJNpDN43wfGomyXzjrDoTtu3SptNENkfkNtCCTJRgN5TwVSx2nC883YbvNjBKQvTEPXshcDZ1iXUA9vMH6u",
  "key31": "3PitFVibXpS5kK3bb1rrangv7PzKy2MbAQJWWM3Gxyxn3F7kpDSBdrBHJGwjnFpFUPfvXCk3jxMhAD49DBipKDdg",
  "key32": "5cEK69XoCHnMja6EnZ4rGd7m9KxHJg7zCdJTnEvJKNykcUohScDniXqj1kvg1WrWKhZGefHYoWh586HyerB22iig",
  "key33": "3N3X47R5yHko6GEWGKvsc9Ry3ZqhpwbuQMyJoi19Fjj9xUCLXYx4juwTGvHPxa2cC6H5XTtSGsg5SYqTgrhV1Unx"
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
