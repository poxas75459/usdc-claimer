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
    "3EBiJ5qEXGvycjbwPE8bSGi4JJASTQ1hWFfBak4tsKiHrBGjrsFVagpLAASk32WDdiFjNVyh9Xtqq9TFcevtxZV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgATSZsqDcakGYY119xrKsoKuwoVcsU79MtUhtvQsp4Jgeq7recnnsmFdo5CTPwuSPBAnwHXiYfCpNrZYJkWX3x",
  "key1": "221jpdEP2Skx3MyKMSMX8mPrHfCPpJvdyQUuY4iYAuosMCm31fW926RqGgNryTLxmTEahugrrZrvBrW6os1RZfTX",
  "key2": "Sw8uqbFtd3nmneVV6zYyct27F1123hSG3AJ2mheBxRKPVt6eFRsaJ42xRLxNsjgHiSiWzBf3xetKozNnqvyVDuq",
  "key3": "yLY3Fqj6dnXnFGR5DoS5jQwtCCSJra66Sm11xyM7qwyhj6n6NXbmTBibargf3BCJFZTVo995urK4rgQQSTMPpVr",
  "key4": "2R1owiMKsHn6XW3ZYQYdzTcbFV4SAVDuCwJVkDEpXqTGi8K8kqdxS5v9h9y3J6tnBWmmcAXGMkehWUHcvkeTC232",
  "key5": "5DFddTGkK3b2jZEjiEwSrs865XC15qHHe7N6mNgA6xNLStEwQxB1rJ5hCfM9sk1wrBr8bMhukieJq8ii91zryPkm",
  "key6": "2mprXAuxdZs9QDTbVpirRAC2p1Vn2RdKLVwsgxjq1LEHgDekt1GsaCfBYBovzp5FMmRbLL8mrxSu8E5r9cAp4sF8",
  "key7": "3ARRPWEvRK7ujj9rchJXjSoMGB2kUvyzNKVyEzWPGrac1ZoVy331KsKvKL2krV6ASv63swHwftwx4zpuDbpVMUdU",
  "key8": "5UojpLibptnqqxjygG5wpZDvJJ1K7httoaZed3Q3m3zYSXB8po7QiHWwtUNPyXptuAVJMAvhtozMEkvoMAYkUJia",
  "key9": "EctzXWXeb8GmBPu3C9fm95YDG5SNG8ZMBTS1K9pdLxAJq3qFdDAUCG3KnVub5xmr2qHkBoNAmH1xMJUuT4mBS4n",
  "key10": "np5LBqVvzNDJ2ShU8Hya3CdKwT1bBvsSQbTzeLQHGngWhJZnrkGDwFCKMjAo9kXycifVLamP6VQc7MoEGXWFDFD",
  "key11": "5ALWMDNVtWGfSJZ8MC7zLGP5FXfJ7yndySGpU4bgDsDRJJqnn7oyPcsuWtFmSKNxNiKRj2Kdr862jmtjSLPhd2eS",
  "key12": "4WNLnPVQT39XdfSLH2m8CGwvmX9kVTw7UoqJLtSVn9NtCJ2HocXpTU4UJ3i1358oPa1uxu7SGDxiJYoP36tVPuQd",
  "key13": "dYjzr9b9dAPDHKC8rNkHaoo8VhwemKjW1mB7N4yE4Mh4u7WXhbQ9saVo8WWHocM8VerdrZmjc4ekb3wBhbEAC7A",
  "key14": "5fxNUa7Xo2K6cjYDTGo2Tm2UWB1AwtKS4zMu9VP6kViQGHozFikzgsAfmJWVbmr91JmqeYJdP8Psck5nueniqaCk",
  "key15": "6627VqRyuqAhXKTiCSDd51PaeD6uXKdw9zpmEBesSawu5TVq662TyKuHntSnXTg9S1CVzzZzT5WUGrwiTM7PoA7f",
  "key16": "TBWtKsryi8iSKUnkiine9R8d6WWwhcxLuExLjWvkgZfKhg66sXxzaw3xD9ox144Jj851nY1F2nLW9BYu3rQ1Jen",
  "key17": "5Ls81G1hRVBiyuyZnXroWgSF2QWt7HxdmQQ1ewPKwVNuChs7vytZu9cWQWo5KVuFxa15muNCkV1PLPv5z2JpqKUN",
  "key18": "59iffZH7H8mn4bLWXWnEdLgU5cDDJtzjWNzeutn1quZLcx3Q2SUiBmB6WewsGGYzQw3zVEGUVF7Ys4CbXtzowX4H",
  "key19": "5j1sm3iR1MfSjxkyrdTCrTvSLq6GF9p7F7i1PFLj6AXNJVny9sQWfkfVeHrVZY1wgf2uxKZLvm8n32tbH1QHmnzu",
  "key20": "2C29coVu6wMf9uRTywUMjZzm7KYGqswBy8qgLGp5hBfXh6CfvyWVngRxt3MxAVEBHpTprWCVGNqwHm1vHctud3Gp",
  "key21": "2p7WusG8bhErV5dDmFxC8QRSgvcEzafhDmaLC4crRxSaBmqvfUo8Wj5tjoAoEqqW5AjeagjrJhNE9R3Y9Ktf6cTS",
  "key22": "3mGMn5MHsP9v69JBdNHh1Z79aLAPeYJMYs9kFLBcKFLR2LTPYvv49Bj4XJu29T5zBpoSs1xKTgFMgjDLVXsAGESg",
  "key23": "TVWwzREeVTwBf1gMn4HGJuQYHfivsWsAqZw6KE1mdZ28FVoTTEBcUNnMZV9kCQPbUaRka1H4ck6rZAgxWbjoLxg",
  "key24": "35eKEbFaAqAckyZzejyUHf4BBxuVcHhGbJZn38u1mFiN2mDWMSTv3FAifXMAUZPbitCLk9K76zwKHzT8DUkS3oyf",
  "key25": "3Sthm9B8Z1t6EvqKE54WQSYDFPJixR5PPTjvAATabnCFb1Hxn1xSJbHrRkGtBCVJuJctwc2WQEuG9CmDk4obKuXc",
  "key26": "37mjKrPxENCwPCsbScqKKLyQctVQRiWwtFZsb14KthsMEFKPemG6xoso4ecxnM19E6q1zzc1najG4HEraHW6SM78",
  "key27": "5WTP194QZnJPUXrY9HK8zWRTXbon8BHi5CaZNpjDBUBzB1P8WvrfmFo7uKz2qYA92tCQUpguVPK9dMGZQk12Bh4o",
  "key28": "5vN36xxaXbqnGiNCowgSDfDh2G698CCE5hKsfToEe8HkHK1vQ2jn6ZocrP3cUyNX9Pmc4FKnmhngNHAjZXVjVf69",
  "key29": "gwgNX2Jv6UJuFEcvrHDysX59mmcCeVYXUtXmwMcyWyRNBk9xq1RVV6S6dGDWXaUh3NWnhMAT7o3ms4ds3LnDHfT",
  "key30": "32bSmCdk4DRajn7EeyrwUS1s66CKJNYMGunRGe5VaArqMW5crqdyqTbFz8RGYAE751bShsjytW9c2YJ49kSoVkFZ",
  "key31": "5Ci4YACZg1uTT6C2VjnTAhDYwRpqDZvmEtgDHCdjEe2cgTjbDDqGJs2otRrGvnVWpTLyD7r8teekHRr42Lcaegav",
  "key32": "4UauCHwtWAAXhPYfKh36gtougWqVpF6SwFmMwpA5xjpAF7hve9N66pevRDzs1jmuA5kGjdTUs9JWzezUrE3FLkeN",
  "key33": "EkE1wKyDm17EmbYq965VTyPnJ5hfMS5PBUazoCY1uKosEiHVMErLK6uRW9BnDQmjqpR7WzkRv8q5gkwkaPhCh2T",
  "key34": "5AEgeE7gyS19s9L5fVyn7Grb7HGHJjeEqGr4QnxcnJGkpEZXmyJxuKfj8gGte5N5iA8mxRYJs8SAtMDM8f2rndjb",
  "key35": "4uFde46foDbJ9gJpcrQCmzSfXJpnGtiNMhVzr9d4yhSqQ5xoqfN7aGtpER2WvpH25L5gfdSfkm2VEkBMd9S7kkY8",
  "key36": "5rbaf28ABBiCPVhpm2RaxEAyx6fVA2UFskCz12gkrgJW4PjyFUaBvwtQCiKe8sq4SoCHcgKNo75pNhtyLiLVMFk9"
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
