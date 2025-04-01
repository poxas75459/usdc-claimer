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
    "2psSRr27uDEpZtSqDsvD3XiB3cefH1CcEa5cwYHupfPjMzge6RkxRMrtV3twDEJxhzGq9jnvZ6hWAks3sfs1MGGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P5MH4wTSYJE39Z2bj8B37KCDPWDLmUJznRpmKwuJHt3F35wmtkbhkagiyCqxWEgH3wmJA9z8s3UAb4KEPbJC5o5",
  "key1": "2mk3pqyQvZfUuaNnh8wn3uu3izPF9TrwDt2gRpfckmMziebSxD6wV1QKKSx1VS6BYTNoJn4jPSm2b5Wxy9hjMMkG",
  "key2": "G73qfH5rgNrYb1t3UkNeu2cgfivKDoP6aUcQ7kG9aWNDJQsspCFYPvsbRCDgchFHzybtgFFvRPZT1WGtgMkteiz",
  "key3": "3ePWYRJjQQvmq6DaoNgwkcLtQkEQDwcYt2wSUdbSqGraS9MhS4epLNZYNUrCoxbbpUE5bRksQVqECCdByB3MVHrf",
  "key4": "5LNcc1kTZeQuouaPjzpB4TpntFsBGD4Nahw8s63cCG41R8mWjdTo9yCJiiApgQpkGn2Agmj3U5WcrfQj4VkRfNuF",
  "key5": "2NpC814Cs935qjbrihwtXyEXeknDeK7nRg4uy24gWdvZiRn6VSsYfQEhnfJZA4bdj2hYFahGA11RugxUa28Ewjux",
  "key6": "2tt6zGEfwx3GZiimuAVXeZzKs9X7tsZbDjMFbUmiMNfPX4mBxa9uqoKHNTWYTK6Dm5FYU6B2d6wU86CHyqRGJfuo",
  "key7": "2f2kdbkfk3UQMJUP3AVFbfoH6atGZN7Nczjf4SzevabWWhke7NQt59FjNfspexstaRCim5RxSvoYVf44WEx4ikck",
  "key8": "3WfymE9ZKTWLEJfKUijj9kVMLbvxmUDi3yek8g3ZtYiXcF2u3w9mzHbuaDnDA91PP8kLtG28tpAKueZGYavFtTrN",
  "key9": "3gmsew7jvFiXDc2LSnzstjoyABRFjsewu1khVtwxkaWaQ1S8xRaihS65PKpRERvmbMGd19QbZ9Eg2ywh1dEMUVfe",
  "key10": "4ffRm7u6QLFLADtGRzNksu4iRwsR5FQeAeqdZ8twwePjY24sJoq6i8UNt7Yf6onC3WLumUQrBYFzmpqNw8E8ao2B",
  "key11": "59snDs1nx2Ps7ZsBXyWBkrXdZWK5nbU4kqQr7zop44kCLQgeoNEMRNhpszENaRzh42kYF6MuUq1y948orVS2gpuY",
  "key12": "5ga5fQPNkPqR5kbAvJREPwxgbWVHsk168fVh4NGuQp8FAk7ug6wD5NF2tCsghHCAvG7FAioobRSYkdZvbdXiAdR6",
  "key13": "3m52vnLa9Zvng13vEC5UCwS9mr2acPKBBbp8v86b4B8isNge9KRSdamfCgT4FYbz9uHzPM4Kwtd6Y5e8NW2wBgJz",
  "key14": "iNM5CWFr28uorhUqUW8BW5NqGAtzt1k2KvFN227eCWpHxBZZnABeVJ7zwxucTTxLmkv9z2U7oZEPJE6JFmRUCVm",
  "key15": "42EfSt42Mt3XbEhQx2pJrL9ndnL7YSp6Tr2jB67P7Ts4cYnfomMG6oNwV4sq3x9ycMu2d5SMoFhGCsiFuj5SGXo9",
  "key16": "5XmABnreJFTTeecmjFu835hfhP5Y56n3y6KBs7dbzmLM7fw5jCjxpMFWZRaKctA4argSyXUq4wDho2HaGJStehgx",
  "key17": "23mBLKv3EjqpLME1hjKaVCQWiq5HPiUwKUoZT66DVSteTLXKLrZBxWoqkBqfJ6xzSaYCThbqXQ7T38ovy64jkbK4",
  "key18": "waTcwTT9JKPKgNGTvLPFmhaa2fHUpNGYv7PvLvWAQ3ixd55awZuiN6W9sCMMZvC76GGSd5Bsej5DJpu8UuZLdGC",
  "key19": "UP86EhKNwynGmJZmfgqBwqFUBR33zYfoRvL9StcLvXfbAPq4fAjKQHCprSXzEUAnhFFVr1yyqyoPSLmh5bY9RWE",
  "key20": "4Ldy5SRa9vdRieCng45bjQJ2bhwQAqf4hGfo6oRfWjN54GTokcGh3htMV8wct46i7PxCoV1GSAjhTvaXKsJVkuc4",
  "key21": "FVpLNyhvcU1DusWb7F7LjG6otwCxGGeirmiY6zKXZcVK8czyjTpfJBs6SYCNY99jk8kXZ8Mcz5JPT9KgZeinxVw",
  "key22": "4z39xcQJZza8Grvssj2B6Z6qh6a2D9AMzzsuJgZw1nztM5SyLeSYZFqYNvPyN8uN6E7fQqiEjdFbvaboN3iJp48a",
  "key23": "5cr3LJQatK1Qeo2vsKAjnfpXNHE8YGvj799YBYh4sZouuQWZ5fW9m8HXX2K8h36Spb3yVVVVzgd4ThpPbhBwYDdj",
  "key24": "2wVCs5TgQqJdwiABX8JNaH1HDv5LZM6wRJM1KFHg7YSAabWVhsovyd866PMcprdB6JNGvH4kg48EZtUm4m8BsVTR",
  "key25": "3Yt78DG6zJWTQSSxR8w6d9Qp2MMEoU74UrciEc9sTceN34DnzgmPxbLVySB8zb9LpfYjnyuJD26SZXqrEYbvYxHM",
  "key26": "3kWkCVe4Qmikpyvj1ftrbacNFVxS6UbtMWi8phHJYpcevzxEGfcBa6Bj1eYq8m5KfmSGXFxkZndpAm8pypB7tzk8",
  "key27": "3Tqm8mp63WSL6V4LoK7aCHowWwaiUxE87pMjsLFyjRFE7SC1RWQ65DXgoGcNeakGud2QsAmKkhKk5Fb3Nk47d7bE",
  "key28": "rdRGC8YoEJheBKcsPTPYnTCR1QtHnxoLKKFps5L5bWgwyDYVNXqTsF89v5TdezQtSge6UycJSXUCbxai7rvyHCk",
  "key29": "5w2kscfK1buWGSWS1DcfuTGtPvH8kSXXrRL21AfJ4Nq7W1oBBSMDkj4ozxhs3wBwn6cGAUcXVfJEQvMPexzhndX9",
  "key30": "2YvpcaPMuPe6vDuNUcozUuaPGRr44sN5TVtvhBxat4UBq8wBqi7kRM6s4ej5ZS3L3Wdj327Q8i4qoM5pkmcWrXat",
  "key31": "3oeRYuHGCAuZUeeaBwv7kSDWXtk7WqdnD4uPeFThDmNuta9WvPbf5rMCVA5jSJN9CtTaj3bmx2tRHDuc7woeVuCq",
  "key32": "3jCY4raLCETJW621cE5KJj1ezmCa5txJ8aMkUEmGbygmTGbCfs3guASfUYB3orXkc8LvM3UHf72kHHGRyyBQLJjk",
  "key33": "3bGKSKf8Ch9Berd9xhmKJvGBAPsc9BKqhkiDRcAmhwwQTKo647EYLffH8JeSvdM41THTTmUU5eN9TFYnayKyo4xu",
  "key34": "5oRNnJ9fc8hkGLLzmDFScZ1ey3nZJQ6regit1E1stLhx9JTFz6MzWo1396yW7FK4aYdm32ZYmPhCAPBx96a7cXt8",
  "key35": "2AKCnR8w7WJdcfXV814uZ7o6W3Hnw3rYHseV9o62mSNGVAa7bgjxVGKToZVdY5Wf7s3LYkAkt4oQ1m4H9EV1W8Hw",
  "key36": "43bNJJGbsuLQtECUFWV93tVLyPEUPUjf45wjSTSohp62xehrBR3VuQRzmBq35TfQFAmtpHPwW2CfchgCM1N7uWr7"
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
