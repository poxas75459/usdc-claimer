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
    "3hpjHvKueViHHrZUG4sZ3WgvHYP8ieJovNSVAwTVUkd1Qrk7WUxrpRngtJocMqc8tsKApyecVnL7vA9RtGH2gCJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WSXmmwva6WF1QRKxfLCfduqj8RYzz2keNMbwvCHLgP6r2N1ZRAnn7QqcoyF9QCYE8KKZZDoKd9XF2Bc4iEsETqT",
  "key1": "2jCzBH49L2GgvxTV3U26KYzwQDzKoKtNUMb79zhG1BUNgzPRHKtqmsMZw8RzuN3MPkk1YWV6j2YGfUD8npxKc1VZ",
  "key2": "2mYU5e8cJjt15Fa8fSs1BqrHgjw3vipK2nvgrNF7zMhtteUuJFGRg5wYKnhLrfdqtimBFP1h9GX3o1EAThJiphZo",
  "key3": "nzBmeuKVTgWyogAySqjr5g7SnXQ5KfoS7AwWvGF5zxmZdsLhDgyRuUoARxXGYiDUU3uNhrmp3vunRnHLQMQHBvv",
  "key4": "3FcXsSDzKnFSzV8bq3phAHHmkqhfDVeoFWok3YpbT3LNsMXeiPoNkAKJ2KKpUF33XQ5vXGCuhEqWhnQevzdhj2ST",
  "key5": "3XeAGTzB8U8xpw1JgSmemAbKKyG7xwq9uNUoKHubH5zW9d2gNiuuKaGjQsMiPyEiq7sMZVzaHSEnck1nk3tRQUMN",
  "key6": "5vWQiuZ3atDgTrJptinEkL2mx3EYHZP5J1SEJUgfmBD1E3iffb3pxPaHLZnsJyHnXBDGYyHUk4FqjT1mC36x6Yp2",
  "key7": "47SJPfVzSAsdSKusjoEpw2XyEE3TGttz6APYDk5jN6sTXdjekrtdFL7jGvaggtHgmG9XHd7X37E69HeSLAKJFjtm",
  "key8": "37wYiJ2VFY8HXRkL14yRuST78RzWhDzfLSfZCosxdxtGMsPX5j8W27vPKy7KpC95UrJRmpoXcAA4Ef4npLohAqTE",
  "key9": "qfWUdW9SKkHscSXjYCFYxzbaLpWUCopDcH8wwp2sVGMaQ3QH9XPArgeSuVXk1REhrQ94vD93khTybPi26qzGNCU",
  "key10": "5x7sxjYfT4jWoAY48Q3igKGdBorBBwhYzQ2jWdiacWQoiuYhunySn5AzjcmxFBtAaLx7XVroAgi2oF6we9u5uG5D",
  "key11": "3vftMSyikwyMoYwrJHBSbEw5GCuDKUs6nNx5T2sVDUaspdiMseUSgoDZPp3ky8PWvPFwA7JjDkuGmfTHQQYvVpaC",
  "key12": "3wMAu4ruG2sEQQHTVpRaKQgw69pUs2SkFT4oWpcdMLBdobVccP8EWeoChGnNo9wpAeUQvozE2V3E9hTBwC11t1du",
  "key13": "4XKURSSQudBdWD6ymR8ZzgjFJZeTTjYc668enAnvr5sM9KKHbM7G2HPAD2taJVVTmxPfhswgyxtTPK1NntDkt4vQ",
  "key14": "5eaZ9uZjUizsY8fQVYDs2GFWn97Lq2gbHgwAX6KYgSkSsF9RDf8WLc4bbYKbGjU9iKhaetsNgoNGLuhaaenYVEzz",
  "key15": "2NwpXekkWrmGJt9vGLLRE1vHS5ZWShX2WPAojBSdnvSp1JNcMcHNRXVS2QyuPh62WPL49DfBz2dpfQoARzNoSdDD",
  "key16": "3GdXz9monwsJZg8qQd9WcMT82PPoCVBoNJo9kJy5xrS85J6AV7gFJr4TLYgJsjN1WHccJFBFy2BX9tJVNW8a3HFU",
  "key17": "5Vg31hk36YbgZfXX9xbcMRztJCYmEaYX5S3bBLYGcK9fvqX5iNpbC38Bepgs3VjUiHjJDhBMXX72qjeyyDPc13J9",
  "key18": "3kQyFfXdz1HhrcU5H71VdJCat1x3ouBx2BetVC6wM2f6qtrLaMA8eYiuZb7RDz3CTqQajExpx9vmCVPBBHGoCDk6",
  "key19": "5h7Yqy36aDPrcZBz9hCjFqeYiJuPWC6duTzbxaCMBBWD8ozBfKdnMJxqNEu7yzMRSWkCPRA8TLtuZGfAXZrtSrmn",
  "key20": "4H1pJJia1R35nk5ewvdPVP1Ks9ne1sJiuFyRe26xukYbyJimQwFEAoDmUSTCk9YGW3oSjrcZPpiwziBDCN38G6BR",
  "key21": "4Ln4fPmnf2kXXF4mgLj2X6X6AyCCoNCtyWn2ZASBxFFdZvtkpae5vCyZE1j16xqTddzuFcd3RzFRh1Y5ATgGYDU6",
  "key22": "3dMvKn8wBPo8NNcACPqUCTWZK3KmnaHAPRMDwJbRFB4vZUU4H12CVg8jN4XNZsVARm5AQWNVrcaHTXoQrzNEYWrG",
  "key23": "3YmmRUPeQKwwR4bpzNNA62SMQJCPN3AtFUc6k4a8nSPnQyamrFHMhj6W5fuTkunGc58Eg4TFQCQDUBPBU1o8RBZN",
  "key24": "sFzCyK77E2C7dp6TgkdVnGP5to5E6iwm23wkB778fhNYRNYBWvMaY1rpUdoSusvatbQ4eBEupH66HUmtj4hubGb",
  "key25": "365FfJ5mPKnGgVh7rjiwNuTqmvR2eaGoga6GPDVCwmohMVS6eHPCmtgSixspdVyLNes4ia8L1Tv3EoJKjD6Vxxub",
  "key26": "3kFdfwkd7TgK2J3yKZbXfC7nPFgXHNFVEso4TypV8ryBV5LD9vGbW5mMV36CnjoDge8ayZ3VuskPBr3pqRv1n9ua",
  "key27": "3WNkDMMKPimfvEaYU6E9gvVVgZDrFTXWGdfxT8jMYxhmyFu77YbtvquADsQdLD7bnBjMupE2XoFtmGEuRetVYWRr",
  "key28": "33Mqq1t7CxXsG22WLHpVZxEjAmByDquCF22e7R4aedHHkbkMpZ5yin3BLYGS7js2k5ZVxuVt5cwGBhMxdJJrYe29",
  "key29": "EtFJNmmjss6NfizWn6ppJUzgNjXiTkhVzujRNYmDom5AXQAbCTkWArXkgHH8kmQK39sgK5GRdhNP3WBBLiTkXCV",
  "key30": "5qwiHoBYBCruCqJsehP3uoXAzFpaogPrE5jEMjQ2bLdzRBV3kBfoUk8dQ4vJu5BbhTv2W4yrFjt4zXZUYa3eccus",
  "key31": "5hDCzTKCRGCR2zeQc7jA57MZJ9CnshLLZdXkDcSi3pb4ESgA8Fzu6YwSBmDVkZ5NJ5vm2RDJkAiHp2iyWWVYy73F",
  "key32": "2TGaXUy5DdpFpaeFr8aJedYyiNXa4qk2XznHy2Jq1fKALTpoCZsCFtS4j4Q5Kvznuvodf3BZGFQCvLWkThSMTEqQ",
  "key33": "4ZxoHLQsgsAL4nY764NeSqkv2U525ZnTHbbzNSF4nLHnpxwX66o2Vvxwi7bxfbcjpfMGtx1a3uHdtKMoCkF6Gk1B",
  "key34": "4vy5XNtAJ62dAQpuxp8yy1YuaSDK7Q9cXbDf5xMGeSxxv7ZqNNtJJmNVcgz74BNNZgL4rxGHuVqTNraAV9pUbGD4",
  "key35": "5yxhWJnEZruUHUPKK9TV2TBs8SmoY6vN5EQv9LtVvtdbKBXinDBh18xCNF2q9ndNxuzjjx9YfutDpcLcXUEgTzJ2",
  "key36": "oLqBTMePvWyccE1HgHBi11zwp4NC4RFZsNWNC1eZC5mVUXFRzsrVQCHtD3BmcAk4Hvze3zkUDR6HQp2b1cTy9kA",
  "key37": "3666tLvvuh2w6K5k1z1UcgowNvnNGr3Wh9B4bcCYcKb5NpaHbZRZu1KwUAJaPH6Drucoo8FRt5TJGuUbdNrMbZrR",
  "key38": "jhu8M1hHkKWoJ5QHbXHqb4H6c3Ny7mynKUhfBHNt8tm5qpdazRGs9z6HvfjgXQ5QMi3ZpsDz55oGEUu3XpiWojy",
  "key39": "3tQd47w5eDYyXq1HbxBmbpq7XuuxqHJGUMVmNu6mXikWTgLGqiuoeUJteLRbEPz7tCkrkLetf3k1Hn3kJxZ8mvqo",
  "key40": "2EYrQwrfrys1scxqmqzLnrwG6ojTvnYDWz8yrDy1TzVzte7EShbLNoCNtvBME83ycL54VD2DCjdMdEhiWrSHKHKb"
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
