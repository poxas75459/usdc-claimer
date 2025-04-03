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
    "52a2mWqeyxaCGCiBrjrsvKjugEd9MmjnC7scs9qQaXXbC6Vh1E8ihfTnJxzB5M1aeNhAQeeRy3J35AAGJjfBffvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1RPQwSbbNycPwA52JfNVZqEarxa5YTytiWVfUCfPvarLRvgyAZoZt11mTEciEyX9DrKDNvHcWDABE4pKLDDbmn",
  "key1": "jjyrTMjuNg5PmHny8wbULjvRRg3xX6usKDhhrzjuKZKXAb3J9y67jJAnxCcbbkfpHTsiARgBj67A6pGg5cN8RPa",
  "key2": "63kaVpuGuwTxmtkq14c2BFfbvxr4Ma6hqVfqeHRMNjfyofU2L1Ze4JhDfzUZEbJdtd5VkqKFfbH9WNwscXtREiqA",
  "key3": "ifAtsfHtcBRZPwRDHxo8LChMxKYpL65ZXxYnZBYzMhLERZiFGDahHoTfarJeQbpm2UC47roSrPShcSKYR6ujjYr",
  "key4": "3P5gUwMtytxGSGeAVwK4TTNrgTiroJLgfwSFoqBLNd4Nn7wwGbLQCopYcSZCdZE7bjJkf5btCHTLYsWgX4Z1ugk7",
  "key5": "5dD1jvsFjiAq7kS4kqiiSad9gXLB2F1GgVvE4uPHMvw4E7D1BXTr216oTDCtGSsUs7p1UmRXpnKMzqaPPZKAg3PJ",
  "key6": "4Gd8JDkhiAFpoeqcWdajDJLG9TzHnQujA9VFzQGXNgm7gZkQHdePPcaPzJzZXEVF97ukoaRLuFxheuSV8VKStpdF",
  "key7": "25JYuom5JDFntT8U77AjoVZ8U3RaKWRGoTawYrJRugUKcrnwZaA7bi8CW5XM9BrYLQJcFjv7aEW3a2iFdZQ3fERg",
  "key8": "3aM8WArfFiSQiFXoLwbWZgtEPXK2f4Kk7E2x7uhLx6nPKmjDAkeeSSdhbJ9NZoipMvS9T198K2AfbNpJekCUqVca",
  "key9": "3WRaHrTrNv8EYbgbN3fKnTAcWgxGuXGe2PzV45krrkvU1jpJQATj6ujwcvD2PBy7pR1GadaQPV4hfTkDrFh2DK5d",
  "key10": "3JePDzoaSMBtrBGUT7tAyB5AkRZBQvUsDAcVoM3kdKWqbResfgshsUaSAiJbd3SDNqFoTwh8WcwD48Zg6WTepfmB",
  "key11": "4jbsWzzi2Pc7qd6usUmE4vix1rw3shJU1CCPvm4jvkwoK2xKKVfCHeCYKLS1eyVABFWroj6aBHosLhtyq1e7WUWr",
  "key12": "45p4bVknksqEioxaL8ekMcCQhF1qvNmUM4LPdUzUgJuc2DMXfKocnSThkZREXxwto8QyB54JnCwjrpmJw8epy9MV",
  "key13": "3mgnthybtZA9PCWNgtkUUd6JzydXBofHLthXH2DH3ktQ67aQancXPDaBVwhUTtBg52T6p9qJRFVNzHyaoPUp2EAb",
  "key14": "3iRqzFZuio1zKF7PPdRN6f2akjwp2KsikqPivYvjxXyiKb8EQGY7eQszqRChC4restCRVuJyAa48eAi1ZWLk84aR",
  "key15": "Q25RPYjn4qiryvnkYnVKbqqeENuHahoMUetwHeXXoPT9YoGWP5ir37FW5SWZqPjHTauSMfDaozKYGK5wScjWGYp",
  "key16": "5MJ3rvrdPMW2XCbs3syvzdrrTfvfoRkLGspkLTaWEVGdm1BjuSqyTSmS9FimjSRgdBHmFrqUnFmE9oGvGi6DMHYc",
  "key17": "3Gj9wD9cj8J2hVT4ETcsJGDmcztNAZWzUNPVLHDet7x98jAqq5SZdFcrdWpprvZxSWWBo71KzqaAnTxqTHKuw1MM",
  "key18": "3wvjRGZjX93QuVX783Hgb3fFNreNad29ySmvRQutonQMSBGa7vtwZdUttXPiyn2xzToWGxBMUL3u9SrtvGYgNWTr",
  "key19": "4uGmGXohtVjZKU1R6ySzgU6FQnXsZXo5ah3Xii3BvvFVtQ2wnRbbTMgmFjTWwC1VPxuUQ8VAdYh7b37wSLcePmUo",
  "key20": "Undw11shs9YECqbaHJ4YGaLNix6NFpgeQWyEYZXnYEmhavgQ1H1HN2752wVsHReu6PSjvpjMCUjxM31ftdzsBba",
  "key21": "4ynTtq2YidtGQ8AWmxRHTJF6iTcsFxk1C7MbHvsRhtA3X1pcFUPDgEEvhXFvCgPuKywfshZHjLAadxqyjFVMt1Ty",
  "key22": "61cz5RzQprEAgGLBC5uJcqVJDGmHfQs7v76k5m7qut9UnAeGBDR4DxV4FzbNmRp91S92Ww9xCXbu8xjXCbgBZXKZ",
  "key23": "5L5ac1miLjERnd8BBEBJti5Ba6vH9YWUJHk7aggrq6QUUdG67NEKT1pTPn2qC3nUCSNT1iHHvoF5XTeSzGJjn9Ld",
  "key24": "5bUVVgqPYqrQjezoLgbrmE4FEwxJS4VoZc75jsuSmQ54b9L8Z4yhds8t97C8rvmy4y2vLe1pc18NT6Fb5ZViu275",
  "key25": "5wAvgMpn6dqP1rayJHinpBTzPZdXug3wXWwLXW5qgTvx9bKie9TLWGFJS8LxM9hQNVWdaUwGyPmaesoZ2fUmq6vK",
  "key26": "63t9poZqxNGL67LP69yus39VtZbykm9MR6JFoMRCogJ1ZdzTPfia38Lr6L9M5qnzJorrPhPb15sBPYCr11TBYhR1",
  "key27": "5rJDVzzuL9K1phQb6Z1wvuapPYuiYf4pnrXSiSG64Y2SdinXhUm2rHiKK9Ak5q3duzPoZjSxfTWeBKno6UabrL8c",
  "key28": "JTfw6nRvsbt2b4v1akxg1A8ahw6hY1kEdmGzrudGqDtvnnui3ajfDWQeXPr1SALasiPpsNid5CCZ1jqAnmcCcBy",
  "key29": "2fZCQqdYp78eHMoDxyUkHRoxDnJxEFshCCASt9ydHDPuGsmYpFwzvuqKKgbRNrnJ3z7uGGz9D1zUTPupj8bYWqqm",
  "key30": "ECN8gumv9MtiXHGcZX2Gw891PDtGyboPRBdPt4KVevyvtjqik5Jv4HYbUAp4e53PeitaKHbUmJqcom98eCMNW1q",
  "key31": "2VL89xGE5QLAzm8D85pZ1bi1cAE3vC98wdNqTcd26peZ2S6YwEi2oDDRrrZWjc9H3KyR8YMsbYEfJjqiCAEvwmG7",
  "key32": "2drH3YX4PrbSrgY136JsDtq9wsiSZmBssFw1BJkY3AtWBCEmxBfosPzwPXQ9Ywey6bL4F8BNikM5qcqMEaJZVAqx",
  "key33": "4KYe74GSXcDYM3ksjKQRGEdWSGU7aN3ufKQejnaArR1t1HW7rYq3pw588DZpPLuPowhJMxH8PJdXH2MwvHibEtEm",
  "key34": "2fNwByXKvV8kAAQyQS21hQpA98YPEpLHTiVgRV7caXKxmA8SNyBPvuyVxtbpc99rU7UF92nQMxBzS9QRQ77haX8g",
  "key35": "3D1etdoRuYspC72ZiebCJBERjdb7GKzrbXoad6aVRUvBkfyVGu2GwDeXFUrXQZywPevEmrJSv17eBT2BU8AksTbj",
  "key36": "2gMvtRAHnWjpFTt3hWDPfKDDEbstENLhrTCrXq2NpuCEKN78sYzd7G2W1ULtrNbGXCsJbBRnwRCcNhkA8xfAYpjZ",
  "key37": "5wWGuKvArdtqhe1VKZ7uA81J1cV9UoM5z1ZDiUSFq1jpwhqijGtwYog4g5W44WwVjHpjypBHCCBzCV9yK79Pwh7G",
  "key38": "3vEo6iqg8MikwZeoQhr1pa4Fm7i7v1gtGypDC77nC382G7q739vS6mbcWgEhK1B2LbgjNVtjWERyLezDib1GG4hv",
  "key39": "4zzQ4XcGgU7RooW2tkGviEedaBJLvvLwF7ogRb9DHevD5k72TuPmMCW9Swe9pqzVYyWWGFjjX6g7kTxDQPD78Njk"
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
