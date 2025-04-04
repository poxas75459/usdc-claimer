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
    "3nn4n6chvit7j9fQJhDijAgWkTtMMR5si4AYuxxoMzAupwQfJimDDgpCdf95rLSAsUoRCJT4Tp8KDUuzv7ExYirJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cGJhXF2VQES5n5HnCjqqpAHDtcLcRwourtM9RCEFqP91RopdzifEPCcTzPge4YZnfuSso8gWmWUywzsRbQAei1u",
  "key1": "3sBdzwaNy31Jxj1aXqjWQk2YSWzxF7eJnnfQjZhD6mnHGi6E5tcG4aszsM9DwF73zjRoi2jEY8vuM6fmSaok4aEJ",
  "key2": "44RikneFBSupybEA9jevj43rnJVyk5w4iu6RSY6sxjYZ4oVb9JxUfFrMjPEU63Xw5NNjxZNfEEQvoZwAQLeMVivJ",
  "key3": "4GsAR53jC9jNspEK7k1rCst5PY1gnY4rWBXXa3gmfinUhmE69dBM7LTWK49hPSnbVpUYZJiuuoiZkL5KY82QHyNq",
  "key4": "2HkwVYE9g8UQvJARB2zZ8GBT2KxSx3t9e4KH2vyGQLRV9XVK5dyogcHsHx8P6FJ4y4shZKir8aZUDp3RoDkJTRAB",
  "key5": "4L8oXrTqBRNUxoEa1mG6oCquz9VJ47ZAVo9H52bghaRZfrfnRVD1HaiUUyTgvYAApfZzZt4nbnk3hjAL46Sm5WJc",
  "key6": "34SBjBWzgLGMvn9XGJhJ4gn1mNnR5weJxqH2RDVARsGL1NKFX1vTgpQ8WGCmyBntvxKKnptiak58pLmh7sUEji6r",
  "key7": "EJMKDmkta2JZFQyRthrvotvmimkQpUnHw1XRfjSzaxocLYt1joh9fDBCYGviZXzvWpnT6hLKxardnBeHzd7gH2X",
  "key8": "438UrdEPQ3S2bMVcN8m4AvmJn9x96H3EHeP3pXVpYKR1eF98n7nHj8C4TzACKMPfQVNSXUmS647Cz64H2dXmUmps",
  "key9": "5svbuzSWL9g2GkufW4oH8PQYwc1B9iow3w8QXM82Xt6Fzo7NyfvXxhwUHr69Kr2874SqdvpogoWcuHRjeCf3kTUJ",
  "key10": "vmsxcC2Xo5d3kiPnc6Dey3zsxCipySp3nkKMQC5uVN8mFvLZf7viTs2s2Cm5FNZLKjbcPusWUciwbfcCX8B2t6d",
  "key11": "4hWScFCKgDPW7A1Bqr1t6YjFaLjei1o1FUh1Lapi2hoZfZ5NzYyxfF1QovenehdnhQjH1LVrCMNyHqgEuc9Qqhpb",
  "key12": "5JBtdwHkoo2i8upWCk2mPn2L7JSvE3G4TNEzpNaYbgCenDmJ4gyG2uG4Ao8oMpE4DHubKgbVbnoepyNLzgmY4KeK",
  "key13": "m2fJc2Jo8bMf8r6vKYDDg9SVsLahkTAj2VipabijFMHybfvaM6bU4ZU2ccaDvxmqj1xPzJnHASS8U3BwtRn6GNQ",
  "key14": "pjgDKEy1oY8H6bqxHLYg26jreRvDmcfby1NXby9YEbFFHMfzPfBxjkrRgvuLXfuW3iJDAYczZURAfAUo39XBb79",
  "key15": "5SNkpiHwz9qxrHHBAfR3DRmpYKyMgr7657Jzh9osWmKk8AoBk8uKmjVxTkJRTD8EWLZvkJwJHEPTKQMbdjUwzazY",
  "key16": "5pEdm5nuEEt5VmrzUDQvaM5czdQ1icfTMNgDKoSev5Z6oHn1cm1U1D2ziNJxRLYYwMMbXkpAycpUp1p9WRmW2vjh",
  "key17": "65rgpsh1GmLsFj78X6MdbmJr7qhCcLByw5359CmhMUgfDvwGLKw4J7Qt3SZYonRZqt67JAjwbnA7mWSVmutzTvSJ",
  "key18": "Q6KmNt9gmbo37yRgTq5rsjZRDAgXL5EWD1PyH6zYwWypbV9iWEZHGkYoqq6acyvBaM8ojdabN7YnScqjfGmeX8x",
  "key19": "mthMfezdeUs6ZjsDyxGWkzkyCmGZRQCByUYgnZDZk1ntyaPgYkWSAPmuJYMQSMrKPsqDYcYiNEuwEqn7chJrU9z",
  "key20": "3FHRD934awBJXbpBUdrL8EjMAd2nZ3kKW72kDQ8haQVnGQysCWRLJAMrURnbtVKjQg3sNVsaSzz22R4vrT3ejqAA",
  "key21": "9DL4szbcouCxyUF8YrkJbs1fD7AuZ8udDWeKN7FtwzHmZb7ycRbdYALBQnkcE2HQ8xv9RxmjFAXoxNxRi9qLKmc",
  "key22": "aJdvPvJ1zQscvGJCMvJCypxJkeVD2rakgccXQGK11c8diqpAxMppnLVUECV8C82HMiwGrJ9W2GeGcrvZA9DCHYG",
  "key23": "3mT177zKmLi3xhyoMc1NknWXGBAvANtyrP6Kw8nDAnMbzjnak7rYxzw1Gr9rqbsCdrCRWm6AcPFdQhw5Rzae4jfg",
  "key24": "33cS9CW9Y5kB3rQVDv6WYpsBd13Dux64efD1pVRwHe1ab8GWS8QfjGKk2LV14PkKsjW4hzEQgYQdv1HnyYHQ7max",
  "key25": "4QhhPmj9A7n6bhebwMkqtuK6VtwYeY3JgHMTEWvZFDcCXiNWuz15cZA8T8osncNVCm7DdJF6rTs5xwf2RyEUXUMx",
  "key26": "52Qt7YrJYig1msyKrHwoy9tXHNUhSaLrcHy9WivQ1xiAfjYahq2yGQDHKXeiaPgCbcGd84Rhsec3MKASZP3kA5u2",
  "key27": "2aBWGFZ5LTrVaFvswwYHNvfQLvPvXYgcJtsHoJrwvvm84GkGwtJy1y6ixWAHDBq4GZJ7ooUWfEzMjaMHkmEXqbjA",
  "key28": "58kKc6or3eC1AUCzsb5eT8R223RvMybZQeoMePXbD4EokN48senMXEGx6YiAjcMPPGgqUzrBsVC8SZsu78wVgDfo",
  "key29": "34G3Qb4RnspJu38oNL4r6hw7sBnSh2cn2ZBNbEhHtaxLXFDHqzb3PwaDx2hPEjDa6kMMNBhSDUrGXPvHq6QKdx5K",
  "key30": "2LnGaoFdWscKzuvpwg5ACVQNkj9StuZ1SmCdLuBT26sxmkuKV7orqEuR6guM11GjyPjxkkvX5f9JbnPbdiSKs2aD"
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
