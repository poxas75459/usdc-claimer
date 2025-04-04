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
    "3LcLj8jPkdFtyBhzos4nykP1zgFpdA9ytG4Js1HXkwehNraGFdPEnEFDXmFRf6FawzHcLjMgSuuRChcYK6qgJfv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YdtvfV6kmRSMi3KRFRTXw9bMMf6mqP7ma4zWbREeaiobWzBEPV9PZttoZhNgYPds16o9pBFxfVZUrUqfMoUdBTF",
  "key1": "4o3arKxPenSApmgyk2NqA1yPr6atiP2domPTXQFATy4hucrTVYGhVu4xyYwp5jPh3ueGAr1n5ZdBLuC5B6VZRqoo",
  "key2": "4Y7tRFYpqmNuMU3FQwaeVbYHMyPYjMxNsR3akdzkKuP7kM9nJtLeBHm761C1r7bJ7GEHYUPxAcVB8K7WociGUQWj",
  "key3": "5iUm8jXz1VATGGthhmU9EPEwfrqPL97THaF7sa92Qh3JEMueUWMgiGevRit4FcxNZ8zEMViGTqvxVLw4BoqzfSQY",
  "key4": "3nuXJ19srYWeC6dVLCavb9MogUJqFePL4rp66ZTZLT4cPnjxmzoaQdaY2axAPWU2j5rQ9iS2tg4ExoPfwaNCQVa2",
  "key5": "4HNQ7KxcsKEY9G62wbkCM1QzNJPmuSNeBm7qbURzGoRQcEuD48rryVAA8342kwNdFMDrr6Xb1zwYHmbqQUk5LpaE",
  "key6": "5AnHUK6EhaNBmfTjZygKGdM4QKrvtwTVwA9jtdqvvcRhswThghGy584eZZsHGdnEWGexR6CLtbZqUDiNur2VBJkn",
  "key7": "5LKiJU5vX9fXxNugHACDKUbbuLJwW5kcapHJCKJDnmg2pjxFSbR9xLhozfnJz4DibLd1eyXcC49sBvhptTjJ2iEB",
  "key8": "3KN4WCJBxN8UU9DHg5YeS2PXtzvXj6DTk8WR2iRs1SLhL7E3ALAr8VXHgGEwg4yAqpkFpFUgGnKRseCdwiQQD4qJ",
  "key9": "5SMBL5qbZ8anVPjEoUAbeFJDkxUpM8LFoRQfP6fzkpTxwLAYfrxraBiNLMbCLKe6AYvLvf8ajuLJCtKJ2qtdT2hs",
  "key10": "3wySS3BcUpmcJpzqHcTjv85A8rq7vAGFLySk2m87eRgDCs8EnQ8213xVuuuDJziiBXmp9bxLVCNyns872MmkMfat",
  "key11": "rk6yzgdFaCw4LeMz4PVn3qjdBfSsbTi2aknQSpYDibtfHS8Pi5HffV9y74zQxWuKMdhU3MCvXvYyR8JkyZgyYaS",
  "key12": "3LskQ7wpDBKLXaPBtWnCsut9r4fkiYWKxhH6b8VyyBZupSYYFPEfwEEFLZNEpFTyyKcxzK178JK75PkN34K3bfp2",
  "key13": "2GazzGbrcCfthrqueeADZm27TydZdHCbetjqBt5v37dSRfrD7aY37Ujmh8RXrVm5DK4AYwtGZ3v4dDY3KhJvNJkm",
  "key14": "pS6Yt2upUnBi9HP28kNt52WjgKvTc75BBKteEZ3BmFbBHL7AoSePpovFvjZKH7bh7XfH87urTRqYYfTqqYK9MGn",
  "key15": "31Wni67CZx4Lva14Qa7HB2CSazrgFGrMkFXqTiduwTZSTMwg5MfhAhhq9NkgBrNg5YAbARyLtc6YGph5jrpMs7UJ",
  "key16": "TfH2mJZKCDyh2uHZKxg6NcZB5QviruA2k1w55RP7ZiCZim6NnJN5rXWvPjypLm16j7fFa8CaiEpHnbEXazqFcsi",
  "key17": "mHaL9EySYmFfniAg2fv4M5GLVErZJxcs13Xfq2YML3o7cx23MKz7DhbQvVCMndE4kfde9ihkgMQoUo8AW5C3iBF",
  "key18": "3FqAotNuxNoESGzPtgsiYPg2RRzvEcKtnpWVFShLJwHMtkHpXnhKrsacdCk49wEiCQwSqbr8Vpy5ueM7qmZa9Egu",
  "key19": "tesX9WzhDx2wjoQsxEx9bvujGS3gPJP4uvHXvVBa5B6VMQHD2xYUgc3pN5G1E2aP6UbKipbstru63ZhuERXSe4j",
  "key20": "5xj5NRCwruP7UVugBpqvn4hWAGoDEuBfsGHzD1aW49oqvEPDCVeZ55TSzRPD7et985BThR8rtfCkyobC6QA6BA9u",
  "key21": "4akHbx4R1tZFNsY9HJWL9FphMfUcjXwQg3zGTjYQaocSWruspKhs8yhRfVDmDV4mHXEpMG1zR822hfmwsBo6FTQV",
  "key22": "4q63cbscy7xoDumzC22uUbye5NFntJhDgfepgjtyL1xUUfekTQUBaVm196mL8jB9skyVeqkNsVr7pNZ1FV87MRoA",
  "key23": "wLFsSX1vF3H1A2a7MrSLpCe89kozE1aPwSRSkktK2WxZH9DtvsaxtjZf6RHhK8iGPZRNJCBDR2VCcBnHk2piSBD",
  "key24": "4xE39s9SC8vBiQzUwvvgNXcge1ek2orXJwH9iuZ7PA3mo5bsXJjQsn7fwb8kygDoZPuTLx3VaviujvV6bhopDsPB",
  "key25": "wLaH2BoYEUCNBtHmxb5Coop3ubGsTFou9cn5dSBJb4PQQyibriCFiPVYRbdWeHuHjBdvrrkVR1a5KrPga2ptkiR",
  "key26": "4kH3uW5Rg6tW1vYu7KbezoJRqLe9YZv7jAXJkWikvXmQEbkTukZoLc94G9gzCpabb2Jrt5wqayKF9qEeRXyZMQDw",
  "key27": "Lss89bxjkCPoRwnyGtLNfpAM2gg8zn8qZu4ysBPaWfhjtUW4vBmHHFqddGrejXDdAuwfGU4CDXvVNdhh1akc2iF",
  "key28": "3snufyeyCssPg2ajrLM2Gwr1Ss9HmBZQ2wRjr8wYHusGW3sogxdxRCnimKJa1FLX72ukzuXQfgTkVwTuVhBkonCC",
  "key29": "4mpPoZxazkf51ot7PmHQC8Z5ySn48SNgz7jw7upLko6BfjnVS6sQtjh5UE6FghbQ7UWJJtDmNsEAw3j4zG3GF46j",
  "key30": "5gtGo3RiuCt2MLaC37FzhgVARcZFXKZyUJoTfjXYbab3NN5J5xj5X3s9GbvxNSJrNag3VsnqC9PgejSjb3S4T6wj",
  "key31": "4tVf311Lgrjes6YcikGnLmZqXkSbRytw4brc9Ae4TjQksDi4iEUE9JeN5YyiTRRJXinM46gC7iTn3dKSsdQgiAA4",
  "key32": "26Wrq2PgjobMz8tyjJQCAiL7CzGgsR2MWLaXaBCsKL2m77C1rycDk9pFuxKRwcoyumzFqiNcQGMyRBkdLnoPhEZG",
  "key33": "bXhhB3DtZc47Yzs2jj7xXWgJjArc3SiuaZxbHN8ercotwNrjapuS6Hk2anhVbMBmZgeZ6DyaLR74GmLg5qx7buq",
  "key34": "4yukVQ8163zc4rAoyXKqnFt6rDYad9ZHuzwLHDP7mXRfiWf7yVE9kHZddQ2Tk6n4HcjG9huGUihEuQurUJvQFU6v",
  "key35": "3eEFKjC5CygB7Fu1JsBMXKjDeXxVVmBTCb4MWj3BQhWJ1NFCRe4EnLNui8YMmgPUqa9JSH4h4vnVNFv1n3w3rZMK",
  "key36": "4MxUKUcXa8niCmJzvpB15NdCmYYfRP5PjmuYjivKbPKZ9h3vaGQ78xKQEShAzWU2gKGshE1BPvcHES9ur6GKWDWw",
  "key37": "2ra1n1v5vC8o8R8MdcTweY4xPxfz983TG6KsTJeJ9JUtbCF3asFxEjGnD4wKydsAQJAypBFoFXLtNgP5cKw7Datj",
  "key38": "2wGXqmaTrF6X5FYmuDKMGYkm66cP9XQY7ogwxDGJEXu7yL3HLwZvAuYrFERDfheWaa8tDs9wvT1TTpxGYqbFeesC",
  "key39": "44EFrCSMv4aXSFxjdN1DGQpiW6Y4Kqnpf1ZH72ac3Xg7L68XdZZhvxEQwC2XDSni7GanVEoLbCD18uiG5GWsn96A"
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
