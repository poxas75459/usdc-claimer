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
    "3K18KHv2kbgJp8BwncoM7Yma77AAFM6sQSQVt2Rai25JMmt4ZUpuzKAYm2MtuxWJg3VrPdw1bD3PbS3gB5tVVt5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zmzrx36xzYCKzgCy3x4JKoR3FnDtuTbZvhz6s5HuApyJuD3vhgn7jZV5L5A7KpNZyD9S3k1yX29NjzoW19L4hYg",
  "key1": "4xNNeZZqGieDE7evXMtVjpy8Ds4t6vxX9ACFjmWgBBdVFMVT2uuFvaVNbT3TP2pzHYpvgRXBoXY7gPFQv2wQZnDJ",
  "key2": "jT8Mnb78Ab6DDYUJhUkJBukMZHpYx4qHACEa1KXzPkj3ZTs5BRLZU1ZdzvkFLQTHss77EpHCGBomVY2orzDw9Bx",
  "key3": "3KYvd77fj9T3pTyaH2SWyijuRkFso9WAifCT2ToFuZyViJhcKFrg6uu8Hvv4nwG5kGd2gTPFnnJwmdAwyQCVyry7",
  "key4": "57htddgRse8jEtYJsDxQHzYXJov5vncctnNLUw7tZNgST8YgAHffJKsAoPg678tydSc4bwtvEtZdZmyTezxWmN2y",
  "key5": "3a7ph8AiKuRYkWpMdjdgAmHozXfiCVvwKKqZPtGV2CPUvidBWPMkR48wkmUnm6ZSQ2CnYUfZBqLGBeeKj22cNdrp",
  "key6": "629xRiiLAeJTUkSvqTHtFumcC3E6QnLbpdG8EhJo5zZDfvTeR1aggmctxi4N4EqoVLDvr9Au56qjfqC3m4xXu6us",
  "key7": "4qujKhYScL4nyGGn8ra2Hc8ZDQYAUUmwVA2HCDWzPcCWpT3yMMa3MuUSrwgDNQq1Utb2xcAUP1AGMWusR4g1BPtX",
  "key8": "4W6DaiuU9sMMJdje2hZxLwi1iviWhKbB7JGnYfJfVWvVyZ5otAkri8gQuozXjRJesZs6R5ZdzrYxC1VKxStDgYwB",
  "key9": "4RRurMJKaXXLmVUiq7FHF8ug4oAk1HjYzAGLFvAbPDHYF2oidEU878sdfshmrz8VVPrqyKFC2xBKLLTYaj1DqBS1",
  "key10": "4YKc8kzpXBtAW3srivoFpSCfXKFiXz69RNW96uQhVqEcK1m8B3YDnF9oqwEiaqEz9zRvFjZGiv9cR88MMtZCrXnd",
  "key11": "5aSdA5gJisGf5ymzan92Bc9i2knhbxfyn6Eh3yXC6BerHwcrrZGRhVTAqz4vs5vj2CHrgdgQUxRsBp4bD7NsTbNz",
  "key12": "34LtosCw2QgsQzp9UGcFiaQZs1n1oVdnmeZVaZcG5iivw4mjxs8XbF9E4iS4AxVHqfbViVVTTJegqbBoemPZye6n",
  "key13": "2kmstyhWeeYhRnhPEGjzfdr4KhsiSPbwFhsA3NJj7EPhfN3Kz2GzHa4FJMs28uyE8xRj7xoCDmTddP9QfcUXFFkC",
  "key14": "5FbANYBUrd6QCLfgQASD1vYNvh2JNM8LQWzNaAX3QsMuCs66BPRkbtVbUq2QLy4aadbTCrVVkXJB3bm8FZRZQcJH",
  "key15": "27myijnF8nwrg8CCBnFxh6R62JbsBRtcxWFyAC56TLXYVuSwspF8mcyktGFw3iwLffuq5pVZCV4PzG73xF49MdoW",
  "key16": "59L8jhUMdLL3GFLXAYmfNpmUbugmXeKHGYgY4CWQ7zF5xMxFwFpPbP6sZ28pUoMmmWL4A7rpKAtxc1eVUv2HKi2U",
  "key17": "4zCgUrTWZxGaEd9f6ZGHHmRVa6U37u8HM7cyEK3KebSPa6GeFDoJPhw3ohxgamNEo9tjsbZanj8mvyrNQdZdnTRp",
  "key18": "4ksTPo5Upy91F5zf3fSNZkkmeQ2UW6yV3ozqrqg2D94sP9yYDm4D68PAPG63rkkbx4oEjaSzJRhrHSVU2YzkcCfj",
  "key19": "3KQT8TczYSB2mNSvarycBX3RoBi7AsZH5GazC6dQXW1aQeEc2KeRwcvFoq4872bLmoWfyBiC5FEPW8uhdfJhJiGy",
  "key20": "45xF5K7qPNPU2nEtih2xcvAjGP4SN5262sBgBTfj4rFUKJjzqUhjMvrzgstt1n5be5qqW8SSUXmJgov59aoAtY4H",
  "key21": "54vdmKSaG5q24F9z6dwch9JbYqnh6grrF1mnVCe58dVh8hVM5T2hijwSrsouyevQdnAYwmz5fLqmCzCJbVNRd2Ao",
  "key22": "9mkRPbz4Lp1LwHe231SixbfsH2ZjPjRotyfTxRFYUkimbLSgczkihqy6i4zrMgie2ZQYwedFNvjFegtU2YMjMkD",
  "key23": "5wGtAuS1bL3BELwFZ9kXuUo5h4vnjSjY7iWapgbj4PbYx5YkgHKonro7dJhQgFXZYfEu4Q44KFuuCBvnicee56RU",
  "key24": "rcfoevtPH4BCKjUsoD44S6ErPEZ9p9BcrWhexR1QhN1L3RqCgiTWuiiEAyyeShHGDfWg2ZfLb3B828a6bR3GrrH",
  "key25": "4DQVadrdzHsyogW7DoR9uA74nm8uSAwK8TZmhhNyBd2VAgAJpibacNwhhrzrxY9HbFCVfKgiwQAVSJNRECBp8qFo",
  "key26": "3wPjqdMK5tZAGU1cAyvPg3deLP9TSfaZAc4SF2oNHDuThZqGBwChGv8yfnPceHuNr5uLFwdrYyyVLN1dbYivCXgR",
  "key27": "3P5Q9cDtDMNg3GHDfrDzgiJskm11nd8umrbXf988PTWNsTmXT4Ej2baSi2TSGUy5VrDK7NZHTqsvUb4zHCuCpqF9",
  "key28": "5qpbdRkpsZp9wGxoVjHC2sx47n2rgchMpRoJo9QY3uVQzBkd8MeCThZH4UKkuWsU4t9eLBFkKjwpRVXaAhEUJs5G",
  "key29": "3nPq5Ch4uDSZMhwm9HMcoi1YoSTeoWVncixj2uc2nWm4LvFubU5yPsqeSNm3P2tXi2LMYziKAaEGSJp1PJE3YwbU",
  "key30": "4a6KjjEKtXUHgU6Zw6Gw43mzf2JRPZvfXqTt16HTxc2iwzeThy97aaeTC1ig3eng3EC6tpzVVd4Siz49LgPGfqwc",
  "key31": "2FMq1Ey1oeCgs4T3RCWPWEDzMKqC32WHKptE1j7Lkk3guayVNhejiE1hTDLDccjntHKx4vzXYwbEniovQmGDyRm9",
  "key32": "2DqXevMXaKFqV8o5sb3prD4sCupWXeFmrp4G7Bu73X39RsLKpB8m6q61BAUDojisRHbRzyUa52CoSCf2Ym6LsvdZ",
  "key33": "5cdfdb6f2ok5UgH7JNLM7kY8wNiPcrkrobNgmNjfPsFH3XDhNr6ivhJYkcAKSXjMCFPNq3mrJSpX6PEUn9LmqPmb",
  "key34": "2pKVh64kVnpXQepanNeziBRTeWw24cE9FysBREjZpTNRGSigd26w4F8hrkC2y23hjxenWEGPd9C1A3TceVvMZBuY",
  "key35": "4i63t2gNWBkBmKCJ5dXJvmK4vE4SHWPaC4PVN1zLv9wpveg2U3SDi4g97nWTxtcY1KshYSLyBdkAtAzxGYyScSbq",
  "key36": "4yejgruEeFBU27ooZpqM2HUWsUntyBB19k12SY2Ck6xbGCd1vhwawMDmuY83EiouCTQ1vVZsetj3H7o9t9NY2Ezz"
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
