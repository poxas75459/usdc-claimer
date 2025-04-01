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
    "3EQfKUvsVCGR9uLWyiiJje9zsTQDUkgh7RiBypxy1zEWMSNg4wZnuc4nTuhCCTPrkpYdVM8HpRb8kRfjCXRonTVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZREVNxCkGsSRK3KxiThwJZeoE3CPmrqw2coNsgz8fBK95Jwbz8FpQowSUeKYL6LqbHMs7Zd7wJUx97iN3b2tkLJ",
  "key1": "5jBxV6nnWdajyYRjb9ds5qpLStingrKuzz7NnMo576QvXNEBLLiNQ4kDtnirnmbkJgMAQHxYcCjnbcMZve7nMCJz",
  "key2": "57NNMdWqR9ac48DYJyd6cUKbgnQRijscJ5hjgDA2i4W89xZss8iWRPq5yzT6Bmhmf4KnytmHGa3ieAA2iUViq7qL",
  "key3": "3fkHRuSXxeDZdsKAT11HtesQAvqhN4TTUd4c6nhJfwTYje1cEWTZnqUn7vPRZSwFEe8AkGg4VJL59Gs44qyDNW4c",
  "key4": "3KhJB5ffGrfgnJBTep8BL2eg3jjq6yTdqo8k5Dy3GEjjf9YkAmrMGv3rhprGDUrDvbh6F6XDc5ADh25Nps2E54xp",
  "key5": "55drnKqRRmio5bfVUf216bwQpvsxii498be58tN8WKoj6KPiqGEFc6SMDgdCSauaLMEBFyQR5tftCqh14YMXPVMu",
  "key6": "KLZh35TwKv4fbPaUQmhzorM9vJSxuFASqsWNT541U4LYyyacVTa8WgwRfVbHoFmboVtKASUdjSzy68BU47AhrHy",
  "key7": "5X67WxXfJy6vZau5URPdDv6aRqwCDAz2Jj2AYcKX2Euftz48nrLVgKjQZE3Yu45iMGcbPc86j7tyc4NjYwJjqGqF",
  "key8": "wp6JccCiZHz4pwa7RUh5SFKyaCky3oTQ5o7Tmfg7WABZNnwr8htRwEWHvAEttK1AATCdned7jKxdE1UJBQf4B62",
  "key9": "4TiXic3PAgur8uDZcmpATs1AZJ92hn2oxCMhjTUBEWfAqXsPueP8N3N7nycehxAdbizuK4JMZnVaH9zgDEHxGqXR",
  "key10": "5p82kyKFXsaNAeYSFsQ31jgeRJWm6cooDH7vmADVGSsLuVCwagX2sXHuCLEd4gTBYaXtg1Ffp7Tg5XevUehEeHm9",
  "key11": "4XW5XN8bdrQbbZzbc3hp8rSLniuof6WBSwF2MgMXNGLvm5FkXZdF2zmgY3J36YkoAVgLwc3D6RN3wbapQCRCJVmt",
  "key12": "3SMuhePQodE9w7K6yU8dQ8NoJxpjY1U3Kz5S9aayFyTFVGaBck8Dn8rvDERgzQ37w3NJE14V7RbqNL2VK5nX8bMW",
  "key13": "3Sqo93vEo2oSjgKEMqA4MvAcqoo4Xu82frVHzGMYyNXsV9hYPyao5b2KJgWQLsm7NPaoQJ8G3usph5QfouwgJ1W9",
  "key14": "nn9r5vmyAcUjfM8a4KTDPJuxN3w9xdLhtxbwhQaXw7txTvEk39tNERKufvnhiTAdDVf5fd9mDxK34DmedmCfJbV",
  "key15": "5sGSRciUASHXX3JnqNvrVT5kRbV2jmhPdHPSnV4PHJHcZWga8RgdY12Ncu9xE6sDg1d4yQt2JNHQzKrMYcQQUfWr",
  "key16": "3gGMfFMuf2bNwB8yir3zvTywmvk7Xj99RZJZgbVA1rkyBVcA5VDcm8jRvF9aaxB8C6XR7ynaHFH5ScACCKFzCuXN",
  "key17": "4JpWFZ35chYNYn8xo5VjCaUm3JhLFpNGhD5Z1BViGE18Swueh2wKjkbmZXMuYatL64uA1nsw7NYDdQsz5otSZNSe",
  "key18": "JQ1BFJmhUjS5diw9FG4Ssy51deJUnx1WXoWWHJdUE1RbBuSvfUmqecJdLqtp4o1HNnR16dJajMrPykBtrEs9vjQ",
  "key19": "4SZsnKc9PhutwkxhAAMPp1zQCkyWRkMXD5Pr9HUJpaUHVonchk6SxTPqqu2bFSGQBrhFMNpGJftSTYiWxvvhyy2R",
  "key20": "1GWYd7LKqKeGpZPCtK29ziaC29GXu33MMdwdFmy8DHNcdt4zEV3YGDQ19hogATujn61xAMS62sVeG3hRh7W9N34",
  "key21": "4Y49v4q4UK1Hwe8dDX7CaTotAZb8Y39bTW9bzncFcxEg5ZThqixggtN1t4Jj8AkPT8bWyJZc6EkqJaki9vzB4D9p",
  "key22": "2wMSRH3tLfK6nZpXfWvMr6n7nRkw7fXtLTibzQ1RC6gn6x99TSmtVTck8EsE9mfrfvwNndWsjDquzXPLUD6J5QDg",
  "key23": "CausCoqmhrkmWfwTViir9JWzR9DE62JFjc3KdnRZFY9QG3yv7URQYz8X1gJJ39vpK1bJdo7EZ8zSbzVycUuMhK8",
  "key24": "5V6M7kawJHThzNdtDGciEam7cxhq27GxJUafZEFwwBcvUem5CiNtszdADrhb419HTVoo84pu7k19c9ecp53YGB7W",
  "key25": "5JKqBsy5ZhRCSMwxgTLUPMeeue4GNPxUTcSPfVsLpAuyGnjzpgoqoWLkVQnnQ8zvv4ZzfUzakaTZVYYxPVZ95yBs",
  "key26": "yWv5FVCzoDFbmfT1Cmm9JzBS374nZVLKUkRLrfSsAhfTtXGETHvb8pNGjY3XDVjtPFnHNnPyL5xCyoJeHrR3a3h",
  "key27": "4p1B6mgKPVXFkdHdRFk1eDSZ6BjfSzEknkvdnTgkqKsGw1ouLmq7C3ENFkyQbEdqhFscHfkq7Huhzw4ccDuNpD6K",
  "key28": "44LCH3L35gicZdTbtm8jL8a4C6xtFjAsoXJRFaAPwQGXQDDqK9M1ygQ1kmoerspJ2iQmUm9ndQrFxm4mmnNbCEEA",
  "key29": "2sb9Ki4c9gsrjJxqQiRzNkhsitc1PZPr4B4XxQFtw9HTv5XDKqQG7A3eeyGfVgoCjE7HUeiVqZ2cBjmjsBABr9RA",
  "key30": "4bvPisJq3nGQBxCYxtpRGTcG96jwhESwFpEuwxUZY4EyZSnWv7Po4xMKJ79rrnMQXmPpgo6fLken9AynSQJUXbBj",
  "key31": "5b27rhZyTwNHGttfQtj4PBAazfJoxBrT2U3vLNzu5KitB1DS8xtkiscxWYYL9FybsfFHfPGjgWqLM8G4yjkmcPHR",
  "key32": "4ZdWMFT1ZmEb5UKZYAV9YGoWSk52PEGiS86vMcXQVTD9wwV8yJXbbiFVZonoarUim5VEihM1Pghzkw8J3G7zNuAi",
  "key33": "23BMR48ptzEF4nZJGqR3tgSUVaweDGv39NXhAbMVhEQ7jyN9pBDpgTg7J64p5U2EnoGdP8ZTL1PYb2qfKHtniX4X",
  "key34": "52MBu4s6JNxYRghDtRqzbzvknztdQLt5seXEM7Uv8gePVH3qifSAsGar9epJ56HrGjQxKwY87KhzgdPedikv4u3w",
  "key35": "21wZU8fscENyrhZ9Yy3MBzwPQqtdjW4Et6ZJi47HGzKFVJirps2M48vTaLKbsUUrGsdZHgGYExeLj9LkKtCtfoWM",
  "key36": "2qWe3Kmifx8SucMUB7iJywQGTmS8AX4CbeKktvX4Ct7mdJH1NxXNdYw4yj8m7dq9oZeGkBMspbnuXescABjmLaxy",
  "key37": "2pFizGkzi6ce7ksXkZM7LcGiEKjyfxvZTuUJzu6TB1LViVsNbsPaspg75pBXhseWwf141RuJPdHjwSUq5oZDT8ao"
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
