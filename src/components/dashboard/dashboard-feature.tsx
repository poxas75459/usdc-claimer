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
    "5qEGvDSpLzohX4cswek4tDvwBMCQcyYU1yJjzaW3YXrUdQvQpGGmXxKWqK7UGXkxLo2bgh9ppWwGieS2FuBAQsg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWf2PNWLt6WwBNhcGe1bjUrbXxbL3ha1TDBtqMgSgDBwYswqoSPHNjqJZ5UVzFz2v66zN8chGGjhTaS5LGK5WZT",
  "key1": "4ScNXu4j89X9W2Yd9Eufx8YznUGYQyc7SCWzwFzcKxFFbfX39ykGxccfWyDRyK7yQ2ZuxYHxBoMw86XNYriSKvZK",
  "key2": "122igobRx6de4LCv8YYMuCc9k3ZKQScENT1eCjfNvFgDt5Xp414YiEZ5XMk79wLU33zjJnWrHeYW2sEidsgooJZo",
  "key3": "5NFfCYmV4mkVREDY7zivJxYQUkvtn1JA47EsVWHWQtAUVvNCczdzeZEP29VhpBbFoS5GPybNa8GUmwMjQfxmbUuM",
  "key4": "4gx48WezSzWUE6rkvb7TioA2ohtii5tswVxEBSAu9Mb7w3szQeaKyTWYuvJYUHjuUX4oerLV9vkY3eVBqKWw7p1G",
  "key5": "4FuzdxCB9a9HPynsxModxU1hQKNUWL8Mgmq7ux6HbzjA2GcBmamTNCsapWLChz8UeXa4LQRek17w4R6uSDW1wAyJ",
  "key6": "AbMKoCGDYvqFkHq3gsrZjntEJBHVWgHCrZgxJYx3Lj33fqZXEcaocTprS3jmpLWSPmTamdMBWJe6kXkLXrZYJTV",
  "key7": "Uqa9VDXBfgZobJsxA4d4WhwVHBrN1Qx4QtuTFpZENdrkyFTSRiQACUQgrNWuDuqXYGrfZgZR4K9oSVdUKLRHehM",
  "key8": "55rLQuQRn7oLekU36x82JBHHKqPvSb3NTUjGpcnMMHKXQis49pezf4oFHxSY5yzmK7y8AfydqfW5U8Cu6G293t5k",
  "key9": "2Z7JL2QMu5fvNSYqFZ8fjA2BXow94uQvPoDvnR6WuL39VGqMwrSrhdJdqdpnNRSuVxoCVLfYUnQnujuBZ4vnqXBh",
  "key10": "3NBst4b7WyPoGqm1BqGN4J4tksjzgnNyZ8EXYwPsvw4qjRBXznTDwwAe3zwLRsh7yAHgRNKMSqWA3ko4dw7NQfo9",
  "key11": "5xpLVCCjLEHRT1DCxs4ZzetyjCXTsMSXpBzxMUU86Ewnnb72SsBe2gzdX3Jwjho9mbxyM78HiMeJ1Bm4i3MFuwFZ",
  "key12": "5gpM8TYMpAxsMfKRRe7khZ2dhiZUWWPxEJL1p2kNLBjcZ9nwuzk5SQ8htbhJZeJYnhsFMdyRSo7yFLNMvJVuYNB3",
  "key13": "4k6YzmhuKrnxrpJ4AShrH9c7mv76oby7z1ZfkahhnbYKyFyhtAwxoPd37xurea8G2GZswaidiuw4ZCBAoM4Rv2fF",
  "key14": "3bXreLg3B7s6WcRWJddWVZ1GY5ueokabjdaznrst6oxFseX23TRrbfn5DDnzkgYheNxpUNwGrtKNKs7PYB2rJsGs",
  "key15": "678NEg1WA7cnoWdjAgS94TwjHZwDqYKEbkzX4TJnBgMfVdpFg2ah759ECoJR7H3KwugUQwP8wk77xrGavaD536tK",
  "key16": "2XnTsruxrXXK9oTb3KtjvmkHDFBfBHdEoR3AQJ3KMyeuApMs94WjZpkV4Sh8bkXGCrioY4HX2R7Z3uM4cwQMSonc",
  "key17": "2jB8C8SuxwjwLJtB5UdC2fXwyVSBMS4HSohPAp6PxN3HafxnsuyUxxLDDcnsKNbEiuoCDrznYw3SesxyfQL6fLY5",
  "key18": "3FnoE89QyXfMQ7FAndPLdfeAnvfC1LjSTyxFfkp4LZSDfKB61RYKXbL9JShTJRtuyJVRA1KcdqNn4MJWWVsrMP8v",
  "key19": "uHh4BT9B7SUAMcdknxCCyaESvgPtz2HGPZiG6D9bR9CHV7vKB4C6f6yqpP5yayWVQ6YRenjUC44y3K2GdHF23Xx",
  "key20": "bUsZpuWbY8h8MHpSryfMJv9Aae2KXS9HnwgekySpFBqsMPxN5nHXaiVp6wFGWacLbgZezJCFfhMnUok1LXNrdLc",
  "key21": "23ehnX747D9MzT4fqfikcjxS13457DMZxBsngWMAiYFpchWKe7wUPdcTZKWamAZ2cDmdoiE5iDveCuLkq24QUmZq",
  "key22": "5A2RoVamhFz67JUjMvn1N7M5CzA2dW1fUw7tWCvaxezZpzRVy1bbVfvftr3eokJBwpDnKX4xmB25pa6sUo6zRSp",
  "key23": "VeMVXjgyxcxUHKdpfDx5CQ4QuhRbHZ4KAeFTibiML4mRpHSAe6HFjpURQ1gCfGoGRr4j4w1CpsxZzCYnJAQcCFW",
  "key24": "4Y1TiAg69aKn24dDK129jAozP4YG6mzYKXG13HNEVKxenmN1L77ydoZii8k1HXdRh2ZCrudFWZtUTrhiEpCvYu5S",
  "key25": "2vKXBLbbS2np2bJJptrbAXFz6sK1wLi1yZ7gYQRyxT6mZy45t6JZ1QtoZmT4kHmMy3dZ1f1ZKDqMNfF6CkVR1ewR",
  "key26": "2Rt8EtfbgR1EkH24LNuGtTQWWA3UNgyXXbs1kZb1sNvaHxZi9uq6mLAxzfGq8FQrx6Tzw7kv1M86sGYSYoAWVML3",
  "key27": "3LyspfGjMfEztePurmpKVo7ccyM9o8kpKHwuQDkUpgcC6WPDQccycmFS4QzjVdpd8Z7KZkWu6iTyUd6wumfbpQpn",
  "key28": "3wnvkwGMueF1b8AC5DarUUNLC4oYXc98FBZ6567sZEZgXb7W1vGEvyDP773wRKMNnvPjUW2FqMgjJ9qvMUs2czTG"
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
