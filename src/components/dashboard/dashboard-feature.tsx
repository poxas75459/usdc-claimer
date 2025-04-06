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
    "4YVUpiLCU4Bxna4cDFzDp2P5pfxAdg6fAL8gHvYMBR7ojtUSzcdvSPZAzuKi7nu7mVerwBQczKVj3Xt9ofwuAq31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35urqvGRAN25whGL1ZYBWsPAPsKTF1pnMCFrtNDF3rwEmwDqtfa7ydLWiKpjptozK3zpwCXBmdFw19FR5e1AaQTU",
  "key1": "4co8tcQr2oUQ2Nvh7Et4Ftr6CXcPceweFHAstYwNdzs2D2DZQv87Lj7PQR8Zk8XvFS26SF62SyrVEaj5dGaUmRdc",
  "key2": "32ppWp5c9Eksjk1LRRSf21oEuNPq7NydmRZuLHhRB2xU1YMxX9KbWdxqASXCngRAYDWBoRvt6bsVU9iMGfVUNqzN",
  "key3": "5YJSkYRhj8MQNHCGShTMGAW4mR1s3MQrCjdGEaiJK4RVvwiBe8WwckMaxtnZTZWSeEkwRzt8L55EGQor2JdFngDY",
  "key4": "5hDHy26KErHYrTxgCXLMjTx7AguNEdm1rabUyi4dyTmad9bC8fKZCogZSyxr3N9buJmN7Vr8HfrvTE9AU8Rgac1D",
  "key5": "2FBdamArqJEU1PuuDzpdAyS3v29Bca9KJmbkWkbs2e1RFQLR6Kfc5HZrdJzcjCq6H6ko5V4sngCWoBfYKEvfUD5j",
  "key6": "5XaRKeckHaQ9Ja4x5ddd8a1NzesqKTUJQdWWuSK5zHyu2aa3KNQunqe3pC5YmWnX9iua4y2jDmJ4BnoH9ZchzDor",
  "key7": "2ZSuygkhR6srXeiQYJrZJnJuCr8WdnV94iRzgrdzqiH3jjs8UEPe5rRJrznUbuMsyrtrzXtES7r54KnASGWgD5Xh",
  "key8": "wiTE7T12wZoqXjr3vtwSvV8nmX59N15SkSiia5An872Pun8rCJW4182La9EnnqTSaUzTxwG5uB9oUT58yZwAEFD",
  "key9": "3BtsNKA4Cj2iVd662Ngq6bNTFbv8tE2qmFhoAdeNLw3ENX44Fsbp7TkhJJzzmEdb7Y9YuMiEJ837q7eqVWZzmst7",
  "key10": "4GsADCb37o14YjWEyVKFvRPABHBwrJeBPgchLamFVWVvkvFb5DNE26buUBYL3fGMztUnMjSDPRkHd38wAZ7UFDdx",
  "key11": "5AKAvSGkxttxjo76FmEiMPi9NvtgvdsEU2521fDS58CNP8u3WyML7hcxXt4DaMaYTLHmmhhcRSJxikMrtFWwEQEy",
  "key12": "2vVBxwGvRud3D5gdGfysh8tC5nghXq5eZWwwAyyvuASBFPYAhA1Scipnv8NNjJHeYo3M5q15zgVSUAu3fu6wY4Mw",
  "key13": "2UDdmyjokRysff2ciPyrn5vacGWyXe5nYRXYnYPR7ZAF6qBpxKu9AnaquvknsMnJW2f7VM8dhLqHb3fKZh47nydh",
  "key14": "2GDLd4w3WxvWvBGvmgtgXuZvfqtCNSWpZVAS2jKkAmLYb7YpXhDcCFNpkRS5kM2MrLdSg22XxomLtoMhdmfs6PYF",
  "key15": "2trPRXUExFCbxZY2ozPtWDHbREm4dhQs4zKQMKsxuXF7oasntHMo4i7Hq9gBsvUim5QKv4QnyKWqwvnMWDY41gNV",
  "key16": "5iKN9a3Bhkuya637W3dmy9PGWcPon6jzM1eSMwUr55niRJY2DyzvgMvnEhsq4rKgmX79yKLyDs36nxGSLwojhy81",
  "key17": "3QKt6Xi6cCCLpUvabqEDmVXSYtksuvC8nFTuN8op22gQxBZeKPY7K2u33UDTYtfsf35pv3R3ohKWS1Yn5mWn6P5S",
  "key18": "5LuPyZ2fmTncMD8VUNcJM52U81rGx5p6fWB6RCZrSH88JcyLpJMceYfTzZUDV5sfCfwcXwHQrneC67FP7ebnnERN",
  "key19": "5z6hk6BmkPuRhAUUAsxHK2JfDHkZg5XP2BhXUY5geRc2yEEuUXM4ht7vfWYwLinYFbp52spUZALRL2jtacdF5KHP",
  "key20": "2zda5ZD3XUzRHjyF5cXCZ2MqRaZPtkV9Gnpo58LwchvNHxGwRnB9ikxkQy8gAWatFchWWAoUWWMt4amdPEHKZUiB",
  "key21": "3tZ6nA3mXnaJ8B89uqFjFuynEuFEnZAvXNoK77sxi8YsnFnjv34JnpY564jEKhGAqw22DD1A98w5VJ6eyoNEW6nG",
  "key22": "2aWH6tFnH8irMXhz9ZhTbs46dg8yxS72pvsabd1dCQFxKgcRb6kKKmjhfHQJHCvLZGQCJoJrCQQNfY64J9hPg2sG",
  "key23": "3LYAmE78fmTWjPVwA625wGEF9i9RHNdZfwgVjmEEA5wyrWB1jfF9rscHEE5MHeN5uMFYti61M9fgeP8rPDur1C4i",
  "key24": "4am4FhKTg1UFCdJW8ZtRAQAwo62wjDmWPK57BBa7X8WLPVV2DLxp567GciezdA3Lx8koH8eTnebqPjg8oqZGXoLP",
  "key25": "5mg2bTXL7A4o9wiuSNeWhqg6PzDcMqcprz6QioMu13YZ2yEzzxnUACPW7MEGeM4D1fxFZBZ7KRKBWgxJRyyspNWk",
  "key26": "mggqsUFog7xUwJGgCigN1M9BEMwyhsne9jRgjGRtD8fVVFN7FPQa4JitDSeW97y8LccVm7ZThmtuTT4Tf1gAbyS",
  "key27": "HC84RNoPwpCkcwFcdHaFotC7mfuqYRiPtUkTgdQdCYLxoRoZUwiNp9N5QJkvXdK8gmMb82QDLdu6FBVGkVLfR7p",
  "key28": "3rr5FkgTNSEcnYWRV5TvMPXgzbTggcq5YjXhWgYV1z67m3nWEDVrhZLgxzRZYN7boxGDvbCLduaiX2pjCpoaCn4L",
  "key29": "3VZBupASHHrB8A5WV9j3KAwnaFykHnfcwL7CfifBkWVLgPKTBxfvCwAgQ58BiHYkhbAEsc96j64yAsn1fJwjKH9B",
  "key30": "27kyaGGBE4tXGYie1ru7TNu9WJNyEBkjAS8EsGxmcN3BvQzMCtT13NKzKohrGesCsrz7CPNYH1yjzWq8KFJGxziQ",
  "key31": "2YiPhqi2ydaNBdV8PTNHgHLyrF2quhPVL5RpysnGcWByCzxGSCvMgckTnWK92sPq6N1VPnWRvT9CVhcP1MsfVN6L",
  "key32": "5yzpYheV4822QXpnGnV3QThd2QZ7oErQYm5YEFA7AWZaycDQaMZGqMYmHuqzj5KN3htXBFVLVdhtDWN2aJmPmUts",
  "key33": "eo9Hk6nDqMKTQfNiC5oCXhD29XvXqpBVARsWigngzes6ntgo3MW2UWUaRcb3S3UuBmkeiPUdUu3gxQTrebrpamJ",
  "key34": "5m1Si5vkNNdEdBcwk5SEFhWho64N6kbWi8jBowQxaNdbBaJjD1oTHHxvbxtNUrM8wS7XvTvRdLRYCWcXXXEQ91ys",
  "key35": "5qYHMNFpfdA3vnXFaFTm46km21LztMYNgsQskLe93ghLwz3br7Aix2i7eiMrU4jVxqfdDAFaEtykCxREZYGkdJYy",
  "key36": "U9gAHAswP1s5uzbgSKrDe2Pmf2EEoDHKNHoFYewqVbhQE13v3ww8NGPpDfiBLzDA6ARLuJvvzNyh1u4C7C8qjz3",
  "key37": "EwAcH3GH2eKgNp5LbPyehJpLydCoapiJ5WMTNHtmMaRdERzQpRMzEvenwY9sB2KJXdW2ysuNNjdTDfegX4M3wcZ",
  "key38": "5pjCjcoTYXBnu7A6Vftzw6siDYT1wed1oBgrKs4eFt5QnmLzm5XBhSbAab2jnjxL6rKwULoxTg3wsjssHLGzr17Z",
  "key39": "5SBKJBhabVSbQoiGvnAmJQmkjSha7ixcNJdYbwAPxrRis2Yp1x7sFvBNeGABxBepzRz6zfWVbMVsuQs19RUdmX76",
  "key40": "5gB4UsVLdamQcxWPcHbSjuHM1Vj3n1ADpGizz4hMCh35YoDJvjKowzJvFYQoimS2udEFdMW3mor4axknpqL6EYJC",
  "key41": "29pdSsCF8uUPKymnUdV9jd7UK8VouVRxsbFu9tGhfbGfHSTNQFJ4uN6bua8rv4obJe651ddggx3xWyQHnx3dYHXq",
  "key42": "SqopLTn4mWq1pGGfCyYc9nby4zzfVeZjwM4JzBeGvtHq7wy58bDAJN6HU8ZXMemyuzv3wYgUZH1aJeq1RxoHAcu",
  "key43": "5QVDcJLBCXVvX34nQaGrLuFpHb7KtTYDgz6HSfMhCfjneF8XAsJs4djWE5CsggLd1nuP46qB48CK4KzjiT63BuGQ",
  "key44": "3CGEjijmHyEjgRiP8CCoEyy41PZbi7SKVrXjA18iq7UqPgqKmfe2bHLox5Kf2F7guHrcmWDPRb4fDg3Dqk2KHwPy",
  "key45": "48m2ywSPKatieL9aGDwMgMRyQsMKnKkyF9sa9emgcFFT4J4fKbFDsBnrjCQgM7xowrYzNVzxsEude91z4AZLcAV2"
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
