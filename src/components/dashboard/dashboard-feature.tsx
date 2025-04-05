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
    "3EucJprfyukrA8puacabLEpjb71NofH2KLmBSTjgSueEbkQkUTob4NsDgj52xeMxDjP4HBBnKkPaDA1b3VQgVHkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mqc6XeM6YEynGZgLgenpfVe4fvqbjro5nDATdBYbE48MpmoCvRC9qmFjBV9P74e2pWwphhZhkG7T66J2s7rv1Mf",
  "key1": "3PYxcs1JUvdYjvj65P7ApA3M1NTuFYQVqm1na6Joe5jGTTmMbTST362bWTPnXLVNrDucBrnftvZ81LSDqsKL6Qoh",
  "key2": "49ZCog7XYideeJfk3WcfTbLMwVAfJB19VNZDi2DA6XdPV99UVAYDE9ywuyECQMkBJM8n6Pm3P49SAnDyLTEDGztC",
  "key3": "4NyYGbppuBfsvqGQdBQqiYkrHsFoMcg6APYiNvNN9g8cKCrvEqcC8hzsea8ogcxHudGhTdFDXfe2aMmF84wgoHAm",
  "key4": "2PG7keY3CLmVNrD1KQGVAa8tEJGVfdHZ9JEk3e8bmQZsPckgRheyZajzavGRv8McV7GshMrD8W848nDhi3JZxcF6",
  "key5": "3eKKVoCiuaVvB38usAMnRWMGiY5dx3chYyr7qJSp2AGsucG2P5vcQEb6MNDr9KXqDBgV4ucFD5b7xJ1htt7gFXWm",
  "key6": "WgKqUCz3AiQvHmmwqGDAkV5ted1yc6Fygy7KvYTzcoSeTGbJAwHVwMEZwXXZiPBbEsnWDRnLJUnbWfgAEy1caUU",
  "key7": "5BYGofohSz2NvUsmrEwzDDKVqzcFBNfWkyi9rJmC5QPSRBZNaT7iJ4jLHk3TjsV6Lo4Nzpb5qaXP8PmHur5pETeD",
  "key8": "3NjXR7Bn2PApKSjjtvd1JaRR3JJFMkbGh9kXUWApdcDip21wKW6ZD6MtKXS7unCHNHjDWYPJ1NhGt2HCNdm1zugz",
  "key9": "5vx4ESRdmox81b6UbJLu3ArjAhxuL3XWB5oiwVppogN6qgJDGFKLB5HMzkcXxMr7GYsaKAe4AJnpgjJkLQcHvJi2",
  "key10": "3hU41eBaMsZQoJYw2i3tb8BPG9gRdekvxzVbC679JmZdRv2TbbLB8LwRV7YiLSMB7Ahy4cAU9ZfgsYRfv3Jwic2P",
  "key11": "5YDu4DzZSRu2oQaLLKZssRuEMwV1HLekyLFjjBaixbK8SZBKVP2qyv64D1Mezd9Mo2pWxE2yr1n2tNUvu8xf4S7u",
  "key12": "4gjc1oAAnA1XUozGRYsgzcrSALA1hgkv7UEm2eZbwrWznDGJXU7KUwVQa9BLBF4DSZirhXtJ6nTdfU9tyZMSWskd",
  "key13": "2y9gGgtdi3qeMvAwAiPKqiCCoTWvmQ2kx2nN4YsgCMjt6FfY5yfAHS5Fe9EVuFht9DtFMGC8BiTG1Ugn8HjCYgzQ",
  "key14": "5VJJyDVbPkbpFnGKNinuZHT3L2Ay8ah2TBXyidYZgJUKKRWbE3R4ZBCM4eSvbJF7dujKhA6XtD7NACagqvk3DeMg",
  "key15": "33YR3BEuk6YuDN2aaohpcLrhfF9XUTCYsn2bHnYMKgzDf3ejfdLz96GczLuFWjK99TcWxUDARZoKs6aNCzVj5rBL",
  "key16": "5XCEV7KgNqS3gV59JMmzeWyZuVW8da31bHfeQ4uUcvkUfMm9763xa9yG3bnMg7C4MiDyjeYvAwpPdrBQydf4Ub1q",
  "key17": "3FRh6642DMcYhosnqwF5Xt3xr7zqZymzJ6vAdesuxFz1sbXWhjLvvAhbz15GbX7ZDFnGzfKh97U7eHwKiaGpioU3",
  "key18": "51NQhmChiETck1oXn1rc2B6egJPtYGnGYpSnpEJfjf4mFDgQbAKcRvmCXgHoSHTBXJA2A5jsZW5pU3aaUJjSazeQ",
  "key19": "5ZMj9hjRn3VNKZG2BzbCadSWJYtWTTfHqM64U4rrXLDcysSjRaRQQJww1txqgvwZ9UDGH71xFzRbGqSMdifZAaep",
  "key20": "g8w6T9sAuxA7jMUBX3onUeUqxWsVYUMYVtfhEhjkYerKHo3DBzC4aGr2iNyNajzEQgrc6U84XJ5L9k41gVsjqi9",
  "key21": "4DdMn1WnGaNAVFwH2UsgAZH3NwWsGAiPWeWsFQjE8gnLeX4tbsKNnumcRySYxCiixqnNGYq9PEgqo4kiSFX7kCgU",
  "key22": "4TaN5gpKNhz8huB3VYrzDPDfNVLJMsAcVDEmJRGxqJZa3hLJEehmWMcbmiDsnBDmCTdLecrwmgcvcwhMD8vJeyQG",
  "key23": "5mUmTU95qqsjRsraB4phSvzDvhJaVdFdrAvCDeFLA3yUWMvmdDjGG97FFZyBJowbfvkMSNfSF1F71vDRt5EiSGx3",
  "key24": "5D7qh9QMh9BbeEpm5WfheYwBZ21UULNP8VvHqzoz3s6daNts6ZVnk7KLwU2DmXUiZckPhUXpCpk5BcR17MMd4F6Q",
  "key25": "5VdHEEXgzjHoKqpP4b5pFKop9hJYd9TiNAKgQXFdiabxVtbfpvzfk9AdDywhw2LLGdGpHhFJYHzcQSoxxXtAeyqw",
  "key26": "5qA4ghnF5VLa864fKFiaGnhMuipYJnPnat2j7AabFDcYsPmN9hV41xPtoYYvTDVBAgytmgrfaJDXzkyMvZDTL4fX",
  "key27": "B7EXiuBYjKizxmSQ9uwrFQrG8pYy5qgn7eJBj1Cm6ZYDYBhpfNb6pHvoSVuhVjXmYiyDgheaUGfioock1eHgaWL",
  "key28": "N8VnZ4KYgBje3gVx4EZnaVGk1nvj7GJELjwUVJdyYo9osDFJGj1wYenUjbwxsyfKDkrW1NqC6SCpbemgsZSxrJC",
  "key29": "4yHcQh1iCrRTfcpSYdwaqU3MWDwFfEzaqmkWkXPGD7dVXS6HZBtJ4zyKqDCmxTGVTam4LddfwK7aBEcVLefTCma",
  "key30": "71KXUCJSvba5L5tKBKDR7tgUTRJDXTkbZEtSdhXk6zMt3V684Jct8cRQEM689R2ffqRgSEt8XFFu5KgM9Scjeqj",
  "key31": "5WUYQxPAgJve88RxuCJRRY1GVzs7vNoWLUfaRpcukuv9ddnvpHQ1pRaXyq4kwNZa9uLcgMypLa2Y43tnNK94rqdo",
  "key32": "3uxsM3WuAZ1Y8NDdWcBXM8DakkSmDs56sXA5dUNGDF6DnLZmAgSDG2fJdVwbZZwCdj8mzxkCB5HPhm5VYXD7KV4p",
  "key33": "41aCVVtkz2r8cN5Maf4QkpkDu1C9ncRbVtGgpavPVEFmovYCLmwik3C5Fbs3gk8yiytE4YxPAD7nJVY7koPiFw8v",
  "key34": "MdqeoD7ehDdL16aN9KitQ8jVoGWaBpRbfy3SAX6nvqoEwqUVf1gyqKBmxFnZ9BZP5re7cGLSNhwjrsyiRMJ9tFR",
  "key35": "KyzTa98WRV1bAYmZeW3UwMCmV7cBoeLZ1nf5u6ebro4GZxDe3TocT7EtCKgkAayFsFtTwfKWwAE4c2hGnmK4zk7",
  "key36": "F6ZftzjhvmEePEvA4kDjXHBecHGdDK3StFAYT28rFdBa233vhoMKMdxZ9j4msKn7yXqa4nzequCsWECHMzYaR5E",
  "key37": "4VoPYuPMLdaqXhPZdiyvt6RyEMdimqGmHYKNmbGeEUDPSuoDzZTtbSXAUMbVGXwuFPxSTL2W759oWeeRADTQUaXz",
  "key38": "35REFtX4Fo7xC1ATtAEbfp1FAifU3ToKXwvKDKwfB2XqE2hKnPDbBKarKmS7oEVtE4Psn8jkS5ESAskkPYUw88dd",
  "key39": "4bc4F3Tt9ZjDZycy5Nnp8g1P98ZDD7FRD2noRnW8CADtm7tvtucRRDd8ZCHqgPMa9uAikPoEH7SEgPJNNNYDDjuX",
  "key40": "ZDCSdAcbFHj5QHYzKnn2MACiyWXW5EGxBfYH2cbG1yNwd9PWGWwqsW9n9qz4ehDjzXQ7AizTfjDipRZ2KbrvQnw",
  "key41": "5DokmjZLM7YpqYvq2GMsYizoRRBHEadFTw3GkmkuHMG6YqPiAyfWpYSfkccYB3hSkp8h8b1yj7H9JTMrJqGtPxTv"
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
