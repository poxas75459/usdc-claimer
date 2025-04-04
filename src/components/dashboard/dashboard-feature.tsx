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
    "54LxAQhhwNzvebR5tPCq9knhQKE2WgVs454XkXZyWAyYVxKsey4cDQz41puz9uRG3sYo36YJWUQKtAxZySTZYHFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eSTTagw4yW5YcPedEipsXJfPeXnwqMY6TtfNvEcFUvRo6mzAQCNEgVczM9VeapUXekSTGbqtJoHAgNPBuxFvADr",
  "key1": "TE7AHxeebHgp2GRD4NCCc8rk6fhrSeJvwiCQB4XpLh8f3ZEAbSjhimjctp6gNaubmvKyGvFz5fy752AM5ECKqgY",
  "key2": "PQ2kweu6SptS26DhSoL3wyZoJs2q4htWBrTTb813onF6iWUS45go4eupg9rA8RxKzQTnwvxaaLfvbxGFeedHb4h",
  "key3": "4D8WpLwwREQhuxufDGLfPyPgA4ivwPiAjRQPBRuUb7dH2dPK35b5fUYM4t3WE2NzmbEEsuVhvGdh5fEvM1KGYpbp",
  "key4": "44PTCKJBqJmT6QewMPiKVvDZXsr14WAh6uHijsL1iJUsZaPTukwsYydTXTtT1X7UPzsbJgi9PJHyjQNHAzx8HxzR",
  "key5": "3jhaotnwZ7PkrtVqthfapthgxDezg4mnWfvHPkxjJSYmTiUCn2pvtCj4C4Z8qQXpP2jJkTJHbwMecgzQM9bdkquQ",
  "key6": "4PAnFaCMLuX8wjsvNNqkewFYgACPoQyK3utBJ6AXrkSJJioqx9fCzCe35ijjZTz27yC8B97jp4Fynk6xuKVMQYGD",
  "key7": "T29pox4Xrfu74tFiSYaGrBZ6VWHDNTZfjBCw54xwazvLUYuX7v1RiweiNh6FSzZWdiMTdMzs1kDxtEowAiDXyMC",
  "key8": "2q7jHsmd5uXuyxisJ7B3cT4GERxYGHVN2hEqKvQydfxBhh4zbktM7BiYQ8yeJU8ZQzd11nAidMXUzG1mUzkVitHF",
  "key9": "mDCMHk4o46NSGf2jSusEBLkgvDGbFj4vjuADuzdzpsT8tDdJvEMBBQyBQxExdjibX3GTbEATFLhemwqoT9Nb1Ag",
  "key10": "YGomNMZhJdPe3Gjun3AmYoip7rNKJ9pkr7NX56b9tCZJZ3vLmxDm5RHqd5LNntBVq7SnvTh1LWxoqkhLwhx2Vs1",
  "key11": "3fc2duEDyrC5h7ZffcXAVYfuy3obDDvjmGC1UhZ4ctgDosbEzBEwpABf7i99FUtjjKg8ZyTgUf5yTRhEohGH1VBr",
  "key12": "2iiZUE4TSiB8s1UsXpEVxeLNBedSzttDER3X43tp7CaZEK9EMXyF9jSDX21TGXVQAHPP3VhHFzQKqsk8cCtqXD9w",
  "key13": "4Agy3BkesiVbzarb1tVyuejcBwjwhLmYCFZzP8b7uApk7qkZe7T51mkho8WcVeXiLNW5D5pdYe6jijXBWjV2Po4A",
  "key14": "47bdmMdBXuUgtSDfXyDsJLNktDTvs9mcvqAgHWt7RZ96NMsPgLULxzPV5ch1jxTUKSnuAaHo8851KQ4PCVcDLj19",
  "key15": "54wtkzr39JqeuaGryXdgyaJQRLuzry4q28HKNvkNMDTGnRmZYKPLEa3b92ZMUzBCJiNmADVLzMur2vXcLSKF7uBY",
  "key16": "2by4hihB4ZVy1C2rFPYAZRtPPeMh7QCffuZdB4DEYzzbhCcQ4yB2AYjJ7dehJcnmRJJ7ZiHQcswSJJjTA1BNcG3c",
  "key17": "5cbFhUvQ81kKxyEvvR2YXK67U8Xc31t4r9biixY6v4Jt4n6aqMCYjnqhyrrBzcEnF9PjVfCj2Ux7VNF4vMGptdZm",
  "key18": "32bYyfvdyQNEhLXzuxaFJgbKs5cdBPecgCXozYQCm3uihcx2BgAicKgyxuEQ7YimSMwsYMibW672XSfnDgHJCq6R",
  "key19": "2WBWPm4j8DEsKgYPvp1LUBQgQQmVNjimUwMRhTk2rSqY8dT6tEPRAM81vfFBNosMN2VEBXaWPLSKwCrkHDrTxbTW",
  "key20": "3WQwSodCJLLZnov8WngkPyz1ngF3ZUL5Lr6PHjfufMb6Q8mBtai8qRcgkvCaJj5CjeetW4v3YKKPza2pcstkpHTB",
  "key21": "6VxwxHgQ3h6buPhzpvhXMnUAtBVxxdtbNvN52Rc8PP6zRZj3cnKdpcxa1rZw9U7MSy95T5Z6S8uy2Yjb2rJgBgH",
  "key22": "3rVKfPJ4EvsrwoWruurNUEaA5MDbDYnyEjDBE39Ci9U7YTMphP64ib1pBFMSMvsnCN3HqaFinWmSxujTJTdLwH3Y",
  "key23": "fnarzW3sMKstquDonfX3AgPcJMEcYAUrTKF6xXRMZx8WRAbWJMWFA91ahZaVL6jQgQRWhZYGwmEd7d8pC2T2qyk",
  "key24": "vY7MMWB2V5wXnTcm4ydUKmQV9Xn1X6tdPaZjrCskYHy99Z9upLXebZ7gV2LiuaDQatUdvcjNx7k82gVgjLJUgFj"
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
