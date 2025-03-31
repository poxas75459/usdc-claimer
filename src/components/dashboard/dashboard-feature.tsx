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
    "3zVPk4FUF4F8Q5mhTDRrtzsjoCiY4r5YTD7w9kZtjAs9BizNX97gFsimJsHTEXC7HqfLEZZSPNkRaToi8FZpZUyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qa52k178BczirpMR1DwXKxKo5Si4Sxoo5WqXpoM5qciVHRwzK4cy4ehKYkHD6ZDcSk4Nhvy4tXiVUUAgzVcQpJL",
  "key1": "5CB97LuKm9eG7yFopPUpyqVz5TvV4Qj6A8WbFDDyFPsYECK1W8yKS1PFYDfXN5iqFdWDRsxPu1sJdP5fcnmQBd4a",
  "key2": "3fc4RWMiGxdCGhQs2QYebJmgeevjoVZsocHSTg5JkauAW7q48pwBKagGk8MPAJUbZ2uCsFCgNZWU5hqUKvZ6sdGc",
  "key3": "3QmXwsdniXpqEnkoaPBugKaJAREm9PW85MJ1NDX5ZkVtGN8MwBDwGkBqeR18PLyyrARLfrEAMKuaU4i5MyqKmFUC",
  "key4": "4qw55zpJZiGBAjpaAhsn6TUryunR6tqxF34Fi8QMGTK1xvDWok4t17hKmBZegMWQWAQXqhysRvCE6g5x9U8W28Xp",
  "key5": "3GjATHcnsqt38K4zp2H3hAY1PHERJy3TXo8JEpRZkxQ7KQwvaeuXojfXk2RykYtfAKA5LrmkXegibaTTXZ5BX6sW",
  "key6": "3Sie3Qe4134qDe4P62PjuhtzhDfqAUsNTwhZdxYNcwu287JnQ1jBrF7X8ABd2msq1PqbGnLo2RGd5jqJAbNXguCD",
  "key7": "3hNwKPHZoCKaBB1mRa5eJpmZzeH2Q5F3CXevqYfYTGgX9EFSN3rnz2M5SnJVeSQ91Q7UzaLS5ZXSAWKnufxSgm1B",
  "key8": "61fTSHhyz84XL5tLCU4ULfhNmhVBSJoTqwTjnZYKE7iX9KYzGyPaDpGYEWUcW5X2y2Juya3Bv34QVwqgKCBConqZ",
  "key9": "uq4TBXGPKjgzSARKa5ZfRWmKCwwnZdmueynZVk9MJGVCxwV8LNJVyxSWiEWDj6XbgWLWSp9jjaeDm5m7HN984U7",
  "key10": "2gWjD2P3Egw9fEfLsec25Z5aXoJu9d9CaMR1YQFaKY32SSD5MjgKBo8ZXhFgaVbCAqAENvaKUCoTS9odrkCkHqKy",
  "key11": "BR3vDXedJXtXJMX1BRRvRnm1MaCAEsUkkKetkz6Cd8dqdXmuL232KCcd9UcWycSoksXnzhb5daPiy31N8HmMaBp",
  "key12": "4YPnjwed1xByfmLZ71hxaZh961asQBaECdVKeUU2p2ZYD4cSDuC3pMygKjywTKKZdBeKLhnca915AHMtucw41gR9",
  "key13": "4fAUWUCeVxWQdcvRDk4QmvyeDTu3R7yedTvnrgbsd34bN3HN1FcG2X9oyRMtTyfVMMfheSjE6X74tpDid3VvFe2o",
  "key14": "4aReoNf6wynjL4KXMpMcTXLHYTLBfGs8GCZ96rB5nw2omXwvSSFiTjq6bLCYF8CndG7uezb8Ms8syfiduzeLXNEw",
  "key15": "4UhZiaL6KfNFJF7nPe5pF2FrPAosvfsjnF6XmpvdWmTniDijZqCP3qByvuWwTfKHEa4bv8h3dM7epwbWhmqiAK7y",
  "key16": "35cUSEKaytxPGnkpzUvJ3RzwbQetqHKsypumnvYcoumHuC16BntkB3DrSBp5HZ1ErTeckFKUo2nDKKFqYQkLbvKQ",
  "key17": "44SpK8PMkJKnAimRVx1ifQ9jMqA8F7cJYochpUyo2m9qx4dyjYb29XPVEN7U5V3s5t7MyxPy77VUpj4xhCHdTxNQ",
  "key18": "4CbcggYDx6Y7xxdy4yiVYjj4gqaHfFvmpzuE7gEbxvVyyET7Zhv2LD38iMoX8RTegFAyUPb2486foXP1XZDmmjp4",
  "key19": "37z2DYx9wiyKmhEJGbR6UZ8Me36N5dPdSxTsTac1dWBSc17nsxo7CaoSHopZCeYz4tkPZAMhBGZJNbjLi1xHtJ7D",
  "key20": "3N1hpSGbrSkY8m3Rey4gbQYrCiH6oz8SsXXXxFQSf3gXRNi66viKbZNoJzwjeehCNUcLeqVrazsDdBJDhwbb4m9v",
  "key21": "75hSQEFyc4JoA4kX7pXWXovQWTaUkfu3guzWm5whwcAHQGW3srmfLYtxXYm6LNxQvUAGnrviRQKuA4Q3iredENH",
  "key22": "3W37zffJdjqYWwbQAxrFdTCkP5LjyePkoZKat2BdkvfnpRi9zmjV3VewnvbkEX74o1PJDRuroYXApei9UWNmBNcU",
  "key23": "YJCj8cV5Xwq5Z6ebPGtqS4TjEqzDE2xohGLm7MsvqauuLqYfyMTo7SneGLhbhy17y8iEF3WmZdNpwQHRSV7w7WJ",
  "key24": "vtsxxYoNSVejSaRUHjboUE55NJvxmeU7Vy5y591T4QEAXHyn2C8p2NBVEr4fCtw2YhXMWdK9WemGoSf6ZqZvQKF",
  "key25": "3fMburCrFC96BQfTcz6aixNkiU4D7hyy1sTjGrvDddX7FgtdxC99Zr5XcPuNaF3K66iaQUdiA2D7ytYRATRkXMJH",
  "key26": "5x1f5JFLdwKRprAxQrw6b8bHha4XmjxfgNuqhkjhtJZf8XMoBFLJotmZkawqaGYw35uNKE61rh8tbubSCJuajqyu",
  "key27": "4cQvquJUW3a9sVuHuXmBzEzpL1p3764S5a3M9B4u6TxKDwE16R8oTK5eicRszNcTfDTybJbQowxn7K3X3bjg4t5d",
  "key28": "2DE3Cb78mAoGcHYMdwT19qRTaSzPGofumwjcfQuaC8r2HKaaVk4af5zLch5RzVfmFajri5JYKD23YDduTpufdcYg",
  "key29": "4kAgrhA5DB9GaYyoqLHNb7TcZcamVbkeUoVM6s4sEPE7c6C57A7UDrq8yQQLcAzA7jb1ycpxHw94BxY7iJaHET5i",
  "key30": "31WVMeSpsf4XMVUZKtSiAGyZJBYoG7RrMwyP1VoS76avBK16NgdchiQGVA5mBnAsaihfNXf5SP3VHsVY4tydvvS2",
  "key31": "56TH7wPeyvSabSYQiM1aVVJpRScXY8VfCTJE5o1dV278Mztgx9cq2VpZCyryaBF13zqEXzSWfTn35iPkU3BxAyMZ",
  "key32": "47Tadv9h5U2t2Rhc22yf3wW1uaGKi4RGCao3XFyMKwjqExJUEmMCuCzUnp8zbrYmgLKMnzfAhLmTTMhsbHuuxwYj",
  "key33": "5qkVgf8dRe3SXQQcLP4ekZMikPEnbdLgrqX8CF5db7JscKWmiFBZJXUny47VhKYpKDs1WafL5426KwK6rXs81X3H",
  "key34": "yuBiwkyF562nJzVF8p5u6eKHXzdC31P7Fjtsx4mGjLyLGarNbvXgKp1HBV7qUqgZvL6HdxvSQupNK5LJsEMMNwE",
  "key35": "5zvsW3cv91XeoEx4J5eAMGNQVPHeUu6UxjLE9UxZzMk34KYU5RJ1uXmBHoFNXocqyNhxJ4CeehS21WjWgi4Z2uS7",
  "key36": "4cAH2QMo6KwkVegPkECaA7bsGUtCWytFyYTF2sbnkfgcREnrYk7wUrr62A9wkacrb4667J83sjB8AKZhxEVQTyJm",
  "key37": "5wJ2oZGe4ezV5cYi6ERyHy47ZxLRVQvqzV5WjRaF2udzhYEBSq5JZeqzHyLaYhMMwLV2cdUbGds8Z4uCFQCtdPeH",
  "key38": "6399dW6ZZozGCg9h9hNZtnR6v2kUP6CfEao1oxok6krfEqdJ5kNZKdXfpdeqGQ9FkByUzoENTjvFZiaxWKuB4swQ",
  "key39": "3vKeKeCDwzkWfqAniJYZRbh3oiTaVxxE9D8TzbGSCiS2WqLfyTruQjCq9qwKkUf7TtxWV7oMEqTdX8PsBkLX8r9K",
  "key40": "42gyGPQzmXwizLo9uphbgBhAoC5SqAh2fFtNMPwBxYa1kf1X8npJVvU4m4bU71FakPWF67NxRipuvGqFtAiUEvZB",
  "key41": "JAA6CzV2Jtox2c4xKbjS6NhTfBgTXnRQLe7NgaP7Mp7iZQnHPH8uDFcNF9V2haT6zjTS6gn4YR15WvKf4hPvuxA"
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
