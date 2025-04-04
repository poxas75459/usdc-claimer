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
    "3jVWN477u8vw8Cqo5U4qVZ7b7CLTKPK8hRqYLR1qawDq58WVZBGJL17nrrdUewxJ6P138BZQ2ghepBb3mbrDCoaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVV5viD5eCbBn4y1wjMtvkZw5RqYUWyBvBHCxTERuB4vGR5Gz1DvVsUkwViJ1GHTg22zgNi9wfsw8AJ827xzb62",
  "key1": "4zPHKNECAbzHwY7AUE3LoY7xhUDms3VCELLx9Uz1c35DW1uyhUgHqz6Rhs8UcpC1kgKsfm6hvxNCTBgwtbaVjExk",
  "key2": "3dqs97rYgbwUzpSEsWuRVbtuhnxNUMCx6X56nxa2jH6NWpityd3FQ1FJzQnqMYJpsGPEM5GsXmATJtqYY2S3iSUr",
  "key3": "2NaXk8i4rY37XEfbQqg59rvCuzRTpAFobu65GuibpyXcHRXZ5g3qvFtdK11fvcwUgYDFbzSfdM86y4SLYmJZmG8c",
  "key4": "j7i3hpDF39uqZb9iNfAdTUGxFoddP1xNPEuwmx99J4yK1LpFthXteyK3WRb1KAGbFZhHG9i6Y51wnZ3CG3m5qqQ",
  "key5": "63XKo4uYLJ3KPX9niPB1nasNt6tMFTEHucU7RvBhMDRxNBYmVTuEEBZXCzwA6e5CK5mt9f76ZVn64QxG54BkHPYy",
  "key6": "3nZCxeE7uapCnSbG1RrWtBqcHCWBY2qFAMVTpfPw4d7mThNNyNTmXGgHmehxgigWjMKHnf29DkMASX1KqLrtss8F",
  "key7": "4BezcKr6rDzhCp7aFXrd9EXKCt9QBXemBXSyRi21dyEdgCCT6dnVnmonxFn5cdhCYjjFNTZo7FqXkH9apbLxtVi2",
  "key8": "2UgE2MhT386Twj7ZiZ5hCQYH25kAtmDTyeTBLwm49PLp39fvbLG4SWrqiLdYv5UYp4mgPFftUdMHQwvxwSgCETos",
  "key9": "4Gh1rfhNQbYB3peNSngEFs52h7nwzvSy9iPEyc3YuWCbbm1rPHNtQxbF1jxBAZHrTXf8bLcLGaQ971v69VsUB17s",
  "key10": "2HDfPsbU6Er4sJB2gTeVoo5YirX3L6aqeZgP8Bm9RbXuh6bshef7embCdJu4aHCTHhiEZ7WY6fNiXE2kqb9AX37p",
  "key11": "2N8ag3mdZFutiba3pWSQ27rbHvwGnAahD7GU3VsAX56SBoC8SMddgVxHuX3eYxfzV33kgNdfwzZwyL18mZydq6U9",
  "key12": "2tez9F4Q7cLmA139yMnqrbTwxeYRTuXeeNBgftnFdhHY5nHvdMDB1pzYXqnmurer1zBprsMba8okXqQfNu82RDio",
  "key13": "3CRn6AscE98ipeFcsv372rERrvuNnt7DrCj4vuXHQPNMykkvyD3PfMNmJAEpbk2fbiNCkzGyr6bTrhVfAvjKrTXR",
  "key14": "5mWaGddNfaPYUQd51ej7nQBu1AoFpRAcnXQPL3cjYBDj3Ew8UX8KbCypCde5NtJFPmcoV4Z9MBhQ5Bgfj5sdHK6E",
  "key15": "4TqZBA4txAETFewkKVpxFNxdPRqHhAwS3Z4E7WjrPp8yMkjDaD5J6kjantZmHZ22GiNjoPGfR3oz3mU7Z9WjuV31",
  "key16": "23Kd2wmVUDwv75grTwYZwEq9WqTpwTSfhRVERAqpXk6scFatWdWsUtK4mPtFrdMwUiauKASn9VJS4Dbre7BE8PnQ",
  "key17": "4pfgDt2Q3czbhnu4wZCcuLc7De9s9UKHtReaAtHMvSpqk7ND2dqBGZDxSHniV8kNKVpeFt45mtN47YTTzYd6RVhf",
  "key18": "42yaS6ffqhhApFFuub1ZGBiFLzVJioiGdVR2pvxjPQupEThNJBXVVx2vEK7tcsvAjrmZCS6gTawYaBvo7EhTpseK",
  "key19": "48LNu6h5jrrBZQiVoxsdPvw5PUiMGaJGkahVC8cPfChS7iHmN9B47LCX9a7sqQnoWmZgVRrDStvMpGYV3zBDd8Am",
  "key20": "5toWRNTzeTff4Aydy1pEKt2gbuP8tpCcDDD53hSU3eKhtDaumXiQ163nK61Mgm9jCgNm4FDDoxLXUdGPYWBQyhYr",
  "key21": "CpgJ97angrKSWuqo23M5pxvSmq8jPHGS6qE228tvFkm2oJmMYsg9JhgBWzNhwT1s8RAPs5fBfBEcbYbqSbWn4XV",
  "key22": "3LiC1zSfGRYizz6GtiFM7UaTpX1MZVTFjrXR92L8NztPAyo2ZAW4JYBQoXBUmzKip7uvdmz8ijQqrAhAdjB2pXdN",
  "key23": "2jqkNyef9VgMHYtQQhRPBwzqZmxRuihM7CFvYEfKFjgDDJo3H8Q7r4jm1WRvFefeesiZJ4y35HnEygThGGZcbcaE",
  "key24": "qQpuR1x71cmRN6gY9vMLfijs2oovvDtT7haJCjwKc8Qngbu3UL4jX1XRtfh6yPProtfwFkBT78XpKdmKLJ6uHFe",
  "key25": "Sv3i2keVWMpCxa1rEnXVmDz4uLYYnx43rBZNhs6K3R4ZjktzvnV8AdwA13uzB2wRFKq2Mu1eftuXAQNeQn67DBe",
  "key26": "cSL5x96dSE9vDvrywdjms9NKjvrVsnjY5XHaCygTYwzKE7B4w1PJj1HTgDZPNTSWG14Dhvwjf7NWcNCwJuXWWEU",
  "key27": "2DCCfaBnAcPsa3ydgH2NxGk3W55jYdC9i5k9fTRbbYJt4syeZrWcUa1ZjeCPdos1NJuuiNwexdC6xj6nSzw8n9gc",
  "key28": "ngZzKhKfqFmVLvVKUQSW51Ur9kTgemndgtCY3JSn7bVJ2vziYSPRvZGCEPD42M4Ghg2mUZTqQ7QqUvtykHQnqy7",
  "key29": "4W1w5uSDjXQsPr8pwCt3UBAmFR7fqetRS6kkSgMvGkJpSzjdCcBBS2x1L9Wyyh2knWbJpQ7MUWLgrgfB1ChLoz7V",
  "key30": "2UEVqLVxqMbKvUKiCDPTy1GaydGZ2aEnnKFKejh7v5Lga6Ws6T39NzeijTuEMnwjcnN1QJV5CYR33hL4dYDNpuFR",
  "key31": "62hAZWDJ9ytb8QdJSH2kLa268JbFuBDjF6ffDYT62myMnAz2aPo54WCzizDsu4hbWRJd3bWhoYxNBriTo2waXZSt"
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
