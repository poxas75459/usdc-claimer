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
    "4cNqfpVNzbaUXKbFUTsYQrAJGNXXz7Z5Gqu2RNgnDatCGPwA8oPfCaRXoYwTi41BLBpjYgrJ1p72QzXibMAuC349"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WHnaWP83UL6nTp6ic4xGE722riwr7rBDHvn7d1c2oK7VUpVx5d6MJw9mfuX2a7tMGdLK5ySvBXoj7rYHsPGnY8L",
  "key1": "5G4uZ6vAjAD1C4ZoJ2VsSkZU7q3B67D2uuAW9P1UZFZV4QuhwCwpombKXLPVzhvMmhagL7KDW61ygvNsKQf3Qdtq",
  "key2": "u6p8fKzfcr7QUHnesdE2UrV2P4RtQcJrd5eF4KWwkuz5yEjSs2XpTcLP3WFSwciRyyYR6xDRL5NyfM5Q9q3vLjw",
  "key3": "29sU2XhgGYxiLCbjg1mZyHsHHmBHaohM59aX2mSoTM4oxdPkggcuz6KZamv87aAJqWiKCT6FnTFyiyDBp2bmTfTR",
  "key4": "59cMGSqRZUgs8rHUHKyhMkoYk53PUqEWEQbixcLBMJaB1R8NUXghbEkcxD7WHSmXZJp6hDkQD1hEZMG6htKzuAW9",
  "key5": "3jzkHencSRBKSqi5VyBsuBqsF1S3w6VujiLHz5mjJcXXv9uneXcsugdnMKu563PD87mtCJubXR1us1GUVFMC2BrS",
  "key6": "5RNWNbWuu9Fmwx9hCog5eg3VPwA92bqrQQVv9XeugJSFZTNN35fQjn1VjdniyeEU1Gy8HdhGD8AGFWrqHiZbH3Dz",
  "key7": "5HqBFWbnFVrqg7FaxQguNdRNXteeLNbdFrmZsXsLsQBw7CFXaXC284rchNQqxdfJtRPgUkGTkZwmq6wFijV3PPhM",
  "key8": "56wmQFq96ZDqjSRXnAyefB3uAc3RehRMRWuR8ZoDfw7F17pX6gfVD581KcuckGBjDG8JA3AFnV6hNuhYGjKAbJSj",
  "key9": "5xQJbXwYmEY3ySsJ6n8h7D5aSMcUFR6KmUq9FFK4UsT5qoKyhHECnoJyzxnuUJzHRDUc3jUPj7nHwEc86vyDASje",
  "key10": "91geiDhqJT91b4VLovF4ULddGTX25Am9Gqe9CfnMZVUL6uj7NzmCouj7fR1tTqzfR2BA2QGUAAQzuMQUodawGzL",
  "key11": "3Q9ghAt2D9yx7KSWXwr2NQShTXnpbbTjyX1SyAN2mucnu5Y5isTCuyLNUXBKYYfFfsvKT7UgL1BiBKpyWwHT7apJ",
  "key12": "4d3rcghnpQhuEhBvbr9rQoPSKrA1xUi1g53BgTrJ9AH8KdCRBNTTjGLbdA5x9oJ6rEq7zxrRFQUVi55wtXaXixyH",
  "key13": "5FXWmnEK14NsSat82mNbbJ9EwNpTqaHT9HJyYRJFxjnMpRxYWfV6k3yWPWLSDFoXbsNyT5nfzoMNQxFgEKc92UmJ",
  "key14": "ZGbSNaGmT2ETa1uMkTeQVwjvmqu9MkVrGFagbY2PVNUcpwN3Y17TXRnangifguFrVdjA8wU4RT9y5UG2pKBnLtP",
  "key15": "4UdDi3Ye1onDKKeHWhSgsTxyHxmZ13mXTeG8KoFaMuCBooQzv7R76V37XffmbbbdfRuuQZmhEqXZqcaHHuxRHrDp",
  "key16": "3wK5GVbxKgnnDyQYExR5L8NehjvkUtr7ZW3kqXLaQuNPb7fwotYP9mMCKaRY1d7mh1YSC9DFDKcCZsKh7CN2BbrY",
  "key17": "3w8VhRd5NrDBujUSRCter6K1uYTVYbRYWwRkq3sFRrL8ZG65gznYzpNU34FbacjoLX4xnHYQaCRX4eVTraC4vk3D",
  "key18": "EkQwKskXdHQqtFeCJZT5jCE4A7QzyYHvTekbBPtnMvW6j6NFavxaEJH4ngdceqMLUntgC66abgWmCDy9THWRxBy",
  "key19": "3CkYnZd7TkSWGVP7ByRsGkPsDDBuhMUFrcqzVLtcihkj7RVrJvRTd8Xf8iv8RP82CjtdTwWyteKhPj7B3m3ruE6E",
  "key20": "5X9tf7Auq45qmvxmGh1pENuTJBuHd97WNhWwXeZnKEQvbSgK13pAfPBkbQ5VN2LERUcLo1R2KENf1j7Xf3BenW9Q",
  "key21": "4Kd4ZPHUunqexZ41Y1fSpJN4hPrgyhXhYDcVyjkMbEZYS5MMbo4Kg2x91h6M6rpPM7YSzfiJdjqq7fRXyP4BtquP",
  "key22": "2CZUtG51QyUYNc7Q6zVkqoLfofsQvACcrsDhYAziNcwkXcrqvocYs5ThBfeJsXC1vugU7oo3dXnyHrEC4wZpfmcc",
  "key23": "4tPi2hrCMUHm9a4ALPpshS2rqcKvwJ15kZ3E9EvZhXjk7ionRXyJqv58gono6b3KNjPmwG3jQWPABGAxQFCNhrVZ",
  "key24": "4arhyVBAYdD3HAbntXyFdEr8GTD2YCjR7nnmUgBcEAkpEJHqrmhsakvRDG85aaxYMSiCSeoufcz5mS29X6chYUtL",
  "key25": "5usPqve6d1TFrRj4cYkBfyt5RvVJrzJc76yQvMqp6fS5bWR7q2mBRp8bWQTiceybx3Ugk5fkgp9LsUQWH8tDiU4Q",
  "key26": "2iv8zU9Nv1Fs5rHHjERSfwk6CAZqBNJ6kciGBRkYcCed3xbQAoUbuEuizFGRxUkDxtdxm7EphszneeEMpxvgtVxR",
  "key27": "4n4zBEQec4C3RGXecy6fTgrtLCzk2w2TLr3aTLKTXyFA5gHvo2xTWsfdvpkmXpjiwLrGksadYAAZ4QbFD4gT5zEZ",
  "key28": "iKR1U8jm5aHDP8w7Eoyf5KL8hFSoxiTcTHraAfJ7MVQf2bddmkAhhwbwyBAH8oJ93npxpAQ8NeuoPZEQeLNQHb2",
  "key29": "iXTtbwt3udPGuH1uB9T29jSGSCfRf7BpA6JvwHAF3oMP54gLhdo1Rx5pJchta9rcMjbQc5z6sdHEFCAtsXYd8oM",
  "key30": "5We1bCRShXZqZJkG4KxYLgcVGQYKRyqGsnNiURapaL3uQjou5KpTSy6pwCA3MogT6nVXHBcMszzoE9yBv55n6syo",
  "key31": "xudSrchrtsHUnpriuNiM3WBSHmkrRgieGskNgofrDTK9U84TyGkeoJwZP5boNUdGDztdde2FMSATGm6VsZyjkBo",
  "key32": "67iwRTr2Bmh4a6dF9PhrPbJW8TE3pq5UHcPisBsdAEnxHQ89Rn17Ftd3wsbupfJxa56wCg4Y1A7Db4syNSMC6Rci",
  "key33": "3kE5XwnWFjPXJSorHBQWRPx8K4YX8eV2HWaurqwmS7xRGFZ6c7kmFh5RmLqMqXFYW5np2dWe59dtmQTYdgKKTFL2",
  "key34": "VcaZbhPmeNFGG5X5xaLdLA92Tw2dpJYvoWGiEH9sbmxAo6xqfzoK3TJsjr9w4mKDzVeG1Tx7mRjX1FERA9gX2VJ",
  "key35": "bHukQHi8BAEAz2QZs5bYWyZDJRqjtHEmhGiYQw3SmmYxvmFxUD9ncJ66dzia3rVZqNrwAEmL8hd1GqqDioDrYtG",
  "key36": "2xmh11GnSxwy1JNDuR996ETMoghEe1qx9wZPKxd9G6hAqSkDt1TpdgvBoQbRuivqjcZUpxdL16qEbwZZNTUVyAbG",
  "key37": "4tkqsuYLd8NNEkTh9HaXVviNqF2nVZosnArVvwMMaGzt7PPnqPFnr8GZyPsjjuh2P1ZRGSdv2ZEtsbbSz5QXB3m8",
  "key38": "5qd3jw8pT4oTNhQnzCX9UMxZLbJycPVGFW1kyY66pHYa8iNTmuYpqigeGbF1CKsydYC5N32xDCSEbAa1z2yqRcyY",
  "key39": "4BNh26ULdskb5KGaTuoReqKHc5abrsQGYZUKBQEXwfmiBZ1Jgvk6TAqnhuLEyez93VFfJNBCGLwpgSERgFNu8ijP",
  "key40": "2WUa5qwi2SivpdQcvc7AYkLXWudgNTGWbfwTwXf1FWptL1NUnQ7D3bSvWVcQwfxt2YsGijGf2QA71ZKnYjjg2C9L",
  "key41": "5gkah2cSth4WMnwwR2jVFW1NSEPmwdEothsqWVXb7eHmFpVXsRKETNnXRHfB5YC7RHt9NZEPZxdQAhPKCK9qYxkV",
  "key42": "5f5GW1HXndsbMRnjHjjbKixmjDbmxks4nwoPbQheyG8xaACkrUeKfTuuEdDjuJowMARBfBetAcVxGMQjyFQ4uUdt",
  "key43": "5M8YHcJRzZbDDfaNtFwg4L7YzRE8uqrSjY6677SuR4MyjpDLfmoqR2YjLb4aPzDnA4j7VTxkP6SGeU7v3kYgEMAk",
  "key44": "xqJwo31KZFjtLsA9h4dH7PtxH6qaHg2hJvpY9dQCc5LUQ875pxowzH8BCXe7ckNFiDZQdEZ3pDcegpAnJDFebG5",
  "key45": "5zGPaALBS6chApxvNKLnJK1JndLnQxiAH5giUcFWhbndpZM8RYjg3GDfEoxz4btDVhFmXdewmxbQ3nyckJGN2mhS",
  "key46": "3UHxscFD8UaK1LZZt9VUPwaz1v2NAZURoND127y6EAoJtTTmvBiJDBiuPnUtKGVmG5R4aHq1MA9VyhzxmSHKRTYr",
  "key47": "4Sx1L6AzE2NDQ2C7ifXTpNwZLXSadnnwPReW2EmMAJgvTDuHXwqxZoehRNazAFeApdYCHrWfieGdepC2K2n2vPCT"
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
