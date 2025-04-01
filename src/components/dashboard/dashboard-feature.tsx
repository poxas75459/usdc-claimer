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
    "5JtZt7u1AuSLe88NBopT7BjkgvsrL8v3r6xp5KvA8qpmLR3SvfBxJSYLmY1xCij6jjd3czFiJEd66z3dwRjZ4cES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYztEzyT4Vf474VU6KqdbqroRqdJc7kX1APQy9AETKvuy2AaKBcVw7KyScLwpzEyqozr8ZRc6cbwAcKqS9CViFZ",
  "key1": "43SRsJkfwZN6r1m1JBNmqT8bSYNU7cgcE4H1KBRWCQHZLoiFAgTvnJ8fXLLGjZe3VLezfQG1EVmh9epfVTFnRJX8",
  "key2": "87J2PJqq6p7QY8jL9Jhr732uMfgbSqfgBw9YsrUMRypYyUZyukMQZV8bHpyF6NvbCU6DzHK7gepWr3at7U3xsk7",
  "key3": "5753Ny3CWK7BAz1dfzGqEk7EhV4FGCPfdJitfhYAeT4t2qq4C6gHqBkHrN66AdXkqW4Zwj7tb8SnKUH95U974cAX",
  "key4": "5UksPXRpQmLjKZ7NYwCgLdQx8TgJ55xS5nq4XzktorUrMWbAVTaGWCPLcSpTfZowbRzRXUhutcYhq9phMMoZgXBK",
  "key5": "2tcEmcCnjwXKBgFiJFjqgagnabqN3UysJCWpJwwHxjjTbPsEet9btujiDmWbuvjZoQmB9stroezDL24mayi7wPF2",
  "key6": "5xTJyq5nN8X3sRBCztUuZz8VtH5LWBG7UKfYAb8xMRcvE8pLHk1Mzot9zSmDhREPPmGQGSeE4V5xbWg6juPmreMu",
  "key7": "ZismCHMMc4GNNwG1pogTpHSPTUNKwU6b3Mbn7e1R1y7es41zyKgAsqABbgkpB5GCEAySMMpWA6d1GEM6m5396MN",
  "key8": "47n4P8WSMcyrFvyUazLAv6pgZ6hQ4T8cUmFDy1GXSZBHmNnc4kM3k5C59uxjnrnenYUG5Pm2wkT8oL7vsPST4cJa",
  "key9": "29EDNKpFKTcEi4yT2Du4nKpbPXVDeC9omQBxyACdtXJv9z5c8tUSZbvUoRyXB2CVETXP39zmBNae7zVQQUeY36HF",
  "key10": "5M6uTpcEvjb4ti6vxAmYUfKxfbQ6YgGcJATemi1wxz5aWKHG1pfGy7PXubs9Z5odH6kKMq6ahxHNF2QZPHmidoYE",
  "key11": "3QcepJB5dqBCNkfnytTyrguYB6iuJ3evbRbV4pSb55SEPdUARCc8g2VKXEZW3XNc4S7HmAUqQHRdzrALfJ91hP1E",
  "key12": "2UaM6XjTfBeFhST1qdGi7ELwoMhhqj1ncL8wZRjeY7Cj2pE4chGyBy3EJtW1nUyQiHhWXhXQfZXtAWrbsPUpTVFF",
  "key13": "ysEWA3nWjWTxGsP13VcZZkJVjeG4k4VYBSUK6cqFVS8CMHvkZR8T5ftgsbKzdad5RoHbTJcWY3DyHpS2qiUbeNj",
  "key14": "3dcTo8e3X4eSLrSgrHVP22dmDcWYRsVREmzBmbRKpESG7yXsMpN2v8V47R4JBpwHsBJphVZNgqSrgjfTbxvnUnBb",
  "key15": "2FxFg1MZxPfFZbadRxQMBY8sUyCdY8fzV8h77Zg6JqY3CBGQkJMbXaWSKkfh8M37QZ3fP99dKpTAQCZhGV1McamH",
  "key16": "2eq295wBctzePtiHDo91VJwqhDjAQNAwWBDh8V1s89pDXD4Cc1PK7ywn3YSPsLG31YCSR8zUcaJRWcqzq6RdEtMM",
  "key17": "pqwjEfomRuJq6KiSKvV5nvTAowmNQNDjKBkwfG5wiZoAaz1DVFsrbcaSQMEZD4JKxoLMyrrhHfqfsQRNbWofidq",
  "key18": "5pWKtjThV8k7wAFFc9igZacRA1dGWbVNto8umf696kVeZpi62XFTcT2vYXMYdNbxjjdUaB58YUgEWGR9SzL3omaH",
  "key19": "4espMU4tugayy9uvum1xpw9RdQSyEaU7JVcwzni3vyRZTLGtWW2eQdvJgaPMGnaJBkAXcgdBNRUb8FvLVUjMLnvG",
  "key20": "62LXT1759PcjmqoK4eFzDTM2rrDCLYWQ146A6hqsfMh9kbJ7jk3wSmfsePv7z2HwVs4jLgbqMduG3Y7wXNN4PXtp",
  "key21": "3sZd68n4TJZTGDjh3bR5MmcuiGxKsSgSNdwdgib4BSKuVtu2qBRbUdvDirKkMVwzYiyh2s8Qt7MiQWo21tXzZw57",
  "key22": "561Ne7BdwRHiKqYvRovL4eT7TnfTTFTpecHPiQC1tZb7V7Bs2XCDLcfppYVTPSSqEVRWxoKGjNWrLsfPc8nkv4gQ",
  "key23": "2ovzzeFLQXRLExXuRzv7ZrJz1wKiXERSCiKwz43jzfaSGiWTGvz7LmrWH4U5XAKm99kzYNquWpg3GdQZZX6NBrDT",
  "key24": "2uMMxuvGvmWN6xskBKt2Atd2F8z63MGusjKnzfE7vA5VaPzxb7dXsyRpFF3wVFgS5ttf6EpjBBX994otXjQ8xjoE",
  "key25": "4FWtNuNz53pA66hc2S1MxJY5Tby73h8MxQRqNxsas9bv1cMEQu7EmEEHv9f7k12PPfsHrui7U268Y7QsMnYCzMLc",
  "key26": "3Wi5XztMMkArLpL11ZwKsf4JqhtVwPh1KUvoQL29v4W2sgFPqczfGDPpKie2BQNHPTQzihQeha8MQpUjobeWSMcK",
  "key27": "7cECFwQWDezE8JDwi3QxRzTcYsev6YMAAJY58aVZijTRJpzkAiuBPJWT4mQssf3ERPKzW9xLnUmCU6a7DjuN7jj",
  "key28": "MhztC9tr79pA7GA1HL23aaDs88n71LfEj7Xsgv2UJQCXFLLZhFDtD75VgP1bur9UfniF6ZnK4XaSGRNmDveZsSw",
  "key29": "3YaXQ7isVzkta9JwHsyzZDfXH8ahUjScu3nXv7QiEpgWhEr33MJh8tcSXWaCUijJRtsUKXMUZhT6ZnryUznS3Ypi",
  "key30": "39yf8jtxgNJ8rjAGBHJgJtEgZWMRDeeGe5SsCVkvZUH4RgHXi9yKe9aAJ5hhhgJgnDnHNRPmSSRu6Nd3Pw1EEC3D",
  "key31": "2vN7WeNKaYm9Vhej1uq7SpHwvVRWTEpYFwms9DkWo8SVHgQQwKc3ASrkrgQVD4ggzL79kqDu3w9dkDwC4PWxNPZa",
  "key32": "4sEKUVoFmLC73BeH4iTkCsfpMZkknqZymeEmDSDJ4jukBAjMx6n2pEAHNwg8DdWDjkwAjx8y3wM4AuMhqbBTmyNK",
  "key33": "4bfZSXmBY7E8n8sWhkM41SVhXRnEzTGEktXxwfyFtEpvnedhJZNvJncC2pfh6Sj4fG56UCpBsDMAuZQMMoCnrhsk",
  "key34": "5UkCMcwNu5R9jozhevmg25ANtahBpQiWrFSRR84rRWWTvym5Hv5rHhmDW3pTWC9xo9b1EheS1S3nWf3eTbdfy2Yp",
  "key35": "5d5Kb3NLgdi56xENY9kdGYosr2DE8cMEbqcF7RuJ6tAXmmh1ptAd8AKwXScUMYw9NSY5sicA4WVxLNDNEPYybrwY",
  "key36": "NkqQCz7vHaK7wwMCL5D3RbkSRWUcjoKRuSEQNPp9P9Bn2zXw1ScpzxevuKHAoe2pK2ADZEubDf6Ujim4QEXC24a",
  "key37": "5qoKij4jTqg9mZqQgGE896Y7zEP2of6PZDupfdpvD9UR4pmKZPZZf4DsfYFXgDp1GHYNPxGkVGzbeWAz5dpVqBaB",
  "key38": "28wAyGP2ymDkJXRvdKszM3oQhe8EEoLndHXHQMHfy9FKVSdidPduxZhXffoVzjdPAMHXC3gPm7XQx6QBhkYaxBAy",
  "key39": "9hADijvSk9V2D3J422MC6K6A64i7P18ZBA58oyQ1NWd3L8wm6QpTdZDziXieaf6J5QsEUY9KfaMPXnijqfUE4oR",
  "key40": "3Nw3Qc4mmeh28M973h6VUGVkdNwuhZv8FM8vchc49PPNg7zkMNH4e4tT6TNcWTZtWwUUwaDGGS3oft2hASSf9opX",
  "key41": "3HHtZYXTLtuG64geoQoggSnbACCbqR9moEUH7SoUuYL35Uj2xns2sDCTeSXydo1reXhfThApzmdbMTSberKr5oVw",
  "key42": "21ygsPMZxriX3QK3xRcSvFVNS7MA1DUc1osvujFwWqCnwMXmvVFEVP1Qdo189eJLeRmthXUgUQiYyE5FW2o2Nbki",
  "key43": "61qwcSSavRhaRvJZ5VnbspSXf4CRCWgEBYajf3HHukkC4ZZ3PyabfqwQGiUvffkCT42DYA5fFsUhuTGPQmFKogwB",
  "key44": "5CSHPdwfbngbyExsu28ZnKK3nyULn9tmQMCjiYyyS29DT7H1ApBAHnGbiiFPoN65sMgERPGFht1tfEMWig9juhJG",
  "key45": "29RELKp4692bEuHkcnvG8CTo1cAH5tdDEzcBt81X8YWj9P1eSrEPmrDPiPoSVyzTAEBwwAZT6xTL59Lg8XVYMNgp",
  "key46": "3cBcjPMQ4nJLnp45f5gktC63wgjd1XBfm16iVK1T6LLrKdawu1V18zkRD8ZUy6rGP55aBCjgbEx2TzJwXZ1Ei5y5",
  "key47": "3BRvGQJtohSSYypM6SxZDdP95MFs5mDSMDDPb4xygrZNtXe9noXcuJpttF2cyPGTMmnkCCgsb6q7z3LkjK34WVZC",
  "key48": "2Q8nosycRF1cvbxp8PkV9WKqiAS7bU2ZkDL7f9LJrmynz2Mcg6VuWSiQU9AiLPhLbp3FdQzsMgDUPbmBdFD5TdLZ"
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
