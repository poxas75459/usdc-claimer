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
    "XZ8MErd8zeKskzjLohqzVxMFRCCMRSHyz8n4DHE3Vihq9d5GeRHkSPYhphyRwzp1pNrFktUdxeNCzNis2NbHUai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqFwq2a5TrxQhsaBTGgSiGvFAWMsg1x3sSJYqatYaKcE2UZSCdVJVueDJBtvMUm9r94H4xvQWuv5ZDdSz42Kc8y",
  "key1": "3jinGeifbrGfDB3oHMf3tfE6ZCm7sbpuibHGNphE5vhphSQQv6UA6u2nQLjcmhqnHAcF6LN5WjJxW9P558QJTHCD",
  "key2": "3YENcjgX6gHsqqYnyh1sWQ19neFXHt845ke6rtC1riT59FSqkuhdrN4YcynzkTjVZeGqr8ADUh6mX4vrYKSc4hz9",
  "key3": "4tbyRn7v5CyqTKsDs6JsQh9rqbVvD5jB1pZQvCkaJRzyUoumbYUkndYZsi6AfzskLZ6r5iSe5qGtsTtsuV9PaKLZ",
  "key4": "4LaHTNufSJQiG4xsNkWqnNNHdJHV5oGtqArWHBcfxdTKr6RbYDZ81SEuVd5nKxy9r55o3D5raBgJceRDugZx5yGS",
  "key5": "3gpccMFwsKmfDogRgkFhmVCxyfA8fvGZ9bS3zQShN83XKhsjKjJTeLk8mj6bcB9UXWepKhEkyN7EE3dxBfto8Kto",
  "key6": "2oRhWprgMrtuKVQnopY4BYzLiPcaSRHJmD5PJc9b1sinVQEGoqXcGy2Q2BMUVD71sjLKiBGMzQUoygn5uZtcMu8q",
  "key7": "5Bb97dMijkT2RH5kJFVXbBfsqCjYw1cQBix4irqfmYVRGMhq15TqViwkcVgEAPGtowq1ibcvQm46Tk4KRNVM4nXS",
  "key8": "t7cykLiryDnhkGoJ9h8KNj19oxkzEVsq94nVuzAtfZaHSHsMh76u4NG5zVjWHrc54W6Uo3GE8vyDabizDxo1Ec5",
  "key9": "87ss5VeEVfYaRMCsbxaLtt1eWJSwfS14nFa41UJrJyheom8yyTHiVXuvD1JfTZfY9Er3yyZnHKDsbeq6qnRoniE",
  "key10": "HbsX3fd8zr8xdqZuxyzUcA2Jrowum448cxbx6MJoWJwLiyE24P5LearEpDzkNx239G5Xn2RF7h3dZSFmE53tWFj",
  "key11": "3aDRfw7x4D15onAB6LiUM6AgWkLgfYKpMz2srm2Sa35DNtTExV6ddnshHoJzCtKcqQ24qafANoBAMyAwMRc8bMTX",
  "key12": "2YMGdzvpdFgXwGQbh8V5BpZsbkWuGqRcqiAMHJnhXPfBdf8eLmxrWdUKygKeM66PDbG1uPhghHXohSN4VEvy15Wy",
  "key13": "3Jh9Y5mm88kydsyyhhXMM8NoiX4ENWxN5sMg44Cfw7SRpUkfGjZv5jMEQ4w5qJ9614GSBaNY3zWAs9xRy9dEAnYP",
  "key14": "ci7wdaRCPVoMJuvKnV1RT4tMsFqonXFthchBmQSimNgTmH7AAn1Bhu25RNf78DCCtgbSbgbBduBiZWkNLUfiWky",
  "key15": "4so8JE1GSB7Q6zP5QyFeDKs7p1JaUbBeHjtLKYXtvHBxup1e8e5x2EggvwP2LyDef5dH8c7pyKpMPNuqxycAD7pV",
  "key16": "2mLtS2upkKeEwspiZ8f2gbb8aj6pKgAjRD4jgKAypv68RWTECCEfQ5AW5d28JRbrwzvWF8DjK22kHGEPi8UQ58F6",
  "key17": "2HDKGBd6YKgnoXRZhWehCZ4FWUY7xtHSN7bjPDYm4czt8KUCgqgEHSarw8Z6EK1wQ8aLrELWkjeYgB45AP6CfyzX",
  "key18": "5u8K2KRw1HRtrJf2fsaYz1P1mGkMQSozKhe83dkyw28UYEPpSSiCyCt164kSHqyu6VtbUX5gRgoYfFevuZeMF4Va",
  "key19": "5vdzyQ1VYgkfKXcUkPwL5JMSytUXwGrY6ESdEHbbCk9BWp6T84Xs2N6PweASA4CAvs8xrJ9dAuzjata6arGmpYbs",
  "key20": "3aiJCGuZHWVivTe6BtYcE8PV7hUs3Jhv2zC8U5p2mKECFsmvntekHsUfvKMYumgx9TPFKWNPgfBkDxdkmFdjdH94",
  "key21": "4Uf7KvLxeFEgDZReNQmMc96SrF7wVkhdXd5JKqM8Gz37AYzbrZaNAvem9sLpNquKbLvacuEtQ9wgpFKynPR5hFfW",
  "key22": "6dGgdPXym6UPxd45k91p7f6mb5r4doU7ALtLrxg8ukzQ8EhAsVVZqim3L5nFCKhFsBsSgBU5tejzWTaoE3M6tcE",
  "key23": "4EveB3re1K7hGSZrf3v2zyNyDSRrgQwXeHZQZtzDsNdiWTYyjZAatX8piQos9LRo15HnypzLwVjhCc1xiCKRgxfy",
  "key24": "2eDuDaUmKArmB276vZUMiguKoDKGmBJbXG7YHP2XAELpKnAQDxDUqP1ueHiphE8pszojCdFr8nRZm9NppxRWajmY",
  "key25": "3zAhYvNLR7Kx4ZurPAqN3YiN5k1gy9WqowCooNGuqGp4xSMzkL9pA42pvUYs8pcnzExcGi1MkA9a2yZ4ntLww7yY",
  "key26": "29GZFTbVGayBwVSWwxztQqunhHuxcbgCgC5DX8MSf2skYZuyGU7uQii34Hk68oRKLNZkWKSVts6PM6ju2mJ7LrHi",
  "key27": "3Cht26eehgebA8QJxErCuBRdAh2kuLr1ndguKD4oc4Jz1zZ1ff78Bps5n6VBN6dVaXG4UrKkfow9LfLsUooi6SQB",
  "key28": "3ureMiSyTE1Ezkzjfdtpf5ZdMXRhtHofMCUxn9GUfKq9CYdVTPa6fxfu8GczdBtohMnaUhgETziqkZQdTJWT2x1V",
  "key29": "2JNYEcxGA8wGghvQjeuvABRZiU1MN3nRB5eSZ4va7UKC4Yx4L8mtq13rFGLeLDG92cLnUZKgvWuTgWZ3WWDWuj6y",
  "key30": "36GeGnxxFMbVSviqA8Ynme2PwjfzjtoxjX4oH1rGQQvfppBYmWX87PaeTFT4r4vfoHexNo6DRKh3jAzmmjce2hqD",
  "key31": "5X3y16uz8umFxrMFP9xY2JyUpTDV4MHKnEDC6RcueBApAujP1tTTQJor2m8uWW6hY69fctVYbrNBUuE9FLTRgwSD",
  "key32": "ZoYv4GhWxugze2pJDaowWz4MyAFfBXtqQ9dwuo7BHg2hgrFJ66MfuuZg4j6ATZU1LKAZbdcutsygeMgN3mPJ31r",
  "key33": "5jFisFDZUYD6FG8kCgnYXYWj54VppVUhBHFRP619Ps3Q6jhxKksX17EbfKyoDZTCD9vasv6gjzw6qVXA6LKMA4qW",
  "key34": "4tbcSQ5TfQKH3TTKPUE9yGNZnKco98Vsg71qZMQiYt8RvPFgCGA4sMYsW6SFRAyFJ6U5STiRwrBCNK4tr854GSqH",
  "key35": "3DHAPNoTjcEm8MSehNqkbDdehEWPshk7j54zx7NTc5PJ7BVfXmze4bK1ujsd3JEwHpVCayeDWHmWA9UeRwDquP83",
  "key36": "3Pf1HXyz7ueeSsgm1zXPGMNbvUVmJG7AahTNcN8ije8rLvEJ1f6ENhbi3yWjR4Qxzj4tHGpKUW9SwNC5RUNwR8wj",
  "key37": "VWytvz7KvwvvmiQZvoeb3BUxntUpzwmBH6oZjTwBENFFQiyfKijK6ug1csuB3o7A5zirXTuDuc45NaX1hK57W9K",
  "key38": "5vNbaSSxWjgX4YvXCJ1cYzLi7P9Hz1qrtTGT2wP62fVZTYrZgFG8hUTVxMyrg6ofjABEGJi5U7ELeTjNDVRmbh3w",
  "key39": "5pZwreUsZQCPW1Y4M36qHGUePinWvHNWjttNVfrAKXuzvrz6MiAM4hbmvwYA1WQGyhAEDXnGzDF2H3Y4dtisqruP"
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
