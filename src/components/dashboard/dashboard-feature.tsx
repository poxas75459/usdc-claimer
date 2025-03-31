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
    "5XSUDcpUc2uUQypMSmz2pyig3zzsiHqfYStxraWmBPMv71DgtJo9iRgViSq6Kw4UJmCLofW7Un6Dq7fvVcNMDXim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nmpiLH2ZeFncW5oidjVbVptHcivtaE6YExfTm914ZxmnRTBBNCxDuAuQkBKPXrVFQNMxpcfYgw1CHRBmincDVqe",
  "key1": "2YFqA9KYVZZ9VcMnFLRAwCfBrhcuWTWhPzLyf5YD23uBhdkLZtefsSp8Jw6JQMYfM6P7sTobtKFKpLJ6eKTzVXC7",
  "key2": "wovr4eNv32qohPVvnNqmxoxQP7BhTNRRNVfxhY857A9RY1xNAPCq2E6oBBnUWtV1pomarNLzAE8URckQ5BEkohW",
  "key3": "cg5P9zMa4SZZFktH1Qki2LF9GefrcorhrsmucYsGNB5koQiuhR61jcf7SQ8QyiNEPX84TRp6J7RvNZXx2BCsuu7",
  "key4": "S7GE7wYbFaf4J2eRf6vmXbKyfJr5F23tRsjZRdNNW6ayhUQKKY2fJ1MxZLNCq1wEcFCTH2SA2F4DsW2hQiBUZT6",
  "key5": "GHpeTeRLkDCGq2KHojaDkhZtfszGi2UhkGxDJtkYLvnLgq6khvMoLT1TnuezdgHxYgLdrowjWkbJhT4YyYvsabe",
  "key6": "2TcpWz52z74cE69W1Pxee1dBGVF87ZFid3R7LtwMSaW5EfRSBqba3bjsLf88LDyHUVyvUHpu93rqehvowfi8fnuz",
  "key7": "2H76jYpa8ZefVQWw1VUiLxAvzxKdXynbxNvYnmCdZhhjqqkoLwK75rmdmU1p6VTm9GbLUxFGbgHg7Lf1ZjnTXK8D",
  "key8": "345NGQ8vNPjGQ1qETrtXSwz3ZstwLwraPb3Fa1T6n9JsNMAuSXvYE4DFm86V7rgyQXEKyv51hR6PRaLwghub5eGS",
  "key9": "5yg2yweYwxwqwSavwKnd5BPic1B8S4H42MoseKW7XFR5g7Cs9P95Z3mYpAY1UEpLDZ25x4hnqbDt3b1oGqCKc6Mw",
  "key10": "zEFPKQCRx9aRvkcde6sDzgL7iL3PgoLomC7YauF9sC9HSBA33seKFyDBgtSbKETGgVEPf9Thbn34LGvnyCQRufS",
  "key11": "wjUhPFicfjgaxkLiH6GEKZJPNVdP9BEEgqMEF13McwXyhYWGPHKBNwxf1yhXEN38G77PRB4D4VkX44vD3H1onTC",
  "key12": "3LYkQoCQ51B7f8aE5pdPAaP3sygMKsvNa8NBCZM4Ti59ZZqiDxS1p6VAMgmiQ9rhxTuxTf6qypMcXmDv1VLp722W",
  "key13": "3aYVSVqZUhjnz6UkV5btuRSq3nsDAXXzmpGUXq9KBFZokn29BraF3koCThQxun4gQrYsgwSWKSpHmhBYQLaxYTWs",
  "key14": "2MpCjpUafw6CH1afyVQK3a8hGbT5gwjMmdEtQCjByMzYkGqgfrzCv2wchtLpYqovs3jRBEKw7ZFHRj1GiCDRCfgi",
  "key15": "2FjhrJ8my8d6yYR1Z3ksVD5KemwYbCdQWfxsRSoNrHJ91b4LT8B7Tv2BeakrzHnCCbcPnB5xLm9b9qp2FMCH5cwY",
  "key16": "5PxvZgeq81jzGqJWE8DYQHMPy6sqZh3tXnTPqD7WXdEUkuU4fhgroGkF9yPLvcXUyQi8ppLoVa3KWthGvRFMwxtF",
  "key17": "3hhCpTTW3xqsuNk9rP8pzjPZnxmdiWEZ8nmWw9hUbQD2tL5aShNe3xYjaNdwadjNCY6Wugj8v34qCtmjjzXpPU5M",
  "key18": "58eCdmEjXvNAoVeSpsRt5aSSyDFcp8jkvHqEszvmDT49kSxyHxrKrxvwVVEZW617HRFjG2oFsY1ubY87XgWaY3rH",
  "key19": "v2SmbpAfnqGTwJjD12MTyef9UCrYuSLtGbJmwHM3ZW2kxnFpDwC8ikE4xEpX6BzMbthMcs78ipNcTJREPcv9Shh",
  "key20": "uhUwrvCa5nx2fH9DqLSmwMC1WoVfGJN7uBw9UcPuVQFEe71LRyUxm3cAsZNCgZejnLQq46vH2FkuKbhufGZPeqE",
  "key21": "4Bv7DKxd57DEhNQbVVxtvDwtYsKJNCr12ydxUi8NaqxDgH1knpWcfW5NEfzBuZcF2dMvNvVm9HyuTYiN1cLdqqb9",
  "key22": "3zqoKmPM58LY9t4s5GwLbn7QRPV4Snyev3GLNk6729txwezycRs7AT61j5MbwTeECV2CRpptADdhc2R4ndxQKvPs",
  "key23": "2nWm5FbU4pgthGMmHoXvNcaiLD54YNPq1znYnihWf7wWXd26iTaL8vkkUfxDw6uS3NQDZkoKmqJjEe6p2fidywGn",
  "key24": "49MHyVq9wPBoQQ2jDGb4ASVh9cqJJhHA87ncwnbKwLUn4iDX7BgdSUtTZ3spHK4NSGzZ8fn2NBQ4eDNCQ7Et6k3v",
  "key25": "455TQKFo8Zd3LJourptAytKM1t6XkJJpq59imDMXQ5YyYv7W5k4yx1iS93cn2qXVSS3REQt1GvohAKjGxKm4LVJA",
  "key26": "2vwRMyVzdtPnZQUvMDCs8pD17xnmsV6XdJbkGxY8VmfvJCcW4SFeD9GtvMX3f9ZvLJyLg78bpwtdndGMSNHgKBKa",
  "key27": "3ovhTT7YWZTFoSXn1NRYGcoUH7XFpzL8bRntNtn83kQaMPJPEzEf1DtTZ6XSHBFJ4a26LESSZ8ypkp8L2heK7C8f",
  "key28": "3HGa7h1grRtYVLtPrrBD7JJHwXqVpJbgVtNG5YooLqRDUMH9MvYzneDbjz3iKmM8MUrcAGBVpykhHj839azWthg8",
  "key29": "3mSRK9wa2kxnTfSoErDqS3k2CAtoMsKvLHprch3Nk47rgR6tCFwrXy2fcpqJDzBZvGNNU57YMb1SEyUm5KD7C9F6",
  "key30": "5a78ykfDhggUM5GUECauWx5KckNQWYVy46PBKn8q3BsHyMcLydG51A92jLYU7ZZBaFdCf4pM1SZu9JgrySabh6tj",
  "key31": "3e84deGy1broPqhTioHeieWk9JbyzEcSTnKrUcfAK3ZHTXcQSNdRKPXDiHEmi5r7FVHq2TCpjp6iZae4Muf9j45a",
  "key32": "4hRyrrB4Q13TJJYdAeH6PBZQiFBrhhzqFARykq9ofK5CxEMqWGSR2qts1cWgHtFyg7XTBTkjdxkMk2z4WVRbRp5",
  "key33": "6ewk2JWAGiF8aMf84qa7chh9dBRJNY9knipNpGR5YEsucNJzZRvzyoVEmm6gQiAFgqV6VANQfXJVLzZS8kyLX92",
  "key34": "5aCQtd5HU8Uq8aP1WyuhxGoNpQf3bK5w8aopCD7zfRcTckp6v3ZSo6eg1WLstS8nu4wD2a3QbCXQjQHzXPSecBiX",
  "key35": "5U5bo8XvA5jF8qfjTQUuBiogQnTJGAWWebGPnWcTJh3gSvKG3T2wGcF44b5p3yvoLC8kov8dM7Dc9bN3oPCGxj7P",
  "key36": "3Qj1Z5qLfghAMcW7S479JQ4NVzEsSjcFgMKboTmP4WV7iTLicLfagaD96xMoVNKe2ihas4kfmFkcwiu3XZ9XM9qV",
  "key37": "4hAjNnkHFaSXcyr5hgd5RUyMwPohhDhuZvfmjpAYqFnYX3rtjQTdeBgjwLhmiUH7ewi8ZJMFQ7nzhE6wZiS7h4SP",
  "key38": "2GQ8S24myrdLiNyEJgSX2bgb7tPDoMkaRW7daCLmQJtn4sqHRcCsgzU6UpqC8rDePzHZzXKKPdEuw2A4FtKD89e1",
  "key39": "34yZ7xHRTogUz9mnQJxU5qJCwqS7vBsVio8GS8GiRBTHy5NmC3Gisc5osVSy2tdxbqygTEaHSGhqCNxTphiAoeAv",
  "key40": "2KaS4TuvinrdCtNLScP4TF8jkYVkAmj5QgnB9AJ5FTFYqvB5BTWiEfQiJtYmbqgbFwzSvpm3dJ6Qm6iau6SGUyae"
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
