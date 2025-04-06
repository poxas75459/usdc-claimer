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
    "2QcVfPtsPFtVvLWEKj4iL2MKrHMe3y12inbfsBLzuaur4bmsQqC1rGoF5vadmi3HVV5MZKPSG7cfBFauhgXbXHzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u1obAq3STvH9aSQnGNdn6bMxyHrnkHSJyoESQfHvhWyCzg15QUffWzzDZeUq5Q18NASX4QdccR9oYPCEYGTA4t7",
  "key1": "diTEz9Cr7Ly3r8R1mJ9sDYubmZRtzsCwjx7xFPrw22E4mtCCvpbogdvuMK9bbee3DwaTC7uxfTSBzdDTBDfbgb6",
  "key2": "4d7552bGKQHvzTrcntoJ2Ke7fQ3ohE8iby7RWJEEw9qUvpyBDNUeSgu5ApYiB8mmG59dqeQzWa8JDDpgi2ByYVh3",
  "key3": "4KxqwdFekHyYk8Y2qS73FovqMUWZGA9Xfgxf3VamDkf3jHu3TfNXuv7nn6rsmWkfARKsCpgCQ4nwpVLoXxo5vDJq",
  "key4": "vBA7bzm9dn3QPApnuqSrr53uJKu8JFHRnvV79HrkqLAXTCgSpRh7y8EN2Zq9iWc92Grb433fU1jKtpPnXeLa5CW",
  "key5": "EeoUbPP7L7GX2fLHGLXzb1RNfC7TQXjULjY3tUteSoDmawV2snjh9DFUqFzFE9tfbWtAAjjS7NpJWKjPA1YDGp6",
  "key6": "4qm4PX9enQKuchWGtD6eUiykwUuWsF9FWDeStyswCYZhUtTDQbQyhcenBVvzNGdDjqTtKvjAw781nLHC1mMXYRD2",
  "key7": "5m3aPC4PJGpPGJMXQEczoTQR1moB4Twg6HZ9VHSMo7usxVYLsSd24nmRro9L2irTQ7cDmhVEXGjN3cpvha5rJzES",
  "key8": "62ynYj118C2y3iAy6CTSbR3LbDxU3ShJ11Ft7wDc8UyxmYE54t8RxrM9pRECxEiWEvHeUJwRmEaTgtnhxfNrA1eT",
  "key9": "5xWKgwZRW6b9ppbALYTYS2ehmLt99jQkYrtuVk1jHffAkzVYtXpGhtG6QZAgS3M2G5axfzBZtqyboVRBUGZatwHS",
  "key10": "4eKgQjKsa5siZiE4Ff2JoPAfDDUGtYcBfKiL72t65ZLh5PAWEzsKw9eEAqHzcej8qECefXTBaczX98T8CGWok4mm",
  "key11": "LdHAFhy4QiLq2k6wA7sCe1W3WiU1Cugqb1tQec6BcD7AUX36cWqvNfyosNCPQftqD4Py88xZtY1TctGKUxC48DP",
  "key12": "3mua28764A7vyo1adHwctxqzLHDjJWGqrtfe41jzEKxxiXgLgvaJLjLJ679CrH2dxQoWwRCmsmZd59Vj3V261wH6",
  "key13": "5aj3TrZ75zMCSnZTK5tXArY77BA6HpZYPSkyEyX9zdgQFcpHHJKW5pPQrbhaCHkXvY5jRn6k13fN1wm7nmhrZFFC",
  "key14": "47WauxamN3vxYZqi7tTRUCiPM86NCQxKBrwcsWLGyda74bb6GMM8v1t5M6DyPDTNwPMhoCpnDonwPCsaMBQGwrbb",
  "key15": "XNvt1uq2NN1vf4zjzPkUDNaVCxFJSjLyBG2sWCVEFQUZA4Q1y3HmcSX5EEHiMHmi5vXDwFSBuZSeStivLpGxbk9",
  "key16": "nzszPJQPqDoftanwrLiEhxDNoNeoLBAAtoLWJNPCzaizzAVFyyPQCum34hxP5Jm1aZfjSfGkJo3aUrMs3y8zbdR",
  "key17": "3deaPY3UQdB3r2eiy2YDtv1RXw42zYToMMB1rzsYfrrUj7vAas3iKRrAz1qwP2mCTv9ez8bgDVfYJtkDyGuofCCd",
  "key18": "4ekVWv5azgfM8BmXgiuPnzSUAy7kK6Dtdy9kaP6N7Sq18sr6HP8uZJHMGxyTdyPKHoiGBt36qgV16jRHGzYS6bho",
  "key19": "2AvdNR7WwFySKDYJV9fPVhcq6n5xLr3bqfRJz8YXqs6uua2PCYdXtNbk4MHRt8tY3WaKB9EXATPVHTTwP5Dbu169",
  "key20": "5efG7ZdyDWWkGnDm4X985Yh5KPN3s6kFbTqDm8zcHKhNJHYLJg16LdjvTSr7d84toW6yVZyxBiLxdLoSv92guzyC",
  "key21": "2a1DcXzmh12JW2PgtvXmpFRE3xBZYe5DVbu1GeRBLi8vzfD1aZP1zxt644YbAztBLPRf6yXKkDjB6zHD1vAH8jx8",
  "key22": "deqpRS4iw51vFKAhhKqFaXUbCDxQeVRTktY94ft1qK7J3JRxzxUWJp2ZsVJjjHoE6WRFa72ipZ17Q7DaudN2sZS",
  "key23": "5Q6FQjs9MWrXP5P6WDVyQxG4yhDGvErSc1G9oR3SLuDXAfbZ1wXoGehjuNsw6Hr83esL4Egvmq9oViADZGpPQ4Gh",
  "key24": "w196NwdM9E4q1t3uZptvTm3JCbK3XtAxC4J3oHdDXNwkAYhG72U8gTYiSSfQqDm4U2Ubec6tcv1rULiPERiBE4g",
  "key25": "5Cg2yL9P7rVWWD8HRt7v71djiUFZmfxd73ZCWQHK38AYzdB2rQ4xnA4nKjbXvUKmkEvYEyL6yTQVexpmwJrasPBG"
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
