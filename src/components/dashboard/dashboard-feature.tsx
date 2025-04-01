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
    "3NDDpjsrDQVZm4L1Swa5jATr2yzxLJqJbqHDW32XnDukpcmHp983CUb4VfSdqnvEEyMJk5Uk2pN9768qqJcMra7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N23P1R473CVpFQSFszxhxBSk3TBPvmk6Hb9S85niJmyj1b5BzB4tqX3ZT3jrX7LJta88gNPTbiGEUVkZduh1Q5L",
  "key1": "5ripwcSufv3pz6CRZfUVRP9uMPy1hHT13Q45ksbNzvwnKGAKZfkRtEpKdEQts9xQ2KLSJcm82doNxQ7KqddRtZJR",
  "key2": "28DDMjdYt5FuxRSyGnsdZnnmrrAZsVSd4zmbgDodopoPPQymXZRqfHu77V7xa4KDpidZQgNpWkAVG5tQn1sLTfsk",
  "key3": "3hhQcvvHeDDVVsrHBt6zQzEJswaw1JMNvTimN3ESx4tAj6U6DJhce6F69EzUhWZG5vAojy7Snuc2TZotTAUVGFWA",
  "key4": "e9etT8HHDRZ8bjLZxdnyFXjGoqGufYajAQGfcpJyHEYLmQoMCzhip2czup3zc4m1ppaYkt3BjNFVR7NAfNY9u8Q",
  "key5": "4ybBqKeBpYHkgiN9Do1asH8zts6zrSyURNHCwv4bYQsUxr2EyoRwf4H9dvQ69yubooUBdhG8pFHPG1ru3uJdG2ap",
  "key6": "4RUTnptuSFVZhdqpobc2nbRH3PAUhsdGKbgsFPvysrBHUb9ia95hyBaso4aCJegb79BPb2zEcSq8L7Pcg3TdHy4K",
  "key7": "2HHP1WSVcNYh4yFvVHU7mDLoAQmdQRhemBrfjkZfegzZv21VAchp9DHcxZ4RwmS7ZeUmmFYdDs7Ddyjn55dDrKph",
  "key8": "2cVhFJEdWnRp9fMNTmGa3uCG5i4gRM1WhyenAcTuUxH7ZTzR1KVk3J4ADVCwjrnSpDdraYgccDk6F2Adyszm3aAj",
  "key9": "56WRkHF7HgCGRwGTR9jupNjQ1UdnRsCta2AsdC14R7CvVKReQsdXvW5ikn72Xi3Wnc58etPvDMScWnEVGdPx4v7d",
  "key10": "3HjEq5ZwGBMWn1bVk2fN9SVBm5wn88eDgrHBp66NzAXKJSov8kKSZacrzchCuVBP2WjmSKwdZMhUpeKu9sPUnxSd",
  "key11": "hiaBXepLvhucmqZxukybzZZ5m4zAmDhq3cQf4X9D7MJCt8zhZGJPrjS9yDU6A46Jo5EzwSgn4USPPh5WGdVbzvW",
  "key12": "4RqLj6wiKzezi4kT5oPaFs6gB68vRSQfZrDCBRmbRaAUeVo5t9FgjDp5Z6yxbffQGNB4zb5qTp1TDyHmfR8oa65e",
  "key13": "9Q8ReWN2qPPh4r9b8ejyUtHf8VX7rTbkbNjijP874yWNGxKoFmpXh3SUWFa9z3FRcoT3BWwyB8Bkn4cEDcQTJGP",
  "key14": "5SvfD2sXsHhmweA8FMYo7mviijBbEPwVYUKf8fpKdXKRxEfsB9tuvt463DehsyMFeQ5JbiBiTHhvjWECio5zSXHz",
  "key15": "5sTqztCvUF3CFDwMYBNLhUH29SB8QnN4vTZdEsfFkKthGBN1Q8kEjKuquwWMJrd24ASdZHfCnFq42yQgq2snumT8",
  "key16": "2nAJMfmVWfGVjReCAo2tebVpRSmgz5mgwUWxn1TRLf753zH26E7V4JLysSjWACbNWaqBS242RAssSvvT7XQRKsuB",
  "key17": "5jthUv6ZnjNwxGN2d6psJpiQSqKBJhyebbLrFiAXkE8tQJZ3Z6coh1LVk4HGEdyzmZHP7o5xMKaCgbx6haoKhAbn",
  "key18": "5Dx48ogduAxFaaqFGSigRJ5N3E8mqoFem5o398xAwJYZgnhFZYvyfUSDw846fmiepuWzzx8bEMhrRYPjBMssXjEo",
  "key19": "2V6VeNbiPn4XmcBMUrXxYqtyj1v7TiL6v32jrNn8K9CiaNJqPxtBdB3g2EmT5UAYteXdJ2jwbfyc7yC9sTXDTnBW",
  "key20": "uLhMAbcX5SN9ebPXRcNa3Qcr4sbMfaHkaFfArmWkswcz7EntgBgwu2Y2GC4Sg8KxQbHW8ChSLzHDH6CNzBRHXqF",
  "key21": "42XsFHsLJh8GJS8MPwBU5q3CvEvQUkUd618k1fKDGg2D9NVB6FycQJ4pvjCZP9sP3AoDdiFzWbyu8ZWwrsPjVvKp",
  "key22": "5Wi3zYghB84FfU8den1SG1eUrjzF8PFGZ3kRDzfbnCxR4LhQgcAKqNL8zrFW3M1MJJfgVyZByYFSjzWmUN7Sr53q",
  "key23": "3NRgaJNrU1taMjqaidoxvMfuUMnMQLdUDbaC6fUaF2ZdbPjXpfvk9J8aUGJ4pxBbkL6zjjoPM5yTFrhZLz9gxzbg",
  "key24": "5tSx4qLGx6Kj3jvu8mhbBf6d9a8kb16H8EjGnoQCTGaxkRQpWzJ5T6YTNUSJT5E4mvHjPXGXtm4geZVnnSdLTaer"
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
