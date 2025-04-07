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
    "2uHAWrJRn7nug1VRm18XasZ4577NjUAjeb4LBXPsBkVBP7wgYx7weSQGooBUYNsnpWdDdLx3QFqHpZbjZhpVdSkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PaLVwEfVRFX2mHQLcdXUkTBX2BRuC3Gw6GGHJwWokexFCahVen7QRf8FsKmmnXf8ZhAy2Ea8ivKLR81DQDL8rr7",
  "key1": "BtE9KhYAVQWFFj4gkmEVwWYMbiXHoP6ef8xPCa2eykF876ddFApN3cQThvv3FeQ2hRjHQrYeLBYMScKLkEg4GMB",
  "key2": "2FiBzzCCqtgZYiS9YL31pkF9MaQii77bYCGEZYRf944pStTk9YBq1GtoPzQSUnbsT4Wd2zBziyYiEB8eqMoY56Lc",
  "key3": "TFiL9E3LSqZonkaXkEcpFFHhpqMjg3biFbHTT5o6gAYZMCYBC4MEF84zF81EPgBi3W1brkm2JqzDvH8GHPcnKkQ",
  "key4": "2zgj3tcVZ8Gp11U91e9erfvuMVuCHqCFALjLQMo64psfxZJSXSfKJWkrtoMBRFquisogoJv8MY1pjqrrtV7frdxG",
  "key5": "5vwdux9LmZR42gBCjabVZVCWTKyWwFy65XGzCRi6CdC9wbGa3muDUHwCAg7pXvPftxqspG4UzicqejjAjTJ1YAet",
  "key6": "4wbyRyvkfnj4TKwqxF1uyFK5VJWTXWQWcpc63NgFZVFx8UN5aH4Gmjp2R4m3fWCkfBMF3fj4kgYJ7QmgmdCPszRe",
  "key7": "4YYmEP9bez5jMApMxADuHXwbxzPbB6z7q1J9E41nDLfUNfXfXhCDrVzx9n3RxbDSgKf2H7rBKs93SCRvQaRmpuxx",
  "key8": "4dvwy3qi8uwRtgaxYcf19kHZdHftjU63uMcs3wBbyA3sv3SRzZfGL4cf5WKZMYAwwtcEtNUZhvXFhSQzsHgkWrHv",
  "key9": "2oKeG4To5US4VjWHUkNFwge1EvtztxhXfmwT2H8wUsWShzYnRe2vCqqWmT8daHzNVPh6XSxQLZVP6ugVQQPXQAYK",
  "key10": "2STaMrYiZXVKbk3oxjC2qni4T7g7T2ZbyRydukagtQ414MdSKsMYwHVWyugKE8rYZTVchd993P7BGtrzXCEA37tA",
  "key11": "3kAv2F7kx67P6qXnRww8XLdEPUvid6xXh7UKkwweeK9fC8M46XK4X2QQNasTBRTu29jPF2EvsDwYtmJmATEANBy9",
  "key12": "3LHdZ5yCX4N3vMn3Yhxy4g44CadZQyavHLAv77wibHhqAFpvh8uDg9bb1GitVDtCYTMTmDWTFXXkNckvTqPJFAz8",
  "key13": "48QLpFoFystVLVLYfeFekKhaG97wcJRgbqtcFgcmcuJiF7mutz7MwHXUe9CExLjfJRnmC9bjx3otbTfHFaVUeEce",
  "key14": "2Er98x2RUzoLxAzYQMXkq6je1av7NR9SWRv6wYdkunEh4bBD7isqNv4g5kiQcm3u6g7WEnWRz4piLypYMNVT4WBo",
  "key15": "zLLRvQiSHBa7G1V5biLmrtfHGAYvtiZ9XE3mmGgwQDmrz3hcaREmmix6goMLKY7i54M2WX4JHiUJxqsmXraCcR5",
  "key16": "4215H2mCUHsvdViQ29izfwdzaJYgwtGnEYGoJjzERFixrz9cAGFLZr4UEnnqXoJQJqnXCtCUbXN7nHNJ7VkcKuqH",
  "key17": "4xcr5uoct4GTzrgwdjty28PiyJVRygBfDRwRuE3jhc9QzKicmCkR2oa1gTgUs6rDgCKgkLZD6vgho5br5PjkF1D4",
  "key18": "3jYAELwRd3zmQkZhhSUPmfrX9y6mNoUFew3RFj3kn7bB9EdcMy5feBLbTp8rHmQkt9uVuS7LuyoytAQJJqn6tYD8",
  "key19": "4s7e4NqWXZNXThhRUAm6x6DaMee9DBEASnMFM3JnNejKpwKua1cBQiMhpuMXNKjjTqwYwvC586P1qQjZK3uQsNni",
  "key20": "2k5qHRCFUvV74TTXcZUvJ7ei8UR9Pa45RxJ9UxAm4VvjBo1eJMVD8Uohkgnn5i1NQXtLojNSZddVmsijFWCUJEo8",
  "key21": "4SNh7gxXWkZM62Wm5G7YCeZexkV312H3yofjPi7WhSKiujJZnssJG3idsTQTUVRMyueu3U3vPEP89xxaPmuXAmWr",
  "key22": "5hX9Ri4aWnA19kjw1shPnMiRERKy5pGFXLWPJT4qynYzJZd7y3f8urdmYbSJRr56aY6Qsz6vDbQKbbjFqdAcodN7",
  "key23": "26znXb12XxpwJ9t9Umz8bNSK4NHQ71xEQSJYWJcifqCoMdHWdsvXyiiVLrQWPj6bZKZoSmrcoVkkvWoNnQZnhH7w",
  "key24": "2aq6ADJdmtyQvzjiycQ9xn2aNZH5nS8X3cyYs7XPRH348HpuHJzyqNKLrBjMAw6HyBn7T7xEsMSxjRC7FRrvQ3J3",
  "key25": "XJpEPB1V9WPrXYND3QFDZYmdD4BEe6Muv84URenSt48mMpVVMJ7fhpMaagh7RhUH5pEdh2LJ6EsoCsAvmEpCHLF",
  "key26": "4sSyvhzGhodkaHEWsANV4PDA2DZjqQQw3WjgPRfYGGpzgoNB7kraZgDCLvADjRR1r5RcCNcUVgw7z5SCzLJjAnzX",
  "key27": "4WyDmGij577otAJZqNvEPZZxHekwJco4UzzycHakGyF24ikxHzgNzHb4PAG7BVCmnxaDfAezBUcfX7uKuL2Qn2S2",
  "key28": "oCGMgvv6zHiiFkxHpHYP9So7NGJ3ChmfjKRSw5WvjnvYAhemagojrJw8L7n2xM2rkVWBTqvz9KWvp2e8N6LPunK",
  "key29": "4UwZwCuTrMWgjT4kwbJCFBZZN1pMZkLr8tsUKwrFntrFkAz7i913xVGJJk8oCsozRWa7Z1ccQCqxb2ZPcS7g3kdg",
  "key30": "hHCuJfBz4rV1RoRnW6o1THp9eg8DtUEz1w7ohXCJBaz2jaGbB2sH4dQ3Yv3MNGeHkqXwffWeiEVejVdc1kLcLgg",
  "key31": "ewXd37DNRToFGELqswKmQGcq2vEbQ5DacFGuaJ8FGsr3WbfRPJNMcDkSTziK8HwvofAzPi4aysMo2aMRPLREfhx",
  "key32": "5LH4HUAez6jWjRNWmGi9skKapB7DN97ttoSQuWsnFMu9J36KViahLTzKUr8qNCx7VCpdfxeVLsWASqXTtL4Ms95j",
  "key33": "3f1m7tckzU1oBFYJYJuU27okvQYVCM4TZF5hZE4pEScWmEkPTe3fRTnozFfNq6uVnUh5zmpxrtpY4zCdzek1igYn",
  "key34": "3hrdXncYWtCrpWLEntLAKmdFeJC2YLneb2Jtwu8y15bA92WeuLemA8YKQFtfmeGGAAvXx7SzEoaTKtZrhtemnxqR",
  "key35": "4yoa8fYVp1EBMfdKhuU6XStoDLnD8szTtmWN3n7Yc8GgvZRmXfbkwDnyRdfKbYngPQkh9JiU5gzuEpYF8noihRfH",
  "key36": "ZDr7wnA1GkufjZrnWYwvC26YnZrQEwDTtqxxrTigxmv25q3SHEiPfh3VBws6BYKPVjjiwzBP5bh9pwotqa8vh14",
  "key37": "2bKb5pwLQ2DTjV33z8AjNT4k4Utep4FiSmGtnTzLQk6VUjrEvKAuALa9ce7r4WeTJuYvS47AwnXGAMyoG1JWS9jw",
  "key38": "39vVjg1QBHpMoud7BRzRyJFQTii6Av7m6fUTMx48gkSoityA3WtEvaDu5i3CTXFAJjNnQpw4HjXY6k3xCzpEb3C",
  "key39": "pq2j8Ch2gdpfNFavLnuamgWAgXKBwKRAeZNftRAsuQVkYJKGjgzgcUPWHaMDGoJ9rPMZz8Cjm3GEmBqTeFLJaKU",
  "key40": "21y5Dr6JYJPQ93Fb7DmvNjD7gaG6cwuV9FykpJ6ooXP6cLor3myC7vPaYJanAmCEGN9VCaZGJS2troUWWq949cpi"
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
