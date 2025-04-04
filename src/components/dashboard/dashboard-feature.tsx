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
    "5U94UrrGNwLb84F6Ku2hFvmE7gk2JDWaaKn3W98htM942fDEz66mwUawYYme3p22QnUoF53wTECCrZUaK48HA6zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XW9fTSFtwBxZuEp77UAr5ESBwV5y3CPTaDduALDwGo6BZEhzqLvZWfWLULNLUq1M2X3uymY8rdywuTAYxDQYEDJ",
  "key1": "5smnnAFRkKtwNkNVUTKrWH4ryENJpG7nzCKcvUR9TQ2yNJck2pQWp7dKPZejhJT1iE1Xyt7BgdmZZWypM3W5zzRG",
  "key2": "3wsFSbgiawS8vrhbvsVQmKk7vcqXMJSkqyvXgaHxovHtn4U4FFLaWhrCxjgWDugv7PRif1i3hqaPia91pkGoqjLW",
  "key3": "aB36AVqC64hMhyXDuwDQPDjB1PEr5W1NsU4WKbeC1fwH1GHBQzSCHa6m1cugMtK9oDhtHvKn8MCeRzuV45jXwK7",
  "key4": "35WqLcPo3GxkeYP9BpcRMHWnUKgQaTpGU3acG1QQsqq3Z2dYDspbYMBSE2JjGT5hAURDDqEdQU7R26k4Mz2wNEt",
  "key5": "4UaRixbYKAYNki3RDdwNqjEZRZzGohLtUiUK5ej8E6PmtQ2YhugwHr83mVu7zMYV2fLWD2kDHEFzpdKkSZWU6k8U",
  "key6": "2vMZAbnYZicsahWK4UAY9LiWrdBmG7oJmWyUeREH52mZg22Vfe1epZWfYdTSNE9Qi7PaD6RMLbQSH24Rfqr7pUzF",
  "key7": "43qvzT5oLhBjXcxgVghnda52K1bQsGhYLRAdBVMqHNVfLM4nTX7aU7mNwFbB3EPGrQ44ftir64qAgir5TbXwMfXk",
  "key8": "2Kr7APe9L5yjRife4tSZduEQf3cGE6BAG1qtdFDkhCVRmb14ctGYd8VLBE5BwEWnhLESeNozTeXLXfYDofgSPnyG",
  "key9": "36dCKvouvr1Wsua7EEt91khhqaKfqtSDuhtQp8JrZFNm9y3SmCHaVDRXiADPaUiyizbMe7WztMe7KzA4tRFXvYX6",
  "key10": "FUZkXyUGxh3z1XcGJNHyJsx7157i2CPrWQsMx9LZLBXUBfwiZDML8SErYuA8rTC1gHtFffPghu63ZUyuFNvfMNF",
  "key11": "57sqAsSLVgt8PrRfD1TLdEkenhWgdtAkzqHVZtCGhozN68dMZBK1QiYwMeaG7Xca4J9frB4euPJjd2KvdSujbpeE",
  "key12": "4WdCN5c3dXZRQdX5UqKaMCE5XTyunThJdDmqpFSxBLRQEMrqvux5CiZnFZR9Fe84SarzyTrWnFetGX8tJsB3BvSG",
  "key13": "m43ju4MRA548RhcTzkjMNKvU5jCnHWgA8bmatAXv8PiMuadYvNGJRWeiewz6cZ5xXLXfwvCYpUfR38h3Xr6EPsL",
  "key14": "3fdtN1zWxeDHPNMozgFVeMmRBFvBszjfQBnp73Tit8vCjzCDf3v9apdfXQuHztA6x6z77Ccz6UNJyQU91w1Qpytw",
  "key15": "5X8DShAoZMJegumpgbgFbhv6w7WSkz2c1HfaVZN4Maq2vPYamgXGY1XoVFCnTHVc3uwBQAwjxC7XchLMCa56odz",
  "key16": "3cVrAGdKY2Kntref5cD6J1uVVyxRMSG2KNNg2Jve9kTfoVhivjWcUfaeM3ws7CTQjnZvAmRxBgpQzsDs6ExyLF8J",
  "key17": "7dkiCnnG5shsfutV19wX6idmDyGQaZnJQJqhBJcYST7p54gQpsrhfMSd76xMj9Tfe1apGgmJSD1yrMpGx3ECkWv",
  "key18": "44ivzqtqZvta3coeKEXq4BGntrRKkus73EoK2DguLam7WLdvYnyr8pfW65UcjwVNqD9Cpwdg6Co8D8HqFECCTTJv",
  "key19": "BLRDr461mCWASYasEX7dsmHYSyuKQ1LXcDJjXEcLY5py23BTRNpKRAgTZyarq7NnMjVNsiNe8wwQuUVWwK3wkcx",
  "key20": "4muR8eK5JUN99WDavoSeFN5P1qsLrezmngnZhfKwBrJLmHq8BswdwFvajgGxuTcyjwvb8MqEkbEddnm3cDWqAyPh",
  "key21": "3w58oSWaG4D1jG4uRjd5Lg5SE6rzsJB3eEvyH6mSNMQz5FDdQQ6vGhPEv9yyWPCwtAb3joaPgjw4jYFPVgYwP91M",
  "key22": "3nrTGzcACTCyjKCTMmh2YQYwC3P9F1nAhrfyFiNPSmUUrRUaqup8rTkJhurnipxrjpY4ASrvvdbyMCQHzSEqn2Jk",
  "key23": "GfHnBtD5Td7STmHtnbbwj56sA9uLqVD5PXuqsopf1frSTYKqEmf1H4fBFGES9GdY9zgwqaYozKpp4CpxsoaFqVg",
  "key24": "3RQTLR9gRkt3yTwWr6BzNwpeka3s1URb5n9TwS1VgAUZCzNNKuSKe7QH1JeX1kaxy2Xfk6nnhcpMe4ybV7dEPLEk",
  "key25": "2n1e2NHj2NLEHgAYdc7V2p7yYv9z6sLizw1sdCfMKxikimgMqA6NNpJJgmvmk2DriYib2PBAGoW6u1KdhDmf5i2c",
  "key26": "ue7xDUuZuVKdeZX4xA3v83pzG4CoCooHTt6AYspSJ9CMWfeKdUb9888JKg7Ao93RYLpDoUaGgFpEMGDu16Hr6pc",
  "key27": "4jkaxEVunTptRCCUdybTysUfrHMx18S4wM5k5HpEEPcecaWenvR9DJLjsnkkYHYuNUbtxWTQdr9LvucNoAALLz2v",
  "key28": "43kY2tbrwEPScLq78UyFMbBEEycC1WgU2LVLdiaepc9JHLyFhmi4T8yyR9YJKgpoVDroKLDGjvYPLN8rBEz7tKj8",
  "key29": "5HktcA8u288TGUoUdqSdeHuaNY6moozVkaS7tJRwwqZJi9a116PijdpWB3dL1WHdfDSePyRzkNmLJRFqJ4A82bYZ",
  "key30": "2fgr6d4rSDZ86LGuYYZUTSYAWbCtLcwTDUNwrfYRdRNNZTwLojMdwvWhaFiuiaDTVuz5eQwAyNzM2NSfXQBQjBqx",
  "key31": "r3eNR7c7SUKRzzy86WoCMk3Zu1A3TeVjEn4GuSL18rM1wSd2hoZDFTKckhHpqrnxQb47VX8W8AqYuTBVZ2YVbLs",
  "key32": "3Vtt7bgR3uA8HGRhiZDMPVdywkKkYZ4Dk6hUq9DGUGDjeVhEVG1dhSfWbaonKAg98TFcQN8YkJ3LtCPjADBNFj6h",
  "key33": "3BPaxmBvWMs9ni5HctpMsYXjHxATEKGmQchSFgAffyomcuiH3EiVjASSKPn17mGScpeSjGPQbZABmXP1d8jsLEMc",
  "key34": "2siiY8rRts79iYYds1nuCoPcjuBEd4LiabuC6hUawtpAoKP8Tv8gUN1RGtQpEMBxBbbSGM4R9eiSZy8XSps1Pmxf",
  "key35": "3pqY5MvpGsnbSSXkWE2s9aoQkdEu7roY4BHEjiUc3Up3GjosnkKVsP4nRH4H8VSmo1SisyHTKigoef7mxcWAheMS",
  "key36": "1spDxovMcweTgcEjjZnNETctHpsngCD7jyrPdry8ypTM1U1LjkDNTJ7bXp4uEraXPSqXBoJW52U8xUyzGP296to",
  "key37": "2vmrG7PSyYKTbBV8n45ZyxE62siHKAseqEQGbdPkKLKY4uRVmuN6UbHGNz1GekDnJfqgzteBtVYtNf2j1jcLtDWa",
  "key38": "5fDf4rJmRi7qzousyeyJho1EYbeVy9hLZySrHJY4mtaCWLMkMc5RxNVit6NVFf5WYJEaX2SskuYEm16e37nM56TE",
  "key39": "34ANTG3NSENY6RJvgoKZiqshwYMLipVw8NyRhFnKyts98YTp8uvjegkuyRQWAFt3nC345yGWDSacb92vDH59GahC",
  "key40": "5Foo71oaJZCYeuRrCbMkoZhpRxqmVJHVfkDevMXww6spBrK3D8DRRDJhbKCUX9TLs9j8L1xKFg26vE4cLPxg3mhm",
  "key41": "fPELUF3vaKAsAtGdWcgmxuv485CdYreb1uhy2ELE33h3e84RT14Jr92HNH79M2SQm6fi9R7JBSizoyQqmbmVfDN",
  "key42": "eJKx4VU8bemJVZaJriyZJWLisoGfLmvR5PkgPFNZQhnJVKp5ysNVBkhU9YUGEMHPkXyxHVayhL6euGS9bmLVyFe",
  "key43": "etqM26ULLTjsntXnZTZWBvd7SkyFCDChAg1aji55WtShSxDkAU3tbaFVMPHr3FzZaDRZykq4fbHoYNY5UaHH6tJ",
  "key44": "4Cn8Ye4vhc1swpyvofsmJoAq311EaWktwgvod9UUQs7dkzhkW8pv9iF94rbNnHYx5cEykNZgDtrUhom4geD8bXEs",
  "key45": "67gCYiMb7T8nmCYBHRYWBPBRpsFje3pFEczQGeoL2pH64wKUfWuyu7yx4nHJ7KsJGLEBdnkq4ZGsno4XUSmnMfLF",
  "key46": "57JuaKa1UX4kLwotcdFgFsrNAL6wRrUBaFYe5X9HmDfLnqgPqTby9VPHfPcLDEf2jT1WzGUnSjv7nsAqsiBP5DZ5",
  "key47": "31DNXiDFezBqdi5yyTApBmbCksGt4BseuHr2WcnQLYoyq6GbcaxnL4B7fnY8FJ44JiCXTPCV4ZUfRrgJg5aJDfk8",
  "key48": "4yiRpyyo8sW3oY1ERNWzAdT27oRdWJWbhJJrv61rvrYNpNB3oui2svKVRiGJPvhrwTTLTFhEZ5bu3PxEo587MYFJ",
  "key49": "3KT5pyBnSYrZf4w5zssyUQwafYvNVJwem2igTvuNLd8D4YcRSXv2GJkwidAhdMn27BX7ec6R6FEsPbDkoechvM3a"
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
