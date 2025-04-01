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
    "5TvwdzJaZU9viNLUtKrZmvLHNdRReuodD2ddcBScXAB1vAoNQapJCEHdWw3C7kWJQ4By9mt4QVqqszQdRsyzTNwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kG9kLWmgjymbx33cTYQ8Cpj8yDEzPNw4b3s7DAkMMJax15scMn3kuqZEVVosJHjuLCXKZjmSxBXp25PbVUTaQYn",
  "key1": "26JhG1aHxv5CwLT4e2cGCCm7ULXEN3T3ezS3Yun3azTVPnnfTCS7k7vM25pPdfM5fqjbv2irRHLW38G6mcGBBVWe",
  "key2": "36dx4SoA7c6be3D1dbCQuC1UxH7Frvo9yEjd2DP9aS4eBPB4EkAp63mZYsYoJnQ38RYDAYw2kDuh5EYswQtNAFPF",
  "key3": "4nskckMRnQYmkLt2hkB1qBhH9qoEiZmytkU36JY5Wdcrq42sTekwiSYDHYCLyyma5KTeyUVnV78NhgmUMreQtzkc",
  "key4": "27mdfcdtWMHp2NcpfiNVTWUdYAyYAPcPfXRjdZbFm4ybUWRVBphiAegN3RiNVqkAACyVNovLdwWHEZNN5R6vjEbJ",
  "key5": "4A31o7nxq2diGVV9gnpjexzQJ2sZeEnGpkgU3QjuEnu8M6bcf3rhyFKSDoo9Ci8613PWUWJ3JqTTkxq7NX771vEu",
  "key6": "aPKYfHg9Z4DE3w7dcLSFcsEpe3KdNJgSofn9kXCnuZiNnkLDjpFDawdXWqUXeruC8KDneirpb34WVVduNwD2h7e",
  "key7": "4zephmnRqopDa6TGUptZhHZdeU6LPx9eUiTaADoxPYxxRaKCPExD2oSukbqUHy8g3bxZpovdS5vy91zehFFqqH1z",
  "key8": "3q1Kds8WH7TES7uaUPVdEwQxnmMNJVNuNT4c58rPYMB9g4tU9cBQ4QtkrRLSUxAW5LZRnACnkBmJnf87YkFe6t8S",
  "key9": "5dXtEq8Cq5dPWmtkUxR2NRWTaxQoWhwv9Wps84cXrF9JDpx815Wp8A1EQvrFwucXoegMaEbbBs4m7VKjkvUEwMYE",
  "key10": "3DKoyBUNR64zopSb8AT9Ei2CGtYscyaVda463Nm6TMqH5H4UnPdRGATARezC7z1zaYMPiMnPsgLzbX48bQEa32EE",
  "key11": "tCCH6mAMEFdES69bSrXrUB7vUpTYuBTDsrruUetkDtoAkvJ2DweBdrs1yVsa2x2D2uAQtnoYyqwSy9FzRH8Bt9j",
  "key12": "5Knuvy1HuqJmFxQtPKC71isykNumce8dXLqM7whwsq1pgFJBdLqVckGkpCSbBydQE3EiRUXHXC8M74BmBi3gxyiF",
  "key13": "23yUEnANtGL148XjLsypn5jEmKcSJRfQNobXYmLENjtTqEMY1A8B66u1fEWFfdn84QPtZQFT3w4rHrxhRFD6oZd5",
  "key14": "CauFVcZh1mTcnDMweYvDj5xwFA7HkMmytjcnmN4gVBsQmpSTW3pAd5eDgaS2MuVt7BwWXVUt6jAxQBqdkyvzhRU",
  "key15": "3mrEsfky8BUJ78MAPeE1oMJZxqFqUDLac8tvByj5UQjJFvweJcAYXFNvJ4tQDhkezj6eFhN7w6Ch5yYRFXsQDNQH",
  "key16": "3zHeqGkCzmshYkLQGKzdKMMzNyisw8f9kZ1DhBBjr7Sbct1Gd6ZQQs8YoVPdW7jTMPd4pQSDtLSGSAdcVLyvFGNn",
  "key17": "2DgrQJH3efwC3BdTsXabgfEwZT1mRWebPdppfZBVioZPj4KLRqXHg1tLD7tmFgquTdc6CMPTvKZVBxELnYQUfzhr",
  "key18": "1GbBjRGDRRJdRPrY7WV94DAYRWNHpEtMoHzwxWLLH4HYkGqxPFELVxEa244njhjjfVs9U6RuSYY27SSygT7nCyT",
  "key19": "4bfsFL6SDPSsBjZfdyJm9bHQLgs5nqEqUarm3ZA2KqoqShDWc8BQv6JUKNxYJJbuYpZ4Tuc9FABccvBDY2B17U7t",
  "key20": "Gi1Kw2N6zevyNVcZcX7qra14gH1eTvwWK6WnUXsiUWNjcwUSwGnfcY6azf7CQ6Ed1p7WG1ebao6yAKsf3E5CiTs",
  "key21": "S7Yu89k6SqtZkg3yMhHePfYkGWMA2vCHTrmoAuu35YaQtBH53uGBzbmEmbw9PRaLH6mRHseEdGoKPLzWBxB86Jq",
  "key22": "2JmDJfjbFU2qcGnQheVXfLPTQQW5fwBPXhuzHoULU9JYFsYzSE3yZqsfYYDpvBEjhbzLozvp7fabASwGVhFuzV3k",
  "key23": "4j3hDcvSi82sjohk4Fsdm7CMr8wZuR9mpoMe1NTRT5EYr2iMKsMGYqqB2nkKvNphnDEvkyAEVyTEN8LvXZqpZxqx",
  "key24": "68xaeyYHwHBNTPRrk2WPP9yg9JNT2yErMjtG2Fe3XXzmxVs6HNcEoFVXtDLvo3JQgoqPn18x4KZu5kx63Hv9qZo",
  "key25": "12MwpRpR1BKYUyeaAN7eDHadqBwyqiUeYcTsySJ6Q8v4fUDBSC6VCn9T2sByD4BA9RdAd8kKwDNrVEP99miKUNL",
  "key26": "3ezSES9yQtARw4BLWAE7btVLGcRckz4BTJUpDDxf8D7muCknejEfEm3hUtk8Fvp51JMD7EWG3Bqu37f4fqw8KdAL",
  "key27": "a61L5uhWrhPabJ9UvqjCAtDMH13NkjpZboXXdwCsTupbG1tvknpcpVhchX9iDk9rXBHtF62Eq4gH6YXyfqJM29k",
  "key28": "CuXy1ZkSSP2jfRGf89YBLBHhLCPfDn5pjELWregZ1yKyf5Z4b31BMfSXD2LyW8UdjRygpiwgN4KgBxTpt6mv2sZ",
  "key29": "26GPtaNMCPCNrWjQ8jWLuQSyYWGUBivbDcMHavukvt3GZmnhHE9PvyeCXGaUT1UJ7UNKdyCC2oimfTUBGjEbWiUg",
  "key30": "4agKo7AsJpn2UGEGyY2YayvrcZ8mVsmn4FaqP5KnRLFLhRpUdX7ZcVrrbPds7SwtyBhiBVpTp2VMiXQPRt2crKjY",
  "key31": "3m5sUjqWRVVdXYLx3b8Mf3E9HbyMYfsDbtXX3SWJKWVcbSALHkexywtCxV671VgN3T8eUtWPejWCGk2zNRVZys37",
  "key32": "38qMg924oCr76AoCETZd4z9N4wCSsXGEQWwiB1n9KruTuByQhbutxffZwA8etpYB4qrKTGEJ39guNKuozkuFKqoz",
  "key33": "4byKoBr7QeBsCsgTdbyQtBztZw7HC3eTqGnFBLLj6QH9A2mViUVpG1B2tPBFQUCGjf4CzgHWnrTua8HJTHTUtmGL",
  "key34": "3ct6EsNs46zwnaN99nxDb6TGaa3yYc3oJ5C7ZMymx3wDYvVYmgtqN1ThsHhHgfBcw6DV6vPW1geotq3ZfuyHeszh",
  "key35": "4ChcBAWV3steQYgG3ZHUPDbh4gFB3g3PxUxJfhATY19rmswBBPV2pM58iozprTTQ1m5ftXbc2KhyyjdU4B9y7je6",
  "key36": "3DjEm7hdu3AM3cpdTUo62Vxyg3eUmgYnuRu4cvEAHagG9UWhVcDVM4vb62tvyXidtzvDkPtga243uYDHwxzd8bL3",
  "key37": "MrYruncsnKrcHAhUAv4iijwZukVxC2kSMpuW8Y179ZW1g9kc87jXjvvxnZrX5ePXk6ebeCSTE26MMAfoZAykLys",
  "key38": "4scWzi3qRdPQUjVkRCU7sYAmxQqoeXAd3hg9sh2uHfhpNtytGByvzuRHMZagrxgni6NdnzLZiqY77QdPF58VY9vS",
  "key39": "2NQmo2rkPAj3ik4hYD3HWcWVqL89qKKddFQzn4U1rNz48GDBzxbZ6bjcvVPjEkhZhCuBrHPLSxcmab1UVsQ5xwFA",
  "key40": "BUnLnnHDWqSQD9jCDLSmpjK1B3iKn7Jm7Hy2UNvFqfAWHUtzTKYCEgfzQW2HLNVwnXPRP4vWRbg85rxxfdxrn1L",
  "key41": "5Gc8BrRgGncUd79XPNdvWe9251S6ds22DA5QyUZLyTY2J3Gi269gxmJ5GSwQjoayFLyCqU2nHJ4V2s8yUbUd64w3",
  "key42": "2Sd2PtdSeTAaaWhmEC1kdqbytmk4SPv2BGjRaNNVKYBcysJhhMqbUrt54TBnLxYnbFWGyygfsFVX9rvMRZX1j4Z4",
  "key43": "41TxTfBsc9xXkdDLDKaaNskGrxnbxAjuhtgujtZr87mgY2rMxPUUkPsUXqihgbCj9pBDTsQqsN5ZzE1ReCr6fpn5"
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
