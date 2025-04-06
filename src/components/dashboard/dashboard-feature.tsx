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
    "osv2fUjQ4iPAVVbbfXQa3QLjf8UTRAJMfrGcFVmheENJcDmDFmuZKAkRDQ8yXQunS55p8K6U8dgybT1YLWoe6MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwawppb7qXdECgSN6UuBsse1fot1vSZwFWEhEkwCXX65WDYgjGgScnULqYMNzBuKaUZBufam3F8fGvHdgYu7j3B",
  "key1": "5ygY3ZKLiCQ6Uaufv21H48tCwZNRjkpVPdDvLVN2j3Zg92raMYdmGhsHUr1Qzje9b2v6TWajQ4Hug8wigXLK36Cx",
  "key2": "5WWyvLyLmTGtqT5qHqfXqXrvjbQQfXhSdkQK8a1AnE8A81FwyX4Xf4bk6HuDwafDEksUvjsUGxeourKFE4HrgsTh",
  "key3": "4ZHxswtXyR7UJGUUDnWDJLtfc1tYGj4vmnv6xujdBi3GsTd9JmcoHz7zrV9MXtue9WzfHPgfWxfMZJo3xumirSYy",
  "key4": "J9mrUzw4KRemyRvdr7KGyjVTyje4mLR1kbzXXqShDfJrgxJLKXHhbqawNa48uMXpisPXfAw9kr7mZ5a9DFrViuR",
  "key5": "2LMASFS9GZDaxnHG6aF38uYhyh7YouBukduDdMSsk2CbzguKRJzxj8CoDnr1yXXQYJBW2js5U942vWrWBH9CvH88",
  "key6": "21m4EPLusZXJeTsbVAXT5FZacuMpYqB4MidrJwtdcUUcd8poji3hTNAG9VmwXS64QvuSqv61HTbRA2LL7WqZwrXj",
  "key7": "5hrM4QpfsHgB9J7GqeErGE1Lw7DQyhWxSHWs9aXgDv2wBscrP3TEWQKtESVstW64uCXZxPW2oFwiCoStxbqAvV8S",
  "key8": "67F1rpJZkSFfoZkr1MyVQNNqMcqrwYHNJwU9F5mhg3MxtKJB4j6n2SAQBBB1LZuorjUmnErPEkJqzVySwzFmuuB4",
  "key9": "2sJf9Tna2yCEdqSMwwzAKRF46mq8RRpT1KC8vNMq2rYE8QowneoxXTn8V5JdWRMBNf81roVJbHPdC4WcCzP73iA9",
  "key10": "3gmFd1TyirZw1ZPTK1G9xNKs1q6PeSYJBy8Pcmkd9SqW7QxamVGZFcJ3vFkiLyZwqLfav3uZo7SFvpJoMxpUD9cY",
  "key11": "5zft1CHT5Ej4V8eF3pi3o9nfzUHFG2UtWNX6AGL6keQoXq4B9nfd9ez5fG1PciZQAGt9ZoYepyM6vj8757pTPode",
  "key12": "3sM4n8asNZHJiso2sKBumVdA5BzK6sB9NHda8RYZHVN1pmbDae1Q6wnH3H8FiNJ1uXoUQB1PTLmPN6WdiZihxTRg",
  "key13": "2gUVShWmHyvfk9wutEX9XbBQUnbEsu35StrtJ4wo2rmt9aQFgpCmXC1vnMYNBdkVn6dY5aqiv7z6H1Cq5BvatHNn",
  "key14": "3htQg8UsPu2sSb7N1VAcihn4c5xQQQEBEaNHTKcngm6BhQ27uYeekNQrXmwPFfZ8GhoagXSkW1wiLgptSVNVX8GV",
  "key15": "29NFvA2WuyVP6fTnn2TUbRbHfCqjqTRRf5V5X9KHA6pSMQTpkeH5PDtecZ7Ke5yZXofqEwUnJwL5qyT3xc1ezFDz",
  "key16": "2UpUuDYWEWBcX68rDdBzjKN4Ap27rRmQJK61ycZ1kBZzU1PCtJzSv8eQSywthqfvsCL7znxotBM2f36kRcPN77Ki",
  "key17": "A2CWoZ2KF9PhTuuP2LAcYZuZhAkeAjL2ZcJ4nJzfzS8AMz89E7p3b2UVb7RX2CDkSukP8CMrn8qc59Ueqr9sLdK",
  "key18": "5DwUobWQuU1iGGPEmBDymxyLMFuaF8CykiJ1o8ZPMf3wRcT7ycbuTtneoYzfPmpopeTjDmYHKuJsXZEZ1NgKHTUL",
  "key19": "26p8Z1TbUVsxVu7U1fLcUZ78QC53mQ85EmzhH6Lr8xHErEG6hPUUhRmJwbY1ivW1bvBGPmhafCtt9d2xCFbLwaap",
  "key20": "5KEd7mmVEQmHBYiuER56DBfapneUshvbGR9VnUP9oGAgDoWhZzfWtdDt5Y8DXVcuqXsx59vjUSBNLMx2SPAXEwt4",
  "key21": "3msmeyp9xsey8m3PYqmm4Ew5ybjDajy9fQJFmqgpoyV4AxGMBZBoucGLs6JzbaEB4jZGXQdba8zEci1UXE2PrBEy",
  "key22": "zkxf9TAhuM59sfwVd4eeo6EbbHeUL3JC4ohLw6M8HqY14sVUq5bvAYFujZptdtVsqQ1SNMeC2ZKnHYkbfqdzHu3",
  "key23": "5o2PMALKNvEwikimQrcX7uKvqpHirMrxTvLzKtBAVVcdCCwX5yuPKJffcaTr6c39KYSBx1dvibmpwqregTsEVhZh",
  "key24": "2sQWvLLmwKmauhbUhHgm1ZRkBiSWQbg5oCVRinBYntX9ERwpnavmX3t3uen6WkqxC1EE7Yrmbx4MfjnEQkoRigcs",
  "key25": "4GfpvzJHiao1cZgPcnYWMVGg4pVLPA5ZGGv4jd2Ub1UKcpoZcUMefQrGQwSHAEYq9syE2fqaLwkxkzdXEmNcVEKt",
  "key26": "4DJiLua8YNAW7nCQHekpDa8HJfJAniPsW6Qkf7sxDbxemgkFmcKdJNC2Ekc6GGKbCShAPVF6Cp15dVoejAfW7hLA",
  "key27": "45pgdoTLHy7j2xXCAxRpiriHpeJGpkawXacad4koEH8jv9nUn7LKCMpa3QBhfV9n1X7QYMbuw23U9xvtbwBU76xG",
  "key28": "24SmXzPP5jEfstdpufsM1W8zpSzBZE3ftSeJ4EL5o9eCf7FbLqVkppgX73gZUVGKZi1oP4bZQoK1dEaYvY4j46zx",
  "key29": "4CgC5VrUoVPU2VKPtStfeq2d9d4GkQNzQYdas77bpay4HM8UkC8B74ucHL4MSenjqRHGDhVjC9od6tgR79h1dA2e",
  "key30": "4gBtSZQqNHGH2siRovvLHccciJfw7NCuiSX7iUhotK25NfYPSNUR43bUx3fZaemcvU5k78mLCVoiUMkXKjiwFA8s",
  "key31": "qaYaBXWMKbyfmXHMNNHGHNVXXvtGTch3WHQ2UzLjCfdXpajtXEuh2jYyf9gvARTszYPWFmrm7KZtkAgKw1jJ7W5",
  "key32": "5vK1JUQ31mmMqaRN6hZGmAaMWJjQpGxmLcXnwMNqxSZZmQWMbJs1ZqHyc9pfX8ESF7y4mE9pSiKxzDQmGH1yR1o4",
  "key33": "4uRaxZEvKyUK2EdkVRPbFyNQBTDXzXmU4pa6UJMV9JiVDsEzDD7wNBLzBzfV78dYwm45v8q6tSi7ryDBhdMT5kEw",
  "key34": "4ZFJ2xVvExJ9hXAjZCaaHaw4dXathzmS9HGsiTUNC916AvbRG5UbjPDv7oAZ9y48v46Zn5BgHUZgg6hWDG8sYxsS",
  "key35": "MTKFbszYkFT8r92NkyTGdRWAztF7geKy6Vfd8Xm5KcPVmgM58qFye3KdsELgUUcZDbRjqr22JzpjqaLfQ7XQpkc",
  "key36": "2xCCfZAR9XKga8JdSoutwpzc2pqr3DdEHZT54dPJwn18uWqQThBYfSwcWuzBRqzxFP4prdG1CTTRZrdcSnW7eG4Y",
  "key37": "3ZvZaogrYpJvamM7quJWueVyJvFApnJ8kxxYXPBxVdDYb7GsT43F3xw1M5B5zq3vUAE9tnv7uA3SVwxvjSwPNTwG",
  "key38": "4MXsK35VjN5njaxni1UXQ91z6wyMJVYnbJZFwFMxUrwm6vPDzbfPE7khbWYXhJQbCXTUNJJULfew6jwaw2HduXdS",
  "key39": "hRrMBEBaLt3awySTTefcbFqCL8cAiCTCUS8MDkYJzouqcmHewM6QQABpgLXeNPuP78tkPShLt1MzqkTEeDTgYQA",
  "key40": "4rbVfwfKtwCFqv5HJVxkNcPCP9T95DeDEnTxArTHBfXEEV9ifpVYnGK5ChEr5LbckUnbAJ9nx1p6McVnnrtxWQ4L",
  "key41": "3cNMs2WBLzjQd6dkVCtK3mv61CJjPiiuJ9adjhcZjpS3cDUHe8STBaMC6kwgJq26qP79upMHMWYxnEenJv6NBVdK",
  "key42": "33vkmV4xAtjoromwrAaNPLYCdh5MVSJtftYDj6ZuULyD2xp86u79Vck1Mju3MTByoqoTuepy8rmidzvpJCCiMho8",
  "key43": "3DYaezenNUdbK84p48XwWfGDZQJkAnu7CWAPgAGMJA5wTij9rbTDFu7xD25REcHjFnNXtmr6RUKx6SzbsKgEJk2k",
  "key44": "4r7UduY47qCFv4YuFZ7EpL36JK8tEewXMr9Q2AbhvJpAHJKEphNwQdwW7WXBBN7mqKUbTihG6MYUsuQTu1B3aJeb",
  "key45": "2Yqxa4bUdiTMgQSQTZmxmKFaEhgZ2VEWoAyqo84yaRFzrD4Wh2m1qb2EGDSHhkvBYTuDuroQFa55PUDKs3iKaE7x",
  "key46": "2jLndvFwaEYcyt7Eftn817ziYBQqbpdgFof9baWEhkuB2u7Eraw5Xv9c4K1xSALDq6JJ8vKEGCGxgYaQT1ehbzc4"
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
