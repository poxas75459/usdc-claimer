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
    "5r2rvFb7E7jGNkEv3kPbLWH5VB8RURceTQ2gwKZ5cuNDfWu7yAM1MCj3q7kqCehmHszCkafZ6WtMxWRBnTn37y1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ouSUgC4pqzwuYJeGXDA3rW2Sd83g3hT8ZqtjJwVF8jWn3QWZU2ayp7r579zZFKMcddU3YB1gveNo2NwY7uD5mH",
  "key1": "4TMAsWjj8GiMtP8MpVcS9ctDkLB2g5wvoKHC4Lf3AioxB9cVv3JdqeFAbZmRhckR3L3y3NVaA5EqbeR2V3t5hGTH",
  "key2": "1TqPQCpwkdL6QAZudUcbLKF7X6icaeQVoTY2nTPiz35fswm6B9ad7Zv6bw2vdkWmmV6zXMFPYuFHAJwzLvUnK6T",
  "key3": "2s48oi5nLye3YWJMCFXYkVNfYbPfr6ypQG6ECnZKJ1V9WLfAXWNsDuN5NFoiE4oGPfFpVNfSrVCyFQiP9BkkxQMX",
  "key4": "5gauRvCrDGnwN566UWTC9Vskk9DELCXJYm7bchBG8oEUE3yZPAMH62CTzj31fY8488SzKGtRrYfXPriCZsjeFWBS",
  "key5": "46WkVTkzy31xyEAF6nGVYnNZz7uhx8z1gPBHZUnBgqLmekS3QBQeKT8jCGi4Jih4REXCBn9judNYoXA1gjK5jPNR",
  "key6": "5vuJF7pUaYjU74PxJF7JxBXMBNEqXyqr4nQi2JdDcmvtnjZjDwMK3SvRhcPNqzzZdAFkXLyNnMyZ1K942zKrNYMf",
  "key7": "3eJsZQSNqBHSr523R39dgDRnQMU8sBDfsZCWVGF2uYM5JwxTa6jPAVtuDht7qYSs7xWFNpsM3EqsTpQ59ZWxcMSN",
  "key8": "5M59QghnYg6W5c1eXHwmBE83w4m3oAFamzhURhRFjydQbJYruVbyGJNUzvNftMSPgJ5uoN37bkAkscS64oXKynq3",
  "key9": "2uFn28fgummGbaZrEMMC9RvGWiR7epzycpMJSRkui5y6pG5kezqhmc2pBfTtiBw4hx4dFK1JRb958Th23oZkp2Wg",
  "key10": "48xQdzNEASA1bJnVqsffhkBSw8L3raoQdG62pwVGcSGk7KxiRQ8gS6cWhYgj5oHUMAnsAimEyV2NXnjezQ3GwWsK",
  "key11": "5xrbNcJf6STScLeWAhhMJbZHCL7re2jEHg84dsQaFRWF6JSPGhtaUP3vN7ARKU3x6tf4ExyD8B91BZz3Q4zgUyRM",
  "key12": "52giwipR7kiYAtVgdAG56fhrxWeEDQPMdy8ZPT3X7vnUmMaevczaCuWBd1HhtprahftetS53U9cTYFQQQb2vrRWr",
  "key13": "2MJi6XrvujZTXTpA8XzxaUygLV9HNe5wXP5XasCjjzgUbJ8C4bgHk3ev7MVFj8f4j1WMFkenQbuBsrivVo9snBD",
  "key14": "3YSQqYW27p1PnqsFAP9ikYFZjXfiwgwodCvb9uPTJnS1xpFdPWB1J7DuBHNpStYpT78c74kYjN6AqJqMfW2aZ71v",
  "key15": "4EsRVqti75JqzK4W3MApGtTfr4JdoXBYjfw41Rd2Rgv5Lt8bTCR5Tg8BiJUPpdSNsNiSTzFHYkPAZ55Dw3n6UTnF",
  "key16": "3rVC6GNTcHEGBiy71zFyA4c51RMj5fMTVd7zKKD8PkEQEWK4y9TaPfxwekxQCLdbrh7cBgPfgp1AMvPyvULGwpgv",
  "key17": "4HYkKQA2ojs9LoeGDvYWjWzjUuHYu96LF2ieinrCwSiBd4EJAyqX2oUkBLCAigog8hxJfZD6iTEF4naGy3A2av9N",
  "key18": "5ZBhocEusbJGvr4JiCTS89mgX61SHzLE2VW8EWAExKpWwvKXA52QAfqpoEq6MjRifd3ApRehbSVWzRwxbjTiKwL5",
  "key19": "5jPgjyhevVr5YTKTiuYhjuLUB4MUaDx5AKBpxM9pMAqenNL2v7mmbdEpLK1jQnhNcTpX5F1pidJYevih2ihwUSPX",
  "key20": "4igN2gQ1bPeaCGqBfagjYM5s1HcfrScrnzjPetGaHxnrQueEb1uUVYYKVcmuLQjK91KuWXEt7eMTAzU4yQ8hqYPW",
  "key21": "2vAoNyWXkGenQusZDo83pkCy24hwKt2KPd89o6QrUx51B7aGDXWidMHBzYkJw769aNnZrhg6o7wbkHHLWqmzKoHz",
  "key22": "4515bNQPZUkiVF8FkQ993CSW6TK1k6S5WwJuS5XDcYHpwCYTP73ZBsvqE8qYSVrjESFYqdcojnhZim8vAF7Yu4PF",
  "key23": "788VLkGkDR1WfQHjdKNGE4H53Aj96RocXqZyjkYKBviQFETxsnWPgPkswbEdBRYZcrUiAqQLeBXjF24kVE7CnbG",
  "key24": "5hsuaLwBV21YP8fAQx4W2y1qBRcDUh2NG8ZtDd3aPrrkmyvsQwkkX4SmGc3DnYV2JmvLLhz7jRLmmyNyJLNg5VUR",
  "key25": "63sgVJ2WTWSpCJDGPiePfF8H3Fdai8evDAZ9zuKsuK41cuQQ9sPJQ1asw8miEM61JFqu9U5eKBhHL4uba6CKiijR",
  "key26": "4hvtTmasai73iz7t2B4zrXnprUfCFdC895kkxbQTBd1LfNpmcUL2mzSgFKZBHWULsGR9zYhZbyMUteuWD3VhVmsT",
  "key27": "tDPWMY14pbuuAFaBfLnXTxKd4LLesiCQsaTrjWzJmZSs9tgSkTX6XB6kZfXVCe72WDkTokmU26Afpt2vmuFAdNe",
  "key28": "3aC8Y7GtMbHyc1yJTt8FTjjsRw7MZ7N3FURN3jzo7obWqoLafSEBSZh7CvvDw1i6F6GTjKsZ87upjJUp1s6MrEio",
  "key29": "5VHvPCYBRUQYyb1UtByeBgbhiCMp12omo5wXATh1JeLG3mu2JXMKxRK8PCE8ZP9vi3VgeQvmrDe9naVHej1fpvEc",
  "key30": "J1n1Rjc9WU7oKdnY7xgQo4tU4W95n6UY24nky2kw2Q97A3wJZd5zhvE1azzu4LNFtsPnrp4C8ih4xWXgDQLifNt",
  "key31": "3Va98DiHkD92U4xV3XeU8GEuzgP3zdMQYkAHBhWz5XKJkBFfJWeQUeKiSJ5CFU6fzpUfn8u9CLTW1g7RMP6gT7yY",
  "key32": "LH4UjYu82C4ahWRBGqwNbW8iGAwWt17SxRUsLbQ8aN8Qf1CoXeAVb7vStqMxBBqZorJ1KqMyFTTSEk8Pphainxm",
  "key33": "3YGAAKtJzd5Rb7jLsg4tM5U9ezoGyCEShH1TESpJvmdPfLiaLMiHdqj9EDdfqYNKpLaovNVKo2eL5fAJbusqXzy2",
  "key34": "4UXc73hQg6o6vxjqHdKirFLTyF1B2BmJiTz9e7RD6fFXqVe4M8znLJ5TNuVmv2wkcDTWhq9VF3xdA8XP5mbotnQe",
  "key35": "2P9L4Tmza55bFQPx9m8JCmQa2ry45driftmEpFwovj8aHKfpLAMQTZKcadJxfvoNCWVfJ7ZxkvEVUGgj1NKqMyFS",
  "key36": "3UyVhfhE6grZusPLLLDx7sfXsL9GyVM74rEQoG9G9qmnTkNvZDduvouyMWGxfAxrbtrSXsibKij6A5qFZMtroWwY",
  "key37": "5AdaPxZ2EbQmoCZs7uYqvXM6AWcMiWYW81BYgisrkbmcXZ4NyKJbL2aBamsuQ9GuHknZUdSKXbJb7SFrDnF6GG6G",
  "key38": "4Ux8vgAtPoYep5HkBQm7Vk44xc15Xhe4ehBj8BHCVA2HLf542pzvA72rxwf8AfDSVqcXwQiVEvKN2jxNjhLxwwQT",
  "key39": "4CiKj1L6J1G9NnGET8ame9ZNHTe3GtXk3kpCnK6s1orLJn6Lpx9xctQC9x9t34oajKex74V3ZXTMMgtffVscPBn3"
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
