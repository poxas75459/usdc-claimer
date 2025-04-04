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
    "QU4wCcJuUp2KvdLwqLofHkvpXbv2cMhxbZZMD9CKijuEis42jnFoQ22ayLHoNQ3soEq79uTAkf4uoowswJcN6ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53EXAeH7T7eVacHz7P9Wa5eaqNcpoXBRG4MYMnBBu8SB94PjPMEm8oBDesBTJb2F2rmL6HiFzjNru8djix9KGjU6",
  "key1": "3XsUqzQmxchRVa8adfjxBtgz6UHUzkrTAnYm9PqKCgUGu8Vq3KriEgWjC4x2aogbLfAH3JyMFXeASj59XHLtjs9N",
  "key2": "561pduREdNGMvvp3fYEWG8J2pCcugCLPE1yscPWpwg9mj2as8LHgKi91Sq4pAW9o425EszybzGfTikcayDkGjo93",
  "key3": "zuAnw5kSbwuEP28aSx54cuyLu2wKXMKKPXj2fhQXcNpuyqBaNaUDShpa6qu7DNuPC8zTFayJbH6AGfJR7nxTag1",
  "key4": "62TY4Z4CEJdBZvze2WyLAZ1M3ewAjgMevidBmQVfKz7cs31weJWKKiutTkjXAXrXKXPrw7B74ZGNEKUzPJyDxs7P",
  "key5": "4jHxN5vuLJSzXTSWMccqnct8nL7prRLf5cXuCziLebgM6y6CeVB7D3LfDg6RuA89ckJ3JaneDLkeAHR7GoGbNiRD",
  "key6": "4aUkfBexPBYxwNEZj4RZipeFXUezRVB7ijQZryb2Cz77cKxtmm7uDQLDkiq1uAS1MrbpBAnY5hzMrQXzpNChraCE",
  "key7": "5DtzF9CTiPMCXLkErzZbecjdp7mGjepX3CgNZbs8ryGcaSEVsRK3AfEGpBC6Ln8zYYy4Ffg8pKnYJinC39u6Qp31",
  "key8": "4BcmTJkc72FUM1tVS9Dxc5vbmEBycDp9GAPRxdS454DJNfWxP1UQojMX1MrZZe6kUeopwZgBCEBQwJPLV7bprCtQ",
  "key9": "3Xv6jhTeZ3FKdqTodxwt81gpBgZcbwkYpMqcWLSKCPFbjvJDWq43cdDvBPSbQP9myKC1HMhU67Yozo5FMz4BZ9mb",
  "key10": "35kBQeuD7ZfpBoibUijfMrbUbeBYF3CTyu5D7GZsVHG5sfRX6oCrW3yjQXKpgz8F6cUp1bRr6UPuLjUqXbx9cWdM",
  "key11": "3xYBHNdN71mTBKS7jGLC6yFxLTsWCyhvRd2N5zc6AT1ygGudKc21X6FXLQ4BuJf5y9oDxz8CnwWhVogDjSkSwisn",
  "key12": "63DBL4h9479NXxWHgqZpry4fWbzojBRQ7RNgsqCsdk6ZoFJNgvK63j6C8wsbhGXjZProzuGZyGcH59FSdXWDfoVS",
  "key13": "44WA3ibKEJKV417sjUhdc177E8UREBHVaxcMsDcT6MJScpjb1GjK3zgKwrRKxNspE7P3CqaJSh3KKQo2GWKLWLR5",
  "key14": "fdPrSEkN5F2bGhhqKwm4cNunusdCSkJCxfza95gZWop17kwTQfMwG4HcJCnupJcsp23ksoZYJkTznqAd1Mvrbze",
  "key15": "5kg4m2aWG5Pj1dHcJu1wCTeJSvtUW3Sv8EeAJG3PAMY3sssAHG6WtpM7XxSG46wD2kyNUgErCujbbcCVuSsJDtY4",
  "key16": "4HM3zjA6RdBnvYhkdrZMohNPd8smMVDPrYQhxTJ5xc5ZAwzxjiQSFDYDmQxcR2JRnaPMhRL2YMhJ4mVYUpw41rYf",
  "key17": "3zXrzYHWKUBKKEj5AS1fNj6wxvZCBQqYqNyHw7fo7SSxFNELpBGnuZWMxoEZxm63R4scf8fb4iVbLwrduz52PVYD",
  "key18": "2Q73UWaERHFzt6qfnU8G4g52e49u7a4J81zhLhujweVGn6Nd5ZAVaDUwncUrj1CwKc4CvgUtsD6ugiTDfB8tXrSH",
  "key19": "3VQ89HGUSJNUNSmZuurbAvpvHfxF3GomFpkSj68YAbepQL6YQc18CD8qYTTQfpiivfwgXr3ZhkoQpbxiyFGKPTMJ",
  "key20": "3KybCcSJMW4eukDy1PFzm83nRXpGe9TZCmFKJUFmyiqMoL3gKHc7RdZdTKAQLs3dRqNMTb7mpiXsKctSfVznkivx",
  "key21": "2mkjixCmjNBgu6LMGQmQkzXj2Et7KpdHDoVgbdXdEkWZjknMFLYQJ8uBh2Aj4NeofsYnPBMNP9BdaBNhfBLiJU5h",
  "key22": "5zyUC2KPgpJgeFYbinoCLrhvDkYkLypjUD3BJLbSbGvyup47YUwb9dPUvcStfRWMFG2uVLrmbeoweGkmRG4tWwSK",
  "key23": "2jkVSjzkTNMjZV92xN1aL4SxftUtugncsEJHgYv2ik5sDw3mF95TxLxdqQsBjUhjPNW5eSzERX78VyXHfDG4TxPL",
  "key24": "5xUHZbnmyR2iqUv3p6LtV7WAjDK7FSoTG8H9xgRojudJvuPMsSJvnJDpGnJaUhj7kjhs5LK74Tjh5RJessGCxypR",
  "key25": "31gBcUtqEwbMYZ3ssaopbeEvYiEy5Q39RbZ2N67k5ZWcSmzEKrhE4iWUX2Kgv3EZbAkuKSbVVTTSkzobUrUzDAx7",
  "key26": "2HYzJMJWmYTK9sKj3vgQ6wQLxUnBA9qJJypgdNQ3GEsE3XrFMZ24omk3W7beQSRHoFzNCWXSE3Q7moSEmvZssYxG",
  "key27": "4ACg6YWUFg36VjyruGGStDyLuJo2zTTEC2EZpXfKnJbu2W3sfQLdCFDtk3By3UpLaK7yDXBRtmQbBde7psvq4nad",
  "key28": "5auPrscsnM5spNrAUK9JfPVr6HD269hxtbKmoaSFavYkAdPY15yDiKezuY8T7HJ6tEpm68sUDaR2PPzLPfAs57tq",
  "key29": "5KCVxkHzoFMp7yDH8ipgbYjA3qgWP4UEhqdj1Gs9tbz2Zyxu8uqpWPu2mFjm27otkBqmU54hUDgwP6BJQfsNKyv5",
  "key30": "5cRAdEP4eR79QNY8L9akg9M7jDKx24p938oWz5fuUDRbYSphY94FUux9th4PsuPYdEacsEbZV6W5m8FVcQa64ujm",
  "key31": "2YYY9HGgcAMFDQACz9jg5rZXWHs3NM1sjvoXeKzpwWm7U3GUGnChZVUZmRXM8ybj25X4acH6E896FeZqv53G7Vya",
  "key32": "2dKbjY3FrxjkjkCCwSroD8v98jYGLJXZn6HBXcn6F3urRRjdpB6NyLbtrNtx4ZKwAwMganSVTFt63KWCidp6AhQg",
  "key33": "2mQ4hdoVkf9uH34RAM7TLeD7u3fcEi8Jbt5SkXKEk9thgKLrrnQq3XLNcZ5cotsrD7YQV3ggdnM45hHN7LWofBNi",
  "key34": "4i7hfhSSjVanm8fT7k4S71KdAhatZmoAc8HuGaPnQyD3fuLx4zzG7YDkCrfW4UGN82F521SGjjqZ95crhYZuP4Tb",
  "key35": "b78VNBcV5aJ7eZmWqQurLK7QuiRoaANoHFFqGtJcUgxTDxk253SfhKyvWhhc8jgEzq5jDumPtfB5BKbMBzxpMCK",
  "key36": "2u2hp6Zaq8pNHzuepZuDoErTaJUu3eEv3WDiTYouhHMWQVkdqRsXvxLuTMSXKm3MGapaSjqJkAMojLQfEb6o1t2B",
  "key37": "5SHw7bVYoQKnBWLPFeBACAyxC7akPdtepT3Thr99GWRNNW6vfcksi9oECTDpueTC861LPSPv4ihDgPbsZ17iCbvx",
  "key38": "2v9aEMp9W6vNauRf7DKFKAfsgeX6GKwaqjwBKer7fyfZK6jHvTpttPW6mLDZyRuaJRDF69zanqvbtxzuC8c9BzcB"
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
