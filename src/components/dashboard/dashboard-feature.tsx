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
    "4RCdpwFFwzJvqCrnJM6hCHYnAvQKdB9C5PrFo7PWNPBSkPNvWX1x4VSk7NCXUELD8Gg3H353j74LbXtV9AW8c5qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SroXZpEeywJwB7CNcHexQ8nHBid16ZtQHRLQj351sN9fFGkyiLt1SRebR4rf9vA4VGC2tLNJNTC47wogDookb6",
  "key1": "5Vb5zVY8F5ncmRsmpsNai5RtfiecHubkMoTMRzffUVTXiWw3KRKq467vqQcG8JSe8DDp29MTgbDEjGe3xu1uUetT",
  "key2": "4ezB19PqkVhGp1ypySqoRHLGYmu2cYcT789u2sDbvbAaXjtiC9PQ5mzmJVNdtJWFPV496X1EZd3WNVZzxxe4dzyE",
  "key3": "MXXLTy5pw7VmyAvUt2PonqNAbWUdqxCH6SgLNX9mXiXPVbukfEsuuG5wvzpMptRiYYFHvvHgaVa99KF8gEmZaFL",
  "key4": "2EGUXe3Dcr28jRiEe8mK3eZdrGZAuiVZFUeR9RnyHPUiDBGNivZm1cCFZDepRdnyCy4V3YZKnvhMCuFLPkDK8FCk",
  "key5": "3ipKvtcHmQLusZu6juqFcLCWb9GoEAMAuysGzV9mTrWqPo93Djt42dvDf8CqkidugAZC8XH9nGbRmUACgFn6gEek",
  "key6": "2YthtLkfsSY5e9R5WApuJivdziCQXhxn9hSzpgy5QsvUKKEVu8VinN8LgBUZZn3nZbWERTvpnRmt5yU8dWk1gQWU",
  "key7": "2T9AcYuZcPJRvkhfF48R3j8uBnS16QAvYSdWyAnJCBGaWpo8cQV883RQc97rf9ju7tv4KK2eo1YJqq9VfM1bPKPA",
  "key8": "ot95aQJmhjtYnEd2xdeobYHxLAYUN7XXkD523bjwFvYKQKjMV71kvFxt2xB1ZyVwYnQsP72jMZitDUV5FPDwWt8",
  "key9": "4dsVx9JSwahh7XmSH7jxZH2zZAfBpegQ9DWdbuiV9Z19BHZzDuzui7X5Zj15qBDdkF6DGxKUYXmiyWN5d1bNfpjP",
  "key10": "3T1czzjT5YLyvdb8K4yGMkbBuR3s7mou1ZsfyeicdQZkkDigT5cjvhFLe9XxMeo2hBm1cGd7GvzzuaHkrhu9wQyE",
  "key11": "4pmXa1mtdjhEj3aZE6wQLiecmBx7G5WjDbuHW6pf6WsMnrxwQujdALLsL8KFzzeDTFDVHh2RtHDGbRoxCL5YpLc7",
  "key12": "4LisReY4Hy5E4fhHNxW6RqdUJmcmLMFyX9ZwpVBKW1B4sfKLqMw7k8jkfYdrQ1PU8DHngNLLfHoN2fThqhd8RwP3",
  "key13": "4SBTuHkXMGCz67jHNiLbPGozUoxLkLPdxgq461BQQPGkjKbceijFjSQg63S4RZB4cVQvzQ2WVTe6bEQWPRru8C6M",
  "key14": "C4gjPqvRZAcF3tMevWm8MH6gnK1criEDaD4U4k4NqfwnKn8Hk7FdtZVivPQpt4mwhSXBgQm41m2B3umBPbTsira",
  "key15": "2EKLdS4VxdNQRmzp4MKMGjDDoq5DR9fJ4Xf8pBduvZ8CbyRvNNx3B62LZDrjBf11cQoBWm9wxs8SWjxE6wFtX8ZK",
  "key16": "3cBiZDDBZyfLwNL4MuDHVBKRN71nRrD3iQuKGoWyCSg1JzhmzFHUKzWd73BzDtzEGQrVfGHPz7qowzKbzkNFVvNE",
  "key17": "3Gh6dFfkQNjsVCaZ7LSqu316GxjxLRLLNDfFscPHGWvNYBRxj8dmASw4LL8zp7MEukL65o1L2mvqUPYtxa5zhUn1",
  "key18": "XVLjNPL8yvNjGPz6ehAYvu5QejR9bYV3fevbQeNQ59EPqXx2YGqtgUHvb7fFjjG3wwVX72Kd9N6RSkhfQnMZNNj",
  "key19": "4yC359Z8uAjQNssum7szDUnBUeT1L7i9YDfwLxbYFV7nuFc8r1czbK8Ev1scyFBaerNW6ouPdXgonrcJUDbwjWcb",
  "key20": "5ZK4psPBdNkwQwKm4vFQMreervgks9CxqC2RH3QzEEtpVGDb3QbQ1HyVgW3yUzApJ4kZ3n9dVU8eK5xUim8uCAsk",
  "key21": "2kcASKoBM8U7neq1VpRHj7HpFt8Ksk1kEWJ7LCUyoYvtiLwuGB5kHSnefDsJSTN9yaSgkhjgpu5wEXFemeYiQFWC",
  "key22": "2UQ8kppArshcXyE68QYK1b4vuPGArYVS3dyFqrzSsduGXT4cxihQX6LX6dFLquFnmYpL2eLhHxDePmZpL47puUES",
  "key23": "Jd9RG71pAnLqGfnNmPdf6cKkeNS7soQP7DhXXxVgHdmCeUSL5sfTB176ez7s95TFBExZ2LP7EDaDRD5epbBeoEF",
  "key24": "41LgZUCCEGzRQV45JiV1Ynb9uGbJqPuc1gPLDJo82UNmyG1EPdEV6DivBV5GDzCZizaQSC279uyUjSXXeCpES9cW",
  "key25": "HtUsqzLeRJ2chYqUF2Er98f4k969HFJFxQM2VNsVf5d3ucpLxrzLjvPL4yk1X5oVE5ysFrKymByY1X9NeoZsXDR",
  "key26": "3aMa6k8GbPZaDX4n9Ph7g8ukP54Hb6TwgmS81wxiEaoaC9avQXSUbC2vcF4B9zoNb2aVAbERXfmrsR4cxycgjbGN",
  "key27": "3uQLptt45t1zKDfkNCogJQvaA4CXw8BJfzMD4cafsn43px2i2fymyAU65drkdk1kEVAyn7LpPWRUuf7StFRT8GNF",
  "key28": "1zwHC4MkV55i4hyH6BjZX7WojKu7fAgE7b3UAG1F7HvM4rbT3eUeSAWBB5LsfM7Ljh6VXW72JqVPLFU9uCnfsw3",
  "key29": "m7z9RKbP6RotexynAijKYLBqwC2q7Pb7uqWBgmaxaQKdmUZpNkobA68s2yNM9drAbMRqBLSGWuAa5SH6kckdn4A",
  "key30": "PJBk8XQwSxW1kK5i4MVqAFcmLjJ2bzjSTEdqb6EL1K1vhibPvoM2AQx8xwJskwHCr8x8DwBeAHS489V8nYhsxg6",
  "key31": "DFtUjUE98zy8G68MMjoQUJQW78zjVA1cPma6VRoTBA2nFpVrKpzah9LVvGSB7Pt2W1ygwTFs3pBNzny8n79AcWR",
  "key32": "3a3U4REY28wLWDAJCY6CYZsbQiB3UoShuCXJxhjy1eF16ZbDbePHsBFJKimNadFdvei9WsA4KsGNS7RAppubUR7C",
  "key33": "21PMZCFWVta1nmypxDpgKSvtofU17EbTpAbYzKmzEA1W5WbiroLBzUYeFaEA51UbX4KC48LT63ni5M5oGqaPmEkj",
  "key34": "si6MrQuNWTyKZpTbqePFHK1JKuorTKjAHzmpdTACq8uNkdEhneJtRRjmPVjVGVySWpyVtD7a6eUnscAQ7RshkJm",
  "key35": "5exCnPgsE9jVP5HaLZrjKjV3xf64Dm99NLSdhjxmV1zMLfoBoRFRrhGDezSDUQPDn4pPa1yY1ifuoRVW1Mi4EeEK",
  "key36": "2NWDcjsbbDiP1Rh5kPNgx3bn1jYFhw2SZqv1rHkibeiaQQKvmuKLMcguhKwxHu1bk47Zo1hMbYrJpf9f5aeotbN7",
  "key37": "EDZqACEqQX3qytMjMPr4ob9mzHqBVSb5K2oupjRH7X4gEqt5QUT8RkPxfJa6Z74917TBhrJHbCwePuq6eDdVXjN",
  "key38": "36Diwz6WXCGrbh3PMhgrMT1kiZFu6GyaHWMLvpRArkhwvTyFEY5xaRDh5D27gqfS88PuhfaLqHGHUFP9TjAY9ytU",
  "key39": "2nqvwQe6Fqix3oPjM5x3ZLbmxCqPAC7TVByoMKrDDiU4DB45bhzciQZavGu8piP9r7ruJphgh2hxFE3SQBRPpxET",
  "key40": "51fWjfdDxguNozYecpgYVyjjmnp1V144QjFVUSnNXAQoEnCzR3mkCNSqqGMq2UV4gXT6Ka5q7BRwLYqbMjxSqweb",
  "key41": "3FLyPDoffz6NavisYaYB53bQbGbwmUawp3sv6zHbwbpx1dvrVoKyAJfs8Nva2hsTpK6ScnQsdmDcFecWQLD1TZDc",
  "key42": "5m94V9s2j34VJj8QRQsqfAKQYVV2Ppf7xErV29nyim6Tw8LoeN1K9iVBRn9bse5BBPtDvkFk1f3YYh6fTdrUNu1n",
  "key43": "4UGwSwc2rLmK45Dr3tNNwN6svHE5hgFt4LyMGxTv7H94rqXhQkriq39T82yeKRjU2Y7FJXj8f8xwB5pTeWTp9VJ2",
  "key44": "5DV7D1rJR53XKav3KgV5Fin8AL5S3Mcb485iPxGTPRc4inj68AmBqU8xzUXMxuTSaESEXfn5PRv67aLjMhDcvcFh",
  "key45": "24T2S9XW78qfwNPvNrgHkybbMXdqKzGEyYZgHEZiY3AHYP7VL6bhazTj2SNNRiG2qWBBWTu968ACmgtHYqjpdQJa",
  "key46": "4CqSHNfSGDrdpFBCKEPqmhzyzm1LVYXhcm8Dc74GiTguGedAbAvG3ZHvMcc8Ug6X8aKCbLRbtHixUao65PrkqbuW",
  "key47": "3AqRWovNHML1USGRzC3wT4CHbBTi1HVQfVSQcvBFUuw8uAoNXF66oDYjNtaSnzM2jk5mXFGZsFUyzFadH9WFmweo",
  "key48": "aecQ7HscXRXPkSkRSS5GvSqMNXveekGk6bbVwD7k4pgKNVQHLU12p8qm8qusPz1yzbKrGnBbS9Dt1oeGUsHBTJX",
  "key49": "25bwSgqN7hoi574JSLZGtypsHhpLiK4hf5ZYbhpaqB8ZYwV47TF4DeE1vmskvDBeq4h9ByYRbVz7sUp2M2GiLR8W"
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
