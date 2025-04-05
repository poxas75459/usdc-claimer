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
    "5CjFvBtxRuVc9LMAvb1iE4cNwCjmAjQeLskinDM8hHkDMPV6WRQFVzgtW8Vqpsz63GWar2rVp1of6mKZXvSxbz6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vC9Um1wR6PkZzDZMQvjjnmxCjhANLgZakLXoDbSv5PdothnTRp3rF2cQSTwHwSaH2HMywYnWwn3FSDmLKb9Ye3M",
  "key1": "2eT3SGVTnvYv52nCEEgJ3efg6HtpyzCNUJRqwaLnWCMSv4pJfdpFUDRKzeRcz61VWKJQ9GeYDza7YfpDWES6vtWS",
  "key2": "22JY14VBK1GXqaumusHiXSzCDBDMWqZeUNauJenPujuXegbfx1V9uytGH8xeKG1B2hYfYRSdMAUhbG1iV8L2uCeS",
  "key3": "4X3RAxPuFAiVD5t56x3gEtePfQ3Vc6K4QEunzX9VQGxdUREvqQoyab4RfzS9zAaCVQsrkyFng8bPprS63EnGAfd3",
  "key4": "3Pk7SKe4LBZgwF8SZqTZWuvhjTcQUEBWyhTmfHzATP2Nr53Vos8L7dYdxdBE35HQbs6fZKTLCGb7gNiyUEABt5z9",
  "key5": "49XLJH3ZrRj8AyFF32KYsosZVeJxvW2YNq3hoZDLSxUVWy8HevgUeS6kEN7iWRZmw22edL311Ct6ZpsyguTXRxkk",
  "key6": "67nfESUhZzBJ9b22GYZzDZUfT5dDJebQCQ2pbQ8fLjcFDqjwBwcGPf3gihuLxoo6FbpgxDhBir7QxjsvFU2xW3Ff",
  "key7": "3AhjY6dAidALGyZkGPRTxMewiJqXjhBcspzP7SLiqBZE3BCNrcx26LjR5YrZAX6UAD3SKTSqJNatrT9qVb5J5ET9",
  "key8": "3dB5xtyxyLtew5AUZXhU2FGGApENH4SPDKqF2VkH6j9HKA8nU8cfbfnUNVd8Rzwnb8MJxLDs6oH8F7X3kdy6RA3r",
  "key9": "447JKZfPnNKxw8jRrs4Lv9E13ADESjM54tAqCCD75SuR7SeeTCx1UDU2KsBxcxvgpHeVKdNikNhmJhoxFD3S8994",
  "key10": "5umqtAMT3jZ2cmWSD4HCdHFuY7K6bQAAdVZ7T47UewLgcRYWun4azSgzB2Q4mHaD5Z9k8a5CZyiHmCTZxT41rp4h",
  "key11": "2dQ8MxNQkffbEKWNWxgyAVCrSfBtDBeRrzMkoohY8LmQRjaC8C53Jwx2y1fwpJcJbc8CsKyNVaUw9xkkFveNw1Qo",
  "key12": "3iUniu2HmkdJUbfrMq31Ax1LA48sgqW8ATfv8jqfCMXYgaFBctybMqffQa3WeAC6wd6P1uJvoVTHREfHz4Ku5kfw",
  "key13": "64qRaWpExkEpVqcgGA9KfwnFokLwvqCFd6gnbumVrAosxr6rL4BhzAK6N1naZrWnUmbCJG7LjDRKhy1UhqnBBYit",
  "key14": "5dzTjqj4kziKSep7RmzCeEi9FBwHKmFRHwXG7i68JfmZr6iERwh4yimTuKoJcVEmFXm68126WDcwpwfjvTznqqUn",
  "key15": "2fzWU8JUenHFayvb6XXUeqSJdReTXhqYd73yzE5GX8GAZ2rU9tKdMKz2s7z4QkyypQtndDkdgJh5uy5Un6TWjaGa",
  "key16": "3huhSXsxBZytfbYwSziP2FHALhEaMMqhESsgP5UN2isj8rx8GpkSiJeuu2YT3gXEP73JrXnm2RmiHZsvg1JcEtJ8",
  "key17": "3oZz1qb5VXKKarE3r9Gi12iwTdjY6t4ZcKYLPVVqnT7bxKQ73LPGbjzABX6XFBsq8sa1krgRvL49QREm4pHvQq6q",
  "key18": "2WEva1YgYBw8k2MtiZAP7oGDwiEHNyy5fQu3AaaNSM9sARj9DeC5SAsQ84pkidniGarz8m75K1XKYxU9GobMWWzA",
  "key19": "2iu2pHCVshsdrpoTHqQ5ZFHoTieqZHXgSKZh57qiUAZsLwxsS5nJCFY8UXiG7qEFr8UUYv18NXdSfHhoKivDC1fb",
  "key20": "46dmfLyu94Wdz6C7gxwtknBeMur4XWeZ7VjBBqmj2k4uVG87K4yjJNNQo7Go3RfQioFBQr2tmj4Y9u8bynPiwdkH",
  "key21": "62jMEMAnYiybH5J7ZHbDi9bVzY5kpB9z2kdFut1mGsjaCEot1QvL19yrFFgRpvFQQbpjXToFgjwcpoprA7CeYg6s",
  "key22": "fy7nWEii97W4a135ihz2mad7Ndq8Py11GYNo8KDBUGdTWZEKo62nTMLJ4JkAiyqVNPKAKfMsysMwhSLqJgyaCDj",
  "key23": "YJkYx4Tpb9SMzCote6SHUGnxiAdEUjwsAQFUwmT8r5dWGHsT4bpnAS6qPEPvcSk4hBa8nW24vnMYKijmiZ57ArD",
  "key24": "5yk5rsZLgHrtcmtwBJsFajHiHfarzk7Fx4vsXNWGERYVLzLTH9aw7BviE5GRBFZYpYUsyXgX6SAmReAx4HP5mter"
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
