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
    "55u4pTZkHqAZBF9mFf6Be4ohUf5DU5YibBohfVfuyCTZU297SAkAw5Jhng6uzLyoQecWmCYdiKtD5DkSBhGjE8bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUt7DVBKnf4eaFzoJzk3ES8ZjMNWkh48zoLFtfAxxvt4DHAGQXnfTmj4L87g3bbW3RJa7DRwipXfNjvFivPVen2",
  "key1": "5NTzSePTRpDgxwU1FtEZ5cF2yAPwfj8CC2jVBPjeJHbQty7r7PYuvKVB8u9zwMzhfPrnZcRRY2vRbxtYQ2bfr7WH",
  "key2": "3iRyHnPJ9VGYCZNqyrbUFMagixodBxbTyMnPJgM6RYRizzcZ7NQ1rgpweVq1YqfMJX5ApYpVmtzwT69aApVAUuig",
  "key3": "4Q71ZUztkvvS6UaXX4nuKguRRWbWgFrJoxrparwduwo5hodsbhhXm1dePKJyQepsYhkvUAs4snCeNMq9TCjGvzwS",
  "key4": "5DW6x9VkwUFTyibZqK5oLjH9naphXTuqrpT9Ug33bzXNNUwvWkPCanvwyxpigTqQnq3eaA793BMw4XFbw1Hej4Hn",
  "key5": "4SmQG4PgeBQp8r9vEKpwVHa5zLpNuBQctNQ6EPRdauNDeHgsmJQDnkhtzeG7cMLjGopPJ4ZVXHAcQrjwKFqN5pvk",
  "key6": "2ryUoLjN9WMpqYsLEgYTNct9wMCL9xos55tFoXjYRq7XxJkvCCxegTHzAvZnEEFuDWeH3PYBxJfBDMRYQdxuzy64",
  "key7": "4tY3rMHg5XshB24aZFnh3PsL2R9R3XUw4Szzy7DA6aEvKnRf5etkaYCotgUUBCf8pjsjh4k3TqtXwDTNhAMuLm6p",
  "key8": "DjgmLx7sG9DqN2ERTGyePYcpUZkJRJkCh5vWtCdviK6m8dLqa74xUV6VznPRdFdaTxgEYWRXJux7AzprLiENqUK",
  "key9": "4KtZgQmGXRhnV8w4P15NKyrmveqp8h3SKr97uuvRiz5kSAWCpipxJ855pwjwE8xG3Xs8FsKHXVHy1Pp9pAKCQU31",
  "key10": "2xSr2nn1h2guhk2FeWYytrA6knbn27TfEyf3h2bRoMoG1H6sW5kDrX5Rz6sNEuV6uJHmz1VU8JYDJHb5qXybwKSB",
  "key11": "2nQ7xxwaxTTbiVKiVsx1CjLszJ1RtHLXvkNmXJ1BbhK4fSgqwUDAyYDwRjcDi8F9dh8hm859uKWoW3kXVr2h5CR",
  "key12": "hLhp1YqKYAiTySAdwieDbxPjtnFqKeWiZdEHCmcsNJvPhK1iQnv5NBQvXd6HJDQR4aPnr8UunLfPsF2ksNp8EpN",
  "key13": "4WrNmGhPvXZDYmBwQpWxx6y8gNp52siHyzqyRkHi2mDwiSjgG3c6CktfM98WKNgqCT1vwK22R8vESY6DYwqPY7vu",
  "key14": "nQq9K5PKCDaCQqthf4xvFKHhisiVk6P1FYcHJLwVLD4FqWZBzSDAirTvCicGiEUTzwj8MpSME5zBG7WYQKfMKRF",
  "key15": "2f7uYn4yXhuY1VJN8RMR89mELRrBKyvkYJmXbiVE16TEQYtxyEr3gc8bdk2KKzKzJeuMEwSLFhcCnV8DPGqTBR8c",
  "key16": "3H5A5xX1yafCJtqaGrHQkEEm71TFipwtcWC2TxoKfcxACf7HQ1ZWZq9LtZMdhg9Pwa26LjzkEyev6F1oC1QhLubq",
  "key17": "4VydtfSa2ypTYW3jXQHzrqrHDHLPMAp6B5sEjPoaUVRWW31mruvg4xBixWQWi1WKjYc8RaBJaWBquBVgGJgAV27h",
  "key18": "3aAD1vZrNBt3v7jQK9G64qiGZpBGx2b2wKuf3VBPDtrY5BzgbWpjj2KpE11nuiPVYob4XzVVjtkcERKBodmb38c6",
  "key19": "KcivKaJemjNauEjdLepvEYXRLpajFMXbmBunB2U5kibSu6t8kzCQzin8PbnXa5fpMnXdpr7uvgNayzoC8oBRZ6h",
  "key20": "59wanEmRWHypgmd7Byxc5vhgaipH2DTibx1vPMf7Ah4BG9pVpHueDtadYJsdJtzVTRFKrk2FNeT9sgUnTt5AABN6",
  "key21": "4zfrzSsqhiZgPVPpQbTWz8H7LstdTTkNdqp893VpzJDPp3VCkLfCySH3qGiRwsTV86K5bmKRdDQ6VKrD2PeM7y2f",
  "key22": "2gknSgKFpepstiEAHVDGYVmAB3qx3p5W6MxCBwGTszg2ZRiy93diw7t94E85YC251xmYjXJDDnuqzQVcsEzo4wER",
  "key23": "48VH29PFCakfmdEmXMMUyA1z2EsRe7SX1s4S4WdohpzECXVNvNPV9Wgn1tMyiPHCc2Hfc7DcgsZgdaUQ9KCy6q78",
  "key24": "2P9Ww6axHFyppQxQa5s4GP9iADC1X4CukFhcWnY6wiMEe7gg9c3m3YhPBxpJaCF8UWWYdE1NunQi9Tp6qgBuSaFq",
  "key25": "2WA1epV2KrqAqVHZ8Ax4QqcZzpq3wHscKG8FaLqsYBnLuVSFBW6HuESgQbHKdcpbFakSvj7Uwp1hxgR3mAAWRD6",
  "key26": "4MSXuHr2taBYP3fs55qo6u2CLxzngBmp7J5MmXSe5Cviak2Cz9kWE1KgoqnryExVUePRMD1z4owbpN66qpEFQGWT",
  "key27": "5TdPLaEKq4HyBcKwm8Bx3GrgLwSEGrrWe8fJ15W26scZat1ftnw8NDCbFiWLdpLmVt8UzUMXMQhVap588WkmDozL",
  "key28": "5QT33iKYxEZMzbqijeFs9GFTdgUuqUGu254Na8yqfzHZ2CGszFactwWMkS2rxK59AnNfnSt21DieHbtLL5iZsnRj"
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
