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
    "2T7NmzHsfWmevF8xPJ1cr9MqNNCUThjm34CUKcG8nqjTor1uyd4ZyTPJCto1xXwHfSSJpKxhhSY89sSSixoHAJQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56j281UoPemZuqg16mhZFNXzA6G3NoDUsh7oAzz5AReTtApq1jggmtQHmBDcyq6Ft3AzPXxxRSh7pQezWDBi6mpY",
  "key1": "uBP8c4LkwAEhjSxLWr3gv16GvPd4th8RkvpqXDWor5RSBBb7K43bsi3m7V2PVetEuo4FkMdWc44ZvvP7Gcwo45j",
  "key2": "4mvnAfPC2KX4jJ3mU9rdWrPt83gYRh5gF3quW9eSxDJFDmQhwhVgHTcLd6ABAnM8BxSwAnHpi5PV86MD7ky5RXzc",
  "key3": "GhgYy996A1MexYzRaqBXpMrki11ZhhvnGSdqXcxro3dbLtCFcShHcn5YQ1uALsPXGQvurK4bosbg9hJzeztbtNX",
  "key4": "3WyYAvuL95R8cdV5EfYihGZs7vzxs3Y5Uzyhb77aQbrvacwdJ6QHdUFazcr2AWL8E45KRJAVjS2PkfHyqiQjXJ5Q",
  "key5": "4QjSqMRm5NJ1bZZNLr4agXwFLN6t8asEcDNHRoACDRrzY3gY6vSx6f4JyDHLvjxzbsMMLuyPMh1rezRXbvPjTXRj",
  "key6": "3hdfjVC4yptZDxDVzab3WTMsA9bCKHosYKj1szhdSNfrBQS88Wt7wjrJheiomNJTQnVTp68WE4miZQp6FsfaYxmt",
  "key7": "63qppZL4c6YbqEx8G4FSaYxNyp1iNk1ELNRtV1w4oesHqb4EG1r6fMq27q9MvGRsii9JJK4FY3hFsRooq33MkfqV",
  "key8": "cJ4QsC2kt38avhC84mjoT1Kzo8NWQTrPvHTPgDBhHjz4HMdx4LwsRcciNB6p6Kw1RM3ZWCW9Dz9wBnRRZRQTzz7",
  "key9": "49j92NMs5RZDTcXLnn4ihwC47gEq9Z77gexU1VoopRJfuPhnQ4VzBtau84JgkhTFxRVfPd3ZHx9aHFxTnUU9RNTx",
  "key10": "5o1qXrcmv5FKsuwwx4u9LeHfDDfrdSMoZAj3gA8tnHaiYtbMjLSrA5fKyoiS7pFCHTovjK8LNEiDoCxhPAi9bvnz",
  "key11": "5PygVvdRJbcrJDN3x6y8NEoAELQve1z8ZLXDkJ21pVEdsn3R8iQ3KAUADhuLpqJXRZSybGcjuw2D1WhUPpqB9LQJ",
  "key12": "YtqEvu5mAoKScnMhgQi41rZbo1BEVsGoQKeR72BaJiq5pQpkBMGs5iq7hBNpDy9CrmEMfFyfgAtNoBgSVZBTp5S",
  "key13": "ULZcqUPNHxujRMCCSSE6c3VNRe271ZzUb3QMo2xnUyafKY9Mt9kigHtHUgvqyXwNWZKfy4EjKBPje7WQ1BB4KqS",
  "key14": "2Bah1RXNpWhryoxH2EW8zvis2fsonuYoXK2XtgwR8x5nP7HjZuGVsn9Pz549dkSdozgps5VXb2pJLmCrSyYHicbj",
  "key15": "548vvEvAW8VPEePK1y3Tye6aJg7iWiQeGdideJ8WWzZKMZnCF5EyWbeFQd7Mzw992pkpoHhY4fdwZsPEV4hsaDVS",
  "key16": "zWPCrpNXSpNgN93Hv3baeiRw8mi5ThAFXq3okLdeAYVRpJoPsdQG76Qzje686x72z3YFLQYq4sSdaJisqkqZTw4",
  "key17": "3CeTJN4MWnwnuzozG3iaD6tDFxM3dAcLyZiggG5LoeoBLop4bwNBCt244uBfrpNLdS5coZaLrrsF7EQeH2PSz6r1",
  "key18": "5YCBwq9omFqxY5C22PoJvsCyDBzqc7FicqmrGPku6mHX1MzHPhqWbNtSbjHQ3ek7bpLvx1tMTJf2wHbQmEnMB246",
  "key19": "h25vUcCfwyK6WxAW362HiKwep9hFFynSocdo5BTFheDaXLkCLnMBwvzsP9zVw5xV3pTJU7EwMfXyiRSSMMj8QyJ",
  "key20": "2NnCAS4dJcWertyBtezW5HFAewF15YcndkqBUbVtMq9hYLsDfNt2gef6o8G54gUJGzjyARCxkTN4KRdrPturaPPy",
  "key21": "56b8PYEsSgEq741hCmncmGcooiTtMBCQVcNb2zZcvZB1PFw1BAxy1X1kWqxjwdp3sLc8ynTy8BhuVAj9PTKPjZY4",
  "key22": "2eDabkuhiV9SyfGFAHzBivMJZCXCUZbKnGrCgSYKz7huA7iwZCCVgsHqFpEQFZoMdGv16o2gRMgCAKDbKB1ZQeM2",
  "key23": "4pm1dmWdp3rr4ojsVh3Mszrq4hPBt2c5c2aYN5rbM9gYTc2EaGAzRLiDFcTTLPBak4CnsasoNtkvB7mS6tUizkWd",
  "key24": "SvemZ9DxhASe2sqKDH8B1ToQ5cmUJqtxvZyeTbQ8jzKMmnyfZwWoBxakqe6gKwCxUL4KjiqLotPXDCPX3qf6FLV",
  "key25": "29J1rp2TcBt9n1jEQVevkbyBMLpjxsUY6WUE9kjdbkx7XgW2rWCXr5nBJhGiE6vKZHzEu3dCLKxnykE7PvKx6H94",
  "key26": "LkT8GaQYMhxy45aJpnBTxWFzMpXvRvWAF8NwEBeKSVdwEZsRbziPvGnABaNCJcQVTsn6EAJVYE4owed6sJ5GGg9",
  "key27": "3kW5jvyQuqtpepf7iy9NJsPQ6JznzB2o9UkaTb4T4zeQanmvkFVc9LyDkNPFYkvPHq98hH2sfHe56pxmoQnYSBXt",
  "key28": "2XdhDF8eT6hwXbTZYRgLE4hdfVFLXfFq3B1VYR7AHFLLBL5XwCuWRZft5nD3i9RJLdmz3JpjPpmLTmK3RudpTcPV",
  "key29": "xpv8TFBCczRKxiAYR6H6w9MJ32ZfCfgVLbH6ojoc5Um7cPBBKzaBe2uNATS3GEteLnSNMdwrgcygnmv6jm62kSZ",
  "key30": "9NfN8fK5wtn6PR9oRgvP93AFq2dMqgMLjqddQ1WyJKDKxUBfz39TVWjrZmT7Ma3WchQ8LnuEw4bVRMZ6CeU8bpq",
  "key31": "STAM3UeCWByuMoKdN5xJN4hQAbMo7wkvW3UNby3NQreXTcgTYNVYi5fhKRDSd3MGzyd2XDfzhFK34RH59E1651n",
  "key32": "5NcxEjGBdVuaQusukw9iiHk5nURnq8pXKZJj4ifP2rHxtw8CVegRfDsyn2E9JBCQAStMQDLNmj35fRCWXEkyjVmn",
  "key33": "3zQ696a91mYNPsVgSWiLkZEL9CPw9djqZ89PhgtfXw1E6rQATmwsYB1DghXjXBUmipTcpWj4n9X17UNDt3eEmVJx",
  "key34": "3xmDbXN48SWFBQk8WyGnfracgaaTeCX5us4uifq13CCXoMb2PBzg1n9WZhwPTo4q6w8WziGuWmTeFtx6mAvDMC8K",
  "key35": "42x4PhJvJ9bX4NsuQ77ub7ppJa3E2vyzovykxCKTZgweCEjQCn25EJFWjt7gTDvZovoYfTBmjPTYEsUFRkvUbCLC",
  "key36": "2D4BbtZEqfj9m4DGZFZzJEkHWJCHa4oaW11odhA4LuLdvRXVDsbZCgARpTycTPkk5ynEW8iBPki8V9GqAxFMYJsX",
  "key37": "3f6mHpWA41FtudwqKkHsUYD8dWsRTbRSV9bzBrvQBxEAZ5y4uiBPefsJRH1SXzXzBcRjsHj6kCTt67HpQVUctnZ1",
  "key38": "5RNASWs9EnRPS1qSVimf5M9NVJtyjLe3nGTHgKAYzKtxGrfzVFhFmUahqmMY6fFnmonjnGMvcGtX1qYTZmV5R1kZ",
  "key39": "3ZapHUDvZe67s24sSg3ocyCQHZXWrHtePGRvrbwtDmaG5s7dWn4H51aDoMAQooiePX14pgnBZPL7wQejkyszgoXv",
  "key40": "5oyMEhuWuND7BUkg4g43N9r4m5qNVKNMHGXqgjU12ZfifwDmGpjhbmKsnH3RjZ8EQfwuBH9UcaZgcuCryK5WMBvc",
  "key41": "2rNwcB6yTE8uZDi5Yd9J5uodPZo1ntVThYhwFpF4jcFnJYGbSZ6Pf1eD6PWhkvPfQQodmfoJz3ieaTKi1NDPXmqH",
  "key42": "NqL2WSmMaoHYeaNYXqumt6gQp54uG8WmL39GfwTJDuMGmib18tgJoTs5r4fx3uf9E6jtgBuhfeLH84dgPG687Wp",
  "key43": "dJHSYhHEdEgnrVEv2VSo5zMUCuWYDFSkdpNhkkrKY9M9ZihNDxFKXkL5bCcfaoyzfzyQe239ctZcGsqwKqsikJ7"
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
