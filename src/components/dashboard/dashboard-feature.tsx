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
    "3EitTvR6UpdSqFgKcu8bsKGtJxPGsDBiwp18hTCSJKADfHW2t18HA265ron3E7n9LGdsJHa4DJ9gWEuHdHbZ9TJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488Q5RYfKmGN1Wft1EmE8kZdwy5y6rCq3kEAYn5dPPabaZqMypN9FjDvQYr3z8WruZ7EmCVGM3fHJCDjexYtgwQN",
  "key1": "4qnqbqiBKyrJaENKmnRpDNTAkr9L2vvK2jQ66NmwttGwJuX6nSTfDHXRJ3SXfPP4CbDb9QJeJUXtBWJdKraHt1xZ",
  "key2": "49Nw1dPjbukWS39AfX6r9fVGTjkEPz1A79YNqM4rTqjifK3zAvuFpt2qE1mJgg7DewMcAmMUYEe63ZySMrw5s1Qt",
  "key3": "2fMj4qLUKBR6qqkrfQcHhEXdyi1iubEhKPdRcPt3iS53wJDoGb2nM6ovjr4Zed63DrnLzBPxAZSkktZzG7ykCt8k",
  "key4": "3BCo2bdd8caSfKJLv1VbS4hWJTtoSXcesqJ9zQLRQY2xj7uvKd16yYQVCXxEBYyvPH8MwFaACQW2xrfodLqRvfum",
  "key5": "4TUPHpK5DLsEZHZcpJBU5aEyWEsxRKKEdxe9Bjm9DVGavp9bqesxA8Wxm3PwG79Cs1WC56kx7Yp3szHm3nHAHdsy",
  "key6": "27EnuoL8c6uYcTb4PWXKYn1X6QivpbKPM4nW6WRhX1sYCMN7pHGvjbxpaKzpFMd8gkKnsJKuuM1NdJKTcgKnxmqW",
  "key7": "4VQ5GqvLrTjhA97gyWd4yrnFQnj7EZFso1pPpYZbMv9BbPFMgcdqAM83JgNZrSmQ3hJYCgjGTSSrVp5r1FiadSy",
  "key8": "371AgjQA8dymrPP6mPZnSM6jPguLiBNT6bDTcmiDxCwWnDHH1d4ZDYgUEVgDmoiQ2y3WYMvn8S6iTsHGosujiAZB",
  "key9": "3fZh7dYL3mHtWyy1oiaj943xBKq6mhXdwmraqBjXdtWj3bpandKaCrvRuJGmyGYU7Cgkz5yVYpxAzdyPdetc4b1p",
  "key10": "5DV8vtHiCvN71PzckWqqNSDAJnvHFY2ZqUUwDunHEh9f8sk9Yt4kNbCx2v6QWBqRWRjUHttcPsSbc7W839V3W1on",
  "key11": "4GJbk2BTnxb3cHRnkyeEpd1U2R2qj9MfmgDhcfB9nNJJJKigkVoNRDYVHMbSifD2ccBLx3jimXdXsQpvf2mDgmap",
  "key12": "39NPszVzJsji9av9XfXKHaiH2VyweJNh6WJRAsuMBjWSjkGw5NvHG6xt8po4GFrN7o6f6YsosRhF29bo11aKET4N",
  "key13": "3RLX3TRsbSkhWzyeDKuDrQFeYPqRcu3jc6ta142huL7QKLNLu9UeSDqm5TurTUkSmRprD5ZNRus9wVrEEyHyxjdG",
  "key14": "225eK8cJQk4SyTZGdEZeumuFhamCDaCQaoSyN1pDHTfqadghpy15nz2miWbQnnBbfXCmDkNgaw2X6ihV4aLq4u43",
  "key15": "5yK9xpqJjTXT6hHGxtoJQ3WJ5kvWenWoJbgzXdS15maP86jShQHUtK5VF49wJRQrAqq5KwET5hBe6jpknKaoxruc",
  "key16": "5ErPDxNgSwkqW9NsxJ6BAtzr6xFtkSnAPRUqg7QFJyndfSyXB5gkmXDiUY9u3tBGooifiuYBZu4vETaQ3wDvvHai",
  "key17": "2EnF4jFftwWY46Nuva9yucpfbf3knMX4yiN4hHJbSX2Zoz6K5nKBfh744ohuRBNwb9RzQK2LspP8jLztKyNgzBpq",
  "key18": "5ezuaCUrbnfLwNBhEGsRAxX52vQu38qKBQ7jA7EonEHEzCTXyYq4wAeGV5JmQ3hkZcck4zHSSZGABAvVeSveQZGv",
  "key19": "CweQ4rD6hnqo3gVxbiH8KXbZyvHPryT3jyTN9d5HYPnajbpBKHyjZR8kqT8u4Px3xZdRLcr1GwTWhAdaCTdpSVu",
  "key20": "3JRcYzaMQZmwfViCMzitKCZW8QVEZAP7Y66s9cb15u2RQKbDswRMhoG7B4zH2zMG7RZKXoaNdkFvrZ6HUTiyTvmp",
  "key21": "2kQdoYTRkXo1XXLxy4GfuNHphUuzxSMmgJdJ21vHgBuiQA7imVnhtktF6Jxiymz5i9eDLeHc5vyh1JZfdekb9n4t",
  "key22": "5H4t5mAkXsVk7fj2kY8Uh2kwhwp6uBDMvdx8F2BGnVDjLZS6jqKef6pv5PjHSjuZWUQQdGaiHbTeN6fjVHjQUpQH",
  "key23": "513xaDgf3UCHx2Qnzf86oQYwhhCvj56gbccEaPrrX9rA99rTNe8mFaFnGk73NTVXYrk8ALAX3Zq9uSRb6726R8h5",
  "key24": "3gV53Qnvfx4C9rpXuWenE3GihScZfSxALDgjnmAsR5qy8DQrWDU1xvXUHe1xTvfVbMNCxFj62FvfXavHEprFn3U6",
  "key25": "3Qcv9M8Riyc2hQs3wYpG2qmxLLydSr1rqd6uyFF4H8ssVivcpxXP3KVUstPyg6CYcjApNCvkqA51Hgg3yVYQueWE",
  "key26": "4F8Q8txb7U1FCKQPaqwJwP9LLYjB7zNe2R9KLK41gNrPhiWAK3EDrW8RzVbsT4QF6HBjwPtWfCtPrKt78V7JwLzp",
  "key27": "3652WYm1cd2wacvqeog5468APxi5DNJDjo4fC2bB855Vg73mXZJjQmsYHMvtG5qQZBeExUx1LBMD4HrjbZvaPEku",
  "key28": "3kLmAP97CKoXyGVxwhxbzFfMJio8C8AHsbPxnuq9SAdcPYSudbpRNxkRxCKYuFoiCNN46N2cwsVqFRFpuuVa1sDh",
  "key29": "4LVAKQcogbhUNBcj2MCLYXqBpPwKYmA2jBBXNdthAy5EvQg1YJ3tybxirgk5azLSASG13fumKPqY7qimBGZ7xqPx",
  "key30": "5uUPv5WSrmn8CmxKJGaS4FJY1a5D7GgoicKC5Qtg1LYiqLHtBYLFASaaXr3mkJ7wwKx9sGuBnWDecMom4CfUUi3C",
  "key31": "2Z5C71ZN2yaDk5HiD3z2EvMq2gU5JYrGGxCw7dYri9cemDEu9bNgCD9gJYfC24zKvN8fRaTqaQyNy6THcyHMcDCc",
  "key32": "4HFs4u6SUtN61doMA1MtULtB3mBvPR211xtcUGm3HojeQnJ3Qc7ZrhibUEzqaMbU2BFx1XwEkHR5X3PsEBdQL2Xv",
  "key33": "douhHKWhnKQ6X3bkqsz8QMJhFbqSx7knZZ9cBt9bDx27fg2jvzZDo1UxmPKYJBFdru3iWJ4VcxfqUi7A9u9aGgS",
  "key34": "41TRcD38KswK2t4v5pMrPS8ik4QZpBsuEuXXcinnSbmpzECz1WCzHCzXuEzGJt6DhY55jRTLK79DBr2Np2i8gDZv",
  "key35": "3VcWPB1yAdsJnV9bvmFNqAScCf61PPcsNp2S4wt3ZxHPtqTtJzoeGmxo3Kht1HiwfUnp6zZQKk8SmsLpRf7y3Kme",
  "key36": "5gnQgXU4LHwp3mVFPEdq5pJWwYQPBvUqTcj2Vk5FFAk1rzyop1EboRxBo8s7hzuo8M5gEGRKQbzDFYncGmgb4sGY",
  "key37": "2yU7Pqz3nAB5VFMUYPs34wvLfFBzMAtGPgwi1MY1LY7N6824VUNk44CepThNKMYAP7Cwe6aiydHZuYUdC7VwhQn1",
  "key38": "m5fPeStNU8YM42L4DJ9kyBv91Vwx5sdhHLxZjYUchT7CUsD8CvJKDw1gusTrNctQFAKXJHAcRPowM9h7vBAxkrM",
  "key39": "4wbPzSnCtiutxWbbTS5R9gfdH6KECqkHp6Dj7m4aiP1VXyCsxbungJSDnjCEMKZE46o88vqQEJBGMqyQcRKEz3Kw",
  "key40": "5Hvqw8UryxBD2uujb7bLqMBEWmToPEdREy5aqdV4dmp2qZQZ5YTwDUcBzuJtmX1wu83KfMh5aP6yn1ztgcuuJtjJ",
  "key41": "3Nfk4poHLc2VkdWEFZZDUQzRJADhwDqkiDmKVFYpSawSFt4SKcFUT9kgAz6bw1AW4Lidm5eVBaHUbKZAio54CSZL",
  "key42": "2cxCcon9VLwQQMgtMhjnqbG9qGWHyhTaWS5AsDX9n9Y8JZab7d98WapJbAQBM8oL2UJdQPmnBKyF6Ybo76KEPJxp",
  "key43": "48pFcChgsTcbDbi6vh7HxkzNauLKXkfQY54hcF6NYoRaZXG6ncueQDJdrGp5ZFpy5p4GvrZm2H6jgrtjw6BmvA3K",
  "key44": "3KgqxECW3C9xBRX8dQ2edrp2LgEgMaKhW1kootd8ojpLh1m747JqQBfaBHRnA2KaCYwo8QC3Cawmuno5tnAkLWZZ",
  "key45": "3Wm4yb91UPY8Ub7LjUXgQWmn4uyhKY8RN7Y9GVDGdZXi82EZywJXWuTdvFSmpzUX2exq9okxhqcAwwyv7pGZVpcr",
  "key46": "4yDfoAuUwMzgDxqLFhFstFEAq7PM9jmrE2fG128Z85dy9oGFn82F2KYoev8zw2g8tZtUwY3woD3eA8pAHMcgeH83"
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
