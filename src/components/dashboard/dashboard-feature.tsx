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
    "2wLTnbAf1TKt5cKAf2niU2LmvvdonnZDPJkZA2ckf2QBrTcnsqueYXGudyB8cZ9X11Mecsf9rU51d21a87dHsdph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dkW8LyTZ8Z6uDt1zSX6p3dxx6hr6xoD9nopV4ZikSZh7CpAEczygZMQ2msg4q21MojN9kUaXjr13dLq7cgttm3",
  "key1": "4WcqrQWjyK1Rdp6U9x5dh3cF5tBKpDCYLW6MJbpQSy4gaLrnwhgHMQwB9zQvStuLcxpDHCV2YkLUMRM8vGwbqRg3",
  "key2": "2Szf8uX7H26vQeSEqUd3ZP6rbifFHFJh6LjwAkhXbqVfGffhWFhfbJKJgPYMMZReXCP2znsukcWQZSd7aLtj7QKJ",
  "key3": "2c2sAe9tHT8pnkL7JB5zkWbXUyBXUACirf4j97KF2UBhtoVr3rR7c7uNaP26tfMbgt1k53KQAsU8HG38EsGtNRyx",
  "key4": "227K3fFGnJWEtLGsFaejTdSS1iT6pnBmz5mcDsYhKYc2Z15Gjehw9NC8qQAAZJzjF9p5g4DiqVdceAW8Jp7Q9JL3",
  "key5": "4pGtR4YrLniUAybAjxRc41xSmFzUk5sEfzGzkS9xt94Vco84QcYbag2mc2Qe8GqE1FS5Kh6gPwAo8dZw4iy2gdd2",
  "key6": "2Ei7epyJGdNoUbtB3F8jHaoEswu1Y7WJdPgKjiGPfK4mEsZqcCxD3thUZx2u6Coqx5QWtUQ69vHvX75T7zAqQwTo",
  "key7": "5dAYr1rbJRMqUnCHs1waoSF35H4fPCh6sEKA6Yb9vif1Pdhk3G7BqBgNHnNynAwwpoQyc1Sz8w5FSq2SSxvtZDYm",
  "key8": "ygkhZBu5cHJkyJaeDDsBEFujGStnD7MXMDYWeS1FqSbXBPiVmBasC9truFQXd9MNHkWQgkT9qPay9UBPyBfdhXd",
  "key9": "2MVQA59G8uVyWzN4L2R5jTpN4wT73AEzhjXD2yG6Wzp15xwuH1ChGpQCxZAT4eQZbvkKWQqyB46Q2rZCBXaKQMrJ",
  "key10": "67UEr3yETN9sJwFHuA3ACb1H5MfTLCMkUMvXhQTHa4MUZLEcf4tD3oFzE3hj2o1FfAPixd5GuLBE45oMi5jUwkLb",
  "key11": "3ASY4HWNa9VuLJUyBSdYByc9wuTU8cdgKVr4uhzL4yffMEWA4Pvc2LiKeK8qu2ERTjvM783btrANjejMWAyzq94V",
  "key12": "5XGtNeYSVkY8cZUxfKGexJLdV4Y2EDtRu9pzuusw8m1PbtFEBHpqXCS2BE7ykCATcTdZB6S5VRGdXdJZXz6TLYFV",
  "key13": "2hzv2tFvhoz2BZHiyfeYWxqoJTyPuu4s8xQsJmB9ccRetidSiBUKaBQM1JHd6uqCPBQmmvC12dXCq1sP1hgbC15W",
  "key14": "61rCLucPRhRexZpkVVK17zHyaBuPGxKhZr7R18SduXmeo586tLCNHJuWDTaNysdQaGALZU796phUqX7U1Hx4D8uF",
  "key15": "5oPMHapNUHq4qFirhpQ5wQ8hUZGKGfDwGYnMD7CqHaBvx6n4BCEEn29Et4isqhHFF1Y8N7nNhgZS8V1STCfHTGJj",
  "key16": "2LG1SsinHZgwch1XdphcwgXqxtKYarsRp19Rywyok3ovWEKoZWYAg4AfQigqMzMLbqfMBG3r5a3pxdxYJiDyhJQ9",
  "key17": "4BiSFdx7Fs4F3SbPGUWeVQyBtQUURChkPXwZM4rzhje71Q7F5FqLsLMqbwqeNTjFUFTnqEmGDd8qatkHgBENUdAg",
  "key18": "zTT36toD9r8ULVVqmxgXjj5CDsLDfTuqcJnEapKif7G6h1Fr57aGSUWEKDi5ek4t6PMSSoJyZrsXP5JVYv2kSpY",
  "key19": "2EetU51qHoVUpTdwrHrHGXWWj9RjN219dEVdrhBf7kyn5Yrp26iUre2jzPxqsA3U3ZeGqSL5T6ChyPzpF8wa4Dmq",
  "key20": "4WKbJ9bM1GQgWPmW9cgCFMxbXo47Bixd3ZnYDVKmqQueGxsBm4gjzsedgPeSg5BE12SCw9wPhcHvLyLD28AKsiY1",
  "key21": "3b8g8WvJVAmQGyFP1WxJEqW3a7XLGTFN75wJn4rg8pmVSuJWfLQ1uQtLVWJPVW8u3MnQBsNbfMaY6BJzv8t9ZSkG",
  "key22": "5NUQtFiqC4yKhvBjrqrqf5LAHz85sqcgcvvdR1XeNjB8qwEDyaPvQG3Mmkx9onNX7JMcSwQBrGX3Ja4qxqwTNr6z",
  "key23": "37Sd4JXj6pwxpr95FWWigxe25iPYu5Ry6NRoiXiy4PJxDjHCVDUNe8iEXrGUad9P5SjdAhBYpPWxYS7eosQAujHX",
  "key24": "2Bj2wKzT6JTMEsVGdFDsB8mjLBp9h4iYmJ44DRftucCnjL4qVZ5iZbZ1gYi9bZwGjtxo1JGZwYqZ5gakPyp4QY9a",
  "key25": "3JXbdJRMnz9fpofgswf1jcdrazfJ9p281moahmVBnQUUbWZkmkDiU3e7TJm8qM4xkhJDZL8jLjJ16tgN4V9CDG2o",
  "key26": "4R7WKuYehhu5c4iHm7oqFteWgyxZRNAq66iMRpxGfhrwpqFFJGdKSaHHtDK2koQ16rgaee9YWu5sgccpVqupjikH",
  "key27": "4uDzwuNwiCjUocLCKtoCFUVvHxSe2gjHbXKCpxNn7yFvR2Kj3hqQd167UEPgTytPk4vVRRMvZA9T4H5vZVEe6Fdd",
  "key28": "2brQRCL6fR2b4sZU7uLX7JA5iYfUjYVpYG9MjRgZ2jXjR9yP9MWNmKqqZ8uPJKfW2GdiKRMDeJwbV7zYPZ3JocTh",
  "key29": "yRWBe4Jyoz5KumHsq9J8r49i7NwMvKnnSp1JKvSfpauUG9td79fxYan1gDvx5TzLqViTRrvDMwvab2TabztJvA2",
  "key30": "4wRM3fSwiaFKSsHqMW7mmTCYYTNVFGiMn9nvehPGYKonrYFKxbWox7CZaCazgxBUmzQw6g1bZhQjvnGWs58JyCV2",
  "key31": "4fhjTNLP5DQLKf9xiiSrbZGn2FvauRuPyRa86QrYQXSG7Mw7kveg2KrmUu32RbLe3GenQwqnV2FAF2M7X9wLHmEa",
  "key32": "ym1diR2oEN5yZqjN1QtLmhDtHAykCAMr3nU9T9rGf483mRvGMQQqgbcyNjXwsRj8kxWZPf3XYairDDGFGzELNjB",
  "key33": "AHEvM7rgB9Jk9Muj3fLjgRvWEacFurCacSGFDHVPCEAoWjFihye31KTw5WzsHpTYcXPqgoGNoZWhCi7St8qgQRE",
  "key34": "qQGpEgibfyMoktm3meRZ7bj1923WhCWv1MTqxAyy2knY37nEuLiZFP9DvjDwpa83mKf41stwL74TMxsChR4qSMe",
  "key35": "5hJowgLtdUjaq8Ag4iTeicWt7ACHJjtsDAyVXzFrwuQBesirKiBz8PCJsxUkfM9PCdL8svaQHQpKUT9HzRogpRCB",
  "key36": "2GCz3kQJi3co6WmuoSh9XhZwUJB7k7LsdYhC6si5NGYMsJDA59zLkXtGtr9pi39MBrPK5z7tgSamQDhitWRZcBe",
  "key37": "Qr9tCnoQbNsazcv9Uy7vAyQ7ALgJptuhnpCvT6duHvaCNraCWSAMeN2RBnA3NwFtzpkvbXBXpkJGx9YAv8ue3GN",
  "key38": "255DiD3VXiHNEJbSuV2CZkvsHUE5nFANWpuiXjPL6HBNvEsfY2Y6dXbdvpzzDKNURLtExP5UHWMmekuweYpaKAca",
  "key39": "2uK85zS6hb9ZMpRa2eMXpvNLbx6fAnwbdgskzVAtMpgGzUAL7p2K8BxNW8ZA96ynazTrt8o3Waqqr2DkPApfJLXT",
  "key40": "wwqptEiiWhi3QAZL297VvAF1QZFLDjHvbYTKbrziTPaP17rxBYnxfC1im9ERz88mpfMH8bGb2o8ZHbhGFtfyQM2",
  "key41": "WsPAP5SFWNwWmXVXGcv5WSjdmBqotzJ1ciucP8jw79d4QZwkX5gysUhtHSViCNdKmRQZcE8DgYFtMJa1wZidQCd",
  "key42": "5JERm26KQ5BD7mKgumvxAC8qs5nj8wktuLQ1P8TP5KwvEBcw7zw8eLzDo5cVU7MHeUYeVThb57BhTrwcXfBo4xV7",
  "key43": "ccrT77CZdW67pJthNLhemYQoDHZG296PffhTZRMT7YpSqbYpbcNtAuCeAgDb6MkTQpb3L8zw9nks7x8TJsrjssn",
  "key44": "4K6PGkvhvza8SX2xhkALwpQBBWf3QGfDQ59ek4A9gs5SgrhyApMBpgtDj43HiijFCUmKQTW5F9SSVD1grxVFaKTu",
  "key45": "5jeybWFaRFMEv2UNRjJkkaiDkFh47YLhxktoU6cCiwwpcdvLjNtdJofQ2NZgz7A8Yk6sQc8stm5uUjRBS5a4GfCz"
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
