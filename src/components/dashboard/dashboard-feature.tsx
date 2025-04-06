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
    "cMFMKTPuh9ikPZUYetvC5HzAzQJuLgUMqoiRgiQPKzHhrPp31T2bUggYeu5pTwxH5stSRDA8MyMic9QS9ywL1RH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cg5DC77CS2WU6LdajuBawzV4ABt5vt7YMhWy4dWbQieHYAcSoo66aMwgMvcrgdt1MVXadSA8jDpsJyrdq5ETfPZ",
  "key1": "4zJcrFuZgt3dFfWU8Ma9uSpzwyY5Doza4kWHWd9FKe5yRBpaV9tiWhw3kEHBn7AFeYzuAQWrTesNKjSAikSMNoa6",
  "key2": "2uehAvaFewstnyhaaDuNYR57bjdzESJ9DnAKggAd7v47in3Qkjs9S5LqnsK3S52AivPCJMe8dwe5dcpxBZpxwdRQ",
  "key3": "24UygBfSNBpfQLpWdeGumNAgaHwW4MTofNzJeXfJ9SJei2mRd6nmQfY6faCEMkqhtTivMvHjrfCkckvb1iqBmuaK",
  "key4": "54vDakPBRDZ6LuWDDv2xzcEFdRngtwSTqzcxK5natucf8rqnchHMGzmQ2b8aNpvYnNVZCZNSDwvhAEHFhG9Am9ZL",
  "key5": "3VQE58aPpj1GYLuNeFvwbKDpVjaHtndNRGGteixK4pHWjkgp2KBppi18eMmjL2YoxooMFAc3eFmSnSxfs97frYr4",
  "key6": "5Z69Vv52Wjm5Ct3HHm26dCsVvjYJ1xuhoFdu7YYBWHcdRANyJwvNFQhSvHFREAqAqLHVzNZj2VX5BHhGqFU4oyra",
  "key7": "4HhjRQSACAzAHhTCzaF6f5iBAJHV7Hrk7TAqzz1D9v6T4BnC3fPTRbBEgV6Z4UbCdNMWtrvzK74peBTCoh1Uzme",
  "key8": "1wkc5yF5t6dHzsvGjB73XSwJhKryDUHaJgpxr1yGKgZjgRVyYy4GBZSHYzV8pu4PdaXdA975t3UDtR3Nk7QxnSW",
  "key9": "wZc1pEjoeHNfpxnQB83gUVD2zbm2nrWmeADkxJNEXcbuGzZd9JkLyRtxRULaCgY2mXPfN2biQyC4xzLRFD5SXrJ",
  "key10": "3KyMWj9AxPuM8dgdb4RUFEniUnjYMg7RWaVVu4TmdvVZikD27fsixDFwgEtoZmiYo24wixMJUAz1dj34wivEtjSQ",
  "key11": "4mhPKriWD8Hvof6TTPbXstf2pjGdeMFSiBTSUGSLKURTKim6tfNqye184iqZbLrrGd8txfhjUAC8haF9cCSNr9xx",
  "key12": "5SyBoYKWgihHUQcfNAxAUgdcFNFMdXne4uXvnRaw45ofjo99NCnpucWxvG982qRPR9PveXusQUkr5FDXYU16puCA",
  "key13": "543jbk2Gec44pZucM7WdsGntDGPC1J7784c6NB9gQ2ghWnf1QC5abGJ7TJYCoHTMcBFTSPNNqJd1sJMJUiafJTUX",
  "key14": "DKJv5wrVVC2MbJPoVvZsw6YbLyR7r4PwNKfQaX4ZajLzzX7B6Fc8H6uzFPAwyhw76Pi25jWbMFCVeEREPzThEHV",
  "key15": "2bEZT4NtqBoxKS3YeX87kvS2hJRDZCBeyYGavm6SqJYEJbaeCWre7UG4SHr41vS9JdEYtRqBa49AA2R9KpzMgH3W",
  "key16": "44iCdeRPNLE49vzo3zYKCMyJWDVRnKooqhzn9zQSpxAKULvthb5TncGc3cGcMvkeiBEbEQddy4mQoJ2QzXd6PTAT",
  "key17": "234oQZ59wU5bPRGfCoQ3dLfHjBLYkHtUu2Xhfu9BcAELovrUAsqVAZAWXtxFficZzLjmapHfCea2s1YfGpU3ER5L",
  "key18": "3zxFsF59W9xPvpyf5TH1YEc4jJA1jWEGyo6WrDCYfQH3HBBKdYEUFPeLLqGf4tuWbDJPD2ZKqRxtMcFCLsGKqDLn",
  "key19": "8iU91G7jTTHAZxQnBHDs31b7QaZReA3cHKnhJG9tevibiESSSrWMdVqpqycfucpYrqLMKWUScHQ5iCeNxe3iHJY",
  "key20": "2z1YBePJT7kLxQxh15YeAheCjg6sWupJL8vnYCzW66TSeVCqABGRhn88UMvpikCWiH8cVhuAUDhUnXgKHhCdAvJQ",
  "key21": "2T4K5KFZocsNWDt6KZNM69PR6B7VUthGz7TocVdBzWdPLwvK8mWbWAunGLC4y7eiiZcBYdeQZmF8cwhLwk2v2RGX",
  "key22": "2GJPmKhZjoTP6fWXF2xRuwAsBHuXqXtbbdTrWdBETag1jhaTGBmaK6R2JdNx5BwD5DVJjVgaVDWr7BNiisTxhznC",
  "key23": "rfz9D1xeoGPi5XmfEs8FMuLaG5Wi7ntqbnUUstqzKQKc8hWDy9KyuuKXzDznY8tJwPgkf6vPg2GXDUhUuuoeneJ",
  "key24": "2JMmq1mWpoFGbRzfoXx3TxgbgTHm8VVinCwY2zXZrCmrFFq7Htb9tHTsDQPXy7j5rXDXAPVEzyuG11sHv5mdiA57",
  "key25": "4EDovo3FeRrzPtLv3CsYMy6pTAUj22yFjrNUnbeRCQUZ4BYKNUdxuqSqJKP2YCb97YxdHvqtgqhGKgFzCiKZuwcs",
  "key26": "5G6JYLHfbEuX1FHfV5dpBXSNzqDFQ3BgnrRLn1693ym1N3vPErUcJ3xpqzsNPh8in58V5bGsMjht6Z418TepbZoq",
  "key27": "Fk8cksZjvjbvuu7Em4T74gUrfb5SQ37rBrvhqbKZZG9mZwwc4r8qiCsZCeakLVC9Mz3p5JsMo5gDEiJfwzvr6hk",
  "key28": "4Gq5fYCHFTEADHSm2F1rQ7yecFoAdFjqHzre7KKP1DzdzVZnGYFBGuyZrDisdQghibsZTZfTXp5w2LXPRGfdNNsp",
  "key29": "5KrAsN71stwe8zRdpR7SLLLuPiz1zac4iBYtVAHFfAxFveUC8AFWFdxMswfyrB3PHqcatUkYUENQZQ6ZtVBipoSA",
  "key30": "5rgnrocDCTwch4p8MpWitJrAFnKExiGGnF2XhDfWRzgvFfJkUiAAko9SkLoZ5stMYXAw2ewdpCTEp3JHgQ7hWVFx",
  "key31": "KHcZxhbrXTj6dgryXw7t56aGmoKn662Hgq4t5a8yonwFubDZJ9QGj4sohZVcH5z9Ztyq66KDNWGfb1VQxvw47wC",
  "key32": "3suvBNrsY6HkijNwrgwScqSwEJsvLC3i8aHVnk7MRJXYjQdPhivNx975ogdmxQtWo3t1crc38BK9CiirGwYXmdVN",
  "key33": "4vToKfuUV6QrrFfn4UjJPss4qrkwbcYAYvWvZrQQpHKs1jqf5eYA7s3C2n7KfPcGyb9YJWUfnLAU3KVEbNKKGKzM",
  "key34": "2ZbENEazxSMSAj6PvQ1d1K3BNL4WZ88Y9rxZEzKegR4gYBzXeTPPf6rBVrzYNccCfUVAm9n5yU95NHs9X4FfHwSF",
  "key35": "BpNqJtFBCu1oEXR3bEDKkNQsWaXusD4W5LjzWe65GJCmg6FYD8zjB3RxPG7XLh7bLXJ8rYRJqbcyWHZTZLeTczP",
  "key36": "3tqyMA4Xh6efsaiegPuKeE1cLDkhmumFWQrhX76mmVjxBHooR2d8KznKrkmCZsQcYUn6f6sXVtayB1EbEWDgsda8",
  "key37": "4vY1GHnbH3Xd6mNkeyTAqTdcT8N17ozdW3hQUxSvMkPgZpNrPWeNmLAyxBNJN9smqM2wMmZBzEp7bhHR4CrXq4uU",
  "key38": "5je74mwLB686AjsJTca36Kcvog1m2BRoTQSSB1nAAVFV51F8MfGodjmDBKvUAf8A2p8NxxfSYgvCrMMNsph7H4jA",
  "key39": "4W5XJ1Hq5vJtgraeLm6q7YzHjkeXeFf6osX8T5T4P8ZeR3hZTL7c8QV9PMRyC38ypdK4EJY1t4BjbPcsHAwHP579",
  "key40": "2GWFLJ3g4ovgv1w5CzQ5z3ZN1MXFn4JsNeR6VvC579PNku2xoEC6ZuJnfBxbsSUJPg9BfKAPqZ5G49L8NiNSefpV",
  "key41": "2NQTYCTa7zongzZdsqDJUqbLys2rqLqW2qjnwdKqmrQcB9Lbz66TyQ3JbqrHW6tobyXzFaVkYNPfPvs898PxgDYU",
  "key42": "zg8ZdgB1ZjWYTA8xxCHwdgge8gHVwYmVvuqdjkstygAsk7Tkpyvp2k8sFtucb4U1gkHHeyt2R2AHqzBsmTMVTQr"
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
