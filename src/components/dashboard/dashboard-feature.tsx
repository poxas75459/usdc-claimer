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
    "Lj5xbAissJ4e9CWWjqaE1e1Rh32orvANdMiJqW9PDk87TQkhMvW6LXDb5j1c8M98i56uEBWBJRRVWZYozMd56tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZ7KGPtMy1CWLcCS1RS19uWmdGn77JZYREQE4ZZAKAnwXdf6Y1goe1MtysanYW6jPnJxGBn5ymQkeM5twFnGafw",
  "key1": "3axbmh4VFfrmxkocME2ZDnQMCRGcGvKYVsUpY59xVdgY8Kyzh5TJwKXeRQa81THxTJwZztTHY3rHPxVcowF7R34K",
  "key2": "mFmcR9kYbnKhonZjq3q5yyvVyYXBmTjkNnFToQdbEm8Pd7nkMWGnEFahGsTba2w4wyj7kUwBptGiJahFGwKfBUX",
  "key3": "24E6C6qw9T99HtSUodZPwUUXryMYKCzAvvbGTGhFcmSgd4t4Eg1oUvhc8FcP9dSsZfPG27XwHHihS11vh815QD18",
  "key4": "3it1bkk4W3Jpr2t1C7SP5VV4mzSXZ7aqTuyT5RmkGC6oL5A1s8rXkKxDiyxBGHmUJWUbYdwCFyUALN5ocBJnfCsR",
  "key5": "5FoCktNcMagXeq4rnTztXMGabauBj1reRAnFcoWjix6RmYoQF3Gv9k65XUyPLEKpfjB4bo4JiCrAumKVe1RDaZGt",
  "key6": "wtJQxngwPfQAyeD2Ga7f4Bm2Wm4qzcUhTcmLV7Uc4zkcQp7xB354ETpYxxc1XC9Ttz5q11XPdNNDY2gpDcbQ9yZ",
  "key7": "128NpDStJPoWqjLzfjkFcitp81qkjkVGwx9V4JTFJL3XXfFccyPDZM7xiJrTVUsEpvBbhmPne9iyfyHBHBuBh1Uu",
  "key8": "yx4yLHKQurbRPfS8qQSjkT91poLaEijhgPA9kJSmnvWrwGjuXkb8h4fVXQoLHW3CgzM6m8u2uNwW2C2zjgMGhan",
  "key9": "4BthbKXEzzCTLXrFTsw5UkWybJqFRXWbkU1PxypAnX1r4xU3myAD2ssfPWWdHpi8ysmimn4BwPUEmiKHahJxdodw",
  "key10": "3iW4uDWT7KqwUqx5sm5pTE2cQnjLi9QgcFvBq6ooRL58UwUttbokoZdNoJ72DeXn7VtFR3i9Cqz5j7JzJMtW3a2o",
  "key11": "3MNCrtC6janfE7YkffsX67acZdCH7vphx7UkL51muURreontSQwH66yhSXK6qBSCabPYme1DUt5cBHSfJn3wjRQx",
  "key12": "3diZMoH4zSEPDHDr3ErqBzGeeTCkCwYS3qicTjh4qheSXQGcko6z4hRZ88ccD54hT4uUSpoDtbvLto1mcDs3NVyD",
  "key13": "5iw1oxYPomk9UruatyJJnTxvL59mMUHXk99vMwS49s7SAngn16Wxm1uVUuLR74z73hi7TnGwY5usp2E7nfKLRw3Y",
  "key14": "yTkGQywMJcCWsLcM4e85KbiaKcCX9mxMjYuDdT9FX52YWV5GHALqyAsAJLuYt4iFTXn2ifejuHTTZuGFyEEzQwf",
  "key15": "EpDeKsgAi3ymsT43LoR6AhDzaXtiWUbToPSqywX9prDQ9pRZuiVEsN3AQPFyFruZXgXEh4pYrEJ6SgEiCvunDqz",
  "key16": "4VgA11qLD9ncUyLYjsW82KZqreUrJU3VKhy6WeLm6scCE8RuCcGk8uXBKJk8SBGJ55CytrGC1eorP7TPpAk34gZd",
  "key17": "2NqTgAzhk4KPmC9KgWEJUYrgGpTgQLGUWMD3qP1LLag5j7jkvResiXkvcrAXPdFUKfDvmK8YpprfvFyn7vCwU347",
  "key18": "4RbopDzEqYKyB2LRm2cFofHfzpJF6jqLHPwTTNHvpvXTLq143dYGaxsWdWRB3b6BjgAPnJG3HPkw2XFmpaJARMLm",
  "key19": "4B9Amr8fJo8TeBp6648e37ke9Uuf9gLQjUgJnLFNJGhKDDtq8nEAV4upzQFBicVwqzzifXgBQodLpP3Ek1jRCaBA",
  "key20": "3bhaBGoYkoa1wDGng6GJo3ZJaMXJUWnHbWNJC98sEPPo4jWXNWxPnLmEEexywVjbH2dwtWRmYfSohwoa2rNjJee3",
  "key21": "3hNyRm3e9G9mC2Tfoournpxrfs4UCLpWFmRjtD3hKBsqn3hn8BZftXFNHuMmh3Z3r2cnXJ1DJ2XJGDA5KRXC3uAo",
  "key22": "2dycnUrbojBwopJAe5LNxhKjX1gYJsiR1pKnn25mbz6N9zLmuciHnMQ4C63DHg1LwK9a9rN4jZFnw5KLcREws9n8",
  "key23": "32CMjZjmrp21qp5S65qD6aLSAXqXQCARzAyAXUc7kbgiEc9oZpVcCbYbbmGtZPGUMUScWNFeZcjSYLj8qCCoy7Cr",
  "key24": "2ZLpQzUq4nxCSJHYMmt7VWLMAeBQXqnCLa3FPidoyFXNMHkymzXwevmaDr6gsSqjajjkxKH2cgdqcFwZHLVT98d5",
  "key25": "3pbKMZtY9p2BwZbuk9BJvNAitdUYnxH2Yxevy6yrLDb6mH8A9R9Wxfqqwc4H4E2Frshq28NcUVEVAHa6X92XBoYs",
  "key26": "G6XAthnHiJQNmNdw8HpFo1RMyBD7VknBpvdZMWNvyDZY5WWH9VhqsB2E6UFTu7GFwp9HAm2J7jJt5ok9ZyCS4xn",
  "key27": "3C9Bxu9QN12PT76CZWXT8VfFo92YnHAqdQjikPKQqmJRSZHQCxEeuHjj5aJLBWKv8o18pxLjdfVsFC93xkzN87vn",
  "key28": "4JUMjktt1WJ868eN9wwD8xVmZmNgTvrgnYbdastMPp6Z8HSMDTBeqQqbYjXpid16EbNZFvRjouL4P7F1b75W9LdX",
  "key29": "3UMQF7VEcc1X9tjMavDsdmL3EUCEY5wkDx1NEmeXDSqXcAStmofXMJzs9yvDg4d7d8ifzWH9F76g1cc1vPZKx61W",
  "key30": "3hT54czJTexF8Y9XeDe45cQZFqJ2zb1yJX5x34SQNLmm86pSfLvSvKGNGAJv3j1x7iinThDuRwmmB6HtMF5j19A8",
  "key31": "57n6iEhhJzuWXurmk6VdoigsBUjMW46tJ2u1HmmYkhB1X7X65qykvbZZ5yPbphSPFV7SvvE658gQB2JdgonoaS2F",
  "key32": "5mkiefRVbE1gD8BP1TZ6MzicMxMxwTeUyw7QRRdNxfRR9zuLGmUE5QKUKZqTSsNTXMc8q5gg7XG9nrZGXAJL659Z",
  "key33": "5hoo7wevqypQFsoVFLKPPsCWZZcJvaGgArri6yQbTxvZ7hrncY2qxp3ieHzzTCQE2PR2LoWprg1vwxQVYvMV2tji",
  "key34": "28jwAbku37iNEuR4j1wUg92MS9ea9MDvmhTc8wQ8T8hDpNcGTeW1B69Qnp7Jfo8YY4GSkpimdQggum9EhuxGnQY2",
  "key35": "dveWRan3fatgrWe4wdNQeSh4oLGBqcc63xc9Hz1WRNtzJugJN7GjZpWEYoyTfe1mBkKj2g1eA27ymVuhCjpV7fx",
  "key36": "2k4UTo6WP6DVEX8t4JQUC3zzbQkEdedUjRUyfeSz9F6nzcrcMoMvjx5ipU1hzTYxm3Sycb8soxnb5KwCK5PS6qRi",
  "key37": "63rrTpN6xKfPX3zuKxcC5fKioSRcATqd2p6P3Wp5xLNsAQep95C46Xfjw4b7K4qAzXaahBskfxsb6QhyKiHr6k7o",
  "key38": "5E9RMg9tiZ8z3Jx3xPp2ae1DsH3pBzSWbQnvFKkqSdKQbcB7H58sCGnEW6GqbuyGvtYLMoGwc19Cp6z8D1sW6FZM",
  "key39": "jvFWNchQro37dzprEF3SA8N4MP4ZghAFzdB426W3TeFaseQJB8agPMYQVjHYow8jAHWmbE8d7GHt5QAcq3au1kR",
  "key40": "5CLSuiAbzSQZ39uUyzVKfXzQz6Lh26NnomCsGvFsU9e3KvUJTcncGD4ZA9WvQYJ8CiHSKXxk7B9SMpvuwyf2rS5L",
  "key41": "5EfwmszbR3E1jwXRX2cRdsEaTC3tsKTQqBYUEccMHwyLhV4hDUTKEsqnNuXd31YdE9aebRsR3G2bB8uVpYzqwffc",
  "key42": "5wFGXyJ8irFtSQ5RAQCcEessEZXNzfPkKjxpHaQjZc9vd3AeFaLjUDPfPbB49QZZz9gLM2GQUGKpTiY863FNpate",
  "key43": "4CDDeu3MTXM9EJ1LzJSrzZB72SvG77uP7BFrtSKZ3EBJuzUAmUP4KZuuMHBhkomCcynxyxtGUqqtPPaLf13zy6ne",
  "key44": "53fa1hit9cx6UuzY1xVvJK86P48uQ9RW4bku2XiLSNdiiXFVP23hjxwobZZ2bYEtEwgEsHn21DDAsAU5aRmzVaAV",
  "key45": "4EnLobRAtsEerU8z6E5FSwTHupjBDJ75hLLyQkwBH9vCFBoMeCg93nq8cfFDa8dKPQG8bm28vZ1jhM4U7vnNEiP9"
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
