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
    "43J4PMLmr4Kv86kvUzjjsiBFoC6E442gpun5v4FFUcB2Lp81mVzSv5kUCC4MwybXrK2qWTUHy89L5st911uTBDUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJE4cX9C8XwK7bKvZmiSBrDWS9h4e1U2w33Zq7FE9NzLdUmMBMz5T9PamBwRxp23NU3rwQsfCKiwG8zUGjcvnkD",
  "key1": "23WRrmSCLg4ohHdt2a1y6e5bKmpyELpb7TNgyLX7sMBgTmnLLcBL3R2ecg55eFo5VnwvztWfvFXC1S5ctrkG8w6t",
  "key2": "2RyGnyJ5LG9rHMpWQnTGCenJpCaBf1NDfZqBJPQ5ygB3YkT3f554rinnS6Qd3sxiMqEyMPHt4kLob4S1mHAZ5mrk",
  "key3": "2YFet1z6d37tW4i4E9bfggJB16A4g994Qx9JuNYntDSRervSMZbqNvDuh6gBwjhwteZqDuFPxz3hJuT6mfdHVRYA",
  "key4": "28cqvuVGTD5QGj5NL8GdXDR6hsbegkD8PRwWoYrMoYQ2G2VAu5wdizTaxgaNTWPwWkZg8ZqeeF7J8hepEPn1gdRN",
  "key5": "3PhtQX8iPR6Wyg6YPnKfGj99KpuzacjGAs3F6qpiqTr9F95qJEf392Rk351PirVijfJY2ca9gdN5PRhKQ9RQzwz1",
  "key6": "4E46bhSuMxJtNyGaVsKPsTS3hGxkDed3sxvJgWDtfqSiEYGs3fSXDwDX25993G2cfv3D4r4p3QrHF2dxK7GNtMVe",
  "key7": "2cV7STf3vad6tRa23FcPtjjKVFs9k1s5QfNrimJzREU2JiopbLegSNNkEGEDggL2BYdLGUDHNGTtv8vhfqrvcmMK",
  "key8": "rsi34qtSAgq9HCXjwhQKkKpkDB7NWGoYyvxyKcAJBebHbsSNWH4zpusJh15WiaDxZsNFabZ1Te9PutwiHtYVVNo",
  "key9": "5rDrwCGDFVfyrVJqFosuPUsE9Y6veL79cmw8sUQ3CxDYisZzpB6T8ZYohEcNZDCL741Z3jL85xDz9Rez4NpdHJAs",
  "key10": "4cMH2RbqAqpPoC7FYkEvujQMH2noDb2ac7RZ1YYwoG3xJKnpffsPv2eGWfeDSUfkrAMRMovNuAcxWUxeWVzuEdTC",
  "key11": "SJ4TgRi3MMn4VMrZzkh1uux7HS599ahcJP6G1nTkimG5z2RKsFRyLKSHbGWXjoLkibXJymjMaEeJEbJkh6FQSJd",
  "key12": "4oeLqe7311cmaTV65Yvd8BHHZTYsiokZwTdFLqoCFm3MreahwVFA7jZCGPuvukYEGKujRBsBRbYxa2ZWdWRZTxzT",
  "key13": "3Aok87yGxtzZfPZENXQEuFosN2dsMp6EbY239SgiR9SHygzYAn517a7xT8qNi8yrZNSX4jLSNYf9aJY3cLFiqP2X",
  "key14": "52ARgiYgFCM8if8xd37N2NxExdEDvoyi9VtoKN9VKxzsKUHSwYcupSmvuSno5H2GtLocLhkLXPZYPJzw3JunFLJJ",
  "key15": "nhL1fRXUecD14QYfSe86tFgPYQmLF5a139ofiiAKC7aXA1G6wJw3BZ1g8acfS8NiYYgNU9V5usXYPxDfhiB4D38",
  "key16": "5UzCddxazGW6zmVVDTyrXNtiSeHSdnCCzXY7sbHpV5boRKnKFjVo7TizkcMfpodrwE4U4C8vgRCqzjSzhpemosF9",
  "key17": "2DdoNr2zix8g1dtDZLZDWxPmuiepbdFBZmTyV57YhDxandf9JYX8ebpJW175WPS41ghZu2KEydREZbrHWmqJ8jNu",
  "key18": "nAbTeMvdtQy3C2NXtJXdx8g12BXJGkjWpBsEC3askRm6K2g9czjXmYdWAQyJud54mpnX5g15aY6D6BSvAYvod7q",
  "key19": "4js8DJbav1WjERwcySSRWpQXfPKxEdZiDBzoXFqCrwQsyGmBneqS3Sqo7f4j2X6g6GgDCXnLbKWxTJrsNh7bPNBW",
  "key20": "62tgAkcwFWnaxinZ85pVGy25SaKeU8sDT6ZhbDQHp6TsZzTRXnsoVEna5qrSPpJoJwbWdV6h2zqqtgGMNhyfDtTv",
  "key21": "PZwzH62vCeiSwEzjv2kWkUFrncFg7KacH7gNYVTqogKaYimN6HjyNuC9DQXhyF2zMxQwN2DYPfcH8TP6pUwZQVC",
  "key22": "3NTHTaaxewmrHaKFhQhDbhfrS1egqFsPe35mXWLPFgzP8MounfZZ8UYxzLCeftUacPeixJU3gz5KYcYHN7BdQYnQ",
  "key23": "3ahN3LUHqkyg2C8xeqmGXqH6eptLKFEtQN92uXNUMBy4hYKicroSa11KJoRBLMaK7cN3gBJEKF55H835r5xPihUW",
  "key24": "57UA8D72zmsmtYb4itQkfLnRFpJqkYyTEKkNmmoNe3f7GHnF6VbiPhVjsBZyGiK7YYkEo8tDtk4Y4psVZaSNZar5",
  "key25": "59TETpruJNv4jHtpwSNEW6pX8aVrMH5fsn8z8nKS1Rpu8HeJxfZRW5QYp6QZ8xcyBMx9zZCVrjr1NyJ2ZKHCpuRv",
  "key26": "nDsuwScRxcHuCqA6T9dMkivcEucioGvZeWLu5XpRvTTDCwL6vcKhyp4FQMgN9T978WVhCws3P4tkSG88Lh6HC6R",
  "key27": "tJMMgyFd9VUEm9TKSYxxWGqXmEHgR6b4jpEXgjcJazftFpnYnoqyqHUU84F4y3tyMxUrderZAQsRmpFuC6EGutX",
  "key28": "3R3ax7vESwNH8au5rNFgG9vDGHVgVCBAQERgtApmFJ9BW1E9XRvtabE634suFZTJizmxSuZKQBTS4f2g9zsg351x",
  "key29": "5PqosJgn1nvbiCBn6M7zuJ4q1VL6zDEuYXDnV1ytqpt32CoyFMv6STvV8T1rzLubmRxGWSvGRmNiXY52ubTLQQZ4",
  "key30": "2qW2qZYDA1ezPbfJM1JxpcLjYnC6JRiA3mWa6eTxsCMDVMdQQBbE8V3QjYkjXaj8menxVHjpmMpNrvNU7SBCNAY9",
  "key31": "5iRxCvsAtfyfPb7kFxFJC2ZviXM84nykHD5QYeDoFnFABqd3xYSndJNejMGHRWK7yzskMnx1fa6myqZ1XYSE2Uvh",
  "key32": "eF17PYSEEKjm58XQcJ8FPGJ7LMEikATmWZBoWTSeFP4HkSQ2m1a7k1nBV5wqxpJ35o2cYUWBFsXSMqpigWmj57t",
  "key33": "37994tmHHxVWqfJGkKXgaPMg8z46qppraSQXqneqFk79twBpgDPzyxEjRaRqvieJ2d9CLxPoF8HKfp7uSripkHdP",
  "key34": "5PDAtf9RLPjLjTYJozBzWWDLJ56AeChxTQpWVeV2ewMDeyJV72qCCkkYKPQQsd1iB1jWu8BGX7C51zpTdQh2p97N",
  "key35": "GhkGG1tvxM6hCikxkQPDaF3gve6LCodgvTwPcSkmZ59SPhx7vKAyzeeJbm85dvQrp2CK4XnHsCRJPSgRx8YZA6s",
  "key36": "5hyMa9S6YbF1u8XDyE8fCzBxaTzw5xK3cYHu4JaQYq8KwS2RLCGm3Nvtf4nhqfRjujoZoAHTw6j2LwD3UcbJxRq7",
  "key37": "JwPRBb221X9RFi4rm5QFfK4z7861UkvKWJ7cgz7GHuJfPeSBWPu6T7XEG9xH5JNPyNLNfgTbYdVRnDHeWmLF6br",
  "key38": "22pTjdPxurCnuUTryAkApC2yiQKYpgv1gh2GpvFb9GpvuSYpRHGkeLXtZcjU6MKqzCTxmmzxULKUEA1LmsXBQUbd",
  "key39": "pwzeXKpNkpPeNxAAUhxanEM5JiPwFgFRppdzgJvsrVBUGLWh8Hn6rF68qkb6KanTV14WrdZ63CNK2eHaGK3TenX",
  "key40": "47BosGHnUgKSAs3yUAK4gq8Q3feyfsqxnGCHgh7m6svQmuZkFcBqb6n2NWLXJ9GRRz4YBr86GFgnfDHhWcTmFqBf",
  "key41": "3N3QETQeFQeqPQpiNxbDHkqEMghPxPNcq3Y9MryKXvYFrmjjTtu9k9AjCMX92iXXTUYN22WSz7iaECFevUTHd4Sv",
  "key42": "4RNK9yBZjsCp3eDJWY6aF9RJ6B1bn95PuPtEVvCmGTiejRZZqw3PkifbkimaLnUZzdARXHRQLn7Q8ptVSoqwhDLb"
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
