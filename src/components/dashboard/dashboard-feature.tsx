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
    "5eTVU1oMgutUFyPd8DxiS17XjyyvA5WsnyyoyWcjWzhnkkfnyUsYcfTBdya1Mnqx5bgxfLSGuHKZbhAovGEkkcuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2kk8KZT6AjUe5fF823WheNyt1ecJUQfpyEne7TCt9Eq98jExX4XirjX3HWydHti5jUgkMwA7kJEDNj1gpDkZCX",
  "key1": "Be8BDFyokhTPbSh3ZSAqvPxd4MiLVxmPQypZSc5DDS1VEB6K4Gm14akBc1GE9Tg3gk1v9vVdB6B7mGjvGUJoo5W",
  "key2": "3dAhcon7djwePuxgTv1QHxC4vr1oBFoAUDi8TUpMqjB9rhxEtQypYtungM8yvQErkgipXDMQrKtrXbw5461ucrsX",
  "key3": "5MMQBzDf9BmXFhGb4MEb4ZRmka49BHXY4HML4CXEYbJhrurVNDqHmZmUZnuuwLUYKxxkGUo6LemkvghHQ4bBW5BG",
  "key4": "4z6xfYNXyXgJ8EY6EpkqJLrhsRvTc3YhZVPtLYePxNmUCWBXx4JYTXSA9AcWDgRrHmmkxPjW3iVsgXEEt7e34Hzi",
  "key5": "3E2UMdVo7KCTjV2ncvpntHGLamrqbRhda5M1KzVdmUmhpXeSTz2WgmPs6chCukQ25qQQdNJKEVm2V4e7REmj2Fya",
  "key6": "3wHHFFENkHpEYPLPvyaZmjRUvG4SZ6VL8MxW58hBF1w6ewyaAewmt2CPj7KKdp4XKYW96qAokHpeaK3cZ55qH6MB",
  "key7": "2cmWe9tQ3NCYTfQSZMSqhUSqHuEBVtxW6yFcWw949BfAMko7tEGKX8i8x9FAjnXCrWJrZuDrfwVefPh1t8b7gbNj",
  "key8": "2DRpoX9bNeC84RykYvzyJSPEDS19sdLHEwt6DTFutqJXdXy3rmMvkuj5okMtFyF6HCMU8yZLzrRZ6WDqX6EHe5CY",
  "key9": "gRZkThGtK6fVQbweQhvvTZGRhUsSw5VRB1SoXFe8RAVzxDBMD7otzakqkaiPn8AUQXLxbbHikfvTN9XwYDy173i",
  "key10": "2Rrk9cFCtnJsxotUzad6sj3EZedtxzg3VC5uueNi8dkG4wBGjNz6zpN9mpv6eRcaHdbcs9NpzLaQhS2KhkXgJ4mr",
  "key11": "3G4S6gc4rjawpFiQpEf6d2gyNY3Xypu9rKyiEqATsS12Hb2rp6bbHTu8nJxrdtnc9tF6xVy1aQz4at5DbdHtDUjS",
  "key12": "2AZ741JzWAReR6pazmP8JPBQLrdzp59wRrVw7UE7TkcLdsREvKjATg59Cg3gbFpg1bbx8zTjTXu8UG1bdFPSwQVJ",
  "key13": "2qeFdySbGDBqUbognGJF98kKmZnFsntckFcG4fUFZ5XjHN61tKiSkhrSAgzh3oPFfy1bi68gkUeR8eMDirKEZppR",
  "key14": "315A4JQi24sxJofHw78YbozQD3a4gQytiHU1FzzCCwUwhRT9KwT16icEFer5BfMNLajptuYtjaBRC382tsojGqgS",
  "key15": "g7rp6oqGN78YCXm1aELJXYzbzsaLY2rxnyrnYbM2d7qqDsFFikQmjYPiCxRqcCqGCZN5Cy1KJCg6Xpk2oxvVLSK",
  "key16": "3xiv72YrgEEM8AXNjSyp8CZHYpELFa4svweSrL63Bq788dhWyaQ9fCtaF8p5eJ3Mbbk14CMkRyfNAiu8xapLV7BE",
  "key17": "3MqMvT24aMfM7ZDmDtV4xGXei7D8UU3yZAY1QbECjVEp4ivEbxdixf7fTnePQEYMUPg6KqpV3DNiSuzKjAwznLt9",
  "key18": "45sa5uacHC4HybLs951JiZtzAouQzPN5hdTkgucjn9wnkRrwr4UMPxHgWDeWo9Pz9hKrCr1dk5oUkRatiS1Vzen7",
  "key19": "3Y6mRpYbzdRA2y4YcJspJXeZK7j8ySpahgF1MArURa6ehLy2DLZjqE8E144vaDd6FXz77BPmehfHg778tv9WaFrh",
  "key20": "2c66LoxCD7KSzz2jao6jWS5jQktSbWZRwESkMnkq5N6MLeXY5KYtpNHmZAcNVzzuW6ZyU94Hd5vyiTJi6ExGJU47",
  "key21": "313cgDWHmEHgsoNQJr9ktMKMUXebg4BJrXaNeZURQ7JTmkmf1BJkMpZ2tpR2mEzXNEyEZykFVXhVqHVuUPDvAyaX",
  "key22": "2AvX12dv362gHHpddiQGrm78rUprBrz1npsEkXbwDQk8EVY7zQXChoGgYbJsFnwx7AjL6KDnvkZK7HCdTGRWNzhc",
  "key23": "ZDNKLYUQ8PQi4ih1kn9gg11rR7jKfoboK4bVoUXfbyPvryjv2itxP4agQ8bkoKta7GZMJKmuz9q9v2wGNxJk5tk",
  "key24": "4T3gEbHhmjnCcJbN1TPYvkcqTtAYjMF9BPt241WBi1ZDQbKQG3VMki4ZZ82QTqEqRqot8czscccxWUMtD4mxEjPe",
  "key25": "8Us7fjUuutStUDfowCogRQgJ1QUZtozCN8ZjcujmZGvsnDZkye8GEcpmFuUWoZPCMHmtjpQycXQye11BXApD8U7"
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
