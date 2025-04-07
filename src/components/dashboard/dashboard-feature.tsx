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
    "5daARmvq5Bi7dQ6rcZCpN2qu2PuZLjYg65BNEaT2aopgauxw61t1McMTYttjSTg4xoSZ358Vz1RoiZMBjab6tP4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hSs6S4qW1HGZ9RB5fL2DgN4XKTCob88WrdPhT9PvCbHbpi1nkjCP5hAKLYsJq876s2cAT5g3WhKaTsGfd3ukNuW",
  "key1": "2peDB9ZLmgkMdf7CHhFQ1fGGnEReaNyNV9KEUYpTZje1YxKtnvyA5cpRKzuSc9DfWckGXXRxpV38QepKjjakGK22",
  "key2": "51MjGBwfRgmLrsDnsPC6APYozGWXzFvEUWjmmQ82g39T4Wj1wqLWhUQhaJKjAfeViozWEELScDnTmnBgEALn9WHF",
  "key3": "2593UmnWX2pV9wjxrgG8LGZQ7YZh2Jn13Ma7UUaf9AojL7XXeDowJ48qbxjCaRkNMveFCbkLoDzwaucr6pHPhSJv",
  "key4": "3yv6cr1a6zNqVd4o2mizgZKxL5rHuaSofFSvXQig66DrFjMvX4Eio6du1WRJJLdpxj1qVzjM1x8KdVb3nktw9Ga7",
  "key5": "4TxJbeCQRiGZYFBgWsUZPiYsCZsj55YqtutSQRN24rhHdfRPdasrZEMV3d2sGTCAJMJcKLWAcHh6VAUutfsT3vBn",
  "key6": "5CMy7vJ8NNA5PPHXXwz3aCeBmt5ePS81gZcRqQU4TRxwvie9SufRhanWffCi6hUARtMSKL2fUTK5XCddAiuy3t5y",
  "key7": "3vg4KLqU1mUPha78HD8yrRH1DHCXCHbA8LtyENggCdCpAVTiBaNvjacDcdgEu1kBWYeSCGWb7okQaSg4LEScX9jX",
  "key8": "4bBXzm2ie9mv9McuQrUA6qTsyLRj1mMftqE9ha5DYpuuRJt7X7zTmNwNCFSaJ68i7Fzz76cJSXB7hC5fN83yeDuW",
  "key9": "5Q17Z8xNKHMKGjTyywtPTKtJXTKKNsqh6kWJDG9ghc3CjV3J7ABhUwB4JZSLuDeoLye7vKMvtf8DorFTx7UPZJiF",
  "key10": "gj11etkHmyytJSmyo3R27UVnSEtkK2ksSJa9pKcg9RgNDjqZUaTDJT4v17SRvEGN1ih7wav7gcjRTkRATZVKdEc",
  "key11": "57xoEMBDzQMUKiEmXuasnytXDsD3FJhqgAu3xQF1Kuf1V1oZaGnonf5eRmX5nRtCPkUtNCbrjNnWR3F4Ldd58yHA",
  "key12": "5ukDULDCE5JNbQdu3YrEsC9Ku191bD4PH2ohUxZirzbSgTmdY5t4R82vYT7PATMZ3vF6A7BCBMo8kYPveaShkSij",
  "key13": "4Kn9skuajFU9shjuTuoQDLxDD4FsMZeTPMFqVzbp8RrQBQ8hCqejY2aVJo2nRzZViAQV8jvceV5XrHeB6cjt3Zd8",
  "key14": "kWqkSMQft9cpbRKEexJ1ZnYx6SWbUewaPcqqUP2aabFp6FUvkTqh7xJRYBxwcDT3bBKdCXyNwr7ZdLcgvUTcFSL",
  "key15": "aKoVrvdrCaELxHnFHimpLWihmjX1JFam3bmK8kPx1rzPmsuKsNCqKnqUjkMDRnzuSkLZQBdHiqoJ1u75t8C1KDU",
  "key16": "2ttr2nG6nAvKwRHdcekrri3hnvpD813zRYjLUJ9cQN1MqGsiFmmciQMmvnxaASmkTaoaUV5LhMyns9UThgUQ98TH",
  "key17": "24Bi3gJSCHZ4n4r7cJsvStctVyzaeERK1AsrBHqA733ALKACwUqnqWzU6jEvvBQu2M67KWhG1mVLoyZJieor6THK",
  "key18": "7fsrBS8qmuJSc4WyEBb7GwocNJsrY4aLFBdwxWokXiXstbCbqvMrCyMVdhkpmaFf44j1uWp43NnyvZUskL3YZtx",
  "key19": "26ST2hjN5h4S9Q7dBuZXsrYWcjftiXqbfgLqZTLLZTPAbe5B7abUqXSmjycxEptcyGH8emwVUmLTUX5sBtaAdL4s",
  "key20": "5awdXabagdoaumJHGZLkfSgAKWnABnm1xdwFyM53yfg8A3KoShVFUaQF7BhZEBkc5t1DAZfiQYLUur8omPfYgg6E",
  "key21": "4RqndMjXy2a7wKC9yCJq19Cs8sNxv5F7GHB2yNAGSuT1T4CaMtXB3FPkbBuBnZsnX9nMNjHDDr7uzyTHpzpDmwLP",
  "key22": "WN7HpzcqgyKTXYsaiSdorytJjCWn7K5Uoem8deqFC1qaQRYLfVhbsmBwn1rQQJoy58uHNk1DL9jBEtw4Tq6wg3b",
  "key23": "31ehnSSuYYvERAyhRJonsWWszXSrpCD5QVJT3tv14QDEBMNhMz4WrG3ZgsFPyEJz8rYmf1pX8ADHFjxB79G8NXMG",
  "key24": "5Zj6GbwBYK1tXdW9J6Sv35SXLkw1Y4bVfR7C2K6TC69peQQKyNAmR3zLC7P35quZmny1bWEAyv4CoAhFjhEPuebz",
  "key25": "2DvHjT3JsbgNXc52QZGzUC2uop2k5KJugdJG1BYfEYXs92nK7zoAsyB5ysiZpPgWThBYs23oFH3BMzGVxHv9Lz6",
  "key26": "3W6Tx3D8KTJcrDZe9388jhn4ofg31Bhq79T4SRLCtqKi4DakSmn9xTcpa8knpJJ1zpVzSbTwv9XszQhfVsoJcjfP",
  "key27": "2156vPBNSTjGhMnr65QEKhZByXMiXq8bBDGYx1C8AFHGYvqdW8ph7M3QpMFzPVdepqEXqtWq2xNomcHwVwussa4J",
  "key28": "42eqHzSRJVSPcGkDDiwKyt2YxcMbeVM7rE6yVac68azo65N8mb57h9X5dZUb7VJDvmZRVhZkGd7G23eysVpztonT",
  "key29": "5zQ2zEgrnqDxgSFY3L7yhhcHRTBoh47jFUCLqD1jX5ze5cjV1fExhsPbt78j3kMKn3MfwnQULjqb8CNpQWo4XpPd",
  "key30": "64dRB4WJeKw3P6Tr9JphKW6uyUiJT2hcAh7HY59VyGHMT1DKmc76bgDMb3Ufv4zMkjNPxW92R14sMLJKQJcXQ5yF"
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
