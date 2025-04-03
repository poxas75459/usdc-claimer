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
    "7Ex5kuVUYrAvfeefFdoSGhSiZyFLaz1zrgfRqYFr4qvuiZYDDKHDokfGNwfroPsCLJFhfJEmBk6XZnwx51qSza8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXrMcXiWGvUYPqHZDG95L8AKVkQ1111hm2zzUizAzuQf8NvmpzzH8WuAsJCS13TWZtaPc2GC3scFoXmqGC1tFkk",
  "key1": "5somja7SXQ7orJ2HCvMttVMHDf1xVxERi6RDQi7L5zQ8gws46vNppsAg8RimHQtCm2NHbi7d4LS5wPBnmikZ48PA",
  "key2": "2eaMcbbGEQSq7YnAS5o4aBt9jqr7tVSWpuC7UYTdAsQkitKAsTWeqBxQYg23FEVc4LHCmENY34xwgnLb5S5WEWuE",
  "key3": "3ygYPsJUXD96AdAhRy1dW4nc3rYMoRPkuWCiZ7LhGQJKj1hFwCtqD7tXc7ABGA33gcxfKsLERk1f5p4k8oAYVgoL",
  "key4": "4EYoK74D1ic4kywPhijtHGo6eF94hFPLJH481ffRZErLSfp2JWitbz96Cvp1mdzZfu4Hie9tZVF59dNmiyk2Ex6o",
  "key5": "2JxeaUaDV7GHEYnMCBd39wkubtgvg15LfyZkuCBBcGXeX3PyAg8L4hontGVDCQGgLGGBAyaeSwzhsRVBhyzUUcXi",
  "key6": "3H4YpFXMNxP4WSrjM46zXoidYtnnSC5z65XhMZn6eSSHKnmA7nMQDrUuMfB2kTpFqKuJpVcVhQTDJGho14mtGXHu",
  "key7": "5domg36HtdH7NyzMvidHBDTLEEURuZ5pdhSKJRVRwg5TRMYfXjYB9fptcNdMehFnLoS8EcFhQxRPg3YQoZ7B9YM4",
  "key8": "5z4iXJUW5fg9YHtCnnLiwz1VqW4f3k3tTDGGhGkEZW2xDD5TLhHZUGA45ZktsgyJVxDxtNNGPSXNCU8bgvz8t3MJ",
  "key9": "mm1XBsMo22N7C4uQPPqZeSxxrhVCWrAykFcrxFZYSFUDVMrfixREgdh4Smvs6PxgnuDk33wMXAq6GtYoyv3AewG",
  "key10": "5aJZJtTaxg1PBDNGN4Lyi6Ss7TA4FzvYK8RsH47SgjEhZvuSK1aBysMy3SiJgi6DR2ci4ff8FWCEsbuPjd43qsFq",
  "key11": "UX7gBKZWuGxTN6xW4UWqNKtZUjdX81VxTdhiEaNtGB3nbANnCo1rXXaxHUdbGbc8n2cJxhLy8ZtCtg8ZgCXW4uK",
  "key12": "49KzX19kUGB9wB2669m8jzLHhR4Yx12ctQ9LXEEoQpVwtTR31gW3DmgTyBRWAN4Qn8AUm96cd274nQEQBKoqeZ1j",
  "key13": "3yApz1xPVR2ZQ36wJRKcUVXx2vZkxrn7E6GyiZX8uBWg45C6nbAJd5P5ZSAr4n34i9wuJpm2GY2twrty612iqk8M",
  "key14": "38JS5GtAvf5gjHj1KJGoWPUFLw1RN7XsyhfawyENaJEHgYw2HA7iUHKcoWust2q6EyfTCMAQ4qY2rtesPfPhwpRr",
  "key15": "44EyxFzCyTcywpP95iPje7pEd1utZNJB7KqxvA7NUV5dMKSRBYjfEVcKSjXXC6vczhbKptMzBouJz5kqBzSv1wpk",
  "key16": "juqSb2bvL8iNLgpidVsaryzMSAuPstGgKGiuC2pgJbUVh6Rkmbhbue1AVfCrckkWFo2rbZBPntUay1r4G2UnhMg",
  "key17": "3vp7MWdjJBCaGJUM3a2JtjEGApyxoV63HvFWKrYuj99qyE4A8fQM78kBv4kYuXQyKgyiqKA9AHEYecoG645WzLfa",
  "key18": "3Axfw1dP5mGzJk7X4n2kb2yKNEnGmKd4atsLimczdVr71tri9VF1WQ6iL8Cwh2ESBPWwnToEcMHuYRh5xiLoRrnr",
  "key19": "4K7fm86yqymCs2gwxKjaYDeHsH71TUgk6B2EFxnWCVWxeL13Ny1HNqMLVdzXZYXtgZfHo8YYtpPQxgR6Q5Qgpw71",
  "key20": "NzhEAEfc2jiXBYQQnw9dsAyci2ParwWwCB4y1GmLyMvK2bFBv9euix22zac2P96Xf9fMMfCMtGJDu5KWhqrFFb8",
  "key21": "5P6LTxBQoQBK6bgHar96TCyE19jPh7uBwzaSVi8RuUQkF9bDyDPykMSGkUUHP1dm14Prha3uW9KyztDo4uvM41PS",
  "key22": "5eRGoLC2frSjT97F9MAcbiEW9T8PjRqdFt1wxhCqm8KqozNBjruRj1Bnt5jaQQVykLdS7LMfWvAb96pqAdi38Acy",
  "key23": "fgxE1QsuSNqsA5nXu3U5bQQCxCQL2U1rCsrGfhc86b6Mwczx2DiD3Pjhhgab1ydUgxa89KZeg6vpTJpRJb3GckW",
  "key24": "2fovac54yYxKxUe93TZp6EYEBb78pGR36DpZCVyjZKQ7zGyAGsPTYYJeA8SjAwjVwuTq2VnYc2kZSmD6zqMqG2Tz",
  "key25": "4aVwHns55ufQb5MZoEtjtYRBSXMzqQ8QwnfSdY9pvxnjrfFbXnPxv88A9L3hP8Khbb8nTTeUxdQaM8G2KCnVA4qb",
  "key26": "3WUCQhudhvbE8jfcvh3i49gxSTUuW78tGXApdGDg1h7RrKBpkjn2bg41ZeJbV9jUejSsZ3YfFvD2bJnqvkjNsUhi",
  "key27": "59r8vJGb1qWLXu3S4Pb1QDD9T6yWkQnneZmKaSxZvMYRDd7d2vpcAAZ2A2sRDNjuCmJCgJcfFGYuGqsovcbCkGFs",
  "key28": "4xvY7UkGfmsZDtuHpwBsXUbBZgmKYWiSQvzBB7qWoWNsxSLVat8BiDLj13DUNxfA7EAs7jxkLP9Vs7VTHi2dL7bc",
  "key29": "5xB9JXruKTQfNAiDgASPwGQ66Akg8Bha21BQu8knrcVdUGJF4N1wDz64aSRDJopNDbjaRE7iCamDqkkA5ot5wYq7"
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
