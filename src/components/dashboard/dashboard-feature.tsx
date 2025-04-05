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
    "PGsxPbA7Yf4Rhtt1fxep1bx5sGXp5cQ1D5Suf4UsCCuRc9jH16EeY3YHHoTNukyYjRQVZdCW3vSFeGeEQFfePu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwZ8q1sZJHqcKLEpgRxMSxmy3PrJrNJaELDzC3AFNnzgZjfXMmDEcgQioHwhUQERN98tx3CWBdCv5JtAhaDz6wb",
  "key1": "4pZK1Los49JCwLhM2yWfDS6uBZSNPUHswpH4K1F25YLYuTysM7F7Q9AooJGvjZ1M3UtejxThdwbPPq9yr8197mfJ",
  "key2": "2tH56RwZwnvvDi7Bk6XG1WpyYbgC4FowHn8xg19WKHVT21mZ3NDHswibiAGdbfkGC3mXSGaaLQTqTJ5hmPReMvQc",
  "key3": "3xhtVg9ZX1NJV1zvmM7Cdt6PuHGQj6Wk6MTYdbMZpAkYy3fdtXsLg1eFS2kUyWm1JR7MyqXZwmUboLiXxhFrtoWC",
  "key4": "2c4Pyzycdy5PDoCBVuXYNmopGW9SLggpxvmpzVxmDm9SEtTWup1ESwyomApfkFvyYJo5FMprSkd1Tjfqf689mbne",
  "key5": "3zfDhqDuKCzYFmx6vzdWf82eFbLG8Ag7jucdYb3dkhnkXRT4nXrTXMKNVKyhXEuJcnqvpAdP2LGkqLyMoK4evd9A",
  "key6": "2vSjKochkqNiKVHiopWqonLKwUM3m86rcHrFYB5rcRtqyFhCoHWoZgwi4m98V6LxRx6orQ7moty4F7jNaHjpo7gj",
  "key7": "v3LbHWcCBTpCzjb4EmXeyKn8o6TqjMtw37DvTL8nC2zGctxv7ixQf2bKUT39S4kPijrbCLPSXieibZySq79doFs",
  "key8": "3PswSMqsoHmTsbxHaHoDVPXkKwwHwDLHiKJQ6fGo5cfco61jv9PXqQSsr8tNsmcLtUmjhFtVJm73mbT9mbxGq96P",
  "key9": "2Nf1tPXzCoVYHG5oF4GMVkrUAJZEyNkj1VpPvfoyLYkoCRTGt9ywx6hAJhJ2T7KbBAKhSXvfkmtqAtn192vF16x1",
  "key10": "4rApvcUNTSgwCv2JHZfLW7UrHEeucHdmfgxHwc8vD1Q1BfgUJR9JQqEeseBDFRpv3B1fBenbw8fcDCN6cfgy8PqT",
  "key11": "4hsyYPnUF8N9BPeRbBtbcxuDq7BiYpa8DuUmj8p3dW2C9MZvG7HPpHGSpoQM19hwfF87m4KCsrhJu1QGpqKkDsrj",
  "key12": "2LTWV12R8z9PN5KNfJyBujTew4kAHWKHgzTMKW1RoYUu6cwY4EtDCTbZFFDmyXzCKzs6ZmTjT5i81GGxf1PpwaKr",
  "key13": "zSYT2oNH7JjiXdMuzhVNZV2WiqKb9iXujypTTWyN24wKc1A5MkQEL9ceVV9XBtZ821VXP235iNoEQAFX2sUCXd7",
  "key14": "4j2wBwxvthjvqC3XkN1C9cdgja9hybjC98oXUZcwNu5z6fV3KoduMCXwY5pjmA1VJcxkdbVYBHwrQj8w92xBPRsw",
  "key15": "5nLosi5wWvRDq5xozmytNAR3bmsb35BSLvmW2FHH5tDxVParKVqrjrC9ypCJ5uQ33Bm4AJALGdnoQZbYpUazBZcP",
  "key16": "4wrcKssDYq5qQZvTueZPtsf4XirSzmMVKpRA84mApaLHvBRb4tfAYLe689LkTuy7SwBDtqNkVNafCkwDRCGqFyVX",
  "key17": "2DxUzdGZrKwqF4euAn5biDsUTHvsQknybudkzzjwsRhVBGTG5MMgkyd7rEYqy4zRVME6LRMnCRVgXYcR2H8ujb15",
  "key18": "35fSZh4UnvvPuRdDmyGLzzdJgEVJYkgTQqh6oz9ww7WAtaB3P3CvVfbDxHbUKgx8gEyKPscTyaMo5Y4uDM4w9rwp",
  "key19": "3NLLTBZ1vCVcM1dyUYDfpNKmDYf5PqddtU281bkq7DLZDLfcXUybMrBZqQUR1EB2tUGpKkYKvaab1sbwRFbrRmHb",
  "key20": "3qyoPT3stBX7rGkBE67tR1JURe5eHMAvYZN72YioD48ToXeX1NYPcS5cjqwcF2hRBaAqaHSmku99uUXRU3sLBJSU",
  "key21": "2fv2UtdCvszMcr9CGgUFaWypEqDiWTrwPoCMQp4LcREWAHjj6tX6mAmHTvvHQDsumtpKqqRdkbDSYqHwgBDkVZE8",
  "key22": "4LYJhthGWKVwjGkASkvdBUJ4YJBtRpVxzW7RoCjDc6NnK23YZBQjwengCghMBszpTrY57CVcmahEyZCCGtHUumfD",
  "key23": "2DF81sMGc3sny14Ah5prUoN5ortsTWVtW7YgBdZrGW5LvWSpKdrG1hqQ3y7Ta1SCUV3PPcPifCJtSGejWjnhPvVZ",
  "key24": "4TKzfYjxdmEQZUbR5XKFQJgQERJoBi3kxxLmpS5DTSgjTWQPm6dFJpfNqe3kS9SJxi3MPNveHphFYf4aBigXejoq",
  "key25": "2h4ScbnLiS3Bu7hg4BWEBgG8wmpQZZcNMh4uDZAaJMcWVGDrpiUyqhddJdcCiyr66CvxDzeomGGbfThqSCnsANCs",
  "key26": "9rPND1gnRG2JAsoMbZaZtoSQCPLMmsL4vGtATGfqYbN6rjCJhHmmVBf1u4sYpWeWGTpw2h2qWpcTVqg1Z6JuJGw",
  "key27": "5dWqdZet2HwL7NLvPkxz4ZU7uw7pXHAAGvFsKYgcvvyHUA3J4ZucH1hzUqZyhvh3ZdZVeJmmeVCrC81CsPYVFwev",
  "key28": "4hFXdSKghpeMZu5s3b1wwbda6yi8V4xEfkQnkgfwELcNm2wU7VQWCFyBTdmiNEjhx6KstkfSZd3xjZhWqrmv2Ms9",
  "key29": "5D1ZgTJCniBbkCqdKQWaabF9j71AZ88u4iHQ5VFW6CFQpem7odLGHLRcRf2QePJsW9bZZnh8KfU4hxsmVErvfdTE",
  "key30": "4aobfs4nj65zS7eKu3tWv7uuUgqZ1rzCnLoTLx3JKLbb4Nq2BuGfFXKAhUBwfhKTv42Q6iFvF7WHQho1HzYp7gtH",
  "key31": "2cBfYXJaMzZx2zrdX9ZTLUs1w1MngC4vn2Cc7MKHkRfRzM1d3Art9XDfcqmY3FsEb68im56cEHtUtg1TiH2RxLvF",
  "key32": "2pu5LaZ4ZBTSS5UV43EcZbujgEKoVoHqMH97GR48ATW63bJfR2rQBiyTyMsa8ap8GnLyJcY8P5nf5n9JG61KBdpG",
  "key33": "4cocY5rXs9CizStzyHdX8egnwL59gZSFCWFrwAefSoTbsa3SLZpnw6K75SJdX3j4sLAKk1emeAAPgP1h56npgkiR",
  "key34": "2Qf3r9teZV2L253pQDfYW9CxpWLc7ECBV1tvfzoSdydKcCihRgqDLLTozEMdCYu9umF7wwve3XaU9Fx6rmAfGBiG",
  "key35": "7SGqTVS5337XFestRyZwx92ScUjrLdGbcXGj1H6QhyxPTEFJjFPjDPWUxoEj3jeEx9Ga38jXpaTrRR3zQWGDD7j",
  "key36": "N92Xba5DJYZmkJkYM2CEA2uHAtGVZepoj9wawUJdpYHStmVo5KvmTL7AMWMWFpCMHRBDBob6v2Y7vXCNedTM3ti",
  "key37": "jeSffhMmMjxZLa8Wgrxi5Xz19vAFBRvceqKxwmveRbb6H7QXgMDSnDjv5weriQReP2RwHFeikurHhwa2FbKYRQU"
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
