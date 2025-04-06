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
    "2uVKVXitGSAqxoXTnQWbZzxPGNFsGUtt56oBADai14zdFm7V98Y6TkXbyChQ3S5gFLZAf89M7BMTke8XsNGgNM8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZtySiep9k9B4W1H5PzXu4zCeC3qKAihnxTrJahC3BB7A3RgpBza4haUsM3EZQHZ1AYSQ3BJPtB2kjmCwm1mNiQ6",
  "key1": "awTfzQiD2m4GV7s2VbpzqjTntQbsb1PSxomRcvBwKzSTdT83GPGJyvdxP7NwUM5WisDE4eC7RegSocje9hn7bqM",
  "key2": "5Rmq4Ca9boHk3ntDtj1cRmBXKazkwQNCn3me88w5xiR49yEx4HEQUxqwaJbQHY65vG1616v8wzQYeMJ9h9V8GxFm",
  "key3": "3WMNBAK2B4bjgYD5tiu4kmTvogjumTPwTiuZHGdYbSm4cLp8emrWjBRwLZQPcg1vSbYhuR7JB1ASY32qt3JpHwzN",
  "key4": "cjkf8enWJu8NkY9oZDbHkwHn1TTNxadzcL3XCVE5eRUZ3i1TvNmiNNEmb2fdLVFXQ97h7JT73F59RnJtXLzTHHM",
  "key5": "2zi7T3BmrZoa5MEcZ4uGfaoWsuXt9TxvRSCK4ko96hAtydEme1hV28rEBAmeyt9A9HCU7anFz4VNXzdcpXTqTgtM",
  "key6": "4mkoGqtxPiHsZ8oWerAqRH87fG3JEEs85dDaGntseP9YzH8JVxvr2HW6Dy8SCKKpXvL2fsZbvSPJmqHfPytT1b9K",
  "key7": "5e5F6UrZZbt7bxYCoQgqdTdZRMQ3hwzXD392DA9fbxmm7j3PghnQcbHiQuGbHq7NShCv13TqDyUDVmoPFX7kGSxX",
  "key8": "gmc4UkfUnkyybi8jAeXF6YxwsMTh5Xx63PauPpdj9EchSgQKaAMUpiHpae8kJXsZyKVPkudkXHbURKctwn9QocP",
  "key9": "2CwbB26UiVarohGsjwN4USVknwJBXF9nvUs2mxWFNhTo9pWYvBziUKE4QK6gAQ4nLXXHpdxdSnXUGk69RtoPJUG2",
  "key10": "3qQs6jAvgqQSeMKuW8NuoZ5Cn4YPwqVpF9T9Jyu78ib2HWcPwjvnsDpQtz93p2WCdGYGPL49UA5migfAUXimn8KN",
  "key11": "3BaPsQNUuLjPEgvR3ahtQmWwAMBByZaMBKaPssFTgeueNTGGwKPq7S7obavVXpJe3uh63Jo7tTgrqn6Fsh3wgJvF",
  "key12": "njYCod966zCr4escZPfhwA8bzuvawmQVka2jDifxwQgW3LsdpydjBR48b22VDvv72CiLWPPxggiBy4uStAAp18M",
  "key13": "SLnWpJXzfz2QUVsTYGetP3aPAGa4GnqbSy2md7EbirmZhEn8hgQG3hXBzX77pzL6gWDfFHnFJiGvVmubMiEh7t8",
  "key14": "5X6rf9wPXxK1k7hE32USFUNzNhh6Vah9MqWVp1ggbNe21rdguLLLuXt2kWvgky3P9DvFHUNmnsoTsAFE74QdcHdu",
  "key15": "2ptA978EUvV4xp6cYHScHnCf2bPdjGGTffK9NrDMoPNC38CkVDdWQ2PTEZ6LfGZTWPha832FGAYxc8wqna14fndW",
  "key16": "injqF5EDcGtYdvun33v4vaqy5mNCyf5G9utNCM22EGxXr4WgzGiHvFnn5iCTXW1t1pmEMVSXtn2RCpn8aRtXG4N",
  "key17": "5aRipt1szqEnwDBxLmqQm8pQQ4zkwbgiimPrrUVxinCNEZvLDMNMfP2MucfhJUSZ8nme1icWAVCbDLNXDA6zCg1m",
  "key18": "25jncqhNeykUnvsZ4rr5ZJmBjqBBACx5mznbCP3qxiyjRHEQWa3FWnpSf8yCPePChSfCBBbJod4Sa5XL3XJqPcZm",
  "key19": "Xwp8xozZ7PZX6hpk9XQDAdCaFCfVR8HcryvPV9XrLoUktvZpXpvRYhNFFJxFeVKXmRrndtF4v5ayjWN3Y2s8G3R",
  "key20": "4ujwKrt5FF3AXZKKPcyH82Q7jFMuFVSyhX1B6ggi2Vw5w584MKR3nLTzywLjwKUEodLajNWZFFC89sE5SXPogEgX",
  "key21": "nqcp36ZzB9U4nBy91fzQRTJHG7wtq6oggZY6Bzz7xS2WxfFAFfcxSRBaisWgnDVZ9Q9VEngqdUvtZxRmKS8XF57",
  "key22": "5TeQggyVKCLGbkcdWgjpWXwGPLuiiawXLa89T6x5FBv2aMVhvoPupd1vxdKwV9X6RKHvDiEzG3P2B1HzjtgT5dEH",
  "key23": "SAutvBb7q9muqv2RnfLSTHvTmKqvhZFTFC5qAhZf9ctUYRKDoBejwzRSDiaoh1GT7GorBVMog7k2ZECJP2iw7MY",
  "key24": "2FBs4ykthajRXAteuGPn6xGW3YSyPH32Do2CoNWaTjSNVuDxsdX2mZvLBRicaYP3xaQAxeLoL4WtpRfEMZSLD4Hd",
  "key25": "etU3uyZeHRER9UWv348engvTkHUpp4uCKfwQBeA6nWY3S6XjstoD7E2yyZisrLYK5ZRErmuqFZZ4c65j6srwEET",
  "key26": "29F5w9XMGwa69A51zCdWaducHZBfxhqDJd2NW5srqJcA6yqFs6nKwUYJiojinvdCcP7HoRYXaYzAaqYJjwrrwSLS",
  "key27": "23LnQ3HW22tN1AJJRYeTXDncAFuSqERWMS51ceDS9vgZQ2yrh6AU1NG1Y8rxyQPqv3iarSTqsiQatmy11rEHVktB",
  "key28": "5vQVkYR4q79KPydBqJgAVCFPrLeQrjKezjp5V4uCRerUztVMmBU9YPkQbQpqgc2WvQgjVctBcWw7CPGbNiXqkHV8",
  "key29": "vvb6r6jBra3VSYq4KC7mWTvYzcEQiGzzmgUVocjX2SHgCVRAH3ZELKa9PKSJWc5kaHye5UJys38MsrBaWJ21Nfs",
  "key30": "4ZLN9rAb8KEAjjFfnNqEEXoDiXkzgF7BuUcE8BxAb6LmJcqKu96vtyc6hWhHeuXZMzz69rXD3QvC6bCWpGMpHrPf",
  "key31": "49Fpmw82CvUCBjgr9jU1BbB6RKKDz9gL5vsVcu9VK7SMZQvFPBrwytXowvdsMLhaqg1kqVqaX8vXcWrTP2CQuRZy",
  "key32": "2STdVYkAG6xxdonxEpKbzV5XVKFxScdwGu3UYgBrqyrMYtmMsG3ATdUiiBEw21wt4SdX1Su2Epc8nayprGZFW1aL",
  "key33": "4z4mpPaMQhXfxw383mdXXV8217DVjomUF53mMrrXBtGYDR419S2taVg2h2LZZL5z1d4ZuP4cAjmGRTb4XGVxLgwr",
  "key34": "4NmM4kSW2AM2wRPz6NMgHnYLmkZt13Bm7o4QFoVN2zNTb9DjEaxpiRgWxEhf9qTSG63dkHQJYRneSR22L8ddBaSm",
  "key35": "3ibn1sFTjt7A2E11mnvVCADkedN8bVEED6JvpMTsWQhhZDtv3wAeVT89MzFYGJduwKzE6TcyYbmh1UEoyFsm7zBH",
  "key36": "2MkmZYRKMXFWB1evi8uuFyq8xr8gjowuXnpnFuXTRWMtVKkovgcH6y9n1pYRhJwKXLgdKwt1XyXXuNzgSEUdGVcr",
  "key37": "3GMbwqi2BnV1hFBagAqwq9AMYZSqSNcZg2Dtz79c8Z93bs8vdseXFkr98C7EQ8mp9fw3hz8DTWSoPiPWeaMSuQ32"
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
