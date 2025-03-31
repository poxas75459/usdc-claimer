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
    "2eQXkdYpWeiZhm1SCaWzDXCppNxrFDJDU1Ttd6GmWC4P3GLu7QLVU5onUvVjhPDRvmC7gpobxBTdZfu8mYrcPK2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qc92foobUQy1gbeSgXCU93jfsPZcCTS1W6UQk9Y8qKqiMVSmMiTnLas96PMWFCTMU7ckjZ3tPHfZNVgLeyfCUZz",
  "key1": "2mf6cjtw1P5NHkn61DCeY5VeZuB4KDQvbuAJQVqQGh47fr99aEc817NXijSTdE4FmnzZWZ9VoA2RgSiT5V6y5WBs",
  "key2": "mTPs3Vbm65hJr9hBwUGPfLkqLi2nwJ3CTYgk62Ua3VnW7YJqSZexKtqgJPqAsRLkYPRExJZD2YQGYVdCfLkmuqD",
  "key3": "2t8qkDey7ez4wkZBmQHynhiFkn1Pz7zWmQU6QQYJpRrRcGYThubYVCHaMFQ2AvvvhvMknyvYZ3j2MWUKfu7RWMZj",
  "key4": "9ACTZTiNLvUHoCi62jRLZdvfwoCwjytZcPTfZvJiBVMxYrVA7gTi3j4Yn2rDVX6VhQtXJq4vjgqhm38BmWr5Qto",
  "key5": "4PFsqXPNfsha8FspFkT5r2CJo5Y3UVbwm4HDHiPL1w1kdMECrNhwzowxLWMxczxV2Htn9ukDVqUVhgHMLrCTadi8",
  "key6": "4wqMMunNZgWc4ZUQrAbw9Unh8MuysBJJEsm6M3hQYhQguCpdEsdAXhY8jE9BE87Kyndq7hXoRv36xNAZeDuKpNff",
  "key7": "3wFDrnCYjrJgB3y8VVB6T5jMLYFfMhNyBnrFdNz7Tw7RvAPYsiCgmAps9nGVbzqe4v8qexGnzcQphZvRiyxQ7mQj",
  "key8": "4SetFZFd2yTqx5zBnsR8mUegcpmwoKcrNAY33cdjVaF4RHiNRXqpKfvpDozgZr21CnsGy2hQQ7GYZdzVFcA8WbwB",
  "key9": "45ZknWWF3WjsP4DXceEnXT1WGgRjX5T5damQnhnDeUaTBacw6MawTRJs38iQFxGATkwCvjmieAYJa5UvH1dkfPvE",
  "key10": "26oa3AFB5c8jDUDL3PjSCGe6aM5YT84Kt3ahnjQeqNUnqbD78xKFuNhjbfiEvZucAS5xfU52ApD96hneEhvNfwA6",
  "key11": "25YBtwaQ9g4a24R1hiLCgyeXSFcgSZHALx4WVMRZvZ3zF4PUTDL6PqrK5VckgcbT3eAemd9CTTy7mLrTsLPYCVCK",
  "key12": "VU7AfWjvprC8y3qZwZY8wu525nd8Vx2JYgjGeTyycGnA5j5dVDH7qqGo2GHL462eVeQ8yCptqznga5jsL3HdZgX",
  "key13": "5tcnw9dJvAxznAdh72wk4h714Wa5b2fCNSRvNH1H5vRuGwKiavT1n1d1spzEcRxqRv1WUAFUDiJX8acNDdc9CFj6",
  "key14": "2VyFLuFVpdzP45R6e8vBgSY6ciPL4PLkmWw5UrP1asRKfs2VaaNwUPei6uZESNFskBBBWnVinadYPwzwZ81umK4g",
  "key15": "2w7SjoJ4s6dSmvxmJcZEmu63tsf1NnEae56BbZdsU52knY4oEWDPujE8H1bqSEcHYNoFuwZANMaTC9cMbes42xLJ",
  "key16": "5dZKRqcyrrxrQqVd3NaASU2MRRQFF7SZ3ec88GKaGPjgQwAunePQJCGSpDJu5sAW2YX8dgiNrEYvJeaAqqJfY5dh",
  "key17": "5cfShW7HbEZoK69iaPcgp6iULALBoqsVSwVY5Rc7pL9RGGzNTawLeeufroncFiFjwNHJzE9gWGfwaNzh1x5ooBaJ",
  "key18": "2fKjizY6mjDVA3hcehxgAZZp3LYb5iVT4kUadcS5HSHm9pDwaHK6PG12qrAufrYg5mjJcb81MGs5emdH6bnt7md8",
  "key19": "5LyFyhTxiUFDMQszj7LRSrYxvmwj4sccJ4GUNSvmr1B6jn4PCgyFVyYzTEjwxSUxQP6XbccNp31Arf1Ya3RXv2Jv",
  "key20": "4gH13iRzY5TAzjcH3i3VJMdXUCnxRaEzRPHx7RD85tjo7oWFD9YzHb4wMiXwoD5CvurnTmGSu9cGiabMyU33zaLv",
  "key21": "DiNq3gkf2LcscrDYCbzCff6C63p6kK8ULpzFThuEwRWxKF5dtgAXdoAW5x7zzdDBgVjbHkn38eY2tQnnotUm9hF",
  "key22": "671KAptfixFe93biWqbPsU6wNRnsMkJLsH3gxUejjThjMaLTtWkoXBTTzqXH4iRScUD1BANuRSTggHR4rhMwZ92W",
  "key23": "3rF8tNbQraSW15eKYXxorUpcH2SJzSb1T54qLX74bkQCEe4cgMMdkrNMsZ5F8ptE1FjP3tirAy6WDUEk1N6ABQAF",
  "key24": "3GPga6V19Azxqq73fwvA4puHxmU4gaypy6PeZ8bFc7UprSzeeFd5Tj7sf4SYhj49sCkAwa5HsC4oP57ArTUsLpq1",
  "key25": "44oneoLSgKiPfP6LXdDpRhYxdTTajX6N2KZiZYBMHYUSTNJWdM6S8bx35WDRH7WEvzLmVDUSdK6bxNwAjeK4ud4W",
  "key26": "2XUaDih1SrfGmkuxikNQkC957SsddWc1kkrBBTm8e3jzHhFkwN1D5uTkhK7jdWfeoyapDBD8ujW9gAJXDHZZDT33",
  "key27": "vJFsekkKzDrV7dR1iQGreZhEj1ZUrGiRJb9QRL6rWGpnBjf6EkkokFPmSVBVzXK7dBzQVydokKtQXFyrcJdZzdF",
  "key28": "27SoHYWn9rwjtzAZv221UzHhd3ZdpXrTsGwmf6Ua2ctnE8oYrjuSHHLkZ9ShQxaDmDujotK6jytBngA89qvAGF9L",
  "key29": "MqC8HQh62dSzrpNxVq58R46qFkniWAnRWhfT91SNArSgHthxbs9xZBwvhRDKb2Yc5jTw7vn2gxnjraBUmku5hFV"
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
