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
    "4t69qwzcwV635KdLoUtJ7eX1qUe6AELSTH8HMxHuPapQcZBtp1dSXxjUDnPaMp8RBmSA2YnkEyx76QWMJ55ZgDig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBrKsi79xhzf74JwJyQx9pCnUdtMhEpMjTxvz2WD7HwFiSMfDHHbidpDTJx4ag9wauUYnuwPPM4qmfhudR5npQm",
  "key1": "4zBKjbWsB7AKxWkbkXLTTRGMKyDQn5gFTk9u1EZEHy9sVadFVkPhG6zgDZZdVazjnsUK3uX3TBJ2WspRpYdaPd4d",
  "key2": "3yD95WJgbhQ6BmtohwQmvrFwcWansGAgYwHa9aFzyuvcUouftou4kKaqhHcRtKwLosDPJFiD1q9R5kYpZgosszG8",
  "key3": "j2BAvoVAVvbFNCB6asqhEwdS1GgAVTwBxVyJ1hEDNESJw8Xz8gcnxmJ447mJ4vdfzVvxVTciwyuAb1Sc8au6L71",
  "key4": "5YgiZoAEmuWDNaHS98vwjnCcC7fDVWe1GgiyCrJsaC1WpXDdocYDhMJ2DccvTmfYwZi3URpdootj51rtjG2MkwzH",
  "key5": "62n7ciunSBG9pKLnLeNeEepX2kQ4uoENpJwiUsGR8LuKPXkw82smDMfFWa31szuwWoeihGNnRRHHE3AvcH4iDJzd",
  "key6": "2Lc4EXUbT6cRYZBnNHjpyvKnoyFnBg9tF7ZavuAA979g9ovWGdxTVv1NTxQW6cMAouimgJ6rJbX8HctG5FYVBfL6",
  "key7": "3kyy431YLkcv6EH3cxXwuEEzDXN9BJu61yDoCGaBDhc8UJT9YWciG7HShmMZoGXs6C9FBHS3WvqUS6ysADz1ZA9p",
  "key8": "4aVqvVcijzhHkAhU3kPwtaVT33yXKMCaMpo8KXxdcNTebyg7BbMS4RxSRkTj28FsY3wY2WWGKu5bqS7vbicC9H7N",
  "key9": "3TMN9GZd3BU87FTQ1kG9RwV3wLAGE6k3xDDnK1xjHideXLwswbKHM2isLvtPPjzKFhDWeXsdq2r2r3BofoU5MLp5",
  "key10": "5Zyfk6BV1xrgQ8T799LgsD8cu5qM3qqyVXcVvPDcTbSWkisht2jBdDPRH5MJGDRGW2JVXBxYBpy7kM16sfXEZnJt",
  "key11": "5XsN9ZJTctqrT7UDcdJyhk7TdPnBKFVzxiscaWTKowKpaKY48Y96xtYHxWqm8hqUFYAPDnx7xck3M2WjDs5hA8hR",
  "key12": "3rCgWgj57TNNXawLcJLStcbu5jHQhiXdmHq7qxdtLtyBjxhawNwd1wfHH5ievma4P6mX4sBwzR2mRpjex7Lmr28h",
  "key13": "58ngoRsfMhcPu58EcxfkiGQjvARdpAfo4gxDpJrxz5jLUDyiLRTUFPPpH2orzTHBNQJZ8wNExAaWi7pGQ9GwxHX4",
  "key14": "4ukuw6BEM4H8C2a1szbKwxgQGHqg9Hkwxkpin5PYB71jpNdKsob6TAMHvqLm2s7ScMnPp34b3c3TNRsA5FLLCEst",
  "key15": "3fG6RuvLoBJEWEcUzfULvz8ePG6uo7YK6nLQV8wgfudb4tuQCmKLWXwDFku1b7SajHvCKgd42cQGLKf8RWkECBjq",
  "key16": "29CibR7LbCvp9fmq7ZPfdQk2hfZ7jCaUUAfpV8EnAESCD5Jy9qcxUFbYUW8ab24UWzKDtKScGFNS9vHEdgz9bFBw",
  "key17": "5TixuwG9dqJm8HNHxVwsBXtqESpxsMrhjNUpaN37ksfQsukYxDHnQ5366zomoPpSGZLpSkcHUZFTk6LmNaK2N5VS",
  "key18": "r3nZmvw5cumB1oGMgDU9aGnVirMdj14LruqrMVzHn5pQw68Zd5X7szaNMqPvMdQpfvkuUTy2RvQt2p4C7yw3hBC",
  "key19": "2rRFj4zqwr21cU7mr2CRP2Ye9eey3ED5Dz2H4fRqfQjd1LxEArf8HcUBWGthBLbEcr7D1oVz13jiiQ5ZQD88ykUA",
  "key20": "53VUuh4EZuX4uysGwQsuJJAoNNToKxNJV9eRASCTFJ65iEzbG3xUYRYmZs1YVYDNvniB4JqEFEtyB8dAUQPLByXS",
  "key21": "5ARXEdmvnWHg2Tana7v1YicxbD22hEoYxPCrrJhxgbCW8eT7DgUW4b36ZS3rmnb48Bwc21pEdYxQg3RoxqXiL8Yr",
  "key22": "3jbup8DraBPhVK3Jy3ECXDGRahTMgQ1eLR8wAbnBarkzfXkGpTUugQewyGvJRF6u7Hi5A1W53vo5MJmkiM1phJEq",
  "key23": "QPYw9CAQkuf3H4pstCBEXyeYUX5cbRki9zXD85dVSoPp2dYmEeEmx99VCvoqDmAVc1pmXshMK4inRKrirXXZQTB",
  "key24": "5fmJvaiH151Zaqt7fmB3B3VUqkEAvCrWk4TiuhmMq5DJYma4gQjopRKGRqfy2PdNBgiX84LGnBZX5CNCY5TLRuD9",
  "key25": "4xBFSYyAuNUjdhfaBuvq5wPJs4NEPtrSX56xfhKuq7ikhXZkYwKtCUiYBjaWPRB3NFLRk98YKdTsL7ZigQ2jNSC8",
  "key26": "VZnhu5mHn7E6esNqaACzF5FpEK7DZnP7tZKpTNzmPEsULMZdQXp6XqHFpsXSGzfrMTmsdaZQazYxDeLCuHjJgEn",
  "key27": "23t6GHcKgCZUmZUNZ8U1XSBCwSpKJebZFE1ATsHrcYC3P38KL32Yh2vkB44UXwHz6v3dVks1WgE6fyE9Nfs9kCt4",
  "key28": "3drYeVz565gxoGJuVFA5savAGmA45Sh3VSyxoGWhNmuB5TvWJ8zwMzQSHJ1HiBnDqsvEobeNCox9xMtb9M61Fqqo"
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
