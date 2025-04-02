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
    "2s3grgcfwiTBRjGuUL3Bi43C4wUxwYDZsG4McqurWStZveoLyvTZ86aYkTmdb5rTmHvX8mBiiBKaF59VTYb3f1e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TBxWQswF1fi3JJfJUQtMdfgrHfu2LvTRH4Rq7dZiLidiECbtAnsLDkpHXZsYM3ZwK1mcW9yf4NWd1AiaXA8KDm",
  "key1": "3KTQ9xvCVbEqpABmvWk9Num6C8b8nmKtxEMUz5XPPHSDx6tykDD51GdGKMLKLYrGoat4Fa8wFZbwF6od7poWciBe",
  "key2": "2s15EUb1qT7kBJELNxDATiJAKhN1zPivsSavy8vekewPJoj1DPJNg74A4LgK8p5ygUDy97s8yF8ZBFtnfi5t9utr",
  "key3": "zdFJHL98TEMd3ihBRXLj4HnMEihUfpYrs3EKJpnHrfZWxqnRdgEYeDds36mB3fDn4giSs4s7HRk96iJWsMRbKQA",
  "key4": "2jge39sRH3gsBWAkg6iAm5KinGEGgfkfckBfgioPEcFuA6bMhzwRC7dAnmGTDPFoPJoN7iSDCnn6oQhBR9wCLeHM",
  "key5": "3QavF4ZDyJtYDSWzXtfgorQCf8auk7oqVhWyMav6Rw2D6aQuoX2jXxjrxbr9TgXofGx1VpvLM5ut1Uby83DpeKuP",
  "key6": "5YNMN4GQ29FhvBh9bspZSZSe5LQrwQUpb5HRa6JFYd1ekvr47mNjnKxdX7kX7SEVht6sbPFeW6DzKzTy7QPs2n8E",
  "key7": "3DEJsWtcar7fQbgRTLMZTyGXUkxDLETxnPuPhbhdLNCDu8XS3uZJTArmns7yrDMs4AJByZzUbTykxMv9QZVW6DeQ",
  "key8": "UrqQJ16GcAMWv7YMJ7JTVkduTh8QYr3FC8FiEooap8GRvMzLUKgzFMnH2SA5w9spXSwox5Gqdtri5zbGbQjCjcN",
  "key9": "2wsr9kAFmLAS7VShS9F2xh5yAnjLYeStQpbcPRMHaDxpaBB2A9VkHjCTWk1sBR2Aje8dRFwRY4zeF1r4gPTYhjwd",
  "key10": "48Fvsor2q7mLz3Enh8g2U7RxtpzTpB8W8btjJ6MQWBd9ijbEv7WkQDc4WXHPchmq9oKg7MuM8poZTJehjiGxUpSw",
  "key11": "HCK6PSyjWJxwz2PjVdXJ6WZjGTpTp2kT5eusgndVDm7Jp4XZRi9EfHCnMqLLYuqd3PeAnLRTGxNzbCDmFuFS9F4",
  "key12": "DSVB93fhEk93uhbkKMQFiWNJrNu45guSDUZGTHdo4X1UGnFJNQh11gpTwoi4HgVsidfrEncXTV4ens2EVuDLKNa",
  "key13": "2gxaBMgPVcSbSDwySck71w1oy3Y8brXe6bnaezKjMThVQMhJJqi3CWuVjGhbbd2od8wVUDJ9etchgiWVrdt1r84j",
  "key14": "4knDMPMBhbSwBYANZP538qGrmFrWQTRH1a3hybybg4wg1cQnE5KmDuS2zzusQjx57BhdBGozBFaxqQ2Eqgsjz2Qq",
  "key15": "5J8carvWSCkzjx1kKD1bHYyJyBTNdKXjdwS6JtmNTLY6qfnXwerSU8aqDgL24QCAY7PuGfW7LUfjqz4vU9AHR188",
  "key16": "3wGMu3FLbK5i2GhjoKCAx3P46jUs2382WAXoqiKoD4yjcKUrKA5bAUAF12zToq6Y6PUCoERNpapw8Qw7S5JRyBn4",
  "key17": "5drYd4B2jbJ8jiKikVgjTNmtEEaCcHUFEUMUzTCrggLYgkBzftKTZrBt1LSxpzuSyYwbmiPBWsQeNUVBRdZx1peB",
  "key18": "2c6KQjwJgjLorx4NK1TrxaDeiCzSFGFuZLa4ZbS7HfsKPrCQJNQFpAhrjbBaakbCuCAE9kHkS9SRzcrjcMMYykUR",
  "key19": "8VTAeX4cbw8n7kNcEKV34TD7rYBjGYz9fYebJCC3847fYAiFVjgEqGcKhhkSCs9Z4Kdcf4XYeXzeVU4UMfte4oT",
  "key20": "5fLJBrKuuEH7A57CVZ1gwa4zmVR3aMVvEfXrExdV5nzz6pNUKRjF1bKBY9ayb7RnPPeCp8wYgfkFQXEyS781UEgD",
  "key21": "ZZiu5gUdk9pMD5P2REVs77B56XcHA71iWPvWRLdhd5Bre8DYm8VgFS2F1i98J262fvyDvMeco9BwUJDvWwmHiR4",
  "key22": "2xnxtR7x3EsihrzhT9h3mUMPq4dz4tGtV7a3pkWsVCN4vNFs3fmkzfsMHfAhZfGFpc2piJXe5N4QDuBUhczAHfKp",
  "key23": "Ke8T2FpZQyj1KdrWK3avr8hSnWEuhxFxun9vpPekw4148iSsbGQe6d1wDq31hzsg6n9rEbTyTx1DGqL81dbVxR5",
  "key24": "3pUVYDLGFx35qpigwvg4hm2CVmbDCUyM6GZjMgq1xhhFiCVEZpfb1komfAEdkcFh8rsKXAxZjXwaczFGChod9rw2",
  "key25": "4vbPKzHYNoe6Z76GvbKAuuoPwEiuD5mFAfq1kow4Ym3JHYvMBNbRqaBASdaxQpUwgVsLgZvAqJSVyxCmYWwhGXi8",
  "key26": "G8chu5V4jvQrcicoYwc27V7noodu8wkDSvssgyq1MhJAYJd7BznZf154vduzptSn2avP4UpmGYbusoxEckchSb6",
  "key27": "67dHPrkbHMojYSvGMXwaycQxkY2F7AUwiCnKqughza1WA7jjqLSmzHzUpfD4vzMaxQEW19hdjr7Z8bDpNE273JjB",
  "key28": "4PxwdS8zxBU4dZb5PzY1cV5ZrMvWFidWj5wYdYBeVAzDJJYr6de3SXpWYqfAgZALRQf9tMyt3UteS3u7sfiqe5Bd",
  "key29": "zYvCy4Gbf3yRh4MnZdzugNPrpi9PBM6hwwq86SCJ1D1wJfpfAerAU4yxsDrMGpFcqNZ2RN4iCxE9aadUxeyZvY3",
  "key30": "tqasWUNeyRdLi3dTnjittx94Mo3WLm22kqLLfUhXTnuQ7NqkVsPqWxSk7sGLYUP8V7fSRar4cB9DGCL4G72TrNa",
  "key31": "4hyFBcA26q7r5TXZSSR1wErgwzdLBL7MvAGCZzZQxLn3Ai4CYGZFWp2SnS62kxMQkiB3neQepqEueN5nevdx3q2Z",
  "key32": "43L4UL7HwZyjraEBKKQkdGk9y3Bu1GW7HCatMsSC6K8mMydBXwVuEPubNuRb8LT3i9hwpzuKH9AEH6cePu8nGETM",
  "key33": "4crgEsfE7Eu6pq8Z9kCMSZMwQDxJDMaBTcnjdEdSSz8g71jygXdCRNzcCToJDUUUx6omY848yYxB6Tg2J4MXixTc",
  "key34": "4R8RRx1cqAXqMdxgBUiqepbhZsmhggHbw965Whn5ufoHFMZKtV1ZvxgmF16JYPzcCfXzK2VEDk6BEiJHYrxKHL5e",
  "key35": "2e2RB14CPxGxrRggYuQehbVFxmayEMgoZ1vi4XnfHbuGf7Bibpi1L18Myju6WV4BzummU68Kap4MAGRFBn5jS3Nd"
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
