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
    "3PwEgV1DQm3RVCGxafcCJ3Cai3A69NNFvVrmCJxGxsEbKv44pctkCDD7REtP2FtK15Dh2LTN6GHBZiWy8x79Lvfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21k4bj9BvesbMHCfH3HF7rVDdSTKizr1zNVGRYgRtJHyhGZP8dEvMX2PFbGsJR5HFLM84iChUT77jPeLhqftGofg",
  "key1": "2tyGnBo9bKYZPLxHzufDdRkWN4Lo5jPknxJCaZnBvX5yPJMLVtEguLxUMv295S1NjqPS9m7FKRpS5iqfhT1ZLLDe",
  "key2": "2CwggossZfK3gRQrr9RgkFhb5PKc6rNQV8umxcsDFZb5ZDfAMgYdbHGJC9a6yhLBTXVaN14Ubh3TbuPbSRFbmVJy",
  "key3": "5kEjst9qeh7jV2jBYxiZXoxGRxHZQHAsTMcp8PPkrikoJWHHhqCjC6JdHGF41ipeKZa7RXa5P8L9C4aPjzQHADq5",
  "key4": "5wmuhmKRt4ZdRK2vSjhgEHgsScjGLtwfNCRxxM19j7JQrWwUTYh7CbrZdZmESwjB16jRCvgsF8cKEzY5HDnj1w6Q",
  "key5": "2UxczawE7vJeFKWMdaei9WmJDVTR8oCzV48Zyjp8GYtr4nTwpQmuZt8gjSwc5gK8g6rUEmvSKe6QnC9xAV8kQqvn",
  "key6": "3qtjwvBnVmrSM7jBz8FTG5Hs44vXGR4bjmxroeEhG941uLQ75ceFBzXTosgAT2RovbqQ55jdwuUmcKpz5fuKcTMX",
  "key7": "2tjrr3ou4v9CyXB1jWZTpLKyk3TiEGz5w5j3xXJc3kVW9n1QumnxWCcy4arqnxLDsHrNJb2ykYvauzCoh4gxmHkh",
  "key8": "DX9tfvJk49yBDVCnqcdEtwp7UgFDDZMb9uXwUCcrbihm6wpNufghfKxvx25LkuhVwwAVrEWaGx3SnMjHyCqdrVH",
  "key9": "5Z6Cak99YVnogSzFwqv9Ab5CgsrA7rUtMp82tPyAqyD4brmWoSNhcXcn5ZARdW9RAZkDrcJrkbS224XXhgSniWbh",
  "key10": "3iVD4LVgnwWgCSqrRuE5z6j2DAvhZyVgPh1ozgJerJZrjusCdEgnCmfUL4zoxpE9o6spgP3PYoNRKXk4rCPjtsfN",
  "key11": "4uUMASzwN92xNYVsGRRvDjoXS4jHgMt94uhN18HrVmN7kVFVY3W1mHaMDBGDRt7zswfmuPLamyHQiYwv3UZKV4B7",
  "key12": "joFZSYkrPkVJm87EeKwXNyWXjpWT7bx7y4DVNtn8zbvBSeB7kYqQ9UyDbbdB5WiKWjMrcvdMzCQFs4hwVFJsoyB",
  "key13": "2W8Lvcc14nE1s937LJ9DxwgBD8GVqXqgRFfDtCmCZtzYLFp8pNk7AWwBzisVb29VWSDyQDVuyvXfXdX3fvNSZeLg",
  "key14": "u8xvufGaJwADMP4qwnZWYuxNCPcRPxJcy5hiyUJQvHPwkVDLvUDFn6YMraJMtAdxMap2DPuKctQA3kdzxc8HuV1",
  "key15": "4W1yXi3QMCvamXWU2nCrLnqY4yHwYyJyNtGkUPsPf5W6UNYF1csTBjuJd8XvmETFFf7x7Q9zXTRmLvyxttguiatJ",
  "key16": "52AS9fLpmaEfM9kn3FXSQJsUjgZzcXdFY7mPAddDsoDqJicuaSwrpyJvX1sP7eZ3o4tBmPs5zR31YzDzzkUijgMb",
  "key17": "o9NTr4VJnaEhwzbP9tvcVx3vmX1tLSTfy67c991PRidFGEdnw4bfm8ADgQTJXdiSswBu7MqjMhe8K7SG8tYj4jV",
  "key18": "5eqWtnS7e2teV294bR2NJHj2cRQyisZM5q7WzoJeXdgqPxuhnGybe8eU1rgmMMSApZFNttaGiBxZCGLv6v1fuhqa",
  "key19": "29Huf8UPPE6ZVTfi9PfAR3MfxBG2XdDaWKaL9MqS1xSfhDb7HTW29kkkqpvPZNBqa5BmoGzqH8ZDK3ad1eP29buz",
  "key20": "4C6ym8EcWd1zyNFwiby6SKmp69HF7spWz6aLZijWM9Kik79sA3Xu1uNRf7yHH7D1SgtrVi9MmWJvECHJYu6HzoNW",
  "key21": "34kuPbzaKvpmdVumv6RrsX155b1zpFa7QCsyRPuB6tj3DbSX3Jh6gj2knTsKZ5N66y6hmRmu74sXPynGV3cecJNh",
  "key22": "3WxPyq473JsqavNL8gTmsdUqFmW88GNsPsZRQ5mB3Z6ZBy6FCWyboCA2VsFdo1J4AWKQAbnzbYkmxxLyKH44Ltck",
  "key23": "3wT7c8C7XqxnT2Y7dsr8ZAYakRdsHRpN8PQ7P455e8VRmYLtE714hh9pnNEydLn1VLyibVDPRaE6wbfHf5NFGQ2M",
  "key24": "4HwGRaiRZ1jVXk8E76NwNag67QwM3v7oR8rqdzqYBzVWpVN1Aqhy1yPPwhfewGuL9LE1LoMVXYpPModtDQKQ57DF",
  "key25": "4MERh8v6gFc6oKTcLWXTygRkTzTU9wv5rEm8nBtBHVdiTf8rDR3Ddq6c2TS3F82TGY69PejooqwKHVHKZgdQM3JN",
  "key26": "a8TwMwRYjMeurXXHmMQfdhkP2zmeCYunaiTGAq2MaGPVpUEjhtAvG4Dki8u6r5Wx39B4x9jc852EWFiw6Cb7AA7",
  "key27": "5TXX3p92Lh3dqxShPPLNNMVuhGisTqEz4Gk6vR2rTwTEJBtB51AbxBZU5cMTTF412X3a2d8HCaohV76asacdtkcJ",
  "key28": "3JtghbBzHQidqTUBUxGvpRiFvcLxeNetVHDvhk7Mn81Kgbw6rSVmcUrGy6MS9asVobtwWaFY4SEkcAVZAhiSvLNj",
  "key29": "2moh9NGXw9aWASDeHpKDC3hKXXcgZgMriaBipN3ZMK8voyZuaXd6UswNbXeUiF2ypuCgFGEjeDBFyGeWENDtmZow",
  "key30": "QxC9GjrJRAwkjneyyyAaQwWidS4FGEdDpZR324spomjv8v7HY9yfEKGtWXJEhKAkJJFT7auxeTCQjfgf4iFhL2R",
  "key31": "xBXFP2BXqb6gxHSpNZGd9MCbZrA65XnVWGQ8TntZTK3k8gXsbvURQf565xLYNNBHy3htZ1L4P21e5QWVhvfxZfS",
  "key32": "2ayB7ph2JQfrVwg4WAKUrcdZ4eTys1A4ApoqscdFWZhMkh25DHPUvvXQXbLSVvG27QCacNf6hqbxbpdsB3KSLqYU"
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
