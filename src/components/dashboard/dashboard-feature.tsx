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
    "5sL47q3BGTFUGgPK8pdf1JaZQ2hxasU2MxNgYuYL7215JxVgDEEdmusT7BbPGJXENJL1SXfVUJoJ7DxzpJJjaodW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S833hxyj1QjqhTd3zat1vDV2ncQiqyDCHmKAfbHGi1ChcKMuabt6xYBQ5sExu3jyGx4gXAwnANQ47KrhSEfvRAu",
  "key1": "4EWrxKaskhiJTLVRoQm4TowNZHCEpEJbEn6BaAixf15ZftYsAcD3rsPkSvfowuwvCeU7MqXNRYTvomQ287wVvDXB",
  "key2": "vHRs24jiDwRmjETsn7ATbdzomEig7Sc7hynFeoc8VFL43gqQWHY1JqWVpG1qA5UqgALw5XKTbegkpQsubZCVH1i",
  "key3": "4vSrgbpikrUDFJq2uiwDu7FwZgpmfnn8xyWaz3Losrhyt4vovdQfmR3duKkUE4Bfwe6CJkeu7ERbsSW1pdqBTNJ7",
  "key4": "4h8E7v5gM8s4m7NRsku8KhdRbWtobKZ1HTydJoFRd8Wr4K3eU6KrQJr3mSZd2ovnjqMW8XL3azy222gp8DCrA3QB",
  "key5": "5Ksgdq9t7QV5is5aZecJEGverkiosAjPzxkpVS3RUxorFfXrKkpp7AK4WSRKRPx6RBYQNm5GapHRrrvfYmWK7spR",
  "key6": "4gzwJHNi9hBPRZK4nHTMZ9wSLYXi2oDfqdtTfpPvQPJFwohonqiTngmTrGdVyYaMrgFYK4THD99nCcVZqdJvnqiz",
  "key7": "2bRddP48YCMZadz6r4qoupHqZwRUaDbabWgwSCcqqBXi791Z2V9XwUSdLtBgNhBm9NdnpWDE4yLVdL3cxPtQ9jXr",
  "key8": "5HSxKvoK74nurqYL6fKLiuSpGDg8uDVMHK1vtQwZjNvBMs1FQ6hMC8Pi8n2qqVgiAKoEVs4LHFepWw51AHrL3oVB",
  "key9": "2rZcsCkP9sqm5KR1B9XLQ33dLY122h9rSrxyvpKhcao5vjH481Q1uFzyAW4fHvYNzwtkRw1knQHjJP97PPCugAv6",
  "key10": "3A5gKYqZNBmZsuyGTeX9iQX1Cdp69qXdYWwTbzehngQ1sdd7eLzQGDChKSjff1DSXz9qJ9VGPYXJ2gGbZRvA9WHY",
  "key11": "3LL7LjVHLyGCgXEUJHeRCpVEMrjodFg8swxg5vEQykcCR2cfsz12io1j9jaLvjjNPZZA9iCACPxDznX9EXjKt9Jk",
  "key12": "JM9oYffVWpcAkRV2f1S3KhZwGWSjAJyweLGKApB4zr21cyebJuqZNzm8yEQ3CMw6e2RfkjgDwWsam88YkGfyepN",
  "key13": "oCKWdSMQELNoTBv1vpMMjpMRcmdJq5TCwU9CYpmBF9Lx6RfJM2KngCQHTaxvPTKceuTKECXJ2NmEUbjy4fkVFp3",
  "key14": "2c1GqwRHNnS4NiBmwQSvLeqjphafq4uxJ1QnDidvMU4w8CTCf6eBjLzGpSWDrKt9QXhKnLYGgDJX7Eu8cG4iKQgs",
  "key15": "2CSbrp2m75wihXWtQoPuvxZ6SAV9KEHtmNqSDAF2syT4X1x4y3wXneFu61YZrM31TC7AcDjk3utaa3RvtTH9QUZ4",
  "key16": "3V6gkERThPp1kVjkQLVyJ6zfbUyWFo4DqPgcM1qqKoEEXgbAzCduc2XjMEWakiK19k9UCY1m3RMBLpGMC7xroeoz",
  "key17": "2pjTJqbNTrkWmnF74mfn63zF7xrWwPrFGRFRHGTagbXkthPeeoNF1wtnWkXp6pM1K5wFM7zQs46cPBrxGriQe4PT",
  "key18": "2RS6x8cqmjoUiJGKzANknDW9SKTuUAZfodjVREESazCxrqEewJbdNt7UKz9hh1RASu78nEbUBakUjVeKHRG7Y4mB",
  "key19": "5FjswHzeBv2jnYZdeGohBS5c1N9Rmw4cPgG5xWeCaQRNvF38uebd88t6e9A4Y2wZkSbnbpYQcg9oiwfJAQZn3NkY",
  "key20": "4rejMxE4UaSWphYxNEqt8stqWBtQQAz3FdRydx6DMs9Djgm3HQjCV3rRezKGVwLvr4nZrRHJq2FaEJsn1DJTHpX4",
  "key21": "56EgRD4JHY5AKu4eaXvU7V3xYYR19PC3YFS4gCKxjueAWC7SRERRq626oBris7CRyCi6KTg6N9Hr8uvuTbnGRccw",
  "key22": "29Afbr7MgyGsbHUniV9mF63s5Kge8mKX4wL5puoX9Eziu1MidKXKzvY4Nw75x4oawyPgtbE33qfhh97JkSWDdyJw",
  "key23": "3YPvHhZwdZLeRXA1StDi5CSKzKqHH3C13Dqy3rkgMwPS4iGUREzX8ikdsfy7tkbLFmG1HufoHosCLPpakvrJ7aw5",
  "key24": "2prnZRcE2NSZoB4cEQnhq7Ye2h6zftz7AYXMbbAHEbghnyf79rQPhPzexJgecBj2NTVqc6e4HTsytkfitTpzCZg3"
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
