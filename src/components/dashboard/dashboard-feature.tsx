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
    "547vwx4YRupfwMZz4RkZYvgcuChdX9SHNmDVGdLqf4EJiRezo5pjQZmYwuETVPP9pkjzcKM93ufqm9E56MmgfSwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdqfQFXPwUd1HpNUZk2ixxRN2j4x7F9pNvjfSHeWTuRvCzXzizhBHWhY3YjXeWV9pRdtTEmvEFXUhkB1grqYTQJ",
  "key1": "5znuQop1d4eXKQwZAYoWkDuScSnBbavxTm6vf7PV2seT1dLFqip7FppqvaXQwbWH3aR6DAfGYovMNk7Vc9wFPuYF",
  "key2": "3KJTcZqEBzLVAdnf5UJcdXWPcrVW7BVohUu3AYkTGv2dLpRPWtRptnvB6z89AjVSAs15gDBspLuvjqYvy9PgA3d1",
  "key3": "2HhQtwTmYKhpBdHfJYeCrKzBnKYgZtRFhjAdBr3RbxYDw99W69Lp6fmdxVrehDR9HeZ5deqHdEY7BWVqSvGz7KAV",
  "key4": "5tiAhM9DigwATMyLZXtJKCvXD4sF7YMJD3eXNrx77vwkCEYRwWEGv1rfNawppEXEx7UTSSjB3hR21JMXhfYTTBaU",
  "key5": "5L9Xq737aGuc3rx3cefgWUcTreEGBUgYKzSnFc5QWK82RSyLMdH5HS8L9dJyyBXwcz2tLzochfnA5MFJgvucLfAi",
  "key6": "5u4ns7k49W6BwreeMuLgsoUA3sr2rfmRvzwTbHqVXW71sQJaFrg1mzuNtEvZABtv1xDhhLGxMVKkoFpDffutCUeQ",
  "key7": "5EHP9WkC3ZKuchPamJkdjTFMNkmmxQ6SXaemgwX5BCGVoA1UYXJRx91c422daFHckARg6aSipHHtTCzqES3PHn87",
  "key8": "5yC4bkb5PdvdirRTfzF3bmzmRXHriWhX8pWPniKEJBNKTASvguhozwzXbUagfjwtveivdRCyYa8iRmC15Lnj5sWB",
  "key9": "4QkQLqFPwSkRPm2xa66yVAQpHFZyeEzP8CMB2F25PHePByfMBR4HGiCnbSdfQaY5VqEA2C8TbwF39HufqUZVp89x",
  "key10": "2WV1kf68h7n9TR3Pb7f6zEhpNMdyJ6JeGWDdVjGm9gBfKwkJu1ErPu9URfMYxcsLLEyGQQWymkawPM8q9A3ewiKB",
  "key11": "41e1LPc9zNk8HbLrB4htEt6tTUXNJMYC6osWepwyW1qTUTc2h6GXiUghEbLeDPBbUxsUdL2RzLBV9DSup2W7yc5H",
  "key12": "36z4RVdrTMCKfAvJbgT6spiSo6aETNewaMrjPz8R8tephHX8DxErKBEi7CfbwDZYkiJvYesaYBJEN7GuCcanutgx",
  "key13": "4iAE7xbL5Pb9fKJouwbaJKGYstaYEtWnYw2qfRgLgVe66d7w8GkN8UesozD3H3KaYStTxbKW7euocfqjkZN9Q6Zt",
  "key14": "4zcAQe19UYtAL76GsQHWimSwgKXdjgRR9AbM9aT79T21LB7fznJNcjFbQGmcScDMLLEZgUoDkbhCRyqE6WpnAHpT",
  "key15": "5SgycuUsD9jWyTxMtTeTkkHVjJBW1X38pNBD57Sw4aKyLB7WjwDNBzvFNKKfjhyMUveVcajgwqe8SMdQtWH9yy9P",
  "key16": "2UuTGSKSqSyKpLp9PNXcCThcKBb8GjHj5x3zamtMZpF7AxTSogDV3DTQsvHF1X87bYdHyMect7kwDpcQAxPiZTpc",
  "key17": "4Nwr2ri1JKRrmtrZhshCMZGv2WjX2b3JKh5q7mwAPcRHttMXgk6HQPfmc4Awd3m4ARNfWXgvCBSsya5R1MbW2WQ8",
  "key18": "5cfNvKrhnoZbUQzQEFptCyghLr3dACMgMBMC5DQNYn8R3Vsb3bsmuLCTTCniMz4TkVmgiqKTcfnKiMU19FoabyBJ",
  "key19": "2g2Ka9cYLd8o6AiCdkhZdDKrpjHMfyQLjzwkwwd5NoWzAJyzmuVXK2ycctPge63mWgfL9Q1eoFBnn8uzgRwWc9HW",
  "key20": "2o37Bb6MXERUyXXocYGxcsXrFdfeZFaad1JZPF8Bcjnp3F4kpVTebyayKBjBghAxHhu9KNyq9QuzwT4Ha81KKsbG",
  "key21": "2xRzq7bvtkJiL1A9pNiru5LS4cB354LgAqpnwp81Smj3DWE5bgmBqhejWjabSXYH6BGu7hwK7GSKxCWEv9F3xekN",
  "key22": "3yAWNdUkscqioY1SerNPcdzGMqSrqYS3irjgCKy35BaUfuyW8wdkVpVcr8993y8uYioQr775oPqZpMmMjdZK6uT5",
  "key23": "4JfuVqbypDvAB3MEJz5h2hhZn7dVSnBiERNZNcddsDdDrsrunyGqug8NMQGU1DcqLLcw6BENFPcgVKovtxHZU8ij",
  "key24": "2JD5XKSEDrVQenMyNyi37xiVRN466fYjpH35Kh38irpNqC25Ew7yV1Ly7khVy8efVA6gGv5N5EgSrpz6zAx53i7J",
  "key25": "26eohodqZUXafePSBXe9drfnAnqBtKkrX3fC6U4cnbFgmUMjso4ji6K9GCw7HBmfBgnpZ7auPZi4pC8VRUvGt35c",
  "key26": "61o263hRFkKwXZe2ngd7X7FcgjQdKszJm4PBX3b9WBuufRKpcLbNQB96NC53fjq933DeFNp45tjBbM97uG4unzbU",
  "key27": "49D3fnTtAkQyGUz3saA6VneCGpswM4BxurpBvgQmejHXP6iV4E2BAgAwbuDr4JaVPeb5V6dcXyC7BJhjXicUPURT",
  "key28": "3t9B7EXD6cpybDzVm3fhseiSm4LWwWsjrwneZUGVU83YuGX6FmvmZPE1GMmZ9hz1rSz2jt9Hh96m1cCHDFdoPjnQ",
  "key29": "24CS1zacTK83Um5MGGy8SVWn9PrmEXsYsUmE8VxQp2qHtHwQKZT9nY7qK8stLswWnnyjvHY3xLoV4YbXrAAxmJ9x",
  "key30": "BsAL8dpp3p2nCjyufwxhZmyNfFYg1eYoEekmtBjsWswbCgUke4JDCj1bBn7iy23ViScerbEgRifmZaUP3Ggor6r",
  "key31": "2mXKtqXvdiXyhxK7RBqGoHUokGFeuXUGEwpJNSsmK3VskTwhBANMY6S1sqQyZBQrRV2xa5Z8QZq81frRdGpdnBrG",
  "key32": "56dvpX6kgpZKoWdHwu2p7kT29TMcz11CgmwJ2R5c6ZMoaYiJEoeXkNMsSgGqVcDTLspnJi8fRcQ5ksR7qdSaWDM5",
  "key33": "4Q9Q8H3hXKDAbF1QkvTdgZdjtEd9FcfhiA2oQj86bV5W9fmxm1BXYNAep1qTgmdAgeDLnNpUC3vJ2Uv2c518DbaN"
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
