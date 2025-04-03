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
    "4qqNLvoYXAjt9nAAy6pjaqzWpSuxmFAcywgPRWG7S9cGEoMr1nRFNskuuK29yH3ENyndTc6s1udHuokuvQgXRrjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cC3R47eFNNxk5DiM3oeFTBPTCjeYQBd4VJuFEXtzZpr8TEemhfP42Emqz3zRyHMc1VSqwy7w2nBR6xYBEF4XQc",
  "key1": "3usLcP1JzMJkj4G176nkQFxzifJ17biD2mf5rCFMFK7mbf5aixfmsUjsg4PqqMsVwXchzHXJtJJsQT9JuU4x7eTU",
  "key2": "4wa7TkxXr7hJqjf6dFgpYNreMJQpErMhKnLCtSbGuJ9ms9rb5XYfr952JT3GkXuboboZDqfZ5uwbrb5eez7UVui7",
  "key3": "DHT1iLxsdL9jJB8pFbP17qFZbZhGZLLLiyVbjHPQGmouwQpVEKrFjHtQEnBDkNoxydow6Xq4ejZCQULjqXVNcvb",
  "key4": "5bfNpYVMGLrQtXWvK51TjtchNW6bLh1Z7J43rKXrec88QVkqtDE7Pn7YEM7dbHEQ7TBQxNLv2aroBoBtGY4TjL2T",
  "key5": "2VS4yAeriqjYZayMUbYy2Yf48ZXdfspP9A52q4Jzs5TzJ23UVKF5CA8CuNtwMT5Vu3TYgTZ7pKMzHeB2766QMm5",
  "key6": "5v4gfvuUrNkiQ9UAnqw6CL6eUd1Q4XtJHawDjMNmP8SELAB24yy2oktUHeSnMPUtSCP5i8j3gV8WuNpp3dcjfpQz",
  "key7": "2RMsWTzSZ5YoicE8A82vWgrxQyCGypCsyEc5EJjNrqEpsD3UZcSSegc1j673aMaZnhYA2ZAfbnHfnQCKBq7tqqkL",
  "key8": "wUsJMhFkXY46jsTc7bsNJTM88UJwLBWDQUdNXkYKC7vdRYrBxKqSHfuq3ssiTB4PVYnDA6KVxqjsmFZ9xQZYABk",
  "key9": "Syddrs651zKtjMdCHPNY1qZqE632Cm29HNGFYTpco9xVwJCtgNUXTyYTVxJGNtVuWYmZjjAj3XGpNkKfzfM2sfS",
  "key10": "fSpNoFH1qN7Hr8dHgRKYqUDUdo99H9w3ZTvqJEA9kx9NHW1RSfeFmiH7LsVEXAh3ULZJ1Pw6VJJ3yZiLeFdmyhs",
  "key11": "Q8XZPhYtoVY7UBkY2nyUdnmLsfZUXpgCS8fFxH86ZzhzZPLZ3tPYiUq4yrAzhCyjnT6Dh9NMVEft7hUC9RqWpiE",
  "key12": "5t4bbJUCepwivoCizSuLZrXYM5pePvfDM4LUeNJxuA1fowyDcAH8Q4Kmfv6FyYfGdALyw7snVB8yxm4qzLGdbYve",
  "key13": "4Aqdc89LG2jzvPaEzW6LNarQzaNeEo2sG15FWBFCt97LgMaTNFhjAf7dewMyDYCx22VeABK6X315CG3Tn1qHjmV",
  "key14": "39cLrJSFsHLYsGPpUHtWaGzC8WgWJs9a1RxzEoLFiH8nrcPNHj3KiJjdfYArGbsYJqwKdvqmvPU3fi2GmoihLno3",
  "key15": "4dzeuW8XAx9af464bVvND1oEpGSQjTiqDamMf6fXERGoc91wzoZSrNSmy2BbXfSsiM3F5taHh8bcDV49SMSRqxyP",
  "key16": "5rm8Dpx6YY14ZKip27UXjp7hK8LpTfVYFQL5CY3X1dF2X6heZHftg4QSHwoMt3NXzjNqnVHQwBRWFzpYEKo5F4jC",
  "key17": "5MV2zcmaUhyHAQpCXcwAMQHRuUF56Wq4uREpoRFEAMXuCpL6ynKURSUPHnvnco4XtXX8Kt5uXwHNta2w6pGpQxA3",
  "key18": "5CmebYFKpaBS8zsmuPmgqGYWuxUEc56qeaD7BnMGRxuUwtPcsLYh23H66m6Mwc32pgRtcJDkoU8hp2mYKzVYnhHo",
  "key19": "4pcorTYYBJJ3JnSz2MMoheSw7EVAXYaqvoNkSE7EAMkB7CGmmaAg5XRjEziSFgheha8Yr6yNpn5iBkXYnJBgPn97",
  "key20": "2tpgpDNL1tLPREqPCPWTxVjgotYPsTdrFuBRd1gZc6v2futX1drEL8sK4qiGtCk9DSdDS5SZiJ3iaYV8AUHM3Y5s",
  "key21": "5vBakC4ehf1RjJHsBaL7KKwKZP1smHYF15UpbDEwyrdNTTX7baPh1XL3AustgYD7AsN8tHeoveNee42Zz7xVtYhv",
  "key22": "2kj2KguB2H4H71g9Uv8uZRDHFikL6WuJxQgcK2DR7HmgriYZM2VMdAa1gRaWi1HX48iUgwdRMdNRD6GmNChLwkMv",
  "key23": "5Xku7QALp297dP1JxQsaRC7tuP7T8itWy7gaYzkNRrSndYtD99ab9f8QkdUoH8zGxSVkKd1Xx3toFgBSvyqHNjY1",
  "key24": "4xonkxMx4uuZhrgnXte5FHPGNLEY8hymqeXK89Da5quNpCWXHYi1RuXvwajjaDTEUXYkuKhxACMw6whnaSCayGg3",
  "key25": "5WBtUK69Zd71BPPa3Wov942gXUnBnG87Te9p4gqFzwSnhd83Mx4ZMAzTZXLHAJXDJ8ZpSGNbXsKcog3JobmPy1xa",
  "key26": "584GQ9gUcvP4cN6vpaiTQWjivFa9bmzDLxCdoWyzDgsChuyJk2GmYZzAKbi2NdX7uAgG1a69LDgXZyfaJcyxAEbW",
  "key27": "5DjTPbi5CDM41KwGxRBEZALnQt2Jz7qSDxNiLv4aTF44SjG51U5CUy64HjDEjgjpaY3n4p4AAP1KDsmCnPa2E9n5",
  "key28": "3X4ZeehXZksxonv4KABHVrX3KGPdAvasDAbpTp3DhhJjgG6rrvo1mmN9AcMndMT7fYFtYuxy9kqBEdMARAf5DeVq",
  "key29": "eYvufTMsLWaFXko42DWoufiL4Tyf6APVrRQMj1CHN2vEv28F5LcAynwQk99fexpyagwGSQ4t9fHpUPxorw2jzoc",
  "key30": "47ng5mfhfkua38YbmDGQNDcvNGeG8iXGFafqaKBL2jAkCnKmK7P8wQS1YHH7wcv9Ph4fA7UWAJUm8GjSu4iaYdCj",
  "key31": "5azN4uQSedV3g5Q5gZCpukqkD5nN5hwds5FM3Tyz48iMW9sJkrNBjZqhvb9CXTmV9rMTr51VE4BZ9Uee5s5wtfox",
  "key32": "4KdMHnuGSgfsCtJTDN4f9DWpK3dU5BmdHb2NhVFvPCC4YsfWPwJrXEK16FsYDN4ZyyyW9UV4Mp3Xa8SH18ogpAKU",
  "key33": "4fATsjd6Wm47WHyJaP4NgfQsDvrWtTXfog6hEnnvPD2KSaaZGujYCaqtxoCMWXTJ9RdmHjBwmgTKZWpqhTUfyExb",
  "key34": "jSfpbUgLXNQZD7FCdqmAGkTi6sw9AoUrdCuYQMTZoh1YCvnrqDsUaiMoNe1pQq3FUzZzGJckMN6p1dFQgoRGFbC",
  "key35": "sPoWrhhKTMf8bwAUoKBLeZsUENdjUvc8HTU6RKzkccoRcPsYjKVF3VnS7LvtxH21WL699BCkiCkTWBZnr1fUXx1",
  "key36": "65uabjh5GtZTQ1fyRueMM6PDsNGqpzu44GsKXWvQX8jCNRx2JJbyfsbFSqjvUfJWdMmiMPaeBSUHHiwwwNt3SYuA",
  "key37": "w18ME5z8TnnVTHGPcFkF1YuKJuf4Zkqw87CfuTVAALg2V2yio4as83xDMgeW8mWTpGTwC6mkkvKHQRLpVBiPQzC",
  "key38": "2VcRJAHibi4J2AapxGAvFckzHzRTchKS7gTAzUsd56imB8UcT6ufKo4A4u1tLdhW1voTgsn9TWKGLRJzWGwgMRQi",
  "key39": "2zHZDLTdBKjvPk1WNp8CM8z6NsopnwdLUQmakktyWyV6qmBDShL4rXXBsSNprwitjVUhhxqiG567tZST6Fxq1EkV",
  "key40": "BLTLaHttgpYz52Wtbi5pDdEvPD6rEA6futFUMxZjLjkfjTHyUcaP84UKZiKt5j1C2QUWhj18Ada4yiC95UWsDBb",
  "key41": "4yxejgAxoE7oThh83Aks1gaKpDmUdMkuTdmm6YUB1drCsXGsXvzvpc9M8J6Ldig5hWaLaAeZjfDm3u3ZXjKe5EWZ"
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
