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
    "2qrhMkCw61xJ21U7YFgDF15Gdj8AgCucGHSADMBtgEHwRqjwhLAAxFbuEmXUgu4vQdk3Sz72Ft9CnzCw2RS3xDx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hnSYSvu5GpKcc7qhAkjQCVkSj3KULQE87K4L1S3Zc1gma34G7Yr7RwB4ssUzUvZsyhYfT8gc93W8WW8zR56yNeo",
  "key1": "3WJbRG4iNbrSh5hkr2GfQ33nWLbD6VHA4n8BtP3Sg9pwoZ9W9ihNjpmEEpBKjkD1YjVxbBXHyBKkBi6D7FnK7HU4",
  "key2": "VNi7fSTB838g87rEKgg74oTvRsNFQefqDRfgypXMnoWdb3sav4XPk1NMDpcTf22uV7PT9eW3CpnCZqkyTASoe3V",
  "key3": "5h1UVTx5XXgu7wiqtHCz9b2HZzsnnw8SzseNTvTzUdVTY74eTGVUdY8xCF6xziomF3toD4VpaPxsSevVVQnEc4UD",
  "key4": "4j21hhLZq7FMNzeHiJcyXv9UAkNVCgBVwWZZ2AN7PmQN6RMr5XWuoGL7By1wkFzMdoWU2Yxv4VUjMnnjdGy8gKvT",
  "key5": "9HAqu16raomR4Wj4VuWrDdRQg1C4vMkvwbeoaj8Fe9RyfqyyhjJTtqKkUUdxJbDn14ZA1DUCHh3nEwqwT869a4Y",
  "key6": "huQoUhNFKsNZC5GWeLgZ8me4Zuy18ipwK3sh6PH9gF3VsfhSC3Vs89R7vsKuRcGovEwo7cXUwQV8C7hdLai2zin",
  "key7": "4REaaybJEPriL1meN3FKV6Q5tqepuWHnzakVAASNhfkvasvm9Tw2SaftgdCWYCm4nTVgdxnockt8CxP7mjH85B2B",
  "key8": "5Wv5ap946xopsbkFdiKwfKVFRA6irzWQLCk9pCxEkmBU7cvCUfzvL1m7LS7rBcGKr1Hv9FQQWTYj3tA8vGKyJrt3",
  "key9": "4EWe1S6DsxusjJAzhE6YFH8Mmf6J8gv4hPyQextmJDs42eUCXrVjN4zuGweDZGWbJMsQtgK2NSBmsG4gUXuW7o3i",
  "key10": "3Kx1VSSnqWvALArxRteB4zHNhB3tfLCbuJjXjqLYDi6ctu7VAtP1nbC2RKKrUEGatKRWQ1hywAP26cKPkaUxfuuS",
  "key11": "5rt3hAqKzUq8ccGGp15oGTGaZ7Hyno3Y4nTeM1ky2fxM9d2HL5bKP1UeTp38U79MrKuX2sVGo1P4YZYAG2SHFpmo",
  "key12": "ECZZoLwxnuDet7qSKA1Mx3xkGP7HVamD6iRtfe3AsB2VPojFJ3paZdkoBEHeWUJZpfjJQuG5uZ4CjCKGyj1uWt1",
  "key13": "nGYzXifh66k1u2rDY9KtG8WqS4pKVCk1HcZWUynd1GrQdwBaMMFLWb1hBCXdhJio55pJVzKXYJdbaFzuxwRf151",
  "key14": "3xsjirFfqknZVixje7JSg4iEFVEhd8VsybaJ4hFaGKH5Ch4nRDPHZVq7u2ec7fYJiABF2kwnDPqjpVena9AD46MG",
  "key15": "2FaJK5SJhBb6npm1eST8mMeR24TQuqQqJPFky48YySeBE3qp49eRZs9nmMqGzNosvR9Uua9mSGWitq8oCAvC6T8B",
  "key16": "5v4DHyEzcP3viCyzFSCD5qwFaLqgMACM4KTMQqKtCiNsUPLBa9kFFdANyQeD6EqNatuDbyYvqn1GTBLxDesz3exY",
  "key17": "3C2DiTFcgx7smRnsgFKzBzRzkptjUZ8kWod7fCtQP9mDG8GhPNCnqNCrJzceqv1r8ecyBxev86hQzm2VwAkHfZvq",
  "key18": "5MErSqiYfQnaPUk5zYigxfcLvrHCstMkChr84ziPATYduw3DQk2GMaaYTGKrxzTGsNz9iVmD7q1KCAb4BMzgVFWY",
  "key19": "22KYHtWt9661k2wBXokMivD14zMuTfD4fN5Pb1z6ARHntXErxQ8aDyoYwxcrShkmHcYSvdmnc7cfTVf1omqvHb49",
  "key20": "3JbbY5ehm9fj5eUc13axUDGhnoaiDWt3nNxhQzcUPBK6Ujz6xHmoxBrXAPUmRivu2o1HYkC1nw1KjNU76PFmy4zM",
  "key21": "2qZUSX24fWFPfaHgj7q2DHW8xKf3SdK6aZ267qqYgWmAn2RVsPCuh6x9He17zU1CeLSM2vvfs6JM24qgPthUVZS2",
  "key22": "2vJ7eKaUzJorMhWTpbA7AeWx42oNxHkUqkZHcCPVNgf4DEF4wHmwsGTiUDAdwcYPA5pCpRixmckjLnRcmpqo2xrF",
  "key23": "rm3SM74sy1wqw1kw6sfbNBm13DGa1FeYz4GRCYmacJKFTt5JDVndp2F8bG2s4GGP5JaTErgLQccwYPAErzg5Uuc",
  "key24": "eLS4ZSpg9RQAdTLqPzEiuA6mHtHg8P9RU1hCm6dzWjxLi1LAatENUFo6RC5ixdCRYRDg6D966i4Gs5SZYCYTEbH",
  "key25": "3tSdSjb6Tey3u6QPELJudjSRaYkZYdPh7eKirSqxAWVz68zbfW4xWpFDBWRJeGyQpVmiykETiXxvdxuHUqLgmgbB",
  "key26": "5VaLc9HjfKaFSi9SqA8UqeEXSQmZhQ2ZkGSCFeXPtd27ZhLfsQZHjQHXPhLKSeYnoDyu5wy5uHbXWTz2r4KhcUgv",
  "key27": "3836imibbnNjbvbVYwA1rgeeFhy2dVwhCwyosLVj3Waiv2WQxtk1GcQ9M3xqMqe8PQPy2SinhsBzR5y9KdinFtAf",
  "key28": "295dN39RuHUoa1jKAruBkxfHXYzTmskdvbci1R3N6La9bZEiKGTcpq5sk4jNE8wdVexfPJGSi2zKanRAuHiTQFNz",
  "key29": "67i1zzG5KZNwMThx5xSPqQooD8i2FsnkybWbND41XqFvtHFH5No5C8kzbHBbfuurTvsGb4DHfgN8qJTvEW2Tnyzu",
  "key30": "QFEbYcEBBf3QP7WA3xNvHFBYoimV2hy2eDS4arNwAU1ve5vq1qQE7zsqzfpBwxLfingtuEzX8cZfw9WStmD3WiD",
  "key31": "2Dprn4QbotuEPYfUjiP8XuhPuCSjZepSqiQVWk4LdZFZg58LH9TWxaSs753xUePP9FoJ74PHCG5r8P39WLvveUCw",
  "key32": "4gLbV6HvWgVNV91y7iE2ME2ykPjekzrnbrwZEDY4V9HFJ5KrEKLE8y2Q4BXj6cVgUtJ8TDpvVjqDcFvBhs3nkxrP",
  "key33": "4YKWL7ZnJ9KVbMMDXb7L4CrvQWnEpJGz4sESnp6xKfFdQ9xfVtu5oVQweXf3Q6vLnYnZqv1dbCkuYwqA87F1E5J9",
  "key34": "5k64nv6rCwHiCjXhE52PHtYw4XRe6SNSSG17C5o6RTm4rQvCZm7LGSD5PeYPGtApY5hedwHdXwNBmhNbqqxCDX4P",
  "key35": "58aEvhWgnYohQvTLN67kPpCnWxQb1gB8aFbCFTSBmpEmyufT1j51YNDSKhm4a4MCXERej5Y9RDY5gGYPz7UCJdSQ",
  "key36": "3NtW5wkE74cbqpUyxsnPNfHbKNNoJ8H4Wz69g8F7nZupmWUfCh6i25wktfvE8G8LFpjrChiSdikFYUsEE6XSdKES",
  "key37": "2sjByPTBXgB198YeEMo9CWLMogjVqJ7MMsFGcbveRqoN8M851KyxzTNN2arVwzePbB65ABMP7YHiLQLkcABVW7pv",
  "key38": "tUexa7cpa192hUju9xDwkp87PQgypvXNXGrpMZ2UiisVvFwexxanKnPQPzyNsaD9J3PiukL33GNeRPy5HimURFd",
  "key39": "5MiNKnqYqWVANUKo1c6Xn6ceZYSC2s2wp3FAb7J5Lbt22T2Mvx4Yn1dfxKERtqGZ3Px2AH2nYk4SkaqqAccZUfr",
  "key40": "36yg1a6ToYymy3sGGGUCX1ArQBLQ9wzyUH99Ba7Y7ZMeL4M6sJCgrVTAjfHhT4ENpZTKhC49kpMJFWZPqWkALAPB",
  "key41": "igzcNRCtsTVpPPqdichbc4DWwS4YnnvewB3J1zu6QhumShLa26J4RPcQVVkHd6bpVnU6umiR5adHC2TsW7AgaaA",
  "key42": "37aSPRsuF555V8r1LPfVoMq8sfKVc6kmwFS11sw6wwEmYWZC69UUxn941wpC5auewDhoxmYDrSg7Q8P95HPDSRh5",
  "key43": "5dThkFcNdtsvRyFWjwnNy3F4tqLfdkNxHgowBtNKg1yrFLHzKUiU9uu1nSrjxn9QEvoFcKLHQosVEGnvjQtszXxW",
  "key44": "5dEdUZazr87zuBw1DftYcxox4aE3Mwt8zmHfAxD5Y3GWWVNVnZR2xPBpLqHhttK9wfb6YYEEojCw1SYiYZ6mEfyh",
  "key45": "2y85E3LKE2N5q5qDqM3R3Fvs8PDz78AFNagURW89EtF5KoW59dUHNFKu8j764xMxN8ocbJQjSe2d1JWnv1EzyTcR",
  "key46": "46nuBdqo4nti2EXsyRdsCEPabueyM87fYHZYXRNWJsZvD8wat1Cubrs1CHWoaqcyz6E8Z5bRU79KpmxmpjV6nGdk",
  "key47": "5NSzQgm9T12YCehRHFXU7tdrV3Z3X5rdvG9RK5RPc38ffRutEiqTdRoEvAwWEiJyjrRNDMNpkVqGSBNTGdTGq4F",
  "key48": "2AGB36kM2LksSsSyxBcmMRysbqwGFEzom7ZN5aAu3Hmvc3yuPnq69ifJDxQQ22Nuh3A27P59zgDScMVMmyA99zdg",
  "key49": "5PBQw9WCPbJpDnBw77hRZSTxVWdLQEim4hX2WgCUZxbMBuFEcPuanenpbzMPoDHW8bm3WuXw5Js3xhn6EVW721TE"
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
