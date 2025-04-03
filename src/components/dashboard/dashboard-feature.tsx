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
    "oiLL5G23X6TzdNWGZob4msDSBwaeivKzJVJ1FG6uVTpgQWbQhPw1gUk1GEgjJrZLSrzhRbcnGAeuPxJAsaDM2XS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KbZwev1k63d9Zqh9GhVtK6zEfBNbSWPMQbcXvRio4NmmXWAyPxwetjPu372SQtBxZthkwU4W6q68oYsxohTng5T",
  "key1": "529CVtk36RPry7A8Gj7BnRCgB2HfwQrWDAWgQAse1JjBDDn1yvg8UbEM2bfRTctb1aeChi9pM2muN75gUoSZcScW",
  "key2": "64BeoXW6HWtWg3qHBAS3FNMA45Bm1FrurzzY57gk25KHSmQmoGUhwWJ8H3HsvxPtbt97McW1x8hTWuqp2HvT8ZfY",
  "key3": "58m7oJtzk8KXTke7eCisDY8CEoTYVYNgPzeAPU4ZDbbUCrqRvJwM6cyByZDhUzR4Q9vVCdop6mjL2SNDCJ6UFzRb",
  "key4": "43VAGmLhBon3Lc8heYAoJHgKZn4heRZbenw9qjmQ3Qo9QQ65hesgvyfM4t1yAEE2kHnWtnW8u6GvSwRAFsKfoJZM",
  "key5": "RGCGYgHQSftqy5pGQb6XcaSHBZwjVGkKfDsY1epPm2swxdhNH9rxg7CNUFNvXZkX7fkXbwqe6KsfCiW2maVn6Qb",
  "key6": "3eiN1wrkEpiqeGzXgpYEW9f6u98aa4JnwsvdVpge4kAjSFPXh2Ff6D823K6rguqgFKKdd3tpmdnyPJN8De3iRWaG",
  "key7": "26vkG8p4ZSVqp36C9JW4vGb7eFE8fbY6d1KpPyqpqhWpKrgDjvGCoVKD5aoDwoEqNbVhykaxkZdidwX5JA4qq7Gn",
  "key8": "3zdTwgYDztipsXZeMP6KJj8esHrBhkTottD4m2TrRTyXDuhghTiqUvuBZV9KifzWyNdGT7365p7w41ATmzFg2W8u",
  "key9": "4dZKMSS648nKu7LsMrMvoyZ39D7ri528XEUyKcfbjg3r33BQtMNQL2BKvgzE8KPfGkS82hpvw2RcybKPXA6wCPCF",
  "key10": "2gt8MViHAXPJX8g5fApuq8MPFfnFpp5wPEztPF9gWu5ECoyVZDs1Xse6Tnz5jCsHRJtLTNTo3Nv9rWJwoU4W22Vb",
  "key11": "3uX2ZnwZcMs6C5JkpPXoAYwPxjJFZY7J6fqu48BXyW9LsLC1MxHtu6UTR3XnseSPH77GHj3zGKeZUDvJRWjTb9s6",
  "key12": "4oQFdDBbsc27cZzmdavN8u37hSLHkru6xSnDBYtDEBAFy3EBiULTS6X3RztPnPGmMppXP5AkFR3roUCnr5QG9wdB",
  "key13": "2REDUjcK7bWFuLtCASR8Tpmgst6Ki5niydyM723niqqP1u1HR3vQuL84rTpMhPfninnNDM9FtqcbVVZLbVTLyuuJ",
  "key14": "39SVQPKTSaiuBgRXUt7J5T5miTz6iUphQfz1RWX1JHcnV3nspm81CwnWYzhjZnAVu6vzWMSUmAz6Z2o6nv5ZkkgW",
  "key15": "yGo4tdtopzWAUFT6jKvMKuHTr7nsCbmN4mXDrMS1YkwCJULLeMPh7mp3ghpCZF9f9qeGxGyX4wCnhB4QrVknaAg",
  "key16": "5Bm9jUqgdCtypXVKSpiziQ5ih4GumyGDZWgSNaie8GtB5JcBvJw9AXRLPR5FHV6ny7mZDG3cFL4BsEnN3YtMNkAj",
  "key17": "4gywtVbTHnqgeLAtvy5koA5mGooEd6vFK8w626uEmsD3foqsHNgyYTgeG2ZrFBQnFHuo26sTxydHJ9f4gdkmTG1u",
  "key18": "4cP7Ej4v6295UsPnMfGRUxkoH5hLdv5ykwixGKjhqC6DoMznZYgWkDdutH1VnDRHNHMUPbeZ6ZWNW9Z2xBQMrwib",
  "key19": "5Jd2u3TJfNtHnWUgNmcnUPsYnbjMzGtvQZx8Mt4dgPiWDCD8jXMvoMPedM2qrB7drB1LYSfqfES8mmab21ioSMCD",
  "key20": "397offivQHEjzhUeWLFRJgcbAjLxxJSEYvMo5n5zVM8B79YdFpsZBry3QkKMvotWrQLtvsH81hfMjLCN9u6Zz4Fa",
  "key21": "3tH7HuMbHanyABCxJGrCVmWRdzq62eDVvJcs1pbE2fEo7xn6dAPQRWPYVUgLABvSGek6CnWJTVqRdgCfVr7itkqV",
  "key22": "5WtatR7J6HfFk1v231gQaTdLkSYuA5pa2UBnbVEfXS78WYP9LQmTziA628567MGnDu7qT4x7znYm9vYhi1NcwbKY",
  "key23": "LAQ4JU1EAqqyjwH4qegNo55RNjR6pWTYYLAsWU4SoGF89zcAhfx7m6dWSrYwwPEqMaMfxCYyfaCf3432dbN3jWa",
  "key24": "3Z9Vzh5oQQMu7DAds7bykDDze7siwigyzvtBp1ufQ7ZHYeZ2DxTsLsktF5gMC2B7CpUYexW5UTLSi4NPQtPeotBD",
  "key25": "3TxzWPsUkcqAJrTVi7CviLdDW3LcXrAWqg69ws1MrDtLfpzwAyG2i4VkqAAJ98tfDvfrkZuQmazFJhhVZ98EG45R",
  "key26": "2t6hsTzKz4yrchdMhvnDUBtFedQZjuvd87MWrMAxxxhVfpSzW4Cvxd3DHnD1NcgY9RWvwpbPXeF8hiQyyRcoMtrX",
  "key27": "3gPxicexHaayvmwiq1BPN493oSqC27qhdtpkZWnCNYgTfDHqF7uTYyoJXSWupJajpLbxFg8oPCPKQk9uWRXRmGsW",
  "key28": "rPTk7xsPGC8UsDotxVjqVbXAGKKFTJ27vu7Xr3MeiKVsjgA9UQoz26p574yWZkAumku5EMgMQxiCeHgiQS3m7zc",
  "key29": "TWy8r4esQAfBLo9NM59APt1crEzmiLt686cPQyp52c54X2eztyymN4VWkkhWUfYfEx3WyDW1PjfKaP4h6XwB687",
  "key30": "4QFuBH9QiPZG6s11uZMbbHoG5zjnRYgXB5JvDsQXMX8cP6KgLQvKobT9MyHLuLQTa8JuGsHFBqGu3J3F3UwKyuD5",
  "key31": "4RLnFhRtnPR9noAFV6W68h9NzfUWsWgPUsSdnJKxX7TEXLfYRd1aCEGWwzSdo5UVFWyDvusFLstGLyzeQTQxreG7",
  "key32": "HBYAqsekRDzV3GV3UFihAgUjpMcbEjyfzaUWJGh3afq7CoddQKpD7iEakHKBb5QVwNPU1SKHCWZxhLDxUToAXrA",
  "key33": "2PQMfWMLYW86zj6RMdArhUZAP3C4qPfC6HKy4ijZxZLakjZjKHjJD1dqs8UWyDHoHpyfFDJucKFumo5crHD6jhuN",
  "key34": "5s8p2ruQsyyw6tp38sGg9zFF7LvBUrbi4EMg2qJV9xzw9oWmpM34uns5fHL9LhSf87L2wbzPcxLAvHwschvh8APT",
  "key35": "3MWV9zJvVPKpja9FkuZbVWcJkS4EZEkEeRRVdfXqPGbmqo6aBcHNqCvK1KBZs7vQxCE1o1vzjjrNZgDpx9jEkYKK",
  "key36": "4Vd9zufXTw3oWn3zTaUxfqXXNtzsNRjVHm7yNrkbDXYmT5KZApU3sKDfxbraN64V4A7RRgEk6MQLLKPQu8LatT16",
  "key37": "571D3jJUX7ZQTEFSkwZXgwFjZh2MqRt8CMSALKa1cjh78okinRXAi8AEhntJMv2YFjUCDnmfTSbFVYM6BjZZNpn3"
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
