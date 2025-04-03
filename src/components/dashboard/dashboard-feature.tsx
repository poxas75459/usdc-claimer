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
    "4YFPd5co1et9Pv3Gti8UcY9BiiuwLQmtZ23xPWRJU7MEJSqP9ZDTNLkCbLXKv3LeyemfJ5MnnixQZS2TkgmNRzfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nBk8kxJsdZsvahmWweHpzfHw9vn2jJ7vgT2hZAK3D2dzMW232DaxKMc4WNSXsxesM5T7YXKV5D8vfj2PChhS27",
  "key1": "3WcnL9pGhGf5x8rqeRQ5G7hRKKUmAY4DU1kGoZBeb7XgFsAH4v9SEC14cJKNWH2EbUM6JU7qLpqmJqxSvMVX7VWk",
  "key2": "JWLTsXfFttmu8cXrXisKPZpbA43TYRU6sZtcNRsZ6Mp3ZbrbaxB2uhBKYXQqj7EGVNaasrUT9uEWfKTkJn8Zpv9",
  "key3": "JnKCBCnP9LtGkwvM7HULLqTyeAJipd8nxFYRvEGsSdXmASmwuyNrAZ9zSgSHt645WDLyfSVwiEc7zq2bHvsRXpG",
  "key4": "5Ue5eMqcX2exwDFGbyaa6s6HWEKuuZswTkwbXzV7HciMVDEY4Li23TCUWRVwJR4re7zoWPw5SFjo1DmxD45HrnaP",
  "key5": "3jVoAB4Pv6HdMcdMLRAhSKGoXj4BC2FnT5Z4vQfRwAqGVLRn2fZH6dtJcAYuPiavXzM14dT7UERdo3vp4QBw9X9i",
  "key6": "42euBrBk1r3zmcMQYpPc5256QvovtxZss1gFVBEJ3S4Xi4kU4nyZ8ibpTrpRtba3Z1hQutjJk7SqfPEfUQfXwiCu",
  "key7": "4c6R532aDiB9oh1FwFwPvU9ZLxNKdjpLsbZMkGUGEj93gk1ZqV3QysQQoSuRbndvHwg2kBt7BX9hB3bPgwNaomun",
  "key8": "55KQVjnYMqmneguPwdo6UHG8AW5bQYurURy2Ak8FhyqaCb3cF4cGaG9hyFjYGooXR74QKZGSSEo4qynzdQRy5ssy",
  "key9": "odAre7nVzGBnYPrjZ2yhQMsNnQREFfWUe8nq67rGbX7YJdneyLL7bKi6jUGrrYTL3s7Zs56PKR9h8DWubZMwmev",
  "key10": "28tEeK1CECDapgHQEiWHN4v7drcWi4ZbBaijQ766hfcfrz16YjeyLfQhieWDasAp8cjTsZjPRiXny1pLMiBxPB9E",
  "key11": "vJ5LBSJYeTZyELkgM4n2Cpv8KoGRX46SiPSMtZD2UrTCgdz6EXBg47Wm89KvCkdSfHP5rxxMVmTT2Ne2b9ekQst",
  "key12": "3v29qMSCaRL2TQNqzA4g5j7BUcrZnyMjRPfB1ucFn9uC4psWedfJ34K19dNXkQFwqBp6tu3tBCyJPQ1s2GAXu3tG",
  "key13": "2jUUeDWZxTpCLhZWAmrdLmtzJiGowfKkGmUY3nLVX7mcDiohJYKS3BwuD9BQRdCupyxcNav9yw4WoQSazGDA4CbN",
  "key14": "YWDnTu3hPcXxBqEZ3FwcjMMEM55GMzpXcWrGQ38K9BgL8wQjHqZuKnNP7kZxWamAGxNuXJg6VHhz4PfacpNz32x",
  "key15": "3CjC8L89B8D2eohH8vAGknCRnQsC7uakxbJvHiNThN5uNicT5Fr4AUFwvhKWswTcdJaKW3LP4xKevjJd1c8qgofd",
  "key16": "26JkZb5sRH3DJHKahoKmmuS2e76BiSsdG37Nn8DFfbR5dyT2PtsUU9RBzGZR5CTst7krye8Gzk86hXXnjEoLKNRa",
  "key17": "65ymtsTiPMPMGZiE1FmZnrqBBAWRcgwRYFdpFXhKEHvV8Tw9LzM55eaTyi4MadQPcykwXFKgKSrFVZSwskq6QTzh",
  "key18": "3oLjybKXEjbE1H9su3AHWHd7x8qJT6BQRYRw8GZrbent84HNqrMXygwurhkujATFWKYfWtmy5hHXQoLVy8v15hNH",
  "key19": "5LDsAqZn4Gf9o1PxVVxUdaEwFY3SuWcor7KKREnnNrZsRRMwTQPRJGGM18vz6bbXCMYAKLsCZUFicSHcDaLqdY1K",
  "key20": "5cMm4tYJcAm6b6Nz9DmjcBGoJaP8QkPZt4SVdhjMayiF3nxgvBQQ15SG4DWsGsv4gsenMoyZv3tdTow2wdtjTWVa",
  "key21": "3vtsVnUw9n6vZNkS2CH7XwUpK1VMUjhorotiU5v37mHhfYviGpLB9yDPhGxrReThu6gtB1WXckGRSrNBLnoFHq3a",
  "key22": "PXRNF1iXgH8c2zVA6qtGRzkKNzVPL9xzTKKjHm9GgWK2m9xtLyoeAvXFPwqbgqDRgNPqwyg7mSqmEx6uosMChCw",
  "key23": "46eUR3HMfYn5imNdn6zjK2d57AHifaGLtwxR3QAshpSMYE8d56dSZt1puL7RdTF5QdELvnUU5kwah91S5c5cu61p",
  "key24": "2LC2DqNEv5YmewRRePdwsvUr8Gj2AMSZ1WW3dcndvCbHSoeoLiXL8sAYj3YjGzBUpVDU5xW16QVJFP164oBfm2n6",
  "key25": "3tJKpDmAQrYzUgPCre6TGt3FrMD9brsAQheFPpjLhHRi6kY21QaaNnXBkEtmtaDg9vh1Va4rH8NsBCg4kM16fx1Y",
  "key26": "5MYt2iiUH9QqHFBSe2MZD8fRKTZ3422MT85tFLHuYgnX1M2nu92zv8wXbrWhYMvhpyg4eXGtCs6se3dpsTj8WTKh",
  "key27": "5rbcWG1e67CUybEYM2X4SrgF2keifZdd1gjCzWU5sYs9QwL6rmcosjnAjzktaNj4qek1gVQRe7gPq3pRkr96hR6u",
  "key28": "uYKonDPbteEYE1SvXiZVYS7zg2GUG43s7HWn8P3NVdn3GXt3P1N5ay91LaEQwdipevCJApTSijBGUn8DVm8j9ML",
  "key29": "2xxuo4WHGsW4wCjXcJFuGB4w8CV3aeqND1HcYkxJMaHK4SHQKi7oQMWp6UHJcaqoAaLUnt4s6ZUVWmynYL4xF11V",
  "key30": "25JJZzPTdDNTkLFYeLEJYcaQ3ee4M92LSe4HTKzCj4shsqJkJJaJyv3zgGLwJXUyabMJr16jELgGXjA47STh2BT1",
  "key31": "4WbbnYzffWiMxDfRbshSMwGSYXMfKsCQxyzStNtDKzh2wVgUyCAsyZz47fv2XUK896sY4TCqUbr5modtcW7VbVVT",
  "key32": "3NVQzzPJ6maDbqGQrmpYd2bgf4aXtHrFag7vzuxskd57bVRtyu24xkcrRPNcTDYGcWu7xPGwK1dppnTMPYZ2u7rN",
  "key33": "2xsEEPjv4khCpDZJRDu4TZf9PWSLqduwbT1g7B3sWfHkU6mWP7xtjDBqZWFt7TZAhTM771yDFGyfzeg5Bn6qL6Y2",
  "key34": "aWXwHvZKtCkRpJSroMfi1Bqy23qxceBQGvzvZJiGLguZmXpmkDjf5fSRVA9weid6Perjg49umVD3afhbwbej531",
  "key35": "4zmopx1cNdF48VCQoPBEqBQgoasMWv66qCC6m3etUMnnPDY31cfLnFWcnJ6KD1anM9DeWs4pQGf52Kgt2VaEUyQW",
  "key36": "2VW8AaWzZzkxbca2U92CkiTX6sxTT1t6C6S6JDoSUNwkb5NSujXrrPn6J5pkKFq2Ao63Kja2CWXJTQTnBcD26ZS3",
  "key37": "3WGMrschECFs6TCVtGzdv4S5pBoHEPpPyFyK48cUDg3DCrum3HshAySL7XzRrcFqTN4gBYUcwNfWGsPtAeKZwnwp",
  "key38": "4m8hwPjRvdfHffi5qYdbpKkXEAzh8xo2VekwbF4cWwJNVxnTpohXmJY3qo9xvNkKB7DXgoQMmgQN5j38VKojfNyb",
  "key39": "2dZroBoHJXcwEToEYcTnANuwaf9PXno3V7D1AmKW6TT3cR2YgYLsS7gAhWdErC7RRWReuvCQvqkiBcnQoCvjrjCp",
  "key40": "31Bd632oWYApAJMXawvcEAhGcJ2jsbLVTHkBFwSKdAUy25eZi8uPD9YB3LWVKA4QuWwVBEXfrMYhQKqr1Yufs585",
  "key41": "3Uj8aRpR9Rdd69tEZN2JRkd6DFKjM2ZHtdSuo8ZG4tQRX9JduVUHAUgjjnXVxvoErge2CjVbMdy7ZCv8dViFNn7n",
  "key42": "5itH8pPcGac9M4uqNwni3hRfb4BqUuUSxGqvF1SwLnNJDedBY5eBZsbyQ96HGDAyVvwbeMh5pdkAWPch62DNXx5y",
  "key43": "zsh5MZLz4ns1juY2u3BxpTSDEitooALAwAR1TuEKWSBqRkFRscUBoRvMypsN9tTYcsFBpJNh8EUZaHXKxigYNt2",
  "key44": "79q7NYy1m4kve4ztHY9iE3fDWvLN3N21KE55zmvSUJJHWSpADS6aLPfU1f35b6zQun1r55Q1zEjotooKaEysHU2",
  "key45": "3edkpvmsfM8k4AKDLdemtJUR94dycYgPF4uHBq5y6CFNaMF2Tf3bhykWzbxqx6N1JWjhbTWYNbP1YCTxk4L85saN",
  "key46": "2dsHjTdoqztdUH49a4MNaaHDj18dHc2i3epeXX177wfpymBnk9Qv57ZKn9nVueyJsg2YAKhk5YHfeBgEygHKnGCB",
  "key47": "5vZEMTqVNxkQn5UwAfTFA72gdjy65o23ogwGfgnKZy4My97AZij7QcbJDb2QrBxX7EgdJ41nFJ6xbctsedUDc6su"
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
