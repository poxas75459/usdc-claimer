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
    "3TMhiq6m4gpNTpBZD3R2j9V2uK2yyqLDDvzTUGsyfm5H2p74i4Uke76TsMx9xTByZSQJD69EzJwVVEUSQsnP6UWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gFnVMfYKQGsjmck83QKsMVPNQ7bcbjfbgmEaPHdeuHD4sLZ8NXF7G3kUSR1idVs4YaFkKtQmkWatxX6JwKvGMZ",
  "key1": "r4UG1kQMHFoYZGbFsDr2L3dwyvos7vwMMBdWFygKA526H6BC2DaXnchACrbbDZ8m3j5mEBtDSz5Wp1ncom4MrwL",
  "key2": "VTriC488QQnBTgGPNmn4QyE37KF1928konx4XFpAJZUomJuTzozhxHjaSkHcboMLQwSiVQeL74cSrbqmqGcVYCJ",
  "key3": "gcPbvE84WMuRGBFMqSoginYLCCzgP4fahCmvxXPNtDM19qEJ8eDXoi1nMmPKaosWjk6adMKpb9BtzuDnp16or9r",
  "key4": "53QSgQ71DXYMgAkD6gEgT7fHFd865yhu9ULAERtC5es8QgET6fDtxzdqw8pcnrbBDVj9dPoKV1z9KL92mg6oxZro",
  "key5": "2fAVjCqpFwdFp88ErapAK2wYcGLEgcahFWSvfVbYU5CXd5tSiVHy4EEzoZsAGRvg6So4ie4ZqfEE4iZ5gcn453Vs",
  "key6": "3DAAxZce7XiCQy66mHvf36s5jNn13djMsQMAVNSCkLUTknrYfuJYg2C881LsqHSt84KtyfLr1E7mL5basbo1WRNG",
  "key7": "5mtnk9Rpzvn8vq7UvNcBr8YXdwiJWLaFSHB5qKk9pH9gZhfzF9eLXJhgXSdRvzVEhkurhrfpBdf62am7Vx27HtYh",
  "key8": "3j9WDjAumH5j8Wma2GYLM7JDKbei9WvVLno1cogForSRbSyffQVNbDJE8Y9pWmvfPbjttpaaCjYoVGd9cYT1kdDw",
  "key9": "3vKzZdaMYMxN54X2D6FWPSVdyBq3g5MPGN74E1V7a9TkyRu1AnYhbP1WJgprRsHwymcsQ13Erc7bvPGC9hEaZCjE",
  "key10": "NwqpEs3TCzRyyBeB55czg25yS81ntC9eYxiMmXMisQwWkhFcWQqBPV2asRLaWmvZiiCaDdMB4EV4PEQuMCAdkgi",
  "key11": "4EW4ha2WQ6WkL9d6BxnR3Dtsu2RarUTFwtJKt2gWY5gg9qKj1JiJ68MeDEoCDHD2RpbCeDwsHa4M8V31FmktjfKo",
  "key12": "34rTAKxp9hzBeqdtwYXv7bhxDzWqpGxoKzP3sqjJZTj6DEXZ8vrvcY4S4GVHBuWKY2gtkJ11r52SeTCkpkoSsA3Y",
  "key13": "56ezkp4fZcpAiPebZoX5oRiDYrZZUZSn83LoHDykk1TrzKaAxeKSvmMKwHK1JpzekGGyMRTj1jXoBe61XqL63bDm",
  "key14": "3wNtfCA2d3ybACuPLCmBY1mkjmDHH1PeniKBA1RR3d5iWaXCvkFRUYHYRqfxqqoYaShbo76VgR26ToxkKdHyXNYg",
  "key15": "3Tz9gWu2F52WFy6UxmVkTbr5q8XhwxRybVYi6ukXxyXzBuzTRSwbhj3tFC1gsCS7qnBZuik7UdyGut7QdHRiomK4",
  "key16": "3rDewWAoBF69fPub3pThsgmSdWBbijEsckWkgsaUDqNPYtQ7umbidq7c3DZBzohTQUtiNmRYStYT9pxXmgPmZTz6",
  "key17": "VHGU3sjeieiUuYRDTocGdZFy91Hz174YgCdG8a4t4m3DR37g3JEJVJ8VLGaMSFxmdjhrwA8oqYCxpza3RqFG54d",
  "key18": "3ect6JKb2VYQGA2UNzBFDdwaP4k2tTTu9iCewBa9tzh6tC4nkDZcBNxbdvgat5BubWrZ8jarG94FA5ePbe2bMfga",
  "key19": "5Z5GZX5P3q8NK6irSj1mVx9obciXdf8fA5dcGa3DYwKxcpGVMVCWvSdobGqbWJzr9fBNxtfj8HX4MJFTDCsycNGE",
  "key20": "2t9SBYn3FKgYsv95D7z2e72Jvk4c7vs7BrqyGpuUkTjoKfgDwgxZFBjUhYJ2iwdSNjhENrMEeWZ54HcZF4mRY4HK",
  "key21": "yexawuH7fHYFaUXxU5fdk2y5CSUqmn2A5ufEHkpqMatGx5oWxKgGQoB78fsfovYQXGT3t2AUifsqf67Hjwk3Rp8",
  "key22": "wKBPAxvAUwhAYYDTQ14EReFsr5K6FgbbQAzZdHa4KpXq9SEfnXcLQZrFqM9PAuB33KHVnQA685oVs8hwGa3P5SU",
  "key23": "3Jd5kpbQGRcZE76QbjdhcHxU6tkPhHLERq351kVFZEcxiGAAQcife1C8mBGs6ZwLjqH5AyboXyFUzcNaoKGYTmQR",
  "key24": "5fBjJTGss5wnT6i4Bivrfwq2hvcC4QSmNfSqj26eGJriywDUmJf2edoLQgrB3PXVArFcHE3jmqp2PzdSH5Gi96Vt",
  "key25": "4fqHx4BznnCtvFRz63Tr5z7JB7qZVY7MZeuahrvfbEyADKMmSk1BnCCMbGa8m2if8sFa81vA17UeWGgLG7WPKR9k",
  "key26": "4t5uFoBFwx66Q9skUDBg87JrX96EzTnLkugvaJE8y5DnN9o7uyMUdBvQkXNW7pUSxDFMa8CcdYQUkhBncssfYEHq",
  "key27": "2UVd4cRzY8BH4SaFfRxriSWRbq6eERaP8fJAR12vRCpkus4tXZm16JcYe7edMu3UuMhyiX84vHYhazuVbAAEmbrZ",
  "key28": "49yLV5DB1cSLnHfuK8xEsa4eAbTLGjsn5hGpgEviyTbNLV8caGR9zTCDPcBREq7YRPzCEknA1tb8oSzzBPi6EjC2",
  "key29": "3yTp6zpXC4HLeDanqLK8mETDs1PBrtWCwyCZrpu3LTDwonDP49xfvFeD8fgHapWyfdeDU8HNqUvaC4vvmqoSQXyo",
  "key30": "3hDkPbd4os7d3dd2L99TDULej4X9c3VGBuSb8B55wuQvZwsx674EqVNss8px8o3FFbYexA4B21dZcCVfJHDu9dfy",
  "key31": "5XSutMb7f165wKm8wmkkudhyAiXCkvwBi6e5VcGVtPnagyR57bG2jzH84MKtcdLpwXcNDrJw4F3rGma4ccFnd81",
  "key32": "jD2cSqWhbuBNCngvHbRRhCtEC5sxFtNpHzAK2Vfs5QW7NMFDieUFRATsCj5fAFRA9a5mZvfCLEyJHg9njzpjyn2",
  "key33": "3xDRgsAKA9R2B9vX6ZvnaBqbjGjy3tXbYTvHbCPKWzVXMWndFRMexkV1GzrgwGbLLYydvkyuUeAFATcGDSZZ69e",
  "key34": "29RqNmjXsnX3PUWzr5pDwEMgMeq3hrn8cPZV63h3jQPeTeQYLwegsfDszV6JEqzqLQZSRjXFQnbf8eX53NuD1ntu",
  "key35": "3u2tAPAhwz5Nd8zgdtMd5erAsh6FYcSZBqFbS7mGrRjvqZtNb9eJqSHZn6tGcRuqnihTJBEK2TLmZbnDpEs2DvQv",
  "key36": "4WwkK5M6WWMTNGxrmTEbT6DZVQmNbwArjsYxQcpsCh87wc34V4UH4QvWA9LiR5EjgC6yUMUsGGoNknGiJxrsrAmz",
  "key37": "2jjmaK68wwVfsiLhuVHgEmPq2GXaad4Fpz3hoeWBrQw52TvLn4U49LskC3McTMe72nZjiQSbEdKSmMmvCkYn2Xip",
  "key38": "3HgmF9M7owyNB9vrtWCAe32cYRsrktMSgx7sDEHJ7XiZavQkuUm4f9L6aa4hQjFrCVfJH8823fXJbx4ocE434bNU",
  "key39": "QkiyEf83y3kWVop8kSYZ6jYtpLkfB13nkGkq7P4wdGYJtZKaUee8kpvdd2DS1rxi5zdPi5J52Pj4Ep9vJLq7LxE",
  "key40": "5V6JMcvDytUgyC1YdLZ6NSx7XpA2YEiFXeicmJsu7mPPfhrAEWh5AyfMhuJ88zi3TeARDb25oLsxEEAA76YVQrLV",
  "key41": "37xNDiTo1jH2G6xTUiXLfjdsn7qJGV1NnLKXhHDdebbHYALCnFyk9tTBXr2ArCgPFuMtGGe6wxeVQVgw2xCvGdS1"
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
