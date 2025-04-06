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
    "4U9GJ7FHCya56jL5V3MkfNfdai78v6xVmrUymTicmjeMNSzatmjX6UxK8r4McSuAouGhRNdHSoWozJW6NfBg7mk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631cbur5s8VUk24xpm9dvcZfyM3T9rrY3WVNca7sZyGQB9C9ZZvK6LxXnoeJHkYKqevQhSzqABYnbJ5jmn9N7MA7",
  "key1": "5tuZPuSXdYXxc2pXnVDLPwfY1xp3SjPTu85pScDryP5H9b41Q34Gs5Ac1oNVE8Ud5ZHmqiGfe37UHTCfcYFXJ2rP",
  "key2": "cqjJ6ohBJZ97MauxQsENHfKPiSZDPSWxGHnEkj9AUpEWf8a6Ls9fEWQJV14qLcbaKTZUoavoosTGpAN5N2vEEvg",
  "key3": "393GjLQuigrTVTxYT5TbX6fYgxxoHFwYMSfuR6V5XA24RsxEgBSjXRWruEAK44ufNtbUVxhi1v9yvLRhZGd4p7Eh",
  "key4": "29x1vn742UF5PxYkCDs8XyCDzvn9o46D8sxFrugtYED49ZEetRerZ25zCcVp8w7KapU5DC9aNoygEd48yYjEizQZ",
  "key5": "3Y3TaBT3nyqPSf5szfHamVMABJ2uWwgqfAHp8Q1dMgYjuZLSG9rvsc9cuUwgu8H2G4SWDUT4pnR2hKo4RLCr572W",
  "key6": "W782AryhQiXR6MDC9sTySApuFiH3BvS8gDw4GYNwn1tx4CbNeJ1wQ3fAJuerRTfNUm5smRoAtXCXued9PM29Tep",
  "key7": "4x7LKH7cpFzg5rf6SY9zX5T6gE2TMKEYHemQHREQSFSo1vgJtJo6Nv1qvzNoYrLBJVbz6haQKQAF37z9Ru2BGwEC",
  "key8": "prskNZu4n71jn9ULPpf9cAWpYJZV1EvY1Qt2WAbGZbB84ec1oYV36UD7Rht5Wt3eVoeEHe8Sj49iQE9BDABp3nS",
  "key9": "2MRYLVvKyUvgD2wDufE2Uj7jGk922XqEo1PfrCTB762jwyEaJZwjbQ8JwEVvBVd4GQ8r7G35HwZtLXmBf4Zr6w9o",
  "key10": "4KR9yhfkjSeWAKxC7mGjpQqyRrjAdVwnujokZz9KPB3krJRRZ3fnsnmYkuKTL7iaCUk539KwUx4a5uaFkNRsMoFW",
  "key11": "VUMcY56qWVRu6qqMtUkoJ1KgpAXHfu1qqdGNYsHGvyfRVkTqYYLUAg62Xc756Ejyuu3t7XRAGHpMwYyjS6X1G3t",
  "key12": "5MadSoYnNRSTwPqMCFnYgU9tCSZkzKjvtEsJjqP1jtjximR15TzfKkU3uSgcGs32THLtcfSGiYoGA8MJSBmwpK5k",
  "key13": "4e4Nm6Yax2VJBi9z4TGXyHmJaqbANjCfCFkqfRHUXTgbJWP3dd4qBdtgzVL8BXkfgJq3L2iRbBE5abuy2j4UteNp",
  "key14": "NmbnNyRf411oDWLnNUwDwggMWc9RUX6ZXZtK4anuVqPYJ1S13fdzbdgi2a4csXWPmWQYFaaB4Rv5DegA3YNrx25",
  "key15": "25J27Uka294hH6YyfteiF7K8SqWFSrL6ESYmZCcyPwBYNigm5ZwkH7rnCGp5gvjBKW1YcFTL76KaFqG5eACi3WQ6",
  "key16": "2qR2UzAwwQThFtVDk8GhibUi33qX3WeSmjBrywCB8H4Nr6PohiAt7qQxaCSiQr5QvZwjK5cX5DCJw8ti6xf2AK7R",
  "key17": "BaJ4UYt2rtzk6zpEqQwjsxVVynAeSK9FqHiixwDtTjKvitFPqzPJdDTfJghHjxA4P36y6tKWNjsvh93SMXk1txw",
  "key18": "2JdxDhBQCrWoWnp9AyJ6sSc3TQ2wsjUJoJq6UdpJjf7TZXAFZM63obhczW4RCA9B2BUzTFPq8CDeA85BzJkMabKd",
  "key19": "28G6AAXMi7baSwLGRsDUVt8woioJGRYcRQ78D4EHR6tNTcRAkn3iEzgUB29cpAiECjkH9PzJtXY3VXDDqYHnPSps",
  "key20": "45tHXMrDnqh6SBFARnLS7NMqaZAtR5db6vUJyW2EdeRED5xs7Q4Fmj36KvcnsQDXhvyxsAf1rQFXHV6hu7QZyAqb",
  "key21": "49dA4X4cZ9ee1AE52t1AczuE6FeAci9rifhdCjusRitAeV7Hn2JDqXhxHbC9BtLoMk4bNiod5ELCGNhTD8DxLNC6",
  "key22": "62Zf4wMvFCFbdzD8NgFWjEajJ3xieGKQFHFNx3y1g93PmiCgT1xN4S2HYfHdC1GXVy3LoBimN7DUh6zqTQmy4tJY",
  "key23": "sH6R18CPmPkNJmdfDuDM8j4KrcdandKGvFKYfLk2auE6eZL9YBv9dP31H5XsqVufXA2iswVtMmnjHqBhxY4Qm4c",
  "key24": "2f5g62zxnjJU5adkm87LvmpKqFhyW6KYHyP7uGUZbzyizXvYXmKTa3bqLjya6oQR9LZBihD6QGr6rueTkJMxGJSY",
  "key25": "5XhXBf1LqiFoTdMY7LMX7ZpGoBKn7iUhU1V142G6iHhT22YX4EuZBWoMv8p51yP7jrJhZDYiYzzto9nhz49mbaGr"
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
