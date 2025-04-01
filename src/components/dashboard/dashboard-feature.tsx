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
    "Gh6HgJcYDjant5q8Jo1Ciq5SeXiyBSSoXa3p4bEmf2iveztXX4dXJhMkWUrVd7cw94G6oWPqzgHX1nQtN8Q1Hmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sEwfqciuaZXTbMxYcRSm8g457BXHdsJho3ZtDT26t4EUSZGFfGiSt43VC3HHgVKGgnSr6aGvjE6orVHxkx3q4bh",
  "key1": "2odaMi8Kpz6ciNkgyVPW7cVzEtAD9B9siqvP7eC2wPszucpjinnQwqau3nh66AjtpcxnreKyyWn1CqAeTyudGHPH",
  "key2": "3J9A54wGgmftBoiiQytsdhz1zY1tZHNdcVQtK84rEpZB9taKNmiTpMAGwXcV7EjUT44yC94dnx4QxajGRDy88Zro",
  "key3": "4tp6NqWaMhgDfmMNR2tLEVEmGfgW9SrdCXddJt5YsNFmGg5nYmKwF6CQJpsorUkTU3pdNP4cc7n3zNF6UbnnET3P",
  "key4": "5y4hsWTDMvjhFT9D2NHb9kfrtaGfF4Pcq6LVGmdB4mjZ1d7a4RZEoRrKPhNF42KWYMFXEBk8owjn1XYaiuAMYrEL",
  "key5": "4b1V2xxz97doKfMAmEtfsGTCvNdWTNpYY8YBniAxYfMXL1RJGtEdBR9L3VZjoMmsjLjrkn8SKPdnPs3uPc5i8aC4",
  "key6": "2HwuUcRhEoFqgtgdY3JSgQbP5hTVSfpFy6y2T4kfvJxE8iazGu4YAmUCBQ9wDLcCjPN1CQPLJ1QfPL29T41mjwE4",
  "key7": "4q3wc96URw1TJCFc938ycsxBf7TDKSHLf4is46ULeGkwfAczrwgBYHDueXQ97hpNtyT5P1xMZ26eo8dVThBfgD3",
  "key8": "4JrKkqebCzPDCqp1GMgT7zKriPvCqaBYXEJp1ui1F2YzKpsctVC5fhkiB4RSrnNxY3hXTYBuEVriq1ACmYbLpFPg",
  "key9": "3DJoENkdFR891FqrKMbFjRXAbH76Hwr1dJQcasdxQ7EGPFJtE9oWtbv15gshM15PLuwdnRy7hiTN1ewVjSibStpJ",
  "key10": "8dzCyh5B9KDVxAv7Y7BTd5UeoLJdpChDBJBzVsMq3WDdBLCrJPrjERuFdKBLE5aPn6Bc5QtJtKfVC3EhGoqi8yk",
  "key11": "3hrQEQybsUnX1r97pkTNdme5TEDcm2vFM27gemr3xPVP9HwzihkHXSpfKDguPMYwfy6M5cWyAjmF5VeHnhHhvoER",
  "key12": "5qToxGKDDjxsicvVKtoPZWfwQK9w6R2PYGhiL5umX24aPHPaDiJ6V5L9NMDXdvZxhaa1kysLrZ7zqDvdCFNohT7x",
  "key13": "3wQGdeWpvmhW2uh7tPKF61r9ummfwChuKtPx45fiBXhMWT4E1M187GRgeW1MZSaoANwsRAu9duQxRUPDsCDYkcro",
  "key14": "61dFCxgQkJicEizrNEmVCN6bskrNy31C6opNbGM7CJUYhH714iDh5oS9CVdE4YBSbxPaa9d3YQ5v4zfjR9LYzJzh",
  "key15": "49yNoHWHJvb36rj2x4MHkkUysnduoV8LzQbyX8NshiqyNeAcp62wKJeDZ17Lg7HsHSZpieYWK62cbyFT6UyufuZq",
  "key16": "fmBsSjMTSieM72nxBrY1V8QuZrhaQd16CCpYB6dYvw5cTcVDvB13c2UhyDcuWjtnEk1fCJobyb7MZEnrCJ119jA",
  "key17": "4qDcuGwGFXx9wxnZjqH5S9k721Kijjr5e7aXU4NQhkdnhjHVRHPM1Xm3dxUMTTDKq2tDvgMpAemkxpQy4ZndgiVa",
  "key18": "5pWZZppDz7K5ZRpAenpNSvpJxYLk2GDoJ4Uytai7wLmrbk3Cu9Bg248Yd9Sdsj2Xu6jh7yPh1S3Q4bgsr1WuXL2z",
  "key19": "26NLW5zq9FuLfbprm517MWWtHfbhvxwmzGfmaHFiZi4mQTi9C63cz35CpwJwc4x8Z7vENBGXNLyZR7QfdCZNgaFM",
  "key20": "tPmrxULebDdJkRCKwe1swKeU2mLwaS9mbYv7Wbyzy4C2UdErpmhcAFQZAe1sXZ5Wr5cyF7nBUHhFaygmzXuoWNs",
  "key21": "23B79T1RLmGiBNGeZnt6RWwqyf78bj1bhDdHKorT7WPWvw8mGiT7C2HFnHRDvhe1Hp4DVJJ7iiSNfLcCzbQJF7Dr",
  "key22": "Qxsi1PTZ3un3k9E3G4kBafSZRQ9diWviE8HLW5mdH4cAPhi69ECbR4cPCVTT3NgQYU4ieQriaymVFxzoBXHNMir",
  "key23": "4nVQKrp1VFehKkTxcxeBWDUL821XX2KuBYUicw4XxJVpesDSBWumN541nV25UEpXWxCKiHCekiuE6GSigPZ7gjmA",
  "key24": "5eLqbNUhgqttuAPXZXzpVgLRJMYwyY8Htp96g9oP3611HKPii82by3m9kMJwMpwLdjDgaqF4LKw8zSXPS4DCWA3E",
  "key25": "ZzjWankme7SLmWF4m3mdxCmZBKKSzhUt5YrqKhzGFoHHKh8SAb4Z2tCPgyErsYSrHf3nc2Nop5UyLcKwh2pwwRP",
  "key26": "DYrLAi9A3TKEXSXN7c6EXkMseyjXzyFdB9DEqxWv1vv1BDRoDvVpEGQoYGtmZFBWAWDMTe4brda79yxFSNAa9zA",
  "key27": "5up1P8mzqoZuEZuphXN8LmfvUhR5DYUdHe2DYTdmXdAbABteq2GgfvDKafGMe4PpbCY64mty28Er8ZhmALvemZoQ",
  "key28": "2eYCXr9tr93pAgjxjijbxsjuKwyfLUaXpTYFTbaHhf6Z6rWxNxrsXxi87ax1YEnZw8GYrp9LkDQLg4CUK143gACK",
  "key29": "22A74uKq7bvyKf5B7AaqsqhNW8dZos56uJgCNKm2TQVxebLkDSw6s1TYBTQ3sD3ogt3jF21byN3VrrVCNatBLW3n",
  "key30": "JoYSVkdum65ccBaXmBtoQi16xV3SYJnmi1w9AeovqnhE9XS8rW27UcDNVgKhfZDgrNc7h1aDznDNQ43ZnjhTgJV",
  "key31": "2NFxQyYj5xGunf65Xmb1GQRkcjs7pqehiehs6iv81oQConFoDYFJcEUJfszUKGUXhMAc66m3p9NSK535QBnpdUvc",
  "key32": "63KVFVpeedKyEjD5HUnb3o6epKoSDn9emDAxTDgYjt2dGAAh1jJBuVobmQ5vMQHwfT3xPgQmdfRSdPrjWWRTmwLJ",
  "key33": "LQx8ecJVrzdvKeWk6fNW8nTGJrZHRiixRfAkP7xyRE2azkKD3o4E4wC7aJrcrdkYbgHhycdzpWsX4vuts5SHjhF",
  "key34": "2Ysb6mGv2Dt9QNcdKkqtDXcuAxFHS3oSzi6VCoeaqXuoTeYU3RVehkeLRqfM3eJJgazoMMguMqHmMfD2m6n4QFpr",
  "key35": "a7Upucdim2F4fyqNyLJ6g6jXQs3xCMmMsLDyhegEjJJvUTKi6kUP7y4kg6WpYwqpdHFAnvprvuAqGBucWcsncss",
  "key36": "4KntmuF9QzVrmssVPFVCANnVyz82Hy1KjWhZoxuw2vBSSzyFtDXch1VZECovq6WqAxro3YPuDpz7JTWNN4jChasv",
  "key37": "2ydfMLrKgNVThK33hm5YYPEfc4ZMb3DQRUeBYFn76ZCxWCbzp9qho1MiAqyhhMgNhvE5mbRVVqhQg2xeYXPTibZW"
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
