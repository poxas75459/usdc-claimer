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
    "5cF6WGBNN4WVi8EkWntSugw8ejnwv9piD81MHYf2xSrVpD8QbiVkNU1qTJ2466nKnrQt6cJcMFpLX3zLU9mnoK83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHZ6HEns5cACJ151LCWBVV7UxJnKqLf1ntVixFpUUHiATax1NqFcZbyG86Bt2hfitrh8Mt2P4quMiEcJM2ZhgEn",
  "key1": "jwiw9rVXPnjvWr2bNYrWGNJePYZ4sSLCgYhftedwvQG1wD3Bm7t3gg4epB7rfNafji2axFB2gVcwQwjzXg83nX4",
  "key2": "b9fiL7vRkWJzX3SMTpLkuV3eyCJMBwefEjwzgwj1WZujkec4VjAJskYGxx3jxE7V2ANKiM2Qsgcb9tAavqnM6GP",
  "key3": "52uDK82RWdRbDBknK5GQn33Zd8Vj5vgLqvQ7mUf3NBj7K9djUGR6SrRTzQkjd8o5UMcP5M7r3bB3NFMLK2yaDyUs",
  "key4": "32L1oKkX3iQC185squaqHiMsZwyg49dHgo6sao8zo2ccjVMJEtrLuv1jK12GKSjyA5mTHnYa6Cz4gcCH5mUY6qor",
  "key5": "3sZxFN1qzonwNddHPp3ajhE1zRCykWzgnF4JsDdt6gHPv5RMVVyLu8xexcdX7xgBuZkSCf7kAP9zq4Cx72tqRgig",
  "key6": "LYVjCDkaBURLC2fFAHDkGqFNh1q6AUCZoXMwg53EusteN4dR6GKUKDUibzYj2tXZcEYgXCMJ9i7CR4vku3VQ54k",
  "key7": "3N62743yZJ9XWsUJcsBRtz5QkkuDTtCDfduNARpFWy99k1mE5LbaUVSKahXXYCCkvP617FV7eCitbotCZ1mAXrPx",
  "key8": "5P9BayBNzNLiadsJ1jaj9pKVNhCosGEJt43CuoPKNBzjpaHRY4JcjJRXTjL6JbWxqzrtbp81GLmVcb8Te1gafZA4",
  "key9": "3ixJ12Wu82u23SRM67KH61bJFzCXc2gyYYVfYBnjF22zNg9c8naC7JMsjqmAcBKeKALrWgaiJJbTb798S5gNRBAY",
  "key10": "58FZzavgx5MvE7jvYewGmz5MWuFmYcY3kiHg1WQeBoWqtr7LMHaiBByERKZeoqVkxZpRDfkjGrp8beKoisVwW3GT",
  "key11": "423T1tCT7ebXJxSULT4zAxb7diJFX5vprDZihNR3s1gG53eQj9EJD9d3SaXSmin6qzgr85WG1FpENAnYmoaNH8vy",
  "key12": "2szUyT6JPMMq3wFwZbM6gKt8sCdYNUEHfhJSpfkdFYT6vAGoyBVfHNtMaAqZ7uDwBdhfcUcaMLQHX1iHP1kAuWBZ",
  "key13": "3chQVjJDYXycktQLwRct4A9pk4yyTpzJRKrPKzYQ8pKhWHFrwDzcqJgYVnLpZhe2N7tqXnJXZfzfBa5ipQZoHvLY",
  "key14": "4BqScrB6sXneRh8cEhATzprXQdZAMXfZbYAmoFFeWV7DQsu3MvEwX6H2NWFvujURAEmAS1v482XvfNePdqfLFB28",
  "key15": "4FSr47Yi9xLdMUagi5KpNJKxXhDbszvC6mRvL6YBGKrUMXXFpZbWXJt6b82xzEA4xLS7X1KRWz1hJk1Zp6y6yXRG",
  "key16": "28hShSrmEqHkSV4qKjt9Mh4zMFJAamytXiNN4wmgMbTpVdoLi4jkxijhFMtbACUJmSyuFWyHyd3P8MkWgRdjFaCa",
  "key17": "52cGvkKB64T1KtkQ3SNdY85RxS3sVr5FGJ77EhmiSE8zHc5u6cGFidtzhdGcBx47PgNd3Zr9wiWzJp5S2SwaGZ5N",
  "key18": "4x5zZLRmvos92nukMjwZSP8KWrYBNtexzFXgWcwvrfSA3t6LLR1G2BynwK56NMJV7va8CN5AHJqeir6VY4eYNHWY",
  "key19": "CYy1hneYjACQTp6sDovsUvENgrZfXmwhacWrgo7xKWEnbi8pj45U2j2TpGcXUJ3g9WGNCgejMcPK1nvMqXXZF3m",
  "key20": "2Ey9kvxyEGkbPMNQKXYS79UEVwWygdBeyTipJYpxx2gectJbFH1W8powSVaESEtxhKqDipDkSwTaGYtinYiHQo7E",
  "key21": "23s13fZkyL6q885PbRRq7ATCPnarPHWCCbMxmFvtUSNi7vbzN2f7djQZiYvtEdWuKXi5RJoUgDwRoX2S8cmZ4Y3m",
  "key22": "2aWjgXjTMi1ARRuabTakLXjWS1U2jX1kgHEC5c5wXyUNcWUQhtXPBP3C6hbY2vtRYyrw7AwF6Xt8GzYvJE9thuiy",
  "key23": "2W6Abqo64grSCvUm5XGHRAhh9uPiaTwXtBwAwxgY8V5wHGy8o6CsyT37wSWCmpyK2rAqzxbEVB6tRbnxoiLRvBit",
  "key24": "3ZBVstKdh64H6woK6S8yn1cnwzn31rJ96Jyrbm8JAVvnqTT8gjapHjEnuyatzJZ1gM6j5AnEmT3J6vnVbtQqELt2",
  "key25": "4SpvRnkjivgoRU85PpS43YSFgyQK7Nh3aMWVw4ge7HXYf4aPh9MKEMgsbMAzsSuX25QGD5McS7gyXhpga4ExQXPZ",
  "key26": "2MdhtEUizLHbJ7SZFaGvPHCVAj6W3ygGrZR3189LnNqarYS47VJcVg8Wj9KsFbPqsdGJuZJyFNTLembbdLoe4Dzg",
  "key27": "44YcvcGqto8dshgthL7VqJNtDLyVWp3drJ8VPc4WkE6tP6xSbXBMqYG9H5S65EaamNp95LPTcdh5sATCnSDTL4QE",
  "key28": "2StQxSCXxmyLkGneQSsdY5y8yfT76Ay7qxVfGAfs9znscv81yrqH7UTyJwFM2uz5dxnHDGfXw7RKnPYcMsa8JoPT",
  "key29": "5Hep9WrqLTTEwmBSi1Q62hCwAQEfWvdYHrGWJN4JTSGhSB4tzRKm8Nezw6ijzeCy8azBXBWUUCEXWzJY9XyGhu3t",
  "key30": "2Re59aX9saVXbLwQcU5vCcsxHXzEDF5a2QM4JuqpmDRGYCoLmEsH1neku69U8LWJ64MXz3kEC8uoDhmmzmzSqGki",
  "key31": "4SmTwyhV7R6RansfeyEiivMwsuJWnCLuBEFDUvJg5U9yUvm2F1QSQ4kRTihTiaNMoiQfxSpkRt1dTttZFaYd1yef",
  "key32": "4egXMN8eGYTaatvLGfiXfBz9sm8EXkRh8RwZoYb9MwXU3V2isvxgQKBT2y1K6Twb5B5xnqzAyE17afbyYG9jq19x",
  "key33": "5eBQJ8uABkHhmq293Zsq9LTEM8H2K2F2T7tuUnvPf7rAuRz8VGTPbt6553SWERSwZ4ti8cxQjf2w5eeevbiEoUoB",
  "key34": "3FcPpg65EQabEvewdQahqdHaxjhLsV6KJR6GNz8ZH7f86YjwyXbXQad5PCMYyNrdodm4twGPiRCAW5yUsSVQpc2a",
  "key35": "2VMPfgyAYow3sds8H5yourPwGyDxYctzjqJYLcogQA4mJTbz1JANeZUQ2q3oJFtif5viomamRUjHU5U2T3JLEXDM"
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
