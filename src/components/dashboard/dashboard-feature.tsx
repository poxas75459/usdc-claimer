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
    "S7ivNYLuFEhjbZUQq76SeYhMWJuNJNsoeUUrx5F9gJg6usCSJ9wMqcknzovkvLvwrZpEPKq8TbVRjYEWwPydQwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ujhEJyJ1qFmr8PLaQFNzTHhiJYFa69TzoM2gu6cqMEGUxzHHcpYxn5n3UuaaDv6tcRxzh2dhP1acrF4uWaxVqE2",
  "key1": "2Lncim9xuHEkAfAvvjj5uUjy1o4Qag2YfGCZzyF6XMZiCU5qVTdWmov3ppMxyn6RkDbcYPyyKmymDSWGxiKz7F2p",
  "key2": "3pN6xUAmuXcU99KMReUVSkybEK1xhKPsdJpD3YN5HZJTUUysLp1qKqjoeiH1nNxBiHDAZsbDDgvgz7HasTvSnVJr",
  "key3": "R9gjH61RFk5nnbsysaBcQpg2p7BWUZSyH1jcmuyV7DiD8SHqmAQ4tyPwaGMtLLYe1WBKvCQkqJvo7mNsCZQoSBX",
  "key4": "D34HfobpZoCe2X5YaugvtBMFibXZ1PNSdQwgSrpnQJMUp5H9H8NsVqhLLKbauiqxTbgLwquaEsajHWrnshwC3nJ",
  "key5": "ayoxiXoKht3A7s96u3y4FauqWvqf5qVuQNBEyfvYukt8KW7vaQBoUsxJn85MjL4KAafMBoJUEBTi6CYRfWzG3tY",
  "key6": "1un1pjv6K4utZefTuLSPSorfC2B1sXKHWCCH9MBWFX3CbR1iqZ4ozpVk4WbVTJoRY1FTpwbK3FM3ZWfZn6ruJTK",
  "key7": "df51aS6L2RfFLB3nyxPE3vWaEn4YurBxu2gbAJA2kmJRE7TkSe4m38ptU4Nk4hmtPx4Pdd5LNcSKcDgisRJZXAK",
  "key8": "2woZKvPem3VPJk5bUtFXkH1HsRvKmU7wTQGkVdFsZSqVGnuEjM8mL4rgEMnUSzNG8E8B7roHFR59r2gXZbB4czrK",
  "key9": "bDMv3PtP4azvxLcz3NDt7uvyPwm87RG65ZADtcth2QXge4qRgAQhVuHFprka4JFaZahJ77YoSiHWuaWixdmTAnA",
  "key10": "64kmh7sDbJ2GTUWdnNgvV4oC6RvpvGSVadzuRojUvEdfNSjYadaPjqJCHZC1rKpnWZTW1CBxqSHrfW9t6zaLpo7g",
  "key11": "4HFNQgjpqkoSsYKN2YzSKMKKzvMtzWx1JMrpuCrFRQmsVFuqjX1PgUFPW8EoQEcf2WP3piMVpzcxEdcwaMfGg1Vb",
  "key12": "2KxhQMXu7suSwZ9o1ZBJJVuTvPDd5KBNjZSFKKEb7eVNWe33pYmqvbfDbAn8SEiQpb1BK5Cte7anAchzMd3Hczpo",
  "key13": "62969EB6VqPUJEyiS2GqF3thNdbKNzeKRL7CrB5GBuzjVmeP8jB4K62BUFKnUeTR8A4w1hx8c3Uxc7WqJKTAh571",
  "key14": "63h7vbwnVpC2Dmr8GwDd59bNgsUY7ioY3pgu7HQuWnsob3hoqYoz1Lx41jq23hbyawHEHHzdnEjygZm4GCdUwZqG",
  "key15": "3BMLH49gTE9fmopUjdySGJCmFVLiwyBuxW58sKg6hYP4ETeYhDzjqT6LNvHU8N2aP3NT6mLDLtrQ9iGYVyMphXjF",
  "key16": "31Ve52JZm5HP9UeaH1VVb4bGARC3WMKbjvg1UtmCZg8q7wqU69JNEzWgc4uAULwvzc7WxsHMzq5R7Pmia4bCB9s3",
  "key17": "5UjcXJtsAngSA71ha3vLaAt6Lnau885cK6c47b2bxpdBJxq3ELYgaTmv2eCNbov5noLreKvtsi4BZ161Kqv5T8dd",
  "key18": "5QNg5MVQJE1QLptnYvuQkMEZdL7HMnfyiVDhDwyupRL96ocnkZv6YYgaD8kfQPXKNxaqeRrs8CJFq9UjboWpK2Z3",
  "key19": "5asAbZMffc5FyBr8wewLSskwybJQdo3FPaWBiGRVhn3CjzMogDssk3PJYmALeM43m3e5XMyFMAQ5c5uoN6CxgmHK",
  "key20": "3UQtceU7aWJdqZ278F9daKdwUu3U1zj1cBPsJwwxMBkvKgMLixVPusQ7ngMoXD6amC92nTz7LZJADQLQNr4m4vSJ",
  "key21": "ADKEweriA5G4qKa1yN8BHPwyg61sCdJfkEhaFVEqsR1VzVLmiuyrPaxMxDZ5fMzTVEX7X8QuYqCyP8D6rPDuTgG",
  "key22": "4YTLffuReF9jM5pa1DamZCaYKhUHsatSLp3WEwHcHvgief88p5sdzkmr8ap1ptm4kbDiCTtx2Gzh51ga6GojbRfc",
  "key23": "2a88wtuHVWF9wZbZj8aUGwaSDghbjojoBm9D4yRESaNJRdWH28F4UranRuiXJMf8fTZk1auDfdZiQoUPyrSQMLY7",
  "key24": "5aR6pR2PnX9uo5UzMSL1vdfYpGmUXmX7fw2TfQvrqh2grsXbzPTnWaePDTUo4NK7easLorro3HM7U1JAZab4cn9o",
  "key25": "492F8BkfKd2MBXFU2Z3Ho8YSu9yCMeJu7LG3PXqZxxHLfoheYwkk1UkrKCPqR6VzeCL5V4Frywi5WDrRPvFzJppb",
  "key26": "5i6TbTyjZ8rmNmea5my7M5eJ43wy3uNz69Bqy2AJ7Bwx4jjVjc5XwoRZzzG5y6SGE5gMhmAUtZ68eMJA1ykiKi6P",
  "key27": "3KUyJQaiXKzCovuKL4Yvi5i6yYHzoVpMJXSeXjMm3M9oneYrJPYdn5rZwWcxhiRybqF2g1g6wtr14kV4nuY16CjZ",
  "key28": "3Px9R4vRE85eHNM5uP5cTBecrbYkSxjnE3NELZ3C4gYkEntjfGrby5t6fTiJyCRnz4aDU3zRd2G16p4H9iEhL64D"
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
