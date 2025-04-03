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
    "28EyBFEVCf4Jj1Mv7MXPqqqrVMSSwxQPFdq4riyC3TJVR8yduJRTsUNTqGxVSfqKFJCtGNH2koKeipUi73dhdmk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mejViD18KcVDXooH35ko2SVpF2EQy2c4QtriufhMKs4aUeQDtsPDRoHFTVHk5ZcQStgdaTPog1yENYZZHqJcYty",
  "key1": "5eWGVPGTSr213DQmt8fK9F2BUhafvZ5uDXVSFL3392GRvi3x6ZNBjG8cAjid4SyAfV9ZjaQxTp3RjvUjpHsToP3N",
  "key2": "svNJHkgj7bofbTp1QpcB7RYX87ziGXQn7FJUf1tmS1ZNv5JaGQ28eJzbEz1x61z7Xvinx9HnUoE9gF7GobRdcp8",
  "key3": "Ysh2LpcRUBTBSBN4gfkp6xY19eexPVXu1Bt2rb8hae93Hkj9NfqQw4GpkMAyp1dqtanwvWKijX5ivXBSi1b1Rh4",
  "key4": "32oDfKLDFXBYmVn3WeZFPULzwkib4qHVxpDmeQaLTz6jCCJ84qoKs7ezEgD23x4dLNmVrWVB9TwqaLLLKY8KSmNV",
  "key5": "5BBLdMdN1n3Kdnuk5CmzMxCY3sVVV8STD5b6M6qFJV3iLQwaeJeUxDrPLHdjbjHcnGq3XdN972zmYWxbJgb1tSWy",
  "key6": "nG1qb8N1HX1dz57sZjrrqg7NitqesShdEaydM16NrCpZLE1SceR4mmWA84SgFe2VJMaTWsHZ84WCgcvY9EnVpAG",
  "key7": "S6NZ8JkkTomG4LE5rjxKTYpddm6oeftz8MwDw9cKCuNfX3QLekAbn8gdsdfmkmRA75FE6JZvgY81Lynkks3WGeM",
  "key8": "429nNKzRtzb2dmqS8BZewsAZYa5V5ZQXaxQBhQBoVg6N8YDbFueDCSyydVS1Rvagw3q91jaHqZjo2m83BEFE4r7H",
  "key9": "miK3Hm4Y3zJ1rRosfgpw9v8vXfgHZuoQqkTMQ9mzQjrvHX4VgqnKM4Np7fg3PzgEara31V69ptASFEg9b6Tt919",
  "key10": "4nWr7HEz65T8GsFwguZQU67PMLg9ZPSpwUos9iQWLdU86bfu4BhNDcHtfTRq8eqNiU6g6otqAEQgB2LruqQeDBbb",
  "key11": "5nWQAimozYwt81MVZTycM9RLqR2Apo7GHn9NsdZvxPsdACi6wTW545fbHXPQW7rQ6ryse65EdknKAD3BCLxf4Qs9",
  "key12": "3CEDZCvSVQQct2EGnycwgsMihioBUF3tJkXfyS4kdKg9jqoa1FMWtjF2ASkQsc2JGrtw9fiwciqSj1AjZCEoYZLf",
  "key13": "ewqr9HVALRD7eQi3uQhWZWpdn6qqqBQoEeVHAGyqmaTVtB4S5uTJDbcN1zBkSAsLGAstGb6P1ymnypWykStoXF3",
  "key14": "3XHFGnAdoUX95TGoWMLjbcpx8efVG83K6BVHTAJ8kVBHB7gwWmdkA2m5dp22iqK1fA6bdj9awpMnFvT5WbjDju27",
  "key15": "4TgeX1g2gt4vG8HH7BEojUX4ZBbsQs4Mtk5KRXFSwiU8nVWhU87jv48ssskt3ZnbwoyLfGZzdnZdCGVB1y3EuvuR",
  "key16": "2JHUkaXm7f6vu74aNBzpszshgGHjyaPZMs9LJZ3eTQJTKHUiAiQWC9LD2qVKGpXZvvWdVwHwghN67EooYjw66ESV",
  "key17": "oS4CwpagkxgSFhGX2g4bnwFdE7UsvjdY46pDdNJN6fQuY4VRyi7UVqdBttjawWnn53mrNAx1h4gKVEbbWByBgkA",
  "key18": "4WNP2ocfUHkmEkPtXxY6ZygvK6qVRqZdtfKLSTcFgZd8njAqGc7GNsaFjcH4vki2MPqLcwaRxZ6d5ZtqB7fVcPx3",
  "key19": "4SPgPsdY1eTY1kEQyExk8L9ncRtXSh5tvrwA3uwkS3vSqcviRM7aVr1oSAbX7aZc1GL8gkWYSYPZ6ceVZhqrwS14",
  "key20": "2CiGnrhbm2Tw4XLo5CzsZVr7rLSY5zewhvUWw38McyJ7Pms2Dkcr5KujRtEhuPpSEsfZvraTs6UWUUbFAcqdMbeE",
  "key21": "4Fkiv7fP6g31ZjRabzqEeWNWaCKu7RysnVKFueBs6hv3THwhrgKbMw7QFHhcBov6SATHLuYnqBkeHM55w7mwMPPe",
  "key22": "2nSFiLrRd3XgRG9Nb1fecfynfJoShKRJ2kNFrYx5kxGPvKGtqgrDZjN5RPn4j4DArbUYp6muSSSxyREp2KBKD86K",
  "key23": "43XBnVCzoSQHANyuK2EYDm5EoVc5nHzheJN4MCHSoZuVGpggXccctP2azUS14w5V6kZYyC9Fu3kPxfp3PpMTpmzy",
  "key24": "5Uq3nDtgejd7oLVS27EwW3F1iRVnj87awahhHYJPYr3ie3yEpebz6tsSDBMwoozeiJuPiRfkaYhoRwMzEQUxaTs",
  "key25": "2gAhQUQWuQhL71So6sSHnqbxnXJLAmUjvHHqdaiuyJ7FdZGSprXaKL8AbfCJQgH28z5gN2KanVfoG9nwVK89X374",
  "key26": "4tSXR7gKGfqyitvsTZgX1aYpnmvdzB3KXZp7TsX9j357raw1ugMm6WX89KYuqF6v7DmKeGbo4F1jFjS5Yhm94iWt",
  "key27": "5rf3sLpQGfSx7a7gQbvfz99Chdjwm4t2uZ9MXXhVnnSNk747dCXxM1hA4z2VFEZ36yKgt8mjz15aApDGVJLUaJwf",
  "key28": "5L2hNAqVW2WhYsPYeuyzauAu7v8GuwAWwDWHPGbfGmJWA9AowoKvZfB9TJkQ1zTMqfvUn985YMDJ5mabsvK2nr6h",
  "key29": "3dwJ7uTSueASsbdqif4ggN7ucyLf3gnwHNZBR3UKudrpWQ3BShudxUMm32UEJFnXxeUA7PjXF8uqdYhv8cFfAhnH",
  "key30": "5zrETXrEKhaLFQJeo4NR6YRUuvRq6eSTNoiMeYGg7yrMoV9p34hCgCheJGJQ33sBC8pfD19GxJJ6zdfLBWASuiaU",
  "key31": "W9CqgW2hieCHY4QWW8xVb78hstLguwXZ6WCiaTYeTHTJXyj6fNzF1werpnBCq8Vfucheun9CbgkvfBZvs1g5yQ9",
  "key32": "cc3qdWQY74CKTQqKbssknEQsgHtmxsjefhUoYm5Fnc4EBCuSVEpG3cpXPB1UqBFfpc5dKVbEvpT7g8y5Foyspff",
  "key33": "2qT6pR7XuynumtTAsVafiufmYVp4vubssf9sLhc5TXzpS9QgQ6dHi4siFrHE74V3JF3dsqayJQMcXr5qcbZb4W5H",
  "key34": "5ZXza959YgfbjYokUnJXRVGSWKSAABDB9a58yE7NnYsMrm2vHYN19gTqtHp2ZdU8cgiD3iHD2X3cbfV6Kyqbdn95",
  "key35": "3XY2ZZXneGhDqFDDDdL6N3fkXmHLupLJ4nxdNFKBCRUjwhc5FkTXcdBRU29abBAeEqpz882tz8zBQGQheGY74gZy",
  "key36": "5J3He5YDpCqKK8Rktgpc4912M7sGUVRDNznPK7cF3dVnfmGXLxtgKMiHrDy3VdUcmirtkS7oqweFyercbBgiZ8Ln"
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
