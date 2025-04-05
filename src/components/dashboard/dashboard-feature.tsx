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
    "4pQPLoUopp7pvHDqRUMJ41av1QSvYmAGLjC1KpaFmNEQiwjwE41RU4XyWHUoytuG4SYvSK8WSGeA9XH7VAQhn7uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vifDyuewxHeurfGECG5bm44gMx4U25RNmkqn4YPEANHacHr1QPCTLgkhKi3vSh57BwWJGamPVWhwdju4HVVM5L",
  "key1": "31kDx5hLZ5j7NLhi8RVrzdU6CQD7pULATU7gM8c3NtyARKB8LwBpfb8iT28ZZ7shvNUbR7DGrJJcMKxtPgr6NyEy",
  "key2": "UYBofse27JFCS6qohEwboswJLQHKNisVNVWeSNxNYL2DPPGts1EV7zbMyzqeqpdxuPCqLEZZrDp1wLR6HgyEtPv",
  "key3": "5HtEkz5zTBikaCJJj6aF8HmrCZM3EpwUcdRrmwhFity8xNFZQ1y2C6iR7FXArXvqmGoHT2nTnzpURqU8a7NyqfBz",
  "key4": "5uWC9W7wdV46mffyB1SA6XnTiZE8FukGj9eXLeL8tpnmEXjT5zsaBWb2XkA917qFRn1mbyc9zfXjB7dGKwVjpcqr",
  "key5": "3zoHj7wrHiLXA48n6rvEwDRYcuiXUVvUwpXmrzmTyi6diCqypiRZdecjSGVSizjVmDzrVzktM57RQLKkpG9J1VDe",
  "key6": "3sND7iWuKizGKUMdUMSCJ5ir5epE8b8NmTHKJEz6nFKxczAEapJy5RJUGyYj1cyz9g7rFkdJbD4g9TSsM6uKkLkB",
  "key7": "4kca9EjRuMuYUaRLeYpVKcf244zsS1Ji1dJQx5ss3bRii2oCZ9C2mY8cQiyCbVZXgYDdTxtg1o2fvzuuZnQcnuc8",
  "key8": "2AyNxYVKVHGW3XVUdD3rN8FJC54p2MPoeaCzhbzySWSM5tWNdBzNi5iBxMtMAbogyR1pNXaCzZLmWB8WrpaGBqzZ",
  "key9": "8oxQQonZGfaTt9cRGs7tYz2Mc4Xjdkk94j7Jz5q1pc6mvaznGBc2WU16ANBVqqJNnqXnB39jjspDej41ejt4xPC",
  "key10": "3jUBUVdVgANrMz3WQv2Vdb6mFRRA91Lpe9ToYqL6rupb1FuG6tCdoQSHHR5TcyjPHsvBBMnBqkzwXpwfU8ArRKoV",
  "key11": "4BLwLtgvukHLsWfZYMtaGDq9nZuJMh3a1KkEvnkhxwmV5u7q2zmYG52s15XqrVvsiPAupaXwsNGcTqnmppwt9jBK",
  "key12": "28FkM4rsfVJVqGQEojbfAzrEBXb44V8Cgsz8TMo3CwuWmsAJZ6qhaMHNcm9QkMcFW5wAaMyHs4TAdMnGoBNJ5yYF",
  "key13": "2jDrP2jsN9JmZK73RCadmXTd3AWYX5ZE6LKRNicqYKkq6DcvSM3sTwW55Ep6JZmbRGeJzQZNWqfWpcT5P4TaFwS6",
  "key14": "3tFfjuhiHPMetKCShei5Spripp23ZDsNK2vBkfqtQPdDny88n3htpzUaphSNP1nsQp5Vovho6jhZE74ZJL6TiPaE",
  "key15": "5hhxMrtGQMmF6GUDkTmhNkw8iMzxKoFYtQ1v9Mm7TEmZzFjAQYU3CwjpkA7MfJUXhGX7KTybfUhW21UcvhxxP8ti",
  "key16": "4rPeX7xSA72WgMpwkkJsyfSiUbZr7FHUtviHPnzJFakfFfaTvZQXtUSTuKgXsC5CnjF2o974AdxsG5RGaekA5YDu",
  "key17": "4PNtUhBTvD36BT7uDF78ZvoeaTbGVGi3nHv41vGhgJ24n5ZWuEEtK6E6rcJDGhTFyXW6vKT1FvvWmHqd59PTBccA",
  "key18": "3KUQDqPixrWYm2wArkmh7UgP9CESU9B5ANAsr5CREcBTwv7PEFqKrvXchyR2T3tFi79LnLj1XwknuF3hvBmMWzu7",
  "key19": "3ha2BHMk6GpcdnC6L6diCisjnwRs1ok7YLoTVj8MGvwabtHE6wHo8S7Jps44YtppwzmvxgD61yUoRG13ajdwJu5N",
  "key20": "GyMo6FPtt9y951WCQ9QdugPkCCBDeXzU9Hg72Gt7iGMoqbCr3jDkR5ZrWp1iaVmYo7wCL1hTuzsSYa77XGrFyHj",
  "key21": "36hSB2LP7Geedi4VrFVTaDUa1QRqujSAXWRrfvBE9tQ2rYm9g8HtCeRR9QGUuuZLj6ziSKF7oMA5YwovHbUCGHDy",
  "key22": "5rRnZKig4QAtbY1qzzt1155fSiNRrgK3GxjAdkqwKZqN6asp3RA6dYVQimLrmxbqVJ5SsjHwoqXpfUyNgXx3FXFH",
  "key23": "4RfyLfSErvw7TCisvepTCtUqZCAmmAQpfA8LcRYTbxSNCDpNJjSWszvvUoJjWqnfKtZdRAzcMfr3RKzBzmZaLDjj",
  "key24": "eBKEfV57Jn6DJUn9eD6Kh3XwZcUowC6VWp337bP3hAdo5dE1bapojFnLSwNguhfwJFTsvYTJJhzmKruL8oJSpa9",
  "key25": "5jPz3tytocQRX5jL7FqFnce8PZ2ezk4bw9FuLcyy8BFSY9u1DZ6uCgBspBbEbHQP3n5PZaH3LL6mLphvMiwTR3LZ",
  "key26": "4ccZ4fJ9LAPQSBvStMRR92DmX2yTkrg3EJH246Z1DdwSiA2YLNPoFwG9e7eiDNAUyMpArUtpUcu2C4kP5nziQMu4",
  "key27": "5ZurJY8a5fwNn4qDSwbHkHgbrVNq8z7iwQ5dSNsCZLF2aEFKqsLc4JbZbZM9ndHo5T45GksPrGCnS8Kp4VuAVMRY",
  "key28": "2KCftSkfn4casR6W6fittHMGxmMRtPKHFGXjwwS9HbYeVA14R6ujnpfeXGXsBs3wku1jZbSWBCmHvqTk4W6PBpEH",
  "key29": "8xz7W6xeNHSaHZRDajqeYxjXEtyiMrsvgYypa4n8odAW7Hn5vmezoqYko5y6EEzyJuWzjBwv8kNiUVoEH7a6NbW",
  "key30": "3dumUn9T2GTEu5Gr1CnuecRPiiqWbK6upJqSSccH4ihwLXH4vnJarnW31Ky9PX9mY3L1Yyohf9bSGrJK3Tzpzbmu",
  "key31": "2VD6q8i2uq8TTprNbfX8oByQPH9TvqcwNR71ohdfd5FVpPwDeHoVWpZZXf1Jp3Pqkcz3ApvSczEWcLJwjmR7vxry",
  "key32": "3QE5dGWwL3tsb7b5hKtxmg3mcH2wfKxUyMxosRsPsfQL8YK3U5mM2zyRkY82tf4AQnbRmXfZq7aJ99VoKb8D38sT",
  "key33": "WvLKogtvDv6Sbw9qdtbH8xv7KDjxZH4Q9qvdr5jjsTzbrnGniVALcUZiwqHhESruRkP8drT2qk73LumwLFErX1h",
  "key34": "3viCCADoupqhN17pkTMsLFeC287shcP7uSsfpmG3VkcpmYfYHzy9syiXpu4dPpSQxrx1sSaAcD8r6ScJGGFArThi"
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
