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
    "Gkf3bscJGEsgb8GT8v1znQbX4APT4kSRNGu3gjLWLWy9wuNi7fbAn2xNMKBGcikDuHYuusC69peZALguT664WGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kwdq1N98CtK94QhDkNDb1aYkfFmkFPtXNnm5wzT6BEhBme2TZukWVzvtfT2vgmPYLyVRgDD9kTeUd6xMx6VX7Kk",
  "key1": "38c1KV2Hrwv1ynpFBHCQwVkAZLDfbvXu3yYuxRhTcuiTJ2FQ66NPSFu5GzQRGDSTJbdUqYprJxcHLPxmYsmjneWH",
  "key2": "4cuAf8HRYYRR1pPwcWJTFS9dCuo3SdSkjgNKZjVceit5TE8KkdaK8bNZ3YfUdiqAzPtaR2CZxnuJYNKoa6S3vbRj",
  "key3": "5PjgywojyGLshuRXKs895M5zeR6zpyHTJzJHb3caP9mw37S82UC4wBtCJLm5fpuu1G1dawoyxiJHEr6wvTpQb74P",
  "key4": "4qRUjKkcVaZHQcBywourEo6i7etJ8ma18re31iam7qgBrcNvPGoe3vz7JU7AcXbHwEA7TVgiSATCzKWmzVysVpwJ",
  "key5": "56fNHYTHMa76D6ZUyMHbNSybRmLH2njBCoSXGxeYm8CvMRFaZMH5XyxBise7W1MkUCKS9Cq9rUbK81tfPNzJt8pd",
  "key6": "aGW4MFCha5TZHKUQuGscjCm6Ad9cUsAE7KLLYXA7TPaLct4CVngaJd67kUj9DGEtHTBqhKbGDrs9XGoD986L9qg",
  "key7": "JEQjUDEup2q28ctUP2YnRAhM5SMZkjmqjqMYxDQHLMmFSi77d9kWftfnuZBeGUiR7MYUUSU8d8zUTxTVKDCj13t",
  "key8": "2NYWzNJ8ypdEoHfLrfGhbZDtGBVWpjuCQPw7XiyRjjbAfqPTXp5yiBULyxR7hZsvu2pRKn37SS8tJBUJkpyouYFU",
  "key9": "5MyCVaxJVtQy7JTtFmuMQmWQnbMqgmC2e642iF4x5YLErT2BQxQG8x6qWrQUyZgwogLQLsdpohWJjVfsCHPyiQV8",
  "key10": "qBaHQXgLPchunKEHR8FZNL2Snd3kG88La2AbSj1cHJwHJcqNotKm2Ae9imrk1b3avWeKc4XdUDdNTeT1B92G4VF",
  "key11": "4iY3rNJTxBs4GDt9h63TEFy5rg8GdWS2GWDRAKgHzNnoKCJyfaWjqZfSGqkgfbbenhYjDBPPKyHd1tpsMUDsVCQB",
  "key12": "2zrT12yC781hSb5r9mdEYpsXNFSAwh3BtYJPRJau5X9FPtcVgjSDzwUVvRSe7QKWQMgjg7oMogZ6dMP4hXFKjeib",
  "key13": "23zGtazCbQzhogCSpqYhndhHaB7ZzAwWC64fhGiaezsGKuMUq7bfjDz7CuMMusEh6TF9rk6R8LdSf6ecCMkr3SzM",
  "key14": "2j7C6G9iiQng4DsJgoQkR6uhGxveDrA9HZA8Rt6U4w4BMWtw4g11Xw33dL5gEXZ5xrpnXTWreNDUTMGjgLBfL8NQ",
  "key15": "2opULDM8uqu46Pk8jfRga6g4eSh4ddzjpM5tTdzLy8shLFxvkMzzDuSidw7x4NJ6v1mPv3UXNp4t524EBi6mYiTi",
  "key16": "5WMfV22PETCjTwbr9GBgShkt52p42Lc8BKM5yBCxq9kk7QxobSH17cyTwKgmWu53vPuxsmo1LRsNTDUyJRrRh4ZD",
  "key17": "HmUF73haoHdCXnLSSU9ceWzLHxHEZ2Yotbx1EJ1vFKZwt8JfMioZ4ztEmMADDCx6ux3fd9aWNE3YbBBp1iixw1J",
  "key18": "5ZnYD5m9UtPhDBJrkzQRNALHGeW4UfZbdBuHQzN8gwVyafTSu2vKfpt46ik7ih7gsiSfwaxoY1T2r6ggKbXYfXGi",
  "key19": "5C8CNY6fF6qNefy1YxfSe9ZhUNjLnrkkBp1sMAdwHrEZU4WP8xCpo1Ba1tX9LtnyXPnXYXvHEgWzgADy7zMztrEe",
  "key20": "3cgHib8wCzgmExnVfRamz6RvJQJPtgNqcTu2ofiSQZAZ1PLic5nxhj67ZXC5LDJqzQQU3ox4snrB81vfoWYXMmHx",
  "key21": "5ih63XFe6Ge7sczyrLSDAHrV5D7SPyQub7nir1uS9LnLxZGyURGs5efLX133uzLof1wta6Yru735ykYuUohQWGhw",
  "key22": "nZh582Um91SFVQWymLcj3oxBFDfPV5aHY6osPz4JX2rZJRK5TH2AsyLJ6n4ENJeekzYW2hVQ2kJ8jF6kJidugbB",
  "key23": "5sw166e3QZfXEAsyFw71RN5kY4nLWdts5SLhzE1LTAQQLgn6ms2ca51PyRejUGjXfubc4HQg5P8GhNAqywLCtfTY",
  "key24": "67jBYaF1Ms8UMMkpjeaWd2b1c7ZMkWmbAH4RceH9ZDXEw5hTDR41TCGmd7HNpAU6ds3Py6GS286FroX6cXEhPQ4y"
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
