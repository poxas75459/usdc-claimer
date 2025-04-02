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
    "4fUZtiDogEjvupVXh4ezNDFX6hncm4LBcLSQCXSShxzAW4BVpfSr8LcP6WrRtV43evvSGYKrj9RGg9gQWi5tR1yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YU9WgvxumMMvW9EDAuM5Jc2RuJ6JA6oMc2ZNkqnxmwn43yUSyyXDWHEuLjQjq8idQYXY1gTVm2ebuc9Ew13H7jo",
  "key1": "2hN9sMp23HZ28Cs53jxhYpw8teJPfbrxRBLRQrwz94oMaBQ5ML7dBBJaovdfkWS3TjKK8Ng4Kz1zd1gpYiGBxpuB",
  "key2": "5pzoXYjGPmNWrf3o75zwp1L9oc47pMaEFuKu2yr9dDBhtZvW6Qu6SSkRSiuQFX63GtoSdyoQbM9wsYQ29yu2ngUd",
  "key3": "3z8LXrkrg7wtrdZJnVZYtKVfJn7Mg94kS3y7KZQ9AhdvKwGKKzEPocZ29TH6fsdJ8u2S1dr48GGSYs4KyhsfZrur",
  "key4": "n3Pbguy9b74X8xhaDMxcbcYRmMaQMhHdvwsn6cxiwTsABPzK57rngYTEQNWKoebS6xGrZPt6miu8TbDKK3myjXT",
  "key5": "2nEwTUH49n5Y13ZsbHFtZ3xEG2nZJf2qZLeYckEwV2RUq1HWuehBumfKD5uAKdyRg8LC33npvQsctofstqHec1hy",
  "key6": "2xpWeabSdosPnR52zEejw6yv9X15j8SX8vErn3bPnBq7n9E3eGeh1Jawb28sCsEXcTVyxmx8V3XvZ9NoskZEJN9w",
  "key7": "37d5btpccWHqYyQ15TAz6ByDqPH6XfsDUkU1qRBssCgy2rucbdyifteakHiy9iZncAtCWwyczrbe3m8MKkRQ24KC",
  "key8": "5NSQFnhSpG8ZVyT9VkkmjMSs39oc7K7qGu7Q1Ta5WPtLFLQgpiDFGVEbs26Sq3dgvYWxUB1kvkz8GJFtqCYWoAxa",
  "key9": "5Y2kLbwy5DuJfUD4egZcBwuzVf58bkLLEBSTyNSc1dNLDzpoAeSfw43X1SnPQgLW3JiwecaErQCiTbhGgKZyx2pP",
  "key10": "scEWUSoRtMqfFeWMuDZsRkdSiW6rFBL8khinB8pBfuAthbSh6k4sJeftjGSW5ji6QKrfZrZu76HMUtK5jvSpuMK",
  "key11": "9wkShrN75pCeyfEXKE7ovZxKsdXhCkR2VP77zCtwsULGDxFe4FW7w83hDMM3ueVeDaPCFoE567KcFkhwcxsya4g",
  "key12": "eZH3iMvgozwhqGakUPsAGWDuEqfwt6yAfdp6Eodk6gGLUpLu5gTjsWkgL4yWqKj3MzUwxbqAVcvh34MzaWXLHoW",
  "key13": "4gY6SBXCSCsKAyDczx1KsXb5qLXdodUDcbaaoieLant1RoVJzEnSRTbqNDFqCXnu7TJwvGrzP2SH4rq7P9kbFkJL",
  "key14": "24cfin4nzp2ch4LMR4vzwzTp26y1LY4zxBsw9DbxWr7ihtjfN8Mprz1Dm4Te8QcyZK4DUeJdrQwMsnxN1EmqUeQG",
  "key15": "AzMN2y6f5PYp4Ey1orYrNuHpZVxmP2ohTythcTyqZLauff3H53HYirnvzM3EuwkGpqrnZashkErY9iPZKi7VDPw",
  "key16": "47vkSrasXJVi2BFSPPBAZ58QKsjF2WVynv2BSQZ9fvUgKSKbmYMwzfxDoamkd6dWmrujycZZUrA8mmAj8i1ph7cJ",
  "key17": "5q5i75LuKzeWiarSuLLzi2gZvEXrAqWwvVsoVtm9NrtTQBEniNcrQUXA5aEBPKVPgxNugHNjqsZX41WHG8tJsDKx",
  "key18": "3p92V2qxsr23b3MiQUf7aRvzVDUDURce9oippRLXqUhf69QGrdR6GVH4h75uWqoUbtV9rev6hYTPdrHaq3mzPGwt",
  "key19": "3ofyZHXBYFp8ngTvugxHmLZVK8U9aeQfVbChb48VSpvobCCbDYAaa8d9fWpgbNYg5L71QpPXBZycCcJhm2uWebWr",
  "key20": "4pVmiwQW7TtDTojTrhwYw8JP71LUUVWHD8PRhT72NrkvaKSNSA6F4FEn54TYJEnZRvfeZksbo1dtb9MS6hc54drp",
  "key21": "3JoxEb2T3BT5zBrKMzsib4bjQ3mZzza8HnZ5AZYFAM6NrkJ4DDCp8Hqq3DzaE4HcRjJbEz1v3iD8QcpHWESZVtNi",
  "key22": "38bVFLQc8kB2PzFzxVTDmfad8HuoFpPjSWZeK3gJDnjAZ3ueK45ydznrDRJwZmmH1jTMF2amjneYuJFbxa3Va5xu",
  "key23": "2N2DSrWXKhsLd2n1oD9mHqLejJUpXDSoAQzaq9y5LAWW8quawow7mWG1dB4u1a36JQeksGEHjCFcGqbUr9h6QrgT",
  "key24": "25EM8WnP1AvDFGScyob9y3dL51twi1HYEPv4RwkgUNa9r5iLZjKVPV1ovfAbwf63qTEXfK2rTQYobdhuozoN3DvZ"
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
