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
    "4FzWpDdrspCgrrXshfwugadQ3LGJ3QRbG1jPsysayV7Btx7GjGnKqSmeePRXhZG7LCjggu8CrcsqTZaJhQLNk1Gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oC3qKTuJDeK92LEBMCjRpcaqQaENiebpkV6rm1mfAW5Te4dyzDb9ycLvgtgqspt5K9NvmANv8C7raPSgb97LxDK",
  "key1": "67aU111cgXmZFRH4tZYVJwdXoMyEPztBNn259nPtrk3EC6csskL5386LrmbGY3xCYuuK7DB16V6gwoine5S1S9mo",
  "key2": "2JhAZuj4wze8KDf1Fuo9wwkheUFLeVAfxbuDWkTv2iC9s29RQRJ5XqptsY8AN7kHLZYtVvqwYbLmuhEDNstFxDxc",
  "key3": "5iCAQE1CeNDaGuzWse3qcndpnYKYE6pWQ7p5JHzPXDeZzWXTTUg91whurwF5Wa2k3h2aWg9cMvjEpZf3CBfzqFg5",
  "key4": "5cYvfy6cbKxzAhN7i3dQpvc1F1ANdL7737jAJcUHwFHjb74MJ3zHqpFX1rntsEzWP74NkQxL94cRQy5o5suaRfH8",
  "key5": "2dUtpfqTpHY2fuPx3DVdZ6xhjJ2jMNB9oWgHkbE7mqcaQV2mbNpqSy3xw9QSNtkvxzhNUXCkZkRV7Egu84jVPFfn",
  "key6": "3k7MRMrXDuRLz6pLeUTdMD2k2edkN7wssfMiXdS1wnESQqSYuT3Pcjym6uXiXshjdZz521vpcB1aJB759q6hUmwg",
  "key7": "3nfSbV9zadmZAQFFPbmugMdWotfyA7qWJzM2n1nxEY2b3NuvVw1Kt5EYrTCxi2EhkPcM1nmNzGEthztMGAsm3yh2",
  "key8": "3jjQTxXdWpDQky2QsctVKBHtJGu2L9GVfegg4Fhu4fSDji9FN4nEEvwexcWeY3pcDgidajeBQNzz9AT5mQkEaCYC",
  "key9": "3ufEusSutYRAo31jnZNjWoikj7653gqsVsRVCyEyrqz3P4UF8Gp6PWc8KHpMm1RfrzCy4wJSM8Bt6f7sPkcbgiu1",
  "key10": "27nzVhkYJNcEexyFV9Ycx1mDHtWixeBsuutkQSxdbxWt8HbBitCBHv7EaibXUjqS2EkzKaiLDGTBYfEudRPCny5o",
  "key11": "2j59t2KsAZy39Wk4VaoVtaHy5BMgi7tHJKEw6TNoKL3Mu5PRm2tgPd5BLyHiJP59aeTLU3nwG8iqrRNasaeAqvBQ",
  "key12": "5kjPHxUTdY5FUcwQ99XAgbShcwgJePHMUojUgumXGRRxApcnktTu7V3FWuD9fdEtgjxj14aFhJ7BR39n54sziEFs",
  "key13": "23QNXzmYemJVr6NYaXX7w43qAi5RXGnY9MACwiSHyUGfUuUFcSnkSaX5g3QP7KNyXMpz8QcZcwPsc4JRDHY7BNUg",
  "key14": "4svJqhEMv1n2e2NtbWnk9LyjnHFJHAivqYzrZGPPhyiaqkNsacVYvaxtdTuSC8LurwrvmK9zb4DkKRv7kRVBQAG",
  "key15": "2RFHXp3AJqdUDd4Wrw3QQJG9USyGSSncBEnBC2PSx9nAoUGetv6dyQDPKXxwete6MbXftBH51m3rSawieqtwjRxu",
  "key16": "YoF7YQJksNU9fKfvn5JoK6WEsaqrBgN28NL4388KCXtZrPZ1QcTTWsMAoZvbNRMmkaPqwfpTBizJamakk7MT1mF",
  "key17": "Wa6ie2rydxVHA66tNLFRPT8T6vNaWEci3N3fRmY1T5DfMWU9NHtHoGP8jtUzn3GvdPmnGB32KfZXnCm1MD5bjV6",
  "key18": "2cWeSSCRA8uHg8skjiHJPWQPtJqX612d5k2Ew3fMtgD7tWQxynvUAHHgmqS3ZNhX1FmHYKLMYNe3qrsH5iTS65un",
  "key19": "2nKeiivP5KNpzCH46vGwm5efeKbf6RzV9FuCQ3XX19RjsNwfuZXH4aZL8hpP8PeFF7eGnpdEA27B2H3raNy6r8Dg",
  "key20": "61E9uSPdgvFwRgSUVZwmfXdCha8HxHpwfsyauFJ8ySzaGHuPM7ubtCZguF2W78ita1p3hw28yswn9bpR78Y7JAUW",
  "key21": "5UfgydGiYLZqVkADL22WQwWHU5m3BUz922Uj9FhMg5d7CmeLxejskSvXsmCrwLqWeDjtRHRWLMVaT71SX3zP2pGU",
  "key22": "5dDaXpzo6MJKgab3xiGD2KHtgNavZzzGSBDZ1zgyai326byRibLjWnJ5q6eW4dJmbg8MYkej8hqsM6rd2zcNqmY4",
  "key23": "5NRHSGFgLtC3FfLjG5yshtS4TVZEQtftJxw9it5NapdGnu7zSdVWCEc1nkFNHrwhDtXYDpMBanCBc8SB53wMizS9",
  "key24": "52asETWUjn7mePGC5N5jNr4S6x2ian3TXrKPEUBYw4i55rK5jeJEndG9nWKVDwGk9g5rm7CtemKMT36JEucCNfu8",
  "key25": "48NQVotxW4ARgCyQQztk9uzjVWiAPPnYz7mT6cHTwojaHU6JZExD6g6LkuAm3VcBseUoJfqmpzjGKYqBdQcQ1DUv",
  "key26": "3CooASCy3ybKVayaqWrzM9pb4EGX3nkCCjYXkp5YXVcrpxZoGQr24tRBiM1zkqsrqkzJzAuJY6vkW6qWxSbbuMHv",
  "key27": "xKExXiJwBitK4FZWRoLXWUh9KbG1aZBqV9E2SYNhM41QcVE6yvNPRNjwv9xja6XrATsCnPtKrA1xmVnc272Jwve",
  "key28": "3XAsP57RFJpvTNfaSPCc7NrcGCBf9XRQUMvA6WQrHSmrTvpFr1DWBHE1B7QrYcWcZGCBTN9C1PJ7R8W2VuvWaoYb",
  "key29": "5VQhaNmxBpERUYFYC3g2PqucJFB25TDsVuMjAxJwmwfoKQLFYMg1snswxxV3gwMjKrYegPAoDQcYBfuKdDCB7Dtm",
  "key30": "4gMZhjUL8n6whYydmrCu8taYfMbBFUyAXAEJA2ZFB3X9VTi7Ckkeb8JiBR9muwjipJs8TAopUShZ7LWcTGPRk25J",
  "key31": "4oLoDB3HupnyPgADD3a5J81gskugMd1YPvgv6KsVUXqsaViYfJrKeFdd4jJPemgCncpubRH2m2vrSmYCDPRBRE6o",
  "key32": "AojwFiycBpaT9wQNGPRunX9JSTYWAM7mKYquM1QSggjpQTWcXMjjjo1e8YBrbujThKQ9PwTgHhzdmarA46otwfT",
  "key33": "5ZCNomDJ5K3PzHXF7gKbauZbyZ8nUs6P1qJXBxd3QDikhugasaKR65CarAko8NDCGU9STamiWLXRrTy4Vpr8zVvB",
  "key34": "2ajKtQNMAv7W4tzsAELdqiGfgLFaqB4ofkfbt7ZX7dxZzxDrCprCYqPErdsojD6sSqUNyrCjRRYiL9Zq9FT33b36",
  "key35": "23naCjZkBGX9doy48Msi5uFHpyDgF5reRpcAd79JPhKMXAf2TtztKDfdtoJwcacwDTY3hV7oD5aQ6PrYe6S5pmum",
  "key36": "n9kcZZNQXztM1H9hrKfeaGyYpK7W65J185Ui37JjzcY9ak15XCVMo3C9PtDRJDoyZmVVSRuKhRGT7F7wn1GVf2N",
  "key37": "2LhvyDJTy5YnX1M9gdW7VL4CcZfuV5wGujyQ9KFCmiDBHjeovouZjtvKCUj5RDYiNBFxzbjags1ykCMRLyge7gcN",
  "key38": "fLc2hZxKgBuZE3qFY8whirWnzj3q1V5zNKsztgDjUkZ1qtGz32FbWCEsPMMvCdQDVRUCesqCQeyxYfeC3DmuPyz",
  "key39": "35LDf93DbGsiLd8zWLQ6AkMGRoBKhXeKCMkyrxc4FqNaQ9QrHddPrGExpUX4qVL14eH4yty4fjpHo5m5zPMidnFS",
  "key40": "4hbur3oBDXt5qCZKKagK4jHR1fjoLrifAeeXj4DcGparvN3SK4BW991J6eMruhbf1vsR5VWGzTy9aygsmjtKsiDw",
  "key41": "2CXo327Q3gqfkwj5JaJA8sc14N1X6QmJd56rVpeiV6c565Apr862fWUDPBkpBN1bjWFWUNF7aJmJgQaK1dXdahgL",
  "key42": "3KYqUWxkhAzeVCTeafXHxMAGkEaBLwNWTDLUhzLsXnEKtj9ZiWyB9qjPM9Fc7T7gkyqrNQLj7vyCTCMR2MK3LAmg",
  "key43": "2zSvMf1Qk23qaEaCajdgpdVG59EaMdRojjjSpFTh8n3DTvw1CjSNfdgdf4uXYwH7bFxYd49uMspfnNnpXjMUn3iH",
  "key44": "4hQGbfDoFL7FVxsni21JVYBVEtqP8NEgQwPyqTEZ9kF22u3nnc5zYxKoCuuvhCt2xcEwZE2G5nArdVr6SedRRZoe",
  "key45": "35KNWrUateAhdsGKME1HF1xjwQZdB9F1E5s493ez8K9cGcRkvGof8F4i1fhtb2gfcenQhrnjQuJVJR7AmbjtgkVK"
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
