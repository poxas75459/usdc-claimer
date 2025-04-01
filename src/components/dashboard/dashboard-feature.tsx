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
    "W5xdPEFpdB4oAsPTVi6XPBikaQea6HiQYDBjFJf8xPTCKAKkjZN3qU764gtBZTNRPAmyD2G3gQu4r4g16jirKax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nHphXcKBmvURnUmk2TjJwAAXYqzpCJmxAfqzQew33zz5VWe2ssQ4ZtcDXL9K2VPThqJJB1ucd8DuNUxad6Httzt",
  "key1": "3MBBotjZVPkUqH5gLjf9XDtfeegaBJUy6DK5TRKN1tYks4Gf1QZbrhKbr3fHjX17J1Q3KazGBKaZ6hYLrtQM2iNQ",
  "key2": "2tKeB6j1aD3MMSdAdMNNPDtA45htVzTQF3ckfftjuRjoXUpaAf1qZSDB47nr3ve3XnBQ25p2SFmymSHRPHydbCVZ",
  "key3": "26SVqdTvV3FumMkxa5PQtz9ktwN7TuokbmksKAx2CHdCtGC8XmD2qFY74bsi4d52HVczremVARST8xSD3AYh5sPv",
  "key4": "2iJEtUAHvefCCsD5YXcpaizhgUW7A7NKrr5QmMxSi63omg25F8pUygZJDTQxgZm9x6KE1h1nammLSBaYSC7F2Qi5",
  "key5": "3raBLHzSJ2KvWLEY8raYsBsu7fnpDXKYeih3zg6Y5jGAvvmxkV5ZSV4BuDWp1YS77i6hipkj7uAFvjp5frMReokk",
  "key6": "5TJ1ywwNMzQXRZZt6vfZswvsnHaau1iBrC8FB5CXsp7cFzMdqJcqrMAE7DBJ7NuRvefAo3Mx4bUs66SmadfmK8qn",
  "key7": "Ue3UyREEQwitzsP6t1gmnXQ4LNqmDtneKrzZmVdSZfD4Mu64urT43GJhuhhP6fTyh9214e5jvjmdpQ2bYHbEWtx",
  "key8": "3jWFsjHe175ZhWBuuAXCcnyB78quVY8dkwutpvmdXe4TLPyMGkjF2F5s6g6wauWTnGSVRLkNHpFcqGPtrApUdYib",
  "key9": "reDeQuGfN1tzQb3Hx81VksbUcmNZhgj3r2T5daMpjoVBPyfRbaz8hSFraTsj4eLg7vxdxwVtPUjxdAkYLVFKzje",
  "key10": "XQHq1GytCBUcvidkxK5YLDfDMjdELAXM5mHfvzKCvYp2c9CKyirUYT91ZMvZtJv95CDtZWt5LyqWdAn3GiNyZrx",
  "key11": "56oYFWqE9RBemw3sBF2tAHXMVK3bwWQCKJTwUmx2CmLREW1dmYF4JQv6szeRJpr2BiHMwXUN4FKSvafsTHmRszX9",
  "key12": "2JccNqpmdjDJ7zmTTs9LCdyzoTvNeoKdzCX5hsVp1zhqxDxMFpq1DH9FSTRBikZNafQZs7zgHSqYMtXvsidEQ4XN",
  "key13": "3k1RXn9p2x9Ug7imP8hVx9zZjRWNP4cLRAe8SjQ9kL3wu4p2oEMKbFY5Bh9z7xh48M2bCu7zdXUijpdMMnRwUe4d",
  "key14": "5oR1iLWX34R1gXDPSNb7U4cPLRhw9Ra2vPomxiKkMS5ngj9zVEnKhd82qkZN33bWd1r7CikhaxLWaU2xdeHhBSyw",
  "key15": "5CYMWYftE4hvoJgRjxyFMs7GquEYZiut92ba3y2VywZPheGvpRJk5gc38PGUrBxcUhY7w3mma1Z1hvUho3dnczvh",
  "key16": "2avvggaZtuweCKH7j6KCo83TL2zzds5vAMUxeG6eYrtvUrdjWdBT7jCXkepyDdjpFERZGBwbVsScLBjVZ8fwnJgZ",
  "key17": "43bNTEpbfKHany5dkGeEugdFveU1gzXMF53165ojTNXxLMF9zGh7U254yueEaWXK9KtPbVTnYKaJSVsEGW3px9AK",
  "key18": "5gE458fURSk6q3TRdqFGXXstFE3BYTvBHNjSSTftxtz5J22FYehboJpijGGQoF3pDpCRJpa6votVaTcj5MCommBF",
  "key19": "2UETCZkHchyu1mmw9S6oFDW8QmrRMcRxv4t4cdNdJPaiRuizvZhfA9xfoEUBAt8QZoS2UAbWoRrKRsHapVNCBGVz",
  "key20": "2woo8daA6snX2H8S69ik7MgrkXMec6DRFenWorgTpuW3Kh6DdC41xn6wkz6ygrQB3K4Gn2LLiibhogAzzAeWU3Aj",
  "key21": "2tXt7YMsYiir2aPXMrwMxFdccbiduD2rQWkJfoTiYthAzrcSnppj131W6DBJrPcFeBtFtnhXLgzb1vCvMT7wZtZz",
  "key22": "4imeQow31MujZJPCc6SvSi3EpYAz6rq12Utv7tKmmf2HkuA6V1rCEEwEVpRdH7dEqawkMt2veuq1ox5sf3bdxxjP",
  "key23": "2kSPo2R3DdpTa2P1fqyEGTQ2ZAZb4RMzejUTajmsFtgZt34JXN6QE5HsSgbbDHpUS8xR8xvwsZiipHAGth3zSJA4",
  "key24": "2rgGHX7saaVzNQzhxttbGz9yU8mCpFboEdmHPJipB4gdYY3fUbhp1nicKcdYWtNqfRsw7G7iDycEuZfncABPfjbS",
  "key25": "yLjhaV9F3G3gJVeZyRB6bojH8Q1d3s7ZqsUgot9K8ZFgMMr3drhMCYyrjYGjsAGVbMnFXeApQP4p14mskMjuLFw",
  "key26": "5Mx4gBEghj3qjTtANz29SKYLTFBJWneFk4crBNvMjT999dQFa1KsEWxJdRp1dVoFWKA4gWz6qzA6L33P6VVbR2xb",
  "key27": "62qREBWrr7dBULxmnBNBHLQ19yzUYnAnvb1toPHrBGej7PQLoTthy2xGGTRTrZraCotTScJJcHPhgj8oknYYR9KB",
  "key28": "3Asp7skZTdcsYc5HP45fMYBBFvvkmsuh2SpTKiiFsk5MfnEaUGd2CyeVPzKNWTJHBoiQHvcc1dkpyMEwe49s6Z6T",
  "key29": "5aV6iyaGRetDk7uKpka1fxRu1RBh7MGjmZrMzZkTfA4jPoPNxqScQZsSng7yvkkH6ZFw94qW2j8cUTnpVzHuppc6",
  "key30": "r72viGi9hA84yqWPwnrU8yNXsFC6umtBZbANti4xaTefLGvC3QrQXDuPrNRMK5xjiRz5rnrTvM7aVwsiuWL3hzn"
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
