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
    "4shvYzxy7yL5BRKXTRVy5EGEAASXa6ZyyBf1X3PBmMibEwCmhUgx8LTU2ZxDMi6KVKysKwamEHuHP16K4o3H86oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3KWQzZYYxXCQ6b6wBBCRWzee6EuCxZnm4ZkNufB3seUKiYTE7Z5Y6Mq3dG3EJBBtEF1cVaabBn8VXW3xuW8BbQ",
  "key1": "4rWZCMfPw5Y5yDsRD1eHcPbeQKhVvtSavNJHYDWUeSjF6z1F5hrPAusTeiLn8YboBo7Bi7sLhCzFi1yZRSvC9JJr",
  "key2": "7mZJm6v9HRbEt9Xy3sYT7UdxaBLzavheym67PmbyCUE2BQZJ4SEnCunfZV1dNT8GY1Q46mnSBW48Qg8FWnBP3nD",
  "key3": "yDQa2hBqEZCEPceoHi5G6bPofk8s4bfnKm275XBqMUk9Z6prroQr2MP42HQpurSYLoGhqqJfx9GZYWpfdvHW1PQ",
  "key4": "5PVgoVBJfCaAaSnDAvYF9vqzL9NzbyyySGTE75RKSvcCmHHaN2UpqAbspo5HXMEpoZDp7cNRRi4hsKaSxyAs6BC4",
  "key5": "4fQ6A2EsTg4Hy776rrnTSays2XVnjzNKosXNCdeRWKx9ruUD7nb7VQGbGqGnMbgaxf7nqygtBZzgycVJG5Z2VcB8",
  "key6": "4S5EBxWxw6NnvBD5zgzYmakxvUCP6QSwadLQJyjiNdnUfaTfpgSJrZFZmhGGPMTPwcxdrq8NppZrBrwsJjhoKKxp",
  "key7": "4ASfx5WpDfiZ2ESFTu5q9icqqMd13Z51SDumhhvqp7iZkzFbxJiJJiifj7RXMx2m9ueZ4VpJxNjGeHwxBHve1z8v",
  "key8": "4dZ2ts2dHD3fEodQDKsGrWKkcvU6tqK2hC2WyqY4v7fSC7vp6BAVzD2GV29d3pYkezZriT7jaR2bC5cGfw9f2162",
  "key9": "GuFhWeTJvMEuVaRpDM35m43G6wNJz1uC2z4QmFoZpUmrtZmg44E5TbUG625jv2HQ5WGPYMsLw1QN1M5skLLTpDw",
  "key10": "2dUaj1uiKMANSJndvwspMmxRQX8TmCFsianwxqLBcfZ9Y2HYKqf2fP7ArTsHp6x8X9wrTuWa8QhzLSgExGBRxhUV",
  "key11": "5LG5D6WzBD246mgDQdR8SmZi52WJP1cJf6TsZLjov7NvodP6BkbMp7CWESxRUkTnYmyFdU6JzcvPwFyJNRdP7n2N",
  "key12": "45kiUpnubbuu5S5az4Fu2yqRj4H6REzZgHiLcs2DLExhXXUxEsV2zJmo4HU7z1gt2HyZXhSUQR9zBeZRagAoktQe",
  "key13": "2zQuuhw6u4G1Fr3PAv83J2KkQzCXvZktcyfVjJtzNV1yqwuzCF5HFZBJQgo2F7no8ix4vT2Vy18yP1sXTE3xvzCM",
  "key14": "5YYdvgzjgSR5zUCd76xUws9yuQUDdzkCTvP3AvAy9ZxJaD2bByUGhs6kVKiksZMYNLjppBFyVhjEoCprEcomhZHq",
  "key15": "5uShUE4vQ1hpP6uWusxcQFyWfKbmu9XBaK6zcGaYJy6K4YndePsw7EyugsFogbxL7AHtqNC4dmhSPfjC26zR6ii2",
  "key16": "4GuXiiVfkkGUs5ys8kMgrBcnFs1jjy2XZ4GDGgBraj2jdwddzTojjkaCdjTq8aDsdo1X838gry5P3vUi8cHyaziK",
  "key17": "4QvHxPduaG9dD1hNYcNpmSZ3gPzTnYpY1BAEBPBjDTfXq6sR7QZqMK8x43CZWhnHxNGp4YdVDFg1mHmv7hjkHASC",
  "key18": "39LJ7tYKbyi9DXtUNr3fKrtd3icHA7JcyCbJpcbmLd3gQuEdTKqpzKaW7DyqJRZUrSpeDC2hVnHKxBHfft4ZqBAU",
  "key19": "2UcopGgFYTLKiR8tA2oYukBbpaEnz52jBNSfZ5wRQQmWmt6uEPJ6AtassnkyP12ZYtbWLRjwFsSYYkJXkMPVVsV5",
  "key20": "2bv2mxSdpKfZrLnuFDgxf6727yQgEoNtXpc9jcq9y2PYzU23djmWAVaHtpAkUMFzV4dmf9tfxty8uuajNJFzDvaM",
  "key21": "5bMwhvKryDDuSwMJSJoBtkqEQo1jpkC6uji8txRZt3MSenJgt5X9zewXjnbQJJoRkBwm514VWUHXsVLeCNRkzBYM",
  "key22": "2N1bm5kHw35VrVXvWrjFFB5ArWwEH9MTNVhJcnKpUeiKsU9TonMeumLMjVxzSpW3JFT6tBuFCFQYuFuiZFWFyBU7",
  "key23": "65Gyutg6rb4idfASmJ1oioVvmHarVEVcBsKupvqzhR2CjFkdJnrFpgmVVCDyQrqwc1ZovBTogD2mNZRvrefZ1tY",
  "key24": "24b4dJ79scW8hrDGVTqtGNVXNsqyD5m6VPJEwtDK8GivYC9QE8YgmRG7Lc969HcVbhVNzQ9ktSJodYfZUxgMRmQ8",
  "key25": "42SKLhkepBvZXrn6EpsMdKtWmrHo4BBkB5Q6dMJToKD1pScrnhsJkWsvP6GyKQQ4qxJ9re4KfBSzm4U5uD9ZeNPh",
  "key26": "4cYpCHfRQBXhQevkSQoAesCP83hUNVG1u44z4N7eSkEms8PnzZGyFMro1C4GbsHKm8JDstp2MRrHhheHGxL1azDx",
  "key27": "5RhFcR6dGDvnNKBaKDYiRRsVYdd4s8dLDP3znXvhNQFnPn3oPtqGn2JQeFD6ghYdub9p9uoJs8KfqHSgxy9zNTeW",
  "key28": "4oNCrR5NnUusTr7mEywhRtUz5xP9pzMof4hHEyxySRB119HWDPZchgJwWwrh49MnDjRmmZN5tBcrcPaE2a78YQKH",
  "key29": "2xpyP9dt3nD8SFEbMifqokAyJNSgjrUWfLHRK65GeeEF1LYXfJnoCAHAJtqWAkLbEjXRTSJ8VvVQhBFSNSUgS5VR",
  "key30": "4UaqZ8u4teimhE1JTmUpe318Epj6JQ9QgRGHekZKRyKAc9g26n36MQNyUJeqfFDQBEVLwkBtyjruyLpoRzQEZi42",
  "key31": "agy7dFXvQLo4GAr2Gm4QMeiwPxhXNi1W8ShK5v6EhtMyY8sABjCyQGLQF6hsBMNX5pJZT2qRDyye5dkvKzbYQHV",
  "key32": "3ZSjMotew3kt8w2G3PPjNrr5GPavxUL3qrMPBrs2B7CDoxST2cgHZc15ymPuJZQ5VM1drNsCJpbxw3Hv7ukbRQ4z",
  "key33": "4eKEJVKgGvhYp1dDoPjwPLwDCC4yUvAwJMNDwTqPHrDzp9aBj15fKv1pbvzoWe2j2aburJxNe1kMApzLziU1hjHX",
  "key34": "4tZFMxzLVkqpUzGComnid1wVZ8oAgttt9Me2m2mT61X5ySkzhod93s4okx6yZhL7xRNoGhgMo5VM2XLCJAGjBpdt",
  "key35": "5XhcRvctc3RT3AgHKgd6pRDhAjKfhnekYaFENw6NtrA9jge3868rnkPEQxZjNhitRVsSjPKfgYsr2NcTBu7PfwTg",
  "key36": "4nN3noEGTGFYo6MpiJVimBWVYZ7xvkwwA8UHBekEB5GS8F7q4WvNSd8X6pYcJKM11j74Yo5hnpKuYVYgq5uBEZKh"
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
