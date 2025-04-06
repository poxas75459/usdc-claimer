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
    "2LvmnjUM46MxqgUUzsqwEQKNHgfVqBeBSPAUG4edfhr3Ws2EwS1auLDyJE9oJAxVBZBzfDVeBSUCaEM4cGEkyTnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYU7jWoUFuTNQxETXoqyzQieQcg25HyQkqKwC3Yo7wQwUnopthbZMXwRC45DBved2drzhvC7V3iTt95dZUzCbCT",
  "key1": "5yHT1mjtFD6bL89pWcAkDXRVZXuQJYWAxg3H4Zo5BR7erbLkRX53QkkD684mUx67oeTqoXQfWiirP6R8CHcEe8iy",
  "key2": "3zYsE3nRyJMt5qPqj86N1E6rXqZPTVADopQVvFRMxwrVsyoZQRTCPcWUfkfzPqpXQ82tR6TginJcsQwFu4cgyGFq",
  "key3": "2XeA1h7cZiSs3QyiiPGvhRKGgKMEyFMnHHEaMAjt5NNT2vbYeYzmR1pBqP13Bps1SrcHZdU5JrceXGQXwTfPgC29",
  "key4": "4oN1prQkD7Giupr149jFrBrfYK4Bd2mjwGA234MD88BrN75uMkNrnRrrJizavDsWNhUksAbzzRZpCMHZDZbMrKsv",
  "key5": "34KLR37mhtrh6Zq3ZSFCEjwqq22d5TbVQAuYv1dx7qrP6b68JUmNp4LMmGtNcVBfc2sDp1cath2pu9saZzmtK35U",
  "key6": "5B3FpnbAXrCoEKbrvcNhcfbJ8Hp2o1e5hv9aprBpFBRUbrWxm7Ec4pMe7qgrYvNxDZPXderYfrHxSKwC8NG7eziT",
  "key7": "5j5NpnXzH5zHkCAP6ziP93Xv73ZCzkVtcNq2sYwipsJCTPbH9mnB1Z4XGDyJuNLy6eAtJzkvN1ibc8A3xj9ipQ3C",
  "key8": "5QTzEA78CAoh8FRXppeafc83dsnS8wKzXwoQvyBBraq6pTVQ2UD4JZtcBykgc8qRXBrcyjzFHKAjsVn65oH4gDi5",
  "key9": "52tDjd9N5NkM8K9XtA5k674KQBQrRxd2oXPQRj5fYG9YZD5EpcUgko85BKLLmVKqqSvC8JuBu7utuidaZE8WSupb",
  "key10": "yej7fs5fiZ73dfjLaPgEyTVTirDm2e31zLuKqTALnT5BqSMhNcvwvPLvjuokRW9Uvm42Wuae5KqgZm6VzwmS3xt",
  "key11": "4wF1dDUg248oKbiKWvEAQXsMqawFLi4JEqxtjcdqkiaDerSLsAteYt9w7HXL5ZDWDda7wt6FvvwMuuwLJAReMBP",
  "key12": "2S5KVD9JJN64TZJz7gphENGnSJiWH2HxqVBijN3A4zMbVrm18KD3fozpxK12KGmv5p5y5ikhhvAPDVL1cyR8pCgm",
  "key13": "5drGTmQwu3M4sLrskWphjPCSyQLe7VFWgeWe32dv1zwbhiKorw8KYp3JpsBXPNSqywu8HwMxCbCDftA77iVdEbA3",
  "key14": "5M7RNqoMVbvCmcUrJNtUQ8QyRw2aBdmjwfeefWn98pEUGrM96rF9uwKRXF1NyoWmidbCcHCdZb6tF49zb7XPw5Pb",
  "key15": "5hBGGFvZn87DbduymyizsSMPyZGdHbjZYsM1Y7KM8cKRyCChnzMpnq4ZiwpfE5yA2HVGDoQDKj9VjfjaKTzqvNCY",
  "key16": "3MrvP5PgcGoUfAg4Qp2gKdtMb2UiBHqgsprbqvRCsq2yjfZ7yrcCnVApquHjpqjSitBaMF6e3rYf4Cay3g35wtgp",
  "key17": "cqCQykPs6x2vc9rJp2XTcADHneDicBuiQtNXQTvoKF7FgZPXtwRrJpoToC1vL2iSW5TwkBk5C4urFNWxKtyji49",
  "key18": "3v25at7yDWqb99D3bB89NGhLMkixiDYkKbK3vxYZ5mzbLg1Y2Upm4a4uVnVaESGFpHYsr89xWhNA9vH7fiJYFfoN",
  "key19": "NRNLEpHkMvQ1vjsFfcKojEM1eoGwJsMtn1HCiFpKsUKbh24u8k7qiYGEhrr28HgvW9qfu75GpxzmgskaA1nXGQg",
  "key20": "3qiBWeuhhzPVuVQGsVzREWdNEpVJHLxxdAUVyrGb4qikXPVkGLiZqfa5BoBgVZ9mPsFeqvgv4d6FRLsdYnYwZU5H",
  "key21": "4L1uXWG7pGDVCFzTxSL33HiUGcJBn7ZopSrrYmhrjdH2DFEWF5VNE7DqFYtC8i6JobktwLxCwmc8F2xumDccZ6xR",
  "key22": "28hCriqrx1pHQ44C2Bz9XiAnwk7maPfgcdMLZeHcbTYVpT2jqmzAELkFzxUDUpwCRZSdMHnaNPR4b7KXG45K56f2",
  "key23": "3FN4Y222KWJDThmCPo8Zu2yfhj8gYuv4naoHcXcW1Cs7wrCBmsXxq2GMdpqwKFV381V2Tyz1Pf3DuKjbTkNFB3nf",
  "key24": "5QAEgPBRULS8yVhQeYPj65bGvK44LFcBo2GHUdpodriYwK1VvacubbQpMs9tXQrFGaEvVdZ4n7BB2fufcSjnXHgR",
  "key25": "3jvE8wQazR2gX8dUyTbHuL4DuS7YuqtMZQ4Lf7bdDoEbj84NvNVMseobRdsrocyHNvG1L8f4bDLC1pwbupdUrT2a",
  "key26": "46csZHqChnq3hKKySkfEr73yfUeV8EpGdGEAVAiaN7CCgAq9uswh7iY6xwyBdeEwjHiSTf4y2nTEaEyydUWv5kWS",
  "key27": "2wEneSLvyESEbiakEJG1qn5SLkBXi2HZ6JbsuSHkkiGq9DFg89f31oSYcuX74frVaMrSeGD3ud1im7RQakrp3Fi6",
  "key28": "5XmmAfbcZFywgSAvEAcktvgq6xp2oPmw5WKe56TYGKztWxKJFgksbBNaPb5N152o1wBAk6qPB6emnPYtESMf5Pgn",
  "key29": "5zrYQnw6XrUmJuziqRKT9WestDnM8JNbcNKcEgsXEGyLb7DwQjStZe6MnwkcKnCvjttrwAfDTen4CkrfbzFG1RcX",
  "key30": "n5ssVxy8EezPmyz2Dv6iBHWaoU2xcJSfPvHWGpgSCvvY6ASrFUL1F8Rceb69dLTm13trDEBLBGHM9VpwREYXmky",
  "key31": "4LdzJppgw2xouj2zw23oqkHfmcNvv6AhyYEhHCnzJdQsgUMgu5iHM7LevNmQNP7F7ooB6KxQfZtpoW6BCYtCRWHa",
  "key32": "5xo2osoSMq3xWnfbw6A5wT2Bgnwfwyt3Abp7PKEqNYzQUu8P2cgRjfAex4Anyy8XYBmk7DFVP6GDxgAbvUAFJR1A",
  "key33": "2CbUfHaLsPUBYy6pEkr8oELZCJUH5DBjmhtZk7i3WNxSvSi9kRY8DnpAmrKzdjSfgt1xZXXeh26nSAHECBa1WRkV",
  "key34": "2uwbKgcBREQQuA67Kps4X5jrBQpD4HNjSjULws5GGdmfqi1y78mEoaMcKRu4gh3PUfrbw5GKD1jJAJbjKRtsoY6o",
  "key35": "2CojqCf5MPMrcFEmNM6nD2bGYKPgmEpXZohkCJojTr1AwoLTydW2yVcttxgegx6y1NBciiwSnctqz1wzd1gxK4fU",
  "key36": "5wuL2kwQD8Nt75LMAVP7Un8hn6vN7agSRRoDnDHhQu3FxWHWHDvYHtdEwWwpjuHp42ar17UV7M3X3jXxSorxJ2xJ",
  "key37": "33zjjsDCzTzDM7roNnPbmo6LKkkLNecg3XmB1rksWVSoAka24qX3qTB4MvC4FVdi3Kfekz2EoAwJWnNgmedVDnwv",
  "key38": "3uQT7eD3mqSetiYrQoXhEdjeGmWZjscEvc2Rc9m7hRUSuF89KiLFqVXowJQQEu2uZqfrARUFrHMLyPLkvcqpeptg",
  "key39": "5peigSUiMhmRcAxk1CVtKND1cPtf7WcAaWEe1Fr7ogrjJ2YnSPGL33cHDBdtx48e7aTyzFFNmgYLSWzQu5351p78",
  "key40": "qqoWjGCNBiVLw4xkRaTH179YL4d6P6pKq9AiUG4dWLBJAQkVKuTPT3gxnQprBwoPjq1Z1fBNJqsLHdsmfyEVHbT",
  "key41": "3WZTvSzPoVGuM6whvXrjnomge2RkzAp5wC3t4tsyRB52anrURaFy1SNufk7BaxmchHikva4v7qzTrt2qvPt8bAWd"
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
