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
    "3pgXUmbV6FGZeRxRLmhf8y13UHeqZ3nkTrTULC7eVN5YDN7x77E12iBpeSRMKVqmqBJdiDfUuwUhRDCKvvB8hJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jeyppBfaLcChjvUu5GM6NSB9jTTVKd7QSFVVNMLbtmU79LYc6uHgX4YgMP9w442CJvY3fgsuRGuEJcukn7VgeRE",
  "key1": "5UYs1XS6Jx3BN9Fdk2jJUormdKs33HpBgVnaKoWDHSrQVV6PQxVrZhQbFequbDsH8vaxV5SPywBrR5m7fjLdmz78",
  "key2": "27sjhSnmmeyYX4qBMFimEpKBkMiZhZWxMiAf4VuZ9imdP9hFRttDZx5i5pWY4gW42udMaLTpn1HwdVgprVyay7Xz",
  "key3": "5dRpHsrR7uQBMkVvQ5MrGYfZM2NCx6rSJ4ZAq3Ndg22bbTBtZwJDurn7YuoKDHBYKGr228CPBxF8TC6asZjRAazm",
  "key4": "t8GDgkFwbNGX2dwzXqWJRMQrRz9onuJPz9Fwf9Go4YD2phHyB8xz6SWetPbUHY5Ehwn4UzQSNpjgitECVERqJyD",
  "key5": "5wA4H9LU8fvJ4zjPrtrUqaQp1B11GWEueJXjiTQ2KkEtqq3rnvpy1yBYgnjEmAsfna8qQCgaztkVbA7yUPvJ3NWh",
  "key6": "3j6uwFh5gUVxsQ62eUY84viKdws1AQnPQEJKfutko9WjMt3TdU1vWYsNSHWNSCNQtxoqfezTXNMWwGtsx54MvAem",
  "key7": "X7xLV3R8hwsy6Fr77zqGE7Dwe257HNtCL3ezY6pRJ2m7H6XA62ZJ1mKAUkT2jfdLDViftyzvauAh7GNoM9a965x",
  "key8": "2kwHpxXp3TSjAyMXkFQwiBLKbAxqu31dFSgop6ZcMrss2CLP4tYiyiYUNRw6qqf1dT1fvgAaWXx2muTpLCYJJ2Vy",
  "key9": "4wzQB9i74xBB3sJVyg3pFs4g4PPAmJyTZ13BfaPgb58nqBvFzDg4Fh8JE8XSN4okNJ5VNU4KoSrTy3DRoxabdu3W",
  "key10": "5aD44PCJc25eUVukbZybaMCNGALjUJ8jotpEbF3V5uSyuTGHJcAcZmuPDxPtV5JT6kH9inYjhsYphsVMgCFosEDn",
  "key11": "4PYLRdjEnHtjzCAs6MydkQhBHosM3j5Lnqc6ZeRXzhHpoXrNoRTz7q9e42T7P5fxifjp9MwK2jDWh8u8XS6XAq8L",
  "key12": "2BFCcSxK9zXYQAs9pcZ8tbf8bJDoDAkAy6U7AMzvfP8xqkZ5rcLFkcCqnNT32Zagh2Ci7fPi4BRbornr6r2LPpK4",
  "key13": "TZfsaDLYCfE142pzCbwKFviDUBAZn85vesjeS7iEMt9EhK3bqMp7Gn7vcLhvq62yMTLAh6zVTP2jcbHqYuCjPJq",
  "key14": "4LMamzRVKmSZQAJepqs9yqMNBFUm4DY6AQWuNhQdk2WZCxTt8YKimSHLz3tfz8AQj5J89icAxnPtgaDGCZSV8h5d",
  "key15": "2S729X9MRpJn3nfS6e4zVWj6M8tZ7GWw4eyrJPbLmyqgbjTKts8K35hRPRB14Ck25w4FvTMS4mEBbfQZx4VnLYdK",
  "key16": "5gPxgtfXPxh4rkoCxogzBrtYSzygaMK7boEdjyJAWqcUhVM2hpG8vLgEbqF4yWSsfhsuzCFkAH4d8vwpZk9iqDRa",
  "key17": "22xNmL5dQ7rTdQtC71vYyUhcLMmE5d2ddE83mHZQ5sNYV7ZNKsMQqSrVT7rcSzEwzShn9G1Fn2GsjvofhnVztUL2",
  "key18": "2FT25pW98qeS4h3MsLC1Vp54ofGJPmgUNwEq4LatGXTUKmeHGXUS3r2dE3PNAnczGqRGSbPYPKoSKYwV5V1KcnNZ",
  "key19": "251gwBmSdei6H3Edf3MPt5yBojJujYZABsmv5c1Vg7G3LANPUCpkdcHtrfH4C5QmXh8WXwaiySssi8UxP6Kpm8kW",
  "key20": "2mKunDHJHvDgv5fLbGjhSkecams4Pu591nzWTUqBtoorzy8r8ebaipr52meHdN8M1gN6CRXusz7oSvxvxZ5GfJAx",
  "key21": "4CNhYCSrcQdJLB5mSPLp4NnRbL68My1fpEdHKNJ3bgpsLX29ToXsfmUkDvipD2a9XkqrQGcUuAbanDEA6UhmbB68",
  "key22": "4UEvYS59m9nkx3LaKWS5CbDVYJGZP3EusoRKcTNBHpMXUop1uf8dyn9EFRgRwY7A9wDjayD62ACTBQBNFpSwrdqF",
  "key23": "2LgVZq7Aeu3YTCd1eYxCrZBDyzwrYja7LYt2MqjPDi9EB9rcMrJ31xp6LsegZhoK7T5RzGLzWpZq9Mt9GcjPDDRL",
  "key24": "5kjnEogAJ6XE9Us5XYRpcniwc78yGYSKNnUUyJ7RD6762FxTwRb8CSwRcxHc4E5NPgnPqpQCHRoFc9pEQigvEAbV",
  "key25": "5tgX6Q5SnmrJVUXeBESbWdptwKnvWF6fao26sU8LjDunUp7fApwDiDH6tQif8jPNnsPjAov6USvSEcS6JY6ufQMk",
  "key26": "2yjmEaQ4q6eoVwkzxfgZ8CUAgk6dmSXANuJRCX7ZFkoRdfqRsEH81wdaMw9nhgGhiFkC2dvWGKjkqcVpHP5h7Bsw",
  "key27": "2WpbXWe8YssyJxzzTwv6RXjFfDATrPDTG6xKdVsezgDERrj1bYN6h5fKz6kM49XCKSsfhfw4YRYUrY1t5vy9vhVv",
  "key28": "2uar8DQku5821TwMXqu4T7peXZJTCK3Ktt1Y8UTdddSBhqHGujbMgyZbw63CPNcmeDV54pz8Bc22aC54NqNpNqii",
  "key29": "2BnXHUvtPZV4qdoh5W53sohnU14xq4PYxGP8rVou7fWhSWaRR8i7GYKWwfj2apb9wTGL43neEVcT9crQKT79Bxj5",
  "key30": "4c1pZcr3mKWzFjZmpkS78Ja15RG6AwEQ4Zb38nry8FAAKiHorE9X3KdjDtpKzN9a7EncgE1wFEDqNFxfhpSVn2J8",
  "key31": "4cwSrvSmthzjLXHw8kf7e5x71DrZy5XhFHZsHpHZgFwZPwSn8zXK3F3uPQKqpCU55vNGa8DCrYqprrCBqTVAhq51",
  "key32": "2NCgiStjqfR5RWAV3MQupcY8XcYRcsBNs8tQ33dqDaodKba34jsDFpVMG4GbJHAEmD24sn4aAeDgYQWjdqc6oCKw",
  "key33": "hkPK3DmS34PhzSuX6QSRhNxdnH6PNxyvrCntpb8tybzifGq4EZVNZGQUSRjgZB7EoiSCqwWXTMPnPBFNEATv4Hc",
  "key34": "2y8kf3xdKZ646M49Dmom5LzFF6uXwVdht6Y9SL23KZUCnVYyvqqAnJfcFjJV17QHwgnNym2bathH5wZCMYRgPpKr",
  "key35": "3wHKq9yW7nkU6EupXinZn75edWgiw3k6Ng7VvqCsYCu7YycVszS5ArJzhYWrFKJNMXwX2B8qsjjXBQuoa8JVtFBU",
  "key36": "a8z7K6Co7todweNArEz9FJUsiwFwwAUAPhgpY4DjNu9uc8REtZ21RrS34SRftv3CR8yXxbLbm7bUYYbyqY7CbHr",
  "key37": "2MHzG8bqHe5sLhq1RbE4jWarXPeBoThjBmtoqiz8uNMvPTVCwNwcjLp5v1NsSQ8Be3ft3fve57g1E2TbwBdHWgHz",
  "key38": "3jy2W3opARADp9L3aj7ZPFppyB79JrDXdoL6VviqtgnG8stZY8bMpKK2VXfntXR3SNpz7qumhcjhnSp3cBKwuHXw",
  "key39": "3dNhhGRUX26NhwBqF6RG8eHJaV8i4gAj8NmUpmgVoMFwEisNY6D4JddBLKxazf6siL2iyxcBk7suDD1eAxgPL3dH",
  "key40": "VxXXvXV93HqURTnfDZEbo9g7k4fDtUpsdbTQNW7cH7wRGioLFeVXYx9oSfhvWP1T1SqRVVvD2p8Sm7t7pkDXLgQ",
  "key41": "3L2fhYoNqK3yH3e86SvzGiMv2jU6X415rSSjDmPZB2bx5CkbGF6dGG75ZZNYu8cGdeqkXx8WQS3TrHP3MLfVdt63",
  "key42": "5pM2352qNoHtHXH4fGXthv71F2xMZCbYzdbpd8e5NabXcZJziwbtMLqWZTumwZyG7G8Y1KGPfNg7cexf3m47KyEV",
  "key43": "2v6R8XqPfrGcMnPouSPyUHjSRTjVE6MYFMa6jfCYMN9rLD34ccFTw8eEomCFBtQLLzGm8z16PnT5Gjgxtv4V5NrQ",
  "key44": "X8JiWfU3SmaGgrz5gQ21jkakRpMjLau1pPjWWSV9arLdTSyJFx3FYeyg1nDHNCi3Qz5gLhRFCD9dqd6Ps6T62ME"
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
