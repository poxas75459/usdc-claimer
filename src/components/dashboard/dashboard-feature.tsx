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
    "46CRSznUSfBepLge6zB3jxycFX6RPVwJRECpyVE5s2nQJdKqXnYABa3QJQMtve4p76f29yfRz2M4GnhTgwUvyz5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u2wr1ZkvWEBoajqvoRpB3u5A56CgF6oz1U6QVSYMymguQErZHkXCjXkRxxyDdxS5VqugfaWfxP5h3W1MpS6rZiH",
  "key1": "EGocMxAdSz34G6CviphdwQ1aYNxcS3bUn1Xu5im3aYeEfK6UKG69VHgSAUReq3UAP5bHXUdQm9awAEcRGYLRSg3",
  "key2": "5LquM9RjTUtAqSxNhPsxQvrjtrsBsb8CwKch7GTQuCqNMREkXRoWiAZycNBEGdTL5VWnxmZgEg5p81xieQpr83HK",
  "key3": "2tstZdogniTHodMZYtXFLpNgT6r5eifQNXpizbqM9eBNLaanu4h6a8ZVXD4GeUtzqhhdzMZc9HYaTgzyxGzgWXu",
  "key4": "3x4iPGQbX2C7czQpB5aYmFRGUApKNBmakVUuHsfMTQg2ZqRA8jd7d1Si4P1Umpgs32kNN8sh5QvSfsUhyWXbYv1M",
  "key5": "4GG9PhHf5ZT6HjjfpQtu9LVxEssq6vUEynwPfyCy4TaGYHodYny9P4xRv5MwSfiNrmFC8z2uDSoMWNDWL66dk32d",
  "key6": "58jtfV8PEddk35bVd6XpzJU5rksbNw3Cfrn8KpVrh5o9srFjKntXbprJVQELjf4GdqPVkG4Zd76Au9EiZRd1o78y",
  "key7": "2E93Yu8eLZxuWFokjSzM5svfNQ7wCxDaa5HDzjqehgWU4JH9tkKba3HnevY4dkkjjRXSaHxA9mDmp6Y6gPrg8FQn",
  "key8": "4XWwgBD5sq2VQfEJa6yvGtwo6BB3WFtMGe7pinsGKq9LhW3uDUHiyH6Ch3QreFjGhjvGK3MnbGjaRmPeCdNKoqSj",
  "key9": "3BxSpaDTsjQf1gTDw1nX6DfaUp33dcYb2FwpcdVaHjWZVmKde4qFWBLsbyCkyyQTWNR7y9Msj62QZ8a9uNPM6dJt",
  "key10": "5undLVmJbCpYTcMuNW3zH6DaL5j1uaGLMS7KbPBU2vBYMExhRjFqu1RuoDXdHqhVgvYsHESrcxnYE1UqDYg8NXXn",
  "key11": "4idHxAWT7baB9a4ksokEYx4QTinYdYW8CjWd1g4ZXafgEiEV8QLJReaPg9fpmLMjUQV4nqxwBBLQbgp1UTo6Df5d",
  "key12": "4FLQGGKiueN44qkMHMDfQw45KwE2x1RNdn5eHyTQmsyUs2qkVUmqGzRhvmec1gGbAaKXoWijdq6BrrSaTzHuGaEy",
  "key13": "4FanmwyymS9GMtxHLC6fsofCF12VMQ4gcDQQLaqi4r11kzWViggQ84rDvGzDeYAvABA4RCgjXXTgwcPjM2sQ18n6",
  "key14": "aKoM3w9Wp5oWwgMgkRoiFWMU5P7UtLr4hw1pHFYRXHSSL8NwKNxY15DSPudUerP53SoySyY9X5zqjrxDhdeT3Q7",
  "key15": "5YS1fmXjhBPqxtjen8VxyZjoYPw52V3mVxcHX3xv6R31Yb3Ho43QhdgKjLmc9Y6DU34sWGw1W8qqiNNdGnccuRcW",
  "key16": "44UraAn29tS4yUjqPgmxeu8SZNYkwuqR4iph13X3cVyF77C2b9UGcDdqDmSQAvaWmbd1bvtNkYRuBf1t6ZUq5G1M",
  "key17": "4gUgHK3rhwjwvgi5VPZ8qXfsnKV3ii3P7AUkARuiHZfKtHEhwoh1ZVAu9H2ErKJ3gzz6sKhbiLtZqJKZsQ5dQRub",
  "key18": "9NBgpBCx4ktxNZJk1dXxKUqSu4UmDmsgh4bnUxeQDqHigat1oniZ7DUrCHbx8ndQ3sbwN5u9W2KrM7VL51Lg9KX",
  "key19": "2jC9jA3F3gfjaky6xo3CriGBhaadZk2kdoNS9VG2oyP41SdF5E8LYmPhUVjNbepaqTT8ye2fJCd4WAUdM56GuBtY",
  "key20": "2AdmYrsxz9L8V8PNEX11rrMRm6ZL3Zc3igcMzK7ymsXgvJcTYWW2iCvB1EVKNPHbpTjYJaoig5YynA6r2uAM3fmM",
  "key21": "6jAW3BkmqmjkmgBDJq4hT36zCPK1bxf2Sh6sMZ8uTxy5eHUDEw2KwWeMvneMLVRT1QfgaYi9brhM1RkoSkrocVY",
  "key22": "4x47KNg7TghK7XsLZdnCcqhwuvZmdqUujqRxfsJKoNATYsCRnRU9MYvh8Y8F5Ryok9aoituC5dgsxq267g8U7si7",
  "key23": "3ZQiSDmwLYBBgDxsfbSnkLaQhyuFSHu67LyxUwJXA3yCTYnNCtnRdrVkKgAUJrp2WKfFBNaNZoGG3KzsfcyuyZHK",
  "key24": "2oZSckNHAYtknkZGYNxYSoCXZTutUMWPHUNTN2raRoF2CFJDZtWTmo4uSpiTFZ2pHArkr4cw386kK2beHutvC5rA",
  "key25": "AbkCbQePzGGxWnjakvqZaJ8cWxdCRKHzwupaY3gMbd9ePexghDWWZc4oassN1Ri37rST4kWvR2qoD8L4Jb4mBuX",
  "key26": "5J6jZg7K7TqjRrS7rz1KDHioacCE3UH8KpcE9aoPboV8G3Tu9p7mhJ4NYkz6pbwSotJnMbQHjZM9uD5mUYapeieY",
  "key27": "3PNkoWcquapWDj2kZiggHQBxynBNVJEWsiFZXmEBq1RvDiopesmPnzLmdbvtF6ni3Xiu1ifP15fUo4rFkS5KV7FK",
  "key28": "54R7GGm1KWFpagtq6c4ySnzwXPAdV2ppwRAbLgwaxGH4vubHe532qXUjtxSMnrWptDThTYmK5UXWZ8kFRPks1vFT",
  "key29": "54cGKzxLFRqd1dJ7rcYXnq2cqCxHVD5KW2ma7xQdzxDr9UBvm657WKrBjqVTr4BkYK8ZHSdijRYtZym3GpNDpW38",
  "key30": "jFvi1JSy2P4T6UX5dVJDTAi9jrkd2SBJvB9o5xDQdayG5uP5vyYbxL9nRPaKzADobySNsV9R9vi9sVJ3WZaYf1G",
  "key31": "3QSTBFSLN6Wuy48K1faSNJM7NKEQ1R6hmfRf4YkbFqRCD58hJdgh4FMTcWv1QYWCe5h996NprfhdNU3x5kScZEa9",
  "key32": "42qnxnGjwae2gSkdoXtG8Y2RSNM725FFpvin6y1nrTmeGrjyG33Lwq6BThAFtgRtWZX3goYLhstDjJdQ2vkS8ndU",
  "key33": "2VphTXya1vSv42tseqNkUah1Y2pYvEyt5rYn8Gdt2agbAiXFfYrNUqTwCAagcy6hhjh9yB3CTY2VEHxnFsoV6yi8",
  "key34": "2XGNbnMhsbeMZZCn63FvSQsFujPBWBbCDwDTqTWHakM8MypfYF1RBEoXfVFjFpXEVoCLbLNan6JSFrY2i9GkqhYe"
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
