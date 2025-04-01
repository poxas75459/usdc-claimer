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
    "4wz3o1WHv5dcvwBCojA73nAh2sJvWwC1UyovowXtXUUukMNyryt5E9AXwetaJSh2KFFeXCS33WGnJbb2d4uYTHki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaCHHPERMeGW2f92uaR6RRKyAfzd14suKG1hLGkruRRmmtqWt7AXRaHhMqf8G5qCn27KRgymsMHmCqtTWM28LGu",
  "key1": "2UgTJ5tEXY9puKQNUB1w1d9rMfksWDRBZDRT8cXFucGJjiBJ9sz3BwPVxaewZrfKLk9XHxEuD7VUWccP6QfvJL8V",
  "key2": "ArNA5KnkUrvpgraphYDMN9k2DWpSAVmjFMMGHWgs5KaoefTXN8PSUXy9ru9SWzh6jyAWWMqaxLZqDhmxbKB5oBT",
  "key3": "4HxCGV2v9o7Gj95QDRkVJ4f8FtU4CiMRqcM7cPqnYSTDEDadpfNJeuakTug9H51bHUrX51u55cQC4zHzz5gUNPUr",
  "key4": "3ieNNafG7gykhjefef89MiPvhqwhW5F5r3JNNa5jUu1oQu8WZuNBsUneTFGfgfcz9d1xtesJD2YAaK58oGAT6b77",
  "key5": "2ds7pKEynmsmDcJLLVPsoNkkRfT8aPK5PP5P4oSod8mZM9KYEXwaAqKN9EaWT4dMDa2a7tJFBpqcg5PEo32WBuXj",
  "key6": "4q8PoJZESwKxNcEfvdBftoDTFJHkuDvR4SJbBLgJbncq5hoK1jsRBznjq36PZajStJtzFeWUXkoik86gauTr5K3h",
  "key7": "zzjBt2Er6LRt5j16WE5Yq94g47SGjRvkg5WCHBAPzs2zrcVR2Pwc5UZgNnaai2W9pvGP5ndXoxgaSLs46W7BHDk",
  "key8": "3BKpgW9MS35fyqt43h1FaM6HooCLWH2sU535RezMAhHukMwHT9wY373pnL6UbyxhV1hwGSQnSQbQw3fmCMy8kfdR",
  "key9": "5wGWYHMQrLedTKhMBuErow2VzFegPuhnuqBCe5zqpnUCrQGYAAZTn8oJkS6knFfWQcZKL5nDnRyuUmMHkqF8mVvU",
  "key10": "2gTnxyDdzLAVzHdfhuj7oV6xAkCqUotqAoVRbTRcuSF7fTCcjNrrpkiXjjBtN2XoanXBBTt73WzjfBWZNDnh8Dwe",
  "key11": "3cRu4DUi3dsmoWtaenirfb7FSokJuJsC3LnuxPUzz41w59Kh8x8LRoBiJGLTBA8k4ogi6nTVh6JKde1Z6HBJac1m",
  "key12": "5eZ8shQC4dfYU6fQY4YxC8x7zv7fKfxfNW7Xn8Te6R1vmY9bsuqbFKo9EZWMMqXNy1szzch5cQi1vbukFabcRsu",
  "key13": "2QLvXUo6T5iUAkpundun2bxZghddJYW8A2f41oLYa3cZ65FSMX1ztujBVag5egxg6Ee4uTFsEz1RWY6dKzwSp3zP",
  "key14": "Jhm4j5PmsM5kZ4czsdm16CKuLAdGNBv8HHa1Q3p8KvEvsfMGuB26hu9Ci7iRGkBcBaKUGxXSaN9Ug9az3s34PGU",
  "key15": "2TBDy5EHonKFaMeagomE9PnCxo7igbUA6V3eQQhDew8uHeKaNXh5do24wTewVFedPDFMnsnNPiwwQCeR95h9dEu3",
  "key16": "29dMDyvTrESbrE63BJX1G1wvhDQguyP1Rx4e81nRvHTuAp6qmkg8WSt75q1V2VEnbAeQSAdchtxiQQGNwh68xYgi",
  "key17": "3mkGc2yWn8hBVmi5PbkT6UVfqQ6esPyeHyXYH4PGM8Csn5Q42atxyKHgtsoZWw9WYt7TzAHGuUc4rWeSJNHoqMPs",
  "key18": "3Hxhh68PYRLt1RkhrbAw7QrdjqKA95Mu9iody3kZ51X9m2ic96mNzniqcjX2v5gs5BHTaxrQHGZpn4ZM2GzhCFoG",
  "key19": "qxg4CCLCkxt6xbTPypDRuLrJjcgCrJFfFpsv4MFZcWR9g9BA2RVZhQwNnxFT3sg8Qhgu8DDVBPDDrXQBJcu8bug",
  "key20": "5xAvi3qytJ2UKkQCzzYpKfm2hSy8fdEvc53QSdx4AoBCftRaEdHnYA5CbvETQJ4d7NHoppBav7zsVbwujVvfX1bf",
  "key21": "Q8t9CVtTP6uhSjwTLidpJCv2qt9Bq9whBTT6bcX7QiQASfwemAgSpZrtbQyfxJxUNuEv7c7uEvBTeL1dCzC231Q",
  "key22": "rQtyn7HCD4AewYCwfroe7YHXgTSgGZuR8WU86AknRgyMtBLKax4F6nJ2J4VViC2XbaZ6TBRKJXhzC6Reu2FPKph",
  "key23": "39b39sTHaUR2YwvHuX2jNUSnnLph4ijkha8r4QoBrZBDYSDGEeTP7mo2CoAUkh7DkKi7CUbvV8x7nmKYqsZAwwxE",
  "key24": "2TxGMK7EKty8T3BfYwDLNa6q5naUjegXcYX5HZKtZxYNeSn4FPMfENV5SyJbRMKMYLyyPz3sn75hgGwFBGS6V5CF",
  "key25": "2LShMnRW1AL5xoACdVsHTs4qZzGb6auyhgHm425AHJdXUB3pw9ismxqH2L3pkmEyR2iDSfqCAuw3KCFKi5AoSpCn",
  "key26": "5DKiqz7dNAPrP6osRPtviLb6NUW6gHJ999RLzh1vFe4ksYPDWYH4vWkXrXuXgcFhVD1QkFNC3b1GuCQk3diiai5v",
  "key27": "VYKEe1ubZ95mGNYn1JMTgCLAUKcMtvVN9MmRgq3Bsu5kZRGUX3cjVKksmWpbMj5Beg5cXhGVRb5imofDieah2Sx",
  "key28": "45LFHmyWSVtriuQA1Pxs5aZwebc4TAfE3Fgz6GoXqzzvrpZZqBHzvRgh7objCvhdxffbPP7dLYywfCkVrZEAox84",
  "key29": "5tazojvZxeMRTi527mcNA7qd6FQWLmz2rMsFK9VmNWAYC6Gcm7qq76Z5K8HZBJwDdTMJi5iEAWbuZrDAx5TEgeJG",
  "key30": "2iqkKZEcoB9DZ5nTkk9muUn9uGojALKRGgT5KMdg5zKGn2ESZXgKD3oV54kpecxrGEhnsxYPotkoUpba41nWH3ax",
  "key31": "GCG9m7rJhXFrSNr8o4XHRfFXMkiRsqayY9wVYxw9VBKiUerTXEcvs5Y6ma4CT59f4haGRp6irNcmU8RgWA9Rfpo",
  "key32": "2kjs9aTuRXNacV1HryTSRFQ9VPJjnHwbhrVHwzGvwEn7ZtanyPuQcL3YwNRdEoMNmziPKeKvLD3yjVoxZU5EvpTS",
  "key33": "BpYjETD8mANXCX31G8BH2GKQv2WcRnPx5Un2f8hmHHAzKxqQKFTGXD58fNEFoDfUes9xogmqT9tq2n3EzkADNQD",
  "key34": "2LNAa4yjM9unPqbyw3PG7GY4e526qdB5rFaLY5AcbDG81e3avJAFRp6oEw6KueeRSqaaEw64xoYAKZvgP6Q3K7We",
  "key35": "5wuDAtHNrKr4ZPutVhcvsHdaRzMPpWrSRaFceWpFKiC9tdERkoAdJBCssvhkAJMxVQJydPFGAruFdzdjwDgZJGRH",
  "key36": "5Sfr9odckToDTPiqWxaafuPPWkwJfdBUfgXCF1jrzzjAF1r8nSxnBRzndN7enZmeRyRgjdUz3hf9qF8Htg3pBGBG",
  "key37": "36SqBghkUgrFVk5oZwRgkqXdkuzxFN67DN9GrCgoopkMNB7KwncYFjKbNAcX98ugftrUjRVhc5hjXiyy5UZH3rp8",
  "key38": "55zGh4GTLwpQnc2agqbVjwAN2L6BhnbCyqgm2ZdZzuNdk4CUKXA7i3NHuCxwU5m72Q32Pkce7WgEjbvwpB2EKSkz"
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
