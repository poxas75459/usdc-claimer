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
    "3KUm3xKKdFvzDcsnVSDaxQJx7MCame27a7t3Vno17FiWWTeHtjAQ829NnTeNG72rwMEfxYNQEMLVVjkueVfHH8GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RdLpWA6GZptqemZd8YE3WSeJt25BdZJ5qvDDnHh346NJFAixEVq8gh2Rkw3EcHTWFSEa9DarPAScx6oekVws5Cn",
  "key1": "5MtPqE3TdNjZxdSt2w1VZvybjZYtvXtMrMs31CF1VHaGTzBJT8CUnD3sVFjKqHWXkrMHxWybHiaamrqYvmG2n6ws",
  "key2": "4SGqB7ihRjdXdY1ar4JcWJ1sVbnh1uZ19ByhZmuBzumZUEd1UAm8VF71Gj3dw6ewY1LFzLBgnJ24GkwjANajB927",
  "key3": "2cS77sdqydg4E9znFPZ8H3LfVN9nJBqS3zkwt7C5mv3riReLeMAVPW3sx8i21fotU8CmKYM8YjWy3KcQaXXazqib",
  "key4": "uQWYZjtaVjA9RXHq2Lcgpo4NysgYhGVcD4JX4BChZm2jhzR1yKHDF2ggZRZYCRLmr97tmXNUHSNyqTUAAk4oUkj",
  "key5": "uNcC9RJSRyQocS6GHA2EzCkQADX2cc7BUp46kZn2tEw4KCvrzeLhAtmJi2huQJ7Q7cNpqx25tsiiqm4fDZQPEG2",
  "key6": "2cNXChg5dPkoj5huYsCF9SEspRTbBZ62p4XiKGRV9Hf3EuAan7bhmNVcvntdKPdK4varJfzqbJrzf7VwErmfYfmy",
  "key7": "43vpETasEVMhiY4uLfatS3RsUxpSEBcxAKoyx1EFSZB1jADQvWj7gdgTzjYcimr1FgpKEkdDJPeFouhh2fVSqZKA",
  "key8": "2s5EkwiGA8GbMhT1SkKZyzHxoJVJ6q4gx5b1g1FjZCVva9goGiBRQoKPVLKiaPyXveMzxYduo7kXo3NgWE7CKcC9",
  "key9": "62ooCMSWLVfZeBwMLr1D9Nc5NQHMi19NdQpeJcNQEFEpK1cxUFM82QAHd7vvX9UGpXT6vk7FGChXnLyzmAgoV3oB",
  "key10": "3CaWip8psZDWGdF4z6ed1oFr7inweZauDd9iLJdEgnnY2JSSwJxuDbNhKSwTBJjaxJqQRoC61f2s6r43gW5p5c9T",
  "key11": "4xutv5G8ucQSspQvx8BaZBF7wGp76JGKbhsTG8fsRwe4B8AFF1Cnd8nJZLq2YJ4L7H4yxdYFqsLv35kHMDXaP7KE",
  "key12": "5xhzC8nZpqeJcqdXGZrQpQK3WzvERGohpbSsZWkpP6Paq8BtrsNFRo1CzNujFjKo2c7CsBC1hJnfLcfnzsZ3HzVm",
  "key13": "6QjUJUmQz3xKyKoaGRbezAPjwnAETrnTDWkHkW6om246y4J3cZmcYqhWFWzEqkHzA4F7Jaa2N61JeTv44Jm8tiH",
  "key14": "5bFnGXUzvCGcNj9ed2dUykQp7vzDT3bVrJ2c8MfzWzCvibAzte8ESWEcaUFUSAJoaQfC6jNJhs2m3u1zMgPPNADF",
  "key15": "2TfYxcngdbLqn7YbUVEAgh5LYcYvWUG1PAvGCPJ8ZC5NYFGRXHDD91VX4qembkLuryx9xWP1TFnR4HMMZAirTHmd",
  "key16": "dZjSqQCSh7NpwwEPTPpv45aMpTM6ngtd2E2KY9VJuWBLfrFpfqPcUj59iGbktzuYrTKLP1BAfbi8kyysnR46nwP",
  "key17": "5J78HH8AvCqgHkXK2Y5i8e54Ap6ji3FazzF8RSyyxXXsfYYL71LzHomVSLv8ysdb8GmJ3pikZYSynYfiFUGgWZWh",
  "key18": "441Qi5LiRgVjwxZi28CQFoPrasckh2CQEj4aS5hUMrbigSKe84ssA1QqpMewbpcke5WTwikWpSfpXwfbmqVKiAvB",
  "key19": "4Un7XUSd7LqCCvdXMcPNMQ3EnkWkT31haej6RS8NHT3oHuVAYKX2oCNdhHahyvQhHzM1umFzAnqSRHDv8FKs4ap3",
  "key20": "4D9d6MhwXhYNUWjhQuSNM8jdEwstkZAVp9JDUY4wJczd6RYse6iuDcFXbLQK9aNXq8JebzRL7WLAXTwBX3XXzPjM",
  "key21": "5g6Tgeq7apTGKCZgZhXmMCrGTWenRgEm2FFMwNNkMutPbCAittgqBf2ik9BtH66QV4XevcKuLr1nQdquJfxVRJU8",
  "key22": "6VbJgwDNW5CyYWd1i2XQGHZQBcSFE6yEG738yhAByk1FKMmAgE3HdcMhs7EXYL39KXumo8mapQ8mz2Sfoyyf6bH",
  "key23": "2P7YRc4eemR3EHEDeFxFabKTxYB9UdSjEYFA5gdrbgjK7djohKfwysxnrGCtjWwaoj4FhyaL7dGfrVsc7aqGCbEL",
  "key24": "2ck1s1L7nwkGJjbQy2agGaPn7duRj5LDHQo28CwRWKuEhXEqAziqW8SLnkViANkQt9Hq3UNaz3rcytzVDwnoUeHE",
  "key25": "5bXsiXp4Q7DDfDJV2f7p1LoeUBthbLQ1n6ngY8ap5qZhvJWsecWasBa3nBPcNroZQJcmBe8znC8uLhNKW8QBVbhZ",
  "key26": "5oz1RTijLgHWqexZW4Xv13h3mTRsDdiC1kuJ7PcstPY9X3TANSAJasR9dXzEbkeL6xQjYHNRmAad6KMqm8TKcKdB",
  "key27": "53vXpGApjP6K44q5Kogk8zqcgccjRUxa5pHy9qZvp17RNVxDzTSUNv3QTLMX4Gatemmxx83ZaAi8o2NPxSHBUQzz",
  "key28": "5qYsJHfPJTK8VsvbpZJcfQ9jc2bUZBtgPdExBkRQQVfGhYe7Sh6AcMea6rG6cc48xLvkTbq86aaRfpQQQbePGKU6",
  "key29": "4QyNZXF2AJKP7mp1RLzRdvKFaTdbYdUhMwJVbZRA6LvNizt2Wxqor7US5B71fnAifdvQvbBvPeZnFZjDJKj2yo2a",
  "key30": "2z4HFH4soCuomEohApjeNVbcroDpGqQqFAKucXpgvY1iaputUgRDukVn9TLkHSaUzAvwHtciasd5ZJfx7vR9Jq8G",
  "key31": "5xauMn8kvVpZRMP8aZje5HLxeKhzUnoPyDRbMSc4VRj8dBhvQTpjfr68rfdMywB7dvLV8cCFNXkLMkATxZ71E6uH",
  "key32": "C13Z9nqRDRNL22HFSCQ1J86ZC8K9sEiLSQjv9pwcmDXMfXjRGzeV1qQNEpq5x2Pf79Bn9uvEpTqKUFYyw5J6cMY",
  "key33": "vkwmfCUF8No9iERMjS1gbYhKuFxewyjjLMbAvq1nFSJ1N7gzk4Tw1tgXQL54M4wiQY91hRDMjAeupQNJCmUWXfJ",
  "key34": "5t5XhCUa79AXfbNjPEBFazc8UGemoYtf1WNRHYDJBtDdU6dLVmsfdwHQmujLiQfyvX8o9ZMwgEFUNKQGjRhTo7Dw",
  "key35": "5tWnoyftW6sXqUMUMZ7rXvR5H3dZNbTTke5daUXXAz5dQJZQ6x1serkeqvWYC9mrzFeEvDK8R4QfywKPiao9RALy",
  "key36": "5zrGjnLjMHCcopmsHMQxhVy2PMNK5q1Xa3Sj9NaNicBc5tjLsZLG4ZHns4UiGuxRsW97cQtSyxEyopeTBUiJvR7",
  "key37": "5TngpUWzuVXgJpCYLzFrhv8CQAUjvL1YLtQNyHumZdS39U45pcmaWFa75sU1HHcQCpRrkPPyp1ai3XXGHatiMV7i",
  "key38": "24gwtZm3i1pHjfn4c1cgCuE1vfbwLKhZjNSNzojPemuY2xEKFKuDvaD5b63dQBFovKzWD2SwELjVmD32hQ8D2TLW",
  "key39": "8oxdxLCZbH5ignp7xLDJhtjEkq4W8z7v2gKyxnCVtLEiAFzsHP1pbZmKZQhRswLn1tqUL6SMVBauzb2qAojxMQg",
  "key40": "2va9Y1wku7xS94NRx9i5McxbwHzJBRqmzCZgt6L1kCMyE3KxV5yoNq5E2Nx3apMRvNJtdUfrWqWRAqjWSYHBeU2C",
  "key41": "2JEDiXeuCoJoiPncWxhHnPcE8CA5MifxyPRvY5BFnMqRFBqszPvvS5S41qAduHgodLGgndTzMfeEc5sQnzRZk2AY",
  "key42": "33vEmRDD8eMj6fLaTGTrofXawFK3yJzfNkK7Seo7PsGguHpMVjV3ZtnbvAMVY2432DAZQ6Whbz6Kf5o6GUAygv9C",
  "key43": "3qez5CRUmsEZYWNbUUTV6raC7aD28uBjbXffWqMra2yjb52rB7opfFtFdPMLrxBcEMwgY7YWyYHsTU3h81RpTdY",
  "key44": "4DbceDLNZRP1VBKmLPx4kCvP4iJnQ5KekzPL61389dJDaG1yQyLzLiv2HBK6ArxQgQJeL99foHBqWZYheoV3RJyx",
  "key45": "5m3SE4LaEKMuZZzwWtYxRHG6oU4EXF7rvZK2kzJue1UCvbqq4HbvxYF9hmkCfZNvPkHnrdzDBj7WhgCXVEYg4NMK",
  "key46": "gVwXpMNJktqsPNV4m9hkmZXVKVkvir9aoSQ1Hp2Pa4YGhctWevaAm3fCw1ZikvwjUwt13bnt1KmrBtCcc8vJTyi",
  "key47": "61vpkRJLNb3C6YJdLoJVWRGA8mfWcEXeqrxd4eVBgSkVCeKANFVqviFkA3qPZVy91YFiXErz3uHfwiTDEpz8tAY8",
  "key48": "27SWzNK6RGdAw2khQCYj9ej2bojLFBToY5csZ5RehGirJ1kaxFXp8HB8sLwYhPh4hVBzAgkRE3P3hHYvZuMcLeXy",
  "key49": "QVd9hVTcvGhRPFyef2TS52F4gkm2poqGMnVDwVhXxLLZ1FhFkSDbsVx1YfpgS1yAxLTDGrXEQ5vDV4zqSnq6i3U"
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
