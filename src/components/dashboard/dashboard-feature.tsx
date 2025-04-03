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
    "46XxKFtmf3NUbx8qWoRiC8uaRwMVbMtQF4Dkj2TbEKbxGDoD1owGvRw4GP3Qxh389NcaE7azCEHgVBHrtxA5mN4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vSyCnzxdHfmRexFbbYV68u5sTs5AvYz3vonVt5mC619yXRRYj8vu2QvromZDrdWrEJQQtqwLyQqUgb6fBEHzJj",
  "key1": "4vA6bFTWk2hScpXFZCzjjeR5VPJvxKfBdbMhcHgnTL1zXA3WqdCDS8brCfJSteVeAVRg6e2oiyeg7q7GHyvUDfZb",
  "key2": "42TMhUPL7cfBZqNMguMGXtS4rG1zb12txCnrrSLtrUzC1DdxPpmyRRuExH7k7ub3LDhNgkdhTCWSc4mhpsYumYCF",
  "key3": "5dEqBJrVr74SRfTGo2wgte63Zj3LXEuYHNXePN7xYucYXwKbE7NDJz5G6eEyQrH3uX5NqHFPdSLm3AE2vZjxmdzn",
  "key4": "4f13BEoaVFHKSYhozwBiy3EQznwfEDTGxcvBkPhvb5BoZJo625DV6BU7L5xthvQVKMuTiu3mnHitF4ZgdgQct9g8",
  "key5": "2j3fVgvUVspmJZwVCGEkKne6jfAasVLbWpGWA2BJjfcKgJTqVa6jxYVELuEZsZC84LbZNtFiDhBPVWBKCH8hSkmD",
  "key6": "2CubxzbdJUH2iEB3HuGW8UnGx5Lp8xT9fwDQfg5EHAGF8JdacxjiZgf1MZz5RUsfG6Bk8AcXqUp7eQ8U4jrivUHs",
  "key7": "4jY6fmbmv5mJKQq3k49ULJCSnAhdKhRP2ccVT2yjD6Y4BQP3qdLnsF7TSKkaHbWABX3uLz1KTvgfZEaY5XhHtpn8",
  "key8": "2L2Nm4YTBKzkGnQVE6FSwFHobK6kyV8M3316xp2p2tx8f5V3YiMd2rCTRnR1WEYeYcQN7H93nVGVAwY7Gw2CSHhZ",
  "key9": "5B1KuJdEPcZX6Xk3sJcXsfSS9K59SSWn2VCevNxNBmwzFMaKWYmVV2ta7EUiFWgZNE5EVj2tQZoxgZgqA2bf8UQ2",
  "key10": "LPtwj5XQtQ46WE9fmoJbf8y51MYVF5Hvzx93UTKeDBqv17ZMPJe5WM3azbwXdBSvNk2oUry3poekFrZjSXL7e4V",
  "key11": "28NJAfkPu8UeyBgKgxXhjXcVFD4AMmkHRBhgRSuHtDC9ey8qnXurSh95v2wjKVFgjbsMDGMkiyQGJXTgS1VZ226S",
  "key12": "4fe7VSXDsEHqaSjiY8Qceg3W6TXPGWBHwP3UXrKKSq9R5uVk2fCufVwWRMA9ziV7VKkp14cC28Z71nisyn6WbdVD",
  "key13": "5k6NLrgfgSuZA43Hj1Cdj8EbJKBuELy24uQQ8HQDVQEDNPgkVdW6hxf8cQ2ePgK9Mpmw5LY1eMuTYJPyNgS6e2DY",
  "key14": "5Z9oDy4bCztYX2V4tfBv5zPjLVpcK2HPrPaJVos488sCsEcpWZbgYGAbgMmSQhQaUPRh6MHAhZxQxyqwPTLP1hDV",
  "key15": "JVZ9UqRLkNQSRfhNxMh9RrHZbMDJrnAsJYSMdoZ5wTJfLpu5FmWcPDGEJPD81zo2TdA1wySxBB44BncBuj5DnEu",
  "key16": "3nUn643dgfr1h1CS8bsvSjJxtFv6mdZmh2mA4wEzTjsugBUMyZi62ErBDjqoBTAwdYnFwfaExtVSE1U5pSZzJqjt",
  "key17": "3DssXrfu8u2vXdXuSgu2NZBKPJsPaxtRFq43YN6JbDcXJM9VRsVckpHh1X2c8rgFBZ3C2KfyNGdaRfDbx16fbDES",
  "key18": "PsGW8XR3SS1FY7i6zBCndY4MjgLtcJctY91SJozQGB6vNGR5nm42L6hSduE8Ajxt8NsvxTZkyeMkDTQ793k1uri",
  "key19": "46kykrwBAfP4VyUWs6Xpot5GWVcmu8igcComM7sxbmQJodbD5yNiqKTbJDZiLuBo6K2YgPRRhBcFGj8MBPagnyDB",
  "key20": "3imQbHi3y5JSttzoYT3Gjg7gAhvzvBMbKyfHPy6LCQzdvnBq3qmWqt416c63RgcffgyYJyze2FYwLYtdWwmhgrRB",
  "key21": "4sRet9sNXxxcdTbbVYZ9aXpMDLzByFddCncM6tPAKDMZVoSog7buroZVe3y6R7zfS8WYkaqMu2DBVjtYgKc27agw",
  "key22": "2z3XVGE2pUeFaMXa1ZNae2eZaQBsydr6cMkywgayK2FjD7RUmF6fZgPuDZPXasf9aDpbrFexns2wG2FnmQJpHGsU",
  "key23": "58KRKk1qC9q5nenoAhbNV3TLjkxpp49zr2Q7KyWGrrB1z8BEaGqHfgQEdrVZV8cS7XQnwZcqswEf7RnJrzMghSRy",
  "key24": "2GjrVhdCroXQJB79RDV3s6HfyBjtMrAxNgKsUCRrTf9koTwrXdXqYcJzvhDjDfBg19ZW8Uv4BQeDqAhHkh8pNZY5",
  "key25": "2XpPBx5CR44SZwnuTyMDpMjEqJxMoa4pp8o7f6gJ7zXfeR8UvgRFHiz1WMcsv9TbexnMagwztNgQNmRvpzzxWvxw",
  "key26": "43mD7xMWtGn2V237BH4PcLazW97AXEgqmqEXvNnqEoCewpr3u9U1yW9NioStJQV2LuWxfQdQLVHBQooiteUxyrhd",
  "key27": "3FQ7d7S3kNJPDrwguwJaLKfez6i2No4EK7cfnW7nobgYkdY9aoRsNmZQDwtJJS1nfBWpBZ2VYyaYEWRyPfofMJQQ",
  "key28": "3QwQr4GY3BFfXaB9Mw4Zbhnmtx9LDWUcaXoeLd2kmpSbaX74knAjntxC9dBLEGqNdw3Mv49tr1XYsvhiwm6zzrAZ",
  "key29": "4ptKdWa6iRV7uaDrmuBiyci6vJWGxNNJwt1QtNjuZ5eeUW8RGd4J2YE9pGGUd8upmjmEbLv92sUP9ZXJ9tu6Ldvj",
  "key30": "YqxiLCfpyFtUPuPgG16X2f6mNw4NLaqJqjMFadXrp3DGrCVMXxA2sdZmtJbtUBg6W7qjE9dBKruuTTu4sWA7aHU",
  "key31": "61i3BJtiJ7Lnd22TPBvrj7EXp4tcTos7XTV2cM1FzhZqBK1KLZZVbMtzpuQCMjzPuYtXmdae2toevGh11QY3QzzF",
  "key32": "5akYwbhGFjcs4PRCW5HpMS4cuNCfNcF6q9iwWczdhfymekZ4JZUUWo9gDLgFLgJM2J6LrzSxGK1ZMiZM4UueEjCR",
  "key33": "4eqjvtFTnU9kYpJRwS5LdzVCwH76yvupXBm8cmARRDfRkpP2jRfRXyZ2R4WKWug1gXWLdF9nwvQY3t6Ytw8mnDnq",
  "key34": "26ZXEexmUtUTnEqN9Beo8oq8vXnBqKJTfVhvFwUNhgu1e5YjY53YcqFPKNmp5Xm2Je6xEGaAMy8koyZzKXcV8ShU",
  "key35": "53J2q9B3WLNyF6xnHcmvMs33s9xXreb8ULT2MQRVFxghDPQ5S8EjXio8XtMdDamu9eTiFHqgep1XjtmuBAguUZPj"
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
