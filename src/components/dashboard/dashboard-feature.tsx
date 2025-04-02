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
    "3nRxzctFD6a47wqTbV4yQZkEL1H6H9TghQJKydahqtRWsCeeEkXEhLkDbaEPz65yQH9JscQYyc3z9J4LyhhxCpi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbf5eAwrArm1A6WWRn7PEHDN2BJUrPXm5McqWdr1mTghJcpNJDnA6A93ks62Ad1538JUZJzHqVr2rzHESxTVyUU",
  "key1": "2CmpSBmdof4RjkDYqG59DcUpyV7zSZTyZprRoWV5Rx1Kdmfq3LUDuH4dLrd3iTZbCLtYXHS8fx4TNfdTjVAsyrkZ",
  "key2": "5PeGXuGD9xEC3ef6djEgkzspDjsTPf8Gbk1RCuRrYwSBdVitAygrbTYdXoigKDEKydG7iCfwkr4tpa284dhgroQz",
  "key3": "4wXQGuiLxYxthjBy1oHZ7MEfpUTeA3gaUk72rvyS8g3wEQbAepsqp7ZnQ17msMqiu1wQLiQHoo1y1hgMd7pCYWKk",
  "key4": "4yKTPBD5uxh1BXit3sBXgzwgiLjFv9rvsy9kbkfEb6qHF9T8eBK4eJSQznrAv6L9e2dNJapn1P5N5u8hv4gzsDda",
  "key5": "QBouXtbuiCQD5uumsyUA73tTiao295ujqZQjEBTQVGsbGckJEB7J7SeW3bGSGe9e8ZBm1xceY5DSGUHhcgGXpHC",
  "key6": "3FS6CfyKvieeWn8Q2wpMPpJfdqXcyiTj5knBX1PQvDNKT5dqmomumaXhszMgNjzNXEFc3KRNvSEjbzXK5gtv45Qp",
  "key7": "4tNWuTCMHpUrhqECphfuKJZELqZ6hkpiGPFgZx47sCvo3TQoByqJVrkU7tA2iEbAx6iUkLUvpqoaA2t6hQi3XHys",
  "key8": "499pGY9rCd7cnc98bB56x5bD6pBKggygvZwdAMWqoT8KucA4GqQ2WSeHuTfKmP4coP2WgvyuiVceYhKyp3LkA8jL",
  "key9": "eg9KLoLd5HHuh1RfANUaQaibKZvA76S96QaWec9ULHGHSRzYdo9qG1D6icC35af3hFU6cjXdeV4FEmwsfKnBq6X",
  "key10": "4h1uxUm5Bh2RhYx7uxwAMwVPnssUvSnBan9tW33a4rVCnNh51dZ8S567rznMEF6hAKMvpiR2XCdBC12JXVvDVXdL",
  "key11": "4gXH9W2dSziZjPZcmcHtSnmnqKKA1ZWCFG8DVw6FCANx2VNJ7SmyWdKLhPCFNVmwnmY7MxxbZpc1m1G3CAH3L8dR",
  "key12": "5u7ZyjBRMUXyVy2eed5GKc8Lr9Hbzcjr68vLpDgkVMHxY9piLGuuYdtNtTsD6MvNXuCK5ik5vCikBA6Bdy4NufsX",
  "key13": "5siCXZssWimmFbLdNVrjYL1ZSpdyMdZsqfewaDLLgaDHy9we6WHDAq3j9MseQu515LUn94tQQNqQZYG7z9wzhkRH",
  "key14": "hFozoQcWoZjzm7k2n7ef6cAze6Db2CZcWk3qAaxTa6RLRbd5d31nxxxqjza4nrHkES8cr1UqPxmb7U45WoDHKoK",
  "key15": "4kMhhGxdATZrRmHmcG8pn2y6KoY5WmukUkSzCkwviMvtPCZc6XF1fj6f3aF5B5CKywgci2NuPhzoUiNb626uCuwV",
  "key16": "2MAvkqyqRW67C3Y6jzS1QGJUt3r4GHxdkPnVmdouYGuq5ZMufGMrR4w2hqDDDorx4hNwea83eoVtaHUm2ADQ7Ajw",
  "key17": "4ENp5kxNTm7ud5hzKJo2mHJMsonwxW2x7PCmW2EjfsbpmsMV5qQAmz45M4d9oDC4vn88VMVgub7eSxYGA9BfEPrU",
  "key18": "54DCQ7KqMqpm7hmmSjU2fTxZD4FsH4vffBApqfKaxJkSxnBniJj8CwZUQzb4n2uQCCKg3MWo432enEyTv3uVVsMc",
  "key19": "5aU85hMemcdzPagf3aUoCnCdfyMLrCfXYBYW49tBDpKH1BEPoG7twBh3LgJfCQKUH6axrUPocLZuJ4mVJC1N6cyy",
  "key20": "3nDNSvPPMDw8PWYKKtfxXh69W5LWWyB5aYu4TN6K2kcNfWWHYvTS6ssPwa9JMGy6JQSbxt8JV3dp39A5zcEnxG15",
  "key21": "4K77Naw8KtogPJEANLakjjgGpMiPEeY2DMnbX4oGgTtmzuvLY9A7TLPq3qC4KQo4o7Pc1Kkacx3K7HXQAH49fqQK",
  "key22": "51xTdzFCRYMiyuG6tSaUzsVii1TMJjMwa9ZaShhvMAvFXefbw653F6TadCyCZnwEzcoTJvhjpWun2i13ZdcaPrRr",
  "key23": "5SS5SrTAGNHNvktuY256A6zn8keKnoKATML7v3fsT64u7SadT1hLYvvABmXHfYVGTcHcZjtBvuTqBLbPxptUHFnx",
  "key24": "4Jd3XJu5sKLYBsFkdVPcdsY4ynfoMaspEFoJZCTmuH9qGwEjc7nLRRM9y1st2ujcnsfadoXFr6M9nFh8yuAH5X7t",
  "key25": "2GXSWxCpNjYLUK3jEXUn3ANnTsnPJr9YdhsKiyHqgdsd8qb8mdbaiBK8C8XQeNEJzGmwxXSFbsr4jNBsHQdcANbE",
  "key26": "4F4aobbSoCsSKgCShzcYyG4E3Gh14QXFqxbE3gxtHbzFiwuTv9wM7QKCCmpuQSPzbdfWpPw28ikFiEtpCxK6YZoK",
  "key27": "5PiFqXuvjTPULH7EMcJhL6uJHqsPDmS8AhWWYiprfVopBadHLEofgopXcazX5NikiGbTjmGUou1xT7eK6n1J4BPv",
  "key28": "56rm7RS6z2Yd9PtiLWYzCNnoy2gtfPgR1v8tYZWuYEeyhujnuKh3kqDggfXPxpry83wuVKwVSRaUM2Nrj1wFQPmU",
  "key29": "3HBT3rQdTD7FpEPPwVU7gNra74x67uHjj3hyzhp9GoPAQgSYcQRRmt46aWcHi5fhARs1qFgBbCYx2dUegoArLpr7"
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
