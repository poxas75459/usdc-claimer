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
    "4PRTGehMBux6vuQeDCszHEjaEvoqfLwbzTxho8n9Hp6DpRsu9uPvcXMqrs1wEjababtw8mwsdjzbSgr3apBczq68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDYchY5JA8BDSupDfYEA9resH1RYDe5eyV1GvHqsidNQDEgpNM4q5x42FzxF5g9ojUTPe4VZCHKezpCogmEByJJ",
  "key1": "4SLSnu6wWoEx4iukTEfSBkXxhCm6D51ve5cVNKezrm89hKUem5P6TzA6Z2oVG8mwkBy5djTSC5c6T5TSYPhqfTqZ",
  "key2": "3XfDM2c8i71Ai9AGYC2SV854jECHfT5h8adxNXyUU4Eex4LLiutW7V8KToRF4gx5cW8g5da8i5ex26QmskqetXUV",
  "key3": "wwUvTtQhEeQHGmvrRWdxQxfvQD3zc87HaXf6gwuDtS3HeZaFnimGsmHYkuHQf78uvKn6gx8dmHq93L7JmyvpWF4",
  "key4": "4w6Q6LMeDby826jnB8wcaex9kv4bVvnYTSNg9CpgSnDtSrNGLgQju8NLRatdzmCnryWrcXxPAf5xk7TMtyCKBnb5",
  "key5": "4az4yU39DchaRRzHjfRKVUxvTVJMoS6WGcdEskDwp79TsKRTNFuRDkLc3rq21Uan59hE5gR95T763t8vXFu34FBA",
  "key6": "djbfVMCkZ4keRP6t9LjCyjAwytSvj7j26o1k3yqFy5hr8iVaY6CRNkVRRGoTdvgCtZyYWCxiNFtBfUnKd1NBMAz",
  "key7": "S37eu8mZVoE4wSndpXodJhuPu2rqbTGaBFHGDiBpw6kVV6F27WouEGa3YPvhZu7Ueb51ZPR3D9XuvycrPocvbqd",
  "key8": "4oTSNY6XqJwVgVwQxwxmjA6xYjEWDdYGi17vN9rLjmg2nwVh5BhKuwqubQz4VvtakgqSfipAQYQysXsKqrncNyfi",
  "key9": "3XaiDxWfVAo1RdNTVVNzX6PHsLSaXxGUumhQ857ebBzXikLSvZBmEMdsaqj9mshBvn7WtTLMpz2oE8ry1C8dk63V",
  "key10": "5nSvV2FYT3hCeABWj1NuZCaVDRG7gikaFEzBLhFmewJoeAtiNZcR3vyotHZ1T96D5TGE341gjR44M5sPii7nYFVg",
  "key11": "3noPDC3wRQuwHMbneV5f1ZaYJhoWGocTyHbYx59BLpYqixt3Wio2Tn5yyPdk4VahEoygAnBMYmdjuuVcdtruJ9Z1",
  "key12": "3PYXJGPJpWw57LFXNSYSiZJCvLydrhnq5v56qAvXMikDfC81aBXT4SFHSHuB8KGeYLJSwFXczTeKSY7Uot9xqky7",
  "key13": "3u4Ms8DrMgyzPjtAmrHaHda5fRyEmszbdi4vJVHJr8fe2Ne9ot5JFMdKybfDriTHtxmR9Fwn8nUyDgVDmuqzq9DJ",
  "key14": "3w44SofQXXmEoQPgRLksTck45NXqU8GfqrA1DiYwg1pwde5Nr8JJPRQceJGsNnRoTTVwgQEbYF4Kr1jug25823j",
  "key15": "44qmPyZX1JhwTQsJm2Zbn15NMt6db3Kknc3vLgVV9SQa9CuY91apPUSiCPAjZhJJfsx7CSJ6aQYFWdGyvrHho24H",
  "key16": "5CVc5jLMpK2a4YaNLXJq9avjrwXqeRnkWE6Wz9Sfzn5d5NGEEdTDnk7mnSjwtYS3wpXhsECovnfL5x5RX5n9Nwtt",
  "key17": "4xWWeWimAdnXukbvgxbpcZ9JWP28cyBBTBtPzAgRHCYUkY4VRiQ6UchwUMZyE8rDNcVByJSwuq9jd6H3tM92Ts6m",
  "key18": "4BY1W22rTTJVc3L2c5xA9hzG9vVfZtu6z2mqRvkWAV9uCkxrXxCz5PWi26zhArqBnvi7Vi9Rc8C3K2vLs5WG3N7w",
  "key19": "51uZUsZMVeKK5RUYkHbUWmW2q1ZN881tAioezBhjnwVCeWj3hrro5whdbNtH2NXAuyYp5rjQnYQ2NVsLjGc7kbiY",
  "key20": "55v3GXMvJp243AzvCDFRSXbexZkiWKn44zsfwJLeregykvQkz7LcqGU8fDuMNTJtfZAc9RHTVrZKLaxALdEyHJvR",
  "key21": "4Fejw5sxpedjQRyEcLQGaBwYSSH5Mm4K9CTecxmcqu3LQzkCCNMktDbWGPSbSVgJi56aHimA6AHYkXxr7ku9x74J",
  "key22": "5zSBuTr8wWgF89j9JvuCcKHDtgB8tZFnuk72X5XCv28ocm1Bm3vYPzgXcfFp8ynLXXh55QktDavZaDAxEvrQocNW",
  "key23": "2YRBLcdFnKDSUFGUHzpJP2BdDZxWrcnxymZVdKpuUTLgg5t6j3fuaKUaZR7115KnKDx3YWwyDFAo9BMvkJqh78U7",
  "key24": "38zCYisG38FNcx8p3Szcan81PJjwjWtWY3LwHKN9SdHWMrTSaYXJj2xDnurt39YTtZxvsNqAPw6oyKTAKob7BCJd",
  "key25": "3pntSEWUPa6T2cs1Pn7yiYBrMLRqMsEeLSecw8UKnrUMYhrS7TW2H3XiMXB1U955xBrmrkumQDdSfR6X8ShhCwo2",
  "key26": "3gES3wPnXdv9nutVWauoJehM9YyKKRDXQeZAuVHWdmDZV52WiJdskiaW71hgbYo9Nj9mozacn662svifB9Upp9j4",
  "key27": "2c6wi2C6zuiDYyNKDmQEiDXHDqYQXyywg82n7JGsHFu3MVUhqYrdXheqwz6WyRTtS1SHGaY4bq7v2f6eFHDkpKsV",
  "key28": "5FJ4ovqXvymGZk6GV77uwzjs15xvymoYkN3eeK7aYY3PpExd8tWgAFZZNtM3cXwtprkuzffwik5ZWiQ6vg8sdFMq",
  "key29": "3pbg3PMcjz3j5z8KpyMcyEygnyRsjrJ12Cc24WFUDTb5SU66Da8vsBYmsejarJP621bNRAjWRJgUUq5fs4LMemBC",
  "key30": "2P2eajoBtGnQq14kdg3j3jU8kTD8kqsWspVjgkoMAm6pW8NMvKdZMdAf2BJPaWVPTsF9jhGZ7DskcDcZZvmNyjDU",
  "key31": "m722AWr5rmWTGchsJ5aTV2bDUSK6hj5j7P81EvmeNDSswXsdgvMxKLFg76zefHFbuRsPQAH2ExyBN5vZYDqD6nT",
  "key32": "3JXzyK5qUXZ7jTdpGUU6HpeH4mAcL7GJgVwpMBnSRNiQnvcJb2XPoqLLFRZjcXjg1xB4Lebsrg3WLqGb9LpP3rAU",
  "key33": "RPgZU9j5dHLjpudJNE4AVREQGGgdvT8bVFcGHmiAajiiZVBVk89736wzaiQQNjRVxbtgpV3oQKn1w2Didro2hLw",
  "key34": "4yC5ZfYUbMqpbo6m4BzbMAjbyP8HWqMBwTegyVXKJKZYkUCGgs8zntiBWn1qdGoEd2vSzYVZqabVDhVpvDJAiZcp",
  "key35": "4ZZLuKhmfoeU9LtaUHw83BnwJLx796HbwEQZqV8VjcdLTkRjuCE8i6QcV3DSeE7VgywaDVkhQwsYros6skhodLjK",
  "key36": "5z7cJFRD9a7UdPn1ksg9gtwpDQ2UmG5xtqBvMJK19NsDbUgvAEfLEJ8nz1t3KTvZaZPJ2J2NdpQvj4frM7pqycWq",
  "key37": "jXDfYWrQU9tmrJaTisYvRjoCfjbLbwLm7kcAGKypLq7u7Wfm3tRWd55HZ1XUGT3LsrxnLTJyPZpiSaWFg391Wdc",
  "key38": "4R6NmYXkXQEEVbD64s3VmLQkTRZkPheNKdeghzbRtkPRFqgNpQmt4GjjPS7JrGp8eyPTDyHLWfoLbez4KPHg476t",
  "key39": "3XQ1LA6oiszUeWXDB5Ze4YrZZJpUX7rt8kGKzFGH7bZcN4Ap8zkALF4qVFxppQXpwKuQuKYND26PFBd95QcdeaCB",
  "key40": "3cXugAXWB6TtR7EeWTjSXYTG1h8ENTAvTxroUGrm1eUYZNss4FMFyqt1n2JFtW1vUQL32cC8iqcRnnV6H6qHoBoD",
  "key41": "4fk8SaypU57JVotJaj5rd4Z2XAyQXbMPs398w1qqcQ9ueJGWujUqfEatiwTT9ZgBrq6M97Y8s7kCte7Xymn3tjmS",
  "key42": "5msjVkYip6wj6cGqUHGurzzDHzbeTwxBNd6P6qw8SBNqsDJKyyKCMMNs6RNka3e37k1TMnSGDMG2uMVqmKkhyodp",
  "key43": "2hCtXa6M4mfkHrfaNFqP96ChK9VPNddhrdjkkQQgDRo8RrcW1gT95CoDLDmN6KVquv4R9SkHtXPRabTdbcnEFqYy",
  "key44": "4FDAsxFyJXCvxssY1FTDFv1yVc26uxWYwhTpr3cbc6Ka6omu4vCjqDCA4CWdaYFzbne4tZA4s8AgBvRsnhSebuMh",
  "key45": "3RxtGECcDw1tmZEhZV8NvvAq7fPfxb5FtFnETsrxjkDhwPxSvVapbp5U7i8gUsYkUqdeFTPiLDUYvJZMwrDtL7Cu",
  "key46": "442xDmNA5WY5fA6YWTZxHJCPHK1aUZ55iT5i7YzRnHo3PemS4xMN4GLpE7idSHzHMEK6JxWt23PhpQokEjsv7DXR"
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
