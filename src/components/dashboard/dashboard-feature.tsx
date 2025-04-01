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
    "5GiSFCDzxRnz7rFxGXcFw2aUBD85BtXXZXqVhzKcHbpQAYSQbn57bQLff2JDQcsw8YnLG69GKBFViV71KurpHcFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5deEm5jdUYxH2BHcZStH9mrNyEvBpBuXEKU8cRseLrMgkmg7XEvYHLtb1et4TyvjD5tqamgD6DDihhcdWjipkreL",
  "key1": "2Y7Q3RCCtW7ceRQi9iX3pm9CQUbwc6b5GbWTpvgQy2zkQU6LZ8apWhrEkg7EnCJ29wDYYjfoBypwnfpZj8vPHNgz",
  "key2": "2v1KuRXsKnfonavXYUU577R5WvMMw3hFGqMJni2twPBcyKa4ZyS45HgTaCiGuR3EiWYnJoAYsSKKWNmih1pfqPyJ",
  "key3": "ZHm2zaxfhNBriAyGuHZP8Q6fpUU8jWJffMJbxw1EScsGVNr6pNVTZkDJQLnmjSinP53iqCpLMrHNcnpUUkyNt87",
  "key4": "3tsVTiUpfwQ5tv6xXBDbsC9juYVfV3uBQTcYkkm7c1BovrWWWqqXzc2tnrPHtoThFABurv9zs7XxA4hvamf7xWZL",
  "key5": "321j2QnFhBvYbm8B2V3cMrjvRYsHSB3t8JGLrbzZuUyEWyhX5ykifwm832xGLeDiukQUcUaqcjtx4ttnbLW1SG5r",
  "key6": "2cdSmSHmSrBN5RM4E4EMbiqypUN2YJ3wQuWbjfkkfGQSTR1WrvnbWMThkje6Pe82V23VwnR9yeP9aLU6zam3FQiS",
  "key7": "38FWVf5eZEbpzVxz46vgzHZnUYRF9NA8W5YrZNdCPWBLPNdUJvfffeKy8pZjeirugEipTxStrMQ8qJTtmyeVXMt9",
  "key8": "3SrHoMcULTRcEnhnFxDm959bQ2eaN3FuG7XWzk3z7KhCs7uopcCgoZyajanT2Q3Pu47kbtHyD85nauov7VGA5s2H",
  "key9": "4SLQVHYaEto5Xf5LJre8ECKPqz2aEt3CSEAhmqBkyegfMeaxbKCLUctQn2vtxzuYpE1MTQxyHsPz1mDVFRd4ndPd",
  "key10": "3Rre5NXQFMfQsiFsGALSdZahmRf5o7AGPC17T2HtrSYBMEDAssiegXvXWiJ44SJfYMYGA9H8B3L5wPYcAQPtDnBk",
  "key11": "5UTn7oohrrmgQGFmA8KHDtW2QhSMio7AbXUo5UApPNj1MuiHdaKLj5AnxuPdHA75VNRaenfWqFz8Ls94vxcvqVxp",
  "key12": "3JyRLgvuPdkFQRDfwwwpyRucTV845c2bo2cGo3oGiCTKxoVsgt3KQ3A6xTVw63wbxzzAhRpfBExzwT4R8493jRVp",
  "key13": "9yH5XBNQWvKTJEP59myL1RuWkRLFtjmXbSnLKUmy6nQez7Sm7nB28qLK7apoVL3NRyKTmEyNUhv3LK4Yu7weqHV",
  "key14": "2tE83hoEGQN63YzLbZ667b4KsoXeLzGT3GK9QqknSdfptb24T1Q6CxJNgGDxfQGFszJXaCsmGV7MSQAfamiUwHYu",
  "key15": "2A8eVLUeLyXSQmNJoHapeNPD2VMnkd2Bt4gtV9rUPMYh7q8Xe4F7vb1pwecewXqxKgLnmgBKi7UbJeGS74cL82EU",
  "key16": "2cMzvdfAutxrQLxab3NYonvZzDb7wpHdtzub2SG8Y7aW1LEQfM9wibLNszyWQapHcDrHmMwYT9LysAvmmnfrkDLT",
  "key17": "9ESgRJqBk5yJEj5Gyw183md8eGYwg6u4b4t7HykBNFt1fKfSJ2ZfUAZLMzoiueCWPxRd4x2iRUNkKMeeFDJWsPW",
  "key18": "3Hz6TVBxjdX8FVooF426DFef6njys3ojdN67EdBova32MfDXrHo8hKxxi9PJqAwoyKmzZWM4gMvyaX1ZH4Y4tk86",
  "key19": "6c8c9VScE83waW6u3rSGS7oJVq14aNGVwYdDg92xGfL67qhdu2VD74LX8mpmnwssFQBy8LWkZyZwT1BJ4bsYbTP",
  "key20": "5eZ3Pqukmu5Z8NrxRFbqCCybMmqA4Bf2TTyJhWzbhy1xXQqHn5RQNPFjyw8ToG42AFxKWnEAH6GUgk683J1gFxzE",
  "key21": "4h1Aqbw1jwzZzMXGFGKsJoRAD2dqpWqAAkQVyU13xqYMoqMigdnptr8NwFysYqqpYRUHrcqznUzJq1oyYE15QZFK",
  "key22": "4Va7avji1a4vF26vaE9bkMya2uar9qUDMq4F3Py2rQRK8hGGCHKx7eM1UJsD5H5aNJJa5o9k8vxt95WKCzLMNBB8",
  "key23": "A9TmNRsWkR951rvp9PbTkFKbHfeJ9KNB6gijPixn52gVNmg8T9jR4zdD9ZdB6Eyj99mTQVfNYjcSp7gt37RXEt6",
  "key24": "3XRJHfNY53EZ3K438zsZe12PgugQz2RmzEFG2vjtj4pqwwi4pR4HKhcYcrNW9AdpFS74Qk7J65UeR6eDNgBdoLAc",
  "key25": "5t7pnVfWJKMJd3qKEyxe2PPyXmn41fiuBvdJo5bTJhwuNJnLLqieZAcMiDwm3LHRMkPFTUSNgxqKzFgZDCGNMXME",
  "key26": "3A42Cjh6NYEyvoycSwnTRgYxJBoxN1pzd7M2anmNcmzhqWr51gQDUZrJNVoVXXG7DWqud3oJoY4nn5e3AniWCwjK",
  "key27": "5rDmQQSNqdN8UyoytmjHVGwC4Q9oRtoTZSGd7zRYG2eAQFfFqMhgvvBPN2Yn59GkXHg7REbG3jzZKNNMhWHUizP",
  "key28": "wVJKJK77NY9GK1r3SvB9tyTyBvH4YWpi1vbydQxWFuXCT9uW6XZrDnzp8dqKCd5xu4kx3nBsnPFgaaMc2q3gEoE",
  "key29": "2mSVrcMNh1y1nTYq8juejyF6Ypr77DyjH2dbMEABnvsFPPvAD6V5nCbWxypWwsW6eH6zsy9UofiG54ZgZMzdWmgp",
  "key30": "4LcEJfwk2t4Ssubu37i9mnXo8qVfr4cgrhAQQiy359pjmJgsyj8D1SPmWFS7WL6NTNp9JMk4Pd4yuc1Kc6ytavVn",
  "key31": "3vxMnWre1Z7A7mhqYvxMo1fw5rd6Kixt9Rg5tgEvLEpbjW8oBx2utUwdh3keWouT91MDvfvVmp2K2n9thwgAcNEv",
  "key32": "2RVcUWKa4ovu7kypjEFRp6rT6c5oS4hYC99beEeBYMYfwT9JASHHNzxKhR5f2fvNRFwz6Hwj4Lzg77U8JzVQoiVF",
  "key33": "2C2HS5jxCw8c38oCio81VxuWR5RtaAjsfaJ6eVu4bWF3DRFtZyVk4YhUD4UbktAq7ZHhrTzf3rL1p8D6sDaNwcs8",
  "key34": "2ejPKGhuwTv8oBykxJ482LaCtv4Bj9t1Z2bDEVTbV5WXgsJF3QZ9wt5XBWTsyyAxRr9XjJwTVHSM4g4GLwPrjy61",
  "key35": "3YRiVL7YFsLPThC2HAgcUXeyP3nz7FQwZnb4jptobB1udnhAxJbkoqkAToxNybf6xzvXamGYndJkjR7Hm83kywgF",
  "key36": "gN7Wdg4UGvr95i653u8RZkUWLeTfTnVpoPvJdPpqUivAs7RRTkDjt4A8ZMvnHHtXhwV1bLQskhmysiidspNeYQn",
  "key37": "3wEyDUDNpEyJyzyFCAirGE9ADSwckBvmsHexGWLuYSmYn36wMqZHyYFxJjSgjA4tVNVvnX5NS6hRbWhbEyKFHTEn",
  "key38": "RMNkQ4KEfi7RygpHyrjYjq2Ty3PFAiKTvDLbZtKHHM3jwcocyR8zWVJwLF6ZYn3azwKCrhStF9DTC8xPJ1vSn1i",
  "key39": "6vY6gSy5W19P7bdd9hojDzL4aJNqu5SQhBnwETeFtMVgnrt7R9qfrRg1fyd5p2seGeceWYJZ2nMP3o1Gxf331yj"
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
