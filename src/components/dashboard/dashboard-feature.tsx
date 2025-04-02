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
    "3TkmsLtdqpcaFcMqx2TjvBvsBZJW37JfG2HYqn5vZEmS3chkCKe3WeaTgMFFD7qAEGCFjkQzV7mVewtWTpPbBY1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3cSv9hG2YEnVcyJ79XxQ82mkWxo22fKJWuGAw4re3agENUvnwjU3yQqDUwpy8JAT38jbdyb5xswwBPREpdzRqg",
  "key1": "2rkiffpGherZ8AuNDvuYSqUVgqfcT1qfNEtBaheQ8L4Mb74jYLwWH8gz1NPtTBbXUEeWDZVZ3bkaWknmzvA1hL2r",
  "key2": "2MyEevjbZiK5mmFMQvffspv1hpXRLBSZAN2geC95ecc6XmgciQxGMZ9thWrgb33fQM6DiseC1fN2YamhVTbRLgs6",
  "key3": "385LyzgLM7eD9zbCJNVbuZzdpiidmEiLEtkk9JrmBWh3S1arEFK3gx7c9xDmkLid2cpTC9WCB6uDhBjvQuyvLCBQ",
  "key4": "3pD22EcXtTgsbmoXGLLLwPEsVzmp7ajtmQWkx8AjVbRjRZBWyW3hpguH6r9LfVxgGPMGHUpVupGYoDzWYtMdCabf",
  "key5": "3NfxiQuECdSrh6sWai4f27guj9SekGfMaMkZFekNaF1eCTxY71FcviB2Qd8XEAtQHgUu6z7mypWP9o2dGy7vSU1L",
  "key6": "67Ma4ppCFtdMMv8AceWX3pqTcqiGnhLFv3cm5V6k2E2pshogZWqKpvTVfJ7HbQxzLhGKWnARGuqCbcxM4bvEMjgs",
  "key7": "4HTLmELpbUyu7yxg3FUoQw6anGkZeWGJZSndHPMCMqGXpfF2Vx5sSYgjNpAM7LnnsW1LeiifWyRpsaSn1E4cckBP",
  "key8": "4pvSXibnat6tfyWpXizU7po63SU6wHYTmpeGuernsx9rR3DGwiuFm3H48SEfFVWWH6BBLy94fMVt6HTPEavTAz2k",
  "key9": "5g6QgCsuT1ECSydk97dzkJwPc3giP1nvUknFu8mT78qbsdj9pQPquSMdxpnue6iwBcyJPKYJjcdgNahcKbXEqyDL",
  "key10": "5zJLBqzBFKFipCqJ4F9LMFkWkrTBU4xKKCXxEcrzib7EWYLFsAsBRAZqBvwfevnbgcWxEc73N1KgMficxrimA88A",
  "key11": "2F3RER3Y3WqH5xtzPGxmS3wQz8qSDfSkFt9EekVSqWVHDGdbxtcuXQERmZPhcnxEYU3myZbJ3yvRZkZCWwPAJHu1",
  "key12": "5Dacmzpds83YsksHCYE8A4x1etX2RXRtN843DXv5ESwYePfMtfejsgzsM2PHPkLp2W3o8dG3FTSVV8oJkmDQACfQ",
  "key13": "4fopuHGP2LGATsqZDAXNAZdwEuE43NkAzSnkFU2Ctcs8HLWD9J6mipjRzgzvnfdEhahauSb7hTUMMeWKoNMDBKxW",
  "key14": "61pxGtiy2cx1QeuLZmhumRDmXqRre1zvvKgBnaSX5e8BHHJswnGMcdgnDdHEPNPLt9gLLgnzDkVeGdytDTe279Hr",
  "key15": "2Vw7a27pT69YFHdR6b9F7CpHqezBkxbdPqh9PgBqowvG7FjostcAjxvZ9YWMCFx3GmeyMZYjZyYGE1cew8x9jemE",
  "key16": "UYr7Xk5KdFBnhW2XTkhpiRVgnMQXkwsATdoh2XndDJ1RFqV1gwoZxdsaMzyhDy6jNwgqcrG3T3kLUJczVhW3az7",
  "key17": "2czyqkx3zzqdJwCRtvdnCkbh8C3mG1VA586irwy9UMmDX1VQst9V2zGfXcFdRbSh5pQdcdUeh744U9enFDuPSbyF",
  "key18": "bz94jXfSYgYXQBVfon533AYqPpfk3Zw829tNudMxqAAmECS1rw7mWtxRcUcwrG5qBXeSGgEXZqPnP3PwS6JW6J7",
  "key19": "5FCuWHy9syjEvGpmzi2vdiRcu6oybnWM22ua63dYwFEchWEfM9FUs9DcGRAAUaHWSG3bDPmFt1Krs22kWsXHjc7Z",
  "key20": "3kdsFUskg8mWBbf2HFL4Enud7zcMsc5tALwNDvj5msgcfLGMNbG1bCZDfbMThJLDQi9BCoScazgKfVEoMwTywg14",
  "key21": "1tLgwaQKhLowwPqm8WTiZtCnvKPA7pFiakQy6FoCbvh4wH5c17SUYnHt6c46BwM22mFfddANFpHa1rtj4w7Nwwh",
  "key22": "4ys9G2buTRa54SXxFc1Nc37u2kaiSz9tRA9pcSNVGKiRCPQ43Y18bRRsABu9z1uUrRaJkr1eFDLFfzrFs7nHqQ27",
  "key23": "3kRsJgmhUfJ2WtXCD3krGuFGBgJWsKJVSFAb2ZSLsjfMVzPugzBhamaKd19DKFz3uW2Tp4CApKAXaqZg9uX6zqWH",
  "key24": "5z13GwdXwYTKRkaCdV1AVA4mrneEz3pwkRuJi3PwBfNKjTM8DNBoG2uSJZFV6CRec8BbtnDdv7avY7xFxptu3mHk",
  "key25": "4SzUopXqU8g7egKMCAvsfigue4Hma9KqPB2rBMAkV8TwtDMGsUZodPzSoNS55Ao4hMBrYQ4Dy4mrTa2sQUxLLAn3",
  "key26": "2tpDS3UsqMYDiuWkfb6aAsNRPnB4fxvx6YHM1mg82TcK2mxhGPss9NKhAxQe7TqE7kwpw78kDgWgT2WhY5SDQ62b",
  "key27": "2XdqenVj6fxoKPTR3sLov9uppsRDDWU6m2CLuvexiX7XdCrv2sFNKSxrMEjYWgbLrwyLcrCzQuRmWxLpQ369QsLT",
  "key28": "5ZPpSKbtenD6LYhJe3qs71qfRYAiS8b5YB5H3hiRFMTqGJzFCQpFYZk8R2ijfZYPe66sreBDKXwLz6naktjc8gyU",
  "key29": "wr58epBoqr8hW8a1j97kuehhP8VB7bJq6DTdVvNyRPgEBnQE8eSUhLmW8YnZ9t1ALTBvTMcjKnYP8jPQW5JT6tj",
  "key30": "2iDs4VQvhM54aUJVfCtp7TC9uBET6tVFgWBiNtxSopNWKGCJ1ZVzkaea7SMdyU8NvEKiAsGUcLsfntz9gNjMdBzK",
  "key31": "5eMdysEnMKobmSdUY2TFo1rG2Ay3i8WCCKagMP29ujp6a7b2FDPzJRSAZLA1NYZQP9Bpgi6rQ4pyZerfggTsjqGa",
  "key32": "4UidMTHiN7SPFx5NZ7zgUYB3bBGXfUWWbYRBuPpfYzZN4kSjef29eNYGUpxpLZj2QoonKF93vREA6RMSCSUE44SX",
  "key33": "HrpiX9aXSbGKqfPJ2TiZ43Qus1gohWysv8djB7dk5Ki75fjNjeT7iT81WgCQe7u7nfUBFispSyH3t1hzGysbham",
  "key34": "2ayt49X9vgM6EVCQzyGPD5RwYnv7B1Hn1XHhW444HYV17UrxKK3ZxXGECudyfJpfNFDyU9W3VVto31oTvUEgHRo2",
  "key35": "4tMDZUhxcrzi7BgZNQa916C6fPyhPBDu9NmFXJwxQ65L1t4c9rUkJovERvjWyfURFxfZJgG3CQzxA2SKU7PJyRzT",
  "key36": "224t5gJD52kxdx8WWWCh3WY7GzKjFnvMkZXxwtVV4TLVH7x1umYh7qdkjvK5fFgcTU5WoNRYdt1h4nu4uGwoY7R2",
  "key37": "5Cr64VE3C8Cz9iPWTmREcUFQKnAzXdzdwHW5BHcZwZ27dRtXk5ESNH97W77qY5dJ5kqJ6pVb8owQV9sz2qYhj1M1",
  "key38": "3W3S7XTnjDdKnUdaJc3hB2n9njUYKEzX9ukdWZzBD1jrxHdH4jpET5vb8ANdhG1igwAHXZ7arN3Fd9onv9ggoNcH"
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
