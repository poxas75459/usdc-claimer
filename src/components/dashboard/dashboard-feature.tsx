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
    "5uYo8jusL7TfjVJYAQjStJFGbQUZ8vXc6ftnvryk5Ymy3ZwgzyVaftjheFBRoxPBbwHfjfEQAWatoFQ2juaDC29T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NMH6biXWfdXQpZEV3UgAkSb7eBDJWyKNdhTF4vHUCsmf8yi5b1STdfzdPChLKDQDELZVZMgGwDMnjKbScsn7qzz",
  "key1": "3RcgQs2mUrpzGEaMHrmgzjCVSTVhqDbwDUUTPhhtV475dfscqbjfQNaLUvkrQFUuRXcSuhZABMJrPb93jtemqJuz",
  "key2": "3YojwWWkTp572ydGYhAqQQFi9uYWxPeVghBLtENbz1kaao6xdtnt1AQVZDFjTrgGKkX4DWa654L6oFFqes9vTtA7",
  "key3": "36Vmb4Z2Wd5ppLLAmJK69GM6meXwjA8qYFmaM5LcB1gv9bBLt6MBEYv4TLBjgZLPaXKoRnTsEh86Uaiv8dvWYbg9",
  "key4": "4CtYp4m9YsZQwmDDGYJE6UVuhXGd3VTMTYFBxsrHsc5GHTri8yecUWugp1WjynqQkj34WA4nVaQeE8a5immhP692",
  "key5": "2M7okVAfNi88nyTKToKHj7vLWCD3RY217bqJFrtnEASuNzoEmZmXH1wEF7xtGxyDNVkHxnrcEm8yXmMP1gJZrjVm",
  "key6": "4ifN2NoGby22Y4bqbRoXySWwUPcUJWDC5G1qz6sC1F3E9jk8rbH866vEAz6Q7vsMcEyQ5jC4CmbmsAovDq1JeASt",
  "key7": "27TGRK3ydorrzTxRN8CbpNNbmPUJNYxx718MebPqqpkumDwxDmk4Y9CExK5DgH834R44W5LjKqrY559doNvWVgim",
  "key8": "2bmbKASS5LzN6Z6kubKS2KT8W9d2HQcqPVAesTnD7g3Sk7QmN2MaG5SE3Y1Xt7Ua8pnrF6AuKdtKdDCPwA7boDMn",
  "key9": "3oEcNSQREaVYCJg8BpF4LPZvp1YVvUPYdMBQg4JkNnA6jVQhHTDVms8gXnDZbYAKkbuDAf3V9eygvJub1evcaB8t",
  "key10": "45XbCL1CGdd33CRJqxTMpQ1uMFVnPKF4vjwdmcLPBpcm3F9WPEN5nA7Q5nLxpHX3rzUuB8jKdB8DWLqxTKh7MQfg",
  "key11": "34DEEKho7JL1Tq5U8FsYFoiQW2hTzqFcgaQsfsBPF7m2S36cTJP7GeNSiCCcSaMeY2NWhW87KADoRSn6pUsPxA2x",
  "key12": "4NZYAVd34GyugSpDdmkmUA2FVTh917uW9RD5E8KURXnnmCkEA9FktrzUiqK3PjXABbVex6D3j9qHsGeD4z1j9fx2",
  "key13": "2iqcjRwzP8SvSb9sMAuZX8r5p7LvdsjdKLwkfWGC5zM7FDnFqSHVgdSvjuZpPjsQvJ2SankACU8B1AjBBhwpLpC",
  "key14": "VeuHp8XyN5wKdDQwQ8Yx2ATKMgBPLsENAzB7HjCMTfkzRoynaSLyv8X6W1qKYVwV6fXKqnn6KjqBmoQhqdGziZv",
  "key15": "3cStYuSTip9wXQb3uCYtGeCkNCcXKpQ1UvEZQu7KJTfNxpPvixzWcLL5aHrxCUYVpCXu7U7csZiUz3EZf9MTNh6V",
  "key16": "4HTb6LvXbXTmzNCEknPuemhJFo7e56bVb1mTZobpBS47TgBDy7Smg7HB5So1HL3B3S4s2jaftj6nk3oVvpUsRfRW",
  "key17": "AncJ8zhnFAcUiWeXe8dMpvyhrAzpBohg4jE5VUMMZBowq7Tyss9cMxxQkY2zcAhQu5AXDEu5i6ukH7pBCL82iKJ",
  "key18": "3c1VG8QP2jdpxhFuWTzsfREYtFG7AMdE8RxxE6AUMTbeRCLyELjXXJmvej3QTKSCHSYaYaXdMGQ7KhqfvBJDayoG",
  "key19": "9oWUp1LbPxe7sWVLWXhcEjxccxnbrVRu7P3cZhUEftZwwbB3ahvp19EJ1VVy49qYr8WXxGjL9ECjD7cNP2zCg9o",
  "key20": "2eS6DXXdxdppe5ua6ARhy8Z3ytCiJ1UdYs3NhBViG8ekvuSBStSZdEkL46UtHpg9H1sSRNjWap9HuD9zdJ4FccK",
  "key21": "3fTK5yGyGx6i5qSesXBB3sqrf4Si4gJvLFg9i7bDuv2fWVLbgws4ZHXfVWWzvGyZYSvQPZgdnbCFLEDVfUoYEPTN",
  "key22": "84RTPQaAtkc92wCj1V3AGmgxyr8GoxuVCwc7QtuVkYRgezsjuNp99AkrMp1R3jnJqQZ1gvyc7HXWmZ1aXg2xSsn",
  "key23": "244jT53PRPMTRHg9tTwdmCW1NUen5LffzFnyZeHcJ2QSe7qWvGpF1ef7FU8YuqmtDULghLvuVTk2tyiKAhdk6xxT",
  "key24": "2rVhMGyA9cn18EJzzxbCmd7KXTGYsgXsDar2vjesEDMcnVFfAcLQZFNjPrsDJ5GdQweSCVPAMicS2ze5b2EdeGq",
  "key25": "2ayvsDC3LAZ2ta8jEMNfBNfT8eUdL9TqEcN5YakHr9eMh5nvpoF7bAZjL39JVCQY4PeFJxMFCaqvu2hiaCc8bvGE",
  "key26": "2bZojfESfypewvAcJt88oC22D5pNhsKRFJGNxr3NBXAEqqsg6iAa1iXVGM4ysT3W5b8veZnoLoik5MbZHzr4RfJZ",
  "key27": "2SWg5WkM8uQ1nDWZZHPAJdzPzeQk2ANtaggAbRKV4wyLpgKqvU3mJgWB99e7VWbZyapn47ztbMnPjLV8wMZCUxTw",
  "key28": "5MnU9vBL11tSyWbZxXTRtdYUtb4Qmn998wk4pzreZDxN6XCrdBm6mdTxXy5DWsua7xkakuQYtBgribzy4ZjjX5mL",
  "key29": "5eNDB5rR1RYrPyrLeneNNSEoxuWfssVk6W9mb7y2SYTHP1Mgta7KvZagGnFgoct3JCowJ9tzWLMPkXt9ztXqFfRn",
  "key30": "4fVhLZC2gjPCmHudqrvZ4HAx8idKvvpNHxzENoTzHid8XDiXdqHb8FUwkEf9cjpMY3h4LiV7jWigymYcRP31oxLY",
  "key31": "126MY1Ngr2bXip3SEEcWuEDS5fx1jByBR3ErDXRzSEfnDgx4TvWyGR3AKB5wD4eLYTG7G4T6qQRtKMRLAq56yXEZ",
  "key32": "5gvaGwqgiJr5zEm4DkYayDi1mhEbsc7Ffg5LMCFHz1ArE9TSKnS2uGEHPNfyhQT8D375KYQTAwJ9hxhV65TejMU1",
  "key33": "GkmLKuoxjrkR32etFgvRka4sQ4qWzhigTHKGVvAEKffuiwAHdPr3oFr6bAoyVQkMd9pw88piEuGgC7JxtH8DYD2",
  "key34": "4sj5hxRjkeAxUY4WQ33u2ShpEDVWiNaQCh5aQASLy7nV41gPqNvNXVgYciYhsawx5PwfP8topniJQp6tCvPBZc2z",
  "key35": "2vJzMJuscAcNKuDDs4dyximuGSmqgHfZP6wcCfoTWBbKXAe613aoiWZ4j3uGowSobeWWM8uBBrW3XYLz2W2kncG2",
  "key36": "2Qq1ZdnTvxQXkdneFpMcUPEe4vmapGAfPviPehUqrHC2oJzxeQT1LXctoDLCSeKQmEVuKfeq8vfNv2tHB1kkWjBT",
  "key37": "eebknqqtFkccXfDuJzC4mCvyis6o9bp6phRZ3fFSSjdNQELY5riuaUCMP1LN7FZtsBGor2WmwzVG5RsTjmvMmXy",
  "key38": "2BTovGoR6aVjVnQBQ7k8vE575Ky2Gk3wEsWC7CC42M1KG17dsv9oA4PH5FckkN6ZHyb5fJL7Hb2hWTUqr8u8GUz1",
  "key39": "649ieU3QUbnPbWECyr24A9BAaDtV21htgSuc7yjTf7xwa7Bgur2ELdxcNEcjQy4XGttknHB2fcwKtwgNYNQ14atc",
  "key40": "4KD2ps9qH9dnxNEmLF6mzx4xFWsC7671vghjaDT8BfTEPrSE6dsu54JFkcoBt9KGDLQN8JoDVWv3HZ8iAfHF5ovi",
  "key41": "4SHibrFgvUC7qBKymFasdjNsopWyusJMKkVoJHaod2XNps1F4SKQyVorSHDzPw2JSyV7XpRG33ktXKgJorHwEzef"
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
