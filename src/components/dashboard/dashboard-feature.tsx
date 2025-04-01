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
    "2vsYMz3KP5pyb3WnYMsBzzR4CJMMD3aSsXeHxLkVSKVr5E43p1V7CfKcEBkNE4GR1ZsaDQyXrxZBF6LjMiEnTsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQDoKhkBDPEFn7rJruo5CvpELDWYQwdGMnnYqpcdfeynX19arh7ZMraAGVgCKHvLuqnto54pchMuoMXmC9tuU4N",
  "key1": "3EC7KKraFSiRAEFonhKS97Ts4rEmw4tr4ExRicDJvHbBasnffZyDAfaUxqKfWb6qGV6EnpBvaW4hQLEa7ZFFtsmd",
  "key2": "ZfkofYdGRsbZxg2Geg9YwacNA38taoyaxWrby2S7iYDXnMpnFjHn1LDRUsdLHw8nrEwjAfxx2PFZpdrjVCGNvNc",
  "key3": "3AV2xr7DCChNWjuptdVctEnZyYCXk2Fa12V1xxsfQD9bigWCaa5A7nEwfHDoTBvGi8bE4biQ3gaVUoJeE9xdLdd2",
  "key4": "3jHJzacMfrGvfPPep9bDAsWArD4cmf2kTmwuSuG52cMEhVmiAfmjzPejYzDVTJv1HZyTddVovMXK4QseDNS6EKZ8",
  "key5": "23X6qxMLUryjczpfgXCrE9Z7tdGAHy3jY4FvaN7ywAae93Eu48TJ2mDE6sP16ciYR6gD7so5D6j5sMx7rmehcKRj",
  "key6": "63DbGyjQdAiaBTVw9x8zK3C3EovSCNfE8oWwBQYqGbSaRc7vtpDPpLT3ftWBPWoRCbtnwLK4ZCecR7CVZx439akp",
  "key7": "3ecB43QAnBjD6DcH3wVrRbcbMLQ9HtdLFRY5D1SydemnH3XbhkfMcP4PvvY9RX8xs17jS1vL5csj23VWWis4YUJg",
  "key8": "5t8GsG1k31iBcm4oZa1TYTiT6KApN7j7UUxPZCjzGm6M2UbG85ncvw6aQfz6gjK45EtEpUhrCUaiuK57gu1fzgmu",
  "key9": "4oswATMMGoP5DyT3nttKX5kRCmWmrtPsPHXa2phKbQKuxz7XRHdzN9XscYyPpNKi4tATzQjaRtFz9nLRAtRRQ1HY",
  "key10": "4EADN4b3brHueFQwiwEHG2A2WHERG3MHAPpTxm4aJoGbUUgWkKhAg6H4wyZtDdqPuVgK3vQbiH93GN5uHDV4iXHC",
  "key11": "5RAjMq7SeNocHfprfMKaCLwoEsWJiS61hqB66B6SbKT8wJBLWLJ82g7KooV7VnZvBbbLEUKWoqBkgEd4U2hLMsLZ",
  "key12": "5XRwDUfQNWMH65eT12AkRzmxMaPFfChM8ZCARVc5Xt68PTx8TGAhC956tExzsQZQ3WxKNC7jmqVvuqTXrmpunPyL",
  "key13": "e74cjCA464NexqRfwTyWW4voBD1JWXMhAuiCJdUMB8Lq7JsMcXvgjniprqxmAE9NRYhqN1YhUxPmFP1GQoqWSco",
  "key14": "2E7A6nso1JCotmm2Y1XbSENUqcfpiapTMMgnXpjtvKgzmQ3KexpAzfzub8AQrUJG9YEbB2vLA9CspTLWx8APrjrj",
  "key15": "4EdKU4mRbjd36Lyi3RxPXNQPwG69Y2VKWzdDkXKfCvHxxw3i1i9dXUnkj5dtGzZdsNyYaL7PN48kwBgUu9RmWFZB",
  "key16": "2o2V7BMMppB894yW7ZTqs6bEVdT7LxwyGuy33jzW2c86wjVMtFEdq92YKXUnmb1bjA3Dq6kErhu7jd5fQXXqyhsL",
  "key17": "4fk9hYCQPxmA3pB3PPdFk27N3ohsLAdCLexGg8cPqKKhtBd9gFSp7NE7ZY3Ebj9vj1TVp2cknJFVjhiktY5sN8En",
  "key18": "3tmiaHLUG6Up5nMjThM7YysRyngYyZboTR4HxYEED8USWBTQqdN4z6GKZ43EVTAnX8YbduiySJrGoAYddTBxLhzt",
  "key19": "G6ZuX5zH6Uehfd9C4RcxCbG3HE5dbxDqjSUF74ogqjWzRZZDcytw4tnJ3ADtRHQhi75MAKtTUoYFRRvaF4142aN",
  "key20": "4JmeAvqD1bZ549Ptqa9L5pBQVVNxuAqokED6pUQ5uLVUm6qvb5XDusAdmGhCAvBaXCejxu5WJpVfcGXCw9uHUam4",
  "key21": "kAiLJQeY4kYpqEfiuyAfcEpyGgrWzjR5PbXxrwHXipzm6io2NXfSkCh3A43Dy7r2rwmfZJGr2ykWCtewJpWuZfX",
  "key22": "4czkLMBdZ7KyVkPPD4Vdm8JCdstdcnxyoRSM4t37GNoL12S9VJyEAA7YhzVaxoW48bBRDjeGunu8k2fdfFofqbkh",
  "key23": "4PCn3XNYZ6C6CEQdpjJg8xNi5rmwsqDtkA9aRHwywe5Cxi4BFPjrczFRh8MwfWU998BeBpWqD5hN6moXJZHBBxMC",
  "key24": "4GpGD3HaymrnSwMbKgrEvL66VcfhKkT2jCeLKkiHgxXyfRm54xtQNN676V7AeDqTvrTpZGU8rr52i3wzXVDQZfPx",
  "key25": "52xjA16L45R3oiaheBPz8zrGJhTuzmy5ZYL7CiXbLj97Zbop3AdCeAheSB1ay7uNmZNXN9QtbujxdRP7yFxrt1wk",
  "key26": "3u15hxCo2ZvYNjimLBHQtwZpSmQHednQJ8SmRX7uRTrLTi7yAsBJS26WWixNF3ErNjeU6QS2yamYam4C4yUYbXs4",
  "key27": "2rHmV25yBnkNGV9LGvzREuYajKRSKW2NnJh8hMNXu9j8jMCbvFKJjR3XBY6HMLzJALbYJUpHgCDwckE8Ms4ovXgc",
  "key28": "5UiCRTWWs2JDxf2gp9L6G8cUDv8bQodpq2F2yog3hGUxGpGuHkwowzpacGbCuJn9Fomgx9Fc4B8LHWjvatrApt9A",
  "key29": "5uWJ8p9zgf8TsgAnZT6CBMX3RNeisRHVq6WmGcmvVVk36h9jLrkDA6BFo4txkQExA2LSsFTTuVPS6WF97dNCKDcb",
  "key30": "3skMLaz3yquvtwyiW9uvxUNrNTYKU4CeDj2hDkhdPQL3WnRecU2Fq4fNY9eTWhTbkykwzaFnPSBZsByVXatbGrJX",
  "key31": "4K8WdS7f1Efj8VCaYo81ddy1G7UcNxskG9veupPPN5ibyqiu2Fp5MqKhFpdB2TuR752hfh3nQGSGKT7Jz7uy8hmy",
  "key32": "BGCeocjycfo2mN7uSbyDwD7JRfQwwcXjqTDEWuUMzRmc1HuUQZkRZtW2zeySPU9C4WLLkFpEu8MBxKgNBqvsQad",
  "key33": "46YcjQ3pyqLMYLcR3X6bv4P5PpaybZET74TZVGzxsCep4mybjtwLUdMP2W9CmK2fuUWXzjnwaxkVx7WbCMzx3URv",
  "key34": "4ws2mxg5ywHhVYesXgFmRjhvpkngNVFpbXj9sHojRaHHbYwSKxKJkenTQJDcwt7uatKLYSWESQs6r6RMDBUp7fWn",
  "key35": "3W8hwZ3c5qVr6wvSCACb4jVwXNpozQqHhbzELJA9DL3kdqr6uQVVMisfuF84dUXsjqbg9g9bC3xiybUua9owuMiX",
  "key36": "3GCGRG9F7pZCCnQ4XHQA8NJZJ1vKH6bqfzrxD4MyQTUX94eQLkzzMBDQ5y8ySyyZdU65uBAapw1cNbbB3xceZLmn",
  "key37": "4BK17XiuTPZnNdnPC2woKGrBWxRDQX28CS3eaFWj6J76GbJCXg9hBVdAMTWUiug85AHFsKeoBXAqXfKPUUBmLsrN",
  "key38": "41DPs3AFmUvrfCKEHmay145fmeQZhqQd6gn7AbRHPUDtBVStJ46tkq1hChoZuenBhAnUwDJ3jnQYtgDUq53oRqy1",
  "key39": "2eTDemN2WmFYMCWX9PjnfezLynaSfC5EwhcmYHaEbfPmUPP4fBVPdgaRtY9w4hv2m2YMCe4MRDVY4bUSpsn8CTpg",
  "key40": "3ELT3cmdLim9q8p8hfXFdzBykKMSV8S8xysArLyLir4Xj2TRJFhzPZ274u3ycAnKt8XqiGktg6AmFtM8ekDvq4MW"
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
