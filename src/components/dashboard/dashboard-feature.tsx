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
    "tVPWGeTvZsEhoZSWfxPCM8Nftx88DXuLNTaVWqwJbDEQhzmqpq8BetM8HzZUnxA3Pu2MiLf7XLc7TKL81G6hkPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "riUmEdS3L94S9cfY47r9mRqmadEZAi7xLXxSS2YrCs9A1YbGf4u9nke1NjjS2Trx3oXdQECfWy95SmZsvk5EZvJ",
  "key1": "4CSigdfHdpf7xGtQjtnwrzYjj9vkhhv17uEQAJLrxmTYiPyLwbQ1iVi8oLFJhoCJKjvaEdVQZYd3VKxoB138sC67",
  "key2": "4i3ZqSWr27ibb1QjxbPt46eBibwNwRBRkrRikktd4HY8JraXhWsTnzKgNJ1xSfLAPFybZ3evFvKGm983Mp13BKkQ",
  "key3": "3aty4uXGKwrqBp1FosBsfMQ9Rnp52aaR3hwDnTf8xcckFfkpb74d7K7mMM3WWaWBGhcQsCMkgsDptJitNzCwiXau",
  "key4": "d5TUfMiXhtSej1btpwWrUS9TaugkmJ5fY5e4X7586vNFZWtjJawnz7QVpSswTGxueaNykasayacYhbNHyb28BvY",
  "key5": "5mrGprBfHge637KPFkagjuWjgSoFSX3yTdLjCPZaHYsKJBsyvSC5ub3mMCN1hjVWKRiVvA99iTrpwgdajydhZqSe",
  "key6": "53i5edCxyg11MWpqsJ4rvpjVLCWD3Udvr1RRaC1vyMhLrwjWYareFqR3zykiwXFE68NEAHXACRCTMoW1sFRiXWKS",
  "key7": "3VJ8v8pgqChZ5NLhQFxJY4bUREai2s9QqwUH97bVLSnnqxdzfBVqAcDnZvZsieQSHrVSC2PUCsmDu8Hob4Rsqxmv",
  "key8": "2MorfoZ8FbKT3SyQgeBqFtz3PivyJbzGbr9KdvhnyqvF4XSJkbmvDwaTgeyc4AML34YhTtEuQwou7vVmnhBxLQa9",
  "key9": "5uCSaJqtPXm78DvqmuacKarnFYuMdzha4kNoAyN8rLqJ2xJpbf3GodoRDsmN1RGN9cuuJRm24BMrMFBNgstnBi1c",
  "key10": "pGW8AcvuuVFffVej4vjZAus87t13hijnvTgZm3GxwfsNTtVGD7sj8ZdPwrHE8Nx9Ef33551b2FLj3titPN3TUqD",
  "key11": "QXDu23nCi8xCganbPscTqRg5zjtqwKN6yJY9niSL659TWujSfZp6cuwUy3PGNNWtgGeHikHHr3pKjaVW6RgVEVu",
  "key12": "4GupYpwrHi6B73NH9sWcXQXSnqTRPxdTiv6uJVAN5Dn9jz71dXNXo9Ay58hYQkShfvs9cBBAMQKxyZxE76eNSE3p",
  "key13": "3hFmMnAnt7QfphNBYHUTrK7jFVMKtG7iGspxzQVTFSVAnfG9i3xwNtHjxqQm5nbvLsmP3gSH27vYff1jTag1EYfh",
  "key14": "AS2Ces6Dp5keBDWWpxuUuwzAyCJ1w8TYNh11CHCzzZpxZeThCGfJEmSbRiBcHWHLjV3z4kQZ9ce9okaMhCwFRDb",
  "key15": "59sL13VuMFDsuj4NHJuHEPb4HH6STGyAvnjswEvi7JQpqmuQvdEn97YjuutGuFeFpbtLtqBf2qMMzBYCVvAYS1f1",
  "key16": "UaVmQ6HwbujAeAijh9qvBrByHdjfTE78WrhvXPhuk9qbTcAWQeR3Z3QomwvjtPUi3jGQpnmfxCCompUqAkNb3rL",
  "key17": "5LjvahFerYHgZKWrb5QJjSgqcrwEnuDY4ZzMdZFmtF195pz6WJjtyTDNJC4jcKc8j7qN3BcnicAxb1iM8ZFPuK5A",
  "key18": "5dDw64kSYTm4oSxwpzXUvAZuo5pDBvzzo1bP9jisDonkkfpSDXoFGtJf14YqHNCaYm2RZWfRyfPeV5r4mFx6yPqA",
  "key19": "3jP4i9Epz81vyPEmfPzahnQckaVBc43oComd5L9UBPCgy57NxugSTzbj9SWZdgUcDRLvXYoLHRCw5vwSNQhgY9PH",
  "key20": "5wqQioxd7RCZ3k28XQvEwomPuuZWciSj2KFPSEf2HZeAugZRbDhfo4gPsdahMmS8uJHU4rA97JcFLTvkmbEz8QvQ",
  "key21": "33yqtBXEDpyjU8R6wNctpDxyig35xh46Adbw8kMB4wV6dBv3Wz11tXMds14CqmCYuW7vWqzZ1DCqCQTHhEFq2Akz",
  "key22": "46YsVibcizmFfzZFcDN2a4aVuxe1xVQkxByK5wuvEgBPCtpHZnF7iVNCCeRbhpqxS1hJ4Q4yQKyHDhvicmYQX7Ev",
  "key23": "3Zq33JvXh9hJQmFJHoy6NdHWWGTB1G6E7CrAfxfbogmQqap3Vx1YFkTiDiLVB1D9LsC1ehthq7kbVgRQP73EhkAL",
  "key24": "4gKAGbuFdbDERDFvGwMhWFkacYiL6u6tugpNCuyHimCceE5QGrAMxyVentk8DnR6uPvvBrQaYG6Sdc4wTB1Y5Beg",
  "key25": "bqKmao35frvPtiZhZQv3sXBS3gUgYy2dESEyXuigFCQ1Bzc9hCcpC9tyfCNQV3ebAWmdRd58uHXQENRU9694gvR",
  "key26": "5uou1vff7pjTzm5ENQQtgMQ1vzj6nU2HdD3YcwA5R8aLrSgNgULvzD9kj2FjH2ZCnimcxTtBXY2n78iWVVWxhp4s"
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
