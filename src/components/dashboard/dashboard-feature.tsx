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
    "57MhF5xkvbTBQRYAybzcsgkzkA7WLt7tooM7RoQGKf2viib1b13WSv81UVdxV55g1j4PMMhSE8Y5bQad18XEe6Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5skBVf1jcipaToJUWiEddg26iajJHdVciLkAgBbo6raqNu8fCCF8fq6hN4pRmT64Sz8RKwZMWzU55NnhzTJDHGuA",
  "key1": "4vYzFvrY7ESpAj5KAU7tYrN2eUoj3YbfmNURT4ySHzvYDb15zh5HBtMfPKp5XCAoXteAYnyc8Pn7pckNgVWC46Uf",
  "key2": "SyTHK3V9zdfye2sqNP9kkP7t9wkVTxgnrkPAQd1wCYTasussWVdqzWUK42qeAJiZNeSQGHW1CQedFdFfYFo5z5V",
  "key3": "5ZFaLSaZKTaMVgCMxKcdULT1ny47NEXGq855Gnt8ygtuoeR83JbAC5NWB4iELZaEPqMS9tkR3tqQAiX6rVNTqpus",
  "key4": "36DSi4nH3ReK4LrNKhpG4fHhA4yJSpGhm4JG6ToEcsoqr67vELeXzE3hCfq9uZfVH4L8dzjBz9PkVs9vPQHyWu31",
  "key5": "5cEw6GooVUc1vQsaAoyDNyqNHVbqkapTNL52kF3kmhTpLBXa3chEtQMGyBVchRriq9GNY3mkz1hL6Zs3EwLujYUE",
  "key6": "38mEiEt44KRZnjdUveqJpiG2NaKEn5DavCsF7DfWY7RMf3mVj7T3jeeVxiznWxruKKfepYoMVwoioHGMFrRXPJPX",
  "key7": "2pMAERMTCRzq5PhRnn1s4Rw2Avb1uuAVmx4tj5ESUBe9fo9oBNH9o2miRE18G7D1RtdiXrmSGhu5rGBeRCi9K8Yy",
  "key8": "5vM2wpNYYrrgvf2JuATGX8zMzAmhoS25BRMPQwTbPWMQWUVbwqPeFoyPGZNZthHANZmzETiLMj54G8smYb5ZjwE",
  "key9": "3fH2ftxsUgGJ9WadxPULQcmciodtBkAZjhPyxH2RxHzzZcq1zQqRvrTJUqHcN6zMaXFkUhRKi84TdC8C6y3q9SoW",
  "key10": "3uMGN43P8QAQ1vT332tDoNMXDZg8EpSHdZKxFD7BJoVWybx4ii1dhYKFtMy64xWH1ejLACESG9P7qq33fCcHk7re",
  "key11": "2gMz9xSBe75F6tQbMp9S9o48PKXNyckYDg9KoMRvH3HDTMvbnv9gogxqy3FtCcUazhm3XR8sDqyqgEm75ynGdSbD",
  "key12": "2aLuRKPPgkjRxvkeMmhWYyqREpg8eKrjDoAwXBiYJQmbAzKZUJdXSqxLBigeWR4ErNN363unwS3UpodRZFCTNGU1",
  "key13": "5qsmd2QFX18xVzhYsNFVVp7VTdH42XJi7Wj7jLcMK3FYnJGZkubraRCHxgwbE4rPFh2CPBChjt3in76RuSYrbWLM",
  "key14": "4bJo7TBKUWE7DCe7hfJmED9wLAwdR7fxZw7QaRVBjvSBbgnnEwUHyp74ToNR7Hp18vc5WndEYTHnimpzvTxzsxnT",
  "key15": "xChXSFkq7GELKgEmCrDQYHWSR1snNRh2BG84zTw5BtnyD5BifZeVNnsARUu5BGfA3qvPP8MwbHrywimiRhBD8hV",
  "key16": "5fFbTxrdvWb8jyNhipVe1MVtqC1DVvf1wptytHRtEzDYt99s3HMPL3MofhvTrRw4aZ2Yt55V6SP7oecbJ7uVz8dJ",
  "key17": "5yT932AidR3xg1rYuECBPfdudNrbUroQbZGHNr7A7vQQZj5azuk4nFK8JEaWuzwwXWGC3qyo5vQFjJci4kD5uanP",
  "key18": "ndeSXVY9wNX4uGcnH9e33QDdLhFZAnr37vNp8tP44wAMuTCiP3cpAnKBiFSpW2aZfgxtjBn79r4Q8TCFiiLVvWt",
  "key19": "2Zh2ThXgbHWBWqkTFX7o81DgKyTJD5he16qp4ARN6zt8m13Qd2bKJWsFgk7knCXmhsypF2jPWAMiXdAjgzi8PSV1",
  "key20": "5NrQo6Dd5tjXqtx17vDuKbvzPzaVgG6cvtH8TE9BuPL2QACZ29RkAX8HqA4DXgRmN1p215Xv2ApxJw2rpt7w6F1M",
  "key21": "6eCRBDuBHQ1ooSKvBnApCXcMWDTneuCwzLXfCLwsz4oEfT9dnya4ufLvGiJC945GH6bSZ68UnvWbbCLwbjZNUzv",
  "key22": "2ehc8BbQoi1ibYxnfJQS4Qaas1HqVgEzNVtE4zTg9hHkZYiKXM8cvb3Ht8KRP6Dp8UZc7Nv8jB4VQ55hoREevt3u",
  "key23": "2pmbMfYnZLZ9dFW1vt2CXeSct5rUUFUkeKDjU3uZQmBybSmYkGJB9oJX9dScjwQbS1gvXem7LMDhkXD5L1DRnjdr",
  "key24": "5MFESzNv3D9mCgpjGipcNdRFj3xNpq1owXn9yuBoCiQ4KHh8gHRgnxd4YHXiSpfHw9N7pFSuF5CNwMUBpLFCp5SG",
  "key25": "3sj1YT5sDksZmPGSPkBC5TK3GNY97amQXPHe6CLsVCahe4qXmFFbZXd7XwZphkBU635Xt7eHKBYNRxjPPp6Q3s8",
  "key26": "59r3rGTa3jDiWguKdRYhVNeM7vvm77tdWr8V7BebkWP7RLrs6mWzcaHDGAm3tCfjmYDLsDh3fr17PLCHoG5H4deR",
  "key27": "YgMDyKRHMAJknHVNnpt43wdXtZzUP4h4cGWqhYkFpud76PFPgR1YHMQ9uhGpAvMEsow9v5CMFLaznPnKtbi7GZ7",
  "key28": "41mMAX1cd3MXKQajb1R3VLxnKsZ4gA1GMq5yY2ZWeMmVX4H7RrdPnMR54Hb9f375MFYTULyyHcC7LrGd8LHUMq9w",
  "key29": "4E632KqLMyGnJLTGnyEKgwQfb9Y17QDKiCjyJsB2iEfvDTiYekV7gdJ25R1cWTZou92kyk1h8LbPCGz2LwaNYu2w",
  "key30": "23dJ5AZHHQHt6E4wvCN7YA6dhuLGL97bSMYUx1553DXwhgwQHE2nb3w8HAcaZHRC9Z3t1zad2wgEFQvNGvRxcL1a",
  "key31": "4XupvuY443gtm5BTtp2j144zaqr4kXmgaqxevTu6ZHxvxae4qiqUdUWEeqSazLJrw4T5Vq3Z4c1YX1owLCdPLKdF",
  "key32": "4Mzk4tfxn6QS3Rx4qkZJvDEEiDx7DDPPyU4mJKURnM9MUeYFuqYeLHZzfbDPXy1DYo8QcwrTCF6sk9WuTDfk62vJ"
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
