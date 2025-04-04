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
    "5T57FmrJ6kFagjKTydygCTgQFqhM5ZDEju4PNzPq2Lh3xTKA5gaS9jeHyPhnidPs6poaC3GUBXgZLJrA12MRCafz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gkKZ1j75ffFW39kn3EbQMvNz3Sazom5baP68WQ4KwVhQAq3uniH6cYP4YzPwsURfFdwf4GRRCaLgCKhUkYdmhaz",
  "key1": "4SAkbMjA3zsHiAk3tLpMgrhD71cByZyWS6vDwZubmgLUj5njKypfkrm6Gwj6SJSDXpHRnFgEKEiHR1orN9oniQtt",
  "key2": "zqoaoiBWeirBRmHvyDMmcSSksmaJnCHttCcjwB8N3GAfpfUjQiUdg4iZqMWb21Z5pteNRsffxqhUXcNdYWJfZfr",
  "key3": "dunG7vYgcYoC4f5usDmUWpWFvdK52BBDFRrqnqUDdChdR3k9URvkfqUQZoGYxxYw3qRXJxB4dpdQzTuc84j2sPk",
  "key4": "Up3Pp45NzZc92VzdjodVeD9vW4Ss3ivpe5QUZC9MLWWH5UWz74FNhwnD6JaPNBeRKXdu5bDvJf5uojxttQk5zm8",
  "key5": "2n6iNwBUa16C9qgjat2ZY6YbBaPzMMJTbwKiyj2P3EFwmLSMUvRMWRvNTfaMcp2WBAGr8PAk2TBikUQQzvzVCpdV",
  "key6": "4VSKujTgEMWkqrmgFcMy6b5jxXSciBbdKC9YGT8B2xvBAskfJaEUTR4eKfeRrNjN7B6Acj9GmTA2yqtpdfE9mz9Y",
  "key7": "5kvGQWffZ9Rpvmac4P2etXtHcaHVb2o1WqTs6eQxmBJcDdteQxv2Y79cxjBJvvd28dTkbk4me1v1cdDWisfyQ5k4",
  "key8": "3guGhyagfad4Az5KqVStqnjmyMN36fh8UdfDTJodB5Mrs4HbS2sGXAE5mkFzpdFJqnPdpQJRnFpq2eamnPbHgiFV",
  "key9": "4eFpojzhbwce6bWbJwRbTrT64QfYvJZJkNrUFaaLaPHm2xZuxJEwiU1ZS1P78PsBxHXd4FvJaVGfTjMq785gEtM",
  "key10": "3SmFtTUxfFdA2TmLT9FirMrfnQWSeYogKhxUfsfaUxs2gYNbpzwYLRphh8bZCjFzaF826RfzhoGRPgA1Wa7PhcrA",
  "key11": "2ZmDQg19BfNiCJyyvtzmg4vi3G3QQP4xSCtFahFFT3yg2sPAZ9JuP8YnJf3cp3uzzZp4PNMQFFKNdsZk521fBj8A",
  "key12": "3w6o8se8Fg7zEF5RAEsN83f32hRsxtzJAA2dSdZVH4m421A2tmb15n4yA75w3TcQc44NtmdKMn4CNCSZfspvBni9",
  "key13": "2Tq6rkCw89r66PhaTBnwVrFYjAszF3fmq1jPRhmYkrAWBnDRsgYDJxboAUkPVJgu7URgMqMdaLqoTAG2iecpXWKR",
  "key14": "5sL6Y8zj1hpcoN7JMZbD4kcKGtAZDgh9sgr2S6h8pKwDRZL7FgUo4z4DTry7aP36WRzKChWvGtoabgyorHBixUc4",
  "key15": "63HSeb8uZPc5aTFtDVVw92iyA2nK5VPNAAr2Jq83qy1q3BuUYZRjHzu34bxhtkP9E4BZKFLnC9eyJJtAmBZcj4bG",
  "key16": "BRJQr3bFtrmhmJzgEn9PTPTe44D8bcEcnRKbYELbfaGTjXvr4SJ3Utp3jK5PeMU7fDHVTpso23SqMQSbn2q6huw",
  "key17": "3evQydmk6MC2bfwbzyCGAhRfZLdoDFDatibs3W3xPUvby4oUJzPVEaPHsZq6FgLzirLXmiTqg54yTF4p7HyE3VB8",
  "key18": "4kJfGcnthvQN93tsg3DM7zCFYZ2MEbYcnoBzMjyeaVUw8vhRv9pjuF2H5uDuqECyZbanpx2eBTyKLgvfgi4quZyA",
  "key19": "3WYTszFaj5WJn5SXFYc6F8HghGmgABVhgG9FqruywpTJA3dY5tnqXjeJdMtEgn7qbuCgRQWRemLXfaiBjYvqyoQB",
  "key20": "4xYN48sqKeGATwhrxWwfxCRoaDE28zv8butJzWrokSwDGi7QC71x9HGefWTGUxaYWypfeWDorYRRhMjuyyJeYVQ1",
  "key21": "fLKPYFXboxTnrPYMmiHvvnio2NxgR4J3owiGJi2u7tqQL3mHVi1k6pweZAFQiaDuXnReYVoHbiFfLBwBV6jvnKr",
  "key22": "5XVJCKv6JjAWCCKRYfaLbKb1CyUZT86tbwYyMJnD3BSLBJgzjtNyE1xL6Nc5zKG6eGBbbTrA41tbxPTy9bPXpve6",
  "key23": "38HfMqZCsv8tQdt5WXjaJ8ppLnWfNr5zDamt1PaEdZKqtfSZRXqvr5EFrJGQuuP5F6Vof3rS5JSSSj96mrtnz6JL",
  "key24": "2rMDiCrmCUALcQgDYKopBj8kvLG7yn9syTHAetjsupq9MDMGmnREc9oCNT2bPUsvwib3gtsz5F5Lo75gqcEXGSyZ",
  "key25": "5icHJJwaKMjuLhkAZAZRy3SG2Tey3yC75M9uFzLWgUxVksmxZu8Mbd11nvaSw1HDwn1yC46ciaWHcTKHh7FiRR8J",
  "key26": "2ZopoRP3xV3cNe6MjGboB1eUCjPieXF2Vk8q7F9kWpQbQbxEfLxQPA3YgDMQ9DLUUZmNYgmiZmjrTfDHHRayknDE",
  "key27": "2RftgPMFggecqi8YZaRmbLKasRwMxN711piNEdiuuugFajewj66j63SJesQbeTUjHMGAkFbp3x3G47a6prknmrGW",
  "key28": "32ynkDrnWB9PwMwhxMZxmDvepQwG5PFC46dtENi6hJwE76JCJ5HkGRqid5oWV2uNvgg2MvNRW4VuW5Yg5VK3zgdB",
  "key29": "TukmwYEdTrYqeJrMrUfrJDh3ed2xS6a5JHkCUV6pK1HR5TyY7pXqgV4jxRJ9ysqohxhTJ19keXpe2MZZhsNPRtX",
  "key30": "4E6iy6zgFYGnBpkGFUM6B7Dqx7joM3jLBssQeVUjrCusUjkSP6zULfnKYB7g7enX1T6rx7BpkfCAJCuXxf5Dr2Bu"
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
