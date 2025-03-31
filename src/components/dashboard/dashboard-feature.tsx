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
    "4TiXtLS9ovHrk8EjwxxWHJGB67MvnxGW1xH6wFpn4AFuitcHM4EGo9awFkkzMjZi89Z9PgUkRyjaAPArPMBG3XKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZt1r7MEwyqTw1RkmvSShFwxBUuwW5EjVhqoj5k7zPo6vaLnapdtGQWmqwBqieb2xBvmU52ueT5VcyUrUqpXTxq",
  "key1": "3GxJD2AbjfKuCikdrLtQfX28WtzjM7BeLQbjqkxjoJLi1h92xvQgmejwapqbPDbUtTcA1GyyUFcPgUKDm5GCTixk",
  "key2": "YcQUHZ8N8d4mwutMonagsFPXhwmuuX3Z384a559dKZuYu1ATdRNL4mQFUbHHvKQB8A91DJW6wN7jvojMMQbbhHv",
  "key3": "ugYGDVk4PAiBKtQiduFv1g6CgJBNgJVPnmrbU1XZHPtUi8m7opA9NAJheBre42Z9YGGRG22pC4crWQcVfgjXzPK",
  "key4": "2vEcBhWR1y3XCNy7bexdN4ukRh2SM1aJDtGZ1jMKJxqbi78zaN2xtTXRQrkdziKXrnu9A5wDLhsiDqTZRRog5naF",
  "key5": "64rfaeuWCrVH22UVg11qmv4aBgjniAxSbAvRYpxf9915wfCMPJNKDRBPywx4mGVWxv7dvd774n2dATAAfRAjUvKR",
  "key6": "5TvBH5T1riXQzjRdhNNUKngtMH9Phe5YCavxoqxymEFJe4coDkf9pe2UiNVcfkAnummjoztjMr99rQoN3sBTtKZt",
  "key7": "3Sw5dpSpRSTr7u9t4i7RsnJPJENrgqd6QRiYwtd9WUz8SE9QAZGLPsTKo7bKo5wwRxp9Pk4CEJKrUg475NfCf9e1",
  "key8": "3JCuczx54xDYCcsb5TBL4RMrGfU3WXmrcRDh6rabmwUk6afez7Ycu1obLEsAiNMFrY38NpjpZdo3ewzLtxSshRSX",
  "key9": "4ygnC5q3kKrmMqvUqFEneNDsA1E8bGBc2qRTiyV15hLMtJeaE3Wsf6uwuMXvJ1c8EnYq7wft2oyE9fuZcFzkjij6",
  "key10": "3k1EiKMN3HdoETLt77Pp2sFTSpe9dQBQ6cUrq3J5cs9fVkqurB7aj96GDQSwSAvB3MC9Vu5Mq5kCevi44UdWnQRL",
  "key11": "4WDZnwDDBBcudKK64SSLVJwvWxQfs3AuWsiY6zWV5W5Qe1fDUv9BTBXkDByD4zxkfQSqM7rURSDPQmE6HmkN4GKK",
  "key12": "TnfMKij1jbY9NmhqYzceo1HDwHzFwXfApAkBqzLgfKgqynJ1iTwhewvHaCHpcECtwvey2tzoWVLEAFnwxnmUFpb",
  "key13": "3hjriKLpidgG96LtnwALoLmmkZWN9SPajHVzqzN3z13QtGFPaKYpYmz9taDywhGUKJyEx6X4Rip5HWXtqiLdjLxx",
  "key14": "2Tpkva8HyW3SfK29q68ALHYvWyFA5xXC99gi9RtkkxY1M28MVWUJ2YuF5S2gYnkAaLt1mr6VnKh3y63h3hmyqmWp",
  "key15": "4X917uAzqU1uemHyo5KrbqVkz3dJ22z8DbaVVU2EaSW3XV77FzDUTjA2HFHfZ8MiLknsFrQ7Gjk3x4TNotAmQKab",
  "key16": "5piGykxP7AZ953hE84eoNTGWBDvcPwHTnF2DTTAAQ3QiYxzCwvWmwXErjuotz8ZLaKr71nKUESWDFYwjPctbB6j3",
  "key17": "2GFzYhzz478isWeXtnbomtWqTTAdCMGJjBnSVdjJLqb9qZ7xT8s6iJp8Cj1FMqcDy74ETphDwCoMkXH4vu3LNbKP",
  "key18": "4pFFgQB8zthVNC4EU4e6ShbAvg3jFvDmqP42ek1BaFjRstn5uvxVXdAkZKdgcy3MESTFqp7oiuntp9ZVbb1jpAoc",
  "key19": "3T1421ht6nEdxmXxMmcfRjWDNUNoTv6THwM8vFyWiZjzvvQn18aYQ5ENXH4kiGb7vNao7jghd2yuFqHc3ftC4CrB",
  "key20": "Xzg5fuujkuJryuXmtd9PMQ7iAXpm9e773Yf8U1wBZAnACuGVX4PwsNx6uDG4EjQYgSsNjtyK2djT6LAf1RmLyZq",
  "key21": "4AXgSfZz8pMVXe3deVtgsydkVaXZXgK7eTab9fBw2moi2w4post9GRQhLz25eorHenkTV1fW8Q2727TPK9DeJ1i3",
  "key22": "46yXvoUc9iQESQupJJTyHWW8ax22s3i5WdtjXm8V9DG9RWEUNWp587apda4SJYehuqWrQatK1M7w8vxdJ9eJfmjg",
  "key23": "4tR2DrXZML55gy8cjNsn3s8ZmLNGWTmovV8g9B3NqCZNif5bYMVng6rPXaxNGn8pBNfodGBVizL8WTAND93r5V8U",
  "key24": "4eLmQfUGG4euMJQ2VsAmx4CY6JfcBLrAhSiNc2ASVpLiE2aDGgSjCnLdCXTbADbrVa2RfPBQrfNV1dZw6tWPgSPt",
  "key25": "5wE2ifudcrfrtEmnPm7qhgGUCLefh7REmoqRERBffJafuGfrdUxRysKZJVCbrbvG4TiAadKy8s67X5qXiMA7Zsbi",
  "key26": "5d3SZUBvGKrWN5NvaUwxLu6UwRoB6hGTRSkHxi5yBfefHyf8KRw3scU6KZAfxHi8h1z6J9hv9vPfS1VEA4FAkrrF",
  "key27": "4sDvjkiRgKLVkcoCBEQ8jUs1mRVk6DCsh329e3AfCgGj96oP41xo9cWSq8hPHqd27dAL97iWZ2Qp5wPcppVAfYYA",
  "key28": "9j3twwD5hG148xtxMQsEAgJAK6xw597aob9GQhxADD44DVBJXmCmcaV36eVM6eDRsc6JNeQTYKLHYW2xTyQYTCS",
  "key29": "2seu8gJww6vY48UqRg1PFGMdxXvJZnWShx1ngYNk25ydc4G5ZRRnVjuSNbhiS6M7vovzGm96PcpKdWipbTo9QgYp",
  "key30": "idhYsWazeGWZcorSx7LrRFnqnNdVZyj7CLrEBaZrmWMmw8cgv2MFwj6iFGpnU2FsuPb74ew5dLMrXWBsrnJ3wi2",
  "key31": "3dydXGpaWMTf54jnJb3ysvnqVNbxks5yFYE7gkFm9HSvZKzuX4zHBioaj9NnE4KvscnEkbrtggBN2hd5uwLBNSHg",
  "key32": "2aCQQKFrtwjJMRCAfcFdXTGbewhMp9dbtbmEEpijP3YKkRKKV1LmJp83zUmCmKFYuAGbHxuCrRqiG4au2ZBJP7oS",
  "key33": "9GPBBHaXFNJ1rt7txnvo48ZAxd6s6bZHkNf3xyWTug8MN8JG1ikZ6qF8KVVB9XNESpd8JqXkmVXdi8HPJyJs7Mp",
  "key34": "4QDESwC8dZj9pQbkiqwdEV5h2yqVz6ZkPF49CydmXJzqL5yehjSh2htQZLdRG6VySsmwTqgJn8oSzWsSbrqYDPrt",
  "key35": "3dRoqCxx2zorMUS9M5NKFXrNQ3aAwftAKjsegSYaWZYqqitkkXvPsEvyRwf9mCsHMPczKDQ3h77gjF2xdtEDxNoT",
  "key36": "XZmUXwW9yKVAexbGxAYX6tVtJMFVFJLB6ZdpMtsmmGE4KwDn8pfybozGHo4up67cHkNNjHVw9w1XqtCSGxv55je",
  "key37": "5RNEguLLqngjEtriLT4cBJez2cW3gLvvRJCtP2m7jQRr81RcWV9LTDTxao82ANpcSdSvxUPKKv3kFsCUWeeHdDYi",
  "key38": "4zndVx8sm24242jrM9ReZ6UJVanrZz7NiE5XNkMjbJANk6QbNeKqkvjDZsG8fhnfQxAp3Csbyep9BugrcEAtWz4V",
  "key39": "5rN91gc4mg1o53BC7Rvw1XJPkV9dMaGh1fHgiWezrwj9EP4YMCzWoBB1pEFCDoNAnfnrsw5TFq7K7teerwC4QYBo",
  "key40": "5xivHvu2q5J97Xrj2nkF1r4xafoLkz15Wj2immZbMfdCZaudg7WufC4WrasPdKHMSahjTAtrhSwXxjuYPGqaN68X",
  "key41": "5dp2haiKEgwstrRGzwFmF6nqsVU95Y3KC3zE1FkR676EyzjiPg4m4jTknNvKxHxM2UoyA7jFwjgPXV85qq5Rh36v",
  "key42": "3Ai5qF9ThoGBX872uiTLjaqe77jcBwvAxC9PgCJWX6QTqehAUo1J81zfvUHCn6H7E3WUja4Td9rNUh6ySeTHHhqx",
  "key43": "WamGKpzd92pu1dinUVyJR3nk6mqwedzW2QEUn6MoJg9s7w9J83Focgb98jxHNrEMkGRvM7xzEhCSVvEfWwuedXv",
  "key44": "215EkMg3F1BDKgQSjjaYmr5TN4Accyvps7uqYn2M2NZ9c64RjkjPabBDu2zMo2YVZJhCtGhuYtuXRvQRrvCq5kJR",
  "key45": "3j83Xgq1U9GjmDwyj71LGrLyKgJ5bPA6XhP5kZDvSvTuVBrgqx6YDudDxM9ouqSVnTJ7jt9X8mQEVnPq8wSLknkr"
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
