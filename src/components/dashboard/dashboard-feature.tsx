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
    "2hDdwcq1bEDRCHzmEUDrfEaZdfw5S4cS7eGbMAL1m7TAsB1MUnoSsFVNZTGk2q57eXsX3w2jCJt3c9jrkRXNSZD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TyfZATntVceaTPR7wHcBHGrsdomK3vi5yMMSr4akQpvPHdButn9qjeHEnbbgzx2C8Eb7tycxpNa4NrxDznWS5yH",
  "key1": "3piJ8qdufCNnUzzpY9KU1qxkHVTVAwrFvtNjmytATcJNZcLFe3SjJyTXP4xDiXvnucvJdJsUfBtzo5miijiQur2z",
  "key2": "4wbFamPUuT4hhpTuq5YAWaYzRJpd4G1A6WKktoRTBWHnuagpwn1TTvUS5yLNFimv1rewh6YiBm5GUDyXaGfHfSXD",
  "key3": "2AF5sn7N2a1T3aoeqxXXjEM6G4stTGGBrEwGb2Wa9LnZQW2TCQohNFPSr6esKVcQwE2ABTomJ57rxyDtXvCSR93C",
  "key4": "2mvB1YEM2c5bNyNSBfewUyXXX1vD1UgkAMPNy34FgvJxg8fvoj5oVyMptEr6CncE56qYiW3ESnUwWrB9JEutGoC2",
  "key5": "4KGmcoZ5sAF91qoCk6zppw5LKzk3fi5E5fFkRJTzTzXQe5Am7sE7AswS3MAfpAD5a47CnP9aMpkggVgwGo79z4qa",
  "key6": "54kW9q5918YxSJNTHq83LBsn7YFMYi3WzbA84rmWTPZMY3KLWCehCLnkbZrjmNTdbydkFsUN43LSVxBHpTJQiCFZ",
  "key7": "3mhCmHei52V14cdWsZDNTDyK1XyxF7fzDyRGf3UpBPWx3DGKMnq2qLm82qeKZuSv4CZSSiTxXRgKzpSRU819xnwS",
  "key8": "fak8CzGBjMLcZ5qV8QG6pAkx8FXXEWpQrmJ64FN8V6V4yTMqMHS59zJpwuLRbcfQujZqWUGcYATeZ4yPCggm8Tk",
  "key9": "33YiodasSvvq93HhR6zTjSsTe9wvYv4MTphXxYF92D671oqHpKKt55ifMiRf5UnTHNVvi25EbRbux1eVJG6Tbp14",
  "key10": "66VW2eKKoP3FUNc1MVxj8o98ufzsBjTTg7dRTuR1vPBVjDEKTCVKQAA7szvBzgsQXyrqDWnXmXGYV4pm1devY761",
  "key11": "5iar2Bhwutkgjxvm13JKkpNnkhkY6bAC8a1kyJDH9q5BqMUqS4zShEnzvspoNE5NXW3Tcs9CA6gg2BgyHLRyB6i",
  "key12": "MFdGCuA37CPyVnKsUBG3dsivRHj1pXBY594wXWSNE8wXyDwgngXB6i9BX4mpejm2B9CHLAizMZpefCNFWKfBAiQ",
  "key13": "5NExf5WFpRd5vT3asV6Y8DGhBm4937y5wJLYMiDtoyS5QZBNkni3khSJtziqViR1wUJJ5VxKCKbYxL9JPxwq7fVL",
  "key14": "4UVLUZds8BfN7V5WRMTae9kL46YMMvgP4Vj4aZK1cUb3SbfUKrxpGd5f8AUWA4nPw5zAmsUiYTPyXfWDLpsJazyX",
  "key15": "5AwWrgdjGostS3GaZfVSaWtoBnVhgXXVsnRSv1MCFoihnWrg4KPK8HiSUchZVeHw6eEZNNGfmVSGDdUv3itU64Uk",
  "key16": "4z2YmcKNx1f5hnixYTEH6qYQddvKYCphxwWqRGNUiZifzqBCgKLUfsRYQujjqkR5Nzzx2W3VmDnmTUwGuYfvmiCQ",
  "key17": "3MxtaoiRcqv217u3gLQ3x6NTk6UMfaaYe7fsi7K6ZjKWgmYD38sGGKmj2z5tX751bp8U86yKjPtPPxbzH8fZgwo",
  "key18": "2K5QVB4GyoQPzHt2TLJy4cwGG5YAeaHNT1rQAZ3JgWFqft7MKGqULCJwUjAdW82RoFgXJASRW1ALTysm64w4rJra",
  "key19": "2ikdT2i9g8JActAJRmwEfSMN9YoAH527QcjB1wck7q3Unsbk97eZaT19bQw2WviHNdsRaKzohJnN15u4CVwPvrcR",
  "key20": "2pBMmgZ6dcntTXDqVeYGUE1gRvNh6Y8cbR9JWyG33BAdwjzePsF7UFeLqFBYUwStW44qnhKScGKty9GH5ACtMeDy",
  "key21": "4nS8KoPpRSmMkYr2Hj78Ly7wggjz4RhnwVKD28aEHuWxMDQqY36nXZGzuCbDmj4c97zvBXm74JNwjwq1CPyEgsJ9",
  "key22": "u52QxHnQhgKxigL8yDja9fJtRu5XD3vLYuBRyWa7jcSr7RKD9TT72inzVQNiSpxvQkrTdTAcF6U9o9tswzorGDf",
  "key23": "5S8UeiP8fBpBJWUG9LAHekMqY45GE959Wk16YXEkbuVK1vRirAdBCC7SbBDmoUYrMB8nnTiesQgX1QJY87W4HvDw",
  "key24": "3DBK6CxgwqvH2W8sErhfxqvCqSeX6rQ7o7obeKdf2jhJmQcegczA215ZsU33VwkQj3TmzA8tFiUQ1TZnMoLJ3F9B",
  "key25": "2wXKhaF3dkKZbMoK9qNcwjx4mGJYx6WEfmNhtXyCuacigkesKDn8qsas63QwYAvNnwAtpgVxXXh71rqRCahNbMQ5",
  "key26": "2tEBKhTmmb8SrpE75gUtTyLDpmbWohxo64qh3k5JbrXUSYBTZuzm3n5hShLhEnvx212wFxMss5GztjKYJAEed9hd",
  "key27": "4LgKXwtFfE5EgUyRq3hyNio8S6VKmVRqrRumZ6Xb8oSnH9y4bW3y7PePjpzG6FtN7cMN1HSp9E4xDqee1uNw6WDL"
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
