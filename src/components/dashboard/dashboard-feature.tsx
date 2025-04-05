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
    "qzadP2EJWuJwJU5metvQDsZQ1hhYuy9mcartbMZ3DsjfBsbbtuvfBHiiHT1y5tms43g4QYRi2d7RguGoth5dscJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66TyMh6XNCuN3oJbjQKSqEnm3akXfAJccS25C6H63NyE3NJ1FVyWs4ZN7c8v1nxgbbmfQgyGtEw17Q7zuJitaMRz",
  "key1": "5JnjeqEPZzQYBEZicz1MJeuWWnwmuH3wGHD5ps9EMof7DgMT7QcUY6WsCfDUuiLZr6gNaYLc65Z3wGMb29C1X9Ge",
  "key2": "KWVwq2VmswzRKzuJ9jmrRJF9YPBUmQyFKESZNAyhnK2JsyqXnVS4uG8jKh4CsFx7YEuicwk7HcYu5xSPjQszjzM",
  "key3": "3maSgJqX99ZJ8rgig3e5jjn1HFjWLjAJb7VqrZAjY3gdn91mqsuT33T59ataam8XeGYCcaJeVdU788FjPUeovahE",
  "key4": "3h2wLnpAWZMHErHgzj4NZhdRA46s1hSScokoxjz2FVjVN3JokwdgzQPvFe5msn5Be2Z3MAh3rqaEU9X2g4wZAEF4",
  "key5": "4PwPEmnyp1vpdMn2AdC3tu32p2SsLVwt6taRcm42bg5CfJLH5PdGy6firTb7C7t96dorsCLLmosjFKRCXKK34zaJ",
  "key6": "kDMypUJjcVk8WAZg5dPrduMqJ3FshLyBthS1E5JwmjvevAEyY8yQbpamm4iC5JB3ezsYUkohmysad3EbuN3S3wE",
  "key7": "553Dx3QdAnSNMAtJUDDhR2aKXNzjAxSRE31HGVTBJeUL2E6qGvTbt3so5ZDmaF4wW3AgH7BUdmsxAYznkXZnbqpD",
  "key8": "3itE8kpDEH1twUy4Zzy4Wis6DJ4MnFnRLev4VAdkmWTSugV8qGhEo78EVW4PHZd4cHGnZvCoL1MjfzFksPZX763b",
  "key9": "wJY47ZMWz3NLURN57oAvefkSCzqyPvwKs4B4dXhFSgCRjEeYh1f2qqT8X1YnBD8of7xo2MAtk6ujVGfcSvokrhw",
  "key10": "5q3c83wiE9CZm1A5wUZ3nSH3oJjk3b6v23f37sWaH2tnuwRRnGmZmeACNzAircW14WW1GHZqfhY24WeM3i8TNnEo",
  "key11": "2Wo1Et4beiWMbkZxMqu51P1rZLZ7HaBNN1LEHgdKDwLaeF3kJwjRq4eqDAearZcPR5jgcDQNeEWASmBW61nQiwt6",
  "key12": "4wasnkz8ofXqxhZF44FPL2G56XyeoKueSiXVpnmKs1dKs25dpHqYmzkkH2H71iK1NpV38mRVWBAspbNoAhWRqqYz",
  "key13": "5TTz25ERGNstRMHLofxcc8wCvW6uJWJZUFxpQBdJ3YnvXwEdkmZjwJZAPr1fMhT2wZQztG1Jg8N3epoyC7XvbKnz",
  "key14": "4oUh9J3edDSiwYJkwhHgDH36byJVkyp3X7b5Zb1SmDM8Vj1GHEniKU6qDzoYL8q6XQA9a6wNeuwoTNBGUVnyDUe7",
  "key15": "6RVRCb46Zsew81ZvRYw87dbdqmXrwAvgoP5cY99aJvpe1Hj8LMKp7N5nGgXGQQugmFi1PNTnAhGLmEFJuMT5HhE",
  "key16": "4vNYaU5aMcBeJXiCTrsAhT7kkqQ8GgrCkEgLMPu8X46ag8HnmaLv3xbboeB3uwzKXP2KgNuRfJtBK4d8t3jAFb1v",
  "key17": "3APxXUotu43iy92dhh8RQCcpcrxVGg8CU6o2ZFJMyF7v9XVDpvH3ALKM6VgHP4zq3yNCT1gXowQEsA6VxA54NYzb",
  "key18": "2Rvve8CQm2YoUVb53XRhr1RjRzzLMnwj7qLF1PGhBV3piQpmyf3uhKdLc7P5wxjhQzCw4LKWE3UXTG823Mu32w1v",
  "key19": "ut4axky1KwGbcGCMwAsCjc5NGm4jJLX8tTmuqigG3vwUAEa2974bB4MM2NfFySVFAdHzrwn6Ey2MK3fCB7QuW25",
  "key20": "WiL6Uq5ELmbS7SVhK9BYciS1DxnAkXAUYrmuSR1offNy2wyVqxoytVQgFPpcnUXrp7QqRyp5AEBHyEzZfnKzuKF",
  "key21": "62PqLsY5G6eqRWbCoYZUTgQ185YjZYD9RjELGyiNSc2U8eYYyUHGwixhBc1YYsPnsED6mbogpX6ShVKHrYxJ3R6v",
  "key22": "Fjs1ZyXLhun8qf1wnuBShtZYJdD34Wzimf9PE5rrETZy4w1n88sDxQji7MbRScRu2CqgA1MmhCevfdoiwAFT1V2",
  "key23": "5FzGExYYneXaqxwYdtGB73uU2TV4BL8wmyBzkXqPLF6RoKMLvAKYiVbUh9x3choicLSSA1Bd96pcho1uGD7xwnkK",
  "key24": "ZXANdLU3QTAttkrzkZvQT7ecRp2TsYk7cudw9PXVnxfSqwy3BokHe9yrEWSq6DTUY989tL3wiAKaYCCd3r3s5FF",
  "key25": "3s2zJY8VpcGHyNxyF7vAtuyriqERhWVdsj9ynaQ6ck9zoKo5E9AefpEBDQxKhnEBE6zAK9pqSkKceCRxxLuXThUe",
  "key26": "3FQwWkEyRSFLbA2f9jwg19oXCdyyHtJrMhh3HpwLNcBfFkHqynfVdmYPT3at5z5G6pX2iKFsmoWuJoGENYLU5xeE",
  "key27": "2keGaxMxmnoeeHkvo88UoBw7ccZ5BJwCuucWhMp1MMPoxayC3rKT5WGrgcCnNwzPfgsF5iGUr3YyxoCj7SW3P2GM",
  "key28": "5JzMbAWKXE6nVZrCdiU4wiUXcKhji32qMn4mzY7JQJ8qSpVqY25N74HHiXq24jtWG326Lt3MiGDrqwnpX9sP9VRu",
  "key29": "SuUYrqmdmG2igWUcWn8r72NPUDjzGAr25vCv2KAATEE6doCBXaEKV5iMqm6ZGxEraj744gZArkPxptdDDLEhY88",
  "key30": "2r9yQwXsmSzNFouSBC7mDMHWAWceX8qhWBXbckU7BrTZNBdsw6xTPttTyjU6tB3ZbVzjcNiqUoFHhgBY6NB2NU3w",
  "key31": "4weSK8UsQpVGdbQgYH3Yz1EhoeXsTcUCDEnNAH9oRLwh9e2ugRrT6mrY7v9KV9ysg8anUbcgS3kKfKWwdrL9BAhp"
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
