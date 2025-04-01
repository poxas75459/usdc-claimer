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
    "SJxnFnCbVsnRZZTtJ9jF2NcFFw3rJkEZ2QjLc7vhwywthPfZXtjdccHubnSyGtYApKUdqNHP7idrFcPNUmmupf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nb7kjtzYzwqvFxGEhNXzdYyPBncaW1r7w2MuEu1RpTva9x1edMKeRk8t49X1dkYU8mLrHT5Ra7JRrQq9asHM5rr",
  "key1": "5ZKA3hrhnPfVAsiauDyxjgJCBsx4Cnz3HiGEC3tdMD1xMtzWnyTKFBa2jakWnAQ7aqJkcUTLUUJtT3MYsoVAYrTm",
  "key2": "5VZD6gGu4iL3eES5UrxUjE6rDeLNfcbV6P5GnQMo7em818HBdPkzePMX3Kuxw5hZLqRmNjSVSerXKvJJijisdb7u",
  "key3": "3sUur8VZXaWnuLtQj9EcgJTcwYZMznmcGdeozfz3bDGAectU4Pv62aHepXzt1BrT5RqC9jiNebNR8U3UfRpUKnn2",
  "key4": "282VxK1YdmTMbH3HCNGoHvNJ6PeJWgTXZJTE56S38KkMxe1DR8HVDVqVSMPth1VMFo81ycXvzhYam2vsJcQpL1aJ",
  "key5": "4MbUioZPUn8ewzzSLzRAoFihSw4vhfQLwPDQwHqNabLNidEBCaSEdDozTKahMQQzCMC7ieiC8rjoNKdAR46Jc4QG",
  "key6": "59TSZ2GNjr7wB4QJ99Z8UMvjdAnezbea218KymyVmdzdH6AMyS3rSMbQyuc4gicmK73jKoRan4Li39bU5hvqMwTH",
  "key7": "49Mh4mAbi1VWRCYKKaKxAGPQGuhffsk16wb1Fq94SbeyaLsRK2kvrwndDxpthZyzamxg7JLqHNZbyjV6DVpqxV2M",
  "key8": "iFGkwrVwNmdB4mcnzWCDuEQtsD77Lg4o6j32KVB7RDaGM5yCT9bzAg3X3fj9KE2kdZeep5K1SftBnEE6hgiJtQM",
  "key9": "3yynYiy6k5QpoXbU29ypc8aiaaawe2JxVAd92qAqsrtkbAB9nProfMLTVBak1CAHAFtRvxTTSG4ZHQtSNqv1j7Pu",
  "key10": "2tfcMkQFh8muPEDA98ScrC3Xh9dugY6gGvyPBnJiYLHEHccGCwfVx7LKNfBksuUJmqytHnYC2WQiXdx85rKn5cnU",
  "key11": "4dv1PYrDC74LdxGcBeVoyhUfzutugLwe73JXTUSwZGodfjEB5rbgE9Xe69P3NGvqcomEDPQMu46geYJbWZsGRc2e",
  "key12": "D94zjyGD32FJJeNXtGtXK1Zxa1RWypAQooLkigQftxEEL6JcS3X4EuPZKpWdRWBp8WLVQGgFCRry7pbSNZ1bAyM",
  "key13": "3FTdaSjwYQtuKg2YZ6DmpVoYyxdLBtuUEurL6S8APp48zDpsHVVbSVgA72uZZzCV7VtkdLxUv7V79ZoCHyoHCdoc",
  "key14": "5A4VdMbP9ERtKTzKKxW7ozba6hBN1kkbGEpP3yQ3s1u42mSYy2BxRcVxQNqmXYxP4nMxX8CZn4hXjMdnQTLwxR5W",
  "key15": "4q8JzVrKi8VBzWSQEk75Xa1pMVuZUZaHVXhMziqgrwoixtCJtS48ujYfKWCnx2v8rt26vjsiEtg3GpxYeBL6dQwT",
  "key16": "2Be9Ab6hJonJBJqTBDfRaWAaoeSCyfaPkM48s9eTGPrkxb4MFLWttBpvvw114sRhFzMBTvfTfa793m5HoCr22Lgp",
  "key17": "4tjc8c18ThJgQb9H2w1B4oQ2FmTddJ5KejkAD181WfQNb2T8aNUMWspxMrZRUmkGPhMMQHZLbavJmvSL1EDaB2bD",
  "key18": "5oKgrejQ3pMhW9z4FZqMgEkPKVEmL29NoteyerFjK9q3an5cAb2cCgk33cg25vHwQSfN1M6QNKN2M674sBk8o76P",
  "key19": "4Ae5q1iuyQHhq5ReiZgBCWH6FvW3287FAcMceVdS9L2kEs444CLthGftZALsHUz5fRcm6Eb4UcAA5pNSXi31Yt1k",
  "key20": "W4a75Y1sJi4Gfs9TrQAqGcp5jamAQfHNQj7ixkPoqRuVjPjqfiTp2cVkQjvNqprqUXJhLfNTku836eNA4tBJAgq",
  "key21": "5k8HygBevx4SqHmo17dBHmRggv82X7cXX8VbpksvGVKeCNtgJKXvG9q6eXriPfZzvscThCeyFW35cq6j9ku2zSBj",
  "key22": "2w9dVJRq1GpJUDUEtw2jVj97sTg4QFwikfQVyUgE8u83YURTAs3QN6ChByGnwPKajegPpGHhUEcFhaydHfbTQ9iL",
  "key23": "4Wm6XLhMCbGBV4rubhBGYJ1qbBJPCT7jd878mCuKKMdR9hEfnxpFrEyBy76VXH32AZ4nLDzDA8gZAsrUtVy2QwGP",
  "key24": "2qAwTtnDgJcHHyYMH6A1zWBoZQkXvwxCgQVAT9sGXWM4Le4xcezV5qbe3ckCSaPDBgZQ6RYf3i1q9KYjQFhdY2Nx",
  "key25": "39rFczdZ3PhvYZ7YP81TZHbR1zEc5MhU7DrUS9VU1zqZFf5C9GbzpHekzyXFcFmT9KRgF5rwtbw8s98FohyP2HrS",
  "key26": "ENKP1CervSDYpNEe8iqNj2qAbZ9UnzSFN8o4HGH3qAmqiK55o64XcFPaf77dJAqVtYmc4KMh5TUTdL6vhAeb4qB",
  "key27": "SHDCv1m8gVokgkDgS8fe7z5NwmMfVDrvYFJjqAjpDzW8onY5RKhmEPTiSJLWkQdL8mPWsDdGLgNZkdZ3RhMXyc8",
  "key28": "4BQSMoGWbDPqXkMHCyV4Dptnn9rpYSoWVwZHpcucaFQaYhKT3hsNryzoVqeJn9YSjXzwSWVTXmaWnTUBDKNs1e4Q"
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
