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
    "cNnKH27A6ZWZCF221iywfho96AbR2ozF7reSshH91Td6mG8L9dozC5TC32Jo1TZC45QWAhnnftkQ4kQMX43qzDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MaoLT7aJFXdPQTWQPcxauZtj27Ywjt1d8pEVUjfBM7Zw6stomqkAccBhsy4J4TmAfZMXwSmBZGKsSeRuZg9wxBb",
  "key1": "2cAMoWRArKsfyGwZXyaxncwHs6AcZCLs9ehHc16k7TM5f58He7uB6vR7KBAasj8T9oP1avFb9dJAXqgwwdyDwQ1n",
  "key2": "3yAqLBZgGu8iJqKsThrGpBTLFw26vethGThNvXxY8iXqPQLf76GtQiTtcEYrD5WBnN8bGBrHrdTw8M2DTzUEa3Wa",
  "key3": "5oBZktqSvVTTRGhrEKXVRHqacbYHk8v99SHLBoC144CuQwECwiJNcj4HEehCyaxD4M5gSqG2Dh6W54sHW9ksMps6",
  "key4": "tW4CfBuRSyNVDTMr3uVr21EAhsW9FQkf9d6ekYoNVkPSkMqZnDH7QKmN96vxQqCRp9rgycNzqpnaK6uC4c8nR7Y",
  "key5": "3qhrJUYcotrQuGUKgcG2mQ8ZKk4vKyueNs94nrfjxQZijMeq2WdZDgsHASzsTbY7qJPFteA7Y4kWj12dJeWyU2hY",
  "key6": "3tX5iEyYYZT8JswosEqVTXgxCC5zmoEHDS7zdebyJ6kFk3jJfwdmPYkKTfRV8JzArvaL3JdWvsyPofzGnpj8oUqe",
  "key7": "4vEu3NP4kmG2nZhvhgktfUsA9uZUvJtuMGh3y2rEmadshCYtBUhXUw6hc6CHDsSwsRr3nc1EHxhm8cey31i4gmi5",
  "key8": "3Nfr6BVQSishbrGBXwgg8K1RGGwD5ztkXT8aV2R25tpxVyspuecoC2WUbybY3RkQacqbFyuDF8Y7uzHyrGfgUT3N",
  "key9": "3z8Nef5t3Q3ufg4geNzR3kk8RVZX9qYYMoqNAPxTbrjBPnJVm8io5P5gKmYACGC7fVRL7z4zDMnVCHbu6JHJru3d",
  "key10": "4x1m3sF5u9jashF1nrU6RwWvtQvmoK1sPqAEaaTSRG9kKBZx2Nz2DVyWEhot2s7H6EY1ay48RbGwZ8KtdNGHTitm",
  "key11": "5Ugvp3hUxqukD42qydZt8W6YUwU1d55MTZ767oUK1Hqac2PChnn7KwC74CTvxAZRfq98c5zoFU2FWcmWJQKatFBw",
  "key12": "41iGBivZMVjzKTLLE4uf5MX2dfk93sRdobDLHGAFxetNZ1829RK2ERnbi5jQxb5GKS52GeyFMrdTmX2hSxyY4BHr",
  "key13": "5deNZ9c3v28qEGVQVeAPo2ZyccXVrmbdnbNeWF7DWU8PmV4YhQNtWsQUDea9iNknrEBWKBroEw1n49wHpfcpCnrq",
  "key14": "3qPut37hdvbiFGsehYEP5XRbPMbVvCT5YVNzbYe3cYc7WzVSZSx28oYUfpPkLqNBBqyahGMG5oub5YMmLxS74Km2",
  "key15": "iQ47Tbz2trjN23JCJ1TJyB6kr1kDx6u6aVCyAtwXz2o9NFzqsjDD3uJc9q7wGx8VqJ2vrSgGPB1dUJSZbEjC4ze",
  "key16": "3yUpj3upNoN6LWFWgdxa37dsQ6QkCkQ3END8qFa4vRiJ8y1Jr5k7tKYtGMqk7vEeEam84dyYgPbYXfiXDCvAvKG9",
  "key17": "5izvbKE8SD8DPLcRg4wWt3qYoe2o5WvuTT63UKYfxZqPdcQVkzHeY8TpVwy8WA69tXWtm4mafpCuMSrok57Q1aYt",
  "key18": "y8q2Q4nD3QALFKUMPm3CAhySdYmhabJyQFoLYxqw4nGshzHTmMwgXrAMQRD35kxZSJ3hPxBDGNpSuD69kmi55xR",
  "key19": "2DnXEAtkZTwgLX6mDzu2iRpak8FhNsnedcY7vfrcv2FaSZVx2UTc9NEhsHgC9SqJk66unJrzw73bWvwQ1AERaA5S",
  "key20": "23v2BvxiLvgvnkeNXKC3GmDFayBt6szDRhnJXRgq2NFKRWTNxQpsX9trgpw5pxVQfxtJTVSr6XtttmNEVHpdKR1H",
  "key21": "2xJ59SUopfHSW3B1Gc5xeR2tASZiPzA3vKxfQjZPR6M8AWXuEr9Hy4UxHoExR14MUd4DqkrEUSx192zSNinP6fTY",
  "key22": "5Ps5zjhBp6hEYocg7QYUqgfJBqWxSXt272YZtUdf9Sd9QSUjWHut9qqgsTcdxLdFyH7W7EjBY1knVSqhN97nGdL4",
  "key23": "AssqR8Qt21mS5dyLjBUBNi8YQ4rJvmtuSi59Wq3WVmUSdF4iyKZRkxSMoxbVsyvx1JYmBY8RzMSEtRuBr2jSjMF",
  "key24": "4oSG8okAAPnRQFTcpdzMXLoXL1FZ4j5vbsJRWyWdogdQjEyLGf1kD8sACVA69wz27ALpd7y6mWi6kfJSN5PdpNTT",
  "key25": "5eKjp7STKd8tNkKmnsC8uWQWsRA9H18uJQVvcxQ6zXBmXo3PiuytbjvWeejtLYwLDwj36H2HxUUCnpoDescErge7"
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
