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
    "61op5vX5QPckk7vJuTuQkeR4Ujhzxh6pgwjWX9Bik3HKePQtKRkW7QtUW7j4rHMkMbRpqYNsbQHn7YFU3MAtwLc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YaBDvT68ffsdBfHq7dDzukhPpTuKEZPjfeeVTuPoUtUqQa7bB8u9sMQffnMLnpKHBmPjXcXn81xHAvxoxwbpio",
  "key1": "4pBnhXiDS8LuScJbDzP83h2CLtt7CkuzfqBWs1MkQQVAMGD2ZgDzgGfYTfCy6ByYZevM9gXyQX9UKTx1sFWbr8GW",
  "key2": "4GvSfvBAqPXGqUff9ccPr8U1MRsTFziSNHmb9aDfs3FfrzYNx89USBxqaJDpvmkybMUrY4WpijmgiJRNUV8qELiJ",
  "key3": "5N4LvjsEyxXYqvVAX74gVNZ7xhpDjugFnSvuXVq3sZjfyUswAcRhe4b17fSSEv68qbxSjQ4gPYT7naBGPiLhMzzN",
  "key4": "2sGMNmaAb4FnSZjcQdRgQN9Q9NKwh1c9vcPYQbka7QnrNsqj2j9FeSKFtAhz4jvs7MW8qeMiUASECXuc1F9jL3Ps",
  "key5": "5TXuaRMBpJXKScZJLdH7YjtDEJkKrBBu9KkcsQ73hFK3dYhPWgEV9bP9WQy424q1QYy6M5csA5S1jzKFWxfQYVVU",
  "key6": "CWVifDah8SNBhF5gjLz6gGyuHXUEPffEH45n6q3KiYy38b1sVNzwREAaGUUaALCXoVhvCzWnwLvcnRt6DcCmAjF",
  "key7": "5c6JuNp8bwexMksVmi1S3wPnpB4azDJnDQnigAQewoQNES3NtxotdjcypjJ4grxHqqYzF4M2QSU7Tr3P2BcfPA8V",
  "key8": "3SzLSy7wQLwKGrd87gCa6L8RL86c6Z5R1JxtgYoTdn7jVUzZFvZZ1d2o3o89v9sA51XNZ2RUnUWgGsMPuoQX1CQR",
  "key9": "NJ6tT7REP4MTnmx27BJUcQfqoVZvUGU5K3RfhKpwL9i8arbo3dEL4HRofUDXRncwubHB1bJ7MyZGcjwAE6qVSs3",
  "key10": "4Fj6mcgABc1VoqgG4NiyKE7yufWgoWbqHhhtWsFAa16Bsw7Bx3QW5NpiLNbtEoiTRknKJTwdsQkUYrBXKT8tZuww",
  "key11": "62zVX9V7ES7k1T7FZCuTHxFCQy6o3d8EHMAX9acLPDe9PRjtShSrvJGygxyLXMUiqoyMpNiVf9bALePuxWinujqq",
  "key12": "njdsms68p7hGnNeNwWpRhGS86h3poTKyknCwrgDTYDEYauXXvT6dAPB1pnjvBaNbQYecgDeFX2UgB32pQRSEgA5",
  "key13": "4j2S6vQwNUtepZH6bX8yXtTWxFwReVU7nFAMF96U5WTqeuVDCvaxfXBXkNBmy5n5P7rMxhpLvxM8NHCqZYhyuXGw",
  "key14": "5HRzbAcjoxr55CLyL5NujKwprqm6f9BbbXsKLv5UQD2Hw6opKy9GNLhAMnx6tjGwt4PPT5bXabg7pYjFdfAYP9ui",
  "key15": "3xjKyCxsoznL161VYx1qvNgvp7vpRXNSgwTaaLHrYXEWDqQu46XJeYyd6ABxgnEKg7kaVNwrXjTseGLTKAxdkru",
  "key16": "5Yx5phwpMo8GDNeuRxDRkGj1ekZjiC6Bix95iMAE5U5MnZtrh5pKpb9L88tprEAWYaj3L598dU3BxG8NMveQWth8",
  "key17": "2XFKsB2k1K77khPNCpGx2GmHfh96cEu4WSyPM94UoWDAsNgN44D6s2uGJ3n1m3qAq7EXcu5k63ds8ST6erjhQPS7",
  "key18": "npRjtFxFzDqRp9RtVDx6BuY6SCAK4TGPnte7Bb8MbG4o1DqjrrFVQThgNmyZKD6MwYauq9EJza6p62Tmgr3ZKLA",
  "key19": "4waPumqpz3QZo82TsbVZqsynFYJxHQByUWv7NbP8KDcCMvEUHbpAsbE8NE5ppoTpNLMkt6qGFATkks5jnbR6Yb8d",
  "key20": "4nH18EJpaEKnqqbTUsDPdXNJAGXS34h1A125UxdCqNBcZjNhnip9rnXKASMmQMtJMqBUetdcbh6uup973J4cQfia",
  "key21": "2cBG5roo9D92PduuDCBU7dAYGrYiQugyTTfFTfoTPkB5HHn7FTUpQXodReSZhfvfqXUmg7R1s138LduNiApRk9n9",
  "key22": "61K5iDpjMWyuD8tYG67HBm86W3trnK5p6gJgDCBvbykyFmyKx8s4LNnsCdvGfbtttBahVhRLq1pM4yraUX2BKuhx",
  "key23": "4ZKdsEnfZ4H93WtyMvJ29u58PmCjSmyKJaJKg9K1UkUVUzJk3gWaThwFrfYD6DU1V2xNStXczpMnKLVRxjJTRDR7",
  "key24": "5Dx4E21DQ9XebeQmEAnhZiByRaJRcuTmXqZ2rpXhZJHTrnUreSsezZeruzCoWckFDi7WRr9Akx9rc1Q242w2bZEy",
  "key25": "3KVXxXgBQcVUDAoCfaW79ZHn9x53RD6HY9yVKwEi5p9832mcQQUx9oPdortcNRR3VqTDDoeHsDF5iZhC5TzEfHqf",
  "key26": "4BxviEHgE8QvUBRDJjf6xpNbBA2yzZEG86pBqskGNeF7qrX6oBC5rhyCbfytHfzb7uYt3i7Bb2WEGEfPRNtgXN1Q",
  "key27": "3R9kNL4BLP8SpstDpgKLsaofDPFsU2VoiPwUsGryGFs4a6kpyEfTM9ripjqYsJ2D4dV6NysyadbdQVrZZ1o7sHfP",
  "key28": "5UJjohhmEdiM4E3YprznyV8yMHqe2fbdCUUPznw4JvgwnYXpcbywkh9Hci6ErtBna4zewxvx8jeMbfavf9aTgVqY",
  "key29": "3EFTmz9B1SRNcpRsgwmcViuuoZuaTmmi7BUeFuF8tHD67qSZvnU5wdkVYzarE2apzbgtPJrjSc91CNVXqUFnhiY6",
  "key30": "DNQ5rgbtF7nSDAKtjDi9mHRgpoNha62kC9s2asPBoBkKaWmtyZDwLhwN7sMdKaGGojD1SFcU9tzZz46h5LCG6XC",
  "key31": "37qAvbRYT7fsvuqtUdY883rUXBdxEK33oey5DrkSC5qjwsVnCZ5DcJmC3M2UNk8Y6dJPzpcNtFGEoypivtQk9thC",
  "key32": "5bWZ39Le91eeu7yfZUSXkxd53V6P3DsquEe9xZtBAVpJ5wxudXJVP1V9ffQBTASsCYUJ5Fkh3M4MtB1e4jNdTZJa",
  "key33": "4McEymKFgt6og4cR76amHojHhkGR1tdAySGCXmzd8WMq3Jpiu1PSSc8SsFBuvSuegxaiaV2mQDtRaf6rEv6dP97v",
  "key34": "2U81xhnwnWirfEZK3bY8c7Xs7Tfhm6VHUAPTJrsuoCzTWNuq1T31Y9hmHAtSXqNAPHvUkXS6fUzSDC6UGtitLa7g"
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
