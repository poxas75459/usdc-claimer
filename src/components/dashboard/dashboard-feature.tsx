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
    "4QCtaybpEJ47nK6TkmcWdjJCNXg3GGKjByUjRLJBceaUKq6LANdeUpWM2ndNDVmibX42f8BBFeCVTQ6zGHUmjt6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vrrhf476xG3uetFTmtfuso87icQ4JYwCD87gRKnnjdE7cGxTf3S89o1KgVJa6R2kWQ7GxPKx4ypXMqLDMJ6HVvj",
  "key1": "5Nm7Yy6q4iSa3KpXnjk8mW3hik4X6c4NWPvLwfCF5xZjVT3WhKfwERHMhazsu1kCNyV1wHaHTLkWKp6HG7soAYBP",
  "key2": "3NnvJmh1xwbsZ4cT2XPhsAa3hFoW1J9NisozMuohG82QBekTRK8yKUe7P8W6oDxWY1CXuTjrrd9RZ4xEd5ErG7PZ",
  "key3": "4VRdnnG4SSACxEtvXfdmFZgt8EQEP8SDov7tEFArJ2wj8uRW1FQZUH8s48kkN95QwDYf8knaEn25JTQXJzf7udYe",
  "key4": "4DwNTUYhcDRfG7fRo4mojniEWwGaj8VgW8K7jx9t8MJsuiSP2Ld7FaqRuJXgPbuZ7JK8nLuGZUeGg4dzdJ5q8fkc",
  "key5": "41xhk9nHvHMpEzXF8TNuCn9yu3fJwrGzHzEQwspCpQ5YEBikUoQrwBdRYHTpnvPdJVg65sbn3D19LPLT92Bu8CHr",
  "key6": "akkonsZBS3c5Fw7MpFsAZeARrw2pH3aiCyVnCk757UNbv1ERejz638taAM2YjdAQ8KaeZDVUKxJSTUQXzCNyqm7",
  "key7": "BFwtbJhapRyUvmvvLGjovmc1iAWgUhJtthBWsBg9c6f5JJnXQYjaCvZw3ThWU98ERUJLpHSkbc7Xd73Pzb33saF",
  "key8": "4wVt12QoTxQLMs7jYCyDynoMv7fcN6kutgbjkf6DJrdCuEkgDgtt3azuNW9HfbWqEsKEQNbu863zU5YtMSqmx8gm",
  "key9": "2r82PWw5VTtcyc4hSQdDsmNi5XtfoNebH9UBaizbyLKXkfjNF1YcuwbVR7nBLBwiKhHnbR2nQnZY2FHKu1UpDUZD",
  "key10": "4cjgYSkNjkseSsnGtfZmheW81YGkNNUNggfxdnjjTLkPACKJQtkp19JcG3LWWxQkoMG3kqsCj6nYsZ99QwkvTkHw",
  "key11": "3sScgasMzi7uMkVCCc6kW7VGV6QmCCuzyvri37MfVJby9uALegZKoeT6S9SxCoWV7m7xNuahuyPpr46ez21AZmQs",
  "key12": "29ZV6jzKxtX3yuYS7X4zwFXsy9gBScCVwx3CGjuskXJhEQgS65NkdKrLEiuv2YwvZrsT5xa4xmKPDMYSvYHJeF94",
  "key13": "4ZUWVkmnDYtTVwDF9QDdYye9A4StCCFkWXzwexCSv4oKeFmoJE9V7NCQbzD1JmQZbWu9mQ9A5kjxG1oLmkuSdqmG",
  "key14": "AUsDEFJckPPwz8FULqHTtisinbth3fDHgCKAXqiH3UNrco1PAHWHCFAq9MZuon3TdQdv1ggG2dNEX614NYUZVTh",
  "key15": "2NXRdHAAUjdj8AxVnPd5EjgnTwGoWCP6v3dyAYweNBa2ubxcMkN9bCYhoUBLunHETWcodznwADomXduREuGLhKsM",
  "key16": "5MeLFbVVZkv1hdnUCkAz1ntTtj336LZhGwT2mQLxM1iCHuUxjL1hM1kNTbwhwBZmS6j7hak34YnvhcCHAXDs52Vm",
  "key17": "QnB4qxExaEUT5rraKYtVRGmazaTMFTRRYiGUJz4Pu7yb4WtAhViE9PZREYkRD6y26f1e3nnng7MVfwRh158MEqu",
  "key18": "2jvxp51Rv738daKQ6mCrQrqkLzrHcEZVAkJAN4qGfkfuE3s5FDKpXMhYx4jHzq2mq85xsuU5cZNCH26SRcoST71n",
  "key19": "oqVH5YQ3nENMQFxkshr8zYVZuhMHyeVSA7aiUH1M16PR3TAcQoRKa1ebKASQL14HhtA2FBypaYYu2dv6acbzaoB",
  "key20": "4VAHkRQekNMcLTCtqyCvn2nCunrzaUrwMkpYmmeUK7A6pQUVzZC3Fc2rUHVA3JAyxm4fKMTPGfZb9ypFvSem33iT",
  "key21": "ZytPgMRWWA9157thXsgVyGMrqjXpeXKZ8CwaSMgMYKCVRGGU8R5ThMkstVP8Qh5apcwGwNGb5rD4pfWRzaHCYSG",
  "key22": "5yE7hMABYF9hw8Fo9KTreQDxqGKTFfT9EubeYZ4tr42tG8uA82wwL7DswuQdE1HuEjWEjoq65W5jJuQZczwvatv8",
  "key23": "4y2MKENnDeZoQpGDxDRPgXA13gwXDYrrbg4B6YTb3fKGBWBPm3H4dN1ZopzQ9Cv7N22PvcnCrLu6iWuP1togTwRQ",
  "key24": "5Enr1qSt6GawCUhny2SHRGzXkddNq7mwJHWYBtTTidzcxpZKrExqu4nf4nNMuZsAWwSpxWaF8oHr9HwjHQzL54UM",
  "key25": "5nfcAaVrpgmrVwGQvbJfXVMzhRsK5n6xyyzJ6RmMC2YRjtWisvJFP6tRnBhS6jR6nPaT3w2w1UZzQkXND4tCqNpD"
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
