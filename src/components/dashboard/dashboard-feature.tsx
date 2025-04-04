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
    "2z2fFmQvhUEKh8ySPPohyRGJtnvtd1nedjXpJbE4ZnLyZe92ByFhD5KvLvFbhdtQdcWTpNytcq44fENs7DQcFRP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quQE2Yq49ktbTf5z8trcADfnE79KSGKemaw1ARE8bRpXF7neGJeAp8wKpXWAhc7Ufesj8KpUau5NpkYqXSQCKGr",
  "key1": "cPhjQWSM8Vp1XDAFadgf78mWa9GYVo5T8JUxbvA8URGQwakeLxHqCFYBYRkBMdQPzhkhbF8fWYzNUw6pRiiVZR1",
  "key2": "3Uc52UAr7Hp3N1neuqotH1523JJqVWWaRU9YiCWoBDfWZ5aFiDMWszVD7G6Du6xdNqEhJHPWLEW33485fZo3wTtZ",
  "key3": "412D4u8acUvpZrV8mZhbvcCS299i8rbV6wLNvTsKjqcGJbPs7pFVRPAw3AkUc9wQUuHxquNYSFMcURUTU2foNGad",
  "key4": "2F6dRijFR1TRnXZaeL5Boh1LRrYXGDfmX364U3TqCsrY4zR4KRxUmV9i9Pbxm7jWT4WxVTFZ9rCwgpQY3g4XJX4W",
  "key5": "22ZD3zgJDruYupQPLzkXRHBPZ6oX3F8qZuvhXvGGxhNZbn2ZYjQMFeihQgWU6V8WLfVwtrW1tg2K4TAYnkq1w2ho",
  "key6": "5QPVYyE2BZGjJVgnmtMALvpBbxPg7TKLEH7xWmmwb7XmHx5NJNHetPAPMqb9eV9m7MbeneSR3pU4E58gsvFKLjoL",
  "key7": "53oN2yzU7NVuT1Pirx5bmQEdebHLXAPPUPqehEyJjRgT8oSuw1HyZ6Y5D33EGZChWfddNtMakRNz6CUUKzKP8LNQ",
  "key8": "4EZvSDnhPymh4aeGv3fou6G9K9TageYzFd1JT62CKmKQfVTAtVeLQQcd5qWqvuE9dyDeTYUDZHfheRGkoWwhJxwQ",
  "key9": "2WK1RtduJzF4AcBmM8LrT9hQJv4qQGP4gvrWY8NMXTF87iuqUG2SAGenen5P4vHemx97RoQmtCjAu4QFm4YHSJgA",
  "key10": "5xjVVAv4cCNFfNR7ZFaCAqSE4g3PMFDVF2EiU4FcxzzEzp4AmVdt3Jc9XpMfoEcqPokHvxaU9xV1PjCs5KoFeD5w",
  "key11": "5y8pBK5767HraRBsf3PBCmVYh3ggT3bNFn9E1XzKbZV97Ukfx4GtEEVME8f4PxUqMXVmaRAmscHdmNpCTrk2a6nQ",
  "key12": "4usiPS37WjXAzoWoVmGDs3J7TUhTmUNWHfHH3AjJpy2Tkf7iYvudsqeBVgEzminX4Kv5eHTYKiT8npzAdG6wQyaJ",
  "key13": "29RFkxZ3JeHKjZjyjk3XBBdXqb6vKVzR5n7wcQxFBxgGQzKH7syZaNj1GvEN3Lki9XZ1BgKZXeHvBhT2x2fEoD3V",
  "key14": "2gGsLrc14MCa8BtyEbFKdxS2TitKak85oF699BgT7j5mqzanV5Jk4n6dhrupvzsgpvD9cXAhjci3KcGsQ35t4wPT",
  "key15": "uCtxxbCTfFfcnwXgTHSWWtzC11N3yaT1wWK9bx1RaxBncjHaCaG81RbhjCzt5jHf9uaSFP7JwhySAjg7eqMYog4",
  "key16": "5auVkCG8hPSHZDUBPcEjHvbUh9XqrdRy2B8ZAit2jnGZygt82fq5UffXpjpvLqSFLGzCu1gddqkrRsSUo7m9cuHz",
  "key17": "4hQrrJAhddrqLhdYnJsujLtuegJZqKhb8o4MsGgqS54zN9ghfHQCAD5EcdmRU6YqVaPxVDcpm2nho3NpFuB3DxhG",
  "key18": "4obPZHhVKBZEKJ9mri2cV2zsKLGifiGURayMhPDY5oN26QNaRfMVTUbpz38qVc22BhqrJniQwz6AARuwxXPmKsXb",
  "key19": "5GH3Atrutot3pQZ4hZBetQCCP8CdJ3GnBdzwoSwVPwi1QWhbLHFrUBFdKkDYAdRQi4qEEiZqfeWC9LS6XSSbdZeA",
  "key20": "4x4g1UqYXw7YZsfc9d5oHUAcXVS1xRPR5N3U18dZNH8U47ZoeyXMisQSbkXebaALM9eGYbpGouXry9oSFyEPiocv",
  "key21": "5jhU9rUQSAZxrwPWSqbNfoGBfcJTBs4YrYFGgJEU9Gqmn94nix5srDS565JRDPMXFFTdY5YinfWm4LtWQcPQiL7Z",
  "key22": "5e6kiFvejtgUYUaCNR4GCNReowc4MK6ruwWzB7pNd7MMmfinAA5cQ12VST8pF3zttomyJk8tTUw5ZD2SkSA9xxVi",
  "key23": "34T9TTUi9zBkHVjUeyGfHjN8yCHf4ErpHMdeqNnbs5KyW4diQ8GdJnwgS3Kj5Y8Q2CgVX9fnumSwR5ComxPmB91h",
  "key24": "2N8D19FQqX9G2J1gJ1ni7kMGC3ux8ntGHAY7PmBq1K6sWCVgwKMTzEzDu6Jmp4bBbE6KfHMUS9DLGRwcFTFgCn8u",
  "key25": "5NbJFSLazcXrEyZhDcR4HzHaLj7nPRuWE88FL8kudZ8NFHn3jHLrwsQiu3sAMihmoqTdLD5c3bVu7Wb9KfUTXJiF",
  "key26": "GWrjt46m3B3kNZr4hi2MtiqxCtTYxgtaLaAj2NHwgVXACVwnmcYq6Gh8TBNgb77A1kAXAMgvePLB3pm1YXKKjgh",
  "key27": "2TncwfDwQX3tRkTdpUGdMsn49ePAgEn5u4i4JiV6rHzjne1zrNgJj3ytpkfBfDEa2hTfMk653mps3L8xTZsLNs87",
  "key28": "5FJenn1CXDQUkCfxzjtokqKcLD5EGwWjedmoDC2X2R9fuLhCHNMMtHZTdZeAtnRAeM6nUXm8FFMwEtCvsUTGaZxD",
  "key29": "2C45GTCnDhuE2N4kk4jK3RvFs8kVBw42yig8vt3bMLDUeijHcmPZyUPQgcJK3ZDWuGfhDMZeD9ZKyH5CE79QuKh",
  "key30": "29MCLJmZvhe6p49fLEmAtNpLFyg6NTTQRWXxi5E1FNt57ZTYLzaoiTHiYu3Y4ZXPVniJwX45r3LbG2h8CJJeSqMo",
  "key31": "4Jnc3oYZAtuvdDXvayC7y7deFniY4PrLwgVfUWcG9P4Rm89Znf8WTWTt6X5aZvwL4Kx93Ma6MSqbENn2bZnKFLeC",
  "key32": "2Xj8gQj85rYCvszNHTVtb32p8sNrco9MhDnv6GQWGYjAMfM56G4cvTqUsQdwF1Uh1iEwJ3r6vVnXWrKC5QxSdHeh"
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
