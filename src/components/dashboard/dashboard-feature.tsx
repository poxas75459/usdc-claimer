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
    "ebx2jgXRAP3wBZmdYkdWgFdNPKV7foDX9ZnnkrzNitLQXH7H5jGfHSHTexrxUTXg5pBjVZg3ZmEL3t17WfensRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQioGjvbzZs8ES54yxB7JzqCpn924aHAgw2MxyVBMSFURAbhUouqcBRwyWPp1BPZiSkSFh23syXGGqromHvYfRY",
  "key1": "5y3B5mqMYa2JczSEzS8ZpsbDCMonMF3uDx6s6ADpnm19kngrtns6B6SL3QEuYFdh138yxjgZ7WFzJGzktF9ijtBU",
  "key2": "42Cm1aQZ7es6xDJEoRg7LfUDtrMdRigYKWDcCSdocGdc6CBHWTNyXvRttv3r211DST12reL1uFugxCq5FfT16zdi",
  "key3": "5oX9axV9Er7YRGCApsxq5bhob97zdzEmhV1bwpK1uQF9ueQj3XATTjceW9mvNHNLWqQY4VbwiC2ja9Ci4SE1zLtw",
  "key4": "4oW7Dj1pChYiyJaL21W5HW1Ngq4tb1HaM2ZkGxL1JrRYzBSyDWgMbF9Awu7v1afjihu5dvp7EjT2SGgsxdTBmFQv",
  "key5": "5FiM9kB9efm3vJv233b1aoE2LgJKTbNaEtWKCMbsUQsSSpFtmykGURFhApHxnjkSEAJaqXu9YkVPAgJXfrYFanxu",
  "key6": "y7naTSDcTgyYw7PDPurtLddjhM3GdRvXJQe61LjyqbgrXKXBGyvP2Yg8BxyAyx3FbiDq28YEQwGWH3XqMVDjtBf",
  "key7": "5sweBzMgVFVpns9eRAJktskAEpNwgFJBF8kmBbYmJxowYKm4CM7thtiaXY6G3Y4AqdQZKkFEjgfYaaDebCSnjjaQ",
  "key8": "4bGn6jD6YQ5iw9RmGqS4UAh2m5BrMCeJrhLQcQWiVqAhxfB6ktHrc1xaCigHHLbgwyEjTHs57DeeRECnAcacT4tL",
  "key9": "2f4xwyd7dyFj7C74Vn23yPfbR6zqdZ5o51XoTxXesNoHFy8S3LSeRmDQxLTeyUeUfukd1qjSEwPsZWPbY98Viw8F",
  "key10": "5ikgQVT2tVnsWkeqiLrSaRAZRfHiKgv9pG7bhXmoFTU1wAbgje9NX67brAat7y84HtQrmp76Jr9FE27vKJ769spp",
  "key11": "2bBcyWXuNSRCszAvCuEKmABUU1gojsvnjnmiXgZbh5kJVpHXyEwjtZT5eat95LCNbPkjA8NdriMb8m1rgRt5TYid",
  "key12": "4MooLziDsVACvVqg3sZ5rq8KoqdrWwtnMcrf4c7BEVjuVE7LXKP4fyhib6njBWQbnApHmXfkSo3iEBT472bMtKQG",
  "key13": "3CUEH8tb3eQc1JWjdFjEBNKc6PA7dCY9feek92j2W3omdG9B2bVqSKm5Qy38dNdW3hxQcZBpBzTJaQh9sLMNvRPA",
  "key14": "g6t1C7RWTC7GBvbqnkLWCWCuQHYzKVjvfyMBzZc6czqSzXGcyBfuQH6dRWwVrhN27Bi6WPYngC8D4CE1t7hurmN",
  "key15": "jPF96WTGacnZGE7LrHqPC53uTUWbRt5UqfvfeGRXTXqU4hgLzgan27i1MeFC8NuRsv21hVidH7yNvwqqJJJmvQa",
  "key16": "5qqRkfkwW3xh8MjqX8aeFcKugDxxFg899hJ6mha69H7qpXoqkt58cq37JX5woWhQ3Dvkd182RhnspBaYAY3fW6XK",
  "key17": "3D4ZxsgvgTJziPPgmr9wHxwGewgukSUmWM9WEWLCddMnHzAZrgwrKXziX7fbW2264N8C34xj39QBqrBLEJwQiFy2",
  "key18": "47jRvKvTxhrQ9MTZHKcVq4ZAsktfgkQiabjF8vNRUrB39KaPstyFPTVkmAvXYsHf8S4a3MJH57595Sa77jAYPrFK",
  "key19": "3cwkHeMCHSaFrV7CxpHNYyo952Vr9v3hZGv2xzY8LNMjH3GCrDJMhzGvkhCKffYGvN3o4K6MyvRFK5PYb4tZspPq",
  "key20": "63RrVA8U1AtNUXhnKEGiWASUweUBWCWYFnVTmtmtV2zSD3NUx4AyEdyBWghDFA5HRCFEpkYyQfPSgZxnRUbkCSKA",
  "key21": "32ZaoyTJFC5dxXzMNBifHFz3mNfwmiQfnsfpMENbwftTWcpaVzSTEfbSVVtnJKyj5562xb5PdsSNQQFnTRj1ZQoF",
  "key22": "3JmajfGjtuUzCv7vwF7ZD5rhQwgua26HoPXWfWujSC9nkJQKpNHb7L2NRGzdtxSzAL995Xy12HQee91CXswthqen",
  "key23": "61UYjzzd4qfCz9S42uUqHmNvKJQf35uimzxcgr4CWHJ4LCmM35rQn7KA7QsYTHW8XTKp6okLJfa15vEzQ74NLxGW",
  "key24": "3ATbQh4DcVVPtmdW24qzjH1fp3ebBSo6QBjq5TEn2HFeHuBqGun5CJJexxCe7SoTZQ7Y57xWdFju7eJb88YLUZzF",
  "key25": "3XLqCAWQG6Tb7i7Zks4ARQcd4NPVzJCmezACWAtqEAAzwQMcb9eSw7ETn8aHRcdb31iL418nyXM3eUGgGtJkciH7",
  "key26": "3XbP2PJEVNGTdVgFxjpP4wg7gYso9HasNFX1YDsHn7vd2y7SZ6QcXeYMzD5QYR4KqF1M6LjTBzr61unscfqSSLga",
  "key27": "2jJW6zKYaV4p9YvJP24VkZMdVJYWBXo1qGmKhyyY8mVGg5KaTCucA9x4w3pdfkeqZJFrsjkkTNbN9SSA5wxUVHau",
  "key28": "2wXwGMfiQo6iLD4NR2cwv5cqvKgW4DnXZ1if1eaWXMMEZrB38xYRRjweEYgVZKLv1wwkveQsFZg65ULhB25ZKXTo",
  "key29": "3PdZnv29k8Vu3dpvZMbVJFWgwFSSX6zi52FkeeLMqoMrZDMJNSEJYa3FM86QmB9iBz6bYrUEzo1E3XSEcg75Z7HZ",
  "key30": "3E3dTshqYxUxHVqGqBQ4thL2vYiNhtfSsvXKfdsHNLPSvAc5bBsXLHWXbxa5oSLifyXS2ZwkdmpwNFvRxxR1dUaV",
  "key31": "2RUkV7YdE5kW55fP3XNHUmDJV9Ja2viszF4bG6Q77dkvMXTUmfjMd19uFSZ2DsqaFcSKwHXanVAiW34GX969McTz",
  "key32": "2GEsCs8n45nA5EMWaJFwYCgjogT9KD2boJf3mVkU8qRrfrNgkE7HmNHwnZsGsmJpiW2cFiEqG6v1aPok39s1ALsT",
  "key33": "3VmVPFo3Fs5Zii4vwidXohgpMbx8UF41QQNwjvBN6jbtsyCArDJ7V5PNRTQHD8UN79ztooeheYP93NZYuhnteAqC",
  "key34": "2TxsZ4odj6Q9Wgs3Nq8PfgKs543hkPoJjcbNFzchFoFUuE17mVKd4FgnzTWiEUs6ymudsekWEzuCjhCXvJYo1z8k",
  "key35": "3Ckxw8gjKLhVdMKC9wTYsR7ztD1sux292P5PpQ4rLJdgFUkMj2QBnrGDqrUphs6rtPssGB3EK2cVphkGUTKaZnuG",
  "key36": "3uQxBK3FYc29GVpNbBpbWvMwY6tg7PxRaY8nRtHU7hqzGEWBpqbo6bJ4zcuZpargLWbma1rZxik5oAAVsuKDHSBY",
  "key37": "3N3pJPFqzdmvvxfNaXHLZ6VPkGTh9a9Nj1XsuBzTS5QSP94ejf7ZLJraPzjdxZj5ybX4ZMqnU23dFgqnoGMHgm8e",
  "key38": "3hpiKD5SYqxHW8bNCn7SeJEtfeLCBnEynuAHPULtrRruYQ3HwcSeFjKAoBfptPnybNHNMfBUrZDv1mSHWKWfX76u",
  "key39": "2Qc3udZK4s6ngsSPxWTJ3KkdWd6RCqtjFo59znJTSbMfd81bDg5wixwr9VQFBjpag5rRxBTmJFoepahqq4ugSPY7",
  "key40": "rQkaDYuKmZXFQwj3jyUURwNZz2YseqrowwhWSzZ6YqecjLRQWKrYDMLgxsJHq8BuLEFtLtEvXEKG8JKkLtH2rNS"
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
