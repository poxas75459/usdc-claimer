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
    "ufRBLECzXX6ZN7tDPxLqM5rPVZop1ogzKfnSHXoM9NZ4Ai4HieFUY92Hs81UGTWiHiuQ2VFccoCksFcBUcNW9wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHrNkcT82hPK6swLDMn63CmjGwAYcZSzbMRyzbyiL9ap5z9wSRm17nu699C2ydX7vp9T6MecGx7Na3mBT8zFT2G",
  "key1": "5r7YFUH6B3koAkMV9YgWqDnoaocXADDsArEj1Dznbjo1YL9qt4Bj46z24qwhdXJ3GDtcpZsWER9kShu1MvyexdVa",
  "key2": "Aru4MXqSXekxUULsEPrXzSi3aMNPD4pfYpghePz8GbtKq4scP6ndGxhDMzWNfGPU29ynVv43qudkN1U6fSXzkQQ",
  "key3": "4wEtNNYp1dPrwbMqYPdbzJ3cgVjDDrYjPdZ7zTg258WerQMYbxaDX2ApqXRNTcETDgBEnFpxDoiYhoqZY9xMYUya",
  "key4": "5HHzgD7HKvE88Vfywm73cCMRYwh9K28drHGdUqfMeHge5e4yomeoQ6gx5ySxD5VGVDMjZW77wz8h3gmpdE2mLgzZ",
  "key5": "E5tBkFtgUN9g27YWciNW25xH948V2zgNpU7eWRRfFS6sCTg2WPk6cuso36ACx5DoDpzgpU3bksGJ2dcbVFiqnfS",
  "key6": "2ptMRBSskYF1FUvGcvEuqXwDZMbEdUBU8hwacr3kfRQw6T3eWpncNoKZQcY1bX3tamzBdWNzKns6ytXqKYHtoV6R",
  "key7": "5BPCv5kPsLKj7gPHXoZwmQvbq28mCpviMx4FJyUyo1DA19zSX854oL7pRgP8rerrKXmYfmSzAKYNQTBwCsHC1cxy",
  "key8": "2vZ4P4vujTz8JAyJpYbV7zBv5dAA5T5vhykosogKMBw8Vvi85uMzq4pnwRY4cBfLBiUxrTqRPKcFq9tLizTsAMET",
  "key9": "2GqKokftCx47BmcBTRx5boKAbQFqWnVfKBwAbJtJAFmoadLQQHpwg1wbKHzGKyDA7nJCCq2YGzZ5AjamcW5yDkEW",
  "key10": "5hTFZg3eLJ7txiBecaKLqVTfpyz5S7fS8raHkX3LobEFhF8e3uiXPNEJGhAFbTBw5QMHL5MwBbGSn7upirjg3bV9",
  "key11": "HCFaYRAXXVYqaEs6548exfcMQgMaQHhf6VcFTYPQfkHi9uQnNhNC2CYHihHQ8ZE9T4kpnbUd4NgTwuKe8rRfpMy",
  "key12": "3XPKVemnNDniAHnVFhZ91V7M87CxDxYALnnppZgnn7zpmrfoFPSDcC3GskvKi5Mf5oSQVme8quHeWDb6dXiGmKrk",
  "key13": "5xU9b4wxTNg8hSAWWgkjQT3sy8wYEsTLTJRcJt4Bh3K2YLG5m3R6Q4YzMR2DeigX5BFtQiNCPnPPYXEvPvEixyrf",
  "key14": "3FKxYtU4fAn51uDaGMEJw5xCZsvYvYYd9DpTZbPA76CnpN144BRqTebrLfxUq5MSRLzubgBoxALB7YEHqvvJa3Ju",
  "key15": "2Cdgwrrs6VpwDaHJmkGeKztPYmgc13KGTTpK1i2ff6VSVRUXZaYq3xkJxHwx2L9JD5NUEze4R4ZXmBqfQe6aX9UY",
  "key16": "jUJpcGp661mRxvGKWDm1uFRAzPG3FWrRzccYmFjdgxhYdhU4wiu28D7Vh8yTq5XbNpVmwgSxWXTGPEHAtGjxmKm",
  "key17": "64LZHa2PpoVx2yZkaywHzMWU5SrENttU9DJBTzXhf988zdHBQJgX69Ztm4xhUoKpyM8etny2hckts6aGNA3gXVdG",
  "key18": "4APmC2tRaKxsgyQeYtyW2VGpfgxehdGPPa4QDTjLjmfzLTiPGyDZpfoCw6R9XkwTj3x3zFp2WDcN3JbBaojjdLxD",
  "key19": "52xqLGYMJYQCZLN7QnRtPJ76g2NcuicNvsGQgpSRp7dtzqpAkhHrb6c5YKVyvq7DQiD9ivXJhNH98HEAsx8eRqY5",
  "key20": "iyNUXavRAawaVNfVix8WJhXKop1QPThrA4rd5VC59So9McwWrH4SkyR85kBuAhMeV7mdTxNPXbatZpjqN8ksZ3o",
  "key21": "5oBb29CrSuRBzVKVz1rSfkP16guJBhiLtFCfvL87F9Lcts2eHLHJfdvGoeXc5keJFHwAro9ja7irCZ3Qvjoz283T",
  "key22": "4YSbMRJchhWS9HWzhMZGNkCc25uuec1xDVxcKkXAawuFWuAEibQRfHrLeMr7k6mKFB4Lct3QHQrnXHjytAHNZUW7",
  "key23": "5ENKfiyzqn4PQEvnETvVVWU5TC5XEVL5QiCpkBxJkSoJMZ3hbWgKe1G6Rqf9oaXJyY4UxjAhzM9ZF8TqNxQEbjCX",
  "key24": "29jjAziTbafcEYnFMvnvxpE7pk5BDh1ykpxRFdzcSfHpCxGzNEoYyXRQ42SzvW11HTK3uNyhihNFvpsNt1ZZWHUE",
  "key25": "3oReusdbLfsTdBygMwyrKWKNLDJTn4J76uRDaz8ssgZkJWVjFeXasAztNLJfcSbUiXpJKSNgrnzq9MZ9bd8YNbRc",
  "key26": "348SSET9WAM5hSpP4cNRa3LEx2qmBgtkbNQ4SPQmyzcFsc8GhNEhZn6SA8M8XtXqsjRydaErLyMdCq9eDhJRyhYK",
  "key27": "2VNAs6Bw3FpnxTrEDN6AYGwQE5jcEmz139UaPLULEwPQYPeE7t9TK3JUEu2Ddakd3MGgzoACEgtQ9jRgUhUSAYjE",
  "key28": "2gmGY8FZkXZjVuNTMNZL5aidXeCXVN9LGSkvBBA99YLFsZDJ9FMNMCLfrB4fVgwWMPt1g2rXXV5eJ93b9AQYp6iH"
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
