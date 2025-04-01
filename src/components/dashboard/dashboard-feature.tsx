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
    "5Y9rUnTyS1FBqo4qf1mGzDM2jb1sD2L9BJKz3jsu7mbt9FbvNFRiKRWWrjDEX6H8KAPuhMRTd3BP2nujQ6UV1VUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RhVX5Xsmn68you7VcVy1RGmB2hYAWoZY92jGDbtH5EYcyqsKQAAAQMhLQLFDXiQmdi7pnP5JmeTA1MrrSRcVmR",
  "key1": "5HtspKyqhCvAqDHjY8j85eJP8TgFt9wAJiqJURSq8MCDvYu5AtNENK59ZitFUfrKrCRwp9dA9bJ1fg9QZk3caFy8",
  "key2": "3FeSVrFNoBfMYzVKVJ9MK2foa2uLw7EQrxdYLNs77tF8TdscTcHi6CVcnq52gzjqm5KULCqmk6ocSXFNpDLMheTy",
  "key3": "2D2swUea9ToeB3Ei7BehqTEQMDqFAaWvTBRGPTLt211AaYX8X2JBnowTyNRtnLMDnpsWoQzoCAXVWoNk6FHW8JvS",
  "key4": "tYFrUmaAF892cD9y1tkrQYSHsZDK3hGrdysuJygDk99EifCBcZDy75tgXUNhmnmp66f7spSfcSmtyMDBHKM8xEm",
  "key5": "2qZ8qUB6ggffuEbQPKKae8oWJMGQRBCKTuArNry917ZdEgURBy4iDti7mGbvWMWoDSPGBEBdXbXCoqiNFDGGHxNW",
  "key6": "3gXgLRpE35HBqeTLWr3WtYVJ4geTBxMgSyugg7iQebuBGpZgC6eKDZBACdJQpXZ1hCvKG8WQ5QqU4NLmw12bnWbU",
  "key7": "V8LLMd4tkpnD8Dy4GuaCmsJUcYWGdGkkU6LBxk3KghAu9dxu6iaKzzgMrWjV7vVZx3ivsXGn6HbgnrDzqupVgPM",
  "key8": "4jo3y4Zvga3wjaCDLSBzgek5kuaPcJ34pKUg4BAFe7ySq5WuCUsDnPNtKeg5i6kttT3R8EA1rhqSpN7J3zz2F3k5",
  "key9": "2zcUTjcPn6KRK3VuYRJexTb2dJgK5Q21PFGeRUQzDLPxfz1gi1e5XXPJ2i2QGrtqUYCNrV3kSSbFSEqb77LJTGST",
  "key10": "attaJ3XVWWKUaj2M69CDxy8ZZVeG4GogJZf1q8BLxAaKjinYnrUANrfGbp4yj3JT6fegBnchn1ixGhLV2QXq4pY",
  "key11": "3JLAYUENteE3g1zdppSGjeHSrSSTUdVj4S5u6MdpGu6CfsMDbajHTe14GyzFvRvXWVyqEd6dyYwCWEUerBpqzyHJ",
  "key12": "5HPrLFYgm8NMv2Jt4yuSSCSvnNRJ2qT5T6mEN3hbZn8L5JC4A7ugjCjuTqe5U7gDgu95mtbjQM113orphnoZDsJS",
  "key13": "23Dahmeioq6VMgxgEiU1g99ws2tPoVhCTr6qrgKhhdgxsWmBjEctUiygXn69D8huXavy8Xr5TdAQaEr9sPeiAFy2",
  "key14": "5BacLWWhSyePQi5amPGfmZUB1w33kesjg9dLMjLQ13LkxfuMgDvDvozvS2QgVp5eyQssdAwcRy6jr5cpgCAFuLow",
  "key15": "59ircVVekgW9eZjyVUqhovfQjkkdzuXRiDZwhWYR6D8Wiu4Aufn5nhw6wqGvJnBUiSY2y6YWv6EQScYevEr5qRck",
  "key16": "5qFbUbUsNwdnKpgnXnnMpw7tLkUDB1Be6VqRk5iJFfvXKZD18r43NtDe9HhPnvynDgjaQq5hh7bsuoydXheDBZ3G",
  "key17": "3Xd9UcU26ead6GhumnD2rn4D4FK7zPbuc2tyJHFadQvMFFeUXBjTxZsnGp9X7yE2DWE176ANHarTMKqrYg8uGcto",
  "key18": "4MSKmt8pMrr5uFEQXu3NpXU9nLMrLY3SqoEji96R3p5cUGvk4AsfNYNNhYcPgBTwRRmVYVENoUTndhyJ1sCCVYpD",
  "key19": "5aXdpnGAVFytbfypajV1ZANXaTXRYbCnV75W9WBtdjLjjZLrmSNRb9trQpqnuQF36QkQw7r3WrTKuTgT3LHUkQ1c",
  "key20": "2J7Q4SttrFTERiGLCi6BKkSxRS6Deet9uzmnuHF5xquvfNkdrjM9ywPumaSb6q7P9LTtZFAg8NqPAYsYP9idVHrT",
  "key21": "G38LHcK4dac5Brhh8cLbbHRmfaQ7m13byC9Xap3vemKS9PGgckyyAX6yLGFuEtuy7xpaGUYQ67bHNdLi5vv1tkk",
  "key22": "5AFxQp5yyJAgLeJ5FvzpRJEN6iPWxfnfiAuuNUJs4HhQivKYQKVC9TAHo3F6X9cpy4GSJpKPKWVEJ53VudzpjmBp",
  "key23": "43R5JUB2Krp9e63xpkV7EcTEZfwH7FFyyzx1UUdUQEe9jAopK6E6ErsZmkfdvQjFDMkcnxFWnAGYZieb9T5yLPVr",
  "key24": "2VbC5Sjg8SkY36o57kwYLa5McARD87Ek4K8ewhzAVQaXvcBkexopYhTrShfrMg5ydm6nW2k47Fa6nFvcgCs3J4YD",
  "key25": "2EoaskdsR73ayjXn66Raqp84ZC2GMigP8nJGBsHP7df28xjLAw8cajhAxKG1t1geiXTBfqNE8GDkqFEUnkyLES4S",
  "key26": "1U9zaxk6k44JJRTvrZ5aWPrhd6cQ31d1nJKXvEvKgpfhVCVRMMH4P9Kmebn2ZercUY7mNBv2fXfZXt9Gv2LuY5V",
  "key27": "9LhFvFiTHnYVrnJq4xP8BYMkvgCmZEjFiDTVKfDKXzueMAEGm1pRx5RcKkZytRier7JBnCan9mkxsuWBzS8YDx7",
  "key28": "aUf4pTfWw5c3Hk4dhFyecp8vvsMC2KoNJ67oVqbtGy7eMXajLvBzx7UUkFHfYiMeQnet38K1TRz5SG6HKRp4Mbm",
  "key29": "2iR3k6GQALefh1m27Aun64NyG4h8A6ShdTGxpEBS5xJAt9KjAGHcut2FfuPTQaRw9GApPGcy1k4wzajYxDJBH89n",
  "key30": "3ZofFsobxJYM9dg3c1L3itVduLkoaKArb78fb2SMD6ezrUHmzQi6h3tiBsihfqvhu6TG24tTf3QDiMsztD8xB3Yt",
  "key31": "Evp8akkkK3zLKFg83mBKDA7T5qjWL866Seyb3Q4sLGGpWoK7pmwVRjJuUyuaS55gyzvvz64oHLTbKon14MuRi4a",
  "key32": "2q4jNz7TEkTizStWrvgQCnimhSuYwznQqYVBZbpJzWmt5c8hyJGCczChdsCB8wUBmuCVhBuvRiLoCLV4eMQqiBYi",
  "key33": "4rrbCZGDypvL3y1VwPPRtkkDMWSgaWuWSZgJNbBEn4FVimj4daeTgxTtgU5RsgHy7nfmyNwk5xBhqGKjy9GGkK3Q",
  "key34": "4t4y5tpD2xZMDjwJxFgFHU19RYqPtpemR8mgysWom4pPCSRzEEmjLbmyaePo171VEgySozBSNB1LZgTQmo7pcr7g",
  "key35": "58NX7c4vzAZSVRmSHWgtgX5pZ1UYGH95aR74nYQaZ2vV3BJ92C5cwcbGQCC7aBSgT5MqY78tXJssDCKSC3SkvkeW",
  "key36": "Sa45pDoSp2tH4ANmrrLxdX9xb4aC1RrAoEDJNPPBKVKj7R28tydtHVP14krBnj73tm7xV7sGKLGvwHmDG8dFMHi",
  "key37": "54TLEyUSTby9rWqqGeL8MUwJVVofcqYHunPxboBLb3XFZNC2kYUz6iXkXowBV9CdFnQHFQ8UgVnR1cHhr3AUKzSe",
  "key38": "5MqHJveEwt67K76XuYjUyMSVDRYaXgsfR3o2EJYqewVSf6CvEHrdhexkfEmsJxwHApVz2EALQaaAe6MhZubVXLWr",
  "key39": "3RfGKa3AUAc2gXY3YWx4FQGe7ZrNdaSdHRv44FdWN7GU17Q8Kt7RUe5264uRQ6N9B8p52GMwFynWwAYSzpzhWtf9",
  "key40": "2hUwEJRdyHG4qhtneXd1kGCc5NAeMbqwY3tqpwxABzQbTHz1AfUTTCg8ZxupAA8upW24sEcNAZMaFKJ3ZYgpx54s",
  "key41": "5zJKnqGXom2pHgXNBykakPpmHegWaQ857quyQ5ktV3bMqjJPT5VyGcYSZZVj46VQ37vWcGAZeDe5aLrxeqmaiuPy"
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
