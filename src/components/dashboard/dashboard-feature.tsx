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
    "7pYCk8PmtTSys3vHvyZYAF5kfU2aiTGpY7KUF9RoioUNnQjQbN6nxFZiwmQmmP5Ad4mB7HBR9yL1xHoeDJ5SBM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dozmo3QJuuEq228D9JhzajqsBXjMkjYc1PhyCkDYZjoqz6P5P4jNDZZkdJ8ZXNJVJKiaPExubajgZ5MgjdsnwWf",
  "key1": "3cNDJRgyuZqgF5xCQbJS7tSup4jMijFZoEk9gGLNFmonrVjQqxHY8XArHk1Mtq2UFcK5zKb5kMC1REgJV2wePTBg",
  "key2": "NZSrcZZ46YDDgLZpcRkyLdKWgR1D72gnBD8DX4Y99oXhKRjejceys51nax7Uo9okQWWF2R5Tqp4Tozq7abGNZXy",
  "key3": "3NiFR84Ppz2dfv1DDn1PcKmZTvXHKaeA8EbApkciuJk1LezfGhJjDJxRjWMgAvWTdSf9i93oFKJbGwHZypHoRLcR",
  "key4": "FHcbnrd1jc3vkjTzWjAwhoe4dAeAfUpBQUs2TQfuMYP5GK65UajSFfKwgLjr986zXz5V3V2MfXBAuKA8ChcURLb",
  "key5": "5Z3EjBYMn1X8GaRtjSpMVY12sK7BEB2HdHbvr5LtHTD7ke3tAoZtcsGykvKVNcoMSi9MgVzsqxWm56fLhqD4tXWS",
  "key6": "vLrontBQHwha31mV2K3WiyA4LzvShGddTXTvUT8FJFNhbw6UE1UWGByVhW8pZR7XUbRnM7y7VGMhpkrkLWKjj6c",
  "key7": "BGBCgLT89ZwgsnZZFZtiSq9wpFZuHFjGZ3DW4KXcQPiGai7qYZvYWAdYaPq3nk3LtsrsJWPhqVBp79LT4y94eB6",
  "key8": "4E2z8fKidky6o4mqX5DSA7umH4qPG9dxqSBp5XY84zgFtY3oDEHJRrcvLosZsdH2f9rWWB9LTutFAzF4xkb3Xixi",
  "key9": "5P5y3QcE147QQ953STS5FGg6mciW3L5etBwZ689umCckBDzMmajx1JyNPNhsq6rhFAZzzrtMuHTZBFsCGu1UEGEh",
  "key10": "28TfAJXUm3WF9hxPuyiF1GkVGWApbJC5HdUKxPuFnNwPusrqKJkPjeb1xv193uA4PstrgKMSJqZeZQuyn4EnJ4vK",
  "key11": "5PUsauTxLuAfBFwNB21jsd1VBhDtjeYnKArFgB4mcKiATsNwcG5J6Bj72k9rNfa35gHnvyrUsG7sCRNrran2Bw2N",
  "key12": "3yu9KxTHzgdZ1PYHZMUJquXV783aJTroM9Jnd95MjvFr2EgTyJF4F5NGWcsF8ahDN49hHegSH7G2BWWFqSk53hWL",
  "key13": "5VErLaToxaBpPr1fotUT8XvGBGFwVVioqkkfExePvkRiqbEvz4BSC49wwQ8YzBmA5ReMsz363y9D29QuU33Ktdbp",
  "key14": "23k1rSVG6PSSYHiuSKrLNzEEDT3c9oLw9jXiTpgX5vKfYhhbTzAg2BdkieWQ5rQGd7rkiHqXbib2kNzTnSukAwPd",
  "key15": "22AiY2NRcALr1jZMgs1bYs6hD7HQNFjrcKrChoqLbAhAfMVBiAe63LtRLXK4xz7StyCpmN2Fd61iMw3d9EGmF9FF",
  "key16": "EbR1YPoAiJ1ohamLwQQYqj4RpPw8BBodRovaMuimZwoAWfHx62qurdFE6MuruhgnfLcxED5EHYYvjMSVBHQQArs",
  "key17": "3vnsKxUSV3S91ytHn2dvLqVrDM8LFYBLrGph33LjDzUsdBqAXy5nxqJkA1dbhRJPf9jHXF8cqUgTEgpYpso8z1xf",
  "key18": "4EMe7SiL9ympsUaJ1shSBUyevcVT3X6QshVfeGY4pZCP91pfvqJ9nfsZoNqp9rGQx1E9FFzoeEKrTiv8u5Uzagjs",
  "key19": "3F2zQhzj6B4oWJPePSspphsP3nKMmrxZuAGkQWpH9UTxoMyCEwUKJ2sWZEAdLaagJj9uSu5R1h8jTD7zBH9CAGfY",
  "key20": "qtFUz4peZ4BX1QkLUx58gRGb4gpRcUhPnfEjcPNe7JCqFEFEAQjJniHD9Yhr4aSrY8pJ99VEsdXbGQicVqY21ui",
  "key21": "3eNxa61Sua7Ux3WHEsHywqJiUCavXm29rrqs221EW32bMEmQaHzp3TFLLd7wxxH7WkUhKTtiLPbojwwb9vzEYR1P",
  "key22": "2ev885XKZjmHdr9hzEyanUEu2GRKcFfmow2qLf5qRDJFVeo7zerRAVFwt8H5h7mUcynwBk7PQ1anoWGrqzxrJbKb",
  "key23": "3eC2wReCKsQYsDbq2yiTnmM62PdBYCRggxDQHSb92kwyJM7iHurEwBmXRwko8E7Qjyb2XuvwYtipazGFqHfkJ1qi",
  "key24": "5aYoxTRtdFMkhgtQxzCvwHCuX3Pu6MRVihFo5h6ATqCkHGy98ZS74nybf2R8MczdyQAokoQuFeZh2NiLAoy24wkw",
  "key25": "41xXa8oQK78ZfhzVzX4z2B5Qf5hnWAHLXXTZBtUSNEr7kfDjj1rLpZopvXci6uQA14pEc4icjepqqYvmyeW5rE2K",
  "key26": "3KMfEh921RfMbx2dVb3s5T1u49RbVqb3mrCzR9TrymYMmRsPhPcAzbjxiLe34FSYWbW6UVMiUV2ozxFp2P2N56Cz",
  "key27": "4PmhQN5bdyXd2KvBcJwwDzpF7Rq5r5R1nr4rfdGGHx1NgBtzu3KX8KJX7FfMfkC5HknvNj4vmp6aP8NtQLNr5TUb",
  "key28": "2Deskov72ZLdxBodKYMwq4iPXHuKwwJDJuKfK7VmkK4RtwNwwtM39rgj7LUmyAsJH4RHkp4LuVWFbRuzrMAi8p1b",
  "key29": "2MhxjKndcVZvqk8pQ1qgPJB4DrL4kqLfkXrpxxiMCN5GMNTXaz5HpBYGy6ciVbHZu76vdyLxcFfAKZ9KCGHtcSZW",
  "key30": "5QfRJnqpHHwD62KdHHzx5Mk4dj87tMcLgMpa9Uos7B4anyAqWCuyktmiwEg9QUFaVgm3Lr26Nu5e6bow5kCdxfZW",
  "key31": "3NJR8Y6fG32gRE2YzaH8v97tVKL5w1Tk28KiJ7piCmK95hL9t3UDJ3QKBd1vw4avML2KeyGDopMSHHHU3JndYzpH",
  "key32": "38ewEiGcrKYGBUUYcKUASCfYGgkjx853axoW1QFt4ax2uQt3ExHhDPVdDsqYift2XjnyLDtJLT4bXBLskqRDpnKj",
  "key33": "6iFgqo7YDonPhCjafvCfDfmdMBYTkwxGWgQ3Mpi3ogJCNS1Dj8tjjsffju3oWXaYLYR7xt8MCWVUbay2EXABUs6",
  "key34": "5bBwB6Y2w9sg2dhQZ2FTiyGFiPXjKDgN1qjCFENwAxsHrvK15sEpmEcWoDH8KVnAH7DmGie28sTA7DgTiNfHp4Az"
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
