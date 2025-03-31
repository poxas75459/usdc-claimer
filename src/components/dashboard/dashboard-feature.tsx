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
    "38M6A13aY2WbRXWuabf4EiV7hwUqXdLfXRgWUpiAuQPZC4xU9PqUgk8TYsrZbnZPNZrQDnRyUVcVS8ixQ19aiFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zjHMVRncXkPd1RDYpRwiePtrDVyjTChWvXu4vzHuNw5rxNksYDprWLtyx4wUDrJA4RyDppEgarjrDL3VbTqeMmF",
  "key1": "2P9UUTnET5NGGsUpLayToaCLYSH4r1N3icmntuq4A2kx8xTYNwzaXq9a6ySuCsjhshDqxPuJMmCsFdBXfDB6XATc",
  "key2": "LttQsU7jvRVDo57epusoQShKkUxdUHayZqvM9ETaDZsEDcbvRh6rqiT8hsgNLt39isWUREhkJqZ6jLKvcKmRKkV",
  "key3": "2dipc7xvgW1Y5zBAMoJahmmLZrF9o2VdKjarx5up18iAK3HLBTdj7c8QJexX8QrqfvHFA9U62krBVRry4Qphpkqp",
  "key4": "o7qtdcEgpVjBNCZtWBmKW1b1d7NDh4Pc63cfsJbToFhTthTLp5UExmtTk4Ac9ssrA4HjKFkQRr7KGDmRcfbot65",
  "key5": "3JL9WYakaG4XBb3HwVv4Kp7wxPQrHCXXM4pqc64JbAT6GiqkGZcyzVNPz7RFbkhXaXtxjUq7VDmetSQt74T46akQ",
  "key6": "2cWgEJERmS8Xm3jDUV6otnvZbadbvXvAUkHafoaozA6hAfp9aBAH7fRnxWaNGwWhpTXMpFiMyyvEV3Jjq2mYwMYA",
  "key7": "3bCFV97bognxrDB7F7L7ZzRebG63jXL1Z2rD2ajrmwv9q3LcKpHBeE14mn4VdaXQBzNbE25r5pKr9aC6nnLwosef",
  "key8": "36hkgm3oGj1iwUB5kTZ82AfxDdYXYfsXaug8dsqcrpTC6XbTKuSwdhmH9hVDUAep8THgUDGTvHHgEfdS2tiBapcm",
  "key9": "3kVcXx43hSRM2vBgtGqjmun2nGPG3UEsyujeczNf2gUeWHDDZanWfBXmWutQP62KA3qufZs8e6uytjhwH4YRtpP7",
  "key10": "3yvCwNGkAo9zbqsvxE8TXTNyQiK8M5ZEpjkTTJhQ12DPBmX3jpuszcHibvtNU8682WuNk6YM7QjJHkrnrSQd8Lpb",
  "key11": "4bYbN4MbQKnJXxwouh7kuFPpU3C4Dc9AYhsdxKhSUBUaQAtJRfhhAURzajjbpNZWQJZVBvRoASwZnjmPPJeKzQtv",
  "key12": "32tg13RKna5ux2hyn5PVA3kXqAbNGzK4wnEFYRbxbdGiQ8oM5M8umLn46AAUKBTfLw4PETr3QD1qrkg1tgnkrd79",
  "key13": "3GXRk727cD8cbCqDLPxxzgtteTbzQeqNKDvaUqhy5yW3mgGrPodsq7afG1YSZS5Y2kFfA7uzthLKpa9PrypiEWQ6",
  "key14": "5KyM9S3iTeCCNYTidDxUC95Dg6RpardL9ktq1DRhVwpFbCENVDhqFBiFWQJgM8uDjxJ99YqjD8Ux3DTEpJJNgAjg",
  "key15": "3MJgzSjxmync5VQZXauH5g8gDt6dWqBqT3sA71g2ZdR3xrNa7pAWpnAUcne7z5W2KpNpF3fVsTNjFyrwWZZyVJTj",
  "key16": "28PSBGAy862zm6ZbRKFxXhtaqvGj8JsYqroAVv5KJyXPPKStugpz4v3ZPLHia1TTG4oxFQUELWvEJZLBFgY8MtMM",
  "key17": "YFKF5T2TAq7UbCVVfVwE6ZhCzBZTJ4rLQGKKETZoJjD7JmtzCRnt1szUt1JgaXzhEzuZ73gn4Nc8UELsX8AGTTw",
  "key18": "HmT9uQhZJqu7cbvgQ2vUgveuyyc8B7hWvvbNzDQX2PQD3q5fJDv3dNL9G7cykSEkN24ZHb9ho8z5zEWVQpGwvAw",
  "key19": "o31mVJLHNDmFSYa34oB6j2VKJYVkue5834DKeaStY5Rt52KrMxJW25c4dRf6dZnnH7GHv2C4duxgcie6nqaZvpN",
  "key20": "3A54hv5esntDNaTU4CgQtJuGDNTP26B14tG7yLbH537eVwfX6ALCRn3mqCbdt4sWXwTTFMMg5Hx4kWyKpTziY8e7",
  "key21": "2bS3TuZxuBTkNCzsAGiqqGh8bQz3XvVKeaKx6FYLnHeVrv4hgZsPvMn38DNSgG2c3wNFskUrQgsKXtNKqB557Jyx",
  "key22": "3AomPsiMebmybSUv8v8ycHt2Qrt5DcqVZuznFZKzoN4Z7KNUVkjVhBPBGne6zg8rvVmsPzCiecoWXVaNA4CQKtnk",
  "key23": "3YP7f1PEdJqugzBtawJxjhpDnhKGcgZ96E2hZ2ZWFRRY6pFyS1HKu95j5YFTwKCYPpdbSZwioGdjtKmieTPXeiWa",
  "key24": "5Kg3asBn6zyfwUEkXYhjunN6SkWimnHfyY1C7vyATsF6vdQVHA2mM27zZHJRpVSU9B9G24KrH1boTCu2wDEKKPzN",
  "key25": "4Qm8hmRBNuW8si8ThiHmxrbebS5PfeYBKawfo5vA3T178JmrpuzQXghR4N2mmaEqfsFni9nFQxVaC7RvR8MooJdx",
  "key26": "ZhQFPoMshxmtNpETxdcrCHCimNEARS16r2Qedm7EpMG75q73YzW6ChRgm8ruGs8o8CUySj5yeBnx6GqU5PaCexE"
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
