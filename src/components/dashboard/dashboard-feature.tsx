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
    "4wt9UHnE31PcWV7JLNFPGTbh55HAGhLQuVYQo5uEdYXYnpuk2MBiHsbGsgQwTq7nH8mdWaxW1ELkJRnuJE7Kcafj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WioUU4bqWGKAYhDnzbiWPe6hHJkvoYqYCAY6huZ5ZFXqvWRdXAbtgG31ZNaBxN3P9ouzeqAdmoqr4aHmtmMMwo",
  "key1": "4LTs1sBPJyP894ngCb9UT1PEZyUmc9RzUszJBnh3q4ivAAwnCxDD3XtrJMWPonaXgodw5F9RFpmSdenNeqjNtVDQ",
  "key2": "3gciyYFyaBwvmAs1p8WjaDyDBiajpfDGQ7jY2xxkCVFpNEjRMcJ5ZrvPM2xHcXBYQrn2yuHE4bsf4kRwtZ8qzaLY",
  "key3": "5LFcKU8TFrJJMs5YW8hXUnPucGEcGf9gpp98aEwqzSqNraDgq64p7QHQWMxLJbCQesV9TwwiK2NctPP2bbqS5iiM",
  "key4": "3sGwVGUx1dJ2DgH38wndg1PR79DnoGxfsbyVeSjXB6rmZCvFjepFDLfdkJ43qWaeaT4AMk4MN75ABhWKpwdFeh1A",
  "key5": "4ibHzQZRjpBXSXdxXXX6MQGE5HNRV6YhL2H8bPWyxojAmoD8RbBpUW8VGxMYveiC3XUYPZFjdKMSYbYPPyF8TyhG",
  "key6": "2Ew6rPfmz7DJfL7RN4edRFpnSFt8RELusWqRd169EkgPYJngeSJebpjAeUzcwEQYdBiTnXNfoWDXN1tyJBH9Ascy",
  "key7": "4dTpH4m6sDuLuXpToWRJyCAbL8Q6TsJH38r935TseNdeL21r6vbSV4XeqD66BZm2KZH1iR2PRBenbpjQN4Lqyxpd",
  "key8": "Dvbj5nYYQgwyDwudnYJX6GQBRykdEuZMcBr7YrBEzqUo7qUXFDRvSbhmBot9fjhT9UQozhZguKHcUJKCGCrNFE1",
  "key9": "5pPtG2t4TJTeuje4ZLSPzEkZrpfXHQyckr1cocwFfsY37WuPRymCn6Tnu9m2PWAq1aVWXrg14UNiREnbaQJbDb2W",
  "key10": "45zguaVQyq4Wy6qmJzc3RwPLFPepmRcFRsFSrLWsfDvBAF84d5gkPABLMwVw55FnwpziRDekT2jdeuvxaZdc67dK",
  "key11": "3wWrqyJzNDZUS1HqrGSK8moqa16MjxxuP1kN3eKRzTa5fJ9zjU8dYjy6eex2stwLtqcmQjM5ZyLLJiR6jAYSKSbj",
  "key12": "EvYFivL3vZgCR5SNADjNDL4agwbaTPqJReacxPzeEiC8BsYHJfLaq9rQwgcxTMZqypU8B9NEJRotiwxBoCCevRh",
  "key13": "4t8ThJKEfPyLQrSSxXBRVSTKZpshcnXbJuw8jUKCSKhejbzz61tVckerpsXYMHu993kj7GnpPQFMuUnz5gZzCcYa",
  "key14": "5Ad8mBLbvgYTctvFc6UkoAcWYiD4dzGdxcdwHVvf3c5yo48FbSFhK2dnpPCdg1bqTD4YnYbdwpNPXmxF51bthFGm",
  "key15": "363ityXp8LZZU7Qz5uL3hMLeBke5Tjxak3H6pD8yqE4uEfgD5GXmxHhTG9qoqxre4zY4pho9uPEm7NAbZYrukXGd",
  "key16": "4bEcngpKdpe2S1wTA22iME1WAiwEe445iXQrXLsSra6C1hVVSnDwc8BjCKF8DvrxMZLSSXWDH2zcNVkXDhgrRBRE",
  "key17": "Z9V5jUDWs2oaxyM7priPajhC8XXnKim3ghmjUhKxV2HV5gqZ9MYUwZhERS4eVA84bs1JH7N8Y93zAF68fkDaHD7",
  "key18": "5rPgUTrz8mjMz2Cg5FFKDLJ9PuM15RL6noNT9ucC7SZqhm5ZTwjnryrbnDzhDUdLy8ZK15KTjxGkQXBn5g7mdxD4",
  "key19": "3fAioEYPNoTC2ShV8BaPpXUeqQajFDSxNTJVXPBmyBRe1ozMySpFLqq5rSe9VzCYYpiEb8yAkswGR2rVxp3mDAMK",
  "key20": "5XtRgaAEUDTL5cDteYLiWvb1GYTWDRAestrZGieRMpi5RFyaZtKdsx6DQgH9o2cv3RuQJ57M7rpz1WwPs2U9TxS4",
  "key21": "5S7wGzk45sYKaNddq8ckvP19hj5TkWdsjx9H4u2B4TaoJ4MoNhjyF8qSAM878apB6pzLzATVgNC9BoF9k89gAJLm",
  "key22": "2GRv22b9kMTTCz4VtgEqNWhQ3KkwLqGpgRJdeA9dEDiF7mQN6HCLgWgSfC1fZHY5nAswqvpVk6cHGnSsYtHBzJtX",
  "key23": "tnmrsw9wsHAJssVaQ2ZKkGVYto59x6eEyeTGUbQKFPjoSH8zd8rYi8nXjppfH2FhhaQhYt4C5JNJiujmk6oGCzo",
  "key24": "RCNMkA8W7VE1cTknscnvtXRZW4pWcVwdsYfSpCqkV99Rwxi4TeN5cvmCCkgN3pcTw34qr6B7Fnq7kEhFbUjbFbj",
  "key25": "YXQYfTKyX7QFhetAxY3RNeH8j3fj4EfvtUJgaAbuPa9QYpQDfekgqizcRjjWBpvy8LjKBmj5W4cB6n79K7SwtZR",
  "key26": "5FioJZtKBn2kuDCtpd1Gw2priEo1tynqVktZssQ1j45NhojVbqJxH2sxVtxSaizqi3HPWhq6RKw29TAtqhYq1MtK",
  "key27": "3o9qBmR8uGnwD9gzVyUtGQwwviZUMjSu7sBHnxK3Tzh6QJhuXuUX8ZfMKVfixGSaYWAoecThnL1bdWctLRJ3CLFh",
  "key28": "41oHfctirAhrjb1y31vmsffWBVF5Ag5dCdj87b6Rb4LcjnrbaNLchWnx7fNMA8MomNLrqZp4QDGxiEw1kFBAmr3m",
  "key29": "4UfcGaYT8KV42VGyF9QSaT3syFTwXgtk68QiPesyMuAtbBz2JfyZVmZrBadcuARUsGXfioWZ4fYwchvoM3tZeXXW",
  "key30": "LZRY4dtUgGzxdhvgSYFGP6MGQ7YtnDdr9JLxVZsJQygad2hRFNX96pYpTNXQ77WZcGiZCWzcEr9WWf6iK1M6AVS",
  "key31": "4R7Vvr9rNjiKeVwKfzrkzFjpRSUwMsLpqFyduW2VEPwFxCZh767D8pSUahgtzoVxc76GSd51QU4eswjsjtiRZErr",
  "key32": "55atcnQL1XLKtW7Rhby19xnXGtSeoSiaSWnDxoQQZ4CwZqGQCNEa42d5PPUXL6MxKdFcKbSUCNNFDLrCSYfeEG3y",
  "key33": "FoFzezqNBheV4MURDv5iGuHumLC3f9KopmQENAVN4SgzNtyuZcZXWf5fcpoFXJTYDWUp2LS5wyV18xiWL69qgCP",
  "key34": "BJkYD5925hBTKiM6nFAi4N2irouWSAdAMSkBvusBdPziTip2vp5WisCi7iqh2bV9TRxTRW88Q2kDkcDicpvsY9G",
  "key35": "3aofGKoYMw4SjNW9prsANqqMWXxgGeAXbUEY9h1DsLwTNS3WbzAUWqBfQ7HjK6WNjRHhBTJgESbSAoP9ApkF3xBZ",
  "key36": "vuaeGiwKuppVQLS8uAv62s9YjCmjT4y8ru1auFXAbUnYw6pKKSiJNrBVpQ4gjV2m85HXcxAnqX6Rf5whtFcfS96",
  "key37": "21e9sQW4p8Duk3iU1xMspn4hzarRd7wMbpm7RN53UmRWfNTuFa1ecgBBvzAvVvpmHT5StwWLLqm8TTU2MRakhkpi",
  "key38": "8mCcvmS2i1v97RJF8UtSg8dLYeiWJPUTKioUkVPcNCgRkZ9a8s8XRkTcAsYJsAFfuhKvhyTzqC2mXqHJ3WLsrbY",
  "key39": "2Xsy27T4pMk4WuauCAyNoWKLbqxyNG29WDZgs4YpEGroSTTFLHxPjpBwVP8xLNzq2UZcuGrWAYdDNPHU4DZXBbRT",
  "key40": "21YAAWN5pTZoNhNKRzsR7j5sh1HYjEWUcdFNVrzGpJEe4qUbZkodUvNe992fxaESdG1MUehj8tbQ5DsGkSzZmd4w",
  "key41": "2ThK6BuMVhgXpGwfsTgB5wUf3TeEK9xRkn4Kxv7aypaX7VF7mcKhzHkafw6qPWKZLd6vX3ksga9hSDLV7KzH1Gyv",
  "key42": "62Arnbzph1x4YtrQNA1jrV2wqwGFo3myTbqJVdeYs9HCSTAWGkFD2omHMj9P2kt8whNJqFPessm9j9vtxVG5FyAR",
  "key43": "KpZiPDV2xkRKpth4dLirNECDwRPqxGUj4BTHuW9xdwjV3RTEZqLs8WE5LekDsPLZh5pJWVJSJkeBZGaDm2me6yj"
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
