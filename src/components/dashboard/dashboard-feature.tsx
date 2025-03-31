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
    "3MswTvHcXieuizNFmU2Kk6z43CwKJBvJggwzYdXiBz6Qu1PA7xfiigtwjir46E1Px9giAenkbBhbs7UZaK9GrHAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmABZCT1b4DmbXsNxxYv4bLUwSdzVeSxEu32o1fv6RMzX4ot6KdhaSezNwCKbERiE6pbi2odjohbU1LjfPVZTD1",
  "key1": "2idU7QSzADH6yjTJFSQaG4eGDLwD5TBftdbwZXuk8xqjtthBwSFNYiqx7yFMenbxoUJSGpyy1f6eeHn9Xkiq2r8o",
  "key2": "5Pg6VK7YHQxCpBdA774uZo1QZb12mDoqQibS8oqC4gJvXPoUksGNbdDJLptGfXJA4f85utMErYrHivjs1NJwBua2",
  "key3": "4KnfysBiJj5yxJnUdz7vkwvL5K1kBioTRXHg6QyhvwuhC2Y7vpsXzdKYLYnisRYRXZS9v2rNb8EFgLHfUqf4t6ev",
  "key4": "5wNJdZGRnzUs5Mc6wrrDUbertD2UFDDCy762G67VAKxit4DSbxaDBQakGNiFnNgon1Usz7rVXMkoP9Y5LdgUCA12",
  "key5": "62FBug59yCFGgq1q9Bgk8fBuCYhuEns8WfN3gWNdPyca24SQdV3yGfVYhBNcih9aXPV14zqoZd6AM5rrjfF7egMc",
  "key6": "2nw52kRX5PyKatYKGySdzk4SpSqKCi563Gd2LFvYaxb7AoBHjBcKdfeYpuReAof6ehfoXqUFE52K4r7hcRdtY1pK",
  "key7": "3xJWQYQwjiwaPNsz8YgJmtfd17kJEjxYwaeq73cA6dbvKAixdRuyLasszfa6VwPu2hoym3KRTNdyKiAFrKwE5c92",
  "key8": "5y4ARKCpMqMRrWyXQo5yfvWzmqFFzajsRWNeiTKTYcFM9wNQcHN5Ho58UGTZsvGxPzVy82bHV1EgMqrhJsffZydn",
  "key9": "3UoLAoJhSMsx2QtvevWqhUS1ib8DbXCK97UYruTbEukfoYqCY6LvBh2VDWRpG8rTQ6reJvpbEwzFraZeymW1jSMN",
  "key10": "2ebGuKjb5Z3XNeD6EdbQS19DAfP9SpRPuSycRtX5QVjbtHWfERfVF3YspEK43FRnCXHJQ7ZpyWw5MEyC6nJpLNsV",
  "key11": "4nKff3fvz1wHA6nQ9SEdX3bha3ZVphG7V2XC4TjnUcx6neCP1ZZdpvwq7YYQCyXyZgq9Wn17n3PgigvtACyCC1hp",
  "key12": "kggRyTUUZmUwb1v7Qk6cATSGYK5JZC989nxyomASux4CwDR9mpfVQvACcRratTh7qqkTj6Jt7b6zufGEjCKbzfZ",
  "key13": "KR8zP9rkpx924rxwEqJugxUtrYiiWLq1DtAq7fGvpETfeHRDUHk4vfUpZ8UaFeGnseJ7RCsDJNyZT6BahetcGUf",
  "key14": "5uXY2wWd6mAwYUGg7ZMstv6Vr8RMSWxrkrY9FrySyk4Hk6rDRJDzxP9Wfb8VPcpiJY6QCXEQVdYzHSY4jvtnC6Wr",
  "key15": "26cDpr93k96bzhZkyDyQRA7QRDPknm7puTsiLeht6CbDPwuyUGS9up9YRZEyHcrT756iAXMx1yjJsb4fg4N1Z6gm",
  "key16": "3DYAWdjCrmYNCQ7ZTPTUw3vSA1EzEmtBQ4fNVdFcgEs1fTWw6pa2nea3UeoSr4J2Jh4vtVnJtejDjSVdriUtjvbg",
  "key17": "3Ldzwvn6DDRDi41v2UzW9rNZoCnSq9eFWkymfiehPkKnjdhSjBhx1f24XDUFQGcmGPaHyws2Y1r7BtTkmbxF8xAE",
  "key18": "2K8QdqBbYMxurbJTaiasVbVmVhGhJrtzbYhJBBDkbKQRsiGd4fJgbS9nppSCHYGgWrP2tb2k9dEUiNc6511aW49Y",
  "key19": "3HkUz6kTpsDwbRGMsbELBxhPT4H4pYPbeeK1kL4rmBre8cYoLKR8ZaFyPJzzNdn6pDXnrEf6TsYunE4K5PjpHR1G",
  "key20": "2zjgDwjNY41zg3zh2wo36HeKieMj6uqxwaceszvQNaiTobKsXZNeP32fhkKKM8LceQhWU8CNVfe4kkk3jdUjUxjc",
  "key21": "2mYkymFUiaqtczPcVde5PaV1BV3iZVr2tvbMvWM8TufgjJuTbeSxqAykuJ2q5wjSquLy2s3iwLWUxKbbVmifviwQ",
  "key22": "3gjXWBrmb5kRx28cqTFoWPxmeQzyh1b4JQdSLFPzqZNMudXzmucauLGsDjiN3bbvzbLaV4v2um7Vu5EYPu4HKRAP",
  "key23": "y1qgsg3n4o5MqrXa8HshXsKwfaQKirMr39hRGQVVmTsMUXMYbcahnmp4ejbFKmWiZhJW6zRzmpvc1vwA3CPid68",
  "key24": "4AuJENQkEwjREHtg8v55DLaPEz1FKWezmbaft33dwRmoM42tQvuEBGWjcUSmm4RGQscBdpy88vAk1jC5fXmckQnW",
  "key25": "66FaPygWXdXXj5xSHYxiEXsjfJ8TNzNX9bLsLs7pPssfedaagR6WJuXfaiYxxAxkxu2aQyoR27UAk5UQwesJcPY5",
  "key26": "2xJzHva4b1JSGt2kLwGbn9aPYFDPbdHhVvhzhJu7oufcyaCRBGvGLqnuAWizLBzR7Q5obpuM7oheVKR9pEFchii",
  "key27": "51tBWNGZrx8FRFCttpdg3mci9oZaoqhQvRQgfsMMPEtZHTGrWPKT2ZqCF4AbtTnbCD4asUyxXQ37zbDw29u8EgnU",
  "key28": "2udmrko4PNvNPPvVc1n436x1VX3fZTuc2BwkevCNXZVdmzXf358wyzyXqVatFHHUJCTu5CuyEkWouCjgvYHvDgyj",
  "key29": "4BMqJ61e7LBigMQKiFc57NU5yvr98iy7AiYTnKxMbYjh9jRaPShrKmovNfnHE3XQoCE92kq1qarRkyF14STspmhK",
  "key30": "5CfYChQhymGxdwKYa5t9zSVXoGaU1oYnYbBAJsfPug8pNs177AzsBDbkeHkixu214w6bxmeo3MEJRFKSZeAnz1mY",
  "key31": "5VfbdWFbo6P82jgb3Cbf77haR5N4pyFd47mjoe87HnMRkqRscRBzUeepyxncBu4uN4ExQVXagg1oeox3XDJT2wJ9"
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
