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
    "pHdQZY2S39WC15ZkPjixaPC886rL748zBNYALg1qAgGW5qzwfJE9tzvzK5YBmYMXdrSi1vthAUG3MeMvHtWyRCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXhaQVppHaYtw5NyCuguVVtHfMQdrw6rBCsLnVumsKnbm5vTi3XT1bCvxqWCjxuRaonkF7VPGYZJboaeHE7pwz",
  "key1": "26g1N4fhpTN1quCZTRD3mn6UU3KAqZgczen8xcQizfsN7swDNzVgR6Lfpd1CuH2ED22i6NvBZaap5MKnATpoYvWg",
  "key2": "4bATvjeyxpDFaCiTxQU5xUafpguxwydgMrb7SrXY8jm7WR2t75wzPddbjgeGjaKFbGNhTtEJgKiHUm4s1oJn7323",
  "key3": "4jiBVb4T23an97Q5cPQtkVoAQWspqGTEDHy5hjckQ4PN7bmuWvTNCjvgRYhVPbUeDhB73sydM25sDwoWCRmxKRf6",
  "key4": "3keGqtPuXCgbvMJLdLPpSP49jDPQWzYruq7a6WmJNFc4imPdfEBoium4kYRYarcDhdBrv1Qqhxc2cf9AGNfp9hZu",
  "key5": "4h865oGNefEfyrGSaToC4QZjupuhAcepNRRWR6fz1fpPntRn9cw2fNrLcRK6vKkSzoRsDrUURp9o1iMzYbmMpFhD",
  "key6": "3cjD24Kj9HBnZurRa3KPtruq12tjjoApnoym3LKXun1rnLYbKTXZUYK8v2SVKkGeowGqRZDGtNCthVCpPs8VoAjE",
  "key7": "3vusP9LQnQNnwCapKYcAd4DFc82V6mTXQy4JMC4r8vb5eNL4BSNNHWEv6o9ykG2KS3ugGXNg7F3ixb7JGCN2gPHC",
  "key8": "5wx4qqQrBBhHdU6aNLuNdPHmj3TinQ8VaNXXD1x3wVvwatEdNRLGtwVhLEYx4Hc1ByVYGrQBPFeDh4TtsTkjDhqt",
  "key9": "ggvSHEJv1Yjs9YLPwEQ8Wav6bwAeqvYNjPsvj3iVD7ZgzNWtL1JiKmqcgZ4e3gobfKcwhbXbdVhs3n96brmDGoF",
  "key10": "5LV43s4KBNe9aAkznCvi7RAfES4k7GmqcyJtHVZ5oq5J5vDGhHsZboBixpmuDH1HjLDNA6iBayoyjKEqQ4TR4NPg",
  "key11": "F4Tx6Jz7v9Dc8XKAjBMSqAcBHq4ryxSDAqvbbNqkBw9is36gyFdX4ERnGvXmEs2xKCnPYyzzMLvaC5WSpfihwwc",
  "key12": "3mu23jAfT6BSPTGJbHB6qPoWAcMHF4bA8amWpAHAJUotiPPBtYPRYPSChm9hAxT7T9xPUqWRZE1rr8XmyX9T784p",
  "key13": "4NZQGfCpn2BdB4n7WTLWNgbNi8SoMjmGHpkftJ8ufeXwUqhDyT5awFD2yW4Eg571zsjk1aicn2dNJ1hn14HrpKNs",
  "key14": "zzXbG2QKV4n5Yr25PW2TZQGFEqtTzfMDuNxiceSt7VNkmP3dFouWmw1XRUHZvSC4uuKZcZMtQRNh63Qkpwoc2Lk",
  "key15": "5yyeqbsjQZYyCXC6hQBW4ikdNVEjvA28JTa82YoC9FSGhHr4tybfwJPXL11z6QS59kCDoCoK5bwRJ5u6mw5dGA5K",
  "key16": "HrR5dMKiXxcSe66sYyf29j1j6Q1zkMj1gQY9qH4oAaYPSmCRRRCDe2R5o2wEn7JH6EGM5wB4rTbwHZhS6q1B1Sa",
  "key17": "4xwEntQ89iDfuvPfPVKJrvNpidFssX7pWqXo4zfHTuTsBApeG8jJxJn2289d1qBJA6MdbivVofh6WGN7QQw6pGcn",
  "key18": "46B45hWnLfhqU54WxWLTvcK7A9iba4UnzCNbJJB19E4bBBmgdpSzMATAx6y62inauSUVXZHnJrWiaftQRB9pxdRA",
  "key19": "3Y4RcNJtPRU6pvcRRJGq79F9XtH4WXe1t9QwDSP6gRciAwBKaZqnLY9oyDyQqP417R8Yq1UcdVQGtg4KPdg74bCz",
  "key20": "3xZHxcfV7LJeBWDn3c5MJWpXdfpYWfUVVztVgaPrBETbKMtG4oWR5XJxgbQe8RqTLeEgjkWuDDVAUMv2z4TDvZww",
  "key21": "2usUStGt7frpwMxNYPWX59yQ1UYk7Buj7uXZhGrRB64MRktHhVJghBagkwdsDP5TJjH8eTYFDkRHczUCHT3atGrk",
  "key22": "Pc85zzoKJhEB9e9cqduzthLbFXJTqt3KRyiQbqVj6roLf6PVpJYztEyu7FYCFyvoVdpoKwcFRvyKPFvfCCoWwox",
  "key23": "BZcmeBDoDieUYGmEvyAiwivFkpBeMgvzY8cLA9VkM4e6yMGUWAd22WpV6eYWqTSvsMvNqYCaqkf8uvUWV6wq9zA",
  "key24": "5KvbrmeykG6spLwWEhrUP3xRhVtNyqko1GMvhaW6EaBNADxwdoeFR4UAXNJRRewsrW8zynxt6qtYj4ge5sDNmX7B",
  "key25": "4uYvgoL81H588dQkntrK1LCCn3c9c9ZLzYpatTn2ZB5S9BQAPJxGoU3AKGHt2YJybykMjkFKckh5TcDkiPvykADk",
  "key26": "4K7JEkgiDUmfjhYzzit7wDvv3NeRbTKZX9LrQA1kmcRZUDLRN6KrMe83veSJDRpT5t7F2kfPA6D6W1wWrdgC969f",
  "key27": "5Pj9HQK7sgsoo27Ufg2vQVURSktKzYdi7V7dx5HMijV7aTWNBrW9jWC9EoP9SjyBi3yMXzxjXDMMcVzpK5FZUWsj",
  "key28": "5V3AT9UL1HBXJXCnTe2bLaV1FXgGREdwdCoWiFsi3ScoqiZPkcxkxdru9jTpHnR9Rq1wdK1AN2gkFeNe7Q1MHyDq",
  "key29": "4qpdsCyQdxo5eJzmHdxC8x7RYFFQpXjnpSP2PUoMzwz9v6N1fVgqNFnrKxfiKsnMt96rM11zhNpzB4sjFaxnb98D",
  "key30": "5CQrbsv1d5NZk1etEGDFL26mwv13RC1DvVNXww1hp918ZMrcRKqc1RgQkGqsCQA3BgBUCJxDQREf6LZav5jsoWvw",
  "key31": "5CptuAiYL28ZHLCLCtsCbPgX6PGfsVPKyVzP6QzsvvT3gjX7AhT58Wx8pgLYUXSS9jCJbnDuf49ud8iVwYD7hE6C",
  "key32": "uA7ZWKkc9coApZgGfsJZDYqotu5zkPNS3yYxJLBKTbe2kdAtB9A1Th12TrDG1Uk5TxXNpH927GLTgLnBmBxf2NP",
  "key33": "3fdCR9KF4BEHnVShXx62mbCYLDaM9SgRBuqK2r3K2xRwM5AMGjizVezMpeFv8vpyjnxMk2K9Rz6mYXSQxbm9A3WL",
  "key34": "3SA6Y2Uz6TUt65KmgY5pNcCnSF4rYwJPfTBbmbuXrvaFrgsrbPzD8M5D38jGu2Exrk45hTxoJFDbZUBq9PbcFgnr",
  "key35": "3yuYDZ8yttEh43XtCFgJkmUakmspJDTBUziZgspnKP12mLka5NW1Mur4sJYc1S8542ZXG4ory1yPhGWhx8M4eZfx",
  "key36": "3x56XaXoCpvN8UYY3SHuaoFhY1LHL1boACi7K9uEKrNtzqDV5BrwFemcnPRVBC9Pz98UfULXyRWmToNTMMm9irtP",
  "key37": "3XMZ5wiw93xVsmjjTeyuWV1eGySfMPKeYnPvzNyErQxSCTn9LqQ6Qsa141ACfzFbS6nsqfYWWKYZxvmBkY6YnwXm",
  "key38": "34JsUWv1bQMzaR4ewC7Pq9j18kvnMwPy3eajB8MFxsXrCMiG4yVnJTiZujHZ8zw2hPGr4ViTWnhELgimBs3LDBN2",
  "key39": "aJxRcMoZ6GxteMof5zKkgd67Hbd87xaQBgu58iPE4DGtAHZ8Fxc4TQ1GLtKWKxqYKG7NZ1PEKRCnGKcicLG2qEc",
  "key40": "KJvMHJaE3DbYmzJLNRksVygZfWydneFuWxBpi8bANnNg9SvUBMMxKHPyxvzmHVdkUeBwz9qauFcpGRJiCbyxY5c",
  "key41": "ksrsBozS3vQ6VhUMKvmEmYHMK6BjF7uoDihpXWcHrJVL6Jaji6MTJ7siibFzXfKH9sS8gzrL75vEy42gEAcHKps",
  "key42": "rW7bRJzDvY1sBa1mYJBt5jdFbgH1yt9ExVYdcXg6N67Lco71jcSKp5mwsRVKJ3qnL5MnPBH9Zn7MCWYZAPMR37N",
  "key43": "3Ljm74QFjjMHFi4CBN9i712REXuRFMAVjbpkAhuTQN9nQkysATjghPvTUxLELZQLAahjSzF9SZBEKfve8YFZofxN",
  "key44": "58YE4kSjY8PmZ3wfzS4SVJUqDx7xFm6Gu4yXKjo1LQ9wgPNzEV5vKLTTh8Ro131ebdYBF7hG3abrCX5r7tjG7drc",
  "key45": "5kWaGE1KKQj1BoMXJx9zx9raLFohpnBY1F12D3qSzBT7ByZ6cAjXV1umwcUSzFLTXBWycks5Qk2fiWQyuAYPFdSx"
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
