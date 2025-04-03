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
    "3WzJBGCiAk9kNrBYsXBHTd2GwbpBQ7Dsofn2t5vSGK6zK7kQTMqLUNiAyHhc1k4X4BkHfBRQHusxSMJeqqvyPg8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cfx3BhbM6gkeqjmbEwmrht9H1oVxSkPD3X2ApUiZ9dBvMk64wga1QMjfVkEWVHvE7f3vkmdSCTFBwcJpAC7iHFf",
  "key1": "2FyhSsxSpDZQMbem6WCnEiFFU9mVzcnc2LyTLVt4xfFb198wFnD2qH7N5soAPD1GEZUwL437HPyMuT5vayZLNhBa",
  "key2": "3y1W7pjsKfhc5niCzNgPi5PQA7qtpGdoHPxQMRZMsFgbiqz3uFtnDw7xAVunrknPd3GDx2e3nT8WHMu6qsjbrRY1",
  "key3": "3iE47nexBPX6R8c8W5ruA9uj5uMehjYt5DpxYXQVAw7YXi97UnCWMoaNbyD9qnuCsNzFeDuGXzzzCskq5nj9H6td",
  "key4": "2fLHTLhLGoFXiFEBNEVJmpRFnWZs3f9cZ1F8UHPMnCLstk77jRyktsoaNqTUTGry4nhb9vrmXEZg5CnXdBWVzd34",
  "key5": "2CPv3uy4X9nn6cigtBk64G5hBrZtQEWczfzFW1H9XrryYYYZK5LcodedLLAGEhyvXW54hy54LW9PEph57j1zPsGc",
  "key6": "5wNYmo6fMXhuYRd8usyjrKDpkKX5Nvjzxk2pQyi7Ykv2Auso4ZZxjhcKTBZoWYnUJefVSvmJoBeHRGnUwf4kfPQ3",
  "key7": "28gZGzBTakD7JGrQzzLoJWarE3YpP7xt8egMFK7L9p8GBFpJCnzJmsKupAz8gTp74raysSMiXaxWKZhmzFq35jNR",
  "key8": "5Jz4YU9ZZdpnksVZ4gPzFtTbm19Pd5TQhxXTAFBZsvTmCpm8ggBuXUUR4CWGWHVDGqmFhcDhBoxh8D4y96pQAXAe",
  "key9": "e7zP2RM5C6axzcXN4BuUuJCBfLwgC4T7e9rmYkDnHRi3yG4DvUswLxRLe6Pnki57DKYky3HXhFaYiab7QD869W3",
  "key10": "2uYnKkEyt4ftg7qQmxWCStsuZ5Nt51MACkGjz6mwVc9Bf6dB66gFgSBSmHvhD3rqNzmTpsoeZd9saTDDCf7NkAuG",
  "key11": "22qUWVF2kRroXa3ynKvhHgKtRChjUEDidczh5iDkGDgCq6yJf4pY1yCPkiqrQ5MBXNV8CdBrRegtpt9HpcM2w5Pb",
  "key12": "5XGUfP47jmQ8gaboCqhfaX5ZFdLGnSxqfpWXB7RgS9GLRpyLpwnGDokrDJy3peD9fXgoc1zUFUtmfwsxUKn3Jigs",
  "key13": "3k6X1LGsBFokfZaMGZq9dmJamgc4hawTRDWVboSGSGiQkJKLkqrVMP1vpQM6iYU1MsuarB16zf6XuXiDs8FYo7KG",
  "key14": "3a2KcJWitrNZnRo9y8d1XyEaZz5Ti5xnXiwHvPH1Pen1sDmC8hngnX7P99xhVFVX5wTtYYnZzTJVf9x8L2pFfA1s",
  "key15": "3qN4SKeCcmEmy1nXGUCawAiWzLAZ8YtGjeooE4efLZZz1bRH23LY2Yk12QQth1zPc6W9x34daKnpXwenqecSRV7y",
  "key16": "kRf6JzvR1qctaXBHEG3HRaa9KJwwvcB4PYJ5ySLx23NB7ocBm3bgQAzoQ18cC3hPp53Yy39TvwaLchnabpa4qHF",
  "key17": "2tubmKbMpi2CJSjThGvszzXWm37C9J8wjRkMkh2w4S43ctV1CmnvUxDYTWNZkp2FMMXvJy5knVFucbuiTzP4PTSB",
  "key18": "5hqTdW9GFsBLm6tqLHRScD9TwZsEY3MiZ4z179TciBhxgDiVMuXcL7NsqAFAuzFnvtmkEL7cUy69fTuPe6R27Mww",
  "key19": "wgs9PmLKzmoSVA2X1Kmz77MAjycr58ihJcj4Hc5Brnbb7kHskDyKiT5hpX5Ci5qTa82CCciENq9GCd7kxqWPBXb",
  "key20": "4SRTu1n4fmZESL9YraQGrmn24YRsG9yN3pnifSgEwq4whQhsJkjph2jygZpmHpzGhecp84FRWAwGfkXd4kbkbj4t",
  "key21": "nV8GXXqEALj1w9VafTzRFm9dg9wc4NVPxTki5dRRkgEpvBa7fBW1x6WCBYvZeACaCPr9YBXzUZYRh31LmeUMkb6",
  "key22": "2dqkyoP4o1wpbYdEpH9QdRVqUjfxCnqrvrjLtUN9tF15uK4cCXso3Un7yEmT3JWVKzaTf6vNTkmEgx7YiRERZeVA",
  "key23": "2tGvq2rb1HpKrHar8qvoQ6j9QPpK5y4ki1MhJpexAFirYikBKwyMopRi4Johz9ymXXwfxcaV1gx6nRc4hGjP9yAZ",
  "key24": "24BfS3S7nJEiFxxjVEoqu7zH7cDfBYQagw1Ce7FBDzE7pUQEFkZQw4CFc2qKc93a9oD8J2wvMbujCTN6TgZEkqzF",
  "key25": "49hYVET4E3YWghHBkBzggFP6r6qxppeWw4DvPtsAVbHNozrcFM1SxVkavykF2SSm6Q4ygoZRsUEFYtiBe4Z7MZWA",
  "key26": "2Zam1KFMTSrhu6ZYw7ynhVeepx7tXsCdpYuL3kFHyatPPvC8YqhijXzQJPW4ShmSXpTJG9FipKPNSFkKyDSadHRf",
  "key27": "5WBfUfYzsQagsn7Prsm8Km6GLtDvMu8UzVKGdHRgDPUceaJFEj6twjpcDZcnWamXUvRC6D3L39uMrRsrX4kznhex",
  "key28": "F2vgo9s5f3cdcjEypyGScPvi5grtSv6oEo81XzkgPx8pSPRejSDCaKrqVHHU2E9pAwsfKvDnVtwk5pQkcxFiHJv",
  "key29": "2YjHhNMmxG4C9hStAkLuP2kx1WzGRgpPPLEJb5vu8Bco9vQL5buv3RSDcZPxwWHYKaUZkMiYHheVF33f2JR9ZzPQ",
  "key30": "5xeNfCMoWhPqto8iAPXgydf84iQWWDJzRjZeWBYbmrcu4Sgr6o9uQhxwbc3nEG7LF4sCGaw4sSBYaN7egg9WGCvV",
  "key31": "5ep3FdJFqnMsLcbXLAqwDGTYg2ksZ7im5bNECpcH8KfrWEdzqKnF6GwsR6zQcDvtKKk47oBCoeA8fhrjmtrRV24D",
  "key32": "3e49UL8axGH9HzQ8mp4f1SU7rygmppnsQuRGGrkTrMivCio8tmFrqPna8hMRXthmc9DJVrfJTZwb8vcyC9jbYsxi",
  "key33": "21Z514BY5VVDjJABa7dSrGFpTNbD3597iwxcmijdn1BiEekbPmM9Cg9mGHzUY3cdEBKmkphJgf5Hat2TX9PXyap1",
  "key34": "2ZRCdKPHnfwBhvSSstYnbEcfAaeKpmQf9zB132b9UJU3wt7CfRmwwbaaP2VgD8HxbHTzNH2ZWT5oquZpE26yQ4uh",
  "key35": "b7e9RZsrLTESdCKRLeLcAfMGmjZntYYFbTZX5p1b4VUNDisUXbSchjEpbGxrKQVDHFLZAbLq56Wo5QT1HK4ggUn",
  "key36": "5bVobQVe4uLpTGVH4kY28nCP4dwaNAcjmVwN1kF9ugF5urgWEiCAbWyX2pEvL3GULXVhvEde1ZiGt9tEC24XLAB8",
  "key37": "oi9exS5UaRKW4XatFZ4HjPtGMhhULSR8vnCD2zuqRJYYSe97MUvjYD8BjoR9KV14PnFfsXxGUrxdD9rd25ynGBC",
  "key38": "55nbxCrVHom9zWmGnVfWNtKKKmaRwEzkn9fUhVNEnyDmQwVcaZAfvKw1orfZChpvTt6dYub34vE23qJdkrg95veN",
  "key39": "3R1Fn19S183kBbwFYMRJD9oJa6MKuSXQs6JwGneqchvQGDSKMXy9uWQriPdzCXB11wkiYExgaP9u1hHFq1CbzxS5",
  "key40": "LtKukwfQ2upLfVes3jnRRWKtiDD427yAo8Qd4YA7XjJ14B9tVgnKbVVXrygqYEPQm2wHzLz49f9rbYxvrF4rELf",
  "key41": "3ESnrrZwfvtJvVwP5j5DZJE79ac3grWZXmHGSHuXkx8XkWf2GMfa7CrsBS9aR3GnDzncdDah52j2w7wvo7k4cTwe",
  "key42": "z7iqxMre4qZDQpCHpbMcMaMMDeiQTdKcX6EGSfvBD51VB546fVU4Ac3XpoiUKV1mUR5q1CPytJ6eDFvV8D8GLZx",
  "key43": "4pFExSjwXdXCPo199RZsCjqVb6AB2zuGyWAKuQeHju4fYco35vS8FQXSayoqPvMURJrH21bSKkZoZeN7CoXdj2L1",
  "key44": "2FYk222BoU768w7NkBgtJYY3Nfn3uptF9Ppm9D5JM8jZkEDADEkkMPkzC2uuyoCkZrtJxEDhVdm62vXnkdy6hLuc",
  "key45": "3HdFH5AQEjrtMxYNVbiRkdKCTKQ6VoRAyzURut25UHqpqxK2UMUkmxHVgp22Z4Xpcig25wKgXc9187Shm8wps3MQ",
  "key46": "328Pyk54B9XTQdiqgvhoX4RpFFsbjVaaJtgqWhn7YWe1UierDNHy3MPMg6E2P77TNYrMLpQDDHm9xLuvTNeMMqgi",
  "key47": "3afn9AFhZyP71LgCfrQbFPFCHiunJn6mGQwfzvYMSNoh7RtfEK9G923ZnBZKcyk5akHFhpeWJoPbPNH8cKTtGYtF"
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
