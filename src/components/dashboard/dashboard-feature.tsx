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
    "4uHCZhRfuMXKPGZHv8drpdxFSCmNL88jAzUTXD3RXREV5j5dnNB9YM1rzrLMbdSVC7AXoRRqBeqxEgZi84rAQLwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAuWHQv5qSV7E14jmo1WkyFjRtvJDGLNrwdQeYkWbioSN1aFm1pZRnCuPzapLfTfES1xwweHpDbjELmBDAVPpYz",
  "key1": "326mbhqawXUGgZ97vT2fBRNUzaBcHviN7AcGchpejWnzuAGWQrgK5rkL4pCJvVjJnqgb9KB7v3gwoWPPoG1BVRNx",
  "key2": "2N8T2XceqGyzqQ5hLF4w4t1g98baQ9inzMYVbfaArTPiQTpt6TfumMhQEJWsfknvbrxz7pNgrRMt88QA2B66p9rc",
  "key3": "34cgs5XarbJpx2xXtif7p1a2XLEzEvKmAamzyEGgssjSAyKDFaD5cimeCuR2s32nBZHNxdfUkyGYayPNvQWdeG8q",
  "key4": "5uoJ9FSiqbDGuqgVDGurZ8VARez8zD4Bm6hyXsDP46LRnv9zkH8NuM4kPC8vzsmvvs6vi8S73RRwLCaqaE5wAVj4",
  "key5": "63SZqVaw2MD4yKse3zZX4DzAKoWiizBS3E4AcUJ3oMWnsbgUfgvPGQSdEQaoA5UnChN6YFax9SLxBHqNUjvQ1kDw",
  "key6": "3miZ4nsbVmWTZNKaj61W7Y9XwiARZSaVNZoU2DvFebLtQDaRXihXoKq3bsG6siUESUShY35psBio6n9jtWAnJGim",
  "key7": "5ESY7aAyFwJ2xy2BMsmCzNvLuu8fgcFWukXFUjBexMrU3rZTc6h1ALt69ex9smunTWZ598y9LA1gYyxmca18ukWF",
  "key8": "kAXVNJTtPnfJ6e8wzHyy51yHCX6mV53RTmUMXZf4GsmHFSuq9fyjbGSbAQ1xFd5jvFHCCSEgP7cqKvo8954xhhB",
  "key9": "3qEMDURcDSxK4zwpwgvJp1CibeM9EWrXuKvw7Bu6zRtXM9ASCntJDAaqSrge1hBeRauqHQ6z97EHVCSMnLBdjFdz",
  "key10": "2kM32sMeXG3odv7BdLMnjBxpSCwCiZniWttrtccFkvioNA5qdvjjdB2G3FwuEhX3JeKdURrHzGsQTpM7WwH29nhf",
  "key11": "4kuRvtYCkBV8AGJibNeHZrvKSB3LSVXwSNHfjHmveZhWpqTV2LWJEr2Hc5hafcAwwKz189nZghoBrS6AKKrBbbnS",
  "key12": "2XiS8cTQ8X3Vh7o2983oXAKkadeKYSmRhwEHqNd3iSQDYCV7mvMzY5xLcDLiaQNSAtpZcD7DbSYF2Gwrp77isRVX",
  "key13": "AyGwxBSGPgBo7kQjeRr148JfjJy4peNCUbRXaVF3UHJmcL2CnnTftGZMuMH3qZSFhPZ72U9LQTvVppaZCmkhYe8",
  "key14": "uAM8AoVbjA4P2qxgvFuUYNbvVBa3kbgSNyZas9nKXnUL3A21h6qKnN1VSZnQmnptUn8sfXTCaKpPDrNc2eHVmzw",
  "key15": "2DKKaHFofWza6i8H66PNom6hXSRHZsEG259GBp29qUrkBp3k3BVAuD3m3ADd3B2bFrRqneo2Nc1M16WqEeGCSR2k",
  "key16": "2Qnq4MorKx3vvFypsoC2h5RASs6xk9paHgX1JPMJ6Rae8QWzFnC9bRFV7ojtWz2a7UgD8JkogMFGno2SrWonqGyB",
  "key17": "51LGtHDwyFqXFT7AstRUheNf6hBBh4VyZ8qxypYAKnTUdKKVTAMGSATrcp1n3HmsMSn9tXyEV315SKxWd6h8j5d9",
  "key18": "5seKfWSc1rdA3fGReCCyEDdFd9oWueGpU2daq6ks6UJchua4q4BvVAqZiWWXrjDZazz66mXMJwTioaMd1Ww4v6NA",
  "key19": "3729SzgGfBnTkMDJtTSeX7JWT7BjMq3mnjh4ekM7jZARQbhnMqe1UptQK1pwVMtDP8VuTaanDftKG2PCnN5xtqn5",
  "key20": "2Qo5SMoY9HHT49J3zwZjTwqeQiyZqGw9xamhb7o2bRcJzLSo6a5JjH7jxCisyRXmWa8Rij1SkyJAz8uHHiHAyGSq",
  "key21": "2RmFbCqE41bA3rU8gpE4eq7wabAiXsNz3CuLzLeCoBgQkZTpXMYJ5XBwr2oUcKLfug8YGtPqyQTNnwdDs49DUgN6",
  "key22": "53pZck5jLm8zxy61g363fqkdVygTXQjjwpv7LNDHugN5DnBycHXMJB3kwuaE1oFbcG2vMNNos1hohMDyWN3846CU",
  "key23": "2qjnmbXswCUjrf2ciSa8ymiaGbDk6LZAQuhm3VWKo8tp7inbQTidsStAFDBNqLjkviUpX1F3LuKEbhdXAsWTfuwL",
  "key24": "2SqcUR93X7i94EksLApsXY3esswWHBaJFy3nd9r6hnCdV547CF89q2DJqD8spaqtkfqwvt15bpCW1WCHCT5knCoc",
  "key25": "3inmTn41CQ2t5HBkYAWz7ZQd937gGvJx8Tswc3gPR8tGURLmQTXeqBndAJcqfZj7GvkHrUz55Pdq9eEy8Wfiq5FU",
  "key26": "2avv1swciQvvcnEtN9E7jAcvRfqCU6qdC7oPNBywXLPaBrHL93km2xLZ7AVWcAYp4JSv1KPjrJfFPxoGUjuY7VY8",
  "key27": "2uRLgq5EXdd3FKbXWBWLtKeATVsd7csar5WwfhUpWgRhuaz7i5ckbB3UbT1Wov5qwj7q2q47gHSVKu48TgCSsb3i",
  "key28": "2jw7LgMRviqBgHN8riDaKDbUSHgSKCFWLszpUVTcGXe16rRV8M2pr1gYp5539m9A9kfstzWUo7fJGMmniH8MCWQm",
  "key29": "5V7rEkCFvV2x5ogLL3EPL74jPxmw4vDFJw1kZLBxpXm3cRp8eLYgMkDTCFkgmeuTwRRqUGwBpH3aNMcRHLw8utJS",
  "key30": "3VKzVA8EhGyBN8WSa1Z1w393aXgFYNsvhimC6kjWFpjomBZW1y5EH35MFL4hbBAefe4ys6cwekjuwCy6NRwFYzER",
  "key31": "4o4SHScdMCgdpyWjkRyjKx5f1TBs1JrHUkxEXCicfQWkWPs8bJV9RfMyyntd3M1N4jZ5zebUEW1eoL9yobUwkGpB",
  "key32": "3zGnWKYuCkgQc8WSN2pQtvCUcC55UsVYRYpm8ru6Tw5xdzfq3QXszu3nrRrgKXein3PZnsNTJUdKatytEV296Atz",
  "key33": "5VWt9oydFSgSqY5NteX59dnuUSDnx7P6q18b3LcDY7gdUsgGFWrsF8LnWqTnZpB3dvnMAZW3JMsSkDM3Uo2W9Kws",
  "key34": "2e4QfDsxyhq4YVFq7bTY8U8fmaqTCihtNWXPE9cxETupZChUyLfRkkr3pVLbCRdFnn9i6aNkoixBcdauhJFRiRi3",
  "key35": "57Zcquqne7gbbkrx8LKxmkzcHYuhfwsNVPWScfzoNQEPFBRkByhnfvfxVML86ium7Yom5FSjsaH8o4wajjnLv9M2",
  "key36": "4mZoA4Lyswa2nog3aGigzgtA7bvJCLJzDfLVu2evyAwuCp1HZFFcXAaDxVmBLvuNUTkGFExq9y8ErZ7QyU7BoAhG",
  "key37": "3mPY63LfGxD9FWtLtTqnNsgUk1wUagDxSj3NQJp48MkCmciZc5h7C2PaxBMs39vqpn55Sja9GxEKs4VUoq8a61tU",
  "key38": "2LCTCP3H8aXxsCL1ckPqRRF9XpMTepVg5ENHsGzkiMHVmudcuA5ULkhgRgMf5BnezgjKBZ17A8PhLCXraNcm17Ck",
  "key39": "2EduBMRWwGCinSCZNjK16QKdsBXCKgFtDKJa6d2K5sLcotdHQTYbAg8aRLL9BXgp1K5h3h6uPm576a6udNYA68VU",
  "key40": "4wSTdAmkTyZrmfTSLTUoKWHY4KUYHicZ4ots4LuGZi6VmZAbLM7dG6GnMPy1AhsW3sp3MY8mRY85YJW5n9bkby4J",
  "key41": "NKXGRR54mFEaC3mRHahXv2XzEEMZcrAxJeL2wrJLeNXumEGfzamAL3XtwUcHYFDYqCB2VER1U6q53BuLFyA9fYZ",
  "key42": "2f83kqbZT9zZsySFakL7cGqDKERAeV4XescEJozk5qhk6mtJPzvbPEopQoiWWmQbcePcVzNSuGBdhKAfeWacaJK"
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
