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
    "5Tb7YSFXokTigGXAHz7MyNB2uHtSGXeQZYKB1gwB6WcXiFxMXm6vTJdzPCD4sKMd95ZKXZLeasRjSkZbCq8fTm6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dZqafkaFvJfeq2efzEskdYFL6Gssf2KVbmYvY5PhkE533C9s7BeAhF9m1WL5ir5mrjACp5Bf3he7TVboDM9VHYq",
  "key1": "2XAhSbyUbTUDTDRq2VK4RCWTUs7s6rpw8MPNAMkhAJkS3hEp7FRhbebFfCjWNeoTvySQgeyuuR22nYjEtSuCMD3s",
  "key2": "5mfPDHX3FKE8TzHp7KUTS1rNpGBV46HgyC33f9HcTbk7JKkFQuyjfeQzYFScNPTkUXurhUKxqTS3wt6mba4i6vwW",
  "key3": "3DVLD84otiMXNGGxrC7dq2hjLpPG5vNE54GSPodJhceHLjdFFTgKdwfnA5vmntfyCjoYZwK4nBYHFN4QJ9di1wY3",
  "key4": "5EPuBqknr6D2ZSZstery1LzWT8kFPPCGDvUMgMogEhzphV1CyrJTrYp65RhSxZybAr7e4nxWKr5Wr5CaHdfnEBof",
  "key5": "2crRTzNcF9U3XhxrWWuDvWesviZtzRrTAq1rEAqVCKrrmt4Lbf9yii1QaF2UoLTt7GNLu1XdT1MswTVuczDrhzr7",
  "key6": "2NPUt59xUbA8zqwKPipq9qHTmAe2eSgzLgJsUmkAUcfknP22YSX8HR6pAVaXqGjRNCZyMGcHMApYxbZP33iNfBVa",
  "key7": "3vFejBqUBD6A2CS4XvqYCkJCVQagPeekpkmpno9ghu1YjkvcSToR4mNk53tcM71Lj82q9wdRdxRPB17vPSjcWFdr",
  "key8": "hmMhpXBvvVzkFENBitUsd4m4WtRNQNQdQHUcJkb2RuQvEnRfKxTr5pqsGTyrd9VAsnEP5Vcwaosmoo2G8VioZwN",
  "key9": "8MdNxP7kTYMfaKQ3xwJn446b9U4DFbpw2Z51Mqn88LkyDi3DD9ixPpVurGzWMZnvXSenWULZbdwuXFiCS7yFce1",
  "key10": "5NyWk3eWLKNjo3YciYzVaEoUawujHsMRT4Kco72zjZRLxynmxTCym2VNCEx2ZJKy8taajACyLUuDYE2GVZPxdfJh",
  "key11": "2Upz9B2E1q14KugznEi8gCv5dY3LUHKKE1TqeudQNuqJ6dMRzk2UScMjUA7MEsQJtgWFjTsqLbKgyxj3iZKwi5Hu",
  "key12": "5AtKguLgYxz2cj2bgzfUcJ8wrFZsioW5c4DFMqU4ddeTEP1FVbz34e5s2VNKdz2WTDnhcn7LtPPHzEnhbbwgNYLs",
  "key13": "4twxne5q6KMUUbCF9MhUgVNAtQ4Hf7JYWMHoLXLBjx5Uhc7jRshX6wgjjQfB4wRsVZZaG92YPxae3GjBoHahzbo9",
  "key14": "42kHEYtwV4eTYP7hNjYzuAQ9bcd72uEeARLurCM9TSDW9qkj68uSXgoo4xAaAiexoxGroLvuGJ9NHu2YeiyTdYQ1",
  "key15": "Sketjf59p4c2AWQDJ3NaoESz1VvaQ989uaonBf5NFFwvbTTQAHvLuQhdoVcPZTJy7LEDhiMGVFVxLCzseoj3mqe",
  "key16": "554VnSHpGUCCVxUJmUjD61L8ywZrPEk3qwdhbwJstNYr9PyzCZ4VPsw7RDfkr6n7KbyGrsKxmyYY5fcet1XBvBCd",
  "key17": "5XrvMaBSv4TGEXQvjd1uwhQjeE17R2pqsxRd3LD4StSVF3rG331bqic7d1zb7L4VQHPCy2jqa7o9tnEEHQAH77gK",
  "key18": "W3dy7gzQZqQ12es1QuuS7hXBWuWCUQgQpkUAzAZo1tc7kGb8qpu34skt4d3gvhp8DKRqEHPyQYKusAwYQDDVkfd",
  "key19": "2HSa3YCRDvCkyKoUXfB18QRaV9T58VGuYRXGdG7vL9XRkMai97N45vgxicSgdcma89RVBmw6MTzRNUeKaiGxU6Z4",
  "key20": "2CLjjfXaKz1HGzyN9pF18dBJfka6sARnWLnubUpvzd92ataqSCoRzU4ye2z6Q5iGajjSry1aaMmNc1CiBjFxi4Jt",
  "key21": "445jaFDfW8LkuE4k6os8ECaoLqFrnXpJVeyggcGR8Lxje7Md6Lqavu8ZEfcTc5VqUhaNdYs3fbrEFoWhzaUPTok3",
  "key22": "5o5h7NxoG2CvRAA6q778jgkyBekXsjBBdUufU4wkfKTYwgr4WRsRDThrLQjncSx9ecj6ANU6dKymDZ3gM6mEt2QM",
  "key23": "45AJv6NLUoBhgFwyWP3dFVdppbgx4i4B9Bco8ysQjJwxLAKkt2CydJRoGWmrgs4Yv9z4ErjeZJtdKwtR4hZZAURG",
  "key24": "441tsxzSp8PAc8Kkunxyb8v1SikLE2pbnVeQ4FEYjipHLaEkHaCj1F2JhpP5kjX2zZqKLiy6QGsiyexc3RhKkdJa",
  "key25": "6374vPAhUYsWFhM4Nv8WqurvqPEhZ4JhjdrAKDNZoxzM7vEUCZJGJ8YBUW5U2wkwFvFpRCXqf8gfigeXfCqrain7",
  "key26": "5PZcTsn7QS4L6VJf745FtQfHi6PkuRfV93YTVnJgWbk4VB1ZGurN7jYLxSv6xcG9XapxFPEA8Rf5BsPJ7WFcE5Gm"
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
