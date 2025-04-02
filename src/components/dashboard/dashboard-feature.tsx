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
    "qQr8AXYfWbAawPBa5sRKSPmbR1aQr4s7iMHxVDwnPyTBsYRyKDr5M1EMq2Do3E8QyRQRGimkLyUNm4LaCzSTgS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eb13jDfHuFysKKfubxFktpG5rSBEzb7WBmpbvMxK4LkR3XFUwGkNHs5G3eXAyASbQtMQKsvUwpJukFEkTsEwKwf",
  "key1": "zavcnFLGaXEiWRsHGB6pwHUDwkx4gFnDsqtywQkYcFAJR4hg8AMXmW3nLBiEhT8jgHLSWRVB3h1hbddY1fp5xad",
  "key2": "edS7hk2hyfmhbmHFckisBHg2JaJEeZnjo38oPA7AwC8HpBBMNGe2qud3S1xB1qFfqq8H83AgGLqb2HDRLMZ23jz",
  "key3": "4pYJeMrzBaMzXQiLNf8p9bzdQuwdg53rJ2dMiDoSBeWJ4HnRQESTUquhoaYtecvkqF8kuvvhZYFtriaA88vtsNwN",
  "key4": "3UyyyuKzeCrXQ87LJWcysG6gcSZ9xNzPoajVEXVhdjrFTBDCPxPen8eGrMpEtfx8MfqfwrDKYBN6P4TdNVtqa6wm",
  "key5": "4qtLRnsnBTVwMtd33JSxtES7AZtgXH5W3PZ3L4pUfkdfLkE8H14fJpmfZU1ZHpS3Pcq7e3TysJKSjGwM1DwNREab",
  "key6": "2crkYoS4qcP7cbncRkZJJjAcG3UhdMb2n7k1zLEN8jqAuUbdDCb2CfVoYJkQ1Mmy66pdy5DfqC3pM1M61aDFGa1S",
  "key7": "3f9DuFHsiCBbr1s62pJzt2kuz8rtvtBFEue7tUZfnp5E6JJGW4mwCQdUdCwiy8Qi975p6MTd8YBNJGFgghQrvGjh",
  "key8": "52WsfNUXA5DhYUpo2edBLEVqA2VHpEmbBFieEEtAAMwvj7d5HXyK5H7idHVNdbox5fU5QC9mjsP7iMnaAJbYHPuP",
  "key9": "4ECCF9pCtSxoerojZnuumUn82AaJHHURUNdyiPpgNqTaqm6TwpdVvQ5fyy7quCNEtpZ6bLCiEih8oAR2GGUQr7UK",
  "key10": "5ZPJin1bNTqhGvg6tdgt4R61xYHRAxbXDi8zT98iEwg8Urm1mJEdDd9coJ28crqEkUP38XGQhSqtJ5sqaY6utona",
  "key11": "2Z4WrwUbyorZtoepoowBVpyAiS747MetDy5WcTyiX3quJk6vcjNvBoR9T7oHqyHSFXmSCek3QcN5A7cGkbHukB6T",
  "key12": "5gKjWAjNC4U8kdfwU3Gwr7CApFEqyGDnFHGTex8ufCUfSQ7WLobrG6ATvW6HYpnyVsFjAKYbETZcLJbWEZDdbUQN",
  "key13": "61v3d7fW2Lcj6S2KCLqAZqHYqN9pFQ9789ii39YG2FwTDUCoTwTN8yDgiXu8TLzofkiH8aNZjQqirzyJVHC97C6Q",
  "key14": "6xNPN2miM3Sb8rxEJNgM468t7xWLGbnBexh4fESRNNJrMKyGx3eoysEYTVWRMAoGNfqEDs7H5iXF7P9rFwPsM8i",
  "key15": "iQ9eDy1n1aokPMxJnZtLww6R5TayHHRAP2VUNuSErP7MJ6jM3k8umyQEHhsyoWb9HNoWg4EtBM6cjThy74VxnuP",
  "key16": "3ueFNvA47o1yJ5638YBy8ENavZjgSRb52fBhakk98crEkmhBJ9LyXdHCs4sGX8gWS19GEspvcR8FDYdJUndg7k8u",
  "key17": "4vJT7GHLxu7iSuA1N3eLy2V4VSuGkGwCuHNVyA5e1mgCywNN4SSrXhHUD5BWCHehzhZQgpSVGSBgjnAsyHpdLFU8",
  "key18": "4ob151rb93dH74nFoFS5DGvfRBUBnV18VYYtc6gi1qjJsNChpwikfhh5BvUn9KM32qqKRQMeh2b1vJ32VbfhqViu",
  "key19": "24nM7vWQGHFHMwWdXQwb54iVdy7DRycooeQxm6zWcEJeVWr4VH1A2w2sz5vdcJxZf75uq2Nku5hR4X4bmWSSkfR4",
  "key20": "2FXmDQAUTgPUB8iUu4QkJJTCvutvANXHoy4zz9CrRwvwobG3NAgryeVFPE5YZWWx3mgJFrcny6LS235gTLr9DUJo",
  "key21": "5cW8nbmCogp7pmZVZCQNrKivaR63HosFQN13ynX9NxLg8g1gVX25Zx4VLjowcBA7oSKGBsFwdvRDwQnpksZQ7boJ",
  "key22": "2kNRkgPcJi2gubgeDNEA8CJTSLR4dDvQNR31s61PQeaVWjm8i5Fdyqq5V5LqyNzcKMBE1WtpbAd2p6dDJJ4sP2L9",
  "key23": "5TA59ddKzmGPtXheWZxRtMJmNP8iBqPFfhAPGnCuFQ1FYxTA8TwVExT9mg3ToSsQKZgs6XgR7KM2mHobQeDr9EBt",
  "key24": "547ijYmaJjKDzHH36KYHubH5SY2j9oUnZguHGS1ZuKso6wTim1uekpjfChbdvGZWzWsscTb4eQ4nKA8zLJUhAYtD"
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
