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
    "23KVbqHTvioca6dQG4VDuesEga1NjSSC3hbXSYGhgrN61WxwUxYuC2qGsE63Hr6PezdU3Jys1hRqWPK1dnHKaxa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "268SxLJ28b7L4mTENhiRsixCwLSRL3QMyf7LRUFvEyWerDLZCy1hxs1kVuJ2VtCKCFa5zEs2bUVGwKVtEkA9GAgQ",
  "key1": "5TAnDVKXm1U9fCQL8n6NZ2nUnZ7TR4jC2nhN9pcPi1fQSrXoJjmBjrSFxCBjcP21cb8tJq1dL7pSB6ikN1wqURHy",
  "key2": "4qniTQiyRfbcmqnpWDaAMuWt3PwrVKdq1ywuATsLptoPDAQ7KLcbDCRZbBWYTk9BLM1MCyUrqHgFawQ8AsUKC6uu",
  "key3": "3EnhrSXx9Z8ZF4CvkZCtTDKuHZEyc6dodKhLuTXAinLGoy1YHeCWov6mXkJcXzc7rM7aZ4dd2qUML6xj8Bv8GMaS",
  "key4": "316MQmMDeTSAy4ReoRWpWG7cfgJcQze42rUXa8wCCFzaPJ3u7rFF5cG1XUBDPj7W68PsxYi2zcUp4hcNbwxCaXKR",
  "key5": "3RvYeNgsrM9cmLZHDWMgbyScPbSpdtXky4YYExUswhQAZ2nTjZ4c7h4q3CQUEWbFmDQtbpg1n4fWedAe17sAZaUR",
  "key6": "2kB8CgJbgcq4ujVrvgMmNGFKAgRCefYW5PFe72kZpWB5hAGoWok1uVphM7iwhS9oKsdAgZbw4TJSj7ftCCmz9FMD",
  "key7": "6F5xgMmoDshwYNWFS7DZcyxYjqvxnVVvxWJ8cKBNL8aomvuoCJiYrjSyNK5wxeTcrMyWdzdQypBp1LVcFNHhfpR",
  "key8": "KgYLW7waRJrVs2evg1wFGuZpkjDC8zNxrFtvnRAVdJzGhnZHWb5NUqersxR76qohrRUKioQgfZUGamJjxXRRHZh",
  "key9": "4RS39NFerRyFBFEide4p6cC8drM54w3j8ivb5WxXn9oNNi2GFM3PXxBt1wdWvRqLSJRTZagyEZ85KcswRk4k2J2g",
  "key10": "BdzxmEptNreD5Tba7exS8Az4AGAZsMb3RpakL3UssQ1TtcgCMbWGQS8UqMYM1Yj48tEoYzH3YnB9iEqsXsZ9LzH",
  "key11": "2Hu3hjGDxaw73QJisHQEqUMYpk12cqsY9fhPrPfGpLrcnHwqZ3Y7nWrWGNuGsMCbK5SRaYootu3MDCktX24h2sch",
  "key12": "3DxhJjFTDG9CTTpmaLXoiLXh1DhVJWFRXY8Ghv45jy8AHeGWCudL6uebBrgnHmLRXfWHxJmd1hKpdjGPqhkCPKxf",
  "key13": "3dULo85ojkMNQ812PiyHiAL3p5EcFpUkFfAsQirEGi2vAYvzFTmk8q6FTxkEVusfuHZoBtc31cRWprSPjY4JncEw",
  "key14": "5wvd7pedw3DfpkMeCEZm6SmVvQoZZkimd7xCaRQRW8Y6iyidRoLTeM7BBVJWbdHE7TZHKz9AT7jKt9yRoANC54S7",
  "key15": "3VLTTEYjJP2Z2sSDfkW7kFRiF54WbZtDKEfBav1i8fZib8vNfan9hCxQZJXoMDcNn7aGTmDZD4tQxY8ssYBUpbJr",
  "key16": "35RQVjvLhvgRHPGkLtiVam7CQ962egQu7CCB2Tw27BHkADQN8fsxctgkLr4RfUMjWWe8EQ7C5co8ERBPs1RRkffM",
  "key17": "4Lr5h4CyC5cX3iUcuRLQ6Xer77UV4JGnab5SnXT7Ave7vb3ZPZMN37RyaaKe6C9ejrJzdG3Vxsq8yvDD6NTCUvni",
  "key18": "4BqdrvortcyM2fUjvL4kgzuhesVvQZgmjUVf9Q5SQxS8bMP89qcFDRUguGBjexzsML6nw61BtUVigsszfminsYFf",
  "key19": "2SK5cgZuM4fEFSDST6d77Ju1J3k7Xkns16jjzPw7xxN7ShxX4kopQfGtr1hhBMWb2AwAMEp2XmHVcqgYAjsYqaJq",
  "key20": "5ZFiTDZxzmYTBhxgm5m3vdVxnkRzDbUKWQYcvdQ2oH69QNuw4ifmjv35UWbm11SQECKS8zMXu1tfZm2aErTiWk7B",
  "key21": "4YPQ8Wj9SUi97A7YDaYJdUK4F62nQU4X7k2HD7DK8frFce8wXAavmqfUSbKxeGysKyTQK7RpoqEFJWpuqWfKBp3Y",
  "key22": "4cvAjpt9GB1hzptxuCfXaoy6jJZEioUuSeDGmxhcC4J9sPFp1xDrZum6MQbgnWJJsKQAf8NQELGBASEheuBr8ks1",
  "key23": "5Vsfin1GpEMweZebrYXPy4NYV42pyyna7YanHhX6LuXBzh5x7SMbP5BNKJge2ighr6khHsNz33qXmfU4QMnaQUqd",
  "key24": "4uaabW6CUiEPbtmrZZRW9vqFxA3i5X2SpShnXbWJ657DnksVui1FhBJLvuzxpEnWkNHETfD5XiUZcCg7oxbXewRv",
  "key25": "5SDa4ZhDp1qyK1xkXqWwEVUfeAgwDD3E2ZqWfteNsB2vYkHUgdFD32np1zBWpB8P15irwSxrtPCLann7zekisURx",
  "key26": "3Hmip5UcJ6fwfm4Xzj8t3LCaHbg5CFJRKsVnoAoFPgKNrG6QJhbM8XdZw4WaYCqNtZ6rmXwdqsVLJoxFKLDQDiPT",
  "key27": "3Knn3vpJPZN9HKxcQrKGS9jMjFxnBinHjDX5CDnkHPGkEjpiv6FEvwjiJxh2u3vcyXXtybn1NG63xYeyQCHYncn7",
  "key28": "412RonvtZeyPfEy1Hb9m7U66FAitMef2qunasdt8mfdA8SRjBwnAVXD6YjawGN5mA2cj1wnj34AtZ91kNJWLmLEN",
  "key29": "3LDwLRHCyhYuWvk2e8Ed58ySh89vryt1Q4G26kbjwqt8wgQT9aw8jFkMhBZVSt72CUEH8HCyAabLUzGY2XKNUQNu",
  "key30": "5op8AdzSiU7MUNtY2KTYsCNjN7QpCFL5npN4sd6UGYJvEUJEdAeQCLBShuku2HmJ5qspM15pNxdk5YeZtpLso8zB",
  "key31": "4adDVApa9gZGiswbhMdLjSKZR6XXMeWrNNjio5yjSfezs4qirbMpbQxUiGrSnpR9G7FnmX1MFfHPkNcu5ndPJyvV",
  "key32": "4qgzcMfEi9ScSUnX3XuxT8yDG57JaK6avFLmztGvp5f1fp3D92b2cLcwNxpJWT2nRhvRd3UVkEFmu6Gv7bh4BsMS",
  "key33": "EBzimFY9cKwVfnXhqd5fTZxtUn4qLG7eNkM93BbEEEEcifgY9Dhr5FqwgUbgG5XLrhiQd86jqZeBuraZezuYwNr",
  "key34": "2RfCXyoJmAVLTjkbZb7MYrTeMy75KCT4P79qdL1aJMk5FZQT5Ysc6cVNA3Xwf1eYaAaJ4JZKMtBnWGYJNgoocHf7",
  "key35": "3ef4P4HCFPJ1EUX2G6xC41cGikg6LTk3NoLUFuLg18aWDyFYUmtyUuhYEv1ST5MoLQTNzYVyy21zCu8JvdGDFbXS",
  "key36": "38QTTzffWgqpFfeTebLhHekzKsJs4L9XJzZBDoDy2GMK3P4CUSfypZ8LaMJqrxu5pREKQSx8TofvygPh72yrvuhv",
  "key37": "4gWLNrmNbGL9i5c8QxFNgXPpZyX17HxYsF5TxiRX26cJi37MYYYzsizK9oK8R99WGvZNhQftRc3x7iMaKTfEGt8o",
  "key38": "49Y5kSXqiKphB5UW6vMcbAFMw61byMcHCgK7zKoGi4trapDyQXtbqFknSRXHMD4RGuDsRPD3jwfZPDLS3oYy4pRV",
  "key39": "zgCyZYyDdRE7GwpBiJeJaZ44BbzVFUfqr5CXb4C13bNXpViPeJpyRWa6fkAwVsnYzr259DGjD2GwfJeMCixV7va"
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
