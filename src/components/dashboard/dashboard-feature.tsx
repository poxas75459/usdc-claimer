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
    "2pbev2SD3KqzDJigepWtnCMAjHdnbkSh5P3PiXkgYVUuEXUZLve3pjJKrGjhyYRJJ5csNHyxeNTtkqC8BYPf1254"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4shnNgFtYV9G2SSA3wpujDpA4jQQijjmJwzjnukvZCRqdPCSWVGvbDsaq8GgB3pgdY38EVm2F9CMjpeu88tzjvwE",
  "key1": "3zJ8NrB2eHUAauLzHPZDA3VzjmHpi1RsxZJwY7fgc4r4gXfjrTTWhbHCah5Da4MbpvoDgr9WxXMzCr3QoSyZN5Ep",
  "key2": "wA2ErA3LtfXTtbwgqtBM9g5t35cA7ANBfCgzXy9wx7aq8FWKgfGFq8rjfL4tBkZRpbzphKuTs1yseynaRQkH3bo",
  "key3": "31YTQVJjHbCvZHPmDqYsP7H8MYwU89kRhXu1CQ9NyJ8ppg9D5UiNfzpiB3T6b4QMySnjSps7FCC82sr7eSDUhfzi",
  "key4": "9yAHGZ74bE3WNQtbF2HWHjj2EZuaJiBpJhkzwBDoAxPpNoAYGeJidtA2iEfYNebacctW7aSWqKcuaHyPpmP5huw",
  "key5": "4u9ZeVQ4eWiFggLdoEN1eBP4Ragb5KhA5u7B1VpKyJ2F6NZ6xqeiU3mmqLut7oegV8jAJVGCtiELejTueqMByffg",
  "key6": "5zAHfTbzMZ2gtoTCvfZpHukbtvV4KAT8SD28gADZpzj65iZnNCKVs2uvgLQ3D2e93BwoGq6C6UJEYPbAetcs3fwz",
  "key7": "2mqPD5A98fPkSLCgGXKMRujt4i2hC1XXdMYnL3hAQJm9GwngEPibUksKQTZj12GVDxM56YQCnzqnYcgzZoNNCeJy",
  "key8": "5LRfkL1DhVmbvwDAntXfZrA767qE1wnyLE9rSG1szu6nab9juqQSvETCND5ReYb9WNgHAuizBrzvCKSkCkuZTYXm",
  "key9": "jphruXHsH1Gn2Vb8jmaELUCSL5pFExDPm6Ju3jUprP1pM76GCSSD2hJxmeLRrYfizb3VMgdLUgyEjxgh7Mfgksc",
  "key10": "4HCfHyp6VjFwb9ogA3VJGr9htxjZk9hNi7z78cN4zjbgLKsTYAqrDTtbztF7WnVKgdedzT3oxHvCBvuuHdqgPi5Q",
  "key11": "DvGsWZbpbD4iLupjgSk5a4SmEmFdcgx4g7bxhxf28WffqtNKKept9HaZXeohSgZnFcBXhQTkySh1SJMGyjRtXjc",
  "key12": "3TMhdBAdB9ZxerC3E3yBnWV1ZEcTCXxzVVjHc9CUxJ2MLcR4Trvi5JP3WgfpU1YQ3LxShDJ757FjayCjVnrxZFsE",
  "key13": "4soHKuCgT4M18XAtsRUJim8iHWRJAudF1K6ZmZGG44e2NgCfXPvqcrTxNWYcdhZnuWY9sW6oibTzUhTDANdg35r9",
  "key14": "4MYsKrekVL3tT8z6QTssBBr6hCnYjrC7942wFZzo1AA8EmVKU1ybAzcj7hcNFjDjWhMDejVh3W4yzDG1oDsM2b2a",
  "key15": "2phmKPYy3UF1TrmvFzoZ6YmYngB9ctig52Q9byRMm7ZtVzoL2adbongtKtHmj4udZfsqdtt1tNaC9kQ2v3ksnG4V",
  "key16": "4LFb8Md1i7caiG1ijumDHw2ydTPsgWzscVZ15WE64wWZg2437y2QSxXBsSgwrbGTPSQVUV9PMZyNVTZbTR8WJag3",
  "key17": "fVeZ493yWQSjEADkm7bbQv22eT7k8WDwggYPtCeYsZ7UeVpZq4xppGmaox5ypj1uuTZzQNwm7nmHN42wCeCAhhS",
  "key18": "58MWKgj4nBBs5YqK7GtZa1X1cRATbouRLYPR3Enj9geTXXv3KfGkYdSox3J9YZcJCBVxq9vsWR4NKmNYJHQ3bQTp",
  "key19": "1PfQXTJCSvYjJ7XKC2DSuyRBBALNTfoB9mCTz9P8hJobHerP4TqbswpfAkQXP6tbL7sDYWVF2GnapdYjJ8bHfBZ",
  "key20": "2uoSx3PzC6M78DuLAXuRbEFR8HSJaF6bHPrrmL659cDjdGo2muNAky51yFihqU3mHhUFSN6XEurccjponXLTMUEg",
  "key21": "2PsZiLnhoV1yznGZ2Mw2P3dvFxbmgB8YzymmHwHDqzFXgywUzZKJJ8ySgmDQ3GBAYv6mUvGkJkJjQVmUWeZUaW3L",
  "key22": "2uhahgLnudCZkCmneiZqgv9L8kuzXrPKA5B77vWobUxFUxW1XxeX8y2dQSmYVM2mt3LccbtCtSerUYjsDn1ychA1",
  "key23": "4EWU1xW1CFzvPmiJGNLNVYyn6Y1bGSRXBM6GvomutLygdXWykHfxeujekH7iD1NVwpEBeM84CY4T8rgKkJv8pXqx",
  "key24": "5iEqpwe6vUGkXyUeLwCJFk8hTLDgY1tLtefvp44NBf6X66CP6QsasfMBPBAD6AdiDzARg75HmaURR6di5v9bQFLk",
  "key25": "VSkeAeous2epEkjcZEhZ11s3kMSSerhrgQpcnn4pFWcLXWuBhPemJxaVPhnWMSaLBWX9jZz5XXQAfMeem4Lfc4q",
  "key26": "aJpRjEdi7m9Vxa9XeKxaZ68hw8EUZ373KWSpSvQNWVm31Hy1MWjyqNVRtuXvKSnTEVTM4q2Apkxy1TRezCjAKCN",
  "key27": "5n2eaovF6zhA5yV5tRUAggVWhT47RNyzaXCS7UbRAeF9Xu7pbn6BdwcEZRjvPmcxVp4MBTeQQTot4Cx54mxhTmo7",
  "key28": "3m6XgfqpXPixNq93jQA3PXkjXNQbLcDpczmVTs9YJ5RstawDvtPJExm3UmPXg1gu8RWUaSD2iPuJVg9DzebvQaki",
  "key29": "23qC8Sw8NHamRzzFNVZaWhcrFJvrFCgRqrNVTiseZkwZ7vna8CcaCAvPoGbH8HCpbtBdrAGsM4ZK4va2MNiHrjyB",
  "key30": "3DSVYH1xgWP4Vx5njLUxzfipGvKnCxNUB5ictS1iCfav5jo9tqJwacgEb7w4JWYejSbGFseEgn3TwbL9WM8Wm86K",
  "key31": "2xbosjhZiR5vfUht936v1tcXTkTgEGeoJV9YJRvWnYzsYBi2QiC1te6JEbJSjJB6PqFGgnfabYN5d32iFFQXXPy2",
  "key32": "3UaV5DpzpTbUrA6dZHzY9FbrUqAYdszGSPQfhMzHDmCvpTtYsKLxu7rcCYZTRvdekv3ia4qRdLVi4N2rhyhvsJuk",
  "key33": "eQUKvAfzZcjh9VnzHBThmjBTbpaGT8fypUxCTEszywSxjmQzsjLW1soVEqxVkJ4KarobQ9cKR1AzwbxC8oxThjf",
  "key34": "3Jq9zmoLCoW9RqSwC1P92vezn9ShJ9Yi4EQLx7MVp2HVMrWw3vscZtjJn4BdeazMtb3mbyrA9sPNfgdvk7LJVjZc",
  "key35": "2jGa1exHWwD9nvN3oiviUfHYTvbb57nV67QgENccC64q7MZDNmY14jmosztFgpckKUahvDSfN7WL4pUB85Tt4uWK",
  "key36": "D6eHKtyTUz7cxVSvEe3ErsKLCss4GpoTKBiztMcFFgqppUsek4JiWRqsmFA8DVx9uwJeFHCqyEqGknjT4Ay7W63",
  "key37": "3wicKmyeqG3rrbpQGZUjLviVijyb9HDgTU32PnbaYZMHr1bGbJpgrQLU79auaxaLbVBnPKJKf7H1KK6WMoDGX3JC",
  "key38": "4Fqk9qGb4tmXb3s8fs5gqTcE4MLQ7sJwczuprgTEJgVDgpdX7wqWGGUNkqGC2VycCVy3ocVCurdn997BtyDmjJxK",
  "key39": "XH626YcPyBxaXuziAZ7DYn8HuVAwtoN8v2yPob25vGc6nYLZjmygtNvUx5g8xAGyXXYeFSPzxs1tWMA5aJFibEw",
  "key40": "xPzeJbP9kEdXcM4T17Akpf2pnZ1Q6ox1S1t7RjMXCPxsqRXJnFtEoAdCYm3TiGsxR5Ew9zfBhB7a981mTPH7pYh"
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
