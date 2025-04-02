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
    "44t5h5pcKJjXJ7irFCpZ5F1gmp9eGbYrv8n3CPZ76jKiDX4532ebsXS7USK8edafJDdeoxyjsVtV5uJLxHEvCBqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMSAp2hLSsxhGEpLU8AE43Bu3UUFVAGV38Gs3SxcG1TvNECkCoJ9dinZpugvhmBuynBtGSSn6Bte5MzkyWPBSwV",
  "key1": "2M42DbW4rozPj4UuzF6pd4gtKYkx1q264oAGUvtYYj7HGgvNexVAda2NSeDcwwgPDc1VpACNpCZQDtt64xc733qE",
  "key2": "4pMABjWg2TwEt6eqML3GWoiR9TVDa7nNZE7oe7i1R5KZN5PaTNstHLWxp5sHAhoohK2ZCC21s2sGuHxFYVZu1AHv",
  "key3": "3FVq336o7WUdxFSn8XRcZaC6Gm82EUZZf7ncvBRrPXYV3RvZarxadRsaw7wAydx5hFPRk8LdByGocr7onJav11rR",
  "key4": "3zg6pv6een57VM1y3UVtYUEJrMp6PqZndFzVcvVULKp9Ka9XvtJRDooRDZE733Q2xd6csKVeEw5kEAadxDj1qHkQ",
  "key5": "2w62ELeTq7o1N8LYa5m3N4XfMXtzqbVtafVvA8wEVbPuzbTJwR8j85m11dD1B3J7tR8foDh8ywu8gZQZ8pEJAEbc",
  "key6": "xNEDds6dpH8irYUBCr5jrGgr7YQnjvRtSDMHfK7vCpHwn7gzE4W3GTPxE9UqyWtYgnqA8wPMSqVhzkgy1kuQeRL",
  "key7": "3KXr41gr6DLyqyGzbjdCdkfNL5YDXsUqi8x8xUSgxWm5eeKT3Y4Ec2GN8tfRyjn6NJ3mG2HYUqCUf3TVXUqivcMZ",
  "key8": "2ufUTvJftEAZjPDxjrTQvSitAc84qNWcQxXJRkao3QzwNmhKLr7gmiL9Hr1QCDwsLtyJpjKuW6raHD1BcyiDE54R",
  "key9": "56g9e1CRVo5s2ZTRbdaywGRdiUhYtyaFhLxnrDyrRHpGjDSesfYkr2JrNfeQYGZaDAP4LQ7hs1Hpjj866DHtvKHe",
  "key10": "214thbKHm2MoGosoPvPzNdAL7a3RYfxTxs9G7bz4YzdX93X7h2YGGQHtZDcE7NkkvRqrSgtAMvG5wH5D7ND35QQD",
  "key11": "5d4NNE4EgZ2W8C3Yzwyd9cFCoi6Q9QPhrJ5h5S6u2AP2uVidYkCSnK6AoDNciFwnq76WuuQz8qcbvKAQVb4GyBJf",
  "key12": "4Ro21gZXqYdToqPW5chicoEq4mr9z8EtCBhH3voM7aciJFJfGHrCq4q7RyaEXwnk9QofHgkDRJtiVQGq42uaTFKn",
  "key13": "36PdH6NTcd2ssvsPCiYGV86E7WJD5PB1P8e6VcqBevbFDysugq4xNxEHxvMfubaHbeEHDKfRvojJcuGkn6bfyEFN",
  "key14": "4g1CNc7Zrqu1Ch4XJtVxL2YEgcDQbY6ftvmwbCxpN5eEZvzhb9iHQJbxqhRcvnDfvgveZSTcZwchtNcAnxwxL7hm",
  "key15": "2zqiqzuGB2ifAHwnKqf7tMY7a75A7W2VnxswG8ynqc8SWnHaGaCpcXRcmAfo7ky79dHewSYqwCWygMuFqeHNa4UH",
  "key16": "QQh9FHgBUeSosPn3qSD65nPRD523oUrTG8AvKRm29FqSGxJohiE9MmpxJxwXHbdVNjRVR67VFnq89BpnAWuf4RJ",
  "key17": "2MJzGmKG5uEQad7f4WgGaGe7Ej6ZpXuXjZHGVvt1L2v3d8LJJEqvhSWgMHzMYX7DaWjTtLzCHg1zkwijyMCaXG5R",
  "key18": "5QYxuwgBfTDAzLeE5jCZex3Vsqaoku9kvbJWW7UBUxbKxhAgEVHBs24vZtCrAc6uuuZorSddDHDDC8CbWP4C2vKT",
  "key19": "3GmWm3cDLR3PEipjE78NpuqSrxpCn1gLB6pkUQR8vAiXmuzfVV6cd9JCEZubEeoWv1FyjjFUL7ivdmSxGqUHjEkG",
  "key20": "3mPsig6ESRY2vBy5rQCHYb2rpe2JUAuX4n4LvyGaz76tWRVYzwxMNruhVtf6q49kgw5bur7uvs5cPCicCymzxxAy",
  "key21": "Fef3cBUnNv2kvvo1wz4BdHtib9gLJZMHtauawjuLHmQTuZgnZZCk7pLVUdCdAwmaDSFq53HxDVDfuQ2BsKy2QKm",
  "key22": "4tEgetQ5ThBZuF4kWnVdnktpnnp9fsr9ZmFy6c3KDypeQZMqYizDJcjLZMHSmZishYBYEamP2PctvNVnUiZmdXmY",
  "key23": "39qDB7RsDfq4JRAiEgxkGxmAWDCELWikvr7twLRkYufwpDBJqEmbsypWgvCPRzpkPjHxdQhgTvFxtNJkxS7Ljjuz",
  "key24": "2LsjoV5rZrDs1Ggo1VyE46DC5Naw4QgKi7aKtBM1U23GJA8sq6RxnSsLWwf95CBhQzf9vEaJ5FHshDDy7gDqn9uA",
  "key25": "4H2vAp93rvP45Vwg9ozXpAuyifrbafG42WcZNvE2TAyXNrWYPCnQ3YzzZhrRcJ2X9bkE3zYmKLHwWDQFREGU1sFM",
  "key26": "22AfJ8TYbrY2nHTA3mjJf8RBdBFM4hHcA98KK2MkR6UYa4SPpeyAHLVbSP6RorHNAB6fNyN1Tf24wvYoYJmdYS3g",
  "key27": "5hZRZAyBLiGq6gYQeVWP6HoU2xdc5HWQt7BY2FanMU41rU8zDBGMA1hyPGanNZkVtsd2osEMQRF1oDDGkxYLzZUM",
  "key28": "5bE9d4v49fE2kjqRMRZTau8D28LHsHx6n8YXR31Wb4mJFnAtjEod9LUoZ8Xfn6utFqXeoJ2pyoxaJGtayrRraQLX",
  "key29": "5U7iTFqh6HmShmApgLjpmvETV7j8UhqpTV5tTSdpjnSQHSVxm2XdrmgwyzMRuZQKEQDUk9kSpZ8c87xW5gUERjdh",
  "key30": "3vzJjiddanBs41PVVvnoBS2X9iBT3yzvcwzwdAAMwmm8PD3mCwwD15z8Q2L6pftBvCcpxTmiNuMmpVG4ova7zYHB",
  "key31": "5zfh5RSqZvZeeJVM82TxVeARTkTYWH8A3hgPMJAfCZXvSrobFEtkLrsyGXWEez6ZSaK194Tt8F8EFxeQBy8r45CD",
  "key32": "5SVVhBUxDbEwCwyhvpTR1ZdUULqKp8871oYbEaQXgmheGe5Dyb6GKNq7eqkKcX2WstMVdK4iR1RWREFoghZZnae4",
  "key33": "3XeAK4JPeb1mywwnEWcGTyPeB9C8w4FKXkQPorbLemb1hUmQCUq8RtLgQ8o44oyRMKfsS6bfSUpbUK1Lzgo8xrQP",
  "key34": "2jdXGg3zf7FySjw2QtCkqLmYKW27btEn1AsuESU3CkMN9zuqmkgg1guhUSz6JGGXxxyi6qukdQnxBtGtzkArZbSN",
  "key35": "37ZpqpLyCF9L2f65LBr5jAszxeZv9gvfFfMTM3spfLVwEt4b3wMdSyvfSw3mwpnXsfHh7PWRgsB4ktHtF5Jq8gCY",
  "key36": "4N6KVDXp8rcVeEVKFXmtE4L5ZvjeSKdfgFpGur8aUVVgBWVik3oLtojh85fBxKnUWdefqd1G4yZKqwJ9ZA6Da2tC",
  "key37": "5kHajfQav25APn92mHUaurMxmdkgvgmzkiwFsaNQaXjRvCpjeMSR2x2GQLe6PybPWYSeax5SNWF5zWQ5ABr4PvtX"
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
