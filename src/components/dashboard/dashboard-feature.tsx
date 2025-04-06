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
    "3Q9jhsjH2sMz8rXsqM5nxPpYu3Bh5GfVwJ26rwMnhLvsnVtmDgkCUNjGWzrghFRrtXznTm3ioCFhF7en69aruvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXqKGmPmWVGixzZzwYNvV6UYjec6MRj171wEc1WCwz5fKqw2gp2nVpUeBuZ7VZsMNHFcfSNJ57YiJsWdaTZVc4F",
  "key1": "2TrMvGfZbiUAQyE81QxgossR28ANjLBjo1wQAZBqDFqWuTfrwMHmxz1EawFWBvAZJZ12N1Vya3gzuKZH911S19dt",
  "key2": "38QSbpozbzyiCqae6uyCS78DPuCHTdoc6YkVUcR6FQn9qyih4QyfyVSRT5b7PzTSiXbAnLi2kttxLDE7KeDk3HA1",
  "key3": "36YThkeUZ2NJQpkRnv4rk1nrLc5MDveAcs3thFkoJPcBwiP49W8Lx6ogwE3UVx5MGH4HYSvfhDF3vuoJRCzSsGXN",
  "key4": "5hfj7mxbU71yp6gtHbT2rDiLy67WWW2iMriUREts8vCeX33JVBmpK5GtqngsgwQTdrkYxR3TK8VoYmacN5tMHHZY",
  "key5": "2hh4BjTbvLNew2tqh1v3TaUcreygxu4yNhtozr94pGbBBSkuAvaEnpEoxM5K4nhAubLq2oqfXUeGRtLf44kXCsoa",
  "key6": "3aBjf9YSpgLrW4WYDP1TppREoeKKs8RaMzq2AhXnK5mBr4Red6Kgr3a7at5xEBwKd8mAehrrQVaU1KDTb88thcMd",
  "key7": "4fwSTRhV6eXGS4iy4SmYydZaTyta3SP5YZDC8gJjP3u4pFLB2xt4rY2CuaZ558jR4J5FnH6JLUWEMmeuM3c6cuid",
  "key8": "3owHh6m6NZeP1igi1horup4kmjsJtGBgdgw4wRG22Mt8R4gSdGhnaKwaAUeyut79AkZrqUstip31jgt5DnPkq8wg",
  "key9": "4MDXFYn8AQ3ztX8Z3o83ye2hTc3TQjiyJVnVVgRFhxn6s1tYtgvuMa8BKk6h3aCaGwCpisv9CwmVXsFvsETRKfm8",
  "key10": "34C6szcLieofUc1spwTx7G6YA2hbFaXxM5Mn5n1TrRFWiXmuCuSRTFy7A6StubEXy1fDjF7cM7ZtPbeoo7puEY8Q",
  "key11": "4f3eeSxifj4dPVrzhyNAV6yvSZkmicLfWRqxA8hdSqyEUC8jhXtk1cxGUpTLW3vXGLARj373yZAmPJR3n9Y5m3Sv",
  "key12": "384pxiDRWnwwTkXXwYE1A5yUc7xpEsgdzAK7BDZhYwXr7fP7eDdXBujHax6qaL1RwFuSXWxnyHGUzaRDsALbTVkd",
  "key13": "2iuNziiKK2oJX9b3cgdZQ4eeJ7FQfaQ6e14eDfG4GVJJbXW2eB8pp5p1ZMLSd28W5S4TADyWzxXVvnfbe4EdyKxn",
  "key14": "43VJkDyZrSDQM1gz1F9sURy1fZcygz4xwXYyM4LHUJ83ejCb2GRt89Hvpidf93Vdqhog25LqNVKqwpqS2Ni22omn",
  "key15": "Szn54ULRZdDChhuoCxaobGmB1a1NXGpD7uEvdL2fPvEdDPBMpGVPM64BcP9fK9yFH81tbcHLf1rDMCSzbcZisaF",
  "key16": "5ckVLMFJdubJvtttExa5jFJFUgs3b7fDSDps9Kxt4KUgy56tcFgQy9cPiWBm7LUn35r6QRNrARoTdhmHV2J5xUBt",
  "key17": "synqk5fNAUvHqbhpHvsqsLjL14Wi4oiPpwDrvQkTXKz3C35H3Zh1iMbys2C6Jhxtcbemx3Ej4WwFBHZk9w5eHym",
  "key18": "2JEH74X9iiJvEi8Dko9YKFoUz1BLeFWu5M4iabpxrXiZTwxeduTtX9G7ZJ6KeTrzJ6ZZEFYGacGci4SY7rWrZTd7",
  "key19": "5BFiic3CV3hY5p1axgAqp2id1ePjr5EaUtKuD6XeXeohZjTBLzcLCokDYH6AsGw92Q83jKngwbbFTkMzR3FkidNm",
  "key20": "wR3YVhkR6zVFmDJmntgp1eeYrsuTxUFTXQ6vEPJVYCg9JfW8mLgxJxqAs3GdGjJjL7Fvfh859zuofiFPDzUmzpe",
  "key21": "4tApPcqTGPv7TpM3HXq155K4G2kVe8454E9cQqxN7yWM84gb2jG5MUgzJHyyUSa8kcifv8pwX7qcvWavPYKpj9Z",
  "key22": "2uUQ3r31y98bTGkw2w15EHYiYnb5Nc3urciCSLLEajL79msdg5kxKJNbfyKU5wSNztZ9FGg39SekM16K6vRfQYuT",
  "key23": "3wfrJUWVJdorLqzL8Wg4V5Nkj3JiNnaSDBtGt5RBk7fVrSnyz4zGG8H2T8xupE5Xgw2MCmNTThiSHQuMAxLiCeqR",
  "key24": "45mKZtLiYv3beQcwBjrsYG89FV9UMTd9ccy2v6FVfMv1aN1GXQzj5BNDKXrcfpeNvbbZiqsb1gH5jswMkZviqTC5",
  "key25": "4tyMuaEXAsZfAb2LD7DUDQeEmkmiRuiNNfYwCQe9bj9CkQV7ZQQpA4Tk2U8yxjYZCxJ1gGVo341LvybfygngqFGv",
  "key26": "2MRPt8CUkMNSQSXx7t3exXfiahNrmGwZACVtMxaKYjo1H9xRKveNPe9kKhkRaxM5k9o2FhuxiDwusudzfWqJzGU3",
  "key27": "4q6VPgYsPDNjBrzNaPDEd7afQWfX4SF4UKDion7APvKGomT7SMVn5xVyhDitgJC3rDvhSqyj4NjivAz26s9wkcR9",
  "key28": "32FsiK7s7n9WSc2G2AtRG9xuXpSoFwzi8WZ4ChZHFXhQWyu6KdxUUMyRPnzPAsB7fiASFm3rTTNyqeBw5fjEm5hS",
  "key29": "23QjyTinKtZM83XXAShGTYUgkjvwptk23YkDNPiymdfJZn3n6bTmqxzKB685DRuRGDqdFmpyknnkQnNP98auLzYt",
  "key30": "3GMRgFopUx9Ltu1FRaPDs2Rvksbjab2iRoJgxo5wbnxZrEcF8LVW3GYyuvw6EHHJTDyDZRpY1kWYRBbSR45x91y4",
  "key31": "4gU7iQEN14ELLiZZr65pTMH5YLiLUytrjjrLSsH3h1k2v18GJiCAgDBcumvv7hFLHiSQZpeDhe2NAN8ydjzEuBaf",
  "key32": "gyhumg7tpniyUrTVmhQG4eW2tpUd2dTHje6s6z9btbXd3A8BZCAhmk7wsrAdZ5b6a5CnZXPF783NqeW66tTKJnK",
  "key33": "36sNeFUm3xX6PrDQz4y8jwA43LVGUjbKn3c6DtbKrawZJyHhbFL6MYjR8Xyp7YctweDagCP9hmPgyahbpBUxr95C",
  "key34": "2mLdxRfgkGLd36LM5YPU4f9iVB4zhvnxognxLDXBWw6uvZB4tSAqprnvEK6nVgSqQetSfCfoAvFqvgeCD35ADRnh"
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
