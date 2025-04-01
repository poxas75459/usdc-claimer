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
    "5RcZJ6Df28aQukwdvZxwKZWak4fTWmBYETqn7tK6U1QBQzQBc9BkKFz4LbKmuQAvivPtvBy735QgTWaFv2sm22Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rh7VxjA5L3fbu9t1sWZZmGsZtexcX8zhDm3SwrNqmNw3syxpgc4yJL9uCheah7HjcTghLu6UmWHeknrVL9ZRUR",
  "key1": "bmBE22kjPFPRy1VgBrqpExxqAhSfyeA1RPrzTQPvB48ojpEaNGUXtsiKpo8BJ5RG4ayybq6UTJ59w2hjskidKMS",
  "key2": "4itgVG1Wye9nURk4dqtVXuAVyzYT8iZyfALoqLZ64tkNbNS7PKaV1UMCf7iqiy7FFb7pW4Wjghj1aoW7WXWJ8FPF",
  "key3": "ednpmU6hhEdkeJ4uijjDi6LtizaKW2m2QP3epcMoDjpUfF79DgVFKsm7aj4pKa8qUGHpKVKPeHbyCZH9svNxSQP",
  "key4": "2MErGRqjHLsGrq6eZSC6TpPwwJVG9XP2KjGEc5szKAyHHFqaq9Lqu1FnLqt4Bqeo9UeLaF4QcvjrtHpgc33qGi2C",
  "key5": "29TyCTFxxGxN9BY2YXWwSsKnJhWueJ6VGMgyXTAcS8JxLSmTXsbg6ebNKeXefaDU2BMoxZJtorGD66iZ1HQH3tDq",
  "key6": "3SbMs76CFPLdDBV8JZNuYjZgBjKeoU8DUYGeqX1gLFVysTrJT4pFNRVfCiZNDG4dVjWCb9TSfU9z7J3GSa9YCEW4",
  "key7": "AovQoPeK4j2uAP4vonfmFzri5Dpkh1WTrCHRskr7JbnE3jr5pB2uaqe3hLkkxXqY1nUxfax8hgw4TqsPxadQPPR",
  "key8": "gYApWerH4QRSdju6iY6KTJJ9T8Yq7xHKGdJ4aDRDq7TBSLaSLtzckEV81z7XGTFgrxKk8hPdXYpu7WotRexyJ8x",
  "key9": "3y2VP7rFqeWoFrHB3cwhhMcuQVRzQqZmp2qPWkQtY16MBmjpkeXH7d7GntkQeRUrz2xLaTuwoVWFLCtV8r6yWEPp",
  "key10": "43WmQBVzaDmnFMeAd1hNk2FQyWTiTceiFPu422Xvotvzs6tXuoZYqARsS7m9rZJvupUsvnBSU9heeM4noJLvEXCN",
  "key11": "4z37ofDYb3ujYQUS81CGbD1xM37UYbh5TC4TmCn1TUAijfg9JLEvGS5UeCBT9UNyJNJpFbqqrD1YCcfFfhkDNs7",
  "key12": "5dcCenY7ocKSEnikoMPexYfiySYYWToxz9UuG2Dw6PtM6Skc6mct4RNWwodKyKzy5Rdp97GF4MzqoVkMLWudaG7Y",
  "key13": "46fYQ5XF2nFZK9AjjkBBoUqrttQAFga5u6dqtnZLZGjLPK78xh3xbhDxvLVZrEQ89voJYNLbFD74wgryLvYsayFw",
  "key14": "3snNUiy8BFpsfWtomaBd2LLWhAfVjdwfXBe4MfLAfKzzJDVTTtM88pGujkXw91C2XAvUkuNT1N5Sjgxn3HoYNHaf",
  "key15": "ygVF5wKtGiPLWCAeUx5k6TT49pxDcGQ7JSSouwJ1CoqfvasWq91Y9M7T4NiaHDSKkZAF11yTfoEQ7fA6csdxyNr",
  "key16": "9g93NCfHfMkyjqyWbMAWs1nV2CjmqXKoJGZLVWSx7rSPPxhEqj9cRk25pKPTzKFDMF4y4NdK19M9aH6RQSpvr7a",
  "key17": "3kMERP2nvwgnGvRiA7CXybLUoayNPfGrj8GzVVMQXNonN2znAwYi6yduELcKSA5fZHCgJWKG6jxtoia9PasS5AXU",
  "key18": "2tB7KBr8NakG9LE66EcTkn5yuD8X8VXaKYCAXzDsBrGmhMh8LX1V9LaEA3ihKaxnzqEpNqaHDB9ErsTKdfrMMYcR",
  "key19": "3xq74jG8Z2cCDL3XvPvNTQxmFNzYuHCSs2fUCwgLw8v4bjQXVxx3E9tLWs6SLa7DRHoupgMmH2Ae2U8GiDxag18g",
  "key20": "4cZnxcD1U1tBC5TNKiiSgVJzi6ozTx6UfonTztB4ET3d4Z3p4YDDZwmM6BcCnRzufERsn1in9iSJp5PMo8YmckG1",
  "key21": "qdcuC1bhRxjEcN5taSYiCPgKiZ9VS43PXaZF4CEDtCvNoxurKy19whviPNNiDbSZmgxwkMAHMj8CsYg41LQeeoA",
  "key22": "41AirqRPvqNymkYBNCiqzA7xcBCiRET7gM6xBjt6RCcoaLWDiRLt4fsAJDayE3wUhL6bnyymZsZBrmXoVvJq3PKa",
  "key23": "5rhiKzK2UKBxMfNP2u8tJNnvkA1e5b81zqSgKumsV16xdsEfQH2bQk3bHgeAao3YBBLQHDdHA5zZ6oKJjNBQ8AK6",
  "key24": "3cZrSc8XNP99z3U6TUuAcD6PckNhYq4KmzYgAjA1TcVAU7AtFhAN74uKiHrzeyB2PU8siPypJXhkcpU553ntJBf1",
  "key25": "3jXdy8BT5dXdqMRtFeqfNXapbaMNPgiykzTFaDQnJhDSwsZxtgbNaubQirBoxmpZo25DoUrfw1e2gZMWWU9FhtUo",
  "key26": "3Vq9mKr8DrLTci4cmQtHxWfCFxJ3caCYRmnhRPKczLtoLxrxdrURnjsrCWabKqMApCCaLECgis2LTJ94bkYUZRTg"
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
