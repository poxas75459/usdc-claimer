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
    "3Ys5njcHeiFM4JnAReMHx7jC4oaRkNppFcpen5P3gkV5RJBLEfLC95bHKb3DDLiwRpFHKihBZ91BF6FuLjMzAvY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvkCnVMFWrWkZcnqPU5mPeKZSG4bMSoZcLyqZ4n4i5GBWKuSfyiekkvP38NgU5s6xhdd8XDnNNZbrhkkFJ12JRW",
  "key1": "3KFXLWs1DwvNhHm1jiXM1wTCSGaXoWM19Sv3aTLk5UcKrRBbUmkgPsKnomc4VHQDc33yJwxGY3ugKzdQMaVgEEwa",
  "key2": "2X27o2KVheE6St9mYj6wguhpoAjkg9cYdJHvqvVzs7hB9hF3pxiDsfdEJcW2JyTZVFhxbgnERsYSTG4n2ny9Cdym",
  "key3": "5jExi1rj9eNRHkucGAh17Jq7cU2LM2bAGUUGdgWuz4g5YmYdGy3Ton5JnT2hTp3xaztJ8DQcbGyCbQSaqvhf9tuy",
  "key4": "2UaTaYccmiSFq2Ei6Ke6f3CaHJA6hY8VGAkWPpUQRgwX3HeRafopWsAtCtduXAf4yiYWx86FqKQdhoNqaEpsqE5q",
  "key5": "vpiGL7aAHo3MNVcUgUsX3nNr1beePJ22LEzUdH1mqCK8tpRvcNkUXnpmrzpGWKr9RE8nzPuEMhstnDv1kFDSvxb",
  "key6": "bzPu4oZxbfRreYqTYnvmujuwaKq1hwkkfZiySiP2wzAS7pcf5XX7S9rzNqJAKLPon8EvKawjYGx1TckUpQ5TKmu",
  "key7": "5wh2HeXWSSQ78zDPAFvYBW4fd8VhJMCtPrgme1LftjsJzr2iE9eugrdrnx4vwNjHZaomLGJzevjs3CaJ1Fu2QFpX",
  "key8": "e9LL4CpxmpFfbpVTdxLoBDPzfn79TFJFMkuNQwYgFnfCMCwBNmmE3TVzETAsmZaqcfcA237aBhreQws6zaTCJE6",
  "key9": "65FhE27Uc4YsF5Awaf2j8fuh7hP4FZckXtHQLdduxrroydDuJDEFHtn88egdKLvxpPvuZ7dMLcYECK2gHgBCQBW5",
  "key10": "5Lv1oog2Q4fZNQ24qRFAmBcNQxd9vxpkgqYJ7GbjyNjWvncJbHpvw7CMPrRV2fyRpFPySMyVx9btFfHxvj4o3CU",
  "key11": "2WszjgdWSiGFFKg4Uf44hqzmNFCfiYCtUWxNTynGBcsCmwQPDkeb7Baz5YJVKFw26ZRN6kLTbKWLc7TMC3qzipC7",
  "key12": "5DrUNSQaG84F4DStekZq6xfWJ6g7YqJoqQ8DBZT5ZtqV4CfxeyRR67JUxvz3DcZoCs2oxh81yAHc4fUrNXVWndNH",
  "key13": "2Wm4CQSscQuZCp6Bc19qUnL5KiY3wfJZLjxV6z5gS4a2mgpFMXz4dYodL3MjHUgGN64GQcuCk3VtxjzqZMMArwFY",
  "key14": "4fazteVBsJ5ZXH2Phnc7vpikV8G5obAz9nSSrN666sjYSFz5FF9iPJq52DA6vK1Xy4jUpTMHuRHMi3ouJF3EZ3sd",
  "key15": "X51HQwDAxwUWLQacRpc425TWzyysWpyPtPekn7UELFigBByF9BtbzBLdDfG6wRT8cnR7eVnxcNfJaa8aDb4HXUC",
  "key16": "2NBtswjx9PKQfj5HfLCuVyyyKVSLvJjTHS6gWZDGu2mB7CMAdVrkEJ7T2xHQXQyTBZZSqv6FpQ6xzRya6jtg98jj",
  "key17": "2Zu4zAHKBBNNQHmTt5UrSkYW786Ehd1To56FRm1hv2tRBxQF6GHrCEmvBpRJ96z6aFaFjdwNAvmWEXYGqdhczXvy",
  "key18": "4tDCCgdB5Ai1mh9YfgvWcggkgGnbVzsvq4ESfpbeus7qHo3bJz42fFaJzLuEas1dXmH8CcTzAs2d3DqG3ssbTPHz",
  "key19": "3LTdHrQbZutGZRHqMSEo21As9u4Wm8bVVtQV4cwdKJsRCD9Vut5qo17aXWaZ5T9ueGSFU6P1rLRdUgQk1NqyajVz",
  "key20": "3mdLK7ddYByKP7MYZAgZniHfe1XT9ZpE572R2aBsSHPJVSzs3pndC7aj5nf84XiV3StiKVpqiK4PoiA6r1fLojWN",
  "key21": "5MNF53y7PUDpqJSMfJPwYAcfVjjXxktY8oqxQ2YpYcwNKa9SJv794nm4TEfh7tifCgTUUiZ5F9wNwUgZ9hoVWeJE",
  "key22": "4NuyjjQT3BjBcH4vuQXvDoMFtnrrH8jcWm9oBdMGDLuS6Wvi4gG53xTa3wnLx21XFsYctz89cjwDVmKMGBBbMmYy",
  "key23": "3jhLAuxi6UZyvM5EbsmY71MvDAj7Wotjug3jWHi39Gau9mgvAw7BQPj8nS8BSFWK5ZRnwrvTPpB6wa9punbcFRq5",
  "key24": "5Kiyn2ToBHSg9358NRfJhikTARJWMkQSrfhG9LgPDGJZCe5fJ3KraiXcXKeyndTRgxtZpmeBFQbdvS1Q6WMPRSAf",
  "key25": "2sfxp1ubq9MfJThk12auSf2XcJZdBp8d2pKafcvSDEUQnqy1W5VeaaNy1nbyPgCWjLkibYrcsfoemLzbaXu2fZ2C",
  "key26": "fjirEEnjCUGao3Tit8ebXYqJGa1w85TzDWVxaHrCnMtYvkoMyx9PXJLDHViNU4kifU9cwFmn26JpKVPatU4g3DQ",
  "key27": "5GGPc6xTgQA9ChxsDEdFtX2bfHZHWXKDqGG9BtsbEHhb8icvY3Q6diUQ7mcr4Q2Y1f8tx6rLnM56c4oYaSadMzQu",
  "key28": "5NJdXS9HEU5nq9pbiXHitAF2uDLpjk4JeNVgU9VixkicUwGr8ZjnsdJ5oZK9dUbRABxPWb5a2rzrkqQubQah4www",
  "key29": "KFrBKKjMXvULJLeim6YiRDTCAUZskzZwwNcq6eYUiD41D1wv7KHUetvByVQTWKxxQSYHsdT8RMd8MefeArB4dQw",
  "key30": "3XAe33DAS2MR7s7TJ9r46EQXDRYqREXXHNyhYtHSc3ioggGfnzXoWcLPjuMxC3goBbXXePoBmGdnnR682gPyvdKL",
  "key31": "5qJ9YoNb7zWLeZqXaYNVd2H7R4MXG7LXBDwQFNQW6MsR5WM6gRgw9S4Fc7fxQp9RTxSwXhwtpyhvdzeJotA4EMbd",
  "key32": "47SsUQpBE6SxYmhWm5D3kuL89KgP2gf4FtiVV1RJHMtT7GJsvFHbDFY4j1msP7gRxWQmctmRzaspMTT4rqFip2Wk",
  "key33": "26SkRrzMnVPBvL75otoHXj3B8JUHCM6EKNKCySbny7j4uMUqwhn4VAACTcp8Ks9nq7tmuSTfmov4PghySuvDyJ48",
  "key34": "61Hm7JtUXoNjtZme1bpmjz6E9q2yzS5FdrJvsh48a3ytrcgbnhAEpaB1Fsd12WBcfQCtTHLCPKouxDefHpceqHya",
  "key35": "5tz4RTRmYyqv4TmS4swRpgCbDWLRkfP19nT389C69orn5tgdEawMpnj6TrmtFkHpvQ5t7RvuxfT7iX9F6FMWGkEM",
  "key36": "5rFMC9gyzFc5NcX2JhujzvDm7zR2RnC9LLwNEvi35N45FSGEKhhBMosqJYTRva4ZGXXiDUXpGzEKQ6Z72fxKfSNy",
  "key37": "5wykf3QDbPPTtxHKaaKUQtawm7EXmkGahdW9fMggR3PkMxQcQx1diMHTmdEYzGXHqG9hmW4pS6aBdCk3bZ9A5RhA"
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
