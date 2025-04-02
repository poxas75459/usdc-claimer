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
    "2ELEggw4q94nuVG9cyUE3AgcQ6xDQ5GpSENYCiyearak3rBTjAwwA5FfZmGbTkx9vZxcNK7LtRRgDAAqY9N44ggz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKpeUqxospa1ut4U7BAhhF9eyndgmuaEyyX9V1JKjuR6A4t84qjuSXnwEfDMCpDrLe4Yde9NvaaV3arZgsSDc4T",
  "key1": "3XrhqfCghKMWtuuHVafpZdu4d5vtYxmgmBiESx8LhikAsXFMmSRqEf5aYqqQ7JuDdVyPx7Fk4XHGSShgdaFxMoD8",
  "key2": "4SVyxZzwvqcGKyxRB2Yj8FrY1UF2AMk2YTm3Qo19Qjn3xXUg31kqT4SFvh55yjReSoN3q6TYHFgJQogBVTFu3Hdd",
  "key3": "465Nz8wbhtoHLMJRF9pSxqP8PuiNXjnsZG4R77FKEKpCtQiBnXCWWvkM6B4PhjWZ24TubjWW6csvnjWzu1HK5yNG",
  "key4": "3D2TwdG5HVrYZr8QNxudwFwoEf2135jsGzwBHBnzHo1yHk9h69YJ9coY3EKRfV4Wfsm5GTLFGaFpoYaxWuLpEjtn",
  "key5": "23VkR11jWX6AMGRLpvkioSZrx8kDL5zEykVma3HmvUyr5CzH8UgeDoawEDkWqhFFgQow3vJyLoqKD4Lb8RUnCh15",
  "key6": "2ETFWWwMfrkGxPLGkWnqjrp4aedasAVUv6qqYoriFQ4T79ieeZNSDZiRNyX8dtJLc7APAecH2P2VtnfyhpdhefPo",
  "key7": "Y5xoCJiosqFsSQ5ntjcYATvh1V2iDaZukgMo5vDB6CDErCvKWQVbhwoqxgFykWjff1tyxZkfgcHX9CBGb7ovdLx",
  "key8": "3E8p4A9CZzrybsSVs8FvnfVdiNreNf529CcqKLHpKSLPcquGz1oHpsr2o2ZpgrsAVg7iXC7LA1GfU88T55XajFhH",
  "key9": "2zCQ4AQ4Azwr5fHsMTcfep67W3zJY3vMgYsUqxduQHNJmcRihN876Sekqe9xk7945amn2qjvE48xrAKHkD9tBXyP",
  "key10": "5s32Q9T1TkpGCQgWCYPKfKv1BDxm6kedXnRymhM4RSPd8PCd7g4exq5kE5PoZLKReTXNDb8c7YiDcoms3F9Vy7p3",
  "key11": "5swAjpjvHcEaFdg7Mdj2iVVVu1NXayGNbxZmJua9WCgZtqcPWufHKRU4attF2WAnzHs1wL9j5PwsRJiNhH8g1NmW",
  "key12": "GototL289EQ35KqzwPzpEw88nmgiw8JQW84r6hjz61xrppQyu3w7aPUtpFqmFjspPQzZxCVDf1eu2NksrLhjm6g",
  "key13": "ug6NDctupL39SUo5Zr9BQGs6EGUkdYHTiuQh7JsjywsU7DuWRA7Puo4LH7J2eoNmk1nuYtFeq8ZYAfJNPgJsy9D",
  "key14": "2Ja1fYCT2bRdhTAJ87dPwmxtfC7NeVowK5zdio82z2W6ngx9p5ACS2eiTbQi4X68GmyTd85kfBXnJbfn5c7DxqeQ",
  "key15": "9gPcgUxsUh41mvWLQGfjTFJc6RNmckdLQ6sTD8MzrH1HWn4MAV217LeXP2wHymBS3uTqG6dGNV1Y8F47wDuHXEj",
  "key16": "RXL2d2L235xd2Ea1HxKGGf5mJouXATSzD5Ler4w6b6g4ggCcpUbEA6UNqwQhk7uj4Rpb3yYZJ9RWEy3VKGQiLYg",
  "key17": "64LJnhyjDavZ88JSgMFjDVkgzajgQEQTXBqhUgEuzLXv81bPMqYkDsv9JQg6yKzYvyoDCsTgN3uf359XKveiv7NC",
  "key18": "3wa12kDrMZzzcBErtFdMDgjZJj8aoq3vtZj86ArcuHJmiLgKiAfJaTyPBxgkCWc73RwfXQt6yZm36hPLkZGYizK9",
  "key19": "41X2enegxL3WeVpLXHW3wJYPaveGiRW3EtzDjLH2Jcvm6ATiA9tYdwF1xoBncNTv6SRcosqC15N1jHV4ZDsr2mtp",
  "key20": "Mgw8oyhTA4y5prb25WmCWCpZD4FsyrgiYSWj9DoYaY16qrjhQQ42BWGhU3UpjZD3x67BFWhDecuhHEu5QhozGpz",
  "key21": "5DDcNzyF5a4kMe5aJAJVum32QP5oxTYUyyxYBUXpBm8f5uiLQxpzuF8WrL51SawHdUdLgcQaXR7qVGUp8ZEnAqTz",
  "key22": "3NTHWAoGzija3Ytr7oeegDLZjd6mL9d33hQqJByWfPdnivXNEceKz4iCpNq56k4a8bJ7iU4hd97LwvhTcEfujyBy",
  "key23": "2vB4Mgf7pXxQWkuKwninkXhM7yKTwNpgofpz4LnHTfQwWtMBiSDcoTn6ZShcqeh73xUt4LkNthd38SmdBQCrGUhZ",
  "key24": "4ZBm1jeaaNhzvEuhRw18yQ56egBxVZrYABuwZKpvSoLqKDdv8DSCTQqwQjPkgYme4g9zhmwJywVZhgDHH7aJ7a6q",
  "key25": "2xYPZ3XSKFKcindpNWE4cVcNYgoZ6i9UFDCNXFhMNj4UgJkqqdmj8LHYsRVeoNpVmwJE5zPt8TNBEX3CnBEEhi5p",
  "key26": "2YRbPaNQruiK2amBLpegnUaUFCrdNGVEUwBUxprwkd9YGhBAa8hj3LNtiKQN4Zk7JZ2YqebnNCz8WKBgT19isKV2",
  "key27": "3YnjzBqzkMPTfUyZjvvxMoVUKyR2VpkjVxKLFoFebbUVXMCYn49owt4BARamMAYFnR8rZhtBtJR19sf9Dcqg5Y4o",
  "key28": "2Ed1Y9vDtxppjNogvzgiN6nf1v89FonSSrFNtWVKDUJZ19YN3xh5siNERZ5qerm7PrsJTZA8mta2nrPcPdVGaouD",
  "key29": "233TXUbj8Ra1a3nY1hqbNYxTnNWtNU7YVogYuwTywqvzp9cEAv8fbyVNbR4kYKiikDSbKXWS9hK6ToLCwNakjTKv",
  "key30": "rm72D5m4QkeBsvjNwmWgrU8S6pATcarCtBdafWr3KWUSrNas4SjbP8XrBzRSjSVpFSugieBKxQRkNhJaz4Y93P9",
  "key31": "3cFrbLA3jqaaG9qjNKPrGLn8UoWNcs5nTemSURUaFoHbJS9sbZB9StVFXEZBPQSf2tKjEQo2AovMPx1DRbqtj5hL",
  "key32": "2jhrJqHYD7i2QqpiNTDX69K8stSxPsnyqUsPS6oDrECQcSXrM3qXbxsHi3Vu8qbpvG4ZNu2KMPFgFah22PGAzXQQ",
  "key33": "4SwubjVHPy1dwAao4Wthpb9vA3Qx3SNS81ABC7vvxkMZUwpQxHjLrUyG5374SRVjTVyGnTir7D27qLr8vj1vq7tF",
  "key34": "2p1xjdVia9ZS18JTfMFkA2B2vtop4SxGPdUrJrWjDrXKwPCNfw5jrDPft7JR7B572435CMvyGUoSKFQfzReT7u9K",
  "key35": "63PcPwWDm6Y9CCUbTARqPjQaXBg5zjr3qwMBh1KNZ5kvEEq7G7BBsharNFU1VU9UHLtYv2anPqsTogRSfskmpAnx"
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
