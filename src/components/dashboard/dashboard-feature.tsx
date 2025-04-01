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
    "3sPgGacY2fafTx4W6QPAVPH8NFoiGJgu3SrDQwptHwTRTWR6gG8ZoAYyuoExBsYRb4MGeAEYgGrPHyZ6zypES1CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42je8JXNoad6Ybs7vK1j5UEC9aGfafiwNpFvH85nhMGB6tRcgbTtyxGPzAPmCoL7ERsFQDgNqpKw1zn7kTiUMnNz",
  "key1": "3qpMW4GL4o4mGS61gh2dov5PsTPUrASYHXpHBukNgZ7xnGiEkyrC9G9oYSZpjwLxzZrN43M2jaPZ3zCLq1cihfEp",
  "key2": "5S8v716y8eqRG66vkLyiVFebEc187WYBqEeBwGczKp6n4M7NGFXY2d6838T6GVftcBzWhnpuMUunmXPcL3bfE9iZ",
  "key3": "5QYzyWFgYrV2VbCbddhaTPmcfu5FX7c9CE5orQTNsfBLEVMjuoLmeHLK4q7ucnQCmPazvLpxbYMvbKHxjCpWLUsD",
  "key4": "4mUhYhyN3aVj9veN9bLzC7B2PoaZxzJChZSi1sNRG6RnpS4CeaCuwPm6wj4GvKpZq8D2ed14Jnn7GYm2bpqZs5f1",
  "key5": "4rF7dG2Vqs4dqBzyqrbKzqncjrK8pcqR1ax7rM1XpyCcumBG5ygQy2xQhDBeqx8NmHmV7iptMDoG2v7xisbVAajc",
  "key6": "3bG2ND4Rs8Uum3pUhX3eaYZ9cbx4gRhRxaZgro2hqy2jV89pX3JdWoju4VotFvLmr1cGWZNJ8YzFrbRTLgtzqHzS",
  "key7": "3tgtzpSLodFbs3QU9vefzxT9n825ALcQrsnaMmmEGZc7LehWHucG338Uc962yjga9e93CYsouaL2cMqFc6EbXW8f",
  "key8": "nsTBrdvBBtYxBUEFsXEFjqDbtRdVHkG31jUxAgfYwFNEhvTCyDSkNZGRSb1UYJNNMDwbk6RzCYvsC6sj9SzSvDE",
  "key9": "4iaR2XX5G7BVtN9sMAoD799Q8M6ApseoFFjzFp922W9ypyP4RYKJfbQfrATotKgLFPJX4XEj55ah4QeMGWuAMAxK",
  "key10": "TNvUJTPETPh3f5scBM6zwoumWfzkSGFyP9eFRgSEdnFfxKdEAjBriHVhZnF4c7xqCAZdRfSaApsJbdnydno1ryu",
  "key11": "26pJDgEfxY212X1ohTkyx3oGaPtssAFE5ueEygGtGiCqMzHMtqiPRSDLdFybc9UabuMax1ymiw2rwHbJdNetAmmg",
  "key12": "2MGeahNkK57keuUumsbgdVaAAgwMiAdB2fAfvZSDYTuJ4dyudokvQ8uNgE6KAk6BYEWncHqEzQBW6MEecojSWisa",
  "key13": "S9M8euTQWEmJDzqbEDoTiEXXLRtjao5dxP8FFsRgC6nkyHzkHuqR6BoCpaTSUqRwnRHk8ehsK7hRkF3iFnmU7WH",
  "key14": "5wSQoP2SYXPGrKhv5cdToiGD6A4RaEV61LLqKnm2dSAkRFSjGJaQWRbtCtVByiZ9G9nw94vQdmE9iFAKcKZk3ms1",
  "key15": "5brpjgeoDNGUZv5a4hVsW7o6LjwE4zu1vWXUYNgCYpjfQ5R2SYMbTjfFDaYW586o9RVrtV6RnmwxgPQ2pYobpr7u",
  "key16": "4cyk8svyjrZhVtHm9rXFMpBPNpMwkxZyd14C3UoiAgakeC1JEHzHK9FmktwhERtrh4BX129bSutF86XKr6cua8aZ",
  "key17": "32T9dgH5QWosuBaW5BxPoWS2dpcJL31zrEn9fz2jCaMERZfaT311g221mNeesurLbpBcfdN52z9emqvLpz9VHzaA",
  "key18": "FmTTVGXNi4ee1HUGbduL4R3iEU1KAcsvgiapM71WK2V9SMbsbrVoX5qg7yuPKmirHg59ESDs2PwKeKK9qwqzGDC",
  "key19": "5VxfkMnxsrw957WB2cq3gpXJ88zoAK3rW2pW2ZenX5bHJeXtDWMzFUHEka5fTepitd2QyWGWiGdFuq2o8FmWUpng",
  "key20": "4zVgaoKhKjGYYywKmjiHMugRuVRuZC8YigW5HqbCJfAgAqcugR4FSsSWuZEz56xtGRQHbU6SZwth5FQYDHdGBpyZ",
  "key21": "5CB7xFVjDPm71FLVA2orAJwHaaD4r5nYMbd1vCwYRLDLVzBfCAYTUSzp6DVETvuK3Vry9TUMaSfLLJ4Z6zwpZmMa",
  "key22": "2idgwwZftimLpPtKodD7g7mmVTpjCLYjtucatYkYeqzxLBBRKNaTY5xahP1MZDvd6BDWdSEWfDzK19izJGhLEiqb",
  "key23": "3izkhWJFhiNQtt1oasAxceFeqv9z5jo9wT4Q5hPqB6DadVMsAuP7JcEkEbTPMdCqrpVHP3tNw2y5njAMvh5fwmNG",
  "key24": "GwRNgTKjGXMSt6c94RsD8hqKqy13rsYzGG38aUkhdtPf1F7PzD6NY4bZb1oo3bsZqdkJxegViJXZyvgH3J6DJN1",
  "key25": "4UAutfQSgCidSLR2FmKmLUE2RY5Q2mC52UF9Mapdnapk9Bxq8Kav72eY4jBSUy1GtBNLMeB9ujHb869jrF1Nr5Sf",
  "key26": "jmfXoPG5t9JBpVfUEYzi9NEQmZxUfn25rX7emLECkwPrj3n7J7FkCfq6sCs51noLXui2Eg6G6WZEW5nw6DpvBfz",
  "key27": "3ywYB919vTMtkYKLjrvaEXukfH3XS4M7GrZ98gEjzaPgJRamD2Dihb389bFPaooMVrH8FdTu6spgAK9WEtHCMPrr",
  "key28": "59Ubn5nkkUh7g9Q43UnMAgiB5J9SrmH22hLNGt7vceQiUcDJcaNbsT8Ssiku8Y2k1XwKHE2Dv7KGgpRsKEi6hAav",
  "key29": "3FQutnxbatfUNDrhu7WqqJf73Y7MVjQ2XB7sEpri1wbtkw6bcrkoTDyuTLX5gPAoyNjQ3WrQD9wccr1dF7c8xT8A",
  "key30": "5nSrMrD7tFpj7zAt7mmTHx1SEApdGRwCHQM4AjZ6b2ngocc4MJFAnpZE6oKZuPZtyuWcomDLMGt5FByVjFMosvmS",
  "key31": "33zrWFocKWEFx3ztg8BFDBbwezF8zBJxNiFS7n7nmkfTnA9DsmMU4oarDXzELXAq143rCD1rPY1LQFSsd4TPECEH",
  "key32": "3fL98xtAHmKtVvrvcgG9YTGYcjq3ao4s6nBSVvDiJJAfKrJaBF8z2VUJnYF1tLw4tFSc6uT1bhzTzG67igqxJCKM",
  "key33": "5DtbDmrg97m4yvvjjzVdSAxaf4H6QxtVtPTkvLVZMVXga4QHonoquqvD5rzBdfeowmme8SQZLv3WRtC5oQyBDtd2",
  "key34": "5EsaDyb9zTnQcrgU4evyZDWYaUNjZG9sptTeQAQzFBpstVLSjU6Twzx43QH6RRWjDw4xSz9V6Jc6Pgmw2NUnwEEy"
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
