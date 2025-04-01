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
    "4g6nYiSVUR8yLApDyAWjXs9u4Yb9GCmZ2UM2zAUCLqbR3xsTU5MquShDJkttjZrWyyMNwAShCnZj23nQ6HZkr3z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cn3PXX3kuqQqBkHF11qRmb9yMYpURiyriF2aj4nGgNbXG5RgK1Rir1c22t75gmVHbQmpPmBLX9kqUj3jp4brp2e",
  "key1": "4aeWTH9kDhtfRPN3qRdaiBZm1iUyUjNKdmX2dVLwYCPB4kRye9ay4e8VWgVuYg9httGcW9g6pe9hsifmEdPrnRAY",
  "key2": "2S6ZAFjV2XCxdqGoATsb87WARATZSgunvdUUUsZMavmw1NbSwpRgSaPNWPGF2zCGzrea5EnSRjB8pcyxiSQiXEEy",
  "key3": "5WaCDUuFVnS5fRzA3AhsEgA4dxbrT9i3V13uyMvoDfEz3UzdnNZCwNLaZ32vMR2QGaCoBkXyGt9E8Xb9eYKqvTzB",
  "key4": "45zrcE6xoQVKfLRMeWYf6qQFUeTisXprq571spuhMYgZ5Sut5AiQgdb8tztABai2cUZSsdnHYVM6FBR1vKAQjtes",
  "key5": "2HYivx2z6hdHATm1cFxrKMF3p3zsZ9vbxGnk4E6QzmHrGJsxnMAC859pKtmD4nNJyg2BLg1Umb3bBwjWhn29ypmL",
  "key6": "3P7n5ydC71cy8KqV329fCdDBZ4umgz237wxNZRxcfLdHi7FeaumEwdZgfkK9HbqjUJfAcPG71inoU4rJ7S5V4XPX",
  "key7": "aHQ4vFBkBzcH5i3jmxAhLDWcAJy3gW8sBDyoGbAdCFZtKoTGXGayuwFhUMxLaZYpzMLCFES3R934Vu3seAv9RXw",
  "key8": "2Vbtrxtij2Npmo1R2HoVMAdu9bjHcxR7jk69V6qBusJ7vQ3DbVyaccG65gG9jqcdLUGxVB1yDsn26Ld4yeNFtKoU",
  "key9": "ooq5Rt3iqD9zXJjYL1AfLJ2EEzEz9jQtrZPboy6BnyogoNT8EtmtpKRkmJT6bmNw94mtkZNTwvKNRHiu5zDDsso",
  "key10": "53mxvEpg7BTJS5ZRbUUYeBFdscqLEBo4sM8F5j2iqAi6kKPKnP31MDNytuR9wT8jFqsH2d5rJbhMFpm3QHJCYaPF",
  "key11": "2v2qye4JVByEf5c7wvY32abZf7jqW5uSRqbn5nbhNBFHRCgbYCV4MwaDx7hJq45pZPfFNYM5SPpwdntKfijvEdqj",
  "key12": "2iKKmKyEa31Vt8cWkrYHA47KtUmd8ipJ87NUEtnjgV1Bv8YodA8HSHvFVnMzSkwPAo1XSVHgMNVnw5PAJindNVaC",
  "key13": "3hgeBGHFV2JFsGvsH3bq78ib6wjqTE2G8G4x8ftFmoW9747dm59cNL6PqnrsKVV24qiiESPNg9CpJACJXW7Bg2Yd",
  "key14": "2f57YhdprLZX1qb9ig9GCdsEbyC5W3FPQ2ptbmz2nTghBGiFyBGtVNnEoo4mAGHkrjLyJFeZGzXyo74JiKpdNGp4",
  "key15": "3QRdUs5kaLAymgwd6JYJEQRVPGgcveGqvQR6LfRYBpi6Ty91SqVCTyWfp8y2p59gV479vnEfk9JmVXTZnSLMDdLJ",
  "key16": "663AcU1u2KFD8oiDRr8DFeJKB2dDHBuFrzbB7m7aCQQ6CLkSto3cKbzGucqEbHCjHN4dmomZZHKWYGixVZ5rdeB6",
  "key17": "4PHrCdMbXjkxQ2QfZxmEk2kcCUJPcdt4Uohxv1EeMK74VLf8QymGQtiDaqk83kziwW77TRKoC6MN2ZMW3aTPVhC3",
  "key18": "r2F47qidGBkSFHcwC7AcSXmZFBivHCBen9vigYZqSh17T8Qacztk5f3D95LfC82shqHYfiRVKethaim8RTagfBU",
  "key19": "34sRqNUWXP7opQ9QFjHtC8Y7n3hLNfgxgjwruwjf7wcLWxVK9BWHwsB8oXEaiPQVAeAL6QqJ3mj24pp1eUp1do46",
  "key20": "4kxyvVNzo1Fkj73rc1rAD4tQy8DqtvZym3vNeZMj6U9sNXHHs2esxonv5WvX8ADKKfMrDzoBQ6KnnWdE2ocAobFD",
  "key21": "5Sp6k43FCXWbTrXe1EDE7jZmog5hKmtwyhxXqjhHdBQ1LohJMrZw1iiqYMnt4BPfTr9JnC1GWVeRAL8FsEpn6mDX",
  "key22": "LbhDH35CjNBdneP4yH9tJ7fS6GfsZko7JToc6Pwzg3SvHXgw6Wb94vKBG7UAvJHR9jbeoc5bBRPvHF1CWXNmaSa",
  "key23": "4awBfHMXqbkVpZqgKgE8H1HFPuJ186axU4CtnkZ95upeVH27dcUbcXKuzZZHz74uptmkroxSovcG2XjZ5y6gqx1t",
  "key24": "55mQb5z5f4uM7pG7rHNzcsCRt9x4Vknzc3E3oNPC6AQTG52Cp8pzFgZTbKtHvoJnhx65WVtvmgWxPogr76spe8kL",
  "key25": "4NDW3kM3b8kaZfd25ZVn5So92tuyEqPv8HmUs33gmAchTA7RsYLGwM6uz1PoYMB6n9eu5z2NY2DqGsDSYroNTMgK",
  "key26": "2WtfXKreAMYL4RfS2V6Dp3g6LJ4tD5fnSRjPbyehpJrBAjTbBxoeS4yhkSpqvtMcnFj2q1KwRqPsnosyqLy2gmNe",
  "key27": "5Xo8sBHZTeNUYU4AxCfUhrZBJR4yRia2Hpc4rhaYB44njfMJqcYNKeL4CUM13wDumwcCRY6BZRQYpJbu6RJEfkEs",
  "key28": "qetaNVfkGh44uYt2u7E6nFikkEUJQQ16b5fTQzPNHC3FBM41keasftjHxvaNp2zVCKsahP4jNm9e3TKqZYKp8dV",
  "key29": "5uR95nE7j8H6viM5AEHsxLfxmRrd9dUywyVqiBcw69zwC91JxShWmFpDxxAyrVA8ev12dp6rqCvc4hjM1Rft68XF",
  "key30": "5ARvMfbvCPzYpMaGXwu6j4gnmnrC37TKT5gbBvexKdYFFh5fc7m9cGCAWU7sD2XuqLhzUsjmYbzzKhwvnzX5ywWn",
  "key31": "3GQudrJQ1XsWPpfK7itpRigLdijFgtX6SC7NjE11APi7v9coZM4J6P3tdYeGNHSLFDFXuzQ5xeTDdgj1t9gTZ7XS",
  "key32": "5hX81o9mJVmAnjuGi6xVsuuFNYRj9jF7CEAJpXA5jzWxzuxsiRpTQk4PnGhWkuDxHTsC7uV3TFLnsqazHLk2h4Sp",
  "key33": "5RgWaoZdUYQs3Lj3L2uDcf6qPtThALbN7YCA93NEdEgw1589NiY4BnZ156nFDKihiybqCPre8RqFH3PJTj1W37W",
  "key34": "3tWtuG2qQDKNxYNk7Zn6mZ6WaJgDuVSYgocCNS8wEhyQRucCMTtUutg7vzegCDTC1yurt5EGSWShWx9sVWeb8rBb",
  "key35": "deub6MnMgnDozL1kjjrfXy1m5iGXGNUdAG5Mpbkhi9uMhxMBhyokn2P76JtQpU4pFSQ1kGKfkEZfJzZxzGZy3ME",
  "key36": "4h8UqMPzmDHFMEeLG6YsZTXMmZyK9yu8hZ3wTBm62d1nhgSdVh3Y9vBj1vbTednf7XC1urDTNAKuWD8fYxD4UJjD",
  "key37": "5LMy8r1epMjfWiLff8zYN8bE56dyVEDJSGtzt6Nek1SphYExzqRq9njBgReQcFWDxEwFBqKWRpZV8PC66mYZzYSS"
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
