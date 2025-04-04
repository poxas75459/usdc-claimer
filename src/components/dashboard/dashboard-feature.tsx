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
    "4k5AuV27pA35Fdi8CMMpwau9xREuQb284TUoWgo997bnPsT1K4K3KqLPkcjXVXxi2UJ2gE4H3wKE4KboPGeZXFst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnxpoAeDDcgJxbU9boTXmjzkgWJxxyGiNGm4ogY8SNBP9e8pmbjL9wnWWZhTu3rsiSZpf1AyKyr3L6A2xKPzTz8",
  "key1": "28Xdc75V8uH7147ZxCyJL4wDhwPiJ8qjskiVvqGo2HqQtrhMQjbWMmEGpBWBNYiEeMrzxR2gBGSDzPG9UiCtovM6",
  "key2": "2gm17Z7dVzdKMeM1M2aQrhDAoQ962JtjBxnkVz2ERM2yqbbmzw1oNcnYbYaQ5wY47yRRbmZZpFJYfJWHLZQdBnHn",
  "key3": "2Jy1Bqev174nTsP8EVmYdSLYpwft51gZQQoaVn5V6Hgo7jsxKkTkq2jiLHHEWiSMFhtgTaFPXJFV3DwrdpfH3X3T",
  "key4": "2WdRYdsrvE3hLskRqucAQ8M8hCnJEJxN97YDptgecu3SCVHAALZ2zBQfRGnJZsCwPYwaABLdsjNW499qLP3fJLAx",
  "key5": "etsNkKftq9Bui51AzsJmQDC1kwsBvGpgANsffDHLNbTfSuQ53hJ3WGenaFzQ8RXhTWw8fHFaa3sdGkPh1NZwYvF",
  "key6": "5DGEk3SXCYNEjnVhYEFgTYECknD66gaS36L5zaci8fG8AcvUcjezccTeztTytT9JWohVKPKAv6ScEeCCHKQvUpDV",
  "key7": "5DeEsSrQ8gv7DymReQjN5KyVEqu5vTPiyx7PEineRygiYT6cx8EPQwJ5sDYRiyFbxrTHoerk51iZZp5KADNPNUE3",
  "key8": "2QABR85PD4yPiFRWPuH2G4SLRjxA2dY5DKivbvcUug2uqEVor2vsTsmdJZLaDrbBeLemnM36tHhf2vjxzbgkxWJ8",
  "key9": "5zb7NBnjuEGuSf1NWpwEneoPV8LbEG6NM74Pw7RFipFdNQBSFavDwBKAGpqtEsE6kuoyeyhxJ52DDoTowHJ9MvXJ",
  "key10": "5oc87is6p3sbqRSRQt7k9qbSbWSch1bEc6habKoJZEvw7i48nJAetNaQcce3Gk1cZy7bT1diaiKPyTGZtmSdAG4F",
  "key11": "5kWFwJgM5rs6N83SqPugdK3VcxGsPth2Ng7CyAh2YyHBTM1kP4vPQoiwaxP17ppGxUGCdyiEPewuwyP1dBQrEsV6",
  "key12": "5CvPdZ789QT2JZVvD2Yaswz5WKec3Dyv8ub7e3Urts4EDntbPDHfrzCCJMYJFtspNTiYYaN8WmPmJRrj2ekvb8Ta",
  "key13": "2ZwjJpHNPpaqEJLzNBTfnhncdAk2LEUmZYBJ4Rh6cY8vSEGa7aGFQyvis9B53UZJz3kCXobzUPsw2wJ6SknPJwUz",
  "key14": "545C8NbAWMaWavdV9V3nWNPoZ71yY6jzYa3cTAdCjFVBMLV7jbN9SMMAFA96DUcngMKtUSQvSSbTH18mEK2Yz9F9",
  "key15": "2NEDQZ6QzbVky5kX4wz3J7SXA3RpeegQ8YAk2xCPcPv8uKJL79nTC7sERTvaV11sNS72cF8uDxUZ2VbKxpmrmz1a",
  "key16": "5vGPNB7ZmNxVBSwzdzwLaZhtXzABS8gncqXw8cZZckdHP29VBTfrGuG4AEPBDpfje13mFdj6kpXuGZVizXT1WJcu",
  "key17": "483wfBHY48fZPLbotAD7RcX2Q8csr1LSknjmpv7ekW7AdpsRSZ1u9uBTQJWj7QCJz25fVBtHnuqLxxAuxYMV3RhF",
  "key18": "2RtrhVazBBwagygbF3giRu4SWkKb16ahkkXnfZzrTK6p9LmwhD5dVF6uvg5vupco4MMN3JRyubq5wwoTydHH9G4L",
  "key19": "4kr7QRTQmfUuv5bxMNFAqkTbooGjsywsa8bNfDRcwWisd4HGEeYLmxRbw8YpdyBTwe2dTjw3r4EX2Ry23MjSRr5r",
  "key20": "54F6bCX7FCnbzYCiKMUP5YvoXZvPeYTCZHgzkq4B6eb2iU4VrUAwh38KFm2PopStxrsSevDYm23dsKLbXWDSu4PJ",
  "key21": "3ax9tqtverCcu4RRHc5aC9fAHfWZKrfAdK5oVop1va3KMihxCLaydwH4b6mgxgc1pEE6D9TcEFeyCMeu8gRui5q5",
  "key22": "4B1EyYYcnBii6nzJGbNWgmYYLsLrjPAMDwkCxQSiQJLFxisfVZPTLxga6cu6yo2dirsTJPTNgNNUQ296Z9oZBECU",
  "key23": "5YSoTWhGFuP8tQVP6TwG8Vsv7HjCf3Dvtq4HG8KNkhvRCNwjgnNBjM6YkgVF6PVMkYxSFVJce7Kn523DMJwY1yoY",
  "key24": "oPYtNeUUu3FraBmdREkPfUawQ4XLRTra2DZwajgCfsLe7DJsN7qA4V8ye14X2pWJPn9yPM6iByoFpTrnnX4rxWC",
  "key25": "4TcMefPGTsjdzp6gdii7BRK3G9MquY9dhhdSJCLLZf1DAiyTGiKg5XhzmKeriZuwzTJYty7LVBUcHq4REGUwmVwQ",
  "key26": "ruqax9FgaJ446HndoL2Qq7EgM4AQL21sEakfuj49syczsb8EpC5hvvWVteB1B9nVxPgvFngNhQo49QmozfZcykL",
  "key27": "2H61sYMMcFeDwwV81RzDTsdRLMViAjKb7UgdDaktCwC3DRJFmjjGUU8VMaeP7xs4bEmeehb3oZyerNcFR5sWoMzc",
  "key28": "LRwxFfoGvnKKcdHtvMrtcJcYU8iCfh4CP5nMJaW49cpsV824ER7Aiif9NgNxbwvir6aL1sa2hE2SSQvpJhs5zQq",
  "key29": "5PF1gzHNMDcoWsLt93xV9FaJ5Y1DtMnwuzBgDxirLprkJo43iTNUHW1U2Koeq9jb5j2CmY5XBU3v1uFkAoBqHR4P",
  "key30": "wY9ao5uJi6A1r8HEKjiw4UDeijhVcaJijyKhF42S2zyP1gidepc6bLQ95zTXNZR5aV4TekBk9BxhPbTz4bxXaue",
  "key31": "uPkY8phrHjcNHe4JY2Eoy6zRwk1fvcsQhuVHaLyLeYgu2tveThW3A1ncuSp6GrfkHESGmrZKn1Gn2yTeszHKATw",
  "key32": "3qEwAaMc8ZaAjJukDtKpEWaoRpvtLUPiWU4QhaWnpYPmEVxV6W6Nn7qPMZqG8aLFeSwoY75Y7izubeGQN8RAPHBd",
  "key33": "4yvgHBn4jNXxH2fFum4Ku4DF58DfpgLdv1xUp4w2FGCce8bM3d9pSciRQQmE78rCPgTuewG7EyAKD4HXWdbsJm6J",
  "key34": "3axBfjZPgqTyB1pHqEaRXxSqJWRkGRQP62kUDPb1Uz6JnKz5to4r3vjkwzPUAqHzw8L8sfGJvp9d6J9jKyawiNjh"
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
