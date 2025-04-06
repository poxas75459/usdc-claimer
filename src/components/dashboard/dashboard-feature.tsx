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
    "5vBL5UxDpQe8oEJwPzR8yMDriZYbrMYLqrSFtowtsjBVFB4f1eXd4mEprBaKbCUcnP6JH6QqUq7ZD2vvLHw21Aok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5GRKuzNpp9TY3tZVnLZsraDD42HUyU6wry1bv3X8chYH41NcVLhSC7eha6EJsC83LLqTNBFpHwfTohqy5kapiE",
  "key1": "4tCXiG3gQd5Lf4kjDywJvxLHgJftnmtDKxiaiuR3c8F24tEiNQqR1BPezCeoTnHSaDentFr1ZMyfWLrs326QdD5u",
  "key2": "67PkJQrBmgbYm3uavB9LHS19u8CZVyh4yHbUdHnhC7FAAn7u1ZMDjjpqjk5pTWWBRX93JvYF3briTN6RhNBLubDZ",
  "key3": "HJh6WGQGCyBwtYgE1mHwuZG2zvKee6x4qyyUuZqXy6nC2s85z1XtDy8WWv2PPfAbbyBawaFX7ER2CesamsJn7X3",
  "key4": "5ic7kffwQgPtfE388DDXw89uVnRZXzkQvqbwWsUBAom2gkeZawts3tsPx1kURbtSzpKqco3XLconXwwDhDbuv2st",
  "key5": "eBGcXUtxjBNLrML5984EgfRAeJ28n3qVtWGDpXbhK4c2qJjZxgzuWr55EoLKikYtPbY6LWnb9SB6A3rSkfXuuph",
  "key6": "58BTWpgifiNAbw4NYTq1RJDteXLQEmzGXgjYmhZnEyeMsCwBNnTwzh1wT6HYZmkU1Xjncfi6SZhrnsT6KTZZHxE2",
  "key7": "4qUiZTVt1ieYM6SW7dp4YstHhb1dALt8DNJah6rWLos2CtrP5uomhWpXPDVcUZZGjCsR4EVJEocwo9Gwag98ie8x",
  "key8": "3EkwPMN64tDkes1CnsY5KvzMkmJwSnv9r6Dpzq8KH6433VWxo3yahzJTyeTBTCkLdtrkd4EYmNHafuvFPKePhtZ8",
  "key9": "3N2sG5DN3p7M8KyYpp9zML9hPYxJRon3scHovgY1cic2GMCG8yEkfXHt35Y2g6oMkf6sBVdgS8beVSLFMvN1ED3x",
  "key10": "3VCe5kbpLUVaBERu36TVRvoKJYbyHyiBUAHmwux8fdSo2ztHnv1PTQnqHbAnce4qRPKpeRCb6DZGS6E7eRmPY3MA",
  "key11": "3nLyHhb8rdDbuLVhoRatZT18s4n6n2EPu8Lv7HAwHVb7v5THydnGKWcS4JMcFKhjD46avsZAd171evwAnMjhFcs3",
  "key12": "5s9bYJHNGz5opNBY2BTimtNkULDrnCWArZRoo7iLejBhhYv1QrMLSh5RAhC8FP9zHp3aG3RHmoTDoymVS81dTt4z",
  "key13": "4oSyxswffeSg3kg5vStEodRV7QHw95qYunLA9ovSiEFL2wcwCYMtSwQwoP471gCrhRph5nXKsUKpHzW8RbP6P7gu",
  "key14": "2pdMnwJyoqCNY2LY1jPrDFEGRZBNtXVv5ngqpvNfcpyyjf3msKPFSWWFXu7bLSmt7g54aSx4A4VC1RtTgcYtQmQm",
  "key15": "2qQcTaihYMRyJPY3Ae2e67E9izdmFnWMKyxV8J7ugASP5CCYSDKT5vw7PDfisTFMDhWvkymDULZz3wGNF2vdkQ5D",
  "key16": "3ZuVHWWfT1WmyUrpfYx87Go4tVSzj2x69zsoTsup1vY4vBBn5eXN2W8rKNh7DxnxUa6uvuUUncVsfDjbaToH1iBj",
  "key17": "2BFDuj3sABMm8eQPGYPrMbJJtsqVDHou9rG1QuaiCvfoDiDrooHLLfPYX1wWXWW6URwjY8qTPV21Umpp5rwLhcu6",
  "key18": "5uNu67zbYFn8LMeBdPjnfr1nXVzdxZniYQiMFnQnoES5kCkCsArdjRWVRso7UsVeVmLuJNkmbUj7Z5zKEfSZN9oD",
  "key19": "3hZHsC5LS3HYiddbX6VgHo2ganiLyiZZkCuxijHGHmZQnyzveGN94fnRBdHb6g4o523h3Cy7nBnE1rsiqWZHgZHi",
  "key20": "2Kq5s5oaZbVvnq7N4LigGVgX1g3PVxkFQZCmY1LJMRGV3xaRXYBftYzvHpkAVZJVgiJhPRGVxXnzSA53wXJVtsK8",
  "key21": "4yMfgUB41JfFPFb9MKa3fydaAvZpSUNy1D25qnYFNZSdMzQVnjrAGrDfKyq86zMstmLHJQMXvBgmJnaNkcJAJthc",
  "key22": "3ZNTKpUkbhGTqXkyPVuaKxzBEygVeoACo55EnPTCkgypV1ANYgJZcz7n4U9wuY9cx8vRnKqqo9JLVKozVqCTkXXS",
  "key23": "5qtPMcPinkjJ2VGCRAv9CakpDu7SQpA1qmzBuvioPKtfUDDNJ8tiK45NCZSrdNTRCRzgrmPLvUg5R8ruEetjWkSg",
  "key24": "HfTx6KNkH6HKgbH7VNPRWZheCYjxeinWbNchJ8eyVemVqdHf1qJznbwoFvsPuUtaMYZYf38wrrUrizdokNocpBh",
  "key25": "2Jio9te8BZsUVJaY2cAnSnYeH9Kxw8vGNNMcih32655dteSm5o2HJt2f6YrXyKiyTYgkUqhySMQm8HpiWPP6CAVh",
  "key26": "486dotTKPE9rxqLbepVBdPS82c6ypaxU9vRVNtMjNf2cf7HFxwv5vUzW6ca7WFz2GJQQtnmABScZ456hMbDLqexh",
  "key27": "XBpqF7N7Eo6Rc27QXcr61fHYuwT4CkiEoHcmXXA4eKGUBzbJesocqVakV1WRYc35dxRnyeCtPC4KisEjJhed2WJ",
  "key28": "35zbWSbHn4Re2E5f5cQdXoL6FZ9LJrypt3AcFDkgXyvJaTCArwZgQXSoGquCYJ7RXoMKfaNZipNd9EJc3t9BmUAZ",
  "key29": "2WA4sktYFWe66N7DgEySesUtWpyWVPVY2shsJVFy5pCNQLyq3EfCuN9cXdCzSpe1gHmucZBvJk3x9DpbH2w48vqd",
  "key30": "2FWuA2ojJkE9xmQr4g516u1vTHbsvupwDUALFW4k1pwKr9A3Gg8MWjLCTPBfnFwHBzjeNCJP5aytge1NfZZMYuCw",
  "key31": "wbGfKB3Gugb5ZQQQuesUwWLN3byMnjkaiiA3VvvRJLtJjBwNwzZk3DFSfEqB5t23DKTKQ8woBoy7q5GZfFEoeQJ",
  "key32": "65bQGt6UcjChXJUocQ2Zpp5eiYHWoErD95G3XMQNtwwtVNKQ9yqbCNm1r3eLPJ9g2zG2gosypXYFSDTnB6tespDi",
  "key33": "57EpyKi3xcRtfvLBSqeSpRHrXrBhjZodkuGrM6G3hJeNPPPoVvMbt2Hy78uGEXq1STgQiaXNXwx28C1EVRxKzSQD",
  "key34": "5Sf18hrwTqkK2C5aVVeTCSPhVA1KYojpe9fNEq1zoqL6XCUJsoRPDs5ab1daLpJGd5ZNMXfmqNwFagbuWWi7Bemy",
  "key35": "5xan6Vy8gPUWfGYTDZsSLzKgAkj34rB1x4Aj8UXgc1hCxhhdTekVUUxUZ6x6NZmcvUyo4s2A5grUR4Mk7Q1wz8Ri",
  "key36": "qFU1oKcduvsNC8XG1KCwj2uGa1yTtur7GvtrfnCYADBSKTxvPz1C6xKZdpbzmzq4PR1E7zPVBLT7FZF8xaHqtGV",
  "key37": "4HNyXFd9JjHBKy9Gwdo4YKnqVrWeZAPSHhw5DqDincu6DNWXMV9B97AAXPtzKxmAvM58JHKFV7CsKPhYWqwBEFdj",
  "key38": "4FgUt9jUpcVannh2CqNqBiGhqw8UqnXj4QYwgPks6ZqahMhdW9SJz5KkXNoVXPzx9Xx6RKHje4CsXjH9gsejkxvR",
  "key39": "76gBQBv9xC5o1aDYaDdKK2YTiXgpqEW38fKEE5pMYjw2gxmnKFZouocibC9abzKXeD1ondWnRepto8yTpG4GciW",
  "key40": "3fm9ojnX2YnrrTVGo7gdtYY2zs6NNxRwNhSMGtpySF6qWN2xahTCk254t9EegyPTKQgBHmxD2Zhq9gvSqtUhPsr4",
  "key41": "42FQB7pqYXF1ng6hA5MDeFQydPb4FxT3on2vvqp77Fv16FsZYjqpJn7b2ncuUnQyC1WKx9dhxsmUZetEocxqwT85",
  "key42": "5GeE9HFwzPwQ4guEmRMuTXt4XKmzWy8RW36yHEQ2MkSmiPvgAq3uQuSeJbTsMwGc3GiANfMsuDeJsiEvYAETsEvp",
  "key43": "462rR5xUXLB53bTdgNFPoMnJiahDePc38zj1hQnmENuygsjZjrshos8n4ibrZtV6NPauWHMxCU3tzzUxkUQu32sX"
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
