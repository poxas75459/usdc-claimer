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
    "665HR4ZvScZYwEowrAsbFRNPQdMXoQKzAgq3e28oAiZGFpvYR8VjSRVAZKgAwBZrkyFVGSb39xtJQsSEE3UVzvPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFTo64M4hHP8QKEo4aZEo3o3EdRgHvwX4HjwGRPYDaQpEVozqz8Hjorxejb7SwNRp93g1DAUtkQa7RAJCc3UPDf",
  "key1": "59dM7UVpDFh4X3kYzAsmBANDjhb8PsKHYLzzpnZfYfLeAfVR28zbUgLoqa7iAB2WvFP4RqHr2P5Zfvy82ZxxQJo6",
  "key2": "3dsoJom1d8e8CrTQ367JE6XCeepKeLwMTccLkXEsBVC5SXeV9hayAWGHbCJeBtiFgTQGFqQGVK6G4M11BVmRhNnH",
  "key3": "4JwtnbqXHjNfqwwdvZZ74Ers4DRQG1oajafZoSabuJYo39gXnPEbzavsZtpyPkZMrKEuwWAeUnkUsGRhXqYVAygr",
  "key4": "2Q6Vz8avSAByWVokz8Sb9QzTS3w3SFtqCzwYpSwpfGq4ud2UKYwGaQGXhY9RPrG2zCSdFoMdZw3pXo5HmcaftG8f",
  "key5": "2k1tv6hceLrCWJP3En8aNFHMgts2sgtYBbWXEQrA9idXa2a5jghxManZdH257u7NJ4sGSRAT95MjyZrWJXWCLHue",
  "key6": "2JFiAUK9k7AJ1HiTpnV8RvXYfSVzYBxnTWxppVJinDzssie6Z7hyV8Us6JLJjFs7wpkm5AkNJqF2JSrVFn4JE6GB",
  "key7": "3LZvxiVcm1AVgm2o9JGq2PP46GFUvRKNZSw2BomGZjt2i2gzNJKpPzHTC8yBLixaYW5i4ijd78pTe65xFdFhgsUX",
  "key8": "27CJRkhAL37baGVfvLytmG2HN8mcCoRyQ5pT1meSVBuD8kvyqPRdSAaHEZi5Q8GiCMyQ4PrCaCSn9K1q4PWAgHmK",
  "key9": "ZcYGzPbgJQuEUFdEcDNSx3m1VnWkuHCpW8b2Ps6wdPsJSDidhJmNfeaAe3eJqepHqF9974es1FTDjoywt5T6pqw",
  "key10": "rtgmuCEvHoVwHJZaBc85DSZvPcko9mP3k25pWpygdmbEy922GKkVqYYwRCUQ6FxXpgWzMznEQZAuRymnyeof3Cb",
  "key11": "3S62sMuaNh6sc1VSLoBBVwEHMSNoCZLKuvHhc5ZSxDiFCrkjNb6JitrGD6a6CNpQWSB48B1hh4MtdYZfNbbRw6mm",
  "key12": "3gqt5Jj1GdtgmVrdhFLyb4HSNpL5dQQdo1JY7JHknuTus3Yzhjigvu7rKB6467GFX6n6jsDXH9u9SyH1CAUA3NSQ",
  "key13": "2z3twwxQmdKUUMEBvQGQBcqxYezQ87RyxUzLEBSvYCc62Yc7LPDsqusqax32LHRbDnxpBKMapMpqwfZRyj8qupUg",
  "key14": "3GASm2ssd9AeZWVdibkSHxTMoBVeL841UKyAi4S4r9nkaz5zb6Fe2igzKx3MFYdpoYKJUqJ5xgrLqQEVG56k8YNy",
  "key15": "5XnJny5zsGcohVNe2vZUy152WnhvnWBbE3e13Nt4SDJDQQyiiM9i3jDLvQHYwcUEAdXNCCgLSeK9peoEniGZq5F4",
  "key16": "3dac6WbHQ49FBNvVUuouXrnRqbu9rQpC3rrS8mgAZBwyvxkmNBFr49DZdnHrUKYjgkZhYndAtmyELRapFjXFASWY",
  "key17": "2Th8TB3DA9NYTrENPV6eUPSPYabHcBkbEg3xzZJ4ZEeP5YKVph5GaJp3qDE62mYXYawcUFvcMzevGZ5SCq6ZShsw",
  "key18": "4zXjJiqvyTNchEQMDSYmTrJPfo4oiVdqG9SNokLwAK5QbHnrVDYBtdtcwauwkFj14WytS8wsLTYw4xM63AoPp9KM",
  "key19": "3Jq4pUJZwUg4nmtaNAVBLg6VnpmGXj5rPYMGkF8pWYVbSvJc3BmYqZMRQLRXu9czk9YyQbG9pDfQZWD9UfHKhTyE",
  "key20": "YF9fjbLHqatPgMsCKwodk3cHB5R74o1FwC3YD6TPQ88jGj7wPHou3dKL5f99A1uW5zMurRhZ6AMgLNYcDXxJh5s",
  "key21": "4Tsjx6brKs43MQEyVLJMNJaAGq3DviggrY4xhJYMnZss54P9H9gC3pd8DgYV7zBkw7UiPm5p5uQQUNC4NF2hfXPm",
  "key22": "4CfAB1dvp8T6W5qR1iEkzC3rbV4e5L31Pn5qDpzPYr3QMf1q2pzjFoLjWx1ZcPUzYFthE63f544GeyoCRrCXvYAR",
  "key23": "4Kwvktdx4rkoURQGDtGJbVWxyqTJjwieHNrtkFvaJ6QAwqLi1Yyt61V77ZDMsmJ6cDEsPHoxLWCmckDGyspNvgeU",
  "key24": "5ZhUemHMKnjVQjbhLEYyjMNdAYmKRTu47r4dPnCWHqScwTFcs9DBNVuW77SDWJ3JL5oYvHyrZuvj2tzhiEzH58fY",
  "key25": "7Br5aESwF7fGSLDE5c9CXDNYVfUrQAbaGwkyXszKoki4y6NR8wawkf7GM26npo4qUz7iJMhizgZohw6uNghghw5",
  "key26": "TCo9wAw1KF5Vxyne5DWLZvnRwSHw5UVBiaMYSSAKrWxfX2DFCmfRJdb29ptQ8sq12aEETHL18eDYWTcEcU7NB8T",
  "key27": "4tw5UVBi5uhFaBSCH6JJsxyvEMvaiW3rCPem8dx6hJgrvKvydQCvhPRTEmTf7EuxAh3HarRMJSpVXDQWUCpsRx7u"
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
