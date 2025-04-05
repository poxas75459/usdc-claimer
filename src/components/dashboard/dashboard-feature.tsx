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
    "62YiVP1V7npCv8NorRCUssauaZBM1MCnRmQfxNiBqyZYGNGd5WWoEUYHNUC48p4PfpYQfuBZV2Wh7jQzNwU7bxko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hyBCg5uqSXv6vnsz4HzASmGEmnWpwMeL39MsoUwqupMBCS97cDyeDkDouC9DmKFNiqJEDkgJuaRsGpU2jy2Jt1m",
  "key1": "63UxuHdSnQon2BpczoUuPoXbU3ff1GN2fDWbP6LPJbnho2srPtcDABvqsb372AmmFV1Y2NMe4eH5hUtFVPZFbzqn",
  "key2": "xb7LWYLFtptQ5SVdZ81dQjU4JpiDmYUQmRfzDc73jbUw6Gq4oXnV12w2po5KcJk16AkihrhFS8fEwGTMeUcnfJ1",
  "key3": "2Qnoef8QEAKuGBWamF4wutqTP14NJZRjYo3ANvHLeQRMdMPQoL6ERHhg5oDaQQHsh5xoPcRh4DrkuYV6xbDQu837",
  "key4": "4Wn5cyAd8CvAUC1e9LU1gzxGwntZWfWRmUL9RGtaYqgECTcofYzwXQm3nLqQsmAi6vLukTfwy6kP1yMdU1ndT4Kh",
  "key5": "5A9yVBkYx1L8XsTAgpvYsNyCHzEKv6cTLGcJDpQNuPWh8n5BYJgVCizMAzDuMeeRsSrv27ZvicMxFfV6EMgvfNLE",
  "key6": "3MSHXQzZWc1gZurjpxuRXST55Um1F2K3gcB6mVqTEmhs4sSHAWxYiwN1nbECSfteEjYQhN1s5SLH97q8mWAwZmen",
  "key7": "3Yym4ELRyD1weQkjKaRhfn7hGbp9HvZQVni3NdxYzocDMbThTswZU9cE599jPzLkBfYB38Sn4Hsc7AU8bY2bMnUB",
  "key8": "5uCjZSxzwYVo9YygtBdAQSpWf4VYm4ed3ePncEC8d1jM1ZHmk6zjLG8pQsutyEZbtaRpsz2k1pj8bef3QKMkRi5g",
  "key9": "4pcHdMbrQhaJbgHaaqWVGAWBoDj7C9txrmTJVR5tXA7i6SDSudW9BAGUoH9JTYgdPgCjRzqakK35EiQWU98rLQ9g",
  "key10": "4kMt884Hr2LNqGennRL6TRgHXN92E2ord9WJYZyd8CQTrS3XbCViAuR9Yh1CujbJnETTgSw2pG88fefLgF6EvTWe",
  "key11": "3rdeysp88PhSLuxBb68pGdJUmATBqGsRiN1yMHwtpSHWUdyCFZLWqmv6g7KBvAt3NwUT1CrAuAryrFzJDUQy64Fd",
  "key12": "4SuRwc1gF3C7vxpQGQUX6FkAv1xsWB4CQdw2YCJ9brhvcTmTNqcR7cifNUizN7fex47eYLf92MU6wikGc1vV2tRD",
  "key13": "3Wm5wPXuruJ6eMoU4e3mtTMizU12mDfMMoUNjBYyaXiB8S1Mvk8EmnanVtcjwoY4jP2zooLEAkRactGLQrTMMdwS",
  "key14": "5wn3kE1k82AsQEqJqf9nSRDA3WgSwKJmkv3X7JHaKHQeJQh2wCCQJdB1Fj5BQwn6h3sRdAN64crKMRavz32B3LwZ",
  "key15": "4zGXkYjcJYg2dr2YUr45cLKgJKJpZH9AaNUSqRjYJs4yvjV5QhtcgJuKPiY1d1HXSBEFmionuRHF61NgXdBMMzT6",
  "key16": "CBagPb4RhQRWqRPDConARrxTatpMJqhhH4ESydBNNpnJRDovqULixZW95P2J12byX7f2eAVSpxj9EmNhcnsSjLA",
  "key17": "4UpYi7aDSwXxYenJ9UzGX8PxZ15288A5tgKQNx6ZfbpPqzG91qQ9Sx2DrKia3UMvvJrLT2sWEbYg4H8biFDaTnaQ",
  "key18": "4pzVPG7HvCcr1KuayXGd6cscYBsXSNVM9hVHdoz6dSkKzmyTU8Fru7p69Y3cq6Dn88SZPCQaew7E74t8bT38jMce",
  "key19": "5sLXcfKc9EtApjVfCxQkuMuT5z4t5DkFK3ppNSv8KvsuiTXAxrnaxoU8aWqzVxvNRCRCcbwi4ktXQPpXvg4R8ttf",
  "key20": "65H7GLZKNfh1yHgNLj6h7uyVd8L9SZaoL3L3XUBcztJN7UJmdzgx1DX4WvQ7gSsseft3wjcKzm4bAU35yZuFS8Xd",
  "key21": "2XPgiYp5HAMuv1HwuvKNWHMQRx5oNmTVLqr6fG3uSx8BdxNy1aJWM7297zv1iwufZCZwDjLqVixG44u3rDyzdmAa",
  "key22": "2db2m8v5Gjem4VpjxF65yu2dRwnejN2L8hkHsVrHR2xAMHo1NZrfKPKR9DAuREdekf7BKv1ovDnc2GHu42wa1UD8",
  "key23": "3EpbFVArGozEL1xF76eAFPrPN64N6X36h5ioM8sV5QTiS8Wftha8MxWZ4vdnrpd9yw8Ycx1zGFnqo4od9JKxj8jg",
  "key24": "5Tp2YmCoofs2CJvvqy6QjYhSAurEexLR8WoHzMitTqtoJZbYmGrgE5Jgm3uNW6mtE3gGQ2dwgQzR9LEEjnJ3pRQZ",
  "key25": "2ZP9nZAaX3jPskAWriCh3kxPszd3kgbEGRGjHzUU6fHXfdoqqcLyEAeak5JMenpZeZkgjU4CNX42ApPAYabWuU4k",
  "key26": "4sM8tpgVJ9GyHJLf3UZ6L8PRiNqpAB55vEguwJbnw76WApfLFhACiEET1xcYzinqHvGZXwC6WSKxGa2xQCX5yyeF",
  "key27": "vkc6PCsM9PV1FCFtTK3T8isW2JezftYr8jWQCZ6i8D1kfvZNyuUxvMmP2PHzGhjtY1UfPyAwcebmap9DqCe2cYW",
  "key28": "2A6CRrrC3ruXFiChAwrZyoyn67gZKrf9Lbgie6Exedz8V2rg8Yjxkd68wgFW1fS7f3YpYtMJ82mn23zMTKa9yEjY",
  "key29": "2GHrQULzjNcmxCzHESFCvBiXwSLBoumCB2kAspptMxPqPxLJm9LjukE4nneNGCNEbfUbGcBimMCWTEd7Ewf6UJW8"
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
